---
title: "Response-length confounding in participant-morpheme networks: A length-controlled test in AI ethics education"
created: "2026-10-04T10:39:01-04:00"
updated: "2026-10-04T10:39:01-04:00"
type: article
sources: ['raw/papers/caeai-response-length-ai-ethics-education-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [case study, network analysis]
level: [graduate, higher ed]
audience: [researchers, curriculum designers, instructors]
pedagogy: [collaborative-learning]
technology: [educational-nlp, learning-analytics]
methods: [network-analysis, quantitative-research, ai-ed-evaluation]
foundations: [ai-literacy, limitations-in-aied-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A single-group proof-of-concept on an [[ethics|AI ethics]] case discussion asks whether shared vocabulary among learners grows after deliberation, and shows that the obvious answer can be an artifact of how much people write. Descriptively, the shared-term share of bipartite participant-morpheme networks rose, but post-discussion responses were only about 0.65 times as long, and a naive permutation test would have called the rise significant. Under MELE's length-controlled within-participant token-permutation test, neither increase was significant (Q6 p = .62; Q7 p = .15). The only corrected-significant item effect, perceived fairness, is floor-sensitive and reported as preliminary. The paper's contribution is methodological: for the [[network-analysis|participant-morpheme statistic]] it targets, degree-preserving nulls are degenerate and convergence tests are confounded by response length, so discourse-analytic claims need length-conditioned inference. MELE reports item, lexical co-use, and BERT polarity analyses side by side as separate, hypothesis-generating layers rather than one construct of ethical learning.

## Key Findings

1. Twenty mixed-discipline [[higher-ed|graduate students]] at a Japanese university deliberated an authentic AI job-screening dilemma grounded in the local shūkatsu (job-hunting) context, completing Q1–Q7 after individual reading (T1) and again after a facilitated discussion (T2) in one 125-minute session.
2. The shared-term share 𝑠3𝐵 rose descriptively — from 5.2% to 8.0% for Q6 and 4.6% to 7.9% for Q7 — while post-discussion responses were substantially shorter (content tokens about 0.65× their post-reading level; Q6 2,140 to 1,394; Q7 1,916 to 1,247).
3. Under the exact conditional within-participant token-permutation test, neither increase was significant relative to its length-conditioned null (Q6 observed Δ𝑠3𝐵 = +0.029 against a null mean of +0.027, 𝑝2 = .62; Q7 +0.033 against +0.028, 𝑝2 = .15), whereas a naive whole-bag swap gave nominally significant values (Q6 𝑝 = .037, Q7 𝑝 = .042).
4. Perceived fairness (Q2) rose significantly (𝑊 = 15.5, 𝑝 = .006, Holm/Bonferroni 𝑝 = .031; 𝑟𝑟𝑏 = −.77, large) but attenuated to non-significance (𝑝 = .11, 𝑟𝑟𝑏 = −.53) when the five participants who began at the scale floor were excluded.
5. A calibration study estimated the corrected test's false-positive rate at .044 to .062 across ten null cells, but one cell (𝑁 = 40, ratio 0.65) reached .062 with an exact 95% interval of [.052, .074] above the nominal .05, so calibration at that level is not demonstrated.
6. The BERT sentiment layer is exploratory: participant-level polarity rose non-significantly for Q6 (0.144 to 0.258, 𝑊 = 63.0, 𝑝 = .12, 𝑟𝑟𝑏 = .40) and Q7 (0.450 to 0.544, 𝑊 = 83.0, 𝑝 = .43, 𝑟𝑟𝑏 = .21), and no conclusion rests on it.

## How the MELE workflow is assembled

MELE combines three analyses that the paper keeps deliberately separate: Holm/Bonferroni-corrected Wilcoxon tests on five seven-point items (privacy, fairness, comfort, benefit, acceptance), length-controlled inference on bipartite participant-morpheme incidence networks built from two free-text prompts (Q6 problem identification and Q7 future support), and a BERT sentiment classifier run over the same free text. Respondents receive the case about a week in advance and prepare individually; in one 125-minute session they answer Q1–Q7 after silent review, join the facilitated discussion, then repeat the items. Both administrations allow consultation of the case text, and the post-discussion block is fixed at 30 minutes. The authors are explicit about what the instruments do not measure: the items are not treated as a unidimensional attitude scale or as ethical awareness, morpheme co-use is not agreement or reasoning quality, and model-estimated polarity is not emotional experience.

## Why length control is the paper's real target

The methodological core is a diagnosis. For bipartite participant-morpheme graphs, the conventional degree-preserving null is degenerate for the star configurations underlying the shared-term share — their counts are fixed by the degree sequence, so the ensemble variance of 𝑠3𝐵 is zero and the over-representation Z-score is undefined. A naive whole-bag phase-label swap, which centers its null at zero, then over-detects: it held its level under length balance (false-positive rate .056) but rejected in 82.6% of parametric null samples at the observed token ratio of 0.65 and in 47–50% of empirical-anchor nulls, so its rejections there are overwhelmingly false positives. The replacement is an exact conditional within-participant token-permutation test that pools each participant's tokens and repartitions them at the observed per-phase counts, conditioning the null on the real response lengths. Token-level rarefaction restores the nominal level too (.043–.051) but discards about a third of the longer phase's tokens and depends on the subsampling draw; in one injected-effect cell the token-permutation test reached power .92 against .83 for the rarefied test.

## The fairness item, reported as preliminary

All five items rose descriptively, but only perceived fairness survived correction, and the authors treat it as the weakest kind of result they are willing to report. Excluding the five floor responders leaves the same upward direction (means 3.53 to 4.13; eight increased, three decreased, four unchanged) with a medium-to-large effect (𝑟𝑟𝑏 = −.53) but no significance (𝑝 = .11). Cronbach's α does not rescue a scale reading: it was 0.863 at post-reading, 0.666 at post-discussion, and 0.813 pooled in the administered direction, but reverse-scoring Q1 in line with its normative valence lowers α to about 0.29, confirming that the five items are not unidimensional. The paper therefore calls Q2 a floor-sensitive, case-bound, single preliminary observation, not an established intervention effect.

## What this means for practice

- **Research and [[learning-analytics]] design.** A rising shared-term share should not be read as learning, consensus, or co-construction unless response length, prompt wording, and facilitator priming are controlled; for this participant-morpheme statistic, comparing discourse phases of unequal length requires either fixed-length prompts by design or a length-conditioned reference distribution.
- **Instructors.** Deliberation is a plausible setting for ethics learning, but the paper presents its item-level pattern as a hypothesis, not guidance: fairness-focused dilemmas might produce larger shifts, and only controlled, multi-case studies can test that. The workflow is a post hoc researcher tool, not a mid-seminar classroom metric.
- **Administrators and assessment designers.** The polarity and co-use outputs must not be used to grade, rank, or otherwise make consequential judgments about individual students; the study provides no evidence supporting individual consequential use, and such use would itself raise the ethics concerns the course examines.
- **Researchers.** Build the inferential control into the design and treat the fairness shift as provisional until it survives floor-responder exclusion and controlled, longitudinal, cross-cultural replication. The hand-built ethics/value morpheme partition and the small sentiment validation sample are open threads to close in a larger study.

## Limitations

- The design is single-group and single-institution (𝑁 = 20, one 30-minute discussion), so it limits precision and causal inference: testing effects, demand characteristics, maturation, and history cannot be excluded, and even Q2 admits no strong causal reading.
- The instrument is purpose-built (five seven-point items and two open-ended prompts); its [[assessment-validity|construct validity]] and reliability on larger samples are not established, the five items are not unidimensional, and prior ethics education was not collected as a baseline covariate.
- One null cell gave an estimated false-positive rate of .062 (𝑁 = 40, ratio 0.65) with an interval above nominal .05, so the [[simulation]] shows acceptable performance only within the evaluated conditions and does not establish calibration at .05.
- The participant-morpheme graphs omit syntax, pragmatics, and conversational moves, and co-use of a term need not imply a shared stance; no discussion transcript was analyzed, so the deliberation process itself is unobserved.
- The sentiment layer uses the general-domain Japanese model jarvisx17/japanese-sentiment-analysis, checked on 120 sampled sentences (accuracy .830 and macro-F1 .829 on the 94 binary-consensus sentences; .810/.808 against each rater's own labels), which may overstate full-corpus performance; the study was approved on 28 April 2022, and the classifier's behavior today may differ.
- The case is situated in the culturally specific Japanese shūkatsu context, and central-tendency response bias may attenuate Likert estimates in East Asian samples, so cross-cultural replication is essential before broader claims.

## Citation

Shao, T., Wang, X., Li, S., Matsuno, K., & Goto, M. (2026). [Response-Length Confounding in Participant–Morpheme Networks: A Length-Controlled Test in AI Ethics Education](https://doi.org/10.1016/j.caeai.2026.100685). *Computers and Education: Artificial Intelligence, 11*, 100685.