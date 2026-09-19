---
title: Jointly Predicting Courses and Grades Using a Transformer-Based Model (TRACE)
created: "2026-08-14T09:17:22-04:00"
updated: "2026-09-19T10:03:37-04:00"
type: article
technology: [knowledge-tracing, learning-analytics, machine-learning, personalized-learning, student-modeling]
assessment: [educational-measurement]
audience: [software developers]
research_method: [educational measurement]
level: [higher ed]
page_kind: [evaluation]
sources: ['raw/papers/2608.13409.md']
confidence: high
methods: [ai-ed-evaluation]
---

> **Synthesis:** Savala (2026) introduces TRACE (Transformer for Academic Course-grade Estimation), a model that jointly predicts both the set of courses a student will take and the grades they will receive in an upcoming semester. By encoding courses on a per-semester basis to capture course-concurrency effects and using a novel loss combining course-set and grade prediction, the model reduces mean absolute error by nearly 50% versus a grades-only architecture on ten years of [[governance|institutional]] data. It also outperforms LSTM-sequential and graph-neural-network baselines while remaining interpretable and adaptable to new institutions. The work advances [[learning-analytics]] and [[student-modeling]] by treating academic history as concurrently structured rather than a simple sequence.

## Key Findings

1. Jointly predicting courses *and* grades sharply outperforms a grades-only architecture: TRACE's grade mean absolute error of 0.1339 is a 46.4% reduction over the OnlyGradesTransformer's 0.2496, with mean squared error 3.5 times lower — showing that the auxiliary course task forces the model to learn richer course representations.
2. The Transformer beats sequence and relational baselines: its MSE is roughly 30% lower than the encoder-decoder and unidirectional LSTM models (MAE ~15% lower), and 15–20% lower than a graph neural network, while tree-based XGBoost performs far worse (MAE 0.8818) on the sequential task.
3. Modeling course concurrency as a per-semester unit matters: sharing the same positional encoding across all courses in a term yields a permutation-invariant representation of unordered course baskets, a structural choice that matters as much as the underlying architecture.
4. A set-based loss — KL divergence over the predicted course distribution plus MSE for grade regression — avoids the order artifacts of token-level cross-entropy while naturally encoding course load and inter-course dependencies.
5. The course-prediction auxiliary task is a regularizer, not a recommendation goal: even imperfect course predictions (P = 0.5076, F1 = 0.4432 against a random-selection baseline of ~0.014) are what drive the large grade-prediction gains.
6. An ablation removing the student-major feature marginally improved performance (MAE 0.1327 vs 0.1339), suggesting major is largely recoverable from early course selections, but demonstrates a natural template for injecting other student-attribute data.

## Concurrency in Academic Modeling

Existing predictive models in [[learning-analytics]] treat student academic history as a simple flat sequence, overlooking the concurrent nature of courses taken within a semester — a simplification that hurts predictions for students with heavy or challenging course loads. Course relationships are often highly complex: a student who writes well may find lab reports easy yet struggle with the algebra of chemical calculations, and most students carry a variable course load whose [[writing-education|composition]] and difficulty jointly shape outcomes. TRACE addresses this by encoding courses per-semester and jointly predicting course selection and grades, capturing the interrelations between what students choose to take and how they perform. Prior work such as [[knowledge-tracing]] and grade-prediction models has typically incorporated co-taken courses only through pairwise interactions or attentional modules; TRACE instead assigns all courses in a semester the same positional encoding, enforcing a permutation-invariant representation that reflects the genuinely unordered nature of concurrent enrollments.

## Joint Prediction as an Inductive Bias

A novel loss function combines course-set prediction (KL divergence over a normalized probability distribution across the course catalog) with grade regression (MSE), balanced by a weighting factor tuned near one via cross-validation. The paper shows that predicting courses taken, in addition to the grades in them, yields significant improvements in prediction quality — not because course recommendation is the goal, but because it forces the model to learn meaningful course embeddings, analogous to how BERT's auxiliary next-sentence task improves masked-word representations. The transformer architecture generalizes better than LSTM-based sequential models and graph-neural-network approaches, and naturally incorporates student attribute data (such as major) as embedded sequence entries.

## The TRACE Architecture

