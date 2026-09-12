---
title: Simulating Learners' Task-Selection Strategies and System Constraints in Mastery Learning
created: "2026-05-22T04:33:04-04:00"
updated: "2026-09-12T03:15:00-04:00"
type: article
tags: [intelligent-tutoring, mastery-learning, adaptive-learning, student-engagement, simulation, k-12, student-experience, llm, knowledge-tracing]
research_method: [system development]
audience: [learners]
level: [k 12]
category: [engagement]
sources: ['raw/papers/2605.21613.md']
confidence: high
---

> **Synthesis:** Noh et al. (2026) build a simulation framework, grounded in the logged interaction data of 261 students solving equations and interpreting graphs, to test how different learner task-selection strategies shape the efficiency of mastery-based tutoring — and whether system constraints can repair the damage. Risk-averse strategies (prioritising the skills a learner already knows best) produce dramatically more overpractice than weakness-targeting or interleaving, but a targeted, choice-preserving constraint cuts that waste by an order of magnitude without penalising learners who already practise efficiently. It is a low-cost, pre-deployment methodology for identifying *when and for whom* shared-control guardrails are worth imposing.

## Overview

[[intelligent-tutoring|Intelligent Tutoring Systems]] commonly advance learners only after they demonstrate mastery of prerequisite skills, using performance-based criteria. This guarantees competence, but it is not free: mastery-based systems can overpractice some skills while neglecting others, and because problems in multi-step domains carry several skills at once, a problem chosen for one mastered skill often drags in redundant practice of others. Overpractice is the resulting inefficiency — extra time on task without proportional learning benefit, and slower progression.

Against this, ITS increasingly grant learners shared control, letting them pick which skill or problem to practise. That autonomy is motivated by self-determination theory and brings documented motivational and metacognitive benefits — engagement, perceived autonomy, reflection on progress, persistence. The open question is what happens when learners' own task-selection strategies meet a system that ranks tasks by estimated knowledge. Prior work shows learners adopt diverse and often maladaptive strategies (Strength Targeting, Weakness Targeting, Interleaving, Blocking), and that some choices — avoiding challenge, playing it safe — can systematically delay progression. Testing corrective constraints in real classrooms is costly, slow, and risks exposing students to suboptimal conditions, so this paper asks: **how do different learner task-selection strategies, combined with system constraints, affect the efficiency of mastery-based learning?**

## Study Design & Method

