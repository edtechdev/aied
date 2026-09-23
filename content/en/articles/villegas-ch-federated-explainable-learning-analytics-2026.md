---
title: "Federated and Explainable Learning Analytics for Privacy-Preserving Academic Risk Modeling Across Heterogeneous Educational Institutions"
created: "2026-09-07T08:25:00-04:00"
updated: "2026-09-19T11:14:39-04:00"
type: article
technology: [learning-analytics, machine-learning]
ethics: [privacy]
research_method: [experiment]
audience: [learning analytics designers, researchers, institutions, administrators]
level: [higher ed]
page_kind: [evaluation]
sources: ['raw/papers/villegas-ch-federated-explainable-learning-analytics-2026.md']
confidence: high
methods: [ai-ed-evaluation]
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

## What this means for practice

- **Learning analytics designers.** Surface risk as ranks and cohorts rather than probability bands when a federated model is reused across institutions: discrimination held (OULAD AUC = 0.918, F1 = 0.755) while the dropout task's ECE moved from 0.067 on OULAD to 0.232 on EdNet-KT1. Stable feature-importance rankings can also support targeting, flagging persistent behavioral indicators of risk such as persistence, interaction density, assessment behavior and reduced activity for differentiated support.
- Build per-institution recalibration into the deployment pipeline before any threshold-triggered intervention, since the study applied no post-hoc recalibration and even the centralized baseline sat at an ECE of about 0.391 on the performance task.
- **Institutions.** Choose FedProx over plain FedAvg where institutional label distributions are far apart: FedProx held lower ECE at α = 0.1 and α = 0.3, while FedAvg's ECE rose markedly from α = 0.3.
- **Administrators.** Fund the federated governance layer — local training infrastructure and institutional data agreements — because the architecture keeps raw student records on site while still producing a shared model.
- **Researchers.** Report discrimination, calibration, and explanatory stability together; feature-importance rank stability (RankStab 0.99–1.00) can look reassuring while attribution divergence (Δ) and ECE still shift with local distributions.

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
