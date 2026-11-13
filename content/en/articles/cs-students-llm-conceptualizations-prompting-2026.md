---
title: "Who (or what) are they prompting? How CS students conceptualize and use LLMs"
created: "2026-11-13T09:11:00-05:00"
updated: "2026-11-13T09:11:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey, thematic analysis]
evidence_context: educational
discipline: [cs education]
level: [higher ed]
audience: [instructors, curriculum designers, researchers]
sources: ['raw/papers/cs-students-llm-conceptualizations-prompting-2026.md']
source_url: "https://arxiv.org/abs/2611.14798"
source_depth: full text
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, critical-thinking, misconceptions]
pedagogy: [student-ai-interaction, prior-knowledge]
technology: [llm, generative-ai, conversational-ai]
---

> **Synthesis:** Donekal Chandrashekar, Ellis, Basir Nizamani and Ramakrishnan (2026) asked what 283 students in a post-CS1 problem-solving course actually think an [[llm|LLM]] is, and whether that picture tracks how they prompt. Two thirds of students described the model in human terms — a "smart friend", a "tutor" — while a third described a machine, "a tool" or "instant Google". Most sat in the middle of a four-level [[ai-literacy|knowledge scale]], able to describe pattern prediction but not the architecture underneath it. Context-rich [[prompt-engineering|prompting]] was the most-used style and role-based prompting the least, and the associations the authors tested were weak: framing the model as a machine went with slightly higher knowledge scores, human framing with more role-based prompting and more prompts, and knowledge with a small rise in context-rich prompting. None of those associations survived correction for multiple comparisons, so the paper's contribution is a description of a student population rather than a causal claim about teaching.

## Key Findings

1. **Students personify the model.** 192 of 283 respondents (68%) used a human persona such as "smart friend" or "tutor"; 91 (32%) used a machine persona such as "a tool" or "instant Google".
2. **The most common relational role was assistant.** 152 students cast the LLM as a helper or unpaid intern, against 63 expert, 56 peer and only 12 imperfect expert.
3. **Knowledge clustered in the middle.** 143 students explained LLMs at a pattern/predictive level, 76 at architecture/structural, 60 at superficial, and only four reached the critical level.
4. **Context-rich prompting dominated.** On a 0-4 use scale it scored 2.49 against 2.36 for example-based, 2.18 iterative, 1.69 minimal and 1.24 role-based, and the ordering held when each student's top-rated style was counted.
5. **Prompt volume was modest.** 82% of students reported between 1 and 50 prompts over the course, with a median band of 16-50.
6. **Machine framing went with slightly better knowledge.** Those students averaged 2.22 on the knowledge scale against 2.02 for human framing, a small association that did not survive correction for multiple comparisons.
7. **Knowledge tracked only context-rich prompting, weakly.** Context-rich use rose from a mean of 2.25 at the superficial level to 2.72 at architecture/structural, but the association explained only about 2% of the variance.

## What the course taught, and what students took from it

The setting is a required post-CS1 course at a large public university in the southeastern United States, taught in Fall 2025 across five sections to 360 students. The redesign folded current practice into the syllabus — version control, the command line, and an LLM unit that introduced transformers, system prompts and the limits of model output, alongside verification, privacy and fairness. LLM use was then allowed through units on algorithms, software engineering, web development, HCI, networking and data science. The survey instrument paired open-ended items asking students to describe an LLM and explain how it works with closed-response items on prompting style and prompt count, and the open answers were coded on a SOLO-derived four-level scale plus two conceptual dimensions: whether the metaphor was human or machine, and which relational role it assigned. Coding both dimensions produced the paper's more useful observation, that the two are entangled: 53 of the 56 peer-framed students also used human metaphors, so the low knowledge score attached to peer framing cannot be separated from human framing.

## Why the associations are weaker than they look

The paper is careful about its own correlations, and worth reading for that. Persona type and knowledge were associated at p = .036 with r = .14, a small effect that fell to an adjusted p = .065 once multiple comparisons were corrected. Persona type and prompting produced two nominally significant results — human-framed students used more role-based prompting (1.34 versus 1.04) and reported more prompts — and neither survived correction (adjusted p = .23). The role effect on knowledge was not significant overall (ε² = .015, p = .065). The one association the authors keep is knowledge with context-rich prompting, ρ = .15, and they describe it as accounting for about 2% of the variance. Their reading is the modest, plausible one: understanding how output depends on the context and constraints supplied in a prompt may shape how a student writes prompts, and anthropomorphic framing may encourage conversational, role-oriented use without reflecting deeper understanding. A course-level survey cannot separate that from prior familiarity or from the course's own emphasis.

## What this means for practice

- **Instructors.** Teach the mechanism, not only the etiquette: students who could describe prediction and context scored higher on knowledge and leaned toward context-rich prompts, and the anthropomorphic framing most students used is not what predicts it.
- **Curriculum designers.** Put the LLM unit where it can be applied — in this course it ran alongside algorithms, software engineering and HCI units rather than as a standalone module, which is the condition the authors suspect produced the higher-than-CS1 prompting quality.
- **Researchers.** Treat metaphor and mechanism knowledge as related but not interchangeable constructs, and code both, because role framing and persona type co-occur often enough to confound each other.

## Limitations

- All measures are self-reported on one end-of-course survey; students may misreport their own prompting style or prompt volume.
- The sample is one required course at one institution (283 codable responses from 360 enrolled), so the distributions describe this population rather than computing students generally.
- Only four students reached the critical knowledge level, so that category supports no independent inference.
- Qualitative coding of metaphors and explanations carries interpretive bias, and the authors report no inter-rater reliability figure in the results.
- The course taught LLM use throughout, so students' prompting reports may reflect the course's instruction rather than their prior habits, with no comparison group to separate the two.

## Citation

Donekal Chandrashekar, N., Ellis, M., Basir Nizamani, S., & Ramakrishnan, N. (2026). [*Who (or what) are they prompting? How CS students conceptualize and use LLMs*](https://arxiv.org/abs/2611.14798). arXiv:2611.14798.
