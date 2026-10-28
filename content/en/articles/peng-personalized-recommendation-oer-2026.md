---
title: "Research on personalized recommendation algorithm for open educational resources driven by artificial intelligence"
published: "2026"
created: "2026-10-28T18:18:15-04:00"
updated: "2026-10-28T18:18:15-04:00"
type: article
technology: [generative-ai, llm]
research_method: [system development]
audience: [software developers, instructional designers]
page_kind: [evaluation]
sources: ['raw/papers/peng-personalized-recommendation-oer-2026.md']
source_url: "https://doi.org/10.1007/s43926-026-00431-6"
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Peng (2026) asks whether a hybrid deep model can recommend open educational resources more accurately than collaborative filtering and sequential baselines, and answers with a system development and offline evaluation study, not a classroom trial. The corpus is a public Kaggle interaction dataset of 2,400 records gathered over 7 days, split chronologically into training, validation, and test portions, with TF-IDF vectors representing resource text and a bidirectional LSTM tuned by Egret Swarm Optimization. Cast as a supervised classification of engagement and relevance, the pipeline reports 93.6% accuracy, 92.5% precision, 91.0% recall, and 90.2% F1, against 84.6% accuracy for FCNN-CF and 82.6% for User-CF. It can show that the pipeline fits one small dataset better than several baselines. It cannot show learning benefit, transfer to a real platform, or that the gains survive the contradictions between its own tables.

## Key Findings

1. The evaluation rests on 2,400 interaction records collected over 7 days from a public Kaggle open educational resource interaction dataset, with implicit signals such as clicks, views, and resource accesses standing in for preference.
2. Against three conventional baselines the proposed model reported 93.6% accuracy, 92.5% precision, 91.0% recall, and 90.2% F1, compared with 84.6%, 84.9%, 83.5%, and 83.4% for FCNN-CF, 82.6%, 82.2%, 83.2%, and 82.9% for User-CF, and 86.3%, 86.1%, 87.1%, and 87.0% for a multilayer perceptron.
3. Against stronger sequential baselines the margin narrows to a few points on accuracy: 93.6% for the proposed model, 90.1% for GRU4Rec, 89.2% for NCF, 88.4% for LightFM, 87.2% for factorization machines, and 91.1% for BERT4Rec.
4. On ranking metrics at ten items the model reported NDCG@10 of 93.1%, Recall@10 of 94.2%, MAP@10 of 91.8%, and HitRate@10 of 95.1%, against 90.1%, 91.2%, 89.8%, and 92.0% for the multilayer perceptron.
5. The ablation attributes most of the gain to the optimizer and the sequence model: a plain BiLSTM without optimizer tuning reached 89.4% accuracy, the optimizer applied to a multilayer perceptron reached 87.8%, and the full pipeline reached 93.6%.
6. Preprocessing is load bearing in the author's account: Min-Max normalization, KNN-based imputation of missing values, interquartile range treatment of outliers, and dropout regularization are all described as the response to a corpus small enough to invite overfitting.
7. Cold start is addressed architecturally rather than empirically, by mapping new users and new resources onto learned representations from profile and description similarity, a mechanism the paper describes but does not evaluate separately.

## What the pipeline does, and what it is measuring

The system has three stages. Resource text and learner metadata are cleaned, normalized, and imputed, then converted into weighted term vectors by TF-IDF so that distinctive terms count more than common ones. Those vectors feed a bidirectional LSTM that reads interaction sequences forward and backward, and Egret Swarm Optimization searches learning rate, hidden unit count, and gating configuration instead of leaving them to manual tuning.

The critical framing decision sits in the task definition. Engagement level and relevance score are treated as two categorical targets, so the problem becomes classification rather than ranking, and accuracy, precision, recall, and F1 become the natural metrics. That choice makes the results legible but also makes them generous: a classifier that predicts the majority engagement band well can post high accuracy without ordering resources usefully for any individual learner. The paper reports ranking metrics too, which helps, though the ranking table covers only three baselines.

