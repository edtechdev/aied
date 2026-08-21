---
title: "Automating Learner Assessment: Benchmarking Machine Learning and Deep Learning Models for EEG-Based Familiarity Prediction"
created: "2026-08-21T19:02:30-04:00"
updated: "2026-08-21T19:02:30-04:00"
type: article
tags: [automated-assessment, learning-analytics, educational-measurement, ai-ed-evaluation, benchmark, cognitive-diagnosis, student-modeling, limitations-in-aied-research]
sources: ['raw/papers/eeg-familiarity-automated-assessment-2026.md']
confidence: high
---

> **Synthesis:** Nanayakkara and Halloluwa (2026) address the fundamental challenge of objective learning assessment by benchmarking fifteen [[reinforcement-learning|machine learning]] and deep learning models for EEG-based familiarity prediction across two cognitive domains — human faces (factual knowledge) and mathematical equations (conceptual knowledge). Using continuous EEG from 23 participants and spectral features across six frequency bands, they show that standard stratified cross-validation yields artificially high performance (up to 0.9853 F1 with a CNN) due to temporal leakage, whereas rigorous trial-independent Group K-Fold validation drops the peak to 0.6038 F1 — still statistically significant above chance. The study establishes a realistic benchmark for EEG-based [[cognitive-diagnosis|cognitive monitoring]] in educational technology and cautions against overestimating model generalizability in [[automated-assessment]].

## The promise and pitfalls of neurophysiological assessment

Traditional [[assessment|assessment methods]] such as quizzes and exams are indirect proxies for learning, relying on a learner's ability to articulate knowledge. The paper motivates psychophysiological signals — eye-tracking, skin conductance, and especially [[affective-computing|electroencephalography (EEG)]] — as direct, non-invasive windows into the neural correlates of knowledge acquisition. EEG offers high temporal resolution, making it promising for detecting *familiarity*, a foundational element of learning. The study positions itself as a comprehensive [[benchmark]] filling a gap: prior work often focused on a limited set of models or a single cognitive domain, so this work evaluates fifteen models across two distinct domains.

## Methodological rigor: trial-independent evaluation

The central methodological contribution is the contrast between two validation schemes. Standard stratified cross-validation allows temporal leakage across neighboring epochs, producing inflated estimates (up to 0.9853 F1 with CNN). A rigorous trial-independent validation (Group K-Fold), which respects the temporal structure of the data, drops peak performance to 0.6038 F1 (CNN) — still statistically significant above the 25% chance level. This demonstrates the critical necessity of trial-independent evaluation to avoid overestimating model generalizability, a lesson directly relevant to [[ai-ed-evaluation|AI evaluation]] and [[limitations-in-aied-research|the limitations of AI in education research]].

## Neural biomarkers and feature importance

Beyond classification performance, the authors use feature importance and SHAP analysis to identify temporal and frontal Gamma and Beta oscillations as the most critical biomarkers for familiarity. This connects the benchmarking to the underlying [[learning-analytics|neural signatures of learning]] and suggests which brain signals carry the most information about whether a learner recognizes familiar content.

## Connected Concepts
- [[automated-assessment]]
- [[learning-analytics]]
- [[educational-measurement]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[affective-computing]]
- [[limitations-in-aied-research]]

## Connected Articles
- [[ai-assisted-learning-modes-eeg]] — AI-Assisted Learning Modes and EEG
- [[physiological-signals-exam-outcomes-ml]] — Physiological Signals, Exam Outcomes, and ML
- [[genai-oop-programming-assessments-2026]] — GenAI on OOP Programming Assessments
- [[assessment-latent-structure-human-llm-2026]] — Assessment Latent Structure for Humans and LLMs
- [[pedlow-genai-selfassessment-2026]] — GenAI Self-Assessment
- [[jin-glat-genai-literacy-assessment]] — GLAT GenAI Literacy Assessment
- [[genai-assessment-governance]] — GenAI Assessment Governance

## Citation
Nanayakkara, I., & Halloluwa, T. (2026). [*Automating Learner Assessment: Benchmarking Machine Learning and Deep Learning Models for EEG-Based Familiarity Prediction*](https://arxiv.org/abs/2608.16541). arXiv:2608.16541.
