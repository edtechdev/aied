# Research Wiki Tooling

Everything you need to run your own automated research wiki — a static site that ingests academic papers daily, synthesizes concept pages, and publishes to GitHub Pages. Powered by [Hermes Agent](https://github.com/NousResearch/hermes-agent).

**What this tooling does:**
- Daily scans arXiv, Semantic Scholar, and OpenAlex for new papers in your domain
- Ingests papers into a structured markdown wiki with concept pages, cross-links, and a tag taxonomy
- Generates a full static HTML site with search, tag filtering, journal, and RSS feed
- Deploys to GitHub Pages with a single `git push`

**[Live example: AI in Education Wiki](https://edtechdev.github.io/aied)** — 600+ articles on AI in education, auto-updated weekdays at 9 AM ET.

## Quick Start

### 1. Clone this repo (or copy the tooling/ directory into yours)

```bash
git clone https://github.com/edtechdev/aied.git
cd aied
```

This repo is a working wiki. The `tooling/` directory contains everything needed to run your own. Copy `tooling/` into a new repo to start fresh:

```bash
mkdir my-research-wiki && cd my-research-wiki
cp -r ../aied/tooling/* .
cp ../aied/tooling/.[!.]* . 2>/dev/null  # hidden files if any
```

### 2. Customize for your domain

Edit these files to match your research topic:

| File | What to change |
|------|---------------|
| `SCHEMA.md` | Your domain, tag taxonomy, page conventions |
| `config.example.yaml` | arXiv categories, search keywords, relevance filters |
| `cron/daily-scan-prompt.md` | Cron job prompt — update domain references |
| `templates/index-template.html` | Site title, navigation |

### 3. Initialize your wiki

Create minimal starter files:

```bash
mkdir -p concepts raw/papers static-site/pages static-site/tags
echo '# My Wiki' > index.md
echo '# Journal' > journal.md
echo '# Log' > log.md
```

### 4. Install Hermes Agent

```bash
# Install Hermes Agent (see https://hermes-agent.nousresearch.com/docs)
pip install hermes-agent

# Or follow the quick install:
curl -fsSL https://nousresearch.com/hermes/install.sh | bash
```

### 5. Install the research-wiki skill

```bash
# Copy the skill into Hermes
cp SKILL.md ~/.hermes/skills/research-wiki/SKILL.md
cp -r scripts/ ~/.hermes/skills/research-wiki/scripts/
cp -r templates/ ~/.hermes/skills/research-wiki/templates/
cp -r references/ ~/.hermes/skills/research-wiki/references/
```

### 6. Set up the daily scan cron job

Create a Hermes cron job using the prompt in `cron/daily-scan-prompt.md`:

```bash
hermes cron create \
  --schedule "0 9 * * 1-5" \
  --skills research-wiki \
  --prompt "$(cat cron/daily-scan-prompt.md)" \
  --deliver origin \
  --name "Daily Research Scan"
```

Or set up via Hermes Agent conversation:
> "Create a cron job that runs weekdays at 9 AM using the research-wiki skill with this prompt: [paste prompt]"

### 7. Generate your first static site

```bash
python3 scripts/generate-static-site.py \
  --wiki-path . \
  --output-path static-site \
  --wiki-title "My Research Wiki" \
  --site-url "https://YOUR_USERNAME.github.io/YOUR_REPO"
```

### 8. Deploy to GitHub Pages

```bash
# Enable GitHub Pages in your repo settings (Settings → Pages → Source: Deploy from a branch → main → / (root))

# Commit and push
git add .
git commit -m "Initial wiki setup"
git push origin main
```

Your wiki will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO`.

## How It Works

```
Cron job (9 AM weekdays)
  │
  ├─► Step 1: Determine search window (last scan date from log.md)
  │
  ├─► Step 2: Multi-source search
  │     ├── arXiv API (cs.CY, cs.HC, cs.CL, cs.AI)
  │     ├── Semantic Scholar bulk search
  │     └── OpenAlex
  │
  ├─► Step 3: Deduplicate (skip already-ingested papers)
  │
  ├─► Step 4: Relevance filter (two-stage: title scan → abstract verification)
  │
  ├─► Step 5: Ingest new papers
  │     ├── Save raw source → raw/papers/<id>.md
  │     ├── Create concept page → concepts/<slug>.md
  │     ├── Add back-links to existing pages
  │     ├── Rebuild index.md
  │     └── Update log.md + journal.md
  │
  ├─► Step 6: Regenerate static site
  │     ├── Individual page HTMLs
  │     ├── index.html (with search, tags, journal)
  │     ├── journal.html, tags.html, search.html
  │     ├── Tag pages + tag → topic redirects
  │     ├── RSS feed (feed.xml)
  │     └── search_index.json + search_index.js
  │
  └─► Step 7: git add + commit + push
```

## File Structure

```
your-wiki/
├── concepts/              # Synthesized concept pages (one per paper/topic)
├── raw/papers/            # Raw paper text with frontmatter
├── index.md               # Alphabetical content catalog
├── journal.md             # Reverse-chronological paper index
├── log.md                 # Audit log of all actions
├── SCHEMA.md              # Domain, conventions, tag taxonomy
├── static-site/           # Generated HTML (auto-committed, deployed)
│   ├── index.html
│   ├── journal.html
│   ├── search.html
│   ├── tags.html
│   ├── feed.xml
│   ├── search_index.js / .json
│   ├── pages/             # Individual concept pages as HTML
│   └── tags/              # Per-tag listing pages
├── tooling/               # THIS DIRECTORY — the engine
│   ├── SKILL.md           # Hermes Agent skill definition
│   ├── scripts/           # Python scripts (generator, journal, backlinks)
│   ├── templates/         # HTML template for index.html
│   ├── references/        # Pipeline architecture, filtering, recovery
│   ├── cron/              # Cron job prompt
│   └── config.example.yaml
└── README.md              # This file
```

## Scripts Reference

| Script | Purpose |
|--------|---------|
| `scripts/generate-static-site.py` | Converts markdown wiki to full static HTML site |
| `scripts/regenerate-journal.py` | Rebuilds journal.md from concept page frontmatter |
| `scripts/regenerate-journal-html.py` | Converts journal.md to styled journal.html |
| `scripts/add-backlinks.py` | Adds cross-links from existing pages to new concept pages |
| `scripts/detect-readfile-corruption.py` | Fixes pages corrupted by read_file line-number prefixes |

## Customizing the Scan

Edit `config.example.yaml` to change:

- **Schedule:** When the cron job runs (default: 9 AM ET weekdays)
- **arXiv categories:** Which categories to scan (default: cs.CY, cs.HC, cs.CL, cs.AI)
- **Keywords:** Title/abstract terms for relevance filtering
- **Relevance rules:** What to include/exclude
- **Search window:** How far back to look when no prior scan date exists
- **Rate limiting:** Retry strategy for API calls

After editing, update your cron job prompt to match.

## Dependencies

- **Hermes Agent** — runs the daily scan and ingestion
- **Python 3.9+** — for static site generation (stdlib only: `json`, `re`, `xml`, `hashlib`)
- **PyYAML** — for frontmatter parsing (`pip install pyyaml`)
- **pdftotext** (poppler-utils) — for arXiv PDF extraction (`apt install poppler-utils`)
- **GitHub Pages** — free hosting, no server needed

No API keys required. arXiv and Semantic Scholar have free, rate-limited APIs.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| arXiv API 429 (rate limited) | Built-in retry with exponential backoff; falls back to listing pages |
| Static site out of date | Run `scripts/generate-static-site.py` manually |
| Missing pages in index | Run `scripts/detect-readfile-corruption.py --fix` |
| Journal entries not appearing | Check that journal.md entries use em-dash `—` separator (not hyphen) |
| Cron job stalled | Follow `references/cron-recovery.md` recovery procedure |
| YAML frontmatter errors | Quote titles with colons: `title: "X: Y"` |

## Reference Documents

- `references/daily-scan-pipeline.md` — Full pipeline architecture and error handling
- `references/aied-relevance-filtering.md` — Two-stage title+abstract filtering
- `references/arxiv-api-query-pattern.md` — Proven execute_code API query patterns
- `references/arxiv-listing-extraction.md` — Listing-page extraction as API fallback
- `references/web-search-fallback.md` — Web search fallback for paper discovery
- `references/cron-recovery.md` — Recovery procedure for stalled cron jobs
- `references/journal-regeneration-em-dash.md` — Safe journal.md regenerator

## License

MIT — use freely for your own research wikis. See the [live example](https://edtechdev.github.io/aied) for inspiration.