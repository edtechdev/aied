#!/usr/bin/env python3
"""Regenerate llms.txt and llms-full.txt from the wiki markdown sources."""
import os
import re
import html
import argparse
import json
import sys
from datetime import date

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wikilink_text import resolve_wikilinks, strip_md_links  # noqa: E402

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import content_paths
import pathlib


# Single source of truth for site-wide metadata (shared with the Astro site
# and build-epub.py via site.config.json at the repo root).
with open(os.path.join(WIKI, 'site.config.json'), encoding='utf-8') as _cfg:
    SITE = json.load(_cfg)
SITE_URL = SITE['url']
BASE = SITE_URL
OUT = os.path.join(WIKI, "public")

def parse_md(path):
    """Return (frontmatter_dict, body_markdown) from a markdown file."""
    with open(path, encoding='utf-8') as fh:
        content = fh.read()
    if not content.startswith('---'):
        return {}, content
    parts = content.split('---', 2)
    if len(parts) < 3:
        return {}, content
    fm_text = parts[1].strip()
    fm = {}
    for line in fm_text.split('\n'):
        if ':' in line:
            key, _, val = line.partition(':')
            fm[key.strip()] = val.strip().strip('"\'')
    return fm, parts[2].strip()

def load_titles(locale):
    """slug -> page title for every collection, in one locale.

    Wikilinks must flatten to what the site shows for the target, which is its
    title, not its slug. A translated page carries the translated title, so this
    must be built from the requested locale or the links contradict the prose.
    """
    titles = {}
    for d in ('concepts', 'articles', 'faqs'):
        dirpath = str(content_paths.collection(d, locale))
        if not os.path.isdir(dirpath):
            continue
        for f in os.listdir(dirpath):
            if f.endswith('.md'):
                fm, _ = parse_md(os.path.join(dirpath, f))
                titles[f[:-3]] = str(fm.get('title', '')).strip('"\'')
    return titles


# Filled per locale in main(): resolve_wikilinks reads this module global.
TITLES = {}


def first_para(md):
    """Extract first meaningful paragraph as description."""
    # Skip blockquote synthesis marker
    text = re.sub(r'^>\s*', '', md, flags=re.MULTILINE)
    # Take first non-empty, non-heading paragraph
    for para in re.split(r'\n\s*\n', text):
        para = para.strip()
        if not para or para.startswith('#'):
            continue
        # Flat text: a piped wikilink keeps its label, a bare one becomes the
        # target's page title, so no raw slug can reach the output.
        para = resolve_wikilinks(para, title_of=TITLES.get)
        para = strip_md_links(para)
        para = re.sub(r'\s+', ' ', para).strip()
        if len(para) > 30:
            return para[:400]
    return ''

def concept_order():
    """Return the ordered list of concept slugs per the sidebar taxonomy in
    src/data/conceptIndex.ts. Concepts not listed (none currently) sort last
    alphabetically. This keeps llms.txt / llms-full.txt aligned with the
    site-wide sidebar navigation order."""
    idx_path = os.path.join(WIKI, 'src', 'data', 'conceptIndex.ts')
    order = []
    try:
        with open(idx_path, encoding='utf-8') as fh:
            ts = fh.read()
        # Collect slug strings in the order the sections/groups declare them.
        for m in re.finditer(r"'([a-z0-9-]+)'", ts):
            slug = m.group(1)
            if slug not in order:
                order.append(slug)
    except FileNotFoundError:
        pass
    return order

def collect(locale):
    articles, concepts, faqs = [], [], []
    for d, store in [('articles', articles), ('concepts', concepts), ('faqs', faqs)]:
        dirpath = str(content_paths.collection(d, locale))
        if not os.path.isdir(dirpath):
            continue
        for f in sorted(os.listdir(dirpath)):
            if not f.endswith('.md'):
                continue
            slug = f[:-3]
            fm, body = parse_md(os.path.join(dirpath, f))
            title = fm.get('title', slug)
            desc = first_para(body)
            store.append({
                'slug': slug,
                'title': title,
                'desc': desc,
                'url': f"{BASE}/{d}/{slug}/",
                'body': body,
                'fm': fm,
            })
    # Order concepts by the sidebar taxonomy (new concept hierarchy), not alphabetically.
    order = concept_order()
    order_index = {slug: i for i, slug in enumerate(order)}
    concepts.sort(key=lambda c: order_index.get(c['slug'], len(order) + 1))
    return articles, concepts, faqs

