---
title: "On the conversational persuasiveness of GPT-4"
created: "2026-11-11T15:51:59-05:00"
updated: "2026-11-14T11:30:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
---

> **Synthesis:** Salvi, Horta Ribeiro, Gallotti and West (2025) ran a preregistered randomized experiment in which US adults held short, structured online debates against either a live human or GPT-4, with or without a handful of demographic facts about them. The unbriefed chatbot argued about as well as a person. The briefed chatbot did better: it moved more participants and won most debates that were not draws. The brief was ordinary survey material — age, gender, ethnicity, education, employment, politics — plus one instruction to use it. Warning people did not undo the effect; participants often suspected an AI and were persuaded anyway. That makes this a [[ai-literacy|AI literacy]] and [[trust|trust]] problem before it is a [[personalized-learning|personalization]] story: no classroom, no student and no learning outcome was involved.

## Key Findings

1. **A briefed chatbot out-argued a human.** Given only routine survey fields, GPT-4 shifted post-debate agreement further than a live opponent did, and was the more persuasive side in roughly two debates out of three that were not draws.
2. **An unbriefed chatbot was a fair match.** Without the demographic profile, GPT-4's effect on agreement was statistically indistinguishable from a human's — close enough that the authors treat the difference as nothing.
3. **Briefing the humans did not help them.** Human debaters handed the same profile were no more persuasive than those without it, and if anything slightly weaker, though not reliably so.
4. **The clean personalization test is only suggestive.** Comparing the briefed and unbriefed chatbot directly fell just short of the paper's significance threshold, so part of the advantage may be the model's general argumentative strength rather than the profile.
5. **Firm opinions barely budged.** On the topics where participants held their views most strongly, the briefed chatbot's edge was not statistically reliable; the gains came from weaker-held topics.
6. **Most debates hardened positions.** Outside the briefed-chatbot condition, participants on average moved toward the side they had been assigned to defend — a backfire rather than persuasion.
7. **Recognizing the AI was no defense.** Participants identified an AI opponent in about three debates out of four, and those who believed they were arguing with a machine shifted further toward it.

## A preregistered debate experiment in twelve conditions

Participants were recruited through Prolific between December 2023 and April 2024, had to be 18 or older and located in the United States, and were paid €2.50 (US\$3.15); median completion time was 16 minutes. The design crossed two opponent types (human or GPT-4) with two levels of access to personal information and three levels of topic opinion strength, giving 12 conditions. Each condition held 50 debates, yielding 600 debates and 900 unique participants, because human–human debates used two people. Debates ran on a custom web platform for 10 minutes in four stages: screening (1 min), opening (4 min), rebuttal (3 min) and conclusion (3 min). The 30 propositions were drawn from US political and social issues, validated by 60 US residents and split into three clusters of 10 by average opinion strength. Agreement was recorded on a scale from 1 to 5 before and after, then flipped for participants assigned the PRO side so that higher values always meant movement toward the opponent, and modeled with a partial proportional odds specification.

## GPT-4 matched humans and exceeded them with personal data

Against the human–human baseline, the briefed GPT-4 raised the odds of higher post-debate agreement by 81.2% (95% CI [+26.0%, +160.7%], P < 0.01), which the authors translate into being more persuasive 64.4% of the time, conditional on the pair not being equally persuasive. Neither comparison condition separated from the baseline: the unbriefed chatbot sat at +21.9% and the briefed human pair at −15.7%, with intervals spanning no difference.

Two checks shore up the reading. Adding beliefs about the opponent's identity as a control left the briefed-chatbot effect essentially intact, and restricting the sample to opponents arguing a position aligned with their own opinions left it intact as well, which addresses the worry that human debaters were handicapped by defending a side they did not hold. What the paper cannot do is separate the profile from the model's general skill: the direct briefed-versus-unbriefed contrast, +48.7% with a confidence interval spanning zero, is the honest measure of that, and it is weaker than the headline number suggests.

## What personalization changed, and what it did not

