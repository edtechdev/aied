---
title: "Confirming Correct, Missing the Rest: LLM Tutoring Agents Struggle Where Feedback Matters Most"
created: "2026-05-19T04:33:04-04:00"
updated: "2026-08-24T13:00:00-04:00"
type: article
tags: [intelligent-tutoring, llm, generative-ai, benchmark, scaffolding, feedback, hallucination-risk, ai-literacy]

sources: ['raw/papers/2605.16207.md']
confidence: high
---

> **Synthesis.** Yasir et al. (2026) benchmark seven LLM tutoring agents on three-way, step-level diagnosis — classifying a student's next proof step as optimal, valid-alternative, or incorrect — across 10,836 [[simulating-students|LLM-simulated]] solution-feedback pairs grounded in a [[knowledge-graph]] solution space for propositional logic. Models hit near-ceiling performance on clearly optimal steps but systematically misfired exactly where adaptive tutoring matters: they over-rejected valid-but-suboptimal reasoning and over-validated incorrect solutions. These failures were driven by model selection rather than solution context, step complexity, or proof position, and accurate diagnosis did not reliably yield [[ai-feedback-quality|pedagogically actionable feedback]]. The authors argue for hybrid architectures in which [[knowledge-graph|KG-grounded]] models own diagnostic labeling while [[llm|LLMs]] support open-ended [[scaffolding]] and dialogue.

# LLM Tutoring Feedback Diagnosis Gap

## Background and Motivation
Effective [[intelligent-tutoring|tutoring]] must distinguish optimal, valid-but-suboptimal, and incorrect student reasoning. Treating valid reasoning as wrong discourages productive exploration, while accepting every valid alternative without guidance reinforces inefficient strategies — the tension learning scientists call the assistance dilemma. Classic [[intelligent-tutoring|intelligent tutoring systems (ITS)]] resolve this through step-level diagnosis against explicit, expert-authored solution graphs, but those are costly to scale to new domains and offer limited conversational flexibility. [[llm|LLMs]] promise open-ended dialogue and cross-domain generalization, yet without grounding they [[hallucination-risk|hallucinate]] and often reveal answers instead of [[scaffolding]] reasoning. Whether LLM agents can reproduce the three-way diagnostic precision of ITS had remained largely untested, motivating this [[benchmark]].

## Benchmark Design
The authors extract 516 unique proof states from a propositional logic tutoring system deployed in an undergraduate Discrete Mathematics course, drawn from 32 problems across five difficulty levels. They encode the complete solution space of each problem as a [[knowledge-graph|knowledge graph]] (KG) over 15 propositional inference rules, making all valid derivations enumerable by construction. Each predicted next step is classified against the KG as optimal (strictly reduces distance to the conclusion), valid-alternative (valid but does not reduce distance), or incorrect (not derivable under any valid rule).

Seven models — reasoning-augmented (GPT-o3, DeepSeek-R1, Qwen3-32B) and instruction-tuned (GPT-4.1, Gemini-1.5-Pro, LLaMA-3.3-70B, Mistral-Large) — serve in two roles: as a [[simulating-students|student simulator]] generating next-step solutions with reasoning traces, and as a feedback agent. Solutions are evaluated under three prompt-level role conditions: Peer (symbolic answer only), Teacher (full derivational context), and Judge (full context plus the Peer's feedback). This yields 10,836 solution-feedback pairs, with feedback graded on four rubric dimensions (correctness, error identification, revealing, actionability) for 100 pairs per condition.

## Key Findings
1. **Near-ceiling on optimal, collapse elsewhere:** All models classified optimal solutions almost perfectly (F1 94–99%) but struggled with valid-alternative (F1 0–76%) and incorrect (F1 4–55%) solutions.
2. **Two pedagogically distinct failure modes:** Over-rejection — labeling valid reasoning as incorrect — discourages productive exploration, while over-validation — labeling incorrect solutions as valid — reinforces [[student-misconceptions-ai|misconceptions]]; models skewed sharply toward one extreme (e.g., LLaMA 3 at 91% over-rejection, Gemini and DeepSeek at 69–71% over-validation).
3. **Failures are model-level, not informational:** Model selection explained nearly all variance (η² > 0.95, p < .001), while feedback condition, step complexity, distance to conclusion, and inference rule had negligible effects (η² < 0.01) — richer solution context did not improve diagnosis.
4. **Diagnosis does not translate into actionable feedback:** Accurate classification rarely produced pedagogically actionable guidance; agents frequently praised solutions without identifying errors, and Judge verification often propagated rather than corrected Peer mistakes.

## What Drives Misdiagnosis (RQ2)
Model selection dominated classification variance, while feedback conditions had a negligible effect: additional information access did not improve diagnosis when student reasoning diverged from the expert path. Step complexity predicted misdiagnosis only for optimal solutions (more complex optimal steps were missed more often) and explained negligible variance overall, so failures reflect model-level diagnostic bias rather than problem difficulty. Over-rejection was highest when solutions were closest to the conclusion, and failures concentrated on structurally complex inference rules (Modus Tollens, Constructive Dilemma, De Morgan), with LLaMA showing minimal gains across rule types.

## From Diagnosis to Feedback Quality (RQ3)
Human evaluation scored feedback lowest on error identification and actionability — responses often failed to locate the reasoning flaw or offer a clear next step. Peer agents restated student mistakes or gave vague praise. Teacher and Judge agents improved error identification but tended to penalize valid-alternative reasoning by steering students back to the provided solution, an over-directive pattern consistent with the assistance dilemma. Contrary to prior [[ai-ed-evaluation|LLM-as-Judge]] findings, Judge feedback did not consistently improve quality and often anchored to, and propagated, the Peer's framing rather than correcting it.

## Implications
- **For ITS/LLM architecture:** LLMs should complement rather than replace [[intelligent-tutoring|ITS]] — delegate diagnostic labeling to [[knowledge-graph|KG-grounded]] models while using LLMs for open-ended [[scaffolding]] and dialogue, conditioning feedback on classifier output rather than self-assessed reasoning validity.
- **For evaluation:** Three-way, ground-truth-grounded [[cognitive-diagnosis|diagnosis]] is necessary to expose over-rejection and over-validation that binary correctness schemes hide; evaluation methodology matters alongside model capability.
- **For feedback design:** Effective verification (the Judge role) requires independent diagnostic signals — possibly distinct models or explicit reasoning chains enforcing independent evaluation — rather than sequential refinement of a flawed judgment.
- **For practice:** Current LLM tutors risk pedagogically misleading feedback precisely where adaptive support is most needed, so they require ITS-grounded diagnostic mechanisms before deployment in [[adaptive-learning|adaptive tutoring]] contexts.

## Connected Concepts

- [[scaffolding]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[llm]]
- [[cognitive-diagnosis]]
- [[automated-assessment]]
## Connected Articles

- [[ai-tutor-behavioral-evaluation]]
- [[ai-tutor-safety-harms]]
## Citation

Yasir, T., Li, W., Gilson, S., Dey Tithi, S., Tian, X., & Barnes, T. (2026). [*Confirming Correct, Missing the Rest: LLM Tutoring Agents Struggle Where Feedback Matters Most*](https://arxiv.org/abs/2605.16207)
