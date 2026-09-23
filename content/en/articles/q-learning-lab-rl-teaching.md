---
title: "Q-Learning Lab: Teaching Reinforcement Learning Through Learner-Generated Trace Analysis"
created: "2026-07-14T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
pedagogy: [active-learning, scaffolding, self-regulated-learning]
technology: [llm, reinforcement-learning, visualization]
research_method: [system development]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/2607.10802.md']
confidence: medium
audience: [instructors, learners]
---

> **Synthesis:** Presents Q-Learning Lab, a single-file tool that makes the Bellman update concrete by letting undergraduates inspect how each value is computed and why actions are chosen, through learner-generated trace analysis. It addresses the abstraction gap where students watch policy convergence without understanding mechanism.

A [[reinforcement-learning]] artifact grounded in [[active-learning]] and [[stem-education]] for [[higher-ed]]. It connects to [[self-regulated-learning]] by making the learning process observable, and to [[scaffolding]] of difficult [[quantitative-research|quantitative]] concepts, offering a reproducible [[teacher-role|teaching]] tool for ML/RL courses.

## Key Findings

- Q-Learning Lab is a single-file, browser-based, [[multilingual-learning|bilingual]] (Thai/English) tool for teaching tabular Q-learning that requires no installation and no network connection.
- Beyond the usual gridworld [[visualization]] — color-coded Q-values and policy arrows on a 5×5 world — a live Bellman-substitution panel shows the numeric update at every step.
- Each transition is logged, including the full pre-action Q-row, the greedy-versus-random decision under ε-greedy exploration, and wall-collision events, into an exportable trace.
- The central contribution is a learn–export–analyze loop: learners run their own agent, export the complete trace as CSV, and analyze it themselves, producing learning curves, value heatmaps, and visitation maps that turn a passive demonstration into learner-generated data for reflective inquiry.
- A reward-editing study separates two behaviorally identical but diagnostically opposite failure modes — an exploration failure versus genuine reward misspecification — that a single edited reward can produce.

## Study Design & Method

The tool was validated without human-subject data through three complementary evaluations: (i) correctness of the learned values and policy against a value-iteration ground truth on the identical MDP; (ii) hyperparameter sweeps over α, γ, and ε demonstrating that every [[pedagogy|pedagogical]] claim the tool makes is reproducible; and (iii) a reward-editing study in which editing the pit reward produced distinct failure modes: with a pit reward of +5 the optimal policy still reaches the goal (V*(s0)=6.38), yet Q-learning converges to the pit in 10/10 seeds — an exploration failure — whereas with a pit reward of +20 (above the 7.774 threshold) the optimal policy genuinely prefers the pit (V*(s0)=16.86) and Q-learning agrees in 10/10 seeds — true reward misspecification. The paper also situates the tool against existing gridworld visualizers via a feature comparison, grounds it in learning-by-doing pedagogy, and includes a 50-minute lesson plan; the tool and all experiment code are openly available.

## What this means for practice

- **Instructors.** Assign the learn–export–analyze loop rather than a demonstration: have students run their own agent, export the CSV trace, and build learning curves, value heatmaps, and visitation maps from their own data, so the analysis is learner-generated rather than shown.
- **Instructors.** Run the two-regime reward-editing exercise in class: a pit reward of +5 leaves the optimal policy reaching the goal (V*(s0) = 6.38) while Q-learning converges to the pit in 10/10 seeds, whereas +20 makes pit-seeking genuinely optimal (V*(s0) = 16.86) with agreement in 10/10 seeds, and only a Bellman-optimal cross-check separates the two.
- **Instructors.** Use the live Bellman-substitution panel to make the numeric update concrete, and have students predict the greedy-versus-random decision before each step executes, since the trace logs the full pre-action Q-row for every transition.
- **Learners.** Verify before labeling: before calling a pit-seeking agent an example of reward hacking, compute the Bellman-optimal policy on the same MDP, because identical behavior can come from an under-optimized agent or from a badly specified objective.
- **Instructors.** Present the 5×5 world as a first encounter and not as evidence about hyperparameters, since most settings eventually succeed on a deterministic grid; lean on the vivid failures (γ = 0, pit-seeking) and say plainly that the small MDP compresses contrasts.

## Limitations

- The tool was validated entirely without human-subject data — correctness against value-iteration ground truth on the identical MDP, hyperparameter sweeps over α, γ, and ε, and a reward-editing study at 10 seeds per regime — so the evaluation establishes algorithmic fidelity and reproducibility but no student learning gains, and the classroom study with a pre/post concept inventory is deferred.
- Scope is deliberately narrow: tabular Q-learning on a deterministic, fully observable, single-agent 5×5 gridworld, with stochastic transitions, function approximation, continuing tasks, and multi-agent settings out of scope by design.
- The small MDP produces ceiling effects — most hyperparameter settings, including all tested α values, converge — so the tool should not be presented as evidence that hyperparameters do not matter.
- The on-screen trace keeps only the latest 500 steps and fast-training mode skips logging, so long training runs are only partially traced.

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

Ekkachai Jueng (2026). [Q-Learning Lab: Teaching Reinforcement Learning Through Learner-Generated Trace Analysis](https://arxiv.org/abs/2607.10802). arXiv preprint.
