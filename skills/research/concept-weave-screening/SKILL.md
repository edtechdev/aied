---
name: concept-weave-screening
description: "Use when deciding which concept pages a source changes."
category: research
---

# Screening a source against concept pages

Use after a source's article page exists and before it is committed. The mechanics of ingestion live
in `paper-batch-ingestion` and `web-report-ingestion`; the gates live in `tooling/scripts`. This skill
carries the judgment those cannot encode: which of the candidate pages a source has actually earned a
place on, and what the record has to say to prove it.

## Procedure

1. **Build the candidate set from the gate, not from your reading.** Enumerate every typed facet the
   article declares (slugified onto concept slugs) plus every inline wikilink. `check-concept-screen.py
   <slug>` names any candidate with no recorded decision, so run it once to see the real set before
   writing anything into the record.
2. **Apply the one test to each candidate: could this page make its claim without this source?**
   If yes, `no_change`. A weave is earned when the source supplies a number where the page asserts a
   direction, an instrument where the page asserts a construct exists, a counter-case where the page
   generalises, or the variable the page was missing altogether.
3. **Weave the pages that pass**, in the page's own voice and section, not as an appendix. Keep
   sentences short enough for `check-concept-prose.py`, add the `## Connected Articles` entry and the
   inline wikilink in the same edit, and stamp `updated`.
4. **Record both halves with evidence** (see Record shape below), then run the screen gate, the prose
   gate, the updated-bump gate and US English over every woven page, and rebuild the site before the
   commit.

## The significance bar

- **Budgets are tripwires, not quotas.** One empirical paper usually changes one to three concept
  pages; a multi-strand report with separate results per research question, task or medium changes
  four to six. Beyond that the screen is annotating the source, not recording what it changed.
- **Name the gap in the record.** Each integrated slug is followed by what the page was missing
  (`was missing the distinction between ...`). If that sentence cannot be written honestly, the weave
  does not belong. `check-concept-screen.py` fails an integration that does not state it.
- **A page that would only gain an example, an analogy or a name is a `no_change`.** A naming
  parallel across fields, an extra taxonomy in a field that counts its taxonomies, one more
  corroborating case beside better evidence already on the page: all fail.
- **Over-correction is the usual cause of padding.** A screen that has just been told it ignored a
  whole category (disciplines, levels, a pedagogy it never touches) starts wiring in everything
  nearby. The correction is to apply the same evidentiary standard to that category, not to lower it
  for everything else; most discipline and level pages still end in `no_change`, with a coverage
  count from that page as the evidence.

## Disciplines and levels are candidates, never settings

- When `discipline:` or `level:` names a concept page, that page is a candidate on the same standard
  as any process page. A domain finding and a process finding are different sentences on different
  pages, and a screen that writes only the process one has skipped the disciplines.
- A dismissal requires a coverage count from THAT page, written next to its slug
  (`teacher-education ('group formation' 0)`). The gate fails a discipline or level dismissal without
  one, because "it is only a setting" is a claim nobody checked.

## Two sources, one body of work

When related releases arrive together (a benchmark and an ablation on one of its strands), decide
before drafting which page each finding lands on. The duplication gate rejects the same claim written
into two weaves, so split the strands between the pages and cross-link the articles instead of
repeating the argument twice.

## Record shape

```
Woven into cs-education ('QWK' 0, 'graded programs' 0): was missing any graded-program result,
and the code strand supplies one.
```

```
higher-ed ('QWK' 2, 'validity' 3): its Connected Concepts already route to the pages that now
carry these claims.
```

`concept-screen.yaml` is append-only and gitignored, so it has no git recovery: copy it aside, extend
the parsed list, re-emit every entry and assert the count went up. Never rebuild it from a text split.
Listed integrations are dereferenced into page bodies, so a `## Connected Articles` line alone does not
satisfy the gate; the narrative must mention the article.

## What to report

- Per weave: the claim in one line. Per drop: that it was screened on evidence, not overlooked.
- That every woven page is now stale in each locale that translates it, so a locale refresh is queued
  work rather than a surprise.

## Fanning a page list out to subagents

- **The authoritative page list is the registry, not memory.** Parse `concepts.registry.yaml`
  (`sections` -> `groups` -> `items`), keep the slugs that have a file on disk, and paste that list
  into the brief verbatim. A list typed from memory invents plausible slugs (`peer-instruction`,
  `flipped-classroom`, `multimedia-learning`, `flow`, `retrieval-practice`) and silently omits real
  ones (`icap-framework`, `help-seeking`, `pedagogical-patterns`, `student-experience`). A fan-out on
  a wrong list burns the agents on files that do not exist while the pages that needed the work are
  never assigned.
- **Run one existence check over the whole list before dispatching** and fix the list, not the briefs:
  `for s in $SLUGS; do [ -f content/en/concepts/$s.md ] || echo MISSING:$s; done`.
- **Tell the agents the list is verified**, so a missing file is reported as a defect rather than
  quietly skipped, and ask each to report per page whether it wove or declined.
