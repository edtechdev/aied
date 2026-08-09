---
title: "HiLLM-CD: LLM-Enhanced Hierarchical Cognitive Diagnosis"
created: 2026-08-09
updated: 2026-08-09
type: article
tags: [cognitive-diagnosis, knowledge-tracing, student-modeling, llm, generative-ai, adaptive-learning, personalized-learning, ai-education, learning-analytics]
sources: ['raw/papers/xie-hillm-cd-2026.md']
confidence: high
---

> **Synthesis:** Xie, Yang, Zhang, Li, Wang, Yang & Gao (2026) propose HiLLM-CD, a tree-structured framework for cognitive diagnosis that represents student proficiency as node-wise values on a concept tree, enabling coarse-to-fine diagnosis. A multi-agent LLM pipeline eliminates the need for expert annotations by automatically generating concept trees and exercise-concept links from educational text. Evaluated on MOOCCubeX across four subjects, HiLLM-CD improves response prediction by 11.1% AUC and proficiency reliability by 0.597 Kendall's τ under fully unannotated settings.

## Key Contributions

1. **Hierarchical proficiency modeling:** Represents each student's knowledge as node-wise proficiencies on a concept tree, with a tree-structured encoder-decoder where the encoder infers proficiencies from response history and the decoder predicts responses via a GCN-based cognitive decoder. This enables intuitive coarse-to-fine diagnosis — first assessing broad competence, then drilling into specific concept weaknesses.

2. **Automated concept tree construction:** A multi-agent LLM pipeline (Concept Elaborator, Concept Tagger, Coarse Concept Generator) automatically builds concept trees and exercise-concept links from educational text, eliminating costly expert annotation. This makes the entire diagnosis pipeline fully automated.

3. **LLM-guided proficiency learning:** An LLM teacher provides order-based distillation — supervising pairwise proficiency ordering rather than absolute values — yielding more reliable and semantically coherent proficiency estimates than reconstruction-only training.

## Approach

HiLLM-CD departs from traditional [[cognitive-diagnosis]] methods that treat concepts as independent skills. Instead, it models proficiency on a **concept tree** where leaves represent atomic concepts and internal nodes summarize coarser concept groups. This aligns with how educators naturally think about student competence — starting broad and narrowing to specific weaknesses.

The framework runs in three stages:
- **Annotation:** LLM agents tag exercises with concepts and cluster concepts hierarchically
- **Encoding:** An attention-based encoder aggregates response history to predict node-wise proficiencies
- **Decoding:** A GCN-based decoder propagates proficiency information through the concept tree to predict exercise responses

## Results

On MOOCCubeX across Computer Science, Mathematics, Physics, and Biology:
- **+11.1% AUC** average improvement in response prediction
- **+0.597 Kendall's τ** improvement in proficiency alignment with LLM teacher reference
- **+11.4% AUC** on computerized adaptive testing (CAT)
- Ablation confirms both the concept tree structure and order-based distillation are essential

## Implications for AI in Education

HiLLM-CD advances [[knowledge-tracing]] and [[student-modeling]] by making cognitive diagnosis fully automated and hierarchically interpretable. The concept tree approach connects to [[adaptive-learning]] systems that need structured student models for personalized content sequencing. By eliminating expert annotation requirements, it enables scalable deployment of [[cognitive-diagnosis]] to new domains. The LLM teacher approach for proficiency supervision suggests a broader pattern where LLMs guide learning of interpretable student representations, relevant to [[personalized-learning]] and [[intelligent-tutoring]].

## Connected Concepts

- [[knowledge-tracing]]
- [[student-modeling]]
- [[cognitive-diagnosis]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[generative-ai]]
- [[llm]]

## Connected Articles

- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable Knowledge Tracing
- [[cold-start-knowledge-tracing-safeinsights]] — Cold-Start Knowledge Tracing
- [[deeptutor]] — DeepTutor: Towards Agentic Personalized Tutoring
- [[zerkouk-comprehensive-review-its-2025]] — Comprehensive ITS Review

## Citation

Xie, Y., Yang, W., Zhang, B., Li, Z., Wang, L., Yang, M., & Gao, Y. (2026). [*HiLLM-CD: LLM-Enhanced Hierarchical Cognitive Diagnosis*](https://doi.org/10.1145/3770855.3817769). In *Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD '26)*. ACM. doi:10.1145/3770855.3817769.