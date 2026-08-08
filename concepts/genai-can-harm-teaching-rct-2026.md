---
title: Generative AI Can Harm Teaching
created: 2026-08-03
updated: 2026-08-03
type: concept
tags: [faculty-development, teacher-role, generative-ai, k-12, student-experience, cognitive-offloading, over-reliance, rct]
sources: [raw/papers/genai-can-harm-teaching-rct-2026.md]
confidence: high
---

# Generative AI Can Harm Teaching

> Sungu, Lira & Duckworth (2026) ran one of the first large-scale RCTs of a teacher-facing generative AI tool and found it can *harm* students: providing teachers an AI teaching assistant **reduced student intrinsic motivation by 0.11 SD** and — among lower-performing teachers — **cut student achievement by 0.13 SD**. The pattern is a **principal–agent problem**: teachers (agents) gain labor savings from AI delegation while students (principals) bear the cost of displaced relational teaching and scaffolding.

## The experiment

- **538 teachers across 24 Turkish K-12 schools** randomized at school-department level; analytical sample 193 teachers / 2,816 students / 14,198 student-course observations
- Treatment: custom **GPT-4o chatbot** with Turkish Ministry of Education curriculum database + 1-hour training (one arm added weekly usage-stat reminders); control = business-as-usual
- Pre-registered; ITT; semester-length (spring 2025)

## Results

| Outcome | Average effect | Heterogeneity |
|---|---|---|
| Student intrinsic motivation | **−0.111 SD** (p=.015) | Heavy baseline AI users: −0.182 (p=.015); light users: −0.052 (ns) |
| Student confidence | −0.090 SD (p=.097) | Lower-performing teachers: −0.183 (p=.012); higher: −0.022 (ns) |
| Academic performance | −0.019 SD (ns, ceiling-compressed) | **Below-median teachers' students: −0.129 (p=.005)**; above-median: +0.054 (ns) |
| Teacher beliefs about AI's effect on learning | +0.126 SD (ns) | Heavy prior users became *more pessimistic* (−0.379); light users *more optimistic* (+0.458) |

The null average performance effect masks strong offsetting heterogeneity — and the exam had severe ceiling compression (control mean 89.2/100, 47% ≥ 95), which also limits power. The belief reversal is striking: it contradicts "familiarity breeds acceptance" and suggests an arc from initial awe at AI's instant responses to awareness of its unintended effects.

## Why the harm happens: usage patterns

- **66% of teacher conversations were teaching-material production** (lecture prep 32%, homework/exam 22%, syllabus 9%); only 16% instructional support; 18% general
- **Shallow use: median 2 prompts, mean 4.7 messages** per session — teachers accepted outputs with minimal iteration
- Interpretation: **task delegation, not pedagogical collaboration** — the tool was a generator of finished artifacts rather than an iterative partner, limiting the pedagogical reflection that separates augmentation from substitution

## Connections to the wiki

- Direct causal evidence for the [[cognitive-offloading]] concern applied to *teachers* rather than students, and for [[over-reliance]] at the instructor level
- A counterweight to [[faculty-development]] narratives that AI support tools straightforwardly improve teaching — effectiveness depends on how the tool is used ([[teacher-ai-competency]])
- The motivational harm connects to [[student-experience]] and the relational critiques in [[care-full-feedback-genai]] (feedback as "matters of care" is displaced when AI mediates material production)
- Skill-substitution channel mirrors the [[genai-expertise-pathways-sysadmin]] finding that GenAI compresses expertise pathways and resets performance expectations
- Complements the design-not-detection agenda of [[beyond-detection-authentic-assessment-ai-2025]]: teacher-facing AI needs the same design scrutiny as assessment-facing AI

## Citation

Sungu, Lira & Duckworth (2026). [*Generative AI Can Harm Teaching*](https://ssrn.com/abstract=7007339)

## Related Pages
- [[faculty-development]] — teacher-facing AI adoption and its unintended effects
- [[teacher-ai-competency]] — what teachers need to use AI as augmentation, not substitution
- [[cognitive-offloading]] — the mechanism behind degraded pedagogical reasoning
- [[over-reliance]] — shallow, accept-output AI use
- [[student-experience]] — motivational and confidence harm to students
- [[generative-ai]] — teacher-side deployment effects
- [[k-12]] — K-12 context of the field experiment
- [[genai-expertise-pathways-sysadmin]] — parallel expertise-compression finding
- [[care-full-feedback-genai]] — relational teaching displaced by AI mediation
- [[teacher-role]] — principal–agent tension in AI-assisted teaching
- [[oecd-digital-education-outlook-2026]]
