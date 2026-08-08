# Journal.md Regeneration — Em-Dash Safe Snippet

`regenerate-journal-html.py` parses `journal.md` and requires the literal
em-dash `—` (U+2014) as the separator between `[[slug]]` and the source path in
each entry line. If you regenerate `journal.md` with inline Python and use a plain
ASCII hyphen (`-`), the parser matches **zero rows** and `journal.html` gets an
empty `<tbody>` — no error, no warning, but the `OK: ... (N entries)` stdout still
prints a plausible count (read from the `Total entries:` header, not from parsed
rows). This is the #1 silent failure in the daily-scan pipeline.

**Fix:** build the separator from the codepoint, never a literal hyphen.

## Verified regenerator (copy, set TODAY, run with workdir=/home/doug)

```python
import os, re, yaml
from collections import defaultdict

WIKI = "/home/doug/wiki"
CONCEPTS = os.path.join(WIKI, "concepts")
TODAY = "2026-07-15"
EM = "\u2014"  # em dash — DO NOT replace with a hyphen

def as_list(v):
    if v is None: return []
    if isinstance(v, str):
        s = v.strip()
        if s in ('', 'null', '[]'): return []
        return [x.strip().strip("'\"") for x in s.strip('[]').split(',') if x.strip()]
    if isinstance(v, list):
        return [str(x) for x in v]
    return [str(v)]

def parse_fm(content):
    m = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not m: return {}
    block = m.group(1)
    try:
        d = yaml.safe_load(block)
        if isinstance(d, dict): return d
    except Exception:
        pass
    d = {}
    for line in block.split("\n"):
        if ':' in line:
            k, _, v = line.partition(":")
            d[k.strip()] = v.strip()
    return d

icon_map = {"high": "\u25cf", "medium": "\u25d0", "low": "\u25cb"}
journ = []
for fn in os.listdir(CONCEPTS):
    if not fn.endswith(".md"):
        continue
    slug = fn[:-3]
    with open(os.path.join(CONCEPTS, fn), encoding="utf-8") as f:
        c = f.read()
    fm = parse_fm(c)
    if fm.get("type") != "concept":
        continue
    srcs = as_list(fm.get("sources"))
    if not srcs:
        continue
    created = str(fm.get("created", ""))
    title = str(fm.get("title", slug))
    tags = as_list(fm.get("tags"))
    conf = str(fm.get("confidence", "medium")).lower()
    icon = icon_map.get(conf, "\u25d0")
    journ.append((created, slug, srcs[0], title, tags, icon))

groups = defaultdict(list)
for e in journ:
    groups[e[0]].append(e)
dates = sorted(groups.keys(), reverse=True)
jlines = ["# Journal", "", "", "Last updated: %s | Total entries: %d" % (TODAY, len(journ)), ""]
for d in dates:
    jlines.append("## %s" % d)
    for e in sorted(groups[d], key=lambda x: x[1].lower()):
        created, slug, source, title, tags, icon = e
        jlines.append("- %s [[%s]] %s %s" % (icon, slug, EM, source))
        jlines.append("  **%s**" % title)
        jlines.append("  Tags: [%s]" % ", ".join(tags))
    jlines.append("")
with open(os.path.join(WIKI, "journal.md"), "w", encoding="utf-8") as f:
    f.write("\n".join(jlines))
print("journal.md regenerated:", len(journ), "entries")
```

## Verify (do NOT trust the script's stdout count)

```python
import os, re
jh = open("/home/doug/wiki/static-site/journal.html").read()
m = re.search(r'<tbody>(.*?)</tbody>', jh, re.DOTALL)
print("tbody populated:", len(m.group(1).strip()) > 0)
for s in ["my-new-slug"]:
    print(s, "in journal.html:", (s + ".html") in jh)
```
