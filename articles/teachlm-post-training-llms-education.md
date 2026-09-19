---
title: "TeachLM: Post-Training LLMs for Education Using Authentic Learning Data"
created: "2026-08-21T08:00:00-04:00"
updated: "2026-09-19T09:24:40-04:00"
type: article
pedagogy: [project-based-learning]
technology: [generative-ai, intelligent-tutoring, llm, pedagogical-llm-training, simulating-students, student-modeling]
ethics: [privacy]
audience: [software developers]
research_method: [system development]
confidence: high
sources: [raw/papers/2510.05087.md]
---

> **Synthesis:** **Post-training an [[llm|LLM]] on *authentic* one-on-one learning data, rather than [[prompt-engineering|prompt engineering]] or synthetic-only data, substantially improves [[pedagogy|pedagogical]] and conversational quality.** TeachLM is fine-tuned (parameter-efficiently) on 100,000 hours of longitudinal, one-on-one student–tutor interactions from the Polygence platform, carefully anonymized for [[privacy]] and consent. The team first trains a high-fidelity **authentic [[student-modeling|student model]]** that generates realistic synthetic student–tutor dialogues, which then enables a novel multi-turn evaluation protocol for benchmarking tutor behavior at scale. Against off-the-shelf models, TeachLM approximately **doubles student talk time**, improves questioning style, increases dialogue turns by 50%, and delivers greater [[personalized-learning|personalization]] of instruction. The work is a direct counterpoint to the paper's finding that elaborate prompt engineering (their earlier "PolyPilot" tutor) could not close the gap with human tutoring.

## Key Findings

- **Prompt engineering is a stopgap, not a solution.** The authors built PolyPilot, a dynamically prompt-engineered project-based tutor on GPT-4, iterating for months with 70+ engaged users; even with [[rag|RAG]]-based examples and refined stage-dependent prompts, the gap between the LLM and a human tutor proved too large to close — e.g., varying the number and placement of questions or avoiding "wall-of-text" responses was inconsistent under prompting.
- **Authentic learning data is the missing ingredient.** One-on-one tutoring can yield two-sigma [[learning-gains|learning gains]] (Bloom), but high-quality data reflecting how *actual students* learn is scarce due to logistics, privacy protections, and data-quality concerns. Polygence's 100,000 hours span 150+ subjects with PhD-level tutors, 4–6 month longitudinal relationships, [[multimodal|multi-modal]] exchanges, and outcome-oriented projects (80% culminate in a showcaseable artifact).
- **A fine-tuned student model enables scalable, reproducible multi-turn evaluation.** Training an authentic student model on the same data lets the authors generate synthetic dialogues and evaluate tutor models on proxies for high-quality pedagogy — student talk time, questioning style, dialogue turns, and personalization — a protocol that is fast, scalable, and reproducible versus labor-intensive human assessment.
- **Fine-tuning on authentic data clearly beats off-the-shelf models.** TeachLM approximately doubles student talk time, improves questioning style, increases dialogue turns by 50%, and shows greater personalization — evidence that post-training on real learner–tutor interactions addresses the friction-minimizing, [[ai-sycophancy|sycophantic]] tendencies encoded in general-purpose LLMs.
- **Careful data curation and anonymization are central.** The pipeline includes dual-track transcription, diarization, cleaning (removing backchannels, aligning persona), consent per session, PII removal on internal servers, and enterprise-grade confidentiality for model providers — a model for ethically sourcing education data.

## What this means for practice

- **Software developers.** Invest in real learner–tutor corpora, not prompt tuning: TeachLM was fine-tuned on 100,000 hours of one-on-one Polygence tutoring, and the earlier prompt-engineered PolyPilot tutor could not close the gap to human tutors even with [[rag|RAG]]-based examples and stage-dependent prompts.
- **Software developers.** Use a fine-tuned authentic student model to generate synthetic dialogues for multi-turn evaluation, which makes tutor benchmarking fast, scalable, and reproducible compared with labor-intensive human review of long dialogues.
- **Software developers.** Target the measured pedagogy proxies — student talk time, questions per tutor turn, words per tutor turn, dialogue turns, and personalization — as concrete iteration goals, since fine-tuning roughly doubled student talk time and increased dialogue turns by 50%.
- **Designers.** Budget for consent, anonymization, and privacy engineering up front: per-session consent, PII removal on internal servers, dual-track transcription, and enterprise-grade confidentiality were prerequisites for using this data at all.

## Limitations

- Evaluations of the fine-tuned models rely on a synthetic student model trained on the same Polygence data rather than on real students; the authors state that a rigorous, large-scale human evaluation will be addressed in an upcoming report.
- The benchmarks are described as a preliminary case study using a handful of straightforward proxies, because good pedagogy is context-dependent and more complex evaluation is deferred to future work.
- Training data comes from one commercial platform (Polygence), spanning PhD-level tutors and projects that typically last 4–6 months, so transfer to other tutoring contexts and learner populations is untested.
- The prompt-engineered predecessor tutor was tried with only n = 71 students, a small deployment on which the counterpoint to fine-tuning rests.

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