def build_llms_txt(articles, concepts, faqs):
    lines = []
    lines.append("# AI in Education Knowledge Base")
    lines.append(f"> A comprehensive knowledge base of {len(concepts)} concepts, {len(articles)} research articles, and {len(faqs)} FAQs covering AI in education — frameworks, methodologies, and papers.")
    lines.append("")
    lines.append("## Concepts")
    lines.append("")
    for c in concepts:
        desc = c['desc'].replace('\n', ' ')
        lines.append(f"- [{c['title']}]({c['url']}): {desc}")
    lines.append("")
    lines.append("## FAQs")
    lines.append("")
    for f in faqs:
        desc = f['desc'].replace('\n', ' ')
        lines.append(f"- [{f['title']}]({f['url']}): {desc}")
    lines.append("")
    lines.append("## Articles")
    lines.append("")
    for a in articles:
        desc = a['desc'].replace('\n', ' ')
        lines.append(f"- [{a['title']}]({a['url']}): {desc}")
    return "\n".join(lines) + "\n"

def build_llms_full(articles, concepts, faqs):
    lines = []
    lines.append("# AI in Education Knowledge Base — Full Content")
    lines.append(f"> Complete text of {len(concepts)} concepts, {len(articles)} articles, and {len(faqs)} FAQs.")
    lines.append("")
    lines.append("# Concepts")
    lines.append("")
    for c in concepts:
        lines.append(f"## [{c['title']}]({c['url']})")
        lines.append("")
        lines.append(c['body'])
        lines.append("")
        lines.append("---")
        lines.append("")
    lines.append("# FAQs")
    lines.append("")
    for f in faqs:
        lines.append(f"## [{f['title']}]({f['url']})")
        lines.append("")
        lines.append(f['body'])
        lines.append("")
        lines.append("---")
        lines.append("")
    lines.append("# Articles")
    lines.append("")
    for a in articles:
        lines.append(f"## [{a['title']}]({a['url']})")
        lines.append("")
        # Strip synthesis blockquote markers for readability
        body = a['body']
        lines.append(body)
        lines.append("")
        lines.append("---")
        lines.append("")
    return "\n".join(lines) + "\n"

def build_llms_concepts(concepts, faqs):
    """Concept and FAQ pages, in full.

    `llms-full.txt` carries every article, concept and FAQ and has grown past 15 MB,
    which several chat products refuse to accept as an attachment or paste. The
    concept and FAQ pages are the part worth handing a general assistant: the
    concepts are the knowledge base's synthesis rather than one paper's findings,
    the FAQs are the questions those syntheses answer, both carry the wikilinks
    that let an assistant follow a thread, and together they are roughly a quarter
    of the full text. Articles stay out on purpose — a reader who wants a specific
    study can point the assistant at that page's URL.
    """
    lines = []
    lines.append("# AI in Education Knowledge Base — Concepts and FAQs")
    lines.append(f"> Full text of {len(concepts)} concept pages and {len(faqs)} FAQ pages from the AI in "
                 "Education Knowledge Base: the syntheses of what the research shows, and the "
                 "questions those syntheses answer. Small enough to attach to a chat that will not "
                 "take the complete file.")
    lines.append("")
    lines.append("Each page below is linked at its address on the site, so an assistant that can browse "
                 "may prefer to follow the link; the text is included so an assistant that cannot browse "
                 "can still answer from it. The individual research papers behind these syntheses are "
                 "linked from each page and are not reproduced here.")
    lines.append("")
    lines.append("# Concepts")
    lines.append("")
    for c in concepts:
        lines.append(f"## [{c['title']}]({c['url']})")
        lines.append("")
        lines.append(c['body'])
        lines.append("")
        lines.append("---")
        lines.append("")
    lines.append("# FAQs")
    lines.append("")
    for f in faqs:
        lines.append(f"## [{f['title']}]({f['url']})")
        lines.append("")
        lines.append(f['body'])
        lines.append("")
        lines.append("---")
        lines.append("")
    return "\n".join(lines) + "\n"


