# Content

Every markdown page in this knowledge base lives under this one folder:

    content/<locale>/<collection>/<slug>.md

- `<locale>` — a language code from `site.config.json` (`i18n.locales`). `en` holds
  the pages the knowledge base is written in; the other folders hold translations
  of individual pages. Each locale folder keeps the same four collections, so the
  tree is predictable whichever language you are reading.
- `<collection>` — one of `articles`, `concepts`, `faqs`, `resources`.
- `<slug>` — the page's URL slug, and the name other pages link to with
  `[[slug]]`.

## Opening this in Obsidian (or any other markdown tool)

Point the tool at **this folder**, not the repository root. You then get one vault
with the articles, concept pages, FAQs and resource pages, and `[[wikilinks]]`
resolve between them. The repository root also holds the site's source code,
scripts and build configuration, which you do not want in a note-taking app.

## Moving or renaming this folder

The path is configuration, not code. In `site.config.json`:

    "content": { "root": "content", "defaultDir": "en" }

- `content.root` — the folder holding all markdown (this one).
- `content.defaultDir` — the folder holding the default language. It defaults to
  `i18n.defaultLocale`, so it is normally unnecessary.

Change those two values and both halves of the project follow: the Astro build
reads them through `src/config/content.ts`, and the scripts read the same values
through `tooling/scripts/content_paths.py`. Nothing else hardcodes the location.
That is also what makes this repository reusable: point the root at your own
folder of markdown, edit the site name and the collections you care about, and the
same build serves a different knowledge base.

Raw source material (the full text and the PDFs pages were written from) is *not*
here. It is gitignored and lives in `raw/` and `pdf-sources/` at the repository
root, because it is input to the pipeline rather than published content.