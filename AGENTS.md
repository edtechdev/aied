# AGENTS.md

## AI in Education Knowledge Base

Static site built with Astro, deployed to GitHub Pages from `main` branch at https://edtechdev.github.io/aied/

### Page types

Every markdown page lives under ONE content root, addressed as
`<content root>/<locale>/<collection>/<slug>.md` — here `content/en/…` for the
English pages and `content/<code>/…` for a translation:

    content/<locale>/{articles,concepts,resources,faqs}/<slug>.md

The root and the default (source-language) folder are configuration, not code:
`content.root` and `content.defaultDir` in `site.config.json`, where `defaultDir`
defaults to `i18n.defaultLocale`. The build reads them through
`src/config/content.ts` and the tooling through `tooling/scripts/content_paths.py`,
so moving the tree means editing two values and nothing else. Keep it that way: no
script may hardcode the root. A locale folder holds only the pages that exist in
that language; every other page falls back to the English one at its English URL.

Four content collections — **articles**, **concepts**, **resources** and **faqs** —
each a folder inside a locale folder, with strict structure.

### Article page structure (`content/en/articles/{slug}.md`)

Every article page follows this fixed section order — Synthesis → Key Findings → 3-4 body sections → What this means for practice → Limitations → Connected Concepts → Connected Articles (the page template appends Connected FAQs after them) → Citation (last, per the standing rule):

```yaml
---
title: Paper Title  # quote if contains colons: "Title: Subtitle"
created: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp (date+time)
updated: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp; bump on significant edits
type: article
sources: ['raw/papers/{arxiv_id}.md']
confidence: high
page_kind: [framework]  # what kind of page: framework | synthesis | evaluation
research_method: [systematic review, survey]  # how the study was done (optional)
discipline: [math education, physics education]  # optional
audience: [instructors, learners, researchers, administrators]  # intended audience (optional)
level: [early childhood, k 12, higher ed, adult learning]  # optional
# Topic facets: concept slugs from THEIR OWN registry section (optional, no tags field).
# Seven registry sections back a field. The People section backs NONE (field retired
# 2026-09-21): readership is asked once, in `audience:` above.
pedagogy: [scaffolding]       # Learning and instruction
technology: [llm]             # Technologies and techniques
assessment: [feedback]        # Assessment and measurement
methods: [rct]                # Research methods and evaluation
institutions: [governance]    # Institutions and policy
ethics: [academic-integrity]  # Equity, ethics, and responsible use
foundations: [ai-literacy]    # Foundations of AI in education
---

> **Synthesis:** One-paragraph summary (3-5 sentences) with embedded [[wikilinks]].

## Key Findings
1. **Headline claim.** The one or two numbers that decide it. (5-7 contiguous items, ~25-35 words each, no blank lines between items.)

## Body sections
3-4 `##` prose sections (~120-180 words each) with the analysis and embedded [[wikilinks]] to concepts and articles.

## What this means for practice
- **Instructors.** One action, imperative and derived from a finding on this page — no hedging.
- **Faculty developers, administrators, researchers, developers.** Add a labeled bullet only where the paper supports a genuinely distinct implication for that audience.

## Limitations
- 2-4 bullets, each carrying a concrete fact from the paper: sample and recruitment, one site, incentives, self-report measures, researcher role conflict, no follow-up.

## Connected Concepts
- [[concept-slug-1]]
- [[concept-slug-2]]
(max 15)

## Connected Articles
- [[related-article-slug]] — Article Title
(max 25)

