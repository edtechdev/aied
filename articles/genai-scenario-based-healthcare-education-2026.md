---
title: "Generative AI in Scenario-Based Healthcare Education: A Systematic Review of Applications, Validation Practices, and Pedagogical Integration"
created: "2026-09-01T12:00:00-04:00"
updated: "2026-09-01T12:00:00-04:00"
type: article
sources: ["raw/papers/genai-scenario-based-healthcare-education-2026.md"]
tags: ["generative-ai", "medical-education", "problem-based-learning", "simulation", "meta-analysis-systematic-review", "human-ai-collaboration"]
confidence: medium
---

## Overview

Neto and colleagues present a PRISMA 2020 systematic review synthesising **23 empirical studies** (from 1,151 initial records across five databases) on [[generative-ai]] applications in scenario-, case-, problem-, and simulation-based learning within healthcare education. Using the [[mixed-methods-research|Mixed Methods]] Appraisal Tool (MMAT) for quality appraisal and thematic synthesis, they identify six cross-cutting themes centred on a core claim: prompt design in educational contexts functions as a form of instructional specification, encoding the cognitive targets and quality criteria implicit in expert authoring. The review argues that treating prompt design as methodology, standardising multi-stage validation, and formalising [[human-ai-collaboration]] are the prerequisites for responsible integration of GenAI into [[medical-education]] and [[simulation]].

## Key Findings

- **Only 34.8% of studies aligned generated content with established instructional frameworks** such as Bloom's Taxonomy — a gap of design culture rather than technical capability, since specifying cognitive targets within prompts is straightforward yet most implementations treated generation as a text-production rather than an instructional-design problem.
- **An equal 34.8% reported prompting strategies in sufficient detail for reproduction**, and among those that did, the highest-rated content came from iterative refinement with structured templates — supporting [[prompt-engineering]] and transparent prompt architecture as a [[research-methods-aied|methodological]] norm.
- **GPT-4 dominated implementations (44.4%), with OpenAI models underpinning roughly two-thirds** of all model instances; [[open-source]] alternatives were under-explored, creating a practical monoculture that compounds reproducibility problems.
- **Hybrid human–AI co-creation models outperformed fully automated generation**, achieving the highest expert ratings and student satisfaction, with educators positioned as collaborators throughout generation rather than final reviewers only.
- **Educational outcomes were generally positive for higher-order cognitive skills** ([[critical-thinking|critical thinking]], clinical reasoning) but inconsistent for factual knowledge acquisition, suggesting GenAI-assisted learning preferentially supports reasoning over recall.
- **Scalability was the primary adoption driver yet efficiency gains were largely unquantified** — only one study measured authoring time (a ~33% reduction) — while documented quality failures (16.67% hallucination rate in ophthalmology cases, 50% accuracy agreement in pharmacy PBL) persisted across the review period, indicating a structural rather than temporary problem.

## Implications for Practice

- **Treat [[prompt-engineering|prompt design]] as a methodological element on par with instrument selection**, disclosing system prompts, refinement steps, and evaluation criteria so that [[learning-design|instructional design]] is not rendered invisible by unreported prompting.
- **Prioritise pedagogical alignment** by specifying cognitive targets aligned with established taxonomies and structuring learning progressions explicitly before deployment, rather than treating alignment as an optional enhancement.
- **Standardise multi-stage validation** — the proposed four-stage pipeline (automated checks, clinical expert review, pedagogical alignment, and learner pilot testing) addresses failure modes that single-point validation cannot catch.
- **Formalise [[human-ai-collaboration]] and define educator roles across the workflow**, since hybrid co-creation consistently outperforms both full automation and minimally guided use.

## Connected Concepts

- [[generative-ai]]
- [[medical-education]]
- [[problem-based-learning]]
- [[simulation]]
- [[meta-analysis-systematic-review]]
- [[human-ai-collaboration]]
- [[prompt-engineering]]

## Connected Articles

- [[genai-simulate-patient-history-pbl-2026]] — GenAI simulating patient history within problem-based learning
- [[pbl-biomedical-engineering-genai-2026]] — problem-based learning with GenAI in biomedical engineering education
- [[hdr-brachytherapy-agentic-ai-simulation-2026]] — agentic AI simulation in healthcare training
- [[ai-teammate-task-distribution-medical-training-2026]] — AI teammate task distribution in medical training (human–AI collaboration)

## Citation

[Generative AI in scenario-based healthcare education: A systematic review of applications, validation practices, and pedagogical integration](https://www.sciencedirect.com/science/article/pii/S2666920X26001165) — Neto, M., Pinto, R., Reis, J., & Antão, L. (2026). *Computers and Education: Artificial Intelligence*, 11, 100654.
