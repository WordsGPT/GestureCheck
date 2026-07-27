#!/usr/bin/env python3
"""Build the 14-video unrelated-title page with human and VLM ratings."""

from __future__ import annotations

import argparse
import json
import os
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "mismatched_manifest.json"
OUTPUT = ROOT / "unrelated-probe-data.js"
MODEL_DIRS = {
    "flash": ROOT / "results" / "all_rating_flash",
    "pro": ROOT / "results" / "all_rating_pro",
    "qwen": ROOT / "results" / "qwen_qwen3.5-397b-a17b_video_fixed",
}
RATINGS = [
    ("iconicity", "Iconicity"),
    ("sensorimotor_imagery", "Sensorimotor imagery"),
    ("motional_salience_gesture", "Motional salience"),
    ("emotional_salience_facial_expression", "Facial emotion"),
    ("gesture_complexity_fit", "Complexity fit"),
    ("cultural_familiarity", "Cultural familiarity"),
    ("enactment_potential", "Enactment potential"),
]


def result_path(directory: Path, title: str) -> Path:
    return directory / f"{Path(title).stem}.rating.json"


def original_word(title: str) -> str:
    value = re.sub(r"^\d+_", "", Path(title).stem)
    return re.sub(r"(?<=[a-z])(?=[A-Z])", " ", value)


def human_ratings(database_url: str) -> tuple[dict[str, dict[str, Any]], dict[str, int]]:
    try:
        import psycopg
    except ImportError as error:
        raise RuntimeError(
            "psycopg is required for human comparisons. Install requirements.txt first."
        ) from error

    by_title: dict[str, dict[str, Any]] = {}
    participants: set[str] = set()
    with psycopg.connect(database_url) as connection:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT DISTINCT ON (participant_id, title)
                    participant_id,
                    title,
                    ratings
                FROM gesture_responses
                WHERE source = 'rating-video'
                ORDER BY
                    participant_id,
                    title,
                    COALESCE(submitted_at, received_at) DESC,
                    received_at DESC
                """
            )
            for participant_id, title, values in cursor.fetchall():
                participants.add(participant_id)
                entry = by_title.setdefault(
                    title,
                    {"participants": set(), "ratings": {key: [] for key, _ in RATINGS}},
                )
                entry["participants"].add(participant_id)
                for key, _ in RATINGS:
                    score = values.get(key)
                    if isinstance(score, (int, float)):
                        entry["ratings"][key].append(float(score))

    result = {}
    for title, entry in by_title.items():
        result[title] = {
            "response_count": len(entry["participants"]),
            "ratings": {
                key: round(sum(scores) / len(scores), 2) if scores else None
                for key, scores in entry["ratings"].items()
            },
        }
    return result, {
        "response_count": sum(item["response_count"] for item in result.values()),
        "participant_count": len(participants),
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--database-url",
        default=os.environ.get("DATABASE_URL", ""),
        help="PostgreSQL connection URL (defaults to DATABASE_URL).",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if not args.database_url:
        raise RuntimeError("Set DATABASE_URL or pass --database-url to include human ratings.")

    manifest: list[dict[str, Any]] = json.loads(MANIFEST.read_text(encoding="utf-8"))
    human_by_title, human_summary = human_ratings(args.database_url)
    rows = []
    for item in manifest:
        human = human_by_title.get(item["title"])
        if not human:
            continue
        results = {
            model: json.loads(result_path(directory, item["title"]).read_text(encoding="utf-8"))
            for model, directory in MODEL_DIRS.items()
        }
        ratings = {}
        for key, label in RATINGS:
            ratings[key] = {
                "label": label,
                "human": {
                    "score": human["ratings"][key],
                    "n": human["response_count"],
                },
            }
            for model, result in results.items():
                value = result["ratings"][key]
                ratings[key][model] = {
                    "score": value["score"],
                    "rationale": value.get("rationale", ""),
                }
        rows.append(
            {
                "original_title": item["original_title"],
                "original_word": original_word(item["original_title"]),
                "title": item["title"],
                "target_word": item["target_word"],
                "video": f"assets/fake-title-videos/{item['title']}",
                "human_response_count": human["response_count"],
                "models": {
                    model: {
                        "description": result.get("brief_gesture_description", ""),
                        "confidence": result.get("coherence_check", {}).get("confidence", ""),
                    }
                    for model, result in results.items()
                },
                "ratings": ratings,
            }
        )

    payload = {
        "human": human_summary,
        "ratings": [{"key": key, "label": label} for key, label in RATINGS],
        "rows": rows,
    }
    OUTPUT.write_text(
        f"window.UNRELATED_PROBE = {json.dumps(payload, indent=2, ensure_ascii=False)};\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUTPUT} with {len(rows)} rows")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
