---
title: "MARS: A Momentum-Aware Adaptive Rating System for Personalized Assessment"
created: "2026-10-16T09:20:00-04:00"
updated: "2026-10-16T09:20:00-04:00"
type: article
sources: ['raw/papers/mars-momentum-aware-adaptive-rating-assessment-2026.md']
confidence: high
page_kind: [framework, evaluation]
research_method: [system development, experiment]
level: [higher ed, adult learning]
audience: [instructors, learners, software developers, administrators]
pedagogy: [mastery-learning, scaffolding]
technology: [adaptive-learning, personalized-learning, knowledge-graph, knowledge-tracing, student-modeling, recommender-systems-and-learning-paths, learning-analytics, cognitive-diagnosis]
assessment: [assessment, item-response-theory, automated-assessment, educational-measurement, psychometrically-aware-ai]
methods: [quantitative-research, research-methods-aied, benchmark]
institutions: []
ethics: [explainable-ai, bias-mitigation, privacy]
foundations: []
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-16"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Sahu, Naik and Gupta (2026) present MARS, an interpretable adaptive-assessment framework that models a question bank as a directed weighted [[knowledge-graph]] and updates learner proficiency with dynamic rating sensitivity, response-quality scaling, and momentum-aware learner velocity instead of fixed Elo-style steps. As an alternative to calibrated [[item-response-theory]] item banks and black-box [[knowledge-tracing]], MARS keeps a handful of explicit learner scalars so every recommendation ships with an explanation tuple, and it routes questions under a time-budgeted mark-maximization objective (J = 50 questions, T = 3600 seconds, ρ = 0.25 negative marking). Evaluated on ASSISTments 2009 and the synthetic persona-based MARS-SimExam, MARS is not the strongest [[benchmark]] predictor — GKT reaches AUC 0.8658 to its 0.7532 on ASSISTments — but it produces smoother rating updates than Fixed Elo (mean absolute update 9.47 to 4.95) and the best time-budgeted routing score, 89.28 against DKT's 81.19, while cutting overtime from 50.0% to 5.6%. The contribution is a deployment-oriented [[student-modeling]] and routing layer for [[adaptive-learning]], not a replacement for neural knowledge tracing in passive prediction.

## Key Findings

1. MARS represents the question bank as a directed weighted [[knowledge-graph]] whose edges are same-topic, subject-flow (prerequisite), or bridge links, and treats any topic where accuracy falls below the weak-topic threshold τw = 0.40 as a weak topic for remediation.
1. Rating updates combine dynamic sensitivity, a response-quality multiplier Qi,p = 0.85 + 0.30 Pi,p, and a momentum velocity term, updating rating, velocity, streak and variance from scalars at online cost O(dkh) with hop limit kh ∈ {1, 2, 3}.
1. Learner state carries interpretable momentum labels — hot when streak k ≥ 5 and session accuracy ≥ 0.80, cold when k ≤ −3 and accuracy < 0.40, steady otherwise — and every recommendation returns an explanation tuple with graph distance, target rating and velocity.
1. Under the time-budgeted objective (J = 50 questions, T = 3600 seconds, ρ = 0.25 per wrong answer), MARS scores 89.28 against DKT's 81.19 (+8.09), BKT's 75.68 (+13.60) and GKT's 66.01 (+23.27), and reduces overtime violations from 50.0% to 5.6% (−44.4 percentage points).
1. On ASSISTments 2009 (4,217 learners, 26,688 items, 346,860 interactions, 123 topics) MARS trails neural knowledge tracing on prediction — AUC 0.7532 versus GKT's 0.8658 — while on the synthetic MARS-SimExam it posts the highest AUC, 0.8265 against Fixed Elo's 0.8244.
1. Against Fixed Elo, MARS cuts the mean absolute rating update from 9.47 to 4.95 and the update standard deviation from 13.84 to 7.68, a 44.5% reduction in update volatility.
1. Ablation shows the trade-off is deliberate: fixed K instead of dynamic K raises AUC to 0.7698 but inflates mean absolute update to 9.3175, and a streak multiplier lowers AUC to 0.7244 and raises log loss to 1.0238.

## Rating, momentum, and response quality

MARS keeps the transparency of rating-based systems while softening their volatility. Each interaction yields a raw update ΔRi,p = Ki,p Qi,p (Si,p − Ei,p), where Ki,p falls from Kmax = 45.0 toward Kmin = 12.0 over the first nprov = 30 attempts, and Qi,p = 0.85 + 0.30 Pi,p scales the step by a response-quality score assembled from correctness, response time, hint usage and streak. A momentum velocity term then carries that signal forward, with the momentum coefficient adapted to rating volatility so that stable learners are smoothed and volatile learners are not over-committed. Correct-but-rapid answers are capped so speed cannot inflate the rating. The output is a [[student-modeling]] layer that updates a few explicit scalars, which is why the authors position it for [[feedback]] and [[automated-assessment]] settings where interpretable [[evaluative-judgment|judgment]] matters more than raw [[machine-learning|predictive power]].

