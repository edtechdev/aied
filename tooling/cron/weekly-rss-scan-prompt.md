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

### 2. Check for existing articles
Read /tmp/rss-articles.json. Skip any article whose DOI or title already matches an article in `articles/` or a raw source in `raw/papers/`.

### 3. Check open access before ingesting
For each NEW article, fetch the article page URL using `web_extract`.

**Fully-open-access journals** (e.g., CAEAI): ingest all articles without an access check.

**Hybrid journals** (e.g., BJET): look for paywall signs — "Get access", "Log in", "Purchase", "Subscribe", abstract-only page without full text. If paywalled, SKIP the article and note it in the final report.

**Extract the full abstract and key findings from the publisher page** — the RSS feed gives only a short snippet. Use the richer publisher content to write the article.

**Save full text when available** to `raw/papers/<doi-slug>.md` with frontmatter (source_url, ingested_date, doi). Reference it in the article's `sources:` field.

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
---
```

**Structure:**
- **Synthesis blockquote:** 3-5 sentences covering what was studied, method, key findings, significance (from the full abstract, not the RSS snippet)
- **Key Findings section:** 3-5 distinct bullet points with the most important results (do NOT duplicate the synthesis text)
- **Connected Concepts:** 3-6 genuinely related concepts from `concepts/`
- **Connected Articles:** 2-4 genuinely related articles from `articles/`
- **Citation:** APA format with hyperlinked title (DOI link)

### 5. Build and push
```
cd [YOUR_WIKI_PATH] && python3 tooling/scripts/generate-llms-files.py && npm run build && git add -A && git commit -m "Weekly journal RSS ingestion: X new articles" && git push origin main
```

### 6. Report
Count articles checked, already existing, paywalled/skipped, and new articles ingested (with titles). List paywalled articles separately.
