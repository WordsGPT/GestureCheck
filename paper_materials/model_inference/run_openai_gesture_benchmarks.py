#!/usr/bin/env python3
"""Run gesture ratings for OpenAI models (Luna, Sol, Astra) via OpenRouter."""

import argparse
import base64
import json
import os
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Any

import cv2
import requests

ROOT = Path(__file__).resolve().parents[1]
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"


def load_env():
    for p in [ROOT / ".env", ROOT / ".env.local", ROOT / "env.local"]:
        if p.exists():
            for line in p.read_text(encoding="utf-8").splitlines():
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def extract_frames(video_path: Path, fps: float = 2.0, resize_width: int = 512) -> list[str]:
    cap = cv2.VideoCapture(str(video_path))
    frames = []
    interval_sec = 1.0 / fps
    t = 0.0
    while True:
        cap.set(cv2.CAP_PROP_POS_MSEC, t * 1000)
        ok, frame = cap.read()
        if not ok:
            break
        h, w = frame.shape[:2]
        rh = int(h * resize_width / w)
        frame = cv2.resize(frame, (resize_width, rh))
        _, buf = cv2.imencode(".jpg", frame, [cv2.IMWRITE_JPEG_QUALITY, 80])
        b64 = base64.b64encode(buf.tobytes()).decode("utf-8")
        frames.append(b64)
        t += interval_sec
    cap.release()
    return frames


def extract_json_object(text: str) -> dict[str, Any]:
    stripped = text.strip()
    if stripped.startswith("```"):
        stripped = re.sub(r"^```(?:json)?\s*", "", stripped)
        stripped = re.sub(r"\s*```$", "", stripped)
    try:
        parsed = json.loads(stripped)
    except json.JSONDecodeError:
        match = re.search(r"\{.*\}", stripped, flags=re.DOTALL)
        if not match:
            raise
        parsed = json.loads(match.group(0))
    if isinstance(parsed, list) and len(parsed) == 1 and isinstance(parsed[0], dict):
        parsed = parsed[0]
    return parsed


