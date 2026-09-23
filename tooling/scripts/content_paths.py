#!/usr/bin/env python3
"""Where the markdown content lives.

The Python half of the `content` block in site.config.json - the same two values
the Astro build reads through src/config/content.ts, so the tooling and the site
cannot drift apart.

Every rendered page is one file, addressed as:

    <repo>/<content root>/<locale>/<collection>/<slug>.md

The default locale has its own folder like any other locale (no content sits bare
at the content root), which means the whole knowledge base is a single tree that
can be opened in Obsidian or handed to any other tool, and the repository can be
re-pointed at a different topic or layout by changing two values.

Usage:

    from content_paths import CONTENT, DEFAULT, COLLECTIONS, TRANSLATED, collection

    for path in sorted(collection('concepts').glob('*.md')): ...
    for locale in TRANSLATED:
        for path in sorted(collection('faqs', locale).glob('*.md')): ...

Set `content.root` to move the whole tree; set `content.defaultDir` to rename the
default locale's folder (it defaults to `i18n.defaultLocale`).
"""
import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

with (ROOT / 'site.config.json').open(encoding='utf-8') as _fh:
    _SITE = json.load(_fh)

_I18N = _SITE.get('i18n') or {}
_CONTENT = _SITE.get('content') or {}

LOCALES = [entry['code'] for entry in (_I18N.get('locales') or [])]
if not LOCALES:
    LOCALES = [(_I18N.get('defaultLocale') or 'en')]

# Folder holding the default (source-language) content. Defaults to the default
# locale code, so the folder name and the route prefix agree by construction.
DEFAULT_DIR = _CONTENT.get('defaultDir') or _I18N.get('defaultLocale') or LOCALES[0]
CONTENT_ROOT = _CONTENT.get('root') or 'content'

CONTENT = ROOT / CONTENT_ROOT                 # every markdown page lives under here
DEFAULT = CONTENT / DEFAULT_DIR               # articles/concepts/faqs/resources
TRANSLATED = [code for code in LOCALES if code != DEFAULT_DIR]
COLLECTIONS = ('articles', 'concepts', 'faqs', 'resources')

# Localised reference docs and the site's own front matter stay at the repo root;
# only the collections above live under CONTENT.


def collection(name, locale=DEFAULT_DIR):
    """Path to one collection folder: <content>/<locale>/<name>."""
    return CONTENT / locale / name


def glob_md(name, locale=DEFAULT_DIR):
    """Glob pattern for every markdown page in one collection."""
    return str(collection(name, locale) / '*.md')


def locale_dirs():
    """(code, path) for every locale folder, default locale first."""
    return [(DEFAULT_DIR, DEFAULT)] + [(code, CONTENT / code) for code in TRANSLATED]


def collection_dirs():
    """(name, locale, path) for every content collection folder that exists."""
    out = []
    for locale in [DEFAULT_DIR, *TRANSLATED]:
        for name in COLLECTIONS:
            path = collection(name, locale)
            if path.is_dir():
                out.append((name, locale, path))
    return out


def rel(path):
    """Repo-relative path for messages."""
    return os.path.relpath(str(path), str(ROOT))


if __name__ == '__main__':
    print(f'repo root:        {ROOT}')
    print(f'content root:     {CONTENT_ROOT}  ({CONTENT})')
    print(f'default locale:   {DEFAULT_DIR}  ({DEFAULT})')
    print(f'locales:          {", ".join(LOCALES)}')
    print(f'translated:       {", ".join(TRANSLATED) or "(none)"}')
    for name, locale, path in collection_dirs():
        print(f'  {locale}/{name:<10} {len(list(path.glob("*.md"))):>4} page(s)')