#!/usr/bin/env python3
"""Fail when a page claims to have been created after it entered the repository.

`created` is what the journal page sorts by, so a wrong value reorders the site.
The recurring failure is a plausible-looking timestamp written by hand or by a
model: pages added at 07:36 carried `created:` values of 12:20 or 14:45, which is
impossible and made the journal list a batch in an invented order.

The repository history is the authority. A page cannot have been created after the
commit that first added it. A small tolerance absorbs the seconds between writing
a file and committing it.

    python3 tooling/scripts/check-created-dates.py --changed   # files touched vs HEAD
    python3 tooling/scripts/check-created-dates.py            # whole English corpus
"""
import os
import re
import subprocess
import sys
from datetime import datetime, timedelta

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TOLERANCE = timedelta(seconds=90)
STAMP = re.compile(r'^(created|updated):\s*"([^"]+)"\s*$', re.M)


def first_add_times():
    """Map repo-relative path -> ISO time of the commit that first added it.

    One git call for the whole history. `git log --diff-filter=A` walks newest
    first, so a path that was deleted and re-added keeps its most recent add.
    """
    out = subprocess.run(
        ["git", "-C", WIKI, "log", "--diff-filter=A", "--name-only", "--pretty=format:@@%aI"],
        capture_output=True,
        text=True,
    ).stdout
    added = {}
    stamp = None
    for line in out.splitlines():
        if line.startswith("@@"):
            stamp = line[2:].strip()
        elif line.strip() and stamp:
            added[line.strip()] = stamp
    return added


def covered_files(argv):
    if argv == ["--changed"]:
        out = subprocess.run(
            ["git", "-C", WIKI, "status", "--porcelain"], capture_output=True, text=True
        ).stdout
        files = []
        for line in out.splitlines():
            if not line.strip():
                continue
            p = line[3:].strip()
            if p.startswith("content/en/") and p.endswith(".md"):
                files.append(os.path.join(WIKI, p))
        return files
    if argv:
        return argv
    files = []
    for c in ("concepts", "faqs", "resources", "articles"):
        d = os.path.join(WIKI, "content", "en", c)
        if os.path.isdir(d):
            files.extend(os.path.join(d, f) for f in sorted(os.listdir(d)) if f.endswith(".md"))
    return files


def main(argv):
    files = covered_files(argv)
    added = first_add_times()
    problems = []
    for f in files:
        if not os.path.exists(f):
            continue
        text = open(f, encoding="utf-8").read()
        fm = text.split("---", 2)[1] if text.startswith("---") else ""
        stamps = dict(STAMP.findall(fm))
        if "created" not in stamps:
            continue
        rel = os.path.relpath(f, WIKI)
        try:
            created = datetime.fromisoformat(stamps["created"])
        except ValueError:
            problems.append((rel, f"created is not an ISO timestamp: {stamps['created']}"))
            continue
        added_at = added.get(rel)
        if added_at:
            try:
                added_dt = datetime.fromisoformat(added_at)
            except ValueError:
                added_dt = None
            if added_dt and created > added_dt + TOLERANCE:
                problems.append(
                    (rel, f"created {stamps['created']} is after the commit that added it ({added_at})")
                )
        if "updated" in stamps:
            try:
                if datetime.fromisoformat(stamps["updated"]) < created:
                    problems.append((rel, "updated is earlier than created"))
            except ValueError:
                problems.append((rel, f"updated is not an ISO timestamp: {stamps['updated']}"))

    for rel, msg in problems:
        print(f"{rel}: {msg}")
    if problems:
        print(
            f"\nFAIL - {len(problems)} date defect(s). Use the time the page entered the "
            f"repository when the real creation time is unknown."
        )
        return 1
    print(f"OK - {len(files)} page(s): created and updated stamps are consistent with history.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
