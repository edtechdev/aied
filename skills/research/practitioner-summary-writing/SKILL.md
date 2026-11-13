---
name: practitioner-summary-writing
description: "Use when writing summaries practitioners must act on."
category: research
version: 1.0.0
author: hermes-agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [writing, summaries, editorial, wiki, articles]
    related_skills: [wiki-article-page-skeleton, paper-batch-ingestion, wiki-article-quality]
---

# Summaries a practitioner can act on

Applies whenever a source is turned into a page or briefing someone reads to decide what to do: wiki
article pages, digest entries, answer write-ups. Heading strings and facet enums belong to
`wiki-article-page-skeleton`; this skill covers what makes the prose usable.

## The four failures that pass every gate

Scripts check heading names, section counts and word ceilings. None of them read the page, so these
four defects ship green:

1. **A title that is a headline.** The page title is the source's own title, copied byte-for-byte from
   the PDF title block or the raw archive, and repeated identically in the citation. Never a summary of
   the finding, never a shortened or sentence-cased variant. A descriptive headline reads better and is
   exactly the failure: the page then contradicts its own citation line.
2. **Key Findings as a coefficient dump.** `β = 1.92, d = 0.44, p < .001` three to a line is not a
   finding, it is a table flattened into prose. Each item is one sentence saying what was found and why
   it matters — "Note-taking produced better learning than the chatbot alone" — with no *d*, *β*, *p*,
   *F*, η², confidence interval or stacked percentages. Coefficients belong in the body section that
   discusses that comparison, and in Limitations.
3. **Practice bullets with no addressee.** Every bullet opens with a bold audience label:
   `**Instructors:**`, `**Instructional designers:**`, `**Curriculum designers:**`,
   `**Assessment designers:**`, `**Administrators:**`, `**Researchers:**`. Instructors first when the
   paper speaks to teaching. An unlabeled bullet makes the reader work out whether it is for them.
4. **Length as padding.** Target 750-1,000 words of body; 1,400+ reads as padding even when every
   section is on-topic. Supporting detail belongs on the concept pages the article feeds, not in the
   article.

## Order that produces this shape

1. Read the source's own title, then paste it into `title:` and the citation before writing anything.
2. Draft Key Findings first, from the abstract and results, in plain language. If a finding cannot be
   stated without a statistic, it is not yet understood well enough to summarise.
3. Write 3-4 body sections: what was tested, how, what the numbers showed, what they do not show. This
   is where coefficients, sample sizes and effect sizes go.
4. Write practice bullets by asking "who acts on this?" per finding, one audience label each.
5. Limitations: 3-4 evidence-bound items, no boilerplate about "more research is needed".
6. Read the rendered page headings in order before the build, then re-read the Key Findings aloud as a
   practitioner would: if they do not scan, rewrite them.

## Pitfalls

- **A verbatim title can carry a spelling the house style rejects.** Keep the title as printed (house
  style applies to body prose, and the US-English checker skips frontmatter); do not silently respell the
  source's title or the citation stops matching the paper.
- **Reports are not studies.** A policy report or multi-stakeholder review has no new data: say so in one
  italic line under the synthesis, describe its method as documents plus consultations, and present its
  recommendations in practice bullets as proposals, not findings.
- **A practitioner summary answers "what would I do differently on Monday?"** If no bullet answers that,
  the page is a literature note, not a summary.
