# Article / Concept page date display (Astro templates)

How the wiki's page-header dates render — and the fix applied 2026-08-22.

## The templates
- `src/pages/articles/[slug].astro` — article pages.
- `src/pages/concepts/[slug].astro` — concept pages.

Both follow the same page-header pattern:

```astro
<div style="color:var(--muted-color);font-size:0.9rem">
  {confIcon} {confidence} · created {createdDisplay}{updated ? ` · updated ${updatedDisplay}` : ''}
  ...
</div>
```

where
```astro
const createdDisplay = (created || '').split('T')[0];
const updatedDisplay = (updated || created || '').split('T')[0];
```

## The bug (fixed)
Before 2026-08-22, `articles/[slug].astro` destructured only `created` (not `updated`) and rendered just `{confIcon} {confidence} · {createdDisplay}` — so significantly-updated articles showed NO revision date, while concept pages already showed both. The article template was changed to read `updated` and render the `· updated {date}` segment conditionally.

## Rule of thumb
- The `· updated {date}` segment renders ONLY when an `updated` frontmatter field is present, so a freshly-created page with no update just shows `created`.
- Frontmatter convention: `created` / `updated` are ISO strings with `-04:00` offset (e.g. `created: "2026-05-09T04:33:04-04:00"`, `updated: "2026-08-22T20:10:00-04:00"`). When a page is significantly enriched/revised, bump `updated` so the revision date surfaces on the rendered page.
- Verify in built output before push: `grep -o "created .\{0,30\}" dist/articles/<slug>/index.html` should show `created YYYY-MM-DD · updated YYYY-MM-DD`.
- `src/content.config.ts` keeps `created`/`updated` as the ORIGINAL frontmatter string (a `timeField` transform), so no content-side change is needed to expose `updated` — only the template read it.

## FAQ INDEX page — NO per-item dates (2026-08-25)
the maintainer asked to **remove the date shown next to each individual FAQ** on the FAQ
*index* list (`src/pages/faq.astro`, the `/aied/faq` list, NOT the individual
`/aied/faqs/<slug>` pages). The list item previously rendered a muted date div
under each title:
```astro
<div style="color:var(--muted-color);font-size:0.8rem;margin-top:0.25rem;">
  {(f.data.created || '').split('T')[0]}
</div>
```
That div was deleted — the index now shows only the FAQ title. Individual FAQ
pages keep their header date display (handled by `src/pages/faqs/[slug].astro`).
Do not re-add per-FAQ dates to the index list. Note: the `2026-08-25` strings
that remain on other pages are the journal "Recently Added" sidebar
(`.recent-date` spans), which are separate and were NOT removed.
