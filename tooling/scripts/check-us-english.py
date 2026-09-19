#!/usr/bin/env python3
"""Flag British spellings in wiki body prose (house style is US English).

Why: article/concept prose in this knowledge base drifted into British forms
(behaviour, programme, modelling, judgement, organisation, centre, artefact,
-ise verbs) because nothing stated a house style and each page copied the
spelling of the pages around it. The audience is US-facing, so US English is the
rule for body prose, section headings, and Connected-list blurbs.

Scope and exclusions
--------------------
* Scans `articles/`, `concepts/`, `faqs/` body prose only.
* Skips frontmatter (facet values and `sources:` are slugs/paths, never prose).
* Skips everything from `## Citation` onward - a citation reproduces the
  published record verbatim and must never be respelled.
* Skips quoted spans ("...") and italic title/journal spans, which may be
  verbatim titles or participant quotes.
* `--include-docs` also scans AGENTS.md, README.md, tooling/**.md, skills/**/*.md
  and the cron prompts, which carry the same house style and are read by the
  agent that writes the pages.

Usage
    python3 tooling/scripts/check-us-english.py            # report, exit 1 if hits
    python3 tooling/scripts/check-us-english.py --quiet    # counts only
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]

# British form -> US form. Only unambiguous prose words: words that are also
# correct US English (analysis, emphasis, promise, enterprise, supervised, rise,
# wise, poise, advertise, exercise, revise, compromise, premise, surprise) are
# deliberately absent.
WORDS = {
    "programme": "program", "programmes": "programs",
    "behaviour": "behavior", "behaviours": "behaviors", "behavioural": "behavioral",
    "behaviourally": "behaviorally", "behaviourism": "behaviorism", "behaviourist": "behaviorist",
    "modelling": "modeling", "modelled": "modeled", "modeller": "modeler",
    "analyse": "analyze", "analysed": "analyzed", "analysing": "analyzing", "analyser": "analyzer",
    "judgement": "judgment", "judgements": "judgments",
    "artefact": "artifact", "artefacts": "artifacts",
    "sceptical": "skeptical", "scepticism": "skepticism",
    "defence": "defense", "licence": "license", "enrol": "enroll", "enrolment": "enrollment",
    "whilst": "while", "travelling": "traveling", "fuelled": "fueled",
    "labelled": "labeled", "labelling": "labeling", "signalled": "signaled",
    "signalling": "signaling", "cancelled": "canceled",
    "fulfil": "fulfill", "fulfilment": "fulfillment",
    "centre": "center", "centres": "centers",
    "colour": "color", "colours": "colors", "coloured": "colored",
    "favour": "favor", "favours": "favors", "favoured": "favored",
    "favourable": "favorable", "favourably": "favorably",
    "honour": "honor", "labour": "labor", "rumour": "rumor", "humour": "humor",
    "flavour": "flavor", "endeavour": "endeavor", "neighbourhood": "neighborhood",
    "organise": "organize", "organised": "organized", "organises": "organizes",
    "organising": "organizing", "organisation": "organization",
    "organisations": "organizations", "organisational": "organizational",
    "generalise": "generalize", "generalised": "generalized", "generalisable": "generalizable",
    "generalisability": "generalizability", "generalisation": "generalization",
    "recognise": "recognize", "recognised": "recognized", "unrecognised": "unrecognized",
    "emphasise": "emphasize", "emphasised": "emphasized",
    "specialised": "specialized", "standardised": "standardized", "standardisation": "standardization",
    "personalised": "personalized", "personalisation": "personalization",
    "summarise": "summarize", "summarised": "summarized", "categorise": "categorize",
    "characterise": "characterize", "characterised": "characterized",
    "operationalise": "operationalize", "operationalised": "operationalized",
    "conceptualise": "conceptualize", "conceptualised": "conceptualized",
    "contextualise": "contextualize", "contextualised": "contextualized",
    "normalise": "normalize", "normalised": "normalized", "normalisation": "normalization",
    "marginalise": "marginalize", "marginalised": "marginalized",
    "utilise": "utilize", "utilised": "utilized", "utilisation": "utilization",
    "realise": "realize", "realised": "realized", "realisation": "realization",
    "minimise": "minimize", "minimised": "minimized", "maximise": "maximize",
    "optimise": "optimize", "optimised": "optimized", "optimisation": "optimization",
    "criticise": "criticize", "criticised": "criticized",
    "hypothesise": "hypothesize", "hypothesised": "hypothesized",
    "visualise": "visualize", "visualised": "visualized", "visualisation": "visualization",
    "prioritise": "prioritize", "prioritised": "prioritized", "prioritisation": "prioritization",
    "legitimise": "legitimize", "institutionalise": "institutionalize",
    "randomised": "randomized", "randomisation": "randomization",
    "individualised": "individualized", "individualisation": "individualization",
    "anonymised": "anonymized", "anonymisation": "anonymization",
    "homogenisation": "homogenization", "stabilise": "stabilize", "stabilised": "stabilized",
    "internalise": "internalize", "internalised": "internalized",
    "externalise": "externalize", "externalised": "externalized",
    "humanise": "humanize", "humanised": "humanized", "humanisation": "humanization",
    "theorise": "theorize", "theorised": "theorized",
    "synthesise": "synthesize", "synthesised": "synthesized", "synthesising": "synthesizing",
    "reconceptualise": "reconceptualize", "reconceptualised": "reconceptualized",
    "reconceptualising": "reconceptualizing",
    "penalise": "penalize", "penalised": "penalized",
    "practise": "practice", "practised": "practiced", "practising": "practicing",
    "localise": "localize", "localised": "localized", "customise": "customize",
    "scrutinise": "scrutinize", "scrutinised": "scrutinized",
    "authorise": "authorize", "authorised": "authorized", "unauthorised": "unauthorized",
    "ageing": "aging", "learnt": "learned", "amongst": "among",
}

PATTERNS = [
    (re.compile(r"(?<![A-Za-z])" + re.escape(w) + r"(?![A-Za-z])", re.I), w, us)
    for w, us in sorted(WORDS.items(), key=lambda kv: -len(kv[0]))
]
PROTECTED = re.compile(r'("[^"\n]*"|\[\*[^\]\n]*\*\]\([^)\n]*\)|\*[A-Z][^*\n]{3,60}\*)')


# Page slugs are identifiers, not prose: a page whose slug still carries a British
# spelling (nine do, pending a rename) must be nameable in docs and notes without
# the checker flagging the reference.
SLUGS = set()


def _load_slugs() -> None:
    for sub in ("articles", "concepts", "faqs"):
        d = REPO / sub
        if d.exists():
            for f in d.glob("*.md"):
                SLUGS.add(f.stem)


# A wikilink TARGET is a slug, not prose: nine pages still carry British spellings
# in their slugs (modelling, judgement, personalising, grey) and the link may not be
# respelled until those files are renamed. Keep the display text, drop the target.
WIKILINK = re.compile(r"\[\[([^\]|]+)(?:\|([^\]]+))?\]\]")


def _strip_and_split(text: str) -> str:
    """Remove frontmatter, the Citation section, protected spans, and link targets."""
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            text = text[end + 4:]
    cut = text.find("## Citation")
    if cut != -1:
        text = text[:cut]
    text = re.sub(r"`[^`\n]*`", " ", text)   # inline code holds identifiers, not prose
    text = WIKILINK.sub(lambda m: m.group(2) or "", text)
    if SLUGS:
        text = re.sub(r"(?<![A-Za-z-])(?:" + "|".join(re.escape(s) for s in sorted(SLUGS, key=len, reverse=True)) + r")(?![A-Za-z-])", " ", text)
    return PROTECTED.sub(" ", text)


# Generated files are written by tooling from the registry (which keeps British
# aliases on purpose, so old text still matches) - never respelled by hand and
# never a spelling defect.
GENERATED = {"concept-index.md"}


def scan_file(path: Path) -> dict:
    hits: dict = {}
    if path.name in GENERATED:
        return hits
    try:
        raw = path.read_text(encoding="utf-8")
    except Exception:
        return hits
    body = _strip_and_split(raw)
    for pat, w, us in PATTERNS:
        for m in pat.finditer(body):
            hits.setdefault(m.group(0).lower() + " -> " + us, 0)
            hits[m.group(0).lower() + " -> " + us] += 1
    return hits


def targets(include_docs: bool):
    for sub in ("articles", "concepts", "faqs"):
        d = REPO / sub
        if d.exists():
            yield from sorted(d.glob("*.md"))
    if include_docs:
        for p in [REPO / "AGENTS.md", REPO / "README.md"]:
            if p.exists():
                yield p
        for sub in ("tooling", "skills", "docs"):
            d = REPO / sub
            if d.exists():
                yield from sorted(d.rglob("*.md"))


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--include-docs", action="store_true",
                    help="also scan AGENTS.md, tooling/**.md and skills/**/*.md")
    ap.add_argument("--quiet", action="store_true", help="counts only, no per-file lines")
    args = ap.parse_args()

    _load_slugs()
    total_files, total_hits = 0, 0
    for path in targets(args.include_docs):
        hits = scan_file(path)
        if not hits:
            continue
        total_files += 1
        total_hits += sum(hits.values())
        if not args.quiet:
            rel = path.relative_to(REPO)
            detail = ", ".join(f"{k} x{v}" for k, v in sorted(hits.items(), key=lambda kv: -kv[1]))
            print(f"{rel}: {detail}")

    if total_hits:
        print(f"\nFAIL - {total_hits} British spelling(s) across {total_files} file(s). "
              f"House style is US English; respell the body prose (never the Citation).")
        return 1
    print(f"OK - no British spellings in {len(list(targets(args.include_docs)))} file(s) scanned.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
