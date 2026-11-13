---
title: Longitudinal Research
created: "2026-11-12T14:28:00-05:00"
updated: "2026-11-13T00:25:09-05:00"
type: concept
research_method: [literature review]
confidence: high
methods: [longitudinal-research, research-methods-aied, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Longitudinal research** — designs that measure the same units repeatedly over time, so that change *within* a person, class or institution can be separated from differences *between* them. In [[ai-education|AI in education]], longitudinal work is what turns claims about adoption, skill growth and engagement from snapshots into trajectories: four semesters of teacher-education surveys showing [[generative-ai|GenAI]] use rising, a semester of self-regulation data showing [[metacognition|metacognitive]] knowledge falling under assessment pressure, five waves of engagement data whose slopes move together. Its value is not that it measures more, but that it can ask a question a single measurement cannot answer: what is changing, for whom, and at what rate.

## Questions to Consider

- A cross-sectional survey finds that students who use AI more report higher self-efficacy. What else could explain that, and what design would separate the explanations?
- "Longitudinal" is often used for any study with two time points. What does a pre/post pair establish, and what does it leave open?
- Xu's panel model separates a stable trait from occasion-specific fluctuation. Why does that matter for a claim that feedback literacy causes engagement?
- AI tools change during a study: models update, features appear, licenses lapse. What does that do to a design that assumes a constant treatment?
- Attrition is not random. How should a study report a term in which a fifth of the sample dropped out?
- A semester is long for a course and short for a development. Which claims about AI need years, and which are answered by weeks?

## Introduction

Longitudinal research is a family of designs rather than one method: repeated surveys of the same cohort, panel studies, growth-curve models, cohort comparisons, experience sampling, and analyses of log data that accumulate over a term. What unites them is the unit of analysis (the same learner, class or institution observed more than once) and the inferential gain that follows from it.

That gain is often overstated. A hundred-odd articles describe themselves as longitudinal, and they range from four-semester trend analyses to a single pre/post comparison. The label has become a quality signal, which makes it worth being precise about what each design supports. A repeated survey can show that a distribution moved. A panel model can show that a person moved relative to their own baseline. A growth model can show that the rate of movement differs across people and that two processes move together. Only some designs with an outcome measure at both ends can begin to address whether the tool caused the change.

The stronger studies establish less than their labels suggest, and the design families differ in what each can support.

## Within-person change versus between-person difference

The distinction that does the most work is between a stable trait and an occasion-specific state. Xu (2026) measured [[feedback-literacy|AI feedback literacy]] and [[student-engagement|agentic engagement]] in 480 Chinese undergraduates three times at six-week intervals, and used a random-intercept cross-lagged panel model to separate the two levels. The stable trait correlation was r = 0.315 (p < 0.001); the within-person cross-lagged paths told a different story about which construct moved first. Without that separation, a cross-sectional correlation between the two would have been reported as evidence of a relationship, and it would have been ambiguous: people who are generally more feedback-literate may also be generally more engaged, without either changing the other.

This is the design's core contribution. Most questions in this literature (does AI feedback build engagement, does reliance erode self-regulation, does use predict well-being) are questions about change, and a single measurement cannot answer a question about change no matter how large the sample.

## Trajectories and what covaries with them

Growth modeling asks a different question: not whether a person differs from their usual level, but what shape the change takes and whether two change processes are linked. Zhang and Tang surveyed 850 undergraduate music students at four Chinese universities five times across a semester, measuring classroom engagement, flow and self-perceived musical emotional intelligence in AI-assisted classes. All three rose over the five waves, and the slopes moved together: engagement's slope correlated 0.39 with flow's and 0.22 with emotional intelligence's.

The finding is correlational about the slopes, not causal about the tools, and the authors present it that way. Its value is that it locates the change in a rate rather than a level, which is the kind of claim a curriculum designer can act on: if engagement climbs faster where flow climbs faster, the design question becomes what produces flow in the first place.

## Adoption and attitude trends

A third family follows a population rather than a growth process. Parker, Loper, Carter, Hayes and Karakas analyzed four semesters of survey data from more than 300 students in a Midwestern US [[teacher-education]] program, tracing GenAI use and ethical perceptions after ChatGPT's launch. Use grew substantially: assessment preparation from 57% to 83%, studying from 44% to 76%, while ethical stances became more uncertain rather than settling, and perceptions differed by subgroup.

This is a repeated cross-sectional design: the same program, not necessarily the same students. It establishes a trend in a population, which is exactly what a policy question needs, and it cannot establish individual change. The distinction matters when the trend is read as development: a rise in reported use across semesters may reflect new cohorts entering with different norms as much as the same students changing.

## State, trait and the shape of a term

Song and colleagues' semester-long study of 75 first-year university students shows why the within-person question is worth asking about constructs usually treated as aptitudes. Students' individual baselines for [[self-regulated-learning|self-regulated learning]] were stable, but their metacognitive knowledge and [[well-being]] declined systematically over the term, tracking curriculum demands such as major assessment deadlines. A proof-of-concept showed that an [[llm|LLM]] could be given per-student context to support regulation at the moment it was needed.

The practical reading is that a trait measured once would have hidden the decline. The methodological reading is that "stable" and "unchanging" are different claims, and only repeated measurement distinguishes them.

## The design families and what each costs

- **Repeated survey of a cohort.** Same students, several waves. Establishes individual change; vulnerable to attrition and testing effects.
- **Repeated cross-section (trend).** Same population, new sample each wave. Establishes population change; cannot track individuals.
- **Panel model with lagged effects.** Waves spaced to model ordering, with trait and state separated. Establishes temporal precedence; needs adequate spacing and sample size.
- **Growth-curve model.** Three or more waves modeling intercept and slope. Establishes shape and rate of change, and covariation between processes.
- **Longitudinal quasi-experiment.** Conditions compared across repeated measures, as in Melanou and colleagues' nine-week study of 87 students in three AI conditions, where knowledge rose in all groups (F(1, 50) = 29.8) and prior achievement moderated the benefit. Establishes whether a condition changes a trajectory; still not random assignment.
- **Experience sampling and log panels.** Frequent in-situ measures or trace data. Establishes fine-grained dynamics; weak on constructs needing reflection.

## Threats that bite in AI studies

Four problems recur, and the last two are specific to this field.

**Attrition.** Students who disengage leave the study, so the later waves over-represent the engaged. A trajectory estimated from survivors can slope upward while the cohort as a whole does not.

**Testing and instrumentation effects.** Repeated exposure to the same instrument changes responses, particularly for self-report measures of attitudes and use.

**Tool drift.** An AI tool is not a fixed treatment. Models are updated, interfaces change, institutional licenses are withdrawn mid-term. A study that spans a semester is measuring a moving object, and few papers report version changes.

**Assisted performance mistaken for learning.** A gain measured with the tool available may show what the learner can do with support, not what they have internalized. The distinction is the same one that separates [[scaffolding]] from development, and longitudinal designs do not solve it unless the later waves include an unassisted measure.

## Implications for Practice

Instructors can stop reading a single end-of-term survey as evidence that a change worked. A distribution that moved between two terms may reflect a new cohort, a new assessment regime or an instrument that lost its novelty. A comparison of the same students against their own earlier scores answers a narrower and more useful question.

Program directors can plan evaluation in waves. Three or more measurements across a program let a department estimate a slope rather than compare two points, and reporting attrition at each wave keeps a rising average from hiding the students who left.

Faculty developers can evaluate professional development the same way, with repeated measures and at least one task completed without the tool. A workshop series that raises confidence and use while leaving unaided performance flat has shown something about attitudes, and the distinction is worth reporting to the people who fund the next series.

Administrators can record what changed during a study or a pilot: model versions, license changes, interface updates. A semester is long enough for the tool to become a different treatment, and documentation is cheap compared with explaining an unexplained jump.

Researchers can keep two claims apart in their own writing. Temporal ordering supports precedence, not causation, and a pre/post pair is a repeated-measures design rather than a trajectory.

## What longitudinal designs cannot do

They do not establish causation on their own. Temporal ordering is necessary but not sufficient: an unmeasured variable that changes on the same schedule (a new assessment regime, a curriculum reform, a cohort effect) can produce the same pattern. They are expensive in participant time, which caps sample sizes and often forces self-report. And a term is short: developmental questions, in the sense [[developmental-psychology]] uses the term, need years, and almost nothing in this literature spans them.

## How it appears in the research

The stronger examples cluster in higher education, where a semester provides a natural frame: Xu's three-wave panel, Zhang and Tang's five-wave growth model, Song's semester of self-regulation data, Melanou's nine-week quasi-experiment. Teacher education contributes the trend study. School-level longitudinal work is thinner, and the middle-school LMS paper that carries "longitudinal" in its slug is a design proposal rather than a longitudinal study — a reminder that the label in a title is not the design.

## Relationship to other methods

Longitudinal designs sit inside [[quantitative-research|quantitative research]] and share its measurement problems. They are often paired with [[mixed-methods-research|mixed methods]] when the question is why a trajectory bent. They differ from [[rct|randomized experiments]] in that they observe naturally occurring variation over time rather than assign it, and from [[design-based-research|design-based research]] in that they do not iterate on an intervention. DBR explains how to make something work in context, while longitudinal work explains what changed and when. [[learning-analytics|Learning analytics]] supplies the trace data that makes fine-grained longitudinal analysis possible without repeated surveys.

## Common Misconceptions

- **"Two time points make a study longitudinal."** A pre/post pair is a repeated-measures design; it cannot estimate a trajectory, and it usually cannot separate change from testing effects.
- **"Longitudinal means causal."** Ordering in time is necessary but not sufficient; cohort effects, concurrent reforms and tool updates all produce change without the treatment causing it.
- **"A big sample fixes a short window."** Sample size addresses precision, not the time needed for a developmental or institutional process to unfold.
- **"Same program means same people."** Repeated cross-sections track a population, not individuals; the two support different claims.
- **"Self-report trends are attitude trends."** Reported use and reported stance shift with norms and with the instrument as well as with behavior.

## Connected Concepts

- [[research-methods-aied]]
- [[quantitative-research]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[rct]]
- [[design-based-research]]
- [[learning-analytics]]
- [[self-report-measures]]
- [[limitations-in-aied-research]]
- [[interpreting-and-applying-aied-research]]
- [[developmental-psychology]]
- [[self-regulated-learning]]
- [[student-engagement]]

## Connected Articles

- [[ai-feedback-literacy-agentic-engagement-panel-2026]] — Three-wave panel separating trait from state (Xu)
- [[zhang-tang-ai-music-classroom-engagement-longitudinal-2026]] — Five-wave growth model of engagement, flow and emotional intelligence
- [[longitudinal-ai-usage-ethics-policy-teacher-education-2026]] — Four semesters of GenAI use and ethical perceptions in teacher education
- [[song-genai-learning-partner-srl-over-time-2026]] — Semester-long self-regulation study showing decline under assessment pressure
- [[melanou-genai-learning-dynamics-longitudinal-2026]] — Nine-week longitudinal quasi-experiment across three AI conditions
- [[ai-lms-middle-school-longitudinal]] — AI-integrated LMS proposal for middle school (design, not a longitudinal study)
