---
title: "The Social Cost of an AI Teammate: How an Artificial Teammate Reshapes Human-Human Communication in Small-Team Decision-Making"
created: "2026-11-10T18:45:46-05:00"
updated: "2026-11-14T11:30:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Nixon and colleagues (2026) put a [[conversational-ai|conversational AI]] into the third seat of a student team and asked what its presence does to the two humans, not the task. In a randomized between-teams experiment, treatment teams of two students plus an AI and all-human teams of three worked a mountain-rescue moral dilemma over text chat for eighteen minutes. The AI was the most talkative and most self-referential member of every treatment team while adding the least new information. The humans paid: students built on one another less, reported lower belonging and status, and felt less valued the more airtime the AI took. Temporal probes found no change across the conversation, which the authors read as a baseline property of having an AI on the team, not something that develops.

## Key Findings

1. **The AI took the most airtime in every team.** It ranked first on participation in all sixteen treatment teams, well ahead of both student teammates, and stitched its own turns together more tightly than they did.
2. **Volume did not buy substance.** Its turns carried less new information and were less densely connected to the rest of the conversation, while students responded to it no more than they responded to each other.
3. **Students in AI teams built on each other less.** Responsivity and social impact — how often students picked up a teammate's point and were picked up in turn — both fell by a similar and substantial margin, while the content measures held.
4. **Belonging and status fell with them.** Students reported markedly lower belonging and lower perceived status, though belonging sat at the edge of the corrected significance threshold and is the weakest of the reported effects.
5. **The more the AI dominated, the less valued students felt.** Across the treatment teams, greater AI airtime went with lower felt value, a relationship that came entirely from AI teams.
6. **The cost was immediate, not cumulative.** Four independent probes, each anchored to the designed moral reveal mid-conversation, found no change in the gap across the discussion, so the pattern was present from the opening exchange rather than building as the team worked.

## A teammate that fills the channel without adding to it

The study's first move is to describe the AI as a communicative participant rather than as a tool being evaluated. Group Communication Analysis treats every participant as a node in the team's discourse network and scores six dimensions: participation, internal cohesion, overall responsivity, social impact, newness, and communication density. Applied to 16 AI teams, the resulting profile is coherent and unflattering. The AI — a fixed persona called Clever Lamarr, running on Gemini 2.5 Flash Lite with a 50-token cap per generation — is high-volume, self-referential, and informationally thin. It talks more than either student, refers back to its own contributions, and neither responds to others nor receives more uptake than a typical student.

That last point matters for the paper's argument. The AI is not relationally privileged: students do not preferentially take it up. So the displacement cannot be explained by students deferring to a dominant authority. The authors call the pattern *relational displacement*: by occupying conversational bandwidth without prompting human-human elaboration, the AI crowds the exchange among students rather than adding a source of task input. They note this inverts the human-robot ripple literature, where a robot's vulnerable behavior catalyzed trust-related exchange among humans.

## The cost lands on the humans, not the content

The between-condition comparison is where the education-relevant finding sits. On the six GCA dimensions, students in AI teams scored lower everywhere, but only the relational dimensions reached significance. Responsivity and social impact — how often students build on one another and are built on in turn — dropped by roughly the same margin, and the drop was reliable in both cases. Per-student participation fell as well, despite treatment teams containing one fewer human, which runs against what a pure group-size effect would predict. Newness and communication density did not differ: students in AI teams still introduced as much new and dense content as students in all-human teams.

The survey results converge on the same story from the students' side. Belonging, adapted from a work-group inclusion scale, averaged 4.58 in AI teams against 5.27 in all-human teams; perceived status, a composite of voice and influence, was negative in AI teams and slightly positive in controls. And the felt cost scaled with the AI's footprint: the more the AI dominated airtime relative to its student teammates, the less valued students felt as team members. For [[group-work|group work]] and [[collaborative-learning|collaborative learning]], the practical implication is uncomfortable — a team can produce substantive content while the social fabric that makes collaboration worth doing erodes underneath it, and standard outcome measures would not show it.

## Immediate, not emergent — and what the design cannot rule out

The third question is developmental: does the social cost build as the team works through the difficult moment, or is it there from the start? The task was built to answer that, with a mid-conversation reveal that the stranded climber had ignored weather warnings, creating a designed moral perturbation. Four different temporal probes anchored to that reveal found no between-condition change over time. The authors treat the nulls as positive evidence for a baseline effect, though a null cannot establish that nothing would develop over a longer horizon; they list longitudinal, voice-based, and role-varied follow-ups as the next step.

The design is a between-teams substitution: two students plus AI versus three students. That keeps the AI a full participant but introduces a group-size confound at the level of human members, which the authors address rather than eliminate. Their defenses are that the primary outcomes are per-student measures that should not mechanically fall in smaller groups (if anything, smaller groups should make each student more central), and that the AI-role analysis compares the AI with its own teammates within treatment teams. The larger caveats — one persona, one modality, one session, one task — are acknowledged and left to the research program.

## What this means for practice

- **Instructors:** Cap the AI's share of the conversation, not just its role. The strongest correlate of students feeling devalued was AI airtime dominance, so a participation budget, or a turn-taking rule that yields the floor after one contribution, targets the mechanism the study actually measured.
- **Instructors:** Structure peer-to-peer uptake explicitly. The damage appeared in responsivity and social impact, not in content quality, so prompts that ask students to respond to a specific teammate's point protect the channel that thinned.
- **Course designers:** Measure belonging and perceived status alongside the task product. Here the artifact-level content held up while the team experience fell, so a pilot that only grades the output will read as a success.
- **Researchers:** Watch per-student participation when group size shrinks. Participation fell even though AI teams had one fewer human, which means the usual "smaller group, more airtime each" assumption did not hold.
- **Administrators:** Treat an AI teammate as a design intervention on the group, not an added resource. The paper's framing — the test is not only what the machine does but what it does to the people teamed with it — is the right default for [[student-ai-interaction|student–AI interaction]] in group settings.

## Limitations

- The AI condition has two students and the control has three, a group-size confound the authors address analytically but cannot fully rule out; they argue per-student outcomes and within-team AI comparisons mitigate it.
- The sample is 33 teams and 80 undergraduates in one session at one university, with a single fixed persona, text-only chat, one moral-dilemma task, and an eighteen-minute window; generalization to other AI designs, modalities, and time scales is untested.
- The sample is gender-imbalanced — 63 female and 12 male students, with only three male students in the treatment condition — which precluded a clean gender-moderation analysis and motivated a female-only sensitivity check.
- Including the AI as a node in GCA creates a participant-count asymmetry between conditions; the authors z-standardize within the pipeline and lean on the survey outcomes as an independent check, but the discourse measures remain sensitive to it.
- Belonging does not clear the Bonferroni-corrected threshold applied to the six between-condition tests, so it is the weakest of the four reported effects even though the direction is consistent.
- No learning outcome was measured: the study establishes a communication and belonging cost, not an achievement cost, and its temporal nulls show only that the cost did not change within one short conversation.

## Citation

Nixon, N., Choi, J., De Bastos, P. M., Samadi, M. A., Mehner, L., Park, S., & JaQuay, S. (2026). [*The Social Cost of an AI Teammate: How an Artificial Teammate Reshapes Human-Human Communication in Small-Team Decision-Making*](https://arxiv.org/abs/2607.27179v1). arXiv preprint.
