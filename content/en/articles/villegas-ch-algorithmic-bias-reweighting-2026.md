---
title: "Mitigating algorithmic bias in educational prediction systems using reweighting and adversarial learning"
created: "2026-11-27T01:14:00-05:00"
updated: "2026-11-27T01:14:00-05:00"
type: article
published: "2026-07-30"
sources: ['raw/papers/villegas-ch-algorithmic-bias-reweighting-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [experiment, secondary analysis]
discipline: []
level: []
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Villegas-Ch and colleagues compared a baseline classifier with demographic reweighting and adversarial debiasing on two educational prediction datasets, evaluating [[bias-mitigation|bias mitigation]] with statistical testing, subgroup analysis, and robustness checks. The effects were dataset- and metric-dependent rather than uniformly beneficial. In ASSISTments, the adversarial configuration improved predictive performance but increased two disparity measures; reweighting behaved almost identically to the unmitigated model. In OULAD, adversarial training slightly reduced predictive performance while widening the observed disparities. Under small Gaussian perturbations the adversarial model retained most of its predictive capacity. The authors conclude that fairness-aware mitigation is a trade-off between predictive utility and subgroup equity, not a single optimization objective.

## Key Findings

1. **Mitigation effects depended on the dataset and the metric.** No single configuration was best on every criterion across both prediction settings.
2. **Adversarial debiasing improved prediction in ASSISTments.** Both accuracy and the F1 score rose relative to the unmitigated baseline.
3. **The same configuration widened two disparities there.** Statistical parity difference and equal opportunity difference both increased alongside the predictive gain.
4. **Reweighting changed almost nothing.** Its results were nearly identical to the baseline in ASSISTments and indistinguishable from it in OULAD on predictive performance.
5. **The pattern reversed in OULAD.** Adversarial training slightly lowered prediction and increased both disparity measures.
6. **Both subgroups gained in absolute performance under adversarial training.** The gains were not concentrated in one group, yet some intergroup gaps widened.
7. **The adversarial model retained most of its capacity under added noise.** Its performance declined only slightly when Gaussian perturbations were introduced at inference.

## What was compared

The study used two public datasets with different structures. ASSISTments 2017 contains interaction-level mathematics tutoring records from secondary school students in the United States: approximately 1.1 million individual records from roughly 1,700 students across more than 2,500 distinct exercises. The sensitive attribute was the dataset's inferred gender proxy, with Female encoded as Group 0 and Male as Group 1; the authors stress that this is a proxy and not self-identified gender. OULAD provides student-level demographic and academic records from a distance-learning setting, and the sensitive attribute there was the gender variable in the student information table. The cross-dataset experiments were run on more than 800,000 educational interaction records across the two sources.

Three configurations were compared: a baseline binary logistic regression, a demographic reweighting strategy that adjusts training instance weights by the joint distribution of outcome and sensitive attribute, and an adversarial architecture in which a discriminator tries to infer the sensitive attribute from the learned representation. Evaluation used interaction-level stratified 5-fold cross-validation with shuffling and a fixed seed; folds were not grouped by student. Predictive metrics were accuracy and F1, and fairness metrics were Statistical Parity Difference (SPD), Equal Opportunity Difference (EOD), and Disparate Impact (DI). The implementation used scikit-learn v1.4.1, Fairlearn v0.10.0, AIF360 v0.5.0, and PyTorch v2.1.0 in Python 3.10, with random seeds fixed at 42.

## What the experiments showed

In ASSISTments, the baseline model achieved accuracy of 0.655, F1 of 0.366, SPD of 0.018, and EOD of 0.017. Reweighting produced the same four figures. The adversarial model reached accuracy of 0.667 and F1 of 0.405, but SPD rose to 0.030 and EOD to 0.038. Baseline DI values across folds ranged from 1.04 to 1.19, and the authors read the consistency of this pattern as a systematic rather than random disparity.

Subgroup analysis in ASSISTments showed why aggregate gains and fairness gains diverge. Under the baseline, precision was slightly higher for Group 1 while recall and F1 were higher for Group 0. Adversarial training raised precision, recall, and F1 for both groups, so the improvement was not confined to one subgroup. The precision gap narrowed slightly, but the recall and F1 gaps widened in the direction favoring Group 0.

In OULAD, the baseline and reweighting models both reached accuracy of 0.838 and F1 of 0.842, with SPD of 0.033 and 0.034 respectively and EOD constant at 0.038. The adversarial model fell to accuracy of 0.829 and F1 of 0.833 while SPD rose to 0.054 and EOD to 0.061.

A Friedman test across the three models gave a statistic of 10.00 with p = 0.0067 for SPD, where reweighting ranked first, the baseline second, and the adversarial model third. For EOD the statistic was 7.60 with p = 0.022; baseline and reweighting ranked 1.4 and 1.6 and the adversarial model again ranked third. The authors note that the EOD result does not meet the stricter threshold adopted in the study.

In the separate robustness experiment, Gaussian noise with standard deviation s = 0.05 was added to non-sensitive attributes at inference. Baseline accuracy stayed at 0.656 under clean and noisy conditions, with recall around 0.268 and non-privileged recall moving from 0.259 + 0.009 to 0.260 + 0.006. Adversarial accuracy went from 0.695 + 0.005 to 0.693 + 0.005, overall recall from 0.465 + 0.020 to 0.453 + 0.015, and non-privileged recall from 0.449 + 0.021 to 0.437 + 0.017. The paper notes that this adversarial clean-condition accuracy differs from the cross-dataset summary because the model was retrained for the perturbation experiment.

## What this means for practice

- **Learning analytics designers.** Report predictive performance and subgroup metrics together; the study shows accuracy gains can coexist with wider disparities.
- **Institutions.** Audit automated academic-risk tools against more than one fairness criterion, since the model ordering changed between SPD and EOD.
- **Learning analytics designers.** Test mitigation against the specific dataset rather than assuming a technique transfers; adversarial training raised accuracy in ASSISTments and lowered it in OULAD.
- **Researchers.** Inspect subgroup-disaggregated precision, recall, and F1, because both groups improved in absolute terms while some relative gaps widened.
- **Institutions.** Check stability under noisy inputs before operational use, while keeping robustness findings separate from fairness findings.

## Limitations

- ASSISTments used an inferred demographic proxy, so the results should not be generalized to self-reported gender identity or to institutions with richer demographic data.
- Validation folds in ASSISTments were interaction-level rather than grouped by student, so estimates concern held-out interactions rather than unseen students.
- The fairness metrics are distributional and the adversarial architecture is fixed; causal, counterfactual, and intersectional notions of fairness were not evaluated.
- Robustness testing covered Gaussian perturbations only, leaving temporal drift, deployment feedback loops, and adversarial attacks for future work.

## Citation

Villegas-Ch, W., Gutierrez, R., Garcia-Ortiz, J., & Govea, J. (2026). [Mitigating algorithmic bias in educational prediction systems using reweighting and adversarial learning](https://doi.org/10.3389/feduc.2026.1841724). *Frontiers in Education*, *11*, 1841724.
