#!/usr/bin/env python3
"""Loader + validator for wiki.config.yaml (the pipeline/agent configuration).

The site's identity stays in site.config.json (the Astro build reads it); this
file covers everything the pipeline needs: content paths, build commands, the
concept registry location, the scan sources and journal feeds, and the
agent-specific tool mapping.

Usage:
    python3 tooling/scripts/wiki_config.py                 # summary
    python3 tooling/scripts/wiki_config.py --check          # validate, non-zero on error
    python3 tooling/scripts/wiki_config.py --get scan.sources
    python3 tooling/scripts/wiki_config.py --cap run_python # print the agent tool

Import it from another script:

    from wiki_config import load_config, capability, path
    cfg = load_config()
    WIKI = path(cfg, 'root')
    tools = capability(cfg, 'run_python')
"""
import os
import sys

try:
    import yaml
except ImportError:
    sys.exit("PyYAML is required: pip install pyyaml")

# Same directory: the content-path resolver (reads site.config.json's `content`).
import content_paths

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CONFIG_PATH = os.path.join(WIKI, 'wiki.config.yaml')
# Per-machine overrides (host/port and similar). Gitignored: a clone that has one
# is configured for that machine, a clone that has none still works.
LOCAL_PATH = os.path.join(WIKI, 'wiki.config.local.yaml')


def _deep_merge(base, override):
    for key, value in override.items():
        if isinstance(value, dict) and isinstance(base.get(key), dict):
            _deep_merge(base[key], value)
        else:
            base[key] = value
    return base


def load_config(path=CONFIG_PATH):
    """Load wiki.config.yaml (+ wiki.config.local.yaml if present).

    Adds the resolved repo root under paths.root.
    """
    with open(path, encoding='utf-8') as fh:
        cfg = yaml.safe_load(fh) or {}
    if os.path.exists(LOCAL_PATH):
        with open(LOCAL_PATH, encoding='utf-8') as fh:
            cfg = _deep_merge(cfg, yaml.safe_load(fh) or {})
        cfg['local_override'] = os.path.basename(LOCAL_PATH)
    cfg.setdefault('paths', {})['root'] = WIKI
    return cfg


def get(cfg, dotted, default=None):
    """Fetch a nested value: get(cfg, 'journal_scan.feeds')."""
    node = cfg
    for part in dotted.split('.'):
        if not isinstance(node, dict) or part not in node:
            return default
        node = node[part]
    return node


def path(cfg, key):
    """Absolute path for entries in the `paths:` block.

    'root' is the repo root. The four collections (articles, concepts, faqs,
    resources) are folder names INSIDE a locale folder, so they resolve through
    content_paths to <repo>/<content root>/<default locale>/<name> - see
    site.config.json's `content` block. Everything else is repo-root relative.
    """
    if key == 'root':
        return cfg['paths']['root']
    if key in content_paths.COLLECTIONS:
        return str(content_paths.collection(key))
    value = cfg['paths'].get(key)
    return os.path.join(cfg['paths']['root'], value) if value not in (None, '.') else cfg['paths']['root']


def collection_dir(cfg, name, locale=None):
    """Absolute path to one collection in one locale: <content>/<locale>/<name>."""
    return str(content_paths.collection(name, locale or content_paths.DEFAULT_DIR))


def locales(cfg):
    """Locale codes in site order (default locale first), for translated scans."""
    return list(content_paths.LOCALES)


def translated_locales(cfg):
    """Every locale except the default one - the folders holding translations."""
    return list(content_paths.TRANSLATED)


def capability(cfg, name, default=None):
    """Resolve an abstract capability to the configured agent's tool name."""
    return get(cfg, f'agent.capabilities.{name}', default or name)


def feeds(cfg):
    """Journal feeds as {name: {...}}, ready for fetch-rss-feeds.py."""
    out = {}
    for feed in get(cfg, 'journal_scan.feeds', []) or []:
        out[feed['name']] = {k: v for k, v in feed.items() if k != 'name'}
    return out


