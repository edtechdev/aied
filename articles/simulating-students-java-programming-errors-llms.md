---
title: Simulating Students' Java Programming Errors with Large Language Models
created: 2026-06-15
updated: 2026-06-15
type: article
tags: [llm, stem-education, student-experience, intelligent-tutoring, learning-analytics, efficacy-study]
sources: ['raw/papers/2606.14113.md']
confidence: high
---

> **Keramati, Cao, Mohammadi, Warschauer & Shi (2026)** — University of California, Irvine.

This paper investigates whether [[llm|large language models]] can serve as scalable proxies for students by simulating realistic logical errors in code submissions. Using the CodeWorkout dataset of 74,000+ unique student Java submissions across 37 problems, the authors evaluate five LLMs under three prompting strategies: Input-Output (IO), Chain-of-Thought (CoT), and iterative Self-Refine.


- **Diversity vs. Alignment trade-off**: LLMs generate diverse error patterns, but alignment with authentic student errors varies significantly by model. Claude Sonnet 4 achieves the most balanced performance across both dimensions.
- **Functional indistinguishability**: A blinded expert annotation study (N=401) found that synthetic errors are functionally indistinguishable from authentic student errors.
- **Task difficulty effects**: Higher-struggling-level problems elicit more diverse but less student-like errors — LLMs struggle more to simulate realistic mistakes on harder tasks.
- **Practical implications**: Synthetic errors could be integrated into [[intelligent-tutoring-systems|intelligent tutoring systems]], teachable agents, and large-scale [[learning-analytics|learning analytics]] pipelines without waiting for authentic classroom data accumulation.

## Methodology

The study used the CodeWorkout dataset with 74,000+ unique student Java submissions. Five LLMs were tested under three prompting strategies. Performance was assessed on two dimensions: diversity (range of distinct error patterns) and alignment (correspondence with authentic student mistakes). A blinded expert annotation study with 401 samples confirmed the indistinguishability of synthetic and authentic errors.

## Related Work

This work extends research on [[llm-student-simulation-misconception-faithfulness|LLM-based student simulation]] and [[llm-student-misconception-identification|student misconception identification]]. It connects to [[programming-its|programming intelligent tutoring systems]] and [[student-modeling|student modeling]] by offering a scalable method for generating training and evaluation data. The findings also inform [[ai-generated-traces-novice-programmers|AI-generated traces from novice programmers]] and research on [[code-review-genai-cs1|code review with generative AI in CS1]].

## Connected Concepts

- [[learning-analytics]]
- [[llm]]

## Connected Articles

- [[ai-generated-traces-novice-programmers]] — AI-Generated Traces for Novice Programmers: Learning Effects and Learner Differences in a Multi-Institutional Study
- [[code-review-genai-cs1]] — Combating Harms of Generative AI in CS1 with Code Review Interviews and a Flipped Classroom
- [[llm-feedback-programming-classroom]] — LLM-Generated Feedback in Introductory Programming: A Classroom Study
- [[llm-student-misconception-identification]] — What Don't You Understand? Using Large Language Models to Identify and Characterize Student Misconceptions About Chal...
- [[llm-student-simulation-misconception-faithfulness]] — Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators
- [[programming-its]] — Programming Intelligent Tutoring Systems
- [[a4l-analytics-pipeline]] — Generalizing a Highly Configurable Analytics Pipeline to Replicate and Support Educational Research Across Multiple D...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
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

## Citation

Keramati, A., Cao, J., Mohammadi, I., Warschauer, M., & Shi, Y. (2026). [Simulating Students' Java Programming Errors with Large Language Models](https://arxiv.org/abs/2606.14113). arXiv:2606.14113.
