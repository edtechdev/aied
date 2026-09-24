---
title: Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education
created: "2026-05-16T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
pedagogy: [scaffolding, socratic-method]
technology: [conversational-ai, generative-ai, intelligent-tutoring, llm, personalized-learning, rag]
assessment: [formative-assessment]
research_method: [system development, design and evaluation study]
level: [higher ed]
sources: ['raw/papers/2605.12988.md']
confidence: high
discipline: [cs education]
audience: [instructors, instructional designers, software developers]
page_kind: [evaluation]
---

> **Synthesis:** KITE (Knowledge-Informed Tutoring Engine) introduces a [[intelligent-tutoring]] architecture that grounds its responses in course materials through a [[multimodal]] [[scaffolding|RAG pipeline]]. Unlike generic [[llm]] tutors that may drift from [[curriculum-design|curriculum]] content, KITE retrieves relevant material — lecture slides, problem sets, code examples — before generating Socratic hints, guiding questions, and progressive scaffolds tailored to the student's current error.
> The system's intent-aware Socratic response strategy builds on [[socratic-method]] principles but operationalizes them through retrieval: rather than relying on the model's parametric knowledge of how to tutor, KITE anchors every response in authoritative course content. This design addresses a key gap identified in [[zerkouk-comprehensive-review-its-2025]] — that [[pedagogy|pedagogical]] quality alone is insufficient without content fidelity.
> KITE was evaluated through three complementary lenses. RAGAs-based metrics confirmed response grounding and quality. Expert pedagogical review assessed the educational appropriateness of its Socratic scaffolding. Most innovatively, a simulated student pipeline — where a weaker LLM acts as a student across two-turn dialogues — measured whether KITE's [[formative-assessment|feedback]] actually improved follow-up accuracy on procedural and algorithm tracing questions. Results were positive: [[simulating-students|simulated students]] produced more accurate responses after receiving KITE feedback, particularly on tracing tasks where step-by-step reasoning is critical.
> This work contributes to the growing literature on [[nie-personavlm-long-term-personalization-2026|LLM-based student modeling]] by demonstrating that [[rag|retrieval-augmented]] tutoring can maintain both pedagogical and content fidelity. It also connects to [[programming-its]] [[research-methods-aied|research]] by targeting algorithmic reasoning specifically, and to [[personalized-learning]] through its adaptive response strategies. The simulated student evaluation approach offers a replicable, low-cost methodology that could accelerate tutor development cycles — a theme also explored in [[chen-teacharena-language-agents-realistic-teaching-2026]] for broader tutor evaluation.
## What this means for practice

- **Instructors.** Retrieve before you generate. KITE grounds every response in course materials — lecture slides, problem sets, code examples — before producing a Socratic hint, which is what keeps tutoring from drifting off your curriculum.
- **Instructors.** Route tracing and procedural questions to step-by-step scaffolds rather than explanations. In the evaluation, simulated students produced more accurate follow-up answers after KITE's feedback especially on tracing tasks, where step-by-step reasoning is critical.
- **Designers.** Treat content fidelity as a retrieval problem, not a prompt-wording problem. Combining a five-stage retrieval pipeline with intent-aware response generation is what let KITE hold both pedagogical appropriateness and course grounding at once.
- **Software developers.** Adopt the three-lens evaluation — RAGAs grounding metrics, expert rubric review, and a simulated student pipeline — to shorten development cycles, but interpret the simulated-student gain as evidence that a stronger answer is recoverable, never as evidence of learning.

## Limitations

- The simulated student pipeline used a single LLM, Meta-Llama-3.1-70B-Instruct, as a proxy for student behavior, so the Round 1 to Round 2 improvement means KITE's feedback makes a stronger answer more recoverable, not that real students learned.
- Factual-correctness scoring is constrained by RAGAs, which decomposes responses into atomic claims checked against one instructor-authored answer; the 0.31-point gap between factual correctness (0.45) and answer similarity (0.76) is consistent with that mismatch rather than with wrong content.
- Expert review covered a limited set of interaction cases (n = 44). Interrater agreement was strong (κ = 0.88), but judgments of answer improvement and pedagogical quality still involve subjectivity, and the sample size limits precision.
- No classroom deployment with real students has been run, so the magnitude and pattern of improvement for actual learners — including revision behavior over time — remain unknown.

## Connected Concepts

- [[intelligent-tutoring]]
- [[scaffolding]]
- [[socratic-method]]
- [[formative-assessment]]
- [[personalized-learning]]
- [[rag]]
- [[simulating-students]]
- [[feedback]]
- [[llm]]
## Connected Articles

- [[zerkouk-comprehensive-review-its-2025]]
- [[nie-personavlm-long-term-personalization-2026]]
- [[programming-its]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
## Citation

Jain, M., Bhatt, T., Pitts, G., Pandya, A., Brusilovsky, P., Norouzi, N., Hellas, A., Leinonen, J., & Akram, B. (2026). [Retrieval-Augmented Tutoring for Algorithm Tracing and Problem-Solving in AI Education](https://arxiv.org/abs/2605.12988). BEA 2026.
