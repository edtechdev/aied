---
title: "PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews"
created: "2026-09-14T09:12:54-04:00"
updated: "2026-09-16T14:48:35-04:00"
type: article
foundations: [limitations-in-aied-research]
technology: [human-in-the-loop-ai, llm, prompt-engineering, rag]
assessment: [meta-analysis-systematic-review, research-methods-aied]
ethics: [ai-use-disclosure]
connected_faqs: [reporting-interpreting-aied-research]
sources: ['raw/papers/prisma-llm-ai-assisted-systematic-reviews-2026.md']
confidence: high
research_method: [bibliometric, secondary analysis]
audience: [researchers]
page_kind: [framework]
---

> **Synthesis:** Zabaleta and Lin analyze SciLitBench, a corpus of 888 review-automation papers carrying 14,726 annotation items, to show that [[meta-analysis-systematic-review|systematic review]] automation has shifted toward [[llm|LLM]]- and software-facing workflows while the information needed to audit those workflows is reported unevenly. Their central finding is a persistent accountability gap: since 2023, 38.0% of software/product papers reported no evaluation at all, compared with 9.3% of LLM papers, and [[generative-ai|generative AI]] adoption in [[biology-education|life sciences]] and [[medical-education|medicine]] approached 60% in recent months. A second finding is that favorable assessments and unmet reliability requirements routinely coexist — 52% of the 118 positive-only LLM papers still reported at least one concern that the workflow fell below the bar required for its intended role. From these patterns the authors derive PRISMA-LLM, a three-layer framework that separates implementation disclosure from consequence-sensitive evaluation, and treat its five levels as disclosure tiers rather than risk tiers — a position that speaks directly to [[ai-use-disclosure|AI use disclosure]], [[human-in-the-loop-ai|human-in-the-loop AI]], and the wider problem of [[limitations-in-aied-research|reporting limitations]] in AI-assisted research.

## Key Findings

1. Publication volume in review automation rose sharply after ChatGPT's release at the end of 2022; a log-linear fit to positive monthly counts from January 2020 through June 2025 implies an estimated 4.7% monthly growth rate.
2. The corpus is concentrated in life sciences and medicine, which supplies 548 of 888 papers (61.7%), followed by engineering and technology at 140 (15.8%) and social sciences and management at 115 (13.0%); natural sciences contributes 21 (2.4%) and arts and [[humanities-education|humanities]] only 2 (0.2%).
3. Reporting richness — a descriptive 0–15 index over five evaluation and limitation dimensions — averaged 3.3 for software/product papers since 2023, against 6.3 for LLM papers and 6.0 for traditional, deep-learning, and BERT-oriented work.
4. Among papers published from 2023 onward, software/product-only papers had the lowest mean reporting richness at 2.6 and 44.4% reported no evaluation, while engineered or structured LLM papers averaged 8.4 (1.7% with no evaluation) and retrieval, adapted, or agentic LLM papers averaged 9.1 with none annotated as reporting no evaluation.
5. Across the LLM method-complexity split in the latest rolling window ending June 2025, prompt-only LLM use was 34.0%, software/product-only 29.2%, engineered or structured LLM 14.2%, retrieval/adapted/agentic LLM 8.5%, neural non-LLM 7.5%, and rule or traditional ML 6.6%.
6. Model access remains overwhelmingly proprietary: 84.1% of LLM usage relied on proprietary or hosted systems, 11.0% was mixed, and only 4.9% was open-weight, with domain differences that were not statistically significant.
7. Among 118 LLM papers with positive-only overall evaluations, 52% reported at least one unmet high-bar concern; the share rose to 67% among 57 positive-with-caveats papers and 79% among 38 mixed/negative papers, while only 14% of the 35 descriptive or unclear papers did.
8. Limitation profiles differ by method: 54% of LLM papers reported an unmet high bar, 40% reported parameter or prompt sensitivity, 32% reported limited validation, and 45% reported small or narrow data, versus 26%, 15%, 24%, and 34% for software/product papers.

## Growth, Method Shift, and the Accountability Gap

SciLitBench provides a longitudinal view of how computational systems entered review practice. Publication counts were low and relatively flat for most of the corpus history, began rising around 2018–2019, and steepened after the public release of ChatGPT; the log-linear fit over January 2020 to June 2025 corresponds to the 4.7% monthly growth rate. The concentration in life sciences and medicine fits the longer history of [[meta-analysis-systematic-review|evidence synthesis]], where biomedical research generated the largest such literature.

