---
title: "Generative AI and the Productivity Divide: Human-AI Complementarities in Education"
created: "2026-08-08T04:33:04-04:00"
updated: "2026-08-24T12:00:00-04:00"
type: article
tags: [generative-ai, ai-literacy, equity-in-ai-education, adult-learning, higher-ed, scaffolding, rag, llm]
audience: [student experience]
research_method: [experiment]
level: [higher ed]
sources: ['raw/papers/2605.18143.md']
confidence: high
---

> **Synthesis:** Idan & Anand (2026) conduct an RCT showing that GenAI access significantly increases task performance on average — but the gains are highly uneven, NOT predicted by GPA or prior knowledge, but by AI Interaction Competence (AIC): the ability to elicit, filter, and verify model outputs. High-AIC participants realized outsized gains while low-AIC saw limited or negative returns. A scaffolding intervention (conceptual maps) reduced outcome variance, showing that standardized workflows can mitigate the new "AI productivity divide."

## Key Findings

1. GenAI access increased mean task performance — approximately a 17% productivity lift — but the gains were concentrated among high-AIC users while low-AIC users saw limited or even negative marginal returns.
2. GPA and prior knowledge did NOT predict GenAI-augmented performance; AI Interaction Competence (AIC) was the decisive moderator, supplanting traditional academic credentials as the axis of a new productivity divide.
3. A conceptual-map scaffolding intervention reduced outcome variance by nearly 40% without lowering the mean, disproportionately helping low-AIC novices by "leveling the floor."
4. Extending mandated study time (three to four hours) produced no significant performance gains, revealing diminishing returns to time-on-task in the absence of effective interaction skills.
5. Participants strongly preferred LLMs (69%) over lectures, YouTube, and textbooks, and baseline-condition participants dropped out at more than twice the rate — attrition as a revealed-preference signal.

## Background and Motivation

[[generative-ai|Generative AI]] is transforming how firms create, process, and apply knowledge, yet the heterogeneity of its productivity effects across users remains poorly understood. Drawing on the management tradition that technology creates value only when paired with complementary human and organizational capabilities, the authors argue that GenAI heightens this complementarity: unlike earlier automation that standardized routine tasks, [[llm|large language models]] require users to engage in iterative problem solving — formulating [[prompt-engineering|prompts]], interpreting probabilistic outputs, and verifying content quality. These interactional skills are tacit, unevenly distributed, and rarely taught. The paper introduces **AI Interaction Competence (AIC)** as a new dimension of [[human-ai-collaboration|human capital]] that determines how individuals translate AI access into performance, and frames GenAI adoption as a problem of capability design rather than tool procurement. The result is a new [[digital-divide|productivity divide]] driven by interaction skill rather than domain expertise.

## Method

The study is a randomized controlled experiment with 179 participants recruited primarily from [[engineering-education|engineering]] programs at Texas A&M University, approximating the conditions of early-career knowledge workers learning and applying unfamiliar technical information. After a profiling survey and a 15-item pre-intervention exam, participants were randomized into a Baseline condition (traditional resources only) or an LLM condition (restricted to ChatGPT). Within the LLM condition, novice learners were further randomized into [[scaffolding]] sub-conditions: a baseline-LLM arm, a time-on-task arm (four rather than three hours daily), a conceptual-roadmap scaffolding arm, and a [[collaborative-learning|peer-collaboration]] arm. The outcome was post-intervention exam performance normalized to the unit interval, analyzed with OLS regressions and interaction terms controlling for baseline performance, GPA, and other covariates.

## Results

Participants' [[metacognition|self-assessments]] correlated meaningfully with measured performance (strongest for general machine-learning knowledge, ρ = .71), yet the dimensions they could introspect accurately were not the ones driving inequality. LLM-condition participants scored significantly higher on the post-intervention exam (M = .56 vs. .48) and dropped out at far lower rates, with preferences and attrition converging as revealed-preference signals. Crucially, GPA (p = .59) and [[prior-knowledge|prior knowledge]] (p = .2) showed no significant interaction with treatment, while the Treatment × AIC interaction was positive and significant. A three-way interaction showed that novices with low prior knowledge benefited most — but only when they had high AIC. Scaffolding compressed heterogeneity (SD dropped from .22 to .14), while additional study time yielded no gains.

## Discussion and Implications

The findings reframe the educational and organizational stakes of GenAI. Because AIC — an emerging, untested, and unevenly distributed [[ai-literacy|AI literacy]] — now determines who advances and who falls behind, educational institutions and firms should pair access with short AIC [[professional-training|micro-training]] (60–90 minutes covering prompting logic, verification heuristics, and synthesis structure) and light [[scaffolding|scaffolds]] such as standard operating procedures, prompt templates, and review checklists. These process interventions reduce performance variance by about one-third without diminishing the mean, directly addressing the [[equity-in-ai-education|equity]] challenge of AI-mediated learning. The paper's central message is that the effective management of GenAI hinges less on the technology itself and more on the design of complementary routines that embed consistency, discipline, and [[feedback]] into human–AI interaction — a shift toward [[governance|organizational]] capability design.

## Connected Concepts

- [[prompt-engineering]]
- [[affective-tutoring]]
- [[student-experience]]
- [[administrator]]
- [[teacher-ai-competency]]
- [[socratic-method]]
- [[help-seeking]]
- [[bias-mitigation]]

## Connected Articles

- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[rubric-aware-grading-rec-cbm]] — REC-CBM: Rubric-Aware Error-Correction Concept Bottleneck Models for Trustworthy Open-Ended Grading
- [[structured-llm-feedback-programming]] — The Effects of Structured LLM-Generated Feedback on Programming Assignment Performance
- [[ai-generated-feedback-higher-ed]] — Artificial intelligence and feedback in university education: effectiveness and student perceptions
- [[genai-minoritized-knowledges-disability]] — Generative AI and the marginalization of minoritized knowledges in higher education: the case of disability
- [[persistent-ai-agents-academic-research]] — Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study

## Citation

Idan, L., & Anand, B. (2026). [Generative AI and the Productivity Divide: Human-AI Complementarities in Education](https://arxiv.org/abs/2605.18143).
