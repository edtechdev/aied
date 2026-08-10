# Example Wiki Files

Copy these files to your wiki root (`../` relative to the tooling/ directory) to get started with a minimal working wiki.

From your wiki root:
```bash
cp tooling/example/index.md .
cp tooling/example/journal.md .
cp tooling/example/log.md .
cp -r tooling/example/articles/* articles/
cp -r tooling/example/concepts/* concepts/
cp -r tooling/example/raw/papers/* raw/papers/
```

Then replace the placeholder dates and content with your own.

## Page types

- **`articles/<slug>.md`** — one page per paper: synthesis → Key Findings → Connected Concepts → Connected Articles → Citation
- **`concepts/<slug>.md`** — one page per broad topic that synthesizes multiple articles

## Site build

The wiki is published as an Astro static site. After adding content:

```bash
python3 tooling/scripts/generate-llms-files.py   # regenerate llms.txt / llms-full.txt
npm run build                                     # build dist/ (pagefind search + sitemap)
git add -A && git commit -m "..." && git push    # GitHub Actions deploys to Pages
```

See the main `tooling/README.md` for the full setup guide, including the Astro config,
`src/` page templates, and GitHub Actions workflow files you need to copy.
