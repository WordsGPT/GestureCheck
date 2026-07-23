#!/usr/bin/env python3
"""Run gesture-rating videos through OpenRouter multimodal models."""

from __future__ import annotations

import argparse
import base64
import json
import mimetypes
import os
import re
import sys
import time
from pathlib import Path
from typing import Any

import requests


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_MANIFEST = ROOT / "all_rating_videos.json"
DEFAULT_RATING_PROMPT = ROOT / "prompts" / "gesture_rating_prompt.md"
DEFAULT_RESULTS_ROOT = ROOT / "results"
DEFAULT_VIDEO_DIRS = (
    ROOT / "assets" / "rating-videos",
    ROOT / "assets" / "fake-title-videos",
    ROOT / "assets" / "videos",
    ROOT / "rating-video",
    ROOT / "viewer" / "assets" / "videos",
    ROOT / "data" / "videos",
    ROOT / "data" / "gesture_videos",
)
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"


def read_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def read_text(path: Path) -> str:
    with path.open("r", encoding="utf-8") as handle:
        return handle.read()


def load_dotenv(path: Path, *, override: bool = False) -> None:
    if not path.exists():
        return
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if override:
            os.environ[key] = value
        else:
            os.environ.setdefault(key, value)


def render_prompt(template: str, video: dict[str, Any], display_title: str | None = None) -> str:
    return (
        template.replace("{target_word}", str(video.get("target_word", "UNKNOWN")))
        .replace("{video_file}", str(display_title or video["title"]))
    )


def normalized_stem(name: str) -> str:
    stem = Path(name).stem
    if stem.lower().endswith(".mov"):
        stem = stem[:-4]
    return re.sub(r"[^a-z0-9]+", "", stem.lower())


def build_video_index(video_dirs: list[Path]) -> dict[str, Path]:
    index: dict[str, Path] = {}
    for video_dir in video_dirs:
        if not video_dir.exists():
            continue
        for path in sorted(video_dir.iterdir()):
            if path.is_file() and path.suffix.lower() in {".mp4", ".mov", ".avi"}:
                index.setdefault(normalized_stem(path.name), path)
    return index


def ensure_video(video: dict[str, Any], video_dirs: list[Path], video_index: dict[str, Path]) -> Path:
    for candidate in (video.get("local_path"), video.get("title")):
        if not candidate:
            continue
        path = Path(candidate).expanduser()
        if not path.is_absolute():
            path = ROOT / path
        if path.exists() and path.stat().st_size > 0:
            return path

    key = normalized_stem(video["title"])
    if key in video_index:
        return video_index[key]

    for video_dir in video_dirs:
        candidate = video_dir / Path(video["title"]).with_suffix(".mp4").name
        if candidate.exists() and candidate.stat().st_size > 0:
            return candidate

    raise FileNotFoundError(f"Could not resolve local video for manifest item: {video['title']}")


def video_data_url(path: Path) -> str:
    mime_type = mimetypes.guess_type(path.name)[0] or "video/mp4"
    if mime_type != "video/mp4":
        mime_type = "video/mp4"
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime_type};base64,{encoded}"


def extract_json_object(text: str) -> dict[str, Any]:
    stripped = text.strip()
    if stripped.startswith("```"):
        stripped = re.sub(r"^```(?:json)?\s*", "", stripped)
        stripped = re.sub(r"\s*```$", "", stripped)
    try:
        return json.loads(stripped)
    except json.JSONDecodeError:
        match = re.search(r"\{.*\}", stripped, flags=re.DOTALL)
        if not match:
            raise
        return json.loads(match.group(0))


def openrouter_payload(model: str, prompt: str, video_path: Path) -> dict[str, Any]:
    return {
        "model": model,
        "messages": [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt},
                    {
                        "type": "video_url",
                        "video_url": {"url": video_data_url(video_path)},
                    },
                ],
            }
        ],
        "temperature": 0,
        "response_format": {"type": "json_object"},
    }


def call_openrouter(
    api_key: str,
    model: str,
    prompt: str,
    video_path: Path,
    timeout: int,
    retry_seconds: int,
) -> tuple[str, dict[str, Any], dict[str, Any]]:
    payload = openrouter_payload(model, prompt, video_path)
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://github.com/Shodan/GestureCheck",
        "X-Title": "GestureCheck",
    }

    last_error: Exception | None = None
    for attempt in range(1, 4):
        try:
            response = requests.post(
                OPENROUTER_URL,
                headers=headers,
                json=payload,
                timeout=timeout,
            )
            if response.status_code >= 400:
                raise RuntimeError(
                    "OpenRouter HTTP "
                    f"{response.status_code}: {response.text[:2000]}"
                )
            body = response.json()
            raw_text = body["choices"][0]["message"].get("content") or ""
            return raw_text, extract_json_object(raw_text), body.get("usage") or {}
        except Exception as error:
            last_error = error
            message = str(error)
            status = getattr(getattr(error, "response", None), "status_code", None)
            is_transient = (
                isinstance(error, (json.JSONDecodeError, requests.RequestException))
                or status in {408, 409, 425, 429, 500, 502, 503, 504}
                or any(
                    f"HTTP {code}" in message
                    for code in (408, 409, 425, 429, 500, 502, 503, 504)
                )
            )
            if not is_transient or attempt == 3:
                raise
            sleep_seconds = retry_seconds * attempt
            print(
                f"OpenRouter call failed transiently on attempt {attempt}; "
                f"retrying in {sleep_seconds}s: {error}",
                flush=True,
            )
            time.sleep(sleep_seconds)

    raise RuntimeError("OpenRouter call failed") from last_error


