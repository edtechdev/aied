---
title: "VISMATIC: Secure Containerized Framework for Process-Oriented CS Education Monitoring"
created: 2026-06-09
updated: 2026-06-09
type: article
tags: [edtech-platform, academic-integrity, stem-education, higher-ed, formative-assessment, scaffolding]
sources: ['raw/papers/2606.05929.md']
confidence: high
---

Addresses a critical tension in [[stem-education|CS education]]: the widespread adoption of generative AI makes it impossible to distinguish authentic student effort from AI code synthesis by evaluating final submissions alone. The paper presents **VISMATIC**, a rootless containerized framework that pairs robust environment isolation with explicit user-interaction tracking at the API level.

**Key innovation:** VISMATIC captures macro-level behavioral metrics (keystroke patterns, command execution timing, copy-paste behavior) that successfully flag statistical anomalies indicative of automated or off-platform workflows — while preserving student anonymity. Unlike JupyterHub, which exposes the host system to arbitrary shell commands, VISMATIC's rootless containers prevent lateral movement and host compromise.

The framework provides a scalable blueprint for [[academic-integrity|preserving pedagogical integrity]] in the AI era, enabling educators to enforce authentic coding discipline through [[formative-assessment|process-oriented monitoring]] rather than final-output evaluation. Open source on GitHub for institutional adoption.

## Connected Concepts

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

Arroyo, G., López, L., & Torres, J. C. (2026). Securing the Sandbox: A Rootless Containerized Framework for Process-Oriented Monitoring in Computer Graphics Education. [arXiv:2606.05929](https://arxiv.org/abs/2606.05929).
