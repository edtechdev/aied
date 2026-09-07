---
title: "Federated and Explainable Learning Analytics for Privacy-Preserving Academic Risk Modeling Across Heterogeneous Educational Institutions"
created: "2026-09-07T08:25:00-04:00"
updated: "2026-09-07T08:25:00-04:00"
type: article
tags: [learning-analytics, privacy, ai-ed-evaluation, machine-learning]
research_method: [experiment, learning analytics]
discipline: [learning analytics]
audience: [learning analytics designers, researchers, institutions, administrators]
level: [higher ed]
category: [evaluation, ai foundations]
sources: ['raw/papers/villegas-ch-federated-explainable-learning-analytics-2026.md']
confidence: high
---

> **Synthesis:** Villegas-Ch et al. (2026) propose a federated, explainable [[learning-analytics]] framework for modeling academic risk — jointly predicting [[learning-gains|academic performance]] and dropout — across institutions without sharing raw student data. Their "DEAFederated" architecture combines a temporal (GRU) encoder with a tabular feature block and two multitask output heads, trained under a FedAvg/FedProx scheme. Crucially, they simulate *controlled, multidimensional* [[governance|institutional]] heterogeneity (label skew, class imbalance, temporal drift, structural missingness) and evaluate models along four axes — discrimination, calibration, robustness, and explanatory stability — finding that federated training preserves ranking performance and stable feature-importance rankings across institutions, while probabilistic calibration proves far more sensitive to heterogeneity. This surfaces a key decoupling between *ranking* accuracy and *probabilistic reliability* that matters wherever risk predictions trigger threshold-based interventions.

## Key Findings

1. **Federated training preserves discriminative performance under heterogeneity.** On OULAD the model reaches AUC = 0.918 and F1 = 0.755; performance-task AUC stayed near the centralized 0.925 with only sub-0.0015 variation across Dirichlet concentration levels, with no monotonic degradation or collapse as heterogeneity increased.
2. **Ranking and probabilistic reliability decouple.** While AUC/F1 (ranking performance) stayed stable, calibration metrics (Brier score, Expected Calibration Error) proved markedly more sensitive to distributional shifts — in the performance task ECE even *fell* at the most-fragmented level (α = 0.1), showing aggregated decentralized outputs reshape the confidence distribution rather than degrade cleanly.
3. **Explanatory structure stays stable across institutions.** Feature-importance ranking stability (RankStab) ranged 0.99–1.00, so heterogeneity changed *how much* features mattered, not *which order* they ranked — supporting transparency and trust, while attribution *magnitudes* varied with local data.
4. **Local explanations diverge non-monotonically with heterogeneity.** Attribution divergence from the global reference rose then fell with α in the dropout task, indicating moderate fragmentation (not the most extreme) is where local explanatory profiles drift most.
5. **Predictive generalization does not imply explanatory equivalence.** A model trained on OULAD retained discrimination when transferred to EdNet-KT1 (F1 rising to 0.882 on a proxy dropout label), but the authors caution this reflects an alignment between proxy-label construction and temporal persistence features — a near-deterministic boundary — rather than a discovered universal predictor.
6. **Multidimensional evaluation is essential.** Performance, calibration, and interpretability do not evolve uniformly during federated training, so single-metric evaluation mischaracterizes how institutional heterogeneity affects a model.

## Methods in Brief

The framework formulates academic risk as a multitask problem with targets for both performance and dropout. Each institution's data stays local; a global server aggregates model parameters via sample-size-weighted FedAvg (with a proximal FedProx variant). Institutional heterogeneity is *parameterized* — Dirichlet (α) label skew, dropout-class imbalance (β), temporal drift, and structural missingness (γ) — rather than imposed as ad-hoc non-IID partitions. Explainability uses SHAP-based feature attributions compared as vectors: each institution's mean attribution profile is measured against a sample-size-weighted global reference via a Euclidean divergence metric (Δ), plus the RankStab rank-stability measure.

## Implications for Institutions and Designers

- **Privacy-preserving cross-institutional modeling is viable.** Federated training lets institutions collaborate on risk models while retaining data sovereignty — relevant where privacy constraints block centralized analytics.
- **Do not trust raw probabilities across institutions.** Because calibration drifts under heterogeneity, probability thresholds that trigger early-warning interventions may need per-institution adjustment or post-calibration before use.
- **Separate ranking from reliability in deployment.** A model can rank at-risk students correctly while producing miscalibrated probabilities; intervention systems should be designed knowing which capability they rely on.
- **Explainability can support trust and targeting.** Stable feature-importance rankings help identify persistent behavioral indicators of risk (persistence, interaction density, reduced activity) to inform differentiated support.

## Limitations

The EdNet proxy label is derived from the same temporal-persistence features used as inputs, inflating apparent cross-platform discrimination; the temporal representation abstracts learning into aggregated patterns without social interaction, instructor feedback, or learning-strategy variability; and the controlled experimental design does not capture real distributed-system complexity (variable client sizes, asynchronous updates, communication instability).

## Connected Concepts

- [[learning-analytics]]
- [[privacy]]
- [[ai-ed-evaluation]]
- [[machine-learning]]

## Connected Articles

- [[at-risk-students-ml-prediction]] — Machine-learning prediction of at-risk students
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Privacy-preserving federated learning for cognitive diagnosis

## Citation

Villegas-Ch, W., Maldonado Navarro, A., Govea, J., Garcia-Ortiz, J., & Buenaño-Fernandez, D. (2026). [Federated and explainable learning analytics for privacy-preserving academic risk modeling across heterogeneous educational institutions](https://doi.org/10.1016/j.caeai.2026.100629). *Computers and Education: Artificial Intelligence, 11*, 100629.
