---
title: "Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module"
created: "2026-08-06T04:33:04-04:00"
updated: "2026-09-19T07:42:07-04:00"
type: article
foundations: [ai-education, ai-literacy]
technology: [llm, rag, simulation]
assessment: [automated-assessment]
stakeholders: [student-experience]
research_method: [system development, experiment]
audience: [instructors, learners]
level: [k 12]

sources: ['raw/papers/aaai2026-prompting-literacy-k12.md']
confidence: high
---

> **Synthesis:** An [[llm]]-based interactive module teaches [[k-12]] students prompting literacy through scenario-based deliberate practice with an AI auto-grader providing immediate, detailed feedback. Deployed across 11 secondary classrooms in two iterations, the module improved students' prompting skills (particularly embedding background context) and confidence in using AI for learning. The study also validates an AI-based auto-grader achieving 0.92 average accuracy and identifies True/False + open-ended questions as more effective than MCQs for assessing prompting literacy.

## Study Design

Xiao et al. designed and deployed a web-based interactive instructional system to teach **prompting literacy** to secondary-education students. The module was grounded in two learning sciences principles: **learning-by-doing** and **elaborated immediate feedback**. Students practiced prompt writing in three hypothetical learning scenarios ([[biology-education|biology]], geography, math), each paired with a unique instructional activity (extending knowledge, quiz preparation, homework struggle).

After a student writes a prompt, an **LLM-based auto-grader** (GPT-4o) evaluates it across preset dimensions and delivers immediate, detailed feedback. The pipeline mirrors authentic AI [[conversational-ai|chatbot]] interaction: write prompt → receive AI response → get graded feedback.

Two iterations were conducted across 11 secondary classrooms:
- **Study 1** (June 2024): 111 students, 6 classrooms in East Asia
- **Study 2**: Assessment iteration follow-up with similar population

## The Auto-Grader

The AI auto-grader achieved **0.92 average accuracy** across dimensions when grading student-written prompts, using human labels as ground truth:

| Dimension | Accuracy |
|---|---|
| Relevance | 0.98 |
| Background/Context | 0.96 |
| Conciseness | 0.93 |
| Elaboration | 0.90 |
| No Direct Answer | 0.88 |
| Clarity of Purpose | 0.85 |

The lowest accuracy (Purpose, 0.85) stemmed from the auto-grader over-generating keywords or conflating Purpose with No Direct Answer criteria. The auto-grader tended to weigh heavily on some keywords while ignoring others — a known limitation of LLM-based grading.

## Key Findings

### Prompting Skill Improvement
- Students improved significantly at **embedding background/context information** in prompts (McNemar test, p = .039 from Q1 to Q3)
- Students performed well on Relevance, Conciseness, and Purpose even in the first question (ceiling effects)
- **Prior AI usage frequency was positively correlated with initial prompt quality** (r = 0.27, p = .017), suggesting an [[equity-in-ai-education|equity]] concern

### Confidence and Perception
- Self-reported confidence in using AI for learning **increased by 10.4%** (p < .001)
- **87% of students** reported learning AI-related knowledge (how to use AI for learning, how to ask effective questions, AI's capabilities)
- Students valued: direct [[student-ai-interaction|AI interaction]], scenario-based design, immediate comprehensive feedback, and visual elements

### Assessment Design Lessons
- **MCQs suffered from ceiling effects** — students could identify good prompts conceptually but couldn't write them effectively
- **True/False + open-ended questions** demonstrated better item difficulty and discrimination than MCQs
- None of the original MCQ items fell into the desired difficulty range [0.3, 0.7], while 60% of OE and 30% of TF questions did

## Challenges Identified

- **Productive struggles**: difficulty writing effective prompts (the core skill being taught)
- **Extraneous load**: slow AI response times, login issues, limited typing skills (22 students reported this)
- **Scenario variety**: some students wanted non-[[stem-education|STEM]] scenarios
- LLM response latency disrupted the practice flow

## What this means for practice

- **Instructors.** Teach prompting through scenario-based deliberate practice with a real chatbot in the loop, since the gains came from writing prompts, reading the AI's answer, and receiving dimension-level feedback rather than from instruction about prompts.
- **Instructors.** Spend teaching time on embedding background and context: it was the only prompting dimension that improved significantly (p = .039 from Q1 to Q3), while relevance, conciseness, and purpose showed ceiling effects from the first question.
- **Instructors.** Assess prompting literacy with true/false plus open-ended items instead of multiple-choice questions — none of the MCQ items fell in the desired difficulty range [0.3, 0.7], against 60% of open-ended and 30% of true/false items.
- **Learners.** Practice in the platform rather than only reading about prompts, and expect the difficulty to be the point: students could identify a good prompt conceptually but struggled to write one, and 22 students reported that slow AI responses, login problems, or weak typing made the practice harder than the skill itself.
- **Administrators.** Provide prompting instruction in school for all students, because prior AI use frequency predicted initial prompt quality (r = 0.27, p = .017) — a [[digital-divide|digital divide]] in who arrives already fluent.

## Limitations

- Two classroom iterations in East Asian secondary schools with no comparison condition: the authors state the study did not compare this approach with other AI literacy instructional methods and propose using it as a benchmark for later comparisons.
- The auto-grader's accuracy is validated against human labels on 483 student-written prompts, and its weakest dimensions were Clarity of Purpose (0.85) and No Direct Answer (0.88), where it over-generated keywords and conflated Purpose with the No Direct Answer criterion.
- Effects rest on self-report and short pre/post measures: confidence rose 10.4% (p < .001), but the 98 students who completed both pre- and post-test showed no significant change (p = .377) because of a pre-test ceiling (Mean = 4.4, SD = 1.04).
- Reliability fell below the conventional benchmark and the assessment iteration rests on a small item pool: Cronbach's α was 0.68 for the original and 0.58 for the iterated version, which the authors attribute to small sample size and few items and flag for larger-scale administration.

## Connected Concepts

- [[ai-education]]
- [[ai-literacy]]
- [[automated-assessment]]
- [[k-12]]
- [[llm]]
- [[prompt-engineering]]
- [[student-experience]]
- [[digital-divide]]
- [[formative-assessment]]
## Connected Articles

## Citation

Xiao, R., Hou, X., Tseng, Y.-J., Nieu, H., Liao, G., Stamper, J., & Koedinger, K. R. (2026). [*Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module*](https://doi.org/10.1609/aaai.v40i28.36924). AAAI.
