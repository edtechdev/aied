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
concepts_dir = '<WIKI_PATH>/concepts'
raw_dir = '<WIKI_PATH>/raw/papers'
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

### 7. Rebuild the Astro Site

The wiki is published as an Astro static site (the old `generate-static-site.py` pipeline is retired):

```bash
# Regenerate agent-ready files, then build and deploy
python3 tooling/scripts/generate-llms-files.py
npm run build          # rebuilds dist/ with Pagefind search + sitemap
git add -A && git commit -m "recover: [TODAY] — completed stalled scan" && git push
```

GitHub Actions deploys `dist/` to GitHub Pages automatically on push. Verify with `npm run build` output (page count) and the Actions tab.

### 8. Verify the Deployed Site

```bash
curl -s -o /dev/null -w '%{http_code}' https://YOUR_USERNAME.github.io/YOUR_REPO/
```
Expect `200`. If the CDN is stale, wait a minute — GitHub Pages caches briefly.

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
