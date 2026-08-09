---
title: Knowledge Graph
created: 2026-08-09
updated: 2026-08-09
type: concept
tags: [knowledge-tracing, student-modeling, learning-analytics, domain-modeling, ai-education]
confidence: high
---

> **Knowledge graph** — a structured representation of concepts and their relationships used to model domain knowledge, student understanding, and learning dependencies in AI in education systems. Knowledge graphs enable AI systems to reason about what students know, what they need to learn next, and how concepts relate to each other.

Knowledge graphs provide the structural backbone for many intelligent education systems. Unlike flat lists of skills or concepts, knowledge graphs capture prerequisite relationships, similarity, and hierarchical organization — essential for [[adaptive-learning]], [[knowledge-tracing]], and [[student-modeling]].

### How knowledge graphs are used in AIED

- **[[knowledge-tracing]]** models use concept graphs to propagate student proficiency estimates across related skills, improving prediction accuracy when data is sparse
- **[[student-modeling]]** systems leverage knowledge graphs to represent what learners know in a semantically meaningful way, enabling fine-grained diagnosis
- **[[adaptive-learning]]** platforms use prerequisite graphs to sequence content and recommend personalized learning paths
- **[[cognitive-diagnosis]]** frameworks like [[xie-hillm-cd-2026|HiLLM-CD]] construct concept trees from educational text using LLMs, eliminating manual annotation

### LLM-driven knowledge graph construction

Recent research explores using [[llm|LLMs]] to automatically construct knowledge graphs from educational content. The [[xie-hillm-cd-2026|HiLLM-CD]] framework uses multi-agent LLM pipelines to generate exercise-concept links and hierarchical concept trees, reducing reliance on expert annotation. This connects to broader [[generative-ai]] applications in curriculum design and automated content organization.

### Related concepts

Knowledge graphs connect to [[domain-modeling]] (defining what to teach), [[curriculum-design]] (how to sequence it), and [[learning-analytics]] (extracting insights from student interaction data). They are foundational to [[intelligent-tutoring]] systems that need structured representations of educational domains.

## Connected Concepts



## Connected Articles

- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM-Enhanced Hierarchical Cognitive Diagnosis
- [[zerkouk-comprehensive-review-its-2025]] — Comprehensive ITS Review
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable Knowledge Tracing
- [[cold-start-knowledge-tracing-safeinsights]] — Cold-Start Problem in Knowledge Tracing