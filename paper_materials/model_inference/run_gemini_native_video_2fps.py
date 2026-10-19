#!/usr/bin/env python3
"""Run Gemini 3.8 Flash using native video upload with VideoMetadata(fps=2.0)."""

import argparse
import json
import os
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Any

from google import genai
from google.genai import types

ROOT = Path(__file__).resolve().parents[1]


def load_env():
    for p in [ROOT / ".env.local", ROOT / ".env", ROOT / "env.local"]:
        if p.exists():
            for line in p.read_text(encoding="utf-8").splitlines():
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


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
    client: genai.Client,
    fps: float,
    max_retries: int = 4,
) -> dict[str, Any]:
    vid_file = item["title"]
    stem = Path(vid_file).stem
    json_path = output_dir / f"{stem}.rating.json"
    raw_path = output_dir / f"{stem}.rating.raw.txt"

    if json_path.exists() and json_path.stat().st_size > 0:
        return {"status": "skipped", "video": vid_file, "stem": stem}

    local_path = ROOT / item.get("local_path", f"assets/rating-videos/{vid_file}")
    if not local_path.exists():
        alt_path = ROOT / "assets" / "rating-videos" / item.get("source_title", "").replace(".avi", ".mp4")
        if alt_path.exists():
            local_path = alt_path
        else:
            raise FileNotFoundError(f"Video file not found: {local_path}")

    target_word = item.get("target_word", "UNKNOWN")
    prompt = prompt_template.replace("{target_word}", target_word).replace("{video_file}", vid_file)

    last_err = None
    uploaded = None

    for attempt in range(1, max_retries + 1):
        try:
            # Native Google Files API upload
            uploaded = client.files.upload(file=str(local_path))
            while uploaded.state.name == "PROCESSING":
                time.sleep(1.5)
                uploaded = client.files.get(name=uploaded.name)

            video_part = types.Part(
                file_data=types.FileData(file_uri=uploaded.uri, mime_type="video/mp4"),
                video_metadata=types.VideoMetadata(fps=fps),
            )

            resp = client.models.generate_content(
                model=model,
                contents=[video_part, prompt],
                config=types.GenerateContentConfig(
                    temperature=0,
                    response_mime_type="application/json"
                )
            )
            raw_text = resp.text or ""
            parsed = extract_json_object(raw_text)

            if "ratings" not in parsed:
                raise ValueError(f"Missing ratings object in output: {raw_text[:100]}")

            raw_path.write_text(raw_text, encoding="utf-8")
            json_path.write_text(json.dumps(parsed, indent=2, ensure_ascii=False), encoding="utf-8")

            # Clean up uploaded file
            try:
                client.files.delete(name=uploaded.name)
            except Exception:
                pass

            return {
                "status": "success",
                "video": vid_file,
                "stem": stem,
                "target_word": target_word,
                "parsed": parsed,
            }
        except Exception as e:
            last_err = e
            if uploaded:
                try:
                    client.files.delete(name=uploaded.name)
                except Exception:
                    pass
            wait_time = 4 * attempt
            time.sleep(wait_time)

    raise RuntimeError(f"Failed {vid_file} after {max_retries} attempts: {last_err}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", default="gemini-3.8-flash")
    parser.add_argument("--output-dir", default="tests/retest_20260915/gemini-3.8-flash-native-2fps")
    parser.add_argument("--manifest", default="tests/retest_20260915/all_videos_neutral.json")
    parser.add_argument("--prompt", default="prompts/gesture_rating_prompt_human_aligned.md")
    parser.add_argument("--workers", type=int, default=3)
    parser.add_argument("--fps", type=float, default=2.0)
    args = parser.parse_args()

    load_env()
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("ERROR: GEMINI_API_KEY not set!", file=sys.stderr)
        sys.exit(1)

    client = genai.Client(api_key=api_key)
    out_dir = Path(args.output_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    manifest_path = ROOT / args.manifest
    prompt_path = ROOT / args.prompt
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    prompt_template = prompt_path.read_text(encoding="utf-8")

    print(f"============================================================")
    print(f"NATIVE VIDEO RUN: {args.model} @ {args.fps} FPS")
    print(f"Target directory: {out_dir}")
    print(f"Clips to process: {len(manifest)} | Workers: {args.workers}")
    print(f"============================================================")

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
                client,
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
                elapsed = time.time() - start_time
                done_total = completed + skipped
                print(f"[{elapsed/60:.1f}m] ({done_total}/{len(manifest)}) {vid} -> {res['status']}", flush=True)
            except Exception as exc:
                failed += 1
                print(f"ERROR on {vid}: {exc}", file=sys.stderr, flush=True)

    print(f"\nFINISHED: Completed: {completed}, Skipped: {skipped}, Failed: {failed}")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
