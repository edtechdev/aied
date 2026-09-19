# Daily Research Scan — Cron Job Prompt

Copy this prompt when creating the daily AI agent cron job.
Replace `[YOUR_WIKI_PATH]` with the absolute path to your wiki repo.
Replace `[YOUR_WIKI_TITLE]` with your wiki's display title.

**All scan parameters — sources, categories, keywords, listing fallbacks and the
relevance filter — come from `wiki.config.yaml`.** This prompt describes the
*workflow*; the config describes *what* is scanned, so it is edited in one place.

---

Search for new papers in [YOUR DOMAIN] across multiple sources. Use the `research-wiki` skill for the full ingestion pipeline.

## Scan Window

Determine the scan window by checking `log.md` for the most recent `scan-complete` anchor:
```
## [YYYY-MM-DD] meta | scan-complete
```
Search window: start from the day AFTER that date, end today ([TODAY]). If no prior scan anchor found, search the last 3 days.

## Sources to Query

**Read the source list from `wiki.config.yaml` → `scan.sources`** (categories,
keywords, `max_results`, and the listing-page fallbacks). Do not restate or
hardcode them here — the config file is the single source of truth, so a new
category or journal is added in one place.

Use `python3 tooling/scripts/wiki_config.py --get scan.sources` to print the
current list.

### arXiv API
Query each `type: arxiv_api` source from the config via `execute_code` + Python
`urllib` (see `references/arxiv-api-query-pattern.md`), filtering titles with the
source's `keywords`.

Query format:
```
cat:cs.CY AND (ti:education OR ti:learning OR ...) AND submittedDate:[START TO END]
```

### Other sources
Query every other source in the config by its `type`:

- `web_search` (EdArXiv) — search its `url` with the source's `query`.
- `trove_search` (PsyArXiv by subject) — the OSF REST API cannot combine
  `filter[subjects]` with any other filter, and PsyArXiv publishes no RSS feed,
  so this source is served by the SHARE/Trove endpoint behind the OSF discover
  page. Run the `fetcher_script` from the source block:

  ```bash
  python3 tooling/scripts/fetch-psyarxiv-edpsych.py --days 3   # JSON lines, newest first
  ```

  Full text is open: `--text <osf_id> --out raw/papers/<slug>.md` downloads the
  PDF and converts it with `pdftotext -layout`. See
  `references/psyarxiv-subject-search.md` for the endpoint, the `-dateCreated`
  sort requirement and the DOI caveat (DOIs are minted late; cite
  `https://osf.io/<id>` until then).

## Ingestion Workflow

For each new relevant paper:

1. **Save raw source** → `raw/papers/[arxiv_id_or_slug].md` with frontmatter (source_url, ingested_date, sha256)
   - Fetch PDF via `curl` + `pdftotext` (or `web_extract` for HTML versions), save the full extracted text (cap 250k chars — a generous local only, gitignored cap; keep essentially the entire paper). The old 50k convention truncated ~half of real papers and is deprecated.
   - **HARD RULE — never ingest an article without its full text.** Do NOT create an article page from the abstract alone. Full text must be available and permanently saved to `raw/papers/`. If full text cannot be retrieved (fetch timeout, CAPTCHA/CAPS block, paywall — arXiv PDFs via pdftotext almost always work; EdArXiv/OSF via `osf.io/download/<id>` works): do NOT create the wiki page. Instead add the article to `AIED-BACKLOG.md` (under its journal/source section, format `- [Title](url) — [DOI: xxx](doi-url)`), list it in the report's FULL_TEXT_PENDING, and update the backlog total. The maintainer downloads the PDF and sends it for full-text ingestion.

