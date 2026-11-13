---
title: "Effect of an Artificial Intelligence-Based Online Tutor on Student Reading Growth"
created: "2026-11-10T18:19:20-05:00"
updated: "2026-11-10T18:30:00-05:00"
type: article
page_kind: [evaluation]
research_method: [quasi-experiment, secondary analysis]
evidence_context: educational
discipline: [learning sciences]
level: [k 12, primary education]
audience: [instructors, researchers, administrators]
sources: ['raw/papers/burns-ai-tutor-reading-growth-2026.md']
source_url: "https://osf.io/preprints/edarxiv/x38n5_v1/"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [limitations-in-aied-research]
pedagogy: [scaffolding]
technology: [intelligent-tutoring, adaptive-learning, personalized-learning, speech-and-voice-technologies]
assessment: [learning-gains, educational-measurement]
methods: [quantitative-research, research-methods-aied]
institutions: []
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
---

> **Synthesis:** One public charter school in the upper Midwest gave every first- and second-grade teacher access to a web-based [[intelligent-tutoring|AI tutor]] for phonics and fluency, then left use to each teacher's discretion. The 95 students were sorted by logged minutes into High (n = 21), Low (n = 45) and No dosage (n = 29) groups, and fall-to-winter oral reading fluency was modeled with teacher as the Level 2 unit and fall fluency plus lunch eligibility as covariates. High dosage outgained low dosage (*g* = 0.56); the high-versus-no-dosage contrast was larger (*g* = 0.65) but landed at *p* = .026, outside the corrected .025 threshold, and is reported as non-significant. Students below the 25th percentile in the fall showed the widest gap, *g* = 0.89 for high versus no dosage. The pattern fits [[learning-gains|growth]] from [[adaptive-learning|adaptive]], [[personalized-learning|personalized]] reading practice, but cannot be separated from the teachers who chose to use the program.

## Key Findings

1. **The comparison was built from usage, not random assignment.** At least 10 minutes per week for at least 6 weeks defined High dosage; 22 of the 29 no-dosage students never logged in at all.
2. **High dosage outpaced low dosage on fluency growth.** Standard-score growth was 105.25 versus 98.17, *t*(64) = 2.13, *p* < .025, *g* = 0.56, controlling for fall fluency and lunch eligibility.
3. **The high-versus-no-dosage contrast missed the corrected threshold.** Growth was 105.25 versus 97.20, *t*(48) = 2.30, *p* = .026, *g* = 0.65 — a larger effect size the authors still report as non-significant.
4. **The groups began the year statistically comparable.** The model for fall oral reading fluency gave *F*(2, 90) = 1.53, *p* = .222, η² = .03, so baseline differences did not carry the result.
5. **Below the 25th percentile, high dosage beat no dosage by a large margin.** Growth was 108.27 versus 95.67, *t*(26) = 2.48, *p* < .025, *g* = 0.89; the overall model reached *p* = .015.
6. **Within that subgroup, high versus low dosage stayed moderate and non-significant.** The contrast was *g* = 0.59 at *t*(39) = 1.70, *p* = .10, across 11 high-dosage and 30 low-dosage students.
7. **Usage was a teacher decision, and teachers differed sharply.** Mean student minutes per week ranged from 0.00 to 13.42 by teacher, *F*(6, 88) = 10.35, *p* < .001, η² = .41.

## How the dosage groups were built

