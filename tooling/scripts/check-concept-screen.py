#!/usr/bin/env python3
"""Gate: every newly ingested article carries a recorded concept-narrative decision.

Ingesting an article is not finished when the page is written. Each new article has to be
screened against the concept pages it speaks to, and where a finding is BOTH significant
and distinguishing, woven into that concept's narrative (see the wiki-concept-narrative
skill). That step was silently skipped for a whole day's batch, so it is checked here
rather than trusted.

Why this checks for a RECORD rather than for integration: most articles legitimately add
nothing new to any concept page - a screen of one batch accepted 9 of 20 pairs - so
"this article appears in no concept narrative" is the expected outcome for a large share
of articles (274 of 1,493 in this corpus) and cannot be a defect. What must never happen
is an article that was never screened. So an article is compliant when either

  (a) it is listed in the concept-screen record with `integrated:` naming the concept
      page(s) that now carry it - which this script VERIFIES against the page bodies, so a
      claimed integration that was not actually written still fails; or
  (b) it is listed with an empty `integrated:` and a non-empty `reason:` recording why
      nothing qualified.

Articles created before `concept_screen.since` are out of scope: the requirement starts
when the mechanism does, and back-filling 1,500 historical pages is not the intent.

    python3 tooling/scripts/check-concept-screen.py            # all in-scope articles
    python3 tooling/scripts/check-concept-screen.py <slug> ... # just these
"""
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wiki_config import load_config, path  # noqa: E402

try:
    import yaml
except ImportError:  # pragma: no cover
    sys.exit("PyYAML required: run with /usr/bin/python3")


def narrative(text):
    """Concept/page text up to the Connected lists: the narrative body only."""
    cut = len(text)
    for marker in ('## Connected Concepts', '## Connected Articles'):
        i = text.find(marker)
        if i != -1:
            cut = min(cut, i)
    return text[:cut]


def frontmatter_date(text, key):
    m = re.search(r'^%s:\s*"?([0-9]{4}-[0-9]{2}-[0-9]{2})' % key, text, re.M)
    return m.group(1) if m else ''


def changed_article_slugs(wiki):
    """Article slugs created or edited in the working tree since HEAD.

    This is what `--changed` checks, so the gate can run inside the scoped gate
    pass that a normal ingestion uses. Mirrors run-gates.py's changed_slugs: the
    untracked listing matters, because a brand-new article is exactly the case
    this gate exists for and it is not in `git diff HEAD` until it is added.
    """
    cmds = [
        ['git', 'diff', '--name-only', 'HEAD'],
        ['git', 'ls-files', '--others', '--exclude-standard'],
    ]
    paths = set()
    for cmd in cmds:
        out = subprocess.run(cmd, cwd=wiki, capture_output=True, text=True).stdout
        paths.update(p for p in out.splitlines() if p.strip())
    slugs = set()
    for p in paths:
        parts = p.replace('\\', '/').split('/')
        if p.endswith('.md') and len(parts) >= 3 and parts[0] == 'content' \
                and parts[1] == 'en' and parts[2] == 'articles':
            slugs.add(os.path.basename(p)[:-3])
    return sorted(slugs)


FACET_FIELDS = (
    'foundations', 'pedagogy', 'technology', 'assessment',
    'methods', 'institutions', 'ethics',
)
WIKILINK = re.compile(r'\[\[([^\]|]+)(?:\|[^\]]*)?\]\]')


def concept_candidates(text, concept_slugs):
    """Every concept this article declares a link to: facet metadata plus inline links.

    The screen has to answer for ALL of these, not only the ones it decided to
    integrate. An article's facet fields and its own inline links are the claims it
    makes about which concepts it speaks to, so each one needs a decision recorded -
    integrated, or a reason it does not qualify.
    """
    if text.startswith('---'):
        parts = text.split('\n---', 1)
        fm = parts[0] if len(parts) == 2 else ''
        body = parts[1] if len(parts) == 2 else text
    else:
        fm, body = '', text
    found = set()
    for field in FACET_FIELDS:
        m = re.search(r'^%s:\s*\[(.*?)\]' % field, fm, re.M)
        if m:
            found.update(v.strip() for v in m.group(1).split(',') if v.strip())
    found.update(t.strip().replace('.md', '') for t in WIKILINK.findall(body))
    return {c for c in found if c in concept_slugs}


