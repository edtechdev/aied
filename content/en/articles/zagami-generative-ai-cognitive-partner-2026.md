---
title: "Generative AI as a cognitive partner: personalised GPTs and differentiated learning in undergraduate teacher education"
created: "2026-10-18T21:25:57-04:00"
updated: "2026-10-18T21:25:57-04:00"
type: article
sources: ['raw/papers/10.1007_s11423-026-10746-4.md']
confidence: medium
page_kind: [framework, evaluation]
research_method: [action design research]
level: [teacher education, undergraduate]
audience: [instructors, faculty developers, researchers]
pedagogy: [scaffolding, metacognition, self-regulated-learning, distributed-cognition]
technology: [generative-ai, personalized-learning, pedagogical-agent, conversational-ai, prompt-engineering]
methods: [design-based-research, mixed-methods-research]
foundations: [ai-literacy, teacher-ai-competency]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-18"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Zagami (2026) reports a one-semester [[design-based-research|design-based]] study in which fourteen pre-service Digital Technologies teachers in an Australian Bachelor of Education (Secondary) configured and used personalized GPT agents inside the Canvas LMS, working through weekly Prompt–Reflect–Refine tasks that generated roughly 7,000 [[student-ai-interaction|AI interaction]]s. Hybrid inductive–deductive thematic analysis of those logs, weekly reflective journals, assessed lesson and assessment artifacts, and tutorial-group discussions identified four recurring functions: conceptual tutor, co-designer, reflective mirror, and cognitive challenger. The paper's central claim is a design claim rather than a capability claim — the agents became educationally meaningful because a structured [[scaffolding|scaffolded]] cycle required students to question, refine, and evaluate AI output against [[tpack|TPACK]] and AITSL standards, not because of what the underlying model could do. Prompt revisions per session rose from 1.8 in Week 2 to 4.6 in Week 11, and 82% of final artifacts mapped content descriptors, assessment tasks and success criteria to those professional standards. Students also reported over-reliance, factual drift, and culturally narrow examples, and the author presents the findings as small-scale, single-site, and partly [[self-report-measures|self-reported]].

## Key Findings

1. Four partnership functions recurred rather than one. The analysis identified a [[pedagogical-agent|cognitive partner]] typology of conceptual tutor (simplifying explanations and analogies for novices), co-designer (collaborative lesson and assessment planning), reflective mirror (prompting [[self-assessment]]), and cognitive challenger (debating ideas and simulating counter-arguments for advanced learners).
2. The pedagogical design, not the model, carried the educational value. Zagami attributes the observed benefit to the interaction between [[agency|learner agency]], the structured Prompt–Reflect–Refine cycle, and personalized dialogue in authentic coursework, and describes the intervention at platform and instructional-design level rather than by a fixed model version.
3. Engagement deepened across the semester. Mean prompt revisions per session rose from 1.8 in Week 2 to 4.6 in Week 11, and NVivo analysis found a 47% increase in references to adaptation, tailoring, and personalization.
4. Artifact quality moved on professional standards. Rubric means against AITSL Graduate Standards rose from 2.8 to 4.2 of 5 for content and teaching strategies (+50%), 3.1 to 4.5 for plan and structure (+45%), 2.9 to 4.3 for [[formative-assessment|assessment for learning]] (+48%), and 3.6 to 4.7 for use of ICT (+31%); 82% of final artifacts mapped content descriptors, assessment tasks and success criteria to Standards 2.1, 2.2, and 3.2.
5. Perceived gains were high but self-reported. On a 1–5 scale (n = 14) improved conceptual understanding scored 4.6 (SD 0.5) with 93% agreeing, personalized learning experience 4.5 (0.7) at 90%, enhanced reflection and self-awareness 4.4 (0.6) at 89%, and confidence in using AI ethically 4.1 (0.8) at 82%.
6. Configuration was the personalization mechanism. Each agent was built from system instructions plus uploaded course documentation and participant-specific context — curriculum focus, teaching context, pedagogical preferences, assessment artifacts, and reflective journals — so [[personalized-learning|personalization]] was declared by the learner rather than inferred by the system.
7. The study names its own risks. Students reported over-reliance, minor factual drift in curriculum detail and terminology, [[culturally-relevant-pedagogy|culturally narrow examples]] that rarely incorporated Indigenous or localized contexts unless explicitly requested, prompt fatigue mid-semester, and unease about where chat data was stored.

## A typology that tracks expertise, not a fixed menu

