---
title: "Edhivo: An AI-Native Platform for Scalable Assessment and Instant Feedback in Higher Education"
created: "2026-10-28T12:00:00-04:00"
updated: "2026-10-28T12:00:00-04:00"
type: article
authors: ["Kapoor, M.", "Zhou, J."]
published: "2026-10-27"
venue: "arXiv preprint"
source_url: https://arxiv.org/abs/2610.36654
foundations: [ai-education, learning-design]
pedagogy: [active-learning, student-ai-interaction]
technology: [generative-ai, llm, edtech-platform]
assessment: [automated-question-generation, automated-assessment, formative-assessment]
methods: [ai-ed-evaluation]
ethics: [privacy, hallucination-risk]
research_method: [system development, user study]
discipline: [cs education]
level: [graduate]
audience: [instructors, educational technology developers, assessment designers]
page_kind: [evaluation]
sources: ['raw/papers/kapoor-zhou-edhivo-ai-assessment-platform-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
---

> **Synthesis:** Kapoor and Zhou (2026) present Edhivo, an [[edtech-platform|AI-native assessment platform]] built at Stony Brook University that separates assessment generation from assessment evaluation: one model drafts multiple-choice and open-ended questions from instructor-uploaded materials, and a second scores open-ended answers against instructor-defined ground truth on correctness, completeness and relevance. The argument is architectural rather than pedagogical — that the [[feedback]] gap in [[higher-ed|higher education]] is a problem of authoring cost and feedback latency, not only of instructional design. A Spring 2026 pilot in a graduate course on large language models (36 students) reports median generation of about 10 seconds against an estimated 30 minutes of manual authoring, a net saving near 25 minutes per assessment after a 5-minute human review, and unanimous agreement from 30 survey respondents that instant feedback improved their learning. Whether the scores are right is still open: the authors are assembling an AI-versus-instructor comparison and name that validation as future work, so the page should be read as an evaluation of feasibility, latency and cost rather than of [[assessment-validity|grading validity]].

## Key Findings

1. **Two models, two jobs.** Generation runs on Gemini 3 Flash for its context window and evaluation on GLM 4.7 Flash for instruction following, with JSON schemas holding the orchestration layer in a deterministic state.
2. **Authoring time collapses.** Generation produced questions in a median of about 10 seconds, against an estimated 30 minutes of manual drafting and answer-key writing, a net saving near 25 minutes after a 5-minute review.
3. **Open-ended grading stops scaling with headcount.** Multiple-choice items grade deterministically, a cohort's open-ended responses are evaluated in roughly 15 to 20 seconds, and a 200-student assessment falls from 1,000 minutes to 500 with audit.
4. **The rubric is three criteria at 0 to 5.** Correctness, completeness and relevance are each scored with a chain-of-thought justification before the score, a reason-then-score design meant to reduce arbitrariness and expose its reasoning.
5. **Unit economics are almost negligible.** At OpenRouter pricing for GLM 4.7 Flash, a 10-question assessment costs $0.00275 per student, so the 200-student cohort in the scaling table is graded for under $0.55.
6. **Students endorsed the loop, not a learning gain.** Of 30 survey respondents, 100 percent agreed or strongly agreed the interface was easy and that instant feedback improved learning; no gain was measured.
7. **The pedagogy changed with the tool.** Student presenters authored short assessments, typically three multiple-choice questions, run immediately before and after each presentation, about three cycles per 80-minute session.

## What the pipeline actually does

The platform ingests instructor materials — textbooks and transcripts — and dispatches parallel generation requests, one per question type, each governed by a dedicated prompt with few-shot examples so the two types do not drift into each other. The instructor then follows a fixed workflow: upload content, review synthetic questions, revise or override, publish. Every generated item is constrained to the uploaded materials, which is how the authors frame their [[hallucination-risk|hallucination]] control, and every item passes a [[human-in-the-loop-ai|human review]] step before students see it. On submission, the evaluation model compares each response against the instructor's reference answer, applies the three-criterion rubric with step-by-step reasoning, and returns scores plus a short justification. Reporting aggregates at four levels: student by assessment, student across the course, cohort by assessment to surface bottleneck concepts, and cohort across the semester. The whole loop — content to generated assessment to graded feedback — lives inside one orchestration layer rather than being assembled from an LMS plus plugins.

## What the pilot measured, and what it estimated

The deployment ran in AMS 691.01, Foundations and Frontiers of Large Language Models, with 36 graduate students from data science, computer science and engineering backgrounds across a full semester. Courses like this are where [[automated-question-generation|generated item banks]] and pre/post testing are easiest to justify, and the design leaned on that: each 80-minute session carried about three assessment cycles of roughly three minutes, with results available immediately so the instructor could read per-question distributions and adjust discussion in the room. Assessment authoring, distribution, grading and aggregation all ran through the platform. What the paper reports, though, mixes measurement with projection. The survey is measured, if small. The timing comparison is an estimate from one instructor, not a controlled study across instructors or subjects. The 200-student grading figure assumes 5 minutes of human baseline per student and a 2.5-minute audit, and is arithmetic rather than observation.

## Where the grading claim is still open

The paper is candid that grading precision, which it calls the primary architectural concern, is not yet demonstrated. Validation is planned as a longitudinal dataset comparing AI-determined scores with instructor-determined scores, and until that exists the human audit carries the load: it blocks hallucinated judgments from reaching student records and doubles as a data-collection loop, since instructor overrides can be used to refine the evaluation prompt toward departmental rubrics. Two risks are named and neither is measured. Evaluation may carry linguistic bias, favoring responses whose style aligns with the evaluation model's training data, which would disadvantage students with non-standard writing — a version of the [[bias-mitigation|fairness]] problem that [[automated-assessment|automated scoring]] has always faced. And the efficacy evidence comes from a STEM course with objective ground truth; whether the three-criterion rubric holds for essayistic or interpretive work in the [[humanities-education|humanities]] is untested. The platform is publicly available at [sbu.edhivo.com](https://sbu.edhivo.com/).

## What this means for practice

- **Instructors.** Keep the review step and treat it as the quality mechanism it is: the pilot's only guard against a wrong score reaching a record is instructor audit, and the authors plan to learn from those overrides rather than assume the model is calibrated.
- **Instructors.** Run the pre/post loop in class rather than only at unit boundaries — three-question cycles before and after a presentation gave a usable delta within an 80-minute session, and the immediacy is what made the design teachable at that frequency.
- **Developers.** Ground every generation call in uploaded course materials and enforce schema-constrained output, which is what makes generated items reviewable and keeps grading results machine-readable between layers.
- **Administrators.** Price the automation before adopting it at scale: at $0.00275 per student for a 10-question assessment, cost is not the constraint, and review labor is; do not extend it to high-stakes use until inter-rater reliability against instructor scores is published.
- **Assessment designers.** Do not treat all 100 percent agreement as evidence of learning. The survey shows students preferred fast feedback to multi-day grading cycles, which is a preference finding, not a [[learning-gains|learning outcome]].

## Limitations

- The pilot covered 36 graduate students in one course at one institution, with survey data from 30 of them (83.3 percent) and no control condition or comparison of learning gains.
- Reported time savings are informal estimates from a single instructor rather than controlled measurements across instructors or disciplines, and the 200-student figures are projections from a per-student baseline.
- Inter-rater reliability between the evaluation model and human graders was not computed; the authors list it as future work and acknowledge possible linguistic bias against non-standard writing styles.
- There are no proctoring safeguards such as full-screen enforcement or tab-switch detection, and demonstrated efficacy is confined to STEM subjects with objective ground truth.

## Citation

Kapoor, M., & Zhou, J. (2026). [*Edhivo: An AI-Native Platform for Scalable Assessment and Instant Feedback in Higher Education*](https://arxiv.org/abs/2610.36654). arXiv preprint.
