---
name: offline-edition-release-publication
description: "Use when publishing EPUB/PDF/llms release assets."
category: research
version: 1.0.0
metadata:
  <AGENT_KEY>:
    tags: [epub, pdf, release-assets, offline, verification]
    related_skills: [wiki-epub-export, offline-edition-locale-rebuild, offline-edition-rebuild-verification]
---

# Rebuilding and publishing offline editions

Companion to the exporter skills, which carry the build machinery, chapter structure and TOC rules.
This file holds what verification and publication cost: the flags that look right and are not, and
the checks that catch an edition which builds cleanly and is still wrong.

## 1. Build from `dist/`, and never beside a site build

```bash
<PYTHON> tooling/build-epub.py --output-dir .artifacts/offline/<id>            # default edition
<PYTHON> tooling/build-epub.py --locale <loc> --output-dir .artifacts/offline/<loc>-<id>
```

Do NOT pass `--work-dir` for either form. It defaults to `dist/`, which is where `npm run build` leaves
the rendered pages the exporter reads. Pointing it at a fresh `.artifacts/.../work` directory aborts with
`no chapter body for src/pages/index.astro … Run the site build first`, because nothing is staged there —
the directory exists but holds no built pages. The correct sequence is: content edits → `npm run build`
(green, page count checked) → `build-epub.py` → `generate-llms-files.py [--locale]`.

Run the exporter alone. `astro build` clears `dist/`, including the intermediate `aied-export.md` the
builder writes between EPUB and PDF, so a concurrent site build kills the PDF step after the EPUB has
already been replaced. Do not edit content while the exporter runs either: it reads the corpus at start.

## 2. Verify against the artifact being replaced

Download the previous release copy first (`gh release download <tag> -R <owner>/<repo> --pattern
aied.<loc>.epub --dir <tmp>`), then compare new against old:

- **PDF pages and extracted words must grow** when content was added. A page count that falls while the
  nav set looks intact means a chapter was dropped, not compacted.
- **Nav titles: superset.** Extract `nav.xhtml`, strip numbering (`re.sub(r'^\d+(\.\d+)*\.\s*', '', t)`),
  and compare the two sets. Anything removed is a lost chapter unless it is the same page under another
  language.
- **Nav entries longer than ~150 characters.** That is a paragraph promoted to a heading, not a heading.
  A lone `-` line sitting under a paragraph is a CommonMark setext underline; keep the dash above its
  list item and re-check. Parity and block-count gates do not see this, because a dash moved one line
  down changes no block, bullet or link count.
- **Titles in the wrong language.** Concurrent builds let one edition inherit another's text: an English
  edition once shipped 80 Spanish nav titles while its body stayed English, with every gate green. Count
  titles matching another locale's morphology (`ción`, `Aprendizaje`, `del `) or script; must be 0.
- **Duplicate nav titles** must stay 0, and `/Lang` must match the edition (`en-US`, `es`, `fr`, …) —
  read it with `pikepdf`, since `pdfinfo` does not print it.
- **Connected-section counts** come from the source corpus, not a remembered number, and are localized in
  translated editions (grepping English headings there returns 0 and is not a defect).

## 3. Publish in place, then verify the release itself

```bash
publish-offline-editions.py --locales <loc[,loc]> --assets-dir <staged> --dry-run --refresh-metadata
publish-offline-editions.py --locales <loc[,loc]> --assets-dir <staged> --publish --refresh-metadata
```

- **Keep the canonical filenames**: `aied.epub`, `aied.pdf`, `aied.<loc>.epub`, `aied.<loc>.pdf`,
  `llms*.txt`. Replacing bytes under the same names is what keeps every existing link and reader URL
  working; never introduce a versioned or dated name for a refresh.
- A rebuild request is not publication authorization. `--publish` needs an explicit ask.
- **Download every canonical asset back and compare SHA-256** against the staged copies. The publisher's
  `published and verified N asset(s)` line reports its own upload step, not the served file.
- **Prune leftovers.** The publisher promotes by renaming the old canonical to a run-scoped backup; list
  the release for `.backup-*` / `.staging-*` assets, confirm each has a live canonical twin, then delete
  by asset id (`gh api -X DELETE repos/<owner>/<repo>/releases/assets/<id>`).
- **Regenerate the site manifest** (`gen-offline-manifest.py`) and commit catalog + manifest in the same
  reviewable change, or the site prints stale sizes and the manifest gate fails.

## 4. Reporting

Give sizes, SHA-256 prefixes, page counts, and the stable release URLs. Do not attach the binaries in
chat. If the edition was not published, say the site still serves the previous file rather than implying
it is live. EPUB/PDF are rebuild-on-demand: never fold them into a routine content commit or a translation
loop.
