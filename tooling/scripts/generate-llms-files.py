#!/usr/bin/env python3
"""Regenerate llms.txt and llms-full.txt from the wiki markdown sources."""
import os
import re
import html
import json
import sys
from datetime import date

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wikilink_text import resolve_wikilinks, strip_md_links  # noqa: E402

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

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

def load_titles():
    """slug -> page title for every collection.

    Wikilinks must flatten to what the site shows for the target, which is its
    title, not its slug.
    """
    titles = {}
    for d in ('concepts', 'articles', 'faqs'):
        dirpath = os.path.join(WIKI, d)
        if not os.path.isdir(dirpath):
            continue
        for f in os.listdir(dirpath):
            if f.endswith('.md'):
                fm, _ = parse_md(os.path.join(dirpath, f))
                titles[f[:-3]] = str(fm.get('title', '')).strip('"\'')
    return titles


TITLES = load_titles()


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

def collect():
    articles, concepts, faqs = [], [], []
    for d, store in [('articles', articles), ('concepts', concepts), ('faqs', faqs)]:
        dirpath = os.path.join(WIKI, d)
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

def build_llms_concepts(concepts):
    """Concept pages only, in full.

    `llms-full.txt` carries every article, concept and FAQ and has grown past 15 MB,
    which several chat products refuse to accept as an attachment or paste. The
    concept pages are the part worth handing a general assistant: they are the
    knowledge base's synthesis rather than one paper's findings, they carry the
    wikilinks that let an assistant follow a thread, and they are roughly a quarter
    of the full text. Articles stay out on purpose — a reader who wants a specific
    study can point the assistant at that page's URL.
    """
    lines = []
    lines.append("# AI in Education Knowledge Base — Concepts")
    lines.append(f"> Full text of {len(concepts)} concept pages from the AI in Education Knowledge Base: "
                 "the syntheses of what the research shows, rather than individual studies. "
                 "Small enough to attach to a chat that will not take the complete file.")
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
    return "\n".join(lines) + "\n"


def main():
    articles, concepts, faqs = collect()
    os.makedirs(OUT, exist_ok=True)

    with open(os.path.join(OUT, 'llms.txt'), 'w', encoding='utf-8') as fh:
        fh.write(build_llms_txt(articles, concepts, faqs))
    with open(os.path.join(OUT, 'llms-full.txt'), 'w', encoding='utf-8') as fh:
        fh.write(build_llms_full(articles, concepts, faqs))
    with open(os.path.join(OUT, 'llms-concepts.txt'), 'w', encoding='utf-8') as fh:
        fh.write(build_llms_concepts(concepts))

    print(f"Articles: {len(articles)}, Concepts: {len(concepts)}, FAQs: {len(faqs)}")
    print(f"llms.txt: {os.path.getsize(os.path.join(OUT, 'llms.txt'))} bytes")
    print(f"llms-full.txt: {os.path.getsize(os.path.join(OUT, 'llms-full.txt'))} bytes")
    concepts_bytes = os.path.getsize(os.path.join(OUT, 'llms-concepts.txt'))
    print(f"llms-concepts.txt: {concepts_bytes} bytes ({concepts_bytes / 1024 / 1024:.1f} MB)")
    # This file exists to stay under chat attachment limits; say so if it stops doing that.
    if concepts_bytes > 9_500_000:
        print(f"WARNING: llms-concepts.txt is {concepts_bytes / 1024 / 1024:.1f} MB, over the 10 MB "
              "attachment limit it exists to stay under — trim the concept bodies or split the file.")

if __name__ == '__main__':
    main()
