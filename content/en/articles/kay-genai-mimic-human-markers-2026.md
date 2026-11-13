---
title: "Can GenAI be trained to mimic human markers of extended written assignments in higher education?"
created: "2026-11-13T16:30:00-05:00"
updated: "2026-11-13T16:30:00-05:00"
type: article
published: 2026-08-11
sources: ['raw/papers/kay-genai-mimic-human-markers-2026.md']
source_depth: full text
confidence: high
evidence_context: educational
research_method: [secondary analysis]
page_kind: [evaluation]
level: [higher ed, undergraduate]
audience: [instructors, assessment designers, faculty developers, administrators]
foundations: [human-ai-collaboration]
technology: [generative-ai, llm, prompt-engineering]
assessment: [automated-assessment, assessment-validity, formative-assessment, educational-measurement]
methods: [quantitative-research]
discipline: [biology education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-13"
    agent: hermes-agent
verified: [citation, numbers]
---
> **Synthesis:** Whether an [[llm|LLM]] can stand in for a human marker matters to any program tempted to give students an early, [[formative-assessment|formative]] estimate of how an essay would score. Kay and colleagues had two versions of ChatGPT mark the same 50 [[biology-education|bioscience]] essays against the real rubric under four prompting conditions, comparing averages and spreads with the original human marks. The averages often looked close enough to invite adoption; the spread did not, and supplying human marks and feedback never repaired the scale, so a composite average is the wrong basis for approving [[automated-assessment|automated marking]].

## Key Findings

1. **Stable runs do not make a stable marker.** Repeating a prompt on the same essay returned marks inside a narrow band, so the disagreement that matters lies between essays.
2. **The composite mark flatters the model.** LLM marks sat close to human marks on average, but criteria diverged in opposite directions and canceled out.
3. **The mark range collapses.** Every model used a narrower spread than the human marker, awarding weaker essays more and stronger essays less.
4. **Calibration prompts do not restore the scale.** Supplying the human mark, with or without feedback, moved averages modestly while leaving the compression intact.
5. **Agreement sits in the middle.** The closest matches were mid-range essays; the largest errors fell at both extremes.
6. **Criteria fail unevenly.** Some criteria aligned reasonably while content and presentation diverged sharply, and no rubric feature explained which would.

## Repeated runs are stable; agreement across essays is not

Fifty first-year essays of about 1,500 words, drawn from a pool of 450 and spread across the mark range, had each been marked by one academic against a seven-criterion rubric with discrete mark steps on a 0–100 scale. ChatGPT4o and GPT5.1 Instant marked all fifty under four conditions: essay and rubric alone; the rubric with essays marked in sequence inside one chat; the human mark added; and the human mark with feedback added. Criterion marks were recombined with the original weights, giving 3,600 observations.

The authors first checked test-retest consistency. Fifteen essays were marked five times each in fresh chats. Median standard deviations ran from 1.7 to 4.8 for GPT4 and 1.9 to 5.9 for GPT5, with intraclass correlations of 0.84–0.97 and 0.50–0.91. One run can therefore represent a model's judgment, so the disagreement is structural rather than sampling noise.

## A similar average conceals a narrower distribution

On the headline number the models look usable. The human mean overall mark was 66.1 ± 0.9. GPT4b and GPT5b, the sequential conditions, were 7.1 ± 0.9 and 7.3 ± 0.9 higher; GPT4d 5.2 ± 0.9 higher; GPT4c, GPT5c and GPT5d between 2 and 4 points above; GPT4a was not significantly different at 1.2 ± 1.0, and GPT5a was 3.6 ± 1.1 lower.

The spread says otherwise. Every condition produced a predicted standard deviation 1.5 to 4.5 points lower than the human marker's, worst at −4 and −4.5 in the sequential conditions. The calibration model makes the mechanism explicit: regressing LLM marks on human marks gave a slope of 0.038 ± 0.008 where perfect agreement would give 1. An essay the human marked 50 was predicted to receive an LLM mark about 16 points higher; one marked 80, about 13 points lower. Averaged over criteria, the models retained between 28% and 76% of human variability.

Criterion and essay-level views are worse. The largest positive criterion difference was 16.1 ± 1.2 (Content, GPT4b), the largest negative −8 ± 1.5 (Presentation, GPT4a); Justification was steadiest, from −7.4 ± 1.4 to 3.6 ± 1.4. Across essays, overall differences ran from −24 to +21, and on Organization from −37 to +40; within one criterion the range reached 67 marks. The composite hid a model reaching a plausible total from a different set of parts.

## Showing the model the human mark does not teach it the human scale

The study's "training" is in-context calibration through [[prompt-engineering|prompt design]], not weight updates: conditions C and D place the human mark, then the marker's feedback, in the prompt. This is the intervention anyone proposing LLM marking is likely to reach for, and it half-worked. Mean marks under C and D usually sat within about 5 points of human marks and a few model-criterion pairs improved notably, but the means still ran as much as 8.61 points high and the compression remained.

The authors suggest rubric wording may contribute: descriptors separating bands with "good," "excellent" and "outstanding" give an experienced human a feel for the difference and give a model little to discriminate on. That is a hypothesis, not a tested result.

What the study can assert is firmer: adding human judgment to the context improved the average without restoring the ordering. A marker that cannot reproduce the rank order has not demonstrated judgment, however close its mean lands.

## What this means for practice

- **Instructors:** Do not hand a student an LLM mark as a predicted grade; make the student argue with the output against the rubric instead.
- **Instructors:** Replace benchmarking with criteria mapping and scaffolded [[peer-assessment|peer feedback]], so students predict a grade by matching descriptors to their work.
- **Assessment designers:** Pilot at criterion and essay level, reporting the calibration slope and change in spread rather than the mean difference.
- **Faculty developers:** Use model marks for [[evaluative-judgment|evaluative judgment]] training, since criterion-level disagreements expose where human markers rely on tacit discrimination.
- **Administrators:** Keep [[summative-assessment|summative]] decisions with humans, require consent before student work enters a platform, and demand per-criterion evidence, not composite agreement.

## Limitations

- Two versions of one vendor's model were tested through its web interface, and both were superseded by the time of submission.
- Each essay carries a single human mark treated as the quality benchmark, though inter-rater variation is well documented and a consensus mark would be stronger.
- The sample is 50 essays from one first-year bioscience module at one UK university and one rubric.
- Essays were submitted in Spring 2024, and student LLM authorship, though unlikely, cannot be excluded.
- Presentation order was fixed and ordering effects were never analyzed, so the sequential conditions confound sequence with the information supplied.

## Citation

Kay, W. P., Rutherford, S. M., Smith, D. P., Shore, A. M., & Francis, N. J. (2026). [Can GenAI be trained to mimic human markers of extended written assignments in higher education?](https://doi.org/10.1080/02602938.2026.2710688). *Assessment & Evaluation in Higher Education*. https://doi.org/10.1080/02602938.2026.2710688
