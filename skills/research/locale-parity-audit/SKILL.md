---
name: locale-parity-audit
description: "Verify translated pages still match their English source."
category: research
version: 1.0.0
author: hermes-agent
license: MIT
metadata:
  <AGENT_KEY>:
    tags: [i18n, translation, parity, verification]
    related_skills: [content-page-locale-refresh, stale-translation-triage, new-page-translation]
---

# Auditing a locale against English

## When to Use

- Asked to "update stale or missing translations" for a locale.
- A translation wave has finished and you need to know whether the locale is actually current.
- A structural sweep of the English corpus has landed and every translated twin is suspect.

A locale has two independent notions of current, and only one of them is honest.

## Staleness is a claim; parity is the check

`source_updated:` is the date a translator recorded. Bumping it to match the English `updated:` turns
`check-translation-staleness.py` green without translating anything, so a locale can report zero stale pages
while its prose and links are behind. `check-translation-parity.py` is the gate that compares what the page
contains: heading levels and count, prose-block and bullet counts per `##` section, the wikilink target
multiset, and facet fields against English. Treat parity as the arbiter and the staleness count as a queue.

```bash
python3 tooling/scripts/check-translation-parity.py --locales <loc> --all
python3 tooling/scripts/check-translation-staleness.py --list | grep '/<loc>/' | wc -l
```

## Build the work list as a union, not a delta

The obvious list — pages whose English changed since the recorded `source_updated` — misses a whole class.
Recover the English baseline with `git log -1 --format=%H --before <source_updated> -- <english path>` and diff
non-heading lines; a page with no diff is structurally stale only. But pages translated from an *older*
English than their stamp claims show no diff and still fail parity, because a corpus-wide link sweep inserted
wikilinks into sentences without changing the prose. So:

**work list = (English-changed since the stamp) ∪ (pages already failing parity)**

Enumerate both before dispatching, and write the union to a file; a batch that only walks the delta set
finishes "green" on its own pages while the locale still fails on the ones nobody was assigned.

## Structure before prose

1. **Mirror English's heading levels by index.** Read the English heading levels as a list and write those
   levels onto the translated headings in document order. Do not blanket-promote every `###`: English keeps
   some subsections nested under a thematic section, and flattening them makes parity disagree on dozens of
   pages at once.
2. **Move the practice/limits sections above the locale's misconceptions heading.** The translated order lags
   the English reorder, and the parity gate compares section shapes positionally.
3. **Rename article-style headings to the locale's concept forms** in one pass (practice section, limits
   section), so the renderer's section ids stay uniform.
4. Only then translate prose deltas. Headings and order are mechanical; prose is the judgment call.

## Dispatching the prose delta

- Batch 15-20 pages per subagent, and give each one the rule that matters most: preserve every existing
  sentence byte-for-byte where its English counterpart is unchanged, translate only what is new or changed.
- Require a per-page `check-translation-parity.py --page <slug> --locales <loc>` before reporting, but do not
  trust the self-report: re-run the whole-locale sweep yourself. Children pass their own pages and the locale
  still fails.
- Pages that do not exist get full translations: mirror section order and heading levels exactly, keep wikilink
  slugs with translated anchor text, keep numbers/authors/DOIs verbatim, and set `source_updated` to the
  English `updated:`.
- Facets are machine identifiers. When parity reports a facet mismatch (`connected_resources`, `connected_faqs`),
  align the translated page to English — that is the one frontmatter edit allowed beyond the stamps.

## Proving nothing was lost or invented

Compare each changed translated file against the previous revision and list every non-heading line that is
absent from the new version. Each one must correspond to an English rewrite (numbered questions converted to
bullets, a bullet expanded, a Connected Articles list rebuilt). A handful of reflowed lines is normal; a
cluster of them on one page is a silent rewrite and needs reading.

## Pitfalls

- **Bumping stamps is not refresh.** It makes the staleness gate green and the parity gate is the only thing
  that notices.
- **A structural sweep in English makes every translated twin stale at once** — queue the locale refresh in
  the same piece of work or say plainly that it is queued, rather than leaving 150 stale pages unmentioned.
- **One missing page is a full translation, not a stub:** a thin page satisfies no gate and reads as an
  editorial decision nobody made.
- **Check the locale count against English's count** (e.g. 334 vs 334) before claiming completeness; a missing
  page never appears in the staleness list.
