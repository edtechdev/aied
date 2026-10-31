# Offline artifact and release verification

The wiki publishes committed local artifacts beside the site: `public/aied.epub`, `public/aied.pdf`,
`public/llms*.txt`. They are rebuilt only on explicit request and never by CI or a scan, so every
rebuild is a release step with its own verification. This file is the checklist for that step.

## Rebuild sequence (do not reorder)

1. Content edits first. The exporter reads the corpus when it starts, so a page written mid-run is
   missing from the file it produces.
2. `npm run build` (the site) on its own.
3. `python3 tooling/build-epub.py` on its own, in the BACKGROUND with a completion notification.
   It writes `dist/aied-export.md`, then the EPUB, then the PDF from that same markdown; run it
   concurrently with `astro build` and `dist/` is cleared between the two stages, leaving a fresh
   EPUB beside a stale PDF.
4. `python3 tooling/scripts/generate-llms-files.py` (add `--locale` for a translated edition).
5. Verify (below), then commit the artifacts and push only with explicit approval.

Confirm no site build or content edit is in flight before starting; check with `pgrep -af "astro|build-epub"`.

## Why a rebuild is now minutes, not half an hour

`build-epub.py` parses the markdown export in parallel chunks (`tooling/pdf_parallel.py`,
`AIED_PARALLEL_CHUNKS`, default 8). Measured on the English export: pandoc's parse of the whole
7 MB / 36,000-line file is **757 s**, and it is that single parse — not WeasyPrint — that dominates
both stages, because the cost grows superlinearly with document size. Split into 8 chunks the same
parse takes **30-60 s**, and WeasyPrint's pagination of the assembled book is another **89 s**. A
full English rebuild went from **24.9 min to 3.9 min**.

Two properties make this safe rather than clever, and both must be re-checked if the module changes:

* **The output is one document, not N merged PDFs.** Chunks are parsed to HTML and reassembled with
  the front matter, an explicit title block and one TOC before a single WeasyPrint pass, so TOC
  anchors, `` target-counter`` page numbers and internal links stay continuous.
* **Ids and shortcut references are pinned before the split.** Pandoc's auto ids are unique per
  parse, so a repeated heading (`Connected Concepts` on every concept page) gets `-1`, `-2` … in a
  full parse but not in a chunk; and `implicit_header_references` cannot resolve `[Some Heading]`
  across chunks. `assign_heading_ids()` and `resolve_shortcut_refs()` fix both up front, and
  `markdown-tex_math_dollars` is dropped (the corpus' single `$…$` is rewritten to `\(…\)`) because
  that extension is what triggers the superlinear parse.

Verify a chunked build against the artifact it replaces, not against itself: extract text from both
PDFs (`pdftotext`) and compare word multisets plus page counts, which must match exactly; for the
EPUB compare per-`.xhtml` word counts and the file count. `AIED_PARALLEL_CHUNKS=1` restores the old
single-pass path if a difference ever needs isolating.

## What to verify, and why each check exists

- **Glued headings in the export** — pandoc will not let an ATX heading interrupt a paragraph or list
  item, so a heading glued to the previous line is swallowed as literal text and loses its TOC entry.
  The check must be LINE-BASED: `[l for l in md.split("\n") if re.search(r"[^ \t]\s+#{1,6} ", l)]`
  must be empty. A Python `re` over the whole file with `\s+` matches the newline before every
  ordinary heading and reports thousands of false positives — the equivalent grep is line-based for
  exactly this reason.
- **Connected-section counts against the source, never a remembered number** —
  `#### Connected Articles` in the export must equal `grep -l '^## Connected Articles' content/en/concepts/*.md | wc -l`.
  `#### Connected Concepts` covers concept pages AND resource pages, so the two counts are different
  populations and a gap between them is expected.
- **EPUB members parse** — `zipfile` to extract into a fresh unique directory, then
  `xml.etree.ElementTree.parse()` over every `.xhtml`/`.opf`/`.ncx`. `xmllint` is not installed, and a
  sweep with it reports every member as malformed.
- **Nav titles** — strip the injected `1.1.1.` numbers, then `collections.Counter` over the entry text.
  Two DISTINCT pages can legitimately share a title (`administrators` / `administrator`), so confirm a
  duplicate against the source tree before treating it as the H1-dedup bug.
- **PDF** — `pdfinfo` page count moves with content; `/Lang` is set; compare the on-disk size from
  `stat -c%s` and not the size the builder logs, because pikepdf rewrites the file afterwards to set
  `/Lang` and the committed file is legitimately smaller.
- **Live files** — after deploy, `curl -o /dev/null -w '%{http_code} %{size_download}'` each artifact
  URL and match the byte counts against `public/`, then open the SERVED EPUB and confirm the page you
  added is inside it (`zipfile` plus a string search over members). A 200 says the file is served; it
  does not say it is the file you built.

## Things that look like defects and are not

- **A new resource page is absent from `llms.txt`.** The llms generator emits articles, concepts and
  FAQs only — `llms.txt` has sections `## Concepts`, `## FAQs`, `## Articles`. `llms-concepts.txt`
  carries the **concept pages alone** (no FAQ and no resource section at all), while `llms-full.txt`
  is the file that includes FAQs. Resources appear in the EPUB/PDF resources chapter and in
  `llms-full.txt`. Verify there
  before concluding the rebuild missed a page; if the index should cover resources, that is a change to
  the generator, not a defect in the artifact.
- **The PDF is smaller than the logged size** after the build — pikepdf, see above.
- **A duplicated nav title** between two genuinely distinct pages — see above.

## Rules that keep the release honest

- **Rebuild the locale you were asked for, and only it.** `generate-llms-files.py` and `build-epub.py`
  take a locale; the Spanish artifacts are separate committed files and a rebuild of the English set
  must leave them untouched. State in the commit message which edition moved.
- **Large binary artifacts make a diff unreviewable**, so the pre-push personal-information review
  covers the text artifacts (`llms*.txt`) and the message, and the verification set above stands in for
  reading the EPUB and PDF.
- **Report the artifact state you left behind.** If content was ingested after the rebuild, the offline
  editions trail the site again; say so rather than implying they are current.
