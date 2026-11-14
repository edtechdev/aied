#!/usr/bin/env python3
"""Audit translated newsletter issues against the English source."""
import re, sys, glob, yaml, unicodedata, os

EN = 'content/en/newsletters/2026-11-14.md'

def slug(h):
    s = h.strip().lower()
    keep = []
    for c in s:
        cat = unicodedata.category(c)
        if cat[0] in ('L', 'N', 'M') or c in ' -_':
            keep.append(c)
    s = ''.join(keep)
    s = re.sub(r'[\s]+', '-', s).strip('-')
    return s

def audit(path, en):
    t = open(path, encoding='utf-8').read()
    probs = []
    if not t.startswith('---\n'):
        return ['no frontmatter']
    end = t.find('\n---\n', 3)
    if end < 0:
        return ['frontmatter not closed']
    parts = [t[:3], t[4:end], t[end+5:]]
    try:
        fm = yaml.safe_load(parts[1])
    except Exception as e:
        return [f'YAML: {e}']
    body = parts[2]
    for k in ('title', 'issue', 'created', 'summary', 'status', 'type', 'spotlight', 'translation_of'):
        if k not in fm:
            probs.append(f'missing {k}')
    if fm.get('issue') != 4: probs.append(f"issue={fm.get('issue')}")
    created = fm.get('created')
    created = created.isoformat() if hasattr(created, 'isoformat') else str(created)
    if created != '2026-11-14T08:00:00-05:00': probs.append(f"created={created}")
    if fm.get('status') != 'published': probs.append(f"status={fm.get('status')}")
    if fm.get('spotlight') != ['assessment-validity', 'automated-assessment', 'writing-education', 'educational-policy-ai', 'shadow-ai']:
        probs.append(f"spotlight={fm.get('spotlight')}")
    if fm.get('translation_of') != 'newsletters/2026-11-14': probs.append(f"translation_of={fm.get('translation_of')}")
    ai = fm.get('ai_assist')
    if not (isinstance(ai, list) and ai and ai[-1].get('role') == 'translation'):
        probs.append('ai_assist translation entry')
    for name, pat in (('links', r'\]\('), ('h2', r'^## '), ('h3', r'^### '), ('bullets', r'^- ')):
        a, b = len(re.findall(pat, en, re.M)), len(re.findall(pat, t, re.M))
        if a != b:
            probs.append(f'{name} {b}!={a}')
    eu = re.findall(r'\]\((https?://[^)]+)\)', en)
    tu = re.findall(r'\]\((https?://[^)]+)\)', t)
    missing = [u for u in eu if u not in tu]
    extra = [u for u in tu if u not in eu]
    if missing:
        probs.append(f'missing {len(missing)} URLs e.g. {missing[:2]}')
    if extra:
        probs.append(f'extra URLs {extra[:2]}')
    # notice line
    note = fm.get('translation_note')
    first = next((l for l in body.strip().splitlines() if l.strip()), '')
    if note and note.strip() not in first.replace('*', ''):
        probs.append('first line is not the notice')
    # toc anchors
    heads = [m.group(2) for m in re.finditer(r'^(##) (.+)$', body, re.M)]
    anchors = re.findall(r'\]\(#([^)]+)\)', body)
    want = [slug(h) for h in heads]
    if anchors != want:
        missing = [a for a in anchors if a not in want]
        if missing:
            probs.append(f'anchors not in headings: {missing[:3]}')
    if not body.lstrip().startswith('*'):
        probs.append('body does not start with italic notice')
    return probs

def main():
    en = open(EN, encoding='utf-8').read()
    paths = sys.argv[1:] or [q for q in sorted(glob.glob('content/*/newsletters/2026-11-14.md')) if q != EN]
    ok = 0
    for p in paths:
        probs = audit(p, en)
        loc = p.split('/')[1]
        if probs:
            print(f'FAIL {loc}: ' + '; '.join(probs))
        else:
            ok += 1
            print(f'ok   {loc}')
    print(f'{ok}/{len(paths)} clean')

if __name__ == '__main__':
    main()
