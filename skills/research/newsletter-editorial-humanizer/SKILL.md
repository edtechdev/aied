---
name: newsletter-editorial-humanizer
description: "Use when humanizing or proofreading newsletter prose."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [newsletter, editing, humanizer, provenance]
    related_skills: [newsletter-educator-editorial-pass, humanizer, newsletter-issue-drafting]
---

# Newsletter editorial humanizer

Use after the issue's facts and links are settled and before publication, when the user asks for a
humanizer pass, prose cleanup, or an AI-provenance note. Edit the actual issue file; do not create a
second newsletter page as the working copy.

## Work on the real source

- Edit `content/en/newsletters/<issue-date>.md` (or the localized issue when that is the target).
- Save the exact prior version outside the repository first — git already holds it, so the point is a quick
  diff surface, not durability: put it in the agent scratch directory (e.g.
  `$HERMES_SCRATCH/<issue-date>.pre-humanizer.md`), never in the repo. A `backups/` folder committed to a
  public repo is noise every clone pays for. And never save a `.md` inside `content/`, which becomes
  another issue and pollutes the collection.
- A standalone preview HTML is a review surface. Re-render it from the actual markdown after every edit;
  never treat it as the source, and do not imply the published route changed when only the preview did.
- If a full build is slow or interrupted, say the preview is standalone and keep iterating on the source.

## Rewrite rules

- State claims affirmatively. Replace `not X, but Y`, `not just X but Y`, `X rather than Y`, and clipped
  negative tails with the positive claim. Keep a negative when the negative is the finding (`the report
  changed neither completion nor test scores`) or corrects a belief the reader actually holds.
- Vary repeated sentence openings. A run of paragraphs beginning `The new X page...` is a formatting
  default, not a style.
- Remove rhetorical kickers that restate the previous sentence. Keep one-line emphasis only when it adds
  a fact or consequence.
- Leave factual null results and statistical non-significance intact; do not turn a null finding into a
  positive claim.
- Omit sample sizes, model counts/versions, and effect sizes from main highlights unless the number
  changes the practical implication. They belong in the linked article page.
- Do not change study titles, link targets, numbers, dates, or names. A style edit that drops a citation
  or decimal is a failed edit.

## Preservation checks

Before and after the rewrite, compare the backup and current file:

- URL multiset must be identical.
- Digit-run multiset must be identical.
- Heading and section counts must be identical.
- No em dashes or en dashes should be introduced.
- The rendered preview has one `h1`, the expected sections, no unresolved TOC anchors, and no broken
  internal links.

Report the word change, the backup path, and the preserved link and number counts. Give a few concrete
before/after examples rather than a narrative of the editing session.

## Editorial provenance note

When the user asks for a note at the end of a summary:

- Put it in square brackets and italics on the same block as the summary so it stays attached to that
  item.
- Use the exact reminder prefix the user requests; if they say `As a reminder, this newsletter and the
  AIEd Knowledge Base`, begin with that phrase.
- State that the newsletter and knowledge base are AI-generated.
- Link the humanizer skill and the source article on the anti-`not X, but Y` issue; do not invent either
  URL.
- Name the developer's heavy editorial guidance as the reason for the readability and usefulness work.
- Keep it a note, not a new section or a separate page.

## Pitfalls

- **Editing the preview instead of the issue.** The HTML can look current while the source, route, and
  feed remain stale. Patch the markdown, then re-render.
- **Backup inside the collection.** `content/**/newsletters/*.md` is collected automatically; a backup
  there becomes a duplicate issue.
- **Cosmetic negation swap.** Replacing `not X, but Y` with `X, not Y` keeps the same rhetorical move.
  Write the affirmative claim alone.
- **Over-cleaning factual findings.** Null results and non-significant effects need their negatives;
  remove rhetorical negation, not evidence.
- **Reporting style changes without preservation proof.** Count URLs and numeric tokens against the
  backup before saying the rewrite preserved the issue.