def model_slug(model: str) -> str:
    return re.sub(r"[^A-Za-z0-9._-]+", "_", model).strip("_")


def run(args: argparse.Namespace) -> int:
    load_dotenv(ROOT / ".env")
    load_dotenv(ROOT / ".env.local", override=True)
    load_dotenv(ROOT / "env.local", override=True)

    manifest = read_json(args.manifest)
    prompt_template = read_text(args.prompt)
    videos = manifest[: args.limit] if args.limit else manifest
    video_dirs = [path.resolve() for path in args.video_dir]
    video_index = build_video_index(video_dirs)

    results_dir = args.results_dir or (DEFAULT_RESULTS_ROOT / model_slug(args.model))
    results_dir.mkdir(parents=True, exist_ok=True)
    combined_path = results_dir / f"openrouter_gesture_{args.task}.jsonl"
    usage_path = results_dir / f"openrouter_gesture_{args.task}.usage.jsonl"
    failures_path = results_dir / f"openrouter_gesture_{args.task}.failures.jsonl"

    if args.dry_run:
        for video in videos:
            video_path = ensure_video(video, video_dirs, video_index)
            prompt = render_prompt(prompt_template, video, display_title=video["title"])
            print(f"{video['title']} -> {video_path}")
            print(prompt[:500].rstrip())
            print()
        return 0

    api_key = os.environ.get("OPENROUTER_API_KEY")
    if not api_key:
        print(
            "OPENROUTER_API_KEY is not set. Put it in .env.local or env.local.",
            file=sys.stderr,
        )
        return 2

    failure_count = 0
    with combined_path.open("a", encoding="utf-8") as combined, usage_path.open(
        "a",
        encoding="utf-8",
    ) as usage_file, failures_path.open("a", encoding="utf-8") as failures_file:
        for video in videos:
            stem = f"{Path(video['title']).stem}.{args.task}"
            raw_path = results_dir / f"{stem}.raw.txt"
            json_path = results_dir / f"{stem}.json"
            if args.skip_existing and json_path.exists() and json_path.stat().st_size > 0:
                print(f"Skipping existing {json_path}", flush=True)
                continue

            label = video.get("target_word", "unlabeled")
            try:
                video_path = ensure_video(video, video_dirs, video_index)
                prompt = render_prompt(prompt_template, video, display_title=video["title"])
                print(
                    f"Running {args.task} on {video['title']} ({label}) with {args.model}",
                    flush=True,
                )
                raw_text, parsed, usage = call_openrouter(
                    api_key=api_key,
                    model=args.model,
                    prompt=prompt,
                    video_path=video_path,
                    timeout=args.timeout,
                    retry_seconds=args.retry_seconds,
                )
            except Exception as error:
                failure_count += 1
                failure = {
                    "model": args.model,
                    "video_file": video["title"],
                    "target_word": label,
                    "error_type": type(error).__name__,
                    "error": str(error),
                }
                failures_file.write(json.dumps(failure, ensure_ascii=False) + "\n")
                failures_file.flush()
                print(
                    f"FAILED {video['title']}; continuing: "
                    f"{type(error).__name__}: {error}",
                    file=sys.stderr,
                    flush=True,
                )
                continue

            raw_path.write_text(raw_text, encoding="utf-8")
            json_path.write_text(json.dumps(parsed, indent=2, ensure_ascii=False), encoding="utf-8")
            combined.write(json.dumps(parsed, ensure_ascii=False) + "\n")
            combined.flush()
            usage_file.write(
                json.dumps(
                    {
                        "model": args.model,
                        "video_file": video["title"],
                        "target_word": label,
                        "usage": usage,
                    },
                    ensure_ascii=False,
                )
                + "\n"
            )
            usage_file.flush()
            print(f"Wrote {json_path}", flush=True)

    if failure_count:
        print(
            f"Completed with {failure_count} failed item(s); see {failures_path}",
            file=sys.stderr,
            flush=True,
        )
        return 1
    return 0


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", type=Path, default=DEFAULT_MANIFEST)
    parser.add_argument("--prompt", type=Path, default=DEFAULT_RATING_PROMPT)
    parser.add_argument("--task", choices=["rating"], default="rating")
    parser.add_argument(
        "--video-dir",
        type=Path,
        action="append",
        default=list(DEFAULT_VIDEO_DIRS),
        help="Directory to search for local videos. Can be passed multiple times.",
    )
    parser.add_argument(
        "--results-dir",
        type=Path,
        help="Defaults to results/<sanitized model id>.",
    )
    parser.add_argument("--model", required=True)
    parser.add_argument("--limit", type=int, default=4)
    parser.add_argument("--timeout", type=int, default=180)
    parser.add_argument("--retry-seconds", type=int, default=10)
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--skip-existing", action="store_true")
    return parser.parse_args()


if __name__ == "__main__":
    raise SystemExit(run(parse_args()))
