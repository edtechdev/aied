---
title: Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education
created: 2026-05-16
updated: 2026-05-16
type: article
tags: [intelligent-tutoring, llm, generative-ai, scaffolding, formative-assessment, higher-ed, personalized-learning, socratic-ai-dialogue, rag, socratic-ai]
sources: ['raw/papers/2605.12988.md']
confidence: high
---

> **Jain, Bhatt, Pitts, Pandya, Brusilovsky, Norouzi, Hellas, Leinonen & Akram (2026)** — University of Pittsburgh, Aalto University, UC San Diego. Accepted to BEA 2026 (co-located with ACL 2026).
## Synthesis

KITE (Knowledge-Informed Tutoring Engine) introduces a [[intelligent-tutoring]] architecture that grounds its responses in course materials through a multimodal [[scaffolding|RAG pipeline]]. Unlike generic LLM tutors that may drift from curriculum content, KITE retrieves relevant material — lecture slides, problem sets, code examples — before generating Socratic hints, guiding questions, and progressive scaffolds tailored to the student's current error.

The system's intent-aware Socratic response strategy builds on [[socratic-ai-dialogue]] principles but operationalizes them through retrieval: rather than relying on the model's parametric knowledge of how to tutor, KITE anchors every response in authoritative course content. This design addresses a key gap identified in [[ai-tutor-effectiveness-review]] — that pedagogical quality alone is insufficient without content fidelity.

KITE was evaluated through three complementary lenses. RAGAs-based metrics confirmed response grounding and quality. Expert pedagogical review assessed the educational appropriateness of its Socratic scaffolding. Most innovatively, a simulated student pipeline — where a weaker LLM acts as a student across two-turn dialogues — measured whether KITE's [[formative-assessment|feedback]] actually improved follow-up accuracy on procedural and algorithm tracing questions. Results were positive: simulated students produced more accurate responses after receiving KITE feedback, particularly on tracing tasks where step-by-step reasoning is critical.

This work contributes to the growing literature on [[llm-student-modeling-memory|LLM-based student modeling]] by demonstrating that retrieval-augmented tutoring can maintain both pedagogical and content fidelity. It also connects to [[programming-its]] research by targeting algorithmic reasoning specifically, and to [[personalized-learning]] through its adaptive response strategies. The simulated student evaluation approach offers a replicable, low-cost methodology that could accelerate tutor development cycles — a theme also explored in [[eduagentbench-agent-teaching-benchmark]] for broader tutor evaluation.

## Connected Concepts

- [[formative-assessment]]
- [[personalized-learning]]
- [[scaffolding]]
- [[socratic-ai-dialogue]]

## Connected Articles

- [[ai-learning-transfer]] — AI Learning Transfer
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[clara-collaboration-literacy-dashboard]] — CLARA: An AI-Augmented Analytics Dashboard for Collaboration Literacy
- [[codify-socratic-tutoring-programming]] — Codify: An Intelligent Socratic Tutoring System for Programming Education
- [[didactical-teacher-assistant-dimensional-modeling]] — A didactical-driven teacher assistant for a dimensional modeling course
- [[eduagentbench-agent-teaching-benchmark]] — Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows
- [[genai-patient-education-transplant-handbooks]] — Auditing Institutional Heterogeneity for Generative AI in Patient Education: A Large-Scale Study of 102 US Transplant...
- [[llm-student-modeling-memory]] — LLM Student Modeling and Long-Term Memory Architecture
- [[multimodal-affective-its-presentation]] — An Interpretable Closed-Loop Intelligent Tutoring System for Multimodal Affective Feedback in Asynchronous Presentati...
- [[programming-its]] — Programming Intelligent Tutoring Systems
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education

## Citation

Jain, M., Bhatt, T., Pitts, G., Pandya, A., Brusilovsky, P., Norouzi, N., Hellas, A., Leinonen, J., & Akram, B. (2026). [Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education](https://arxiv.org/abs/2605.12988). arXiv:2605.12988. BEA 2026.
