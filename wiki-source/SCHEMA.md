# Wiki Schema

## Domain
AI in Education — research, products, policies, and pedagogical debates around the use of artificial intelligence (including LLMs, adaptive systems, tutoring agents, and analytics) in learning environments from K-12 to higher education and lifelong learning.

## Conventions
- File names: lowercase, hyphens, no spaces (e.g., `adaptive-learning-systems.md`)
- Every wiki page starts with YAML frontmatter (see below)
- Use `wikilinks` to link between pages (minimum 2 outbound links per page)
- When updating a page, always bump the `updated` date
- Every new page must be added to `index.md` under the correct section
- Every action must be appended to `log.md`
- **Provenance markers:** On pages that synthesize 3+ sources, append `^[raw/articles/source-file.md]`
  at the end of paragraphs whose claims come from a specific source. This lets a reader trace each
  claim back without re-reading the whole raw file. Optional on single-source pages where the
  `sources:` frontmatter is enough.

## Frontmatter
```yaml
---
title: Page Title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary
tags: [from taxonomy below]
sources: [raw/articles/source-name.md]
# Optional quality signals:
confidence: high | medium | low        # how well-supported the claims are
contested: true                        # set when the page has unresolved contradictions
contradictions: [other-page-slug]      # pages this one conflicts with
---
```

`confidence` and `contested` are optional but recommended for opinion-heavy or fast-moving topics. Lint surfaces `contested: true` and `confidence: low` pages for review so weak claims don't silently harden into accepted wiki fact.

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

### Systems & Technology
- `llm`, `generative-ai`, `adaptive-learning`, `intelligent-tutoring`, `edtech-platform`, `learning-analytics`, `automated-grading`, `ai-detection`

### Pedagogy & Practice
- `personalized-learning`, `formative-assessment`, `feedback-loop`, `scaffolding`, `active-learning`, `blended-learning`, `mastery-learning`

### Stakeholders
- `k-12`, `higher-ed`, `lifelong-learning`, `teacher-role`, `student-experience`, `administrator`, `policy-maker`

### Domain Areas
- `stem-education`, `language-learning`, `writing-education`, `special-education`, `professional-training`

### Research & Evaluation
- `RCT`, `efficacy-study`, `benchmark`, `learning-gains`, `engagement-metrics`, `dropout-reduction`

### Ethics & Policy
- `academic-integrity`, `bias-mitigation`, `privacy`, `equity`, `regulation`, `plagiarism-detection`, `hallucination-risk`, `over-reliance`

### Affective & Social
- `affective-computing`, `ai-literacy`, `faculty-development`

### Meta
- `comparison`, `timeline`, `controversy`, `prediction`, `market-analysis`, `open-source`

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
- Automatically regenerated: sorted by `created` date in concept frontmatter, newest first.
- Shows: confidence icon (●/◐/○), wikilink to concept page, source reference, full title, and tags.
- Excludes low-confidence stubs with no sources.
- Regenerate after every ingestion batch to keep current.
