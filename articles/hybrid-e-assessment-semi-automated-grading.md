---
title: "Hybrid E-Assessment in Higher Education: Semi-Automated Grading of Paper-Based Written Examinations"
created: "2026-06-10T07:38:00-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, llm]
assessment: [assessment, automated-assessment, formative-assessment]
research_method: [system development]
discipline: [stem education]
audience: [instructors, software developers]
level: [higher ed]
confidence: high
sources: ['raw/papers/2606.08855.md']
---

Grabowski and Canz (2026) argue that moving summative examinations onto computers is not a neutral change of medium: it narrows which tasks can be set. Digital systems such as ILIAS, JACK, LPLUS, and Q-Exam lean on multiple-choice and single-choice items because free-text answers cannot be graded fully automatically with the same reliability. Among surveyed lecturers, 51.4 % named the poor representability of their own examination questions as a central obstacle, and 76 % of respondents in mathematics and the natural sciences saw only limited possibilities for automated transfer.

Their alternative keeps the paper script and moves only the scoring surface. Students derive, calculate, or reason by hand and transfer the matching letter for each gap into an answer table, with a wide option pool such as A to Z so guessing stays unlikely. Scripts are scanned into one PDF, each table is cropped, and the image goes to two parallel vision-LLM requests — one with the solution key, one without — whose outputs are compared: agreement yields automatic points, divergence goes to the examiner. Across 3009 letters, Gemini 3 Flash produced 35 incorrect recognitions, while an earlier YOLO-5 pipeline reached only 88.28 %.

> **Synthesis:** This paper identifies the didactic narrowing caused by fully digital e-assessment (overuse of closed question formats) and proposes a hybrid approach that retains paper-based, problem-oriented examination tasks while enabling semi-automated grading. The core technical innovation is applying vision-capable LLMs to recognize handwritten characters in structured answer fields under realistic exam conditions, combined with a two-pass validation principle and comparison against a solution key to reduce misclassifications. The approach addresses organizational, technical, and legal constraints that become relevant in large student cohorts. This work connects [[automated-assessment|automated grading]] [[research-methods-aied|research]] to real-world assessment practice by acknowledging that fully digital assessment often degrades assessment quality, even as institutions push for scalability. The hybrid approach could inform [[formative-assessment]] redesign in large-enrollment [[stem-education|STEM]] courses.

## Key Findings

1. Fully digital assessment narrows task design: transfer, reasoning, and problem solving need differentiated evaluation, and formulae, sketches, and derivations are hard to enter digitally at all.
2. Scan-based systems such as EvaExam/evasys grade only closed questions automatically, and sections often allow one question with its options, so page density collapses below a conventional sheet.
3. Digitalization shifts load onto infrastructure: a foundational course with, for example, 800 students needs that many configured workstations, plus privacy screens and protection against manipulation and remote access.
4. The coding format decouples design from scoring — a free-fall derivation worth 6 Points becomes six gaps (1)–(6) with letter options A to Z, keeping the derivation on paper while making it machine-readable.
5. Handwriting recognition is the bottleneck: domain-specific YOLO-5 training plateaued at 88.28 %, which the authors call insufficient because roughly one error per ten letters risks legally relevant misgrading.
6. Vision-capable LLMs perform better: 35 errors for Gemini 3 Flash (98.84 %), 51 for Qwen3-VL-30B-A3B-Instruct (98.31 %), 104 for GPT-5 (96.54 %), 334 for Grok 4.1 Fast (88.90 %) across 3009 letters; setup stays a fixed per-examination cost that pays off only at scale.

## Why grading mechanics shape task design

Summative examinations certify learning outcomes and carry the same legal and procedural requirements as traditional examinations, yet they also shape how students study: past and expected examinations become central learning material. Asking only for a recalled fact — that falling velocity is independent of mass — forfeits the reasoning that produces durable learning, while fully automated grading rewards what it can parse. Closed formats represent stepwise problem solving only to a limited extent, and the syntax-driven authoring tools of highly automated systems make complex examination pages time-consuming and error-prone to build. The result is a task architecture set by software constraints rather than subject matter, which is why the authors keep the paper format as the starting point for didactically rich summative examinations.

