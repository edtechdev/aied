---
title: "Estimating Item Difficulty Using Large Language Models and Tree-Based Machine Learning Algorithms"
created: "2026-09-03T13:40:00-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
technology: [educational-nlp, llm, machine-learning]
assessment: [assessment, automated-question-generation, educational-measurement, item-response-theory, psychometrically-aware-ai]
sources: ['raw/papers/razavi-powers-item-difficulty-llm-2026.md']
confidence: high
research_method: [educational measurement, benchmark]
discipline: [math education, english education]
audience: [assessment professionals, researchers, assessment designers]
level: [elementary, k 12]
page_kind: [evaluation]
---

> **Synthesis:** **Estimating Item Difficulty Using Large Language Models and Tree-Based [[reinforcement-learning|Machine Learning]] Algorithms** — Razavi & Powers (2026) evaluate whether GPT-4o can estimate the difficulty of K-5 math and reading assessment items (N = 5170) calibrated under the [[item-response-theory|Rasch IRT]] model, comparing a zero-shot direct estimation approach against a feature-based strategy in which the [[llm]] extracts cognitive and linguistic features fed into [[machine-learning|tree-based models]]. The feature-based approach outperformed direct estimation (correlations up to r = 0.87), though accuracy was weaker for early-grade items, underscoring the value of structured feature extraction for [[psychometrically-aware-ai|psychometric]] prediction.

## Key Findings

- **Direct LLM estimation shows promise but varies by grade.** Zero-shot GPT-4o difficulty ratings correlated moderately-to-strongly with true Rasch difficulties overall (r = 0.83 for math, r = 0.81 for reading), but accuracy was uneven across grades and was often no better than a grade-mean dummy regressor for grades K and 1, likely due to range restriction in lower-grade item difficulties.
- **Feature-based estimation is more accurate.** LLM-extracted features combined with random forests and gradient boosting machines yielded stronger predictive accuracy, with correlations up to r = 0.87 and lower RMSE/MAE than direct LLM estimates, dummy regressors, TF-IDF baselines, and metadata-only models — with gains most pronounced for early-grade items.
- **Structured feature extraction drives the advantage.** Decomposing difficulty into discrete, SME-derived cognitive and linguistic features (e.g., syntax complexity, [[cognitive-offloading|cognitive load]], distractor trickiness) lets the LLM rate each construct reliably and lets the tree-based model learn optimal weightings, outperforming a single holistic zero-shot judgment.
- **Feature importance is interpretable.** Grade level and word count were top predictors across subjects, alongside LLM-rated features such as syntax complexity (reading), skill challenge, and use of visuals, showing models leverage a rich mix of metadata and cognitive attributes.
- **A practical seven-step workflow is provided.** The paper offers testing professionals a workflow for implementing LLM-based difficulty estimation on their own item pools, covering item selection, SME feature elicitation, model selection, prompt generation, response evaluation, [[pedagogical-llm-training|model training]], and holdout validation.
- **Limitations remain.** Generalizability beyond K-5 math and reading is unclear, fine-tuning was not feasible due to proprietary items and data-security concerns, and early-grade range restriction limits differentiation.

## What this means for practice

- **Researchers.** Extract structured features with the LLM and fit [[machine-learning|tree-based models]] on them rather than relying on a single holistic difficulty rating: the feature-based approach outperformed direct zero-shot estimation, TF-IDF baselines, and metadata-only models, with correlations up to r = 0.87.
- **Researchers.** Follow the paper's seven-step workflow — item selection, SME feature elicitation, model selection, prompt generation, response evaluation, model training, and holdout validation — and build the holdout set by stratified sampling on calibrated difficulty rather than a random split.
- **Designers.** Use LLM difficulty estimation to pre-screen items and flag likely difficulty levels early in development, not to replace Rasch calibration; direct LLM estimates were often no better than a grade-mean dummy regressor for grades K and 1.
- **Designers.** Budget expert time deliberately: the features were elicited from subject matter experts in roughly two hours each, and keeping domain-general features (cognitive load, depth of knowledge) separate from domain-specific ones (symbolic reasoning in math, figurative language in reading) is what gave the model interpretable predictors.
- **Researchers.** Validate grade by grade before operational use, because accuracy was uneven across grades and weakest at the early end of the difficulty range.

## Limitations

- All 5170 items come from a single commercial K-5 adaptive assessment (Edmentum's Exact Path Diagnostic; 2564 mathematics and 2606 reading items), so generalization to higher grades or to science and social studies is untested — disciplines whose item-development traditions may differ.
- The target variable is itself a model estimate: "true" difficulty is the Rasch *b* parameter from the vendor's calibration sample of 750 students per item, and only that one IRT parameter is predicted, not discrimination or differential item functioning.
- Fine-tuning was not feasible: the authors state that roughly 5000 items is insufficient relative to the scale LLM fine-tuning typically requires, and that proprietary items raise data-security and intellectual-property concerns, so both approaches rely on prompting plus a linear transformation trained on a subset to align the LLM's scale with the IRT scale.
- Early-grade accuracy is limited by range restriction — average item-difficulty standard deviations of 0.80 (mathematics K-1) and 0.89 (reading) against 1.08 and 1.13 in higher grades — so the headline correlations are carried by the wider-spread upper grades and overstate performance on K-1 items.

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
