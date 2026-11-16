---
title: "Impact of AI-assisted blended teaching on undergraduate learning in crop breeding"
created: "2026-11-16T09:07:00-05:00"
updated: "2026-11-16T09:07:00-05:00"
type: article
authors: ["Wang, M.", "Jiao, F.", "Zhang, H.", "Zhang, E.", "Chen, J."]
published: "2026-11-12"
venue: "Frontiers in Education"
source_url: https://doi.org/10.3389/feduc.2026.1886385
sources: ['raw/papers/wang-ai-assisted-blended-teaching-crop-breeding-2026.md']
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [quasi-experiment, survey]
page_kind: [evaluation]
level: [undergraduate]
audience: [instructors, curriculum designers, researchers]
discipline: [science education]
foundations: [ai-education]
pedagogy: [self-efficacy, scaffolding, student-ai-interaction]
technology: [generative-ai, llm, conversational-ai]
assessment: [summative-assessment, self-report-measures]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
---

> **Synthesis:** Wang and colleagues added ten percent AI-supported interactive learning to an undergraduate crop breeding course at Qingdao Agricultural University and compared the AI and conventional arms across two consecutive cohorts, 15 students each in 2024 and 13 each in 2025. Final [[summative-assessment|examination]] scores rose descriptively in both years (76.9 to 80.8, and 75.5 to 80.2) but never significantly, with medium effect sizes and achieved power of 0.38 and 0.24. Confidence in genetic analysis moved far more than achievement, reaching a mean of 4.27 against 2.47 in 2024, and comprehension pressure fell significantly in 2025 (U = 112.5, p = 0.02). The authors read the split as evidence that AI reduced the felt burden of a hard subject without changing what students could do at examination time.

## Key Findings

- **Examination gains were consistent and never significant.** Mean scores rose in both cohorts, from 76.9 to 80.8 in 2024 and from 75.5 to 80.2 in 2025, with medium effect sizes and no significant difference either year.
- **The null result is a power problem rather than an absence of effect.** Each arm held only 15 students in 2024 and 13 in 2025, giving achieved power of 0.38 and 0.24 to detect the medium effects observed.
- **Confidence in genetic analysis separated the groups by a wide margin.** Students in the AI arm rated their capacity to analyze genetic problems far higher than controls (d = 2.84 in 2024).
- **Comprehension pressure fell significantly in one year.** The 2025 comparison gave U = 112.5, p = 0.02, with a small effect size of 0.13; the 2024 comparison was not significant.
- **Perceived learning difficulty barely moved.** Students rated the subject about as hard either way, with no significant difference in either cohort.
- **The AI was a general-purpose model, not a tutor.** Students used DeepSeek for ten percent of instructional time to ask about concepts they had not followed in class, with mandatory cross-verification against authoritative sources.


## How the course was changed

Two cohorts of third-year [[undergraduate-education|undergraduates]] in the sixth semester of a four-year program took the same crop breeding course, split within each cohort into a conventional arm and an AI arm (15 and 15 in 2024, 13 and 13 in 2025). Both arms received the same curriculum, hours and instructor; the AI arm spent 90% of time in class and 10% in AI-supported interaction over an eight-week period. All students had completed the same prerequisites in genetics, biostatistics and molecular biology, which is why the authors describe the sample as homogeneous.

Outcomes were the final examination score, a perceived difficulty rating, a comprehension-pressure rating, [[self-efficacy|self-efficacy]] in genetic analysis, and a self-reported literature-retrieval measure. Ethics review was waived under the university's exemption rules, with written consent obtained.

## Why confidence moved and examination scores did not

The pattern is easier to interpret if the outcomes are separated by what they ask of a student. Asking a model to clarify a concept in the moment is a low-cost way to resolve confusion, and students who did so rated their own capacity to analyze genetic problems far higher. That is a real change in what the course felt like, and it is consistent with the smaller comprehension-pressure ratings.

An examination asks for the same analysis without the model present. The authors' account is that the AI was useful for horizontal information synthesis but unreliable on multi-step genetic computation, QTL analysis and advanced breeding calculations, so students spent part of their AI time verifying outputs rather than building fluency. Their second explanation is disciplinary: breeding requires field judgment — selection, hybridization, phenotypic assessment under variable conditions — that a text-based tool cannot supply, so the part of the course the examination samples is the part least helped.

The statistics behind that reading are modest on the examination and large on the self-report. Final scores moved 76.9 to 80.8 in 2024 (p = 0.54, d = 0.61) and 75.5 to 80.2 in 2025 (p = 0.16, d = 0.49); self-efficacy in genetic analysis moved from 2.47 to 4.27 (d = 2.84); comprehension pressure fell in 2025 (U = 112.5, p = 0.02, effect size 0.13) and not in 2024; perceived difficulty sat at 2.73 against 3.07 in 2024 (p = 0.74) and 2.85 against 2.92 in 2025 (p = 0.66). The small effects with wide intervals point the same way as the power analysis: the study cannot distinguish a modest true benefit from no benefit, and it reports the descriptive trend without claiming significance.

## What this means for practice

- **Instructors:** do not expect an AI study companion to raise examination performance in a computation-heavy applied course; expect it to change how students rate their own capability, and design an assessment that can tell the two apart.
- **Instructors:** verify-then-use is the operating rule. The course required students to check AI answers against authoritative sources, which is also why the model's weak multi-step calculations cost time rather than being trusted.
- **Curriculum designers:** put AI time where the failure is conceptual — clarifying terminology and connecting lecture material — and keep field and laboratory work as the place disciplinary judgment is built.
- **Researchers:** report achieved power when a class-sized trial returns a medium effect and no significance; here d = 0.61 with power 0.38 is a study that cannot decide its own question.
- **Administrators:** treat self-efficacy and comprehension-pressure ratings as outcomes in their own right, not proxies for learning. The largest movement in this study was in confidence, which no examination measures.

## Limitations

- Each arm held 15 students in 2024 and 13 in 2025, from one course at one agricultural university, and the authors attribute the size to voluntary participation and an eight-week workload that led some students to withdraw.
- The comparison is between intact class arms across two academic years, so cohort, instructor-adjacent and historical differences cannot be separated from the AI condition.
- Self-efficacy, perceived difficulty, comprehension pressure and literature retrieval were self-reported ratings with no validated instrument reported.
- The findings cover an early generation of commercial [[llm|large language models]], when models were notably weaker at multi-step genetic calculation, so the null examination result may not generalize to current models.
- Achievement was the final examination only; no delayed or transfer measure was taken.

## Citation

Wang, M., Jiao, F., Zhang, H., Zhang, E., & Chen, J. (2026). [*Impact of AI-assisted blended teaching on undergraduate learning in crop breeding*](https://doi.org/10.3389/feduc.2026.1886385). *Frontiers in Education*, 11.
