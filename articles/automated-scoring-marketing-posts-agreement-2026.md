---
title: "Agreement and error in automated scoring of student marketing posts"
created: "2026-09-14T09:12:54-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
tags: [automated-essay-scoring, automated-assessment, assessment-validity, educational-measurement, llm, business-education, writing-education, feedback, simulation]
sources: ['raw/papers/automated-scoring-marketing-posts-agreement-2026.md']
confidence: high
research_method: [benchmark, educational measurement]
discipline: [business education, writing education]
audience: [assessment designers, assessment professionals, researchers]
level: [higher ed]
category: [assessment, evaluation]
---

> **Synthesis:** This study evaluates three [[automated-assessment|automated scoring]] procedures for student marketing posts — deterministic rules, an [[llm]], and their equal-weight hybrid — against independent human ratings within the BrandSim [[simulation]] module. On 60 student-authored posts, the LLM achieved the highest absolute agreement with the human mean (ICC(2,1) = .435) while deterministic rules reached only .091 and the hybrid .266, with mean absolute errors of 6.28, 17.22 and 10.53 points on the 0–100 scale. Giving the negative-biased rule component equal weight transferred its bias into the hybrid, pushing scores 10.53 points below the human reference and contradicting the hypothesis that combination would improve agreement. Adding 15 researcher-authored low-quality anchors raised human agreement from .338 to .902 and LLM agreement from .435 to .846 without changing any student score, showing that [[assessment-validity]] evidence for automated scoring depends on the corpus being scored. This bears directly on [[feedback]] design: the paper advocates evaluating automated scores on the student work for which they will be used and reporting score differences alongside rank ordering.

## Key Findings

1. On the primary corpus of 60 student posts, LLM absolute agreement with the mean human score was ICC(2,1) = .435 (95% CI [.322, .554]), versus .266 for the hybrid and .091 for deterministic rules.
2. Mean absolute error followed the same mode ordering on the 0–100 total scale: 6.28 points for the LLM, 10.53 for the hybrid and 17.22 for deterministic scoring.
3. The paired hybrid-minus-LLM ICC(2,1) difference on student posts was −.169 (95% CI [−.260, −.106]), excluding zero and contradicting the hypothesis that the equal-weight hybrid would agree more closely than either component.
4. Inter-rater agreement on the student-only corpus was ICC(2,1) = .338, but adding the 15 low-quality anchors raised it to .902 and lifted the hybrid's ICC(2,k) to .858 (95% CI [.809, .896]), above the .70 [[benchmark]] missed on student work (.421, 95% CI [.323, .507]).
5. Equal weighting transferred bias: deterministic scoring placed totals 17.22 points below the human mean, the LLM 3.85 points below, and the hybrid landed at −10.53, the mean of the two component biases.
6. The largest LLM overestimate was ANCHOR-11, a post consisting of a full stop with six relevant hashtags, scored 75 against a human mean of 30.5 for a +44.5 error; the probe reproduced 67 and 75 for the same near-empty, six-hashtag condition.
7. Rank ordering and absolute agreement diverged: the hybrid's total-score Spearman correlation of .714 exceeded the LLM's .650, but the .065 difference had a 95% interval of [−.038, .166] that includes zero.
8. A second archived run with gpt-4o produced ICC(2,1) = .238 and MAE = 12.28 on student posts, against .435 and 6.28 for gpt-4o-mini, with bias of −11.88 versus −3.85.

## Scoring Modes and the Equal-Weight Hybrid

The BrandSim research scoring module represents post quality through five rubric dimensions — brand consistency, audience fit, clarity and structure, persuasiveness and call to action, and appropriateness and compliance — each scored 0–20 and summed into a 0–100 total. Deterministic scoring extracts brand and audience terms, text length, hashtag counts, calls to action and risky expressions, mapping them to the five dimension scores through preset rules that assign identical scores to identical inputs. LLM scoring supplies brand context, target audience, post body and hashtags, and requests five scores in JSON format, with a prompt permitting integers or half-points, describing 10 as acceptable and 16–20 as excellent. The hybrid is an untrained arithmetic average of the two, and all 375 archived hybrid dimension scores equal that mean exactly.

This design sets up a comparison between [[automated-essay-scoring]] procedures that inherit very different assumptions. Prior work such as Attali and Burstein's e-rater V.2 combined grammatical, lexical and discourse features with statistical models of human ratings, and Kim (2025) showed that GPT-4 essay scoring improved when a detailed rubric, requested rationales and examples were combined. The BrandSim hybrid does none of that modeling: it merely averages a rule score with an [[llm]] score. The authors frame the mode comparison as a consequence of that weighting choice rather than as an optimal combination, and note that any revised combination intended to measure outcomes on the 0–100 scale should have its rule-based contribution estimated against a separate calibrated rating set and then evaluated for calibration and absolute error on held-out student work. Because combining two procedures can leave their rank ordering intact while shifting all values in one direction, the study reports absolute agreement and Spearman rank correspondence as answers to distinct assessment questions — a distinction central to [[educational-measurement]] in automated contexts. Dimension-level results also split: the LLM led in ICC, CCC and MAE for brand consistency, audience fit and persuasion, while the hybrid had the highest ICC and CCC for clarity and compliance.

## Method, Corpus Composition and Human Reference

