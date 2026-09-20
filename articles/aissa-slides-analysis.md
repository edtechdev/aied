---
title: "AISSA: AI-based Student Slides Analysis Tool for Academic Presentations"
created: "2026-05-09T04:33:04-04:00"
updated: "2026-09-20T08:29:17-04:00"
type: article
technology: [human-in-the-loop-ai, learning-analytics, llm, visualization]
assessment: [automated-assessment, automated-question-generation, formative-assessment]
research_method: [system development]
level: [higher ed]

sources: ['raw/papers/2605.04729.md']
confidence: medium
discipline: [engineering education]
audience: [instructors, assessment designers, instructional designers]
page_kind: [evaluation]
---

> **Synthesis:** A web-based system that uses [[llm|LLMs]] and [[learning-analytics|Learning Analytics]] dashboards to provide [[automated-assessment|automated, rubric-based feedback]] on student presentation slides. Developed by Becerra et al. (2026), AISSA addresses the scalability challenge of providing timely [[formative-assessment|formative feedback]] in large university courses.
## Key Findings
1. AISSA combines [[llm|LLMs]] (ChatGPT 5.2) with [[learning-analytics|Learning Analytics]] dashboards to deliver [[automated-assessment|rubric-based scoring]] and structured [[feedback]] on presentation slides before students present.
2. In a pilot with 46 final-year undergraduate students, AISSA reliably processed 90 presentations with end-to-end times of roughly 1–3 minutes per submission and no extraction or JSON-output errors.
3. Students rated usability highly (average [[usability-research|System Usability Scale]] score of 83.38) and adopted an iterative workflow of uploading drafts, reviewing feedback, revising, and resubmitting.
4. The LLM integration proved economically feasible at an estimated \$0.06–0.07 USD per evaluation, while students selectively applied recommendations, sometimes disregarding suggestions that conflicted with their planned visual design.

## Background and Motivation
[[feedback|Feedback]] is a foundational pillar of effective [[teacher-role|teaching]] and learning: it lets students see the gap between current performance and intended goals, supporting reflection and [[self-regulated-learning|self-regulation]]. Yet delivering timely, specific, and rubric-aligned feedback remains a persistent challenge in [[higher-ed|higher education]], especially for oral presentations, where feedback often arrives as a final performance review too late to revise visual materials. In large, massified courses, teachers cannot realistically provide detailed [[formative-assessment|formative]] review of every slide deck beforehand. AISSA is designed to close this gap by shifting automated [[assessment]] earlier in the workflow, before the presentation itself.

The paper situates AISSA within three bodies of [[research-methods-aied|prior work]]: [[automated-assessment]] (from test-case execution in programming to [[educational-nlp|NLP]]-based short-answer grading and [[automated-essay-scoring|essay scoring]]), [[ai-feedback-quality|automated feedback]] oriented toward [[scaffolding]] learning rather than only grading correctness, and [[learning-analytics|learning analytics dashboards]] built around the questions of what data is visualized, for whom, why, and how it is represented and evaluated.

## System Architecture
AISSA is built on a modular Python architecture using the [[edtech-platform|Plotly Dash]] framework, organized into five modules:

1. **[[visualization]] Module** — provides [[student-experience|student]], teacher, and [[administrator|administration]] dashboards.
2. **Processing and Analysis Module** — orchestrates the end-to-end evaluation workflow using asynchronous task queues and background workers to stay responsive during peak submission times.
3. **Data Persistence Module** — a hybrid store combining [[privacy|PostgreSQL]] for structured transactional data with MongoDB (and GridFS) for the [[generative-ai|LLM]] JSON payloads, extracted slide features, and slide files.
4. **Extraction Module** — extracts slide-level syntactic and visual features (word counts, font sizes, references, image edge density, and color dimensionality) from uploaded `.pptx` files.
5. **AI Module** — manages interaction with the [[llm|large language model]] through the OpenAI API.

The student dashboard lets students upload PowerPoint decks or revisit prior submissions, while the teacher dashboard provides a centralized control surface for configuring 5-point [[educational-measurement|Likert-scale]] rubrics, managing cohorts, and monitoring [[student-engagement|engagement]] via activity logs. An administration dashboard supports batch imports of student lists, courses, and baseline rubrics from Excel.

## AI Feedback Pipeline
The [[generative-ai|AI]] module transforms a teacher-defined rubric plus extracted slide features into structured output by dynamically building a constrained prompt adapted from the GePeTo framework. The prompt is organized into functional blocks: a System Role framing the model as an expert university evaluator, Calculation Rules for scoring logic, Input Data combining the rubric and slide features, an Expected Output JSON Schema, and Strict Output Constraints enforcing valid JSON only. Each rubric item is scored on a 1–5 Likert scale, from which the overall score and percentage are derived. Qualitative feedback is [[multilingual-learning|bilingual]] (Spanish and English) and organized into general feedback — three paragraphs covering strengths, areas for improvement, and concrete actions — plus criterion-level explanations of how to improve each rubric item. This grounding in established [[feedback|pedagogical feedback structures]] and strict output constraints reflect careful [[prompt-engineering]].

