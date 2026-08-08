#!/usr/bin/env python3
"""
Reusable script to export a markdown wiki to a static HTML site.
Follows the workflow from the wiki-static-export skill, with the critical fix
of using custom placeholders instead of str.format() for HTML templates.
"""

import os
import re
import json
import argparse
from datetime import date, datetime, timezone
from xml.sax.saxutils import escape

def parse_frontmatter(content):
    """Manual YAML frontmatter parsing (no external deps)."""
    if not content.startswith('---'):
        return {}, content
    parts = content.split('---', 2)
    if len(parts) < 3:
        return {}, content
    fm_text = parts[1].strip()
    md_content = parts[2].strip()
    fm = {}
    lines = fm_text.split('\n')
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if ':' in line:
            key, value = line.split(':', 1)
            key = key.strip()
            value = value.strip()
            if value.startswith('[') and value.endswith(']'):
                value = [v.strip().strip('"\'') for v in value[1:-1].split(',') if v.strip()]
            elif not value and key in ('tags', 'sources'):
                # block-style list: tags:\n  - a\n  - b
                items = []
                j = i + 1
                while j < len(lines) and lines[j].strip().startswith('- '):
                    items.append(lines[j].strip()[2:].strip().strip('"\''))
                    j += 1
                value = items
                i = j - 1
            fm[key] = value
        i += 1
    return fm, md_content

def process_wikilinks(md_text):
    """Convert [[slug|text]] and [[slug]] to HTML links."""
    md_text = re.sub(r'\[\[([^\]|]+)\|([^\]]+)\]\]', r'[\2](\1.html)', md_text)
    md_text = re.sub(r'\[\[([^\]]+)\]\]', r'[\1](\1.html)', md_text)
    return md_text

