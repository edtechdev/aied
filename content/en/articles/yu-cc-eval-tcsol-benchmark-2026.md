---
title: "Dissociable cognitive mechanisms of generative AI in education: evidence from CC-Eval, a standards-anchored benchmark for teaching Chinese to speakers of other languages"
created: "2026-11-25T09:20:00-05:00"
updated: "2026-11-25T09:20:00-05:00"
published: "2026-11-24"
type: article
authors: ["Dongxing Yu"]
venue: "Frontiers in Education, 11"
evidence_context: educational
foundations: [cognitive-offloading, ai-education, theories-and-frameworks]
pedagogy: [cognitive-psychology]
technology: [llm, generative-ai, educational-nlp]
assessment: [automated-essay-scoring, automated-assessment, evaluative-judgment, assessment-validity]
methods: [benchmark, ai-ed-evaluation]
discipline: [language learning]
level: [higher ed, adult learning]
audience: [assessment professionals, instructors, researchers]
page_kind: [evaluation]
research_method: [instrument development, design and evaluation study]
sources: ["raw/papers/yu-cc-eval-tcsol-benchmark-2026.md"]
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-25"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Yu (2026) argues that "is this model good at teaching?" is the wrong question, and builds a 1,555-item [[benchmark|benchmark]] to show why. CC-Eval v1.0 spans six equal-weight teacher workflows in teaching Chinese to speakers of other languages — grade knowledge, error diagnosis, [[automated-essay-scoring|essay scoring]], teaching generation, culture and pragmatics, and standards and pedagogy — and eleven free or light-tier models were scored on all six. The profile that emerges is a dissociation rather than a ladder. Culture and pragmatics sat high for every model, essay scoring was usable for some, error diagnosis and grade knowledge stayed low, and two subtasks collapsed: rewriting a passage to a target proficiency level, where the best model passed 15.0% of items, and locating the textbook standard a passage violates, where the best reached 8.9%. Fluent teaching scenarios coexisted with near-floor compliance with the standards they are supposed to implement. Yu reads the pattern as separate functional components of [[generative-ai]] as a cognitive prosthesis, not as a single measure of AI teaching ability.

## Key Findings
- **Model totals were modest and hid the extremes.** Equal-weight totals across eleven models ranged from 41.1 to 54.9 out of 100, and the within-model spread across tasks was larger than the between-model spread.
- **Culture and pragmatics was the strongest band for every model.** Scores ran from 70.5 to 94.9, well above anything else the benchmark measured.
- **Grade knowledge was the weakest.** The best model reached 35.2 on recalling proficiency standards from memory, and the weakest scored 12.0.
- **Level-controlled rewriting almost always failed.** Pass rates were at or below 15.0% for the strongest model, with several near zero and out-of-grade vocabulary common in otherwise fluent output.
- **Locating a textbook standard collapsed to near floor.** The best accuracy was 8.9% and multiple models scored zero, while scenario drafting under the same section reached near ceiling.
- **Intertask correlations were negative in places.** Essay scoring correlated negatively with constrained generation and with error diagnosis, which is hard to reconcile with a single underlying competence.

## What the benchmark holds

The six tasks are meant to be the workflows a teacher actually performs rather than a generic question set: recalling the national proficiency grading standards, diagnosing learner errors, banding essays, drafting teaching material, answering culture and pragmatics questions, and applying pedagogical standards. Items are anchored to China's national Chinese Proficiency Grading Standards and to textbook and vocational standards, which is what makes the constraint-satisfaction failures measurable rather than impressionistic.

Eleven free or light-tier models were run under default API settings, with a full second-judge pass over the rubric-scored items. The leaderboard's top model reached 54.9, with two more in the low 50s and the weakest at 41.1. Microaverages across items were lower still, between 33.4 and 46.7, because the high-volume knowledge and error items pull the mean down.

## Why dissociation changes the deployment question

If a single number described teaching competence, an institution could rank models and pick one. A profile changes the decision. A department that needs help drafting culture materials is choosing among models that all look strong; a department that needs material levelled to a proficiency band is choosing among models that mostly cannot do it, and a department that needs standards compliance is choosing among models that almost never can.

The intertask correlations are the sharpest evidence, and the authors present them carefully. Across eleven models, essay scoring correlated −0.530 with constrained generation and −0.487 with error diagnosis, with Spearman coefficients pointing the same way. With eleven cases these estimates are unstable, and Yu frames them as raising difficulty for a unitary-competence reading rather than as proof of separable mechanisms. The framing is functional, not architectural: memory, constraint satisfaction, evaluative judgment and pragmatic mediation are properties of the tool in a human–AI system, not claims about what the model contains.

## The monitoring a teacher must now supply

The practical implication is that fluency is not a signal of groundedness. The models that drafted teachable scenarios were frequently the ones that could not say which standard a passage violated or keep a rewrite inside a grade band — the two operations that determine whether material is usable in a standards-anchored curriculum. Yu's framing of the tool as a prosthesis makes the monitoring requirement explicit: what the teacher must now supply is exactly the checking the model cannot do.

That has a training consequence as well. If an instructor's value in an AI-supported workflow is standards compliance and level control, then those are the skills to develop and to teach in teacher preparation, not prompt technique.

## What the evaluation cannot say

A benchmark measures task performance, not classroom effect. Nothing here shows that a model scoring 54.9 produces worse lessons than one scoring 50.9, and the free or light-tier restriction means the ceiling of available capability is untested. The mechanism vocabulary is a heuristic map: Yu states that dissociations are not evidence of a fixed internal architecture, and that the components are functional descriptions of the tool in use.

Judge agreement on the rubric-scored items was only moderate, which limits how fine a distinction the leaderboard supports. The negative intertask correlations rest on eleven models, so they are a direction rather than an estimate.

## What this means for practice

- **Assessment professionals.** Check banding against a rubric you trust before trusting the score. Score meaning was one of the components that behaved differently from fluency.
- **Instructors.** Use these models for culture and pragmatic explanation, where every model was strong, and verify level and standards compliance yourself, where almost none was.
- **Curriculum designers.** Ask vendors for task-level evidence on the specific workflow you need. An aggregate model ranking says little about levelling a passage to a proficiency band.
- **Teacher educators.** Teach standards lookup and level control as AI-era skills. They are what the tool fails at and what the teacher's judgment is now for.

## Limitations

- Eleven free or light-tier models under default API settings; stronger or differently configured models were not evaluated, so the profile describes a deployment tier rather than a capability ceiling.
- Judge agreement on rubric-scored items was only moderate, which bounds how fine a ranking the totals support.
- Intertask correlations rest on eleven models and are presented as evidence against a unitary reading rather than as stable estimates.
- The benchmark is anchored to Chinese proficiency and textbook standards in one language-teaching domain, so the specific bands need not transfer to other subjects.
- Performance on a benchmark is not evidence about learning outcomes in a classroom.

## Citation

Yu, D. (2026). [Dissociable cognitive mechanisms of generative AI in education: evidence from CC-Eval, a standards-anchored benchmark for teaching Chinese to speakers of other languages](https://doi.org/10.3389/feduc.2026.2016555). *Frontiers in Education, 11*.
