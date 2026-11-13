---
title: "The Social Cost of an AI Teammate: How an Artificial Teammate Reshapes Human-Human Communication in Small-Team Decision-Making"
created: "2026-11-10T18:45:46-05:00"
updated: "2026-11-10T19:25:00-05:00"
type: article
sources: ['raw/papers/nixon-social-cost-ai-teammate-2026.md']
source_url: "https://arxiv.org/abs/2607.27179v1"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [experiment]
methods: [quantitative-research, network-analysis]
level: [higher ed]
audience: [instructors, researchers]
foundations: [human-ai-collaboration]
pedagogy: [collaborative-learning]
technology: [conversational-ai, learning-analytics]
assessment: [group-work]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Nixon and colleagues (2026) put a [[conversational-ai|conversational AI]] into the role of a third teammate and asked what its presence does to the two humans, not to the task. In a randomized between-teams experiment at UC Irvine, 16 teams of two students plus an AI teammate and 17 all-human teams of three worked a high-stakes mountain-rescue moral dilemma over text chat for about eighteen minutes. Using Group Communication Analysis, team surveys, and lexical measures, they found the AI was the most talkative and most self-cohesive member of every treatment team yet carried the least new information and the lowest communication density. The humans paid for it: students in AI teams responded to and were taken up by one another less, reported lower belonging and status, and felt less valued the more airtime the AI dominated. Because four temporal probes found no change across the conversation, the authors argue the cost is a baseline property of having an AI on the team rather than something that develops during the discussion.

## Key Findings

1. **The AI took the most airtime in every treatment team.** It ranked first on participation in all 16 teams (paired difference +0.236, p < .001) and first or tied for first on internal cohesion in fourteen of sixteen (+0.076, dz = 1.12), threading its own turns together more tightly than its student teammates did.
2. **Volume did not buy substance.** The AI's contributions carried less new information (newness −0.100, dz = −1.37) and lower communication density (−0.174, dz = −1.42) than its student teammates', while its responsivity (p = .82) and social impact (p = .16) were statistically indistinguishable from theirs.
3. **Human-to-human exchange dropped, but only on relational dimensions.** Students in AI teams showed lower overall responsivity (0.065 vs. 0.098, p = .0017, g = −0.78), lower social impact (0.068 vs. 0.099, p = .0013, g = −0.78), and lower participation (−0.078 vs. −0.001, p = .007); cohesion, newness, and density did not differ, so the content students produced held up while the exchange around it thinned.
4. **Belonging and status fell with it.** Treatment students reported lower belonging (4.58 vs. 5.27 on the composite, p = .011) and lower status (−0.25 vs. +0.08, p = .003); three of those four between-condition effects survive a Bonferroni threshold of .0083, with belonging at the boundary.
5. **The more the AI dominated, the less valued students felt.** Across the 16 treatment teams, AI airtime dominance correlated negatively with per-team felt value (r = −0.52, p = .04), a relationship driven entirely by treatment teams.
6. **The cost was immediate, not cumulative.** Four event-locked temporal probes — socioemotional content, linguistic style matching, recurrence quantification, and deliberative-stance Markov analysis — all returned null between-condition contrasts (all p > .12), which the authors read as the cost being present from the start of the conversation.

## A teammate that fills the channel without adding to it

The study's first move is to describe the AI as a communicative participant rather than as a tool being evaluated. Group Communication Analysis treats every participant as a node in the team's discourse network and scores six dimensions: participation, internal cohesion, overall responsivity, social impact, newness, and communication density. Applied to 16 AI teams, the resulting profile is coherent and unflattering. The AI — a fixed persona called Clever Lamarr, running on Gemini 2.5 Flash Lite with a 50-token cap per generation — is high-volume, self-referential, and informationally thin. It talks more than either student, refers back to its own contributions, and neither responds to others nor receives more uptake than a typical student.

That last point matters for the paper's argument. The AI is not relationally privileged: students do not preferentially take it up. So the displacement cannot be explained by students deferring to a dominant authority. The authors call the pattern *relational displacement*: by occupying conversational bandwidth without prompting human-human elaboration, the AI crowds the exchange among students rather than adding a source of task input. They note this inverts the human-robot ripple literature, where a robot's vulnerable behavior catalyzed trust-related exchange among humans.

## The cost lands on the humans, not the content

