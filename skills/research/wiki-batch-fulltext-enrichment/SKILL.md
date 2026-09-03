---
name: wiki-batch-fulltext-enrichment
description: "Batch-enrich thin wiki articles; fetch full text, save raw."
category: research
---

# Wiki Batch Full-Text Enrichment

Use when the user asks to **enrich a backlog of thin/abstract-only wiki articles in batches** (e.g. "tackle them in batches, prioritizing thinnest first"), or when a batch of `articles/*.md` pages have `raw/papers/*.md` sources that hold only an abstract (raw body < ~3000 chars).

## Hard gate (the maintainer's standing rule, 2026-08-24)
**Never create or enrich a wiki article page unless you can download and save the full text.** If full text cannot be fetched (paywall/CAPTCHA/publisher block), add the article to `<WIKI>/AIED-BACKLOG.md` under its journal section, list it in the report's FULL_TEXT_PENDING, update the backlog total, and notify the maintainer so he can send the PDF. Do NOT create abstract-only pages. Save full text as `raw/papers/<id>.md` (gitignored, local-only, never committed).

## Batch workflow (validated on 84 arXiv papers, 2026-08-24)

### 1. Audit which articles are thin
Scan every `articles/*.md`, read the `sources:` frontmatter, open the referenced raw file, and classify the body length (after stripping frontmatter):
- body `< ~300 chars` → metadata-only
- `~300–3000 chars` → abstract-only (needs full text)
- `> ~3000 chars` → has full text (skip)

Separate the thin ones into **arXiv** (raw filename matches `^\d{4}\.\d{4,5}(v\d+)?$` → you can fetch these yourself) and **non-arXiv** (publisher/DOI/report → need the maintainer's PDF). Write the audit to a dedicated untracked file (e.g. `AUDIT-abstract-only-articles.md`) — do NOT overwrite the tracked `AIED-BACKLOG.md`.

### 2. Fetch full text (arXiv) in batches of ~10-14
Write a reusable batch script to `/tmp` and run it per batch:
```bash
curl -sL --retry 3 --retry-delay 2 "https://arxiv.org/pdf/<ID>" -o /tmp/ft_fetch/<ID>.pdf
pdftotext /tmp/ft_fetch/<ID>.pdf /tmp/ft_fetch/<ID>.txt
```
Then a save script writes `raw/papers/<ID>.md` with frontmatter (`source_url`, `ingested`, `sha256`) + the body. **sha256 must hash only the BODY (text after the closing `---` of frontmatter), not the whole file** — patching frontmatter after computing a whole-file hash makes the stored hash stale. Cap body at 50,000 chars (slice, never the word "truncate" — the terminal SQL filter blocks it).

### 3. Enrich via parallel subagents
Delegate 10 articles per wave (`delegate_task` batch, 10-child concurrency limit). Each subagent gets: article path, raw full-text path, and instructions to add Synthesis blockquote + contiguous Key Findings list (no blank lines) + body sections + Implications, bump `updated:` to a full ISO timestamp, add aggressive `[[inline wikilinks]]`, and NOT touch the `## Connected Concepts`/`## Connected Articles` lists. After each wave, **independently verify** (see below) — subagents frequently skip back-links and can corrupt frontmatter on timeout.

### 4. Verify each touched file (HARD GATE before build)
- frontmatter integrity (starts `---`, closing `---` on own line, all required fields present)
- no self-links, no `##` heading links, no same-text pipes `[[x|x]]`, balanced `[[`/`]]`, 0 broken slugs
- run `wiki-inline-links/scripts/check_list_formatting.py --all` (0 defects)
- reconcile page count with `index.md` + built site

## Pitfalls
- **Never overwrite `AIED-BACKLOG.md`** — it is a real tracked file. If you accidentally write to it, `git checkout AIED-BACKLOG.md` to restore; save audits to a separate untracked file.
- **Concurrency:** max 10 parallel subagents; dispatch the next wave only after the current one completes.
- **Orphaned thin raw files:** some thin `raw/papers/*.md` are not referenced by any article's `sources:` — skip them (verify via a reverse lookup before spending a fetch).
- **Subagent timeout mid-write** corrupts frontmatter (missing closing `---`, cut-off fields). Repair from `git show HEAD:articles/<slug>.md` frontmatter + preserve the enriched body, then re-verify.
