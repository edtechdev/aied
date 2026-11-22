
title: "Validating LLM-Based Essay Scorers: A Comparative Analysis in Critical Online Reasoning in Medical Education"
created: "2026-11-17T09:40:00-05:00"
updated: "2026-11-17T09:40:00-05:00"
type: article
authors: ["Baumartz, D.", "Mehler, A.", "Bagci, M.", "Konca, M."]
published: "2026"
venue: "arXiv preprint 2611.21208"
source_url: https://arxiv.org/abs/2611.21208
evidence_context: educational
confidence: medium
assessment: [automated-essay-scoring, automated-assessment, assessment-validity]
technology: [llm, generative-ai, prompt-engineering, machine-learning]
methods: [quantitative-research]
discipline: [medical education]
level: [higher ed]
audience: [medical educators, assessment designers, researchers]
page_kind: [evaluation]
sources: ['raw/papers/baumartz-llm-essay-scorers-medical-education-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

> **Synthesis:** Does a scorer for medical-education writing need medical training? This study says no. Baumartz and colleagues took 668 student responses to 12 [[critical-thinking|critical online reasoning]] tasks in medicine, 2,076 human ratings from 7 annotators, and 11 [[automated-essay-scoring|automated essay scorers]] run against 8 general-purpose [[llm|LLMs]], producing 74 configurations and 203 score features. A linear support vector machine trained on those features reconstructed human performance classes with Macro F1 of 92% for a binary split and 83% for three classes, and roughly half the features were enough. No single scorer came close, and model size made no difference. The most predictive features were tied to content and reasoning rather than surface language, which suggests the ensemble tracks the construct the [[rubrics|rubric]] targets. Because the class labels are bins of unconsolidated rater means, the result demonstrates [[assessment-validity|agreement with human judgment]] rather than correct grading.

## Key Findings

- **A linear classifier recovers human performance classes.** An SVM trained on all scorer outputs reached Macro F1 of 92% (binary, quantile), 91% (binary, uniform), 83% (three-class, quantile), and 89% (three-class, uniform).
- **Half the features suffice.** About half of the 203 features matched the full-set result, and 20 to 30 features still produced comparable scores, so accuracy does not require exhaustive feature collection.
- **One scorer alone is not enough.** Single-model feature sets reached only 72%-76% Macro F1 on binary quantile and 49%-63% on binary uniform, well below the combined ensemble.
- **Model size did not matter.** Macro F1 showed no relationship with parameter count across all class configurations, from Llama 3.2 3b to DeepSeek 3.1 671b.
- **Reasoning and content carried the signal.** The most predictive features were AAGScore and MedScore, tied to computational correctness, explanatory clarity, and content completeness rather than surface form.
- **The medical prompt is replaceable.** MedScore alone reached 68% Macro F1, but removing it left performance at about 91%, so other scorers cover the same construct.
- **Human agreement is only moderate.** Across the 12 tasks, Krippendorff's alpha was 64% with a nominal difference function and 69% with an interval function, while ICC(3,k) ranged from 81% to 93%.

## Twelve Tasks and a Human Standard

The responses come from the medical arm of the CORE assessment. Four scenarios — middle ear, respiration, circulation, and eye — were each divided into a fundamental, a practical, and a transdisciplinary task, giving 12 scored tasks with 668 responses. Seven trained doctoral students in [[medical-education|medical education]] produced 2,076 ratings against 160 task-specific criteria plus four general ones covering coherence, the number of sources cited with and without clear reference, and a control item for whether the task was answered as instructed. Agreement was moderate by one measure and strong by another: [[educational-measurement|Krippendorff's alpha]] reached 64% nominal and 69% interval across all tasks combined, ICC(3,k) ranged from 81% to 93%, and Cronbach's alpha sat between 82% and 93% by pairwise deletion. The authors then collapsed all criteria into one score per response by normalizing each criterion to a 0-to-1 scale, averaging within rater, and averaging across raters, before binning that score into two or three classes by uniform or quantile cuts. Four class definitions result, and every one is tested.

## Eleven Scorers, Eight Models

Eleven scoring systems supply the features, and only two are not LLM-based. The transformer pair is engessay-grading-ml, a RoBERTa model fine-tuned on the ELLIPSE corpus, and ielts-essay-scoring, trained on IELTS essays. The other nine wrap a rubric in a prompt: llmaesslow-scorer, aes-asap-mts-scorer, aes-asap-vanilla-scorer, aes-toefel11-mts-scorer, aag-scorer, be-grading-scorer, grading-like-human-scorer, llmaes-scorer-zeroshot, and grading-medical-education. Each returns between one and six scores, for 35 features per model configuration and 203 in total. The eight backends are Llama 3.2 3b, Qwen 3 at 8b, 14b, and 32b, GPT-OSS at 20b and 120b, DeepSeek R1 70b, and DeepSeek 3.1 671b, all used zero-shot with no [[llm-training-and-fine-tuning|fine-tuning]]; even the medical prompt was generalized by swapping "medical teacher" for "teacher". The classifier is deliberately plain, a small [[machine-learning|machine-learning]] model: scikit-learn's LinearSVC over a ten-fold stratified split with 20% held out, preceded by evolutionary feature selection with a population of 5,000 over 100 generations and Macro F1 as the objective.

## What the Classifier Achieves

The ensemble result is strong and flat across class definitions. Macro F1 reaches 92% for the binary quantile split, 91% for binary uniform, 83% for three-class quantile, and 89% for three-class uniform, and the per-task breakdown stays between 0.80 and 0.95 for all four medical scenarios. The best single model does far worse, at 72%-76% for binary quantile and 49%-63% for binary uniform, which is the study's central contrast: the ensemble, not the scorer, carries the result. Grouping by model family narrows the gap without closing it, and Qwen leads across variants; GPT-OSS and DeepSeek trail Qwen by roughly 15% in the three-class uniform setting and by 5%-10% elsewhere. Combining models within a family beats the best member even when training is capped at 30 to 40 features, so the gain is complementarity rather than dimensionality. About half of the 203 features were sufficient to reach that result.

## What the Classifier Leans On

Two feature analyses agree on the substance. Cliff's delta with Mann-Whitney tests under Benjamini-Hochberg control, and SHAP values over the fitted SVM, both rank AAGScore and MedScore highest: one rewards computational correctness and explanatory clarity, the other content accuracy and completeness. Those two features were selected in 8 to 9 of 10 cross-validation splits, and MedScore was chosen in every split. The obvious objection is that MedScore is the medical scorer, so the result depends on domain tuning. The authors test it: MedScore alone, one feature per model, yields 68% Macro F1, but deleting it entirely leaves about 91%, and the economics- and medicine-tuned models in the broader project never dominated, a pattern the companion rubric-level study also reports ([[baumartz-rubric-aes-llm-ensembles-2026]]). A 41-feature cluster correlates at a mean Pearson r of 0.66, while the confidence scores sit near zero (-0.06), and the same feature from two different LLMs can flip the sign of its SHAP contribution because the predictors overlap.

## What this means for practice

- **Medical educators.** General-purpose models can serve as a scoring layer for written reasoning without a medical fine-tuning budget; the constraint is a rated sample for training and checking, not a domain model.
- **Assessment designers.** Combine several cheap scorers and let a linear classifier weigh them; single-model feature sets topped out at 76% Macro F1 against 92% for the ensemble on the binary quantile split.
- **Administrators.** For an [[automated-assessment|automated scoring]] program, the expensive part is the human annotation that defines classes, not the model; a small SVM on existing scorer outputs reuses an assessment's rubric rather than replacing it.
- **Researchers.** Test transfer outside medical tasks before claiming generality, and report which class definition was used, because the same features score 92% or 83% depending on the binning.

## Limitations

- The corpus is 668 responses from 12 tasks in one medical-education project, with 45 to 88 responses per task, so per-task accuracy rests on small folds and the study demonstrates generalization only across medical assessment tasks.
- No consolidated gold rating exists; the classes are bins of averaged rater scores, so the cut strategy changes class membership, and Krippendorff's alpha of 64% nominal sets a modest ceiling on what "human-level" means here.
- All features come from scorer prompts written for other corpora (ELLIPSE, IELTS, ASAP, TOEFL11) and applied unchanged to this domain, which limits what the feature set can represent.
- Four LLM-detection tools disagreed about whether the responses were machine-generated, so the authors assumed human authorship and the behavior of the pipeline on machine-written text is untested.

## Citation

Baumartz, D., Mehler, A., Bagci, M., & Konca, M. (2026). [*Validating LLM-Based Essay Scorers: A Comparative Analysis in Critical Online Reasoning in Medical Education*](https://arxiv.org/abs/2611.21208). arXiv preprint 2611.21208.
