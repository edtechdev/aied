---
title: "Agentic Generative AI in Higher Education: Perceived Benefits, Risks, and Implications for Learning"
created: "2026-09-11T02:52:00-04:00"
updated: "2026-09-11T02:59:00-04:00"
type: article
tags: [agentic-ai, generative-ai, higher-ed, human-in-the-loop-ai, governance, academic-integrity, trust, business-education, personalized-learning, pedagogical-agent, ai-use-disclosure]
research_method: [design-based research, survey]
discipline: [business education]
audience: [learners, instructors, administrators, curriculum designers, researchers]
level: [higher ed]
category: [framework, policy]
sources: ['raw/papers/ilieva-agentic-genai-higher-education-2026.md']
confidence: medium
---

> **The AGAI-HE framework** — Ilieva et al. (2026) propose the Agentic GAI-Supported Learning Framework for [[higher-ed|Higher Education]], which positions [[agentic-ai|agentic AI]] as a *bounded, human-supervised learning partner* rather than a substitute for students or instructors. The framework separates three conditions — traditional [[online-teaching-and-learning|e-learning]], [[generative-ai|GAI]]-chatbot-supported learning, and GAI-agent-supported learning — and specifies agentic support as task contracting and interpretation, decomposition and planning, evidence organization, alternative generation, comparison and decision, feedback and refinement, and learner verification and reflection, all wrapped in [[human-in-the-loop-ai|human supervision]], [[academic-integrity|academic integrity]], privacy safeguards, and instructor validation. An exploratory perception study with 130 students in an e-commerce course found both AI conditions rated above traditional e-learning on learning enhancement, [[personalized-learning|personalization]], decision-making support, and workflow organization — but **no statistically significant difference between GAI agents and GAI chatbots**, so the paper offers initial perception-based support for agentic GAI without claiming superior [[learning-gains|learning outcomes]]. (Preprint; not peer-reviewed.)

## Overview

The premise is a distinction between [[generative-ai|generative AI]] as a productivity tool and as a learning-support technology. A chatbot can help a student produce a better answer without improving their reasoning; learning value appears when AI support makes the problem structure, evidence, alternatives, and justification more visible to the learner. Conventional prompt–response [[conversational-ai|chatbots]] leave the learner responsible for sequencing the task, checking evidence, and judging when work is complete — a limitation that matters most in applied courses such as e-commerce, where students must compare business models, weigh market and operational constraints, and defend strategic recommendations.

*Agentic* here is deliberately qualified: it does not mean unrestricted autonomy. The framework applies **bounded educational agency**, in which goals, roles, data sources, tools, checkpoints, stopping conditions, and final decisions are defined or approved by human educators, and each agentic function must trace to a learning requirement, assessment purpose, or [[governance]] control. The authors distinguish an agentic workflow from advanced [[prompt-engineering|prompt engineering]]: a well-designed prompt may request step-by-step output, but an agentic workflow preserves task state, allocates functions, checks completion conditions, returns to earlier stages when evidence is insufficient, and records material decisions.

## The three conditions

| | Typical AI role | Main learning support | Key limitation or safeguard |
|---|---|---|---|
| Traditional e-learning | none | Instructor-designed content, activities, feedback, assessment | Limited real-time personalization and feedback |
| GAI-chatbot-supported | prompt–response assistant | Explanation, summarization, ideation, drafting, feedback in isolated interactions | Learner remains responsible for sequencing, verification, and completion judgement |
| GAI-agent-supported | bounded workflow partner | Task decomposition, evidence organization, comparison, verification, reflection, checkpoint-based progression | Requires explicit boundaries, [[explainable-ai|transparency]], instructor oversight, and preservation of [[agency|student agency]] |

## Architecture and governance

AGAI-HE is organized as three interacting layers:

1. **[[pedagogy|Pedagogical]] workflow layer** — the instructional process itself: task interpretation and planning, instructional activity, [[formative-assessment|formative assessment]] and feedback, verification and remediation, [[summative-assessment|summative assessment]], and course improvement.
2. **Agentic support layer** — specialized [[pedagogical-agent|educational agents]] for [[learning-design|course design]], content curation, tutoring, task decomposition, decision support, assessment support, [[learning-analytics|learning analytics]], verification, and reflection.
3. **Human supervision and governance layer** — acceptable AI use, pedagogical boundaries, privacy rules, [[ai-use-disclosure|disclosure requirements]], source verification, instructor checkpoints, [[academic-integrity|integrity]] mechanisms, and final human accountability.

The framework was constructed through design-science phases (problem, objectives, artifact, demonstration, evaluation, communication) and is presented as an extension of the authors' earlier chatbot-assisted course framework, moving from episodic conversational support to supervised multi-step orchestration. Design requirements and a course-lifecycle allocation of instructor and student responsibilities are specified in accompanying tables.

## Perception-based validation

The exploratory study (12 May – 9 June 2026) used a Bulgarian-language questionnaire with a within-respondent design: the same respondents rated all three conditions. After screening, **130 usable responses** were retained (90 women, 40 men; 75.4% reporting medium digital skills). Prior chatbot exposure was near-universal (94.6% at least some use), while agent exposure was lower but substantial (85.4% at least some use, 61.5% using agents at least sometimes).

