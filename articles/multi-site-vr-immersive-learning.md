---
title: Design and Implementation of a Real-time Multi-site Immersive Learning System Using Photon Fusion
created: "2026-06-10T12:17:35-04:00"
updated: "2026-08-15"
type: article
tags: [edtech-platform, active-learning, student-experience, higher-ed, student-engagement, generative-ai, llm, ai-literacy, stem-education, scaffolding]
research_method: [system development]
discipline: [stem education]
audience: [student experience, teacher role]
level: [higher ed]
category: [engagement]
sources: ['raw/papers/2606.10325.md']
confidence: medium
---

> This paper develops a VR-based immersive learning environment using Photon Fusion that allows teachers and students to be present in the same virtual space regardless of physical locations. The system enables real-time verbal communication and interaction with 3D learning materials, achieving stable real-time communication and state synchronization across multiple players. Evaluation demonstrates stable communication performance, good usability, and minimal VR sickness. This work connects to [[edtech-platform]] design for distributed education and to [[active-learning]] research by providing a technology platform for shared virtual classroom experiences. The system addresses a practical infrastructure gap in multi-site education scenarios where physical co-presence is not possible.

## Key Findings

- A Photon Fusion-based architecture supports stable real-time communication and state synchronization among multiple players in a shared virtual classroom.
- Teachers and students can occupy the same virtual space regardless of physical location, with two-way voice communication and shared manipulation of 3D models.
- The design avoids the frame-rate instability of earlier peer-to-peer approaches (WebSocket/WebRTC with a server on a PC), where processing load depended on the head-mounted display (HMD) and degraded as simultaneous users increased.
- Evaluation results show stable communication performance, good usability, and minimal VR sickness, confirming effectiveness as an immersive learning environment.
- UI consistency was identified as an area needing improvement, and future work targets a wider variety of learning materials plus UI and network enhancements.

## Study Design & Evaluation

The system targets support for up to twenty participants, aiming for high usability through improved operability compared with earlier systems whose complex operation methods, such as hand tracking, resulted in poor usability. The evaluation involved 10 undergraduate and graduate students from the same academic department, aged 21 to 24 (9 men, 1 woman); 3 participants had prior VR experience while 7 had none. In a one-hour experiment using the Meta Quest 3 headset, participants launched the application and entered the VR classroom to familiarize themselves with the system, took a 10-minute break, re-entered the classroom, and conducted a science experiment. Afterwards they completed the System Usability Scale (SUS) and the Simulation Sickness Questionnaire (SSQ), while the frame rate of the teacher's device was recorded to evaluate device load.

## Implications for AI in Education

The system addresses a practical infrastructure gap in multi-site education: VR enables learning activities that are difficult to simulate in traditional classrooms, such as gaining a three-dimensional understanding of human structures or conducting chemistry experiments without physical constraints. By decoupling co-presence from physical location, platforms of this kind support distributed [[higher-ed]] and [[stem-education]] scenarios in which hands-on, immersive activities must be shared across sites. The documented trade-offs — usability, UI consistency, and motion sickness — offer a reference point for [[edtech-platform]] designers weighing the costs and benefits of real-time immersive environments against conventional video-based remote instruction.

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
