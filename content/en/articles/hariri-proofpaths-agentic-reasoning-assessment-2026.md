---
title: "ProofPaths: An AI Agent Framework for Assessing Student Reasoning"
created: "2026-11-08T08:46:00-05:00"
updated: "2026-11-08T08:46:00-05:00"
type: article
page_kind: [framework]
research_method: [system development]
evidence_context: educational
level: [higher ed, undergraduate]
audience: [instructors, assessment designers, software developers, researchers]
sources: ['raw/papers/2611.03882.md']
source_url: "https://arxiv.org/abs/2611.03882"
source_depth: full text
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-08"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [academic-integrity, human-ai-collaboration, agentic-ai]
technology: [llm, human-in-the-loop-ai]
assessment: [assessment, automated-assessment, authentic-assessment, oral-assessment, evaluative-judgment]
pedagogy: [metacognition, help-seeking]
---

> **Synthesis:** Hariri and Chaudhary (2026) describe ProofPaths, an [[agentic-ai|agentic]] [[assessment|assessment]] framework built on a narrow premise: a correct AI-assisted submission does not show that a student understands the reasoning behind it, so grading should be paired with an individualized [[oral-assessment|interview]] in which the student explains their own steps. Three [[llm|LLM]] grading agents — reviewing correctness, rigor, and the risk of awarding unwarranted credit — grade concurrently, read each other's reviews, revise, and the median-scoring review supplies the grade and feedback. A separate interview agent asks the student to justify specific steps, links every question to a numbered excerpt retrieved from their submission, and labels each answer understood, partially understood, or not understood. The paper reports architecture and deterministic controller tests with scripted agent responses, not a classroom evaluation: there is no student sample, no comparison condition, and no evidence that the labels or confidence estimates track instructor judgment.

## Key Findings

1. **The design target is explanation, not detection.** ProofPaths starts from completed work and asks the student to account for it, the same relationship Kannam et al. built with teaching-assistant code interviews but delivered through an agent and typed responses.
2. **Three grading perspectives with a median aggregation.** Agents assigned to correctness, rigor, and unwarranted-credit risk grade concurrently, then revise after reading each other; the median score selects which review supplies the grade, bounding the influence of one outlier.
3. **Every interview question is tied to a retrieved excerpt.** The agent returns an excerpt identifier that a controller validates against a prepared set of at most 24 passages, and unused excerpts are preferred while any remain.
4. **Follow-up selection uses a psychometric model.** Multidimensional [[item-response-theory|item response theory]], implemented through the Scorio library, estimates student ability and guides which question comes next.
5. **Judgments are retained for inspection.** Grading reviews, criterion scores, interview transcripts and the excerpt each question cited are stored per submission, and instructors can override grades inside the assignment workflow.
6. **Validation is limited to structural rules.** Deterministic tests with prepared agent responses check source retrieval, score aggregation, scale reconciliation and bounded correction attempts — explicitly not question relevance or criterion-to-overall consistency.
7. **The authors name the independence problem.** Because grading agents exchange critiques, their agreement is not independent corroboration even when different underlying models are used, and confidence estimates plus understanding labels still need calibration against instructor judgments.

## Why the architecture is worth reading even without evidence

The wiki has many pages on [[automated-assessment|automated grading]] and several on [[academic-integrity|integrity in AI-assisted work]]; what is scarce is a design that treats the two as one problem. Existing tools answer "is this submission correct" (autograders, rubric scoring) or "did the student do this themselves" (proctoring, authorship signals). ProofPaths answers a third question: can the student explain the decisions in a submission they may have produced with AI help. That question is the one an instructor actually needs answered when the artifact is no longer evidence of learning, and it is the reason the interview is separate from grading — credit still comes from the rubric, while the explanation is retained as evidence for a human to read.

The mechanism that makes this more than a chatbot is the excerpt binding. Each question must cite a numbered passage from the student's own submission, the controller rejects identifiers outside the prepared set, and the interview prefers unused excerpts so coverage spreads across the work rather than circling one sentence. Because the source text is retrieved by identifier rather than regenerated, notation survives intact. The paper's worked example is instructive: a student correctly computes a least-squares solution and explains uniqueness by saying every quadratic loss has a minimizer; the follow-up duplicates a feature in the design matrix, the fitted values stay the same while the coefficients change, and the student's recognition of the missing rank condition becomes visible. That is a targeted probe of an assumption behind a correct answer, which is precisely what a rubric cannot see.

## What the framework does not yet establish

The paper is honest that the deterministic tests verify plumbing, not pedagogy. Controller checks confirm that scores land in range, that the maximum scale is common across reviewers, that excerpt identifiers resolve, and that correction attempts are bounded. They do not test whether a question is relevant, whether criterion scores are consistent with the overall score, or whether the review agents use the same criterion names — and the authors state that reviewers are not required to. Nothing in the paper tests whether the interview's understanding labels agree with an instructor's judgment, which is the load-bearing claim for any use beyond a [[formative-assessment|formative]] prompt. Nor is there a deployment study: latency depends on institutional high-performance computing capacity and contention, and course use would require policies for access to and retention of student content across services.

Two design limits deserve emphasis because they bound what the tool can claim. First, excerpt extraction follows text order, so with long submissions the prepared passages can overlap or omit later portions — coverage is a function of question count and extraction, not of the whole solution. Second, written responses are not the oral exchanges that human-led code interviews rely on, which raises an [[accessibility|accessibility]] question the authors acknowledge rather than resolve. Their sharpest caution is about misuse: browser activity reports alone cannot establish unauthorized assistance or justify a misconduct finding, which is the right boundary for a system that records process rather than proving authorship.

## What this means for practice

- **Instructors.** Use an explanation interview as a separate evidence channel from the rubric score — a correct submission plus an unable-to-explain student is the signal a grade alone cannot produce.
- **Assessment designers.** Bind every follow-up question to a specific excerpt of the student's work and keep the exchange for review; a transcript without cited passages cannot be audited.
- **Software developers.** Enforce controller-level invariants (score bounds, common scale, valid excerpt identifiers) rather than trusting agent output, and version model, skill and decoding settings so a result can be reproduced.
- **Administrators.** Do not treat interview transcripts or activity logs as misconduct evidence on their own; the framework's own authors draw that line.

## Limitations

- No empirical evaluation: no student sample, no classroom deployment, no comparison with instructor grading or with human-led interviews.
- The reported tests are deterministic checks against scripted agent responses, covering source handling, score aggregation and correction bounds only.
- Grading agents share critiques before revising, so their convergence is not independent verification, and the median aggregation bounds outliers without establishing validity.
- Confidence estimates and understanding labels are uncalibrated against instructor judgments.
- Excerpt extraction proceeds in text order and caps at 24 passages, so long or structurally unusual submissions may not be fully covered.
- Typed responses differ from the oral exchanges in human-led interviews, with unresolved language-accessibility implications.

## Citation

Hariri, M., & Chaudhary, V. (2026). [ProofPaths: An AI Agent Framework for Assessing Student Reasoning](https://arxiv.org/abs/2611.03882). arXiv:2611.03882. Accepted at the 8th Workshop on Education for High Performance Computing (EduHiPC 2026).
