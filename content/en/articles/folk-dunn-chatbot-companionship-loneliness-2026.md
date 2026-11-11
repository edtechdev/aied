---
title: "How Does Turning to AI for Companionship Predict Loneliness and Vice Versa?"
created: "2026-11-11T15:58:00-05:00"
updated: "2026-11-11T15:58:00-05:00"
type: article
published: "2026"
evidence_context: non_educational
sources: ['raw/papers/folk-dunn-chatbot-companionship-loneliness-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [longitudinal study, survey]
audience: [researchers, instructors]
level: [adult learning]
pedagogy: [well-being, student-experience]
technology: [conversational-ai, generative-ai]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
---

> **Synthesis:** Folk and Dunn followed 2,149 adults in the United Kingdom, the United States, Canada, and Australia across four surveys spanning 12 months to ask whether turning to [[conversational-ai|chatbots]] for companionship predicts [[well-being|loneliness]], and whether loneliness predicts turning to them. The answer depended on the measure. On a single-item measure of emotional isolation, more social chatbot use predicted more loneliness four months later (β = 0.07 to 0.08), and loneliness also predicted more use (β = 0.06). On a 20-item measure of social connection, feeling less connected predicted more later use (β = −0.07 to −0.09), but use did not significantly predict a drop in connection (β = −0.02 to −0.03, p = .369). The authors call these analyses exploratory and urge caution, so the pattern is a well-measured lead rather than a settled verdict on AI companionship.

## Key Findings

1. The study followed 2,149 adults from the United Kingdom, the United States, Canada, and Australia across four surveys spaced four months apart, with 12 months elapsing between each participant's first and fourth survey.
2. Between 26.38% and 29.68% of participants reported using chatbots for social purposes at each wave, and among users the modal amount was "a few times" over the previous four months.
3. On the single-item emotional isolation measure, within-person increases in social chatbot use predicted greater emotional isolation four months later (β = 0.07, 0.07, and 0.08; p = .006).
4. Emotional isolation also predicted later chatbot use in that same model (β = 0.06 at all three lags; p = .023), so the association ran in both directions on that measure.
5. On the 20-item social connection measure, feeling less connected predicted more chatbot use four months later (β = −0.09, −0.08, and −0.07; p = .004), replicating the loneliness-to-use path.
6. Chatbot use did not significantly predict later social connection (β = −0.02, −0.03, and −0.03; p = .369), so the use-to-loneliness path appeared only on the single item.
7. Across six robustness checks, chatbot use predicted later emotional isolation in five, and connection predicted later use in five; the remaining estimates were marginal (p = .069 and p = .054).

## Design and sample

The data came from Prolific Academic users living in the United Kingdom, the United States, Canada, or Australia, recruited from a larger pool of 2,592 people who had completed an earlier survey between July and October 2023. Of the 2,149 who completed at least one of the four surveys, 979 (46%) completed all four, 466 (22%) completed three, 395 (18%) completed two, and 309 (14%) completed one; the authors kept single-wave respondents because they increase the precision of some parameter estimates in random-intercept cross-lagged panel models. Each survey opened only after four months had passed, so elapsed time stayed nearly constant (122.12, 121.24, and 120.90 days between successive waves), and participants earned \$1.20 to \$1.25 per survey. Social chatbot use was a six-point frequency item, from never to daily, covering advice-seeking, regular social conversation, and companionship over the past four months; anyone who had never used a chatbot was coded 1. The authors fitted random-intercept cross-lagged panel models in lavaan with full information maximum likelihood, controlling for breakups, relocations, new relationships, and becoming a parent.

## Two directions, and only one of them repeated

The two models tell different halves of one story. With emotional isolation, the cross-lagged paths ran both ways: people who felt more isolated than usual used chatbots more four months later (β = 0.06; p = .023), and people who used chatbots more than usual felt more isolated four months later (β = 0.07 to 0.08; p = .006). At the between-person level, people who were generally more isolated also used chatbots more (r = .13, p < .001). With social connection, only one direction held. Feeling less connected than usual predicted more chatbot use four months later (β = −0.09, −0.08, and −0.07; p = .004), but increased use did not significantly predict a later decline in connection (β = −0.02, −0.03, and −0.03; p = .369), though the point estimates were negative. The between-person correlation there was not significant (r = −.04, p = .150). The authors treat the connection-to-use path as robust and the isolation-to-use path as less so, while use predicting isolation held in five of six robustness checks.

## What the measurement choice changed

The divergence is the paper's most instructive result. Emotional isolation was a single Gallup item asking how lonely participants had felt, defined explicitly as emotional isolation from people; it has high face validity but, the authors note, is more susceptible to noise because it is only one item. Social connection was the 20-item Lee social connectedness scale, asking about connection to friends, strangers, and society, with items such as "I am in tune with the world" and "I fit in well in new situations." The two measures correlated −.63 to −.64 at each wave, related but distinct. Connection was more stable: the between-person factor explained 85% to 89% of its variance at any wave, against 70% to 73% for emotional isolation. The authors reason that a small change in technology use might shift felt isolation without moving a stable self-image, whereas a larger shift in overall connection might be what prompts someone to seek out AI. They concede that many connection items have questionable face validity and can only speculate, given the exploratory analyses.

## The education bridge, stated as inference

For education this is context, not a classroom finding, and the transfer has to be argued rather than assumed. The sample was adults in four Western countries recruited through Prolific, not students, and the study measured loneliness and social connection rather than learning, course belonging, or persistence. Nothing in the design tested a campus tutoring bot, an advising assistant, or a study companion, and nothing tested whether the associations differ for learners. What the results do is reframe a design question. A [[student-support-and-success|student support]] chatbot that is warm, always available, and explicitly framed as companionship sits close to the configuration this study measured, and in that configuration heavier use tracked more isolation on the single-item measure. The inference, not a finding, is that institutions offering companion-style support should ask whether heavy users are also the students [[well-being]] services are trying to reach in person. Whether that holds on a campus is untested, and the authors' caution about exploratory analyses applies with more force to any education application.

## What this means for practice

- **Instructors.** Watch for students who describe a chatbot as a friend or as their main outlet for talking about their day, and treat that disclosure as a reason to check in rather than as engagement with a tool.
- **Student support and advising staff.** Ask about companion-style chatbot use when screening for isolation, because in this study feeling less connected predicted more use four months later, so use can be an early marker rather than only a cause.
- **Administrators.** Do not adopt time-in-conversation or daily-active use as a success metric for a well-being-oriented assistant; the paper's only evidence of harm runs through heavier use on the single-item isolation measure.
- **Researchers.** Measure loneliness with more than one instrument and report both, since the direction of the effect changed between a single item and a 20-item scale, and a single scale would have hidden half the pattern.

## Limitations

- All measures were self-report, with no behavioral logs of chatbot use, so frequency is what participants recalled over four months rather than what they did.
- The two loneliness measures behaved differently: a single item with high face validity but more noise, and a 20-item scale whose between-person factor explained 85% to 89% of its variance, leaving little within-person movement to predict.
- The study was not preregistered, and the authors call all findings exploratory, noting a garden of forking paths and that many p values would not survive correction for multiple comparisons.
- Only 979 of 2,149 participants (46%) completed all four surveys; 309 (14%) completed just one, and in the listwise-completer robustness model both focal paths fell short of significance (p = .069 and p = .054).
- The sample covers four Western countries and Prolific workers, whom the authors describe as likely more technologically savvy than the broader population of English-speaking Western adults.
- The design is correlational: the authors state that random-intercept cross-lagged models support causal inference only if positivity, exchangeability, and consistency hold, and they judge that the study satisfies these assumptions only partially.

## Citation

Folk, D., & Dunn, E. (2026). [How does turning to AI for companionship predict loneliness and vice versa?](https://doi.org/10.1177/09567976261427747). *Psychological Science*. Advance online publication.
