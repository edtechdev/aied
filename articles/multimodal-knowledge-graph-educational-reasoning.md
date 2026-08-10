---
title: "Evidence-Grounded Multimodal Knowledge Graph Construction for Multi-Lecture Educational Reasoning"
created: 2026-08-09
updated: 2026-08-09
type: article
tags: [multimodal, ai-education, knowledge-tracing, student-modeling, generative-ai, lecture-review, evidence, adaptive-learning]
sources: ['raw/papers/2608.03161v1.md']
confidence: high
---

> **Synthesis:** This paper introduces an evidence-grounded multimodal pipeline that constructs provenance-rich [[knowledge-tracing|knowledge graphs]] from lecture videos by integrating speech transcripts, slide OCR, and vision-language model analysis. Processing three neural-network lectures, the pipeline extracted 172 canonical concepts and 282 typed relationships with 90.38% endpoint coverage, achieving perfect retrieval accuracy on a preliminary test. The approach addresses a key challenge in [[ai-education|educational AI]]: converting rich multimodal lecture content into structured, queryable knowledge representations without losing the evidential provenance that makes them trustworthy.

## Pipeline Architecture

The multimodal pipeline processes lecture videos through several stages:

1. **Transcription:** Speech-to-text conversion of lecture audio
2. **Semantic Anchor Selection:** Identification of key concept-bearing segments
3. **OCR Extraction:** Text extraction from slide content and diagrams
4. **Vision-Language Analysis:** Concept and relationship extraction with evidential grounding
5. **Validation and Canonicalization:** Cross-referencing mentions against multiple evidence sources
6. **Knowledge Graph Construction:** Typed relationships with provenance tracking

## Key Metrics

| Stage | Volume |
|-------|--------|
| Frames processed | 3,118 |
| Transcript segments | 756 |
| Semantic anchors | 559 |
| Concept mentions retained | 1,022 |
| Relationship mentions | 312 (corrected from paper) |
| Canonical concepts | 172 |
| Typed relationships | 282 |
| Endpoint coverage | 90.38% |
| Retrieval top-1 accuracy | 100% |
| Retrieval top-5 recall | 100% |

## Significance for Educational AI

The auditable construction method is the key contribution — unlike black-box knowledge extraction, every concept and relationship in the graph is traceable to specific evidence (transcript segment, OCR text, or visual element). This provenance tracking is critical for educational applications where:

- **Accuracy matters:** Incorrect concept relationships can mislead [[student-modeling|student models]]
- **[[adaptive-learning]] systems** need trustworthy prerequisite relationships
- **Lecture review tools** benefit from structured, queryable knowledge representations
- **Multi-lecture reasoning** requires connecting concepts across different instructional sessions

## Connected Concepts

- [[knowledge-tracing]]
- [[ai-education]]
- [[student-modeling]]
- [[adaptive-learning]]
## Connected Articles


## Citation
Al Farib, S., Meem, M. A., Islam, S. R., & Raihan, M. T. (2026). [*Evidence-Grounded Multimodal Knowledge Graph Construction for Multi-Lecture Educational Reasoning*](https://arxiv.org/abs/2608.03161v1). arXiv:2608.03161v1.