#!/usr/bin/env python3
"""Check and refresh the repo's skill mirrors against the agent's installed copies.

The repo ships `skills/research/<name>/` as a redacted mirror of the skills the
agent actually runs (`agent.skills_dir` in wiki.config.yaml), plus
`tooling/SKILL.md` as the mirror of the wiki-management skill. The two copies are
not byte-identical by design:

  * the repo copy uses the placeholder `<WIKI>` instead of the absolute repo path
  * it names no person and no agent product ("the maintainer" / "the AI agent")
  * the installed copy may cite absolute paths, the agent's tool names and the
    maintainer's name

That difference is legit, CONTENT difference is not. This script normalizes both
sides (paths, agent name, personal identifiers) and reports only material drift.

Usage:
    python3 tooling/scripts/sync-skills.py --check              # report drift
    python3 tooling/scripts/sync-skills.py --diff <skill>       # unified diff
    python3 tooling/scripts/sync-skills.py --to-repo [skill...] # installed -> repo
    python3 tooling/scripts/sync-skills.py --to-installed [skill...]

Personal identifiers are read at run time from site.config.json (`editor.name`)
and never stored in this file. Extra pairs can be supplied with the
WIKI_REDACT environment variable ("Name=the maintainer,Other=someone").
"""
import argparse
import difflib
import json
import os
import re
import shutil
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wiki_config import capability, load_config, path  # noqa: E402


def redaction_pairs(cfg, wiki):
    """(pattern, replacement) pairs that make the two copies comparable."""
    site_path = os.path.join(wiki, str((cfg.get('site') or {}).get('metadata', 'site.config.json')))
    person = ''
    try:
        with open(site_path, encoding='utf-8') as fh:
            person = ((json.load(fh).get('editor') or {}).get('name') or '').strip()
    except (OSError, ValueError):
        pass
    pairs = []
    if person:
        pairs.append((person, 'the maintainer'))
        for token in person.split():
            if len(token) > 2:
                pairs.append((token, 'the maintainer'))
    agent = (cfg.get('agent') or {}).get('name') or ''
    if agent:
        pairs.append((agent, 'the AI agent'))
    pairs.append((wiki, '<WIKI>'))
    skills = os.path.expanduser((cfg.get('agent') or {}).get('skills_dir') or '')
    if skills:
        pairs.append((skills, '<SKILLS_DIR>'))
    pairs.append((os.path.expanduser('~'), '<HOME>'))
    for pair in (os.environ.get('WIKI_REDACT') or '').split(','):
        if '=' in pair:
            k, v = pair.split('=', 1)
            pairs.append((k.strip(), v.strip()))
    # longest patterns first, so a full name is replaced before its parts
    return sorted(((k, v) for k, v in pairs if k), key=lambda kv: -len(kv[0]))


def normalize(text, pairs, reverse=False):
    """Collapse the sanctioned differences between repo and installed copies."""
    for src, dst in pairs:
        if reverse:
            text = text.replace(dst, src)
        else:
            text = text.replace(src, dst)
    # tool-module names differ between mirrors (hermes_tools vs agent_tools)
    text = re.sub(r'\b(?:hermes|agent)_tools\b', '<TOOLS>', text)
    return text


def iter_files(root):
    for dirpath, _dirs, files in os.walk(root):
        for f in sorted(files):
            if f.endswith('.pyc') or '__pycache__' in dirpath:
                continue
            full = os.path.join(dirpath, f)
            yield full, os.path.relpath(full, root)


def pairs_of(cfg, wiki, installed):
    """[(label, repo_dir_or_file, installed_dir_or_file)] to compare."""
    out = [('tooling/SKILL.md', os.path.join(wiki, 'tooling', 'SKILL.md'),
            os.path.join(installed, 'research-wiki', 'SKILL.md'))]
    repo_research = os.path.join(wiki, 'skills', 'research')
    if os.path.isdir(repo_research):
        for name in sorted(os.listdir(repo_research)):
            out.append((f'skills/research/{name}',
                        os.path.join(repo_research, name),
                        os.path.join(installed, 'research', name)))
    return out


def read(path_):
    try:
        with open(path_, encoding='utf-8') as fh:
            return fh.read()
    except (OSError, UnicodeDecodeError):
        return None


