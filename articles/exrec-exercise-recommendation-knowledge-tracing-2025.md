---
title: "Personalized Exercise Recommendation with Semantically-Grounded Knowledge Tracing"
created: "2026-09-19T21:07:40-04:00"
updated: "2026-09-19T22:08:08-04:00"
type: article
technology: [knowledge-tracing, reinforcement-learning, adaptive-learning, personalized-learning, recommender-systems-and-learning-paths, llm, machine-learning, learning-analytics]
methods: [quantitative-research, usability-research, benchmark]
research_method: [experiment]
discipline: [math education]
level: [k 12]
audience: [researchers, software developers, learning analytics designers]
page_kind: [framework]
sources: ['raw/papers/neurips2025-exrec.md']
confidence: high
---

> **Synthesis:** Ozyurt, Almaci, Feuerriegel and Sachan target a weakness in [[knowledge-tracing]]-guided exercise recommenders: ID-based embeddings that ignore what a question asks, state defined as a full exercise history, reward needing inference over every question, and support for one [[reinforcement-learning]] algorithm. ExRec replaces each with a semantic pipeline. An [[llm]] annotates every question with solution steps and knowledge concepts (KCs) aligned to the Common Core State Standards, contrastive learning builds question and KC embeddings, a calibrated KT model predicts KC-level knowledge states, and a compact-state Markov decision process turns those into an RL reward. Its addition is model-based value estimation (MVE), initializing the critic from the KT model instead of at random. Across four tasks on XES3G5M and a replication on Eedi, non-RL baselines give marginal or negative gains, value-based continuous RL beats policy-based methods, and MVE consistently improves it. The work matters because semantic supervision and environment-aware value estimation make personalized sequencing practical and interpretable.

## Key Findings

1. **Prior KT-guided recommenders reduce to four limitations:** ID-based embeddings that overlook question semantics, state defined as the entire exercise history, reward requiring inference over all questions, and support for only one RL algorithm.
2. **Annotation was steered toward a shared standard.** Aligning GPT-4o output to the Common Core State Standards produced 5,139 unique KC labels in 1,377 clusters, versus 8,378 KCs and 2,024 clusters in the authors' earlier pipeline.
3. **Contrastive learning sharply improved retrieval.** Micro-averaged F1 for question retrieval within a KC cluster rose from 0.2305 with default LLM embeddings to 0.8865 after contrastive training.
4. **KC calibration enabled direct KC-level prediction.** Frozen embeddings gave 81.26 AUC against 78.33 for ID-based initialization; calibration raised AUC to 81.65 and cut KC-level mean absolute error from 0.08 to 0.028.
5. **Non-RL baselines do not solve the task.** Random and historical-data [[educational-policy-ai|policies]] produced marginal or negative knowledge gains across all four tasks.
6. **Discrete methods dominate tasks 1 to 3, while value-based continuous methods beat policy-based ones.** DQN, C51, Rainbow and Discrete SAC were strong on the static tasks, and DDPG, TD3 and SAC consistently outperformed TRPO and PPO.
7. **MVE boosts continuous value-based RL and wins task 4.** On the weakest-KC task, where the target KC can change each step, MVE lifted DDPG, TD3 and SAC beyond the discrete-action methods.
8. **Improvements replicate on Eedi** (2,324,162 interactions, 47,560 students, 4,019 questions, 1,215 KCs), with percentage-of-maximum gains of SAC w/MVE 20.08, TD3 w/MVE 16.85, DDPG w/MVE 18.87, Rainbow 37.00, DQN 30.51 and random -2.31.

## How the framework works

ExRec is a four-module pipeline. Module 1 prompts GPT-4o at temperature 0 to generate solution steps, annotate KCs and map steps to KCs, told to follow the Common Core State Standards; annotating all 7,652 questions cost about 50 US dollars. Module 2 fine-tunes a BERT encoder with a contrastive loss over question-KC and solution step-KC pairs and clusters KC embeddings with HDBSCAN to suppress false negatives. Module 3 trains an LSTM knowledge tracing model on frozen question embeddings, then calibrates it so a KC embedding can be queried directly as a knowledge state, adding a KC loss to the prediction loss. Module 4 casts recommendation as an MDP whose state is the compact KT state, whose action is a question embedding, and whose reward is the change in predicted KC knowledge; MVE then uses the calibrated model to estimate critic values.

## What the results show

Evaluation uses XES3G5M (18,066 student histories, over 5.5 million interactions, 7,652 questions, 865 original leaf-level KCs), averaged over 2,048 test students across ten recommendation steps. Four tasks target different goals: global knowledge improvement, improvement in the practiced KC, improvement in an upcoming KC sampled from a KC transition matrix, and improvement in the student's weakest KC. The dataset's average correctness rate is 78 percent, placing the calibrated model's mean knowledge state at 0.78 and the maximum average improvement at +0.22 for tasks 1 to 3; task 4 permits upper bounds up to 0.64. Random and historical-data policies barely move knowledge, discrete-action methods are strong on tasks 1 to 3, and value-based continuous methods with MVE stay strong through task 4, with policy-based methods trailing.

