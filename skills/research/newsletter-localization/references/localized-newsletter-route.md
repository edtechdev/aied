# Localized newsletter route

The route is a small set of coordinated pieces. The English issue stays canonical; the translated
issue is an alternate route with its own archive entry and feed.

## Collection

```ts
const newsletterTranslations = defineCollection({
  loader: glob({
    pattern: `{${TRANSLATED_LOCALES.join(',')}}/newsletters/*.md`,
    base: resolve(process.cwd(), CONTENT_ROOT),
  }),
  schema: z.object({
    title: z.string(),
    created: timeField,
    updated: timeField.optional().transform(v => v ?? ''),
    issue: z.number(),
    summary: z.string(),
    status: z.enum(['draft', 'ready', 'published']).catch('published'),
    spotlight: z.array(z.string()).optional(),
    translation_of: z.string(),
    translation_note: z.string().optional(),
    source_updated: timeField.optional(),
    ...provenance,
  }),
});
```

Register it in `collections`, but keep it out of the ordinary `translations` collection and out of
`TRANSLATED_COLLECTIONS` in `src/config/content.ts`.

## Detail route

`src/pages/[locale]/news/[slug].astro`:

```ts
export async function getStaticPaths() {
  const issues = (await getCollection('newsletterTranslations'))
    .filter((n) => n.data.status !== 'draft');
  return issues.map((issue) => {
    const parts = issue.id.split('/');
    return {
      params: {
        locale: parts[0],
        slug: parts[parts.length - 1].replace(/\.md$/, ''),
      },
    };
  });
}
```

Look up the issue by locale and slug, not with `endsWith` on the full id; then render it with the same
`renderMarkdown` and collection slug sets as the English route. Replace `{{editor.name}}` and
`{{editor.contactUrl}}` after rendering.

## Archive lookup

The archive iterates the English `newsletters` collection and looks up a translation by
`translation_of`:

```ts
const translatedBySlug = new Map(
  (await getCollection('newsletterTranslations'))
    .filter((n) => n.data.status !== 'draft' && n.id.startsWith(`${locale}/`))
    .map((n) => [n.data.translation_of, n]),
);
const translated = translatedBySlug.get(`newsletters/${slug}`);
const href = translated
  ? `${base}/${locale}/news/${slug}/`
  : `${base}/news/${slug}/`;
```

Use the translated title and summary when present; otherwise keep the English values and URL.

## Language switcher and hreflang

The layout's translation map normally comes from the `translations` collection. Newsletter entries
live in their own collection, so merge their issue routes into that map before rendering:

```ts
const newsletterTranslations = await getCollection('newsletterTranslations');
for (const n of newsletterTranslations) {
  const [code, , file] = n.id.split('/');
  if (!code || !file) continue;
  (translationMap[code] ||= []).push(`/news/${file.replace(/\.md$/, '')}`);
}
```

The language switcher's `showSwitcher` test must include `/^\/news\/[^/]+$/`; otherwise the globe is
hidden on every issue page. `hreflang` alternates then include only the locales with a translation.

## Feed

`src/pages/<locale>/news/rss.xml.ts` reads `newsletterTranslations`, filters `status !== 'draft'` and
`id.startsWith('<locale>/')`, renders each body, and sets the item link to
`${siteConfig.basePath}/<locale>/news/<slug>/`. Set `site` to `${siteConfig.url}/<locale>/` and add
`<language><locale></language>` through `customData`.

## Verify

- `dist/<locale>/news/<date>/index.html` is a real page, not a redirect stub.
- The localized archive lists four translated issues with localized hrefs.
- The localized feed has one item per translation, the right language, and localized links.
- The English feed and archive contain no localized issue links.
- The issue page shows the globe and the localized feed alternate in `<head>`.