def md_to_html(md_text):
    """Basic Markdown to HTML conversion (no external deps).
    Handles headers, bold, italic, lists, links, code, and markdown tables."""
    html = md_text

    # ---- Phase 1: Convert markdown tables to HTML tables ----
    lines = html.split('\n')
    i = 0
    table_blocks = []  # (start_line, end_line, html_replacement)
    while i < len(lines):
        stripped = lines[i].strip()
        if stripped.startswith('|') and stripped.endswith('|'):
            start = i
            while i < len(lines) and lines[i].strip().startswith('|') and lines[i].strip().endswith('|'):
                i += 1
            table_lines = lines[start:i]
            if len(table_lines) >= 2:
                # Parse rows
                rows = []
                for tl in table_lines:
                    cells = [c.strip() for c in tl.strip().split('|')[1:-1]]
                    rows.append(cells)
                header = rows[0]
                sep = rows[1]
                # Check if second row is a separator (matches :?---+:?)
                is_sep = all(re.match(r'^:?-{3,}:?$', c) for c in sep)
                data_start = 2 if is_sep else 1
                data_rows = rows[data_start:]
                # Apply inline formatting to cell contents
                def fmt_cell(text):
                    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
                    text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', text)
                    text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<a href="\2">\1</a>', text)
                    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)
                    return text
                tbl_html = '<table>\n<thead>\n<tr>\n'
                for cell in header:
                    tbl_html += f'<th>{fmt_cell(cell)}</th>\n'
                tbl_html += '</tr>\n</thead>\n<tbody>\n'
                for row in data_rows:
                    tbl_html += '<tr>\n'
                    for cell in row:
                        tbl_html += f'<td>{fmt_cell(cell)}</td>\n'
                    tbl_html += '</tr>\n'
                tbl_html += '</tbody>\n</table>'
                table_blocks.append((start, i, tbl_html))
            continue  # already advanced i
        else:
            i += 1
    # Replace table blocks in reverse order
    for start, end, tbl_html in reversed(table_blocks):
        lines[start:end] = [tbl_html]
    html = '\n'.join(lines)

    # ---- Phase 2: Standard markdown conversion ----
    # Protect table HTML from <p> wrapping by using placeholders
    table_placeholders = {}
    def replace_table(m):
        key = f'__TABLE_{len(table_placeholders)}__'
        table_placeholders[key] = m.group(0)
        return key
    html = re.sub(r'<table>.*?</table>', replace_table, html, flags=re.DOTALL)

    html = re.sub(r'^### (.+)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
    html = re.sub(r'^## (.+)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
    html = re.sub(r'^# (.+)$', r'<h1>\1</h1>', html, flags=re.MULTILINE)
    html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html)
    html = re.sub(r'\*(.+?)\*', r'<em>\1</em>', html)
    html = re.sub(r'^- (.+)$', r'<li>\1</li>', html, flags=re.MULTILINE)
    html = re.sub(r'(<li>.*?</li>)', r'<ul>\1</ul>', html, flags=re.DOTALL)
    html = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<a href="\2">\1</a>', html)
    html = re.sub(r'```(.*?)```', r'<pre><code>\1</code></pre>', html, flags=re.DOTALL)
    html = re.sub(r'`([^`]+)`', r'<code>\1</code>', html)

    # Convert blockquote lines (> ...) into <blockquote> blocks
    qlines = html.split('\n')
    out_lines = []
    in_quote = False
    for line in qlines:
        s = line.strip()
        if s.startswith('> '):
            if not in_quote:
                out_lines.append('<blockquote>')
                in_quote = True
            out_lines.append(s[2:])
        else:
            if in_quote:
                out_lines.append('</blockquote>')
                in_quote = False
            out_lines.append(line)
    if in_quote:
        out_lines.append('</blockquote>')
    html = '\n'.join(out_lines)

    html = re.sub(r'\n\n+', r'</p><p>', html)
    html = f'<p>{html}</p>'
    # Unwrap blockquotes from surrounding <p> tags (blockquote is block-level)
    html = re.sub(r'<p><blockquote>', r'<blockquote>', html)
    html = re.sub(r'</blockquote></p>', r'</blockquote>', html)

    # Restore tables
    for key, tbl in table_placeholders.items():
        html = html.replace(key, tbl)
    # Unwrap tables from surrounding <p> tags
    html = re.sub(r'<p><table>', r'<table>', html)
    html = re.sub(r'</table></p>', r'</table>', html)
    # Also fix wrapped <table> inside partial <p> fragments
    html = re.sub(r'</p><p><table>', r'</p><table>', html)
    html = re.sub(r'</table></p><p>', r'</table><p>', html)

    return html

def _feed_summary(md_text):
    """First meaningful paragraph of a concept page for the RSS description (no regex)."""
    lines = (md_text or '').split('\n')
    text = None
    i = 0
    while i < len(lines):
        s = lines[i].strip()
        if not s or s.startswith('#') or s.startswith('---') or s.startswith('![image'):
            i += 1
            continue
        if s.startswith('> '):
            if s.startswith('> Full text') or s.startswith('> 📄'):
                i += 1
                continue
            text = s[2:]
            j = i + 1
            while j < len(lines) and lines[j].strip().startswith('> '):
                text += ' ' + lines[j].strip()[2:]
                j += 1
            break
        text = s
        break
    if not text:
        return ''
    # Strip wikilinks [[slug|label]] -> label, [[slug]] -> slug
    out = []
    k = 0
    while k < len(text):
        if text.startswith('[[', k):
            end = text.find(']]', k)
            if end == -1:
                out.append(text[k:])
                break
            inner = text[k + 2:end]
            if '|' in inner:
                inner = inner.split('|', 1)[1]
            out.append(inner)
            k = end + 2
        else:
            out.append(text[k])
            k += 1
    text = ''.join(out)
    # Strip markdown links [label](url) -> label
    while True:
        a = text.find('](')
        if a == -1:
            break
        b = text.rfind('[', 0, a)
        if b == -1:
            break
        c = text.find(')', a)
        if c == -1:
            break
        text = text[:b] + text[b + 1:a] + text[c + 1:]
    for ch in ('**', '__', '`', '#', '*', '_'):
        text = text.replace(ch, '')
    text = ' '.join(text.split())
    if len(text) > 400:
        text = text[:397].rstrip() + '…'
    return text


def _feed_description(md_text, site_url):
    """Full synthesis blockquote of a concept page as HTML for the RSS description (no regex)."""
    lines = (md_text or '').split('\n')
    # 1) collect candidate blockquote paragraphs (skip Full-text info lines)
    quotes = []
    i = 0
    while i < len(lines):
        s = lines[i].strip()
        if s.startswith('> '):
            if s.startswith('> Full text') or s.startswith('> 📄'):
                i += 1
                continue
            para = [s[2:]]
            j = i + 1
            while j < len(lines) and lines[j].strip().startswith('> '):
                para.append(lines[j].strip()[2:])
                j += 1
            quotes.append(' '.join(para))
            i = j
        else:
            i += 1
    if quotes:
        best = max(quotes, key=len)
        return '<p>' + _feed_html(best, site_url) + '</p>'
    # 2) fallback: longest substantial plain paragraph (skips author/citation lines)
    best_para = ''
    i = 0
    while i < len(lines):
        s = lines[i].strip()
        if (not s or s.startswith('#') or s.startswith('>') or s.startswith('---')
                or s.startswith('![') or s.startswith('|') or s.startswith('- ') or s.startswith('📄')):
            i += 1
            continue
        para = [s]
        j = i + 1
        while j < len(lines) and lines[j].strip() and not lines[j].strip().startswith(('#', '>', '- ', '|', '![', '---')):
            para.append(lines[j].strip())
            j += 1
        joined = ' '.join(para)
        if len(joined) > len(best_para):
            best_para = joined
        i = j
    if best_para:
        return '<p>' + _feed_html(best_para, site_url) + '</p>'
    txt = _feed_summary(md_text)
    return '<p>' + txt + '</p>' if txt else ''


def _feed_html(text, site_url):
    """Convert wikilinks and markdown links in summary text to HTML anchors (no regex)."""
    out = []
    k = 0
    while k < len(text):
        if text.startswith('[[', k):
            end = text.find(']]', k)
            if end == -1:
                out.append(text[k:])
                break
            inner = text[k + 2:end]
            if '|' in inner:
                target, label = inner.split('|', 1)
            else:
                target = label = inner
            out.append('<a href="' + site_url + '/pages/' + target + '.html">' + label + '</a>')
            k = end + 2
        else:
            out.append(text[k])
            k += 1
    html = ''.join(out)
    # Markdown links [label](url) -> <a href="url">label</a>
    while True:
        a = html.find('](')
        if a == -1:
            break
        b = html.rfind('[', 0, a)
        if b == -1:
            break
        c = html.find(')', a)
        if c == -1:
            break
        label = html[b + 1:a]
        url = html[a + 2:c]
        html = html[:b] + '<a href="' + url + '">' + label + '</a>' + html[c + 1:]
    return html


def build_rss_feed(pages, site_url, wiki_title):
    """RSS 2.0 feed of the 40 most recently added concept pages."""
    dated = []
    for p in pages:
        c = p.get('created', '')
        try:
            dt = datetime.strptime(c, '%Y-%m-%d')
        except (ValueError, TypeError):
            continue
        dated.append((dt, p))
    dated.sort(key=lambda x: x[0], reverse=True)
    dated = dated[:40]
    items = []
    for dt, p in dated:
        slug = p['slug']
        link = site_url + '/pages/' + slug + '.html'
        title = escape(str(p['title']).strip().strip('"').strip("'"))
        desc = _feed_description(p.get('md_content', ''), site_url)
        if desc:
            desc = '<![CDATA[' + desc.replace(']]>', ']]&gt;') + ']]>'
        pub = dt.replace(tzinfo=timezone.utc).strftime('%a, %d %b %Y %H:%M:%S +0000')
        items.append('    <item>\n'
                     '      <title>' + title + '</title>\n'
                     '      <link>' + link + '</link>\n'
                     '      <guid isPermaLink="true">' + link + '</guid>\n'
                     '      <pubDate>' + pub + '</pubDate>\n'
                     '      <description>' + desc + '</description>\n'
                     '    </item>')
    now = datetime.now(timezone.utc).strftime('%a, %d %b %Y %H:%M:%S +0000')
    feed = ('<?xml version="1.0" encoding="UTF-8"?>\n'
            '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n'
            '  <channel>\n'
            '    <title>' + escape(wiki_title) + '</title>\n'
            '    <link>' + site_url + '/</link>\n'
            '    <description>Recently added articles on AI in education</description>\n'
            '    <atom:link href="' + site_url + '/feed.xml" rel="self" type="application/rss+xml"/>\n'
            '    <language>en-us</language>\n'
            '    <lastBuildDate>' + now + '</lastBuildDate>\n'
            + '\n'.join(items) + '\n'
            '  </channel>\n'
            '</rss>\n')
    return feed


def _clean_title(raw):
    """Strip YAML quoting/escaping from a title string (no regex)."""
    t = raw.strip() if raw else ''
    if len(t) >= 2 and t[0] == t[-1] == '"':
        t = t[1:-1].replace('\\"', '"').replace('\\\\', '\\')
    elif len(t) >= 2 and t[0] == t[-1] == "'":
        t = t[1:-1].replace("''", "'").replace("\\'", "'")
    return t.strip()


def main():
    parser = argparse.ArgumentParser(description='Export markdown wiki to static HTML site.')
    parser.add_argument('--wiki-path', required=True, help='Path to wiki root (e.g., /home/doug/wiki)')
    parser.add_argument('--output-path', default='static-site', help='Output directory for static site')
    parser.add_argument('--wiki-title', default='AI Ed Wiki', help='Title for the static site')
    parser.add_argument('--site-url', default='https://edtechdev.github.io/aied', help='Base URL of the deployed site (used for RSS feed links)')
    args = parser.parse_args()

    WIKI_PATH = args.wiki_path
    OUTPUT_PATH = os.path.join(WIKI_PATH, args.output_path)
    CONCEPTS_PATH = os.path.join(WIKI_PATH, 'concepts')
    TEMPLATE_PATH = os.path.join(os.path.dirname(__file__), '../templates/index-template.html')

    # Create output dirs
    os.makedirs(os.path.join(OUTPUT_PATH, 'pages'), exist_ok=True)

    # Collect pages
    pages = []
    all_tags = set()
    for filename in sorted(os.listdir(CONCEPTS_PATH)):
        if filename.endswith('.md'):
            slug = filename[:-3]
            filepath = os.path.join(CONCEPTS_PATH, filename)
            with open(filepath, 'r') as f:
                content = f.read()
            fm, md_content = parse_frontmatter(content)
            if not fm:
                continue
            title = _clean_title(fm.get('title', slug))
            tags = fm.get('tags', [])
            if not isinstance(tags, list):
                tags = []
            tags = [str(t).strip().strip('"').strip("'") for t in tags]
            # Process content
            md_content = process_wikilinks(md_content)
            html_content = md_to_html(md_content)
            pages.append({
                'slug': slug,
                'title': title,
                'tags': tags,
                'content': html_content,
                'md_content': md_content,
                'created': fm.get('created', 'Unknown')
            })
            all_tags.update(tags)

    sorted_tags = sorted(list(all_tags))
    print(f"Collected {len(pages)} pages, {len(sorted_tags)} tags")

    # Generate search index
    search_index = []
    for page in pages:
        plain_text = re.sub(r'<[^>]+>', '', page['content'])
        # Remove control characters that break JSON embedding
        plain_text = ''.join(char for char in plain_text if ord(char) >= 32 or char in '\n\r\t')
        search_index.append({
            'slug': page['slug'],
            'title': page['title'],
            'tags': page['tags'],
            'content': plain_text[:500],
            'url': f'pages/{page["slug"]}.html'
        })
    with open(os.path.join(OUTPUT_PATH, 'search_index.json'), 'w') as f:
        json.dump(search_index, f, indent=2)
    
    # Write search index as a JS file for embedding
    with open(os.path.join(OUTPUT_PATH, 'search_index.js'), 'w') as f:
        f.write(f'window.SEARCH_INDEX = {json.dumps(search_index, ensure_ascii=False)};')

    # Group pages by tag (built early: concept pages embed their same-named tag index)
    tag_to_pages = {}
    for page in pages:
        for tag in page['tags']:
            tag_to_pages.setdefault(tag, []).append(page)

    # Build tag -> taxonomy-category map from SCHEMA.md
    TAG_CATEGORIES = {}
    schema_path = os.path.join(WIKI_PATH, 'SCHEMA.md')
    if os.path.exists(schema_path):
        schema_text = open(schema_path, encoding='utf-8').read()
        cat = None
        for line in schema_text.split('\n'):
            s = line.strip()
            if s.startswith('### '):
                cat = s[4:].strip()
            elif s.startswith('- ') and cat:
                for t in re.findall(r'`([a-z][a-z0-9-]*)`', s):
                    TAG_CATEGORIES[t] = cat

    # Generate individual page HTMLs
    page_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - {wiki_title}</title>
    <link rel="alternate" type="application/rss+xml" title="{wiki_title} RSS" href="../feed.xml">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
    <style>
        a.tag {{
            display: inline-block;
            padding: 0.15rem 0.5rem;
            margin: 0.15rem;
            background: var(--primary);
            color: var(--primary-inverse);
            border-radius: 4px;
            font-size: 0.8rem;
            text-decoration: none;
        }}
        a.tag:hover {{
            opacity: 0.85;
        }}
        /* Table styling */
        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }}
        th, td {{
            padding: 0.5rem 0.75rem;
            border: 1px solid var(--card-border-color);
            text-align: left;
        }}
        th {{
            background: rgba(0,0,0,0.04);
            font-weight: 600;
        }}
        tr:nth-child(even) {{
            background: rgba(0,0,0,0.02);
        }}
    </style>
