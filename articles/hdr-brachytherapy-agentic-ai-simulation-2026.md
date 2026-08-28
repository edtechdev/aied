---
title: "Agentic AI-driven Immersive Simulation: A Knowledge-Aware Virtual Training Platform for High Dose Rate (HDR) Brachytherapy"
created: "2026-08-13T09:28:20-04:00"
updated: "2026-08-24T11:15:00-04:00"
type: article
tags: [simulation, health-education, rag, agentic-ai, professional-training, multimodal, personalized-learning]
sources: ['raw/papers/2608.08163.md']
confidence: high
---

> **Synthesis:** Xu et al. (2026) present an agentic AI-driven immersive simulation for training in **High Dose Rate (HDR) brachytherapy**, integrating [[simulation|virtual reality (VR)]] and mobile computing to create a high-fidelity, risk-free environment for mastering complex procedural skills. A knowledge-aware assistant uses [[rag|Retrieval-Augmented Generation (RAG)]] to ground agent interactions in authoritative clinical guidelines, providing natural-language interfaces and hands-free, real-time guidance during intricate maneuvers. A prototype on Meta Quest 3 with a local GPU-backed AI backend demonstrated a feasible architecture with suitable latency and high context precision, answer completeness, and relevance. The work connects [[simulation]], [[professional-training]], [[medical-education]], [[pedagogical-safety]], and [[agentic-ai]] research.

## Key Findings

1. An agentic [[agentic-ai|AI-driven]] immersive [[simulation]] platform for HDR vaginal cylinder brachytherapy integrates VR and mobile computing to create a high-fidelity, [[pedagogical-safety|risk-free]] training environment, eliminating the radiation-safety and privacy hazards of physical practice with live radioactive sources.
2. A [[rag|Retrieval-Augmented Generation (RAG)]] knowledge-aware assistant grounds [[llm|LLM]] responses in authoritative clinical guidelines, providing hands-free, natural-language, real-time guidance and materially reducing [[hallucination-risk|hallucination]] risk.
3. A prototype deployment (Meta Quest 3 frontend linked to a local GPU-accelerated backend) demonstrated feasible architecture with acceptable end-to-end latency of 3–5 seconds and strong retrieval and generation metrics across basic, medium, and advanced question categories.
4. The study remains a technical feasibility demonstration: evaluation is limited to objective metrics and a single domain-expert user study, and the system currently lacks automated [[assessment]] and [[adaptive-learning|adaptive feedback]] mechanisms.

## Immersive, Risk-Free Clinical Training

The convergence of the Metaverse with [[llm|LLM]]-based [[agentic-ai|AI agents]] is catalyzing a shift toward autonomous, immersive, and [[personalized-learning|personalized]] pedagogical frameworks in [[medical-education|medical education]]. This system targets HDR vaginal cylinder brachytherapy in cancer care, integrating [[simulation|VR and mobile computing]] to let trainees master complex procedural skills without the facility or safety constraints of physical anatomy or live radioactive sources. By constructing a high-fidelity, [[pedagogical-safety|risk-free]] virtual clinical environment, it mitigates the privacy risks of physical pelvic examinations and eliminates the radiation-safety hazards of directly handling live radioactive sources. [[game-based-learning|Gamified elements]] and interactive scenarios promote [[student-engagement|engagement]] and knowledge retention compared with traditional [[active-learning|passive learning]], and the virtual platform makes [[professional-training|training]] accessible regardless of geographic location, enabling global collaboration among learners and experts.

## RAG-Grounded Knowledge Assistance

A core contribution is the seamless integration of a [[rag|knowledge-aware assistant]] that grounds agent interactions in authoritative clinical guidelines via [[rag|Retrieval-Augmented Generation]]. This enables an interactive [[pedagogical-agent|agent]] to provide [[conversational-ai|natural-language interfaces]] and hands-free, real-time guidance during intricate medical maneuvers. A voice-driven pipeline captures [[multimodal|speech]] queries directly through the headset microphone array, transmitting raw audio to the backend for transcription and intent analysis, while a low-latency [[multimodal|text-to-speech]] module delivers procedural guidance through the headset's spatialized audio. A diegetic user interface projects a persistent conversation log and relevant clinical data onto virtual monitors within the 3D environment. By anchoring responses in the medical literature, the assistant reduces [[hallucination-risk|hallucination]] risk and supplies [[scaffolding|real-time instructional scaffolding]] and [[feedback]] that is clinically accurate and procedurally relevant.

