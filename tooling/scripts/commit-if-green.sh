#!/usr/bin/env bash
# Commit only when the gates are green.
#
# PERMISSION-GATED: this script RUNS the gate suite, so it may only be used after
# the maintainer has explicitly approved a gate run. Propose the run (name the gates
# and what they check) and wait; a plain `git commit` is the default otherwise. Same
# class as the EPUB/PDF/llms rebuilds, which also wait for a request.
#
# Usage: commit-if-green.sh <message-file> <path> [<path> ...]
#
# Runs the US-English, list-formatting and facet gates over the whole repo, and the section audit plus the
# number-grounding check over the article pages being committed. Any failure aborts before `git commit` runs, which is the point:
# committing past a red gate leaves the defect in history and needs an amend to remove.
set -uo pipefail
cd "$(dirname "$0")/../.." || exit 1

msg="$1"; shift
[ -f "$msg" ] || { echo "no message file: $msg"; exit 1; }
[ "$#" -gt 0 ] || { echo "nothing to commit"; exit 1; }

fail=0
run_gate() {
  local name="$1"; shift
  local out
  out="$("$@" 2>&1)"
  local code=$?
  if [ $code -ne 0 ]; then
    printf 'GATE FAILED: %s\n%s\n' "$name" "$(printf '%s' "$out" | head -6)"
    fail=1
  else
    printf 'gate ok: %s -> %s\n' "$name" "$(printf '%s' "$out" | tail -1)"
  fi
}

run_gate "us-english" python3 tooling/scripts/check-us-english.py
run_gate "list-formatting" python3 skills/research/wiki-inline-links/scripts/check_list_formatting.py . --all
run_gate "facets" python3 tooling/scripts/validate-facets.py

articles=()
for p in "$@"; do case "$p" in content/*/articles/*.md|articles/*.md) articles+=("$PWD/$p");; esac; done
if [ "${#articles[@]}" -gt 0 ]; then
  printf '%s\n' "${articles[@]}" > /tmp/commit-if-green-slugs.txt
  out="$(python3 tooling/scripts/audit-article-sections.py --slugs-file /tmp/commit-if-green-slugs.txt 2>&1)"
  if printf '%s' "$out" | grep -q '0 with hard defects'; then
    printf 'gate ok: section-audit -> %s\n' "$(printf '%s' "$out" | grep 'page(s) pass')"
  else
    printf 'GATE FAILED: section-audit\n%s\n' "$(printf '%s' "$out" | grep -E 'FAIL|^    - ' | head -12)"
    fail=1
  fi
fi

if [ "${#articles[@]}" -gt 0 ]; then
  slugs=()
  for p in "${articles[@]}"; do slugs+=("$(basename "${p%.md}")"); done
  run_gate "number-grounding" python3 tooling/scripts/verify-number-grounding.py "${slugs[@]}"
fi

if [ $fail -ne 0 ]; then
  echo "not committed: fix the gates above first"
  exit 1
fi

git add "$@" || exit 1

# Stamp the AI-use trailers rather than calling `git commit` directly: the model
# and role behind a change belong in the commit because a frontmatter field only
# records whoever produced the current text. Override with AI_ROLE (comma-separated),
# AI_MODEL and AI_REVIEWED_BY (a contributor id from site.config.json).
role_flags=()
IFS=',' read -r -a _roles <<< "${AI_ROLE:-drafting}"
for _r in "${_roles[@]}"; do
  _r="$(printf '%s' "$_r" | xargs)"
  [ -n "$_r" ] && role_flags+=(--role "$_r")
done
model_flags=()
[ -n "${AI_MODEL:-}" ] && model_flags=(--model "$AI_MODEL")
review_flags=()
[ -n "${AI_REVIEWED_BY:-}" ] && review_flags=(--reviewed-by "$AI_REVIEWED_BY")

bash tooling/ai-commit.sh --message-file "$msg" "${role_flags[@]}" \
  ${model_flags[@]+"${model_flags[@]}"} ${review_flags[@]+"${review_flags[@]}"} || exit 1
git log --oneline -1
# Personal-detail check. The patterns live in a gitignored file so that the guard itself never puts those
# strings into a tracked file: ~/.hermes/pii-patterns.txt, one extended-regex per line.
pat="${PII_PATTERNS:-$HOME/.hermes/pii-patterns.txt}"
if [ -f "$pat" ]; then
  if git show HEAD --format= | grep -qiE -f "$pat"; then
    echo "PERSONAL DETAILS DETECTED in the commit - amend before pushing"
    exit 2
  fi
  echo "no personal details in the commit"
fi
echo "committed and PII-clean"
