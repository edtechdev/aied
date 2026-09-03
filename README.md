# AI in Education Knowledge Base

A free, linked knowledge base on artificial intelligence in education — research, pedagogy, policy, and practice. It curates article summaries, synthesized concept pages, and FAQs into a single navigable site, and is automatically kept current by scheduled scans of new AI-in-education papers.

**[Browse the knowledge base](https://edtechdev.github.io/aied)** · **[Use it with your own AI assistant](https://edtechdev.github.io/aied/ai)** · **[Read it offline (EPUB)](https://edtechdev.github.io/aied/aied.epub)** · **[Read it offline (PDF)](https://edtechdev.github.io/aied/aied.pdf)**

---

## For Visitors

### What's inside

- **Articles** — one page per paper: key findings, methods, and an APA citation with a linked full text.
- **Concepts** — synthesized topic pages that connect related research (e.g. *feedback*, *assessment*, *teacher-role*), each with pre-reading questions, an introduction, and links to supporting articles.
- **FAQs** — curated answers to common questions, cross-linked to the concepts and articles behind them.
- Every page links to related pages via `[[wikilink]]`s, so you can follow a topic across the whole knowledge base.

### Use it with your own AI assistant

The knowledge base is agent-ready: it publishes `llms.txt` (a catalog of every page with one-line descriptions) and `llms-full.txt` (full text of every page), so any AI chatbot or agent can use it as a grounded research reference.

Copy-paste this prompt into your AI assistant:

```text
You are a research assistant for AI in education. Use the AI in Education Knowledge Base
as your knowledge base.

1. First fetch the catalog: https://edtechdev.github.io/aied/llms.txt
   (If you need full text of specific pages, fetch them from
   https://edtechdev.github.io/aied/llms-full.txt or the individual page URLs.)

2. When answering questions about AI in education research, ground your answer
   in articles and concepts from this knowledge base. Cite the page title and URL
   for every claim you make from it, e.g.:
   "According to the wiki article 'X' (URL), ..."

3. If asked about a topic, synthesize across multiple related articles and
   concepts rather than relying on a single page. Mention when the knowledge base
   does not cover a topic instead of guessing.

4. Recommend related articles and concepts when relevant.

Example question: "What does the research say about AI feedback for student writing?"
→ Fetch llms.txt, find the writing/feedback articles, read the most relevant
  pages, and answer with citations.
```

### Offline versions

The knowledge base is also published as downloadable eBooks, generated from the same markdown as the site:

- **EPUB** — `https://edtechdev.github.io/aied/aied.epub`
- **PDF** — `https://edtechdev.github.io/aied/aied.pdf`

Both contain the home introduction, the *Use-With-AI* page, all **concept pages** (organized into chapters by umbrella group, with a clickable, numbered table of contents), and the **FAQ pages**. They contain only the concept and FAQ pages — not the hundreds of article summaries.

### License

Code in this repository is licensed under the **MIT License**; the knowledge-base content (markdown, HTML) is released to the public domain under **CC0 1.0 Universal**. See [LICENSE](LICENSE).

---

## For Contributors & Developers

### Tech stack

- **Astro 7** static site generator, deployed via GitHub Actions to GitHub Pages at base path `/aied`.
- **Pagefind** for full-text search, **RSS + sitemap**, **JSON-LD** schema.org structured data.
- Content lives in markdown collections (`articles/`, `concepts/`, `faqs/`) defined in `src/content.config.ts`; the build runs `astro check` + `astro build` + Pagefind + a service-worker step.

### Site configuration: `site.config.json`

All site-wide metadata lives in a single file, [`site.config.json`](site.config.json) at the repo root: the site name, short name, brand name (header label), description, language, site URL, base path, GitHub repo/issues URLs, the editor name + contact URL, the license, and the PWA theme colors.

**Do not hardcode these values in code or docs — read them from the config instead.** Astro imports it via `src/config/siteConfig.ts`; Python tooling (the EPUB/PDF builder, llms generator, RSS fetcher) opens it with `json.load`. To rename the site or change any metadata, edit `site.config.json`, then rebuild the site and regenerate the EPUB/PDF/llms files.

### Repository layout

```
├── articles/          # Article pages (one markdown file per paper)
├── concepts/          # Synthesized concept pages (topic overviews)
├── faqs/              # Curated FAQ pages (question-and-answer)
├── raw/papers/        # Raw source text (arXiv, PDFs, RSS abstracts) — gitignored, not committed
├── src/
│   ├── config/        # siteConfig.ts (wraps site.config.json with types)
│   ├── layouts/       # BaseLayout.astro (nav, search, footer)
│   ├── lib/           # jsonld.ts (schema.org helpers), content.config.ts (schema)
│   ├── components/    # JsonLd.astro, SourceButtons.astro
│   └── pages/         # index, journal, search, faq, ai, rss, + dynamic pages
├── public/
│   ├── llms.txt       # Agent-ready catalog (every page, one line each)
│   ├── llms-full.txt  # Full text of every page
│   ├── aied.epub      # Offline EPUB version (concepts + FAQs)
│   ├── aied.pdf       # Offline PDF version (concepts + FAQs)
│   ├── epub-cover.png # Book cover used by the EPUB/PDF
│   └── cc0.png        # CC0 public-domain badge
├── tooling/           # Reusable tooling for running your own knowledge base
├── skills/            # Mirrored AI agent skills (inline linking, EPUB/PDF, site QA, ...)
├── site.config.json   # Single source of truth for site-wide metadata
├── astro.config.mjs   # Astro config (base /aied, pagefind, sitemap)
└── .github/workflows/ # Build & deploy to GitHub Pages
```

### Page structure

- **Article pages** — frontmatter (title, `created`/`updated` full quoted date+time timestamps, type, tags, **`sources`**, confidence) → synthesis blockquote → Key Findings → Connected Concepts → Connected Articles → APA citation with hyperlinked title. Every article must include a `sources:` field (required by the Astro 7 schema) pointing to the raw source file.
- **Concept pages** — frontmatter → synthesis blockquote → `## Questions to Consider` (pre-reading questions) → `## Introduction` → body with wikilinks → Connected Concepts → Connected Articles.
- **FAQ pages** — frontmatter → question heading → narrative answer with wikilinks. Curated answers; no sources/citation. Linked to concept/article pages via a **Connected FAQs** section (frontmatter `connected_faqs`).
- All inter-page links use `[[wikilink]]` syntax, which the Astro templates render as hyperlinks.
- **Tags** in frontmatter are concept slugs (each value is a real concept page), rendered as clickable chips. Optional structured metadata (`level`, `audience`, `discipline`, `category`, `research_method`) provide PageFind search facets. See [`tooling/SCHEMA.md`](tooling/SCHEMA.md).
- **Structured data** — every page emits schema.org JSON-LD (`Article`/`DefinedTerm`/`FAQPage` as appropriate). See [`docs/json-ld.md`](docs/json-ld.md).

### Local development

```bash
# Install dependencies
npm install

# Develop locally
npm run dev

# Build the static site (astro check + astro build; outputs to dist/)
npm run build

# Preview the production build
npm run preview
```

Regenerate committed artifacts after content changes:

```bash
# Regenerate agent-ready files (llms.txt, llms-full.txt)
python3 tooling/scripts/generate-llms-files.py

# Regenerate the offline EPUB + PDF (concepts + FAQs, cover, TOC)
python3 tooling/build-epub.py
```

The EPUB/PDF and cover are committed artifacts built locally (like `llms-full.txt`); the CI deploy copies `public/` so they're served from `/aied/aied.epub` and `/aied/aied.pdf`. Building them requires `pandoc` and, for the PDF, the `weasyprint` Python package.

### How it stays current

Scheduled jobs keep the knowledge base up to date:

1. **Daily scan** — searches arXiv (cs.CY, cs.HC, cs.CL, cs.AI, physics.ed-ph) and EdArXiv for new AI-in-education papers.
2. **Weekly journal scan** — ingests open-access articles from journal RSS feeds (Computers and Education: Artificial Intelligence, British Journal of Educational Technology, and others).
3. **Manual ingestion** — PDFs or preprint URLs can be sent at any time.

Each run filters for relevance, skips already-ingested items, creates article pages (and updates concept pages), rebuilds the site, and commits + pushes to GitHub Pages.

### Troubleshooting

| Problem | Check |
|---------|-------|
| Site not updating | Confirm the GitHub Actions deploy workflow ran: Actions tab → astro-deploy |
| Search index stale | Search is Pagefind-based — run `npm run build` so `dist/pagefind/` regenerates |
| llms.txt out of date | `python3 tooling/scripts/generate-llms-files.py` then `npm run build` |
| Broken wikilinks | Links use `[[slug]]` — the slug must match a file in `articles/` or `concepts/` |
| YAML parsing errors | Titles with colons must be quoted: `title: "X: Y"` |

---

## Run Your Own Knowledge Base

Want to set up an automated research knowledge base for a different domain? Everything you need is in the [`tooling/`](tooling/) directory:

- **`tooling/README.md`** — Complete setup guide
- **`tooling/SKILL.md`** — AI agent skill definition (the `research-wiki` ingestion + export pipeline)
- **`tooling/SCHEMA.md`** — Domain, tag taxonomy, and page conventions
- **`tooling/scripts/`** — RSS fetcher (`fetch-rss-feeds.py`), llms generator (`generate-llms-files.py`), backlink tool (`add-backlinks.py`), readfile-corruption checker
- **`tooling/references/`** — Pipeline architecture, filtering strategies, recovery procedures
- **`tooling/cron/`** — Cron job prompt templates (daily scan, weekly RSS scan), each enforcing the **inline-link HARD GATE** (run the `wiki-inline-links` pass + verification before build/deploy) and the **list-formatting HARD GATE** (run `check_list_formatting.py` before build)
- **`tooling/example/`** — Starter knowledge-base files to get going quickly
- **`tooling/config.example.yaml`** — Scan configuration for customization

The mirrored **AI agent skills** live in [`skills/research/`](skills/research/) and encode the editorial conventions the agents must follow:

- **`wiki-inline-links`** — term→slug scanner (`inline_link_scan.py`) + list-formatting checker (`check_list_formatting.py`), enforcing aggressive concept-linking in every new/enriched page and catching the recurring numbered-list blank-line bug.
- **`wiki-journal-update`** — regenerating `journal.md`/`index.md` correctly.
- **`wiki-epub-export`** — building the EPUB/PDF offline versions.
- **`wiki-site-quality`** — static-site bug fixes (broken links, dead tags, formatting).
- **`wiki-page-deepening`** — how to genuinely deepen/enrich/enhance a concept, article, or FAQ page (mine raw sources for specifics, weave into the narrative, add practical tips/examples/implications, cross-link, gate, ship).
- **`wiki-astro-frontend`** — editing the Astro frontend (homepage, concept map, icons).

The repo's [`AGENTS.md`](AGENTS.md) documents the page-structure rules and the inline-link HARD GATE that agents must follow on every ingestion.

Just copy the `tooling/` **and `skills/`** directories into a new repo, follow the `tooling/README.md`, and you'll have your own knowledge base in ~15 minutes. No API keys required.
