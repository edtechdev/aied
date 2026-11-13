---
name: wiki-typed-facet-repair
description: "Repair invalid typed-facet frontmatter on wiki pages."
category: research
version: 1.0.0
---

# Repairing typed-facet frontmatter

## When to Use

- `validate-facets.py` fails on a page you just wrote or installed from a drafting agent.
- A page builds but its search facet reads wrong, or a facet value renders as an unknown label.
- A batch of delegated drafts needs the same frontmatter defect fixed across several files.

Typed facets are not free-text tags. Each field is a closed vocabulary: the values are the concept
slugs of exactly one section of `concepts.registry.yaml`, generated into `src/data/facetVocab.ts`, and
`src/content.config.ts` additionally constrains the non-concept fields (`research_method`, `page_kind`,
`discipline`, `level`) to fixed enums. A plausible-looking value that is not in the list is an error,
not a new facet.

## The two defects that account for almost every failure

1. **An invented enum value.** The five non-concept fields do not accept hyphenated concept slugs or
   self-descriptive phrases. `research_method: [mixed-methods-research]` and
   `research_method: [predictive modeling]` both fail, because the allowed tokens are lowercase
   space-separated (`mixed methods`, `survey`, `instrument development`, `position paper`, …).
   Fix by choosing the nearest allowed token, not by inventing a synonym.
2. **A real concept slug in the wrong section.** `privacy` lives in `ethics`, `assessment-validity`
   and `ai-detection` live in `assessment`, and `item-response-theory` lives in `assessment`; putting
   any of them under `foundations` fails even though the slug exists. `validate-facets.py` names the
   section that does own the slug — read that line and move the value, never delete it, and never
   duplicate it across two fields (the gate also fails a slug that appears twice).

A third, quieter defect: **empty arrays**. `institutions: []`, `ethics: []`, `assessment: []` carry no
information and are not house style on new pages; drop the line instead of leaving a placeholder.

## Procedure

1. Read the allowed values from the source that generates them, not from memory:

   ```bash
   grep -n -A30 'research_method' src/content.config.ts
   python3 -c "import re;t=open('src/data/facetVocab.ts').read();
   m=re.search(r'foundations:\s*\[(.*?)\]',t,re.S);print(re.findall(r\"'([^']+)'\",m.group(1)))"
   ```

2. For each failing value, classify it: enum field → swap to the nearest allowed token; concept
   field → find the section that owns the slug and move it there; duplicate → keep it in the field
   the gate names and remove the other.
3. Re-run `validate-facets.py` until it prints OK. It validates the whole corpus in seconds, so run
   it corpus-wide rather than per file: the same value is often wrong on several pages of one batch.
4. Re-run the neighbouring gates the frontmatter feeds: `check-slug-uniqueness.py` (a moved value can
   shadow a slug), `check-concept-screen.py --changed` (the candidate set is built from facets, so
   moving one changes which decisions are required), and the site build.

## Pitfalls

- **Do not "fix" a facet by deleting it.** A deleted facet removes the page from a search facet and
  from the concept screen's candidate set, which turns a loud error into a silent coverage gap.
- **Do not trust a drafting agent's facet block.** Delegated drafts reproduce the same two defects on
  every page of a batch because the model picks values that read well rather than values that exist.
  Run `validate-facets.py` before reading any of the prose, and expect to repair every drafted page.
- **`level` and `discipline` values are phrases, not slugs.** `level: teacher education` is valid;
  `teacher-education` as a level is not — that slug belongs in a concept field, not in `level`.
- **The frontmatter is machine identifiers, not prose.** Fixing a facet to match a page's subject is
  right; rewording a `connected_faqs` target or a `sources` path to match prose is not.
