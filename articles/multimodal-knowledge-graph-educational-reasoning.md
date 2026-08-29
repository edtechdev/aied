---
title: "Evidence-Grounded Multimodal Knowledge Graph Construction for Multi-Lecture Educational Reasoning"
created: "2026-08-09T07:09:19-04:00"
updated: "2026-08-24T10:00:00-04:00"
type: article
tags: [multimodal, ai-education, knowledge-graph, knowledge-tracing, student-modeling, generative-ai, adaptive-learning]
research_method: [evidence]
sources: ['raw/papers/2608.03161v1.md']
confidence: high
---

> **Synthesis:** This paper introduces an evidence-grounded multimodal pipeline that constructs provenance-rich [[knowledge-graph|knowledge graphs]] from lecture videos by integrating speech transcripts, slide OCR, and vision-language model analysis. Processing three neural-network lectures, the pipeline extracted 172 canonical concepts and 282 typed relationships with 90.38% endpoint coverage, achieving perfect retrieval accuracy on a preliminary test. The approach addresses a key challenge in [[ai-education|educational AI]]: converting rich multimodal lecture content into structured, queryable knowledge representations without losing the evidential provenance that makes them trustworthy.

## Key Findings

1. The pipeline fuses speech transcription, slide and diagram OCR, and vision-language analysis into a single evidence-grounded workflow, so every extracted item is tied to lecture evidence rather than inferred.
2. Across three neural-network lectures it processed 3,118 frames, 756 transcript segments, and 559 semantic anchors, retaining 1,022 concept mentions and 312 relationship mentions.
3. Canonicalization collapsed those mentions into 172 canonical concepts and 282 typed relationships, achieving 90.38% relationship endpoint coverage.
4. A preliminary three-question retrieval test reached 100% top-1 and top-3 accuracy and 100% mean top-5 recall, though the authors frame it as a sanity check rather than a benchmark.
5. Validation and confidence thresholds (0.55 minimum) plus evidence-pool checking filter out unsupported claims, making the resulting graph inspectable and auditable rather than a black-box extraction.

## Motivation

Lecture videos distribute knowledge across speech, slide text, diagrams, equations, and presentation order, which transcript-only retrieval does not fully preserve. Students integrate these signals to connect definitions, examples, and prerequisites. Automated lecture [[automated-question-generation|question answering]] therefore needs a representation that retains concepts, relationships, evidence, and temporal context rather than only flat transcript chunks. Conventional [[rag|retrieval-augmented generation]] grounds [[llm|language models]] in external context but is weakest on explicit dependencies, concept evolution, and visually communicated information. A [[knowledge-graph|knowledge graph]] instead represents concepts as nodes and typed relations as edges while retaining the lecture, timestamp, frame, and evidence quotation that justify each extraction. This auditability matters in [[ai-education|education]] because unsupported claims can mislead learners, and instructors need to inspect or correct extracted knowledge.

## Pipeline Architecture

The multimodal pipeline processes lecture videos through several stages:

1. **Transcription:** Speech-to-text conversion of lecture audio, with each segment aligned to a primary frame via its midpoint
2. **Semantic Anchor Selection:** Identification of key concept-bearing segments, targeting about 18% of frames with temporal spacing to suppress near-duplicates
3. **OCR Extraction:** Text extraction from slide content and diagrams, capturing labels, annotations, symbols, and equations that may not be spoken
4. **Vision-Language Analysis:** Concept and relationship extraction with evidential grounding under a constrained JSON prompt
5. **Validation and Canonicalization:** Cross-referencing mentions against multiple evidence sources and merging duplicates
6. **Knowledge Graph Construction:** Typed relationships with provenance tracking in a NetworkX MultiDiGraph

## Grounded Extraction and Validation

For every semantic anchor, the [[generative-ai|vision-language model]] receives the frame, a transcript window spanning 15 seconds before through 22 seconds after the anchor timestamp, OCR text, and locally derived candidate terms. It returns strict JSON arrays for concepts and relationships, where empty arrays are permitted. A concept records a name, definition, evidence quotation, source modality, and confidence; a relationship records source and target concepts, one of eight permitted types (prerequisite_of, component_of, uses, optimizes, computed_by, example_of, contrasts_with, or related_to), evidence quotation, source modality, and confidence.

Validation removes missing or low-information fields, unsupported evidence, invalid relation types, and claims below a 0.55 confidence threshold. Transcript- and OCR-sourced claims must occur in the evidence pool, while visual-only concepts require stronger confidence. This validation improves auditability but, as the authors note, does not by itself guarantee factual correctness — reducing the risk of a structurally plausible but unsupported graph.

## Canonicalization and Graph Construction

Validated mentions are merged using aliases, normalized and fuzzy string matching, token overlap, and embedding similarity. Each canonical node retains its identifier, display name, aliases, definitions, mention list, lecture coverage, evidence count, and average confidence. Relationship endpoints are mapped only after concept deduplication, which prevents otherwise-valid edges from being lost when raw endpoint names differ from canonical names. The result is a [[network-analysis|graph]] whose edges carry relation type, lecture, timestamp, anchor, evidence quotation, and confidence, with multiple edge instances allowed between the same nodes when supported by different evidence.

