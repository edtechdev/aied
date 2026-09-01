# Homepage Radial Concept Map (accessible SVG)

Technique for adding a radial concept map to a dark-themed Astro wiki homepage — a central
"hub" concept with edge lines to top-level umbrella concepts, each node clickable to its
concept page. Validated on `edtechdev.github.io/aied` (2026-08-19).

## When to use
- User wants a visual navigation aid / concept map at the top of the homepage.
- Central theme (e.g. "AI in Education") with a handful of umbrella concepts around it.

## Build as an Astro component, not inline
Create `src/components/ConceptMap.astro` and import it into `src/pages/index.astro`
(`import ConceptMap from '../components/ConceptMap.astro';` then `<ConceptMap />` under
the H1). Imports must go INSIDE the `---` frontmatter fence.

## Component structure
- `const nodes = [{ slug, label, color }, ...]` — slug = existing concept page, label =
  display text, color = hex.
- Compute geometry in frontmatter: center `(CX, CY)`, ring radius `R`, angle
  `-90 + (360/N)*i` degrees (top, clockwise) → `x = CX + R*cos(rad)`, `y = CY + R*sin(rad)`.
- Draw each outer node as `<a href="/aied/concepts/<slug>/"><g><circle .../><text .../></g></a>`.
- Wrap the WHOLE svg in one `<a>` for the center hub too (it must also be clickable).

## Key pitfalls (all hit 2026-08-19)
- **Adaptive node radius — REQUIRED.** Fixed `r=30` circles cut off long labels
  ("Human–AI Collaboration", "AI in the Disciplines" overflowed). Compute
  `r = max(30, maxLabelLineLen * 3.1 + 8)` and size per-node. Split >2-word labels onto two
  lines (split at the midpoint); use font-size 11 for two-line labels, 12 for one-line.
- **Geometry bug:** don't reconstruct line endpoints by splitting a path string. Store the
  `{x1,y1,x2,y2}` tuple directly and pass to `<line x1=... y2=.../>`.
- **TypeScript:** the astro build runs `astro check` (strict TS). Type every param:
  `function lines(label: string): string[]`, and remove unused imports/consts or the build
  fails with `ts(7006)`/`ts(6199)`.
- **Unused vars:** `W`/`H` consts if you only use CX/CY/R will fail the check — drop them.
- **Center node must be clickable** — the user asked "when a node is clicked it takes people
  to the corresponding concept page." Don't leave the hub as a bare `<g>`.

## Accessibility
- `role="img"` + `aria-labelledby="map-title map-desc"` with a `<title>` and a full `<desc>`
  enumerating every node and where it links.
- Each node is a real `<a href>` → keyboard-focusable; add `:focus-visible` outline.
- Add hover/focus opacity + glow affordance via CSS (`.concept-map a:hover .concept-map-node`).

## Theme consistency
- Dark site background is `#0d1418`; header `#15212b`; card/surface `#18232c`/`#1c2933`;
  node colors should be bright/distinct on dark. Use a `rect fill="#0d1418" rx=16` background
  card with a `1px solid var(--muted-border-color)` border so it matches the site.
- Node fill colors each distinct (sky #7dd3fc, green #4ade80, amber #fbbf24, red #f87171,
  cyan #22d3ee, purple #a78bfa, pink #f472b6, orange #fb923c, lime #a3e635, magenta #e879f9).

## Verifying layout without a browser
- `file://` URLs and `localhost` are blocked in the browser harness (private-address /
  local-file policy). Render the SVG standalone instead: extract the `<svg>` block from the
  built `dist/index.html`, strip the `data-astro-cid-*` attributes (they break the standalone
  XML parser), then `pip install cairosvg` + `cairosvg.svg2png(url=..., output_width=900)`
  and inspect the PNG with `vision_analyze`. Watch for cut-off labels / overlapping nodes.
- The built svg in HTML uses `&#8211;` for en-dashes — valid XML; no manual fix needed for
  the real page, only if you round-trip through a strict parser.

## Deploy note
Two GitHub Actions workflows run on push: **Build & Verify** then a separate **Deploy Astro
to Pages**. A green Build & Verify is NOT a live deploy. Wait for the deploy workflow to show
`completed`/`success` (`gh run list --workflow "Deploy Astro to Pages" ...`), then allow a few
extra seconds for Pages propagation before live-fetching — a 404/absent feature right after
Build & Verify is usually just the deploy not having run yet.