## Citation
Authors (YYYY). [*Paper Title*](source_url). Venue/arXiv ID.
```

Rules for the two sections above:
- `## What this means for practice` is expected on every article page. Lead with **Instructors**; add other audience labels only when the paper supports a genuinely distinct implication, matched to the page's `audience:` facet. 3-5 bullets, imperative and derived — never "this could potentially suggest that instructors might consider".
- `## Limitations` is written whenever the paper states threats to validity or they are plainly evident, and **omitted** rather than filled with boilerplate: "small sample, single institution, results may not generalize" with no numbers is a defect, not a limitation. When the limitation is the measurement, link `[[self-report-measures]]` instead of restating it.
- **A section under a legacy heading is not a missing section (census 2026-09-19).** Older pages carry the same two sections under dozens of names — `Implications`, `Implications for AI in Education`, `Implications for practice`, `Design implications`, `Limitations and open questions`, `What the Evidence Cannot Yet Support`, and so on. Before writing anything, read the page's headings: if one of them already holds implications-for-practice copy or limitation copy, **rename the heading to the canonical name** instead of adding a section. Two tests decide it, and both failures are real: a heading that *catalogues practices* ("Four practices that make judgment visible") or *analyses a mechanism* ("Effort, ownership, and what this means for cognitive offloading") is a body section, not the implications section, so leave it; and a heading that covers *both* ("Implications and limitations", "Classroom implications and limitations") has to be split into the two canonical sections, not renamed. Then check the order is still practice → limitations → Connected Concepts, because a legacy page may have had them the other way round. A batch that ends with 0 broken links and 0 duplicate headings still needs this order check.
- **Body budget: 750-1,000 words** (frontmatter end → `## Connected Concepts`). The two sections are paid for out of the existing body, never bolted on top. Measure before committing, and never drop a distinct `[[wikilink]]` target to make the cut. When a page predates the budget and runs 2-3x over (many ingested 2026-09-13..18 do), add the missing sections and **report the page as over budget** rather than silently rewriting it — trimming a 2,000-word page back to the budget is its own pass with its own review, and doing it as a side effect of a section addition is how content gets lost.
- Nothing comes after `## Citation` (the standing citation rule keeps it last): the page template appends Connected FAQs, the metadata table and the source buttons.

### Concept page structure (`content/en/concepts/{slug}.md`)

Every concept page has synthesis → Questions to Consider → Introduction → body → Connected sections:

```yaml
---
title: Concept Name
created: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp (date+time)
updated: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp; bump on significant edits
type: concept
confidence: medium  # or high for well-developed concepts
# Topic facets: concept slugs from THEIR OWN registry section (optional, no tags field).
pedagogy: [scaffolding]
technology: [llm]
---

> **Brief synthesis paragraph** with [[wikilinks]] to related pages.

## Questions to Consider

Open, reflective pre-reading questions (2-7; target 3-6) that surface/challenge
misconceptions, activate prior knowledge, and connect the concept to the reader's
own context. One contiguous bulleted list (no blank lines between items).

## Introduction

Narrative intro labeling the start of the body.

Rich body content with embedded wikilinks to related articles and concepts.

## Connected Concepts
- [[concept-slug-1]]
(max 15)

## Connected Articles
- [[article-slug-1]] — Article Title
(max 25)
```

### FAQ page structure (`content/en/faqs/{slug}.md`)

Every FAQ page is a curated question-and-answer:

```yaml
---
title: "Question being answered?"
created: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp
updated: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp; bump on significant edits
type: faq
# Topic facets: concept slugs from THEIR OWN registry section (optional, no tags field).
ethics: [academic-integrity]
---

# Question being answered?

Narrative answer with embedded [[wikilinks]] to concepts, articles, and other FAQs.
```

FAQ pages have **no** `sources`, **no** Connected Concepts/Connected Articles/Citation sections — they
are curated answers, not paper summaries. Their narrative follows the same inline-link convention as
articles and concepts (link every concept mention). To surface a FAQ on a concept/article page, add the
FAQ slug to that page's `connected_faqs` frontmatter (renders a **Connected FAQs** section).

### Sources of truth

- **Site identity** (name, URL, base path, editor, license, theme): `site.config.json`.
- **Content location**: `site.config.json` (`content.root`, `content.defaultDir`) — the
  one place the markdown tree's path is set; resolve it through
  `tooling/scripts/content_paths.py` (or `wiki_config.path(cfg, 'concepts')`) rather
  than writing a content path by hand.
- **Pipeline + scan settings** (paths, gate/build commands, arXiv sources, journal
  feeds, relevance filter, agent tool mapping): `wiki.config.yaml`. Read it with
  `python3 tooling/scripts/wiki_config.py` — never hardcode a path, journal, arXiv
  category or agent tool name in a prompt or script.
