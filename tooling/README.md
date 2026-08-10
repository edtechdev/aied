# Research Wiki Tooling

Everything you need to run your own automated research wiki — a static site that ingests academic papers and journal articles, synthesizes article and concept pages, and publishes to GitHub Pages. Powered by [Hermes Agent](https://github.com/NousResearch/hermes-agent).

**What this tooling does:**
- **Daily scans** arXiv (cs.CY/cs.HC/cs.CL/cs.AI + physics.ed-ph) and EdArXiv for new papers in your domain
- **Weekly journal scans** pull open-access articles from journal RSS feeds (CAEAI, BJET — see `config.example.yaml`)
- Ingests papers into a structured markdown wiki: one `articles/<slug>.md` per paper, one `concepts/<slug>.md` per broad topic, with cross-links and a tag taxonomy
- Publishes an **Astro 5 static site** with Pagefind full-text search, sitemap, RSS, and agent-ready `llms.txt`/`llms-full.txt`
- Deploys to GitHub Pages with a single `git push` (GitHub Actions)

**[Live example: AI in Education Wiki](https://edtechdev.github.io/aied)** — 500+ articles on AI in education, auto-updated weekdays at 9 AM ET and Sundays via RSS.

## Quick Start

### 1. Clone this repo (or copy the tooling/ directory into yours)

```bash
git clone https://github.com/edtechdev/aied.git
cd aied
```

This repo is a working wiki. The `tooling/` directory contains everything needed to run your own. Copy it into a new repo to start fresh:

```bash
mkdir my-research-wiki && cd my-research-wiki
cp -r ../aied/tooling/* .
```

### 2. Add the Astro site files

The wiki is published as an Astro static site. Copy these from the live wiki repo:

```bash
cp ../aied/astro.config.mjs .
cp ../aied/package.json .
cp -r ../aied/src .
cp -r ../aied/public .
mkdir -p .github/workflows
cp ../aied/.github/workflows/astro-build.yml .github/workflows/
cp ../aied/.github/workflows/astro-deploy.yml .github/workflows/
npm install
```

Adjust `astro.config.mjs` (`base` should match your repo name) and the `site` URL.

### 3. Customize for your domain

| File | What to change |
|------|---------------|
| `SCHEMA.md` | Your domain, tag taxonomy, page conventions |
| `config.example.yaml` | arXiv categories, search keywords, journal RSS feeds, relevance filters |
| `cron/daily-scan-prompt.md` | Daily cron prompt — update domain references |
| `cron/weekly-rss-scan-prompt.md` | Weekly journal cron prompt |
| `scripts/fetch-rss-feeds.py` | The `FEEDS` dict — add/remove journals |

### 4. Initialize your wiki

Create the directory structure and starter files:

```bash
mkdir -p articles concepts raw/papers
cp tooling/example/index.md .
cp tooling/example/journal.md .
cp tooling/example/log.md .
cp tooling/example/articles/* articles/
cp tooling/example/concepts/* concepts/
cp tooling/example/raw/papers/* raw/papers/
```

### 5. Set up the Hermes cron jobs

Two cron jobs (see `cron/` for the prompts):

| Job | Schedule | Sources |
|-----|----------|---------|
| Daily scan | Weekdays 9:00 AM | arXiv (cs.CY, cs.HC, cs.CL, cs.AI, physics.ed-ph), EdArXiv |
| Weekly journal RSS | Sundays 8:00 AM | Journal RSS feeds (open-access only) |

Create them with `hermes cron create` using the prompt files, setting `workdir` to your wiki path.

## Wiki Structure

```
wiki/
├── articles/          # One page per paper (synthesis, findings, citations)
├── concepts/          # One page per broad topic (synthesizes multiple papers)
├── raw/papers/        # Raw source text (arXiv, PDFs, RSS abstracts)
├── src/               # Astro pages: index, journal, search, article/concept templates
├── public/            # llms.txt, llms-full.txt, robots.txt, schema/
├── astro.config.mjs   # Astro config (base, pagefind, sitemap)
├── package.json       # Astro 5 + pagefind + sitemap + rss
├── index.md           # Full alphabetical catalog
├── journal.md         # Reverse-chronological journal
├── log.md             # Audit log of every wiki action
└── .github/workflows/ # Build & deploy to GitHub Pages
```

## Page Types

- **Article pages** (`articles/<slug>.md`) — one per paper. Frontmatter → synthesis blockquote → Key Findings → Connected Concepts → Connected Articles → APA citation with hyperlinked title.
- **Concept pages** (`concepts/<slug>.md`) — one per broad topic that synthesizes multiple articles. Frontmatter → synthesis → research themes with wikilinks → Connected Concepts → Connected Articles.

Inter-page links use `[[wikilink]]` syntax, rendered as hyperlinks by the Astro templates.

## Pipeline Commands

```bash
# Fetch journal RSS feeds (outputs JSON to stdout)
python3 tooling/scripts/fetch-rss-feeds.py

# Regenerate agent-ready files
python3 tooling/scripts/generate-llms-files.py

# Build the Astro site
npm run build

# Deploy (GitHub Actions deploys dist/ on push)
git add -A && git commit -m "..." && git push
```

## Agent-Ready Files

The site publishes machine-readable files for AI agents:

- **`llms.txt`** — complete catalog: every article and concept, one line each
- **`llms-full.txt`** — full text of every page
- **`robots.txt`** — search indexing + Content-Signal + Schemamap
- **`schema/`** — schema.org metadata

Regenerate them with `generate-llms-files.py` after each ingestion batch.

## Dependencies

- **Hermes Agent** (for cron jobs and ingestion) — https://github.com/NousResearch/hermes-agent
- **Node.js 18+** (Astro 5, Pagefind)
- **Python 3.9+** (stdlib only — no pip packages required)
- **pdftotext** (poppler-utils) for PDF extraction
- **GitHub Pages** for deployment

## Troubleshooting

| Problem | Check |
|---------|-------|
| Site not updating | GitHub Actions deploy workflow ran? Actions tab → astro-deploy |
| Search index stale | Pagefind-based — run `npm run build` so `dist/pagefind/` regenerates |
| llms.txt out of date | `python3 tooling/scripts/generate-llms-files.py` then `npm run build` |
| Broken wikilinks | Links use `[[slug]]` — the slug must match a file in `articles/` or `concepts/` |
| YAML parsing errors | Titles with colons must be quoted: `title: "X: Y"` |
| Paywalled articles | Hybrid journals (BJET) — the weekly cron skips paywalled articles and reports them |

## Run Your Own Wiki

Copy the `tooling/` directory into a new repo, follow this README and the Astro site setup, and you'll have your own automated research wiki in ~15 minutes.
