---
title: "AI-Powered Problem- and Case-based Learning in Medical and Dental Education: A Systematic Review and Meta-analysis"
created: "2026-11-07T12:30:00-05:00"
updated: "2026-11-07T13:25:00-05:00"
type: article
published: "2025"
source_url: "https://doi.org/10.1016/j.identj.2025.100858"
sources: ['raw/papers/wei-ai-pbl-cbl-medical-dental-meta-analysis-2025.md']
confidence: high
page_kind: [synthesis]
research_method: [literature review]
discipline: [medical education]
level: [higher ed]
audience: [instructors, researchers]
pedagogy: [case-based-learning, problem-based-learning]
technology: [intelligent-tutoring, generative-ai]
methods: [meta-analysis-systematic-review, rct]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-07"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Wei and colleagues ran a PROSPERO-registered [[meta-analysis-systematic-review|systematic review and meta-analysis]] of AI-powered [[problem-based-learning|problem-based learning]] (PBL) and [[case-based-learning|case-based learning]] (CBL) in [[medical-education|medical and dental education]]. Six [[rct|randomized controlled trials]] met the criteria, all judged at some risk of bias. Four entered the knowledge meta-analysis, where low heterogeneity (I2 = 20%) and a fixed-effect model produced a 46% improvement (95% CI 0.18 to 0.73, P = .001); three produced a pooled satisfaction score of 0.7 (95% CI 0.47 to 0.92). Clinical reasoning could not be pooled because three trials used three different instruments. Most interventions were [[intelligent-tutoring|intelligent tutoring systems]], [[generative-ai|generative AI]] appears only in the two newest trials, and only two of the six studies tested CBL, a split the review never analyzes separately.

## Key Findings

1. **Six randomized trials, every one at some risk of bias.** Of 41 full texts, 35 were excluded, leaving 6 RCTs; RoB 2 rated the overall risk of bias "some concerns" for all six, and only 1 trial had a preregistered protocol.
2. **Knowledge acquisition rose by 46%.** Four trials covering 110 students in AI arms and 102 in control arms pooled with low heterogeneity (I2 = 20%) under a fixed-effect model: 46% (95% CI 0.18 to 0.73, P = .001).
3. **The significant contrast was against lectures, not against PBL/CBL.** AI arms were 70% higher than traditional lectures (95% CI 0.24 to 1.15, P = .003) but only 31% higher than PBL/CBL without AI, with an interval crossing zero (95% CI -0.33 to 0.66, P = .07); subgroups did not differ (P = .19).
4. **Clinical reasoning was never pooled.** Three trials used three instruments, and only two yielded an SMD: 1.34 (95% CI 0.91 to 1.77) for LearnGuide against traditional PBL and 0.90 (95% CI 0.26 to 1.54) for ChatGPT against traditional teaching. COMET matched human tutoring (61.45 against 59.46, P = .058).
5. **Satisfaction pooled at 0.7.** Three trials with 74 participants, moderate heterogeneity (I2 = 32%), and a fixed-effect generic inverse variance model: SM 0.7 (95% CI 0.47 to 0.92), P < .00001 in the abstract.
6. **The evidence is mostly about PBL, not CBL.** Four of the six trials tested PBL and two tested CBL, and the review reports no analysis that separates the two formats.
7. **Most interventions predate the chatbot era.** The review counts four of six as intelligent tutoring systems (COMET, CC-Cruiser, LearnGuide, ChatGPT), and generative AI appears only in the 2024 and 2025 trials.

## What the six trials actually tested

The review was registered in PROSPERO (CRD42024626780), followed PRISMA 2020, and searched PubMed, MEDLINE, the Cochrane Central Register of Controlled Trials, and Web of Science, plus Google Scholar for unpublished and conference material. The first search ran on 11 November 2024; an update followed on 24 March 2025. Of 41 full texts assessed, 35 were excluded: 13 were not about PBL/CBL, 6 studied virtual patients, 2 recruited non-students, 1 had no control group, 2 reported no control results, and 11 were reviews. Six RCTs remained.

Suebnukarn (2009) randomized 36 second-year dental students to COMET or human-tutored PBL. Aparicio et al. (2012) compared an intelligent information access system with free internet-based learning in CBL for 60 second-year medical students. Wu et al. (2020) randomized 38 second-year medical students to CC-Cruiser or traditional lectures in an ophthalmology clerkship. Zhao et al. (2023) compared Watson for Oncology with traditional CBL for 72 medical undergraduates. Wang et al. (2024) randomized 101 medical undergraduates and postgraduates to LearnGuide, a customized GPT, or traditional PBL. Zeng et al. (2025) randomized 42 fifth-year medical interns to ChatGPT-assisted PBL or traditional teaching. Four are PBL trials and two are CBL trials, and the review subgroups by comparator, not by format.

Risk of bias was "some concerns" overall for every trial. Five described random sampling without explaining the randomization process (D1). Deviations and missing outcome data were low risk. Measurement was low risk for objective examinations and some concerns in two: one reused the same examination before and after the intervention, risking a testing effect, and one assessed clinical reasoning with the CCTT Level Z, a subjective self-assessment answered by students who knew their group. One trial was preregistered; the other five drew some concerns for selection of the reported result. With six studies, publication bias could not be assessed.

## Knowledge gains depend on the comparator

Four trials using objective examinations entered the knowledge meta-analysis, with 110 students in the AI arms and 102 in the control arms. Heterogeneity was low (P = .29, I2 = 20%), a fixed-effect model was used, and the pooled effect was 46% (95% CI 0.18 to 0.73, P = .001).

