---
title: "Designing a mobile chatbot-based learning journaling system for intrinsic motivation and engagement"
created: 2026-07-29
updated: 2026-08-03
type: concept
tags: [self-regulated-learning, generative-ai, higher-ed, student-experience, engagement-metrics, efficacy-study, scaffolding]
sources: [raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md]
confidence: high
---

# Designing a mobile chatbot-based learning journaling system for intrinsic motivation and engagement

**Sven Scheu, Simone N. Loeffler & Alexander Maedche (2026)** — *International Journal of Educational Technology in Higher Education* (Springer), 23:15. Open Access, CC BY 4.0. doi:10.1186/s41239-026-00589-7. *(Page upgraded from stub to full synthesis 2026-08-03 — full text now ingested.)*

📄 [Full text (Springer, OA)](https://link.springer.com/article/10.1186/s41239-026-00589-7)

## Summary

A **randomized 2×2 full-factorial field experiment** (N = 179 German university students, 22 days of app use, 12-week follow-up) testing two design principles for a **mobile chatbot-based learning journaling system** aimed at keeping students motivated to maintain reflective learning journals — a known pain point (rapid decline in motivation/engagement after brief use). The two principles: (1) an **example-based built-in course** (7 days, one SRL topic per day, time-gated, modeled example responses) and (2) an **LLM-based journaling assistant** (GPT-3.5-turbo-1106) that scaffolds entries by summarizing drafts, asking clarifying follow-up questions, and generating alternative first-person formulations.^[raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md]

## Design & method

- **Groups:** Baseline (B, n=53) | Assistant (A, n=53) | Course (C, n=52) | Course+Assistant (CA, n=52); stratified randomization (gender, age, LIST-K SRL scales).
- **Measures:** Intrinsic Motivation Inventory (IMI: enjoyment, perceived choice, pressure, competence, effort); LIST-K (SRL: cognition, metacognition, internal/external resource strategies) at pre/post/12-week follow-up; **behavioral engagement = characters written per journal prompt** (7,286 responses; 1,904 entries; mean 10.64 entries/student).^[raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md]
- Engagement analyses: multiple regression + mixed-effects robustness check; outliers trimmed (top 1% and single-word messages removed → 5,181 messages, M = 71.87 chars).^[raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md]

## Key findings

### Intrinsic motivation (H1/H2)
- **Course → motivation: SUPPORTED.** Small significant effect on enjoyment (η² = 0.03, F(1,153) = 4.81, p < .05) and perceived competence (η² = 0.04, F(1,154) = 5.77, p < .05). No effect on perceived choice or pressure.
- **Assistant → motivation: NOT SUPPORTED.** No significant effect on enjoyment (p = .67) or competence (p = .95); no interaction between features. Even usage-days analysis found no competence effect (t = 1.95, p = .054).^[raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md]

### Behavioral engagement (H3/H4)
- **Both features SUPPORTED.** Regression on characters written: Assistant B = 18.32***, Course B = 22.95***, with a significant **negative interaction** (Course×Assistant B = −15.21***) — mean message lengths B 51.21 → A 71.25 / C 79.26 / CA 83.04.
- **Distinct mechanisms:** the course's effect was *constant* (unrelated to course days completed), while the **assistant formed a positive feedback loop** — more assistant use predicted longer messages over time (B = 6.20 per assistant day, p < .001), echoing the social-cognitive modeling account (Schunk): the assistant's model adapts, the course's static examples do not.^[raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md]

### Course benefit is temporary
- Course users were far more likely to be "early" writers (OR = 3.45, p < .001) — less reliant on the 9 PM notification — but **significantly fewer reached 10+ journal days** (OR = 0.38, p < .001): most completed the 7-day course, journaled one more day, then stopped. Static one-off scaffolding stimulates early activity but does not sustain it.

### SRL development
- All groups (including baseline) significantly increased cognitive and metacognitive strategy use from pre to 12-week follow-up (p < .05) — the structured prompting concept itself supported SRL, unlike earlier structured-journal studies.
- 32 of 97 users reported the auto-generated summaries helped them reflect on prior entries (an unprompted purpose).^[raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md]

## Implications

- For reflective-learning-tool design: pair one-off course-style scaffolding with **recurring/adaptive support** (follow-up prompts, phase-specific guidance, timely interventions) to sustain engagement; the LLM assistant is the more promising candidate for durable engagement dynamics, but needs to be used (only 55.9% used it post-onboarding — a self-selection caveat).
- Engagement measured as text length only; cognitive engagement/reflection quality untested. Implementation is a single instantiation; seasonal/semester effects possible; long-term effects beyond 3 weeks unverified.^[raw/papers/scheu-mobile-chatbot-journaling-motivation-2026.md]

## Related Pages

- [[self-regulated-learning]] — SRL strategy use as the outcome and theoretical frame
- [[scaffolding]] — Course and assistant as scaffolding mechanisms (modeling, worked examples)
- [[generative-ai]] — The LLM-based journaling assistant (GPT-3.5-turbo)
- [[student-experience]] — Intrinsic motivation and engagement of student users
- [[higher-ed]] — Deployment context (German technical university)
- [[metacognition]] — Reflection and metacognitive strategy development via journaling
- [[feedback-loop]] — The assistant's usage→engagement feedback loop
- [[engagement-metrics]] — Behavioral engagement operationalized as response length

## Citation

Scheu, S., Loeffler, S. N., & Maedche, A. (2026). Designing a mobile chatbot-based learning journaling system for intrinsic motivation and engagement. [*International Journal of Educational Technology in Higher Education*](https://doi.org/10.1186/s41239-026-00589-7), 23, 15