- **Both AI conditions beat traditional e-learning.** Friedman repeated-measures tests found significant condition effects for learning enhancement (χ²(2) = 33.658, p < 0.001, Kendall's W = 0.129), personalization (56.410, p < 0.001, W = 0.217), decision-making support (18.007, p < 0.001, W = 0.069), and workflow support (6.766, p = 0.034, W = 0.026) — effect sizes very small to modest. Holm-adjusted Wilcoxon comparisons confirmed higher chatbot ratings than traditional e-learning on all four domains (e.g., personalization Δ = 0.677, r = 0.738), with the same pattern for agents.
- **The agent–chatbot gap was not significant.** Chatbot and agent means were very close (e.g., learning enhancement 3.835 vs. 3.858; personalization 3.723 vs. 3.735), so the study does not demonstrate an agentic advantage.
- **Risk, trust, and adoption.** Perceived risk was moderate (M = 3.333, SD = 0.893) while trust and adoption intention were more favourable (M = 3.615, SD = 0.805). 69.2% endorsed continued use of agents, 63.1% supported integrating them into learning activities, and 61.5% wanted training in effective agent use. The strongest single endorsement was for **combining all three approaches** (69.2%), whereas only 33.1% agreed agents were more effective than chatbots and 45.4% trusted agents under instructor guidance.
- **An unexpected association.** Perceived risk correlated *positively* with continued-use intention (Spearman's ρ = 0.317, p < 0.001). The authors explicitly reject a causal reading and interpret it as **informed adoption**: more engaged or experienced users recognize both the value and the limits of GAI. The cross-sectional design cannot separate awareness, exposure, self-selection, and reciprocal influence.

## Implications

- **Scope discipline is the paper's central honesty.** The authors state plainly that the evidence is a perception-based alignment check, not proof of effectiveness: no random assignment, no objective performance measure, no pre–post change, and no longitudinal transfer measure. Propositions that the questionnaire could not test are labelled as such rather than scored as supported.
- **Absence of an agent advantage is itself informative.** The null agent–chatbot difference may reflect students' limited practical experience with agentic workflows, their novelty, and the possibility that advanced AI interactions feel broadly similar to chatbot support — implying that agentic value may only become visible under sustained, authentic implementation with clearly differentiated tasks.
- **Bounded agency is the design answer to [[cognitive-offloading|over-reliance]].** Because goals, checkpoints, and final decisions stay with the educator and learner, and because the workflow returns control at verification and reflection stages, agentic orchestration can be aimed at reasoning support rather than task completion.
- **Students want guidance, not just access.** The demand for agent-use training and the preference for combining traditional [[teacher-role|teaching]] with both chatbot and agent support suggest that adoption is a course-design question — where agents are introduced, with what checkpoints, and with what instruction — rather than a matter of tool availability.
- **Governance must be built into the workflow layer.** Disclosure requirements, source verification, privacy rules, and instructor validation appear here as framework components rather than as policy bolted on afterwards — the same integration [[human-in-the-loop-ai|human-in-the-loop]] design calls for elsewhere.
- **Limitations.** One e-commerce course, student perceptions only (no instructor perspective), no objective outcomes, and an implementation the authors themselves describe as an initial conceptual model rather than an optimized instructional system.

## Connected Concepts

- [[agentic-ai]]
- [[generative-ai]]
- [[higher-ed]]
- [[human-in-the-loop-ai]]
- [[governance]]
- [[academic-integrity]]
- [[trust]]
- [[business-education]]
- [[personalized-learning]]
- [[pedagogical-agent]]
- [[ai-use-disclosure]]
- [[prompt-engineering]]
- [[conversational-ai]]
- [[cognitive-offloading]]
- [[self-regulated-learning]]
- [[assessment]]

## Connected Articles

- [[agentic-ai-education-scoping-review]] — Scoping review of agentic AI in education
- [[agentic-literacy-debt]] — Agentic literacy debt: the structural AI-literacy gap from autonomous agents
- [[agentic-ai-pedagogical-best-practice-2026]] — Pedagogical best practice for agentic AI
- [[baradziej-agentic-ai-higher-education-2026]] — Agentic AI in higher education
- [[ai-agents-complete-lms-assessment-validity-2026]] — Assessment validity when agents can complete an LMS
- [[bozkurt-ghost-students-agentic-ai-2026]] — Ghost students and the agentic-AI verification gap
- [[ethical-ai-higher-ed-game-theory]] — Coordination game framework for ethical AI use
- [[student-centered-genai-responsible-framework-2026]] — Student-facing framework for responsible GenAI use
- [[beyond-agent-label-agentic-ai-governance-2026]] — Moving beyond the agent label: agentic AI governance
- [[ai-adaptation-gap-higher-education-2026]] — The AI Adaptation Gap in Higher Education

## Citation

Ilieva, G., Yankova, T., Ruseva, M., Klisarova-Belcheva, S., Georgiev, P., & Totkov, G. (2026). [Agentic Generative AI in Higher Education: Perceived Benefits, Risks, and Implications for Learning](https://doi.org/10.20944/preprints202609.0580.v1). *Preprints.org* (preprint, not peer-reviewed).
