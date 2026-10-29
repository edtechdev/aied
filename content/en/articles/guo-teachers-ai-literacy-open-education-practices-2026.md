---
title: "The association between teachers' artificial intelligence literacy and open education teaching practices in China: a moderated mediation analysis of teachers' innovative behavior and school support"
published: "2026"
created: "2026-10-28T18:18:15-04:00"
updated: "2026-10-28T18:18:15-04:00"
type: article
foundations: [ai-literacy]
institutions: [change-management]
research_method: [survey, structural equation modeling]
level: [higher ed, adult learning]
audience: [instructors, administrators]
page_kind: [evaluation]
sources: ['raw/papers/guo-teachers-ai-literacy-open-education-practices-2026.md']
source_url: "https://doi.org/10.1177/21582440261491441"
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Guo, Lu, and Gao (2026) asked how teachers' [[ai-literacy|AI literacy]] relates to open education teaching in Chinese open universities, whether innovative behavior carries part of that relation, and whether school support conditions it. They collected a cross-sectional survey from teachers across 30 provinces on November 17-18, 2025, kept 512 of 535 responses (about 95.7%), and fitted a moderated mediation model with PROCESS Model 15 and 5,000 bootstrap samples. AI literacy predicted open education teaching directly (β = 0.432) and indirectly through innovative behavior (indirect effect 0.154, 95% CI [0.112, 0.198]). School support interacted negatively with both predictors, and the conditional indirect effect fell from 0.218 at one standard deviation below the mean to 0.042 and non-significant one standard deviation above (index of moderated mediation -0.088, 95% CI [-0.142, -0.045]). The design is single-wave and single-source, so causal order is not established and the comfort-zone explanation was never measured.

## Key Findings

1. AI literacy was strongly associated with innovative behavior, β = 0.542 (p < 0.001), the largest path in the model and the same value as their zero-order correlation.
2. AI literacy also predicted [[open-education|open education]] teaching directly, β = 0.432 (p < 0.001), and innovative behavior predicted it at β = 0.284 (p < 0.001), so mediation was partial rather than complete.
3. The indirect path through innovative behavior was 0.154, 95% CI [0.112, 0.198], which excludes zero and confirms Hypothesis 4.
4. School support interacted negatively with AI literacy (β = -0.145, p < 0.01) and with innovative behavior (β = -0.162, p < 0.001) in predicting open education teaching, even though its own main effect on teaching was positive (β = 0.254 and β = 0.265).
5. The conditional indirect effect was 0.218 [0.156, 0.292] at one standard deviation below mean support, 0.154 [0.094, 0.205] at the mean, and 0.042 [-0.015, 0.108] at one standard deviation above, where it lost significance.
6. In a median split, the high-support subgroup (n = 248) showed no significant path from innovative behavior to teaching (β = 0.142, p > 0.05), while the low-support subgroup (n = 264) showed β = 0.455 (p < 0.001) and an adjusted R-squared of 0.492 against 0.385.
7. Measurement held up: the four-factor model fit at chi-square/df = 2.14, RMSEA = 0.047, CFI = 0.965, with Cronbach's alpha of 0.974, 0.908, 0.943, and 0.960, and the first unrotated factor accounted for 36.4% of variance.

## A two-day census of one national system

The sample is unusual in its reach and its speed. The survey ran on SoJump over two days, November 17-18, 2025, distributed through the administrative communication network of the provincial Open University system, which is how 512 usable responses arrived from 30 provinces in a single window. Of 535 initial responses, 23 were dropped for invalid patterns or very short completion times. Respondents were 54.10% male and 45.90% female; 23.05% were under 30; 38.28% had one year or less of open education teaching experience; 63.28% came from urban origins.

