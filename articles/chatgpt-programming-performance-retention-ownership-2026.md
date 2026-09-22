---
title: "Your Programming Students' Cognition with ChatGPT: Higher Performance, Lower Retention, and Reduced Ownership"
created: "2026-09-21T09:21:46-04:00"
updated: "2026-09-21T09:21:46-04:00"
type: article
sources: ['raw/papers/chatgpt-programming-performance-retention-ownership-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [cs education]
level: [higher ed]
audience: [instructors, researchers]
foundations: [cognitive-offloading]
pedagogy: [problem-solving]
technology: [generative-ai]
assessment: [learning-gains]
methods: [quantitative-research]
reviewed_by: [editor]
---

> **Synthesis:** In a controlled between-subjects experiment, 55 [[higher-ed|undergraduate]] [[cs-education|computer science]] students at one university completed three introductory C programming tasks with or without ChatGPT-4.5. The AI-assisted group scored 20 points higher on the coding assessment (89% vs. 69%) yet recalled less of the same material immediately (41% vs. 53%) and 48 hours later (39% vs. 52%), and attributed only 45% of the submitted code to themselves against 81% in the no-AI group. Because the loss of recall information over 48 hours did not differ between conditions, the gap reads as weaker encoding during [[cognitive-offloading|AI-assisted work]] rather than faster forgetting, which puts [[generative-ai]] assistance and artifact-based [[assessment]] in direct tension.

## Key Findings
1. **Assisted performance rose while retention fell.** The ChatGPT group scored 89% on the coding assessment against 69% without AI, but 41% vs. 53% on the immediate cued-recall quiz and 39% vs. 52% at 48 hours.
2. **Ownership halved.** Students who worked with ChatGPT attributed 45% of the submitted code to themselves, compared with 81% in the conventional web-search condition.
3. **Mental effort rose less across tasks under AI.** [[self-report-measures|Self-reported]] effort increased less across the three tasks in the ChatGPT condition (Holm-adjusted p = .047), the load signature that [[cognitive-offloading]] research predicts.
4. **The physiological channels were inconclusive.** Confirmatory pupillometry and heart-rate-variability tests detected no significant differences in trajectories between conditions, and the authors report substantial data loss that limits their interpretation.
5. **Four of 59 participants were excluded for protocol reasons** — one AI-assigned participant never used the assistant and three did not attempt the third task — leaving 29 AI-assisted and 26 no-[[simulating-students|AI students]] in the analysis.
6. **Forgetting rates did not differ.** Both groups lost roughly two points of recall over 48 hours, so the AI group's deficit was already present at the immediate quiz: lower initial encoding rather than accelerated decay.
7. **Prior experience was covaried.** Prior programming experience (any language, and C specifically) was modeled as a covariate on performance and retention, and prior ChatGPT familiarity on ownership, so the headline gaps are adjusted estimates.

## Coding scores and recall move in opposite directions
The result that makes this study worth reading is not that AI helps students finish programming tasks faster; several [[meta-analysis-systematic-review|meta-analyses]] already report that. It is that the two outcome measures diverged inside the same session, with the same students. Participants solved introductory C problems and then answered a ten-question cued-recall quiz on the material, first immediately and again 48 hours later. The [[generative-ai]] group's coding advantage was large, and its recall disadvantage was present at both measurement points, which rules out differential forgetting as the explanation. The design also pseudo-randomly assigned participants to the two conditions so that gender was balanced across them.

## Ownership and the artifact-as-proxy problem
Students in the ChatGPT condition claimed less than half of the code they submitted (45%), against 81% without AI, a difference the authors treat as [[learner-identity|psychological ownership]] rather than a grading artifact. The [[pedagogy|pedagogical]] problem is that most programming assessment assumes the submitted artifact is a sufficient proxy for what a student knows, and this experiment is a direct test of that assumption: the artifact improved while the underlying recall fell. Instructors who grade only the working program therefore see the strongest scores from the students with the weakest retention, which is a [[assessment-validity|validity]] problem before it is an AI problem.

## What the load measures could and could not show
Cognitive load was measured on four channels: self-reported effort and difficulty (Paas scale), mean pupil diameter from a research-grade eye tracker, heart-rate variability, and task performance. Only the self-report channel produced a significant between-condition result, with effort rising less across tasks under AI assistance. The authors state plainly that the confirmatory physiological tests detected no significant trajectory differences and that substantial data loss limits their interpretation, so the load story rests on a single self-report measure — a measured claim rather than a general one about the physiology of [[cognitive-psychology|cognitive load]]. The design is nonetheless notable for trying.

## What this means for practice
- **Instructors.** Grade learning, not only the artifact: follow AI-assisted coding work with an unaided recall or explanation task, because submitted code substantially overstates what students in this study could reproduce two days later.
- **Assessment designers.** Treat ownership as a signal worth collecting. A short self-report of how much of the work the student attributes to themselves tracked the retention outcome here at no measurement cost.
- **Researchers.** The 48-hour window and the 55-student single-site sample bound what this design can support; a longer retention interval and a delayed-transfer task are the obvious next studies.

## Limitations
- One university, 55 of 59 recruited students analyzed, with 29 in the AI condition and 26 without, so the study is powered for large effects only.
- The confirmatory physiological load channels lost substantial data and detected no significant differences; the cognitive-load conclusion rests on self-reported effort.
- Retention was measured at 48 hours only, so nothing here shows whether the recall gap persists, widens, or closes with practice.
- Assistance was ChatGPT-4.5, and no data-collection window is reported, so the size of the performance advantage is specific to that model generation.

## Connected Concepts
- [[cognitive-offloading]]
- [[generative-ai]]
- [[cs-education]]
- [[learning-gains]]
- [[assessment]]
- [[assessment-validity]]
- [[learner-identity]]
- [[problem-solving]]
- [[self-report-measures]]
- [[metacognition]]

## Connected Articles
- [[cognitive-offloading-llm-synthesis-writing]] — Profiling cognitive offloading in LLM-mediated synthesis writing
- [[jost-llm-programming-education-learning-outcomes]] — The Impact of Large Language Models on Programming Education and Student Learning
- [[genai-meta-analysis-programming-learning]] — A meta-analysis of the effect of generative AI on productivity and learning in programming
- [[liu-tool-tutor-crutch-programming-2026]] — Tool, Tutor, or Crutch?: A Grounded Theory of Cognitive Scaffolding and Offloading
- [[llm-interaction-depth-task-quality-recall-2026]] — What Students Ask Matters: LLM Interaction Depth, Task Quality, and Immediate Recall
- [[thinking-with-ai-reasoning-without-it-2026]] — Thinking with AI, reasoning without it
- [[ai-writing-support-stage-ownership-2026]] — From Planning to Revision: How AI Writing Support at Different Stages Alters Ownership
- [[soft-barriers-copying-ai-programming-2026]] — Do Not Copy/Paste: Soft Barriers for Copying in AI-Assisted Programming

## Citation
Bergh, C., Tag, B., Vassar, A., & Renzella, J. (2026). [Your Programming Students' Cognition with ChatGPT: Higher Performance, Lower Retention, and Reduced Ownership](https://arxiv.org/abs/2609.21194). arXiv:2609.21194.
