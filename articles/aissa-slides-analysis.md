---
title: "AISSA: AI-based Student Slides Analysis Tool for Academic Presentations"
created: "2026-05-09T04:33:04-04:00"
updated: "2026-08-28T00:00:00-04:00"
type: article
tags: [automated-assessment, learning-analytics, formative-assessment, higher-ed, llm, human-in-the-loop-ai, automated-question-generation]
level: [higher ed]

sources: ['raw/papers/2605.04729.md']
confidence: medium
---

> A web-based system that uses [[llm|LLMs]] and [[learning-analytics|Learning Analytics]] dashboards to provide [[automated-assessment|automated, rubric-based feedback]] on student presentation slides. Developed by Becerra et al. (2026), AISSA addresses the scalability challenge of providing timely [[formative-assessment|formative feedback]] in large university courses.

## Definition
A web-based system that uses [[llm|LLMs]] and [[learning-analytics|Learning Analytics]] dashboards to provide [[automated-assessment|automated, rubric-based feedback]] on student presentation slides. Developed by Becerra et al. (2026), AISSA addresses the scalability challenge of providing timely [[formative-assessment|formative feedback]] in large university courses.

## Key Findings
1. AISSA combines [[llm|LLMs]] (ChatGPT 5.2) with [[learning-analytics|Learning Analytics]] dashboards to deliver [[automated-assessment|rubric-based scoring]] and structured [[feedback]] on presentation slides before students present.
2. In a pilot with 46 final-year undergraduate students, AISSA reliably processed 90 presentations with end-to-end times of roughly 1–3 minutes per submission and no extraction or JSON-output errors.
3. Students rated usability highly (average [[usability-research|System Usability Scale]] score of 83.38 out of 100) and adopted an iterative workflow of uploading drafts, reviewing feedback, revising, and resubmitting.
4. The LLM integration proved economically feasible at an estimated $0.06–0.07 USD per evaluation, while students selectively applied recommendations, sometimes disregarding suggestions that conflicted with their planned visual design.

## Background and Motivation
[[feedback|Feedback]] is a foundational pillar of effective teaching and learning: it lets students see the gap between current performance and intended goals, supporting reflection and [[self-regulated-learning|self-regulation]]. Yet delivering timely, specific, and rubric-aligned feedback remains a persistent challenge in [[higher-ed|higher education]], especially for oral presentations, where feedback often arrives as a final performance review too late to revise visual materials. In large, massified courses, teachers cannot realistically provide detailed [[formative-assessment|formative]] review of every slide deck beforehand. AISSA is designed to close this gap by shifting automated [[assessment]] earlier in the workflow, before the presentation itself.

The paper situates AISSA within three bodies of [[research-methods-aied|prior work]]: [[automated-assessment]] (from test-case execution in programming to [[educational-nlp|NLP]]-based short-answer grading and [[automated-essay-scoring|essay scoring]]), [[ai-feedback-quality|automated feedback]] oriented toward scaffolding learning rather than only grading correctness, and [[learning-analytics|learning analytics dashboards]] built around the questions of what data is visualized, for whom, why, and how it is represented and evaluated.

## System Architecture
AISSA is built on a modular Python architecture using the [[edtech-platform|Plotly Dash]] framework, organized into five modules:

1. **Visualization Module** — provides [[student-experience|student]], teacher, and administration dashboards.
2. **Processing and Analysis Module** — orchestrates the end-to-end evaluation workflow using asynchronous task queues and background workers to stay responsive during peak submission times.
3. **Data Persistence Module** — a hybrid store combining [[privacy|PostgreSQL]] for structured transactional data with MongoDB (and GridFS) for the [[generative-ai|LLM]] JSON payloads, extracted slide features, and slide files.
4. **Extraction Module** — extracts slide-level syntactic and visual features (word counts, font sizes, references, image edge density, and color dimensionality) from uploaded `.pptx` files.
5. **AI Module** — manages interaction with the [[llm|large language model]] through the OpenAI API.

