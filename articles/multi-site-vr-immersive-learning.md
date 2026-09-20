---
title: Design and Implementation of a Real-time Multi-site Immersive Learning System Using Photon Fusion
created: "2026-06-10T12:17:35-04:00"
updated: "2026-09-17T02:30:30-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [active-learning, scaffolding, student-engagement]
technology: [generative-ai, llm, edtech-platform]
stakeholders: [student-experience]
research_method: [system development]
discipline: [stem education]
audience: [learners, instructors]
level: [higher ed]
sources: ['raw/papers/2606.10325.md']
confidence: medium
---

> **Synthesis:** This paper develops a VR-based immersive learning environment using Photon Fusion that allows teachers and students to be present in the same virtual space regardless of physical locations. The system enables real-time verbal communication and interaction with 3D learning materials, achieving stable real-time communication and state synchronization across multiple players. Evaluation demonstrates stable communication performance, good [[usability-research|usability]], and minimal VR sickness. This work connects to [[edtech-platform]] design for distributed education and to [[active-learning]] [[research-methods-aied|research]] by providing a technology platform for shared virtual classroom experiences. The system addresses a practical infrastructure gap in multi-site education scenarios where physical co-presence is not possible.

## Key Findings

- A Photon Fusion-based architecture supports stable real-time communication and state synchronization among multiple players in a shared virtual classroom.
- Teachers and students can occupy the same virtual space regardless of physical location, with two-way voice communication and shared manipulation of 3D models.
- The design avoids the frame-rate instability of earlier peer-to-peer approaches (WebSocket/WebRTC with a server on a PC), where processing load depended on the [[virtual-and-augmented-reality|head-mounted display]] (HMD) and degraded as simultaneous users increased.
- Evaluation results show stable communication performance, good usability, and minimal VR sickness, confirming effectiveness as an immersive learning environment.
- UI consistency was identified as an area needing improvement, and future work targets a wider variety of learning materials plus UI and network enhancements.

## Study Design & Evaluation

The system targets support for up to twenty participants, aiming for high usability through improved operability compared with earlier systems whose complex operation methods, such as hand tracking, resulted in poor usability. The evaluation involved 10 undergraduate and graduate students from the same academic department, aged 21 to 24 (9 men, 1 woman); 3 participants had prior VR experience while 7 had none. In a one-hour experiment using the Meta Quest 3 headset, participants launched the application and entered the VR classroom to familiarize themselves with the system, took a 10-minute break, re-entered the classroom, and conducted a science experiment. Afterward they completed the System Usability Scale (SUS) and the [[simulation]] Sickness [[self-report-measures|Questionnaire]] (SSQ), while the frame rate of the [[teacher-role|teacher]]'s device was recorded to evaluate device load.

## What this means for practice

- **Instructors.** Use a distributed VR classroom for activities a traditional room cannot provide — gaining a three-dimensional understanding of human structures or running [[chemistry-education|chemistry]] experiments without physical constraints — because co-presence is decoupled from physical location and supports [[higher-ed]] and [[stem-education]] scenarios where hands-on work must be shared across sites.
- **Instructors.** Build in a familiarization pass before content: in the one-hour evaluation, participants entered the classroom to get used to the system, took a 10-minute break, and only then re-entered to conduct the science experiment.
- **Instructors.** Assume usability will be uneven and give novices extra support — the average SUS score was 69.7 (grade B) but individual ratings ranged from 50.0 (D) to 92.5 (A), and UI consistency was identified as the main area needing improvement.
- **Designers.** Set rendering and network budgets from the measured baseline with ten participants: the teacher's device averaged 72.47 fps (SD = 0.95) and end-to-end audio response time averaged 1.968 seconds (SD = 0.063 seconds).
- **Designers.** Plan for oculomotor and disorientation symptoms rather than nausea — SSQ averages were 17.69 and 10.83 against 3.18 for nausea, while the total score of 12.8 still indicated minimal VR sickness — and treat these trade-offs as the reference point when weighing a [[edtech-platform|real-time immersive environment]] against conventional [[video-education|video-based]] remote instruction.

## Limitations

- The evaluation involved 10 undergraduate and graduate students from the same academic department, aged 21 to 24 (9 men, 1 woman), and only 3 of them had prior VR experience.
- A single one-hour lab session tested one chemistry demonstration (chlorine gas bleaching blue litmus paper); the system targets support for up to twenty participants but was evaluated with 10.
- All participants and the teacher were in the same physical location, so the multi-site scenario the system is built for was not itself tested.
- Usability and sickness results come from self-report instruments (SUS and SSQ) in this small sample, with scores spanning 50.0 to 92.5, and no learning outcome was measured.

## Connected Concepts

- [[edtech-platform]]
- [[active-learning]]
- [[simulation]] — science experiments that are hard to run in a traditional classroom
- [[embodied-learning]] — hands-on, three-dimensional understanding
- [[student-experience]] — usability and VR-sickness outcomes
- [[student-engagement]] — real-time co-presence and interaction
- [[higher-ed]] — distributed university teaching scenarios
- [[stem-education]] — science activities shared across sites
- [[experiential-learning]] — immersive, hands-on learning activities
## Connected Articles

- [[genai-minoritized-knowledges-disability]] — Generative AI and the marginalization of minoritized knowledges in higher education: the case of disability
- [[bridging-instructional-design-framework-math]] — WIP: Bridging the Gap Between Instructional Design and Pedagogical Use: A Framework for Mathematics Educators
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid E-Assessment in Higher Education: Semi-Automated Grading of Paper-Based Written Examinations
- [[trio-ethnography-llm-programming-education]] — Beyond Perspectives: A Trio-Ethnography of Interpretation Evolution in LLM-Supported Programming Education
- [[edumirror-educational-social-dynamics]] — EduMirror: Modeling Educational Social Dynamics with Value-driven Multi-agent Simulation
- [[adaptive-virtual-patient-psychotherapy-training]] — The Empirically Grounded Adaptive Virtual Patient for Psychotherapy Training
- [[mixed-reality-engineering-learning]] — Mixed-reality learning in engineering education

## Citation

Wataru, I., & Nguyen, D. V. (2026). [*Design and Implementation of a Real-time Multi-site Immersive Learning System Using Photon Fusion*](https://arxiv.org/abs/2606.10325).
