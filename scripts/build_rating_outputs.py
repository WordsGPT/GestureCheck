#!/usr/bin/env python3
"""Build XLSX and dashboard data from Flash, Pro, and Qwen rating JSON files."""

from __future__ import annotations

import argparse
import json
import re
import zipfile
from html import escape
from itertools import combinations
from pathlib import Path
from statistics import mean
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
RATINGS = [
    ("iconicity", "Iconicity"),
    ("sensorimotor_imagery", "Sensorimotor imagery"),
    ("motional_salience_gesture", "Motional salience"),
    ("emotional_salience_facial_expression", "Facial emotion"),
    ("gesture_complexity_fit", "Complexity fit"),
    ("cultural_familiarity", "Cultural familiarity"),
    ("enactment_potential", "Enactment potential"),
]
MODEL_DIRS = {
    "flash": ROOT / "results" / "all_rating_flash",
    "pro": ROOT / "results" / "all_rating_pro",
    "qwen": ROOT / "results" / "qwen_qwen3.5-397b-a17b_video_fixed",
}


def read_json(path: Path) -> Any | None:
    if not path.exists():
        return None
    return json.loads(path.read_text(encoding="utf-8"))


def result_path(results_dir: Path, title: str) -> Path:
    return results_dir / f"{Path(title).stem}.rating.json"


def video_slug(title: str) -> str:
    stem = Path(title).stem
    stem = re.sub(r"\.mov$", "", stem, flags=re.IGNORECASE)
    return re.sub(r"[^A-Za-z0-9]+", "_", stem).strip("_")


def concreteness(item: dict[str, Any]) -> str:
    if item.get("collection") == "object":
        return "concrete"
    match = re.match(r"^(\d+)", item["title"])
    if match and int(match.group(1)) <= 45:
        return "concrete"
    return "abstract"


def score(result: dict[str, Any] | None, key: str) -> int | None:
    if not result:
        return None
    value = result.get("ratings", {}).get(key, {}).get("score")
    return value if isinstance(value, int) else None


def rationale(result: dict[str, Any] | None, key: str) -> str:
    if not result:
        return ""
    return str(result.get("ratings", {}).get(key, {}).get("rationale", ""))


def confidence(result: dict[str, Any] | None) -> str:
    if not result:
        return ""
    return str(result.get("coherence_check", {}).get("confidence", ""))


def ambiguities(result: dict[str, Any] | None) -> str:
    if not result:
        return ""
    values = result.get("coherence_check", {}).get("possible_ambiguities", [])
    return "; ".join(str(value) for value in values)


def description(result: dict[str, Any] | None) -> str:
    if not result:
        return ""
    return str(result.get("brief_gesture_description", ""))


def build_rows(manifest: list[dict[str, Any]], model_dirs: dict[str, Path]) -> list[dict[str, Any]]:
    rows = []
    for position, item in enumerate(manifest, start=1):
        results = {
            model: read_json(result_path(results_dir, item["title"]))
            for model, results_dir in model_dirs.items()
        }
        deltas = {}
        for key, _label in RATINGS:
            values = [
                value
                for result in results.values()
                if (value := score(result, key)) is not None
            ]
            pairwise = [abs(left - right) for left, right in combinations(values, 2)]
            deltas[key] = round(mean(pairwise), 3) if pairwise else None
        numeric_deltas = [value for value in deltas.values() if value is not None]
        rows.append(
            {
                "index": position,
                "collection": item.get("collection", ""),
                "concreteness": concreteness(item),
                "target_word": item["target_word"],
                "title": item["title"],
                "local_path": item.get("local_path", ""),
                "results": results,
                "deltas": deltas,
                "max_abs_delta": max(numeric_deltas) if numeric_deltas else None,
                "mean_abs_delta": (
                    round(sum(numeric_deltas) / len(numeric_deltas), 3)
                    if numeric_deltas
                    else None
                ),
                "complete": all(results.values()),
            }
        )
    return rows


