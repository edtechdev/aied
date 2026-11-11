---
title: "When Code Is No Longer Enough for Programming Assessment in the GenAI Era"
created: "2026-11-11T11:30:00-05:00"
updated: "2026-11-11T11:30:00-05:00"
type: article
evidence_context: educational
page_kind: [framework]
research_method: [position paper]
audience: [instructors, assessment designers, administrators, researchers]
level: [higher ed]
discipline: [cs education]
sources: ['raw/papers/oyelere-code-programming-assessment-genai-2026.md']
source_url: "https://doi.org/10.1145/3856208.3856209"
source_depth: full text
confidence: high
pedagogy: [transfer-of-learning]
technology: [generative-ai, llm]
assessment: [assessment-validity, process-oriented-assessment, oral-assessment, authentic-assessment, automated-assessment]
ethics: [ai-use-disclosure]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Oyelere and Kadams argue that [[generative-ai|GenAI]] has broken the central inference of [[cs-education|programming education]]: that submitted code is good evidence of what a student knows. Their discussion paper names the resulting gap, which they call assessment evidence debt: the accumulated mismatch between the claims a grade makes and the evidence a final artifact can support. They propose a claim-evidence approach in which each task states what it claims, which AI conditions apply, and which channels supply evidence. Five channels are offered: constrained performance, process provenance, executable verification, interpretive defense, and transfer probes. None is presented as a fix. The contribution is an architecture for [[assessment-validity|assessment validity]], not another detection method.

## Key Findings

1. **The problem is validity, not only misconduct.** A programming submission is both a product and a trace of problem solving, and the same correct artifact can come from independent work, careful AI-assisted reasoning, or generated code the student cannot explain or repair.
2. **Assessment evidence debt names the gap.** The term describes what accumulates when assessment conditions change but the claims attached to grades do not; like technical debt it can be accepted deliberately or incurred by accident, and it compounds as early grades feed progression decisions.
3. **Five evidence channels replace the single artifact.** Constrained performance, process provenance, executable verification, interpretive defense, and transfer probes each support a different claim about competence and are meant to be combined rather than applied to every task.
4. **Three assessment conditions organize a course.** Controlled evidence restricts AI so foundational fluency can be observed, open evidence permits tools but requires records of decisions, and responsive evidence asks students to answer, repair, or adapt after producing an artifact.
5. **The common fixes are partial.** AI-proofing raises the cost of misuse without improving evidence, detection fails in both directions, disclosure does not demonstrate competence, and [[authentic-assessment|authentic tasks]] can still conceal who made which decisions.
6. **Evidence equivalence is unresolved.** A take-home project with full AI access and a supervised executable exam may address the same learning outcome while certifying different constructs, so treating their grades as comparable is a validity error.
7. **Marks should score the bundle.** The paper separates product quality, evidence quality, and responsive capability, and insists that a weak oral defense is not proof of unauthorized AI use.

## Why final code stopped carrying the claim

The paper starts from an assumption that long predates GenAI in [[higher-ed|higher education]]: if a student submits working code, the code is meaningful evidence of programming competence. That inference was never perfect, because collaboration, code reuse, excessive help, and automated [[feedback|feedback]] loops could all produce a correct submission without corresponding understanding. [[automated-assessment|Automated assessment]] strengthened the product-centered logic by making unit tests, static checks, and expected outputs the basis of grading at scale. Passing tests became easy to read as learning.

GenAI makes the inference unstable rather than merely imperfect. Code generators can produce plausible solutions, explain syntax, propose tests, debug errors, and transform code from natural language. One student may design and implement a solution independently, a second may generate a starting point and reason carefully about correctness, and a third may submit a program that passes tests but cannot be explained or adapted. All three produce the same artifact, and the grade cannot tell them apart. The paper's example is pointed: the danger is not only that students cheat, but that an assessment certifies competence with evidence that no longer warrants the claim. Citing Scarfe et al.'s blind examination study, it notes that human marking alone struggled to detect AI-written submissions that were, on average, graded higher than student work.

## The five channels and the architecture that holds them

The five channels are a map from claim to evidence rather than a checklist. Constrained performance covers foundational operations: short supervised tracing, Parsons problems, debugging, or micro-coding tasks under clear restrictions. [[process-oriented-assessment|Process provenance]] covers the programming process through commit history, design notes, permitted [[ai-use-disclosure|AI-use declarations]], and brief rationales for major revisions. Executable verification covers judgment about correctness through student-authored tests with expected outputs, boundary cases, and interpretation of failures. Interpretive defense covers understanding of the submitted artifact through a lightweight viva, recorded walkthrough, annotated code, or random [[oral-assessment|oral audit]]. Transfer probes cover [[transfer-of-learning|learning transfer]] through unseen modification, bug injection, a changed requirement, or repair after submission.

