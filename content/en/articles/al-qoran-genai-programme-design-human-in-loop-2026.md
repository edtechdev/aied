---
title: "Generative AI for programme and module design: the need for human in the loop"
created: "2026-11-27T09:13:21-05:00"
updated: "2026-11-27T09:45:00-05:00"
published: "2026-11-25"
type: article
authors: ["Lamis F. Al-Qora'n", "Amro Al-Said Ahmad", "Neil A. Gordon", "Ed de Quincey"]
venue: "Frontiers in Education, 11, 1961190"
evidence_context: educational
foundations: [curriculum-design, learning-design, human-ai-collaboration]
pedagogy: [pedagogy, professional-training]
technology: [generative-ai, llm, human-in-the-loop-ai]
institutions: [governance]
methods: [qualitative-research]
discipline: [cs education]
level: [graduate, higher ed]
audience: [curriculum designers, instructors, administrators]
page_kind: [design case]
research_method: [case study]
sources: ["raw/papers/al-qoran-genai-programme-design-human-in-loop-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Al-Qora'n and colleagues (2026) examine two cases of [[generative-ai|GenAI]]-supported [[curriculum-design]] in [[higher-ed|higher education]]: a [[graduate-education|postgraduate computing]] program redesign at Keele University with Microsoft Copilot, and the first-time design of a master's Software Architecture module at Philadelphia University in Jordan with ChatGPT. Their cross-case finding is that the tools were most useful at the ideation and drafting stage — generating topic clusters, module titles, student-facing summaries, candidate standards links, syllabi, projects and exercises — and least reliable where [[evaluative-judgment|academic judgment]], [[assessment-validity|assessment validity]] and contextual interpretation were required. The paper's contribution is a [[human-in-the-loop-ai|human-in-the-loop]] account of curriculum work, in which GenAI produces candidate artifacts and academic staff decide what becomes curriculum.

## Key Findings
1. **GenAI was strongest at ideation and drafting.** In both cases it generated options, broadened content coverage and helped staff reflect on program and module structure.
2. **It was weakest at pedagogically precise artifacts.** Final learning outcomes, assessment specifications and constructive alignment needed academic revision in both cases.
3. **Standards mapping produced candidates, not conclusions.** Copilot suggested links to QAA benchmark statements, [[sociocultural-learning|apprenticeship]] standards and CyBOK, but every suggested link required verification for accuracy and curriculum fit.
4. **Human editing was needed for tone and consistency.** Copilot's student-facing summaries used repeated promotional [[metaphors-and-analogies|metaphors]] such as "embark on a journey" and "dive into," which became unsuitable when read across 11 module descriptions.
5. **The Keele time estimate was task-specific.** Preparing an 80-word module summary was estimated at about 60 minutes without GenAI and about 15 minutes with Copilot; across 11 summaries that is 660 minutes versus 165 minutes, a reported saving of 495 minutes (8.25 hours).
6. **The estimate was retrospective and partial.** It concerned one author's working time, included his review and adaptation, and excluded colleagues' review, disciplinary consultation, standards verification and institutional approval.
7. **Both cases converged on supervised partnership.** The final curriculum depended less on the tool than on how outputs were prompted, evaluated, revised, localized and validated.

## The two cases

At Keele, Copilot supported a program-level redesign across a postgraduate computing portfolio. It generated candidate topic clusters, module titles, student-facing summaries and possible links to external standards. Academic colleagues and the institution's teaching and learning unit reviewed the wording for clarity, disciplinary accuracy, contextual suitability and consistency of tone; a university validation panel including an external academic member approved the result. The authors describe Copilot as useful for producing options and for surfacing standards that staff might otherwise have had to research from scratch.

At Philadelphia University, ChatGPT supported module-level design where no local syllabus existed. It helped structure the syllabus, identify topic sequences, suggest project themes and case-study scenarios, generate weekly exercises and update content toward contemporary practice such as cloud architecture, microservices and architecture decision records. The module leader then revised the sequence for master's-level difficulty, feasibility and alignment with program context, and a syllabus committee approved the documentation.

## What the cross-case comparison adds

The comparison is not a controlled test, and the paper does not present it as one. Its value is in naming where the tool's contribution stops. Across both cases, the most useful outputs were broad organizational suggestions; the least useful were artifacts that required constructive alignment between outcomes, activities and assessment. That pattern is consistent with the wider [[learning-design]] literature: generative models are good at producing plausible structures and poor at warranting that a structure teaches what it claims to teach.

Context also mattered. Copilot operated inside a UK institutional ecosystem of Microsoft 365, UK standards and quality-assurance conventions. ChatGPT was used in a Jordanian setting where the curriculum had to be localized to the student profile, institutional requirements and the appropriate level of master's study. The same tool would not have produced the same curriculum in both places, and the paper treats that as a design finding rather than a limitation.

## What this means for practice

- **Curriculum designers.** Use GenAI to widen the option space, then make the selection and alignment decisions yourself. Treat every generated outcome, assessment and standards link as a candidate artifact.
- **Instructors.** Keep a review step proportionate to the artifact. Titles and summaries need light editing; learning outcomes and assessment tasks need disciplinary verification and constructive-alignment checks.
- **Administrators.** Build human-in-the-loop review into program approval rather than assuming it. The cases show review doing real work — catching tone drift, implausible sequencing and unverified standards claims.
- **Developers.** Design for candidate generation with provenance. A tool that shows which standard or outcome a suggestion maps to is more useful than one that produces a finished-sounding document.

## Limitations

- Two case studies in two institutions, with no comparison against curriculum designed without GenAI.
- The Keele time saving is a retrospective self-estimate by one author, excludes colleagues' review time and covers only module summaries.
- The Philadelphia account relies on the module leader's retrospective recollection alongside retained materials, not on preserved original outputs.
- The study did not demonstrate that the resulting curricula were educationally better than alternatives.
- Both cases concern computing programs, and the authors note that disciplines with different accreditation and content structures may see different patterns.

## Citation

Al-Qora'n, L. F., Al-Said Ahmad, A., Gordon, N. A., & de Quincey, E. (2026). [*Generative AI for programme and module design: the need for human in the loop*](https://doi.org/10.3389/feduc.2026.1961190). *Frontiers in Education, 11*, 1961190.
