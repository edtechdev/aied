---
title: "AI Literacy and Academic Performance among Non-STEM Students in KNUST: The Roles of LMS Quality and Blended-Learning Satisfaction"
created: "2026-10-07T09:30:00-04:00"
updated: "2026-10-07T09:30:00-04:00"
type: article
foundations: [ai-literacy, ai-education]
pedagogy: [online-teaching-and-learning, student-experience]
technology: [edtech-platform]
assessment: [learning-gains, self-report-measures]
methods: [quantitative-research, research-methods-aied]
institutions: [educational-policy-ai]
ethics: [equity-in-ai-education, global-south]
research_method: [survey]
level: [higher ed, undergraduate]
audience: [instructors, researchers, administrators, policymakers]
page_kind: [evaluation]
sources: ['raw/papers/ai-literacy-academic-performance-knust-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-07"
    agent: hermes-agent
---

> **Synthesis:** Koduah and colleagues ask whether [[ai-literacy]] relates to [[learning-gains|academic performance]] among non-STEM students, and whether that relationship runs through perceived [[edtech-platform|LMS]] quality and [[online-teaching-and-learning|blended-learning]] satisfaction. In a cross-sectional survey of 432 non-STEM students at Kwame Nkrumah University of Science and Technology (KNUST), Ghana, AI literacy was strongly associated with perceived LMS quality (β = .814) and, more weakly, with academic performance (β = .222). LMS quality was not directly associated with performance (β = .074, p = .233), but the longer pathway through satisfaction was (β = .263, p < .001). The authors read AI literacy as a user-side capability whose academic value depends on the quality of the blended-learning experience it enables. The design supports association only, not cause.

## Key Findings
1. AI literacy was strongly associated with perceived LMS quality (β = .814, t = 42.050, p < .001), the largest path in a model built from 432 non-STEM [[higher-ed]] students.
2. AI literacy also showed a smaller positive association with academic performance (β = .222, p = .001), one of four of five direct paths supported by the analysis.
3. Perceived LMS quality was strongly associated with blended-learning satisfaction (β = .604, p < .001), matching the information-systems logic that system quality precedes satisfaction.
4. Blended-learning satisfaction was the strongest correlate of academic performance (β = .535, p < .001), whereas LMS quality alone was not associated with it (β = .074, p = .233).
5. LMS quality did not independently mediate the AI literacy–performance link (β = .061, p = .236), but the sequential path through LMS quality and satisfaction did (β = .263, p < .001).
6. The model explained moderate variance in academic performance (R² = .590) and substantially more in LMS quality (R² = .663); an importance–performance analysis flagged AI literacy as highest-importance but comparatively low-performing.
7. All four constructs were self-reported; the direct AI literacy–performance path carried the smallest effect (f² = .030) against AI literacy's very large effect on LMS quality (f² = 1.963).

## How AI literacy connects to performance
The study's central move is to treat [[ai-literacy]] not as a technical skill set that directly lifts grades but as a user-side capability that shapes how students experience digital learning. AI literacy was the strongest correlate of perceived LMS quality (β = .814; f² = 1.963), a large association by the study's own thresholds, far exceeding its direct association with academic performance (β = .222; f² = .030). The authors connect this to [[technology-acceptance-model|technology-adoption]] accounts in which literate, confident users judge platforms as more usable and put more of their features to work. On the importance–performance map, AI literacy had the highest total effect on performance (.546) yet one of the lower performance scores (71.237), a gap the authors read as an argument for training rather than hardware alone. Because the design is a single cross-sectional survey, every one of these numbers describes association: AI literacy and perceived LMS quality move together, and the direction of influence is not identifiable.

## The learning management system and satisfaction
Perceived LMS quality was strongly associated with [[online-teaching-and-learning|blended-learning]] satisfaction (β = .604), and satisfaction was the model's strongest correlate of academic performance (β = .535). LMS quality on its own, however, was not associated with performance (β = .074, p = .233), and it did not carry the AI literacy–performance relationship by itself (β = .061, p = .236). What held was the longer chain: AI literacy → LMS quality → blended-learning satisfaction → academic performance (β = .263, p < .001). The authors read this through the information-systems success perspective, in which system quality becomes academically consequential only when it translates into a satisfying learning experience. This separates the mere provision of a platform from the [[student-experience]] that provision supports, and it fits the study's claim that infrastructure, however good, does not by itself produce [[learning-gains|achievement]].

## Effect sizes, model fit, and reading the numbers
The model explained substantial variance in perceived LMS quality (R² = .663) and academic performance (R² = .590) and moderate variance in satisfaction (R² = .365), with small gaps between R² and adjusted R². [[educational-measurement|Measurement]] was sound: indicator loadings ran from .705 to .911, 19 of 21 items cleared the .708 threshold, composite reliability exceeded .80, and average variance extracted exceeded .50 for every construct. Two caveats temper the numbers. First, common method bias could not be ruled out: the AI literacy–academic performance full-collinearity variance inflation factor was 4.093 (95% CI [3.327, 4.938]), above the 3.3 threshold, though all values stayed below the critical 5. Second, [[self-report-measures|self-report]] was the only data source; the authors recommend triangulating against institutional records. They also note that satisfaction and performance evaluate the same blended-learning experience, so their conceptual overlap needs attention.

## What this means for practice

- **Instructors.** Treat [[ai-literacy]] development as part of [[learning-design|course design]] rather than an optional add-on: it was the strongest associate of perceived LMS quality (β = .814), and importance–performance analysis flagged it as high-importance but underperforming.
- **Instructors.** Invest in the satisfying parts of [[online-teaching-and-learning|blended delivery]] — timely feedback, well-structured materials, and student interaction — because satisfaction (β = .535) carried the association with performance that LMS quality alone did not.
- **Administrators.** Pair any platform investment with AI literacy support instead of assuming a better LMS raises [[learning-gains|achievement]]; the direct LMS-quality–performance path was not significant (β = .074, p = .233).
- **Policymakers.** Fold AI literacy into non-STEM curricula and address fair access to digital infrastructure, since the study frames literacy support as unequally distributed, particularly in resource-constrained contexts.
- **Researchers.** Replicate the sequential mediation in STEM cohorts and across institutions; this [[research-methods-aied|design]] is one Ghanaian university and cannot establish temporal order.

## Limitations

- The study is a cross-sectional survey of 432 non-STEM students at a single institution (KNUST, Ghana); the design cannot establish temporal precedence, so no causal claim can be drawn from the paths.
- Convenience sampling drew a relatively homogeneous population, which limits representativeness and generalizability beyond this university.
- All four constructs were self-reported on a six-point Likert scale (α = .82–.89); common method bias could not be excluded, since the AI literacy–performance variance inflation factor reached 4.093 (95% CI [3.327, 4.938]) against a 3.3 threshold.
- Discriminant [[assessment-validity|validity]] held but was tight: the bootstrap upper bounds for blended-learning satisfaction ↔ academic performance and LMS ↔ AI literacy sat above .90, suggesting conceptual overlap.
- Of 450 returned questionnaires, 18 outlier cases (standardized z-scores beyond ±3 SD) were excluded, leaving 432 valid cases; no follow-up or objective achievement data were collected.
- STEM cohorts, prior AI exposure, gender, and academic year were not tested, so whether the pathway generalizes across groups and institutions remains open.

## Citation

Koduah, C. A., Essel, H. B., Setsoafia, P., et al. (2026). [AI Literacy and Academic Performance among Non-STEM Students in KNUST: The Roles of LMS Quality and Blended-Learning Satisfaction](https://doi.org/10.21203/rs.3.rs-11239563/v1). Research Square.