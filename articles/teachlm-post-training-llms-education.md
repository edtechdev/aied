---
title: "TeachLM: Post-Training LLMs for Education Using Authentic Learning Data"
created: "2026-08-21T08:00:00-04:00"
updated: "2026-08-21T08:50:57-04:00"
type: article
tags: [pedagogical-llm-training, llm, simulating-students, privacy, generative-ai, intelligent-tutoring, student-modeling, project-based-learning]
confidence: high
sources: [raw/papers/2510.05087.md]
---

> **Post-training an [[llm|LLM]] on *authentic* one-on-one learning data, rather than [[prompt-engineering|prompt engineering]] or synthetic-only data, substantially improves pedagogical and conversational quality.** TeachLM is fine-tuned (parameter-efficiently) on 100,000 hours of longitudinal, one-on-one student–tutor interactions from the Polygence platform, carefully anonymized for [[privacy]] and consent. The team first trains a high-fidelity **authentic student model** that generates realistic synthetic student–tutor dialogues, which then enables a novel multi-turn evaluation protocol for benchmarking tutor behavior at scale. Against off-the-shelf models, TeachLM approximately **doubles student talk time**, improves questioning style, increases dialogue turns by 50%, and delivers greater personalization of instruction. The work is a direct counterpoint to the paper's finding that elaborate prompt engineering (their earlier "PolyPilot" tutor) could not close the gap with human tutoring.

## Key Findings

- **Prompt engineering is a stopgap, not a solution.** The authors built PolyPilot, a dynamically prompt-engineered project-based tutor on GPT-4, iterating for months with 70+ engaged users; even with [[rag|RAG]]-based examples and refined stage-dependent prompts, the gap between the LLM and a human tutor proved too large to close — e.g., varying the number and placement of questions or avoiding "wall-of-text" responses was inconsistent under prompting.
- **Authentic learning data is the missing ingredient.** One-on-one tutoring can yield two-sigma [[learning-gains|learning gains]] (Bloom), but high-quality data reflecting how *actual students* learn is scarce due to logistics, privacy protections, and data-quality concerns. Polygence's 100,000 hours span 150+ subjects with PhD-level tutors, 4–6 month longitudinal relationships, multi-modal exchanges, and outcome-oriented projects (80% culminate in a showcaseable artifact).
- **A fine-tuned student model enables scalable, reproducible multi-turn evaluation.** Training an authentic student model on the same data lets the authors generate synthetic dialogues and evaluate tutor models on proxies for high-quality pedagogy — student talk time, questioning style, dialogue turns, and personalization — a protocol that is fast, scalable, and reproducible versus labor-intensive human assessment.
- **Fine-tuning on authentic data clearly beats off-the-shelf models.** TeachLM approximately doubles student talk time, improves questioning style, increases dialogue turns by 50%, and shows greater personalization — evidence that post-training on real learner–tutor interactions addresses the friction-minimizing, sycophantic tendencies encoded in general-purpose LLMs.
- **Careful data curation and anonymization are central.** The pipeline includes dual-track transcription, diarization, cleaning (removing backchannels, aligning persona), consent per session, PII removal on internal servers, and enterprise-grade confidentiality for model providers — a model for ethically sourcing education data.

## Practical Implications

- **Invest in real learner–tutor corpora, not just prompt tuning.** For developers of [[intelligent-tutoring|AI tutors]], the transferable lesson is that genuine interaction data (with consent and anonymization) unlocks quality that prompting cannot; platform owners with longitudinal tutoring logs hold unusually valuable training material.
- **Use a fine-tuned student model for multi-turn tutor evaluation.** Synthetic-student-driven evaluation offers a fast, reproducible complement (or alternative) to expensive human expert review of long dialogues, which is especially useful for iterating on tutor behavior.
- **Design for student talk time and questioning as quality targets.** The evaluated proxies — balancing talk time, open questioning, dialogue length, and personalization — give concrete, measurable objectives for pedagogical LLM behavior.

## Connected Concepts

- [[pedagogical-llm-training]]
- [[llm]]
- [[simulating-students]]
- [[privacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[student-modeling]]
- [[project-based-learning]]

## Connected Articles

- [[learnlm-improving-gemini-learning]] — LearnLM: Improving Gemini for Learning
- [[educasim-cs1-instructional-practice]] — EducaSim: Interactive Simulacra for CS1 Instructional Practice

## Citation

Perczel, J., Chow, J., & Demszky, D. (2025). *[TeachLM: Post-training LLMs for education using authentic learning data](https://arxiv.org/abs/2510.05087)*.
