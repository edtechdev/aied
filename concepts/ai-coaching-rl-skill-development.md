---
title: AI Coaching for Accelerating Human Skill Development with Reinforcement Learning
created: 2026-06-25
updated: 2026-06-25
type: concept
tags: [intelligent-tutoring, personalized-learning, scaffolding, adaptive-learning, professional-training]
sources: [raw/papers/2606.25337.md]
confidence: medium
---

# AI Coaching for Accelerating Human Skill Development with Reinforcement Learning

**Wang, Gu, Loquercio, Hu & Mangharam (2026)** — University of Pennsylvania. cs.RO, cs.AI, cs.HC.
📄 [Full text (arXiv)](https://arxiv.org/abs/2606.25337)

This paper explores how an embodied AI agent can act as a [[scaffolding|coach]] that accelerates human motor-skill development using [[adaptive-learning|reinforcement learning]]. The authors argue that effective coaching requires dynamically balancing guidance with learner autonomy — too much assistance leads to [[over-reliance]] and skill atrophy, while too little leaves learners struggling.

**Key findings:**
- An RL-based coaching policy that adapts its level of intervention to the learner's current skill level significantly accelerates skill acquisition compared to static assistance levels.
- The AI coach that gradually fades scaffolding (consistent with [[scaffolding]] theory in [[intelligent-tutoring]]) produced the best long-term retention and transfer performance.
- Over-reliance emerged when the coach provided excessive intervention, confirming the [[over-reliance]] concern documented in [[generative-ai]] tutoring contexts.

**Implications:**
- RL-based coaching offers a principled framework for [[personalized-learning|personalized]] skill development in domains beyond traditional academics (e.g., surgical training, [[professional-training]], [[stem-education|STEM lab skills]]).
- The competence-based fading policy mirrors established pedagogical best practices, suggesting [[formative-assessment]] signals can drive AI coaching adaptation.
- Extends [[ai-tutor-safety-harms|AI safety in tutoring]] research to embodied/motor skill domains.

## Related Pages
- [[scaffolding]] — Dynamic fading of support as competence increases
- [[adaptive-learning]] — RL-based adaptation in learning systems
- [[over-reliance]] — Risk of excessive AI assistance
- [[intelligent-tutoring]] — Core ITS principles applicable to coaching
- [[professional-training]] — Motor skill training applications
- [[personalized-learning]] — Competence-adaptive instruction
- [[ai-tutor-safety-harms]] — Over-assistance and student autonomy

## Citation
**APA:** Wang, W., Gu, E., Loquercio, A., Hu, H., & Mangharam, R. (2026). AI Coaching for Accelerating Human Skill Development with Reinforcement Learning. arXiv:2606.25337. cs.RO.
