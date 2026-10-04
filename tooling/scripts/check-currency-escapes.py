#!/usr/bin/env python3
"""Fail when a currency amount is written so the markdown parser eats it.

Body prose uses `$` for currency and the site renders `$...$` as KaTeX math, so
two amounts in one paragraph pair up into an equation. The damage is quiet and
reader-visible: "$2000 and $15,000" rendered as math typeset the words "2000 and"
as algebraic symbols, and page text lost the amounts entirely. The corpus
convention is to escape the sign (`\\$538`, `US\\$94.8`), which this gate enforces.

Legitimate math delimited by `$` is unaffected: the check only looks for a dollar
sign immediately followed by a digit, which is how a currency amount is written.
"""
import os
import re
import sys

CONTENT = "content"
PATTERN = re.compile(r"(?<!\\)\$(?![$\s])(?=[0-9])")


def pages(root):
    for base, _dirs, files in os.walk(root):
        for name in sorted(files):
            if name.endswith(".md"):
                yield os.path.join(base, name)


def main():
    wiki = sys.argv[1] if len(sys.argv) > 1 else "."
    root = os.path.join(wiki, CONTENT)
    if not os.path.isdir(root):
        print("SKIP - no %s directory under %s" % (CONTENT, wiki))
        return 0

    defects = []
    scanned = 0
    for path in pages(root):
        scanned += 1
        text = open(path, encoding="utf-8").read()
        for i, para in enumerate(re.split(r"\n\s*\n", text), 1):
            found = PATTERN.findall(para)
            if not found:
                continue
            snippet = re.sub(r"\s+", " ", para)[:90]
            defects.append(
                "%s (paragraph %d): %d unescaped currency marker(s) - write \\$ instead: %s"
                % (os.path.relpath(path, wiki), i, len(found), snippet)
            )

    if defects:
        print("FAIL - %d paragraph(s) in %d page(s) would render as math:" % (len(defects), scanned))
        for d in defects:
            print("  - %s" % d)
        print("\nEscape the sign (\\$538) so the amount stays prose.")
        return 1
    print("OK - no unescaped currency markers in %d file(s) scanned." % scanned)
    return 0


if __name__ == "__main__":
    sys.exit(main())
