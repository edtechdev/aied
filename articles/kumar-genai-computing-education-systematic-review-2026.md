---
title: "Generative AI in computing education: A systematic review and a framework for responsible integration"
created: "2026-09-11T11:35:00-04:00"
updated: "2026-09-11T11:45:00-04:00"
type: article
tags: [cs-education, generative-ai, meta-analysis-systematic-review, assessment-validity, academic-integrity, equity-in-ai-education, scaffolding, ai-literacy, cognitive-offloading, higher-ed, assessment]
research_method: [systematic review]
audience: [instructors, curriculum designers, researchers, administrators]
level: [higher ed]
discipline: [cs education]
category: [assessment]
sources: ['raw/papers/kumar-genai-computing-education-systematic-review-2026.md']
confidence: high
---

> **Synthesis:** Kumar, Wongsirichot and Nanthaamornphong (2026) synthesise **72 peer-reviewed empirical studies** from **33 venues** (January 2022 – April 2026) on [[generative-ai|generative AI]] in [[cs-education|computing education]] across four questions — effects on learning, [[cognitive-offloading|over-reliance]], assessment and integrity, and [[pedagogy]] — and consolidate them into 14 themes. The most robustly replicated finding is also the most misleading: GenAI reliably raises short-term completion and reduces time-on-task (36 studies, strongest evidence in the corpus), yet those efficiency gains "do not transfer to independent performance" (21 studies) — students complete more while understanding less unless critical [[student-engagement|engagement]] with the output is structurally required. Benefit also depends on [[prior-knowledge|prior knowledge]], with well-prepared students converting AI help into durable skill while under-prepared students risk using it as a crutch. The review's integrative contribution is the **VIE Framework** — Verification, Implementation, and Equity — three interdependent design requirements, each with documented failure modes when treated in isolation.

## Overview

The review argues that computing education is a structurally distinctive setting for GenAI, and that this distinction grounds the whole analysis. In most disciplines AI assistance is mediated by a separate artefact — a history student still has to write the essay, a [[math-education|mathematics]] student still has to work a fresh problem. In computing, the AI generates the assessable artefact itself: the source code. Tool use, learning, and assessment therefore collapse into a single keystroke, since "the act of using the tool, the act of learning, and the act of being assessed are not sequential phases of study but a single, fused activity." Three consequences follow: instructors cannot infer skill acquisition from the submitted artefact, students themselves often cannot tell when they are practising a skill versus outsourcing it, and code-based assessments can no longer distinguish learning from delegation.

The authors also note the scale and speed of adoption — surveys from 2023–2024 found 60–80% of computing students using at least one GenAI tool in coursework, typically without explicit instructor sanction — and locate the gap their review fills: no prior review covered effects, over-reliance, integrity, and pedagogy jointly, even though practitioners face them simultaneously and the dimensions interact.

## Method

The review follows Kitchenham and Charters (2007) guidelines with Wohlin's (2014) snowballing procedure and reports against PRISMA 2020. Scope: formal computing and programming education, primarily [[higher-ed|higher education]] (introductory through advanced), restricted to peer-reviewed empirical studies published January 2022 – April 2026. The corpus contains 72 studies spanning 2022 (3), 2023 (26), 2024 (29), 2025 (13) and 2026 (1), drawn from 33 venues, with two-thirds of studies appearing in A* or A-tier CORE venues. Methodologically it spans controlled and quasi-experiments (23), surveys (14), [[mixed-methods-research|mixed methods]] (9), tool evaluations (7), case studies (6), observation (4), design science (2) and interviews (2).

Two distributional features matter for interpreting the findings. First, courses covered are predominantly introductory/CS1 (30) or mixed-level (34), with few intermediate (5) or advanced (3). Second, evidence is concentrated in North America (21), Northern Europe (12) and Australasia (10), with international/unspecified (16), Asia (7) and other (6) contexts behind — a skew the authors treat as both a [[equity-in-ai-education|limitation and an equity finding]]. Tool coverage centres on ChatGPT/GPT-3.5/GPT-4 (33), GitHub Copilot (12) and Codex (9), with 30 studies examining multiple tools.

## Findings

### Effects on learning and skill (RQ1)

