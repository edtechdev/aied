---
title: "Towards Scalable Measurement of Durable Skills"
created: "2026-09-15T11:05:00-04:00"
updated: "2026-09-17T02:30:30-04:00"
type: article
foundations: [agentic-ai, critical-thinking, human-ai-collaboration]
pedagogy: [collaborative-learning, creativity]
technology: [simulating-students]
assessment: [assessment, educational-measurement, group-work]
sources: ['raw/papers/durable-skills-measurement-ai-teammates-2026.md']
confidence: high
research_method: [experiment, user study, quantitative]
audience: [assessment designers, researchers, edtech designers]
level: [higher ed, secondary]
methods: [ai-ed-evaluation]
---

> **Synthesis:** [[problem-solving|Collaborative problem solving]], [[creativity]] and [[critical-thinking]] are the skills employers most want and educational systems least measure, because valid assessment demands either naturalistic group interaction or psychometric control, and the two pull apart. This paper's proposal is an "Executive LLM" that plays every AI teammate in a group task with Gemini, holds the scoring rubric, and deliberately steers the conversation toward situations that force the participant to demonstrate the skill being assessed. Across 373 conversations from 188 participants, skill-matched Executive steering raised the share of conversations yielding ratable evidence to 92.4% for project management and 85% for conflict resolution, significantly above unconstrained [[agentic-ai|independent agent]] teams, while LLM scoring agreed with expert annotators about as well as the two human experts agreed with each other (Kappa 0.45–0.64). The design reframes assessment as an adaptive test of complex behavior: a [[simulating-students|simulated]] partner engineered for evidence density rather than a standardized task assumed to elicit it.

## Key Findings

1. The Vantage protocol put a human participant in a 30-minute chat-based group task with three AI teammates, with Gemini 2.5 Pro generating all AI turns; 188 participants aged 18–25 recruited through Prolific produced 373 usable conversations (three discarded for technical faults).
2. Inter-expert agreement between two trained [[pedagogy|pedagogical]] raters was only moderate, with Cohen's Kappa of 0.45–0.64 for conflict resolution and project management, covering both the "score or NA" decision and numerical score agreement; LLM–expert agreement fell in the same band.
3. Conversation-level evidence — the share of conversations rated as carrying enough information for a skill rating rather than NA — reached 92.4% for project management and 85% for conflict resolution when the skill-matched Executive LLM was used.
4. A skill-focused Executive LLM always elicited significantly more evidence for its target skill than unconstrained Independent Agents (Fisher exact test, p ≤ 0.05), and the steering showed a crossover effect: focusing on conflict resolution raised conflict-resolution evidence but lowered project-management evidence, and vice versa.
5. Telling participants to pay attention to a skill before the conversation had no significant effect on informativeness in either the Independent Agents or the Executive LLM setting, and for both skills (all p > 0.6) — the gain comes from the system's steering, not from priming the person.
6. Task topic did not drive informativeness: a logistic regression found no significant effect of a science versus debate task on either skill metric (p = 0.18 for conflict resolution, p = 0.9 for project management), supporting reuse of the framework across subject areas.
7. Evidence rates were generally higher for project management than for conflict resolution in almost all conditions, which the authors read as project management behaviors being more abundant and needing less steering.
8. Automatic scoring ran turn by turn with Gemini 3.0: each turn was rated 20 times, a turn was labeled NA if any single run returned NA, and the remaining labels were resolved by majority vote before a regression model produced the conversation-level score.
9. In a Monte Carlo style recovery test, simulated participants were prompted to behave at a stated rubric level; each conversation ran 50 turns and each level was repeated 100 times, and the Executive LLM protocol reduced mean absolute error in recovering the known level relative to Independent Agents.
10. For creativity, a Gemini-based autorater assessing complex tasks submitted by high-school students performed on a par with human expert raters, extending the claim beyond the adult Prolific sample.

## Why Group Skills Resist Measurement

The paper situates itself between two established poles. PISA 2015's collaborative problem-solving assessment had subjects interact with scripted simulated teammates through multiple choice, maximizing control and losing authenticity; the ATC21S project ran human–human dyads acting on shared digital objects, gaining naturalism and surrendering standardization. Both sit far from the classroom interaction they aim to represent. [[group-work|Group work]] is simultaneously valued for individual learning and for developing durable skills, and the interdependence between members is exactly what breaks classical psychometric assumptions: a person's score depends on what their partners did.

The authors' claim is that [[llm|large language models]] change the feasible point on that trade-off, because naturalistic conversational personas no longer require hard-coded rules. The risk is the mirror image: Sijtsma's observation that measurement is a compromise for efficiency, since waiting for a person to spontaneously exhibit a behavior in real life takes too long to gather evidence. The Executive LLM is the answer to that objection — an adaptive test of complex behavior, in which the system's goal is to manufacture the occasions on which evidence can appear while keeping the conversation plausible.

## Rubrics, Steering and the Executive LLM

