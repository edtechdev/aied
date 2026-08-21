---
title: "DiagramIR: An Automatic Pipeline for Educational Math Diagram Evaluation"
created: "2026-08-21T08:00:00-04:00"
updated: "2026-08-21T08:02:47-04:00"
type: article
tags: [math-education, automated-assessment, llm, multimodal, educational-nlp, benchmark, generative-ai]
confidence: high
sources: [raw/papers/2511.08283.md]
---

> **Back-translating generated diagrams into an intermediate representation (IR) enables scalable, low-cost automatic evaluation that beats LLM-as-a-Judge on agreement with human raters.** Most [[llm|LLM]]-based learning tools are text-only, limiting their use in visual domains like [[math-education|mathematics]] where diagrams and spatial reasoning matter. Recent work lets LLMs generate code (LaTeX TikZ) that compiles to educational figures, but evaluating whether those figures are mathematically and visually sound remains a bottleneck. DiagramIR solves this by translating TikZ code into a schema-constrained IR and running deterministic rule-based checks (fully in frame, elements scaled/readable, labels matched, no problematic overlap, angles/lengths match). Across 398 real teacher-generated diagram instances, this back-translation pipeline achieves higher agreement with human raters (Cohen's κ ≈ 0.48–0.56) than LLM-as-a-Judge (κ ≈ 0.39–0.47), and lets a small model like GPT-4.1-Mini perform comparably to GPT-5 at **10× lower inference cost** — important for accessible, scalable, equitable education technology.

## Key Findings

- **Scalable evaluation is the bottleneck, not generation.** LLMs can already produce pedagogically useful math diagrams (e.g., from TikZ), but judging correctness is subjective and human evaluation cannot scale to live, chatbot-style settings.
- **Back-translation into an IR beats LLM-as-a-Judge on human agreement.** By decoupling perception (an LLM maps TikZ → IR) from verification (cheap rule-based checks on the IR), DiagramIR achieves higher Cohen's κ agreement with human raters across models than LLM-as-a-Judge in its strongest setting (both code and image).
- **Smaller models become competitive at 10× lower cost.** Because the pipeline offloads evaluation to deterministic checks, even GPT-4.1-Mini performs on par with the best LLM-judge (GPT-5) at roughly $0.47 vs $4.83 on the dataset — critical for deploying evaluation in resource-constrained settings.
- **Strength in spatial checks, limitation in some math checks.** Back-translation outperforms LLM-as-a-Judge on both spatial checks (fully-in-frame, readable scaling, label association, overlap), but the LLM judge does better on one mathematical check (angle labels, κ 0.829 vs 0.652), where programmatically verifying label positioning relative to geometric objects is tricky.
- **Grounded in real teacher–LLM interaction data.** The 398-item evaluation set is drawn from 6,000 random conversations between teachers and an AI math assistant (Coteach) using the Illustrative Mathematics K–12 [[curriculum-design|curriculum]], reflecting diagrams teachers actually generate "in the wild."

## Practical Implications

- **Use symbolic intermediate representations to make evaluation cheap and auditable.** For developers of math/AI education tools, translating generated figures into a structured IR where deterministic checks run is both more reliable and far cheaper than asking an LLM to judge the rendered image — and the checks explain exactly why a diagram passes or fails.
- **Adopt an IR-based evaluation for accessibility and scale.** The approach lets lightweight models do the work, lowering the cost floor enough to deploy automatic diagram feedback in live, real-time learning tools.
- **Pair automatic evaluation with rubric-based human calibration.** The pipeline mirrors a clear rubric (mathematical + spatial correctness) and is calibrated against human raters, so automatic checks remain aligned with pedagogical intent.

## Connected Concepts

- [[math-education]]
- [[automated-assessment]]
- [[llm]]
- [[multimodal]]
- [[educational-nlp]]
- [[benchmark]]
- [[generative-ai]]

## Connected Articles

- [[structrag-diagram-reasoning-ai-tutoring]] — StructRAG: structural diagram reasoning for STEM AI tutoring
- [[math-education]] — Math Education

## Citation

Kumar, V., Mishra, S., Hao, R., Malik, R., Broman, D., & Demszky, D. (2025). *DiagramIR: An automatic pipeline for educational math diagram evaluation* (arXiv:2511.08283). NeurIPS 2025 Math-AI Workshop. https://arxiv.org/abs/2511.08283
