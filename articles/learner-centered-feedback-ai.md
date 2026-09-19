---
title: "Enhancing learner-centered feedback with AI: teachers'' practices and perceptions"
created: "2026-08-03T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
foundations: [educational-development, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai, human-in-the-loop-ai, rag]
assessment: [feedback]
connected_faqs: [ai-feedback-at-scale]
research_method: [mixed methods, qualitative]
audience: [instructors, faculty development]
level: [higher ed]

sources: ['raw/papers/tandf-2026-learner-centered-feedback-ai.md']
confidence: high
---

> **Synthesis:** An empirical study of **21 higher-education teachers** using **PolyFeed**, an AI-powered feedback tool combining (1) a **BERT-based ML model** (from Aldino et al. 2024) that detects which learner-centered feedback components are missing from teacher-written feedback and suggests them, and (2) **ChatGPT-4o mini** to rephrase/enhance the teacher's draft. Teachers gave feedback on a simulated student presentation, then used the tool, then were interviewed. The study answers two questions: *how teachers interact with* [[ai-feedback-quality|AI feedback]] tools (RQ1) and *how they perceive* them (RQ2). Framework: Ryan et al.'s (2023) learner-centered feedback dimensions — **Future Impact, Sensemaking, Agency**.

## RQ1 — How teachers interacted with the tools

### ML suggestion acceptance (detection → adoption)
- The ML model most often flagged missing **Meeting Learning Objective** (20 of 21 teachers omitted it; **16 accepted** the suggestion) and **Student–Teacher Relationship** (14 omitted; **12 accepted**).
- **Affirmation and Encouragement** was missing in 6 cases but accepted by **all** 6 teachers (100%).
- Teachers used professional judgment to accept or reject suggestions — the ML functioned as a diagnostic assistant, not an autopilot.

### Revision of ChatGPT-enhanced feedback
- **12 of 21 teachers** made further sentence-level revisions; the rest left the text unchanged.
- Most common actions: **editing (f = 32)** and **removing (f = 27)**; adding was rare (f = 8).
- The dominant pattern was **calibrating tone**: Edit–Praise (f = 11, e.g. "First of all, I want to congratulate you on completing your assignment!" → "Well done on completing your assignment"), Remove–Suggestion (f = 9), Remove–Encouragement (f = 8), Remove–Praise (f = 6), Edit–Correction (f = 9). Teachers systematically **moderated exaggerated praise and generic suggestions** to protect authenticity and professional voice.
- Revisions clustered most strongly in the **Agency dimension** — especially Student–Teacher Relationship (f = 24; encouragement f = 11) — confirming that the relational/[[affective-computing|affective]] dimension of feedback resists AI delegation.

## RQ2 — Teacher perceptions

- **Benefits:** promotes reflection (n = 14), improves language and structure (n = 11), identifies missing components (n = 10), saves time (n = 2).
- **Challenges:** need for human editing (n = 9), inconsistent tone (n = 7), potential misinformation (n = 5), trust issues (n = 5).
- **Experience gap:** teachers with **>5 years of experience reported more challenges** (tone, editing burden, trust, misinformation); **less-experienced teachers valued [[scaffolding]] benefits** (identifying missing components, saving time). The authors flag a developmental risk: novice teachers who defer to AI suggestions may build less independent feedback judgment.

## Interpretation

- The tools were most valuable as **reflective prompts that surface overlooked aspects** of feedback — "making invisible gaps visible" — scaffolding teachers' evaluative judgment, rather than as providers of finalised text (an **"assist but verify"** pattern; cf. [[human-in-the-loop-ai]]).
- **Design implications:** adjustable tone parameters, [[discipline-specific-aied|discipline-specific]] templates, and transparency controls; without them AI adoption may *increase* rather than reduce workload and can erode teacher authority if positioned as autonomous providers.
- The authors call for future [[research-methods-aied|research]] on **student perspectives** of AI-assisted teacher feedback and longitudinal study of whether reliance strengthens or displaces evaluative judgment.

## What this means for practice

- **Instructors.** Use the ML component list as a coverage check before sending feedback: 20 of the 21 teachers omitted "Meeting Learning Objective" and 14 omitted "Student–Teacher Relationship," and those were the two components the model most often surfaced.
- **Instructors.** Budget time for post-editing instead of expecting the tool to finish the job — 12 of 21 teachers rewrote the ChatGPT text, mostly editing (f = 32) and deleting (f = 27), and several reported that revising the output took as long as writing the feedback themselves.
- **Instructors.** Expect to strip inflated praise and generic encouragement by hand: revisions clustered in the relational dimension of feedback (Student–Teacher Relationship f = 24; encouragement f = 11), and teachers systematically moderated tone to keep their professional voice.
- **Faculty developers.** Design training around evaluative judgment, not tool operation: less-experienced teachers valued the tool's coverage and speed, while teachers with more than five years of experience flagged tone, editing burden, trust, and misinformation risk — the authors warn that novices who defer to suggestions may build less independent judgment.
- **Faculty developers.** Build a review step for relational language into any [[human-in-the-loop-ai|AI feedback]] pilot, since teachers treated the affective dimension as the part that cannot be delegated.

## Limitations

- Only 21 teachers were studied, and they worked in a controlled environment on a single simulated task — giving feedback on one three-minute recorded student self-introduction, not feedback in their own courses.
- The study measured teacher interaction and perception only; no student outcomes or student perspectives were collected, so the effect of these tool-supported feedback practices on learners is untested.
- Several findings rest on very small counts — the 100% acceptance of Affirmation and Encouragement suggestions reflects 6 cases, and the challenge codes have a denominator of 11 teachers — so the components of the "assist but verify" pattern vary substantially in evidential weight.

## Connected Concepts

- [[feedback]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[human-in-the-loop-ai]]
- [[teacher-role]]
- [[educational-development]]
- [[scaffolding]]
- [[generative-ai]]
- [[higher-ed]]
- [[rag]]
- [[trust]]

## Connected Articles

- [[chatgpt-feedback-engagement-genai]] — Students' engagement with ChatGPT feedback: implications for student feedback literacy
- [[genai-teacher-feedback-comparison]] — Comparing generative AI and teacher feedback: student perceptions of usefulness and trustworthiness
- [[feedback-futures-genai]] — Feedback futures: beyond the limits of human and GenAI capacities
- [[ai-assistance-discretionary-feedback]] — AI assistance for discretionary work: increasing feedback provision in higher education
- [[ai-generated-feedback-higher-ed]] — AI-generated feedback in higher education
- [[genai-feedback-design-multisite-experiment]] — GenAI feedback design in a multisite experiment
- [[ai-internal-feedback-evaluative-judgments]] — AI internal feedback and evaluative judgments
- [[becerra-aicofe-feedback-2026]] — AI peer-feedback systems
- [[care-full-feedback-genai]] — Care-full feedback with GenAI
- [[reimagining-feedback-through-generative-ai-in-engineering-education]] — Reimagining feedback through generative AI in engineering education

## Citation

Aldino, A. A., Maheshi, B., Li, Y., Zhou, Y., Tsai, Y.-S., Gašević, D., & Chen, G. (2026). [*Enhancing learner-centered feedback with AI: Teachers' practices and perceptions*](https://doi.org/10.1080/02602938.2026.2638920). *Assessment & Evaluation in Higher Education*, 51(5), 892–910
