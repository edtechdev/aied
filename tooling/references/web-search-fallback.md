# Web Search Fallback for arXiv Discovery

When the arXiv API returns 429 (rate-limited), 500 (server error), or the terminal tool blocks HTTP URLs, switch entirely to `web_search` + `web_extract` for paper discovery. This approach has been validated across multiple daily scans and avoids all API rate limits and server outages.

## Preferred Pattern: Listing-Page Extraction (validated May 2026)

When the arXiv API is rate-limited, the **listing-page approach** is the most reliable discovery path — it found 8 new papers in a single session where date-anchored queries found 0.

### Step 1: Extract listing pages
```
web_extract("https://arxiv.org/list/cs.HC/recent")
web_extract("https://arxiv.org/list/cs.CY/recent")
```
These listing pages show the most recent submissions in each category, always up-to-date and never rate-limited. The summaries include arXiv IDs, titles, and subjects — enough to triage.

### Step 2: Extract individual paper pages
From the listing summaries, identify AIED-relevant papers by title/subject, then:
```
web_extract("https://arxiv.org/abs/ID", "https://arxiv.org/abs/ID2", ...)
```
3-5 URLs per call. Each extract returns full metadata: title, authors, abstract, submission date, categories, venue, license.

### Why this beats date-anchored web_search
- Listing pages are always current — no need to guess date ranges
- Web search engines don't reliably index arXiv submission dates
- cs.HC listing in particular surfaced 10+ AIED papers that cs.CY and API searches missed
- Zero rate limiting — these are regular HTML pages, not API endpoints

### Limitations
- Listing pages show ~50 entries per page; for very active categories, use `?skip=50&show=50` pagination
- Papers cross-listed from other categories appear with their primary category, not cs.CY/HC — check subjects carefully
- Always verify submission date is within the scan window via individual paper page extraction

## Legacy Patterns (still work, but listing-page is preferred)

### Pattern A: ID-range scan
```
site:arxiv.org/abs/2605 education OR tutor OR learning OR student OR classroom AI LLM generative 2026
```
Vary the prefix (`2605.05`, `2605.06`, ... `2605.15`) to narrow by submission week. Limit 15-20 results.

### Pattern B: Exact-date submission scan
```
site:arxiv.org "submitted on 15 May 2026" OR "submitted on 16 May 2026" education OR learning OR tutor OR student AI LLM
```
Best for catching papers from specific days. Less coverage than pattern A but higher precision.

### Pattern C: Broad topical scan
```
arXiv May 2026 new papers artificial intelligence education tutoring feedback assessment classroom
```
Useful as a third parallel query to catch papers that pattern A/B missed due to keyword gaps. Limit 10 results.

## Metadata Extraction

After collecting arXiv URLs from search results:

1. Call `web_extract` on 3-5 `arxiv.org/abs/ID` URLs in parallel
2. Extract from each result: arXiv ID, title, authors, submission date, abstract, categories, venue
3. The web_extract output includes all of this in markdown format

## Filtering Strategy

- Check submission date against the search window — papers from outside the window are either old or not yet relevant
- Cross-reference against `raw/papers/ID.md` to skip already-ingested papers
- Assess AIED relevance: AI/LLM/genAI applied to education → ingest. Pure CS/ML without education context → skip. When in doubt, ingest.

## What Doesn't Work

- Very specific date-anchored queries (`site:arxiv.org "submitted on 15 May 2026"`) often return 0 results even when papers exist — the search engine doesn't reliably index the "Submitted on" text
- Single broad query alone is unreliable — always use 2-3 parallel queries
- `site:arxiv.org` alone without topical keywords returns too much noise
