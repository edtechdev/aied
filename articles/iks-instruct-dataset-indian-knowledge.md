---
title: "IKS-Instruct: A 24,000-Example Multilingual Dataset for Teaching Language Models Indian Knowledge Systems"
created: "2026-07-31T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
pedagogy: [learning-theories]
technology: [llm, personalized-learning, open-source]
methods: [benchmark]
audience: [software developers]
research_method: [system development]
discipline: [language learning]
sources: ['raw/papers/2607.23322.md']
confidence: medium
level: [secondary, k 12]
---

> **Synthesis:** Presents a 24,795-example [[multilingual-learning|multilingual]] instruction dataset for [[teacher-role|teaching]] LLMs to deliver educational content grounded in Indian Knowledge Systems. Spans seven languages and bridges a gap in non-Western [[pedagogy|pedagogical]] content for instruction tuning. Demonstrates that [[discipline-specific-aied|domain-specific]] educational datasets improve [[llm]] performance on culturally grounded knowledge tasks.

## Key Findings

- **IKS-Instruct** contains **24,795 instruction-response pairs** for teaching language models to deliver educational content grounded in Indian Knowledge Systems (IKS), spanning **seven languages** (English, Hindi, Sanskrit, Tamil, Telugu, Kannada, Malayalam).
- The dataset covers **41 pedagogical techniques** from Vedic oral and mathematical traditions and is aligned with the **Central Board of Secondary Education (CBSE) [[curriculum-design|curriculum]] for classes 6 through 12**.
- Pairs derive from **six source types**: classical text corpora (Bhagavad Gita, Thirukkural, Sangam literature, Vedic texts), curriculum-aligned pedagogical templates, Vedic mathematical sutra demonstrations, bilingual instruction pairs, technique-grounded multi-turn dialogues, and cross-tradition comparative analyses.
- Quality is assessed through a **multi-judge evaluation framework** in which independent language models score responses on **12 dimensions**, including technique fidelity, pedagogical quality, factual accuracy, and IKS cultural depth.
- Under a uniform five-judge external panel (median aggregation over 1,201 stratified items), the strongest IKS-Instruct fine-tune of a compact **7B model reaches a median judge score of 6.39**, within 0.15 of a strong general-purpose reference model (Nemotron-Nano at 6.54) at a fraction of its deployment cost.
- The base model without IKS fine-tuning scores **near zero on IKS-specific dimensions**, and model quality does **not increase monotonically with data curation** — a result the authors report alongside data-quality gains.

## Dataset Design & Method

IKS-Instruct targets a gap in instruction tuning: existing datasets such as Alpaca, FLAN, and Dolly are dominated by English-language general-knowledge tasks and lack coverage of specialized pedagogical domains. The six source types are engineered so that each pair carries structured metadata — **source provenance, technique classification, language, subject, class level, and quality scores** — released in JSONL format. This design lets the dataset support both instruction-following and culturally grounded pedagogy rather than generic fact recall.

## What this means for practice

- **Software developers.** Fine-tune compact models on domain instruction data instead of renting general-purpose scale: the strongest 7B IKS fine-tune scored 6.39 under the five-judge panel, within 0.15 of Nemotron-Nano's 6.54 at a fraction of the deployment cost.
- **Software developers.** Anchor every pair in identifiable source material — classical texts, curriculum templates, manually verified sutra demonstrations — rather than free generation, since 67% of auto-generated Vedic mathematics content was wrong before filtering.
- **Designers.** Budget for bilingual pairs when targeting [[language-learning]] and [[culturally-relevant-pedagogy]] in under-resourced languages: Marathi and Bengali were absent from training, yet fine-tuned models demonstrated Vedic sutras there at a technique-fidelity score of 5.8 against 0.3 for the base model.
- **Researchers.** Score with a fixed external judge panel and read absolute values as comparative within that panel only, because version gaps such as 6.39 versus 6.54 are small relative to judge noise.

## Limitations

- The language distribution is imbalanced — English at 36.1% against Malayalam at 6.3% — and fine-tuned models show weaker IKS capability in Telugu and Malayalam than in English and Hindi.
- Quality rests on LLM judges, which favor longer responses, formal academic language, and their own generation patterns; the panel includes Llama-family judges while the fine-tunes are LoRA adapters on the Llama-based Airavata backbone, so residual self-preference cannot be excluded and human expert calibration is left to future work.
- 67% of auto-generated Vedic mathematics pairs were erroneous before filtering, subtle errors may persist in retained pairs, and the manually verified v2.1 reduced coverage of mathematical techniques.
- Coverage stops at the CBSE classes 6-12 alignment — no primary (classes 1-5) or higher education — and oral guru-shishya traditions and manuscript-only texts are structurally absent because the dataset is built from digitally available sources.

## Connected Concepts
- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[equity-in-ai-education]]

- [[language-learning]]
- [[culturally-relevant-pedagogy]]
- [[pedagogical-agent]]
- [[open-source]]

## Connected Articles

- [[ai-interlocutor-l2-spoken-dialogue]] — What Changes When the Interlocutor Is an AI? Interactional Fluency and Linguistic Uptake in L2 Spoken Dialogue
- [[automated-presentation-coaching]] — A Survey of Automated Presentation Coaching: Systems, Methods, and Open Challenges
- [[vocabulary-difficulty-prediction]] — What Makes Words Hard? Sakura at BEA 2026 Shared Task on Vocabulary Difficulty Prediction
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[llm-children-reading-story-generation]] — Children's English Reading Story Generation via Supervised Fine-Tuning of Compact LLMs with Controllable Difficulty and Safety
- [[book-level-synthetic-textbook-organization]] — Beyond Rephrasing: Book-Level Organization Improves Synthetic Textbook Data for Mid-Training

## Citation

Shwetha Singaravelu, Gayathri Muruganantham, Lakshmi Rajendran, Santhosh Sivasubramani (2026). [IKS-Instruct: A 24,000-Example Multilingual Dataset for Teaching Language Models Indian Knowledge Systems](https://arxiv.org/abs/2607.23322).
