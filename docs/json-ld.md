# Schema.org JSON-LD Structured Data

Every page in the wiki emits a **schema.org JSON-LD** graph so that search engines, crawlers, LLM-oriented retrieval systems, and other semantic-web consumers can understand what each page represents. Structured data is generated **automatically** from the same frontmatter and body used to build the rest of the site — it is a serialization of the content model, not hand-maintained SEO.

## How it works

- `src/lib/jsonld.ts` — helper functions (site constants, DOI extraction from `sources`, first-paragraph summary, concept/FAQ `@id` builders).
- `src/components/JsonLd.astro` — the component that assembles and emits the `<script type="application/ld+json">` block.
- Each page template (`articles/[slug].astro`, `concepts/[slug].astro`, `faqs/[slug].astro`) renders `<JsonLd>` with its page type, metadata, body, and connected slugs.

## The graph structure

Every page emits a linked `@graph` containing:

1. **Sitewide stable entities** (referenced by `@id`, never duplicated):
   - `WebSite` — `@id https://edtechdev.github.io/aied/#website`
   - `Organization` — `@id https://edtechdev.github.io/aied/#organization`
2. **Page-level entities:**
   - `WebPage` — `@id …/<path>/#webpage`, `isPartOf` the WebSite
   - `BreadcrumbList` — `@id …/<path>/#breadcrumb` (Home → Articles/Concepts/FAQ → page)
3. **Type-specific entities** (below).

## Per-type entities

### Article summary pages → `Article` about a `ScholarlyArticle`

A wiki article page is the **wiki's summary**, not the original paper, so the summary is an `Article` and the underlying publication is a separate `ScholarlyArticle`, connected via `about` + `isBasedOn`:

```json
{
  "@type": "Article",
  "@id": "…/articles/<slug>/#summary",
  "headline": "…",
  "author": { "@id": "…#organization" },
  "about": { "@id": "https://doi.org/…" },
  "mentions": [ { "@id": "…/concepts/<slug>/#concept" } ]
},
{
  "@type": "ScholarlyArticle",
  "@id": "https://doi.org/…",
  "identifier": "https://doi.org/…"
}
```

- **DOI** is extracted from the `sources` frontmatter filename when present (`raw/papers/10.1007_s10648-026-10118-7.md` → `https://doi.org/10.1007/s10648-026-10118-7`). When no DOI exists, the citation URL (e.g. arXiv) is used as the source `@id`/`url`.
- **`mentions`** lists the page's Connected Concepts (`…/concepts/<slug>/#concept`) and Connected FAQs (`…/faqs/<slug>/#faq`).
- **`keywords`** comes from the frontmatter `tags`.

### Concept pages → `DefinedTerm` + `Article`

A concept is modeled as a `DefinedTerm` (the concept itself) plus an `Article` (the explanation page):

```json
{
  "@type": "DefinedTerm",
  "@id": "…/concepts/<slug>/#concept",
  "name": "…",
  "inDefinedTermSet": { "@id": "…/concepts/#vocabulary" }
},
{
  "@type": "Article",
  "@id": "…/concepts/<slug>/#article",
  "about": { "@id": "…/concepts/<slug>/#concept" },
  "mentions": [ … ]
}
```

All concepts belong to one `DefinedTermSet` at `https://edtechdev.github.io/aied/concepts/#vocabulary` (the "AI in Education Concepts" vocabulary).

### FAQ pages → `FAQPage` with `Question`/`Answer`

```json
{
  "@type": "FAQPage",
  "@id": "…/faqs/<slug>/#faq",
  "mainEntity": [{
    "@type": "Question",
    "name": "…",
    "acceptedAnswer": { "@type": "Answer", "text": "…" }
  }]
}
```

> **Note:** `FAQPage` is emitted for semantic correctness / machine understanding. Google has restricted FAQ rich-results display, so don't build an SEO strategy around it — the markup primarily helps crawlers and agents.

## Stable `@id` entity handles

The stable fragment `@id`s are the natural hooks for a future graph database (e.g. LadybugDB) and for cross-referencing in other tooling:

| Entity | `@id` |
|--------|-------|
| Concept | `https://edtechdev.github.io/aied/concepts/<slug>/#concept` |
| Concept vocabulary | `https://edtechdev.github.io/aied/concepts/#vocabulary` |
| FAQ | `https://edtechdev.github.io/aied/faqs/<slug>/#faq` |
| Article summary | `https://edtechdev.github.io/aied/articles/<slug>/#summary` |
| Original publication | `https://doi.org/<doi>` (when available) |
| Website | `…/#website` |
| Organization | `…/#organization` |

## Key properties used

`about`, `mentions`, `citation`, `isBasedOn`, `identifier`, `keywords`, `datePublished`, `dateModified`, `author`, `publisher`, `inLanguage`, `mainEntity`, `mainEntityOfPage`, `isPartOf`, `breadcrumb`. The most valuable for this knowledge base are **`about`**, **`mentions`**, **`citation`**, and **`isBasedOn`** because they expose relationships that already exist in the wiki's markdown cross-links.

## Adding/changing JSON-LD

- Edit `src/lib/jsonld.ts` (helpers) and `src/components/JsonLd.astro` (graph assembly), then add/update the `<JsonLd>` invocation in the relevant page template.
- All generated JSON-LD is validated at build time (the build scans the output); keep the emitted JSON valid.
- After any change, run `npm run build` and verify the `<script type="application/ld+json">` on a page of each type.
