---
title: "Evaluating Interactivity: Toward Automated Assessment of AI-Generated Explorable Explanations"
created: "2026-07-03T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [generative-ai, formative-assessment, learning-analytics, higher-ed, llm, automated-assessment, scaffolding, ai-literacy, k-12]
level: [higher ed, k 12]
sources: ['raw/papers/2606.31012.md']
confidence: high
---

While [[llm]]s now enable rapid generation of learning materials like [[generative-ai]], evaluating the pedagogical quality of these materials remains an open challenge. This paper proposes an automated assessment framework for evaluating interactivity in AI-generated explorable explanations — dynamic, learner-driven content that students can manipulate to discover concepts. The framework addresses the gap between content generation speed and quality assurance, providing metrics for [[formative-assessment]] of learning designs. This connects to [[learning-analytics]] approaches for understanding how students engage with AI-produced educational content in [[higher-ed]] settings.

## Key Findings

- The paper introduces **EE-Eval**, an automated evaluation framework that formalizes interactivity as a finite space of learner-controllable states and transitions, represented as a **Finite State Machine (FSM)**.
- By extracting FSMs from AI-generated explorable explanations, EE-Eval turns implicit interaction logic into an explicit, machine-interpretable graph that can be compared against an ideal FSM encoding pedagogical intent.
- Evaluation combines **graph-based metrics with embedding-based comparison** of states, actions, and feedback to measure structural and semantic similarity.
- Across thousands of generated explorable explanations spanning **127 concepts and 6 AI models**, EE-Eval consistently differentiated interaction quality beyond surface-level criteria such as functional correctness and visual quality.
- EE-Eval exhibited **substantially stronger alignment with human judgments** of interactivity and pedagogical effectiveness than existing baselines, which largely focus on code executability or visual fidelity.

## Method in Brief

Existing benchmarks give limited insight into dynamic interaction behaviors such as learner-controlled state transitions and context-sensitive system responses — the factors that critically shape learners' conceptual understanding. EE-Eval addresses this by framing interactivity as testable behavioral models rather than an emergent byproduct of [[llm]] generation. The resulting FSM comparison supports pedagogically grounded, actionable [[human-ai-collaboration]] in creating interactive educational content.

## Implications for AI in Education

For educators and tool builders, EE-Eval offers a diagnostic lens: instead of asking only whether generated content runs correctly, one can ask whether the interaction logic a [[generative-ai]] system produced actually serves the intended learning goals. By externalizing interaction logic into an inspectable graph, the framework transforms evaluation into a reflective diagnostic tool for the increasingly common practice of generating [[active-learning]] materials with LLMs, supporting quality assurance at scale.

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
- [[correct-answer-trap-ai-tutor]] — Catching The Correct Answer Trap: Characterising AI Tutor Blind Spots When Analysing Student Reasoning

## Citation

Xiaozao Wang, Zhewei Wang, Hongyi Wen (2026). [Evaluating Interactivity: Toward Automated Assessment of AI-Generated Explorable Explanations](https://arxiv.org/abs/2606.31012).
