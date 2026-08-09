---
title: AI-based scoring systematically underestimates conceptual understanding of linguistically weak students' explanations in physics
created: 2026-07-31
updated: 2026-07-31
type: article
tags: [assessment-validity, automated-grading, bias-mitigation, equity, multilingual-learning, physics-education, equity-in-ai-education, educational-measurement, algorithmic-bias, automated-assessment]
sources: ['raw/papers/2607.28210.md']
confidence: high
---

> **Authors:** Markus S. Feser, Paul L. Tschisgale (Leibniz Institute for Science and Mathematics Education, Kiel, Germany)

**Source:** arXiv:2607.28210 (physics.ed-ph, July 2026)

## Key Findings

This study examined whether AI-based scoring can assess students' conceptual understanding **independently of the linguistic quality** of their text-based explanations in physics. The researchers compared scores from **9 machine learning (ML) approaches and 2 large language model (LLM) approaches** against human expert scores for 116 secondary-school students' physics explanations.

### The Language Bias Problem

- **Systematic underestimation**: Explanations of lower linguistic quality were systematically more likely to receive lower AI-generated conceptual understanding scores than experts assigned — a bias that emerged across **every single AI-based scoring approach** tested.
- **Asymmetric effect**: Higher linguistic quality showed **no comparable link** to overestimation. The bias only runs in one direction: linguistically weak students are penalized, but linguistically strong students are not inflated.
- **Mirrors human bias**: This language bias closely resembles that previously reported for **physics teachers** themselves (Feser & Höttecke, 2021), suggesting the difficulty lies less in any particular assessor (human or machine) than in the fundamental nature of inferring conceptual understanding from text-based explanations.

### Disproportionate Impact

The stakes fall hardest on **multilingual learners**, whose language proficiency may be misread as weaker conceptual understanding. This is especially concerning as AI-based scoring takes on higher-stakes assessment decisions.

## Relevance to AI in Education

This paper makes a critical contribution to the [[automated-assessment]] and [[automated-essay-scoring]] literature by demonstrating that the [[bias-mitigation]] problem in AI scoring is not merely a technical artifact of specific models but appears to be **fundamental to the task itself**. Key connections:

- **Not just an AI problem**: The finding that the same [[algorithmic-bias]] pattern exists in human physics teachers challenges the assumption that AI introduces unique biases. Instead, it suggests a deeper [[assessment-validity]] challenge: distinguishing conceptual understanding from linguistic expression in text-based explanations is inherently difficult.

- **[[equity-in-ai-education]]**: The asymmetric nature of the bias (underestimation without compensating overestimation) means linguistically weak students are systematically disadvantaged, with no offsetting benefit for strong writers. This raises serious [[equity]] concerns as [[automated-grading]] scales.

- **[[multilingual-learning]]**: The finding that multilingual learners are disproportionately affected connects directly to broader concerns about AI tools in linguistically diverse classrooms. See also [[language-learning]] and [[genai-linguistic-diversity-academic-writing]].

- **[[automatic-short-answer-grading]]**: The study's comparison of ML and LLM approaches provides evidence that newer LLM-based systems are not immune to this bias — it persists across both paradigms. See related work on [[short-answer-scoring-quality-degradation]].

- **[[ai-assessment-human-tutors]]**: The parallel between AI and human scoring bias suggests that the goal should not be to replace human assessment but to understand the limitations shared by both, as also explored in the [[ai-feedback-quality]] literature.

- **[[educational-measurement]]**: The concept of construct-irrelevant variance — where language proficiency contaminates measurement of conceptual understanding — is a fundamental [[assessment-validity]] concern that this study quantifies across AI systems.

## Implications

1. **Benchmarking AI scoring**: AI-based scoring systems should be explicitly evaluated for language bias, not just overall agreement with human scores.
2. **High-stakes caution**: As AI scoring moves toward higher-stakes decisions, the asymmetric language bias becomes increasingly consequential.
3. **Multimodal assessment**: The findings support calls for assessment approaches that reduce dependence on linguistic production, particularly for [[multilingual-learning]] populations.
4. **Teacher-AI collaboration**: Rather than replacing teacher assessment, AI scoring may be most useful when teachers remain in the loop to calibrate for language effects.

