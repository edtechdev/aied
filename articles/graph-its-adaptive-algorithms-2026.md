---
title: "Intelligent Tutoring in Dynamic Domains: A Graph-Based System for Comparative Analysis of Adaptive Algorithms"
created: "2026-08-23T10:00:00-04:00"
updated: "2026-08-23T10:00:00-04:00"
type: article
tags: [intelligent-tutoring, adaptive-learning, knowledge-graph, self-regulated-learning, generative-ai, learning-gains]
audience: [software developers]
research_method: [learning analytics]
sources: ['raw/papers/graph-its-adaptive-algorithms-2026.md']
confidence: high
---
> **Synthesis:** Csépányi-Fürjes and Kovács implement and empirically validate **G4L**, a graph-based intelligent tutoring system for fast-changing domains. Built on the Evolving Knowledge Space Graph (EKSG) model (Neo4j) plus a relational database (MySQL) for real-time tracking, it uses **intuitionistic fuzzy logic** (IFL) to represent learner knowledge states and forgetting, and a **generative-AI assistant** to auto-generate knowledge units, prerequisite relations, and quiz questions (teacher-in-the-loop review). Three adaptive algorithms — Bayesian Network (BN), Knowledge Space Theory (KST), and the proposed Weighted Distance Dependent Induction (WDDI) — are compared in a 45-participant classroom study. The **Bayesian algorithm produced the highest knowledge gains** (0.717 → 0.887, +24%), while log analysis revealed self-regulated learning dominated system recommendations.

## Core Finding

A hybrid [[intelligent-tutoring|ITS]] that combines a structured graph-based domain model (EKSG), a relational database for real-time activity/knowledge tracking, and a generative-AI content-creation assistant is feasible and pedagogically effective in a dynamic domain. In the [[adaptive-learning|adaptive algorithm]] comparison, the **Bayesian knowledge propagation algorithm yielded the highest measured learning gains** (BN +24% vs KST +5%, WDDI +1%), and it also had the lowest prediction error alongside a graph-neural-network baseline — supporting it as the strongest adaptive algorithm in this coarse-grained [[curriculum-design|curriculum]] setting.

## What the System Is

G4L operationalizes the EKSG model — a graph-based knowledge representation extending Knowledge Space Theory and Competence-Based KST — in a working ITS:

- **EKSG graph (Neo4j):** directed graph of Knowledge Unit, Material Unit, and Test Unit nodes linked by `prerequisite_of` edges, making evolving domain structure explicitly visible to learners.
- **Relational database (MySQL):** learner activity logs, knowledge state data, system config, and teacher data for real-time tracking and adaptive decisions.
- **Learner subsystem + Teacher subsystem + Knowledge retention subsystem:** scheduling forgetting updates so knowledge decays realistically over time.
- **Generative-AI assistant:** auto-generates knowledge units, prerequisite relations, and quiz items from existing documentation, with human expert refinement (teacher-in-the-loop).

## How Adaptation Works

- Learner assessment responses are mapped to **IFL mastery values** per knowledge unit (truth/falsity/hesitation on an adapted Atanassov IFL triangle).
- These observed values are **propagated through the [[knowledge-graph|knowledge graph]]** using one of three algorithms (BN, KST, or WDDI) to estimate mastery of related (unassessed) units.
- The system recommends the next knowledge unit: units outside the "KNOWS" region are ranked by proximity to the "knows" vertex.
- **Forgetting** is modeled as a vector shift toward "unknown" using the Ebbinghaus forgetting curve, driven by elapsed time and repetitions; units most vulnerable to decay are prioritized for review.
- Learners **may follow or override recommendations**, supporting [[agency]] and [[self-regulated-learning|self-regulated learning]].

## Results

- **RQ1 (structure/navigation):** Knowledge Decomposition and Graph-based Navigation Usability rated highest (avg 4.41, rubric level 3); Prerequisite Logic Clarity lowest (4.16).
- **RQ2 (algorithms):** measured knowledge improved in all groups — BN 0.717→0.887 (+24%, score 3), KST 0.919→0.967 (+5%, score 2), WDDI 0.871→0.882 (+1%, score 2). Final rubric scores BN 3, KST 2, WDDI 2. In a simulation, BN (error 14) and a GNN baseline (20) tracked true IFL truth values best vs KST (94), WDDI (62), uniform static (100).
- **RQ3 (tracking):** system scored "Good (3)" (11/13 tracking features, 85%). BN group logged the most per-learner records (855.9) and the most active test engagement; the most active learner (112 interactions) was in the KST group.
- **Self-regulation:** most learners disregarded system recommendations (learn-followed 18–32%, repeat-followed 7–9%), indicating their own decisions took precedence over the suggested path.

## Key Strengths and Caveats

- **Strengths:** combines structured domain modeling, fine-grained real-time activity logging (13 event types), adaptive content delivery, and generative content creation; teacher-in-the-loop keeps pedagogy under human control; log-based tracking is lightweight and non-intrusive.
- **Caveats:** small sample (45, 3 dropouts, 28 questionnaire respondents); single subdomain (JDBC API, 15 KUs); short study window (limited long-term retention insight); no control group or alternative-ITS comparison; KST predicted-mastery values stuck at 1.000 (full-mastery inference) and should be read with caution; WDDI's proposed bi-directional propagation underperformed on measured gains.

## Relevance to the knowledge base

This is a development article that demonstrates a complete, implemented pipeline from a [[knowledge-graph|knowledge-graph domain model]] through adaptive algorithms and real-time [[learning-analytics|learning analytics]] to generative content creation — an integration rarely reported end-to-end. Its empirical comparison of multiple adaptive algorithms (with the **Bayesian algorithm showing the highest knowledge gains**) is directly relevant to comparative ITS design, while its explicit modeling of forgetting, IFL-based uncertainty, and log-driven [[self-regulated-learning|self-regulated-learning analysis]] connects several core knowledge base themes. The GenAI content-generation component with teacher-in-the-loop validation offers an applied example of generative AI in instructional design.

## Connected Concepts

- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[knowledge-graph]]
- [[self-regulated-learning]]
- [[generative-ai]]
- [[learning-gains]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[personalized-learning]]
- [[assessment]]
- [[feedback]]
- [[instructional-design]]

## Connected Articles

- [[tutoring-effectiveness-index]]
- [[genai-motivation-engagement-2026]]
- [[genai-feedback-design-multisite-experiment]]
- [[precision-education-student-digital-twins-2026]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[instructor-designed-ai-tutors-foreign-language-sdt-2026]]

## Citation

Csépányi-Fürjes, L., & Kovács, L. (2026). [Intelligent tutoring in dynamic domains: a graph-based system for comparative analysis of adaptive algorithms with intuitionistic fuzzy logic and forgetting](https://doi.org/10.1007/s11423-026-10639-6). *Educational Technology Research and Development*.
