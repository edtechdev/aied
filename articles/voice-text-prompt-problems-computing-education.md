---
title: Say What? Examining Text and Voice Input Modalities for Prompt-Based Programming in Computing Education
created: "2026-07-08T04:33:04-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
foundations: [ai-literacy]
technology: [generative-ai, intelligent-tutoring, llm, prompt-engineering]
stakeholders: [student-experience]
research_method: [qualitative, mixed methods]
discipline: [cs education]
audience: [learners]
sources: ['raw/papers/2607.05808.md']
confidence: high
level: [higher ed]
---

> **Synthesis:** Nearly all prior [[research-methods-aied|research]] on LLMs in computing education has used text input, yet voice-enabled interfaces are becoming common. This exploratory study investigated how introductory programming students interact with **Prompt Problems** — tasks requiring natural-language prompts to generate correct code — under free choice of text or voice (N = 919). For two of three problems, students who typed were more likely to succeed on the first attempt than those submitting unedited voice prompts; editing transcribed voice prompts before submission erased the gap. Most students tried and preferred text, though some used voice complementarily. [[qualitative-research|Qualitative]] analysis revealed perceived roles, drawbacks, and advantages of each modality, with implications for [[multimodal]] tools and [[learning-design|instructional design]].

- **Modality matters for first-attempt success:** Unedited voice prompts underperformed typed ones on two of three problems; editing transcribed voice closed the gap — extending [[prompt-problems-nl-programming-mistakes]].
- **Student preference for text:** Despite voice availability, most students chose and preferred typing, relevant to [[student-experience]] design.
- **Complementary use:** Some students mixed modalities, suggesting non-preferential, context-dependent strategies tied to [[prompt-based-programming-lesson]] practice.
- **Instructional design:** Findings inform multimodal [[cs-education]] tooling and [[ai-literacy]] around prompt construction.
- **Scales Prompt Problems research:** Large N (919) builds on the [[programming-its]] Prompt Problems line of work.

## What this means for practice

- **Learners.** Type your first prompt when the wording has to be exact, and reserve voice for rough drafting: compared with text prompting, unedited voice prompts had lower odds of immediate success on two of the three problems (OR = 0.50, 95% CI [0.27, 0.89]; OR = 0.43, 95% CI [0.23, 0.83]).
- **Learners.** Read and fix the transcript before submitting if you do dictate, because students who edited their voice prompts did not differ significantly from typers (OR = 0.57 and OR = 0.72, both n.s.) — editing erased the gap.
- **Instructors.** Offer voice as an option rather than a default for prompt-based tasks: 813 students used text only (88.5%), 44 used voice only (4.8%), and 62 tried both (6.7%), and those who did use voice were not deterred by it.
- **Instructors.** Keep a text fallback for non-native English speakers, who cited transcription errors as a reason for preferring typing.
- **Designers.** Ship an edit-before-send step and surface transcription quality in [[multimodal]] prompt tools, since the unedited-versus-edited voice gap is the clearest actionable difference in the study.

## Limitations

- Students self-selected into modality and few chose voice (44 voice-only users of 919), limiting generalizability, and causality cannot be established — whether modality influences outcomes or student characteristics drive modality choice.
- Only 62 students attempted both prompting approaches, so the within-problem persistence analysis never attained sufficient sample sizes.
- Some students, including non-native English speakers, reported transcription issues, so evaluations may reflect technology performance rather than the modality itself, and transcription delay was not measured.
- The three problems were relatively simple and short, and modality preference rests on two self-report reflection questions rather than a validated technology-acceptance instrument.

## Connected Concepts

- [[student-experience]]
- [[cs-education]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[multimodal]]
- [[generative-ai]]

## Connected Articles

- [[prompt-problems-nl-programming-mistakes]]
- [[prompt-based-programming-lesson]]
- [[programming-its]]
## Citation

Riegel, K., Hua, Y. C., Denny, P., Pădurean, V.-A., & Leinonen, J. (2026). [Say What? Examining Text and Voice Input Modalities for Prompt-Based Programming in Computing Education](https://arxiv.org/abs/2607.05808).
