---
title: Knowledge Graph
created: "2026-08-09T16:55:17-04:00"
updated: "2026-08-31T06:22:29-04:00"
type: concept
tags: [knowledge-tracing, student-modeling, learning-analytics, generative-ai, ai-education, intelligent-tutoring, curriculum-design, llm]
category: [curriculum design]
confidence: high
---

> **Knowledge graph** — a structured representation of concepts and their relationships used to model domain knowledge, student understanding, and learning dependencies in AI in education systems. Knowledge graphs enable AI systems to reason about what students know, what they need to learn next, and how concepts relate to each other.

## Questions to Consider

- A knowledge graph captures not just concepts but their relationships — prerequisites, similarity, hierarchy. Why might knowing how concepts relate be more useful to an adaptive system than a flat list of skills?
- How are prerequisite relationships in a domain like yours? Can you think of a topic where students routinely struggle because they're missing a foundational concept the graph would reveal?
- The page describes using knowledge graphs to detect knowledge gaps — where learners are missing foundational concepts. How might surfacing that gap change what an AI tutor decides to teach next?
- Knowledge graphs can be built manually or automatically by LLMs from educational text. What are the risks of letting an AI construct the concept structure that a tutor will then reason over?
- If knowledge graphs provide the domain structure that AI agents reason over, what happens to trust and accuracy when the graph itself contains an error or a biased relationship?
- A knowledge graph is described as the structural backbone enabling fine-grained diagnosis and personalized paths. In your own teaching or design, what would you need a knowledge graph of your subject to capture — and what would it leave out?

Knowledge graphs provide the structural backbone for many intelligent education systems. Unlike flat lists of skills or concepts, knowledge graphs capture prerequisite relationships, similarity, and hierarchical organization — essential for [[adaptive-learning]], [[knowledge-tracing]], and [[student-modeling]].

## How knowledge graphs are used in AIED

Knowledge graphs are a recurring structural mechanism across the knowledge base's AIED research, serving several distinct roles:

- **[[knowledge-tracing]] models** use concept graphs to propagate student proficiency estimates across related skills, improving prediction accuracy when data is sparse.
- **[[student-modeling]] systems** leverage knowledge graphs to represent what learners know in a semantically meaningful way, enabling fine-grained diagnosis.
- **[[adaptive-learning]] platforms** use prerequisite graphs to sequence content and recommend [[personalized-learning|personalized learning]] paths.
- **[[cognitive-diagnosis]] frameworks** like [[xie-hillm-cd-2026|HiLLM-CD]] construct concept trees from educational text using LLMs, eliminating manual annotation.
- **Knowledge-graph-augmented tutoring:** [[quantum-education-its|ITAS]] uses a knowledge graph of quantum concepts (with explicit prerequisite relationships) to drive a multi-agent tutoring system, traversing the graph to select next topics for counterintuitive material.
- **Curriculum and course modeling:** [[coursegraph-cs-course-comparison-2026|CourseGraph]] compares CS course structures across institutions using graph representations; [[learnity-graphs-lifelong-learning-framework-2026|Learnity graphs]] model [[lifelong-learning|lifelong learning]] pathways.
- **Prerequisite-relation learning:** [[proprl-prerequisite-relation-learning|ProPrL]] learns prerequisite relations among concepts, formalizing the edges that knowledge graphs encode.
- **Knowledge-gap detection:** [[knowledge-gap-detection-ai-tas|Knowledge gap detection]] uses graph-based reasoning in AI teaching assistants to identify where learners are missing foundational concepts.
- **Multimodal and explainable reasoning:** [[multimodal-knowledge-graph-educational-reasoning|multimodal knowledge graphs]] extend graph structure across content modalities; [[fair-explainable-edu-recommendations|fair and explainable recommendations]] combine knowledge-graph embeddings with sequential modeling (a hybrid HKG-GRU framework).
- **Ontology-based knowledge bases:** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova (2026)]] proposes a layered, hybrid knowledge-base architecture grounded in description logic that replaces the classic ITS single-ontology models with **systems of mapped ontologies** — adding procedural (rule-based), probabilistic/fuzzy, and ML-extracted implicit knowledge — plus a metadata framework for describing, discovering, and reusing educational ontologies.
- **[[scaffolding|Scaffolding]] and writing:** [[veriforge-narrative-drafting-scaffolding-2026|Veriforge]] and [[visual-query-tracer-declarative-logic-learning|visual query tracing]] apply graph-based structure to narrative drafting and declarative-logic learning.

## LLM-driven knowledge graph construction

Recent research explores using [[llm|LLMs]] to automatically construct knowledge graphs from educational content. The [[xie-hillm-cd-2026|HiLLM-CD]] framework uses multi-agent LLM pipelines to generate exercise-concept links and hierarchical concept trees, reducing reliance on expert annotation. This connects to broader [[generative-ai]] applications in curriculum design and automated content organization, and to [[rag]] (retrieval-augmented generation), where graph-structured knowledge can improve retrieval quality over flat similarity search.

## Relationship to other concepts

Knowledge graphs connect to [[learning-design]] (defining what to teach), [[curriculum-design]] (how to sequence it), and [[learning-analytics]] (extracting insights from student interaction data). They are foundational to [[intelligent-tutoring]] systems that need structured representations of educational domains. As AI agents become more common in education, knowledge graphs provide the domain structure that [[agentic-ai|agentic systems]] reason over — a pattern seen in [[quantum-education-its|ITAS]] and knowledge-gap-detection teaching assistants.

## Connected Concepts

- [[adaptive-learning]]
- [[knowledge-tracing]]
- [[intelligent-tutoring]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[learning-analytics]]
- [[curriculum-design]]
- [[learning-design]]
- [[generative-ai]]
- [[llm]]
- [[rag]]
- [[agentic-ai]]
- [[ai-technologies]] — Umbrella: AI technologies and techniques (models, LLM training, robotics, RAG, agentic)

## Connected Articles
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Ontology-based layered hybrid knowledge model for personalized e-learning

- [[learnity-graphs-lifelong-learning-framework-2026]] — Learnity graphs for lifelong learning
- [[veriforge-narrative-drafting-scaffolding-2026]] — Veriforge: narrative-drafting scaffolds
- [[quantum-education-its]] — Quantum education intelligent tutoring (ITAS)
- [[multimodal-knowledge-graph-educational-reasoning]] — Multimodal knowledge graphs for educational reasoning
- [[coursegraph-cs-course-comparison-2026]] — CourseGraph: CS course comparison
- [[proprl-prerequisite-relation-learning]] — ProPrL: prerequisite-relation learning
- [[knowledge-gap-detection-ai-tas]] — Knowledge-gap detection in AI teaching assistants
- [[visual-query-tracer-declarative-logic-learning]] — Visual query tracer for declarative logic learning
- [[learnopt-exam-cognitive-structure]] — LearnOpt: exam cognitive structure
- [[fair-explainable-edu-recommendations]] — Fair and explainable educational recommendations
- [[concept-catalyst-engineering-scaffolds]] — Concept Catalyst engineering scaffolds
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM-driven cognitive diagnosis
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)