Methodologically, the field moved from custom model-building, BERT, deep learning, traditional [[machine-learning|machine learning]], and rule-based systems toward [[llm|LLM]] and software products that use LLMs under the hood, such as Elicit and DistillerSR. Adoption also spread into review stages where errors can change the evidence base. The authors group stages into discovery/navigation, screening/selection (title-and-abstract screening, full-text screening, ranking), and evidence construction (data extraction, risk-of-bias or quality assessment, claim verification). In recent records, screening/selection and evidence construction account for a substantial share alongside discovery/navigation — automated outputs increasingly determine which studies are retained and what evidence is extracted from them. Domain-level LLM adoption in life sciences and medicine approached 60% in recent months, and mixed-domain records reached 70–80% in several recent windows.

Against that adoption curve, reporting has not kept pace uniformly. Software/product papers remain common but carry less paper-level evaluation and limitation detail, and the gap survives stratification by review stage: in screening and selection, software/product papers averaged 3.2 substantive evaluation items with 39.3% reporting none, whereas LLM papers averaged 7.3 items with a 3.8% no-evaluation rate. The authors read this as a practical accountability gap in which adoption can be straightforward even when the evidence needed to audit the adopted system is sparse. The analysis is descriptive, but it reframes [[research-methods-aied|research reporting]] as a precondition for audit rather than a stylistic nicety.

## Usefulness Is Not Adequacy for Delegation

The corpus separates two judgments that are easily conflated. Overall evaluations of LLM-assisted review automation were often favorable, yet favorable assessments did not imply that authors considered the systems adequate for unsupervised use. Among 118 LLM papers classified as positive only, 52% nevertheless reported at least one limitation indicating the workflow remained below the reliability or performance bar required for its intended role. The corresponding share was 67% among 57 positive-with-caveats papers and 79% among 38 mixed/negative papers; among the 35 descriptive or unclear papers the share was 14%. Because these are reported judgments rather than independent re-evaluation, they should be read as a recurring rhetorical pattern: "useful" is not the same claim as "adequate for delegation."

The same distinction appears in the limitation profiles. Prompt sensitivity is especially common in LLM papers (40%), while data scope remains prominent across both earlier and current approaches — small or narrow data was reported by 47% of traditional-ML papers and 52% of BERT papers. This matters for [[human-in-the-loop-ai|human-in-the-loop AI]]: a workflow may reduce screening burden or improve recall while still requiring verification at exactly the points where an error could alter the [[meta-analysis-systematic-review|evidence base]].

Reported performance evidence is heterogeneous rather than reassuringly clean. For screening and selection, median recall was 0.821 for custom ML/deep-learning/BERT/rule-based methods, 0.884 for LLMs, and 0.851 for software/products, while median precision was 0.742, 0.695, and 0.667 respectively. For data extraction, median recall was 0.769, 0.890, and 0.778, with median precision of 0.776, 0.881, and 0.678. Individual paper values span far wider ranges than these medians, and the comparison mixes different datasets, tasks, thresholds, and validation designs — an inventory of reported evidence, not a [[benchmark|benchmark]] comparison. The dispersion is precisely why the framework asks for task-specific performance together with the evaluation context needed to interpret it, and why [[hallucination-risk|failure modes]] and false positives/negatives belong in the results section rather than a passing mention.

## The Three-Layer Framework and Its Limits

PRISMA-LLM is organized to complement PRISMA 2020 rather than replace it. Its first layer is a universal checklist of 16 items (LLM-1 through LLM-16) covering system identification, task and disclosure level, inputs and document processing, prompts and settings, outputs and post-processing, human oversight, evaluation plan, processing counts, errors, limitations, reproducibility materials, and support and interests. Layer two is a five-level implementation-disclosure scheme: Level 1 off-the-shelf software; Level 2 prompt-only LLM use; Level 3 few-shot, structured, engineered, voting, ensemble, or LLM-as-judge workflows; Level 4 [[rag|retrieval-augmented]], adapted, fine-tuned, or single-agent workflows; Level 5 multi-agent or swarm systems. Each level accumulates the technical detail of the ones below it — from product and version at Level 1, through prompts and inference settings at Level 2, examples and schemas at Level 3, retrieval sources and parsing/chunking at Level 4, to agent roles, handoffs, termination, and cross-agent audit logs at Level 5.

