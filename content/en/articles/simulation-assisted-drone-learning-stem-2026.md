---
title: "From simulation to flight: Simulation-assisted drone learning with teacher-AI co-designed scaffolds for secondary students' STEM knowledge and competencies"
created: "2026-09-01T14:00:00-04:00"
updated: "2026-09-19T08:33:23-04:00"
type: article
methods: [mixed-methods-research]
sources: ["raw/papers/simulation-assisted-drone-learning-stem-2026.md"]
foundations: [teacher-role]
technology: [generative-ai, intelligent-tutoring, simulation]
confidence: medium
research_method: [quasi-experiment]
discipline: [stem education]
audience: [instructors, curriculum designers, instructional designers]
level: [secondary]
page_kind: [evaluation]
---

> **Synthesis:** This quasi-experimental study investigates whether drone-based STEM instruction supported by teacher-AI co-designed simulations yields superior [[learning-gains|learning outcomes]] to the same hands-on drone curriculum delivered without simulations. It responds to a persistent challenge in drone-based STEM education ("dronagogy"): the scarcity of teacher-verified, curriculum-aligned interactive simulations, and the tendency of GenAI-produced resources to lack [[pedagogy|pedagogical]] validity. Using a pretest–posttest control group design with 30 secondary students (aged 13–17, Grades 8–11) in an eight-lesson after-school enrichment program, the study compared a Simulation-Assisted Group (SA-Group, n = 14) that additionally engaged with five interactive simulations against a Drone-Only Group (DO-Group, n = 16) that completed non-simulation versions of the same lessons. Both groups shared the same instructor, DJI Tello drone platform, hands-on tasks, and [[assessment|assessments]], differing only in the form of scaffolding.

The five simulations — Satellite Positioning, Virtual Flight, QuadPhysics, Dronography Angle-of-View, and Code Performance simulators — were co-developed through an iterative teacher-AI co-design process in which an experienced teacher (with no prior programming background) specified curricular objectives, target [[misconceptions]], and disciplinary constraints while a GenAI [[conversational-ai|chatbot]] (o1-mini) handled rapid prototyping. The authors frame teacher-AI co-design as the enabling means of resource production rather than the independent variable under study, which was the presence or absence of simulation-assisted scaffolding. Grounded in Kolb's experiential learning cycle, the simulations served as low-stakes pre-flight and reflective scaffolds that rendered causal flight mechanisms visible, reduced [[cognitive-offloading|cognitive load]], supported hypothesis testing, and enhanced learning visibility for teachers.

## Key Findings

- **STEM knowledge gains favored the simulation group.** The SA-Group gained M = 3.00 (SD = 1.24) versus M = 2.06 (SD = 1.06) for the DO-Group on the 10-item curriculum-aligned assessment — a statistically significant difference (t(28) = 2.23, p = .034) with a large effect size (d = 0.82).
- **Larger gains in 21st-century competencies overall.** Composite 21CS gains were M = 0.54 (SA) vs. M = 0.19 (DO), t(28) = 4.16, p < .001, d = 1.52 — a very large effect.
- **All four 4C domains improved significantly:** critical thinking (d = 1.25, p = .002), communication (d = 1.21, p = .003), [[creativity]] (d = 1.02, p = .010), and collaboration (d = 0.84, p = .030). Collaboration showed the smallest effect, likely because both groups engaged in team-based hands-on tasks.
- **Exploratory grade-level differences emerged.** Junior students (Grades 8–9) showed very large competency gains (overall 21CS d = 2.09, creativity d = 1.70) but no STEM-knowledge advantage (d = 0.28, n.s.); senior students (Grades 10–11) showed large knowledge (d = 1.19) and critical-thinking (d = 1.16) gains but negligible collaboration/creativity effects. These patterns are tentative given small subgroups.
- **[[qualitative-research|Qualitative]] analysis yielded five mechanisms:** enhanced [[student-engagement|engagement]] and [[motivation|motivational]] persistence; lowered cognitive load and operational confidence; bridging theory and practice through visible causal mechanisms; iterative design and collaborative [[problem-solving]] (e.g., "pair debugging" and testing ten code versions in two minutes); and increased learning visibility for formative support.
- **Simulations bridged the "abstraction-action gap."** By slowing action and isolating causal relationships (e.g., rotor speed vs. drag, GNSS trilateration), simulations let students manipulate variables and inspect consequences repeatedly before transfer to physical flight, improving conceptual access rather than merely exposure.

## What this means for practice

- **Educators.** Sequence simulations as pre-flight and reflective scaffolds around physical tasks—before challenging flights to build conceptual familiarity and after them to consolidate—rather than as standalone demonstrations.
- **Educators.** Pair each simulation with structured prompts that require prediction, explanation, and peer discussion, which is where the conceptual gains came from rather than from passive viewing.
- **Educators.** Read student parameter choices and errors during simulation work as real-time formative signals, since simulation makes otherwise invisible reasoning inspectable.
- **Instructional designers.** Redistribute cognitive and procedural demand across the experiential-learning cycle so conceptual explanation, code execution, and physical flight are not compressed into a single moment.
- **Curriculum designers.** Use simulation-assisted sequencing to extend repeated practice in under-resourced STEM settings where equipment cost, battery life, safety, and maintenance limit flight time.

## Limitations

- Group membership was determined by school affiliation rather than random assignment, so unmeasured confounding cannot be ruled out despite the pretest–posttest control-group design.
- The sample was small (N = 30; SA-Group n = 14, DO-Group n = 16), and the grade-level subgroup analyses were particularly underpowered, which makes those patterns exploratory.
- The STEM knowledge measure was a brief, locally developed 10-item test that, although curriculum-aligned and externally reviewed, is not a standardized measure of attainment; the 21st-century competencies measure was student self-report.
- Evidence comes from an eight-lesson after-school enrichment program with only six interview participants, which limits generalization to formal classroom settings and longer curricula.

## Connected Concepts

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

- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]] — also examines GenAI-supported scaffolding within active learning pedagogies
- [[lnenicka-secondary-students-genai-stem-2026]] — shares the secondary-students-in-STEM + generative-AI focus
- [[educational-robotics-pathways-2026]] — adjacent hands-on, technology-rich STEM learning using physical devices

## Citation

[From simulation to flight: Simulation-assisted drone learning with teacher-AI co-designed scaffolds for secondary students' STEM knowledge and competencies](https://doi.org/10.1016/j.caeai.2026.100651) — Yeung, R. C. Y., Yeung, C. H., Sun, D., Keane, T., & Yang, Y. (2026). *Computers and Education: Artificial Intelligence*, 11, 100651.
