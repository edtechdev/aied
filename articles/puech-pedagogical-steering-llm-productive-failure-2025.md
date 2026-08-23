---
title: "Pedagogical Steering of LLMs for Tutoring: Modeling Productive Failure"
created: "2026-08-23T08:05:00-04:00"
updated: "2026-08-23T09:30:00-04:00"
type: article
tags: [productive-failure, llm, intelligent-tutoring, socratic-method, generative-ai, k-12, math-education, human-in-the-loop-ai]
sources: ['raw/papers/puech-pedagogical-steering-llm-productive-failure-2025.md']
confidence: high
---

> **Synthesis:** Puech, Macina, Chatain, Sachan and Kapur (2025) introduce **Pedagogical Steering** — the problem of getting LLM-based tutors to follow effective teaching strategies rather than behaving as answer-giving assistants — and present **StratL**, an algorithm that steers an LLM through a predefined multi-turn tutoring plan represented as a transition graph. In a case study, they engineer an LLM tutor for high school math that follows [[productive-failure]] pedagogy, withholding solutions and eliciting multiple solution attempts. A field study with 17 Singaporean students showed StratL significantly increased fidelity to the PF strategy, though the PF tutor was perceived as less "helpful" than a baseline — the central tension between learning effectiveness and user satisfaction.

## The Pedagogical Steering problem

One-to-one tutoring is among the most efficient teaching methods, but is expensive — the "Two-Sigma Problem" (Bloom, 1984). LLM-based conversational tutors aim to scale it affordably. However, current LLMs are instruction-tuned to be helpful assistants and maximize user satisfaction; a tutor's goal is to **maximize learning, not satisfaction**. These goals conflict: directly providing the solution maximizes satisfaction and is what LLMs prefer, but promoting [[student-engagement|active engagement]] (indirect hints, guiding questions) is more effective for learning (Freeman et al., 2014; Merrill et al., 1992). Moreover, LLM tutors are optimized/evaluated for single-turn requests, while tutoring is a multi-turn interaction using various pedagogical cues. Shifting LLMs from their user-serving goal to a pedagogically suitable one is the **Pedagogical Steering problem**.

## StratL

StratL models a multi-turn tutoring strategy with LLMs. A multi-turn strategy is a succession of single-turn pedagogical goals called *tutoring intents*. StratL uses a transition graph to dynamically redefine the tutoring intents after every student utterance, prompting the LLM to follow these intents for the next turn. Built with learning scientists, it integrates a strategy based on Productive Failure (Kapur, 2008, 2024).

## Field study results (17 high school students, Singapore)

- **Strategy fidelity:** On both test problems, the StratL-controlled LLM (V1) achieved a higher PF score than the baseline (V2), statistically significant for problem Consistency (p=.046).
- **Eliciting multiple solutions:** The baseline LLM failed to elicit multiple RSMs (solution attempts), while a StratL-tutored student produced on average 2.6 RSMs per session (p=.05) — succeeding in the PF process of making students explore as many solutions as possible.
- **Perceived helpfulness trade-off:** StratL had no significant effect on coherence or empathy. The baseline (no intents) was perceived as more helpful — because the PF strategy only gives help when strictly necessary, so students spend more time stuck and exploring suboptimal solutions. The authors note this can feel frustrating or be misunderstood by students, even though it is more effective for learning.

## Relevance to the wiki

This paper is the key technical anchor connecting LLM-based [[intelligent-tutoring|tutoring]] to [[productive-failure]] pedagogy. It demonstrates that LLMs must be *steered* to implement productive failure (withhold answers, elicit attempts, help only when necessary) — and that doing so trades perceived helpfulness for learning effectiveness. It connects to [[socratic-method]] (indirect hints and guiding questions), [[cognitive-offloading]] (resisting the urge to hand over solutions), [[scaffolding]] (giving help only when strictly necessary), and the [[human-in-the-loop-ai|design]] of AI tutors. Co-authored by Manu Kapur, the originator of productive failure.

## Connected Concepts

- [[productive-failure]]
- [[llm]]
- [[intelligent-tutoring]]
- [[socratic-method]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[generative-ai]]
- [[k-12]]
- [[math-education]]
- [[human-in-the-loop-ai]]

## Connected Articles

- [[kim-ai-productive-failure-adult-2026]] — Designing AI Systems for Productive Failure
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI to Support PF Problem Design
- [[wang-safety-gap-productive-struggle-2026]] — The Safety Gap: Restoring Productive Struggle
- [[lukesova-clue-before-correction-2026]] — Clue Before Correction: ChatGPT for Autonomous Learning

## Citation

Puech, R., Macina, J., Chatain, J., Sachan, M., & Kapur, M. (2025). [*Towards the Pedagogical Steering of Large Language Models for Tutoring: A Case Study with Modeling Productive Failure*](https://aclanthology.org/2025.findings-acl.1348/). *Findings of ACL 2025*, 26291–26311.
