#!/usr/bin/env python3
"""Detect and fix concept pages corrupted by read_file line-number prefixes.

When the standalone `read_file` tool's annotated output (LINE_NUM|CONTENT) is
written back to disk via `write_file` or `patch`, the prefixes become part of the
file. YAML frontmatter parsing then fails silently (file doesn't start with ---).

Usage:
    python3 scripts/detect-readfile-corruption.py --concepts-dir /home/doug/wiki/concepts [--fix] [--dry-run]
"""

import os
import re
import sys
import argparse


def is_corrupted(path):
    """Check if file starts with read_file-style line number prefixes."""
    with open(path, 'rb') as f:
        raw = f.read(50)
    # Pattern: spaces + digits + |---
    return raw.startswith(b'     ') and b'|---' in raw[:20]


def fix_file(path, dry_run=False):
    """Strip read_file line-number prefixes from file content."""
    with open(path) as f:
        text = f.read()

    lines = text.split('\n')
    cleaned = []
    changed = False

    for line in lines:
        m = re.match(r'\s*\d+\|(.*)', line)
        if m:
            cleaned.append(m.group(1))
            changed = True
        else:
            cleaned.append(line)

    if not changed:
        return False

    new_content = '\n'.join(cleaned)
    if not dry_run:
        with open(path, 'w') as f:
            f.write(new_content)

    return True


def main():
    parser = argparse.ArgumentParser(description='Detect/fix read_file corruption in wiki pages')
    parser.add_argument('--concepts-dir', required=True, help='Path to concepts/ directory')
    parser.add_argument('--fix', action='store_true', help='Apply fixes (default: detect only)')
    parser.add_argument('--dry-run', action='store_true', help='Show what would change without writing')
    args = parser.parse_args()

    concepts_dir = args.concepts_dir
    if not os.path.isdir(concepts_dir):
        print(f"ERROR: {concepts_dir} is not a directory", file=sys.stderr)
        sys.exit(1)

    corrupted = []
    fixed = 0

    for f in sorted(os.listdir(concepts_dir)):
        if not f.endswith('.md'):
            continue
        path = os.path.join(concepts_dir, f)
        if is_corrupted(path):
            corrupted.append(f)
            if args.fix:
                size_before = os.path.getsize(path)
                ok = fix_file(path, dry_run=args.dry_run)
                if ok:
                    size_after = os.path.getsize(path)
                    print(f"  {'[DRY RUN] ' if args.dry_run else ''}Fixed: {f} ({size_before} -> {size_after} bytes)")
                    fixed += 1
                else:
                    print(f"  No changes needed: {f}")
            else:
                print(f"  CORRUPTED: {f}")

    print(f"\nCorrupted: {len(corrupted)}, Fixed: {fixed}")
    if corrupted and not args.fix:
        print("Run with --fix to repair.")

    return 0 if not corrupted else 1


if __name__ == '__main__':
    sys.exit(main())
