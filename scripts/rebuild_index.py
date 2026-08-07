#!/usr/bin/env python3
"""Rebuild search_index.js and search_index.json from current pages."""
import json, re
from pathlib import Path

pages_dir = Path('/home/doug/wiki/pages')

entries = []
for f in sorted(pages_dir.glob('*.html')):
    content = f.read_text()
    
    # Extract title from <h1>
    title_m = re.search(r'<h1>(.*?)</h1>', content)
    title = title_m.group(1).strip() if title_m else f.stem
    
    # Extract tags from metadata line (href="../tags/TAG.html")
    tags = re.findall(r'href="\.\./tags/([\w-]+)\.html"', content)
    tags = sorted(set(tags))
    
    # Extract body text (strip HTML tags, keep reasonable length)
    body = ''
    m = re.search(r'<main.*?>(.*?)</main>', content, re.DOTALL)
    if m:
        html_body = m.group(1)
        # Remove script/style tags
        html_body = re.sub(r'<(script|style).*?</\1>', '', html_body, flags=re.DOTALL)
        # Strip remaining HTML tags
        text = re.sub(r'<[^>]+>', ' ', html_body)
        # Collapse whitespace
        text = re.sub(r'\s+', ' ', text).strip()
        # Truncate to ~2000 chars for search index
        body = text[:2000]
    
    slug = f.stem
    url = f'pages/{slug}.html'
    
    entries.append({
        'slug': slug,
        'title': title,
        'tags': tags,
        'content': body,
        'url': url
    })

# Write search_index.json
json_path = Path('/home/doug/wiki/search_index.json')
json_path.write_text(json.dumps(entries, ensure_ascii=False, indent=2))
print(f"Wrote {len(entries)} entries to search_index.json")

# Write search_index.js
js_path = Path('/home/doug/wiki/search_index.js')
js_content = 'window.SEARCH_INDEX = ' + json.dumps(entries, ensure_ascii=False)
js_path.write_text(js_content)
print(f"Wrote {len(entries)} entries to search_index.js ({js_path.stat().st_size} bytes)")