The study draws on anonymized institutional data from an American university: 5,326 students across 360 courses, 48 majors, and 18 semesters (Fall 2014 through Fall 2023), split 90/10 into training and test sets. Course names are label-encoded in random order so the model learns latent representations without hand-encoded subject features; rare courses and majors collapse to `<OTHER>` tokens, and grades map to a [0, 4.3] GPA scale. The Transformer uses a standard encoder–decoder stack with learned, jointly-trained embeddings for major, course, and grade, causal/padding masks so the model attends only to previous semesters, and relative (rather than absolute) semester positions so temporal importance transfers to new terms. Training uses AdamW with cosine-annealing warm restarts on a single NVIDIA RTX 3090 Ti for 20 epochs.

## Results Against Baselines

Evaluated on held-out students using MSE and MAE over actually-enrolled courses, TRACE (MAE 0.1339, MSE 0.0392) substantially outperforms every comparator. The gap over the two LSTM models is attributed less to attention than to architecture: the Transformer lets any token attend to any prior (non-masked) token, which matters when relevant courses were taken several semesters earlier. Against the graph neural network — which assumes performance is locally influenced by immediate course neighbors and similar students — TRACE's global attention learns which distant historical observations are relevant, an advantage for prerequisite chains and course sequences. XGBoost, treated as tabular data, performs worst, underscoring that tree models are poorly suited to sequential prediction. The authors note the GNN also required roughly 50% more training time, giving TRACE a favorable accuracy-to-compute tradeoff.

## Interpretability and Transfer

TRACE offers interpretable models that adapt to new institutions via retraining and recalibration, requiring no institution-specific feature engineering since course and major embeddings are learned from enrollment data alone. This strengthens the link between [[knowledge-tracing]], [[personalized-learning]], and institution-level [[ai-ed-evaluation]], demonstrating the value of modern neural architectures for institution-facing decision support in [[higher-ed]]. The reproducible [[research-methods-aied|methodological]] framework is positioned for cross-institutional comparison, with training code released publicly.

## Early Alert Systems

These results point toward a new class of advising tools that move beyond simple risk-flagging to data-driven insight into how specific course combinations affect student success. An early-warning system could run continuously as grade data updates each semester and feed results into student advising. TRACE's grade-prediction MAE of 0.0392 on a [0, 1] GPA scale — about 0.1568 on a typical [0, 4] scale, roughly half the difference between adjacent +/- grades such as B vs B+ — is accurate enough to serve a meaningful purpose in an [[ai-ed-evaluation|early-alert]] context. While such models do not replace human insight, they can alert faculty and support staff to emerging problems, supporting early intervention and [[feedback|nudging]] rather than the manual instructor alerts many institutions still rely on.

## What this means for practice

- **Software developers.** Model each semester as an unordered basket of courses sharing one positional encoding, and jointly predict the course set and grades rather than treating academic history as a flat sequence.
- **Software developers.** Inject additional student attributes as embedded sequence entries the way major was handled; the ablation showed major is largely recoverable from early course selections, so the slot generalizes to other attribute data.
- **Administrators.** Retrain and recalibrate the released model on your own institution's records — no bespoke feature engineering is needed — to run continuous early-alert advising instead of manual instructor alerts.
- **Researchers.** Build on the released training code as a cross-institutional baseline; the auxiliary course-prediction task (P = 0.5076, F1 = 0.4432, against a random baseline of ~0.014) is what drives the grade-prediction gain, not a recommendation goal.
- **Researchers.** Audit historical grading data for encoded systemic bias before predictions enter live decision support, and keep models as alerts for human advisors rather than replacements for them.

## Limitations

The model was trained and tested on data from a single, medium-sized private university, so demographics, course offerings, and rigor may not generalize without retraining. Features were limited to major, course history, and grade history, excluding known influences such as [[student-engagement]] and non-cognitive skills; historical grading data may encode systemic bias, so fairness auditing and [[bias-mitigation]] are flagged as future work. The model also faces a cold-start problem for new students and for novel courses (mapped to `<OTHER>`) until sufficient data accumulates. These single-institution validation limits and the privacy sensitivity of institutional data (only an anonymized subset is shared) are explicitly acknowledged.

## Connected Concepts

- [[learning-analytics]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[personalized-learning]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]

## Connected Articles

- [[at-risk-students-ml-prediction]]
- [[huang-interpretable-knowledge-tracing-2026]]
- [[stanbkt-bayesian-knowledge-tracing]]
- [[mbp-kt-meta-behavioral-knowledge-tracing]]
- [[learning-behavior-background-advantage-ai-ed]]

## Citation

Savala, P. (2026). [*Jointly predicting courses and grades using a transformer-based model*](https://arxiv.org/abs/2608.13409).
