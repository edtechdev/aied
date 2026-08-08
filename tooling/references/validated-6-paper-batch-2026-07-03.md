# Validated Pipeline: 6-Paper Batch Ingestion (2026-07-03)

Concrete benchmark for a medium-volume daily cron scan where all arXiv APIs responded on first attempt (no rate limiting, no listing-page fallback needed).

## Environment

- Cron context (no user present, no memory tool)
- `execute_code`: **available** (used for arXiv API queries, OpenAlex, S2, metadata parsing)
- `memory`: **unavailable** (fallback: config default_days=3, log.md anchor)
- `terminal`: **available** (used for PDF download + pdftotext, static site generation)
- Today's date: 2026-07-03
- Search window: 2026-06-30 to 2026-07-03 (3 days via config default)

## Source Results

| Source | Method | Result | AIED-Relevant |
|--------|--------|--------|--------------|
| arXiv cs.CY | API (urllib) | ✓ 4 papers | 3 |
| arXiv cs.HC | API (urllib) | ✓ 8 papers | 3 |
| Semantic Scholar | API (urllib) | ✓ 0 results (query sparsity) | 0 |
| OpenAlex | API (urllib) | ✓ 10 results (all future-dated placeholders) | 0 |

## Key Difference from 10-Paper Batch (2026-06-30)

- **All APIs responsive** — no 429, no timeouts. Both cs.CY and cs.HC returned on first attempt in ~3.8s total.
- **No listing-page fallback needed** — the API itself was sufficient for full-text keyword search.
- **Single-script Phase 2** worked for 6 papers — no need to split into separate scripts per sub-phase.

## Timing

| Phase | Duration | Method |
|-------|----------|--------|
| Fetch arXiv cs.CY + cs.HC | ~4s | execute_code (urllib, parallel) |
| Fetch Semantic Scholar + OpenAlex | ~2.5s | execute_code (urllib, parallel) |
| Fetch full metadata for 9 candidates | ~0.7s | execute_code (urllib, id_list) |
| Phase 1: PDF download (6 papers) | ~35s | terminal (curl + pdftotext, sequential) |
| Phase 2: Concept pages + backlinks + index + log + digest | ~3s | terminal (one pre-written Python script) |
| Phase 3a: Regenerate journal (341 entries) | ~0.06s | execute_code (regex frontmatter parsing) |
| Phase 3b: Generate static site (419 pages) | ~12s | terminal (generate-static-site.py) |
| Phase 3c: Regenerate journal.html | ~3s | terminal (regenerate-journal-html.py) |
| **Total** | **~60s** | — |

## Phase Script Architecture

For 6 papers, a **two-script** split was optimal:

1. **`/tmp/ingest_phase1.py`** (7.5KB) — PDF fetch + raw source file creation (curl → pdftotext → SHA256 → raw/papers/ID.md). Run via `terminal('python3 /tmp/ingest_phase1.py')`.

2. **`/tmp/ingest_phase2.py`** (20KB) — ALL in one: concept page creation (6 pages) + backlinks (30 to existing pages) + index.md rebuild (418 entries) + log.md append + daily digest creation. Run via `terminal('python3 /tmp/ingest_phase2.py')`.

**Guideline for script splitting:**
- ≤6 papers → 2 scripts (fetch + everything-else) is fine
- 7–10 papers → 3 scripts (fetch + concept-pages-only + index-log-digest) is safer
- ≥11 papers → 4+ scripts (fetch; concept-pages; backlinks; index-log-digest)

## Specific Patterns Validated

### Journal Regex Parsing (stdlib-only)
The stdlib-only regex frontmatter parser produced exactly 341 entries for 418 concept files (341 with sources, 77 digests/stubs excluded). No drift compared to the yaml-based parser. Key guards that prevented issues:
- `sources: null` treated as empty string → `str(fm.get('sources'))` and guard `if not sources`
- `sources: []` correctly parsed as empty bracket pair
- Multi-line tags handled by single-line iteration

### OpenAlex Future-Date Filter
All 10 OpenAlex results had `publication_date` in Dec 2026 (e.g. 2026-12-31) — placeholder dates far outside the search window. The config's `publication_year:2026` filter is insufficient; explicit window-checking in processing code is required. The skill pitfall already covers this; this run confirms it remains the norm for OpenAlex results.

### Back-link Duplicate Detection
When re-ingesting or when two new papers link to the same target, `if f"[[{new_slug}]" in content:` correctly prevents duplicate back-links. All 30 back-links inserted uniquely without overwriting each other.

### Digest Frontmatter
The daily digest uses `type: digest` and `sources: []` — the index rebuild (which collects ALL page types) counts it, but the journal (which skips `sources: []` pages) does not. This is the correct behavior and produces the observed 418 index vs 341 journal gap.

## Memory Fallback

As in the prior run, memory was unavailable. Scan date stored in log.md:
```
## [2026-07-03] meta | scan-complete
- last_scan_date: 2026-07-03
- papers_ingested: 6
- index_count: 418
```
