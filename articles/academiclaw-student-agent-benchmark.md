---
title: "AcademiClaw: When Students Set Challenges for AI Agents"
created: 2026-05-11
updated: 2026-05-11
type: article
tags: [benchmark, higher-ed, llm, generative-ai, student-experience, pedagogical-llm-training, automated-grading, ai-tutoring, open-source]
sources: ['raw/papers/2605.02661.md']
confidence: high
---

> **Yu, Lu, Si et al. (77 authors, 2026)** — Shanghai Jiao Tong University, SII, GAIR. Open-source benchmark.

# AcademiClaw: Student-Sourced AI Agent Benchmark

**Yu, Lu, Si et al. (77 authors, 2026)** — Shanghai Jiao Tong University, SII, GAIR. Open-source benchmark.

## Core Contribution

**AcademiClaw** is a bilingual benchmark of **80 complex, long-horizon tasks** sourced from university students' real academic workflows — homework, research projects, competitions, and personal projects — that they found current AI agents unable to solve. It extends the OpenClaw ecosystem beyond assistant-level tasks into academic-level agent evaluation.

## Benchmark Design

### Task Sourcing & Curation
- **230 student-submitted candidates** → rigorous expert review → 80 final tasks
- Tasks are *authentic*: real problems students couldn't solve with current AI agents
- **25+ professional domains**: olympiad-level math, linguistics, GPU-intensive RL, full-stack system debugging
- **16 tasks require CUDA GPU execution** — testing hardware-accelerated AI capabilities

### Execution & Scoring
- Each task runs in an **isolated Docker sandbox**
- Scored by **multi-dimensional rubrics** using 6 complementary techniques
- **Independent 5-category safety audit** provides behavioral analysis beyond task completion
- Bilingual (Chinese/English)

### Key Results
- **6 frontier models** tested
- **Best pass rate: 55%** — no model exceeds this
- Sharp capability boundaries across task domains
- Divergent behavioral strategies between models
- **Disconnect between token consumption and output quality** — more tokens ≠ better results

## Why This Matters for AI in Education

AcademiClaw flips the evaluation paradigm: instead of researchers designing artificial benchmarks, **students define what AI agents should be able to do**. This aligns evaluation with real educational needs:

1. **Authentic task validity**: Tasks reflect genuine academic workflows, not synthetic proxies
2. **Capability gap diagnosis**: The 55% ceiling reveals where AI agents still fail students
3. **Token-output disconnect**: Challenges the assumption that more compute solves academic problems — relevant to AI tutoring cost/benefit analysis
4. **Safety in academic contexts**: The 5-category safety audit surfaces risks specific to educational AI deployment

## Limitations

- Contributor pool concentrated at a single institution (SJTU) — limits cultural and disciplinary diversity
- GPU-intensive tasks (16/80) require specialized hardware, limiting reproducibility
- Bilingual but primarily Chinese university context
- Safety audit releases aggregate statistics only, not full violation traces

## Open Questions

- How would the 55% pass rate change with iterative refinement or multi-agent collaboration?
- Would results differ at non-Chinese universities with different academic workflows?
- Can the benchmark be adapted for K-12 or professional training contexts?
- What does the token-output disconnect imply for AI tutoring systems that bill by token usage?

## Connected Concepts

- [[automated-question-generation]]
- [[pedagogical-llm-training]]
- [[socratic-method]]
- [[math-education]]
- [[prompt-engineering]]
- [[human-in-the-loop-ai]]
- [[affective-tutoring]]
- [[automated-essay-scoring]]

## Connected Articles



- [[codify-socratic-tutoring-programming]] — Codify: An Intelligent Socratic Tutoring System for Programming Education
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness
- [[lets-chat-chatbot-outreach-2026]] — Let''s Chat: Leveraging Chatbot Outreach for Improved Course Performance
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[scheu-mobile-chatbot-journaling-motivation-2026]] — Designing a mobile chatbot-based learning journaling system for intrinsic motivation and engagement
