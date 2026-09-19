#!/usr/bin/env bash
# Commit only when the gates are green.
#
# Usage: commit-if-green.sh <message-file> <path> [<path> ...]
#
# Runs the US-English, list-formatting and facet gates over the whole repo, and the section audit over the paths
# being committed when they are article pages. Any failure aborts before `git commit` runs, which is the point:
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
for p in "$@"; do case "$p" in articles/*.md) articles+=("$PWD/$p");; esac; done
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

if [ $fail -ne 0 ]; then
  echo "not committed: fix the gates above first"
  exit 1
fi

git add "$@" || exit 1
git commit -q -F "$msg" || exit 1
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
