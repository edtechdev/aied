---
title: "Measuring Whether LLM Tutors Teach or Solve: A Diagnostic for Educational Impact"
created: 2026-06-16
updated: 2026-06-16
type: article
tags: [intelligent-tutoring, llm, feedback-loop, scaffolding, benchmark, learning-analytics, student-experience, agentic-ai, k-12]
sources: ['raw/papers/2606.16206.md']
confidence: high
---

Studies whether public LLM tutoring benchmarks distinguish learning-supportive behavior from mere answer production. Proposes a lightweight diagnostic based on the gap between solving-oriented and pedagogy-oriented benchmark performance. Using MathTutorBench, shows correlation between solving and pedagogy composites is only r=0.421 across 8 models, with several models shifting rank when evaluated on pedagogy. Benchmarks reward guiding questions, calibrated hints, and non-disclosive scaffolding. Recommends reporting solving and pedagogy scores separately.

## Key Findings

- Stronger task-solving ability does **not necessarily imply stronger learning support**: a response that looks helpful can be pedagogically harmful by giving away the answer.
- Using public **MathTutorBench** leaderboard results across **eight publicly reported models**, the correlation between solving-oriented and pedagogy-oriented composite scores is only **r = 0.421**, and **several models shift meaningfully in rank** when evaluation moves from solving to pedagogy.
- Analysis of the public **TutorBench sample** shows that agency-relevant behaviors are **explicitly encoded in benchmark rubrics**, especially in active-learning settings that reward **guiding questions, calibrated hints, and non-disclosive scaffolding**.
- The proposed diagnostic is **lightweight**: it is based on the gap between solving-oriented and pedagogy-oriented benchmark performance, requiring no new data collection.
- The authors argue that **educational-impact evaluation should not treat task success as a sufficient proxy for learning support**.

## Study Design & Method

The diagnostic exploits the fact that public tutoring benchmarks (MathTutorBench, TutorBench) score models on multiple rubrics. By separating rubric items into solving-oriented and pedagogy-oriented composites, the authors compute a per-model gap that reveals whether a model's benchmark standing reflects teaching quality or merely answer production. The correlational analysis across eight models quantifies how partially aligned the two dimensions are, while the rubric analysis identifies which specific behaviors — guiding questions, calibrated hints, non-disclosive scaffolding — benchmarks already reward.

## Implications for AI in Education

For the [[benchmark]] community and for AI tutor deployment, the findings argue for **reporting solving-oriented and pedagogy-oriented scores separately** and for making disclosure-sensitive, student-agency-preserving criteria more explicit. A model that tops a solving leaderboard should not be assumed to be a good tutor; evaluation infrastructure must measure learning support directly. This connects to [[scaffolding]] and to the design of [[ai-tutoring]] systems where the goal is not the fastest answer but durable student understanding.

## Connected Concepts

## Connected Articles



- [[llm-judged-helpfulness-pedagogy-signal]] — Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models
- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[human-ai-collaboration-prerequisite-functions]] — What do you mean by human-AI collaboration: Prerequisite functions and the affordances needed to achieve it
- [[persistent-ai-agents-academic-research]] — Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study
- [[rethinking-scaffolding-llm-tutors]] — Rethinking Scaffolding in LLM Tutors: The Interactional Mismatch Between Benchmarks and Real-World Deployments
- [[multi-agent-llm-social-learning]] — Beyond the AI Tutor: Social Learning with LLM Agents
