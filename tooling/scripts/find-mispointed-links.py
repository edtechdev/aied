#!/usr/bin/env python3
"""Find (and optionally repair) wikilinks whose display text names a different concept.

A piped link [[target|display]] renders the display text, so a link whose display names
another taxonomy node looks correct on the page and routes the reader to the wrong node.
The authority for "which node owns this phrase" is concepts.registry.yaml: every concept's
title and aliases. Only links whose target is itself a registry concept are considered,
because [[article-slug|descriptive text]] is a citation, not a taxonomy route.

Usage:
  find-mispointed-links.py                      report every pattern with counts
  find-mispointed-links.py --pairs              collapse to target->owner pairs
  find-mispointed-links.py --apply --allow FILE rewrite, skipping allowlisted pairs
  find-mispointed-links.py --locales es,fr      restrict to some locales
  find-mispointed-links.py --changed            only files changed against HEAD

Allowlist file format: one "target owner" pair per line, '#' starts a comment.
"""
import argparse
import collections
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
CONTENT = ROOT / "content"
COLLECTIONS = ["concepts", "articles", "faqs", "resources"]
LINK = re.compile(r"\[\[([a-z0-9][a-z0-9-]*)\|([^\]|]+)\]\]")


def norm(phrase):
    p = re.sub(r"\s+", " ", phrase.strip().casefold())
    return p.rstrip(".,;:!?")


def load_registry():
    import yaml

    reg = yaml.safe_load((ROOT / "concepts.registry.yaml").read_text())
    concepts = reg["concepts"]
    owners = collections.defaultdict(set)
    for slug, meta in concepts.items():
        for phrase in [meta.get("title", "")] + list(meta.get("aliases") or []):
            if phrase:
                owners[norm(phrase)].add(slug)
    return concepts, owners


def changed_files():
    out = subprocess.run(
        ["git", "diff", "--name-only", "HEAD", "--", "content"],
        cwd=ROOT, capture_output=True, text=True).stdout.split()
    return {ROOT / p for p in out}


def scan(locales, only_changed):
    concepts, owners = load_registry()
    changed = changed_files() if only_changed else None
    found = []
    for loc_dir in sorted(p for p in CONTENT.iterdir() if p.is_dir()):
        if locales and loc_dir.name not in locales:
            continue
        for coll in COLLECTIONS:
            for path in sorted((loc_dir / coll).glob("*.md")):
                if changed is not None and path not in changed:
                    continue
                text = path.read_text()
                for m in LINK.finditer(text):
                    target, display = m.group(1), m.group(2)
                    if target not in concepts:
                        continue
                    cand = owners.get(norm(display))
                    if not cand or target in cand:
                        continue
                    found.append({
                        "locale": loc_dir.name, "collection": coll,
                        "page": path.stem, "target": target,
                        "display": display, "owners": sorted(cand),
                    })
    return found


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pairs", action="store_true")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--allow")
    ap.add_argument("--locales")
    ap.add_argument("--changed", action="store_true")
    args = ap.parse_args()

    locales = set(args.locales.split(",")) if args.locales else None
    found = scan(locales, args.changed)
    if not found:
        print("OK - no display-text mis-points")
        return 0

    if args.pairs:
        pairs = collections.defaultdict(lambda: {"n": 0, "locales": set(), "pages": set(), "sample": None})
        for f in found:
            k = (f["target"], ",".join(f["owners"]), "ambiguous" if len(f["owners"]) > 1 else "unique")
            d = pairs[k]
            d["n"] += 1
            d["locales"].add(f["locale"])
            d["pages"].add((f["collection"], f["page"]))
            d["sample"] = d["sample"] or f["display"]
        print(f"{'target':34}{'owner':34}{'n':>5}{'loc':>5}  sample display")
        for (target, owner, kind), d in sorted(pairs.items(), key=lambda kv: -kv[1]["n"]):
            print(f"{target[:32]:34}{owner[:32]:34}{d['n']:>5}{len(d['locales']):>5}  [{kind}] {d['sample'][:40]}")
        print(f"\n{len(found)} occurrence(s), {len(pairs)} pattern(s)")
        return 0

    if not args.apply:
        for f in found:
            print(f"{f['locale']}/{f['collection']}/{f['page']}: [[{f['target']}|{f['display']}]] -> {f['owners']}")
        print(f"\n{len(found)} occurrence(s). Use --apply to rewrite.")
        return 0

    allow = set()
    if args.allow:
        for line in pathlib.Path(args.allow).read_text().splitlines():
            line = line.split("#")[0].strip()
            if line:
                t, o = line.split()
                allow.add((t, o))

    todo = [f for f in found if len(f["owners"]) == 1 and (f["target"], f["owners"][0]) not in allow]
    skipped = collections.Counter()
    by_page = collections.defaultdict(list)
    for f in found:
        if f in todo:
            by_page[(f["locale"], f["collection"], f["page"])].append(f)
        elif len(f["owners"]) > 1:
            skipped["ambiguous"] += 1
        else:
            skipped["allowlisted"] += 1

    import datetime
    stamp = datetime.datetime.now().astimezone().strftime("%Y-%m-%dT%H:%M:%S%z")
    stamp = stamp[:-2] + ":" + stamp[-2:]
    rewrites = 0
    for (loc, coll, page), items in by_page.items():
        path = CONTENT / loc / coll / f"{page}.md"
        text = path.read_text()
        for f in items:
            old = f"[[{f['target']}|{f['display']}]]"
            new = f"[[{f['owners'][0]}|{f['display']}]]"
            if old in text:
                text = text.replace(old, f"@@{new}@@")
                rewrites += 1
        text = text.replace("@@[[", "[[").replace("]]@@", "]]")
        if coll == "concepts":
            text = re.sub(r"^updated: .*$", f'updated: "{stamp}"', text, count=1, flags=re.M)
        path.write_text(text)
    print(f"rewrote {rewrites} link(s) across {len(by_page)} page(s); skipped {dict(skipped)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