2. **Create article page** → `articles/[slug].md` (this is the wiki's page type for individual papers)
   - Frontmatter: title, created, updated, type: article, sources, confidence
   - **Populate the optional structured metadata facets when determinable from the paper:** `research_method` (survey, systematic review, experiment, case study, benchmark, etc.), `discipline` (math education, physics education, cs education, etc.), `audience` (instructors, learners, researchers, administrators, software developers), `level` (early childhood, k 12, higher ed, adult learning), `page_kind` (framework, synthesis, evaluation). See `tooling/SCHEMA.md` for the closed vocabularies. **There is no `tags` field: every concept a page touches is named in a typed field.** Fill the six facet fields (`foundations`, `pedagogy`, `technology`, `assessment`, `stakeholders`, `ethics`) with concept slugs taken from the matching section of `concepts.registry.yaml` — a value of the wrong kind fails the build. **After writing pages, run `python3 tooling/scripts/validate-facets.py`.** The typed facet fields
(`foundations`, `pedagogy`, `technology`, `assessment`, `stakeholders`, `ethics`) are DERIVED from each page's
are filed under a section of `concepts.registry.yaml`, and a value of the wrong kind — a technology slug in
`pedagogy` — is an error. `npm run verify` fails if any page's facet fields disagree with the registry.
**Fill `research_method`, `audience` and `level` for every new article unless the page genuinely gives no basis; the single most common defect on ingested pages is a paper whose design is obvious from the body and absent from the frontmatter.** When a paper's method or discipline does not fit the closed vocabularies, extend the list in `src/content.config.ts` deliberately rather than writing a value outside it, then run `python3 tooling/scripts/audit-metadata.py --write-docs` so `tooling/SCHEMA.md` stays in step. Before finishing the run, verify with `python3 tooling/scripts/audit-metadata.py --missing research_method` and `--strict`.
   - **`created` MUST be today's date (ingestion date), NOT the paper's publication date.** The right-sidebar "Recent Articles" and the Journal page sort by `created`, so setting it to the paper's pub date buries new articles under older ones and they never appear as "new." Use `created: [TODAY]` (same as `updated`). The paper's actual publication date can go in the body/citation if relevant.
   - Body structure, in this FIXED order: synthesis blockquote → `## Key Findings` (contiguous numbered list, 5-7 items, ~25-35 words each) → 3-4 `##` prose sections (~120-180 words each) → `## What this means for practice` → `## Limitations` → `## Connected Concepts` → `## Connected Articles` → `## Citation` (APA, hyperlinked title; LAST section, per the standing hard rule). Nothing goes after `## Citation`; the template appends Connected FAQs, the metadata table and source buttons.
     - `## What this means for practice`: lead with **Instructors**; add a labeled bullet for faculty developers/designers, administrators/institutions, researchers or developers ONLY when the paper supports a genuinely distinct implication for that audience (match the page's `audience:` facet). 3-5 bullets, one or two sentences each, imperative and derived from findings on the same page — never hedged ("could potentially suggest that instructors might consider").
     - `## Limitations`: 2-4 bullets, each carrying a concrete fact from the paper (sample size and recruitment, one institution, stipends or other incentives, self-report measures, researcher-as-facilitator role conflict, no follow-up, students not consulted). **Generic boilerplate is a defect** — "small sample, single institution, results may not generalise" with no numbers adds nothing; if the paper states no limitations and none is self-evident, omit the section entirely. When the limitation is the measure, link `[[self-report-measures]]` instead of restating it.
     - **Length budget: 750-1,000 words** for the body (frontmatter end → `## Connected Concepts`). The two sections above are paid for out of the existing body, never bolted on top.
     - **House style: US English.** Write US English (behavior, program, modeling, judgment, organization, center, artifact, and -ize verbs); never respell the `## Citation` section or a quoted paper title. Verify with `python3 tooling/scripts/check-us-english.py` (a build gate).
   - **NEVER reference `raw/` paths in the article body** — no `^[raw/papers/x.md]` footnotes, no `[local](raw/papers/x.md)` / `[PDF](raw/...)` links. The Astro renderer leaves `^[...]` footnotes as literal text and `raw/` is not deployed, so they appear as broken text on the live site. The raw file is referenced ONLY in the `sources:` frontmatter field; in-body citations use the real paper URL (arXiv/DOI).

3. **Update/create concept pages** → `concepts/[slug].md` for topics that synthesize multiple papers
   - Only create if the concept is genuinely new (check existing concepts first — avoid duplicates)
   - Add the new article to relevant concept pages' Connected Articles lists
   - **REQUIRED — every concept page must include a "Questions to Consider" pre-reading section.** When you create a NEW concept page OR significantly enrich an existing concept page, ensure (or add/refresh) a `## Questions to Consider` section placed immediately after the synthesis blockquote intro at the top of the page: a single contiguous bulleted list (no blank lines between items) of 2-7 open, reflective questions (target 3-6) for the reader to consider BEFORE reading the page. The audience may be instructors, learning designers, students, researchers, administrators, and/or software developers. The questions should surface or challenge potential misconceptions about the concept (refutation technique), activate prior knowledge, relate the concept to the reader's own experiences or goals, connect the concept to other concepts, assess prior knowledge or beliefs, and raise further considerations (e.g., equity, ethics). Ground every question in the page's actual content; do not invent research findings. When enriching an existing concept page, refresh this section if its content changed substantially. **Immediately after the Questions list, add a `## Introduction` heading** to label the start of the narrative body.

4. **Add back-links** to 3-5+ related pages (update their Connected Articles sections)

5. **Run the inline-link pass (mandatory, HARD GATE)** — Load the `wiki-inline-links` skill and run the full linking pass on every newly created/enriched article and concept page: aggressively link every concept mention in the narrative body (including conceptually-similar phrases — e.g. "critical analysis"→`[[critical-thinking]]`, "AI tutors"→`[[intelligent-tutoring]]`, "human oversight"→`[[human-in-the-loop-ai]]`, "teachers"/"educators"→`[[teacher-role]]`) to the matching concept page, and clean up self-links, links inside `##` headings, and same-text links `[[slug|slug]]`. Verify 0 self-links, 0 heading links, balanced brackets, and 0 broken links before proceeding. **This is a BLOCKING PREREQUISITE — do NOT build/commit/push/deploy until the linking pass is run AND verified on every newly created/enriched page. A green build does NOT substitute for this editorial step.**

5b. **Run the list-formatting check (mandatory, HARD GATE)** — Run `python3 skills/research/wiki-inline-links/scripts/check_list_formatting.py <WIKI> --all` and fix every reported page by removing the blank line between consecutive ordered-list items (blank-line-separated items render each as `1.`). Verify 0 defects before proceeding. A green build does NOT catch this.

6. **Append to log.md** — date, sources, paper list, the concepts touched

7. **Regenerate journal.md** — extract frontmatter from all article pages, group by `created`, newest first

8. **Regenerate agent-ready files** (llms.txt, llms-full.txt):
   ```bash
   python3 [YOUR_WIKI_PATH]/tooling/scripts/generate-llms-files.py
   ```

9. **Build the site** (and commit):
   ```bash
   cd [YOUR_WIKI_PATH]
   python3 tooling/scripts/check_concepts.py                        # concept registry gate
   python3 tooling/scripts/generate-llms-files.py                   # llms.txt + llms-full.txt
   npm run build        # builds dist/ with pagefind search + sitemap
   git add -A
   git commit -m "scan: [TODAY] — N new papers on [TOPIC SUMMARY]"
   python3 tooling/scripts/refresh-preview.py   # restart the live preview if stale
   ```
   **Refresh the live preview, or the new pages will 404 for the reader.** The
   preview is a long-running `astro dev` process started before this scan; it
   does not notice content written by it, so its content cache goes stale and
   the new article pages return 404 until it restarts. `refresh-preview.py`
   compares the newest content mtime with the server's sync time, restarts only
   when it is stale, and waits for HTTP 200. Host, port and mode come from
   `wiki.config.yaml` → `preview:` (per-machine values live in the gitignored
   `wiki.config.local.yaml`). If it reports a failure, say so in the report —
   do not silently leave the preview broken.
   **Do NOT rebuild `public/aied.epub` / `public/aied.pdf` here.** They are local
   committed artifacts, rebuilt only on explicit request (they are slow and are
   not produced by CI). Pushing is a separate, explicitly approved step — never
   push as part of an automatic scan unless the user has approved this run.

## Relevance Filtering

**Read the include/exclude lists and the tie-break policy from `wiki.config.yaml`
→ `scan.relevance_filter`.** When the call is genuinely close, the config's
`default_policy` (currently `ingest`) wins. Do not restate the lists here.

## Deliverable

After completion, send a summary with:
- Source status (API results per source)
- Papers ingested (title + article page slug for each)
- Concepts created/updated
- Build/commit status, and whether the preview was refreshed
