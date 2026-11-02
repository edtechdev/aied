#!/usr/bin/env python3
"""Fail an article whose own declared concepts are unlinked where a reader meets them first.

The recurring defect this catches (reported twice by the maintainer, 2026-11-02):

  - a page whose whole subject is motivation never linked [[motivation]];
  - a page about trust and AI literacy linked [[trust]] and [[ai-literacy]] only in the
    body, leaving the opening synthesis — the paragraph the maintainer reads first, and
    the only paragraph most readers read — with the concept names as dead text.

Why the existing scan misses it: `inline_link_scan.py` keeps ambiguous generic words
(`motivation`, `trust`, `feedback`, `assessment`, `agency`, ...) in AUTO_APPLY_DENYLIST,
so they are report-only and a pass that stops at `--apply`, or a report whose output is
skimmed, ships the page unlinked. Nothing in the gate suite asked the narrower question
"does this page link the concepts it declares in its metadata?".

Precision rules, because a noisy gate gets ignored:

  * candidates are the page's OWN facet values that resolve to a registered concept, so
    the gate only ever asks a page about subjects it claims;
  * a concept counts as mentioned only via its registry title or a MULTIWORD alias
    (single words are what produce false positives), or via the slug written as prose;
  * EXCLUDE_PAIRS removes the pairs that are lexically right and semantically wrong,
    found on real pages — 'cognitive load' is not cognitive offloading, 'instructional
    design' is not learning design, 'teaching' (verb) is not the teacher role.

Usage:
  python3 tooling/scripts/check-concept-first-mentions.py --changed
  python3 tooling/scripts/check-concept-first-mentions.py <article-slug> [...]
  python3 tooling/scripts/check-concept-first-mentions.py --since 2026-10-25
  python3 tooling/scripts/check-concept-first-mentions.py --all

Exit 1 when any page is over budget, 0 otherwise.
"""
from __future__ import annotations

import argparse
import datetime as _dt
import os
import re
import subprocess
import sys

import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ARTICLES = os.path.join(ROOT, "content", "en", "articles")
REGISTRY = os.path.join(ROOT, "concepts.registry.yaml")

# Facet fields whose values name concept pages. Discipline/level values are pages too,
# but they are contextual rather than the page's subject, so they are not required here.
FACET_FIELDS = (
    "foundations",
    "pedagogy",
    "technology",
    "ethics",
    "assessment",
    "methods",
    "institutions",
)

# (alias, concept slug) pairs that are lexically matched and semantically wrong.
EXCLUDE_PAIRS = {
    ("teaching", "teacher-role"),                 # the verb, not the role
    ("technologies", "ai-technologies"),          # plural filler noun
    ("perceived learning", "self-report-measures"),  # a construct, not a measure type
    ("cognitive load", "cognitive-offloading"),   # CLT theory is not offloading
    ("early warning", "learning-analytics"),      # a system use, not analytics
    ("instructional design", "learning-design"),  # distinct concepts
    ("professional development", "educational-development"),
    ("authorship", "academic-integrity"),         # authorship is not (only) integrity
}


def load_registry() -> dict:
    with open(REGISTRY, encoding="utf-8") as fh:
        return (yaml.safe_load(fh) or {}).get("concepts") or {}


def strong_aliases(slug: str, concept: dict) -> set[str]:
    out = {(concept.get("title") or slug).lower(), slug.replace("-", " ")}
    for alias in concept.get("aliases") or []:
        if len(str(alias).split()) >= 2:
            out.add(str(alias).lower())
    return {a for a in out if len(a) >= 5}


def find_outside_links(text: str, alias: str):
    """First whole-word match that is not already inside a [[...]] link, else None."""
    low = text.lower()
    start = 0
    while True:
        i = low.find(alias, start)
        if i < 0:
            return None
        before = text[:i]
        opens, closes = before.count("[["), before.count("]]")
        word_left = i == 0 or not re.match(r"[\w-]", text[i - 1])
        end = i + len(alias)
        word_right = end == len(text) or not re.match(r"[\w-]", text[end])
        if opens == closes and word_left and word_right:
            return i
        start = i + 1


def split_page(raw: str):
    m = re.match(r"^---\n(.*?)\n---\n", raw, re.S)
    if not m:
        return None, None, None
    try:
        front = yaml.safe_load(m.group(1))
    except Exception:
        return None, None, None
    if not isinstance(front, dict):
        return None, None, None
    return front, raw[: m.end()], raw[m.end():]


