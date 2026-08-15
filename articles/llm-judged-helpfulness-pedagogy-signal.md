---
title: "Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models"
created: 2026-07-31
updated: 2026-07-31
type: article
tags: [llm, intelligent-tutoring, automated-grading, benchmark, feedback-loop, adaptive-learning, student-experience, scaffolding]
sources: ['raw/papers/2607.28128.md']
confidence: high
---

Pre-registered study auditing whether general-purpose helpfulness rubrics can distinguish direct answer-giving from pedagogical guidance in LLM tutors. Uses deterministic detectors for answer leakage and next-turn independent work across three tutor models. Finds that helpfulness ratings conflate genuine pedagogical scaffolding with simply giving correct answers.

## Key Findings

- Within each of three tutor bases, the authors compare **conversational and pedagogical policies** instantiated with the same underlying model, paired with one fixed weak simulated student, and audited under a **pre-registered protocol**.
- On the primary base under the frozen, condition-blind judge **Claude Opus 4.8**, the policies **do not differ significantly in helpfulness but are perfectly rank-separated under the pedagogy rubric** (Cliff's |δ| = 0.10 vs. 1.0).
- Across two judges (Opus and the prospectively specified **GPT-5.6 Sol**), **pedagogy contrasts retain their direction** where detected, whereas the **helpfulness ordering is judge-contingent**, reversing between judges on two of three bases.
- In an Opus-only ablation, seven primary-base policies **span 2.3 points in mean judged pedagogy within a 0.25-point band of mean judged helpfulness**, showing helpfulness collapses nearly all policy variance.
- **Answer-revealing turns are followed by less independent student work on every base**, a result that is judge-invariant by construction and validated by deterministic detectors of answer leakage and next-turn independent work.

## Study Design & Method

The audit uses **deterministic process measures** — detectors for answer leakage and next-turn independent work — alongside LLM judges, over **1,179 confirmatory answer-phase tutor turns**. Each session follows a fixed five-phase protocol: six training problems, then immediate, interference, and delayed probes, plus transfer probes; within a training problem the tutor and student alternate for a fixed number of turns. Because the two policies share the same underlying model and student, any difference is attributable to the policy itself, making the design a controlled test of whether helpfulness rubrics carry pedagogical signal.

## Implications for AI in Education

The central conclusion is that **general-purpose helpfulness is not a reliable pedagogy signal** in this controlled setting: a rubric tuned to "helpful" answers cannot distinguish a tutor that scaffolds from one that leaks the answer. Tutor evaluation should therefore **pair pedagogy-targeted rubrics with deterministic process measures** such as answer leakage and next-turn independent work. For [[ai-tutoring]] and [[benchmark]] design, this argues against relying on preference-based helpfulness judgments and toward measurement of student agency and independent work.

## Connected Concepts

- [[ai-tutoring]]
- [[pedagogical-llm-training]]
- [[affective-tutoring]]
- [[automated-question-generation]]
- [[benchmark]]
- [[personalized-learning]]
- [[knowledge-tracing]]
- [[socratic-method]]

## Connected Articles

- [[measuring-llm-tutors-teach-vs-solve]] — Measuring Whether LLM Tutors Teach or Solve: A Diagnostic for Educational Impact
- [[rethinking-scaffolding-llm-tutors]] — Rethinking Scaffolding in LLM Tutors: The Interactional Mismatch Between Benchmarks and Real-World Deployments
- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[structrag-diagram-reasoning-ai-tutoring]] — Advancing diagram-based reasoning in AI tutoring systems: a structural approach for STEM education
- [[student-misconceptions-conditionals-loops-taxonomy]] — How Students (Mis)understand Conditionals and Loops -- A Taxonomy
- [[conversational-ai-tutors-framework]] — The Path to Conversational AI Tutors: Integrating Tutoring Best Practices and Targeted Technologies to Produce Scalable AI Agents

## Citation

Shuyi Fan, Boyuan Deng, Mengyu Xu, Jiale Liu, Hongyang Zhang (2026). [Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models](https://arxiv.org/abs/2607.28128). arXiv:2607.28128. cs.CL, cs.AI, cs.CY.
