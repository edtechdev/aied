---
title: "CODE-GEN: A Human-in-the-Loop RAG-Based Agentic AI System for Multiple-Choice Question Generation"
created: 2026-08-04
updated: 2026-08-04
type: article
tags: [llm, agentic-ai, rag, question-generation, coding-education, human-in-the-loop, assessment, automated-assessment, programming-education, generative-ai]
sources: ['raw/papers/2604.03926.md']
confidence: high
---

> **A dual-agent RAG-based system for generating and validating coding comprehension MCQs**, evaluated by 6 SMEs across 7 pedagogical dimensions (N=288 questions, 2,016 rating pairs). AI excels at criteria-matching and computational verification (concept alignment 98.6%, code validity 95.5%), but human expertise remains essential for distractor quality (79.9%) and pedagogically rich feedback — providing an evidence-based division of labor for [[human-in-the-loop]] educational content generation.

**Authors:** Xiaojing Duan, Frederick Nwanganga, Chaoli Wang (University of Notre Dame)
**Venue:** AIED 2026 (short paper)
**ArXiv:** 2604.03926

### Overview

CODE-GEN (Context-aligned, Output-validated, Dual-agent, Expert-guided GENeration) is a [[human-in-the-loop]] [[agentic-ai]] system for generating contextually grounded multiple-choice coding comprehension questions. It integrates [[rag]] with a dual-agent architecture separating question generation from quality validation.

### Architecture

1. **RAG Pipeline:** Instructional materials (learning objectives, example questions, code) are parsed with a domain-specific chunking strategy that preserves semantic coherence, embedded via OpenAI text-embedding-3-small, and indexed in a [[FAISS]] vector store. On generation, nearest-neighbor retrieval injects relevant examples into the Generator's prompt.

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

CODE-GEN demonstrates that agentic AI with RAG grounding and tool augmentation can serve as scalable first-line quality control for [[automated-assessment]] item generation. The explicit evaluation of the Validator against human judgment — rather than assuming automated evaluation is reliable — provides an evidence-based framework for determining where AI can be safely delegated and where [[human-in-the-loop]] oversight must be maintained.

## Connected Concepts

- [[agentic-ai]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[generative-ai]]
- [[rag]]

- [[llm]]
## Connected Articles

- [[llm-feedback-programming-classroom]] — LLM-Generated Feedback in Introductory Programming: A Classroom Study
- [[programming-its]] — Programming Intelligent Tutoring Systems
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems

## Citation

RAG-Based, C.A.H., Question, A.A.S.F.M., Frederick, X.D., Wang1, A.C., multiple-choice, A.A.I.W.A.G.A.P., 2,016, J.A.Q.T.S.P.A.T.O., & generation, H.A.A.E.I.A.E.C. (2026). [*CODE-GEN: A Human-in-the-Loop RAG-Based Agentic AI System for Multiple-Choice Question Generation*](https://arxiv.org/abs/2604.03926)