def validate(cfg):
    errors, warnings = [], []
    for key in ('articles', 'concepts', 'faqs', 'registry'):
        p = path(cfg, key)
        if not os.path.exists(p):
            errors.append(f"paths.{key} does not exist: {p}")
    p = path(cfg, 'raw_papers')
    if not os.path.isdir(p):
        warnings.append(f"paths.raw_papers missing ({p}) — create it before ingesting")
    for key in ('epub', 'site', 'llms'):
        if not get(cfg, f'build.{key}'):
            errors.append(f"build.{key} is not set")
    if not get(cfg, 'agent.name'):
        warnings.append("agent.name is empty — docs and sync scripts cannot name the agent")
    skills = get(cfg, 'agent.skills_dir')
    if skills and not os.path.isdir(os.path.expanduser(skills)):
        warnings.append(f"agent.skills_dir does not exist: {skills}")
    for cap in ('run_python', 'read_file', 'write_file', 'shell', 'fetch_url',
                'search_web', 'delegate', 'schedule'):
        if not capability(cfg, cap, None):
            errors.append(f"agent.capabilities.{cap} is not set")
    if not get(cfg, 'scan.sources'):
        errors.append("scan.sources is empty — nothing would be scanned")
    for src in get(cfg, 'scan.sources', []) or []:
        if src.get('type') == 'arxiv_api' and not src.get('categories'):
            errors.append(f"scan source {src.get('name')!r} has no categories")
    if not get(cfg, 'journal_scan.feeds'):
        warnings.append("journal_scan.feeds is empty — the weekly scan would find nothing")
    mode = get(cfg, 'preview.mode', 'dev')
    if mode not in ('dev', 'preview'):
        errors.append(f"preview.mode must be 'dev' or 'preview', not {mode!r}")
    port = get(cfg, 'preview.port', 4321)
    if not isinstance(port, int) or not 1 <= port <= 65535:
        errors.append(f"preview.port must be a port number, not {port!r}")
    if not get(cfg, 'preview.host'):
        errors.append("preview.host is not set")
    if cfg.get('local_override'):
        warnings.append(f"per-machine overrides applied from {cfg['local_override']} "
                        f"(host={get(cfg, 'preview.host')}, port={get(cfg, 'preview.port')})")
    for name in feeds(cfg):
        if not feeds(cfg)[name].get('url'):
            errors.append(f"journal feed {name!r} has no url")
    return errors, warnings


def main():
    cfg = load_config()
    argv = sys.argv[1:]
    if '--check' in argv:
        errors, warnings = validate(cfg)
        for w in warnings:
            print(f"WARN  {w}")
        for e in errors:
            print(f"ERROR {e}")
        if errors:
            sys.exit(f"\n{len(errors)} configuration error(s) in {CONFIG_PATH}")
        print(f"OK — {os.path.relpath(CONFIG_PATH, WIKI)} is consistent with the repo.")
        return
    if '--get' in argv:
        import json
        print(json.dumps(get(cfg, argv[argv.index('--get') + 1]), indent=2))
        return
    if '--cap' in argv:
        print(capability(cfg, argv[argv.index('--cap') + 1]))
        return
    site = os.path.join(WIKI, str(get(cfg, 'site.metadata', 'site.config.json')))
    print(f"config:      {os.path.relpath(CONFIG_PATH, WIKI)}")
    print(f"site metadata: {os.path.relpath(site, WIKI)}")
    print(f"agent:       {get(cfg, 'agent.name')} (skills: {get(cfg, 'agent.skills_dir')})")
    print(f"scan:        {get(cfg, 'scan.schedule')} — "
          f"{len(get(cfg, 'scan.sources', []) or [])} source(s)")
    print(f"journals:    {get(cfg, 'journal_scan.schedule')} — "
          f"{len(get(cfg, 'journal_scan.feeds', []) or [])} feed(s)")
    print(f"gates:       {len(get(cfg, 'build.gates', []) or [])} check(s), "
          f"build: {get(cfg, 'build.site')}")
    print(f"preview:     {get(cfg, 'preview.mode')} on "
          f"{get(cfg, 'preview.host')}:{get(cfg, 'preview.port')}"
          + (f"  (from {cfg['local_override']})" if cfg.get('local_override') else ""))


if __name__ == '__main__':
    main()
