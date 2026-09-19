---
title: "HiLLM-CD: LLM-Enhanced Hierarchical Cognitive Diagnosis"
created: "2026-08-09T10:38:47-04:00"
updated: "2026-09-19T11:14:39-04:00"
type: article
foundations: [ai-education]
technology: [adaptive-learning, cognitive-diagnosis, generative-ai, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
audience: [software developers]
research_method: [system development, benchmark]
sources: ['raw/papers/10.1145_3770855.3817769.md']
confidence: high
level: [higher ed]
page_kind: [framework]
---

> **Synthesis:** Xie, Yang, Zhang, Li, Wang, Yang & Gao (2026) propose HiLLM-CD, a tree-structured framework for cognitive diagnosis that represents student proficiency as node-wise values on a concept tree, enabling coarse-to-fine diagnosis. A multi-agent [[llm]] pipeline eliminates the need for expert annotations by automatically generating concept trees and exercise-concept links from educational text. Evaluated on MOOCCubeX across four subjects, HiLLM-CD improves response prediction by 11.1% AUC and proficiency reliability by 0.597 Kendall's τ under fully unannotated settings.

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

On MOOCCubeX across [[cs-education|Computer Science]], [[math-education|Mathematics]], [[physics-education|Physics]], and [[biology-education|Biology]]:
- **+11.1% AUC** average improvement in response prediction
- **+0.597 Kendall's τ** improvement in proficiency alignment with LLM teacher reference
- **+11.4% AUC** on computerized adaptive testing (CAT)
- Ablation confirms both the concept tree structure and order-based distillation are essential

## What this means for practice

- **Software developers.** Take the unannotated path: the multi-agent pipeline induces concept trees and exercise-concept links from course text alone, so a new subject can be onboarded without commissioning an expert Q-matrix or prerequisite graph.
- **Software developers.** Supervise proficiency with order-based distillation rather than absolute-value targets; the ablation shows the tree structure and the order-based supervision are each necessary for the reported gains, so neither can be dropped to simplify the build.
- **Software developers.** Use the tree-structured encoder-decoder when you must estimate ability from few responses — propagating information along related concepts is what lets the model produce accurate estimates early in a [[knowledge-tracing|trace]].
- **Designers.** Expose coarse-to-fine drill-down instead of a single overall proficiency score: in the reported case study a student's parent-node estimate looked moderate while the child "Selection algorithms" node was a critical weakness, and only the child level located the gap.
- **Software developers.** Audit the generated concept structure against expert-built trees before scaling, and plan the audit deliberately — the paper's expert comparison covers two experts on one subject only.

## Limitations

- **Single platform.** All four subject datasets are built from one MOOC resource (MOOCCubeX, XuetangX), so the gains are untested against other course structures, assessment formats, or student populations.
- **Very uneven subject samples.** Dataset sizes range from 47 students (Biology) and 51 (Mathematics) to 419 (Computer Science) and 571 (Physics), leaving the smallest subjects as the least stable evidence in the four-subject average.
- **Reference is model-generated.** Proficiency quality is scored by alignment with a GPT-4.1 teacher's reference profile (Kendall's τ, Spearman's ρ, RMSE) rather than a human-verified ground truth, and expert agreement was checked only on the Mathematics subset.
- **Not every baseline was unannotated.** For a fair comparison, prerequisite relations for one structure-aware baseline were manually annotated on the Mathematics dataset, so the "fully unannotated" setting describes HiLLM-CD's own pipeline rather than the whole experiment.

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
- [[deeptutor]] — DeepTutor: Toward Agentic Personalized Tutoring
- [[zerkouk-comprehensive-review-its-2025]] — Comprehensive ITS Review

## Citation

Xie, Y., Yang, W., Zhang, B., Li, Z., Wang, L., Yang, M., & Gao, Y. (2026). [*HiLLM-CD: LLM-Enhanced Hierarchical Cognitive Diagnosis*](https://doi.org/10.1145/3770855.3817769). In *Proceedings of the 32nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD '26)*. ACM. doi:10.1145/3770855.3817769.