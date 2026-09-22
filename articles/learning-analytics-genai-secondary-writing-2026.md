---
title: "Using Learning Analytics to Support Secondary School Students' Writing with Generative AI"
created: "2026-09-22T07:34:00-04:00"
updated: "2026-09-22T07:34:00-04:00"
type: article
published: "2026-09-18"
foundations: [ai-literacy, academic-integrity, agency, critical-thinking]
pedagogy: [self-regulated-learning, metacognition, student-ai-interaction]
technology: [learning-analytics, generative-ai, conversational-ai, visualization]
methods: [mixed-methods-research, quantitative-research]
ethics: [ai-misuse-learning-harm]
audience: [instructors, learning analytics designers, educational technology developers, researchers]
level: [secondary, k 12]
research_method: [system development, user study]
discipline: [language learning, writing education]
page_kind: [evaluation]
source_url: https://genai-la.genai-learning.online/
sources: ['raw/papers/learning-analytics-genai-secondary-writing-2026.md']
confidence: high
connected_faqs: [reducing-over-reliance, writing-instruction-ai-best-practices]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-22"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** This exploratory study tests a different remedy for the over-reliance problem than instruction or policy: show students their own use of [[generative-ai]] as data. Forty-six Grade 9 English students in Hong Kong wrote an argumentative essay over three weeks on a platform instrumented with three [[learning-analytics]] dashboards — time-on-tool charts, a [[academic-integrity|plagiarism]] checker that highlights text overlapping with the model's replies, and charts classifying each prompt as performance-oriented or learning-oriented against the class. The technical question was whether the model can code student prompts reliably enough to power such a dashboard; it can, at a macro F1 of 0.757, with weaker agreement on structure and rhetoric prompts. The behavioral question got a thinner answer: only a third of the class opened the dashboards at all, the group differences in final plagiarism rate and learning-oriented prompt ratio were not statistically reliable, and the students who never looked at the prompt charts actually averaged a *higher* learning-oriented ratio. The honest reading is that the dashboards are buildable and some students who saw them changed course, but voluntary exposure — not the [[visualization]] itself — is the binding constraint.

### Overview

Generative AI in writing carries what the authors call mixed blessings: support for the drafting process alongside plagiarism risk, over-reliance, and what the literature terms metacognitive laziness. The framing of the paper is that the second problem is a regulation problem, and that students cannot regulate a process they cannot see. Learning analytics has a long history of making learning processes visible to learners and teachers; the contribution here is to apply it to [[student-ai-interaction|student-AI interaction]], turning logged prompts and pasted text into feedback a student can act on.

The system, GAILA, extends FLoRA, a Moodle-based GenAI writing platform, with three dashboards. It was deployed in a real [[k-12|secondary school]] English class rather than a lab, with the essay set as out-of-class homework completed over three weeks — one week each for outlining, drafting and revising. Two research questions structure the paper: how reliable the model is at coding prompts to feed the dashboard, and what relationship exists between viewing the dashboards and students' subsequent GenAI usage patterns.

### Key Findings

