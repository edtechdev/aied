---
title: "Securing the Sandbox: A Rootless Containerized Framework for Process-Oriented Monitoring in Computer Graphics Education"
created: "2026-06-09T04:33:04-04:00"
updated: "2026-09-18T19:55:59-04:00"
type: article
foundations: [academic-integrity]
pedagogy: [scaffolding]
assessment: [formative-assessment]
research_method: [system development]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/2606.05929.md']
confidence: high
audience: [software developers, instructors, administrators]
page_kind: [framework]
technology: [edtech-platform]
---

> **Synthesis:** Addresses a critical tension in [[stem-education|CS education]]: the widespread adoption of [[generative-ai|generative AI]] makes it impossible to distinguish authentic student effort from AI code synthesis by evaluating final submissions alone. The paper presents **VISMATIC**, a rootless containerized framework that pairs robust environment isolation with explicit user-interaction tracking at the API level.

**Key innovation:** VISMATIC captures macro-level behavioral metrics (keystroke patterns, command execution timing, copy-paste behavior) that successfully flag statistical anomalies indicative of automated or off-platform workflows — while preserving student anonymity. Unlike JupyterHub, which exposes the host system to arbitrary shell commands, VISMATIC's rootless containers prevent lateral movement and host compromise.

The framework provides a scalable blueprint for [[academic-integrity|preserving pedagogical integrity]] in the AI era, enabling educators to enforce authentic coding discipline through [[formative-assessment|process-oriented monitoring]] rather than final-output evaluation. [[open-source|Open source]] on GitHub for [[governance|institutional]] adoption.

## What this means for practice

- **Instructors.** Treat telemetry as a screening signal, never as proof: the authors note that API-level event logs capture interaction patterns but not intent, so corroborate any flag with an oral interview about the flagged code, a comparison of exam performance against platform activity, and targeted plagiarism detection on notebook cells.
- **Administrators.** Use the pilot's cost profile to justify a controlled trial rather than enterprise hardware — VISMATIC ran for 19 active students, logging 1,880 discrete API events over approximately 57 active student-hours on a single Raspberry Pi 5 node rated for a load of 10 to 20 students.
- **Instructors.** Shift some assessment weight from the final artifact to the development process by reviewing session persistence, temporal rhythm, and workload composition alongside the submission, and use those signals for [[formative-assessment]] checkpoints rather than only for integrity policing.
- **Software developers.** Keep student workloads on managed infrastructure and treat the closed course library and read-only materials as load-bearing controls, since the architecture depends on students being unable to download notebooks for local, offline execution.
- **Administrators.** Pair deployment with a published data-protection rationale: the framework avoids passive keep-alive telemetry and keeps behavioral logs separate from official academic records, which is what makes [[academic-integrity|integrity monitoring]] defensible to students and regulators.

## Limitations

- The evidence base is a pilot cohort of 19 active students in a single computer graphics course, measured as 1,880 discrete API events over approximately 57 active student-hours — far too few cases to validate anomaly detection thresholds or estimate false-positive rates.
- The authors state plainly that API-level event logs capture interaction patterns but not intent; a student may leave an automated script running for reasons unrelated to dishonesty or work offline and later upload solutions, so no flag in this study was corroborated against actual misconduct.
- There is no control group or side-by-side comparison with an unmonitored JupyterHub deployment, so the security advantage is argued architecturally rather than measured; isolation results come from one single-tenant deployment observed between March and May.
- The authors do not claim absolute security and describe the work as a risk-management approach, and the stated deterrence effect — that measuring dedication discourages shortcuts — is an expectation rather than an outcome the study measured.

## Connected Concepts
- [[cs-education]]
- [[open-source]]
- [[automated-assessment]]

- [[stem-education]]
- [[academic-integrity]]
- [[formative-assessment]]
## Connected Articles

- [[ai-learning-tools-engineering-education-needs]] — Designing Needs- and Attention-Aware AI Learning Tools for Engineering Education: Insights from Psychological Outcomes
- [[vibe-coding-programming-process-visualizer]] — From Idea to Classroom in Days: Using "Vibe Coding" to Create a Programming Process Visualizer from IDE Activity Logs
- [[hybrid-e-assessment-semi-automated-grading]] — Hybrid E-Assessment in Higher Education: Semi-Automated Grading of Paper-Based Written Examinations
- [[moodle-ai-tutoring-deep-learning]] — From Surface Learning to Deep Understanding: A Grounded AI Tutoring System for Moodle
- [[tibetcpr-ai-training-feedback]] — TibetCPR: A Multimodal Tactile Feedback System for CPR Training in High-Altitude Regions
- [[multi-site-vr-immersive-learning]] — Design and Implementation of a Real-time Multi-site Immersive Learning System Using Photon Fusion

## Citation

Arroyo, G., López, L., & Torres, J. C. (2026). [*Securing the Sandbox: A Rootless Containerized Framework for Process-Oriented Monitoring in Computer Graphics Education*](https://arxiv.org/abs/2606.05929).
