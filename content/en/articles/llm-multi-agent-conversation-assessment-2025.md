---
title: "An LLM-Enhanced Multi-Agent Architecture for Conversation-Based Assessment"
created: "2026-10-04T05:55:00-04:00"
updated: "2026-10-04T05:55:00-04:00"
type: article
sources: ['raw/papers/llm-multi-agent-conversation-assessment-2025.md']
confidence: low
page_kind: [framework, evaluation]
research_method: [system development, design and evaluation study]
discipline: [science education]
level: [secondary]
audience: [assessment designers, software developers]
pedagogy: [scaffolding, student-engagement]
technology: [llm, pedagogical-agent, conversational-ai]
assessment: [formative-assessment, summative-assessment, assessment-validity]
methods: [mixed-methods-research]
foundations: [agentic-ai]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Conversation-based assessment asks students to demonstrate knowledge in dialogue with an artificial agent, and this paper splits that job across four [[llm]] agents — an expert and a peer who talk to the student, a formative and a [[summative-assessment|summative]] assessor working behind the scenes — with a non-LLM Watcher controlling turns and flow. Tested with secondary students on a science-inquiry task, the student-facing agents adapted to how students answered, and the assessor's cohesion scores tracked the type of answer. Its agreement with human coders was only 52.2 percent, and the authors report the evaluation was run on an older GPT model.

## Key Findings

1. The architecture uses four LLM agents with separated roles: an Expert Agent and a Peer Agent speak to the student, while a Formative Assessor and a Summative Assessor analyze answers and collect evidence without addressing the student directly.
2. A non-LLM Watcher supervises the whole assessment, choosing which agent speaks, updating their instructions, and deciding when the conversation ends after a set number of turns.
3. The Formative Assessor's speech-act tags agreed with human coding on 52.2 percent of 155 tagged events across seven categories, and most disagreements were fine-grained: 43 of the unmatched cases (58.1 percent) were CORRECT versus PARTIAL_CORRECT.
4. The assessor drifted toward hedged judgment, using PARTIAL_CORRECT for 53.5 percent of cases against 41.3 percent for human raters, and flagged 4 cases (5.4 percent) as IRRELEVANT where human raters flagged none.
5. Cohesion between a student's answer and the agent's follow-up tracked the answer type: against a CORRECT reference the standardized score fell by 7.606 points for IRRELEVANT replies (p = .011) and 6.718 for [[metacognition|METACOGNITIVE]] ones (p = .003), evidence the follow-up moves differ by what the student said.
6. The authors describe the result as a preliminary evaluation and name the conditions: a small sample in one science domain, no baseline comparison, and a model they call an older GPT whose performance affected the results.

## How the agent team is put together

