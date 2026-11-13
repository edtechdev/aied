---
title: "Who (or what) are they prompting? How CS students conceptualize and use LLMs"
created: "2026-11-13T09:11:00-05:00"
updated: "2026-11-13T10:45:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, critical-thinking, misconceptions]
pedagogy: [student-ai-interaction, prior-knowledge]
technology: [llm, generative-ai, conversational-ai]
---

> **Synthesis:** Donekal Chandrashekar, Ellis, Basir Nizamani and Ramakrishnan (2026) asked students finishing a post-CS1 [[problem-solving]] course what they think an [[llm|LLM]] is, and whether that picture tracks how they prompt. Most described a helpful person and could explain prediction but not the machinery, while context-rich prompting was the most common style. The teaching signal is modest: knowledge rose with context-rich prompting, but the associations are weak enough to describe a population, not prove causation.

## Key Findings

1. **Students described a person, not a predictor.** Most cast it as a smart friend or tutor rather than a tool, and that [[metaphors-and-analogies|metaphor]] shapes how they address it.
2. **The assigned relationship was usually assistant.** Students framed it as a helper or unpaid intern far more often than as a peer or an expert, so delegation is the default.
3. **Mechanism knowledge clustered in the middle.** Most could say the model predicts likely next words; fewer could name transformers or training, and almost none treated [[hallucination-risk|hallucination]] as a limit.
4. **Context-rich prompting was the dominant style.** Prompts carrying background and constraints rated highest and role-play prompts lowest, the habit instruction can build on.
5. **A machine framing went with slightly better knowledge.** Students who called the model a tool scored a little higher, while human framing went with more role-play prompts and more prompts overall.
6. **One association was retained, and it was weak.** Knowledge rose slightly with context-rich prompting, which explains only a small share of the variation.

## A required course that taught the mechanism and then used it

The setting is a required post-CS1 problem-solving course at a large public [[higher-ed|university]] in the southeastern United States: five sections, 360 students, Fall 2025. The redesign added version control, the command line, and an [[ai-literacy|AI literacy]] unit on transformers, system prompts and model limits, then allowed LLM use through algorithms, software engineering, web development, HCI, networking and data science.

The survey paired two open items — a metaphor completion and an explanation of how LLMs work — with closed items on prompt count and style. Of 360 enrolled students, 288 consented and 283 gave a codable explanation. The open answers were coded on a four-level scale derived from the SOLO taxonomy; each metaphor was coded for persona, human or machine, and relational role.

## What students said the model was

Of the 283 codable responses, 192 (68 percent) chose a human persona such as "smart friend" or "tutor", against 91 (32 percent) who used a machine persona such as "a tool" or "instant Google". By role, 152 cast the model as an assistant, 63 as an expert, 56 as a peer and 12 as an imperfect expert.

Knowledge clustered in the middle: 143 students explained pattern and prediction, 76 named architecture or structure, 60 stayed superficial, and four reached the critical level, where hallucination or alignment is treated as a system property.

Prompting was modest in volume: 82 percent reported between 1 and 50 prompts a week, with a median band of sixteen to fifty. On the zero-to-four scale, context-rich led at 2.49, ahead of example-based at 2.36, iterative at 2.18 and minimal at 1.69, with role-based last at 1.24. The dominant-style count is more telling: 118 students named context-rich as their top style, but 99 named minimal, so the average hides a large group whose default is a bare question.

## The associations are small and mostly do not survive correction

Machine-persona students averaged 2.22 on the knowledge scale against 2.02 for the human group, an association at p = .036 with r = .14 that became an adjusted p = .065. Relational role was not significant overall (ε² = .015, p = .065), though a post-hoc comparison put assistants above peers at 2.16 against 1.86.

Persona produced the only two prompting results that reached nominal significance: human-framed students used role-based prompting more (1.34 against 1.04) and reported more prompts (median band sixteen to fifty against one to fifteen), both reduced to an adjusted p = .23. The association the authors retain is knowledge with context-rich prompting, ρ = .15 (confidence interval .03 to .26), about two percent of the variance, with reported use rising from 2.25 at the superficial level to 2.48 at pattern and 2.72 at architecture.

One confound caps the reading: 53 of the 56 peer-framed students also used a human metaphor, so peer and human framing cannot be separated. The authors' reading is plausible, not demonstrated: understanding that output depends on prompt context may give a student a reason to supply it.

## What this means for practice

- **Instructors:** Teach the mechanism before the [[prompt-engineering|prompting]] etiquette. Have students predict how the same question changes when they add a role, a constraint or an example, run both, and grade the prediction; that shows whether they understand why context matters.
- **Curriculum designers:** Place the LLM unit before the units that require AI use, and require one documented prompt revision per project so students see the effect.
- **Faculty developers:** Use "An LLM is like ____" as a five-minute diagnostic and sort responses with the paper's four-level scale, so staff can see who needs the prediction explanation.
- **Researchers:** Code persona and role separately and report reliability, since the two co-occur often enough to confound each other.

## Limitations

- All measures come from one end-of-course [[self-report-measures|self-report]], so prompting style and volume are what students believe, not what they did.
- The sample is 283 codable responses from one required course at one institution, describing this population, not computing students generally.
- Only four students reached the critical knowledge level, so that category supports no inference.
- Codes were refined during analysis without a reliability statistic, and the course had no comparison group, so prompting quality cannot be attributed to instruction.

## Citation

Donekal Chandrashekar, N., Ellis, M., Basir Nizamani, S., & Ramakrishnan, N. (2026). [*Who (or what) are they prompting? How CS students conceptualize and use LLMs*](https://arxiv.org/abs/2611.14798). arXiv:2611.14798.
