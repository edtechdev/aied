---
title: "Taming the Black Box: Design Principles for Rule-Integrated LLM Tutoring Systems in Primary School Mathematical Problem Solving"
created: "2026-09-01T12:00:00-04:00"
updated: "2026-09-01T12:00:00-04:00"
type: article
sources: ["raw/papers/rule-integrated-llm-tutoring-primary-math-2026.md"]
tags: ["intelligent-tutoring", "guardrails", "scaffolding", "prompt-engineering", "math-education", "llm"]
confidence: medium
---

## Overview

This design science [[research-methods-aied|research]] (DSR) develops a rule-guided [[llm|LLM]] tutoring system for primary-school mathematical word problems, addressing the inconsistency and [[pedagogy|pedagogical]] opacity of unconstrained [[intelligent-tutoring|intelligent tutors]] in a procedural domain where correctness is governed by deterministic rules. The artifact formalizes a distinction between *rule-guided scaffolding*, governed by a three-layer architecture (diagnosis → intent selection → constrained response generation), and *ad-hoc scaffolding*, where helpful moves are difficult to audit and replicate. The system constrains stochastic variability through explicit [[guardrails]] while embedding [[scaffolding]] theory, evaluated through a staged DSR approach spanning persona-based simulated dialogues and a real classroom pilot. Findings show rule-guided scaffolding improves interactional consistency, reduces premature answer-giving, and sustains [[student-engagement|cognitive engagement]] — while revealing interactional complexities that only authentic classrooms expose.

## Key Findings

- **Rule-guided scaffolding outperformed ad-hoc scaffolding** on interactional consistency: in 36 of 40 (90%) real-student sessions both the tutor and students followed the intended turn-taking script, and the tutor guided key concepts/rules in the same 36 sessions, even under fragmented, ambiguous classroom input.
- **The three-layer architecture reduced premature answer-giving and early closure** via anti-spoiler boundaries and a completion-only goodbye gate; the tutor's diagnostic layer identified and responded to clear student deviations in all sessions where they occurred, validating the granularity of its assessment codes.
- **[[simulation]] surfaced architectural failure modes with high recall** — arithmetic verification misjudgment, over-explanation, answer-giving boundary violations, and premature goodbye were all identified and remediated through an "evidence–diagnosis–revision–retest" cycle using an LLM-as-Student, dual-model configuration (DeepSeek as student, ChatGPT as tutor).
- **The classroom pilot with 40 Grade 5 students (mean age 10.8 years) revealed complexities not captured in simulation**: attentional fragility requiring pause/resume, engagement costs of pedagogical verbosity, trust sensitivity to arithmetic disagreements, and need for explicit locking of high-risk procedural rules (units, rounding, billing conventions).
- **Even a highly structured prompt cannot fully eliminate stochastic variability** — the tutor produced incorrect information (arithmetic [[hallucination-risk|hallucinations]]) in 4 of 40 sessions (10%), motivating strengthened uncertainty guardrails and an "epistemic humility" design in which all computation is returned to the student.
- **Simulation and classroom validation are complementary, not interchangeable**: every Phase 1 failure mode reappeared in Phase 2, yet simulation systematically underestimates interactional failure modes (fragmented inputs, off-task behavior, trust sensitivity), warning against "ecological overconfidence."

## Implications for Practice

- **For designers of [[intelligent-tutoring|LLM tutors]]:** effective tutoring is less about maximizing the model's generative capacity than about strategically constraining it within theoretically grounded frameworks — externalize pedagogical decisions into auditable diagnosis → intent → response layers rather than relying on unconstrained inference.
- **For [[math-education|mathematics]] and procedural-domain applications:** embed explicit [[guardrails]] such as unit/rule locking, numerical correctness gates, and anti-spoiler boundaries; consider removing arithmetic from the tutor's purview entirely and returning all computation to the student (epistemic humility).
- **For evaluation practice:** use staged [[design-based-research|design science]] evaluation — simulated persona stress-tests for diagnostic precision *plus* authentic classroom pilots for ecological validity — since strong simulation performance does not guarantee classroom readiness.
- **For developers managing [[cognitive-offloading|cognitive load]] and engagement:** tighten brevity and anti-repetition output constraints, add attentional scaffolds (e.g., pause-close for resuming interrupted work), and communicate transparent closure criteria to reduce premature termination.

## Connected Concepts

- [[intelligent-tutoring]]
- [[scaffolding]]
- [[guardrails]]
- [[prompt-engineering]]
- [[math-education]]
- [[problem-solving]]
- [[student-engagement]]

## Connected Articles

- [[lopez-pernas-llm-appropriate-student-support-2026]] — designing LLM support that is appropriately scaffolded and agentic
- [[llm-agents-5e-esl-grammar-2026]] — LLM agents structuring multi-turn instructional interaction
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]] — a scaffolding framework for AI literacy
- [[ai-tpack-preservice-math-teachers]] — AI/TPACK integration in mathematics teacher education

## Citation

[Taming the black box: Design principles for rule-integrated LLM tutoring systems in primary school mathematical problem solving](https://www.sciencedirect.com/science/article/pii/S2666920X26000482) — Looi, C.-K., Liu, Z., & Sun, D. (2026). *Computers and Education: Artificial Intelligence*, 10, 100586.
