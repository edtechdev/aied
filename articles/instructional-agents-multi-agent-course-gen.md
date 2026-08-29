---
title: "Instructional Agents: Reducing Teaching Faculty Workload through Multi-Agent Instructional Design"
created: "2026-08-06T04:33:04-04:00"
updated: "2026-08-26T15:35:00-04:00"
type: article
tags: [agentic-ai, llm, instructional-design, edtech-platform, higher-ed, teacher-role, automated-assessment, faculty-development]
research_method: [system development]
audience: [teacher support, faculty development]
level: [higher ed]
category: [instructional design]
sources: ['raw/papers/instructional-agents-multi-agent-course-gen.md']
confidence: high
---

> **Synthesis:** Instructional Agents is a multi-agent [[llm|LLM]] framework that automates end-to-end course material generation by simulating role-based collaboration among Teaching Faculty, Instructional Designer, Teaching Assistant, Course Coordinator, and Program Chair agents, all structured around the ADDIE [[instructional-design|instructional design]] framework. Evaluated across 5 university courses, the system supports four modes (Autonomous, Catalog-Guided, Feedback-Guided, Full Co-Pilot) balancing automation and [[human-in-the-loop-ai|human oversight]].

## System Design

The framework maps the first three phases of the **ADDIE** framework (Analyze, Design, Develop) onto a multi-agent workflow:

- **Analyze**: Teaching Faculty + Course Coordinator produce an Instructional Foundation Report (objectives, learner profiles, constraints)
- **Design**: Teaching Faculty + Instructional Designer structure syllabi, slide outlines, and [[assessment]] plans
- **Develop**: Teaching Assistant generates concrete materials (slides, scripts, assessments); Program Chair reviews from a program-level perspective; Test Student agent supplies [[simulating-students|simulated learner]] feedback

The Teaching Faculty agent serves as the primary authority throughout, maintaining continuous oversight. The authors explicitly scope the work to the first three ADDIE phases, deferring Implementation and Evaluation to human oversight before AI-generated materials reach real students.

## Four Interaction Modes

1. **Autonomous** — fully automated generation with no human input
2. **Catalog-Guided** — human provides a course catalog description as seed input
3. **Feedback-Guided** — human reviews and provides iterative feedback between phases
4. **Full Co-Pilot** — tight human-AI collaboration throughout all phases

In all human-in-the-loop modes, Teaching Faculty retain final approval — AI output serves as a draft for human refinement, not an assumed-ready artifact.

## Key Findings

- **More human involvement improves quality.** Full Co-Pilot Mode consistently achieves the highest quality, improving human-rated scores by **0.5–0.9 points** over Autonomous Mode, especially on Learning Objectives, Slide Scripts, and the overall Instructional Package.
- **Cheapest backend matches the best.** Across the three GPT backends tested (gpt-4o, gpt-4o-mini, o1-preview), a Friedman test found **no significant quality differences** (Q = 0.473, p = 0.789) — making gpt-4o-mini the default on cost grounds (~$0.15 vs $2.50–$15.00 per million tokens).
- **Human and LLM reviewers diverge.** LLM reviewers assign tightly clustered, moderate scores (≈2.9–3.1), while human evaluators show a broader, more discriminating range — so the authors rely on human assessment as the primary quality signal.
- **Role specialization matters.** In ablation studies, the single-agent baseline scored worst overall (Avg = 2.33); removing the Instructional Designer sharply hurt Learning Objectives and Syllabi clarity, removing Teaching Faculty degraded syllabi and slides, and removing the Teaching Assistant lowered structural component quality.
- **All modes clear the quality bar.** Every material type averages above 3.0/5.0 across modes, with Learning Objectives and Slides rated highest and Slide Scripts slightly lower.
- **Automation saves time at a quality cost.** Autonomous Mode is cheapest and fastest (≈0 human minutes, $0.22/course) but lowest quality; Full Co-Pilot yields best quality at 30–45 minutes of faculty effort and $0.36/course.

## Evaluation

Evaluated across 5 university-level courses (Data Mining, Foundations of Machine Learning, Data Processing at Scale, Introduction to AI, Topics in Reinforcement Learning) using both human and automated reviewers, with an adapted **Quality Matters (QM) Higher Education Rubric** covering six outputs: Learning Objectives, Syllabi, Assessments, Final Slides, Slide Scripts, and the overall Instructional Package. Key findings:

- Produces high-quality materials that are reviewed and refined by teaching faculty prior to classroom use
- Significantly reduces time required to prepare classroom-ready content
- Multi-agent collaboration preserves pedagogical coherence better than single-model approaches
- Trade-offs exist between automation level and output quality — Feedback-Guided and Full Co-Pilot modes produce higher-quality outputs at the cost of more human involvement

## Significance

- **Scalable instructional design** — supports institutions with limited instructional design capacity (community colleges, international programs, underserved settings)
- **Democratizing access** — reduces barriers to high-quality course material creation, especially in underserved or resource-constrained settings
- **Role-based coherence** — simulates real-world instructional collaboration rather than treating generation as an isolated task
- **Source code available** at the project website

## Limitations

- Focuses on the Analyze, Design, and Develop phases only; Implementation and Evaluation require real-world deployment not covered here.
- Limited support for rich visual and interactive elements important to modern [[pedagogy]].
- Bias analysis was auxiliary only (CEAT-based), not a primary evaluation objective.
- Human feedback is incorporated mainly through regeneration rather than fine-grained, targeted editing of specific content.

## Connected Concepts

- [[higher-ed]]
- [[llm]]
- [[instructional-design]]
- [[agentic-ai]]
- [[curriculum-design]]
- [[faculty-development]]
- [[generative-ai]]
- [[ai-ed-evaluation]]
- [[scaffolding]]
- [[pedagogical-agent]]

## Connected Articles

- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[agentic-ai-education-scoping-review]] — Agentic AI in Education: A Scoping Review of Research Landscape, Capabilities, and the Frontier Agent Paradigm

## Citation

Yao, H., Xu, W., Turnau, J., Kellam, N., & Wei, H. (2026). [*Instructional Agents: Reducing Teaching Faculty Workload through Multi-Agent Instructional Design*](https://aclanthology.org/2026.eacl-long.191). In *Proceedings of EACL 2026*.