def dashboard_payload(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    payload = []
    for row in rows:
        ratings = {}
        for key, label in RATINGS:
            ratings[key] = {
                "label": label,
                "flash": {
                    "score": score(row["results"]["flash"], key),
                    "rationale": rationale(row["results"]["flash"], key),
                },
                "pro": {
                    "score": score(row["results"]["pro"], key),
                    "rationale": rationale(row["results"]["pro"], key),
                },
                "qwen": {
                    "score": score(row["results"]["qwen"], key),
                    "rationale": rationale(row["results"]["qwen"], key),
                },
                "delta": row["deltas"][key],
            }
        payload.append(
            {
                "index": row["index"],
                "collection": row["collection"],
                "concreteness": row["concreteness"],
                "target_word": row["target_word"],
                "title": row["title"],
                "local_path": row["local_path"],
                "video": f"assets/rating-videos/{video_slug(row['title'])}.mp4",
                "complete": row["complete"],
                "max_abs_delta": row["max_abs_delta"],
                "mean_abs_delta": row["mean_abs_delta"],
                "flash_confidence": confidence(row["results"]["flash"]),
                "pro_confidence": confidence(row["results"]["pro"]),
                "qwen_confidence": confidence(row["results"]["qwen"]),
                "flash_ambiguities": ambiguities(row["results"]["flash"]),
                "pro_ambiguities": ambiguities(row["results"]["pro"]),
                "qwen_ambiguities": ambiguities(row["results"]["qwen"]),
                "models": {
                    model: {
                        "description": description(result),
                        "confidence": confidence(result),
                        "ambiguities": ambiguities(result),
                    }
                    for model, result in row["results"].items()
                },
                "ratings": ratings,
            }
        )
    return payload


def cell_xml(value: Any) -> str:
    if value is None:
        return "<c/>"
    if isinstance(value, (int, float)):
        return f"<c><v>{value}</v></c>"
    return f'<c t="inlineStr"><is><t>{escape(str(value))}</t></is></c>'


def row_xml(values: list[Any], row_number: int) -> str:
    return f'<row r="{row_number}">' + "".join(cell_xml(value) for value in values) + "</row>"


def sheet_xml(rows: list[list[Any]]) -> str:
    body = "".join(row_xml(row, index) for index, row in enumerate(rows, start=1))
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
        f"<sheetData>{body}</sheetData>"
        "</worksheet>"
    )


def workbook_xml(sheet_names: list[str]) -> str:
    sheets = "".join(
        f'<sheet name="{escape(name)}" sheetId="{index}" r:id="rId{index}"/>'
        for index, name in enumerate(sheet_names, start=1)
    )
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
        f"<sheets>{sheets}</sheets>"
        "</workbook>"
    )


def workbook_rels(sheet_count: int) -> str:
    rels = [
        (
            '<Relationship Id="rId1" '
            'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" '
            'Target="worksheets/sheet1.xml"/>'
        ),
        (
            '<Relationship Id="rId2" '
            'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" '
            'Target="worksheets/sheet2.xml"/>'
        ),
    ][:sheet_count]
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
        + "".join(rels)
        + "</Relationships>"
    )


def content_types(sheet_count: int) -> str:
    sheets = "".join(
        (
            f'<Override PartName="/xl/worksheets/sheet{index}.xml" '
            'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
        )
        for index in range(1, sheet_count + 1)
    )
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
        '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
        '<Default Extension="xml" ContentType="application/xml"/>'
        '<Override PartName="/xl/workbook.xml" '
        'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
        f"{sheets}</Types>"
    )


def root_rels() -> str:
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
        '<Relationship Id="rId1" '
        'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" '
        'Target="xl/workbook.xml"/>'
        "</Relationships>"
    )


