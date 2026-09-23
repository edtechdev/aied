---
title: "Perceived usefulness and intention to use large language model-generated feedback across three educational levels: a user-centred study in programming"
created: "2026-09-23T12:30:00-04:00"
updated: "2026-09-23T13:15:00-04:00"
type: article
foundations: [human-ai-collaboration]
pedagogy: [motivation, student-experience]
technology: [generative-ai, llm, technology-acceptance-model]
assessment: [feedback, formative-assessment, ai-feedback-quality]
methods: [quantitative-research, usability-research]
discipline: [cs education]
level: [secondary, higher ed]
audience: [instructors, instructional designers, researchers]
research_method: [survey]
page_kind: [evaluation]
sources: ['raw/papers/mendonca-llm-feedback-perceived-usefulness-programming-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]

---

> **Synthesis:** Mendonça, Quintal, Figueiredo, and Mendonça (2026) report a user-centered evaluation of [[generative-ai|generative AI]] feedback on programming assignments, asking whether students find automated feedback useful and worth using. Using one instrument across secondary, short-cycle higher technical (CTeSP), and undergraduate programming, 144 students rated 893 response-level feedback instances on five dimensions, and 140 rated 237 consolidated reports on six. Ratings were favorable throughout: student-level means of 4.24 to 4.43 for individual answers and 4.11 to 4.38 for reports. Clarity and perceived accuracy drew the highest ratings, while actionability and usefulness drew the lowest, and cognitive load was rated lowest at the report level. Only perceived accuracy differed across contexts, rated lower in CTeSP. Perceived usefulness was most strongly associated with actionability and perceived accuracy (R-squared = 0.76), and intention to use with motivation and personalization (R-squared = 0.53). The authors read these associations as support for human-centered design that preserves student judgment and instructor oversight.

## Key Findings

- **Students rated the generative AI feedback favourably at both layers**: response-level means of 4.24 to 4.43 across 893 answers, report-level means of 4.11 to 4.38 across 237 reports.
- **The response-level profile was strongest on clarity and perceived accuracy and weakest on actionability and usefulness**, though differences among dimensions were small (generalized eta-squared = 0.016).
- **Cognitive load was rated lowest and most dispersed at the report level** (M = 4.11, SD = 0.88), while relevance, intention to use, and satisfaction were highest.
- **Only perceived accuracy differed across the three contexts**, rated lower in CTeSP (M = 4.20) than in secondary (M = 4.63) or undergraduate education (M = 4.42).
- **Perceived usefulness was associated mainly with actionability and perceived accuracy**, which carried the largest relative weights (32.6% and 29.0%) in a model explaining 76% of the variance.
- **Intention to use was associated mainly with motivation and personalization** (31.9% and 23.2% of relative weight), in a report-level model explaining 53% of the variance.

## Evaluating Two Layers of Feedback

Feedback was produced by the IntroEduAI platform, which scored each submission against an instructor-written, criterion-referenced rubric and returned two layers of feedback. The first addressed each individual answer across clarity, specificity, accuracy, actionability, and usefulness. The second was a consolidated report summarizing strengths, weaknesses, and suggestions, rated on satisfaction, relevance, personalization, cognitive load, intention to use, and motivation. Every item captured perception on a five-point scale, so accuracy means perceived accuracy rather than verified correctness. Individual answers were evaluated with GPT-4.1-2025-04-14, with course materials supplied through retrieval-augmented generation for text questions, while reports used a different configuration. Domain, task, and instrument were held constant while level varied, so [[formative-assessment|formative feedback]] perceptions could be compared across levels rather than confounded with discipline.

## What Students Reported

Ratings were favorable across every dimension. Response-level student means ranged from 4.24 to 4.43, with clarity (4.43) and perceived accuracy (4.40) highest and actionability and usefulness (both 4.24) lowest; the ordering was reliable but small (Kendall's W = 0.064). Report-level means ranged from 4.11 to 4.38, with relevance (4.38), intention to use (4.35), and satisfaction (4.34) highest, and cognitive load (4.11) lowest and most dispersed (SD = 0.88). Internal consistency was acceptable for both scales (Cronbach's alpha 0.85 and 0.87). Ratings clustered at the top of the scale, with 72.2% to 86.4% of students averaging at least 4, restricting discrimination. The authors treat the ordering descriptively, noting that the weakest dimension, actionability, is also the one [[feedback]] research treats as hardest to provide.

## Consistency Across Contexts

Across the three contexts, only perceived accuracy at the response level differed after correction for multiple comparisons (epsilon-squared = 0.076). Accuracy was rated higher in secondary education (M = 4.63) than in CTeSP (M = 4.20), and higher in undergraduate education (M = 4.42) than in CTeSP, while secondary and undergraduate did not differ. The difference remained after adjustment for gender. No report-level dimension differed after correction. The authors state that these non-significant results do not establish equivalence: the 27-student secondary group limits precision, no equivalence margin was specified in advance, and the contexts differ jointly in curricular unit, cohort, institution, programming language, and gender balance. The detected difference is therefore tied to these contexts, not to educational level.

## Correlates of Usefulness and Intention to Use

Regressing perceived usefulness on the remaining response-level dimensions explained 76% of the variance. Actionability (relative weight 32.6%) and perceived accuracy (29.0%) carried the largest shares, and only their standardized coefficients had bootstrap intervals excluding zero. Clarity correlated with usefulness bivariately (r = 0.68) but its unique coefficient was near zero, indicating shared variance with the other dimensions. At the report level, intention to use was regressed on the other five dimensions and the model explained 53% of the variance; motivation (31.9%) and personalization (23.2%) carried the largest relative weights and were the only coefficients whose intervals excluded zero. The authors read this as [[technology-acceptance-model|technology acceptance]] applied to feedback, where usefulness tracks whether feedback helps a learner act.

## What this means for practice
- Favorable ratings across three contexts suggest that LLM-generated feedback can be a credible part of [[formative-assessment]] in programming, but they describe perception rather than effect.
- Because [[feedback]] counts when students act on it, the practical priority is actionability: feedback should point to a concrete next step rather than merely describe a fault, since actionability was the strongest correlate of perceived usefulness despite being rated lowest.
- Perceived accuracy carried almost as much weight, which fits a setting where students must check claims against their own understanding, so designers should make the basis of a judgment visible and keep the student's judgment central.
- For consolidated reports, motivation and personalization track intention to use, so tone and tailoring matter as much as coverage.
- Instructors should treat these associations as design guidance to test, not as proof that raising actionability raises usefulness, and should retain oversight rather than reading high ratings as a case for unsupervised deployment.

## Limitations
- Several boundaries limit what these ratings can support.
- Students evaluated only the LLM-generated feedback, with no comparison against instructor feedback, another system, or no feedback, so favorable ratings cannot establish that this feedback would be preferred over another source.
- Data were collected once and no measures of revision, performance, or learning were taken, so the study cannot show whether the feedback improved students' work.
- Students rated perceived accuracy, while the objective correctness of the feedback was not independently assessed, and student agency and equity of outcomes were not measured. Context comparisons are observational, the contexts differ in several ways at once, and the 27-student secondary group limits precision, so the non-significant results are not evidence of equivalence. Ratings were voluntary and response rates are unknown, so selective non-response among less favorable students cannot be ruled out. Ratings clustered at the top of the scale, each dimension rested on a single item, the usefulness and intention associations are correlational and open to common method variance, and the two feedback layers used different models, so layer and model varied together.

## Connected Concepts

- [[formative-assessment]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[technology-acceptance-model]]
- [[generative-ai]]
- [[human-ai-collaboration]]
- [[student-ai-interaction]]

## Connected Articles

- [[ai-generated-feedback-higher-ed]]: AI and feedback in university education
- [[ai-feedback-enactment-workflow-2026]]: Making AI-generated feedback matter
- [[ai-supported-automated-programming-assessment-2026]]: AI-supported automated programming assessment

## Citation

Mendonça, P. C., Quintal, F., Figueiredo, M., & Mendonça, F. (2026). [*Perceived usefulness and intention to use large language model-generated feedback across three educational levels: a user-centred study in programming*](https://doi.org/10.3389/feduc.2026.1934069).