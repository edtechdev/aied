---
name: wiki-change-closeout
description: "Use when committing wiki content changes."
category: research
---

# Closing out a wiki change

The last mile of every content change in the AI-ed wiki is the same: stage exactly what you
changed, prove the change set is what you think it is, and commit. The gate suite proves the
pages are valid; it says nothing about what enters the commit. This skill covers the commit
step and the cross-link check that the gates cannot see.

## Stage explicit paths, never the tree

**Never run `git add -A`, `git add .`, or `git add content/en` on this repo.** The repo
`.gitignore` deliberately excludes the pipeline's own bookkeeping — `log.md`,
`concept-screen.yaml`, `AIED-REJECTED.md` — because it is a cumulative work log, not part of
the knowledge base. Directory-wide adds silently force-add those files anyway: `git add -A`
staged a 4,979-line `concept-screen.yaml` into a content commit, and only a `git show --stat`
revealed it.

Stage the files you wrote, by path:

```bash
git add content/en/articles/<slug>.md content/en/concepts/<slug>.md content/en/resources/<slug>.md resource-wiring.yaml
git status --short          # every line must be a file you intended to touch
git diff --cached --stat    # counts must match the batch you described
```

`concept-screen.yaml` stays on disk and out of git; the next scan reads it. If it is already in
the index, `git rm --cached concept-screen.yaml` then `git commit --amend --no-edit` while the
commit is local and unpushed.

## Verify the change set before you describe it

- `git show --name-only --format="" HEAD | wc -l` — compare against the count you are about to
  report (N articles + M concepts + K resources + the wiring record).
- Check no sibling page was touched: a weave batch should show only the concept pages you
  deliberately edited.
- Run the targeted gates before committing — facets, sections, number grounding, first
  mentions, citations, US English, concept prose, concept screen, list formatting, link
  resolution, evidence context, resource wiring — rather than the 15-minute full suite, then
  report which ones passed.

## Cross-links the schema allows in one direction only

`connected_resources` validates against `content/en/resources/` in **every** collection. An
article can point at the tool its study evaluates, but a resource page cannot point back at an
article through that field — the build rejects an article slug there. For the reverse direction
put a plain markdown link in the resource body:

```markdown
[the journal article](/articles/<article-slug>/)
```

`[[article-slug]]` inside a resource body resolves through the concept route and 404s, so use
the path form. When the user asks for links "both ways", say which direction is frontmatter and
which is a body link rather than implying symmetry the schema does not have.

## Source identity before the commit

A delivered PDF's filename and `pdfinfo` `Title:` can both belong to a different article than
the pages contain. Reconcile filename, metadata and the title printed on page 1, trust page 1,
ingest the article the pages actually contain with its own landing-page URL, and tell the user
which title the filename promised so they can send the missing file. A page titled from the
filename while the abstract describes another study is worse than a missing page.

## After the commit

Leave the commit local unless the user authorized a push or a build. Report the SHA, the file
count, and the gates that ran; a green gate run is not evidence that a frontmatter connection
rendered — that needs the build and a check of `dist/`.
