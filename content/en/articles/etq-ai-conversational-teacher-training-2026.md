---
title: "A Conversational AI Framework for Teacher Training: ETQ-AI"
created: "2026-10-15T08:20:00-04:00"
updated: "2026-10-15T08:20:00-04:00"
type: article
foundations: [teacher-role, ai-literacy]
sources: ['raw/papers/10.3390_info17101023.md']
confidence: high
page_kind: [framework, evaluation]
research_method: [instrument development, experiment, system development]
discipline: [learning sciences]
level: [k 12]
audience: [instructors, faculty developers, educational technology developers]
technology: [generative-ai, llm]
pedagogy: [scaffolding, socratic-method]
assessment: [formative-assessment]
ethics: [privacy, digital-divide]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-15"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Miranda & Calvani (2026) present ETQ-AI, a conversational system that pairs a 50-item diagnostic questionnaire on [[teacher-role|teacher]] misconceptions with a Google Gemini dialogic layer, so that instead of receiving a static "correct/incorrect" score against an expert benchmark, teachers can argue back. The design rests on Evidence-Informed Education (EIE): the AI is prompted to cite meta-analytic evidence (Hattie's effect sizes, Cognitive Load Theory) rather than assert authority, and the interaction is explicitly framed as productive cognitive conflict, not compliance. The pilot (N = 123 educators at an Italian EIE conference) shows the mechanism works: Gemini matched expert-panel judgments on 96.8% of 64 benchmark items (intra-model consistency 98.1%), and teachers rated AI feedback significantly higher than the static author comments for clarity and actionable depth (M = 4.12 vs 3.82, p < 0.001, d = 0.36). The most interesting result is the resistance data: 34 coded objections split into contextual constraints (41.2%), pedagogical subjectivity (35.3%) and item ambiguity (23.5%), and 5.9% of interlocutors rejected the system outright as "an algorithmic dogma machine." The authors treat that 5.9% as a design signal, not a failure — evidence that the system must be a "boundary object" for professional argumentation rather than an infallible arbiter. The study measures perceptions and conversational patterns, not shifts in classroom practice.

## Key Findings
1. ETQ-AI operationalizes a three-tier workflow: a 50-item Google Forms diagnostic (Agree/Disagree), an automated email report giving the expert benchmark, author commentary, and two action links, and a dialogic Gemini interface for "In-depth EIE Analysis" or "Argue/Discuss with AI."
2. The 50-item scale was curated from a 64-item pool by expert consensus (five researchers, three master teachers, Fleiss' κ = 0.88) using three criteria: direct mapping onto meta-analytic effect sizes (d ≥ 0.40), capacity to distinguish common misconceptions from evidence-aligned practice, and balanced domain coverage. Dimensions: Planning (12), Cognitive (12), Evaluative (10), Management (8), Special Education/Inclusion (8).
3. The authors are explicit that the 50-item version is "a tailored diagnostic scaffold rather than an independently re-validated psychometric inventory" — the 64-item versions had Cronbach's α = 0.87, but the curated scale was not re-validated.
4. Model fidelity benchmark: across 64 validation items × 5 runs per model at fixed hyperparameters (T = 0.2, Top_P = 0.95, Max_Tokens = 450), Gemini 1.5 Flash aligned with the expert benchmark on 96.8% of items (62/64) with 98.1% intra-model consistency; GPT-4o aligned on 92.2% (59/64) with 95.3% consistency. Inter-rater reliability of the two human coders was Cohen's κ = 0.89.
5. Misalignments clustered on special education and inclusion items, "where models produced overly permissive responses" — the one domain where the LLM did not emulate the expert framework.
6. The pilot recruited N = 123 educators at a national EIE conference (82% response rate): 70 primary teachers (56.9%), 40 secondary (32.5%), 13 school leaders (10.6%), mean 7.2 years experience (SD = 4.1). Participants generated 218 API queries and 34 structured objections.
7. Disagreement with the expert benchmark clustered on three items: #12 cognitive styles (78% initial disagreement, teachers defending visual/auditory learning-style matching), #33/#46 cooperative group work and inclusion (68%), and #10 EdTech and information overload (54%).
8. Teacher ratings: technical functionality M = 4.41 (SD = 0.62); pedagogical relevance M = 4.23 (0.71); static author feedback clarity M = 3.82 (0.89); Gemini AI feedback clarity M = 4.12 (0.75). The paired-samples advantage for AI feedback was significant: t(122) = 3.41, p < 0.001, Cohen's d = 0.36.
9. No significant differences across professional roles on any dimension (all p > 0.4), though the authors caution the school-leader subgroup (n = 13) is too small to establish equivalence.
10. Gemini's responses followed a consistent three-phase "Acknowledge-and-Refine" pattern: affective validation of the teacher's experience, evidence reframing (e.g., re-introducing Hattie's d = 0.75 for clear teacher structure without dismissing the teacher's context), and contextual adaptation proposing a pragmatic compromise tailored to the stated constraint.
11. The 34 coded objections: Contextual Constraints & Resource Deficits 14 (41.2%) — e.g., "Direct instruction works in theory, but with 28 pupils including 4 with special needs, pacing breaks down"; Pedagogical Subjectivity & Affective Primacy 12 (35.3%) — "Teaching is an art based on relationships, not effect sizes"; Item Ambiguity & Decontextualization 8 (23.5%) — binary wording forcing Yes/No on context-dependent practices. Inter-coder reliability κ = 0.84.
12. Negative case analysis: 2 of 34 interactions (5.9%) fully rejected the AI, calling it "an algorithmic dogma machine that ignores real classroom reality" — the authors read this as the boundary condition where normative feedback triggers professional defensiveness instead of reflective learning.
13. Privacy architecture: emails are SHA-256 hashed before database logging, free-text dialogue is scrubbed for PII at the middleware before any payload reaches the external LLM API, and all interaction logs are stored for post-hoc analysis — a GDPR-oriented design the authors treat as part of the system, not an afterthought.
14. Resilience engineering: the PHP middleware implements exponential backoff (3 attempts) on HTTP 429 or 5-second timeouts and falls back to pre-cached expert-validated responses, "ensuring zero disruption to the user experience."

## Explainability as pedagogical rationale, not white-box transparency
The paper's sharpest conceptual move is distinguishing two things "explainable AI" could mean. It does not expose token probabilities or attention weights — internal algorithmic transparency — instead it constrains the system prompt so every justification is grounded in named synthesis literature (Hattie's effect sizes, Cognitive Load Theory). The authors call this *pedagogical rationale* explainability, and they are candid about what it does and does not buy: the constraint "mitigates off-topic algorithmic drift" but "does not guarantee complete immunity from hallucinatory references or subtle textual inaccuracies," so outputs are "contextually constrained pedagogical arguments rather than infallible absolute truths." For [[ai-ed-evaluation|evaluating]] AI in education this is a useful reframing: the audit target is not the model's internals but the traceability of its claims to citable evidence.

