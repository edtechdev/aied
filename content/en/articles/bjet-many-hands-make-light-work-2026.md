---
title: "Many hands make light work? Individual and collaborative interaction with a GenAI-powered multi-agent system: Effects on learning performance and critical thinking"
created: "2026-10-04T10:42:00-04:00"
updated: "2026-10-04T10:42:00-04:00"
type: article
sources: ['raw/papers/bjet-many-hands-make-light-work-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [quasi-experiment, network analysis]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, researchers]
pedagogy: [collaborative-learning, student-ai-interaction, self-regulated-learning]
technology: [generative-ai, pedagogical-agent]
methods: [quantitative-research, network-analysis]
foundations: [critical-thinking, human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** An eight-week quasi-experiment with 87 undergraduates tests what changes when learners work alone versus in pairs with a [[generative-ai|GenAI]]-powered [[agentic-ai|multi-agent]] system in an [[learning-design|instructional design]] course. The headline is a split rather than a clean win for collaboration: pairing with the system produced the strongest final design projects, while working alone with it produced the largest gains in critical thinking awareness — and collaboration actually nudged awareness slightly down. Process analyses trace the divergence: solo learners moved from recognizing a problem straight into analytical and evaluative processing, whereas pairs reasoned in a wider, more distributed way centered on shared understanding, with more off-task talk. Neither configuration beat the no-AI peer group on a basic knowledge test. In this study, then, the [[human-ai-collaboration]] configuration seems to steer which kind of [[critical-thinking|thinking]] gets activated rather than to raise thinking overall.

## Key Findings

1. The knowledge test showed no group difference in gain scores, χ²(2) = 0.825, p = 0.662, so basic knowledge acquisition was comparable across peer collaboration, individual multi-agent work and collaborative multi-agent work.
2. Final project scores did differ significantly, χ²(2) = 9.09, p = 0.011. The collaborative multi-agent group scored highest (M = 89.64, SD = 3.67), ahead of the individual group (M = 86.45, SD = 2.71) and peer collaboration (M = 85.85, SD = 3.65).
3. Post hoc tests placed the collaborative multi-agent group above both peer collaboration (p = 0.039) and individual multi-agent work (p = 0.014), while those two did not differ — the project advantage was specific to the paired, AI-supported design task.
4. Critical thinking awareness gains differed by condition, χ²(2) = 6.298, p = 0.043: the individual multi-agent group rose most (M = 0.41, SD = 0.57), peer collaboration was near flat (M = 0.06, SD = 1.02), and the collaborative multi-agent group declined (M = −0.04, SD = 0.61).
5. The only significant awareness contrast was individual over collaborative multi-agent work (p = 0.039); peer collaboration did not differ from the individual (p = 0.473) or the collaborative (p = 0.972) groups.
6. Of 852 valid dialogue turns, 398 learner-initiated turns were coded (235 individual, 163 collaborative). In collaborative pairs the less active partner produced only 27.9% of the pair's turns on average.
7. [[network-analysis|Epistemic network analysis]] separated the two AI-supported groups (U = 861.00, p = 0.01, r = −0.33): the individual network clustered around analysis and evaluation, the collaborative network around understanding with more distributed links.

## How the comparison was built

Ninety-two undergraduates began the study in a micro-course instructional design course at a public university in eastern China; five were excluded for incomplete [[self-report-measures|questionnaires]] or missing final projects, leaving 87 (32 male, 36.8%; 55 female, 63.2%), aged 18 to 21. Working with intact classes, the authors assigned students to three conditions: peer collaboration without AI support (PC, n = 26, 13 dyads), individual interaction with the GenAI multi-agent system (MAS-IL, n = 33), and paired interaction with it (MAS-CL, n = 28, 14 dyads). All conditions ran for eight weeks under the same instructor with identical objectives, content and resources. Learning performance was measured by a 10-item knowledge test (KR-20 = 0.617 pre-test, 0.788 post-test) and a 100-point design project scored on a five-criterion rubric (ICC = 0.871). Critical thinking awareness used a four-item scale (alpha = 0.774 pre-test, 0.924 post-test), and interaction was coded against Murphy's five phases with Cohen's kappa of 0.848.

## A task-dependent split in outcomes

The outcomes refuse to collapse into one winner. On the knowledge test, gains were statistically indistinguishable across conditions (χ²(2) = 0.825, p = 0.662), with close descriptive means (4.23 for PC, 4.24 for MAS-IL, 7.14 for MAS-CL). The design project told a different story: dyad- and individual-level scores differed significantly (χ²(2) = 9.09, p = 0.011), and Dunn's post hoc tests placed MAS-CL above both PC (p = 0.039) and MAS-IL (p = 0.014), while PC and MAS-IL did not differ. Critical thinking awareness reversed the pattern. Its gain scores differed by group (χ²(2) = 6.298, p = 0.043), but the largest gain belonged to MAS-IL (M = 0.41, SD = 0.57), with PC nearly flat (M = 0.06, SD = 1.02) and MAS-CL slightly negative (M = −0.04, SD = 0.61); only MAS-IL versus MAS-CL reached significance (p = 0.039).

## Two cognitive trajectories

Lag sequential analysis and epistemic network analysis read the divergence as two cognitive trajectories rather than two ability levels. Both groups' sequential patterns departed from chance (MAS-IL: χ²(25) = 127.88, p < 0.01; MAS-CL: χ²(25) = 38.90, p = 0.04), but the significant transitions differed. Individuals showed few dominant moves — notably Recognize → Analyze and an Evaluate → Evaluate self-transition — and their epistemic network clustered around analysis and evaluation, which the authors read as sustained internal monitoring beneath the overt sequence. Pairs produced a wider, more distributed set: reciprocal recognize ↔ analyze, analyze → evaluate, and transitions involving understanding and creation, with a network centered on understanding. Off-task exchanges were also more frequent in pairs, interpreted as rapport-building and grounding rather than distraction. ENA separated the groups along its horizontal axis (U = 861.00, p = 0.01, r = −0.33).

## What this means for practice

- **Instructors.** Align the human–AI configuration with the goal: use collaborative multi-agent interaction for complex sense-making and design tasks, and individual multi-agent interaction when critical thinking awareness or [[self-regulated-learning|self-regulation]] is the target, since only the individual group gained there.
- **Instructional designers.** When learners collaborate with peers and agents at once, build in explicit reflection or critical-thinking [[scaffolding|scaffolds]] to offset the reduced individual [[metacognition|metacognitive]] monitoring the authors observed, and structure participation so both partners contribute.
- **Program leaders and administrators.** Read the split honestly: the paired AI condition won on the design product but not on the knowledge test, so treat a project-score gain as evidence about one outcome, not about learning overall.
- **Researchers.** The explanatory mechanisms — cognitive load and diffusion of responsibility — are the authors' post hoc interpretations and were not tested; the paper itself calls for fully crossed or randomized designs to separate AI support from collaboration structure.

## Limitations

- The system ran on the Coze AI multi-agent framework with the DeepSeek [[llm|large language model]] at temperature 0.8, using four role-specialized agents with 3D avatars and [[speech-and-voice-technologies|text-to-speech]]. The eight-week intervention was administered under IRB approval recorded as Zhejiang University [2025-17] and the paper was received in February 2026; the paper does not state the calendar dates of data collection. Both the model and the multi-agent tooling are tied to that window and have since moved on.
- The quasi-experimental design assigned by intact class, producing baseline imbalances in gender (χ²(2) = 13.51, p = 0.001) and major (χ²(12) = 150.87, p < 0.001). AI presence and collaboration structure varied together, and prior collaborative experience and prior course performance were not measured as covariates.
- The study sits in a single context — 87 undergraduates in one micro-course design course at one public university in eastern China — which the authors say limits generalizability across disciplines, educational levels and collaborative arrangements.
- Measurement was narrow: the knowledge test was short, only overall project scores were available rather than rubric dimensions, critical thinking awareness was four self-reported items, and the process analysis relied solely on dialogue data.
- Dyadic responses were not fully statistically independent, and turns from paired learners were tracked individually but aggregated at the condition level; the authors flag this as a reason for cautious interpretation of the process findings.

## Citation

Chu, X., Dai, H., & Zhai, X. (2026). [Many hands make light work? Individual and collaborative interaction with a GenAI-powered multi-agent system: Effects on learning performance and critical thinking](https://doi.org/10.1111/bjet.70089). *British Journal of Educational Technology, 00*, 1–25.