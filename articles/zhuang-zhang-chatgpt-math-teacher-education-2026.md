---
title: "Integrating ChatGPT in Mathematics Teacher Education: AI-Based Simulation Role-Playing to Support Practice-based Teaching"
created: "2026-09-03T15:00:00-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
foundations: [teacher-role]
technology: [generative-ai, pedagogical-llm-training, simulating-students, simulation]
pedagogy: [professional-training]
sources: ['raw/papers/zhuang-zhang-chatgpt-math-teacher-education-2026.md']
confidence: high
research_method: [system development]
discipline: [math education]
audience: [teacher educators, instructional designers]
level: [teacher education]
page_kind: [framework]
methods: [qualitative-research]
---

> **Synthesis:** This study designed *Student GPT*, a custom ChatGPT-based chatbot that role-plays a middle school student holding common misconceptions in ratio reasoning, giving preservice secondary mathematics teachers low-risk, personalized practice-based teaching experience in [[math-education|mathematics education]]. Analyzing teacher–bot chat histories through an inductive qualitative coding framework (the Affective, Communicative, Technical "ACT" framework), the authors found the simulated student performed well on clarity, relevance, error types, knowledge, and consistency, but struggled with authentic student tone and role confusion. The work demonstrates how [[generative-ai]] can power [[simulation]] role-playing to support [[teacher-education]] practice-based teaching.

## Key Findings

- Researchers built a customized [[pedagogical-llm-training|AI-based role-play simulation]] using the OpenAI custom-GPT feature, prompting it to emulate a middle schooler struggling with ratio concepts; a refined prompt (Prompt B) that specified three literature-grounded misconceptions — confusing additive and multiplicative reasoning, lacking [[problem-solving|covariational thinking]], and over-relying on a single strategy — far more reliably elicited conceptual errors than a broad algebra prompt (misconception presence 0.98 vs. 0.40; χ²(1, N=200)=78.64, p<.001).
- Five preservice [[teacher-education|secondary mathematics teachers]] interacted individually with Student GPT on the Orange Juice Problem in a methods course, diagnosing the simulated student's misconceptions and guiding it toward correct ratio solutions.
- Using an inductive [[qualitative-research|qualitative content analysis]] of the chat histories, the authors developed and applied an original Affective, Communicative, Technical (ACT) coding framework for systematically assessing the chatbot's [[teacher-role|role-play]] simulation behaviors, strengths, and weaknesses.
- In the [[student-ai-interaction|affective domain]], Student GPT reliably used positive, accepting, and encouraging language and stayed on task, but also voiced negative attitudes toward mathematics ("Math can be tricky") that preservice teachers sometimes echoed, raising concerns about impacts on their mathematical identity.
- In the communicative domain, responses were clear and topically relevant, but the simulated student's language was often more teacher-like than student-like — formal, compound-complex, redundant, and prone to restating — reducing the authenticity of the [[simulation|simulated]] conversational exchanges.
- In the technical domain, the bot correctly embodied the three target misconceptions and age-appropriate knowledge, but it learned new strategies unrealistically fast (grasping approaches in a single turn) while inconsistently struggling with a common-denominator strategy, and it periodically switched roles between struggling student, competent student, and teacher (role confusion).
- The authors conclude that despite these authenticity limitations, Student GPT is an affordable, easily customizable, content-specific complement to costly platforms (e.g., TeachLivE™) for building preservice teachers' [[tpack|pedagogical content knowledge]] about student misconceptions, aligning with the decomposition and "approximations of practice" from [[professional-training|practice-based theory of teacher learning]].

## What this means for practice

- **Instructors.** Name the misconceptions in the prompt instead of describing a generic struggling student: the broad algebra prompt elicited misconceptions in 0.40 of responses, whereas the ratio-specific prompt with three literature-grounded misconceptions reached 0.98 (χ²(1, N = 200) = 78.64, p < .001).
- **Instructors.** Compensate for the simulated student's unrealistic learning curve: Student GPT grasped new strategies in a single turn and usually followed instructions without asking follow-up questions, so add pacing constraints to the role-play prompt or debrief the difference with preservice teachers.
- **Instructors.** Debrief the moments when the bot slips roles. It mixed struggling-student, competent-student, and teacher voices and used formal, compound-complex language, which reduced the authenticity of the exchange; having preservice teachers flag those turns is itself a useful exercise.
- **Instructors.** Watch for mirrored math attitudes: Student GPT voiced negative attitudes toward mathematics ("Math can be tricky") that preservice teachers sometimes echoed, which the authors flag as a concern for mathematical identity.
- **Designers.** Use the ACT framework (Affective, Communicative, Technical) as a reusable rubric for evaluating any [[simulation|role-play simulation]] against clarity, relevance, error types, knowledge, and consistency before scaling it in a methods course.

## Limitations

- The analysis rests on five preservice secondary mathematics teachers: the methods-course cohort had six, but one (PSMT6) missed the second session and was excluded from the data, and all participants came from a single public state university across two 1-hour-50-minute class sessions.
- The prompt is an acknowledged confound — Prompt A yielded misconceptions in 0.40 of responses versus 0.98 for Prompt B — and the authors state their prompts may not be comprehensive enough for authentic role-playing, so the findings on language, acquisition, and role confusion may be prompt artifacts.
- The data set is small, as the authors state, and no learning outcomes were measured; the sessions tracked only qualitative dimensions of the chat histories through inductive coding by two raters (percent agreement between the raters ranged from 0.88 to 1 across the assessment aspects).
- The simulation's own weaknesses bound what it can teach: it learned new strategies in a single turn, was inconsistent with the common-denominator strategy for reasons the authors cannot yet explain, and periodically confused student and teacher roles.

## Connected Concepts

- [[teacher-education]]
- [[math-education]]
- [[simulation]]
- [[generative-ai]]
- [[teacher-role]]
- [[pedagogical-llm-training]]
- [[professional-training]]

## Connected Articles

- [[llm-student-simulation-teacher-insights]]
- [[simulating-students-llm-review-2026]]
- [[valid-student-simulation-llm-2026]]
- [[ai-tpack-preservice-math-teachers]]
- [[mathematics-teachers-chatbot-motivation-2026]]

## Citation

Zhuang, Y., & Zhang, S. (2025). [Integrating ChatGPT in Mathematics Teacher Education: AI-Based Simulation Role-Playing to Support Practice-based Teaching](https://doi.org/10.1007/s40593-025-00519-0). *International Journal of Artificial Intelligence in Education*, 35, 3873–3895.
