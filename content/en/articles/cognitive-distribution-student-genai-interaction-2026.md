---
title: "Cognitive Distribution in Student-GenAI Interaction: A Process Framework from Self-Directed ChatGPT Use in Research Tasks"
created: "2026-09-30T09:09:07-04:00"
updated: "2026-09-30T09:09:07-04:00"
type: article
sources: ['raw/papers/cognitive-distribution-student-genai-interaction-2026.md']
confidence: high
published: "2026"
page_kind: [framework]
research_method: [case study, survey]
discipline: [engineering education]
level: [higher ed, undergraduate]
audience: [instructors, researchers]
foundations: [human-ai-collaboration, cognitive-offloading, critical-thinking, ai-literacy, agency, theories-and-frameworks]
pedagogy: [student-ai-interaction, distributed-cognition, metacognition, self-directed-learning, transfer-of-learning, constructivist, motivation, student-engagement]
technology: [generative-ai, llm, conversational-ai, prompt-engineering]
assessment: [process-oriented-assessment, self-report-measures]
methods: [mixed-methods-research, qualitative-research, quantitative-research]
institutions: [regulation]
ethics: [trust-calibration, hallucination-risk]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Willcox, Lane, and Arikan asked how students actually distribute cognitive work while using ChatGPT, not whether the tool raised or lowered their scores. In a [[qualitative-research|qualitative]]-dominant [[mixed-methods-research|mixed-methods]] case study of a transdisciplinary engineering course at a Turkish university, they analyzed 53 distinct student–ChatGPT conversations and 112 questionnaires from students told to use the tool freely, with no guidance or restrictions. They built the Cognitive Distribution Framework: five interaction types (extension, outsourcing, alignment, transformation, and decoupling) and four roles (cyborg, centaur, ghost, and hermit). Extension — tight, iterative co-thinking — was most frequent in the logs, followed by outsourcing and alignment; questionnaire responses added transformation and decoupling, where students limited AI input. Students rated ChatGPT as significantly more cognitively activating than cognitively reducing. The authors argue that [[student-ai-interaction|student–AI interaction]] is better described as a shifting process of [[distributed-cognition|cognitive distribution]] than as fixed dependence or assistance, and call for [[process-oriented-assessment|process-focused]] research and [[pedagogy]].

## Key Findings

1. Across 321 prompt-level codes from 53 ChatGPT conversations, extension was the most frequent interaction type (n = 171, 53.3%), ahead of outsourcing (n = 95, 29.6%) and alignment (n = 55, 17.1%).
2. At the log level, extension-dominant exchanges were most common (n = 28, 52.8%), followed by outsourcing-dominant (n = 14, 26.4%), mixed (n = 6, 11.3%), and alignment-dominant exchanges (n = 5, 9.4%).
3. Open-ended responses added 127 coded references to interaction type: extension (n = 63), transformation (n = 22), outsourcing (n = 15), decoupling (n = 14), and alignment (n = 13).
4. Students reported higher perceived cognitive activation (M = 3.90) than cognitive reduction (M = 2.64), a significant difference, t(111) = 9.82, p < .001, d = 0.93.
5. Usefulness correlated moderately with cognitive activation, r(110) = .46, p < .001, but only weakly with cognitive reduction, r(110) = .19, p = .044.
6. Students moved among cyborg, centaur, ghost, and hermit postures, with ghost dominating the single instructor reflection.
7. A transformation–alignment cycle appeared: students built mental models of ChatGPT and used them to steer the system.

## The Cognitive Distribution Framework

The framework separates interaction types, which describe how cognitive work is distributed within an exchange, from interaction roles, which describe a user's broader stance across exchanges. The five types run in different directions: extension couples the student and the [[generative-ai|generative AI]] system in tight, iterative co-thinking; outsourcing [[cognitive-offloading|delegates cognitive work]] to the AI; alignment captures the user shaping how the AI responds; transformation captures the AI reshaping the user's thinking; and decoupling preserves a boundary around the student's own thinking. Roles describe participation: cyborgs iterate closely with the system, centaurs divide labor while keeping strategic control, ghosts hand over work with faint oversight, and hermits minimize AI engagement. Neither layer is evaluative, and students moved among types and roles within single conversations.

