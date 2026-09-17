# Wiki Schema

## Domain
AI in Education — research, products, policies, and pedagogical debates around the use of artificial intelligence (including LLMs, adaptive systems, tutoring agents, and analytics) in learning environments from K-12 to higher education and lifelong learning.

## Conventions
- File names: lowercase, hyphens, no spaces (e.g., `adaptive-learning-systems.md`)
- Every wiki page starts with YAML frontmatter (see below)
- Use `wikilinks` to link between pages (`[[page-slug]]` or `[[page-slug|display text]]`)
- **Inline hyperlink rule (wiki-style, HARD GATE):** hyperlink every concept mentioned by name in the BODY of a concept or article page to that concept's page, in addition to the Connected Concepts/Articles lists. Use piped links when display text differs from the slug (e.g. `[[cognitive-offloading|doing the cognitive work]]`), the most specific slug matching the mention's meaning, and the dedicated umbrella page for generic terms (e.g. `[[feedback]]`, not `[[feedback-loop]]`, for plain "feedback"). **This pass is a BLOCKING PREREQUISITE before `npm run build` / commit / push / deploy on every newly created or enriched page — a green build does NOT substitute for it.** Load the `wiki-inline-links` skill and run the pass + verification (0 self-links, 0 heading links, balanced brackets, 0 broken links) on every new page first.
- When updating a page, always bump the `updated` date+time (see Frontmatter above)
- Every new page must be added to `index.md` under the correct section
- Every action must be appended to `log.md` (local-only, gitignored like `raw/` — not committed; persists on the local repo for scan-complete anchors)
- **Three page types:** `articles/<slug>.md` for individual papers, `concepts/<slug>.md` for broad topics that synthesize multiple papers, and `faqs/<slug>.md` for curated question-and-answer pages. An article belongs on a concept page's Connected Articles list; a concept page explains the concept itself, not any single paper; a FAQ answers a specific question and connects to concepts/articles via `connected_faqs` (below).
- **Provenance markers:** On pages that synthesize 3+ sources, append `^[raw/papers/source-file.md]`
  at the end of paragraphs whose claims come from a specific source. This lets a reader trace each
  claim back without re-reading the whole raw file. Optional on single-source pages where the
  `sources:` frontmatter is enough.

## Frontmatter

Only these fields are validated by the live schema (`src/content.config.ts`). Extra fields in
frontmatter are ignored at build time, so keep to this list.

```yaml
---
title: Page Title
created: "YYYY-MM-DDTHH:MM:SS±HH:MM"
updated: "YYYY-MM-DDTHH:MM:SS±HH:MM"
type: article | concept | faq
research_method: [survey]                # typed fields, all optional, all closed vocabularies
discipline: [cs education]
level: [higher ed]
audience: [instructors]
page_kind: [framework]
foundations: [ai-literacy]               # facet fields: concept slugs from one registry section
pedagogy: [scaffolding]
technology: [llm]
sources: [raw/papers/source-name.md]   # articles only
connected_faqs: [faq-slug-1, faq-slug-2]  # concepts + articles only (optional)
confidence: high | medium | low        # how well-supported the claims are
research_method: [systematic review, survey]  # optional, see below
discipline: [math education, physics education]  # optional
audience: [teacher role, administrator]  # optional
level: [higher ed, k 12]  # optional
category: [theoretical framework]  # optional
---
```

**Concept references are TYPED (2026-09-17, replacing the old `tags` list).** Every concept a page touches is named in one of the typed fields below, never in a free-floating list. Each facet field accepts only the concept slugs filed under its own section of `concepts.registry.yaml`, so a value of the wrong kind — a technology slug in `pedagogy` — is rejected by the build. If a topic isn't yet a concept, create the concept page first or fold it into the nearest existing concept; never invent a slug. Non-concept metadata (how the study was done, who it is for, which level, what kind of page) goes in the phrase-valued fields.

**Structured metadata fields (optional, added 2026-08-29):** `research_method`, `discipline`, `audience`, `level`, and `page_kind` hold non-concept metadata.

`page_kind` was called `category` until 2026-09-17 and held thirteen values, ten of which were topics: assessment, instructional
design, engagement, equity, policy, curriculum design, ai foundations, collaborative learning, design thinking and well-being.
Every one of those has a concept page, and the typed facet fields now carry them, so the topics were retired and the field was
renamed to say what it actually holds: the kind of page this is - `framework`, `synthesis` or `evaluation`. A page that presents a
framework is not a page about frameworks, and that distinction is the reason the field survives at all. These fields drive the search page filter facets and the Metadata table rendered at the foot of every page.