The program is [AI Tutor](https://www.projectread.ai/tutor) from Project Read, a web-based phonics and fluency tutor. A student reads a decodable story aloud into a microphone, one sentence at a time; misread words are retried, then the pronunciation is color-coded grapheme by grapheme. The program applies machine learning to [[educational-nlp|natural language processing]] to place the reader, generates a decodable story for the target skills, and reports error patterns. [[speech-and-voice-technologies|Speech recognition]] carries the assessment load: the student's own reading is the input.

Teachers had a one-hour training and a class code; use was not required. The publisher's recommendation — two to three sessions a week of five to ten minutes — set the High-dosage bar of at least ten weekly minutes for at least six weeks — a six-week minimum the authors call "somewhat arbitrarily selected." High-dosage students averaged 15.4 logins and 164.60 minutes over 15 weeks, or 10.97 minutes a week.

Reading was measured with aimswebPlus oral reading fluency in August and January: three one-minute passages, median recorded, converted to a slope of words per minute per week, then to a standard score (M = 100, SD = 15) so [[educational-measurement|measurement]] could span both grades.

## What the growth models show

The model put growth in standard-score units with teacher at Level 2 and fall fluency plus free or reduced-price lunch as covariates. The dosage term was significant at *F*(2, 90) = 3.52, *p* = .034, η² = .07 — a modest share of variance, which is why the discussion leans on the planned pairwise contrasts. On the authors' conversion, *g* = 0.56 is roughly 20.72 percentile points and *g* = 0.65 roughly 24.05.

The no-dosage comparison deserves care: the abstract and the results read differently. Against a corrected alpha of .025 for two planned comparisons, *p* = .026 does not clear the bar, and the results text calls that difference "non-significant and moderate" even though its point estimate exceeds the significant high-versus-low contrast. The subgroup result is cleaner, and it is where [[differential-effects-across-learner-groups|differential effects]] appear: among students at or below the 25th percentile on the fall screener (11 high, 30 low, 17 no dosage), high dosage beat no dosage at *g* = 0.89, about 32.93 percentile points, while high versus low did not reach significance.

## Why the finding is about dosage, not about the tutor

Because teachers sat at Level 2 and also decided who used the program, usage and teacher are confounded by design. One teacher's students averaged 13.42 minutes a week while another's averaged none, and group placement differed by teacher at χ²(12) = 76.28, *p* < .001. The authors concede they do not know why implementation varied, and that teachers who used the program may have differed meaningfully from those who did not — a familiar problem for [[research-methods-aied|research methods in AI education]], where a [[teacher-role|teacher's]] decision to adopt is itself a treatment.

The program is also multi-component. It pairs phoneme-level [[scaffolding|scaffolded]] correction with decodable passages and error-pattern reports a teacher could act on, and the study did not test which of those carried the growth. Decodable text paired with phonics instruction has its own evidence base, so the honest reading is that a bundle of aligned practices, delivered at a dose the teacher controlled, moved [[reading-education|reading fluency]]. That matters for [[equity-in-ai-education|equity]]: the below-25th-percentile result is the paper's most encouraging finding and rests on 11 students.

## What this means for practice

- **Instructors.** Treat logged minutes as the intervention, not access, and run the program as a short independent station: the no-dosage group ended the window with the lowest fluency growth.
- **Administrators.** Set a weekly minute floor and monitor it by classroom before judging a reading tool; teacher-level averages here ranged from zero to more than ten minutes a week.
- **Developers.** Report per-student minutes and session counts by default, so a school sees the dosage distribution rather than an adoption headline.
- **Researchers.** Report minutes and sessions alongside effect sizes; this study could only build dosage groups because the program logged them.

## Limitations

- No true control group and no random assignment: groups formed from teacher-chosen usage, which the authors name as the design's central vulnerability.
- One public charter school in the upper Midwest, 95 students in eight classrooms, where 68.0% of [[k-12|elementary]] students were eligible for free or reduced-price lunch and 27% scored proficient on the state reading test.
- Fluency only: August-to-January oral reading fluency, with no phonics-sensitive proximal measure, no comprehension measure, and no follow-up after winter.
- No component analysis, so the phonics feedback, the decodable stories and the error reports cannot be separated — a standing gap in [[limitations-in-aied-research|AI education research]].
- No data on the quality of core instruction; all teachers used the same literacy curriculum, but variation in delivery was not captured.
- The six-week minimum for High dosage was, in the authors' words, "somewhat arbitrarily selected," making the group boundary a design choice rather than a validated threshold.

## Citation

Burns, M. K., & Morton, T. J. (2026). [*Effect of an artificial intelligence-based online tutor on student reading growth*](https://osf.io/preprints/edarxiv/x38n5_v1/). EdArXiv preprint.
