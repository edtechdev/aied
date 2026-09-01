# AGENTS.md structure audit (2026-09-01)

When the user asks whether the repo's `AGENTS.md` needs updating after site/process changes, treat it as a real audit — it drifts from the canonical skills. Steps taken this session:

## How to audit
1. Read `AGENTS.md` (top of repo).
2. Compare the page-structure templates (article / concept / FAQ) against a sample of REAL pages. Grep the actual structure:
   ```
   grep -h "^## " concepts/<sample>.md | sort | uniq -c
   grep -h "^## " articles/<sample>.md | sort | uniq -c
   ```
   Real pages are the ground truth — the skill and AGENTS.md may both be stale relative to them.
3. Verify the editorial rules (inline-link HARD GATE, list-formatting gate, narrative integration, full quoted timestamps) match the canonical `research-wiki` skill wording.

## What was stale (2026-09-01)
- Concept template said "exactly 4 sections" and omitted `## Questions to Consider` and `## Introduction` — but EVERY concept page has both. Canonical order: synthesis blockquote → `## Questions to Consider` (2-7 open pre-reading questions; one contiguous bulleted list, no blank lines) → `## Introduction` → narrative body → `## Connected Concepts` → `## Connected Articles`.
- Enrichment rule was the weak "integrate into body, not just Connected Articles list" — upgraded to the **NARRATIVE INTEGRATION, never append-only** rule (weave into the thematically-appropriate existing section; remove any orphaned heading; full rewrite only for genuinely major contributions e.g. a systematic review that reorganizes the area).
- The article + FAQ templates were accurate and needed no change.

## Verification
Confirmed against `cognitive-diagnosis.md` and `ai-literacy.md`: `## Questions to Consider` + `## Introduction` present, before `## Connected Concepts`.

Commit message used: `AGENTS.md: document required Questions to Consider + Introduction concept sections and narrative-integration rule`.
