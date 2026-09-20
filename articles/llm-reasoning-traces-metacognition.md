---
title: Explaining Too Much? Understanding How Large Language Model Reasoning Traces Influence Performance and Metacognition
created: "2026-05-26T04:33:04-04:00"
updated: "2026-09-19T08:49:57-04:00"
type: article
foundations: [cognitive-offloading]
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [llm]
stakeholders: [student-experience]
research_method: [experiment]
audience: [learners]
sources: ['raw/papers/2605.25856.md']
confidence: high
---

> **Synthesis:** This preregistered between-subjects study (N=559) provides the first rigorous evidence that [[llm]] reasoning traces — increasingly common in AI interfaces — do not improve performance and can actively impair it. More critically, they create a dangerous [[metacognition|metacognitive]] blind spot: participants substantially overestimate their performance regardless of trace format.

## Key Findings
- **Summary traces** preserved task performance at the no-trace baseline while elevating trust and hedonic appeal — changing how users *feel* without helping them perform.
- **Full traces** from a verbose open-weight model actually *impaired* performance relative to answer-only baselines.
- **No trace format** supported calibrated self-evaluation — metacognitive overestimation was universal.
- **Hedonic appeal**, not trust, carried the indirect path to overestimation, consistent with a processing-fluency account: the pleasant experience of reading traces inflates confidence without improving understanding.

## Connection to AIED
These findings have profound implications for [[intelligent-tutoring]] and [[becerra-aicofe-feedback-2026|AI feedback systems]]. If students feel more confident after seeing AI reasoning but don't actually learn better, then simply exposing AI reasoning in educational interfaces may create an [[cognitive-offloading|Over-Reliance]] trap. The paper's recommendation — that calibration should be scaffolded by interactions that elicit users' own reasoning first — directly aligns with [[self-regulated-learning]] principles and [[cognitive-offloading-speedup-illusion|cognitive offloading research]] showing that AI use can reduce active [[student-engagement|engagement]].

## Contrast with Assessment Governance
While [[genai-assessment-governance|GenAI assessment governance]] focuses on *when* to allow AI in evaluation, this paper addresses *how* AI explanations affect learning — suggesting that even well-designed AI transparency features can backfire without metacognitive [[scaffolding]].

## What this means for practice
- **Instructors.** Ask students to write down their own approach or tentative answer while the model is generating, rather than exposing them to longer model reasoning traces; the format of the trace did not support calibrated self-evaluation.
- **Designers.** Stop framing a visible reasoning trace as evidence that the answer is correct: participants overestimated their performance regardless of trace format, and summary traces raised trust and hedonic appeal without improving task performance.
- **Designers.** Prefer contrastive explanations that expose divergences between the user's and the model's reasoning, which the qualitative data identify as the promising direction, over refinements to longer traces.
- **Instructors.** Build a calibration step into AI-assisted tasks — have students predict their own score or confidence before seeing the result — because overestimation was universal across all trace conditions.

## Limitations
- The task was LSAT logical reasoning, which the authors note may not capture real-world reasoning and likely overlaps with the model's training data, though models were far from ceiling on the retained items (M = 5.00 out of 10).
- Participants were 559 US-based, English-fluent Prolific respondents working on a desktop layout, so the sample is not representative of other populations or interface modalities.
- The Full-trace condition was instantiated with gpt-oss-20b while answer-only and summary conditions used GPT-5, so the Full-trace impairment is conditioned on an open-weight verbose model, and Full-trace also revealed the answer only after the trace while summary showed trace and answer together, confounding trace content with the engagement requirement.
- The ten-item battery is too small for signal-detection metacognitive indices such as meta-d' and M-ratio, and the design speaks to in-the-moment calibration rather than long-term learning or deskilling.

## Connected Concepts

- [[llm]]
- [[metacognition]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[self-regulated-learning]]
- [[trust-calibration]]
- [[trust]]
- [[scaffolding]]
## Connected Articles

- [[becerra-aicofe-feedback-2026]]
- [[cognitive-offloading-speedup-illusion]]
- [[genai-assessment-governance]]
## Citation

Fernandes, D., Buschek, D., Tankelevitch, L., Kosch, T., & Welsch, R. (2026). [Explaining too much? Understanding how large language model reasoning traces influence performance and metacognition](https://arxiv.org/abs/2605.25856).