def main(argv):
    wiki = os.environ.get('WIKI_ROOT') or os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    cfg = load_config()
    screen = cfg.get('concept_screen') or {}
    since = screen.get('since') or ''
    coverage_since = screen.get('coverage_since') or ''
    record_path = os.path.join(wiki, screen.get('record') or 'concept-screen.yaml')
    if not since:
        print('SKIP - concept_screen.since is not configured in wiki.config.yaml')
        return 0
    if not os.path.exists(record_path):
        print('FAIL - concept-screen record %s does not exist' % record_path)
        return 1

    entries = yaml.safe_load(open(record_path, encoding='utf-8')) or []
    by_article = {}
    for e in entries:
        if isinstance(e, dict) and e.get('article'):
            by_article[str(e['article'])] = e

    want = set(argv[1:])
    if '--changed' in want:
        want = set(changed_article_slugs(wiki))
        if not want:
            print('No changed article page(s) vs HEAD - no concept screen to check.')
            return 0
    art_dir = path(cfg, 'articles')
    problems = []
    backlog = []
    checked = 0
    for name in sorted(os.listdir(art_dir)):
        if not name.endswith('.md'):
            continue
        slug = name[:-3]
        if want and slug not in want:
            continue
        text = open(os.path.join(art_dir, name), encoding='utf-8').read()
        created = frontmatter_date(text, 'created')
        if not created or created < since:
            continue          # out of scope: predates the requirement
        checked += 1
        entry = by_article.get(slug)
        if entry is None:
            problems.append('%s (created %s): no entry in concept-screen.yaml - run the concept screen' % (slug, created))
            continue
        integrated = entry.get('integrated') or []
        decided = {str(c) for c in integrated}
        decided.update(str(c) for c in (entry.get('no_change') or []))
        if not integrated:
            if not str(entry.get('reason') or '').strip():
                problems.append('%s: recorded with no integration and no reason' % slug)
            continue
        for c in integrated:
            cpath = os.path.join(path(cfg, 'concepts'), '%s.md' % c)
            if not os.path.exists(cpath):
                problems.append('%s: integrated names concept %s, which does not exist' % (slug, c))
            elif slug not in narrative(open(cpath, encoding='utf-8').read()):
                problems.append('%s: claims integration into %s, but that page does not mention it' % (slug, c))

        # Every concept the article declares must carry a decision. Otherwise the
        # screen answered only for the pairs that happened to be listed already and
        # never asked whether the article contributes to the rest. Required from
        # coverage_since onward; earlier in-scope articles are reported as backlog.
        concept_dir = path(cfg, 'concepts')
        concept_slugs = {n[:-3] for n in os.listdir(concept_dir) if n.endswith('.md')}
        candidates = concept_candidates(text, concept_slugs)
        unaccounted = sorted(candidates - decided)
        if unaccounted:
            if coverage_since and created < coverage_since:
                backlog.append((slug, unaccounted))
            else:
                problems.append(
                    '%s: %d concept candidate(s) with no recorded decision: %s'
                    % (slug, len(unaccounted), ', '.join(unaccounted)))

    if backlog and not problems:
        n = sum(len(u) for _, u in backlog)
        print('note - coverage backlog: %d article(s) predate full-coverage screening '
              '(%d concept candidate(s) undecided). These pass the weaker requirement.'
              % (len(backlog), n))
    if problems:
        print('FAIL - %d article(s) checked, %d problem(s):' % (checked, len(problems)))
        for p in problems:
            print('  - %s' % p)
        print('\nScreen each article against its concept pages (skills/research/wiki-concept-narrative),')
        print('apply what qualifies, and record the outcome - integrated or a reason for no change - in')
        print('%s.' % os.path.relpath(record_path, wiki))
        return 1
    print('OK - %d article(s) created since %s all carry a recorded concept-screen decision' % (checked, since))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
