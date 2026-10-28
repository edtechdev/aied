---
title: "Visible Reasoning: User-Facing Decision Transparency for Generative AI Systems"
created: "2026-10-27T09:50:00-04:00"
updated: "2026-10-27T09:50:00-04:00"
type: article
authors: ["Anbalagan, S. K.", "Nie, X.", "Kommalapati, A.", "Kanamarlapudi, V. K.", "Radhakrishnan, S.", "Zhao, X.", "Mohan, U."]
published: "2026"
venue: "arXiv"
source_url: https://arxiv.org/abs/2610.35483
sources: ['raw/papers/filtered-decision-logs-transparency-genai-2026.md']
confidence: high
contributors: [editor]
source_depth: full text
verified: [citation, numbers, links]
page_kind: [framework]
research_method: [user study]
level: []
audience: [educational technology developers, software developers, learners, instructors]
technology: [generative-ai, rag]
ethics: [explainable-ai, trust-calibration]
methods: [usability-research]
foundations: [human-ai-collaboration, agentic-ai]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-27"
    agent: hermes-agent
---

> **Synthesis:** Asking a [[generative-ai|generative AI]] system to explain itself is not transparency: the explanation is produced by the same process it is meant to expose, and chain-of-thought has been shown to be unfaithful. This paper proposes an external measurement layer instead. Filtered Decision Logs pair each answer with a short rationale, an influence-ordered list of the tool outputs that shaped it, and relevance indicators, all computed by a deterministic pipeline that rebuilds observability telemetry into a provenance tree and scores evidence with four semantic and structural signals. Users can then exclude a source and re-run. Across three scenarios — career advising, investment analysis and travel planning — counterfactual tool removal tracked the ranking, and 50 participants in a formative evaluation approved the mechanism at 92%.

## Key Findings

- **Evaluation independence is the design principle.** The scoring layer is separate from the reasoning layer, so a user can [[trust]] the influence score without trusting the recommendation, unlike LLM-as-evaluator or chain-of-thought transparency.
- **Influence ranking tracks real dependence.** Counterfactual tool-removal experiments confirmed that the sources ranked highest are the ones whose removal changes the answer.
- **Evidence is scored by four deterministic signals.** Final Answer Similarity, Average Relevancy, Persistence and Structural Proximity combine into an influence score, with categorical labels at High (≥ 0.70), Medium (0.40–0.70) and Low (< 0.40).
- **Scores are absolute, not shares.** Influence values are computed per evidence item and deliberately do not sum to 1.0, which the authors state explicitly to prevent the ranking being read as a percentage attribution.
- **Re-running is the interaction that matters.** Users inspect the ranking, expand signal breakdowns, exclude a misleading source and re-run, turning transparency from a static explanation into a [[governance]] loop.
- **Formative users found it useful.** In an evaluation with 50 participants, 92% approved the mechanism, drawn from three applied scenarios rather than a single demo.

## Why not just ask the model

The paper opens with a distinction that matters for anyone auditing an AI advisor. Three transparency paradigms exist: an [[llm|LLM]] acting as its own evaluator, chain-of-thought traces, and external measurement. The first two score low on both determinism and verifiability because they depend on the generative process under examination. The analogy offered is a financial audit, where the auditor does not ask the company whether its transactions were legitimate but examines receipts and traces the money.

Filtered Decision Logs take the third path. Observability telemetry, in the OpenTelemetry style where a run is a tree of parent–child spans, is reconstructed into a provenance tree of tool calls and retrieved records. Each leaf becomes a readable evidence statement rather than raw JSON, for example a company's reported revenue and margin, and the four signals rank those statements by their relation to the final answer. Because the computation is deterministic, the same trace always yields the same ranking.

## What the interface asks of a user

The FDL answers three questions in order: what the system concluded, why, and which evidence most shaped the conclusion. That structure is what makes the accept-or-re-run pattern usable by a non-developer. A learner checking a study recommendation, or an advisor checking a placement suggestion, can see which sources were load-bearing and remove one that looks wrong; the system then regenerates with fresh scores, so the correction is visible rather than buried.

The authors are careful about the limits of the artifact. Showing which tools influenced an answer is not showing the reasoning, and the influence score is a ranking of evidence rather than a causal decomposition. What the design buys is a checkable claim about dependence, which is a narrower and more defensible promise than interpretability.

## Where this fits in educational systems

[[explainable-ai|Explainability]] in education usually arrives as a rationale written by the model, which is exactly the pattern this paper argues against. For a tool-augmented advisor — a course recommender, a writing assistant citing sources, an [[agentic-ai|agent]] reading a student's records — the FDL pattern offers a concrete alternative: expose the retrievals, rank them, and let the user remove one. That also gives [[trust-calibration]] something to calibrate on, since a user can test the system by removing the source they believe is wrong and watching whether the answer moves. The honest caveat is that the mechanism covers tool-augmented pipelines; a model answering from parametric knowledge has no provenance tree to reconstruct.

## What this means for practice

- **Expose retrievals, not reasoning, when you need something checkable.** If an assistant cites sources, rank them by measured influence and let users remove and re-run rather than showing a generated explanation.
- **Show the removal test, not just the list.** The accept/re-run loop is what turns an explanation into a verification, and it is cheap to implement on a traced pipeline.
- **Do not present influence scores as percentages.** They are per-item absolute values, and labeling them as shares misstates the measurement.
- **For developers, instrument the agent before you need transparency.** A provenance tree requires trace-level telemetry, and retrofitting it after deployment is the expensive path.
- **For evaluators, verify the ranking with counterfactuals.** Tool-removal tests check that the transparency artifact tracks dependence instead of merely looking plausible.

## Limitations

- The mechanism applies only to tool-augmented pipelines with trace telemetry, so answers produced from model weights alone cannot be reconstructed this way.
- Evaluation rests on three authored scenarios (career advising, investment analysis, travel planning) and a 50-participant formative study reporting 92% approval, with no controlled comparison against alternative transparency designs.
- The four influence signals are heuristic and deterministic by design; the paper's contribution is the interaction pattern, not evidence that the scoring recovers true causal influence in general.
- All authors are employed by Amazon Web Services, and the framework is described as a research prototype rather than a product, so the scenarios reflect one organization's pipeline.
- Approval ratings from formative users are [[self-report-measures|self-report]] and do not establish that users make better decisions with FDLs than without them.

## Citation

Anbalagan, S. K., Nie, X., Kommalapati, A., Kanamarlapudi, V. K., Radhakrishnan, S., Zhao, X., & Mohan, U. (2026). [*Visible Reasoning: User-Facing Decision Transparency for Generative AI Systems*](https://arxiv.org/abs/2610.35483). arXiv:2610.35483.
