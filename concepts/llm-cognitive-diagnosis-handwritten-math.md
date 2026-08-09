---
title: Benchmarking Large Language Models for Diagnosing Students' Cognitive Skills from Handwritten Math Work
created: 2026-05-31
updated: 2026-05-31
type: concept
tags: [ai-ed-evaluation, knowledge-tracing, multimodal, benchmark, human-in-the-loop, critical-thinking, hallucination-risk, k-12, llm, generative-ai]
confidence: high
---

> **MathCog** benchmark (3,036 teacher-annotated diagnostic verdicts, 639 handwritten responses, 18 LLMs): all models severely underperform (macro F1 < 0.5) — over-attributing evidence, overthinking minimal cues, hallucinating nonexistent evidence ([[hallucination-risk]]) — calling for evidence-aware architectures and [[human-in-the-loop-ai|teacher-in-the-loop]] designs ([[knowledge-tracing]], [[multimodal]], [[benchmark]]).

# Benchmarking LLMs for Diagnosing Cognitive Skills from Handwritten Math

## Summary

This paper introduces **MathCog**, a benchmark dataset of 3,036 teacher-annotated diagnostic verdicts across 639 student handwritten math responses to 110 problems. Evaluating 18 LLMs, the authors find that **all models severely underperform** (macro F1 < 0.5), with systematic failure modes: over-attributing evidential strength, overthinking minimal cues, and hallucinating nonexistent evidence. Performance degrades sharply when student evidence is vague or implicit. The study calls for evidence-aware architectures and teacher-in-the-loop designs.

## Key Contributions

1. **MathCog Benchmark** — First benchmark for cognitive skill diagnosis from handwritten math, grounded in TIMSS 2019 cognitive framework with Evident/Vague evidential strength labels
2. **Systematic LLM Evaluation** — 18 models spanning reasoning, multimodal, and text-only architectures, all showing F1 < 0.5
3. **Error Taxonomy** — Five systematic error patterns identified: evidence misidentification, rubric misinterpretation, over-inference, inconsistency, and hallucination
4. **Evidential Calibration Metrics** — Introduces OverAttr and FalseAttr to quantify models' tendency to over-claim evidential confidence

## Core Findings

### Universal Underperformance
No model achieves F1 ≥ 0.5. The best performers (GPT-4o-img at 0.448, DeepSeek-R1 at 0.442) still fail on nearly half of diagnostic decisions. Accuracy (mean 0.680) is misleading due to class imbalance — most student responses provide Evident Yes evidence, inflating accuracy.

### Evidence Sensitivity Gap
All models perform worse when student evidence is Vague (implicit, incomplete, or context-dependent). Multimodal models show a larger Evident-to-Vague performance drop than text-only models, suggesting visual inputs may amplify over-interpretation rather than improve evidential calibration.

### Systematic Error Patterns
- **Evidence Over-Attribution (OverAttr = 0.58):** Models label 58% of vague-evidence cases as "Evident"
- **Evidence False-Attribution (FalseAttr = 0.585):** 58.5% of incorrect diagnoses are accompanied by false claims of evidential confidence
- **Hallucination:** Models fabricate evidence quotes not present in student handwriting
- **Over-inference:** Drawing strong diagnostic conclusions from minimal or ambiguous cues

## Implications for AI in Education

### Evidence-Aware Design
Current LLMs lack the ability to calibrate confidence based on evidential quality. Educational AI systems need explicit mechanisms to **detect when evidence is insufficient** and communicate uncertainty rather than fabricate confident diagnoses. This connects to broader challenges in [[ground-truth-reliability-aied]] and [[hallucination-risk]].

### Teacher-in-the-Loop Architecture
The authors advocate for [[human-in-the-loop-ai]] systems where LLM predictions support rather than replace teacher judgment. This aligns with [[teacher-role]] research on AI augmentation vs. automation, and with findings from [[over-reliance]] studies showing that uncalibrated AI outputs can degrade human diagnostic accuracy.

