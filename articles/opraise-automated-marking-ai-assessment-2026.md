---
title: "AI in University Assessment: Evaluating the Opportunities and Risks of Automated Marking"
created: "2026-09-12T14:05:00-04:00"
updated: "2026-09-19T10:56:42-04:00"
type: article
foundations: [academic-integrity, ai-literacy, teacher-role]
assessment: [assessment-validity, automated-assessment, automated-essay-scoring, feedback]
methods: [mixed-methods-research, benchmark, qualitative-research]
ethics: [bias-mitigation, ethics]
audience: [instructors, administrators, assessment professionals, institutions, researchers]
level: [higher ed]
sources: ['raw/papers/opraise-automated-marking-ai-assessment-2026.md']
confidence: high
---

> **Synthesis:** The OpRaise project tested whether [[automated-essay-scoring|AI could mark]] authentic undergraduate essays as well as routine human marking does, using 761 Psychology essays from 125 students across three UK universities and three frontier models with 27 prompt configurations each. Its verdict is that the systems are impressive but not "good enough": agreement on degree classification band ranged from **35 percent to 65 percent** by institution, AI marks were systematically compressed toward the middle so that the best and worst essays were marked least accurately, AI was measurably more sensitive to linguistic features than human markers were, and the three models agreed with each other far more than any of them agreed with humans. The report's central argument is not that AI marking fails, but that **evidence collected in one context does not transfer to another**, and that the decision to adopt it belongs to institutions willing to validate locally and to keep final authority with people.

## Overview

The report, from the OpRaise project at the University of Cambridge and funded by ai@cam, opens with the pressure that makes its question urgent: generative AI has disrupted the sector, students already seek essay feedback from LLMs, and universities under workload pressure may soon adopt AI marking as a matter of course. Rather than argue the ethics of that in the abstract, the project built a benchmark against real assessment practice.

That benchmark choice is the report's methodological foundation and its most transferable idea. The mark a submission received in routine examination is not a perfect measure of its quality, and assessors of long-form essays do not perfectly align with each other because academic judgment legitimately varies. The authors adopt human marks as the benchmark anyway, on the grounds that academic judgment is the socially accepted gold standard in higher education — and they are explicit that human–human agreement is itself only moderate, which puts a logical ceiling on how strongly AI marks can reasonably correlate with human marks. Judgments about AI marking therefore have to be made against the human-human baseline rather than against perfect agreement.

The evaluation separates three questions that are often conflated: **accuracy** (does AI give the same or a reasonably close mark?), **reliability** (do the same and different models give consistent marks for the same submission?), and **validity** (are there systematic deviations between human and AI marks?). The report's most striking result is that a system can perform extremely well on the second while failing the first and third.

## Study Design & Method

- **Corpus.** 125 students at the University of Cambridge, the University of Nottingham and Manchester Metropolitan University volunteered **761 authentic long-form undergraduate Psychology essays** — 133, 172 and 456 respectively — submitted for formal assessment between 2022 and 2025, spanning 50 modules and 87 distinct assignments across all years of study, including coursework, open-book at-home examinations and invigilated examinations. Marks were moderated 0–100 scores produced by expert human assessors through routine institutional processes.
- **Models.** Three frontier systems from different providers, chosen on the principle that different families exhibit different biases and failure modes: **Claude Opus 4.6** (Anthropic), **GPT-5.4** (OpenAI) and **Gemini 3 Flash** (Google), all accessed through native APIs at temperature 0. Selection was constrained by the strictest privacy protections, since the dataset is sensitive; the authors note that model updates mean the results describe these specific models.
- **Prompting.** Rather than settle on one prompt, the project crossed three dimensions — rubric specificity (none, grade boundaries only, or full analytic rubric), calibration intervention (none, base-rate distributional information, or that plus an explicit debiasing instruction) and scoring strategy (holistic direct, analytic-decomposed, or holistic-deliberative band-then-mark) — for **27 prompt configurations per model**. The best prompt per model was selected on a 20 percent calibration subset (n = 153) and then applied to the full corpus.
- **Ensemble.** Compare four aggregation rules and report the winner, an inverse-RMSE weighted mean that scales each model's contribution by its calibration accuracy, on the reasoning that no single marker is reliably best.
- **Qualitative strand.** Nine semi-structured focus groups of about an hour with **25 participants** (14 staff, mean age 37.48; 11 students, mean age 21.5), covering general GenAI use in academia and specifically assessment and marking, with human- and AI-produced feedback samples shown to participants; thematic analysis identified three themes.