def check(pairs, want_diff, skills):
    drift, missing = [], []
    for label, repo, inst in pairs:
        if skills and not any(s in label for s in skills):
            continue
        if os.path.isfile(repo):
            if not os.path.exists(inst):
                missing.append((label, 'installed copy missing'))
                continue
            rev = normalize(read(repo) or '', pairs_conf, reverse=False)
            fwd = normalize(read(inst) or '', pairs_conf, reverse=False)
            if rev != fwd:
                n = sum(1 for l in difflib.unified_diff(rev.split('\n'), fwd.split('\n'),
                                                        lineterm='', n=0)
                        if l[:1] in '+-' and l[:3] not in ('+++', '---'))
                drift.append((label, n))
                if want_diff:
                    print('\n'.join(difflib.unified_diff(
                        rev.split('\n'), fwd.split('\n'),
                        fromfile=f'{label} (repo)', tofile=f'{label} (installed)',
                        lineterm='', n=2))[:20000])
            continue
        # directory pair
        if not os.path.isdir(inst):
            missing.append((label, 'installed copy missing'))
            continue
        repo_files = {rel for _full, rel in iter_files(repo)}
        inst_files = {rel for _full, rel in iter_files(inst)}
        for rel in sorted(repo_files | inst_files):
            if rel not in repo_files:
                drift.append((f'{label}/{rel}', -1))
                continue
            if rel not in inst_files:
                missing.append((f'{label}/{rel}', 'missing from the installed copy'))
                continue
            rev = normalize(read(os.path.join(repo, rel)) or '', pairs_conf, reverse=False)
            fwd = normalize(read(os.path.join(inst, rel)) or '', pairs_conf, reverse=False)
            if rev != fwd:
                n = sum(1 for l in difflib.unified_diff(rev.split('\n'), fwd.split('\n'),
                                                        lineterm='', n=0)
                        if l[:1] in '+-' and l[:3] not in ('+++', '---'))
                drift.append((f'{label}/{rel}', n))
                if want_diff:
                    print('\n'.join(difflib.unified_diff(
                        rev.split('\n'), fwd.split('\n'),
                        fromfile=f'{label}/{rel} (repo)',
                        tofile=f'{label}/{rel} (installed)', lineterm='', n=2))[:20000])
    return drift, missing


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--check', action='store_true', help='report material drift')
    ap.add_argument('--diff', metavar='SKILL', help='print the diff for matching skills')
    ap.add_argument('--to-repo', nargs='*', metavar='SKILL', help='installed -> repo (redacted)')
    ap.add_argument('--to-installed', nargs='*', metavar='SKILL', help='repo -> installed')
    args = ap.parse_args()

    cfg = load_config()
    wiki = path(cfg, 'root')
    skills_dir = os.path.expanduser((cfg.get('agent') or {}).get('skills_dir') or '')
    if not skills_dir or not os.path.isdir(skills_dir):
        sys.exit(f"agent.skills_dir is not set or missing in wiki.config.yaml "
                 f"({skills_dir!r}) — cannot locate the installed skills")

    global pairs_conf
    pairs_conf = redaction_pairs(cfg, wiki)
    groups = pairs_of(cfg, wiki, skills_dir)
    selected = args.to_repo if args.to_repo is not None else args.to_installed
    to_repo = args.to_repo is not None

    if args.to_repo is None and args.to_installed is None:
        drift, missing = check(groups, bool(args.diff), [args.diff] if args.diff else [])
        print(f"\nrepo mirrors: {len(groups)} skill group(s) vs {skills_dir}")
        for label, n in drift:
            print(f"  DRIFT  {label}" + (f"  ({n} changed line(s))" if n >= 0 else "  (installed-only file)"))
        for label, why in missing:
            print(f"  MISS   {label}  — {why}")
        if not drift and not missing:
            print("  OK — no material drift (paths/names normalized).")
        print(f"\n{tool_hint(cfg)}")
        return

    if not selected:
        selected = [g[0] for g in groups]
    written = 0
    for label, repo, inst in groups:
        if not any(s in label for s in selected):
            continue
        if os.path.isfile(repo):
            files = [('', repo, inst)]
        else:
            files = [(rel, os.path.join(repo, rel), os.path.join(inst, rel))
                     for _full, rel in iter_files(inst if to_repo else repo)]
        for rel, rpath, ipath in files:
            src, dst = (ipath, rpath) if to_repo else (rpath, ipath)
            text = read(src)
            if text is None:
                print(f"  skip (unreadable): {src}")
                continue
            text = normalize(text, pairs_conf, reverse=to_repo)
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            with open(dst, 'w', encoding='utf-8') as fh:
                fh.write(text)
            written += 1
            print(f"  {'installed -> repo' if to_repo else 'repo -> installed'}  {label}{'/' + rel if rel else ''}")
    print(f"\n{written} file(s) written."
          + ("  Review the redaction before committing." if to_repo else
             "  Reviewer note: this overwrote the installed copy — installed-only rules are lost."))


def tool_hint(cfg):
    return ("Reconcile by hand: the installed skill is authoritative for behaviour, "
            "the repo copy must additionally drop personal names and absolute paths.")


if __name__ == '__main__':
    main()
