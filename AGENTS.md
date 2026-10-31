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

### A slug must identify exactly one page per locale

A slug is both the published URL segment and the target every `[[wikilink]]` resolves
against, so two pages sharing one is never cosmetic. `src/lib/markdown.ts` resolves by
collection priority (**articles > faqs > resources > concepts**); with a collision the
lower-priority page becomes unreachable by link, silently, with no build error, and its
title is also shadowed in the `titles` lookup that renders bare `[[slug]]` labels. The
same slug in different locales is fine — `en/deeptutor.md` and `zh/deeptutor.md` are one
page in two languages.

The convention that keeps this from happening: **articles are named for the paper**
(`<first-author>-<topic>-<year>`, e.g. `zhao-deeptutor-agentic-personalized-tutoring-2026`)
and **resources are named for the product** (`deeptutor`, `snorkl`, `mglearn`). A paper
about a tool and the tool itself are therefore two differently-named pages by
construction, not by luck.

`tooling/scripts/check-slug-uniqueness.py` enforces this as a hard gate. It exists because
`deeptutor` was once both an article and a resource: ten inbound links meant the framework
and four meant the paper, all rendering without error.

### Article page structure (`content/en/articles/{slug}.md`)

Every article page follows this fixed section order — Synthesis → Key Findings → 3-4 body sections → What this means for practice → Limitations → Citation (last, per the standing rule). **An article page carries NO Connected sections (rule change 2026-09-27):** Connected Concepts, Connected Articles, Connected FAQs and Connected Resources were removed from every article page, because the curated, evidence-bearing lists are where readers navigate from them — the concept, resource and FAQ pages, which keep theirs. An article's own derived view is its facet metadata table, and its concept links live inline in the body:

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
- 2-6 bullets, each carrying a concrete fact from the paper: sample and recruitment, one site, incentives, self-report measures, researcher role conflict, no follow-up.

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
- **Body budget: 750-1,750 words** (frontmatter end → `## Citation`; on an older page that still carries Connected sections, the first `## Connected` heading, so both shapes measure the same region). The numbers are configuration, not prose: they live in `wiki.config.yaml` under `article:` (`min_words` / `max_words`), which `tooling/scripts/audit-article-sections.py` reads at runtime, so raise the ceiling there and keep this line and the scan prompts in step. Read the ceiling from the config rather than quoting this figure, which has been raised three times (1000 → 1100 on 2026-09-27, → 1,500 on 2026-09-30, → 1,750 on 2026-10-04). A page within a few percent of the ceiling is reported, not trimmed. The two sections are paid for out of the existing body, never bolted on top. Measure before committing, and never drop a distinct `[[wikilink]]` target to make the cut. When a page predates the budget and runs 2-3x over (many ingested 2026-09-13..18 do), add the missing sections and **report the page as over budget** rather than silently rewriting it — trimming a 2,000-word page back to the budget is its own pass with its own review, and doing it as a side effect of a section addition is how content gets lost.
- Nothing comes after `## Citation` (the standing citation rule keeps it last): the page template appends the metadata table and the source buttons. It no longer appends Connected FAQs, because article pages stopped carrying `connected_faqs` on 2026-09-27.

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

### Translations (`content/<code>/…`)

