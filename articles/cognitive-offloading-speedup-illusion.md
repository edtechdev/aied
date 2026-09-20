---
title: Cognitive offloading and the speedup illusion in human-AI interaction
created: "2026-05-25T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [cognitive-offloading]
pedagogy: [metacognition]
technology: [llm]
stakeholders: [student-experience]
research_method: [experiment]
audience: [learners]
sources: ['raw/papers/2605.23177.md']
confidence: high
---

> **Synthesis:** This preregistered large-scale study (N = 1,237) investigates whether people are well-calibrated in estimating the time savings from AI assistance on simple cognitive tasks. The key finding is a **speedup illusion**: participants accurately predict how long they'll take independently but significantly *underestimate* how long they'll take with AI assistance — despite actual completion times being equivalent between independent and AI-assisted conditions. Notably, this bias is AI-specific; the same miscalibration does not appear when participants imagine help from another human. A critical dissociation emerges between time and effort: participants report **lower subjective effort** with AI even when completion times are identical, suggesting subjective experience drives AI adoption more than objective efficiency.

The findings complement the companion paper on the [[efficiency-gain-illusion-ai-overreliance]] (same authors, arXiv:2605.22687) which found people underestimate their rate of AI usage and overestimate benefits on simple tasks. Together, these studies reveal a **dual miscalibration** that could entrench inefficient [[cognitive-offloading|Over-Reliance]] patterns: users choose AI believing it saves time and effort, when for simple tasks it may do neither. This has direct implications for educational settings — students using AI for simple cognitive work (arithmetic, basic writing, spell-checking) may [[cognitive-offloading|cognitively offload]] without actual efficiency gains, reducing [[transfer-of-learning|learning transfer]] through diminished deliberate practice. Presented at CogSci 2026, the work bridges cognitive science and [[metacognition]] [[research-methods-aied|research]] with practical design implications for AI tools in learning environments.

## What this means for practice

- **Learners.** Time yourself on a short task both with and without AI before assuming the tool saves time: participants predicted AI would cut completion times by 68.5 seconds (β = 68.5, SE = 3.37, p < 0.001), but their actual AI-assisted times were significantly longer than their predictions while independent estimates were accurate.
- Judge a tool on two separate questions — "was it faster?" and "did it feel easier?" — because AI assistance reduced NASA-TLX effort by 0.61 points on a 7-point scale while speeding up only three of the 24 tasks.
- Budget time for reading and checking model output: on the logic problem, post-response processing took 113.9 seconds longer than prompting, and AI-assisted completion of that task was slower.
- Write your own prompts rather than pasting the assignment text; 18.5% of prompts were copied directly from the instructions, and copying did not significantly reduce completion time.
- Compare AI against a competent human peer before delegating: participants expected AI to be 51.4 seconds faster than assistance from another participant.

## Limitations

- The study used a between-subjects design with N = 1,237 (401 in the prediction sample and 836 in the completion sample), so calibration was never measured within an individual.
- All 24 tasks were completable in under 5 minutes; the authors identify the complexity level at which AI genuinely saves time and effort as an open question.
- The prediction and completion samples were not completely disjoint — some participants completed both on Prolific.
- AI use was not standardized: participants used the model in very different ways, and the experiment did not control for participant motivation or incentives, with 6.3% of independent-condition and 4.0% of AI-condition responses excluded as low-quality.

## Connected Concepts

- [[cognitive-offloading]]
- [[metacognition]]
- [[transfer-of-learning]]
## Connected Articles

- [[ai-productivity-moderation]]
- [[digital-literacy-illusion]]
- [[efficiency-gain-illusion-ai-overreliance]]
- [[llm-reasoning-traces-metacognition]]

## Citation

Sunny Yu, Myra Cheng, Ahmad Jabbar, Ilia Sucholutsky, Katherine M. Collins, Dan Jurafsky, Robert D. Hawkins (2026). [Cognitive offloading and the speedup illusion in human-AI interaction](https://arxiv.org/abs/2605.23177). Proceedings of the 48th Annual Meeting of the Cognitive Science Society (CogSci 2026).
