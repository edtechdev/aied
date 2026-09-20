---
title: "Outcome-based knowledge tracing with affinity mapping and memory augmented outcome impact"
created: "2026-09-03T13:40:00-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
foundations: [curriculum-design]
technology: [adaptive-learning, cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, machine-learning, student-modeling]
methods: [benchmark]
sources: ['raw/papers/pradeesh-outcome-knowledge-tracing-affinity-2026.md']
confidence: high
research_method: [system development]
audience: [learning analytics designers, researchers, instructors]
level: [higher ed]
page_kind: [evaluation, framework]
---

> **Synthesis:** **Outcome-based knowledge tracing with affinity mapping and memory augmented outcome impact** — Pradeesh et al. (2026) propose the Outcome-Based Knowledge Tracing (OKT) model, a recurrent neural network that traces students' [[knowledge-tracing|knowledge states]] within Outcome-Based Education (OBE) systems by treating course outcomes as knowledge concepts. It uses OBE "affinity mappings" between course and program outcomes to capture concept relationships, and a Memory Augmented Neural Network (MANN) to model how each outcome's attainment impacts a student's evolving knowledge state. On live university engineering-program data from a learning management system, OKT achieved 89.81% AUC, outperforming DKT, DKVMN, SimpleKT, and EKT baselines.

## Key Findings

- **OKT outperforms standard knowledge tracing baselines in OBE settings.** On a live OBE dataset spanning three engineering programs (CSE, ECE, EEE; 2,416 students, 966 outcomes, 2,280 exams), OKT reached 89.81% validation AUC and 84.87% accuracy, beating DKT (80.38% AUC), DKVMN (81.69%), EKT (82.90%), and SimpleKT (85.56%). The model also learned faster, improving steadily after ~15 epochs where baselines plateaued.
- **Affinity mapping is a viable alternative to attention and graph-based concept relations.** Rather than learning concept relationships implicitly via attention mechanisms or graph message passing, OKT exploits OBE affinity mappings — expert-validated, program-level links between course outcomes and program outcomes — to represent how outcomes reinforce one another across a [[curriculum-design|curriculum]]. Removing affinity features dropped accuracy by 8–10% (to 79.24% accuracy / 80.56% AUC).
- **The MANN memory module captures outcome-level impact.** A memory-augmented network stores outcome embeddings and computes an outcome impact factor (β) that quantifies how each outcome's attainment influences others. Ablation showed a 9.5% AUC drop when MANN was removed, confirming its role in modeling outcome-specific knowledge progression.
- **Domain-adaptive BERT fine-tuning improves embeddings.** The model fine-tunes a BERT-based sentence transformer on outcome pairs scored by cosine similarity of outcome property vectors (semester, threshold, target, affinity mapping, course encoding). Fine-tuned BERT beat general BERT by 1.15% accuracy and outperformed XLNet, Word2Vec, and GloVe embeddings; omitting BERT entirely cost 6.75% AUC.
- **GRU over LSTM.** OKT uses a GRU-based RNN, which outperformed an LSTM variant (77.83% vs 77.24% accuracy) while being more computationally efficient.
- **OBE-specific value, not general-purpose.** On the public ASSISTments 2012–2013 dataset, OKT gave competitive but not superior results (74.36% AUC vs EKT's 75.29%), confirming that its advantage is tied to OBE-specific features such as affinity mappings, attainment thresholds, and targets.

## What this means for practice

- **Instructors.** Use outcome-level mastery states for earlier remediation than a program-level attainment report allows: OKT updates a per-outcome knowledge state at every exam and predicts upcoming attainment (84.87% accuracy, 89.81% AUC on live university data), so an unattattained course outcome can be flagged as it happens.
- **Instructors.** Treat the prediction as a triage signal rather than a diagnosis: it is validated against exam attainment, not against which intervention helps a student who is behind.
- **Designers.** Reuse the program's existing affinity mappings as the concept-relation signal instead of building an attention or graph model: removing affinity features cost 8–10% accuracy, dropping to 79.24% accuracy and 80.56% AUC.
- **Designers.** Budget for domain-adaptive BERT fine-tuning on outcome pairs (1.15% accuracy over general BERT, with 6.75% AUC lost when BERT is omitted) and for the memory module (9.5% AUC drop when MANN is removed); the gain is real but depends on OBE-specific embeddings.
- **Designers.** Plan the interpretability step before shipping a dashboard: per-outcome knowledge states are 100-dimensional embeddings the authors state are not directly interpretable, requiring a projection such as the t-SNE scatterplot they used for review.

## Limitations

- All results come from one institution's five-year OBE dataset (from 2017) covering three engineering programs (CSE, ECE, EEE; 2,416 students, 966 outcomes, 2,280 exams) captured through a single in-house LMS (AMPLE); the authors note that no public OBE dataset exists for comparison.
- Architecture gains are narrow and do not survive the change of setting: the GRU variant beat an otherwise comparable LSTM (77.83% vs 77.24% accuracy), and on the public ASSISTments 2012–2013 dataset OKT scored 74.36% AUC against EKT's 75.29%, because affinity mappings, attainment thresholds, and targets have no counterpart there.
- Evaluation is predictive only — AUC and accuracy against exam attainment — with no test of whether acting on the predictions improves learning, and the authors state that the patterns they observed could reflect demographic differences, prior knowledge, or external influences on learning behavior that were not analyzed.
- Knowledge states are 100-dimensional embeddings that the authors describe as not easy for humans to interpret directly, so any teacher-facing use depends on a separate visualization and interpretability layer.

## Connected Concepts

- [[knowledge-tracing]]
- [[student-modeling]]
- [[machine-learning]]
- [[intelligent-tutoring]]
- [[cognitive-diagnosis]]
- [[learning-analytics]]

## Connected Articles

- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable Knowledge Tracing
- [[neural-symbolic-knowledge-tracing]] — Neural-Symbolic Knowledge Tracing
- [[mbp-kt-meta-behavioral-knowledge-tracing]] — MBP-KT: Learning Global Collaborative Information from Meta-Behavioral Knowledge Tracing
- [[thymen-temporal-hypergraph-knowledge-tracing-2026]] — Augmenting Knowledge Tracing Through Modeling Dynamic Higher-Order Connections
- [[cognitive-load-transfer-knowledge-tracing-2026]] — Incorporating Cognitive Load and Knowledge Transfer for Multi-Domain Knowledge Tracing
- [[stanbkt-bayesian-knowledge-tracing]] — StanBKT: Rethinking Parameter Estimation in Bayesian Knowledge Tracing

## Citation

Pradeesh, N., Gopakumar, G., Pathinarupothi, R. K., & Krishnamoorthy, S. (2026). [Outcome-based knowledge tracing with affinity mapping and memory augmented outcome impact](https://doi.org/10.1016/j.ijaied.2026.100006). *International Journal of Artificial Intelligence in Education*, 36, 100006.