def evaluate_single_video(
    item: dict[str, Any],
    prompt_template: str,
    model: str,
    output_dir: Path,
    api_key: str,
    fps: float,
    max_retries: int = 5,
) -> dict[str, Any]:
    vid_file = item["title"]
    stem = Path(vid_file).stem
    json_path = output_dir / f"{stem}.rating.json"
    raw_path = output_dir / f"{stem}.rating.raw.txt"

    if json_path.exists() and json_path.stat().st_size > 0:
        return {"status": "skipped", "video": vid_file, "stem": stem}

    local_path = ROOT / item.get("local_path", f"assets/rating-videos/{vid_file}")
    if not local_path.exists():
        # Search in alternate locations
        alt_path = ROOT / "assets" / "rating-videos" / item.get("source_title", "").replace(".avi", ".mp4")
        if alt_path.exists():
            local_path = alt_path
        else:
            raise FileNotFoundError(f"Video file not found: {local_path}")

    frames = extract_frames(local_path, fps=fps)
    if not frames:
        raise ValueError(f"No frames extracted from {local_path}")

    target_word = item.get("target_word", "UNKNOWN")
    prompt = prompt_template.replace("{target_word}", target_word).replace("{video_file}", vid_file)

    content = [{"type": "text", "text": prompt}]
    for b64 in frames:
        content.append({
            "type": "image_url",
            "image_url": {"url": f"data:image/jpeg;base64,{b64}"}
        })

    payload = {
        "model": model,
        "messages": [{"role": "user", "content": content}],
        "max_tokens": 1500,
        "response_format": {"type": "json_object"}
    }

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://github.com/Shodan/GestureCheck",
        "X-Title": "GestureCheck Benchmark",
    }

    last_err = None
    for attempt in range(1, max_retries + 1):
        try:
            resp = requests.post(OPENROUTER_URL, headers=headers, json=payload, timeout=120)
            if resp.status_code != 200:
                raise RuntimeError(f"HTTP {resp.status_code}: {resp.text[:300]}")
            body = resp.json()
            raw_text = body["choices"][0]["message"]["content"]
            parsed = extract_json_object(raw_text)
            
            # Basic validation
            if "ratings" not in parsed:
                raise ValueError(f"Missing ratings object in output: {raw_text[:100]}")

            usage = body.get("usage", {})

            # Write outputs
            raw_path.write_text(raw_text, encoding="utf-8")
            json_path.write_text(json.dumps(parsed, indent=2, ensure_ascii=False), encoding="utf-8")

            return {
                "status": "success",
                "video": vid_file,
                "stem": stem,
                "target_word": target_word,
                "parsed": parsed,
                "usage": usage,
                "frames": len(frames)
            }
        except Exception as e:
            last_err = e
            wait_time = 3 * attempt
            time.sleep(wait_time)

    raise RuntimeError(f"Failed {vid_file} after {max_retries} attempts: {last_err}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", required=True, help="Model ID on OpenRouter")
    parser.add_argument("--output-dir", required=True, help="Directory to save rating json files")
    parser.add_argument("--manifest", default="tests/retest_20260915/all_videos_neutral.json")
    parser.add_argument("--prompt", default="prompts/gesture_rating_prompt_human_aligned.md")
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument("--fps", type=float, default=2.0)
    parser.add_argument("--limit", type=int, default=0)
    args = parser.parse_args()

    load_env()
    api_key = os.environ.get("OPENROUTER_API_KEY")
    if not api_key:
        print("ERROR: OPENROUTER_API_KEY not set!", file=sys.stderr)
        sys.exit(1)

    out_dir = Path(args.output_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    manifest_path = ROOT / args.manifest
    prompt_path = ROOT / args.prompt
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    prompt_template = prompt_path.read_text(encoding="utf-8")

    if args.limit > 0:
        manifest = manifest[:args.limit]

    print(f"============================================================")
    print(f"BENCHMARK RUN: {args.model}")
    print(f"Target directory: {out_dir}")
    print(f"Clips to process: {len(manifest)} | Workers: {args.workers} | FPS: {args.fps}")
    print(f"============================================================")

    combined_jsonl = out_dir / "openrouter_gesture_rating.jsonl"
    usage_jsonl = out_dir / "openrouter_gesture_rating.usage.jsonl"
    failures_jsonl = out_dir / "openrouter_gesture_rating.failures.jsonl"

    results = []
    completed = 0
    skipped = 0
    failed = 0

    start_time = time.time()
    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = {
            executor.submit(
                evaluate_single_video,
                item,
                prompt_template,
                args.model,
                out_dir,
                api_key,
                args.fps
            ): item for item in manifest
        }

        for fut in as_completed(futures):
            item = futures[fut]
            vid = item["title"]
            try:
                res = fut.result()
                if res["status"] == "skipped":
                    skipped += 1
                else:
                    completed += 1
                    # Append to jsonl
                    with combined_jsonl.open("a", encoding="utf-8") as f_comb:
                        f_comb.write(json.dumps(res["parsed"], ensure_ascii=False) + "\n")
                    with usage_jsonl.open("a", encoding="utf-8") as f_usg:
                        f_usg.write(json.dumps({
                            "model": args.model,
                            "video_file": res["video"],
                            "target_word": res["target_word"],
                            "usage": res["usage"]
                        }, ensure_ascii=False) + "\n")

                elapsed = time.time() - start_time
                done_total = completed + skipped
                print(f"[{elapsed/60:.1f}m] ({done_total}/{len(manifest)}) {vid} -> {res['status']}", flush=True)
            except Exception as exc:
                failed += 1
                print(f"ERROR on {vid}: {exc}", file=sys.stderr, flush=True)
                with failures_jsonl.open("a", encoding="utf-8") as f_fail:
                    f_fail.write(json.dumps({
                        "model": args.model,
                        "video_file": vid,
                        "error": str(exc)
                    }, ensure_ascii=False) + "\n")

    print(f"\nFINISHED: Completed: {completed}, Skipped: {skipped}, Failed: {failed}")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
