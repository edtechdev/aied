---
title: AI-based scoring systematically underestimates conceptual understanding of linguistically weak students' explanations in physics
created: "2026-07-31T04:33:04-04:00"
updated: "2026-08-28T00:00:00-04:00"
type: article
tags: [assessment-validity, automated-assessment, bias-mitigation, equity-in-ai-education, multilingual-learning, physics-education, educational-measurement]
research_method: [educational measurement]
discipline: [physics education]

sources: ['raw/papers/2607.28210.md']
confidence: high
---
> **Authors:** Markus S. Feser, Paul L. Tschisgale (Leibniz Institute for Science and Mathematics Education, Kiel, Germany)
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
- **Not just an AI problem**: The finding that the same [[bias-mitigation]] pattern exists in human physics teachers challenges the assumption that AI introduces unique biases. Instead, it suggests a deeper [[assessment-validity]] challenge: distinguishing conceptual understanding from linguistic expression in text-based explanations is inherently difficult.
- **[[equity-in-ai-education]]**: The asymmetric nature of the bias (underestimation without compensating overestimation) means linguistically weak students are systematically disadvantaged, with no offsetting benefit for strong writers. This raises serious [[equity-in-ai-education]] concerns as [[automated-assessment|Automated Grading]] scales.
- **[[language-learning]]**: The finding that multilingual learners are disproportionately affected connects directly to broader concerns about AI tools in linguistically diverse classrooms. See also [[language-learning]] and [[genai-linguistic-diversity-academic-writing]].
- **[[cong-confidence-asag-2026]]**: The study's comparison of ML and LLM approaches provides evidence that newer LLM-based systems are not immune to this bias — it persists across both paradigms. See related work on [[short-answer-scoring-quality-degradation]].
- **[[ai-assessment-human-tutors]]**: The parallel between AI and human scoring bias suggests that the goal should not be to replace human assessment but to understand the limitations shared by both, as also explored in the [[ai-feedback-quality]] literature.
- **[[educational-measurement]]**: The concept of construct-irrelevant variance — where language proficiency contaminates measurement of conceptual understanding — is a fundamental [[assessment-validity]] concern that this study quantifies across AI systems.
## Implications
1. **Benchmarking AI scoring**: AI-based scoring systems should be explicitly evaluated for language bias, not just overall agreement with human scores.
2. **High-stakes caution**: As AI scoring moves toward higher-stakes decisions, the asymmetric language bias becomes increasingly consequential.
3. **Multimodal assessment**: The findings support calls for assessment approaches that reduce dependence on linguistic production, particularly for [[language-learning]] populations.
4. **Teacher-AI collaboration**: Rather than replacing teacher assessment, AI scoring may be most useful when teachers remain in the loop to calibrate for language effects.
## Connected Concepts
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[bias-mitigation]]
- [[assessment-validity]]
- [[equity-in-ai-education]]
- [[language-learning]]
- [[ai-feedback-quality]]
- [[educational-measurement]]
- [[physics-education]]
## Connected Articles
- [[genai-linguistic-diversity-academic-writing]]
- [[cong-confidence-asag-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[short-answer-scoring-quality-degradation]]
- [[ai-assessment-human-tutors]]
- [[icle-plus-plus-essay-scoring]]
## Citation
Feser, M. S., & Tschisgale, P. L. (2026). [*AI-based scoring systematically underestimates conceptual understanding of linguistically weak students' explanations in physics*](https://arxiv.org/abs/2607.28210).
