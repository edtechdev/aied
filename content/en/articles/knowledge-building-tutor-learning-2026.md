---
title: "Beyond prior knowledge: the predictive role of knowledge-building in tutor learning"
created: "2026-10-01T18:48:43-04:00"
updated: "2026-10-01T18:48:43-04:00"
type: article
sources: ['raw/papers/10.1007_s41237-026-00294-9.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [math education]
level: [middle school]
audience: [researchers, instructors, educational technology developers]
pedagogy: [learning-by-teaching, misconceptions]
technology: [pedagogical-agent, intelligent-tutoring, llm]
methods: [quantitative-research]
foundations: [ai-education, limitations-in-aied-research]
assessment: [learning-gains]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-01"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Ameen and colleagues (2026) ask what actually drives learning when a student teaches a [[pedagogical-agent|teachable agent]], and whether it is simply the prior knowledge they bring. Their answer centers on **knowledge-building**: responses that explain, justify, or address a misconception, as opposed to knowledge-telling that restates what is already known. In a five-day study, 23 middle-school students taught SimStudent in the APLUS environment while an adaptive follow-up framework called ExpectAdapt — three stacked [[llm|LLMs]] that generate an expected response, detect misalignment, then ask a tailored question — pressed them to elaborate. Students gained significantly on both conceptual and procedural tests, and the proportion of knowledge-building responses predicted conceptual post-test scores independently of prior knowledge. The finding that matters most for equity: low-prior students who produced many knowledge-building responses finished statistically level with their high-prior peers, and prior knowledge did not predict who would manage it.

## Key Findings

1. Conceptual and procedural learning both improved across the intervention: mean conceptual scores rose from 0.78 to 0.90 (t(22) = −4.47, p < 0.001) and procedural scores from 0.70 to 0.81 (t(22) = −2.68, p < 0.05).
2. Prior knowledge did not predict knowledge-building. The paths from conceptual and procedural pre-test scores to the proportion of knowledge-building responses (%KBR) were not significant (β = .440, p = .10 and β = .206, p = .16), which the authors read as evidence that the behavior is prompted by the agent's questioning rather than being a facet of prior understanding.
3. Knowledge-building did predict conceptual post-test performance (β = .138, p < 0.05), though the effect was roughly half that of conceptual pre-test on the same outcome (β = .301, p = .001).
4. Procedural pre-test predicted conceptual post-test (β = .157, p = .001), but the reverse path did not hold — the bidirectional relationship between the two knowledge types that earlier work reported was not replicated here.
5. Among low-prior students, those who produced more knowledge-building responses outperformed their low-%KBR peers at post-test (t(8) = 4.4, p < 0.01) despite no significant difference between the groups at pre-test (t(9) = 1.1, p = 0.32), and their post-test scores were statistically equivalent to high-prior students'.
6. The pattern differed for high-prior students: their prior knowledge correlated with knowledge-building (%KBR against conceptual pre-test r(9) = 0.76, p < 0.05; against procedural pre-test r(9) = 0.64, p < 0.05), and splitting them by knowledge-building produced no post-test difference (t(2) = −0.20, p = 0.24).
7. In the low-prior group the correlations between knowledge-building and prior knowledge were absent (r(9) = 0.21, p = 0.54 for conceptual and r(9) = 0.15, p = 0.67 for procedural), so their knowledge-building was not explained by what they already knew.
8. A qualitative trace shows the mechanism: a low-prior tutor first wrongly disputed the agent's correct algebra step with incoherent reasoning, then, after an adaptive follow-up question, corrected themselves and explained why the step isolated the variable — and in a later interaction produced a knowledge-building response after only one follow-up.

## The intervention

The setting is APLUS (Artificial Peer Learning Using SimStudent), a learning-by-teaching environment in which the student acts as tutor to SimStudent. The problem it addresses is a known default in [[learning-by-teaching]]: tutors lapse into knowledge-telling rather than the knowledge-building that produces learning. ExpectAdapt is the response — three stacked LLMs, an Expected Response Generator that drafts what a knowledge-building answer would look like (prompted to act as an expert algebra tutor), an Alignment Detector that compares the tutor's actual response to it, and a follow-up question generator that asks something tailored to the gap. The design bet is that persistent, adaptive questioning creates the [[desirable-difficulties|impasse]] moments that push a tutor from reciting to explaining.

## The study

Twenty-three middle-school students (grades 6 to 8) from across the United States took part voluntarily, with parental consent and compensation at $15 an hour, in a pretest–intervention–posttest design run in person or over Zoom for one hour a day across up to five days. The final day ended with a 30-minute isomorphic post-test. Outcomes came from an equation-solving instrument adapted from earlier work, split into a Procedural Skill Test and a Conceptual Knowledge Test; a procedural-flexibility module had too few items to analyze on its own and was folded into the procedural measure. Knowledge-building was operationalized as %KBR: the proportion of a tutor's responses to the agent's follow-up questions that were classified as knowledge-building.

## What the results mean for who benefits

The paper's argument is that knowledge-building acts as a sensor of learning rather than a byproduct of ability. For high-prior students it looks like an existing capacity — it correlates with their prior knowledge and does not change their outcomes, because they would have scored well anyway. For low-prior students it is the mechanism through which the gap closes, and since it does not correlate with their prior knowledge, the adaptive questioning is doing the work rather than selecting for students who were already prepared. That reframes what a teachable agent is for: not a way to give strong students a chance to consolidate, but scaffolding that can put weaker students on the same footing.

## What this means for practice

- **Instructors using learning-by-teaching.** Design for explanation, not recitation. The measure that predicted learning here was the share of responses that built knowledge, and the agent's job was to keep asking until the tutor produced one.
- **Educational technology developers.** The three-LLM split is a reusable pattern: generate the target response, detect the gap, then ask about the gap. Scripted follow-up questions had previously produced procedural but not conceptual gains, which is what the adaptive layer is for.
- **Instructors and designers worried about prior-knowledge gaps.** Do not pre-select for prepared students. Prior knowledge did not predict who would engage in knowledge-building, and low-prior students who did engage finished level with high-prior peers ([[learning-gains]]).
- **Researchers.** Treat the correlational result as a hypothesis for an experiment rather than an established effect; the authors themselves name a randomized controlled trial as the next step ([[limitations-in-aied-research]]).

## Limitations

- **Correlational, by the authors' own statement.** Path analysis establishes associations in this dataset, not causal effects, and the authors plan a randomized controlled trial to test them.
- **Twenty-three students, five days, one topic.** The sample is small, participation was voluntary, the intervention was short, and the mathematics is equation solving, so the group-level comparisons in particular rest on very few cases.
- **Knowledge-building was measured by classification.** %KBR depends on coding tutor responses as knowledge-building or knowledge-telling, and the paper reports no inter-rater agreement for that coding.
- **One prior result did not replicate.** The bidirectional relationship between conceptual and procedural knowledge reported in earlier work appeared in only one direction here, which the authors flag rather than explain.

## Citation

Ameen, F., Shahriar, T., Mallavarapu, A., Jiang, S., & Matsuda, N. (2026). [*Beyond prior knowledge: the predictive role of knowledge-building in tutor learning*](https://doi.org/10.1007/s41237-026-00294-9). *Behaviormetrika*, 53, 673–695.