# Support Files (research-wiki)

Moved out of SKILL.md (2026-09-19) to keep the main skill under its size limit.

- `tooling/concept-index.md` — Canonical concept manifest: every concept with its related/similar phrases + absorbed→canonical merge map. Consult before inserting inline `[[slug]]` links.
- `concepts.registry.yaml` (repo root) — Canonical concept manifest: every concept with its title and related/similar phrases, the sidebar sections, the redirect/merge map and the never-link list. Consult before inserting inline `[[slug]]` links; `tooling/concept-index.md` is its generated human-readable view.
- `wiki.config.yaml` (repo root) — Pipeline configuration: paths, gate/build commands, scan sources, journal feeds, agent tool mapping. Load it with `tooling/scripts/wiki_config.py` instead of hardcoding paths, journals or tool names.
- **`wiki-inline-links` skill** — Dedicated aggressive inline-link pass: term→slug dictionary, conceptually-similar phrase mapping, self-link/heading/same-text cleanup, and verification. Load after every page creation/enrichment (manual and cron).
- `scripts/add-backlinks.py` — Re-runnable back-link addition script
- `scripts/fetch-rss-feeds.py` — Journal RSS feed fetcher (CAEAI, BJET; output JSON for the weekly ingestion cron)
- `scripts/generate-llms-files.py` — Regenerates `public/llms.txt` and `public/llms-full.txt` from articles/ + content/en/concepts/
- `build-epub.py` — Regenerates the offline `public/aied.epub` (pandoc) and `public/aied.pdf` (pandoc + weasyprint) from the wiki markdown; also post-processes the EPUB (Notice page, CC0 badge, landmarks, hard-coded TOC numbering)
- `pdf-style.css` — Print layout for the PDF (A4, page numbers, cover page, clickable blue TOC)
- `gen-epub-cover.mjs` — Renders the book cover `public/epub-cover.png` (sharp)
- `gen-og-concept-map.mjs` — Renders the concept-map images (white/dark variants) used in the site OG image, EPUB/PDF cover, and EPUB
- `scripts/detect-readfile-corruption.py` — Detect and repair wiki pages corrupted by read_file line-number prefixes
- `cron/daily-scan-prompt.md` — Daily arXiv/EdArXiv/PsyArXiv scan cron prompt
- `cron/weekly-rss-scan-prompt.md` — Weekly journal RSS ingestion cron prompt (open-access check included)
- `references/psyarxiv-subject-search.md` — SHARE/Trove endpoint for PsyArXiv-by-subject scans (the OSF API cannot combine `filter[subjects]` with anything)
- `references/web-search-fallback.md` — Proven web_search query patterns for arXiv discovery when API is rate-limited
- `references/arxiv-listing-extraction.md` — Deterministic arXiv ID extraction from listing pages to bypass API blocks
- `references/arxiv-api-query-pattern.md` — Proven `execute_code` + `urllib` pattern for date-window arXiv API queries (works in cron; bypasses terminal HTTP block)
- `references/daily-scan-pipeline.md` — Full daily AIED scan pipeline architecture and error handling
- `references/aied-relevance-filtering.md` — Two-stage title-scan + abstract-verification filtering pattern
- `references/cron-recovery.md` — Step-by-step recovery when a daily ingestion cron job stalls mid-pipeline
- `references/validated-10-paper-batch-2026-06-30.md` — Concrete end-to-end benchmark: timings, hybrid fetch pattern, phase scripts, and memory fallback for a 10-paper batch
- `references/validated-6-paper-batch-2026-07-03.md` — Medium-volume benchmark: 6-paper batch with all APIs responsive, two-script phase architecture
- `references/cs-cl-ai-fallback-validation.md` — Validation notes on the cs.CL+cs.AI fallback search (added 2026-06-15)
- `references/refresh-paper-version.md` — Refresh an already-ingested paper to a newer arXiv version (v1→v3): detection, PDF fetch, frontmatter + sha256 update
- `references/validated-4-source-daily-scan-2026-07-16.md` — Exact 4-source daily scan (arXiv cs.CY/cs.HC via execute_code urllib + Semantic Scholar bulk + OpenAlex via terminal curl): hybrid fetch split, dedup/filter, 2-script ingest, confirmed S2/OpenAlex outcomes