## Graph-guided routing under a time budget

The question bank becomes a directed weighted graph G = (V, E, w): same-topic edges order items by difficulty, subject-flow edges follow prerequisite or curriculum sequence, and bridge edges link conceptually dependent items across topics. From the last attempted item MARS builds a candidate set within kh graph hops, scores each candidate on heuristic fit, graph structure and momentum alignment, and returns the maximum-utility item with its explanation. When a miss is unresolved, routing switches to a remediation set of graph-related but easier items until remediation progress and accuracy clear their thresholds, after which the missed item is queued for retry. Under the time-budgeted objective the policy maximizes expected marks minus a 25% penalty for wrong answers subject to the 3600 second cap, so it weighs [[recommender-systems-and-learning-paths|recommendation]] value against overtime risk rather than chasing [[knowledge-graph|graph]] centrality alone.

## Evaluation on ASSISTments and a simulated exam

The experiments use two datasets: ASSISTments 2009, the public observational log, and MARS-SimExam, a persona-based synthetic assessment set built from 300 learners across 10 personas, with 1,091 questions, 277,500 learner–question interactions, 8 subjects and 54 topics, plus 6,000 test sessions. Prediction is measured by AUC, accuracy, log loss and Brier score; rating stability by mean absolute update (MAU) and update standard deviation (SDU); and routing by Score, Score/min, raw Marks, total Time and Overtime across 90 evaluated session-policy pairs, with each policy selecting at most 50 questions within 3600 seconds. On ASSISTments the neural baselines win — DKT reaches AUC 0.8648 and GKT 0.8658 against MARS's 0.7532. On the synthetic setting, where routing dynamics exist, MARS posts the top AUC, 0.8265, just ahead of Fixed Elo's 0.8244, and the routing table favors MARS on score efficiency and time discipline.

## What this means for practice

- **Instructors.** Prefer a system that can show its reasoning: MARS returns an explanation tuple with graph distance, target rating, effective item rating, weak-topic bonus, centrality and velocity for every recommended question, and its remediation path routes learners through related easier items before returning to the missed one.
- **Software developers.** Budget for scalar state, not sequence recomputation: MARS updates a few cached values per response at O(dkh) with kh ∈ {1, 2, 3}, independent of item-bank size, which the authors present as fitting web-based practice platforms and LMS-integrated quizzes.
- **Learners.** Treat the smoother trajectory as the design goal: compared with Fixed Elo, MARS lowers the mean absolute rating update from 9.47 to 4.95 and caps correct-but-rapid answers, so a single lucky fast response moves your standing less.
- **Administrators.** Revisit the overtime accounting before trusting score gains: the routing result depends on a time model fitted on the training split, and the authors call for validation on real adaptive deployment logs before high-stakes use.
- **Software developers.** Keep the routing objective risk-aware: the authors report that a reward-only policy without negative marking over-selected high-mark, high-difficulty items, which is why the final objective charges a 25% penalty for wrong answers.

## Limitations

- ASSISTments 2009 is observational (4,217 learners and 346,860 interactions), so the authors state it cannot fully evaluate counterfactual routing, and MARS trails the neural knowledge-tracing baselines on that benchmark — AUC 0.7532 versus GKT's 0.8658 and DKT's 0.8648.
- The routing and score-efficiency results come from MARS-SimExam, a 277,500-interaction dataset generated by a Fixed-Elo-based persona simulator; the authors say it cannot fully represent real learner behavior and that the gains should be validated on real adaptive deployment logs.
- MARS depends on the quality of the question graph, skill labels and item-difficulty estimates, and the authors note that weak graph edges may degrade routing quality.
- Response-time features may be affected by device, network, reading-speed or accessibility differences, so timing signals are not a clean read of learner ability.
- The time-budgeted comparison covers only BKT, DKT, GKT and MARS; uncertainty-aware Glicko-style, transformer-based and recent graph-aware knowledge-tracing models were left to future work.
- Overtime is computed from one median response-time model fitted on the training split, with an item admitted only while elapsed time is below T, so the authors note that overtime differences reflect item selection rather than accounting.

## Citation

Sahu, V., Naik, K. S., & Gupta, G. R. (2026). [*MARS: A Momentum-Aware Adaptive Rating System for Personalized Assessment*](https://arxiv.org/abs/2610.21685). arXiv preprint arXiv:2610.21685 (cs.CY).
