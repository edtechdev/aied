---
title: "Cultivating Design Creativity of Vocational Students: A Model of Project-Based Learning in AI-Enabled Immersive Virtual Environments"
created: "2026-09-16T00:58:00-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
foundations: [agentic-ai, design-thinking]
pedagogy: [collaborative-learning, creativity, embodied-learning, project-based-learning, student-engagement]
technology: [generative-ai, simulation, virtual-and-augmented-reality]
sources: ['raw/papers/ai-ive-pbl-vocational-design-creativity-2026.md']
confidence: high
discipline: [vocational education]
research_method: [quasi-experiment]
audience: [educators, instructors, designers, researchers]
level: [higher ed]
systems: [professional-training]
---

> **Synthesis:** This study proposes and tests an instructional model — **AI-IVE-PBL** — that combines [[project-based-learning|project-based learning]] with an AI-enabled immersive virtual environment ([[virtual-and-augmented-reality|VR]] headsets, a 3D modeling tool, and an [[llm]]-backed AI teaching assistant rendered as a digital human) in a first-year vocational interior design course. The model is specified as four dimensions (teachers, students, agents, teaching phases) driving a five-phase closed loop — discovery, envisioning, modeling, communication, refinement — with *sustained idea-developing discourse* (SIDD) as the cognitive engine. In a 12-week two-group quasi-experiment (63 valid responses; AI-IVE-PBL n = 31 vs. traditional PBL n = 32), the immersive-plus-agent condition raised design ability (η²p = .138) and creative ability (η²p = .111) under ANCOVA, lifted cognitive (d = 0.90) and behavioral (d = 0.75) [[student-engagement|engagement]], raised [[motivation]] (d = 0.74) and satisfaction (d = 0.69), and *lowered* reported [[cognitive-offloading|cognitive load]] (d = −0.52). Two outcomes moved in the hypothesised direction without reaching significance: innovative thinking and [[affective-computing|affective]] engagement. All outcomes are [[self-report-measures|self-report]].

## Key Findings

1. **A four-dimension, five-phase model rather than a platform.** The authors separate the environment (*AI-IVE*) from the instructional model implemented inside it (*AI-IVE-PBL*), and state explicitly that the experiment evaluates the model's implementation, not the platform in isolation. The model aligns immersive affordances (stereoscopic immersion, [[embodied-learning|embodied]] engagement, intelligent interaction, [[feedback|real-time feedback]]) with PBL's inquiry, [[collaborative-learning|collaboration]] and active participation, organized around teachers, students, agents, and teaching phases.
2. **The five phases are a design-thinking loop.** Discovery (task definition and motivation activation), envisioning (embodied experience and solution conceptualization), modeling (immersive exploration and unconstrained creation), communication (project presentation and peer interaction), and refinement (critical reflection and iterative revision) — framed as divergence-to-convergence movement driven by SIDD, and explicitly inspired by the IDEO [[design-thinking]] model and design-based learning.
3. **Design and creative ability improved; innovative thinking did not.** With pretest design [[creativity]] as covariate, the AI-IVE-PBL group scored significantly higher on design ability (M = 3.98 vs. 3.62; F(1, 60) = 9.630, p = .003, η²p = .138) and creative ability (M = 4.00 vs. 3.73; F(1, 60) = 7.465, p = .008, η²p = .111). The advantage in innovative thinking (M = 4.05 vs. 3.85) was not significant (F(1, 60) = 2.570, p = .114, η²p = .041).
4. **Engagement gains were cognitive and behavioral, not affective.** Cognitive engagement reached M = 4.66 vs. 4.29 (t(61) = 3.882, p < .001, d = 0.90) and behavioral engagement M = 4.60 vs. 4.22 (t(61) = 3.227, p = .002, d = 0.75); affective engagement showed a positive but non-significant trend (M = 4.58 vs. 4.34; t(61) = 1.662, p = .102, d = 0.38).
5. **The learning experience improved on all three subscales, including cognitive load — in the favorable direction.** Motivation M = 4.30 vs. 3.84 (t(61) = 3.071, p = .003, d = 0.74), satisfaction M = 4.27 vs. 3.89 (t(61) = 2.900, p = .005, d = 0.69), and cognitive load M = 3.83 vs. 4.66 (t(61) = −2.127, p = .038, d = −0.52). The authors attribute the load reduction to the assistant's semantic analysis and [[knowledge-graph]] recommendations cutting information-retrieval effort, plus conveniences such as a preset furniture library and one-click material switching.
6. **The AI assistant plays four distinct roles across the cycle.** It recommends resources and decomposes tasks from learning data in discovery; runs layered Bloom-aligned questioning and generates interdisciplinary knowledge maps in envisioning; simulates design effects and flags flaws in modeling; and logs discussion for the [[teacher-role|teacher]] in communication and refinement. The teacher keeps scenario construction, grouping, critique facilitation, and rubric-based evaluation.
7. **The null results are treated as substantive.** The authors explain the flat innovative-thinking result as a ceiling on short-term change in entrenched cognitive patterns, compounded by a brief self-report subscale with limited response range, and by novice learners defaulting to execution-oriented strategies (imitating reference examples, prioritizing task completion). They recommend explicit ideation and [[metacognition|metacognitive]] scaffolding — deliberate divergence–convergence cycles, justification prompts, reflective critique.
8. **Collaboration quality is not guaranteed by the technology.** In the literature framing the authors concede that social loafing, unequal participation and limited accountability persist in immersive settings, and that [[prior-knowledge]] differences and emerging [[misconceptions]] still constrain shared understanding — so immersive affordances need deliberate process scaffolding, not just fidelity.

