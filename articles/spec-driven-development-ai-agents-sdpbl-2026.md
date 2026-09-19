---
title: "Practical Implementation Report on Introducing Spec-Driven Development Using AI Agents in Software Development PBL"
created: "2026-09-06T04:55:00-04:00"
updated: "2026-09-19T07:12:05-04:00"
type: article
foundations: [agentic-ai, cognitive-offloading]
pedagogy: [project-based-learning]
research_method: [case study]
discipline: [cs education]
audience: [instructors, researchers]
level: [higher ed]
sources: ['raw/papers/2608.30572.md']
confidence: high
---

> **Synthesis:** This practical implementation report (Tanaka et al., 2026; accepted at CSEE&T 2026) documents how Spec-Driven Development (SDD) — a methodology in which [[agentic-ai|AI agents]] generate documentation and code from structured specification documents — was introduced into a third-year undergraduate Software Development Project-Based Learning (SDPBL) course in Japan across the 2025 academic year. Using weekly self-report surveys, added-lines-of-code (LOC) data from Git, and one-on-one instructor interviews of code comprehension, the study finds that AI agent use varied markedly by team and by development phase, that implementation throughput rose across 2022–2025 in step with [[llm]] proliferation, and that heavier AI use coincided with drops in code comprehension — a risk the authors argue must be managed through continuous instructor monitoring, timely intervention, and accountability for AI-generated code.

## Key Findings

1. **AI use varied by phase and team (RQ1).** Across four SDD phases (investigation, planning, implementation, review), all four teams used AI to some extent in implementation and debugging, but use in investigation, planning, and especially review differed greatly between teams. Team 25C used AI least; Teams 25A and 25B used it effectively across all phases.
2. **Implementation throughput rose in step with LLM availability (RQ2).** Steel-Dwass tests on added LOC per lecture across 2022–2025 found statistically significant increases in seven of eight lectures, with earlier years (2022–2023) consistently below later years (2024–2025). No lecture showed later years with *fewer* added LOC.
3. **Higher AI use coincided with lower code comprehension, but not as a clean statistical trend (RQ3).** Students who reported no AI use maintained consistently high comprehension; those at the highest AI-usage levels showed low comprehension, especially mid-course. Yet no significant overall correlation emerged, likely due to small samples and instructor interventions.
4. **Instructor [[feedback]] appeared to buffer comprehension risk.** Comprehension dropped when AI usage peaked (lec09) but recovered after one-on-one instructor interviews, suggesting proactive checking of code understanding can mitigate over-reliance.
5. **Recommended practices for AI-agent-supported PBL.** The authors recommend a foundation-first tutorial period, continuous monitoring with timely intervention, and holding students accountable for explaining AI-generated code, plus standardized project templates with pre-configured AI instructions (e.g., `copilot-instructions.md`).

## Implications

This report speaks directly to the [[cs-education|programming education]] thread on AI-assisted coding and to the wiki's [[cognitive-offloading]] literature: it is a field-level demonstration that AI agents can accelerate development *without* guaranteeing learning, echoing findings in [[liu-tool-tutor-crutch-programming-2026]] and [[genai-meta-analysis-programming-learning]]. For [[teacher-role|instructors]], its concrete, transferable design (four-phase SDD workflow, spec templates, weekly one-on-one comprehension interviews) offers a template for integrating [[agentic-ai]] into [[project-based-learning]] while keeping code comprehension in view. It also raises design questions about [[scaffolding]] and [[metacognition]] — when AI does the implementation, what mechanisms ensure students still develop understanding?

## What this means for practice

- **Instructors.** Protect a foundation-first period: keep the first five of the fourteen sessions as tutorials on the framework before students lean on AI agents, and distribute a standardized project template with pre-configured `copilot-instructions.md` and specification templates.
- **Instructors.** Hold short one-on-one comprehension checks every week; in this course comprehension dropped when AI use peaked at lec09 and recovered at lec10 after instructor interviews.
- **Instructors.** Require students to explain the logic of any code they did not write themselves, using the interview as an accountability mechanism rather than a shortcut check.
- **Researchers.** Treat added lines of code as throughput rather than learning: the metric cannot separate accelerated development from comprehension, and it is not a proxy for class design quality or refactoring.

## Limitations

- There was no concurrent control group; the 2025 SDD cohort is compared against historical 2022–2024 data, so changes in student skill sets, cohort size, and the educational environment cannot be ruled out.
- The scale is small: the 2025 cohort was 14 students in 4 teams, against 38 students in 10 teams in 2022, and the study covers one elective Java and Spring Boot course at a single institution.
- Added lines of code is a crude efficiency proxy that misses class design quality, refactoring, and redundant-code removal, and code comprehension was scored by instructors subjectively rather than by objective tests.
- Instructor interventions are a confound for the central finding: the absence of a negative correlation between AI usage and comprehension may itself reflect the weekly one-on-one interviews.

## Connected Concepts

- [[cs-education]]
- [[project-based-learning]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[higher-ed]]

## Connected Articles

- [[agentic-education-coding]] — Agentic AI tools in coding education
- [[ai-writes-code-student-writes-model-2026]] — Ensuring comprehension when AI writes the code
- [[liu-tool-tutor-crutch-programming-2026]] — Scaffolding vs. offloading in AI-assisted programming
- [[code-review-genai-cs1]] — Instructor-led verification of AI-generated code in CS1
- [[genai-meta-analysis-programming-learning]] — Effects of generative AI on programming learning
- [[reshaping-cs-education-genai]] — Redesigning CS education for the generative-AI era

## Citation

Tanaka, H., Igaki, H., Shimari, K., Honda, K., & Fukuyasu, N. (2026). [Practical Implementation Report on Introducing Spec-Driven Development Using AI Agents in Software Development PBL](https://arxiv.org/abs/2608.30572). *arXiv preprint arXiv:2608.30572*.