**Typed facet fields (added 2026-09-17):** `foundations`, `pedagogy`, `technology`, `assessment`, `stakeholders`, `ethics`. A flat tag list mixed kinds together — a pedagogy, a technology, an outcome and an ethical theme in one list. Each facet field holds only concepts of one kind, so the search facets can ask "show me pedagogy studies" directly. Every facet mirrors one section of `concepts.registry.yaml`:

- `foundations` ← Foundations of AI in education
- `pedagogy` ← Learning and instruction (pedagogies, learning theories, learner processes)
- `technology` ← AI technologies and techniques
- `assessment` ← Assessment, evaluation, and measurement
- `stakeholders` ← People: learners, teachers, and institutions
- `ethics` ← Equity, ethics, and responsible use

The seventh registry section, *AI in the disciplines*, is served by the hand-curated `discipline` field, which also covers school subjects that have no concept page yet.

**These fields are AUTHORED, then validated.** Until 2026-09-17 they were projected from each page's tag list by `derive-facets.py`; with tags retired the fields are written directly and `tooling/scripts/validate-facets.py` enforces three things — every value is a concept filed under that field's section, no concept appears in two facet fields, and every page carries at least one typed value. It is a gate, so `npm run verify` fails on a violation. The allowed values are generated from the registry into `src/data/facetVocab.ts`, so adding a concept to a section extends the vocabulary on the next build.

**`tags` was RETIRED on 2026-09-17.** Every tag value had a typed home: 83% of the 10,968 tag entries were already concepts in the six facet sections, 15% were covered by `discipline` or `level`, and the remainder were migrated by hand. The field is gone from the schema, the page templates no longer render tag chips, and the JSON-LD keywords now come from the typed fields.

**The Metadata table (2026-09-17)** renders every typed field at the foot of each page, one row per field, with values hyperlinked to their concept page whenever one exists. Facet values are concept slugs and link directly; the phrase-valued fields resolve through `src/data/metadataLinks.ts`, generated from the registry so `cs education` reaches `cs-education` and `systematic review` reaches `meta-analysis-systematic-review`. The table states what a page IS. `## Connected Concepts` remains the curated, relevance-ordered list of what a page relates to beyond that — the two are complementary, and a concept already named in the table does not need repeating in the list.

**These are CLOSED vocabularies, not free-form text.** The authoritative lists live in
`src/content.config.ts`, and the Astro build rejects any page carrying a value outside them, so a
typo fails the build rather than silently creating a one-page facet. The lists are reproduced
below for convenience and checked against the schema by
`python3 tooling/scripts/audit-metadata.py --check-docs`, which fails if this block drifts.

Each field is optional and each value must be chosen from its list. **Omitting a field is the
correct answer when nothing fits**: a study with no disciplinary home should omit `discipline`
rather than be forced into the nearest one, and an opinion piece may have no `level`. Use 1-3
values per field, most specific first.

