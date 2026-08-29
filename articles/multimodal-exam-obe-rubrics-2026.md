---
title: "Multimodal Examination Answer Data with Expert-Designed Outcome-Based Education Rubrics for Criterion-Level Assessment"
created: "2026-08-25T09:52:34-04:00"
updated: "2026-08-28T00:00:00-04:00"
type: article
tags: [automated-assessment, assessment, educational-measurement, multimodal, higher-ed, benchmark]
research_method: [educational measurement, dataset, benchmark]
level: [higher ed]
category: [assessment]
sources: ['raw/papers/multimodal-exam-obe-rubrics-2026.md']
confidence: high
---

> **Synthesis:** Alam SM et al. (2026) present a multimodal collection of scanned examination answers paired with expert-designed Outcome-Based Education (OBE) grading metadata, intended to support [[automated-assessment|criterion-level]] assessment research. The dataset contains 485 answer submissions from 415 consenting students at four academic institutions, with eight faculty contributors supplying examination materials across nine subjects and 12 question templates. Each answer-level item links a scanned PDF to a randomized identifier, subject label, question, model answer, criterion definitions, performance-level descriptions, criterion marks, and a total mark; the 12 rubrics contain 47 criteria in total. The scans deliberately preserve realistic visual variability — handwriting, crossed-out work, equations, code, figures, and varied capture pipelines — to enable robustness and generalization studies in [[multimodal|vision-language]] document understanding and grading.

## Key Findings
1. The dataset links visual examination evidence with question context, model answers, expert-authored OBE criteria, performance descriptions, criterion marks, and total marks at the answer level — enabling criterion-level (not just holistic) assessment.
2. Nine-subject coverage with mixed visual content (handwriting, printed text, equations, tables, code, figures, sketches, diagrams) supports research on handwritten and printed document understanding, OCR, vision-language modeling, and cross-subject generalization.
3. Deliberate variation in illumination, contrast, orientation, compression, resolution, and handwriting (including crossed-out work and inserted corrections) provides the robustness testing ground typical of real [[educational-measurement|assessment]] pipelines.
4. An answer-level audit confirmed 485 unique identifiers, 485 unique PDF filenames, and agreement between criterion counts and rubric definitions — ensuring data integrity for [[benchmark]] use.

## Discussion
This is a data-article contribution to the emerging field of automated grading and criterion-level assessment. By pairing raw visual evidence with expert-designed OBE rubrics, it provides the kind of ground-truth-labeled multimodal corpus needed to benchmark [[automated-assessment|AI-based evaluation]] fairly — addressing a recurring weakness in the literature where grading models are trained and evaluated on narrowly homogeneous data. The explicit OBE structure ties the technical corpus to contemporary [[higher-ed|higher education]] assessment practice, and the emphasis on realistic visual degradation supports claims about robustness that lab-clean datasets cannot. For the wiki, it connects the [[assessment]] and [[educational-measurement]] agendas with the multimodal/vision-language frontier of automated evaluation.

## Connected Concepts
- [[automated-assessment]]
- [[assessment]]
- [[educational-measurement]]
- [[multimodal]]
- [[higher-ed]]
- [[benchmark]]
- [[learning-analytics]]
- [[ai-education|deep learning]]

## Connected Articles
- [[eeg-familiarity-automated-assessment-2026]] — Automating Learner Assessment with EEG
- [[ai-grading-handwritten-physics-2026]] — AI Grading of Handwritten Physics
- [[harmogen-ai-assessment-rubric-generation]] — HarmOGEN AI Assessment Rubric Generation

## Citation

Alam, J. S., Syfullah, M. K., Ahmed, S., Mou, M. A., Rahman, A. K. Z. R., Rahman, A. K. M. M., & Ali, M. S. (2026). [*Multimodal Examination Answer Data with Expert-Designed Outcome-Based Education Rubrics for Criterion-Level Assessment*](https://arxiv.org/abs/2608.22346).