- **Concept vocabulary** (slug, title, synonym phrases, sidebar sections, redirects):
  `concepts.registry.yaml`. `tooling/concept-index.md`, `src/data/conceptIndex.ts`
  and `src/data/conceptRedirects.ts` are **generated** from it by
  `python3 tooling/scripts/gen-concept-artifacts.py` — never hand-edit them. A new
  concept needs a `concepts:` entry (title + at least one alias) AND a place in a
  `sections:` group, then `python3 tooling/scripts/check_concepts.py` must pass.
  Move a concept between sections by editing the registry's `sections:` list order
  (the sidebar follows it), then re-run the generator; a section move also changes
  which facet FIELD may hold that slug, so reroute the value on every page that
  carries it or `validate-facets.py` fails.
- **AI-use disclosure and provenance** (policy: `AI-USE.md`; values: `site.config.json`):
  `AI-USE.md` states which models are used and for what, what the human editor does,
  what the scripts verify, what is *not* verified, and that no AI system is listed as
  an author or contributor. Which models are in use and since when, and who the
  contributors are, live in `site.config.json` (`aiDisclosure`, `contributors`).
  Pages carry the per-page record in frontmatter (`contributors`, `reviewed_by`,
  `ai_assist`, `source_depth`, `verified`), which is never rendered on the site or in
  the offline editions; the per-change record is in git, written by
  `tooling/ai-commit.sh`.
- **Article slug redirects** live in `src/data/articleRedirects.ts`, which is
  **maintained by hand** (there is no registry block for article merges or renames;
  `[slug].astro` reads its keys so old URLs keep resolving). Concept redirects are
  the opposite — generated from the registry's `redirects:` block.

