---
name: artifact-release-verification
description: "Use when publishing rebuilt binaries to a release or CDN."
category: research
version: 1.0.0
---

# Publishing and Verifying Rebuilt Artifacts

For any deliverable that is *built locally and published as a release asset or CDN object* rather than served from the site tree: EPUB/PDF editions, dataset snapshots, generated archives. The build is the easy half; the failure mode is a publish that reports success, verifies its own hashes, and ships the previous generation.

## The two-dir trap (the one that actually bites)

A build writes to a **build dir**; the publisher reads a **staging dir**. They are usually different (`--output-dir` vs `public/`, `dist/` vs `release/`), and nothing in the publisher knows the build happened. Two consequences:

- **Publish from the build output.** Copy the freshly built files into the staging dir the publisher reads, *then* publish. If you publish without the copy, the publisher happily re-uploads last generation's bytes.
- **`--refresh-metadata` (or any catalogue refresh) makes the mistake invisible.** The refresh records whatever is on disk, so catalog hash == published hash == staging file, all stale, all consistent. Hash equality proves the upload was faithful; it proves nothing about provenance.

**Verification rule: compare the published asset against the BUILD's hash, not against the catalog.** Then add one structural signal that the catalogue cannot forge — page count, entry count, version string, a sentence you expect to exist:

```bash
sha256sum .artifacts/.../edition.epub           # the build
curl -sL -o live.epub "<public release url>"    # what users get
sha256sum live.epub                              # must equal the build
pdfinfo live.pdf | grep Pages                    # must equal the build's page count
```

A page count that differs by ~2% while the hashes "match" is the tell that you compared the catalogue to itself.

## Procedure

1. **Build alone.** Never run a site build or another exporter concurrently: shared intermediates under `dist/` get deleted mid-flight and the second half of the build dies after the first artifact was already replaced (see the exporter's own skill for the sequence).
2. **Verify the build before publishing** — format check, page/entry counts, and the content changes you actually made (the deleted page gone, the new page present, the new section rendering). Fail here rather than after the upload.
3. **Copy build → staging dir.** Confirm the staging copy's hash equals the build's before moving on.
4. **Scope the publish.** Publishers that default to "everything in the catalogue" will re-upload every locale and format. Pass the narrow selection (`--locales en --formats epub,pdf,llms,...`) so unrelated artifacts are not replaced. Enumerate the catalog's format names; they are rarely the obvious ones (`llms`, `llmsConcepts`, `llmsFull` are three distinct formats).
5. **Dry-run first**, read the asset count it reports, and check that count matches what you rebuilt.
6. **Publish, then download the public URLs and re-verify** against the build (step rule above). Trust the download, never the publisher's success line.
7. **Regenerate whatever is generated from the catalog** (site manifest, index, checksums page), run its validator, and commit the catalog plus the generated view in one commit — never the binaries.

## Signals that a publish went wrong

- The published page/entry count is smaller than the build's, or matches the previous release.
- The catalogue's `bytes` for an asset equals the *pre-build* size you saw in an earlier listing.
- A content check you ran on the build (a deleted page absent, a new section present) returns the opposite on the served file.
- The publisher's log shows staging names you did not expect, or a `refreshed metadata` line for a file you never rebuilt.

## Worked commands (AI Ed wiki offline editions)

```bash
# build (no --work-dir: it breaks the exporter's dist/ lookup)
<PYTHON> tooling/build-epub.py --output-dir .artifacts/offline/<build-id>
# verify the build, then stage it where the publisher reads
cp .artifacts/offline/<build-id>/aied.{epub,pdf} public/
# publish only the English formats
python3 tooling/scripts/publish-offline-editions.py --dry-run --refresh-metadata \
  --locales en --formats epub,pdf,llms,llmsConcepts,llmsFull
python3 tooling/scripts/publish-offline-editions.py --publish --refresh-metadata \
  --locales en --formats epub,pdf,llms,llmsConcepts,llmsFull
# downstream view + validation
python3 tooling/scripts/gen-offline-manifest.py && python3 tooling/scripts/check-offline-manifest.py
```
