---
name: newsletter-production
description: "Use when finalizing or publishing a newsletter issue."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [newsletter, links, publishing, verification]
    related_skills: [newsletter-issue-drafting, newsletter-publishing, newsletter-educator-editorial-pass, humanizer]
---

# Newsletter production gate

Use this after an issue is drafted and before it is called finished. It covers the reader-facing link
pass and the publish gate; pair it with the drafting and publishing skills for storage, routes, and
frontmatter details.

## Link every study mention

- Link each `###` heading to its article page, then link every body mention that identifies the study.
  A sample-size shorthand such as `302-adult experiment` or `193 students` is a study mention, not a
  bare number; link it to the article page.
- Do not rely on the heading link alone. LinkedIn strips links from `###` headings on paste; the body
  link is what makes the study reachable.
- **The body link goes in the first sentence, not somewhere in the paragraph.** Open the summary with
  the study as a linked subject: `[Meyer and colleagues](…) randomized 391 students`,
  `[One charter school](…) gave every first-grade teacher a tutor`. A bare author name or an anonymous
  "a study of 60 students" leaves the item unfollowable in the LinkedIn edition, where the heading
  link is already gone.
- Use the source page path (`/pages/<slug>/`) for study links, not a guessed article path.

## Link every concept mention

- Link standing concept names throughout the prose, not just the first mention. `Generative AI`,
  `student engagement`, `feedback`, and similar named concepts should not sit as plain text while a
  neighbour is linked.
- Do not stop at a quota. A long issue can carry dozens of concept links; the test is whether the term
  names a page the reader would want.
- When two adjacent terms map to the same concept page, link the combined phrase (`attention and
  engagement`) rather than linking one term and leaving the other bare.
- Never nest a concept link inside a linked heading.

## See related addendum

- End every `###` article summary with `See related: [label](url)` pointing to one relevant concept or
  FAQ page. Use that page's title as the label.
- Put the line inside the current article block, after the final paragraph. Find the next `###` or `##`
  boundary before inserting; a cross-section search puts the line under the following section heading.
- Skip the addendum only when no concept or FAQ page genuinely fits.

## An English link edit is a locale-wide change

Every issue exists as an English file plus one per translated locale, and the locale audit compares them
structurally. Adding or removing a link in English therefore breaks all 32 translations at once.

- Run `python3 tooling/scripts/audit-newsletter-locales.py` after any English edit. It compares the
  count of `](` occurrences, `##`/`###`/`- ` counts, the URL set and the frontmatter, and prints one
  line per locale (`ok ar`, `FAIL vi: links 158!=172`). A green page render says nothing about this.
- Propagate the same URLs to every locale file, wrapping the **translated** subject phrase
  (`[Meyer und Kolleginnen und Kollegen](…)`), never the English one. The URL is the only string that
  must match; the anchor text is per-locale prose.
- Delegate in locale batches (four locales per child) and make the audit script the child's oracle: give
  it the command, not a link count. `grep -c '](http'` counts matching *lines*, and the audit's `links`
  figure counts `](` including in-page `#` anchors, so a hand-computed target sends children chasing a
  number that does not exist. A child's work is done when its locales print `ok`.
- Verify the wave yourself afterwards: for each locale, diff against `HEAD`, strip all links from both
  sides of every changed line and require the remaining text to be identical (only links were added);
  then assert that the URL inserted in each item's first sentence equals that item's `###` heading URL.

## Verification

- Render the preview and audit every internal URL against `dist/`; a rendered page succeeds even when a
  slug is broken.
- For each feature block, assert at least one body `/pages/<slug>/` or `/articles/<slug>/` link and one
  `See related:` line.
- Assert the first sentence of every article summary carries the article link. Split each `###` block
  at its first sentence ending and require an `/articles/` URL there; a link further down the
  paragraph does not survive the LinkedIn paste.
- Scan for bare numeric study descriptors (`\d+-adult`, `\d+-student`, `\d+-participant`) that lack a
  nearby link.
- Confirm no em dashes, en dashes, or nested links.

## Publish gate

- Publishing is a separate explicit request. Flip `status: published`, rebuild, verify the detail page,
  listing, newsletter feed, journal, and home page, then push `main`.
- On this corpus, build with `NODE_OPTIONS=--max-old-space-size=8192 npm run build`; the default Node
  heap can abort during `astro check` before rendering. A build that reaches the Pagefind line has
  finished the content build; run the service-worker generator if it was interrupted.
- A successful push is not a successful deployment. Watch the `Build & Verify` run to success and curl
  the live issue, listing, and feed before calling it published.
- Never push without a push request in the current message. Commit locally, report the hash, and ask;
  when approved, push all pending local commits in one push.

## Pitfalls

- **A linked heading hides a missing body link.** The item looks complete while the study is unreachable
  from the body and from LinkedIn. Check for both links.
- **A bare sample-size phrase.** `302-adult experiment` reads like a number rather than a study; link the
  whole descriptor.
- **One word linked, its twin left bare.** When two adjacent terms share a concept page, link the phrase.
- **`See related` inserted after the next heading.** Locate the section boundary within the current block
  before inserting.
- **Trusting the default local build.** The full corpus needs the larger Node heap; verify the Pagefind
  line and the exit status before reading `dist/`.
- **A global spelling replacement renames a URL.** Respelling a word across an issue (`judgement` to
  `judgment`) also rewrites every slug that contains it, and the locale audit then reports one missing
  URL plus one extra while the page links to a 404. The US-English checker ignores link targets, so it
  stays green through the break. Restrict replacements to prose, or restore the URL and re-run the audit
  before committing.
