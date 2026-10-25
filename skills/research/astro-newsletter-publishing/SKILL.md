---
name: astro-newsletter-publishing
description: "Use when adding a new page family to the Astro site."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [astro, content-collections, routes, rss, i18n, newsletter]
    related_skills: [newsletter-publishing, newsletter-issue-drafting, wiki-site-quality]
---

# Wiring a new page family into the Astro knowledge-base site

Wire-level recipe for adding a content type that needs a listing, detail pages, a feed, an icon and a
place in the existing navigation. Worked example: the newsletter at `/news` (Astro 7, content
collections, `basePath: /aied`, config in `site.config.json`).

Editorial rules for newsletter issues themselves live in the `newsletter-publishing` and
`newsletter-issue-drafting` skills; this file is the plumbing.

## 1. The collection

`src/content.config.ts` derives `contentDir`, `DEFAULT_LOCALE_DIR` and `CONTENT_ROOT` from the site
config. Add a directory constant and a collection, and export it:

```ts
const newslettersDir = contentDir(DEFAULT_LOCALE_DIR, 'newsletters');

const newsletters = defineCollection({
  loader: glob({ pattern: '*.md', base: newslettersDir }),
  schema: z.object({
    title: z.string(),
    created: timeField,                                   // full ISO timestamp, like every page
    updated: timeField.optional().transform(v => v ?? ''),
    issue: z.number(),
    summary: z.string(),                                  // listing + feed item
    status: z.enum(['draft', 'ready', 'published']).catch('published'),
    spotlight: z.array(z.string()).optional(),
  }),
});

export const collections = { articles, concepts, faqs, resources, newsletters, translations };
```

Do **not** add it to `COLLECTIONS` in `src/config/content.ts`. That list drives the translated-collection
globs and the Python tooling (content paths, facet validation, staleness checks); a fifth entry there
pulls the new type into machinery that expects translations and facets.

Then `npx astro sync` (regenerates the `.astro/` types) before `npx tsc --noEmit`.

## 2. Routes

- `src/pages/news.astro` — listing. Filter `status !== 'draft'`, sort by `created` descending, show
  number, formatted date, `summary`, and link each item. Style each issue as a sibling of the journal's
  rows, not as a card: a `div` per issue with the journal's `.journal-entry` geometry
  (`border-inline-start: 2px solid var(--primary)`, `padding-block: 0.4rem`,
  `padding-inline: 1.2rem 0`) and the page-type icon before the title. A `<ul>` with boxed `<li>`
  cards reads as a different page family than the rest of the site. Its intro is the natural place to explain the
  publication and link **both** feeds.
- `src/pages/news/[slug].astro` — detail. `getStaticPaths` over the same filtered collection,
  `renderMarkdown(body, { pageTitle, articleSlugs, conceptSlugs, faqSlugs, titles })` from
  `src/lib/markdown`, pass the returned `headings` to `BaseLayout` as `toc` so the right rail works, and
  add previous/next links off the sorted array.

`renderMarkdown` drops a leading H1 that duplicates `pageTitle`, expands `[[wikilinks]]` and renders
math, so a body can use the corpus's own link syntax.

A page family that exists in one language only takes plain `${siteConfig.basePath}/...` hrefs, never
`localizeHref`, or every locale gets a link to a page that does not exist.

## 3. The second feed

`src/pages/news/rss.xml.ts`, modeled on the site's existing feed module. Reuse its `toRfc822Local`
helper: `@astrojs/rss` reformats a `Date` to UTC, which rolls an Eastern-evening timestamp onto the next
calendar day, so the item carries `<pubDate>` through `customData` with its own offset preserved.

Add the discovery link next to the existing one in the layout head:

```astro
<link rel="alternate" type="application/rss+xml" title="<Name>"
      href={`${siteConfig.basePath}/news/rss.xml`} />
```

A static route (`news/rss.xml.ts`) wins over the dynamic `news/[slug].astro`, so both coexist.

