---
title: "StanBKT: Rethinking Parameter Estimation in Bayesian Knowledge Tracing"
created: 2026-05-25
updated: 2026-05-25
type: article
tags: [intelligent-tutoring, learning-analytics, adaptive-learning, benchmark, open-source, adaptive-learning-systems, knowledge-tracing, visualization]
sources: ['raw/papers/2605.23048.md']
confidence: high
---

> **Siddhartha Pradhan, Yanping Pei, Morgan Lee, Puyuan Zhang, Erin Ottmar, Adam C. Sales (2026)** — Worcester Polytechnic Institute. *arXiv preprint (cs.HC, cs.CY, stat.AP, stat.ME)*.

**Siddhartha Pradhan, Yanping Pei, Morgan Lee, Puyuan Zhang, Erin Ottmar, Adam C. Sales (2026)** — Worcester Polytechnic Institute. *arXiv preprint (cs.HC, cs.CY, stat.AP, stat.ME)*.

StanBKT introduces an open-source Python package for Bayesian Knowledge Tracing (BKT) that moves beyond traditional expectation-maximization (EM) point estimates to full Bayesian inference via Stan. The package supports **four estimation methods** (Hamiltonian Monte Carlo, variational inference, Pathfinder, and optimization), **three model variants** (standard, grouped, and hierarchical BKT), and provides posterior predictive inference with visualization utilities. Evaluated on the ASSISTments 2020 dataset, all methods achieve comparable predictive performance while trading off speed vs. posterior fidelity. A key demonstration shows how posterior inference enables **principled comparison of learning, forgetting, guessing, and slipping parameters** across experimental conditions in an educational intervention involving perceptual cue manipulations.

For [[intelligent-tutoring]] systems, this represents a significant methodological advance. Traditional BKT implementations produce point estimates that obscure uncertainty and prevent reliable condition comparisons — critical for A/B testing adaptive interventions. The hierarchical modeling support is particularly valuable for [[adaptive-learning-systems]] where student-level variation must be modeled. Compared to [[neural-symbolic-knowledge-tracing]] approaches, StanBKT preserves the interpretable hidden Markov structure of BKT while adding uncertainty quantification. For [[knowledge-tracing-irt]] comparisons, the Bayesian framework provides natural extensions unavailable in IRT. The work complements [[mbp-kt-meta-behavioral-knowledge-tracing]] by offering a complementary probabilistic modeling framework. As an [[open-source]] tool, StanBKT lowers the barrier for [[learning-analytics]] researchers to adopt Bayesian methods in educational data mining.

## Connected Concepts

- [[adaptive-learning-systems]]
- [[learning-analytics]]
- [[open-source]]

## Connected Articles

- [[knowledge-tracing-irt]] — Interpretable Knowledge Tracing via IRT
- [[mbp-kt-meta-behavioral-knowledge-tracing]] — MBP-KT: Learning Global Collaborative Information from Meta-Behavioral Pattern for Enhanced Knowledge Tracing
- [[neural-symbolic-knowledge-tracing]] — Neural-Symbolic Knowledge Tracing
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[ai-adult-learning-design]] — Guidelines for Designing AI Technologies to Support Adult Learning
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-fallibility-warning-help-seeking]] — Warning About AI Fallibility Increases Help-Seeking in an Intelligent Tutoring System
- [[ai-in-the-wild-college]] — AI in the Wild: A Large Scale Analysis of Authentic Interactions of College Students with Generative AI
- [[ai-interlocutor-l2-spoken-dialogue]] — What Changes When the Interlocutor Is an AI? Interactional Fluency and Linguistic Uptake in L2 Spoken Dialogue
- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[ai-learning-assistants-higher-ed-large-scale]] — Using AI-based Learning Assistants in Higher Education: A Large-Scale Descriptive Analysis
- [[ai-learning-companions-framework]] — Building AI Companions that Prioritise Learning over Performance
- [[ai-learning-transfer]] — AI Learning Transfer
- [[ai-lifelong-learning-policy]] — Artificial Intelligence in Lifelong Learning: Opportunities and Challenges in Adult Education Policy

## Citation

Siddhartha Pradhan, Yanping Pei, Morgan Lee, Puyuan Zhang, Erin Ottmar, Adam C. Sales (2026). [StanBKT: Rethinking Parameter Estimation in Bayesian Knowledge Tracing](https://arxiv.org/abs/2605.23048). arXiv:2605.23048. arXiv preprint (cs.HC, cs.CY, stat.AP, stat.ME).
