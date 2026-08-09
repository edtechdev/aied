---
title: "Generative AI without guardrails can harm learning: Evidence from high school mathematics"
created: 2026-07-19
updated: 2026-07-19
type: article
tags: [generative-ai, over-reliance, stem-education, k-12, rct, learning-gains, intelligent-tutoring, scaffolding, ai-assistance-reduces-persistence, student-experience]
sources: ['raw/papers/pnas-2025-guardrails-harm-learning.md']
confidence: high
---

> **Hamsa Bastani, Osbert Bastani, Alp Sungu, Haosen Ge, Özge Kurucu, Rehema Mushi (2025)** — *Proceedings of the National Academy of Sciences (PNAS)*, 122(26). doi:10.1073/pnas.2422633122.

This landmark field experiment is among the first randomized controlled trials to causally demonstrate that **unguarded generative-AI tutoring can harm skill acquisition**, not merely fail to help. Conducted with **nearly 1,000 high-school math students** across ~50 classes at a large school in Turkey (Fall 2023–2024), the study compares three arms assigned at the classroom level: a **control** arm (textbook/notes only), **GPT Base** (a ChatGPT-like GPT-4 chat interface), and **GPT Tutor** (GPT-4 with teacher-designed guardrails — hints instead of answers, plus the correct solution and common mistakes baked into the prompt). Each 90-minute session had three parts: a teacher lecture, an AI-assisted practice period (treatment only here), and an unassisted closed-book exam on conceptually similar problems.

The core finding: access to generative AI sharply improves **performance** during practice but, without guardrails, **degrades learning** once the tool is removed — a tradeoff driven by students using the AI as a "crutch" to copy answers rather than to learn.


### Performance vs. Learning Tradeoff (intention-to-treat)
Relative to control (practice mean 0.284; exam mean 0.321, normalized grades):

| Arm | Assisted practice (perf) | Unassisted exam (learning) |
| --- | --- | --- |
| **GPT Base** | **+48%** (β = 0.137\*\*) | **−17%** (β = −0.054\*) |
| **GPT Tutor** | **+127%** (β = 0.361\*\*) | ≈ 0 (β = −0.004, n.s.) |

- GPT Base significantly **improves** practice performance but **significantly worsens** later unassisted exam performance — students who never had AI access actually outperformed them.
- GPT Tutor's guardrails **largely eliminate the learning harm** (point estimate near zero), though they do not produce a positive learning effect either.^[raw/papers/pnas-2025-guardrails-harm-learning.md]

### Mechanism: Students Use GPT Base as a Crutch
Two candidate explanations for the harm were tested — (1) GPT Base's errors mislead students, and (2) students offload thinking by copying answers. The evidence strongly favors the second:
- **Error analysis:** When GPT Base's logical-error rate on a practice problem is higher, it hurts *practice* performance but shows **no spillover** to the corresponding unassisted exam problem — so students aren't being systematically misled into exam errors.
- **Engagement analysis:** Students in the GPT Base arm send far fewer messages and overwhelmingly just "ask for the answer" or restate the question (superficial conversations dominate). In the GPT Tutor arm, a growing share of conversations are *substantive* (asking for help, attempting answers independently), and this improves within the very first session.
- GPT Base answered correctly only **51% of the time** on the 57 practice problems (42% logical errors, 8% arithmetic errors) — yet students still copy its outputs.^[raw/papers/pnas-2025-guardrails-harm-learning.md]

### Students Don't Perceive the Harm
Students in the GPT Base arm performed *worse* on the exam but did **not** report learning or performing less; GPT Tutor users *perceived* they performed better than control even though exam scores were statistically indistinguishable. This perceived-vs-actual-learning mismatch parallels the "feeling of learning" literature and means self-report is an unreliable gauge of AI's learning impact.^[raw/papers/pnas-2025-guardrails-harm-learning.md]

