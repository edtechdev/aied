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

## Write-back contract for `raw/papers/<slug>.md`

Keep `source_url`. Add `updated:`, a provenance field (`provided_pdf: pdf-sources/<slug>.pdf` for a
user-supplied file, or a `version:` note stating where the text came from), and `sha256` over the
new body only. Anything you cannot fetch must land in `AIED-BACKLOG.md` (tracked); write working
audits to a separate untracked file and never overwrite the backlog wholesale.

## Verify before claiming success

- Recompute `sha256` from the written file and compare with the stored value.
- Check the body ends where the paper ends, or state plainly that only the reference list is cut.
- Confirm `git check-ignore` reports both `raw/` and `pdf-sources/`, so recovered text and PDFs
  never reach the repository.

## Support files

- `references/publisher-blocked-source-recovery.md` — real-browser extraction recipe, container
  selectors, stale-DOM de-duplication guards, trailing-widget trimming, write-back thresholds.