## The coding format as a thin capture layer

Assessment-relevant intermediate results move into a structured gap or coding format, where each gap carries a fixed set of letter-based options, for example A to Z. In the free-fall example, students write the equations for kinetic and potential energy by hand, equate them, and recognize within the calculation that the mass cancels, then transfer only the matching letter for each of the six gaps. Automation therefore begins at standardized capture, not at restriction of the task architecture. The authors contrast this with a checkbox examination, where the answer options are the task: the response collapses into recognizing the correct alternative among the few shown. The letter assignment is instead a capture layer on a freely designed task, so the stepwise derivation survives.

## Recognition, validation, and the price of setup

The automation problem is robust character classification under authentic conditions: variable handwriting, stroke widths, corrections, and scanning or printing artifacts. Vision-capable LLMs help because they weigh the visual context of an entry and its position relative to the table structure, assigning a letter to the intended column even when it is shifted, crosses cell boundaries, or is placed atypically. Cropping each table and issuing two parallel requests — one with the correct solution, one without — gives a two-pass validation signal; agreement was reliable, leaving a small number of clearly identifiable problem cases for human review. Against that sits setup: configuration files map pages to table regions and columns to assessment criteria and point values, and recurring formats reuse them, but the initial setup stays a fixed cost the authors call uneconomical for small cohorts.

## What this means for practice

- **Instructors.** Do not flatten a complex examination into a checkbox format to gain automation. Identify the intermediate results that carry the reasoning, give each a small letter pool, keep the derivation on paper, and pilot the format on one recurring examination, budgeting configuration work as real cost rather than overhead.
- **Software developers.** Build the pipeline, not a single model call: crop tables from the scanned PDF, run one request with the solution key and one without, compare outputs, and route divergence to a human rather than resolving it silently. Surface results at page or table granularity so an examiner can confirm them in the interactive mode.
- **Students.** Transparency is deliberately narrow: students receive only the digitized table excerpt and the recognized letters, not the complete script, and can report deviations via the automatically captured student identifier.

## Limitations

- The recognition evaluation rests on one examination setting built by the authors: 3009 letters, with no cohort, recruitment, or sampling detail reported, so generalization beyond their structured answer tables is untested.
- No control condition is reported. Four vision models and one YOLO-5 baseline are compared with each other, never against fully manual grading on time, cost, or accuracy, so workload reduction rests on recognition rates alone.
- Part of the grading stays manual by design: cropping and configuring each examination, flagging two-pass divergences, and post-processing misrecognitions — 35 at best, 334 at worst — while the setup is a non-trivial fixed cost.
- Models were evaluated "in practical use" in one tested setting with approximate figures; by the authors' own standard, 88.90 % (334 errors) falls below the 88.28 % they already judged insufficient for summative use, so no deployment floor is established.

## Connected Concepts

- [[automated-assessment]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[higher-ed]]
- [[multimodal]]
- [[human-in-the-loop-ai]]
- [[authentic-assessment]]
## Connected Articles

- [[llm-sentiment-analysis-education-research]] — LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments
- [[rubric-aware-grading-rec-cbm]] — REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading
- [[student-misconceptions-conditionals-loops-taxonomy]] — How Students (Mis)understand Conditionals and Loops -- A Taxonomy
- [[correct-answer-trap-ai-tutor]] — Catching The Correct Answer Trap: Characterizing AI Tutor Blind Spots When Analyzing Student Reasoning
- [[automated-formative-assessments-a-level-sciences]] — The Effect of High-Frequency, Automatically-marked Formative Assessments on Student Outcomes in A-Level Sciences
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[llm-handwritten-math-grading]]

## Citation

Grabowski, H., & Canz, M. (2026). [*Hybrid E-Assessment in Higher Education: Semi-Automated Grading of Paper-Based Written Examinations*](https://arxiv.org/abs/2606.08855).
