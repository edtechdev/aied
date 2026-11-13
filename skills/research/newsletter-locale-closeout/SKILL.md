---
name: newsletter-locale-closeout
description: "Use when finishing a batch of translated newsletter issues."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [newsletter, translation, localization, astro, closeout]
    related_skills: [newsletter-localization, newsletter-localized-routing, newsletter-editorial-quality]
---

# Newsletter locale closeout

Use after one locale has translations for several existing issues, before committing or publishing.
The translation files are only the start: the locale archive, the language globe, and `hreflang` must
all know the new issue routes, and the series titles must agree with one another.

## Translate the batch

- Translate one issue per child when several issues are needed. Give each child the English source, the
  reviewed translation in another locale as a structural reference, and a strict output path.
- Tell children not to run git, npm, Astro, or builds; the parent owns validation and commits.
- Keep study titles in a long added-studies list in their original language when they point at English
  article pages. Translate the prose and descriptive headings around them.
- Preserve every URL byte-for-byte and every number. Normalize decimal and thousands separators before
  comparing digit runs; a leading zero is not a lost number.
- Recompute every TOC anchor from the translated headings with `github-slugger`. Do not hand-write
  anchors for accented headings.

## Audit the batch in one pass

Do not accept child-reported statistics. Run one parent-side check over every file:

- URL multiset against the English source, including duplicates and order-independent counts.
- `##` and `###` counts, plus per-section block and bullet counts where the issue has them.
- TOC entries all resolve against the actual heading slugs.
- `translation_of` matches the issue slug; `issue`, `created`, `spotlight`, `type`, and `status` copied.
- The body's italic machine-translation notice matches `translation_note`.
- One `ai_assist` entry with `role: translation`, a real model id, date, and agent.
- The localized equivalent of `See related:` appears the same number of times as English.
- For the newest issue, the final added summary and its editorial note are present, not omitted.

Normalize the series title across every issue in the locale. Independent translators drift between
`#2` and `n° 2`, or between two translations of the same series name. Pick one pattern and apply it to
the whole set before reporting.

## Wire the locale chrome

A rendered detail page without a language globe is only half-localized.

- `newsletterTranslations` is a separate collection, so the map built from the `translations`
  collection does not contain issue routes. Merge them before `setTranslationMap`:

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

Do not add issue routes to `TRANSLATED_ROUTES`: that marks every locale as translated and creates links
to pages that do not exist.

- Verify the built English issue has the globe markup, an `hreflang` alternate for the new locale, and a
  switcher entry pointing at `/<base>/<locale>/news/<date>/`.
- Verify the localized archive links `/<base>/<locale>/news/<date>/` and shows the translated title and
  summary; the English archive and feed must still contain only English issue URLs.

## Right-rail concepts link

When the Recently Updated Concepts block ends, link to the complete concepts index with the existing
`.recent-more` styling and `localizeHref('/aied/concepts/', locale)`. If the locale lacks a dedicated
`viewAllConcepts` string, use the localized `concepts` label plus the arrow from `viewAllPages`; a
hard-coded `→` is wrong in RTL locales.

## Publish gate

- Never push without a push request in the current message. Commit locally, report the hash, and ask;
  push all pending commits in one push when approved.
- A successful push is not a deployment. Watch the GitHub Actions run to success and fetch the live
  issue, archive, and feed before calling it published.
- A shell wrapper can return 0 while the build died. If the command appends `EXIT=$?`, read that line;
  `EXIT=143` is a SIGTERM, not success.
- If the local full build cannot finish, say so plainly and let CI build after approval; verify the live
  output rather than claiming a local build succeeded.

## Pitfalls

- **Translated files with no route or archive entry.** A file under the locale folder is invisible until
  the collection, detail route, and archive lookup exist.
- **A page that renders but has no globe.** The route works while the switcher map or `showSwitcher`
  test still excludes it. Check the built HTML, not only the source route.
- **Per-issue title drift.** Translators working separately name the same series differently. Normalize
  the whole locale before committing.
- **Child-reported verification accepted as fact.** Re-run the URL, heading, anchor, and frontmatter
  checks in the parent; a child can write a valid file while its verification script fails on a sibling.
