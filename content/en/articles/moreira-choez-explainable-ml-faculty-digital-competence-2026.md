---
title: "Explainable machine learning for predicting self-reported digital competence levels among university faculty"
created: "2026-11-12T05:30:00-05:00"
updated: "2026-11-12T05:30:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey]
evidence_context: educational
level: [higher ed]
audience: [instructors, administrators, faculty developers, researchers]
sources: ['raw/papers/moreira-choez-explainable-ml-faculty-digital-competence-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1877791"
source_depth: full text
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers, links]
pedagogy: [tpack, professional-training, self-efficacy]
technology: [machine-learning, learning-analytics, student-modeling]
assessment: [self-report-measures, educational-measurement, assessment-validity]
methods: [quantitative-research]
ethics: [explainable-ai]
foundations: [teacher-ai-competency, limitations-in-aied-research, interpreting-and-applying-aied-research]
---

> **Synthesis:** Moreira-Choez and colleagues asked whether [[machine-learning|supervised machine learning]] could sort university faculty into low, medium, and high levels of self-reported [[teacher-ai-competency|digital competence]], and whether [[explainable-ai|SHAP explanations]] could say which characteristics drove those assignments. The sample was 315 faculty at two Ecuadorian public universities, the Technical University of Manabí (UTM) and the State University of Milagro (UNEMI), who completed a 300-item Likert questionnaire spanning teaching, research, outreach, and academic management. With seven predictors that exclude every questionnaire item, eight of nine algorithms classified 314 of 315 cases correctly (accuracy = 0.9968, MCC = 0.9924), while Naive Bayes managed 294 of 315 (accuracy = 0.9333). The authors are unusually candid that this is not a competence test: the three classes were percentile cuts on the same self-report scores, the exact cutoffs were never archived, and every prediction is internal resampling rather than external validation. The useful contribution is how easily a self-report outcome can be predicted almost perfectly — and how much interpretive discipline that requires.

## Key Findings

1. **Eight of nine algorithms separated the three sample-defined classes almost perfectly.** k-Nearest Neighbors, Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, SVM, Stochastic Gradient Descent, and Neural Network each classified 314 of 315 observations, for accuracy = 0.9968 (95% CI 0.982–0.999) and MCC = 0.9924.
2. **Naive Bayes was the lone underperformer, and its errors clustered at the class boundary.** It classified 294 of 315 observations (accuracy = 0.9333, 95% CI 0.900–0.956, MCC = 0.8382), misreading 14 Medium cases as High and 7 High cases as Medium while getting all 20 Low cases right.
3. **Institutional affiliation was associated with competence level in every domain.** Pearson chi-square tests were significant at p < 0.001 throughout, with Cramér's V from 0.301 for academic management to 0.676 for outreach (teaching χ² = 82.710, research χ² = 57.604, outreach χ² = 144.034, academic management χ² = 28.543; all df = 2, N = 315).
4. **UTM faculty were far more likely to sit in the High category for teaching and research.** In teaching, 90.1% of UTM faculty fell in the High category against 42.9% at UNEMI; in research the comparable figures were 58.6% and 28.6%, while UNEMI concentrated more faculty in the Low and Medium categories.
5. **Research and teaching competence moved together within each institution.** Research-related and teaching-related scores correlated at r = 0.51 (95% CI 0.40–0.61, p < 0.001) at UTM and r = 0.65 (95% CI 0.53–0.75, p < 0.001) at UNEMI; the difference was not significant (Fisher z = 1.79, p = 0.074).
6. **Explainability ranked institutional and career variables highly, but the ranking shifted by class.** Institutional affiliation carried the largest global mean absolute SHAP contribution; within classes, age led for Low, academic degree for Medium, and institutional affiliation for High, with teaching experience also prominent.
7. **The near-perfect accuracy is accuracy against labels built from the same questionnaire.** The outcome split 20 Low (6.35%), 65 Medium (20.63%), and 230 High (73.02%) cases, produced by percentile thresholds estimated once on the full analytical sample — thresholds the archived file no longer preserves.

## How the study was built

The design is a [[quantitative-research|quantitative]], non-experimental, cross-sectional survey with a predictive classification layer, run across two institutions chosen for contrasting digital-development trajectories, not representativeness. A stratified non-probabilistic strategy produced 315 complete records. Because recruitment ran through institutional dissemination and the number invited was never recorded, the authors report no response rate and treat 315 as an achieved analytical sample, not a probabilistic fraction of either faculty body. The instrument was a 300-item Likert questionnaire organized into four theoretically specified content domains of 75 items each — teaching, research, outreach, and academic management — framed through DigCompEdu and [[tpack|TPACK]]. Internal consistency was extreme: Cronbach's α = 0.997 for the 300-item total, with institution-specific coefficients from 0.975 to 0.991 at UTM and 0.980 to 0.998 at UNEMI. The authors read that as coherence among item responses and refuse the stronger reading: no EFA, CFA, convergent-discriminant, criterion, or measurement-invariance analysis was run, so the four domains remain theoretically specified rather than empirically confirmed, and α approaching 1.00 may partly reflect item redundancy.

The modeling pipeline is where the paper is most careful. After a leakage-control review, seven predictors survived: age, gender, academic degree, teaching experience in years, contract type, area of knowledge, and institutional affiliation. Every questionnaire item, domain score, and categorical or cluster transformation of those scores was excluded because each contributed to constructing the outcome. Nine algorithms were fit under stratified 10-fold cross-validation, with imputation, scaling, encoding, and hyperparameter search confined to each training fold, a fixed seed of 42, and the environment documented as Python 3.8, Orange 3.38.1, and Windows 10. Institutional affiliation entered only as a contextual predictor; it was never the classification target, and no institution-specific models were trained.

