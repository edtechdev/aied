---
title: "Designing Authentic Assessments with Generative AI: A Pilot Study of Assessment Authentifire in Higher Education"
created: "2026-09-22T09:29:10-04:00"
updated: "2026-09-22T09:29:10-04:00"
type: article
published: "2026-02-23"
sources: ['raw/papers/authentic-assessments-generative-ai-pilot-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [case study]
discipline: [stem education]
level: [higher ed]
audience: [instructors, curriculum designers, faculty developers]
foundations: [human-ai-collaboration, academic-integrity]
pedagogy: [scaffolding, situated-learning]
technology: [generative-ai, prompt-engineering]
assessment: [authentic-assessment, assessment-validity]
methods: [qualitative-research, ai-ed-evaluation]
ethics: [ai-sycophancy, hallucination-risk, universal-design-for-learning]
connected_faqs: [redesign-assessment-ai-era, faculty-development-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
---

> **Synthesis:** RMIT University built Assessment Authentifire, a custom GPT-4.1 deployed inside its secure Virtual Assistant for [[edtech-platform|Learning platform]], to draft [[authentic-assessment|authentic assessments]] from a course guide, and piloted it with eight experienced course coordinators across STEM and Health. Each coordinator used it on a course they were currently teaching, critiqued the output, and contributed practice-informed revisions as a co-investigator. Thematic and cross-case analysis found the tool worked as an ideation partner that strengthened design and built [[teacher-ai-competency|assessment literacy]], while its outputs repeatedly missed disciplinary context and topic sequencing. One coordinator met fabricated references and unrealistic time estimates that survived repeated [[prompt-engineering|prompting]]. All eight refused end-to-end automation, locating [[evaluative-judgment|academic judgment]] rather than the model as the thing that makes an assessment fit for a discipline.

## Key Findings
1. **All eight coordinators would use the tool; none would use it as an automaton.** They described it as a "partner," "thinking tool," and "insightful and efficient companion," and each retained expert oversight of the finished assessment.
2. **It drafts six assessment components from a course guide using more than 260 lines of built-in prompts:** Assessment Overview, Assessment Task, Assessment Criteria, Timeline of Activities, Submission Instructions, and Rubrics.
3. **[[hallucination-risk|Hallucination]] was the hardest failure.** A [[chemistry-education|chemistry]] coordinator's output contained "inaccurate or hallucinated references," and both those references and unrealistic time estimates persisted through multiple iterations, requiring substantial academic revision.
4. **Disciplinary rigor and context were the recurring gap.** Coordinators reported generic or irrelevant content, ignored topic sequencing — one generated task asked about [[ethics]] before the topic was taught — and a rubric missing for a presentation component.
5. **The tool modeled practice well enough to build assessment literacy.** Its rubrics, authentic contexts, and structured timelines prompted reflection on design choices, which the authors map onto cognitive [[sociocultural-learning|apprenticeship]]: modeling, coaching, scaffolding, articulation, reflection, and exploration.
6. **Academic time, not capability, is the adoption risk.** Several coordinators said the precise prompting and revision the tool needs could cost more time than developing the assessment directly.

## Where Authentifire added value
Across the eight cases the contributions were consistent: a "quality first draft" that removed what the authors call the terror of the blank page, real-world problem scenarios — consulting engineers analyzing a thermodynamic system, junior developers delivering a client-facing application, laboratory scientists reasoning through patient scenarios — and clear week-by-week [[scaffolding]] with formative checkpoints. Coordinators valued the rubric most. A mathematical modeling coordinator was struck that the generated rubric rewarded teams that engaged with the modeling process rather than only the final artifact, and a pathology coordinator reported measurable time savings in planning and writing alongside stronger alignment with course learning outcomes. The tool also helped communicate purpose by articulating why a task mattered to future professional practice, and its flexibility options — topic choice, submission format, approach — were read as [[universal-design-for-learning|Universal Design for Learning]] support in practice.

## Disciplinary rigor and context stayed with the humans
All eight coordinators kept accountability: they prompted, probed, revised, balanced support against student autonomy, and set final timelines. The tool's failures clustered in exactly the areas that decide whether a task is authentic — the currency and specificity of the problem, the fit with the cohort, and alignment with accreditation standards. A course serving nearly 500 students received options that do not scale, such as letting each student choose their own case study, and a marking model that replaced raw sub-task marks with weightings against the coordinator's practice. The paper is explicit that Authentifire lacked [[rag|retrieval-augmented generation]] and real-time web search at the time of writing, a structural reason for stale problem contexts, and it warns that generative models are [[ai-sycophancy|sycophantic]]: introduce an incorrect [[pedagogy|pedagogical]] premise and the tool may defer to it, reinforcing flawed assumptions about [[assessment-validity|assessment design]].

## Where the capability building happened
The paper's more interesting claim is that the tool developed the educators, not only the documents. Assessment literacy — the knowledge, skills, and attitudes needed to understand assessment purpose and process — grew as coordinators critiqued outputs against disciplinary standards, and the authors read that process through [[situated-learning|situated cognition]] and the Cognitive Apprenticeship Model, positioning the tool as a non-human "significant other." They place the collaboration in Kehler et al.'s Generative Collective Intelligence frame, with AI as an amplifier of human [[creativity]] and reasoning rather than a replacement. That framing carries a design constraint the paper states directly: if refining AI-generated assessments takes longer than designing them from scratch, academics will abandon the tool, which makes revision efficiency part of [[curriculum-design]], not a convenience around it.

## What this means for practice
- **Instructors.** Treat the tool as a drafting partner with a defined stopping point. It produced usable overviews, tasks, criteria, timelines, and rubrics here, but only after coordinators supplied cohort size, existing assessments, past student feedback, and scheduling details the course guide did not carry.
- **Course coordinators.** Budget the revision time into the workflow. One coordinator cut a suggested nine-activity, 10.5-hour plan to six hours and replaced the generated criteria outright; where that editing load exceeds designing from scratch, the time saving disappears.
- **Faculty developers.** Treat assessment literacy as an outcome to design for, not an assumption. These coordinators grew their [[design-thinking|design thinking]] by critiquing generated drafts against disciplinary standards, so build [[educational-development|professional development]] around structured critique rather than tool training.
- **Administrators.** Check references before anything reaches students. Fabricated citations and unrealistic time estimates survived repeated prompting in one case, and the university's web search tool intended to reduce hallucination was still in development.

## Limitations
- Eight course coordinators from STEM and Health at one Australian university, recruited through the first author's pre-existing professional relationships, were the only users; no students evaluated the generated assessments.
- No comparative condition: the study did not test Authentifire-generated assessments against assessments designed solely by academics.
- Authentifire ran on GPT-4.1 without retrieval-augmented generation or real-time web search, and the host platform lacked features available in commercial products.
- Generated assessments were produced for evaluation only and never deployed, so nothing here shows how they perform in marking or in student learning.

## Connected Concepts
- [[authentic-assessment]]
- [[assessment-validity]]
- [[generative-ai]]
- [[evaluative-judgment]]
- [[human-ai-collaboration]]
- [[teacher-ai-competency]]
- [[universal-design-for-learning]]
- [[hallucination-risk]]
- [[prompt-engineering]]
- [[curriculum-design]]
- [[higher-ed]]

## Connected Articles
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection: Redesigning Authentic Assessment in an AI-Mediated World
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsidering the Use of Oral Exams and Assessments: An Old Way to Move Into a New Future
- [[dollinger-equitable-assessment-ai-2026]] — Reimagining Success and Failure: Equitable Assessment Practices in an Age of Artificial Intelligence
- [[genai-assessment-literacy-scale-2026]] — Development and validation of the generative AI assessment literacy scale for higher education students
- [[ai-agents-joyful-assessment-third-space-2026]] — AI Agents, Joyful Assessment, and Third Space: Rethinking Assessment in the GenAI Era
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]] — Can AI Evaluate Assessment? A Study of Large Language Model Meta-Assessment Performance
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Efficiency at what cost? Salvaging constructive alignment from the GenAI hype

## Citation
Paula, A. P., Fayek, H., Kalra, S., Date, A., Troynikov, O., Lam, M., et al. (2026). [Designing Authentic Assessments with Generative AI: A Pilot Study of Assessment Authentifire in Higher Education](https://osf.io/tydbj/). EdArXiv preprint.
