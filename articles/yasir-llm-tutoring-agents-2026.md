---
title: "Confirming Correct, Missing the Rest: LLM Tutoring Agents Struggle Where Feedback Matters Most"
created: "2026-08-15T15:53:50-04:00"
updated: "2026-08-21T13:20:39-04:00"
type: article
tags: [intelligent-tutoring, intelligent-tutoring, student-modeling, knowledge-graph, knowledge-tracing, ai-feedback-quality, ai-ed-evaluation, educational-measurement]

sources: ['raw/papers/yasir-llm-tutoring-agents-2026.md']
confidence: high
---

# Confirming Correct, Missing the Rest: LLM Tutoring Agents Struggle Where Feedback Matters Most

## Summary

Yasir et al. (2026) benchmark seven LLM feedback agents as step-level tutors in propositional logic, using **knowledge-graph-derived ground truth** across 10,836 solution–feedback pairs and three feedback conditions. Their core finding: models achieve near-ceiling performance on optimal steps but **systematically over-reject valid-but-suboptimal reasoning and over-validate incorrect solutions** — precisely where adaptive tutoring matters most. These failures persist across models and solution contexts (suggesting architectural rather than informational limits), and accurate diagnosis does not reliably produce pedagogically actionable feedback. The authors conclude LLMs are better suited to hybrid architectures where KG-grounded models handle diagnosis while LLMs support open-ended scaffolding and dialogue.

## Key Findings

- **Near-ceiling on optimal steps, failures elsewhere:** models classified optimal solutions well (F1 94–99%) but struggled on valid-alternative solutions (F1 0–76%) and incorrect solutions (F1 4–55%).
- **Over-rejection and over-validation (OR/OV):** Gemini/DeepSeek over-validated (69–71%), treating most solutions as valid alternatives; LLaMA 3 over-rejected (91%), rejecting nearly all non-optimal solutions; GPT-4.1/GPT-o3 showed moderate rates of both.
- **Model-level, not information-level, failures:** model selection explained most variance (η² > 0.95); feedback conditions, step complexity, distance-to-goal, and inference rule had negligible effects. Failures persisted regardless of solution context.
- **Accurate diagnosis ≠ pedagogically useful feedback:** even correct classifications often produced encouraging but pedagogically misleading feedback — praising solutions without identifying errors or giving actionable guidance, especially for incorrect and valid-alternative solutions.
- **Hybrid architecture indicated:** LLMs suit open-ended scaffolding and dialogue; KG-grounded models should handle diagnostic classification.

## Implications

- Current LLM tutors cannot resolve the "assistance dilemma" without ITS-grounded diagnostic mechanisms.
- Effective LLM tutoring in structured reasoning domains requires hybrid architectures delegating diagnostic classification to KG-grounded models while using LLMs for scaffolding and dialogue.
- Evaluation must move beyond binary correctness to three-way (optimal / valid-alternative / incorrect) classification to reveal these failure modes.

## Connected Concepts

- [[intelligent-tutoring]]
- [[student-modeling]]
- [[knowledge-graph]]
- [[knowledge-tracing]]
- [[ai-feedback-quality]]
- [[feedback]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[scaffolding]]
- [[socratic-method]]
- [[llm]]

## Connected Articles

- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — From answer generators to reasoning facilitators
- [[llm-tutoring-feedback-diagnosis-gap]] — LLM tutoring feedback diagnosis gap
- [[ai-tutor-effectiveness-review]] — AI tutor effectiveness review
- [[deeptutor]] — DeepTutor: agentic personalized tutoring

## Citation

Yasir, T., Li, W., Gilson, S., Tithi, S. D., Tian, X., & Barnes, T. (2026). [*Confirming correct, missing the rest: LLM tutoring agents struggle where feedback matters most*](https://arxiv.org/abs/2605.16207v1). arXiv:2605.16207.
