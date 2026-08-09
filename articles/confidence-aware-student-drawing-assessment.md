---
title: Confidence-Aware Automated Assessment of Student-Drawn Scientific Models
created: 2026-06-19
updated: 2026-06-19
type: article
tags: [automated-grading, stem-education, formative-assessment, k-12, efficacy-study, multi-representational-tools, psychometrically-aware-ai, adaptive-prompt-routing, assessment-validity]
sources: ['raw/papers/2606.20264.md']
confidence: high
---

> **Luyang Fang, Yingchuan Zhang, Jongchan Park, Zhaoji Wang, Ping Ma, Xiaoming Zhai** (2026). arXiv cs.AI preprint

**Luyang Fang, Yingchuan Zhang, Jongchan Park, Zhaoji Wang, Ping Ma, Xiaoming Zhai** (2026). arXiv cs.AI preprint

## Overview

Vision Transformer (ViT) with LoRA adaptation for automated scoring of student-drawn scientific models on six NGSS-aligned middle school assessment items. A confidence-aware framework derives response-level confidence from test-time predictive distributions, enabling selective automation: high-confidence responses auto-scored, uncertain cases deferred for human review. Improves scoring reliability while supporting practical trade-off between automated coverage and scoring risk.

## Key Contributions

### Paper 1: Code as Anchor, Memory and Metaphor as Support: Learner Experiences with Multi-View Visualizations
- **Problem:** Students often ignore well-designed program visualizations; existing cognitive design principles don't explain learner engagement/disengagement.
- **Method:** Within-subjects study (N=19 undergraduates, post-CS1/CS2) using think-aloud, interviews, and webcam gaze tracking with a multi-representational probe.
- **Gaze finding:** ~47% of time on code despite visual scaffolds; students without prior experience anchored more in code and ignored metaphor views.
- **Three engagement themes:** Agency (control over cognitive effort), Representational Fit (wide individual variation), Legitimacy (metaphors seen as childish at university level).
- **Implication:** multi-representational-tools need attention to affective and social factors, not just cognitive design.

### Paper 2: Learning to Prompt: Improving Student Engagement with Adaptive LLM-based High-School Tutoring
- **Problem:** Static-prompt LLM tutoring systems fail to adapt across diverse academic disciplines.
- **Solution:** Subject-aware prompt routing using 14 pedagogical features extracted from transcripts; contextual bandit formulation with 20 pedagogical prompts.
- **Simulation:** Router achieves 0.694 vs 0.647/0.64 static baselines (p<0.001).
- **Real-world A/B test:** N=656 conversations, 359 Dutch high-school students. Stochastic router achieves 28.1% exercise conversion rate vs 19.6% baseline.
- **Implication:** [[adaptive-prompt-routing]] with stochastic sampling improves both efficiency and engagement in real-world tutoring.

### Paper 3: Confidence-Aware Automated Assessment of Student-Drawn Scientific Models
- **Problem:** Automated scoring of student-drawn scientific models lacks reliability indicators, leaving teachers unable to decide when to trust scores.
- **Method:** Vision Transformer (ViT) with LoRA + confidence-aware framework using test-time perturbations.
- **Dataset:** Six NGSS-aligned middle school assessment items (477-816 responses each, scored Beginning/Developing/Proficient).
- **Key innovation:** Response-level confidence enables selective automation — high-confidence auto-scored, uncertain cases deferred for human review.
- **Implication:** [[confidence-aware-ai-assessment]] enables practical triage between automation and human oversight in educational assessment.

### Paper 4: PsyScore: A Psychometrically-Aware Framework for Trait-Adaptive Essay Scoring and ZPD-Scaffolded Feedback
- **Problem:** AES systems treat scoring and feedback as separate; neural scoring lacks interpretability; LLM feedback is ability-agnostic.
- **Solution:** Unified psychometric latent space (θ) via Neural GPCM Trait-Adaptive Scorer.
- **Scoring performance:** QWK 0.747 (besting prior SOTA 0.722); 1st in 6/8 ASAP++ prompts and 10/11 trait dimensions.
- **Feedback quality:** ZPD-based strategy mapping (Explicit Correction for θ<-1, Scaffolding for -1<θ<1, Socratic for θ>1). Multi-agent fusion from Llama-4-Scout, Qwen3-235B, GPT-4o.
- **Evaluation:** >90% win rate in Actionability vs GPT-4o, Llama-4-Scout, Qwen3.
- **Implication:** psychometrically-aware-ai can unify assessment and instruction, transforming automated essay scoring from summative to formative.

## Connected Concepts

- [[adaptive-prompt-routing]]
- [[assessment-validity]]
- [[automated-grading]]
- [[confidence-aware-ai-assessment]]
- [[formative-assessment]]
- [[k-12]]
- multi-representational-tools
- psychometrically-aware-ai

## Connected Articles

- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-education-global-capacity]] — What AI in Education Needs Next: Lessons from Youth Leaders Across Five Countries
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[ai-generated-instructional-videos-computing-ed]] — Student Perceptions and Preferences Regarding AI-Generated Instructional Videos in Computing Education
- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[ai-learning-tools-engineering-education-needs]] — Designing Needs- and Attention-Aware AI Learning Tools for Engineering Education: Insights from Psychological Outcomes
- [[ai-learning-transfer]] — AI Learning Transfer
- [[ai-literacy-equity-programming-policy]] — Programming Language Policy as an AI Literacy Equity Problem: A 15-Nation Comparative Analysis
- [[ai-metacognition-stem-review]] — AI Tools Scaffolding Metacognition in STEM
- [[ai-partner-science-epistemic-vigilance]] — AI as a Partner in Learning about, Doing, and Engaging with Science: Vigilance as the Key to Productive Augmentation

## Citation

Luyang Fang, Yingchuan Zhang, Jongchan Park, Zhaoji Wang, Ping Ma, Xiaoming Zhai (2026). [Confidence-Aware Automated Assessment of Student-Drawn Scientific Models](https://arxiv.org/abs/2606.20264). arXiv:2606.20264. arXiv cs.AI preprint.
