# AGENTS.md

## Wiki: AI in Education Wiki

Static site built with Astro, deployed to GitHub Pages from `main` branch at https://edtechdev.github.io/aied/

### Page types

Three content collections: **articles**, **concepts**, and **faqs**, each in their own directory with strict structure.

### Article page structure (`articles/{slug}.md`)

Every article page MUST have exactly 6 sections:

```yaml
---
title: Paper Title  # quote if contains colons: "Title: Subtitle"
created: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp (date+time)
updated: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp; bump on significant edits
type: article
tags: [tag1, tag2, ...]  # 6-10 EXISTING concept slugs (see tooling/SCHEMA.md)
sources: ['raw/papers/{arxiv_id}.md']
confidence: high
research_method: [systematic review, survey]  # optional, natural-language
discipline: [math education, physics education]  # optional
audience: [instructors, learners, researchers, administrators]  # optional
level: [early childhood, k 12, higher ed, adult learning]  # optional
category: [assessment, framework]  # optional
---

> **Synthesis:** One-paragraph summary (3-5 sentences) with embedded [[wikilinks]].

## Section headings with analysis

Rich body content, tables, bullet points, embedded [[wikilinks]] to concepts and articles.

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

### Concept page structure (`concepts/{slug}.md`)

Every concept page has synthesis → Questions to Consider → Introduction → body → Connected sections:

```yaml
---
title: Concept Name
created: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp (date+time)
updated: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp; bump on significant edits
type: concept
tags: [tag1, tag2, ...]  # 6-10 EXISTING concept slugs
confidence: medium  # or high for well-developed concepts
---

> **Brief synthesis paragraph** with [[wikilinks]] to related pages.

## Questions to Consider

Open, reflective pre-reading questions (2-7; target 3-6) that surface/challenge
misconceptions, activate prior knowledge, and connect the concept to the reader's
own context. One contiguous bulleted list (no blank lines between items).

## Introduction

Narrative intro labelling the start of the body.

Rich body content with embedded wikilinks to related articles/concepts.

## Connected Concepts
- [[concept-slug-1]]
(max 15)

## Connected Articles
- [[article-slug-1]] — Article Title
(max 25)
```

### FAQ page structure (`faqs/{slug}.md`)

Every FAQ page is a curated question-and-answer:

```yaml
---
title: "Question being answered?"
created: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp
updated: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp; bump on significant edits
type: faq
tags: [tag1, tag2, ...]  # EXISTING tags
---

# Question being answered?

Narrative answer with embedded [[wikilinks]] to concepts, articles, and other FAQs.
```

FAQ pages have **no** `sources`, **no** Connected Concepts/Connected Articles/Citation sections — they
are curated answers, not paper summaries. Their narrative follows the same inline-link convention as
articles/concepts (link every concept mention). To surface a FAQ on a concept/article page, add the
FAQ slug to that page's `connected_faqs` frontmatter (renders a **Connected FAQs** section).

### Rules
- NO duplicate H1 headings in body (template adds the title)
- NO duplicate sections (one Connected Concepts, one Connected Articles)
- FAQ narratives follow the same inline-link convention as articles/concepts (link every concept mention, including links to other FAQs); `connected_faqs` on concept/article pages drives the Connected FAQs section
- **Inline hyperlink rule (wiki-style, HARD GATE):** whenever a concept is mentioned by name in the BODY of a concept or article page, hyperlink that mention to the concept's page (e.g. `[[constructivist]]` in a sentence, or piped `[[cognitive-offloading|doing the cognitive work]]` when display text differs from the slug). Do this for every concept mention in body prose — exactly as wikis do — in addition to the Connected Concepts/Articles lists at the bottom. Use the most specific concept slug that matches the mention's meaning (not a looser one), and prefer the dedicated umbrella page when one exists (e.g. link plain "feedback" to `[[feedback]]`, not `[[feedback-loop]]`). **This pass is a BLOCKING PREREQUISITE before `npm run build` / commit / push / deploy on every newly created or enriched page — a green build does NOT substitute for it.** Load the `wiki-inline-links` skill and run the pass + verification (0 self-links, 0 heading links, balanced brackets, 0 broken links) on every new page first.
- **List-formatting rule (HARD GATE):** ordered/bulleted lists whose consecutive items are separated by a blank line render broken — each item restarts at `1.` (CommonMark splits them into separate lists). Write every numbered list (e.g. Key Findings) as ONE contiguous block with NO blank lines between consecutive items. Before build, run `python3 skills/research/wiki-inline-links/scripts/check_list_formatting.py <WIKI> --all` and fix every reported page. A green build does NOT catch this.
- **`created`/`updated` carry FULL quoted date+time timestamps** (e.g. `"2026-08-16T20:47:13-04:00"`), never bare dates — the sidebar and RSS sort by these via string compare, and unquoted ISO timestamps shift to UTC (next day). Display is date-only; the time is for sorting.
- **Ingestion enrichment:** when a new article makes a significant contribution to a connected concept (novel framing, distinctive finding, or a missing dimension), integrate it into that concept's **body narrative** (research bullet / subsection / synthesis paragraph), not just its Connected Articles list. **NARRATIVE INTEGRATION, never append-only:** weave the enrichment into the thematically-appropriate EXISTING section as connected prose — NEVER tack it onto the end of the page as a standalone `##`/`###` section floating between the body and `## Connected Concepts`. Remove any orphaned heading you'd otherwise append. Only for a genuinely major contribution (e.g. a systematic review that reorganizes the whole area) is a full body rewrite warranted.
- **Significant body edits:** whenever you make a substantive edit to a concept or article page (not just frontmatter or Connected lists), bump its `updated` timestamp to the current date+time and rebuild so the right sidebar listing refreshes.
- Tags: tags in frontmatter are **concept slugs** (each value is a real concept page); they render as **clickable chips linking to their concept pages**. Optional structured metadata fields (`level`, `audience`, `discipline`, `category`, `research_method`) hold natural-language values used as PageFind search facets — see `tooling/SCHEMA.md`.
- Citation: single APA line with hyperlinked title, NO "Full text" blocks, NO bullet prefix
- Delete stub pages with < 300 chars of real body content
- After ANY page change: run `npm run build`, then `git add -A && git commit -m "..." && git push origin main`
- **Offline EPUB/PDF (build-related):** the site also publishes `public/aied.epub` and `public/aied.pdf` (concepts + FAQs, with a Notice page and clickable TOC). After content changes, regenerate them with `python3 tooling/build-epub.py` and commit them too (they are committed artifacts served from `/aied/aied.epub` and `/aied/aied.pdf`). Requires `pandoc` and, for the PDF, `weasyprint`.

### Cron job
Weekdays 9am ET: scans arXiv cs+education and physics.ed-ph for new papers, creates articles + updates concepts, builds site, commits and pushes.