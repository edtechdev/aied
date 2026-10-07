---
title: "Preservice Early Childhood Educators' Engagement with Generative AI in Science Activity Design: The Case of Magnetism"
created: "2026-10-07T09:30:00-04:00"
updated: "2026-10-07T09:30:00-04:00"
type: article
foundations: [ai-literacy, teacher-ai-competency, teacher-role, human-ai-collaboration, critical-thinking]
pedagogy: [activity-theory-aied, sociocultural-learning, scaffolding, pedagogy, inquiry-based-learning]
technology: [generative-ai, llm, prompt-engineering]
methods: [mixed-methods-research, qualitative-research, quantitative-research]
ethics: [trust, trust-calibration, ethics]
research_method: [survey, thematic analysis]
discipline: [science education]
level: [preschool, teacher education]
audience: [instructors, researchers]
page_kind: [evaluation]
sources: ['raw/papers/preservice-early-childhood-genai-magnetism-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-07"
    agent: hermes-agent
---

> **Synthesis:** Efthimiou and Plakitsi ask how [[generative-ai|generative AI]] and [[llm|large language models]] mediate the science-design work of 131 preservice [[early-childhood-elementary-ai-education|early childhood]] educators at the University of Ioannina, who built magnetism activities across a 90-minute intervention. Framed by [[activity-theory-aied|Cultural-Historical Activity Theory]] and the didactic transformation of abstract physics, the [[mixed-methods-research|mixed-methods study]] pairs a 12-item Likert reflection sheet (Cronbach's α = .863) with open-ended reflections analyzed thematically. Participants valued the tools for saving time and structuring thought but trusted them least of all twelve items, and doubted their accuracy and fit for four- to six-year-olds. The authors conclude that [[prompt-engineering|prompt-writing]] skill is not the goal; teacher education should instead build critical pedagogical filtering and keep didactic transformation a human responsibility.

## Key Findings
1. Preservice educators rated logistical help highest: saving time (M = 3.95, SD = 0.87), understanding responses (M = 3.90, SD = 0.75), and organizing their thinking (M = 3.64, SD = 0.90) on a five-point scale.
2. Epistemic [[trust]] scored lowest of all twelve items (M = 3.08, SD = 0.82), alongside perceived accuracy (M = 3.18, SD = 0.83) and consistency (M = 3.26, SD = 0.78).
3. Perceived utility differed significantly by platform, F(4, 126) = 6.52, p < .001, η² = .17, with tools offering structured task breakdowns rated higher than general conversational models.
4. Trust did not differ by platform, F(4, 126) = 1.65, p = .166, η² = .05, suggesting skepticism was stable across ChatGPT, Gemini, DeepSeek, Meta AI, and Copilot.
5. Thematic analysis found divergent ideation (58%), workflow efficiency (24%), and structural organization (18%) as the most useful elements of AI support.
6. Developmental inappropriateness (45%), vagueness and repetition (32%), and implementation feasibility (23%) were the most cited limitations.
7. Participants treated AI as a brainstorming artifact, keeping responsibility for didactic transformation and the classroom fit of activities themselves.

## Algorithmic mediation is valued, but trust is withheld
The 12-item instrument split sharply. The highest-rated dimensions were logistical: saving time (M = 3.95, SD = 0.87), clarity of responses (M = 3.90, SD = 0.75), and organizing thought (M = 3.64, SD = 0.90). The lowest were epistemic: "I can trust the LLM as a supportive tool in teaching" (M = 3.08, SD = 0.82), perceived accuracy (M = 3.18, SD = 0.83), and consistency (M = 3.26, SD = 0.78). This pattern — a tool that relieves the blank-page problem while failing to earn confidence — is what the authors describe as a disconnect between algorithmic mediation and [[trust-calibration|calibrated trust]]. It echoes a recurring theme in the [[ai-literacy|AI literacy]] literature, where educators accept generative tools as drafting aids but reserve judgment about their pedagogical authority. For novices still forming a professional identity, the instrument suggests they can separate workflow help from pedagogical authority.

## Didactic transformation remains a human responsibility
Thematic analysis of open-ended reflections produced a mirror image. The most useful elements were divergent ideation (58%), workflow efficiency (24%), and structural organization (18%). The most problematic were developmental inappropriateness (45%) — content pitched above preschool cognition — vagueness and repetition (32%), and implementation feasibility (23%), ideas that ignored real classroom constraints. The authors read this through [[sociocultural-learning|sociocultural]] and [[activity-theory-aied|activity-theoretic]] lenses: an LLM is a cognitive mediator, not a content authority, and its suggestions must be recontextualized for a specific class. Translating magnetic attraction into a play-based inquiry for five-year-olds demands context-sensitivity the models do not supply. Participants acted as the subjects of the activity system, filtering machine output rather than receiving it, which is why the authors frame didactic transformation as work that cannot be delegated.

## Platform choice shapes utility, not skepticism
Two one-way analyses of variance tested whether the model used mattered. Perceived utility differed significantly across ChatGPT, Gemini, DeepSeek, Meta AI, and Copilot, F(4, 126) = 6.52, p < .001, η² = .17, with post-hoc Tukey HSD tests favoring platforms that broke tasks into structured steps. Trust did not: F(4, 126) = 1.65, p = .166, η² = .05. Because skepticism was stable across five different systems, the authors argue it reflects a general limitation in how current models handle early childhood context rather than a quirk of one product. That is a useful counterpoint to [[technology-acceptance-model|adoption-focused]] framings that treat tool quality as the main lever; here the bottleneck is pedagogical, and it travels with the task rather than the vendor.

## Training that builds pedagogical filtering
The authors argue against training that centers [[prompt-engineering|prompt-writing]] tricks. If AI reliably [[scaffolding|scaffolds]] planning but cannot judge developmental fit, then [[teacher-ai-competency|teacher competence]] should include dismantling AI output: spotting developmentally inappropriate elements, checking scientific accuracy, and rebuilding an activity around children's reasoning. That is a [[critical-thinking]] and [[pedagogy|pedagogical]] skill, not a technical one. The magnetism case makes the point concrete because abstract physics is unusually hard to transform, but the authors expect the same filtering demand in any subject where the model lacks classroom context. Their recommendation is to teach students to challenge the machine, not merely to operate it.

## What this means for practice
- **Instructors.** Assign lesson-design tasks that require trainees to critique and rebuild AI-generated activities for developmental appropriateness rather than submit them unchanged, so students practice the filtering this study found essential.
- **Instructors.** Have trainees compare outputs from several models on the same task and justify which proposal best fits their [[learners]], since utility varied by platform while trust did not.
- **Instructors.** Separate explicitly what AI can do (generate structure and divergent ideas) from what it cannot (judge age-appropriate, classroom-feasible pedagogy), and assess that judgment.
- **Instructional designers.** Build AI-design workshops around developmental-appropriateness and feasibility checklists, mirroring the study's checklist for developmental fit, fabricated data, and physical safety risks.
- **Researchers.** Move from perception surveys to observational studies that follow an AI-generated activity into a real classroom.

## Limitations
- The sample is 131 undergraduate [[teacher-education|preservice teachers]] at a single Greek university, all enrolled in one fifth-semester [[science-education]] workshop, so the findings reflect one program and one national [[curriculum-design|curriculum]] context.
- The design is cross-sectional and [[self-report-measures|self-report]]: perceptions were captured once, immediately after a 90-minute intervention, with no follow-up as participants moved into classrooms.
- Outcomes rest on participants' own reflections about AI; the lesson plans were never observed in implementation, so the gap between intended and enacted activity is untested.
- The focused topic — magnetism — is an unusually hard didactic transformation, which the authors note may have exaggerated the developmental-appropriateness problem relative to more concrete subjects.

## Citation

Efthimiou, G., & Plakitsi, K. (2026). [Preservice Early Childhood Educators' Engagement with Generative AI in Science Activity Design: The Case of Magnetism](https://doi.org/10.35542/osf.io/m5erf_v1). EdArXiv.