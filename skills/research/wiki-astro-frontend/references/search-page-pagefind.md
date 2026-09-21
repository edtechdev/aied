# Search page (src/pages/search.astro) — Pagefind filter UI

## Current markup (2026-09-20, after the pills revert)

- `<pagefind-config bundle-path="/aied/pagefind/" faceted>` — `faceted` is what makes filters populate/show on page LOAD without typing a query (also shows all results initially). Without it the dropdowns show empty skeletons until a search runs.
- `page_type` **is a dropdown again, first in the bar**, followed by `discipline`, `level`, `audience`, `research_method`, the `FACET_DISPLAY_ORDER` facets, then `page_kind`.
- All styling targets Pagefind's real light-DOM classes (see below). There are **no `::part()` rules left**: they were dead code.

## Pagefind's component UI has NO shadow DOM, so `::part()` is dead code

`dist/pagefind/pagefind-component-ui.js` contains **zero** `attachShadow` calls and zero `adoptedStyleSheets`: the components render in LIGHT DOM. `::part()` only matches shadow parts, so `::part(trigger)`, `::part(menu)`, `::part(option)`, `::part(input)`, `::part(summary)`, `::part(result)`, `::part(result-title)` matched nothing — years of intended styling silently never applied.

Style these real classes instead (all confirmed present in `pagefind-component-ui.js`):

- dropdown: `.pf-dropdown-wrapper`, `.pf-dropdown-trigger`, `.pf-dropdown-trigger-label`, `.pf-dropdown-selected-badge` (the count badge), `.pf-dropdown-arrow`, `.pf-dropdown-menu`, `.pf-dropdown-options`, `.pf-dropdown-option`, `.pf-dropdown-option-label`, `.pf-dropdown-option-count`, `.pf-dropdown-option-focused` (keyboard focus class), `.pf-dropdown-clear`
- search box: `.pf-input-wrapper`, `.pf-input`, `.pf-input-clear`
- results: `.pf-summary`, `.pf-results`, `.pf-result` (the `<li>`), `.pf-result-card`, `.pf-result-content`, `.pf-result-title` (a `<p>`), `.pf-result-link` (the `<a>`), `.pf-result-excerpt`, `.pf-heading-chips` (sub-result link list)

Two mechanical requirements:

- **Wrap every third-party selector in `:global(...)`.** Inside an Astro scoped `<style>`, a bare `.pf-input` compiles to `.pf-input[data-astro-cid-…]` and matches nothing, because Pagefind's elements carry no scope attribute.
- **`!important` is required for any property Pagefind itself sets.** Its selectors are `:is(*, #\#):is(*, #\#):is(*, #\#) .pf-…` and the escaped `#\#` counts as ID weight, which beats any plain class. Properties Pagefind leaves alone (colour, radius on the menu) apply without it, but adding it uniformly is simpler than auditing each one.

Verification before assuming a class exists: `grep -c attachShadow dist/pagefind/pagefind-component-ui.js` and `grep -o '\.pf-[a-z-]*' dist/pagefind/pagefind-component-ui.css | sort -u`. Then confirm the rules survived the build *unscoped* by grepping the compiled page's inline `<style>` in `dist/search/index.html` — the search page's CSS is inlined there, NOT in `dist/_astro/*.css`, so a file-only check reports a false "missing".

### One trap worth remembering: `.pf-input` keeps its own inline padding

Pagefind sets `padding-inline-start: 32px` (magnifier icon) and `padding-inline-end: 36px` (clear button) on `.pf-input`. Overriding the `padding` shorthand slides the typed text under the icon. Override `height`, `padding-top`/`padding-bottom`, `font-size`, `border`, `border-radius`, `background` instead.

`.pf-result-excerpt` ships `white-space: nowrap` + ellipsis, i.e. one clipped line per result; `white-space: normal`, `overflow: visible`, `text-overflow: clip` gives a readable wrapping excerpt.

## Mobile popup overflow: the missing `transform: none`

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

General lesson: when overriding a third-party popup, audit EVERY geometric property the third party sets (`left`, `inset`, `transform`, `margin`) rather than only the ones that look wrong. Overriding `left` while leaving `transform` is what left this half-fixed.

## Custom filter UI (pills): attempted, reverted — the Astro scoping trap

A pill/toggle row replaced the Type dropdown (Pagefind ships no standalone pill component; `pagefind-filter-pane` renders every facet at once). It was reverted: the pills came out as **huge default browser buttons** because the pill CSS lived in the component's scoped `<style>` block while the buttons were created at runtime by JS. Astro's scoping appends `[data-astro-cid-…]` to the selectors, and runtime-created elements never carry that attribute, so **not one pill rule applied**. Any element a client script creates must be styled through `:global()`, or carry the scope attribute itself.

The instance-API knowledge is still worth keeping for any future custom filter UI:

- instance: `window.PagefindComponents.getInstanceManager().getInstance('default')` (poll for it; do not rely on module import timing)
- live values + counts: `inst.availableFilters[facet]` (e.g. `{article: 120, concept: 90, faq: 12}`); populated with the worker/index load, ~4-6s on a cold load, so poll a few times and render a static fallback first
- current selections: `inst.searchFilters` (object of facet to array)
- re-run with new filters: `inst.triggerFilters(newFilters)` — reuses `inst.searchTerm`, so the typed query survives; `triggerSearchWithFilters(term, filters)` when you also need to set the term
- resync: `inst.on('search', (term, filters) => …)` and `inst.on('filters', ({available, total}) => …)`. The `search` event also fires for the URL-restore path, which keeps custom UI correct on a shared/bookmarked URL
- delete a facet's key from the filter object when its last value is deselected, otherwise the URL writer persists an empty array

### Verify a custom widget without a browser

The headless browser tool cannot reach this host's preview server (private address, blocked), so extract the inline script and `eval` it in Node against a stub DOM: stub `document.querySelector`, `document.createElement` (tiny fake element with `children`, `attributes`, `dataset`, `handlers`, `textContent`, `appendChild`, `setAttribute`, `addEventListener`) and a fake Pagefind instance carrying `availableFilters`, `searchFilters`, `on()`, `triggerFilters()`. A ~40-line harness can then assert render-with-counts, toggle on/off, multi-select, key removal on clear, and resync from an externally fired `search` event. Also run `node --check` on the inline scripts extracted from `dist/search/index.html`.
