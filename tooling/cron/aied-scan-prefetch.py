#!/usr/bin/env python3
"""Cron wrapper: pre-fetch every AI-in-education scan source before the agent runs.

The real implementation lives in the wiki repo so it is versioned and testable with the rest
of the tooling:

    <WIKI>/tooling/scripts/cron_prefetch.py

The cron scheduler only accepts scripts under ~/.hermes/scripts/, hence this shim. It reads the
source list from the repo's `wiki.config.yaml` -> `scan.sources`, so queries and the relevance
bar stay in one place.

Output contract: stdout is the compact candidate index that the scheduler injects into the
agent's prompt (about 15 KB for ~85 candidates). The full records - abstracts, authors, DOIs -
are written to <WIKI>/raw/prefetch/candidates.json, which is gitignored.

A missing repo or a broken config prints a diagnostic and exits 0 so the cron run still
happens (the prompt tells the agent to fall back to fetching manually in that case); a
non-zero exit would fail the job before the agent got a chance to work.
"""

from __future__ import annotations

import os
import subprocess
import sys

REPO = os.environ.get("AIED_WIKI") or "<WIKI>"   # set AIED_WIKI or replace <WIKI> with the clone path
SCRIPT = os.path.join(REPO, "tooling", "scripts", "cron_prefetch.py")


def main() -> int:
    if not os.path.exists(SCRIPT):
        print(f"SCAN PREFETCH UNAVAILABLE: {SCRIPT} not found.")
        print("Fall back to running the per-source fetch commands listed in the prompt.")
        return 0

    try:
        p = subprocess.run(
            [sys.executable, SCRIPT, *sys.argv[1:]],
            cwd=REPO, capture_output=True, text=True, timeout=900,
        )
    except subprocess.TimeoutExpired:
        print("SCAN PREFETCH TIMED OUT after 900s.")
        print("Fall back to running the per-source fetch commands listed in the prompt.")
        return 0
    except OSError as e:
        print(f"SCAN PREFETCH FAILED to execute: {e}")
        return 0

    # Prefer the compact index on stdout; surface stderr notes so a partial fetch is visible.
    if p.stdout:
        sys.stdout.write(p.stdout)
    if p.returncode != 0:
        print(f"\nSCAN PREFETCH exited {p.returncode}; results may be incomplete.")
        if p.stderr:
            print("stderr tail:")
            print(p.stderr[-800:])
    return 0


if __name__ == "__main__":
    sys.exit(main())
