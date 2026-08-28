---
title: "Child Safety in Generative AI: An Expert-Guided and Incident-Grounded Evaluation Framework"
created: "2026-07-02T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [equity, generative-ai, k-12, pedagogical-safety, privacy, llm-in-education, rag, llm]
sources: ['raw/papers/2607.00395.md']
confidence: high
---

> **Haein Kong** — HEAL Workshop at CHI 2026, submitted 1 Jul 2026

**Haein Kong** — HEAL Workshop at CHI 2026, submitted 1 Jul 2026

Proposes an evaluation framework for child-specific harms in generative AI; applied to education domain, Llama Guard models struggle to detect unsafe user prompts from children.

## Key Findings

- Most existing AI safety evaluation frameworks and benchmarks focus on general (adult) user populations and overlook risks unique to younger users, despite evidence of heavy youth engagement — a recent national survey found 72% of U.S. adolescents have used AI companions.
- The paper proposes an evaluation framework that integrates expert-guided risk factors with real-world AI incident data, identifying hazard categories from expert guidelines and AI incident databases and using them to construct a synthetic test set for model evaluation.
- Applied to the education domain, three Llama Guard models were evaluated on their ability to detect unsafe user prompts; the models struggled to identify education-related unsafe prompts.
- The evaluation pipeline includes incident-grounded prompt generation — producing harmful education-related prompts framed from a teen or student perspective based on reported incidents — alongside generation of safe prompts for contrast.
- Future work is framed as extending the evaluation to additional risk categories and incorporating domain experts throughout the evaluation pipeline.

## Study Design & Method

The framework combines two evidence sources: hazard categories derived from expert guidelines and categories mined from AI incident databases. These inform a synthetic test set in which harmful and safe education-domain user prompts are generated from incident descriptions, with the user assumed to be a teen or student. The resulting test set is used to evaluate safety classifiers — here, three Llama Guard models — on their detection of unsafe user prompts, with assessments scored as safe or unsafe. This design lets the authors measure child-specific safety performance in a region where existing general-population benchmarks leave a gap.

## Implications for AI in Education

The results carry a direct warning for AI-based learning environments: general-purpose safety classifiers do not reliably catch education-related unsafe prompts from children, so [[pedagogical-safety]] cannot be assumed from standard model safeguards. Schools and edtech providers deploying [[generative-ai]] tools need child-specific evaluation, incident-grounded testing, and human oversight rather than reliance on off-the-shelf safety models. The framework's structure — expert guidance plus incident data plus synthetic testing — is itself a template that educational institutions and researchers can reuse to evaluate tools for younger users, with implications for [[privacy]] and [[equity-in-ai-education]] in who is protected by default safety practices.

## Connected Concepts

- [[ai-education]]
- [[equity-in-ai-education]]
- [[pedagogical-safety]]
- [[privacy]]
- [[generative-ai]]
- [[k-12]]
## Connected Articles

- [[elevate-genai-virtual-tutors]] — ELEVATE: Designing Human-Centered GenAI Virtual Tutors for Scalable and Inclusive Education
- [[gaze-informed-ai-children]] — Gaze-Informed Proactive AI Assistance for Children’s Picture Exploration
- [[tactile-statistical-graphs-accessibility]] — Touching and Feeling the Data: A Reusable Software Pipeline for Tactile Statistical Graphs in Accessible Education
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[llm-unlearning-math-privacy]] — Balancing AI responsibility with privacy, safety, and utility: Unlearning in large language models for mathematics education

## Citation

Haein Kong (2026). [Child Safety in Generative AI: An Expert-Guided and Incident-Grounded Evaluation Framework](https://arxiv.org/abs/2607.00395). HEAL Workshop at CHI 2026, submitted 1 Jul 2026
