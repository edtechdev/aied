# Weekly Journal RSS Scan — Cron Job Prompt

Copy this prompt when creating the weekly journal RSS ingestion cron job.
Replace `[YOUR_WIKI_PATH]` with the absolute path to your wiki repo.
Replace `[YOUR_DOMAIN]` with your wiki's research domain.

---

You are ingesting new open-access [YOUR_DOMAIN] journal articles from RSS feeds into the wiki at [YOUR_WIKI_PATH].

## Pipeline

### 1. Fetch RSS feeds
Run the fetcher script:
```
cd [YOUR_WIKI_PATH] && python3 tooling/scripts/fetch-rss-feeds.py > /tmp/rss-articles.json 2>/tmp/rss-errors.log
```
This pulls from the journals configured in `tooling/config.example.yaml` (`journal_rss.feeds`). Edit the script's `FEEDS` dict to add/remove journals.

The fetcher filters out corrigenda, retractions, errata, and issue info — only original research articles remain.

### 2. Check for existing articles — CONTENT-based dedup (HARD)
Read /tmp/rss-articles.json. For EVERY candidate, extract its DOI (and title) and search **the contents** of `articles/` AND `raw/papers/` for that DOI string and a normalized title match before treating it as new.

**CRITICAL — do NOT dedup by filename.** Article and raw-source files are **descriptive-slugged** (e.g. `agentic-ai-education-scoping-review-2026.md`), NOT DOI-derived (there is no `raw/papers/10.1016-j.caeai.2026.100653.md`). A filename match therefore MISSES already-ingested papers, which is how fully-ingested articles ended up re-added to the backlog on 2026-09-06. The reliable signal is the **DOI string itself**, which always appears (a) in the article's `## Citation` as `](https://doi.org/<doi>)` and (b) in the raw file's `source_url:` frontmatter.

Robust procedure:
1. For each candidate, get its DOI from Crossref (`curl -s https://api.crossref.org/works/<doi>` → `message.DOI`). If no DOI, fall back to title.
2. Grep that DOI (and the normalized title, lowercase/punctuation-stripped) across ALL of `articles/*.md` and `raw/papers/*.md` **file contents** with `grep -l` / Python. Match on the DOI substring (it appears in the Citation and raw `source_url`) OR a normalized-title substring.
3. If ANY existing article or raw source contains the DOI or matching title → **already ingested; skip** (do not add to backlog, do not refetch).
4. Only articles with NO DOI/title match anywhere are new.

Run this dedup against file CONTENTS every time — never by filename, never by assuming the slug encodes the source.

### 3. Check open access before ingesting
For each NEW article, fetch the article page URL using `web_extract`.

**Fully-open-access journals** (e.g., CAEAI): ingest all articles without an access check.

**Hybrid journals** (e.g., BJET): look for paywall signs — "Get access", "Log in", "Purchase", "Subscribe", abstract-only page without full text. If paywalled, SKIP the article and note it in the final report.

**Extract the full abstract and key findings from the publisher page** — the RSS feed gives only a short snippet. Use the richer publisher content to write the article.

**Save full text when available** to `raw/papers/<doi-slug>.md` with frontmatter (source_url, ingested_date, doi). Reference it in the article's `sources:` field ONLY — never put `raw/` paths in the article body (`^[raw/...]` footnotes and `[local](raw/...)` links render as broken literal text on the live site; the Astro renderer doesn't process them and `raw/` isn't deployed).

**If the article is open access but full text CANNOT be retrieved** (e.g., the publisher blocks scraping with CAPTCHA/bot protection, as ScienceDirect does; or the fetch times out after retries): **DO NOT create an article page in the wiki.** Instead add the article to `AIED-BACKLOG.md` under its journal section (format: `- [Title](article-url) — [DOI: xxx](doi-url)`), include it in the report's FULL_TEXT_PENDING list, and update the backlog's total count. The maintainer will manually download each PDF and send it for full-text ingestion. Do NOT ingest an abstract-only article into the wiki when full text is unavailable.

### 4. Write article files
Create `articles/<slug>.md` with:

```yaml
---
title: "Full Paper Title"
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: article
tags: [relevant, concept, tags]
sources: ['raw/papers/filename.md']  # or [] if no full text saved
confidence: high
research_method: [survey, systematic review, experiment]  # optional
discipline: [math education, physics education]  # optional
audience: [instructors, learners, researchers]  # optional
level: [higher ed, k 12]  # optional
category: [assessment, framework]  # optional
---
```

