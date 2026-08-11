---
title: "Comparing human and LLM ordered coding of qualitative data: How coding differences cascade through temporal analysis"
created: 2026-08-01
updated: 2026-08-01
type: article
tags: [automated-grading, educational-theory, ground-truth-reliability-aied, learning-analytics, llm, llm-in-education, educational-nlp, automated-assessment]
sources: ['raw/papers/caeai-human-llm-coding.md']
confidence: high
---

> **Authors:** Kamila Misiejuk, Sonsoles López-Pernas, Eduardo Araujo Oliveira, Brendan Eagan, Mohammed Saqr **Source:** Computers and Education: AI, Vol 11 — Open Access (CC BY 4.0)
**Source:** Computers and Education: AI, Vol 11 — Open Access (CC BY 4.0)

## Key Findings

- Automating qualitative coding of learner text has been a long-standing goal of **learning analytics** because it is an essential step toward timely, scalable feedback — yet it is especially hard for **ordered coding schemes** required by temporal analytical methods, where a single utterance can carry more than one code and the assignment order matters.
- The problem goes beyond multi-class and multi-label classification, which means it **cannot be easily tackled with classic language models such as BERT**; the study instead evaluates modern generative LLMs.
- The paper makes two main contributions: it presents **two evaluation approaches** for assessing the quality of ordered data coding and the usability of LLMs in automatically coding ordered processes, and it demonstrates an **LLM prompting method that leverages a consistent context window**.
- Results reveal **systematic and statistically significant differences between LLM and human coding** across structural, transitional, and code-level metrics, for both binary and ordered tasks.
- Because classification errors can propagate through automated feedback systems, **relying on LLM outputs risks amplifying inaccuracies** and producing misleading interpretations of learning processes.

## Study Design & Method

The researchers treat coding quality not as a single accuracy number but along multiple dimensions: **structural** properties of the coded sequence, **transitional** patterns between consecutive codes, and **code-level** agreement for binary and ordered assignments. LLM outputs were produced with a prompting strategy that maintains a consistent context window, giving the model access to surrounding textual context needed for accurate interpretation. Each LLM-coded output was then compared against human coding using the two proposed evaluation approaches.

## Implications for AI in Education

The findings are a caution for the automated-feedback pipeline: LLMs can produce plausible-looking coding of temporal learner data, but systematic deviations from human judgment can cascade into downstream temporal analyses. Practitioners should treat LLM coding as a **human-in-the-loop** proposition, validating outputs with the proposed evaluation metrics before feeding them into automated feedback systems — a relevant consideration for [[automated-assessment]] and [[educational-nlp]] work in [[learning-analytics]].

## Connected Concepts

## Connected Articles


## Citation

Misiejuk, K., López-Pernas, S., Oliveira, E. A., Eagan, B., & Saqr, M. (2026). [*Comparing human and LLM ordered coding of qualitative data: How coding differences cascade through temporal analysis*](https://doi.org/10.1016/j.caeai.2026.100649).
