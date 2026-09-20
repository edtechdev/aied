---
title: Little Impact of ChatGPT Availability on High School Student Test Score Performance
created: "2026-05-14T04:33:04-04:00"
updated: "2026-09-16T15:48:59-04:00"
type: article
foundations: [academic-integrity, ai-education, cognitive-offloading]
technology: [generative-ai, rag]
stakeholders: [student-experience]
research_method: [experiment]
audience: [learners]
level: [k 12]

sources: ['raw/papers/2605.08812.md']
confidence: medium
page_kind: [evaluation]
---

> **Synthesis:** This paper uses a clever identification strategy: measure the **seasonal drop in ChatGPT activity during non-school summer months** (2023 and 2024). Areas with larger summer dropoffs have heavier school-related AI use. The author then examines whether higher AI-use areas show different test score trends.

## Research Design


## Key Finding: Null Result

**No meaningful impact of ChatGPT availability on high school test score averages in either direction.** Whether students use AI to cheat, to learn, or both, the aggregate effect on standardized test performance is negligible — at least in the short term and as AI is actually used.

## Interpretation

The null result has two non-exclusive interpretations: (1) AI-assisted cheating does not harm test performance in aggregate, or (2) negative effects of [[ai-misuse-learning-harm|AI misuse]] are offset by positive uses of AI as a learning aid. Either way, this challenges both utopian and dystopian narratives about AI in classrooms. It aligns with the [[genai-performance-vs-learning]] distinction — performance boosts from AI may not translate to test score improvements. It connects to [[cognitive-offloading|Over-Reliance]] [[research-methods-aied|research]] showing that AI assistance can produce apparent competence without underlying understanding.

## Methodological Contribution

The seasonal variation identification strategy is innovative for causal inference in education technology research, where [[rct|RCTs]] are often infeasible at scale.

## What this means for practice

- **Learners.** Judge AI by what you can do without it: the study's estimates of ChatGPT's effect on high school test score averages are effectively zero in either direction, so clearing a submission with a tool is not evidence that the work taught you anything.
- **Instructors.** Keep an unassisted step inside [[assessment]] tasks that use AI. The design compares areas with heavier school-related ChatGPT use against lighter ones and still returns a null result, so the classroom decision is about how the tool is used, not whether it is present.
- **Instructors.** Do not write policy on the assumption that availability alone moves scores. Effects are small across grades, subjects, and the upper, lower and middle of the score distribution, and the estimates for grades 7 and 8 — where some students plausibly use AI — sit at about -.015 of a standard deviation.
- **Researchers.** Borrow the identification strategy where [[rct|randomization]] is infeasible: the seasonal dropoff in ChatGPT activity during the summer months of 2023 and 2024 identifies areas of heavy educational AI use, and the paper pairs it with a placebo test on grades 3-8.

## Limitations

- **The usage measure is a proxy.** State-level traffic data comes from Similarweb, which offers no school- or metro-level traffic data and covers only 15 states, mostly larger ones; heavy AI use is inferred from relative activity rather than measured per student.
- **The outcomes are aggregate.** Test scores are school- and state-level averages — 11,591 schools in the SEDA data and an N of 81,087 in the state-level analysis — so an effect concentrated among the students who actually use AI could be diluted below detection.
- **Precision has a floor.** Standard errors of 0.017-0.020 in most analyses would only produce a significant result for a test score change of .04 or greater, roughly 8% of a standard deviation.
- **A key assumption is untestable here.** The study cannot adjust for the relationship between student characteristics and COVID-19 recovery rates, and substitutes a placebo test among students in grades 3-8 who are probably too young to use ChatGPT in their schoolwork.

## Connected Concepts

- [[cognitive-offloading]]
- [[generative-ai]]
- [[academic-integrity]]
- [[k-12]]
- [[assessment]]
- [[learning-gains]]
- [[ai-misuse-learning-harm]]
- [[reducing-ai-misuse]]
## Connected Articles

- [[genai-performance-vs-learning]]
- [[ai-making-us-stupid]]
## Citation

Huntington-Klein, N. (2026). [Little impact of ChatGPT availability on high school student test score performance](https://arxiv.org/abs/2605.08812).
