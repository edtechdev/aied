---
title: "Selective Use, Favorable Perceptions: AI in Professionally Oriented Physics Education for Future Engineers"
created: "2026-11-04T16:20:00-05:00"
updated: "2026-11-04T16:20:00-05:00"
type: article
sources: ['raw/papers/nauryzbayeva-ai-physics-education-future-engineers-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [survey]
discipline: [physics education, engineering education]
level: [higher ed, undergraduate]
audience: [instructors, researchers]
technology: [generative-ai]
assessment: [self-report-measures]
pedagogy: [problem-solving]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** A cross-sectional anonymous survey of 209 engineering students at six universities in Kazakhstan asked how often they use AI while studying [[physics-education|physics]] and specialized disciplines, and how much support they believe it gives them. Among 208 valid responses, 36.1% reported regular use and 31.7% occasional use; activity-level use ranged from 43.5% for written assignments to 55.1% for clarifying difficult topics. Perceived support for [[problem-solving|independent problem solving]] was reported by 44.0% and for [[engineering-education|engineering thinking]] by 61.1%. More frequent use was associated with more favorable ratings on all six perception items (ρ = 0.451–0.605), but this is a [[self-report-measures|self-report]] pattern, not evidence that AI improved physics learning.

## Key Findings

1. The sample was 209 students from engineering-related programs across six Kazakh universities, recruited by voluntary participation and surveyed online; 208 gave a valid response to the general AI-use item, and valid counts varied by item (n = 203–208) with no imputation.
2. General academic AI use was common but not dominant: 36.1% regular, 31.7% occasional, 19.2% rare and 12.5% no use, with one open-text "Other" response (0.5%).
3. Use specific to physics and specialized disciplines skewed toward situational rather than intensive engagement: 20.2% very frequent, 15.4% fairly frequent, 42.8% individual or occasional cases and 20.7% no use, plus two "Other" responses (1.0%).
4. Reported use by activity was 55.1% for clarifying difficult topics or answering instructors' questions, 51.4% for homework, 50.2% for project activities, 48.3% for examination preparation, 44.7% for laboratory reports and documentation, 44.2% for presentations and 43.5% for written assignments.
5. Perceived contribution was highest for engineering thinking (61.1% positive, 38.9% no effect) and lowest for applying physical laws, where 42.5% saw a positive contribution, 32.9% a partial one and 24.6% none.
6. For interpreting computational and experimental data, 42.8% reported positive support, 26.9% partial and 30.3% none; for independent problem solving the split was 44.0% positive, 21.3% partial and 34.8% none.
7. Overall, 48.3% rated AI's influence on physics learning positively, 36.2% neutral and 15.5% negative; 48.3% judged AI appropriate for professional preparation, 29.8% partially appropriate and 22.0% not appropriate.
8. AI-use frequency correlated with every perception item: ρ = 0.605 for interpreting computational and experimental data, 0.582 for applying physical laws, 0.543 for professional preparation, 0.533 for independent problem solving, 0.478 for engineering thinking and 0.451 for overall influence on learning, all Holm-adjusted *p* < 0.001.
9. Excluding the 43 respondents (20.7%) who reported no AI use in physics and specialized disciplines left all six associations significant but smaller (ρ = 0.234–0.490, Holm-adjusted *p* ≤ 0.0027), so the user/non-user contrast inflated the full-sample coefficients.

## What the survey measured, and what it deliberately did not

The instrument was built for this study and consists of closed and semi-closed items in three blocks: general AI-use frequency, use across seven named academic activities, and six separate perception items. It was not designed as a psychometric scale, the six perception items were never combined into a composite score, and the authors state plainly that no piloting, independent expert review or construct-validation evidence is documented. Each percentage below is therefore an item-level description, not a subscale score with an established reliability coefficient.

The design is a single cross-sectional sweep, with administrative distribution through one coordinating institution and a fixed analytical dataset of 209. Because institution and specialty were not recorded per respondent, the responses are pooled and no university-level or program-level comparison is possible — a deliberate scoping choice that also removes any check on whether one campus drives the pattern. The ethics approval (IRB–A1634, 15 May 2025) covers the overarching doctoral project and does not name this questionnaire, which the authors disclose rather than gloss.

The analytical approach is appropriately modest for the data: frequencies and percentages for description, Spearman rank correlations between ordinal use frequency (coded 0–3) and each perception item, Holm–Bonferroni adjustment across the six planned tests, and bootstrap confidence intervals from 10,000 resamples. Non-ordinal "Other" text was kept for description and excluded from the ordinal analyses. Nothing here is a model of mediation, and the paper's own framework section says the concepts "do not constitute a tested temporal or causal pathway."

## Use is selective; approval is broader than use

The most useful descriptive result is the gap between how students use AI and how much of it they endorse. Regular general use sits at 36.1%, but use inside physics and specialized disciplines is thinner at the intensive end: only 20.2% report very frequent use there, against 42.8% who use it in individual or occasional cases. Read together, these figures describe a student body that has adopted AI as a general academic habit more thoroughly than as a standing feature of physics study.

The activity ranking is where the pattern becomes concrete. Clarifying difficult topics leads at 55.1%, with homework at 51.4% — both tasks where a student wants an explanation or a worked step, not a finished product. The lowest figure is written assignments at 43.5%, and presentations sit at 44.2%, both tasks with a visible authored artifact. Laboratory reports land at 44.7%: the activity that most directly involves measurement and interpretation is not where students report the most AI use. The authors caution that these seven percentages were never formally compared, and that confidence intervals for adjacent estimates would overlap, so the ordering is a description of the sample rather than a tested ranking.

Engineering thinking drew the strongest endorsement at 61.1%; applying physical laws and interpreting computational and experimental data sit lower, at 42.5% and 42.8% positive. Roughly a quarter to a third of respondents saw no contribution on those items. That heterogeneity is the honest headline: the pooled distribution is favorable but far from consensus, and 22.0% considered AI inappropriate for professional preparation at all. Any claim that engineering students have collectively embraced AI for physics learning is contradicted by these figures.

## The correlations are about users, not about learning

All six associations are positive and survive correction, with the strongest for interpreting computational and experimental data (ρ = 0.605, 95% CI 0.505–0.696) and the weakest for overall perceived influence on physics learning (ρ = 0.451, 95% CI 0.321–0.569). It would be easy to read that first coefficient as "AI helps students read data." The study cannot support that reading. Both variables came from the same questionnaire at the same moment, so the correlation is between what students say they do and what they say they believe — a shared-method association with at least three live alternative explanations.

The sensitivity analysis is the clearest evidence that the coefficients are partly an artifact of who was in the sample. Dropping the 43 non-users cuts the engineering-thinking correlation from 0.478 to 0.234 and the overall-influence correlation from 0.451 to 0.339, while the data-interpretation association falls only to 0.471. The authors interpret this correctly: part of the original strength came from the contrast between users and non-users, and non-users answering questions about AI support are reporting an impression rather than an experience. What survives among users is real variation in perceived support, but its magnitude is roughly half what the headline figures suggest for two of the six items.

The paper is also candid about direction. Students who already hold favorable views may simply use AI more, which would produce the same coefficients without any effect of use on perception. Frequency of use, the specific tools, and relevant respondent characteristics such as prior achievement or [[ai-literacy|AI literacy]] were not measured, so no adjustment is possible. The authors' framing — AI complementing rather than replacing fundamental physics knowledge — is consistent with the data, but the data do not select it over reverse causation.

## What this means for practice

- **Physics instructors.** The activities where students report most use are explanation-seeking (55.1% for clarifying difficult topics), not answer-seeking. Design for that: ask students to bring an AI explanation of a physical law to class and defend or correct it, rather than trying to police a tool they already use for homework at 51.4%.
- **Laboratory and data-analysis teaching.** Interpretation of computational and experimental data drew both the highest correlation and a substantial dissent (30.3% saw no support). Treat AI-generated interpretation as an object of critique — units, assumptions, limiting cases — instead of assuming students can already judge it.
- **Program designers.** The 22.0% who judged AI inappropriate for professional preparation and the 34.8% who saw no support for independent problem solving are a real constituency, not noise. A program that mandates AI use in every course will meet resistance grounded in disciplinary judgment, and that judgment deserves an answer.
- **Researchers.** Perceived support is not a learning outcome. The next study in this line needs an objective measure — a problem-solving or interpretation task scored blind — because no amount of additional perception data will close that gap. 

## Limitations

- No learning outcome was measured. Every focal variable is self-reported within one questionnaire, so common-method bias, correlated response tendencies and reverse causation all remain open; perceived support cannot establish that AI improved engineering thinking or data interpretation.
- The instrument was purpose-built and unvalidated, with no piloting, expert review or construct-validation evidence documented and no reliability estimate for the six separately analyzed perception items.
- Recruitment was voluntary, and the number invited, response rate, institution and specialty were not recorded, so self-selection bias is unquantified and no within-institution analysis is possible.
- Specific AI tools, depth and style of use, and respondent characteristics such as prior achievement were not measured, preventing adjustment for confounders.
- Non-users make up 20.7% of the valid physics-use sample and answered about support they may not have experienced; the sensitivity analysis attenuates but does not remove this problem, and it leaves self-selection and shared-method bias intact.
- The seven activity percentages are descriptive only, with the 43.5%–55.1% spread statistically untested, and the sample is pooled engineering students in Kazakhstan without institutional identifiers, so generalization elsewhere is untested.

## Citation

Nauryzbayeva, G., Turkmenbayev, A., Sakipov, N., Zhussupkaliyeva, G., Yergaliyeva, G., Aldzhambekova, G., Shinikulova, G., & Kuanbayeva, B. (2026). [Artificial intelligence in professionally oriented physics education: patterns of use and perceived learning support among future engineers](https://doi.org/10.3389/feduc.2026.1989485). *Frontiers in Education, 11*, 1989485.
