---
title: "GAI hallucinations and user dependence: cognitive-affective responses and individual differences"
created: "2026-10-11T08:05:00-04:00"
updated: "2026-10-11T08:05:00-04:00"
type: article
sources: ['raw/papers/frontiers-gai-hallucination-dependence-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [experiment, survey]
audience: [researchers, educational technology developers, instructors]
pedagogy: [motivation, student-engagement]
technology: [generative-ai, llm, conversational-ai]
assessment: [self-report-measures]
methods: [quantitative-research]
foundations: [ai-literacy, critical-thinking, cognitive-offloading]
ethics: [hallucination-risk, trust, trust-calibration, ai-sycophancy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-11"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A between-subjects experiment with 546 participants showed that the same [[generative-ai]] dialogue produced lower [[trust]] and perceived controllability, higher cognitive dissonance and frustration, and lower GAI dependence when it was labeled as containing fabricated information than when it was labeled as verified accurate. The headline is that a [[hallucination-risk]] label did not intensify reliance: dependence scores fell from M = 3.254 to 2.935. The parallel model split into three negative indirect associations and one positive one through dissonance, so evaluations of an unreliable answer did not move dependence in a single direction. Only higher [[ai-literacy]] weakened the controllability–dependence link; the other seven moderation hypotheses failed the multiplicity-adjusted criteria.

## Key Findings
1. In a two-condition between-subjects experiment, 546 participants (273 per condition) viewed the identical GAI dialogue labeled either as verified accurate or as containing fabricated information, so the accuracy label, not the dialogue, varied.
2. Under the hallucination label, trust fell from M = 5.502 to 4.426 and perceived controllability from 4.674 to 3.710, while cognitive dissonance rose from 2.916 to 5.143 and frustration from 2.505 to 4.245 (all p < 0.001).
3. Dependence was lower in the hallucination-labeled condition (M = 2.935 versus 3.254; mean difference 0.319, 95% CI [0.176, 0.461], d = 0.377), so identifying a fabricated answer did not increase reported dependence in this brief exposure.
4. In the parallel model explaining 52.0% of dependence variance, indirect associations were negative through trust (−0.568), controllability (−0.184), and frustration (−0.363), but positive through cognitive dissonance (0.436).
5. The total indirect association was −0.679 (95% CI [−0.866, −0.499]) and the adjusted direct coefficient was 0.360 (95% CI [0.194, 0.527]); their sum equals the −0.319 group contrast reported for dependence.
6. Only the GAI literacy × perceived controllability interaction met both support criteria (b = −0.125, Holm-adjusted p = 0.003): the controllability–dependence slope fell from 0.262 at low literacy to 0.037 at high literacy.
7. The joint moderation model explained 68.6% of variance, but the remaining seven moderation hypotheses were unsupported under the directional and Holm-adjusted criteria.

## What the experiment manipulated
The study held the stimulus constant and varied only the accompanying accuracy information. All participants read the same static dialogue between a user and an [[llm]]-based assistant about a Chinese quantum-encryption standard, a topic selected for its unfamiliarity (pretest mean familiarity 1.80, SD = 0.81; 25 of 30 raters selected 1 or 2). One group was told the answer had been verified by experts and confirmed accurate; the other was told it had been confirmed to contain false or fabricated information. A manipulation check registered the difference: perceived error averaged 6.26 (SD = 0.68) under the hallucination label versus 2.07 (SD = 0.71) under the accuracy label, Welch t(543.12) = 70.25, p < 0.001. Students made up 386 of the 546 participants (70.7%), and the median questionnaire-completion time was 6.87 minutes. Because expert endorsement appeared only in the accuracy condition and no unlabelled condition was included, assurance and endorsement were not independently manipulated.

## Opposing pathways to dependence
Dependence did not behave like a simple trust signal. The parallel model used the label as predictor and [[conversational-ai]] responses as parallel mediators, explaining 52.0% of dependence score variance. Indirect associations were negative through trust (−0.568, 95% CI [−0.677, −0.461]), controllability (−0.184, [−0.260, −0.113]), and frustration (−0.363, [−0.496, −0.239]), but positive through cognitive dissonance (0.436, [0.282, 0.593]). The total indirect association was −0.679 ([−0.866, −0.499]) and the adjusted direct coefficient was 0.360 ([0.194, 0.527]); their sum reproduced the −0.319 group contrast. The authors read the positive dissonance path as conflict about reliance coexisting with a continuing perceived need for the tool, not as evidence that participants used GAI more. Pooled correlations tell a related but distinct story: dependence correlated positively with trust (r = 0.649) and controllability (r = 0.504), and negatively with dissonance (r = −0.327) and frustration (r = −0.466).

## Literacy, self-efficacy, and the moderation criteria
The joint moderation model, containing both moderators and all eight interaction terms, explained 68.6% of the variance in dependence. Hypotheses required two things: an interaction pointing in the predicted direction and survival of Holm adjustment across the eight tests. Only the literacy × controllability interaction cleared both (b = −0.125, HC3 SE = 0.035, Holm-adjusted p = 0.003, f² = 0.022). Simple slopes showed the positive controllability–dependence association dropping from 0.262 at one SD below mean literacy to 0.037 at one SD above, where the interval included zero. The [[self-efficacy]] × dissonance interaction was significant before adjustment (b = 0.082, unadjusted p = 0.011) but not after (Holm p = 0.074), and its sign ran opposite to prediction. No self-efficacy interaction met both criteria. The authors treat confidence in using GAI and application proficiency as non-interchangeable, and decline to recast nonsignificant results as hidden nonlinear mechanisms.

## Reading the numbers cautiously
Measurement quality was high but not conclusive. A seven-factor confirmatory model fitted closely, χ²(539) = 543.17, CFI = 0.9998, TLI = 0.9998, RMSEA = 0.0038, with Cronbach's α from 0.954 to 0.994; the authors note that strong internal consistency across four dependence items still invites concern about item breadth and redundancy. The mediators and the outcome were captured in the same post-exposure questionnaire, so the temporal ordering of the indirect pathways remains unresolved and the dependence score reflects reported tendencies at assessment rather than habits formed during one brief exposure. The stimulus covered a single unfamiliar technical topic with a predominantly Chinese, largely student sample. Sensitivity checks removing attention-check failures or never-users, and adjusting for education and occupation, kept the same signs for the four indirect point estimates, but these were not treated as additional significance tests. The paper frames the whole pattern as statistical association, not causal process.

## What this means for practice
- **Instructors.** The accuracy label attached to an answer changed how participants judged it, so telling learners only that output is "AI-generated" is unlikely to be sufficient; specific, substantiated verification claims, and a visible basis for them, matter for immediate [[trust-calibration]].
- **[[educational-technology-developers|Educational technology developers]].** Because expert endorsement and accuracy assurance were bundled in one label, the design cannot say which wording or source is most effective; interfaces should let users inspect verification evidence rather than accept a bare badge.
- **Evaluation and monitoring.** Judging one output and monitoring one's pattern of use are complementary targets: source checking addresses the reliability of a particular response, while reflection on unsuccessful attempts to reduce use addresses a different concern.
- **Training design.** The literacy–controllability result suggests the weight learners give to a single response's manageability deserves attention, but it does not show that literacy training reduces dependence, and low confidence is not on its own a marker of vulnerability.
- **Framing.** No intervention was tested, so these implications support distinguishing targets for future work rather than prescribing a remedy; the experiment manipulated communicated accuracy information, not objective answer accuracy.

## Limitations
- The hallucination condition was an externally supplied label on one static dialogue. Participants did not observe a spontaneous hallucination or receive output of varying accuracy, and the manipulation check established a difference in average perceived error, not correct identification by every participant.
- Dependence and all four mediators were measured through [[self-report-measures]] in the same post-exposure questionnaire after a single brief exposure, leaving the mediator-to-dependence ordering unresolved and precluding causal conclusions.
- Support for a moderation hypothesis required both a predicted-direction interaction and a Holm-adjusted p below 0.05 across eight tests; only H5c met both, while the self-efficacy × dissonance interaction reached unadjusted p = 0.011 but Holm p = 0.074.
- The sample was predominantly Chinese and included 386 students (70.7%), and the stimulus addressed one unfamiliar technical topic, limiting generalization across cultural, occupational, and task contexts and across platforms.
- Expert endorsement appeared only in the accuracy-labeled condition and no unlabelled condition was included, so accuracy assurance and expert endorsement were not independently manipulated.

## Citation
Liu, R., Jiang, H., & Pang, F. (2026). [GAI hallucinations and user dependence: cognitive-affective responses and individual differences](https://doi.org/10.3389/fpsyg.2026.1939367). *Frontiers in Psychology, 17*, 1939367.