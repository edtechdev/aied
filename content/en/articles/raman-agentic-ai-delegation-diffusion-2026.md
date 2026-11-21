---
title: "From Generative AI to Agentic AI in Higher Education: A Behavioural Experiment on Delegation Using Diffusion of Innovations"
created: "2026-11-21T08:20:00-05:00"
updated: "2026-11-21T08:20:00-05:00"
type: article
published: "2026"
discipline: [learning sciences]
foundations: [agentic-ai, teacher-role]
pedagogy: [professional-training]
technology: [generative-ai, human-in-the-loop-ai, edtech-platform]
assessment: [automated-question-generation, assessment]
institutions: [governance]
ethics: [trust, automation-bias]
methods: [quantitative-research]
research_method: [experiment]
audience: [instructors, faculty developers, instructional designers, administrators, researchers]
level: [higher ed]
page_kind: [evaluation]
sources: ['raw/papers/raman-agentic-ai-delegation-diffusion-2026.md']
confidence: medium
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.3390/educsci16111941"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [agentic-ai, generative-ai, technology-acceptance-model, human-in-the-loop-ai, trust, edtech-platform, governance]
connected_articles: []
---

> **Synthesis:** Raman, Tang and Nedungadi ask what changes when a [[generative-ai|generative AI]] tool that drafts becomes an [[agentic-ai|agentic AI]] system that can act inside an [[edtech-platform|LMS]] under teacher oversight. They randomly assigned 290 university teachers to a drafting-only scenario or an LMS-integrated agentic scenario and recorded step-by-step choices across a six-step quiz preparation and release workflow, combining delegation choices, autonomy preferences, and permission grants into the "Agentic Use Behaviour Index." Teachers in the agentic scenario chose AI support for more steps, but the gain sat almost entirely on content drafting: 92% delegated question writing, while 77% kept release scheduling manual. Most preferred constrained autonomy, with 48% choosing draft-only actions and only 5% choosing auto-publish. The five Diffusion of Innovations attributes plus controls explained about two-thirds of the variance, with perceived complexity operating as oversight burden. The task records choices, not sustained use, and the scenarios bundled several differences, so the result identifies delegation thresholds at the point of decision rather than routine practice.

## Key Findings

- **The line was between drafting and doing.** Delegation was near-universal for content-heavy steps and fell away for platform actions: 92% of agentic-condition teachers delegated question writing and 85% the answer key, against 51% for creating the quiz shell, 25% for configuring settings, and 20% for scheduling releases.
- **Assignment to the agentic scenario raised non-manual engagement overall**, by just under one step (4.07 of six against 3.19), but the increase concentrated in content drafting (2.76 against 1.99 of three) and was negligible for platform actions (1.31 against 1.19).
- **Autonomy stayed constrained.** In the agentic condition, 48% selected draft-only LMS actions, 35% approval-gated publishing, 12% suggestions only, and 5% auto-publish.
- **Permissions followed least privilege.** 60% would allow creating LMS drafts, 54% scheduling releases with approval, 41% drafting gradebook or feedback entries, and 33% would grant none of them.
- **Perceived innovation attributes explained much of the variation.** Relative advantage, compatibility, and trialability were positively associated with the index, complexity was negatively associated, and observability was not significant.
- **Complexity mattered where there was something to oversee.** Its negative association with non-manual engagement appeared in the agentic scenario and not in the drafting-only scenario.
- **Adoption formed a ladder, not a split.** Exploratory clustering suggested four profiles, from Cautious Sceptics (12%) through Draft Delegators (34%) and Workflow Delegators (17%) to Automation-Confident (37%).

## A quiz workflow with real choices

The study was a between-subjects, instrumented behavioral-choice experiment. Of 364 responses, 74 (20.3%) were excluded by data-quality screens applied after assignment — all completed in under 180 seconds, below the full-sample median of 476 seconds, with some also failing a comprehension gate and an attention check — leaving 290 practicing university teachers, 140 in the GenAI condition and 150 in the agentic condition. Exclusion rates did not differ between conditions, and the realized groups were balanced on gender, discipline, experience, class size, prior AI use, and AI self-efficacy; perceived risk concern was somewhat lower in the agentic group, which the authors treat as a manipulation-related difference because it was measured after the scenario.

Both scenarios described AI drafting of teaching content, but they differed in LMS integration, in whether delegation was possible, and in approval safeguards. Participants then made a choice for each of six standardized steps: drafting questions, creating the answer key, creating the LMS quiz shell, configuring settings, scheduling the release window, and drafting the announcement. The GenAI condition offered manual completion or drafting plus manual implementation; the agentic condition added [[human-in-the-loop-ai|delegation in draft mode with teacher approval]] before publishing. Autonomy preferences used a four-level scale and permissions a select-all list, producing a composite index from 0 to 12. Measurement quality was acceptable, and the manipulation check confirmed that the agentic scenario was perceived as action-taking (mean 5.33 on a seven-point scale against 2.82 in the GenAI condition). Mean completion time was 8.9 minutes.

