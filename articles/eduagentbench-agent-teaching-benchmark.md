---
title: Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows
created: 2026-05-15
updated: 2026-05-15
type: article
tags: [agentic-ai, benchmark, generative-ai, intelligent-tutoring, llm, scaffolding, teacher-role, pedagogical-llm-training, human-in-the-loop-ai, agentic-workflows]
sources: ['raw/papers/2605.14322.md']
confidence: medium
---

> Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows **Chen et al. (2026)** — Multiple institutions. Under review.

Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows

## Summary

EduAgentBench introduces the first **theory-grounded, holistic benchmark** for evaluating AI tutor agents across the full scope of **real teaching work**. Unlike existing benchmarks that focus narrowly on answer correctness, EduAgentBench defines **150 source-grounded tasks** spanning three capability surfaces:

1. **Professional pedagogical judgment** — making evidence-based instructional decisions aligned with [[intelligent-tutoring]] principles.
2. **Situated multi-turn tutoring** — diagnosing learner state and adapting [[scaffolding]] over extended dialogue interactions.
3. **Canvas-style teaching workflow completion** — executing tasks within realistic learning management systems (posting assignments, grading, providing [[feedback-loop]]).

The benchmark is constructed through a **pedagogical-insight-driven pipeline** with complementary human review and automatic verification signals. Evaluating frontier models reveals a critical gap: current LLMs demonstrate **bounded pedagogical judgment** but fall short of professional teaching standards in both situated tutoring and autonomous workflow execution. This connects directly to concerns about [[agentic-workflows-education]] and whether [[conversational-ai-tutors-framework]] can truly meet classroom demands.

The finding that models struggle most with **multi-step teaching workflows** in realistic environments echoes broader [[multi-agent-instructional-design]] challenges and the [[human-in-the-loop-ai]] requirements for production educational systems. The benchmark provides a measurement foundation for developing tutor agents that can genuinely support real teaching work, complementing existing evaluations like [[teachbench-llm-teaching-evaluation]].

## Connected Concepts

- [[intelligent-tutoring]]
- [[scaffolding]]
- [[feedback-loop]]
- [[human-in-the-loop-ai]]
## Connected Articles

- [[agentic-workflows-education]]
- [[conversational-ai-tutors-framework]]
- [[multi-agent-instructional-design]]
- [[teachbench-llm-teaching-evaluation]]
## Citation

Chen, Z., Liu, P., Sheng, R., Li, H., Tu, J., Deng, X., Shum, K., Liu, D., & Qu, H. (2026). [Are agents ready to teach? A multi-stage benchmark for real-world teaching workflows](https://arxiv.org/abs/2605.14322). arXiv:2605.14322.
