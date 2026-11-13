---
name: newsletter-editorial-quality
description: "Use when finalizing newsletter edits and locale chrome."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [newsletter, editing, provenance, localization, astro]
    related_skills: [newsletter-editorial-humanizer, newsletter-localized-routing, newsletter-production]
---

# Newsletter editorial quality

Use this at the end of an issue's edit cycle, after the facts and links are settled. It covers the
reader-facing provenance note, the final humanizer pass, and the small Astro integration details that
make a translated issue usable. Edit the actual issue file; a preview is a review surface, not the
source.

## Provenance note

Put the note at the end of the summary it belongs to, in italic square brackets on the same block so it
stays attached.

- Begin with the user's requested reminder prefix when there is one. For this site: `As a reminder,
  this newsletter and the AIEd Knowledge Base are AI-generated.`
- Put the developer's extensive editorial guidance first, then say what happened afterward. The order
  carries meaning: guidance came first; the Humanizer pass came after it.
- Name the actor. Write `AI agent applied the Humanizer skill and followed an explicit instruction`,
  not `this issue used the Humanizer skill`. A document cannot use a skill; an inanimate subject hides
  who acted and is itself an AI-writing tell.
- Link the Humanizer skill at https://github.com/blader/humanizer and the article on the
  anti-`not X, but Y` issue at
  https://www.psypost.org/one-of-ais-most-annoying-writing-habits-has-a-2000-year-old-history/.
- Apply the same affirmative, active-voice rules to the note itself. Explaining the anti-contrast rule
  does not license a new negate-and-upgrade construction.
- Keep it a note, not a new section, page, or second summary.

## Final humanizer pass

- Save the pre-edit version outside `content/` (for example `backups/newsletters/<date>.pre-humanizer.md`).
  A backup inside the collection becomes another issue.
- Replace `not X, but Y`, `not just X but Y`, `X rather than Y`, and clipped negative tails with the
  affirmative claim. Keep a negative when the negative is the finding or corrects a belief the reader
  actually holds.
- Leave factual null results, non-significance, dates, names, numbers, and link targets intact.
- Omit sample sizes, model counts, and effect sizes from main highlights unless the number changes the
  practical implication.
- Before reporting success, compare the backup with the current file: URL multiset, digit-run multiset,
  heading counts, and no new em or en dashes. Render the preview and check one `h1`, sections, TOC
  anchors, and internal links.

## Localized issue chrome

A translated issue is not complete when its markdown route renders. The language globe and `hreflang`
alternates also have to know about it.

- `newsletterTranslations` is a separate collection, so `translationMapFrom(getCollection('translations'))`
does not contain issue routes. Merge them before `setTranslationMap`:

```ts
const newsletterTranslations = await getCollection('newsletterTranslations');
for (const n of newsletterTranslations) {
  const [code, , file] = n.id.split('/');
  if (!code || !file) continue;
  (translationMap[code] ||= []).push(`/news/${file.replace(/\.md$/, '')}`);
}
```

- `BaseLayout` hides the switcher unless its route test matches. Add issue pages explicitly:

```ts
/^\/news\/[^/]+$/.test(pageRoute)
```

Do not add issue routes to `TRANSLATED_ROUTES`; that marks every locale as translated and creates links
to pages that do not exist.

- Verify the built English issue contains the globe markup and an `hreflang` alternate for the
  translated locale, and that the switcher entry points at `/<base>/<locale>/news/<date>/`.

## Right-rail concepts link

When the Recently Updated Concepts block ends, add a link to the complete concepts index. Reuse the
existing `.recent-more` styling and localize the destination with `localizeHref('/aied/concepts/', locale)`.
For locales without a dedicated `viewAllConcepts` string, fall back to the localized `concepts` label plus
the arrow direction from the existing `viewAllPages` string; a hard-coded `→` is wrong in RTL locales.

## Publish and build gate

- Never push without a push request in the current message. Commit locally, report the hash, and ask;
  push all pending commits in one push when approved.
- A successful push is not a deployment. Watch the GitHub Actions run to success and curl the live issue,
  archive, and feed before calling it published.
- A shell wrapper can return 0 while the build died. If the command appends `EXIT=$?`, read the log's
  `EXIT` line and the process status; `EXIT=143` is a SIGTERM, not success.
- If a local full build cannot finish, say so plainly. `NODE_OPTIONS=--max-old-space-size=8192` fixes the
  default-heap `astro check` abort, but it does not guarantee the full corpus fits; let CI build after
  approval and verify the live output.

## Pitfalls

- **Note edited on the preview.** The preview can look current while the markdown, route, and feed remain
  stale. Patch the markdown and re-render.
- **Provenance note with an inanimate actor.** `This issue used...` reads like an AI tell even when the
  facts are right. Name AI agent or developer.
- **Globe hidden on a translated issue.** The route can be correct while `showSwitcher` is false and the
  translation map lacks the issue route.
- **A wrapper exit reported as build success.** Check the log's actual exit and the built routes.
