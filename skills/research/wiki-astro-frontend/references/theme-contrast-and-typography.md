# Theme text contrast + font-size (2026-09-01)

the maintainer's complaint: "The font color on the homepage and used by items in the left sidebar is too dim. Increase contrast. Increase brightness in dark mode. ... check the font color contrast ... If the font size could be increased a bit, too."

## Root cause
Pico's DEFAULT `--muted-color` = `hsl(205,10%,50%)`. It is dim on the dark background AND **fails WCAG AA** on white (≈3.96:1 vs 4.5:1 threshold for normal text). Because the homepage intro (`.intro-paragraph` in `src/pages/index.astro`) and every sidebar element (`.sidebar-count`, `.nav-group-label`, `.nav-list a`, `.sidebar-tab`, `.footer-text`) use `var(--muted-color)`, fixing ONE variable brightens all of them. No per-rule color edits needed.

## Values now set in `src/layouts/BaseLayout.astro` theme blocks (verified 4.5:1+ AA, normal text, both modes)
- **Dark** (`[data-theme=dark]`, bg `#11191f`): `--color: hsl(205,16%,82%)` ≈11.6:1 (was 77% ≈10.2:1); `--muted-color: hsl(205,12%,68%)` ≈7.9:1 (was 50% ≈4.48:1).
- **Light** (`:root:not([data-theme=dark]), [data-theme=light]`, bg `#fff`): `--muted-color: hsl(205,15%,38%)` ≈6.2:1 (was 50% ≈3.96:1 — FAILED AA); `--color` left at Pico default (≈7.9:1).
- Note: the light-mode muted value had to go DARKER (lower lightness) to pass — "increase brightness" is correct for dark mode only; on white, more contrast means a darker gray. Don't guess by feel.

## Compute ratios before choosing (quick Python)
HSL→RGB→relative-luminance→`(max(L)+0.05)/(min(L)+0.05)`; backgrounds `#11191f` (dark) and `#ffffff` (light). Target ≥4.5:1 for normal text (this is what the maintainer means by "accessible").

## Font-size bumps (same complaint, the maintainer pairs them)
- `--font-size` base: 17px → 18px in BOTH theme blocks (mobile/tablet), and 18px → 19px in the `@media (min-width:768px)` desktop block.
- `.nav-list a`: 0.85rem → 0.9rem.
- Everything else is rem-based and scales automatically with the `--font-size` bump — no need to touch every rule. Set the base var, not per-rule px.

## Verify
After building, check computed values live: `getComputedStyle(document.documentElement).getPropertyValue('--muted-color')` → `#a4afb7` (dark) / `#52636f` (light), `--color` → `#cad2d8` (dark). Use the deployed site (harness viewport is stuck desktop-wide; media-query-specific rules can't be forced by injected CSS, but the theme vars resolve fine since they're not in a width query).
