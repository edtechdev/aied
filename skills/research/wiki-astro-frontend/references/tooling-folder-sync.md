# `tooling/` folder sync (repo ↔ active research-wiki skill)

## What `tooling/` is

The repo's `tooling/` folder is the **distributable copy** of the wiki's maintenance pipeline — files that let a stranger clone the repo and run their own version of this research wiki. It mirrors the active `research-wiki` skill under `~/.ai-agent/skills/research-wiki/`:

| Repo `tooling/` | Active skill (`~/.ai-agent/skills/research-wiki/`) |
|---|---|
| `tooling/SKILL.md` | `SKILL.md` |
| `tooling/scripts/*.py` | `scripts/*.py` |
| `tooling/references/*` | `references/*` |
| `tooling/cron/*.md` | `cron/*.md` |
| `tooling/config.example.yaml`, `tooling/SCHEMA.md`, `tooling/concept-index.md`, `tooling/example/` | (no active counterpart — repo-only, must be kept current independently) |

The other user-owned wiki skills live under the repo's **`skills/`** directory (not `tooling/`), mirroring `~/.ai-agent/skills/`:
| Repo `skills/research/` | Active skill (`~/.ai-agent/skills/`) |
|---|---|
| `skills/research/wiki-epub-export/SKILL.md` | `research/wiki-epub-export/SKILL.md` |
| `skills/research/wiki-inline-links/` | `research/wiki-inline-links/` |

These drift independently. When the maintainer says "fix/update/synchronize anything in tooling that's obsolete so others can run their own wiki," the job is to reconcile them so the repo copy equals the current active skill (and both are internally accurate).

## COPY-DIRECTION PITFALL (the mistake that cost the most, 2026-08-29)

Do NOT assume the active `~/.ai-agent` skill is the newer/correct side and `cp` its files over the repo. **The repo `tooling/` copy was, in places, MORE current than the active skill:**
- `tooling/scripts/fetch-rss-feeds.py` had the **IJETHE/Springer RSS feed** (the fully-OA weekly journal `10.1186/s41239`) plus a `parse_springer` function; the active copy LACKED it.
- `tooling/scripts/generate-llms-files.py` had **FAQ support + sidebar concept-order** (emits sections Concepts→FAQs→Articles, sorts concepts to match `conceptIndex.ts`); the active copy lacked both.

Copying the active (older) scripts over the repo **silently lost the IJETHE feed and FAQ emission** — the bug was only caught when the regenerated `llms.txt` showed `0` FAQ lines (`grep -c '## FAQs' public/llms.txt` → 0).

**Correct recovery + direction:**
1. Restore the repo's newer version: `git checkout <prev-commit> -- tooling/scripts/<file>`. (The repo's committed version was the good one.)
2. Verify it's the good one (`grep -c ijethel`, `grep -c '## FAQs'` after regen).
3. Propagate the GOOD repo version INTO the active skill: `cp tooling/scripts/<file> ~/.ai-agent/skills/research-wiki/scripts/<file>`.
4. Regenerate output and verify (`python3 tooling/scripts/generate-llms-files.py` → `grep -c '## FAQs' public/llms.txt` ≥ 1).

**Rule of thumb:** diff first, read the arrow of each change, and treat the copy that reflects the most recent committed metadata/concept/cron work as authoritative. Never blind-copy one direction.

## Cron prompts are load-bearing for the metadata facets

The cron jobs (`daily-scan`, `weekly-rss`) run via the `research-wiki` skill, which loads its prompt files from `~/.ai-agent/skills/research-wiki/cron/`. Those prompt files contain the "Create article page" frontmatter template. **Until 2026-08-29 they only listed basic frontmatter** (`title, created, updated, type, tags, sources, confidence`) — so cron-created articles were silently missing the structured facet fields (`level`, `audience`, `discipline`, `category`, `research_method`) that the search PageFind facets depend on.

Fix (both prompts, both copies): in each "Create article page" step, add a line instructing the agent to populate the optional structured facets when determinable from the paper, with example values and a pointer to `tooling/SCHEMA.md` for the closed vocabularies, plus "tags must be real concept slugs."

Since the jobs load from the ACTIVE skill's `cron/`, editing only the repo copy has no runtime effect — sync to `~/.ai-agent/skills/research-wiki/cron/` too.

## Full verification checklist (end of any tooling-sync pass)

```bash
cd <WIKI>
ACT=~/.ai-agent/skills/research-wiki
diff -r tooling/scripts      $ACT/scripts      && echo "scripts: IDENTICAL"
diff -r tooling/cron         $ACT/cron         && echo "cron: IDENTICAL"
diff    tooling/SKILL.md     $ACT/SKILL.md     && echo "SKILL.md: IDENTICAL"
diff -r tooling/references   $ACT/references   && echo "references: IDENTICAL"
# user-owned wiki skills under skills/ mirror ~/.ai-agent/skills/
diff    skills/research/wiki-epub-export/SKILL.md  ~/.ai-agent/skills/research/wiki-epub-export/SKILL.md && echo "epub SKILL: IDENTICAL"
diff    skills/research/wiki-inline-links/SKILL.md ~/.ai-agent/skills/research/wiki-inline-links/SKILL.md && echo "inline-links SKILL: IDENTICAL"
diff    skills/research/wiki-inline-links/scripts/inline_link_scan.py ~/.ai-agent/skills/research/wiki-inline-links/scripts/inline_link_scan.py && echo "inline_link_scan: IDENTICAL"
# non-skill files: verify currency manually
head -30 tooling/config.example.yaml   # journal feed names incl. IJETHE
# example templates should use concept-slug placeholders + structured fields
```

Then `npm run build` (clean), commit, push.

## Non-skill `tooling/` files to keep current
- `tooling/config.example.yaml` — journal feed list; must include the IJETHE/Springer feed the script supports.
- `tooling/example/articles/example-paper.md` + `tooling/example/concepts/example-concept.md` — starter templates for a stranger. Update tags to real concept-slug placeholders (not `[getting-started, example]`) and add the structured metadata fields so the example shows the current schema.
- `tooling/concept-index.md`, `tooling/SCHEMA.md` — canonical concept list / schema; keep in sync when concepts are added/renamed/removed.
