# Sidebar scrollbars: Chrome shows them, Firefox doesn't

**Symptom (reported 2026-09-01):** left `.sidebar` and right `.right-col` show
an always-visible scrollbar in Chrome/Edge on desktop, but not in Firefox.

**Cause:** both containers use `overflow-y: auto` (BaseLayout.astro). Chrome/Edge
paint a classic always-visible scrollbar; Firefox on desktop uses overlay
scrollbars that stay hidden unless you scroll. Not a per-page CSS bug — it's the
browser default, so the same markup looks different across browsers.

## Fix: hide the bar in both engines, keep scrollability
```css
.sidebar, .right-col {
  scrollbar-width: none;       /* Firefox */
  -ms-overflow-style: none;    /* legacy Edge/IE */
}
.sidebar::-webkit-scrollbar, .right-col::-webkit-scrollbar {
  display: none;               /* Chrome, Safari, Edge */
  width: 0;
  height: 0;
}
```
`scrollbar-width:none` alone does NOT fix Chrome — the `::-webkit-scrollbar`
rule is required. Wheel/trackpad scrolling still works after hiding.

## Trade-off to flag to the maintainer
Hiding the bar removes the visual affordance that more content exists below the
fold. If he wants an affordance, offer a thin (e.g. 6px), semi-transparent thumb
that only shows on hover, instead of a full removal.

## Verify
- `npm run build` → `grep -rl 'webkit-scrollbar' dist/_astro/*.css`
- commit + push → `gh run list` green → confirm the new hashed CSS file is
  served and contains both rules (fetch the live `<link>` and grep).
