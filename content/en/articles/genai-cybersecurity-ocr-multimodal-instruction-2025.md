---
title: "Integrating Generative AI into Cybersecurity Education: A Study of OCR and Multimodal LLM-Assisted Instruction"
created: "2026-08-13T18:49:42-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
pedagogy: [experiential-learning]
technology: [ai-technologies, generative-ai, llm, pedagogical-agent]
research_method: [system development]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/patel-genai-cybersecurity-ocr-multimodal-2025.md']
confidence: medium
audience: [instructors, instructional designers]
---

> **Synthesis:** Patel et al. (2025) present an LLM-assisted instructional integration with a virtual cybersecurity lab platform, addressing workforce reskilling needs driven by the digital transformation of Fourth Industrial Revolution (4IR) systems. Recognizing that the workforce must be reskilled and upskilled for STEM skills such as robotics, automation, AI, and security, the authors integrated a generative-AI instructional assistant into a prior [[experiential-learning|experiential learning]] platform. The system assists trainees by acting as an instructional assistant, helping students build skill sets while performing experiential learning exercises.

## Key Findings

- The rapid digital transformation of **4IR systems is transforming workforce needs**, increasing skill-set gaps, especially for older workers, with growing emphasis on robotics, automation, AI, and security skills.
- **Generative AI can aid workforce building** by acting as an instructional assistant that helps trainees build skills during experiential learning exercises.
- The paper presents a **generative-AI-based instructional assistant integrated into a virtual cybersecurity lab platform**, leveraging OCR and [[multimodal]] LLM capabilities to assist instruction.
- The approach supports **experiential, hands-on learning** in cybersecurity education.

## Study Design & Method

This is a **[[research-methods-aied|research]]-category full paper** describing the design and integration of an LLM-assisted instructional assistant into a virtual cybersecurity lab platform. The system uses generative AI (including OCR and multimodal LLM capabilities) to act as an instructional assistant within an experiential learning environment, guiding trainees through exercises. The paper describes the architecture, integration, and use of the system to support skill development in cybersecurity, responding to workforce reskilling demands.

## What this means for practice

- **Instructors.** Integrate a generative-AI instructional assistant into the hands-on lab so trainees get on-demand help while performing the exercise, which the paper's live-course feedback rated 7.83 on a 1-to-10 scale across 42 responses.
- **Instructors.** Use a zero-shot OCR plus LLM pipeline to extract slide text and regenerate simplified instructions in real time, bringing modern generative capability into a legacy platform for minimal infrastructure and integration effort.
- **Instructional designers.** Choose the pipeline by slide type: a multimodal LLM handled dense visual slides better, while the OCR-based pipeline delivered comparable instructional value on text-centric slides at significantly lower computational overhead and operational cost.
- **Instructional designers.** Design the AI as an assistant that supports the [[experiential-learning]] exercise rather than as a standalone tutor, and keep a human check on simplified instructions before trainees rely on them in a security lab.

## Limitations

- **Single context.** The paper focuses on a specific cybersecurity lab context, and the described study's empirical evaluation scope is not fully detailed in the abstract.
- **Generalizability.** The emphasis is on workforce reskilling in cybersecurity, so transfer to other disciplines and to traditional academic settings may be limited.
- **AI accuracy and oversight.** The reliance on LLM assistance raises considerations about accuracy and oversight in instructional content.

## Connected Concepts

- [[generative-ai]]
- [[llm]]
- [[cs-education]]
- [[higher-ed]]
- [[experiential-learning]]
- [[intelligent-tutoring]]

## Connected Articles

- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM: LLMs and Robotic Simulation
- [[jeon-isd-agent-bench-2026]] — ISD Agent Bench
- [[teachbench-llm-teaching-evaluation]] — TeachBench: Evaluating LLM Teaching Ability

## Citation

Patel, K., Lin, Y.-Z., Raul, G., Shih, B. P.-J., Redondo, M. W., Saber Latibari, B., Pacheco, J., Salehi, S., & Satam, P. (2025). [*Integrating generative AI into cybersecurity education: A study of OCR and multimodal LLM-assisted instruction*](https://arxiv.org/abs/2509.02998).
