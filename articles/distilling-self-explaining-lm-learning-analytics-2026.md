---
title: "Distilling Black-Box Machine Learning into a Small, Self-Explaining Language Model for Learning Analytics"
created: "2026-08-24T09:10:00-04:00"
updated: "2026-08-24T09:10:00-04:00"
type: article
tags: [learning-analytics, llm, ai-ed-evaluation, benchmark, trust]
research_method: [benchmark]
category: [evaluation]
sources: ['raw/papers/distilling-self-explaining-lm-learning-analytics-2026.md']
confidence: high
---

> **Synthesis:** Pan, Meng, and Suk (2026) propose a two-stage fine-tuning pipeline that distills a fitted black-box ML estimator and its post hoc interpretation into a small, open-weight [[llm|LLM]], so that one model returns both an individual-level estimate and a natural-language explanation offline on a commodity laptop. The pipeline pairs the ALE-fANOVA decomposition of a causal estimator with a "mentor" narration that a small "mentee" model learns via LoRA, and it is evaluated under a **faithfulness-first** framework that audits every narration against the attribution it claims to describe rather than trusting fluent text as correct text. A [[simulation]] study separates distillation loss from estimator loss and shows the 2B-parameter mentee achieves near-lossless recovery of the oracle effect surface (r > .90), while almost all remaining error under a realistic X-learner originates upstream. The work carries direct implications for [[trust]] and the privacy-preserving deployment of [[learning-analytics]] decision support.

## A two-stage distillation pipeline

The design addresses two obstacles that keep ML out of educational practice: the explainability gap (post hoc tools like SHAP and partial dependence presuppose statistical literacy) and the deployment burden (running a tree ensemble plus its preprocessing and explanation stack requires hardware and expertise that classroom and family [[stakeholders]] lack). The pipeline's first stage, **mentor construction**, fits any flexible ML estimator — a neural network, a stacked Super Learner, or a causal estimator such as an X-learner — and decomposes each individual's estimate with accumulated local effects plus functional ANOVA (ALE-fANOVA) into a grand mean, first-order covariate terms, one data-driven pairwise interaction, and a residual. A capable mentor LLM then renders each student's decomposition ledger as a structured "mentor trace" that must close arithmetically (baseline + cited contributions + residual = estimate). The second stage, **mentee distillation**, fine-tunes a small open-weight Gemma 4 E2B model (~2B active parameters) with rank-16 LoRA adapters — about 0.7% of base parameters — on roughly 7,300 accepted traces so the estimate, its decomposition, and the decision are absorbed into the mentee's weights. At deployment a single model maps a student's covariate profile to an effect estimate, an individualized explanation, and a recommended action, with no upstream estimator, interpretation tool, or network connection at inference time.

Two selection rules keep the citation set honest: a global eligibility filter admits a covariate as narratable only if its average absolute contribution reaches a fixed fraction (20%) of the strongest covariate's, and within a student terms are cited in descending order of absolute contribution until they account for 90% of the attribution (capped at five). The mentor may only attach interpretive language from a small phrase pool derived from the fitted estimator itself, so it cannot explain a contribution by hallucinating a mechanism.

## Faithfulness-first evaluation

The paper rejects the common practice of evaluating distilled models only on task accuracy. Its faithfulness audit operates across four layers and serves as an acceptance gate at corpus construction and as the evaluation procedure for everything the mentee generates. The first layer checks arithmetic closure — that the stated decomposition sums exactly to the stated estimate and that every number in the prose traces to the decomposition. The second verifies that the cited covariates are the influential ones rather than [[hallucination-risk|hallucinations]], scored in simulation by the AUC for ranking true moderators above decoys and noise, and by the rate at which noise and false interactions are cited. The third measures decision fidelity by comparing the recommended action with the action implied by ground truth. The fourth targets the most consequential failure for [[ai-ed-evaluation|educational decision support]]: the unsafe-treatment rate, or the proportion of harmed individuals wrongly recommended for treatment.

A central design insight is that fluency is no evidence of correctness. Because an LLM produces fluent narration whether or not it is true, the audit evaluates every narration against the attribution it claims to describe. The simulation study is therefore built to separate distillation loss from estimator loss by comparing an **oracle mentor** (which provides the true effect surface directly) with a **realistic X-learner mentor**, in a 2×2 design crossing severely (97.1%) and moderately (72.5%) imbalanced decision distributions.

