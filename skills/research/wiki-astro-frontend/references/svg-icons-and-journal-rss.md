# SVG Icons & Journal RSS Link (the maintainer preference, 2026-08-31)

## Rule: use Lucide-style inline SVG icons, NOT emoji, for page-type markers
the maintainer prefers the wiki's page-type badges and list-item markers to be consistent **inline SVGs** across every surface. Converted repo-wide 2026-08-31.

The three page-type icons (all `stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`, `aria-hidden="true"`):
- **Article** (file-text): `<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path>`
- **FAQ** (question-circle): `<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>`
- **Concept** (lightbulb): `<line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5z"></path>`

Where each is used:
- `src/pages/articles/[slug].astro` — badge `<p class="page-type-badge">[file-icon] Research Article</p>`
- `src/pages/concepts/[slug].astro` — badge `[lightbulb] Concept`
- `src/pages/faqs/[slug].astro` — badge `[question-circle] FAQ`
- `src/pages/journal.astro` — per-item icon in the reverse-chron list (article/faq/concept)
- `src/components/RecentActivity.astro` — section `<summary>` headers `Recently Added Articles` (file icon) / `Recently Updated Concepts` (lightbulb). Header-only: do NOT add icons to each item in those lists (the maintainer clarified 2026-08-31).

Sizes: nav/header icons `width/height=22`; badge and inline-header-label icons `width/height=16`.

## Technique: SVG inside an Astro expression string
When the icon is chosen per-item inside a `.map` (journal list), build the SVG as an **HTML string** and inject with `set:html` on the anchor: `<a ... set:html={\`<span>${icon}</span> ${title}\`}></a>`. A plain `{expr}` interpolation renders the raw markup as visible text.

## Journal page intro: RSS link
`src/pages/journal.astro` intro paragraph should link the RSS feed. RSS SVG: `<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>` → `href="/aied/rss.xml"`. The RSS feed URL is `/aied/rss.xml` (the legacy `feed.xml` alias was retired).

## Verification
After a build, confirm no emoji leak in the rendered badge/header: `grep` the built page for `📄`/`❓`/`🏷` in the badge/header region (page-title `📋 Journal` and the sidebar `Recently...` headers are now SVG too; only genuinely-content emoji like question marks in text should remain). Verify inline SVG renders by grepping for one of the icon `<path d=...>` fragments in the page.
