"""Verify the public release and reproduce statistics without the private workbook."""
from pathlib import Path
from collections import Counter, defaultdict
import csv
import hashlib
import json
import numpy as np
from scipy.stats import t

HERE = Path(__file__).resolve().parent
OUT = HERE / 'human_ratings_public'

def ordinal_alpha(counts):
    observed = np.zeros((5, 5))
    for c in counts:
        n = c.sum()
        if n > 1:
            observed += (np.outer(c, c) - np.diag(c)) / (n - 1)
    marginal = observed.sum(axis=0)
    total = marginal.sum()
    expected = (np.outer(marginal, marginal) - np.diag(marginal)) / (total - 1)
    distance = np.zeros((5, 5))
    for j in range(5):
        for k in range(j + 1, 5):
            distance[j, k] = distance[k, j] = (marginal[j:k+1].sum() - (marginal[j] + marginal[k]) / 2) ** 2
    return float(1 - (observed * distance).sum() / (expected * distance).sum())

def verify():
    frozen = json.loads((HERE / 'frozen_inputs.json').read_text(encoding='utf-8'))
    manifest = json.loads((OUT / 'release_manifest.json').read_text(encoding='utf-8'))
    dims = frozen['dimensions']
    items = {i['id']: i for i in frozen['items'] if i['human_n']}
    for name, expected in manifest['files'].items():
        assert hashlib.sha256((OUT / name).read_bytes()).hexdigest() == expected['sha256']
    counts = Counter()
    with (OUT / 'human_ratings_unlinked.csv').open(encoding='utf-8', newline='') as f:
        reader = csv.DictReader(f)
        assert reader.fieldnames == ['pairing_id', 'cohort', 'dimension', 'rating']
        for r in reader:
            assert r['pairing_id'] in items and r['cohort'] in ('de', 'en', 'it', 'ja') and r['dimension'] in dims
            assert r['rating'] in ('1', '2', '3', '4', '5')
            counts[r['pairing_id'], r['cohort'], r['dimension'], int(r['rating'])] += 1
    compact = Counter()
    with (OUT / 'human_rating_counts_by_cohort.csv').open(encoding='utf-8', newline='') as f:
        reader = csv.DictReader(f)
        assert reader.fieldnames == ['pairing_id', 'cohort', 'dimension', 'rating', 'n']
        for r in reader:
            key = r['pairing_id'], r['cohort'], r['dimension'], int(r['rating'])
            assert key not in compact
            compact[key] = int(r['n'])
    assert counts == +compact and sum(counts.values()) == 32200
    assert len(compact) == 148 * 4 * 7 * 5
    stats = {r['dimension']: r for r in frozen['human_statistics']}
    videos = sorted(items)
    index = {v: i for i, v in enumerate(videos)}
    report = {'checks': 'passed', 'dimension_ratings': sum(counts.values()), 'human_pairings': len(items),
              'participant_linkage': 'Not released; participant-clustered uncertainty cannot be independently recomputed',
              'statistics': [], 'response_distributions': [], 'cohort_contrasts_from_saved_clustered_estimates': []}
    # These checks compare public distributions with all saved item/cohort means.
    for item in items.values():
        for j, dim in enumerate(dims):
            c = np.array([sum(counts[item['id'], lang, dim, r] for lang in ('de', 'en', 'it', 'ja')) for r in range(1, 6)])
            assert c.sum() == item['human_n']
            assert abs(c @ np.arange(1, 6) / c.sum() - item['human'][j]) < 1e-12
    by_title = {i['source_title']: i['id'] for i in items.values()}
    for saved in frozen['cohort_item_means']:
        v = by_title[saved['source_title']]
        for j, dim in enumerate(dims):
            c = np.array([counts[v, saved['language'], dim, r] for r in range(1, 6)])
            assert c.sum() == saved['n']
            assert abs(c @ np.arange(1, 6) / c.sum() - saved['human'][j]) < 1e-12
    contrasts = []
    for dim in dims:
        item_counts = {v: np.array([sum(counts[v, lang, dim, r] for lang in ('de', 'en', 'it', 'ja')) for r in range(1, 6)]) for v in videos}
        all_alpha = ordinal_alpha(list(item_counts.values()))
        standard_alpha = ordinal_alpha([c for v, c in item_counts.items() if not items[v]['control']])
        assert abs(all_alpha - stats[dim]['alpha_all']) < 1e-12
        assert abs(standard_alpha - stats[dim]['alpha_standard']) < 1e-12
        # Weighted normal equations reproduce coefficients from unlinked data.
        # No substitute SE/p-value is computed without participant clusters.
        xx = np.zeros((151, 151)); xy = np.zeros(151)
        for v in videos:
            for lang in ('de', 'en', 'it', 'ja'):
                c = np.array([counts[v, lang, dim, r] for r in range(1, 6)])
                design = np.zeros(151); design[0] = 1
                if lang != 'de': design[1 + ('en', 'it', 'ja').index(lang)] = 1
                if index[v]: design[3 + index[v]] = 1
                xx += c.sum() * np.outer(design, design)
                xy += (c @ np.arange(1, 6)) * design
        beta = np.linalg.pinv(xx) @ xy
        coeffs = []
        for j, lang in enumerate(('en', 'it', 'ja')):
            saved = stats[dim]['cohort_coefficients'][j]
            assert abs(beta[j + 1] - saved['b']) < 1e-9
            coeffs.append({'cohort': lang, 'b': float(beta[j + 1])})
            contrasts.append({'dimension': dim, **saved, 'ci_low': saved['b'] - t.ppf(.975, 229) * saved['se'], 'ci_high': saved['b'] + t.ppf(.975, 229) * saved['se']})
        report['statistics'].append({'dimension': dim, 'alpha_all': all_alpha, 'alpha_standard': standard_alpha, 'cohort_coefficients_from_public_data': coeffs})
        for lang in ('de', 'en', 'it', 'ja'):
            c = np.array([sum(counts[v, lang, dim, r] for v in videos) for r in range(1, 6)])
            report['response_distributions'].append({'dimension': dim, 'cohort': lang, 'n': int(c.sum()), 'endpoint_percent': float((c[0] + c[4]) / c.sum() * 100), 'midpoint_percent': float(c[2] / c.sum() * 100)})
    pvalues = np.array([r['p'] for r in contrasts]); order = np.argsort(pvalues)
    adjusted = np.empty(21); adjusted[order] = np.minimum(1, np.maximum.accumulate((21 - np.arange(21)) * pvalues[order]))
    for r, p in zip(contrasts, adjusted): r['p_holm'] = float(p)
    report['cohort_contrasts_from_saved_clustered_estimates'] = contrasts
    (OUT / 'validation_results.json').write_text(json.dumps(report, indent=2) + '\n', encoding='utf-8')
    print('PASS: 32,200 ratings; 148 pairings; all item/cohort means; 14 alpha estimates; 21 cohort coefficients; response distributions. Clustered SEs are saved estimates, not recomputed.')

if __name__ == '__main__': verify()
