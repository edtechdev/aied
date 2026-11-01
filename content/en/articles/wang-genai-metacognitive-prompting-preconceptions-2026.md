---
title: "GenAI-based metacognitive prompting in collaborative inquiry: A comparison across diverse preconception groups"
created: "2026-11-01T06:30:00-05:00"
updated: "2026-11-01T06:30:00-05:00"
type: article
sources: ['raw/papers/wang-genai-metacognitive-prompting-preconceptions-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [quasi-experiment]
discipline: [physics education, science education, learning sciences]
level: [teacher education, higher ed]
audience: [instructors, educational technology developers, researchers, policymakers]
technology: [generative-ai, conversational-ai, llm, speech-and-voice-technologies]
methods: [mixed-methods-research, network-analysis]
ethics: [privacy, differential-effects-across-learner-groups]
foundations: [human-ai-collaboration]
pedagogy: [metacognition, collaborative-learning, inquiry-based-learning, prior-knowledge, scaffolding, student-ai-interaction, sociocultural-learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Groups of pre-service teachers asked a learner-initiated [[metacognition|metacognitive]] chatbot almost the same kinds of questions whether their preconceptions about energy differed or matched. What diverged was uptake. Groups with different preconceptions kept their evaluation of the AI positive or neutral and routed AI query negotiation through conceptual and task talk; similar-preconception groups settled into a linear query-then-process path and sustained negative evaluation. The pushback is the convergence: diversity changed how GenAI was taken up, not what learners asked, and some negativity may belong to a proactive speaking agent.

## Key Findings

1. Of 39 [[generative-ai|GenAI]] prompts retained for analysis (D groups 18, S groups 21), principle-based explanatory prompting was the most frequent function in both conditions (D 6, S 7), followed by interaction management and response-boundary prompting (D 4, S 8) and conceptual elaboration (D 4, S 3).
2. Twelve of the 39 prompts were interaction management and response-boundary responses, mostly triggered by brief informational follow-ups such as "What about a ping-pong ball?" after a question about tennis ball weight; the chatbot asked learners to clarify scope instead of answering.
3. Procedural prompting appeared only in D groups and only twice (n = 2), so it is reported descriptively.
4. Both lag-1 transition matrices showed non-random sequential structure: D groups χ2(256) = 1385.30, p < 0.001; S groups χ2(256) = 1377.00, p < 0.001.
5. Shared self-loops covered concept statement, AI query negotiation, task coordination, concept confusion, shared monitoring and AI functionality discussion, plus two shared cross-category transitions (COG2 → COG1 and TAS1 → TAS3). The strongest was TEC1 → TEC1: D observed 60, transition probability 0.67, adjusted residual 16.44, Yule's Q 0.95; S observed 43, 0.55, 14.53, 0.92.
6. The evaluative loops ran opposite ways. Only D groups showed a positive or neutral evaluation self-loop (TEC2 → TEC2: observed 15, probability 0.48, adjusted residual 12.32, Yule's Q 0.95). Only S groups showed a negative evaluation self-loop (TEC3 → TEC3: 12, 0.39, 10.27, 0.92), alongside MET1 → MET1 (11, 0.42, 11.64, 0.95), TAS3 → TAS3 (9, 0.16, 2.70, 0.47) and COG1 → COG2 (11, 0.09, 2.82, 0.47).
7. Process mining put concept confusion at f = 87 and case coverage 88.9% in D groups against f = 36 and 57.1% in S groups, while task agreement ran f = 58 in S groups against f = 29 in D groups, with case coverage slightly higher in D groups (88.9%) than in S groups (85.7%).
8. AI query negotiation (TEC1) was an integration hub in D groups, with three incoming and two outgoing paths, most often preceded by concept statement (f = 10, cc = 55.6%) and followed by task coordination (f = 5, cc = 22.2%) or AI functionality discussion (f = 4, cc = 22.2%). In S groups it had one incoming and one outgoing path, preceded only by self-monitoring (f = 3, cc = 14.4%) and followed by AI functionality discussion (f = 6, cc = 23.8%).
9. The two group types did not differ on [[prior-knowledge|prior knowledge]] (U = 293.50, Z = −0.65, p = 0.515; D M = 2.1, SD = 1.0; S M = 2.2, SD = 0.7, maximum score 5), nor on emotional valence, task interest, perceived difficulty or confidence.
10. Coding reliability came from two independent rounds at Cohen's kappa 0.600 and 0.736 overall; final per-dimension kappas were COG 0.700, TAS 0.931, TEC 0.887, MET 0.810 and AFF 0.612.
11. A sensitivity analysis on a non-duplicated dataset kept all nine significant D transitions and nine of the twelve S transitions, with all 21 in the same direction; the three that fell below z = 2.58 had adjusted residuals of 2.70 to 2.82.

## How the study was built

Fifty-two [[teacher-education|pre-service teachers]] at a Finnish university worked in 14 groups of 3-4 members, face to face in a laboratory with one shared computer per group and 60 minutes to complete a [[inquiry-based-learning|collaborative inquiry]] task on energy forms and conservation in the Go-Lab simulation platform. Metacognitive prompting came from a chatbot interface powered by GPT-4-32K, called the written MAI, and fired only when a group submitted a query, so it functioned as an on-demand regulatory resource. A rule-based speaking MAI also delivered proactive shared-regulation prompts under an identical rule set in both conditions; the authors treat it as a [[scaffolding|standardized scaffold]] rather than a variable.

Group classification rested on a five-item multiple-choice pretest adapted from Park (2020), three items adapted and two developed with the classroom teacher; low inter-item correlations (0.05 < |r| < 0.28) showed the items tapped separate conceptual dimensions. Groups counted as having similar preconceptions (S, 6 groups) when all members independently chose the same response option on at least three of the five items; the rest were different preconceptions (D, 8 groups).

Video and system logs supplied the data, with transcripts machine-translated from Finnish to English and reviewed by bilingual researchers. Each prompt delivery anchored an episode of up to 20 utterances before and 20 after, yielding 595 utterances from D groups and 785 from S groups; one D group never used the written MAI. Coding produced five categories and seventeen codes, with the technology-interaction codes modeled on a help-seeking scheme. Lag-1 transitions were computed within episodes and tested with Pearson's chi-square under Monte Carlo simulation (10,000 replicates), with adjusted residuals and Yule's Q, reporting transitions only when observed frequency exceeded 5 and the adjusted residual 2.58. Process maps came from Fluxicon Disco, with each episode as a case, scored by absolute frequency and case coverage.

## The prompts converged; the uptake did not

The functional comparison is the surprise here. Groups asked 18 and 21 questions, with largely overlapping rank orderings of prompt function. Preconception diversity did not change what learners brought to the AI. Three reasons are offered: the task was fixed, which narrowed the legitimate question space; the contrast was diversity rather than knowledge level, since pretest scores were equivalent; and the comparison sat at the content layer, not the interactional process layer, where preconceptions may do their work.

The mismatch sits in the same table: 12 of 39 prompts were interaction management and response-boundary responses, because short informational follow-ups met a design that asks for clarification. That is metacognitive prompting working as intended, but it shows learners asking for what the system was not built to give.

## Opposite evaluative loops, with a speaking agent in the background

Here the conditions part. D groups sustained positive or neutral evaluation of MAI output across adjacent turns; S groups sustained negative evaluation. That is not evidence that groups with different preconceptions like GenAI more: the authors read it as the MAI serving D groups as an external reference point while they negotiated divergent understandings.

S groups also showed recurrent task agreement, in both the sequential self-loop and the process map, which suggests local alignment had already been reached and that proactive regulatory prompts may have felt unnecessary or badly timed. Raw-data inspection showed the S groups' MET1 → MET1 pattern came mainly from the speaking MAI, the proactive voice agent, so the negative evaluative loop may partly record reactions to that agent rather than to the written prompts. They connect this to work showing proactive assistant support is evaluated negatively when perceived as unnecessary, intrusive or misaligned with users' sense of competence, and conclude that negative evaluation marks a mismatch of timing, modality and necessity rather than a rejection of AI.

## In one condition the AI sat at a hub; in the other it sat on a line

Every case was a unique interaction variant (D 18/18, S 21/21), so the maps describe heterogeneity before contrast. The differences that remain are structural. D groups carried far more concept confusion (f = 87, 88.9% case coverage) than S groups (f = 36, 57.1%), while S groups produced task agreement more often but not across more cases. The authors read that through a divergent-versus-convergent lens: mismatched frameworks force repeated epistemic negotiation, while a shared framing allows consensus to be reaffirmed. They call the reading tentative: pacing and verbal style could produce the same pattern.

The more substantive difference is where AI query negotiation sat. In D groups it was an integration hub, three incoming and two outgoing paths, reached from concept statement in more than half of cases and leaving toward task coordination and AI functionality talk. In S groups it lay on a linear path, entered from self-monitoring and leaving toward output processing. The authors describe the D pattern as engaging the MAI as a partner in conceptual elaboration, close to the view of tools as reorganizers rather than amplifiers of cognition, and they flag the S-group antecedent as resting on thin evidence.

## What this means for practice

- **Instructors.** Treat preconception diversity as a group-formation variable with interactional consequences. Groups whose members reason differently turned the AI into a shared reference point for arguing out concepts, while groups that already agreed used it as a lookup and moved on; they need different framing from you.
- **Designers.** Add a request-classification layer in front of the metacognitive prompt. Twelve of the 39 prompts met short informational requests with scope clarification, which preserved the regulatory stance but left the question unanswered.
- **Researchers.** Analyze uptake, not just prompt distribution. Identical prompt counts and functions coexisted with opposite evaluative loops and different network positions for the same interaction code.
- **Policymakers.** Fund GenAI in collaborative settings as a co-regulator whose value depends on interactional integration, not as a content delivery channel; the same model produced reflective dialogue in one group configuration and an output-processing habit in another.

## Limitations

- Coding ran on English translations of Finnish transcripts, so tone, pauses and socio-emotional expression were partly lost even with bilingual review and consensus validation.
- The analysis is window-anchored around written MAI requests, which captures prompt uptake but not how prompting accumulates across a longer collaborative process.
- The written MAI was built to give metacognitive prompts while some learner inquiries were procedural or information-seeking, a design mismatch the authors name.
- Groups had a single 60-minute task on one topic, so nothing here speaks to repeated exposure or to other subject matter.
- The process-mining flows are descriptive and were not significance-tested, and the proposed S-group antecedent for AI query negotiation rests on thin case coverage.
- Cell counts are small in places, with procedural prompting appearing only twice and only in D groups.

## Citation

Wang, M., Lämsä, J., Sobocinski, M., Edwards, J., Whitehead, R., & Järvelä, S. (2026). [GenAI-based metacognitive prompting in collaborative inquiry: A comparison across diverse preconception groups](https://doi.org/10.1111/bjet.70095). *British Journal of Educational Technology, 00*, e70095.