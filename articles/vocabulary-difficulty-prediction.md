---
title: What Makes Words Hard? Sakura at BEA 2026 Shared Task on Vocabulary Difficulty Prediction
created: 2026-05-20
updated: 2026-05-20
type: article
tags: [language-learning, llm, generative-ai, benchmark, scaffolding, formative-assessment, writing-education, rag, open-source, k-12]
sources: ['raw/papers/2605.14257.md']
confidence: high
---

> **Nohejl, Wu, Ide, Riera Machin, Chang & Yanaka (2026)** — BEA 2026.

# What Makes Words Hard? Vocabulary Difficulty Prediction at BEA 2026

🔗 [Code](https://github.com/adno/vocabulary-difficulty)

## Overview

This paper presents two complementary approaches to predicting vocabulary difficulty for language learners, achieving state-of-the-art results in the BEA 2026 Shared Task. The work advances both the accuracy and explainability of NLP systems for educational applications.

## Key Findings

**Dual-model architecture:**
1. **Black-box LLM** fine-tuned with a soft-target loss function → Pearson r > 0.91, achieving the top shared task result in the open track
2. **Explainable model** → r > 0.77, outperforming fine-tuned encoder baselines while providing interpretable feature-level insights

**What makes words hard?** Beyond genuine production difficulty (word frequency, length, concreteness), the analysis reveals that:
- **Spelling difficulty** significantly impacts vocabulary item difficulty
- **Test item construction** (how items are presented) affects measured difficulty independent of the words themselves
- These factors are particularly pronounced in the British Council's Knowledge-based Vocabulary Lists (KVL)

## Educational Applications

Vocabulary difficulty prediction directly supports **adaptive language learning systems**, enabling:
- Personalized vocabulary sequencing based on predicted difficulty
- Diagnostic assessment of learner vocabulary gaps
- Generation of appropriately leveled reading materials

This connects to [[llm-children-reading-story-generation]], which uses LLMs for generating leveled educational content. The explainable model's insights about item construction also inform the design of [[formative-assessment]] instruments.

## Technical Innovation

The **soft-target loss function** for LLM fine-tuning on rating (regression) tasks is notable. Traditional fine-tuning uses hard classification targets; adapting LLMs to predict continuous difficulty scores required a custom loss. This technique may generalize to other educational NLP tasks requiring nuanced ordinal or continuous predictions, relevant to [[self-referential-l2-writing-llm-assessment]] and [[cyberscholar-genai-writing-feedback]].

## Benchmark Context

BEA (Building Educational Applications) is the premier venue for NLP-for-education research. This shared task establishes a new [[benchmark]] for vocabulary difficulty prediction with open-source code, encouraging reproducible research in a domain where educational impact depends on reliable, interpretable models.

## Connected Concepts

- [[formative-assessment]]
- [[writing-education]]

- [[generative-ai]]
- [[k-12]]
- [[llm]]
- [[open-source]]
- [[rag]]
- [[scaffolding]]
## Connected Articles

- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness
- [[cyberscholar-genai-writing-feedback]] — Generative AI Feedback, English Writing and Teacher Rubrics: A Multiple-Case Study of CyberScholar
- [[llm-children-reading-story-generation]] — Children's English Reading Story Generation via Supervised Fine-Tuning of Compact LLMs with Controllable Difficulty a...
- [[self-referential-l2-writing-llm-assessment]] — Towards Self-Referential Analytic Assessment: A Profile-Based Approach to L2 Writing Evaluation with LLMs
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams

## Citation

Nohejl, A., Wu, X., Ide, Y., Riera Machin, M. A., Chang, Y.-N., & Yanaka, H. (2026). [What Makes Words Hard? Sakura at BEA 2026 Shared Task on Vocabulary Difficulty Prediction.](https://arxiv.org/abs/2605.14257) arXiv:2605.14257. BEA 2026.
