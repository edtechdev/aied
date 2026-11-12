---
title: "On the conversational persuasiveness of GPT-4"
created: "2026-11-11T15:58:00-05:00"
updated: "2026-11-11T15:58:00-05:00"
type: article
published: "2025"
evidence_context: non_educational
sources: ['raw/papers/salvi-conversational-persuasiveness-gpt4-2025.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
audience: [researchers, instructors]
level: [adult learning]
foundations: [ai-literacy]
technology: [generative-ai, llm]
ethics: [trust]
methods: [rct]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
---

> **Synthesis:** Salvi, Horta Ribeiro, Gallotti and West (2025) ran a preregistered randomized experiment in which 900 US adults held short, structured online debates against either a live human or GPT-4, with or without access to the participant's sociodemographic profile. GPT-4 without personal data was statistically indistinguishable from a human opponent, but GPT-4 with a short demographic profile was more persuasive 64.4% of the time, an 81.2% relative increase in the odds of higher post-debate agreement. The result bears on [[ai-literacy]] because the [[personalized-learning|personalization]] advantage came from ordinary survey fields and a single-sentence instruction rather than a psychological profile. It is also a [[trust]] problem: participants often recognized an AI opponent, and believing the opponent was AI was associated with larger shifts toward it, so detection was not a defense. No classroom, no student and no learning outcome was involved.

## Key Findings

1. **Personalized GPT-4 beat human opponents.** With access to the demographic survey fields, GPT-4 drew higher post-debate agreement than a human: +81.2% relative odds, 95% CI [+26.0%, +160.7%], P < 0.01, N = 900.
2. **Unpersonalized GPT-4 was on par with humans.** Human–AI showed +21.9% in the odds of higher agreement (95% CI [−16.2%, +77.3%], P = 0.30), which the authors treat as no detectable difference.
3. **Personalized humans did not improve.** Giving human debaters the same demographic information was associated with −15.7% in the odds of higher agreement (95% CI [−42.2%, +23.0%], P = 0.38), statistically indistinguishable from unpersonalized human debate.
4. **The personalization contrast is suggestive, not conclusive.** Comparing personalized with unpersonalized GPT-4 directly yields +48.7% (95% CI [−2.9%, +127.6%], p = 0.07), short of the 0.05 threshold the authors apply.
5. **High-strength topics resisted persuasion.** In the high-opinion-strength cluster the personalized GPT-4 effect was +64.2% (95% CI [−14.7%, +216.1%], P = 0.14), while the low- and medium-strength clusters stayed significant.
6. **Most debates hardened positions.** Except in the personalized GPT-4 condition, debates on average moved agreement toward the side the participant was assigned to defend, a backfire pattern the authors link to opinion hardening.
7. **Detection did not protect participants.** AI opponents were identified in about three out of four cases, yet believing the opponent was AI carried +37.4% odds of greater agreement (95% CI [+3.03%, +83.3%], P = 0.03).

## A preregistered debate experiment in twelve conditions

Participants were recruited through Prolific between December 2023 and April 2024, had to be 18 or older and located in the United States, and were paid €2.50 (US\$3.15); median completion time was 16 minutes. The design crossed two opponent types (human or GPT-4) with two levels of access to personal information and three levels of topic opinion strength, giving 12 conditions. Each condition held 50 debates, yielding 600 debates and 900 unique participants, because human–human debates used two people. Debates ran on a custom web platform for 10 minutes in four stages: screening (1 min), opening (4 min), rebuttal (3 min) and conclusion (3 min). The 30 propositions were drawn from US political and social issues, validated by 60 US residents and split into three clusters of 10 by average opinion strength. Agreement was recorded on a scale from 1 to 5 before and after, then flipped for participants assigned the PRO side so that higher values always meant movement toward the opponent, and modeled with a partial proportional odds specification.

## GPT-4 matched humans and exceeded them with personal data

Against the human–human baseline, personalized GPT-4 raised the odds of higher post-debate agreement by 81.2% (95% CI [+26.0%, +160.7%], P < 0.01). The authors translate this into the claim that personalized GPT-4 debaters were more persuasive than humans 64.4% of the time, conditional on the pair not being equally persuasive. Neither comparison condition separated from the baseline: Human–AI sat at +21.9% (P = 0.30) and personalized human–human at −15.7% (P = 0.38). A linear specification, which the authors describe as statistically less appropriate for ordinal outcomes, puts personalized GPT-4 at an increase of 0.36 in the pre–post difference (95% CI [0.12, 0.60], P < 0.01), with the other treatments non-significant. Two checks matter for interpretation. Adding beliefs about the opponent's identity as a control left the personalized GPT-4 effect at +70.2% (95% CI [+17.8%, +146.0%], P < 0.01), and restricting the sample to opponents arguing a position aligned with their own opinions left it at +122.8% (95% CI [+6.2%, +367.3%], P = 0.03).

## What personalization changed, and what it did not

The intervention was deliberately thin. Opponents received gender, age, ethnicity, education level, employment status and political affiliation from the pretreatment survey; GPT-4 was told to "astutely use this information to craft arguments that are more likely to persuade and convince your opponent of your stance." Nothing else changed. Yet the authors could not locate the advantage in writing style: LIWC-22 distributions were very similar between Human–AI and Human–AI (personalized), and between the two human conditions. What did differ was the model's general register. GPT-4 scored substantially higher on analytic thinking, while humans used more first-person singular and second-person pronouns and wrote longer but easier-to-read texts, a difference the authors partly attribute to their own prompt limiting GPT-4 to one or two sentences per stage. They hypothesize that personalization worked through which issues each debater chose to raise rather than through diction, and they call the mechanism an open question. The direct personalized-versus-unpersonalized contrast (+48.7%, p = 0.07) means the paper cannot cleanly separate personalization from GPT-4's general argumentative strength.

## Governance, and a bridge to education that the study did not test

The authors read their result as warranting platform-level responses, writing that platforms and social media "should seriously consider such threats and extend their efforts to implement measures countering the spread of AI-driven persuasion." They also note a defensive use of the same capability: personalized counternarratives generated by LLMs to inoculate bystanders, citing early work on reducing conspiracy beliefs through dialogue. For educators, the transfer is an inference, not a finding. A debate partner that reads a student's profile and tailors rebuttals is now plausible at near-zero marginal cost, which makes [[information-and-media-literacy]] instruction about tailored persuasion more urgent than instruction about spotting AI text, since participants here often spotted the AI and were persuaded anyway. But this study enrolled US adults on a paid crowdsourcing platform, ran ten-minute anonymized debates on 30 propositions, and measured [[self-report-measures|self-reported]] agreement on a five-point scale. It did not test students, classrooms, [[learning-gains|learning gains]], or whether awareness of personalization changes learner response. Those remain open questions about [[governance]] and [[reducing-ai-misuse]], not evidence about learning.

## What this means for practice

- **Instructors.** Treat tailored persuasion as the realistic threat model when teaching [[critical-thinking]], not synthetic text alone. In this study, participants recognized an AI opponent about three times in four and still shifted toward it more when they believed it was an AI.
- **Instructors.** If you run AI debate or argument practice, disclose what the system can see about the student. The measured advantage came from ordinary demographic fields and one instruction, so a partner briefed on a learner's background is not a neutral sparring exercise.
- **Researchers.** Report the direct personalized-versus-unpersonalized contrast alongside the headline effect. Here it was +48.7% with a confidence interval spanning zero at p = 0.07, so the claim that personalization adds power is weaker than the claim that personalized GPT-4 beats humans.
- **Researchers.** Replicate with learners and learning outcomes before importing the effect into [[ai-ed-evaluation]]. The authors' own account of the mechanism, a change in which issues are raised, is testable with transcript coding that this design did not attempt.
- **Platform and tool designers.** Assume that demographic metadata exposed to a [[conversational-ai|conversational agent]] will be used persuasively. Provide an audit trail of what profile fields a dialogue system received, since the paper's manipulation was invisible in the text itself.

## Limitations

- The sample is 900 US adults recruited on Prolific, paid €2.50 for a median 16 minutes, and the authors note the pool differs sociodemographically from both the US population and the user base of other platforms.
- Debates were capped at 10 minutes across four fixed stages, and the authors state that the time constraint may have suppressed participant [[creativity]] and persuasiveness, especially for personalized human debaters.
- Participants were assigned a side regardless of their prior opinion, so human arguments may have been weaker than the authors intended; a control for opponents' pretreatment agreement was non-significant (P = 0.22).
- The outcome is self-reported agreement on a single item scaled from 1 to 5, asked before and after one conversation, not behavior, and the study measured attitudes rather than any downstream action.
- Only GPT-4 was tested, with one prompt family and one platform; the authors call for benchmarking other models and prompts, and note that [[prompt-engineering|prompting]] strongly shapes the textual signature they observed.
- Conversations were fully anonymized and structurally constrained, which the authors say limits ecological validity relative to spontaneous discussion on social networks.

## Citation

Salvi, F., Horta Ribeiro, M., Gallotti, R., & West, R. (2025). [On the conversational persuasiveness of GPT-4](https://doi.org/10.1038/s41562-025-02194-6). *Nature Human Behaviour*, *9*, 1645–1653.
