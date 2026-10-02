---
title: "WIP: DBWorkout: A Gamified SQL Practice Platform to Support Formative Learning in Database Courses"
created: "2026-10-02T11:30:00-04:00"
updated: "2026-10-02T11:30:00-04:00"
type: article
sources: ['raw/papers/dbworkout-gamified-sql-formative-feedback-2026.md']
confidence: high
page_kind: [framework, evaluation]
research_method: [system development]
discipline: [cs education]
level: [higher ed]
audience: [instructors, researchers]
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [llm, human-in-the-loop-ai, edtech-platform]
assessment: [formative-assessment, feedback, automated-assessment, ai-feedback-quality, automated-question-generation]
methods: [mixed-methods-research, usability-research, qualitative-research]
ethics: [hallucination-risk, accessibility]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Nizamani et al. (2026) present **DBWorkout**, a web-based platform for [[formative-assessment|formative]] SQL practice that combines sandbox execution, result-based [[feedback]], and session-bounded [[game-based-learning|gamification]], with [[llm|LLM]]-assisted authoring tools for instructors. The platform runs an instructor's reference query and a student's submission in identical isolated PostgreSQL sandboxes and compares results across seven weighted dimensions, producing descriptive messages intended to support iterative refinement. A pilot with seven teaching assistants preceded a classroom deployment with 170 [[higher-ed|undergraduates]] across two in-class sessions (morning n = 104, evening n = 66). Students reported strong [[self-report-measures|perceived learning]] value (90–92% agreement) and enjoyment (87%), with low pressure (22%), supporting the design choice of a leaderboard that resets each session. The headline weakness is feedback actionability: only 42% found the [[automated-assessment|automated feedback]] sufficient, independently corroborated by 40% of open-ended responses raising feedback quality concerns. The work demonstrates technical feasibility at course scale and speaks to [[cs-education]], [[ai-feedback-quality]], and [[student-engagement]] themes.

## Key Findings

1. DBWorkout supports iterative SQL practice by executing reference and student queries in identical sandboxes and returning result-based feedback across seven weighted dimensions, including row values, column structure, and ordering.
2. Perceived learning value was the strongest result: 90–92% agreement on value items and 83% who would use the platform again, drawn from a post-session survey of 170 undergraduates.
3. Engagement was high (87% enjoyment) and pressure low (22%; M = 2.75), supporting a session-bounded absolute leaderboard that resets each class session rather than accumulating semester-long rankings.
4. Only 42% of students found the automated feedback sufficient (M = 3.18, SD = 1.09), and 40% of open-ended responses independently raised feedback depth and specificity, triangulating the central gap.
5. Usability was rated positively overall (UEQ subscale M = 4.16), but the weakest item was Easy over Complicated (M = 3.69; 60%), pointing to workflow or task complexity rather than dislike of the platform.
6. The sandbox architecture held under authentic load: 170 concurrent students across two in-class sessions (morning n = 104, evening n = 66) with no infrastructure failures.
7. GPT-4o authoring tools generate 5–10 candidate tasks or full schemas behind instructor authorization and review, keeping content validation human-in-the-loop to reduce content-creation overhead.

## The SQL feedback problem

Learning SQL remains challenging for undergraduates because traditional instruction relies on static assignments and isolated practice with limited interactivity or immediate [[feedback]]. Students struggle to translate conceptual understanding into correct query formulation, especially for JOIN operations and GROUP BY clauses. Prior work frames the challenge precisely: in a [[meta-analysis-systematic-review|systematic review]] of 101 automated feedback tools for programming exercises, nearly all focused on identifying mistakes (96%), while fewer than 20% provided explicit next-step guidance, and teachers could not easily adapt most tools to their own needs. SQL also differs from introductory programming in requiring schema understanding and navigating a language where multiple syntactically valid solutions exist. This is why [[automated-assessment]] that reports only generic mismatches tends to leave [[formative-assessment]] unfinished, and why [[ai-feedback-quality]] is treated here as a design target rather than an afterthought.

## Platform design: sandboxes, feedback, and gamification