Layer three is consequence-sensitive evaluation. Minimum evaluation breadth rises with implementation complexity, but implementation level is not a risk score. At any level, stronger validation is expected when AI outputs can change search retrieval, inclusion/exclusion, extracted evidence, risk-of-bias judgments, synthesis, or conclusions; when human verification is limited; when the system is proprietary or mutable; or when errors are difficult to reconstruct or reverse. An off-the-shelf product used to autonomously exclude records may therefore require more stringent validation than a [[agentic-ai|multi-agent]] system used only to draft text that authors fully check. This design choice is what separates implementation complexity from methodological risk, and it is why the authors insist on reporting task consequence, degree of human verification, system opacity, and reversibility explicitly.

The framework is positioned relative to adjacent proposals. PRISMA-S is the close precedent in recognizing that a technically consequential procedure requires dedicated detail; PRISMA-AI addresses reviews and meta-analyses of [[ai-technologies|AI systems]] in healthcare; PRISMA-trAIce covers AI-tool identification, human–[[student-ai-interaction|AI interaction]], performance evaluation, and limitations; PRISMA-DFLLM emphasizes domain-specific LLMs, fine-tuning, and reproducibility; and L-PRISMA adds reporting for GenAI-assisted screening. PRISMA-LLM's distinguishing claim is that its graded levels derive from observed corpus patterns rather than expert deliberation alone.

The authors are explicit about the boundaries of their evidence. SciLitBench covers publications through June 2025, so 2025 results represent January through June; it is concentrated in life sciences and medicine and reflects the parent review's search and inclusion criteria. Reporting richness counts annotated evidence items, captures breadth with limited within-dimension depth, and is not a validated study-quality score. The complexity gradient may be confounded by study purpose, venue, task, publication year, or the fact that engineered workflows are more often themselves the object of method development. Crucially, paper-level absence of evaluation does not prove that no validation exists elsewhere — a product report, protocol, repository, or prior publication may carry it. And the checklist combines empirical observation with workflow experience and prior guidance without formal consensus development or prospective user testing. PRISMA-LLM is therefore not an official extension endorsed by the PRISMA Executive; it is a proposal offered for testing and revision. For [[ai-use-disclosure|disclosure]] practice in [[ai-education|AI in education]] and elsewhere, its practical contribution is a concrete vocabulary: what the system received and produced, what humans checked, where failures occurred, and how those failures could have affected the evidence base.

## Connected Concepts

- [[llm]]
- [[meta-analysis-systematic-review]]
- [[ai-use-disclosure]]
- [[research-methods-aied]]
- [[limitations-in-aied-research]]
- [[human-in-the-loop-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[benchmark]]
- [[hallucination-risk]]
- [[generative-ai]]
- [[agentic-ai]]

## Connected Articles

- [[llm-formative-feedback-systematic-review-2026]] — LLM-generated formative feedback in education: A qualitative systematic literature review
- [[liang-genai-systematic-review-human-ai-2026]] — A systematic review of generative AI in education: Empirical insights from a human–AI interaction perspective
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: The Manufacturing of an Evidence Base for AI-in-Education Through Flawed Meta-Analysis
- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity in AI in Education
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]] — Can AI Evaluate Assessment? A Study of Large Language Model Meta-Assessment Performance
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[genai-educational-outcomes-meta-analysis]] — Generative AI technologies and educational outcomes: a comprehensive meta-analysis comparing traditional and AI-driven approaches
- [[ai-science-chemistry-education-systematic-review-2025]] — Artificial Intelligence in Science and Chemistry Education: A Systematic Review
- [[rismanchian-ai-education-four-decades-aixed-2026]] — The Evolution of Research on AI and Education Across Four Decades: Insights from the AIxEd Framework
- [[trust-reliance-ai-education-2026]] — Trust and Reliance on AI in Education: AI Literacy and Need for Cognition as Moderators

## Citation

Zabaleta, M. & Lin, B. (2026). [*PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews*](https://arxiv.org/abs/2609.11559). arXiv preprint.
