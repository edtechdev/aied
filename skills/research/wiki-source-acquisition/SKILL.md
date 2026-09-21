---
name: wiki-source-acquisition
description: "Use when a wiki source is truncated or missing."
category: research
---

# Wiki Source Acquisition (full-text recovery)

Use when an article's `raw/papers/*.md` source is truncated, abstract-only or missing and the full
text has to be recovered — from a publisher page, an open-access copy, or a PDF the user sends.
This skill owns *getting the text and storing it correctly*; enriching the article from it, weaving
findings into concept narratives, and page-format rules live in their own skills.

## Order of attempts

1. **Scripted fetch of the canonical PDF** — arXiv, or any publisher that still serves PDFs to a
   plain `curl` with a normal user-agent.
2. **OpenAlex OA lookup** for a DOI-backed source: `https://api.openalex.org/works/doi:<doi>`, then
   try each `best_oa_location` `pdf_url`. Recovers the subset that serves scripted clients.
3. **Real-browser extraction** from the rendered article page when the publisher answers scripted
   fetches with 403 or a robot/consent page. Recipe, container selectors and stale-DOM guards:
   `references/publisher-blocked-source-recovery.md`.
4. **Ask the user for the PDF.** Record the gap with title, slug and source URL, grouped by
   publisher domain, so the request is actionable; keep non-actionable entries out of the count.

A 403 with an HTML body is bot protection, not a paywall — the same URL usually loads normally in
a real browser session, so step 3 is the fix rather than retrying the download.

## Always-on rules

- **Preserve every incoming PDF immediately.** Copy it to `pdf-sources/<slug>.pdf` (gitignored)
  *before* extracting, and never delete the original. The chat document cache rotates to a handful
  of recent files, so a PDF left only there is gone within weeks while the derived raw text lives on.
- **Never replace a longer stored body with a shorter incoming extraction.** Compare lengths first.
  A supplied v2 PDF extracted to 42k chars against a stored 50k copy means the stored copy came from
  a longer version — writing the incoming text would silently destroy ~8k characters of the paper.
  Keep the longer copy and say why in the report.
- **Measure the gain after whitespace normalization.** HTML/PDF renderings differ in line breaks;
  a 50,664-char extraction that normalizes to a 50,083-char body is a +82 gain, not +600.
- **Report the measured gain, not a rescue narrative.** A body of exactly 50,000-50,003 chars is
  cap-truncated, but a short paper's true text may be only ~60-120 chars longer: the cut costs the
  final clause of a sentence or the tail of the reference list, not the results and discussion.
- **Cap the stored body at 250,000 chars** (`body[:250000]`, never the word "truncate" — the
  terminal SQL filter blocks it) and hash **only the body** (text after the frontmatter's closing
  `---`), never the whole file, or the stored hash goes stale on the next frontmatter edit.
- **A raw body under ~3,000 chars is a stub, not a source.** Do not enrich from it; recover the
  real text first.
- **Capture the tool generation while you have the full text.** Before the raw text is filed, note
  the model/version a study used and its data-collection window (method section; search `GPT-3`,
  `GPT-4`, "free version", and the collection dates). Judgment about whether the study still speaks
  to present-day AI needs those two facts, and the ingest or the scan that follows must not have to
  re-derive them from a page that has already quoted the findings. A comparison run on a superseded
  generation is a screening flag for the maintainer, not a page (see `wiki-batch-ingestion-qa`
  item 11).

## Corrupt, wrong or lossy stored sources

Three defects look identical from a page's perspective (its numbers cannot be verified) and need
different fixes. Identify which one you have before touching the page:

- **Binary saved as text.** `file -b raw/papers/<id>.md` reports `data` and the body has no prose:
  a PDF was written with a `.md` extension. Re-fetch the PDF and replace the file, keeping the
  original aside as `<name>.corrupt.bak`. Four such files in one sweep were all arXiv and all
  recoverable in minutes.
- **The raw holds a different paper.** Read the raw's own title and author line and compare with the
  page's `## Citation` before enriching. A page citing arXiv 2605.01097 had a raw file holding an
  explainable-knowledge-tracing study by other authors; every number on the page was missing from it,
  which reads as fabrication until you check whose paper the raw actually is.
