---
title: "Educational Innovation through Automated Essay Scoring: A Multidimensional Framework for Evaluating Critical Thinking in High School Physics Essays"
created: "2026-09-27T07:33:07-04:00"
updated: "2026-09-27T07:33:07-04:00"
type: article
sources: ['raw/papers/automated-essay-scoring-critical-thinking-physics-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [design and evaluation study]
discipline: [physics education]
level: [secondary]
audience: [instructors, researchers]
foundations: [critical-thinking, limitations-in-aied-research]
technology: [educational-nlp, generative-ai, machine-learning]
assessment: [automated-assessment, automated-essay-scoring, assessment-validity]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Automated essay scoring has mostly been trained to predict one overall quality score, not the reasoning dimensions a science teacher wants feedback on. Firdausi and colleagues build a dimension-aware scorer for Indonesian high school physics: 106 eleventh-grade students answered six essay sub-questions on the environmental impact of greenhouse gases, three physics teachers scored every response from 1 to 4 on the six criteria of Ennis's FRISCO framework (Focus, Reason, Inference, Situation, Clarity, Overview), and a hybrid IndoBERT-BiLSTM classifier was trained per criterion against an IndoBERT-SVM baseline and a fine-tuned IndoBERT. Agreement is uneven: [[automated-essay-scoring|AES]] reached strong quadratic weighted kappa for Situation (0.728) and Clarity (0.763), but only fair agreement for Focus (0.374), Reason (0.332) and Inference (0.227). The most useful result is negative: the ordinal signal came mostly from a synthetic generation and paraphrase pipeline built to repair a training set of 83 students where one score level supplied 54% of samples.

## Key Findings

1. **Six dimensions, six independent classifiers.** One model per FRISCO criterion, not a single multi-label scorer, so each dimension's linguistic and reasoning characteristics are captured separately.
2. **The corpus is small: 106 students, 83 for training and 23 for testing.** The stratified 80:20 hold-out kept each student in one partition, blocking cross-dimensional leakage, but no score-level-1 training samples existed for Focus, Reason or Inference.
3. **Data augmentation carried the ordinal result.** Synthetic generation (40% templates, 35% degradation, 25% combined) plus LLM paraphrase raised QWK by up to +0.346 in Focus; without it Focus fell to 0.028.
4. **Accuracy alone misleads in ordinal scoring.** IB-BiLSTM-C reached 0.652 accuracy with near-zero or negative QWK, which the paper reads as majority-class collapse rather than genuine scoring capability.
5. **A conventional classifier won one dimension.** IB-SVM reached a QWK of 0.332 on Reason, beating every BiLSTM variant, which the authors attribute to linear decision boundaries suiting small datasets.

## How the scoring task was built

The instrument was a case description followed by six essay sub-questions on the environmental impact of greenhouse gases, one per FRISCO dimension, answered by 106 eleventh-grade students at Senior High School 1 Menganti in Indonesia. Three expert validators in [[physics-education]] had already checked the rubric, giving a content and construct validity score of 3.95 and an instrument reliability of 85.7% percentage of agreement. Labeling then ran independently across three high school physics teachers, with disagreements exceeding one score point resolved through structured discussion and a third rater as arbiter. Dimension-level agreement was strong throughout: mean kappa from 0.78 to 0.84, and mean percentage of agreement above 75% in all six dimensions, from 87.1% for Situation to 84.3% for Clarity.

## Where the models succeed and where they fail

All 12 candidates are [[educational-nlp|educational NLP]] systems built on IndoBERT embeddings, differing in sequence modeling and hyperparameters. Each dimension is scored by whichever configuration had the highest mean macro-F1 across cross-validation folds, retrained and evaluated once on the held-out set. IB-BiLSTM-I led Situation (QWK 0.728) and Clarity (QWK 0.763); IB-BiLSTM-H took Focus (0.374), IB-SVM took Reason (0.332), IB-BiLSTM-G took Inference (0.227) and IB-BiLSTM-F took Overview (0.474). Accuracies clustered at 0.522 for Focus, Reason and Overview, reaching 0.696 for Situation and 0.652 for Clarity. Only Situation and Clarity carried their cross-validated settings through to the test set, and Inference's cross-validation QWK of 0.118 plus or minus 0.185 shows how unstable a fair-agreement dimension can be.

## Why augmentation decided the outcome

The training partition was severely imbalanced: score level 3 accounted for 54% of training samples while score level 1 accounted for only 5%, and Focus, Reason and Inference had no authentic score-level-1 responses at all. Those cases were generated inside the training partition with three rule-based techniques in fixed proportions (template-based generation 40%, quality degradation 35%, a combined approach 25%), where degradation truncated text to 20-40% of its original length, removed domain keywords, or shuffled sentence order; [[generative-ai|LLM]]-based paraphrase augmentation then targeted the remaining classes. The ablation is decisive. Focus gained +0.346 QWK despite a baseline of 0.028, Situation and Clarity were already learnable without it (0.593 and 0.617), Reason moved only +0.070 from 0.261, and Overview lost 0.006 QWK even as its macro-F1 rose from 0.325 to 0.352.

## What this means for practice

- **Instructors.** Ask for dimension-level output, not a total score, and use the model as a second reader on Situation and Clarity only.
- **Instructors.** Expect the least help where critical thinking is hardest to see: Inference reached 0.227 QWK while its macro-F1 was 0.500, so its categories were classified without being ordered correctly.
- **Administrators and assessment designers.** Treat 106 students at one school as feasibility evidence, not validation, and keep summative use behind human raters whose kappa runs 0.78 to 0.84.
- **Educational technology developers.** Never select a model by accuracy in ordinal scoring: IB-BiLSTM-C's 0.652 accuracy came with near-zero or negative QWK.
- **Researchers.** Report the score distribution and augmentation provenance with every QWK: the +0.346 Focus gain came from synthetic level-1 essays, not more student writing.

## Limitations

- The corpus is 106 eleventh-grade students at a single school, split into 83 training and 23 test students, with no score-level-1 response among the Inference test cases.
- Class balance was manufactured rather than observed: level-1 samples came from templates, truncation to 20-40% of original length, and keyword removal, so the low end was learned from text no student wrote.
- Every test figure comes from one final evaluation, and cross-validation and test rankings agreed in only two of six dimensions, so the per-dimension winners are provisional.
- The study covers one subject, one language and one prompt set, and reports no learning outcomes, no deployment evidence, and no comparison against the human raters on the same held-out essays.

## Citation

Firdausi, H., Wasis, Sholikah, R. W., Lemantara, J., Rosyadi, F. D., Ginardi, R. V. H., Pradityo, M. H. A., & Hakim, A. R. (2026). [Educational Innovation through Automated Essay Scoring: A Multidimensional Framework for Evaluating Critical Thinking in High School Physics Essays](https://doi.org/10.22266/ijies2026.0831.09). *International Journal of Intelligent Engineering and Systems, 19*(8).