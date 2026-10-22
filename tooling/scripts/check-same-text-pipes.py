#!/usr/bin/env python3
"""Fail when a wikilink label is identical to its own slug.

The renderer builds a link's visible text as `label || titles[page] ||
smartTitle(slug)`, so a BARE link shows the page's own real title ("Assessment",
"Cognitive Offloading"). An explicit label overrides that. `[[assessment|assessment]]`
therefore renders lowercase "assessment" on the page — the pipe actively suppresses
the page title. It is a reader-visible defect, and nothing else caught it.

THE CAPITALISATION-ONLY EXCEPTION IS LEGITIMATE. `[[slug|Slug]]`, differing only by
capitalisation, is how the inline-link scanner preserves sentence case while the
slug stays lowercase. Only an EXACT-identical pair is a defect, so this check must
never be widened to a case-insensitive comparison — that would rewrite 59+ correct
links on concept pages alone.

The pipe is pointless even where it looks harmless: the slug and the display are the
same string, so the link could be written bare and would then show the page's title.

Fix: replace `[[x|x]]` with `[[x]]` (bare). Never touch `[[x|X]]`.

Usage:
    python3 tooling/scripts/check-same-text-pipes.py            # all locales' default dir
    python3 tooling/scripts/check-same-text-pipes.py --changed  # pages touched vs HEAD
"""
import os
import re
import subprocess
import sys

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import content_paths

# Exact-identical pair only. `([^\[\]|]+)\|\1` backreferences the captured label, so
# `[[scaffolding|Scaffolding]]` does NOT match (the strings differ by case).
SAME_TEXT = re.compile(r"\[\[([^\[\]|]+)\|\1\]\]")


def frontmatter_body(path):
    text = open(path, encoding="utf-8").read()
    m = re.match(r"^---\n.*?\n---\n(.*)$", text, re.S)
    return m.group(1) if m else text


def changed_paths():
    out = subprocess.run(["git", "status", "--porcelain"], cwd=WIKI,
                         capture_output=True, text=True).stdout
    paths = set()
    for line in out.split("\n"):
        if not line.strip():
            continue
        rel = line[3:].strip().strip('"')
        if " -> " in rel:
            rel = rel.split(" -> ")[-1]
        paths.add(os.path.normpath(os.path.join(WIKI, rel)))
    return paths


def main():
    only_changed = "--changed" in sys.argv
    pages = []
    for coll in ("concepts", "articles", "faqs", "resources"):
        pages += sorted(content_paths.collection(coll).glob("*.md"))

    defects = []
    scanned = 0
    for path in pages:
        if only_changed and str(path) not in changed_paths():
            continue
        scanned += 1
        body = frontmatter_body(str(path))
        found = SAME_TEXT.findall(body)
        if found:
            rel = os.path.relpath(path, WIKI)
            defects.append((rel, sorted(set(found)), len(found)))

    if defects:
        total = sum(n for _, _, n in defects)
        print("FAIL - %d same-text pipe(s) on %d page(s)." % (total, len(defects)))
        print("The pipe suppresses the page's own title; write the link bare instead.")
        for rel, uniq, n in defects:
            print("  - %s: %d (%s)" % (rel, n, ", ".join(uniq)))
        print("\nFix: [[x|x]] -> [[x]]. Leave [[x|X]] (case-only) alone.")
        return 1
    print("OK - no same-text pipes in %d file(s) scanned." % scanned)
    return 0


if __name__ == "__main__":
    sys.exit(main())
