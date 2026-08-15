---
title: Modularizing Educational LLM-Agency for Fostering Responsible Learning Assistance
created: 2026-05-29
updated: 2026-05-29
type: article
tags: [llm, intelligent-tutoring, scaffolding, teacher-role, over-reliance, learning-analytics, student-experience, ai-literacy]
sources: ['raw/papers/2605.30187.md']
confidence: high
---

The widespread adoption of AI chatbots in education will drastically change learning, making responsible deployment a critical concern. While large language models (LLMs) might have access to sources discussing insights from educational sciences, they are not particularly inclined to adhere to pedagogical concepts, risking negative effects on the learning process, such as a loss of transfer capabilities, critical thinking, or creativity. In this paper, we introduce an agentic AI chatbot architecture assisting students with exercise solving, specifically designed to contribute to more responsible AI use in education. We base our conceptual development on the identification of several desiderata for responsible LLM-based educational systems, argue for the structural shortcomings inherent in monolithic, out-of-the-box solutions, and instead suggest modularizing the agentic architecture.

- **Modular over monolithic:** Gabelmann et al. argue that monolithic, out-of-the-box LLM solutions structurally impede responsible deployment in education because LLMs lack inherent pedagogical discipline. They propose modularizing the agentic architecture into stage-specific components for exercise solving, each capable of incorporating targeted pedagogical advice.
- **Pedagogical desiderata:** The paper derives formal requirements (desiderata) for responsible LLM-based educational systems, arguing that systems must be controllable, transparent, and overseeable. This directly addresses [[over-reliance]] risks identified in studies showing that brief AI assistance impairs independent performance.
- **Stage-specific scaffolding:** The modular architecture decomposes exercise-solving assistance into distinct stages — each module can enforce [[scaffolding]] strategies appropriate to that stage, preventing the [[correct-answer-trap-ai-tutor]] where LLM tutors fail to detect misconceptions when students arrive at correct answers via flawed reasoning.
- **Accepted at AISoLA 2025** under the Responsible and Trusted AI track, positioning this work at the intersection of formal methods for AI safety and [[intelligent-tutoring]] system design. The modular approach resonates with calls for [[agentic-literacy-debt]] frameworks that ensure agent deployments are accompanied by appropriate governance.
- **Teacher-in-the-loop design:** The architecture preserves a [[teacher-role]] by making the system's pedagogical decisions observable and auditable, rather than black-box. This connects to work on [[rubric-aware-grading-rec-cbm]] which similarly emphasizes interpretability in educational AI.

## Connected Concepts

- [[over-reliance]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[teacher-role]]
## Connected Articles

- [[correct-answer-trap-ai-tutor]]
- [[agentic-literacy-debt]]
- [[rubric-aware-grading-rec-cbm]]
## Citation

Julius Gabelmann, Felix Jahn, Kevin Baum, Sophie van Rossum, Emely Wuenscher, Timo P. Gros, & Verena Wolf (2026). [Modularizing Educational LLM-Agency for Fostering Responsible Learning Assistance](https://arxiv.org/abs/2605.30187). arXiv:2605.30187. AISoLA 2025 (Track: Responsible and Trusted AI).
