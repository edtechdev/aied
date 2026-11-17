---
title: "Beyond Bilingual: Studying Quadrilingual Code-Switching with Conversational AI"
created: "2026-11-17T09:40:00-05:00"
updated: "2026-11-17T09:40:00-05:00"
type: article
authors: ["Bush, A.", "Minnaar, M.", "Sultan, S.", "Tashin, M. T. H.", "Bhatt, A.", "Aksoy, M."]
published: "2026"
venue: "arXiv preprint 2611.21394"
source_url: https://arxiv.org/abs/2611.21394
evidence_context: educational
confidence: medium
pedagogy: [student-ai-interaction]
technology: [conversational-ai, llm]
assessment: [self-report-measures]
methods: [quantitative-research]
ethics: [multilingual-learning, equity-in-ai-education]
research_method: [user study, survey]
discipline: [language learning]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
sources: ['raw/papers/bush-quadrilingual-code-switching-conversational-ai-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

> **Synthesis:** Forty-two university students in Curaçao and Aruba, where Dutch, English, Spanish, and Papiamentu/o are all in daily use, each held two five-minute conversations with a chatbot: one about university life, one about local food and culture. The study was preregistered and the conversations were logged rather than recalled. English dominated both conversations, and two-thirds of participants named it as their preferred language for [[conversational-ai|AI]] even though it was not their language for family, friends, or university. When the topic shifted to culture, Papiamentu/o and Spanish rose from 15% to 24% of messages, a difference that reached significance only in the sessions running GPT-5.5 (2.8% to 22.4%). Participants switched between turns rather than within messages, and 89% to 97% of switches followed a new chatbot question. Self-reported comfort switching with a chatbot did not differ from the scale midpoint, but the two comfort items did not cohere, so the study cannot show that comfort with an AI matched comfort with a person.

## Key Findings

- **English carried both conversations.** Two-thirds of participants (66.7%) named English as their preferred language with AI, against 59.5% naming Dutch for university and 73.8% naming Papiamentu/o for family.
- **Topic moved language choice, unevenly.** Papiamentu/o and Spanish rose from 14.9% to 23.6% of messages overall; in GPT sessions alone the rise was 2.8% to 22.4% (pHolm = .0428), with no significant shift in Llama sessions.
- **Switching happened between turns, not inside them.** Only 1.6% to 3.2% of messages mixed languages — 13 instances in total, 12 of which paired English with another language from the repertoire.
- **New questions triggered most switches.** Between 89% and 97% of detected switches across all four conversation datasets followed a chatbot turn that introduced a new question.
- **No evidence that switching felt less comfortable with AI.** The AI-referenced comfort item averaged 2.93 against a 3.0 midpoint (p = .664), and the seven-item switching composite averaged 2.91 (p = .969).
- **Familiarity with AI predicted less switching.** Each point of self-rated AI familiarity was associated with 1.26 fewer switches (b = −1.26, p = .018) in a model explaining 24% of variance.

## Four languages, two islands, one English opener

Curaçao and Aruba make an unusually clean test case for [[multilingual-learning]] with [[llm|LLMs]]. Residents routinely use four languages whose technological support differs sharply: English and Spanish are among the best-resourced, Dutch sits one class below, and Papiamentu and Papiamento are low-resource Creoles with roughly 250,000 to 350,000 speakers and divergent written orthographies. That gradient is an [[equity-in-ai-education|equity]] problem, and it makes the Creole the interesting language in every comparison. The 42 [[higher-ed|university]] participants, 69.0% from Curaçao and 19.0% from Aruba, were recruited through seminars; a comparison sample of 20 international medical students at Avalon University, where all teaching is in English, completed the identical protocol.

Everything ran in one web application combining consent, surveys, and the chat. Both conversations opened with the same English message, and participants were told the chatbot did not know their preferred language and could answer in any language. After the first reply, the system prompt made the model detect the language of the latest message and answer entirely in it, so that switching reflected the participant rather than the model's own inconsistency.

## What participants did with their languages

Hypothesis 1 expected frequent switching and received only partial support. Switching occurred in both conversations, but medians ranged from 0 to 1.5 switches per participant. In the Llama group, 54% switched at least once in the university conversation and 42% in the culture conversation; in the GPT group, 28% and 67%.

The topic effect was clearer. In GPT sessions, Dutch or English covered 91.9% of university-topic messages and 71.9% of culture-topic messages, while Papiamentu/o or Spanish moved from 2.8% to 22.4%; both differences survived Holm correction. In Llama sessions the corresponding figures were 67.7% and 64.0% for Dutch or English, and 23.9% and 24.5% for Papiamentu/o or Spanish, with neither difference significant. The authors read the pattern as a situational switch: the unmarked code was never fixed by the conversation partner alone, because topic is part of what fixes it. The comparison sample reproduced the direction — English fell from 99.0% to 87.1% of messages when the topic turned cultural (pHolm = .004), with Urdu, Punjabi, and Spanish replacing it.

## Where the switches happened

The trigger analysis is the most mechanically useful result. Coding used three consecutive messages per switch, reaching Cohen's κ = 0.82 across a five-category taxonomy. New chatbot question dominated at 89% to 97% of switches in all four datasets; language mismatch, misunderstanding, and explicit requests accounted for small shares, and no unexplained switch appeared. The authors are careful about this: both prompts instructed the chatbot to close every turn with a question, which puts a switch there close to a base rate. What it does establish is that language change is routine conversational movement, not error.

Within-message mixing stayed rare — 1.6% to 3.2% of user messages — and switching in the culture conversation was bidirectional, English and Papiamentu/o trading places repeatedly rather than Papiamentu/o displacing English. Multilingual behavior here is therefore sequential, which is what the typed medium affords: what a student does with a language sits at the turn boundary, not inside the sentence, and that boundary is where [[student-ai-interaction]] is negotiated.

## Comfort, accommodation, and the pull of English

Hypothesis 4 expected greater reported comfort switching with a person than with a chatbot. It was not supported. The intended two-item index failed outright (α = .17), and the mirrored items correlated at ρ = −.15 (p = .342): participants did not treat them as two sides of one judgment. Analyzed separately, agreement was descriptively higher for the person-referenced item (M = 3.33) than the AI-referenced one (M = 2.93), but that gap is not a within-person comparison.

The behavioral evidence points to accommodation instead. More familiarity with AI predicted fewer switches, and 90.5% of the sample used AI regularly, so experienced users may have learned which language yields better output and converged on it, as speakers converge with any interlocutor. The stakes are highest in the culture conversation, where food, traditions, and family practice are exactly the [[culturally-relevant-pedagogy|culturally grounded material]] an English reply cannot carry. For a system serving a [[language-learning|language community]], the design consequence is specific. An agent that fixes its language after the first turn locks in a choice the user has not yet made, and separate per-language tests cannot detect that failure.

## What this means for practice

- **Instructors:** Ask students which language an AI tool actually handles before assigning work in it. The English default here tracked what students expected the system to do well, not what they preferred, so it can hide which language they would otherwise use.
- **Instructors:** Treat turn-by-turn language change as normal in multilingual classrooms. Students who move between languages in a single conversation are not being inconsistent; they are matching language to topic.
- **Designers:** Detect the language of every incoming turn rather than setting it once at session start, and say plainly which languages the system supports so users do not have to discover the limits by failing.
- **Researchers:** Log conversations rather than relying on recall. The survey put switching below the midpoint (M = 2.91) while the transcripts showed it concentrated by topic and turn, so [[self-report-measures|self-report]] alone would have missed where and why it happened.

## Limitations

- Every conversation opened in English, which plausibly raised the English baseline and may make the default look firmer than it is; the authors name varying the opener as the most important follow-up.
- Chatbot model was not randomly assigned — participants met GPT-5.5 (n = 18) or Llama 4 Maverick (n = 24) depending on the collection session, so model and group composition are confounded and no model comparison is possible.
- Of 64 people who consented and started the first conversation, 42 completed the study, and the completers may differ systematically from those who dropped out.
- Language annotation and trigger coding both used GPT-5.4-mini as a judge; annotations were human-reviewed, but short multilingual messages remain a weak spot for automated identification.
- Papiamentu and Papiamento could not be distinguished reliably and were merged, so the orthographic and community distinction between the two islands is not examined.
- Each conversation lasted five minutes inside a study participants knew was a study, which removes the audience that drives much multilingual identity work in public writing.

## Citation

Bush, A., Minnaar, M., Sultan, S., Tashin, M. T. H., Bhatt, A., & Aksoy, M. (2026). [*Beyond Bilingual: Studying Quadrilingual Code-Switching with Conversational AI*](https://arxiv.org/abs/2611.21394). arXiv preprint 2611.21394.
