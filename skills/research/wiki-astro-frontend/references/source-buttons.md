# SourceButtons — shared GitHub source pills + Chat (2026-08-30)

`src/components/SourceButtons.astro` is the shared bottom-of-page button row
rendered on **all three** page types — article, concept, AND FAQ pages. Reuse
it; do not re-implement per template.

## Usage
```astro
<SourceButtons filePath={`faqs/${faq.id}.md`} />
```
One prop: `filePath` relative to repo root (e.g. `articles/<slug>.md`,
`concepts/<slug>.md`, `faqs/<slug>.md`). It builds the GitHub links against
`edtechdev/aied` @ `main` and adds the site's Chat link.

## Current button set (final 2026-08-30)
Order is FIXED — the maintainer iterated on it across three messages. Do not reorder:
1. **View Source** → `blob/main/<filePath>` — icon is the **`</>` code icon** (two polylines `16 18 22 12 16 6` / `8 6 2 12 8 18`, feather `code`). the maintainer chose this over the GitHub history clock specifically: "View Source should have an icon that looks like `</>`".
2. **View Changes** → `commits/main/<filePath>` — icon is the **GitHub commits counterclockwise history clock** (the SAME two-path octicon `fill="currentColor"` used by the header Journal button in `BaseLayout.astro`).
3. **Edit** → `edit/main/<filePath>` — pencil icon (feather `edit`).
4. **Chat** → `/aied/ai` (the "Use This Knowledge Base with Your Own AI Assistant" page) — icon is the **sparkle** (feather `sparkles`, two paths), matching the header's "Chat with AI"/"Use with AI" sparkle. Has `title="Chat with AI"`. This is the ONLY button that does NOT open GitHub; it's an internal link.

So: View Source = code icon, View Changes = commits-history clock, Edit = pencil, Chat = sparkle. The commits-history clock is used by BOTH View Changes and the header Journal button — do not confuse which is which (View Source is the `</>`, NOT the clock).

## History / gotchas
- The first implementation (2026-08-30) put the commits-history clock on **View Source** by mistake and the maintainer corrected it: the clock belongs on **View Changes**; View Source wants the `</>` code glyph.
- The Chat button was originally placed SECOND (after View Source); the maintainer corrected: "Make the Chat button last." It must be the final pill.
- All three GitHub pills use `target="_blank" rel="noopener noreferrer"`; the Chat pill is a same-tab internal link (no target).

Styled as muted pill buttons (`.source-pill`, rounded 999px, border
`var(--muted-border-color)`, hover → primary) with small inline SVG icons, in a
`.source-buttons` flex row with `margin-top:2.5rem; border-top`.

## How FAQ got it
The FAQ template `src/pages/faqs/[slug].astro` originally had no source buttons.
On 2026-08-24 it was added by importing `SourceButtons` and dropping
`<SourceButtons filePath={`faqs/${faq.id}.md`} />` after the `data-pagefind-body`
div. Since the component is shared, all FAQ pages got the buttons at once.

## Notes
- The component lives in `src/components/` — the home for any cross-page-type
  UI that all templates share (also see `JsonLd.astro`).
- When adding a new page type, mirror the concept/article template: import
  `SourceButtons` + `JsonLd`, wire both after the body.
