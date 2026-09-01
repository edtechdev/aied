# Header responsive layout + light/dark theming (hard-won, 2026-09-01)

Consolidated detail on the `<header>` in `src/layouts/BaseLayout.astro`. the maintainer iterates on the header hard and flags regressions fast; these are the root causes and final state.

## Final layout (as of 2026-09-01)

- **One row, `display:flex; justify-content:space-between`.** Hamburger + logo hug the LEFT; the icon group (chat / search / help / journal / theme) hugs the RIGHT. the maintainer's words: "the buttons starting with the chat button should be right aligned."
  - Do NOT use `justify-content:flex-start` — it left-aligns the icons against the logo.
  - Do NOT use the earlier `grid auto 1fr auto` — its empty `1fr` middle track both spread the icons into a big gap AND pushed the theme button off the right edge on narrow Firefox.
- **All controls one size + one baseline: 2.6rem.** `.nav-toggle`, `.header-icon`, `button.theme-toggle`, and the logo must all be `width/height:2.6rem` with `margin:0`.
  - Root cause of drift: Pico gives `.header-icons` (a `<nav>`) `nav a` a NEGATIVE margin (~`-9px`), and gives bare `<button>` a `margin:0 0 18px` bottom margin. Both silently offset buttons from each other and from the logo. Zero them all.
  - The hamburger `.nav-toggle` ALSO needs `margin:0` (was Pico's `0 0 18px`, pushing it 9px above the logo/icons).
- **Search box + RSS/GitHub icons are desktop-only (hide below `@media (max-width:1023px)`).** NOT just ≤640px: in the 640–1023px tablet range, full title "AIEd Knowledge Base" + search + all 7 icons overflow and truncate the title to "AIEd Knowledge E".
  - The "Ctrl K" hint needs no separate removal — it renders inside the `<pagefind-searchbox>` web component's shadow DOM, so hiding `.header-search` removes it. (`grep` for `Ctrl`/`kbd` in `src/` finds nothing.)

## Hamburger lines / button icon color in light mode

- **Pico sets `--color:#fff` (via `--primary-inverse`) on EVERY `<button>`/`[role=button]`.** So `color: var(--color)` on a button resolves to WHITE in BOTH themes — in light mode the hamburger lines stayed white (invisible). `getComputedStyle` confirmed the button's own `--color` was `#fff` while `--color` on `:root` was dark.
- **Fix:** header button lines/icons must use `var(--header-text)` (or `--header-text, #fff` fallback), never `var(--color)` or `--muted-color`. Verified live: dark lines `rgb(242,246,249)`, light lines `rgb(26,36,44)`.
- Caveat when VERIFYING: the theme toggle animates `color` over 0.15s, so a `getComputedStyle(...).color` read immediately after flipping `data-theme` returns the PRE-transition value. Wait ~400ms (or a `setTimeout`) before reading the settled color.

## Logo light/dark theming

- **An external `<img src="logo.svg">` cannot read page CSS variables** — you cannot theme it. Inline the `<svg>` inside `<a class="brand-link">` and drive its tile with per-theme vars: `--logo-bg` / `--logo-border` = `#0d1418`/`#2c3a45` (dark), `#ffffff`/`#d3dbe1` (light). Add these to BOTH `[data-theme=dark]` and `:root:not([data-theme=dark])`/`[data-theme=light]` blocks.
- The old logo looked "tiny" because its dark square (`#0d1418`) blended into the dark header (`#15212b`), so only the sparse dot-grid was visible. A visible tile bg + border (now theme-adaptive) fixes it.
- `ConceptMap.astro` (homepage SVG) still uses hardcoded dark hex and does NOT theme — flag if the maintainer asks.

## Verifying after deploy

- **The deployed site's service worker caches CSS.** A green GitHub Pages deploy can still serve the PREVIOUS stylesheet. Before reading live layout/computed styles, unregister the SW (`navigator.serviceWorker.getRegistrations()` → `r.unregister()`) or hard-refresh / clear site data — otherwise a "still broken" read is a false stale-CSS signal, not a logic bug.
- Browser-verification harness: Chromium via `browser_exec`; `cdp('Emulation.setVisibleSize', width=W, height=H)` DOES work to force a real narrow viewport (and `matchMedia('(max-width:640px)')` flips accordingly), where `Emulation.setDeviceMetricsOverride` did not. `localhost` is blocked in the harness — verify against the deployed URL (after the SW caveat above) or inject a `<style id='sim'>` override at desktop width.
