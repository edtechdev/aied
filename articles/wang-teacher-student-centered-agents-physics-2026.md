---
title: "Comparing teacher-centered and student-centered agents based on prompt engineering: Effects on learning performance, cognitive load, flow experience, and empathy perception in physics learning"
created: "2026-09-10T16:02:00-04:00"
updated: "2026-09-10T16:02:00-04:00"
type: article
tags: [physics-education, pedagogical-agent, prompt-engineering, generative-ai, llm, intelligent-tutoring, motivation, student-engagement, affective-computing, student-ai-interaction]
research_method: [experiment, quantitative]
discipline: [physics education]
audience: [learners, instructors, researchers]
level: [secondary]
category: [instructional design]
sources: ['raw/papers/wang-teacher-student-centered-agents-physics-2026.md']
confidence: high
---

> **Teacher-centered versus student-centered LLM agents in physics learning** — Wang et al. (2026) build two prompt-engineered agents on the Coze platform (both powered by DeepSeek R1 at temperature 0.3) and compare them in a two-question conceptual physics task. The **teacher-centered agent** answers as an authoritative expert working from a bounded textbook knowledge source; the **student-centered agent** is configured as an empathic [[teacher-role|teacher]] with [[pedagogy|pedagogical]] content knowledge, diagnosing [[misconceptions]], explaining from the student's perspective, and closing each round by checking comprehension. The student-centered condition produced higher post-test scores (9.67 vs. 7.93), lower extraneous [[cognitive-offloading|cognitive load]] (8.33 vs. 10.76) and higher germane load (14.27 vs. 12.62), stronger flow experience (43.73 vs. 37.97), and higher empathy perception (21.27 vs. 18.24) — evidence that **agent role design, not just model capability, shapes learning and affect** in AI-supported science learning.

## Overview

[[llm|Large language models]] answer many educational questions fluently but still struggle to produce accurate, coherent explanations for [[physics-education|physics]] problems, which demand conceptual reasoning and multistep analysis. [[prompt-engineering|Prompt engineering]] is the practical lever: role, skill, and constraint instructions steer what the model does. Prior work has mainly tested *expert* agents, leaving other role designs — notably a [[pedagogical-agent|student-centered agent]] — empirically unexamined. This study compares a teacher-centered and a student-centered agent on four outcomes: learning performance, cognitive load, flow experience, and empathy perception.

## The two agents

Both agents were built on Coze with chain-of-thought guidance and the same foundation model, so the comparison isolates the prompt design.

- **Teacher-centered agent** — an experienced physics teacher with deep subject knowledge. Its skills are analysing the question context, providing solutions, and offering supplementary examples. Its constraints: responses must be accurate and credible, grounded in a bounded knowledge source of Ministry of Education-approved electronic textbooks (with explicit acknowledgement when a question falls outside that boundary), explained from an instructor's perspective, and concise and structured with no extraneous content. The authors note these constraints were intended to reduce [[hallucination-risk|hallucination]] without guaranteeing accuracy.
- **Student-centered agent** — a physics teacher with empathic capability, configured around pedagogical content knowledge and specifically *knowledge of students' understanding*: the ability to diagnose comprehension levels and common misconceptions. Its scripted moves are "You have this question because…" (analyzing the cause of the misconception), "This question involves…" (naming the relevant concept), and "This phenomenon is similar to…, also because…" (transferring to a new real-world situation). Explanations come from the student's perspective, interaction is prioritized, and the style is deliberately friendly.

## Method