## What the Logs Showed: Extension, Outsourcing, and Alignment

Students used the [[llm|large language model]] as a starting point when they felt stuck, asked it to connect ideas they could not link themselves, and relied on it to name thoughts they could not yet articulate. In longer exchanges, extension became a recursive loop of redirecting responses, supplying new sources, and requesting revisions. Outsourcing ranged from strategic delegation — offloading bounded tasks such as finding sources while keeping control of direction — to passive handoff, the ghost-like pattern the instructor's reflection emphasized. Alignment showed students managing the system itself: pasting work in progress, assigning personas, and correcting misalignment. When outputs were broad or wrong, students more often repaired the exchange with short corrective prompts than abandoned it — [[student-engagement|active engagement]] rather than a single dependence story.

## Transformation, Decoupling, and Bidirectional Adaptation

Transformation was most visible in retrospective questionnaire responses: students described broadened perspectives, sharper [[critical-thinking]], and new research heuristics such as narrowing a question or searching more precisely, some of which could plausibly [[transfer-of-learning|transfer]] beyond the task. Some built mental models of the system — one called it "a Google with a mouth" — and began anticipating [[hallucination-risk|hallucinations]] before they occurred. That awareness fed back into alignment, producing a cycle in which students learned how the system behaved and used that knowledge to steer it. Decoupling ran the other way: some students, showing low [[trust-calibration|trust]] in the tool, limited AI input they found unhelpful or generic. Yet decoupling was not the default response to difficulty in the logs.

## Perceived Cognitive Effects

The closed-ended questionnaire asked students to rate ChatGPT's influence on 11 Likert-scale items, grouped into cognitive activation, cognitive reduction, and usefulness. Activation and usefulness were both relatively high, while reduction sat below the scale midpoint. Students most strongly agreed that ChatGPT was helpful, motivated exploration of new ideas, improved transdisciplinary research skills, and encouraged critical thinking; they agreed least with items about overreliance and reduced self-reliance. The authors note that [[self-report-measures|self-reports]] can be shaped by misestimation and self-presentation, so they treat these ratings as articulations of student thinking rather than direct measures of cognition.

## What this means for practice

- **Instructors.** Make the process visible: ask students to reflect on how ChatGPT opened or closed directions in their work, and treat that reflection as evidence of cognitive work, not surveillance.
- **Instructors.** Expect one assignment to contain all five interaction types, so avoid reading a single chat as proof of dependence, and discuss when offloading is strategic or passive.
- **[[curriculum-design|Curriculum]] designers.** Favor open-ended, authentic problems over utilitarian completion, since the authors argue these push students toward cyborg-like engagement rather than artificial external standards.
- **Instructors.** Build [[ai-literacy]] through exploratory use rather than top-down rules alone: the alignment moves students developed emerged from bidirectional interaction and are more situated than a fixed [[prompt-engineering|prompting]] formula.
- **Administrators.** These students adopted ChatGPT without institutional guidance, a pattern the authors compare to shadow AI, so [[regulation|policy]] should support guided experimentation rather than assume silence means compliant use.

## Limitations

- The study ran in a single transdisciplinary course at one private research university in Türkiye, capturing early experimentation before many students had prompting guidance or clear institutional [[educational-policy-ai|policies]], which limits transferability.
- The log dataset may reflect selection effects: of 112 consenting students, 85 submitted logs, 21 PDF or TXT submissions were excluded, and students may have withheld interactions they judged inappropriate, so passive uses may be underrepresented.
- Transformation was captured through retrospective questionnaire perceptions, so the study cannot establish whether the reported shifts in thinking persisted beyond the exchange.
- The questionnaire was a descriptive instrument developed by the authors rather than a validated psychometric scale, and its items are subject to misestimation and self-presentation concerns.

## Citation

Willcox, K., Lane, J. F., & Arikan, O. (2026). [Cognitive Distribution in Student-GenAI Interaction: A Process Framework from Self-Directed ChatGPT Use in Research Tasks](https://osf.io/9qfea). EdArXiv preprint.