## Generalization and a proposed extension

Two checks extend the main results. Tripling the question corpus with GPT-4o-generated items degraded default continuous-action models, whereas MVE variants held up and in several cases improved student knowledge. Visualized trajectories for one student under task 4 show the random policy producing no meaningful gain, DDPG moderate gains, and MVE larger gains that the extended corpus further improves; vanilla DDPG revisits one KC across several steps while MVE variants resolve concepts faster. The Eedi replication reports comparable absolute improvement, noting that Eedi's larger maximum possible gain (0.56 versus 0.21) makes its percentages look smaller. The appendix proposes a [[misconceptions|misconception]] extension: with answer-choice data, Module 1 would add misconception annotation, incorrect solution generation and step-misconception mapping; Module 2 an [MC] token and an L_mc loss; and Module 3 dual-task prediction of a misconception embedding, leaving Module 4 unchanged.

## What this means for practice

- **Model developers.** Build recommendation policies on semantic question and KC embeddings rather than ID lookups, and reuse a calibrated KT model to estimate critic values.
- **Researchers.** Report improvements normalized against each task's maximum attainable gain, since equal raw gains look different when upper bounds differ (0.22 on XES3G5M versus 0.56 on Eedi).
- **[[learning-analytics|Learning analytics]] designers.** Treat KC-level state estimation as a first-class output; querying the calibrated model by KC embedding lets a system show interpretable mastery trajectories rather than only next-item predictions.

## Limitations

- Both datasets are mathematics corpora, and XES3G5M questions were machine-translated from Chinese to English before annotation, so results may not transfer to other subjects or languages.
- The KC annotations come from GPT-4o prompted against the Common Core State Standards, and their quality is asserted through cluster counts rather than an independent human agreement study.
- The extended-corpus robustness test uses GPT-4o-generated questions, so it measures behavior on synthetic rather than naturally occurring new items, and the misconception extension is a proposal only, since current datasets record binary correctness and no misconception results are reported.
- Success is defined by the paper's own normalized metric, the percentage of maximum achievable knowledge-state improvement, which depends on assumptions about the calibrated model's mean knowledge state.

## Connected Concepts
- [[knowledge-tracing]] — the semantic KT model is the environment and reward source
- [[reinforcement-learning]] — exercise sequencing optimized through value-based and policy-based methods
- [[recommender-systems-and-learning-paths]] — the core application is next-exercise sequencing
- [[adaptive-learning]] — policies personalize the exercise each student receives
- [[personalized-learning]] — the four tasks target individual knowledge states
- [[llm]] — GPT-4o produces solution steps, KC annotations and the extended question corpus
- [[machine-learning]] — contrastive representation learning plus calibrated sequence modeling
- [[learning-analytics]] — interpretable KC-level knowledge-state trajectories
- [[student-modeling]] — a compact state encodes each student's history
- [[cognitive-diagnosis]] — KC-level state estimation is a diagnostic object
- [[math-education]] — XES3G5M and Eedi are both mathematics datasets
- [[k-12]] — problem content and the Common Core alignment are school mathematics

## Connected Articles

- [[misconception-acquisition-dynamics-llms-2026]] — misconception-aware training and its data requirements
- [[huang-interpretable-knowledge-tracing-2026]] — an adjacent effort to make knowledge tracing interpretable
- [[xie-hillm-cd-2026]] — LLM-based cognitive diagnosis against knowledge tracing
- [[proprl-prerequisite-relation-learning]] — learning prerequisite structure for sequencing
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — cognitive diagnosis driving personalized paths
- [[skill-acquisition-without-temporal-info]] — modeling skill acquisition without full history
- [[simulating-learner-task-selection]] — simulators that choose what a learner does next
- [[graph-its-adaptive-algorithms-2026]] — adaptive algorithms inside an intelligent tutoring system
- [[kt4eqg-personalized-question-generation]] — knowledge tracing applied to generating personalized questions
- [[pattern-kc-programming-recommendation]] — KC patterns used for recommendation in a different domain
- [[riedmann-reinforcement-learning-education-review-2026]] — a review of reinforcement learning in education
- [[fair-explainable-edu-recommendations]] — fairness and explanation for educational recommenders

## Citation

Ozyurt, Y., Almaci, T., Feuerriegel, S., & Sachan, M. (2025). [Personalized Exercise Recommendation with Semantically-Grounded Knowledge Tracing](https://proceedings.neurips.cc/paper_files/paper/2025/hash/13707aad517ddd6c09ea02e0f55e1e7a-Abstract-Conference.html). *Advances in Neural Information Processing Systems 38 (NeurIPS 2025)*.
