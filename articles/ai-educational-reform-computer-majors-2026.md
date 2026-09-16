---
title: "AI-Driven Educational Reform: Enhancing Talent Cultivation in Computer-Related Majors for the Digital Era"
created: "2026-09-16T11:00:00-04:00"
updated: "2026-09-16T11:00:00-04:00"
type: article
tags: [cs-education, higher-ed, curriculum-design, learning-design, personalized-learning]
audience: [institutions, instructors]
research_method: design and evaluation study
sources: [raw/papers/10.3389_fpsyg.2026.1790916.md]
confidence: high
---

> **Synthesis:** Grounded in China's "new engineering" educational philosophy, this study designs and pilots an AI-integrated talent-cultivation reform for computer-related majors that embeds AI across curriculum, teaching, practice, and assessment. A pre/post cohort comparison across four undergraduate programs reports gains in programming completion, algorithmic reasoning, teamwork, and teaching effectiveness, though the single-institution, non-experimental design limits generalization.

## Key Findings

- **Measurable competency gains.** Comparing pre-reform (n=205) and post-reform (n=244) undergraduate cohorts across four programs (Computer Science and Technology, Software Engineering, Network Engineering, Data Science and Big Data Technology), the average programming project completion rate rose from 72.3% to 88.6% (+22.5%), the algorithmic reasoning score from 74.4 to 87.9 (+18.2%), and the teamwork and project management score from 7.2 to 8.6 (+19.4%). Independent-samples t-tests showed small p-values (≈4.9×10⁻¹⁷, ≈2.7×10⁻¹², ≈3.4×10⁻¹²), and Cohen's d values (0.83, 0.68, 0.67) indicated moderate-to-large effects.
- **Personalized learning drove engagement.** Average system-logged interactions per student increased 34%, and over 85% of surveyed students reported that AI-driven diagnostic tools improved conceptual understanding and confidence; students using the AI-based [[personalized-learning]] system showed fewer repetitive coding mistakes.
- **Teaching effectiveness improved.** [[self-report-measures|Questionnaire]] scores rose 21% overall (66.67→80.67), with instructional clarity (70→83), feedback timeliness (65→80), and student interaction (65→79) all up; instructors used [[learning-analytics]] [[visualization|dashboards]] to identify struggling students in real time.
- **Innovation and industry alignment rose.** Student-led teams increased 40% over two years, with growth in student research papers and patent applications; partnerships with Huawei and Neusoft supported co-designed labs, dual-supervision mentorship, and co-constructed courses, strengthening employment outcomes in top-tier technology firms.

## Study Design & Method

- **Design:** A program-wide reform initiative evaluated as a descriptive pre/post cohort comparison across two consecutive academic years; no parallel control group was available because the reform was implemented program-wide.
- **Sample and setting:** 244 students (and 244 teaching-effectiveness respondents, vs. 205 pre-reform) across four computer-related undergraduate programs, instructed by five faculty, with data collected over two consecutive semesters.
- **Intervention:** A five-component framework — [[curriculum-design]] restructuring with a three-layer competency map (core competencies, sub-competencies, performance indicators), smart teaching integration, interdisciplinary and collaborative talent cultivation (dual-mentor system, cross-disciplinary course alliance), practice-oriented learning platforms (physical labs, virtual platforms, enterprise and international collaboration), and a multi-dimensional evaluation system grounded in constructive alignment.
- **AI implementation:** Intelligent dashboard (Python 3.10, Dash/Plotly, PostgreSQL), adaptive [[feedback|feedback loops]] via a [[reinforcement-learning]] model in PyTorch, and semantic-similarity novelty scoring using the Qwen-7B pre-trained [[llm]] with cosine similarity (HuggingFace Transformers).
- **Metrics:** Programming project completion rate, algorithmic reasoning assessment, teamwork/project management competence, and a Likert-based teaching-effectiveness survey (instructional clarity, feedback timeliness, student interaction), analyzed with t-tests and effect sizes.

## Implications for AI in Education

- **Systemic integration over tool-level pilots.** The framework counters fragmented AI adoption by embedding AI systematically across curriculum, pedagogy, practice, and [[authentic-assessment]] — a whole-program model rather than isolated course experiments.
- **[[learning-design]] shift toward personalization.** Framing AI's [[pedagogy|pedagogical]] role as [[personalized-learning]] plus automation and augmentation, the model sketches how AI can support differentiated trajectories, [[formative-assessment|formative]] feedback, and [[teacher-role|teacher]] augmentation rather than replacement.
- **Institutional and [[ethics|ethical]] infrastructure.** The authors argue strategic AI adoption requires [[governance]], transparent algorithmic grading, and faculty [[teacher-ai-competency]] development (over 65 faculty certified), plus [[human-ai-collaboration]] where teachers retain oversight of AI evaluations.
- **Practicality for [[cs-education]].** Concrete, replicable examples — AI-enhanced security/IoT courses, enterprise co-design, dual mentorship — make the reform actionable for computing programs aligning with industry demand.

## Limitations

- Single-institution setting with specific corporate partners (Huawei and Neusoft), limiting generalizability.
- Small sample (244 students) and short window (two consecutive semesters) preclude assessment of long-term effects or developmental trajectories.
- Program-wide implementation meant no parallel control group; conclusions rest on descriptive pre/no-reform cohort comparison.
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
