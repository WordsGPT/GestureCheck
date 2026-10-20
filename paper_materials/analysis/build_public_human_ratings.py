"""Export only unlinked item/cohort/dimension/rating rows from the controlled workbook.

Run locally with the hash-matched workbook. Never writes participant identifiers,
demographics, response sequences, free text, or a participant crosswalk.
"""
from pathlib import Path
from collections import Counter
import argparse
import csv
import hashlib
import json
import openpyxl

HERE = Path(__file__).resolve().parent

def build(workbook):
    frozen = json.loads((HERE / 'frozen_inputs.json').read_text(encoding='utf-8'))
    expected = frozen['human_audit']['workbook_sha256']
    assert hashlib.sha256(workbook.read_bytes()).hexdigest() == expected, 'Wrong source workbook'
    dims = frozen['dimensions']
    mapping = {i['source_title']: i for i in frozen['items']}
    book = openpyxl.load_workbook(workbook, read_only=True, data_only=True)
    records = iter(book['Clean Ratings'].values)
    headers = next(records)
    counts = Counter()
    retained = set()
    evaluations = 0
    for values in records:
        if not any(v is not None for v in values):
            continue
        row = dict(zip(headers, values))
        assert row['language'] in ('de', 'en', 'it', 'ja')
        item = mapping[row['video_title']]
        assert item['human_n'] > 0
        retained.add(row['participant_code'])
        evaluations += 1
        for dim in dims:
            value = row[dim]
            assert value in (1, 2, 3, 4, 5)
            counts[item['id'], row['language'], dim, int(value)] += 1
    book.close()
    assert evaluations == 4600 and len(retained) == 230
    out = HERE / 'human_ratings_public'
    out.mkdir(exist_ok=True)
    columns = ['pairing_id', 'cohort', 'dimension', 'rating']
    # Each dimension is independently expanded from a frequency table. Original
    # trial order and links among dimensions/participants never reach the export.
    with (out / 'human_ratings_unlinked.csv').open('w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f, lineterminator='\n')
        writer.writerow(columns)
        for key, n in sorted(counts.items()):
            writer.writerows([key] * n)
    with (out / 'human_rating_counts_by_cohort.csv').open('w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f, lineterminator='\n')
        writer.writerow(columns + ['n'])
        for item in sorted(mapping.values(), key=lambda i: i['id']):
            if not item['human_n']:
                continue
            for cohort in ('de', 'en', 'it', 'ja'):
                for dim in dims:
                    for value in range(1, 6):
                        key = item['id'], cohort, dim, value
                        writer.writerow([*key, counts[key]])
    manifest = {
        'version': '1.0.0', 'release_date': '2026-10-20',
        'source_workbook_sha256': expected,
        'source_sheet': 'Clean Ratings',
        'retained_evaluations': evaluations, 'retained_participants': len(retained),
        'human_pairings': 148, 'standard_pairings': 134, 'incorrect_label_pairings': 14,
        'dimensions': dims, 'individual_dimension_ratings': sum(counts.values()),
        'public_columns': columns,
        'participant_linkage_released': False,
        'cross_dimension_linkage_released': False,
        'row_order': 'Canonical frequency expansion, not collection order',
        'files': {},
    }
    for name in ['human_ratings_unlinked.csv', 'human_rating_counts_by_cohort.csv']:
        p = out / name
        manifest['files'][name] = {'sha256': hashlib.sha256(p.read_bytes()).hexdigest(), 'bytes': p.stat().st_size}
    (out / 'release_manifest.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({'evaluations': evaluations, 'people': len(retained), 'dimension_ratings': sum(counts.values()), 'public_columns': columns}))

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('workbook', type=Path)
    build(parser.parse_args().workbook)
