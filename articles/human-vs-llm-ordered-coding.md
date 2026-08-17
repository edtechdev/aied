---
title: "Comparing human and LLM ordered coding of qualitative data: How coding differences cascade through temporal analysis"
created: 2026-08-01T04:33:04-04:00
updated: 2026-08-15
type: article
tags: [automated-grading, educational-theory, ground-truth-reliability-aied, learning-analytics, llm, llm-in-education, educational-nlp, automated-assessment]
sources: ['raw/papers/caeai-human-llm-coding.md']
confidence: high
---

> **Authors:** Kamila Misiejuk, Sonsoles López-Pernas, Eduardo Araujo Oliveira, Brendan Eagan, Mohammed Saqr **Source:** Computers and Education: AI, Vol 11 — Open Access (CC BY 4.0)
**Source:** Computers and Education: AI, Vol 11 — Open Access (CC BY 4.0)

## Key Findings

- Automating qualitative coding of learner text has been a long-standing goal of **learning analytics** because it is an essential step toward timely, scalable feedback — yet it is especially hard for **ordered coding schemes** required by temporal analytical methods, where a single utterance can carry more than one code and the assignment order matters.
- The problem goes beyond multi-class and multi-label classification, which means it **cannot be easily tackled with classic language models such as BERT**; the study instead evaluates modern generative LLMs — here, gemini-2.5-flash, prompted with a sliding context window of up to five preceding messages from the same conversation.
- The empirical base was **6,013 Discord messages** from small-group collaboration in three master's-level courses at the University of Eastern Finland, coded by two researchers using a hybrid eight-code scheme covering cognitive and regulatory processes, and in parallel by the LLM.
- The paper makes two main contributions: it presents **two evaluation approaches** for assessing the quality of ordered data coding and the usability of LLMs in automatically coding ordered processes, and it demonstrates an **LLM prompting method that leverages a consistent context window**.
- Results reveal **systematic and statistically significant differences between LLM and human coding** across structural, transitional, and code-level metrics, for both binary and ordered tasks (overall code-frequency association χ2(7) = 1427, p < 0.001).
- Frequency discrepancies were large: the LLM over-assigned **Reaction (2,107 vs. 823 human codes)** and **Discussion (1,092 vs. 756)**, while humans produced far more **Monitoring (1,185 vs. 283)** and **CoRegulation (1,352 vs. 770)**; only Coordination (2,591 vs. 2,439) and Socializing (1,329 vs. 1,182) aligned within chance.
- Binary agreement was modest: overall accuracy ranged **0.693–0.888**, recall was very low for **Feedback (0.131)** and **Monitoring (0.100)**, and Cohen's kappa ranged **0.090–0.539** with most categories below 0.400.
- The LLM detected multi-step transition patterns far more often than humans (e.g., **Coordination→Socializing: 46 vs. 378 occurrences**; **Discussion→Coordination: 19 vs. 268**), and its detection was position-dependent — Discussion and Monitoring found early in messages, socio-emotional codes late — whereas human coding was more evenly distributed across message positions.
- Because classification errors can propagate through automated feedback systems, **relying on LLM outputs risks amplifying inaccuracies** and producing misleading interpretations of learning processes.

## Study Design & Method

The researchers treat coding quality not as a single accuracy number but along multiple dimensions: **structural** properties of the coded sequence, **transitional** patterns between consecutive codes, and **code-level** agreement for binary and ordered assignments. LLM outputs were produced with a prompting strategy that maintains a consistent context window, giving the model access to surrounding textual context needed for accurate interpretation (up to five preceding messages per utterance, with position slots T1–T8 inside messages). Each LLM-coded output was then compared against human coding using the two proposed evaluation approaches, including Transition Network Analysis (TNA) with permutation tests and centrality comparisons — e.g., significant betweenness and in-strength differences for Discussion, Feedback, Socializing, CoRegulation, and Consolidation.

## Implications for AI in Education

The findings are a caution for the automated-feedback pipeline: LLMs can produce plausible-looking coding of temporal learner data, but systematic deviations from human judgment can cascade into downstream temporal analyses. The LLM's tendency to foreground surface-level social exchange (Socializing, Reaction) while under-representing regulatory and collaborative processes (Coordination, CoRegulation, Monitoring) risks painting a more rigid, socially-driven picture of group learning than humans would code. Practitioners should treat LLM coding as a **human-in-the-loop** proposition, validating outputs with the proposed evaluation metrics before feeding them into automated feedback systems — a relevant consideration for [[automated-assessment]] and [[educational-nlp]] work in [[learning-analytics]], and for any analysis of [[self-regulated-learning]] processes built on LLM-coded transcripts.

## Limitations

The study evaluated a single dataset drawn from three courses at one institution where Discord was the collaboration medium, so generalizability to other learning processes, discourse types, and educational levels is untested. It relied on a single LLM (gemini-2.5-flash), a single prompting strategy, and a single codebook — even slight prompt changes can alter results, and a simpler codebook might have performed better. The context window was fixed at up to five preceding messages, with no systematic sensitivity analysis of window size. Finally, human coding is treated as "ground truth" even though qualitative coding is inherently interpretive; in ordered coding this is compounded because disagreement can stem not only from code presence but from how text is segmented into codes.

## Connected Concepts

- [[automated-assessment]]
- [[self-regulated-learning]]
- [[educational-nlp]]
- [[automated-essay-scoring]]
- [[learning-analytics]]
- [[human-in-the-loop-ai]]
- [[feedback-loop]]
- [[collaborative-learning]]
- [[research-methods-aied]]

## Connected Articles

- [[cross-dataset-bloom-question-classification]] — Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs
- [[socratic-tests-conversational-assessment]] — The Theoretical Foundation of Socratic Tests: Dynamic, Multimodal, Conversational Examinations
- [[automatic-short-answer-grading]] — Automatic Short Answer Grading with LLMs
- [[kt4eqg-personalized-question-generation]] — KT4EQG: Personalized Exercise Question Generation via Knowledge Tracing
- [[llm-sentiment-analysis-education-research]] — LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Constructing Epistemic AI Literacy: Detecting Epistemic Aims and Processes in Student-AI Co-Programming

## Citation

Misiejuk, K., López-Pernas, S., Oliveira, E. A., Eagan, B., & Saqr, M. (2026). [*Comparing human and LLM ordered coding of qualitative data: How coding differences cascade through temporal analysis*](https://doi.org/10.1016/j.caeai.2026.100649).
