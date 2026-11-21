---
title: "From Plagiarism to Critical Thinking: How Students at Different Educational Levels Perceive the Ethical Challenges of Generative AI"
created: "2026-11-21T08:20:00-05:00"
updated: "2026-11-21T08:20:00-05:00"
type: article
published: "2026"
discipline: [learning sciences]
foundations: [ai-literacy, critical-thinking, academic-integrity]
pedagogy: [student-experience]
technology: [generative-ai]
assessment: [self-report-measures]
ethics: [ethics, privacy, bias-mitigation, digital-divide, differential-effects-across-learner-groups]
methods: [quantitative-research]
research_method: [survey, structural equation modeling]
audience: [researchers, faculty developers, instructors, administrators]
level: [k 12, higher ed]
page_kind: [evaluation]
sources: ['raw/papers/licardo-students-ethical-challenges-genai-2026.md']
confidence: medium
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.3390/educsci16111936"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [generative-ai, ai-literacy, critical-thinking, academic-integrity, ethics, education-levels, self-report-measures]
connected_articles: []
---

> **Synthesis:** Licardo and Šindić ask whether students at different educational levels weight the [[ethics|ethical]] challenges of [[generative-ai|generative AI]] differently, or whether they converge on the same concerns. In a cross-sectional survey of 1,299 Slovenian students — 315 in Grades 7–9, 535 in secondary programs, and 449 in universities — they compared agreement with eight general educational challenges and ratings of the importance of ten ethical challenges, then tested whether educational level explained additional variance in an overall ethical-importance score beyond gender, self-rated AI knowledge, and familiarity. Statistically significant differences appeared for 17 of the 18 items, with generally larger effects for ethical challenges; university students consistently rated ethical issues as more important, and the widest gaps concerned [[critical-thinking|critical evaluation]], plagiarism, and false or inaccurate AI-generated information. Educational level added 15.3 percentage points of explained variance in the regression, while self-rated knowledge and familiarity contributed nothing detectable. The design is cross-sectional and built entirely on [[self-report-measures|self-report]], and multigroup factor analysis did not establish measurement invariance, so the findings describe differences in perceived salience rather than developmental progress or demonstrated ethical competence.

## Key Findings

- **Most items separated the three groups.** Significant differences emerged for 17 of the 18 challenges; the only exception was perceived negative effects of AI on students' social and emotional development, where the group means were nearly identical.
- **University students rated every ethical issue as more important.** All ten ethical challenges drew higher mean importance ratings from university students than from either younger group.
- **The widest gaps concerned evaluating and trusting output.** Lack of critical evaluation showed the largest separation (university 3.33 against primary 2.09 on the four-point scale), followed by [[academic-integrity|plagiarism]] (3.09 against 1.99) and false or inaccurate AI-generated information (3.42 against 2.46).
- **The two younger groups often looked alike.** Primary and secondary students did not differ significantly for intellectual property, bias and unfairness, data privacy, anthropomorphism, or negative societal impacts; their ratings diverged on critical evaluation, plagiarism, misinformation, dependence on AI, and environmental impacts.
- **Educational level carried the composite score.** Adding educational level to a model already containing gender and two self-report measures raised explained variance from about 7% to 22.4%, an increment of 15.3 percentage points.
- **Self-reported AI knowledge did not.** Neither self-rated knowledge of AI use nor perceived familiarity with generative AI was significantly associated with ethical importance in the final model, and the gender association shrank once educational level was included.

## Two item sets and three cohorts

The study was a quantitative, cross-sectional survey and a secondary analysis of data collected for a Slovenian national project on generative AI in education. The sample covered 1,299 students from 38 educational institutions: 315 primary school students from 15 schools, 535 secondary school students from 19 schools, and 449 university students from four higher education institutions. Groups were classified according to [[education-levels|ISCED level]], and primary and secondary schools were recruited through regionally stratified sampling while university students came through institutional channels; individual classes and students were not randomly sampled. Mean ages were 13.24 years in the primary group, 16.55 in the secondary group, and 21.60 in the university group, and the university subsample was predominantly female (90.9%), a composition the authors flag when interpreting gender effects.

The online questionnaire, administered between December 2024 and January 2025 after a December pilot, selected 18 items from a broader instrument. Eight general educational challenges asked for agreement on a five-point scale; ten ethical challenges asked for importance on a four-point scale, covering plagiarism, intellectual property, bias and unfairness, data privacy, misinformation, anthropomorphism, environmental and societal impacts, dependence on AI, and insufficient critical evaluation. An exploratory factor analysis supported a one-factor solution for the ethical items, internal consistency was good in all three groups, but confirmatory and multigroup analyses did not establish measurement invariance, so the ten-item mean was treated as an observed composite index for supplementary analysis only. Group differences were tested item by item with Welch's ANOVA and Games–Howell post hoc tests, with a Benjamini–Hochberg correction, and checked with Kruskal–Wallis tests. Because students were nested in 38 institutions, the hierarchical regression used cluster-robust standard errors; the intraclass correlation was 0.199 before educational level was entered and 0.066 after.

