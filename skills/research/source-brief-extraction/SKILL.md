---
name: source-brief-extraction
description: "Use when a batch of long PDFs must become corpus pages."
category: research
---

# Extracting verified briefs from a batch of long sources

Use when three or more papers or reports arrive for the same corpus and each needs a page. Reading six
8,000–14,000-word PDFs in full before writing spends the context budget on material that will be
summarized anyway. Delegate one extraction per source, keep the briefs on disk, and write the pages
from the briefs — but verify every headline number against the extracted text, because a brief is a
subagent's self-report, not a source.

This skill covers the extraction and verification loop. The page-writing and concept-weaving rules
live in `paper-batch-ingestion` and the wiki concept skills; follow those for structure and tone.

## Procedure

1. **Land the sources before dispatching anything.** For each slug: copy the PDF to
   `pdf-sources/<slug>.pdf`, run `pdftotext -layout` to `pdf-sources/<slug>.pdf.txt`, and write
   `raw/papers/<slug>.md` with frontmatter (`source_url`, `ingested`, `sha256`) followed by the same
   text. Both directories are gitignored, so they never appear in a commit — see the pitfalls.
2. **Dedupe by DOI across `content/` and `raw/`** before writing anything:
   `grep -rl --include='*.md' -F '<doi>' content/ raw/`. A hit means the paper is already ingested.
3. **Dispatch one subagent per source, in parallel**, each pointed at its own
   `pdf-sources/<slug>.pdf.txt` and told to write `scratch/briefs/<slug>.md` and to print the brief.
   Demand a fixed schema so the briefs are interchangeable:
   - verbatim title, authors, venue, year, DOI (copy exactly, including odd capitalization)
   - study type, stated in the authors' own terms (systematic review / survey / bibliometric /
     opinion paper with no data)
   - corpus or sample with counts (records screened, studies included, n, years, databases)
   - 6–10 key findings, one sentence each, every number quoted as printed
   - stated limitations, and whether the paper has a limitations section at all
   - 3 candidate concept topics
4. **Spot-check the brief before writing a page.** Grep the headline numbers and the title in the
   `.pdf.txt`. A number that appears nowhere in the source does not go in the page, however plausible
   the brief makes it.
5. **Write the pages from briefs, not from memory of the brief.** Copy `title:` byte-for-byte from
   the brief's verbatim title and make the `## Citation` link text identical. A paper with no DOI
   gets a plain citation with no link; do not invent one.
6. **Classify conceptual sources explicitly.** An opinion paper gets the italic no-data notice and
   its benefits presented as the authors' claims, never as findings. Say in the page that it reports
   no data.
7. **Screen, then gate, then one commit.** Gate formats and the exact concept-screen reason grammar
   are in `references/wiki-gate-formats.md`.

## Pitfalls

- **Derived totals are not source figures.** Summing a table's country counts (179 + 30 + ... =
  336) or subtracting two percentages produces a number the paper never printed, and
  `verify-number-grounding.py` fails it. Quote the components and let the reader add them, or state
  the comparison in words ("more than the next four countries combined").
- **A corpus-wide replacement for a house-style word edits pages unrelated to the task.** When a US
  English gate flags a spelling, fix the changed files, not every file: a blanket spelling sweep also
  rewrites older pages you were not asked to touch. Check `git status` after any corpus-wide
  substitution and `git checkout --` the unrelated files before committing.
- **The prose gate counts words in the sentences you added.** A new sentence over ~55 words and a new
  paragraph over ~150 words fail even when the content is right; split the sentence rather than
  cutting the finding.
- **Gitignored source paths abort the commit.** `pdf-sources/`, `raw/`, and `concept-screen.yaml` are
  ignored; a `git add` naming them exits non-zero and stages nothing. Add only `content/`,
  `concepts.registry.yaml`, generated `src/data/` and `tooling/concept-index.md`, and
  `resource-wiring.yaml` when a resource moved.
- **A build started before the last edit ships the old text.** Content is read when the build begins,
  so an edit made mid-build is missing from `dist`. Verify with a grep for the new phrase in
  `dist/.../index.html`; if it is absent, kill the build and restart rather than shipping a stale
  preview.
- **Killing a build needs the node process, not the wrapper.** Killing the `bash` or `systemd-run`
  wrapper leaves `node .../astro build` running and still writing `dist`; find and kill the npm, sh
  and node children before restarting.