These sit inside three assessment conditions. Controlled evidence restricts GenAI and other assistance so that foundational fluency can be observed. Open evidence permits tools but requires evidence of decisions, verification, and revision, as in projects, portfolios, or development logs. Responsive evidence comes after production, when a student answers a question, repairs a fault, or adapts the work. The paper argues that a defensible program usually contains all three conditions, though not in equal proportion.

The architecture is meant to be designed at program level, not task by task. A single assessment cannot support every claim about programming competence, so a program decides where individual fluency must be demonstrated, where tool-supported development is practiced, where verification is taught, and where work is defended or transferred. That distribution is more sustainable, the authors argue, than repeatedly redesigning assignments against each new AI capability. The proposal also couples AI-use policy to evidence design without conflating them: a task can be AI-permitted and still invalid if it collects the wrong evidence, and AI-restricted and still invalid if it assesses memorization while the outcome concerns software design.

## Scoring the bundle, and where the line sits

Collecting richer evidence does not improve validity if the marking scheme collapses everything back into final functionality. The paper therefore asks for three separate judgments: product quality, meaning whether the software satisfies requirements and runs reliably; evidence quality, meaning whether tests, design notes, provenance records, and explanations support the claim that the student made informed decisions; and responsive capability, meaning whether the student can answer questions, repair faults, or transfer the artifact to a changed requirement. Weighting should vary by level. An early CS1 module might weight controlled fluency and explanation heavily, while a final-year project might weight open production, verification, documentation, and defense.

The paper is careful about the boundary between weak evidence and misconduct. A poor interpretive defense may reflect anxiety, a language barrier, weak preparation, or uneven prior experience rather than unauthorized AI use, and a clear AI-use declaration does not prove strong competence. Evidence gaps should support [[assessment|assessment]] interpretation and, where substantiated, misconduct processes, not suspicion by default. The practical device is an assessment condition statement in the task brief: the claim being assessed, the permitted GenAI condition, the required evidence channels, the role of each channel in marking, and the main threats to inference.

A worked example makes the shift concrete. A second-year take-home project might claim that students can interpret a specification, implement a maintainable solution, test expected and unexpected behavior, and explain design tradeoffs. Foundational fluency is then sampled through a short supervised task, implementation through the repository, verification through student-authored tests and a note on why the cases matter, understanding through a five-minute walkthrough or selective oral audit, and transfer through an unseen modification such as adding an input constraint or fixing an injected bug. The repository remains important, but it is no longer asked to prove everything.

## What this means for practice

- **Instructors:** rewrite each major brief as an assessment condition statement, naming the claim, the permitted AI use, the required evidence, and the threats to inference, so students know what the grade will mean.
- **Assessment designers:** add one responsive channel to every artifact-heavy task, whether a two-minute code walkthrough, a small unseen modification, or a repair task, rather than relying on detection.
- **Administrators:** plan evidence across a program instead of policing single assignments, and fund the staff time that oral audits and verification marking require.
- **Researchers:** test whether evidence bundles actually support stronger inferences than final artifacts, since the paper offers an architecture and no validity evidence for the design as a whole.

## Limitations

This is a discussion paper, not an empirical study: it reports no data, no implementation trial, and no validity evidence for the architecture as a whole. The claim-evidence approach is assembled from established assessment theory, argument-based validity, and evidence-centered design, and its novelty is architectural rather than instrumental. The paper does not estimate the staff workload, cost, or accessibility consequences of oral audits, process records, and transfer probes, and it acknowledges that oral assessment raises design questions about stress, repetition, peer learning, and workload. It also leaves evidence equivalence unresolved: if different AI conditions certify different constructs, the paper raises the question of whether courses should report the conditions under which competence was evidenced but does not answer it. Readers should treat the framework as a design agenda to be tested, not as a validated model.

## Citation

Oyelere, S. S., & Kadams, A. A. (2026). [*When Code Is No Longer Enough for Programming Assessment in the GenAI Era*](https://doi.org/10.1145/3856208.3856209). In Proceedings of the 26th Koli Calling International Conference on Computing Education Research (Koli Calling '26). ACM.