Nothing in the pipeline models what a learner already knows. Features are identifiers, interaction history, session duration, resource type, difficulty level, category, and timestamps. Difficulty level is a property of the resource, not a comparison against the learner's current state, so the recommender cannot distinguish a resource that is appropriately challenging from one that is merely popular with similar users.

## The comparison tables do not agree with each other

A reader checking the paper's central claim against its own numbers will find three problems. First, BERT4Rec appears twice with different scores: 91.1% accuracy and 90.8% F1 in the extended comparison, but 89.1% accuracy and 87.8% F1 in the standard baseline table. Second, on the extended table the proposed model's F1 of 90.2% is below BERT4Rec's 90.8%, and its recall of 91.0% exactly equals BERT4Rec's, so the statement that it outperforms all baselines in all metrics is not supported by that table.

Third, the ablation undercuts the representation choice rather than confirming it. Learned embeddings with a BiLSTM reached 91.0% accuracy, above the 90.2% obtained by TF-IDF with the same sequence model, yet the final architecture keeps TF-IDF. The full model still wins at 93.6%, but the ablation as reported does not isolate which component produced the difference, since the variants differ in more than one factor at a time.

There is a smaller inconsistency in the data description. The dataset section states a 70/15/15 chronological split, while the algorithm listing specifies an 80:10:10 split to prevent leakage. Only one of these can describe the reported run.

## Two thousand four hundred records is a thin base for a deep model

The corpus is small by the standards of sequence recommendation, and the paper says so twice while defending it as adequate. Seven days of interaction history also means the temporal signal available for a bidirectional model is short, and no experiment tests how performance degrades as the history window grows or as new resources arrive. Reporting is further weakened by placeholders left in the text: the user count, the item count, and the sparsity level appear as the letters U, I, and S percent rather than as numbers, so a reader cannot reconstruct the matrix or check the claimed sparsity.

The evaluation is entirely offline. No deployment, no A/B test, no learner outcome, and no measure of whether recommended resources were studied, completed, or learned from. The conclusion acknowledges dependence on dataset quality, variability in learner behavior, and the absence of real-time verification, and proposes validation on Coursera or EdX data as future work. Fairness, privacy, and bias are named as deployment concerns in a single sentence and are not measured, despite the fact that a model trained on implicit clicks will reproduce whatever exposure patterns the platform already had.

## What this means for practice

Instructors and librarians should read 93.6% as a fit statistic on a 2,400-row sample, not as a claim about their students. The transferable ideas are modest and useful: represent resource text so that distinctive terms dominate, treat the interaction sequence rather than a single click as the unit of evidence, and tune hyperparameters rather than inheriting defaults. None of that requires the specific architecture.

For platform teams, the paper's most practical content is its preprocessing and its cold-start strategy, both described in enough detail to reimplement. The warning is that the reported gains over BERT4Rec are within a few points on a dataset this small, which is the range in which seed variance and split choice can decide the outcome. Anyone building on this should fix seeds, report variance, and evaluate on a corpus with more than a week of history before claiming an improvement over a transformer baseline.

## Limitations

- The evaluation uses 2,400 implicit interaction records from one public Kaggle dataset over 7 days, with user count, item count, and sparsity left as placeholders, so the interaction matrix cannot be reconstructed and generalization to a real platform is untested.
- Three comparison tables report conflicting values for the same baselines, and the claim of superiority on all metrics fails against the table that includes BERT4Rec.
- No learner outcome, completion, or learning measure is collected, and the classification framing rewards predicting engagement bands rather than ordering resources for an individual.
- Fairness, privacy, and bias are named as concerns but not operationalized, and the ablation varies several factors at once, so component contributions are not isolated.

## Citation

Peng, H. (2026). [*Research on personalized recommendation algorithm for [[open-education|open educational resources]] driven by artificial intelligence*](https://doi.org/10.1007/s43926-026-00431-6). *Discover Internet of Things*, advance online publication (article in press).
