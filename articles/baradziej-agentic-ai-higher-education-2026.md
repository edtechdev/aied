---
title: "A systematic review of the roles of agentic AI in higher education"
created: "2026-09-04T14:13:20-04:00"
updated: "2026-09-04T14:13:20-04:00"
type: article
tags: [agentic-ai, higher-ed, systematic-review, intelligent-tutoring, generative-ai, ai-literacy, ethics, governance, assessment, academic-integrity, faculty-development]
research_method: [systematic review]
audience: [instructors, administrators, researchers, instructional designers]
level: [higher ed]
sources: ['raw/papers/baradziej-agentic-ai-higher-education-2026.md']
confidence: high
---

> **Synthesis:** This [[meta-analysis-systematic-review|PRISMA systematic review]] (Jan 2023 – Mar 2026; **48 studies** from 1247 records) asks what roles [[agentic-ai|agentic AI]] actually plays in [[higher-ed|higher education]] and how those differ from [[generative-ai|generative]] and rule-based AI. It identifies **six discrete roles** and quantifies the evidence for each: [[personalized-learning|personalised learning]] and adaptive tutoring (18/48, the most-evidenced), [[automated-assessment|automated assessment]] and feedback (12), [[teacher-role|teaching]] assistance and augmentation (11), administrative and student support (8), [[curriculum-design|curriculum design]] and workforce alignment (5), and [[research-methods-aied|research]] support and academic operations (4). Reported outcomes cluster on scalable personalisation (academic gains 15–25%, [[student-engagement|engagement]] up to +40%), assessment efficiency (90–95% human-grader agreement, 50–70% grading-time cuts), and proactive at-risk support — set against risks of [[cognitive-offloading|cognitive dependency]], cultural homogenisation, algorithmic [[bias-mitigation|bias]], and low faculty readiness (only 6.5% of faculty in some contexts report direct AI use). The review's central practical contribution is a **tripartite framework for responsible integration**: develop [[ai-literacy]], build [[ethics|ethical]] infrastructure, and deliver competence-based [[educational-development|educator training]].

## A role-based map of agentic AI in higher education

Where other syntheses (the knowledge base's [[agentic-ai-education-scoping-review|474-study scoping review]] and [[kostopoulos-agentic-ai-education-2025|Kostopoulos et al.'s conceptual survey]]) map the field's breadth, this review organises evidence by the **role an agent plays** — a framing tailored to institutions deciding where to deploy and govern these systems. The six roles, in order of evidential weight:

