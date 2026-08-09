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

- [[automated-grading]]
- [[pedagogical-llm-training]]

## Connected Articles

- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[ai-learning-transfer]] — AI Learning Transfer
- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness
- [[collaborative-ai-tutoring]] — Collaborative AI Tutoring
- [[educational-vlm-evaluation]] — Educational VLM Evaluation
- [[multimodal-ai-tutoring]] — Multimodal AI Tutoring in STEM
- [[programming-its]] — Programming Intelligent Tutoring Systems
- [[teachbench-llm-teaching-evaluation]] — TeachBench - Evaluating LLM Teaching Ability
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adult-learning-guidelines-dis2026]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community

## Citation

Yu, J., Lu, P., Si, W., ... & Liu, P. (2026). *AcademiClaw: When Students Set Challenges for AI Agents*. arXiv:2605.02661.
