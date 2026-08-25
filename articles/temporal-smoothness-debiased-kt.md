---
title: Temporal Smoothness Doubly Robust Learning for Debiased Knowledge Tracing
created: "2026-05-13T04:33:04-04:00"
updated: "2026-08-24T10:00:00-04:00"
type: article
tags: [knowledge-tracing, learning-analytics, personalized-learning, intelligent-tutoring, student-experience]
sources: ['raw/papers/2605.05958.md']
confidence: medium
---

> Zhan et al. reframe Knowledge Tracing as a problem of selection bias: educational logs are recorded non-randomly because students skip questions they deem too hard, too easy, or boring, so standard empirical-risk training fits the selection policy rather than the true knowledge state. Their **Temporal Smoothness Doubly Robust (TSDR)** framework combines a doubly robust estimator (a propensity model plus an error imputation model) with a temporal smoothness regularizer, deriving a generalization bound that shows the smoothness constraint controls the variance term that destabilizes sequential training. Across nine real-world benchmarks and controlled MNAR simulations, TSDR consistently improves six state-of-the-art KT backbones while remaining "safe" even when selection bias is minimal.

## Key Findings

1. Knowledge Tracing models trained on observed interaction logs with standard empirical risk are systematically biased: because exercise recommendations and student choices are non-random (Missing Not At Random, MNAR), the naive estimator overfits the selection policy instead of the true knowledge dynamics, producing skewed mastery estimates.
2. The paper derives a doubly robust (DR) estimator for KT that integrates a propensity model with an error imputation model, formally guaranteeing unbiasedness if *either* auxiliary model is accurate (the bias is a product of the two model errors, yielding second-order error decay).
3. A generalization bound reveals that in the sequential KT setting the estimation risk is dominated not only by bias but by a variance term scaling with the squared imputation error, which inaccuracy in the imputation model inflates and destabilizes training.
4. The proposed TSDR framework introduces a temporal smoothness constraint on the latent imputation trajectory — aligned with the Power Law of Practice — that regularizes the path length, reduces the Rademacher complexity, and tightens the bound, suppressing variance while preserving the DR unbiasedness guarantee.
5. TSDR is model-agnostic: it jointly co-optimizes the KT predictor with the propensity and imputation models, and experiments on nine datasets show consistent AUC/ACC improvements and RMSE reductions across DKT, AKT, simpleKT, FoLiBiKT, SparseKT, and DisKT — with the largest gains on sparse or high-autonomy platforms.

## Background: Selection Bias in Knowledge Tracing

Knowledge Tracing (KT) models a student's dynamic [[knowledge-tracing|knowledge state]] from their historical interaction sequence to predict mastery of future questions, and is fundamental to [[adaptive-learning]] and [[intelligent-tutoring]] systems. Yet the educational logs these models train on are only selectively observed: in online learning, students strategically skip questions they judge "too difficult" or "boring," so whether a student–question interaction is logged depends on the student's ability and the question's difficulty — a [[psychometrically-aware-ai|Missing Not At Random (MNAR)]] property. Because recommendations are tailored to a student's estimated level (the Zone of Proximal Development), biased mastery estimates trigger biased recommendations, creating a feedback loop that compounds the bias in downstream recommendation loops.

Most existing KT methods neglect this selection mechanism, training on observed logs using standard empirical risk. Prior debiasing work falls into two camps: modeling noise in student responses (guessing and slipping, disengagement, adversarial and contrastive denoising) and removing spurious correlations and "causal confusion" via reweighting or causal subtraction. As the paper notes, these approaches tackle denoising and feature-level disentanglement but largely overlook the systemic selection bias rooted in *why* interactions are recorded in the first place.

## The Doubly Robust Formulation

To address the bias, the authors adopt a causal-inference perspective and reframe KT as a counterfactual estimation problem. The naive estimator computes risk only over observed data; since the observation propensity is non-uniform, its expectation diverges from the true risk. They instead define a doubly robust estimator that combines two strategies borrowed from the [[reinforcement-learning|off-policy]] and recommender-systems literature:

- an **error imputation model** that predicts the prediction error for unobserved interactions, providing a baseline estimate over the full distribution, and
- a **propensity model** that estimates the probability an interaction is observed, whose inverse weights a correction term on the residual between the true and imputed error for observed interactions.

This structure delivers the *double robustness* property: if the imputation model is accurate the correction term vanishes (minimizing variance), and if the propensity model is accurate the correction term keeps the estimator unbiased even when the baseline imputation is poor. Because the bias equals the product of the two auxiliary-model errors, DR achieves a second-order error decay that beats estimators dominated by a single error term.

## Temporal Smoothness and the Generalization Bound

Directly applying DR in the sequential setting of KT is unstable: inaccurate imputation models cause the training loss to oscillate, and the inherent noise of educational responses (guessing and slipping) triggers error propagation and accumulation through deep sequential models. To quantify this rigorously, the authors derive a generalization bound that decomposes the true risk into an empirical-risk term, a bias term (from the DR estimator), and a **variance term** that scales with the squared imputation error divided by the propensity. The variance term loosens the bound and destabilizes training whenever the imputation model is inaccurate.

