#!/usr/bin/env python3
"""Fail if a translated page's closing connected sections drift from its English source.

The renderer marks a list as a "connected" list (list styling, page-kind icon on each
entry) by matching its `##` heading against the English table plus every locale's
accepted labels from `src/i18n/sectionHeadings.ts`. A translator who invents a
different heading loses that styling silently.

The check is driven by the ENGLISH page, not by the translated one. Collecting the
translated page's headings that already equal the canonical pair and checking their
order only inspects pages that are already right: a page that writes "Verwandte
Konzepte" where German says "Verbundene Konzepte" contributes an empty list, is
skipped, and the gate prints OK while the styling is gone. So read the English
page's closing headings, map them to kinds (concept list, article list), and require
the twin to end with labels of exactly those kinds, in that order, drawn from the
locale's canonical label or one of its recognised variants.

Usage: check-translated-headings.py [--quiet]
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / 'tooling' / 'scripts'))
import content_paths  # noqa: E402  — the ONE resolver for the content root

# The locale list is config-driven, not hardcoded here: content_paths reads
# site.config.json, so adding a locale cannot leave this gate behind.
LOCALES = list(content_paths.TRANSLATED)

# A trailing '## Citation' is legal after the connected lists on a page whose English
# source carries one (article-style concept pages). These are the localized labels the
# renderer accepts for it, so a translated '## 引用' is drift, not an invented heading.
CITATION_LABELS = {'citation', '引用', '인용', 'cita', 'citação', 'zitation', 'حوالہ جات', 'حوالہ', 'مراجع',
                   'kutipan', 'atıf', 'atıflar', 'nimewo', 'nagwa'}

# English labels the renderer treats as connected lists, mapped to the kind used for
# comparison. 'Connected Resources' has no per-locale pair yet, so it is parsed here
# (a page ending Resources/Concepts/Articles stays readable) but never required.
EN_KIND = {'Connected Concepts': 'concepts',
           'Connected Articles': 'articles',
           'Connected Resources': 'resources'}


def parse_tables() -> dict:
    """locale -> {'concepts': [labels], 'articles': [labels]} from the site's own table."""
    src = (ROOT / 'src/i18n/sectionHeadings.ts').read_text(encoding='utf-8')
    body = src[src.index('CONNECTED_HEADINGS'):src.index('/** The connected headings')]
    out = {}
    for loc, cc, ca in re.findall(r"(\w+): \{ connectedConcepts: '([^']*)', connectedArticles: '([^']*)' \}", body):
        out[loc] = {'concepts': [cc], 'articles': [ca]}

    alias_src = src[src.index('CONNECTED_ALIASES'):src.index('};\n\n/** The connected headings')] \
        if 'CONNECTED_ALIASES' in src else ''
    for line in alias_src.splitlines():
        m = re.match(r"\s*(\w+): \{", line)
        if not m:
            continue
        loc = m.group(1)
        if loc not in out:
            continue
        for kind, key in (('concepts', 'connectedConcepts'), ('articles', 'connectedArticles')):
            hit = re.search(rf"{key}: \[([^\]]*)\]", line)
            if hit:
                out[loc][kind] += [x.strip().strip("'") for x in hit.group(1).split(',') if x.strip()]
    return out


def h2s(text: str) -> list:
    return [h.strip() for h in re.findall(r'(?m)^## (.+)$', text)]


def without_trailing_citation(headings: list) -> list:
    if headings and (headings[-1].strip().lower() == 'citation'
                     or headings[-1].strip().lower() in CITATION_LABELS):
        return headings[:-1]
    return headings


def english_connected_tail(headings: list) -> list:
    """The trailing run of English connected headings, as kinds, in document order."""
    heads = without_trailing_citation(headings)
    tail = []
    for h in reversed(heads):
        if h in EN_KIND:
            tail.append(EN_KIND[h])
        else:
            break
    return list(reversed(tail))


def main() -> int:
    quiet = '--quiet' in sys.argv
    tables = parse_tables()
    missing_locales = [l for l in LOCALES if l not in tables]
    if missing_locales:
        print(f'FAIL — no canonical headings for: {", ".join(missing_locales)}')
        return 1

    problems = []
    checked = 0
    skipped_no_source = 0
    for loc in LOCALES:
        by_kind = {k: {v.lower() for v in labels} for k, labels in tables[loc].items()}
        for name in content_paths.COLLECTIONS:
            folder = content_paths.collection(name, loc)
            if not folder.is_dir():
                continue
            for path in sorted(folder.glob('*.md')):
                source = content_paths.collection(name, 'en') / path.name
                if not source.exists():
                    skipped_no_source += 1
                    continue
                required = english_connected_tail(h2s(source.read_text(encoding='utf-8')))
                required = [k for k in required if k in ('concepts', 'articles')]
                if not required:
                    continue
                checked += 1
                heads = without_trailing_citation(h2s(path.read_text(encoding='utf-8')))
                tail = heads[-len(required):]
                kinds = []
                for h in tail:
                    h_l = h.lower()
                    kinds.append(next((k for k in ('concepts', 'articles') if h_l in by_kind[k]), None))
                if kinds != required:
                    problems.append(
                        f'{path.relative_to(ROOT)}: expects {required} as the closing sections, '
                        f'found {[h for h in tail] or "nothing"} '
                        f'(accepted {[tables[loc][k][0] for k in required]})')

    if problems:
        print(f'FAIL — {len(problems)} translated page(s) with drifted connected headings:')
        for p in problems:
            print(f'  {p}')
        print(f'(checked {checked} translated page(s) whose English source ends in connected lists; '
              f'{skipped_no_source} skipped with no English source)')
        return 1
    if not quiet:
        print(f'OK — connected headings canonical on {checked} translated page(s) '
              f'whose English source ends in connected lists')
    return 0


if __name__ == '__main__':
    sys.exit(main())
