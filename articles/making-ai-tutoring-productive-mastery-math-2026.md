---
title: "Making AI Tutoring Productive: Evidence from a Mastery-Based Math Practice Experiment"
created: "2026-08-17T17:56:00-04:00"
updated: "2026-08-21T05:12:55-04:00"
type: article
tags: [intelligent-tutoring, cognitive-offloading, math-education, k-12, edtech-platform, adaptive-learning, learning-gains, feedback, metacognition, help-seeking, formative-assessment]
research_method: [learning analytics]
discipline: [math education]
level: [k 12]
confidence: high
sources: [raw/papers/making-ai-tutoring-productive-mastery-math-2026.md]
---

> **Making [[intelligent-tutoring|AI tutoring]] productive depends on the structure that surrounds it** — not just the model. In a randomized field experiment with 6,000+ [[k-12|middle-school]] students using NUMI, a [[research-methods-aied|research]]-based [[edtech-platform|computer-assisted learning platform]], students assigned to AI support progressed more slowly and attempted fewer questions, but answered more accurately and — the clearest mechanism — **improved their next-attempt correctness after mistakes**, needing fewer attempts to return to a correct answer while spending more time on each structured question. This is a "productive slowdown": AI that coaches rather than gives answers takes time, but turns mistakes into learning. Notably, a mastery rule (three-correct-in-a-row) sharply increased platform-defined success without by itself improving delayed learning — a short-run streak is **not** the same as durable understanding. The strongest delayed-test evidence emerged when AI was embedded in the mastery workflow, concentrated on practiced material.

## Key Findings

- **AI slows progress but improves conditional accuracy.** Students randomized to AI support completed fewer questions and progressed more slowly through the assignment, but were more accurate conditional on reaching an attempt — consistent with an [[intelligent-tutoring|AI tutor]] that [[scaffolding|scaffolds]] rather than simply supplies answers.
- **The clearest mechanism is post-mistake recovery.** AI increased next-attempt correctness after errors and reduced the attempts needed to return to a correct answer, while increasing clock time per question under structured support — the sense in which AI created a **productive slowdown** rather than shallow answer-grabbing that turns [[cognitive-offloading|effort avoidance]] into learning.
- **The "mastery puzzle."** Requiring three correct answers in a row substantially raised platform-defined mastery and practice, yet did **not by itself** produce detectable delayed-test gains one week later. Reaching a short-run streak is an imperfect proxy for durable understanding — some students clear the threshold through repeated exposure, luck, or guessing rather than comprehension, echoing concerns about [[student-engagement|engagement]] quality over quantity.
- **AI's value is conditional on structure.** The most encouraging delayed-test evidence appeared when AI was embedded in the mastery workflow (Mastery × AI practiced-delayed coefficient 0.085), with marginally significant gains concentrated on practiced Exercise 1 material. AI access alone added little; AI paired with a structured workflow that makes mistakes consequential is where the value lives.
- **Practical implication:** designing AI tutoring productively means embedding the tutor in the practice environment, surfacing [[help-seeking|help]] at moments of need, and pairing it with progression rules that make errors matter — turning [[cognitive-offloading|effort avoidance]] into productive [[scaffolding|scaffolded]] struggle.

## Practical Implications

- **Make mistakes consequential, then make support salient.** The results show that [[feedback]] and [[scaffolding|scaffolded]] help are only as productive as the incentive to use them; a [[formative-assessment|mastery progression rule]] creates the moment of need, and a guard-railed tutor turns that moment into reasoning rather than answer-grabbing. Design the pair together, not the tutor in isolation.
- **Distinguish platform-defined success from durable learning.** A three-correct-in-a-row rule is a behavioral lever that raises practice and apparent mastery, but it is not itself understanding — a lesson for [[adaptive-learning|adaptive]] practice platforms that lean on short-run streaks as success metrics.
- **Expect the value to concentrate where structure and AI co-occur.** The strongest delayed-test signal appeared on practiced material when AI sat inside the mastery workflow; standalone AI access added little. Adoption decisions should weight the surrounding practice environment, not model capability alone.

## Connected Concepts

- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[adaptive-learning]]
- [[math-education]]
- [[k-12]]
- [[edtech-platform]]
- [[learning-gains]]
- [[feedback]]
- [[formative-assessment]]
- [[metacognition]]
- [[help-seeking]]

## Connected Articles

- [[measuring-llm-tutors-teach-vs-solve]] — Measuring whether LLM tutors teach or solve
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[genai-performance-vs-learning]] — Distinguishing performance from learning
- [[generative-ai-guardrails-harm-learning]] — GenAI guardrails and learning harm
- [[ai-tutoring-quality-k12-methodologies-2026]] — Improving AI tutoring quality in K-12

## Citation

Oreopoulos, P., Liut, M., Sungu, A., & Low, N. (2026). *[Making AI tutoring productive: Evidence from a mastery-based math practice experiment](https://www.nber.org/papers/w35621)* (NBER Working Paper No. 35621). National Bureau of Economic Research.