<!-- BEGIN GENERATED VOCABULARIES (source: src/content.config.ts) -->
```
research_method: action design research | benchmark | bibliometric | case study | delphi | design and evaluation study | design-based research | educational measurement | experiment | instrument development | interviews | learning analytics | literature review | longitudinal | longitudinal study | longitudinal survey | meta-analysis | mixed methods | policy analysis | position paper | process-outcome modeling | qualitative | quantitative | quasi-experiment | randomized controlled trial | research methods | secondary analysis | structural equation modeling | survey | system development | systematic review | thematic analysis | theoretical analysis | user study
discipline: biology education | business education | chemistry education | cs education | design education | engineering education | english education | humanities education | information technology | language learning | learning sciences | math education | medical education | nursing education | physics education | science education | stem education | vocational education | writing education
audience: administrators | assessment designers | assessment professionals | curriculum designers | designers | edtech designers | educators | faculty development | institutions | instructional designers | instructors | learners | learning analytics designers | learning designers | medical educators | policymakers | researchers | software developers | students | teacher educators | teachers
level: adult learning | early childhood | elementary | higher ed | k 12 | secondary | special education | teacher training
page_kind: framework | synthesis | evaluation
foundations: academic-integrity | agency | agentic-ai | ai-education | ai-literacy | cognitive-offloading | computational-thinking | critical-thinking | curriculum-design | design-thinking | educational-development | framing-ai-use-for-students | history-of-aied | human-ai-collaboration | learner-identity | learning-design | limitations-in-aied-research | misconceptions | philosophy-of-ai-in-education | reducing-ai-misuse | sustainability | teacher-role | theory-development-aied
pedagogy: active-learning | activity-theory-aied | behaviorism | cognitive-psychology | collaborative-learning | community-of-inquiry | constructivist | creativity | critical-pedagogy | desirable-difficulties | distributed-cognition | embodied-learning | experiential-learning | game-based-learning | help-seeking | icap-framework | inquiry-based-learning | learning-by-teaching | learning-theories | mastery-learning | metacognition | motivation | online-teaching-and-learning | pedagogical-partnerships | pedagogy | prior-knowledge | problem-based-learning | problem-solving | productive-failure | project-based-learning | refutation-text | scaffolding | self-determination-theory | self-directed-learning | self-efficacy | self-regulated-learning | situated-learning | social-emotional-learning | sociocultural-learning | socratic-method | storytelling-in-education | student-ai-interaction | student-engagement | transfer-of-learning | video-education | well-being
technology: adaptive-learning | affective-computing | affective-tutoring | ai-technologies | cognitive-diagnosis | conversational-ai | educational-nlp | educational-robotics | generative-ai | human-in-the-loop-ai | intelligent-tutoring | knowledge-graph | knowledge-tracing | learning-analytics | llm | machine-learning | multimodal | pedagogical-agent | pedagogical-llm-training | personalized-learning | prompt-engineering | rag | recommender-systems-and-learning-paths | reinforcement-learning | simulating-students | simulation | speech-and-voice-technologies | student-modeling | vibe-coding | virtual-and-augmented-reality | visualization
assessment: ai-detection | ai-ed-evaluation | ai-feedback-quality | assessment | assessment-validity | authentic-assessment | automated-assessment | automated-essay-scoring | automated-question-generation | benchmark | design-based-research | educational-measurement | eportfolio | evaluative-judgement | feedback | feedback-literacy | formative-assessment | group-work | item-response-theory | learning-gains | meta-analysis-systematic-review | mixed-methods-research | network-analysis | peer-assessment | psychometrically-aware-ai | qualitative-research | quantitative-research | rct | remote-proctoring | research-methods-aied | self-report-measures | summative-assessment | usability-research
stakeholders: administrator | ai-anxiety-and-stress | career-development-and-readiness | change-management | edtech-platform | educational-policy-ai | educational-technology-developers | governance | lifelong-learning | open-source | parents-and-families | pedagogical-safety | professional-training | regulation | samr-model | stakeholders | student-experience | teacher-ai-competency | technology-acceptance-model | tpack
ethics: accessibility | ai-misuse-learning-harm | ai-sycophancy | ai-use-disclosure | assistive-technology | bias-mitigation | culturally-relevant-pedagogy | digital-divide | equity-in-ai-education | ethics | explainable-ai | global-south | guardrails | hallucination-risk | inclusive-learning | multilingual-learning | neurodiversity | privacy | trust | trust-calibration | universal-design-for-learning
```
<!-- END GENERATED VOCABULARIES -->

Check the current coverage and any violation without a full build:

```
python3 tooling/scripts/audit-metadata.py             # coverage per collection + violations
python3 tooling/scripts/audit-metadata.py --strict     # non-zero exit on a violation
python3 tooling/scripts/audit-metadata.py --missing research_method
```

`research_method`, `audience` and `level` are expected on article pages unless the article
genuinely gives no basis; `discipline` and `category` are expected only where they clearly apply.
Adding a new value is a deliberate act: add it to `src/content.config.ts` first, then update the
block above, and prefer extending the list over inventing a near-duplicate of an existing value.


`connected_faqs` (concepts and articles only, optional) lists FAQ slugs the page should link to in a
**Connected FAQs** section at the bottom of the page. The section renders only when at least one
listed FAQ exists. FAQs are wiki-linked from concept/article narratives and from other FAQs like any
other page (inline `[[wikilink]]`), and a FAQ's own narrative can link to concepts, articles, and
other FAQs.

**`created` / `updated` MUST store full quoted date+time timestamps** (e.g. `"2026-08-16T20:47:13-04:00"`), never bare dates. Reasons:
- The right sidebar ("Recently Added Articles" / "Recently Updated Concepts") and RSS sort by these fields via **string comparison** — date-only values tie within a day and fall back to alphabetical order. Full timestamps give correct reverse-chronological ordering.
- YAML parses an *unquoted* ISO timestamp into a JS `Date` in UTC, shifting an Eastern-evening value to the next calendar day. **Always quote** the value so the schema preserves the original string.
- `created` should be the wiki ingestion date (with time), NOT the paper's publication date — Recent Articles and the journal sort by it.
- When you make a **significant body edit** to a page (not just frontmatter or Connected Articles/Concepts lists), bump `updated` to the current date+time and rebuild so the sidebar refreshes.

Pages **display** date-only everywhere (article/concept page headers, sidebar) via `.split('T')[0]`; the time is stored internally for sorting only.

`confidence` is optional (defaults to `medium`) but recommended for opinion-heavy or fast-moving
topics. A `confidence: low` page signals weak or partial support so weak claims don't silently
harden into accepted wiki fact. There is **no** `contested` or `contradictions` field — the schema
does not validate them, so do not add them to frontmatter. Record unresolved disagreements in the
page body instead (see Update Policy below).

