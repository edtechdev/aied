---
title: Co-Creating Buildable and Open Social Robot Study Companions with University Students
created: "2026-06-17T04:33:04-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
foundations: [human-ai-collaboration]
technology: [intelligent-tutoring]
stakeholders: [student-experience]
research_method: [system development, user study]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
sources: ['raw/papers/2606.15239.md']
confidence: high
---

> **Synthesis:** Design for Assembly (DfA) and Design for Disassembly (DfD) interventions reshape how a build feels before they shorten how long it takes.

## Key Findings

- Across two studies with developers and first-time builders, system [[usability-research|usability]] climbed from Poor to Excellent (SUS 59.4 → 89.4).
- Perceived workload trended downward (NASA-TLX 4.29 → 4.00), and mean assembly time trended downward (21.4 → 13.7 minutes, with a learning effect among junior builders).
- Perceived workload, not completion time, appears to govern whether students take up open hardware.
- Orientation cues and navigation continuity for first-time builders emerged as the next documentation frontier.

## Study Design & Method

Open-source social robots offer [[accessibility]], repairability, and student empowerment, yet the build itself often presents a barrier: existing platforms either ship pre-assembled, foreclosing hands-on learning, or expose students to unfamiliar fasteners, opaque wiring, and inaccessible service points that erode [[student-engagement|engagement]]. Working with university students in Guyana and Estonia, the authors applied the Double Diamond framework to co-create the Robot Study Companion (RSC) v4.1: mapping pain points, then redesigning its chassis around twist-lock fasteners, snap-fit joints, and tool-free service latches. The redesign was evaluated across two studies with both developers and first-time builders using the System Usability Scale (SUS) and the NASA-TLX workload instrument.

## What this means for practice

- **Instructors.** Select a buildable platform on perceived workload rather than clock time: first-time builders took 39.1 minutes (SD = 7.5) to assemble and still rated the hardware Good (SUS 74.6), so the binding constraint is how heavy the build feels, not how long it takes.
- **Instructors.** Add an explicit part-identification and wiring step to the session, and label the physical parts: wiring and part identification accounted for the residual Mental Demand reported by end users, and one participant asked for labeled parts to reduce mental load.
- **Instructors.** Pair video guidance with static step-by-step diagrams: six of seven participants named video the most helpful feature, yet the pause-act-rewind cycle made Orientation and Navigation the lowest-scoring documentation subscale.
- **Instructors.** Test tool-free service access during onboarding: all seven participants reached the RPi's SD/USB ports, but one needed a prompt to locate the SD card slot and another initially missed the side-panel port latches.
- **Designers.** Build tactile feedback into snap-fit joints and add hooks or compartments for wiring: first-time builders feared breaking the snap-fit components (a concern absent among the developers) and struggled to fit wires inside the housing.

## Limitations

- Study 1 benchmarked the RSC development team itself: four developers, two of them senior, evaluating a redesign they had worked on, which the authors flag as self-evaluation bias.
- Study 2 validated only v4.1 with seven students from two partner universities (Guyana n = 4, Tartu n = 3), so user-side gains cannot be quantified as a within-subjects delta.
- Study 1's task order may have inflated v4 performance through practice transfer, and the deliberately thinned alpha-stage v4.1 documentation means the cross-version documentation clarity scores do not fully reflect documentation quality.
- Thematic coding lacked inter-rater reliability checks, and the single-session design cannot capture long-term attachment or perceived agency.

## Connected Concepts

- [[pedagogical-agent]]
- [[design-thinking]]
- [[open-source]]
- [[stem-education]]
- [[educational-robotics]]
- [[higher-ed]]

## Connected Articles

- [[bridging-instructional-design-framework-math]] — WIP: Bridging the Gap Between Instructional Design and Pedagogical Use: A Framework for Mathematics Educators
- [[edumirror-educational-social-dynamics]] — EduMirror: Modeling Educational Social Dynamics with Value-driven Multi-agent Simulation
- [[adaptive-virtual-patient-psychotherapy-training]] — The Empirically Grounded Adaptive Virtual Patient for Psychotherapy Training
- [[genai-academic-search-workshop]] — Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)
- [[cognitive-offloading-llm-synthesis-writing]] — Profiling cognitive offloading in LLM-mediated synthesis writing: Volume vs. content
- [[student-math-competence-clustering]] — Archetypes or ability? Clustering for modeling student mathematical competence

## Citation

Baksh, F., Zorec, M. B., Baksh, F., & Kruusamäe, K. (2026). [*Co-Creating Buildable and Open Social Robot Study Companions with University Students*](https://arxiv.org/abs/2606.15239). ICSR + ART 2026, London.
