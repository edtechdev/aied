---
title: "Learning-by-Teaching with ChatGPT: The Effect of a Teachable ChatGPT Agent on Programming Education"
created: "2026-08-14T10:45:34-04:00"
updated: "2026-09-01T19:06:21-04:00"
type: article
tags: [learning-by-teaching, intelligent-tutoring, generative-ai, cs-education, self-regulated-learning, scaffolding, active-learning]
research_method: [experiment]
discipline: [cs education]
level: [higher ed]
sources: ['raw/papers/raw-chen-lbt-chatgpt.md']
confidence: high
---

> **Synthesis:** Chen et al. (2024) investigate whether ChatGPT can serve as a **teachable agent** to support [[learning-by-teaching]] in [[cs-education|programming education]]. In a randomized experiment on an eight-queens/backtracking programming task, interacting with ChatGPT as a tutee improved students' knowledge gains and programming ability — especially writing readable, logically sound code — and boosted [[self-regulated-learning|self-regulated learning]] and [[self-efficacy]], but had limited impact on error-correction skills because ChatGPT tends to produce correct code, reducing debugging practice. The study's key design choice was to keep ChatGPT deliberately fallible (un-augmented) so that its mistakes become opportunities for students to teach.

## The Problem with Traditional Teachable Agents

Learning-by-[[teacher-role|teaching]] is an effective [[active-learning]] strategy, but traditional teachable agents (e.g., rule-based tutoring systems like Betty's Brain or SimStudent) have limitations — notably an inability to engage in natural-language dialogue, high development cost (1,200–2,300 lines of Java per task), and rigid predefined interaction paths. ChatGPT's conversational ability offers a way to make the teachable agent a natural interlocutor that students must explain concepts to and correct, supporting the "socialized" nature of learning by teaching.

## Study Design

- **41 university students** (20 experimental, 21 control) with self-reported C++ coding ability, average age 21.2.
- **Task:** solve the classic "eight queens" puzzle using a backtracking algorithm, coded in C++, assessed on an auto-judging platform.
- **Teachable-agent [[prompt-engineering|prompt design]]** grounded in Gall's (1981) five-stage [[help-seeking]] model (awareness of need, decision to seek help, identifying a help source, eliciting help, reacting to help), so ChatGPT behaves as a realistic help-seeking tutee.
- **Deliberate fallibility:** the [[research-methods-aied|researchers]] deliberately used un-augmented GPT-4 and did not chase answer accuracy — an agent that makes mistakes gives students more opportunities to teach and correct, and any "[[hallucination-risk|hallucinations]]" read like a beginner's errors.
- **Procedure:** pre-test → watch three instructional videos (30 min) → experimental group guides ChatGPT to produce correct code while the control writes code alone (1 hour, screen-shared/supervised) → post-test. Both groups had to pass the auto-judging platform.
- **Measures:** 15-item knowledge test (5 easy/5 medium/5 hard); pseudocode test scored on clearness, correctness, and readability; and a 20-item adapted MSLQ self-regulated-learning questionnaire (test anxiety, self-efficacy, cognitive strategies).

## Key Findings

- **Improved knowledge and programming gains.** The teachable-ChatGPT group scored significantly higher on the knowledge test (adjusted mean 11.86 vs. 10.53; F = 35.54, η² = 0.74) and on code **clearness** (4.13 vs. 3.17; F = 7.39, η² = 0.37) and **readability** (F = 4.32, η² = 0.26).
- **Limited error-correction benefit.** There was **no significant difference in code correctness** (control slightly higher), likely because ChatGPT tends to generate correct code, removing opportunities to practice spotting and fixing bugs. The control group averaged **2.90 submission attempts** vs. **1.95** for the experimental group — more debugging practice, not worse performance.
- **Higher self-efficacy and self-regulated learning.** The teachable-ChatGPT group reported significantly higher **self-efficacy** (F = 37.26, η² = 0.75) and **cognitive strategies** (F = 18.97, η² = 0.61).
- **Accountability drove effort.** Students were responsible for making the ChatGPT-generated code pass the judging platform, which motivated sustained effort and compelled them to articulate a personal understanding of the backtracking algorithm in plain natural language.

## Implications

1. **Conversational teachable agents** extend learning-by-teaching beyond rule-based agents into natural-language, open-ended domains.
2. **Design agent fallibility deliberately** — a teachable agent that is too competent (always correct) removes the error-correction practice that productive learning-by-teaching depends on. Pairing the tutee with an external success criterion (e.g., a judging platform) can restore that accountability.
3. **Support SRL** — the teachable-agent interaction naturally [[scaffolding|scaffolds]] self-regulated learning, but may need explicit design (e.g., [[metacognition|metacognitive]] prompts) to do so consistently, and instructors should watch for [[cognitive-offloading|over-reliance]].

## Connected Concepts

- [[learning-by-teaching]]
- [[generative-ai]]
- [[cs-education]]
- [[self-regulated-learning]]
- [[scaffolding]]
- [[active-learning]]
- [[desirable-difficulties]]

## Connected Articles

- [[explique-teachable-agent-algorithms-546-students-2026]] — Explique: teachable agent for 546 students
- [[knowloop-confusion-to-consolidation-2026]] — Teach-back consolidation in a conversational review system
- [[curiobot-llm-tutoring-exploratory-learning]] — LLM tutoring for exploratory learning
- [[structured-llm-feedback-programming]] — Structured LLM feedback in programming

## Citation

Chen, A., Wei, Y., Le, H., & Zhang, Y. (2024). [*Learning-by-Teaching with ChatGPT: The Effect of a Teachable ChatGPT Agent on Programming Education*](https://arxiv.org/abs/2412.15226). [cs.CY].
