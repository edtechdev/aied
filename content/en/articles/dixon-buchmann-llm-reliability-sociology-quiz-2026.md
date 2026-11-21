---
title: "Are Large Language Models Reliable across Services and over (a Short) Time? An Exploratory Study in Sociology with Pedagogical Implications"
created: "2026-11-17T05:40:00-05:00"
updated: "2026-11-17T05:40:00-05:00"
type: article
authors: ["Dixon, J. C.", "Buchmann, H."]
published: "2026"
venue: "Teaching Sociology, 1–12"
source_url: https://doi.org/10.1177/0092055X261422474
foundations: [critical-thinking]
technology: [generative-ai]
assessment: [assessment-validity]
methods: [quantitative-research]
research_method: [secondary analysis]
level: [higher ed]
audience: [instructors, assessment designers]
page_kind: [evaluation]
evidence_context: educational
confidence: high
sources: ['raw/papers/dixon-buchmann-llm-reliability-sociology-quiz-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** Dixon and Buchmann (2026) put a 20-question sociology multiple-choice quiz to ChatGPT, DeepSeek and Gemini on every day of two seven-day windows, April 21–27 and June 13–19, 2025, and asked whether the services agree with each other and with themselves. They largely do: combined kappa runs from 0.91 to 1.00, and the three services gave identical answers on 263 of 279 opportunities (94%). The disagreement that exists is not random. It concentrates on two questions that were sensitive, required [[critical-thinking|higher-order thinking]], or both, which is where an instructor's own judgment matters most.

## Key Findings

- **Agreement is high, and measured properly.** Combined kappa across the three services ranges from 0.91 to 1.00 over the 14 days. Per-service values are 0.9411 (ChatGPT), 0.9669 (DeepSeek) and 0.9670 (Gemini) in April, and 1.0000, 1.0000 and 0.9408 in June.
- **The services converge on the same answer 94% of the time.** Of 279 service-level comparisons — 20 questions × 7 days × 2 intervals, less one question DeepSeek was not asked — 263 produced complete agreement.
- **Within-service stability is near perfect.** Gemini returned the same answer to each question on 138 of 140 opportunities in April (99%); ChatGPT did so on 100% of opportunities in June.
- **The two failures sit at the middle of [[bloom-taxonomy|Bloom's taxonomy]].** Question 13 asked students to identify which answer better captured Verstehen, and the services split between Simmel's interest in group size and Weber's interpretive method. The other disagreement also required application rather than recall.
- **Version transparency is the practical limit.** The services could not reliably report their own model and version, so a student's log of "ChatGPT, 24 April" does not pin down what answered.

## What the study did

The instrument was a 20-item multiple-choice quiz written for a sociology course, with items spanning difficulty and topic, including questions on sensitive material. Each service was queried through its chat interface every day of the two windows, and the authors scored answers against a key, computed combined kappa for more than two raters, and counted exact agreement. They also read the services' explanations of their answers, which is where the qualitative difference shows: on the Verstehen question, ChatGPT and Gemini explained themselves fluently and in opposite directions, each citing Weber and Simmel correctly while weighting them differently.

The study is deliberately framed as exploratory. Two windows of seven days test short-term reliability, not the reliability a semester needs, and a multiple-choice quiz is an easier target than the essay prompts sociology instructors actually set.

## Why sociology makes the test sharper

Most reliability work in this literature uses externally validated benchmarks from computer science or medicine. A sociology quiz is a harder case for a different reason: the questions are interpretive, some topics are politically sensitive, and the "right" answer depends on which theorist the course privileges. The Tiananmen example in the paper makes the point — a student who asks DeepSeek for historical context and a student who asks ChatGPT may write papers that diverge on origins, without either student doing anything dishonest.

That framing turns reliability into a teaching problem rather than a procurement one. If a course allows AI use, the assessment has to survive the possibility that two permitted tools disagree, and that the same tool disagrees with itself across a term.

## What this means for practice

- **Instructors.** ask for the answer *and* the reasoning, and grade the reasoning. On the two items where the services split, both answers were defensible in the abstract; only the course's own commitments settle it.
- **Instructors.** require students to log service, version and date, but do not treat the log as reproducible evidence. The services were unable to state their versions consistently.
- **Assessment designers.** keep higher-order and sensitive items. They are where AI answers stop being interchangeable, which makes them the items worth discussing in class rather than the items to avoid.
- **Administrators.** a single-vendor policy buys less consistency than it appears to. Cross-service agreement was high here, and the residual risk sits in the questions, not the brand.

## Limitations

Two seven-day windows, one quiz, one course's answer key, and three services as they behaved in mid-2025. Multiple-choice items are easy for LLMs relative to essays, so the 94% figure describes the easiest case. The authors could not control model version or backend changes, which is the phenomenon they are measuring. Kappa on 20 items is sensitive to the base rate, and no human comparison group was scored against the same key.

## Citation

Dixon, J. C., & Buchmann, H. (2026). [*Are Large Language Models Reliable across Services and over (a Short) Time? An Exploratory Study in Sociology with Pedagogical Implications*](https://doi.org/10.1177/0092055X261422474). Teaching Sociology, 1–12.
