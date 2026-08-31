---
title: "Automatic Large Language Models Creation of Interactive Learning Lessons"
created: "2026-08-15T16:09:27-04:00"
updated: "2026-08-22T19:45:00-04:00"
type: article
tags: [llm, generative-ai, prompt-engineering, rag, learning-design, curriculum-design, professional-training, intelligent-tutoring, math-education, human-ai-collaboration]
audience: [software developers]
research_method: [system development]
discipline: [math education]
category: [instructional design, curriculum design]
sources: ['raw/papers/lin-llm-interactive-lesson-generation.md']
confidence: high
---

> **Synthesis:** Lin et al. (2025) explore automatic generation of interactive, scenario-based lessons designed to train novice human tutors who teach middle-school [[math-education|mathematics]] online. The system combines [[prompt-engineering|prompt engineering]] with a [[rag|Retrieval-Augmented Generation]] (RAG) approach on GPT-4o, generating lessons in English for three tutor-training topics (Encouraging Students' Independence, Encouraging [[help-seeking|Help-Seeking]] Behavior, Turning on Cameras). The key finding is that a **task decomposition** prompting strategy — breaking lesson generation into segments — produced higher-rated lessons than single-step generation, with a three-segment approach scoring highest. Two human evaluators rated the lessons using a rubric informed by lesson design research (Cohen's κ = 0.72), identifying strengths (well-structured content, time-saving) and limitations (generic [[feedback]], unclear sections, unreliable references), supporting a hybrid [[human-ai-collaboration|human–AI lesson-generation]] workflow.

## Context and motivation

One-on-one human tutoring is highly effective but difficult to scale due to a scarcity of skilled tutors. [[professional-training|Professional development]] programs train novice tutors, and online scenario-based training has emerged as a promising approach — but manually constructing the lessons at its center is time-consuming and expertise-heavy, making it costly to scale. The authors address this with LLM-based automatic lesson generation.

## Method

Lessons follow the SMART tutor-training framework's five-section structure (Title Page, Scenario I, Instruction, Scenario II, Conclusion). The generation pipeline has two steps: a lesson designer retrieves research articles on effective tutoring practices, which then prompt the GPT-4o model (gpt-4o-2024-05-13) via RAG to produce pedagogically grounded content.

To explore optimal prompting, lessons were generated under five segmentation strategies: one segment (whole lesson at once), two, three, four, and five segments — where each segment is generated using prior segments as context. Evaluation used two human coders experienced in tutoring middle-school math, applying a 17-code rubric (Cohen's κ = 0.72), with a third reviewer resolving discrepancies.

## Results

The three-segment approach achieved the highest average rating (14.67), while the one-segment approach scored lowest (10.67), indicating that moderate task decomposition improves lesson quality. However, the five-segment approach — the highest level of decomposition — performed slightly worse than three segments, suggesting that excessive decomposition may reduce clarity and pedagogical grounding. Across the rating codes, three-segment generation was particularly strong on feedback and pedagogical grounding.

Human lesson designers identified several strengths: substantial time savings in drafting scenarios and multiple-choice questions, generation of diverse and realistic scenarios, no observed biased or offensive content, and a clear foundation for iterative [[human-ai-collaboration|human–AI collaboration]]. Limitations included generic feedback that mostly explained the correct answer without targeted explanations of why options were wrong, inconsistent terminology (e.g., "learners" vs. "tutors") and unclear learning objectives, overly long and logically disconnected instruction sections, and non-authentic academic references that persisted even with RAG.

## Implications for AI in education

- **Task decomposition matters for LLM content generation:** moderately decomposing lesson-generation into sub-tasks substantially improves quality versus one-step generation; over-decomposition can backfire.
- **Hybrid human–AI workflow is essential:** LLMs excel at drafting scenarios and saving time, but educators must verify references, add targeted per-option feedback, and refine instructional clarity.
- **RAG grounds but does not guarantee authenticity:** retrieval improves contextual relevance but did not prevent the model from producing non-existent references.
- **Scalable tutor training:** automatic generation can expand access to effective professional-development lessons, particularly for novice tutors of middle-school math.

## Connected Concepts

- [[llm]]
- [[generative-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[learning-design]]
- [[curriculum-design]]
- [[professional-training]]
- [[intelligent-tutoring]]
- [[math-education]]
- [[scaffolding]]
- [[human-ai-collaboration]]
- [[help-seeking]]
- [[simulating-students]]

## Connected Articles

- [[ai-tutor-authoring-promptdecipher]] — Prompt-based authoring of AI tutors
- [[instructional-agents-multi-agent-course-gen]] — Multi-agent course generation
- [[curriculum-as-code-instructional-design-2026]] — Instructional design as code
- [[bridging-instructional-design-framework-math]] — Instructional design framework for math
- [[genai-pd-ai-pck-learning-gain-2026]] — GenAI professional development and AI-PCK
- [[adaptive-virtual-patient-psychotherapy-training]] — Scenario-based training of novices

## Citation

Lin, J., Rao, J., Zhao, S. Y., Wang, Y., Gurung, A., Barany, A., Ocumpaugh, J., Baker, R. S., & Koedinger, K. R. (2025). [*Automatic Large Language Models Creation of Interactive Learning Lessons*](https://doi.org/10.48550/arXiv.2506.17356). ECTEL 2025.