## Study Design & Method

A two-group [[quasi-experiment]] over **12 weeks** in the Public Space Interior Design course of a first-year Interior Art Design program at Fuzhou Software Technology Vocational College, China. Two parallel classes of first-year students were selected on entrance-examination scores and self-reported design-learning experience, then randomly assigned to conditions: control n = 33 (traditional PBL, AutoCAD-based drafting, multimedia references, offline presentations) and experimental n = 31. One instructor taught both groups; two researchers documented delivery. Instruments were administered in Chinese using forward–back translation with a 15-student pilot.

The AI-IVE condition combined PICO 4 VR headsets, SketchUp, and an AI teaching assistant built on iFLYTEK's Xinghuo cognitive large model, presented through a digital human with synthesised facial expressions and voice. The course ran three thematic projects (Aviation Exhibition Hall Design, Memorial Hall Design, Construction Drawing Deepening Design), each split into sub-projects.

Instruments were three 12-item, five-point scales — design creativity (innovative thinking, design ability, creative ability; KMO = .85, 66.53% variance explained), learning engagement (cognitive, behavioral, affective; KMO = .86, 70.42%), and learning experience (motivation, satisfaction, nine-point cognitive load; KMO = .89, 75.05%) — with Cronbach's alphas from .788 to .937. 64 questionnaires were collected and 63 retained (98.44%). ANCOVA tested design-creativity differences with pretest scores as covariate; independent-samples t-tests tested engagement and experience. Data analysts and outcome evaluators were blinded to group labels while analysts and evaluators were not involved in delivery.

## Why the Immersive-Agent Pairing Matters for PBL

The authors' core argument is that [[project-based-learning|PBL]]'s known constraints for vocational learners — limited equipment, difficulty replicating realistic scenarios, delayed teacher scaffolding, weak [[self-regulated-learning|self-regulation]] and lower motivation — are exactly the constraints that a [[generative-ai|generative]] assistant inside a headset can absorb. Immersion supplies the authentic, risk-free context where students manipulate spatial elements and test arrangements; the [[agentic-ai|agent]] supplies [[scaffolding]] that is precise and timely rather than queued behind the teacher's attention, and it does so in the middle of the design act rather than after it. The mechanism they name for the resulting learning is **SIDD** — sustained idea-developing discourse, borrowed from knowledge-building research — which is proposed as the bridge between immersive affordance and measurable creativity.

