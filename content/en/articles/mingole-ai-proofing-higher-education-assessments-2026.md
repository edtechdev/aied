---
title: 'Generative AI and the Crisis of Higher Education Assessments: Examining "AI-Proofing" Strategies for College-Level Assessments'
created: "2026-11-17T09:40:00-05:00"
updated: "2026-11-17T09:40:00-05:00"
type: article
authors: ["Mingole, B.", "Yadav, D.", "Lee, H. M.", "Sundar, S. S.", "Yadav, A."]
published: "2026"
venue: "arXiv preprint 2611.21476"
source_url: https://arxiv.org/abs/2611.21476
evidence_context: educational
confidence: medium
foundations: [academic-integrity]
technology: [llm, generative-ai]
assessment: [assessment, assessment-validity, summative-assessment]
methods: [benchmark, quantitative-research]
ethics: [equity-in-ai-education]
research_method: [experiment]
discipline: [cs education, engineering education, humanities education]
level: [higher ed, undergraduate, graduate]
audience: [instructors, administrators, researchers]
page_kind: [evaluation]
sources: ['raw/papers/mingole-ai-proofing-higher-education-assessments-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

> **Synthesis:** Mingole and colleagues collected 75 authentic questions from college coursework in [[higher-ed|higher education]], contributed by 37 faculty at eleven universities, 61 of them written expressly to resist [[generative-ai|generative AI]], and put each to three frontier [[llm|LLMs]] ten times, with and without course materials. The models answered well anyway. On the hardened questions GPT-5.4 averaged 83.2 out of 100 without materials and 85.3 with them, and Claude Sonnet 4.6 reached 82.1 against 88.2 on 14 questions nobody had hardened. Five instructor "AI-proofing" strategies emerged from the faculty rationales, but only one, adding strategic complexity, consistently lowered scores, and it still left a median of 78. Demanding a specific output format produced the highest scores in the dataset, 91. Instructors cannot, on this evidence, protect [[summative-assessment|summative assessment]] by making individual questions harder.

## Key Findings

- **Hardened questions were answered anyway.** GPT-5.4 scored 83.2 on the 61 questions faculty designed to resist AI without course materials and 85.3 with them; Claude Sonnet 4.6 scored 82.1 and Gemini 2.5 Flash 78.7.
- **Course materials added almost nothing.** Lecture notes and slides moved GPT-5.4 by 2.1 points and Gemini by 0.4 on the hardened set, while Claude scored 0.1 points lower with materials than without them.
- **Only strategic complexity resisted.** Questions with added complexity had a median of 78 without materials and 81 with them, against 88 and 87 for the unhardened control: the only consistent reduction, at 7 to 10 points.
- **Output-format demands backfired.** Requiring structured formats such as the IRAC sequence or annotated graphs produced the highest medians in the study, 91 without materials and 92 with them, above the control group.
- **Some single items did hold.** A physics question averaged 3 out of 100 under both conditions, and one computer science tweak dropped from 95 to 87 without materials, so resistance is possible item by item.
- **Answer format barely mattered.** Reasoning and calculation items reached medians of 83 and 82, programming 85 and 88, and graphical representation 86 under both conditions, with the widest spread at 32 to 35 points.

## Five strategies, and what the instructors believed

Thirty-seven faculty at ten U.S. universities and one U.K. university submitted 66 questions; 61 survived screening, 50 written from scratch and 11 as tweaked versions of existing items. Three authors coded the rationales instructors attached to submissions, settling disagreements by consensus, yielding five strategies. The first was to create "unsearchable" original content, problems built from nothing available online, as one instructor described it, "without any inspiration from the Internet." The second exploited known [[llm|LLM]] weaknesses, such as arithmetic that requires tracking letter positions. The third required class-specific knowledge, notation or terminology. The fourth added strategic complexity: layered problem structures, adversarial image noise, deliberate misdirection, deleted hints. The fifth demanded a specific output format, such as an IRAC structure or an annotated distribution graph. The 11 tweaked items arrived with their originals, which let the authors compare a question against itself rather than against a different question in another discipline. Resisting the model is not the same question as whether a grade still evidences individual understanding, which is the [[assessment-validity|validity]] problem the exercise exposes.

## Only added complexity moved the scores

Grouping all 75 questions by strategy and taking the median of the per-question averages, no strategy pushed the median below 75. The unhardened control sat at 88 without course materials and 87 with them. Unsearchable content reached 83, class-specific knowledge 82, and exploited limitations 84, modest gains that came with outlier items scoring between 33 and 65; the authors read that spread as evidence the strategies can work when executed well. Strategic complexity was the exception, at a median of 78 without materials and 81 with them, and it contains the physics question that averaged 3 out of 100. The within-question comparison of 11 pairs agrees. Four of the five complexity tweaks scored lower than their originals, by 0.5 to 9.2 points, including a computer science item that fell from 95 to 87 without materials and from 95 to 86 with them.

## Output formats and answer types did not constrain the models

Strategy five, demanding a specific output format, produced the highest medians in the dataset: 91 without materials and 92 with, above the control group and with little variability. In the paired comparison one such item rose from 84 to 96 and the other three moved less than 3 points in either direction, so constraining the shape of an answer left the model's command of its content untouched. Answer type told the same story, and each item carried a solution file and a rubric normalized to 100 points, which separates the set from a [[benchmark|benchmark]] of multiple-choice items. Reasoning and calculation items, the largest group at 30, reached medians of 83 and 82. Programming items (13) reached 85 and 88 with the tightest distribution, fitting code generation as a well-supported capability. Graphical representation items (6) reached 86 under both conditions but varied most, with interquartile ranges of 32 to 35 points, and two humanities items averaged only 47 to 50, a reminder that [[multimodal|multimodal]] answers are unevenly supported.

## What this means for practice

- **Instructors:** Run a question through a current model before you set it, and treat format requirements as likely to raise scores rather than lower them; this study found demanding an output structure made questions easier, not harder.
- **Instructional designers:** Build AI use into the task rather than designing around it, for example by requiring students to critique and correct a model's answer, because the evidence says the answer itself is no longer scarce and [[corbin-essay-time-genai-2026|structural redesign]] is the alternative the authors prefer.
- **Administrators:** Stop treating question-level hardening as an [[academic-integrity|integrity]] control; fund the components this study did not test, such as [[asynchronous-oral-assessment-2026|oral]] and in-person assessment, and shift policy from prohibition toward disclosed use.
- **Assessment designers:** Add complexity only where it carries disciplinary meaning, since stacked difficulty was the one strategy that moved scores and it still left a median of 78.

## Limitations

- The dataset holds 75 questions, 33 of the hardened items come from computer science, and the graphical category has 6 items, so every subgroup comparison is thinly powered.
- Grading was automated: GPT-5.4 scored all 4,500 answers against rubrics, and a human re-graded 102 responses, about 2% of the total, with no p-value below 0.05 in that check.
- The questions came from faculty who volunteered for a competition about AI, and the models are three paid versions current in 2026, so both the sample and the capability snapshot will date.
- Nothing here observes students. The unit of analysis is a model's answer against a rubric, so the study cannot say how often students actually submit such answers or how any of it would fare under [[ai-detection|detection]].
- The five strategies were derived from instructors' accounts of their own designs, a [[self-report-measures|self-report]] basis rather than an independent classification of the questions.

## Citation

Mingole, B., Yadav, D., Lee, H. M., Sundar, S. S., & Yadav, A. (2026). [*Generative AI and the Crisis of Higher Education Assessments: Examining "AI-Proofing" Strategies for College-Level Assessments*](https://arxiv.org/abs/2611.21476). arXiv preprint 2611.21476.
