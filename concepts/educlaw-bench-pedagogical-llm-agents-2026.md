---
title: "EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners"
created: 2026-08-05
updated: 2026-08-05
type: concept
tags: [intelligent-tutoring, llm, agentic-ai, benchmark, knowledge-tracing, student-modeling, simulation, ai-ed-evaluation]
sources: [raw/papers/2608.03206.md]
confidence: high
---

> **EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners** — Introduces a 30-day long-horizon benchmark for pedagogical LLM agents using simulated learners grounded in knowledge tracing. Evaluates 10 agent adapters over three base-model tiers and finds that tutoring quality depends on both the base model and a... [[intelligent-tutoring]] [[llm]] [[agentic-ai]] [[benchmark]] [[knowledge-tracing]] [[student-modeling]]

# EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners

**Unggi Lee, Sookbun Lee, Yeil Jeong, Eunjoo Lee, Minchul Shin, Hoilym Kwon (2026)** — arXiv:2608.03206 [cs.CY].

📄 [Full text (arXiv)](https://arxiv.org/abs/2608.03206)

## Key Findings

Introduces a 30-day long-horizon benchmark for pedagogical LLM agents using simulated learners grounded in knowledge tracing. Evaluates 10 agent adapters over three base-model tiers and finds that tutoring quality depends on both the base model and agent harness together, and almost no combination sustains good tutoring over the full horizon. Calibration check (ECE=0.049) and live-classroom field study confirm the simulated learner tracks reality. Scored on learning gain, responsiveness, helpfulness, and curriculum-design axes (Gagné and Rosenshine).

## Abstract

Large language models (LLMs) power educational applications from tutoring to essay scoring, but each is a point solution to a single task, and only recently have these point solutions been integrated into agents operating over a learning management system (LMS). Yet tutoring is long-horizon, since a learner improves over days and weeks rather than in a single turn, and no benchmark evaluates an agent tutor across a sustained relationship. We introduce EduClaw-Bench, a benchmark that places an agent tutor in a continuous 30-day relationship with a simulated learner grounded in knowledge tracing (KT), whose knowledge-concept mastery, from a KT model trained on real-student data, drives its answers and is probed for learning gain across 55 scenarios.

## Related Pages

- [[intelligent-tutoring]] — related concept
- [[knowledge-tracing]] — related concept
- [[agentic-ai]] — related concept
- [[student-modeling]] — related concept
- [[simulation]] — related concept
- [[ai-ed-evaluation]] — related concept
- [[llm]] — related concept

## Citation

Unggi Lee, Sookbun Lee, Yeil Jeong, Eunjoo Lee, Minchul Shin, & Hoilym Kwon (2026). *EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners*. arXiv:2608.03206. arXiv:2608.03206 [cs.CY].