## System Architecture

The platform is designed as a modular, distributed system built on an edge-cloud computing paradigm, comprising an immersive frontend at the VR headset and a cognitive backend on a high-performance server. This architecture enables real-time, hands-free pedagogical support by offloading computationally intensive tasks ([[llm|LLM inference]] and vector retrieval) while maintaining high-fidelity visualization on the mobile headset. The backend functions as an [[intelligent-tutoring|intelligent tutor]], with a data-ingestion engine that constructs a structured knowledge base from clinical documentation and a real-time [[rag|RAG]] layer that supplies the evidence-based references needed to synthesize grounded results. Documents are chunked into 512-token segments, embedded, and indexed in a FAISS vector store; a hybrid retrieval mechanism combines dense and sparse search, and a [[generative-ai|generative LLM]] synthesizes the retrieved context into concise, actionable instructions suitable for verbal delivery.

## Validation

The prototype comprised a Meta Quest 3 interface linked to a local GPU-accelerated AI backend, demonstrating a feasible architecture with suitable end-to-end latency (3–5 seconds total) and high context precision, answer completeness, and relevance. Using the [[ai-ed-evaluation|RAGAS framework]] on 52 expert-generated question-answer pairs spanning basic, medium, and advanced difficulty levels, retrieval and generation metrics were strong, with a domain-specific medical embedding model improving answer completeness and relevance for medical queries. The paper frames this as a proof-of-concept validation of technical feasibility rather than an outcome study.

## Limitations and Future Work

The authors acknowledge that evaluation has focused on objective metrics rather than [[learning-gains|learning effectiveness]], with validation limited to a single domain-expert (physician) user study rather than a broad learner sample. The [[rag|RAG-based assistant]] minimizes hallucination risk but is ultimately bounded by the quality and number of documents it can reference, so it cannot account for institution-specific protocols or rare clinical scenarios. The current system also lacks automated [[assessment]] or [[adaptive-learning|adaptive feedback]]: it provides real-time procedural guidance but does not quantitatively evaluate procedural correctness or spatial precision. Future work plans controlled [[student-ai-interaction|user studies]], [[human-in-the-loop-ai|expert-in-the-loop (EITL)]] refinement via [[reinforcement-learning|Reinforcement Learning from Human Feedback (RLHF)]], hybrid knowledge retrieval for edge cases, and VR modules for additional HDR applications.

## Implications for AI in Education

This work illustrates a path from [[simulation]] and [[agentic-ai|agentic AI]] toward hands-free, [[personalized-learning|personalized]] professional training that is [[pedagogical-safety|safer and more scalable]] than physical practice. It demonstrates how [[rag|RAG]] grounding can improve [[trust|trustworthiness]] in high-stakes clinical domains, and how [[multimodal]], [[embodied-learning|embodied]] interfaces can reduce cognitive load during complex procedures. The identified gaps — the need for automated [[assessment]], [[adaptive-learning|adaptive feedback]], and validation of actual [[learning-gains|learning outcomes]] — point to where [[ai-ed-evaluation|rigorous evaluation]] of such platforms is still required before they can be positioned as reliable complements to physical training.

## Connected Concepts

- [[simulation]]
- [[professional-training]]
- [[rag]]
- [[agentic-ai]]
- [[multimodal]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[pedagogical-safety]]
- [[human-in-the-loop-ai]]

## Connected Articles

- [[tibetcpr-ai-training-feedback]]
- [[astra-atco-training-simulator]]
- [[medgame-llm-medical-education-gamification]]
- [[ai-use-critical-thinking-medical-students-2026]]
- [[agentschool-multi-agent-simulation-education-2026]]

## Citation

Xu, R., Barasa, K., Kumal, M., Liu, X., Zhou, W., & Qian, X. (2026). [*Agentic AI-driven immersive simulation: A knowledge-aware virtual training platform for high dose rate (HDR) brachytherapy*](https://arxiv.org/abs/2608.08163).