- **Personalised learning and adaptive tutoring (18 studies).** Agents that continuously model the learner, adjust content/pacing, and give targeted feedback without constant human orchestration. Technical foundations are [[reinforcement-learning|reinforcement learning]], NLP, [[affective-computing|affective computing]], and cognitive modelling. Notable systems include the [[online-teaching-and-learning|LMS]]-embedded ELA Tutor (López-Goyez et al., 2026) and Abertay's tri-modal Learning Engagement Assistant (Chat/Tutor/Quiz). Reviews argue multi-agent cognitive architectures beat single-agent or rule-based tutors on behaviour modelling, real-time feedback, and metacognitive enhancement.
- **Automated assessment and feedback (12 studies).** Rubric-based grading, [[automated-essay-scoring|automated essay scoring]], [[formative-assessment|formative]] feedback, and real-time diagnostics — reported at 90–95% agreement with human graders and 50–70% grading-time reductions, but with persistent concerns about [[bias-mitigation|bias]] and [[metacognition|metacognitive]] erosion from instant, unreflective feedback.
- **Teaching assistance and augmentation (11 studies).** A spectrum from routine administrative Q&A (virtual TA) to full course delivery by an "AI instructor" — the far end raising questions about educator identity and the limits of automation.
- **Administrative and student support (8 studies).** Enrolment/scheduling automation plus **proactive early-warning agents** that monitor data streams and reach at-risk students before problems entrench (e.g., Element451's Bolt ecosystem, Ivy Tech deployments) — inverting traditional reactive support.
- **Curriculum design and workforce alignment (5 studies).** Agents that scan labour-market data, map course content to competency frameworks, and recommend curriculum change — small but strategically significant.
- **Research support and academic operations (4 studies).** Literature review automation and multi-agent research frameworks such as Agent Laboratory (Johns Hopkins + AMD), whose coordinated agent team mirrors the research pipeline.

## Defining agentic AI: a property-based account

To separate agentic from merely generative or rule-based systems, the review characterises agentic AI as a **class of architectures** defined by intersecting properties — complementing the knowledge base's [[kostopoulos-agentic-ai-education-2025|six-criterion checklist]] with an adjacent framing. The properties: **autonomy** (acts/decides without per-step instruction), **reactivity** (perceives and adjusts to its environment), **proactivity** (initiates from inferred goals, not explicit commands), **learning** (improves via reinforcement or continual tuning), **tool use** (invokes search, code executors, schedulers, databases — extending capability beyond the core [[llm]]), **memory** (short- and long-term, enabling cross-session continuity and personalisation over weeks), and **planning** (decomposing goals into ordered sub-goals). Together these enable what Acharya et al. (2025) call a "[[qualitative-research|qualitative]] leap" — systems that plan, use tools, hold memory, and self-adjust over multi-step horizons. Notably, the roles-with-framing also surfaces the **Copilot-vs-Autopilot design choice**: how much moment-to-moment control the human retains versus how much the agent owns — a recurring axis across roles.

## Benefits: scalability, personalisation, and operational efficiency

Across the 48 studies the reported benefits cluster into three interconnected dimensions. **Scalability** lets virtual TAs, early-warning systems, and research tools serve many students without proportional staffing — changing the economics of student support. **Personalisation at scale** becomes operationally real: adaptive tutoring reports academic gains of **15–25%** and engagement increases of up to **+40%**, with particular potential for students historically ill-served by one-size-fits-all instruction (first-generation students, learning differences, second-language learners). **Operational efficiency** appears in 50–70% grading-time reductions and accelerated research workflows. A fourth, cross-cutting opportunity is the **shift from reactive to proactive support** — intervening on indicators before problems entrench rather than after.

## Risks: the passive-learner finding and beyond

The most striking empirical caution is Sargsyan's finding that **passive learners in agentic-tutoring environments underperformed [[active-learning]] students by 8.7%** — evidence that the risk is not intrinsic to the technology but follows from deployment that lets the agent do the cognitive work. This mirrors the knowledge base's core [[cognitive-offloading|over-reliance]] concern and the [[agentic-ai-pedagogical-best-practice-2026|automation-vs-learning tension]]. Four risk clusters recur:

- **Cognitive dependency and eroded deep learning.** Passive consumption of automated feedback without metacognitive engagement — worse outcomes than deliberate active-[[learning-design|learning design]].
- **Cultural homogenisation and epistemic hegemony.** Agentic systems trained on English, Western-produced data embed particular assumptions about knowledge, argumentation, and academic register; language-education tools can marginalise non-Western rhetorical traditions, and [[global-south|Global South]] analyses (Khoza & van der Walt, 2025) show AI-enhanced pedagogies reproducing inequity absent attention to epistemological diversity and infrastructure.
- **Algorithmic bias at multiple levels** — training data, architecture, evaluation criteria, and test populations — requiring [[governance|institutional]] mitigation (bias audits, diverse datasets, transparent documentation, stakeholder involvement) rather than one-time checks.
- **Governance lag and data privacy.** Agentic tutoring, adaptive assessment, and early-warning require continuous access to granular student data (behaviour, performance, engagement, psychological states, even biometrics), yet institutional data-governance frameworks (GDPR/FERPA compliance, [[privacy]]) frequently lag deployment practice.

## A tripartite framework for responsible integration

The review's central practical contribution is a synthesis of the evidence into **three pillars** institutions should stand up before scaling agentic AI — an institutional complement to the design-level [[guardrails]] on the [[agentic-ai|agentic AI concept page]]:

- **Develop AI literacy (students and staff).** Literacy is a precondition for meaningful engagement rather than passive consumption: students who understand what an adaptive tutor is doing engage as active learners, and faculty who understand assessment agents design assessments that both exploit and safeguard their capabilities.
- **Build ethical infrastructure.** Data-protection policies, algorithmic-accountability frameworks, and [[academic-integrity]] policies must precede large-scale deployment. Kasarci et al.'s (2025) four-level governance framework offers a template.
- **Deliver competence-based educator training.** The professional-development gap is stark — only **6.5%** of faculty in some national contexts report direct AI use for education — and training must move beyond tool familiarisation to [[pedagogy|pedagogical]] frameworks that preserve human agency.

## Limitations and future directions

The evidence base is methodologically young: mostly short-term case studies and design demonstrations, few [[rct|RCTs]], and a near-total absence of longitudinal work — so causal claims about [[learning-gains|learning outcomes]] cannot yet be made. The review calls for multi-year cohort studies tracking achievement and [[self-regulated-learning|self-regulation]], and for research on **integrated multi-agent campus architectures** — orchestrating tutoring, assessment, administrative, curriculum, and research agents within unified systems — since current evidence treats each role in isolation and misses emergent, systemic effects. A plausible five-year scenario: a university running an integrated, human-supervised campus-wide agent ecosystem.

## Significance to the Knowledge Base

This review's role-based map and outcome quantification distinguish it from the field's other syntheses: the [[agentic-ai-education-scoping-review|scoping review]] maps research breadth and capability levels; [[kostopoulos-agentic-ai-education-2025|Kostopoulos et al.]] supply the conceptual checklist and taxonomy; and this review adds the deployment-oriented question — *which role, with what measured outcome, under what governance* — grounding the [[agentic-ai|concept page's]] design tensions in an institutional, role-specific frame and a concrete responsible-integration agenda.

## Connected Concepts

- [[agentic-ai]] — the construct the review operationalises by role
- [[higher-ed]] — the specific context of all 48 studies
- [[intelligent-tutoring]] — the dominant agentic role
- [[ai-literacy]] — first pillar of the tripartite framework
- [[human-in-the-loop-ai]] — the Copilot/Autopilot axis and oversight
- [[educational-development]] — competence-based educator training
- [[cognitive-offloading]] — the passive-learner risk
- [[bias-mitigation]] — multi-level algorithmic bias
- [[privacy]] — student-data governance
- [[equity-in-ai-education]] — cultural homogenisation and the digital divide
- [[academic-integrity]] — verification under agentic assessment
- [[assessment]] — rubric-based and automated grading agents
- [[educational-policy-ai]] — institutional governance
- [[metacognition]] — risk of metacognitive erosion
- [[self-regulated-learning]] — human-centred vs AI-centred agency configurations
- [[generative-ai]] — the generative-to-agentic shift
- [[llm]] — the substrate of agentic systems
- [[meta-analysis-systematic-review]] — the review method
- [[student-engagement]] — engagement outcomes
- [[ai-ed-evaluation]] — benchmarking agent roles

## Connected Articles

- [[agentic-ai-education-scoping-review]] — 474-study scoping review of agentic AI capability levels (Wang et al. 2026)
- [[kostopoulos-agentic-ai-education-2025]] — conceptual survey: operational checklist + role/autonomy/embodiment taxonomy (Kostopoulos et al. 2025)
- [[agentic-ai-pedagogical-best-practice-2026]] — the automation-vs-learning tension
- [[tool-invariant-framework-agentic-ai]] — teaching and assessing in the agentic age
- [[bozkurt-ghost-students-agentic-ai-2026]] — ghost students and the verification gap
- [[ai-overreliance-complex-adaptive-system-2026]] — AI overreliance as a complex adaptive system
- [[educasim-cs1-instructional-practice]] — EducaSim: generative agents simulate a CS1 section
- [[li-dbagent-llm-educational-agent-cs-2026]] — LLM-based educational agent in CS education

## Citation

Baradziej, S. (2026). [*A systematic review of the roles of agentic AI in higher education*](https://doi.org/10.1016/j.ssaho.2026.103418). *Social Sciences & Humanities Open, 14*, 103418.
