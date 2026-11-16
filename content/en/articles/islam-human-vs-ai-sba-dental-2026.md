---
title: "Comparison of human versus AI-Assisted workflows for developing structured clinical single-best-answer questions in dental education"
published: "2026-11-13"
created: "2026-11-16T10:20:00-05:00"
updated: "2026-11-16T10:20:00-05:00"
type: article
sources: ['raw/papers/islam-human-vs-ai-sba-dental-2026.md']
source_url: "https://doi.org/10.1186/s12909-026-10745-2"
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [medical education]
level: [higher ed, graduate]
audience: [medical educators, assessment designers, faculty developers]
technology: [llm, generative-ai, human-in-the-loop-ai]
assessment: [automated-question-generation, assessment-validity, formative-assessment]
contributors: [editor]
reviewed_by: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
source_depth: full text
evidence_context: educational
---
> **Synthesis:** Dental schools lean on faculty to write single-best-answer items, and item writing is slow work that competes with everything else a clinical teacher does. This prospective paired comparison at one dental college had 8 faculty produce 300 matched questions — 150 written by hand and 150 drafted by a custom platform built on Google Gemini 2.5 Pro, then reviewed, edited, and finalized by the author. Recorded item-finalization time fell from 6.0 to 1.0 minutes per item, blinded expert ratings rose from 4.1 to 4.7 on a five-point scale, and platform items sat inside prespecified difficulty and discrimination bands more often. Because generative drafting, a fixed output template, and mandatory faculty editing moved together, the study supports [[human-in-the-loop-ai|human-in-the-loop]] augmentation of item writing rather than autonomous [[automated-question-generation|automated question generation]], and it reports item statistics from routine [[formative-assessment|formative assessments]] rather than evidence of [[assessment-validity|assessment validity]].

