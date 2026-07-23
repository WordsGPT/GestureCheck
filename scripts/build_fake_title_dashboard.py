#!/usr/bin/env python3
"""Build the dashboard payload for the 15-video fake-title experiment."""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "mismatched_manifest.json"
OUTPUT = ROOT / "fake-title-data.js"
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
    value = Path(title).stem
    value = re.sub(r"^\d+_", "", value)
    return re.sub(r"(?<=[a-z])(?=[A-Z])", " ", value)


def main() -> int:
    manifest: list[dict[str, Any]] = json.loads(MANIFEST.read_text(encoding="utf-8"))
    rows = []
    for item in manifest:
        results = {
            model: json.loads(result_path(directory, item["title"]).read_text(encoding="utf-8"))
            for model, directory in MODEL_DIRS.items()
        }
        ratings = {}
        for key, label in RATINGS:
            ratings[key] = {"label": label}
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

    OUTPUT.write_text(
        f"window.FAKE_TITLE_DASHBOARD = {json.dumps({'rows': rows}, indent=2, ensure_ascii=False)};\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUTPUT} with {len(rows)} rows")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