**Structure:**
- **Synthesis blockquote:** 3-5 sentences covering what was studied, method, key findings, significance (from the full abstract, not the RSS snippet)
- **Key Findings section:** 3-5 distinct bullet points with the most important results (do NOT duplicate the synthesis text)
- **Connected Concepts:** 3-6 genuinely related concepts from `concepts/`
- **Connected Articles:** 2-4 genuinely related articles from `articles/`
- **Citation:** APA format with hyperlinked title (DOI link)
- **Article body must be substantial** — at least ~1,000 characters of synthesis/findings beyond the blockquote. A title + one-line blockquote is a stub; expand with key contributions, findings, and implications.
- **Write the citation yourself in APA format** (Authors, Year. *Title*. URL). NEVER paste the Elsevier/ScienceDirect auto-generated citation from the publisher page — it comes out garbled (author lists like "ScienceDirect, C.L.A.A., ... & Access), L.C.B."). Get the real author list from Crossref: `curl -s https://api.crossref.org/works/<doi>` (fields: message.author[].family/given, message.title, message.volume, message.page).

### 4b. Update/create relevant concept pages — REQUIRED "Questions to Consider" section
For referenced concepts: enrich thin ones and add backlinks to the new article. **Every concept page must include a `## Questions to Consider` pre-reading section** placed immediately after the synthesis blockquote intro: a single contiguous bulleted list (no blank lines between items) of 2-7 open, reflective questions (target 3-6) for the reader to consider BEFORE reading the page. The audience may be instructors, learning designers, students, researchers, administrators, and/or software developers. The questions should surface or challenge potential misconceptions about the concept (refutation technique), activate prior knowledge, relate the concept to the reader's own experiences or goals, connect the concept to other concepts, assess prior knowledge or beliefs, and raise further considerations (e.g., equity, ethics). Ground every question in the page's actual content; do not invent research findings. When enriching an existing concept page, ensure/refresh this section if its content changed substantially. **Immediately after the Questions list, add a `## Introduction` heading** to label the start of the narrative body.

### 4c. Run the inline-link pass (mandatory, HARD GATE)
After creating/enriching all article and concept pages, load the `wiki-inline-links` skill and run the full linking pass on every page: aggressively link every concept mention in the narrative body (including conceptually-similar phrases — e.g. "critical analysis"→`[[critical-thinking]]`, "AI tutors"→`[[intelligent-tutoring]]`, "human oversight"→`[[human-in-the-loop-ai]]`, "teachers"/"educators"→`[[teacher-role]]`) to the matching concept page, and clean up self-links, links inside `##` headings, and same-text links `[[slug|slug]]`. Verify 0 self-links, 0 heading links, balanced brackets, and 0 broken links before proceeding to build. **This is a BLOCKING PREREQUISITE — do NOT build/commit/push/deploy until the linking pass is run AND verified on every newly created/enriched page. A green build does NOT substitute for this editorial step.**

### 4d. Run the list-formatting check (mandatory, HARD GATE)
Run `python3 skills/research/wiki-inline-links/scripts/check_list_formatting.py <WIKI> --all` and fix every reported page by removing the blank line between consecutive ordered-list items (blank-line-separated items render each as `1.`). Verify 0 defects before proceeding to build. A green build does NOT catch this.

### 5. Build and push
```
cd [YOUR_WIKI_PATH] && python3 tooling/scripts/generate-llms-files.py && python3 tooling/build-epub.py && npm run build && git add -A && git commit -m "Weekly journal RSS ingestion: X new articles" && git push origin main
```
(`python3 tooling/build-epub.py` regenerates the offline `public/aied.epub` and `public/aied.pdf`; requires `pandoc` and `weasyprint`.)

### 6. Report
Count articles checked, already existing, paywalled/skipped, and new articles ingested (with titles). List paywalled articles separately.

**CRITICAL — report any article whose full text could not be retrieved.** For each one, include: the article title, the wiki article slug/URL, the DOI, and the publisher page link, formatted so the maintainer can click through and download the PDF:

```
FULL TEXT PENDING (N articles) — please send PDFs:
1. <Full Paper Title> — wiki: https://edtechdev.github.io/aied/articles/<slug>/ — DOI: <doi> — publisher: <url>
2. ...
```

The maintainer will manually download each PDF and send it; when received, save it to `raw/papers/<doi-slug>.md` and upgrade the article body from the full text.
