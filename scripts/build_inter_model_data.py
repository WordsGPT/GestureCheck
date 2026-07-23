#!/usr/bin/env python3
"""Build three-model agreement metrics for the rating dashboard."""

from __future__ import annotations

import json
import math
from itertools import combinations
from pathlib import Path
from statistics import mean
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
MANIFESTS = (
    ROOT / "all_rating_videos.json",
    ROOT / "mismatched_manifest.json",
)
OUTPUT = ROOT / "inter-model-data.js"
MODEL_DIRS = {
    "Gemini Pro": ROOT / "results" / "all_rating_pro",
    "Gemini Flash": ROOT / "results" / "all_rating_flash",
    "Qwen3.5-397B-A17B": ROOT / "results" / "qwen_qwen3.5-397b-a17b_video_fixed",
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


def average_ranks(values: list[int]) -> list[float]:
    ordered = sorted(range(len(values)), key=values.__getitem__)
    ranks = [0.0] * len(values)
    position = 0
    while position < len(ordered):
        end = position + 1
        while end < len(ordered) and values[ordered[end]] == values[ordered[position]]:
            end += 1
        average_rank = (position + 1 + end) / 2
        for index in ordered[position:end]:
            ranks[index] = average_rank
        position = end
    return ranks


def pearson(left: list[float], right: list[float]) -> float:
    left_mean = mean(left)
    right_mean = mean(right)
    numerator = sum((x - left_mean) * (y - right_mean) for x, y in zip(left, right))
    left_sum = sum((x - left_mean) ** 2 for x in left)
    right_sum = sum((y - right_mean) ** 2 for y in right)
    denominator = math.sqrt(left_sum * right_sum)
    return numerator / denominator if denominator else 0.0


def spearman(left: list[int], right: list[int]) -> float:
    return pearson(average_ranks(left), average_ranks(right))


def main() -> int:
    manifest: list[dict[str, Any]] = []
    for manifest_path in MANIFESTS:
        manifest.extend(json.loads(manifest_path.read_text(encoding="utf-8")))
    scores = {
        model: {rating: [] for rating, _ in RATINGS}
        for model in MODEL_DIRS
    }
    for item in manifest:
        for model, directory in MODEL_DIRS.items():
            result = json.loads(result_path(directory, item["title"]).read_text(encoding="utf-8"))
            for rating, _ in RATINGS:
                scores[model][rating].append(result["ratings"][rating]["score"])

    model_pairs = list(combinations(MODEL_DIRS, 2))
    rows = []
    for rating, label in RATINGS:
        absolute_differences = []
        correlations = []
        for left_model, right_model in model_pairs:
            left = scores[left_model][rating]
            right = scores[right_model][rating]
            absolute_differences.append(mean(abs(x - y) for x, y in zip(left, right)))
            correlations.append(spearman(left, right))
        rows.append(
            {
                "key": rating,
                "label": label,
                "mean_pairwise_absolute_difference": mean(absolute_differences),
                "mean_pairwise_spearman_rho": mean(correlations),
            }
        )

    payload = {
        "models": list(MODEL_DIRS),
        "video_count": len(manifest),
        "rows": rows,
    }
    OUTPUT.write_text(
        f"window.INTER_MODEL_AGREEMENT = {json.dumps(payload, indent=2, ensure_ascii=False)};\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUTPUT} with {len(rows)} dimensions")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
