---
title: "Recognition of Triggers for Regulation and Learners’ Regulatory Responses in Agent-Supported Collaborative Learning"
created: "2026-11-24T06:25:00-05:00"
updated: "2026-11-24T07:40:00-05:00"
published: "2026-11-24"
type: article
authors: ["Anni-Sofia Roberts", "Joni Lämsä", "Justin Edwards", "Sanna Järvelä"]
venue: "Technology, Knowledge and Learning"
evidence_context: educational
foundations: [agentic-ai, human-ai-collaboration, critiques-of-ai-in-education]
pedagogy: [metacognition, collaborative-learning, self-regulated-learning, scaffolding, social-emotional-learning]
technology: [pedagogical-agent, conversational-ai, llm, human-in-the-loop-ai]
methods: [qualitative-research]
discipline: [science education]
level: [higher ed]
audience: [researchers, instructional designers, instructors, educational technology developers]
page_kind: [evaluation]
research_method: [thematic analysis]
sources: ["raw/papers/roberts-triggers-regulation-agent-supported-collaborative-learning-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-24"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, quotes]
connected_notebooks:
  - title: "Regulation triggers and responses in agent-supported collaborative learning"
    url: https://notebooklm.link.google/6jl7WEszCJx1

---

> **Synthesis:** Roberts, Lämsä, Edwards and Järvelä (2026) ran a Wizard-of-Oz field study in which a [[metacognition|metacognitive]] agent called MAI listened to 14 groups of [[teacher-education|preservice teachers]] and played prompts when its keyword rules fired. Across 11 h 31 min of video, MAI detected 58 triggers; task understanding and task enactment challenges dominated, and only 5.2% were purely socio-emotional. Groups responded to 55% of prompts, but a shared strategic change followed in only 9 of 58 cases. Cognitive-trigger prompts were judged timely by at least some group members 82% of the time, while prompts about a lack of shared perspective were judged relevant 52% of the time and provoked visible defensiveness.

*Wizard-of-Oz study with 52 Finnish preservice teachers in 14 face-to-face groups during a single 60-min inquiry task on energy forms and conservation. MAI was simulated by researchers following a keyword decision tree; an OpenAI GPT-4 [[conversational-ai|chatbot]] that avoided direct answers handled typed questions. Overall inter-rater kappa 0.79.*

## Key Findings

- **Detection worked; adaptation did not follow.** Groups initiated some regulation after 55% of prompts, but only 16% of prompt situations produced a shared strategic change, and 7% produced partial regulation. Seven of ten prompts ended without adaptation.
- **Triggers split unevenly across the three rules.** MAI fired 58 prompts (mean 4.14 per group, SD 1.83): cognitive triggers 28, lack of shared perspective 25, metacognitive triggers 5. That last rule accounted for 8.6% of all prompts.
- **Cognitive challenges dominated, and emotion usually rode along.** 63.8% of detected challenges were socio-cognitive; task enactment (f = 22) and task understanding (f = 21) were the most common. Only 5.2% were purely socio-emotional, and roughly one-fifth combined both.
- **Initiation differed by rule type.** Groups initiated regulation more often after cognitive and metacognitive prompts than after shared-perspective prompts; the association was statistically significant.
- **Prompt relevancy tracked rule type.** 82% of cognitive-trigger prompts were accepted as timely by at least some members, against 52% for shared-perspective prompts. Overall 38% of prompts were accepted as relevant, 31% rejected, and 31% split within the group.
- **Sharedness prompts made groups defensive.** When MAI said members were thinking as individuals, students treated it as an outsider criticizing the group rather than as a support; several exchanges show open irritation, and no regulatory response followed.
- **The agent had false positives.** Six triggers were detected where the pronoun rule fired during genuine co-construction of knowledge, [[prompt-engineering|prompting]] about individualism in a group that was working jointly.
- **Design intent was explicit.** The authors position MAI against tools that offload regulation: the agent is meant to prompt awareness of trigger events so the group monitors together, not to regulate on the group's behalf.

## How MAI worked

MAI followed three priority-ordered rules, each keyed on keywords heard in speech over three turns of speaking. A metacognitive trigger fired on negative expressions such as "I/we can't do this", excluding "I don't understand". A cognitive trigger fired on confusion semantics aimed at the same target. A lack of shared perspective fired on first- or second-person singular use. Each rule carried a family of four prompt variants, and a researcher playing the wizard picked one so the same wording would not repeat twice in a row.

The association between rule type and whether groups initiated a regulatory process was statistically significant (chi-square (2) = 6.78, p = .034).

Two design details matter for reading the results. First, because detection ran on spoken keywords, anything a group did not say aloud was invisible. Second, a prompt could arrive while the group was co-constructing knowledge using "I" and "you", which is how the six false positives arose. The authors argue this is a fair test of the concept: a real natural-language-processing version would miss cues too, though differently.

## What the prompts did and did not achieve

The clearest pattern is that prompting reliably started monitoring and rarely finished it. Students repeated MAI's questions aloud, asked each other what they were trying to understand, and re-read instructions. Shared strategic change was much rarer, and abandoning a difficult task was common: groups frequently moved on knowing they had not changed strategy. The authors read this as evidence that individual monitoring does not become shared adaptation without the group taking joint ownership of the problem.

Where the prompts did land, they surfaced disagreement about task understanding that members had assumed was settled. In one excerpt, two students claimed mutual understanding while a third said she understood nothing; the prompt forced that difference into the open. That is the paper's strongest claim about agent value: raising the group's awareness of its own state, not solving the task.

## Why sharedness prompts backfired

Prompts about lacking a shared perspective produced defensiveness rather than reflection. Students told MAI to be quiet, described it as annoying, and in one exchange answered "What I'm trying to accomplish is that you wouldn't say a thing." The authors reach for psychological reactance to explain it: an autonomy challenge produces resistance. Their practical conclusion is that agents should aim at domain-specific challenges rather than at group dynamics if the goal is a low threshold for acceptance.

## What this means for practice

- **Instructors.** Do not expect a prompt to convert into better [[group-work|group work]] by itself. Plan what happens after a prompt: a moment where the group must decide something together, not just acknowledge the message.
- **Instructional designers.** Separate the two jobs agents can do. Tutoring on task content and mediating group process are different purposes; blending them in one message appears to raise resistance.
- **Learning engineers.** Rules keyed on surface features (pronoun use, negative phrasing) will misfire during productive talk. Budget for false positives and prefer prompts that admit uncertainty about the group's state.
- **Researchers.** Treat "prompt accepted" and "regulation adapted" as separate dependent measures. This study's gap between 55% initiation and 16% adaptation is the finding, not the headline number.

## Limitations

- Small, single-site sample: 14 groups of preservice teachers from one [[higher-ed|university]], one 60-minute session, which limits generalizability.
- Wizard-of-Oz delivery introduces variability between wizards in when rules fired and which prompt variant was chosen; a technically realized agent could enact each rule more systematically.
- The rules could not distinguish authentic triggers from minor challenges rooted in hunger, tiredness, group dynamics, or classroom setup.
- Prompt timing remains unsolved: initial prompts were accepted with novelty and later ones were rated less helpful, so the effect may decay with exposure.
- Metacognitive triggers were rarely detectable at all, which the authors attribute to groups abandoning difficult tasks before any metacognitive interaction could be observed.

## Citation

Roberts, A.-S., Lämsä, J., Edwards, J., & Järvelä, S. (2026). [Recognition of Triggers for Regulation and Learners’ Regulatory Responses in Agent-Supported Collaborative Learning](https://doi.org/10.1007/s10758-026-10060-1). *Technology, Knowledge and Learning*.
