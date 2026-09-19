---
title: "ConnectED: A Curriculum-Aligned AI System for Vietnamese Instructional Lesson Planning and Student Learning"
created: "2026-08-03T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
foundations: [curriculum-design, teacher-role]
technology: [generative-ai, llm]
ethics: [global-south]
research_method: [system development]
audience: [instructors]
level: [k 12]
sources: ['raw/papers/2607.28647.md']
confidence: high
---

> **Synthesis:** ConnectED is a [[human-in-the-loop-ai|human-centered]] AI system supporting the full instructional lifecycle in Vietnamese education: [[curriculum-design|curriculum-aligned lesson design]], interactive student learning, and [[feedback|feedback-driven refinement]], built on VietEduQwen, a Vietnamese educational [[llm]] trained with SFT and DPO.

The system operationalizes the ADDIE framework through structured prompt templates aligned with Vietnam's Official Dispatch No. 5512/BGDDT-GDTrH, where each phase is both a generation step and a [[teacher-role|teacher validation]] gate — keeping teachers in the loop.

On 3,119 questions from the 2025 Vietnamese National High School Examination, VietEduQwen achieved 87.02% accuracy, outperforming Qwen3-8B by 6.10 percentage points; teacher (n=18) and student (n=214) surveys showed strong satisfaction with curriculum alignment and lesson clarity.

The Evaluation phase closes the loop by connecting student performance data to iterative lesson improvement, exemplifying [[culturally-relevant-pedagogy|curriculum-grounded]], [[multilingual-learning|multilingual]], and teacher-governed LLM deployment in a [[global-south|Global South]] context.

## What this means for practice

- **Instructors.** Keep the validation gate at every phase: let the system draft, then review each output for curriculum alignment, inclusivity, and pedagogical soundness before students see it — the study's ablation showed that replacing ADDIE-structured orchestration with unstructured prompting degraded both preparation efficiency and teacher trust.
- **Instructors.** Anchor generation to the curriculum's own requirements (Official Dispatch No. 5512) so drafts are compliant by construction rather than edited into compliance, and record the review decisions you make.
- **Instructors.** Close the loop instead of generating one-shot lessons: feed performance signals from the student Playground back into the next lesson revision, which is the Evaluation phase the system was built to support.
- **Instructors.** Reinvest the preparation time the system saves (roughly 5-8x on a full 45-minute lesson, including review) into pedagogical judgment — differentiation, local context, and the assessment design that generation does not cover — rather than into producing more lessons.

## Limitations

- Effectiveness is evidenced by examination accuracy (87.02% on 3,119 questions from the 2025 Vietnamese National High School Examination, 6.10 percentage points above Qwen3-8B) and by post-task five-point Likert surveys with 18 teachers and 214 students (grades 6-12); the authors state the evaluation does not include a controlled learning-outcome study, so satisfaction reflects perceived utility, not measured learning.
- Training materials were curated from textbooks and examination materials, and the authors concede that data leakage between training and the evaluation benchmark cannot be entirely excluded; they call for temporally disjoint test sets.
- The multi-agent STEM visualization framework was judged on technical correctness and pedagogical alignment but never evaluated for cognitive load or learner comprehension, so generated visualizations may vary in effectiveness by learner background.
- Practical deployment constraints remain — computational cost, internet accessibility, and varying teacher familiarity with AI tools — which the authors expect to limit adoption in the rural and under-resourced settings they aim to reach; the rigid ADDIE phases may also frustrate experienced teachers who adapt beyond predefined stages.

## Connected Concepts

- [[k-12]]
- [[teacher-ai-competency]]
- [[bias-mitigation]]
- [[culturally-relevant-pedagogy]]
- [[ai-education]]
- [[human-in-the-loop-ai]]
- [[formative-assessment]]
- [[curriculum-design]]
- [[teacher-role]]
- [[feedback]]

## Connected Articles

- [[human-llm-collaborative-coding-k12-educator-ai]] — Human-LLM Collaborative Inductive Coding for Conceptualizing K-12 Educator AI Use
- [[llm-cultural-relevance-k12]] — LLMs for Culturally Relevant K-12 Pedagogy
- [[concept-catalyst-engineering-scaffolds]] — Creating Learning Scaffolds for Engineering Design Using Concept Catalyst
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not Ground Truth
- [[cyberscholar-genai-writing-feedback]] — Generative AI Feedback, English Writing and Teacher Rubrics: A Multiple-Case Study of CyberScholar

## Citation

Doan Viet, T., Nguyen Hoang, A., Luong Son, T., Hoang Thi Ngoc, A., Giang Thi Thu, H., & Le Quy, T. (2026). [ConnectED: A curriculum-aligned AI system for Vietnamese instructional lesson planning and student learning](https://arxiv.org/abs/2607.28647).
