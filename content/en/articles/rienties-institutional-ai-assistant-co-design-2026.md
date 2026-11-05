---
title: "A five-study design-based research approach to co-design an institutional AI digital assistant"
created: "2026-11-05T15:30:00-05:00"
updated: "2026-11-05T15:30:00-05:00"
type: article
sources: ['raw/papers/rienties-institutional-ai-assistant-co-design-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [design and evaluation study]
audience: [researchers, instructors, administrators]
level: [higher ed]
technology: [generative-ai]
foundations: [academic-integrity]
methods: [design-based-research, mixed-methods-research, qualitative-research]
institutions: [governance]
ethics: [privacy]
pedagogy: [online-teaching-and-learning, student-support-and-success]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Rienties and colleagues report a 13-month design-based research program at The Open University in the UK that co-designed an institutional AI digital assistant (i-AIDA) with 315 students and 20 staff across five consecutive studies. Their central finding is that round-the-clock, immediate feedback tied to the learner's own curriculum mattered more than conversational breadth: in beta testing, students rated flashcards and quizzes above open chat. Attitudes shifted significantly after hands-on use (d = .81), and 16 of 18 beta testers (89%) wanted the assistant for their studies. Around 10–15% of students resisted on values grounds rather than usability grounds. The team distils eight design principles and argues that institutional ownership answers privacy and [[academic-integrity]] worries only when data governance is communicated transparently.

## Key Findings

1. **Five studies, one artifact.** Between December 2023 and January 2025 the team ran five consecutive studies with 315 students and 20 staff, moving from interviews and surveys to alpha testing and a beta test of version 1.1.
2. **Availability was the most agreed reason for preferring an institutional tool.** In Phase 2 (n = 96), 73% agreed that an i-AIDA would be available round-the-clock for immediate feedback in their academic setting (M = 3.85, SD = 1.15), ahead of ease of use and integration (71%).
3. **Direct experience moved attitudes.** Before the beta test 9 of 18 students wanted an i-AIDA, 4 were neutral and 5 disagreed; afterwards 16 of 18 (89%) agreed it would be useful for their studies (t = 3.482, p < .01, d = .81).
4. **Structured study features outperformed chat.** Of 164 feature comments in the beta test, flashcards drew 21 positive and 2 negative comments, quizzes 17 positive and 8 negative, and chat 16 positive and none negative.
5. **Students compared it favourably with ChatGPT.** On a 1–10 scale against other generative tools, i-AIDA averaged 7.58 (SD = 2.43), with 13 of 18 participants calling it more useful, 1 slightly more useful, 1 similar and 3 inferior.
6. **Resistance was values-based, not just usability-based.** Across the studies roughly 10–15% of students objected to AI-assisted learning as a dilution of what counts as legitimate study, using words such as "disgraceful" and "dumbing down".

## From three assumptions to eight principles

The study follows the design-based research cycle of focus, understand, define, conceive, build and test, beginning from assumptions rather than fixed principles. An interdisciplinary team of 15 wrote three before collecting data: that embedding an i-AIDA in distance learning would beat public tools, that institutional ownership would address trust and privacy concerns, and that always-available access would improve the student experience.

Phase 1 interviewed ten students after showing them a mock-up with automatic feedback, AI-generated flashcards and a chatbot. Nine thought an i-AIDA would be useful for their studies; six of eight post-survey respondents thought it would be easy to use and five of eight would use it frequently, while two worried their data would be shared or used to train a public model. Four provisional principles followed: usefulness, preference for an in-house solution, ease of use, and privacy.

Phase 2 surveyed 96 students (5% response rate; average age 52.30, SD = 16.61); 58.3% wanted an i-AIDA. Two principles were added — 24/7 availability, and tailoring to academic experience using institution-owned material — and the privacy principle was sharpened to require explicit treatment of academic integrity. Phase 3a put an alpha build before 211 students (11% response rate; average age 45.84, SD = 16.37): 57.3% wanted it, but 8% were strongly negative and around 40 wrote hostile free-text responses. A cluster analysis separated older, highly educated sceptics with little generative AI experience, a middle group with ethical worries, and a larger group of younger, less formally educated heavy AI users who were enthusiastic.

Phase 3b tested the alpha with 20 staff — 7 PhD students and 13 staff, average age 53 (SD = 10.31) — in think-aloud sessions averaging 43 minutes and 56 seconds (SD = 8 min 59 s). All 20 were comfortable with i-AIDA in quizzes, feedback and answer discussion. The sessions exposed a dense layout, chat history that vanished on navigation, two competing "Next" buttons, and feedback that read "very mechanically, like a machine", prompting an accessibility principle.

## What students asked for, and what they worried about

Preference data are consistent across phases. In Phase 2 the six reasons for preferring an institutional assistant ranked: 24/7 availability and immediate feedback (73% agree), ease of use and integration into the module website (71%), personalization (70%), accuracy anchored in institutional content (67%), language and accessibility (65%) and future-oriented guidance (65%).

Concerns were equally stable. Academic integrity drew 80% agreement in Phase 2 (M = 4.16, SD = 1.08), operational challenges 77%, ethical and social implications 76%, the future of education 75% and data privacy and use 71%. Students wanted to know which data would be captured, who would hold it and whether third-party services might harvest it. One asked for "a continual discussion about not just how the [university] will or will not use the data, but also if and how any services you use might harvest the data". Institutional ownership, on this reading, is a claim about governance rather than branding: the walled garden only helps if students can see the walls.

The build reflects the point: retrieval-augmented generation over institution-owned course content, using Microsoft Azure OpenAI text-embedding-ada-002 for ingestion and GPT4o-mini for generation, embedded in the virtual learning environment, with answers signposted back to module materials. That is what participants meant when they said the tool was "more focussed on course material than something like ChatGPT".

## Beta testing: features, tone and the limits of chat

Phase 4 gave 18 students a supervised beta environment and four core tasks — watching an introduction video, chatting, taking a quiz and using flashcards — plus optional dynamic text and role features. All 18 completed the four tasks, 14 explored the dynamic text, and sessions averaged 44 minutes and 16 seconds (SD = 6 min 23 s).

The comment distribution is the most useful design evidence here: of 343 coded comments, 195 (56.9%) concerned the features themselves, 48 engagement and motivation and 26 technical performance, while sentiment ran 169 positive, 135 neutral and 39 negative. Negatives cluster around streaming text — several students wanted the full answer immediately — and around color contrast and dense layouts.

Two principles came out of this phase. The accessibility principle was restated, and an eighth was added: engage students directly in co-design by giving them a functioning system to interact with, because direct experience shifts attitudes and surfaces issues that hypothetical scenarios do not. The authors are careful about what this shows. Low-stakes exposure reduced some skepticism, including among students who arrived hostile, but they refuse to read that as evidence that all resistance can or should be overcome by exposure. Resistance, they argue, is educationally meaningful data about what students believe learning is for.

They are equally careful about the comparative claim: with no experimental comparison against a public assistant, the advantage students report is a perception of curriculum alignment and governance, not a measured learning gain.

## What this means for practice

- **Instructional designers.** Build structured, assessment-oriented features — quizzes generated from course content, flashcards, formative feedback — rather than assuming chat is the product; here those features drew the most positive comment and the least hostility.
- **Instructors and academic staff.** Position the assistant as complementary to human support and say so explicitly, since the same students who valued 24/7 availability worried about losing tutor relationships and about being "dumbed down".
- **Institutional decision-makers.** Treat data governance as a precondition rather than a feature: publish what is ingested, where it is held and what is excluded from training, and pilot with volunteer cohorts before scaling, because early consultation did not surface the problems that appeared once people used the system.

## Limitations

- The work took place in one large UK distance-learning institution, with policies, infrastructure and demographics that may not transfer to campus-based or smaller providers.
- The first three phases rely mainly on self-reported perceptions; process evidence from observed use is concentrated in the last two, resting on 20 staff and 18 students.
- There is no experimental comparison with a public assistant and no measurement of learning outcomes, retention or performance.
- Beta testers were a purposive sample of 18 from 27 volunteers, with somewhat more prior generative AI experience than the wider cohort (20.83% versus 10.92%).

## Citation

Rienties, B., Bektik, D., Coughlan, E., Coughlan, T., Domingue, J., Edwards, C., Ekuban, A., Herodotou, C., Kwarteng, J., Sanders, C., Tessarolo, F., & Ullmann, T. (2026). [*A five-study design-based research approach to co-design an institutional AI digital assistant*](https://doi.org/10.1016/j.compedu.2026.105746). *Computers & Education*, *256*, 105746.
