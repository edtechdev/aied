#!/usr/bin/env python3
"""Check the article-only `evidence_context` field. HARD gate for new articles.

`evidence_context` records where the evidence behind an article was actually
collected:

    educational       the study measured education directly
    non_educational   implications are extrapolated from another setting
    mixed             both educational and non-educational settings were studied

The field is optional on legacy pages: absence means "not yet classified", never
"educational". Articles created on or after the configured `required_since` date
must carry it. The gate also rejects the field on concepts, FAQs and resources,
where it has no meaning and would otherwise be silently stripped by Zod.

Usage:
  python3 tooling/scripts/check-evidence-context.py
  python3 tooling/scripts/check-evidence-context.py --changed
"""
from __future__ import annotations

import argparse
import os
import re
import subprocess
import sys

import yaml

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import content_paths
import wiki_config

ALLOWED = {'educational', 'non_educational', 'mixed'}
DEFAULT_REQUIRED_SINCE = '2026-11-08'


def frontmatter(path: str) -> dict:
    with open(path, encoding='utf-8') as fh:
        text = fh.read()
    m = re.match(r'^---\n(.*?)\n---\n', text, re.S)
    if not m:
        return {}
    try:
        return yaml.safe_load(m.group(1)) or {}
    except yaml.YAMLError:
        # The YAML/schema gates report the parse error; this gate should not
        # duplicate it as a content decision.
        return {}


def changed_paths() -> set[str]:
    out = subprocess.run(
        ['git', 'status', '--porcelain', '--', 'content'],
        cwd=WIKI, capture_output=True, text=True,
    ).stdout
    paths = set()
    for line in out.splitlines():
        if not line.strip():
            continue
        rel = line[3:].strip().strip('"')
        if ' -> ' in rel:
            rel = rel.split(' -> ')[-1]
        paths.add(os.path.normpath(os.path.join(WIKI, rel)))
    return paths


def article_errors(meta: dict, rel: str, required_since: str) -> tuple[list[str], str]:
    """Return (errors, status) for one article; status is required|legacy|present."""
    value = meta.get('evidence_context')
    created = str(meta.get('created') or '')[:10]
    errors: list[str] = []
    if value is not None and str(value) not in ALLOWED:
        errors.append(f'{rel}: evidence_context {value!r} is not one of {sorted(ALLOWED)}')
    if created and created >= required_since:
        if value is None:
            errors.append(
                f'{rel}: created {created} but has no evidence_context '
                f'(required from {required_since})'
            )
        return errors, 'required'
    if value is None:
        return errors, 'legacy'
    return errors, 'present'


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--changed', action='store_true',
                    help='check only content files modified in the working tree')
    args = ap.parse_args()

    cfg = wiki_config.load_config()
    required_since = str(
        wiki_config.get(cfg, 'evidence_context.required_since', DEFAULT_REQUIRED_SINCE)
        or DEFAULT_REQUIRED_SINCE
    )
    only_changed = changed_paths() if args.changed else None

    errors: list[str] = []
    required = present = legacy = 0

    for path in sorted(content_paths.collection('articles').glob('*.md')):
        if only_changed is not None and str(path) not in only_changed:
            continue
        meta = frontmatter(str(path))
        rel = os.path.relpath(path, WIKI)
        page_errors, status = article_errors(meta, rel, required_since)
        errors.extend(page_errors)
        if meta.get('evidence_context') is not None:
            present += 1
        if status == 'required':
            required += 1
        elif status == 'legacy':
            legacy += 1

    # The field is article-only. Catch it on the other collections before Zod
    # silently drops it and the author believes the page is classified.
    for collection in ('concepts', 'faqs', 'resources'):
        for path in sorted(content_paths.collection(collection).glob('*.md')):
            if only_changed is not None and str(path) not in only_changed:
                continue
            meta = frontmatter(str(path))
            if 'evidence_context' in meta:
                errors.append(
                    f'{os.path.relpath(path, WIKI)}: evidence_context is an '
                    f'article-only field'
                )

    print(
        f'Evidence context: {present} article(s) carry a context; '
        f'{required} new article(s) require one (since {required_since}); '
        f'{legacy} legacy article(s) are unclassified.'
    )
    if errors:
        print(f'FAILED - {len(errors)} evidence-context defect(s):')
        for error in errors[:80]:
            print(f'  - {error}')
        if len(errors) > 80:
            print(f'  ... and {len(errors) - 80} more')
        return 1
    print('OK - evidence context is valid where required.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