The subgroup analysis matters more for a program already teaching with PBL or CBL. Against traditional lectures, the AI arms were 70% higher (95% CI 0.24 to 1.15, P = .003). Against PBL/CBL without AI, they were 31% higher, but the interval crossed zero (95% CI -0.33 to 0.66, P = .07). The review reports no significant difference between subgroups (P = .19), so it does not claim the contrasts differ; it reads the pooled average as support for AI.

The membership of those subgroups matters. The AI-versus-PBL/CBL subgroup is the two CBL trials, and neither found a significant knowledge difference alone: Aparicio et al. reported 78.53% correct answers against 76.92% for free internet search, and Zhao et al. reported 89.50 (SD 5.86) against 85.92 (SD 8.33), P = .139, with a 100% pass rate in both arms. The 70% contrast comes from the two PBL trials that used lectures as the comparator: Wu et al. found AI tutoring significantly higher than lectures (P = .034), and Zeng et al. found 93.90 (SD 3.65) against 90.33 (SD 4.08), P < .01. The pooled 46% is arithmetically correct, but the subgroup that speaks to whether AI adds value on top of an existing PBL or CBL design is non-significant, and both CBL trials sit there.

## Clinical reasoning: three instruments, no pooled estimate

Three trials measured clinical reasoning with three instruments: the clinical reasoning problem approach (Suebnukarn), the CCTT Level Z (Wang), and the mini-CEX (Zeng). The review calls the heterogeneity methodological and measurement-based, so pooling was not feasible. Only two trials reported data sufficient for an SMD; Suebnukarn used non-parametric tests without the statistics needed to judge normality.

COMET produced reasoning gains similar to human-tutored PBL: mean post-test 61.45 against 59.46, Mann-Whitney P = .058. That is a null result for superiority: an ITS standing in for a human tutor, not surpassing one. LearnGuide against traditional PBL gave SMD 1.34 (95% CI 0.91 to 1.77), with gains appearing by 12 weeks and holding at 14-week follow-up after no significant difference at 6 weeks. ChatGPT-assisted PBL against traditional teaching gave SMD 0.90 (95% CI 0.26 to 1.54) on the mini-CEX.

The two SMDs are not interchangeable: different instruments, different constructs. The larger comes from the trial whose outcome was a self-assessment the review scored as some concerns, in an unblinded design; the mini-CEX estimate is the more defensible and the smaller. Reading 1.34 and 0.90 as a ranking of LearnGuide over ChatGPT would exceed what the data support.

## Satisfaction: a score without a comparator

Four trials assessed satisfaction, and three entered the meta-analysis with 74 participants in total. Answers used scales of 1 to 4 or 1 to 5, and only one trial surveyed the control group, so the review used a standardized mean rather than a standardized mean difference. Heterogeneity was moderate (I2 = 32%), a fixed-effect generic inverse variance model was selected, and the pooled score was 0.7 (95% CI 0.47 to 0.92). The abstract gives P < .00001; the results text gives Z = 6, P < 0.0001, for the same estimate.

Tool means show why the scale matters: 3.84 out of 5 for the intelligent information access system, 3.65 out of 4 for CC-Cruiser, and 4.28 out of 5 for ChatGPT. The denominators differ, so the raw means are not comparable, and the review treats the first as the lowest of the three. Three of the four questionnaires went only to the AI arm, so the pooled score describes how satisfied those students were, not how much more satisfied than peers taught without AI.

## What this means for practice

- **Instructors.** Use AI where PBL/CBL is hardest to run at scale, such as case supply, timely hints, and simulated patient interviews; the evidence that it raises scores above a well-run small-group session is the non-significant subgroup.
- **Curriculum designers.** Compare a pilot against your current PBL/CBL, not against a lecture, and prespecify knowledge and reasoning measures; otherwise the evaluation reproduces the contrast that made the pooled effect look strongest.
- **Assessment designers.** Choose one clinical reasoning instrument and use it before and after, because CRP, CCTT Level Z, and mini-CEX measure different constructs and cannot be pooled.
- **Faculty developers.** Keep the facilitator in the loop: the trials describe tutors checking AI output and correcting errors, and COMET's best result was matching a human tutor.
- **Administrators.** Budget for hardware and case-base maintenance; scenario development fell from 1 month for 1 person to 4-5 hours only in COMET's successor.

## Limitations

- **Six small trials.** Five of six randomized between 36 and 72 students, all six drew some concerns, only 1 was preregistered, and publication bias could not be assessed with fewer than 10 studies.
- **English-language only.** Only English full texts were eligible across four databases plus Google Scholar, which the authors identify as a possible language bias.
- **The pooled knowledge effect mixes formats and comparators.** Four trials produced the 46%, the review never compares PBL with CBL, and the significant component is the contrast with lectures; the 46% is a standardized effect, not a 46% rise in examination scores.
- **Clinical reasoning remains unsynthesized.** Three instruments and two unpoolable SMDs leave the review's second primary outcome without any pooled estimate.
- **Satisfaction has no control.** Three of four questionnaires were answered only in the AI arm, so the pooled 0.7 is a level of satisfaction rather than a difference, and novelty cannot be excluded.
- **Follow-up is short.** Four of six measured outcomes immediately after a single session, so nothing speaks to retention or the complex skills PBL and CBL are meant to build.

## Citation

Wei, H., Dai, Y., Yuan, K., Li, K. Y., Hung, K. F., Hu, E. M., et al. (2025). [*AI-Powered Problem- and Case-based Learning in Medical and Dental Education: A Systematic Review and Meta-analysis*](https://doi.org/10.1016/j.identj.2025.100858). *International Dental Journal, 75*, 100858.
