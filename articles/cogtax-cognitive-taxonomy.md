---
title: "CogTax: A Four-Level Cognitive Taxonomy for Command-Line Computing Education"
created: "2026-07-02T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
pedagogy: [scaffolding]
technology: [generative-ai, llm, rag]
assessment: [formative-assessment]
methods: [benchmark]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/2607.00140.md']
confidence: medium
audience: [instructors, assessment designers]
page_kind: [framework]
---

> **Synthesis:** Proposes CogTax, a four-level cognitive taxonomy for command-line computing education that integrates Bloom's Revised Taxonomy with operational impact dimensions, achieving 89% accuracy in automated classification.

## Key Contributions

- Proposes CogTax, a four-level cognitive taxonomy for command-line computing education that integrates Bloom's Revised Taxonomy with operational impact dimensions, achieving 89% accuracy in automated classification.

## What this means for practice

- **Instructors.** Audit an existing command bank for level distribution before teaching with it, so the cognitive depth of the assessment is explicit rather than assumed.
- **Instructors.** Give students immediate feedback on the complexity level of commands they meet in documentation or online resources, and flag higher-level commands for additional [[scaffolding]].
- **Assessment designers.** Calibrate item difficulty across the four levels instead of treating all command-line tasks as comparable; the classifier agrees with expert labels on 89% of held-out commands.
- **Assessment designers.** Graduate accommodations by taxonomy level — for example, longer time extensions for higher-level commands — rather than granting one blanket extension.
- **Instructors.** Keep pedagogical oversight of whatever the classifier automates, using its level labels to sequence content and target support rather than as a substitute for instructional judgment.

## Limitations

- The evaluation rests on 585 Linux/bash commands in a single language and environment: 117 authentic exam commands held out for testing and 468 synthetic commands written by three computer science professors.
- The training partition was deliberately balanced across levels (L1 143, L2 151, L3 144, L4 147), which the authors note contrasts with the naturally skewed distributions of real educational contexts where introductory commands predominate.
- Cross-language transfer to PowerShell, SQL, or other command-line systems is untested; the authors list empirical validation of the generalization hypothesis as future work.
- The structural branch reads abstract syntax trees only, so it cannot separate commands with identical syntax but different operational meaning — the principal limitation of purely syntactic analysis.

## Connected Concepts

- [[ai-education]]
- [[assessment]]
- [[cs-education]]
- [[equity-in-ai-education]]
- [[intelligent-tutoring]]

## Connected Articles

- [[dura-llm-cs2]] — Demystify, Use, Reflect, Assess (DURA): An Experience Report on LLM Integration in CS2
- [[mixed-reality-engineering-learning]] — Visualizing Engineering Fundamentals: Design of Mixed Reality and Physical Toolkits for Effective Learning
- [[retrieval-augmented-tutoring-algorithm-kite]] — Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education
- [[learning-engagement-assistant-lea]] — Learning Engagement Assistant (LEA): Cross-Course Scalability and Classroom Evaluation of an Agentic AI Tutoring System
- [[less-deliberate-teams-llm]] — Less Deliberate in Teams: Student LLM Use Across Individual and Collaborative Work

## Citation

Manuel Alonso-Carracedo, Ruben Fernandez-Boullon, Pedro Celard, Francisco J. Rodriguez-Martinez, Lorena Otero-Cerdeira (2026). [CogTax: A Four-Level Cognitive Taxonomy for Command-Line Computing Education](https://arxiv.org/abs/2607.00140). Universidade de Vigo, submitted 30 Jun 2026