## The content–platform boundary

Within the agentic condition, teachers delegated a mean of 3.21 of the six steps, but the choices were uneven: delegation rates were highest for question writing (92%) and the rubric (85%), then fell through the quiz shell (51%), settings (25%), and release scheduling (20%). Non-manual engagement averaged 2.76 of three for content steps against 1.31 of three for platform steps, a gap that survived adjustment for prior AI use, experience, discipline, gender, and self-efficacy. In the GenAI condition, teachers chose AI assistance for 3.19 of six steps even though the tool could not touch the platform.

Comparing conditions, non-manual engagement was higher in the agentic scenario (4.07 against 3.19), but the decomposition showed why: content-drafting engagement rose sharply (2.76 against 1.99) while platform-action engagement barely moved (1.31 against 1.19). Fully manual completion for settings and release windows was chosen by 67% and 77% of agentic-condition teachers respectively. The authors are careful about attribution: the scenarios differed simultaneously in action capability, LMS integration, approval safeguards, and response options, so the boundary is an effect of assignment to one scenario as a whole, not of any single feature.

## What predicted delegation

In the agentic condition, a multiple regression of the index on the five [[technology-acceptance-model|Diffusion of Innovations]] attributes, controlling for risk concern, AI self-efficacy, and prior AI use, explained about two-thirds of the variance. Relative advantage, compatibility, and trialability were positively associated with delegation; complexity — worded as supervision and verification burden — was negatively associated; observability was not significant. The pattern held across four alternative weightings of the composite, a count model on delegation breadth, and an ordinal model on autonomy level, although the weaker paths were sensitive to weighting.

An exploratory extension found that complexity moderated the scenario effect: anticipated oversight burden was strongly associated with lower engagement in the agentic condition and essentially unrelated in the drafting-only condition, suggesting that supervision cost is a [[trust]] and verification problem that matters mainly when there is an agent to supervise. Cluster analysis of the three index components suggested four adopter archetypes arranged along a permission ladder — Cautious Sceptics, Draft Delegators, Workflow Delegators, and the Automation-Confident — with bootstrap stability that the authors describe as acceptable rather than exceptional, and with uneven distribution across disciplines and experience bands. Even the most delegation-ready group mostly chose approval gates rather than auto-publish.

## What this means for practice

- **Faculty developers.** Move training from prompting toward supervision: checking alignment with learning outcomes, spotting fabricated references, validating settings, and deciding which steps stay manual at first.
- **Instructors.** Expect to hand over drafting quickly while keeping scheduling and publishing in your own hands; the study's teachers did exactly that, and framing the boundary explicitly is more useful than assuming broad adoption.
- **Instructional designers.** Build draft-first defaults, explicit approval gates, staged permissions, and sandbox shells, matching the constrained autonomy most teachers chose.
- **Administrators.** Use least-privilege permission tiers and clear rules on acceptable agentic support in assessment; approval-gated publishing is both a teacher preference and a [[governance|governance mechanism]].
- **Developers.** Make verification faster than redoing the work: action summaries, preview and diff views, rollback, audit trails, and permission controls that a teacher can raise gradually. Field replication with live systems and LMS logs remains the priority for researchers.

## Limitations

- The task records choices at the point of deciding, not sustained use, and field replication using LMS logs and within-subjects designs remains necessary.
- Perceptions and choices were collected in one session; some attribute items sit close in wording to the response options, and ratings may partly rationalize choices already made.
- Respondents' country and institution were not recorded, so the sample's geographic and institutional composition cannot be described or related to policy and LMS maturity.
- Screening removed about a fifth of respondents at the same rate in both conditions, which protects internal validity but likely favors teachers already comfortable distinguishing AI systems.
- The observability scale covered peer use, noticeable benefits, and demonstrations, not the system's own conduct, so a broader assurance construct may perform differently.
- The four archetypes come from an exploratory cluster analysis with acceptable rather than exceptional stability, and agentic capabilities and governance are changing quickly.

## Citation

Raman, R., Tang, K.-Y., & Nedungadi, P. (2026). [From Generative AI to Agentic AI in Higher Education: A Behavioural Experiment on Delegation Using Diffusion of Innovations](https://doi.org/10.3390/educsci16111941). *Education Sciences, 16*(11), 1941.
