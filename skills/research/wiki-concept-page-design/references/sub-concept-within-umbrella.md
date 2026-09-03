# Creating a narrow sub-concept inside an existing umbrella (worked example: accessibility cluster)

Session 2026-08-23. the maintainer asked whether a concept page on "using AI to support students with
disabilities" was warranted, noting it might already be covered by Accessible Learning, Special
Education, and Universal Design for Learning. Result: we created TWO new narrow concepts
(`accessibility`, `assistive-technology`) AND renamed the umbrella. the maintainer's three mid-session
corrections encode durable rules.

## The desired concept constellation (how it finally split)

| Concept (slug) | Core question | Typical focus |
|---|---|---|
| **Inclusive Learning** (`inclusive-learning`, RENAMED umbrella) | How do we design education so all learners participate? | broad design across learner variability |
| **Accessibility** (`accessibility`, new) | Can everyone perceive/operate the *format/medium*? | captions, alt text, transcripts, contrast, keyboard/screen-reader compat, WCAG |
| **Assistive Technology** (`assistive-technology`, new) | What tools/equipment bridge an individual's access gap? | screen readers, TTS/STT, braille/tactile, sign-language, AI accommodations |
| **Special Education** (`special-education`, existing) | Instruction for learners with diagnosed disabilities | IEPs, individualized accommodations, disability-specific tutoring |
| **Universal Design for Learning** (`universal-design-for-learning`, existing) | Proactively build flexibility from the start | multiple means of engagement/representation/action-expression |

Relationship phrasing that worked: UDL *prevents* barriers; accessibility removes *format*
barriers; assistive technology is the *tool* layer; special education is the *instructional*
domain; inclusive learning is the umbrella holding them together. "An accessible tool does not
guarantee inclusive instruction, and assistive tech does not guarantee meaningful agency."

## the maintainer's three corrections (verbatim intent)

1. "Accessible Learning should be renamed then so don't confuse it with Accessibility"
   → rename the umbrella to a non-colliding name (`accessible-learning` → `inclusive-learning`).
2. "Ensure the umbrella page delineates the different sub-pages"
   → the umbrella page must carry a comparison table (concept → core question → typical focus)
   plus a paragraph explaining how they combine.
3. "and equity or whatever should connect to all this, too"
   → the cross-cut concept (equity-in-ai-education) must link to every sub-page AND every
   sub-page must link back to it (reciprocal Connected Concepts). Also fix mis-piped labels
   (e.g. `[[inclusive-learning|accessibility]]` → `[[accessibility]]`).

## Concept-rename checklist (accessible-learning → inclusive-learning)

- `git mv`/`os.rename` concepts file; update frontmatter `title:`.
- Scripted sweep replacing old slug across all `.md` (articles, concepts, index, journal, log,
  raw). Confirmed **zero** remaining occurrences in articles/concepts via grep.
- Update `src/data/conceptIndex.ts` (sidebar) + `tooling/concept-index.md` (canonical list,
  alphabetical spot) — both, not one.
- Fix piped display labels that still carry the old title.
- Add 301 redirect `'old-slug': 'new-slug'` in `src/data/conceptRedirects.ts`; verify live URL
  title reads "Redirecting to: /aied/concepts/<new>/".
- Re-read renamed page body for awkward leftovers from the mass replace (stray old-name
  mid-sentence); fix.
- Register any NEW concepts in BOTH conceptIndex.ts and tooling/concept-index.md
  (total count header updated 143 → 145).

## Article-side facts (grounding articles for this cluster)

- shin-ai-policies-sld-2026 — Shin et al. 2026, Learning Disability Quarterly 49(3):134-146,
  DOI 10.1177/07319487251412879. LLM topic modeling + Delphi of 12 US policy docs; AI policy
  void for students with specific learning disabilities; grounded in Assistive Technology Act
  (2004) + IDEA (2004).
- zhang-ai-students-disabilities-meta-analysis-2024 — Zhang, Carter, Liu & Peng 2024, Review of
  Educational Research, DOI 10.3102/00346543241293424. Meta-analysis of 29 (quasi-)experiments,
  medium effect g=0.588 via robots/software/intelligent VR; calls for accessibility + agentic
  roles.
- ikram-ai-personalized-learning-review-2026 — Ikram et al. 2026, Front. Educ. 11:1782626,
  DOI 10.3389/feduc.2026.1782626, systematic review of personalized learning (feeds
  personalized-learning, NOT the disability cluster).
