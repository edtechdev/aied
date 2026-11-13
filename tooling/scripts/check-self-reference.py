#!/usr/bin/env python3
"""Fail when a page talks about the wiki instead of its subject.

The reader of a concept, FAQ, resource or article page wants to know what the
research says. Sentences about "this page", "the corpus" or "the knowledge base"
carry no information for that reader, and they accumulate silently because no
existing gate reads for them.

    python3 tooling/scripts/check-self-reference.py --changed   # pages touched vs HEAD
    python3 tooling/scripts/check-self-reference.py            # concepts, FAQs, resources
    python3 tooling/scripts/check-self-reference.py --all      # plus every article page
    python3 tooling/scripts/check-self-reference.py FILE ...   # named files

Articles are opt-in because the collection predates the rule: sweeping the concept,
FAQ and resource pages first keeps the gate green while the article backlog is
worked through, instead of blocking every article edit.

A "text corpus" or "training corpus" belonging to a study is a technical term, not
self-reference, so those are allowed. Everything else is a defect.
"""
import os
import re
import subprocess
import sys

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LOCALE = "en"

PATTERN = re.compile(
    r"\b("
    r"this page|the page|this article|this entry|this section|"
    r"this essay|this wiki|the wiki|this site|"
    r"this knowledge base|the knowledge base|this corpus|the corpus"
    r")\b",
    re.I,
)
# A resource page's "site" is the product's own website, which is the subject, not
# the wiki. Only the self-pointing forms are flagged there.
RESOURCE_PATTERN = re.compile(
    r"\b("
    r"this page|this article|this entry|this section|this essay|"
    r"this wiki|the wiki|this site|this knowledge base|the knowledge base|"
    r"this corpus|the corpus"
    r")\b",
    re.I,
)
# A study's own corpus is a legitimate object of study.
ALLOW = re.compile(r"\b(text|training|data|language|document|research|parallel)\s+corpus\b", re.I)

COLLECTIONS = ("concepts", "faqs", "resources")

# Pages whose subject IS another wiki or website. "The wiki" and "the site" there
# name the thing being described, not the corpus this page belongs to.
SUBJECT_FILES = {"learning-design-wiki.md", "eduprompts.md", "fpds-apps-and-resources.md"}


def changed_files():
    out = subprocess.run(
        ["git", "-C", WIKI, "status", "--porcelain"], capture_output=True, text=True
    ).stdout
    files = []
    for line in out.splitlines():
        if not line.strip():
            continue
        path = line[3:].strip()
        if path.startswith(f"content/{LOCALE}/") and path.endswith(".md"):
            files.append(os.path.join(WIKI, path))
    return files


def all_files():
    files = []
    for c in COLLECTIONS:
        d = os.path.join(WIKI, "content", LOCALE, c)
        if os.path.isdir(d):
            files.extend(
                os.path.join(d, f) for f in sorted(os.listdir(d)) if f.endswith(".md")
            )
    return files


def scan(path):
    if os.path.basename(path) in SUBJECT_FILES:
        return []
    text = open(path, encoding="utf-8").read()
    body = text.split("---", 2)[-1]
    body = re.sub(r"\[\[[^\]]*\]\]", "LINK", body)
    pattern = RESOURCE_PATTERN if os.sep + "resources" + os.sep in path else PATTERN
    hits = []
    for s in re.split(r"(?<=[.!?])\s+", body):
        if pattern.search(s) and not ALLOW.search(s):
            hits.append(re.sub(r"\s+", " ", s).strip())
    return hits


def main(argv):
    if argv == ["--changed"]:
        files = [
            f for f in changed_files()
            if any(os.sep + c + os.sep in f for c in COLLECTIONS)
        ]
    elif argv and argv[0] == "--all":
        files = all_files() + sorted(
            os.path.join(WIKI, "content", LOCALE, "articles", f)
            for f in os.listdir(os.path.join(WIKI, "content", LOCALE, "articles"))
            if f.endswith(".md")
        )
    elif argv:
        files = argv
    else:
        files = all_files()

    total = 0
    for f in files:
        if not os.path.exists(f):
            continue
        hits = scan(f)
        if hits:
            total += len(hits)
            print(f"\n{os.path.relpath(f, WIKI)}")
            for s in hits:
                print(f"  - {s[:220]}")

    if total:
        print(
            f"\nFAIL - {total} self-referential sentence(s). State the claim about the "
            f"subject; do not describe the page, the site or the collection."
        )
        return 1
    print(f"OK - {len(files)} page(s): no self-referential prose.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
