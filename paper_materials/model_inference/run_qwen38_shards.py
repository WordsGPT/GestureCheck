#!/usr/bin/env python3
import os
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RESULTS_DIR = ROOT / "tests" / "retest_20260915" / "qwen3.8-max-0902"
SHARDS_DIR = RESULTS_DIR / "shards"
PROMPT = ROOT / "prompts" / "gesture_rating_prompt_human_aligned.md"

def main():
    shards = sorted(SHARDS_DIR.glob("shard_*.json"))
    if not shards:
        print("No shards found!", file=sys.stderr)
        return 1

    procs = []
    log_files = []
    print(f"Launching {len(shards)} parallel workers for Qwen 3.8 Max...")
    for shard in shards:
        log_path = SHARDS_DIR / f"{shard.stem}.log"
        log_file = open(log_path, "w", encoding="utf-8")
        log_files.append(log_file)
        cmd = [
            sys.executable,
            str(ROOT / "scripts" / "run_openrouter_gesture_pilot.py"),
            "--manifest", str(shard),
            "--prompt", str(PROMPT),
            "--model", "qwen/qwen3.8-max-0902",
            "--results-dir", str(RESULTS_DIR),
            "--limit", "0",
            "--timeout", "300",
            "--skip-existing",
        ]
        proc = subprocess.Popen(cmd, stdout=log_file, stderr=subprocess.STDOUT, cwd=str(ROOT))
        procs.append((shard.name, proc))
        print(f"  Started {shard.name} (PID {proc.pid}) -> {log_path.name}")

    start_time = time.time()
    while True:
        alive = sum(1 for _, p in procs if p.poll() is None)
        done_files = list(RESULTS_DIR.glob("video_*.rating.json"))
        elapsed = time.time() - start_time
        print(f"[{elapsed/60:.1f}m] Active workers: {alive}/{len(procs)} | Completed clips in directory: {len(done_files)}/149", flush=True)
        if alive == 0:
            break
        time.sleep(30)

    for f in log_files:
        f.close()

    print("All shards finished!")
    return 0

if __name__ == "__main__":
    sys.exit(main())