- **Two real datasets.** The equation-solving dataset comes from PSLC DataShop (sets #5549, #5604), IRB-approved middle-school studies using the APTA ITS for linear equations: grades 6–8 across two public schools in the eastern United States, over 10,000 step-level interactions, averaging 5.67 ± 2.47 skills per problem. The graph-interpretation dataset is DataShop #5360, classroom transaction data from the Mathtutor ITS with 97 ninth-grade students in a U.S. high school who alternated paper practice with Mathtutor across three units on linear graphs; it contains 31 problems and 13 skills, with a denser 8.57 ± 8.41 skills per problem. The two domains differ deliberately in problem length and skill composition, giving the framework a cross-domain test of generalisability.
- **Learner models.** Step-level performance is simulated with the Additive Factors Model (AFM), which predicts correctness as a logistic function of student ability plus additive skill difficulty and practice effects. Knowledge evolution is tracked with Bayesian Knowledge Tracing (BKT), a hidden Markov model over a binary learned/unlearned state, updated by Bayes' rule after each response using prior knowledge, learning rate, guess rate and slip rate. Both models are fitted to the real datasets and the fitted parameters drive the simulation; a skill counts as mastered once the posterior exceeds a 95% threshold. BKT defaults follow TutorShop: pinit = 0.25, plearn = 0.22, pguess = 0.2, pslip = 0.1.
- **The simulation loop.** Each run lets 1,000 learners progress through a set of skills until mastery. The cycle mirrors a shared-control ITS: between problems the learner selects a skill via a predefined strategy (optionally narrowed by a system constraint), the system then selects a problem using that skill, the learner attempts the multi-step problem with per-step performance sampled from AFM, and BKT mastery estimates update after each step. Learners choose only between problems, not within them. Code is open-source.
- **Eight strategies.** Four baseline strategies come from prior work — Strength Targeting (favour skills near mastery), Weakness Targeting (favour lowest mastery), Interleaving (alternate across skills), Blocking (stay on one skill to mastery) — plus Random as a control. Three outcome-informed rules were added: Maximize Usual Case Improvement, Maximize Usual Case Outcome (both pick the highest projected post-practice mastery), and Minimize Worst Case Loss, a risk-averse rule selecting the skill with the smallest potential mastery loss.
- **Two constraint families.** Task-selection constraints narrow the selectable skill pool without prescribing a choice: *closer-to-mastery* restricts to skills just below the threshold, *further-from-mastery* to lower-proficiency skills. Problem-selection constraints bias which problem is delivered after a skill is chosen: *prefer-easier* weights lower-difficulty problems, *prefer-harder* weights higher-difficulty ones, sampled from a normalised multinomial. An unconstrained baseline is included, and each strategy is applied consistently across all conditions.
- **Metric.** Overpractice — continued practice of already-mastered skills, aggregated across all simulated learners and skills — is the primary outcome, compared across conditions using means, standard deviations, and Cohen's d.

## Key Findings

- **Risk-averse learners are the outlier.** Without constraints, Minimize Worst Case Loss produced overpractice of **30.28×** in equation-solving and **28.93×** in graph-interpretation, versus an average of **1.733 ± 0.383** and **3.223 ± 0.050** for the other seven strategies combined. The authors explain it structurally: problems covering a learner's stronger skills sit closer to mastery and so are more likely to induce redundant practice.
- **Weakness targeting is efficient.** In the equation-solving dataset, Weakness Targeting and Maximize Usual Case Improvement produced the lowest overpractice, **1.26×** and **1.29×**. Strength Targeting was the second-worst strategy for equation-solving.
- **Task-selection constraints sharply reduce the worst case.** Guiding loss-averse learners towards skills closer to mastery cut overpractice from **30.28 → 1.83** (equation-solving, Cohen's d = 1.87) and **28.93 → 3.22** (graph-interpretation, d = 1.86). The further-from-mastery variant still helped substantially, to **12.88** and **14.46**.
- **Problem-selection constraints work too.** With the Prefer Harder constraint, Minimize Worst Case Loss fell from **30.28 → 1.98** (d = 1.86) in equation-solving — levelling it with strategies that needed no constraint at all — by increasing exposure to more challenging problems.
- **Constraints are selective, not universal.** Blocking, Interleaving, Strength Targeting and Weakness Targeting held stable overpractice levels across all constraint conditions. The corrective effect is concentrated on maladaptive behaviour.
- **Domain structure matters.** The multi-step, highly recursive equation-solving dataset — where problems admit multiple solution paths and repeat skills heavily — showed greater overpractice variability and a stronger corrective response to the Prefer Harder constraint than graph-interpretation.

## Implications for AI in Education

- **Designers:** a shared-control system need not choose between autonomy and efficiency. Early indicators suggest the right move is *conditionally* bounding the choice set — flagging learners whose behaviour matches a risk-averse pattern and narrowing their skill pool, rather than applying one control policy to everyone.
- **Methodologically:** simulation grounded in real interaction logs and standard educational-data-mining models offers a cheap, reproducible way to pre-test algorithmic constraints across multiple domains before any learner is exposed to them — a bridge between data analysis and system redesign.
- **Instructors and researchers:** the motivational case for learner control stands, but its benefits are unevenly distributed. Constraint design should account for strategy diversity, since uniform constraint assumptions likely over- or under-serve different learners.
- **Caveats.** The study models a limited, static set of strategies driven by prior empirical work and deliberately excludes motivational, metacognitive and affective factors; it assumes a task-selection-first paradigm and does not model direct problem selection, multi-task selection, or fully system-driven sequencing. Whether learners *perceive* differing constraint levels, and whether salient constraints erode the autonomy benefits of control, remain open questions for future work.

## Connected Concepts

- [[adaptive-learning]]
- [[simulation]]
- [[intelligent-tutoring]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[student-engagement]]
- [[simulating-students]]
## Connected Articles

- [[engagement-forecasting-its]]
- [[neural-symbolic-knowledge-tracing]]
- [[genai-tutor-engagement-patterns]]
- [[llm-student-modeling-memory]]
- [[simulating-students-llm-review-2026]]
- [[valid-student-simulation-llm-2026]]
## Citation

Haley Noh, Aarna Chowdhary, Jeroen Ooge, Vincent Aleven, Conrad Borchers (2026). [Simulating Learners' Task-Selection Strategies and System Constraints in Mastery Learning](https://arxiv.org/abs/2605.21613). EDM 2026 (short paper).
