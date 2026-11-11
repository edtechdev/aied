---
title: "Teaching Empathy: A Comparative Analysis of Real, Virtual, and AI-Driven Methods"
created: "2026-11-10T20:40:00-05:00"
updated: "2026-11-10T20:40:00-05:00"
type: article
pedagogy: [experiential-learning, embodied-learning, professional-training]
technology: [generative-ai, llm, virtual-and-augmented-reality]
assessment: [self-report-measures]
sources: ['raw/papers/zwolinski-teaching-empathy-real-virtual-ai-2026.md']
source_url: "https://doi.org/10.1080/10494820.2025.2563090"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [experiment]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
discipline: [design education]
level: [higher ed]
audience: [instructors, curriculum designers, researchers]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Zwoliński, Dubiel and Kamińska (2026) compared three ways of teaching [[empathy]] to 64 first-semester master's students in an accessibility and universal design course at Lodz University of Technology: real-world role-play with wheelchairs, aging suits and pregnancy simulators in a grocery store; the same equipment combined with a VR lab; and a purely dialogic condition in which students built personas and explored shopping barriers with ChatGPT-4.0. All three produced statistically significant pre-post gains on the Davis Interpersonal Reactivity Index, but the ordering was consistent: role-play gained 13.2%, VR 11.6%, and AI 8.8%. Only the Personal Distress subscale differed significantly between groups (F(2, 61) = 7.595, p = .0011), and the custom persona questionnaire found no between-group differences at all. The comparison is confounded by exposure time — 125, 87 and 42 minutes respectively — which the authors acknowledge.

**Relevance to [[ai-education]]:** This is a direct test of whether an LLM can substitute for embodied experience in [[experiential-learning|experiential learning]] about disability and accessibility. It finds a real but smaller effect for the dialogic condition, which matters for [[design-education|design education]] programs that cannot afford simulators, wheelchairs or store visits.

## Key Findings

- **All three methods moved empathy.** Paired t-tests and Wilcoxon signed-rank tests showed significant pre-post increases for every indicator in every group, including the AI condition.
- **Immersive methods produced larger gains, but mostly not significantly larger.** Role-play led on overall IRI (13.2%), followed by VR (11.6%) and AI (8.8%); the between-group ANOVA reached significance only for Personal Distress, with role-play higher than AI and VR lower than role-play.
- **The custom persona measure found no method advantage.** For empathy toward wheelchair users, older adults and pregnant shoppers specifically, ANOVA and Tukey tests showed increases in all groups but no measurable difference between them.
- **Exposure time tracked the effect.** The real-world task averaged 125 minutes, VR 87 minutes and the AI task 42 minutes, so the modality comparison cannot be separated from dosage.
- **Students wanted a hybrid.** In the plenary discussion they recommended combining VR's repeatable scenarios, real-world sensory experience and the LLM's adaptive analysis rather than choosing one.

## The three conditions

The study ran in the first session of a required Accessibility and Universal Design course, before students had received relevant theory. Participants were randomly assigned to one of three conditions and worked through three scenarios: wheelchair use, age-related decline, and late-stage pregnancy.

The **role-play** group went to a store with a standardized shopping list containing items on high shelves, at waist height and near the floor, and navigated it using a wheelchair, an aging suit or a pregnancy simulator. The **VR** group worked in a laboratory with the same three scenarios rendered virtually. The **AI** group had no physical or in-person role-play: working in teams, they used ChatGPT-4.0 through a standard web interface to develop detailed user personas — demographics plus fears, needs, preferences and responses to barriers — and then explored scenario narratives about crowded aisles, high shelves, staff interaction and unexpected obstacles. They were instructed to avoid stereotypes and personal data, and wrote their own prompts rather than filling in a template.

Measurement used the 28-item, five-point Davis IRI with its four subscales (Perspective Taking, Fantasy, Empathic Concern, Personal Distress), plus a custom questionnaire about the three personas. Group reflections were audio-recorded, transcribed and thematically analyzed.

## Reading the Personal Distress result

The only significant between-group difference ran in an unexpected direction: role-play produced higher Personal Distress, not lower. The authors interpret this as heightened sensitivity to another person's discomfort rather than as a failure of the intervention, and they note that the increase was an increase, not a decrease. That reading is plausible but not tested — the study did not measure whether distress helped or hindered later design decisions.

It is also the subscale most likely to reflect the experience of the task itself. Wearing an aging suit in a supermarket is physically uncomfortable; reading an AI-generated narrative is not. A measure that rises with the discomfort of the simulation may be tracking the simulation rather than empathy toward the person simulated.

## What this means for practice

- **Do not treat an LLM as a replacement for embodied experience when the goal is affective learning.** The AI condition worked, but it produced the smallest gains in the least time, so the honest claim is "cheaper and faster with a smaller effect," not "equivalent."
- **Budget the time, not just the tool.** Because the conditions differed threefold in duration, a fair comparison would equalize exposure.
- **Use the AI condition for scale and preparation.** Building personas with an LLM is a plausible pre-briefing or homework step before a store visit or VR session, which is what students themselves recommended.
- **Measure the specific attitude you care about.** The generic IRI and the persona-specific questionnaire disagreed about whether method mattered.

## Limitations

- Small, homogeneous convenience sample: 64 students from one institution and one course, roughly 75% men, mean age 20.
- Exposure time varied by design (125, 87 and 42 minutes), confounding modality with dosage and cognitive effort.
- The role-play condition required equipment, transport and coordination that most courses cannot reproduce, and the VR condition required calibration and technical support; both limit scalability.
- Empathy was measured by self-report immediately after the activity, with no delayed follow-up and no behavioral or design-outcome measure.
- Random assignment was at the individual level but students worked in teams, so treatment contamination within teams is possible.

## Citation

Zwoliński, G., Dubiel, A., & Kamińska, D. (2026). [*Teaching empathy: A comparative analysis of real, virtual, and AI-driven methods*](https://doi.org/10.1080/10494820.2025.2563090). Interactive Learning Environments, 34(5), 3180–3196.
