---
title: "Intrinsic and Contextual Factors Impacting Student Ratings of Automatically Generated Questions: A Large-Scale Data Analysis"
created: "2026-11-05T19:50:53-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/johnson-student-ratings-automatically-generated-questions-2025.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
audience: [researchers, educational technology developers, assessment designers]
level: [higher ed]
technology: [edtech-platform, learning-analytics, machine-learning]
assessment: [automated-question-generation, formative-assessment]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Johnson, Dittel and Van Campenhout analyze more than 5.2 million student-question interaction sessions with [[automated-question-generation|automatically generated]] fill-in-the-blank questions in the CoachMe practice feature of the VitalSource Bookshelf ereader, using the platform's thumbs up and thumbs down ratings as a lens on question quality. Ratings were rare — 3.31 thumbs up and 2.00 thumbs down per 1,000 sessions — but mixed-effects explanatory models of the 27,719 rated sessions show that negative ratings track features the generation process controls, including answer word part of speech, sentence and answer importance, and feedback type. The authors estimate that thresholding the two importance variables would cut the thumbs down rate to approximately 1.62 per 1,000 sessions, and they release the data and analysis code in an open repository.

## Key Findings

1. **Massive scale, sparse ratings.** The data set holds 5,214,211 student-question sessions spanning 809,848 questions, 432,930 students, and 9,320 textbooks, collected between January 2022 and January 2024. Ratings were given in only 27,719 sessions — 17,285 thumbs up and 10,434 thumbs down, or 3.31 and 2.00 per 1,000 sessions — and just 15,111 students (3.49%) and 22,844 questions (2.82%) ever attracted a rating.
2. **First-attempt success is the strongest signal.** Answering correctly on the first try cut the odds of a thumbs down to 0.439 in the question-intercept model and 0.294 in the student-intercept model; the raw rates were 3.04 thumbs down per 1,000 sessions when the first answer was wrong versus 1.19 when it was right.
3. **The importance of the sentence and the answer drives thumbs down.** A question made from the least important sentence in a chapter was far more likely to be rated down than one from the most important sentence (odds ratio = 2.38), and answer word importance, measured by chapter-level tf-idf, added an odds ratio of 1.64.
4. **The answer word's part of speech matters.** Adverb answers had an odds ratio of 2.44 (3.09 with student intercepts) and verb answers 1.89, while noun (1.16) and adjective answers sat close to the baseline; per 1,000 sessions, adverbs drew 5.23 thumbs down versus 1.76 for adjectives.
5. **Thumbs up models are nearly empty.** Only H1, H2 and H7 were significant in the thumbs up question-intercept model, all with very small effect sizes: the features explain dissatisfaction, not satisfaction.
6. **Student-level variance dominates.** The student-intercepts model fit far better than the question-intercepts model (BIC 101,572.9 vs 123,342.0), and hypotheses H1 through H8 were supported, H9 only partially, and H10 (manual review) in neither model.

## A five million session rating data set

The study is a large-scale analysis of the CoachMe feature in the VitalSource Bookshelf ereader, launched in January 2022: approximately 2.5 million automatically generated questions added to online textbooks as free [[formative-assessment|formative practice]]. The questions are fill-in-the-blank (FITB) cloze items created from important textbook sentences, ranked with the TextRank algorithm, with answer terms chosen by a rule-based filter; feedback after an incorrect answer is outcome-only or elaborative text drawn from the textbook, chosen so that no terminology inconsistent with the book is introduced. Students answer in a panel beside the textbook content, may retry as often as they like, and can rate each question thumbs up or thumbs down.

The analytical data set covers student-question sessions from January 2022 to January 2024, with sessions removed when more than ten minutes elapsed between the student's first and last action (1.4% of the data). By the standard BISAC subject classification, the largest domains were Medical (16.0%), Business & Economics (15.3%), and Psychology (13.9%), and most data comes from higher education institutions in the United States. Since each student and each question contribute many sessions, the authors fit mixed-effects logistic regressions with a random intercept for questions or, separately, for students — the data set was too large to fit both at once — and checked the two models for consistency. The approach is explanatory rather than predictive: the ten hypotheses H1 through H10 each motivate one variable, from first-attempt correctness and cumulative questions answered to answer part of speech, sentence and answer importance, answer rarity, blank location, feedback type, and manual review.

## What drives a thumbs down

