---
title: "Catching The Correct Answer Trap: Characterising AI Tutor Blind Spots When Analysing Student Reasoning"
created: 2026-05-28
updated: 2026-05-28
type: article
tags: [intelligent-tutoring, automated-grading, formative-assessment, llm, scaffolding, generative-ai, higher-ed, ai-literacy]
sources: ['raw/papers/2605.23925.md']
confidence: high
---

> **Imran et al. (2026)** — University College London / Eedi. *AIED 2026*.
**Catching the Correct Answer Trap** — accepted at AIED 2026 — exposes a critical blind spot in [[intelligent-tutoring]] systems: they systematically fail to detect misconceptions when students arrive at correct answers through flawed reasoning. Using real student data from the Eedi mathematics platform, the authors characterize the 'Correct Answer Trap' (CAT), showing that 71% of failures concentrate in just two question types where erroneous reasoning accidentally produces the correct numerical answer. Even a frontier [[llm]] achieves only 84% detection accuracy while generating roughly 4 false alarms per genuine detection — making standalone automated screening impractical. This finding has profound implications for [[automated-grading]] and [[formative-assessment]] systems: high overall accuracy metrics can mask catastrophic failures in reasoning assessment. The work connects to [[llm-student-misconception-identification]] research on the gap between answer checking and reasoning evaluation, and to [[codify-socratic-programming-tutor]] findings that even Socratic AI tutors can miss deep misconceptions. The paper reinforces calls for [[human-in-the-loop-ai]] approaches in [[intelligent-tutoring]] and suggests that [[scaffolding]] designs should explicitly account for reasoning assessment, not just answer verification. The concentration of failures in predictable question types also suggests targeted improvements are possible.

## Connected Concepts

- [[intelligent-tutoring]]
- [[llm]]
- [[automated-grading]]
- [[formative-assessment]]
- [[human-in-the-loop-ai]]
- [[scaffolding]]
## Connected Articles

- [[llm-student-misconception-identification]]
- [[codify-socratic-programming-tutor]]
## Citation

Moiz Imran, Sahan Bulathwela (2026). [Catching The Correct Answer Trap: Characterising AI Tutor Blind Spots When Analysing Student Reasoning](https://arxiv.org/abs/2605.23925). arXiv:2605.23925. AIED 2026.
