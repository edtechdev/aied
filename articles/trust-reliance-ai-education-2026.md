---
title: "Trust and Reliance on AI in Education: AI Literacy and Need for Cognition as Moderators"
created: "2026-08-03T04:33:04-04:00"
updated: "2026-09-19T12:17:22-04:00"
type: article
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
pedagogy: [metacognition, student-ai-interaction]
technology: [llm, rag]
audience: [learners, instructors]
research_method: [experiment, survey]
discipline: [cs education]

sources: ['raw/papers/trust-reliance-ai-education-2026.md']
confidence: high
level: [higher ed]
page_kind: [evaluation]
---

> **Synthesis:** Pitts, Rani & Mildort (2026, [[ai-education|AIED]]) show with 432 undergraduates that **higher [[trust]] in an AI assistant is associated with lower appropriate reliance**: students who trusted the assistant more were worse at discriminating correct from misleading AI suggestions during [[cs-education|Python problem-solving]]. The relationship is non-linear and **moderated by [[ai-literacy|AI literacy]] and [[metacognition|need for cognition]]** — trust is not a safe proxy for appropriate use.

## The experiment

- 432 undergraduates solved Python output-prediction problems with recommendations + explanations from an [[llm|AI chatbot]] that included **accurate and intentionally misleading suggestions**
- **Appropriate reliance** measured behaviorally: accepting correct suggestions, rejecting incorrect ones — a form of [[trust-calibration|calibration]]
- Surveys captured trust, AI literacy, need for cognition, programming [[self-efficacy]], programming literacy

## Findings

- **Non-linear trust→reliance relationship**: higher trust → lower appropriate reliance (weaker discrimination between correct/incorrect recommendations)
- **Moderators: [[ai-literacy|AI literacy]] and [[metacognition|need for cognition]]** significantly shaped how trust translated into reliance behavior
- Implication: interventions should target *[[trust-calibration|calibration]]* — instructional and system supports that encourage reflective [[ai-ed-evaluation|evaluation of AI]] assistance during [[problem-solving]]

## What this means for practice

- **Instructors.** Do not read student trust as a proxy for good judgment: in this study higher post-task trust went with lower appropriate reliance (r = -.42, p < .001) and lower task accuracy (r = -.38), so the most confident AI users were the least selective.
- **Instructors.** Make verification part of the task rather than advice at the side. Since students accepted 86.03% of misleading recommendations while rejecting only 2.37% of correct ones, build in cognitive forcing functions — committing to an answer before seeing the recommendation, or justifying agreement or disagreement afterward.
- **Instructors.** Aim calibration support at students who already approach AI cautiously: [[ai-literacy]] and [[metacognition|need for cognition]] predicted better [[trust-calibration|appropriate reliance]] mainly at low trust, and that advantage narrowed as trust rose.
- **Learners.** Distinguish being able to program from being able to judge an [[llm|AI]] suggestion: task accuracy (61.21%) and appropriate reliance (61.77%) landed at almost the same level, so following the assistant well is not the same as solving the problem well.
- **Researchers.** Extend reliance measurement beyond a single score. The accept/reject measure collapses careful checking, prior knowledge, and superficial cue use into one number, so pair it with justifications, confidence ratings, or response times.

## Limitations

- A single-session laboratory experiment: 432 undergraduates from one institution (University of Florida) completed 14 output-prediction problems with a fixed mix of 6 misleading and 8 accurate recommendations, and the initial recommendations were pre-programmed in a Wizard-of-Oz design (follow-up turns used gpt-3.5-turbo-0125). Reliance across longer, open-ended assignments — planning, debugging, revision — was not observed.
- Every learner characteristic and the trust measure came from self-report 7-point Likert scales aggregated per participant, which capture broad perceptions and tendencies rather than the skill of verifying a recommendation under time pressure.
- The appropriate-reliance score records only observable accept-versus-reject decisions relative to recommendation correctness, so two students could reach the same score by very different strategies; no process data (think-aloud protocols or interaction logs) was collected.
- Two of the four proposed moderators were not distinguishable from zero (programming self-efficacy p = .121; programming literacy p = .437), and the Johnson-Neyman boundaries fell far into the lower tail of the moderator distributions (z = -2.37 for AI literacy, -2.10 for need for cognition), so the moderation story rests on a narrow region of the sample.

## Connected Concepts

- [[ai-literacy]]
- [[metacognition]]
- [[agentic-ai]]
- [[llm]]
- [[rag]]
- [[trust]]
- [[trust-calibration]]
- [[cognitive-offloading]]
## Connected Articles

- [[learner-ai-interaction-patterns-oop]] — Patterns of Learner-AI Interaction and Academic Performance in an Object-Oriented Programming Course
- [[measuring-llm-tutors-teach-vs-solve]] — Measuring Whether LLM Tutors Teach or Solve: A Diagnostic for Educational Impact
- [[tool-invariant-framework-agentic-ai]] — A Tool-Invariant Framework for Teaching and Assessing Computational Methods in the Age of Agentic AI

## Citation

Pitts, G., Rani, N., & Mildort, W. (2026). [Trust and Reliance on AI in Education: AI Literacy and Need for Cognition as Moderators](https://arxiv.org/abs/2604.01114). AIED 2026.
