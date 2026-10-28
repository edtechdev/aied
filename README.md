# AI in Education Knowledge Base

A free, linked knowledge base on artificial intelligence in education: research, pedagogy, policy and practice. It turns new papers into readable summaries, synthesizes them into concept pages, and keeps both current by scanning the literature on a schedule.

**[Browse the knowledge base](https://edtechdev.github.io/aied)** · **[Use it with your own AI assistant](https://edtechdev.github.io/aied/ai)** · **[Read it offline (EPUB)](https://github.com/edtechdev/aied/raw/refs/heads/main/public/aied.epub)** · **[Read it offline (PDF)](https://github.com/edtechdev/aied/raw/refs/heads/main/public/aied.pdf)**

---

## For Readers

### What's inside

- **Articles** — one page per paper: key findings, methods, and an APA citation linking the full text.
- **Concepts** — synthesized topic pages (e.g. *feedback*, *assessment*, *teacher-role*), each with pre-reading questions, an introduction, and links to the research behind it. The [concept index](https://edtechdev.github.io/aied/concepts/) lists all 220 by section.
- **FAQs** — curated answers to common questions, cross-linked to the concepts and articles behind them.
- **Resources** — free tools, collections, assessment instruments and open formats worth using, each with an access note, a last-verified date, and the concepts it serves.
- **News** — a weekly update summarizing the most significant additions. [RSS](https://edtechdev.github.io/aied/news/rss.xml).
- Every page links to related pages with `[[wikilinks]]`, so a topic can be followed across the whole knowledge base.

### Use it with your own AI assistant

The corpus is agent-ready. It publishes `llms.txt` (one line per page), `llms-concepts.txt` (full text of the concept pages only, no FAQs or resources, capped at 500,000 words, about 4 MB) and `llms-full.txt` (every article, concept and FAQ, about 15 MB). Resource pages appear on the site and in the offline editions but are left out of the llms files, since their content lives on the external site they link to.

Copy-paste this into your assistant:

```text
You are a research assistant for AI in education. Use the AI in Education Knowledge Base (https://edtechdev.github.io/aied/) as your primary source.

1. Route before you read. The FAQ index at https://edtechdev.github.io/aied/faq/ maps questions to the pages that answer them. The catalog at https://edtechdev.github.io/aied/llms.txt is about 800 KB, llms-concepts.txt is about 4 MB, and llms-full.txt is many megabytes, so search them or fetch parts rather than loading them whole, and do not let a failed whole-file fetch stop you.

2. Ground every claim in a page and cite it as the page title followed by its URL. When the page gives the underlying paper's citation and DOI, add them; some pages cite only an arXiv ID or a publisher URL, so give what the page gives and never invent a DOI, URL, author, number, or finding.

3. Synthesize across pages instead of leaning on one. Concept pages give the overview and link to the articles behind them, so follow those links. Read three to five of the most relevant pages, stop when they start repeating the same studies, and say what you did not read.

4. Match the strength of the evidence. Controlled experiments measuring unassisted performance are strongest, then meta-analyses adjusted for publication bias, then reviews, then pilots and opinion; one small study is not consensus. Check the study's tool generation before trusting an effect size, because a comparison run on a superseded model describes a tool students no longer use. Each page renders its structured metadata as a table at the foot of the page, and the same fields are in the Markdown source at https://raw.githubusercontent.com/edtechdev/aied/main/<section>/<slug>.md.

5. Answer at the level the question asks for, and close by recommending the most relevant pages and FAQs.

Prefer the term "generative AI" over "LLM". The journal page at https://edtechdev.github.io/aied/journal/ lists the newest additions.
```

### Offline editions

The knowledge base is also published as downloadable eBooks, generated from the same markdown as the site:

- **EPUB** — `https://github.com/edtechdev/aied/raw/refs/heads/main/public/aied.epub`
- **PDF** — `https://github.com/edtechdev/aied/raw/refs/heads/main/public/aied.pdf`

Both contain the home introduction, the *Use-With-AI* page, every concept page (organized into chapters with a numbered table of contents), the FAQ pages, and a closing Free Tools and Resources appendix. They do not contain the article summaries.

These download from the repository rather than the site. The files are already compressed, so they are excluded from the published build to keep the deploy artifact small; a URL like `/aied/aied.epub` on the site returns 404 by design.

### How this is made

Page text is drafted by language models from the source papers and reviewed, corrected and published by a human editor, who is accountable for what appears. The full account — the role each AI system plays, what the scripts verify, what nothing verifies, and why no AI system is listed as an author — is in [AI-USE.md](AI-USE.md), and appears on the Notice page of both offline editions.

### Acknowledgements

- **[arXiv](https://info.arxiv.org/help/api/index.html)** — papers are discovered through arXiv's public APIs, OAI-PMH interface and RSS feeds. Their descriptive metadata is stored, and each page links back to the paper's abstract page rather than hosting the paper. Thank you to arXiv for use of its open access interoperability.
- **[OpenAlex](https://openalex.org/)** — open-access articles published outside the preprint servers are discovered through the OpenAlex API. Please cite OpenAlex as: Priem, J., Piwowar, H., & Orr, R. (2022). *OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts*. arXiv:2205.01833.
- **[Hermes Agent](https://hermes-agent.nousresearch.com/docs)** — the agent framework this knowledge base is built and maintained with.
- **[Blume](https://useblume.dev/)** — the documentation framework whose design and layout conventions this front end follows.

### License

Code is MIT licensed; the knowledge-base content is released to the public domain under CC0 1.0. See [LICENSE](LICENSE).

---

## For Contributors

### Tech stack

Astro 7, deployed to GitHub Pages at base path `/aied` by GitHub Actions. Pagefind provides full-text search; RSS, sitemap and schema.org JSON-LD are generated at build time. Content is markdown in collections defined in `src/content.config.ts`. The build runs `astro check`, `astro build`, Pagefind, then a service-worker step.

### Quick start

Requires **Node.js 22 or newer** and **Python 3.11 or newer** (the gate scripts use the standard library only). Rebuilding the offline editions additionally needs `pandoc`, plus the `weasyprint` and `pikepdf` Python packages.

```bash
git clone https://github.com/edtechdev/aied.git
cd aied
npm install
npm run build     # astro check + astro build + Pagefind + service worker
npm run preview   # serve dist/ locally
```

That is the whole setup: no environment variables, no API keys, nothing beyond `npm install`.

Two things to know before editing:

- **`raw/` is not committed.** It holds the extracted full text of each source paper, which is gitignored because it is copyrighted material, and every page's `sources:` field points into it. The site builds without it, but the number-grounding check reports `[no raw source found - cannot verify]` for an edited article until you fetch that paper's text yourself.
- **Scope the gates.** `npm run verify` walks the whole corpus and spends most of its time in the inline-link scan (11+ minutes over ~6,500 pages). For an ordinary edit use `python3 tooling/scripts/run-gates.py --changed`, which reads only the pages you touched and runs in seconds. The full sweep is for changes to slugs, facet values or generated artifacts.

### Repository layout

```
├── content/
│   ├── en/            # the source locale: articles, concepts, faqs, resources, newsletters
│   ├── es/            # translations, same collections
│   └── ...            # one folder per locale code in site.config.json
├── raw/papers/        # extracted source text, named by DOI/slug — gitignored
├── pdf-sources/       # source PDFs — gitignored (copyright)
├── src/
│   ├── config/        # siteConfig.ts (wraps site.config.json with types)
│   ├── i18n/          # chrome strings per locale (ui.<code>.ts, pages/*.ts) and
│   │                  # locales.json, the translated per-locale prose
│   ├── layouts/       # BaseLayout.astro (nav, search, footer)
│   ├── lib/           # jsonld.ts, markdown.ts, pageTitles.ts
│   ├── components/    # JsonLd.astro, SourceButtons.astro, per-page components
│   └── pages/         # index, journal, news, search, faq, resources, ai, rss, dynamic routes
├── public/            # llms*.txt, the committed EPUB/PDF editions, cover and marks
├── tooling/           # the pipeline: gates, generators, builders, cron prompts
├── skills/            # public-safe mirrors of the agent skills the pipeline follows
├── docs/              # json-ld.md, newsletters.md, and design notes
├── site.config.json   # single source of truth for site-wide metadata
├── wiki.config.yaml   # pipeline config: content paths, gate commands, scan sources, journal feeds
├── concepts.registry.yaml  # the concept vocabulary and redirect map
└── .github/workflows/ # build and deploy to GitHub Pages
```

### Site configuration

`site.config.json` at the repo root holds every site-wide value: name, short name, brand label, description, language, site URL, base path, repo and issues URLs, editor name and contact, license, PWA theme colors, and the `offlineBaseUrl` the editions download from. Astro imports it through `src/config/siteConfig.ts`; the Python tooling opens it with `json.load`. Edit the config rather than hardcoding a value.

That file is deliberately kept small enough to read. A locale is split in two: `site.config.json` holds its **configuration** (code, label, writing direction), and `src/i18n/locales.json` holds its **translated prose** — the machine-translation notice, the llms preamble, the offline edition's title and resource labels, and the taxonomy section headings. `siteConfig.ts` merges the two, so components and the Python builders all read one complete entry. Adding a language means one entry in each file plus its content.

The same file holds the two blocks behind the AI-use disclosure: **`contributors`** (the people accountable, referenced by id from page frontmatter so no name is written into a page) and **`aiDisclosure`** (the models in use and the harness). The disclosure gate refuses a page that names a model the config does not list, so add a new model to the config first.

### Page types

Every page type shares the typed metadata fields and a `[[wikilink]]` body. They differ in shape:

- **Article** — synthesis blockquote → Key Findings → body sections → *What this means for practice* → *Limitations* → **Citation last**. One page per paper. No Connected section: concept links live inline in the body, and the page's derived view is its metadata table.
- **Concept** — synthesis → *Questions to Consider* → Introduction → narrative body → Connected Concepts → Connected Articles.
- **FAQ** — frontmatter → question heading → narrative answer. Curated, with no sources and no Citation.
- **Resource** — a fact block (visit, source, author, type, access, license, last verified) → short prose → metadata table → Connected Concepts and Resources. These are not papers, so there is no Citation.
- **Newsletter issue** — see [docs/newsletters.md](docs/newsletters.md).

`audit-article-sections.py` enforces the article contract: section order, 3–5 practice bullets, 2–6 limitations bullets, and Citation last.

### Typed metadata

The concepts a page touches are named in facet fields — `foundations`, `pedagogy`, `technology`, `assessment`, `methods`, `stakeholders`, `institutions`, `ethics` — each taking concept slugs filed under that field's own section of `concepts.registry.yaml`. Alongside them sit the phrase fields `research_method`, `discipline`, `level`, `audience` and `page_kind`. They render as the metadata table at the foot of every page and drive the Pagefind facets and the page's schema.org keywords. A value of the wrong kind fails the build. See [tooling/SCHEMA.md](tooling/SCHEMA.md); the JSON-LD mapping is in [docs/json-ld.md](docs/json-ld.md).

### Pipeline commands

```bash
python3 tooling/scripts/run-gates.py --changed   # the gates, scoped to edited pages
npm run verify                                   # every hard gate, whole corpus (slow)
npm run build                                    # the static site
npm run preview                                  # preview the production build
bash tooling/scripts/commit-if-green.sh msg.txt <paths...>   # gate, scan, commit with AI-use trailers
python3 tooling/scripts/generate-llms-files.py   # regenerate llms*.txt (opt-in)
python3 tooling/scripts/validate-facets.py       # check typed metadata against the registry
python3 tooling/scripts/gen-concept-artifacts.py # regenerate concept views from the registry
python3 tooling/scripts/audit-metadata.py --strict
python3 tooling/scripts/check-us-english.py --include-docs
python3 tooling/scripts/sync-skills.py --check   # drift between skills/ and the agent's installed copies
```

The EPUB and PDF are built locally and committed:

```bash
PATH="$HOME/.local/bin:/usr/bin:$PATH" /usr/bin/python3 tooling/build-epub.py
```

The interpreter matters: the PDF stage runs under pandoc, which spawns the `weasyprint` console script under its own shebang, while the metadata step imports `pikepdf` in the process of whatever interpreter you invoked. `/usr/bin/python3` has both. The script exits 1 if the metadata step cannot run; verify the PDF's `/Lang` by reading the catalog back rather than trusting the exit code.

Do not build the site and the offline editions at the same time. The builder writes into `dist/`, and a site build regenerates that directory.

### How it stays current

Three paths add content, each committing through the same gate route:

1. **Daily scan** — searches arXiv (cs.CY, cs.HC, cs.CL, cs.AI, physics.ed-ph) and EdArXiv for new AI-in-education papers.
2. **Weekly journal scan** — ingests open-access articles from journal RSS feeds. The feed list and each journal's freshness window live in `wiki.config.yaml` under `journal_scan.feeds`; batch-publishing journals get a longer window so a quiet mailing does not blank them out.
3. **Manual ingestion** — PDFs or preprint URLs can be sent at any time.

Each run filters for relevance, skips what is already ingested, creates article pages, enriches the concept pages the new work contributes to, rebuilds and deploys. It also records every candidate concept pairing in `concept-screen.yaml` as integrated or deliberately declined.

Every article ingestion does two things beyond creating the page: it adds inline `[[wikilinks]]` for every concept the paper touches, and it weaves the finding into each concept page the article contributes to, rather than only adding a Connected Articles entry.

### The weekly newsletter

A weekly issue summarizes the most significant research and resources added, plus internal changes to the site. Issues live in `content/en/newsletters/<issue-date>.md`, render at `/news/<issue-date>/`, are listed on `/news/`, and are available as a second feed at `/news/rss.xml`. Each issue carries `issue` (a sequence number) and `status` (`draft`, `ready` or `published`), so a draft can sit in the folder without appearing on the site.

The format, house style and publishing contract are in **[docs/newsletters.md](docs/newsletters.md)**: the four section headings, the masthead, the frontmatter, how to link the way the site's own pages link, and the footer.

Three skills drive the work, mirrored under `skills/research/`:

- **`newsletter-issue-drafting`** — how to draft an issue: fix the seven-day window, list what was added from `git log` rather than memory, decide each item's section from the page's own `audience:` facet, read the page's bottom-line paragraph before writing about it, and verify every link. Its `scripts/render-newsletter-preview.py` renders a draft to a standalone page in the site palette, so you can review it without rebuilding the site:

  ```bash
  python3 skills/research/newsletter-issue-drafting/scripts/render-newsletter-preview.py \
    content/en/newsletters/2026-10-24.md --outdir /tmp/newsletter-preview
  python3 -m http.server 4322 --bind 0.0.0.0 --directory /tmp/newsletter-preview
  ```

  Serve it on a second port: the site's own preview port is your window on the live build, and a rebuild wipes the served directory for minutes.

- **`newsletter-publishing`** — the issue-as-page contract and the wiring checklist for publishing an issue on a site.
- **`astro-newsletter-publishing`** — the Astro steps for adding the page family to a site that lacks it: the collection, the routes, the second feed, the icons, the journal and sidebar entries, and the header link.

### Troubleshooting

| Problem | Check |
|---------|-------|
| Site not updating | Confirm the Actions deploy workflow ran: Actions tab → astro-deploy |
| Search index stale | Search is Pagefind-based — run `npm run build` so `dist/pagefind/` regenerates |
| llms.txt out of date | `python3 tooling/scripts/generate-llms-files.py`, then `npm run build` |
| Broken wikilinks | `[[slug]]` must match a file in `content/en/articles/`, `concepts/`, `faqs/` or `resources/`, or a redirect in `src/data/conceptRedirects.ts` / `articleRedirects.ts` |
| Metadata rejected by the build | `python3 tooling/scripts/validate-facets.py` — a facet value must be a concept filed under that field's own registry section |
| An article's sections rejected | `python3 tooling/scripts/audit-article-sections.py --changed` — reports missing practice or Limitations sections, bullet counts outside 3–5 and 2–6, and a Citation that is not last |
| A number is not in its source | `python3 tooling/scripts/verify-number-grounding.py <slug>` — grounded means the token appears in `raw/papers/<file>.md`. Leading-dot p-values, table columns split across lines and values duplicated by HTML conversion are false positives; grep the raw before changing prose |
| British spelling crept in | `python3 tooling/scripts/check-us-english.py --include-docs` — house style is US English; the checker ignores slugs, link targets and inline code |
| A resource link has rotted | `python3 tooling/scripts/check-resource-links.py` — re-checks every resource URL and reports the `last_verified` date to bump |
| YAML parsing errors | Quote titles containing colons: `title: "X: Y"` |

### AI-use disclosure in practice

Each commit is stamped with `AI-Model`, `AI-Role` and `AI-Agent` trailers, plus `Human-Review` when a reviewer id is given. Each page carries `ai_assist`, `source_depth`, `verified` and `contributors`, and `reviewed_by` only where a person has actually read it. The commit is the per-change record, the frontmatter is the per-page record, and [AI-USE.md](AI-USE.md) is the policy. `check-ai-disclosure.py` enforces valid values; `check-ai-disclosure-trailers.py` reports commits missing trailers.

---

## Run Your Own Knowledge Base

Everything needed to stand up an equivalent knowledge base for another domain is in [`tooling/`](tooling/):

- **[tooling/README.md](tooling/README.md)** — setup guide
- **[tooling/SKILL.md](tooling/SKILL.md)** — the ingestion and export pipeline, written as an agent skill
- **[tooling/SCHEMA.md](tooling/SCHEMA.md)** — page conventions, the typed metadata fields, and the generated vocabulary lists
- **[tooling/scripts/](tooling/scripts/)** — the gates and generators: registry and facet checks, the section audit, number grounding, the US-English checker and its fixer, AI-use disclosure, the commit route, the llms generator, the RSS fetchers and the skill sync
- **[tooling/references/](tooling/references/)** — pipeline architecture, filtering strategies, recovery procedures
- **[tooling/cron/](tooling/cron/)** — the scheduled-job prompt templates
- **[tooling/example/](tooling/example/)** — starter files

The agent skills the pipeline follows are mirrored in [`skills/research/`](skills/research/). They cover inline linking, article and concept page quality, batch ingestion QA, source acquisition, page deletion, the EPUB/PDF export, site quality, page deepening, the Astro frontend, FAQ and resource pages, citation form, concept-page design, deduplication, backlog triage, bulk link editing, the three newsletter skills, AI-content provenance and public-repo PII hygiene.

Those mirrors are scrubbed, public-safe copies of the agent's own installed skills: the repo copy uses `<WIKI>` for the repository root and `<AGENT>` for the skill store, and names no person and no agent product. Everything else is identical. `python3 tooling/scripts/sync-skills.py --check` normalizes those sanctioned differences and reports only real content drift; `--to-repo` refreshes a mirror with the redaction applied, and `--to-installed` copies the other way. Which side is authoritative depends on the file: a skill's `SKILL.md` is behavior, so the installed copy wins, while `tooling/scripts/` is the working copy the pipeline runs, so the repo wins.

[AGENTS.md](AGENTS.md) documents the page-structure rules and the inline-link requirement an agent must follow on every ingestion.

To start your own, copy `tooling/` and `skills/` into a new repository and follow `tooling/README.md`. No API keys are required.