The four roles are the study's headline contribution, and their significance lies in how they were distributed. Lower-experience students used the agents as conceptual tutors, asking for simplified analogies and incremental steps; one described a binary-data explanation built from LEGO blocks before requesting technical detail. Students with stronger technical backgrounds used the same agents as professional collaborators, prompting one to critique a Year 9 programming lesson plan and then co-design a formative checkpoint and a reflection form. The paper reads this progression through the [[sociocultural-learning|zone of proximal development]] and [[distributed-cognition|distributed cognition]], with the agent acting as a cognitive extension rather than an authority. Crucially, Zagami argues the roles emerged from a deliberately designed intervention rather than from autonomous agent capability, and therefore describes them as dynamic patterns of partnership rather than fixed categories of AI use. That distinction matters for [[teacher-education|teacher educators]]: if the roles are produced by design and by learner expertise, they are something a program can scaffold for rather than something a tool delivers.

## Scaffolding that requires judgment

The intervention refused the simplest integration. Every week, students had to Prompt (formulate a task), Reflect (evaluate the response against TPACK and the AITSL Standards), and Refine (modify the artifact or prompt and document the reasoning). Both requirements are what separate this from unscaffolded access: judgment was practiced rather than bypassed. The evidence for deepening engagement is behavioral, in the interaction logs — revisions per session rising from 1.8 to 4.6 — and qualitative, in a shift from requesting answers to requesting critique, one student moving from copying suggestions to predicting and challenging the agent's responses. The paper also frames personalization fields as a response to cohort diversity: students encoded subject area, teaching context, and pedagogical orientation into their own agent, which addresses variation in digital literacy and [[prior-knowledge|prior knowledge]] without lowering the pedagogical standard for anyone. The [[metacognition|metacognitive]] subthemes the author codes from journals map onto a planning–monitoring–regulation–evaluation cycle, with early entries descriptive and later entries showing strategic awareness, such as one student noticing how a temperature setting changed the creativity of responses.

## What the standards data does and does not show

The artifact results are the study's strongest quantitative signal and its most confounded. Early submissions presented activity sequences without explicit alignment to outcomes or assessment; by the final assessment 82% of artifacts mapped content descriptors, assessment tasks, and success criteria. The author is explicit that this should be read as improvement within the implemented design rather than proof that AI produced the change, since some gains may reflect increased structured reflection and revision. The design also cannot separate the Prompt–Reflect–Refine cycle from the personalized agent, because students received both together. Two further boundaries matter for anyone reusing the findings. The agents ran on OpenAI's GPT-4-class models through the ChatGPT Custom GPT platform, and because the vendor updates those models the author deliberately reports the intervention at platform and instructional-design level; a replication should target the workflow, system instructions, contextual document base, and dialogue cycle rather than an immutable model. And the counter-evidence is candid: students recorded over-reliance ("Sometimes I relied on it too much before thinking for myself") and the ease of accepting confident-sounding output.

## What this means for practice

- **Teacher educators.** Treat the Prompt–Reflect–Refine cycle, not the tool, as the transferable artifact: require an evaluation step against a named framework and a documented refinement, so that judgment is exercised on every AI interaction rather than only when something looks wrong.
- **Instructional designers.** Let learners declare their own context. Encoding curriculum focus, teaching context, and pedagogical orientation into the agent shifted personalization from a system inference to an explicit professional choice, and it costs only a configuration step.
- **Faculty developers.** Expect proficiency to move in both directions within one cohort. Novices used the agents as conceptual tutors while experienced students used them as critics and co-designers, so a single fixed instruction for how to use AI will under-serve at least one group.
- **Researchers.** Report the model vintage and keep the claim at design level. This study ran on GPT-4-class models and says so, which is what makes its design conclusions still usable after the model underneath it changed.
- **Learners.** The study's own warnings came from students: verify curriculum detail rather than trusting fluent terminology, and notice when reliance precedes thinking.

## Limitations

- The study is a small single cohort (fourteen students) in one disciplinary domain at one institution, so outcomes may differ in humanities or social-science contexts, and the author presents the findings as exploratory and context-bound.
- Much of the evidence is participants' accounts and researcher interpretation of interaction traces rather than direct causal measures of learning gain, and some improvement may reflect structured reflection and revision rather than AI scaffolding.
- The intervention ran on OpenAI's GPT-4-class models through the ChatGPT Custom GPT platform; the author describes it at platform level precisely because model updates make a version-pinned replication impossible.
- [[cognitive-offloading|Cognitive load]] was not measured directly, so the complexity-management findings are reported strategies rather than proof of reduced intrinsic or extraneous load.
- The artifact comparison is a within-design pre/post of rubric scores with no comparison condition, so it cannot separate the effect of the agents from the effect of the reflection routine or from ordinary coursework improvement.

## Citation

Zagami, J. (2026). [*Generative AI as a cognitive partner: personalised GPTs and differentiated learning in undergraduate teacher education*](https://doi.org/10.1007/s11423-026-10746-4). *Educational Technology Research and Development*.
