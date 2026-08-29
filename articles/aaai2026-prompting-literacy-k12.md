---
title: "Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module"
created: "2026-08-06T04:33:04-04:00"
updated: "2026-08-26T15:34:20-04:00"
type: article
tags: [ai-literacy, k-12, llm, ai-education, simulation, automated-assessment, student-experience, rag]
research_method: [system development, experiment]
audience: [instructors, learners]
level: [k 12]

sources: ['raw/papers/aaai2026-prompting-literacy-k12.md']
confidence: high
---

> **Synthesis:** An LLM-based interactive module teaches K-12 students prompting literacy through scenario-based deliberate practice with an AI auto-grader providing immediate, detailed feedback. Deployed across 11 secondary classrooms in two iterations, the module improved students' prompting skills (particularly embedding background context) and confidence in using AI for learning. The study also validates an AI-based auto-grader achieving 0.92 average accuracy and identifies True/False + open-ended questions as more effective than MCQs for assessing prompting literacy.

## Study Design

Xiao et al. designed and deployed a web-based interactive instructional system to teach **prompting literacy** to secondary-education students. The module was grounded in two learning sciences principles: **learning-by-doing** and **elaborated immediate feedback**. Students practiced prompt writing in three hypothetical learning scenarios (biology, geography, math), each paired with a unique instructional activity (extending knowledge, quiz preparation, homework struggle).

After a student writes a prompt, an **LLM-based auto-grader** (GPT-4o) evaluates it across preset dimensions and delivers immediate, detailed feedback. The pipeline mirrors authentic AI chatbot interaction: write prompt → receive AI response → get graded feedback.

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
- **Prior AI usage frequency was positively correlated with initial prompt quality** (r = 0.27, p = .017), suggesting an equity concern

### Confidence and Perception
- Self-reported confidence in using AI for learning **increased by 10.4%** (p < .001)
- **87% of students** reported learning AI-related knowledge (how to use AI for learning, how to ask effective questions, AI's capabilities)
- Students valued: direct AI interaction, scenario-based design, immediate comprehensive feedback, and visual elements

### Assessment Design Lessons
- **MCQs suffered from ceiling effects** — students could identify good prompts conceptually but couldn't write them effectively
- **True/False + open-ended questions** demonstrated better item difficulty and discrimination than MCQs
- None of the original MCQ items fell into the desired difficulty range [0.3, 0.7], while 60% of OE and 30% of TF questions did

## Challenges Identified

- **Productive struggles**: difficulty writing effective prompts (the core skill being taught)
- **Extraneous load**: slow AI response times, login issues, limited typing skills (22 students reported this)
- **Scenario variety**: some students wanted non-STEM scenarios
- LLM response latency disrupted the practice flow

## Design Implications

The study demonstrates that [[prompt-engineering]] can be taught effectively to K-12 students through structured practice with automated feedback. Key design principles:

1. **Scenario-based deliberate practice** with authentic AI interaction
2. **Immediate, dimension-level feedback** powered by LLM auto-grading
3. **Assessment aligned to competency** — open-ended + T/F outperform MCQs for higher-order prompting skills
4. **Addressing the digital divide** — prior AI access correlates with initial performance, underscoring the need for in-school prompting literacy instruction

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
