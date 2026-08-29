---
title: "CODE-GEN: A Human-in-the-Loop RAG-Based Agentic AI System for Multiple-Choice Question Generation"
created: "2026-08-04T04:33:04-04:00"
updated: "2026-08-28T15:00:00-04:00"
type: article
tags: [llm, agentic-ai, rag, automated-question-generation, cs-education, human-in-the-loop-ai, assessment, automated-assessment, generative-ai]
sources: ['raw/papers/2604.03926.md']
confidence: high
---

> **Synthesis:** CODE-GEN is a **dual-agent [[rag]]-based [[agentic-ai]] system** for generating and validating coding-comprehension multiple-choice questions, evaluated by 6 SMEs across 7 [[pedagogy|pedagogical]] dimensions (N=288 questions, 2,016 rating pairs). AI excels at criteria-matching and computational verification ([[ai-ed-evaluation|concept alignment 98.6%]], code validity 95.5%), but human expertise remains essential for distractor quality (79.9%) and pedagogically rich feedback — providing an evidence-based division of labor for [[human-in-the-loop-ai]] educational content generation. Its distinctive move is treating the automated Validator's judgment as an *empirical object of study* rather than an assumed capability.

**Venue:** [[ai-education|AIED]] 2026 (short paper)
**ArXiv:** 2604.03926

### Overview

CODE-GEN (Context-aligned, Output-validated, Dual-agent, Expert-guided GENeration) is a [[human-in-the-loop-ai]] [[agentic-ai]] system for generating contextually grounded multiple-choice coding comprehension questions. It integrates [[rag]] with a dual-agent architecture separating question generation from quality validation.

### Key Findings

1. **AI reliably automates technically grounded dimensions.** Human-validated success rates are high where correctness maps to computational verification and explicit criteria: concept alignment 98.6%, question [[stem-education|stem]] clarity 97.9%, code validity 95.5%, correct answer validity 92.0%, and correct-answer feedback 92.4%.
2. **Human expertise remains essential for pedagogical judgment.** Distractor quality (79.9% success, 15.6% failure) and distractor [[ai-feedback-quality|feedback quality]] (86.1%) are the weakest dimensions, because assessing whether distractors target common [[misconceptions]] and whether feedback elaborates underlying concepts requires instructional judgment, not just computational correctness.
3. **Tool augmentation works.** An Arithmetic Expression Evaluator and a Sandboxed Python Runner substantially enhance both generation quality and validation reliability for computationally grounded dimensions.
4. **Automated evaluators must be validated, not assumed.** [[llm]]-based critique agents exhibit hallucination, bias, and inconsistent judgment; CODE-GEN explicitly compares the Validator against human SMEs, showing that without such validation, errors at the evaluation stage risk being amplified rather than corrected.
5. **Systematic failure patterns.** False positives (approving syntactically valid but instructionally shallow distractors and surface-mechanics feedback) and false negatives (misinterpreting answer schemas, confusing answer value with option position) reveal where the Validator's judgment breaks down.
6. **SME–Validator agreement is consistent.** Agreement rates across all dimensions range 82.5%–98.4%, with five of seven dimensions showing standard deviations ≤3.8%, indicating SMEs applied comparable standards despite reviewing different question sets.

### Architecture

1. **RAG Pipeline:** Instructional materials (learning objectives, example questions, code) are parsed with a [[discipline-specific-aied|domain-specific]] chunking strategy that preserves semantic coherence (line-by-line parsing with docstring recognition, explicitly preserving objectives, sample questions with answer options, and Python code), embedded via OpenAI text-embedding-3-small, and indexed in a FAISS vector store with L2 distance. On generation, nearest-neighbor retrieval (IndexFlatL2) injects relevant examples into the Generator's prompt.
2. **Generator Agent (GPT-4.1):** Produces MCQs with stem, executable code, four answer options, and explanatory feedback. Augmented with an Arithmetic Expression Evaluator tool for deterministic computation, mitigating known LLM arithmetic weaknesses.
3. **Validator Agent (GPT-5-mini):** Independently assesses each question across **seven pedagogical dimensions**: question stem clarity, code validity, concept alignment, correct answer validity, distractor quality, correct answer feedback quality, and distractor feedback quality. Uses an Arithmetic Expression Evaluator and a Sandboxed Python Runner for code execution verification. Model selection for both agents was driven by comparative experiments (Claude Sonnet 4.5, Gemini 2.5 Pro, GPT-5-mini, GPT-4.1) on novelty, correctness, and latency.

### Evaluation

- **6 SMEs** (three men, three women) evaluated 288 AI-generated questions
- **2,016 human-AI rating pairs** (SME agreement/disagreement with Validator)
- **131 [[qualitative-research|qualitative]] feedback instances**

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

### Significance for automated-assessment and automated-question-generation

CODE-GEN demonstrates that agentic AI with RAG grounding and tool augmentation can serve as scalable first-line quality control for [[automated-assessment]] item generation. The explicit evaluation of the Validator against human judgment — rather than assuming automated evaluation is reliable — provides an evidence-based framework for determining where AI can be safely delegated and where [[human-in-the-loop-ai]] oversight must be maintained.

### Implications for AI in Education

CODE-GEN offers a concrete, evidence-based map of the human-AI division of labor in educational content generation. For [[automated-question-generation]] in [[cs-education|programming education]], RAG grounding plus tool augmentation can scale the creation of context-aligned assessment banks, with AI reliably handling alignment to learning objectives and computational/code verification. But its results carry a caution for [[assessment-validity]] and [[trust|trust in AI]] systems: automated evaluators are not trustworthy ground truth by default, and pedagogically meaningful distractors and concept-elaborating feedback — central to measuring deep understanding and to targeting common [[misconceptions]] — remain human responsibilities. The design principle of treating a critique agent's judgment as an empirical object to be validated against experts is transferable beyond item generation, informing how [[human-in-the-loop-ai]] quality assurance should be structured across [[automated-assessment]] workflows. The system's weaker dimensions also flag where future work should focus: making automated generation and evaluation more pedagogically sophisticated rather than merely more technically fluent.

## Connected Concepts

- [[human-in-the-loop-ai]]
- [[agentic-ai]]
- [[rag]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[cs-education]]
- [[generative-ai]]
- [[llm]]
- [[misconceptions]]
## Connected Articles

- [[deeptutor]] — DeepTutor: Towards Agentic Personalized Tutoring
- [[mooc-to-maic]] — From MOOC to MAIC: Reshaping Online Teaching and Learning through LLM-driven Agents
- [[veriforge-narrative-drafting-scaffolding-2026]] — VeriForge: Mitigating Latent Knowledge Gaps in Narrative Drafting via Mixed-Initiative Scaffolding
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[llm-difficulty-calibration-programming-exams-2026]] — From Evaluated Models to Evaluation Aids: A Multi-Evidence Study of LLM-Based Difficulty Calibration for Programming Examinations
- [[trust-reliance-ai-education-2026]] — Trust and Reliance on AI in Education: AI Literacy and Need for Cognition as Moderators

## Citation

Duan, X., Nwanganga, F., & Wang, C. (2026). [*CODE-GEN: A Human-in-the-Loop RAG-Based Agentic AI System for Multiple-Choice Question Generation*](https://arxiv.org/abs/2604.03926).
