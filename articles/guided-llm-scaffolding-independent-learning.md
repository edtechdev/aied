---
title: "Beyond Access: Guided LLM Scaffolding for Independent Learning in Undergraduate Statistics"
created: "2026-06-02T04:33:04-04:00"
updated: "2026-09-21T11:27:24-04:00"
type: article
foundations: [agentic-ai, ai-literacy, curriculum-design]
pedagogy: [metacognition, scaffolding]
technology: [intelligent-tutoring, llm, prompt-engineering]
methods: [quantitative-research]
audience: [learners, instructors]
research_method: [quasi-experiment]
level: [higher ed]
sources: ['raw/papers/2606.01375.md']
confidence: high
discipline: [math education]
---

> **Synthesis:** Experimental study comparing Guided vs. Unrestricted [[llm]] access. Explicit training in reasoning-focused scaffolding (stepwise hints, verification) led to significantly better independent performance and [[self-assessment]] calibration compared to uncritical reliance. This work emphasizes that [[ai-literacy]] is a developmental capacity requiring structured [[scaffolding]] and [[prompt-engineering]] discipline. It connects to the need for [[curriculum-design]] that targets [[metacognition]] and [[agentic-ai]] rather than just syntax mastery.

## Key Findings

- In a **four-week quasi-experimental summer program** in an undergraduate Probability and Statistics course, students were organized into three balanced conditions: **no LLM access, unrestricted LLM access, and guided LLM access**.
- The guided condition used the **same LLM platform** as the unrestricted condition, but students received explicit training and rules intended to promote reasoning-focused [[help-seeking]], stepwise hints, verification, and [[ethics|ethical]] use.
- Guided use was associated with a **clearer [[learning-gains|learning]]-oriented interaction pattern** than unrestricted access, especially in prioritizing reasoning over final answers and requesting stepwise support.
- Guided-LLM students showed a **promising pattern of stronger no-help quiz performance** during the intervention phase, while unrestricted access appeared more useful for assisted practice completion than for consistently improving independent performance.
- All quizzes and the delayed final exam were completed **without LLM or external assistance**, separating AI-supported practice performance from independent learning; available time measures did not support a simple duration-based explanation, and **self-assessment calibration** suggested better alignment between perceived and demonstrated understanding in the guided condition.

## Study Design & Method

The design distinguishes between *assigned LLM access* and the *quality of students' actual interaction* with the model. The three balanced conditions isolate the effect of guidance: because the guided and unrestricted groups used the same platform, differences can be attributed to training and usage rules rather than tool availability. The use of LLM-free quizzes and a delayed final exam provides a no-help measure of whether AI-supported practice transferred to independent performance.

## What this means for practice

- **Instructors.** Scaffold how students use the model rather than simply granting access: the guided and unrestricted groups shared the same platform, and the guided group showed higher rule-following compliance (2.43/6 vs. 3.21/6, d = 0.81, p = .025) driven mainly by process-oriented [[help-seeking]] and stepwise hints, while conceptual explanation was common in both groups.
- **Instructors.** Keep high-stakes assessment LLM-free so assisted practice is not mistaken for learning: every quiz and the delayed final exam in this design was completed without LLM or external assistance, and unrestricted access supported practice-task completion more than independent no-help performance.
- **Learners.** Preserve the reasoning work by asking for stepwise hints rather than final answers and by working in more turns: guided sessions contained more user turns on average (17.21 vs. 10.54) and more user text (2,645 vs. 1,410 characters).
- **Designers.** Build [[prompt-engineering|prompt]] starters, hint-first workflows, reflection checkpoints, and verification checklists into the platform, since active-learning and verification behaviors were only partially adopted even after training — higher-agency strategies require stronger [[scaffolding]].
- **Instructors.** Teach calibrated trust explicitly — when to rely on, question, or verify a model explanation — because the guided group had the highest well-calibrated rate (43%) and the strongest self-assessment–performance correlations, an [[ai-literacy|AI literacy]] gain rather than mere confidence.

## Limitations

- The final analytic sample was 37 of the 57 students who began the program (No-LLM 13, Unrestricted-LLM 12, Guided-LLM 12), after excluding students who missed two or more topic cycles, limiting statistical power.
- Groups were balanced after Week 1 on prior Practice and Quiz scores rather than randomized, so the outcome findings are promising associations rather than definitive causal estimates, the final-exam comparison was directional rather than statistically confirmatory, and behavior-based regrouping moved two students in each LLM condition between guided and unguided categories.
- Practice time was self-reported and transcript coding required human judgment despite five graders, and the Guided-LLM group received additional training and reminders that may have introduced attention, expectancy, or demand effects.
- The study ran as a single four-week summer program in one undergraduate Probability and Statistics course at one university, so transfer to full-semester courses and other disciplines is untested.

## Connected Concepts

- [[ai-literacy]]
- [[scaffolding]]
- [[prompt-engineering]]
- [[curriculum-design]]
- [[metacognition]]
- [[self-assessment]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[help-seeking]]
- [[intelligent-tutoring]]
- [[higher-ed]]
## Connected Articles

- [[tracing-genai-literacy-interaction-patterns]] — Tracing GenAI Literacy: Student-AI Interaction Patterns in Academic Writing
- [[ase-26-agentic-software-engineering-curriculum]] — ASE-26: A Curriculum for Agentic Software Engineering as a Discipline
- [[ai-adoption-training-public-sector]] — The Main Barrier to AI Adoption in the Public Sector is Lack of Training
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[learning-by-chatting-genai-impact]] — Learning by Chatting? Investigating the Impact of Generative AI on Information Seeking and Learning
- [[slidesqaqa-pedagogical-question-generation]] — Slide Deck Q&A Quality Assurance App: A Multi-Stage Pipeline for Pedagogical Question Generation

## Citation

Amanlou, M., Amou-Jafari, Y., Livani, M., Boloukazari, F., Bagheri, F., & Bahrak, B. (2026). [*Beyond Access: Guided LLM Scaffolding for Independent Learning in Undergraduate Statistics*](https://arxiv.org/abs/2606.01375). Proceedings of the 34th International Conference on Computers in Education.
