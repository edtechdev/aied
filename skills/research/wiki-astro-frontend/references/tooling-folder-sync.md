# `tooling/` + `skills/` mirror sync (repo ↔ the agent's installed skills)

## What lives where

The repo ships a **distributable copy** of the wiki's maintenance pipeline so a
stranger can clone it and run their own research wiki.

| Repo | Installed counterpart (`agent.skills_dir` in `wiki.config.yaml`) |
|---|---|
| `tooling/SKILL.md` | `research-wiki/SKILL.md` |
| `tooling/scripts/*.py` | `research-wiki/scripts/*.py` |
| `tooling/references/*` | `research-wiki/references/*` |
| `tooling/cron/*.md` | `research-wiki/cron/*.md` |
| `skills/research/wiki-*/` | `research/wiki-*/` |
| `tooling/SCHEMA.md`, `tooling/example/`, `site.config.json`, `wiki.config.yaml`, `concepts.registry.yaml` | no install counterpart — repo-only |

`tooling/concept-index.md` is now a **generated view** of `concepts.registry.yaml`
(`tooling/scripts/gen-concept-artifacts.py`), not a hand-maintained manifest. Do
not edit it directly, and do not maintain a second alias list anywhere — the
inline-link scanner reads the registry (its embedded table is a standalone
fallback only).

## Use the sync script, not hand diffs

```bash
python3 tooling/scripts/sync-skills.py --check             # report real drift
python3 tooling/scripts/sync-skills.py --diff wiki-inline-links
python3 tooling/scripts/sync-skills.py --to-repo <skill>   # installed -> repo (redacted)
python3 tooling/scripts/sync-skills.py --to-installed <skill>
```

`--check` normalizes the **sanctioned** differences before comparing, so it only
reports material drift:

- absolute repo path ↔ `<WIKI>`, installed skill store ↔ `<AGENT>`, home dir ↔ `<HOME>`
- the agent's product name ↔ "AI agent"
- personal identifiers ↔ "the maintainer" (read at run time from
  `site.config.json` `editor.name`, or supplied via `WIKI_REDACT`; never stored
  in the script or the repo)

The old workflow (hand-rolling `diff -r` against the installed skill and grepping
for `/home/`) is superseded by this — it missed redaction-only differences and
buried the real ones.

## COPY-DIRECTION PITFALL (the mistake that cost the most, 2026-08-29)

Do NOT assume the installed skill is the newer/correct side and copy its files
over the repo. In 2026-08 the repo's `tooling/` copy was in places MORE current
than the installed skill: `fetch-rss-feeds.py` carried the IJETHE/Springer feed
and `parse_springer`; `generate-llms-files.py` had FAQ support and sidebar
concept-order. Copying the installed (older) scripts over the repo silently lost
the IJETHE feed and all FAQ emission — caught only when regenerated `llms.txt`
showed `0` FAQ lines.

And the reverse is equally true: the installed skills carry rule blocks the repo
mirrors lack (the standing gates, the preview-link rule, the raw-text refresh
rule). **Rule: diff first, read the arrow of each change, reconcile by hand.**
When one side is clearly newer, propagate that side (with redaction for
repo-bound copies) and verify the effect, e.g. `python3
tooling/scripts/generate-llms-files.py` then `grep -c '^## FAQs' public/llms.txt`.

## Cron prompts are load-bearing

The scheduled jobs load their prompts from the installed `research-wiki/cron/`,
so **editing only the repo copy has no runtime effect** — sync to the installed
copy too. Two rules to keep in mind when touching them:

- Article frontmatter facets (`level`, `audience`, `discipline`, `category`,
  `research_method`) are described in the prompts; if a prompt omits them,
  cron-created pages silently lose the search facets.
- Scan parameters, journal feeds and the relevance filter belong in
  `wiki.config.yaml`, not in the prompt text. If a prompt restates them, move
  them to the config and point at `scan.sources` / `journal_scan.feeds`.

## End-of-pass checklist

```bash
cd <WIKI>
python3 tooling/scripts/sync-skills.py --check      # only real drift should remain
python3 tooling/scripts/wiki_config.py --check      # config ↔ repo consistency
python3 tooling/scripts/check_concepts.py           # registry ↔ concepts/ ↔ views
python3 tooling/scripts/run-gates.py                # the HARD GATES from the config
npm run build                                       # clean build
```

Then commit and push (push only with explicit approval).

## Repo-only files to keep current

- `wiki.config.yaml` — paths, gates, scan sources, journal feeds, `agent:` block.
  A new journal feed needs `id`, `name`, `url`, `parser`, `open_access`,
  `max_age_days`; a new source needs `type` and its parameters.
- `concepts.registry.yaml` — every concept page must appear with a title and at
  least one alias, and (for the site) in a sidebar section. `check_concepts.py`
  enforces all of that.
- `tooling/example/articles/example-paper.md` + `tooling/example/concepts/example-concept.md`
  — starter templates; keep tags as real concept-slug placeholders and include the
  structured metadata fields so the example matches the current schema.
- `tooling/SCHEMA.md` — page conventions and the closed frontmatter vocabularies.