def synthesis_span(body: str):
    """(start, end) of the text inside the `> **Synthesis:**` blockquote, or None."""
    m = re.search(r"^> \*\*Synthesis:\*\*([\s\S]*?)(?:\n\n|\Z)", body, re.M)
    if not m:
        return None
    return m.start(1), m.end(1)


def check_page(slug: str, registry: dict):
    path = os.path.join(ARTICLES, slug + ".md")
    if not os.path.exists(path):
        return None
    with open(path, encoding="utf-8") as fh:
        raw = fh.read()
    front, _head, body = split_page(raw)
    if not front or body is None:
        return None
    narrative = body.split("## Citation")[0]
    span = synthesis_span(narrative)
    if not span:
        return None
    syn = narrative[span[0]: span[1]]
    linked_in_syn = {m.group(1) for m in re.finditer(r"\[\[([^\]|#]+)", syn)}
    linked_anywhere = {m.group(1) for m in re.finditer(r"\[\[([^\]|#]+)", narrative)}

    candidates: set[str] = set()
    for field in FACET_FIELDS:
        value = front.get(field)
        if isinstance(value, list):
            candidates |= {v for v in value if isinstance(v, str) and v in registry}

    problems = []
    for concept_slug in sorted(candidates):
        if concept_slug == slug or concept_slug in linked_in_syn:
            continue
        for alias in sorted(strong_aliases(concept_slug, registry[concept_slug]),
                            key=len, reverse=True):
            if (alias, concept_slug) in EXCLUDE_PAIRS:
                continue
            if find_outside_links(syn, alias) is not None:
                state = "linked later" if concept_slug in linked_anywhere else "never linked"
                problems.append((concept_slug, alias, state))
                break
    return problems


def changed_slugs() -> list[str]:
    try:
        out = subprocess.run(
            ["git", "-C", ROOT, "status", "--porcelain", "--", "content/en/articles"],
            capture_output=True, text=True, check=True).stdout
        diff = subprocess.run(
            ["git", "-C", ROOT, "diff", "--name-only", "HEAD", "--", "content/en/articles"],
            capture_output=True, text=True, check=True).stdout
    except subprocess.CalledProcessError:
        return []
    slugs = set()
    for line in (out + diff).splitlines():
        name = line[3:].strip() if line[:2].strip() else line.strip()
        if name.endswith(".md"):
            slugs.add(os.path.basename(name)[:-3])
    return sorted(slugs)


def recent_slugs(since: str) -> list[str]:
    slugs = []
    for name in sorted(os.listdir(ARTICLES)):
        if not name.endswith(".md"):
            continue
        with open(os.path.join(ARTICLES, name), encoding="utf-8") as fh:
            front, _head, _body = split_page(fh.read())
        if not front:
            continue
        stamp = str(front.get("created") or "")[:10]
        if stamp and stamp >= since:
            slugs.append(name[:-3])
    return slugs


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("slugs", nargs="*", help="article slugs to check")
    ap.add_argument("--changed", action="store_true",
                    help="check pages added or modified in the working tree or against HEAD")
    ap.add_argument("--since", metavar="YYYY-MM-DD",
                    help="check pages whose created date is on or after this day")
    ap.add_argument("--all", action="store_true", help="check every article page")
    ap.add_argument("--quiet", action="store_true", help="only print the summary")
    args = ap.parse_args()

    registry = load_registry()
    slugs: list[str] = list(args.slugs)
    if args.changed:
        slugs += changed_slugs()
    if args.since:
        slugs += recent_slugs(args.since)
    if args.all:
        slugs += [n[:-3] for n in sorted(os.listdir(ARTICLES)) if n.endswith(".md")]
    slugs = sorted(set(slugs))
    if not slugs:
        print("OK - no pages in scope.")
        return 0

    failures = 0
    defects = 0
    for slug in slugs:
        problems = check_page(slug, registry)
        if not problems:
            continue
        failures += 1
        defects += len(problems)
        print(f"- {slug}")
        for concept_slug, alias, state in problems:
            print(f"    {concept_slug:34} named in the synthesis as \"{alias}\" "
                  f"({state}) — link the first mention there")

    if not failures:
        print(f"OK - {len(slugs)} page(s): every declared concept is linked where it is first named.")
        return 0
    print(f"\nFAIL - {defects} unlinked first mention(s) on {failures} of {len(slugs)} page(s).")
    print("Link the first mention inside the `> **Synthesis:**` blockquote, using a piped link "
          "when the display text differs from the slug. Only link a mention used in the "
          "concept's own sense; judge each one in its sentence.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
