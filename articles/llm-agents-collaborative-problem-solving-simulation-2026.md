---
title: "Modelling Individual Participants as LLM Agents in Collaborative Problem Solving Simulations"
created: "2026-09-01T12:00:00-04:00"
updated: "2026-09-01T12:00:00-04:00"
type: article
sources: ["raw/papers/llm-agents-collaborative-problem-solving-simulation-2026.md"]
tags: ["llm", "agentic-ai", "problem-solving", "network-analysis", "simulating-students", "learning-analytics"]
confidence: medium
---

## Overview

Fang presents a framework for simulating [[problem-solving|collaborative problem solving]] (CPS) by fine-tuning large language model (LLM) agents to represent individual human participants. Each agent is personalised on real participant dialogue via parameter-efficient fine-tuning (LoRA/QLoRA) of the [[open-source]] LLaMA 3.2–3B model, capturing individual speaking style and thematic patterns, and the agents then interact in decentralised multi-agent dialogues with a memory mechanism and probabilistic turn-taking. The fidelity of these [[simulating-students|simulations]] is validated with [[network-analysis|Epistemic Network Analysis]] (ENA), a [[learning-analytics|learning-analytics]] tool that compares the structural co-occurrence of thematic codes between real and simulated dialogues, demonstrating that participant-specific [[agentic-ai|LLM agents]] can reproduce realistic collaborative discourse.

## Key Findings

- **Statistically indistinguishable simulated dialogue** — the simulated adjacency vectors achieved an ENA distance of **0.17** from the empirical network, well below the 95th percentile threshold (0.30) of the null distribution, with a permutation-test p-value of **0.65**, indicating real and simulated dialogues are statistically indistinguishable.
- **Participant-specific PEFT is feasible at scale** — each of 48 participants (3,824 turns, six thematic codes) was modelled with a personalised [[llm|LLM]] agent via QLoRA adapters (rank 16), shrinking per-participant storage from gigabytes to a few megabytes while sharing frozen base weights.
- **Reproduced turn-taking and thematic trajectories** — a decentralised mechanism (each agent scores the past four turns to compete for the next speaker) plus a blended thematic-code selection (λ = 0.6 LLM classifier, 0.4 first-order Markov transition matrix) preserved realistic turn-taking and code trajectories.
- **Ablation confirms each component contributes** — removing long-term memory raised ENA distance to 0.24 (p = 0.38); removing Markov blending (λ = 1) to 0.28 (p = 0.19); and a Swiecki-style Markov baseline to 0.41 (p = 0.04), showing the LLM agents genuinely add structural fidelity.
- **Reproduced the core reasoning triad** — both real and simulated networks showed strong connections among Technical Constraints, Design, and Data, though the simulation slightly overemphasised Technical Constraints–Design links and underrepresented Data and Performance Parameters.
- **Preliminary linguistic fidelity** — across illustrative turns, ROUGE-L averaged 0.34 (±0.14) and domain-vocabulary retention was 1.00, with simulated turn length (18.4 words) close to real turns (15.6), confirming naturalistic paraphrase that preserves domain terminology.

## Implications for Practice

- **Expanded [[simulating-students|learner simulation]] for education** — simulated CPS environments can expose students to rare or challenging team compositions (e.g. dominant speakers, disengaged participants) without recruiting real teams, valuable in online and hybrid learning where synchronous teamwork is logistically constrained.
- **Safe, scalable high-stakes training** — in domains such as military command, surgical teams, and emergency response, LLM-based simulation offers a low-cost, [[ethics|ethical]] alternative for generating training scenarios and stress-testing communication protocols.
- **Controlled counterfactual [[research-methods-aied|research]]** — replacing individual agent parameters enables questions impossible with observational data alone, such as how a stronger tendency toward data-referencing in one participant changes team discourse, isolating causal effects of communicative behaviours.
- **Synthetic data for [[learning-analytics|NLP and analytics]]** — the framework can generate large volumes of structurally valid synthetic CPS dialogue for pre-training or data augmentation, reducing dependence on scarce, expensive human-annotated corpora.

## Connected Concepts

- [[problem-solving]]
- [[agentic-ai]]
- [[llm]]
- [[simulating-students]]
- [[network-analysis]]
- [[learning-analytics]]
- [[simulation]]

## Connected Articles

- [[llm-agents-5e-esl-grammar-2026]] — LLM-based agents designed to support learners, here for ESL grammar acquisition
- [[student-ai-conversations-cognitive-engagement-2026]] — student–AI conversations as process-level signals of cognitive engagement
- [[conversational-agents-business-simulation-gaming-2026]] — conversational agents providing adaptive instructional support within simulation-based learning
- [[self-directed-growth-generative-ai-learning-analytics]] — a learning-analytics framework for generative AI in self-directed learning

## Citation

[Modelling individual participants as LLM agents in collaborative problem solving simulations](https://www.sciencedirect.com/science/article/pii/S2666920X2600055X) — Fang, Z. (2026). *Computers and Education: Artificial Intelligence*, 10, 100593.
