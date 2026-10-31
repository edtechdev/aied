---
name: static-site-feed-authoring
description: "Use when adding or widening an RSS feed on the site."
category: research
---

# Authoring the site's feeds

The knowledge base's feeds are code, not a plugin setting: `/rss.xml` (main) and `/news/rss.xml`
(newsletter-only) are generated at build time. This skill covers changing what a feed carries,
without turning it into a second full-text copy of the site.

## Where the feeds live

- `src/pages/rss.xml.ts` — the main feed, XML assembled by hand as strings.
- `src/pages/news/rss.xml.ts` — the newsletter feed, built with `@astrojs/rss` and carrying each
  issue's whole body in `content:encoded`.
- Nothing else in the build fails when a feed is wrong, so verify by parsing the built output rather
  than by eyeballing the site.

## Why the main feed is hand-built (do not "simplify" it)

Two library behaviors make `@astrojs/rss` wrong for the main feed:

- It serialises `pubDate` with `.toUTCString()`, which moves an evening timestamp with a negative
  offset to the NEXT calendar day, so items are dated a day after the page they link.
- It writes every string field as an XML text node, so HTML in `description` reaches the reader as
  the literal characters `<a href=...>`. Wrapping the value in CDATA does not help; the underlying
  parser reads CDATA as text and re-escapes it.

Keeping the local offset (RFC-822 in the original `-0400` form) and emitting each description
inside a real CDATA section is the whole reason the file is hand-written. Preserve both.

## What the main feed carries

- **Every published collection**, not only articles: concepts, FAQs, resources and newsletter
  issues too. A reader who subscribes wants to know what was added to the knowledge base.
- **One `<category>` per item** naming its type, so a reader can tell an FAQ from an article.
- **Summaries, never bodies.** Articles and concept pages contribute their synthesis blockquote
  (the one paragraph written to stand alone); FAQs their opening answer prose; resources and
  newsletter issues the one-sentence `summary` field they already carry for their own listings.
- **Drafts excluded**, matching `/news/`: filter on `status !== 'draft'` rather than publishing an
  issue the site itself hides.
- **The channel `<description>` states the actual scope** and is updated whenever the scope changes.

## Do not window the feed by count

A fixed "newest N items" window silently loses pages: ingest runs at roughly 130 articles a week,
so a 30-item article window covers under two days and a reader polling weekly misses most of the
week. Give the feed every page in the corpus, sorted newest first, and let the reader's own software
decide what to keep.

Per-type quotas (newest-N per kind) are the wrong fix for the same problem. They guarantee each type
surfaces but still drop pages, and they need re-tuning as the corpus grows. The only bound the feed
should carry is an emergency valve far above the current corpus size, documented with the reason it
exists, so the file cannot grow into something no reader will parse.

## Verify by parsing, not by grep

Regex over `<item>` blocks silently returns empty fields once a description contains its own CDATA
section or nested tags, which reads as "the change did nothing". Parse the built file instead:

```python
import xml.etree.ElementTree as ET, email.utils, collections
ch = ET.parse('dist/rss.xml').getroot().find('channel')
items = ch.findall('item')
print(len(items), dict(collections.Counter(i.findtext('category') for i in items)))
dates = [email.utils.parsedate_to_datetime(i.findtext('pubDate')) for i in items]
print('monotonic desc:', all(dates[k] >= dates[k+1] for k in range(len(dates)-1)))
print('dup links:', [l for l, c in collections.Counter(i.findtext('link') for i in items).items() if c > 1])
print('empty descriptions:', sum(1 for i in items if not (i.findtext('description') or '').strip()))
```

Check all six: item count (it should equal the corpus total for the collections the feed reads), the
per-category mix, RFC-822 dates that parse and descend, no duplicate links, no empty descriptions,
and the file size, since a complete feed is megabytes rather than kilobytes. Then confirm the sibling
feed still has its items, because both routes can share helpers.

## Build and ship

- `npm run build` runs `astro check` first, so a type error in the feed route fails the build rather
  than shipping broken XML. Long builds go through `systemd-run` with `NODE_OPTIONS` set; confirm
  `EXIT=0` and the page count in the log before inspecting `dist/`.
- A feed change is code, not content: it needs no locale refresh, unlike a concept-page weave.
- Update the docs the change contradicts. The README lists the site's surfaces, and the sibling
  feed's source comment describes the main feed's scope; both go stale silently otherwise.
- Commit locally; never push without the user asking for that specific push.
