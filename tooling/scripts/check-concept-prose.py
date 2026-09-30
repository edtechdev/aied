#!/usr/bin/env python3
"""Check concept-page narrative prose for redundancy and over-complication.

Concept pages are read by instructors and educational developers first, so the
narrative has to stay readable as it grows. Weaving new findings in is the intended
way pages grow, which makes this the failure mode to watch: a page can accumulate
correct sentences and still become worse to read.

Scope matters. The corpus already contains long sentences written before this check
existed, so judging whole pages would fail forever and teach nothing. This check
therefore judges the lines a change ADDS (via `git diff`), and treats the page as a
whole only for redundancy, which is a property no single line can be judged on.

  FAIL  duplicate sentence        - an added sentence that repeats one already on the
                                    page (>= 80% shared content words): redundancy
  FAIL  added sentence > 55 words - a new sentence long enough to lose the reader
  WARN  narrative grew > 15%      - the page is getting heavier, check it still flows
  WARN  added paragraph > 150 w   - a wall of text in a bulleted-page idiom

Usage:
    python3 tooling/scripts/check-concept-prose.py <concept-slug> [...]
    python3 tooling/scripts/check-concept-prose.py --changed
"""
from __future__ import annotations

import os
import re
import subprocess
import sys

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CONCEPTS = os.path.join(WIKI, 'content', 'en', 'concepts')

SENTENCE_MAX = 55
PARAGRAPH_MAX = 150
SIMILARITY = 0.80
GROWTH_WARN = 0.15

STOP = set("""a an the and or but if then than that this these those of to in on for with as at by
from into over under about it its is are was were be been being has have had do does did not no
so such can could may might will would should their there they them we our you your i he she his
her which who whom what when where why how more most much many other some any each both few also
only just even still yet because while during between within without across per via""".split())

CONNECTED = re.compile(r'^##\s+Connected\s+(Concepts|Articles)\s*$', re.M)


def read(path: str) -> str:
    with open(path, encoding='utf-8') as fh:
        return fh.read()


def narrative(text: str) -> str:
    """Body above the first Connected section, frontmatter stripped."""
    if text.startswith('---'):
        parts = text.split('\n---', 1)
        if len(parts) == 2:
            text = parts[1]
    m = CONNECTED.search(text)
    return text[:m.start()] if m else text


def strip_markup(line: str) -> str:
    line = re.sub(r'^[-*]\s+', '', line.strip())
    line = re.sub(r'\*\*([^*]+)\*\*', r'\1', line)
    line = re.sub(r'\[\[[^\]|]+\|([^\]]*)\]\]', r'\1', line)
    line = re.sub(r'\[\[([^\]]+)\]\]', r'\1', line)
    return line


def sentences(body: str) -> list[tuple[str, int]]:
    """(sentence, line index) for prose lines, excluding label fragments.

    A line like `**Label.** Sentence one. Sentence two.` yields only the sentences
    after the label, and a `Label — sentence` form yields only the sentence, so the
    label can never be mistaken for a duplicate of the sentence it introduces.
    """
    out: list[tuple[str, int]] = []
    for i, raw in enumerate(body.split('\n')):
        line = raw.strip()
        if (not line or line.startswith('>') or line.startswith('#')
                or line.startswith('|') or line.startswith('---')):
            continue
        text = strip_markup(line)
        # drop a leading label: the segment before the last em dash, if it carries
        # no sentence-ending punctuation of its own
        if ' \u2014 ' in text:
            head, _, tail = text.rpartition(' \u2014 ')
            text = tail if not re.search(r'[.!?]\s', head) else text
        for s in re.split(r'(?<=[.!?])\s+', text):
            s = s.strip()
            if len(s.split()) >= 6:
                out.append((s, i))
    return out


def content_words(s: str) -> set[str]:
    words = []
    for w in s.split():
        w = w.strip(".,;:()\"'\u2014-")
        if w and w.lower() not in STOP and len(w) > 2:
            words.append(w.lower())
    return set(words)


def paragraphs(body: str) -> list[str]:
    return [b.strip() for b in re.split(r'\n\s*\n', body)
            if b.strip() and not b.strip().startswith('#') and not b.strip().startswith('>')]


