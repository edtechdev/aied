---
title: "Measuring Whether LLM Tutors Teach or Solve: A Diagnostic for Educational Impact"
created: "2026-06-16T04:33:04-04:00"
updated: "2026-09-16T15:47:46-04:00"
type: article
foundations: [agentic-ai]
pedagogy: [scaffolding]
technology: [intelligent-tutoring, learning-analytics, llm]
assessment: [feedback]
audience: [learners, software developers]
level: [k 12]
sources: ['raw/papers/2606.16206.md']
confidence: high
page_kind: [evaluation, framework]
methods: [benchmark]
---

> **Synthesis:** Studies whether public [[llm]] tutoring benchmarks distinguish learning-supportive behavior from mere answer production. Proposes a lightweight diagnostic based on the gap between solving-oriented and [[pedagogy]]-oriented benchmark performance. Using MathTutorBench, shows correlation between solving and pedagogy composites is only r=0.421 across 8 models, with several models shifting rank when evaluated on pedagogy. Benchmarks reward guiding questions, calibrated hints, and non-disclosive scaffolding. Recommends reporting solving and pedagogy scores separately.

## Key Findings

- Stronger task-solving ability does **not necessarily imply stronger learning support**: a response that looks helpful can be pedagogically harmful by giving away the answer.
- Using public **MathTutorBench** leaderboard results across **eight publicly reported models**, the correlation between solving-oriented and pedagogy-oriented composite scores is only **r = 0.421**, and **several models shift meaningfully in rank** when evaluation moves from solving to pedagogy.
- Analysis of the public **TutorBench sample** shows that agency-relevant behaviors are **explicitly encoded in benchmark rubrics**, especially in [[active-learning]] settings that reward **guiding questions, calibrated hints, and non-disclosive scaffolding**.
- The proposed diagnostic is **lightweight**: it is based on the gap between solving-oriented and pedagogy-oriented benchmark performance, requiring no new data collection.
- The authors argue that **educational-impact evaluation should not treat task success as a sufficient proxy for learning support**.

## Study Design & Method

The diagnostic exploits the fact that public tutoring benchmarks (MathTutorBench, TutorBench) score models on multiple rubrics. By separating rubric items into solving-oriented and pedagogy-oriented composites, the authors compute a per-model gap that reveals whether a model's benchmark standing reflects [[teacher-role|teaching]] quality or merely answer production. The correlational analysis across eight models quantifies how partially aligned the two dimensions are, while the rubric analysis identifies which specific behaviors — guiding questions, calibrated hints, non-disclosive scaffolding — benchmarks already reward.

## What this means for practice

- **Learners.** Judge a tutor on how it teaches rather than how well it answers: across eight publicly reported models the correlation between solving-oriented and pedagogy-oriented composite scores was only r = 0.421.
- **Learners.** Look for the behaviors that tutoring rubrics already reward — guiding questions, calibrated hints, and non-disclosive scaffolding that preserves your agency — rather than a tool that produces the fastest complete answer.
- **Software developers.** Report solving-oriented and pedagogy-oriented scores separately on tutoring leaderboards instead of a single aggregate helpfulness figure, and re-check a model shortlist under pedagogy-oriented rubrics, because several models shift meaningfully in rank between the two evaluations.
- **Software developers.** Add a disclosure-sensitive dimension that penalizes giving away full solutions where the learner context calls for scaffolding; the diagnostic requires no new data collection and runs on rubric items that public [[benchmark|benchmarks]] such as MathTutorBench and TutorBench already publish.

## Limitations

- The analysis measures no downstream student outcomes, so it cannot be read as evidence that one model causes better learning than another.
- The MathTutorBench reanalysis covers only eight public models, which the authors call statistically fragile for the reported Pearson correlation; r = 0.421 is presented as a descriptive diagnostic with leave-one-out robustness rather than a population estimate.
- The TutorBench analysis rests on a 30-example public sample and a deterministic metadata mapping rather than independent human coders, so it should be read as an auditable heuristic characterization of public rubric priorities, not a validated annotation study.
- Because the work analyzes public artifacts rather than raw generations, it does not directly measure answer disclosure turn by turn, and its claims depend on benchmark design choices — different task groupings or alternative rubrics could change the reported gaps.

## Connected Concepts

- [[intelligent-tutoring]]
- [[pedagogical-llm-training]]
- [[agentic-ai]]
- [[scaffolding]]
- [[help-seeking]]
- [[pedagogical-agent]]
- [[benchmark]]
- [[learning-gains]]

## Connected Articles

- [[llm-judged-helpfulness-pedagogy-signal]] — Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models
- [[cstutorbench-slm-tutors]] — CSTutorBench: Benchmarking Small Language Models as Tutors for Block-Based Programming
- [[human-ai-collaboration-prerequisite-functions]] — What do you mean by human-AI collaboration: Prerequisite functions and the affordances needed to achieve it
- [[persistent-ai-agents-academic-research]] — Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study
- [[rethinking-scaffolding-llm-tutors]] — Rethinking Scaffolding in LLM Tutors: The Interactional Mismatch Between Benchmarks and Real-World Deployments
- [[multi-agent-llm-social-learning]] — Beyond the AI Tutor: Social Learning with LLM Agents

## Citation

Junyi Yao, Zihao Zheng, Baichuan Li (2026). [Measuring Whether LLM Tutors Teach or Solve: A Diagnostic for Educational Impact](https://arxiv.org/abs/2606.16206). arXiv preprint.