Thumbs down was treated as the primary outcome because it flags dissatisfaction and because it is far more sensitive to the explanatory variables: variation across categorical levels ranges 27%–118% for thumbs down versus 5%–22% for thumbs up. The strongest drivers are experience variables — first-attempt correctness (odds ratio 0.439), spelling correction suggestions (0.627), and cumulative questions answered (after 100 questions the chance of a thumbs down was 1.8 times smaller) — followed by the features intrinsic to the generation process: sentence importance (2.38), answer importance (1.64), and part of speech. Consistent with the distinctiveness effect, rarer answer words drew fewer thumbs down, with the full range of the log-probability variable corresponding to an odds factor of 3, and blanks near the start of a sentence drew more thumbs down (H8). Feedback type (H9) was only partially supported: outcome feedback attracted more thumbs down than common answer feedback but not more than context feedback, which the authors attribute to context feedback's longer reading time, since elaborative feedback is effective but slower to read. Manual review (H10) was not significant in either model.

The BIC-based importance ranking confirms the pattern: the two most important variables, H1_first_correct and H2_cumulative_answered, concern the student's experience, while the top AQG-intrinsic variables are answer importance, sentence importance, and feedback type, and H10_reviewed was least important. The finding that student-level variance outweighs question-level variance suggests perception is strongly individual, while the consistency of coefficients across the two models reassures the authors that the core relationships are robust.

## Ratings by subject and the cost of tuning the generator

Restricted to the 17 subjects with at least 50 thumbs down, the subject analysis data set held 4,714,395 sessions, 90.4% of the original. Against the Science baseline, few subjects differed significantly: Religion drew fewer thumbs down (estimate −0.645, p = 0.0414), Medical more thumbs up (0.259, p = 0.0204), and Language Arts & Disciplines (−0.548, p = 0.00109) and Political Science (−0.362, p = 0.0159) fewer thumbs up. Computers was the exception — the only subject with more thumbs down than thumbs up (693 vs 651) — though only marginally significant (p = 0.0647); a manual review of all 71 of its questions with two or more thumbs down traced the problem to questions made from example material and answer terms lacking domain specificity.

Finally, the authors estimate the payoff of tuning the generator. Thresholding each quantitative feature at the 80th percentile would lower the thumbs down rate to 1.82 per 1,000 sessions for sentence importance and 1.76 for answer importance, with thumbs up nearly unchanged; rarity and blank location thresholds yield smaller gains. Thresholding both importance variables would reduce the available data by 34.7% and bring the thumbs down rate to approximately 1.62 per 1,000 sessions, an improvement of −0.38 — acceptable, since the CoachMe pipeline holds excess questions in reserve as replacements.

## What this means for practice

- **Assessment designers.** Student end-user ratings are a practical quality signal for generated items: adverbs drew 5.23 and verbs 3.43 thumbs down per 1,000 sessions versus 1.76 for adjectives, so answer term selection rules that avoid verbs and adverbs and favor important, domain-specific terms directly lower dissatisfaction.
- **AQG system developers.** The tuning estimates give a concrete target: thresholding sentence and answer importance cuts the thumbs down rate to approximately 1.62 per 1,000 sessions from a baseline of about 2.00, and the finding that manual review (H10) did not significantly change ratings questions the value of review passes as scale grows.
- **Learning analytics researchers.** Ratings plus clickstream data support closed feedback loops for system improvement, and the paper's open data and code repository enables replication, while the dominance of student-level variance (BIC 101,572.9 vs 123,342.0) is a reminder that perception data is heavily individual.

## Limitations

- The mixed-effects models could not include random intercepts for questions and students simultaneously because the data set was too large; the consistency of the two single-intercept models is indirect evidence only, and standard errors may be underestimated.
- Engagement and rating were both voluntary — only 3.49% of students ever rated — so the 27,719 rated sessions may come from a distinctive subgroup, and the study measures perceptions rather than learning outcomes.
- As an observational analysis, unmeasured factors such as preferences and attitudes toward the subject may influence ratings; the causal interpretation rests on the explanatory-modeling framework, not experimental control.
- The data skews toward United States higher education and the largest subject domains, so generalizability to specialized fields with fewer sessions remains to be established.

## Citation

Johnson, B. G., Dittel, J. S., & Van Campenhout, R. (2025). Intrinsic and Contextual Factors Impacting Student Ratings of Automatically Generated Questions: A Large-Scale Data Analysis. *Journal of Educational Data Mining*, 17(1), 217-247.