### Secondary Results
- **Skill-gap narrowing is temporary:** Both AI arms reduced grade dispersion (HHI) during practice (biggest help to weakest students), but the effect **does not persist** on the unassisted exam.
- **Limited heterogeneity:** Little evidence of differential effects by student ability, resources, or effort on exam performance.
- **Robustness:** Intention-to-treat (including noncompliers), alternative specifications, and absenteeism checks all confirm the pattern.^[raw/papers/pnas-2025-guardrails-harm-learning.md]

## Design Lesson: What the Guardrails Did
GPT Tutor differed from GPT Base in two ways: (1) the prompt instructed it to **give hints, not answers**, and (2) it was seeded with **teacher-authored problem-specific information** (correct solution, common mistakes, feedback guidance) — making its hints accurate and checkable. This labor-intensive prompt design is what neutralized the crutch effect. The authors note GPT Tutor remains *passive* (it doesn't proactively probe misconceptions) and call for combining pedagogical software tutors with generative AI, plus "co-pilot" models that assist human tutors rather than replace them.^[raw/papers/pnas-2025-guardrails-harm-learning.md]

## Implications
- **For the wiki:** This is the strongest *causal, field-deployed* evidence for the [[over-reliance]] and [[cognitive-offloading]] phenomena, and a direct, preregistered demonstration of the [[genai-performance-vs-learning]] distinction (performance ↑, learning ↓). It complements [[generative-ai-reduced-study-time-math]] (population-scale behavioral evidence) and [[ai-assistance-reduces-persistence]] (lab causal evidence), and motivates [[scaffolding]] and [[socratic-ai-dialogue]] designs that preserve learning.
- **For practice/policy:** Because ChatGPT-like tools are already widely used by students off-platform, the GPT Base harm is immediately relevant. Deployments where learning matters need explicit guardrails (hint-not-answer prompts, teacher-authored scaffolding, answer-checking).

## Limitations (per authors)
Single topic (math), single high school in Turkey, Fall 2023 (early GPT-4 era), short-term outcomes only; writing and other subjects lack the objective grading used here. Generalizability to newer models and other contexts requires further study.^[raw/papers/pnas-2025-guardrails-harm-learning.md]

## Connected Concepts

- [[ai-assistance-reduces-persistence]]
- [[k-12]]
- [[scaffolding]]
- [[socratic-ai-dialogue]]
- [[student-experience]]

- [[generative-ai]]
## Connected Articles

- [[genai-performance-vs-learning]] — Distinguishing performance gains from learning when using generative AI
- [[generative-ai-reduced-study-time-math]] — Faster Completion, Less Learning: Generative AI Reduced Study Time on Math Problems and the Knowledge They Build
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[adaptive-pretesting-retention]] — Do Gains from Generative AI-Enabled Adaptive Pretesting Persist? Evidence from a Retention Study
- [[affective-text-wearable-student-health]] — A Formative Study of Brief Affective Text as a Complement to Wearable Sensing for Longitudinal Student Health Monitoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-ai-pedagogical-best-practice-2026]] — Agentic AI and Pedagogical Best Practice: The Tension Between Automation and Learning
- [[agentic-education-coding]] — Agentic Education with AI Coding Assistants
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agentic-workflows-education]] — Agentic Workflows in Education
- [[agents-that-teach-incidental-learning]] — Agents That Teach: Designing Incidental Learning Back into AI-Assisted Software Development
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[ai-assessment-scale-reform]] — A bit of chaos and madness": The AI Assessment Scale and the work of assessment reform
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-assisted-learning-modes-eeg]] — An exploratory behavioral and electroencephalographic study of artificial intelligence-assisted learning modes in hig...
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis
- [[ai-assisted-writing-research-teams]] — Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams
- [[ai-availability-student-motivation]] — Why Put in This Much Effort?": How AI Availability Shapes Students’ Motivation in Introductory Programming

## Citation

Bastani, H., Bastani, O., Sungu, A., Ge, H., Kurucu, Ö., & Mushi, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. [Proceedings of the National Academy of Sciences](https://www.pnas.org/doi/10.1073/pnas.2422633122), 122(26). https://doi.org/10.1073/pnas.2422633122
