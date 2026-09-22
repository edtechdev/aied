---
name: ai-content-provenance
description: "Use when disclosing how AI produced a content corpus."
version: 1.0.0
author: curator
license: MIT
category: research
---

# Recording and Disclosing AI Involvement in Generated Content

## When to Use

A corpus of pages drafted or rewritten by AI (summaries, syntheses, docs, an ebook built from them)
needs provenance metadata, or someone asks how the AI use should be disclosed: which model, what
role, how much of the source was actually read, what a human checked. Also use when a publishing
platform asks whether the content is AI-generated, or when a second human author joins and
attribution has to scale past one name.

Companion skills: `corpus-frontmatter-batch-edits` (mechanics of writing new fields across many
pages), `structured-metadata-audit` (coverage/gap auditing), `public-repo-pii-hygiene` (keeping names
out of tracked files), `epub-generation` (the offline artifact that also has to carry the statement).

## Split the record by GRANULARITY before writing anything

Three surfaces, three different jobs. Deciding this first prevents the common mistake of making one
field do all of them.

- **Per change → git commit trailers.** Immutable, survive page rewrites, and read back with
  `git log`. This is the record of truth for "which model did what, when".
- **Per page → frontmatter fields.** A pointer to the current revision only. A page-level model field
  is stale the moment another model revises the page, and a page rewritten by a delegated subagent on
  a differently pinned model is exactly the case it gets wrong.
- **Reader-facing → a standing statement** (repo policy file plus the notice page of any exported
  artifact). Standards-conformant disclosure is satisfied by a declaration; it is not the same
  artifact as the machine-readable fields and should not be generated from them alone.

## Trailer mechanics (write and read)

- **Write through a wrapper** (`tooling/ai-commit.sh`) rather than remembering flags each time:
  repeatable `-m`, `--role`, `--model` (default `$AI_MODEL`, then the first model in the project
  config), `--agent`, `--reviewed-by`, `--no-ai` (role `none`), `--dry-run`, and `--` passthrough to
  `git commit`. Validate every role against the role vocabulary and every reviewer id against the
  config's contributor ids, exiting non-zero on a typo; read the defaults from that config so the
  standing statement and the trailers cannot disagree. Trailers are emitted as
  `git commit --trailer "AI-Model: <id>" --trailer "AI-Role: drafting, revision"`; repeat a trailer
  when several models or agents touched the change, and use git's own `Co-authored-by:` for several
  humans. The wrapper never pushes.
- **Read trailer values by tag, never positionally.** With
  `--format='...%(trailers:key=AI-Model,valueonly)...'` an ABSENT trailer's field disappears from the
  output entirely instead of rendering empty, and a multi-value trailer arrives with embedded
  newlines. Positional parsing, or splitting the log on `\n`, therefore reads shifted records or drops
  the commits you meant to flag — a checker reporting "0 commits missing trailers" on a history where
  most are missing. Wrap each value in sentinel markers
  (`M=[%(trailers:key=AI-Model,valueonly)]`), separate records with `%x1e`, then extract by tag with a
  regex and join multi-line values with `', '`.
- **Verify the wrapper worked** on its first commit before trusting the rest:
  `git log -1 --format='%(trailers)'`. A missing trailer block means the message was written without
  them (options placed after `--`, or an `--amend` that dropped them).

## Fields that earn their place

- `contributors` — human ids accountable for the page. The one field that has to exist before a
  second person can be attributed at all.
- `reviewed_by` — human ids who actually read and checked the page. Absent means the record asserts
  nothing; never set as a default to make coverage look better.
- `ai_assist` — ordered list, newest last: `{model, role, date, agent}`, `role` from a fixed
  vocabulary. A list, not a scalar, because several models and several passes are normal.
- `source_depth` (`full text` / `abstract only` / `metadata only`) — for a summarizing corpus this is
  more consequential than the model name, and it otherwise exists only in the gitignored source
  directory.
