# Weekly Journal RSS Scan — Cron Job Prompt

Copy this prompt when creating the weekly journal RSS ingestion cron job.
Replace `[YOUR_WIKI_PATH]` with the absolute path to your wiki repo.
Replace `[YOUR_DOMAIN]` with your wiki's research domain.

---

You are ingesting new open-access [YOUR_DOMAIN] journal articles from RSS feeds into the wiki at [YOUR_WIKI_PATH].

## IMPORTANT WORKFLOW (per wiki maintainer)

**Do NOT attempt to download or scrape full-text PDFs from publisher pages.** Publishers (ScienceDirect, Springer, Wiley, etc.) block scraping with CAPTCHA/bot protection, so full-text fetches fail anyway. Instead:

- **Create the article page from the abstract only** (the RSS snippet + publisher abstract via `web_extract` is sufficient — the pipeline works fine from an abstract).
- **For every new article, send the maintainer a clickable link to the original article online** (the publisher page URL), so they can manually download the PDF and send it to you to complete the full text.
- Maintain a running `FULL_TEXT_PENDING` list with each article's slug, full title, DOI, and publisher link.

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

### 3. Relevance filter — ONLY ingest AI-in-Education articles
**This journal feed contains many articles NOT about AI in education. Apply a strict relevance filter before ingesting:**
- Include articles about: AI literacy, generative AI / GenAI / ChatGPT / LLMs in teaching and learning, intelligent-TPACK or AI-TPACK, AI in specific subjects (writing, math, language, music, assessment, programming), learning analytics, AI ethics/privacy in education, AI policy, human-centered AI for educators, AI-mediated feedback/assessment, teacher AI readiness/professional development, AI adoption in education.
- **EXCLUDE** articles about: VR/AR without AI, metaverse, mobile learning, general ed-tech adoption/TAM, digital competence frameworks (e.g., DigCompEdu) without AI, social-media learning, digital citizenship, music/mobile-learning models without AI, coding/robotics readiness without AI, geography/Google Earth, general online/blended learning, e-learning dropout, school leadership, multimodal engagement without AI, etc.
- When in doubt, exclude — it's better to under-ingest than to add off-topic pages.

### 4. Create article files from abstracts (NO full-text fetch)
For each NEW, RELEVANT article:
- Fetch the article page with `web_extract` to get the full abstract and metadata (the RSS gives only a short snippet).
- Create `articles/<slug>.md` with:
```yaml
---
title: "Full Paper Title"
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: article
tags: [relevant, concept, tags]
sources: []  # empty — no full text saved; maintainer will send PDF later
confidence: high
---
```
**Structure:**
- **Synthesis blockquote:** 3-5 sentences covering what was studied, method, key findings, significance (from the full abstract)
- **Key Findings section:** 3-5 distinct bullet points with the most important results (do NOT duplicate the synthesis text)
- **Connected Concepts:** 3-6 genuinely related concepts from `concepts/`
- **Connected Articles:** 2-4 genuinely related articles from `articles/`
- **Citation:** APA format with hyperlinked title (DOI link)
- **Article body must be substantial** — at least ~1,000 characters of synthesis/findings beyond the blockquote. A title + one-line blockquote is a stub; expand with key contributions, findings, and implications.
- **Write the citation yourself in APA format** (Authors, Year. *Title*. URL). NEVER paste the Elsevier/ScienceDirect auto-generated citation from the publisher page — it comes out garbled. Get the real author list from Crossref: `curl -s https://api.crossref.org/works/<doi>` (fields: message.author[].family/given, message.title, message.volume, message.page).
- **Do NOT save any full-text/abstract to `raw/papers/`** — leave `sources: []`. The maintainer will send the PDF and full text will be added later.

### 5. Build and push
```
cd [YOUR_WIKI_PATH] && python3 tooling/scripts/generate-llms-files.py && npm run build && git add -A && git commit -m "Weekly journal RSS ingestion: X new articles" && git push origin main
```

### 6. Report
Count articles checked, already existing, excluded (not AI-in-ed), and new articles ingested (with titles).

**CRITICAL — list every new article's original link for the maintainer to download the PDF.** Format:

```
FULL TEXT PENDING (N articles) — please fetch the PDFs and send them:
1. <Full Paper Title> — wiki: https://edtechdev.github.io/aied/articles/<slug>/ — DOI: <doi> — article online: <publisher URL>
2. ...
```

The maintainer will download each PDF from the given link and send it; when received, save it to `raw/papers/<doi-slug>.md` and upgrade the article body from the full text.
