# Daily Research Scan — Cron Job Prompt

Copy this prompt when creating the daily Hermes Agent cron job.
Replace `[YOUR_WIKI_PATH]` with the absolute path to your wiki repo.
Replace `[YOUR_WIKI_TITLE]` with your wiki's display title.

---

Search for new papers in [YOUR DOMAIN] across multiple sources. Use the `research-wiki` skill for the full ingestion pipeline.

## Scan Window

Determine the scan window by checking `log.md` for the most recent `scan-complete` anchor:
```
## [YYYY-MM-DD] meta | scan-complete
```
Search window: start from the day AFTER that date, end today ([TODAY]). If no prior scan anchor found, search the last 3 days.

## Sources to Query

### 1. arXiv API (primary)
Query these categories via `execute_code` + Python `urllib` (see `references/arxiv-api-query-pattern.md`):

- **cs.CY, cs.HC, cs.CL, cs.AI** (education-relevant): max_results=20 per category
- **physics.ed-ph** (physics education): max_results=10

Use keyword filter on title: `education OR learning OR student OR teacher OR classroom OR tutor OR school OR curriculum OR pedagog OR grading OR feedback OR literacy OR assessment OR metacognit`

Query format:
```
cat:cs.CY AND (ti:education OR ti:learning OR ...) AND submittedDate:[START TO END]
```

### 2. EdArXiv (secondary)
Search the EdArXiv preprint server via `web_extract` or `web_search`:
`https://osf.io/preprints/edarxiv/discover`
Query for recent AI-in-education preprints (AI, LLM, generative, tutoring, assessment).

### 3. Fallback: web search
If API sources fail or return nothing, use `web_search` with date-anchored queries (see `references/web-search-fallback.md`).

## Ingestion Workflow

For each new relevant paper:

1. **Save raw source** → `raw/papers/[arxiv_id_or_slug].md` with frontmatter (source_url, ingested_date, sha256)
   - Fetch PDF via `curl` + `pdftotext` (or `web_extract` for HTML versions), truncate body to 50k chars

2. **Create article page** → `articles/[slug].md` (this is the wiki's page type for individual papers)
   - Frontmatter: title, created, updated, type: article, tags, sources, confidence
   - **`created` MUST be today's date (ingestion date), NOT the paper's publication date.** The right-sidebar "Recent Articles" and the Journal page sort by `created`, so setting it to the paper's pub date buries new articles under older ones and they never appear as "new." Use `created: [TODAY]` (same as `updated`). The paper's actual publication date can go in the body/citation if relevant.
   - Body structure: synthesis blockquote → Key Findings → Connected Concepts → Connected Articles → Citation (APA, hyperlinked title)
   - **NEVER reference `raw/` paths in the article body** — no `^[raw/papers/x.md]` footnotes, no `[local](raw/papers/x.md)` / `[PDF](raw/...)` links. The Astro renderer leaves `^[...]` footnotes as literal text and `raw/` is not deployed, so they appear as broken text on the live site. The raw file is referenced ONLY in the `sources:` frontmatter field; in-body citations use the real paper URL (arXiv/DOI).

3. **Update/create concept pages** → `concepts/[slug].md` for topics that synthesize multiple papers
   - Only create if the concept is genuinely new (check existing concepts first — avoid duplicates)
   - Add the new article to relevant concept pages' Connected Articles lists

4. **Add back-links** to 3-5+ related pages (update their Connected Articles sections)

5. **Run the inline-link pass (mandatory, HARD GATE)** — Load the `wiki-inline-links` skill and run the full linking pass on every newly created/enriched article and concept page: aggressively link every concept mention in the narrative body (including conceptually-similar phrases — e.g. "critical analysis"→`[[critical-thinking]]`, "AI tutors"→`[[intelligent-tutoring]]`, "human oversight"→`[[human-in-the-loop-ai]]`, "teachers"/"educators"→`[[teacher-role]]`) to the matching concept page, and clean up self-links, links inside `##` headings, and same-text links `[[slug|slug]]`. Verify 0 self-links, 0 heading links, balanced brackets, and 0 broken links before proceeding. **This is a BLOCKING PREREQUISITE — do NOT build/commit/push/deploy until the linking pass is run AND verified on every newly created/enriched page. A green build does NOT substitute for this editorial step.**

5b. **Run the list-formatting check (mandatory, HARD GATE)** — Run `python3 skills/research/wiki-inline-links/scripts/check_list_formatting.py <WIKI> --all` and fix every reported page by removing the blank line between consecutive ordered-list items (blank-line-separated items render each as `1.`). Verify 0 defects before proceeding. A green build does NOT catch this.

6. **Append to log.md** — date, sources, paper list, tags

7. **Regenerate journal.md** — extract frontmatter from all article pages, group by `created`, newest first

8. **Regenerate agent-ready files** (llms.txt, llms-full.txt):
   ```bash
   python3 [YOUR_WIKI_PATH]/tooling/scripts/generate-llms-files.py
   ```

9. **Build and deploy the Astro site:**
   ```bash
   cd [YOUR_WIKI_PATH]
   npm run build        # builds dist/ with pagefind search + sitemap
   git add -A
   git commit -m "scan: [TODAY] — N new papers on [TOPIC SUMMARY]"
   git push             # GitHub Actions deploys dist/ to GitHub Pages
   ```

## Relevance Filtering

**INGEST** (any of these in title/abstract):
- AI/LLM/genAI applied to education, learning, teaching
- Intelligent tutoring systems, AI feedback, automated grading
- AI literacy, AI in classrooms, student-AI interaction
- Learning analytics, knowledge tracing, student modeling
- AI-generated educational content or assessment

**SKIP** (unless education context is explicit):
- Pure CS/ML without education application
- General AI fairness/ethics without education
- Non-AI education research

**When uncertain: INGEST.** Broad interpretation preferred.

## Deliverable

After completion, send a summary with:
- Source status (API results per source)
- Papers ingested (title + article page slug for each)
- Concepts created/updated
- Build/push status
