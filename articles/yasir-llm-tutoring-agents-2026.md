---
title: "Confirming Correct, Missing the Rest: LLM Tutoring Agents Struggle Where Feedback Matters Most"
created: "2026-08-15T15:53:50-04:00"
updated: "2026-09-18T20:05:00-04:00"
type: article
technology: [generative-ai, intelligent-tutoring, knowledge-graph, llm]
assessment: [ai-feedback-quality, educational-measurement, feedback]
foundations: [ai-literacy]
pedagogy: [scaffolding]
ethics: [hallucination-risk]
audience: [researchers, software developers]
research_method: [benchmark]
page_kind: [evaluation]
sources: ['raw/papers/yasir-llm-tutoring-agents-2026.md']
confidence: high
discipline: [math education]
level: [higher ed]
methods: [ai-ed-evaluation, benchmark]
---

> **Synthesis:** Yasir et al. (2026) [[benchmark]] seven [[llm|LLM]] tutoring agents on three-way, step-level diagnosis — classifying a student's next proof step as optimal, valid-alternative, or incorrect — across 10,836 [[simulating-students|LLM-simulated]] solution–feedback pairs grounded in a [[knowledge-graph]] solution space for propositional logic. Models reached near-ceiling performance on clearly optimal steps but misfired exactly where adaptive tutoring matters: they over-rejected valid-but-suboptimal reasoning and over-validated incorrect solutions. The failures were driven by model selection rather than solution context, step complexity or proof position, and accurate diagnosis did not reliably yield [[ai-feedback-quality|pedagogically actionable feedback]]. The authors argue for hybrid architectures in which [[knowledge-graph|KG-grounded]] models own diagnostic labelling while [[llm|LLMs]] support open-ended [[scaffolding]] and dialogue.

## Key Findings

1. **Near-ceiling on optimal steps, collapse elsewhere.** Every model classified optimal solutions almost perfectly (F1 94–99%) but struggled with valid-alternative (F1 0–76%) and incorrect (F1 4–55%) solutions.
2. **Two pedagogically distinct failure modes.** Over-rejection labels valid reasoning as incorrect and discourages exploration; over-validation labels incorrect solutions as valid and reinforces [[misconceptions]]. Models skewed hard to one extreme — LLaMA 3 over-rejected 91% of the time, Gemini and DeepSeek over-validated 69–71%.
3. **Failures are model-level, not informational.** Model selection explained nearly all variance (η² > 0.95, p < .001) while feedback condition, step complexity, distance to conclusion and inference rule had negligible effects (η² < 0.01): richer solution context did not improve [[cognitive-diagnosis|diagnosis]].
4. **Diagnosis does not translate into actionable [[feedback]].** Even correct classifications often produced encouraging but misleading guidance — praise without error identification — and the Judge role tended to anchor on and propagate the Peer's mistakes rather than correct them.
5. **Hybrid architecture indicated.** LLMs suit open-ended dialogue; a [[knowledge-graph|KG-grounded]] model should own diagnostic classification, with feedback conditioned on the classifier's output rather than the model's self-assessed reasoning validity.

## Why diagnosis was tested this way

Effective [[intelligent-tutoring|tutoring]] has to separate optimal, valid-but-suboptimal and incorrect reasoning: treating valid reasoning as wrong discourages exploration, while accepting every valid alternative without guidance reinforces inefficient strategies — the assistance dilemma. Classic [[intelligent-tutoring|intelligent tutoring systems]] resolve it by diagnosing each step against an expert-authored solution graph, but those graphs are costly to build for new domains and offer little conversational flexibility. [[llm|LLMs]] promise open-ended dialogue and cross-domain generalisation, yet ungrounded models [[hallucination-risk|hallucinate]] and often reveal answers instead of [[scaffolding]] reasoning.

The authors extract 516 unique proof states from a propositional logic tutor used in an undergraduate discrete [[math-education|mathematics]] course (32 problems, five difficulty levels) and encode each problem's full solution space as a [[knowledge-graph|knowledge graph]] over 15 inference rules, so every valid derivation is enumerable. Seven models act in two roles — student simulator and feedback agent — under three prompt conditions (Peer: answer only; Teacher: full derivational context; Judge: context plus the Peer's feedback).

## What drove the misdiagnosis

Model choice dominated classification variance, and the extra information in the Teacher and Judge conditions did not help when student reasoning diverged from the expert path. Step complexity predicted misdiagnosis only for optimal solutions and explained negligible variance overall, so the failures reflect model-level diagnostic bias rather than problem difficulty. Over-rejection peaked when solutions were closest to the conclusion and concentrated on structurally complex rules such as Modus Tollens, Constructive Dilemma and De Morgan.

Human raters then scored the feedback itself lowest on error identification and actionability. Contrary to prior [[ai-ed-evaluation|LLM-as-Judge]] findings, judge verification did not consistently improve quality, and Teacher and Judge agents tended to penalise valid-alternative reasoning by steering students back to the provided solution.

## What follows for practice and evaluation

Evaluation of tutors needs three-way, ground-truth-grounded diagnosis to expose over-rejection and over-validation that binary correctness checks hide. Verification requires an independent diagnostic signal — a separate model or an explicit reasoning chain enforcing independent judgement — not sequential refinement of a flawed judgement. Until that exists, current LLM tutors risk pedagogically misleading feedback precisely where [[adaptive-learning|adaptive support]] matters most.

## Connected Concepts

- [[scaffolding]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[llm]]
- [[cognitive-diagnosis]]
- [[automated-assessment]]
- [[knowledge-graph]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[socratic-method]]

## Connected Articles

- [[ai-tutor-behavioral-evaluation]]
- [[hazra-safetutors-pedagogical-safety-2026]] — What safety failures look like when tutor models are red-teamed
- [[from-answer-generators-to-reasoning-facilitators-ai-tutors]] — From answer generators to reasoning facilitators
- [[zerkouk-comprehensive-review-its-2025]] — AI tutor effectiveness review
- [[deeptutor]] — DeepTutor: agentic personalized tutoring

## Citation

Yasir, T., Li, W., Gilson, S., Tithi, S. D., Tian, X., & Barnes, T. (2026). [*Confirming Correct, Missing the Rest: LLM Tutoring Agents Struggle Where Feedback Matters Most*](https://arxiv.org/abs/2605.16207).
