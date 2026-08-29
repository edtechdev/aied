---
title: Learning by Chatting? Investigating the Impact of Generative AI on Information Seeking and Learning
created: "2026-06-11T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [generative-ai, llm, cognitive-offloading, student-experience, metacognition, higher-ed, self-regulated-learning, scaffolding, pedagogical-agent, ai-literacy]
audience: [student experience]
level: [higher ed]

sources: ['raw/papers/2606.11669.md']
confidence: high
---

> **Shravika Mittal, Su Lin Blodgett, Q. Vera Liao**

**Shravika Mittal, Su Lin Blodgett, Q. Vera Liao**

## Summary

In an 8-day field experiment comparing ChatGPT vs. Google Search for informal learning, participants using ChatGPT experienced diminished agency, offloaded information selection to AI, and suffered greater meta-cognitive load — resulting in worse [[learning-gains|learning outcomes]], particularly for higher-order critical thinking. The study identifies two key distortions in ChatGPT-mediated information access: output bias toward solution-oriented artifacts over principled knowledge, and a conversational interaction paradigm that reduces exploration of the broader knowledge space.

## Key Findings

- **8-day field experiment** with between-subjects design (ChatGPT vs. Google Search) using daily diary protocols for in-situ data collection.
- **Diminished agency:** ChatGPT participants offloaded information selection to the AI, reducing their sense of control over the learning process.
- **Higher meta-cognitive load:** The reduced sense of control paradoxically increased cognitive burden, as participants had to monitor and evaluate AI-curated outputs.
- **Two sources of distortion:**
  1. **Output bias** — ChatGPT favours providing solution-oriented artifacts (answers, code, summaries) over principled knowledge (explanations, theory, context).
  2. **Behavioral shift** — The conversational, socially-oriented interaction paradigm reduces exploration of the broader knowledge space.
- **Worse learning outcomes:** ChatGPT group performed worse overall, especially on higher-order critical learning tasks.
- **Core tension:** Offloading information seeking to AI for efficiency inherently conflicts with the depth of processing required for meaningful learning.

## Implications for AIED

### For AI Tutor Design
- The finding that ChatGPT's output bias favours "solution-oriented artifacts over principled knowledge" directly parallels the challenge identified in [[tutoring-effectiveness-index|tutoring effectiveness]] — that AI tutors must be designed to elicit reasoning, not provide answers.
- The PeteChat/Tutor Not Solver design principles directly address this tension through homework guardrails and SRL support.

### For Metacognition & Self-Regulated Learning
- The study provides empirical evidence for the theoretical concern raised in [[llm-fallacy-misattribution]]: that learners misattribute AI-generated outputs to their own understanding, short-circuiting metacognitive monitoring.
- The increased meta-cognitive load observed when agency is diminished echoes findings in [[self-regulated-learning]] about the importance of learner control.

### For Technology-Enhanced Learning
- Results run counter to the assumption that easier information access automatically improves learning — consistent with the [[cognitive-offloading|Over-Reliance]] literature showing that AI tools can reduce actual learning while maintaining (or inflating) perceived learning.
- The finding that ChatGPT reduces exploration aligns with [[efficiency-gain-illusion-ai-overreliance]]: learners overestimate the benefits of AI assistance on simple tasks.
- Supports the case for [[scaffolding]] that preserves learner agency rather than replacing cognitive work.

### For AI Literacy
- The study highlights the need for [[ai-literacy]] curricula that teach learners when and how to use AI tools productively, and when to rely on traditional search and self-directed exploration.
- Educators should be aware that conversational AI interfaces may inadvertently narrow learning behaviours even when the content seems helpful.

## Connected Concepts

- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[ai-literacy]]
- [[metacognition]]
- [[generative-ai]]
- [[agency]]
## Connected Articles

- [[tutoring-effectiveness-index]]
- [[llm-fallacy-misattribution]]
- [[efficiency-gain-illusion-ai-overreliance]]
## Citation

Mittal, S., Blodgett, S. L., & Liao, Q. V. (2026). [Learning by Chatting? Investigating the Impact of Generative AI on Information Seeking and Learning](https://arxiv.org/abs/2606.11669).
