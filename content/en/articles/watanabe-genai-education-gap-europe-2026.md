---
title: "Is the education gap in generative AI use smaller than the internet's was at a similar level of use? Evidence from 16 European countries"
created: "2026-10-28T12:00:00-04:00"
updated: "2026-10-28T12:00:00-04:00"
type: article
authors: ["Watanabe, K."]
published: "2026-10-27"
venue: "arXiv preprint"
source_url: https://arxiv.org/abs/2610.36181
foundations: [ai-education, interpreting-and-applying-aied-research]
technology: [generative-ai]
methods: [quantitative-research, research-methods-aied]
ethics: [digital-divide, equity-in-ai-education]
institutions: [educational-policy-ai]
research_method: [secondary analysis]
discipline: [learning sciences]
level: [adult learning]
audience: [policymakers, researchers]
page_kind: [evaluation]
sources: ['raw/papers/watanabe-genai-education-gap-europe-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
---

> **Synthesis:** Watanabe asks a narrower question than "is [[generative-ai|generative AI]] educationally unequal": is the [[equity-in-ai-education|education gap]] in its use smaller than the [[digital-divide|internet's gap]] was in the same country at the same overall level of use? Each country's 2025 generative-AI rate (Eurostat, ages 16–74, last three months) is matched to the internet year whose overall rate sits within 5 points, and the gap between high (ISCED 5–8) and low (ISCED 0–2) education is measured twice — as a log ratio and as a percentage-point difference. Sixteen of 35 countries matched. On both measures the 2025 gap was smaller in most of them: 13 of 16 on the ratio (median change −0.625, sign test p = 0.021) and 15 of 16 on points (median −27.6, p = 0.0005), with the median point gap roughly halving from 56.4 to 28.6 points. The point result keeps its sign in every planned check but shrinks to about −10 to −11 points once education composition enters the match, and the ratio result fails the planned check that drops countries matched at their first internet observation. Twelve early-adopting EU members, Denmark, France and Germany among them, could not be matched at all, so the comparison describes late-adopting countries rather than Europe.

## Key Findings
1. **The point gap roughly halves.** Median high-minus-low gap fell from 56.4 points for the internet to 28.6 for generative AI; median change −27.6 (−32.2 to −16.8), negative in 15 of 16 (p = 0.0005).
2. **The ratio gap is smaller too.** Median log-ratio change −0.625 (−0.969 to −0.291), 13 of 16 countries negative, two-sided sign test p = 0.021, which the decision rule classes as smaller.
3. **The ratio fails a planned check.** Dropping the five countries matched at their first internet observation leaves 9 of 11 negative (p = 0.065), not distinguishable; the point result survives at 11 of 11.
4. **Composition-aware matching shrinks the point estimate.** Standardizing each internet year to the 2025 education mix (7 countries) gives −11.5 points, and matching on the medium-education rate (8 countries) gives −10.0, not −27.6.
5. **Early adopters are absent by construction.** Twelve EU members, Denmark and Germany among them, were excluded because their first observed internet rate already exceeded their 2025 generative-AI rate by more than 5 points.
6. **A later technology is not enough.** Internet banking against the internet shows the opposite on the ratio (+0.331, 12 of 15 positive, p = 0.035) and no distinguishable point difference (−1.5, p = 1.0).
7. **Students were saturated on both sides.** Median student internet use was 85.7% in the matched year (15 countries) against 85.5% for generative AI in 2025 (15 countries).

## How the comparison was built
The [[research-methods-aied|matching design]] holds the overall rate fixed instead of comparing technologies by time since launch. For each of 35 countries, Eurostat's 2025 generative-AI item (use in the last three months, ages 16–74) supplies a target rate; the matching year is the internet year whose all-individuals rate is closest to that target, subject to all three education cells being present and unflagged, and the country is kept only if the residual is at most 5 points. The gap is then computed twice: as the difference between high and low education rates, and as the log of their ratio, with a log-odds difference as a secondary measure. Countries are the units of [[quantitative-research|analysis]], summarized by the median change and a two-sided exact sign test, with a percentile bootstrap interval from 10,000 resamples. Matched years run from 2003 to 2010 and residuals from −3.3 to +3.8 points. Sixteen countries matched, 14 of them EU members plus North Macedonia and Turkey; the median generative-AI gap was 28.6 points and the median internet gap 56.4.

## Why the ratio and the point gap disagree
The two measures answer different questions and behave differently under real data. A percentage-point gap at a fixed overall level depends heavily on how much of the population sits in each education group, and Europe's 2025 population has a much larger high-education share than the mid-2000s comparison years did. When the internet years are reweighted to the 2025 education mix, or the match is made on the medium-education rate, the point change shrinks toward −11 points. The ratio is less exposed to composition but far more exposed to small denominators: low-education internet rates near zero, such as Romania's 1.7% in 2006 or Turkey's 3.8% in 2005, can produce enormous ratios from a handful of respondents. The paper reports both without choosing between them, and its own decision rule required both measures to reach significance for a clean verdict.

## What the sensitivity checks showed
The planned checks mostly agree, which strengthens the point result. Interpolating between bracketing internet years gives −27.4 points; using internet use over twelve months gives −30.9; restricting to EU members gives −28.1; the log-odds measure agrees with the ratio. The two exceptions are informative rather than fatal. The first-year-match check (F7) keeps the point result but pushes the ratio to p = 0.065. The internet banking comparison goes the other way on the ratio, which weighs against reading a smaller generative-AI gap as the automatic consequence of a technology arriving later — though with a null point result and a single comparator it does not rule that reading out. Age-matched variants ran from 6 to 18 countries, always with a negative point change and only sometimes with a significant ratio.

## What the result does and does not license
The finding is about whether someone used a generative-AI tool in the previous three months. It says nothing about how often, how [[ai-literacy|well]], or for what, which is exactly where digital-divide theory expects [[differential-effects-across-learner-groups|gaps in skills and outcomes]] to persist. It also describes a set of countries selected by data availability rather than by chance: the matched set is the countries whose internet series started low enough to overlap with a 2025 AI rate around a fifth to a half of adults. Read together, the two measures support a modest normalization claim for recent use and leave the stratification claim untouched for everything downstream of access.

## What this means for practice

- **Policymakers.** Do not read a smaller recent-use gap as [[equity-in-ai-education|equity]] achieved. The measure is a binary "used in the last three months" item, and the comparison excludes the twelve EU members where the internet arrived earliest, so any [[educational-policy-ai|national access target]] built on it is aimed at the wrong benchmark.
- **Instructors.** Read education categories as completion, not enrollment. In Czechia, Estonia, Lithuania and Latvia the 2025 generative-AI rate among low-education respondents exceeded the national average, which is consistent with young people who have not yet finished upper secondary being classified as low education.
- **Researchers.** Match technologies on overall use rather than on years since launch, and report a ratio and a point gap side by side. Here they agree in sign but support different verdicts once the matched set changes, a [[interpreting-and-applying-aied-research|comparability decision]] worth stating rather than burying.
- **Administrators.** Benchmark only against the 16 matched countries. Nothing in this study speaks to Denmark, Germany, France, Italy, the Netherlands or Sweden, and the EU-wide figures it cites (48.7% high education, 25.9% medium, 22.4% low) come from a different Eurostat publication.

## Limitations

- Selection drives the result: 12 EU members and six non-EU countries were excluded because their first observed internet rate was already more than 5 points above the 2025 target, so the matched set is a data-availability-selected group rather than a random sample.
- The 2025 generative-AI item is one year of a new survey question, the internet years use ISCED 1997 while 2025 uses ISCED 2011, and Eurostat publishes no standard errors for these [[self-report-measures|survey items]], so the sign tests describe how far 16 point estimates depart from a fair coin rather than inference about a wider population.
- The analysis is not pre-registered: the plan is not public, was recorded about six minutes before the first results draft, and the author had already seen some values and expected the "smaller" direction, so every result may reasonably be read as exploratory.
- The age-matched comparison could not be made. The planned check restricting both technologies to ages 25–64 had only 2 countries, and the paper reports it as not possible with these data rather than substituting a different band.

## Citation

Watanabe, K. (2026). [*Is the education gap in generative AI use smaller than the internet's was at a similar level of use? Evidence from 16 European countries*](https://arxiv.org/abs/2610.36181). arXiv preprint arXiv:2610.36181.
