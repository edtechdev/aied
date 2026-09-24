---
title: "Ethics Training Agents: Facilitating Group-Based Ethics Education with Role-Playing and Discussion for Ethical Reflection and Exploration"
created: "2026-09-11T09:20:00-04:00"
updated: "2026-09-24T12:00:57-04:00"
type: article
foundations: [agentic-ai, human-ai-collaboration]
pedagogy: [collaborative-learning]
technology: [pedagogical-agent, simulation]
assessment: [group-work]
methods: [mixed-methods-research]
ethics: [ethics]
sources: ['raw/papers/2609.11529.md']
confidence: high
research_method: [system development, thematic analysis]
discipline: [stem education, engineering education]
audience: [instructors, curriculum designers, researchers]
level: [higher ed]
---

> **Synthesis:** Seo et al. (2026) present **Ethics Training Agents**, a group discussion system in which multiple [[llm]] [[pedagogical-agent|agents]] embody distinct ethical orientations (care, deontological, and pragmatic) alongside a moderator agent that manages turns, summarizes, and selects ideas, to [[scaffolding|scaffold]] [[collaborative-learning|collaborative]] [[ethics]] training for STEM students. Built as a digital redesign of the tabletop game Judgment Call and grounded in value-sensitive design, it runs a four-stage [[group-work|group]] deliberation inside a 75-minute class period with three humans and three agents per room. In a study of 45 undergraduate [[stem-education|STEM]] students in 15 groups, ethical sensitivity rose significantly on both sub-constructs, yet peer ratings placed human peers clearly above every [[agentic-ai|agent]] persona on contribution, diversity, and influence. The [[qualitative-research|qualitative]] findings center on a paradox: agents lower social pressure and keep discussions on topic, but their [[ai-sycophancy|agreeable, under-reasoned]] responses flatten debate depth and read as generic AI rather than credible [[stakeholders|stakeholder]] personas.

## Key Findings

**Sensitivity improved on both sub-constructs.** Pre-post gains were large: Cohen's d = 1.43 for ethical issue awareness and 1.28 for ethical consequence reasoning, both p < .001.

**Human peers outrated every agent.** Humans scored significantly higher than the three personas on contribution, diversity, and influence, which did not differ from one another; diversity showed the widest gap (M = 3.06 vs. 2.28-2.39).

**Students questioned the agents most.** Participants directed 79.7% of questions (59 of 74) to agents, above the 3:2 availability baseline (p = .017).

**Sycophancy flattened debate.** Agents accepted nearly every claim, so personas lost force in later stages and unreferenced errors caused sharp trust drops; participants wanted the agents' reasoning.

**Personas widened perspectives, traded depth.** Distinct viewpoints surfaced social, governmental, and security angles a STEM-only group would miss, but AI-generated breadth pulled discussion from depth.

## Why Group Ethics Education Does Not Scale

Engineering decisions shape safety, privacy, [[equity-in-ai-education|equity]], and [[sustainability]], yet [[engineering-education|engineering]] and [[cs-education|computer science]] curricula still prioritize technical mastery over design's societal consequences, leaving [[critical-thinking|critical]] ethical reasoning an occasional add-on. Role play and discussion grounded in critical design and value-sensitive design surface concerns through stakeholder perspective-taking. The obstacle is delivery, not [[pedagogy]]: consistent role play across many groups demands facilitation skill, time, and coordination, and experiences drift by scenario, participant [[writing-education|composition]], and [[teacher-role|teaching]] environment. Digital ethics tools are individual-focused, and prior team-based tools studied all-human teams or one human directing [[simulation|simulated]] agents, leaving multiple humans deliberating with multiple agents underexplored.

## System Design: A Moderator Agent and Three Persona Agents

Judgment Call supplied the structure: team-based, role-play driven, and sized for one class session. The activity runs about 75 minutes across four stages. A **facilitator agent** manages turns through *stacking*, adds each new idea to a growing summary set rather than a single summary, and caps the brainstorm at 10 stakeholders, 8 problems, and 8 solutions. Three **participant agents** became personas rather than bare [[philosophy-of-ai-in-education|philosophical]] labels, carrying demographics and value priorities for care, deontological, or pragmatic ethics, all undergraduates so students would treat them as peers. [[automated-question-generation|Question generation]] used two prompts because one step produced irrelevant or [[self-directed-learning|self-directed]] questions. Agent logs showed no safety issues, but a trained facilitator stayed available to intervene ([[pedagogical-safety]]).

## Study Design and Measured Outcomes

Forty-five undergraduates entered 15 groups of three; all were [[stem-education|STEM]] majors with freshmen excluded, 42% female. Each two-hour offline session paid KRW 40,000 (about USD 28.8) and ran a pre-survey, disclosure of the agents' personas, the 60-minute activity, a post-survey, and focus group interviews on one Black Mirror smart-lens scenario. Measures were [[mixed-methods-research|mixed-methods]]: a two-sub-construct sensitivity scale, four-point peer ratings of the two humans and three agents on contribution, diversity, and influence, [[qualitative-research|thematic analysis]] of interviews, and interaction logs analyzed at the group level. Sensitivity rose on both sub-constructs (p < .001) with large effects.

