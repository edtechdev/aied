---
name: wiki-concept-link-sweep
description: "Use when one concept's links must be swept corpus-wide."
category: research
version: 1.0.0
author: AI agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [wiki, wikilinks, linking, corpus-sweep, editorial]
    related_skills: [wiki-inline-links, wiki-concept-page-design, wiki-concept-narrative]
---

# One-Concept Corpus Link Sweep

Use when a **single concept** has to gain inline links across the whole corpus: a new concept page was just created, an alias was re-pointed from one concept to another, or a page's vocabulary was never swept because the page (or the alias) is newer than the last pass.

This is a different job from a per-page linking pass (`wiki-inline-links`) and from a standing-rule sweep (`wiki-link-bulk-editing`): the scope is **one target slug, every page**, and the tool that seems obvious is the wrong one.

## The one rule that matters

**`inline_link_scan.py --apply` is NOT concept-scopable. Never use it for a one-concept sweep.**
`--apply` inserts *every* suggestion it holds for the pages you pass it, not the links for the concept you care about. Scoping by page list does not help: passing `--apply` the 368 pages whose report mentioned a newly created concept inserted ~3,300 first-occurrence links for unrelated concepts across 492 files. Correct shape:

1. **Report scan to a file**, whole corpus: `python3 -u skills/research/wiki-inline-links/scripts/inline_link_scan.py <wiki> --all > report.txt 2>&1`, run detached, **no `timeout`** (see the truncation pitfall below).
2. **Extract only your target's lines** from the `=== page ===` blocks: `-> [[target]]  from: <display>`.
3. **Insert those links yourself**, first clean occurrence in the narrative body only.
4. **Simplify same-text pipes afterwards** (`[[x|x]]` → `[[x]]`); a bare-noun display creates them by construction.
5. Diff and count before you tell the user a number.

`--apply` remains correct for the *other* job — a full sweep the user has explicitly asked for, where every target on every page should be linked. Then batch it and review the diff by sampling. Two things make a whole-corpus run survivable:

- **Parallelise the apply.** One sequential loop moves ~50 pages per 2 minutes, so ~2,300 pages take over an hour. Split the page list into 8 round-robin chunks and run one worker per chunk, 25 pages per scanner invocation: the same work lands in ~10 minutes on 16 cores. Chunks are file-disjoint, so no locking is needed, and re-running a chunk is idempotent — already-linked pages yield no suggestions.
- **Prove the insertions are insertions only.** Compare per-file link *multisets* between `HEAD:` and the working tree, not links on `git diff` added lines; a one-link edit re-renders its whole paragraph, so the added-line count inflates roughly 2x (14,023 counted vs 7,002 real). Then assert the invariants: zero net removals, unchanged link counts inside `## Connected Concepts` / `## Connected Articles` / `## Citation`, no links on heading lines, no empty `[[x|]]` or nested links, and no new self-links or unknown targets — compare each against `HEAD:` so pre-existing breakage is not blamed on the sweep.

**Expect the prose gate to explode, and delegate the cleanup.** Inserting into ~200 concept pages re-judges their pre-existing sentences: one measured pass produced 229 defects (144 sentences over 55 words, 85 duplicate sentences) across 115 pages. Do not loosen the gate. Write each page's failure lines to a batch file and give one subagent per ~15 pages that file plus hard rules — split at a natural boundary, rewrite only the duplicate member, preserve every numeral, statistic, citation and `[[target|display]]` byte-for-byte, never touch frontmatter, ignore paragraph warnings — and require each child to re-run the gate and confirm none of its slugs still appear. Bump `updated:` for every concept page the gate lists by parsing the gate's slug list (203 of 203 were due after one sweep).

## Procedure

### 1. Decide whether the concept owns its vocabulary yet
Before sweeping, check `concepts.registry.yaml` for the aliases the phrase needs. If a phrase belongs to another concept, moving it is a **retarget that changes link resolution corpus-wide** — confirm with the maintainer, then sweep. Registry edits are safe only with a YAML round-trip check afterwards; insert new sections entries by anchoring on the *last* occurrence inside the sections block, never the first string match (the first match is usually the alias list of a neighbouring concept).

### 2. Retarget existing wrong links first
The corpus usually already links the concept's vocabulary to a neighbour (`[[metacognition|reflective]]`, `[[self-report-measures|reflective writing]]`). Move those pipes to the new target with a scripted pass over display text, and keep the deliberate exceptions — instrument names, cycle labels, adjacent constructs that merely share the stem. List the kept exceptions explicitly in the commit message so the judgment is auditable.

