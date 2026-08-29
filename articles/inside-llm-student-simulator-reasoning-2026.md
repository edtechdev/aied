---
title: "INSIDE the Student's Mind: Jointly Modeling Latent Reasoning and Action in LLM Student Simulators"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-08-24T09:00:00-04:00"
type: article
tags: [student-modeling, llm, intelligent-tutoring, learning-analytics, personalized-learning, ai-education, higher-ed]
research_method: [system development, benchmark]
level: [higher ed]
sources: ['raw/papers/2608.10492.md']
confidence: high
---

> **Synthesis:** Niousha, Kang, & Norouzi (2026) introduce **INTERNAL STUDENT DIALOGUE (INSIDE)**, a student modeling framework that fine-tunes LLMs to both *act* like students and *think* like them. Two students may submit identical work for entirely different reasons, so INSIDE generates internal dialogue grounded in Bloom's Taxonomy across cognitive, affective, and action dimensions, fine-tuning on paired think-traces and actions. Evaluated against prompting baselines, INSIDE improves action fidelity (matching real students' code generation) and reasoning alignment (up to 57.9% across models). The work advances [[student-modeling]] and [[simulating-students]] research toward cognitively faithful student simulation.

## Key Findings

1. LLM-based student simulators reproduce observable actions but fail to model the latent reasoning behind them; two students can submit identical code for entirely different reasons, so action alone is a partial view of student cognition.
2. INSIDE fine-tunes models to generate internal dialogue grounded in [[learning-theories|Bloom's Taxonomy]] across cognitive, affective, and action dimensions, trained on paired think traces and actions that are reconstructed via retrospective inference with a teacher model.
3. On action fidelity, fine-tuned INSIDE models produce code distributions closest to real students (lowest Wasserstein distance) on familiar problems and match plain fine-tuning on unseen problems, while prompting baselines maintain artificially high pass rates.
4. On reasoning quality, INSIDE achieves the highest alignment between generated internal dialogue and ground-truth code edits (up to 57.9%), and—unlike prompting baselines—does so without sacrificing action fidelity, bridging explanation and behavior.

## The Reasoning Gap in Student Simulation

LLM-based simulators increasingly reproduce human behavior across domains, and in education they promise improved fidelity in predicting student actions for building [[intelligent-tutoring|tutoring systems]]. Yet such simulations are often limited to replicating surface-level patterns rather than modeling the latent processes underpinning observable outcomes. In education, understanding the reasoning behind an action is crucial for diagnosing [[misconceptions|misconceptions]], generating targeted [[feedback]], and evaluating tutoring systems—applications that go back to classic [[knowledge-tracing|diagnostic models]] of procedural bugs.

The problem is that observable actions provide only a partial view of cognition: two students may arrive at the same solution through entirely different reasoning, or produce the same incorrect answer for fundamentally different reasons. Psychology research highlights the value of accessing internal reasoning processes via think-aloud protocols, but such methods are expensive and rarely scale. Moreover, existing work on [[llm]] reasoning has focused on improving *correctness*, pushing models toward logically consistent and factually accurate outputs—whereas human actions are often not rational or correct at all. People make errors, hold misconceptions, and apply incomplete strategies, and in education modeling this incorrect or partial reasoning is essential because mistakes are central to the [[learning-analytics|learning process]].

## Related Work

Prior work on [[simulating-students]] has conditioned language models on virtual personas or fine-tuned them on real student code trajectories to capture realistic error patterns, stylistic variation, and incremental revision behavior. However, this line of work tends to treat student behavior as a black box, predicting outcomes without modeling the internal reasoning that produces them. Closest to INSIDE, related [[cognitive-diagnosis|diagnostic]] approaches model incorrect student reasoning by inferring misconceptions from erroneous answers, but do so *reconstructively*—explaining errors post-hoc rather than anticipating the intent that precedes each attempt.

INSIDE instead introduces internal dialogue as an intermediate cognitive layer that precedes student actions during learning interactions. Its generated reasoning traces are a form of verbalized [[prompt-engineering|chain-of-thought]], but trained for fundamentally different goals than the standard CoT used to improve correctness: here the aim is to replicate the potentially erroneous, uncertain reasoning real students produce. Structuring this simulation data draws on [[learning-theories|Bloom's Taxonomy]], whose hierarchical classification of cognitive objectives motivates explicitly organizing simulation data around cognitive levels rather than only lower-order skills.

## The INSIDE Framework

INSIDE generates reasoning followed by action. Given a student's prior submission history and the corresponding AI tutor [[feedback]], a language model generates an internal dialogue representing the reasoning process leading to the next code submission, and conditions the next action on that inferred dialogue. This key affordance—explicitly modeling the unobservable latent reasoning preceding each action—distinguishes INSIDE from outcome-only student models.

Because ground-truth reasoning does not exist in real student logs, training data is produced by **retrospective inference**: a teacher model conditions on the interaction context *and* the observed student-generated next submission to infer the student's internal state in third person, producing structured summaries of cognitive, affective, and action states inspired by the three domains of Bloom's Taxonomy. Given these inferred states, the model then generates a first-person internal dialogue (a think trace) reflecting the student's reasoning prior to the observed submission. This two-stage procedure approximates latent cognition even though the true reasoning was never recorded.

## Data and Problem Formulation

The authors study student code generation in an introductory programming course at UC Berkeley ([[cs-education|~900 students per semester]]). Students complete ~10 homework assignments of 3–6 problems each, an autograder gives instant test-case feedback, and students may resubmit freely, producing a multi-attempt submission stream per student–problem pair. Submissions that fail a test may also receive natural-language feedback from an LLM-based [[pedagogical-agent|AI tutor]] when the student consents. Training uses Spring 2025 data and testing uses Spring 2024 data, with two subsets: **test_OP** (unseen students on familiar problems) and **test_NP** (unseen students on unseen problems). The model generates the next code submission conditioned on up to *k* prior submissions with their tutor feedback.

## Evaluation

INSIDE is baselined against different prompting frameworks and evaluated on two axes: **fidelity of simulated actions** and **quality of generated internal dialogue**.

**Action fidelity** compares model-generated code to real student submissions using functionality and stylistic metrics—pass rate against the autograder suite, code length, [[computational-thinking|abstract syntax tree]] depth and width, and PEP 8 violations—reporting Wasserstein distance for distributional similarity. **Reasoning quality** is measured via alignment: an LLM judge decomposes each generated internal dialogue into atomic claims representing intended actions and checks whether each claim is reflected in the ground-truth code diff. The judge was validated against teacher-generated traces (95.2% coverage) and against human annotations (88.0% agreement, κ = 0.754), indicating it reliably attributes stated reasoning to observed code changes.

## Results

Fine-tuned models substantially outperform prompting-based methods on action fidelity, and within prompting approaches, more structured strategies improve alignment. On test_OP, INSIDE consistently achieves the lowest Wasserstein distances across all metrics; on test_NP, INSIDE and plain fine-tuning perform comparably, largely because that split contains more successful submissions where fine-tuning already reduces the over-competence bias of prompted models. Pass-rate trajectory analysis shows real students start low and rise sharply near the final step; fine-tuned models track this incremental progress, while prompting models maintain artificially high pass rates (~80%) throughout.

On reasoning quality, INSIDE achieves the highest alignment across both settings: 51.8% on test_OP and 57.9% on test_NP, outperforming the strongest BloomCoT prompting baseline. Notably, larger and more capable models such as GPT-5 tend to score *lower*, suggesting stronger reasoning ability does not automatically translate into reasoning that matches student-like code edits. INSIDE achieves both high alignment and strong action fidelity—producing reasoning consistent with observed edits while generating code that follows realistic student progression—rather than optimizing alignment at the expense of realistic behavior.

## Limitations and Future Work

A key limitation is that internal dialogue is **reconstructed rather than observed**: traces are generated by a teacher LLM via retrospective inference and approximate latent cognition. Because LLMs are typically trained to produce expert-like reasoning, they may struggle to faithfully reconstruct novice reasoning, and the generated traces may look more coherent than what real students exhibit. Future work can validate these traces through think-aloud studies or retrospective verbalization protocols. The test_OP/test_NP splits also differ in pass-rate distributions, complicating interpretation, and even INSIDE leaves ~42% of generated claims unexplained. The authors suggest exploring [[reinforcement-learning]] methods so reasoning emerges through reward modeling rather than supervised fine-tuning.

## Implications

By modeling both actions and reasoning, INSIDE opens new directions for evaluation and human-centered optimization of tutoring systems. Student simulators are increasingly used to evaluate and optimize AI tutors prior to deployment; explicitly modeling internal dialogue allows evaluating whether feedback resolves misconceptions and supports counterfactual analysis of alternative interventions, informing [[ai-ed-evaluation]] and [[adaptive-learning]]. Because incorporating internal dialogue does not degrade action fidelity, simulators can provide access to otherwise unobservable signals rather than only replicating behavior. Beyond evaluation, externalizing internal dialogue could support learner-facing reflection and [[metacognition]], and enable richer student representations for clustering based on reasoning patterns rather than noisy surface behavior—relevant to [[learning-analytics]] and [[personalized-learning]]. The work points toward LLM-based student simulation grounded in cognitively plausible reasoning and, ultimately, tutoring systems equipped with misconception-aware interventions.

## Connected Concepts

- [[student-modeling]]
- [[simulating-students]]
- [[metacognition]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[llm]]
- [[learning-analytics]]
- [[cognitive-diagnosis]]
- [[higher-ed]]
- [[scaffolding]]

## Connected Articles

- [[history-aware-student-simulation]]
- [[valid-student-simulation-llm-2026]]
- [[simulating-students-diverse-cognitive-levels-2025]]
- [[simulating-students-llm-review-2026]]
- [[llm-student-simulation-misconception-faithfulness]]
- [[agentschool-multi-agent-simulation-education-2026]]
- [[llm-student-simulation-teacher-insights]]
- [[llm-student-modeling-memory]]

## Citation

Niousha, R., Kang, M., & Norouzi, N. (2026). [*INSIDE the student's mind: Jointly modeling latent reasoning and action in LLM student simulators*](https://arxiv.org/abs/2608.10492).