def added_lines(slug: str) -> list[str]:
    """Lines this change adds to the concept page's narrative."""
    out = subprocess.run(['git', 'diff', '-U0', 'HEAD', '--',
                          f'content/en/concepts/{slug}.md'],
                         cwd=WIKI, capture_output=True, text=True).stdout
    lines = []
    for l in out.split('\n'):
        if l.startswith('+') and not l.startswith('+++'):
            lines.append(l[1:])
    return lines


def head_narrative_words(slug: str) -> int | None:
    out = subprocess.run(['git', 'show', f'HEAD:content/en/concepts/{slug}.md'],
                         cwd=WIKI, capture_output=True, text=True)
    if out.returncode != 0:
        return None
    return len(narrative(out.stdout).split())


def changed_slugs() -> list[str]:
    out = subprocess.run(['git', 'diff', '--name-only', 'HEAD', '--', 'content/en/concepts'],
                         cwd=WIKI, capture_output=True, text=True).stdout
    out += subprocess.run(['git', 'diff', '--name-only', '--cached', 'HEAD',
                           '--', 'content/en/concepts'],
                          cwd=WIKI, capture_output=True, text=True).stdout
    return sorted({os.path.basename(p)[:-3] for p in out.split() if p.endswith('.md')})


def main(argv: list[str]) -> int:
    if not argv:
        print(__doc__.strip())
        return 2
    slugs = changed_slugs() if argv == ['--changed'] else argv
    if not slugs:
        print('OK - no changed concept pages to check.')
        return 0

    failures = 0
    warnings = 0
    for slug in slugs:
        path = os.path.join(CONCEPTS, slug + '.md')
        if not os.path.exists(path):
            print(f'{slug}: no such concept page')
            failures += 1
            continue
        body = narrative(read(path))
        sents = sentences(body)
        new = added_lines(slug)
        new_set = set()
        for l in new:
            text = strip_markup(l)
            if ' \u2014 ' in text:
                head, _, tail = text.rpartition(' \u2014 ')
                text = tail if not re.search(r'[.!?]\s', head) else text
            for s in re.split(r'(?<=[.!?])\s+', text):
                if len(s.split()) >= 6:
                    new_set.add(s.strip())

        # 1. redundancy: an ADDED sentence repeating an existing one.
        # Compare by POSITION, not by string identity: two identical sentences on
        # different lines are exactly the duplicate this check exists to catch.
        existing: list[tuple[str, set[str], int]] = []
        for s, idx in sents:
            cw = content_words(s)
            if len(cw) >= 4:
                existing.append((s, cw, idx))
        reported: set[str] = set()
        for i, (s, cw, idx) in enumerate(existing):
            if s not in new_set or s in reported:
                continue
            for j, (prev, pcw, pidx) in enumerate(existing):
                if i == j or not pcw:
                    continue
                overlap = len(cw & pcw) / min(len(cw), len(pcw))
                if overlap >= SIMILARITY:
                    print(f'{slug}: DUPLICATE SENTENCE ({overlap:.0%} overlap, '
                          f'lines {pidx} and {idx})\n'
                          f'    added: {s[:160]}\n    exists: {prev[:160]}')
                    failures += 1
                    reported.add(s)
                    break

        # 2. over-long sentences, among added lines only
        for s in new_set:
            n = len(s.split())
            if n > SENTENCE_MAX:
                print(f'{slug}: ADDED SENTENCE {n} WORDS (max {SENTENCE_MAX}): {s[:160]}')
                failures += 1

        # 3. paragraph walls among added lines
        for p in paragraphs('\n'.join(new)):
            n = len(p.split())
            if n > PARAGRAPH_MAX:
                print(f'{slug}: WARNING added paragraph of {n} words (max {PARAGRAPH_MAX})')
                warnings += 1

        # 4. narrative growth vs HEAD
        old_n = head_narrative_words(slug)
        if old_n:
            new_n = len(body.split())
            if (new_n - old_n) / old_n > GROWTH_WARN:
                pct = 100 * (new_n - old_n) / old_n
                print(f'{slug}: WARNING narrative grew {pct:.0f}% '
                      f'({old_n} -> {new_n} words)')
                warnings += 1

    print()
    if failures:
        print(f'FAIL - {failures} prose defect(s) across {len(slugs)} concept page(s). '
              'Shorten the added sentence or drop the redundant one.')
        return 1
    print(f'OK - {len(slugs)} concept page(s): added prose has no duplicate or over-long '
          f'sentences' + (f' ({warnings} warning(s))' if warnings else '') + '.')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))