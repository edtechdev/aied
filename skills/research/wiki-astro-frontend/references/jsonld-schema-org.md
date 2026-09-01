# Schema.org JSON-LD (2026-08-24)

The wiki emits schema.org JSON-LD on every page, generated automatically from
frontmatter/body — NOT hand-maintained. Added per the maintainer's guidance doc
`ai-in-education-schema-org-jsonld-seo.md` (skipping the LadybugDB graph parts,
not in use yet). The stable `@id` URLs are designed to become entity handles for
a future graph DB.

## Files
- `src/lib/jsonld.ts` — shared helpers: `SITE`, `WEBSITE_ID`, `ORG_ID`,
  `doiFromSources()`, `urlFromText()`, `firstParagraph()`, `conceptId()`,
  `articleId()`.
- `src/components/JsonLd.astro` — the generator. One prop-driven component;
  inspects `type` ('article' | 'concept' | 'faq') and emits the right `@graph`.
- Wired into `src/pages/{articles,concepts,faqs}/[slug].astro` (a `<JsonLd .../>`
  tag right after `<BaseLayout ...>`).

## Per-content-type mapping (per the guidance)
- **Article summary page** → `Article` `about`/`isBasedOn` a separate
  `ScholarlyArticle`. The wiki summary is `Article` (author/publisher = the wiki
  Organization), linked to the original publication as a distinct entity.
- **Concept page** → `DefinedTerm` (belongs to a `DefinedTermSet` at
  `/concepts/#vocabulary`) + `Article` (the explanation page) `about` that term.
- **FAQ page** → `FAQPage` with `mainEntity` = `Question` whose
  `acceptedAnswer` is an `Answer`.
- **Every page** also carries sitewide `WebSite` + `Organization` (stable
  `@id`s), plus a per-page `WebPage` + `BreadcrumbList`.

## Data extraction (from existing content, no frontmatter refactor needed)
- **DOI** comes from the `sources` filename: `raw/papers/10.1016_j.caeai.2026.100607.md`
  → `https://doi.org/10.1016/j.caeai.2026.100607`. `doiFromSources` converts
  `_` → `/` and strips a trailing `.md`. Only ~34/884 articles have DOIs in the
  filename; the rest fall back to the citation's source URL (e.g. arxiv) as the
  ScholarlyArticle `@id`/`url`.
- **keywords** from `tags`; **mentions** from the body's `## Connected Concepts`
  list (parsed as `[[slug]]` → `conceptId(slug)`); **description** = first
  paragraph via `firstParagraph` (strips wikilinks/markdown, ~500 chars).
- Citation prose (authors/journal) is NOT parsed — formats are too inconsistent
  (some garbled like "A.R.B.S.W.Y."). Rely on DOI/source URL + tags instead.

## Pitfalls
- **DOI regex must strip the `.md` extension**: `10.1007_s10648-026-10118-7.md`
  would otherwise emit `...10118-7.md` as the DOI URL. Strip `/\.md$/i` and
  trailing dots.
- **TypeScript**: `Astro.props` needs an explicit cast (else `connectedConceptSlugs.map(s=>…)` — `s` is implicitly `any`). Do `Astro.props as {…}` with the full prop type.
- **Validate the whole build**: after generating, scan every `dist/**/index.html`
  for `<script type="application/ld+json">` blocks and `json.loads` each to
  confirm 0 invalid. (Skipping `pagefind/`.)
- **astro-seo skill** covers the broader Astro SEO stack; this reference is the
  wiki-specific JSON-LD implementation.
