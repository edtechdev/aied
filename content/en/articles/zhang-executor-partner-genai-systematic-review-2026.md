---
title: "From Executor to Partner: A Regulated Learning Framework for Human-Generative AI Collaboration in Systematic Reviews"
created: "2026-11-09T09:05:00-05:00"
updated: "2026-11-09T09:05:00-05:00"
type: article
page_kind: [framework]
research_method: [position paper]
evidence_context: educational
level: []
audience: [researchers, faculty developers]
sources: ['raw/papers/zhang-executor-partner-genai-systematic-review-2026.md']
source_url: "https://osf.io/preprints/edarxiv/7qd64_v1/"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [human-ai-collaboration, agency, academic-integrity]
pedagogy: [self-regulated-learning, metacognition]
technology: [generative-ai, llm]
assessment: []
methods: [ai-assisted-educational-research, qualitative-research]
institutions: []
ethics: []
---

> **Synthesis:** Zhang, Wang, and Maeda argue that a systematic review is not only a methodological procedure but a regulated learning system, and map review activity onto Zimmerman's forethought, performance, and reflection cycle. Regulation is nested: a macro cycle governs the review, while each stage carries its own micro cycle. They borrow Hadwin, Järvelä, and Miller's distinction among self-, co-, and socially shared regulation to separate three modes of [[human-ai-collaboration]]: [[generative-ai]] as delegated executor, co-regulatory influence, or partner in shared regulation. Applying the framework to 60 GenAI-assisted evidence syntheses published through July 2026, they found applications concentrated in title-and-abstract screening (more than 50% of the syntheses) and data extraction (around 40%), with human-led [[self-regulated-learning]] predominating, co-regulation episodic, and shared regulation rarely observed. The distinction worth keeping is that the mode depends on regulatory consequence, not on how much work is delegated: screening thousands of records under fixed human rules is still execution. The paper reports no new empirical data; the review of 60 syntheses is a companion study.

## Key Findings
1. Across 60 evidence syntheses published through July 2026, GenAI use was reported across all review stages but clustered in title-and-abstract screening (more than 50% of the syntheses) and data extraction (around 40%).
2. GenAI's regulatory involvement was mainly micro-level, inside individual stage cycles; regulation of the whole review stayed with human reviewers, who set goals, configured the system, and judged outputs.
3. Within stages, direct contributions concentrated in the performance phase, especially control activities: assessing eligibility, extracting information, and generating risk-of-bias judgments; forethought and reflection involvement was selective.
4. The review found no explicit applications supporting motivational regulation (self-efficacy, task value, interest) and little evidence of GenAI used metacognitively to monitor or evaluate the review process.
5. Human-led self-regulation with GenAI assistance predominated, co-regulation appeared episodically, and shared regulation was rarely observed, leaving GenAI's potential as a regulatory partner largely unrealized.
6. One case shows co-regulation: ChatGPT judged a study eligible with a rationale tied to the inclusion criteria, and the reviewer reversed an exclusion resting on a mistaken assumption about a South African university's linguistic context.

## Regulation beneath the workflow
The workflow names its steps, from problem identification through synthesis, and PRISMA reporting makes them auditable. What it does not describe is the cognitive and motivational work: setting standards, choosing strategies, noticing discrepancies, resolving conflicting judgments, revisiting decisions. The authors call this regulation. Zimmerman's three phases supply the architecture, retained while the paper drops the "self-" prefix from subprocess labels: the unit of analysis is a reviewer working with GenAI, not a learner alone.

The nested claim is the useful structural move. A macro cycle runs across the review and a micro cycle inside each stage, so searching is a complete cycle: forethought sets coverage goals and selects databases and terms, performance executes and monitors relevance and volume, reflection judges breadth and completeness, then revises and reruns. Macro goals constrain micro cycles, and micro findings can send the team back to revise the protocol. Motivational beliefs such as confidence and task value belong to forethought, though PRISMA rarely makes them explicit.

## Three modes and the test of regulatory consequence
Hadwin and colleagues distinguish self-, co-, and socially shared regulation by how regulatory processes are socially situated, not by who is present. Translated to [[human-ai-collaboration]], this yields three modes: human-led self-regulation with GenAI assistance, human-GenAI co-regulation, and human-GenAI shared regulation. In the first, GenAI is a delegated executor inside a human-defined structure; [[agency]] stays with reviewers, who set goals, criteria, prompts, and procedures and evaluate output.

Co-regulation requires regulatory consequence. Two different judgments are not enough: overriding an AI exclusion changes nothing. Co-regulation is observed when one agent's contribution changes how the other subsequently plans, performs, monitors, evaluates, or adapts, and it runs in either direction, since reviewers also correct and re-instruct the model. Shared regulation has the highest evidentiary bar: collectively agentic goal negotiation and joint [[metacognition|metacognitive]] control. Following Floridi, the authors allow artificial agency without consciousness but keep epistemic, methodological, and [[academic-integrity|ethical accountability]] with humans. The modes are conceptual distinctions, not a hierarchy.

## What the 60 syntheses showed
The empirical section maps reported practice, not an experiment. Sixty evidence syntheses published through July 2026, on any topic, were coded for how GenAI was used, including unintentional effects on regulation. The distribution is lopsided: screening and extraction dominate, while identification, full-text screening, risk-of-bias assessment, and synthesis trail behind. Direct GenAI contributions sit in performance; humans hold forethought and reflection. Few syntheses used GenAI to regulate the process itself, and none reported support for motivational regulation.

They read this as diagnostic. Separating execution from regulation shows that current applications optimize time and effort while the regulatory uses described here remain untapped. Their explanation: PRISMA and major synthesis handbooks give reviewers no model beyond task execution. They also caution that the evidence captures only what authors documented, so co-regulatory uses may have happened unreported. Shared regulation, they conclude, will not emerge from repeated prompting.

## What this means for practice

- **Instructors.** Teach the review as a regulation exercise, not a checklist: have students state coverage goals, monitoring criteria, and revision rules before prompting a model, then shift GenAI toward co-regulator as expertise grows.
- **Instructors.** Require a decision log of prompts, disagreements with model output, and resulting changes to criteria, because the review found co-regulation only where such exchanges were documented.
- **Faculty developers.** Address the motivational side the 60 syntheses left untouched: confidence, task value, and workload planning, which the authors place inside forethought.
- **Review teams.** Budget for the work GenAI adds (prompt development, input preparation, configuration, verification, adaptation) and decide per stage which mode is appropriate.
- **Tool developers.** Design agents that ask for goal clarification, flag inconsistencies, and invite revision, and evaluate them on support for human regulation, not just accuracy and speed.

## Limitations

- The framework is conceptual and reports no new empirical data; its only empirical support is a companion review listed as Authors (in preparation).
- Evidence depends on what the 60 syntheses described, so undocumented co-regulatory or shared uses cannot be ruled out, a caveat the authors state.
- The modes are conceptual distinctions, not measured constructs, and not a hierarchy; no study here tests whether any mode improves rigor or efficiency.
- The review covers syntheses published through July 2026, and the systems it reports include ChatGPT; the authors call for comparative case studies and design-based research before this becomes workflow guidance.
- No explicit applications addressed motivational regulation, so that part rests on proposal, not observed practice.

## Citation
Zhang, Z., Wang, X., & Maeda, Y. (2026). [*From Executor to Partner: A Regulated Learning Framework for Human-Generative AI Collaboration in Systematic Reviews*](https://osf.io/preprints/edarxiv/7qd64_v1/). EdArXiv preprint (v1).
