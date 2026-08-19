# AGENTS.md

## Wiki: AI in Education Wiki

Static site built with Astro, deployed to GitHub Pages from `main` branch at https://edtechdev.github.io/aied/

### Page types

Two content collections: **articles** and **concepts**, each in their own directory with strict structure.

### Article page structure (`articles/{slug}.md`)

Every article page MUST have exactly 6 sections:

```yaml
---
title: Paper Title  # quote if contains colons: "Title: Subtitle"
created: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp (date+time)
updated: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp; bump on significant edits
type: article
tags: [tag1, tag2, ...]  # 6-10 EXISTING tags from tags/ directory
sources: ['raw/papers/{arxiv_id}.md']
confidence: high
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

Every concept page MUST have exactly 4 sections:

```yaml
---
title: Concept Name
created: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp (date+time)
updated: "YYYY-MM-DDTHH:MM:SS±HH:MM"  # quote + full timestamp; bump on significant edits
type: concept
tags: [tag1, tag2, ...]  # 6-10 EXISTING tags
confidence: medium  # or high for well-developed concepts
---

> Brief synthesis paragraph with [[wikilinks]]

Rich body content with embedded wikilinks to related articles/concepts.

## Connected Concepts
- [[concept-slug-1]]
(max 15)

## Connected Articles
- [[article-slug-1]] — Article Title
(max 25)
```

### Rules
- NO duplicate H1 headings in body (template adds the title)
- NO duplicate sections (one Connected Concepts, one Connected Articles)
- **Inline hyperlink rule (wiki-style):** whenever a concept is mentioned by name in the BODY of a concept or article page, hyperlink that mention to the concept's page (e.g. `[[constructivist]]` in a sentence, or piped `[[cognitive-offloading|doing the cognitive work]]` when display text differs from the slug). Do this for every concept mention in body prose — exactly as wikis do — in addition to the Connected Concepts/Articles lists at the bottom. Use the most specific concept slug that matches the mention's meaning (not a looser one), and prefer the dedicated umbrella page when one exists (e.g. link plain "feedback" to `[[feedback]]`, not `[[feedback-loop]]`).
- **`created`/`updated` carry FULL quoted date+time timestamps** (e.g. `"2026-08-16T20:47:13-04:00"`), never bare dates — the sidebar and RSS sort by these via string compare, and unquoted ISO timestamps shift to UTC (next day). Display is date-only; the time is for sorting.
- **Ingestion enrichment:** when a new article makes a significant contribution to a connected concept (novel framing, distinctive finding, or a missing dimension), integrate it into that concept's **body narrative** (research bullet / subsection), not just its Connected Articles list.
- **Significant body edits:** whenever you make a substantive edit to a concept or article page (not just frontmatter or Connected lists), bump its `updated` timestamp to the current date+time and rebuild so the right sidebar listing refreshes.
- Tags: concept pages serve the tag role — no separate tag pages. Use relevant tags in frontmatter; they render as plain labels (not hyperlinks) at the top of the page.
- Citation: single APA line with hyperlinked title, NO "Full text" blocks, NO bullet prefix
- Delete stub pages with < 300 chars of real body content
- After ANY page change: run `npm run build`, then `git add -A && git commit -m "..." && git push origin main`

### Cron job
Weekdays 9am ET: scans arXiv cs+education and physics.ed-ph for new papers, creates articles + updates concepts, builds site, commits and pushes.