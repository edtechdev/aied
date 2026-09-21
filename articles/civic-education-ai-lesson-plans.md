---
title: "Civic education in the age of AI: Should we trust AI-generated lesson plans"
created: "2026-05-09T04:33:04-04:00"
updated: "2026-09-20T08:26:15-04:00"
type: article
foundations: [ai-literacy, teacher-role, teacher-ai-competency]
technology: [generative-ai, pedagogical-llm-training]
assessment: [formative-assessment]
methods: [quantitative-research]
ethics: [equity-in-ai-education]
research_method: [thematic analysis]
audience: [instructors]
level: [k 12]
sources: ['raw/papers/civic-education-ai-lesson-plans.md']
confidence: medium
discipline: [humanities education]
---

> **Synthesis:** An analysis of 310 AI-generated lesson plans (2,230 individual activities) produced by ChatGPT (GPT-4o), Gemini (1.5 Flash), and Copilot (GPT-4 based) for all 53 Massachusetts eighth-grade civics standards. Each standard received two prompts: a basic "write a lesson plan" and a "highly interactive" variant.

> Large-scale empirical [[ai-ed-evaluation|evaluation of AI]]-generated civics lesson plans reveals that without teacher revision, AI tools overwhelmingly produce lower-order thinking activities and monocultural content — fundamentally at odds with the goals of civic education.

## The Study

**Trust et al. (2025)** analyzed 310 AI-generated lesson plans (2,230 individual activities) produced by ChatGPT (GPT-4o), Gemini (1.5 Flash), and Copilot (GPT-4 based) for all 53 Massachusetts eighth-grade civics standards. Each standard received two prompts: a basic "write a lesson plan" and a "highly interactive" variant.

## Key Findings

### Lower-Order Thinking Dominates

Using **Bloom's Revised Taxonomy**:

| Level | Share |
|-------|-------|
| Remember | 45% |
| Understand | 21% |
| Apply | 24% |
| **Subtotal (lower-order)** | **90%** |
| Analyze | 4% |
| Evaluate | 2% |
| Create | 4% |

**90% of activities** demanded only recall, comprehension, or simple application. Activities like "write definitions," "list three facts," and "answer comprehension questions" were pervasive. Even prompting for "highly interactive" lessons made minimal difference.

### Near-Total Absence of Multicultural Content

Using **Banks' Four Levels of Integration of Multicultural Content**:

- **94% of activities** contained no discernible multicultural content (2,086 of 2,230).
- Of those that did, 137 were at the lowest "Additive" level (mentioning diverse figures without restructuring [[curriculum-design|curriculum]]) and four reached the "Contributions" level.
- Only **1 activity** reached "Transformation" (restructuring the curriculum to include diverse perspectives).
- **Zero activities** reached "Social Action" (empowering students to address social issues).

This is especially damning for *civic education*, where multicultural perspectives and critical [[student-engagement|engagement]] with power structures are essential learning goals.

### Formulaic Outputs Across All Chatbots

All three [[conversational-ai|chatbots]] produced structurally identical lesson plans: Introduction → Activities 1-4 → Conclusion → Assessment → Extension → Homework. This factory-line format was applied regardless of whether the standard addressed constitutional principles, civil rights, or local government — homogenization that strips away the disciplinary texture of civic education.

## Open Questions

- Would fine-tuned educational LLMs (e.g., [[pedagogical-llm-training|EduQwen]]) produce more cognitively demanding and multiculturally-aware lesson plans?
- How do these findings generalize to other subjects (math, science, language arts)?
- Can better [[prompt-engineering|prompt engineering]] (e.g., explicitly requesting [[critical-thinking|higher-order thinking]] and multicultural integration) close the gap?
- What does the teacher revision process look like in practice — do teachers have the time and training to meaningfully redesign AI outputs?

## What this means for practice

- **Instructors.** Audit the cognitive demand of any AI-generated plan before teaching it: 90% of the 2,230 activities produced across the 310 lesson plans sat at Remember, Understand, or Apply, with Analyze at 4% and Evaluate at 2%.
- **Instructors.** Rebuild for multicultural content rather than decorating an existing plan: 94% of activities (2,086 of 2,230) received no Banks code, 137 of the activities that received a Banks code stayed at the Additive level, four reached Contributions, one reached Transformation, and none reached Social Action.
- **Instructors.** Do not assume a better prompt closes the gap — the "highly interactive" prompt variant made minimal difference, and all three chatbots returned the same Introduction → Activities 1-4 → Conclusion → Assessment → Extension → Homework structure whatever the standard covered.
- **Instructors.** Treat the pattern of lower-order thinking bias as required [[ai-literacy|AI literacy]] content: teachers need to recognize it, inject analysis, evaluation, and creation activities, and add the perspectives the model omits before teaching the plan.
- **Administrators.** Require disciplinary review before AI-generated plans enter a civics curriculum: even standards that explicitly named civil rights, Native American influences, or equality were handled at only the Additive level, and civic education depends on [[critical-thinking|critical thinking]] about power and justice that the default outputs suppress.

## Limitations

- The corpus covers one state and one grade level: 53 Massachusetts eighth-grade civics standards, so the pattern of lower-order and monocultural output is documented for a single disciplinary and jurisdictional context.
- Only three chatbots (ChatGPT, Gemini, and Copilot) and two prompt variants were tested, generated in a single round in August 2024, so the study cannot say whether newer models, fine-tuned educational models, or more explicit prompting would produce different plans.
- Coding applied Bloom's Revised Taxonomy and Banks' four levels to plan documents, which records what a plan asks students to do rather than what students learned or how teachers actually revised the plans.
- The study stops at the output: it provides no evidence about whether teachers have the time or training to redesign the plans it critiques, which is the step its own recommendation depends on.

## Connected Concepts

- [[ai-literacy]]
- [[formative-assessment]]
- [[regulation]]
- [[human-in-the-loop-ai]]
- [[k-12]]
- [[pedagogical-llm-training]]
- [[teacher-ai-competency]]
- [[teacher-role]]
- [[learning-design]]
- [[curriculum-design]]
- [[culturally-relevant-pedagogy]]
- [[critical-thinking]]

## Connected Articles

- [[educational-llm-alignment]] — Educational LLM Alignment
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students
- [[llm-cultural-relevance-k12]] — LLM cultural relevance in K-12
- [[ai-generated-slides-student-perception]] — AI-Generated Slides: Are They Good? Can Students Tell?
- [[prompt-based-programming-lesson]] — Prompt-based programming lessons

## Citation

Trust, T., Maloy, R., Xu, C., & Pelletier, K. (2025). [*Civic education in the age of AI: Should we trust AI-generated lesson plans*](https://citejournal.org/proofing/civic-education-in-the-age-of-ai-should-we-trust-ai-generated-lesson-plans/). *Contemporary Issues in Technology and Teacher Education*
