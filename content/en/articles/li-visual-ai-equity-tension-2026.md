---
title: "Beyond Average Gains: Probing the Equity–Vulnerability Tension in Structured Visual AI for Learning"
created: "2026-11-25T09:07:00-05:00"
updated: "2026-11-25T09:07:00-05:00"
published: "2026-11-24"
type: article
authors: ["Mingyuan Li", "Duan Wang", "Erick Purwanto", "Yihong Wang"]
venue: "arXiv preprint (cs.HC)"
evidence_context: educational
pedagogy: [scaffolding, student-ai-interaction, student-experience]
technology: [generative-ai, llm, visualization, conversational-ai]
methods: [rct, quantitative-research]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, educational technology developers, instructional designers]
page_kind: [evaluation]
research_method: [experiment, survey]
sources: ["raw/papers/li-visual-ai-equity-tension-2026.md"]
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

> **Synthesis:** Li and colleagues (2026) asked whether a structured visual interface for [[generative-ai|generative AI]] support serves all learners equally, not just better on average. In a randomized study with 320 third-year [[cs-education|programming]] students at one Chinese university, they compared VisualCodeChat — predefined learning stages, stepwise conversational explanations and dynamic algorithm [[visualization|visualizations]] — with a text-only [[conversational-ai|chatbot]] running the same model and the same instructional sequence. Across 282 post-task questionnaires, the structured condition drew higher usability and perceived effectiveness ratings; efficiency, satisfaction and post-use emotion showed no reliable difference. Within-condition analyses then surfaced what the averages hid: infrequent chatbot users rated adoption and learning management lower in the standard chatbot condition, learners with uncomfortable prior chatbot experience rated the structured interface's interaction and layout lower, and laptop users rated that interface above tablet and smartphone users. The authors name this an [[equity-in-ai-education|equity]]–vulnerability tension and argue that [[scaffolding]] should be evaluated across learner backgrounds and devices, not only on mean ratings.

## Key Findings
- **Structured visual support raised perceived usability and effectiveness.** Both advantages were statistically reliable but small: mean differences were 0.24 and 0.18 points on the rating scale.
- **Three of five experience scales showed no difference.** Efficiency, satisfaction and post-use emotion were statistically indistinguishable between the structured and standard conditions.
- **Prior chatbot experience changed how the standard chatbot was rated.** Infrequent users gave significantly lower adoption and learning-management ratings there; no comparable gap appeared in the structured condition.
- **Uncomfortable prior chatbot experience did not disappear under structure.** Within the visual condition, those learners rated interaction and layout lower than classmates who felt comfortable with chatbots.
- **Device type mattered inside the structured condition.** Laptop users rated its interface significantly higher than tablet or smartphone users, a difference that appeared nowhere in the standard condition.
- **Both conditions ran the same language model.** The comparison used the same ChatGPT 3.5 API and configuration, matched content, duration and instructor guidance, so differences trace to interface design rather than model capability.

## What the structured interface changed

VisualCodeChat is the conversational component of VisualCodeMOOC. It walks a learner through a fixed sequence: a conceptual explanation, a step-by-step walkthrough with the algorithm's state drawn alongside the chat, a code explanation, and practice questions. Students confirm understanding, ask follow-ups and receive [[feedback]] on their answers, but the path through the material is the system's, not the learner's. The standard condition delivered the same explanations as open text, leaving the learner to formulate questions and track algorithmic state.

Both conditions used the same [[llm|language model]] and the same three graph-algorithm topics — connectivity, connected components in an undirected graph, and cycle detection in a directed graph — with the same progression from full demonstration to partial guidance to [[self-directed-learning|self-directed]] work. In the authors' reading, the structured condition moved the work of organizing a learning path and holding transient state off the learner and onto the interface, which is what [[scaffolding]] is supposed to do.

## Where the advantage stopped

The null results carry as much weight as the significant ones. A predefined sequence gives a clear route but a narrow one: it does not obviously accommodate a learner who wants to jump to one difficult step, revisit an earlier stage on demand, or work at a faster pace. That fits the absence of an efficiency difference, and it fits a satisfaction result where clarity was not enough to lift overall evaluation. Learners also had to learn to read the visualizations, which costs time before it saves any.

The emotional result is a caution against expecting presentation changes to manage affect. Algorithm learning produces confusion and frustration regardless of how the material is displayed, and the authors point to appraisal-based accounts of academic emotion, in which the learner's interpretation of difficulty matters more than the format. All five experience scales correlated positively with one another, with efficiency and satisfaction the closest pair, so these dimensions move together without one determining another.

## What the averages concealed

The subgroup analyses were exploratory, run within each condition rather than as formal condition-by-background interactions, and the authors are explicit that they do not establish that the structured interface removes experience-related disparities. What they show is that a higher mean can sit on top of a divided distribution.

Frequency of prior chatbot use separated the two conditions most clearly. Learners who rarely used chatbots struggled more with adoption and learning management when the interface was open-ended text, and that gap did not appear when the interface carried the structure. Prior affect cut the other way. Learners who reported uncomfortable earlier chatbot experiences rated the structured interface's interaction and layout below their comfortable peers, which suggests that a fixed sequence can feel constraining to someone already wary of the medium. Device type produced the third pattern: the visual interface's layout and interaction were rated higher on a laptop than on a tablet or phone, a plausible consequence of screen area for a chat-plus-visualization split view.

## What this means for practice

- **Instructors.** Check what students have actually done with chatbots before assuming a structured AI tool levels the field; the learners who most need support are the ones whose prior experience shapes how they read the interface.
- **Instructional designers.** Build in a way back. A fixed sequence that cannot be exited or revisited will read as efficient to the designer and as a constraint to the learner who needs one step twice.
- **Educational technology developers.** Test the split chat-and-visualization layout on the devices students actually use. A laptop-tested interface that loses its ratings on a phone has an equity problem, not a cosmetic one.
- **Researchers.** Report subgroup patterns alongside means when evaluating AI learning tools. The average here favored the new interface; the distribution did not favor every learner in it.

## Limitations

- All outcomes are self-reported perceptions from 282 post-task questionnaires; the study measured perceived usability, effectiveness and emotion, not knowledge gains, transfer or retention.
- One course, one university and one cohort of 320 third-year students, working on three graph-algorithm topics of comparable difficulty.
- Both conditions ran on the ChatGPT 3.5 API, so the interaction contrast is a mid-2023-era model's behavior rather than a current one.
- The subgroup analyses are exploratory within-condition comparisons; the study did not test condition-by-background interactions, so no claim about who benefits more is established.
- Device groups were self-selected rather than assigned, so the laptop advantage may reflect who chose to work on a laptop as much as the layout itself.
- The authors state the equity–vulnerability tension is an evaluative lens rather than a causal effect demonstrated by these data.

## Citation

Li, M., Wang, D., Purwanto, E., & Wang, Y. (2026). [Beyond Average Gains: Probing the Equity–Vulnerability Tension in Structured Visual AI for Learning](https://arxiv.org/abs/2611.31899). *arXiv preprint arXiv:2611.31899*.
