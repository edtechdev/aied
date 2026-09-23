---
title: "Generative artificial intelligence in university chemistry education: a critical review using Johnstone’s chemistry triplet and Biggs’ 3P model"
created: "2026-09-23T12:30:00-04:00"
updated: "2026-09-23T13:20:00-04:00"
type: article
foundations: [ai-literacy, critical-thinking, cognitive-offloading, theories-and-frameworks]
pedagogy: [prior-knowledge, scaffolding]
technology: [generative-ai]
assessment: [assessment, feedback]
ethics: [hallucination-risk, pedagogical-safety]
institutions: [governance]
audience: [instructors, faculty developers, researchers]
level: [undergraduate, higher ed]
research_method: [literature review]
discipline: [chemistry education, science education]
page_kind: [synthesis]
sources: ['raw/papers/vega-baudrit-genai-university-chemistry-education-review-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Vega-Baudrit and Rivera Álvarez (2026) offer a critical review of [[generative-ai|generative AI]] in university chemistry education, arguing that the same tool can be productive in one [[learning-design|learning design]] and epistemically unsafe in another. Chemistry requires coordinated reasoning across observable phenomena, particulate models, and symbolic notation, so a polished model answer can violate mass or charge balance, misstate a mechanism, or propose an unsafe procedure. The authors organize the evidence with two frameworks: Johnstone’s chemistry triplet, which locates where chemical meaning can fail, and Biggs’ Presage-Process-Product model, which explains how readiness, task design, and [[assessment]] shape outcomes. Across benchmarks, perception studies, and bounded classroom implementations, GenAI supports critique, formative dialogue, writing, coding, and experimental design when students keep executive control and verify outputs. Durable [[transfer-of-learning|transfer]], retention, and chemical judgment are rarely tested. The review’s recommendation is verification-centered integration: make sources, units, prompts, and revisions visible, preserve human responsibility, and treat GenAI as a fallible object of disciplinary inquiry rather than an autonomous source of chemical truth.

## Key Findings

- The evidence supports feasibility, bounded model performance, and specific [[learning-design|instructional designs]], but not a general claim that GenAI improves chemistry learning across course levels.
- Productive use keeps the learner in charge of prompting, questioning, and correcting; unproductive use replaces the reasoning through which understanding develops (Haraldsrud and Odden, 2025).
- Linguistic fluency is not chemical validity. Mechanisms, calculations, citations, and procedures can be nearly right, which raises the verification burden on novices.
- Verification-centered [[assessment]] asks students to identify an AI error, defend a correction, compare representations, or reproduce reasoning without AI, with prompt logs and oral defense as evidence.
- Chemistry-specific risk sits in representational translation: an output coherent in one Johnstone domain can contradict macroscopic evidence or symbolic constraints in another, which makes translation the core [[ai-literacy]] demand.
- Laboratory and chemical engineering contexts raise the bar. GenAI should not authorize procedures, hazard controls, or process decisions without qualified human review.
- The literature is concentrated in the Journal of Chemical Education, so negative results, safety concerns, and unsuccessful implementations are probably underrepresented, a reporting asymmetry the authors flag explicitly.

## Johnstone’s Chemistry Triplet: Where Chemical Meaning Can Fail

The review’s primary framework is Johnstone’s chemistry triplet, which separates the macroscopic domain (observations, measurements, conditions, safety constraints), the submicroscopic domain (particles, bonding, electron flow, mechanisms), and the symbolic domain (equations, structures, units, spectra, graphs, code). Representational translation is treated as a cross-domain reasoning process, not a fourth level. The framework explains why GenAI outputs can be locally persuasive and globally wrong: a fluent verbal explanation may contradict charge balance, a molecular image may not match a symbolic structure, and a procedure may ignore concentration, equipment, or safety limits. A worked titration example shows the pattern: a response can describe neutralization correctly yet claim that every equivalence point has a pH of 7. The educational response is to require translation in both directions.

## Biggs’ 3P Model: Conditions, Process, and Outcomes

Johnstone’s triplet locates the disciplinary risk; Biggs’ Presage-Process-Product model is the secondary lens that locates the pedagogy. Presage conditions include [[prior-knowledge|prior chemistry knowledge]], representational competence, [[ai-literacy]], access, policy, instructor readiness, and the model’s technical characteristics, which is why students cannot verify what they do not understand. Process covers what learners actually do with the system: prompting, comparing, calculating, revising, visualizing, coding, and explaining, with [[scaffolding]] on one side and [[cognitive-offloading|cognitive offloading]] through uncritical copying on the other. Product covers chemical accuracy, conceptual understanding, [[transfer-of-learning|transfer]], retention, representational fluency, laboratory judgment, and professional responsibility. The evidence is far stronger for short-term performance, perceptions, and feasibility than for delayed transfer or durable conceptual change.

## Verification-Centered Design and Assessment

The review’s central recommendation is verification-centered integration. Assessment should distinguish permitted support from evidence of independent mastery, using oral defense, annotated error analysis, staged drafts, authentic laboratory data, and delayed AI-free tasks. Model fallibility can become the object of study: students identify a false assumption, improve a prompt, compare representations, or justify rejecting a generated answer, which aligns [[academic-integrity]] with disciplinary learning rather than policing it separately. Design principles include making verification an assessed activity, preserving reasoning traces such as prompt logs and revision histories, using GenAI for comparison rather than authority, and separating support from work that must remain human. [[prompt-engineering|Prompting]] is framed as an epistemic act: a useful prompt specifies chemical constraints, assumptions, and adequacy criteria.

## What this means for practice
- For instructors, the review's stance is neither automatic adoption nor blanket prohibition.
- Verification should be designed into the task rather than announced as a rule: ask students to identify a false assumption, correct a unit or mechanism error, compare a symbolic structure with a submicroscopic model, or justify rejecting a generated answer.
- Because students cannot verify what they do not yet understand, [[prior-knowledge]] and [[scaffolding]] come first, and [[cognitive-offloading|cognitive offloading]] remains the main failure mode to watch.
- Assessment should separate permitted support from evidence of independent mastery, using oral defense, annotated error analysis, staged drafts, authentic laboratory data, and delayed AI-free tasks, with prompt logs and revision histories kept as reasoning traces.
- In laboratories, generated procedures and hazard controls require qualified human review before anyone acts on them. Institutions should keep policy, access, and privacy decisions visible, since the evidence supports feasibility and bounded instructional designs more than a general claim of improved learning.

## Limitations
- The review used structured searches of Scopus, ACS Publications, the Journal of Chemical Education, ERIC, Google Scholar through Publish or Perish, and Web of Science Core Collection, with a targeted update through 21 August 2026.
- It synthesizes representative studies rather than claiming an exhaustive corpus and reports no pooled effect estimate or publication-bias test.
- Laboratory and process contexts require a higher threshold: safety, privacy, and equity are institutional responsibilities.
- Unreviewed procedural use and sensitive-data entry should be prohibited, and students should not have to buy access to a proprietary system without an alternative. Reporting should identify the model, version, prompt strategy, retrieval configuration, and human moderation. The authors disclosed ChatGPT use for language editing and structural drafting under their own verification.

## Connected Concepts

- [[chemistry-education]]
- [[generative-ai]]
- [[ai-literacy]]
- [[critical-thinking]]
- [[cognitive-offloading]]
- [[theories-and-frameworks]]
- [[assessment]]
- [[governance]]

## Connected Articles

- [[ai-science-chemistry-education-systematic-review-2025]] — AI in science and chemistry education: a systematic review
- [[ai-supported-experimental-design-chemistry-2026]] — AI-supported experimental design in practical chemistry
- [[philosophy-experimentation-ai-chemistry-2026]] — Reimagining the philosophy of experimentation in chemistry education

## Citation

Vega-Baudrit, J. R., & Rivera Álvarez, A. (2026). [*Generative artificial intelligence in university chemistry education: a critical review using Johnstone’s chemistry triplet and Biggs’ 3P model*](https://doi.org/10.3389/feduc.2026.1918707).