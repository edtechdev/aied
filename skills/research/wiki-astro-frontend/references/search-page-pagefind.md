# Search page (src/pages/search.astro) — Pagefind filter UI

## Current markup (2026-09-20)

- `<pagefind-config bundle-path="/aied/pagefind/" faceted>` — `faceted` is what makes filters populate/show on page LOAD without typing a query (also shows all results initially). Without it the dropdowns show empty skeletons until a search runs.
- **`page_type` is NO LONGER a dropdown.** It is a pill/toggle row: `.type-filter` > `.type-pills` (`data-filter="page_type"`) rendered by an inline script. Reason: on phones the popup for the page types kept hanging off the screen edge; pills/toggles were requested instead.
- One `<pagefind-filter-dropdown>` per remaining facet, in this order: `discipline`, `level`, `audience`, `research_method`, then the `FACET_DISPLAY_ORDER` facets, then `page_kind`.
- Multi-select popups by default (only `single-select` makes them single). Each trigger shows a `0` selected-count badge.

## Pagefind component UI has NO shadow DOM, so `::part()` is dead code (2026-09-20)

`dist/pagefind/pagefind-component-ui.js` contains **zero** `attachShadow` calls and zero `adoptedStyleSheets`: these web components render in LIGHT DOM. `::part()` only matches shadow parts, so every `::part(trigger)`, `::part(menu)`, `::part(option)`, `::part(input)`, `::part(summary)`, `::part(result)` rule in `search.astro` silently does nothing. Style the real light-DOM classes instead (`.pf-dropdown-trigger`, `.pf-dropdown-menu`, `.pf-dropdown-option`, plus the input/summary/result classes). The facet-slug to title rewrite script is only half-affected: it walks `el.shadowRoot` (always null) but also recurses into light-DOM children, which is why it still works.

Verify before assuming a part exists: `grep -c attachShadow dist/pagefind/pagefind-component-ui.js` and `grep -o 'pf-dropdown-trigger\|pf-dropdown-menu' dist/pagefind/pagefind-component-ui.css`.

## Mobile popup overflow: the missing `transform: none` (2026-09-20)

Symptom: every dropdown menu popped off the LEFT edge of phone screens, even after an earlier attempt pinned the menu to the viewport.

Root cause: Pagefind's own `@media (max-width: 640px)` block sets on `.pf-dropdown-menu`:

```css
min-width: unset;
width: max(180px, calc(100vw - 32px));
max-width: calc(100vw - 32px);
inset-inline-start: unset;
left: 50%;
transform: translateX(-50%);
```

The site override forced `position: fixed !important` + `inset: 1rem 1rem auto 1rem !important` (so `left: 50%` lost) but never reset `transform`, so `translateX(-50%)` survived and shifted the now-fixed box left by half its width.

The working rule:

```css
@media (max-width: 640px) {
  :global(.pf-dropdown-menu) {
    position: fixed !important;
    inset: 1rem 1rem auto 1rem !important;
    transform: none !important;
    min-width: 0 !important;
    width: auto !important;
    max-width: calc(100vw - 2rem) !important;
    max-height: min(70vh, 24rem) !important;
    z-index: 1000 !important;
  }
}
```

Two rules that are easy to get wrong:

- Keep the selector wrapped in `:global(...)`. Inside an Astro scoped `<style>`, a bare `.pf-dropdown-menu` compiles to `.pf-dropdown-menu[data-astro-cid-…]` and matches nothing, because Pagefind's elements carry no scope attribute.
- `!important` is required: Pagefind's selector is `:is(*, #\#):is(*, #\#):is(*, #\#) .pf-dropdown-menu`, and the escaped `#\#` counts as ID weight.

General lesson: when overriding a third-party popup, audit EVERY geometric property the third party sets (`left`, `inset`, `transform`, `margin`) rather than only the ones that look wrong. Overriding `left` while leaving `transform` is what left this half-fixed.

## Driving a single facet from custom UI (the Type pills)

Pagefind's component UI ships no pill/checkbox standalone component, and `pagefind-filter-pane` renders EVERY facet at once, so it cannot serve one field. Drive the facet through the instance API:

- instance: `window.PagefindComponents.getInstanceManager().getInstance('default')` (poll for it; do not rely on module import timing)
- live values + counts: `inst.availableFilters[facet]` (e.g. `{article: 120, concept: 90, faq: 12}`); this is populated with the worker/index load, ~4–6s on a cold load, so poll a few times and render a static fallback first
- current selections: `inst.searchFilters` (object of facet to array)
- re-run with new filters: `inst.triggerFilters(newFilters)` — reuses `inst.searchTerm`, so the typed query survives; `triggerSearchWithFilters(term, filters)` when you also need to set the term
- resync: `inst.on('search', (term, filters) => …)` and `inst.on('filters', ({available, total}) => …)`. The `search` event also fires for the URL-restore path, which is what keeps pills correct on a shared/bookmarked URL
- delete a facet's key from the filter object when its last value is deselected, otherwise the URL writer persists an empty array

### Verify this without a browser

The headless browser tool cannot reach this host's preview server (private address, blocked), so extract the inline script and `eval` it in Node against a stub DOM:

- read `src/pages/search.astro`, take the `<script is:inline>` block containing `type-pills`, `eval` it
- stub `document.querySelector('.type-pills')` and `document.createElement` with a tiny fake element (`children`, `attributes`, `dataset`, `handlers`, `textContent`, `appendChild`, `setAttribute`, `addEventListener`)
- stub `window.PagefindComponents.getInstanceManager().getInstance()` with a fake instance carrying `availableFilters`, `searchFilters`, an `on()` registry and a `triggerFilters()` that records its payload
- then assert: pills render with counts, click sets `{page_type:['concept']}`, second click adds, third removes, clearing all drops the key, and an externally-fired `search` event flips `aria-pressed`

A ~40-line harness exercises the whole logic. Also run `node --check` on the extracted inline scripts from `dist/search/index.html` to catch syntax errors.
