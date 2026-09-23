---
title: "Evaluating Interactivity: Toward Automated Assessment of AI-Generated Explorable Explanations"
created: "2026-07-03T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, learning-analytics, llm]
assessment: [automated-assessment, formative-assessment]
audience: [instructors, researchers, software developers]
research_method: [system development]
level: [higher ed, k 12]
sources: ['raw/papers/2606.31012.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** While [[llm]]s now enable rapid generation of learning materials like [[generative-ai]], evaluating the [[pedagogy|pedagogical]] quality of these materials remains an open challenge. This paper proposes an [[automated-assessment|automated assessment]] framework for evaluating interactivity in AI-generated explorable explanations — dynamic, learner-driven content that students can manipulate to discover concepts. The framework addresses the gap between content generation speed and quality assurance, providing metrics for [[formative-assessment]] of learning designs. This connects to [[learning-analytics]] approaches for understanding how students engage with AI-produced educational content in [[higher-ed]] settings.

## Key Findings

- The paper introduces **EE-Eval**, an automated evaluation framework that formalizes interactivity as a finite space of learner-controllable states and transitions, represented as a **Finite State Machine (FSM)**.
- By extracting FSMs from AI-generated explorable explanations, EE-Eval turns implicit interaction logic into an explicit, machine-interpretable graph that can be compared against an ideal FSM encoding pedagogical intent.
- Evaluation combines **graph-based metrics with embedding-based comparison** of states, actions, and feedback to measure structural and semantic similarity.
- Across thousands of generated explorable explanations spanning **127 concepts and 6 AI models**, EE-Eval consistently differentiated interaction quality beyond surface-level criteria such as functional correctness and visual quality.
- EE-Eval exhibited **substantially stronger alignment with human judgments** of interactivity and pedagogical effectiveness than existing baselines, which largely focus on code executability or visual fidelity.

## Method in Brief

Existing [[benchmark|benchmarks]] give limited insight into dynamic interaction behaviors such as learner-controlled state transitions and context-sensitive system responses — the factors that critically shape learners' conceptual understanding. EE-Eval addresses this by framing interactivity as testable behavioral models rather than an emergent byproduct of [[llm]] generation. The resulting FSM comparison supports pedagogically grounded, actionable [[human-ai-collaboration]] in creating interactive educational content.

## What this means for practice

- **Instructors.** Ask whether interaction logic serves the learning goal rather than whether the artifact merely runs: modeling interaction as a state machine correlated with human interactivity judgments at r = 0.728, while unit testing correlated negatively (r = −0.600).
- **Designers.** Specify the intended learner-controllable states and transitions as an "ideal" FSM before generating content, so the extracted graph can be compared against pedagogical intent instead of judged on appearance.
- **Designers.** Read the extracted FSM as a defect list — missing states, state-action pairs without feedback, unreachable transitions — and fix those before publishing an activity built from any of the 6 models tested.
- **Researchers.** Pair interaction-level signals with outcome measures, because the framework captures pedagogical coherence at the interaction level and not learning gains.
- **Instructors.** Do not screen generated [[active-learning]] materials on visual or code-execution checks alone; those baselines track surface appearance rather than interaction behavior.

## Limitations

- Finite state machines are an abstraction that may not capture highly continuous or emergent interaction patterns, potentially simplifying rich user experiences into discrete transitions.
- Evaluation quality depends on the accuracy of automated FSM extraction from generated artifacts, which may introduce noise or bias despite few-shot prompting.
- The "ideal FSMs" encode domain assumptions about effective interaction design that may not generalize across topics or pedagogical contexts.
- EE-Eval assesses interaction structure only; it does not evaluate content correctness, visual clarity, or actual learning outcomes.

## Connected Concepts

- [[llm]]
- [[generative-ai]]
- [[formative-assessment]]
- [[learning-analytics]]
- [[higher-ed]]
- [[automated-assessment]]
- [[active-learning]]
- [[human-ai-collaboration]]
## Connected Articles

- [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]] — Data Comics for Education: Evaluating Effectiveness, Benefits, and the Ethics of AI-Assisted Creation
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated Grading of Linux/Bash Examinations Using Large Language Models
- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — From Answer Generators to Reasoning Facilitators: Designing AI Tutors for Mathematical Reasoning in High-Stakes Environments
- [[llm-sentiment-analysis-education-research]] — LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments
- [[rubric-aware-grading-rec-cbm]] — REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading
- [[correct-answer-trap-ai-tutor]] — Catching The Correct Answer Trap: Characterizing AI Tutor Blind Spots When Analyzing Student Reasoning

## Citation

Xiaozao Wang, Zhewei Wang, Hongyi Wen (2026). [Evaluating Interactivity: Toward Automated Assessment of AI-Generated Explorable Explanations](https://arxiv.org/abs/2606.31012).
