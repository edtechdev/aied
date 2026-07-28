---
title: "VISMATIC: Secure Containerized Framework for Process-Oriented CS Education Monitoring"
created: 2026-06-09
updated: 2026-06-09
type: concept
tags: [edtech-platform, academic-integrity, stem-education, higher-ed, formative-assessment, scaffolding]
sources: [raw/papers/2606.05929.md]
confidence: high
---
# VISMATIC: Secure Containerized Framework for Process-Oriented CS Education Monitoring

**Arroyo, López & Torres (2026)** — Universidad de Granada.
📄 [Full text (arXiv)](https://arxiv.org/abs/2606.05929)

Addresses a critical tension in [[stem-education|CS education]]: the widespread adoption of generative AI makes it impossible to distinguish authentic student effort from AI code synthesis by evaluating final submissions alone. The paper presents **VISMATIC**, a rootless containerized framework that pairs robust environment isolation with explicit user-interaction tracking at the API level.

**Key innovation:** VISMATIC captures macro-level behavioral metrics (keystroke patterns, command execution timing, copy-paste behavior) that successfully flag statistical anomalies indicative of automated or off-platform workflows — while preserving student anonymity. Unlike JupyterHub, which exposes the host system to arbitrary shell commands, VISMATIC's rootless containers prevent lateral movement and host compromise.

The framework provides a scalable blueprint for [[academic-integrity|preserving pedagogical integrity]] in the AI era, enabling educators to enforce authentic coding discipline through [[formative-assessment|process-oriented monitoring]] rather than final-output evaluation. Open source on GitHub for institutional adoption.

## Related Pages
- [[academic-integrity]] — Academic integrity challenges in AI-era CS education
- [[formative-assessment]] — Process-oriented assessment and monitoring approaches
- [[stem-education]] — CS and computing education
- [[edtech-platform]] — Educational technology platforms and infrastructure
- [[scaffolding]] — Scaffolding authentic programming practice
- [[ai-generated-traces-novice-programmers]] — Detecting AI-generated vs human code in education

## Citation
**APA:** Arroyo, G., López, L., & Torres, J. C. (2026). Securing the Sandbox: A Rootless Containerized Framework for Process-Oriented Monitoring in Computer Graphics Education. *arXiv:2606.05929*.
