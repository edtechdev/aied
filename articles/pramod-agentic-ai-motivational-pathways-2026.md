---
title: "Agentic AI in educational environments and its association with social and motivational pathways to learning performance"
created: "2026-09-19T04:05:00-04:00"
updated: "2026-09-19T04:05:00-04:00"
type: article
foundations: [agentic-ai, human-ai-collaboration]
pedagogy: [self-determination-theory, motivation, student-engagement]
technology: [generative-ai, personalized-learning]
assessment: [self-report-measures, learning-gains]
methods: [quantitative-research]
research_method: [survey, structural equation modeling]
discipline: [business education]
level: [higher ed]
audience: [instructors, instructional designers, software developers, administrators]
sources: ['raw/papers/pramod-agentic-ai-motivational-pathways-2026.md']
confidence: medium
---

> **Synthesis:** Pramod and Patil surveyed 398 students enrolled in business and management programs across India who had already used AI-supported learning platforms, and tested one structural model with PLS-SEM: do [[agentic-ai|agentic AI]] environments reach perceived learning performance through motivation, through social presence, or both? Both pathways ran. Perceived autonomy was the strongest motivational driver (β = 0.504), ahead of competence (0.425) and relatedness (0.189); interactivity (0.468) and information sharing (0.323) built perceived social presence far more than a collaborative environment did (0.184). Motivation and social presence then predicted [[student-engagement|learner engagement]] at similar strength (0.533 and 0.493), and engagement predicted perceived learning performance at 0.671, the largest coefficient in the model. The authors read the result as a design argument: agentic AI should be built as a learning partner that protects autonomy and creates social presence, not as an automation layer. Every construct, performance included, was self-reported in a single cross-sectional wave.

## Key Findings

1. **Autonomy outran the other psychological needs.** Perceived autonomy fed [[motivation]] at β = 0.504 against competence at 0.425 and relatedness at 0.189, so participants responded most to agentic AI that let them steer the process rather than simply to what it could do for them.
2. **Social presence came from interaction, not collaboration.** Interactivity (0.468) and information sharing (0.323) both shaped perceived [[community-of-inquiry|social presence]] more strongly than the collaborative-environment construct did (0.184) inside the same model.
3. **Both pathways converged on engagement.** [[student-engagement|Engagement]] was predicted at 0.533 by learning motivation and 0.493 by social presence, and engagement was then the strongest predictor of perceived learning performance (0.671).
4. **The model held up statistically.** SRMR = 0.044 and NFI = 0.959 against a 0.08 threshold, with R² of 0.494 for motivation, 0.346 for social presence, 0.555 for engagement and 0.451 for perceived performance; all nine hypothesized paths were significant.
5. **Effect sizes were uneven, not uniform.** The indirect routes through relatedness were the weakest in the model (0.101 for relatedness to engagement via motivation, 0.068 through to performance), while autonomy and competence carried most of the motivational effect.
6. **"Performance" is a perception.** The outcome measure captures what learners believe they achieved, not grades, assignment outcomes or [[learning-gains|learning analytics]], and the authors say so explicitly.

## What the study did, and what it measured

The design is a perception-based survey rather than an evaluation of a system. Students in MBA, PGDM or BBA programs across several Indian business schools were invited by purposive sampling through institutional channels between October and December 2025, and 398 valid responses were analyzed in SmartPLS. Users of ChatGPT Agent, Claude with Agent and Grammarly AI Agents counted as examples of [[agentic-ai|agentic AI]]; the authors treat "agentic" as a learner perception and say plainly that they verified no tool's autonomy. The instrument combines Self-Determination Theory items (autonomy, competence, relatedness), [[community-of-inquiry|social presence]] constructs and measures of motivation, engagement and perceived performance, with factor loadings, composite reliability and AVE all clearing their thresholds.

## Two pathways into engagement, and where the weight sits

[[self-determination-theory|Self-Determination Theory]] supplies the first mechanism and it behaves conventionally here: needs satisfaction predicts motivation, and autonomy dominates. The authors connect that to what separates agentic AI from prompt-driven tools: it plans, recommends and reroutes learning paths, which students read as control over their own process. The second mechanism is social: the more responsive and information-rich the agent, the more learners reported a sense of human contact in an online class, which in turn fed engagement. The two paths were close enough (0.533 and 0.493) that the paper declines to rank them, arguing that motivation-only designs leave the social route on the table.

