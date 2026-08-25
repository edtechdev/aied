---
title: "CLARA: An AI-Augmented Analytics Dashboard for Collaboration Literacy"
created: "2026-05-19T04:33:04-04:00"
updated: "2026-08-24T04:41:06-04:00"
type: article
tags: [learning-analytics, generative-ai, llm, higher-ed, edtech-platform, collaborative-learning, retrieval-augmented-generation, knowledge-tracing, visualization]
sources: ['raw/papers/2605.17259.md']
confidence: high
---

## Key Findings

1. LLM-generated 7C collaboration assessments fall within the range of human expert variability: overall Spearman's ρ = .701 (p < .001) between LLM and human-consensus scores, and adding the LLM as an additional analyst did not reduce inter-rater agreement (Krippendorff's α .637 → .639).
2. Artifact-grounded retrieval nearly doubled recall on analytical queries, from Recall@5 = .371 (transcript-only) to .739 (all artifacts), because concept maps and collaboration assessments bridge the vocabulary gap between evaluative educator queries and informal student speech.
3. The full artifact-access agent was rated significantly higher than the transcript-only baseline on groundedness, analytical depth, and helpfulness, with an overall effect size of r = .792 (p = .001), while factual accuracy did not differ.
4. Concept maps and 7C assessments are complementary retrieval infrastructure — combining them outperforms either alone — and both are indexed into distinct vector-database collections to support mixed-initiative, human-AI reasoning over shared representations.

## Synthesis

> CLARA (Collaboration Literacy through Artifact Reasoning and Augmentation) introduces a novel architecture for [[learning-analytics]] where AI-produced artifacts — concept maps and seven-dimension collaboration assessments — serve as shared representations between human dashboard users and AI reasoning agents. By indexing these artifacts into distinct vector-database collections, CLARA establishes a human-AI common ground that simultaneously scaffolds human interpretation of collaboration data and grounds AI reasoning, improving both retrieval performance and response quality over transcript-only baselines. This dual-use architecture has implications beyond collaboration analytics: the principle of AI-produced artifacts as shared infrastructure could apply to [[intelligent-tutoring]], where student models, [[knowledge-tracing]] estimates, and concept maps could serve as common ground between tutor agents and teacher dashboards. The artifact-as-knowledge-infrastructure approach also resonates with [[rag]] patterns used in [[retrieval-augmented-tutoring-algorithm-kite]] and [[cyberscholar-genai-writing-feedback]], where structured content representations improve AI response quality. CLARA's focus on semantic dimensions beyond behavioral signals parallels the shift advocated by [[ai-tutor-behavioral-evaluation]] toward evaluating what students actually do, not just what the AI says.

## Background: Collaboration Literacy and Assessment

[[collaborative-learning|Collaboration literacy]] — the capacity to adapt to the evolving demands of group work — remains a persistent challenge for [[learning-analytics]]. Because concepts evolve and are negotiated through in-depth discussion, collaboration quality is difficult to assess through behavioral signals alone. Traditional analytics metrics capture behavioral indicators such as verbal participation rates and [[multimodal]] gesture/gaze patterns, yet they miss the semantic dimensions of discourse: how ideas are proposed, built upon, and integrated. The 7C framework, derived directly from the construct of collaboration literacy rather than task-specific process behaviors, characterizes discussions along seven dimensions — Climate, Communication, Compatibility, Conflict, Context, Contribution, and Constructive — but applying it relies on labor-intensive manual analysis that limits scalability. CLARA motivates using [[llm|large language models]] to automate this qualitative [[assessment]].

## System Design: Artifacts and the Agentic Workflow

CLARA turns discussions into a set of analytics artifacts that learners and educators can review and that an AI agent can search. Audio is transcribed per device using speech-to-text, and psycholinguistic metrics such as analytic thinking and certainty are computed at utterance level. After a session ends, an LLM generates two semantic artifacts: a [[knowledge-graph|concept map]] representing emergent ideas and their relationships (typed concepts and relations such as *supports*, *builds on*, and *challenges*), and a 7C collaboration assessment with a numeric score, analysis, and key evidence excerpts for each dimension. These artifacts are then embedded and indexed into distinct vector-database collections, so no chunking is required and retrieval remains controllable per representation.

The system wraps these collections in an [[agentic-ai|agentic workflow]] built on a ReAct loop (via LangGraph) that iteratively calls tools — semantic search across sessions, fetching transcripts, concept maps, assessments, and speaker profiles — until it has enough evidence to synthesize a grounded response. Mixed-initiative controls let users restrict which artifact types the agent may consult, supporting comparison across representations and a [[human-in-the-loop-ai|human-in-the-loop]] division of labor.

## Evaluation

The evaluation proceeds along three dimensions. First, automated 7C collaboration assessments were compared against human experts: LLM scores fell within the range of human variability, and an independent LLM judge found no significant difference in behavioral alignment or evidence correspondence between human-human and human-LLM analysis pairs. Second, agent responses generated with full artifact access were rated significantly higher than a transcript-only baseline on groundedness, analytical depth, and helpfulness, though not on factual accuracy — the advantage lies in depth and grounding rather than correctness. Third, retrieval performance was measured under four artifact configurations: on analytical queries, all-artifacts retrieval (Recall@5 = .739, MRR@5 = .942) far exceeded transcript-only retrieval (Recall@5 = .371), confirming that artifacts bridge the vocabulary gap between educator queries and student speech.

## Discussion: Human-AI Sensemaking

CLARA was designed around the idea that learners, educators, and AI should reason over the same representations. Rather than the conventional generate-and-consume pattern, where AI produces outputs a user accepts or rejects, the artifacts sit between user and AI as shared working material — visible, queryable, and interpretable by both. This practical notion of common ground suggests a design direction for [[ai-education|AI-augmented analytics]]: AI-generated representations as infrastructure that support ongoing [[human-ai-collaboration|inquiry]] from both sides, rather than as endpoints. The automated assessments also act as [[scaffolding|scaffolds]] rather than ground truth, making collaboration visible and discussable in ways raw transcripts or participation metrics do not.

## Implications

- **For collaboration analytics:** LLM-generated 7C assessments are reliable enough to serve as structured entry points for interpreting discussions, accelerating the otherwise slow feedback loop of observation, analysis, and debriefing that builds collaboration literacy.
- **For retrieval and grounding:** AI-produced artifacts can serve as self-created retrieval infrastructure, offloading the cognitive work of distilling noisy transcripts into analytical structure so agents can focus on synthesis — a pattern that generalizes beyond learning analytics.
- **For design:** Rather than systems where AI generates insights for users to accept or reject, designers should build systems where AI generates representations that become shared working material for both human sensemaking and AI reasoning.
- **For practice:** Artifacts give educators and learners a structured characterization to react to, agree with, push back on, or use as a starting point for deeper reflection — supporting the development of [[collaborative-learning|collaboration literacy]] itself.

## Connected Concepts

- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[rag]]
- [[collaborative-learning]]
- [[generative-ai]]
- [[knowledge-tracing]]
- [[student-modeling]]
## Connected Articles

- [[huang-interpretable-knowledge-tracing-2026]]
- [[retrieval-augmented-tutoring-algorithm-kite]]
- [[cyberscholar-genai-writing-feedback]]
- [[ai-tutor-behavioral-evaluation]]
## Citation

2026, A. (2026). [*CLARA: An AI-Augmented Analytics Dashboard for Collaboration Literacy*](https://arxiv.org/abs/2605.17259)
