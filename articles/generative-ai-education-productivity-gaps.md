---
title: "Does generative AI narrow education-based productivity gaps? Evidence from a randomized experiment"
created: "2026-08-09T07:09:19-04:00"
updated: "2026-08-24T11:30:00-04:00"
type: article
tags: [rct, productivity, equity, generative-ai, ai-education, higher-ed, workforce-development, upskilling, llm]
sources: ['raw/papers/2608.04198v1.md']
confidence: high
---

> **Synthesis:** In a [[rct|randomized controlled trial]] with 1,174 participants, Cruces et al. find that [[generative-ai|generative AI]] substantially narrows education-based productivity gaps, closing approximately three-quarters of the initial performance difference between higher- and lower-education workers. Critically, gains are not purely from delegation — lower-education participants retain part of their improvement after AI is removed, and follow-up performance improves when intensive AI use is combined with sustained effort. This study provides causal evidence that [[ai-education|AI tools]] can serve as productivity equalizers in workplace tasks.

## Experimental Design

The study employed a [[rct|randomized online experiment]] with 1,174 [[adult-learning|adults]] aged 25-45 in Argentina completing workplace-style problem-solving tasks:

- **Treatment group:** Access to a [[llm|generative AI assistant]] during the main task
- **Control group:** No AI assistance
- **Follow-up module:** Both groups completed an unassisted module to measure learning retention

Access was randomized across education-defined groups (high school versus postsecondary), holding the task fixed to identify how [[generative-ai|AI]] changes the productivity advantage associated with formal education. Responses were scored by an [[automated-essay-scoring|AI-assisted grading]] procedure validated against independent human graders. Chat logs were analyzed to understand differential AI usage patterns across education levels.

## Key Findings

1. **AI substantially narrows the education-based productivity gap:** Without AI, high-education participants outperform low-education participants by 0.548 SD; with AI, the gap shrinks to 0.139 SD, closing about 75% of the baseline difference. AI raises performance for both groups, with larger gains for lower-education participants (1.242 SD vs. 0.834 SD).
2. **The gains are not purely delegation:** On an unassisted follow-up module, treated participants do not perform worse than controls once AI is removed, and low-education participants retain part of their improvement (0.171 SD), though a sizable education gap (0.200 SD) re-emerges.
3. **Carry-over depends on engagement:** Intensive AI assistance produces strong submitted answers even with low task engagement, but follow-up performance is substantially higher only when intensive AI use is combined with sustained effort.
4. **The gap narrows but does not disappear because of effective use:** Lower-education participants obtain substantial assistance from AI, while higher-education participants use the tool somewhat more effectively across margins such as prompt detail and workflow structure.

## The Equalizing Effect on Task Performance

The main outcome was an overall task score standardized relative to the low-education control group. In the no-AI control condition, higher-education participants outperform lower-education participants by 0.548 SD, and access to a [[llm|GPT-based assistant]] closes about three-quarters of that gap, leaving a residual 0.139 SD difference that is large but marginally insignificant. The treatment effect is 0.408 SD larger for low-education participants, with gains operating through both the content and writing components of the score, so the result is not driven by writing improvements alone. Because only about 13% of treated low-education participants reach the top score category, the convergence is not an artifact of ceiling effects — the task remains cognitively demanding, and participants must still evaluate, select, and integrate AI-generated content, so [[human-ai-collaboration|human judgment]] continues to shape answers.

## Why Gains Carry Over After AI Is Removed

The authors paired the assisted task with an immediate non-AI-assisted follow-up module to test whether gains reflect [[cognitive-offloading|delegation]] to the tool rather than productive use. The results do not support a pure delegation interpretation: treated participants do not perform worse than controls once AI is removed, and low-education participants show a modest 0.171 SD gain in follow-up performance, consistent with some internalization of the task rather than mere exposure to a better answer. However, low-education treated participants still lag their high-education counterparts by 0.200 SD, indicating that underlying human capital continues to shape unassisted performance. A four-way split on AI assistance and task engagement sharpens the picture: intensive AI use predicts strong task scores even when engagement is low, but follow-up performance is substantially higher only when intensive assistance is combined with sustained effort — exposure to a correct AI-generated answer is not by itself sufficient.

## Patterns of AI Use: Why the Gap Persists

Chat-log analysis of 471 treated participants who used the assistant explains why the gap narrows substantially but does not disappear. There are no meaningful differences between education groups in the intensity of interaction: both send a similar number of messages and request help on a comparable share of task components (around 61% in both groups). Differences instead emerge along qualitative dimensions of use. Higher-education participants provide more detailed [[prompt-engineering|instructions]] guiding the assistant's reasoning, are more likely to begin with a highly specific prompt and a structured workflow, and are more likely to use AI output as an input into their own writing rather than fully copying it. Lower-education participants are 10 percentage points more likely to copy-paste AI-generated text into their final answer. This suggests that effective [[human-ai-collaboration|use of AI]] remains partly shaped by underlying human capital, even when access and onboarding are equal.

## Robustness Checks

The main results are stable across the ten iterations of the [[automated-essay-scoring|LLM-based grading]] used to score responses, and correlate highly (above 0.9) with manual grading by independent human graders and with alternative grading procedures, including an Elo-based approach. Estimates also hold under alternative definitions of the high-education group and after controlling for observable characteristics such as age, gender, employment status, and work experience.

## Implications for Education and Workforce

This study provides some of the strongest causal evidence yet that [[generative-ai|generative AI]] can serve as a [[equity-in-ai-education|productivity equalizer]] across education levels when access and onboarding are equal. Aligned with the view of AI as a skill-democratizing technology, the tool relaxes constraints on problem structuring and written communication that bind lower-education workers more tightly. Three caveats qualify the equalizing story. First, a sizable education gap persists even with AI, and the gap re-emerges in unassisted settings, so [[ai-literacy]] and [[professional-training|skill development]] remain critical — institutions should teach effective AI collaboration strategies, not just provide tool access. Second, carry-over depends on sustained engagement with the task rather than mere exposure to AI output, echoing concerns that [[cognitive-offloading|delegation]] can undermine learning. Third, adoption in real settings is unequal: even under equal access, higher-education participants used the tool more effectively, and outside the experiment, differences in access and incentives may attenuate or reverse the equalizing effect. For [[educational-policy-ai|policy]], equalizing task-level capability does not automatically translate into equalizing outcomes unless access and productive adoption are broadly supported.

## Connected Concepts

- [[rct]]
- [[generative-ai]]
- [[ai-education]]
- [[ai-literacy]]
- [[professional-training]]
## Connected Articles

- [[skill-diversity-worker-resilience]] — Navigating the skill diversity frontier: How skill complexity explains worker resilience
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[feedback-futures-genai]] — Feedback futures: beyond the limits of human and GenAI capacities
- [[genai-literacy-image-discrimination]] — Generative AI Literacy Training Improves Intelligence Analysts’ Discrimination of Real and AI-Generated Images
- [[care-full-feedback-genai]] — The care-full craft of feedback in an age of generative AI
- [[genai-minoritized-knowledges-disability]] — Generative AI and the marginalization of minoritized knowledges in higher education: the case of disability

## Citation

Cruces, G., Fernandez Meijide, D., Galiani, S., Galvez, R., & Lombardi, M. (2026). [*Does generative AI narrow education-based productivity gaps? Evidence from a randomized experiment*](https://arxiv.org/abs/2608.04198v1). v1.
