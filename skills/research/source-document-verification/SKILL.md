---
name: source-document-verification
description: "Use when handed a document to save, cite, or ingest."
category: research
---

# Source Document Verification

Use when someone hands you a document (PDF, scan, preprint, publisher article) and you are about to
save its text, quote it, cite it, or ingest it into a knowledge base or notes. Extraction tooling is
another skill's job (`ocr-and-documents` covers *how* to get text out); this skill covers what must
be true about the text and its provenance *before* you reuse it.

Run the steps in order. Each is cheap, and each has shipped wrong data downstream.

## 1. Extract, then sanity-check completeness

Extract with whatever fits the file (`pdftotext <file> -` when the PDF has a text layer; pymupdf or
marker when you need markdown, tables, or OCR). Then compare the extraction size against the page
count before treating it as the document:

- A 13-page research article is roughly 30–130KB of text.
- A few KB means you extracted a landing page, a cover sheet, or an abstract stub — not the paper.
- Tens of MB of bloat usually means duplicated reference dumps or a doubled text layer.

If real full text is unobtainable, say so and route the item to a pending/backlog list. Never
substitute an abstract for the document and then present findings as though they came from it.

## 2. Strip boilerplate that carries personal data

Publisher PDFs (Wiley, Sage, Springer, Elsevier) stamp every page with a download line naming the
reader:

```
14693518, 2025, 6, Downloaded from https://onlinelibrary.wiley.com/doi/... by Jane Doe -
Some University, Wiley Online Library on [16/09/2026]. See the Terms and Conditions ...
```

That stamp repeats the name and institution dozens of times across the extraction, where it gets
pulled into summaries, quotations, saved notes, and commit messages by accident. Drop those lines at
extraction time, before the text is written anywhere:

```python
lines = [l for l in txt.split("\n") if "Downloaded from" not in l]
```

Then verify with a case-insensitive grep for the surname and the institution: it must return 0
matches. Do this even when the destination is gitignored or scratch — the same text usually flows
onward into tracked or shared artifacts, and a stamp is far cheaper to remove at the source.

Also strip the other extraction noise that corrupts downstream prose and search: running headers and
footers, page-number gutters, and `Page N of M` fragments. Keep them only if the citation needs a
page range, and take that range from the header rather than leaving the header in the body.

## 3. Verify citation metadata against the document's own header

The header and copyright block are the authority. Read them; do not infer:

- **Volume, issue, and pages come from the document itself** (`Br Educ Res J. 2025;51:2777–2809.`),
  not from the journal's usual numbering and not from the file name. A filename containing `_2025_`
  does not settle the citation year.
- **When the copyright line and the volume/issue year disagree** (a `© 2025` notice inside a 2026
  volume), cite the volume/issue year. If the destination already cites the same work elsewhere,
  match that existing year so the two entries agree.
- **Confirm the DOI by resolving it** and reading the *final* URL:

  ```bash
  curl -sI -L -o /dev/null -w '%{http_code} %{url_effective}\n' https://doi.org/<doi>
  ```

  A **403 is a publisher bot-block on a valid DOI** (Sage returns one routinely) and is not evidence
  the DOI is wrong. A 404, or a landing page for a different article, means it is wrong. Never
  fabricate a DOI or URL — if there is no public copy, leave the reference unlinked rather than
  inventing one.
- **A journal's publisher can change.** A plausible-looking host for a recent volume can 404 while
  the article is live elsewhere, so resolve the DOI instead of guessing the publisher's URL
  structure from an older volume.

## 4. Then reuse the text

Only after 1–3: save the raw text, write summaries, quote, or build citation entries. Record the
source URL, the DOI, and any version information alongside the saved text so a later session can
re-verify it without re-fetching.

## Pitfalls

- **A gitignored destination does not make PII safe.** Scratch directories are a staging area, not a
  boundary; the text keeps moving after you save it.
- **Bibliographic facts are the easiest thing to fabricate by accident.** Author lists, volume,
  issue, pages, and title punctuation all look plausible when reconstructed from memory or from a
  truncated header — copy them from the document.
- **Names in the source are not PII to scrub.** Cited authors, quoted participants, and third-party
  names belong in the text; the publisher's reader stamp is the leak. Do not conflate the two when
  scanning.
- **Extraction noise reaches search and prose, not just appearance.** Page gutters and repeated
  headers pollute text search, quotation, and any downstream chunking or indexing, so strip them
  even when the file is never rendered.
