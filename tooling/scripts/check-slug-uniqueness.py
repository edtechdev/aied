#!/usr/bin/env python3
"""Gate: no two pages may share a slug.

A slug is what a reader sees in the URL and what every `[[wikilink]]` resolves against, so
two pages with the same slug is never merely cosmetic:

* `src/lib/markdown.ts` resolves by collection priority (articles > faqs > resources >
  concepts). With a collision, the lower-priority page's slug becomes unreachable by link -
  every `[[slug]]` lands on the winner, silently, with no error anywhere.
* The loser's page also shadows the winner's title in the `titles` map, so a bare `[[slug]]`
  can display the wrong page's name.

This actually happened: `deeptutor` existed as both an article and a resource, and the six
inbound links meant the *framework* while four others meant the *paper*. Nothing detected it
and the links rendered; they just rendered in a mix of senses. Fixed by renaming the article
to its paper slug (zhao-deeptutor-agentic-personalized-tutoring-2026), leaving the resource
the product name.

Scope: per locale. A slug may legitimately exist in `en/` and `zh/` — those are the same page
in different languages. Collisions are checked *within* one locale, across its collections.

Exit 0 = unique; 1 = collisions found.
"""

from __future__ import annotations

import collections
import os
import sys

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
COLLECTIONS = ("articles", "concepts", "resources", "faqs")


def collisions_in(locale_dir: str) -> dict[str, list[str]]:
    """slug -> collections it appears in, for slugs appearing more than once."""
    by_slug: dict[str, list[str]] = collections.defaultdict(list)
    for sub in COLLECTIONS:
        d = os.path.join(locale_dir, sub)
        if not os.path.isdir(d):
            continue
        for f in os.listdir(d):
            if f.endswith(".md"):
                by_slug[f[:-3]].append(sub)
    return {s: c for s, c in by_slug.items() if len(c) > 1}


def main() -> int:
    content = os.path.join(REPO, "content")
    if not os.path.isdir(content):
        print(f"FAIL - content directory not found: {content}")
        return 1

    locales = sorted(
        d for d in os.listdir(content)
        if os.path.isdir(os.path.join(content, d)) and not d.startswith(".")
    )
    total_pages = 0
    total_collisions = 0
    per_locale = []

    for loc in locales:
        ld = os.path.join(content, loc)
        coll = collisions_in(ld)
        n = sum(
            1
            for sub in COLLECTIONS
            if os.path.isdir(os.path.join(ld, sub))
            for f in os.listdir(os.path.join(ld, sub))
            if f.endswith(".md")
        )
        total_pages += n
        if coll:
            total_collisions += len(coll)
            per_locale.append((loc, coll))

    if not total_collisions:
        print(
            f"OK - {total_pages} page(s) across {len(locales)} locale(s); "
            f"every slug is unique within its locale."
        )
        return 0

    print(f"FAIL - {total_collisions} duplicate slug(s) found\n")
    for loc, coll in per_locale:
        for slug, subs in sorted(coll.items()):
            winner = next(
                (c for c in ("articles", "faqs", "resources", "concepts") if c in subs),
                subs[0],
            )
            print(f"  {loc}/{slug}  appears in: {', '.join(subs)}")
            print(
                f"    -> [[{slug}]] always resolves to {winner}; "
                f"the {', '.join(s for s in subs if s != winner)} page is unreachable by link."
            )
            print(
                "    -> rename one page. Convention: articles use the paper slug "
                "(<first-author>-<topic>-<year>); resources use the product name."
            )
    print(
        "\nTwo pages may share a slug across DIFFERENT locales (en/ and zh/ are the same page).\n"
        "Within one locale, a slug must identify exactly one page."
    )
    return 1


if __name__ == "__main__":
    sys.exit(main())