- **Short-term efficiency gains are the corpus's most robust result (36 studies, strong).** GenAI raises task completion and reduces time-on-task across tools, levels and continents: Codex access doubled correctly completed tasks in a supervised session (Kazemitabaar et al. 2023), Copilot improved completion and time-to-completion on brownfield tasks (Shihab et al. 2025), and an Argentinian CS1 cohort showed reduced NASA-TLX workload and higher [[self-efficacy]] alongside better performance (Gardella et al. 2024). Not a single study documents a negative effect on immediate task performance when AI is available.
- **Those gains do not transfer (21 studies, strong).** The comprehension–completion trade-off is the review's central warning: Codex-assisted students completed twice as many tasks during learning yet performed no better than controls on post-tests without AI. Benefits also shrink for tasks requiring complex algorithmic design or multi-component architecture, compared with isolated single-function exercises.
- **Prior knowledge moderates everything (6 studies, moderate).** Well-prepared students convert AI assistance into durable skill; under-prepared students risk a crutch that removes productive struggle.
- **Capability evidence and assessment vulnerability are the same evidence base.** The review merges the AI-[[benchmark]] and assessment-vulnerability themes (T-A, 13 studies) because the same studies demonstrate both what the tools can do and what that implies for [[assessment-validity|assessment validity]].

### Over-reliance (RQ2)

The consolidated theme (T-B, 24 studies) joins behavioural taxonomies of passive AI use with their psychological predictors. Two patterns recur: **passive acceptance** of first suggestions, and the **pseudo-apprenticeship** pattern (Hak et al. 2025), in which students watch AI generate code without ever performing the task themselves — the long-recognised failure of modelling without whole-task practice. Strategic-use interventions and AI-literacy curricula (T-C, 26 studies) merge here because they target the same mechanism.

### Assessment and integrity (RQ3)

- **Detection is the thinnest area in the review (3 studies).** [[ai-detection]] mechanisms are substantially under-investigated relative to their prominence in [[governance|institutional]] debate, and the review's overall posture favours redesign over detection.
- **[[educational-policy-ai|Institutional policy]] has moved faster than practice.** Most instructors operate at a *tolerance* rather than *transformation* level of integration; most institutions have updated policy documents without redesigning assessments; a majority of faculty report no structured [[educational-development|professional development]], with 70% of one national sample explicitly requesting training on AI-resistant assessment design.
- **Redesign is feasible and highest-leverage.** Oral defence and iterative [[eportfolio|portfolio]] templates were rated implementable by faculty in workshops, and the review singles out adding an oral or process-visible element to at least one high-stakes assessment per course as the single most effective intervention.

### Pedagogy (RQ4)

- **Graduated access.** Avouris et al. (2025) structured an introductory Greek programming course into AI-free foundations (weeks 1–5), guided Copilot use with mandatory code-explanation tasks (weeks 6–9), and reflective AI critique (weeks 10–14), reporting substantially lower passive-acceptance rates than courses granting unrestricted access from week one.
- **[[ai-literacy|AI literacy]] must be taught, not assumed.** A single explicit prompt-engineering session (n = 54) significantly raised correct solution rates and produced iterative, verification-oriented behaviour rather than first-suggestion acceptance.
- **Error analysis is a distinct competence.** Students performed significantly *worse* on correcting [[llm]]-generated code than on traditional programming exam tasks — evidence that evaluating and repairing AI output does not transfer automatically from general programming skill, and that without instruction students risk resubmitting incorrect code uncritically.
- **Course redesign has the second-strongest evidence base (25 studies)** after productivity gains, suggesting the field has moved from documenting effects to proposing structured responses.

## The VIE Framework

The review's integrative contribution names three interdependent requirements for responsible integration, each grounded in evidence spanning [[research-methods-aied|research]] questions:

- **Verification** — the family of activities through which students critically engage AI output: reading, testing, modifying, explaining, critiquing. It is "the common mechanism linking every effective intervention in the corpus": guardrail tools enforce it structurally by constraining output, [[self-regulated-learning|self-regulated learning]] designs enforce it procedurally through reflection logs and self-testing, and [[scaffolding|scaffold]] withdrawal enforces it temporally by restoring conditions requiring independent reasoning. It is satisfied when critical engagement is a **graded, observable component** of student work, not an aspiration left to discretion.
- **Implementation** — a coordinated institutional response across faculty development, policy clarity, and assessment redesign. This is the framework's systemic claim: the pedagogy evidence substantially leads what institutions have implemented, and partial implementation (AI literacy in one course, no assessment redesign elsewhere) produces an incoherent regime that the evidence suggests reproduces rather than reduces over-reliance. Closing this gap is "a distinct investment in institutional capacity", not more primary research.
- **Equity** — two mechanisms the literature tends to conflate: a **skill-gap** mechanism (high-prior-knowledge students convert assistance into durable gains while struggling students substitute AI for productive struggle, widening competence within one classroom) and a **resource-gap** mechanism (reliable internet and paid API access sustaining more capable tool use across institutions and national contexts). The remedies differ: graduated access tied to demonstrated competence for the first, institutional investment in shared tool access and non-assuming policies for the second. Equity is the thinnest of the three (six studies directly engage it), and the authors treat that thinness as itself a finding — "the absence of equity-focused intervention research is the equity problem."

