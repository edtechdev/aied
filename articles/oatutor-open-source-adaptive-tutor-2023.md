---
title: "OATutor: An Open-source Adaptive Tutoring System and Curated Content Library for Learning Sciences Research"
created: "2026-08-12T21:26:01-04:00"
updated: "2026-08-12"
type: article
tags: [intelligent-tutoring, adaptive-learning, open-source, knowledge-tracing, math-education, higher-ed, intelligent-tutoring, personalized-learning, edtech-platform]

sources: ['raw/papers/oatutor-chi-2023.md']
confidence: high
---

> OATutor (Open Adaptive Tutor) is the first open-source adaptive tutoring system built on Intelligent Tutoring System (ITS) principles, developed at UC Berkeley's CAHL Lab. It combines an MIT-licensed, fully engineered codebase with a Creative Commons (CC BY) algebra content library, knowledge tracing, A/B testing infrastructure, and LTI support — designed to democratize adaptive learning research by removing the barrier to replicating and extending experiments that proprietary platforms create.

Despite decades of validated tutoring principles, no adaptive tutoring system had been both fully featured and open-sourced to the research community. This absence forced adaptive learning research onto a small number of proprietary platforms, raising the barrier to entry for researchers wanting to replicate, extend, or field adaptive-learning experiments. OATutor addresses this gap, delivering a system that others can fork, experiment with, and A/B test component-by-component.

## The system

OATutor was iteratively developed over three years (from late 2019) with field trials in classrooms and feedback from students, teachers, and researchers. Its core architecture implements established ITS design principles:

- **Hints & worked examples** — on-demand declarative help or full worked solutions, shown one at a time to reduce cognitive load.
- **Scaffolding / tutored problem solving** — problems broken into steps with sub-questions that communicate the underlying goal structure.
- **Mastery estimation** — Bayesian Knowledge Tracing (BKT), a Hidden Markov Model that estimates cognitive mastery per skill, so the tutor withholds problems the student is not ready for and advances them when appropriate.
- **Immediate feedback** — real-time correctness feedback upon answer submission.
- **Knowledge Component (KC) model** — a centralized skill model mapping each step to skills, defined to promote abstract understanding while remaining fine-grained enough to represent competence.
- **Bottom-out hints** — a final hint revealing the answer to prevent dwelling.
- **Variabilization** — template variables generate many problem instances, reducing content-author burden.
- **A/B testing + data logging** — built-in randomized experimentation and a row-per-interaction logging format familiar to EDM researchers.

### Content and authoring

OATutor ships with three Creative Commons (CC BY) OpenStax algebra textbooks (Elementary, Intermediate, College Algebra) curated into the system, with tutoring support authored by the OATutor project. Content follows a hierarchy of **Course → Lessons → Problems → Steps → Tutoring Pathway (hints/scaffolds)**. Authors do not need to know JSON: they author via Google Spreadsheets, and an automated script converts spreadsheets to the JSON content pool, running nightly quality checks. For the College Algebra course, 16 creators completed content in ~6 months with an average of 2.27 hours of training.

### Mastery-based adaptive selection

Problems are tagged with skills at the step level via a centralized skill model. Lessons define skills and a target mastery threshold; after each problem, a configurable heuristic selects the next problem the student has not yet mastered — by default, the one with the lowest average posterior mastery across its skills. Learning continues until all lesson skills are mastered.

## Significance for the research community

OATutor's design goal is replicability: researchers can run experiments on OATutor, then publish the entire end-to-end framework, content, and platform as a GitHub link for others to replicate, compare, and build on. The open-source, transparent nature also fosters trust and wider adoption. The work is positioned within broader open movements in education — [[open-source]] educational resources, open datasets, and open algorithms (e.g., pyBKT) — and argues it is "long past due" for an ITS-based platform to join them.

## Connection to the wiki

OATutor is a foundational example of [[adaptive-learning]] and [[intelligent-tutoring]] research infrastructure, and a companion system for evaluating [[generative-ai]] tutoring capabilities (see the companion learning-gain study). It connects to [[knowledge-tracing]] (BKT mastery estimation), [[personalized-learning]], and [[math-education]], and its open platform model is directly relevant to the [[intelligent-tutoring|AI Tutoring]] evidence base and to the automated authoring challenges explored in [[ai-tutor-authoring-promptdecipher]].

## Connected Concepts

- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[knowledge-tracing]]
- [[open-source]]
- [[personalized-learning]]
- [[math-education]]
- [[edtech-platform]]
- [[automated-question-generation]]
- [[scaffolding]]

## Connected Articles

- [[chatgpt-hints-human-tutor-learning-gains-2024]] — ChatGPT-Generated Help vs. Human Tutor Help
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[access-not-enough-ai-tutoring-2026]] — Access Is Not Enough: AI Tutoring
- [[cold-start-knowledge-tracing-safeinsights]] — Cold-Start in Knowledge Tracing
- [[adaptive-pretesting-retention]] — Adaptive Pretesting and Retention
- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — From Answer Generators to Reasoning Facilitators
- [[conversational-ai-tutors-framework]] — The Path to Conversational AI Tutors
- [[ai-tutor-authoring-promptdecipher]] — PromptDecipher: AI Tutor Authoring

## Citation

Pardos, Z. A., Tang, M., Anastasopoulos, I., Sheel, S. K., & Zhang, E. (2023). [*OATutor: An open-source adaptive tutoring system and curated content library for learning sciences research*](https://doi.org/10.1145/3544548.3581574). In *Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems*. ACM. https://doi.org/10.1145/3544548.3581574
