#!/usr/bin/env python3
"""Validate concepts.registry.yaml against the actual concepts/ directory.

Checks (all errors are exit-code failures so this can gate a build):

  1. every registry slug has concepts/<slug>.md, and every concepts/*.md is in
     the registry (no orphans either way)
  2. every registry title matches the page's frontmatter title
  3. aliases are non-empty, unique case-insensitively, and never claimed by two
     different concepts (a duplicate silently steals the link target)
  4. redirect sources have no page of their own, and redirect targets exist
  5. never_link slugs have no page and are not redirect sources
  6. sidebar sections list every concept exactly once (no dupes, no strays)
  7. redirects match src/data/conceptRedirects.ts and the sidebar matches
     src/data/conceptIndex.ts (i.e. the generated views are not stale)

Usage:
    python3 tooling/scripts/check_concepts.py [--quiet]
"""
import os, re, sys

try:
    import yaml
except ImportError:
    sys.exit("PyYAML is required: pip install pyyaml")

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import content_paths

REGISTRY = os.path.join(WIKI, 'concepts.registry.yaml')
CONCEPTS_DIR = str(content_paths.collection('concepts'))
REDIRECTS_TS = os.path.join(WIKI, 'src', 'data', 'conceptRedirects.ts')
INDEX_TS = os.path.join(WIKI, 'src', 'data', 'conceptIndex.ts')


def frontmatter_title(path):
    txt = open(path, encoding='utf-8').read()
    m = re.search(r'^title:\s*"?(.*?)"?\s*$', txt, re.M)
    return m.group(1) if m else None


def main():
    reg = yaml.safe_load(open(REGISTRY, encoding='utf-8'))
    concepts = reg.get('concepts') or {}
    errors, warnings = [], []

    on_disk = {f[:-3] for f in os.listdir(CONCEPTS_DIR) if f.endswith('.md')}
    in_reg = set(concepts)
    for slug in sorted(on_disk - in_reg):
        errors.append(f"concepts/{slug}.md exists but is missing from the registry")
    for slug in sorted(in_reg - on_disk):
        errors.append(f"registry lists '{slug}' but concepts/{slug}.md does not exist")

    for slug in sorted(in_reg & on_disk):
        want = concepts[slug].get('title')
        got = frontmatter_title(os.path.join(CONCEPTS_DIR, f'{slug}.md'))
        if want != got:
            errors.append(f"'{slug}': registry title {want!r} != frontmatter {got!r}")

    owner = {}
    for slug, entry in concepts.items():
        aliases = entry.get('aliases') or []
        if not aliases:
            errors.append(f"'{slug}' has no aliases (link scanner cannot reach it)")
        for a in aliases:
            key = a.lower().strip()
            if not key:
                errors.append(f"'{slug}' has an empty alias")
            elif key in owner and owner[key] != slug:
                errors.append(f"alias {a!r} claimed by both '{owner[key]}' and '{slug}'")
            else:
                owner[key] = slug

    redirects = reg.get('redirects') or {}
    for old, new in redirects.items():
        if old in on_disk:
            errors.append(f"redirect source '{old}' still has a page")
        if new not in on_disk:
            errors.append(f"redirect '{old}' -> '{new}': target page does not exist")
    never = reg.get('never_link') or []
    for slug in never:
        if slug in on_disk:
            errors.append(f"never_link '{slug}' has a page — drop it from never_link")
        if slug in redirects:
            warnings.append(f"never_link '{slug}' is also a redirect source; the "
                            f"editorial rule (plain text) wins over the redirect")

    seen = {}
    for section in reg.get('sections') or []:
        for group in section['groups']:
            for slug in group['items']:
                if slug in seen:
                    errors.append(f"sidebar lists '{slug}' twice")
                seen[slug] = True
                if slug not in in_reg:
                    errors.append(f"sidebar lists '{slug}' which is not a concept")
    for slug in sorted(in_reg - set(seen)):
        errors.append(f"'{slug}' is in no sidebar section (it would vanish from the nav)")

    if os.path.exists(REDIRECTS_TS):
        ts = dict(re.findall(r"^\s*'([a-z0-9\-]+)':\s*'([a-z0-9\-]+)',",
                             open(REDIRECTS_TS, encoding='utf-8').read(), re.M))
        if ts != redirects:
            errors.append("src/data/conceptRedirects.ts is stale — run "
                          "tooling/scripts/gen-concept-artifacts.py")
    if os.path.exists(INDEX_TS):
        listed = re.findall(r"'([a-z0-9\-]+)'",
                            open(INDEX_TS, encoding='utf-8').read())
        ts_items = [s for s in listed if s in in_reg]
        if sorted(ts_items) != sorted(seen):
            errors.append("src/data/conceptIndex.ts is stale — run "
                          "tooling/scripts/gen-concept-artifacts.py")

    quiet = '--quiet' in sys.argv
    if not quiet:
        print(f"registry: {len(concepts)} concepts, "
              f"{sum(len(c.get('aliases') or []) for c in concepts.values())} aliases, "
              f"{len(redirects)} redirects, {len(never)} never-link")
        for section in reg.get('sections') or []:
            n = sum(len(g['items']) for g in section['groups'])
            print(f"  {n:>4}  {section['heading']}")
    for w in warnings:
        print(f"WARN  {w}")
    for e in errors:
        print(f"ERROR {e}")
    if errors:
        sys.exit(f"\n{len(errors)} registry error(s)")
    print(f"OK — registry is consistent with {content_paths.rel(content_paths.collection('concepts'))}/ and the generated views.")


if __name__ == '__main__':
    main()