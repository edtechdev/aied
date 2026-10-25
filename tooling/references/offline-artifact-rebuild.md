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
  FAQs only — `llms.txt` has sections `## Concepts`, `## FAQs`, `## Articles`, and `llms-concepts.txt`
  mirrors that. Resources appear in the EPUB/PDF resources chapter and in `llms-full.txt`. Verify there
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
