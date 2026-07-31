---
source_url: "https://osf.io/preprints/edarxiv/knhyz_v1"
ingested_date: 2026-07-31
slug: "llm-intervention-design-cs-review"
sha256: "d5ff27aac811fce8"
---

# A review of intervention designs of LLM Integration in Undergraduate Computer Science Education

**Author:** Anusha Vissapragada (Hult International Business School)
**Source:** EdArXiv preprint (OSF), https://osf.io/preprints/edarxiv/knhyz_v1
**Date:** 2026

## Abstract

This scoping review analyzes 13 experimental studies to examine how Large Language Models (LLMs) are operationalized in undergraduate computer science education and how intervention design choices shape observed outcomes. Rather than asking whether LLMs "work" in CS1 contexts, we evaluate research design patterns across three dimensions: intervention type (coding assistant, virtual tutor, or assessment aid), study duration, and pedagogical role. Our analysis reveals that semester-long integrations using LLMs as "Virtual Tutors" with scaffolded feedback consistently demonstrate significant improvements in computational thinking and academic performance, while short-term "Task and Coding Assistance" interventions produce mixed results regardless of tool type. We identify critical methodological gaps including inconsistent outcome operationalization, variable control group definitions, underreporting of effect sizes and confidence intervals, and insufficient isolation of programming language effects. Notably, while studies employing Java showed more consistent performance gains, Python, despite its prevalence in introductory programming, lacks sufficient experimental data isolating its impact. We also document a "tool frustration" paradox: students using LLMs without adequate scaffolding and prompt literacy training report significantly higher frustration than control groups, even when performance outcomes are equivalent.

## Methodology

Two-stage search: review-of-reviews (5 core systematic reviews: Prather et al. 2025, Aruleba et al. 2025, Raihan et al. 2025, Nathaniel et al. 2025, Chang et al. 2024) → 179 candidate papers → deduplication (148 unique) → three-stage screening → 13 experimental studies in final analysis.

## Key Findings

### Intervention Types
- **Task and Coding Assistant** (8 studies): Largest category, most heterogeneous. Results split — code quality in Java improved (p < 0.005), but broader academic performance showed no significant difference. Mixed-outcome studies showed gains in some measures but not others.
- **Virtual Tutor or Peer** (3 studies): All three showed significant improvements in student outcomes. Semester-long integrations with scaffolded feedback consistently demonstrated improvements in computational thinking and academic performance.
- **Exam and Quiz Help** (2 studies): Mixed results depending on implementation.

### The Tool Frustration Paradox
Students using LLMs without adequate scaffolding and prompt literacy training report significantly higher frustration than control groups (p = 0.008, median frustration 14 vs. 9), even when performance outcomes are equivalent.

### Language Effects
Java showed more consistent performance gains. Python — despite prevalence in CS1 — lacks sufficient experimental data isolating its impact.

### Methodological Gaps
- Inconsistent outcome operationalization (performance vs. perception vs. mixed)
- Variable control group definitions (no internet access vs. no LLM access vs. historical data)
- Underreporting of effect sizes and confidence intervals
- Insufficient isolation of programming language effects

## Design Recommendations
1. Sustained scaffolding with guided explanations, problem decomposition, and gradual support reduction
2. Transparent interaction patterns between student and LLM
3. Explicit meta-skill instruction (prompt engineering literacy)
4. Assessment redesign emphasizing code evaluation and prompt crafting over code generation
5. Position LLMs as learning collaborators rather than solution generators
6. Standardize outcome metrics, control group definitions, and effect size reporting

