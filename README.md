# AI Ed Wiki

A knowledge base on artificial intelligence in education — research, pedagogy, policy, and practice. Automatically ingests new AI-in-education papers and journal articles, then publishes them as an agent-ready static site.

**Live site:** [edtechdev.github.io/aied](https://edtechdev.github.io/aied)

**Offline versions:** [EPUB](https://edtechdev.github.io/aied/aied.epub) · [PDF](https://edtechdev.github.io/aied/aied.pdf)

## License

Code in this repository is licensed under the **MIT License**; wiki content (markdown, HTML) is released to the public domain under **CC0 1.0 Universal**. See [LICENSE](LICENSE).

## What It Does

Cron jobs keep the wiki current:

1. **Daily scan** — searches arXiv (cs.CY, cs.HC, cs.CL, cs.AI, physics.ed-ph) and EdArXiv for new AI-in-education papers
2. **Weekly journal scan** — ingests open-access articles from journal RSS feeds (Computers and Education: Artificial Intelligence, British Journal of Educational Technology, and others)
3. **Manual ingestion** — PDFs or preprint URLs can be sent at any time
4. Each run: filters for relevance → skips already-ingested items → creates article pages (and updates concept pages) → rebuilds the site → commits and pushes to GitHub Pages

## Site Structure

The site is built with **Astro 7** (static site generator) and deployed via GitHub Actions to GitHub Pages (base path `/aied`). Content lives in markdown collections defined in `src/content.config.ts`; the build runs `astro check` + `astro build`, plus Pagefind (search index) and an RSS + sitemap.

```
wiki/
├── articles/          # Article pages (one markdown file per paper)
├── concepts/          # Synthesized concept pages (topic overviews)
├── faqs/              # Curated FAQ pages (question-and-answer)
├── raw/
│   └── papers/        # Raw source text (arXiv, PDFs, RSS abstracts) — gitignored, not committed
├── src/
│   ├── layouts/       # BaseLayout.astro (nav, search, footer, Pico CSS + custom styles)
│   ├── lib/jsonld.ts  # JSON-LD schema.org generation helpers
│   ├── components/    # JsonLd.astro, SourceButtons.astro
│   ├── pages/         # Astro pages: index, journal, search, faq, ai, rss, articles/[slug], concepts/[slug], faqs/[slug]
│   └── content.config.ts  # Content-collection schema (articles, concepts, faqs) — required `sources` field
├── public/
│   ├── llms.txt       # Agent-ready catalog (all pages, one line each)
│   ├── llms-full.txt  # Full text of every page
│   ├── aied.epub      # Offline EPUB version (concepts + FAQs)
│   ├── aied.pdf       # Offline PDF version (concepts + FAQs)
│   ├── epub-cover.png # Book cover used by the EPUB/PDF
│   ├── cc0.png        # CC0 public-domain badge
│   └── robots.txt     # Search indexing + sitemap
├── tooling/           # Reusable tooling for running your own wiki
├── astro.config.mjs   # Astro config (base /aied, pagefind, sitemap, trailingSlash: 'never')
├── package.json       # Astro 7, pagefind, sitemap, rss
└── .github/workflows/ # Build & deploy to GitHub Pages
```

## Quick Commands

```bash
# Install dependencies
npm install

# Develop locally
npm run dev

# Build the static site (runs `astro check` + `astro build`; outputs to dist/)
npm run build

# Preview the production build
npm run preview

# Regenerate agent-ready files (llms.txt, llms-full.txt)
python3 tooling/scripts/generate-llms-files.py

# Regenerate the EPUB (aied.epub) and PDF (aied.pdf) offline versions
python3 tooling/build-epub.py
```

The built site lands in `dist/` and is deployed to GitHub Pages via the GitHub Actions workflow (`.github/workflows/astro-deploy.yml`).

## Offline Versions (EPUB & PDF)

The wiki is also published as downloadable eBooks, generated from the same markdown as the site:

- **EPUB** — `https://edtechdev.github.io/aied/aied.epub`
- **PDF** — `https://edtechdev.github.io/aied/aied.pdf`

Both contain the **home introduction**, the **Use-With-AI page**, all **concept pages** (organized into chapters by umbrella group, with a clickable, numbered table of contents), the **FAQ pages**, and a **Notice** page (editor, CC0 license, AI-disclaimer, and how to report issues). The EPUB/PDF contain only the concept and FAQ pages — not the hundreds of article summaries.

**Regenerate both with one command** (shared markdown export + cover):

```bash
python3 tooling/build-epub.py
```

This writes `public/aied.epub` and `public/aied.pdf`. The scripts that produce them live in `tooling/`:

- `tooling/build-epub.py` — assembles the shared markdown export, then runs pandoc for the EPUB (with hard-coded hierarchical TOC numbering) and pandoc + **weasyprint** for the PDF (clickable blue TOC via CSS counters). It also post-processes the EPUB (Notice page, CC0 badge, landmarks labeling).
- `tooling/pdf-style.css` — print layout for the PDF (A4, page numbers, cover page, clickable blue links).
- `tooling/gen-epub-cover.mjs` — renders the book cover (`public/epub-cover.png`) with sharp (title, concept map, editor, CC0 badge, date).
- `tooling/gen-og-concept-map.mjs` — renders the concept-map images (white / dark variants).

The EPUB/PDF and cover are committed artifacts (built locally, like `llms-full.txt`); the CI deploy workflows copy `public/` so they're served from `/aied/aied.epub` and `/aied/aied.pdf`. Requires `pandoc` and, for the PDF, the `weasyprint` Python package.

## Page Structure

- **Article pages** — frontmatter (title, created/updated with full quoted date+time timestamps, type, tags, **sources**, confidence) → synthesis blockquote → Key Findings → Connected Concepts → Connected Articles → APA citation with hyperlinked title. Every article frontmatter must include a `sources:` field (required by the Astro 7 content schema) pointing to the raw source file.
- **Concept pages** — frontmatter → synthesis → research themes with wikilinks to related articles → Connected Concepts → Connected Articles
- **FAQ pages** (`faqs/`) — frontmatter → question heading → narrative answer with wikilinks. Curated answers to common questions; no sources/citation. Each FAQ is searchable, listed on the journal page (❓ badge), included in llms files, and can be linked to from concept/article pages via a **Connected FAQs** section (frontmatter `connected_faqs`).
- All inter-page links use `[[wikilink]]` syntax which the Astro templates render as hyperlinks (FAQs included — a FAQ's narrative can link to concepts, articles, and other FAQs)
- **Tags** in frontmatter are **concept slugs** (each value is a real concept page). They render as **clickable chips linking to their concept pages**. Optional structured metadata fields may accompany them: `level`, `audience`, `discipline`, `category`, `research_method` (natural-language arrays used as PageFind search facets). See `tooling/SCHEMA.md`.
- Styling: **Pico CSS** (v1, loaded via CDN in `BaseLayout.astro`) plus a small block of custom CSS (accent color, header/nav/footer) — no build-time CSS framework dependency
- **Structured data:** every page emits schema.org **JSON-LD** (a linked `@graph` with WebSite + Organization + WebPage + BreadcrumbList, plus per-type entities: articles → `Article` about a `ScholarlyArticle`; concepts → `DefinedTerm` in a `DefinedTermSet` + `Article`; FAQs → `FAQPage`). Generated automatically from frontmatter/body by `src/lib/jsonld.ts` + `src/components/JsonLd.astro` — see `docs/json-ld.md`.

## Agent-Ready Features

Beyond the human-facing site, the wiki is structured for AI agents and crawlers:

- **`llms.txt`** — complete catalog (every article, concept, and FAQ with one-line descriptions)
- **`llms-full.txt`** — full text of every page
- **`robots.txt`** — search-engine indexing + sitemap
- **JSON-LD structured data** — a linked schema.org `@graph` on every page (see `docs/json-ld.md`)
- **RSS + sitemap** — `rss.xml` and `sitemap-index.xml` (base `/aied`)
- **Pagefind** — full-text search, rebuilt on every `npm run build`

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
- **`tooling/SKILL.md`** — Hermes Agent skill definition (`research-wiki` ingestion + export pipeline)
- **`tooling/SCHEMA.md`** — Domain, tag taxonomy, and page conventions
- **`tooling/scripts/`** — RSS fetcher (`fetch-rss-feeds.py`), llms generator (`generate-llms-files.py`), backlink tool (`add-backlinks.py`), readfile-corruption checker
- **`tooling/references/`** — Pipeline architecture, filtering strategies, recovery procedures
- **`tooling/cron/`** — Cron job prompt templates (daily scan, weekly RSS scan), each enforcing the **inline-link HARD GATE** (run the `wiki-inline-links` pass + verification before build/deploy) and the **list-formatting HARD GATE** (run `check_list_formatting.py` before build)
- **`tooling/example/`** — Starter wiki files to get going quickly
- **`tooling/config.example.yaml`** — Scan configuration for customization
- **`skills/research/wiki-inline-links/`** — Mirrored Hermes skill: term→slug scanner (`inline_link_scan.py`) + list-formatting checker (`check_list_formatting.py`)

The repo's **AGENTS.md** documents the page-structure rules and the inline-link HARD GATE that agents must follow on every ingestion. The **`wiki-inline-links`** skill (term→slug dictionary + scanner + `check_list_formatting.py`) enforces aggressive concept-linking in every new/enriched page's narrative — and catches the recurring numbered-list blank-line bug — before the site is built.

Just copy the `tooling/` **and `skills/`** directories into a new repo, follow the README, and you'll have your own research wiki in ~15 minutes. No API keys required.
