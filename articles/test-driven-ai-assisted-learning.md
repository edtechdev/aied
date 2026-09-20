---
title: "Test-Driven, AI-Assisted Learning: Replacing Lectures with Weekly Closed-Book Tests"
created: "2026-06-23T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
pedagogy: [active-learning, scaffolding]
technology: [llm]
assessment: [assessment, automated-assessment]
research_method: [case study, mixed methods]
discipline: [cs education]
level: [higher ed]
sources: ['raw/papers/2606.23315.md']
confidence: medium
audience: [instructors, instructional designers, administrators]
---

> **Synthesis:** Liu et al. (2026) report on a 13-week Test-Driven, AI-Assisted (TDAA) redesign of a Theory of Computation course at HKUST (Guangzhou). The course replaced all lectures with [[self-directed-learning|self-directed]], AI-assisted learning and weekly closed-book tests serving as high-frequency quality gates. [[agentic-ai|AI agents]] helped the instructor prepare learning paths, course websites, test drafting, grading workflows, and content repairs — all managed through a version-controlled agent workspace. Student survey data (N=18), weekly scores, and git history suggest the model preserved individual accountability while making material production and marking scalable with [[human-in-the-loop-ai|human oversight]]. The work contributes a reusable design pattern for [[ai-changing-teaching-workflows]] that integrates [[active-learning]] principles with [[llm]]-powered [[scaffolding]], and offers practical implications for [[assessment]] design in [[higher-ed]] contexts. The approach connects to broader conversations about [[automated-assessment|Automated Grading]] and [[nie-personavlm-long-term-personalization-2026]] as enablers of scalable personalized education.

## What this means for practice

- **Instructors.** Replace lecture time with a strict weekly closed-book gate only after providing an explicit preparation path: across all 251 recorded student-test observations, 201 (80.1%) scored at least 100 raw points, and students averaged 5.61 on a seven-point item for fit with the subject.
- **Instructional designers.** Build the harness before the content. The authors state that without one, twelve weekly bundles and twelve graded tests are not realistic for one person; their reusable template bundles document and website templates, build commands, a GitHub Pages workflow, and named AI-assisted skills.
- **Administrators.** Fund instructor review rather than assuming AI removes it — the model keeps a human in the loop over AI-written material and grading, and one 13-week run indicates a workable design, not proven effectiveness.
- Add self-regulation scaffolds alongside the gate: Nine of 18 students said they rarely or only sometimes thought first before asking AI, and Seven of 18 said they could rarely or only sometimes tell when an AI explanation was wrong.
- Preserve targeted teaching even in a lecture-free design. Students ranked the self-paced plus AI block first among components (mean rank 2.56) and the 30-minute closed-book test second (3.22), yet still asked for short recorded videos and mini-lectures on the hardest topics.

## Limitations

- This is a single-course experience report, and the evidence is bounded accordingly: the survey has N = 18 and is self-reported and self-selected, measuring perception rather than learning, with no control group and no pre/post instrument, so no causal or effectiveness claim is made.
- Per-test scores are not linked across weeks and there is no final-exam outcome data, so weekly performance cannot be related to final attainment.
- The workload figures are planning estimates rather than time logs, and the git-history audit uses an author-defined notion of a "semantic repair" and is descriptive, not a benchmark.
- The instructor was also an author, which can bias material design and interpretation, and the subject is small and proof-heavy, so transfer to large or non-proof courses remains a hypothesis for future offerings.

## Connected Concepts

- [[active-learning]]
- [[llm]]
- [[assessment]]
- [[higher-ed]]
- [[automated-assessment]]
- [[scaffolding]]
- [[self-regulated-learning]]
## Connected Articles

- [[ai-changing-teaching-workflows]]
- [[nie-personavlm-long-term-personalization-2026]]
## Citation

Jin-Guo Liu, Shang-Qi Lu, Xin-Ran Shi, Long-Li Zheng, Wei Wang (2026). [Test-Driven, AI-Assisted Learning: Replacing Lectures with Weekly Closed-Book Tests](https://arxiv.org/abs/2606.23315).
