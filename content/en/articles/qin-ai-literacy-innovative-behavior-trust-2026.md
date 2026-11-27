---
title: "AI Literacy and Innovative Behavior in AI-Assisted Learning: Cognitive and Affective Trust in AI and Creative Self-Efficacy as Sequential Pathways"
created: "2026-11-27T13:40:00-05:00"
updated: "2026-11-27T13:40:00-05:00"
type: article
published: "2026-11-03"
sources: ['raw/papers/qin-ai-literacy-innovative-behavior-trust-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
discipline: []
level: [higher ed, undergraduate]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Qin and colleagues surveyed 1173 Chinese college students to ask how [[ai-literacy]] relates to innovative behavior in AI-assisted learning. Students who reported stronger AI literacy also reported more innovative learning behavior, but the direct association was no longer significant once [[trust|trust in AI]] and creative [[self-efficacy]] were included. The indirect routes through trust, creative confidence, and the two in sequence accounted for most of the total association. When cognitive and affective trust were entered together, both carried the association forward, yet cognitive trust was the more readily mobilized gateway from literacy, while the two dimensions were similar in their downstream links to creative self-efficacy and innovative behavior. The authors interpret cognitive trust as an appraisal of reliability and affective trust as a product of supportive interaction. Because all data came from one cross-sectional survey, the proposed sequence is a hypothesis about order, not observed development.

## Key Findings
1. **AI literacy was linked to innovative learning behavior.** The overall association was positive before mediators were added.
2. **The direct link weakened with mediators present.** Once trust and creative self-efficacy were included, the remaining direct association was not significant.
3. **Indirect routes carried most of the association.** The combined indirect effects accounted for roughly three quarters of the total association.
4. **Trust and creative confidence each mattered.** Both single-mediator paths and the sequential chain through trust and then self-efficacy were significant.
5. **Both kinds of trust contributed.** Cognitive and affective trust each showed significant, non-redundant indirect paths when modeled together.
6. **The trust asymmetry was modest.** Cognitive trust was more strongly linked to literacy at the starting point, but the two trust types did not differ reliably downstream.
7. **[[self-report-measures|Self-reported]] competence is not demonstrated ability.** The authors repeatedly qualify AI literacy as a competence belief rather than an objective skill measure.

## What the study measured

Participants were undergraduates recruited from five Chinese universities through campus networks and a large-enrollment general course. The initial sample of 1230 yielded 1173 valid cases after 57 responses failed attention checks. The sample was 39.5% male with a mean age of 20.75 years (SD = 1.966, range = 18–24 years). Most participants used [[generative-ai|generative AI]] for learning: 88.0% reported weekly use and 66.0% reported using it at least three or more times per week. Institutional and class identifiers were not recorded, so clustering was not modeled.

AI literacy was measured with a 21-item adaptation of a ChatGPT literacy scale covering technical proficiency, [[critical-thinking|critical evaluation]], communication proficiency, and ethical competence; four creative-application items were removed to avoid overlap with the outcomes. Its overall Cronbach's α was 0.948. Innovative behavior in AI-assisted learning used an adapted six-item self-report scale (α = 0.909), creative self-efficacy used three items (α = 0.798), and trust in AI used a 27-item semantic differential scale with 18 cognitive and nine affective items (overall α = 0.958). Scales were translated and back-translated, and confirmatory factor analysis supported an eight-factor measurement model (χ²(1690) = 1730.32, χ²/df = 1.02, CFI = 0.999, TLI = 0.999, RMSEA = 0.005, SRMR = 0.020). A common-method check found that the first unrotated factor accounted for 31.59% of the variance.

## What the pathway analysis showed

Analyses used PROCESS Model 6 with 5000 bootstrap resamples and controlled for gender, age, and generative-AI use frequency. The total association between AI literacy and innovative behavior was β = 0.211, 95% CI [0.155, 0.267]. With mediators included, the direct association was β = 0.057, p = 0.056. The total indirect effect was 0.154, 95% CI [0.120, 0.188], or 73.18% of the total. The trust-only path contributed 0.087 (41.40% of the relative mediation effect), the creative self-efficacy path 0.031 (14.78%), and the sequential trust-to-self-efficacy path 0.036 (16.99%).

In the model that entered cognitive and affective trust simultaneously, all seven specific indirect pathways were significant. The largest single path was through cognitive trust alone (0.053, 95% CI [0.027, 0.080]), followed by the path through creative self-efficacy (0.030, 95% CI [0.011, 0.050]) and affective trust alone (0.020, 95% CI [0.008, 0.033]). Aggregated across routes, cognitive trust carried 0.093, 95% CI [0.066, 0.122], versus 0.057, 95% CI [0.036, 0.080], for affective trust. The contrast was 0.036, 95% CI [0.001, 0.071].

The authors then checked whether this asymmetry was an artifact of unequal adjustment sets. Re-estimating both antecedent paths with the same covariates gave β = 0.415, 95% CI [0.362, 0.467], for cognitive trust and β = 0.328, 95% CI [0.274, 0.382], for affective trust; the gap remained significant but shrank to Δ = 0.086, 95% CI [0.025, 0.148]. Downstream, cognitive and affective trust did not differ reliably in their links to creative self-efficacy (0.117 vs. 0.216) or innovative behavior (0.128 vs. 0.108). The discussion recommends relationally supportive design if educators want affective trust to develop, since information alone appears insufficient.

## What this means for practice
- **Instructors.** Treat students' confidence in using AI as only part of the picture; pair tool familiarity with tasks that require verification and judgment.
- **Instructors.** Give students chances to evaluate AI outputs against evidence so that trust rests on observed reliability rather than habit.
- **Curriculum designers.** Build creative tasks where AI support is followed by a student-authored justification, since creative self-efficacy was a distinct pathway.
- **Researchers.** Use performance-based AI literacy tasks and interaction logs to test whether the self-report pathways hold beyond one survey.
- **Administrators.** Design supportive human–AI interactions deliberately if affective trust is an intended outcome of AI-supported learning.

## Limitations
- The cross-sectional, single-wave design cannot establish temporal order or causality; reverse and reciprocal pathways remain plausible.
- All constructs were self-reported, and the authors note that self-assessed AI competence diverges from demonstrated performance.
- Trust was measured at one moment, although it forms and changes over repeated interactions.
- The three-item creative self-efficacy scale had limited bandwidth, and the innovative behavior scale was adapted from a workplace instrument.
- Four creative-application items were removed from the AI literacy scale to avoid overlap with outcomes, which may have narrowed the construct.
- Non-probabilistic recruitment through five universities and student networks limits generalization, and institutional clustering was not modeled.

## Citation
Qin W, Gu H, Zhou L, Feng J, Pan M, Chen M, Hu BY, Gu C and Wen Z (2026) AI Literacy and Innovative Behavior in AI-Assisted Learning: Cognitive and Affective Trust in AI and Creative Self-Efficacy as Sequential Pathways. Behavioral Sciences 16:2083. https://doi.org/10.3390/bs16112083