Rubric construction followed a documented sequence: review the literature to build a conceptual model of each skill, derive an initial rubric, have human experts score sample conversations with it, then refine the dimensions where agreement was low or raters found them ambiguous. Each dimension was scored 1–4 with an explicit NA option, and the same rubrics were given both to the steering model and to the evaluator — the mechanism by which the conversation is steered toward the rubric rather than away from it. The paper notes this aligns with earlier findings that LLMs code conversations reliably when the rubric is theory-derived and then refined through expert use on real data.

Operationally, the Executive LLM is a single model generating the responses of all teammates rather than several independent agents each playing a role. It has access to the rubrics and is prompted to maximize the information and accuracy of the assessment, which can mean having a teammate initiate a conflict and sustain it until evidence of conflict resolution has been observed. That single-model choice is not just an engineering simplification: the paper's comparison shows that a group of unconstrained LLMs produces insufficiently informative interactions, because teammates that happen to collaborate smoothly never surface the behaviors being measured. Feedback to the participant is [[quantitative-research|quantitative]], organized as a skills map with per-axis breakdowns and drill-down excerpts from the conversation that substantiate each rating.

## Agreement, Evidence and the Simulation Sandbox

The evaluation's honesty lies in how it treats its own reliability ceiling. Human coding of conflict resolution and project management was difficult even after several calibration rounds, producing moderate inter-rater Kappa; the LLM evaluator's agreement with humans sits in the same range. The authors use that as a license to run the larger validity analyses with autoraters only, and they state plainly that human-rating results are qualitatively similar. That is a defensible move, and also a limitation: the protocol cannot currently claim more precision than two trained experts can achieve on the same transcripts.

Because human data collection is expensive, the framework includes a simulated subject — a Gemini model prompted to act like a student at a specific rubric level — used to test recovery, to probe evidence levels, and to develop the protocol before deployment. This is where the work connects to the wider [[simulating-students]] literature: the [[simulation|simulator]] is not a convenience sample but an instrument for estimating whether the assessment can recover known proficiency. The evidence-rate results themselves are the cleanest demonstration of the core mechanism: matched steering produces high, rubrics-aligned evidence density, mismatched steering trades one skill's evidence for another's, and instructing the human to try harder does nothing measurable.

## What It Contributes and What It Does Not Yet Show

For [[assessment]] practice, three contributions stand out. First, a construct-validity argument for [[conversational-ai|conversational AI]] teammates: authenticity and control are treated as jointly optimisable rather than as a fixed trade-off. Second, an operational lever — steering toward evidence — that measurably changes whether an assessment can score a person at all, which is the practical difference between an unratable and a ratable session. Third, an evaluation pipeline with a worked agreement analysis, which is what [[educational-measurement]] generally demands and what most AI assessment proposals omit.

The boundaries are equally clear. Participants were US-based English-native adults aged 18–25 recruited on Prolific, so the classroom claim is indirect; the high-school creativity result is the exception and it is a separate analysis. The [[collaborative-learning|collaboration]] results rest on two sub-skills of one skill, the strongest evidence is at conversation level rather than the finer turn level, and the rubric dimensions scored 1–4 are coarse. The paper also acknowledges that the executive steering trades evidence breadth for depth — over-steering one skill reduces evidence for others, so a single conversation is a poor vehicle for a whole-profile assessment. What it establishes is that the amount of ratable evidence is a design variable under the system's control, which is a different and more tractable starting point than assuming a well-designed group task will elicit what it is meant to measure.

## Connected Concepts

- [[assessment]]
- [[educational-measurement]]
- [[collaborative-learning]]
- [[critical-thinking]]
- [[creativity]]
- [[group-work]]
- [[simulating-students]]
- [[agentic-ai]]
- [[human-ai-collaboration]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[authentic-assessment]]
- [[generative-ai]]
- [[llm]]
- [[assessment-validity]]

## Connected Articles

- [[assessment-team-problem-solving-computing-education]] — Assessing Team Problem Solving in Computing Education
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling for Competency Assessment
- [[clara-collaboration-literacy-dashboard]] — CLARA: A Collaboration Literacy Dashboard
- [[simulating-students-diverse-cognitive-levels-2025]] — Simulating Students at Diverse Cognitive Levels
- [[simulating-students-llm-review-2026]] — Simulating Students with LLMs: A Review
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — LLM Agents in Collaborative Problem-Solving Simulation
- [[ai-teammate-task-distribution-medical-training-2026]] — AI Teammates and Task Distribution in Medical Training
- [[agentschool-multi-agent-simulation-education-2026]] — AgentSchool: Multi-Agent Simulation in Education
- [[ai-coaching-rl-skill-development]] — AI Coaching and Skill Development
- [[valid-student-simulation-llm-2026]] — Valid Student Simulation with LLMs

## Citation

Globerson, A., Keeling, A., Choudhury, A., Iurchenko, A., Segal, A., Hassidim, A., et al. (2026). [*Towards Scalable Measurement of Durable Skills*](https://arxiv.org/abs/2609.15864). arXiv preprint.