## What the authors take from it

The implications section addresses four audiences in turn. Institutions should design for psychological needs rather than information delivery. Educators and [[learning-design|instructional designers]] should add agentic AI as an aid that personalizes guidance and adaptive feedback while keeping human interaction intact. Developers should treat responsiveness, contextual feedback and collaboration facilitation as the features that manufacture perceived social presence. And because engagement carried the largest coefficient on the way to perceived performance, the authors argue that [[personalized-learning|personalization]] and motivational design matter more than automation depth. They close by naming what their data cannot speak to: implementation, instructional quality, cost, teacher workload and the shifting division of labor between educator and system.

## What this means for practice

- **Instructors.** Treat the agent as one participant in the course rather than the course itself: the model's social route ran through interaction and information sharing, which a responsive agent can supply, but the paper's own recommendation is to preserve educator-learner interaction alongside it.
- **Instructional designers.** Design for autonomy first — let learners set and revise goals with the agent — since that need produced the largest motivational coefficient, and resistance to being managed by a system is what the competence and relatedness coefficients are smaller than.
- **Developers and product teams.** Perceived social presence is a design output, not a nicety: responsiveness, contextual feedback and visible facilitation moved it more than a collaboration feature did (0.468 and 0.323 against 0.184).
- **Administrators.** This supports the psychological case for agentic AI, not the productivity case: nothing here shows better grades, so do not adopt on its strength without local outcome data.

## Limitations

- One cross-sectional survey wave of 398 purposively recruited business students in India, so the structural relations are associations at a single moment, and the authors state that no causal or long-term reading is warranted.
- Every construct including the outcome is a self-report measure, so perceived learning performance stands in for achievement; grades, assignment quality and analytics were not collected.
- Agentic capability was assumed rather than verified: no tool's actual autonomy or architecture was inspected, and participants may have used different underlying technologies under the same label.
- Potentially important variables were excluded by design — digital literacy, prior online learning experience, objective AI competence, age, institutional affiliation, voluntary versus required adoption, and the specific tools used.

## Connected Concepts

- [[agentic-ai]] — the technology class under study, operationalized here as a learner perception rather than a verified architecture
- [[self-determination-theory]] — the motivational mechanism, with autonomy, competence and relatedness all predicting motivation
- [[student-engagement]] — the hub of the model, carrying both the motivational and social pathways to the outcome
- [[motivation]] — measured as an endogenous construct and the stronger of the two mediators
- [[community-of-inquiry]] — the social presence construct the authors borrow, though from social presence theory rather than the CoI framework itself
- [[self-report-measures]] — every construct including the performance outcome was self-reported
- [[human-ai-collaboration]] — the paper's design argument for an agent as learning partner rather than automation layer
- [[personalized-learning]] — adaptive guidance and goal-directed paths are what participants read as autonomy support
- [[learning-gains]] — absent as a measured outcome, which is the study's central evidentiary gap
- [[higher-ed]] — Indian business and management programs, the setting for the sample

## Connected Articles

- [[ai-agents-peer-learning-discourse]] — agents in peer learning discourse, the social route this paper measures by perception
- [[student-motivation-need-satisfaction-genai-sdt-2026]] — need satisfaction and motivation with generative AI, the same theoretical frame
- [[school-support-ai-learning-anxiety-control-value-2026]] — motivational processes around AI-supported learning in a different context
- [[ai-chatbot-collective-efficacy-collaborative-learning]] — chatbot-supported collaboration and the social side of engagement
- [[simon-student-engagement-adaptive-learning-2026]] — engagement as the outcome of adaptive systems
- [[generative-ai-education-productivity-gaps]] — why perceived and measured outcomes diverge

## Citation

Pramod, D., & Patil, K. P. (2026). [*Agentic AI in educational environments and its association with social and motivational pathways to learning performance*](https://doi.org/10.1007/s44217-026-02168-4). *Discover Education*, 5(929).
