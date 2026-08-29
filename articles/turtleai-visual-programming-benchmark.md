---
title: "TurtleAI: Benchmarking Multimodal Models for Visual Programming in Turtle Graphics"
created: "2026-06-03T04:33:04-04:00"
updated: "2026-08-28T00:00:00-04:00"
type: article
tags: [benchmark, cs-education, k-12, multimodal, visualization]
research_method: [benchmark]
discipline: [cs education]
level: [k 12]
sources: ['raw/papers/2606.03626.md']
confidence: medium
---

> **Synthesis:** This paper introduces TurtleAI, a [[benchmark]] containing 823 tasks curated from real-world visual programming in the Turtle Graphics domain, evaluating how well vision-language models (VLMs) perform on education-oriented visual programming. Most prior work focuses on visual programming for productivity; the authors find that current VLMs struggle significantly on these tasks, and that fine-tuning on synthetic data yields about a 20% improvement — informing [[cs-education|programming education]] and multimodal AI evaluation.

## Abstract

Vision-language models (VLMs) have been explored for visual programming, where they generate code to solve visual tasks. However, most prior work focuses on visual programming for productivity; it remains unclear how well current VLMs perform on education-oriented visual programming and what factors limit their performance. To bridge this gap, we introduce TurtleAI, a benchmark containing 823 tasks curated based on real-world visual programming tasks in the Turtle Graphics domain. Solving these tasks requires models to perceive geometric patterns, reason about spatial relationships, and synthesize Python code that faithfully reproduces geometric patterns. We evaluate 20+ VLMs, including GPT-5, GPT-4o, and Qwen2-VL-72B, and find that they struggle significantly, with most achieving success rates below 30%. To address these limitations, we propose a data generation technique that requires only a small set of seed samples. Fine-tuning Qwen2-VL-72B on the resulting synthetic data yields an improvement of about 20% on real-world tasks. Failure analysis reveals that GPT-4o struggles with spatial reasoning and precise visual replication, whereas fine-tuning primarily improves the alignment between visual perception and code generation — a contribution to [[cs-education|programming]] [[k-12|education]], [[multimodal|multimodal models]], and [[benchmark|benchmarking]] AI in education.

## Connected Concepts

- [[computational-thinking]]
- [[stem-education]]
- [[math-education]]
- [[pedagogical-llm-training]]
- [[benchmark]]
- [[multimodal]]
- [[k-12]]

## Connected Articles

- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[privacy-aware-classroom-incident-recognition-2026]] — Robust and Efficient Motion Reasoning for Privacy-Aware Classroom Incident Recognition
- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking Large Language Models for Diagnosing Students' Cognitive Skills from Handwritten Math Work
- [[vocabulary-difficulty-prediction]] — What Makes Words Hard? Sakura at BEA 2026 Shared Task on Vocabulary Difficulty Prediction
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[eduzone-llm-safety-k12]] — EduZone: A Framework for Evaluating LLM Safety for K-12 Students and Teachers

## Citation

Wen, C., & Staub, J. (2026). [*TurtleAI: Benchmarking Multimodal Models for Visual Programming in Turtle Graphics*](https://arxiv.org/abs/2606.03626).
