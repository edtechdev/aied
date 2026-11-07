---
name: newsletter-localization
description: "Use when translating and routing a newsletter issue."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [newsletter, translation, i18n, astro, routing]
    related_skills: [newsletter-production, newsletter-publishing, new-page-translation]
---

# Localizing a newsletter issue

A newsletter collection is usually English-only even when the rest of the site is localized. A
translation is therefore two jobs: translate the issue, then teach the site that the translated issue
is a page with its own route and archive entry. Do not stop at a translated markdown file unless the
user asked only for a file; a file under `content/<locale>/newsletters/` is invisible until the
collection, route, and archive link exist.

## Scope and storage

- English issues live at `<content>/en/newsletters/<issue-date>.md`. The `newsletters` collection is
  intentionally kept out of the translated collections glob.
- Put a translated issue at `<content>/<locale>/newsletters/<issue-date>.md`.
- Add a separate `newsletterTranslations` collection. Do not widen `TRANSLATED_COLLECTIONS` or the
  `translations` glob: those carry concepts, FAQs, and resources, and mixing newsletters into them
  makes the English feed and archive see translations as issues of their own.
- Keep the English issue as the canonical page. The localized page is an alternate, not a replacement.

## Translation file contract

- Copy the English issue's `title`, `issue`, `created`, `summary`, `status`, and `spotlight`; translate
  the values that readers see. Keep slugs and identifiers byte-identical.
- Add `translation_of: "newsletters/<issue-date>"`, `translation_note`, and an `ai_assist` entry with
  `role: translation`, the real model id, date, and agent.
- Put the locale's machine-translation notice in the body as its own italic first line, matching the
  locale's existing convention. Do not invent a new notice wording.
- Translate every heading, table of contents entry, summary, call to action, and link label. Translate
  `See related:` to the locale's equivalent, for example `Ver también:` in Spanish.
- Keep study titles in a long added-studies list in their original language when they link to English
  article pages; translate the surrounding prose and the descriptive headings. Say this choice in the
  delivery report so it is not mistaken for missing translation.
- Preserve every numeric claim and link URL. Normalize decimal and thousands separators for the locale
  before comparing digit runs.
- Do not add local detail, drop a caveat, or rewrite the English argument. A translation is not an
  editorial revision.

## Wiring the route

Use the pattern in `references/localized-newsletter-route.md`. The three parts are:

1. A `newsletterTranslations` collection whose glob is
   `{<translated locales>}/newsletters/*.md`, with `translation_of` and `status` in its schema.
2. A generic `src/pages/[locale]/news/[slug].astro` route generated from that collection. It renders
   the translated body with the same markdown renderer as the English issue and links back to the
   localized archive.
3. The localized archive (`src/components/pages/NewsPage.astro`) must look up a translation for each
   English issue and use the translated title, summary, and URL when one exists. Without this lookup the
   route exists but no reader can reach it.

Filter `status: draft` in the collection query, the route's `getStaticPaths`, and the archive lookup.
An untranslated issue keeps the English URL and English text, which is the site's normal fallback.

## Link and structural gate

Apply the same reader-facing link gate as the English issue:

- Link every body study mention, including sample-size shorthand such as `302-adult experiment`, to its
  `/pages/<slug>/` source page.
- Link standing concept names and translate the link label without changing the target. Link the
  outcome to the outcome concept, not the measurement process (`test-score gains` goes to learning
  gains, not assessment).
- End every `###` article summary with the localized `See related` line. Compute the insertion boundary
  as `min(index("\n### "), index("\n## "))`; searching for `###` first and falling back to `##` can skip
  the next section heading and insert the line under the wrong section. Assert that no `See related`
  line sits between a `##` heading and its first `###`.
- Do not leave the English label `See related:` in a translated issue; it is visible prose.

## Verify

Run the content sync first when a collection is new, then typecheck and build:

```
npx astro sync
NODE_OPTIONS=--max-old-space-size=8192 npx astro check
NODE_OPTIONS=--max-old-space-size=8192 npx astro build
node generate-sw.mjs
```

The default Node heap can abort during `astro check`; a build that reaches the Pagefind line has
finished the content build, so run `generate-sw.mjs` if the build process was interrupted.

Check the built output, not just the source:

- `dist/<locale>/news/<issue-date>/index.html` exists, is not a redirect stub, has one `h1`, and carries
  the translated title and body.
- The localized archive's issue link points to `/<base>/<locale>/news/<issue-date>/`, not the English
  URL, and uses the translated title and summary.
- The English archive still points to the English URL; the English newsletter feed still contains only
  English issues.
- The localized page's internal links resolve against `dist/`, the `See related` count matches the
  English issue, and decoded TOC anchors match heading ids. A raw percent-encoded anchor can look broken
  while the browser resolves it; decode before judging it.
- The sitemap contains the localized route.

## Pitfalls

- **A translated file without a collection is dead content.** It renders nowhere and no archive lists
  it; add the collection, route, and archive lookup in the same change.
- **A route that redirects to the archive.** The usual cause is matching content ids with
  `endsWith('.md')` when the collection id has already lost its extension, or comparing the full id to
  the slug. Compare the last path segment after stripping an optional `.md`, and test the built page for
  a redirect stub rather than trusting a 200.
- **An archive that still links the English issue.** The locale route can be perfect and unreachable;
  inspect the archive's `href`, not only the detail page.
- **The English label left in translated prose.** `See related:` is editorial furniture; translate it.
- **A translation added to the English feed.** Keep the English `newsletters` collection and feed
  isolated; the translation collection is a separate consumer.
- **A full-corpus build assumed to be quick.** The build runs several minutes; use the larger heap and
  verify `page(s) built`, the exit status, and the generated route before reporting success.
