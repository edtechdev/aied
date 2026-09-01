# Surfacing a concept on the homepage (and the two registration files)

When the wiki maintainer (the maintainer) asks to add or "surface" a concept — typically right
after creating or enriching it — there are TWO registration files plus the homepage:

1. `src/data/conceptIndex.ts` — sidebar concept sections. Slug must exist here (or in
   `tooling/concept-index.md`) before linking; place it in the thematically correct group.
2. `tooling/concept-index.md` — canonical concept manifest (alpha order + `**Total concepts:** N`).
3. `src/pages/index.astro` — the homepage **essential-concepts intro list**. It is the last
   intro paragraph: a `Some essential concepts in this wiki include:` chain of
   `<a href="/aied/concepts/<slug>" style="font-weight:500;">Name</a>` items (note the
   `/aied/` base path and the inline `style="font-weight:500;"`).

Worked example (2026-08-23): after enriching the Educational Measurement concept page, the maintainer
said "Add a link to educational measurement in the list of essential concepts at the end of
the introduction on the homepage." The link was inserted between "Research Methods" and
"AI Ed Evaluation" — a thematically sensible position given measurement is foundational to
evaluation. After the edit: `npm run build`, then grep `dist/index.html` for the slug to
confirm it rendered before committing. A green build does not prove the link rendered.

## Heading-hierarchy convention (content-formatting defect)

Concept-page body sections use `##`, sub-sections `###` — NEVER `####`. A `####` heading is a
formatting defect the maintainer flags (observed 2026-08-24 on the enriched
`educational-measurement` page; it was the only page in the wiki using `####`). When
enriching an existing page, check the heading sequence programmatically and expect only
2s and 3s; if you find a `####`, promote/demote it to `##`/`###`.
