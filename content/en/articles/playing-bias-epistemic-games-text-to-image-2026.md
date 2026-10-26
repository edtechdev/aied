---
title: "Playing Bias: Epistemic Games for Interpreting Text-to-Image Models"
created: "2026-10-26T09:30:00-04:00"
updated: "2026-10-26T09:30:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/playing-bias-epistemic-games-text-to-image-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [case study]
discipline: [arts education]
audience: [instructors, curriculum designers, researchers]
level: [higher ed, undergraduate]
pedagogy: [active-learning, game-based-learning, student-ai-interaction]
technology: [generative-ai, multimodal]
assessment: []
methods: [qualitative-research]
institutions: []
ethics: [bias-mitigation, equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Foka translates a three-stage, humanities-informed framework for reading [[multimodal|text-to-image]] models into three playable [[game-based-learning|epistemic games]], Interpret, Interrogate, and Expose, piloted with 15 [[higher-ed|undergraduate]] fine-arts students over six 3-hour studio classes at the University of Ioannina. Role-driven close looking moved students from impressionistic reactions to concise, warranted hypotheses grounded in visual evidence, and 22 exit memos (mean ≈173 words) each contained at least 2 observation-to-interpretation links. The games make the cultural work of [[generative-ai]] legible without requiring coding, and their [[bias-mitigation|bias]] findings are framed as claims to contest rather than scores to accept.

## Key Findings

1. **Interpret builds interpretive discipline through role structure.** Teams earning Observation (+1), Interpretation (+2) and Hypothesis (+2) points, capped at ten points per round, tied claims to what was visible and produced testable bias hypotheses from contrasts among supplied outputs.
2. **Interrogate turns critique into representational design.** The Evidence Grid (at least six examples from three domains), Counter-Intent Card and four-slot Prompt Row required every descriptor to be traceable, and single-slot variation showed where counter-intents were absorbed or resisted.
3. **Expose makes defaults legible through controlled variation.** Three paired prompts (six images) under the BiasSlot rule, where exactly one bias-bearing cue changes while a constant symbolic motif stays fixed, contrasted competent, well-equipped figures with aestheticized counterparts.
4. **Cross-model comparison surfaced consistent defaults.** On the housekeeper theme DALL·E and Midjourney depicted both genders, though skewed toward women of color, while Stable Diffusion produced only female figures, and all three models emphasized age.
5. **Two lightweight supports carried the method.** A mini-glossary mapping critical terms to visual cues and systematic logging of model/version, seed and prompt ID made comparisons auditable and discussions replicable.
6. **The pilot was illustrative, not confirmatory.** Coding was descriptive and conducted by a single rater with no inter-rater reliability, and threats included model drift, seed sensitivity, cohort specificity and motif dependence.

## Games as a literacy practice

The paper argues that [[generative-ai|text-to-image]] systems do more than render prompts: they circulate defaults for what a role or identity looks like, through pose, camera, costume, props and setting, and those defaults travel into education, advertising and policy materials. Almost a decade of audits has shown that models routinely encode and amplify social disparities, but audits tell us what a model produced and do not by themselves cultivate the literacy to ask how productions participate in stereotype assembly. The proposed answer is to apprentice non-specialists into making warranted, testable claims by treating outputs as cultural artifacts. Art-historical methods supply the itinerary: a Panofskian progression from form (composition, drapery, pose, light) to iconography (attributes, symbols, motifs) to context (historical conditions, power, labor). Play supplies the stance, low-stakes exploration and iterative hypothesis testing under constraints, with [[scaffolding|roles, constrained prompt actions and inspectable artifacts]] acting as guided-play supports that keep claims auditable rather than impressionistic. The paper positions the result as transferable [[active-learning|interaction patterns]] for [[ai-literacy]] and immersive settings, from virtual studios to annotated galleries.

## Phase 1 — Interpret: close looking with AI outputs

Interpret is a structured game of collaborative close looking that reads AI outputs alongside a canonical artwork, such as the Winged Victory of Samothrace or Judy Chicago's The Dinner Party. The instructor primer models the move from form to meaning, then teams work through an evidence sweep under five roles: the Curator sharpens the guiding question, the Formal Analyst leads on pose, framing, scale and light, the Iconographer links symbols to art-historical traditions, the Contextualist keeps gendered labor, class coding and colonial tropes in view, and the Archivist records observations verbatim. Scoring is diagnostic rather than competitive, with a maximum of ten points per round, and once the cap is reached scoring shifts to sharpening the clarity and warrant of claims. Students reported that the turn-based roles slowed impulsive exploration and forced them to ground observations, interpretations and hypotheses in concrete visual evidence, which allowed bias hypotheses such as the model tending to associate power with male figures to emerge directly from what was seen. Each session closes with a 150-200 word exit memo citing visual evidence from the canonical work and at least two AI outputs. This is [[critical-thinking|close looking]] made into [[student-engagement|structured inquiry]], where [[misconceptions|impressionistic]] readings have to be converted into claims a team can defend.

## Phase 2 — Interrogate: counter-intent prompting as artistic exploration

Interrogate reframes [[prompt-engineering]] as narrative construction and the model as a collaborator whose tendencies must be tested rather than a neutral tool. Round 1 fills an Evidence Grid with at least six examples drawn from at least three domains, visual culture, literature, iconography, language or contextual frames, each dated and culturally located, then synthesizes a 2-3 sentence Stereotype Card as the baseline to challenge. Round 2 builds a Semiotic Palette of two to three Narrative Intents such as agency, solidarity, expertise, care or joy, and drafts a Counter-Intent Card stating representational goals. Round 3 assembles the four-slot Prompt Row, Subject (indirect), Action/Scene, Style/Aesthetic and Composition/Lighting, where every descriptor must be traceable to the Evidence Grid or Counter-Intent Card. Round 4 generates a direct-label baseline image, the counter-intent prompt and at least two single-slot variations, a minimum set of four, with prompts, outputs and model metadata logged under unique identifiers for auditability. Teams adopt Kehinde Wiley's aesthetic of ornament and monumental scale as a counter-stereotypical semiotics for reframing roles such as the housekeeper, using flowers and vibrant color. The pilot's cross-model comparison is the [[ai-education|evidence]] that counter-intents get absorbed or resisted rather than applied: DALL·E and Midjourney depicted both genders though skewed toward women of color, Stable Diffusion produced only female figures, and all three models emphasized age, influenced by the phrase lifetime of domestic labor. Where counter-intents were diluted, students learned to read the failure as structural tendency rather than glitch.

## Phase 3 — Expose: creative misuse through paired prompts

Expose treats prompt engineering as critical play, deliberately bending expected uses of the model to expose hidden tendencies. The round runs in seven stages: selecting a bias and critical lens, choosing and locking a culturally saturated theme, defining at least three axes of visual opposition such as authority versus subordination or professionalism versus aestheticization, introducing a constant symbolic motif and locking it, applying the BiasSlot rule, constructing prompts through the structured template, then generating, comparing and reflecting. Under BiasSlot exactly one bias-bearing cue changes while all other descriptors and the motif remain fixed, so the effect of the chosen variable is isolated. Each team produces three paired prompts, six images in total, logged verbatim with model parameters where possible. The pilot used the carpenter as a paradigmatically masculine-coded theme with ballet as the constant motif, and the resulting pairs consistently contrasted competent, well-equipped male carpenters with aestheticized female counterparts posed decoratively with flowing hair or dramatic lighting, images closely resembling advertising tropes or over-beautified stock photography. Reading the pair along axes of authority versus aestheticization and safety versus spectacle showed how the model codes labor and embodiment differently by gender. The paper's contribution is a [[scaffolding|sequence]] an [[arts-design-and-media-education|arts]] instructor can run without coding expertise: begin with close looking, require a Counter-Intent Card, lock a constant motif, enforce BiasSlot, and keep scoring diagnostic rather than competitive.

## What this means for practice

- **Instructors.** Run the three phases in order, because Phase 1 cultivates interpretive discipline, Phase 2 teaches converting critique into counter-intentional design, and Phase 3 extends this into creative misuse.
- **Instructors.** Enforce the BiasSlot rule and lock a constant motif, since these constraints are what isolate a single bias-bearing cue and make the comparison legible.
- **Instructors.** Keep scoring diagnostic rather than competitive, and supply a short glossary mapping critical terms to visual cues so students can move from description to explanation.
- **Curriculum designers.** Log model/version, seed and prompt ID for every generation, and treat provenance logs as part of the assignment rather than an administrative extra.
- **Curriculum designers.** Provide instructor-run generation or a pre-generated set from a single reliable model where account creation or image caps would otherwise make teams unequal.

## Limitations

- Coding was descriptive and conducted by a single rater with no inter-rater reliability, so the authors present the findings as illustrative rather than confirmatory and plan a second-coder pass.
- The pilot cohort was 15 fine-arts students with little or no coding background at a single institution, taught by the author, so generalization beyond that cohort is bound.
- The intervention ran on paid platform versions, so free plans bring caps on generated images that may force teams to be selective in experimentation.
- For sensitive identity prompts the authors recommend instructor-run generation to maintain safety oversight and prevent exposure to harmful content.
- Threats to validity are named as model drift, seed sensitivity, cohort specificity and motif dependence, with the corresponding fixes planned rather than completed in this paper.

## Citation

Foka, A. (2026). [Playing Bias: Epistemic Games for Interpreting Text-to-Image Models](https://arxiv.org/abs/2610.32159). *arXiv preprint*.
