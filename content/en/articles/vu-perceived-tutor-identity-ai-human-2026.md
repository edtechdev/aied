---
title: "\"Can a Robot Really Care About Me?\" How Perceiving a Tutor as Human or AI Affects Computer Science Students' Attitudes and Experiences"
created: "2026-11-17T09:40:00-05:00"
updated: "2026-11-17T09:40:00-05:00"
type: article
authors: ["Vu, T.", "Shi, W.", "Hsu, S."]
published: "2026"
venue: "arXiv preprint 2611.20367"
source_url: https://arxiv.org/abs/2611.20367
evidence_context: educational
confidence: medium
pedagogy: [self-determination-theory, student-ai-interaction, help-seeking, motivation]
technology: [conversational-ai, intelligent-tutoring]
assessment: [feedback, ai-feedback-quality]
methods: [mixed-methods-research, quantitative-research]
ethics: [trust]
research_method: [experiment, interviews]
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, researchers]
page_kind: [evaluation]
sources: ['raw/papers/vu-perceived-tutor-identity-ai-human-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

> **Synthesis:** Twenty-seven introductory [[cs-education|computer science]] students each worked through two text-based Python tutoring sessions and were told one tutor was human and the other [[conversational-ai|AI]]. Both were the same person following one protocol. Participants rated both tutors favorably and found the [[feedback]] similarly instructive: competence need satisfaction was identical at a median of 10.0 out of 12, and participants described the two sessions as nearly interchangeable. The human-labeled tutor scored higher on relatedness (median 19.0 against 16.0 out of 24, p = .0380, r = .40) and enjoyment (11.0 against 10.0, p = .0482), but no survey comparison survived Bonferroni correction at α = .0125. Eleven of 27 participants said outright that they doubted an AI could care about them, nine described talking to the human more casually, and eight addressed the AI in shorter, more explicit requests. The study's argument is that [[self-determination-theory|psychological need]] support is a separate design target from instructional quality.

## Key Findings

- **Feedback quality did not split along tutor identity.** Median competence need satisfaction was 10.0 out of 12 under both labels (p = .8048), and 13 participants said the two sessions felt indistinguishable.
- **Relatedness favored the human label, narrowly.** Median relatedness was 19.0 out of 24 for the human against 16.0 for the AI (p = .0380, r = .40), driven by "The tutor cares about me."
- **No survey difference survived correction.** Perceived autonomy support (29.0 against 27.0, p = .0787) and enjoyment (11.0 against 10.0, p = .0482) also leaned human, but none cleared the Bonferroni threshold of α = .0125.
- **Care was the sticking point.** Eleven of 27 participants questioned whether an AI could genuinely care about them, and several read its praise, humor, and emoji as artificial rather than supportive.
- **Human presence cut both ways.** Five participants reported more pressure or anxiety with the human tutor, while four said the human motivated them more; the same social presence reassured some and inhibited others.
- **Communication tracked the believed partner.** Nine participants used more casual language with the human tutor and eight used shorter, more explicit requests with the AI, while 14 reported no difference at all.

## One tutor behind both identities

The design isolates perceived identity from instructional behavior. Participants were recruited from the two introductory programming courses at one institution in weeks 7 to 10 of a ten-week quarter: 14 from CS1 and 13 from CS2. Each completed two 30-minute sessions in Discord text chat on Explain-in-Plain-English problems, which ask for a plain-language account of a short code block. Participants were told they were helping test a new custom [[conversational-ai|AI tutor]], and the response delay in the AI condition was explained as deliberate reflection time — plausible because the exchange resembles [[intelligent-tutoring]] less than open dialogue: the tutor answers what a student writes.

A single researcher, an experienced instructor and grader of these problems, played both roles from a semi-structured protocol: minimal hints before explicit guidance, student choice about the next problem's difficulty, and acknowledgment of effort — the [[scaffolding]] and autonomy-support moves the literature recommends. From the eleventh participant onward both conditions ran through one account labeled "Tutor," which blinded the tutor to condition. A coded comparison of supportive and informal language before and after found no significant difference (p = .787).

## What the ratings showed

After each session participants completed a questionnaire covering the three needs in [[self-determination-theory|Self-Determination Theory]] plus enjoyment: a six-item Learning Climate Questionnaire for autonomy support, competence and relatedness items adapted from the Basic Psychological Need Satisfaction Scale, and two satisfaction items. All four composites were rated favorably — medians fell between 5 and 6 on a 0 to 6 metric — so the comparison concerns degree, not like versus dislike.

Wilcoxon signed-rank tests found higher medians under the human label for autonomy support, relatedness, and enjoyment, and equal medians for competence. None of the four differences reached significance once Bonferroni correction set the threshold at α = .0125. Item-level plots locate what movement there was: "I feel understood by the tutor" carried most of the autonomy gap, and "I really liked the tutor" with "The tutor cares about me" carried the relatedness gap. The authors read that pattern as participants interpreting "understood" in interpersonal terms, which an [[conversational-ai|AI]] is presumed less capable of.

## Care, accountability, and pressure

Nineteen participants described a positive impression of the human tutor and 20 of the AI tutor; 13 said the delivery and style felt similar. What diverged was social meaning. Eleven questioned whether an AI could provide genuine connection, one asking directly "can a robot really care about me?" and another preferring a person who "has got my back" to a bot "simulating" the same support. Warmth read as scripted: one participant asked why an AI would say "haha" when it is not laughing.

Human presence also created accountability that some students wanted and others avoided. Five reported more pressure or anxiety with the human tutor, including reluctance to ask questions or make mistakes, while others said knowing a person was there made them try harder — a [[motivation]] effect that ran through social presence rather than through any difference in the hints. Even errors were excused differently: one participant waved off an AI grading mistake as "just AI doesn't remember a lot," another forgave the human with "we humans make mistakes." Both excuses turn on the same [[trust]] question, answered by different beliefs about the tutor.

## Talking to a tutor you believe is a machine

Fourteen participants reported no change in how they handled the [[student-ai-interaction|interaction]]. The rest split into recognizable strategies. Nine moved toward social talk with the human tutor — slang, jokes, treating the exchange as conversation — and one opened with "I'm ready for my first problem o captain my captain," then found the flat scripted reply frustrating. Eight took the opposite route with the AI, compressing requests into short, explicit, unambiguously worded messages.

Seven participants assumed the human would infer context and nuance, so they elaborated less for the human and more for the AI. Three assumed the reverse and organized their own thinking before writing to the human. The authors connect the second pattern to [[cognitive-offloading|offloading]]: if students learn that a system will assemble meaning from a fragment, they stop doing the formulation that makes a question useful, and that formulation is itself where [[help-seeking]] becomes learning rather than answer-getting.

## What this means for practice

- **Instructors:** Do not treat a warm AI persona as a substitute for relatedness. If belonging is the goal, budget human contact for it and use the AI tutor for the lower-stakes practice where students say they feel less judged.
- **Instructors:** Ask students to write complete questions to an AI tutor rather than terse prompts. The study's participants shortened and flattened their messages for the AI, which removes exactly the reasoning that makes help productive.
- **Instructional designers:** Build escalation to a human into the workflow and name it in the interface, since the students who wanted accountability wanted to know a person was reachable, not to receive more encouragement from a bot.
- **Researchers:** Measure need satisfaction alongside perceived feedback quality. The two moved independently here, and a study that reported only feedback ratings would have concluded the tutors were equivalent.

## Limitations

- No manipulation check was run, and several participants described the "human" tutor as scripted or AI-like, which would compress the difference between conditions.
- The sample is 27 students from two courses at one institution, and the session was a single brief first encounter with an unfamiliar tutor rather than a term-long relationship.
- The tutoring covered Explain-in-Plain-English problems, where correctness can be judged objectively; feedback on essays or historical argument would raise different [[trust]] questions.
- The researcher who played the tutor also conducted the qualitative coding, and interview questions asked participants to explain differences they had just rated.
- All outcomes are [[self-report-measures|self-reported]] perceptions, with no measure of learning, transfer, or subsequent help-seeking behavior.

## Citation

Vu, T., Shi, W., & Hsu, S. (2026). [*"Can a Robot Really Care About Me?" How Perceiving a Tutor as Human or AI Affects Computer Science Students' Attitudes and Experiences*](https://arxiv.org/abs/2611.20367). arXiv preprint 2611.20367.