## What the near-perfect scores do and do not show

The pooled out-of-fold confusion matrices are, for eight algorithms, identical: one Medium case predicted High, and nothing else wrong. Class-specific metrics reflect both the fit and the imbalance — precision 1.000 (95% CI 0.943–1.000) and recall 0.985 (0.918–0.997) for Medium, precision 0.996 (0.976–0.999) and recall 1.000 (0.984–1.000) for High, and precision and recall of 1.000 for Low, whose interval still reaches down to 0.839 because only 20 observations carry it. The convergence of linear, tree-based, ensemble, and neural classifiers on one identical partition is the most telling internal signal: a highly separable multivariate structure, not the superiority of any architecture. The authors say as much, and decline to claim robustness they cannot demonstrate.

AUC was dropped from the reconciled table because fold-level class probabilities were not retained; calibration cannot be reconstructed from hard labels; no predictor-ablation experiment can be rerun without fold-specific fitted objects; and fold-level dispersion and repeated-seed sensitivity are unavailable. The 315 pooled predictions are not a test set, and the manuscript denies using a 94-observation holdout.

The deeper constraint is the outcome: the Low/Medium/High labels came from percentile thresholds applied to the [[self-report-measures|self-report]] questionnaire score before any model was fit, and those thresholds were estimated once on the complete sample, then held fixed through resampling. The exact cutoffs were not archived, so an independent researcher cannot rebuild the classes from raw scores. Every reported metric therefore quantifies how well the models reproduce a partition defined inside the same data — and, since the questionnaire's domain scores were rightly excluded, how much of that partition is recoverable from institutional and career characteristics alone.

## What explainability added, and what it did not

The SHAP analysis is limited to the seven eligible predictors, so it describes how the fitted models used institution, degree, experience, age, gender, contract type, and knowledge area — not how competence itself is produced. Institutional affiliation showed the largest global mean absolute SHAP contribution, and the class-level hierarchies diverged: age mattered most for Low classifications, academic degree for Medium, institutional affiliation for High. Gender and contract type contributed less globally but were not inert. Read alongside the chi-square results, the picture is consistent: self-reported competence tracks institutional and career position. It is not evidence that any institution's infrastructure, training budget, or leadership caused the difference; those mechanisms were never measured and remain hypotheses for longitudinal or multi-institutional work. SHAP ranks model use, not causal importance, and without a prespecified ablation it cannot even establish incremental predictive value.

## What this means for practice

- **Faculty developers.** Treat a self-report competence profile as a planning signal for targeted [[professional-training|training]], not as certification: the classes are relative positions inside one sample, and their cutoffs were never preserved.
- **Administrators.** Look at institution-level conditions before individual deficits. Institutional affiliation carried the largest global SHAP contribution and separated distributions in all four domains (Cramér's V 0.301–0.676), so audit access, workload, and development opportunities before screening faculty individually.
- **Instructors.** Do not let a questionnaire score stand in for demonstrated capability. The outcome was 300 Likert items with no performance task, observation, or digital artifact; pair [[self-assessment]] with [[assessment-validity|performance-based evidence]] before it shapes a development plan.
- **Institutional researchers.** Archive the analysis, not just the result: percentile cutoffs, fold assignments, class probabilities, fitted preprocessing objects, and seeds. This team lost the cutoffs and probability outputs, costing them AUC, calibration, and any sensitivity analysis.
- **Assessment designers.** Audit length before reliability. A 300-item instrument yielding α = 0.997 invites redundancy; a shorter form with established dimensionality would cost respondents far less.

## Limitations

- The outcome cannot be independently reproduced: percentile cutoffs for the Low/Medium/High labels were estimated once on the full analytical sample and not retained, so the class-generation step cannot be rebuilt from raw scores.
- Validation is internal only. All 315 predictions are pooled out-of-fold results from the same two institutions, the authors explicitly disclaim a separate holdout, and fold-level variability, repeated-seed sensitivity, calibration, and predictor ablation could not be reconstructed from archived outputs.
- The outcome is entirely self-reported through a 300-item Likert instrument, with no performance tasks, external observation, behavioral traces, or assessed digital products; social desirability, inaccurate self-assessment, recall bias, and inconsistent item interpretation remain unaddressed.
- [[educational-measurement|Psychometric structure]] is asserted rather than tested: no EFA, CFA, convergent-discriminant, criterion-validity, or measurement-invariance analysis was conducted, and α = 0.997 for the total score may reflect item redundancy and scale length rather than a confirmed multidimensional construct.
- Class imbalance is severe — 20 Low, 65 Medium, and 230 High — so the perfect Low-class precision and recall of 1.000 rest on 20 observations with a Wilson interval reaching 0.839, and minority-class performance is imprecisely estimated.
- Sampling was stratified but non-probabilistic, the number of invited faculty was never systematically registered, no response rate could be calculated, and non-response bias cannot be assessed; the two institutions are a purposive contrast, not a representative sample of Ecuadorian [[higher-ed|higher education]].

## Citation

Moreira-Choez, J. S., Bueno-Fernández, M. M., Quirino-Rodríguez, L. G., Tostado-Ramírez, M. I., Ultreras-Rodríguez, A., Sabando-García, Á. R., Nieto-Sánchez, Z. C., Zambrano-Alcívar, M. V., & García-Saltos, C. D. (2026). [*Explainable machine learning for predicting self-reported digital competence levels among university faculty*](https://doi.org/10.3389/feduc.2026.1877791). *Frontiers in Education, 11*, 1877791. https://doi.org/10.3389/feduc.2026.1877791
