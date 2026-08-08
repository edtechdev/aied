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

- **cs.CY** (Computers and Society — education): max_results=20
- **cs.HC** (Human-Computer Interaction): max_results=10

Use keyword filter on title: `education OR learning OR student OR teacher OR classroom OR tutor OR school OR curriculum OR pedagog OR grading OR feedback OR literacy OR assessment OR metacognit`

Query format:
```
cat:cs.CY AND (ti:education OR ti:learning OR ...) AND submittedDate:[START TO END]
```

### 2. Semantic Scholar (secondary)
Bulk search endpoint. Query for AI education terms. Filter by `fieldsOfStudy: Education, Computer Science`.

### 3. OpenAlex (tertiary)
Search works endpoint filtered by `publication_year`, extract arXiv IDs from `locations[].landing_page_url`.

### 4. Fallback: cs.CL + cs.AI
Only if primary categories yield < 5 new papers combined.

## Ingestion Pipeline (per paper)

1. **Save raw source** → `raw/papers/[arxiv_id].md` with frontmatter (source_url, ingested_date, sha256)
   - Fetch PDF via `curl` + `pdftotext`, truncate body to 50k chars

2. **Create concept page** → `concepts/[slug].md`
   - Frontmatter: title, created, updated, type: concept, tags, sources, confidence
   - Body: Blockquote synthesis + key findings + 5+ wikilinks to existing pages

3. **Add back-links** to 5+ existing concept pages (update their `## Related Pages` sections)

4. **Rebuild index.md** — scan ALL `concepts/*.md`, sort alphabetically, rewrite Concepts section

5. **Append to log.md** — date, sources, paper list, tags, index change

6. **Regenerate journal.md** — extract frontmatter from all concept pages, group by `created`, newest first

7. **Regenerate static site:**
   ```bash
   python3 [YOUR_WIKI_PATH]/tooling/scripts/generate-static-site.py \
     --wiki-path [YOUR_WIKI_PATH] \
     --output-path static-site \
     --wiki-title "[YOUR_WIKI_TITLE]" \
     --site-url "https://YOUR_USERNAME.github.io/YOUR_REPO"
   ```
   Then run `regenerate-journal-html.py --wiki-path [YOUR_WIKI_PATH]`

8. **Rebuild search_index** (done by generate-static-site.py above)

9. **Regenerate RSS feed** (done by generate-static-site.py above)

10. **Update index.html** journal count (done by generate-static-site.py above)

11. **Commit and push:**
    ```bash
    cd [YOUR_WIKI_PATH]
    git add concepts/ raw/ index.md journal.md log.md static-site/
    git commit -m "scan: [TODAY] — N new papers on [TOPIC SUMMARY]"
    git push
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
- Papers ingested (title + concept page slug for each)
- Papers skipped (with reason)
- Index count (before → after)
- Live site URL

## Pitfalls to Avoid

- **Use em-dash `—` (U+2014) in journal.md entries**, not ASCII hyphen — or journal.html will be empty
- **Never filter index rebuild to `type: concept` only** — include ALL types (digest, comparison, entity, summary)
- **Always pass absolute paths** to scripts (not relative — cron has a different working directory)
- **Verify all new slugs appear in index.md and journal.md** after regeneration
- **Pre-flight dedup**: check `raw/papers/[id].md` exists BEFORE downloading PDFs
- **Weekend scans**: arXiv has no new submissions Sat/Sun. Report "Weekend — no new submissions" and check for catch-up papers.
- **Quote titles with colons** in YAML frontmatter: `title: "X: Y"`
- **Save scan-complete anchor** to log.md for next run:
  ```
  ## [YYYY-MM-DD] meta | scan-complete
  ```