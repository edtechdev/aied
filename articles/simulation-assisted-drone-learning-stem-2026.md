---
title: "From simulation to flight: Simulation-assisted drone learning with teacher-AI co-designed scaffolds for secondary students' STEM knowledge and competencies"
created: "2026-09-01T14:00:00-04:00"
updated: "2026-09-01T15:00:00-04:00"
type: article
sources: ["raw/papers/simulation-assisted-drone-learning-stem-2026.md"]
tags: ["simulation", "stem-education", "generative-ai", "intelligent-tutoring", "teacher-role"]
---

## Citation

[From simulation to flight: Simulation-assisted drone learning with teacher-AI co-designed scaffolds for [[k-12|secondary]] students' STEM knowledge and competencies](https://doi.org/10.1016/j.caeai.2026.100651) — Yeung, R. C. Y., Yeung, C. H., Sun, D., Keane, T., & Yang, Y. (2026). *Computers and Education: Artificial Intelligence*, 11, 100651.

## Overview

This quasi-experimental study investigates whether drone-based STEM instruction supported by teacher-AI co-designed simulations yields superior [[learning-gains|learning outcomes]] to the same hands-on drone curriculum delivered without simulations. It responds to a persistent challenge in drone-based STEM education ("dronagogy"): the scarcity of teacher-verified, curriculum-aligned interactive simulations, and the tendency of GenAI-produced resources to lack [[pedagogy|pedagogical]] validity. Using a pretest–posttest control group design with 30 secondary students (aged 13–17, Grades 8–11) in an eight-lesson after-school enrichment program, the study compared a Simulation-Assisted Group (SA-Group, n = 14) that additionally engaged with five interactive simulations against a Drone-Only Group (DO-Group, n = 16) that completed non-simulation versions of the same lessons. Both groups shared the same instructor, DJI Tello drone platform, hands-on tasks, and [[assessment|assessments]], differing only in the form of scaffolding.

The five simulations — Satellite Positioning, Virtual Flight, QuadPhysics, Dronography Angle-of-View, and Code Performance simulators — were co-developed through an iterative teacher-AI co-design process in which an experienced teacher (with no prior programming background) specified curricular objectives, target [[misconceptions]], and disciplinary constraints while a GenAI [[conversational-ai|chatbot]] (o1-mini) handled rapid prototyping. The authors frame teacher-AI co-design as the enabling means of resource production rather than the independent variable under study, which was the presence or absence of simulation-assisted scaffolding. Grounded in Kolb's experiential learning cycle, the simulations served as low-stakes pre-flight and reflective scaffolds that rendered causal flight mechanisms visible, reduced [[cognitive-offloading|cognitive load]], supported hypothesis testing, and enhanced learning visibility for teachers.

## Key Findings

- **STEM knowledge gains favored the simulation group.** The SA-Group gained M = 3.00 (SD = 1.24) versus M = 2.06 (SD = 1.06) for the DO-Group on the 10-item curriculum-aligned assessment — a statistically significant difference (t(28) = 2.23, p = .034) with a large effect size (d = 0.82).
- **Larger gains in 21st-century competencies overall.** Composite 21CS gains were M = 0.54 (SA) vs. M = 0.19 (DO), t(28) = 4.16, p < .001, d = 1.52 — a very large effect.
- **All four 4C domains improved significantly:** critical thinking (d = 1.25, p = .002), communication (d = 1.21, p = .003), [[creativity]] (d = 1.02, p = .010), and collaboration (d = 0.84, p = .030). Collaboration showed the smallest effect, likely because both groups engaged in team-based hands-on tasks.
- **Exploratory grade-level differences emerged.** Junior students (Grades 8–9) showed very large competency gains (overall 21CS d = 2.09, creativity d = 1.70) but no STEM-knowledge advantage (d = 0.28, n.s.); senior students (Grades 10–11) showed large knowledge (d = 1.19) and critical-thinking (d = 1.16) gains but negligible collaboration/creativity effects. These patterns are tentative given small subgroups.
- **[[qualitative-research|Qualitative]] analysis yielded five mechanisms:** enhanced [[student-engagement|engagement]] and [[motivation|motivational]] persistence; lowered cognitive load and operational confidence; bridging theory and practice through visible causal mechanisms; iterative design and collaborative [[problem-solving]] (e.g., "pair debugging" and testing ten code versions in two minutes); and increased learning visibility for formative support.
- **Simulations bridged the "abstraction-action gap."** By slowing action and isolating causal relationships (e.g., rotor speed vs. drag, GNSS trilateration), simulations let students manipulate variables and inspect consequences repeatedly before transfer to physical flight, improving conceptual access rather than merely exposure.

## Implications for Practice

- Embed simulations as **pre-flight and reflective scaffolds** within an existing curriculum rather than as standalone add-ons — before challenging physical tasks to build confidence and conceptual familiarity, and after them to support reflection and consolidation.
- **Pair simulations with structured prompts** that encourage prediction, explanation, and peer discussion; passive demonstrations are less valuable than active inquiry.
- Use simulation-assisted sequencing to **redistribute cognitive and procedural demands** across experiential-learning phases, reducing the cognitive overload novices face when conceptual explanation, code execution, and physical flight are compressed into one moment.
- Simulations offer a **cost-effective route to extending hands-on practice** in under-resourced STEM contexts where equipment cost, battery life, safety, and maintenance limit repeated experimentation.
- **Calibrate guidance to developmental level:** younger learners may benefit from more explicit prompts that help them articulate principles, while older learners may benefit from more open-ended, comparative, and reflective tasks.
- **Leverage learning visibility:** because student parameter changes, errors, and explanations become observable during simulation work, teachers can identify misconceptions in real time and provide more targeted formative support — a foundation for future [[learning-analytics]] dashboards.

## Related Concepts

- [[simulation]] — the core instructional mechanism, used here as low-stakes pre-flight scaffolds
- [[stem-education]] — the disciplinary context of drone-based "dronagogy"
- [[generative-ai]] — the GenAI chatbot used in teacher-AI co-design of the simulations
- [[teacher-role]] — teacher specification, review, and pedagogical oversight in co-design
- [[intelligent-tutoring]] — GenAI-supported resource generation for learning
- [[scaffolding]] — simulations as supplementary conceptual, procedural, and reflective scaffolds
- [[experiential-learning]] — the Kolb cycle grounding the [[curriculum-design|curriculum design]]
- [[inquiry-based-learning]] — hypothesis testing and evidence-based revision in simulations
- [[critical-thinking]] — the largest competency effect observed
- [[collaborative-learning]] — pair debugging and shared prediction around simulations
- [[formative-assessment]] — learning visibility supporting real-time teacher response
- [[computational-thinking]] — code testing, debugging, and trajectory preview
- [[transfer-of-learning]] — transfer from virtual rehearsal to physical drone operation

## Connected Articles

- [ai-enhanced-pbl-chatgpt-scaffolding-2026](ai-enhanced-pbl-chatgpt-scaffolding-2026.md) — also examines GenAI-supported scaffolding within active learning pedagogies
- [lnenicka-secondary-students-genai-stem-2026](lnenicka-secondary-students-genai-stem-2026.md) — shares the secondary-students-in-STEM + generative-AI focus
- [educational-robotics-pathways-2026](educational-robotics-pathways-2026.md) — adjacent hands-on, technology-rich STEM learning using physical devices
