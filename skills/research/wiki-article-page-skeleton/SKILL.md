---
name: wiki-article-page-skeleton
description: "Use when writing a wiki article page's headings or facets."
version: 1.0.0
author: hermes-agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [wiki, article-pages, frontmatter, facets, gates]
    related_skills: [wiki-batch-ingestion-qa, wiki-article-quality, paper-batch-ingestion, wiki-citation-format]
---

# The skeleton and metadata every wiki article page must carry

Use when creating an article page in the AI-in-education wiki (`<WIKI>`) or reshaping one.
The prose can be perfect and the page still fails a gate on a heading string or a facet value, and
both are decided BEFORE the prose. Siblings cover the writing procedure (`paper-batch-ingestion`),
per-page repair (`wiki-article-quality`), the narrative weave (`wiki-concept-narrative`) and the
citation line (`wiki-citation-format`); this one is the shape the gates enforce.

## Section skeleton, in order

Frontmatter, then the `> **Synthesis:**` blockquote, then these headings with these EXACT strings:

1. `## Key Findings` — 5-7 bold-numbered items.
2. The body sections — 3-4 prose H2s, titles free.
3. `## What this means for practice`
4. `## Limitations`
5. `## Citation` **last**.

- **A topical heading is not a substitute for a fixed one.** `audit-article-sections.py` matches the
  string, so `## What the sequence adds, and what it does not` in place of `## What this means for
  practice` fails as `missing section: What this means for practice` while the section exists and
  reads correctly. Put the framing in the prose under the canonical heading.
- No H1 in the body (the title lives in frontmatter), no wikilinks inside headings, one blank line
  between bullet items and around blockquotes.
- Body budget is 750-1,750 words, frontmatter end to `## Citation`; the breakdown lives in
  `wiki-article-quality`.

## Facets are enums, not descriptors

`research_method`, `audience`, `level`, `discipline`, `category` are closed enums in
`src/content.config.ts` (`enumList(...)`); the concept-facet vocabulary is generated into
`src/data/facetVocab.ts`. Read the arrays before writing frontmatter.

- `research_method` takes the DESIGN's umbrella term: `survey`, `experiment`, `quasi-experiment`,
  `interviews`, `longitudinal study`, `theoretical analysis`, `position paper`, `structural equation
  modeling`. Describing the analysis instead of the design (`correlational analysis`, `mediation
  analysis`) fails `validate-facets.py` with `value ... is not in the research_method enum`. A
  cross-sectional mediation survey is `survey`.
- A concept slug belongs to exactly one facet SECTION (`pedagogy`, `technology`, `methods`,
  `foundations`, `ethics`); check which section owns it rather than filing by intuition, and never
  list one slug in two fields. The per-slug field table is in `wiki-batch-ingestion-qa`.
- **A declared facet whose slug is a concept page is a concept-screen candidate.**
  `research_method: [survey]` makes `quantitative-research` a candidate the screen must record, so a
  finished TOPICAL screen still fails `check-concept-screen.py` on `1 concept candidate(s) with no
  recorded decision`. Screen the methods and level facets too, and dismiss them with a design-level
  reason (the method the page already documents versus what this study adds), not a topical one.

## The check order that catches both, before the commit

```bash
cd <WIKI>
python3 tooling/scripts/validate-facets.py
python3 tooling/scripts/audit-article-sections.py --changed
python3 tooling/scripts/verify-number-grounding.py --changed
python3 tooling/scripts/check-concept-first-mentions.py --changed
python3 tooling/scripts/check-citation-attribution.py --changed
python3 tooling/scripts/check-us-english.py <page> <every concept page you wove into>
python3 tooling/scripts/check-concept-prose.py --changed
python3 tooling/scripts/check-concept-screen.py --changed
```

- **US-English runs on the concept pages too.** A weave is new prose on the concept page, so
  `check-us-english.py <article-page>` never reads it, and the miss survives every per-article check.
- **`check-concept-prose.py` caps an ADDED sentence at 55 words.** A weave carrying three statistics
  lands over the cap: split it into two or three sentences inside the same bullet rather than
  trimming the finding out.
- Every figure on the page must exist verbatim in `raw/papers/<slug>.md`; quote the source's own
  precision (`74.376`, not `74.38`).
