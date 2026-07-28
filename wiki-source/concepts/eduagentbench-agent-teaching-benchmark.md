---
title: Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows
created: 2026-05-15
updated: 2026-05-15
type: concept
tags: [benchmark, intelligent-tutoring, llm, generative-ai, scaffolding, teacher-role]
sources: [raw/papers/2605.14322.md]
confidence: medium
---

# Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows

Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows
**Chen et al. (2026)** — Multiple institutions. Under review.
📄 [Full text (arXiv)](https://arxiv.org/abs/2605.14322)

## Summary

EduAgentBench introduces the first **theory-grounded, holistic benchmark** for evaluating AI tutor agents across the full scope of **real teaching work**. Unlike existing benchmarks that focus narrowly on answer correctness, EduAgentBench defines **150 source-grounded tasks** spanning three capability surfaces:

1. **Professional pedagogical judgment** — making evidence-based instructional decisions aligned with [[intelligent-tutoring]] principles.
2. **Situated multi-turn tutoring** — diagnosing learner state and adapting [[scaffolding]] over extended dialogue interactions.
3. **Canvas-style teaching workflow completion** — executing tasks within realistic learning management systems (posting assignments, grading, providing [[feedback-loop]]).

The benchmark is constructed through a **pedagogical-insight-driven pipeline** with complementary human review and automatic verification signals. Evaluating frontier models reveals a critical gap: current LLMs demonstrate **bounded pedagogical judgment** but fall short of professional teaching standards in both situated tutoring and autonomous workflow execution. This connects directly to concerns about [[agentic-workflows-education]] and whether [[conversational-ai-tutors-framework]] can truly meet classroom demands.

The finding that models struggle most with **multi-step teaching workflows** in realistic environments echoes broader [[multi-agent-instructional-design]] challenges and the [[human-in-the-loop-ai]] requirements for production educational systems. The benchmark provides a measurement foundation for developing tutor agents that can genuinely support real teaching work, complementing existing evaluations like [[teachbench-llm-teaching-evaluation]].

## Related Pages
- [[codify-socratic-tutoring-programming]] — Socratic tutoring platform for programming with integrated assessment
- [[ai-tpack-teacher-multi-agent-workflow]] — How teachers design and orchestrate multi-agent instructional workflows
- [[intelligent-tutoring]] — Core AI tutoring systems and architectures
- [[teachbench-llm-teaching-evaluation]] — Complementary LLM teaching ability benchmark
- [[agentic-workflows-education]] — Agentic workflows in educational contexts
- [[conversational-ai-tutors-framework]] — Framework for conversational AI tutoring
- [[pedagogical-llm-training]] — Training LLMs for pedagogical competence
- [[scaffolding]] — Adaptive support in learning
- [[ai-tutor-behavioral-evaluation]] — Behavioral evaluation of AI tutors from student data

- [[retrieval-augmented-tutoring-algorithm-kite]] — KITE: complementary tutoring architecture with simulated evaluation
## Citation
**APA:** Chen, Z., Liu, P., Sheng, R., Li, H., Tu, J., Deng, X., Shum, K., Liu, D., & Qu, H. (2026). *Are agents ready to teach? A multi-stage benchmark for real-world teaching workflows*. arXiv:2605.14322.
