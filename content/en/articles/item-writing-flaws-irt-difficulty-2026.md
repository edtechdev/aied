---
title: "The Impact of Item-Writing Flaws on Difficulty and Discrimination in Item Response Theory"
created: "2026-09-01T10:00:00-04:00"
updated: "2026-09-19T08:23:28-04:00"
type: article
sources: ["raw/papers/item-writing-flaws-irt-difficulty-2026.md"]
technology: [llm]
assessment: [assessment-validity, automated-assessment, educational-measurement, item-response-theory]
confidence: medium
discipline: [stem education]
audience: [assessment professionals, assessment designers, researchers]
page_kind: [evaluation]
---

> **Synthesis:** Schmucker and Moore examine whether **Item-Writing Flaw (IWF) rubrics** — a domain-general, textual approach to evaluating test items without student data — have predictive validity for empirical Item Response Theory (IRT) parameters. Traditional validation relies on resource-intensive pilot testing; IWF rubrics offer a scalable pre-deployment alternative. The study analyzes **7,126 multiple-choice questions across [[stem-education|STEM]] subjects** (physical science, [[math-education|mathematics]], life/earth sciences), using an automated approach (including LLM-based coding) to annotate items.

## Key Findings

- **Item-Writing Flaw rubrics show predictive validity** for empirical IRT parameters — the presence of flaws relates to item difficulty and discrimination.
- The IWF approach offers a **scalable, pre-deployment evaluation** that does not require student data, complementing or partially substituting pilot testing.
- The method is **applied across STEM domains**, supporting its domain-general utility.
- Automated (LLM-assisted) coding enables annotation of large item banks (7,126 questions).

## What this means for practice

- **Assessment designers.** Screen items with [[item-response-theory|IWF]] rubrics before pilot testing: flaw counts associated significantly with IRT difficulty and discrimination, and the IWF-based classifier flagged low-difficulty items at 0.801 precision and 0.472 recall at a 0.62 threshold.
- **Assessment designers.** Prioritize the three structural flaws with the strongest negative associations across both parameters — "more than one correct," "longest option correct," and "all of the above" — since these cue guessing without engaging the intended knowledge.
- **Assessment professionals.** Keep student data in the workflow: IWF rubrics are only moderate predictors of IRT parameters and cannot replace data-dependent validation.
- **Assessment professionals.** Customize screening thresholds by subject area, because predictive strength varied across life/earth science, physical science, and mathematics.
- **Researchers.** Retain human oversight in final item validation while using automated IWF annotation as the scalable pre-screening layer.

## Limitations

- All 7126 multiple-choice questions come from a single large-scale online tutoring platform and cover US middle and high school life/earth sciences, physical sciences, and mathematics, which the authors state may limit generalizability across educational contexts.
- The analysis kept only concepts with enough data to support robust IRT parameter estimation, which may underrepresent concepts that are less commonly taught, despite the underlying response data covering 448,000 students.
- Flaw annotation was automated rather than human-applied: agreement was estimated on a stratified sample of 120 items (40 per domain), 97.6% across 2280 criterion-level classifications, and the authors describe this as a supplementary estimate of label noise specific to the dataset rather than independent per-criterion validation.
- Observed associations may partly reflect general textual properties such as length, readability, or complexity, and no model trained to predict high-difficulty items outperformed a majority-class baseline, which the authors attribute to class imbalance and to IWF criteria not assessing domain-specific knowledge.

## Connected Concepts

- [[item-response-theory]]
- [[assessment-validity]]
- [[llm]]

## Connected Articles

- [[llm-item-difficulty-prediction]] — LLM-based item difficulty prediction
- [[gpt-item-generation-l2-listening-2026]] — GPT item generation for L2 listening (Aryadoust & Wong 2026)
- [[multimodal-item-parameter-estimation-2026]] — multimodal item parameter estimation

## Citation

[The impact of item-writing flaws on difficulty and discrimination in item response theory](https://www.sciencedirect.com/science/article/pii/S2666920X26000664) — Schmucker, R., & Moore, S. (2026). *Computers and Education: Artificial Intelligence*, 11, 100632.
