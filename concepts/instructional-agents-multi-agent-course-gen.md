---
title: "Instructional Agents: Reducing Teaching Faculty Workload through Multi-Agent Instructional Design"
created: 2026-08-06
updated: 2026-08-06
type: concept
tags: [multi-agent, llm, instructional-design, course-generation, addie, higher-ed, teacher-support, automated-courseware, faculty-development]
sources: [raw/papers/instructional-agents-multi-agent-course-gen.md]
confidence: high
---

> **Synthesis:** Instructional Agents is a multi-agent LLM framework that automates end-to-end course material generation by simulating role-based collaboration among Teaching Faculty, Instructional Designer, Teaching Assistant, Course Coordinator, and Program Chair agents, all structured around the ADDIE instructional design framework. Evaluated across 5 university courses, the system supports four modes (Autonomous, Catalog-Guided, Feedback-Guided, Full Co-Pilot) balancing automation and human oversight.

# Instructional Agents: Reducing Teaching Faculty Workload through Multi-Agent Instructional Design

## System Design

The framework maps the first three phases of the **ADDIE** framework (Analyze, Design, Develop) onto a multi-agent workflow:

- **Analyze**: Teaching Faculty + Course Coordinator produce an Instructional Foundation Report (objectives, learner profiles, constraints)
- **Design**: Teaching Faculty + Instructional Designer structure syllabi, slide outlines, and assessment plans
- **Develop**: Teaching Assistant generates concrete materials (slides, scripts, assessments); Program Chair reviews from a program-level perspective; Test Student agent supplies simulated learner feedback

The Teaching Faculty agent serves as the primary authority throughout, maintaining continuous oversight.

## Four Interaction Modes

1. **Autonomous** — fully automated generation with no human input
2. **Catalog-Guided** — human provides a course catalog description as seed input
3. **Feedback-Guided** — human reviews and provides iterative feedback between phases
4. **Full Co-Pilot** — tight human-AI collaboration throughout all phases

## Evaluation

Evaluated across 5 university-level courses using both human and automated reviewers. Key findings:

- Produces high-quality materials that are reviewed and refined by teaching faculty prior to classroom use
- Significantly reduces time required to prepare classroom-ready content
- Multi-agent collaboration preserves pedagogical coherence better than single-model approaches
- Trade-offs exist between automation level and output quality — Feedback-Guided and Full Co-Pilot modes produce higher-quality outputs at the cost of more human involvement

## Significance

- **Scalable instructional design** — supports institutions with limited instructional design capacity
- **Democratizing access** — reduces barriers to high-quality course material creation, especially in underserved settings
- **Role-based coherence** — simulates real-world instructional collaboration rather than treating generation as an isolated task
- **Source code available** at the project website

## Citation

Yao, H., Xu, W., Turnau, J., Kellam, N., & Wei, H. (2026). [*Instructional Agents: Reducing Teaching Faculty Workload through Multi-Agent Instructional Design*](https://aclanthology.org/2026.eacl-long.191). In *Proceedings of EACL 2026*.

## Related Pages

- [[instructional-design]]
- [[multi-agent]]
- [[llm]]
- [[teacher-support]]
- [[higher-ed]]
- [[faculty-development]]
- [[course-generation]]
- [[automated-courseware]]
