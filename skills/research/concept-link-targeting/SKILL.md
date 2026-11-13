---
name: concept-link-targeting
description: "Use when a phrase could link to several concept pages."
version: 1.0.0
license: MIT
category: research
metadata:
  <AGENT_KEY>:
    tags: [wiki, wikilinks, editorial, concept-graph]
    related_skills: [wiki-inline-links, wiki-concept-page-design, content-page-locale-refresh]
---

# Choosing which concept page a phrase links to

`wiki-inline-links` covers finding unlinked mentions and running the scanner. This skill covers the
decision the scanner cannot make: several concept pages describe overlapping territory, and the
wording of the mention does not pick the target — the FRAME of the sentence does.

Apply it whenever a phrase names a population, a method, a system or a construct that two or more
concept pages could plausibly own, and whenever someone questions an existing link's target.

## Read the frame, not the wording

Write down what the sentence is actually claiming, then pick the page whose scope matches the claim:

- **Where, at what level, and about what?** A phrase about school provision, a statutory service,
  an institutional policy, or a learning medium each belongs to a different page even when the
  quoted words are identical.
- **Population vs provision vs tool vs medium.** "Learners with disabilities" (a population),
  "special education services" (a provision and its legal frame), "assistive technology" (the tools)
  and "accessibility" (the medium) are four pages. Link the one the sentence is about; a generic
  claim about accommodating diverse learners usually belongs to the POPULATION page, not the
  provision page, because the provision page is written around one sector's statute.
- **A concept vs an instance of it.** A group name ("first-generation students", "rural students")
  can link to the page that maps how groups differ, or to nothing; a phrase that describes the
  analysis itself ("subgroup analysis", "differential effects", "who benefits") always links to that
  mapping page.
- **A named section of a framework vs the construct.** Link the construct page, not the region of
  the paper that carries its name.

Worked pattern for a K-12-statutory page in a cross-sector corpus: a general sentence about disabled
or neurodivergent learners goes to the broad inclusive-learning page; the special-education page is
correct only when the sentence is about IEP/504, IDEA, identification, co-teaching, special-education
classrooms, district provision, or a SEND benchmark category. The medium (captions, alt text, screen
readers, contrast) goes to accessibility; the tools go to assistive-technology; the neurodivergent
subset as a framing goes to neurodiversity.

## Do not create a page to fix a target

Before proposing a new concept page because "there is no page for X", check what the existing pages
plus the FAQ layer already cover. A new page that restates a broad concept and two narrower ones
splits the graph rather than deepening it, and every future mention then has three plausible targets.
Prefer retargeting to the existing page whose scope is broadest-but-correct, and say so when asked.
If a page really is missing, the create-vs-enrich decision lives in `wiki-concept-page-design`.

## A retarget is per-occurrence, then mechanical

1. Inventory every occurrence: (file, line, display text, and the narrow-frame markers found in the
   surrounding sentence).
2. Review the list and keep a minority on the old target — the narrow sense is real on some pages
   (a statutory-services sentence, a sector-specific benchmark, a pupil-profile example).
3. Apply from the list with an assertion that the link at that position still carries the expected
   display text. A `re.sub` over `[[slug|` moves the narrow sense too and is unreviewable.
4. Propagate to translated twins, then verify by count, not by eye: for each page compare the number
   of links to the old and new target in English against every twin. Twins translated from one origin
   share the same wrong target, so a twin with one fewer occurrence silently keeps the old one, and
   the parity gate reports it as `missing={'<new>': 1} extra={'<old>': 1}`. Swap exactly one
   occurrence per listed file; a file missing the new target with no `extra` was never linked and
   needs the link added in the matching sentence instead.
5. Re-run the parity gate and expect a few twins to fail on facets rather than links — a page that
   does not exist yet in the locale is a facet mismatch, not a link defect.

## First occurrence is the one that matters

Link the mention in the most concept-dense early passage — a synthesis blockquote or a key-findings
bullet — rather than a later incidental use. When a page already links the target once, on a group
NAME rather than on the concept, that first link does not discharge the duty for the concept
mention: add the concept-level link where the analysis is described and leave the group-name link
alone.

## Pitfalls

- **The same words, different frames.** "Disabilities" on a higher-education policy page and in a
  K-12 classroom study are not the same concept; decide per sentence.
- **A group name is not the concept.** Linking "first-generation students" to a group-differences
  page is defensible, but it does not replace linking "subgroup analysis" or "who benefits" there.
- **Over-linking the fix.** One link at first occurrence; the second and third mentions stay plain.
- **Bulk replace is the failure mode.** Every retarget that skipped the per-occurrence review moved
  the narrow sense and needed a second pass to put it back.
