#!/usr/bin/env python3
"""Fail only when a wikilink pipe is truly redundant.

The renderer builds a link's visible text as `label || titles[page] ||
smartTitle(slug)`. A bare `[[slug]]` therefore shows the target page's own title,
with every word capitalised ("Open Source", "Assessment").

A label that repeats the slug is NOT automatically redundant. Mid-sentence the
lowercase form is usually the correct prose: `[[open-source|open-source]]` reads
"open-source" where a bare link would print "Open Source". The pipe is what
preserves sentence case, so the exact-identical pair `[[x|x]]` is legitimate
whenever the page's title differs from the slug — which is nearly always.

The only redundant case is when the label equals the target page's TITLE, because
then a bare link renders exactly the same string. That is what this check tests:
it resolves the target's title and flags `[[slug|label]]` only when
`label == titles[slug]`.

Usage:
    python3 tooling/scripts/check-same-text-pipes.py            # all locales' default dir
    python3 tooling/scripts/check-same-text-pipes.py --changed  # pages touched vs HEAD
    python3 tooling/scripts/check-same-text-pipes.py --strict   # exit 1 instead of 0
"""
import os
import re
import subprocess
import sys

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import content_paths

# Any piped wikilink; the redundancy test needs the target's title, so matching
# happens here and the title comparison decides.
PIPED = re.compile(r"\[\[([^\[\]|]+)\|([^\[\]]+?)\]\]")
TITLE = re.compile(r'^title:\s*"?(.*?)"?\s*$', re.M)


def load_titles():
    """slug -> page title for every English page, the string a bare link shows."""
    titles = {}
    for coll in ("concepts", "articles", "faqs", "resources"):
        for path in content_paths.collection(coll).glob("*.md"):
            text = open(path, encoding="utf-8").read()
            m = TITLE.search(text.split("\n---", 1)[0])
            if m:
                titles[path.name[:-3]] = m.group(1).strip()
    return titles


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
    strict = "--strict" in sys.argv
    pages = []
    for coll in ("concepts", "articles", "faqs", "resources"):
        pages += sorted(content_paths.collection(coll).glob("*.md"))
    titles = load_titles()

    defects = []
    scanned = 0
    for path in pages:
        if only_changed and str(path) not in changed_paths():
            continue
        scanned += 1
        body = frontmatter_body(str(path))
        found = []
        for target, label in PIPED.findall(body):
            page = target.replace(".md", "").strip()
            # Redundant only when the bare link would print the same string.
            if titles.get(page) == label.strip():
                found.append("%s|%s" % (page, label.strip()))
        if found:
            rel = os.path.relpath(path, WIKI)
            defects.append((rel, sorted(set(found)), len(found)))

    if defects:
        total = sum(n for _, _, n in defects)
        # Report-only by default: the pipe renders identically, so this is noise,
        # not a reader-visible defect. 599 such pipes exist corpus-wide, which is
        # far too many for a hard gate. --strict fails for callers that want that.
        print("%s - %d redundant pipe(s) on %d page(s)." % (
            "FAIL" if strict else "NOTE", total, len(defects)))
        print("The label equals the target's title, so a bare link renders identically.")
        for rel, uniq, n in defects:
            print("  - %s: %d (%s)" % (rel, n, ", ".join(uniq)))
        print("\nOptional: [[x|Title]] -> [[x]]. NEVER touch [[x|x]] — the pipe is what "
              "keeps the link lowercase mid-sentence, because a bare link prints the "
              "capitalised page title.")
        return 1 if strict else 0
    print("OK - no redundant pipes in %d file(s) scanned." % scanned)
    return 0


if __name__ == "__main__":
    sys.exit(main())
