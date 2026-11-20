"""Detect pages whose only change vs HEAD is the connected-list -> facet migration.

On 2026-11-19 the closing "Connected Concepts" / "Connected Articles" lists moved from
markdown body sections into the frontmatter facets connected_concepts / connected_articles.
That is a structural refactor: it does not touch a page's narrative. The changed-page quality
gates exist to catch defects an EDIT introduces, so a page whose narrative is byte-identical
to HEAD (only the connected lists moved) must not be re-audited for pre-existing backlog in
content the migration never touched.

The test is deliberately conservative: a page is "migration-only" only if, after removing the
connected sections from the HEAD body and the connected facets from the working frontmatter,
the remaining narrative AND frontmatter are identical to HEAD's. Any other edit disqualifies it.
"""
import pathlib
import re
import subprocess

ROOT = pathlib.Path(__file__).resolve().parents[2]
_SRC = (ROOT / 'src/i18n/sectionHeadings.ts').read_text(encoding='utf-8')

_head_block = _SRC[_SRC.index('CONNECTED_HEADINGS'):_SRC.index('CONNECTED_ALIASES')]
_CANON = {}
for _loc, _cc, _ca in re.findall(
        r"(\w+): \{ connectedConcepts: '([^']*)', connectedArticles: '([^']*)' \}", _head_block):
    _CANON[_loc] = {'concepts': _cc, 'articles': _ca}
_alias_block = _SRC[_SRC.index('CONNECTED_ALIASES'):]
_alias_block = _alias_block[:_alias_block.index('\n};')]
_ALIASES = {}
for _loc, _block in re.findall(r'(\w+): \{([^}]*)\}', _alias_block):
    _d = {}
    for _kind, _key in (('concepts', 'connectedConcepts'), ('articles', 'connectedArticles')):
        _m = re.search(rf"{_key}: \[([^\]]*)\]", _block)
        if _m:
            _d[_kind] = [x.strip().strip("'") for x in _m.group(1).split(',') if x.strip()]
    _ALIASES[_loc] = _d


def _labels(loc, kind):
    s = set()
    if loc in _CANON:
        s.add(_CANON[loc][kind].lower())
    for a in _ALIASES.get(loc, {}).get(kind, []):
        s.add(a.lower())
    if loc == 'en':
        s.add('connected concepts' if kind == 'concepts' else 'connected articles')
    return s


def _split_fm(text):
    m = re.match(r'^---\n(.*?\n)---\n(.*)$', text, re.S)
    return (m.group(1), m.group(2)) if m else (None, text)


def _strip_connected(body, loc):
    cc, ca = _labels(loc, 'concepts'), _labels(loc, 'articles')
    parts = re.split(r'(?m)(?=^## )', body)
    kept = []
    for p in parts:
        if p.startswith('## '):
            h = p.split('\n', 1)[0][3:].strip().lower()
            if h in cc or h in ca:
                continue
        kept.append(p)
    return ''.join(kept)


def _strip_connected_facets(fm):
    return re.sub(r'(?m)^connected_(concepts|articles):.*\n?', '', fm)


def _norm(text):
    # cosmetic whitespace only: collapse blank runs, trim trailing space per line + ends
    text = re.sub(r'[ \t]+\n', '\n', text)
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()


def _head_texts_batch(rel_paths):
    """rel_path -> HEAD text (None if absent from HEAD), in a single git cat-file call."""
    rel_paths = list(rel_paths)
    if not rel_paths:
        return {}
    refs = ''.join(f'HEAD:{p}\n' for p in rel_paths)
    proc = subprocess.run(['git', 'cat-file', '--batch'], input=refs.encode(),
                          cwd=ROOT, capture_output=True)
    out = proc.stdout
    result = {}
    pos = 0
    for p in rel_paths:
        nl = out.find(b'\n', pos)
        if nl == -1:
            result[p] = None
            break
        header = out[pos:nl].decode(errors='replace')
        pos = nl + 1
        parts = header.split()
        if len(parts) == 3 and parts[1] == 'blob':
            size = int(parts[2])
            result[p] = out[pos:pos + size].decode('utf-8', errors='replace')
            pos += size + 1  # skip the trailing newline
        else:
            result[p] = None  # '<ref> missing'
    return result


def _compare(rel_path, head, work):
    parts = str(rel_path).replace('\\', '/').split('/')
    if len(parts) != 4 or parts[0] != 'content':
        return False
    loc = parts[1]
    if head is None:
        return False  # new file, not a migration of an existing page
    hfm, hbody = _split_fm(head)
    wfm, wbody = _split_fm(work)
    if hfm is None or wfm is None:
        return False
    # narrative must be unchanged once connected sections are removed from HEAD
    if _norm(_strip_connected(hbody, loc)) != _norm(wbody):
        return False
    # frontmatter must differ only by the added connected facets
    if _norm(_strip_connected_facets(wfm)) != _norm(hfm):
        return False
    # and the working page must actually carry at least one connected facet (the migration)
    if not re.search(r'(?m)^connected_(concepts|articles):', wfm):
        return False
    return True


def is_migration_only(rel_path):
    """True if rel_path's change vs HEAD is confined to the connected-list migration."""
    rel_path = str(rel_path).replace('\\', '/')
    p = ROOT / rel_path
    if not p.exists():
        return False
    heads = _head_texts_batch([rel_path])
    return _compare(rel_path, heads.get(rel_path), p.read_text(encoding='utf-8'))


def migration_only_set(rel_paths):
    """Subset of rel_paths whose change vs HEAD is confined to the connected-list migration."""
    rel_paths = [str(r).replace('\\', '/') for r in rel_paths]
    heads = _head_texts_batch(rel_paths)
    out = set()
    for rp in rel_paths:
        p = ROOT / rp
        if not p.exists():
            continue
        if _compare(rp, heads.get(rp), p.read_text(encoding='utf-8')):
            out.add(rp)
    return out


def filter_migration_only(rel_paths):
    rel_paths = [str(r).replace('\\', '/') for r in rel_paths]
    skip = migration_only_set(rel_paths)
    return [r for r in rel_paths if r not in skip]