The requirements are presented as bidirectional: verification practices fail without implementation capacity; implementation fails without equity-aware design; equity-aware design is impossible without verification practices that work for under-prepared learners.

## Theoretical grounding

The authors connect the requirements to three instructional-design traditions, answering the recurrent criticism that GenAI course-design proposals are under-theorised. **4C/ID** (van Merriënboer and Kirschner) grounds Verification and graduated access most directly: graduated AI access is a fading schedule applied to a powerful new form of support, and scaffold withdrawal is precisely the diminishing-support principle the model predicts is necessary for transfer — while the pseudo-apprenticeship pattern is the long-recognised limitation of modelling without whole-task practice. The **[[desirable-difficulties]]** framework (Bjork and Bjork) and the **[[sociocultural-learning|zone of proximal development]]** (Vygotsky) explain the prior-knowledge moderation: AI assistance helps only when the learner already has enough schema to engage critically with the output.

## Implications for practice

1. **Introduce GenAI gradually and only after foundational competence is demonstrated.** The evidence from the comprehension–completion trade-off, prior-knowledge moderation, and graduated access is strong enough that the authors recommend this as a default rather than an experiment.
2. **Teach AI literacy explicitly** — [[prompt-engineering|prompt engineering]], output verification, and AI error analysis are teachable skills that do not develop through exposure alone.
3. **Redesign at least one high-stakes assessment per course** to include an oral component or other process-visible element — described as the highest-leverage single intervention, supported both by the vulnerability evidence and by the demonstrated feasibility of oral and authentic strategies.

The review also notes that generative AI in computing education sits at the centre of a broader [[student-ai-interaction|human–AI interaction]] research agenda: how students learn alongside tools that perform the very tasks they are being taught to do, what [[assessment-validity|assessment validity]] means when AI systems pass the same examinations as students, and which redesigns preserve learning when the tools are simultaneously instrument, tutor and threat.

## Limitations

A single reflective synthesis carries two kinds of caveat here. The corpus skews toward introductory courses, English-instruction contexts, and North America, Northern Europe and Australasia, limiting generalisation to advanced courses and the [[global-south|global South]]; detection research is thin (3 studies) and equity research thinner (6) — the review's own framing is that these absences are findings, but they also bound what the framework can claim. Methodologically the synthesis combines heterogeneous designs without [[meta-analysis-systematic-review|meta-analytic]] effect pooling, and the authors mark the corpus counts as subject to re-tallying after a supplementary 2025–2026 search. This ingested version is an Elsevier **journal pre-proof** (accepted 9 September 2026), so pagination and copy-edited wording may change in the version of record.

## Connected Concepts

- [[cs-education]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[equity-in-ai-education]]
- [[scaffolding]]
- [[ai-literacy]]
- [[generative-ai]]
- [[cognitive-offloading]]
- [[self-regulated-learning]]
- [[self-efficacy]]
- [[higher-ed]]
- [[assessment]]
- [[summative-assessment]]
- [[evaluative-judgement]]
- zone of proximal development
- desirable difficulties
- cognitive load
- [[student-ai-interaction]]

## Connected Articles

- [[ai-generated-traces-novice-programmers]] — Traces of AI-generated code in novice programmers' work
- [[ai-writes-code-student-writes-model-2026]] — Who learns when AI writes the code
- [[buggy-genai-code-student-responses]] — How students respond to buggy GenAI-generated code
- [[chatgpt-programming-education-text-mining]] — Text mining the ChatGPT-in-programming-education literature
- [[assessment-team-problem-solving-computing-education]] — Assessing team problem solving in computing education
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond detection: authentic assessment as the response to AI
- [[asynchronous-oral-assessment-2026]] — Asynchronous oral assessment as an AI-resistant format
- [[ai-literacy-equity-programming-policy]] — AI literacy, equity and programming-education policy
- [[ai-agents-complete-lms-assessment-validity-2026]] — When agents complete LMS assessments: validity consequences
- [[genai-thoughtless-use-self-directed-learning-2026]] — Thoughtless GenAI use and self-directed learning
- [[du-yuan-epistemic-dependence-2026]] — Differentiating productive reliance from harmful dependence

## Citation

Kumar, A., Wongsirichot, T., & Nanthaamornphong, A. (2026). [Generative AI in computing education: A systematic review and a framework for responsible integration](https://doi.org/10.1016/j.caeai.2026.100677). *Computers and Education: Artificial Intelligence*.