- `verified` — which checks ran (citation resolved, figures matched to the source, links answered).

Skip anything you cannot populate honestly. A field nobody can fill correctly is worse than an absent
one, because absence reads as "not recorded" while a default value reads as a claim.

## Name people by id; keep names in one config file

Write `contributors: [editor]` in the pages and resolve the id to a name from the project's single
config surface (the one file already allowed to hold the published attribution). Reasons, in order:
page files are tracked in a public repo; adding a second author then costs one config entry instead of
an edit across every page; and the gate can reject an id that resolves to nothing.

**AI systems are never contributors or authors.** Authorship requires accountability a model cannot
carry (the COPE/ICMJE position), so keep the field human-only and make the gate fail when an id
resolves to a non-human entry. This is also what keeps the schema multi-author-ready rather than
multi-agent.

## Honesty rules (the part a reviewer actually checks)

- **No backfill.** A corpus produced by several models over months cannot be attributed
  retroactively; those pages get nothing, and the policy file states the date the record begins.
  Inferring a model for an old page is fabrication with a schema.
- **Never claim human review of the whole corpus.** `reviewed_by` is set per page, after someone
  reads it, or not at all.
- **Say what is NOT verified** as specifically as what is. A disclosure that lists only the checks
  that ran misleads by omission.
- **Record material contributions, not mechanical passes.** Drafted or rewritten prose is a claim;
  wiring a back-link, refreshing a count or fixing a spelling is not, and recording those turns the
  field into noise that hides the real entries.
- **Let a model name outside the vocabulary fail the gate** (with an explicit `unknown` escape
  hatch). Otherwise a page can name a model the standing statement never mentions, and the two
  disclosures drift apart.

## Gates to ship with the fields

1. **Per-page validity and presence**, required only for pages created on or after the record's start
   date. Report coverage (how many pages carry a record, how many assert a review) rather than only
   pass/fail — coverage is the honest metric and it is the number the user asks for next.
2. **An advisory trailer check** on recent commits: report commits missing trailers, exit 0 unless a
   `--strict` flag is passed. Pre-convention commits cannot be retrofitted, so a hard gate there is
   permanently red and trains the reader to ignore it.
3. Wire both into the project's gate list, so the next writer is blocked rather than corrected.

## What the standing statement must cover

Which systems and versions, where and when the model changes, what the model drafts, what a human
then does, what the scripts verify, where citations come from, why no source is quoted without a
check — plus any generated visual asset, and whether it came from an image model or was drawn by code.
Platform disclosure questions (KDP and similar) ask specifically whether content is AI-generated vs
AI-assisted; drafted text counts as generated, so answer from the statement, not from the tool name.

## Pitfalls

- **A page-level model field is a pointer, never the record.** It goes stale on the next rewrite;
  git trailers are the durable half. Ship both or the disclosure degrades silently.
- **Unquoted YAML dates break a string-typed field.** `date: 2026-09-22` is parsed into a Date object,
  and the schema error is reported at `<file>:0:0` — which reads like a whole-file failure. Quote the
  date in the pages, and make the schema accept both forms so the next author cannot hit it.
- **Assert the fields stay invisible where you intend them to be invisible.** If the metadata is
  meant for the markdown only, grep the built HTML and the exported ebook for the field keys;
  frontmatter stripping is per-exporter, and a leaked field is a disclosure nobody chose. This cuts
  both ways: if the ebook notice is supposed to carry the statement, verify the statement is actually
  inside the archive.
- **Prove the artifact you rebuilt came from a successful build.** The notice text usually lives in a
  build script, so a failed site build followed by a successful artifact build ships the OLD notice.
  A piped command's exit status is the last command's (`build 2>&1 | tail && next` always continues);
  check the build result in its own step before generating downstream artifacts.
- **Do not let the disclosure block land in the same commit as content edits nobody can review.** The
  schema change, the fields, the gates and the statement belong together; page prose does not.