## Qualitative Findings and Design Strategies

Participants found the phase structure familiar, and the facilitator's turn control and summaries sustained attention, though stacking traded depth for breadth. Stage-bound agents stabilized groups when humans drifted. Distinct personas exposed angles a STEM-only group would miss, but breadth crowded out depth, and [[ai-sycophancy|sycophancy]] did the rest: agents accepted nearly every claim, personas lost force later, and unreferenced errors drove sharp trust drops. The authors recommend process-oriented agent output, guarding [[agency|learner agency]] against [[cognitive-offloading|over-reliance]]; identity disclosure naming persona limits and the [[governance|institutional]] impacts a persona covers, balancing [[explainable-ai|transparency]] against authenticity; and rebalancing dynamics toward counterarguments and prompts to answer a human peer first, protecting [[student-engagement|engagement]]. They add that [[rag|retrieval-augmented]] generation could ground agent claims, and agents should not replace peer discussion ([[generative-ai|generative AI]] eroding social learning).

## What this means for practice

- **Instructors.** Disclose agent limits before the session and say which discussants were AI afterward: unreferenced errors read as AI defects rather than persona limits.
- **Instructors.** Prompt personas to raise counterarguments and trade-offs: participants expected refutation, and universal agreement flattened debate.
- **Instructors.** Require a response to a human peer before a learner turns to an agent: 79.7% of questions (59 of 74) went to AI.
- **Curriculum designers.** Shift agents to process-oriented output, keeping personas undergraduate and fallible so fluent reasoning gains no undue authority.
- **Researchers.** Plan a control condition and a delayed post-test: without either, the large sensitivity gains (d = 1.43 and 1.28) cannot be separated from novelty or learning effects.

## Limitations

- No control condition: the pre-post comparison with 45 STEM undergraduates in 15 groups of three cannot separate the sensitivity gains from novelty or general learning effects.
- Gains were measured immediately after one session on a single fictional scenario; prior [[research-methods-aied|research]] suggests short-term ethics gains need not persist, so durability is untested.
- Participants were strangers recruited through a university online community, meeting without shared [[prior-knowledge|prior knowledge]] or the relationships real project teams have.
- Results hinge on the particular model and prompts (GPT-4o at temperature 0, hand-crafted personas, a 0.5 participation rate), which the authors say need verification.

## Connected Concepts

- [[ethics]]
- [[collaborative-learning]]
- [[group-work]]
- [[pedagogical-agent]]
- [[agentic-ai]]
- [[simulation]]
- [[human-ai-collaboration]]
- [[stakeholders]]
- [[stem-education]]
- [[engineering-education]]
- [[cs-education]]
- [[higher-ed]]
- [[critical-thinking]]
- [[ai-sycophancy]]
- [[trust-calibration]]

## Connected Articles

- [[agentschool-multi-agent-simulation-education-2026]] — AgentSchool: An LLM-Powered Multi-Agent Simulation for Education
- [[adversarial-stress-testing-role-playing-agents]] — Adversarial Stress Testing of Role-Playing Language Agents using Multi-Agent Evaluation
- [[ai-agents-peer-learning-discourse]] — When AI Agents Teach Each Other: Discourse Patterns Resembling Peer Learning in the Moltbook Community
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[genai-counter-learner-groupthink-2025]] — Utilizing Generative AI to Counter Learner Groupthink by Introducing Controversy in Collaborative Problem Based Learning Settings
- [[less-deliberate-teams-llm]] — Less Deliberate in Teams: Student LLM Use Across Individual and Collaborative Work
- [[multi-agent-llm-social-learning]] — Beyond the AI Tutor: Social Learning with LLM Agents
- [[cost-of-ethics-crisis-cs-ethics-education]] — Cost-of-Ethics Crisis: Beliefs, Decisions, and Justifications in the Job Searches of Computer Science Students in Canada and the United States
- [[talebzadeh-ai-group-activity-roles-2026]] — The Architecture of Roles in AI-Designed Group Activities: A comparative inductive analysis of novice and experienced teachers' differentiated instruction within the IAT framework
- [[ba-ai-agents-cscl-review-2026]] — Artificial Intelligence Agents in Computer-Supported Collaborative Learning: A Systematic Literature Review

## Citation
Seo, Y., Jang, S., Park, H., Gutierrez, R. S., Seering, J., & Lee, U. (2026). [Ethics Training Agents: Facilitating Group-Based Ethics Education with Role-Playing and Discussion for Ethical Reflection and Exploration](https://arxiv.org/abs/2609.11529). arXiv preprint arXiv:2609.11529.