def workbook_rows(rows: list[dict[str, Any]]) -> list[list[Any]]:
    header = [
        "Index",
        "Collection",
        "Concrete/abstract",
        "Target word",
        "Video file",
        "Flash confidence",
        "Pro confidence",
        "Qwen confidence",
        "Mean pairwise delta across dimensions",
        "Max mean pairwise delta",
        "Flash ambiguities",
        "Pro ambiguities",
        "Qwen ambiguities",
        "Flash action description",
        "Pro action description",
        "Qwen action description",
    ]
    for _key, label in RATINGS:
        header.extend(
            [
                f"{label} Flash",
                f"{label} Pro",
                f"{label} Qwen",
                f"{label} mean pairwise delta",
                f"{label} Flash rationale",
                f"{label} Pro rationale",
                f"{label} Qwen rationale",
            ]
        )

    table = [header]
    for row in rows:
        values: list[Any] = [
            row["index"],
            row["collection"],
            row["concreteness"],
            row["target_word"],
            row["title"],
            confidence(row["results"]["flash"]),
            confidence(row["results"]["pro"]),
            confidence(row["results"]["qwen"]),
            row["mean_abs_delta"],
            row["max_abs_delta"],
            ambiguities(row["results"]["flash"]),
            ambiguities(row["results"]["pro"]),
            ambiguities(row["results"]["qwen"]),
            description(row["results"]["flash"]),
            description(row["results"]["pro"]),
            description(row["results"]["qwen"]),
        ]
        for key, _label in RATINGS:
            values.extend(
                [
                    score(row["results"]["flash"], key),
                    score(row["results"]["pro"], key),
                    score(row["results"]["qwen"], key),
                    row["deltas"][key],
                    rationale(row["results"]["flash"], key),
                    rationale(row["results"]["pro"], key),
                    rationale(row["results"]["qwen"], key),
                ]
            )
        table.append(values)
    return table


def summary_rows(rows: list[dict[str, Any]]) -> list[list[Any]]:
    table = [["Metric", "Value"]]
    table.append(["Total manifest rows", len(rows)])
    table.append(["Rows with all models", sum(1 for row in rows if row["complete"])])
    table.append(["Rows missing Flash", sum(1 for row in rows if not row["results"]["flash"])])
    table.append(["Rows missing Pro", sum(1 for row in rows if not row["results"]["pro"])])
    table.append(["Rows missing Qwen", sum(1 for row in rows if not row["results"]["qwen"])])
    for key, label in RATINGS:
        deltas = [row["deltas"][key] for row in rows if row["deltas"][key] is not None]
        table.append([f"{label} mean pairwise delta", round(mean(deltas), 3) if deltas else ""])
    return table


def write_xlsx(path: Path, rows: list[dict[str, Any]]) -> None:
    sheets = {
        "Ratings": workbook_rows(rows),
        "Summary": summary_rows(rows),
    }
    with zipfile.ZipFile(path, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        archive.writestr("[Content_Types].xml", content_types(len(sheets)))
        archive.writestr("_rels/.rels", root_rels())
        archive.writestr("xl/workbook.xml", workbook_xml(list(sheets)))
        archive.writestr("xl/_rels/workbook.xml.rels", workbook_rels(len(sheets)))
        for index, sheet_rows in enumerate(sheets.values(), start=1):
            archive.writestr(f"xl/worksheets/sheet{index}.xml", sheet_xml(sheet_rows))


def safe_js_name(path: Path) -> str:
    return re.sub(r"[^A-Za-z0-9_]", "_", path.stem).upper()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", type=Path, default=ROOT / "all_rating_videos.json")
    parser.add_argument("--flash-dir", type=Path, default=MODEL_DIRS["flash"])
    parser.add_argument("--pro-dir", type=Path, default=MODEL_DIRS["pro"])
    parser.add_argument("--qwen-dir", type=Path, default=MODEL_DIRS["qwen"])
    parser.add_argument("--xlsx", type=Path, default=ROOT / "rating-results.xlsx")
    parser.add_argument("--dashboard-data", type=Path, default=ROOT / "dashboard-data.js")
    args = parser.parse_args()

    manifest = json.loads(args.manifest.read_text(encoding="utf-8"))
    rows = build_rows(
        manifest,
        {"flash": args.flash_dir, "pro": args.pro_dir, "qwen": args.qwen_dir},
    )

    write_xlsx(args.xlsx, rows)
    payload = {
        "ratings": [{"key": key, "label": label} for key, label in RATINGS],
        "rows": dashboard_payload(rows),
    }
    args.dashboard_data.write_text(
        f"window.RATING_DASHBOARD = {json.dumps(payload, indent=2, ensure_ascii=False)};\n",
        encoding="utf-8",
    )
    print(f"Wrote {args.xlsx}")
    print(f"Wrote {args.dashboard_data}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
