# Research Wiki Tooling

Everything you need to run your own automated research wiki — a static site that ingests academic papers and journal articles, synthesizes article and concept pages, and publishes to GitHub Pages. Powered by an AI agent.

**What this tooling does:**
- **Daily scans** arXiv (cs.CY/cs.HC/cs.CL/cs.AI + physics.ed-ph) and EdArXiv for new papers in your domain
- **Weekly journal scans** pull open-access articles from journal RSS feeds (CAEAI, CEAO, BJET, Frontiers in Psychology, IJETHE — see `config.example.yaml`)
- Ingests papers into a structured markdown wiki: one `articles/<slug>.md` per paper, one `concepts/<slug>.md` per broad topic, with cross-links and a tag taxonomy
- Publishes an **Astro 7 static site** with Pagefind full-text search, sitemap, RSS, and agent-ready `llms.txt`/`llms-full.txt`
- Publishes **offline EPUB and PDF versions** (`aied.epub`, `aied.pdf`) with a clickable, numbered table of contents and a Notice page
- Deploys to GitHub Pages with a single `git push` (GitHub Actions)

**[Live example: AI in Education Wiki](https://edtechdev.github.io/aied)** — 900+ articles and concept pages on AI in education, auto-updated weekdays at 9 AM ET and Sundays via RSS.

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
| `site.config.json` (repo root) | **Single source of truth** for site metadata — name, short name, brand, URL, base path, repo/issues URLs, editor name + contact, license, theme colors. All code + tooling read it; do NOT hardcode these elsewhere |
| `SCHEMA.md` | Your domain, tag taxonomy, page conventions |
| `config.example.yaml` | arXiv categories, search keywords, journal RSS feeds, relevance filters |
| `cron/daily-scan-prompt.md` | Daily cron prompt — update domain references |
| `cron/weekly-rss-scan-prompt.md` | Weekly journal cron prompt |
| `scripts/fetch-rss-feeds.py` | The `FEEDS` dict — add/remove journals |
| `skills/research/wiki-inline-links/` | The inline-link HARD GATE pass (term→slug dictionary + scanner + `check_list_formatting.py`) |

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

### 5. Set up the AI agent cron jobs

Two cron jobs (see `cron/` for the prompts):

| Job | Schedule | Sources |
|-----|----------|---------|
| Daily scan | Weekdays 9:00 AM | arXiv (cs.CY, cs.HC, cs.CL, cs.AI, physics.ed-ph), EdArXiv |
| Weekly journal RSS | Sundays 8:00 AM | Journal RSS feeds (open-access only) |

Create them with `agent cron create` using the prompt files, setting `workdir` to your wiki path.

## Wiki Structure

```
wiki/
├── articles/          # One page per paper (synthesis, findings, citations)
├── concepts/          # One page per broad topic (synthesizes multiple papers)
├── faqs/              # Curated FAQ pages (question-and-answer)
├── raw/papers/        # Raw source text (arXiv, PDFs, RSS abstracts)
├── tooling/           # Reusable tooling: SKILL.md (research-wiki), SCHEMA.md, README, cron/, scripts/
├── skills/            # Mirrored AI agent skills: research/wiki-inline-links/ (inline-link + list-formatting HARD GATE)
├── src/               # Astro pages: index, journal, search, faq, article/concept/faq templates; lib/jsonld.ts
├── public/            # llms.txt, llms-full.txt, robots.txt
├── astro.config.mjs   # Astro config (base, pagefind, sitemap)
├── package.json       # Astro 7 + pagefind + sitemap + rss
├── index.md           # Full alphabetical catalog
├── journal.md         # Reverse-chronological journal
├── log.md             # Audit log of every wiki action
└── .github/workflows/ # Build & deploy to GitHub Pages
```

## Page Types

- **Article pages** (`articles/<slug>.md`) — one per paper. Frontmatter → synthesis blockquote → Key Findings → Connected Concepts → Connected Articles → APA citation with hyperlinked title.
- **Concept pages** (`concepts/<slug>.md`) — one per broad topic that synthesizes multiple articles. Frontmatter → synthesis → research themes with wikilinks → Connected Concepts → Connected Articles.
- **FAQ pages** (`faqs/<slug>.md`) — one per curated question-and-answer. Frontmatter → question heading → narrative answer with wikilinks (can link to concepts, articles, and other FAQs). No sources/citation. Listed on the journal page (❓), indexed in llms files, and linked from concept/article pages via `connected_faqs`.

Inter-page links use `[[wikilink]]` syntax, rendered as hyperlinks by the Astro templates.

**Inline hyperlink rule (HARD GATE):** after creating/enriching any article or concept page, run the inline-link pass (see `wiki-inline-links` skill) — hyperlink every concept mentioned in the page body narrative to its concept page (aggressive, including conceptually-similar phrases), and fix self-links, links in `##` headings, same-text links `[[slug|slug]]`, and broken links. Verify 0 self-links, 0 heading links, balanced brackets, and 0 broken links **before** `npm run build`. A green build does NOT substitute for this editorial pass.

**List-formatting rule (HARD GATE):** ordered/bulleted lists whose consecutive items are separated by a blank line render broken — each item restarts at `1.` (CommonMark splits them into separate lists). Run `python3 skills/research/wiki-inline-links/scripts/check_list_formatting.py <WIKI> --all` before build and fix every reported page by removing the blank line between consecutive list items. A green build does NOT catch this; the maintainer flags it repeatedly.

## Pipeline Commands

```bash
# Fetch journal RSS feeds (outputs JSON to stdout)
python3 tooling/scripts/fetch-rss-feeds.py

# Regenerate agent-ready files
python3 tooling/scripts/generate-llms-files.py

# HARD GATE checks before build (both required; green build does NOT substitute)
python3 skills/research/wiki-inline-links/scripts/inline_link_scan.py . --all   # inline-link pass (advisory; apply links)
python3 skills/research/wiki-inline-links/scripts/check_list_formatting.py . --all   # list-formatting check (fix 0 defects)

# Build the Astro site (also emits the PWA: manifest.webmanifest + sw.js + workbox runtime)
npm run build

# Deploy (GitHub Actions deploys dist/ on push)
git add -A && git commit -m "..." && git push
```

## Agent-Ready Files

The site publishes machine-readable files for AI agents:

- **`llms.txt`** — complete catalog: every article, concept, and FAQ, one line each
- **`llms-full.txt`** — full text of every page
- **`robots.txt`** — search indexing + sitemap
- **JSON-LD structured data** — a linked schema.org `@graph` on every page, generated by `src/lib/jsonld.ts` + `src/components/JsonLd.astro` (see `docs/json-ld.md`)

Regenerate them with `generate-llms-files.py` after each ingestion batch.

## PWA

The site is an installable Progressive Web App. `npm run build` emits `dist/manifest.webmanifest`, `dist/sw.js`, `dist/registerSW.js`, and the `workbox-*.js` runtime. The service worker is generated by a dedicated post-build step (`generate-sw.mjs` via `workbox-build`) because `vite-plugin-pwa`'s own `generateSW` hook does not fire under Astro 7 (the `@vite-pwa/astro` wrapper only supports Astro ≤5). The SW precaches the app shell and runtime-caches content pages (NetworkFirst) and the Pagefind search index (StaleWhileRevalidate), with a `/aied/` navigation fallback for offline browsing. PWA icons live in `public/` (`pwa-192x192.png`, `pwa-512x512.png`, `pwa-maskable-512x512.png`). Deploy CI runs `npm run build` so the SW is always generated — keep it that way, or `sw.js` silently disappears from production.

## Offline Versions (EPUB & PDF)

The wiki is published as downloadable eBooks alongside the site:

- **EPUB** — `public/aied.epub` → `https://edtechdev.github.io/aied/aied.epub`
- **PDF** — `public/aied.pdf` → `https://edtechdev.github.io/aied/aied.pdf`

Both are generated from the **same markdown export** as the site and contain the home introduction, the Use-With-AI page, all concept pages (chapters by umbrella group, clickable numbered TOC), the FAQ pages, and a Notice page (editor, CC0 license, AI-disclaimer, issue reporting). They contain only the concept and FAQ pages — not the article summaries.

Regenerate both with one command:

```bash
python3 tooling/build-epub.py
```

This writes `public/aied.epub` and `public/aied.pdf`. Supporting files:

- `tooling/build-epub.py` — assembles the shared markdown export, runs pandoc for the EPUB (hard-coded hierarchical TOC numbering) and pandoc + **weasyprint** for the PDF (clickable blue TOC via CSS counters), and post-processes the EPUB (Notice page, CC0 badge, landmarks labeling).
- `tooling/pdf-style.css` — PDF print layout (A4, page numbers, cover page, blue clickable links).
- `tooling/gen-epub-cover.mjs` — renders the book cover (`public/epub-cover.png`) with sharp.
- `tooling/gen-og-concept-map.mjs` — renders the concept-map images.

The EPUB/PDF and cover are committed artifacts (built locally, like `llms-full.txt`) and served from `public/` by the deploy workflow. Requires `pandoc`, and for the PDF the `weasyprint` Python package.

## Dependencies

- **AI agent** (for cron jobs and ingestion)
- **Node.js 18+** (Astro 7, Pagefind)
- **Python 3.9+** (stdlib only — no pip packages required)
- **pandoc** — for the EPUB/PDF generation (`tooling/build-epub.py`)
- **weasyprint** (Python) — PDF engine used by pandoc for `aied.pdf`
- **pdftotext** (poppler-utils) for PDF extraction
- **GitHub Pages** for deployment

## Troubleshooting

| Problem | Check |
|---------|-------|
| Site not updating | GitHub Actions deploy workflow ran? Actions tab → astro-deploy |
| Search index stale | Pagefind-based — run `npm run build` so `dist/pagefind/` regenerates |
| llms.txt out of date | `python3 tooling/scripts/generate-llms-files.py` then `npm run build` |
| Broken wikilinks | Links use `[[slug]]` — the slug must match a file in `articles/` or `concepts/` |
| Numbered list shows every item as `1.` | Blank lines between consecutive list items split them into separate lists — run `check_list_formatting.py` and remove the blank lines |
| YAML parsing errors | Titles with colons must be quoted: `title: "X: Y"` |
| Paywalled articles | Hybrid journals (BJET) — the weekly cron skips paywalled articles and reports them |

## Run Your Own Wiki

Copy the `tooling/` directory **and the `skills/` directory** into a new repo, follow this README and the Astro site setup, and you'll have your own automated research wiki in ~15 minutes.

To fully reproduce the ingestion workflow (including the inline-link HARD GATE and the list-formatting check), install the AI agent skills in the `research` category, all mirrored under `skills/research/` (each with a "Repository mirror" note pointing back here):
- **`research-wiki`** — the full ingestion + export pipeline (mirrored in `tooling/SKILL.md`)
- **`wiki-inline-links`** — the aggressive inline-link + list-formatting pass that runs on every new/enriched page before build (mirrored in `skills/research/wiki-inline-links/`)
- **`wiki-epub-export`** — EPUB/PDF regeneration (`skills/research/wiki-epub-export/`)
- **`wiki-journal-update`** — regenerates `journal.md` + `index.md` in the exact on-disk format (`skills/research/wiki-journal-update/`)
- **`wiki-site-quality`** — static-site bug fixes: dup H1, broken links, dead/fragmented tags, markdown tables, journal date quoting, public-repo privacy checks (`skills/research/wiki-site-quality/`)
- **`wiki-astro-frontend`** — editing the Astro frontend (homepage, concept map, sidebar, icons, PWA, JSON-LD, theming) (`skills/research/wiki-astro-frontend/`)

See `cron/` for the job prompts that wire them together.
