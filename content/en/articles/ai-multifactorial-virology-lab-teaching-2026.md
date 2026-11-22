
title: "Reconstruction and practice of an AI-enhanced multifactorial teaching model for virology laboratory testing"
created: "2026-11-19T10:13:00-05:00"
updated: "2026-11-19T10:13:00-05:00"
type: article
evidence_context: educational
source_url: "https://doi.org/10.1186/s12909-026-10835-1"
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-19"
    agent: hermes-agent
verified: [citation, numbers, links]
technology: [knowledge-graph, rag, adaptive-learning, simulation, intelligent-tutoring, personalized-learning]
assessment: [assessment, learning-gains]
pedagogy: [scaffolding]
audience: [instructors, instructional designers, medical educators]
research_method: [quasi-experiment]
discipline: [medical education]
level: [undergraduate]
sources: ['raw/papers/ai-multifactorial-virology-lab-teaching-2026.md']
confidence: medium
page_kind: [implementation]
---

> **Synthesis:** Liu and colleagues (2026) rebuilt a virology laboratory-testing module around four AI-supported parts — a course [[knowledge-graph|knowledge graph]], a graph-grounded [[rag|retrieval-augmented]] teaching assistant, adaptive routing between practice tiers, and [[simulation|virtual simulation]] — and taught it to one class of 30 while a second class of 30 took the unchanged course. The experimental class did substantially better on the theory examination, the laboratory-operation checklist and an emergency-plan task, and passed virtual practice far more often. The four parts arrived together in intact classes, so the gain belongs to the package rather than to any element in it — a limit the authors state themselves.

## Key Findings

- **A bundled AI-supported redesign produced large achievement differences** on the theory examination, the laboratory-operation checklist and an emergency-plan task.
- **Virtual-practice pass rates rose sharply** — from 73.3% to 96.7% — though only the experimental class received simulation training, so exposure is confounded with the model.
- **The teaching assistant answered from a course knowledge graph** rather than running unconstrained, and adaptive routing used published thresholds instead of model judgment.
- **Assessment moved to four weighted dimensions** — Knowledge, Skills, Competencies, Professional Awareness — agreed through Delphi consensus.
- **The gain belongs to the package, not a component**: four elements were introduced together within intact classes, so no single element can be credited.

## What was built

The module sits inside the "Viral Nucleic Acid Detection Technology" unit of a Virology Laboratory Testing course for Health Inspection and Quarantine majors at Shandong Second Medical University in China. It ran for eight weeks and 32 academic hours (16 theoretical, 16 practical) with 60 students, 30 per intact class.

The four components were:

- **A course knowledge graph** with explicit IS_PART_OF, REQUIRES and RELATED_TO edges, so prerequisite gaps could be traced rather than inferred from a syllabus.
- **An LLM teaching assistant grounded in that graph** through [[rag|retrieval-augmented generation]] rather than used as an unconstrained chatbot, with instructor review of outputs.
- **Adaptive routing on published threshold rules**: escalate after a ≥ 90% virtual-practice pass rate on two consecutive attempts, activate compensatory review below 60%, and flag instructor intervention when node mastery stays below 50% after two quiz attempts.
- **A three-tier resource repository** — Foundational, Enhancement, Expansion — so differentiated recommendations pointed to concrete materials rather than generic advice.

Assessment moved from single outcomes to a weighted four-dimension scheme established through Delphi consensus: Knowledge 30%, Skills 35%, Competencies 20%, Professional Awareness 15%, with each instructional component mapped to at least one dimension.

Baseline equivalence was checked across seven variables and held: age (20.3 vs. 20.5 years, p = 0.368), sex (63.3% vs. 60.0% female, p = 0.789), entrance examination score (508.6 vs. 512.1, p = 0.758), cumulative GPA (3.41 vs. 3.37, p = 0.704), prior AI tool use (23.3% vs. 20.0%, p = 0.752), self-rated digital literacy (3.12 vs. 3.08, p = 0.847) and microbiology course score (77.6 vs. 75.8, p = 0.341).

## Outcomes

