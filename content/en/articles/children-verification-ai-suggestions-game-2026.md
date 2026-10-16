---
title: "\"Do You Trust It... or Check It?\": Exploring Children's Verification Behaviors in Game-Based Human-AI Collaboration"
created: "2026-10-16T09:20:00-04:00"
updated: "2026-10-16T09:20:00-04:00"
type: article
sources: ['raw/papers/children-verification-ai-suggestions-game-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [system development, experiment]
level: [k 12]
audience: [instructors, software developers, researchers]
discipline: [biology education]
pedagogy: [game-based-learning, student-ai-interaction, scaffolding]
technology: [rag, llm, conversational-ai, human-in-the-loop-ai]
assessment: [self-report-measures]
methods: [qualitative-research, quantitative-research, mixed-methods-research]
institutions: []
ethics: [trust-calibration, trust, explainable-ai]
foundations: [ai-literacy, human-ai-collaboration, critical-thinking]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-16"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This prototype study asks whether children aged 8–10 treat AI suggestions as answers or as claims to check, embedding partially correct suggestions inside a [[game-based-learning|game-based]] biological reasoning task. Twelve children were split across three [[human-ai-collaboration|agent styles]] — partner-like, tool-like, and a dual-state agent that switched between them — but every condition received the same underlying AI suggestion. Across 11 valid sessions, only one child accepted the AI suggestion, three sought evidence, and five questioned it; nine sessions reached the AI repair stage, so [[trust-calibration|trust]] showed up as situated verification behavior rather than a single post-task attitude. Agent style shaped the pathway: all four partner-like children questioned the AI directly, while tool-like interaction was more associated with evidence seeking. Children rated error awareness high (M = 4.83) and AI trust and reliance moderate (M = 3.33), seeing the AI as useful but fallible and still more tool (M = 4.67) than partner (M = 3.33). The authors read this as evidence that agent style should work as task-based [[scaffolding]] and that [[ai-literacy]] is built through situated checking, not abstract instruction.

## Key Findings
1. Across 11 valid sessions, only one child accepted the AI suggestion, while three chose to seek evidence and five questioned the AI; nine sessions reached the AI repair state.
2. Agent style shaped response entry: all four partner-like children chose to question the AI, while the tool-like condition produced two evidence seekers, one questioner, and two incomplete choices.
3. Ten children entered the reflection node where the AI introduced an incorrect explanation; the single exception stopped during free chat in the tool-like condition.
4. Children rated error awareness consistently high (M = 4.83) but AI trust and reliance only moderate (M = 3.33), indicating they did not treat the AI as an always-correct source.
5. Role perception stayed functional: tool perception (M = 4.67) exceeded partner perception (M = 3.33), and dual-state children still rated the AI strongly as a tool (M = 5.00).
6. Reasoning depth varied: coded reasons for questioning were three conceptual corrections, one evidence-based correction citing images or knowledge cards, and one intuitive disagreement.
7. Explanations were rated helpful (M = 4.50) and platform usability positive (M = 4.07 overall), with open comments flagging visual clarity, card readability, response speed, and task difficulty.

## Agent style routes children toward questioning or evidence

The three conditions shared identical, partially correct AI suggestions and differed only in language style, explanation format, and interaction prompts. The partner-like agent used encouraging, collaborative phrasing such as "Let's take a look together"; the tool-like agent reduced social expression and grounded responses in retrieved knowledge fragments; the [[human-in-the-loop-ai|dual-state agent]] switched according to a trust score computed from observable signals — text, choice, behavior, and response time — updated each round. That routing produced distinguishable pathways. Every partner-like child (4 of 4) questioned the AI, suggesting socially expressive interaction may invite direct disagreement. In the tool-like condition two children sought evidence and one questioned, while two did not complete a response choice. Both valid dual-state sessions began companion-like and shifted tool-like during reflection or repair, supporting feasibility of the routing mechanism, though the authors state the small sample does not support claims of a stable behavioral effect.

## Verification is situated behavior, not one trust decision

Children did not simply accept or reject AI suggestions. Of 11 valid sessions, one accepted, three sought evidence, five questioned the AI, and nine reached the function where an incorrect explanation was corrected with task evidence. This is the paper's central reframing: [[trust-calibration|calibrated trust]] appears as checking, [[feedback|questioning]], and revision inside the task, not as a fixed post-task attitude. Depth also mattered. Coding children's reasons for questioning yielded one intuitive disagreement, three conceptual corrections, and one evidence-based correction referring to images or knowledge cards, so questioning alone is not a uniform indicator of [[critical-thinking|critical AI use]]. The dynamic trust model used observable behaviors only as indicators of reliance, and the authors do not claim it measures children's internal [[trust|trust]] states.

## Children saw the AI as useful but fallible

Post-task ratings were analyzed with descriptive statistics. Error awareness remained consistently high (M = 4.83), AI trust and reliance stayed moderate (M = 3.33), and explanations were rated helpful (M = 4.50). Role perception remained largely functional: tool perception (M = 4.67) clearly outran partner perception (M = 3.33), and even the dynamic-switching condition, which showed relatively higher partner perception (M = 4.25), still rated the AI strongly as a tool (M = 5.00). Platform usability was positive (M = 4.07), but open-ended comments pointed to visual clarity, card readability, response speed, task difficulty, and the naturalness of AI interaction. The authors conclude children's collaboration experience was shaped not only by agent style but also by interface quality, task flow, and system fluency — a reminder that [[explainable-ai|explanation design]] and interaction polish travel together.

## Designing agent style as task-based scaffolding

The discussion reframes agent "personality" as a task-level [[scaffolding]] decision rather than a fixed trait: use social expression to sustain participation, then shift toward structured, [[rag|evidence-grounded]] explanation when children must evaluate or revise a suggestion. The dual-state condition embodies that idea, routing on a smoothed trust score so the agent does not switch styles frequently within a short period. For [[ai-literacy]], the implication is developmental: children should practice judging outputs, comparing them with evidence, and separating their own judgments from AI-provided information. The authors also look outward, asking whether critical AI use transfers from structured game tasks to more open-ended settings such as [[inquiry-based-learning|scientific inquiry]] or creative generation, and proposing more explicit reflection prompts that make children verbalize why they accept, question, or revise a suggestion.

## What this means for practice

- **Instructors.** Build tasks in which the AI offers a partially correct suggestion and children must decide to accept, question, or gather evidence, so the verification choice becomes the lesson rather than an afterthought.
- **Curriculum designers.** Teach [[ai-literacy]] through situated practice — judging AI outputs against task evidence and distinguishing one's own judgment from AI-provided information — not as abstract facts about how AI works.
- **Software developers.** Treat agent style as a switchable, task-level resource: a partner-like register to sustain engagement and a tool-like register with explicit evidence when children need to evaluate or revise.
- **Researchers.** Code the depth of children's verification, not just whether they questioned the AI, because intuitive disagreement, conceptual correction, and evidence-based correction are different competencies.

## Limitations

- The evaluation involved 12 children aged 8–10, with 4 children in each condition and only 11 valid sessions, so the authors present the results as preliminary trends rather than stable causal conclusions.
- The design used a between-group comparison to reduce learning and direct comparison effects, but the small sample cannot support claims of a stable behavioral effect for any agent style.
- Trust and reliability were captured through a brief post-task rating and semi-structured interviews, which record stated perceptions rather than the reasons behind children's trust changes.
- The dynamic trust model maps observable behaviors to trust states and does not explain why children's trust changed; the authors name task understanding, AI expression, cognitive load, and perceived AI authority as unmodeled factors.
- In the second task only one child triggered robot assistance, so continued AI use was treated as a supplementary indicator rather than a full measure of collaboration quality.

## Citation
Liu, S., Song, Y., Li, H., Wang, Z., Lan, M., & Lyu, F. (2026). [*"Do You Trust It... or Check It?": Exploring Children's Verification Behaviors in Game-Based Human-AI Collaboration*](https://arxiv.org/abs/2610.21233). arXiv preprint arXiv:2610.21233 (cs.HC).
