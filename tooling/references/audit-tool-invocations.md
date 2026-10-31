# Audit and gate invocations for an ingested batch

Every checker in this repo has its own argument convention, and two of them can report a pass while
checking nothing. Run them in this order after a batch of article pages lands, and read the COUNT in
the final summary line of each one against the size of the batch before believing it.

## Invocations that work

```bash
# facets: whole corpus, no arguments, prints OK plus the page total
python3 tooling/scripts/validate-facets.py

# sections: takes a FILE of slugs, one per line. Positional slugs are an argparse error.
printf '%s\n' slug-a slug-b slug-c > /tmp/slugs.txt
python3 tooling/scripts/audit-article-sections.py --slugs-file /tmp/slugs.txt

# number grounding: positional slugs, ONE ARGUMENT PER PAGE, no extension
python3 tooling/scripts/verify-number-grounding.py slug-a slug-b slug-c

# list formatting and inline links live in the skill tree, not tooling/scripts, and are page-scoped
python3 skills/research/wiki-inline-links/scripts/check_list_formatting.py <repo> slug-a slug-b
python3 skills/research/wiki-inline-links/scripts/inline_link_scan.py <repo> slug-a slug-b

# US English: pass the touched pages by path; add --include-docs when the batch touched docs or skills
python3 tooling/scripts/check-us-english.py content/en/articles/slug-a.md content/en/concepts/page.md

# frontmatter dates and disclosure: corpus-wide, cheap, no arguments
python3 tooling/scripts/check-frontmatter-dates.py
python3 tooling/scripts/check-ai-disclosure.py
```

## The silent-pass trap: a comma-joined slug list

`verify-number-grounding.py` does not split its arguments on commas. Handed
`slug-a,slug-b,slug-c` it treats the whole string as ONE slug, prints
`<slugs>: [no raw source found - cannot verify]`, and closes with
`Checked 1 article(s); 0 with numbers to review`.

That trailing counter counts pages that HAVE unmatched numbers, so `0 with numbers to review` is the
success shape. A batch that was never checked therefore prints exactly what a clean batch prints, one
line apart from the giveaway in `Checked 1 article(s)`.

Two rules follow:

- Pass one slug per argument, or drive the tool from a loop, never a joined string.
- Assert `Checked N article(s)` equals the number of pages in the batch. Any audit that reports a
  total is making a claim; a mismatch means nothing was verified, not that everything passed.

## What each failure actually means

- `[no raw source found - cannot verify]` for a page that was just ingested means the raw text is
  missing or misnamed, or the slug was malformed. The page is unverified, never "clean".
- `audit-article-sections.py` reporting a word budget breach is a real defect: trim the body, and
  assert no `[[wikilink]]` target is lost in the trim.
- `validate-facets.py` failing points at a slug filed in the wrong field, not at a typo: the field is
  determined by which registry section holds the slug, so re-file it rather than renaming it.

## The one check subagents reliably skip

Children run the facet validator and often the section audit, but almost never the spelling gate. Run
`check-us-english.py` over the batch's own file paths after the pages land, not only at the end of a
full gate pass, and respell prose only: never a slug, a `[[wikilink]]` target, a `## Citation` line, or
a quoted paper title.

## The concept-screen record must cover MORE than the facet fields and inline links

`check-concept-screen.py --changed` computes its candidate set from every concept the article declares,
and it does not stop at the facet fields plus inline wikilinks: it also slugifies the `discipline` and
`level` values onto concept slugs. A page carrying `level: [higher ed]` therefore needs `higher-ed`
listed as `integrated:` or `no_change:`, and `discipline: [writing education]` needs
`writing-education`. Omitting them fails with
`N concept candidate(s) with no recorded decision: higher-ed, writing-education`, which reads like a
missing integration when the article simply declares a level.

When appending entries to `concept-screen.yaml` by script, guard the insert against the ENTRY, not the
file: a `if f'  - {slug}' not in lines` check over the whole document silently skips every slug that
appears in any earlier entry, so the write reports success and the gate keeps failing. Insert before
that entry's own `reason:` line, and re-run the gate after the write rather than trusting the script.

A dismissal is a claim of prior coverage, so bring the evidence with it: grep the target page for the
finding's own subject terms and put the hit counts in the entry's `reason:`. An entry that asserts the
page already covers something the page never mentions is the failure the gate exists to prevent, and
the reviewer reading the YAML cannot tell the two apart without the counts.
