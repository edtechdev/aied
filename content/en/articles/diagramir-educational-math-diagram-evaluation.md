---
title: "DiagramIR: An Automatic Pipeline for Educational Math Diagram Evaluation"
created: "2026-08-21T08:00:00-04:00"
updated: "2026-09-19T09:24:40-04:00"
type: article
technology: [educational-nlp, generative-ai, llm, multimodal, visualization]
assessment: [automated-assessment]
audience: [software developers]
discipline: [math education]
confidence: high
level: [k 12]
page_kind: [evaluation]
sources: [raw/papers/2511.08283.md]
methods: [benchmark]
---

> **Synthesis:** **Back-translating generated diagrams into an intermediate representation (IR) enables scalable, low-cost automatic evaluation that beats LLM-as-a-Judge on agreement with human raters.** Most [[llm|LLM]]-based learning tools are text-only, limiting their use in visual domains like [[math-education|mathematics]] where diagrams and spatial reasoning matter. Recent work lets LLMs generate code (LaTeX TikZ) that compiles to educational figures, but evaluating whether those figures are mathematically and visually sound remains a bottleneck. DiagramIR solves this by translating TikZ code into a schema-constrained IR and running deterministic rule-based checks (fully in frame, elements scaled/readable, labels matched, no problematic overlap, angles/lengths match). Across 398 real teacher-generated diagram instances, this back-translation pipeline achieves higher agreement with human raters (Cohen's κ ≈ 0.48–0.56) than LLM-as-a-Judge (κ ≈ 0.39–0.47), and lets a small model like GPT-4.1-Mini perform comparably to GPT-5 at **10× lower inference cost** — important for accessible, scalable, [[equity-in-ai-education|equitable]] education technology.

## Key Findings

- **Scalable evaluation is the bottleneck, not generation.** LLMs can already produce pedagogically useful math diagrams (e.g., from TikZ), but judging correctness is subjective and human evaluation cannot scale to live, [[conversational-ai|chatbot]]-style settings.
- **Back-translation into an IR beats LLM-as-a-Judge on human agreement.** By decoupling perception (an LLM maps TikZ → IR) from verification (cheap rule-based checks on the IR), DiagramIR achieves higher Cohen's κ agreement with human raters across models than LLM-as-a-Judge in its strongest setting (both code and image).
- **Smaller models become competitive at 10× lower cost.** Because the pipeline offloads evaluation to deterministic checks, even GPT-4.1-Mini performs on par with the best LLM-judge (GPT-5) at roughly \$0.47 vs \$4.83 on the dataset — critical for deploying evaluation in resource-constrained settings.
- **Strength in spatial checks, limitation in some math checks.** Back-translation outperforms LLM-as-a-Judge on both spatial checks (fully-in-frame, readable scaling, label association, overlap), but the LLM judge does better on one mathematical check (angle labels, κ 0.829 vs 0.652), where programmatically verifying label positioning relative to geometric objects is tricky.
- **Grounded in real teacher–LLM interaction data.** The 398-item evaluation set is drawn from 6,000 random conversations between teachers and an AI math assistant (Coteach) using the Illustrative Mathematics K–12 [[curriculum-design|curriculum]], reflecting diagrams teachers actually generate "in the wild."

## What this means for practice

- **Designers.** Evaluate generated figures by back-translating them into a schema-constrained intermediate representation and running deterministic checks, rather than asking an LLM to judge the rendered image: DiagramIR reached higher agreement with human raters (Cohen's kappa roughly 0.48-0.56) than LLM-as-a-Judge (roughly 0.39-0.47).
- **Designers.** Reuse the rule set as the explanation for failure — the checks state which property broke (fully in frame, scaling, label association, overlap, angle/length match), giving teachers concrete [[feedback]] instead of an opaque score.
- **Designers.** Know which check the pipeline cannot yet cover: the LLM judge still beat it on angle labels (Cohen's kappa 0.829 vs. 0.652), where verifying label position relative to geometric objects is hardest.
- **Designers.** Lower the cost floor with a small model once verification is offloaded to rules — GPT-4.1-Mini matched the best LLM-judge (GPT-5) at roughly \$0.47 versus \$4.83 on the dataset, which is what makes real-time diagram feedback affordable in resource-constrained settings.

## Limitations

- The 398-instance evaluation set is drawn from one K-12 curriculum (Illustrative Mathematics) and 6,000 teacher-assistant conversations, so transfer to other domains (physics diagrams, freehand sketches) is unestablished.
- The rubric covers mathematical and spatial correctness only and leaves out pedagogical usefulness, which the authors call a critical but more subjective dimension of diagram quality.
- The intermediate representation captures a restricted set of geometric primitives and relations, so more complex diagrams (multi-step constructions, coordinate plots) may need schema and check extensions.
- Back-translation relies on LLMs to parse TikZ into IRs, and the authors report that this IR-generation step introduced stochastic errors.

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

## Citation

Kumar, V., Mishra, S., Hao, R., Malik, R., Broman, D., & Demszky, D. (2025). *[DiagramIR: An automatic pipeline for educational math diagram evaluation](https://arxiv.org/abs/2511.08283)*. NeurIPS 2025 Math-AI Workshop.
