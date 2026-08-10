# Wiki Schema

## Domain
AI in Education — research, products, policies, and pedagogical debates around the use of artificial intelligence (including LLMs, adaptive systems, tutoring agents, and analytics) in learning environments from K-12 to higher education and lifelong learning.

## Conventions
- File names: lowercase, hyphens, no spaces (e.g., `adaptive-learning-systems.md`)
- Every wiki page starts with YAML frontmatter (see below)
- Use `wikilinks` to link between pages (`[[page-slug]]` or `[[page-slug|display text]]`)
- When updating a page, always bump the `updated` date
- Every new page must be added to `index.md` under the correct section
- Every action must be appended to `log.md`
- **Two page types:** `articles/<slug>.md` for individual papers, `concepts/<slug>.md` for broad topics that synthesize multiple papers. An article belongs on a concept page's Connected Articles list; a concept page explains the concept itself, not any single paper.
- **Provenance markers:** On pages that synthesize 3+ sources, append `^[raw/papers/source-file.md]`
  at the end of paragraphs whose claims come from a specific source. This lets a reader trace each
  claim back without re-reading the whole raw file. Optional on single-source pages where the
  `sources:` frontmatter is enough.

## Frontmatter
```yaml
---
title: Page Title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: article | concept
tags: [from taxonomy below]
sources: [raw/papers/source-name.md]
# Optional quality signals:
confidence: high | medium | low        # how well-supported the claims are
contested: true                        # set when the page has unresolved contradictions
contradictions: [other-page-slug]      # pages this one conflicts with
---
```

`confidence` and `contested` are optional but recommended for opinion-heavy or fast-moving topics. Lint surfaces `contested: true` and `confidence: low` pages for review so weak claims don't silently harden into accepted wiki fact.

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

### Concept page body structure
```
> **Synthesis:** definition + overview of the concept

## Key research themes
Theme descriptions with [[wikilinks]] to related articles

## Connected Concepts
- [[concept-slug]]

## Connected Articles
- [[article-slug]]

(No citation section — concepts synthesize multiple sources.)
```

### raw/ Frontmatter

Raw sources ALSO get a small frontmatter block so re-ingests can detect drift:

```yaml
---
source_url: https://example.com/article   # original URL, if applicable
ingested: YYYY-MM-DD
sha256: <hex digest of the raw content below the frontmatter>
---
```

The `sha256:` lets a future re-ingest of the same URL skip processing when content is unchanged, and flag drift when it has changed. Compute over the body only (everything after the closing `---`), not the frontmatter itself.

## Tag Taxonomy

Canonical tag list (reconciled 2026-08-03: 23 near-duplicate tags consolidated; taxonomy now indexes all 122 tags in use).

### Systems & Technology
- `llm`, `generative-ai`, `adaptive-learning`, `intelligent-tutoring`, `edtech-platform`, `learning-analytics`, `automated-grading`, `ai-detection`, `agentic-ai`, `multi-agent`
- `reinforcement-learning`, `multimodal`, `prompt-engineering`, `knowledge-tracing`, `student-modeling`, `nlp-education`, `programming-its`, `architecture`, `interpretability`, `ai-generated-content`, `content-quality`, `dot-framework`, `validate-then-generate`, `verification`

### Pedagogy & Practice
- `personalized-learning`, `formative-assessment`, `feedback-loop`, `scaffolding`, `active-learning`, `blended-learning`, `mastery-learning`, `educational-theory`
- `pedagogy`, `instructional-design`, `curriculum-design`, `assessment`, `authentic-assessment`, `socratic-method`, `project-based-learning`, `collaborative-learning`, `collaborative-ai-tutoring`, `design-thinking`, `training-methodology`, `simulation`, `oral-defense`, `pair-programming`

### Learning & Cognition
- `metacognition`, `self-regulated-learning`, `cognitive-offloading`, `critical-thinking`, `creative-thinking`, `computational-thinking`, `skill-decay`, `confidence`, `student-ai-interaction`

### Stakeholders
- `k-12`, `higher-ed`, `lifelong-learning`, `teacher-role`, `student-experience`, `administrator`, `policy-maker`
- `faculty-development`, `public-sector`, `practitioner-beliefs`, `educator-guide`

### Domain Areas
- `stem-education`, `language-learning`, `writing-education`, `special-education`, `professional-training`
- `ai-education`, `cs-education`, `math-education`, `physics-education`, `health-education`, `mooc`, `multilingual-learning`, `neurodiversity`, `accessible-learning`, `informal-learning`, `independent-learning`, `software-engineering`

### Research & Evaluation
- `rct`, `efficacy-study`, `benchmark`, `learning-gains`, `engagement-metrics`, `dropout-reduction`, `scoping-review`, `systematic-review`
- `ai-ed-evaluation`, `assessment-validity`, `literature-review`, `meta-analysis`, `survey`, `qualitative-research`, `research-methods`, `evidence`, `ground-truth-reliability-aied`

### Ethics & Policy
- `academic-integrity`, `bias-mitigation`, `privacy`, `equity`, `regulation`, `plagiarism-detection`, `hallucination-risk`, `over-reliance`
- `ethics`, `pedagogical-safety`, `misinformation`, `global-south`, `culturally-sustaining-pedagogy`, `institutional-change`

### Affective & Social
- `affective-computing`, `ai-literacy`, `human-in-the-loop`, `boundary-object`, `posthumanist`, `trust-calibration`

### Meta
- `comparison`, `timeline`, `controversy`, `prediction`, `market-analysis`, `open-source`, `stub`

Rule: every tag on a page must appear in this taxonomy. If a new tag is needed, add it here first, then use it. This prevents tag sprawl.

## Page Thresholds
- **Create a page** when an entity/concept appears in 2+ sources OR is central to one source
- **Add to existing page** when a source mentions something already covered
- **DON'T create a page** for passing mentions, minor details, or things outside the domain
- **Split a page** when it exceeds ~200 lines — break into sub-topics with cross-links
- **Archive a page** when its content is fully superseded — move to `_archive/`, remove from index

## Entity Pages
One page per notable entity. Include:
- Overview / what it is
- Key facts and dates
- Relationships to other entities (wikilinks)
- Source references

## Concept Pages
One page per concept or topic. Include:
- Definition / explanation
- Current state of knowledge
- Open questions or debates
- Related concepts (wikilinks)

## Comparison Pages
Side-by-side analyses. Include:
- What is being compared and why
- Dimensions of comparison (table format preferred)
- Verdict or synthesis
- Sources

## Update Policy
When new information conflicts with existing content:
1. Check the dates — newer sources generally supersede older ones
2. If genuinely contradictory, note both positions with dates and sources
3. Mark the contradiction in frontmatter: `contradictions: [page-name]`
4. Flag for user review in the lint report

## Journal (`journal.md`)
- Reverse chronological index of all ingested articles/papers.
- Automatically regenerated: sorted by `created` date in article frontmatter, newest first.
- Shows: confidence icon (●/◐/○), wikilink to article page, source reference, full title, and tags.
- Excludes low-confidence stubs with no sources.
- Regenerate after every ingestion batch to keep current.
