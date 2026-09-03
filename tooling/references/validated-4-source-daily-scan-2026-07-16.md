# Validated 4-Source Daily AIED Scan (2026-07-16)

Concrete, copy-pasteable recipe for the daily cron scan that queries **arXiv (cs.CY + cs.HC)**, **Semantic Scholar bulk**, and **OpenAlex**, then ingests into `<WIKI_PATH>`. Executed 2026-07-16 against window `2026-07-15 -> 2026-07-16`.

**Yield this run:** 1 new arXiv paper (`2607.13370`, LEA agentic tutor) · S2 = 1 result but out-of-window (2026-05-06, no arXiv ID) · OpenAlex = 10 results ALL future-dated Dec-2026 placeholders (0 in-window). Final wiki: 459 pages, 323 journal entries, three-way counts reconciled.

## 1. Resolve the window
- Newest `concepts/daily-digest-YYYY-MM-DD.md` filename = **authoritative** last scan date (here `2026-07-15`). `memory` tool was unavailable in cron — persist the date in `log.md` + the digest filename instead.
- arXiv `submittedDate` format: `202607150000 TO 202607162359` (START=last_scan 0000, END=today 2359).

## 2. Fetch — hybrid split (the key pattern)
- **arXiv cs.CY + cs.HC → `execute_code` + `urllib`** (terminal blocks HTTP). One execute_code call queries both cats, parses with `xml.etree` + 3-namespace dict (incl. `opensearch`), writes `/tmp/arxiv_results.json`. Use `urllib.parse.urlencode` so `+` stays the AND separator. Retry loop 5× with `2*2**attempt` backoff.
- **Semantic Scholar + OpenAlex → `terminal` curl (HTTPS)**, two-step file pattern (avoids the pipe-to-interpreter block): `curl -sL --retry 5 --retry-delay 2 "<url>" -o /tmp/s2.json` then `-o /tmp/oa.json`. Parse in a later execute_code.
  - S2 bulk → top-level `data[]`; `year=2026` is year-level ONLY → window-filter by `publicationDate`.
  - OpenAlex → `results[]`; check `publication_date`, discard future-dated (Dec 2026) placeholders.

## 3. Merge + dedup + filter (`execute_code`)
- Load all three JSONs. Dedup arXiv by id (strip `vN`); cross-listings collapse naturally.
- Dedup vs existing: `os.path.exists("raw/papers/<id>.md")`.
- Relevance: ingest AIED papers **with an arXiv ID** (primary). S2/OpenAlex rows without arXiv ID and/or out-of-window → report in digest, do **not** ingest.

## 4. Ingest (2 scripts for ≤6 papers)
- **Script A (`execute_code`):** fetch PDF via terminal `curl https://arxiv.org/pdf/<id> -o /tmp/<id>.pdf && pdftotext /tmp/<id>.pdf /tmp/<id>.txt`; slice body to 50k (`body[:50000]` — never `truncate`); sha256 of body; write `raw/papers/<id>.md`; write concept page (quote title if it has a colon — `title.replace('"','\\"')` then wrap in `"`), 5+ `[[wikilinks]]`; **write `daily-digest-YYYY-MM-DD.md` BEFORE the index rebuild**; append `log.md`.
- **Script B (`execute_code`):** back-links to 5+ existing pages (regex `## Related Pages` insertion; verify with `os.path.exists` + dedup check); full index rebuild from ALL `concepts/*.md` (every page type, sort by filename lower); `journal.md` regen (strict 3-line entries, em-dash `—` separator, grouped by `created`).
- For 1–2 papers: load metadata from `/tmp/arxiv_results.json` and build concept pages with inline f-strings — no JSON-embedding needed. Reserve JSON-embedding for batches of 3+.

## 5. Export + verify
- `generate-static-site.py --wiki-path <WIKI_PATH> --output-path <WIKI_PATH>/static-site --wiki-title 'AI Ed Wiki'` (workdir = skill dir `~/.ai-agent/skills/research-wiki`; output path ABSOLUTE — the cron prompt's `research-wiki-static-export` dir does NOT exist, trust the skill).
- `regenerate-journal-html.py --wiki-path <WIKI_PATH>`.
- **Three-way reconcile**: `len(concepts/*.md)` == `# of - [[ lines in index.md` == `# of static-site/pages/*.html`. (This run: 459/459/459.)
- If `curl http://localhost:8080/` returns `000`, restart `python3 -m http.server 8080` in background (`terminal(background=True, workdir="<WIKI_PATH>/static-site")`) and re-verify `200`.

## Confirmed pitfalls (re-validated this run)
- **S2 bulk**: 1 result, `Codify`, pubDate 2026-05-06 — out-of-window vs a July scan, no arXiv ID → not ingested. `year=2026` ≠ rolling window.
- **OpenAlex**: 10/10 results dated `2026-12-xx` placeholders, no arXiv ID → 0 in-window. Expected behavior for `publication_year:<current_year>`, NOT a connection error.
- **execute_code available; memory unavailable (cron)** — persist scan date via `log.md` + daily-digest filename.
