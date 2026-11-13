---
name: wiki-timestamp-integrity
description: "Use when wiki dates, ordering, or pre-push gates look wrong."
category: research
---

# Wiki timestamps and the pre-push proof

Two integrity checks that sit between writing pages and publishing them. Both fail silently: the
build stays green and the site simply shows the wrong thing.

## `created` is the sort key, not git history

The journal, the RSS feed and the "Recently Added" sidebar sort on the `created` string
descending, grouped by date. A page written last is buried if any other page carries a later
string, and nothing in the build warns about it. Subagent-written pages are the usual source:
they invent times, often a uniform `11:30:00` or `12:40:00` that is hours in the future, and every
page stamped later than the real newest page outranks it.

The hard check is against history rather than against the clock, because a page cannot have been
created after the commit that first added it:

```bash
python3 tooling/scripts/check-created-dates.py --changed   # touched pages
python3 tooling/scripts/check-created-dates.py            # whole English corpus
```

It reads the adding commit from `git log --diff-filter=A` and fails any page whose `created` is more
than 90 seconds later, plus any page whose `updated` precedes its `created`. When the real time is
unknown, use the adding commit's time: it is the moment the page entered the corpus, it is the same
fact the journal is sorting on, and it cannot be contradicted by history. Do not invent a plausible
afternoon timestamp; a batch committed at 07:36 cannot contain a page created at 14:45, and a
corpus-wide sweep found 266 such pages, some reordering whole days of the journal.

The journal page itself must parse the timestamp rather than compare the strings. The collection mixes
`-05:00` and `Z` offsets, so a string sort puts a `Z` timestamp in the wrong place; sort on
`Date.parse()` with the title as the tiebreak for pages that arrived in the same batch.

Derive the timestamp from the file, not from what the frontmatter claims:

```bash
stat -c '%n %w %y' content/en/articles/<slug>.md
```

`%w` is the birth time, which is when the file was actually written; `%y` is the last change.
Python's `os.stat` has no `st_birthtime` on Linux — shell out to `stat -c %W` (epoch) when
writing a sweep, and fall back to mtime when `%W` is `0` on a filesystem that does not record it.

Before publishing, assert across the corpus: no `created` or `updated` in the future, and no page
where `updated` precedes `created`. Set `updated` to the real last-edit time rather than to the
moment of the sweep, or a timestamp correction will reorder the "Recently Updated" lists.

When a page is not where the user expects it, read the recent commits before explaining:

```bash
git log -5 --format='%h %cI %s'
```

A scheduled ingestion can run between turns and legitimately sit above a page written by hand.
Say which page is genuinely newer instead of "fixing" the order to match the expectation.

## A scoped gate run is not the pre-push proof

`run-gates.py --changed` runs only the gates whose inputs overlap the diff. Corpus-wide gates are
skipped outright — `check-currency-escapes.py` among them — so an unescaped `$` before a digit
passes the scoped run and renders as math on the live site. When the user has authorized a push,
run the unflagged suite, fix what it reports, re-run the scoped gates on the fix, then push.

Budget 20–25 minutes for the full sweep and do not edit the tree while it walks: kill the process
first, finish the edits, then start one fresh run, because a verdict from a tree that changed
underneath it is unciteable.

Derived figures are the other pre-push trap in number grounding: a sum of two reported
percentages or an item count times a trial count is absent from the raw by construction. Restate
it as its components in prose; do not force an anchor into the raw record.
