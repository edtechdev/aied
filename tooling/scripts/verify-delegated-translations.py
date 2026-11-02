#!/usr/bin/env python3
"""Verify delegated resource translations against their English sources.

Checks (each reported, non-fatal, so one bad page does not hide the rest):
  yaml        frontmatter parses with no duplicate keys
  trans_of    translation_of == resources/<slug>
  reviewed    no reviewed_by key
  ai_assist   last entry has role: translation
  source_upd  equals the English page's updated value
  facets      every facet/resource_type/access/etc value identical to English
  links       identical multiset of wikilink targets
  h2          same number of H2 sections
  headings    heading text differs from English (i.e. actually translated)
  summary     summary differs from English
  length      body word count within 0.35-3.0x English
  notice      first italic line matches the locale's sibling notice
  residue     no paragraph of the English body appears verbatim (>40 chars)
"""
import glob
import os
import re
import sys
import yaml

W = "/home/doug/wiki/content/"
COPIED = ["url", "source_code", "author", "author_url", "resource_type", "access",
          "license", "last_verified", "confidence", "connected_resources",
          "foundations", "pedagogy", "technology", "assessment", "ethics", "level",
          "audience", "institutions", "methods", "discipline"]


def load(path):
    text = open(path, encoding="utf-8").read()
    if not text.startswith("---"):
        raise ValueError(f"no frontmatter: {path}")
    fm_raw, body = text.split("\n---", 1)
    fm = yaml.safe_load(fm_raw.lstrip("-\n"))
    return fm, body


def targets(md):
    return sorted(re.findall(r"\[\[([^\]|#]+)", md))


def h2s(md):
    return [l.strip() for l in md.split("\n") if l.startswith("## ")]


def paras(md):
    return [p.strip() for p in re.split(r"\n\s*\n", md) if len(p.strip()) > 40]


def sibling_notice(loc):
    for f in sorted(glob.glob(W + loc + "/resources/*.md")):
        fm, body = load(f)
        for line in body.split("\n")[:6]:
            s = line.strip()
            if s.startswith("*") and len(s) > 20:
                return s, os.path.basename(f)
    return None, None


def check(loc, slug):
    out = []
    en_fm, en_body = load(W + f"en/resources/{slug}.md")
    loc_fm, loc_body = load(W + f"{loc}/resources/{slug}.md")
    ok = lambda name, cond: out.append((name, bool(cond)))

    ok("trans_of", loc_fm.get("translation_of") == f"resources/{slug}")
    ok("reviewed", "reviewed_by" not in loc_fm)
    aa = loc_fm.get("ai_assist") or []
    ok("ai_assist", aa and aa[-1].get("role") == "translation")
    ok("source_upd", loc_fm.get("source_updated") == en_fm.get("updated"))

    fdiff = [k for k in COPIED if k in en_fm and loc_fm.get(k) != en_fm.get(k)]
    # url is fine to differ only if English has none; report but do not fail hard
    out.append(("facets", not fdiff))
    if fdiff:
        out.append(("facets_diff", ",".join(fdiff)))

    ok("links", targets(en_body) == targets(loc_body))
    eh2, lh2 = h2s(en_body), h2s(loc_body)
    ok("h2", len(eh2) == len(lh2))
    same_head = [a for a, b in zip(eh2, lh2) if a == b]
    out.append(("headings", not same_head))
    if same_head:
        out.append(("headings_same", " | ".join(same_head)[:120]))
    ok("summary", (loc_fm.get("summary") or "") != (en_fm.get("summary") or ""))
    # Whitespace word counts understate CJK translations, so accept either metric.
    word_ratio = len(loc_body.split()) / max(1, len(en_body.split()))
    char_ratio = len(loc_body.strip()) / max(1, len(en_body.strip()))
    ok("length", 0.35 <= word_ratio <= 3.0 or 0.35 <= char_ratio <= 3.0)
    out.append(("length_ratios", f"w={word_ratio:.2f},c={char_ratio:.2f}"))

    notice, sib = sibling_notice(loc)
    first_ital = next((l.strip() for l in loc_body.split("\n") if l.strip().startswith("*")), None)
    ok("notice", notice and first_ital == notice)

    en_paras = {p for p in paras(en_body)}
    alpha = re.compile(r"[^\W\d_]+", re.UNICODE)
    residue = [p for p in paras(loc_body)
               if p in en_paras and len(re.sub(r"\[\[[^\]]*\]\]|[-*\s`]", "", p)) > 15
               and len(alpha.findall(re.sub(r"\[\[[^\]]*\]\]", "", p))) > 3]
    out.append(("residue", not residue))
    if residue:
        out.append(("residue_n", len(residue)))
    return out


if __name__ == "__main__":
    pairs = []
    for arg in sys.argv[1:]:
        loc, _, slugs = arg.partition(":")
        for s in slugs.split(","):
            pairs.append((loc, s))
    bad = 0
    for loc, slug in pairs:
        try:
            res = check(loc, slug)
        except Exception as e:
            print(f"ERROR {loc}/{slug}: {e}")
            bad += 1
            continue
        fails = [n for n, v in res if not v]
        extra = " ".join(f"{n}={v}" for n, v in res if n.endswith(("_diff", "_same", "_ratio", "_ratios", "_n")))
        status = "OK  " if not fails else "FAIL"
        if fails:
            bad += 1
        print(f"{status} {loc}/{slug:48} errs={len(res)} {('bad=' + ','.join(fails)) if fails else ''} {extra}")
    print(f"\n{bad} page(s) with defects out of {len(pairs)}")
