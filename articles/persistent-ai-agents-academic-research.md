---
title: "Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study"
created: "2026-05-27T07:38:00-04:00"
updated: "2026-09-20T06:30:22-04:00"
type: article
foundations: [agentic-ai, ai-literacy, educational-development]
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring, learning-analytics, llm]
stakeholders: [student-experience]
research_method: [case study]
audience: [researchers]
level: [higher ed]
confidence: high
page_kind: [framework, evaluation]
sources: ['raw/papers/2605.26870.md']
---

Most evaluations of AI systems still treat them as models, benchmarks, or short conversational episodes. Alzahrani (2026) asks what happens when a persistent agent is embedded in a real research environment with durable memory, local files, external tools, scheduled routines, delegated roles, and explicit safety protocols. The unit of analysis is the coupled human–agent environment — researcher, runtime, memory layer, tools, repositories, scheduled jobs, protocols, governance rules — not "the model." This structured self-observed case study covers January 31 to May 25, 2026 (115 days) in one physician-scientist's workspace in [[research-methods-aied|preventive medicine and health data science]], via a Discord channel linked to a local workspace on a DigitalOcean VPS. Outcomes were descriptive: the study "does not estimate causal productivity effects."

> **Synthesis:** Persistent agentic infrastructure measurably expanded the capacity and scope of one researcher's work, but the evidence is a system description, not proof of efficiency. Recoverable main-agent telemetry held 75,671 de-duplicated records across 96 active days (ADF = 0.835), and the workspace held 502 memory-related files, 17 configured agent directories, and 57 skill files. A strict May subset captured 627 model-completed events and 73,950,305 recorded tokens, 82.9% of them cache reads — suggesting the economic unit may shift from cost per token to cost per completed artifact.

## Key Findings
1. Recoverable main-agent telemetry contained 75,671 de-duplicated records across 96 active days (ADF = 96/115 = 0.835): 8,059 user-role, 23,710 assistant-role, and 18,596 tool-result messages, 2,385 tool-call events, 1,286 model-completed events.
2. Active system time was 579.7 hours under the primary 30-minute capped-gap rule and 674.1 hours under the 60-minute sensitivity cap — system-activity estimates, not human labor hours.
3. The inventory identified 502 memory-related files, 17 configured agent directories, 57 skill files, 4,309 main-session files, and 5,760 all-agent session files.
4. Memory-derived records identified 482 output-proxy events (5.02 per active day) and 1,423 dated memory sections across 10 artifact-surface categories, while the same layer logged 889 failure, verification, correction, or protocol-proxy events (9.26 per day).
5. The strict May 1–May 25 subset held 73,950,305 recorded tokens: 61,278,669 cache-read (82.9%), 10,697,394 input, 754,633 output, 1,219,609 cache-write. Direct-spend tracking found approximately US$1,961 in observed system-related spending, with invoice reconciliation incomplete.

## What PARE-M Measures

PARE-M v0.1 (Persistent Agentic Research Environment Measurement) is the study's main methodological contribution, and it exists because the outcomes a persistent agent is meant to support — governance, reproducibility, cost per artifact — are invisible to episodic benchmarks. It separates utilization, output, resource, reproducibility, and governance measures: utilization covers active-day fraction, de-duplicated record count, message roles, tool-call and model-completed events, and active-time estimate; output combines memory-recorded output-proxy events with artifact-surface counts, since projects, manuscripts, and build products are not commensurable; resources treat input, output, cache-read, and cache-write tokens separately; governance captures failure, correction, and protocol-proxy events extracted by keyword rules. Reproducible components are the data schema, parsing rules, de-duplication logic, and active-time algorithm; a de-identified event ledger and parsing scripts are in preparation for preprint release.

## The Cache-Dominant Workflow

The resource profile is the paper's most striking empirical signal. Cache-read tokens made up 61,278,669 of 73,950,305 recorded May tokens, a cache-dominance ratio of 0.829. Provider routing explains part of that shape: the OpenAI Codex route carried 68.8M tokens at an 84.1% cache-read share, the OpenAI route 3.2M at 84.6%, the Anthropic route 1.9M at 35.2%, where cache-write tokens were concentrated. The author reads this as evidence that persisted context, not fresh inference, drove the workflow. The implication is economic: if persistent academic workflows become cache-dominant, the binding constraint may shift from raw generation cost toward integration, governance, privacy, reproducibility, and provider-routing reliability — making "cost per token" less informative than cost per artifact.

## Efficiency, Governance, and Reflexivity

The central negative finding concerns efficiency. Aggregate interaction volume did not demonstrate reduced human input; as memory, tools, and procedures accumulated, the scope of delegated work expanded, so the strongest observed pattern is capacity expansion rather than proven labor substitution. The author's testable hypothesis is artifact-level efficiency: comparable outputs may need fewer prompts, fewer corrections, lower active system time, or lower marginal cost once reusable memory and protocols exist. Governance followed the same logic — the memory layer preserving context also preserves safety rules, prior mistakes, citation requirements, and deployment checks. Implementation-science frameworks such as CFIR, RE-AIM, and NASSS are invoked because they treat technologies as adaptive sociotechnical interventions rather than static tools.

## What this means for practice

- **Instructors.** Decide in advance what you will count when you deploy a persistent agent — utilization, artifacts, resources, governance events — because none of that is visible in a chat transcript; this study's 889 governance events surfaced only because memory files were mined for them.
- **Researchers.** Token volume is the wrong scoreboard: this case recorded 73,950,305 tokens, which the author refused to treat as invoice cost.
- **Institutional decision-makers.** One investigator ran 17 configured agent directories and 502 memory-related files on a VPS with 4 vCPU, 7.8 GiB RAM, and a 154 GiB root disk (99 GiB used) — modest operational cost, unmeasured governance cost.
- **Anyone repeating this.** Fix denominators first: a pre-specified output register, baseline period, and independent coder would turn a case description into an evaluable claim.

## Limitations

- Single-investigator self-observed case: the author was user, system designer, data source, analyst, and beneficiary — one researcher, one project, no comparison condition, self-reported experience, results that may not generalize.
- No control group, no pre-specified output register, no baseline productivity period, and no independent coder for governance events; the 889 aggregate combines heterogeneous event classes and "should not be used as a rate until classified."
- Artifact categories were assembled retrospectively as a positive inventory — abandoned, failed, and never-started work was not counted, and file counts are vulnerable to inflation from software projects.
- Token telemetry covered only May 1–May 25, 2026 and should not be conflated with the full 115-day window or with cash cost, making causal productivity claims inappropriate.

## Connected Concepts

- [[agentic-ai]]
- [[educational-development]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[generative-ai]]
- [[higher-ed]]
- [[human-ai-collaboration]]
## Connected Articles

- [[ai-productivity-moderation]]
- [[agentic-workflows-education]]
- [[ai-changing-teaching-workflows]]
## Citation

Alzahrani, A. H. (2026). [*Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study*](https://arxiv.org/abs/2605.26870).
