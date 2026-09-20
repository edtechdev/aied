#!/usr/bin/env python3
"""Generate the concept views from concepts.registry.yaml.

The registry is the single source of truth; these files are VIEWS and must never
be hand-edited:

    tooling/concept-index.md          human-readable manifest (slug, title, phrases,
                                      merge map, never-link list)
    src/data/conceptIndex.ts          sidebar sections/groups used by the Astro site
    src/data/conceptRedirects.ts      old slug -> canonical slug 301 redirects

Usage:
    python3 tooling/scripts/gen-concept-artifacts.py            # write
    python3 tooling/scripts/gen-concept-artifacts.py --check    # fail if out of date
"""
import os, sys, re

try:
    import yaml
except ImportError:
    sys.exit("PyYAML is required: pip install pyyaml")

WIKI = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
REGISTRY = os.path.join(WIKI, 'concepts.registry.yaml')

CONCEPT_INDEX = os.path.join(WIKI, 'tooling', 'concept-index.md')
CONCEPT_INDEX_TS = os.path.join(WIKI, 'src', 'data', 'conceptIndex.ts')
REDIRECTS_TS = os.path.join(WIKI, 'src', 'data', 'conceptRedirects.ts')
FACET_VOCAB_TS = os.path.join(WIKI, 'src', 'data', 'facetVocab.ts')
METADATA_LINKS_TS = os.path.join(WIKI, 'src', 'data', 'metadataLinks.ts')
CONFIG_TS = os.path.join(WIKI, 'src', 'content.config.ts')

# Typed metadata facets, each derived from one registry section, so the allowed
# values of a facet field can never drift from the concept taxonomy. A concept
# added to a section extends that facet's vocabulary on the next build.
# The registry section 'AI in the disciplines' is deliberately absent: it is
# served by the hand-curated `discipline` field, whose values include school
# subjects that have no concept page yet.
# (field, label, registry section). The LABEL IS THE SECTION HEADING on purpose:
# the sidebar, the search filters and the metadata table all read it from here, so a
# section and its facet cannot end up with two different names.
FACET_SECTIONS = [
    ('foundations', 'Foundations of AI in education', 'Foundations of AI in education'),
    ('pedagogy', 'Learning and instruction', 'Learning and instruction'),
    ('technology', 'Technologies and techniques', 'Technologies and techniques'),
    ('assessment', 'Assessment and measurement', 'Assessment and measurement'),
    ('methods', 'Research methods and evaluation', 'Research methods and evaluation'),
    ('stakeholders', 'People', 'People'),
    ('institutions', 'Institutions and policy', 'Institutions and policy'),
    ('ethics', 'Equity, ethics, and responsible use', 'Equity, ethics, and responsible use'),
]

FACET_VOCAB_HEADER = """// Typed metadata facet vocabularies, derived from concepts.registry.yaml.
//
// Each facet mirrors one registry section: the allowed values of the matching
// frontmatter field are exactly the concept slugs filed under that section, so
// the vocabulary cannot drift from the concept taxonomy and a value of the
// wrong kind (a technology slug in `pedagogy`) fails the build.
//
// GENERATED FILE - do not edit by hand.
// Source: concepts.registry.yaml (`sections:` block)
// Regenerate: python3 tooling/scripts/gen-concept-artifacts.py
//
// 'AI in the disciplines' is intentionally absent: it is served by the
// hand-curated `discipline` field, which also covers school subjects that do
// not have a concept page yet.

export const FACET_VOCAB = {
"""

TS_HEADER = """// Shared concept index data for the site-wide navigation sidebar.
// Every concept appears exactly once. Links only render for slugs that exist,
// so coverage stays safe if a concept is renamed or removed.
//
// GENERATED FILE - do not edit by hand.
// Source: concepts.registry.yaml
// Regenerate: python3 tooling/scripts/gen-concept-artifacts.py
//
// Organization of the sidebar sections lives in the registry's `sections:` block.

export interface ConceptSection {
  heading: string;
  blurb?: string;
  groups: { label: string; items: string[] }[];
}

export const conceptIndex: ConceptSection[] = ["""

REDIRECTS_HEADER = """// Canonical destination for merged/absorbed concept slugs.
// Each key is an old slug that no longer has its own page; visiting
// concepts/<key>/ on the site redirects (301) to the canonical destination
// instead of 404. Keys here must be concept slugs, never article slugs.
//
// GENERATED FILE - do not edit by hand.
// Source: concepts.registry.yaml (the `redirects:` block)

export const CONCEPT_REDIRECTS: Record<string, string> = {"""


def load_registry(path=REGISTRY):
    with open(path, encoding='utf-8') as fh:
        return yaml.safe_load(fh)


