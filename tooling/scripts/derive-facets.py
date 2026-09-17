#!/usr/bin/env python3
"""Derive the typed facet fields from each page's existing concept tags.

`tags` lists the concepts a page touches, mixing kinds together: a pedagogy
(active-learning), a technology (llm), an outcome (student-engagement) and an
ethical theme (privacy) all sit in one flat list. The facet fields
(foundations, pedagogy, technology, assessment, stakeholders, ethics) are the
typed layer: each holds only concepts from one section of
concepts.registry.yaml, so 'show me pedagogy studies' becomes a real query.

Because the registry already files every concept under a section, this
derivation needs NO per-page judgement and NO re-reading of the corpus: each tag
is routed to its section's field by lookup. The same script therefore keeps the
facet fields in sync on every future ingest.

Usage:
    python3 tooling/scripts/derive-facets.py            # report drift (exit 1 if any)
    python3 tooling/scripts/derive-facets.py --apply    # write the facet fields
    python3 tooling/scripts/derive-facets.py --apply --only articles
"""
from __future__ import annotations

import argparse
import glob
import os
import re
import sys

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FACET_VOCAB_TS = os.path.join(WIKI, 'src', 'data', 'facetVocab.ts')
COLLECTIONS = {'articles': 'articles', 'concepts': 'concepts', 'faqs': 'faqs'}


def load_facets() -> tuple[list[str], dict[str, str]]:
    """(field order, slug -> field) read from the GENERATED vocabulary file."""
    src = open(FACET_VOCAB_TS, encoding='utf-8').read()
    fields, slug_to_field = [], {}
    body = src.split('export const FACET_VOCAB = {', 1)[1].split('} as const;', 1)[0]
    for m in re.finditer(r'^\s{2}(\w+): \[(.*?)\n  \],', body, re.S | re.M):
        field = m.group(1)
        fields.append(field)
        for slug in re.findall(r"'([^']+)'", m.group(2)):
            slug_to_field[slug] = field
    # FACET_FIELDS carries the declared order; fall back to discovery order
    order = re.findall(r"field: '(\w+)'", src)
    return (order or fields), slug_to_field


def split_frontmatter(text: str) -> tuple[str, str, str] | None:
    parts = text.split('---', 2)
    if len(parts) < 3:
        return None
    return parts[0], parts[1], parts[2]


def tag_block(fm: str) -> tuple[int, int, list[str]] | None:
    """(start index, end index, tags) of the tags block in the frontmatter."""
    m = re.search(r'^tags:[ \t]*\[(.*?)\][ \t]*$', fm, re.S | re.M)
    if m:
        return m.start(), m.end(), re.findall(r"'?([a-z][a-z0-9-]+)'?", m.group(1))
    m = re.search(r'^tags:[ \t]*\n((?:[ \t]+-[ \t]*\S+[ \t]*\n)+)', fm, re.M)
    if m:
        return m.start(), m.end(), re.findall(r'-[ \t]*([A-Za-z0-9-]+)', m.group(1))
    return None


def desired(fm: str, fields: list[str], slug_to_field: dict[str, str]) -> dict[str, list[str]]:
    block = tag_block(fm)
    if not block:
        return {}
    out: dict[str, list[str]] = {}
    for slug in block[2]:
        field = slug_to_field.get(slug.lower())
        if field:
            out.setdefault(field, []).append(slug.lower())
    return {f: sorted(set(v)) for f, v in out.items()}


def render(desired_fields: dict[str, list[str]], fields: list[str]) -> str:
    return ''.join(
        f'{f}: [{", ".join(desired_fields[f])}]\n' for f in fields if desired_fields.get(f)
    )


def current(fm: str, fields: list[str]) -> dict[str, list[str]]:
    out = {}
    for f in fields:
        m = re.search(rf'^{f}:[ \t]*\[(.*?)\]', fm, re.M)
        if m:
            out[f] = re.findall(r"'?([a-z][a-z0-9-]+)'?", m.group(1))
    return out


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--apply', action='store_true')
    ap.add_argument('--only', choices=sorted(COLLECTIONS))
    ap.add_argument('--quiet', action='store_true')
    args = ap.parse_args()

    fields, slug_to_field = load_facets()
    stale, changed, total = [], 0, 0
    for name, sub in COLLECTIONS.items():
        if args.only and args.only != name:
            continue
        for path in sorted(glob.glob(os.path.join(WIKI, sub, '*.md'))):
            total += 1
            text = open(path, encoding='utf-8').read()
            parts = split_frontmatter(text)
            if not parts:
                continue
            head, fm, rest = parts
            want = desired(fm, fields, slug_to_field)
            have = {f: sorted(v) for f, v in current(fm, fields).items()}
            want_cmp = {f: v for f, v in want.items()}
            if want_cmp == have:
                continue
            stale.append(os.path.relpath(path, WIKI))
            if not args.apply:
                continue
            # remove any existing facet lines, then insert the block after tags
            body = re.sub(rf'^(?:{"|".join(fields)}):[ \t]*\[[^\]]*\][ \t]*\n', '', fm, flags=re.M)
            new_block = render(want, fields)
            if new_block:
                tb = tag_block(body)
                if tb:
                    body = body[:tb[1]] + '\n' + new_block.rstrip('\n') + '\n' + body[tb[1]:].lstrip('\n')
                else:  # no tags block: fall back to a stable anchor
                    m = re.search(r'^confidence:.*$', body, re.M)
                    if not m:
                        print(f'  SKIP (no anchor): {os.path.relpath(path, WIKI)}')
                        continue
                    body = body[:m.end() + 1] + new_block + body[m.end() + 1:]
            open(path, 'w', encoding='utf-8').write(head + '---' + body + '---' + rest)
            changed += 1

    verb = 'updated' if args.apply else 'stale'
    if not args.quiet:
        for p in stale[:20]:
            print(f'  {p}')
        if len(stale) > 20:
            print(f'  ... and {len(stale) - 20} more')
    print(f'{verb}: {len(stale)} of {total} page(s)' + (f' (written: {changed})' if args.apply else ''))
    return 1 if (stale and not args.apply) else 0


if __name__ == '__main__':
    raise SystemExit(main())
