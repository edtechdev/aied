# Repository skills

These skills mirror the ones installed locally under `~/.hermes/skills/research/`.
The two copies differ **only** in path literals:

- the **repo copy** (this directory) uses the placeholder `<WIKI>` for the repository root
- the **installed copy** substitutes the real absolute local path

Syncing must follow that direction: when copying **installed → repo**, replace the
absolute path with `<WIKI>`; when copying **repo → installed**, substitute the real
path back in. Copying a repo file straight over the installed one leaves the
installed skill with a literal `<WIKI>` and silently breaks it.

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
- Site-wide metadata (name, editor, URL, base path, licence) comes from
  `site.config.json` via `src/config/siteConfig.ts` in the Astro code and by
  loading that JSON in the Python tooling. Never restate it in a script.
- `~/.hermes/...` is acceptable for the installed skill location: it names the
  tool's own directory, not the person.
- Attribute a standing preference to "the maintainer" (or state it plainly with no
  attribution) rather than naming the individual.
