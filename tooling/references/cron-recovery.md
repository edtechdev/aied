# Cron Stall Recovery

When a daily ingestion cron job stalls mid-pipeline during an `execute_code` call, the raw papers and concept pages are usually saved, but downstream artifacts (index, log, journal, digest, static site) are not. This reference has the recovery procedure.

## Detect the Stall

The agent's final message will be: `"Stream stalled mid tool-call (execute_code); the action was not executed. Ask me to retry if you want to continue."`

## Recovery Procedure

### 1. Find the Stalled Session

```python
session_search(query="<paper keyword or date>", sort="newest", limit=3)
```

Scroll to the stall point with `session_search(session_id=..., around_message_id=...)`.

### 2. Verify What Was Saved

Check both concept pages and raw papers for each expected paper:

```python
import os
concepts_dir = '/home/doug/wiki/concepts'
raw_dir = '/home/doug/wiki/raw/papers'
for slug, aid in expected_papers.items():
    cpath = os.path.join(concepts_dir, f'{slug}.md')
    rpath = os.path.join(raw_dir, f'{aid}.md')
    print(f"{slug}: {'✓' if os.path.exists(cpath) else '✗'}")
    print(f"{aid}:   {'✓' if os.path.exists(rpath) else '✗'}")
```

Also check stub pages that may have been created for backlinks.

### 3. Update index.md

Index must be fully rebuilt — not appended. Collect all concepts, sort alphabetically, rewrite the Concepts section:

```python
# Parse all concept files, extract slugs + titles + tags + confidence
# Sort by slug, rebuild the section
# Update header line: "N pages — last updated YYYY-MM-DD"
```

### 4. Append to log.md

Format:
```
## [YYYY-MM-DD] ingest | N-paper batch: short description
- **Source:** ...
- **Ingested (N papers):**
  - [[slug]] — Title
    Tags: ...
- **Back-links added:** N links across M targets
- **Index change:** X → Y pages
- **Key findings:** ...
## [YYYY-MM-DD] scan checkpoint | last_arxiv_scan_date: YYYY-MM-DD
```

### 5. Create Daily Digest

Path: `concepts/daily-digest-YYYY-MM-DD.md`

Frontmatter: `type: digest`, `tags: [daily-digest]`. Body: one subsection per paper with title, authors, venue, and 1-2 sentence key finding.

### 6. Update journal.md

Prepend new entries after the header line:
```
## YYYY-MM-DD
- ● [[slug]] (arXiv:ID) — Title
  Tags: ...
```

Update header: `*Last updated: YYYY-MM-DD | Total entries: N*`

### 7. Regenerate Static Site

Run `generate-static-site.py` first to rebuild index.html, search.html, and individual concept pages:

```bash
python3 scripts/generate-static-site.py --wiki-path /home/doug/wiki --output-path static-site --wiki-title 'AI Ed Wiki'
```

Then manually patch `static-site/journal.html` (the script does NOT touch it):
- Update the header's date and entry count
- Insert new `<tr>` rows into `<tbody>` for each paper + daily digest

For each new paper, insert:
```html
<tr><td class="conf-cell">&#x25cf;</td><td><a href="pages/{slug}.html">{title}</a></td><td class="source">{arxiv_id}</td><td class="tags-cell">{tags}</td></tr>
```

Also patch `static-site/index.html`:
- Update page count in header: `N pages | M tags`
- Insert new `<div class="page-item">` entries inside `<div id="pages-list">`

### 8. Restart Static Site Server

```python
import subprocess, urllib.request, time
result = subprocess.run(['curl', '-s', '-o', '/dev/null', '-w', '%{http_code}', 'http://localhost:8080/'],
                       capture_output=True, text=True, timeout=5)
if result.stdout != '200':
    subprocess.Popen(['python3', '-m', 'http.server', '8080'],
                    cwd='/home/doug/wiki/static-site',
                    start_new_session=True)
    time.sleep(0.5)
    urllib.request.urlopen('http://localhost:8080/', timeout=3)
```

### 9. Update Memory

```python
memory(action='replace', target='memory',
       old_text='last_arxiv_scan_date: <old_date>',
       content='last_arxiv_scan_date: YYYY-MM-DD')
```

## Pitfalls

- **Don't assume all steps completed** — the stall can happen at any point. Always verify.
- **Index must be rebuilt, not appended** — alphabetical sort breaks if you just append.
- **journal.html is manual** — `generate-static-site.py` doesn't touch it.
- **Server can be down** — cosmic rays, reboots, or port conflicts. Always check.
- **memory tool may be unavailable in cron** — the recovery session (interactive) should still work.