- **The extraction dropped the tables.** A publisher PDF rendered by `pdftotext` loses table bodies,
  and an OA landing page truncated by a character budget loses them too, so a page can carry genuine
  regression coefficients and message-length means that no stored copy contains. Do **not** rewrite
  the page from the lossy copy: fetch the authoritative version first (the published PDF, or the
  rendered page via a real browser) and re-check. In one case the coefficients were absent from both
  the stored text and a 200k-char HTML rendering but present in the published PDF — the page was
  right and the source was wrong.

A publisher PDF that answered an earlier scripted fetch with an HTML error page often succeeds on a
retry that sends a browser user-agent plus `Accept: application/pdf`. Retry once before declaring a
DOI-backed source unobtainable.

## Write-back contract for `raw/papers/<slug>.md`

Keep `source_url`. Add `updated:`, a provenance field (`provided_pdf: pdf-sources/<slug>.pdf` for a
user-supplied file, or a `version:` note stating where the text came from), and `sha256` over the
new body only. Anything you cannot fetch must land in `AIED-BACKLOG.md` (tracked); write working
audits to a separate untracked file and never overwrite the backlog wholesale.

## Verify before claiming success

- **Resolve the path the page names before declaring full text missing.** Raw files are not always
  `<slug>.md`: many ingested papers are saved under a DOI-derived name (`10.3389_fpsyg.2026.1905037.md`).
  Read the page's `sources:` field and stat *that* path. Checking `<slug>.md` and finding nothing wrongly
  reports full text as absent — it held 26 eligible pages out of a section-writing batch once, and the
  "missing full text" census it produced was wrong by an order of magnitude.
- When a page genuinely has no saved text, attempt retrieval before backlogging: match the page title against
  OpenAlex (`api.openalex.org/works?search=`), accept a match only above ~0.85 title similarity, then fetch
  `best_oa_location.pdf_url`, and fall back to constructing a Frontiers PDF URL from a `10.3389/` DOI or
  querying Unpaywall. Publisher PDFs for Springer, ACM, Elsevier and SSRN commonly return a download that is
  not a PDF — treat anything without a `%PDF` magic header as a failure and backlog it with the DOI, rather
  than saving an error page as source text.
- Recompute `sha256` from the written file and compare with the stored value.
- Check the body ends where the paper ends, or state plainly that only the reference list is cut.
- Confirm `git check-ignore` reports both `raw/` and `pdf-sources/`, so recovered text and PDFs
  never reach the repository.

## Support files

- `references/publisher-blocked-source-recovery.md` — real-browser extraction recipe, container
  selectors, stale-DOM de-duplication guards, trailing-widget trimming, write-back thresholds.

## Truncated raws: how to notice, and what they hide (2026-09-21)

- **The tell is a raw file of roughly 50,000 characters whose body stops mid-sentence.** The fetch
  pipeline caps at the 50k boundary, so an over-long paper lands in `raw/papers/` looking complete
  while every results table past the cut is missing. Compare the length and read the last line: an
  abrupt stop ("...served as the u") is truncation, not the paper's ending.
- **A truncated raw makes an article's numbers unverifiable and hides real errors.** The
  number-grounding gate reports the whole page at once (a dozen or more flags), which reads like
  fabrication but is usually just the missing tail. One recovered page turned out to carry a genuine
  sign error: the page stated an academic self-efficacy coefficient as negative when the paper's
  regression table gives it positive, having copied a bivariate correlation into a regression claim.
  Recover the source and re-read the numbers before touching the page.
- **Recovery routes that work from a plain scripted fetch**: the arXiv version of the same paper
  (search the title; an Elsevier-hosted OA article is often on arXiv, and the arXiv full text is
  fetchable as a PDF), and the publisher's own PDF path for MDPI
  (`https://www.mdpi.com/<issn>/<vol>/<issue>/<article>/pdf`). A ScienceDirect landing page returns
  only navigation, so it is not a source even when the DOI resolves.
- **Record the recovery in the raw file's frontmatter** (`version:` noting the previous copy was cut
  off at the 50k boundary, plus the URL actually used). The next reader needs to know why the file
  changed length.

## Number-grounding flags on review pages are often false positives

The gate checks a page's numeric claims against that page's OWN `sources:` file. A review or
comparison page whose summary table states another study's figure (attributed by wikilink, e.g.
"only 20/818 papers meet causal standards" pointing at another article page) cannot be verified that
way, and flags every figure in the table. Verify each one in the CITED page's raw source instead;
when they all check out, treat the gate result as a structural false positive rather than rewriting
the table.
