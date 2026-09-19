---
title: "How Instructors Regulate AI in College: Evidence from 31,000 Course Syllabi"
created: "2026-09-02T04:30:00-04:00"
updated: "2026-09-19T08:33:23-04:00"
type: article
foundations: [academic-integrity, teacher-role]
technology: [generative-ai]
assessment: [assessment]
connected_faqs: [course-ai-policy]
research_method: [quantitative, longitudinal]
audience: [instructors, administrators, policymakers, researchers]
level: [higher ed]
sources: ['raw/papers/chirikov-regulate-ai-syllabi-2026.md']
confidence: high
institutions: [educational-policy-ai, governance, regulation]
---

> **Synthesis:** **How instructors regulate AI in college** — a large-scale longitudinal study by Igor Chirikov (2026) analyzing **31,000+ course syllabi** (2021–2025) from the full course universe of a large public research university. Building a **task-based framework** (adapted from labor economics) of how AI reshapes skill formation via **displacement, augmentation, and reinstatement**, the paper finds instructors are *warming toward AI*: [[regulation]] grew to 55% of courses by Fall 2025, but shifted from restrictive toward permissive, differentiated by task type, and increasingly framed around learning rather than [[academic-integrity|academic integrity]] — with substantial disciplinary variation.

## Overview

[[generative-ai|Generative AI]] substitution for the cognitively demanding tasks students must practice raises a core tension: if AI substitutes for practice, students may fail to develop skills; if AI is restricted entirely, students miss tools expected in the labor market. Chirikov adapts task-based models of technological change (Autor et al. 2003; Acemoglu & Restrepo 2019) from production to education, where students develop skills by practicing tasks. This yields three mechanisms — **[[cognitive-offloading|task displacement]]** (AI performs tasks instead of students → skill erosion), **task augmentation** (AI supports practice without displacing essential effort → enhancement), and **task reinstatement** (AI enables new tasks → new AI-based skills) — and predicts how instructors respond: restricting AI for displaced tasks, permitting it for augmented ones, and introducing new AI-based tasks.

## Method

- **Data:** Over 31,000 course syllabi representing the full universe of courses at a large public research university in Texas, 2021–2025, tracking the same courses and instructors over time.
- **Design:** Longitudinal; computational extraction of required course tasks and [[educational-policy-ai|AI policies]] from each syllabus, with [[llm]]-assisted classification validated at 96% agreement with human coding.
- **Analysis:** Within-course-instructor fixed-effects estimates plus repeated cross-sections; placebo tests (e.g., oral presentation tasks where AI capabilities are weaker).

## Key findings

- **Regulation grew rapidly but shifted toward permissiveness.** Explicit AI regulation rose from near zero before ChatGPT to **55% of courses by Fall 2025**. Within-course-instructor estimates show regulation increasing 15.3 pp/year, while the share of fully restrictive policies fell ~5 pp/year and a permissiveness index rose 0.12 points/year — individual instructors moved toward more permissive policies over time.
- **Task composition predicts regulation.** Each additional writing/coding task required in 2021–22 (pre-ChatGPT) is associated with a ~3 pp higher likelihood of an AI policy by Fall 2025; a course requiring five such tasks is ~15 pp more likely to regulate. A placebo using oral-presentation tasks finds no effect.
- **Instructors differentiate by task type.** Policies increasingly permit AI for some tasks and restrict it for others (task differentiation +4.5 pp/year). In Fall 2025, instructors most commonly **restrict** drafting/revising (79%) and reasoning/[[problem-solving]] (65%), and most commonly **permit** editing/proofreading (83%), study support/synthesis (80%), and coding (75%). Ideation/planning is most contested (46% permit / 54% restrict).
- **New AI-based tasks are emerging modestly.** Adoption of AI-integrated assignments, [[prompt-engineering|prompting]] exercises, and output-verification activities reached 11% of courses by Fall 2025 (Business leads at 27%; [[humanities-education|Humanities]] lowest at 5%).
- **Framing shifted from integrity to learning.** Academic-integrity mentions fell from 63% (Spring 2023) to 49% (Fall 2025); references to AI's impact on learning rose from 1% to 29%; attribution requirements rose from 16% to 43%.
- **Disciplinary variation is pronounced.** Humanities remained most restrictive; Business moved most rapidly toward permissive policies and new AI-based tasks. Larger pre-AI task bundles predict differentiated policies (each additional task → +1.3 pp).

## What this means for practice

- **Instructors.** Regulate by task instead of by blanket rule: restrict AI where [[cognitive-offloading|displacement]] threatens essential practice — in Fall 2025 instructors most commonly restricted drafting/revising (79%) and reasoning (65%) — and permit or encourage it where augmentation potential is real, as with editing (83%), study support (80%), and coding (75%).
- **Instructors.** Put the policy in the syllabus and name the specific tasks, since this study can only observe what is written down: with regulation reaching just 55% of courses, undocumented verbal or LMS-based rules leave policy invisible.
- **Administrators.** Grant instructors autonomy within disciplinary norms rather than issuing one-size-fits-all mandates: adoption of AI-integrated assignments ranged from 27% in Business to 5% in the humanities.
- **Policymakers.** Fund reinstatement, not only restriction. If AI continues to displace skill-building tasks, students graduate weakest where AI is strongest, so support new AI-based learning tasks (prompting exercises, output-verification activities) that maintain human comparative advantage.
- **Researchers.** Test whether instructor judgments about displacement and augmentation align with actual learning effects; the framework predicts instructor responses but does not yet show that those responses protect skill formation.

## Limitations

- Syllabi capture stated policies, not classroom enforcement or student compliance, and some instructors regulate AI through verbal instructions or assignment prompts, so the analysis likely underestimates total regulation.
- The study cannot observe actual student AI use or learning outcomes: whether task-level restrictions protect skill formation remains untested, and students may use AI regardless of stated policies.
- All syllabi come from a single large selective public research university in Texas (31,000+ syllabi, 2021–2025); the author calls for replication at community colleges, elite private universities, and international settings, since other contexts may show different patterns.
- The computational classification reached 96% agreement with human coding but not every expanded classification dimension received full human validation, classifications require judgment where policies fall ambiguously between categories, and model updates can classify identical content differently, complicating exact replication.

## Connected Concepts

- [[educational-policy-ai]]
- [[regulation]]
- [[governance]]
- [[teacher-role]]
- [[academic-integrity]]
- [[assessment]]
- [[generative-ai]]
- [[higher-ed]]
- [[cognitive-offloading]]
- [[ai-misuse-learning-harm]]
- [[discipline-specific-aied]]

## Connected Articles

- [[chirikov-ai-grade-inflation-2026]] — Companion paper: AI task displacement as a mechanism of grade inflation (Chirikov 2026)
- [[genai-policies-higher-ed-computing]] — How universities develop and communicate AI policies
- [[adarkwah-genai-unesco-policy-2026]] — UNESCO guidance on GenAI in education policy
- [[crompton-governing-genai-higher-ed-delphi-2026]] — Global Delphi on governing generative AI in higher education
- [[zuo-instructor-power-genai-writing-2026]] — Instructors' perceived power relations with GenAI in writing
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Learning losses from homework outsourcing in secondary education

## Citation

Chirikov, I. (2026). [How Instructors Regulate AI in College: Evidence from 31,000 Course Syllabi](https://escholarship.org/uc/item/9c51s3gs). *CSHE Higher Education Working Paper Series, 26*(1).