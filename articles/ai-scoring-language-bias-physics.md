---
title: AI-based scoring systematically underestimates conceptual understanding of linguistically weak students' explanations in physics
created: "2026-07-31T04:33:04-04:00"
updated: "2026-09-19T07:16:01-04:00"
type: article
assessment: [assessment-validity, automated-assessment, educational-measurement]
ethics: [bias-mitigation, equity-in-ai-education, multilingual-learning]
research_method: [educational measurement]
discipline: [physics education]

sources: ['raw/papers/2607.28210.md']
confidence: high
audience: [assessment professionals, researchers]
level: [secondary]
---
> **Synthesis:** This study examined whether AI-based scoring can assess students' conceptual understanding **independently of the linguistic quality** of their text-based explanations in [[physics-education|physics]]. The [[research-methods-aied|researchers]] compared scores from **9 [[reinforcement-learning|machine learning]] (ML) approaches and 2 large language model ([[llm]]) approaches** against human expert scores for 116 secondary-school students' physics explanations.
### The Language Bias Problem
- **Systematic underestimation**: Explanations of lower linguistic quality were systematically more likely to receive lower AI-generated conceptual understanding scores than experts assigned — a bias that emerged across **every single AI-based scoring approach** tested.
- **Asymmetric effect**: Higher linguistic quality showed **no comparable link** to overestimation. The bias only runs in one direction: linguistically weak students are penalized, but linguistically strong students are not inflated.
- **Mirrors human bias**: This language bias closely resembles that previously reported for **physics teachers** themselves (Feser & Höttecke, 2021), suggesting the difficulty lies less in any particular assessor (human or machine) than in the fundamental nature of inferring conceptual understanding from text-based explanations.
### Disproportionate Impact
The stakes fall hardest on **[[multilingual-learning|multilingual]] learners**, whose language proficiency may be misread as weaker conceptual understanding. This is especially concerning as AI-based scoring takes on higher-stakes assessment decisions.
## What this means for practice
- **Assessment professionals.** Audit AI scoring systems for language bias by reporting underestimation rates for low-linguistic-quality explanations, not only overall agreement with expert scores (which ranged 67.2%–78.4%), and keep teachers in the loop on high-stakes scoring: the bias runs in one direction, so linguistically weak students are penalized with no offsetting inflation for strong writers.
- **Assessment professionals.** Route responses from [[multilingual-learning|multilingual]] and international learners to human review and reduce dependence on linguistic production in task design, since low linguistic quality is easily misread as weak conceptual understanding and the asymmetry falls hardest on these learners.
- **Assessment professionals.** Treat the bias as a property of the task rather than of any one model: the same underestimation pattern was previously reported for human physics teachers (Feser & Höttecke, 2021), so the [[educational-measurement|construct-irrelevant variance]] — language proficiency contaminating the measurement of conceptual understanding — persists whether the scorer is human or machine, and no model swap removes it.
- **Researchers.** Test whether LLM-based scoring is immune to the bias — GPT-4.1 and GPT5-mini showed the same underestimation as all nine ML-based approaches.
- **Researchers.** Use experimental designs that manipulate linguistic quality while holding demonstrated conceptual understanding constant to pin down the causal mechanism.
## Limitations
- The dataset was 116 written explanations from Grade 9 students in Hamburg, Germany, drawn from 7 classes across 4 schools (2 academic-track, 2 comprehensive).
- Students answered a single open-ended "spacewalk" task on sound transmission, all in German; whether the pattern holds across other content areas, ages, languages, or formats is untested.
- Expert ratings served as the reference standard but are not ground truth — conceptual understanding can only be inferred indirectly from text-based explanations, the same limitation the study diagnoses in AI scoring.
- The responses come from a dataset originally built to study physics teachers' assessment, and they vary naturally rather than through experimental manipulation, so the analyses are correlational.
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
