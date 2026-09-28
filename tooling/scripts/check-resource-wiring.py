#!/usr/bin/env python3
"""Gate: resource pages are wired into the knowledge base, not just published.

Two defects showed up across most of the resource corpus at once, and a green build caught
neither:

  1. No `[[concept]]` links in the page's PROSE. Links inside the `## Connected Concepts`
     list do not count - that list is the page's own navigation, while prose links are how
     a reader moving through the text meets the concepts. Fifteen of twenty-seven pages had
     zero.
  2. Nobody ever asked whether the resource belongs in a concept page's
     `connected_resources:`. Not every resource should be on a concept page - some are only
     useful inside another tool's ecosystem - but the question is not optional, so it is
     recorded in resource-wiring.yaml: either the concept pages that now list it, or an empty
     list and a reason. An entry claiming a host that does not list the resource FAILS.

    python3 tooling/scripts/check-resource-wiring.py            # every resource page
    python3 tooling/scripts/check-resource-wiring.py <slug> ... # just these
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wiki_config import load_config, path  # noqa: E402


def prose(text):
    body = text[text.index('\n---\n', 4) + 5:]
    return body.split('## Connected Concepts')[0]


def main(argv):
    cfg = load_config()
    res_dir = path(cfg, 'resources')
    concept_dir = path(cfg, 'concepts')
    concept_slugs = {n[:-3] for n in os.listdir(concept_dir) if n.endswith('.md')}
    want = set(argv[1:])
    rec_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), 'resource-wiring.yaml')
    record = {}
    if os.path.exists(rec_path):
        import yaml
        for e in (yaml.safe_load(open(rec_path, encoding='utf-8')) or []):
            if isinstance(e, dict) and e.get('resource'):
                record[str(e['resource'])] = e

    # every page's connected_resources, so defect 2 is one pass rather than N
    listed = {}
    for section in ('concepts', 'articles', 'faqs', 'resources'):
        try:
            d = path(cfg, section)
        except Exception:
            continue
        if not os.path.isdir(d):
            continue
        for name in os.listdir(d):
            if not name.endswith('.md'):
                continue
            text = open(os.path.join(d, name), encoding='utf-8').read()
            m = re.search(r'^connected_resources:\s*\[(.*?)\]', text, re.M | re.S)
            if not m:
                continue
            for slug in re.findall(r'[a-z0-9-]+', m.group(1)):
                listed.setdefault(slug, set()).add('%s/%s' % (section, name[:-3]))

    problems = []
    checked = 0
    for name in sorted(os.listdir(res_dir)):
        if not name.endswith('.md'):
            continue
        slug = name[:-3]
        if want and slug not in want:
            continue
        checked += 1
        text = open(os.path.join(res_dir, name), encoding='utf-8').read()
        links = [l for l in re.findall(r'\[\[([^\]|]+)(?:\|[^\]]+)?\]\]', prose(text))]
        valid = [l for l in links if l in concept_slugs and l != slug]
        if not valid:
            problems.append('%s: no `[[concept]]` link in the prose%s' % (
                slug, '' if not links else ' (found %s, which do not resolve to concepts)' % links))
        entry = record.get(slug)
        if entry is None:
            problems.append('%s: no entry in resource-wiring.yaml - review whether a concept page should list it' % slug)
        else:
            hosts = entry.get('hosts') or []
            if not hosts:
                if not str(entry.get('reason') or '').strip():
                    problems.append('%s: recorded with no host and no reason' % slug)
            for h in hosts:
                cpath = os.path.join(concept_dir, '%s.md' % h)
                if not os.path.exists(cpath):
                    problems.append('%s: names concept host %s, which does not exist' % (slug, h))
                elif not re.search(r'connected_resources:.*\b' + re.escape(slug) + r'\b', open(cpath, encoding='utf-8').read(), re.M | re.S):
                    problems.append('%s: claims host %s, but that page does not list it' % (slug, h))

    if problems:
        print('FAIL - %d resource page(s) checked, %d problem(s):' % (checked, len(problems)))
        for p in problems:
            print('  - %s' % p)
        print('\nA resource page needs 1-3 [[concept]] links in its prose, and the slug in the')
        print('connected_resources of the 2-4 concept pages that a reader of them would want it from.')
        return 1
    print('OK - %d resource page(s) wired: prose concept links present, each listed on a concept page' % checked)
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
