---
title: Modularizing Educational LLM-Agency for Fostering Responsible Learning Assistance
created: "2026-05-29T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [ai-literacy, cognitive-offloading, teacher-role]
pedagogy: [scaffolding]
technology: [intelligent-tutoring, learning-analytics, llm]
research_method: [system development, theoretical analysis]
audience: [instructors, learners]
sources: ['raw/papers/2605.30187.md']
confidence: high
page_kind: [framework]
---

> **Synthesis:** The widespread adoption of AI [[conversational-ai|chatbots]] in education will drastically change learning, making responsible deployment a critical concern. While [[llm|large language models (LLMs)]] might have access to sources discussing insights from educational sciences, they are not particularly inclined to adhere to [[pedagogy|pedagogical]] concepts, risking negative effects on the learning process, such as a loss of transfer capabilities, [[critical-thinking|critical thinking]], or [[creativity]]. In this paper, we introduce an [[agentic-ai|agentic AI]] chatbot architecture assisting students with exercise solving, specifically designed to contribute to more [[ai-literacy|responsible AI use]] in education. We base our conceptual development on the identification of several desiderata for responsible LLM-based educational systems, argue for the structural shortcomings inherent in monolithic, out-of-the-box solutions, and instead suggest modularizing the agentic architecture.

- **Modular over monolithic:** Gabelmann et al. argue that monolithic, out-of-the-box LLM solutions structurally impede responsible deployment in education because LLMs lack inherent pedagogical discipline. They propose modularizing the agentic architecture into stage-specific components for exercise solving, each capable of incorporating targeted pedagogical advice.
- **Pedagogical desiderata:** The paper derives formal requirements (desiderata) for responsible LLM-based educational systems, arguing that systems must be controllable, transparent, and overseeable. This directly addresses [[cognitive-offloading|Over-Reliance]] risks identified in studies showing that brief AI assistance impairs independent performance.
- **Stage-specific scaffolding:** The modular architecture decomposes exercise-solving assistance into distinct stages — each module can enforce [[scaffolding]] strategies appropriate to that stage, preventing the [[correct-answer-trap-ai-tutor]] where LLM tutors fail to detect [[misconceptions]] when students arrive at correct answers via flawed reasoning.
- **Accepted at AISoLA 2025** under the Responsible and Trusted AI track, positioning this work at the intersection of formal methods for AI safety and [[intelligent-tutoring]] system design. The modular approach resonates with calls for [[agentic-literacy-debt]] frameworks that ensure agent deployments are accompanied by appropriate [[governance]].
- **Teacher-in-the-loop design:** The architecture preserves a [[teacher-role]] by making the system's pedagogical decisions observable and auditable, rather than black-box. This connects to work on [[rubric-aware-grading-rec-cbm]] which similarly emphasizes interpretability in educational AI.

## What this means for practice

- **Instructors.** Choose or build tutoring tools that route each request to a task-specific module — a hint generator that withholds the solution, a concept explainer, a correctness checker, and a boundary-keeping fallback — rather than one general-purpose chatbot prompt in which every pedagogical role competes.
- **Designers.** Make each response traceable to the module that produced it: MALA requires a hidden reasoning step (classifying a student's partial solution as correct, incorrect, or partially correct) before the visible reply, so a bad [[scaffolding|scaffold]] can be corrected in one module without disturbing the others.
- **Instructors.** Require guidance over answers. The paper's hint module refused to provide the full solution even when a user pressed with escalating urgency and claimed they would otherwise fail the course.
- **Learners.** Ask for the next step, or submit your own partial solution for checking, instead of requesting the finished answer — the feedback module is built to evaluate your reasoning and explain the logic behind a correction.
- **Administrators.** Treat modularity as an oversight requirement, not just a design taste: it is what lets a reviewer see why a particular [[intelligent-tutoring|tutoring]] intervention was selected and intervene at a fine-grained level.

## Limitations

- The empirical evidence comes from one observational deployment: the final three weeks of a single statistics lecture for undergraduate computer scientists, covering 62 distinct usernames and 128 initiated conversations on one GPT-4o-based prototype.
- There is no control group. The authors explain that withholding a potentially beneficial tool to create one raises fairness concerns, forcing observational designs, and that voluntary participation introduces self-selection bias.
- Engagement, not learning, is what was measured: 95 of the conversations were judged genuine learning attempts by automated GPT-5 analysis and 63% were resolved or partially resolved, but only 97 chats were multi-turn and no relationship to course performance is established.
- Linking interaction logs to exam data required explicit informed consent, which the authors state can significantly limit the sample size and demographic representativeness, and they describe the deployment as promising qualitative evidence needing larger-scale evaluation that accounts for motivational biases.

## Connected Concepts

- [[cognitive-offloading]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[teacher-role]]
- [[agentic-ai]]
- [[llm]]
## Connected Articles

- [[correct-answer-trap-ai-tutor]]
- [[agentic-literacy-debt]]
- [[rubric-aware-grading-rec-cbm]]
## Citation

Julius Gabelmann, Felix Jahn, Kevin Baum, Sophie van Rossum, Emely Wuenscher, Timo P. Gros, & Verena Wolf (2026). [Modularizing Educational LLM-Agency for Fostering Responsible Learning Assistance](https://arxiv.org/abs/2605.30187). AISoLA 2025 (Track: Responsible and Trusted AI).
