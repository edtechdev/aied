---
title: "The relationship between perceived AI replacement threat and employment anxiety among English-major undergraduates"
created: "2026-10-28T12:00:00-04:00"
updated: "2026-10-28T12:00:00-04:00"
type: article
authors: ["Zhang, S.", "Zheng, H."]
published: "2026-10-27"
venue: "Frontiers in Psychology 17, article 1867329"
source_url: https://doi.org/10.3389/fpsyg.2026.1867329
foundations: [ai-education]
pedagogy: [anxiety-and-stress, career-development-and-readiness, self-efficacy]
technology: [generative-ai]
assessment: [self-report-measures, educational-measurement]
methods: [research-methods-aied, quantitative-research]
discipline: [english education, language learning]
level: [undergraduate]
audience: [instructors, administrators, researchers]
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
sources: ['raw/papers/zhang-ai-replacement-threat-employment-anxiety-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
---

> **Synthesis:** Zhang and Zheng surveyed 711 Chinese [[english-education|English-major]] undergraduates — 94.5% of 752 submitted questionnaires, recruited by convenience sampling from seven universities in six provincial-level regions — to test whether perceived AI replacement threat (PAIRT) travels to [[anxiety-and-stress|employment anxiety]], and through what. Using cognitive appraisal theory and PROCESS Model 7 with 5,000 bootstrap resamples, they found PAIRT positively associated with both career insecurity and employment anxiety, with the indirect path through career insecurity accounting for 48.29% of the estimated total effect (indirect 0.380 of a total 0.787). [[self-efficacy|Career decision-making self-efficacy]] (CDMSE) moderated the first link: the PAIRT–insecurity slope fell from 0.486 at one standard deviation below the CDMSE mean to 0.385 at one above, and the index of moderated mediation was −0.027. The moderation is modest — the interaction added 0.6% of variance in career insecurity — and the authors warn that confidence in career decisions provides only partial attenuation rather than a buffer. Everything is cross-sectional and self-reported, so the paper describes statistical associations, not a causal sequence.

## Key Findings

1. **Replacement threat travels with employment anxiety.** PAIRT correlated with employment anxiety at 0.551, and the structural path from PAIRT to anxiety was 0.406 (SE 0.074, p < 0.001) with gender and grade controlled.
2. **Career insecurity carries about half of the association.** The indirect effect through career insecurity was 0.380, or 48.29% of the 0.787 total effect, leaving a direct effect of 0.406.
3. **Self-efficacy weakens, but does not break, the threat–insecurity link.** The interaction term was −0.051 (SE 0.021, p = 0.016) and added 0.6% of variance, with the slope significant at every level tested.
4. **The indirect path shrinks as self-efficacy rises.** Conditional indirect effects were 0.257 at low CDMSE, 0.231 at the mean, and 0.204 at high CDMSE; the moderated mediation index was −0.027.
5. **Average scores sit above the scale midpoint.** On five-point scales, means were 3.208 ± 0.758 for PAIRT, 3.413 ± 0.711 for employment anxiety, and 2.454 ± 0.593 for CDMSE.
6. **Gender predicts anxiety; grade level does not.** Gender was associated with employment anxiety at 0.171 (p < 0.001), while both grade paths were nonsignificant (p = 0.951 and p = 0.517).
7. **Dropping the overlapping anxiety items did not change the story.** Re-estimating with the four career-replaceability items removed preserved the direction and magnitude of every focal association.

## Who was surveyed and what was measured

The sample was drawn in March and April 2026 from English majors at seven universities across Inner Mongolia, Zhejiang, Shandong, Henan, Hebei, and Chongqing. Of 711 valid responses, 591 (83.12%) came from women and 120 from men; fourth-year students were the largest grade group at 280, and 395 respondents (55.56%) registered rural households. PAIRT used a four-item scale (α = 0.702), employment anxiety a 17-item scale with personal ability, knowledge application, career replaceability, and social relations dimensions (α = 0.944), career insecurity eight items adapted from job-insecurity measures (α = 0.860), and CDMSE the 25-item short form (α = 0.959). Common method bias checks put first-factor variance at 27.429%, below the 40% criterion, and the measurement model fit acceptably (CFI = 0.910, RMSEA = 0.048). Gender and grade entered as covariates.

## The appraisal path from threat to anxiety

The mechanism is framed in [[cognitive-psychology|cognitive appraisal theory]]: PAIRT is a primary appraisal that a personally relevant future is threatened, career insecurity captures what is at stake, and employment anxiety is the emotional response. In the structural model, PAIRT predicted career insecurity at 0.743 and career insecurity predicted anxiety at 0.512, with the model explaining 54.8% of variance in employment anxiety. That ordering matters for reading the paper: an AI-specific threat appraisal is not merely a general worry about technology but is associated with concrete doubts about whether suitable jobs will remain, whether entry is possible, and whether a career can develop — and it is those doubts that sit closest to the anxiety students report. Gender carried a significant path to anxiety while both grade paths were null, so stage of study did not separate students in this sample the way gender did.

## Self-efficacy as a modest buffer

The moderation analysis regressed career insecurity on PAIRT, CDMSE, and their product, explaining 23.1% of variance. The negative interaction means the positive PAIRT–insecurity association flattens as confidence in career decision-making rises: students who feel able to gather occupational information, compare options, and plan are less likely to convert replacement threat into broad career doubt. The authors are careful about the size of this effect, noting that the interaction accounted for only an additional 0.6% of variance and that the association remained significant at high CDMSE. Read alongside the conditional indirect effects, the practical reading is that [[career-development-and-readiness|career decision-making support]] is a lever that shifts the slope rather than a shield that removes it.

## Why English majors are the test case

Translation, writing, and language services overlap heavily with what [[generative-ai|generative AI]] now does well, so English majors face a threat appraisal that is unusually concrete rather than hypothetical. The paper's practical section follows from that: career exploration should address specific fields and actual task content, including where AI is used and what boundaries apply, and university advisors should treat confidence in career decision-making as an individual difference worth assessing rather than as a fixed trait. For curriculum, the implication is that [[language-learning|language and translation programs]] can address [[student-support-and-success|employability anxiety]] through information and skill-building — tool use, output evaluation, application boundaries — instead of reassurance alone. The authors flag these as theoretically informed directions whose effects remain to be tested in intervention studies.

## What this means for practice

- **Instructors.** Address AI's role in translation, writing, and language services as course content — actual tasks, competency requirements, and limits — rather than leaving students to infer the threat from headlines.
- **Administrators.** Build [[higher-ed|university]] career-services programming around occupational information gathering, short-term goal setting, and alternative-path planning, since those are the self-efficacy components the moderation analysis ties to a flatter threat–insecurity slope.
- **Researchers.** Treat the 48.29% indirect share as a hypothesis for longitudinal testing; the cross-sectional design cannot order PAIRT, insecurity, and anxiety, so a multi-wave design is the next step.

## Limitations

- The design is cross-sectional, so the authors state plainly that temporal ordering among PAIRT, career insecurity, and employment anxiety cannot be established and the effects are statistical associations.
- All focal variables are [[self-report-measures|student self-reports]]; Harman's test and the common latent factor comparison did not indicate serious bias, but shared source variance "cannot be ruled out."
- Sampling was by convenience among English majors at seven Chinese universities, with women making up 83.12% of the 711 respondents, so generalization to other systems, institution types, and gender balances is untested.
- PAIRT and the career-replaceability dimension of the anxiety scale share item content about job replacement; excluding those four items kept results stable, but the authors call for measures with more differentiated content.

## Citation

Zhang, S., & Zheng, H. (2026). [*The relationship between perceived AI replacement threat and employment anxiety among English-major undergraduates: the mediating role of career insecurity and the moderating role of career decision-making self-efficacy*](https://doi.org/10.3389/fpsyg.2026.1867329). Frontiers in Psychology, 17, article 1867329.
