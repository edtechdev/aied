---
name: batch-prose-rewrite
description: "Use when many pages need one editorial rewrite bar."
category: research
version: 1.0.0
author: AI agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [editing, rewrite, batch, delegation, verification]
    related_skills: [practitioner-summary-writing, delegated-batch-drafting, delegation-output-verification]
---

# Batch rewriting existing pages

Use when a maintainer says a defect repeats across a corpus ("these summaries dump numbers, rewrite the
ones that suffer", "this prose is unreadable, fix it everywhere") and the fix is editorial rather than
mechanical. `practitioner-summary-writing` defines what the prose should be; this skill is how to get
forty pages there without losing facts, links or headings, and without reading forty diffs blind.

## Procedure

1. **Score first, never sample by eye.** Write a throwaway scorer over the collection: parse the
   section that carries the defect and count the offending pattern per item. Rank, then set a
   threshold that separates real cases from one-off mentions (three or more affected items, not one).
   Report the threshold when you hand back, so the maintainer can widen or narrow it.
2. **Build the detector from the long forms.** A regex assembled from the obvious shorthand
   (`β=|p<|d=`) undercounts and blesses pages that are just as unreadable. Include `Cohen's d`,
   `partial η2`/`η²`, `f²`, `R²`, `SD =`, `SE =`, `CI [`, `t(n)`, `F(n, m)`, `χ²`, `OR =`, `n =`,
   `α = 0.`. Re-score after the first wave: whatever the detector missed is the second wave.
3. **Write one page yourself as the reference.** It fixes the bar, exposes the awkward cases (a
   statistic that must survive, a determiner that changes, a heading that cannot be added), and gives
   the agents a model. Only then open the batch.
4. **Turn the editorial rules into a checked contract** (below). A rule an agent cannot verify is a
   rule it will drift from.
5. **Delegate in parallel, five or six pages per child**, with the slug list, the contract, the
   verifier command, and an explicit ban on git writes. Each child iterates against the verifier until
   it passes.
6. **Verify centrally, then read.** Run the verifier over the whole batch yourself; do not trust the
   children's self-reports. Then read the headline section of every page: a pass proves the shape, not
   the sense.
7. **Sweep house style last.** Model-written prose drifts to the wrong variant (British spellings in
   a US-English corpus). Run the repo's spelling checker over the batch, the respell script, then the
   checker again; the respell script has gaps (`favourable`, `personalisation`, `realisation`), so
   finish with a body-only manual pass and never touch the citation line.

## The contract

State these as rules a script enforces, not as style advice:

- **headings identical**, same order, none added — the page skeleton owns the heading list;
- **wikilink targets identical as a multiset**: same targets, same counts, order free. Compare
  multisets, not sets: a duplicated link leaves both `missing` and `added` empty while the page drifts;
- **digits are a subset of the old page**: no derived share, no rounded variant, no new figure. This is
  what stops an agent inventing a statistic to fill a sentence;
- **zero offending notation** in the headline sections;
- **3-5 practice bullets, each opening with a bold audience label ending in a colon**;
- **body inside the word budget** the repo's gate enforces, not the budget you would prefer.

`scripts/verify_rewrite.py` implements the contract against a pre-rewrite git ref; pass slugs plus
`--repo`, `--dir` and `--ref`. Run it before committing: once the rewrite is committed, `HEAD` is the
rewrite and every page passes trivially.

## Pitfalls

- **A mechanical pass is not a fact check.** The digit-subset rule blocks invented statistics but not
  dropped claims: an agent can quietly lose a caveat, a subgroup or a null result and still pass every
  check. Keep the limitations section whole and read for what disappeared.
- **A new numbered list can invent a digit.** Going from six findings to seven puts a `7` on a page
  that never had one and trips the digit check. Keep the item count unless that number already exists.
- **Do not add a section to hold the moved detail.** "What the numbers showed" is tempting and breaks
  the heading contract; fold the statistics paragraph into the existing method or mechanism section.
- **An announcement can outrun its items.** A rewrite that says "three routes" and then describes four
  passes every script. Count the enumerations against the items that follow before shipping.
- **Children report success from their own verifier run.** Re-run it centrally; a batch can come back
  with pages that fail the link multiset when checked from the parent.
- **Second-wave scoring matters.** After the first batch the worst pages are gone and the rest look
  acceptable by comparison. Re-score the whole collection with the long-form detector rather than
  assuming the first ranking exhausted the problem.
- **Word budgets differ from house style.** The gate's ceiling (often 1,750) is not the reading target
  (900-1,300). Write to the target; use the ceiling only to avoid failing the build.
