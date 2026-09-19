---
title: "Calibrating Trustworthiness: Co-Designing Metrics and Visualizations for Evaluating LLMs in Education"
created: "2026-08-05T04:33:04-04:00"
updated: "2026-09-19T11:14:39-04:00"
type: article
foundations: [learning-design]
technology: [human-in-the-loop-ai, llm, visualization, edtech-platform]
ethics: [trust-calibration]
research_method: [design-based research]
page_kind: [evaluation]
sources: ['raw/papers/2608.04006.md']
confidence: high
audience: [learning designers, edtech designers, researchers]
methods: [ai-ed-evaluation]
---

> **Synthesis:** **Calibrating [[trust|Trustworthiness]]: Co-Designing Metrics and Visualizations for Evaluating LLMs in Education** — Longitudinal co-design with learning engineers building an LLM-powered digital textbook. Co-constructed five trustworthiness metrics with 20 measures tailored to [[pedagogy|pedagogical]] use. Designed visualizations mapping trustworthiness violations onto LLM res... [[llm]] [[ai-ed-evaluation]] [[cognitive-offloading|Over-Reliance]] [[human-in-the-loop-ai]] [[learning-design]] [[edtech-platform]]

Longitudinal co-design with learning engineers building an LLM-powered digital textbook. Co-constructed five trustworthiness metrics with 20 measures tailored to pedagogical use. Designed visualizations mapping trustworthiness violations onto LLM responses. Making trustworthiness explicit increased inter-rater reliability and helped learning engineers resolve conflicting objectives and produce more consistent judgments. Proposes design guidelines for future LLM evaluation tools that enable pedagogically-aligned learning tools.

## Abstract

LLMs are reshaping educational technology, yet evaluating their responses for pedagogical alignment remains underexplored, relying heavily on the expertise of learning engineers building the technology. Through a longitudinal co-design process with learning engineers developing an LLM-powered digital textbook, we co-constructed five trustworthiness metrics comprising 20 measures tailored to pedagogical use; designed visualizations that map trustworthiness violations onto LLM responses; and evaluated how these tools help learning engineers make A/B comparisons of LLM responses.

## What this means for practice

- **Designers.** Put trustworthiness criteria in front of reviewers as they compare responses rather than after the fact: agreement rose from Krippendorff's alpha = 0.3987 without metrics visible to 0.4931 with them.
- **Designers.** Attach a concrete violation example to each measure so reviewers can see which phrase failed and why, which participants used to calibrate the pedagogical alignment of a response.
- **Designers.** Resist adding measures and encodings once the core set is in place: participants reported added cognitive overhead from juggling several metrics and diminishing returns as visual encodings increased.
- **Researchers.** Compute inter-rater reliability per interface condition, not only pooled: overall agreement was alpha = 0.4344, below the 0.67 threshold, while the per-condition split was what revealed the effect of visibility.

## Limitations

- Twelve learning engineer collaborators, all previously experienced with LLM-based educational technology and four of them also in the earlier co-design phases; no instructors or students took part.
- Only LLaMa3 was evaluated, selected to match the partner textbook framework, and the measures adapted from the machine learning literature were not validated for educational contexts.
- Pooled decision agreement reached only Krippendorff's alpha = 0.4344, below the conventional 0.67 threshold, with each participant asked to complete all 30 match-ups within one hour.
- The evaluation used a prompt tournament under a co-designed rubric rather than classroom practice, so whether the metrics improve real teaching decisions is untested.

## Connected Concepts

- [[llm]]
- [[ai-ed-evaluation]]
- [[cognitive-offloading]]
- [[human-in-the-loop-ai]]
- [[learning-design]]
- [[edtech-platform]]
- [[trust-calibration]]
- [[trust]]
- [[benchmark]]
## Connected Articles

- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking Large Language Models for Diagnosing Students' Cognitive Skills from Handwritten Math Work
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: Human-in-the-Loop Prompt Engineering for Generalizable Formative Assessment Scoring and Feedback
- [[veriforge-narrative-drafting-scaffolding-2026]] — VeriForge: Mitigating Latent Knowledge Gaps in Narrative Drafting via Mixed-Initiative Scaffolding
- [[llm-intervention-design-cs-review]] — A review of intervention designs of LLM Integration in Undergraduate Computer Science Education
- [[cong-confidence-asag-2026]] — Confidence-Aware Automatic Short Answer Grading
- [[jeon-isd-agent-bench-2026]] — ISD Agent Benchmark

## Citation

Adam Coscia, Sujata Duwal, Langdon Holmes, Scott Crossley, & Alex Endert (2026). [Calibrating Trustworthiness: Co-Designing Metrics and Visualizations for Evaluating LLMs in Education](https://arxiv.org/abs/2608.04006). (under review).