### Article page body structure
```
> **Synthesis:** 2-4 sentence summary of what the paper does and finds

## Key Findings
- 3-5 distinct bullet points with the most important results

## Connected Concepts
- [[concept-slug]]  (3-6 genuinely related concepts)

## Connected Articles
- [[article-slug]]  (2-4 genuinely related articles)

## Citation
Author, A. (2026). [*Full Title*](https://doi.org/...). Journal.
```
Exactly one `## Citation` per article, as a single APA-style line (hyperlinked full title, first 6
authors + ", et al." for longer lists, source suffix per the wiki's citation rules).

### Concept page body structure
```
> **Synthesis:** definition + overview of the concept

## Key research themes
Theme descriptions with [[wikilinks]] to related articles

## Connected Concepts
- [[concept-slug]]

## Connected Articles
- [[article-slug]]
```
(No citation section — concepts synthesize multiple sources.)

### FAQ page body structure (`faqs/<slug>.md`)
```
---
title: "Question being answered?"
created: "YYYY-MM-DDTHH:MM:SS±HH:MM"
updated: "YYYY-MM-DDTHH:MM:SS±HH:MM"
type: faq
tags: [relevant tags]
---

# Question being answered?

Narrative answer with [[wikilinks]] to concepts, articles, and other FAQs
(mirror the aggressive inline-link convention of articles/concepts).
```
FAQ pages have **no** Connected Concepts/Connected Articles/Citation sections and **no** `sources`
field (they are curated answers, not paper summaries). They are indexed in `llms.txt`/`llms-full.txt`,
appear on the journal page (❓ badge), and are listed in concept/article "Connected FAQs" sections
via `connected_faqs`. Numbered lists inside a FAQ must be written as ONE contiguous block (no blank
lines between items) so they don't render as repeated `1.` (see the list-formatting HARD GATE).

### raw/ Frontmatter

Raw sources ALSO get a small frontmatter block so re-ingests can detect drift:

```yaml
---
source_url: https://example.com/article   # original URL, if applicable
ingested: YYYY-MM-DD                       # or ingested_date
sha256: <hex digest of the raw content below the frontmatter>
---
```

`raw/` is gitignored and never committed. Raw files may also carry an `authors:` list (used as the
source of truth when a page's citation authors need verification). The `sha256:` lets a future
re-ingest of the same URL skip processing when content is unchanged, and flag drift when it has
changed. Compute over the body only (everything after the closing `---`), not the frontmatter
itself.

## Concept taxonomy

The taxonomy lives in `concepts.registry.yaml`, the single source of truth: every concept is filed under one of seven sections and their groups, and that filing decides which facet field accepts it. The old tag taxonomy that used to be reproduced here was retired with the `tags` field — see `tooling/concept-index.md` for the generated human-readable manifest.

## Page Thresholds
- **Create a page** when an entity/concept appears in 2+ sources OR is central to one source
- **Add to existing page** when a source mentions something already covered
- **DON'T create a page** for passing mentions, minor details, or things outside the domain
- **Split a page** when it exceeds ~200 lines — break into sub-topics with cross-links
- **Archive a page** when its content is fully superseded — remove it from `index.md` and the live site

## Concept Pages
One page per concept or topic. Include:
- Definition / explanation
- Current state of knowledge
- Open questions or debates
- Related concepts (wikilinks)

**Ingestion enrichment rule:** when a new article makes a *significant* contribution to a connected concept (a novel framing, distinctive finding, or a dimension the concept page lacks), integrate that insight into the concept page's **body narrative** — a research bullet, subsection, or synthesis paragraph — not merely add it to the Connected Articles list. Evaluate each article's substantive contribution and incorporate it where the concept is missing that dimension. When such a significant edit is made, bump the concept's `updated` timestamp and rebuild so the right sidebar reflects it.

## Update Policy
When new information conflicts with existing content:
1. Check the dates — newer sources generally supersede older ones
2. If genuinely contradictory, note both positions with dates and sources **in the page body**
3. If the contradiction is significant, lower the page's `confidence` to `medium` or `low`
4. Flag for user review in the lint report

## Journal (`journal.md`)
- Reverse chronological index of all ingested articles/papers/concepts/FAQs.
- Automatically regenerated: sorted by `created` date in frontmatter, newest first.
- Shows: type badge (📄 article / 🏷️ concept / ❓ FAQ), wikilink to page, source reference, full title, and tags.
- Excludes low-confidence stubs with no sources.
- Regenerate after every ingestion batch to keep current.
- FAQs appear with a ❓ badge; concepts (that aren't low-confidence stubs) appear with a 🏷️ badge.
