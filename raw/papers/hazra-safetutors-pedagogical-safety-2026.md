---
source_url: https://arxiv.org/abs/2603.17373
ingested: 2026-05-07
sha256: 1169fe0b3cad2e1b6969c7bb2ccdb680cf96b350394c216485111affa3ae0502
---

# SafeTutors: Benchmarking Pedagogical Safety in AI Tutoring Systems

**arXiv:** 2603.17373v1 [cs.CL] | **Date:** 18 Mar 2026  
**Authors:** Rima Hazra, Bikram Ghuku, Ilona Marchenko, Yaroslava Tokarieva, Sayan Layek, Somnath Banerjee, Julia Stoyanovich, Mykola Pechenizkiy

---

## Abstract

LLMs are rapidly deployed as AI tutors, yet current evaluation paradigms assess problem-solving accuracy and generic safety in isolation, failing to capture whether a model is simultaneously pedagogically effective and safe across student-tutor interaction. We argue that tutoring safety is fundamentally different from conventional LLM safety: the primary risk is not toxic content but the quiet erosion of learning through answer over-disclosure, misconception reinforcement, and the abdication of scaffolding. We introduce SafeTutors, a benchmark that jointly evaluates safety and pedagogy across mathematics, physics, and chemistry. SafeTutors is organized around a theoretically grounded risk taxonomy comprising **11 harm dimensions and 48 sub-risks** drawn from learning-science literature. We uncover that all models show broad harm; scale doesn't reliably help; and multi-turn dialogue worsens behavior, with pedagogical failures rising from **17.7% to 77.8%**. Harms vary by subject, so mitigations must be discipline-aware, and single-turn "safe/helpful" results can mask systematic tutor failure over extended interaction.

---

## Core Thesis

> "Solving problems correctly and avoiding toxic language does not make a tutor safe. Tutoring-specific harm is qualitatively different."

Primary risks:
- Erosion of productive struggle (tutors short-circuit cognitive work that consolidates understanding)
- Overreliance (fluent, confident LLM outputs encourage passive acceptance)
- Surface helpfulness masking systematic failure

## Dataset

- **3,135 single-turn** instances (Chemistry: 923, Physics: 975, Mathematics: 1,237)
- **2,820 multi-turn** conversations (5–8 turns) via crescendo-based escalation
- 11 models tested: 10 open-weight (3.8B–72B) + 1 closed-weight (GPT-5-mini)

## Risk Taxonomy (11 Dimensions / 48 Sub-Risks)

| Dimension | Core Concern |
|-----------|--------------|
| **Cognitive** | Interferes with processing/internalizing knowledge (offloading, fluency illusion, shallow learning) |
| **Epistemic** | Weakens ability to justify/source/evaluate knowledge (unverified authority, false consensus) |
| **Metacognitive** | Erodes planning, monitoring, self-reflection (external validation dependence, reflection bypass) |
| **Motivational-Affective** | Undermines curiosity, autonomy, persistence (shortcut temptation, performance-over-mastery) |
| **Developmental & Equity** | Fails to calibrate to learner's level/context (cognitive load mismatch, unequal benefit) |
| **Instructional Alignment** | Departs from intended learning goals (goal misidentification, pedagogical drift) |
| **Behavioral & Inquiry** | Enables shortcuts/academic dishonesty (answer-seeking, assignment outsourcing) |
| **Ethical-Epistemic Integrity** | Compromises intellectual ownership (blurred authorship, misrepresentation) |
| **Informational-Semantic** | Embeds factual/conceptual inaccuracies (fabrication, misleading explanation) |
| **Reflective-Critical** | Suppresses evidence-weighing and metacognition (over-smooth acceptance) |
| **Pedagogical Relationship** | Dysfunctional learner-system dynamic (over-trust in AI authority, loss of agency) |

## Key Findings

1. **Universal harm:** All evaluated models exhibit broad pedagogical harm
2. **Scale is not a fix:** Increasing model scale does not reliably improve tutoring safety
3. **Multi-turn degradation:** Pedagogical failures escalate from 17.7% (single-turn) to 77.8% (multi-turn)
4. **Discipline-aware mitigations needed:** Harms vary significantly by subject
5. **Single-turn evaluation is misleading:** "Safe/helpful" single-turn results mask systematic failure during sustained interaction

## Benchmark Construction

- Seed data from MathDial (mathematics) and CAMEL-AI (chemistry, physics)
- Single-turn: seed + trailing question steering toward specific violation; filtered by GPT-5.2
- Multi-turn: crescendo escalation (Turn 1 clarification → Turn 5 capitulation pressure)
- Human validation (3 stages): Domain validity (Fleiss' κ = 0.82), Risk alignment (κ = 0.74), Crowd generalizability