## Pilot Deployment
AISSA was deployed at Universidad Autónoma de Madrid within the MOSAIC-F framework during the second trimester of 2026, involving 46 final-year [[engineering-education|undergraduate telecommunication engineering]] students. The [[design-based-research|real academic deployment]] tested both technical performance and the practical integration of [[generative-ai|generative AI]] for formative feedback. The asynchronous architecture held up under concentrated use before deadlines: 90 presentations were processed without service degradation, with 1–3 minute per-submission turnaround and consistent, correctly formatted JSON responses. The [[llm|LLM]] integration was economically feasible, with an estimated \$0.06–0.07 USD per evaluation driven by roughly 18,000 input tokens and 2,500–2,600 output tokens.

## Student Experience and Perceived Usability
To assess perceived usability, the [[usability-research|System Usability Scale (SUS)]] was administered to all 46 students, with 30 responses yielding an excellent average score of 83.38. Semi-structured [[qualitative-research|interviews]] with a purposefully sampled subset of 20 students (chosen for [[equity-in-ai-education|gender parity]] and varied [[learning-gains|academic performance]]) found the platform highly intuitive: students adopted an iterative workflow of uploading drafts, refining work, and resubmitting without external technical support. Students perceived the AI-generated [[feedback]] as fair and useful, especially for technical design elements such as [[accessibility|font size]], visual consistency, and bibliography formatting. Notably, several students intentionally disregarded some recommendations that conflicted with their planned visual design or presentation strategy — evidence of selective, [[agency|agentic]] uptake of [[ai-feedback-quality|AI feedback]] rather than passive acceptance.

## What this means for practice

- **Instructors.** Move slide feedback ahead of the presentation deadline rather than after it: the pilot scored and commented on 90 presentation decks with end-to-end turnaround of roughly 1–3 minutes per submission, enough for students to upload, revise, and resubmit within the assignment schedule.
- **Instructors.** Keep the final judgment with the teacher, because the tool's [[human-in-the-loop-ai|human-in-the-loop]] design has instructors review the [[automated-assessment|automated evaluations]] against their own assessment, which is what preserves instructor authority over grades and [[trust]] in the scoring.
- **Assessment designers.** Write the rubric as explicit scoring rules before launch: AISSA converts a teacher-defined 5-point Likert rubric plus extracted slide features into criterion-level feedback, so any criterion left implicit is effectively skipped.
- **Instructional designers.** Budget the marginal cost per submission: about \$0.06–0.07 USD per evaluation, based on an average of 18,000 input tokens and 2,500–2,600 output tokens, with no extraction or JSON-output errors across the 90 presentations.
- **Administrators.** Plan for selective uptake rather than compliance: several students intentionally disregarded recommendations that conflicted with their planned visual design or presentation strategy, so build in a step where students record which suggestions they accepted or rejected and why.

## Limitations

- Single-site, single-course pilot: 46 final-year telecommunication engineering students at Universidad Autónoma de Madrid over one trimester, so the 90 presentations processed, the per-submission turnaround, and the cost estimates are not evidence of what another course, level, or discipline would see.
- The usability evidence is self-report from a partial sample — the System Usability Scale was administered to all 46 students but only 30 returned responses, and the qualitative findings come from 20 purposefully sampled interviews.
- The study measured technical performance and perceived usability, not learning: no comparison against human teacher scores was run, and there is no evidence that iterative revision raised slide quality or presentation performance.
- One model and one extraction pipeline were tested (GPT 5.2 through the OpenAI API, on features extracted from `.pptx` files), so how scores and feedback shift with other models or slide formats is unknown.

## Connected Concepts

- [[human-in-the-loop-ai]]
- [[automated-essay-scoring]]
- [[ai-ed-evaluation]]
- [[formative-assessment]]
- [[learning-analytics]]
- [[automated-assessment]]
- [[llm]]

## Connected Articles

- [[cong-confidence-asag-2026]] — Automatic Short Answer Grading with LLMs
- [[cross-dataset-bloom-question-classification]] — Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs
- [[kt4eqg-personalized-question-generation]] — KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing
- [[multimodal-ai-feedback-learning]] — LLM-based Multimodal AI Feedback Produces Equivalent Learning and Better Student Perceptions than Educator Feedback
- [[llm-sentiment-analysis-education-research]] — LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments
- [[automated-grading-linux-bash-examinations-large-language-models]] — Automated Grading of Linux/Bash Examinations Using Large Language Models

## Citation

Becerra, A., Gomez, D., & Cobos, R. (2026). [*AISSA: AI-based Student Slides Analysis Tool for Academic Presentations*](https://arxiv.org/abs/2605.04729).
