#!/usr/bin/env python3
"""Regenerate llms.txt and llms-full.txt from the wiki markdown sources."""
import os
import re
import html
from datetime import date

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
BASE = "https://edtechdev.github.io/aied"
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

def first_para(md):
    """Extract first meaningful paragraph as description."""
    # Skip blockquote synthesis marker
    text = re.sub(r'^>\s*', '', md, flags=re.MULTILINE)
    # Take first non-empty, non-heading paragraph
    for para in re.split(r'\n\s*\n', text):
        para = para.strip()
        if not para or para.startswith('#'):
            continue
        # Remove wikilinks for plain text
        para = re.sub(r'\[\[([^\]|]+)(?:\|[^\]]+)?\]\]', r'\1', para)
        para = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', para)
        para = re.sub(r'\s+', ' ', para).strip()
        if len(para) > 30:
            return para[:400]
    return ''

def collect():
    articles, concepts = [], []
    for d, store in [('articles', articles), ('concepts', concepts)]:
        dirpath = os.path.join(WIKI, d)
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
    return articles, concepts

def build_llms_txt(articles, concepts):
    lines = []
    lines.append("# AI in Education Wiki")
    lines.append(f"> A comprehensive wiki of {len(concepts)} concepts and {len(articles)} research articles covering AI in education — frameworks, methodologies, and papers.")
    lines.append("")
    lines.append("## Concepts")
    lines.append("")
    for c in concepts:
        desc = c['desc'].replace('\n', ' ')
        lines.append(f"- [{c['title']}]({c['url']}): {desc}")
    lines.append("")
    lines.append("## Articles")
    lines.append("")
    for a in articles:
        desc = a['desc'].replace('\n', ' ')
        lines.append(f"- [{a['title']}]({a['url']}): {desc}")
    return "\n".join(lines) + "\n"

def build_llms_full(articles, concepts):
    lines = []
    lines.append("# AI in Education Wiki — Full Content")
    lines.append(f"> Complete text of {len(concepts)} concepts and {len(articles)} articles.")
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

def main():
    articles, concepts = collect()
    os.makedirs(OUT, exist_ok=True)

    with open(os.path.join(OUT, 'llms.txt'), 'w', encoding='utf-8') as fh:
        fh.write(build_llms_txt(articles, concepts))
    with open(os.path.join(OUT, 'llms-full.txt'), 'w', encoding='utf-8') as fh:
        fh.write(build_llms_full(articles, concepts))

    print(f"Articles: {len(articles)}, Concepts: {len(concepts)}")
    print(f"llms.txt: {os.path.getsize(os.path.join(OUT, 'llms.txt'))} bytes")
    print(f"llms-full.txt: {os.path.getsize(os.path.join(OUT, 'llms-full.txt'))} bytes")

if __name__ == '__main__':
    main()