</head>
<body>
    <header class="container">
        <nav>
            <ul>
                <li><a href="../index.html">🏠 Home</a></li>
                <li><a href="../journal.html">📋 Journal</a></li>
                <li><a href="../search.html">🔍 Search</a></li>
                <li><a href="../feed.xml">📡 RSS</a></li>
            </ul>
        </nav>
        <h1>{title}</h1>
        <div class="metadata">Created: {created} | Tags: {tags_html}</div>
    </header>
    <main class="container">{content}</main>
    <footer class="container"><small>Part of {wiki_title} · <a href="../index.html">Home</a> · Generated {date}</small></footer>
</body>
</html>"""

    for page in pages:
        # Exclude the page's own slug from tag chips when it IS a tag topic (avoids self-redirect)
        page_tags_display = [t for t in page['tags'] if t != page['slug']]
        if page_tags_display:
            tags_html = ''.join([f'<a href="../tags/{tag}.html" class="tag">{tag}</a>' for tag in page_tags_display])
        else:
            tags_html = ''.join([f'<span class="tag">{tag}</span>' for tag in page['tags'][:5]]) or 'No tags'
        # Strip duplicate H1 from content body (title is already in <header>)
        content = page['content']
        # Clean title: strip YAML quotes, then escape for regex
        clean_title = page['title'].strip().strip('"').strip("'")
        escaped_title = re.escape(clean_title)
        # Try exact match first: <p><h1>Title</h1></p>
        new_content = re.sub(r'<p><h1>' + escaped_title + r'</h1></p>', '', content, count=1)
        if new_content == content:
            # Try without <p> wrapper
            new_content = re.sub(r'<h1>' + escaped_title + r'</h1>', '', content, count=1)
        # If YAML-quoted title still doesn't match, try stripping the body H1 generically
        if new_content == content:
            # Remove the first H1 in the body (usually right after <main> or <p>)
            new_content = re.sub(r'(<p>)?<h1>[^<]+</h1>(</p>)?', '', content, count=1)
        content = new_content
        # Merge the same-named tag index into the topic page (canonical page for that tag)
        if page['slug'] in tag_to_pages:
            others = [p for p in tag_to_pages[page['slug']] if p['slug'] != page['slug']]
            if others:
                others_sorted = sorted(others, key=lambda x: x['title'].lower())
                items_html = ''.join([f'<li><a href="{p["slug"]}.html">{p["title"].strip().strip(chr(34)).strip(chr(39))}</a></li>' for p in others_sorted])
                noun = 'page' if len(others_sorted) == 1 else 'pages'
                content = content + (
                    '<hr>'
                    + f'<h2>📎 {len(others_sorted)} other {noun} tagged '
                    + f'<a href="../tags/{page["slug"]}.html">{page["slug"]}</a></h2>'
                    + f'<ul>{items_html}</ul>'
                )
        # Fix relative raw/ links so they resolve from pages/ (needs ../ prefix)
        content = content.replace('href="raw/', 'href="../raw/')
        html = page_template.format(
            title=page['title'],
            wiki_title=args.wiki_title,
            created=page['created'],
            tags_html=tags_html,
            content=content,
            date=date.today().isoformat()
        )
        # Fix for CSS braces in page_template (no placeholders here, so format() is safe)
        page_path = os.path.join(OUTPUT_PATH, 'pages', f'{page["slug"]}.html')
        with open(page_path, 'w') as f:
            f.write(html)
    print(f"Generated {len(pages)} individual page HTMLs")

    # Generate RSS feed (40 most recently added articles) — updates on every regen
    feed_path = os.path.join(OUTPUT_PATH, 'feed.xml')
    with open(feed_path, 'w', encoding='utf-8') as f:
        f.write(build_rss_feed(pages, args.site_url, args.wiki_title))
    print('Generated feed.xml (40 most recently added articles)')

    # Generate index.html from template (use custom placeholder replacement!)
    if not os.path.exists(TEMPLATE_PATH):
        print(f"Warning: Index template not found at {TEMPLATE_PATH}")
        print("Using inline template instead.")
        # Fallback to inline template with custom placeholders
        index_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>__WIKI_TITLE__</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
</head>
<body>
    <header class="container">
        <nav>
            <ul>
                <li><strong>__WIKI_TITLE__</strong></li>
                <li><a href="search.html">🔍 Search</a></li>
            </ul>
        </nav>
        <p>__TOTAL__ pages | __TAG_COUNT__ tags</p>
    </header>
    <main class="container">
        <input type="text" id="filter" placeholder="Filter pages..." style="width:100%; padding:0.75rem; margin-bottom:1rem;">
        <div id="pages-list">__PAGES_LIST__</div>
    </main>
    <script>
        const SEARCH_INDEX = __SEARCH_INDEX__;
        document.getElementById('filter').addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            document.querySelectorAll('.page-item').forEach(item => {
                const text = (item.getAttribute('data-search') || '').toLowerCase();
                item.style.display = text.includes(query) ? '' : 'none';
            });
        });
    </script>
</body>
</html>"""
    else:
        with open(TEMPLATE_PATH, 'r') as f:
            index_template = f.read()

    # Generate tag options for datalist
    tag_options_html = '\n'.join([f'<option value="{tag}">' for tag in sorted_tags])
    # Generate tag cloud (top 40 tags by usage, font-size scaled by popularity)
    tag_counts = {}
    for page in pages:
        for t in page['tags']:
            tag_counts[t] = tag_counts.get(t, 0) + 1
    top_tags = sorted(tag_counts.items(), key=lambda x: (-x[1], x[0]))[:40]
    if top_tags:
        counts = [c for _, c in top_tags]
        min_c, max_c = min(counts), max(counts)
        cloud_items = []
        for t, c in top_tags:
            if max_c == min_c:
                sz = 1.4
            else:
                r = (c ** 0.5 - min_c ** 0.5) / (max_c ** 0.5 - min_c ** 0.5)
                sz = round(0.8 + r * 1.5, 2)
            cloud_items.append(
                f'<a class="cloud-tag" href="tags/{t}.html" style="font-size:{sz}rem;" title="{c} pages">{t}</a>'
            )
        tag_cloud_html = (
            '<div class="tag-cloud-section">'
            '<h2>🏷️ Popular Tags <a href="tags.html">(all tags ▸)</a></h2>'
            '<div class="tag-cloud">' + '\n'.join(cloud_items) + '</div>'
            '</div>'
        )
    else:
        tag_cloud_html = ''
    # Generate pages list
    pages_list_html = '\n'.join([f'''<div class="page-item" data-tags="{','.join(page['tags']) if page['tags'] else ''}" data-search="{' '.join(page['md_content'][:300].split())}">
        <a href="pages/{page['slug']}.html">{page['title']}</a>
        <span class="page-tags">({', '.join(page['tags'][:5]) if page['tags'] else 'No tags'})</span>
    </div>''' for page in sorted(pages, key=lambda x: x['title'])])

    # Replace custom placeholders (CRITICAL: avoid str.format() for CSS!)
    index_html = index_template
    index_html = index_html.replace('__WIKI_TITLE__', args.wiki_title)
    index_html = index_html.replace('__TOTAL__', str(len(pages)))
    index_html = index_html.replace('__TAG_COUNT__', str(len(sorted_tags)))
    index_html = index_html.replace('__TAG_OPTIONS__', tag_options_html)
    index_html = index_html.replace('__PAGES_LIST__', pages_list_html)
    index_html = index_html.replace('__TAG_CLOUD__', tag_cloud_html)
    # Generate journal entries HTML (last 14 days)
    journal_path = os.path.join(WIKI_PATH, 'journal.md')
    journal_entries_html = '<p><em>No recent entries found.</em></p>'
    if os.path.exists(journal_path):
        with open(journal_path) as f:
            journal_text = f.read()
        # Parse journal entries
        journal_entries = []
        current_date = None
        for line in journal_text.split('\n'):
            line = line.rstrip()
            if line.startswith('## ') and re.match(r'## \d{4}-\d{2}-\d{2}', line):
                current_date = line[3:].strip()
                journal_entries.append({'date': current_date, 'entries': []})
            elif current_date and line.startswith('- ● [['):
                m = re.match(r'- ● \[\[([^\]]+)\]\] — (.+)', line)
                if m:
                    journal_entries[-1]['entries'].append({
                        'slug': m.group(1),
                        'source': m.group(2).strip(),
                        'title': '',
                        'tags': []
                    })
            elif journal_entries and journal_entries[-1]['entries'] and line.startswith('  **'):
                journal_entries[-1]['entries'][-1]['title'] = line.strip().strip('*').strip()
            elif journal_entries and journal_entries[-1]['entries'] and line.startswith('  Tags:'):
                tags_str = line.split(':', 1)[1].strip().strip('[]')
                journal_entries[-1]['entries'][-1]['tags'] = [t.strip() for t in tags_str.split(',') if t.strip()]
        
        # Sort by date descending, then take most recent 14 days
        journal_entries.sort(key=lambda x: x['date'], reverse=True)
        recent = journal_entries[:14]
        if recent:
            parts = []
            for day_block in recent:
                date_str = day_block['date']
                entry_count = len(day_block['entries'])
                parts.append(f'<details class="journal-day"{" open" if recent.index(day_block) == 0 else ""}>')
                parts.append(f'<summary>{date_str} — {entry_count} new page{"s" if entry_count != 1 else ""}</summary>')
                for entry in day_block['entries']:
                    title = entry['title'] or entry['slug'].replace('-', ' ').title()
                    tags_html = ''.join([f'<a href="tags/{t}.html">{t}</a>' for t in entry['tags'][:6]])
                    parts.append(f'<div class="journal-entry">')
                    parts.append(f'<a href="pages/{entry["slug"]}.html">{title}</a>')
                    if tags_html:
                        parts.append(f'<div class="entry-tags">{tags_html}</div>')
                    parts.append('</div>')
                parts.append('</details>')
            journal_entries_html = '\n'.join(parts)
    index_html = index_html.replace('__JOURNAL_ENTRIES__', journal_entries_html)
    # Embed search index JSON
    search_index_json = json.dumps(search_index, ensure_ascii=False)
    index_html = index_html.replace('__SEARCH_INDEX__', search_index_json)
    # Inline the search index
    search_index_json = json.dumps(search_index)
    index_html = index_html.replace('__SEARCH_INDEX__', search_index_json)
    index_html = index_html.replace('__DATE__', date.today().isoformat())

    with open(os.path.join(OUTPUT_PATH, 'index.html'), 'w') as f:
        f.write(index_html)
    print(f"Generated index.html")

    # Generate search.html (FlexSearch powered - updated to 0.7.31)
    search_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search - {wiki_title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
    <script src="https://cdn.jsdelivr.net/npm/flexsearch@0.7.31/dist/flexsearch.min.js"></script>
</head>
<body>
    <header class="container">
        <nav>
            <ul>
                <li><a href="index.html">🏠 Home</a></li>
                <li><a href="search.html">🔍 Search</a></li>
            </ul>
        </nav>
        <h1>Search {wiki_title}</h1>
    </header>
    <main class="container">
        <input type="text" id="search-input" placeholder="Type to search (min 2 chars)..." style="width:100%; padding:0.75rem; margin-bottom:1rem;">
        <div id="results"></div>
    </main>
    <script>
        let index = new FlexSearch.Document({
            tokenize: 'forward',
            document: {
                id: 'id',
                index: ['title', 'tags', 'content'],
                store: ['title', 'url', 'tags']
            }
        });
        let pages = [];
        
        fetch('search_index.json')
            .then(res => res.json())
            .then(data => {
                pages = data;
                data.forEach((page, i) => {
                    index.add({
                        id: i,
                        title: page.title,
                        tags: page.tags.join(' '),
                        content: page.content
                    });
                });
            })
            .catch(err => {
                document.getElementById('results').innerHTML = '<p style="color:red;">Error loading search index: ' + err.message + '</p>';
            });

        document.getElementById('search-input').addEventListener('input', function(e) {
            const query = e.target.value.trim();
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            
            if (query.length < 2) {
                resultsDiv.innerHTML = '<p>Type at least 2 characters to search.</p>';
                return;
            }
            
            const results = index.search(query, { limit: 20 });
            if (!results || results.length === 0) {
                resultsDiv.innerHTML = '<p>No results found.</p>';
                return;
            }
            
            results.forEach(result => {
                const page = pages[result.id];
                if (!page) return;
                const tags = page.tags.join(', ') || 'No tags';
                resultsDiv.innerHTML += `<div style="margin-bottom:1rem; padding:1rem; border:1px solid #ddd; border-radius:8px;">
                    <h3><a href="${page.url}">${page.title}</a></h3>
                    <p><small>Tags: ${tags}</small></p>
                </div>`;
            });
        });
    </script>
</body>
</html>""".replace('{wiki_title}', args.wiki_title)

    with open(os.path.join(OUTPUT_PATH, 'search.html'), 'w') as f:
        f.write(search_html)
    print(f"Generated search.html")

    # ---- Generate tag pages ----
    tags_output_dir = os.path.join(OUTPUT_PATH, 'tags')
    os.makedirs(tags_output_dir, exist_ok=True)
    
    # Group pages by tag
    tag_to_pages = {}
    for page in pages:
        for tag in page['tags']:
            if tag not in tag_to_pages:
                tag_to_pages[tag] = []
            tag_to_pages[tag].append(page)
    
    tag_page_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>__TAG__ — __WIKI_TITLE__</title>
    <link rel="alternate" type="application/rss+xml" title="__WIKI_TITLE__ RSS" href="../feed.xml">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
    <style>
        nav ul {{ display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0; margin: 0 0 1.5rem 0; list-style: none; }}
        nav a {{ text-decoration: none; padding: 0.35rem 0.75rem; border-radius: 4px; background: rgba(0,0,0,0.04); font-size: 0.875rem; }}
        .article-card {{
            margin-bottom: 1.5rem;
            padding: 1.25rem 1.5rem;
            border: 1px solid var(--card-border-color);
            border-radius: 10px;
            background: var(--card-background-color);
            transition: box-shadow 0.15s, border-color 0.15s;
        }}
        .article-card:hover {{
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
            border-color: var(--primary);
        }}
        .article-card h3 {{ margin: 0 0 0.4rem 0; font-size: 1.05rem; line-height: 1.35; }}
        .article-card h3 a {{ text-decoration: none; color: var(--color); }}
        .article-card h3 a:hover {{ color: var(--primary); }}
        .article-card .snippet {{ font-size: 0.875rem; color: var(--muted-color); margin-top: 0.5rem; line-height: 1.55; }}
        .article-card .snippet p {{ margin: 0; }}
        .article-card .tags {{ margin-top: 0.75rem; display: flex; flex-wrap: wrap; gap: 0.3rem; }}
        .article-card .tags a {{ display: inline-block; padding: 0.15rem 0.5rem; background: var(--primary); color: var(--primary-inverse); border-radius: 4px; font-size: 0.72rem; text-decoration: none; }}
        .article-card .tags a:hover {{ opacity: 0.85; }}
        footer {{ margin-top: 3rem; padding: 2rem 0; border-top: 1px solid var(--card-border-color); text-align: center; color: var(--muted-color); font-size: 0.85rem; }}
    </style>
</head>
<body>
    <header class="container">
        <nav>
            <ul>
                <li><a href="../index.html">🏠 Home</a></li>
                <li><a href="../journal.html">📋 Journal</a></li>
                <li><a href="../tags.html">🏷️ Tags</a></li>
                <li><a href="../search.html">🔍 Search</a></li>
                <li><a href="../feed.xml">📡 RSS</a></li>
            </ul>
        </nav>
        <h1>🏷️ __TAG__</h1>
        <p>__COUNT__ article(s) tagged with <strong>__TAG__</strong></p>
        __SUMMARY__
    </header>
    <main class="container">
        __ARTICLES__
    </main>
    <footer class="container">
        <small>__WIKI_TITLE__ · <a href="../index.html">Home</a> · <a href="../tags.html">All Tags</a> · Generated __DATE__</small>
    </footer>
</body>
</html>"""

    for tag, tag_pages in sorted(tag_to_pages.items()):
        concept_path = os.path.join(WIKI_PATH, 'concepts', f'{tag}.md')
        redirect_target = tag
        if not os.path.exists(concept_path):
            # case-robust fallback: a lowercase concept page may exist for an uppercase tag
            lower = tag.lower()
            if lower != tag and os.path.exists(os.path.join(WIKI_PATH, 'concepts', f'{lower}.md')):
                concept_path = os.path.join(WIKI_PATH, 'concepts', f'{lower}.md')
                redirect_target = lower
        if os.path.exists(concept_path):
            # Merged design: the same-named concept page is canonical; the tag URL redirects to it
            # (the topic page embeds the full list of pages tagged with this tag).
            redirect_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=../pages/{redirect_target}.html">
    <link rel="canonical" href="../pages/{redirect_target}.html">
    <title>{tag} — {args.wiki_title} (merged into topic page)</title>
</head>
<body style="font-family:system-ui,sans-serif;padding:2.5rem;text-align:center;color:#333;">
    <p>The tag index for <strong>{tag}</strong> has been merged into its topic page.</p>
    <p><a href="../pages/{redirect_target}.html" style="font-weight:600;">📖 Go to the {tag} topic page ▸</a></p>
</body>
</html>"""
            with open(os.path.join(tags_output_dir, f'{tag}.html'), 'w') as f:
                f.write(redirect_html)
            continue
        # Extract concept summary if a matching concept page exists
        summary_html = ""
        concept_path = os.path.join(WIKI_PATH, 'concepts', f'{tag}.md')
        if os.path.exists(concept_path):
            with open(concept_path) as f:
                concept_text = f.read()
            # Extract concept summary and related tags
            fm_end = concept_text.find('---', 4)
            if fm_end > 0:
                body = concept_text[fm_end+3:].strip()
                
                # Extract concept page's own tags for "Related Tags" section
                fm_match = re.match(r'^---\n(.*?)\n---', concept_text, re.DOTALL)
                concept_tags = []
                if fm_match:
                    fm = fm_match.group(1)
                    tm = re.search(r'^tags:\s*\[(.+?)\]', fm, re.MULTILINE)
                    if tm:
                        concept_tags = [t.strip().strip('"').strip("'") for t in tm.group(1).split(',') if t.strip() and t.strip().strip('"').strip("'") != tag]
                
                # Get body text: all paragraphs until the first ## section header
                lines = body.split('\n')
                paragraphs = []
                for line in lines:
                    stripped = line.strip()
                    if stripped.startswith('## '):
                        break
                    if stripped.startswith('# '):
                        continue
                    if stripped.startswith('> '):
                        paragraphs.append(stripped[2:])  # blockquote
                    elif stripped and not stripped.startswith('- ') and not stripped.startswith('|'):
                        paragraphs.append(stripped)
                full_body = ' '.join(paragraphs)
                first_para = re.sub(r'\s+', ' ', full_body).strip()
                
                # Truncate at word boundary if too long
                if len(first_para) > 800:
                    trunc = first_para[:800]
                    last_space = trunc.rfind(' ')
                    if last_space > 700:
                        first_para = trunc[:last_space] + '...'
                    else:
                        first_para = trunc + '...'
                
                if first_para:
                    # Process wikilinks: [[slug]] and [[slug|text]]
                    first_para = re.sub(r'\[\[([^\]|]+)\|([^\]]+)\]\]', r'<a href="../pages/\1.html">\2</a>', first_para)
                    first_para = re.sub(r'\[\[([^\]]+)\]\]', r'<a href="../pages/\1.html">\1</a>', first_para)

                    # Extract concept title for the "Topic page" link
                    fm_title = ''
                    tmt = re.search(r'^title:\s*(.+?)\s*$', fm, re.MULTILINE)
                    if tmt:
                        fm_title = tmt.group(1).strip().strip('"').strip("'")
                    if not fm_title:
                        fm_title = tag.replace('-', ' ').title()

                    parts = [f'<div style="margin-bottom:0.5rem;"><a href="../pages/{tag}.html" style="font-weight:600;font-size:0.95rem;">📖 Topic page: {fm_title} ▸</a></div>']
                    parts.append(f'<div class="concept-summary" style="background:rgba(0,0,0,0.02);padding:0.75rem 1rem;border-radius:8px;font-size:0.9rem;line-height:1.5;">{first_para}</div>')
                    # For short concept pages, add Related Pages links from the body
                    if len(first_para) < 150:
                        rp_match = re.search(r'## Related Pages\n(.*?)(?=\n## |\Z)', body, re.DOTALL)
                        if rp_match:
                            rp_text = rp_match.group(1)
                            rp_links = re.findall(r'\[\[([^\]|]+)(?:\|[^\]]+)?\]\]', rp_text)
                            if rp_links:
                                rp_html = ' · '.join([f'<a href="../pages/{l}.html">{l.replace("-"," ").title()}</a>' for l in rp_links[:8]])
                                parts.append(f'<div style="margin-top:0.5rem;font-size:0.85rem;"><em>See also:</em> {rp_html}</div>')
                    
                    # Add related tags if the concept page has tags
                    if concept_tags:
                        related_links = ''.join([f'<a href="{t}.html" style="display:inline-block;padding:0.1rem 0.45rem;margin:0.1rem 0.3rem 0.1rem 0;background:var(--primary);color:var(--primary-inverse);border-radius:4px;font-size:0.75rem;text-decoration:none;">{t}</a>' for t in concept_tags[:12]])
                        parts.append(f'<div style="margin-top:0.5rem;font-size:0.8rem;color:var(--muted-color);">Related tags: {related_links}</div>')
                    
                    summary_html = '<div style="margin-bottom:1.25rem;">' + ''.join(parts) + '</div>'
        else:
            # Standalone tag index page (no same-named concept): generated summary with related-tag links
            rel = []
            tag_slugs = {p['slug'] for p in tag_pages}
            for other_tag, other_pages in tag_to_pages.items():
                if other_tag == tag:
                    continue
                shared = len(tag_slugs & {p['slug'] for p in other_pages})
                if shared:
                    rel.append((shared, other_tag))
            rel.sort(reverse=True)
            rel_html = ''.join([f'<a href="{t}.html" style="display:inline-block;padding:0.1rem 0.45rem;margin:0.1rem 0.3rem 0.1rem 0;background:var(--primary);color:var(--primary-inverse);border-radius:4px;font-size:0.75rem;text-decoration:none;">{t}</a>' for _, t in rel[:8]])
            cat = TAG_CATEGORIES.get(tag, '')
            cat_html = f'<span style="font-size:0.8rem;color:var(--muted-color);"> · Category: {cat}</span>' if cat else ''
            top3 = sorted(tag_pages, key=lambda x: x['title'].lower())[:3]
            top_html = ' · '.join([f'<a href="../pages/{p["slug"]}.html">{p["title"].strip().strip(chr(34)).strip(chr(39))}</a>' for p in top3])
            summary_html = ('<div style="margin-bottom:1.25rem;background:rgba(0,0,0,0.02);padding:0.75rem 1rem;border-radius:8px;font-size:0.9rem;line-height:1.5;">'
                            f'<strong>{len(tag_pages)} article(s)</strong> on <strong>{tag}</strong> in the AI-in-education wiki.{cat_html}'
                            + (f'<div style="margin-top:0.4rem;"><em>Related tags:</em> {rel_html}</div>' if rel_html else '')
                            + (f'<div style="margin-top:0.4rem;"><em>Representative articles:</em> {top_html}</div>' if top_html else '')
                            + '</div>')
        
        articles_html = ""
        for p in sorted(tag_pages, key=lambda x: x['title']):
            # Clean title: strip outermost quotes if present
            clean_title = p['title'].strip()
            if (clean_title.startswith('"') and clean_title.endswith('"')) or                (clean_title.startswith("'") and clean_title.endswith("'")):
                clean_title = clean_title[1:-1]
            
            # Get a clean text snippet from the content
            snippet_raw = re.sub(r'<[^>]+>', ' ', p['content'])
            snippet_raw = re.sub(r'\s+', ' ', snippet_raw).strip()
            
            # Remove the H1 title from the snippet (already in card header)
            if snippet_raw.lower().startswith(clean_title.lower()):
                snippet_raw = snippet_raw[len(clean_title):].strip()
            
            snippet = snippet_raw[:280].strip()
            if len(snippet_raw) > 280:
                snippet += '...'
            
            page_tags_html = ''.join([f'<a href="{t}.html">{t}</a>' for t in p['tags'][:8] if t != tag])
            articles_html += f"""        <div class="article-card">
            <h3><a href="../pages/{p['slug']}.html">{clean_title}</a></h3>
            <div class="snippet">{snippet}</div>
            <div class="tags">{page_tags_html}</div>
        </div>
"""
        
        tag_html = tag_page_template
        tag_html = tag_html.replace('__TAG__', tag)
        tag_html = tag_html.replace('__WIKI_TITLE__', args.wiki_title)
        tag_html = tag_html.replace('__COUNT__', str(len(tag_pages)))
        tag_html = tag_html.replace('__SUMMARY__', summary_html)
        tag_html = tag_html.replace('__ARTICLES__', articles_html)
        tag_html = tag_html.replace('__DATE__', date.today().isoformat())
        
        with open(os.path.join(tags_output_dir, f'{tag}.html'), 'w') as f:
            f.write(tag_html)
    
    print(f"Generated {len(tag_to_pages)} tag pages")

    # ---- Generate tags.html (tag index) ----
    tags_index_html_parts = ['<ul>']
    for tag in sorted(tag_to_pages.keys()):
        count = len(tag_to_pages[tag])
        tags_index_html_parts.append(f'<li><a href="tags/{tag}.html">{tag}</a> ({count})</li>')
    tags_index_html_parts.append('</ul>')
    
    tags_index = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tags — {args.wiki_title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
    <style>
        nav ul {{ display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0; margin: 0 0 1.5rem 0; list-style: none; }}
        nav a {{ text-decoration: none; padding: 0.35rem 0.75rem; border-radius: 4px; background: rgba(0,0,0,0.04); font-size: 0.875rem; }}
        .tag-cloud {{ display: flex; flex-wrap: wrap; gap: 0.5rem; }}
        .tag-cloud a {{ display: inline-block; padding: 0.3rem 0.7rem; background: var(--primary); color: var(--primary-inverse); border-radius: 6px; text-decoration: none; font-size: 0.9rem; }}
        .tag-cloud a:hover {{ opacity: 0.85; }}
        .tag-cloud .count {{ font-size: 0.75rem; opacity: 0.8; }}
        footer {{ margin-top: 3rem; padding: 2rem 0; border-top: 1px solid var(--card-border-color); text-align: center; color: var(--muted-color); font-size: 0.85rem; }}
    </style>
</head>
<body>
    <header class="container">
        <nav>
            <ul>
                <li><a href="index.html">🏠 Home</a></li>
                <li><a href="journal.html">📋 Journal</a></li>
                <li><strong>🏷️ Tags</strong></li>
                <li><a href="search.html">🔍 Search</a></li>
            </ul>
        </nav>
        <h1>🏷️ All Tags</h1>
        <p>{len(tag_to_pages)} tags across {len(pages)} articles</p>
    </header>
    <main class="container">
        <div class="tag-cloud">
"""
    for tag in sorted(tag_to_pages.keys()):
        count = len(tag_to_pages[tag])
        tags_index += f'            <a href="tags/{tag}.html">{tag} <span class="count">({count})</span></a>\n'
    
    tags_index += f"""        </div>
    </main>
    <footer class="container">
        <small>{args.wiki_title} · <a href="index.html">Home</a> · Generated {date.today().isoformat()}</small>
    </footer>
</body>
</html>"""
    
    with open(os.path.join(OUTPUT_PATH, 'tags.html'), 'w') as f:
        f.write(tags_index)
    print(f"Generated tags.html with {len(tag_to_pages)} tags")

    # Auto-regenerate journal.html after static site generation
    import subprocess
    journal_script = os.path.join(os.path.dirname(__file__), "regenerate-journal-html.py")
    if os.path.exists(journal_script):
        result = subprocess.run(
            ["python3", journal_script, "--wiki-path", WIKI_PATH],
            capture_output=True, text=True
        )
        print(result.stdout.strip())
    else:
        print("Warning: regenerate-journal-html.py not found, journal.html not updated")

    print(f"\n✅ Static site generated at {OUTPUT_PATH}")
    print(f"Open {os.path.join(OUTPUT_PATH, 'index.html')} to view")

if __name__ == '__main__':
    main()