This places the study close to a broader line in the knowledge base on where AI belongs in design [[pedagogy]]. An exploratory architectural studio study of a [[generative-ai|GenAI]] plus multi-user XR pipeline found, by contrast, *declining* design [[self-efficacy]] confidence for teams using the pipeline, and no advantage in blinded panel ratings ([[genai-xr-architectural-design-education-2026]]) — its authors' explanation was that the two technologies are complementary per phase but carry real interaction costs. The AI-IVE-PBL study is the more favorable counterpart: an orchestrating model with a named assistant role per phase, a teacher who pre-builds the scenario and controls the rubric, and outcome measures that distinguish productive ability from ideational novelty. Read together, they suggest the difference between an XR-and-GenAI win and loss is less about the hardware than about who holds the phase structure and the evaluation criteria.

For [[professional-training|vocational and professional education]], the model's interest lies in its specification as a *teaching workflow* rather than a tool list — the five phases, the responsible actor in each, and the artifact that moves between them are all stated, which is what makes it portable to other design and technical courses and testable in replicating studies.

## Limitations

The study relies exclusively on [[self-report-measures|self-report]] questionnaires, with no performance artifacts, log data, or expert ratings of student designs. The innovative-thinking subscale is brief with a limited response range, which the authors concede may attenuate detectable effects over a 12-week intervention. Measurement was confined to a single course, limiting generalisability, and the design lacks participant and instructor blinding, which the limitations section flags without fully analyzing the biases it introduces. Group sizes are small (31 and 32), and the significant results rest on a small number of comparisons with substantial effect sizes, so replication in other courses, institutions and regions is required — alongside longer interventions, mixed-method triangulation, and an explicit treatment of [[ethics|ethical]] issues such as [[privacy|data privacy]], [[bias-mitigation|algorithmic bias]], and dependence on immersive technology.

## Connected Concepts

- [[project-based-learning]]
- [[virtual-and-augmented-reality]]
- [[creativity]]
- [[student-engagement]]
- [[design-thinking]]
- [[embodied-learning]]
- [[simulation]]
- [[agentic-ai]]
- [[pedagogical-agent]]
- [[collaborative-learning]]
- [[scaffolding]]
- [[professional-training]]
- [[self-report-measures]]
- [[situated-learning]]

## Connected Articles

- [[genai-xr-architectural-design-education-2026]] — GenAI plus multi-user XR in an architectural design studio: the counter-case, with declining design self-efficacy
- [[ai-interior-design-malaysia-2026]] — AI transforming interior design practice, pedagogy and professional regulation
- [[genai-architectural-design-studios]] — Development and applications of generative AI in architectural design studios
- [[multi-site-vr-immersive-learning]] — Real-time multi-site immersive learning system; usability and VR-sickness outcomes
- [[mixed-reality-engineering-learning]] — Mixed reality and physical toolkits in engineering mechanics: engagement up, complex visualization still hard
- [[ai-vocational-education-training-review]] — Systematic review of AI in vocational education and training
- [[educators-engagement-ai-pbl-review-2026]] — Educators' engagement with AI in project-based learning
- [[project-based-digital-storytelling-art-design-2026]] — Project-based digital storytelling framework for art and design education in the AI era
- [[rana-genai-design-thinking-2025]] — Generative AI in design thinking pedagogy: creativity, critical thinking and ethical reasoning

## Citation

Jin, S., Zhong, Z., Cao, X., & Zhang, W. (2027). [Cultivating design creativity of vocational students: A model of project-based learning in AI-enabled immersive virtual environments](https://doi.org/10.58459/rptel.2027.22029). *Research and Practice in Technology Enhanced Learning, 22*(1), 29.
