---
title: "Globalising higher education in Africa through artificial intelligence: student acceptance of ChatGPT in an open distance and e-learning context"
created: "2026-11-09T09:05:00-05:00"
updated: "2026-11-14T10:00:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
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

> **Synthesis:** Van der Merwe asks whether a standard [[technology-acceptance-model|technology acceptance model]] still explains ChatGPT use among distance learners. The setting is the University of South Africa, the continent's largest distance institution, where most students come from historically disadvantaged groups. A [[quantitative-research|survey]] of a few hundred students was analyzed with structural equation modeling on a model that adds personal innovativeness and four moderators. What students said drove their intention was the practical support around the tool — resources, knowledge and compatibility with what they already use — followed by habit. Habit was by far the strongest predictor of reported use, while intention itself did not track use, and ease of use was not an independent driver. This measures acceptance and self-reported frequency, not learning.

## Key Findings

1. **Support around the tool mattered more than the tool.** Facilitating conditions — resources, knowledge and compatibility with technology students already use — had the largest association with intention to use ChatGPT.
2. **Habit was close behind for intention and dominated use.** Students who had made ChatGPT routine were the ones who reported using it most, which is a statement about repetition rather than enthusiasm.
3. **Ease of use was not an independent driver.** Its simple correlation with intention was positive, but the association turned negative once other factors were accounted for, which the authors read as shared variance rather than a real penalty for difficulty.
4. **Two standard predictors failed.** Social influence and hedonic motivation did not predict intention, while performance expectancy did, but modestly.
5. **Intention and use diverged.** Reported use was slightly negatively associated with intention, which the authors attribute to access, assignment type, lecturer guidance and the absence of an institutional AI policy sitting between intending and doing.
6. **The model explained most of the variance in intention and much less in use**, and year of study weakened the path from enjoyment to intention.
7. **The evidence base is thin.** 294 students responded out of 10,000 invited, and the paper ranks habit against facilitating conditions differently in its abstract, discussion and conclusion.

## Design and measurement

The study is a replication with a context swap. Van der Merwe reuses the model, hypotheses and instrument from a residential-university study, replaces price value with personal innovativeness, and fields thirty items on a 7-point scale online. Invitations went out at the end of 2024 with a 4-week deadline; slow responses kept the survey open until March 2025. Analysis uses partial least squares structural equation modeling with the usual reliability, convergent-validity and discriminant-validity checks.

Two measurement repairs shape the results. Performance expectancy arrived with two weak indicators, both of which were removed, and one facilitating-conditions item was dropped after it correlated too closely with effort expectancy. Both constructs are therefore measured more narrowly than in the original instrument, which matters when reading their coefficients.

## What predicted intention

The intention model is best read as a ranked set of associations, not a causal account. Facilitating conditions had the largest coefficient, at 0.429, meaning that students who felt they had the resources, the know-how and a tool that fitted their existing technology were the most inclined to use it. Habit followed at 0.384, then personal innovativeness at 0.267 and performance expectancy at 0.226.

The effort expectancy result needs care. Its zero-order correlation with intention was positive (r = 0.613), yet the path turned negative once other predictors entered, ending at −0.225 in the full model while its variance inflation factor rose above 4. The authors call this a suppression effect tied to shared variance and conclude that ease of use is not an independent driver of intention here. In plain terms: students who find the tool easy are also the ones with the resources and the routine, and once those are accounted for, ease adds nothing.

## Habit, use, and divergent accounting

Use was measured with a single frequency item, and habit dominated it at 0.576. Facilitating conditions also predicted use at 0.254, while behavioral intention ran slightly negative. The authors do not treat that as an intention-behavior reversal. They point to the small coefficient, the marginal significance and a near-zero confidence interval, and suggest that access, assignment type, lecturer guidance and the absence of an institutional AI policy may intervene between intending and using. They also point to routine: habitual use may continue with less conscious intent, which fits habit's strength. The model explained 69.2% of the variance in intention but only 37.9% in use.

Across 11 recent ChatGPT studies, nine outside Africa, performance expectancy was the most consistent predictor of intention and habit second. This paper's own ordering is less stable: the abstract calls habit strongest, the discussion calls facilitating conditions third strongest, and the conclusion puts facilitating conditions first, although its coefficients are 0.429 and 0.384. That inconsistency is a reason to read the ranking as indicative rather than settled.

## What this means for practice

- **Administrators:** Treat facilitating conditions as infrastructure and policy, not as messaging. The strongest intention coefficient came from resources, knowledge and compatibility, and the authors note there was no clear institutional AI use policy when data were collected — which points to [[educational-policy-ai|educational AI policy]] work.
- **Administrators:** Fund connectivity, devices and licenses with a [[digital-divide|digital divide]] lens. Most respondents were from historically disadvantaged groups, and a tool that assumes reliable bandwidth and a modern laptop is not equally available to them.
- **Instructors:** Build repeated, low-stakes ChatGPT use into routine course tasks rather than relying on novelty. Habit carried by far the largest association with reported use.
- **Instructors:** Do not spend time on tool tutorials as the lever. Time is better spent showing how the tool fits the actual assignment, because ease of use did not independently predict intention once other factors were in the model.
- **Researchers:** Do not read these path rankings as causal, and measure use with more than a frequency item. The design is cross-sectional, every construct is [[self-report-measures|self-reported]], and the sample was small and self-selected.

## Limitations

- The design is cross-sectional and every construct is self-reported, so the paths are associations and common-method bias is argued away with collinearity statistics rather than designed out.
- The sample is 294 respondents from 10,000 invitations at one institution, with sixty-five percent female, 74% under 30 and 90% from historically disadvantaged groups, so the four moderator tests rest on small subgroups.
- Use Behavior was a single frequency item, which cannot be tested for internal consistency and captures frequency, not depth or duration.
- Data were collected between late 2024 and March 2025, so responses describe ChatGPT as it stood then; the paper does not name a model version.
- Performance expectancy was trimmed to two indicators and one facilitating-conditions item was dropped to repair discriminant validity, so both constructs are measured more narrowly than in the original instrument.

## Citation

van der Merwe, T. M. (2026). [*Globalising higher education in Africa through artificial intelligence: Student acceptance of ChatGPT in an open distance and e-learning context*](https://doi.org/10.3389/feduc.2026.1949509). *Frontiers in Education, 11*, Article 1949509.