1. **The model codes student prompts reliably enough to drive a dashboard, with uneven edges.** Two human coders agreed strongly (Cohen's kappa above 0.8 on every category); between human-agreed codes and ChatGPT-4o, kappa exceeded 0.65 on all categories and 0.8 on the general writing-aspect code, with a macro-average F1 of 0.757 across eight categories. Agreement was weakest on structure help and rhetoric help, the two most interpretive categories.
2. **Reviewing your own plagiarism dashboard was associated with lower, more tightly bounded copying — descriptively, not statistically.** Students who opened the checker (16) finished with a mean overlap of 4.33% against 2.91% for those who never opened it (32), a difference well inside noise (t(46) = 0.66, p = 0.514, Cohen's d = 0.2). The informative result is the spread: the highest final rate among non-viewers was 38.98%, against 22.29% among viewers, and three viewers revised after looking, two of them down to 0%.
3. **The prompt-category charts did not produce the expected shift at group level.** Students who viewed them averaged a *lower* ratio of learning-oriented prompts (0.284) than those who did not (0.493); the difference was again not reliable (t(25) = −1.13, p = 0.27, d = −0.44), and the authors attribute the direction to the voluntary nature of dashboard use. Within the 15 viewers who used the chat tool, 8 did raise their learning-oriented ratio after viewing.
4. **Exposure, not design, was the limiting factor.** Only about a third of the class opened the dashboards — 16 for the plagiarism checker, 15 for the prompt charts. The authors treat this as the most actionable finding in the paper: a dashboard nobody opens cannot change behavior, so the design problem moves from visualization to attention.
5. **The dashboards were designed for comparison, not just description.** Students saw their own distribution against the class average, and teachers could drill into an individual's prompt history. The design logic is that a norm reference plus a drill-down path is what converts a log into [[self-regulated-learning|self-regulation]].

### How the study was done

The platform was deployed in a secondary school English class in Hong Kong in the spring 2025 semester, with students learning English as a [[language-learning|second language]] at low-intermediate proficiency. Forty-six Grade 9 students (20 female, 26 male, aged 14 to 16) took part. The essay was homework, written outside class across three weeks with one week per stage: outlining, drafting, revising. The platform provided a writing box, a chat tool, a grammar checklist and a dictionary, and logged keystrokes, clicks, prompts and responses.

Automatic coding used few-shot [[prompt-engineering|prompting]] with five random examples per code and the essay topic supplied as context to filter irrelevant prompts. The coding scheme was hierarchical: first the nature of the prompt (performance-oriented, meaning the model does the task; learning-oriented, meaning the student asks for guidance, feedback or explanation), then the general aspect (content versus language), then the specific aspect across six categories. Two graduate students in education independently coded the prompts without seeing the model's output, disagreements were resolved by discussion, and that human consensus became the ground truth for the reliability analysis. Because dashboard use was voluntary, the behavioral comparisons are between viewers and non-viewers rather than between a treated and a control group.

### What the numbers do and do not support

The reliability result is the firm part of this paper. Prompt classification is a narrow, well-defined coding task, and a macro F1 of 0.757 with a few-shot prompt is a credible basis for automating it at scale — while the weaker scores on structure and rhetoric help are a reminder that as coding schemes grow more interpretive, the automation gets shakier and needs re-validation per scheme.

The behavioral result is the fragile part. With 46 students split unevenly between viewers and non-viewers, and both comparisons non-significant with wide confidence intervals, nothing here establishes that the dashboards changed anything. What the study does establish is feasibility and a set of directions worth pursuing: the mechanism appears to work for the students who engaged with it, and the ceiling is engagement. The authors say as much in their own framing, describing the study as exploratory and calling for attention-drawing mechanisms before the approach is tested at scale.

## What this means for practice

- **Do not assume a dashboard will be seen.** Voluntary access capped the effect of every visualization in this study, so if the analytics are meant to matter, they need to be assigned, discussed or prompted — treated as coursework rather than as an optional resource.
- **Give the class a comparison point.** Students here saw their own prompt distribution against the class average, which turns an abstract "use AI well" instruction into a concrete next step for each learner.
- **Target the routines that go wrong, not the tool.** The useful dashboards were behavioral: how long the tool was in use, how much pasted text overlapped with model output, and what kind of help was being asked for.
- **Teach the prompt taxonomy as part of [[writing-education|writing instruction]].** Distinguishing a prompt that asks the model to produce the essay from one that asks for guidance is a [[metacognition|metacognitive]] skill students can carry to any tool, and it is also how their usage can be measured.
- **Check reliability before deploying classification.** Agreement was strong overall but uneven by category, so a pilot should verify coding accuracy on the specific categories a dashboard displays.

## Limitations

- **Dashboard use was voluntary and uneven, so the comparisons cannot support causal claims.** Viewers and non-viewers were self-selected groups of unequal size, and both outcome comparisons returned non-significant differences with confidence intervals that include no effect and a substantial one.
- **The plagiarism measure is incomplete by construction.** It compared student text against the model's own replies within the platform, so text pasted from elsewhere was invisible and the reported overlap percentages are likely underestimates; the authors suggest keystroke data as a more accurate basis.
- **One task, one class, one short window.** A single argumentative essay written as homework over three weeks by Grade 9 students in one Hong Kong school leaves the durability of any behavioral change and its transfer to other populations and settings untested.
- **The automatic coding was validated on one scheme.** Reliability was established for this hierarchical prompt taxonomy with a few-shot prompt, and the authors note that classification performance varies with the coding scheme's granularity, so the scores do not generalize to other dashboards without re-validation.

## Connected Concepts
[[learning-analytics]], [[generative-ai]], [[conversational-ai]], [[student-ai-interaction]], [[self-regulated-learning]], [[metacognition]], [[academic-integrity]], [[ai-literacy]], [[human-ai-collaboration]]

## Connected Articles
- [[jin-genai-learning-analytics-feedback-literacy]] — Students' Perceptions of Generative AI-Powered Learning Analytics in the Feedback Process: A Feedback Literacy Perspective
- [[tracing-genai-literacy-interaction-patterns]] — Tracing GenAI Literacy: Student-AI Interaction Patterns in Academic Writing
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[ai-dependence-academic-writing-ipace-2026]] — Are Students Dependent on AI in Writing Courses? Analyzing Factors Influencing Dependence on Generative AI Through the I-PACE Model

## Citation

Fong, H. Y., Lai, C., Li, X., Chan, C. K. K., Gašević, D., & Hu, X. (2026). Using Learning Analytics to Support Secondary School Students' Writing with Generative AI. In *Joint Proceedings of LAK 2026 Workshops, co-located with the 16th International Conference on Learning Analytics and Knowledge (LAK 2026)*. CEUR Workshop Proceedings.