### Rules
- NO duplicate H1 headings in body (template adds the title)
- NO duplicate sections (one Connected Concepts, one Connected Articles)
- FAQ narratives follow the same inline-link convention as articles and concepts (link every concept mention, including links to other FAQs); `connected_faqs` on concept/article pages drives the Connected FAQs section
- **Inline hyperlink rule (wiki-style, HARD GATE):** whenever a concept is mentioned by name in the BODY of a concept or article page, hyperlink that mention to the concept's page (e.g. `[[constructivist]]` in a sentence, or piped `[[cognitive-offloading|doing the cognitive work]]` when display text differs from the slug). Do this for every concept mention in body prose — exactly as wikis do — in addition to the Connected Concepts/Articles lists at the bottom. Use the most specific concept slug that matches the mention's meaning (not a looser one), and prefer the dedicated umbrella page when one exists (e.g. link plain "feedback" to `[[feedback]]`, not `[[feedback-loop]]`). **This pass is a BLOCKING PREREQUISITE before `npm run build` / commit / push / deploy on every newly created or enriched page — a green build does NOT substitute for it.** Load the `wiki-inline-links` skill and run the pass + verification (0 self-links, 0 heading links, balanced brackets, 0 broken links) on every new page first.
- **Link targets come from the alias registry:** `concepts.registry.yaml` maps phrases (aliases) to concept pages, and matching is exact-string. A phrase registered as an alias of the wrong concept links there everywhere ("inclusive design" was an alias of `accessibility`, so inclusion language pointed at the accessibility page), and plurals or gerunds never match ("survey instrument" does not match "surveys"). When a link target looks wrong: check the registry first, read the source's own framing before deciding, fix the registry and every page already mis-linked, add the missing plural forms (no alias may map to two concepts), then re-run `python3 tooling/scripts/gen-concept-artifacts.py`. Prefer adding an alias over inventing a near-synonym concept page.
- **US English (house style):** body prose, section headings and Connected-list blurbs use US spelling — behavior, program, modeling, judgment, organization, center, artifact, generalize, analyze, and -ize verbs (organize, prioritize, standardize). Never respell the `## Citation` section, a quoted paper title, or quoted participant text: those reproduce the published record verbatim. Check before build with `python3 tooling/scripts/check-us-english.py` (add `--include-docs` to check AGENTS.md, tooling/*.md and skills/*.md too). The checker deliberately ignores page slugs, wikilink targets and inline code — those are identifiers, not prose — so it stays green while a slug awaits a rename, and a respelling pass must never rewrite a link target. Renaming a slug to a US spelling is a separate pass: update every `[[…]]` target in the same commit, and add a redirect for the old slug (`src/data/articleRedirects.ts` for an article slug, the registry's `redirects:` block for a concept), then confirm the old URL still resolves and the new one builds.
- **AI-use disclosure (HARD GATE):** a page created on or after 2026-09-22 carries `contributors` and an `ai_assist` record (`model`, `role`, `date`) naming the model that produced the text as it now stands; earlier pages carry no record rather than a guess. Set `reviewed_by: [editor]` only when the editor has actually read the page — absence claims nothing, and it is never a default. New models go into `site.config.json` before any page names them. Commit through the normal route, `bash tooling/scripts/commit-if-green.sh <message-file> <paths...>`, which now stamps the `AI-Model`/`AI-Role`/`AI-Agent` trailers (override with `AI_MODEL`, a comma-separated `AI_ROLE`, `AI_REVIEWED_BY`); `tooling/ai-commit.sh` stamps a commit on its own when the gate suite is not being run. Run `python3 tooling/scripts/check-ai-disclosure.py` (plus the advisory `check-ai-disclosure-trailers.py`) before build.
- **List-formatting rule (HARD GATE):** ordered/bulleted lists whose consecutive items are separated by a blank line render broken — each item restarts at `1.` (CommonMark splits them into separate lists). Write every numbered list (e.g. Key Findings) as ONE contiguous block with NO blank lines between consecutive items. Before build, run `python3 skills/research/wiki-inline-links/scripts/check_list_formatting.py <WIKI> --all` and fix every reported page. A green build does NOT catch this.
- **`created`/`updated` carry FULL quoted date+time timestamps** (e.g. `"2026-08-16T20:47:13-04:00"`), never bare dates — the sidebar and RSS sort by these via string compare, and unquoted ISO timestamps shift to UTC (next day). Display is date-only; the time is for sorting.
- **Ingestion enrichment:** when a new article makes a significant contribution to a connected concept (novel framing, distinctive finding, or a missing dimension), integrate it into that concept's **body narrative** (research bullet / subsection / synthesis paragraph), not just its Connected Articles list. **NARRATIVE INTEGRATION, never append-only:** weave the enrichment into the thematically-appropriate EXISTING section as connected prose — NEVER tack it onto the end of the page as a standalone `##`/`###` section floating between the body and `## Connected Concepts`. Remove any orphaned heading you'd otherwise append. Only for a genuinely major contribution (e.g. a systematic review that reorganizes the whole area) is a full body rewrite warranted.
- **Significant body edits:** whenever you make a substantive edit to a concept or article page (not just frontmatter or Connected lists), bump its `updated` timestamp to the current date+time and rebuild so the right sidebar listing refreshes.
- **Source preservation (HARD RULE):** when a source PDF arrives in chat, copy it to `pdf-sources/<article-slug>.pdf` (or `<arXiv-id>.pdf`) BEFORE extracting its text, and never delete the original afterwards. The chat document cache rotates to a handful of recent files, so a PDF left only there is unrecoverable within days, while `raw/papers/<id>.md` is a derived artifact, not the original. `pdf-sources/` is gitignored — verify with `git status --short` that it never appears in a commit. Downloaded PDFs awaiting ingest belong in the same folder, not in a scratch directory.
- **Full-text integrity:** save the complete paper text (cap 250,000 chars, not 50,000) — a body cut off at exactly ~50,000 chars is the old truncation signature and usually means the results, discussion and limitations are missing. Re-fetch from the source (arXiv PDF, or the publisher's open-access HTML/PDF) and rewrite the raw file before enriching that page.
- **Tool generation (screen before writing, not after):** note the model version a study actually used (method section: `GPT-3`, `GPT-4`, "the free version", a dated build) and its data-collection window, and put both in the ingest summary — the mechanical gates cannot catch a well-designed study that describes a tool nobody can open anymore. Then choose one: state the vintage in a `## Limitations` bullet when the study's mechanism finding survives, scope the effect claim to its generation for capability or benchmark comparisons ("in the GPT-3.5-era comparison, X outperformed Y"), or backlog the paper in `AIED-BACKLOG.md` when the capability comparison is its whole contribution. Never put the caveat in `## Citation`, and never edit the paper's title to hint at it: the citation states what the paper is, limits state what it can support.
- Frontmatter carries **no `tags:` field** (retired 2026-09-17; the schema rejects it and a page that re-adds one fails the build). Every concept a page touches is named in a typed facet field whose values are concept slugs from the matching `concepts.registry.yaml` section, and the Metadata table hyperlinks each value to its concept page. The People section backs no field: it keeps its role pages for browsing, and `audience` alone answers who a page is written for. Optional fields (`level`, `audience`, `discipline`, `research_method`, `page_kind`) use closed vocabularies from `tooling/SCHEMA.md` and become PageFind search facets.
- Citation: single APA line with hyperlinked title, NO "Full text" blocks, NO bullet prefix
- Delete stub pages with < 300 chars of real body content
- After ANY page change: `npm run build`, then `git add -A && git commit -m "..."`. **The HARD GATE suite (`python3 tooling/scripts/run-gates.py` / `npm run verify`) is PERMISSION-GATED: propose the run, name the gates you would run and what each would check, and run nothing until the maintainer approves that specific run.** A green build, a risky-looking diff, an earlier approval and a subagent's own judgment are not permission. Once approved the gates are mandatory before a commit. **Never push without explicit per-occurrence approval** — commit locally, then ask.
- **Delegating a section-writing batch to subagents (2026-09-19).** Fanning out "add the missing sections to these N pages" works, but a child's summary is a self-report, not evidence, so the parent verifies every page it was told about: the section is present and spelled exactly `## What this means for practice` / `## Limitations`, the order is practice → limitations → Connected Concepts → Connected Articles → Citation, the bullet count is inside 3-5 and 2-4, and every number in the added bullets appears in that page's `raw/papers/<slug>.md`. Give each child the same brief in its own `context` (it knows nothing of the conversation): the exact placement rule, "every number must appear in the full text — never invent one", "boilerplate limitations are a defect; omit the section and say why instead", "do not touch frontmatter, Connected lists or Citation", "US English", "verify a wikilink target exists before adding it", and "do not run the build, and never run the gate suite — it is permission-gated and the parent must ask for it first". Two failure modes to plan for: a page with no saved full text (raw under ~3,000 chars) cannot get evidence-bound bullets at all, so exclude it and name it in the report rather than letting a child improvise; and children run in parallel on separate files, so no child may write `index.md`, `journal.md`, `log.md` or the registry.
- **Offline EPUB/PDF (build-related):** the site also publishes `public/aied.epub` and `public/aied.pdf` (concept + FAQ pages, with a Notice page and a clickable TOC). These are **local committed artifacts rebuilt ONLY on explicit request** — never automatically after content edits, and never by CI. Regenerate with `python3 tooling/build-epub.py` (requires `pandoc` and, for the PDF, `weasyprint`) and commit the result.

### `llms.txt` / `llms-full.txt`

`python3 tooling/scripts/generate-llms-files.py` writes `public/llms.txt` and
`public/llms-full.txt`. They are **local committed artifacts rebuilt ONLY on explicit
request**, exactly like the EPUB and the PDF: never automatically after a content edit,
never by CI, and never by a subagent.

### Cron jobs

Two scheduled jobs, both driven by the settings in `wiki.config.yaml`:

- **Daily new-paper scan** (weekdays 09:00): reads `scan.sources` (arXiv categories,
  keywords, listing fallbacks) and `scan.relevance_filter`; ingests new papers,
  updates concepts, runs the HARD GATES, builds the site and commits.
- **Weekly journal RSS scan** (Sundays 08:00): reads `journal_scan.feeds`; ingests
  new open-access journal articles and commits.

Neither job pushes: a push requires explicit per-occurrence approval. Offline
EPUB/PDF artifacts are rebuilt only on explicit request, never by a scan.

Both jobs finish by running `python3 tooling/scripts/refresh-preview.py`: the
preview is a long-running server started before the scan, so it never notices the
content the scan wrote and serves stale (or 404) pages until it restarts. The
script restarts it only when the content is newer than what the server has synced,
and it reports failure instead of leaving the preview broken. Host, port and mode
come from `wiki.config.yaml` → `preview:`; per-machine values belong in the
gitignored `wiki.config.local.yaml`.