DBWorkout is a [[edtech-platform|web-based platform]] with a React/TypeScript frontend, a Flask REST API, and a PostgreSQL 16 database that both stores application data and hosts each student's sandbox schema. Rather than provisioning separate databases, it uses schema namespacing to create lightweight isolated environments with restricted search paths, per-statement timeouts, and controlled execution limits; each sandbox is dropped after submission. Feedback is result-based: the instructor's reference query and the student's query run in identical sandboxes and are compared across seven weighted dimensions — execution success, statement count, column names, column types, row count, row values (multiset equality), and ordering — producing messages such as "Missing 3 rows". Engagement is driven by a session-bounded absolute leaderboard that ranks students by tasks completed and cumulative time and resets each class session, with no persistent points, badges, or streaks. Instructor authoring uses GPT-4o to generate 5–10 candidate tasks or entire schemas behind instructor authorization and review, keeping content validation [[human-in-the-loop-ai|human-in-the-loop]] to mitigate [[hallucination-risk|hallucination risks]] in generated material.

## Classroom deployment and student perceptions

Following a pilot with seven teaching assistants — two acting as instructors and five as students — that surfaced three defects later resolved, DBWorkout was deployed in an introductory undergraduate database course across two in-class sessions totaling 170 students. A post-session survey combined the User Experience Questionnaire, [[motivation|Intrinsic Motivation]] Inventory subscales, and system-specific items on a 1–5 scale; 98 of 170 open-ended responses were retained as substantive and analyzed through reflexive thematic analysis by two coders, making this a [[mixed-methods-research|mixed-methods]] [[usability-research|usability evaluation]]. Perceived value items scored highest (M = 4.21–4.32; 90–92%), and 83% said they would use the platform again. Overall usability was positive (UEQ subscale M = 4.16), though "Easy over Complicated" was the weakest item (M = 3.69; 60%). Enjoyment reached 87% while pressure was low (M = 2.75; 22%). Feedback sufficiency was the lowest-scoring item (M = 3.18, SD = 1.09; 42%), echoed by the dominant [[qualitative-research|qualitative]] theme of feedback depth and specificity (40%); competitive features drew mixed reactions (9%).

## What this means for practice

- **Instructors.** Adopt result-based feedback that compares a submission against a reference query across multiple dimensions, so students receive partial credit and descriptive error messages instead of a single pass/fail row count.
- **Instructors.** Reset competitive rankings each session, because the pairing of high enjoyment (87%) with low reported pressure (22%) suggests that session-bounded leaderboards can motivate without demotivating lower-ranked students over a semester.
- **[[educational-technology-developers|Edtech developers]].** Treat feedback specificity as the primary design target: the weakest survey item (42% sufficiency) and the dominant qualitative theme (40%) both point toward directional hints for common errors such as missing JOIN conditions.
- **Edtech developers.** Keep LLM authoring human-in-the-loop — generate candidate tasks and schemas, then require instructor review and schema validation before deployment — to cut authoring overhead without exposing students to unvalidated content.
- **Researchers.** Add pre- and post-assessments to the next deployment, since perceived value is not evidence of learning and this study measured no objective SQL proficiency.

## Limitations

- The data come from a single introductory course at one institution and follow students' first exposure to DBWorkout, so findings may not generalize and engagement levels may change with sustained use.
- The study measured perceived learning value rather than objective [[learning-gains|learning gains]]: pre- and post-assessments were not administered, leaving whether DBWorkout improves SQL proficiency unestablished.
- Every learner measure is a self-reported survey item or open-ended text (98 of 170 responses retained as substantive), which cannot verify actual skill change.
- Qualitative analysis was conducted by members of the research team, introducing potential researcher bias that was only partially mitigated through independent second-coder review.

## Citation

Nizamani, S. B., Devaraj, D., Nguyen, T., Goyal, K., Nizamani, S., Hamouda, S., & Goldberg, J. (2026). [*WIP: DBWorkout: A gamified SQL practice platform to support formative learning in database courses*](https://arxiv.org/abs/2610.01174). arXiv:2610.01174.
