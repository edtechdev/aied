---
title: "ProPRL: Property-Aware Prerequisite Relation Learning in Educational Knowledge Graphs"
created: "2026-08-09T07:09:19-04:00"
updated: "2026-08-24T09:30:00-04:00"
type: article
tags: [adaptive-learning, knowledge-tracing, student-modeling, ai-education, personalized-learning, llm]
research_method: [evidence]
sources: ['raw/papers/2608.03006v1.md']
confidence: high
---

> **Synthesis:** ProPRL advances [[adaptive-learning|prerequisite relation learning]] by going beyond conventional link prediction to adaptively integrate complementary educational evidence from concept-resource hypergraphs and directed learning-behavior graphs. The Irreversibility Constraint — an anti-symmetry regularizer that penalizes contradictory bidirectional predictions — addresses a fundamental issue in [[knowledge-tracing|educational knowledge graphs]]: the asymmetry of prerequisite relationships. Experiments on multiple real-world educational datasets demonstrate state-of-the-art performance, with ablations confirming that multi-hop behavioral propagation, pair-conditioned fusion, and directional regularization each contribute to the gains.

## Key Findings

1. ProPRL achieves state-of-the-art prerequisite relation learning, ranking first on all nine dataset–metric combinations (ACC, F1, AUC) across MOOC, LectureBank, and University Course (UCD), with relative improvements from 1.96% to 6.11% over the strongest baseline (DGCPL in most cases).
2. The Irreversibility Constraint — an anti-symmetry regularizer penalizing high confidence in both directions of a concept pair — sharply reduces contradictory bidirectional predictions, raising the proportion of correctly ordered relations from 88.0% to 90.0% and widening the forward–reverse confidence margin from 0.605 to 0.695.
3. Direction-preserving personalized multi-hop propagation over the learning-behavior graph is the single most impactful component: removing it degrades F1 on UCD from 0.8788 to 0.7831, the largest ablation drop across all three datasets.
4. The Pair-conditioned Gate, which learns pair-specific weighting of resource-aware versus behavior-aware evidence, outperforms fixed uniform fusion, with dataset-dependent benefits (largest on MOOC).

## Background: Why Conventional Link Prediction Fails

Prerequisite relation learning is central to [[adaptive-learning|adaptive instruction]] and [[personalized-learning]], which depend on accurate domain knowledge structures. Yet real-world modeling is hampered by scarce expert annotations and noisy automated extraction. Existing methods typically reduce the task to conventional [[network-analysis|link prediction]] over node embeddings, which fails on three properties the authors identify as intrinsic to prerequisite relations:

- **Directional asymmetry:** prerequisite relations are irreversible (if *ci* is a prerequisite of *cj*, assigning high confidence to *cj* → *ci* is a directional contradiction), yet conventional models score directed pairs independently.
- **Multi-hop behavioral evidence:** prerequisites often surface as latent dependencies (*ci* → *ck* → *cj*) rather than explicit one-step learner transitions, which local transition heuristics miss.
- **Pair-specific relevance:** a relation is defined over a specific ordered concept pair, so the representation of *ci* should adapt to whether it is paired with *cj* or *ck* — fixed node-level representations cannot.

## The ProPRL Framework

ProPRL combines three components over an [[knowledge-graph|educational knowledge graph]]:

**Multi-view Concept Representation.** Two complementary views are learned. A directed learning-behavior graph is built from learner interaction sequences, and direction-preserving personalized propagation (inspired by APPNP) aggregates multi-hop forward and backward transitional evidence via direction-specific [[network-analysis|graph convolutional networks]]. A concept-resource hypergraph, where each learning resource is a hyperedge connecting the concepts it teaches, is encoded with a Hypergraph Convolutional Network to capture resource-mediated high-order associations.

**Pair-conditioned Gate.** Because the same concept can be a prerequisite in one pair and a target in another, ProPRL composes role-specific pair representations (concatenation, signed difference, and Hadamard compatibility) for each view, then learns a gate that adaptively weights and fuses the resource-aware and behavior-aware views per candidate ordered pair — rather than relying on a fixed node-level fusion.

**Irreversibility Constraint.** An anti-symmetry regularizer evaluates each positive pair's reverse direction with the same scoring function and penalizes simultaneously high probabilities in both directions via a co-activation margin. A teacher-detached multi-view consistency loss aligns the two single-view branches with the stronger fused prediction.

## Experiments and Results

ProPRL is evaluated on three benchmark datasets — MOOC1, LectureBank2, and University Course (UCD) — using ACC, F1, and AUC, against general-purpose baselines (NB, SVM, RF, RefD, GAE, VGAE) and task-specific prerequisite models (HGAPNet, MHAVGAE, ConLearn, LCPRE, DGCPL). It ranks first across all nine dataset–metric combinations, outperforming even the strongest baseline in every comparison; the largest relative AUC gain (6.11%) occurs on UCD.

Ablation studies confirm each component contributes: removing multi-hop propagation causes the most pronounced degradation on UCD, removing the pair gate hurts most on MOOC, and removing anti-symmetry regularization affects LectureBank most strongly. A case study on the reversed-order evaluation shows ProPRL produces a stronger separation between the annotated direction and its reversal rather than merely correcting a few reversed rankings. Hyperparameter analysis shows stability across propagation coefficient and depth (gains saturate around *k* = 5), while a small learning rate (~10⁻⁴) is needed for reliable optimization. Efficiency-wise, ProPRL stays lightweight — under 40 MB GPU memory, under 0.18 s inference — and is faster than DGCPL on MOOC and UCD.

## Implications

Accurate, directionally-consistent prerequisite modeling is foundational to several downstream educational applications:

- **[[personalized-learning]]:** sequencing content appropriately for each learner along valid dependency chains.
- **[[knowledge-tracing]]:** determining which concepts a student is ready to learn next.
- **[[student-modeling]]:** building accurate representations of student knowledge states.
- **[[curriculum-design]]:** identifying optimal learning pathways through complex knowledge domains.
- **[[intelligent-tutoring]]** and **[[scaffolding]]:** structuring hints and progression so learners build on mastered prerequisites.

ProPRL's property-aware approach — respecting directional irreversibility, aggregating multi-hop behavioral evidence, and adapting fusion to each pair — ensures that these systems respect the asymmetric nature of learning dependencies. Its focus on behavioral evidence extracted from actual learner interaction sequences also connects naturally to [[learning-analytics]].

## Connected Concepts

- [[adaptive-learning]]
- [[knowledge-tracing]]
- [[personalized-learning]]
- [[student-modeling]]
## Connected Articles

- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM-Enhanced Hierarchical Cognitive Diagnosis
- [[multimodal-knowledge-graph-educational-reasoning]] — Evidence-Grounded Multimodal Knowledge Graph Construction for Multi-Lecture Educational Reasoning
- [[llm-item-difficulty-prediction]] — Cognitive Episodes in LLM Reasoning Traces Enable Interpretable Human Item Difficulty Prediction
- [[skill-acquisition-without-temporal-info]] — Estimating Learners' Skill Acquisition Without Temporal Information
- [[llm-psychometric-calibration-cdp]] — Aligning LLM-Simulated and Human Examinees for Psychometric Calibration: A Cognitive Diagnostic Profiling Approach
- [[pattern-kc-programming-recommendation]] — Automated Recommendation of Programming Learning Content Using Pattern-based Knowledge Components

## Citation

Cheng, X., Wang, J., He, C., Dong, R., & Guan, Q. (2026). [*ProPRL: Property-Aware Prerequisite Relation Learning in Educational Knowledge Graphs*](https://arxiv.org/abs/2608.03006v1). v1.