This insight motivates their key design choice: a **temporal smoothness constraint** on the latent imputation trajectory. Restricting the path length of the imputation-specific latent states encodes the intuition that a student's mastery changes gradually over time — consistent with the Power Law of Practice — and by reducing the Rademacher complexity it tightens the generalization bound and suppresses variance while leaving the unbiased nature of the DR estimator intact. Sharp fluctuations in predicted mastery are treated as more likely to reflect noise than genuine learning events.

## The TSDR Framework and Joint Learning

TSDR is a model-agnostic framework that jointly learns three modules: the KT backbone (encoder plus predictor), a propensity model (a Multivariate Bernoulli distribution trained with BCE treating unobserved concepts as implicit negatives), and an error imputation model (a separate encoder trained with an Inverse Propensity Score weighted MSE plus the smoothness regularizer). The KT model is trained by minimizing the doubly robust loss instead of naive BCE.

Because the generalization bound shows imputation errors inflate the variance term, the models are co-optimized in an alternating strategy — updating the imputation and propensity models in one phase, then the KT model against the counterfactual imputed errors in the next — so the auxiliary and backbone models mutually regularize each other. The additional training overhead is confined to the offline phase and does not compromise online inference efficiency.

## Empirical Results

The framework was evaluated on nine real-world benchmarks (Spanish, ASSISTments17, Slepemapy, Algebra05, Prob, Linux, Database, Comp, and EdNet) applied to six [[benchmark|SOTA baselines]] (DKT, AKT, simpleKT, FoLiBiKT, SparseKT, DisKT). Key observations:

- TSDR improves AUC across diverse architectures, with the largest gains on sparse or high-student-autonomy datasets — e.g., AKT by 5.06% on Prob and SparseKT by 4.76% on Assist17 — suggesting it recovers mastery patterns by mitigating bias in MNAR data.
- Gains correlate with the data-collection mechanism: EdNet, whose mandatory "bundle" completion policy makes missingness closer to random, shows only ~1% AUC gain, confirming the framework targets genuine selection bias.
- Secondary metrics (ACC, RMSE) improve consistently, indicating better-calibrated probability estimates even where ranking performance plateaus (e.g., SparseKT RMSE reduced 1.70% on Linux).
- On synthetic data with controllable MNAR degrees (γ up to 0.999), TSDR improves across the whole bias spectrum, and it remains "safe" at γ = 0.0 — no degradation even when selection bias is minimal, thanks to the regularizing effect of counterfactual imputation.
- The temporal smoothness coefficient λ has a stable "sweet spot" in [0.3, 1.0], outperforming vanilla DR (λ = 0) and requiring no meticulous tuning.

## Implications for AI in Education

Selection bias is not a niche concern: any [[adaptive-learning|adaptive system]] that recommends exercises based on what it believes a student knows creates a feedback loop in which the data collected is shaped by the model's own prior estimates, systematically over- or under-representing particular learners. TSDR's combination of propensity weighting, error imputation, and temporal smoothness offers a template for building debiased [[student-modeling]] pipelines that remain stable as they are iteratively retrained on fresh interaction data, with consequences for the [[trust]] and [[trust-calibration|calibration]] of mastery estimates that drive placement and remediation decisions.

For researchers and practitioners, the work underscores the importance of modeling the data-generating process — who gets which exercise and why — rather than treating observed logs as a random sample. This connects to [[bias-mitigation]] and [[equity-in-ai-education]] more broadly, since fairness and accuracy concerns in educational AI are often traceable to selection mechanisms, and to [[ai-ed-evaluation]], where evaluating KT and similar models against potentially biased data requires accounting for how the evaluation data itself was collected. The findings also inform [[student-experience]] research: the strategic skipping that drives bias reflects genuine learner agency and motivation, and systems should reason about why a learner disengages rather than treating non-response as absence of information.

## Connected Concepts

- [[personalized-learning]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[bias-mitigation]]
- [[adaptive-learning]]
- [[educational-measurement]]
- [[item-response-theory]]
## Connected Articles

- [[explainable-probabilistic-kt]] — Explainable Knowledge Tracing via Probabilistic Embeddings and Pattern-based Reasoning
- [[skill-acquisition-without-temporal-info]] — Estimating Learners' Skill Acquisition Without Temporal Information
- [[knowledge-gap-detection-ai-tas]] — Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM-Enhanced Hierarchical Cognitive Diagnosis
- [[student-math-competence-clustering]] — Archetypes or ability? Clustering for modelling student mathematical competence
- [[pattern-kc-programming-recommendation]] — Automated Recommendation of Programming Learning Content Using Pattern-based Knowledge Components
- [[reliable-programming-kt]]
- [[huang-interpretable-knowledge-tracing-2026]]

## Citation

Zhan et al. (2026). [Temporal Smoothness Doubly Robust Learning for Debiased Knowledge Tracing](https://arxiv.org/abs/2605.05958). arXiv:2605.05958. arXiv preprint.