The between-condition comparison is where the education-relevant finding sits. On the six GCA dimensions, students in AI teams scored lower everywhere, but only the relational dimensions reached significance. Responsivity and social impact — how often students build on one another and are built on in turn — dropped by roughly the same margin (g = −0.78 each), and per-student participation fell despite treatment teams containing one fewer human, which runs against what a pure group-size effect would predict. Newness and communication density did not differ: students in AI teams still introduced as much new and dense content as students in all-human teams.

The survey results converge on the same story from the students' side. Belonging, adapted from a work-group inclusion scale, was 4.58 in AI teams against 5.27 in all-human teams; perceived status, a composite of voice and influence, was negative in AI teams and slightly positive in controls. And the felt cost scaled with the AI's footprint: the more the AI dominated airtime relative to its student teammates, the less valued students felt as team members (r = −0.52). For [[group-work]] and [[collaborative-learning]], the practical implication is uncomfortable — a team can produce substantive content while the social fabric that makes collaboration worth doing erodes underneath it, and standard outcome measures would not show it.

## Immediate, not emergent — and what the design cannot rule out

The third question is developmental: does the social cost build as the team works through the difficult moment, or is it there from the start? The task was built to answer that, with a mid-conversation reveal that the stranded climber had ignored weather warnings, creating a designed moral perturbation. Four different temporal probes anchored to that reveal found no between-condition change over time. The authors treat the nulls as positive evidence for a baseline effect, though a null cannot establish that nothing would develop over a longer horizon; they list longitudinal, voice-based, and role-varied follow-ups as the next step.

The design is a between-teams substitution: two students plus AI versus three students. That keeps the AI a full participant but introduces a group-size confound at the level of human members, which the authors address rather than eliminate. Their defenses are that the primary outcomes are per-student measures that should not mechanically fall in smaller groups (if anything, smaller groups should make each student more central), and that the AI-role analysis compares the AI with its own teammates within treatment teams. The larger caveats — one persona, one modality, one session, one task — are acknowledged and left to the research program.

## What this means for practice

- **Cap the AI's share of the conversation, not just its role.** The strongest correlate of students feeling devalued was AI airtime dominance, so a participation budget (or a turn-taking rule that yields the floor after a contribution) targets the mechanism the study actually measured.
- **Structure peer-to-peer uptake explicitly.** The damage appeared in responsivity and social impact, not in content quality, so prompts that ask students to respond to a specific teammate's point protect the channel that thinned.
- **Measure belonging and perceived status alongside the task product.** In this study the artifact-level content held up while the team experience fell; a pilot that only grades the output will read as a success.
- **Watch per-student participation when group size shrinks.** Participation fell even though AI teams had one fewer human, which means the usual "smaller group, more airtime each" assumption did not hold.
- **Treat an AI teammate as a design intervention on the group, not an added resource.** The paper's framing — the test is not only what the machine does but what it does to the people teamed with it — is the right default for [[student-ai-interaction|student–AI interaction]] in group settings.

## Limitations

- The AI condition has two students and the control has three, a group-size confound the authors address analytically but cannot fully rule out; they argue per-student outcomes and within-team AI comparisons mitigate it.
- The sample is 33 teams and 80 undergraduates in one session at one university, with a single fixed persona, text-only chat, one moral-dilemma task, and an eighteen-minute window; generalization to other AI designs, modalities, and time scales is untested.
- The sample is gender-imbalanced — 63 female and 12 male students, with only three male students in the treatment condition — which precluded a clean gender-moderation analysis and motivated a female-only sensitivity check.
- Including the AI as a node in GCA creates a participant-count asymmetry between conditions; the authors z-standardize within the pipeline and lean on the survey outcomes as an independent check, but the discourse measures remain sensitive to it.
- Belonging (p = .011) does not clear the Bonferroni-corrected threshold of .0083 applied to the six between-condition tests, so it is the weakest of the four reported effects even though the direction is consistent.
- No learning outcome was measured: the study establishes a communication and belonging cost, not an achievement cost, and its temporal nulls show only that the cost did not change within one short conversation.

## Citation

Nixon, N., Choi, J., De Bastos, P. M., Samadi, M. A., Mehner, L., Park, S., & JaQuay, S. (2026). [*The Social Cost of an AI Teammate: How an Artificial Teammate Reshapes Human-Human Communication in Small-Team Decision-Making*](https://arxiv.org/abs/2607.27179v1). arXiv preprint.