- **Locales come in tiers, and a new page goes only to the full-corpus tier.** Sixteen locales carry the whole concept collection (ar, de, es, fr, he, hi, it, ja, ko, pt, ru, sw, tr, uk, zh, plus en); the seventeen starter locales (bg, bn, cs, da, el, fi, hr, hu, id, nl, no, pl, ro, sk, sv, ur, vi) deliberately hold a dozen core pages and nothing else. Count the collection per locale before writing rather than inferring the tier from a sibling collection or from the existence of a directory, and say which locales and tier you excluded: keeping a curated subset curated matters more than uniformity.
- **A translation mirrors its English source block for block.** Same headings in the same order and at the same depth, same paragraphs, same bullet counts, same Connected entry counts. Structure is not stylistic: the per-section paragraph vector is what proves a section was translated rather than pasted from a neighbouring page, because a pasted section keeps every heading and every link and so passes every other check.
- **Copy the house strings, never retranslate them.** The italic notice line at the top of the body and the `translation_note` frontmatter string are fixed per locale; take both verbatim from another translated page of the same locale. Inventing a variant creates another translation of one sentence. Take the two Connected headings from `src/i18n/sectionHeadings.ts` (`CONNECTED_HEADINGS[locale]`) rather than from a neighbour, since the renderer matches those exact strings; `check-translated-headings.py` is the gate.
- **Frontmatter is a translated copy of the English page's, plus the provenance fields.** Facet values (`technology`, `pedagogy`, `audience`, `level`, …) stay in English: they are machine identifiers, so translating one silently reclassifies the page. Translate `title`, add `translation_of: <collection>/<slug>`, set `source_updated` to the **English** page's `updated` (never to the translation's own clock, or the page reports itself current while its source moved on), keep `contributors` as English carries them, and add an `ai_assist` record with `role: translation`. A translation carries **no `reviewed_by`**: that stamp means a human read the page, and copying the English frontmatter wholesale plants an editorial claim no native reader made.
- **A translation matches the punctuation its own locale already uses, and does not restyle it.** Spanish concept pages overwhelmingly use «» and em dashes in prose even though the English source uses ASCII quotes and dashes, so a translator follows the page and the locale rather than the source's typography. Reshaping correct existing punctuation is a separate editorial decision, not a translation defect, and no structural check looks at it. The Connected Articles separator is the exception: it is an em dash in every locale because the list parser looks for one.
- **Wikilink targets are byte-identical across locales; only the display text after the pipe is translated.** The Connected Concepts list uses bare slugs and is not translated at all, and the Connected Articles separator is an em dash in every locale (the list parser looks for it). A target altered in one locale out of fifteen is invisible on the site and breaks the link only there.
- **Numbers, names, licenses and identifiers are copied, never recomputed.** Statistics keep their digits and their notation (`F(1, 84) = 47.30`, `p < 0.001`, `η2`). Plain decimal quantities may follow the locale's convention (`174,73` in Spanish, Portuguese, French, Italian), but never touch digits inside a statistical expression, model name, license string or DOI. Person and paper names stay in Latin script with only the connectives translated.
- **Acronyms are expanded where they are first used.** The OER acronym is established in most corpora (OER after a first "open educational resources (OER)"; es/pt use REA, French has no settled form and this corpus writes REO for *ressources éducatives ouvertes* where the standard term is REL). A translation that opens a question with a bare unexplained acronym fails the reader at the first line.
- **Terminology is harvested from the locale's own corpus, not translated from the English term.** Grep `content/<locale>/` for how the field already says it. A genuinely new term (open pedagogy had no precedent in several corpora, and `openwashing` has no settled equivalent anywhere) is a judgment call to record in the commit, not to invent silently.
- **Verify with the translation scripts, not by reading.** After writing or changing translated pages: `check-translated-headings.py` and `validate-facets.py` totals must rise by exactly the number of pages added, `check-translation-staleness.py` must show the new pages current (its backlog of older pages is pre-existing and not yours here), and `check-translation-parity.py` compares each twin with its English source. Run it as `--page <slug>` after a wave and as `--changed` from the gate suite; `--all` is a diagnostic over every translated page, not a gate, because it reports the pre-existing backlog.
- **`run-gates.py --changed` and translations.** The runner reports translated files touched since HEAD under its `translated` scope and runs gate 25 on them; every other gate sees English pages only, by design, so a translation wave that touches nothing English still needs the three scripts above run by hand. Stage new locale files before invoking any `--changed` runner: untracked files are invisible to it, and the runner says "nothing changed" rather than "not staged".
- **A markup fix in the English page after the drafts exist leaves every twin stale.** When the English change is markup (a same-text pipe removed, a spelling fixed) and not meaning, copy the new `updated` stamp into `source_updated` on each twin in the same pass instead of re-translating prose.

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
- **Skills shipped with the repo** live in `skills/research/<name>/` and `tooling/SKILL.md`,
  and are the authoritative redacted copies of what the agent runs. The agent's
  installed copies can be deleted by an agent-side curator without any build noticing,
  and the symptom is a skill that the index lists and `skill_view` cannot open. Run
  `python3 tooling/scripts/ensure-skills-mirror.py` to detect that (missing mirrors are
  restored from the repo; content drift is reported and left alone, because a sync
  normalizes paths and agent names and would silently rewrite real tool names). The
  research category has its own root (`agent.skills_research_dir` in `wiki.config.yaml`)
  so a purged category fails loudly instead of reading as "every skill is new".

### Rules
- NO duplicate H1 headings in body (template adds the title)
- NO duplicate sections (on a concept, resource or FAQ page: one Connected Concepts, one Connected Articles; an article page carries none)
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
- **Tool generation (screen before writing, not after):** note the model version a study actually used (method section: `GPT-3`, `GPT-4`, "the free version", a dated build) and its data-collection window, and put both in the ingest summary — the mechanical gates cannot catch a well-designed study that describes a tool nobody can open anymore. Then choose one: state the vintage in a `## Limitations` bullet when the study's mechanism finding survives, scope the effect claim to its generation for capability or benchmark comparisons ("in the GPT-3.5-era comparison, X outperformed Y"), or record the paper in `AIED-REJECTED.md` when the capability comparison is its whole contribution — that file is private and gitignored, because a rejection must never be published. Never put the caveat in `## Citation`, and never edit the paper's title to hint at it: the citation states what the paper is, limits state what it can support.
- Frontmatter carries **no `tags:` field** (retired 2026-09-17; the schema rejects it and a page that re-adds one fails the build). Every concept a page touches is named in a typed facet field whose values are concept slugs from the matching `concepts.registry.yaml` section, and the Metadata table hyperlinks each value to its concept page. The People section backs no field: it keeps its role pages for browsing, and `audience` alone answers who a page is written for. Optional fields (`level`, `audience`, `discipline`, `research_method`, `page_kind`) use closed vocabularies from `tooling/SCHEMA.md` and become PageFind search facets.
- Citation: single APA line with hyperlinked title, NO "Full text" blocks, NO bullet prefix
- Delete stub pages with < 300 chars of real body content
- After ANY page change: `npm run build`, then `git add -A && git commit -m "..."`. **The HARD GATE suite (`python3 tooling/scripts/run-gates.py` / `npm run verify`) is PERMISSION-GATED: propose the run, name the gates you would run and what each would check, and run nothing until the maintainer approves that specific run.** A green build, a risky-looking diff, an earlier approval and a subagent's own judgment are not permission. Once approved the gates are mandatory before a commit. **Never push without explicit per-occurrence approval** — commit locally, then ask.
- **Delegating a section-writing batch to subagents (2026-09-19).** Fanning out "add the missing sections to these N pages" works, but a child's summary is a self-report, not evidence, so the parent verifies every page it was told about: the section is present and spelled exactly `## What this means for practice` / `## Limitations`, the order is practice → limitations → Connected Concepts → Connected Articles → Citation, the bullet count is inside 3-5 and 2-6, and every number in the added bullets appears in that page's `raw/papers/<slug>.md`. Give each child the same brief in its own `context` (it knows nothing of the conversation): the exact placement rule, "every number must appear in the full text — never invent one", "boilerplate limitations are a defect; omit the section and say why instead", "do not touch frontmatter, Connected lists or Citation", "US English", "verify a wikilink target exists before adding it", and "do not run the build, and never run the gate suite — it is permission-gated and the parent must ask for it first". Two failure modes to plan for: a page with no saved full text (raw under ~3,000 chars) cannot get evidence-bound bullets at all, so exclude it and name it in the report rather than letting a child improvise; and children run in parallel on separate files, so no child may write `index.md`, `journal.md`, `log.md` or the registry.
- **`index.md` and `journal.md` were RETIRED (2026-09-27).** The dated journal is the site's `/journal` page, rendered from the content collections, and the counts live in the site header, so neither file is maintained any more: there is nothing to add a page to, no total to bump, and no gate to satisfy. Do not recreate them.
- **Concept-screen record (HARD GATE, 2026-09-28).** Ingesting an article is not finished when its page is written. Every new article must be screened against the concept pages it speaks to, and where a finding is BOTH significant and distinguishing it is woven into that concept's narrative and the page's `updated` is bumped — see the `wiki-concept-narrative` skill for the delete test and the prior-coverage check. **Record the outcome in `concept-screen.yaml` at the repo root: one entry per article, with `integrated:` naming the concept pages that now carry a finding, or an empty `integrated:` and a `reason:` saying why nothing qualified.** Most entries have an empty `integrated:`, which is the expected result rather than a failure. `python3 tooling/scripts/check-concept-screen.py` (declared in `build.gates`, run by `run-gates.py`) fails for any article page created on or after `concept_screen.since` in `wiki.config.yaml` with no entry, for an entry with neither an integration nor a reason, and for an entry claiming an integration the named concept page does not actually contain — so the record cannot be satisfied by asserting work nobody did. It deliberately does NOT require an article to appear in some concept narrative: absence from every narrative is the correct outcome for much of the corpus (274 of 1,493 pages), so it would force exactly the over-insertion the distinguishing test exists to prevent. A green build does not check any of this. The step was skipped for a whole day's batch before the gate existed, and a stated rule that was silently violated needs a check rather than a stronger sentence.
- **Offline EPUB/PDF (build-related):** the site also publishes `public/aied.epub` and `public/aied.pdf` (concept + FAQ pages, with a Notice page and a clickable TOC). These are **local committed artifacts rebuilt ONLY on explicit request** — never automatically after content edits, and never by CI. Regenerate with **`PATH="$HOME/.local/bin:/usr/bin:$PATH" /usr/bin/python3 tooling/build-epub.py`** — the interpreter matters, see below — and commit the result. The script fails loudly (exit 1) if `pandoc` or the metadata step cannot run; **never trust the exit code alone, verify both artifacts** (the PDF's `/Lang` by reading the catalog back with pikepdf, not with pdfinfo, which does not print it).
  - **A rebuild takes minutes, not half an hour.** The cost was never weasyprint's layout (~89 s for a ~2,000-page book) but pandoc's parse of the whole export: 757 s for one parse, run twice per build, and superlinear in document size. `tooling/pdf_parallel.py` splits the export at chapter boundaries, parses the chunks with parallel pandoc workers and reassembles one HTML document (front matter, title block, single TOC, body) for a single pagination pass, which took the English build from 24.9 min to 3.9 min. `AIED_PARALLEL_CHUNKS=1` restores the single-pass path. Heading ids and `[Heading text]` shortcut references are pinned before the split, because pandoc's auto ids are unique per parse and `implicit_header_references` cannot resolve across chunks — both were silent defects on the first attempt.
  - **Why the interpreter is pinned:** the build's two halves run under *different* interpreters. The PDF is generated by `pandoc`, which spawns the `weasyprint` console script, so it runs under **that script's shebang interpreter** no matter what you invoked. The metadata step does `import pikepdf` **in-process**, so it runs under **whatever you invoked**. Invoking with a Python that lacks pikepdf therefore still produces a PDF — it just silently omits `/Lang`. This is exactly what happened: an English PDF shipped with no language metadata, because the script ran under an interpreter without pikepdf and the step was only a warning. `/usr/bin/python3` has both `pikepdf` and `weasyprint`; `~/.local/bin` is first in PATH so `pandoc` is found.
  - **Not served by the site — linked from the repository.** The editions are committed under `public/` but the site does NOT serve them: it links `offlineBaseUrl` in `site.config.json` (the GitHub raw URL for the default branch) and `astro.config.mjs` strips them from the build output (`stripOfflineEditions`). Reason: a PDF and an EPUB are both already compressed, so GitHub packs them into the Pages artifact at full weight — ~161 MB was enough to push the artifact past its 1 GB limit and towards its 10-minute deploy timeout. `src/lib/offlineArtifacts.ts` repoints the per-locale links after the locale swap, so one change covers every locale. The **llms files stay on the site**: plain text, compress well, and fetched programmatically by agents. Do NOT re-add the editions to `dist/`, and do not "simplify" by dropping `stripOfflineEditions`.
- **Deploy artifact must stay under 1 GB (HARD RULE, 2026-10-22).** GitHub packs the Pages upload with gzip and warns above 1 GB (1,073,741,824); `actions/deploy-pages` also aborts at a 10-minute timeout, which a large artifact reaches before it fails outright. Two things used to blow the budget, and both are now kept out of `dist/`:
  - the offline editions (`.epub`/`.pdf`) — stripped by `stripOfflineEditions()` in `astro.config.mjs`, linked from the repository instead (see the Offline EPUB/PDF bullet above);
  - the starred-pages slug→title map, which was inlined into EVERY page as a `data-titles` attribute. 2,035 entries ≈ 315 KB ≈ **64% of every page**, ~2 GB duplicated across 6,618 pages — the single largest cost in the artifact. It is now one JSON file per locale at `/aied/titles/<locale>.json` (route `src/pages/titles/[locale].json.ts`, builder `src/lib/pageTitles.ts`), fetched by the starred script; only the four `DEFAULT_STARRED` titles stay inline so the default list is labeled on first paint. **Together these took the artifact from 1.06 GiB to 0.33 GiB.**
  `astro-build.yml` now fails if `dist/` contains any `.epub`/`.pdf`, and reports the gzip size of `dist/`, failing over 1 GB. **Do NOT inline the titles map again, and do not drop that guard.**

### `llms.txt` / `llms-concepts.txt` / `llms-full.txt`

`python3 tooling/scripts/generate-llms-files.py` writes `public/llms.txt`,
`public/llms*-concepts.txt` and `public/llms-full.txt`. They are **local committed
artifacts rebuilt ONLY on explicit request**, exactly like the EPUB and the PDF:
never automatically after a content edit, never by CI, and never by a subagent.

**`llms*-concepts.txt` carries concept pages only — no FAQs and no resources** (2026-10-26):
they are what pushed the file past the size an ingester will accept. It also drops each
page's two navigation-only sections, the question prompts and the Connected lists,
detected by shape rather than by heading text because every locale translates them.

**It is capped at 500,000 words** (`CONCEPTS_WORD_BUDGET`). English clears that at ~487k,
but translated prose runs ~1.2x, so Spanish, French, Portuguese, Hindi and Italian exceed it
once the navigation is gone — and by then every remaining section is substance. Those
locales are therefore **truncated at a page boundary in taxonomy order** (foundational
concepts first) and end with a localized note naming how many of how many pages are
included; dropping whole pages is honest, cutting a sentence mid-clause is not. Read the
generator's `truncated to N/M pages` line rather than assuming every file is complete, and
expect more locales to truncate as the corpus grows.

The translated header uses only the **machine-translation disclosure sentence** of each
locale's `offlineDescription`, because that field is shared with the EPUB/PDF editions (which
DO include the FAQ pages) and its second sentence would be false here. The truncation note
is `llmsTruncated` in `src/i18n/locales.json`, with `{included}`/`{total}` placeholders.

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