---
title: Making machine learning findings accessible to teachers in blended classrooms
created: "2026-09-03T13:38:51-04:00"
updated: "2026-09-19T07:22:56-04:00"
type: article
foundations: [teacher-role]
pedagogy: [online-teaching-and-learning, self-regulated-learning]
technology: [learning-analytics, machine-learning, visualization]
ethics: [privacy, trust]
audience: [instructors, learning analytics designers]
sources: ['raw/papers/mejia-domenzain-ml-findings-teachers-blended-2026.md']
confidence: high
level: [higher ed]
page_kind: [evaluation]
methods: [mixed-methods-research]
---

> **Synthesis:** **Making [[reinforcement-learning|machine learning]] findings accessible to teachers in blended classrooms.** Using a teacher-centered, mixed-method approach, this study designs, evaluates, and instantiates [[visualization|visualizations]] and a learning analytics dashboard (DashED) that communicate ML-derived [[self-regulated-learning|self-regulated learning]] profiles to teachers in two [[online-teaching-and-learning|blended learning]] contexts — flipped university classrooms and reflective writing in vocational education. A 100-teacher study examined how visualization literacy shapes interpretation and which visual designs teachers find clear, appealing, and actionable, while interviews with 19 teachers probed concerns, [[trust]], and adoption. Findings reveal that teachers prefer simple, familiar charts (bar plots, pie charts) yet derive richer insights from more complex designs, and that teachers' visualization preferences, concerns, and intended uses differ markedly across learning contexts.

## Key Findings

- Teachers systematically preferred simpler, more traditional [[visualization|visualizations]] (bar plots, pie charts, legends), even when more complex designs (e.g., heatmaps) yielded more detailed insights — visual preference did not always align with informativeness, echoing debates about pie charts' comparative readability.
- Visualization literacy (VL) did not drive design preferences, but higher-VL teachers produced deeper, more detailed interpretations (e.g., more of them identified trends in time-series data), confirming VL as a [[research-methods-aied|confounder]] for gauging how teachers read [[learning-analytics|learning analytics]] designs.
- For group comparison, teachers strongly favored superposition over juxtaposition, and preferred plots that displayed full information (e.g., including a "students who did not watch" group) rather than explicit difference encoding, although younger teachers ranked difference plots higher.
- Actions teachers proposed were shaped by the content represented and their teaching level rather than the plot type — e.g., university teachers favored weekly tests and course adaptation, while vocational teachers proposed direct, individualized coaching.
- Concerns and barriers to adoption diverged by context: flipped-classroom (university) teachers worried most about data anonymization and student opt-out, whereas reflective-writing (vocational) teachers feared misuse of the tool by fellow educators and stressed the need to contextualize data — while both groups reported similar [[self-efficacy]] and perceived benefits in a [[trust|trust in AI]] survey.
- In use, flipped-classroom teachers followed a sequential exploration and favored course-level adaptation and showing dashboards in class, whereas vocational teachers revisited summary pages and used the tool mainly for individual coaching sessions — pointing to context-aware [[learning-design|dashboard design]] and [[teacher-role|teacher support]] needs.

## What this means for practice

- **Instructors.** Plan how the dashboard enters your teaching, not just whether you can read it: in the flipped-classroom context 80% of teachers intended to show it during interactive sessions and 70% considered adapting their course, and most used the profiles to advise students on learning strategies.
- **Instructors.** Use the group-comparison conventions teachers read reliably — superposition rather than juxtaposition, and plots that keep the full information, such as the group of students who did not watch — when presenting behavioral data to colleagues.
- **Learning analytics designers.** Support [[visualization|visualization]] literacy rather than only simpler charts: teachers in the top literacy quartile identified trends in a consistency time series 16% of the time versus 5% in the bottom quartile, even though chart-type preferences barely differed.
- **Learning analytics designers.** Build for the context of use: vocational teachers spent about twice as long on individual students as on group behavior and used the dashboard for one-to-one coaching, while university teachers explored pages sequentially and adapted course workload, tests, and reminders.
- **Learning analytics designers.** Treat [[privacy]] as a first-class requirement: 60% of the flipped-classroom teachers raised data anonymization as a concern, and teachers wanted students to be able to opt out.

## Limitations

- Study 1 surveyed 100 teachers recruited through Prolific against one hypothetical flipped-classroom scenario rather than their own course data; the sample had a median age of 37 and 68% came from Europe.
- Study 2 rests on semi-structured interviews with 19 teachers — ten university professors and nine vocational teachers — using a think-aloud protocol on a prototype; the dashboard was never deployed in a live course.
- Trust and adoption were measured by self-report: a 5-point Likert trust questionnaire plus interview accounts, so reported intentions (for example, 77% of vocational teachers proposing individual coaching sessions) are not evidence of classroom use or student benefit.
- The two contexts are narrow: one 13-week university mathematics course with log data from 201 students, and reflective journals from 246 nurse apprentices, of which a single classroom of 19 apprentices was visualized.

## Connected Concepts

- [[learning-analytics]]
- [[teacher-role]]
- [[trust]]
- [[visualization]]
- [[self-regulated-learning]]
- [[online-teaching-and-learning]]
- [[machine-learning]]
- [[mixed-methods-research]]

## Connected Articles

- [[fouad-bentley-trust-utility-gap-physics-2026]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[jin-genai-learning-analytics-feedback-literacy]]

## Citation

Mejia-Domenzain, P., Neshaei, S. P., Laini, E., Nazaretsky, T., Bühlmann, P., & Käser, T. (2026). [Making machine learning findings accessible to teachers in blended classrooms](https://doi.org/10.1016/j.ijaied.2026.100001). *International Journal of Artificial Intelligence in Education*, 36, Article 100001.
