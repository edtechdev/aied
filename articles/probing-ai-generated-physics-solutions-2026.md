---
title: Probing AI-Generated Physics Solutions and Preparing Students to Critique Them
created: "2026-08-14T09:17:22-04:00"
updated: "2026-08-24T04:59:36-04:00"
type: article
tags: [physics-education, ai-literacy, critical-thinking, generative-ai, prompt-engineering, assessment, student-experience, research-methods-aied, metacognition]
sources: ['raw/papers/2608.12533.md']
confidence: high
---

> **Synthesis:** Borse et al. (2026) examine AI-generated physics solutions from two connected angles: how prompt design shapes solution quality and how students can be prepared to critique those solutions. Using a rotational-mechanics problem and the Minnesota Assessment of Problem Solving (MAPS) rubric, they show well-specified prompts improve completeness while underspecified and multimodal prompts expose weaknesses in physics reasoning. In a student-evaluation phase with 24 introductory physics lab groups, MAPS-guided reflection produced more expert-aligned critiques than problem-solving-only training, which yielded uncritical or misconception-based assessments. The study grounds both model-reasoning [[benchmark|benchmarks]] and student [[ai-literacy]] training in [[physics-education]] research.

## Key Findings

1. Prompt-specificity and modality systematically reshape both the accuracy and the reasoning quality of a reasoning model's physics solution, and final-answer correctness alone understates the differences. The well-specified text-only prompt produced the only correct quantitative result, scoring 5 on nearly all MAPS dimensions, while the underspecified and multimodal prompts exposed reasoning weaknesses.
2. Underspecified prompts increased missing assumptions, oversimplified physics, and numerical or representational errors — here, a neglected hemisphere rotational-kinetic-energy term and a failed numerical implementation that yielded a misleading final result despite a plausible analytical setup.
3. Multimodal prompts, even with supporting text, drove o4-mini to skip the numerical integration needed for a quantitative height-evolution result, producing instead a qualitative response and verbal description — consistent with documented multimodal AI limitations in physics.
4. Structured MAPS-based critique better prepared students than independent problem solving to produce expert-aligned evaluations. Problem-solving-only groups tended to accept the AI solution because it looked polished or to critique it from their own misconceptions, whereas MAPS-guided groups identified missing numerical integration, undefined notation, and qualitative-versus-quantitative plotting.
5. Two expert raters showed substantial agreement (weighted Cohen's κ = 0.64) scoring the AI outputs with MAPS, supporting the rubric as a lens that distinguishes correctness, physics reasoning, mathematical execution, and coherence.

## Prompt Design Shapes Solution Quality

Adapting Jonassen's problem-classification framework, the authors evaluated OpenAI o4-mini responses with the MAPS rubric across prompt variations. The task was a rotational-mechanics problem of a sphere rolling without slipping along the inner surface of a hollow rotating hemisphere, requiring qualitative reasoning and graphical prediction. Each prompt variant was submitted five times with default settings, and outputs were scored on two measures: accuracy and MAPS dimensions (useful descriptions, physics approach, specific application, mathematical procedures, logical progression).

Well-specified prompts improved solution completeness, producing a mostly complete analytical and numerical solution with only an incompletely explained transition from physical setup to analytical formulation. Underspecified and multimodal prompts exposed weaknesses in physics reasoning and correctness — evidence that [[prompt-engineering]] quality directly determines the reliability of AI-generated solutions students encounter. The findings align with [[misconceptions|known patterns]] in how model reasoning degrades as problem constraints must be inferred or interpreted across representations, and reinforce concerns that [[generative-ai]] systems struggle with [[multimodal|visual representations]] even when supporting text is provided.

## Preparing Students to Critique

Twenty-four introductory physics lab groups, drawn from five laboratory sections of a calculus-based first-semester course for engineering majors, evaluated an o4-mini solution either after independently solving a related rolling-sphere inclined-plane problem (the 'Solution' condition, 15 groups) or after critiquing the AI-generated solution with MAPS-based reflection questions (the 'Critique' condition, 9 groups). The common test task asked students to evaluate the multimodal LRM solution to the rotating-bowl problem, rating it with five MAPS-aligned scoring questions, justifying each score, and reporting perceived accuracy.

Problem-solving-only groups produced uncritical or misconception-based critiques: many accepted the AI output largely because it appeared polished and organized, assigning high scores without checking the problem statement, physics, or graphical output, while others were skeptical for reasons that reflected their own traditional misconceptions rather than expert-aligned concerns. MAPS-guided groups identified expert-aligned issues including skipped numerical procedures, undefined notation (such as a rolling angle Ψ never defined), qualitative rather than quantitative plotting, and misalignment with course conventions. This shows critique training is a scaffoldable [[critical-thinking]] skill rather than an automatic byproduct of problem-solving experience, and that evaluating AI-generated work requires practice applying disciplinary criteria to reasoning, representation, and communication rather than relying on [[trust-calibration|surface-level trust]].

## Implications for Physics AIED

The approach integrates model-reasoning [[benchmark|benchmarks]] with pedagogical intervention, connecting [[physics-education]], [[metacognition]], and [[ai-literacy]]. Reflection rubrics turn AI fallibility into a learning resource: as AI outputs become more fluent and harder to evaluate through surface cues alone, structured critique becomes increasingly important for identifying subtle inconsistencies, missing assumptions, and incomplete reasoning. This supports [[research-methods-aied]] work on evaluating both AI outputs and students' evaluation of them, and offers a template for [[discipline-specific-aied|disciplinary]] critique training that treats AI-generated solutions as objects of evaluation under criteria like [[assessment|assessment rubrics]] rather than evidence of correctness.

## Connected Concepts

- [[physics-education]]
- [[ai-literacy]]
- [[critical-thinking]]
- [[generative-ai]]
- [[prompt-engineering]]
- [[assessment]]
- [[student-experience]]
- [[research-methods-aied]]
- [[metacognition]]

## Connected Articles

- [[ai-scoring-language-bias-physics]]
- [[becker-chatgpt-typology-physics-2026]]
- [[socratic-ai-physics-tutor-taxonomy-2026]]
- [[hashmi-socratic-physics-chatbot-2025]]
- [[physics-chatbot-epistemological-beliefs-2026]]
- [[genai-ar-physics-simulation-prompt-2026]]

## Citation

Borse, N. S., Bralin, A., Savage, S., & Rebello, N. S. (2026). [*Probing AI-generated physics solutions and preparing students to critique them*](https://arxiv.org/abs/2608.12533).
