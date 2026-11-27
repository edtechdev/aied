---
title: "The Paradox of Agency-Preserving AI: Negotiating Learner Agency in Layered Human-AI Interactions"
created: "2026-11-25T09:10:00-05:00"
updated: "2026-11-25T09:10:00-05:00"
published: "2026-11-23"
type: article
authors: ["Yueling Fan", "Jacqueline Wong", "Olov Engwall", "Olga Viberg"]
venue: "arXiv preprint (cs.HC)"
evidence_context: educational
foundations: [agency, human-ai-collaboration]
pedagogy: [self-regulated-learning, metacognition, reflection, student-ai-interaction]
technology: [generative-ai, llm, pedagogical-agent]
ethics: [inclusive-learning]
level: [higher ed, graduate]
audience: [instructional designers, educational technology developers, instructors]
page_kind: [design case]
research_method: [case study, interviews, thematic analysis]
sources: ["raw/papers/fan-agency-preserving-ai-paradox-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Fan and colleagues (2026) identify a paradox at the center of a popular design idea: an AI built to protect [[agency|learner agency]] by [[prompt-engineering|prompting]] [[reflection]] can constrain that agency, because it decides when, how and why a learner should reflect. They ran a co-design workshop with 18 [[graduate-education|graduate]] students at a European technical [[higher-ed|university]] who used [[generative-ai|ChatGPT]] with ChatWise, an extension that supplies [[self-regulated-learning|self-regulated learning]]-aligned [[feedback]] on the learner's prompting. From 185 prompt–feedback entries, 174 written reflections and the participants' own design artifacts, they describe four observable responses to that layered guidance — alignment, bypass, explicit contestation, and cases where improvement could not be attributed — and four design tensions that organize them: assistance versus reflection, immediate intervention versus space for self-regulation, visibility versus attention competition, and system adaptation versus user control. The contribution is a multidimensional account of agency as task, cognitive and interactional, and a set of design criteria the participants generated rather than an evaluation of systems that implement them.

## Key Findings
- **Learners did not simply follow the meta-level guidance.** Their next prompts showed alignment in some contexts, bypass in others, explicit contestation in others, and a residual group where improvement could not be traced to the intervention.
- **Bypass clustered around requests for the finished product.** Learners skipped prompted reflection when they wanted complete code or drafts, or surface-level edits such as wording and format.
- **Immediate [[primary-education|primary]]-AI help reduced engagement with the reflection that followed.** The tension is sequencing: the answer arrives before the learner has a reason to think about the problem.
- **Prominent feedback competed for attention it could not keep.** Participants reported losing access to meta-level feedback before they were ready to use it, and found dense feedback distracting beside the main conversation.
- **Contestability was a design requirement, not a courtesy.** Participants wanted to challenge the meta-AI's judgment about what they should keep doing themselves, and to override an intervention that misread their situation.
- **Agency is multidimensional in their account.** Task agency, cognitive agency and interactional agency fail in different ways and need different design responses.

## What the layered interaction looked like

ChatWise sits beside a task-oriented primary AI and offers feedback on the learner's own prompting and reasoning rather than on the problem. The workshop had participants first work on a programming or academic-writing task without the extension, then repeat it with the extension, so they had a direct comparison to reason from. The LeAF toolkit structured the discussion: cards for learner profile, behavior, feedback level, support type, intervention policy and values, and evaluation criteria, arranged into sentences of the form "when the learner is doing X, the system provides Y via Z, under policy W."

That framing is what produced design proposals rather than opinions. One group proposed a prompt-refinement workflow in which a vague prompt triggers a small feedback card the learner can dismiss, with configurable detail, tone and format. Another moved ChatWise feedback into a dedicated side region so [[self-regulated-learning|regulation]] support stays visually distinct from the conversation it comments on.

## Four tensions, not one problem

The first tension is assistance against reflection. A meta-level intervention is useful when it prompts task-relevant reasoning, and unwelcome when the learner's immediate purpose is to get something done. The second is timing: immediate primary-AI help can pre-empt the reflective moment, while [[scaffolding]] offered later may arrive when the learner has already moved on. Participants valued reflection that remained available across an iterative interaction rather than as a single checkpoint.

The third tension is visibility against attention. Feedback that is peripheral can be missed; feedback that is prominent takes attention from the task. Learners wanted control over when guidance stayed peripheral and when it came into focus, which is an interface question with no single right answer. The fourth is adaptation against user control: participants wanted support tuned to their expertise and context, and also wanted to decide how that tuning happened and to correct it when it was wrong.

## What the analysis could and could not attribute

The chat-log analysis is observational. The authors identified response patterns and then ran a reflexive thematic analysis across logs, reflections, peer critiques and artifacts, but the patterns cannot establish that the meta-level feedback caused a change in behavior: a learner's next prompt may reflect the primary AI's reply, [[prior-knowledge|prior knowledge]] or a developing understanding of the task.

The design criteria are outputs of the workshop, not tested features. Participants proposed them from experience and artifacts, and the authors are direct that their effectiveness in preserving agency or improving [[metacognition]] remains to be established in functioning systems. That makes the paper most useful as a specification of what an agency-preserving meta-level system would have to expose — timing, contestability, persistence of guidance, and the learner's authority over adaptation — rather than as evidence that any particular design works.

## What this means for practice

- **Instructional designers.** Decide where in the task the reflection prompt lands. A prompt that arrives after the learner already has the answer is asking for a retrospective justification, not regulating the work.
- **Educational technology developers.** Make the meta-level layer contestable and dismissible. A learner who cannot tell the system "that is not what I was doing" will route around it instead.
- **Instructors.** Teach the layered setup explicitly, including what the reflective layer is for. Learners who treat it as an obstacle will request the finished product and skip the reasoning the tool exists to prompt.
- **Researchers.** Model agency as more than one construct. Task, cognitive and interactional agency were separable in these data and would be conflated by a single measure.

## Limitations

- Eighteen graduate students with backgrounds in AI, HCI and [[learning-analytics|learning analytics]]; their fluency with the concepts may not represent learners with less technical experience.
- Participants worked on relatively short programming and academic-writing tasks inside a workshop, so the tensions may unfold differently over a semester of use.
- Chat-log patterns are observational and cannot attribute behavior change to the meta-level feedback.
- The design criteria came from participant experience and co-design artifacts rather than from an evaluation of implemented alternatives.
- The study reports no learning-outcome or self-regulation measures, so nothing here establishes that agency-preserving designs improve either.

## Citation

Fan, Y., Wong, J., Engwall, O., & Viberg, O. (2026). [The Paradox of Agency-Preserving AI: Negotiating Learner Agency in Layered Human-AI Interactions](https://arxiv.org/abs/2611.31573). *arXiv preprint arXiv:2611.31573*.
