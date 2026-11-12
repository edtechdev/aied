---
title: "From AI assessment to AI evaluative judgement: evidencing human judgement in AI-supported vocational learning"
created: "2026-11-12T09:30:00-05:00"
updated: "2026-11-12T09:30:00-05:00"
type: article
page_kind: [framework]
research_method: [literature review]
evidence_context: educational
discipline: [vocational education]
level: [adult learning]
audience: [instructors, assessment designers]
sources: ['raw/papers/zheng-ai-evaluative-judgement-vocational-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1977173"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy]
assessment: [evaluative-judgment, assessment, feedback, ai-feedback-quality]
technology: [generative-ai]
---

> **Synthesis:** Zheng and Tang (2026) invert the usual question about [[generative-ai|generative AI]] and [[assessment|assessment]]. Rather than asking whether a system can grade students, they ask whether students can judge machine-produced work, and they argue that this capacity — [[evaluative-judgment|evaluative judgment]] extended to AI output — is what [[vocational-education|vocational]] and [[professional-training|professional programs]] should be certifying. The paper is a focused narrative mini review built on 41 publications and frameworks, organized around three review questions: how AI-related assessment roles differ, how learners judge AI-supported work, and how that judgment can be evidenced in authentic tasks. Its answer to the third is the AI evaluative judgment loop, a recursive cycle in which a learner evaluates the current artifact against situated criteria, provisionally accepts, revises, or rejects and re-prompts, then verifies the outcome, justifies the decision and re-evaluates. [[ai-literacy|AI literacy]] supplies the broader competency context; the loop is offered as a task-level analytic lens inside it, not as a rival construct. The evidence it cites is largely indirect — one study showing that students judging AI- and human-produced writing could more readily assess structural features than conceptual content, another cataloguing judgment events that range from learning through AI limitations to submitting content without judging it. No empirical test of the loop is reported.

## Key Findings

1. **The question moves from AI assessing students to students assessing AI.** Scoring, feedback and [[learning-analytics|analytics]] make the system the evaluator; generative AI requires learners to judge whether machine output is accurate and useful.
2. **AI evaluative judgment sits inside AI literacy rather than beside it.** A learner may know generative AI can be biased yet fail to see that a message is wrong for its product and audience.
3. **The loop is recursive rather than a checklist.** The learner evaluates against criteria, chooses provisional acceptance, direct revision, or rejection and re-[[prompt-engineering|prompting]], then verifies and justifies, returning to evaluation while the artifact is unfit.
4. **Verification, not volume of editing, is what evidences judgment.** Acceptance can demonstrate judgment when it follows explicit checking, while cosmetic or unsupported revision demonstrates nothing about the quality of the decision.
5. **Criteria are domain-specific and replaceable.** Accuracy, occupational standards, compliance, safety and audience fit differ by occupation; aesthetic appropriateness is one context-specific example rather than a universal standard.
6. **Process traces are partial evidence.** A prompt shows what was requested but not why, a version history shows what changed but not which standard guided it, and a rationale can be retrospective.
7. **Self-report cannot substitute for observed judgment.** Confidence, AI literacy scores and [[anxiety-and-stress|anxiety]] measures describe perception, and a confident student may still accept an inappropriate suggestion without verification.

## Three roles, three different questions

The paper's analytical contribution begins with a distinction that is easy to collapse. AI assessment puts the system in the evaluator's seat: [[feedback|automated feedback]], computer-based assessment and predictive systems improve the speed, scale or consistency of scoring, but they say nothing about the role a student assumes when generative AI hands them content to interpret. AI literacy is the broader competency context, and existing frameworks explicitly include [[critical-thinking|critical judgment]] within it, so the student appears there as a critical user of AI. AI evaluative judgment is narrower and situational: the student as decision-maker in relation to one particular artifact. The three overlap but answer different questions, and evidence for one is not evidence for another — an AI literacy score does not show that a student verified a specific output, and a well-scored artifact does not show who judged it. That separation is what makes the construct assessable.

## The loop, and why provenance matters

The AI evaluative judgment loop is presented as a control process, not a required sequence of edits. A learner evaluates the current state of an AI-supported artifact against vocationally relevant criteria, then takes one of three warranted actions: provisional acceptance, direct revision, or rejection with re-prompting. Every pathway leads to verification and a criterion-based justification, and an artifact that is not yet fit for purpose returns to evaluation; the loop exits only when the learner can verify the outcome and explain the decision. The distinctive move is that the object of judgment is not fixed across iterations. Verification followed by acceptance may leave the current version unchanged, whereas revision or re-prompting transforms both the artifact and its provenance, and each iteration therefore concerns a different state of the work. [[human-ai-collaboration|Human-AI collaboration]] of this kind also distributes accountability: the learner's [[agency|agency]] within a task does not displace institutional responsibility for [[assessment|assessment design]], [[governance|governance]] or the deployment of the system.

## Making judgment observable without surveillance

Because [[self-report-measures|self-report]] cannot show whether a student actually judged anything, the framework turns to [[process-oriented-assessment|process-oriented assessment]] evidence instead: prompt and response records, accepted and rejected suggestions, version histories, rationales, final artifacts and rubric scores. Two rules keep that evidence honest. First, traces are partial rather than transparent — off-platform activity, peer help and tacit professional knowledge may be missing entirely, which is why the authors recommend triangulating interaction records, versions, explanations and rubric judgments rather than trusting any one of them. Second, the analytic unit should be a judgment episode linking an artifact, an applied criterion, an action and its consequence, not a raw count of prompts or edits. The warning cuts both ways: a polished product can conceal weak conceptual judgment, and a limited visible edit can follow careful verification and warranted acceptance. The aim is a proportionate account of decisions and their basis, with [[privacy|privacy]] and governance safeguards on the trace data.

## What vocational settings change about the criteria

Vocational competence is not isolated technical skill but the integration of knowledge, skills and attitudes across school and workplace settings, and evidence of it is gathered through meaningful tasks under changing conditions. That makes the setting hospitable to the framework: AI-supported work can be judged inside an integrated account of performance rather than as generic facility with a tool, which is what [[authentic-assessment|authentic assessment]] asks of a task. It also creates a design tension the authors name rather than resolve. Rich vocational tasks make contextual judgment visible, but differences among occupations, workplaces, audiences and platforms reduce the comparability of performances, so a common decision process can be assessed across domains while the substantive criteria require domain-specific rubrics, practitioner input and moderation. An illustrative e-commerce task requires adapting AI-generated content for a specified product, audience and platform, identifying inaccuracies, revising the message and explaining its fitness. [[career-development-and-readiness|Work readiness]] is the stake: students must produce context-ready artifacts, not merely plausible ones.

## What this means for practice

- **Instructors.** Ask for the rationale behind an accepted AI suggestion, not only the final version: the framework treats justified acceptance as stronger evidence than an unexplained edit.
- **Assessment designers.** State the criteria explicitly — accuracy, occupational standards, compliance, safety, audience fit, [[ethics]] — and score the decision and its basis rather than the amount of human intervention.
- **Faculty developers.** Build calibration against practitioner standards, since the authors argue criteria must be specified in local tasks and rubrics rather than borrowed from a generic one.
- **Administrators.** Set rules for collecting interaction records and version histories before requiring them: the same traces that evidence judgment raise surveillance concerns.
- **Researchers.** Test the loop with deliberately flawed or mismatched AI content and compare observed decisions against AI literacy scores, confidence and anxiety rather than treating those as proxies.

## Limitations

- The review is narrative rather than systematic: purposive selection, principal searching from January to May 2026, an OpenAlex update on 8 September 2026, and a main window from January 2018 to September 2026.
- The source inventory is 41 publications and frameworks, and the authors state that the loop does not constitute empirical validation; no study in the reviewed corpus tests it.
- Direct empirical research on generative AI assessment in vocational settings was limited within the reviewed literature, so the application is a proposition rather than a settled finding.
- The scope is vocational and professional learning, and higher-education writing and integrity findings cannot simply be assumed to transfer to work-related tasks.
- Aesthetic appropriateness is retained as a future-facing area for development rather than a validated construct.
- The authors disclose that ChatGPT and Gemini supported drafting and language refinement and that OpenAI Codex supported editing and figure preparation, with all content verified by the authors.

## Citation

Zheng, Z., & Tang, Y. (2026). [*From AI assessment to AI evaluative judgement: evidencing human judgement in AI-supported vocational learning*](https://doi.org/10.3389/feduc.2026.1977173). *Frontiers in Education*, *11*, 1977173.
