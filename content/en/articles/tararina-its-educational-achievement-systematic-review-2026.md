---
title: "Effectiveness of intelligent tutoring systems on educational achievement: a systematic review"
created: "2026-11-16T09:05:00-05:00"
updated: "2026-11-16T09:05:00-05:00"
type: article
authors: ["Tararina, L. I.", "Tumilevich, E. N.", "Egorova, L. A.", "Budkevich, R. L.", "Kondrashev, S. V.", "Dobrokhotov, D. A."]
published: "2026-11-12"
venue: "Frontiers in Education"
source_url: https://doi.org/10.3389/feduc.2026.1890067
sources: ['raw/papers/tararina-its-educational-achievement-systematic-review-2026.md']
source_depth: full text
confidence: high
evidence_context: educational
research_method: [literature review]
page_kind: [synthesis]
level: [k 12, higher ed, adult learning]
audience: [instructors, administrators, researchers, software developers]
discipline: [stem education]
foundations: [ai-education]
pedagogy: [mastery-learning, scaffolding]
technology: [intelligent-tutoring, adaptive-learning, llm, personalized-learning]
assessment: [learning-gains, educational-measurement, assessment]
methods: [meta-analysis-systematic-review, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
---

> **Synthesis:** Tararina and colleagues synthesized 89 studies published between 2015 and 2026 that compared an [[intelligent-tutoring|intelligent tutoring system]] with an arm that did not use it. The point estimate favored the system in 83 studies and no study favored the comparison condition, but only 71 reported a significant advantage, and the proportion depends heavily on what counts as the comparison: 79% of the 73 studies set against conventional instruction reported an advantage, against 85% of the 13 set against another structured intervention. The review's sharpest result concerns the studies it excluded: fifteen whose "control" arm was a version of the same software with a module disabled all failed to show an advantage, and counting them as active comparisons would drop that proportion from 85% to 39%. Most studies measured achievement with a test written for the study, and one study in five reported no between-group test at all.

## Key Findings

- **Direction of effect is close to unanimous; tested significance is not.** The point estimate favored the system in 83 of 89 studies (0.93; 95% CI 0.86–0.97), a significant advantage was reported in 71 (80%), there was no significant difference in 12, and 6 were mixed.
- **The literature almost never tests a system against a real alternative.** 73 of the 89 studies compared against conventional instruction, business as usual or nothing; only 13 compared against another technological or structured intervention an institution might adopt instead.
- **The comparison boundary, not instruction, produces the headline contrast.** Counting the 15 design-variant studies as active comparisons drops the positive proportion from 85% to 39%, because a control arm inside the same software is an active comparison.
- **Dose of exposure tracks the result.** Positive effects appeared in 58% of single-session studies and 89% of studies lasting 13 weeks or longer.
- **The field's evidence base changed shape in two years.** 41 of the 89 studies appeared in 2025 and 2026, and all 21 studies of systems built on [[llm|large language models]] were published in 2025 or 2026.
- **Most achievement measures are home-made.** 63% of studies used a researcher-developed instrument, 18% a standardized one, and only 12 studies administered a delayed measure.
- **Nearly half of primary studies are undergraduate.** 46 of 89 were conducted with undergraduates, 9 with primary and 12 with middle school students, and [[math-education|mathematics]] (19) and [[cs-education|programming]] (16) supplied most of the subject matter.

## What the review counted

The authors set an operational bar: a system qualified only if it adapted instruction from performance data collected during use, so a static chatbot or a video platform did not. A study qualified only if some arm did not use the system and a between-group test on an achievement measure was reported. Those two rules separated 119 studies in which every arm used an adapting system into a separately listed design-feature group, on the reasoning that such studies answer which features help rather than whether the approach helps at all.

Direction of effect and statistical certainty were coded as independent fields and every coded value was checked against the full text. Twenty-two otherwise eligible reports were excluded because they presented no between-group test, some of them asserting a significant advantage in prose without reporting one. The review was not registered in a public registry, though a protocol was prepared before the search.

## The boundary problem

The finding a reader should carry away is not the 80%. It is how much the number moves when the intervention is bounded differently. Fifteen studies had a comparison arm that adapted to the individual learner while working inside the same software — a module disabled, a feedback strategy altered, an agent role changed. Under the review's definition that counts as an alternative technological intervention, and none of the 15 reported a positive effect.

Had the authors kept them in the active-comparison category, 28 studies would sit there with a 39% positive proportion, against 79% under conventional instruction. That is roughly the size of contrast earlier syntheses attribute to the nature of the comparison condition, produced here entirely by a decision about where the intervention ends. The authors are careful about what this establishes: with 13 studies in the active arm, the 85% figure spans 58%–96%, and the two proportions were never tested against one another.

What the corpus does show is a gap in the literature rather than a result. Whether a tutoring system beats the other structured, digital alternatives an institution could buy instead is a question on which 13 studies bear, against 73 that establish only that it beats not using it.

## What the achievement measures can bear

Achievement was measured with a purpose-built test in 63% of studies and a standardized instrument in 18%, and a delayed measure was administered in 12. A post-test written by the team that ran the intervention, administered at the end of a short trial, supports a claim about performance on that test and not much more. The absence of delayed measurement means [[learning-gains|learning gains]] retention is largely untested, which matters for a technology sold as individualized [[mastery-learning|mastery support]].

The supply-side shift is worth noting alongside this. All 21 LLM-based evaluations are new, so the classical two decades of rule-based tutoring and the model-based systems now arriving are being pooled into one proportion, and the review does not separate them.

## What this means for practice

- **Administrators:** ask what the comparison was. A vendor claim that a system improves achievement usually means it beat no system, and the review gives no more than 13 studies on how it fares against the platform or tutoring service you would otherwise fund.
- **Instructors:** expect the largest effects where students use the system across a term rather than in a single session; 89% of studies lasting 13 weeks or longer reported an advantage against 58% of single-session studies.
- **Instructors:** check what the system adapts to. The review excluded systems that do not adapt from performance data, so a tool that returns generic hints is outside this evidence, whatever its interface suggests.
- **Educational technology developers:** report the comparison arm explicitly, including which features were disabled for the control. Without that, your evaluation lands in the design-feature group and cannot speak to whether the system works.

## Limitations

- The review was not prospectively registered, so the timing of its eligibility and coding decisions cannot be independently verified.
- The eligibility rule separating system evaluations from design-variant comparisons rests on a judgment about whether a comparison arm adapts at the individual level; where a report does not describe that arm, the judgment cannot be made, and five studies were excluded on that basis.
- Only 13 studies supply the active-comparison estimate, with an interval from 58% to 96%, so any comparison between the two conditions is descriptive.
- Full-text eligibility [[assessment|assessment]] was not duplicated in the manner of title and abstract screening; reliability was addressed afterwards by blinded recoding of a sample and a full-text audit of every included study.
- Direction and significance were vote-counted rather than meta-analyzed, so no pooled effect size is estimated and the review cannot say how large the advantage is.

## Citation

Tararina, L. I., Tumilevich, E. N., Egorova, L. A., Budkevich, R. L., Kondrashev, S. V., & Dobrokhotov, D. A. (2026). [*Effectiveness of intelligent tutoring systems on educational achievement: a systematic review*](https://doi.org/10.3389/feduc.2026.1890067). *Frontiers in Education*, 11.
