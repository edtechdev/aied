# Repository skills

These skills mirror the ones the agent actually runs, installed under the
`agent.skills_dir` named in `wiki.config.yaml` (currently `~/.hermes/skills`).
The two copies differ **only** in the sanctioned ways:

- the **repo copy** (this directory) uses the placeholder `<WIKI>` for the repository root and `<SKILLS_DIR>` for the installed skill store
- the **installed copy** substitutes the real absolute paths
- the **repo copy** names no person and no agent product ("the maintainer", "the AI agent")

Everything else — every rule, example, command and pitfall — must be identical.
`python3 tooling/scripts/sync-skills.py --check` normalizes those sanctioned
differences and reports only real content drift; `--diff <skill>` prints it and
`--to-repo <skill>` refreshes the mirror with the redaction applied. The installed
copy is authoritative for behavior; the repo copy is the public-safe mirror, so
reconcile by hand rather than overwriting wholesale in either direction.

Syncing must follow that direction: when copying **installed → repo**, replace the
absolute path with `<WIKI>`; when copying **repo → installed**, substitute the real
path back in. Copying a repo file straight over the installed one leaves the
installed skill with a literal `<WIKI>` and silently breaks it.

The write modes select by **group label, not file path**. `--check` reports drift at
file level (`tooling/scripts/<file>.py`), but `--to-installed` matches the group it
belongs to — `--to-installed tooling/scripts`, not the filename — so a filename
argument writes nothing and reports `0 file(s) written`. The labels are
`tooling/SKILL.md`, `tooling/scripts`, `tooling/cron`, `tooling/references` and
`skills/research/<name>`; the wiki-management skill's installed name is **not** a
label for the `tooling/` mirror, so `--to-repo research-wiki` refreshes nothing there
and `--to-repo "tooling/SKILL.md"` is the form that works. Inspect one file with
`--diff <name>` before writing, and re-run `--check` after.

Which side wins depends on the file, so compare before copying rather than assuming.
The repo's `tooling/scripts/` are the working copies the pipeline actually runs, so a
fix made there (a pacer, a normalizer, a protected title) has to travel **out** to the
installed mirror with `--to-installed <group>`; a skill's `SKILL.md` travels the other
way, since the installed copy is authoritative for behaviour. A group can hold drift in
both directions at once: reconcile the scripts first, then sync the mirror, so the
group-wide copy cannot drag a stale script over a newer one.

## Hard rule: no personally identifiable information

Nothing committed to this repository may contain a personal name, username, email
address, or absolute local path — with two deliberate exceptions:

1. `site.config.json` — the site's identity and editor credit live here, driven by
   config rather than hardcoded in source.
2. build outputs (`public/aied.pdf`, `public/aied.epub`) — these carry the editor
   credit as published metadata.

This applies to commit messages as well as file contents.

## How to write paths in a skill or script

- Write **`<WIKI>`** for the repository root. Never `/home/<user>/...`.
- Scripts should derive the root themselves rather than being told where it is:

  ```python
  WIKI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
  ```

  or accept it as an argument (`python3 skills/research/<skill>/scripts/<tool>.py <WIKI> --all`).
- Site-wide metadata (name, editor, URL, base path, license) comes from
  `site.config.json` via `src/config/siteConfig.ts` in the Astro code and by
  loading that JSON in the Python tooling. Never restate it in a script.
- Pipeline settings (paths, gates, scan sources, journal feeds, the agent's name
  and tool mapping) come from `wiki.config.yaml` — load it with
  `tooling/scripts/wiki_config.py` instead of hardcoding a path, journal or tool
  name. The concept vocabulary comes from `concepts.registry.yaml`; never
  hand-maintain a second alias list in a script (the inline-link scanner reads
  the registry, and its embedded table is only a standalone fallback).
- `~/.hermes/...` is acceptable for the installed skill location: it names the
  tool's own directory, not the person.
- Attribute a standing preference to "the maintainer" (or state it plainly with no
  attribution) rather than naming the individual.
