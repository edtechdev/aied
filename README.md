# AI Ed Wiki

A knowledge base on artificial intelligence in education — research, pedagogy, policy, and practice. Automatically ingests new AI-in-education papers and journal articles, then publishes them as an agent-ready static site.

**Live site:** [edtechdev.github.io/aied](https://edtechdev.github.io/aied)

## What It Does

Hermes Agent cron jobs keep the wiki current:

1. **Daily scan (weekdays 9 AM)** — searches arXiv (cs.CY, cs.HC, cs.CL, cs.AI, physics.ed-ph) and EdArXiv for new AI-in-education papers
2. **Weekly journal scan (Sundays 8 AM)** — ingests open-access articles from journal RSS feeds (Computers and Education: Artificial Intelligence, British Journal of Educational Technology, and others)
3. **Manual ingestion** — PDFs or preprint URLs can be sent to Hermes at any time
4. Each run: filters for relevance → skips already-ingested items → creates article pages (and updates concept pages) → rebuilds the site → commits and pushes to GitHub Pages

## Site Structure

The site is built with **Astro 5** (static site generator), deployed via GitHub Actions to GitHub Pages.

```
wiki/
├── articles/          # Article pages (one markdown file per paper)
├── concepts/          # Synthesized concept pages (topic overviews)
├── raw/
│   └── papers/        # Raw source text (arXiv, PDFs, RSS abstracts)
├── src/
│   ├── layouts/       # BaseLayout.astro (nav, search, footer)
│   └── pages/         # Astro pages: index, journal, search, articles/[slug], concepts/[slug], tags, rss, ai
├── public/
│   ├── llms.txt       # Agent-ready catalog (all pages, one line each)
│   ├── llms-full.txt  # Full text of every page
│   ├── robots.txt     # Search indexing + Content-Signal + Schemamap
│   └── schema/        # Schema.org metadata
├── tooling/           # Reusable tooling for running your own wiki
├── astro.config.mjs   # Astro config (base /aied, pagefind, sitemap)
├── package.json       # Astro 5, pagefind, sitemap, rss
└── .github/workflows/ # Build & deploy to GitHub Pages
```

## Quick Commands

```bash
# Install dependencies
npm install

# Develop locally
npm run dev

# Build the static site (outputs to dist/)
npm run build

# Preview the production build
npm run preview

# Regenerate agent-ready files (llms.txt, llms-full.txt)
python3 tooling/scripts/generate-llms-files.py
```

The built site lands in `dist/` and is deployed to GitHub Pages via the GitHub Actions workflow (`.github/workflows/astro-deploy.yml`).

## Page Structure

- **Article pages** — frontmatter (title, date, type, tags, sources, confidence) → synthesis blockquote → Key Findings → Connected Concepts → Connected Articles → APA citation with hyperlinked title
- **Concept pages** — frontmatter → synthesis → research themes with wikilinks to related articles → Connected Concepts → Connected Articles
- All inter-page links use `[[wikilink]]` syntax which the Astro templates render as hyperlinks
- Tags are comma-delimited in frontmatter and rendered as links in the page header

## Configuration

The pipeline runs as Hermes Agent cron jobs:

| Job | Schedule | Sources |
|-----|----------|---------|
| Daily AI in Education Scan | Weekdays 9:00 AM | arXiv (cs.CY, cs.HC, cs.CL, cs.AI, physics.ed-ph), EdArXiv |
| Weekly Journal RSS Ingestion | Sundays 8:00 AM | CAEAI (open access), BJET (hybrid — paywalled articles skipped) |

Notifications deliver to Telegram.

## Use This Wiki with Your Own AI Assistant

The wiki is agent-ready. Any AI chatbot or agent can use it as a research reference:

- **`llms.txt`** — complete catalog (every article and concept with one-line descriptions)
- **`llms-full.txt`** — full text of every page
- **Use with AI page:** https://edtechdev.github.io/aied/ai

Copy-paste prompt for your AI chatbot or agent:

```text
You are a research assistant for AI in education. Use the AI in Education Wiki
as your knowledge base.

1. First fetch the catalog: https://edtechdev.github.io/aied/llms.txt
   (If you need full text of specific pages, fetch them from
   https://edtechdev.github.io/aied/llms-full.txt or the individual page URLs.)

2. When answering questions about AI in education research, ground your answer
   in articles and concepts from this wiki. Cite the wiki page title and URL
   for every claim you make from it, e.g.:
   "According to the wiki article 'X' (URL), ..."

3. If asked about a topic, synthesize across multiple related articles and
   concepts rather than relying on a single page. Mention when the wiki does
   not cover a topic instead of guessing.

4. Recommend related articles and concepts when relevant.

Example question: "What does the research say about AI feedback for student writing?"
→ Fetch llms.txt, find the writing/feedback articles, read the most relevant
  pages, and answer with citations.
```

## Manual Ingestion

To ingest a specific paper immediately, send the arXiv URL, OSF/EdArXiv preprint link, DOI, or PDF to Hermes. The ingestion workflow handles: text extraction → article page → concept updates → back-links → rebuild → push.

## Troubleshooting

| Problem | Check |
|---------|-------|
| Site not updating | Confirm the GitHub Actions deploy workflow ran: Actions tab → astro-deploy |
| Search index stale | Search is Pagefind-based — run `npm run build` so `dist/pagefind/` regenerates |
| llms.txt out of date | `python3 tooling/scripts/generate-llms-files.py` then `npm run build` |
| Broken wikilinks | Links use `[[slug]]` — the slug must match a file in `articles/` or `concepts/` |
| YAML parsing errors | Titles with colons must be quoted: `title: "X: Y"` |

## Run Your Own Wiki

Want to set up your own automated research wiki for a different domain? Everything you need is in the [`tooling/`](tooling/) directory:

- **`tooling/README.md`** — Complete setup guide
- **`tooling/SKILL.md`** — Hermes Agent skill definition
- **`tooling/scripts/`** — Static site generator, journal regenerator, backlink tool, RSS fetcher, llms generator
- **`tooling/templates/`** — HTML template for the homepage
- **`tooling/references/`** — Pipeline architecture, filtering strategies, recovery procedures
- **`tooling/cron/`** — Cron job prompt template
- **`tooling/example/`** — Starter wiki files to get going quickly
- **`tooling/config.example.yaml`** — Scan configuration for customization

Just copy the `tooling/` directory into a new repo, follow the README, and you'll have your own research wiki in ~15 minutes. No API keys required.