## 4. Icons

`src/lib/pageTypeIcons.ts` is canonical: `PATHS: Record<PageKind, string>` of inline Lucide SVG path
strings, plus `PAGE_KIND_LABEL` and `PAGE_KIND_BADGE`. Add the kind there (`newsletter` uses Lucide
`newspaper`), keeping `stroke="currentColor"`, `stroke-width="2"`, the 24x24 viewBox and the 16px
default so it matches file-text / lightbulb / circle-help / toolbox.

Then extend every local map that switches on kind, because they are separate copies:

- `src/components/pages/JournalPage.astro` — `ICONS`, `BASES`, `COLLECTIONS`.
- `src/components/RecentActivity.astro` — `ICONS` **and** `KIND_LABEL` (a
  `Record<PageItem['kind'], string>`; a missing entry is a type error that stops the build).
- `src/layouts/BaseLayout.astro` — the `SECTIONS` record behind the sidebar's recently-added list.

## 5. Journal and sidebar

Both build one reverse-chronological list from every collection. Add the new collection to the spread
and special-case its title and href: a published issue has one canonical URL and its `title` is the
publication name, so list it as `"<Name>, issue N"` linking to `/news/<date>/` with no locale rewriting.

## 6. Header entry

The header icon row in `src/layouts/BaseLayout.astro` carries `class="header-icon"` anchors with
`data-overflow-item` and `data-priority` (lower numbers overflow into the more-menu last, so keep a new
icon near its neighbours). Label it with a UI string added to **all** locale modules in one pass, in the
same key order, or the locale checker fails every locale at once.

## 7. Verify

```
npx astro sync && npx tsc --noEmit
npm run build > /tmp/build.log 2>&1; echo "BUILD EXIT=$?" >> /tmp/build.log
grep -E "page\(s\) built|BUILD EXIT|error" /tmp/build.log
```

After `page(s) built` appears, check `dist/`:

```
ls dist/news dist/news/<issue-date>/
grep -o "<title>[^<]*</title>" dist/news/rss.xml | head
grep -c 'href="/aied/news/"' dist/index.html          # header icon
grep -c '<Name>, issue' dist/index.html dist/journal/index.html
grep -c 'issue 1' dist/rss.xml                        # must be 0: the main feed is untouched
grep -c '<h1' dist/news/<issue-date>/index.html       # exactly 1
```

Then fetch `/news/`, `/news/<date>/` and `/news/rss.xml` from the standing preview server and expect 200.

## Pitfalls

- **Type errors right after adding a collection.** Content types are generated by `astro sync`. Run it
  before `tsc`, or every reference fails with "not assignable to keyof DataEntryMap" and the config
  looks wrong when it is fine.
- **Reading `dist/` while the build is running.** Locale folders are written before the root pages, so
  `dist/index.html` may not exist yet and a mid-build check reports phantom failures. Wait for
  `page(s) built` and the exit code.
- **Trusting raw substring checks on rendered HTML.** The markdown renderer wraps output at its own
  column width, so a phrase fails to match while the same words split across a newline are on the page.
  Normalize with `re.sub(r"\s+", " ", html)` before asserting, or you will chase defects that do not
  exist and report fixes for untouched content.
- **Running text into a link in an Astro template.** A newline between `</a>` and the next word is
  trimmed, so the rendered page reads "…newsletter feedholds the issues…" and "Theknowledge base
  feed". Put an explicit `{' '}` on both sides wherever a line break sits between an inline element and
  running text, then prove it on the built page: `re.search(r"</a>[A-Za-z0-9]", body)` must find
  nothing in the article body. Markdown bodies are unaffected; this only bites hand-written templates.
- **Filtering a draft status in one consumer only.** Every consumer queries the collection separately;
  put the filter in the query, not the template.
- **Naming the new type in the shared collection-order list.** Facet validation, translation staleness
  and the EPUB builder assume the four knowledge-base collections; a fifth entry drags the new type into
  all of them.