## Retrieval and Question Answering

Canonical concept text combines name, definition, aliases, and evidence snippets and is embedded using BGE-large English. The retrieval score combines semantic similarity, exact name and alias matches, fuzzy similarity, and an evidence-count prior. The top six concepts are expanded to a one-hop subgraph, and the answer prompt receives only formatted definitions, relationships, and evidence, requesting lecture identifiers and timestamps when available. This graph-grounded retrieval contrasts with video question answering systems that reason over a fixed clip without an explicit intermediate representation, which cannot easily aggregate evidence for a single concept across multiple, separately recorded lectures.

## Results

Across the three lectures, the model returned 1,155 raw concept and 400 raw relationship mentions; evidence and confidence checks retained 1,022 concepts (88.48%) and 312 relationships (78.00%). Canonicalization produced 172 concepts, and endpoint mapping retained 282 edges (90.38% of validated relationships). The reduction from 1,022 mentions to 172 nodes is expected because course concepts recur across anchors and lectures. Central training concepts dominate the evidence distribution — weights, loss function, neuron, bias, and gradient descent carry the most evidence — though remaining singular and plural variants reveal conservative but incomplete entity resolution. Definition, relation, prerequisite, and cross-lecture trial questions ranked their target concepts first and within the top three, though generated answers sometimes added correct background knowledge not explicitly supported by retrieved evidence.

## Limitations and Future Work

The dataset contains only three lectures from one series, and extraction lacks a manually annotated concept-and-relation gold standard, so the three-query retrieval set cannot support [[benchmark|statistical claims]]. Canonicalization leaves aliases and singular or plural duplicates, and isolated or noisy nodes may encode generic terms, numeric labels, or visual artifacts. OCR and vision-language accuracy depend on frame resolution, handwriting, transitions, and diagram complexity, and answer generation may add unsupported background knowledge even when correct. Future work includes annotating concept mentions, canonical entities, relations, evidence validity, and QA; adding domain-aware lemmatization, alias dictionaries, and merge blocklists; pruning low-evidence isolated nodes; comparing transcript-only, transcript-plus-OCR, ungrounded, and grounded extraction variants; and evaluating answer faithfulness and citation validity. These constraints position the work as an auditable method rather than a state-of-the-art performance claim, consistent with the broader [[limitations-in-aied-research|limitations of AIED research]].

## Implications

- **Trustworthy knowledge extraction:** The evidence-grounded design gives instructors and [[trust]] in automated extraction by making every concept and relationship traceable to a transcript span, OCR string, or frame.
- **Educational [[knowledge-tracing|knowledge tracing]] and student modeling:** A provenance-rich graph that connects concepts across lectures offers a reusable foundation for [[student-modeling|student models]] and [[cognitive-diagnosis|diagnostic]] reasoning about prerequisite structure.
- **Personalized and adaptive learning:** Structuring lecture content into [[prior-knowledge|prerequisite]]-aware typed relationships supports [[adaptive-learning|adaptive learning]] systems and [[personalized-learning|personalized]] learning pathways.
- **Curriculum and lecture review:** Queryable, cross-lecture knowledge representations support [[curriculum-design|curriculum design]] and structured lecture-review tools that help [[student-experience|learners]] revisit concepts with their evidential context.
- **Methodological caution:** Perfect results on three seed questions should not be over-interpreted; a credible evaluation needs more definition, relation, prerequisite, example, first-mention, temporal-evolution, visually grounded, and cross-lecture questions.

## Connected Concepts

- [[knowledge-graph]]
- [[knowledge-tracing]]
- [[ai-education]]
- [[student-modeling]]
- [[adaptive-learning]]
## Connected Articles

- [[proprl-prerequisite-relation-learning]] — ProPRL: Property-Aware Prerequisite Relation Learning in Educational Knowledge Graphs
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM-Enhanced Hierarchical Cognitive Diagnosis
- [[skill-acquisition-without-temporal-info]] — Estimating Learners' Skill Acquisition Without Temporal Information
- [[pattern-kc-programming-recommendation]] — Automated Recommendation of Programming Learning Content Using Pattern-based Knowledge Components
- [[llm-item-difficulty-prediction]] — Cognitive Episodes in LLM Reasoning Traces Enable Interpretable Human Item Difficulty Prediction
- [[leveraging-complex-systems-leading-for-transformative-change]] — Leveraging complex systems: Leading for transformative change

## Citation

Al Farib, S., Meem, M. A., Islam, S. R., & Raihan, M. T. (2026). [*Evidence-Grounded Multimodal Knowledge Graph Construction for Multi-Lecture Educational Reasoning*](https://arxiv.org/abs/2608.03161v1). v1.
