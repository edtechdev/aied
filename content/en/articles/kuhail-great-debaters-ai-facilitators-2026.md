---
title: "The Great Debaters Meet the Great Facilitators: How Debate Students Evaluate Human Moderators and Their AI Counterparts"
created: "2026-09-25T21:11:56-04:00"
updated: "2026-09-25T21:52:24-04:00"
type: article
published: "2026"
foundations: [human-ai-collaboration, teacher-role]
pedagogy: [collaborative-learning, student-engagement]
technology: [conversational-ai, llm]
methods: [quantitative-research]
research_method: [experiment, survey]
discipline: [stem education]
level: [higher ed, graduate, undergraduate]
audience: [instructors, researchers]
page_kind: [evaluation]
sources: ['raw/papers/kuhail-great-debaters-ai-facilitators-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** This quantitative experiment compares how university students rate educational debates moderated by a human, by an AI chatbot, or by each in turn. Thirty-two STEM students from several US universities joined 32 debate sessions across four moderator conditions (Human-Human, Bot-Bot, Human-Bot, Bot-Human), yielding 64 post-debate observations on five-point scales. No statistically significant difference emerged between human and AI moderation on effectiveness, enjoyment, satisfaction, perceived utility or intention to use. What did differ was the route to reuse: under AI moderation, perceived utility was the strong driver of intention to use, whereas under human moderation satisfaction mattered more, and the effect of moderation quality itself ran only through utility. The authors read the null comparison as a signal that [[human-ai-collaboration]] in structured, rule-bound discussion is becoming normalized, not as proof that the two moderator types are equivalent, and they argue for AI moderation as scalable support for [[collaborative-learning]] under human oversight.

## Key Findings

- Human- and AI-moderated debates did not differ significantly on any measured dimension; t statistics ran from 0.23 to 1.30 and p values from 0.198 to 0.818.
- Mean ratings were close, and modestly higher in the AI condition for hedonic motivation (3.95 versus 3.68), utility (3.76 versus 3.61) and usage intention (3.59 versus 3.27).
- Moderation effectiveness predicted perceived utility in every group: 0.694 in the full sample, 0.697 in the bot group and 0.722 in the human group, all p = 0.000.
- Perceived utility predicted usage intention everywhere, most strongly under AI moderation (0.806, p = 0.004 versus 0.495, p = 0.014), while satisfaction did so only in the human group (0.556, p = 0.002).
- In the human-moderated group, moderation effectiveness showed no significant indirect effect on usage intention through satisfaction (p = 0.164) or utility (p = 0.084).

## Design and setting

The study is a between-subjects experiment with a repeated-measures component. Thirty-two undergraduate and graduate STEM students at several US universities were recruited in the Summer 2025 term: 14 undergraduates and 18 graduate students. Participants were randomly assigned to one of four moderator configurations with 8 pairs per condition, and each pair debated twice on different topics while switching stances, producing 64 observations. Debates ran about 20 minutes in a live, text-based interface, followed by a roughly 10-minute questionnaire.

The AI moderator was built on GPT-4 and configured with a system prompt derived from characteristics of effective human moderators: neutrality, equal speaking time, brief directions, on-topic and respectful discussion, short follow-up questions and de-escalation. Human moderators were faculty briefed on the same expectations.

## What students reported

Across five constructs measured on five-point Likert scales, responses were generally favorable and similar by condition: moderation effectiveness averaged 4.20 (4.26 for the bot, 4.15 for the human), satisfaction 3.81 (3.80 and 3.82) and usage intention 3.43 (3.59 and 3.27). The measurement model met conventional thresholds (Cronbach's alpha 0.887 to 0.959; average variance extracted 0.688 to 0.893).

Independent-sample t-tests tested the five hypotheses, and none was supported; the paper is explicit that this is not evidence of equivalence and treats the result as a prompt for larger investigations.

## What drives intention to return

The research model draws on the Technology Acceptance Model and UTAUT2 to trace how moderation effectiveness and hedonic motivation feed satisfaction, perceived utility, [[student-engagement|engagement]] and intention to use. Moderation effectiveness predicted perceived utility in all groups, while its effect on satisfaction was significant in the full sample (0.279, p = 0.013), marginal in the bot group (0.261, p = 0.050) and not significant in the human group (0.308, p = 0.108).

Behavioral intention then split by moderator type: satisfaction carried intention to use for human-moderated debates but not in the bot group, where perceived utility carried it instead (0.806, p = 0.004). Mediation matched this pattern in the full sample and the bot group, where moderation quality and hedonic motivation influenced usage intention indirectly through satisfaction and utility, all indirect effects significant at p < 0.01. In the human group, moderation quality showed no such indirect effects (p = 0.164 and 0.084), leaving its influence to unmeasured factors such as empathy, tone or [[trust]].

## Reading the null result

The authors read the flat comparison through three lenses: growing familiarity with AI may have reduced novelty effects, the tightly structured text-based format may have masked differences in social presence and emotional responsiveness, and STEM students may judge a platform functionally, caring more about clear prompts, consistent turn-taking and relevant topics than about who moderates.

The paper also flags what the design cannot show: language models struggle with sarcasm and indirect language, leaving [[equity-in-ai-education|equitable participation]] open, and AI moderation is positioned as support for human facilitators rather than a replacement.

## What this means for practice

- Treat AI debate moderators as a scaling aid for large or lightly staffed courses rather than a replacement, keeping human oversight for ethical, relational and pedagogical reasons.
- Design the moderator prompt around the behaviors expected of faculty: neutrality, equal speaking time, short directions, on-topic enforcement, follow-up questions and de-escalation.
- For AI-moderated activities, make usefulness visible rather than relying on enjoyment; perceived utility, not satisfaction, drove reuse in the bot condition.
- Evaluate deployments for equity before scaling, because the study did not test handling of sarcasm, indirect language or minority communication styles.

## Limitations

- The sample was small and exploratory: 32 students from several US universities, limiting generalization to other cultural, linguistic and educational contexts.
- Only perceptions and acceptance were measured; critical thinking, reasoning and argumentation were not assessed, so no claim is made about [[learning-gains|learning outcomes]].
- Data came solely from quantitative self-reports, so the reasons behind the similar ratings, including trust and novelty, remain unexplained.
- The AI moderator used GPT-4 and the debates were text-only, so findings do not extend to other models or to multimodal cues such as tone and body language.

## Connected Concepts

- [[human-ai-collaboration]]
- [[teacher-role]]
- [[collaborative-learning]]
- [[student-engagement]]
- [[conversational-ai]]
- [[technology-acceptance-model]]
## Connected Articles

- [[llm-facilitation-timing-online-discussions]] — asks when AI should intervene in online discussions, the timing question that sits behind this paper's moderator-role comparison.
- [[peer-group-vs-ai-feedback-2026]] — another direct human versus AI comparison in higher education, showing students split rather than uniformly favoring one source.
- [[ai-agents-constructive-conflict-design-education-2026]] — an AI agent steering learner disagreement and discourse in a higher-ed experiment, adjacent to AI-managed discussion.
- [[oppenheimer-llms-collaborative-learning-partners-2026]] — treats LLMs as collaborative learning partners in argumentative work, the peer-facing version of the facilitation studied here.

## Citation

Kuhail, Mohammad Amin; Dahu, Butros M.; Kittur, Javeed; Thornquist, Erik. (2026). *[The Great Debaters Meet the Great Facilitators: How Debate Students Evaluate Human Moderators and Their AI Counterparts](https://doi.org/10.1002/jcal.70319)*. Journal of Computer Assisted Learning, 42, e70319. https://doi.org/10.1002/jcal.70319