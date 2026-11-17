---
title: "Approach to physics education using local AI with RAG for open educational materials generation"
published: "2026"
created: "2026-11-17T18:40:00-05:00"
updated: "2026-11-17T18:40:00-05:00"
type: article
foundations: [ai-literacy]
research_method: [system development]
level: [higher ed]
audience: [instructors, educational technology developers]
page_kind: [design case]
sources: ['raw/papers/beznosko-local-ai-rag-physics-oer-2026.md']
source_url: "https://doi.org/10.31274/joerhe.26107"
confidence: low
evidence_context: educational
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-17"
    agent: hermes-agent
source_depth: full text
verified: [citation]
---

> **Synthesis:** Beznosko et al. (2026) describe, in a conference proceeding rather than an evaluation, how a physics department can run a language model on its own hardware and point it at its own course materials using retrieval-augmented generation. The two problems the approach answers are the ones instructors raise first: student data leaving the institution, and general models knowing nothing about a particular class. Running a model locally through Ollama means nothing is transmitted; attaching lecture notes, problem sets and textbooks as retrieved context means answers are grounded in the course rather than in the open web. The uses named are the routine ones — generating summaries, quizzes and study guides, and helping with feedback — with manual validation treated as a required step rather than an optional one. There is no sample, no comparison and no outcome data here, so the contribution is a reproducible setup and an honest list of its failure modes: smaller models are less accurate, prompt design carries much of the quality, and every output needs a human read.

## Key Findings

1. The workflow is deliberately low-infrastructure: install a local runtime such as Ollama, pull a model sized to the machine's memory, attach course documents, and query. The paper names `llama3.2:3b` as an example pull and AnythingLLM as a front end.
2. Privacy is the first argument. Because the model runs on the instructor's own machine, no student data or course material is sent to a vendor, which is what makes the approach usable for summarising evaluations and helping with simple grading.
3. Disciplinary specificity is the second. Retrieval from instructor-provided materials conditions the output on the actual course, so generated quizzes and study guides match what was taught instead of generic textbook content.
4. Model size is a hardware constraint with a quality cost. Larger parameter counts perform better and need more memory; the paper works from the roughly 8 GB of video memory common on current machines and warns that installing the framework inside a virtual machine runs very slowly.
5. The paper is explicit that output is a draft. Instructors are expected to refine and validate what the model produces, and the stated risks are errors and overgeneralization rather than invented citations.
6. The example that carries the most detail is quiz generation: a prompt asking for a college-level quiz on biological content formatted as LaTeX, compiled afterwards into a printable document.
7. The approach is offered as portable across departments — any discipline with structured materials such as syllabi, lab manuals or readings can apply the same pattern.

## Why local inference changes the argument

Most institutional AI discussions start from a procurement question: which vendor, which agreement, which data-processing terms. A local model removes that question and replaces it with a hardware one. The trade is explicit — capability for control — because a model that fits in 8 GB of video memory is not the model that tops a benchmark.

For an instructor the arithmetic is often favorable, because the tasks named here are small. Summarising a set of course evaluations, drafting ten practice questions on a topic, or turning lecture notes into a study guide does not require frontier reasoning. It requires the right documents in context and a check afterwards.

The paper's own caveat is where the approach gets hard. Retrieval quality depends on the materials: a course whose notes are scanned PDFs or inconsistent slides will produce weaker grounding, and the fix is a materials audit rather than a bigger model.

## The gap between a demonstration and evidence

This is a nine-page conference proceeding, and it reads like one: a described workflow, screenshots of model sizes, a sample prompt and a compiled quiz. There is no cohort, no comparison condition, no measure of question quality, and no student data. The claims are feasibility claims, and the paper mostly keeps them there.

That makes it useful for a specific reader — an instructor or department technician deciding whether local inference is worth a week of setup — and not useful for anyone asking whether AI-generated quiz questions improve learning. For that question, the studies collected here supply designs; this one supplies the plumbing.

## What this means for practice

- **Start with the data question, not the model.** If the reason for local inference is student records, the setup should be justified by what it keeps on the machine, and documented that way for review.
- **Match model size to hardware before promising capability.** Pick the largest model the machine runs comfortably, and expect accuracy to fall as size drops.
- **Audit the document set you retrieve from.** Materials with broken structure or inconsistent notation will surface as bad answers that look like model failures.
- **Keep validation in the loop.** Generated quizzes and feedback should be treated as drafts, with the instructor's read as the quality gate.
- **Do not cite a demonstration as an effect.** If a department adopts this, the useful evaluation is a small comparison — instructor time saved, error rate in generated items — not a satisfaction survey.

## Limitations

- The paper reports no study: no participants, no comparison, no outcome measures, and no reliability or validity data for generated materials.
- Model and tooling details are illustrative rather than evaluated; the example model is small and the paper does not test alternatives.
- Privacy claims rest on the architecture rather than on an audit or threat model, and local deployment has its own risks, including device loss and unmanaged access.
- The examples come from physics and biology; portability to disciplines with less structured materials is asserted rather than shown.
- Venue and length constrain the detail: retrieval configuration, chunking, and prompt templates are not specified well enough to replicate exactly.

## Citation

Beznosko, D., Krivosheev, T., & Iakovlev, A. (2026). [*Approach to physics education using local AI with RAG for open educational materials generation*](https://doi.org/10.31274/joerhe.26107). *Journal of Open Educational Resources in Higher Education, 4*(2).
