---
title: "Grades, equity and graduation rates: a quantitative analysis of the association of learning assistants with improved student outcomes"
created: "2026-10-28T12:00:00-04:00"
updated: "2026-10-28T12:00:00-04:00"
type: article
authors: ["Paul, C.", "Webb, D."]
published: "2026-10-27"
venue: "arXiv preprint"
source_url: https://arxiv.org/abs/2607.27006
pedagogy: [active-learning, collaborative-learning, pedagogical-partnerships]
assessment: [assessment, learning-gains]
methods: [research-methods-aied, quantitative-research]
ethics: [differential-effects-across-learner-groups]
research_method: [secondary analysis]
discipline: [stem education]
level: [undergraduate, higher ed]
audience: [administrators, instructors, researchers]
page_kind: [evaluation]
sources: ['raw/papers/paul-webb-learning-assistants-grades-equity-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
---

> **Synthesis:** Paul and Webb fit multilevel logistic models to institutional records from 10 introductory [[stem-education|STEM]] courses at one [[higher-ed|large regional public university]] — 615 lecture sections that never used a learning assistant and 67 sections that did, covering 25,098 unique students — and find that sections staffed by learning assistants (LAs) show lower withdrawal, D, and F (WFD) rates in all 10 courses and higher [[learning-gains|graduation]] odds on every horizon tested. The six-year STEM graduation odds ratio is 1.47 (SE 0.13, P < 10⁻³), with estimated graduation rising from 61% ± 5% to 70% ± 5%, and the authors project that placing LAs in all ten courses would move 304 ± 31 student grades per year above the WFD line. The gains are not uniform: every demographic group improves, but [[differential-effects-across-learner-groups|the size of the gain differs]], and students from historically marginalized racial and ethnic groups show the largest graduation increases. The paper argues that LA programs therefore satisfy "equity of individuality" and are a plausible [[student-support-and-success|student-success]] investment for diverse institutions.

## Key Findings

1. **LA sections fail fewer students in all 10 courses.** Each course showed lower WFD rates where LAs were present, though the gap missed significance in Chem 1A, Phys 2A, Biol 30, and CS46B.
2. **Graduation odds rise on every horizon tested.** Odds ratios were 1.27 at four years (SE 0.11, p = 0.006), 1.40 at five, 1.47 at six, and 1.41 at seven years.
3. **Six-year STEM graduation shifts by about nine points.** Fitted probability is 61% ± 5% with no LA exposure and 70% ± 5% with one; the authors round the difference to nine points.
4. **Every demographic group improves, by different amounts.** WFD differences between LA and non-LA classes were statistically different from zero for all eight gender-by-race/ethnicity groups, with P-values at or below 10⁻³.
5. **The largest graduation gains fall to marginalized groups.** Students from historically marginalized racial and ethnic groups show the biggest six-year graduation increases, reaching about 20 percentage points for women in that group.
6. **The projected fail-rate effect is roughly 300 students a year.** If all ten courses used LAs, the authors estimate 304 ± 31 student grades annually would move above the WFD threshold.
7. **This is equity of individuality, not yet parity.** Because each group improves on both outcomes the program meets equity of individuality, but the authors report only preliminary evidence of narrowing gaps between groups.

## How the records were modeled

The dataset covers eleven years of an introductory chemistry course, ten years of an introductory biology course, thirteen years each of six introductory [[physics-education|physics]] courses, and eight years each of two introductory computer science courses. The database holds 25,098 unique students; 8,883 appear once, 6785 twice, 4573 three times, and the rest more often. Gender breaks down as 16,281 men, 8,772 women, and 30 nonbinary students; 6,475 students come from the historically marginalized groups the authors define (African American, Latina/o, Chicana/o or Mexican American, Hispanic-other, Native American, and Pacific Islander). Because WFD and graduation are binary outcomes and both vary by section and by course, the authors use [[research-methods-aied|multilevel modeling]] — two levels for WFD (student within class), three levels for graduation (student, class, course) — fit in STATA, reporting probabilities and standard errors rather than raw coefficients.

## Smaller fail rates in every course

Figure 1 shows a lower WFD fraction in LA sections for all ten courses, with the gap significant at the 0.05 level in all but Chem 1A, Phys 2A, Biol 30, and CS46B. The spread across courses is wide, and the authors say they cannot explain it without qualitative data such as observations or interviews; they suspect it reflects how often and in what ways LAs interact with students — the [[pedagogical-partnerships|instructional role]] each section assigns them — plus features unique to each course's content and format. Summing the fitted per-course differences gives the headline projection: 304 ± 31 grades per year would move above the WFD line if every section in the ten courses had an LA, which the discussion restates as a possible decrease of up to 300 failing grades a year. That figure is a model-based projection from a [[quantitative-research|correlational]] fit, not an observed result of a campus-wide rollout.

## Graduation odds and where the gains land

For graduation the authors collapse exposure into a single binary: whether a student saw an LA in any class, counted once per student with a randomly chosen class and repeated under different random choices to check stability. Transfer students are excluded, since they graduate at different rates than students admitted as freshmen. The resulting odds ratios exceed one at four, five, six, and seven years, with five-year and six-year differences significant beyond the 99.9% level. When the sample is split by gender and race/ethnicity, the gender difference in WFD is described as too small to measure while the racial/ethnic difference is "much larger"; for graduation the pattern shifts, and the largest increases belong to students from historically marginalized groups, especially women in that group at about 20 percentage points.

## Two equity tests and a course-deficit reading

The paper separates two criteria. Equity of individuality asks whether each group does better in LA sections than in comparable sections without them, and the data support it on both metrics. Equity of parity asks whether groups converge, and here the authors are cautious, reporting preliminary evidence of shrinking graduation gaps rather than a demonstrated closing. The framing throughout is a [[theories-and-frameworks|course deficit model]] rather than a student deficit model: gaps are treated as products of how courses are structured, which instructors can change, not of deficits students bring. That choice matters for [[inclusive-learning|inclusive teaching]], because it locates the intervention in section staffing and interaction rather than in student preparation, and it is why the authors describe LAs as an investment rather than a remediation program.

## What this means for practice

- **Instructors.** Treat an LA section as an [[active-learning]] structure rather than extra help for the weakest students, since the WFD gap appears at the course level in all ten courses.
- **Administrators.** Budget LA positions against both outcomes at once — the pass-rate effect and the graduation effect — and expect the graduation return to be largest for students from historically marginalized groups.
- **Faculty developers.** Prepare for course-to-course variation: four of the ten courses showed no significant WFD difference, so the value of an LA likely depends on how the section uses them.
- **Researchers.** Replicate the design at other institutions and add the qualitative data the authors say they lack, since instructor practice and time with LAs are unmodeled.

## Limitations

- All data come from one large regional public university, and the LA program is described as limited to a single college at a regional R2 institution, which the authors call "likely an upper limit" on LA benefits.
- The study period includes the pandemic, when LAs worked in much more unconventional ways, and no adjustment separates those years from the rest.
- The models do not account for differences between instructors, course structures, or time spent with LAs, and the authors acknowledge possible unidentified selection effects.
- Graduation analyses exclude transfer students and reduce LA exposure to a single yes/no indicator, discarding how many LA-supported classes a student actually took.

## Citation

Paul, C., & Webb, D. (2026). [*Grades, equity and graduation rates: a quantitative analysis of the association of learning assistants with improved student outcomes*](https://arxiv.org/abs/2607.27006). arXiv preprint arXiv:2607.27006.