## Key Findings
- **Eight faculty, 300 items, 150 matched pairs.** Experienced item writers at Fatima Jinnah Dental College (mean teaching and assessment experience approximately 7 years) each produced two questions per assigned learning objective, one manually and one through the platform, with the generation order counterbalanced to limit priming.
- **Recorded finalization time dropped from 6.0 minutes to 1.0 minute per item.** Manual items averaged 6.0 min (SD 1.2; median 6.0, IQR 5.5–6.4) against 1.0 min (SD 1.4; median 1.0, IQR 0.9–1.2), an estimated 5.1 fewer minutes per item (95% CI 4.6 to 5.7; Cohen's d = 3.79; p < 0.001) from a linear mixed-effects model clustering items within faculty.
- **Blinded expert quality ratings rose from 4.1 ± 0.8 to 4.7 ± 0.7.** The estimated mean difference was 0.65 points (95% CI 0.33 to 0.97; Cohen's d = 0.81; p < 0.001), with strong agreement among the three reviewers (ICC 0.83; 95% CI 0.78–0.87) rating content accuracy, clinical relevance, clarity, and distractor plausibility.
- **Platform items landed in the acceptable difficulty band more often: 96% versus 80%.** Mean difficulty was 0.40 for platform items (144/150 within 0.30–0.70) against 0.46 for manual items (120/150 within range); the study reports this comparison descriptively and did not test it.
- **Discrimination was slightly lower for platform items but met threshold more often.** Mean point-biserial discrimination was 0.24 for platform items, with 94% (141/150) at or above 0.20, versus 0.26 for manual items, with 81% (121/150) meeting the threshold; again, no formal test was run.
- **Functional distractors were marginally more common in platform items.** Of 450 distractors per workflow, 369 platform distractors (82%; 95% CI 78% to 85%) and 360 manual distractors (80%; 95% CI 76% to 83%) were selected by more than 5% of students.
- **The measured saving covers review and editing only, not the whole workflow.** Platform timing began when a usable draft appeared and stopped at finalization, excluding document upload, generation latency, failed JSON generations, and discarded or regenerated drafts, so the 5.1-minute difference is not an end-to-end comparison.

## A counterbalanced paired comparison at one college

The study was a prospective paired comparison, registered with the Thai Clinical Trials Registry (TCTR20260125010) on 25 January 2026 before recruitment, and approved by the institutional review board at Fatima Jinnah Dental College in Karachi (JAN-2026-OPR-01). Eight faculty members who already wrote single-best-answer questions were each assigned learning objectives in their own specialty, worked independently, and did not see each other's drafts. Objectives counted as matched when they shared a content domain, learner level, and cognitive process (application or analysis) under the institutional blueprint. No time limits were imposed, and both sets were written to the same examinable standard. The design is a within-person comparison, but the analysis clustered items by faculty author rather than modeling the matched pairs, a choice the authors flag as a limitation rather than a feature.

## What the platform generated, and what faculty still had to do

The intervention was a custom web application built in Next.js and deployed on Vercel, calling Google Gemini 2.5 Pro through its API with fixed generation settings — temperature 0.2 and a maximum output length of 1024 tokens — to reduce sampling variability. Faculty uploaded the lecture notes or textbook section tied to the objective, and the model's context window swallowed whole chapters without retrieval-augmented generation. A predefined prompt and a fixed template produced a draft with a clinical scenario, a focused lead-in, four options, and a key, with distractors instructed to be plausible but clearly wrong on the source text alone. Every draft then had to be reviewed, corrected against the source, and edited before use. That compulsory review is the part of the workflow the time metric actually measured, so the study evaluates a combined sociotechnical system — model, template, and faculty judgment — rather than a model on its own.

## Time saved, ratings raised, item statistics held

Items entered routine formative assessments as an approximately even mix, with paired items never given to the same cohort. The 150 students who sat them were 100 undergraduates and 50 postgraduates spread across six forms of roughly 50 items each (form sizes 32, 24, 27, 22, 23, and 22), yielding a median of 23.5 responses per item (range 22–32); unanswered items scored as incorrect, and discrimination used a corrected item-total correlation that removed the item from the total score. Blinding held on the rating side, where three subject-matter experts scored all 300 items after a calibration exercise on historical questions, with complete data across all four domains. Manual-item quality means across the eight authors ranged narrowly from 4.06 to 4.36, which suggests the platform advantage was not simply a function of one fast or one careless writer.

## What the numbers do not show

The authors are unusually careful about what the design licenses. Quality comparisons of 0.65 points did not separate the contribution of the model from the contribution of the fixed template, which standardized completeness and clarity whether or not the prose came from Gemini; the paper notes that structured templates elsewhere have improved clarity on their own. The psychometric indices were computed descriptively from low-stakes formative forms with heterogeneous cohorts, no test-level reliability was calculated, and no equivalence test was run — so "94% of items met the discrimination threshold" is a description of this item pool, not a claim that the two workflows produce interchangeable examinations. Discrimination, the metric most directly tied to score interpretation, was numerically lower for platform items (0.24 against 0.26), and the authors treat that as a reason to keep watching item statistics after adoption rather than as a settled result.

## What this means for practice

- **Clinical faculty.** Draft inside a fixed item template against a named source text, then verify the key and every distractor against that text before the item leaves your hands; the measured saving sits in a one-minute review pass, not in skipping the review.
- **Assessment designers.** Cost the workflow honestly before promising a time saving: upload, generation latency, failed generations, and abandoned drafts all sit outside the 5.1-minute figure, so pilot the full cycle and count the discards.
- **Faculty developers.** Build the review apparatus first — a small rubric across content accuracy, clinical relevance, clarity, and distractor plausibility, plus a calibration set scored by the people who will rate items — since reviewer agreement (ICC 0.83) is what made the quality comparison interpretable.
- **Program directors.** Track difficulty, discrimination, and distractor function on the first cohorts that sit AI-drafted items, because the pooled discrimination mean moved in the less favorable direction even as threshold compliance improved.

## Limitations

- Eight faculty at a single dental college, with sample size set pragmatically rather than by power calculation, so the estimates carry no claim to generalizability beyond this institution and its item writers.
- The time outcome begins with a usable draft and ends at finalization, excluding upload, generation latency, failed JSON generations, and discarded or regenerated drafts, so it measures post-draft review rather than end-to-end development.
- Editing behavior was not instrumented — no keystrokes, revision history, or regeneration events — so the share of AI-generated text surviving into final items could not be quantified.
- The mixed-effects models clustered by faculty author but did not model the matched learning-objective pairs, and the authors state that a formal paired analysis was not conducted; residual content dependency may remain because the same faculty wrote both versions.
- Psychometric analyses were exploratory, drawn from routine formative assessments across six forms and uneven cohorts, with no test-level reliability (such as Cronbach's alpha) and no high-stakes examination.
- Blinding of expert reviewers to item origin cannot be guaranteed, since AI-generated prose may carry recognizable stylistic features, and the cloud model's behavior may drift despite the reported API identifier.

## Citation

Islam, S., Gill, V., Qureshi, S., & Ali, M. (2026). [*Comparison of human versus AI-Assisted workflows for developing structured clinical single-best-answer questions in dental education*](https://doi.org/10.1186/s12909-026-10745-2). BMC Medical Education.
