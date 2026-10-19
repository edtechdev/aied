#!/usr/bin/env bash
# Commit with AI-use trailers.
#
# Page frontmatter says which model produced the *current* text of a page. That
# record goes stale the moment another model revises the page, so the per-change
# record lives in git: this wrapper stamps every commit with the model and role
# behind it, using git trailers. Trailers are immutable, they survive page
# rewrites, and `git log --format='%(trailers)'` reads them back.
#
# Usage:
#   tooling/ai-commit.sh -m "Ingest two articles" --role drafting --role revision
#   tooling/ai-commit.sh -m "Fix a typo" --role none        # human-only edit
#   AI_MODEL=other/model tooling/ai-commit.sh -m "..." --role revision
#
# Options:
#   -m, --message TEXT   commit message (required; may be repeated for paragraphs)
#   -F, --message-file F read the message from a file (used by commit-if-green.sh)
#   --role ROLE          what the AI did in this change (repeatable; default
#                        drafting). Use --no-ai for a pure human edit.
#   --model ID           model that did the work (repeatable). Falls back to
#                        $AI_MODEL, then to the ai_assist.model recorded on the
#                        pages being committed; if none of those decide it, the
#                        script refuses rather than record a model that did not
#                        do the work. Must be listed in site.config.json.
#   --agent NAME         harness or tool name (default: site.config.json harness)
#   --reviewed-by ID     human contributor id who reviewed this change
#   --no-ai              shorthand for --role none (pure human edit)
#   --dry-run            print the git command instead of running it
#
# Anything after `--` is passed to `git commit` unchanged (e.g. -a, --amend,
# --allow-empty). The script never pushes.
set -euo pipefail

WIKI="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CONFIG="$WIKI/site.config.json"

MESSAGES=()
MESSAGE_FILE=""
ROLES=()
MODELS=()
AGENT=""
REVIEWED_BY=()
DRY_RUN=0
EXTRA=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    -m|--message) MESSAGES+=("$2"); shift 2 ;;
    -F|--message-file) MESSAGE_FILE="$2"; shift 2 ;;
    --role) ROLES+=("$2"); shift 2 ;;
    --model) MODELS+=("$2"); shift 2 ;;
    --agent) AGENT="$2"; shift 2 ;;
    --reviewed-by) REVIEWED_BY+=("$2"); shift 2 ;;
    --no-ai) ROLES+=("none"); shift ;;
    --dry-run) DRY_RUN=1; shift ;;
    --) shift; EXTRA+=("$@"); break ;;
    *) echo "unknown option: $1" >&2; exit 2 ;;
  esac
done