All items used a seven-point scale, translated and back-translated, then lightly adapted by an expert panel. Instruments were the 19-item AI literacy scale from Ng et al., a 6-item innovative behavior scale from Scott and Bruce, an 8-item school support scale from Eisenberger et al., and a 12-item open education teaching scale adapted from dos Santos and from Law and Perryman. The preamble told respondents to answer with generative AI in mind rather than general ICT use.

## Literacy converted into practice through innovation

The mediation result is the paper's theoretical core, and it is modest rather than dramatic. AI literacy retains a direct path to teaching of 0.432 once innovative behavior is in the model, so the argument is not that literacy works only through behavior. It is that part of the association runs through teachers doing something with what they know: identifying a problem, generating an idea, testing it, and spreading it. The authors read this through [[self-efficacy]] and outcome expectations, arguing that literacy lowers the anxiety that makes pedagogical risk expensive. Read against the outcome measure, though, the claim shrinks. Open education teaching was measured by teacher reports of perceived effects on students, such as increased participation, enthusiasm, and persistence, not by observation of what teachers did in a course.

## The support effect that runs the other way

The counterintuitive finding is the negative interaction, and it is robust across two interaction terms, a bootstrap index, and a subgroup split. The interpretation borrows the resource substitution effect: when an institution supplies abundant ready-made resources, emotional backing, and a safe arrangement, the personal cost of bottom-up experimentation stops being worth paying, and teachers settle into what the authors call a technological comfort zone. Two cautions belong with that story. First, school support still predicts open education teaching positively on its own, so the finding is about a flattening slope, not about support being harmful. Second, the mechanism was never measured. The authors state that comfort zone and resource substitution are "theoretically grounded hypotheses rather than directly measured constructs," and they call for interviews and observation to test whether teachers actually disengage. Until then, the negative interaction is a solid estimate in search of an explanation.

## What the design cannot settle

Everything was reported by the same teachers at the same moment. AI literacy, innovative behavior, school support, and teaching practice are all self-descriptions collected in one wave, so a teacher who believes she is AI literate and innovative may also report that her students are more engaged, and the model cannot separate that consistency from a real process. The two-day window makes temporal ordering unavailable, and the paper draws on cross-sectional data while using language of prediction and translation. The sample is confined to China's Open University system, an organizational form with distinctive administrative coordination, which is also what made the 95.7% response rate possible. AI is treated as one construct, and the authors concede that both the literacy scale and the innovation scale are legacy instruments that predate prompt engineering and human-AI co-creation. The paper also states that ethical approval and written consent were not required.

## What this means for practice

Instructors should read the mediation result as a claim about their own agency: knowing how AI works does not by itself change teaching, and the step that converts knowledge into practice is deliberately trying something and revising it. The moderation result argues against waiting for the institution to supply the answer. Faculty developers should build programs around teachers' own instructional problems rather than around tool demonstrations, and should protect time for experiments that are allowed to fail. Administrators should separate baseline provision, such as hardware, network, and licensed tools, from innovation-enabling support, such as small grants, protected time, and assessment-exempt pilots, because the paper's reading is that the first substitutes for teacher initiative while the second may not. The evidence for that separation is correlational.

## Limitations

- The design is cross-sectional and self-reported, so no causal claim about AI literacy producing better teaching survives it; the authors recommend longitudinal, multi-source, or experimental designs.
- The outcome is teacher-perceived student engagement rather than observed practice, and all four constructs come from the same respondents in one wave, which leaves shared method variance only partly addressed by CFA and Harman's test.
- The sample is restricted to China's Open University system, and school support is a single global perception score, so dimension-specific effects cannot be identified.
- The AI literacy and innovative behavior scales predate generative AI, and the paper reports that ethical approval and written consent were not required for the study.

## Citation

Guo, L., Lu, Y., & Gao, C. (2026). [*The association between teachers' artificial intelligence literacy and open education teaching practices in China: a moderated mediation analysis of teachers' innovative behavior and school support*](https://doi.org/10.1177/21582440261491441). *SAGE Open*, 16(3), 1-17.
