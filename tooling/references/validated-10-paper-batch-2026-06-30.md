# Validated Pipeline: 10-Paper Batch Ingestion (2026-06-30)

This file records a successful full-pipeline run of the daily AIED scan on 2026-06-30,
serving as a concrete benchmark for future cron runs.

## Environment

- Cron context (no user present)
- `execute_code`: **available** (used for arXiv API queries, metadata fetch)
- `memory`: **unavailable** (fallback: log.md anchor)
- `terminal`: **available** (used for PDF download + pdftotext, static site generation)
- Web tools (`web_extract`): **available** (used for listing-page extraction)
- Today's date: 2026-06-30
- Last scan: 2026-06-29 (from previous log.md anchor `## [2026-06-29] meta | scan-complete`)

## Search Window

- Start: 2026-06-29 00:00
- End: 2026-06-30 23:59

## Source Results

| Source | Method | Result | Papers |
|--------|--------|--------|--------|
| arXiv cs.CY | API | HTTP 429 (rate limit) | ✓ 5 via listing pages |
| arXiv cs.HC | API | Timeout | ✓ 5 via listing pages |
| arXiv cs.CL | API | Success | ✓ 8 (0 AIED-relevant) |
| arXiv cs.AI | API | Success | ✓ 10 (0 AIED-relevant) |
| Semantic Scholar | API | Success | ✓ 1 (0 AIED-relevant, query sparsity) |
| OpenAlex | API | Success | ✓ 10 (0 AIED-relevant, future-dated) |

## Hybrid Fetch Pattern

When execute_code IS available in cron:
1. **Attempt arXiv API first** via `urllib` in `execute_code` — cs.CL and cs.AI succeeded
2. **Fall back to listing pages** via `web_extract` for categories where API failed (cs.CY, cs.HC)
3. **Fetch individual metadata** via `urllib` per arxiv ID from listing page candidates
4. **Combine all results**, deduplicate by arxiv_id, check against existing `raw/papers/` directory

## Timing

| Phase | Duration | Method |
|-------|----------|--------|
| Fetch metadata (all sources) | ~248s (includes 5 retries for rate-limited APIs) | execute_code |
| Batch fetch 10 individual abstracts | ~11s | execute_code (parallel urllib) |
| Phase 1: PDF download + raw files | ~180s | terminal (curl + pdftotext) |
| Phase 2: Create 10 concept pages | ~5s | terminal (pre-written Python) |
| Phase 3a: 50 back-links | ~2s | terminal (pre-written Python) |
| Phase 3b: Rebuild index (402 entries) | ~5s | terminal (pre-written Python) |
| Phase 3c: log.md + daily digest | ~2s | terminal (pre-written Python) |
| Phase 4a: Regenerate journal (279 entries) | ~5s | terminal (pre-written Python) |
| Phase 4b: Generate static site (403 pages) | ~30s | terminal (generate-static-site.py) |
| Phase 4c: Regenerate journal.html | ~5s | terminal (regenerate-journal-html.py) |

## Phase Scripts

All scripts written to `/tmp/` via `write_file`, executed via `terminal('python3 /tmp/phaseN-*.py', workdir='~')`:

1. **phase1-fetch-raw.py** — Downloads PDF (curl + pdftotext), computes SHA256, creates `raw/papers/ID.md`
2. **phase2-concept-pages.py** — Creates 10 concept pages with synthesis, tags, backlink targets (uses JSON-embedding pattern)
3. **phase3a-backlinks.py** — Adds 50 back-links per-paper (not merged dict), checks existing links
4. **phase3b-index.py** — Rebuilds index.md from ALL concept files (no type filter), regex frontmatter parsing
5. **phase3c-log-digest.py** — Combined: appends to log.md + creates daily digest
6. **phase4a-journal.py** — Regenerates journal.md with regex-based frontmatter parsing (stdlib only)

## Key Patterns That Worked

- **JSON-embedding pattern** for all paper metadata (10 papers in one JSON array) — avoided all quoting issues with titles containing colons, quotes, and Unicode
- **Phase separation** — prevented any single script from exceeding command length, isolated failures
- **PDF fallback**: curl PDF → pdftotext worked for all 10 papers (50k char truncation applied)
- **Index rebuild** included ALL page types (digests, entities, etc.) — no type filter
- **Back-links** processed per-paper, not as a merged dict — avoided back-link merge collision
- **log.md anchor** stored as `## [YYYY-MM-DD] meta | scan-complete` for next run's date detection

## Memory Fallback

Memory was unavailable. The scan date was anchored in log.md:
```
## [2026-06-30] meta | scan-complete
- last_scan_date: 2026-06-30
- papers_ingested: 10
- index_count: 402
```

## Result

- 10 new papers ingested
- 50 back-links added to existing pages
- Index: 394 → 402 entries
- Journal: 279 entries
- Static site: 403 pages
- All 10 new slugs verified present in both index.md and journal.md
