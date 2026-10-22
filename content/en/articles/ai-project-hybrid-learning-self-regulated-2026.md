---
title: A Project-Based Hybrid Learning Model Using Artificial Intelligence to Enhance Students' Self-Regulated Learning
created: "2026-10-15T09:15:00-04:00"
updated: "2026-10-15T09:15:00-04:00"
type: article
sources: ['raw/papers/ai-project-hybrid-learning-self-regulated-2026.md']
confidence: medium
page_kind: [framework]
research_method: [system development]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers]
pedagogy: [project-based-learning, self-regulated-learning, scaffolding, metacognition, motivation, online-teaching-and-learning, collaborative-learning, self-directed-learning]
technology: [ai-technologies, generative-ai, llm, intelligent-tutoring, personalized-learning, learning-analytics]
assessment: [assessment, learning-gains, self-assessment]
methods: [design-based-research, quantitative-research, mixed-methods-research]
foundations: [theories-and-frameworks, human-ai-collaboration, ai-education, reducing-ai-misuse, teacher-role]
ethics: [privacy, equity-in-ai-education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-15"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** In a [[higher-ed|higher-education]] study, Priyambudi and colleagues at Universitas Wijaya Putra developed and tested **Project-Based Hybrid Learning (PjBHL)**, an AI-assisted model that maps Zimmerman's three [[self-regulated-learning|self-regulated learning]] (SRL) phases — forethought, performance, and self-reflection — onto the syntax of [[project-based-learning|project-based]] and hybrid instruction, with [[generative-ai|AI]] acting as metacognitive scaffolding and a cognitive interlocutor. The work was motivated by a baseline SRL mean of just 2.21 (SD 0.73) among 65 English Literature students, of whom only 24.4% set learning goals and 17.8% self-evaluated. Using an [[design-based-research|ADDIE-based R&D]] approach, the team validated the model with an instructional-design expert (86% design, 88% tools, 85% instruments) and confirmed practicality with lecturers (80%) and students (85%). In a quasi-experiment (33 experimental, 32 control), the model produced an N-Gain of 0.72 versus 0.28 for conventional instruction (t = 8.47, p < 0.001). The central claim is that AI strengthens SRL only when embedded inside structure — unstructured AI can instead foster [[reducing-ai-misuse|metacognitive laziness]].

## Key Findings
1. The AI-assisted PjBHL model maps Zimmerman's forethought, performance, and self-reflection phases directly onto project-based and hybrid learning syntax, with AI serving as [[scaffolding|metacognitive scaffolding]] rather than a task-completion aid.
2. Baseline SRL was low: 65 English Literature students averaged 2.21 (SD 0.73) on a 4-point scale, with only 24.4% setting goals, 17.8% self-evaluating, and 68.9% struggling to maintain focus online.
3. Expert validation rated the model design 86%, learning tools 88%, and research instruments 85% — all "highly valid" and usable without revision before the field implementation trial.
4. Practicality ratings reached 80% from the lecturer and 85% from students, who cited clear project instructions, easy AI-platform navigation, and the relevance of AI-generated feedback.
5. In the quasi-experiment the experimental group reached an N-Gain of 0.72 (high) versus 0.28 (low) for the control group, with the largest sub-dimension gains in self-evaluation (0.78) and goal setting (0.75).
6. An independent-samples t-test confirmed the difference (t = 8.47, df = 63, p < 0.001), rejecting the null hypothesis that both groups improved equally in SRL ability.
7. The authors caution that the design cannot isolate AI from the PjBHL structure, so the gains reflect the integrated model as a whole, not the AI component alone.

## How the model is built

The intervention was developed through a Research and Development approach using the ADDIE model across five phases: problem analysis, model design, development and validation, field test, and evaluation and dissemination. The PjBHL syntax has six stages — problem identification and project implementation, learning planning and design, project development and reflection, [[peer-assessment|peer assessment]] and feedback through AI (a [[collaborative-learning|collaborative]] step), presentations and publications, and evaluation and reflection — structured after Joyce's model components (syntax, social system, reaction principle, support system, and instructional and accompanying impact). Its distinguishing move is mapping [[metacognition|metacognitive]] phases onto each stage: [[generative-ai|AI]] helps formulate project goals and strategic plans in forethought, supplies adaptive feedback and monitoring prompts during performance, and generates reflective prompts and achievement summaries in self-reflection. The supporting system is a Moodle-based LMS enriched with ChatGPT (via Ollama, DeepSeek, and OpenAI), ReadSpeaker AI Voice Tools, IntelliBoard [[learning-analytics|analytics]], and [[automated-assessment|automatic grading]] tools. Tools included a model book, digital teaching materials, a semester learning plan, and an SRL instrument built on Zimmerman's framework and Barnard's Online Self-Regulated Learning Questionnaire, covering goal setting, strategic planning, [[self-efficacy]], self-monitoring, and self-evaluation.

## What the field trial showed

Effectiveness was tested with a quasi-experimental non-equivalent control group design during the even semester of 2025/2026. The experimental group (n = 33) used the AI-assisted PjBHL model; the control group (n = 32) received conventional hybrid instruction without a structured model or AI integration. Both classes shared the same instructor, materials, and total time. Pretest SRL scores were comparable (2.23 and 2.19), but after treatment the experimental group reached 3.18 against the control group's 2.87. The N-Gain of 0.72 fell in the high category, versus 0.28 (low) for the control. Shapiro-Wilk (p = 0.142 and 0.089) and Levene (F = 1.84, p = 0.180) tests confirmed normal, homogeneous distributions, clearing the way for the independent-samples t-test. Within the experimental group, the strongest gains appeared in [[self-assessment|self-evaluation]] and goal setting, while resource management improved least (0.61) — suggesting the model's clearest effect is on reflective practice and planning rather than on time-and-environment management.

## The role and the risk of AI

The study positions AI as a cognitive partner — at moments an [[intelligent-tutoring|intelligent tutor]] — woven through all three SRL phases rather than a supplementary tool, and it extends earlier work by Kwok (2025) that found ChatGPT improved effort regulation and [[help-seeking]] within project-based learning. Its design deliberately contains the well-documented risk of [[reducing-ai-misuse|over-reliance]]: because some experimental students leaned too heavily on AI recommendations, the model foregrounds the self-reflection phase, requiring students to compare their own work against [[ai-feedback-quality|AI feedback]] and write a critical reflection journal before they can access the system's final solution. The authors pair this with explicit [[guardrails]] — AI must not complete assignments, provide final answers, conceal its involvement (undermining [[academic-integrity|academic integrity]]), collect personal data without consent (undermining [[privacy]]), present biased or misleading content, or become an unauditable single point of failure. This framing aligns with Yang and Yahaya's (2026) argument that [[self-regulated-learning|SRL]] strategies must be systematically embedded in blended [[online-teaching-and-learning|online learning]] design, and with evidence that unregulated [[generative-ai|generative AI]] use is associated with superficial learning.

## What this means for practice

- **Instructors.** Adopt the six-stage PjBHL syntax as designed rather than bolting AI onto existing project work, because the model's SRL effect depends on AI being mapped onto each of Zimmerman's three phases.
- **Instructors.** Require a critical reflection journal before students can view the AI system's final solution, since this step is what the authors credit for countering over-reliance and surface learning.
- **Instructional designers.** Reuse the instrument blueprint — Zimmerman's phases, Barnard's Online Self-Regulated Learning Questionnaire, and a four-point Likert scale — to measure SRL before and after an intervention.
- **Instructional designers.** Budget for the supporting stack (Moodle with ChatGPT, ReadSpeaker AI, IntelliBoard, and automatic grading) and for the guardrails on privacy, bias, and auditability, not just the [[pedagogy|pedagogical]] design.
- **Instructors.** Use the AI prompts in the model's phase table as ready-made starting points for goal setting, in-progress feedback, and reflective summaries in large hybrid classes.

## Limitations

- The treatment bundled the PjBHL structure and AI support together, with no condition isolating AI from the structure, so gains cannot be attributed to AI specifically versus the PjBHL design or their interaction.
- Students were not randomly assigned to groups; they were split by pre-existing class and ID sequence, so selection bias cannot be fully ruled out despite comparable pretest scores.
- The study ran in a single "Computer and Internet Applications" course with a small sample (65 students), limiting generalization to other courses, disciplines, and institutions.
- SRL was measured only by [[self-report-measures|self-report]] questionnaire (α = 0.89), which is vulnerable to social-desirability bias and lacks behavioral or activity-trace corroboration.
- The keyword bibliometric map used only four records from a single database search, so it is descriptive and exploratory rather than definitive.

## Citation
Priyambudi, S., Setyowati, Y., & Ritonga, A. S. (2026). [A Project-Based Hybrid Learning Model Using Artificial Intelligence to Enhance Students' Self-Regulated Learning](https://doi.org/10.59395/jitp.v6i2.221). *Jurnal Informatika dan Teknologi Pendidikan, 6*(2).
