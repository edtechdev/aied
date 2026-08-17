---
title: "ResidencyRL: Reinforcement Learning in Simulated Clinical Environments"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-08-13"
type: article
tags: [reinforcement-learning, simulation, health-education, llm, professional-training, dialogue-tutoring, trust-calibration]
sources: ['raw/papers/2608.07418.md']
confidence: high
---

> **Synthesis:** Liévin et al. (2026) present **ResidencyRL**, a reinforcement learning method for training clinical AI agents through simulated multi-turn clinical encounters (up to 60 dialogue turns and 8 tool calls per trajectory). It pairs the policy agent with LLM simulators capable of complex, adversarial behaviors, training against a structured reward aligned to diagnostic accuracy, management quality, communication, documentation, and safety. On held-out evaluation the agent improves diagnostic accuracy by 7.0% under adversarial conditions (88.0% vs 81.0%) and reduces missed red-flag rates by 31%; blinded expert clinicians preferred it in 87.6% of side-by-side comparisons, and competencies transfer to unseen benchmarks. The work connects to [[reinforcement-learning]], [[simulation]], and [[professional-training]] in health education.

## Learning Clinical Decision Sequences

In medical education, physicians convert academic knowledge into clinical expertise through residency: years of training across thousands of encounters. While LLMs excel on static medical benchmarks, methods to optimize the full sequence of clinical decisions remain underdeveloped. ResidencyRL trains clinical AI agents through simulated multi-turn clinical encounters.

## Method

ResidencyRL pairs the policy agent with LLM simulators capable of complex, adversarial behaviors, training against a structured reward aligned to diagnostic accuracy, management quality, communication, documentation, and safety.

## Findings

On held-out evaluations the agent improves diagnostic accuracy by 7.0% under adversarial conditions (88.0% vs 81.0%) and reduces missed red-flag rates by 31%, demonstrating rigorous mitigation of premature closure. Blinded expert clinicians preferred the trained agent in 87.6% of side-by-side comparisons. Procedural competencies transfer to unseen benchmarks, outperforming the base model across all six clinical axes of the AMIE multi-visit benchmark with consistent directional improvements on AgentClinic and CRAFT-MD.

## Connected Concepts

- [[reinforcement-learning]]
- [[simulation]]
- [[professional-training]]
- [[llm]]
- [[ai-tutoring]]
- [[trust-calibration]]
- [[cognitive-diagnosis]]
- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]

## Connected Articles

- [[tibetcpr-ai-training-feedback]]
- [[astra-atco-training-simulator]]
- [[medgame-llm-medical-education-gamification]]
- [[ai-use-critical-thinking-medical-students-2026]]
- [[pedagogical-safety-rl]]
- [[hazra-safetutors-pedagogical-safety-2026]]

## Citation

Liévin, V., Schmidgall, S., Strother, T., Bijamov, A., Goel, A., Palepu, A., et al. (2026). [*ResidencyRL: Reinforcement learning in simulated clinical environments*](https://arxiv.org/abs/2608.07418). arXiv:2608.07418.
