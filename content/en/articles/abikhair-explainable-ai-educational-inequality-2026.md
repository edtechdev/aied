---
title: "Explainable Artificial Intelligence Framework for Predicting Educational Inequality Using Random Forest and XGBoost Across Multiple Educational Levels Globally"
created: "2026-11-21T09:38:00-05:00"
updated: "2026-11-21T09:38:00-05:00"
type: article
published: "2026"
discipline: [learning sciences]
technology: [machine-learning, learning-analytics]
methods: [quantitative-research, benchmark]
ethics: [explainable-ai, equity-in-ai-education, global-south]
institutions: [educational-policy-ai]
research_method: [secondary analysis]
audience: [policymakers, researchers, learning analytics designers]
level: [primary education, secondary]
page_kind: [evaluation]
sources: ['raw/papers/abikhair-explainable-ai-educational-inequality-2026.md']
confidence: medium
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.63913/ail.v2i4.74"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [explainable-ai, machine-learning, learning-analytics, equity-in-ai-education, global-south, education-levels, educational-policy-ai]
connected_articles: []
---

> **Synthesis:** Abikhair and Guanghui ask whether educational inequality can be predicted across countries and schooling levels with models that stay interpretable. They integrate three datasets covering Primary, Lower Secondary, and Upper Secondary education, drop variables that would leak the target, engineer a national development index and a year feature, and compare [[machine-learning|Random Forest and XGBoost]] regressors under an 80:20 split with five-fold cross-validation. XGBoost explained about 71% of the variance with a cross-validation mean of 0.584, and [[explainable-ai|SHAP analysis]] identified upper-secondary level, Sub-Saharan African region, national development status, and year as the strongest predictors, with predictive performance rising at higher levels. The work is a secondary predictive analysis of an integrated dataset whose provenance and size the article does not state, so the results describe what these models learned from this data rather than causal effects or validated policy guidance. The authors position the framework as decision support for educational monitoring systems and policy analysis, not as an instrument for individual-level decisions.

## Key Findings

- XGBoost was the stronger predictor, explaining about 71% of the variance, with a five-fold cross-validation mean of 0.584 and a root mean square error of 10.842.
- Random Forest was close behind, with a coefficient of determination of 0.700, a cross-validation mean of 0.526, and a root mean square error of 11.065; its mean absolute error was slightly lower, 7.293 versus 7.520.
- Predictability rose with schooling level: coefficients of determination of 0.451 at upper secondary, 0.388 at lower secondary, and 0.299 at primary.
- Upper-secondary level was the dominant predictor, followed by year, Sub-Saharan African region, the national development index, and least-developed status.
- Development-related variables carried weight: countries classed as less developed were associated with higher predicted inequality.
- Prediction errors clustered around zero but grew at high actual values, above about 50, where inequality proved hardest to model.
- The framework explains associations, not causes: SHAP shows which features moved predictions, not why inequality persists.

## The modeling pipeline

The authors combined three separate datasets representing [[education-levels|Primary, Lower Secondary, and Upper Secondary education]] into one integrated file. Original variables included country identifiers, region and sub-region, development region, a total inequality indicator, sex, rural and urban residence, five wealth quintiles, data source, time period, and an assigned education level. To avoid target leakage they removed sex, residence, and wealth-quintile variables, reasoning that these directly encode the inequality the model is meant to predict; they also dropped country identifiers and data source, and converted time period into a numerical year. Missing numeric values were filled with medians, missing categorical values with the most frequent category, numeric features were standardized, and categorical features were one-hot encoded inside a single column transformer.

Feature engineering turned the categorical development region into an ordinal development index (least developed 0, less developed 1, more developed 2) and set the aggregated total indicator as the target. Two ensemble regressors, Random Forest and XGBoost, were trained on an 80:20 split and checked with five-fold cross-validation, using mean absolute error, root mean square error, and the coefficient of determination. The workflow is a conventional [[learning-analytics|learning analytics]] pipeline, and its contribution is the pairing of that pipeline with post-hoc explanation rather than a new algorithm. The authors then reran Random Forest separately at each education level to compare performance across stages, and applied [[explainable-ai|SHAP explainability]] to Random Forest because of its stable feature-importance structure.

## How well the models predicted

XGBoost achieved the best overall result, explaining about 71% of the variance with a cross-validation mean of 0.584 and a root mean square error of 10.842; its mean absolute error was 7.520. Random Forest was marginally better on mean absolute error (7.293) but weaker on the other metrics, with a coefficient of determination of 0.700, a cross-validation mean of 0.526, and a root mean square error of 11.065. Predicted-versus-actual plots placed most points near the diagonal, while errors became more noticeable above actual values of 50. The error distribution was roughly normal and centered near zero, with few large errors. Performance differed sharply by stage: Random Forest reached coefficients of determination of 0.451 at upper secondary, 0.388 at lower secondary, and 0.299 at primary. The authors read this gradient as evidence that [[equity-in-ai-education|inequality]] becomes more distinguishable at higher levels, where access, affordability, infrastructure, and continuation gaps are more visible and primary schooling is more universal.

## What the explanations showed

Random Forest feature importance ranked upper-secondary level first, followed by year, Sub-Saharan Africa region, the development index, and least-developed status. SHAP values pointed the same way: upper-secondary level produced the strongest positive impact, and [[global-south|Sub-Saharan African]] countries contributed strongly toward higher predicted inequality, as did low development-index scores. The year variable also mattered, indicating that predicted inequality shifts over time. For [[educational-policy-ai|policy analysis]], the practical claim is that a transparent model can flag which conditions accompany high predicted inequality. The explanation is correlational, however: it describes how the training data behaved, not what would happen if a government acted on any single factor.

## What this means for practice

- **Administrators.** Treat predicted inequality scores as monitoring signals for targeting resources, not as explanations of cause or as verdicts about particular schools or regions.
- **Researchers.** Demand provenance before building on this work: the three source datasets, their years, and their sample sizes are not reported, and the data are available only on request.
- **Assessment designers.** Check feature sets for leakage when building similar predictors; the authors dropped demographic and wealth indicators precisely because they would have revealed the target.
- **Designers.** Put explanation into the interface, showing feature contributions and direction of effect rather than accuracy alone, so decision-makers can see why a score was produced.
- **Teachers.** Be cautious when aggregate risk predictions inform expectations about individual learners, since the model operates on country and regional aggregates rather than classroom evidence.

## Limitations

- Dataset provenance and size are unreported: three datasets were integrated but never named, dated, or counted, so the analysis cannot be reproduced from the article alone.
- The target, an aggregated total inequality indicator, is never defined, leaving unclear what exactly the models predict or how the indicator was constructed.
- Removing sex, residence, and wealth-quintile variables prevents leakage but also discards direct measures of the disparities the framework is meant to explain.
- Evaluation rests on one 80:20 split and five-fold cross-validation within the same integrated data; no external, temporal, or country-held-out validation is reported, and accuracy degrades at high inequality values where needs are greatest.
- The development index compresses diverse countries into three ordered categories, which may hide substantial within-category variation.
- SHAP importance reflects correlations in the training data and does not establish that any factor causes inequality.

## Citation

Abikhair, A., & Guanghui, H. (2026). [Explainable Artificial Intelligence Framework for Predicting Educational Inequality Using Random Forest and XGBoost Across Multiple Educational Levels Globally](https://doi.org/10.63913/ail.v2i4.74). *Artificial Intelligence in Learning, 2*(4), 268–287.