def buildable_locales(min_pages=20):
    """Locale codes with enough translated content to be worth an offline build.

    A locale folder exists for every configured language as soon as its chrome is
    translated, so folder existence says nothing about content. Only locales whose
    translated concept+FAQ pages reach the threshold get artifacts, which means a
    new language starts producing them on its own once its pages land.
    """
    out = [content_paths.DEFAULT_DIR]
    for code in content_paths.LOCALES:
        if code == content_paths.DEFAULT_DIR:
            continue
        n = 0
        for d in ('concepts', 'faqs'):
            p = pathlib.Path(str(content_paths.collection(d, code)))
            if p.is_dir():
                n += len(list(p.glob('*.md')))
        if n >= min_pages:
            out.append(code)
    return out


def locale_note(locale):
    """The locale's own description line for the header, from site.config.json."""
    for entry in ((SITE.get('i18n') or {}).get('locales') or []):
        if entry.get('code') == locale:
            return entry.get('offlineDescription') or ''
    return ''


def main():
    ap = argparse.ArgumentParser(description='Regenerate the llms files for one locale.')
    ap.add_argument('--locale', default=None,
                    help='locale code (default: the site default locale)')
    ap.add_argument('--all-buildable', action='store_true',
                    help='regenerate for every locale with enough translated content')
    args = ap.parse_args()

    if args.all_buildable:
        codes = buildable_locales()
    else:
        codes = [args.locale or content_paths.DEFAULT_DIR]

    for code in codes:
        build_one(code)


def build_one(locale):
    """Write this locale's llms files. Naming mirrors the route model: the default
    locale is unprefixed, every other locale carries its code as an infix."""
    global TITLES
    TITLES = load_titles(locale)

    is_default = locale == content_paths.DEFAULT_DIR
    articles, concepts, faqs = collect(locale)
    os.makedirs(OUT, exist_ok=True)

    suffix = '' if is_default else f'.{locale}'
    names = {
        'catalog': f'llms{suffix}.txt',
        'concepts': f'llms{suffix}-concepts.txt',
        'full': f'llms{suffix}-full.txt',
    }

    note = locale_note(locale)
    def decorate(text):
        """For a translated file, REPLACE the generated English description with the
        locale's own note. Adding a second line instead leaves the English description
        below it, which then advertises other-language counts in the wrong language."""
        if is_default or not note:
            return text
        lines = text.split('\n')
        for i, ln in enumerate(lines):
            if ln.startswith('> '):
                lines[i] = f'> {note}'
                return '\n'.join(lines)
        return text

    with open(os.path.join(OUT, names['catalog']), 'w', encoding='utf-8') as fh:
        fh.write(decorate(build_llms_txt(articles, concepts, faqs)))
    with open(os.path.join(OUT, names['concepts']), 'w', encoding='utf-8') as fh:
        fh.write(decorate(build_llms_concepts(concepts, faqs)))
    # A full dump for a non-default locale would be mostly English articles wearing a
    # translated filename, which is exactly the kind of dishonesty the disclosure
    # fields exist to prevent. Articles are not translated, so it is not written.
    if is_default:
        with open(os.path.join(OUT, names['full']), 'w', encoding='utf-8') as fh:
            fh.write(build_llms_full(articles, concepts, faqs))

    print(f"[{locale}] Articles: {len(articles)}, Concepts: {len(concepts)}, FAQs: {len(faqs)}")
    for key in ('catalog', 'concepts', 'full'):
        p = os.path.join(OUT, names[key])
        if os.path.exists(p):
            print(f"  {names[key]}: {os.path.getsize(p)} bytes")
    concepts_bytes = os.path.getsize(os.path.join(OUT, names['concepts']))
    if concepts_bytes > 9_500_000:
        print(f"  WARNING: {names['concepts']} is {concepts_bytes / 1024 / 1024:.1f} MB, over the 10 MB "
              "attachment limit it exists to stay under — trim or split the file.")


if __name__ == '__main__':
    main()
