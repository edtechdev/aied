---
title: "Augmenting Knowledge Tracing Through Modeling Dynamic Higher-Order Concept Interactions: A Temporal Hypergraph Memory Network"
created: "2026-08-18T14:55:00-04:00"
updated: "2026-08-24T21:10:00-04:00"
type: article
tags: [knowledge-tracing, student-modeling, adaptive-learning, learning-analytics, educational-nlp, llm, formative-assessment, intelligent-tutoring]
audience: [software developers]
research_method: [benchmark]
sources: ['raw/papers/10.1016_j.caeai.2026.100616.md']
confidence: high
---

Mehrnoush Mohammadi, Kamal Berahmand, Shazia Sadiq, & Hassan Khosravi (2026) propose **THyMeN (Temporal Hypergraph Memory Network)**, a hybrid model that augments memory-based [[knowledge-tracing|knowledge tracing]] with temporal hypergraph reasoning to capture dynamic higher-order concept interactions.

## Key Findings

- **The limitation it addresses:** Existing memory-augmented knowledge-tracing models (e.g., DKVMN) treat concepts as independent entities, failing to capture how higher-order interactions among concepts shape learning — especially when concepts co-occur across varying question compositions. This parallels the [[cognitive-diagnosis|fine-grained skill assessment]] challenge of modeling multi-concept questions.
- **Temporal hypergraph representation:** THyMeN represents each student's learning history as an evolving hypergraph, where each hyperedge reflects the multi-concept structure of a question, capturing authentic multi-skill task demands and cognitive load.
- **Bidirectional message-passing:** A mechanism enables mutual refinement between concept nodes and question hyperedges, modeling how concept dynamics shift across questions and enabling composition-sensitive mastery estimates.
- **Attention-based fusion:** Integrates memory-tracked concept mastery, composition-aware hypergraph signals, and question-specific features into a unified prediction representation.
- **Adaptive scaling:** Regulates mastery updates using the diversity of concept co-occurrences across questions, yielding stable trajectories consistent with learning from varied practice.
- **Results:** Outperforms seven baselines and state-of-the-art models in predictive accuracy on four benchmark datasets, while generating smoother, pedagogically plausible knowledge-evolution trajectories. Ablation and structural comparison studies validate the design contributions. These advances feed [[intelligent-tutoring]] and [[adaptive-learning|adaptive]] systems that rely on accurate mastery estimates.

## Implications for AI in Education

THyMeN advances [[knowledge-tracing|knowledge tracing]] toward explainable and pedagogically grounded learning support. By modeling how concepts interact within multi-concept questions, it produces more robust [[student-modeling|student knowledge models]] that support [[formative-assessment|formative]], [[adaptive-learning|adaptive]], and [[personalized-learning|personalized]] assessment, and informs [[learning-analytics]] dashboards for intervention design. The emphasis on practice diversity and composition-sensitive mastery aligns with learning-science findings that cognitively demanding, varied practice strengthens retention — capturing learning dynamics that earlier KT models treat as equivalent.

## Connected Concepts

- [[knowledge-tracing]]
- [[student-modeling]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[cognitive-diagnosis]]
- [[knowledge-graph]]
- [[educational-nlp]]

## Connected Articles

- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable Knowledge Tracing
- [[mbp-kt-meta-behavioral-knowledge-tracing]] — MBP-KT: Meta-Behavioral Knowledge Tracing
- [[neural-symbolic-knowledge-tracing]] — Neural-Symbolic Knowledge Tracing
- [[stanbkt-bayesian-knowledge-tracing]] — Standardized Bayesian Knowledge Tracing
- [[huang-interpretable-knowledge-tracing-2026]] — Knowledge Tracing and IRT

## Citation

Mohammadi, M., Berahmand, K., Sadiq, S., & Khosravi, H. (2026). [Augmenting knowledge tracing through modeling dynamic higher-order concept interactions: A temporal hypergraph memory network](https://doi.org/10.1016/j.caeai.2026.100616). Computers and Education: Artificial Intelligence, 10, 100616.
