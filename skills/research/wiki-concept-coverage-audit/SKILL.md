---
name: wiki-concept-coverage-audit
description: "Use when concept pages may not absorb recent ingestions."
category: research
---

# Auditing concept-page absorption

Screening decides, per source, which concept pages a paper changes (`concept-weave-screening`).
Weaving decides how to write one insertion (`wiki-concept-narrative`). This skill answers a
different question: **across a period of ingestion, which concept pages actually changed, and
which absorbed hundreds of articles without gaining a sentence?** Use it when the user asks
whether weaves were skipped, why a paper is missing from an obvious page, or which concepts
have gone quiet.

Run it on the wiki corpus, not on the screen log alone: the log records intent, the pages record
what happened.

## 1. Measure the window, not a sample

Every question here starts with the articles created since a date. Parse `created:` from the
frontmatter, not git history (batches can be committed days later), and collect each article's
declared facet values from `foundations`, `pedagogy`, `technology`, `assessment`, `ethics`,
`institutions`, `discipline`, `methods`. Those values are concept slugs; keep only the ones that
have a file in `content/en/concepts/`.

Two numbers frame everything else:

- **integration rate** = recorded `integrated` decisions / total screen decisions in the window.
  A few percent is normal: most papers change one to three pages. A *category* at zero is the
  signal, not the overall rate.
- **articles per concept** versus **weaves per concept** in the same window. A page with 50–300
  declaring articles and zero integrations has not been screened against evidence; it has been
  receiving a default.

## 2. Title-level matches are the cheap, high-signal audit

For every article, test whether a declared concept's words appear in the article's `title:`.
A title-level match that leaves **zero mentions** on that concept page is either an unrecorded
weave or a dismissal nobody checked. This is the check that catches the failure the screen gate
does not: the gate verifies a decision exists, never that the decision was right.

Before reporting a hit, grep the page for the slug and read the surrounding section. Two false
positives are common: a level page (`higher-ed`) that appears in titles without being the
concept's subject, and a generic tool page (`generative-ai`, `llm`) that is infrastructure for
almost every study. Report title matches on *subject* pages; treat tool and method pages
separately.

## 3. Verify each candidate before calling it a miss

```bash
for pair in "feedback:morris-same-feedback" "scaffolding:rotter-access"; do
  c=${pair%%:*}; a=${pair##*:}
  printf "%-22s %-30s mentions=%s\n" "$c" "$a" "$(grep -c "$a" content/en/concepts/$c.md)"
done
```

A zero count is necessary, not sufficient: confirm the article actually makes a claim the page
lacks (the page's existing coverage may already carry the finding in prose without naming the
study). If the page carries the claim, the miss is a missing citation, not a missing weave.

## 4. Report by class, with counts

Group the findings and put a number on each:

- **misses** — title-level matches with no trace on the page, each with the concept and a one-line
  reason it qualifies;
- **quiet concepts** — zero weaves in the window, with the count of new articles declaring them,
  split into substantive pages (metacognition, privacy, assessment, professional training,
  collaborative learning, agency, prompt engineering) and infrastructure pages (llm, the research
  method pages) that should not accumulate prose;
- **rate** — the window's integration percentage, as context for whether the batch defaulted.

Do not present the raw "declared but unmentioned" gap as a defect count: a page cannot name all
300 articles that touch it, and Connected Articles lists only the subset that was woven. The
defect is a *subject* page with no mention of a paper whose subject it is.

## 5. Repair, then prove it

For each accepted miss: write the weave as its own paragraph or bullet in the section that makes
the claim, add the `## Connected Articles` entry in the same edit, bump `updated`, and update the
`concept-screen.yaml` record so the concept moves from `no_change` to `integrated` with the gap
stated (`was missing ...`). Then run `check-concept-screen.py`, `check-concept-prose.py`,
`check-concept-updated-bump.py`, US English on every touched page, and `run-gates.py --changed`.

Appending a sentence to an existing paragraph fails `check-concept-prose.py` even when the new
sentence is short: the gate re-parses the whole paragraph and flags pre-existing sentences as
added, plus the 150-word paragraph ceiling. Start a new paragraph.

## Pitfalls

- **A facet is a claim about the page, not a label on the article.** "It is only the framing" and
  "it is the activity, not a finding" describe the article's structure; they say nothing about
  whether the page covers it. Read the page before using either phrase in a dismissal.
- **The screen record is append-only and gitignored.** Copy it aside before a rewrite, extend the
  parsed list, re-emit every entry, and assert the count rose; a text split destroys it.
- **A cron or background ingestion can change the answer between turns.** Re-read `created` times
  and recent commits before concluding a page is stale or a paper is missing.
- **Report the repair cost honestly.** N weaves at 2–3 minutes each is the unit of work; do not
  promise a full sweep when the user asked for a diagnosis.

## Relationship to other skills

- `concept-weave-screening` — the per-source decision and its record shape.
- `wiki-concept-narrative` — how one weave is written and gated.
- `kb-coverage-gap-audit` — missing concept *pages* in the taxonomy; this skill audits existing
  pages' absorption of new research.
