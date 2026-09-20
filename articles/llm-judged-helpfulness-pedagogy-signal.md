---
title: "Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models"
created: "2026-07-31T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
pedagogy: [scaffolding]
technology: [adaptive-learning, intelligent-tutoring, llm]
assessment: [automated-assessment, feedback]
stakeholders: [student-experience]
audience: [learners, software developers]
sources: ['raw/papers/2607.28128.md']
confidence: high
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** Pre-registered study auditing whether general-purpose helpfulness rubrics can distinguish direct answer-giving from [[pedagogy|pedagogical]] guidance in [[llm]] tutors. Uses deterministic detectors for answer leakage and next-turn independent work across three tutor models. Finds that helpfulness ratings conflate genuine pedagogical [[scaffolding]] with simply giving correct answers.

## Key Findings

- Within each of three tutor bases, the authors compare **conversational and pedagogical policies** instantiated with the same underlying model, paired with one fixed weak simulated student, and audited under a **pre-registered protocol**.
- On the primary base under the frozen, condition-blind judge **Claude Opus 4.8**, the policies **do not differ significantly in helpfulness but are perfectly rank-separated under the pedagogy rubric** (Cliff's |δ| = 0.10 vs. 1.0).
- Across two judges (Opus and the prospectively specified **GPT-5.6 Sol**), **pedagogy contrasts retain their direction** where detected, whereas the **helpfulness ordering is judge-contingent**, reversing between judges on two of three bases.
- In an Opus-only ablation, seven primary-base policies **span 2.3 points in mean judged pedagogy within a 0.25-point band of mean judged helpfulness**, showing helpfulness collapses nearly all policy variance.
- **Answer-revealing turns are followed by less independent student work on every base**, a result that is judge-invariant by construction and validated by deterministic detectors of answer leakage and next-turn independent work.

## Study Design & Method

The audit uses **deterministic process measures** — detectors for answer leakage and next-turn independent work — alongside LLM judges, over **1,179 confirmatory answer-phase tutor turns**. Each session follows a fixed five-phase protocol: six training problems, then immediate, interference, and delayed probes, plus transfer probes; within a training problem the tutor and student alternate for a fixed number of turns. Because the two policies share the same underlying model and student, any difference is attributable to the policy itself, making the design a controlled test of whether helpfulness rubrics carry pedagogical signal.

## What this means for practice

- **Software developers.** Do not adopt general-purpose helpfulness scores as a tutor quality signal: within a 0.25-point band of mean judged helpfulness, seven policies spanned 2.3 points of judged pedagogy, and the helpfulness ordering reversed between judges on two of three bases.
- **Software developers.** Ship deterministic process checks alongside any rubric — answer-leakage and next-turn independent-work detectors — since every deterministic leakage–independence estimate was negative across three bases and seven ablation policies.
- **Learners.** Prefer a tutor that withholds the answer: answer-revealing turns were followed by a reasoning attempt 33% of the time against 73% after non-leaky turns, and the pedagogy rubric rank-separated the two policies perfectly (Cliff's |δ| = 1.0 versus 0.10 for helpfulness).
- **Researchers.** Freeze the rubric and judge before collecting confirmatory data and check cross-judge agreement rather than trusting one rater: pooled agreement was high on pedagogy (ρ = .740) but only modest on helpfulness (ρ = .372), and weakest on the one base where the two judges' contrasts were significant and opposite.

## Limitations

- Two LLM judges and no human validity check: helpfulness contrasts reversed between Opus and GPT-5.6 Sol on two of three bases, cross-judge agreement inverted on Gemini, and scores were ceiling-compressed with the frozen judge assigning a median of 5 to 975 of 1,179 turns.
- Each judge shared a model family with one tutor base (Opus with the Claude Sonnet tutor, Sol with the GPT-5.5 tutor); a Sonnet-and-Gemini-only sensitivity removes the Sol overlap but leaves the Opus overlap.
- The student was a single fixed weak simulated learner and probe accuracy saturated between 0.77 and 1.00 across immediate, delayed, and transfer problems in all three conditions, so the probes could not distinguish conditions.
- Neither rubric checks the mathematics against ground truth, so the measurement cannot detect a turn that is fluent, responsive, and wrong; the paper's claims are about what a helpfulness signal rewards, not about tutor correctness.

## Connected Concepts

- [[intelligent-tutoring]]
- [[pedagogical-llm-training]]
- [[benchmark]]
- [[personalized-learning]]
- [[socratic-method]]
- [[scaffolding]]
- [[ai-feedback-quality]]

## Connected Articles

- [[measuring-llm-tutors-teach-vs-solve]] — Measuring Whether LLM Tutors Teach or Solve: A Diagnostic for Educational Impact
- [[rethinking-scaffolding-llm-tutors]] — Rethinking Scaffolding in LLM Tutors: The Interactional Mismatch Between Benchmarks and Real-World Deployments
- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[structrag-diagram-reasoning-ai-tutoring]] — Advancing diagram-based reasoning in AI tutoring systems: a structural approach for STEM education
- [[student-misconceptions-conditionals-loops-taxonomy]] — How Students (Mis)understand Conditionals and Loops -- A Taxonomy
- [[conversational-ai-tutors-framework]] — The Path to Conversational AI Tutors: Integrating Tutoring Best Practices and Targeted Technologies to Produce Scalable AI Agents

## Citation

Shuyi Fan, Boyuan Deng, Mengyu Xu, Jiale Liu, Hongyang Zhang (2026). [Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models](https://arxiv.org/abs/2607.28128).
