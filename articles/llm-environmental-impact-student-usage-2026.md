---
title: "When LLMs Slow Down: How Environmental Impacts Mediate University Students' LLM Usage"
created: "2026-08-26T09:00:00-04:00"
updated: "2026-09-19T08:58:00-04:00"
type: article
technology: [generative-ai, llm]
stakeholders: [student-experience]
ethics: [ethics]
research_method: [system development, survey]
discipline: [cs education, environmental education]
audience: [learners]
level: [higher ed]
sources: ['raw/papers/llm-environmental-impact-student-usage-2026.md']
confidence: high
page_kind: [evaluation]
---

> **Synthesis:** Large language models' carbon and water footprints raise important [[sustainability]] concerns, particularly with adoption rates exceeding 80% among university students despite limited insight into the environmental impacts of individual usage. Kim and colleagues design and deploy an eco-feedback interface that visualizes latency-carbon trade-offs during live [[llm]] interactions, studying its use with 89 undergraduate [[cs-education|computer science]] students in a computing [[ethics]] course. They find that the likelihood of choosing the eco-feedback system is significantly shaped by sustainability awareness, providing an empirical look at how a technically sophisticated and values-oriented user population responds to sustainability-aware AI interfaces.

## Key Findings

1. LLM adoption exceeds 80% among university students, yet there is limited insight into the environmental impacts of individual usage.
2. An eco-feedback interface visualizing latency-carbon trade-offs during live LLM interactions was designed and deployed.
3. The interface was studied with 89 undergraduate computer science students (ages 18-24) in a computing ethics course.
4. The likelihood of choosing the eco-feedback system is significantly shaped by sustainability awareness.
5. The study provides empirical evidence on how a technically sophisticated, values-oriented user population responds to sustainability-aware AI interfaces.

## What this means for practice

- **Instructors.** Make the latency–carbon trade-off explicit in assignment design: students selected eco mode in roughly 45% of interactions at low latency but under 5% at high latency, so leave room for the slower, lower-carbon option within deadlines.
- **Instructors.** Teach sustainability awareness directly, since recognizing the carbon-saving impact significantly increased eco-mode selection under low-latency conditions (p < .001).
- **Designers.** Show impact in concrete, outcome-oriented terms (PET bottles, gasoline car travel, light bulbs) rather than abstract carbon metrics, which participants rated more favorably.
- **Designers.** Keep perceived latency low and add the interaction controls users expect; higher perceived latency significantly reduced eco-mode preference (p < .001), and the absence of stop or scroll functionality compounded the perceived cost of waiting.
- **Researchers.** Extend eco-feedback beyond carbon to water consumption and human health impacts, and test it with populations beyond technically informed computer science students.

## Limitations

- Single-site sample: 89 undergraduate computer science students at one U.S. university, recruited from a mandatory Computer Ethics course, so participants were likely more technically informed and environmentally attentive than broader LLM user populations, and the course context may have encouraged socially desirable responses.
- No demographic attributes (gender, race, nationality) were collected, limiting analysis of how these factors shape eco-feedback interpretation and engagement.
- Interface design restrictions (no stop or scroll functionality, and several equivalence formats for environmental impact) likely influenced satisfaction under higher-latency conditions.
- Carbon modeling for computing systems carries inherent uncertainty, so the authors frame the results as communication rather than precise numerical claims.

## Connected Concepts

- [[llm]]
- [[higher-ed]]
- [[student-experience]]
- [[ethics]]
- [[generative-ai]]
- [[cs-education]]
- [[ai-education]]
- [[sustainability]]

## Connected Articles

- [[aied-carbon-footprint-reporting]] — The Environmental Cost of LLMs in AIED
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Toward sustainable AI knowledge-base assistants in CS education
- [[genai-over-reliance-learning-2026]] — From Enhancement to Over-Reliance
- [[unesco-ai-guidelines-chemical-education-2026]] — Translating UNESCO AI Guidelines to Chemical Education
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — Artificial intelligence in higher education: a systematic review

## Citation

Kim, Chen, Cabral, Lin, Gupta, & Hester (2026). [*When LLMs Slow Down: How Environmental Impacts Mediate University Students' LLM Usage*](https://arxiv.org/abs/2608.23968).
