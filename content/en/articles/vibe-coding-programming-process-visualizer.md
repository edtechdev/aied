---
title: 'From Idea to Classroom in Days: Using "Vibe Coding" to Create a Programming Process Visualizer from IDE Activity Logs'
created: "2026-07-30T04:33:04-04:00"
updated: "2026-09-20T03:43:02-04:00"
type: article
foundations: [academic-integrity, ai-literacy, teacher-role]
technology: [adaptive-learning, learning-analytics, personalized-learning, visualization, edtech-platform]
research_method: [system development, case study]
discipline: [stem education]
audience: [instructors, learners]
level: [higher ed]
sources: ['raw/papers/2607.24757.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** Describes rapid development of a Thonny log visualizer using AI-assisted 'vibe coding' to make student programming processes visible to teachers. Piloted in a 160-student introductory programming course. Provides interactive timelines, session summaries, code-size graphs, and programming-process replays supporting teacher decision-making and [[academic-integrity]] clarification.

**Relevance to [[ai-education|AI in Education]]:** This paper contributes to the understanding of [[automated-assessment]], [[personalized-learning]], and [[student-experience]]. The findings have implications for [[adaptive-learning]] systems, [[formative-assessment]] design, and the broader [[edtech-platform]] landscape. Future work should explore how these results generalize across [[stem-education]] and [[higher-ed]] contexts.

This [[research-methods-aied|research]] connects to the growing body of work on [[ai-literacy]] and [[teacher-role]], highlighting both the promise and limitations of AI tools in educational settings.

## What this means for practice

- **Instructors.** Combine the student-level dashboard with cohort views to triage which logs deserve close reading, instead of inspecting submissions one by one.
- **Instructors.** Use process evidence — pauses, run-error cycles, time before the first run — to open a conversation about how a solution was built and to clarify academic-integrity concerns, not as an automated judgment.
- **Instructors.** Make log submission a course requirement from the start: the visualizer only works when students complete the mandatory tasks in Thonny and hand in the corresponding log files.
- **Students.** Replay your own session and check the code-size timeline before asking for help, so you can say where the time actually went.
- **Designers.** Plan for rapid iteration with teachers: this pilot produced concrete fixes — faster student switching, smoother replay, 15× and 30× speeds, red-flagged solving times under 10 minutes — within days of feedback.

## Limitations

- The pilot ran in one "Introduction to Programming" course with 160 students and five teachers, and the authors state that this single-course context limits generalizability.
- Teacher feedback came from informal reviews and written comments collected during the course, with no control condition and no measured effect on student outcomes.
- The tool depends on a course workflow that requires Thonny and log-file submission, so it does not transfer to courses without that logging infrastructure.
- The views are built to prompt follow-up discussion and manual review rather than to serve as automated judgments, and time-window filtering of logs was requested but not yet implemented.
## Citation

Heidi Taveter, Marina Lepp (2026). [From Idea to Classroom in Days: Using Vibe Coding to Create a Programming Process Visualizer from IDE Activity Logs](https://arxiv.org/abs/2607.24757). FIE 2026 (IEEE Frontiers in Education Conference).
