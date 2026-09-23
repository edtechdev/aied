# AI in Education Knowledge Base

A free, linked knowledge base on artificial intelligence in education — research, pedagogy, policy, and practice. It curates article summaries, synthesized concept pages, and FAQs into a single navigable site, and is automatically kept current by scheduled scans of new AI-in-education papers.

**[Browse the knowledge base](https://edtechdev.github.io/aied)** · **[Use it with your own AI assistant](https://edtechdev.github.io/aied/ai)** · **[Read it offline (EPUB)](https://edtechdev.github.io/aied/aied.epub)** · **[Read it offline (PDF)](https://edtechdev.github.io/aied/aied.pdf)**

---

## For Visitors

### What's inside

- **Articles** — one page per paper: key findings, methods, and an APA citation with a linked full text.
- **Concepts** — synthesized topic pages that connect related research (e.g. *feedback*, *assessment*, *teacher-role*), each with pre-reading questions, an introduction, and links to supporting articles.
- **FAQs** — curated answers to common questions, cross-linked to the concepts and articles behind them.
- **Resources** — 🧰 free tools, collections, assessment instruments and open formats worth using, each with an access note, a last-verified date, and the concepts it serves.
- Every page links to related pages via `[[wikilink]]`s, so you can follow a topic across the whole knowledge base.

### Use it with your own AI assistant

The knowledge base is agent-ready: it publishes `llms.txt` (a one-line catalog of every article, concept and FAQ), `llms-concepts.txt` (full text of the concept and FAQ pages, about 4 MB) and `llms-full.txt` (full text of every article, concept and FAQ, about 15 MB), so any AI chatbot or agent can use it as a grounded research reference. Resource pages are listed on the site and in the offline exports but are deliberately left out of the llms files, since their content lives on the external site they link to.

Copy-paste this prompt into your AI assistant:

```text
You are a research assistant for AI in education. Use the AI in Education Knowledge Base (https://edtechdev.github.io/aied/) as your primary source.

1. Route before you read. The FAQ index at https://edtechdev.github.io/aied/faq/ maps questions to the pages that answer them, including "what does the research show" questions. The full catalog at https://edtechdev.github.io/aied/llms.txt is about 800 KB, the concepts-and-FAQs file at https://edtechdev.github.io/aied/llms-concepts.txt is about 4 MB, and llms-full.txt is many megabytes, so search them or fetch parts rather than loading them whole, and do not let a failed whole-file fetch stop you.

2. Ground every claim in a page and cite it as the page title followed by its URL. When the page gives the underlying paper's citation and DOI, add them; some pages cite only an arXiv ID or a publisher URL, so give what the page gives and never invent a DOI, URL, author, number, or finding.

3. Synthesize across pages instead of leaning on one. Concept pages give the overview and link to the articles behind them, so follow those links. Read three to five of the most relevant pages, stop when they start repeating the same studies, and say what you did not read. If the knowledge base covers the topic only in a neighboring field, say so and answer by analogy.

4. Match the strength of the evidence. Controlled or randomized experiments that measure unassisted performance are strongest, then meta-analyses adjusted for publication bias, then reviews, then pilots, policy analyses, and opinion; one small study is not consensus. Check the study's tool generation before trusting an effect size: a comparison run on a superseded model (a GPT-3.5-era classroom study, for instance) describes a tool students no longer use, and pages say so in their Limitations. Each page renders its structured metadata — the concepts it connects to, intended audience, level, study design and confidence — as a Metadata table at the foot of the page, and the same fields are in the Markdown source at https://raw.githubusercontent.com/edtechdev/aied/main/<section>/<slug>.md; if you cannot check them, judge from how the article describes the study and say that is what you did.

5. Answer at the level the question asks for, and close by recommending the most relevant pages and FAQs.

Prefer the term "generative AI" over "LLM". The knowledge base is updated regularly, and the journal page at https://edtechdev.github.io/aied/journal/ lists the newest additions.

Example: "What does the research say about AI feedback for student writing?" Check the FAQ index, read the most relevant writing and feedback pages plus the studies they cite, then answer with citations and links.
```

### Offline versions

The knowledge base is also published as downloadable eBooks, generated from the same markdown as the site:

- **EPUB** — `https://edtechdev.github.io/aied/aied.epub`
- **PDF** — `https://edtechdev.github.io/aied/aied.pdf`

Both contain the home introduction, the *Use-With-AI* page, all **concept pages** (organized into chapters by umbrella group, with a clickable, numbered table of contents), the **FAQ pages**, and a closing **Free Tools and Resources** appendix. They contain the concept, FAQ and resource pages — not the hundreds of article summaries.

### How this was made

Pages are drafted by language models from the source papers and reviewed, corrected and published by a human editor, who is accountable for what appears here. The full account — which models, in what roles, what the scripts verify, what nothing verifies, and why no AI system is listed as an author — is in [AI-USE.md](AI-USE.md). It is also on the Notice page of both offline editions.

### License

Code in this repository is licensed under the **MIT License**; the knowledge-base content (markdown, HTML) is released to the public domain under **CC0 1.0 Universal**. See [LICENSE](LICENSE).

---

## For Contributors & Developers

### Tech stack

- **Astro 7** static site generator, deployed via GitHub Actions to GitHub Pages at base path `/aied`.
- **Pagefind** for full-text search, **RSS + sitemap**, **JSON-LD** schema.org structured data.
- Content lives in markdown collections (`content/en/articles/`, `content/en/concepts/`, `content/en/faqs/`, `content/en/resources/`) defined in `src/content.config.ts`; the build runs `astro check` + `astro build` + Pagefind + a service-worker step.

### Site configuration: `site.config.json`

All site-wide metadata lives in a single file, [`site.config.json`](site.config.json) at the repo root: the site name, short name, brand name (header label), description, language, site URL, base path, GitHub repo/issues URLs, the editor name + contact URL, the license, and the PWA theme colors.

**Do not hardcode these values in code or docs — read them from the config instead.** Astro imports it via `src/config/siteConfig.ts`; Python tooling (the EPUB/PDF builder, llms generator, RSS fetcher) opens it with `json.load`. To rename the site or change any metadata, edit `site.config.json`, then rebuild the site and regenerate the EPUB/PDF/llms files.

The same file holds the two blocks that back the AI-use disclosure: **`contributors`** (the people accountable for the corpus, referenced by id from page frontmatter so no name is written into a page) and **`aiDisclosure`** (the models in use with the date each took over, and the agent harness). The policy text they implement is [`AI-USE.md`](AI-USE.md). Adding a model means editing the config first: the disclosure gate refuses a page that names a model the config does not list.

### Repository layout

```
├── AI-USE.md          # Policy: how the corpus is made, which models, what a human checks
├── content/           # ALL markdown content, one tree (open it in Obsidian)
│   ├── en/            #   the default locale: articles, concepts, faqs, resources
│   ├── es/            #   translations, same four collections (en is the source)
│   └── ...            #   one folder per locale code in site.config.json
├── raw/papers/        # Raw source text (arXiv, PDFs, RSS abstracts) — gitignored, not committed
├── src/
│   ├── config/        # siteConfig.ts (wraps site.config.json with types)
│   ├── layouts/       # BaseLayout.astro (nav, search, footer)
│   ├── lib/           # jsonld.ts (schema.org helpers), content.config.ts (schema)
│   ├── components/    # JsonLd.astro, SourceButtons.astro
│   └── pages/         # index, journal, search, faq, resources, ai, rss, + dynamic pages
├── public/
│   ├── llms.txt         # Agent-ready catalog (every article, concept and FAQ, one line each)
│   ├── llms-concepts.txt # Full text of the concept and FAQ pages (~4 MB)
│   ├── llms-full.txt    # Full text of every article, concept and FAQ (~15 MB)
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

- **Article pages** — frontmatter (title, `created`/`updated` full quoted timestamps, type, **`sources`**, confidence, plus the typed metadata fields) → synthesis blockquote → `## Key Findings` (5–7 contiguous items) → 3–4 body sections → `## What this means for practice` (3–5 bullets) → `## Limitations` (2–4 bullets, optional: omit when the study gives no basis) → Connected Concepts → Connected Articles → Connected FAQs → **`## Citation` last**. The citation hyperlinks the paper's own title; the body carries no separate PDF or DOI link line. One page per paper. `audit-article-sections.py` enforces the section order and those counts.
- **Concept pages** — frontmatter → synthesis blockquote → `## Questions to Consider` (pre-reading questions, required on every concept page) → `## Introduction` → body with wikilinks → Connected Concepts → Connected Articles.
- **FAQ pages** — frontmatter → question heading → narrative answer with wikilinks. Curated answers; no sources, no Citation. Linked to concept and article pages via a **Connected FAQs** section (frontmatter `connected_faqs`).
- **Resource pages** — frontmatter (`url`, `resource_type`, `access`, `license`, `last_verified`, plus the typed metadata fields) → a fact block (visit, source, author, type, access, license, last verified) → short prose → Metadata table → Connected Concepts / Connected Resources. No `## Citation` — these are not papers. `check-resource-links.py` re-checks every external URL.
- All inter-page links use `[[wikilink]]` syntax, which the Astro templates render as hyperlinks.
- **Typed metadata replaced tags** (retired 2026-09-17). The concepts a page touches are named in the facet fields — `foundations`, `pedagogy`, `technology`, `assessment`, `methods`, `stakeholders`, `institutions`, `ethics` — each taking concept slugs filed under that field's own registry section, alongside the phrase fields `research_method`, `discipline`, `level`, `audience` and `page_kind`. They render as the Metadata table at the foot of every page and drive the PageFind facets and the page's schema.org keywords. A value of the wrong kind fails the build. See [`tooling/SCHEMA.md`](tooling/SCHEMA.md).
- **Structured data** — every page emits schema.org JSON-LD (`Article`/`DefinedTerm`/`FAQPage` as appropriate). See [`docs/json-ld.md`](docs/json-ld.md).

### How AI use is disclosed

Every page here was drafted by a language model and reviewed by a person, so the corpus says so rather than leaving a reader to guess. [`AI-USE.md`](AI-USE.md) is the policy text: which models are used and for what, what the editor does, what the scripts verify, what nothing verifies, and the position that no AI system is listed as an author or contributor.

The record itself is split by granularity, because one level cannot answer the other's question:

- **Per change** — the commit. `tooling/scripts/commit-if-green.sh` stamps each commit with `AI-Model`, `AI-Role` and `AI-Agent` trailers (and `Human-Review` when a reviewer id is given). A frontmatter field records only whoever produced the text as it now stands; commits cannot go stale, survive a page rewrite, and read back with `git log --format='%(trailers)'`.
- **Per page** — the frontmatter, in the markdown only, never rendered by the site or the editions: `contributors` and `reviewed_by` (contributor ids resolved from `site.config.json`), `ai_assist` (model, role, date for each AI contribution to the current text), `source_depth` for articles (full text, abstract only, metadata only — for a summarizing corpus this matters more than the model name) and `verified` (which checks ran). `reviewed_by` is set only where a human actually read the page; it is never a default.
- **Per corpus** — the standing statement, which also reaches readers: the Notice page of `aied.epub` and `aied.pdf` names the models, the human oversight and the limits of the record, all read from `site.config.json`.

The record begins 2026-09-22 and is not backfilled: pages published earlier carry no model claim, because naming a model for them would be inference, not record. Two gates enforce this — `tooling/scripts/check-ai-disclosure.py` (valid values, and a record required on pages created on or after that date) and the advisory `tooling/scripts/check-ai-disclosure-trailers.py` (commits with no trailers).

### Local development

```bash
# Install dependencies
npm install

# Develop locally
npm run dev

# Run every hard gate declared in wiki.config.yaml (registry, facets, generated views,
# inline links, list formatting, US English, article sections, number grounding,
# AI-use disclosure)
npm run verify

# Commit through the gate route: it runs the gates, scans the staged diff for personal
# details, and stamps the AI-use trailers (AI_MODEL / AI_ROLE / AI_REVIEWED_BY override)
bash tooling/scripts/commit-if-green.sh message.txt content/en/articles/example.md

# Build the static site (astro check + astro build; outputs to dist/)
npm run build

# Preview the production build
npm run preview
```

Regenerate committed artifacts after content changes:

```bash
# Regenerate agent-ready files (llms.txt, llms-concepts.txt, llms-full.txt)
python3 tooling/scripts/generate-llms-files.py

# Regenerate the offline EPUB + PDF (concepts + FAQs, cover, TOC)
python3 tooling/build-epub.py
```

The EPUB/PDF and cover are committed artifacts built locally (like `llms-full.txt`); the CI deploy copies `public/` so they're served from `/aied/aied.epub` and `/aied/aied.pdf`. Building them requires `pandoc` and, for the PDF, the `weasyprint` Python package.

### How it stays current

Scheduled jobs keep the knowledge base up to date:

1. **Daily scan** — searches arXiv (cs.CY, cs.HC, cs.CL, cs.AI, physics.ed-ph) and EdArXiv for new AI-in-education papers.
2. **Weekly journal scan** — ingests open-access articles from journal RSS feeds (Computers and Education: Artificial Intelligence, British Journal of Educational Technology, the Journal of Instructional Design and Technology, and others). The feed list and each journal's freshness window live in `wiki.config.yaml` → `journal_scan.feeds`; batch-publishing journals get a longer window so a quiet mailing does not blank them out.
3. **Manual ingestion** — PDFs or preprint URLs can be sent at any time.

Each run filters for relevance, skips already-ingested items, creates article pages (and updates concept pages), rebuilds the site, and commits + pushes to GitHub Pages.

### Troubleshooting

| Problem | Check |
|---------|-------|
| Site not updating | Confirm the GitHub Actions deploy workflow ran: Actions tab → astro-deploy |
| Search index stale | Search is Pagefind-based — run `npm run build` so `dist/pagefind/` regenerates |
| llms.txt out of date | `python3 tooling/scripts/generate-llms-files.py` then `npm run build` |
| Broken wikilinks | Links use `[[slug]]` — the slug must match a file in `content/en/articles/`, `content/en/concepts/` or `content/en/faqs/`, or a redirect entry in `src/data/conceptRedirects.ts` / `src/data/articleRedirects.ts` |
| Metadata rejected by the build | `python3 tooling/scripts/validate-facets.py` — a facet value must be a concept filed under that field's own registry section |
| An article's sections rejected | `python3 tooling/scripts/audit-article-sections.py --changed` — reports missing practice/Limitations sections, wrong bullet counts (practice 3–5, Limitations 2–4) and citations that are not last |
| A number in a page is not in its source | `python3 tooling/scripts/verify-number-grounding.py <slug>` — grounded means the token appears in `raw/papers/<file>.md`. Leading-dot p-values, table columns split across lines and values duplicated by the HTML conversion (`0.6950.695`) are false positives: grep the raw before changing prose |
| British spelling crept in | `python3 tooling/scripts/check-us-english.py --include-docs` — house style is US English; the checker ignores slugs, link targets and inline code |
| A resource link has rotted | `python3 tooling/scripts/check-resource-links.py` — re-checks every resource URL and reports the `last_verified` date that needs bumping |
| YAML parsing errors | Titles with colons must be quoted: `title: "X: Y"` |

---

## Run Your Own Knowledge Base

Want to set up an automated research knowledge base for a different domain? Everything you need is in the [`tooling/`](tooling/) directory:

- **`tooling/README.md`** — Complete setup guide
- **`tooling/SKILL.md`** — AI agent skill definition (the `research-wiki` ingestion + export pipeline)
- **`tooling/SCHEMA.md`** — Page conventions, the typed metadata fields (tags are retired), and the generated vocabulary lists
- **`tooling/scripts/`** — RSS fetcher (`fetch-rss-feeds.py`), llms generator (`generate-llms-files.py`), backlink tool (`add-backlinks.py`), resource link checker (`check-resource-links.py`), readfile-corruption checker, US-English checker (`check-us-english.py`) and its fixer (`respell-us-english.py`), AI-use disclosure gate (`check-ai-disclosure.py`) and the advisory trailer check (`check-ai-disclosure-trailers.py`)
- **`tooling/scripts/commit-if-green.sh`** — the commit route: gates, personal-identifier scan of the staged diff, then a commit stamped with the AI-use trailers
- **`tooling/ai-commit.sh`** — stamps a commit with the `AI-Model` / `AI-Role` / `AI-Agent` (and `Human-Review`) trailers, validating model and contributor ids against `site.config.json`
- **`tooling/references/`** — Pipeline architecture, filtering strategies, recovery procedures
- **`tooling/scripts/wiki_config.py`** — config loader/validator (`--check`, `--get`, `--cap`)
- **`tooling/scripts/check_concepts.py`** — validates the concept registry against `content/en/concepts/` and the generated views
- **`tooling/scripts/gen-concept-artifacts.py`** — regenerates the concept views from the registry
- **`tooling/scripts/run-gates.py`** — runs every HARD GATE declared in `wiki.config.yaml` (also `npm run verify`)
- **`tooling/scripts/sync-skills.py`** — reports/refreshes drift between the repo's `skills/` mirrors and the agent's installed copies
- **`tooling/cron/`** — Cron job prompt templates (daily scan, weekly RSS scan). Each enforces the **inline-link HARD GATE** (run the `wiki-inline-links` pass + verification before build/deploy), the **list-formatting HARD GATE** (`check_list_formatting.py`), the facet/metadata gate, the US-English house-style gate, and the tool-generation screen that reports a study's model version and collection window before it is ingested. The full gate list lives in `wiki.config.yaml` and runs as `npm run verify`.
- **`tooling/example/`** — Starter knowledge-base files to get going quickly
- **`wiki.config.yaml`** (repo root) — The pipeline configuration: content paths, build + gate commands, scan sources, journal feeds, relevance filter, and an `agent:` block that maps the pipeline's capabilities onto your AI agent's tools. Add or remove a journal or arXiv category here, in one place.
- **`concepts.registry.yaml`** (repo root) — The concept vocabulary: every concept slug with its title and synonym phrases, the sidebar sections, the merge/redirect map and the never-link list. `tooling/concept-index.md`, `src/data/conceptIndex.ts` and `src/data/conceptRedirects.ts` are **generated** from it.
- **`site.config.json`** (repo root) — Site identity: name, brand, URL, base path, repo/issues links, editor credit, license, theme colors.

The mirrored **AI agent skills** live in [`skills/research/`](skills/research/) and encode the editorial conventions the agents must follow:

- **`wiki-inline-links`** — term→slug scanner (`inline_link_scan.py`) + list-formatting checker (`check_list_formatting.py`), enforcing aggressive concept-linking in every new/enriched page and catching the recurring numbered-list blank-line bug.
- **`wiki-article-quality`** — per-page repair and the article page contract: section order, body-word budget, citation form, frontmatter checklist.
- **`wiki-batch-ingestion-qa`** — the QA layer across a batch: double H1s, heading links, same-text pipes, broken slugs, facet fields, length budget, and the tool-generation screen that decides whether a study still speaks to present-day AI.
- **`wiki-source-acquisition`** — full-text recovery (arXiv, OSF/EdArXiv, publisher), the raw-source write-back contract, and what to do when only an abstract is available.
- **`wiki-article-deletion`** — deleting a page and stripping every back-link, plus withdrawing a page whose claim is retired.
- **`wiki-journal-update`** — regenerating `journal.md`/`index.md` correctly.
- **`wiki-epub-export`** — building the EPUB/PDF offline versions.
- **`wiki-site-quality`** — static-site bug fixes (broken links, dead metadata chips, formatting).
- **`wiki-page-deepening`** — how to genuinely deepen/enrich/enhance a concept, article, or FAQ page (mine raw sources for specifics, weave into the narrative, add practical tips/examples/implications, cross-link, gate, ship).
- **`wiki-astro-frontend`** — editing the Astro frontend (homepage, concept map, icons, sidebar moves).
- **`wiki-faq-pages`**, **`wiki-citation-format`**, **`wiki-concept-page-design`**, **`wiki-consolidate-duplicate-pages`**, **`wiki-batch-fulltext-enrichment`**, **`wiki-concept-narrative`**, **`wiki-backlog-audit`**, **`wiki-link-bulk-editing`** — the remaining editorial procedures (FAQ type, citation form, concept-page shape, deduplication, bulk enrichment, backlog triage, bulk link edits).

> **Two copies, one role — why these files live in two places.** The `skills/research/` copies in this repo are **scrubbed, public-safe mirrors** of the agent's own installed skills, which live in the agent's home-directory skill store rather than in this repo. The installed copies are the working, full-detail originals and may contain environment-specific detail (paths, install notes). Because this repo is **public**, the mirrors must stay free of personal or machine-specific information — no names, machine-specific paths, or agent branding. When a skill changes, sync **only public-safe wording** from the installed original into the repo mirror; never overwrite a mirror wholesale with a local copy (that leaks private detail into public history). `python3 tooling/scripts/sync-skills.py --check` normalizes the sanctioned differences (absolute paths, the agent's name, personal identifiers) and reports only real content drift; `--to-repo` refreshes the mirrors with the redaction applied. The canonical `research-wiki` skill that drives ingestion/export lives in [`tooling/`](tooling/) (see below), not under `skills/`.

The repo's [`AGENTS.md`](AGENTS.md) documents the page-structure rules and the inline-link HARD GATE that agents must follow on every ingestion.

Just copy the `tooling/` **and `skills/`** directories into a new repo, follow the `tooling/README.md`, and you'll have your own knowledge base in ~15 minutes. No API keys required.
