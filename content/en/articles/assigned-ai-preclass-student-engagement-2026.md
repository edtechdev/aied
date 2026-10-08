---
title: "How assigned AI use before class shapes active student engagement in class"
created: "2026-10-08T09:15:00-04:00"
updated: "2026-10-08T09:15:00-04:00"
type: article
foundations: [framing-ai-use-for-students, cognitive-offloading, critical-thinking, learning-design]
pedagogy: [student-engagement, active-learning, anxiety-and-stress, self-efficacy, motivation, student-ai-interaction, professional-training]
technology: [generative-ai, speech-and-voice-technologies, conversational-ai, pedagogical-agent, simulation]
assessment: [oral-assessment, learning-gains, self-report-measures]
methods: [rct]
research_method: [experiment, survey]
discipline: [business education]
level: [graduate, higher ed]
audience: [instructors, researchers, administrators]
page_kind: [evaluation]
sources: ['raw/papers/assigned-ai-preclass-student-engagement-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-08"
    agent: hermes-agent
---

> **Synthesis:** Wang and colleagues report a preregistered field experiment — the first large-scale [[rct|randomized trial]] of its kind, they argue — in which 759 MBA students across ten sections of a required strategy course were each randomly assigned two of ten case discussions to prepare for with CAiSEY, a purpose-built voice-based AI discussion partner that argues the opposing position in a spoken exchange. Teaching assistants counted voluntary contributions live, excluding instructor cold calls. After a student's second assigned use, voluntary contributions in later sessions rose about 31% relative to the sample mean of 0.73 per session — but nothing changed in the session the tool prepared, and participation fell after a first use alone. Heavier users also reported greater comfort speaking up and greater perceived learning, but no change in focus or motivation. The work reframes [[ai-education|AI in education]] around [[student-engagement|engagement]] as an intermediate [[learning-gains|learning outcome]] rather than [[assessment]]-based test scores, tying the effect to lower [[anxiety-and-stress|anxiety]] and greater [[self-efficacy]].

## Key Findings

1. **A second use, not a first, moved behavior.** Contributions rose in the next session (β₂ = 0.183) and all future sessions (β₂ = 0.227, both p < 0.05) only after the second assigned opportunity; a first use preceded lower participation (β₁ = −0.151).
2. **The effect is about 31%.** The qualifying-use estimate for all future sessions corresponds to roughly one extra voluntary contribution every four to five sessions, 31% of the 0.73-contribution mean.
3. **Nothing changed in the session CAiSEY prepared.** Same-session estimates were near zero for assignment and qualifying use alike (β₁ = −0.040, β₂ = −0.036), so the benefit is lagged.
4. **Take-up was high, but dose was uneven.** Of the 504 students whose two assigned sessions were observed, 92.2%–98.9% submitted a conversation, but only 38.1%–67.0% held one of at least ten minutes.
5. **Comfort and perceived learning rose; focus and motivation did not.** Later qualifying use predicted greater comfort (λ = 0.131) and deeper perceived learning (λ = 0.124, both p < 0.05); focus (λ = −0.035) and motivation (λ = 0.040) stayed flat.
6. **The result was robust to the definition of use.** A second assigned opportunity predicted more participation at every conversation-length threshold from four to ten minutes (β₂ = 0.099 to 0.227, all p < 0.05).

## The intervention: a voice partner that argues back

CAiSEY was purpose-built for the course rather than a general [[conversational-ai|chatbot]]. Each case came with an opening question; the student chose a position and the tool adopted the opposing one, so the student defended a stance against an adversarial [[speech-and-voice-technologies|voice AI]] partner until they ended the exchange. The platform then generated a summary and the student submitted a written reflection. Instructors and teaching assistants were blind to who was assigned. The design targeted two barriers at once: mastery of the case material and the [[anxiety-and-stress|anxiety]] that keeps students from speaking, which prior work frames as fear of negative evaluation. The study thus randomizes when, not whether, each student practiced — a [[pedagogical-agent|pedagogical agent]] used as a rehearsal partner rather than a tutor.

## Why class participation is the outcome, not a test score

The authors argue AI-and-learning research has over-indexed on exam and homework scores, which say little about the [[student-engagement|engagement]] behaviors that mediate learning. Speaking up in class is both a performance to prepare for and a habit that generalizes to career settings where decisions are made orally, linking participation to [[professional-training|professional training]] and [[career-development-and-readiness|employability]]. Prior reviews connect voluntary contributions to [[self-efficacy]] and [[critical-thinking]], while fear of negative evaluation suppresses them. That is why [[self-report-measures|self-report items]] about comfort and perceived learning are read alongside the behavioral counts: they test a proposed mechanism, not just a feeling. The paper leans on [[active-learning|active learning]] scholarship and the [[icap-framework|ICAP]] idea that explaining deepens understanding.

## A lagged effect that needs a second exposure

The dose-response is the paper's least intuitive result. Preparing with CAiSEY did nothing for the case it was assigned to; a lone first use preceded lower voluntary participation (β₁ = −0.151 in the next session); only the second use predicted more contributions afterward. The estimate for all future sessions (β₂ = 0.227 under the randomization-instrument approach) is around 31% of the 0.73-contribution average. Because every student received two assignments, the comparison is between earlier and later assignment, which the authors read as use versus not-yet-use. The gain held at every threshold from four to ten minutes, so long conversations were not required.

## Where this sits in the AI-and-learning debate

The study occupies a contested space. Much recent evidence, including work on generative AI in secondary mathematics, warns that unguarded tools invite [[cognitive-offloading|offloading]] and can damage learning, and a Nature feature the authors cite worries about eroding [[critical-thinking|critical thinking]]. This study points the other way, but for a tool built with deliberate [[guardrails]]: purpose-built, adversarial, and tied to a specific discussion the student is about to have. The authors caution that the result does not generalize to generic chatbots used without design, and that [[generative-ai]] effects depend heavily on deployment. They position voice AI as provoking the [[desirable-difficulties|productive friction]] critical thinking depends on rather than replacing it — supported here for [[oral-assessment|oral]] rehearsal, still open for broader [[simulation|simulated]] dialogue.

## What this means for practice

- **Instructors.** Build a pre-class rehearsal step into a discussion you will actually hold, and make it adversarial — the student picks a position and the tool argues the other side — rather than asking students to summarize the reading.
- **Instructors.** Budget for repetition: the gain appeared only after a second use and surfaced in later sessions, so a one-off AI assignment is unlikely to change who speaks.
- **Course and program designers.** Voice-based rehearsal is a scalable complement to timetabled speaking practice for large [[higher-ed|higher-education]] cohorts, supporting a live oral skill rather than substituting for it.
- **Administrators.** Because the effect persists across the rest of the course, treat pre-class AI preparation as an intervention with carryover and evaluate it against participation data your classes already generate.

## Limitations

- **Only two exposures, and no never-used comparison.** Every student was assigned CAiSEY twice, so the study cannot compare end-of-term learning outcomes for users against students who never used the tool; the contrast is use versus not-yet-use.
- **No human-partner control condition.** The authors would have preferred to compare the AI partner with a human rehearsal partner, but standardizing and monitoring that was beyond their capacity.
- **One purpose-built tool in one course.** CAiSEY was tailored to the case-based discussions of a single required course at one US [[business-education|business school]] taught by four instructors, so results need not transfer to generic [[conversational-ai|chatbots]] used without design.
- **Participation was coded live by teaching assistants.** Two sections (152 students) did not record cold calls separately, one retained section's attendance had to be reconstructed, and voluntary contributions were inferred by subtracting cold calls.
- **The self-reported outcomes are perceptions.** Comfort, focus, motivation and perceived learning came from seven-point [[self-report-measures|self-report items]], which the study treats as subjective experience rather than validated skill.
- **The causal reading rests on assumptions.** The local-average-treatment-effect interpretation requires an exclusion restriction, and reading later-use coefficients as end-of-term change assumes ratings would not otherwise have moved.

## Citation

Wang, D. J., Modi Jain, N., Burbano, V., Guzman, J., Keum, D., Kim, S., Kogut, B., & Wright, N. (2026). [How assigned AI use before class shapes active student engagement in class](https://arxiv.org/abs/2610.10463). *arXiv preprint arXiv:2610.10463*.
