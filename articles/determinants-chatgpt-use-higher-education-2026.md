---
title: "An Exploratory Machine Learning Approach to Understanding Determinants of Future ChatGPT Use in Higher Education"
created: "2026-09-01T14:00:00-04:00"
updated: "2026-09-01T15:00:00-04:00"
type: article
sources: ["raw/papers/determinants-chatgpt-use-higher-education-2026.md"]
tags: ["higher-ed", "learning-analytics", "student-engagement", "technology-acceptance-model", "educational-measurement"]
---

## Overview

This study uses an exploratory machine learning (ML) framework to identify which educational, perceptual, and demographic factors are associated with university students' intended future use of ChatGPT for academic work. Survey data were collected from 166 students (final analytical sample of 111 after conservative outlier removal), and the analysis deliberately prioritizes educational interpretation over raw algorithmic performance. The authors position their contribution not in new algorithms but in a pedagogically grounded operationalization of established adoption theories.

The work integrates four complementary theoretical lenses: the Technology–Organization–Environment (TOE) framework as the primary contextual structure; the Technology Acceptance Model (TAM) and the Unified Theory of Acceptance and Use of Technology (UTAUT) to operationalize individual perception constructs such as perceived usefulness, ease of use, and facilitating conditions; and Self-Determination Theory (SDT) with connectivist principles to interpret learner [[motivation]], engagement, and networked knowledge practices. Survey items were specified a priori and mapped to these theories before analysis.

Methodologically, the study applies exploratory factor analysis (EFA; KMO = 0.68, Bartlett's χ² = 5291.6, p < 0.05, average communality 0.57) to examine latent structure, then Principal Component Analysis (PCA) to derive 22 latent components explaining 57.1% of cumulative variance for use as model inputs. Five classifiers — Logistic Regression (LR), Support Vector Classifier (SVC), Random Forest (RF), CatBoost, and XGB — were compared under stratified 10-fold cross-validation with SMOTENC for class imbalance. SHAP (Shapley Additive Explanations), partial dependence plots, and interaction analyses were used to interpret model outputs in educational terms, and calibration was assessed via Brier score and Expected Calibration Error (ECE).

## Key Findings

- **[[pedagogy|Pedagogical]] factors dominate adoption.** Across both statistical group comparisons and SHAP-based explanations, *Learning Support & [[accessibility]]* and *Academic Assistance & Engagement* were the most influential predictors of future ChatGPT use, while [[usability-research|usability]] and performance perceptions showed comparatively weaker and more context-dependent effects.
- **Significant perceptual group differences.** Future users and non-users differed significantly on Learning Support & Accessibility (U = 1225, p < 0.001) and Academic Assistance & Engagement (t = 3.28, p = 0.01), whereas most other perception components (e.g., adoption/satisfaction, efficiency, verification behavior) showed no significant differences.
- **Demographic moderators.** Age (χ² = 68.80, p < 0.001, Cramér's V = 0.45), gender (χ² = 176.97, p < 0.001, V = 0.72), and geographic region (χ² = 53.87, p < 0.001, V = 0.58) were significantly associated with future use, with users concentrated in the 18–21 age range and higher male adoption (71.1% of males vs. 51.1% of females favoring use). Academic specialization, study level, year of study, and AI experience were not significant.
- **Overall adoption intent.** A majority of respondents (65.7%) expressed interest in using ChatGPT for academic purposes in the future. The sample was largely male (72.9%), with mean age 21.4 years, mostly bachelor's students (77.1%), and over half (57.2%) educated in Asia.
- **Model performance.** SVC achieved the highest balanced performance (MCC 0.54 ± 0.19, F1 0.88, accuracy 0.82, AUC 0.85); LR reached MCC 0.52 with the highest precision (0.90), and RF the highest recall (0.91). Clustered MCC values indicate that outcomes depend more on feature representation than on algorithm choice.
- **Nonlinearity and interaction.** SHAP interaction heatmaps, PDP/ICE curves, and 2D partial dependence surfaces reveal non-additive relationships — notably between learning support, reliability/accuracy concerns, and overall satisfaction — supporting the use of ML over purely linear models.
- **Calibration and robustness.** SVC showed the best calibration (Brier 0.14, ECE 0.10). Sensitivity analyses across seeds, sampling strategies, and PCA thresholds, plus an ablation study, showed performance was stable and that PCA benefits linear models but can reduce ensemble-model performance.

## Implications for Practice

- **[[governance|Institutional]] [[scaffolding]] matters more than individual initiative.** Since learning support and accessibility drive adoption, [[teacher-role|educators]] should embed ChatGPT within guided activities with clear instructions on appropriate use, verification strategies, and reflective engagement rather than leaving adoption to independent student experimentation.
- **Align AI use with instructional goals.** The importance of academic assistance and engagement suggests ChatGPT is most effective when tied to [[feedback]], explanation, and [[formative-assessment|formative]] support, reinforcing the need for AI literacy curricula emphasizing critical evaluation, [[ethics|ethical]] use, and learner autonomy.
- **Adopt balanced governance, not pure restriction.** The role of academic integrity measures points to institutional guidelines that encourage responsible use and pedagogical innovation rather than imposing purely restrictive controls.
- **Target support by student group.** Combined demographic and perceptual effects suggest institutions can use predictive insights to identify groups needing tailored training, support, or policy interventions for [[equity-in-ai-education|equitable]] AI adoption.
- **Prioritize interpretable modeling for decision support.** The study models probabilistic calibration and explainable ML (SHAP, calibration metrics) as important for educational decision contexts where trustworthy, well-calibrated estimates are required.

## Connected Concepts

- [[technology-acceptance-model]] — Perceived usefulness and ease-of-use constructs underpin the perception measures operationalized here.
- [[self-determination-theory]] — Autonomy, competence, and engagement interpret the motivation-related constructs.
- [[student-engagement]] — Academic assistance and engagement emerged as core predictors of sustained use.
- [[generative-ai]] — ChatGPT is the specific generative AI tool under study.
- [[academic-integrity]] — Integrity measures and responsible-use practices shape how adoption is governed.
- [[ai-literacy]] — Findings motivate curricula emphasizing critical [[ai-ed-evaluation|evaluation of AI]] outputs.
- [[learning-analytics]] — The exploratory ML and SHAP pipeline is an application of learning-analytics methods.
- [[critical-thinking]] — Verification behavior and concerns about [[cognitive-offloading|over-reliance]] align with critical evaluation of AI content.
- [[higher-ed]] — The study concerns university students and institutional adoption contexts.
- [[educational-policy-ai]] — Findings inform balanced governance frameworks for generative AI.

## Connected Articles

- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — Related survey-based study of generative AI adoption personas in higher education.
- [[stamatoulis-genai-use-patterns-2026]] — Companion analysis of how students actually use generative AI tools in academic settings.
- [[chatgpt-inoculation-training-verification-2026]] — Addresses ChatGPT verification and critical evaluation, echoing this study's verification-behavior findings.

## Citation

[An Exploratory Machine Learning Approach to Understanding Determinants of Future ChatGPT Use in Higher Education](https://doi.org/10.1016/j.caeai.2026.100613) — Verma, C., & Kumar, D. (2026). *Computers and Education: Artificial Intelligence*, 10, 100613.
