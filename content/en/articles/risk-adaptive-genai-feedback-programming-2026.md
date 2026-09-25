---
title: "A Risk-Adaptive and Evidence-Constrained Framework for Generative AI Feedback in Programming Education"
created: "2026-09-25T09:40:00-04:00"
updated: "2026-09-25T09:40:00-04:00"
type: article
sources: ['raw/papers/risk-adaptive-genai-feedback-programming-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [process-outcome modeling]
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, learning analytics designers, educational technology developers, researchers]
assessment: [ai-feedback-quality, automated-assessment, feedback, learning-gains]
technology: [learning-analytics, knowledge-tracing, adaptive-learning, generative-ai, llm, student-modeling]
pedagogy: [scaffolding, productive-failure, self-regulated-learning, help-seeking]
foundations: [limitations-in-aied-research]
ethics: [hallucination-risk, explainable-ai]
methods: [ai-ed-evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Wang (2026) links three functions that [[learning-analytics]] usually evaluates separately: predicting which failed programming state will persist, deciding when limited support capacity should be spent, and generating [[feedback]] whose claims stay inside the recorded evidence. Using 2993 failed-submission states from 215 students, the study predicted persistent failure across the next two attempts under student-disjoint evaluation; a validation-selected logistic regression model reached a test precision–recall area under the curve of 0.550 and ROC-AUC of 0.681. A paired generation experiment produced 544 messages for 136 cases under four progressively richer contexts, holding the model fixed. After one standardized repair pass and deterministic source gating, 519 of 544 messages contained all required components. A fixed-threshold sequential policy selected 17.8% of eligible test states and captured 25.2% of observed persistent failures. The contribution is a separation of [[student-modeling|prediction]], decision, generation, and learning effects — an [[ai-feedback-quality|auditable]] alternative to optimizing accuracy or fluency alone.

## Key Findings

1. Logistic regression reached a test precision–recall area under the curve of 0.550 and ROC-AUC of 0.681 for persistent failure across the next two same-task attempts.
2. Deep sequential models did not consistently beat the tabular baseline: the no-AST fusion GRU produced the highest test PR-AUC (0.596) despite the lowest validation PR-AUC (0.508).
3. Broader student histories improved prediction of unmodified retry, where a history-summary gradient-boosting model reached PR-AUC 0.659 and ROC-AUC 0.776.
4. Near-term related-task performance was hardest: test ROC-AUC was 0.303 for the fusion GRU and 0.433 for logistic regression.
5. After one standardized repair pass and deterministic source gating, 519 of 544 messages (95.4%) contained all required components, and the gate removed 484 unverifiable references.
6. A fixed-threshold sequential policy selected 17.8% of eligible test states and captured 25.2% of observed persistent failures; a more sensitive configuration reached 22.0% coverage and capture recall 0.333.

## Predicting Persistent Failure from Time-Valid Traces

The study drew on 2993 candidate states from 215 students in a de-identified [[cs-education|introductory programming]] course. Eight configurations were compared — logistic regression, gradient boosting, and several neural variants — using only inputs available at the decision time, including recorded [[automated-assessment|autograder results]]. [[explainable-ai|Interpretability]] analyses are kept separate from learner-facing explanation. The target also differs from [[knowledge-tracing|knowledge tracing]]: it is observed future failure rather than latent mastery.

## From Calibrated Risk to Capacity-Aware Intervention Timing

Because instructor attention is finite, the study reframes [[adaptive-learning|adaptivity]] as a decision problem rather than a ranking problem, avoiding disruption of [[productive-failure|productive struggle]]. At a 20% alert budget the student-history policy captured 62 persistent failures (precision 0.559), logistic risk captured 66 (precision 0.595), and a plain consecutive-failure rule captured 75 (precision 0.676). The sequential policy fixed its threshold at the 80th percentile of calibrated validation risk and triggered on 17.8% of test states with precision 0.566 and capture recall 0.252; a more sensitive variant reached 22.0% coverage, precision 0.607, and capture recall 0.333. Alerting after every failure covered all states at the base rate of 0.400; a two-consecutive-failures rule covered 97.7% and captured 99.1% of failures.

## Evidence-Constrained Generation and Progressive Assistance

The [[generative-ai|generation pipeline]] used one fixed model, Qwen2.5-Coder-1.5B-Instruct, across four conditions that added current-task evidence, recent history, module context, and calibrated risk with an assistance instruction. Risk-adaptive assistance mapped validation percentiles onto a [[self-assessment|self-check]] instruction (31 cases), a concept reminder (80 cases), or a localized hint with the smallest supported next step (25 cases). Before repair, all required components appeared in 77.2% of F1 and 92.6% of F4 outputs; after repair and gating those rates were 97.1% and 97.1%. Only 16 of 544 outputs contained an exact code match, and unresolved outputs went to [[human-in-the-loop-ai|human review]]. This is the paper's main defense against [[hallucination-risk]], and the [[scaffolding|progressive sequence]] keeps the self-check responsible for verification.

## An Auditable Split Between Prediction, Decision, and Generation

The framework keeps three evaluation endpoints distinct: prediction is judged by held-out discrimination and calibration, policy value by precision and failure capture under fixed alert budgets, and [[ai-feedback-quality|message quality]] by structure, actionability, and source traceability. Unmodified retry was the most predictable secondary behavior (gradient boosting PR-AUC 0.599, ROC-AUC 0.735), and the 7–28-day outcome showed promising longitudinal discrimination across 67 test cases from 25 students. The course's own randomized subset showed natural-language feedback associated with lower odds of subsequent persistent failure than no feedback (odds ratio 0.234, 95% CI [0.091, 0.602]) among 552 candidate states from 124 students. Unmodified retry also offers a concrete [[self-regulated-learning|self-regulation]] signal: it captures monitoring and strategy change rather than a correctness score.

## What this means for practice

- **Instructors.** Set the alert budget first, derive the risk threshold from it, then review flagged states with their supporting trace instead of scanning the whole cohort.
- **Course teams.** Gate every generated message on a source check: delete code references that cannot be matched to the learner record and route unresolved outputs to review.
- **Tool designers.** Escalate assistance in explicit steps — self-check, concept reminder, localized hint — and reserve specific guidance for sustained difficulty rather than a uniform delay.
- **Program leaders.** Begin with instructor review of risk and escalation levels, then automate selectively after local validation.

## Limitations

- The evidence comes from a single introductory programming course: 2993 candidate states from 215 students, with the randomized feedback comparison covering only 552 states from 124 students.
- Predictive performance was moderate: the logistic model reached test PR-AUC 0.550 and ROC-AUC 0.681, and near-term related-task performance fell near or below chance (fusion GRU ROC-AUC 0.303).
- All 544 messages came from one small generator, Qwen2.5-Coder-1.5B-Instruct, under one deterministic decoding procedure, so structural results may not transfer to other models.
- The source-verification signal rests on few traceable references: only 16 of 544 outputs had an exact code match before gating, and 25 still required structural review.

## Connected Concepts

- [[ai-feedback-quality]]
- [[learning-analytics]]
- [[cs-education]]
- [[automated-assessment]]
- [[feedback]]
- [[scaffolding]]
- [[knowledge-tracing]]
- [[adaptive-learning]]
- [[generative-ai]]
- [[human-in-the-loop-ai]]
- [[productive-failure]]
- [[hallucination-risk]]
- [[explainable-ai]]
- [[student-modeling]]
- [[self-regulated-learning]]

## Connected Articles

- [[llm-feedback-programming-classroom]] — A Classroom Study of LLM-Generated Feedback Intervention in Introductory Programming
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[llm-adaptive-programming-error-explanations-2026]] — Beyond the Traceback: Using LLMs for Adaptive Explanations of Programming Errors
- [[ai-supported-automated-programming-assessment-2026]] — Design and Evaluation of an AI-Supported Automated Programming Assessment Environment for Concept-Aligned Reinforcement in Engineering and Computing Education
- [[reliable-programming-kt]] — Ensuring Reliability in Programming Knowledge Tracing: A Re-evaluation of Attention-augmented Models and Experimental Protocols
- [[learning-analytics-to-educational-interventions-2026]] — From Learning Analytics to Educational Interventions: Enhancing Decision-Making and Learning Design
- [[at-risk-students-ml-prediction]] — Analysis and Prediction of At-Risk Students Using Machine Learning Algorithms
- [[zhang-ml-student-progress-programming-2026]] — A Machine Learning Approach for Predicting Student Progress in Online Programming Education

## Citation

Wang, S. (2026). [*A Risk-Adaptive and Evidence-Constrained Framework for Generative AI Feedback in Programming Education*](https://arxiv.org/abs/2609.29874). arXiv preprint.