---
title: Generative AI Can Harm Teaching
created: "2026-08-03T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
foundations: [cognitive-offloading, educational-development, teacher-role]
technology: [generative-ai, rag]
stakeholders: [student-experience, teacher-ai-competency]
audience: [faculty developers, instructors, learners]
level: [k 12]
sources: ['raw/papers/genai-can-harm-teaching-rct-2026.md']
confidence: high
page_kind: [evaluation]
methods: [rct]
---

> **Synthesis:** The null average performance effect masks strong offsetting heterogeneity — and the exam had severe ceiling compression (control mean 89.2/100, 47% ≥ 95), which also limits power. The belief reversal is striking: it contradicts "familiarity breeds acceptance" and suggests an arc from initial awe at AI's instant responses to awareness of its unintended effects.

> Sungu, Lira & Duckworth (2026) ran one of the first large-scale [[rct|RCTs]] of a teacher-facing [[generative-ai|generative AI]] tool and found it can *harm* students: providing teachers an AI [[teacher-role|teaching]] assistant **reduced student [[motivation|intrinsic motivation]] by 0.11 SD** and — among lower-performing teachers — **cut student achievement by 0.13 SD**. The pattern is a **principal–agent problem**: teachers (agents) gain labor savings from AI delegation while students (principals) bear the cost of displaced relational teaching and [[scaffolding]].

## The experiment

- **538 teachers across 24 Turkish [[k-12]] schools** randomized at school-department level; analytical sample 193 teachers / 2,816 students / 14,198 student-course observations
- Treatment: custom **GPT-4o [[conversational-ai|chatbot]]** with Turkish Ministry of Education [[curriculum-design|curriculum]] database + 1-hour training (one arm added weekly usage-stat reminders); control = business-as-usual
- pre-registered study; spring 2025

## Results

| Outcome | Average effect | Heterogeneity |
|---|---|---|
| Student intrinsic motivation | **−0.111 SD** (p=.015) | Heavy baseline AI users: −0.182 (p=.015); light users: −0.052 (ns) |
| Student confidence | −0.090 SD (p=.097) | Lower-performing teachers: −0.183 (p=.012); higher: −0.022 (ns) |
| [[learning-gains|Academic performance]] | −0.019 SD (ns, ceiling-compressed) | **Below-median teachers' students: −0.129 (p=.005)**; above-median: +0.054 (ns) |
| Teacher beliefs about AI's effect on learning | +0.126 SD (ns) | Heavy prior users became *more pessimistic* (−0.379); light users *more optimistic* (+0.458) |

The null average performance effect masks strong offsetting heterogeneity — and the exam had severe ceiling compression (control mean 89.2/100, 47% ≥ 95), which also limits power. The belief reversal is striking: it contradicts "familiarity breeds acceptance" and suggests an arc from initial awe at AI's instant responses to awareness of its unintended effects.

## Why the harm happens: usage patterns

- **66% of teacher conversations were teaching-material production** (lecture prep 32%, homework/exam 22%, syllabus 9%); only 16% instructional support; 18% general
- **Shallow use: median 2 prompts, mean 4.7 messages** per session — teachers accepted outputs with minimal iteration
- Interpretation: **task delegation, not [[pedagogy|pedagogical]] collaboration** — the tool was a generator of finished artifacts rather than an iterative partner, limiting the pedagogical reflection that separates augmentation from substitution

## What this means for practice

- **Instructors.** Treat the tool as an iterative partner rather than a finished-artifact generator: teacher sessions ran to a median of 2 prompts, and 66% of conversations were teaching-material production rather than [[pedagogy|pedagogical]] collaboration.
- **Instructors.** Protect the relational and [[scaffolding]] work that AI delegation can displace — motivation fell by 0.11 SD on average, and confidence by 0.18 SD among students of lower-performing teachers.
- **Faculty developers.** Train for pedagogical collaboration, not just tool access; the one-hour training in this trial did not produce the iterative use that separates augmentation from substitution.
- **Administrators.** Judge teaching-assistant AI by student motivation and confidence, not test scores alone: average achievement was null while motivation declined significantly.

## Limitations

- There was no baseline survey for student motivation or confidence, so those outcomes are measured at endline only and cannot be read as change scores.
- The exam showed severe ceiling compression — control mean 89.2/100, 47% of control scores ≥ 95, 12% exactly 100 — which limits statistical power on the achievement outcome.
- The trial ran in one country (24 Turkish K-12 schools); 538 teachers were randomized but the analytical sample was 193 teachers and 2,816 students, so attrition shaped the analysis.
- Teacher usage patterns come from the treatment arms' own interaction logs, and teachers' beliefs about AI's effect on learning were self-reported.

## Connected Concepts

- [[generative-ai]]
- [[k-12]]
- [[student-experience]]
- [[teacher-ai-competency]]
- [[teacher-role]]
- [[rag]]
- [[motivation]]
- [[cognitive-offloading]]

## Connected Articles

- [[genai-expertise-pathways-sysadmin]] — Unanticipated Effects of Generative AI on Expertise Pathways and Performance Perception in System Administration
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection: redesigning authentic assessment in an AI-mediated world
- [[care-full-feedback-genai]] — The care-full craft of feedback in an age of generative AI
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module

## Citation

Sungu, Lira & Duckworth (2026). [*Generative AI Can Harm Teaching*](https://ssrn.com/abstract=7007339)
