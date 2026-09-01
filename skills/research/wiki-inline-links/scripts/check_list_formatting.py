#!/usr/bin/env python3
"""Scan wiki article/concept pages for markdown list-formatting defects that break rendering.

Detects the recurring "every numbered item renders as 1." bug, which happens when
consecutive ordered-list items are separated by a blank line (CommonMark splits them
into separate lists, each restarting at 1).

Usage:
    python3 check_list_formatting.py <WIKI_PATH> [--all | <slug> ...]

Exit code 0 = no defects, 1 = defects found (list them). Stdlib only.
"""
import os
import re
import sys

# A numbered item immediately followed by a blank line then another numbered item
# of the SAME list breaks the list into separate lists, restarting at 1.
ORDERED_SPLIT = re.compile(r"^(\d+)\. .*\n\n(?=(\d+)\. )", re.M)

# A standalone source/PDF link line in the narrative body (e.g. "📄 [PDF](https://arxiv.org/pdf/…)")
# is redundant — the source must be linked ONLY in the bottom ## Citation (title→source, one link).
# These stray top-of-page links were a recurring maintainer-flagged defect; flag any line that is
# *only* a markdown external link (optionally prefixed with "📄" and/or "arXiv ·"), plus "📄 DOI:/arXiv"
# bare lines. The ## Citation section is excluded so its legitimate title→source link never triggers.
STRAY_SOURCE_LINK = re.compile(
    r"^\s*(?:📄\s*)?(?:arXiv\s*·\s*)?\[[^\]]+\]\(https?://[^\s)]+\)\s*$", re.M
)
STRAY_SOURCE_BARE = re.compile(r"^\s*📄\s*(?:DOI|arXiv)\b", re.M)


def scan_file(path):
    try:
        body = open(path, encoding="utf-8").read()
    except Exception as e:
        return [f"cannot read: {e}"]
    if body.count("---") >= 2:
        parts = body.split("---", 2)
        body = parts[2]  # narrative only; ignore frontmatter
    # Exclude the citation section entirely — its title→source hyperlink is expected.
    narrative = body.split("## Citation", 1)[0]
    issues = []
    for m in ORDERED_SPLIT.finditer(body):
        cur = int(m.group(1))
        nxt = int(m.group(2))
        # blank line splits a list when the next item continues the sequence
        if nxt == cur + 1:
            line_no = body[:m.start()].count("\n") + 1
            snippet = m.group(0).split("\n")[0][:50]
            issues.append(f"ordered-list blank-line split near line {line_no} ({snippet}…)")
    for m in list(STRAY_SOURCE_LINK.finditer(narrative)) + list(
        STRAY_SOURCE_BARE.finditer(narrative)
    ):
        line_no = narrative[:m.start()].count("\n") + 1
        issues.append(
            f"stray source/PDF link in body (line {line_no}): {m.group(0).strip()[:60]} "
            f"— the source must be hyperlinked ONLY in the bottom ## Citation"
        )
    return issues


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return 2
    wiki = sys.argv[1]
    targets = []
    if "--all" in sys.argv[2:]:
        for d in ("articles", "concepts"):
            for f in sorted(os.listdir(os.path.join(wiki, d))):
                if f.endswith(".md"):
                    targets.append(os.path.join(wiki, d, f))
    else:
        for slug in sys.argv[2:]:
            for d in ("articles", "concepts"):
                p = os.path.join(wiki, d, slug + ".md")
                if os.path.exists(p):
                    targets.append(p)
    failures = 0
    for p in targets:
        for iss in scan_file(p):
            print(f"{os.path.relpath(p, wiki)}: {iss}")
            failures += 1
    print(f"\nScanned {len(targets)} page(s). Defects: {failures}")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
