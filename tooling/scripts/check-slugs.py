#!/usr/bin/env python3
"""Validate page slugs and the redirect maps that keep old URLs alive.

    python3 tooling/scripts/check-slugs.py

Slugs are presentation identities that end up in shared URLs, so a mistake here
is visible to readers and survives in links other people have already posted.
Two maps encode the history:

  src/data/articleRedirects.ts   ARTICLE_REDIRECTS  (hand-maintained: a merge is
                                 an editorial decision, so nothing generates it)
  src/data/conceptRedirects.ts   CONCEPT_REDIRECTS  (generated from the registry)

Checks that fail the gate:

  1. a redirect key that still has a live page - the route wins, so the entry is
     dead config, and a stale entry hides a real rename;
  2. a redirect target with no page - the redirect sends readers to a 404;
  3. a redirect target that is itself a key - a chain, so the 301 hops;
  4. duplicate keys - legal in a JS object literal, and the last one silently wins;
  5. a redirect target that is not a well-formed slug (keys are exempt: a key is a
     historical URL, and it is often exactly the malformed one being retired);
  6. a redirect key still listed in the generated index.md or journal.md, which
     means a dead slug is being advertised;
  7. a page slug that is not a well-formed slug.

Slugs shared across collections are reported as WARN, not failure: a paper and the
tool it released can legitimately both be called `deeptutor`, and they live at
different routes.

Exit is non-zero if anything failed, so this wires into run-gates.py and CI.
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import content_paths  # noqa: E402
from wiki_config import load_config, path  # noqa: E402

COLLECTIONS = ('articles', 'concepts', 'resources', 'faqs')
SLUG_RE = re.compile(r'^[a-z0-9]+(?:-[a-z0-9]+)*$')
ENTRY_RE = re.compile(r"'([^']+)'\s*:\s*'([^']+)'")


def live_slugs():
    """{collection: set(slug)} for the default locale."""
    pages = {}
    for name in COLLECTIONS:
        pages[name] = {md.stem for md in content_paths.collection(name).glob('*.md')}
    return pages


def read_map(root, filename, const):
    """Parse a `Record<string, string>` literal into [(key, target, line)]."""
    target = os.path.join(root, filename)
    if not os.path.exists(target):
        raise SystemExit(f'missing redirect map: {filename}')
    entries = []
    for lineno, line in enumerate(open(target, encoding='utf-8'), 1):
        if line.lstrip().startswith('//'):
            continue
        m = ENTRY_RE.search(line)
        if m:
            entries.append((m.group(1), m.group(2), lineno))
    if not entries:
        print(f'note: {const} in {filename} has no entries')
    return entries


def listed_slugs(root):
    """Slugs advertised in the generated index.md and journal.md."""
    out = set()
    for name in ('index.md', 'journal.md'):
        target = os.path.join(root, name)
        if not os.path.exists(target):
            continue
        text = open(target, encoding='utf-8').read()
        out.update(re.findall(r'\[\[([^\]|]+)\]\]', text))
    return out


def main():
    cfg = load_config()
    root = path(cfg, 'root')
    pages = live_slugs()
    listed = listed_slugs(root)
    failures, warnings = [], []

    # --- 7: well-formed slugs
    for name, slugs in pages.items():
        for slug in sorted(slugs):
            if not SLUG_RE.match(slug):
                failures.append(f'{name}/{slug}.md: not a well-formed slug (lowercase words joined by single hyphens)')

    # --- WARN: the same slug in more than one collection
    seen = {}
    for name, slugs in pages.items():
        for slug in slugs:
            seen.setdefault(slug, []).append(name)
    for slug, where in sorted(seen.items()):
        if len(where) > 1:
            warnings.append(f'slug "{slug}" exists in {" and ".join(sorted(where))} (different routes, so this is fine if intentional)')

    # --- redirect maps
    maps = [
        ('ARTICLE_REDIRECTS', 'src/data/articleRedirects.ts', 'articles'),
        ('CONCEPT_REDIRECTS', 'src/data/conceptRedirects.ts', 'concepts'),
    ]
    for const, filename, collection in maps:
        entries = read_map(root, filename, const)
        keys = [k for k, _, _ in entries]
        for dup in sorted({k for k in keys if keys.count(k) > 1}):
            failures.append(f'{filename}: duplicate key "{dup}" (the last entry silently wins)')
        for key, target, lineno in entries:
            where = f'{filename}:{lineno}'
            # Only the target must be well-formed. A key is a URL that was published
            # once, so it is historical fact, not a value to normalize: the first real
            # key this gate saw was a truncated slug ending in a hyphen, which is
            # precisely why it needed retiring.
            if not SLUG_RE.match(target):
                failures.append(f'{where}: target "{target}" is not a well-formed slug')
            if key in pages[collection]:
                failures.append(f'{where}: key "{key}" still has a live page at {collection}/{key}.md, so the redirect never fires')
            if target not in pages[collection]:
                failures.append(f'{where}: target "{target}" has no page at {collection}/{target}.md, so this redirect 404s')
            if target in keys and target != key:
                failures.append(f'{where}: target "{target}" is itself a redirect key (chained 301)')
            if key in listed:
                failures.append(f'{where}: key "{key}" is still listed in index.md or journal.md, which advertises a dead slug')

    for line in warnings:
        print(f'WARN  {line}')
    for line in failures:
        print(f'FAIL  {line}')
    total = sum(len(v) for v in pages.values())
    if failures:
        print(f'\nFAIL - {len(failures)} slug or redirect defect(s) across {total} pages'
              f'{" and " + str(len(warnings)) + " warning(s)" if warnings else ""}.')
        return 1
    print(f'OK - {total} slugs valid; redirect maps resolve'
          f'{" (" + str(len(warnings)) + " warning(s) above)" if warnings else ""}.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
