---
title: "OATutor: An Open-source Adaptive Tutoring System and Curated Content Library for Learning Sciences Research"
created: "2026-08-12T21:26:01-04:00"
updated: "2026-09-19T10:43:18-04:00"
type: article
technology: [adaptive-learning, intelligent-tutoring, knowledge-tracing, personalized-learning, edtech-platform, open-source]
audience: [software developers]
research_method: [system development]
discipline: [math education]
level: [higher ed]

sources: ['raw/papers/oatutor-open-source-adaptive-tutor-2023.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** OATutor (Open Adaptive Tutor) is the first open-source adaptive tutoring system built on Intelligent Tutoring System (ITS) principles, developed at UC Berkeley's CAHL Lab. It combines an MIT-licensed, fully engineered codebase with a Creative Commons (CC BY) algebra content library, knowledge tracing, A/B testing infrastructure, and LTI support — designed to democratize adaptive learning research by removing the barrier to replicating and extending experiments that proprietary platforms create.

Despite decades of validated tutoring principles, no adaptive tutoring system had been both fully featured and open-sourced to the research community. This absence forced adaptive learning research onto a small number of proprietary platforms, raising the barrier to entry for [[research-methods-aied|researchers]] wanting to replicate, extend, or field adaptive-learning experiments. OATutor addresses this gap, delivering a system that others can fork, experiment with, and A/B test component-by-component.

## The system

OATutor was iteratively developed over three years (from late 2019) with field trials in classrooms and feedback from students, teachers, and researchers. Its core architecture implements established ITS design principles:

- **Hints & worked examples** — on-demand declarative help or full worked solutions, shown one at a time to reduce [[cognitive-offloading|cognitive load]].
- **[[scaffolding]] / tutored [[problem-solving|problem solving]]** — problems broken into steps with sub-questions that communicate the underlying goal structure.
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

## Connection to the knowledge base

OATutor is a foundational example of [[adaptive-learning]] and [[intelligent-tutoring]] research infrastructure, and a companion system for evaluating [[generative-ai]] tutoring capabilities (see the companion learning-gain study). It connects to [[knowledge-tracing]] (BKT mastery estimation), [[personalized-learning]], and [[math-education]], and its open platform model is directly relevant to the [[intelligent-tutoring|AI Tutoring]] evidence base and to the automated authoring challenges explored in [[ai-tutor-authoring-promptdecipher]].

## What this means for practice

- **Developers.** Fork the MIT-licensed codebase instead of rebuilding ITS components: OATutor already ships hints and worked examples, scaffolded step decomposition, immediate correctness feedback, bottom-out hints, variabilization, [[knowledge-tracing|Bayesian Knowledge Tracing]] mastery estimation, and an LTI hook for LMS integration.
- **Developers.** Route authoring through spreadsheets rather than JSON — an automated script converts Google Sheets into the JSON content pool with nightly quality checks, and 16 creators completed a full College Algebra course in about six months, with training averaging 2.27 hours and each problem 11.03 minutes.
- **Developers.** Reduce per-problem authoring cost with variabilization and one author per chapter: template variables multiply problem instances from a single authored item, and assigning one author per chapter measurably cut the stylistic inconsistency the content team reported.
- **Developers.** Give authors a development server that renders content promptly: the team's problems were only rendered every 4-7 days at first, and nightly publishing reduced rendering-based mistakes and let authors self-check before editors saw the content.
- **Developers.** Build the teacher-facing affordances the pilot teacher asked for — an ADA-compliant interface, a progress dashboard showing time on task per student, and a rich-text editor for equations — because entering operators such as a square root was a documented source of student frustration.

## Limitations

- The deployment evidence is one community college instructor teaching seven algebra classes over six terms, with participation voluntary and ungraded; the paper reports usability and continued uptake rather than any [[learning-gains|learning-gain]] comparison, and there is no control condition.
- Students who used the tutor were self-selected — the pilot teacher observed that they were the more motivated students seeking extra practice — and usage declined across the term precisely because students received no credit for using the system.
- The authoring figures come from a survey sent to 25 former editor-team members that drew 16 responses, one excluded as incomplete (N = 15 measured), with training time self-estimated to the nearest hour and problem-creation time to the nearest minute.
- Scope is bounded to algebra content from three OpenStax textbooks: the authors' own extension interview (R4) found that adapting the platform for collaborative VR/AR training would take significant effort, and content bugs caused the worst student frustration in the first pilots.

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
- [[zerkouk-comprehensive-review-its-2025]] — AI Tutor Effectiveness Review
- [[access-not-enough-ai-tutoring-2026]] — Access Is Not Enough: AI Tutoring
- [[adaptive-pretesting-retention]] — Adaptive Pretesting and Retention
- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — From Answer Generators to Reasoning Facilitators
- [[conversational-ai-tutors-framework]] — The Path to Conversational AI Tutors
- [[ai-tutor-authoring-promptdecipher]] — PromptDecipher: AI Tutor Authoring

## Citation

Pardos, Z. A., Tang, M., Anastasopoulos, I., Sheel, S. K., & Zhang, E. (2023). [*OATutor: An open-source adaptive tutoring system and curated content library for learning sciences research*](https://doi.org/10.1145/3544548.3581574). In *Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems*. ACM. https://doi.org/10.1145/3544548.3581574
