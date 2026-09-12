---
name: wiki-batch-fulltext-enrichment
description: "Batch-enrich thin wiki articles; fetch full text, save raw."
category: research
---

# Wiki Batch Full-Text Enrichment

Use when the user asks to **enrich a backlog of thin/abstract-only wiki articles in batches** (e.g. "tackle them in batches, prioritizing thinnest first"), or when a batch of `articles/*.md` pages have `raw/papers/*.md` sources that hold only an abstract (raw body < ~3000 chars).

## Hard gate (standing rule, 2026-08-24)
**Never create or enrich a wiki article page unless you can download and save the full text.** If full text cannot be fetched (paywall/CAPTCHA/publisher block), add the article to `AIED-BACKLOG.md` under its journal section, list it in the report's FULL_TEXT_PENDING, update the backlog total, and notify the maintainer so they can supply the PDF. Do NOT create abstract-only pages. Save full text as `raw/papers/<id>.md` (gitignored, local-only, never committed).

## Batch workflow (validated on 84 arXiv papers, 2026-08-24)

### 1. Audit which articles are thin
Two different failure modes, and they need different triage:

**(a) The article page is thin.** Scan every `articles/*.md` and measure the *narrative* body — everything from the end of the frontmatter to the first `## Connected`/`## Citation` heading — in **words, not characters** (character counts are dominated by wikilinks and frontmatter). Real audit of 1,142 articles: pages last edited before mid-August 2026 clustered at 70-300 narrative words, ~200 of them with two headings or fewer and ~40 with no prose paragraphs at all (bullets only). Practical threshold: **under ~300 words is a rewrite, not a touch-up.**

**(b) The raw source is truncated.** Raw files ingested before the 250k cap was adopted stop at ~50,300-50,800 characters and almost always cut off **before the results/discussion/limitations** — the exact material enrichment needs. On the real corpus, 320 of 1,167 raw sources sat in that band (the 40th-60th size percentiles). A thin article over a 50k-truncated source cannot be fixed by reading harder: refresh first (step 1c). Quick test — read the last ~400 characters of the raw file; if it ends mid-section, it is truncated.

Separate the remaining thin ones into **arXiv** (raw filename matches `^\d{4}\.\d{4,5}(v\d+)?$` → fetch yourself) and **non-arXiv** (publisher/DOI/report → need the PDF). Write the audit to a dedicated untracked file (e.g. `AUDIT-abstract-only-articles.md`) — do NOT overwrite the tracked `AIED-BACKLOG.md`.

### 1c. Refresh a 50k-truncated raw from the source PDF
Same fetch as below, but slice the saved body to the **250k** cap (not 50k):
```bash
curl -sL --retry 3 --retry-delay 2 "https://arxiv.org/pdf/<ID>" -o /tmp/<ID>.pdf
pdftotext /tmp/<ID>.pdf /tmp/<ID>.txt
```
Rewrite `raw/papers/<ID>.md` keeping `source_url` and `ingested`, adding `updated:`, a `version:` note recording what the previous copy was missing, and a `sha256` recomputed over the NEW body. Then enrich the article from the restored results/limitations. Raw files with a slug-style name may be structured *extractions* (abstract + key results + limitations) rather than paper text — legitimate content, but don't claim more than they contain.

### 2. Fetch full text (arXiv) in batches of ~10-14
Write a reusable batch script to `/tmp` and run it per batch:
```bash
curl -sL --retry 3 --retry-delay 2 "https://arxiv.org/pdf/<ID>" -o /tmp/ft_fetch/<ID>.pdf
pdftotext /tmp/ft_fetch/<ID>.pdf /tmp/ft_fetch/<ID>.txt
```
Then a save script writes `raw/papers/<ID>.md` with frontmatter (`source_url`, `ingested`, `sha256`) + the body. **sha256 must hash only the BODY (text after the closing `---` of frontmatter), not the whole file** — patching frontmatter after computing a whole-file hash makes the stored hash stale. Cap the body at **250,000 chars** with a slice (`body[:250000]`, never the word "truncate" — the terminal SQL filter blocks it); 250k preserves essentially every real paper, and the older 50k convention is what created the truncation backlog described in step 1b.

### 3. Enrich via parallel subagents
Delegate 10 articles per wave (`delegate_task` batch, 10-child concurrency limit). Each subagent gets: article path, raw full-text path, and instructions to add Synthesis blockquote + contiguous Key Findings list (no blank lines) + body sections + Implications, bump `updated:` to a full ISO timestamp, add aggressive `[[inline wikilinks]]`, and NOT touch the `## Connected Concepts`/`## Connected Articles` lists. After each wave, **independently verify** (see below) — subagents frequently skip back-links and can corrupt frontmatter on timeout.

### 4. Verify each touched file (HARD GATE before build)
- **Ground every number in the raw source.** Extract every numeric token from the enriched body and confirm each appears in the raw file (accept leading-dot p-values such as `.001`, and digits split by PDF line wraps). Target zero ungrounded numbers, and investigate each miss by grepping the raw directly. This catches real defects: a hand audit found an article claiming "78% domain accuracy vs 12% for the base model" when neither number occurs anywhere in the paper. Corpus-wide runs produce many false positives (p-values, table columns split across lines, enumeration digits) — treat bulk output as triage to hand-check, never as proof.
- **Carry the paper's own caveats, not just its numbers.** If the study disclaims causality (a bundled multi-component intervention, a retrospective pre-test instrument), the article must say so; a bare effect size presented as evidence for the tool is a rewrite defect. Subagents reliably drop this unless the prompt states it.
- frontmatter integrity (starts `---`, closing `---` on its own line, all required fields present, `updated:` a full quoted ISO timestamp — the bare-date form `"2026-08-15"` is widespread on pre-August pages and violates the rule)
- no self-links, no `##` heading links, no same-text pipes `[[x|x]]`, balanced `[[`/`]]`, 0 broken slugs
- run `wiki-inline-links/scripts/check_list_formatting.py --all` (0 defects)
- reconcile page count with `index.md` + built site

## Pitfalls
- **Never overwrite `AIED-BACKLOG.md`** — it is a real tracked file. If you accidentally write to it, `git checkout AIED-BACKLOG.md` to restore; save audits to a separate untracked file.
- **Concurrency:** max 10 parallel subagents; dispatch the next wave only after the current one completes.
- **Orphaned thin raw files:** some thin `raw/papers/*.md` are not referenced by any article's `sources:` — skip them (verify via a reverse lookup before spending a fetch).
- **Subagent timeout mid-write** corrupts frontmatter (missing closing `---`, cut-off fields). Repair from `git show HEAD:articles/<slug>.md` frontmatter + preserve the enriched body, then re-verify.
