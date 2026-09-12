---
title: OpRaise Report on Automated Marking of University Essays
created: "2026-09-12T14:05:00-04:00"
updated: "2026-09-12T14:05:00-04:00"
type: article
tags: [automated-essay-scoring, automated-assessment, assessment-validity, bias-mitigation, higher-ed, academic-integrity, feedback, teacher-role, ai-literacy, ethics]
research_method: [mixed methods, benchmark, qualitative]
audience: [instructors, administrators, assessment professionals, institutions, researchers]
level: [higher ed]
category: [assessment]
sources: ['raw/papers/opraise-automated-marking-ai-assessment-2026.md']
confidence: high
---

> **Synthesis:** The OpRaise project tested whether [[automated-essay-scoring|AI could mark]] authentic undergraduate essays as well as routine human marking does, using 761 Psychology essays from 125 students across three UK universities and three frontier models with 27 prompt configurations each. Its verdict is that the systems are impressive but not "good enough": agreement on degree classification band ranged from **35 percent to 65 percent** by institution, AI marks were systematically compressed toward the middle so that the best and worst essays were marked least accurately, AI was measurably more sensitive to linguistic features than human markers were, and the three models agreed with each other far more than any of them agreed with humans. The report's central argument is not that AI marking fails, but that **evidence collected in one context does not transfer to another**, and that the decision to adopt it belongs to institutions willing to validate locally and to keep final authority with people.

## Overview

The report, from the OpRaise project at the University of Cambridge and funded by ai@cam, opens with the pressure that makes its question urgent: generative AI has disrupted the sector, students already seek essay feedback from LLMs, and universities under workload pressure may soon adopt AI marking as a matter of course. Rather than argue the ethics of that in the abstract, the project built a benchmark against real assessment practice.

That benchmark choice is the report's methodological foundation and its most transferable idea. The mark a submission received in routine examination is not a perfect measure of its quality, and assessors of long-form essays do not perfectly align with each other because academic judgement legitimately varies. The authors adopt human marks as the benchmark anyway, on the grounds that academic judgement is the socially accepted gold standard in higher education — and they are explicit that human–human agreement is itself only moderate, which puts a logical ceiling on how strongly AI marks can reasonably correlate with human marks. Judgements about AI marking therefore have to be made against the human-human baseline rather than against perfect agreement.

The evaluation separates three questions that are often conflated: **accuracy** (does AI give the same or a reasonably close mark?), **reliability** (do the same and different models give consistent marks for the same submission?), and **validity** (are there systematic deviations between human and AI marks?). The report's most striking result is that a system can perform extremely well on the second while failing the first and third.

## Study Design & Method

- **Corpus.** 125 students at the University of Cambridge, the University of Nottingham and Manchester Metropolitan University volunteered **761 authentic long-form undergraduate Psychology essays** — 133, 172 and 456 respectively — submitted for formal assessment between 2022 and 2025, spanning 50 modules and 87 distinct assignments across all years of study, including coursework, open-book at-home examinations and invigilated examinations. Marks were moderated 0–100 scores produced by expert human assessors through routine institutional processes.
- **Models.** Three frontier systems from different providers, chosen on the principle that different families exhibit different biases and failure modes: **Claude Opus 4.6** (Anthropic), **GPT-5.4** (OpenAI) and **Gemini 3 Flash** (Google), all accessed through native APIs at temperature 0. Selection was constrained by the strictest privacy protections, since the dataset is sensitive; the authors note that model updates mean the results describe these specific models.
- **Prompting.** Rather than settle on one prompt, the project crossed three dimensions — rubric specificity (none, grade boundaries only, or full analytic rubric), calibration intervention (none, base-rate distributional information, or that plus an explicit debiasing instruction) and scoring strategy (holistic direct, analytic-decomposed, or holistic-deliberative band-then-mark) — for **27 prompt configurations per model**. The best prompt per model was selected on a 20 percent calibration subset (n = 153) and then applied to the full corpus.
- **Ensemble.** Compare four aggregation rules and report the winner, an inverse-RMSE weighted mean that scales each model's contribution by its calibration accuracy, on the reasoning that no single marker is reliably best.
- **Qualitative strand.** Nine semi-structured focus groups of about an hour with **25 participants** (14 staff, mean age 37.48; 11 students, mean age 21.5), covering general GenAI use in academia and specifically assessment and marking, with human- and AI-produced feedback samples shown to participants; thematic analysis identified three themes.

## Key Findings