def render_index_md(reg):
    concepts = reg['concepts']
    lines = [
        '# Concept Index (generated)',
        '',
        'Canonical reference for inline `[[slug]]` linking. Generated from',
        '`concepts.registry.yaml` — **edit the registry, never this file**.',
        '',
        f"**Total concepts:** {len(concepts)}",
        '',
    ]
    for section in reg.get('sections', []):
        lines.append(f"## {section['heading']}")
        lines.append('')
        for group in section['groups']:
            lines.append(f"### {group['label']}")
            lines.append('')
            for slug in sorted(group['items']):
                entry = concepts.get(slug)
                if entry is None:
                    continue
                phrases = '; '.join(entry.get('aliases') or [])
                lines.append(f"- **`{slug}`** — {entry['title']} — phrases: {phrases}")
            lines.append('')
    ungrouped = sorted(set(concepts) - {s for sec in reg.get('sections', [])
                                        for g in sec['groups'] for s in g['items']})
    if ungrouped:
        lines += ['## Ungrouped (not in any sidebar section)', '']
        lines += [f"- **`{s}`** — {concepts[s]['title']}" for s in ungrouped]
        lines.append('')
    redirects = reg.get('redirects') or {}
    if redirects:
        lines += ['## Merged / absorbed (redirects to the canonical page)', '']
        lines += [f"- `{old}` → **`{new}`**" for old, new in sorted(redirects.items())]
        lines.append('')
    never = reg.get('never_link') or []
    if never:
        lines += ['## Never linked (no page — mention as plain text)', '']
        lines += [f"- `{slug}`" for slug in never]
        lines.append('')
    return '\n'.join(lines).rstrip('\n') + '\n'


def render_concept_index_ts(reg):
    out = [TS_HEADER]
    for section in reg.get('sections', []):
        out.append('  {')
        out.append(f"    heading: {ts_str(section['heading'])},")
        if section.get('blurb'):
            out.append(f"    blurb: {ts_str(section['blurb'])},")
        out.append('    groups: [')
        for group in section['groups']:
            items = ', '.join(f"'{s}'" for s in group['items'])
            out.append(f"      {{ label: {ts_str(group['label'])}, items: [{items}] }},")
        out.append('    ],')
        out.append('  },')
    out.append('];')
    return '\n'.join(out) + '\n'


def render_redirects_ts(reg):
    out = [REDIRECTS_HEADER]
    for old, new in sorted((reg.get('redirects') or {}).items()):
        out.append(f"  '{old}': '{new}',")
    out.append('};')
    return '\n'.join(out) + '\n'


# Field values that are phrases rather than slugs can still have a concept page.
# The link is generated from the registry (slug match or a registered alias), never
# hand-written, so a renamed concept cannot leave a stale link behind. Aliases that
# collide across ideas are excluded deliberately: 'researchers' is not research
# methods, and 'instructional designers' is not the generic stakeholders page.
LINK_FIELDS = ('research_method', 'discipline', 'audience', 'level')
LINK_EXCLUDE = {
    # 'researchers' is not research methods; the designer phrases are not the generic
    # stakeholders page; 'instructors' and 'teachers' are audiences, not the teaching
    # role the alias would send them to; 'literature review' is not the systematic
    # review concept; and the library discipline is not the librarians people page.
    'audience': {'researchers', 'instructional designers', 'policymakers',
                 'instructors', 'teachers'},
    'research_method': {'literature review'},
    'discipline': {'library and information science'},
}
# Fields where only an exact slug match may link: a level value must not be relabelled
# by a broader band page ('undergraduate' is not simply higher education).
LINK_EXACT_ONLY = {'level'}

# Each metadata field whose vocabulary has one page that reads as the umbrella for
# the whole field. The page metadata table links the field LABEL to that page, so a
# reader can move from "Intended audience: instructors" to what the field itself
# means. Fields without a genuine umbrella (level, page_kind, the foundations
# catch-all) are omitted rather than pointed at a near-miss.
FIELD_UMBRELLAS = (
    ('research_method', 'research-methods-aied'),
    ('methods', 'research-methods-aied'),
    ('discipline', 'discipline-specific-aied'),
    ('level', 'education-levels'),
    ('audience', 'stakeholders'),
    ('stakeholders', 'stakeholders'),
    ('pedagogy', 'pedagogy'),
    ('technology', 'ai-technologies'),
    ('assessment', 'assessment'),
    ('institutions', 'educational-policy-ai'),
    ('ethics', 'ethics'),
)


