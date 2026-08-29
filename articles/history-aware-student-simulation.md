---
title: Who Am I? History-Aware Profiles for Student Simulation in Tutoring Dialogues
created: "2026-05-29T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [intelligent-tutoring, llm, student-experience, learning-analytics, personalized-learning, reinforcement-learning, ai-literacy, rag]
audience: [student experience]
sources: ['raw/papers/2605.30051.md']
confidence: high
---

A key part of developing large language model (LLM)-powered, automated tutoring tools is student simulation, i.e., using LLMs to role-play as students, which can facilitate tutor model evaluation and training. Existing work mostly focuses on within-dialogue simulation, which lacks context on student knowledge and behavior, partly due to not grounding in past student question-answering or dialogue interactions. In this work, we introduce the task of history-conditioned student simulation, where the goal is to accurately predict student dialogue turns by leveraging information in the student's learning history. We propose a two-component framework in which a profile generator summarizes a student's history and a simulator predicts student turns conditioned on the resulting profile. We train both components with reinforcement learning (RL), yielding profiles optimized for faithful student simulation.

- **Beyond within-dialogue simulation:** Duan et al. introduce history-conditioned student simulation, a task where LLM-based student simulators are grounded in past question-answering and dialogue interactions. This moves beyond prior work that simulated students only within a single dialogue context.
- **Two-component RL framework:** A profile generator summarizes a student's learning history into a compact profile, and a simulator predicts student dialogue turns conditioned on that profile. Both components are jointly trained via [[reinforcement-learning]] (if that page exists) to optimize for faithful simulation.
- **Real-world math tutoring dataset:** The paper collects and evaluates on the first-of-its-kind dataset of real student dialogues and question responses from a math learning platform, grounding the work in authentic [[student-experience]] data rather than synthetic proxies.
- **Significant implications for tutor evaluation:** History-aware student simulation enables more realistic evaluation of [[intelligent-tutoring]] systems, allowing developers to test tutor responses against diverse student profiles without requiring live students. This connects to [[kt4eqg-personalized-question-generation]] which also leverages student modeling for personalized learning.
- **RL-optimized profiles** ensure that the compressed student representation captures information most relevant to dialogue prediction, rather than using generic summary metrics. This approach could generalize to other [[learning-analytics]] tasks where student state compression is needed.

## Connected Concepts

- [[reinforcement-learning]]
- [[student-experience]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[simulating-students]]
- [[student-modeling]]
- [[llm]]
## Connected Articles

- [[kt4eqg-personalized-question-generation]]
## Citation

Zhangqi Duan, Shuyan Huang, Alexander Scarlatos, Jaewook Lee, Simon Woodhead, & Andrew Lan (2026). [Who Am I? History-Aware Profiles for Student Simulation in Tutoring Dialogues](https://arxiv.org/abs/2605.30051). arXiv preprint.
