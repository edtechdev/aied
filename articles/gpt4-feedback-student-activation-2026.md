---
title: "GPT-4 feedback increases student activation and learning outcomes in higher education"
created: "2026-09-03T15:00:00-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
pedagogy: [student-engagement]
technology: [generative-ai, llm]
assessment: [ai-feedback-quality, feedback, formative-assessment, learning-gains]
sources: ['raw/papers/gpt4-feedback-student-activation-2026.md']
confidence: high
research_method: [experiment]
audience: [instructors, educators, faculty development]
level: [higher ed]
---

> **Synthesis:** Geschwind, Graf Lambsdorff, Voss, and Hackl (2026) conduct a [[quantitative-research|lab-in-the-field experiment]] across one semester in undergraduate macroeconomics tutorial classes at the University of Passau, comparing three feedback conditions: group-level lecturer feedback only (LF), lecturer feedback plus individual [[feedback]] from an anonymous peer (PF), and lecturer feedback plus individual feedback from [[generative-ai|GPT-4]] (AIF). Students answered eight weekly open-ended questions and received feedback across all three Hattie & Timperley dimensions (Feed-Back, Feed-Up, Feed-Forward). The authors find that [[llm|AI-generated]] individual feedback significantly boosts [[student-engagement|student activation]] — sustaining the highest participation rates and producing the longest written answers across tasks — and yields the largest improvements in content learning, which they attribute to the higher reliability and quality of AI feedback relative to peers.

## Key Findings

- **AIF sustains participation.** Relative to lecturer-feedback baseline, students receiving GPT-4 feedback maintained the highest [[student-engagement|participation]] over the eight tasks (still ~50% by Task 8, vs ~30% for LF and PF); the LF-vs-AIF difference was significant at the 10% level (Fisher's exact, p = 0.054), whereas PF did not significantly outperform LF.

- **AIF induces greater effort on the intensive margin.** Random-effects models on task-by-task changes show returning AIF students wrote ~29 characters more per answer than their LF counterparts (significant), while the PF effect was smaller and insignificant — evidence of stronger [[motivation|activation]] rather than mere group-level feedback.

- **AIF produces the strongest content learning gains.** AIF students showed a significant improvement in content scores (~0.11, p < 0.10; rising to 0.16 when restricted to those who actually received prior feedback), while no significant differences emerged for answer style across conditions — the activation-boosting intervention also produced higher-quality output.

- **Feedback reliability drives the AI advantage.** Nearly all AIF respondents (369/398) received both textual and numeric feedback, whereas under two-thirds of PF students received no textual peer feedback at all; many peers delivered non-targeted praise rather than task-focused, improvement-oriented guidance. When high-quality textual peer feedback was received, PF performance matched AIF, indicating the AI's edge stems from consistent, reliable provision rather than inherent superiority.

- **AI feedback is valued less but activates more.** Students rated peer feedback slightly higher on perceived validity and emotional response (evidence of mild [[trust|algorithm aversion]]), yet the reliable provision of AI feedback still translated into higher participation and learning gains — perceived preference did not align with behavioral outcomes.

- **Personalization without sacrificing consistency.** AIF offered individually tailored feedback at scale while maintaining uniform quality, overcoming the personalization–consistency trade-off that constrains [[human-ai-collaboration|peer and adaptive systems]], suggesting GPT-4 can complement lecturer feedback and substitute for unreliable peer feedback in large classes.

## What this means for practice

- **Instructors.** Attach individual GPT-4 feedback to every weekly written answer in large classes where lecturer-only feedback cannot reach individuals, and keep a short lecturer-led debrief of the group's common errors as the safety net the authors recommend.
- **Instructors.** Reserve AI feedback as a substitute for peer feedback only where peer engagement cannot be enforced: students who did receive substantive textual peer feedback performed like the AI group, so the AI advantage is a reliability effect, not a quality effect.
- **Instructors.** Keep the task design in view when reading the gains. The study used tasks with a single correct argumentation path, so before extending the arrangement to open-ended problems, verify that the model's feedback still discriminates good from poor reasoning where multiple answers are defensible.
- **Faculty developers.** Train tutors to audit the model's numeric and textual ratings against the sample solution before feedback goes out, and to reuse the three Hattie and Timperley dimensions the study standardized (Feed-Back, Feed-Up, Feed-Forward) so AI and peer conditions stay comparable.
- **Administrators.** Scale only with supervision in place: the authors recommend a complementary role in which teachers follow individual AI feedback with general subject discussion, and warn that the AI can be fallible on individual cases.

## Limitations

- The experiment ran for one semester in non-compulsory undergraduate macroeconomics tutorials at a single university: 265 students submitted in the first task, and the study collected 1167 observations across eight tasks against the 2120 that full participation would have produced, so attrition is substantial and part of the analysis is conditional on prior participation.
- Tracking depended on self-generated pseudonyms — 47 of the 1167 observations had no pseudonym and 68 duplicated another student's, leaving 1052 observations with complete pseudonym information — and treatment switching had to be excluded from the analysis.
- Learning outcomes were not exam scores but post-hoc human scoring of the written answers by three raters (Cronbach's alpha 0.87 for content, 0.70 for style), and lecturer feedback and discussion were deliberately not recorded, so the group-level baseline varied across tasks and lecturers.
- Results are specific to GPT-4 and to German, one of the model's strongest languages, and the authors state that the AI's feedback capability may decline in languages where it is less proficient; they also flag that effects may vary by student characteristics such as gender or cultural background.

## Connected Concepts

- [[feedback]]
- [[ai-feedback-quality]]
- [[higher-ed]]
- [[student-engagement]]
- [[learning-gains]]
- [[formative-assessment]]
- [[llm]]

## Connected Articles

- [[ai-generated-feedback-higher-ed]] — AI-generated feedback in higher education
- [[becerra-aicofe-feedback-2026]] — AI-powered collaborative feedback
- [[coach-not-crutch-ai-writing]] — AI vs. human feedback on writing practice
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI vs. human-developed assessment tasks
- [[llm-formative-feedback-systematic-review-2026]] — Systematic review of LLM formative feedback
- [[genai-educational-outcomes-meta-analysis]] — Meta-analysis of generative AI learning outcomes

## Citation

Geschwind, S., Graf Lambsdorff, J., Voss, D., & Hackl, V. (2026). [GPT-4 feedback increases student activation and learning outcomes in higher education](https://doi.org/10.1016/j.ijaied.2026.100014). *International Journal of Artificial Intelligence in Education*, 36, 100014.
