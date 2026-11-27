---
title: "Socioeconomic Status and AI Use for Schoolwork in Relation to Adolescents’ School Belonging and Loneliness in Four Chinese Regions"
created: "2026-11-27T15:30:00-05:00"
updated: "2026-11-27T15:30:00-05:00"
type: article
published: "2026-11-19"
sources: ['raw/papers/xu-ses-ai-schoolwork-adolescents-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: []
level: [k 12]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Xu and colleagues analyzed PISA 2025 data from 11,883 adolescents in 374 schools in four Chinese regions. After adjustment for sex, age, and school, higher economic, social, and cultural status and more frequent AI use for schoolwork were each associated with lower school loneliness and greater school belonging. Peer academic [[help-seeking]] moderated the status–loneliness association after false-discovery-rate correction: the negative association weakened as help-seeking increased, but the effect was small. Family support did not moderate either outcome, and neither moderator changed the association between status and belonging. The cross-sectional, unweighted analysis shows adjusted associations, not causal effects, and the authors describe the help-seeking result as a limited compensatory pattern.

## Key Findings
1. **Socioeconomic status tracked both outcomes.** Higher economic, social, and cultural status was associated with lower school loneliness and greater school belonging.
2. **AI use for schoolwork also tracked both outcomes.** More frequent use was associated with lower loneliness and greater belonging after adjustment for status, age, sex, and school.
3. **Peer help-seeking mattered for loneliness.** The negative status–loneliness association weakened as students reported more academic help-seeking from classmates; the interaction survived false-discovery-rate correction but was small.
4. **Family support showed no moderation.** Family support did not significantly change the association between status and either loneliness or belonging.
5. **Belonging had no moderator.** Peer academic help-seeking did not significantly moderate the status–belonging association.
6. **The associations were modest.** The regression models explained 6.32% of the variance in loneliness and 12.06% in belonging.

## What the data contained

The study used the PISA 2025 student public-use file, which originally contained 755,721 student records. The analysis focused on B-S-J-Z (China), identified by CNT = QCI and CNTRYID = 156; students from Hong Kong, Macao, and Chinese Taipei were not included. Of 12,385 initially identified students, 502 were excluded for lacking valid responses on all 16 focal items or required background data. The analytic sample was 11,883 students from 374 schools, or 95.95% of the initially selected sample. It included 5725 girls (48.18%) and 6158 boys (51.82%), with a mean age of 15.765 years (SD = 0.295; range = 15.330–16.250 years).

Economic, social, and cultural status (ESCS) was the official PISA index combining parental education, occupational status, and household possessions and educational resources. AI use for schoolwork was the mean of four items about summarizing texts, preliminary research, drafting written assignments, and supporting learning, on a scale from 1 (“never or almost never”) to 5 (“daily or almost daily”), with Cronbach's alpha of 0.875. School loneliness was one reverse-coded item, ST034Q06TA (“I feel lonely at school”), scored from 1 to 4. School belonging was the mean of five items, ST034Q01TA–ST034Q05TA, with three reverse-scored before averaging and Cronbach's alpha of 0.782. Family support used five items (α = 0.887), and peer academic help-seeking used the reverse-coded item ST433Q01DA (“When I do not fully understand something, I ask my classmates”), scored from 1 to 4.

All models used unweighted ordinary least squares with school fixed effects, sex, and age. Benjamini–Hochberg correction was applied to eight substantive predictor coefficients and four focal interaction tests. In descriptive correlations, ESCS was positively associated with AI use (r = 0.213), family support (r = 0.212), peer help-seeking (r = 0.103), and belonging (r = 0.127), and negatively associated with loneliness (r = −0.066). AI use was negatively associated with loneliness (r = −0.073) and positively with belonging (r = 0.170). The largest correlation was the negative one between loneliness and belonging (r = −0.636).

## What the regressions and interactions showed

Higher ESCS was associated with lower loneliness (B = −0.052, β = −0.068) and greater belonging (B = 0.059, β = 0.105) after adjustment. AI use for schoolwork was independently associated with lower loneliness (B = −0.038, β = −0.054) and greater belonging (B = 0.072, β = 0.138). Both AI-use coefficients met the false-discovery-rate criterion; age did not for loneliness. Total explained variance was 6.32% for loneliness and 12.06% for belonging.

The family-support interaction with ESCS was not significant for loneliness (B = 0.006, β = 0.007, p = 0.439, false-discovery-rate-adjusted p = 0.690) or belonging (B = 0.001, β = 0.002, p = 0.800, adjusted p = 0.800). Peer academic help-seeking did moderate the ESCS–loneliness association (B = 0.033, SE = 0.011, 95% CI [0.010, 0.055], β = 0.026, p = 0.004, adjusted p = 0.016). The interaction added 0.07% of explained variance and Cohen's f² was 0.001. Conditional slopes remained negative at low (B = −0.068), mean (B = −0.048), and high (B = −0.028) levels of help-seeking, all meeting the adjusted criterion. The corresponding interaction for belonging was not significant (p = 0.518, adjusted p = 0.690). The authors treat these results as partial support for resource compensation, since socioeconomic differences in loneliness were less pronounced among students more inclined to ask classmates for academic help.

## What this means for practice
- **Instructors.** Provide regular chances for students to ask classmates for explanations, discuss difficulties, and work through learning tasks together.
- **Instructors.** Check whether students with fewer resources at home can actually access and take part in those peer exchanges.
- **Instructors.** Use guidance on AI for schoolwork to help students understand learning tasks and identify questions worth raising in class, rather than treating frequency of use as an outcome in itself.
- **School leaders.** Attend to students' experiences of connection and inclusion alongside learning needs when supporting socioeconomically disadvantaged adolescents.
- **Researchers.** Interpret the moderation result cautiously: its small effect size and single-item measure do not justify broad interventions on help-seeking alone.

## Limitations
- **Cross-sectional data.** Temporal ordering and reciprocal relationships cannot be tested with these observations.
- **Single items and [[self-report-measures|self-report]].** Loneliness and peer academic help-seeking each came from one item, and shared-method variance may affect the associations.
- **Use frequency only.** The AI measure records how often students used AI for schoolwork, not why they used it, the quality of assistance, or how they evaluated AI output.
- **Limited generalizability.** The sample covers four Chinese regions and unweighted analyses; authors note conventional OLS standard errors may be affected by residual dependence within schools.
- **Small interaction.** The significant moderation explained an additional 0.07% of variance with Cohen's f² = 0.001, and linear continuous coding assumes equal spacing of help-seeking responses.
- **Unmeasured influences.** [[learning-gains|Prior achievement]], [[well-being|mental health]], digital resources, and perceived school climate were not included in the models.

## Citation

Xu J, Gao K, Zhang A, and Luo J (2026) Socioeconomic Status and AI Use for Schoolwork in Relation to Adolescents’ School Belonging and Loneliness in Four Chinese Regions. *Behavioral Sciences*, 16, 2202. https://doi.org/10.3390/bs16112202
