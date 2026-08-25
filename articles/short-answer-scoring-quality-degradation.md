---
title: "Quality-Conditioned Agreement in Automated Short Answer Scoring: Mid-Range Degradation and the Impact of Task-Specific Adaptation"
created: "2026-05-08T04:33:04-04:00"
updated: "2026-08-15"
type: article
tags: [automated-assessment, formative-assessment, llm, benchmark, efficacy-study, human-in-the-loop-ai, assessment-validity, open-source]

sources: ['raw/papers/2605.07647.md']
confidence: medium
---

> Schleifer, Ariely & Klebanov (2026) investigate a critical gap in [[automated-assessment|Automated Grading]]: **how scoring quality degrades for mid-range student responses**. Most ASAS evaluations focus on clearly correct or incorrect answers, but real classrooms are dominated by partially correct responses where scoring is most challenging.

# Automated Short Answer Scoring: Mid-Range Quality Degradation

## Core Contribution

Schleifer, Ariely & Klebanov (2026) investigate a critical gap in [[automated-assessment|Automated Grading]]: **how scoring quality degrades for mid-range student responses**. Most ASAS evaluations focus on clearly correct or incorrect answers, but real classrooms are dominated by partially correct responses where scoring is most challenging.

## Key Findings

The paper reveals that automated short answer scoring (ASAS) systems show significant **quality degradation in the mid-range** — exactly where teacher judgment is most needed. This connects directly to [[cong-confidence-asag-2026]] research on confidence-aware LLM grading with epistemic uncertainty quantification. The finding that task-specific adaptation can mitigate this degradation provides a practical path forward.

## Significance for AIED

This work fills a gap in the [[ai-tutor-behavioral-evaluation]] landscape: Niousha et al.'s 10K-student analysis identified missing evaluation axes for AI tutoring, and mid-range scoring reliability is one such axis. The quality-conditioned agreement approach offers a more nuanced alternative to simple accuracy metrics used in benchmark evaluations.

The findings also matter for [[formative-assessment]] systems — if ASAS works well only at extremes, it may reinforce binary thinking rather than supporting the nuanced feedback that [[sequenced-ai-feedback-learning]] research shows is critical for learning. The connection to [[human-in-the-loop-ai]] is clear: mid-range responses may be where human teacher judgment remains essential.

## Connections to Wiki

- Extends [[automated-assessment|Automated Grading]] with quality-conditioned analysis
- Complements [[cong-confidence-asag-2026]] on confidence estimation
- Relevant to [[ground-truth-reliability-aied]] concerns about scoring validity
- Connects to [[generate-then-validate-question-gen]] methodologies for AI assessment quality

## Connected Concepts

- [[automated-assessment]]
- [[formative-assessment]]
- [[human-in-the-loop-ai]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[benchmark]]
- [[ai-feedback-quality]]
## Connected Articles

- [[cong-confidence-asag-2026]]
- [[ai-tutor-behavioral-evaluation]]
- [[sequenced-ai-feedback-learning]]
- [[ground-truth-reliability-aied]]
- [[generate-then-validate-question-gen]]
- [[cong-confidence-asag-2026]]
- [[llm-psychometric-calibration-cdp]]
## Citation

Klebanov, A.A.V.G.S.M.A.B.B., Scoring:, Q.A.I.A.S.A., Adaptation, M.D.A.T.I.O.T., Klebanov2, A.V.G.S.M.A.B.B., Alexandron1, A.S.G., & Princeton, E. (2026). [*Quality-Conditioned Agreement in Automated Short Answer Scoring: Mid-Range Degradation and the Impact of Task-Specific Adaptation*](https://arxiv.org/abs/2605.07647). par- require ample training data (Gurin Schleifer et al
