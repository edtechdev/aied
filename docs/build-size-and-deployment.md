# Build size and deployment

This page records how the AIEd site measures its published output and how that
output reaches GitHub Pages. It is deliberately separate from content rules:
it is about bytes and packaging, not about deleting or translating pages.

## The number that matters

`published_bytes` is the sum of `st_size` for regular files that
`actions/upload-pages-artifact` will put in the published site. It is the
logical (uncompressed) byte count. It is **not** the gzip size of a tarball and
it is not a page-load measurement.

A compressed artifact can be well under 1 GB while the published tree is much
larger. GitHub documents a 1 GB published-site ceiling; a green compressed-size
check is not evidence that the published tree is under that ceiling.

The report also records, separately:

- `file_count` and `html_count` — operational indicators, not byte limits;
- hidden/`.git`/`.github` files excluded by the official packaging action;
- the top files, locale totals, category totals, and HTML shell diagnostics.

## The reporter

```sh
python3 tooling/scripts/report-build-size.py \
  --dist dist \
  --config tooling/build-size-budget.json \
  --out reports/build-size \
  --mode report
```

It writes `reports/build-size/report.json`, `summary.md`, and `files.json`
(the detailed manifest). `reports/` is generated and ignored. It walks `dist/`
once in stable path order, uses `st_size`, and rejects symbolic links, hard
links, special files, unreadable files, missing required output, and forbidden
PDF/EPUB files. It never compresses the tree.

`--mode enforce` returns exit 1 when `published_bytes` reaches the blocking
budget. `--mode report` writes the same report but does not fail solely on size;
it records `gate_result: would-block` instead. Invalid or incomplete reports
return exit 2 in either mode.

`files.json` contains every published path with its byte count, category, and
locale. `summary.md` is suitable for `$GITHUB_STEP_SUMMARY`. No article text is
placed in CI output.

## Budgets

`tooling/build-size-budget.json` is the only place these policy numbers live:

| Threshold | Decimal bytes | Purpose |
|---|---:|---|
| Warning | 600,000,000 | Review growth before it becomes urgent |
| Blocking | 750,000,000 | At least 250 MB below the conservative 1 GB ceiling |
| Hosting marker | 1,000,000,000 | Reported explicitly; not a substitute for the internal budget |

The values are project policy, not GitHub guarantees. The reviewed baseline
measured on 2026-11-06 is **2,070,889,441 published bytes (2070.89 MB)**,
above the blocking threshold and the conservative 1 GB marker; enforcement is
therefore **not active**. `enforcement.active` stays `false` until a reviewed
reduction or an explicit budget decision changes it. Do not raise the budget
silently to make a release green.

Diagnostics that warn but do not block in the first release:

- a single HTML page at or above 1,000,000 bytes;
- attributed HTML shell bytes at or above 40% of HTML bytes (with coverage
  shown);
- baseline growth of at least 25,000,000 bytes **and** 5% relative to a
  compatible baseline;
- missing or changed region boundaries, or unexplained unclassified growth.

Per-locale caps are deliberately not enforced. Locale totals are reported so
access and content decisions stay informed.

## Locale and category ownership

Locale codes and the default locale come from `site.config.json`; they are not
hardcoded. A first directory segment matching a configured locale owns those
files (`es/…`, `sw/…`). Root canonical English routes belong to the default
locale. Global assets (`_astro`, `pagefind`, fonts, shared images, sitemaps,
service worker) are `shared`; unknown roots are `unattributed`, never guessed
into a language. Locale-suffixed `llms.<code>*.txt` exports and edition covers
are attributed by tested filename rules.

Categories are disjoint and precedence is fixed: HTML, Pagefind, AI exports,
JS, CSS, Fonts, Images, Other. Locale rows (including shared/unattributed) and
category rows each reconcile to the same published total; they are two views,
not two numbers to add.

## Repeated HTML shell

The base layout marks inert `data-build-region` boundaries on the header,
sidebar, right rail, footer, inline scripts, and the inline critical style.
The reporter hashes those exact byte regions and groups identical strings. It
reports shell bytes, shell percentage, the top pages by absolute shell bytes,
and repeated bytes beyond the first copy. Nested regions are excluded from
summed totals, so the footer-inside-footer case is counted once.

These are measurements, not a claim that the bytes are removable. Navigation,
accessibility, and localization are functional requirements. A shared JS file
referenced on every page is counted once in the output tree; an inline script
duplicated in every page is counted as the repeated region it is.

The reporter records pages with no marked regions separately. Those bytes are
counted as non-shell content rather than silently attributed.

## Packaging and deployment

There is one production path, in `.github/workflows/astro-build.yml`:

1. **Build & Verify** installs, validates, builds once, verifies required
   output, writes the size report, uploads the report artifact, and — only on a
   push to `main` after the report step succeeds — uploads **one**
   `actions/upload-pages-artifact` artifact named `github-pages`.
2. **Deploy** runs in the same workflow run, needs `build`, uses the
   `github-pages` environment, and calls `actions/deploy-pages` with
   `artifact_name: github-pages`. It does not checkout, download, extract, or
   re-tar the site.

The old `.github/workflows/astro-deploy.yml` `workflow_run` path is retired.
The official action creates `artifact.tar`; that service envelope is transport,
not a second custom site archive. Pull requests build and report but never
receive Pages deployment credentials or a Pages artifact.

The build job has read-only repository permissions. The deploy job alone has
`pages: write` and `id-token: write`. Deployment concurrency is scoped to the
deploy job, so a pull-request build cannot cancel a production deployment.

### Observation mode is explicit

Because this repository's first measured baseline is above the blocking
budget, the workflow passes `--mode report`. That is intentional: the report
shows `would-block` and the Pages artifact still follows the existing release
path. It does **not** mean the budget is enforced, and it does not make the
published tree safe relative to the 1 GB ceiling. The summary says so in the
gate line, the hosting-ceiling line, and the next-investigations section.

When a reviewed reduction brings the baseline below the blocking threshold,
change the workflow to `--mode enforce` and set `enforcement.active` to `true`.
If the baseline is at or above 750 MB, the correct state is observation plus a
ranked reduction list, not a quiet budget increase.

## Inspection and tests

```sh
npm run test:build
npm run test:size
python3 tooling/scripts/report-build-size.py --dist dist --out reports/build-size --mode report
npm run size:check        # exits 1 if the blocking budget is reached
```

The unit tests cover mixed locales, shared files, unknown paths, hidden files,
Unicode, symlinks, hard links, special files, unreadable files, missing output,
budget boundaries, baselines, nested and repeated regions, malformed HTML, and
report generation before a failing gate.

## Rollback

Revert the workflow change as one unit: restore the previous workflow pair and
delete the `.github/workflows/astro-deploy.yml` replacement if the replacement
is being rolled back. Do not restore only one half of the old cross-workflow
artifact handoff; that would leave two deploy paths or none. The report tooling
and budget file can be reverted independently; they do not alter `dist/`.

## Limitations

- The first report measures the existing output; it does not claim the 750 MB
  budget is currently achievable. See `docs/build-size-reductions.md` for the
  ranked investigation list; it is not an authorization to delete content.
- A matching uncompressed artifact tar probe measured 2,095,011,840 bytes
  locally. That is the official action's transport format, not a published-byte
  metric; verify the real artifact upload in CI before relying on it.
- Region attribution is exact for the marked regions, but pages without
  markers are reported as non-shell until markers cover them.
- The report is not a substitute for an authorized hosted deployment check of
  the home page, a concept, an article, a locale, and Pagefind assets.
