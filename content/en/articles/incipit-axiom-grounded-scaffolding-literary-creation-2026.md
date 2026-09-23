---
title: "Incipit: Axiom-Grounded Scaffolding for Human-AI Literary Creation"
created: "2026-09-23T09:13:54-04:00"
updated: "2026-09-23T09:13:54-04:00"
type: article
published: "2026-09-22"
sources: ['raw/papers/incipit-axiom-grounded-scaffolding-literary-creation-2026.md']
confidence: high
page_kind: [framework]
research_method: [theoretical analysis, system development]
discipline: [humanities education, writing education]
level: [higher ed]
audience: [instructors, researchers, software developers]
pedagogy: [creativity, scaffolding, storytelling-in-education, situated-learning]
technology: [knowledge-graph, llm, educational-nlp]
assessment: [evaluative-judgment, educational-measurement]
methods: [benchmark, research-methods-aied, qualitative-research]
ethics: [bias-mitigation, ai-use-disclosure]
foundations: [theory-development-aied, theories-and-frameworks, human-ai-collaboration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
---

> **Synthesis:** The paper asks how a work's conceptual commitments connect creation, interpretation and [[evaluative-judgment|evaluation]], and answers with an intermediate unit: a proposition-like axiom realized through characters, events, language and form, then reconstructed differently by situated readers. It turns that account into an inspectable artifact — 1,455 axiom records, 1,464 mappings to 149 works, 472 typed links — and audits it. The audit confirms structural integrity and names gaps: the context taxonomy cannot separate Types C and D, cross-work reuse is sparse, and provenance is absent. Five dimensions and five falsifiable predictions are offered as a research program, not results.

## Key Findings
1. **The unit of analysis is a premise, not a theme.** Each of the 1,455 axiom identifiers states a provisional organizing proposition and carries at least one literary example and one work mapping.
2. **Relations, not membership, carry the organization.** The 472 typed links comprise 350 complements, 55 tensions, 39 specializations, 21 evolutions and 7 contradictions; curator-supplied strengths average 0.839 (range 0.70–0.93).
3. **The ontology is work-local, not cross-work.** 1,464 mappings cover 149 works — 432 primary, 507 secondary, 525 technique roles — yet 1,448 of the 1,455 axioms map to exactly one work.
4. **Content records outnumber formal ones.** The snapshot holds 933 content records (64.1%) against 522 form records (35.9%), labeled 482 fundamental, 871 intermediate and 102 specific across 11 primary domains.
5. **The context taxonomy does not work as coded.** All 1,189 Type A records carry empty era and region lists, and all 47 Type C records populate both, so the stored fields cannot distinguish Type C from Type D.
6. **The empirical claims are predictions, not findings.** No expert or reader study was run; the protocol proposes five raters on a 35-record stratified sample, and H1–H5 each state what would count against them.

## Four claims and the level between theme and text
The framework rests on four claims. Configurational organization treats a work as a selected set of premises and relations. Realization mediates meaning: choices of character, event, affect, language and form can qualify, test or transform a premise rather than illustrate it. Reading reconstructs and differentiates, so a reconstruction can recover an organizing commitment while altering its scope or relations. Evaluation is relational and multidimensional. Together they define an intermediate level between an abstract theme and a particular text — the level at which a writer revising [[creativity|literary creation]] can change an organizing commitment, a reader can justify a reconstruction, and a critic can compare two works. The care-and-autonomy miniature is invented, not observed; it shows that attribution and relation do explanatory work a premise inventory cannot, and that the configuration [[scaffolding|scaffolds]] revision rather than dictating it.

## What the audit establishes, and what it cannot
Recomputed from the JSON files, the audit is structurally sound: 1,455 unique identifiers, every axiom carrying at least one example and one mapping, all 1,464 mapping endpoints and all 944 relationship endpoints resolving, and no duplicate (work, axiom) pair or self-link. Works carry 8–13 mappings (median 10; mean 9.83). The Great Gatsby stores 12 mappings whose roles separate central claims from technique, and the Hamlet and To Live slices contrast epistemic contamination with endurance. The audit also shows what the [[knowledge-graph]] is not: only seven axioms map to more than one work, so reuse is sparse. The checks establish structural consistency, not interpretive quality: they cannot say whether a claim is insightful. Reading is [[situated-learning|situated]], and the artifact records one curation, so treat the snapshot as a [[benchmark]] candidate rather than a benchmark.

## Five dimensions and a validation program that has not run
Coherence, contextual reach, distinctiveness, realization fidelity and interpretive richness stay separate rather than combining into a scalar measure; the dataset lacks the comparison corpus a novelty estimate would need, and a broad context label is explicitly not a proxy for quality. The mathematical vocabulary is bounded: the open premise space is not assumed enumerable, the records are interpretations rather than premises in a deductive system, and the strength field is a confidence-like annotation, not a truth value. The paper rejects the combinatorial analogy as an explanation of [[creativity|creative]] search and, citing Brooks's heresy of paraphrase, treats records as indexes into readings rather than texts. Validation is staged as [[research-methods-aied|a research program]]: expert rating of records, reader and comparison studies for H1–H5, then a creative-process study comparing configuration-guided with theme-based planning. [[llm|Language models]] proposed candidate formulations while human curators selected, rewrote and grounded them, but no study has tested whether the structures change decisions.

## What this means for practice
- **Instructors.** Ask students to state one organizing premise for a text, point to the consequence that makes it available, and supply a plausible alternative reading, because the schema keeps statement, description, example and context separate.
- **Researchers.** Separate record quality from evidence about reading: rate a stratified sample on single focus, clarity, grounding, context adequacy and analytic usefulness, and treat low agreement as a finding about underspecified labels or legitimate plural readings, not annotator failure.
- **Software developers.** Preserve provenance before shipping this knowledge base into a writing interface — versioned candidates, prompt and model manifests, source-passage identifiers, adjudication logs — because the current snapshot cannot reconstruct its own pipeline.

## Limitations
- No expert ratings or human-subject results exist in the repository; the validation plan proposes five raters on a 35-record stratified sample, so every dimension claim is untested.
- The snapshot preserves no versioned candidate pool, prompt or model manifests, source-passage identifiers, curator identities or adjudication logs, so candidate counts, curator numbers and rejection percentages cannot be reported.
- All 47 Type C and all 123 Type D records populate both era and region lists, so the context labels cannot support comparative analysis until the taxonomy is repaired.
- 1,448 of 1,455 axioms map to exactly one work, so co-occurrence and graph analysis are sparse, and the artifact has no held-out annotation set, no calibrated strengths (curator-supplied mean 0.839) and no public archival identifier or dataset license.

## Connected Concepts
- [[scaffolding]]
- [[creativity]]
- [[theory-development-aied]]
- [[storytelling-in-education]]
- [[situated-learning]]
- [[knowledge-graph]]
- [[educational-nlp]]
- [[evaluative-judgment]]
- [[educational-measurement]]
- [[benchmark]]
- [[research-methods-aied]]
- [[human-ai-collaboration]]
- [[humanities-education]]
- [[writing-education]]
- [[llm]]

## Connected Articles
- [[mindcopilot-llm-co-writing]] — MindCopilot: Towards Formalizing and Evaluating Granular Human-LLM Co-Writing
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Enhancing creative writing with robot-LLM integration
- [[generativism-learning-theory]] — Generativism: Toward a Learning Theory for the Age of Generative Artificial Intelligence
- [[human-ai-collaboration-prerequisite-functions]] — What do you mean by human-AI collaboration: Prerequisite functions and the affordances needed to achieve it
- [[multimodal-knowledge-graph-educational-reasoning]] — Evidence-Grounded Multimodal Knowledge Graph Construction for Multi-Lecture Educational Reasoning
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Ontology-Based Layered Hybrid AI-Driven Knowledge Model for Personalized E-Learning
- [[naim-bypass-offload-scaffold-llm-learning-2026]] — Bypass, Offload, or Scaffold: A Conceptual Model of How Large Language Models Shape Learning
- [[rethinking-scaffolding-llm-tutors]] — Rethinking Scaffolding in LLM Tutors: The Interactional Mismatch Between Benchmarks and Real-World Deployments
- [[trikonet-trivalence-co-creativity-2026]] — TriKoNet: The Trivalence Model of Potential Co-Creativity in Socio-Technical Networks
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding
- [[academic-erasure-complexity-ai-writing-2026]] — Academic Erasure: The Disappearance of Complexity Under AI-Supported Writing
- [[genai-creativity-k12-scoping-review-2026]] — Generative Artificial Intelligence and Creativity in K–12 Education: A Systematic Scoping Review

## Citation
Liu, Q., & Zhao, C. (2026). [Incipit: Axiom-Grounded Scaffolding for Human-AI Literary Creation](https://arxiv.org/abs/2609.25504). arXiv:2609.25504.