## Key Findings

- **Band accuracy was moderate at best, and varied by institution.** AI and human agreed on the UK degree band (First, Upper Second, Lower Second, Third, Fail) **63 percent** of the time at Cambridge, **53 percent** at Nottingham and only **35 percent** at Manchester Metropolitan — an overall range of 35–65 percent that the report says falls short of any threshold normally considered appropriate for adopting AI marking. Mean mark differences were 5.2, 5.2 and 8.3 points, with quadratic weighted kappa of 0.61, 0.42 and 0.33 and Spearman's rho of 0.65, 0.50 and 0.36.
- **Performance did not generalize across contexts.** Accuracy differed substantially between institutions in ways the authors attribute to assessment design, module, course, student body and institutional culture. Headline accuracy figures from one context cannot be taken as evidence that AI marking is ready elsewhere — the report's headline recommendation is therefore local validation on the institution's own materials before any deployment.
- **Reliability was excellent — and that is not the reassuring result it looks like.** Re-scoring 100 essays over five days gave intra-class correlations of 1.00 for Gemini, 1.00 for Claude and 0.97 for GPT-5.4, with identical marks in 99, 98 and 84 percent of cases. Cross-model agreement was high too (QWK above 0.74 for all three pairs; three-model ICC = 0.91), and in over 99 percent of cases at least two models awarded the same band, with disagreements almost always confined to adjacent bands. But requiring all three models to agree on the band succeeded for only **56 percent** of submissions, and — crucially — **AI marks agreed with other AI marks more closely than with human marks**. The focus groups also found that variability among human assessors is tolerated and sometimes welcomed, while comparable variability in an AI system is not.
- **Marks were compressed toward the middle.** Every system, and the ensemble, marked the tails least accurately: an essay a human marked 75 was on average scored several points lower by every AI system, an essay marked 50 several points higher, with the crossover where AI and human agree on average sitting in the upper 50s to low 60s. Quantified as a compression score where 1.0 would preserve the human spread, results ran from **0.47** (Cambridge, Gemini) to **0.82** (Nottingham, Claude). Prompting strategies designed to counter the bias did not remove it, and ensembling does not correct it because it is a systematic property of current-generation LLM scoring. The practical consequence is that AI is least accurate precisely at the boundaries that separate Firsts from Upper Seconds and passes from fails.
- **AI was oversensitive to linguistic features.** Across six feature categories — vocabulary range (type-token ratio, Guiraud's index, Herdan's C, Maas's a², Dugast's U), idea connection (connectives, entity continuity), sentence complexity (parse depth, clause ratio, sentence and word length, passive ratio) and text length — relationships with AI marks were small but statistically significant, while relationships with human marks were broadly negligible. Vocabulary range was the most robust predictor of ensemble marks, with a small-to-medium effect, driven more by Gemini and Claude than by GPT.
- **Feedback volume is not quality.** Human feedback averaged **100–200 words**; AI feedback was **three to eight times longer**. When comments were constrained to the same length, focus-group participants found it difficult to tell whether a human or a model had written them, and disagreed about whether longer feedback was better — some wanted it, others said it would put them off.
- **Stakeholders drew a line at authority.** The advisory board agreed that final authority over marking must remain human regardless of how extensively AI is used, a position endorsed by staff, students and board members alike. AI was accepted for quality assurance, moderation, triage, feedback support, consistency checks and error detection — as a "second pair of eyes" supporting, informing or scrutinizing human judgment — and rejected as the final decision-maker. Disagreements between AI and human marks were framed as signals requiring human interpretation, with large discrepancies triggering human review rather than AI override.