| Outcome | Experimental (n = 30) | Control (n = 30) | Effect |
|---|---|---|---|
| Final theory examination | 89.7 ± 7.5 | 78.3 ± 8.8 | +11.4 points, t(58) = 5.40, p < 0.001, d = 1.39, 95% CI 7.17–15.63 |
| Laboratory operation (32-item checklist) | 88.6 ± 6.8 | 75.3 ± 9.5 | t(58) = 6.24, p < 0.001, d = 1.61, 95% CI 9.03–17.57 |
| Emergency-plan design | 86.3 ± 7.2 | 69.8 ± 10.1 | t(58) = 7.29, p < 0.001, d = 1.88, 95% CI 11.97–21.03 |
| Virtual practice pass rate | 29/30 (96.7%) | 22/30 (73.3%) | χ²(1) = 6.41, p = 0.011, Cramér's V = 0.33 |
| "Frontier technology application" items | 28/30 (93.3%) | 20/30 (66.7%) | χ²(1) = 6.67, p = 0.010, Cramér's V = 0.33 |

Two of these need care. The **emergency-plan [[rubrics|rubric]] included an AI-integration component**, which makes it an intervention-aligned exploratory measure rather than an independent one — the authors flag this themselves. And the **virtual-simulation comparison is confounded by design**: only the experimental group received simulation training during the intervention, so the pass-rate gap measures exposure as much as it measures the model.

The AI tool proficiency check was a manipulation check rather than an outcome: 27 of 30 experimental students (90%) reached the ≥ 16/20 threshold on a 10-item checklist (Cohen's κ = 0.76), against 20.0% baseline familiarity in the control class. No inferential between-group comparison was made for it.

## Process indicators and self-report

The implementation data are descriptive but directionally consistent: learning-analytics efficiency up 65%, personalized tutoring coverage from 30% to 100%, in-class interaction frequency up 78.4%, student-initiated questions per session from 3.2 to 6.7, daily after-class self-study time up 40 minutes. Twenty-three of 30 (76.7%) used the knowledge graph independently in weeks 5–8.

The student feedback questionnaire produced high agreement — 96.7% said the knowledge graph clarified content structure, 93.3% that virtual simulation improved lab skills, 93.3% overall satisfaction — but it is a study-specific 10-item instrument, unvalidated, administered to the experimental group only, and the group-level satisfaction comparison used different instruments on each side. Treat those numbers as indicators of acceptability, not evidence of learning.

Internship-site feedback offered the one workplace signal: experimental graduates adapted in an average of 6 days against 9 for the control group, a reduction of 3 days (33.3%), and 3 of 87 audited AI interactions (3.4%) were incomplete or imprecise under a weekly audit of at least 15% of responses.

## What this means for practice

- **Instructors.** Build the knowledge graph before building the assistant. Explicit prerequisite edges are what let an assistant answer "what do I need to fix first" rather than "here is a summary".
- **Instructors.** Ground the assistant in the graph with retrieval instead of deploying an unconstrained model, and keep instructor review of its outputs as a standing task.
- **Course designers.** Publish the adaptive thresholds — escalation, remediation and instructor-flag rules — so that adaptivity can be audited rather than trusted.
- **Course designers.** Organize materials in tiers — foundational, enhancement, expansion — so personalization points at real resources.
- **Assessment designers.** Replace single-outcome grading with a weighted competency scheme, and map each instructional component to at least one dimension of it.

## Limitations

- **Non-randomized allocation by intact class.** Baseline equivalence cannot be guaranteed, residual confounding is possible, and within-class clustering violates independence assumptions, so the reported p-values and intervals are likely narrower than cluster-adjusted estimates would be; no multilevel or cluster-robust sensitivity analysis was performed.
- **Single institution, n = 60, one lead instructor** — limited power and limited generalizability.
- **Eight weeks with no follow-up**, so durability of the gains is unknown.
- **Several outcomes were self-report on a non-validated instrument**, and the Competencies and Professional Awareness dimensions involved unblinded instructor observation.
- **Retrospective registration** (ChiCTR2600129253, registered 2026-08-01, after data collection), which limits transparency about pre-specified outcomes and analyses.
- **Bundled intervention**: four components were introduced together, so the study cannot attribute the effect to any one of them — the graph, the assistant, the routing rules and the simulation are inseparable in this design.

## Citation

Liu, Y., Wang, M., Zhao, L., Feng, X., Niu, G., & Han, X. (2026). [Reconstruction and practice of an AI-enhanced multifactorial teaching model for virology laboratory testing](https://doi.org/10.1186/s12909-026-10835-1). *BMC Medical Education*.
