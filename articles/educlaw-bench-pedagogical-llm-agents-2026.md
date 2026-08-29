---
title: "EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners"
created: "2026-08-05T04:33:04-04:00"
updated: "2026-08-28T15:00:00-04:00"
type: article
tags: [intelligent-tutoring, llm, agentic-ai, benchmark, knowledge-tracing, student-modeling, simulation, ai-ed-evaluation, curriculum-design]
research_method: [benchmark]
category: [evaluation, curriculum design]
sources: ['raw/papers/2608.03206.md']
confidence: high
---

> **Synthesis:** Lee et al. (2026) introduce EduClaw-Bench, a **30-day long-horizon benchmark** for [[pedagogy|pedagogical]] LLM agents that places an agent tutor in a sustained relationship with a [[simulation|simulated learner]] grounded in [[knowledge-tracing]]. Evaluating 10 agent adapters over three base-model tiers yields two findings that single-session evaluation cannot reach: **tutoring quality belongs to the base model and the agent harness together rather than either alone**, and **almost no combination sustains good tutoring over the full 30-day horizon** — every agent plateaus within 5–10 days far below ideal steady learning. A calibration check (ECE = 0.049) and a live-classroom field study confirm that the simulated learner and its measurements track reality.

## Abstract

Large language models (LLMs) power educational applications from tutoring to essay scoring, but each is a point solution to a single task, and only recently have these point solutions been integrated into agents operating over a learning management system (LMS). Yet tutoring is long-horizon, since a learner improves over days and weeks rather than in a single turn, and no benchmark evaluates an agent tutor across a sustained relationship. We introduce EduClaw-Bench, a benchmark that places an agent tutor in a continuous 30-day relationship with a simulated learner grounded in [[knowledge-tracing]] (KT), whose knowledge-concept mastery, from a KT model trained on real-student data, drives its answers and is probed for [[learning-gains|learning gain]] across 55 scenarios. Each agent is scored on three primary axes — learning gain (deterministic Δ solve rate), responsiveness, and helpfulness (judged by a cross-family panel of three LLM judges) — plus two curriculum-design axes grounded in Gagné's Nine Events and Rosenshine's Ten Principles.

## Key Findings

1. **Tutoring quality is jointly owned by base model and agent harness.** No adapter leads the learning-gain axis on more than one base-model tier (e.g., openclaw on Solar-pro3 +0.36%, zeroclaw on Codex-gpt5.5 −0.08%, metaclaw on Qwen3 +0.64%), so base model and harness interact rather than contribute separably — and a single-tier leaderboard mis-ranks the same systems.
2. **Almost no combination sustains good tutoring over the full horizon.** Every adapter plateaus by day 5–10 far below the ideal-learning reference (e.g., openclaw's learning-gain stops near 0.28–0.29), so an agent that looks good in a short session can fail to produce durable [[learning-gains|learning]] over weeks.
3. **The simulated learner tracks reality.** A calibration check on the AKT-predicted mastery against observed probe accuracy hugs the diagonal (ECE 0.049, Brier 0.033 over 1.19M attempts), and a live-classroom field study confirms the simulator's measurements transfer to real students.
4. **Failure modes are specific and diagnosable.** Tutor failures decompose into four pedagogical modes dominated by no-curriculum (48.5% of runs) and no-learning-gain (53.3%), while answer disclosure is essentially absent (≈0%). Even the best curriculum-design scores (Gagné ≈1.93 against a 5.0 ceiling) show that exposing the KT belief through the LMS does not force curriculum coherence.
5. **The five axes are largely independent.** Pairwise Spearman correlations on the openclaw adapter are near zero (e.g., ρ(I,III) ≈ −0.12), so a scalar composite would discard signal; a naive "one number" benchmark would hide which capability is failing.
6. **Reinforcement fine-tuning can silently degrade pedagogy.** LoRA RFT on the Small tier drove metaclaw-rft to near-zero learning gain while holding helpfulness flat (4.73 → 4.76), but openclaw-rl-rft collapsed in helpfulness (3.19 → 2.30) with no loss of responsiveness — a collapse invisible to leak- or refusal-based checks, surfacing only on the pedagogy axes.

## Implications

EduClaw-Bench makes the case that **tutoring must be evaluated over a sustained relationship, not a single turn or session**. The long-horizon finding directly challenges short-session [[benchmark|benchmarks]]: an agent can appear responsive while producing no durable [[learning-gains|learning gain]], and a reinforcement-trained system can optimize a reward while degrading its pedagogy. The joint base-model/harness result implies that [[intelligent-tutoring]] development must treat the [[llm|model]] and the agent harness as a coupled system, and that the wiki's existing [[agentic-ai]] evaluation methods should include [[simulation]]-based, long-horizon measurement rather than one-off prompts.

The curriculum-design axes connect to [[curriculum-design]] and the Gagné/Rosenshine traditions, reinforcing that [[student-modeling]] (here, KT-driven mastery) must be paired with pedagogical structure to produce coherent instruction. The calibration and field-study validation point toward [[ai-ed-evaluation]] that is psychometrically grounded rather than judged in a vacuum. The RFT collapse is a concrete warning for the [[pedagogical-llm-training|training and fine-tuning]] community: reward signals that ignore pedagogy can quietly destroy the very behaviors a tutor needs.

## Connected Concepts

- [[intelligent-tutoring]]
- [[llm]]
- [[agentic-ai]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[benchmark]]
- [[simulation]]
- [[curriculum-design]]
- [[ai-ed-evaluation]]
## Connected Articles

- [[learning-engagement-assistant-lea]] — Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System
- [[jeon-isd-agent-bench-2026]] — ISD Agent Benchmark
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM-Enhanced Hierarchical Cognitive Diagnosis
- [[eduagentbench-agent-teaching-benchmark]] — Are Agents Ready to Teach? A Multi-Stage Benchmark for Real-World Teaching Workflows
- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking Large Language Models for Diagnosing Students' Cognitive Skills from Handwritten Math Work
- [[knowledge-gap-detection-ai-tas]] — Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs

## Citation

Lee, U., Lee, S., Jeong, Y., Lee, E., Shin, M., & Kwon, H. (2026). [*EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners*](https://arxiv.org/abs/2608.03206).
