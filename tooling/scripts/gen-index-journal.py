#!/usr/bin/env python3
"""Generate index.md and journal.md from the pages themselves.

Both files were maintained by hand, and both drifted: a page could be counted
without being listed, and the journal's own total disagreed with the entries it
contained (twice, by 11 and by 2). Nothing about either file needs a writer —
every line is derivable from page frontmatter — so they are generated here and
checked by a gate, the same way `gen-concept-artifacts.py` guards the facet
vocabulary and the concept index.

    python3 tooling/scripts/gen-index-journal.py            # write both files
    python3 tooling/scripts/gen-index-journal.py --check     # fail if out of date

What is derived, and from what:

  index.md    the article+concept list (sorted by slug), the resource list, the
              per-collection counts, and the "Last updated" date
  journal.md  one entry per page grouped by its `created` date (newest first),
              the total, and the same "Last updated" date

Both files show "Last updated" as the newest `updated` date among the pages, not
the day the script happens to run: a generated file whose content changes every
midnight would make --check useless.

Ordering inside a day is by `created` descending, then slug, so the output is a
pure function of the pages. Page order in index.md is by slug.

Scope is the default locale only. Translated pages are not listed or counted.

FAQs are counted but have never been listed in index.md or given journal entries.
That gap is preserved rather than silently changed; pass --include-faqs to add
them (and expect the counts to stay the same, since they were always counted).
"""
import os
import re
import sys
from datetime import datetime

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import content_paths  # noqa: E402

try:
    import yaml
except ImportError:  # pragma: no cover
    sys.exit('PyYAML is required: pip install pyyaml')
from wiki_config import load_config, path  # noqa: E402

# Collection -> the emoji a journal entry carries, in the order entries are
# written inside a date group. Articles first, then concepts, then resources.
JOURNAL_EMOJI = {'articles': '\U0001f4c4', 'concepts': '\U0001f4d8', 'resources': '\U0001f6f0'}
FAQ_EMOJI = '\u2753'
INDEX_SECTIONS = ('articles', 'concepts')

FRONTMATTER = re.compile(r'\A---\s*\n(.*?)\n---\s*\n', re.S)


def read_frontmatter(md_path):
    """Return title/created/updated from a page's YAML frontmatter.

    Parsed with PyYAML rather than by hand: titles legitimately contain escaped
    quotes, trailing apostrophes and colons, and a hand-rolled reader either
    leaves the escapes in or strips a real character off the end. PyYAML is
    already a gate-suite dependency (gen-concept-artifacts.py requires it).
    """
    with open(md_path, encoding='utf-8') as fh:
        text = fh.read()
    m = FRONTMATTER.match(text)
    if not m:
        raise SystemExit(f'no frontmatter: {md_path}')
    data = yaml.safe_load(m.group(1)) or {}
    title = data.get('title')
    if not title:
        raise SystemExit(f'no title: {md_path}')

    def day(value):
        if value is None:
            return ''
        return value.strftime('%Y-%m-%dT%H:%M:%S') if hasattr(value, 'strftime') else str(value)

    return str(title), day(data.get('created')), day(data.get('updated'))


def load_pages():
    """{collection: [(slug, title, created, updated), ...]} for the default locale.

    FAQs are loaded even though they are not listed: the count line has always
    included them, and a generated file must not quietly drop a number.
    """
    pages = {}
    for name in list(JOURNAL_EMOJI) + ['faqs']:
        directory = content_paths.collection(name)
        entries = []
        for md in sorted(directory.glob('*.md')):
            title, created, updated = read_frontmatter(md)
            entries.append({'slug': md.stem, 'title': title, 'created': created or '', 'updated': updated or ''})
        pages[name] = entries
    return pages


def stamp(pages):
    """Newest `updated` date across every page, as YYYY-MM-DD."""
    dates = [p['updated'][:10] for entries in pages.values() for p in entries if p['updated']]
    return max(dates) if dates else datetime.now().strftime('%Y-%m-%d')


