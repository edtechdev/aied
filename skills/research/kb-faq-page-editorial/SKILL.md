---
name: kb-faq-page-editorial
description: "Use when writing or revising a list-style FAQ answer page."
version: 1.0.0
author: hermes-agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [wiki, faq, editorial, studies, knowledge-base]
    related_skills: [wiki-page-kind-curation, practitioner-summary-writing, wiki-inline-links]
---

# Editing a list-style FAQ page in the knowledge base

Use when a FAQ answer takes the shape "what are the top N findings/studies/tools", or when an editor
asks to rewrite one. These pages are reference answers for practitioners, not articles, blog posts or
landing pages, and the house voice is deliberately plain.

## When to Use

- Rewriting, shortening or reordering a "top 10" or "best N" FAQ.
- A reader says the page buries the list, reads like marketing, or lacks links to sources.

## The page is a list, not an argument

- **Two sentences of orientation, then the list.** Say what the entries bear on (what to assign, how to
  assess, what to buy) and what each entry gives. Do not explain how the list was assembled, why these
  were chosen over others, or that recency was not a criterion. Selection meta reads as a blog post and
  costs the reader the first screenful.
- **No marketing register.** No "this list applies a harder test", no "what most people get wrong", no
  promises about what the page will transform. A knowledge base states and stops.
- **One bold numbered entry per item, leading with the claim, not the citation:**
  `**1. Plain chatbot access cut exam scores by 17% ([[author-study-slug|Bastani et al., 2025]]).**`
  Then the design and sample, the figures, and the decision it changes. Name the audience only where it
  differs from the general reader ("For faculty developers, ...", "Administrators can ...").
- **Order by consequence for practice:** classroom decisions first, then systems, procurement and
  measurement. A reader who stops after three entries should have the three that change most.

## Every entry carries its links

- **The study itself is a link, on the citation**, `([[slug|Author et al., 2025]])` — not a bare author
  name, not a link only in a reference list at the bottom.
- **Each entry ends with a related link line**, the same convention newsletters use:
  `See related: [[concept-or-faq-slug|Short label]]`. Localized pages translate the label words and keep
  the target. One related link per entry, pointing at the concept page or FAQ that carries the topic
  forward; ten entries, ten related lines.
- **Link concepts inline on first mention** where the phrase carries weight (closed-book exam, free
  recall, proctoring, fabricated references). One link per target per page.
- **The limitations section links the evidence-base concept** (`limitations-in-aied-research`), because
  that is where a reader goes next when the caveats matter.

## Titles and URLs

- **Keep the page's established title wording** and change one word at a time when the audience shifts
  (`instructors` -> `educators` broadens it past teaching staff; do not rerun the title from scratch).
- **Never change the slug to match a retitle.** `src/stores/stars.ts` keys default-starred pages on
  `faq/<slug>` and `src/data/faqIndex.ts` lists the slug, so a rename silently breaks the star even
  though the build is green. The visible title lives in frontmatter; the URL stays.

## Verify before shipping

```bash
cd <WIKI>
python3 - <<'PY'
import re
s=open('content/en/faqs/<slug>.md').read()
print('entries', len(re.findall(r'^\*\*\d+\.', s, re.M)))
print('related', len(re.findall(r'^\S[^\[]*\[\[[^\]]+\]\]\s*$', s, re.M)))
print('links', len(re.findall(r'\[\[', s)))
PY
python3 tooling/scripts/validate-facets.py
python3 tooling/scripts/check_list_formatting.py . --all
```

Then read the rendered page: the entry count, the related lines and the first two paragraphs are what
an editor checks first.

## Pitfalls

- **A list of findings is not a list of studies.** Decide which one the title promises and make the
  entries match it; mixing a findings claim with a study profile in one entry reads as neither.
- **Do not restate the same decision in every entry.** If four entries end "For instructors, ...", the
  audience clause has become boilerplate; keep it only where it adds information.
- **Related links are not decoration.** A ten-entry page with two related links fails the convention
  more visibly than one with none, because the pattern is established in the first entry.
