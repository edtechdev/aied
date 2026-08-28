---
title: "Penny: Transition Network Analysis of Learner-Chatbot Interactions in Scaffolded EFL Writing"
created: "2026-08-22T01:35:00-04:00"
updated: "2026-08-22T01:35:00-04:00"
type: article
tags: [transition-network-analysis, learning-analytics, english-education, written-corrective-feedback, chatbot, generative-ai, student-modeling, scaffolding, ai-literacy]
sources: ['raw/papers/penny-transition-network-analysis-efl-writing-2026.md']
confidence: high
---

## Core Finding

Using **Transition Network Analysis (TNA)**, this study opens the "black box" of learner-chatbot interaction in scaffolded [[english-education|EFL writing]], modeling how 119 Japanese junior-high learners moved between writing, requesting feedback, revising, and chatting across 4,651 sessions and 21,061 interactions with "Penny," a GPT-4o-powered writing chatbot. Two dominant behavioral loops emerged — a **"Revision Loop"** (feedback → successful error correction) and a **"Chat Loop"** (feedback → sustained dialogue → more feedback) — revealing that AI-scaffolded writing is a **non-linear, dialogic process**, not a linear submit-and-correct cycle. Critically, [[ai-literacy|English proficiency]] significantly shaped interaction: **high-proficiency learners engaged more in open dialogue and negotiation of meaning**, while **low-proficiency learners relied more heavily on repetitive corrective-feedback cycles** (using the "check my writing" button rather than clarifying or negotiating). This highlights the need for differentiated chatbot design that moves beyond simple error correction to foster deeper cognitive engagement for all learners.

## Key Findings

- **The revision-dialogue divergence.** Following chatbot feedback, learner behavior split almost evenly: **revise_writing** (43.8%) and **user_chat** dialogue (37.3%). This dual pathway shows learners use the chatbot both as a corrective tool and as a partner for negotiating meaning.
- **Effective revision when chosen.** When learners chose to revise, the transition to **successful_uptake** was 69% — the chatbot reliably facilitated error repair. Successful uptake (7.25% of events) was observed significantly more often than unsuccessful (1.66%) or no uptake (1.55%).
- **The Chat Loop.** Dialogue often looped back: user_chat → penny_feedback (0.44) or → penny_chat non-corrective talk (0.56), creating sustained feedback-and-response cycles. This aligns with interactionist SLA theories where "pushed output" and dialogue facilitate hypothesis testing.
- **Proficiency shapes strategy.** A chi-squared test (χ²=25.4, p<.003) showed interaction frequencies differ by proficiency. High-proficiency learners showed significant over-representation in conversational states (user_chat) and under-use of check_button; low-proficiency learners were the inverse — over-using check_button and under-engaging in dialogue, often triggering further corrective feedback (the chatbot functioned more as a persistent corrector than a partner for them).
- **Network structure.** The TNA network (10 nodes, 26 directed edges, density 0.29, reciprocity 0.31) had strong "gravitational" hubs (penny_feedback), showing learners favored specific behavioral sequences rather than transitioning randomly.
- **LLM-based classification was validated.** Chatbot responses and learner uptake were auto-coded with gpt-4o-mini and validated against human coders with substantial inter-rater agreement (Fleiss' κ = 0.70 and 0.71).

## Why this matters for education

This study is a model demonstration of [[network-analysis|Transition Network Analysis]] applied to AI-in-education log data — treating the learner-chatbot interaction as a process to be modeled temporally rather than judged by product (final essay score). For [[english-education|language learning]] and AI tutoring generally, it shows that **learners of different proficiency levels interact with the same chatbot in qualitatively different ways**, and that the pedagogical value of AI feedback depends on how learners actually engage with it. The finding that lower-proficiency learners get trapped in a corrective loop while higher-proficiency learners negotiate meaning suggests that **AI writing tools may inadvertently widen proficiency gaps** unless designed to actively scaffold negotiation and dialogue for less-advanced learners — a directly actionable implication for [[scaffolding]] and [[student-modeling|adaptive chatbot design]].

## Practical Implications

- **Design chatbots to break the corrective loop.** For lower-proficiency learners, encourage clarification, negotiation, and metalinguistic dialogue rather than repeated "check my writing" cycles — for example, by prompting learners to explain *why* a correction is needed or to propose their own fix before revealing the answer.
- **Model the process, not just the product.** Use [[network-analysis|transition network analysis]] (and related sequence/temporal methods) on interaction logs to reveal how learners actually use AI tools, rather than relying solely on output metrics or self-reports — which can diverge from real revision behavior.
- **Differentiate support by proficiency.** Because high- and low-proficiency learners engage the same chatbot differently, adapt the interaction design (scaffolding, feedback framing, dialogue prompts) to each learner's level and metacognitive readiness.
- **Open the black box for evaluation.** Temporal methods like TNA let researchers and educators see whether feedback leads to genuine uptake, dialogue, or disengagement — informing better evaluation of AI writing tools than error-rate or final-score metrics alone.

## Connected Concepts

- [[network-analysis]]
- [[learning-analytics]]
- [[english-education]]
- [[language-learning]]
- [[feedback]]
- [[scaffolding]]
- [[student-modeling]]
- [[ai-literacy]]
- [[generative-ai]]

## Connected Articles

- [[misiejuk-cognitive-offloading-prompting-2026]] — Cognitive offloading and prompting
- [[tracing-genai-literacy-interaction-patterns]] — Epistemic Network Analysis of LLM literacy interaction patterns
- [[hao-human-ai-collaborative-problem-solving-cognition]] — Epistemic Network Analysis of human-AI collaborative problem solving
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing

## Citation

Woollaston, S., Flanagan, B., Toyokawa, Y., & Ogata, H. (2026). *[Penny: Transition Network Analysis of Learner-Chatbot Interactions in Scaffolded EFL Writing](https://arxiv.org/abs/2607.14575)*. LAK '26 Transition Network Analysis Workshop.
