---
name: offline-book-localization
description: "Use when translated EPUB/PDF covers or RTL break."
category: research
---

# Offline Book Localization

Use this for localized EPUB/PDF regressions: covers that show tofu boxes, broken right-to-left layout, or a translated edition that needs to be rebuilt and republished. It complements the full offline-edition workflow in `wiki-epub-export`; use that skill for the general build/release procedure.

## Cover fonts: route by script, then inspect the artifact

Translated covers are rasterized by Pillow in `_locale_cover_path()` in `tooling/build-epub.py`. The common font fallback is Noto Serif/Sans CJK; that fallback has **no Bengali, Arabic or Urdu glyphs**, and a missing branch fails across the title, center label, every node label, and the public-domain label — not just one character.

Use explicit routes:

- **Bengali (`bn`)**: `FreeSans.ttf` — carries Bengali and Latin `AI`.
- **Urdu (`ur`)**: `FreeSerifBold.ttf` — carries Urdu and Latin; include `ur` in the RTL path and reshape with `arabic_reshaper` + bidi.
- **Arabic (`ar`)**: `NotoNaskhArabic-Bold.ttf`, RTL shaping.
- **Hebrew (`he`)**: `FreeSansBold.ttf`, bidi.
- **Hindi (`hi`)**: `FreeSansBold.ttf` for Devanagari plus Latin.
- **Russian / Ukrainian / Turkish (`ru`, `uk`, `tr`)**: DejaVu Serif/Sans Bold; CJK faces lack Ukrainian-specific letters and Turkish `ğ/ı/ş/İ`.
- **Chinese / Japanese / Korean**: Noto CJK with the correct face index (`zh` 2, `ja` 0, `ko` 1).

A font file existing is not evidence that it covers the locale: Noto Bengali lacks Latin `AI`, and Noto Naskh lacks Latin punctuation. Prefer a face with both the script and Latin, or split mixed-script runs. Render the cover and inspect **the generated PNG and PDF page 1**; do not stop at a fontTools coverage check.

## RTL checks

- **EPUB:** unzip the built/released EPUB and check the OPF spine has `page-progression-direction="rtl"`; every XHTML document has `<html dir="rtl" ...>`; the stylesheet contains `direction: rtl`; RTL TOC rules are right-aligned. Count all documents, not just the cover.
- **PDF:** render a TOC or body page at ~100 dpi and inspect it. Literal text must be right-aligned and the folio must sit at the left outer margin in an RTL book. Check the PDF `/Lang` with pikepdf as well; `pdfinfo` does not print it.
- **Both PDF paths:** the parallel path receives `text_dir` and RTL CSS, but `AIED_PARALLEL_CHUNKS=1` uses the serial pandoc/weasyprint path. The serial header must carry the same `html, body { direction: rtl; }`, right-alignment and `@bottom-left` page-number overrides. A fix in only the parallel branch silently ships an LTR PDF when the fallback is used.

Useful audit commands:

```bash
# EPUB direction sweep
unzip -p aied.ar.epub EPUB/content.opf | grep -o '<spine[^>]*>'
python3 - <<'PY'
import zipfile
z=zipfile.ZipFile('aied.ar.epub')
x=[n for n in z.namelist() if n.endswith('.xhtml')]
print(len(x), sum(b'dir="rtl"' not in z.read(n)[:500] for n in x))
PY

# PDF page render and text-position check
pdftoppm -f 4 -l 4 -singlefile -png -r 100 aied.ar.pdf /tmp/ar-page4
pdftotext -f 4 -l 4 -bbox aied.ar.pdf - | grep '<word' | head
```

## Build only the affected locale

```bash
<PYTHON> tooling/build-epub.py \
  --locale bn \
  --output-dir .artifacts/offline/coverfix \
  --work-dir dist
```

Do not run a site build concurrently: `astro build` clears `dist/` and can delete the exporter's intermediate markdown. Use the interpreter named by `agent.python` in `wiki.config.yaml` (written as `<PYTHON>` in the repo copy); the PDF renderer and the pikepdf metadata step need packages that the agent's own venv does not carry. Copy the refreshed `epub-cover.<locale>.png` into `public/` if it is tracked; the release build itself can read the copy from the output directory.

## Publish rebuilt assets

The publisher rejects a rebuilt asset when its bytes/SHA-256 differ from `tooling/offline-editions.json`. Use `--refresh-metadata`; it writes the new size/hash into the catalog **only after** upload and public verification succeed. Limit the mutation to the rebuilt files:

```bash
python3 tooling/scripts/publish-offline-editions.py --dry-run \
  --refresh-metadata --locales bn,ur --formats epub,pdf \
  --assets-dir .artifacts/offline/coverfix

python3 tooling/scripts/publish-offline-editions.py --publish \
  --refresh-metadata --locales bn,ur --formats epub,pdf \
  --assets-dir .artifacts/offline/coverfix
```

After publication, remove only the run-scoped `.backup-*`/`.staging-*` assets, then regenerate/commit the catalog view and verify the stable URLs. `check-offline-manifest.py --remote --locale <code>` verifies that locale; run the full `--remote` check before declaring the whole catalog healthy.

## Pitfalls

- **Do not assume a CJK fallback covers every translated script.** Bengali, Arabic and Urdu need explicit faces; a whole cover can be tofu even when the rest of the PDF text looks fine.
- **Urdu is not just Arabic-shaped by default.** Add `ur` to the RTL set and reshape it; otherwise letters are isolated or reversed.
- **Check the built artifact, not the branch.** A source-level font/RTL fix does not prove the shipped cover or the serial fallback uses it.
- **Do not hand-edit bytes/hashes before publishing.** Use `--refresh-metadata`; a failed upload must leave the committed catalog matching the live release.
- **Do not deploy the site just because a release asset changed.** The manifest's size display is separate; rebuild the site and deploy only with authorization.
