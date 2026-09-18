#!/usr/bin/env python3
"""Check and refresh the repo's skill mirrors against the agent's installed copies.

The repo ships `skills/research/<name>/` as a redacted mirror of the skills the
agent actually runs (`agent.skills_dir` in wiki.config.yaml), plus
`tooling/SKILL.md` as the mirror of the wiki-management skill. The two copies are
not byte-identical by design:

  * the repo copy uses the placeholder `<WIKI>` instead of the absolute repo path
  * it names no person and no agent product ("the maintainer" / "AI agent")
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
import hashlib
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
        pairs.append((f'{agent} Agent', 'AI agent'))
        pairs.append((agent, 'AI agent'))
        # The agent's tool module (`<agent>_tools`) is a placeholder in the repo
        # copy. It needs a real pair, not only the regex below: a regex-only
        # substitution is not inverted by reverse normalization, so
        # `--to-installed` would write the literal `<TOOLS>` into the installed
        # skill and the agent would read its own tool name as a placeholder.
        pairs.append((f'{agent.lower()}_tools', '<TOOLS>'))
    # NOTE: third-party site brand names used as design references are scrubbed in
    # the skill text itself, not here. Anything added as a replacement string in
    # this function gets inverted by reverse normalization, so a pair whose
    # replacement text also appears in this file rewrites itself.
    pairs.append((wiki, '<WIKI>'))
    skills = os.path.expanduser((cfg.get('agent') or {}).get('skills_dir') or '')
    if skills:
        pairs.append((skills, '<AGENT>'))
        home = os.path.expanduser('~')
        if skills.startswith(home + os.sep):
            pairs.append(('~' + skills[len(home):], '<AGENT>'))
        parent = os.path.dirname(skills)
        if parent and parent != home:
            pairs.append((parent, '<AGENT>'))
            if parent.startswith(home + os.sep):
                pairs.append(('~' + parent[len(home):], '<AGENT>'))
    if wiki.startswith(os.path.expanduser('~') + os.sep):
        pairs.append(('~' + wiki[len(os.path.expanduser('~')):], '<WIKI>'))
    pairs.append((os.path.expanduser('~'), '<HOME>'))
    for pair in (os.environ.get('WIKI_REDACT') or '').split(','):
        if '=' in pair:
            k, v = pair.split('=', 1)
            pairs.append((k.strip(), v.strip()))
    # longest patterns first, so a full name is replaced before its parts
    return sorted(((k, v) for k, v in pairs if k), key=lambda kv: -len(kv[0]))


# set in main() from wiki.config.yaml -> agent.name (see agent_tokens)
AGENT = {'tools': '<TOOLS>', 'key': '<AGENT_KEY>'}


def agent_tokens(cfg):
    """The agent-specific spellings that the repo copy replaces with placeholders.

    These must be real substitution PAIRS, not regex-only rewrites: a regex that
    runs in both directions turns the installed copy's `hermes_tools` /
    `hermes:` back into `<TOOLS>` / `<AGENT_KEY>:`, so `--to-installed` would
    hand the agent a skill that names its own tool module as a placeholder.
    """
    agent = ((cfg.get('agent') or {}).get('name') or '').strip().lower()
    return {'tools': f'{agent}_tools' if agent else '<TOOLS>',
            'key': agent or '<AGENT_KEY>'}


def normalize(text, pairs, reverse=False):
    """Collapse the sanctioned differences between repo and installed copies."""
    for src, dst in pairs:
        if reverse:
            text = text.replace(dst, src)
        else:
            text = text.replace(src, dst)
    # the agent's tool module is named after the agent (e.g. <agent>_tools) while
    # the repo copy says <TOOLS> — normalize either to one placeholder
    if reverse:
        text = re.sub(r'\b<TOOLS>\b', AGENT['tools'], text)
        text = re.sub(r'^(\s*)<AGENT_KEY>\s*:', rf'\1{AGENT["key"]}:', text, flags=re.M)
    else:
        text = re.sub(r'\b[a-z][a-z0-9_]*_tools\b', '<TOOLS>', text)
        # the agent-named frontmatter metadata key (e.g. `  hermes:` vs `  AI agent:`)
        text = re.sub(r'^(\s*)(?:hermes|AI agent|ai agent)\s*:', r'\1<AGENT_KEY>:',
                      text, flags=re.M)
        # 'the AI agent' vs 'AI agent', and every spelling of the skill-store path
        text = re.sub(r'\bthe AI agent\b', 'AI agent', text)
        text = re.sub(r'<AGENT>|<AGENT>|<AGENT>', '<AGENT>', text)
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
    tooling = os.path.join(wiki, 'tooling')
    rw = os.path.join(installed, 'research-wiki')
    out = [('tooling/SKILL.md', os.path.join(tooling, 'SKILL.md'),
            os.path.join(rw, 'SKILL.md'))]
    for sub in ('scripts', 'cron', 'references'):
        if os.path.isdir(os.path.join(tooling, sub)):
            out.append((f'tooling/{sub}', os.path.join(tooling, sub), os.path.join(rw, sub)))
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


def file_hash(text):
    return hashlib.sha256(text.encode('utf-8')).hexdigest()[:16]


def classify(label, rev, fwd, baseline, drift, accepted, want_diff):
    """Accepted drift (recorded in the baseline) vs NEW drift."""
    entry = (baseline or {}).get(label)
    if entry and entry.get('repo') == file_hash(rev) and entry.get('installed') == file_hash(fwd):
        accepted.append(label)
        return
    n = sum(1 for l in difflib.unified_diff(rev.split('\n'), fwd.split('\n'),
                                            lineterm='', n=0)
            if l[:1] in '+-' and l[:3] not in ('+++', '---'))
    drift.append((label, n))
    if want_diff:
        print('\n'.join(difflib.unified_diff(
            rev.split('\n'), fwd.split('\n'),
            fromfile=f'{label} (repo)', tofile=f'{label} (installed)',
            lineterm='', n=2))[:20000])


def check(pairs, want_diff, skills, baseline=None):
    drift, missing, accepted = [], [], []
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
                classify(label, rev, fwd, baseline, drift, accepted, want_diff)
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
                classify(f'{label}/{rel}', rev, fwd, baseline, drift, accepted, want_diff)
    return drift, missing, accepted


def build_baseline(pairs, skills=None):
    """Snapshot every currently-differing file as ACCEPTED drift."""
    out = {}
    for label, repo, inst in pairs:
        if skills and not any(s in label for s in skills):
            continue
        if os.path.isfile(repo):
            files = [('', repo, inst)]
        else:
            files = [(rel, os.path.join(repo, rel), os.path.join(inst, rel))
                     for _full, rel in iter_files(repo)]
        for rel, rp, ip in files:
            if not os.path.exists(ip):
                continue
            rev = normalize(read(rp) or '', pairs_conf, reverse=False)
            fwd = normalize(read(ip) or '', pairs_conf, reverse=False)
            if rev == fwd:
                continue
            out[f'{label}{"/" + rel if rel else ""}'] = {'repo': file_hash(rev),
                                                         'installed': file_hash(fwd)}
    return out



def report_unique(groups, selected, pairs):
    """READ-ONLY: list content that exists on only one side of a mirror pair.

    This deliberately does NOT write anything. Line-diff union merging of these
    files was tried and produced corrupted output (normalization is applied for
    comparison, and writing normalized text back silently rewrote real tool names
    into placeholders). Reconciling a mirror is an editorial decision: use this
    report, then edit the file you decide is authoritative and copy the specific
    block across by hand.
    """
    total = 0
    for label, repo, inst in groups:
        if not any(s in label for s in selected):
            continue
        files = [('', repo, inst)] if os.path.isfile(repo) else \
            [(rel, os.path.join(repo, rel), os.path.join(inst, rel)) for _full, rel in iter_files(repo)]
        for rel, rp, ip in files:
            if not os.path.exists(ip):
                continue
            a = normalize(read(rp) or '', pairs).split('\n')
            b = normalize(read(ip) or '', pairs).split('\n')
            sm = difflib.SequenceMatcher(a=a, b=b, autojunk=False)
            only_repo = [(i1, i2) for tag, i1, i2, j1, j2 in sm.get_opcodes() if tag in ('delete', 'replace')]
            only_inst = [(j1, j2) for tag, i1, i2, j1, j2 in sm.get_opcodes() if tag in ('insert', 'replace')]
            if not only_repo and not only_inst:
                continue
            print(f"\n##### {label}{'/' + rel if rel else ''}")
            for i1, i2 in only_repo:
                for line in a[i1:i2][:8]:
                    if line.strip():
                        print(f"  repo-only     | {line[:150]}")
            for j1, j2 in only_inst:
                for line in b[j1:j2][:8]:
                    if line.strip():
                        print(f"  installed-only| {line[:150]}")
            total += 1
    print(f"\n{total} file(s) with one-sided content. Nothing was written.")
    print("Edit the authoritative side, then copy the specific block by hand and re-run --check.")
    return total


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--check', action='store_true', help='report material drift')
    ap.add_argument('--diff', metavar='SKILL', help='print the diff for matching skills')
    ap.add_argument('--to-repo', nargs='*', metavar='SKILL', help='installed -> repo (redacted)')
    ap.add_argument('--to-installed', nargs='*', metavar='SKILL', help='repo -> installed')
    ap.add_argument('--unique', nargs='*', metavar='SKILL',
                    help='READ-ONLY: list content that exists on only one side')
    ap.add_argument('--accept', action='store_true',
                    help='record the CURRENT differences as accepted (baseline)')
    args = ap.parse_args()

    cfg = load_config()
    wiki = path(cfg, 'root')
    skills_dir = os.path.expanduser((cfg.get('agent') or {}).get('skills_dir') or '')
    if not skills_dir or not os.path.isdir(skills_dir):
        sys.exit(f"agent.skills_dir is not set or missing in wiki.config.yaml "
                 f"({skills_dir!r}) — cannot locate the installed skills")

    global pairs_conf, AGENT
    pairs_conf = redaction_pairs(cfg, wiki)
    AGENT = agent_tokens(cfg)
    groups = pairs_of(cfg, wiki, skills_dir)
    selected = args.to_repo if args.to_repo is not None else args.to_installed
    to_repo = args.to_repo is not None

    if args.unique is not None:
        report_unique(groups, args.unique or [g[0] for g in groups], pairs_conf)
        return

    baseline_path = os.path.join(wiki, 'tooling', 'skills-sync-baseline.json')
    baseline = {}
    if os.path.exists(baseline_path):
        try:
            baseline = json.load(open(baseline_path, encoding='utf-8'))
        except ValueError:
            sys.exit(f"{baseline_path} is not valid JSON — delete it and re-run --accept")

    if args.accept:
        snap = build_baseline(groups)
        with open(baseline_path, 'w', encoding='utf-8') as fh:
            json.dump(snap, fh, indent=2, sort_keys=True)
            fh.write('\n')
        print(f"recorded {len(snap)} accepted difference(s) in "
              f"{os.path.relpath(baseline_path, wiki)}")
        return

    if args.to_repo is None and args.to_installed is None:
        drift, missing, accepted = check(groups, bool(args.diff),
                                         [args.diff] if args.diff else [], baseline)
        print(f"\nrepo mirrors: {len(groups)} skill group(s) vs {skills_dir}")
        for label in accepted:
            print(f"  accepted  {label}  (redaction/agent-name difference on record)")
        for label, n in drift:
            print(f"  NEW DRIFT {label}" + (f"  ({n} changed line(s))" if n >= 0 else "  (installed-only file)"))
        for label, why in missing:
            print(f"  MISS      {label}  — {why}")
        stale = sorted(set(baseline) - set(accepted))
        for label in stale:
            print(f"  obsolete  {label}  (now identical — drop it: re-run --accept)")
        if not drift and not missing:
            print(f"  OK — no NEW drift ({len(accepted)} accepted difference(s) on record).")
        print(f"\n{tool_hint(cfg)}")
        if drift or missing:
            sys.exit(1)
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
            # src is the installed copy when going repo-ward, so the placeholder
            # substitution runs forward (real name -> "the maintainer") in both
            # directions; `reverse` only applies when the destination is the
            # installed copy.
            text = normalize(text, pairs_conf, reverse=not to_repo)
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            with open(dst, 'w', encoding='utf-8') as fh:
                fh.write(text)
            written += 1
            print(f"  {'installed -> repo' if to_repo else 'repo -> installed'}  {label}{'/' + rel if rel else ''}")
    print(f"\n{written} file(s) written."
          + ("  Review the redaction before committing." if to_repo else
             "  Reviewer note: this overwrote the installed copy — installed-only rules are lost."))


def tool_hint(cfg):
    return ("Accepted differences (redaction wording, agent-name substitution) live in "
            "tooling/skills-sync-baseline.json: re-run with --accept after a deliberate "
            "change to either side. Anything else is real content drift and must be "
            "reconciled by hand — the installed skill is authoritative for behaviour, "
            "the repo copy must additionally drop personal names and absolute paths.")


if __name__ == '__main__':
    main()
