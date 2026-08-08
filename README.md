# AI Ed Wiki — Daily Scan Pipeline

A knowledge base on artificial intelligence in education — research, pedagogy, policy, and practice. Automatically ingests new AI-in-education papers daily from arXiv and Semantic Scholar.

**Live site:** [edtechdev.github.io/aied](https://edtechdev.github.io/aied)

## What It Does

Every day at 9:00 AM, a Hermes Agent cron job:
1. Searches **arXiv** (cs.CY, cs.HC, cs.CL, cs.AI) and **Semantic Scholar** for new AI-in-education papers
2. Filters for relevance (AI/LLM applied to education, tutoring, feedback, grading, assessment)
3. Skips already-ingested papers (checks `raw/papers/`)
4. Ingests new papers: raw source → concept page → back-links → index → log → journal
5. Regenerates the **static HTML site** with search and tag filtering
6. Sends a **Telegram summary** of what was added, skipped, and not relevant

## Quick Commands

```bash
# View the wiki locally
python3 -m http.server 8080 --directory static-site/

# Search the wiki (CLI)
grep -r "search term" concepts/

# Check web server status
ss -tlnp | grep 8080
```

## Configuration

The pipeline runs as a Hermes Agent cron job. Key configurable parameters:
- **Schedule:** `0 9 * * *` (9 AM daily)
- **Search sources:** arXiv categories (cs.CY, cs.HC, cs.CL, cs.AI) + Semantic Scholar
- **Search keywords:** title terms for education relevance
- **Date window:** Auto-advances each run based on last ingestion date
- **Notification:** Delivers to a Telegram chat

## Wiki Structure

```
wiki/
├── concepts/          # Synthesized concept pages (one per paper/topic)
├── raw/
│   ├── papers/        # Raw arXiv paper text files
│   ├── articles/      # Non-arXiv article text files
│   └── assets/        # Media files
├── entities/          # Notable organizations, people, products
├── queries/           # Saved queries and daily digests
├── comparisons/       # Side-by-side analyses
├── SCHEMA.md          # Domain, conventions, tag taxonomy, page thresholds
├── index.md           # Full alphabetical content catalog
├── journal.md         # Reverse-chronological index of all ingested papers
├── log.md             # Audit log of every wiki action
└── static-site/       # Generated static HTML site (deployed to GitHub Pages)
    ├── index.html     # Homepage with search, tag filter, all pages
    ├── journal.html   # Full reverse-chronological journal
    ├── search.html    # FlexSearch-powered full-text search
    ├── tags.html      # Tag directory
    ├── tags/          # Per-tag listing pages
    ├── search_index.json / .js
    └── pages/         # Individual HTML pages
```

## Dependencies

The pipeline uses only standard tools:
- **arXiv API:** No key required, rate-limited (~1 req/3s)
- **Semantic Scholar API:** No key required, rate-limited (~100 req/5min)
- **pdftotext:** For PDF extraction (from poppler-utils)
- **curl:** For API calls (with --retry for rate limiting)
- **Python stdlib:** xml.etree, json, re, hashlib, subprocess, PyYAML
- **FlexSearch 0.7.31:** Client-side search (CDN, no install needed)
- **Pico CSS:** UI framework (CDN, no install needed)

## Troubleshooting

| Problem | Check |
|---------|-------|
| Web server not responding | `ss -tlnp \| grep 8080` — restart if needed: `python3 -m http.server 8080 --directory static-site/ &` |
| arXiv API 429 errors | Rate limit hit — retries built in (--retry 3 --retry-delay 2), wait 1 min |
| Static site out of date | Regenerate via `scripts/generate-static-site.py` in the research-wiki skill |
| YAML parsing errors | Check concept page frontmatter — titles with colons must be quoted: `title: "X: Y"` |
| Missing pages | Check `index.md` count vs. `ls concepts/*.md \| wc -l` — may need re-sort |

## Adding New Sources

To add a new search source (e.g., ERIC, PubMed), update the Hermes cron job prompt with the new source and search parameters.

## Manual Ingestion

To ingest a specific paper immediately, send the arXiv URL or OSF/EdArXiv preprint link to Hermes. The `research-wiki` skill handles the full workflow automatically.

## Run Your Own Wiki

Want to set up your own automated research wiki for a different domain? Everything you need is in the [`tooling/`](tooling/) directory:

- **`tooling/README.md`** — Complete setup guide
- **`tooling/SKILL.md`** — Hermes Agent skill definition
- **`tooling/scripts/`** — Static site generator, journal regenerator, backlink tool
- **`tooling/templates/`** — HTML template for the homepage
- **`tooling/references/`** — Pipeline architecture, filtering strategies, recovery procedures
- **`tooling/cron/`** — Cron job prompt template
- **`tooling/example/`** — Starter wiki files to get going quickly
- **`tooling/config.example.yaml`** — Scan configuration for customization

Just copy the `tooling/` directory into a new repo, follow the README, and you'll have your own daily-scan research wiki in ~15 minutes. No API keys required.