- **Band accuracy was moderate at best, and varied by institution.** AI and human agreed on the UK degree band (First, Upper Second, Lower Second, Third, Fail) **63 percent** of the time at Cambridge, **53 percent** at Nottingham and only **35 percent** at Manchester Metropolitan — an overall range of 35–65 percent that the report says falls short of any threshold normally considered appropriate for adopting AI marking. Mean mark differences were 5.2, 5.2 and 8.3 points, with quadratic weighted kappa of 0.61, 0.42 and 0.33 and Spearman's rho of 0.65, 0.50 and 0.36.
- **Performance did not generalise across contexts.** Accuracy differed substantially between institutions in ways the authors attribute to assessment design, module, course, student body and institutional culture. Headline accuracy figures from one context cannot be taken as evidence that AI marking is ready elsewhere — the report's headline recommendation is therefore local validation on the institution's own materials before any deployment.
- **Reliability was excellent — and that is not the reassuring result it looks like.** Re-scoring 100 essays over five days gave intra-class correlations of 1.00 for Gemini, 1.00 for Claude and 0.97 for GPT-5.4, with identical marks in 99, 98 and 84 percent of cases. Cross-model agreement was high too (QWK above 0.74 for all three pairs; three-model ICC = 0.91), and in over 99 percent of cases at least two models awarded the same band, with disagreements almost always confined to adjacent bands. But requiring all three models to agree on the band succeeded for only **56 percent** of submissions, and — crucially — **AI marks agreed with other AI marks more closely than with human marks**. The focus groups also found that variability among human assessors is tolerated and sometimes welcomed, while comparable variability in an AI system is not.
- **Marks were compressed toward the middle.** Every system, and the ensemble, marked the tails least accurately: an essay a human marked 75 was on average scored several points lower by every AI system, an essay marked 50 several points higher, with the crossover where AI and human agree on average sitting in the upper 50s to low 60s. Quantified as a compression score where 1.0 would preserve the human spread, results ran from **0.47** (Cambridge, Gemini) to **0.82** (Nottingham, Claude). Prompting strategies designed to counter the bias did not remove it, and ensembling does not correct it because it is a systematic property of current-generation LLM scoring. The practical consequence is that AI is least accurate precisely at the boundaries that separate Firsts from Upper Seconds and passes from fails.
- **AI was oversensitive to linguistic features.** Across six feature categories — vocabulary range (type-token ratio, Guiraud's index, Herdan's C, Maas's a², Dugast's U), idea connection (connectives, entity continuity), sentence complexity (parse depth, clause ratio, sentence and word length, passive ratio) and text length — relationships with AI marks were small but statistically significant, while relationships with human marks were broadly negligible. Vocabulary range was the most robust predictor of ensemble marks, with a small-to-medium effect, driven more by Gemini and Claude than by GPT.
- **Feedback volume is not quality.** Human feedback averaged **100–200 words**; AI feedback was **three to eight times longer**. When comments were constrained to the same length, focus-group participants found it difficult to tell whether a human or a model had written them, and disagreed about whether longer feedback was better — some wanted it, others said it would put them off.
- **Stakeholders drew a line at authority.** The advisory board agreed that final authority over marking must remain human regardless of how extensively AI is used, a position endorsed by staff, students and board members alike. AI was accepted for quality assurance, moderation, triage, feedback support, consistency checks and error detection — as a "second pair of eyes" supporting, informing or scrutinising human judgement — and rejected as the final decision-maker. Disagreements between AI and human marks were framed as signals requiring human interpretation, with large discrepancies triggering human review rather than AI override.

## Implications for AI in Education

**The report names three adoption scenarios and grades them.** *Quality assurance of human marking*, where AI marks in parallel and significant differences trigger review, is the most conservative. *Marking assistant*, where AI ranks or categorises submissions by predicted quality or uncertainty — triaging complex cases, ordering submissions by human preference, or expanding brief human comments into learning-oriented feedback — is a genuine middle ground. *AI as primary marker*, with human review of a sample or of distributions, is judged acceptable only if system performance improves, and stakeholders did not endorse AI as a sole marker in any form.

**Assessment is a social contract, not only a marking function.** The qualitative strand found an implicit contract of respect, shared learning goals, fairness and mutual support, in which marking is where academics engage with students' thinking and students feel seen. Participants reported they would feel "cheated" by AI marking; staff worried that losing marking experience would erode skill development and job satisfaction; both groups saw the risk that reduced human contact would affect attendance and retention. The advisory board's framing — that assessment is "how students feel seen, how standards are enacted, how trust is maintained, and how institutions reproduce their own values" — is the report's answer to the efficiency case: faster marking is a real gain, but the report argues it is not a substitute for the relationship it displaces.

**Governance and legal exposure follow directly from the validity findings.** Because marks depend on attainment level and language use, some student groups may be affected more than others, which the report ties to institutions' duties under the UK Equality Act; under GDPR Article 22 students have a right to explanation with greater implications in some scenarios; and because model errors may not be easily caught, appeal processes may need revision. The authors also flag an **irreversibility risk**: AI performance is model- and institution-specific, so continued review is essential, but once staffing and investment have shifted, institutions may find it hard to keep collecting high-quality human marking and to return to it even if they wish to.

The recommended conditions for any deployment are evidence of stability, alignment with human judgement, and the absence of systematic bias — plus AI literacy training for all staff and students, particularly those involved in institutional decision-making.

**Limitations.** The study covers a single discipline, Psychology, deliberately chosen because essays drive degree outcomes there and the discipline assesses research judgement rather than fixed results — but that focus limits generalisability to other fields and assessment types. Three UK institutions is a narrow sample of assessment cultures. The models are those available at the time of study, and the authors warn that model updates create instability, so the results describe these systems only. Model selection was constrained by privacy requirements. The qualitative sample of 25 focus-group participants is small, and the report is a project report rather than a peer-reviewed study.

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