if [[ ${#MESSAGES[@]} -eq 0 && -z "$MESSAGE_FILE" ]]; then
  echo "error: a -m/--message or -F/--message-file is required" >&2
  exit 2
fi
if [[ -n "$MESSAGE_FILE" && ! -f "$MESSAGE_FILE" ]]; then
  echo "error: no such message file: $MESSAGE_FILE" >&2
  exit 2
fi

if [[ ! -f "$CONFIG" ]]; then
  echo "error: site.config.json not found at $CONFIG" >&2
  exit 2
fi

# Read the disclosure block. python3 is already required by the rest of tooling/.
# Tab-separated: the role list contains a space ("link classification"), so
# whitespace-splitting the fields would truncate it.
IFS=$'\t' read -r DEFAULT_AGENT ROLE_LIST CONTRIBUTOR_IDS MODEL_LIST <<<"$(python3 - "$CONFIG" <<'PY'
import json, sys
cfg = json.load(open(sys.argv[1], encoding='utf-8'))
ai = cfg.get('aiDisclosure', {})
models = [m['id'] for m in ai.get('models', []) if m.get('id')]
roles = ['drafting', 'revision', 'link classification', 'summarization', 'translation', 'none']
humans = [c['id'] for c in cfg.get('contributors', []) if c.get('kind') == 'human']
print('\t'.join([(ai.get('harness') or 'unknown').replace(' ', '-'),
                ','.join(roles),
                ','.join(humans),
                ','.join(models)]))
PY
)"

# Which model did the work is NOT derivable from the config. aiDisclosure.models
# lists the models in use, newest first, and it says nothing about any one commit;
# defaulting to its first entry stamps a commit with whatever happens to be newest
# at the time rather than with the model that actually ran it. That default
# mis-attributed 21 commits (every one from the 2026-10-16 switch until it was
# removed) so it is gone. Resolve the model from --model, then $AI_MODEL, then the
# pages being committed -- each carries its own ai_assist.model recording who
# produced its text -- and refuse rather than guess when none of those decide it.
if [[ ${#MODELS[@]} -eq 0 && -n "${AI_MODEL:-}" ]]; then
  MODELS=("$AI_MODEL")
fi
if [[ ${#MODELS[@]} -eq 0 ]]; then
  while IFS= read -r inferred; do
    [[ -n "$inferred" ]] && MODELS+=("$inferred")
  done < <(python3 - "$WIKI" <<'PY'
import os, re, subprocess, sys
wiki = sys.argv[1]
staged = subprocess.run(
    ['git', 'diff', '--cached', '--name-only', '--diff-filter=ACM'],
    cwd=wiki, capture_output=True, text=True).stdout.split()
seen = set()
for rel in staged:
    if not re.match(r'content/[a-z]{2}/(articles|concepts|faqs|resources)/.+\.md$', rel):
        continue
    path = os.path.join(wiki, rel)
    if not os.path.exists(path):
        continue
    text = open(path, encoding='utf-8', errors='replace').read()
    if not text.startswith('---'):
        continue
    frontmatter = text.split('---')[1]
    for model in re.findall(r'^\s*-?\s*model:\s*["\']?([^"\'\s]+)', frontmatter, re.M):
        seen.add(model.strip())
# One consensus value is evidence. Two different models in one commit is ambiguous
# (a page drafted by one model and translated by another, say), so print nothing
# and let the caller state what it meant.
if len(seen) == 1:
    print(seen.pop())
PY
)
fi
if [[ ${#MODELS[@]} -eq 0 ]]; then
  {
    echo "error: cannot tell which AI model did this work, and refusing to guess."
    echo "       site.config.json aiDisclosure.models lists the models in use (newest"
    echo "       first); its order is not a record of this change."
    echo
    echo "       Pass --model <id> (repeatable) or set AI_MODEL=<id>."
    echo "       Known models: $MODEL_LIST"
  } >&2
  exit 2
fi
[[ -z "$AGENT" ]] && AGENT="${AI_AGENT_NAME:-$DEFAULT_AGENT}"

# Validate roles, models and contributor ids against site.config.json, so a typo
# cannot silently create a disclosure value nothing else understands.
for m in "${MODELS[@]}"; do
  case ",$MODEL_LIST," in
    *",$m,"*) ;;
    *) echo "error: model '$m' is not listed in site.config.json aiDisclosure.models ($MODEL_LIST)" >&2; exit 2 ;;
  esac
done
for role in "${ROLES[@]:-}"; do
  [[ -z "$role" ]] && continue
  case ",$ROLE_LIST," in
    *",$role,"*) ;;
    *) echo "error: role '$role' is not one of: $ROLE_LIST" >&2; exit 2 ;;
  esac
done
for who in "${REVIEWED_BY[@]:-}"; do
  [[ -z "$who" ]] && continue
  case ",$CONTRIBUTOR_IDS," in
    *",$who,"*) ;;
    *) echo "error: unknown contributor id '$who' (see site.config.json contributors)" >&2; exit 2 ;;
  esac
done

ARGS=()
for msg in "${MESSAGES[@]}"; do ARGS+=(-m "$msg"); done
[[ -n "$MESSAGE_FILE" ]] && ARGS+=(-F "$MESSAGE_FILE")
for m in "${MODELS[@]}"; do ARGS+=(--trailer "AI-Model: $m"); done
if [[ ${#ROLES[@]} -gt 0 ]]; then
  ARGS+=(--trailer "AI-Role: $(IFS=', '; echo "${ROLES[*]}")")
else
  ARGS+=(--trailer "AI-Role: drafting")   # default when --role is not given
fi
[[ -n "$AGENT" ]] && ARGS+=(--trailer "AI-Agent: $AGENT")
for who in "${REVIEWED_BY[@]:-}"; do
  [[ -n "$who" ]] && ARGS+=(--trailer "Human-Review: $who")
done
if [[ ${#EXTRA[@]} -gt 0 ]]; then ARGS+=("${EXTRA[@]}"); fi

if [[ "$DRY_RUN" == "1" ]]; then
  printf 'git commit'; printf ' %q' "${ARGS[@]}"; printf '\n'
  exit 0
fi

cd "$WIKI"
git commit "${ARGS[@]}"
