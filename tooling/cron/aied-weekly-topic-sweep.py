#!/usr/bin/env python3
"""Cron wrapper: pre-fetch the weekly OpenAlex topic sweep for the journal-ingestion job.

The real implementation lives in the wiki repo (versioned and testable with the rest of the
tooling):

    <WIKI>/tooling/scripts/cron_prefetch.py --cadence weekly --days 7

The cron scheduler only accepts scripts under <AGENT>/scripts/, hence this shim. It runs
only the sources marked `cadence: weekly` in wiki.config.yaml, which today is the single
OpenAlex topic sweep: a broad `topics.id` filter with a learners requirement, high volume and
lower precision than the daily journal watch, which is why it runs once a week and never as
part of the daily pass.

Output contract: stdout is a compact candidate index the scheduler injects into the agent's
prompt. The header spells out how to treat it, because the sweep is a shortlist rather than a
worklist and nothing in the ingestion prompt describes it. Full records (abstracts, authors,
DOIs) are written to <WIKI>/raw/prefetch/weekly-topic.json, which is gitignored.

A missing repo or a broken config prints a diagnostic and exits 0 so the weekly run still
happens with the RSS feeds alone.
"""

from __future__ import annotations

import os
import subprocess
import sys

REPO = os.environ.get("AIED_WIKI") or "<WIKI>"   # set AIED_WIKI or replace <WIKI> with the clone path
SCRIPT = os.path.join(REPO, "tooling", "scripts", "cron_prefetch.py")
OUT = os.path.join(REPO, "raw", "prefetch", "weekly-topic.json")

HEADER = """WEEKLY OPENALEX TOPIC SWEEP (OpenAlex `topics.id` filter, last 7 days)

This is the complement to the RSS feeds: it reaches open-access AI-in-education work published
in outlets the wiki does not watch, which is most of it. It is a SHORTLIST, not a worklist.

How to use it:
- Skim the titles below. Pull abstracts from {out} only for titles that are plainly
  AI-in-education; do not open hundreds of records.
- Do not bulk-append this list to AIED-BACKLOG.md. Pick at most 15 items worth acting on this
  week, preferring systematic reviews, randomized or quasi-experimental studies, and work in
  disciplines the wiki covers thinly over another single-site perception survey.
- Apply the same relevance filter and the same full-text rule as the RSS articles: no full
  text, no page. Backlog a selected item only if you judged it worth ingesting.
- Dedupe by DOI and title against content/en/articles/ first; the daily journal watch has
  probably already delivered some of these.
- Report how many candidates the sweep returned, how many you selected, and how many you
  ingested.

----- candidate index -----
""".format(out=OUT)


def main() -> int:
    if not os.path.exists(SCRIPT):
        print(f"WEEKLY TOPIC SWEEP UNAVAILABLE: {SCRIPT} not found.")
        print("Continue with the RSS feeds only.")
        return 0

    try:
        p = subprocess.run(
            [sys.executable, SCRIPT, "--cadence", "weekly", "--days", "7", "--out", OUT],
            cwd=REPO, capture_output=True, text=True, timeout=900,
        )
    except subprocess.TimeoutExpired:
        print("WEEKLY TOPIC SWEEP TIMED OUT after 900s.")
        print("Continue with the RSS feeds only.")
        return 0
    except OSError as e:
        print(f"WEEKLY TOPIC SWEEP FAILED to execute: {e}")
        return 0

    if p.returncode != 0:
        print(f"WEEKLY TOPIC SWEEP exited {p.returncode}; candidates may be incomplete.")
        if p.stderr:
            print("stderr tail:")
            print(p.stderr[-800:])
        return 0

    if not p.stdout.strip():
        print("WEEKLY TOPIC SWEEP returned no candidates this week.")
        return 0

    print(HEADER)
    sys.stdout.write(p.stdout)
    return 0


if __name__ == "__main__":
    sys.exit(main())
