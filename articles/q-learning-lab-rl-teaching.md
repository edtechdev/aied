---
title: "Q-Learning Lab: Teaching Reinforcement Learning Through Learner-Generated Trace Analysis"
created: "2026-07-14T04:33:04-04:00"
updated: "2026-08-24T20:30:00-04:00"
type: article
tags: [active-learning, higher-ed, reinforcement-learning, stem-education, self-regulated-learning, scaffolding, llm]
sources: ['raw/papers/2607.10802.md']
confidence: medium
---

> Presents Q-Learning Lab, a single-file tool that makes the Bellman update concrete by letting undergraduates inspect how each value is computed and why actions are chosen, through learner-generated trace analysis. It addresses the abstraction gap where students watch policy convergence without understanding mechanism.

A [[reinforcement-learning]] artifact grounded in [[active-learning]] and [[stem-education]] for [[higher-ed]]. It connects to [[self-regulated-learning]] by making the learning process observable, and to [[scaffolding]] of difficult quantitative concepts, offering a reproducible teaching tool for ML/RL courses.

## Key Findings

- Q-Learning Lab is a single-file, browser-based, bilingual (Thai/English) tool for teaching tabular Q-learning that requires no installation and no network connection.
- Beyond the usual gridworld visualization — color-coded Q-values and policy arrows on a 5×5 world — a live Bellman-substitution panel shows the numeric update at every step.
- Each transition is logged, including the full pre-action Q-row, the greedy-versus-random decision under ε-greedy exploration, and wall-collision events, into an exportable trace.
- The central contribution is a learn–export–analyze loop: learners run their own agent, export the complete trace as CSV, and analyze it themselves, producing learning curves, value heatmaps, and visitation maps that turn a passive demonstration into learner-generated data for reflective inquiry.
- A reward-editing study separates two behaviorally identical but diagnostically opposite failure modes — an exploration failure versus genuine reward misspecification — that a single edited reward can produce.

## Study Design & Method

The tool was validated without human-subject data through three complementary evaluations: (i) correctness of the learned values and policy against a value-iteration ground truth on the identical MDP; (ii) hyperparameter sweeps over α, γ, and ε demonstrating that every pedagogical claim the tool makes is reproducible; and (iii) a reward-editing study in which editing the pit reward produced distinct failure modes: with a pit reward of +5 the optimal policy still reaches the goal (V*(s0)=6.38), yet Q-learning converges to the pit in 10/10 seeds — an exploration failure — whereas with a pit reward of +20 (above the 7.774 threshold) the optimal policy genuinely prefers the pit (V*(s0)=16.86) and Q-learning agrees in 10/10 seeds — true reward misspecification. The paper also situates the tool against existing gridworld visualizers via a feature comparison, grounds it in learning-by-doing pedagogy, and includes a 50-minute lesson plan; the tool and all experiment code are openly available.

## Implications for AI in Education

Reinforcement learning is usually introduced through the Bellman update, yet the equation often remains abstract to undergraduates: they watch policy arrows converge but rarely observe how each value is computed or why an action is chosen. By making the numeric update and every decision visible and exportable, Q-Learning Lab supports [[self-regulated-learning]] and reflective inquiry in quantitative courses, and its learn–export–analyze loop gives instructors a reproducible way to diagnose common student confusions — such as conflating exploration failure with reward misspecification — that surface only when learners analyze their own agent's traces.

## Connected Concepts

- [[reinforcement-learning]]
- [[active-learning]]
- [[stem-education]]
- [[higher-ed]]
- [[self-regulated-learning]]
- [[scaffolding]]
- [[math-education]]
- [[experiential-learning]]
## Connected Articles

- [[multi-site-vr-immersive-learning]] — Design and Implementation of a Real-time Multi-site Immersive Learning System Using Photon Fusion
- [[llm-automated-assessment-student-self-explanations]] — Exploring the Effectiveness of Using LLMs for Automated Assessment of Student Self Explanations in Programming Education
- [[forap-pjbl-computing-education]] — Adoption-Ready Project-Based Learning for Computing Education: The FORAP Framework and a Multi-Scale Project Portfolio
- [[llm-fallacy-misattribution]] — The LLM Fallacy and Misattribution of Competence
- [[epistemic-proactivity-math]] — From Prompting to Epistemic Proactivity: Temporal Trajectories of Student-AI Interaction in Mathematics Learning

## Citation

Ekkachai Jueng (2026). [Q-Learning Lab: Teaching Reinforcement Learning Through Learner-Generated Trace Analysis](https://arxiv.org/abs/2607.10802). arXiv:2607.10802. arXiv preprint.
