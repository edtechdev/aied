#!/usr/bin/env python3
"""
Regenerate static-site/journal.html from journal.md.
Parses journal.md with date-grouped entries and produces a clean,
reverse-chronological journal with article titles as links and
clickable tag badges.
"""
import re, sys, os

def main():
    wiki_path = "/home/doug/wiki"
    for i, arg in enumerate(sys.argv):
        if arg == "--wiki-path" and i + 1 < len(sys.argv):
            wiki_path = sys.argv[i + 1]

    journal_md_path = os.path.join(wiki_path, "journal.md")
    journal_html_path = os.path.join(wiki_path, "static-site", "journal.html")

    if not os.path.exists(journal_md_path):
        print(f"ERROR: {journal_md_path} not found.", file=sys.stderr)
        sys.exit(1)

    with open(journal_md_path, "r") as f:
        md_content = f.read()

    # Parse header (handles **bold** markers around field labels)
    total_match = re.search(r"Total entries:\*{0,2}\s+(\d+)", md_content)
    total = total_match.group(1) if total_match else "?"
    lu_match = re.search(r"Last updated:\*{0,2}\s+([\d-]+)", md_content)
    last_updated = lu_match.group(1) if lu_match else "?"

    # Parse entries grouped by date
    # Format:
    #   ## 2026-07-28
    #   - ● [[slug]] — `source`
    #     **Title**
    #     Tags: [tag1, tag2]

    date_blocks = []
    current_date = None
    current_entries = []

    for line in md_content.split('\n'):
        date_match = re.match(r'^## (\d{4}-\d{2}-\d{2})', line)
        if date_match:
            if current_date and current_entries:
                date_blocks.append({'date': current_date, 'entries': current_entries})
            current_date = date_match.group(1)
            current_entries = []
            continue

        entry_match = re.match(
            r'^- ([●◐○]) \[\[([^\]]+)\]\] — (.+)',
            line
        )
        if entry_match:
            current_entries.append({
                'icon': entry_match.group(1),
                'slug': entry_match.group(2),
                'source': entry_match.group(3).strip().strip('`'),
                'title': '',
                'tags': [],
            })
            continue

        title_match = re.match(r'^\s+\*\*(.+)\*\*$', line)
        if title_match and current_entries:
            current_entries[-1]['title'] = title_match.group(1).strip()
            continue

        tags_match = re.match(r'^\s+Tags: \[(.+)\]$', line)
        if tags_match and current_entries:
            tags_str = tags_match.group(1)
            current_entries[-1]['tags'] = [
                t.strip().strip('"').strip("'")
                for t in tags_str.split(',') if t.strip()
            ]
            continue

    if current_date and current_entries:
        date_blocks.append({'date': current_date, 'entries': current_entries})

    # Build HTML
    entries_html = ""
    for block in date_blocks:
        entries_html += f'        <h2 class="date-header">{block["date"]}</h2>\n'
        entries_html += '        <div class="entry-list">\n'
        for e in block['entries']:
            conf = {'●': 'high', '◐': 'medium', '○': 'low'}
            title = e['title'] or e['slug'].replace('-', ' ').title()

            # Build tag badges
            tag_badges = ""
            if e['tags']:
                tag_badges = ''.join(
                    f'<a href="tags/{t}.html" class="tag-badge">{t}</a>'
                    for t in e['tags']
                )

            source_display = ""
            if e['source']:
                source_display = f' <span class="source">{e["source"]}</span>'

            entries_html += f'''            <div class="entry">
                <span class="confidence confidence-{conf.get(e["icon"], "medium")}" title="{conf.get(e["icon"], "medium").title()} confidence">{e["icon"]}</span>
                <a href="pages/{e["slug"]}.html" class="entry-title">{title}</a>{source_display}
                <div class="entry-tags">{tag_badges}</div>
            </div>
'''
        entries_html += '        </div>\n'

    # Full page
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Journal — AI in Education Wiki</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
    <style>
        body {{ margin: 0; padding: 0; }}
        .container {{ max-width: 1000px; margin: 0 auto; padding: 1rem 1.5rem; }}
        nav ul {{ display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0; margin: 0 0 1.5rem 0; list-style: none; }}
        nav a {{ text-decoration: none; padding: 0.35rem 0.75rem; border-radius: 4px; background: rgba(0,0,0,0.04); font-size: 0.875rem; }}
        nav a[aria-current="page"] {{ background: var(--primary); color: var(--primary-inverse); }}
        h1 {{ font-size: 1.75rem; margin-bottom: 0.25rem; }}
        .subtitle {{ color: var(--muted-color); font-size: 0.875rem; margin-bottom: 2rem; }}
        .date-header {{
            font-size: 1.1rem;
            color: var(--primary);
            border-bottom: 1px solid var(--card-border-color);
            padding-bottom: 0.35rem;
            margin: 2rem 0 0.75rem 0;
        }}
        .date-header:first-of-type {{ margin-top: 0; }}
        .entry-list {{ margin-bottom: 0.5rem; }}
        .entry {{
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            gap: 0.4rem 0.6rem;
            padding: 0.5rem 0;
            border-bottom: 1px solid var(--card-border-color);
        }}
        .entry:hover {{ background: rgba(0,0,0,0.02); }}
        .confidence {{
            font-size: 0.85rem;
            flex-shrink: 0;
        }}
        .confidence-high {{ color: #2a9d2a; }}
        .confidence-medium {{ color: #e09f00; }}
        .confidence-low {{ color: #999; }}
        .entry-title {{
            font-weight: 600;
            font-size: 0.95rem;
            text-decoration: none;
            color: var(--color);
        }}
        .entry-title:hover {{ text-decoration: underline; color: var(--primary); }}
        .source {{
            font-family: monospace;
            font-size: 0.75rem;
            color: var(--muted-color);
            white-space: nowrap;
        }}
        .entry-tags {{
            display: flex;
            flex-wrap: wrap;
            gap: 0.25rem;
            margin-left: auto;
        }}
        .tag-badge {{
            display: inline-block;
            padding: 0.1rem 0.45rem;
            background: var(--primary);
            color: var(--primary-inverse);
            border-radius: 4px;
            font-size: 0.72rem;
            text-decoration: none;
            white-space: nowrap;
        }}
        .tag-badge:hover {{ opacity: 0.85; }}
        footer {{
            margin-top: 3rem;
            padding: 2rem 0;
            border-top: 1px solid var(--card-border-color);
            text-align: center;
            color: var(--muted-color);
            font-size: 0.85rem;
        }}
        @media (max-width: 600px) {{
            .entry {{ flex-direction: column; align-items: flex-start; gap: 0.2rem; }}
            .entry-tags {{ margin-left: 0; }}
        }}
    </style>
</head>
<body>
    <header class="container">
        <nav>
            <ul>
                <li><a href="index.html">🏠 Home</a></li>
                <li><a href="journal.html" aria-current="page">📋 Journal</a></li>
                <li><a href="tags.html">🏷️ Tags</a></li>
                <li><a href="search.html">🔍 Search</a></li>
            </ul>
        </nav>
        <h1>📋 Journal</h1>
        <div class="subtitle">Last updated: {last_updated} · {total} entries · reverse chronological</div>
    </header>
    <main class="container">
{entries_html}
    </main>
    <footer class="container">
        <small>
            AI in Education Wiki · <a href="index.html">Home</a> ·
            <a href="tags.html">All Tags</a> · Generated {last_updated}
        </small>
    </footer>
</body>
</html>"""

    with open(journal_html_path, "w") as f:
        f.write(html)
    print(f"OK: journal.html regenerated ({total} entries, {last_updated})")


if __name__ == "__main__":
    main()