The design starts from evidence-centered design and adds LLM techniques to it, running on an organization-issued Azure OpenAI GPT deployment with [LangChain](https://www.langchain.com/) handling the agent prompting, so every conversational move is meant to produce assessable evidence rather than just keep a conversation going. The Expert Agent acts as the primary facilitator: it opens the conversation, asks leading questions, follows up, and closes with a wrap-up. Its prompt is assembled in parts that include its persona ("You are a knowledgeable friend of <student>"), the student's assumed [[prior-knowledge|prior knowledge]], the assessment level being targeted, a conversational schema built on [[socratic-method|Socratic questioning]] with explicit [[misconceptions|misconception]] handling, a set of negations to stop trial-and-error answering, and retrieved domain information where relevant.

The Peer Agent handles the response types where a student is stuck or disengaged, playing a fellow student who is better at the material but still makes mistakes, and prompting the student to think further. The two behind-the-scenes agents divide the evidence work by time horizon: the Formative Assessor tags each student turn in real time and returns speech-act categories that the Watcher converts into updated instructions for whichever agent speaks next, while the Summative Assessor waits until the conversation ends and then builds an evidence summary of what the student covered.

## What the evaluation measured

The setting was a science-inquiry unit on thunderstorm formation, completed by 37 secondary-level students through videos, concept maps, and conversation-based assessments. The analysis here covers one of those assessments, with turn-level Formative Assessor logs available for 31 students.

Two strands were measured. For agreement, two domain experts built a rubric of correct answers, trained on three students' conversations, double-coded nine, and then coded 20 percent of the data (8 students) for reliability, reaching Kappa = .62 before reconciling disagreements; disagreements were overwhelmingly between CORRECT and PARTIAL_CORRECT, which is the boundary the assessor struggled with. For conversational alignment, cohesion between each student answer and the agent's follow-up was computed with TextEvaluator on a standardized 0–100 scale and compared across answer categories with a linear mixed model that included a random effect for student.

The cohesion result is the paper's cleanest signal: correct answers drew follow-ups with the highest contextual overlap, irrelevant ones the lowest, and the model confirms the ordering — IRRELEVANT (p = .011), METACOGNITIVE (p = .003) and PARTIAL_CORRECT (p = .026) all scored lower than CORRECT, with INCORRECT marginal (p = .073). The example the authors give is a student who says the sky is getting darker; the agent acknowledges the observation, then redirects with a question that moves the assessment back on topic.

Two failures are reported plainly. In one exchange the agent repeated a question the student had already answered acceptably, which the authors attribute to the Watcher mishandling information flow within the agent team and a need for more robust error handling. And in a case where a student answered and then said "I am not really sure", the human coder scored the answer as CORRECT while the Formative Assessor latched onto the second clause and tagged the turn METACOGNITIVE — a real disagreement about what counts as the assessable act.

## What this means for practice

- **Assessment designers.** If you are building a conversational assessment, separate the jobs rather than prompting one model to do everything: a turn-level assessor that tags evidence, a summative pass that assembles it, and a controller that decides who speaks next. This paper's failures are mostly coordination failures rather than model failures, which is a design problem you can act on.
- **Assessment designers and psychometricians.** Treat 52.2 percent agreement as a starting figure, not a passing one. The pattern is instructive: the assessor did not fail randomly but drifted toward PARTIAL_CORRECT and hedged where humans decided, so a rubric that forces a decision between adjacent categories is where to spend calibration effort.
- **Software developers.** The Watcher is the component to build carefully. Both reported failures trace to it — a repeated question after an answered one, and a misread turn — so explore turn-control and instruction-update logic before tuning prompts.
- **Instructors using conversational assessment tools.** Expect disagreement at the boundaries between partly right and right. Where a tool's category carries consequences for a student, keep a [[human-in-the-loop-ai|human review]] step rather than reporting the automated label as final.
- **Researchers.** The paper states its own ceiling: no baseline, one domain, and a model it describes as older. A comparison against a single-agent design in the same task would be the cheapest next experiment, and the cohesion method is reusable for it.

## Limitations

- The authors call this a preliminary evaluation: it is small-scale, confined to [[science-education|science education]], and cannot isolate the effect of the [[agentic-ai|multi-agent]] mechanism itself from the task domain.
- The evaluation was, in the paper's own words, powered by an older GPT model which impacted its performance. No version is named beyond an organization-issued Azure OpenAI deployment, so the 52.2 percent agreement figure is tied to an unspecified and dated generation rather than to the architecture.
- There were no baseline comparisons, so nothing here shows the architecture outperforming a simpler single-agent conversation.
- Agreement was computed on 155 tagged events from 31 students, and the human reference itself carried Kappa = .62 between raters, so the ceiling for any comparison against it is below perfect agreement.
- The reported assessment outcome is conversational behavior — speech-act tagging and cohesion between turns — not whether the assessment produced valid scores or better learning than the alternative it is meant to replace.
- The domain choice worked against the design: the authors note the task made it impossible to isolate the multi-agent mechanism, and one Watcher failure shows the coordination layer is not yet reliable.

## Citation

Hou, X., Forsyth, C., Andrews-Todd, J., Rice, J., Cai, Z., Jiang, Y., Zapata-Rivera, D., & Graesser, A. (2025). An LLM-Enhanced Multi-Agent Architecture for Conversation-Based Assessment. *AIED 2025: 26th International Conference on Artificial Intelligence in Education*.