## Where the levels separated

Differences were significant for seven of the eight general educational challenges. University students agreed most strongly that AI could have negative effects on learning (3.96 against 3.12 for primary and 3.30 for secondary students) and on [[critical-thinking|critical thinking]] (3.47 against 2.74 and 3.02), and they also reported stronger agreement about unequal access to paid tools, risks to student data privacy, and students' lack of AI skills. One item reversed the pattern: secondary school students reported the highest agreement that teachers restrict AI use (3.13, against 3.02 and 2.84), and the sole non-significant item was negative effects on social and emotional development, where means were 2.85, 2.83, and 2.98.

All ten ethical challenges differed significantly, always with university students rating the issue as more important. Beyond the three largest gaps, dependence on AI rose steadily across the levels (2.29, 2.48, 3.08) and environmental impacts followed the same order with a small primary–secondary difference. Across the whole sample, mean importance ranged from 2.40 to 2.95 on the four-point scale: data privacy (2.95) and false or inaccurate information (2.92) ranked highest, with lack of critical evaluation next (2.71), while environmental impacts (2.40) and bias and unfairness (2.41) ranked lowest. The authors emphasize that item-level results matter more than the total: primary and secondary students were statistically indistinguishable on five of the ten ethical issues even though both groups gave them relatively low ratings.

## What explained the overall score

In the hierarchical regression, gender alone accounted for 6.9% of the variance in the ethical-importance composite. Adding self-rated knowledge of AI use and perceived familiarity with generative AI produced only a marginal, non-significant increase. Entering educational level in the final block raised explained variance to 22.4%, an additional 15.3 percentage points, with primary and secondary students reporting significantly lower overall importance than university students. Neither self-report measure was significant in that final model; gender remained significant but its coefficient fell considerably, suggesting that part of the initial gender difference reflected the unequal gender composition of the groups. A leave-one-institution-out analysis produced a stable increment of 13.0 to 16.1 percentage points, and the sensitivity checks held across alternative specifications.

The missing-data pattern also shaped the analysis: 85 participants (6.5%) were excluded for incomplete data, disproportionately primary school students (14.0%, against 6.0% and 2.0% in the other groups), leaving 1,214 complete cases. The authors read the pattern as evidence that perceived ethical importance varies by educational context rather than as a measure of ethical competence, and they argue that challenges tied directly to everyday academic work — plagiarism, misinformation, dependence — are more salient than broader legal, technological, or societal issues such as intellectual property and algorithmic bias. Their conclusion is that perceived technical familiarity and the importance assigned to ethical considerations should not be treated as interchangeable dimensions of [[ai-literacy|AI literacy]].

## What this means for practice

- **Teachers.** Put critical evaluation at the center rather than treating it as a higher-education concern: it showed the widest gap, and younger students rarely named it as important. Verification routines, not warnings, are the likely lever.
- **Teacher educators.** Prepare candidates to teach authorship and acknowledgment across school levels, since plagiarism was the second-largest gap and expectations about citation and independent work differ sharply between groups.
- **Assessment designers.** State explicitly what assistance is acceptable and how it should be acknowledged; the survey measured perceived importance, not behavior, so policy clarity cannot be inferred from these ratings.
- **Administrators.** Do not assume that students who feel knowledgeable about AI will weigh ethical issues more heavily; self-rated knowledge and familiarity showed no detectable association in the final model.
- **Researchers.** Treat perceived importance as a starting point and measure ethical judgment and responsible practice separately, with performance-based tasks rather than single-item self-reports.

## Limitations

- The cross-sectional design supports associations, not developmental or causal claims, so the differences cannot be attributed to progression through education.
- Everything is self-reported, and perceived importance of an ethical issue does not demonstrate the ability to recognize, evaluate, or act on ethical dilemmas.
- Multigroup confirmatory factor analysis did not establish measurement invariance, so the composite index is an observed score used for supplementary analysis, not an equivalent latent measure across groups.
- The sample was not nationally representative: the university group was predominantly female, the number of institutions differed across levels, and classes and students were not randomly sampled.
- Knowledge and familiarity were each measured with a single item, and prior AI training, frequency of use, institutional policy, and teacher guidance were not assessed.
- Item-level comparisons did not account for clustering within institutions, and 85 cases (6.5%) were excluded from the regression, disproportionately from the primary group.

## Citation

Licardo, M., & Šindić, A. (2026). [From Plagiarism to Critical Thinking: How Students at Different Educational Levels Perceive the Ethical Challenges of Generative AI](https://doi.org/10.3390/educsci16111936). *Education Sciences, 16*(11), 1936.
