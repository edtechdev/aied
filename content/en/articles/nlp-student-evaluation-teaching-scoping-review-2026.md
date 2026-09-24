---
title: "From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026"
created: "2026-09-24T09:35:12-04:00"
updated: "2026-09-24T09:35:12-04:00"
type: article
published: "2026-08-23"
sources: ['raw/papers/nlp-student-evaluation-teaching-scoping-review-2026.md']
confidence: high
page_kind: [synthesis]
research_method: [literature review]
discipline: [cs education, learning sciences]
level: [higher ed]
audience: [researchers, administrators, institutions, assessment professionals]
foundations: [interpreting-and-applying-aied-research, limitations-in-aied-research]
pedagogy: [student-experience]
technology: [educational-nlp, llm, machine-learning, learning-analytics]
assessment: [assessment-validity, automated-assessment, educational-measurement, feedback]
methods: [meta-analysis-systematic-review, research-methods-aied]
institutions: [governance]
ethics: [bias-mitigation, privacy, ethics, trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This PRISMA-ScR [[meta-analysis-systematic-review|scoping review]] maps 421 studies of [[educational-nlp|natural language processing]] applied to open-ended teaching-evaluation comments from 2015 to 2026 (2026 partial), scoring each study on a technical axis and four value dimensions. Its sharpest result is the **actionability discontinuity**: 258 of 421 studies (61.3%) demonstrated a usable output, but only 49 (11.6%) reached evaluation by an intended user — a 49.7-percentage-point drop. [[affective-computing|Sentiment analysis]] remains the modal task (300/421), diagnostic and generative analysis is a substantial minority (D4–D5, 28.2% of resolved cases), and a formal fairness metric appears in just 8 studies (1.9%). The authors read the map as coexistence rather than maturation: [[llm|LLM]] adoption broadened the technical repertoire without proportional gains in [[assessment-validity|validation]] or [[feedback|actionable feedback]].

## Key Findings
1. **Demonstration vastly outruns use.** Studies reaching a demonstrated output or stronger (A2+) total 258/421 (61.3%); those reaching intended-user evaluation or stronger (A3+) total 49/421 (11.6%).
2. **Sentiment classification remains the modal task.** Sentiment analysis appears in 300/421 studies (71.3%), followed by text classification (98), aspect-based sentiment analysis (73), and topic modeling (70) — task concentration persists alongside diversification.
3. **Analytical depth is a minority.** Among 411 studies with resolved depth, overall sentiment (136, 33.1%) and aspect-level evaluation (138, 33.6%) dominate; explanatory synthesis or generated recommendations (D4–D5) total 116/411 (28.2%).
4. **Newer technology yields neither depth nor actionability.** The LLM/[[generative-ai]] family shows the highest observed D4–D5 share (52.9% on family n = 34) and Deep Learning the lowest (8.3%), but the relation is temporally confounded.
5. **Validation evidence stays thin.** Annotation procedure appears in 241/421 studies (57.2%), yet external validation appears in 33/421 (7.8%), inter-annotator agreement in 54/421 (12.8%), and code availability in 43/421 (10.2%).
6. **Responsible-use reporting is heterogeneous.** Study limitations appear in 297/421 studies (70.5%) and [[privacy|privacy protections]] in 178/421 (42.3%), but a formal fairness metric in only 8/421 (1.9%) and institutional-use risk in 18/421.
7. **Context reporting is incomplete.** Country was unresolved in 221/421 studies; among resolved bases English is modal but not a majority (89/195, 45.6%), Chinese is 43/195 (22.1%), and single-institution scopes dominate (232/284, 81.7%).

## Technological expansion without substitution

The corpus traces a decade of methodological broadening: traditional lexicons and rule-based pipelines and classical [[machine-learning|machine learning]] appear from 2015, deep learning from 2016, transformers from 2019, and [[llm|large language models]] from 2023. [[parents-and-families|Families]] accumulate and coexist rather than replace one another. The validated taxonomy identified 18 tasks and 828 task assignments across 412 studies; 79 of the 90 possible technology × task combinations were observed, and sentiment analysis spans all five families. The empirical base concentrates even as methods diversify: among resolved scopes, 232 of 284 studies (81.7%) analyze a single institution, and only 93 of 421 studies (22.1%) resolve country, scope, level, and discipline jointly.

## The actionability discontinuity

Actionability was coded on a six-level scale: asserted usefulness (A1), demonstration through interpretable examples or outputs (A2), evaluation by instructors or other intended users (A3), use or piloting in an authentic setting (A4), and measured impact on decisions, practices, or outcomes (A5). Mutually exclusive counts are A0 62/421 (14.7%), A1 101/421 (24.0%), A2 209/421 (49.6%), A3 7/421 (1.7%), A4 25/421 (5.9%), and A5 17/421 (4.0%). A2 is modal and the median; A1 and A2 together hold 310/421 (73.6%). A3+ stays a minority in every technological family and every resolved depth category. The 49.7-point A2+ to A3+ drop is the boundary the review treats as its load-bearing result: the distance between "the model works" and "the feedback changes teaching."

## Depth and rigor do not follow model sophistication

Analytical depth was coded D1 (overall polarity) through D5 (generated recommendations or pedagogically oriented feedback). D1 and D3 remain the two largest classes, and the D4–D5 share over complete periods rises from 25.6% (2015–2018) to 32.5% (2024–2025) without being monotonic. Explicit [[pedagogy|pedagogical]] constructs appear in 47.3% of studies, named external frameworks in only 5.5%. On the [[educational-measurement|measurement]] side, classification metrics dominate: accuracy in 237/421 studies (56.3%), precision in 196/421 (46.6%). Reporting changes selectively, not uniformly — annotation procedure appears in 410/421 studies (97.4%), while external validation (33/421), inter-annotator agreement (54/421), and code availability (43/421) stay scarce.

## Responsible use does not scale with consequence

RQ5 coded 20 constructs of responsible or trustworthy use. Explicit evidence ranges from study limitations at 297/421 (70.5%) and privacy protections at 178/421 (42.3%) down to a formal fairness metric at 8/421 (1.9%). Institutional-use risk is distinct and sparse (18/421; 6 uncertain), not absorbed by [[ethics|ethical implications]] (91/421, 21.6%) or consent reporting (52/421, 12.4%). Crossed with actionability, the A3+ versus A0–A2 contrast is dimension-specific: higher on 18 of 20 constructs and lower on 2. If studies closer to deployment show no more evidence of [[bias-mitigation|bias]], privacy, and oversight evaluation, the authors argue, the field risks automating high-consequence decisions about teaching careers.

## What this means for practice
- **Instructors.** Treat a sentiment dashboard over your course comments as a signal to read, not a verdict; these outputs rarely reach evaluation by the people meant to act on them.
- **Administrators.** Do not read sparse institutional-use risk reporting (18/421 studies) as evidence that deployment risk is absent; it measures reporting visibility, not practice.
- **Researchers.** Report country, institutional scope, comment language, and explicit denominators; these were unresolved across most of the corpus and decide what generalizes.
- **Assessment professionals.** Pair any generated recommendation with intended-user evaluation before it informs a personnel decision — the A2+ to A3+ gap is that missing step.

## Limitations
- Of 1484 records retained for full-text retrieval, 527 (35.5%) had no retrieved PDF; non-retrieval over-represents closed access and 2023-onward work, leaving the LLM/Generative-AI family (n = 34) the cell most exposed.
- Automated consensus screening missed 4 of 38 gold-standard includes (about 10.5%) in a 60-record sample; human–human agreement on the 51-record overlap was κ = 0.11 (PABAK = 0.41).
- 2026 is a partial year and not a trend endpoint; English-only search strings constrain non-English work.
- The map is descriptive: no dimension progresses monotonically, no contrast is causal, and empty cells record unobserved combinations.

## Connected Concepts
- [[educational-nlp]]
- [[feedback]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[learning-analytics]]
- [[llm]]
- [[machine-learning]]
- [[bias-mitigation]]
- [[privacy]]
- [[human-in-the-loop-ai]]
- [[governance]]
- [[higher-ed]]
- [[limitations-in-aied-research]]

## Connected Articles
- [[llm-sentiment-analysis-education-research]] — LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments
- [[llm-formative-feedback-systematic-review-2026]] — LLM-generated formative feedback in education: A qualitative systematic literature review
- [[luo-eaton-ai-student-feedback-ethics-2026]] — Is It Ethical for Teachers to Use AI for Student Feedback?
- [[ethical-use-ai-engineering-education-review-2026]] — Ethical Use of Artificial Intelligence in Engineering Education: A Systematic Review
- [[agentic-ai-education-scoping-review]] — A scoping review of generative AI-powered agentic AI in education: Research landscape, agentic capabilities
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]] — Can AI Evaluate Assessment? A Study of Large Language Model Meta-Assessment Performance
- [[human-vs-llm-ordered-coding]] — Comparing human and LLM ordered coding of qualitative data: How coding differences cascade through temporal analysis

## Citation
Eicher, J., & da Silva, R. (2026). [*From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026*](https://arxiv.org/abs/2609.27939). arXiv preprint.