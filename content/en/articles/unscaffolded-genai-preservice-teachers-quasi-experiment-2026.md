---
title: "The Impact of Unscaffolded GenAI Use on Pre-Service Teachers' AI Readiness, Self-Regulated Learning, Critical Thinking, and Instructional Design Performance: A Quasi-Experimental Study"
created: "2026-09-30T12:34:11-04:00"
updated: "2026-09-30T12:34:11-04:00"
type: article
sources: ['raw/papers/10.3390_bs16071114.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: [chemistry education]
level: [higher ed, teacher education, undergraduate]
audience: [instructors, curriculum designers, faculty developers, researchers]
foundations: [ai-education, cognitive-offloading, critical-thinking, teacher-ai-competency, teacher-role, limitations-in-aied-research]
pedagogy: [self-regulated-learning, scaffolding, student-ai-interaction, prior-knowledge]
technology: [generative-ai, llm]
assessment: [learning-gains, self-report-measures]
methods: [quantitative-research]
ethics: [ai-misuse-learning-harm]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** This quasi-experiment compared two intact sophomore classes of pre-service chemistry teachers (26 each, N = 52) in an 11-week *Chemistry [[learning-design|Instructional Design]]* course at a normal university in Chongqing, China. One class was permitted to use [[generative-ai]] while completing reflection questions, developing design ideas and drafting lesson plans, with no prompt templates, GenAI training or other [[scaffolding]]; the other class completed the same in-class tasks without GenAI. Outcomes were instructional design performance (rubric-scored lesson plans), AI readiness, [[self-regulated-learning]] and [[critical-thinking]], analyzed with pretest-adjusted ANCOVA and within-group paired t-tests. After controlling for pretest scores, the groups did not differ in AI readiness, SRL or critical thinking, but the control group scored higher on instructional design performance (adjusted 86.54 against 81.87, F = 8.348, p = 0.006, η² = 0.146); both groups improved in design performance and AI readiness, and neither improved in SRL or critical thinking. The most important qualification is the design itself: groups were existing classes, not randomly assigned, so the study cannot establish causal direction.

## Key Findings

- **Unscaffolded GenAI access did not raise [[teacher-ai-competency|AI readiness]].** With pretest scores as the covariate, the experimental group averaged 4.07 (SD = 0.37) at posttest against 4.11 (SD = 0.37) for the control group, F = 0.198, p = 0.658, η² = 0.004.
- **Self-regulated learning was unchanged.** Both groups averaged 4.15 at posttest (experimental SD = 0.42, control SD = 0.43), F = 0.001, p = 0.977, η² = 0.000. The authors retained this ANCOVA but interpreted it cautiously because the residuals failed the Shapiro–Wilk normality test (W = 0.908, df = 52, p < 0.001).
- **Critical thinking was unchanged.** The experimental group averaged 4.04 (SD = 0.43) and the control group 4.05 (SD = 0.42), F = 0.000, p = 0.997, η² = 0.000.
- **Instructional design performance favored the control group.** The control group averaged 86.90 (SD = 6.67, adjusted M = 86.54, SE = 1.14) against 81.50 (SD = 6.11, adjusted M = 81.87, SE = 1.14) for the experimental group, F = 8.348, p = 0.006, η² = 0.146, which the authors read as a large effect.
- **Both groups gained in design performance and AI readiness.** Design performance rose from 61.769 (SD = 9.139) to 81.500 (SD = 6.114) in the experimental group (t = −11.443, p < 0.001) and from 64.000 (SD = 8.319) to 86.904 (SD = 6.674) in the control group (t = −15.415, p < 0.001). AI readiness rose from 3.748 (SD = 0.368) to 4.066 (SD = 0.373) in the experimental group (t = −3.274, p = 0.003) and from 3.806 (SD = 0.409) to 4.114 (SD = 0.372) in the control group (t = −2.769, p = 0.010).
- **Neither group moved on SRL or critical thinking.** Experimental-group SRL went from 4.066 (SD = 0.469) to 4.154 (SD = 0.421), t = −0.736, p = 0.468, and control-group SRL from 4.044 (SD = 0.387) to 4.148 (SD = 0.433), t = −0.978, p = 0.338. Experimental-group critical thinking went from 3.968 (SD = 0.427) to 4.038 (SD = 0.428), t = −0.640, p = 0.528; control-group critical thinking moved from 4.090 (SD = 0.472) to 4.051 (SD = 0.424), t = 0.326, p = 0.747.

## How the study was run

Fifty-two second-year undergraduate chemistry [[teacher-education]] majors enrolled in *Chemistry Instructional Design*, an 11-week course with one 90-minute theoretical session per week, took part in the spring semester of the 2024–2025 academic year. Two intact classes were assigned as the experimental group (n = 26) and the control group (n = 26). The experimental group could use GenAI when completing the two session-end reflection questions, developing instructional design ideas and generating lesson plans; no GenAI-specific training, [[prompt-engineering|prompting]] framework or systematic guidance was provided. The control group completed the same tasks, during class and under the same instructor, using only the course materials, without GenAI. Instructional content, materials, task requirements, completion time and submission procedures were held constant across groups.

Instructional design performance came from lesson plans produced in class in weeks one and eleven (pretest and posttest). Two evaluators — the course instructor and a high school chemistry teacher, each with more than ten years of chemistry teaching experience — independently rated the plans against a seven-dimension rubric, blind to whether a plan was pretest or posttest; scores were averaged across raters. Agreement was moderate at pretest (ICC = 0.619, 95% CI [0.127, 0.814]) and good at posttest (ICC = 0.791, 95% CI [0.635, 0.880]). AI readiness was measured with an 18-item, four-dimension scale (cognition, ability, vision, [[ethics]]); [[self-regulated-learning]] with seven items (Cronbach's α = 0.90); and critical thinking with six items (α = 0.802). The SRL and critical thinking measures are [[self-report-measures]]. Independent-samples t-tests confirmed pretest equivalence, and analysis used one-way ANCOVA with pretest scores as the covariate plus within-group paired-samples t-tests.

## How the authors read the null and negative results

For AI readiness, the authors note that out-of-class GenAI exposure could not be controlled over eleven weeks: control-group students may have met GenAI through other courses, peers or everyday digital environments, and both groups may have been shaped by its broader visibility. They also caution that the within-group AI-readiness gain may reflect familiarity or perceived competence rather than calibrated ability, since the measure was self-reported.

For the instructional design gap, the authors argue that [[cognitive-offloading|GenAI use may have redirected limited cognitive resources]] toward prompting and output revision, away from the design principles and [[chemistry-education]] requirements the rubric rewarded. They [[anxiety-and-stress|stress]] that the lower experimental-group scores should not be read as GenAI weakening competence; a safer reading is that unscaffolded use was not aligned with the course's disciplinary [[pedagogy]] and assessment standards.

For SRL and critical thinking, the authors point to the absence of GenAI-specific guidance: students may have treated GenAI as a convenient information source or task-completion tool rather than a resource for goal setting, monitoring and reflection, leaving their existing self-regulatory capacity to carry the work. They also suggest that in-class time limits left little room for the judging and evaluation critical thinking requires, and that a general self-report scale may miss AI-specific evaluative behavior.

## What this means for practice

- **Do not treat GenAI access as a scaffold.** Permitting GenAI without guidance produced no measurable benefit on any outcome and a lower design score, so decide deliberately what guidance accompanies access rather than assuming exposure builds competence.
- **Teach when and why to use GenAI, not only how.** The authors' proposed remedy is task-stage-specific direction — clarifying learning goals and GenAI's role at each design stage — so students can recognize its limits as well as its speed.
- **Expect the cognitive cost of prompting.** Skills like prompt revision consume attention that novices need for subject pedagogy, so budget task time and sequence support accordingly.
- **Watch for design tasks where AI output may not match the rubric.** GenAI-generated chemistry lesson plans may not reflect the disciplinary logic and assessment criteria the course emphasizes, so check output quality against course standards.

## Limitations

- Groups were existing intact classes, not randomly assigned; ANCOVA reduces but cannot eliminate pre-existing differences, so the study cannot establish causal direction.
- All participants came from two classes at one university in China, and demographic information such as age and gender was not fully recorded, limiting generalization; the authors call the results exploratory given the sample size.
- The outcomes rested on self-report questionnaires and design assignments, which may miss subtle changes in cognition, motivation and behavior, and the general critical thinking scale may not capture AI-specific evaluation.
- Residuals for the SRL analysis did not fully meet the normality assumption, so that ANCOVA result in particular should be read cautiously.

## Citation

Zhang, J., Peng, Y., Deng, X., Zeng, Q., & Wang, K. (2026). [The Impact of Unscaffolded GenAI Use on Pre-Service Teachers' AI Readiness, Self-Regulated Learning, Critical Thinking, and Instructional Design Performance: A Quasi-Experimental Study](https://doi.org/10.3390/bs16071114). *Behavioral Sciences*, 16(7), 1114.