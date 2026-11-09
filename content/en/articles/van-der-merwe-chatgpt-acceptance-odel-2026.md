---
title: "Globalising higher education in Africa through artificial intelligence: student acceptance of ChatGPT in an open distance and e-learning context"
created: "2026-11-09T09:05:00-05:00"
updated: "2026-11-09T09:05:00-05:00"
type: article
page_kind: [evaluation]
research_method: [survey]
evidence_context: educational
level: [higher ed, adult learning]
audience: [administrators, researchers]
sources: ['raw/papers/van-der-merwe-chatgpt-acceptance-odel-2026.md']
source_url: "https://doi.org/10.3389/feduc.2026.1949509"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-09"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: []
pedagogy: [student-experience]
technology: [generative-ai, technology-acceptance-model]
assessment: [self-report-measures]
methods: [quantitative-research]
institutions: []
ethics: [digital-divide]
---

> **Synthesis:** Van der Merwe asks whether [[technology-acceptance-model|UTAUT2]] still explains ChatGPT use among distance learners. The setting is the largest distance education institution in Africa, the University of South Africa, which enrolled roughly 380,000 students in 2025. Over 80% come from historically disadvantaged groups. A [[quantitative-research|survey]] of 294 students, drawn from 10,000 invited by email, was analyzed with partial least squares structural equation modeling on a UTAUT2 model adding Personal Innovativeness and four moderators. Facilitating Conditions (β = 0.429) and Habit (β = 0.384) carried the largest coefficients on behavioral intention; Effort Expectancy was negative (β = −0.258), and Social Influence and Hedonic Motivation were not significant. Habit was the strongest predictor of reported use (β = 0.576), while intention was negatively associated with use (β = −0.184). The distinction worth keeping: this measures acceptance and self-reported frequency, not learning, and the paper's ranking of Habit against Facilitating Conditions is inconsistent.

## Key Findings

1. **Sample and response.** 294 students completed the online questionnaire from 10,000 invited email addresses, a 2.9% response rate, against an ideal sample of 384.
2. **Facilitating Conditions led on intention.** FC was positively associated with behavioral intention (β = 0.429, t = 6.532, p = 0.000) and with use (β = 0.254, t = 3.047, p = 0.002).
3. **Habit was close behind and led on use.** Habit predicted intention (β = 0.384, t = 5.793, p = 0.000) and reported use (β = 0.576, t = 7.880), the largest use coefficient in the model.
4. **Effort Expectancy ran negative.** EE was negatively associated with intention (β = −0.258, t = 3.089, p = 0.002) despite a positive zero-order correlation (r = 0.613).
5. **Two UTAUT2 predictors failed.** Social Influence and Hedonic Motivation were rejected at p > 0.05, while Performance Expectancy was significant but modest (β = 0.226, t = 3.769).
6. **Intention did not track use.** Behavioral intention was negatively associated with use (β = −0.184, t = 1.972, p = 0.049), and year of study weakened the Hedonic Motivation to intention path (β = −0.188, p = 0.047).
7. **Model fit.** The model explained 69.2% of the variance in intention (R² = 0.692) and 37.9% in use (R² = 0.379), with an SRMR of 0.06.

## Design and measurement

The study is a replication with a context swap. Van der Merwe reuses the model, hypotheses and UTAUT2 instrument from Strzelecki's residential-university study, replaces Price Value with Personal Innovativeness, and fields thirty items on a 7-point Likert scale online. Invitations went out at the end of 2024 with a 4-week deadline; slow responses kept the survey open until March 2025. Analysis uses PLS-SEM with path weighting and reflective constructs, reporting composite reliability, AVE, HTMT and Fornell-Larcker checks. Two measurement repairs shape the results. Performance Expectancy arrived with weak indicators: PE1 loaded at 0.410 and PE2 at 0.610, and both were removed, lifting Cronbach's alpha from 0.630 to 0.721 and AVE from 0.490 to 0.782. Facilitating Conditions lost FC4 after the FC-EE HTMT ratio came in at 0.909, above the 0.90 threshold; removing it brought the ratio to 0.882.

## What predicted intention

The intention model is best read as a ranked set of associations, not a causal account. Facilitating Conditions, meaning resources, knowledge and compatibility with the technologies students already use, had the largest coefficient (β = 0.429). Habit followed (β = 0.384), then Personal Innovativeness (β = 0.267, t = 5.258) and Performance Expectancy (β = 0.226). The Effort Expectancy result needs care. Its zero-order correlation with intention was positive (r = 0.613), yet the path turned negative once other predictors entered: β = 0.614 in an EE-only model, 0.193 after Performance Expectancy and Social Influence were added, −0.177 once Facilitating Conditions entered, and −0.225 in the full model, while the EE variance inflation factor rose from 1.000 to 4.334. The authors call this a suppression effect tied to shared variance and conclude that ease of use is not an independent driver of intention here.

## Habit, use, and divergent accounting

Use was measured with a single frequency item, and Habit dominated it (β = 0.576). Facilitating Conditions also predicted use (β = 0.254), while behavioral intention ran negative (β = −0.184, p = 0.049). The authors do not treat that as an intention-behavior reversal. They point to the small coefficient, marginal p-value and near-zero confidence interval, and suggest that access, assignment type, lecturer guidance and the absence of an institutional AI policy may intervene between intending and using. They also point to routine: habitual use may continue with less conscious intent, which fits Habit's strength. Across 11 recent (2024–2026) ChatGPT studies, nine outside Africa, Performance Expectancy was the most consistent predictor of intention and Habit second. Its own ordering is less stable: the abstract calls Habit strongest, the discussion calls Facilitating Conditions third strongest, and the conclusion puts Facilitating Conditions first, although the coefficients are 0.429 and 0.384.

## What this means for practice

- **Instructors.** Build repeated, low-stakes ChatGPT use into routine course tasks rather than relying on novelty, since Habit carried the largest coefficient on reported use (β = 0.576).
- **Instructors.** Do not treat ease of use as the lever. Effort Expectancy was negative in the full model, so time is better spent showing how the tool fits assignment work than on tool tutorials.
- **Administrators.** Treat Facilitating Conditions as infrastructure and policy: the largest intention coefficient (β = 0.429) came from resources, knowledge and compatibility, and the authors note there was no clear institutional AI use policy when data were collected, which points to [[educational-policy-ai]] work.
- **Administrators.** Fund connectivity, devices and licenses with a [[digital-divide]] lens, since 90% of respondents were from historically disadvantaged groups.

## Limitations

- The design is cross-sectional and every construct is [[self-report-measures|self-reported]], so the paths are associations and common-method bias is argued away with VIF statistics rather than designed out.
- The sample is 294 respondents from 10,000 invitations (2.9%) at one institution, with sixty-five percent female, 74% under 30 and 90% from historically disadvantaged groups, so the four moderator tests rest on small subgroups.
- Use Behavior was a single frequency item, which cannot be tested for internal consistency and captures frequency, not depth or duration.
- Data were collected between late 2024 and March 2025, so responses describe ChatGPT as it stood then; the paper does not name a model version.
- Performance Expectancy was trimmed to two indicators and FC4 was dropped to repair discriminant validity, so both constructs are measured more narrowly than in the original instrument.

## Citation

van der Merwe, T. M. (2026). [*Globalising higher education in Africa through artificial intelligence: Student acceptance of ChatGPT in an open distance and e-learning context*](https://doi.org/10.3389/feduc.2026.1949509). *Frontiers in Education, 11*, Article 1949509.