def render_metadata_links_ts(reg):
    src = open(CONFIG_TS, encoding='utf-8').read()
    alias_to_slug = {}
    for slug, entry in reg['concepts'].items():
        for alias in (entry.get('aliases') or []):
            alias_to_slug.setdefault(alias.lower(), slug)
    lines = []
    for field in LINK_FIELDS:
        m = re.search(rf"{field}: enumList\((.*?)\n    \),", src, re.S)
        if not m:
            continue
        values = re.findall(r"'([^']+)'", m.group(1))
        pairs = {}
        for value in values:
            if value in LINK_EXCLUDE.get(field, set()):
                continue
            slug = value.replace(' ', '-')
            if slug in reg['concepts']:
                pairs[value] = slug
            elif field in LINK_EXACT_ONLY:
                continue
            elif value.lower() in alias_to_slug:
                pairs[value] = alias_to_slug[value.lower()]
        if pairs:
            lines.append(f"  {field}: {{")
            for value, slug in pairs.items():
                lines.append(f"    {ts_str(value)}: {ts_str(slug)},")
            lines.append("  },")
    header = ("// Field values that have a concept page, for the page metadata table.\n"
              "// A phrase like 'cs education' or 'systematic review' links to its concept page;\n"
              "// generated so a renamed concept cannot leave a stale link behind.\n"
              "// FIELD_UMBRELLAS maps a metadata field to the concept page that reads as the\n"
              "// umbrella for that whole field - the table links the field label there.\n"
              "// GENERATED FILE - do not edit by hand.\n"
              "// Source: tooling/scripts/gen-concept-artifacts.py + src/content.config.ts\n"
              "//         (vocabularies) + concepts.registry.yaml (aliases)\n\n")
    umbrellas = "export const FIELD_UMBRELLAS: Record<string, string> = {\n"
    for field, slug in FIELD_UMBRELLAS:
        umbrellas += f"  {ts_str(field)}: {ts_str(slug)},\n"
    umbrellas += "};\n\n"
    return (header + umbrellas
            + "export const METADATA_LINKS: Record<string, Record<string, string>> = {\n"
            + "\n".join(lines) + "\n};")


def render_facet_vocab_ts(reg):
    by_section = {}
    for section in reg.get('sections', []):
        slugs = [s for g in section['groups'] for s in g['items']]
        by_section[section['heading']] = sorted(set(slugs))
    out = [FACET_VOCAB_HEADER]
    labels = []
    for field, label, section in FACET_SECTIONS:
        slugs = by_section.get(section)
        if slugs is None:
            sys.exit(f"registry section not found for facet '{field}': {section!r}")
        labels.append((field, label, section))
        out.append(f"  // {label} ({len(slugs)} concepts) — registry section: {section}")
        out.append(f"  {field}: [")
        for s in slugs:
            out.append(f"    {ts_str(s)},")
        out.append("  ],")
    out.append("} as const;")
    out.append("")
    out.append("export const FACET_FIELDS = [")
    for field, label, _ in labels:
        out.append(f"  {{ field: {ts_str(field)}, label: {ts_str(label)} }},")
    out.append("] as const;")
    out.append("")
    out.append("// Display order for the topic facets, shared by the search filters and the")
    out.append("// metadata table. Foundations sits next to Page kind at the end: the two")
    out.append("// read least clearly as field names, so they are kept together and late.")
    out.append("export const FACET_DISPLAY_ORDER = [")
    for field in ('pedagogy', 'technology', 'assessment', 'methods', 'stakeholders', 'institutions', 'ethics', 'foundations'):
        out.append(f"  {ts_str(field)},")
    out.append("] as const;")
    out.append("")
    return '\n'.join(out)


def ts_str(s):
    # Preserve existing \uXXXX escapes in the source text verbatim (they are part
    # of the TS string literal); escape only real backslashes.
    out, i = [], 0
    while i < len(s):
        ch = s[i]
        if ch == '\\' and re.match(r'\\u[0-9a-fA-F]{4}', s[i:i + 6]):
            out.append(s[i:i + 6])
            i += 6
        elif ch == '\\':
            out.append('\\\\')
            i += 1
        elif ch == "'":
            out.append("\\'")
            i += 1
        else:
            out.append(ch)
            i += 1
    return "'" + ''.join(out) + "'"


def main():
    check = '--check' in sys.argv
    reg = load_registry()
    targets = {
        CONCEPT_INDEX: render_index_md(reg),
        CONCEPT_INDEX_TS: render_concept_index_ts(reg),
        REDIRECTS_TS: render_redirects_ts(reg),
        FACET_VOCAB_TS: render_facet_vocab_ts(reg),
        METADATA_LINKS_TS: render_metadata_links_ts(reg),
    }
    stale = []
    for path, content in targets.items():
        current = open(path, encoding='utf-8').read() if os.path.exists(path) else None
        if current == content:
            continue
        stale.append(path)
        if check:
            continue
        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(content)
    for path in targets:
        rel = os.path.relpath(path, WIKI)
        print(f"{'STALE' if path in stale else 'ok   '}  {rel}")
    if check and stale:
        sys.exit(f"\n{len(stale)} generated file(s) out of date — run: "
                 f"python3 tooling/scripts/gen-concept-artifacts.py")


if __name__ == '__main__':
    main()