def render_index(pages, updated, include_faqs=False):
    lines = ['# Index', '', f'Last updated: {updated}', '']
    counts = ['{}: {}'.format(name.capitalize().replace('Faqs', 'FAQs'), len(pages.get(name, [])))
              for name in ('articles', 'concepts', 'resources', 'faqs')]
    lines += [' | '.join(counts), '', '## Concepts', '']
    listing = pages.get('articles', []) + pages.get('concepts', [])
    if include_faqs:
        listing = listing + pages.get('faqs', [])
    for page in sorted(listing, key=lambda p: p['slug']):
        lines.append(f"- [[{page['slug']}]] — {page['title']}")
    lines += ['', '## Resources', '']
    for page in sorted(pages.get('resources', []), key=lambda p: p['slug']):
        lines.append(f"- [[{page['slug']}]] — {page['title']}")
    return '\n'.join(lines) + '\n'


def render_journal(pages, updated, include_faqs=False):
    journaled = {k: v for k, v in pages.items() if k in JOURNAL_EMOJI}
    emoji = dict(JOURNAL_EMOJI)
    if include_faqs:
        journaled['faqs'] = pages.get('faqs', [])
        emoji['faqs'] = FAQ_EMOJI
    total = sum(len(v) for v in journaled.values())
    lines = ['# Journal', '', f'Last updated: {updated} | Total entries: {total}', '']
    # Group by the date part of `created`; a page with no created date cannot be
    # placed in the timeline, which the dates gate treats as a defect.
    by_day = {}
    for name, entries in journaled.items():
        for page in entries:
            day = (page['created'] or '')[:10]
            if day:
                by_day.setdefault(day, []).append((name, page))
    for day in sorted(by_day, reverse=True):
        lines += [f'## {day}', '']
        # Newest within the day first, slug as the tiebreak so the output is stable
        # when several pages share a timestamp.
        for name, page in sorted(by_day[day], key=lambda item: (item[1]['created'], item[1]['slug']), reverse=True):
            lines.append(f"- {emoji[name]} [[{page['slug']}]] — {page['title']}")
        lines.append('')
    return '\n'.join(lines).rstrip('\n') + '\n'


def main():
    argv = sys.argv[1:]
    check = '--check' in argv
    cfg = load_config()
    root = path(cfg, 'root')
    pages = load_pages()
    include_faqs = '--include-faqs' in argv
    updated = stamp(pages)
    outputs = {'index.md': render_index(pages, updated, include_faqs),
               'journal.md': render_journal(pages, updated, include_faqs)}

    if check:
        stale = []
        for name, want in outputs.items():
            target = os.path.join(root, name)
            have = open(target, encoding='utf-8').read() if os.path.exists(target) else ''
            if have != want:
                stale.append((name, have, want))
        if stale:
            for name, have, want in stale:
                h, w = have.split('\n'), want.split('\n')
                first = next((i for i in range(max(len(h), len(w))) if i >= len(h) or i >= len(w) or h[i] != w[i]), 0)
                print(f'{name} is out of date at line {first + 1}:')
                if first < len(h):
                    print(f'  on disk:  {h[first][:110]}')
                if first < len(w):
                    print(f'  expected: {w[first][:110]}')
                print(f'  ({len(h)} lines on disk vs {len(w)} generated)')
            sys.exit(f"\n{len(stale)} generated file(s) out of date — run: "
                     "python3 tooling/scripts/gen-index-journal.py")
        print(f'OK - index.md and journal.md are up to date '
              f'({len(pages["articles"])} articles, {len(pages["concepts"])} concepts, '
              f'{len(pages["resources"])} resources, {len(pages["faqs"])} FAQs).')
        return 0

    for name, text in outputs.items():
        target = os.path.join(root, name)
        before = open(target, encoding='utf-8').read() if os.path.exists(target) else None
        with open(target, 'w', encoding='utf-8') as fh:
            fh.write(text)
        if before == text:
            print(f'{name}: unchanged')
        else:
            old_lines = (before or '').split('\n')
            new_lines = text.split('\n')
            print(f'{name}: written ({len(old_lines)} -> {len(new_lines)} lines)')
    return 0


if __name__ == '__main__':
    sys.exit(main())
