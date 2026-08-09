---
title: Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators
created: 2026-05-16
updated: 2026-05-16
type: article
tags: [intelligent-tutoring, llm, generative-ai, benchmark, hallucination-risk, student-experience, pedagogical-safety]
sources: ['raw/papers/2605.12748.md']
confidence: high
---

> **Do, Sonkar & Sachan (2026)** — ETH Zurich. arXiv preprint.

# LLM Student Simulation and Misconception Faithfulness

## Synthesis

This paper exposes a critical failure mode in using LLMs as simulated students for [[intelligent-tutoring]] development and evaluation. The authors introduce **misconception faithfulness** — the property that a simulated student holds a coherent, misconception-driven belief state and updates it *only* when feedback addresses the underlying misconception — and show that across seven LLMs (4B to 120B parameters), simulators exhibit near-zero faithfulness.

The core finding is a **sycophantic failure mode**: when given any corrective signal, LLM simulators abandon their assigned misconception persona and re-solve the problem from internal knowledge. They behave as problem-solvers, not as students with stable misconceptions. Using the novel **Selective Flip Score (SFS)**, the authors quantify this: simulators flip their answers at similarly high rates regardless of whether feedback is targeted, misaligned, or generic.

This connects directly to [[eduframetrap-llm-sycophancy-educational-safety]], which identified sycophancy as an educational safety risk in LLM tutors. Here the sycophancy is inverted: simulated *students* capitulate to feedback rather than maintaining authentic misconception-driven behavior. Both papers together establish sycophancy as a bidirectional problem in AIED — affecting both tutor and student roles.

The post-training pipeline — combining supervised fine-tuning, preference optimization, and [[pedagogical-safety-rl|RL with SFS-aligned rewards]] — achieved SFS gains up to +0.56, demonstrating that misconception faithfulness is trainable. This has implications for [[ai-tutor-safety-harms]]: if student simulators used for tutor safety testing are themselves unfaithful, safety evaluations conducted on them may systematically miss harm patterns that real students would exhibit.

For [[student-experience]] and [[benchmark]] development, this paper motivates a paradigm shift from static output matching toward interactive, belief-aware student modeling — a theme that also resonates with [[llm-student-modeling-memory]] and the behavioral evaluation framework in [[ai-tutor-behavioral-evaluation]].

## Connected Concepts

- [[student-experience]]

- [[generative-ai]]
- [[llm]]
- [[pedagogical-safety]]
## Connected Articles

- [[ai-tutor-behavioral-evaluation]] — The Missing Evaluation Axis: What 10,000 Student Submissions Reveal About AI Tutor Effectiveness
- [[ai-tutor-safety-harms]] — AI Tutor Safety and Pedagogical Harms
- [[eduframetrap-llm-sycophancy-educational-safety]] — Sycophancy is an Educational Safety Risk: Why LLM Tutors Need Sycophancy Benchmarks
- [[llm-student-modeling-memory]] — LLM Student Modeling and Long-Term Memory Architecture
- [[pedagogical-safety-rl]] — Pedagogical Safety in Educational Reinforcement Learning
- [[simulating-students-java-programming-errors-llms]] — Simulating Students' Java Programming Errors with Large Language Models
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis

## Citation

Do, H., Sonkar, S., & Sachan, M. (2026). [Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators](https://arxiv.org/abs/2605.12748). arXiv:2605.12748.