### Benchmarking Beyond Accuracy
MathCog demonstrates that standard accuracy metrics obscure critical failure modes in educational AI. The evidential calibration metrics (OverAttr, FalseAttr) introduced here complement evaluation approaches in [[benchmark]] design and [[ai-ed-evaluation]]. The dataset's Evident/Vague distinction parallels concerns in [[cognitive-offloading]] about when learners (and AI systems) should recognize the limits of available information.

### Connection to LLM Fallacy Research
This paper directly extends work on [[llm-fallacy-misattribution]] — the hallucination of evidence and over-attribution patterns documented here are a specific educational manifestation of broader LLM reasoning failures. The finding that reasoning models (DeepSeek-R1, o1-Preview) show no systematic advantage echoes questions about whether chain-of-thought reasoning actually improves diagnostic reliability.

### Handwritten Math Assessment
MathCog builds on existing [[llm-handwritten-math-grading]] work but shifts focus from answer correctness to cognitive skill diagnosis — a more ambitious and educationally meaningful task. The TIMSS cognitive framework provides a theoretically grounded alternative to ad-hoc grading rubrics.

## Limitations

- Korean middle-school math only; generalizability to other languages, grade levels, and subjects unknown
- 3,036 verdicts across 639 responses — moderate dataset size
- Only TIMSS "Knowing" and "Applying" domains covered; "Reasoning" skills excluded due to problem set characteristics
- Korean-to-English machine translation may introduce artifacts
- Static benchmark; does not capture iterative diagnostic processes teachers use in practice

## Connected Concepts

- [[adaptive-learning]]
- [[adaptive-learning-systems]]
- [[adaptive-virtual-patient-psychotherapy-training]]
- [[administrator]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[agentic-ai]]
- [[agentic-workflows]]
- [[ai-ed-evaluation]]
- [[ai-education]]
- [[ai-literacy]]
- [[ai-tutoring]]
- [[assessment-validity]]
- [[automated-assessment]]
- [[automated-grading]]

## Connected Articles

- [[ai-literacy-power-knowledge]] — AI Literacy: An Exercise in Power-Knowledge
- [[llm-handwritten-math-grading]] — Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs
- [[ai-in-the-wild-college]] — AI in the Wild: A Large Scale Analysis of Authentic Interactions of College Students with Generative AI
- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study
- [[genai-policies-higher-ed-computing]] — A Comparative Analysis of Institutional and Course Generative AI Policies within Higher Education: Implications for I...
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[liang-genai-systematic-review-human-ai-2026]] — A systematic review of generative AI in education: Empirical insights from a human–AI interaction perspective
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-literacy-legal-translation-2026]] — AI Literacy for Legal Translation: Developing Digital Resilience
- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[genai-usage-design-students-survey]] — A study of GenAI usage by Design Students: Analysis of Survey Results and Journals of AI practices at the Politecnico...
- [[brookings-ai-students-report]] — A New Direction for Students in an AI World: Prosper, Prepare, Protect
- [[ai-peer-feedback-systems]] — AI Peer Feedback Systems
- [[crewscaler-ai-upskilling-framework]] — AI-accelerated End-to-End Framework for Rapid Professional Upskilling
- [[becerra-aicofe-feedback-2026]] — AICoFE: AI-Powered Feedback System
- [[teacher-ai-adoption-confidence]] — AI Adoption Among Teachers: Insights on Concerns, Support, Confidence, and Attitudes
- [[llm-tts-dialogue-lesson-generation]] — A Semi-Automated System for Generating Dialogue-Based TTS Lessons Using Large Language Models: An Exploratory Study o...
- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity in AI in Education
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[llm-intervention-design-cs-review]] — A review of intervention designs of LLM Integration in Undergraduate Computer Science Education
- [[llm-fallacy-misattribution]] — The LLM Fallacy and Misattribution of Competence
- [[genai-meta-analysis-programming-learning]] — A meta-analysis of the effect of generative AI on productivity and learning in programming
- [[civic-education-ai-lesson-plans]] — AI-Generated Lesson Plans in Civic Education
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
