# Header icon-button set + PageFind double-search fix (2026-08-24)

The top `<header>` in `src/layouts/BaseLayout.astro` now has: brand link,
a Pagefind search box (`.header-search`), and a `<nav class="header-icons">`
group of **icon buttons** (replaced the old single text "Use with AI" button).

## Icon buttons (`.header-icons` / `.header-icon`)
Inline **hand-authored SVGs** — NO external icon library (no FontAwesome/
Feather/Lucide/etc.). They follow the Feather style: `viewBox="0 0 24 24"`,
`fill="none"`, `stroke="currentColor"`, `stroke-width="2"`, round caps/joins.
The GitHub icon is the standard filled Octocat. Sized 22×22; color
`var(--muted-color)`, hover → `var(--primary)` via `.header-icon:hover`.

Buttons (order in markup), each `class="header-icon"` with `title`+`aria-label`:
1. **Use with AI** → `/aied/ai`, title/alt **"Chat with AI"**. Icon is a
   **sparkle** (AI-assist sparkle: 4-point star + small secondary sparkle) — the
   final choice after iterations (robot head, then chat icon). the maintainer's current
   preference: sparkle for AI-assistance.
2. **Search** → `/aied/search`, title "Search", magnifying glass.
3. **FAQ** → `/aied/faq`, title "FAQ", question-mark-in-circle.
4. **Journal** → `/aied/journal`, title "Journal", **official GitHub Octicon
   `history`** (filled counter-clockwise arrow with a clock hand) — the maintainer
   explicitly asked for the GitHub "commits/history" icon and corrected a generic
   lookalike. Use the real Octicon path (below), NOT a clock or a rotate-ccw.
5. **RSS** → `/aied/rss.xml`, title "RSS feed", RSS waves icon.
6. **GitHub** → `https://github.com/edtechdev/aied`, title "GitHub repository",
   filled Octocat.

CSS: `.header-icons{display:flex;gap:0.35rem}`; `.header-icon` = square
2.4rem outlined button, border `var(--muted-border-color)`, rounded 8px, hover
adds primary border + subtle bg.

## Fetching an official GitHub Octicon (use, don't reconstruct from memory)
When the maintainer asks for a GitHub-style icon (commits/history, issue, PR, etc.), pull
the **real Octicon path** rather than an icon-set lookalike (Feather/Lucide
look-alikes get rejected). Fetch directly from the primer/octicons repo:
```bash
curl -sL "https://raw.githubusercontent.com/primer/octicons/main/icons/history-16.svg"
curl -sL "https://raw.githubusercontent.com/primer/octicons/main/icons/history-24.svg"
```
(web_extract can't read `image/svg+xml`; use `curl` in terminal). The 24px
version drops into the 22×22 header. Octicons are **filled** (`fill="currentColor"`),
unlike the stroked Feather-style neighbors — set `fill="currentColor"` on the
`<svg>`, not `fill="none" stroke=...`. The history octicon pairs a circular
counter-clockwise arrow with a small clock hand, and the arrowhead is separated
from the tail by a visible gap.

## PageFind double-search fix (IMPORTANT — the maintainer reported this)
PageFind's modular UI **shares a single query state across ALL search inputs on
a page**. On the dedicated `/aied/search` page, the header searchbox AND the
body `pagefind-input` both fired → typing in one mirrored into the other
(double-search). **Fix:** `BaseLayout` takes a `hideHeaderSearch` prop; the
`/aied/search` page passes `hideHeaderSearch` to render only its own body
search input. All other pages keep the header searchbox.
- `BaseLayout.astro`: `const { …, hideHeaderSearch = false } = Astro.props;`
  and wrap `.header-search` in `{!hideHeaderSearch && (…)}`.
- `search.astro`: `<BaseLayout title="Search" hideHeaderSearch>`.
Verify by grepping built `dist/search/index.html` for `pagefind-searchbox`
(should be 0) while `dist/index.html` still has it (should be 1).

## Search placeholder text
Both the header `pagefind-searchbox` and the search page `pagefind-input` read
**"Search articles, concepts, and FAQs..."** (kept in sync when the FAQ page
type was added). Update both together if the content types change.

## Legacy (superseded)
The old `header-nav.md` described a single text "Use with AI" `<a>` with class
`.header-use-ai` (filled primary pill). That markup/CSS was replaced by the icon
group on 2026-08-24. Link target `/aied/ai` (no trailing slash) is unchanged.
