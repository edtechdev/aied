---
title: "Rubrics and Generative AI: Towards Process-Based Assessment"
created: "2026-10-26T10:37:00-04:00"
updated: "2026-10-26T10:37:00-04:00"
type: article
published: "2026"
sources: ['raw/papers/rubrics-genai-process-based-assessment-2026.md']
confidence: medium
page_kind: [framework]
research_method: [theoretical analysis]
discipline: [information technology]
audience: [instructors, curriculum designers, faculty developers, researchers]
level: [higher ed]
pedagogy: [scaffolding, critical-pedagogy]
technology: [generative-ai]
assessment: [assessment, process-oriented-assessment]
methods: [research-methods-aied]
institutions: []
ethics: [ethics, ai-use-disclosure]
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-26"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Oviedo and Díaz (2026) argue that [[generative-ai|generative AI]] invalidates [[assessment]] instruments whose validity rested on the final product, and propose a shift to a pedagogy of the process. Grounding the proposal in Biggs's 3P model, they identify three dimensions for rubric design: human agency and critical supervision, dialogic [[scaffolding]] tied to [[prompt-engineering|prompt engineering]], and cognitive sovereignty grounded in [[academic-integrity|integrity]] and transparency. The contribution is a design framework for capturing the cognitive interaction between student and technology, not an empirical test of it.

## Key Findings

1. **Product-based rubrics no longer measure what they claim.** Because a generative model can produce a high-quality result on its own, an instrument scored only on the output can no longer distinguish the student's own competence from the model's contribution.
2. **The proposal reframes assessment as process.** Three critical grading dimensions are proposed: human agency and critical supervision, dialogic scaffolding, and cognitive sovereignty based on integrity and transparency.
3. **Biggs's 3P model supplies the structure.** Presage, process and product are re-read so that the process phase, previously the weakest measured, becomes the primary object of [[process-oriented-assessment|assessment]].
4. **Dialogic scaffolding is prompt work.** The second dimension treats the [[prompt-engineering|prompting]] dialogue as evidence of the student's thinking, and asks rubrics to make that dialogue visible rather than invisible.
5. **The aim is to curb cognitive externalization.** The authors frame grading the trajectory and the student's curatorial capacity, rather than the static result, as the way to reduce the risk of [[cognitive-offloading|cognitive offloading]].
6. **Rubrics become navigation maps.** The conclusion asks next-generation rubrics to act as guides for a productive human–AI symbiosis that secures academic honesty in the university's new digital ecosystem.
7. **The argument is theoretical.** The article presents design guidelines derived from the model and literature rather than a study of students using the rubrics.

## Why product-based rubrics fail with generative AI

The paper's diagnosis is about measurement, not about [[ethics]] alone. An assessment instrument whose validity depended on the final artifact assumes that the artifact was produced by the person being graded. Once a model can supply that artifact, the instrument measures something, but not the thing it was validated for. The authors treat this as a crisis of validity in traditional [[assessment]] models, and their response is to relocate the object of grading: what a student does while reaching the result, the decisions made about the tool, the prompts written and revised, and the judgment applied to the output. That relocation is what the 3P framing is for. Biggs's model distinguishes presage (what students bring), process (what students do) and product (what students produce), and the authors observe that the process phase has always been the hardest to grade and the easiest to skip. Generative AI makes skipping it indefensible, because the product phase is now the one the tool can own.

## The three dimensions and what they ask of a rubric

Human agency and critical supervision is the dimension that asks whether the student remained the author of the work: did they direct the tool, override it, or accept it? Dialogic scaffolding asks the rubric to read the [[prompt-engineering|prompting]] record as evidence of thinking, which turns an interaction log into an assessable trace. Cognitive sovereignty is the dimension that asks whether the student could have explained and defended the result without the tool, and it is the one that connects to [[academic-integrity|academic integrity]] rather than to tool use. The three are presented as critical grading dimensions rather than as a scoring scale, so the practical work of operationalizing them is left to the instructor. The article's stated conclusion is that such rubrics should function as navigation maps, which is a design ambition: a rubric that shows a student where they are in their own learning, not only how their output compares with a standard.

## What this means for practice

- **Instructors.** Rewrite rubrics so that at least one criterion reads the process: prompts written, versions compared, decisions to accept or reject a generated draft, and the reasoning recorded alongside the final artifact.
- **Faculty developers.** Treat prompt dialogue as assessable evidence in its own right. A revision history is a record of thinking, and grading it does not require new software.
- **Curriculum designers.** Build the process dimension into [[process-oriented-assessment|process-oriented assessment]] from the start rather than adding it as a disclosure requirement, which grades procedure rather than judgment.
- **Researchers.** The three dimensions are a hypothesis about what should be measured. They need operational definitions and a study of whether grading the process actually reduces [[cognitive-offloading|externalization]] rather than displacing it.

## Limitations

- **Theoretical, not empirical.** The article presents design guidelines grounded in Biggs's model and the literature; it reports no student data, no trial of the rubrics and no measured outcome.
- **No operational scoring instrument.** The three dimensions are stated as critical grading dimensions, and the article does not supply descriptors, levels or weighting that an instructor could apply directly.
- **The 3P model is used as a frame, not tested.** The argument assumes presage, process and product map onto the AI-mediated task in a useful way, which is a premise the paper defends by reasoning rather than evidence.
- **Discipline scope is unstated.** The discussion is written for [[higher-ed|higher education]] generally, and the examples and the risk of [[cognitive-offloading|externalization]] may not transfer equally across fields.

## Citation

Oviedo, S. E., & Díaz, D. (2026). [Rúbricas e IA generativa: hacia una evaluación por procesos](https://revistas.unlp.edu.ar/JAIIO/article/view/22299). *JAIIO, Jornadas Argentinas de Informática*.