Fifteen students enrolled in marketing-related programs at Chinese universities each wrote four Chinese-language posts for GreenLeaf, a reusable-bottle brand aimed at university students, producing 60 student posts translated into English for scoring. The author added 15 low-quality anchors spanning off-topic writing, brand mismatch, spam, exaggerated claims and near-empty text, making a 75-post corpus. All posts received scores from both raters and all three automated modes, yielding 375 post-by-dimension records with complete ratings.

Two unpaid teaching assistants independently assessed every post under anonymous identifiers in shuffled order, without calibration or discussion of disagreements during scoring, and without seeing automated scores or each other's ratings. Their mean total scores differed by 8.33 points (84.42 versus 76.08), and the two-rater arithmetic mean formed the human reference. This reference choice materially shaped the results: against rater 1 the LLM's mean bias was −8.02, against rater 2 it was +0.32, and against rater 2 the hybrid's MAE of 6.97 fell 0.05 points below the LLM's 7.02, reversing the ordering obtained against the two-rater mean. The human rubric's four band descriptions (0–5, 6–10, 11–15, 16–20) also differed from the LLM prompt's band language, a mismatch the authors flag as something to align before the planned [[feedback]] experiment. Dimension-level single-measure human agreement ranged from .640 for brand consistency and .593 for persuasion down to .173 for compliance and .012 for clarity, so the near-zero automated clarity agreement (LLM .040, hybrid .144) partly reflects an assessment problem shared with the human raters. Total-score 95% intervals came from 2,000 writer-cluster bootstrap samples drawing 15 writers with replacement and retaining all four posts per writer, a [[quantitative-research]] design whose intervals condition on the two observed raters.

## Anchor Sensitivity and the Near-Empty-Post Error

Adding the researcher-authored anchors changed the agreement estimates substantially while leaving student ratings untouched. Inter-rater total-score ICC(2,1) rose from .338 to .902, LLM ICC(2,1) from .435 to .846, hybrid from .266 to .752 and deterministic from .091 to .295; full-corpus MAEs were 7.58, 10.37 and 17.57 points respectively. The anchors widened the score range by appending deliberately poor texts to student writing already concentrated at the upper end of the scale, echoing Tang et al.'s (2026) finding that a first-round average-measures ICC of .89 across ten [[physics-education|physics]] responses fell to .30 across three intermediate responses. Reporting both estimates separates agreement within student work from the effect of the composition choice, an [[educational-measurement]] point with direct [[assessment-validity]] consequences for using an automated score as an outcome measure.

The anchors also exposed a specific scoring failure. ANCHOR-11, whose body was a full stop with six relevant hashtags, drew 75 points from the LLM against a human mean of 30.5 (+44.5), and the exploratory probe of 12 items reproduced high scores across near-empty conditions with growing hashtag counts: 30–35 with zero hashtags, 35–37 with one, 51 with three, 67–75 with six and 75 with twelve relevant hashtags. The six-irrelevant-hashtag item scored 30 on both runs, non-empty low-quality items scored between 25 and 35, and the authentic short relevant control scored 84 twice. The pattern points to a scorer that awards credit for hashtag relevance when there is little body text to assess, which the authors say should be tested with body length and hashtag content varied independently. Three of the 12 probe items differed between the two runs, the largest gap being eight points.

## Implications for Automated Scoring and Feedback Design

The study's practical recommendation is procedural: evaluate an automated score on the student submissions it will actually judge, and report score differences alongside rank ordering rather than substituting one for the other. Equal weighting was not neutral — the hybrid inherited the deterministic component's negative student-corpus bias, and its ICC(2,1) intervals lay below the .70 benchmark in the student subset. The authors also note that MAE quantifies disagreement within a corpus, but deciding whether an error is tolerable requires a tolerance tied to the expected learning effect, which this study did not specify. For [[business-education]] and [[writing-education]] contexts, that implies calibrating raters, aligning rubric and prompt band descriptions, and retaining blinded independent human assessment before a scorer serves as the outcome measure in a feedback experiment. Limitations are stated plainly: the corpus covers one brand task and 60 English translations without assessing translation effects, both main model runs happened once on different dates with aliases instead of fixed snapshots, and the bootstrap intervals are conditional on the two raters used.

## Connected Concepts

- [[automated-essay-scoring]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[llm]]
- [[business-education]]
- [[writing-education]]
- [[feedback]]
- [[simulation]]
- [[quantitative-research]]

## Connected Articles

- [[bandit-driven-llm-essay-scoring-2026]] — Learning to Grade Efficiently: A Bandit-Driven Prompt-Selection Framework for Low-Cost LLM Essay Scoring
- [[gpt-human-rater-essay-assessment-2026]] — Comparing GPT and human raters in essay assessment: Variability, bias, and the potential of LLM-based scoring
- [[aiawe-automated-writing-evaluation]] — AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models
- [[pecuchova-automated-grading-open-ended-genai-2026]] — Automated Grading of Open-Ended Questions in Higher Education Using GenAI Models
- [[can-ai-evaluate-assessment-llm-meta-assessment-2026]] — Can AI Evaluate Assessment? A Study of Large Language Model Meta-Assessment Performance
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid E-Assessment in Higher Education: Semi-Automated Grading of Paper-Based Written Examinations
- [[genai-marketing-education-roles-2026]] — When AI Wears Many Hats: The Role of Generative Artificial Intelligence in Marketing Education
- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity in AI in Education

## Citation

Xinan Li (2026). [*Agreement and error in automated scoring of student marketing posts*](https://osf.io/preprints/edarxiv/w4fzp_v1/). EdArXiv Preprints.
