---
name: preprint-to-publication-update
description: "Use when a KB source has been published since ingestion."
version: 1.0.0
author: AI agent
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [wiki, publication-lifecycle, version-of-record, article-page, gates]
    related_skills: [wiki-page-deepening, wiki-citation-format, source-document-verification, wiki-inline-links, research-wiki]
---

# Preprint → Version of Record

When a source already in the knowledge base gets published — preprint to journal article, working paper to version of record — the existing page is out of date and the update is a rewrite, not a footnote. Journals retitle, reframe, add method detail the preprint omitted and force limitations into plain language. `wiki-page-deepening` covers how to write depth; this skill covers the publication *lifecycle* and the mechanical gates a rewritten article page trips.

## Procedure

1. **Get the version of record yourself.** When the article is open access, download the publisher PDF rather than waiting for one the user says is coming — Springer serves `https://link.springer.com/content/pdf/<doi>.pdf`. The landing page (`https://link.springer.com/article/<doi>`) carries the abstract, volume, article number, received/accepted/published dates and the journal's own "Cite this article" line; take the citation from that block, not from the preprint.
2. **Confirm the DOI resolves** before citing it: `curl -sI -L -o /dev/null -w '%{http_code} %{url_effective}\n' https://doi.org/<doi>`. A 200 landing on the right article settles it; a publisher 403 is a bot-block, not evidence the DOI is wrong.
3. **Copy the PDF to `pdf-sources/<slug>.pdf` BEFORE extracting**, then save the text to `raw/papers/<slug>.md`. That gitignored folder is the only durable copy; the chat document cache rotates within days while the raw text is derived. Strip repeated running headers and footers (they pollute grep, quotation and any embedding pass), keep the DOI and the preprint URL as provenance, record a fresh sha256.
4. **Rewrite the page against the published text.** Expect the title to change and the framing to shift; take the new title verbatim into frontmatter and the Citation, and say in prose that it supersedes the preprint when readers may have seen it. The published abstract is usually a better basis for the synthesis block than the preprint's.
5. **Keep the slug.** It is the URL and every `[[wikilink]]` target in the corpus. Rename only alongside a redirect entry in `src/data/articleRedirects.ts`.
6. **Add the method detail the preprint lacked** — reliability statistics, the search protocol, sample selection, the reviewer-pressured limitations. This is where the rewrite earns its keep over the abstract.
7. **Re-screen the concept weaves.** A changed argument changes which concepts the page speaks to: re-run the delete test on the new findings and record the outcome in `concept-screen.yaml` (see `concept-weave-screening`).
8. **Update the Citation to APA with the journal venue** and the DOI as the title hyperlink (see `wiki-citation-format`). A published paper must not keep pointing at arXiv.

## Gates a rewritten article page trips

Run these scoped to the slug; each costs seconds and each has a one-line fix.

```bash
python3 tooling/scripts/audit-article-sections.py | grep -A3 '<slug>'
python3 tooling/scripts/check-us-english.py
python3 tooling/scripts/check-ai-disclosure.py
python3 tooling/scripts/validate-facets.py
python3 tooling/scripts/check-citation-attribution.py
```

- **Body 750–1,750 words, `## What this means for practice` 3–5 bullets, `## Limitations` 2–6.** Read the limits from `wiki.config.yaml` → `article:` rather than quoting them. A page can pass every content review and still fail on seven limitation bullets — merge two that share a threat to validity instead of dropping one.
- **US spelling in body prose only.** British forms arrive with source terminology (`behavioural`, `programme`, `licence`) and must be respelled in prose, while the Citation, quoted titles and quoted participant text reproduce the published record verbatim.
- **`ai_assist` must name the currently registered model id, version suffix included.** A superseded id fails the disclosure gate even though `site.config.json` lists it; read `aiDisclosure.models` for the id in force.
- **The gate suite is permission-gated.** `python3 tooling/scripts/run-gates.py` and `npm run verify` are not run on your own judgment: name the gates and what each checks, then wait for approval on that run. The scoped scripts above are the part you run yourself.

## Build and commit

- **`npm run build` needs more heap than the default.** `astro check` plus a ~10k-page build aborts with a V8 heap error (`Aborted (core dumped)`) partway through. Use `NODE_OPTIONS="--max-old-space-size=8192" npm run build` and allow ~15 minutes. Redirect to a log, but read the exit status from the process session rather than the log — `cmd > log 2>&1; echo EXIT=$?` writes the status to stdout.
- **Verify in `dist/`, not in the log.** Check the rendered `<title>` of the rewritten page and confirm each woven concept page's HTML contains the slug; a build that exits 0 with a missing link means the weave landed in the wrong file.
- **Commit with `tooling/ai-commit.sh -F <message-file> --model <id> --role drafting --role revision`.** Roles are a closed set and one of them contains a literal space (`link classification`); a hyphenated spelling is rejected. The repo's own local git config supplies the author identity and the `AI-Model`/`AI-Role`/`AI-Agent` trailers carry the AI disclosure. Never push without explicit per-occurrence approval.

## Pitfalls

- **Do not patch the preprint text and call it updated.** Title, framing and reported statistics all move; a diff against the preprint copy produces a page that contradicts its own citation.
- **Do not rename the slug to match the new title.** Inbound wikilinks and the published URL break silently, with no build error to catch it.
- **Do not treat an open-access article as paywalled because the landing page is heavy to scrape.** Fetch the PDF URL directly before deciding the full text is unavailable.