## Connected Concepts

- [[algorithmic-bias]]
- [[assessment-validity]]
- [[automated-assessment]]
- [[automated-grading]]
- [[bias-mitigation]]
- [[educational-measurement]]
- [[equity-in-ai-education]]

## Connected Articles

- [[ai-assessment-human-tutors]] — AI-Driven Assessment of Human Tutors: Linking Training Performance to Real-Life Practice
- [[automatic-short-answer-grading]] — Automatic Short Answer Grading with LLMs
- [[genai-linguistic-diversity-academic-writing]] — Generative AI and linguistic diversity in academic writing and publishing: Perspectives from World Englishes
- [[gpt4o-mini-music-analysis-scoring]] — Comparative Validation of GPT-4o-mini and Teacher Mean Scores for Automated Scoring of Music Analysis Responses: Sing...
- [[short-answer-scoring-quality-degradation]] — Quality-Conditioned Agreement in Automated Short Answer Scoring: Mid-Range Degradation and the Impact of Task-Specifi...
- [[aaai2026-prompting-literacy-k12]] — Learning to Use AI for Learning: Teaching Responsible Use of AI Chatbot to K-12 Students Through an AI Literacy Module
- [[access-not-enough-ai-tutoring-2026]] — Access is Not Enough: Human Support Improves Engagement with AI Tutoring
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[agent-voice-accents-k12-group-learning]] — Exploring How Agent Voice Accents Shape Human-AI Collaboration in K-12 Group Learning
- [[agentic-literacy-debt]] — Agentic Literacy Debt: A Structural Problem the AI Literacy Field Has Not Yet Named
- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not G...
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Work: Increasing Feedback Provision in Higher Education
- [[ai-changing-teaching-workflows]] — How AI Is Changing Teaching Workflows
- [[ai-education-global-capacity]] — What AI in Education Needs Next: Lessons from Youth Leaders Across Five Countries
- [[ai-ethics-education-public-discourse]] — A Longitudinal Analysis of Public Discourse on AI Ethics in Education Using Twitter Data
- [[ai-higher-ed-bridge-gap]] — Higher Education Must Bridge the AI Gap
- [[ai-lifelong-learning-policy]] — Artificial Intelligence in Lifelong Learning: Opportunities and Challenges in Adult Education Policy
- [[ai-literacy-equity-programming-policy]] — Programming Language Policy as an AI Literacy Equity Problem: A 15-Nation Comparative Analysis
- [[ai-literacy-power-knowledge]] — AI Literacy: An Exercise in Power-Knowledge
- [[ai-partner-science-epistemic-vigilance]] — AI as a Partner in Learning about, Doing, and Engaging with Science: Vigilance as the Key to Productive Augmentation
- [[ai-powered-materials-discovery-ai-literacy]] — Preparing Students for AI-Powered Materials Discovery: A Workflow-Aligned Framework for AI Literacy, Equity, and Scie...
- [[ai-tutor-safety-harms]] — AI Tutor Safety and Pedagogical Harms
- [[aiawe-automated-writing-evaluation]] — AiAWE: An Open-Source LLM Automated Writing Evaluation System Using LoRA-Adapted Instruction-Tuned Models
- [[aicode-collaborative-feedback-system]] — AICoFe: Implementation and Deployment of an AI-Based Collaborative Feedback System for Higher Education
- [[aissa-slides-analysis]] — AISSA: AI-based Student Slides Analysis Tool for Academic Presentations

## Citation

Tschisgale", A.S.F.P.L., Leibniz, P.E., to, E.A.S.A.H.L.Q.S.N.C.L., & frequently, T.C.S.I.P.T.A.P.P.T. (2026). [*AI-based scoring systematically underestimates conceptual understanding of linguistically weak students' explanations in physics*](https://arxiv.org/abs/2607.28210)
