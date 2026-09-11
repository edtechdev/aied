---
title: "AI-interaction literacy: reflections on how generative AI might be used to support self-regulated learning in higher education"
created: "2026-09-11T06:10:00-04:00"
updated: "2026-09-11T06:17:00-04:00"
type: article
tags: [ai-literacy, self-regulated-learning, metacognition, generative-ai, assessment, assessment-validity, feedback-literacy, higher-ed, student-ai-interaction, equity-in-ai-education, prompt-engineering]
research_method: [theoretical analysis, qualitative]
audience: [learners, instructors, assessment designers, researchers]
level: [higher ed]
category: [assessment]
sources: ['raw/papers/brunnstrom-ai-interaction-literacy-srl-2026.md']
confidence: high
---

> **AI-interaction literacy** — Brunnström and Palmqvist (2026) run an eight-round demonstration in which they take the role of a naive student using a [[generative-ai|GenAI]] [[conversational-ai|chatbot]] on a take-home examination question ("Do machines think?"), then analyse the *interaction itself* with the SOLO taxonomy rather than grading the AI's answer. The default output stayed at the [[quantitative-research|quantitative]], multistructural phase — "polished but pedagogically thin" text that a novice could submit without understanding — and reaching the [[qualitative-research|qualitative]] phase required repeated meta-level interventions from the learner ("simplify", "this is overwhelming, can you condense it?"). Their central claim: productive GenAI use demanded *the very [[self-regulated-learning|self-regulatory skills]] the tool was expected to support*, so the interaction itself became an object of [[regulation]]. The paper names this capacity **AI-interaction literacy** — the ability to steer, evaluate, and learn from iterative interaction with GenAI — and proposes that [[assessment|take-home assessments]] emphasise the qualitative phase while recall-based knowledge moves to in-class formats.

## Overview

Take-home examinations are common in the [[humanities-education|humanities]] and social sciences and are argued to support more complex reasoning than time-constrained formats. If a chatbot can produce a plausible response, however, the submitted product becomes a weaker indicator of what the student has learned — an [[assessment-validity|assessment validity]] problem rather than only an integrity problem. The authors situate their work within calls to move past rules about permitted and prohibited use: GenAI and assessment has been described as a **wicked problem** with no single stable solution, and proposals such as **Black Box Assessment** argue for process-oriented assessment that attends to the learning trajectory, not just the polished artefact.

The paper's frame is that GenAI may support each phase of [[self-regulated-learning|self-regulated learning]] — goal setting, strategy selection, monitoring, and adjustment — but that the value of an AI response depends on the student's capacity to interpret, evaluate, and use it. Because GenAI feedback arrives interactively and without a teacher's immediate framing, it also raises the bar for [[feedback-literacy|feedback literacy]].

## The demonstration

Two authors shouldered the role of a naive student aiming to use GenAI as study support. They prompted Claude Opus 4.6 (Anthropic) on 22 April 2026 with the original exam question, word limit (1000–1200) and course literature restrictions; ChatGPT 5.4 Thinking and Pro produced comparable but more extensive responses (not reported). Each prompt–response exchange was then coded for the structural complexity of the AI's output with the SOLO taxonomy, moving from the quantitative phase (listing, organising) toward the qualitative phase (relating, evaluating, generalising).

| Step | Prompt intent | AI output | SOLO level | Observation |
|---|---|---|---|---|
| 1 | Original exam question with word limit and literature | Polished, essay-ready answer naming concepts (systems reply, robot reply) without explaining them | Multistructural | Ready-to-submit text, pedagogically thin; assumes [[prior-knowledge|prior knowledge]] |
| 2 | "Can you define clear learning objectives?" | Eight broad conceptual objectives | Multistructural | Overwhelming breadth; no obvious starting point for a novice |
| 3 | "Use you as a conversational partner… how can you assist me?" | List of learning modes (explanation, questioning, argumentation practice) | Multistructural / early relational | Productive shift from "what" to "how", but still list-based |
| 4 | Selected argumentation practice; stated a claim about the Turing Test | Sophisticated objection using Janlert's computation–thinking distinction | Relational | High-quality argumentation, inaccessible without simplification |
| 5 | "Present this argument in less complex language" | Simplified reformulation with everyday analogies | Relational | Simplification came only after a learner meta-intervention |
| 6 | "What do I need to do to learn enough to answer this objection?" | Detailed study roadmap (functionalism, intentionality, Chinese Room replies) | Relational | Useful but comprehensive; learner must manage the load |
| 7 | Asked GenAI to apply a self-regulated learning process | Very long structured plan based on SRL theory | Relational | Invoking SRL theory did not by itself produce approachable output |
| 8 | "This is overwhelming, can you condense it?" | Three-step loop (set one small goal; learn and practise; reflect) plus "small steps build confidence" | Relational / extended abstract | Most pedagogically effective response — after seven rounds of calibration |

## Findings

