---
title: "AI-Driven Educational Reform: Enhancing Talent Cultivation in Computer-Related Majors for the Digital Era"
created: "2026-09-16T11:00:00-04:00"
updated: "2026-09-19T07:16:01-04:00"
type: article
foundations: [curriculum-design, learning-design]
technology: [personalized-learning]
audience: [institutions, instructors]
research_method: design and evaluation study
sources: [raw/papers/10.3389_fpsyg.2026.1790916.md]
confidence: high
discipline: [cs education]
level: [higher ed]
---

> **Synthesis:** Grounded in China's "new engineering" educational philosophy, this study designs and pilots an AI-integrated talent-cultivation reform for computer-related majors that embeds AI across curriculum, teaching, practice, and [[authentic-assessment|assessment]]. A pre/post cohort comparison across four [[higher-ed|undergraduate]] programs reports clear gains in programming completion, algorithmic reasoning, teamwork, and teaching effectiveness, though the single-institution, non-experimental design limits generalization.

## Key Findings

- **Measurable competency gains.** Comparing the pre-reform cohort with the post-reform cohort across four undergraduate programs (Computer Science and Technology, Software Engineering, Network Engineering, and Data Science and Big Data Technology), the authors report consistent improvements on every measured dimension — programming project completion, algorithmic reasoning, and teamwork and project management. The headline gain was a programming completion rate roughly a fifth higher in the post-reform cohort, with algorithmic reasoning improving nearly as much, and statistical tests confirmed these differences were not due to chance.

- **Personalized learning drove engagement.** Students who actively used the AI-based [[personalized-learning]] system showed fewer repetitive coding mistakes and more efficient learning trajectories, and average system-logged interactions per student rose markedly. Most surveyed students reported that the AI-driven diagnostic tools improved their conceptual understanding and confidence in tackling complex programming problems.

- **Teaching effectiveness improved.** [[self-report-measures|Questionnaire]] scores rose overall, with instructional clarity, feedback timeliness, and student interaction all up; instructors used [[learning-analytics]] [[visualization|dashboards]] to identify struggling students in real time and target interventions.

- **Innovation and industry alignment rose.** Student-led teams grew over two years, alongside more student research papers and patent applications. Partnerships with Huawei and Neusoft supported co-designed labs, dual-supervision mentorship, and co-constructed courses, strengthening employment outcomes in top-tier technology firms.

## Study Design & Method

A program-wide reform initiative evaluated as a descriptive pre/post cohort comparison across two consecutive academic years. A total of 244 students participated in the post-reform cohort (against 205 in the pre-reform cohort) across four computer-related undergraduate programs, instructed by five faculty members, with data collected over two consecutive semesters. Because the reform was implemented program-wide, no parallel control group was available.

The intervention had five components: [[curriculum-design]] restructuring built on a three-layer competency map (core competencies, sub-competencies, performance indicators); smart-teaching integration; interdisciplinary and collaborative talent cultivation via a dual-mentor system and cross-disciplinary course alliance; practice-oriented learning platforms spanning physical labs, virtual platforms, and enterprise and international collaboration; and a multi-dimensional evaluation system grounded in constructive alignment. AI was implemented through an intelligent dashboard (Python/Dash/Plotly with a PostgreSQL backend), adaptive [[feedback|feedback loops]] driven by a [[reinforcement-learning]] model, and semantic-similarity novelty scoring using the Qwen-7B pre-trained [[llm]]. Outcomes were analyzed with t-tests and effect sizes on programming completion, algorithmic reasoning, teamwork competence, and a Likert-based teaching-effectiveness survey.

## What this means for practice

- **Instructors.** Route students into the AI-based [[personalized-learning]] system rather than treating it as optional, and use the diagnostic dashboards to identify struggling students in real time and target interventions: students who actively used the system made fewer repetitive coding mistakes, moved through material more efficiently, and reported improved conceptual understanding and confidence on complex programming problems.
- **Designers.** Embed AI across curriculum, pedagogy, practice and assessment rather than running isolated course experiments, so that it supports differentiated trajectories and [[formative-assessment|formative]] feedback instead of replacing [[teacher-role|teachers]]; log and feed back on student interactions, since average logged interactions per student rose markedly and the strongest measured gains were a 22.5% increase in programming project completion and an 18.2% gain in algorithmic reasoning.
- **Designers.** Use the reform's concrete, replicable components — AI-enhanced security and IoT courses, enterprise co-design and dual mentorship — as the template for computing programs aligning with industry demand.
- **Administrators.** Pair AI adoption with institutional and [[ethics|ethical]] infrastructure — [[governance]], transparent algorithmic grading and faculty [[teacher-ai-competency]] development — keeping teachers in oversight of AI evaluations under a [[human-ai-collaboration]] arrangement.
- **Administrators.** Back the reform with structured industry partnerships — co-designed labs, dual-supervision mentorship and co-constructed courses — which the authors link to stronger employment outcomes in top-tier technology firms.

## Limitations

- Single-institution setting with specific corporate partners (Huawei and Neusoft), limiting generalizability.
- Small sample (244 students) and short window (two consecutive semesters) preclude assessment of long-term effects or developmental trajectories.
- Program-wide implementation meant no parallel control group; conclusions rest on a descriptive pre/no-reform cohort comparison.
- Applicability to non-computer disciplines and other institutions remains unverified.
- Outcomes rely partly on self-report (student and faculty surveys) and context-specific assessment rubrics.

## Connected Concepts

- [[cs-education]] · [[higher-ed]] · [[curriculum-design]] · [[learning-design]] · [[personalized-learning]]
- [[adaptive-learning]] · [[learning-analytics]] · [[formative-assessment]] · [[collaborative-learning]] · [[authentic-assessment]] · [[human-ai-collaboration]] · [[teacher-ai-competency]]

## Connected Articles

- [[ai-assisted-se-curriculum-syllabus-analysis-2026]] — AI integration in a software-engineering curriculum, complementary to the curriculum-restructuring lens here.
- [[genai-meta-analysis-programming-learning]] — meta-analytic evidence on generative-AI effects in programming education, relevant to this reform's AI-enhanced CS courses.
- [[chatgpt-programming-education-text-mining]] — text-mining analysis of ChatGPT in programming education, overlapping this study's computing-context focus.
- [[ai-tpack-teacher-multi-agent-workflow]] — teacher development for AI-integrated instruction, echoing the faculty-competency component of the reform.
- [[lock-integrating-ai-online-learning-higher-ed-2025]] — AI integration in higher-education online learning, consistent with the smart-teaching ecosystem described.

## Citation

Wang, J., & Li, P. (2026). [AI-Driven Educational Reform: Enhancing Talent Cultivation in Computer-Related Majors for the Digital Era](https://doi.org/10.3389/fpsyg.2026.1790916). *Frontiers in Psychology, 17*, 1790916.
