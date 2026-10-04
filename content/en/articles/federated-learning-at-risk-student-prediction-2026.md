---
title: "Federated learning for privacy-preserving at-risk student prediction in health professional education: A multi-scenario evaluation of FedAvg and FedProx"
created: "2026-10-04T09:12:00-04:00"
updated: "2026-10-04T09:12:00-04:00"
type: article
sources: ['raw/papers/federated-learning-at-risk-student-prediction-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: [medical education, nursing education]
level: [higher ed]
audience: [learning analytics designers, administrators, researchers, educational technology developers]
technology: [learning-analytics, machine-learning, student-modeling]
methods: [quantitative-research]
ethics: [privacy, equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** At-risk prediction usually needs shared student data, which privacy rules forbid across institutions. This study simulates that constraint by partitioning the Open University Learning Analytics Dataset into five program-discipline clients as health-professional-education analogues and testing federated at-risk models under four scenarios. Federated logistic regression retained 99.3-99.9% of centralized performance, a negligible privacy-utility trade-off. FedProx added nothing for logistic regression but stabilized a [[machine-learning|neural network]] under data-quality heterogeneity, cutting training variance fortyfold. The one result that pushes back on theory is that forum interaction ranked last in every discipline, against what Tinto's integration model would predict.

## Key Findings

1. Federated logistic regression retained 99.3-99.9% of centralized performance across all four scenarios, with a maximum gap of 0.64 percentage points in AUC-PR — a negligible privacy-utility trade-off.
2. FedProx showed no statistically significant advantage over FedAvg for logistic regression in any scenario (AUC-PR differences of -0.03 to +0.19 percentage points, overlapping confidence intervals, Wilcoxon p > 0.05).
3. FedProx did help a neural-network model under data-quality heterogeneity, gaining up to 6.40 percentage points in AUC-PR and reducing training variance fortyfold, which the authors read as a stability mechanism for non-linear architectures rather than a universal gain.
4. Cross-semester evaluation found no statistically significant temporal drift (Wilcoxon p = 0.32).
5. SHAP attribution identified Active Days, Assessments Submitted and Mean Assessment Score as the dominant predictors across programs, with discipline-level differences in feature salience.
6. Forum Interactions ranked last in every discipline, diverging from Tinto's social-integration prediction and attributed to clinical placements and in-person [[collaborative-learning|peer learning]] rather than asynchronous forums.

## How the study was built

The study is a [[simulation]], not a deployment. It uses the Open University Learning Analytics Dataset, partitioned to simulate five program-discipline clients as analogues of health professional education programs, and grounds the feature design in Tinto's Student Integration Model by operationalizing learning-management-system behavior as integration proxies. A systematic search of Google Scholar, Scopus and the ACM Digital Library in May 2026 found no prior study combining federated learning, at-risk prediction and health professional education, which the authors present as the study's novelty claim.

Two aggregation strategies are compared — FedAvg and FedProx — under two model families, logistic regression and a multilayer perceptron, across four scenarios: an IID baseline, [[pedagogy|pedagogical]] heterogeneity, data-quality variation, and temporal drift. Performance is reported primarily as AUC-PR with AUC-ROC secondary, and [[explainable-ai|feature importance]] comes from SHAP attribution.

## The privacy-utility trade-off is small, but only for the simple model

The paper's most reassuring result is that federated logistic regression barely gives anything up. Across all four scenarios it retained 99.3-99.9% of centralized performance, with a maximum gap of 0.64 percentage points of AUC-PR. For an institution weighing whether cross-institutional risk modeling is worth the privacy machinery, that is close to a free trade.

The nuance is that the trade-off depends on the model family. FedProx, a proximal-regularization method, delivered no significant benefit over plain FedAvg for logistic regression in any scenario. Its value appeared only for the neural network under data-quality heterogeneity, where it gained up to 6.40 percentage points of AUC-PR and cut training variance fortyfold. The authors frame proximal regularization as a stability mechanism for non-linear architectures, not a general improvement — a distinction that matters for anyone choosing an aggregation strategy.

## What predicts risk, and the forum surprise

Attribution analysis points to [[student-engagement|behavioral engagement]]: Active Days, Assessments Submitted and Mean Assessment Score dominate globally, with the ranking varying by discipline. That is consistent with a large early-warning-systems literature and gives a concrete basis for intervention design.

The discordant result is forum interaction. It ranked last in every discipline, which runs against Tinto's claim that social integration matters, and the authors attribute the divergence to the clinical and placement-based structure of health professional education, where peer learning happens in person rather than in asynchronous discussion. That is a useful caution: an early-warning model imported from a distance-education dataset may weight the wrong signals in a program whose students do not learn that way.

## What this means for practice

- **Learning analytics designers.** Federated logistic regression is a defensible default when privacy rules block data sharing: the measured utility cost was 0.64 percentage points of AUC-PR at most, so the barrier to cross-institutional modeling is organizational rather than statistical.
- **Administrators and program leads.** Do not import a predictor set from a distance-education dataset without checking the discipline. Forum activity, a standard early-warning feature, was the weakest signal in every simulated health program here.
- **[[educational-technology-developers|Educational technology developers]].** Choose the aggregation method to fit the model. FedProx bought nothing for logistic regression but stabilized a neural network under noisy data, so proximal regularization is worth its complexity only for non-linear models.
- **Researchers.** Treat the forum result as a hypothesis about placement-based programs rather than a settled finding, since it rests on a simulation using an analogue dataset rather than real health-professional-education records.

## Limitations

- The study is a simulation on the Open University Learning Analytics Dataset partitioned into five client analogues; it does not use real health professional education data, so the results are a proof of concept rather than an operational validation.
- The privacy guarantee is architectural, not formal: the paper evaluates federated averaging, not differential privacy, so it does not quantify protection against inference attacks on the shared updates.
- Forum interaction is measured only as asynchronous discussion, which the authors themselves argue is a poor proxy in placement-based programs; the divergence from Tinto may reflect the dataset as much as the setting.
- The novelty claim rests on a single systematic search in May 2026 with four terms, so the absence of prior work is asserted rather than demonstrated.

## Citation

Kovor, D. K., Osei, E. O., & Agyemang, E. N. (2026). [Federated learning for privacy-preserving at-risk student prediction in health professional education: A multi-scenario evaluation of FedAvg and FedProx](https://doi.org/10.1016/j.caeai.2026.100660). *Computers and Education: Artificial Intelligence, 11*, 100660.
