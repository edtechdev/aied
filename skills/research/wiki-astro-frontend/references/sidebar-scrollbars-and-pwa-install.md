# Sidebar scrollbars: hidden until hover + PWA install banner (2026-09-01)

Two BaseLayout/InstallPrompt UI preferences the maintainer iterated on. Also the deploy-verify
pattern that confirmed these — see SKILL.md's existing "Workflow for a frontend edit"
for the Pages propagation delay; the scrollbar VERIFICATION technique below is new.

## Why Chrome and Firefox differ on scrollbars
`overflow-y: auto` elements: **Chrome/Edge paint a classic always-visible scrollbar**;
**Firefox uses overlay scrollbars hidden by default**. A rule that looks fine in one
browser still shows a bar in the other, so fixes must target both engines explicitly.

## Working hide-until-hover recipe (lives in `BaseLayout.astro` `<style>`)
```css
.sidebar, .right-col {
  scrollbar-width: none;          /* Firefox: hidden by default */
  -ms-overflow-style: none;       /* legacy Edge/IE */
  scrollbar-gutter: stable;       /* reserve space -> no content jump on hover */
}
.sidebar::-webkit-scrollbar, .right-col::-webkit-scrollbar { width: 0; height: 0; display: none; }
.sidebar:hover, .sidebar:focus-within,
.right-col:hover, .right-col:focus-within {
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--muted-color) 45%, transparent) transparent;
}
.sidebar:hover::-webkit-scrollbar, .right-col:hover::-webkit-scrollbar,
.sidebar:focus-within::-webkit-scrollbar, .right-col:focus-within::-webkit-scrollbar {
  width: 6px; height: 6px; display: block;
}
.sidebar:hover::-webkit-scrollbar-thumb, .right-col:hover::-webkit-scrollbar-thumb,
.sidebar:focus-within::-webkit-scrollbar-thumb, .right-col:focus-within::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--muted-color) 45%, transparent); border-radius: 999px;
}
.sidebar:hover::-webkit-scrollbar-thumb:hover, .right-col:hover::-webkit-scrollbar-thumb:hover {
  background: color-mix(in srgb, var(--muted-color) 70%, transparent);
}
```

### Pitfalls
- **NEVER use `scrollbar-width: thin` as the DEFAULT.** In Chrome it renders as an
always-visible thin bar; in Firefox a permanent thin bar. That is exactly the
complaint the maintainer raises ("scrollbars show without hovering"). Reserve `thin` for the
`:hover` state, default to `none`.
- `scrollbar-gutter: stable` is what keeps sidebar content from shifting sideways
when the bar reveals on hover. Without it, content jumps a few px.
- Firefox has no `::-webkit-scrollbar`; the only hover-gate is
`scrollbar-width: none` → `thin` on `:hover`. It works (bar fades in on hover).
- `display:none` on the scrollbar does NOT disable scrolling — wheel/trackpad still
scrolls while the bar is hidden.

## Verifying a scrollbar fix (browser tool, not CSS reasoning)
`scrollbar-width` / `::-webkit-scrollbar` can't be trusted from reading the CSS
alone — load the LIVE page in the browser tool and check
`getComputedStyle(el).scrollbarWidth` (expect `"none"` when not hovered).

**Pitfall — vision misreads the sidebar border as a scrollbar thumb.** At full-page
scale, `vision_analyze` repeatedly reported a scrollbar on the right sidebar that was
actually the thin `border-left` divider. When vision says a bar is present, zoom with
`region=[x1,y1,x2,y2]` onto the exact column edge before trusting it: a scrollbar
thumb is lighter and inset into a track; a border divider is dark and uniform.
Confirmed 2026-09-01: full-page pass "saw" a thumb, region crop showed only the border.
Also verify `document.querySelectorAll('*')` scrollable-element scan only turns up
`.sidebar`/`.right-col` (both `overflowY:auto`), not a stray child.

## PWA install banner: desktop-suppressed
`src/components/InstallPrompt.astro` intercepts `beforeinstallprompt`, calls
`e.preventDefault()` (this alone already suppresses Chrome's NATIVE install
mini-infobar), and shows a custom 📲 "Install the app" bottom banner.

- **`preventDefault()` does NOT stop the site's own banner** — only the native
infobar. If a "pop-up" still appears on desktop, it is the component's own banner
(always mounted in `BaseLayout.astro`).
- Gate the banner to touch devices: early-return when
`!window.matchMedia('(pointer: coarse)').matches` before showing. Keep
`preventDefault()` so the native prompt stays suppressed on desktop too.
- Mobile/tablet still get the quiet bottom banner; the PWA's install/offline
capability is unchanged — only the desktop *prompting* is removed.

## Deploy-verify note
GH Pages lags ~2–3 min after the "Deploy Astro to Pages" workflow shows
completed/success (old CSS/404 persists briefly). Sleep ~60–90s and re-check;
sometimes the first live curl still shows the previous hashed asset name. The
new-hash detection: grep live HTML for `_astro/BaseLayout.<hash>.css` and diff against
the local `dist/index.html` reference; a 404 on the new asset = still propagating.
