---
title: Who Am I? History-Aware Profiles for Student Simulation in Tutoring Dialogues
created: "2026-05-29T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [ai-literacy]
technology: [intelligent-tutoring, learning-analytics, llm, personalized-learning, rag, reinforcement-learning]
methods: [benchmark]
stakeholders: [student-experience]
research_method: [system development]
audience: [researchers, software developers]
sources: ['raw/papers/2605.30051.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** A key part of developing large language model ([[llm]])-powered, automated tutoring tools is student [[simulation]], i.e., using LLMs to role-play as students, which can facilitate tutor model evaluation and training. Existing work mostly focuses on within-dialogue simulation, which lacks context on student knowledge and behavior, partly due to not grounding in past student question-answering or dialogue interactions. In this work, we introduce the task of history-conditioned student simulation, where the goal is to accurately predict student dialogue turns by leveraging information in the student's learning history. We propose a two-component framework in which a profile generator summarizes a student's history and a simulator predicts student turns conditioned on the resulting profile. We train both components with reinforcement learning (RL), yielding profiles optimized for faithful student simulation.

- **Beyond within-dialogue simulation:** Duan et al. introduce history-conditioned student simulation, a task where LLM-based student simulators are grounded in past question-answering and dialogue interactions. This moves beyond prior work that [[simulating-students|simulated students]] only within a single dialogue context.
- **Two-component RL framework:** A profile generator summarizes a student's learning history into a compact profile, and a simulator predicts student dialogue turns conditioned on that profile. Both components are jointly trained via [[reinforcement-learning]] (if that page exists) to optimize for faithful simulation.
- **Real-world math tutoring dataset:** The paper collects and evaluates on the first-of-its-kind dataset of real student dialogues and question responses from a math learning platform, grounding the work in authentic [[student-experience]] data rather than synthetic proxies.
- **Significant implications for tutor evaluation:** History-aware student simulation enables more realistic evaluation of [[intelligent-tutoring]] systems, allowing developers to test tutor responses against diverse student profiles without requiring live students. This connects to [[kt4eqg-personalized-question-generation]] which also leverages [[student-modeling|student modeling]] for [[personalized-learning|personalized learning]].
- **RL-optimized profiles** ensure that the compressed student representation captures information most relevant to dialogue prediction, rather than using generic summary metrics. This approach could generalize to other [[learning-analytics]] tasks where student state compression is needed.

## What this means for practice

- **Researchers.** Ground simulated students in each learner's prior question-answering records and tutoring dialogues, not just the current conversation — history-conditioned profiles raise dialogue-act and error-matching fidelity over within-dialogue [[simulating-students|simulation]].
- **Designers.** Compress each learner's history into an explicit profile covering knowledge state, misconceptions, dialogue acts, and linguistic style instead of a generic LLM summary; the RL-refined profile (ProfileRL) reached 0.644 on Acts and 0.149 on Errors, significantly above all baselines (p < 0.05).
- **Designers.** Train the profile generator jointly with the simulator, so the compressed [[student-modeling|student model]] retains what actually predicts student turns rather than what reads well as a summary.
- **Researchers.** Report behavior-sensitive metrics alongside text similarity: dialogue-act agreement, response correctness, [[misconceptions|misconception]] match, cosine similarity, and ROUGE-L separate faithful simulation from merely fluent text.
- **Researchers.** Split evaluation across students (80/10/10) when reporting fidelity gains, so the numbers reflect unseen learners rather than memorized individual behavior.

## Limitations

- The evaluation rests on one private math dataset: 1,775 dialogues and 66,705 question-answering records from 670 students on a single learning platform, so cross-domain generalizability is untested.
- Histories are trimmed heuristically to the most recent question-answering records and dialogues because of memory limitations in training; more advanced interaction selection or longer context is left to future work.
- Only turn-level simulation is evaluated. The authors state that assessing how learning histories affect the faithfulness of fully simulated dialogues will require new metrics, and it remains unexamined.
- The authors note a substantial lack of publicly available data containing student learning histories and dialogues, which limits testing the method in other domains such as programming and language learning.

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
