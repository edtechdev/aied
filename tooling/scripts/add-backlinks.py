#!/usr/bin/env python3
"""
Add back-links from existing wiki concept pages to a new concept page.
Usage: python3 add-backlinks.py <new-page-slug> <wiki-concepts-path>
"""

import os
import sys

def add_backlink(existing_page_path, new_page_slug, description):
    """Add a back-link to an existing page's Related Pages section."""
    with open(existing_page_path, 'r') as f:
        content = f.read()
    
    # Check if link already exists
    if f"[[{new_page_slug}]]" in content:
        return False
    
    # Find Related Pages section
    if '## Related Pages' not in content:
        return False
    
    lines = content.split('\n')
    related_start = None
    insert_pos = None
    
    for i, line in enumerate(lines):
        if line.strip() == '## Related Pages':
            related_start = i
        elif related_start is not None and line.strip().startswith('## ') and i > related_start:
            insert_pos = i
            break
    
    if insert_pos is None:
        # Find end of Related Pages (next empty line or EOF)
        for i in range(related_start + 1, len(lines)):
            if lines[i].strip() == '':
                insert_pos = i
                break
        if insert_pos is None:
            insert_pos = len(lines)
    
    # Insert new link
    new_link = f"- [[{new_page_slug}]] — {description}"
    lines.insert(insert_pos, new_link)
    lines.insert(insert_pos + 1, '')
    
    with open(existing_page_path, 'w') as f:
        f.write('\n'.join(lines))
    
    return True

def main():
    if len(sys.argv) != 3:
        print("Usage: python3 add-backlinks.py <new-page-slug> <wiki-concepts-path>")
        sys.exit(1)
    
    new_page = sys.argv[1]
    concepts_path = sys.argv[2]
    
    # Example backlinks list - customize per ingestion
    backlinks = [
        # (existing_page_name, description)
        # Example: ('metacognition', 'Systematic review mapping AI scaffolding of metacognition')
    ]
    
    print(f"Adding back-links to {new_page}...")
    added = 0
    for existing_page, desc in backlinks:
        page_path = os.path.join(concepts_path, f"{existing_page}.md")
        if not os.path.exists(page_path):
            print(f"  - Skipped: {existing_page} (page not found)")
            continue
        if add_backlink(page_path, new_page, desc):
            print(f"  ✓ Added: {existing_page} -> {new_page}")
            added += 1
        else:
            print(f"  - Skipped: {existing_page} (link exists or no Related Pages section)")
    
    print(f"\nAdded {added} back-links")

if __name__ == "__main__":
    main()