---
title: "Estimating Item Difficulty Using Large Language Models and Tree-Based Machine Learning Algorithms"
created: "2026-09-03T13:40:00-04:00"
updated: "2026-09-03T13:40:00-04:00"
type: article
tags: [item-response-theory, educational-measurement, llm, machine-learning, k-12, assessment, automated-question-generation, psychometrically-aware-ai, math-education, educational-nlp]
sources: ['raw/papers/razavi-powers-item-difficulty-llm-2026.md']
confidence: high
---

> **Estimating Item Difficulty Using Large Language Models and Tree-Based [[reinforcement-learning|Machine Learning]] Algorithms** — Razavi & Powers (2026) evaluate whether GPT-4o can estimate the difficulty of K-5 math and reading assessment items (N = 5170) calibrated under the [[item-response-theory|Rasch IRT]] model, comparing a zero-shot direct estimation approach against a feature-based strategy in which the [[llm]] extracts cognitive and linguistic features fed into [[machine-learning|tree-based models]]. The feature-based approach outperformed direct estimation (correlations up to r = 0.87), though accuracy was weaker for early-grade items, underscoring the value of structured feature extraction for [[psychometrically-aware-ai|psychometric]] prediction.

## Key Findings

- **Direct LLM estimation shows promise but varies by grade.** Zero-shot GPT-4o difficulty ratings correlated moderately-to-strongly with true Rasch difficulties overall (r = 0.83 for math, r = 0.81 for reading), but accuracy was uneven across grades and was often no better than a grade-mean dummy regressor for grades K and 1, likely due to range restriction in lower-grade item difficulties.
- **Feature-based estimation is more accurate.** LLM-extracted features combined with random forests and gradient boosting machines yielded stronger predictive accuracy, with correlations up to r = 0.87 and lower RMSE/MAE than direct LLM estimates, dummy regressors, TF-IDF baselines, and metadata-only models — with gains most pronounced for early-grade items.
- **Structured feature extraction drives the advantage.** Decomposing difficulty into discrete, SME-derived cognitive and linguistic features (e.g., syntax complexity, [[cognitive-offloading|cognitive load]], distractor trickiness) lets the LLM rate each construct reliably and lets the tree-based model learn optimal weightings, outperforming a single holistic zero-shot judgment.
- **Feature importance is interpretable.** Grade level and word count were top predictors across subjects, alongside LLM-rated features such as syntax complexity (reading), skill challenge, and use of visuals, showing models leverage a rich mix of metadata and cognitive attributes.
- **A practical seven-step workflow is provided.** The paper offers testing professionals a workflow for implementing LLM-based difficulty estimation on their own item pools, covering item selection, SME feature elicitation, model selection, prompt generation, response evaluation, [[pedagogical-llm-training|model training]], and holdout validation.
- **Limitations remain.** Generalizability beyond K-5 math and reading is unclear, fine-tuning was not feasible due to proprietary items and data-security concerns, and early-grade range restriction limits differentiation.

## Connected Concepts

- [[item-response-theory]]
- [[educational-measurement]]
- [[llm]]
- [[machine-learning]]
- [[k-12]]
- [[assessment]]
- [[automated-question-generation]]
- [[psychometrically-aware-ai]]
- [[math-education]]
- [[educational-nlp]]

## Connected Articles

- [[llm-item-difficulty-prediction]] — Cognitive episodes in LLM reasoning traces for interpretable item difficulty prediction
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM-based difficulty calibration for programming examinations
- [[vocabulary-difficulty-prediction]] — Vocabulary difficulty prediction in a BEA shared task
- [[item-writing-flaws-irt-difficulty-2026]] — Item-writing flaws and difficulty/discrimination in IRT

## Citation

Razavi, P., & Powers, S. (2026). [Estimating item difficulty using large language models and tree-based machine learning algorithms](https://doi.org/10.1016/j.ijaied.2026.100015). *International Journal of Artificial Intelligence in Education*, 36, Article 100015.
