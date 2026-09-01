# FAQ list styling — the maintainer's preference (2026-08-31)

Both FAQ lists on the AI Ed wiki should render each question as a **button-like item**, not a plain row or bullet list:

- **Left sidebar "FAQs" tab** — `src/components/FaqSidebarList.astro`, class `.faq-sidebar-link`
- **Main index page** — `src/pages/faq.astro`, class `.faq-item` (this page replaced its `<ul>/<li>` bullet list with a `<div>` of anchor buttons)

## Shared shape (keep the two lists visually consistent)
- Rounded: `border-radius: 6px` (sidebar) / `8px` (main)
- Bordered: `border: 1px solid var(--card-border-color)`
- Subtle primary tint: `background: color-mix(in srgb, var(--primary) 4%, transparent)`
- Gap separation instead of divider lines: the container is `display:flex; flex-direction:column; gap: 0.35rem` (sidebar) / `0.6rem` (main) — do NOT use `border-bottom` divider rows
- Hover: raise tint to ~12% and set `border-color: var(--primary)`
- Sizes: sidebar `font-size: 0.85rem; padding: 0.45rem 0.65rem`; main `font-size: 1.05rem; padding: 0.75rem 1rem`
- Colors come from existing theme vars (`--card-border-color`, `--primary`, `--muted-color`) so light/dark both work.

Do NOT regress to `border-bottom` divider rows or `<ul>/<li>` bullet styling for these two FAQ lists.

## Why a reference file
This convention lives in a reference because `wiki-astro-frontend`'s SKILL.md exceeded the 100k-char patch limit at time of writing (2026-08-31) and could not be edited inline. Flagged for the background curator to split `wiki-astro-frontend`'s oversized SKILL.md into sections + references.