### 3. Sweep, with the bounded insertion rules
Insert only in the narrative: after the frontmatter, stopping at `## Connected` and `## Citation`; never in headings or code fences; never inside an existing link; never a self-link.

- Check "inside a link" with **body-local** offsets (`before.rfind('[[', 0, i) > before.rfind(']]', 0, i)`).
- Match slugs case-sensitively when checking whether a page already links the target (`[e]portfolio` vs `portfolio` are different pages).
- For a mirrored site, exclude the other locales' directories explicitly.

### 4. Review every insertion in its sentence
The scanner's first occurrence is often not the concept's sense. Read each new link's context before committing and revert the wrong ones. Record rejected `(phrase, slug)` pairs in the scanner's `REJECT_PAIRS`, and put a bare generic noun from the new slug into `AUTO_APPLY_DENYLIST` **in both copies of the scanner** (repo mirror and installed) in the same change.

### 5. Gates, bumps, build
`check-concept-prose.py --changed`, `check-concept-updated-bump.py --changed`, `check-us-english.py <changed files>`, `validate-facets.py`, then the site build. Concept pages whose narrative changed almost always need an `updated:` bump; take the list from the gate output and set it programmatically rather than guessing.

## Pitfalls

- **A link in a comparison table counts as coverage, so prose stays bare.** The scanner asks only whether the page already links the target somewhere in the body; a row label like `| [[eportfolio]] | … |` satisfies it and the page's actual prose mention — a bold lead-in `**Portfolios** fail when…` — is never offered. The maintainer reads prose, not table cells, and reports this as "you still didn't link X". When a page carries a delineation or comparison table, check by hand that each tabled neighbour also appears at least once inline in the prose, and treat a table-only match as a miss for that target, not as coverage.
- **A report scan takes ~35 minutes and `timeout` truncates it silently.** Report mode prints no summary line, so a killed run's file looks complete — the page blocks just stop early — and since only pages *with* suggestions print, page count does not reveal the shortfall. `timeout 900` on a ~2,300-page sweep exits 124 having covered roughly three-quarters. Run detached, unbuffered (`python3 -u`; without it, redirection block-buffers and the file lags minutes behind, reading as "stalled"), require `EXIT=0`, and compare the scanned page count with the actual page total. Never report a page count as corpus coverage when it is coverage of the pages that printed.
- **Adding a link re-renders the whole line, so the page's pre-existing prose defects surface as yours.** `check-concept-prose --changed` inspects only added lines; attach a link to a sentence and every >55-word or 60%-overlapping sentence already in it now fails as if you wrote it (the tell is nonsense line numbers — "duplicate sentence at lines 10 and 28" when you changed one word). Fix a trivial real defect that is right there; otherwise **revert the link on that one page** rather than rewriting prose you did not author — repeated rewording just chases the overlap threshold. Never trim figures to fit a cap.
- **Scoping a sweep by dropping the target from the alias list is not enough.** Suppressing a target only stops its *alias* matching; pages the report already lists for other targets still take those links under `--apply`.
- **Bare-noun aliases are right on most pages and wrong on a meaningful minority.** Real rejections on an `eportfolio` sweep: "navigating a large **portfolio**" (an organisation's product portfolio), "PLoS and Nature **portfolio** journals" (a publisher's journal portfolio), "examine the course as a **portfolio**" (review metaphor). Reading the sentence is the only defence.
- **A new page's aliases have never been swept, and not being denylisted is no evidence they were.** `portfolio`/`portfolios` sat in the registry as `eportfolio` aliases while 26 pages about student portfolios carried no link at all. On creation day, sweep the new page's aliases explicitly.
- **Batch runner shell scripts: initialise accumulators.** `set -u` plus `BATCH="$BATCH $slug"` before `BATCH` is first assigned aborts the whole run on line 1 with `unbound variable`, which looks like the scanner failing. Initialise `BATCH=""` before the loop and confirm the log shows real batch lines before trusting a background run.

## After the sweep
Weekly linkage: the new page should be announced from the umbrella pages (`ai-education`, `pedagogy`, and any construct it sits inside), and its closest neighbours should carry it in `## Connected Concepts` — insert into that block by locating the last bullet between the Connected Concepts heading and the next heading, never the last bullet in the file (that lands it in Connected Articles).
