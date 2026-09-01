# Canonical Wikilink Routing Fix (2026-08-23)

## Symptom
the maintainer reported that concept/connected-concept links on article pages (e.g. "Ethics" in
the Connected Concepts list of `ai-ethics-bibliometric-2026`) appeared **broken**.

## Root cause
Every `[[wikilink]]` in the body was rendered by `renderInline()` in
`src/pages/articles/[slug].astro` and `src/pages/concepts/[slug].astro` to the generic
**redirect-stub route**:

```
<a href="/aied/pages/${page}">
```

`src/pages/pages/[slug].astro` then issues a **301** to the canonical page:
- `isArticle`  → `/aied/articles/{slug}`
- `isConcept`  → `/aied/concepts/{slug}`

So EVERY inline link was a redirect hop. The pages were not literally dead — each
`/pages/*` stub returned 200 (meta-refresh/301 to the real page) — but the extra redirect
surface read as "broken" to the maintainer (redirect churn, or a stale/cached stub between
deploys). A green build does NOT catch this: the stub route is valid Astro output.

## Fix
In `renderInline()` of BOTH templates, resolve each wikilink to its **canonical URL
directly**, using a slug→collection membership set:

Article template (`src/pages/articles/[slug].astro`):
```ts
const concepts = await getCollection('concepts');
const conceptSlugs = new Set(concepts.map(c => c.id.replace('.md', '')));
// in renderInline:
const base = conceptSlugs.has(page) ? '/aied/concepts' : '/aied/articles';
return `<a href="${base}/${page}">${label}</a>`;
```

Concept template (`src/pages/concepts/[slug].astro`) — same idea, inverted:
```ts
const articles = await getCollection('articles');
const articleSlugs = new Set(articles.map(a => a.id.replace('.md', '')));
// in renderInline:
const base = articleSlugs.has(page) ? '/aied/articles' : '/aied/concepts';
return `<a href="${base}/${page}">${label}</a>`;
```

KEEP `src/pages/pages/[slug].astro` for backward compatibility — old / bookmarked
`/aied/pages/*` links still resolve.

## Verify
- Built article HTML: Connected Concepts now `href="/aied/concepts/ethics"` (no `/pages/`),
  Connected Articles `href="/aied/articles/..."`.
- `grep -c 'href="/aied/pages/' dist/articles/*/index.html` → 0.
- Live: `curl -s https://edtechdev.github.io/aied/articles/<slug>/ | grep '/aied/concepts/'`.
- Both GitHub workflows green (Build & Verify + Deploy) then confirm HTTP 200 on the
  canonical `/aied/concepts/ethics/`.

## Related: same-text pipes & broken subagent slugs
The same batch surfaced the classic subagent artifacts in freshly delegated pages:
- broken reference slugs (`[[professional-development]]`, `[[autonomy]]`,
  `[[decision-making]]`) → retarget to nearest real page
  (`faculty-development`, `self-directed-learning`, `human-in-the-loop-ai`).
- same-text pipes `[[x|x]]` → collapse to `[[x]]`.
Run the independent sweep (see `delegation-output-verification` skill) over ALL
delegated files before build; do not trust subagent "verified" claims.
