---
title: "Affectra: AI-Driven Bayesian Application for Estimating General Anxiety Status in University Students"
created: "2026-11-27T16:10:00-05:00"
updated: "2026-11-27T16:10:00-05:00"
type: article
published: "2026-11-13"
sources: ['raw/papers/khuda-affectra-anxiety-university-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [system development]
discipline: []
level: [higher ed]
audience: [researchers, institutions]
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

> **Synthesis:** Affectra is an Android application that combines three biosensor signals with two social-contextual inputs in a Bayesian logistic regression model to estimate questionnaire-defined [[anxiety-and-stress|anxiety]] status among university students. In a sample of 252 Pakistani undergraduates aged 18 to 25 who completed simulated cognitive and behavioral tasks, the model reported mean accuracy of 91%, precision of 92% and an area under the ROC curve of 0.97. Social disconnectedness and passive social media usage were the strongest positive predictors, while higher heart rate variability was protective; skin conductance and breathing rate were inconclusive. Outputs include posterior probabilities with 95% highest density intervals. Because labels came from a retrospective GAD-7 administered after the tasks and there was no independent external validation, the results describe performance inside this simulated study setting, not a diagnostic tool.

## Key Findings
1. **A [[multimodal]] but small predictor set.** The model uses standardized heart rate variability, skin conductance and breathing rate plus social disconnectedness and passive social media usage.
2. **Labels came from a questionnaire.** High anxiety was defined by a GAD-7 score above 10, measured after the experimental tasks rather than during them.
3. **Classification performance was high in this sample.** Reported accuracy, precision and discrimination were strong under the study's ten-fold evaluation.
4. **Social context carried the clearest risk signal.** Disconnectedness and passive social media use both raised the odds of the high-anxiety class.
5. **Heart rate variability was protective.** Higher variability was associated with substantially lower odds of the high-anxiety class in the fitted model.
6. **Two [[sensor-and-gaze-analytics|physiological signals]] were inconclusive.** Skin conductance and breathing rate had intervals spanning no effect and only anecdotal Bayes evidence.
7. **The displayed bands are not severity categories.** Low, moderate and high probability bands were predefined display conventions, not a validated three-class classifier.

## What Affectra measures

The application records SDNN as a time-domain heart rate variability measure, average skin conductance and average breathing rate through eSense biosensors connected to Android. Heart rate variability was sampled at 500 Hz and analyzed at 5 Hz; skin conductance was sampled at 5 Hz. Observed means were 70.259 ± 38.666 for SDNN, 9.999 ± 5.536 for skin conductance and 15.117 ± 4.726 for breathing rate. Social disconnectedness and passive social media usage were rated on a 0–1 scale and dichotomized at 0.5.

[[primary-education|Primary]] data were collected from June 2025 to August 2025. From 260 recruits, 8 postgraduates older than 25 were excluded, leaving 252 students: 139 males (approximately 55%) and 113 females (approximately 45%). Participants completed tasks such as letter matching, Go/No-Go tapping, a combined mode and a cognitive flexibility task. Task performance was not a model predictor. GAD-7 defined binary class membership as GAD-7 > 10 = 1 and GAD-7 ≤ 10 = 0. Predicted probabilities were grouped for display as 0.00–<0.40, 0.40–<0.70 and 0.70–1.00.

## What the model reported

The authors used participant-level ten-fold cross-validation with an approximate 90:10 training-to-held-out ratio, empirical Bayes priors from maximum-likelihood logistic regression, and NUTS sampling with 1000 warmup steps. Convergence was reported as acceptable, with R̂ near 1.0 and effective sample sizes above 400. Aggregated metrics were mean accuracy 0.910, precision 0.921, AUC 0.969, true positive rate 0.893 and true negative rate 0.930 in the fold table, while the narrative reports accuracy of 91%, precision of 92%, AUC of 0.97, TPR of 88.1% and TNR of 93.0%.

For standardized heart rate variability, the posterior odds ratio was 0.035, 95% HDI (0.017, 0.076), with BF10 = 266.7, described as extreme evidence. Social disconnectedness had an odds ratio of 7.791, 95% HDI (4.428, 14.253), BF10 = 61.9; passive social media usage had an odds ratio of 2.593, 95% HDI (1.493, 4.599), BF10 = 12.03. For skin conductance and breathing rate, the 95% HDIs were (0.445, 1.078) and (0.456, 1.145) with BF10 = 0.65 and 0.89, respectively.

Three use cases illustrate the output. One participant with SDNN of 50.23 ms, skin conductance of 7.02 μS and breathing rate of 12.35 breaths/min received a 70.78% probability of the high-anxiety class, with a 95% HDI of 53.36–83.68%. A second case produced 48.61% with a 95% HDI of 30.89–66.70%, and a third produced 8.18% with a 95% HDI of 4.04–15.87%. The authors stress that the intervals describe uncertainty in the probability estimate, not anxiety severity scores.

## What this means for practice
- **Researchers.** Treat Affectra as a research-oriented application and validate it on independently collected data before considering operational use.
- **Institutions.** Do not use model outputs to make consequential decisions about students; the underlying outcome is a binary questionnaire label from a retrospective period.
- **Instructors.** Interpret physiological arousal cautiously, since skin conductance and breathing changes can accompany task difficulty or effort as well as anxiety.
- **Researchers.** Assess probability calibration and report whether estimates add information beyond existing assessment approaches before integrating them into [[student-support-and-success|student support]].

## Limitations
- The evaluation used 252 students from public and private universities in Pakistan and does not establish generalization to other institutions, cultures or academic populations.
- GAD-7 was administered after the experimental tasks and assesses a retrospective period, so the labels do not capture momentary task-induced anxiety.
- Physiological indicators are not specific to anxiety and may reflect other cognitive, behavioral or environmental influences.
- Probability calibration was not independently assessed; accuracy, precision and AUC do not show that predicted probabilities match observed frequencies.
- The low, moderate and high display bands are not a trained or validated multiclass severity model and should not be read as clinical categories.
- The structured tasks did not reproduce routine classroom conditions, and the system is explicitly not presented as a validated diagnostic tool.

## Citation
Khuda IE, Aftab A, Siddiqui A and Kadri MB (2026) Affectra: AI-Driven Bayesian Application for Estimating General Anxiety Status in University Students. Information 17:1149. https://doi.org/10.3390/info17111149
