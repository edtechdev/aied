---
title: "Learning to Prompt: Improving Student Engagement with Adaptive LLM-based High-School Tutoring"
created: 2026-06-19
updated: 2026-06-19
type: article
tags: [intelligent-tutoring, llm, k-12, personalized-learning, scaffolding, adaptive-learning, multi-representational-tools, psychometrically-aware-ai, student-experience, adaptive-prompt-routing]
sources: ['raw/papers/2606.20138.md']
confidence: high
---

> **Po-Chin Chang, Nicholas Hogan, Aske Plaat, Michiel T. van der Meer** (2026). arXiv cs.AI preprint

**Po-Chin Chang, Nicholas Hogan, Aske Plaat, Michiel T. van der Meer** (2026). arXiv cs.AI preprint

## Overview

Adaptive LLM tutoring with subject-aware prompt routing based on 14 pedagogical features. A/B test on 656 conversations from 359 Dutch high-school students showed sim-to-real transfer. A stochastic router achieved 28.1% exercise conversion rate vs 19.6% baseline. Reduces interaction turns by ~3 (p=0.007) while maintaining pedagogical quality.

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

- [[adaptive-learning]]
- [[adaptive-prompt-routing]]
- [[confidence-aware-ai-assessment]]
- [[formative-assessment]]
- [[k-12]]
- multi-representational-tools
- [[personalized-learning]]
- psychometrically-aware-ai
- [[student-experience]]

- [[llm]]
- [[scaffolding]]
## Connected Articles

- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention

## Citation

Po-Chin Chang, Nicholas Hogan, Aske Plaat, Michiel T. van der Meer (2026). [Learning to Prompt: Improving Student Engagement with Adaptive LLM-based High-School Tutoring](https://arxiv.org/abs/2606.20138). arXiv:2606.20138. arXiv cs.AI preprint.