- **Default output is fluent but pedagogically thin.** The first response met the assignment criteria and would likely pass, yet it functioned as "a collection of factoids dressed in fluent academic prose" — evidence that a fluent product indicates neither learning nor its absence.
- **Stagnation came from excess, not scarcity.** Repeated requests for more content produced more comprehensive lists pitched above the learner's existing schema, keeping the interaction in the quantitative phase.
- **Progress required meta-level intervention aimed at the tool.** Reaching a usable learning loop took eight rounds; the learner had to signal overload, request simplification, narrow scope, and redirect toward focused practice — what the authors call **[[metacognition|metacognitive]] labour directed at the GenAI interaction itself**.
- **The tool presupposed the competence it was meant to build.** "Arriving at that point… required us to possess, in advance, the self-regulatory skills we hoped the tool would support." At moments they judged that simply reading the course book would have been cognitively simpler and pedagogically clearer.
- **Simple refusal to persist is part of the skill.** AI-interaction literacy includes recognising when an explanation is too abstract and deciding when to disengage from the tool — a decision the paper treats as legitimate rather than as failure.
- **Metacognitive laziness is the failure mode on the other side.** Where delegation of planning, monitoring, and evaluation to the system produces [[cognitive-offloading|metacognitive laziness]], this demonstration shows the opposite risk: unmanaged use of a legitimate learning tool adds a second object of regulation on top of the disciplinary content.

## The equity implication

The authors expected GenAI might serve as a personalised tutor for students without informal academic support networks and reach the opposite conclusion. Because unguided use imposes an interaction-management skill that is unevenly distributed, GenAI "may be most beneficial to already advantaged students" — those with strong study habits, high motivation, and confidence in directing an AI system — while students with weaker study skills or lower [[self-efficacy|academic self-efficacy]] meet complexity and frustration. Rather than substituting for missing conversation partners, the tool introduces a new competence whose acquisition creates its own gap. The stated remedy is that productive GenAI use is a **learned competence, not an intuitive one**, and the responsibility for [[teacher-role|teaching]] it cannot rest with the student alone.

## Propositions

1. **For students:** engage the course literature and treat the system as a conversational partner for self-regulated learning rather than a generator of ready-made answers; productive use requires informed, iterative [[prompt-engineering|prompting]], requests for simplification, and reflection against one's own developing understanding.
2. **For teachers:** develop an explicit strategy for teaching GenAI-supported self-regulated learning, with particular attention to students with lower academic self-efficacy, including how to formulate productive prompts, recognise when a response is too abstract or broad, and structure a session around small goals.
3. **For assessing outcomes:** because GenAI is powerful at quantitative, factoid-type content, take-home assessments should emphasise the qualitative phase of the SOLO taxonomy, while quantitative recall-based knowledge is better assessed in class where GenAI is unavailable.

## Implications

- **Process, not just product, in assessments.** The demonstration reinforces process-oriented and trajectory-sensitive assessment designs ([[assessment-validity|validity]] evidence from revisions, decisions, and reflection) as the response to GenAI, and argues that [[academic-integrity|integrity]] framing alone misses how demanding legitimate use has become.
- **AI literacy needs an interactional dimension.** AI-interaction literacy is offered as a specific enactment of the applicational, evaluative, and integrational competences in broader [[ai-literacy|AI literacy]] frameworks — a classroom-teachable skill rather than a personal aptitude.
- **Prompt quality may not stay the bottleneck.** The authors note the emphasis on informed prompting may shift as systems improve, and that whether general, uninformed prompts could support the same progression remains untested.
- **Limitations:** a single reflective demonstration by two authors playing the naive-student role, one primary model, no student data, and no measurement of [[learning-gains|learning outcomes]] — the argument rests on a documented interaction trajectory rather than an experiment.

## Connected Concepts

- [[ai-literacy]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[assessment-validity]]
- [[feedback-literacy]]
- [[student-ai-interaction]]
- [[generative-ai]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[assessment]]
- [[academic-integrity]]
- [[cognitive-offloading]]
- [[evaluative-judgement]]
- [[prompt-engineering]]
- [[self-efficacy]]
- [[summative-assessment]]

## Connected Articles

- [[ai-literacy-heptagon-2026]] — The AI Literacy Heptagon framework for higher education (Hackl et al. 2026)
- [[chatgpt-feedback-engagement-genai]] — Students' engagement with ChatGPT feedback and feedback literacy (Zhan & Yan 2026)
- [[ai-anxiety-strategic-regulation-writing-2026]] — Strategic regulation of GenAI in academic writing
- [[genai-thoughtless-use-self-directed-learning-2026]] — Thoughtless GenAI use and self-directed learning
- [[du-yuan-epistemic-dependence-2026]] — Differentiating productive reliance from harmful dependence
- [[mendoza-ai-feedback-feedback-literacy-srl]] — Feedback literacy moderates SRL benefit from AI feedback
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt privilege and equitable AI access
- [[school-ai-education-readiness-gaps-agency-2026]] — Psychological vs. cognitive equity in school AI instruction
- [[ai-availability-student-motivation]] — How AI availability reshapes student motivation
- [[mohamed-temimi-assessment-imperfect-information-disclosure-2026]] — Assessment design under imperfect information: disclosure and student response
- [[teichmann-detecting-undetectable-misconduct-2026]] — Detection's evidentiary collapse and the case for redesign

## Citation

Brunnström, L., & Palmqvist, L. (2026). [AI-interaction literacy: reflections on how generative AI might be used to support self-regulated learning in higher education](https://doi.org/10.1080/02602938.2026.2731261). *Assessment & Evaluation in Higher Education*.
