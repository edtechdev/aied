---
title: "Engagement Profiles in AI-Assisted ESAP: Associations with AI Use Indicators and Speaking Performance"
created: "2026-11-27T15:00:00-05:00"
updated: "2026-11-27T15:00:00-05:00"
type: article
published: "2026-10-27"
sources: ['raw/papers/zhang-engagement-profiles-ai-esap-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [latent profile analysis, survey]
discipline: []
level: [graduate]
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

> **Synthesis:** Zhang and Meng profiled learning engagement among 500 STEM [[graduate-education|master's]] students in an AI-assisted English for Specific Academic Purposes speaking course at one Chinese university. [[latent-profile-analysis|Latent profile analysis]] of behavioral, emotional, and cognitive engagement identified four groups: Low Engagement (22.4%), High Engagement (38.2%), Low Emotional Engagement (24.0%), and Low Cognitive Engagement (15.4%). Longer system-recorded weekly online duration was associated with higher odds of membership in the other three profiles than in Low Engagement, while self-reported [[generative-ai|GenAI]] frequency distinguished High and Low Cognitive Engagement from Low Emotional Engagement. After baseline adjustment, the High Engagement group scored higher in overall speaking than every other group. These are associations within a single course; engagement was measured in Week 15, and there was no non-AI control group.

## Key Findings
1. **Four configurations emerged.** The profiles differed in overall level and in how behavioral, emotional, and cognitive engagement combined.
2. **Uneven profiles were common.** The Low Emotional and Low Cognitive Engagement profiles together accounted for 39.4% of the sample.
3. **Online duration separated the low group.** Longer average weekly platform time was associated with higher odds of the other three profiles relative to Low Engagement after correction.
4. **Reported frequency separated different groups.** More frequent voluntary GenAI use was associated with High and Low Cognitive Engagement relative to Low Emotional Engagement.
5. **High Engagement led in speaking.** Its baseline-adjusted posttest overall score was higher than every other profile's, with differences in several but not all speaking dimensions.
6. **Use indicators are limited.** Frequency and duration describe amount of use, not students' purposes, feedback processing, or interaction quality.

## How the profiles were built

Of 536 first-year STEM master's students invited from 15 classes, 500 were retained after 36 exclusions: 12 for attendance below 80%, five for missing speaking scores, eight for missing key questionnaire items, five for low-quality responding, and six for unmatched records. The effective retention rate was 93.3%. The course carried three credits and included 48 contact hours across 16 weeks. Students used Chaoxing for materials and tasks and the FiF Oral Training System for speaking practice, [[ai-feedback-quality|automated feedback]], and generative dialogue in an AI companion module. Platform scores were used for practice feedback, not as outcome scores.

Engagement was measured in Week 15 with 15 adapted items: five behavioral, six emotional, and four cognitive, rated from 1 (strongly disagree) to 5 (strongly agree). Confirmatory factor analysis supported the three-factor model: χ²(87) = 119.477, p = 0.012, CFI = 0.993, TLI = 0.992, RMSEA = 0.027, 90% CI [0.013, 0.039], and SRMR = 0.032; alphas were 0.809, 0.844, and 0.832. Speaking was scored independently by human raters in Week 1 and Week 16 on five dimensions — professional content, organization and coherence, linguistic accuracy and range, fluency and intelligibility, and interactive responsiveness — each out of 20, for a total out of 100.

The four-profile solution had the lowest Bayesian information criterion (BIC = 3423.219, compared with 3432.382 for five profiles), entropy of 0.782, and average posterior probabilities of 0.932, 0.877, 0.845, and 0.883. Profile means for behavioral, emotional, and cognitive engagement were 2.652, 3.152, and 2.535 in Low Engagement; 4.285, 4.003, and 4.238 in High Engagement; 3.829, 2.772, and 3.766 in Low Emotional Engagement; and 4.168, 4.446, and 2.694 in Low Cognitive Engagement. The authors stress that these labels describe relative configurations in this sample, not externally validated learner types.

## What the use indicators and speaking scores showed

Average weekly online duration was 19.781 min in Low Engagement, 25.185 min in High Engagement, and 25.127 min in Low Cognitive Engagement. The mean frequency code was highest in Low Cognitive Engagement (M = 4.844) and lowest in Low Emotional Engagement (M = 3.767). In R3STEP models with Low Engagement as reference, each additional minute per week was associated with odds ratios of 1.479 (1.259–1.737) for High Engagement, 1.122 (1.028–1.224) for Low Emotional Engagement, and 1.432 (1.199–1.709) for Low Cognitive Engagement, all significant after Holm correction. Online duration also distinguished Low Emotional from High Engagement (OR = 0.759, 95% CI [0.634, 0.908], adjusted p = 0.010). For reported frequency, only Low Emotional versus High Engagement (OR = 0.774, 95% CI [0.673, 0.890], adjusted p = 0.002) and Low Cognitive versus Low Emotional Engagement (OR = 1.346, 95% CI [1.138, 1.591], adjusted p = 0.003) remained significant; none of the comparisons with Low Engagement survived correction. Excluding the 10 participants who selected the top-coded category of 10 or more uses per week left the same pattern.

Mean pretest speaking scores were similar across profiles: 82.413, 82.562, 82.487, and 82.486. Posttest means were 85.085, 86.636, 85.222, and 85.147. BCH analyses adjusting for pretest scores found an overall profile difference (Wald χ²(3) = 49.523, adjusted p < 0.001). The High Engagement profile had the highest adjusted posttest mean (M = 86.795, SE = 0.171) and scored above the other three after correction, with residual-standardized effect sizes of d = 0.785 (95% CI [0.489, 1.081]), d = 0.849 (95% CI [0.509, 1.189]), and d = 0.826 (95% CI [0.452, 1.200]). It also led in organization and coherence, linguistic accuracy and range, and interactive responsiveness. In fluency and intelligibility it exceeded only Low Engagement and Low Emotional Engagement. The omnibus test for professional content was significant (adjusted p = 0.016), but no pairwise comparison survived correction. All four profiles showed positive mean gains, which the authors state cannot be read as a net effect of AI-assisted instruction.

## What this means for practice
- **Instructors.** Students showing low behavioral and cognitive engagement may benefit from planning guidance and periodic feedback that clarifies task requirements and goals.
- **Instructors.** For students who participate but report low interest, consider topic choices tied to their research interests or academic communication needs.
- **Instructors.** For students with high participation but low cognitive engagement, give feedback on how to judge AI suggestions, assess their suitability, and explain revisions to their own responses.
- **Instructors.** Do not reduce support for students with high online activity; duration did not separate the High and Low Cognitive Engagement profiles.
- **Researchers.** Add dialogue logs and interviews, since amount of use cannot reveal how students process feedback or share cognitive work with GenAI.

## Limitations
- **Timing and design.** Engagement was measured only in Week 15, so temporal order is unclear; with no non-AI control group, speaking gains cannot be attributed to AI-assisted instruction.
- **Single setting.** Convenience sampling at one Chinese university limits generalizability, and some clustering confidence intervals still allowed non-negligible class-level dependence that single-level analyses did not model.
- **Self-report limits.** Engagement and GenAI frequency came from [[self-report-measures|questionnaires]], with possible recall and common-method bias; the top-coded frequency response limited differentiation above 10 uses per week.
- **Platform data limits.** System-recorded duration reflected amount of practice and could not capture purposes, feedback processing, or interaction quality; some idle time may have remained.
- **Assessment limits.** Pretest and posttest tasks shared structure and [[rubrics]], but formal task equivalence and delayed retention or transfer were not assessed.
- **Untested advice.** The profile-specific teaching suggestions were not evaluated through interventions and remain directions for practice.

## Citation

Zhang W and Meng J (2026) Engagement Profiles in AI-Assisted ESAP: Associations with AI Use Indicators and Speaking Performance. *Behavioral Sciences*, 16, 2014. https://doi.org/10.3390/bs16112014