## Simulation and empirical findings

Under the oracle mentor, the mentee recovers the true CATE surface closely: Pearson correlations reach **0.925 and 0.910** with slopes near 0.9, so the small model both ranks students correctly and reproduces the scale of effects rather than collapsing them toward the mean. It ranks the true moderators above decoys and noise at **AUC = 1.000**, cites no spurious covariate (**FalseCite = 0.000**), and the interaction screen lifts decomposition closure to **ρ²_dec = 0.969**. Under the realistic X-learner, mentee–mentor gaps are at most 0.074 on point fidelity, while the correlation with truth falls to about **0.72** and the slope to about **0.50** — compression already present in the estimator before any narration is written. The bottleneck is upstream estimation, not fine-tuning; indeed the mentee's point estimates are slightly *closer* to ground truth than the mentor's because the ALE decomposition and distillation smooth a noisy CATE.

Applied to a nationally representative dataset (HSLS:09, n = 9,167), the pipeline estimates the effect of advanced mathematics coursework (AP/IB) on four-year college enrollment. The X-learner estimates an ATE of **0.230** with positive effects for 98.3% of students; the leading moderators are prior mathematics achievement (17% variance share) and socioeconomic status (13%), with effects declining monotonically across quartiles — so the advanced mathematics coursework most benefits students least likely to enroll in four-year college, consistent with Byun et al. (2015). On a held-out test split of 1,834 students, the mentee correlates with the mentor at r = 0.71, **98.8% of narrations pass the faithfulness audit in full**, 99.7% self-close arithmetically, and there are no fabricated quantities. The entire negative tail of the mentor's surface is truncated in distillation, so the mentee recommends treatment for all students in a severely imbalanced case — a decision-quality collapse that fluency cannot reveal.

## Implications for trustworthy learning analytics

The paper's central lesson is that fluency and faithfulness are distinct properties. Across every condition, the mentee produces narrations that read well, cite covariates with correct calculation, and end with confident, actionable recommendations — yet in the severely imbalanced simulation it recommends actually harmful treatment to almost all harmed individuals under the X-learner. This danger can only be surfaced in a simulation where ground truth is known by construction, and it is especially concerning in [[learning-analytics]], where parents, students, and counselors are the least equipped to notice that a well-written explanation is wrong. The upstream model therefore deserves the most scrutiny, since it mostly determines what the mentee learns.

The pipeline also carries favorable [[ethics|privacy and fairness]] properties. Because student records never leave the machine and are never sent to a third-party model provider, it enables local, [[human-in-the-loop-ai|human-in-the-loop]] decision support; the deployment runs on a commodity laptop with no network access, producing an estimate and explanation in about ten seconds. For fairness, sensitive covariates can be dropped entirely in prediction tasks (fairness through unawareness) or handled at the decision stage in causal tasks, and the design extends naturally to distill multiple upstream models into one general analysis assistant. The simulation rests on only five replications and the empirical study on one dataset and outcome, and the mentee compresses effect magnitudes in every condition, so individual point estimates should be read with caution even where correlation is high — a limitation the paper exposes honestly rather than concealing behind qualitative labels.

## Connected Concepts

- [[learning-analytics]]
- [[llm]]
- [[trust]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[educational-nlp]]
- [[student-modeling]]
- [[multimodal]]
- [[ethics]]
- [[human-in-the-loop-ai]]

## Connected Articles

- [[shap-llm-rationales-teaching-quality-assessment]] — SHAP and LLM rationales for rubric-based teaching quality assessment
- [[xai-education-framework]] — An Explainable AI framework for education
- [[explainable-probabilistic-kt]] — Explainable probabilistic knowledge tracing
- [[fair-explainable-edu-recommendations]] — Fair and explainable educational recommendations
- [[knowledge-distillation-ai-tutor-evaluation]] — Knowledge distillation for AI tutor evaluation

## Citation

Pan, C., Meng, A., & Suk, Y. (2026). [*Distilling Black-Box Machine Learning into a Small, Self-Explaining Language Model for Learning Analytics*](https://arxiv.org/abs/2608.21165).
