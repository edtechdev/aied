---
name: newsletter-localized-routing
description: "Use when a newsletter needs a translated locale route."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [newsletter, translation, astro, routing, i18n]
    related_skills: [newsletter-localization, newsletter-publishing, newsletter-production]
---

# Routing a translated newsletter issue

Use this when an English newsletter issue exists and a locale needs a readable, linked page for its
translation. A markdown file under `content/<locale>/newsletters/` is invisible until the collection,
detail route, and archive lookup all exist. Keep the English issue canonical; the translated page is
an alternate, not a second issue.

## Architecture

1. Keep the existing English `newsletters` collection and feed unchanged.
2. Add a separate `newsletterTranslations` collection over
   `{<translated locales>}/newsletters/*.md`. Do not widen `TRANSLATED_COLLECTIONS` or the
   `translations` glob: those carry concepts, FAQs, and resources, and mixing newsletters into them
   makes the English archive and feed treat translations as issues of their own.
3. Add a generic `src/pages/[locale]/news/[slug].astro` route generated from the translation
   collection.
4. Make the localized archive (`src/components/pages/NewsPage.astro`) replace the English issue
   title, summary, and URL only when a published translation exists. Without this lookup the route is
   unreachable from the archive.

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

Export it from `src/content.config.ts`, then run `npx astro sync` before typechecking. The translation
frontmatter carries the same `issue` and `created` values, translated `title` and `summary`,
`translation_of: "newsletters/<issue-date>"`, the locale notice, and an `ai_assist` entry with
`role: translation`.

## Detail route

`getStaticPaths` reads only published translation records. Derive both params from the collection id:

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

In page code, compare the last path segment after stripping an optional `.md`; never compare the full
collection id or require a literal `.md` suffix:

```ts
const issue = translatedIssues.find(
  (n) =>
    n.id.split('/')[0] === locale &&
    n.id.split('/').pop()!.replace(/\.md$/, '') === slug,
);
```

Render the translated body with the same `renderMarkdown` used by the English issue, pass `locale` to
`BaseLayout` and `SourceButtons`, link the back link to `${base}/${locale}/news/`, and point the source
button at `content/${locale}/newsletters/${issueSlug}.md`.

## Archive lookup

Load published translations once per locale and map them by `translation_of`:

```ts
const translatedIssues = (await getCollection('newsletterTranslations'))
  .filter((n) => n.data.status !== 'draft' && n.id.startsWith(`${locale}/`));
const translatedBySlug = new Map(
  translatedIssues.map((n) => [n.data.translation_of, n]),
);
```

For each English issue, use the translation when present:

```ts
const slug = issue.id.replace(/\.md$/, '');
const translated = translatedBySlug.get(`newsletters/${slug}`);
const title = translated?.data.title ?? issue.data.title;
const summary = translated?.data.summary ?? issue.data.summary;
const href = translated
  ? `${base}/${locale}/news/${slug}/`
  : `${base}/news/${slug}/`;
```

An untranslated issue must keep its English title, summary, and URL. Never point an English archive
entry at a translated page that does not exist.

## Verification

```
npx astro sync
NODE_OPTIONS=--max-old-space-size=8192 npx astro check
NODE_OPTIONS=--max-old-space-size=8192 npx astro build
node generate-sw.mjs
```

For every translated issue:

- `dist/<locale>/news/<date>/index.html` exists, is not a redirect stub, has one `h1`, and contains
  the translated title and body.
- The localized archive's `<div class="news-list">` links `/<base>/<locale>/news/<date>/` and shows the
  translated title and summary.
- The English archive and English newsletter feed still contain only English URLs and text.
- Decode percent-encoded TOC anchors before comparing them with heading ids.
- Compare URL multisets and digit runs with separators normalized. A leading zero is not a lost
  number: English `.110` becomes Spanish `0,110`.

## Pitfalls

- **A redirect stub instead of a page.** This means the route's lookup failed. Match the last path
  segment with an optional `.md`; a literal `endsWith('.md')` fails when the collection id has already
  lost its extension. Test the built HTML for `Redirecting` rather than trusting a 200.
- **A route nobody can reach.** The detail page can be correct while the localized archive still
  links the English issue. Inspect the archive's `href`, not only the page.
- **Translations appearing as English issues.** Keep the new collection out of the English feed and
  archive; only the archive lookup consults it for its own locale.
- **The English label left in translated prose.** Translate `See related:` to the locale's equivalent,
  for example `Ver también:` in Spanish.
- **A long build treated as a failure by a tool timeout.** The full corpus can run longer than the
  terminal timeout. A log ending at `Pagefind indexed N pages` means the content build finished; run
  `node generate-sw.mjs`. If the process died before the sitemap step, do not claim a local sitemap
  check; CI will generate it.
- **Translating one issue by hand for every locale.** Once the collection and route exist, one child per
  locale can write whole translated issues while the parent owns validation and commits. Keep children
  read-only on git and the build.
