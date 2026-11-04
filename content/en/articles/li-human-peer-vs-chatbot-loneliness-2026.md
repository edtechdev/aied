---
title: "Is a Random Human Peer Better than a Highly Supportive Chatbot in Reducing Loneliness over Time?"
created: "2026-11-02T04:10:00-05:00"
updated: "2026-11-02T04:10:00-05:00"
type: article
page_kind: [evaluation]
research_method: [experiment]
foundations: [human-ai-collaboration]
pedagogy: [well-being, student-support-and-success]
technology: [conversational-ai]
methods: [rct]
level: [higher ed, undergraduate]
audience: [researchers, administrators, instructors]
sources: ['raw/papers/li-human-peer-vs-chatbot-loneliness-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
---

> **Synthesis:** Li, Folk, Singh, Ungar and Dunn ran a preregistered two-week experiment with 296 first-year university students (275 analyzed) during their first semester, comparing three daily text-based activities on Discord: conversations with a chatbot designed around relationship-science principles of active listening and validation, conversations with a randomly assigned human peer, and a one-sentence daily journal as an active control. The human peer reduced [[well-being|loneliness]] and the chatbot did not: post-study loneliness was significantly lower after texting a human (M = 1.85) than after the journal (M = 2.00) or the chatbot (M = 1.98), and the chatbot condition was statistically indistinguishable from [[reflection|journaling]]. The authors' explanation is not that the bot lacked empathy — a GPT-rated content analysis found the chatbot expressed *more* empathy than either humans or participants — but that [[social-emotional-learning|connection]] rests on reciprocity: participants expressed less empathy to the bot, and the design that simulated care could not supply the mutual responsiveness that makes support feel chosen. For institutions considering [[conversational-ai|chatbots]] as scalable [[student-support-and-success|student support]], the study sets a control-condition bar that most claims about AI companionship have not yet cleared.

## The Design

Participants were first-year students (M age = 18; 72% female) recruited through a Canadian university's subject pool and advertisements in first-year classes and residences, chosen because the first semester is a period of heightened loneliness. After a pre-study survey they were randomized to one of three conditions: daily text conversations with "Sam," a custom [[generative-ai|ChatGPT]]-4o mini chatbot with a memory function, prompted to "serve as a friendly, positive, and supportive AI friend"; daily text conversations with another first-year student, with participants paired two per session; or a one-sentence daily journal about their day. Everyone used private Discord chatrooms, was asked to interact and complete a short survey each day for 14 consecutive days, and received a 9 PM reminder only if they had not yet interacted. The final sample completed 3703 daily surveys: 65 in the control condition, 75 with the chatbot, and 135 in the human condition, the larger figure reflecting the dyadic design.

Engagement was real rather than nominal in both conversation arms. Participants sent 8 to 10 messages per day in each (AI M = 8.95, human M = 10.23, difference not significant, p = .244) and wrote slightly *more* words per day to the bot (M = 81.61) than to the human (M = 65.45, p < .001, d = 0.17). Loneliness was measured with the 20-item UCLA Loneliness Scale before and after (α = .92 and .93), and baseline loneliness did not differ across conditions (p = .639). A sensitivity analysis on the analyzed sample of 275 gave 80% power to detect effects as small as partial η² = 0.04, equivalent to d = 0.40.

## What the Chatbot Did Not Do

The preregistered loneliness analysis found an overall condition effect, χ²(2) = 10.30, p = .006, partial η² = 0.04. The effect was carried entirely by the human arm. Human versus control was significant (b = −0.14, t(222) = −2.71, p = .007, d = −0.30) and human versus chatbot was significant (b = −0.13, t(210) = −2.57, p = .011, d = −0.11), while chatbot versus control was null (b = −0.01, t(270) = −0.23, p = .821, d = 0.09). Within-condition change from pre- to post-study tells the same story: the human condition fell from 2.04 to 1.86 (mean difference −0.18, t(134) = −5.47, p < .001, d = −0.29), the chatbot condition went from 1.99 to 1.95 with no significant change (p = .283), and the journal control did not move (p = .349).

The study also measured [[student-experience|state social connection]] daily, and found no significant differences across conditions — a null the authors treat as an instrument problem rather than a disconfirmation, since the single item asked participants to recall at the end of the day how connected they had felt, when other studies captured the judgment immediately after the interaction.

## What the Human Peer Did That the Bot Could Not

The behavioral outcomes separate the arms more sharply than the self-reports. When offered a further week after the study ended, 33% of the human condition continued interacting with their partner, against 14% who kept chatting with Sam and 3% who kept journaling (χ²(2, N = 231) = 30.27, p < .001, Cramér's V = 0.26), and 37% of the human condition exchanged contact information with their partner.

The mechanism the authors argue for is not warmth but reciprocity. A GPT-rated content analysis of 2,045 conversations — validated against two human coders on a 100-conversation subset, where GPT's agreement with the average human rating (weighted κ = 0.67, ICC = 0.63) exceeded the agreement between the two humans (weighted κ = 0.26, ICC = 0.26) — found that the chatbot expressed the *highest* level of empathy of any party (M = 3.63 on a 1–5 scale, p < .001) and the highest engagement. What differed was the students' own contribution: they expressed less empathy to the bot (M = 2.68) than to another person (M = 2.83, b = −0.15, p = .014) and engaged less with it (M = 3.14) than with a human (M = 3.85, b = −0.73, p < .001). Closeness to the partner did not differ across conditions (p = .779), and participants reported feeling more heard by a human only before Bonferroni correction (p = .047).

The authors read this as evidence that receiving care is not the whole of it. A thoughtful message from a fellow student during midterms signals that the sender chose to spend scarce attention on you; the same words from an always-available, infinitely energetic bot carry no such cost, and [[trust|relationship science]] treats intimacy as sustained by mutual responsiveness rather than one-directional support. A simulation of empathy does not satisfy a need whose satisfaction depends on the partner's choice to give it.

## What this means for practice

- **Administrators.** Treat a chatbot as an untested intervention until it beats an active control. The comparison that matters here is not "better than nothing" but "better than a one-line daily journal," and against that bar the supportive bot produced no measurable improvement in [[well-being|loneliness]].
- **Student support staff.** Fund peer connection before companion apps: a randomly assigned first-year peer outperformed a purpose-built, relationship-science-informed chatbot on the preregistered outcome, on continued engagement, and on whether students kept in touch afterwards.
- **Instructors.** Do not read students' willingness to talk to a bot as evidence that the talking helped. Participants wrote *more* words to the chatbot than to a human while showing no loneliness benefit, so engagement volume is a bad proxy for the outcome the support was for.
- **Researchers.** Ask about connection immediately after an interaction rather than at the end of the day. This study's daily connection item was retrospective and showed nothing while its preregistered loneliness measure showed a real effect, which the authors attribute to the measurement, not to the construct.

## Limitations

- Human-condition participants met their conversation partner in person during the initial lab visit, so the human arm included a face-to-face encounter the chatbot arm could not have; the authors name this explicitly when discussing generalization.
- The comparison is a *randomly assigned* peer, not a friend, so the result bounds what a stranger can do and does not show that friendship per se is the mechanism.
- Students in one Canadian university's first semester, 72% female and with a mean age of 18, during a transition the authors chose for its loneliness risk; other populations and other life transitions are not tested.
- The chatbot was a specific system (ChatGPT-4o mini, custom prompt, memory function) fielded in 2025-style conditions, so the null belongs to that vintage as much as to the design.
- The study was powered for effects around d = 0.40 and was explicitly underpowered for mediation, so the reciprocity explanation the authors favor is an interpretation of the pattern rather than a tested pathway.
- Loneliness and connection are [[self-report-measures|self-reported]]; nothing here measures whether students' social networks or face-to-face contact changed.

## Citation

Li, R.-N., Folk, D., Singh, A., Ungar, L., & Dunn, E. (2026). [*Is a random human peer better than a highly supportive chatbot in reducing loneliness over time?*](https://doi.org/10.1016/j.jesp.2026.104911). Journal of Experimental Social Psychology, 125, 104911.
