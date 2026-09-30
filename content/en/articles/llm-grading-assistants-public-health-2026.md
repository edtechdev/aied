---
title: "Large language models as grading assistants in public health education: a method-comparison study of essay-style exam assessment"
created: "2026-09-30T11:13:23-04:00"
updated: "2026-09-30T11:13:23-04:00"
type: article
sources: ['raw/papers/10.3389_feduc.2026.1904452.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [experiment]
discipline: [medical education, nursing education]
level: [graduate]
audience: [instructors, assessment designers, assessment professionals, faculty developers, researchers]
foundations: [ai-education, human-ai-collaboration, limitations-in-aied-research, teacher-role]
pedagogy: [professional-training]
technology: [llm, generative-ai, prompt-engineering, human-in-the-loop-ai]
assessment: [automated-essay-scoring, automated-assessment, assessment-validity, evaluative-judgment, summative-assessment, educational-measurement]
methods: [quantitative-research, benchmark]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Brevik, Jerpseth and Lafontan ran a method-comparison and validation study in which four general-purpose LLMs—[[generative-ai|ChatGPT]] 5.2, LeChat Pro, Gemini 3 and Kimi K2, with Gemini Pro added in thinking mode—graded the same 32 anonymized submissions from a 5-hour essay-style exam in a master's-level public health course at OsloMet, using the same A–F guidelines as two human examiners. Agreement was measured with weighted Cohen's kappa in a single-file upload setting, internal consistency across file upload volumes with Krippendorff's alpha, and the best-aligned model regraded the same submissions on five different days. ChatGPT in thinking mode reached weighted kappa 0.718 (95% CI 0.578–0.859) and Kimi 0.571 (95% CI 0.373–0.768), but the same model's five-day repeat landed at Krippendorff's alpha 0.625. The most important qualification is that the design used only two human graders as its [[benchmark]] and left temperature at defaults, so the reported alignment is a pragmatic comparison with current practice, not a guarantee of [[assessment-validity|validity]] or stability.

## Key Findings

- **Reasoning modes lifted agreement; fast modes did not.** ChatGPT in thinking mode reached weighted kappa 0.718 (95% CI 0.578–0.859) and Kimi 0.571 (95% CI 0.373–0.768). In fast mode the best result was Gemini at 0.287 (95% CI 0.115–0.459), ahead of ChatGPT 0.269 (95% CI 0.051–0.487), Kimi 0.227 (95% CI 0.062–0.391) and LeChat 0.070 (95% CI −0.061–0.201). In thinking mode Gemini fell to 0.237 (95% CI 0.098–0.376), LeChat to 0.186 (95% CI 0.019–0.354) and Gemini Pro stood at 0.380 (95% CI 0.178–0.582).
- **Exact agreement was modest, near agreement was higher.** ChatGPT matched the human grade exactly in 50.0% of submissions and within ±1 grade in 90.6%. Kimi followed at 28.1% exact and 78.1% within ±1, then LeChat at 25.0% and 68.8%, Gemini Pro at 37.5% and 68.8%, and Gemini at 15.6% and 56.3%.
- **File upload volume did not break consistency, and did not preserve it either.** Gemini (Krippendorff's alpha 0.593–0.614) and Gemini Pro (0.691–0.702) were the most consistent across 1, 3, 5 and 7/8 files. ChatGPT ranged from 0.357 to 0.526 in fast mode and 0.360 to 0.492 in thinking mode, and the authors found no clear monotonic relationship between upload volume and consistency.
- **Repeating the same grading did not reproduce it.** ChatGPT graded the same single-file submissions on five different days at Krippendorff's alpha 0.625 (95% CI 0.445–0.735). The variation was concentrated in the middle grades, and the most extreme grades—A and F—were missing completely from the five-session frequency count.
- **LLMs avoided the ends of the scale.** In fast mode, grades E and F did not appear at all in the [[llm]] results. Across the study the models used fewer extreme grades than the human examiners, and ChatGPT's differences were grade-dependent: at the lower end it graded higher than the humans, at the upper end lower, a pattern consistent with central tendency or grade compression.
- **Word count tracked grade for most assessors.** Spearman's rho between final grade and submission word count was 0.642 for Gemini Pro, 0.603 for human examiners, 0.501 for ChatGPT, 0.495 for Gemini, 0.311 for Kimi and −0.035 for LeChat.

## How the comparison was run

The setting was a 5-hour essay-style examination with three open-text questions in the master's-level course "Public health, empowerment, and health promotion." Human examiners graded first and published their grades to students before any LLM grading began; one author who did not run the LLM tests replaced student IDs with random experimental IDs in the PDFs, so the models graded blind and never saw human grade levels.

All models received the identical prompt, the same examiner guidelines (written for humans, not for LLMs), and the same input format, in a zero-shot setup with a new chat window per test. Runs were performed in January 2026 on default system settings, with temperature and randomness not explicitly controlled. Grading began with one file at a time and was later repeated with multiple-file uploads of 3, 5 and 7/8 files to probe attention fatigue and judgment drift. Results were printed as JSON, combined in Excel and imported into SPSS 31.

## Where the models and the humans diverged

The near-identical average numeric grade—3.63 for human graders against 3.73 for the five ChatGPT parallels, a non-significant difference—concealed the disagreement that the Bland-Altman plot exposed. ChatGPT graded more favorably than the humans at the low end of the scale and slightly less favorably at the high end, so the near-zero mean difference cannot be read as close agreement at the level of an individual submission.

The authors compare their 50.0% exact match with the 35% reported for GPT-4 on a political science essay exam and call it a modest improvement. They also report that the broad-stroke guidelines they used contained no detailed grade mapping or rubrics, which they suggest may have limited how fully the models used the scale. Their practical recommendation is to treat the average or median of multiple assessments as the more prudent basis for real-world [[automated-assessment]], and to treat LLM grading as a supervised assistant rather than an autonomous grader.

## What this means for practice

- **Instructors and assessment designers.** Do not let an LLM assign a high-stakes [[summative-assessment|summative]] grade on a single pass: the best exact-match rate was 50.0%, with 90.6% within ±1 grade, and the paper ties autonomous use of default settings to unreliability.
- **Instructors.** Use reasoning or thinking mode rather than fast mode: the same model moved from weighted kappa 0.269 to 0.718.
- **Assessment designers.** Repeat the grading and take the average or median: five ChatGPT sessions on identical submissions produced Krippendorff's alpha 0.625, and the authors call the variation in the middle grades higher than at the extremes.
- **Faculty developers.** Write explicit criteria for the top and bottom of the scale: the models used fewer extreme grades, produced no E or F in fast mode, and left A and F absent from the repeated-session counts.
- **Assessment designers.** Do not assume batching files saves effort without cost: Gemini Pro held 0.691–0.702 across upload volumes, but ChatGPT fell to 0.357 with 1, 3, 5 and 8 files in fast mode.

## Limitations

- Only two human graders served as the operational reference standard, and the authors did not quantify human inter- or intra-rater variability, so human grading is a pragmatic benchmark rather than an absolute ground truth.
- The sample of 32 exam submissions was limited, which may affect generalizability.
- Model parameters such as temperature and randomness were left at defaults and not systematically controlled, and there was no snapshot-level control of the grading parallels, so minor backend changes cannot be ruled out.
- The grading guidelines were written for human evaluators and may not be optimally structured for LLMs, and formatted PDF inputs may have introduced noise from front pages, formatting and multipage frames.

## Citation

Brevik, A., Jerpseth, H., & Lafontan, S. R. (2026). [Large language models as grading assistants in public health education: a method-comparison study of essay-style exam assessment](https://doi.org/10.3389/feduc.2026.1904452). *Frontiers in Education*, 11, 1904452.