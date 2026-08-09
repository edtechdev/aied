---
title: Educational LLM Alignment
created: 2026-05-07
updated: 2026-05-09
type: article
tags: [llm, benchmark, efficacy-study, bias-mitigation, teacher-role, pedagogical-llm-training, faculty-development-genai, ai-literacy, ethics]
sources: ['raw/papers/hardy-knowledge-without-wisdom-llm-misalignment-2026.md']
confidence: medium
---

> Hardy & Kim (2026) identify a **cascading proxy** problem in AI-for-education evaluation:

> The gap between what LLMs are *capable* of and what actually *benefits learners* — benchmark performance, downstream task quality, and intended educational impact are three distinct and often-misaligned levels.

## The Three-Layer Alignment Problem

Hardy & Kim (2026) identify a **cascading proxy** problem in AI-for-education evaluation:

1. **Benchmark alignment** (MMLU, pedagogical knowledge tests) — what models are typically evaluated on.
2. **Downstream task alignment** (expert human ratings of teaching quality) — what models are asked to do.
3. **Intended impact alignment** (student learning gains / VAMs) — what actually matters.

The paper demonstrates these three layers are not just loosely coupled — they can be **negatively correlated**.

## Empirical Evidence

### Study Design
- **Dataset:** NCTE Main Study — ~350 4th/5th-grade math teachers, US; lesson transcripts.
- **Tasks:** 7 classroom observation dimensions from MQI (explanations, error remediation, student questioning, language precision) and CLASS (behavior management, instructional dialogue, positive climate).
- **Models:** 16 leading LLMs (GPT-3.5 through Llama 4) with 3 prompting strategies each.
- **Metrics:** Bias-corrected distance correlation (dCor²) for dependence; Kendall's τ for directional alignment with expert ratings and student VAMs.

### Finding 1: LLMs Share a Homogeneous "Pedagogy Heuristic"
LLM-LLM agreement is substantially higher than LLM-human agreement. Models converge on a shared latent heuristic of "good teaching" that doesn't match expert human distinctions. This is attributed to shared pretraining on Internet text lacking authentic classroom discourse.

### Finding 2: Benchmark Alignment ≠ Student Impact
Some models align moderately with expert ratings, but alignment with student learning gains is often **near zero or negative**. Human raters show a real (τ ≈ 0.11–0.14) signal with VAMs; LLMs largely don't. Reasoning-enhanced variants (o1, DeepSeek-R1) showed **no improvement**.

### Finding 3: Ensembles Amplify Misalignment
Both benchmark-weighted aggregation and unanimous-voting ensembles **worsened** alignment with learning. Aggregating multiple misaligned models compounds the problem rather than averaging it out.

### Finding 4: Model/Prompt Selection = 15% of Error
Choice of LLM and prompting strategy accounts for only ~15% of misalignment. The remaining ~85% is **shared across all models** — common pretraining data and objectives are the dominant driver. Prompt engineering and model selection are weak levers.

## Broader Implications

1. **Stop benchmarking alone** — High scores on MMLU or even pedagogy-specific benchmarks do not predict beneficial educational impact. See [[teachbench-llm-teaching-evaluation]] for syllabus-grounded alternatives.
2. **Ensembles are not a safety net** — When models share the same flawed pretraining priors, voting and weighting make things worse.
3. **Pretraining is the intervention point** — The field's focus on post-hoc alignment (RLHF, prompting) misses that shared pretraining corpora embed the core misalignment. See [[pedagogical-llm-training]] for training approaches.
4. **Measure impact directly** — Practitioners must evaluate against intended student outcomes, not proxy task accuracy. Connects to [[ai-k12-evidence-base]] demands for causal evidence.

This finding is a deep challenge to the [[ai-tutor-effectiveness-review|ITS effectiveness literature]]: if even the best models can't align with student learning, what does "effective" tutoring AI look like? It also reinforces the [[tutoring-specific-vs-general-ai]] finding that general-purpose AI underperforms pedagogically-designed systems.

## Open Questions

- Can pretraining on authentic classroom data (not just Internet text) close the alignment gap?
- Are there tasks where the alignment gap is smaller (e.g., factual tutoring vs. qualitative judgment)?
- How does this interact with [[llm-fallacy-misattribution]] — do students over-trust misaligned AI outputs?

## Connected Concepts

- [[ai-literacy]]
- [[faculty-development-genai]]
- [[pedagogical-llm-training]]

## Connected Articles

- [[ai-k12-evidence-base]] — AI in K-12 Evidence Base
- [[ai-tutor-effectiveness-review]] — AI Tutor Effectiveness Review
- [[ai-tutor-safety-harms]] — AI Tutor Safety and Pedagogical Harms
- [[aied-carbon-footprint-reporting]] — The Environmental Cost of LLMs in AIED: Reporting and Practices
- [[authentic-assessment]] — Authentic Assessment
- [[contextual-sycophancy-ai-literacy]] — The Hidden Cost of Contextual Sycophancy: an AI Literacy Intervention in Human-AI Collaboration
- [[eduframetrap-llm-sycophancy-educational-safety]] — Sycophancy is an Educational Safety Risk: Why LLM Tutors Need Sycophancy Benchmarks
- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity in AI in Education
- [[learnmate2-llm-adaptive-learning]] — LearnMate^2: Design and Evaluation of an LLM-powered Personalized and Adaptive Support System for Online Learning
- [[llm-fallacy-misattribution]] — The LLM Fallacy and Misattribution of Competence
- [[llm-tutoring-feedback-diagnosis-gap]] — Confirming Correct, Missing the Rest: LLM Tutoring Agents Struggle Where Feedback Matters Most
- [[multimodal-affective-its-presentation]] — An Interpretable Closed-Loop Intelligent Tutoring System for Multimodal Affective Feedback in Asynchronous Presentati...
- [[multimodal-learning-genai]] — Multimodal Learning with Generative AI
- [[pedagogical-safety-rl]] — Pedagogical Safety in Educational Reinforcement Learning
- [[principled-ai-education]] — Principled AI in Education
- [[teachbench-llm-teaching-evaluation]] — TeachBench - Evaluating LLM Teaching Ability
- [[tutoring-specific-vs-general-ai]] — Tutoring-Specific vs. General-Purpose AI in Education
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[academiclaw-student-agent-benchmark]] — AcademiClaw: When Students Set Challenges for AI Agents
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[adapt-adaptive-lesson-plan-transformer]] — AdaPT: Adaptive Lesson Plan Transformer for Cross-Regional and Differentiated Instruction
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named

## Citation

(Stanford, A.M.H.Y.K., 2026, S.M.R.A., & improvement, P.W.E.B.M.E.S.N. (2026). [*Educational LLM Alignment*](https://arxiv.org/abs/2603.00883)
