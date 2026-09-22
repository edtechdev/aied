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
#   --role ROLE          what the AI did in this change (repeatable). One of the
#                        roles listed in site.config.json aiDisclosure.roles.
#   --model ID           model that did the work (repeatable; defaults to $AI_MODEL
#                        or the first model in site.config.json)
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
ROLES=()
MODELS=()
AGENT=""
REVIEWED_BY=()
DRY_RUN=0
EXTRA=()

while [[ $# -gt 0 ]]; do
  case "$1" in
    -m|--message) MESSAGES+=("$2"); shift 2 ;;
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

if [[ ${#MESSAGES[@]} -eq 0 ]]; then
  echo "error: at least one -m/--message is required" >&2
  exit 2
fi

if [[ ! -f "$CONFIG" ]]; then
  echo "error: site.config.json not found at $CONFIG" >&2
  exit 2
fi

# Read the disclosure block. python3 is already required by the rest of tooling/.
read -r DEFAULT_MODEL DEFAULT_AGENT ROLE_LIST CONTRIBUTOR_IDS <<<"$(python3 - "$CONFIG" <<'PY'
import json, sys
cfg = json.load(open(sys.argv[1], encoding='utf-8'))
ai = cfg.get('aiDisclosure', {})
models = [m['id'] for m in ai.get('models', []) if m.get('id')]
roles = ['drafting', 'revision', 'link classification', 'summarization', 'translation', 'none']
humans = [c['id'] for c in cfg.get('contributors', []) if c.get('kind') == 'human']
print(models[0] if models else 'unknown',
      (ai.get('harness') or 'unknown').replace(' ', '-'),
      ','.join(roles),
      ','.join(humans))
PY
)"

if [[ ${#MODELS[@]} -eq 0 ]]; then
  MODELS=("${AI_MODEL:-$DEFAULT_MODEL}")
fi
[[ -z "$AGENT" ]] && AGENT="${AI_AGENT_NAME:-$DEFAULT_AGENT}"

# Validate roles and contributor ids against site.config.json, so a typo cannot
# silently create a disclosure value nothing else understands.
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
for m in "${MODELS[@]}"; do ARGS+=(--trailer "AI-Model: $m"); done
if [[ ${#ROLES[@]} -gt 0 ]]; then
  ARGS+=(--trailer "AI-Role: $(IFS=', '; echo "${ROLES[*]}")")
else
  ARGS+=(--trailer "AI-Role: drafted")
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
