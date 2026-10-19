#!/usr/bin/env python3
"""Budgeted, resumable native-video Glimpse benchmark using the retest rubric."""
import argparse
import hashlib
import json
import os
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import requests

from run_openrouter_gesture_pilot import (
    ROOT, OPENROUTER_URL, load_dotenv, openrouter_payload,
    render_prompt, extract_json_object,
)
from validate_results import validate_result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--pilot', action='store_true')
    parser.add_argument('--budget', type=float, default=5.0)
    parser.add_argument('--reasoning', choices=['default', 'off'], default='off')
    args = parser.parse_args()
    for name in ['.env', '.env.local', 'env.local']:
        load_dotenv(ROOT / name, override=True)
    api_key = os.environ['OPENROUTER_API_KEY']
    model = 'elorian/glimpse'
    catalog = requests.get('https://openrouter.ai/api/v1/models', timeout=45)
    catalog.raise_for_status()
    metadata = next(m for m in catalog.json()['data'] if m['id'] == model)
    manifest_path = ROOT / 'tests/retest_20260915/all_videos_neutral.json'
    prompt_path = ROOT / 'prompts/gesture_rating_prompt_human_aligned.md'
    manifest = json.loads(manifest_path.read_text())
    prompt = prompt_path.read_text()
    out = ROOT / 'tests/retest_20260915' / ('elorian-glimpse-no-reasoning' if args.reasoning == 'off' else 'elorian-glimpse')
    out.mkdir(exist_ok=True)
    usage_path = out / 'openrouter_gesture_rating.usage.jsonl'
    max_tokens = 4096 if args.reasoning == 'off' else 16384
    # Reserve a whole context window per pending request, independent of visual tokenization.
    reserve = metadata['context_length'] * float(metadata['pricing']['prompt']) + max_tokens * float(metadata['pricing']['completion'])
    if not (out / f'run_config_{max_tokens}.json').exists():
        (out / f'run_config_{max_tokens}.json').write_text(json.dumps({
            'model': metadata, 'delivery': 'native video_url, provider default sampling',
            'temperature': 0, 'max_tokens': max_tokens, 'budget_usd': args.budget,
            'reasoning': args.reasoning,
            'prompt_sha256': hashlib.sha256(prompt_path.read_bytes()).hexdigest(),
            'manifest_sha256': hashlib.sha256(manifest_path.read_bytes()).hexdigest(),
        }, indent=2) + '\n')
    # Spread ordinary clips across the corpus; include three mismatched-label controls.
    pilot = [manifest[i] for i in [0, 3, 21, 38, 49, 80, 124, 134, 141, 148]]
    videos = pilot if args.pilot else manifest
    spent = 0.0
    for previous_usage in out.parent.glob('elorian-glimpse*/openrouter_gesture_rating.usage.jsonl'):
        for line in previous_usage.read_text().splitlines():
            record = json.loads(line)
            spent += record['accounted_cost_usd']
    pending = [v for v in videos if not (out / f"{Path(v['title']).stem}.rating.json").exists()]

    def evaluate(video):
        stem = Path(video['title']).stem
        payload = openrouter_payload(model, render_prompt(prompt, video), ROOT / video['local_path'],
            reasoning=args.reasoning, temperature=0, top_p=None, top_k=None, max_tokens=max_tokens)
        response = requests.post(OPENROUTER_URL, headers={
            'Authorization': f'Bearer {api_key}', 'X-Title': 'GestureCheck Glimpse benchmark',
        }, json=payload, timeout=180)
        response.raise_for_status()
        body = response.json()
        # Persist before parsing, including usage for invalid/truncated responses.
        response_path = out / f'{stem}.response.json'
        if response_path.exists():
            previous = 1
            while (out / f'{stem}.response.attempt{previous}.json').exists():
                previous += 1
            response_path.rename(out / f'{stem}.response.attempt{previous}.json')
        response_path.write_text(json.dumps(body, indent=2) + '\n')
        return video, body

    failures = 0
    with ThreadPoolExecutor(max_workers=4) as pool, usage_path.open('a') as log:
        for start in range(0, len(pending), 4):
            batch = pending[start:start + 4]
            if spent + reserve * len(batch) > args.budget:
                raise RuntimeError(f'Budget guard stopped before next batch; accounted spend ${spent:.4f}')
            futures = [(v, pool.submit(evaluate, v)) for v in batch]
            for video, future in futures:
                try:
                    _, body = future.result()
                except Exception as exc:
                    # Unknown billing: conservatively charge the reservation, with no automatic retry.
                    body = {'error': str(exc)}
                usage = body.get('usage') or {}
                cost = usage.get('cost')
                accounted = float(cost) if cost is not None else reserve
                spent += accounted
                log.write(json.dumps({'model': model, 'video_file': video['title'],
                    'target_word': video['target_word'], 'usage': usage,
                    'accounted_cost_usd': accounted, 'max_tokens': max_tokens,
                    'error': body.get('error')}) + '\n')
                log.flush()
                stem = Path(video['title']).stem
                try:
                    raw = body['choices'][0]['message'].get('content') or ''
                    (out / f'{stem}.rating.raw.txt').write_text(raw)
                    parsed = extract_json_object(raw)
                    errors = validate_result(Path(video['title']), parsed)
                    if parsed.get('video_file') != video['title'] or parsed.get('target_word') != video['target_word']:
                        errors.append('Video ID or target word does not match request')
                    if errors:
                        raise ValueError('; '.join(errors))
                    (out / f'{stem}.rating.json').write_text(json.dumps(parsed, indent=2) + '\n')
                    print(f"OK {video['title']} ({video['target_word']}), cost=${accounted:.5f}, total=${spent:.4f}", flush=True)
                except Exception as exc:
                    failures += 1
                    print(f"FAILED {video['title']}: {exc}; total=${spent:.4f}", flush=True)
            if failures:
                raise RuntimeError('Stopping after failed batch for inspection')
    print(f'Done: {len(pending)} new clips; total accounted cost ${spent:.4f}', flush=True)


if __name__ == '__main__':
    main()
