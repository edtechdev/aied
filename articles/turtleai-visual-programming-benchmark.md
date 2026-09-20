---
title: "TurtleAI: Benchmarking Multimodal Models for Visual Programming in Turtle Graphics"
created: "2026-06-03T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
technology: [multimodal, visualization]
audience: [software developers]
discipline: [cs education]
level: [k 12]
sources: ['raw/papers/2606.03626.md']
confidence: medium
page_kind: [evaluation]
methods: [benchmark]
---

> **Synthesis:** This paper introduces TurtleAI, a [[benchmark]] containing 823 tasks curated from real-world visual programming in the Turtle Graphics domain, evaluating how well vision-language models (VLMs) perform on education-oriented visual programming. Most prior work focuses on visual programming for productivity; the authors find that current VLMs struggle significantly on these tasks, and that fine-tuning on synthetic data yields about a 20% improvement — informing [[cs-education|programming education]] and multimodal [[ai-ed-evaluation|AI evaluation]].

## Abstract

Vision-language models (VLMs) have been explored for visual programming, where they generate code to solve visual tasks. However, most prior work focuses on visual programming for productivity; it remains unclear how well current VLMs perform on education-oriented visual programming and what factors limit their performance. To bridge this gap, we introduce TurtleAI, a benchmark containing 823 tasks curated based on real-world visual programming tasks in the Turtle Graphics domain. Solving these tasks requires models to perceive geometric patterns, reason about spatial relationships, and synthesize Python code that faithfully reproduces geometric patterns. We evaluate 20+ VLMs, including GPT-5, GPT-4o, and Qwen2-VL-72B, and find that they struggle significantly, with most achieving success rates below 30%. To address these limitations, we propose a data generation technique that requires only a small set of seed samples. Fine-tuning Qwen2-VL-72B on the resulting synthetic data yields an improvement of about 20% on real-world tasks. Failure analysis reveals that GPT-4o struggles with spatial reasoning and precise visual replication, whereas fine-tuning primarily improves the alignment between visual perception and code generation — a contribution to [[cs-education|programming]] [[k-12|education]], [[multimodal|multimodal models]], and [[benchmark|benchmarking]] [[ai-education|AI in education]].

## What this means for practice

- **Designers.** Treat VLM-generated Turtle Graphics code as a prototype rather than a classroom feature: on the real-world dataset of tasks designed for students in grades 3-6, even the top-performing model, o3, reaches only a 40.2% symbolic success rate, and the strongest open-source base model, Qwen2.5-VL, reaches only 6.80% on the full [[benchmark|benchmark]].
- **Instructors.** Sequence Turtle Graphics content from Basic Geometry, where models perform best, toward Spiral tasks, the most challenging category for all models because they demand long-horizon sequential control; this tells you where student support should concentrate.
- **Designers.** When a tutoring feature needs broader [[multimodal]] capability, fine-tune on generated data: fine-tuning Qwen2-VL-72B on TurtleAI-Datagen output improved real-world task performance by over 20%, and the pipeline expands a seed set of only 10 image-code pairs into a training set of 738,126 samples.
- **Instructors.** Expect model assistance to be least reliable on hand-drawn student work: fine-tuning improved performance mainly on DSReal and DSSyn while DSCraft performance remained low.
- **Researchers.** Use the 823-task benchmark, composed of 102 real-world, 102 hand-drawn, and 619 synthetic tasks, to compare models on education-oriented visual programming rather than productivity-oriented tasks.

## Limitations

- The evaluation framework normalizes drawing comparison to be invariant to size, translation, and line width, which the authors acknowledge may discard geometric variations essential to inverse-graphics tasks; code quality is likewise reduced to compactness, measured only by length ratio.
- No systematic ablation or comparison against other data synthesis techniques was run, so the contribution of individual TurtleAI-Datagen stages is not isolated.
- Domain coverage is narrow: the 823-task benchmark is confined to Turtle Graphics, and only 102 tasks come from real-world student drawings while 619 are synthetic.
- Fine-tuned models still struggle on hand-drawn inputs (DSCraft), which the authors attribute to synthetic training data that focuses on clean renderings and lacks the noise and distortions of human drawings.

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