## Why the 5.9% rejection rate is the design lesson
The negative cases matter more than the satisfaction means. When feedback is perceived as "overly normative," the authors report, it triggers professional defensiveness rather than reflective learning — the opposite of the intended cognitive conflict. Their response is to reframe the system as a "boundary object" whose purpose is not compliance with an algorithmic benchmark but "the cultivation of critical, evidence-informed professional judgment," and they warn directly against deploying ETQ-AI "as an authoritative, infallible arbiter of absolute pedagogical truth." The objection corpus supports the concern: the largest theme (41.2%) is teachers citing real constraints — class size, special needs, curriculum coverage — that meta-analytic effect sizes do not address, and 23.5% of objections target the item wording itself rather than the evidence. A binary agree/disagree format cannot represent "it depends whether group work is exploratory or consolidative," which is a measurement limitation the AI dialogue exposes rather than causes. The three-phase Acknowledge-and-Refine pattern is the system's answer: validate the constraint, re-anchor the evidence, then propose the compromise.

## The EBE/EIE distinction underneath the design
The paper spends real effort separating Evidence-Based Education (EBE) — clinical-protocol adherence, rigid prescription — from Evidence-Informed Education (EIE), where meta-analyses and systematic reviews are "highly reliable sources of evidence designed to inform professional decision-making" and educators retain "full professional autonomy and accountability to adapt strategies to specific classroom contexts." This distinction is the paper's answer to the echo-chamber risk: an EBE system would score teachers against a single correct model, while an EIE system treats the expert benchmark as a reference point for argumentation. The authors explicitly designed ETQ-AI "to move beyond a rigid 'correct/incorrect' binary" so teachers can "problematize the expert model itself." This is also why the architectural discussion insists that constraint must live in the system prompt: the pedagogical stance is enforced by prompting discipline, not by fine-tuning or architecture.

## What this means for practice
- **Faculty developers.** A dialogic layer changes what a misconception diagnostic is for: the static version produces a score, the conversational version produces an argument the teacher can win or lose on evidence — the 41.2% contextual-constraint theme says most objections are about feasibility, so expect to design for adaptation, not conversion.
- **Faculty developers.** The three most-contested items (cognitive styles 78%, inclusion/group work 68%, EdTech overload 54%) are where your evidence base meets teachers' strongest intuitions; those are the items worth rehearsing dialogue around.
- **Instructors.** An AI feedback layer that cites effect sizes is more useful than one that asserts conclusions — but the 5.9% rejection rate is the warning that normative framing breeds resistance, so the framing of the prompt is part of the pedagogy.
- **Developers.** The privacy pattern is copyable: hash identifiers before logging, scrub PII at the middleware before any external API call, and cache expert-validated fallbacks with exponential backoff so rate limits never surface to the user.
- **Developers.** Constrain generation with named evidence anchors (specific meta-analyses, specific theories) rather than generic "be accurate" instructions — the paper's fidelity numbers (96.8% alignment) are evidence that domain-constrained prompting works, within its acknowledged hallucination limits.
- **Researchers.** The study is a pilot measuring perceptions; the open question it names is longitudinal — whether dialogic reflection transfers into classroom practice and student outcomes, which it did not measure.

## Limitations
- Convenience sample of 123 conference attendees self-selected toward evidence-based methodologies; the authors state the high satisfaction (M = 4.23/5) "cannot be directly generalized to the broader teacher population, where resistance to quantitative metrics and standardized pedagogical frameworks may be substantially higher."
- The 34 objections are a self-selected sub-sample of participants who chose to contest feedback, so the objection themes describe the argumentative patterns within those interactions, not the whole cohort.
- No pre/post measurement of critical reflection or classroom practice — the paper is explicit that it "measures user perceptions and conversational patterns rather than direct pre/post shifts."
- Reliance on a proprietary commercial API (Gemini): the authors flag unannounced model updates and policy shifts as "long-term risks of pedagogical drift" and name open-weights alternatives (Llama-3, Mistral, DeepSeek-R1) on local infrastructure as the fix, with the caveat that system-prompt constraints must be rigorously maintained.
- The curated 50-item scale was not independently re-validated (the α = 0.87 belongs to the 64-item versions), and the school-leader subgroup (n = 13) is too small to support subgroup conclusions despite the null ANOVA results.
- Single national (Italian) context with one language; the authors call for validation "across broader, culturally diverse educational systems."

## Citation

Miranda, S., & Calvani, A. (2026). A Conversational AI Framework for Teacher Training. *Information*, 17(10), 1023. https://doi.org/10.3390/info17101023
