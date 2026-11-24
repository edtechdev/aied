---
name: wiki-connected-sections
description: "Use when adding or reordering wiki Connected sections."
category: research
version: 1.0.0
author: hermes-agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [wiki, astro, frontend, toc, connected]
    related_skills: [wiki-astro-frontend, wiki-gate-suite-triage, wiki-site-quality]
---

# Connected … sections on wiki pages

Every wiki page ends in a stack of "Connected" sections. They are the page's outbound
structure, and they are assembled from four different mechanisms — so the first step is always
to know which one you are editing.

## When to Use

- Adding, removing or reordering a Connected Videos / Podcasts / FAQs / Resources / Concepts / Articles section.
- A page's "On this page" table of contents is out of order, missing a section, or links to an anchor that is not there.
- A podcast is listed as a link but should be playable in place.
- A build fails on a video/podcast pairing check.

## The four render mechanisms

- **Markdown body sections** — `## Connected Concepts` / `## Connected Articles` on legacy concept
  pages; their headings ARE in `rendered.headings`.
- **`ConnectedList`** — Connected FAQs and Connected Resources; renders `<section id={id}><h2>{heading}</h2>`.
- **`ConnectedVideos`** — `<section id="connected-videos"><h2>Connected Videos</h2>`; from `src/data/videos.ts`.
- **`ConnectedPodcasts`** — `<section id="connected-podcasts">`, one embedded `AudioPlayer` per episode.
- **`ConnectedNotebooks`** — `<section id="connected-notebooks">`, one outbound link per entry, opened in a
  new tab. Entries are `{ title, url }` objects in the page's own frontmatter, NOT slugs: there is no page on
  this site to resolve, so a mistyped URL degrades to a dead link rather than being caught by the build.

Frontmatter fields: `connected_concepts`, `connected_articles`, `connected_faqs`, `connected_resources`,
`connected_videos`, `connected_podcasts`, `connected_notebooks`.

## The TOC rule (the one that bites)

`const toc = rendered.headings.filter(h => h.depth <= 3)` sees ONLY the markdown body. Every
component-rendered section must have its TOC entry pushed by hand, and **the push order must equal the
render order**. Two distinct failures, both easy to ship:

- **A section with no push renders with no "On this page" entry.** The FAQ template did this: it rendered
  Connected Videos and Podcasts but pushed entries only for Concepts / FAQs / Resources.
- **Pushes in a different order than the components render** make the TOC link out of visual order. The
  concept template did this: the TOC listed Videos and Podcasts last while the JSX rendered them before
  Connected FAQs/Resources.

Fix both in the SAME edit, on BOTH `src/pages/concepts/[slug].astro` and `src/pages/faqs/[slug].astro`.
They build their TOC and render their sections independently and drift apart silently. `TableOfContents.astro`
renders one `headings` array into both the mobile and desktop variants, so a single correct push serves both.

## The order the user wants

Body headings → Connected Concepts → Connected Articles → Connected FAQs → Connected Resources →
**Connected Videos → Connected Podcasts (always last)**.

## Podcasts are players, not links

A "Connected Podcasts" item must play in place. Use `ConnectedPodcasts.astro`, which renders one
`AudioPlayer` per episode (`src={audioAssetUrl(e.data.audio_file)}`, `eyebrow="Episode N"`,
`pageHref` to the episode page, `transcriptHref` to the `.txt`). Do not fall back to `ConnectedList`
with `href="/aied/audio/<slug>/"` — that is the pattern this replaced, and it forces a click-through
to hear an episode the reader already asked about.

## Verify in the BUILD, not by reading the template

`npm run build`, then inspect a page that actually has the sections (grep frontmatter for the field —
not every page has podcasts):

```bash
python3 - <<'PY'
import re
t = open('dist/concepts/<slug>/index.html').read()
m = re.search(r'data-toc[^>]*>(.*?)</ul>', t, re.S)
print('TOC:', [h for h in re.findall(r'href="#([^"]+)"', m.group(1))][-6:])
print('pos:', {n: t.find('id="%s"' % n) for n in
      ['connected-faqs','connected-resources','connected-videos','connected-podcasts']})
print('audio:', '<audio' in t)
PY
```

Three assertions, all required: the TOC tail ends `…connected-videos, connected-podcasts`; the `id=`
byte offsets increase in that same order; and `<audio` appears inside the podcasts section. A template
that looks right is not evidence — the built HTML is.

## Pitfalls

- **The markdown body's `## Connected …` headings ARE in `rendered.headings`.** Pushing a duplicate entry for
  one of those double-lists it. Only component sections get a manual push.
- **The `id` is the anchor the TOC uses.** Keep it equal to the pushed `slug` or the TOC link dead-ends.
- **The build throws when a video or podcast pairing is declared on only one side** (`checkVideoPairing`;
  an episode's `concepts`/`faqs` must match the page's `connected_podcasts`). Fix the frontmatter on both
  sides — never loosen the check.
- **Drop the `formatRuntime`/`transcriptAssetUrl` import when you switch to `ConnectedPodcasts`.** Those
  helpers were used only by the podcast `ConnectedList` block; the component imports its own, and an unused
  import is dead code.