## What this means for practice

- **Instructors.** Validate on your own materials before trusting any headline figure: AI–human band agreement was 63% at Cambridge, 53% at Nottingham and 35% at Manchester Metropolitan, so evidence from another institution is not evidence for yours.
- **Instructors.** Position AI as a second pair of eyes — parallel marking, triage, consistency checks, expanding brief comments into feedback — and keep the band decision with a person, since requiring all three models to agree on a band succeeded for only 56% of submissions. The report grades three deployment scenarios on that basis: quality assurance of human marking (parallel marking, review of disagreements) is the most conservative, a marking assistant (triage, ranking, expanding brief comments) is the genuine middle ground, and AI as primary marker is acceptable only if system performance improves — no scenario with AI holding final marking authority was endorsed. The conditions it sets for any deployment are evidence of stability, alignment with human judgment and the absence of systematic bias, plus AI literacy training for all staff and students.
- **Assessment professionals.** Do not read stability as accuracy: re-scoring gave intra-class correlations of 0.97–1.00, yet AI marks agreed with other AI marks more closely than with human marks, and marking was compressed toward the middle (compression score 0.47 to 0.82), least accurately at the First/Upper Second boundary.
- **Administrators.** Price the irreversibility risk before shifting staffing: because marks depended on attainment level and language use, some student groups may be affected more, engaging UK Equality Act duties and GDPR Article 22 rights to explanation, and appeal processes may need revision for model error. Treat assessment as a social contract rather than only a marking function: participants reported they would feel "cheated" by AI marking, staff worried that losing marking experience would erode skill development and job satisfaction, and both groups saw reduced human contact as a risk to attendance and retention.
- **Researchers.** Report accuracy against the human–human baseline rather than perfect agreement, and test whether mid-mark compression and sensitivity to linguistic features survive changes of discipline, assessment type and model version.

## Limitations

- The corpus is 761 essays from 125 volunteer students at three UK universities, and 456 of those essays come from a single institution (Manchester Metropolitan), so institutional coverage is uneven.
- The study covers one discipline, Psychology, chosen because long-form essays drive degree outcomes there; results therefore do not extend to fields or assessment types with different demands.
- Model selection was constrained by strict privacy protections, and the results describe only the three systems tested (Claude Opus 4.6, GPT-5.4, Gemini 3 Flash); the authors warn that model updates create instability.
- The qualitative strand rests on 25 focus-group participants (14 staff, 11 students) in nine groups, the best prompt per model was fixed on a 20% calibration subset (n = 153), and the work is a project report rather than a peer-reviewed study.

## Connected Concepts

- [[automated-essay-scoring]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[feedback]]
- [[teacher-role]]
- [[ethics]]
- [[higher-ed]]
- [[ai-literacy]]

## Connected Articles

- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[llm-essay-scoring-feature-weighting-2026]] — Feature weighting patterns in LLM-based essay scoring
- [[ai-scoring-language-bias-physics]] — AI scoring and language bias in physics explanations
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Human-in-the-loop AI scoring in a national assessment
- [[llm-essay-assessment-framework-reliability-2026]] — Framework for evaluating LLMs in essay assessment
- [[choi-anchor-aes-prompting-2025]] — Anchor-based prompting for accessible AES
- [[gpt-human-rater-essay-assessment-2026]] — Comparing GPT and human raters in essay assessment
- [[aivaluate-anxiety-assessment-2026]] — Student anxiety in performance-based assessments using AIvaluate

## Citation

OpRaise project team (2026). [AI in University Assessment: Evaluating the Opportunities and Risks of Automated Marking](https://www.emotional-cognition.psychol.cam.ac.uk/sites/default/files/OpRaise%20Report_DIGITAL.pdf). OpRaise project report, University of Cambridge, supported by ai@cam. (Project report; not peer reviewed.)
