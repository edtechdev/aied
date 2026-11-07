---
name: newsletter-localized-feed
description: "Use when adding a localized newsletter RSS feed."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [newsletter, rss, i18n, astro, localization]
    related_skills: [newsletter-localized-routing, newsletter-localization, newsletter-production]
---

# Localized newsletter feeds

Use after a locale already has translated issue pages and a localized archive. The feed is a third
consumer: it must carry translated titles, summaries, full bodies, and localized issue links without
letting translations into the English feed.

## Feed route

Add a static endpoint at `src/pages/<locale>/news/rss.xml.ts` (or a generic `[locale]` endpoint when
several locales have translations). Read `newsletterTranslations`, not `newsletters`:

```ts
const issues = (await getCollection('newsletterTranslations'))
  .filter((n) => n.data.status !== 'draft' && n.id.startsWith(`${locale}/`))
  .sort((a, b) => b.data.created.localeCompare(a.data.created));
```

For every issue:

- `title` and `description` come from the translation's frontmatter.
- `link` is `${siteConfig.basePath}/${locale}/news/${slug}/`, never the English issue URL.
- Render the translated body with the same `renderMarkdown` and collection slug sets used by the
detail route, then replace `{{editor.name}}` and `{{editor.contactUrl}}`.
- Preserve the issue timestamp with the feed's existing RFC-822 helper; do not pass a UTC-shifted
  `Date` that changes the calendar day.
- Set `customData` language to the locale code.

Set the channel `site` to `${siteConfig.url}/${locale}/`. `siteConfig.url` already includes
`basePath` in this repo, so adding `basePath` again produces `/aied/aied/<locale>/`.

## Advertise it

- Update `feedsHtml` in `src/i18n/pages/news.<locale>.ts` so the localized archive links the
  localized newsletter feed, not the English one.
- Add the localized feed link to the latest translated issue's "follow" section.
- If the layout advertises feeds in `<head>`, add the localized newsletter feed as an alternate
  there too; do not remove the English site feed.

## Verify

- Build with `NODE_OPTIONS=--max-old-space-size=8192 npx astro build`, then `node generate-sw.mjs`.
- The feed returns 200, has one item per published translation, has the locale language, and every
  item link points at `/<base>/<locale>/news/<date>/`.
- The localized archive's feed link and the latest issue's feed link both resolve.
- The English newsletter feed and English archive contain no `/es/` or other translated issue URLs.

## Pitfalls

- **Double base path.** Using `${siteConfig.url}${siteConfig.basePath}/${locale}/` yields
  `/aied/aied/es/` because `siteConfig.url` already ends in the base path.
- **English feed polluted.** Filtering the translation collection is not enough if the localized
  endpoint forgets `id.startsWith(`${locale}/`)`; the Spanish feed then republishes every locale.
- **Feed links point to English pages.** Each item's `link` must be the localized detail route; the
  feed reader must land on the translated issue.
- **A feed nobody can find.** Adding the endpoint without updating `feedsHtml` and the latest issue
  leaves it undiscoverable even though it returns 200.