The student dashboard lets students upload PowerPoint decks or revisit prior submissions, while the teacher dashboard provides a centralized control surface for configuring 5-point [[educational-measurement|Likert-scale]] rubrics, managing cohorts, and monitoring engagement via activity logs. An administration dashboard supports batch imports of student lists, courses, and baseline rubrics from Excel.

## AI Feedback Pipeline
The [[generative-ai|AI]] module transforms a teacher-defined rubric plus extracted slide features into structured output by dynamically building a constrained prompt adapted from the GePeTo framework. The prompt is organized into functional blocks: a System Role framing the model as an expert university evaluator, Calculation Rules for scoring logic, Input Data combining the rubric and slide features, an Expected Output JSON Schema, and Strict Output Constraints enforcing valid JSON only. Each rubric item is scored on a 1–5 Likert scale, from which the overall score and percentage are derived. Qualitative feedback is bilingual (Spanish and English) and organized into general feedback — three paragraphs covering strengths, areas for improvement, and concrete actions — plus criterion-level explanations of how to improve each rubric item. This grounding in established [[feedback|pedagogical feedback structures]] and strict output constraints reflect careful [[prompt-engineering]].

## Pilot Deployment
AISSA was deployed at Universidad Autónoma de Madrid within the MOSAIC-F framework during the second trimester of 2026, involving 46 final-year [[engineering-education|undergraduate telecommunication engineering]] students. The [[design-based-research|real academic deployment]] tested both technical performance and the practical integration of [[generative-ai|generative AI]] for formative feedback. The asynchronous architecture held up under concentrated use before deadlines: 90 presentations were processed without service degradation, with 1–3 minute per-submission turnaround and consistent, correctly formatted JSON responses. The [[llm|LLM]] integration was economically feasible, with an estimated $0.06–0.07 USD per evaluation driven by roughly 18,000 input tokens and 2,500–2,600 output tokens.

## Student Experience and Perceived Usability
To assess perceived usability, the [[usability-research|System Usability Scale (SUS)]] was administered to all 46 students, with 30 responses yielding an excellent average score of 83.38. Semi-structured [[qualitative-research|interviews]] with a purposefully sampled subset of 20 students (chosen for [[equity-in-ai-education|gender parity]] and varied academic performance) found the platform highly intuitive: students adopted an iterative workflow of uploading drafts, refining work, and resubmitting without external technical support. Students perceived the AI-generated [[feedback]] as fair and useful, especially for technical design elements such as [[accessibility|font size]], visual consistency, and bibliography formatting. Notably, several students intentionally disregarded some recommendations that conflicted with their planned visual design or presentation strategy — evidence of selective, [[agency|agentic]] uptake of [[ai-feedback-quality|AI feedback]] rather than passive acceptance.

## Implications
AISSA demonstrates that combining [[llm|LLM]]-based analysis with [[learning-analytics|Learning Analytics dashboards]] is a promising path to scalable [[formative-assessment|formative feedback]] on presentation slides. For [[instructional-design|practitioners]], the pilot suggests such tools can relieve the feedback bottleneck in large courses while supporting an iterative revision cycle that improves slide quality before the presentation. The [[human-in-the-loop-ai|human-in-the-loop]] design — where teachers review automated evaluations against their own assessments — keeps educators in control of final judgment, addressing concerns about [[trust]] in [[automated-assessment|automated scoring]]. The economic feasibility (cents per evaluation) and the modular, [[open-source|open]]-friendly architecture make the approach practical for broader adoption. The finding that students selectively apply feedback also points to the need to study [[student-ai-interaction|how learners engage]] with AI-generated recommendations and whether selective uptake leads to better outcomes than wholesale adoption or rejection.

## Limitations and Future Work
The pilot is small and single-institution, so its results are preliminary. Future work will compare AISSA's LLM-based evaluations with [[human-ai-collaboration|human teacher assessments]] on both scores and feedback quality; study the pedagogical impact of iterative use on slide quality and final presentation performance; refine the AI pipeline by comparing proprietary and [[open-source|open-source models]] and extending the extracted feature set; and analyze whether students who selectively apply AISSA feedback achieve better outcomes than those who follow all recommendations or disregard them.

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
