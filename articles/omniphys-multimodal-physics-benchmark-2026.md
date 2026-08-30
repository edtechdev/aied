---
title: "OmniPhys: A Unified Multimodal Benchmark for Physics Understanding and Generation from Chinese Educational Corpora"
created: "2026-08-28T09:08:00-04:00"
updated: "2026-08-28T09:08:00-04:00"
type: article
tags: [physics-education, multimodal, llm, generative-ai, benchmark, assessment, stem-education, automated-assessment]
audience: [software developers]
research_method: [benchmark]
discipline: [physics education, stem education]
category: [assessment]
sources: ['raw/papers/2608.25398.md']
confidence: high
---

> **Synthesis:** Chen et al. (2026) introduce **OmniPhys**, a large-scale [[multimodal|multimodal]] benchmark for [[physics-education|physics]] understanding and reasoning built from Chinese educational corpora, spanning middle-school through university-level problems. The benchmark comprises 15,246 questions and 19,850 images with fine-grained annotations supporting analysis of reasoning processes and knowledge usage, and — unusually — systematically evaluates multimodal *output* generation, including models' ability to synthesize structured physics diagrams. Extensive evaluations reveal critical gaps in current [[llm|multimodal LLMs]], especially in complex reasoning and visual generation, positioning OmniPhys as a foundational resource for advancing multimodal intelligence in physics and for informing [[automated-assessment|automated]] physics [[assessment]].

## Why physics needs a unified multimodal benchmark

[[llm|Multimodal large language models (MLLMs)]] have demonstrated strong abilities across visual and textual reasoning tasks, but their development in the physics domain is hindered by the lack of a comprehensive benchmark. Physics is a prototypical multimodal arena, demanding rigorous integration of textual descriptions, visual diagrams, and symbolic logic for accurate reasoning. Existing physics datasets rarely satisfy three critical criteria simultaneously: (1) **cross-stage knowledge fusion** spanning [[k-12|middle school]] to university; (2) **multimodal input comprehension** requiring interpretation of complex textual and visual cues; and (3) **multimodal output generation** assessing the model's ability to actively synthesize diagrams rather than merely select options. OmniPhys addresses this gap by unifying all three in a single benchmark.

## Benchmark design

OmniPhys is a Chinese benchmark designed to assess physics mastery from secondary education to university levels, covering five major physical disciplines including mechanics, electromagnetism, and optics. All questions are curated from contemporary examination papers and authoritative textbooks, undergoing a strict multi-stage filtering process to guarantee difficulty and [[pedagogy|pedagogical]] validity. The benchmark includes:

- **15,246 questions** and **19,850 images**, with detailed annotations supporting fine-grained analysis of reasoning processes and knowledge usage.
- A **multimodal output generation subset** that assesses MLLMs' capabilities in physics diagram understanding and editing — a fundamental component of authentic physics problem solving that most [[benchmark|benchmarks]] omit.
- Coverage spanning question types from multiple-choice to open-ended problem solving, grounded in authentic [[assessment|assessment]] material.

## Evaluation findings

Comprehensive baseline evaluations reveal that despite recent advances, current multimodal LLMs exhibit **significant capability gaps** in the physics domain, especially in complex reasoning and visual generation. The multimodal output tasks — where models must synthesize or edit structured physics diagrams — proved particularly challenging, underscoring that generating authentic physics representations remains an open problem for MLLMs. These findings have direct implications for whether [[generative-ai|generative AI]] systems can serve as reliable partners in physics learning and [[automated-assessment|automated assessment]], connecting to broader knowledge base evidence that AI systems still struggle with the specialized, multimodal, and diagram-heavy tasks characteristic of authentic [[stem-education|STEM]] assessment.

## Implications for physics education and AI

OmniPhys matters to the knowledge base for three reasons. First, it extends the physics-education evidence base on AI capability with a large, authentic, Chinese-educational-corpus benchmark — complementing studies of [[physics-education|AI performance on physics problems]] and LLM support for [[computational-thinking|computational thinking]] in physics. Second, its emphasis on diagram generation connects to [[multimodal|multimodal learning]] and authentic physics problem solving, where the ability to construct representations is as important as selecting answers. Third, its finding that MLLMs struggle on complex reasoning and visual generation informs realistic expectations for [[intelligent-tutoring|tutoring]] and [[automated-assessment|automated assessment]] in physics, supporting the knowledge base's recurring theme that AI excels at routine tasks but underperforms on the authentic, high-level reasoning that defines deep disciplinary learning.

## Connected Concepts

- [[physics-education]]
- [[multimodal]]
- [[llm]]
- [[generative-ai]]
- [[benchmark]]
- [[assessment]]
- [[automated-assessment]]
- [[stem-education]]
- [[intelligent-tutoring]]
- [[learning-gains]]
- [[computational-thinking]]
- [[ai-ed-evaluation]]

## Connected Articles

- [[probing-ai-generated-physics-solutions-2026]] — Probing AI-generated physics solutions and preparing students to critique them
- [[llm-computational-thinking-physics-2026]] — LLM support for computational thinking in physics
- [[hashmi-socratic-physics-chatbot-2025]] — Socratic physics chatbot
- [[physics-chatbot-epistemological-beliefs-2026]] — Physics chatbot and epistemological beliefs
- [[ai-grading-handwritten-physics-2026]] — Large-scale AI grading of handwritten physics assessments
- [[genai-oop-programming-assessments-2026]] — GenAI performance on authentic introductory OOP assessments
- [[llm-formative-feedback-systematic-review-2026]] — Systematic review of LLM-based formative feedback
- [[assessment-latent-structure-human-llm-2026]] — Assessment instruments for humans and LLMs
- [[syal-multimodal-dialogue-stem-2026]] — Multimodal dialogue in STEM
- [[evaluation-age-ai-output-evidence-2026]] — Evaluation in the age of AI: output as evidence of learning

## Citation

Chen, H., Lin, Y., Yushanjiang, N., Lin, X., & Zhang, M. (2026). [*OmniPhys: A unified multimodal benchmark for physics understanding and generation from Chinese educational corpora*](https://arxiv.org/abs/2608.25398). arXiv:2608.25398.
