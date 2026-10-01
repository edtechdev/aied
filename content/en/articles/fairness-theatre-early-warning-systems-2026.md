---
title: "Fairness Theatre: Evaluating Post-Hoc Fairness Interventions in Vendor-Controlled Early Warning Systems"
created: "2026-10-01T09:07:13-04:00"
updated: "2026-10-01T09:07:13-04:00"
type: article
sources: ['raw/papers/fairness-theatre-early-warning-systems-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment, secondary analysis]
level: [higher ed]
audience: [instructors, administrators, researchers, educational technology developers]
technology: [learning-analytics, machine-learning, edtech-platform, human-in-the-loop-ai]
methods: [ai-ed-evaluation, quantitative-research]
institutions: [governance, educational-policy-ai]
ethics: [equity-in-ai-education, bias-mitigation, differential-effects-across-learner-groups, explainable-ai]
foundations: [ai-education, limitations-in-aied-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** McConvey et al. (2026) [[anxiety-and-stress|stress]]-test six post-hoc fairness interventions on a replicated early warning system built from 168,550 student records at a public Ontario college, under the constraints [[higher-ed|colleges]] face when they procure vendor-controlled [[learning-analytics|predictive analytics]] they cannot inspect or retrain. Introducing **error-type profiling**, the study traces how each intervention moves false positives and false negatives between groups rather than asking only whether dashboard metrics converge. None delivered consistent [[equity-in-ai-education|equity]] gains: disparities were redistributed, not reduced; two implementations corrected already-advantaged groups because they used group size to define disadvantage; and small, marginalized groups stayed poorly served. The authors name the condition **fairness theatre** — dashboard metrics converge while groups' error burdens persist or worsen — and locate the remedy in [[governance|procurement governance]] rather than better [[bias-mitigation|bias-mitigation tools]].

## Key Findings

1. **Post-hoc fairness redistributes rather than reduces disparities.** Across six methods applied to calibrated outputs, gains for one group came with new gaps for another, and no method delivered consistent equity gains.
2. **Two implementations corrected the wrong group.** Reject Option and Bias Mitigation both used group size to define disadvantage, directing favorable corrections toward international students, who already had the higher predicted-success rate.
3. **Group size is an unreliable proxy for disadvantage.** The heuristic misfires when the smallest group is not the worst-off; reassigning disadvantage by observed disparity redirected Reject Option but left Bias Mitigation inert.
4. **Metric convergence can hide harm.** MBS met the gender equal-opportunity target by flipping predictions, driving the female false positive rate from 0.561 to 0.837 — parity achieved by making struggling students less visible.
5. **Strict parity is operationally untenable.** GBCP reached the tightest statistical parity but cut true positive rates by 0.30–0.37 and would flag roughly half of all students, erasing triage.
6. **Accuracy-preserving methods change almost nothing.** GetFair, Decoupled Classifiers, and Bias Mitigation for gender left the calibrated error profile largely intact: the dashboard holds steady and inequities persist.
7. **Small groups are served worst.** Students collapsed into "Unknown Gender" had the lowest true positive rates across every method with a normal error profile, and none improved their treatment.

## Procurement and the constrained intervention space

When [[higher-ed|colleges]] buy proprietary early warning systems — [[edtech-platform|turnkey platforms]] such as EAB Navigate360, or AutoML tools such as DataRobot and H2O.ai — the contract places model design beyond institutional reach: features, outcome definition, training data, and optimization target all sit with the vendor. The institution keeps the input data and the calibrated outputs, and outputs are the lever that decides which students advisors see. The study simulates this by building an [[machine-learning|XGBoost]] replica of the platform's model class and treating it as inaccessible, preserving the institutional user's structural position. The paper frames this as a coordination problem: [[governance|fairness work]] needs information that [[educational-policy-ai|procurement contracts]] withhold, so the question becomes what fairness work is possible at all.

## Error-type profiling: from metrics to caseloads

Advisors never see statistical parity or equalized odds; they see caseloads. A false negative is a successful student taking a scarce advising slot; a false positive is a struggling student who never lands on any list. Error-type profiling translates metrics into this language. This [[quantitative-research|quantitative]] stress test sorts the six methods into three profiles: false-positive-generating methods (MBS, Bias Mitigation) close true-positive-rate gaps by flipping predictions, shrinking caseloads and hiding struggling students; sensitivity-reducing methods (GBCP) cut false positives but generate false negatives in bulk; and baseline-preserving methods (GetFair, Decoupled Classifiers) hold the calibrated error profile and redistribute almost nothing.

## Misdirected corrections and the limits of single-axis fairness

The sharpest result concerns how methods decide who is disadvantaged. Reject Option and Bias Mitigation both designated the numerically smallest group as "deprived," so for residency all 706 of Bias Mitigation's corrected predictions fell in the international group — already the higher-positive-rate group (0.916 versus 0.756) — raising its false positive rate to 0.773 while domestic metrics stayed unchanged. The misdirection is deterministic: all 706 flips landed there across 20 random seeds. Reassigning disadvantage by observed disparity redirected Reject Option's correction but left Bias Mitigation flipping zero predictions; its equation of disadvantage with numerical minority is built into the pipeline. Single-axis design compounds this: students marginalized along several attributes stay invisible, and gender-diverse students consolidated into "Unknown Gender" had the lowest true positive rates under every normal error profile — a [[differential-effects-across-learner-groups|differential effect]] surviving six different methods. [[explainable-ai|Opacity]] adds a further layer between advisor and student. The authors frame the work as an [[ai-ed-evaluation|evaluation]] of methods, not a solution, and a [[limitations-in-aied-research|limit]] on what metric optimization can claim for [[ai-education|AI in education]].

## What this means for practice

- **Instructors.** Treat a student's presence on, or absence from, an advising caseload as an adjusted output of a model you cannot inspect, not a verdict on their risk.
- **Administrators.** Negotiate transparency and audit rights before signing, and ask vendors for error-type breakdowns by group rather than a converged fairness dashboard.
- **Developers.** Do not equate group size with disadvantage; designate disadvantage from observed disparities, test whether it misfires when the smallest group is advantaged, and treat advising capacity as a constraint.
- **Researchers.** Report how many predictions a method changes and which groups absorb the new false positives and false negatives, not just whether fairness metrics converged.

## Limitations

- The analysis rests on one mid-sized, publicly funded Ontario college; the authors state this limits generalizability, particularly post-COVID and after the 2024 federal visa cap.
- The interventions ran on a research replica (an XGBoost classifier), not the operational vendor model; the authors cannot verify the replica's predictions match it and call the replica a favorable test case because it used SMOTE-NC balancing.
- The binary outcome conflates financially driven withdrawal, program mismatch, transfer, and academic failure, so ground truth is an institutional artifact rather than a neutral fact.
- Only age, gender, and residency were analyzed: race, ethnicity, disability, and socioeconomic data are absent, first-generation status was reported for just 47% of students, and no student or advisor responses were observed.

## Citation

McConvey, K., Zhai, A., Li, R., & Guha, S. (2026). [*Fairness Theatre: Evaluating Post-Hoc Fairness Interventions in Vendor-Controlled Early Warning Systems*](https://arxiv.org/abs/2609.38552). arXiv preprint.