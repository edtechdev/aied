---
name: newsletter-educator-editorial-pass
description: "Use when doing a final educator-facing newsletter edit."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [newsletter, editing, educators, links, publishing]
    related_skills: [newsletter-issue-drafting, newsletter-publishing, humanizer]
---

# Educator-facing newsletter editorial pass

Use this after an issue is drafted and before it is published. It is the final reader-facing pass: what a
busy instructor, developer, or administrator needs from each item, and what makes the issue feel padded or
untrustworthy.

## Main highlights

- Lead with the practical takeaway. Keep each highlight to roughly 40-60 words. Put sample sizes, effect
  sizes, and design caveats in the linked article page, not in the highlight.
- State the question and answer directly. Do not write teasers that withhold the answer for the body.
- Do not invent a `The common assumption is...` framing. A claim the audience does not actually hold is a
  straw man, even when the study refutes it. If you use refutation, name a real, widely held belief and
  then give the finding; otherwise start with the finding.
- Prefer randomized trials when they exist, but name the design in plain words (randomized trial, audit,
  survey, review) so the reader can judge it. Do not turn one trial into a universal rule.
- Prioritize findings that change a standard practice or belief. A surprising result beats another
  confirmation of what educators already do.

## Audience sections

- Assign an article by the decision it informs, not by a keyword in its title. Administrators get
  procurement, governance, policy, student support, proctoring, and analytics decisions. A curriculum
  framework review belongs in the tail unless its summary names an administrator action.
- Do not repeat a featured article in `Also added this week`. That list is only for studies that did not
  earn a summary. Remove duplicates rather than shortening them twice.

## Article summaries

- First paragraph: about 30-40 words, finding plus the minimum context needed to understand it. Second
  paragraph: the action or implication.
- End every article summary with `See related: [label](url)` pointing to the most useful concept or FAQ.
  Put the addendum after the article block only; appending it after the next section heading puts it under
  the wrong section.
- Link natural concept mentions inline throughout the issue. Do not stop at a quota; a 5k-word issue can
  carry dozens. Use the site's concept and FAQ paths, not guessed slugs.
- Never put a concept link inside a linked heading. Link the heading to the article; put concept links in
  the body.

## New concepts and resources

- Name the section `New concepts`, not `Concept spotlight`, and summarize every new concept page, not a
  selected subset.
- Resource descriptions: one sentence on what the resource is and does. Drop trailing licensing, pricing,
  installation, staffing, privacy-disclaimer, and efficacy caveats; those belong on the resource page.

## Site notes

- Describe major changes, not interface trivia: payload reduction with measured numbers, translation
  refresh, moved offline assets.
- List every locale version with its native name and the English language name in parentheses. Link EPUB
  and PDF only for languages that actually have them; mark the rest site-only.
- Call the shared asset destination the `GitHub releases location` and link it to the repository releases
  page.

## Verify and publish

- Render the preview and audit every internal link against `dist/`; broken links are invisible in the
  rendered prose.
- No em dashes, en dashes, or decorative bold.
- Publishing is a separate explicit request. Flip `status: published`, build with
  `NODE_OPTIONS=--max-old-space-size=8192 npm run build` (the default heap can OOM on this corpus), then
  verify the detail page, listing, newsletter feed, journal, and home page. Push `main` only after the
  user asks, watch the CI run to success, and curl the live page before calling it published.

## Pitfalls

- **Straw-man assumptions.** `A good enough model is often assumed to match the teacher` reads as a claim
  the author invented. Start with the finding instead.
- **Cautionary tails in highlights.** `One cycle cannot show...` belongs in the article page. The
  highlight should leave the reader with the takeaway, not a disclaimer.
- **Audience-by-title.** A K-12 framework review is not an administrator story just because
  administrators oversee curriculum.
- **Appending `See related` after a section heading.** Locate the next `###`/`##` within the current article
  block; a naive search across sections inserts the line under the following section.
- **Assuming a default-memory build succeeded.** The full build can OOM before rendering; rerun with the
  8 GB heap and wait for the Pagefind line before verifying `dist/`.
