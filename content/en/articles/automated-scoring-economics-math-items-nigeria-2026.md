---
title: "Automated software scoring of senior school certificate examination mathematical items in economics using a contextual similarity model"
created: "2026-09-27T07:29:04-04:00"
updated: "2026-09-27T07:29:04-04:00"
type: article
sources: ['raw/papers/automated-scoring-economics-math-items-nigeria-2026.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [instrument development]
level: [secondary]
audience: [instructors, researchers, assessment professionals]
foundations: [ai-education, interpreting-and-applying-aied-research]
pedagogy: [motivation]
technology: [ai-technologies, educational-nlp]
assessment: [automated-assessment, assessment-validity]
methods: [quantitative-research]
ethics: [global-south, digital-divide]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-27"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Olaoye, Owolabi and Olaoye (2026) build and validate an Automated Extended Essay Grading Software (AEEGS) that scores extended-response mathematical items in senior secondary Economics. The tool was written in Python around a semantic contextual similarity model and the WAEC model answer scheme, and it scores without training on graded scripts. Against 1,008 sampled scripts from a population of 274,978 Economics students in South-west Nigeria, the software agreed closely with 12 human examiners: Pearson coefficients from 0.604 to 0.864, and an intra-class correlation coefficient of 0.863, or 86.3%, for absolute agreement. The authors present this as evidence that automated scoring can award marks equivalent to human expert markers on mathematical computation items, and recommend adoption by teachers, evaluators and examination bodies to ensure consistency and save cost and time. The evidence is agreement on a low-scoring sample: AEEGS averaged 5.94 out of 20 marks against 5.97 for the raters, which the authors attribute to unfamiliarity with computer-based answering.

## Key Findings

1. **Development followed an explicit software process.** The AI was built with the waterfall model, validated by three software experts, and returned a Cronbach alpha of 0.86; the study used a correlational design.
2. **Scoring works by matching responses against model answers.** Each response is compared with the WAEC marking scheme and returns a score between 0 and 1, multiplied by the marks stipulated for the item.
3. **Agreement with individual examiners varied but was strong.** Pearson coefficients between AEEGS and the 12 raters ranged from 0.604 to 0.864, with raters 4 and 12 the lowest at 0.696 and 0.604, significant at the 0.01 level.
4. **Absolute agreement reached 86.3%.** The intra-class correlation was 0.863 for average measures and 0.758 for single measures, with F(1,007, 1,007) = 7.27, p < .001, so the null hypothesis was rejected.
5. **Both scoring routes produced low scores.** AEEGS averaged 5.94 out of 20 marks (29.7% as a mean percentage) against 5.97 (29.9%) for the human raters, with maxima of 17.00 and 18.00.
6. **The two distributions were broadly alike.** AEEGS placed 598 students (59.3%) at good and 181 (18.0%) at fair; the raters placed 633 (62.8%) at good and 183 (18.2%) at fair.

## How the software scores a response

The software compares each response with the model answers in the WAEC marking scheme, and a contextual similarity search returns a score between 0 and 1. That fraction is multiplied by the marks stipulated for the item in the scheme, and each testee's total is displayed at the back end of the database. Scoring is semantic matching against a fixed key rather than text generation or written feedback, and the developers say it needs no manual training on previously scored scripts, which sets it apart from supervised [[automated-essay-scoring]] engines and closer to the [[educational-nlp]] practice of matching student text to reference answers under [[automated-assessment]].

## What the agreement statistics show

Pearson correlations between the software and each of the 12 human examiners, who each marked 84 of the 1,008 scripts, ranged from 0.604 to 0.864. For absolute agreement, the intra-class correlation coefficient under a two-way mixed effects model was 0.758 for single measures and 0.863 for average measures, with F(1,007, 1,007) = 7.27, p < .001 and a significance value of 0.000 against a critical value of 0.05. The authors read 86.3% as clearing the 75% (0.75) reliability level they cite from Fleiss et al. (2003), and treat the null hypothesis of no relationship as rejected. In [[assessment-validity]] terms the distinction matters: this establishes agreement with expert [[evaluative-judgment]] in one sample, not the correctness of the marks, the same caution raised in [[agreement-not-quality-llm-coding-verification]].

## Why the scores were low, and what the authors compare against

The software's mean was 5.94 out of 20 marks (29.7%), with a median of 6.00 and a standard deviation of 2.53. The human raters returned a mean of 5.97 (29.9%), a median of 6.00, a standard deviation of 2.27 and a maximum of 18.00 against the software's 17.00. The authors attribute the low scores to examinees being unused to answering extended responses on a computer, citing Geller et al. (2023) and Araneda et al. (2022) on low computer literacy, and to students not being informed about the test. They set their coefficients beside earlier systems: 0.79 kappa agreement between the Essay Test Assessor and 30 human markers, 0.71 for ES4ES, and 97% agreement for E-Rater.

## What this means for practice

- **Instructors.** Treat the software as a scoring aid that agreed with human raters, not as a correctness check: the study's reference standard is 12 examiners marking the same scripts.
- **Instructors and test designers.** Prepare candidates for computer-delivered extended responses first: both routes returned means of 5.94 and 5.97 out of 20, which the authors link to unfamiliarity with computer-based answering.
- **Assessment professionals.** Set an agreement threshold in advance: the authors compare their 86.3% with the 75% (0.75) reliability level they cite from Fleiss et al. (2003) for essay scoring.
- **Administrators and institutions.** Budget the reference-marking workload deliberately: in this design each of the 12 raters marked 84 of the 1,008 scripts, so no examiner saw every response the software scored.

## Limitations

- Agreement with 12 human raters is the only reference standard reported. Coefficients establish consistency with those examiners, not that the marks awarded were substantively right.
- Each rater marked 84 of the 1,008 scripts rather than the full set, so no individual examiner's marks are comparable with the software across all responses.
- With the software and human means both near 5.94 and 5.97 out of 20, agreement is demonstrated mainly where scores are low, and the coefficients are not disaggregated by score band or by item.

## Citation

Olaoye, D. D., Owolabi, H. O., & Olaoye, O. T. (2026). [*Automated software scoring of senior school certificate examination mathematical items in economics using a contextual similarity model*](https://doi.org/10.3389/feduc.2026.1669504). *Frontiers in Education*, 11, Article 1669504.