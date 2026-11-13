---
name: offline-edition-locale-rebuild
description: "Use when rebuilding one locale's EPUB/PDF files."
category: research
metadata:
  <AGENT_KEY>:
    tags: [epub, pdf, localization, release-assets, offline]
    related_skills: [wiki-epub-export, content-page-locale-refresh, offline-book-localization]
---

# Rebuilding ONE locale's offline edition

When the user says "rebuild the <language> files" after a translation wave, the unit of work is that
locale's four catalog entries — `epub`, `pdf`, `llms`, `llmsConcepts` — not the whole release. The
full-release rebuild and the notice-page/TOC/CSS machinery live in `wiki-epub-export`; this skill is
the single-locale path and its failure modes.

## Procedure

1. **Build the edition and the llms dump for that locale only.**

   ```bash
   <PYTHON> tooling/build-epub.py \
     --locale <loc> --output-dir .artifacts/offline/<loc>-<build-id>
   <PYTHON> tooling/scripts/generate-llms-files.py --locale <loc>
   ```

   Never `--all-buildable`: it regenerates every locale and spends an hour on files nobody asked for.

2. **Leave `--work-dir` at its default.** The translated edition reads its chapter titles from BUILT
   pages at `<work-dir>/<locale>/index.html` and `<work-dir>/<locale>/ai/index.html`, so pointing
   `--work-dir` at the fresh artifacts folder aborts at once with
   `build-epub: no built <loc> pages under …/work/<loc>/. Run the site build first`. `--work-dir` is
   for builds that stage `dist/` elsewhere; a release build needs only `--output-dir`. The build needs
   a completed site build in `dist/` and must not run beside one (`astro build` clears `dist/` and
   deletes the intermediate export between the EPUB and PDF steps).

3. **Verify `/Lang` under the configured interpreter.** `pikepdf` lives in the interpreter named by
   `agent.python` in `wiki.config.yaml`; a bare `python3` from the agent venv raises
   `ModuleNotFoundError: pikepdf`, which silently turns the check into a skipped step. Expect the locale code (`de`, `ja`, …) and a plausible page count.

4. **Stage the four files and filter the publisher to that locale.** `publish-offline-editions.py`
   validates every catalog entry it is pointed at, so a bare `--dry-run` dies on the first asset that is
   not on disk (`missing regular asset: …/public/aied.epub`) when only one locale was rebuilt. Copy the
   four files into one directory and run:

   ```bash
   publish-offline-editions.py --locales <loc> \
     --formats epub,pdf,llms,llmsConcepts \
     --assets-dir <staged> --dry-run --refresh-metadata
   ```

   It must print `4 asset(s) ready` and `No release, asset, catalog, or tracked file was changed`.
   Publication itself needs an explicit request; a rebuild request alone is not authorization.

5. **Prove nothing was lost by diffing against the artifact being REPLACED, never by reading the new
   one.** Download the previous release copy first:

   ```bash
   gh release download <tag> -R <owner>/<repo> --pattern 'aied.<loc>.epub' --dir <tmp>
   gh release download <tag> -R <owner>/<repo> --pattern 'aied.<loc>.pdf' --dir <tmp>
   ```

   `gh` outside a repo checkout fails with `GIT_DISCOVERY_ACROSS_FILESYSTEM` unless `-R` names the repo.
   Then compare: PDF page count and extracted word count (both must grow with the content), nav entry
   titles from the new EPUB must be a SUPERSET of the old nav titles, and duplicate nav titles and
   malformed XHTML must both be 0. A file that grows while dropping a chapter title is exactly the
   failure a size check alone misses.

6. **Reconcile the export's section counts against the source corpus**, not a remembered number:
   the Connected Articles heading appears once per concept page, the Connected Concepts heading once per
   concept PLUS once per resource page. In a translated edition those headings are localized, so
   grepping the English strings returns 0 and is not a defect.

## Pitfalls

- **Never commit the binaries.** Release builds go to `.artifacts/offline/<id>/`; `public/` holds only
  the llms staging files the publisher reads. The manifest/catalog is updated by the publisher, not by
  hand, and the site keeps serving the previous files until publication — say so in the report instead
  of implying the rebuild is live.
- **A rebuild does not refresh the site manifest by itself.** If the edition is published, run
  `gen-offline-manifest.py` in the same reviewable change or the site prints stale sizes and the
  offline-manifest gate fails.
- **Check the artifact's own text, not the build log.** The logged PDF size is the pre-`pikepdf` size
  and is larger than the file on disk; compare `stat` sizes and extracted text instead.
- **Do not attach the EPUB/PDF in chat.** Confirm in text with the sizes, hashes and release URLs.
