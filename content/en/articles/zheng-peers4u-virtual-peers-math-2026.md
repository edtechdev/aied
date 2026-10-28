---
title: "Peers4U: Designing Learner-Centered Virtual Peers for Children's Multimodal Mathematics Learning"
created: "2026-10-28T12:00:00-04:00"
updated: "2026-10-28T12:00:00-04:00"
type: article
authors: ["Zheng, Z.", "Liu, B.", "Chen, W.", "Luo, L.", "Mei, Y.", "Cai, J.", "Yu, C.", "Shi, Y."]
published: "2026-10-27"
venue: "arXiv preprint"
source_url: https://arxiv.org/abs/2610.37238
foundations: [ai-education, human-ai-collaboration]
pedagogy: [collaborative-learning, scaffolding, learning-by-teaching]
technology: [generative-ai, multimodal, llm]
methods: [research-methods-aied, usability-research]
ethics: [privacy]
research_method: [user study]
discipline: [math education]
level: [primary education]
audience: [instructors, educational technology developers]
page_kind: [evaluation]
sources: ['raw/papers/zheng-peers4u-virtual-peers-math-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-28"
    agent: hermes-agent
---

> **Synthesis:** Peers4U asks what a peer should be when the learners are six to eight years old and the mathematics is concrete. Zheng and colleagues built a [[multimodal]] workspace in which a child solves a subtraction problem with virtual manipulatives, drawing, writing, and speech, then joins four [[llm|LLM]]-driven virtual peers whose solution artifacts — and the full construction process behind each — can be replayed and questioned. A formative study with 8 children and 5 experienced teachers produced four design goals: artifacts as the medium of interaction, peers heterogeneous relative to the learner, flexible initiative, and progressive orchestration of topics. In a between-subjects [[usability-research|user study]] with 22 children aged 6–8 (11 per condition), children grouped with four Leading Peers authored significantly more additional solution artifacts (8 children, 22 artifacts, versus 3 children and 7 artifacts; p = .037), while children in Mixed Groups were significantly more willing to learn with the same peers again (p = .015). Two expert teachers rated 157 learner-centered topic messages 4.69 out of 5 for pedagogical appropriateness, against 4.36 for persona-centered alternatives generated from the same interaction context (p = .0013). The contribution is a design account of [[collaborative-learning|peer learning]] as artifact exchange rather than conversation, tested at the scale a lab session with young children allows.

## Key Findings
1. **Learner-centered orchestration outscored a persona baseline.** Two expert teachers rated 157 topic messages 4.69 out of 5 for pedagogical appropriateness, against 4.36 for persona-centered alternatives from the same interaction context (p = .0013).
2. **The baseline failed on the learner's role.** Forty-three persona-centered topics were rated inappropriate; 72.1% (31/43) left the learner little role, and 8 pitched the topic above the child's level.
3. **Leading groups produced more mathematics.** Eight children grouped with four Leading Peers authored 22 additional artifacts, against 3 children and 7 artifacts in Mixed Groups (p = .037).
4. **Mixed groups produced more help.** Mixed Groups drew more private topics (p = .006) and private-chat messages (p = .029); children there were more willing to learn with the same peers again (p = .015).
5. **Rewording recovered participation.** Of 106 group topics, 29.2% drew an immediate reply; two follow-ups lifted cumulative participation to 68.9% as closed-ended questions rose from 10.5% to 79.2%.
6. **Interaction fed back into authoring.** Eleven children created 29 additional artifacts while chatting (M = 2.6 ± 1.5), typically after a peer shared a solution or asked for help.
7. **Learning evidence is thin but directional.** Twenty children completed the post-test and all answered correctly; 11 (55%) showed observable positive change, most often new visual representations (8 children).

## What the system actually does
Peers4U treats the solution, not the sentence, as the unit of peer interaction. A child first authors an independent solution in a workspace inherited from OpenCD — virtual manipulatives, freehand drawing, writing, and a spoken explanation — which supplies material for later discussion and gives a vision-language model the evidence to estimate the child's current understanding. From that [[student-modeling|profile]] the system generates four heterogeneous [[pedagogical-agent|pedagogical agents]] and assigns each a set of authentic child-produced artifacts, drawn from the OpenCD dataset plus researcher-written supplements rather than generated, because generated solutions came out overly polished and mature, missing the partial errors that make a peer's reasoning worth inspecting. Every artifact carries its construction history, so a child can replay the drags, strokes, and speech behind it and then question the peer about one specific step. Peers stay silent while a child is actively working and take initiative only after sustained operational silence, a deliberately damped form of [[human-ai-collaboration|mixed-initiative]] interaction.

## What the twenty-two children did
The study ran during summer break with 22 children (11 girls, 11 boys; mean age 7.00, range 6y0m–8y2m), 11 of whom had just finished [[early-childhood-elementary-ai-education|kindergarten]] and 11 Grade 1, in one of two group compositions of 11 children each. Each child worked on Subtraction with Regrouping on a 13-inch iPad Pro. Sessions lasted 41.5 ± 14.3 minutes (range 16.4–72.6) and covered 7.1 ± 1.9 learning topics. Children sent 17.5 ± 16.1 messages per session (range 0–79), and 73.8% of those messages concerned mathematical content, 14.0% coordination of the interaction, and 12.2% off-task conversation. One child ended the session early; the other 21 completed every topic the system orchestrated. The engagement that matters most for the design argument happened outside chat: 11 children returned to the workspace mid-lesson to build new artifacts, and 17 rated Peers4U more or somewhat more interesting than their usual [[math-education|mathematics]] lessons.

## Why learner-centered topics beat a persona baseline
The expert evaluation is the paper's cleanest comparison, because both variants were generated from the same interaction context. Peers4U's topic messages are authored against the learner's demonstrated understanding and a planned progression, while the baseline behaves like a vanilla agent: each peer initiates from its own cognitive state and history, which produces naturalistic peer-to-peer talk. Experts judged 91.7% of the learner-centered topics appropriate (both raters at 4 or above). The 13 that failed did so for content reasons — 6 rested on peer artifacts too weak to serve as learning examples, and 5 were misaligned with the underlying artifact and risked misleading the child. The 43 inappropriate baseline topics failed differently: they excluded the learner, or pitched above the child's level. Agreement was moderate but usable — 65.0% exact, 97.0% within one point, linearly weighted Cohen's κ = 0.466.

## Where the design ran into trouble
Two problems recur. The first is that [[agency|initiative]] is not the same as participation. Participation divided sharply across children, and the response-rate data show why wording matters — questions broadcast to the group or addressed to the learner drew more replies than questions aimed at another peer, and private chat drew most. The second is that children did not read expertise the way the system assumed. Every peer in the Leading Group condition was designed as advanced, yet children there did not perceive their peers as more capable, nor report more [[anxiety-and-stress|social pressure]]; they inferred ability from neatness, speed, and talkativeness, and one child concluded that a peer who kept discussing must be the weaker one: "I could tell right away—they just kept discussing it." Emotional escalation was visible too: one child covered his ears and said "I don't want to listen anymore," and another sent a blaming message and stopped responding for several topics after a peer praised a different method.

## What this means for practice

- **Instructors.** Do not hand a group of virtual peers to young children and let them run the discussion. The persona baseline produced plausible peer talk that excluded the learner in 72.1% of its inappropriate topics; sequence topics against what the child has shown, and give the child a role in each one.
- **Developers.** Make the artifact, not the chat box, the primary object of interaction. Children asked about specific drags and strokes, and 11 left the conversation to build and share new solutions when a peer's artifact gave them a reason to.
- **Developers.** Build [[scaffolding|follow-up ladders]] rather than a single prompt. Two follow-up turns, progressively more closed-ended and more directly addressed to the child, moved cumulative participation from 29.2% to 68.9% of group topics.
- **Researchers.** Treat peer composition as a design parameter with two payoffs. Leading Groups produced more additional artifacts (22 against 7); Mixed Groups produced more private [[help-seeking|help-oriented]] chat and stronger willingness to continue.

## Limitations

- The sample is 22 children aged 6–8, recruited through personal accounts on RedNote in one Chinese city; applicants who had already completed the Grade 2 curriculum were excluded to limit ceiling effects, so the design was never tested against children at that level.
- There was one researcher-present laboratory session on a single topic during summer break, with a small toy and a certificate as gifts; novelty effects cannot be separated from the engagement observed, and nothing is known about how interest or peer relationships evolve.
- There is no learning control condition and no delayed measure: the post-test came immediately after the lesson, so durable [[learning-gains|learning gains]] and [[transfer-of-learning|transfer]] remain unestablished; the persona baseline was rated offline by two experts and never entered children's interactions.
- The peer profiles and artifact assignments produced by the vision-language model and hand-crafted rules are unvalidated, group size and artifact count were held constant at four peers and roughly ten artifacts, and all four message-generation agents, including the topic orchestrator, ran on Gemini 3.6 Flash at temperature 0.

## Citation

Zheng, Z., Liu, B., Chen, W., Luo, L., Mei, Y., Cai, J., Yu, C., & Shi, Y. (2026). [*Peers4U: Designing Learner-Centered Virtual Peers for Children's Multimodal Mathematics Learning*](https://arxiv.org/abs/2610.37238). arXiv preprint arXiv:2610.37238.
