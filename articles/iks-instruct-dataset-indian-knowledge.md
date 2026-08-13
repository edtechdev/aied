---
title: "IKS-Instruct: A 24,000-Example Multilingual Dataset for Teaching Language Models Indian Knowledge Systems"
created: 2026-07-31
updated: 2026-07-31
type: article
tags: [llm, personalized-learning, educational-theory, language-learning, open-source]
sources: ['raw/papers/2607.23322.md']
confidence: medium
---

Presents a 24,795-example multilingual instruction dataset for teaching LLMs to deliver educational content grounded in Indian Knowledge Systems. Spans seven languages and bridges a gap in non-Western pedagogical content for instruction tuning. Demonstrates that domain-specific educational datasets improve LLM performance on culturally grounded knowledge tasks.

## Key Findings

- **IKS-Instruct** contains **24,795 instruction-response pairs** for teaching language models to deliver educational content grounded in Indian Knowledge Systems (IKS), spanning **seven languages** (English, Hindi, Sanskrit, Tamil, Telugu, Kannada, Malayalam).
- The dataset covers **41 pedagogical techniques** from Vedic oral and mathematical traditions and is aligned with the **Central Board of Secondary Education (CBSE) curriculum for classes 6 through 12**.
- Pairs derive from **six source types**: classical text corpora (Bhagavad Gita, Thirukkural, Sangam literature, Vedic texts), curriculum-aligned pedagogical templates, Vedic mathematical sutra demonstrations, bilingual instruction pairs, technique-grounded multi-turn dialogues, and cross-tradition comparative analyses.
- Quality is assessed through a **multi-judge evaluation framework** in which independent language models score responses on **12 dimensions**, including technique fidelity, pedagogical quality, factual accuracy, and IKS cultural depth.
- Under a uniform five-judge external panel (median aggregation over 1,201 stratified items), the strongest IKS-Instruct fine-tune of a compact **7B model reaches a median judge score of 6.39**, within 0.15 of a strong general-purpose reference model (Nemotron-Nano at 6.54) at a fraction of its deployment cost.
- The base model without IKS fine-tuning scores **near zero on IKS-specific dimensions**, and model quality does **not increase monotonically with data curation** — a result the authors report alongside data-quality gains.

## Dataset Design & Method

IKS-Instruct targets a gap in instruction tuning: existing datasets such as Alpaca, FLAN, and Dolly are dominated by English-language general-knowledge tasks and lack coverage of specialized pedagogical domains. The six source types are engineered so that each pair carries structured metadata — **source provenance, technique classification, language, subject, class level, and quality scores** — released in JSONL format. This design lets the dataset support both instruction-following and culturally grounded pedagogy rather than generic fact recall.

## Implications for AI in Education

The evaluation shows that a compact, domain-tuned model can approach the IKS-specific quality of a far larger general-purpose model at a fraction of deployment cost, which matters for resource-constrained educational deployments and for [[language-learning]] and [[culturally-relevant-pedagogy]] in multilingual classrooms. The non-monotonic relationship between curation and quality also warns against assuming "more data is always better," reinforcing the value of technique-fidelity-aware evaluation when adapting LLMs to non-Western knowledge traditions.

## Connected Concepts

- [[language-learning]]
- [[culturally-relevant-pedagogy]]
- [[adaptive-learning]]
- [[knowledge-tracing]]
- [[pedagogical-agent]]
- [[open-source]]
- [[affective-computing]]
- [[reinforcement-learning]]

## Connected Articles



- [[ai-interlocutor-l2-spoken-dialogue]] — What Changes When the Interlocutor Is an AI? Interactional Fluency and Linguistic Uptake in L2 Spoken Dialogue
- [[automated-presentation-coaching]] — A Survey of Automated Presentation Coaching: Systems, Methods, and Open Challenges
- [[vocabulary-difficulty-prediction]] — What Makes Words Hard? Sakura at BEA 2026 Shared Task on Vocabulary Difficulty Prediction
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[llm-children-reading-story-generation]] — Children's English Reading Story Generation via Supervised Fine-Tuning of Compact LLMs with Controllable Difficulty and Safety
- [[book-level-synthetic-textbook-organization]] — Beyond Rephrasing: Book-Level Organization Improves Synthetic Textbook Data for Mid-Training

## Citation

Shwetha Singaravelu, Gayathri Muruganantham, Lakshmi Rajendran, Santhosh Sivasubramani (2026). [IKS-Instruct: A 24,000-Example Multilingual Dataset for Teaching Language Models Indian Knowledge Systems](https://arxiv.org/abs/2607.23322). arXiv:2607.23322. cs.CL, cs.CY.
