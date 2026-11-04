---
name: public-repo-readme-and-commits
description: "Use when editing a public repo README or its commits."
category: research
version: 1.0.0
license: MIT
metadata:
  tags: [readme, documentation, commit-hygiene, push-approval, public-repo]
  related_skills: [preview-and-push-gate, public-repo-pii-hygiene, research-wiki]
---

# Public repo README and commit hygiene

Root documentation of a public repo is read by strangers and by agents. This skill covers editing it
and the commit that carries it, for a repo the user owns and publishes.

## Standing rules (apply to every instance)

1. **Never push without approval asked for in the current message.** Approval from an earlier turn
does not carry forward: a message saying "edit the README" is not push authorization. Commit locally,
report the hash and the diff summary, and ask. Batch all pending local commits into the one push the
user approves, so CI deploys once instead of per commit.
2. **Commit messages describe the artifact, not the session.** No wall-clock timings, no page or
corpus counts that belong to one machine or one moment, no absolute paths, no localhost or private
addresses, no "measured X instead of Y", no narration of past states ("was 63 items, now 200"), no
product or incident history. If a figure cannot stay true in a year, leave it out.
3. **Authorship belongs to the user.** Author and committer are the repo's configured identity; agent
involvement goes only in `AI-Model:` / `AI-Role:` / `AI-Agent:` trailers. Never override identity
with a `-c user.name=...` flag on a commit.
4. **When asked for a single commit, deliver exactly one.** Amend or squash rather than appending a
second commit to the same logical change; re-check `git rev-list --count <base>..HEAD` before saying
done, and confirm a message-only rewrite left the tree intact (`git diff --quiet <old> <new>` silent).
5. **A rewrite of an already-pushed commit needs its own approval**, because it requires
`git push --force-with-lease`. Say plainly that it is a force-push and what it rewrites.

## Editing the README

Work from what a stranger needs, in this order: what the thing is, how to use it, how it is built,
how to run a copy. Every collection or section the project publishes gets one bullet that links its
index page, so a reader reaches it without knowing a URL pattern.

Cut, on sight:

- **Machine-specific or measured claims.** How long a gate takes, how many pages the corpus has, how
  many minutes a preview is stale, byte counts of a local build. Replace a timing with where the time
  goes; replace a count with nothing, or derive it at review time if the reader truly needs it.
- **Redundancy.** If the download links appear in the header, a later section explaining those same
  files, their internal chapter order and why a path 404s is duplication — one pointer sentence, not
  a section.
- **History and rationale.** What a query used to recover, which filter was removed and why, what the
  site replaced. Document current behavior; keep the archaeology in the config comment or in the
  commit that made the change.
- **Implementation trivia in reader-facing prose.** 404-by-design notes, artifact-size arguments,
  deploy plumbing.

Prefer the project's own vocabulary: call the page family what it is (a **newsletter**, not "news",
not "a second feed") even when the directory or route is named otherwise, and when you do name the
directory, name it accurately (`newsletter pages (news/)`).

For a list of translations or editions, generate it from the config (`site.config.json` →
`i18n.locales`, then check which artifact files actually exist) instead of typing from memory; link
the human page first and the artifact second, and say which locales lack an edition rather than
implying they all have one. Spot-check a handful of the generated URLs with
`curl -sL -o /dev/null -w '%{http_code}'` before committing.

Verify before committing: the repo's US-English docs gate (`check-us-english.py --include-docs`), a
markdown link parse (no target containing a space), and a scan for absolute local paths, `localhost`,
preview ports and private IPs.

Detailed checklist, commands and a commit-message shape: `references/readme-review-checklist.md`.

## Related
- `preview-and-push-gate` for the review gate before publishing site changes.
- `public-repo-pii-hygiene` for the personal-information sweep every push needs.