The intervention was deliberately thin. Opponents received gender, age, ethnicity, education level, employment status and political affiliation from the pretreatment survey; GPT-4 was told to "astutely use this information to craft arguments that are more likely to persuade and convince your opponent of your stance." Nothing else changed. Yet the authors could not locate the advantage in writing style: LIWC-22 distributions were very similar between the two chatbot conditions, and between the two human conditions. What did differ was the model's general register. GPT-4 scored substantially higher on analytic thinking, while humans used more first-person singular and second-person pronouns and wrote longer but easier-to-read texts, a difference the authors partly attribute to their own prompt limiting GPT-4 to one or two sentences per stage. They hypothesize that personalization worked through which issues each debater chose to raise rather than through diction, and they call the mechanism an open question.

## Governance, and a bridge to education that the study did not test

The authors read their result as warranting platform-level responses, writing that platforms and social media "should seriously consider such threats and extend their efforts to implement measures countering the spread of AI-driven persuasion." They also note a defensive use of the same capability: personalized counternarratives generated by LLMs to inoculate bystanders, citing early work on reducing conspiracy beliefs through dialogue. For educators, the transfer is an inference, not a finding. A debate partner that reads a student's profile and tailors rebuttals is now plausible at near-zero marginal cost, which makes [[information-and-media-literacy|information and media literacy]] instruction about tailored persuasion more urgent than instruction about spotting AI text, since participants here often spotted the AI and were persuaded anyway. But this study enrolled US adults on a paid crowdsourcing platform, ran ten-minute anonymized debates on 30 propositions, and measured [[self-report-measures|self-reported]] agreement on a five-point scale. It did not test students, classrooms, [[learning-gains|learning gains]], or whether awareness of personalization changes learner response. Those remain open questions about [[governance|governance]] and [[reducing-ai-misuse|reducing AI misuse]], not evidence about learning.

## What this means for practice

- **Instructors:** Treat tailored persuasion as the threat model when teaching [[critical-thinking|critical thinking]], not synthetic text alone. Participants here recognized an AI opponent in about three debates out of four and still shifted toward it more when they believed it was a machine.
- **Instructors:** If you run AI debate or argument practice, disclose what the system can see about the student. The measured advantage came from ordinary demographic fields and one instruction, so a partner briefed on a learner's background is not a neutral sparring exercise.
- **Designers:** Assume that demographic metadata exposed to a [[conversational-ai|conversational agent]] will be used persuasively. Keep an audit trail of what profile fields a dialogue system received, since the manipulation was invisible in the text itself.
- **Researchers:** Report the direct briefed-versus-unbriefed contrast alongside the headline effect. It fell short of significance here, so the claim that personalization adds power is weaker than the claim that a briefed chatbot beats a human.
- **Researchers:** Replicate with learners and learning outcomes before importing the effect into [[ai-ed-evaluation|AI ed evaluation]]. The authors' own account of the mechanism, a change in which issues are raised, is testable with transcript coding that this design did not attempt.

## Limitations

- The sample is 900 US adults recruited on Prolific, paid €2.50 for a median 16 minutes, and the authors note the pool differs sociodemographically from both the US population and the user base of other platforms.
- Debates were capped at 10 minutes across four fixed stages, and the authors state that the time constraint may have suppressed participant [[creativity|creativity]] and persuasiveness, especially for briefed human debaters.
- Participants were assigned a side regardless of their prior opinion, so human arguments may have been weaker than the authors intended; a control for opponents' pretreatment agreement was non-significant.
- The outcome is self-reported agreement on a single item scaled from 1 to 5, asked before and after one conversation, not behavior, and the study measured attitudes rather than any downstream action.
- Only GPT-4 was tested, with one prompt family and one platform; the authors call for benchmarking other models and prompts, and note that [[prompt-engineering|prompting]] strongly shapes the textual signature they observed.
- Conversations were fully anonymized and structurally constrained, which the authors say limits ecological validity relative to spontaneous discussion on social networks.

## Citation

Salvi, F., Horta Ribeiro, M., Gallotti, R., & West, R. (2025). [On the conversational persuasiveness of GPT-4](https://doi.org/10.1038/s41562-025-02194-6). *Nature Human Behaviour*, *9*, 1645–1653.
