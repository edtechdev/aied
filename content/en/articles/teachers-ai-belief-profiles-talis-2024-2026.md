---
title: "Teachers’ AI Belief Profiles and Their Associations with AI Use, Pedagogical Applications, and Barriers: A Person-Centered Analysis of TALIS 2024"
created: "2026-09-30T15:20:47-04:00"
updated: "2026-09-30T15:20:47-04:00"
type: article
sources: ['raw/papers/10.3390_bs16101762.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [latent profile analysis, survey, secondary analysis]
level: [secondary]
audience: [instructors, faculty developers, administrators, policymakers, researchers, institutions]
foundations: [ai-education, teacher-ai-competency, teacher-role, limitations-in-aied-research]
pedagogy: [professional-training]
technology: [ai-technologies, generative-ai, technology-acceptance-model]
assessment: [self-report-measures]
methods: [latent-profile-analysis, quantitative-research]
institutions: [regulation]
ethics: [trust, privacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Fang and Jin ran a person-centered [[latent-profile-analysis|latent profile analysis]] on 40,680 lower-secondary teachers in 49 education systems from TALIS 2024, using ten items that measured perceived AI utility and perceived AI risk as two separable dimensions rather than one attitude. After assessing cross-system measurement comparability with fixed alignment, four profiles were retained: Indifferent (6.13%), Skeptical (21.41%), Measured Endorsement (56.29%) and Risk-Aware Strong Endorsement (16.18%). Reported AI use ran from 12.8% in the Indifferent Profile to 76.3% in the Risk-Aware Strong Endorsement Profile, which also reported the highest proportion of every one of the eight [[pedagogy|pedagogical]] applications. The key qualification is design: TALIS 2024 is cross-sectional and all measures are self-reports, so the associations are concurrent, no causal direction is established, and the profiles are belief configurations rather than fixed [[teacher-role|teacher]] types.

## Key Findings

1. **Four belief configurations, not a single positive-to-negative attitude.** The retained four-profile model had entropy = 0.941. Information criteria fell as profiles increased, with the largest BIC reduction from three to four profiles (∆BIC = 10,814.724), but the five- and six-profile solutions produced small profiles without substantively meaningful belief configurations. Changing the alignment reference system left classification agreement at 99.62% (adjusted Rand index = 0.989).
2. **Utility carried almost all of the differentiation; risk added a smaller subdivision.** Perceived AI utility ordered C4 > C3 > C2 > C1 (Wald χ2 (3) = 164,209.924, p < 0.001; pairwise Cohen’s |d| = 4.123 to 13.416), whereas perceived AI risk ordered C4 > C2 > C3 > C1 (Wald χ2 (3) = 106.178, p < 0.001; |d| = 0.056 to 0.335). The utility ordering held in all 49 education systems; the risk ordering varied across systems.
3. **AI-related professional learning tracked profile membership more consistently than background characteristics.** Relative to non-participation, participation raised the odds of membership in C2, C3 and C4 rather than C1, with odds ratios of 1.607, 3.113 and 5.856 (all p < 0.001). Age was not significant in any profile contrast.
4. **Reported AI use followed the utility gradient.** The overall weighted use rate was 49.5%, and profile rates differed significantly, F(3, 10,199) = 1436.459, p < 0.001: C4 76.3%, C3 54.8%, C2 25.9%, C1 12.8%.
5. **Users applied AI most for preparation, least for assessment and learning data.** Among the 20,394 AI users, the most reported applications were working with instructional content (73.9%) and designing lessons and activities (72.6%), and the least were supporting assessment (34.4%) and analyzing [[student-engagement|student engagement]] and performance (36.3%). The Risk-Aware Strong Endorsement Profile reported the highest proportion for all eight applications, most markedly designing lessons and activities (83.4%), working with instructional content (82.7%) and adjusting material difficulty (66.1%).
6. **Non-users’ barriers differed by profile.** Among the 20,286 non-users, the most common barrier was insufficient knowledge and skills (64.7%), followed by reservations about pedagogical appropriateness (50.1%) and resource and infrastructure constraints (42.3%). Pedagogical reservations were highest in the Indifferent (83.3%) and Skeptical (67.3%) Profiles against Measured Endorsement (36.6%) and Risk-Aware Strong Endorsement (21.8%); the Measured Endorsement Profile was constrained mainly by knowledge and skills (66.2%), and the Risk-Aware Strong Endorsement Profile by both knowledge and skills (58.9%) and resource constraints (57.1%).

## How the study was run

The analytic sample came from 194,521 teachers in the TALIS 2024 ISCED level 2 sample; 64,904 received the questionnaire form carrying the AI items, and after recoding official missing-value and out-of-range codes the initial valid sample was 47,984, reduced to 40,680 teachers in 49 systems once at least two valid responses per belief dimension were required. The 22,769 teachers answering all ten AI belief items formed a complete-response subsample used for sensitivity analysis, and the sample split into 20,394 AI users and 20,286 non-users. The two-factor structure of utility and risk fit the data well, χ2 (34) = 5721.068, CFI = 0.984, RMSEA = 0.059, SRMR = 0.043. Fixed alignment flagged 122 of 980 intercept and loading parameters (12.4%) as non-invariant, with 3.5% of loading parameters affected. In the pooled variable-centered comparison, perceived AI utility was positively associated with AI use (OR = 2.740) and perceived AI risk negatively associated with it (OR = 0.820); across the 49 systems, utility was positively associated with use in all 49, while risk was negatively associated in 40 systems and positively associated in nine.

## What this means for practice

- **Segment professional learning by belief profile, not by overall attitude.** The four profiles ranged from 6.13% (Indifferent) to 56.29% (Measured Endorsement), and the same non-use status masks opposite needs: address pedagogical reservations with the 83.3% share reporting them in the Indifferent Profile, and build knowledge and skills with the 66.2% reporting that constraint in Measured Endorsement.
- **Diagnose the barrier before designing the fix.** Insufficient knowledge and skills (64.7%) and reservations about pedagogical appropriateness (50.1%) call for different provision — practical competence in one case, examination of AI’s instructional value and limits in the other.
- **Do not read risk awareness as resistance to use.** The Risk-Aware Strong Endorsement Profile combined the highest utility with the highest risk and also had the highest use rate (76.3%), so risk-alert teachers need scrutiny-supporting training, not persuasion to adopt.
- **Separate breadth of use from quality.** Applications concentrated in content preparation (73.9%) and lesson design (72.6%) rather than supporting assessment (34.4%), so counts of tools used say nothing about pedagogical appropriateness or teacher oversight.
- **Treat AI-related professional learning as the most consistent correlate available.** Participation raised the odds of membership in the risk-aware profile fivefold (OR = 5.856 versus the Indifferent Profile), making it a stronger signal for targeting than age or educational attainment.

## Limitations

- TALIS 2024 is cross-sectional, so the associations among teachers’ AI beliefs, AI-related professional learning and AI use are concurrent, and their temporal ordering and causal direction cannot be established.
- AI use, pedagogical applications and barriers were all teacher self-reports, so the study measures reported use status and range of applications, not frequency, depth, instructional quality or responsible integration.
- AI-related professional learning was a binary indicator of participation in the previous 12 months; because it was the correlate most consistently associated with profile membership, the findings show that exposure matters but not what kind of provision matters.
- The profiles capture belief content under TALIS’s broad definition of AI, which names no specific tool or application context, and they generalize only to the 49 education systems that administered the items.

## Citation

Fang, J., & Jin, Z. (2026). [Teachers' AI Belief Profiles and Their Associations with AI Use, Pedagogical Applications, and Barriers: A Person-Centered Analysis of TALIS 2024](https://doi.org/10.3390/bs16101762). *Behavioral Sciences*, 16(10), 1762.