---
title: "Generative AI in Scenario-Based Healthcare Education: A Systematic Review of Applications, Validation Practices, and Pedagogical Integration"
created: "2026-09-01T12:00:00-04:00"
updated: "2026-09-19T08:23:28-04:00"
type: article
sources: ["raw/papers/genai-scenario-based-healthcare-education-2026.md"]
foundations: [human-ai-collaboration]
pedagogy: [problem-based-learning]
technology: [generative-ai, simulation]
confidence: medium
research_method: [systematic review, thematic analysis]
discipline: [medical education]
audience: [medical educators, researchers, curriculum designers]
page_kind: [synthesis]
methods: [meta-analysis-systematic-review]
---

> **Synthesis:** Neto and colleagues present a PRISMA 2020 systematic review synthesizing **23 empirical studies** (from 1,151 initial records across five databases) on [[generative-ai]] applications in scenario-, case-, problem-, and simulation-based learning within healthcare education. Using the [[mixed-methods-research|Mixed Methods]] Appraisal Tool (MMAT) for quality appraisal and thematic synthesis, they identify six cross-cutting themes centered on a core claim: prompt design in educational contexts functions as a form of instructional specification, encoding the cognitive targets and quality criteria implicit in expert authoring. The review argues that treating prompt design as methodology, standardizing multi-stage validation, and formalizing [[human-ai-collaboration]] are the prerequisites for responsible integration of GenAI into [[medical-education]] and [[simulation]].

## Key Findings

- **Only 34.8% of studies aligned generated content with established instructional frameworks** such as Bloom's Taxonomy — a gap of design culture rather than technical capability, since specifying cognitive targets within prompts is straightforward yet most implementations treated generation as a text-production rather than an instructional-design problem.
- **An equal 34.8% reported prompting strategies in sufficient detail for reproduction**, and among those that did, the highest-rated content came from iterative refinement with structured templates — supporting [[prompt-engineering]] and transparent prompt architecture as a [[research-methods-aied|methodological]] norm.
- **GPT-4 dominated implementations (44.4%), with OpenAI models underpinning roughly two-thirds** of all model instances; [[open-source]] alternatives were under-explored, creating a practical monoculture that compounds reproducibility problems.
- **Hybrid human–AI co-creation models outperformed fully automated generation**, achieving the highest expert ratings and student satisfaction, with educators positioned as collaborators throughout generation rather than final reviewers only.
- **Educational outcomes were generally positive for higher-order cognitive skills** ([[critical-thinking|critical thinking]], clinical reasoning) but inconsistent for factual knowledge acquisition, suggesting GenAI-assisted learning preferentially supports reasoning over recall.
- **Scalability was the primary adoption driver yet efficiency gains were largely unquantified** — only one study measured authoring time (a ~33% reduction) — while documented quality failures (16.67% hallucination rate in ophthalmology cases, 50% accuracy agreement in pharmacy PBL) persisted across the review period, indicating a structural rather than temporary problem.

## What this means for practice

- **Curriculum designers.** Treat [[prompt-engineering|prompt design]] as a methodological element on par with instrument selection, disclosing system prompts, refinement steps, and evaluation criteria so that [[learning-design|instructional design]] is not rendered invisible by unreported prompting.
- **Curriculum designers.** Specify cognitive targets against an established taxonomy and structure learning progressions before deployment — only 34.8% of the 23 reviewed studies aligned generated content with instructional frameworks.
- **Medical educators.** Standardize multi-stage validation through the proposed four-stage pipeline of automated checks, clinical expert review, pedagogical alignment, and learner pilot testing, because single-point validation cannot catch the failure modes the review documents.
- **Medical educators.** Keep educators inside the generation loop rather than at the final review stage: hybrid human–AI co-creation models achieved the highest expert ratings and student satisfaction.
- **Researchers.** Report authoring time and cost alongside content quality, since scalability was the primary adoption driver yet only one study quantified the efficiency gain (a ~33% reduction).

## Limitations

- The evidence base is 23 empirical studies from 1151 initial records across five databases searched on 9 November 2025, restricted to peer-reviewed work published from January 2023, with 67 duplicates removed and 1014 records excluded at title and abstract screening.
- Gray literature was excluded and five studies were dropped because full texts were inaccessible, which the authors note may underrepresent emerging findings or null results.
- The inclusion criteria restricted designs to quantitative and mixed-methods studies, excluding purely qualitative work that the authors acknowledge captures complementary process-oriented implementation evidence.
- The corpus is temporally and geographically thin: 19 of the 23 studies appeared in 2025 and Asia–Pacific institutions account for 56.5% (n = 13), following Europe (17.4%, n = 4), North Africa and the Middle East (13.0%, n = 3), and North America (8.7%, n = 2), and one included result (Cohen's d = 3.14 for long-term retention) is flagged by the authors as a likely methodological artifact.

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
