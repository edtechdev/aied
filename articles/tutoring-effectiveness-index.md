---
title: "The Tutoring Effectiveness Index: Predicting LLM Math Tutor Quality from Four Conversation Signals"
created: 2026-06-01
updated: 2026-06-01
type: article
tags: [intelligent-tutoring, llm, benchmark, efficacy-study, automated-grading, formative-assessment, reinforcement-learning]
sources: ['raw/papers/2605.30666.md']
confidence: high
---

> **Authors:** Shim Jaechang, Unggi Lee (2026) — CIKM 2026

# The Tutoring Effectiveness Index (TEI)

**Authors:** Shim Jaechang, Unggi Lee (2026) — CIKM 2026

## What It Is

TEI is a **training-free, judge-free index** that selects the best tutoring response from multiple LLM candidate outputs using only four internal conversation signals — no RL training, no external judge model, no reward model required.

## How It Works

TEI combines four signals computed during decoding with fixed weights:

- **V (Verify ratio)**: Regex over thinking trace counting Schoenfeld Verification keywords ("let me check", "verify", "double-check")
- **M̃ (Math-step density)**: Regex on visible output, min-max normalized within candidate pool
- **Q (Ends-question rate)**: Regex detecting if tutor turn ends with a question
- **D (Deep-reasoning gate)**: Binary, fires if ≥40% of tokens have JSD below threshold

Formula: `TEI(y) = 1.0·V + 0.75·M̃ - 1.0·Q + 0.5·1[DTR ≥ 0.4]`

The signs matter more than magnitudes: reward verification and math content, penalize ending with questions, small bonus for deep reasoning.

## Key Results

- TEI@8 raises improvement rate on pre-incorrect scenarios from **59.0% to 81.9%** (+22.9 pp) on frozen DeepSeek-R1-8B, with no training
- TEI@4 achieves 75.7%, beating both Random@4 (58.6%) and DTR@4 (61.2%)
- Feature ablation: dropping Verify costs -0.054 AUC, dropping Math-steps costs -0.036, dropping Deep-reasoning gate costs only -0.009
- TEI@8 costs 4.1× tokens of greedy (16,334 vs 3,984), about half of self-consistency

## The Alignment Tax

The paper quantifies severe degradation from pedagogical GRPO fine-tuning:
- Thinking length drops from 1,764 to 119 words/turn (−93%)
- Content-Knowledge accuracy falls by −71% relative
- Pedagogical-Knowledge accuracy falls by −80% relative
- Student Δ Solve Rate crosses from +0.180 to **−0.012** — the aligned tutor becomes detrimental

## Why It Matters

TEI demonstrates that simple lexical and structural signals can effectively steer a frozen LLM to be a much better math tutor without any training. This is especially valuable when RL fine-tuning is shown to catastrophically degrade tutoring quality. The approach is cost-effective and immediately deployable on frozen models.

## Open Questions

- Does TEI generalize to non-math tutoring domains (writing, science, language)?
- Can the fixed weights be optimized per-domain without losing the training-free property?
- How does TEI interact with different base model architectures and sizes?

## Connected Articles

- [[learning-by-chatting-genai-impact]] — Learning by Chatting? Investigating the Impact of Generative AI on Information Seeking and Learning
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming
- [[ai-campus-wellbeing-tools]] — AI-Driven Tools for Enhancing Campus Well-being: Prevention and Intervention
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-coaching-rl-skill-development]] — AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
- [[ai-enabled-serious-games]] — AI-Enabled Serious Games: Integrating Intelligence and Adaptivity in Training Systems
- [[ai-engineering-education-balancing-act]] — Using AI in engineering education: a balancing act, driven by clear purpose
- [[ai-fallibility-warning-help-seeking]] — Warning About AI Fallibility Increases Help-Seeking in an Intelligent Tutoring System
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study

## Citation

Jaechang, S., & Lee, U. (2026). *The tutoring effectiveness index: Predicting LLM math tutor quality from four conversation signals*. arXiv:2605.30666. CIKM 2026.
