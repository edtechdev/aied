# AI Ed Wiki — Daily Scan Pipeline

**Location:** `/home/doug/wiki`  
**Static site:** `/home/doug/wiki/static-site` → served at `http://localhost:8080`  
**Hermes cron job:** `9a44c11daec8` ("Daily AI in Education arXiv Scan")

## What It Does

Every day at **9:00 AM**, a Hermes cron job:
1. Searches **arXiv** (cs.CY, cs.HC, cs.CL, cs.AI) and **Semantic Scholar** for new AI-in-education papers
2. Filters for relevance (AI/LLM applied to education, tutoring, feedback, grading, assessment)
3. Skips already-ingested papers (checks `raw/papers/`)
4. Ingests new papers: raw source → concept page → back-links → index → log → journal
5. Regenerates the **static HTML site** with search and tag filtering
6. Sends a **Telegram summary** of what was added, skipped, and not relevant

## Quick Commands

```bash
# Manual trigger (run the pipeline on demand)
# Tell Hermes: "run the daily AIED scan"
# Or from Hermes: cronjob(action='run', job_id='9a44c11daec8')

# View the wiki in a browser
open http://localhost:8080

# Search the wiki (CLI)
grep -r "search term" /home/doug/wiki/concepts/

# Check web server status
ss -tlnp | grep 8080
```

## Configuration

The pipeline configuration lives in the Hermes cron job. To view or modify:

```
# In Hermes, ask: "show me the daily AIED scan cron job config"
# Or: cronjob(action='list') to see all jobs
```

Key configurable parameters embedded in the cron job prompt:
- **Schedule:** `0 9 * * *` (9 AM daily) — edit via `cronjob(action='update', job_id='9a44c11daec8', schedule='...')`
- **Search sources:** arXiv categories (cs.CY, cs.HC, cs.CL, cs.AI) + Semantic Scholar
- **Search keywords:** title terms for education relevance
- **Date window:** Stored in agent memory as `last_arxiv_scan_date`, auto-advances each run
- **Wiki path:** `/home/doug/wiki` (absolute)
- **Notification:** Delivers to origin (this Telegram chat)

## Wiki Structure

```
/home/doug/wiki/
├── concepts/          # 76+ synthesized concept pages (one per paper/topic)
├── raw/
│   ├── papers/        # ~68 raw arXiv paper text files
│   ├── articles/      # ~11 non-arXiv article text files
│   └── assets/        # Media files
├── entities/          # Notable organizations, people, products
├── queries/           # Saved queries and daily digests
├── comparisons/       # Side-by-side analyses
├── SCHEMA.md          # Domain, conventions, tag taxonomy, page thresholds
├── index.md           # Full alphabetical content catalog
├── journal.md         # Reverse-chronological index of all ingested papers
├── log.md             # Audit log of every wiki action
└── static-site/       # Generated static HTML site
    ├── index.html     # Homepage with search, tag filter, all pages
    ├── search.html    # FlexSearch-powered full-text search
    ├── search_index.json / .js
    └── pages/         # 76 individual HTML pages
```

## Dependencies

The pipeline uses only standard tools available in the Hermes agent environment:
- **arXiv API:** No key required, rate-limited (~1 req/3s)
- **Semantic Scholar API:** No key required, rate-limited (~100 req/5min)
- **pdftotext:** For PDF extraction (from poppler-utils)
- **curl:** For API calls (with --retry for rate limiting)
- **Python stdlib:** xml.etree, json, re, hashlib, subprocess, yaml (PyYAML)
- **FlexSearch 0.7.31:** Client-side search (CDN, no install needed)
- **Pico CSS:** UI framework (CDN, no install needed)

## Troubleshooting

| Problem | Check |
|---------|-------|
| Web server not responding | `ss -tlnp \| grep 8080` — restart if needed: `python3 -m http.server 8080 --directory /home/doug/wiki/static-site &` |
| Cron job didn't run | Check Hermes cron status: `cronjob(action='list')` |
| arXiv API 429 errors | Rate limit hit — retries built in (--retry 3 --retry-delay 2), wait 1 min |
| Static site out of date | Manual regenerate: run the wiki-static-export script or ask Hermes to regenerate |
| YAML parsing errors | Check concept page frontmatter — titles with colons must be quoted: `title: "X: Y"` |
| Missing pages | Check `index.md` count vs. `ls concepts/*.md \| wc -l` — may need re-sort |
```

## Adding New Sources

To add a new search source (e.g., ERIC, PubMed), update the cron job prompt:
```
# In Hermes
cronjob(action='update', job_id='9a44c11daec8', prompt='...updated prompt with new source...')
```

## Manual Ingestion

To ingest a specific paper immediately, send the arXiv URL to Hermes. The `research-wiki-ingestion` skill handles the full workflow automatically.
