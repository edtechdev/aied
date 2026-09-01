# Header: mobile layout + icon-button spacing (BaseLayout.astro)

Durable lessons from iterating on the site header with the maintainer (Sept 2026). Read before
changing anything in `src/layouts/BaseLayout.astro` header markup or CSS.

## Pico CSS: theme-toggle `<button>` spacing vs `<a>` icon siblings

The `.header-icons` group is a `<nav>`. Pico applies a NEGATIVE margin to `nav a`
links (`--nav-link-spacing-vertical/horizontal`, ~0.5rem → **−9px**) but the theme
toggle is a `<button>`, which Pico leaves at `margin: 0`. Result: the light-mode
button sits ~9px further from its left neighbour than the `<a>` icons are from
each other — a visible gap on ALL devices.

Fix (in the `.theme-toggle` rule):
```css
margin: calc(var(--nav-link-spacing-vertical) * -1) calc(var(--nav-link-spacing-horizontal) * -1);
```
This makes every icon gap uniform (measured −11.7px across all 7 desktop icons).

## The "Ctrl K" hint is NOT in the source — it's inside the Pagefind shadow DOM

`src/pages/search.astro` and the header both render `<pagefind-searchbox>`
(web component). The "Ctrl K" shortcut hint lives inside that component's shadow
DOM, so you cannot delete it from Astro markup. To remove it on mobile, hide the
search field itself (`.header-search { display: none }`). There is no source text
`Ctrl`/`kbd` to edit.

## Why flex kept wrapping to a 3rd row on Firefox Mobile (grid fix)

Flexbox `flex-wrap` reflows: when Firefox Mobile (renders text/icons wider than
Chrome) overflowed, the header wrapped to a 3rd row. `justify-content: space-between`
on `header .container` ALSO spread brand far-left / icons far-right, adding a
large empty gap and distorting the wrap threshold.

Fix: on `@media (max-width: 640px)` use a FIXED grid that cannot reflow:
```css
header .container { display: grid; grid-template-columns: auto 1fr auto; align-items: center; column-gap: 0.5rem; }
.header-left   { grid-column: 1; }
.header-icons  { grid-column: 3; justify-self: end; }
.header-search { display: none; }  /* drop 2nd row; also kills Ctrl K */
```
Grid rows cannot wrap, so browser font-metric differences can no longer add rows.
the maintainer's preference (his final spec): on mobile show ONLY the logo (hide the
"AIEd KB" brand text) + icon buttons in one row, drop the search box row entirely
(search reachable via the Search icon), and grow logo/icons up to match the
hamburger (`2.6rem`). RSS + GitHub icons stay hidden ≤640px (his explicit choice).

## Astro CSS minification quirks when grepping built CSS

Built CSS in `dist/_astro/BaseLayout.*.css` is aggressively minified:
- `grid-column`/`grid-row` collapse into `grid-area` shorthand — grep for `grid-area`.
- Attribute-selector spaces get escaped: `[title=RSS\ feed]`, `[title=GitHub\ repository]`.
- Media-query blocks: a plain `@media (max-width: 640px)` string may not match;
  use a regex over the block, or `grep -o` the minified segment.
- Theme-button margin rule verified via `grep -o "theme-toggle[^}]*}"`.

## Verification limit: the browser harness is stuck at 1920px desktop

`Emulation.setDeviceMetricsOverride` and `Browser.setWindowBounds` fail in this
environment — `innerWidth` stays 1920, mobile media queries never activate, and
localhost is blocked. You cannot see a live phone render here. Verify mobile by
(1) building, (2) grepping the emitted CSS for the mobile rules, and (3) confirming
the desktop layout live on `https://edtechdev.github.io/aied/`. Tell the maintainer the
mobile render needs his Firefox Mobile to confirm; the fixed-grid approach is
safe by construction because it cannot reflow to extra rows.

## the maintainer's iteration norms for the header
- Small, reversible changes only; he has twice demanded reverts that made things worse.
- Do NOT shrink header buttons to force fit — rejected ("buttons too small even on chrome").
- He dislikes wasted gap between brand and icon row (root cause was `space-between`).
- Don't commit/push until he's confirmed the direction via follow-ups.
