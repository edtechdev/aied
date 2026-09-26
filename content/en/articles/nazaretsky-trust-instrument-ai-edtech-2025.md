---
title: "The critical role of trust in adopting AI-powered educational technology for learning: An instrument for measuring student perceptions"
created: "2026-09-26T08:10:43-04:00"
updated: "2026-09-26T08:10:43-04:00"
type: article
sources: ['raw/papers/nazaretsky-trust-instrument-ai-edtech-2025.md']
confidence: high
published: "2025-06"
page_kind: [evaluation]
research_method: [instrument development, survey]
level: [higher ed]
audience: [researchers, instructors, educational technology developers]
foundations: [theories-and-frameworks]
technology: [technology-acceptance-model, ai-technologies]
assessment: [self-report-measures, educational-measurement, assessment-validity]
pedagogy: [student-ai-interaction, student-experience]
ethics: [trust, trust-calibration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-26"
reviewed_by: [editor]
---

> **Synthesis:** Trust is routinely named as the barrier to AI adoption in education, yet most studies measure it with a single item or a one-dimensional scale, which makes results hard to compare or replicate. Nazaretsky and colleagues at EPFL answer that gap with an instrument development and validation study. Drawing on multidimensional [[trust]] frameworks, they built 27 five-level Likert items, then ran exploratory factor analysis on 373 English-language responses and confirmatory factor analysis on 292 French-language responses. Four factors emerged: Perceived Usefulness, Perceived Obstacles, Perceived Readiness, and Perceived Trust, retaining 21 items. Structural equation modeling on 270 responses showed that trust lifts perceived usefulness both directly and through readiness, while perceived obstacles did not significantly reduce either. Across 665 students, trust sat near the neutral point (3.31 of 5) even as usefulness scored higher (3.62), an actionable gap: trust, not utility, is the constraint for course and program design to address.

## Key Findings

1. **The instrument measures trust as four factors, not one.** EFA and CFA on 665 student responses produced 21 reliable items across Perceived Usefulness (6 items), Perceived Obstacles (7), Perceived Readiness (2), and Perceived Trust (6).
2. **Trust raised perceived usefulness directly and through readiness.** SEM on the confirmatory sample (N = 270) accepted H-TU (standardized estimate 0.45, p = .0006), H-TR (0.58, p < .0001), and H-RU (0.44, p < .0001).
3. **Perceived obstacles did not reduce trust or readiness.** The hypothesized negative paths were not significant (H-OT standardized -0.09, p = .43; H-OR -0.13, p = .14), so the authors rejected both hypotheses.
4. **Students trusted AI-EdTech only slightly above neutral.** Across all 665 students, Perceived Trust averaged 3.31 (σ = 0.66) on a 5-point scale, below Perceived Usefulness at 3.62 (σ = 0.68) and Perceived Readiness at 3.74 (σ = 0.86).
5. **Demographics explained little of the variation.** Regression R² values were 8% for Perceived Usefulness, 5% for Obstacles, 2% for Readiness, and 1% for Trust, though male students reported lower obstacles (p < .001).
6. **Students preferred teacher judgment over AI recommendations.** On item PT6, which asks whether they rely on an AI tool as much as on their teacher, the mean was 2.60 (σ = 1.13) on a 5-point scale.

## What the four factors measure

The instrument separates the perceived trustworthiness of the tool from the characteristics of the student who trusts it. Perceived Usefulness (items PB1 to PB6) is the performance side: personalized [[feedback]], adapted tasks, help preparing for exams. Perceived Obstacles (PO4 to PO10) is the moral side: transparency of AI reasoning, data collection, [[privacy]], and ethical risk. Perceived Readiness (PR1, PR2) captures confidence and willingness to use AI for [[personalized-learning|personalized learning]], drawing on [[self-efficacy]], and Perceived Trust (PT1 to PT6) captures intent to trust across situations. The first two come from established multidimensional trust frameworks, the last two from the truster's [[ai-literacy]] and readiness. That split is what lets a reader score usefulness and obstacles separately from the student's own disposition.

## How the instrument was developed and validated

Items were written top-down from existing trust models, prior AI-EdTech adoption research, the earlier teacher-facing instrument (Nazaretsky et al., 2022b), and practitioner discussions, then piloted with four educational experts and ten university students. The EFA used 373 English-language responses; after removing 28 multivariate outliers it ran on 345, with Kaiser-Meyer-Olkin = 0.76 and Bartlett's test χ² = 2076.94 (p < .0001). Horn's parallel analysis suggested five factors, which reliability checks reduced to four. The CFA used 292 French-language responses, and after removing 22 outliers, 270. The initial four-factor model fit poorly (RMSEA = 0.083, CFI = 0.915); after index modification it fit well (RMSEA = 0.050, SRMR = 0.068, TLI = 0.966, CFI = 0.972), which supports the [[assessment-validity]] of the retained 21 items.

## What the model shows and where students land

Using 10-fold cross-validation on the 270 confirmatory responses, the SEM kept the direct trust-to-usefulness path (standardized 0.45), the trust-to-readiness path (0.58), and the readiness-to-usefulness path (0.44); the two obstacle hypotheses failed. The authors place trust upstream of usefulness, the reverse of how the [[technology-acceptance-model]] usually reads adoption: rather than usefulness driving intention, trust is the precondition that shapes how useful the tool looks. On the full sample, Perceived Trust averaged 3.31 (σ = 0.66), below Usefulness at 3.62 (σ = 0.68), Readiness at 3.74 (σ = 0.86), and Obstacles at 3.79 (σ = 0.60). The highest single item was PO3, that AI does not know a student's learning history outside the system (4.00, σ = 0.91). Open responses from 175 students added AI-supported [[creativity]] as a benefit (N = 22) and over-reliance as a risk (N = 20), both of which the next version will cover.

## What this means for practice

- **Instructors.** Run the four subscales before introducing a tool: a cohort can rate usefulness high and trust low, and the low-trust subscale shows which concern to address first.
- **Educational technology developers.** Treat transparency and data practice as adoption features, since the transparency and privacy items (PO4 to PO10) form the obstacle factor students report most strongly.
- **Administrators and AI-literacy programs.** Pair rollout with AI literacy teaching: 74% of students agreed that personalizing their learning with AI would require new skills such as recognizing AI mistakes and biases.
- **Researchers.** Adopt the published item set and factor structure so trust findings accumulate across institutions instead of remaining one-off scales.

## Limitations

- Trust here is [[self-report-measures|self-reported]] perception, not behavior: the instrument records what students say about trusting AI-EdTech, not how they verify or rely on it in practice.
- Validation is single-institution and STEM-only (665 EPFL students across eight courses), and the authors state that their next step targets a broader student demographic.
- Perceived Readiness rests on two items only (PR1, PR2), a weakness the authors intend to extend in the next version of the instrument.

## Connected Concepts

- [[trust]]
- [[trust-calibration]]
- [[technology-acceptance-model]]
- [[ai-literacy]]
- [[self-efficacy]]
- [[ai-technologies]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[self-report-measures]]
- [[student-experience]]
- [[higher-ed]]

## Connected Articles

- [[trust-reliance-ai-education-2026]] — trust and reliance on AI in education, with AI literacy and need for cognition as moderators
- [[trust-calibration-chatbots-design-problem-2026]] — trust calibration framed as a design problem rather than a user deficit
- [[calibrating-trustworthiness-llm-education-2026]] — co-designed metrics and visualizations for judging when a language model can be trusted
- [[task-context-trust-educational-hri-2026]] — what a system does matters more than how it looks for trust in educational robotics
- [[trust-in-ai-psychological-profiles-ml-2026]] — clustering university students by the psychological profiles associated with AI trust
- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]] — teacher and student views of control and agency diverge around classroom AI
- [[fouad-bentley-trust-utility-gap-physics-2026]] — students adopt AI while remaining skeptical, a domain-specific trust-utility gap

## Citation

Nazaretsky, T., Mejia-Domenzain, P., Swamy, V., Frej, J., & Käser, T. (2025). [The critical role of trust in adopting AI-powered educational technology for learning: An instrument for measuring student perceptions](https://doi.org/10.1016/j.caeai.2025.100368). *Computers and Education: Artificial Intelligence*, 8, 100368.