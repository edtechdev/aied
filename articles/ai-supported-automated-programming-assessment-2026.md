---
title: "Design and Evaluation of an AI-Supported Automated Programming Assessment Environment for Concept-Aligned Reinforcement in Engineering and Computing Education"
created: "2026-09-20T11:52:19-04:00"
updated: "2026-09-20T11:52:19-04:00"
type: article
foundations: [misconceptions]
pedagogy: [mastery-learning, motivation, self-efficacy, self-regulated-learning]
technology: [generative-ai, llm, learning-analytics, conversational-ai]
assessment: [automated-assessment, feedback, formative-assessment, learning-gains]
ethics: [guardrails, ai-use-disclosure]
research_method: [experiment, system development]
discipline: [cs education]
level: [higher ed]
audience: [instructors, software developers]
sources: ['raw/papers/ai-supported-automated-programming-assessment-2026.md']
confidence: medium
---

> **Synthesis:** Lan (2026) evaluates an AI-supported [[automated-assessment|automated programming assessment]] environment that turns verified incorrect submissions into governed, concept-aligned micro-assessments delivered through a mobile chatbot. Rather than using [[generative-ai]] as an open-ended tutor or grading agent, the environment makes it a constrained orchestration layer inside a deterministic workflow: a rule-based engine alone executes code and decides correctness, and AI runs only after a learner clicks a misconception clarification prompt. In a quasi-experimental pretest–posttest study with 90 first-year undergraduates in Taiwan (45 experimental, 45 control), the experimental group reached higher post-intervention [[mastery-learning|concept-level mastery]] across all five programming components (M = 0.688 versus 0.567; Cohen's d = 1.05) and reported greater [[self-efficacy]] gains and higher post-intervention [[motivation]]. System logs showed 51.3 completed micro-assessment interactions on average, 46% of them outside class sessions. The author reads the results as evidence for the integrated [[formative-assessment]] environment rather than for isolated effects of generative AI or extra practice.

## Key Findings

1. Each verified incorrect submission linked to a governed, single-concept micro-assessment: a deterministic engine alone graded code, while AI generated diagnostics only after learners requested clarification.
2. In the 5-week, five-module intervention, 90 first-year undergraduates were split into 45 experimental and 45 control students, both completing the same 50 macro-level Python tasks.
3. Post-intervention overall concept-level mastery was 0.688 (SD = 0.110) experimental versus 0.567 (SD = 0.119) control, t(88) = 4.98, p < 0.001, Cohen's d = 1.05.
4. ANCOVA adjusting for baseline mastery kept the advantage significant, F(1, 87) = 25.43, p < 0.001, partial η2 = 0.226, with adjusted means of 0.689 and 0.566.
5. Logs showed sustained, low-friction engagement: 51.3 completed micro-assessment interactions on average (SD = 9.5), 46% outside class, and 44.2 s mean response latency (SD = 8.5).
6. Within that group, completed micro-assessments (β = 0.42), off-class participation (β = 0.36), and shorter latency (β = −0.29) were associated with mastery, explaining 47% of its variance.
7. Self-efficacy gains were larger for the experimental group (1.11 versus 0.42; d = 0.68) and post-intervention motivation was higher (3.76 versus 3.16; d = 0.81).

## Keeping grading deterministic while AI supports learning

The architecture separates two layers. A deterministic automated assessment engine delivers instructor-authored macro-level tasks, executes submissions, and decides correctness through rule-based input–output matching; AI does not participate in code execution, grading, or correctness determination. Only after the engine verifies an incorrect submission and the learner clicks a "Misconception clarification prompt" does the reinforcement layer run, and it never revises the verdict. Stage 1 uses gpt-4o-mini at temperature 0.3 to select one focal knowledge component from a predefined whitelist and emit a structured JSON handoff; Stage 2 uses gpt-4.1-mini at temperature 0.3 to generate one learner-facing, four-option item from that handoff. The design turns verified failure evidence into a traceable diagnostic record while preserving the platform verdict, keeping [[guardrails]] and [[human-in-the-loop-ai|instructor oversight]] around the [[llm]].

## Learner-initiated reinforcement and how learners used it

Micro-assessments were assessment-triggered but learner-initiated, so learners did not receive a fixed sequence of items; delivered items reflected the [[misconceptions|concepts implicated]] in their own failed submissions. A hybrid allocation strategy reused validated items when a matching concept context already existed and otherwise generated new ones, producing 385 system-level unique items. Two access pathways existed: the post-failure clarification prompt and learner-initiated review modes (Personal Learning, Set-Based Learning, Comprehensive Challenge). System logs showed 51.3 completed interactions on average, 46% occurring outside class time, and a 44.2 s mean response latency, with off-class participation mainly tied to Comprehensive Challenge. Within-condition regression associated these indicators with mastery — read as process-level [[learning-analytics|signals]], not causal mechanisms, since engagement may also reflect [[self-regulated-learning|self-regulation]] or help-seeking tendency.

## Affective outcomes and expert validation of generated items

Self-efficacy rose from 2.76 to 3.87 in the experimental group versus 2.82 to 3.24 in the control group (gain difference p = 0.002, d = 0.68), and post-intervention motivation was higher (3.76 versus 3.16, p < 0.001, d = 0.81). The author attributes the self-efficacy advantage to the combined influence of concept-aligned reinforcement, extra practice, and repeated verification-first [[feedback]] rather than conceptual learning alone, and notes motivation was measured only at posttest. Internal consistency was high across both instruments and timepoints. Item quality was checked twice: prompt-level constraints, concept-tag consistency checks, and runtime screening for near-duplicates and solution leakage; plus human review of 116 sampled Stage 1–Stage 2 pairs (roughly 30% of the 385 unique items) by two programming education experts, whose Cohen's kappa values ranged from 0.68 to 0.85.

## What this means for practice

- **Instructors.** Turn verified incorrect submissions into triggers for optional single-concept reinforcement: the experimental group completed 51.3 micro-assessments, 46% outside class, reaching 0.688 mastery versus 0.567.
- **Software developers.** Confine AI to a governed support layer: constrain prompts to one whitelisted concept, require schema-valid JSON, and enforce concept-tag consistency between handoff and item.
- **Assessment professionals.** Log every handoff–item pair and budget expert review: 116 sampled pairs (about 30% of 385 unique items) reached Cohen's kappa of 0.68–0.85.

## Limitations

- The workflow is model-version-specific: Stage 1 used gpt-4o-mini and Stage 2 gpt-4.1-mini at temperature 0.3, with no re-validation across later models reported.
- The quasi-experimental intact-class design limits causal claims; with no time-on-task-matched control, components cannot be separated.
- Evidence is short-term and single-site: 90 students in one 5-week Python course in Taiwan, with no difficulty calibration, delayed posttest, or trust data.

## Connected Concepts

- [[automated-assessment]]
- [[formative-assessment]]
- [[mastery-learning]]
- [[self-efficacy]]
- [[motivation]]
- [[generative-ai]]
- [[learning-analytics]]
- [[guardrails]]

## Connected Articles

- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study
- [[ai-assisted-assessment-instruction-higher-ed-2026]] — AI-Assisted Assessment and Instruction in Higher Education: Foundations, Applications, and Implications for Exam Design
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted, instructor-supervised grading and feedback in higher education: Design and evaluation of an end-to-end pipeline
- [[ai-literacy-tool-design-programming-education-2026]] — AI literacy over tool design: a mixed-methods study of scaffolded versus unrestricted generative AI in programming education
- [[adaptive-scaffolding-cognitive-engagement-its]] — Adaptive Scaffolding for Cognitive Engagement in an Intelligent Tutoring System
- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness

## Citation

Lan, Y.-F. (2026). [*Design and Evaluation of an AI-Supported Automated Programming Assessment Environment for Concept-Aligned Reinforcement in Engineering and Computing Education*](https://doi.org/10.1002/cae.70271). *Computer Applications in Engineering Education*, 34, e70271.
