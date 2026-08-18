---
title: "CODE-GEN: A Human-in-the-Loop RAG-Based Agentic AI System for Multiple-Choice Question Generation"
created: "2026-08-04T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [llm, agentic-ai, rag, question-generation, coding-education, human-in-the-loop, assessment, automated-assessment, programming-education, generative-ai]
sources: ['raw/papers/2604.03926.md']
confidence: high
---

> **A dual-agent RAG-based system for generating and validating coding comprehension MCQs**, evaluated by 6 SMEs across 7 pedagogical dimensions (N=288 questions, 2,016 rating pairs). AI excels at criteria-matching and computational verification (concept alignment 98.6%, code validity 95.5%), but human expertise remains essential for distractor quality (79.9%) and pedagogically rich feedback — providing an evidence-based division of labor for [[human-in-the-loop-ai]] educational content generation.
**Venue:** AIED 2026 (short paper)
**ArXiv:** 2604.03926

### Overview

CODE-GEN (Context-aligned, Output-validated, Dual-agent, Expert-guided GENeration) is a [[human-in-the-loop-ai]] [[agentic-ai]] system for generating contextually grounded multiple-choice coding comprehension questions. It integrates [[rag]] with a dual-agent architecture separating question generation from quality validation.

### Architecture

1. **RAG Pipeline:** Instructional materials (learning objectives, example questions, code) are parsed with a domain-specific chunking strategy that preserves semantic coherence, embedded via OpenAI text-embedding-3-small, and indexed in a FAISS vector store. On generation, nearest-neighbor retrieval injects relevant examples into the Generator's prompt.

2. **Generator Agent (GPT-4.1):** Produces MCQs with stem, executable code, four answer options, and explanatory feedback. Augmented with an Arithmetic Expression Evaluator tool for deterministic computation.

3. **Validator Agent (GPT-5-mini):** Independently assesses each question across **seven pedagogical dimensions**: question stem clarity, code validity, concept alignment, correct answer validity, distractor quality, correct answer feedback quality, and distractor feedback quality. Uses an Arithmetic Expression Evaluator and a Sandboxed Python Runner for code execution verification.

### Evaluation

- **6 SMEs** evaluated 288 AI-generated questions
- **2,016 human-AI rating pairs** (SME agreement/disagreement with Validator)
- **131 qualitative feedback instances**

### Key Results

| Dimension | Success Rate | Failure Rate |
|-----------|:-----------:|:------------:|
| Concept Alignment | **98.6%** | 0.3% |
| Question Stem Clarity | **97.9%** | 2.1% |
| Code Validity | **95.5%** | 3.1% |
| Correct Answer Feedback | 92.4% | 2.1% |
| Correct Answer Validity | 92.0% | 1.4% |
| Distractor Feedback Quality | 86.1% | 9.4% |
| Distractor Quality | **79.9%** | 15.6% |

### Division of Labor Findings

**AI strengths** (reliable automation):
- Computational verification and explicit criteria matching
- Concept alignment via RAG grounding
- Code syntax and output verification via tool augmentation

**Human-essential dimensions** (require oversight):
- Designing pedagogically meaningful distractors that target common student misconceptions
- Providing feedback that elaborates on underlying concepts, not just surface mechanics
- Interpreting structured answer representations (Validator sometimes confused option position with answer value)

### Failure Patterns

- **False positives:** Validator approved distractors that were syntactically valid but instructionally shallow; approved feedback that described surface mechanics without deeper elaboration
- **False negatives:** Validator misinterpreted answer schemas (confusing answer value with option position); internal inconsistency where textual analysis affirmed correctness but binary classification contradicted it

### Significance for [[automated-assessment]] and [[automated-question-generation]]

CODE-GEN demonstrates that agentic AI with RAG grounding and tool augmentation can serve as scalable first-line quality control for [[automated-assessment]] item generation. The explicit evaluation of the Validator against human judgment — rather than assuming automated evaluation is reliable — provides an evidence-based framework for determining where AI can be safely delegated and where [[human-in-the-loop-ai]] oversight must be maintained.

## Connected Concepts

- [[human-in-the-loop-ai]]
- [[agentic-ai]]
- [[rag]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[cs-education]]
- [[generative-ai]]
- [[llm]]
- [[student-misconceptions-ai]]
## Connected Articles

- [[deeptutor]] — DeepTutor: Towards Agentic Personalized Tutoring
- [[mooc-to-maic]] — From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents
- [[veriforge-narrative-drafting-scaffolding-2026]] — VeriForge: Mitigating Latent Knowledge Gaps in Narrative Drafting via Mixed-Initiative Scaffolding
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[llm-difficulty-calibration-programming-exams-2026]] — From Evaluated Models to Evaluation Aids: A Multi-Evidence Study of LLM-Based Difficulty Calibration for Programming Examinations
- [[trust-reliance-ai-education-2026]] — Trust and Reliance on AI in Education: AI Literacy and Need for Cognition as Moderators

## Citation

RAG-Based, C.A.H., Question, A.A.S.F.M., Frederick, X.D., Wang1, A.C., multiple-choice, A.A.I.W.A.G.A.P., 2,016, J.A.Q.T.S.P.A.T.O., & generation, H.A.A.E.I.A.E.C. (2026). [*CODE-GEN: A Human-in-the-Loop RAG-Based Agentic AI System for Multiple-Choice Question Generation*](https://arxiv.org/abs/2604.03926)
