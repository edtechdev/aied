#!/usr/bin/env python3
"""Run the HARD GATE checks declared in wiki.config.yaml (build.gates).

One command answers "did I break the wiki?" without an agent having to remember
three script paths:

    python3 tooling/scripts/run-gates.py            # run every gate
    python3 tooling/scripts/run-gates.py --list      # show them
    python3 tooling/scripts/run-gates.py --only 1    # run just gate 1 (1-based)

Exit code is non-zero if any gate fails, so it can wire straight into CI or a
pre-commit hook. A green `npm run build` is NOT a substitute for these checks.
"""
import os
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wiki_config import load_config, path  # noqa: E402

def main():
    cfg = load_config()
    gates = cfg.get('build', {}).get('gates') or []
    argv = sys.argv[1:]
    if '--list' in argv or not gates:
        for i, g in enumerate(gates, 1):
            print(f"{i}. {g}")
        return 0
    only = int(argv[argv.index('--only') + 1]) if '--only' in argv else None
    wiki = path(cfg, 'root')
    failures = []
    ran = 0
    for i, gate in enumerate(gates, 1):
        if only and i != only:
            continue
        ran += 1
        print(f"\n=== gate {i}/{len(gates)}: {gate}")
        result = subprocess.run(gate, shell=True, cwd=wiki)
        if result.returncode != 0:
            failures.append((i, gate, result.returncode))
    print()
    if failures:
        for i, gate, code in failures:
            print(f"FAIL (exit {code})  gate {i}: {gate}")
        return 1
    print(f"OK — all {ran} gate(s) passed.")
    return 0


if __name__ == '__main__':
    sys.exit(main())
