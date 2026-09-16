---
name: public-repo-pii-hygiene
description: "Use when committing to a public repo; scrub personal data."
category: research
---

# Public Repo PII Hygiene

Use when committing to a public GitHub repository, when mirroring agent skills or tooling into
one, or when auditing such a repo for personal information. It applies to every file
`git ls-files` returns **and to commit messages**, not just to documents: a clean working tree
is not a clean commit.

## The surfaces people miss

1. **Absolute local paths** (`/home/<user>/project/...`, `/Users/<user>/...`) inside scripts,
   skill files, config, and prose. Also machine hostnames and cron/job IDs.
2. **Personal names and handles** in docstrings, comments, and prose — including build scripts
   whose string ends up in published artifact metadata, and phrases like "<name> asked for X".
3. **Commit messages.** A message naming the maintainer, their username, or a home path leaks
   exactly what a leaked file would.
4. **Git history**, if the user wants it addressed. History rewriting means a force-push over
   published commits: report what history contains, then wait for explicit approval. Users
   sometimes decline deliberately ("skip cleaning the git history") — a clean tip plus an
   explicit, documented history decision is a legitimate end state.

## Scan before every commit

```bash
git ls-files -z | xargs -0 grep -nIE "<user>|<Name>|<username>|@<domain>|home/<user>" \
  | grep -vE "^public/|\.(pdf|epub)$"
```

Expect one sanctioned match when the project's config file is allowed to hold the published
attribution: the file carrying the project's identity (author/editor, contact URL) is normally
the ONE exception, together with build outputs that embed that credit. Say which exception
applies instead of silently excluding it.

## Fix patterns

- **Prose**: attribute a standing preference to "the maintainer", or state the preference with
  no attribution at all. Drop credit parentheses like "(<name> 2026-09-08)" and provenance like
  "(<name> request)".
- **Paths in scripts**: derive the root from the script's own location
  (`os.path.dirname(os.path.dirname(os.path.abspath(__file__)))`) or accept it as an argument.
- **Paths in prose/skills**: use a placeholder token for the project root that the reader
  substitutes, never an absolute path.
- **Attribution the build output needs**: move the string into the project's config file and
  load it at build time. The generated PDF/EPUB keeps the credit; the source stays clean.
- **Commit message**: describe the change, never the requester.

## Mirroring agent skills into a repo

When skills are both installed locally and mirrored into the repo, the two copies differ only in
path literals, and the direction of the sync matters:

- **Repo copy** uses the placeholder (`<PROJECT>`-style token) for the project root.
- **Installed copy** substitutes the real absolute path.
- **installed → repo**: strip the absolute path, insert the placeholder.
- **repo → installed**: substitute the real path back in. Copying a repo file straight over the
  installed copy leaves the installed skill holding a literal placeholder token and silently
  breaks it, with no error at copy time.

Document the convention in a short `skills/README.md` in the repo so the next session does not
re-derive it, and re-scan the repo after any bulk sync.

## Consequence to expect

Grep-based scanners are blunt: paper text, cited authors, and third-party names legitimately
match name patterns. Restrict the scan to tracked files, justify each match instead of "fixing"
it, and never strip a cited researcher's name from a source excerpt or citation.
