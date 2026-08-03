---
title: Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education
created: 2026-05-16
updated: 2026-05-16
type: concept
tags: [intelligent-tutoring, llm, generative-ai, scaffolding, formative-assessment, higher-ed]
sources: [raw/papers/2605.12988.md]
confidence: high
---

# Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education

**Jain, Bhatt, Pitts, Pandya, Brusilovsky, Norouzi, Hellas, Leinonen & Akram (2026)** — University of Pittsburgh, Aalto University, UC San Diego. Accepted to BEA 2026 (co-located with ACL 2026).

📄 [Full text (arXiv)](https://arxiv.org/abs/2605.12988)

## Synthesis

KITE (Knowledge-Informed Tutoring Engine) introduces a [[intelligent-tutoring]] architecture that grounds its responses in course materials through a multimodal [[scaffolding|RAG pipeline]]. Unlike generic LLM tutors that may drift from curriculum content, KITE retrieves relevant material — lecture slides, problem sets, code examples — before generating Socratic hints, guiding questions, and progressive scaffolds tailored to the student's current error.

The system's intent-aware Socratic response strategy builds on [[socratic-ai-dialogue]] principles but operationalizes them through retrieval: rather than relying on the model's parametric knowledge of how to tutor, KITE anchors every response in authoritative course content. This design addresses a key gap identified in [[ai-tutor-effectiveness-review]] — that pedagogical quality alone is insufficient without content fidelity.

KITE was evaluated through three complementary lenses. RAGAs-based metrics confirmed response grounding and quality. Expert pedagogical review assessed the educational appropriateness of its Socratic scaffolding. Most innovatively, a simulated student pipeline — where a weaker LLM acts as a student across two-turn dialogues — measured whether KITE's [[formative-assessment|feedback]] actually improved follow-up accuracy on procedural and algorithm tracing questions. Results were positive: simulated students produced more accurate responses after receiving KITE feedback, particularly on tracing tasks where step-by-step reasoning is critical.

This work contributes to the growing literature on [[llm-student-modeling-memory|LLM-based student modeling]] by demonstrating that retrieval-augmented tutoring can maintain both pedagogical and content fidelity. It also connects to [[programming-its]] research by targeting algorithmic reasoning specifically, and to [[personalized-learning]] through its adaptive response strategies. The simulated student evaluation approach offers a replicable, low-cost methodology that could accelerate tutor development cycles — a theme also explored in [[eduagentbench-agent-teaching-benchmark]] for broader tutor evaluation.

## Related Pages
- [[clara-collaboration-literacy-dashboard]] — CLARA: An AI-Augmented Analytics Dashboard for Collaboration Literacy
- [[multimodal-affective-its-presentation]] — An Interpretable Closed-Loop Intelligent Tutoring System for Multimodal Affective Feedback in Asynchronous Presentation Training
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance

- [[codify-socratic-tutoring-programming]] — Broader-scope RAG tutoring platform with integrated gamification and assessment
- [[intelligent-tutoring]] — Core paradigm for AI tutoring systems
- [[scaffolding]] — Progressive support strategies central to KITE's design
- [[socratic-ai-dialogue]] — Dialogic tutoring approach that KITE extends with retrieval
- [[programming-its]] — Related domain of intelligent tutoring for programming
- [[formative-assessment]] — Feedback methodology KITE operationalizes
- [[llm-student-modeling-memory]] — Student modeling techniques relevant to adaptive tutoring
- [[eduagentbench-agent-teaching-benchmark]] — Complementary holistic evaluation framework
- [[ai-learning-transfer]] — Learning outcomes that retrieval-grounded tutoring aims to improve
- [[didactical-teacher-assistant-dimensional-modeling]] — Encoding tutoring strategy in an explicit didactic layer (rather than implicit LLM prompting) makes 
- [[genai-patient-education-transplant-handbooks]] — Grounding genAI patient-education assistants in institution-authored handbooks produces inconsistent

## Citation

**APA:** Jain, M., Bhatt, T., Pitts, G., Pandya, A., Brusilovsky, P., Norouzi, N., Hellas, A., Leinonen, J., & Akram, B. (2026). *Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education*. arXiv:2605.12988. BEA 2026.
