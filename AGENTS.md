# AGENTS.md

## Wiki: AI in Education Research Wiki

Static site built with Astro, deployed to GitHub Pages from `main` branch at https://edtechdev.github.io/aied/

### Page types

Two content collections: **articles** and **concepts**, each in their own directory with strict structure.

### Article page structure (`articles/{slug}.md`)

Every article page MUST have exactly 6 sections:

```yaml
---
title: Paper Title  # quote if contains colons: "Title: Subtitle"
created: YYYY-MM-DD
updated: YYYY-MM-DD
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
created: YYYY-MM-DD
updated: YYYY-MM-DD
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
- Tags: concept pages serve the tag role — no separate tag pages. Use relevant tags in frontmatter; they render as plain labels (not hyperlinks) at the top of the page.
- Citation: single APA line with hyperlinked title, NO "Full text" blocks, NO bullet prefix
- Delete stub pages with < 300 chars of real body content
- After ANY page change: run `npm run build`, then `git add -A && git commit -m "..." && git push origin main`

### Cron job
Weekdays 9am ET: scans arXiv cs+education and physics.ed-ph for new papers, creates articles + updates concepts, builds site, commits and pushes.