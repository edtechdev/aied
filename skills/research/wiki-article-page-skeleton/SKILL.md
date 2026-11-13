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

## The three failures the structure gate cannot see

`audit-article-sections.py` checks that the headings exist and are in order. It does not read the
title, it does not care how long the page is, and it accepts a Key Findings list made of
coefficients. Each of those shipped and had to be rewritten:

- **The title is the source's title, verbatim.** Not a headline you wrote after reading the paper, not
  a shortened version, not one with the subtitle dropped. Copy it from the PDF's first page or the raw
  record's `title:` field, keep its capitalization and any subtitle, and repeat the same string in the
  `## Citation` line. A page titled "Note-taking beat an LLM on reading comprehension" when the paper
  is "Effects of LLM use and note-taking on reading comprehension and memory" breaks the one link
  between the page and the thing it summarizes.
- **`## Key Findings` is the first H2 after the synthesis blockquote.** Always. Body sections go
  after it. A findings list buried at the bottom, above the citation, is invisible to a reader
  scanning for the answer.
- **Findings are claims, not statistics.** "Note-taking produced better learning than the chatbot
  alone" is a finding. "β = 1.92, d = 0.44, p < .001" is a table that lost its table. Keep
  coefficients in the body section that reports the model, and write each finding so a practitioner
  can act on it without decoding a symbol.
- **Practice bullets open with the audience.** `- **Instructors:** ...`, `- **Instructional
  designers:** ...`, `- **Administrators:** ...`. A bullet that starts with a verb and no actor could
  have been written for anyone, which is how a practice section becomes advice nobody owns.
- **Budget 750-1,000 words, not 1,750.** The soft cap in the gate is what an outlier may reach, not
  the target. A page over about 1,100 words is usually two pages or a page with a restated method
  section; cut before adding.

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