- **Participants:** 63 high school graduates from a southeastern Chinese province, all recent National College Entrance Examination takers ranked within the top 20.4% provincially (20 male, 43 female); none had prior formal instruction on [[agentic-ai|AI agents]] or LLMs.
- **Materials:** two conceptual multiple-choice items — which of two unequal candles in a closed glass box extinguishes first, and how air-conditioner airflow direction affects temperature uniformity in a sealed room. A pilot with 113 comparable students found only 32.86% accuracy on the candle item, confirming it targets a genuine reasoning gap.
- **Design:** assignment by the parity of ID-number last digit (32 teacher-centered, 31 student-centered); a 10-minute independent pretest, roughly 20 minutes of dialogue with the assigned agent, then post-test and questionnaires. Four students who did not provide personal information in the post-test were excluded, leaving **59 analysed**.
- **Instruments:** the two questions as a knowledge test (5 points per correct answer), plus scales for cognitive load (three dimensions, Cronbach's α = 0.857), flow experience (enjoyment, engagement, control), and empathy perception. Non-normal distributions (Kolmogorov–Smirnov p < 0.01) led to Mann–Whitney U and Wilcoxon signed-rank tests for the knowledge test.

## Results

- **Learning performance.** Pretest scores did not differ (student-centered 5.83, SD 3.24; teacher-centered 5.86, SD 3.01; U = 435, Z = 0.000, p = 1.000). Both conditions improved significantly — student-centered Z = −4.07, p < 0.001, r = 0.76; teacher-centered Z = −3.21, p < 0.01, r = 0.59 — but the student-centered condition finished higher at post-test (9.67, SD 1.27 vs. 7.93, SD 2.84; U = 298, Z = 2.89, p < 0.01, r = 0.38, a moderate advantage).
- **Cognitive load.** Intrinsic load did not differ (t = −0.57, p = 0.58, d = −0.15). The student-centered condition reported **lower extraneous load** (8.33 vs. 10.76; t = −2.84, p = 0.01, d = −0.74) and **higher germane load** (14.27 vs. 12.62; t = 2.16, p = 0.04, d = 0.56) — less wasted effort, more effortful schema-building.
- **Flow experience.** Total flow was higher in the student-centered condition (43.73 vs. 37.97; t = 3.54, p = 0.003, d = 0.92), driven by enjoyment (15.17 vs. 12.66; d = 1.00), engagement (13.13 vs. 11.76; d = 0.60), and control (15.43 vs. 13.55; d = 0.75).
- **Empathy perception.** Students rated the student-centered agent as substantially more empathic (21.27, SD 2.56 vs. 18.24, SD 3.70; U = 170, Z = 4.05, p < 0.01, r = 0.53).

## Why the role design mattered

The authors attribute the student-centered advantage to interaction structure rather than content coverage. That agent sequenced its help — first diagnosing the cause of the misconception, then explaining the essential concept, then offering an analogous example — consistent with stepwise guidance proposals such as review–guidance–inspiration–correction–summary. It also closed each round by asking whether the student had understood the point, which the authors read as building a **sense of participation** (the user taking an active role rather than receiving information passively), keeping students immersed in the dialogue and supporting comprehension, [[motivation]], and [[student-engagement]]. The [[physics-education|physics education]] literature is cited as already arguing that LLM implementation in physics instruction should prioritize a student-centered approach.

## Implications

- **Prompt design is an instructional-design act.** Holding the model, platform, and temperature constant, changing only the agent's role, skills, and constraints shifted achievement, cognitive load, flow, and perceived empathy — so role specification deserves the same care as content accuracy in [[pedagogical-agent|agent]] development.
- **Design for the learner's cognition, not just the answer's correctness.** The teacher-centered agent was optimized for accuracy and textbook grounding and still underperformed on every affective and cognitive measure; bounded knowledge and concise structured answers did not translate into learning support ([[hallucination-risk]], [[intelligent-tutoring]]).
- **Empathy is measurable and designable.** Empathy perception came from scripted conversational moves — perspective-taking openings, misconception diagnosis, comprehension checks — rather than from a differently-trained model, making [[affective-computing|affective]] quality something prompt design can be held accountable for.
- **Cognitive load is a diagnostic of agent quality.** The extraneous/germane split distinguished the two agents where a single load score would not have, and is a cheap instrument for comparing tutoring designs.
- **Limitations:** a small, high-performing single-province sample of [[higher-ed|post-secondary]]-entrance students, only two physics questions and roughly 20 minutes of interaction, and generalizability constrained by both.

## Connected Concepts

- [[physics-education]]
- [[pedagogical-agent]]
- [[prompt-engineering]]
- [[generative-ai]]
- [[llm]]
- [[intelligent-tutoring]]
- [[affective-computing]]
- [[student-ai-interaction]]
- [[misconceptions]]
- [[motivation]]
- [[student-engagement]]
- [[teacher-role]]
- [[hallucination-risk]]
- [[personalized-learning]]
- [[human-ai-collaboration]]

## Connected Articles

- [[becker-chatgpt-typology-physics-2026]] — Typology of ChatGPT use in physics learning
- [[socratic-ai-physics-tutor-taxonomy-2026]] — Taxonomy of Socratic AI physics tutors
- [[hashmi-socratic-physics-chatbot-2025]] — Socratic physics chatbot
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: cognitively activated AI augmentation in physics
- [[fouad-bentley-trust-utility-gap-physics-2026]] — The trust–utility gap in physics AI tools
- [[probing-ai-generated-physics-solutions-2026]] — Probing AI-generated physics solutions
- [[multiagent-classroom-dual-process-physics-teachers-2026]] — Multi-agent classroom simulation with physics teachers
- [[adversarial-stress-testing-role-playing-agents]] — Adversarial stress testing of role-playing agents
- [[correct-answer-trap-ai-tutor]] — When hints help and when they encourage over-reliance
- [[cui-motivation-roles-metacognitive-genai-2026]] — Motivation and roles in metacognitive GenAI engagement

## Citation

Wang, Y., Chen, X., Xiong, Y., Xu, S., Li, Q., & Zhou, S. (2026). [Comparing teacher-centered and student-centered agents based on prompt engineering: Effects on learning performance, cognitive load, flow experience, and empathy perception in physics learning](https://doi.org/10.1103/9t5b-twsb). *Physical Review Physics Education Research, 22*(2), 020131.
