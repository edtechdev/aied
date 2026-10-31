# Proving an ingested page matches the source it cites

Ingestion writes two things: a claim-carrying page, and (sometimes) the preserved source. The page can be
fully green while nothing ever checked it against the source, because the check that does that verification
depends on the source files existing. These rules keep the verification from silently switching itself off.

## Preserve the source in the same pass that writes the page

For every ingested source, before or while writing the page:

```bash
cp <incoming>.pdf  pdf-sources/<slug>.pdf
cp <incoming>.txt  pdf-sources/<slug>.pdf.txt      # pdftotext -layout output
cp <incoming>.txt  raw/papers/<slug>.md            # what the grounding checker reads
```

Both directories are gitignored, so neither copy appears in `git status` and neither absence shows up in a
commit. That is exactly why this is easy to skip and hard to notice: the page commits clean, the gates pass,
and the only artifact that could have caught a misquoted number was never written.

## A dangling `sources:` path turns number grounding off, silently

`verify-number-grounding.py` resolves the page's `sources:` frontmatter to a file under `raw/papers/`. When
that file is absent it prints

```
<slug>: [no raw source found - cannot verify]
… 0 with numbers to review
```

and exits 0. A scoped gate run therefore reports green on a page whose every figure is unchecked. So after
any ingest: confirm the `sources:` path resolves on disk, and run the check in a mode that actually loads it.

The script's positional-file form reported "no raw source found" for pages whose raw file was present, so
do not conclude from a positional run that grounding is satisfied: use `--changed` (after the page is
unstaged, or it sees nothing) or the whole-corpus run, and read its per-article lines rather than its exit
code.

## Grounding treats invented arithmetic as an invented number

The checker looks for the literal numeric token in the source. A figure you computed by subtracting two
printed means is not in the source, so it is flagged:

```
<slug>: 1 numeric claim(s) not found in the raw source -> ['0.466']
```

Do not defend the arithmetic; rewrite the sentence to cite the values the source prints (`moved from 4.239 to
4.705`) instead of their difference. It reads better in prose anyway, and it survives a reader checking the
paper. A whole-corpus run will show a backlog of articles with ungrounded numbers that were there before you
arrived: report that backlog as pre-existing rather than absorbing it into your count.

## Facet values belong to one registry section, and the validator is the only authority

Facet fields are not free text and not interchangeable: each slug lives in exactly one section of
`concepts.registry.yaml`, and `validate-facets.py` accepts it only in that field. Guessing the section from
semantics fails in both directions, for example `trust` is an ethics value and `design-thinking` is a
foundations value, not a pedagogy one. The `audience` enum is a closed list of role nouns and rejects
profession words it does not carry ("teachers" is not in it; "instructors" is).

Write your best guess, run the validator, and let it name the offending section — it reports
`pedagogy value 'x' is not a concept in that registry section`, which is enough to move the value without
further archaeology. Never hand-maintain a mental map of the sections; the validator is cheap and the map is
stale the moment the registry changes.

## One source in a batch is often already ingested

Before writing pages for a batch, check each source against the corpus. A paper's canonical URL, its arXiv
id, or its DOI appearing in an existing `source_url` means it is done, and translating a second page for it
duplicates the weave. Grep for the identifier across `content/en/articles/` and `raw/papers/`, and say which
source was already present when you report, so the batch is not read as "one of the four was skipped".
