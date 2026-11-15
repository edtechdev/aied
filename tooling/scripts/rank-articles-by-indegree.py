#!/usr/bin/env python3
"""Rank every article in the corpus by how often other pages link to it.

Why: a "top N studies" page has to be selected from the whole corpus, not from
the last ingest window. Inbound links are the corpus's own judgement of which
studies carry a claim worth repeating, so they make a better shortlist than
recency, and far better than keyword search.

Output is one line per article: inbound count, confidence, method, slug, title.
Read the synthesis of the shortlist before choosing; the ranking is a filter,
not the answer.

Usage:
    python3 rank-articles-by-indegree.py --content content/en --top 40
    python3 rank-articles-by-indegree.py --content content/en --min-confidence high
"""
import argparse
import collections
import glob
import os
import re

ARTICLE_RE = re.compile(r"\[\[([a-z0-9][a-z0-9-]+)(?:\|[^\]]*)?\]\]")
PATH_RE = re.compile(r"\(/aied/articles/([a-z0-9][a-z0-9-]+)/\)")


def frontmatter_value(fm, field):
    m = re.search(r"^%s:\s*(.+)$" % re.escape(field), fm, re.M)
    if not m:
        return ""
    return m.group(1).strip().strip('"').strip("'")


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--content", default="content/en", help="content root to scan")
    ap.add_argument("--top", type=int, default=40, help="how many rows to print")
    ap.add_argument(
        "--min-confidence",
        default="",
        help="drop rows whose confidence is below this value (e.g. medium, high)",
    )
    args = ap.parse_args()

    article_paths = sorted(glob.glob(os.path.join(args.content, "articles", "*.md")))
    if not article_paths:
        raise SystemExit("no articles under %s/articles" % args.content)
    slugs = {os.path.basename(p)[:-3] for p in article_paths}

    counts = collections.Counter()
    for path in glob.glob(os.path.join(args.content, "**", "*.md"), recursive=True):
        with open(path, encoding="utf-8") as fh:
            text = fh.read()
        here = os.path.basename(path)[:-3]
        for target in set(ARTICLE_RE.findall(text)) | set(PATH_RE.findall(text)):
            if target in slugs and target != here:
                counts[target] += 1

    rank = {"low": 0, "medium": 1, "high": 2}
    floor = rank.get(args.min_confidence.lower(), -1)

    rows = []
    for path in article_paths:
        slug = os.path.basename(path)[:-3]
        with open(path, encoding="utf-8") as fh:
            text = fh.read()
        fm = text.split("---", 2)[1] if text.startswith("---") else ""
        conf = frontmatter_value(fm, "confidence").lower()
        method = frontmatter_value(fm, "research_method").strip("[]")
        title = frontmatter_value(fm, "title")
        if rank.get(conf, -1) < floor:
            continue
        rows.append((counts[slug], conf, method[:34], slug, title[:70]))

    rows.sort(key=lambda r: (-r[0], r[3]))
    print("%4s %-6s %-34s %s" % ("in", "conf", "method", "slug / title"))
    for n, conf, method, slug, title in rows[: args.top]:
        print("%4d %-6s %-34s %s | %s" % (n, conf, method, slug, title))


if __name__ == "__main__":
    main()
