---
title: "Automated Coding of Content and Pedagogical Content Knowledge of Mathematics Using a Multi-Agent Large Language Model"
created: "2026-09-25T11:42:30-04:00"
updated: "2026-09-25T12:56:00-04:00"
type: article
sources: ['raw/papers/llm-automated-coding-teacher-pck-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [secondary analysis]
discipline: [math education]
level: [middle school, teacher education]
audience: [researchers, instructors, assessment designers, faculty developers]
technology: [educational-nlp, human-in-the-loop-ai, llm, prompt-engineering]
assessment: [assessment-validity, automated-assessment, educational-measurement]
methods: [ai-ed-evaluation, quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-25"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** This secondary analysis of 268 U.S. middle school [[math-education|mathematics]] teachers' open-ended responses asks whether a purpose-built multi-agent [[llm|large language model]] can code what trained humans code: teachers' content knowledge (CK) and pedagogical content knowledge (PCK) of ratios and proportional relationships. GradeOpt, three GPT-4o-backed agents (Grader, Reflector, Refiner) that iterate on a human coding manual by adding clarification points, reached substantial agreement overall and clearly beat two [[educational-nlp|NLP]] baselines and a single-prompt GPT-4o model on the PCK items. The lesson for [[teacher-education]] and [[automated-assessment]]: [[prompt-engineering|structured prompt refinement]] against human coding, not a bigger model, carries the reliability, and [[human-in-the-loop-ai|expert review]] is the suggested next step where adjacent coding levels blur.

## Key Findings
1. GradeOpt matched the human pair on the two CK items: exact agreement above 90%, Cohen's κ = .88 and .85, QWK = .89 and .94.
2. On the nine PCK items it reached acceptable agreement (κ = .68; QWK = .79), below human-to-human agreement.
3. Agreement varied by subdomain: κ = .66 for mathematical tasks, .79 for students' mathematical thinking, .59 for teaching mathematics (QWK = .79, .84, .75).
4. PCK exact agreement ranged from 73% to 89% and item-level κ from .51 to .89; the weakest items spread across subdomains.
5. Every comparison model struggled on PCK: RoBERTa κ .00 to .39, SBERT .00 to .55, single-prompt GPT-4o .06 to .54.
6. Refinement ran up to six rounds per item on a 70% training split, with a 10% validation and held-out 20% test split.
7. Data: 268 of 324 U.S. middle school mathematics teachers (82.7%), two open-ended CK and nine PCK items on 3-point rubrics; human coders agreed reliably (kappa .70 to .93).

## Why coding PCK resists automation
PCK — content-specific pedagogy covering mathematical tasks, students' mathematical thinking, and teaching mathematics — resists coding because it is contextualized. Open-ended items capture it as a construct linked to teaching quality and student learning gains, but demand human coders needing ongoing calibration. Kersting and colleagues (2014) used Naïve Bayes classifiers on teachers' video-prompt responses, reaching QWK of .56 to .64 for CK-related content but only .36 to .47 for the PCK-related dimensions of student thinking and suggestions for improvement; Wahlen et al. (2020) found human coders agreeing at QWK .80 to .97 on economics PCK items while automated scoring managed only .38 to .77; a multi-agent LLM approach improved CK coding (F1 up to 0.88); and human-in-the-loop prompt engineering lifted an LLM's total-score agreement on formative assessment to QWK .78.

## How GradeOpt works
GradeOpt assigns three roles. The Grader applies the coding manual — item description, construct definition, rubric, sample coded responses with justifications — to the data, assigning codes and explanations without access to human codes. The Reflector names the likely source of each error where Grader and the human coders disagreed; the Refiner rewrites the instructions to resolve those ambiguities — clarification points added for the model, not changes to the coding criteria.

In one disagreement, Grader read a constant-difference response as code 1, but the human coders scored it 2 because it described additive thinking, so the Refiner added to code 2's description that a constant difference indicates additive thinking. Only the training set drove refinement; the frozen prompt was applied exactly once to the test set, and validation was used solely for early stopping and prompt selection.

Comparisons were RoBERTa, Sentence-BERT, and Naïve Prompting, a direct GPT-4o prompt with no optimization; all runs used GPT-4o via OpenAI's developer API, and agreement was measured at item, subdomain, and overall levels.

## How well the models agreed with human coders
On CK, GradeOpt was essentially as reliable as the human pair, while the comparison models ranged from κ .32 to .76 and QWK .31 to .82; on PCK, agreement was acceptable but behind the human coders.

GradeOpt scored best on knowledge of students' mathematical thinking and worst on knowledge of teaching mathematics — the items asking teachers to apply a teaching strategy and explain the rationale; mathematical tasks fell between. It beat every comparison model on every indicator except exact agreement on a single item, and the gaps of .13 to .19 between κ and QWK on the knowledge-of-teaching items show it often landed on a neighboring code — partial agreement, not outright error.

## Why the framework, not the model
The authors attribute the results to the framework rather than the particular LLM: the loop mirrors how human coders work with a manual — study the rubric, apply codes, discuss discrepancies, add clarification points. Those points did not sufficiently help GradeOpt distinguish adjacent categories on the most complex PCK items, which were hard for the human coders too; an expert human in the loop may offer deeper insight into fine-grained distinctions.

## What this means for practice
- **Assessment designers.** A human-coder manual is a viable starting point for automated scoring, but budget for a refinement loop that clarifies categories against real disagreements, not one-pass rubric absorption.
- **Teacher educators and faculty developers.** Open-ended CK and PCK measurement becomes more scalable — though the hardest teaching-reasoning items still need human oversight.
- **Researchers.** Report κ and QWK together; a large gap signals confusion between adjacent levels, not random error.
- **Administrators and institutions.** Treat multi-agent LLM codes as a triage aid, not final scores, and keep a human decision point where agreement is weakest.
- **Tool builders.** Role separation — grade, analyze errors, revise instructions — is cheap and looks like the source of the reliability gain.

## Limitations
- The dataset covered one mathematics topic, ratios and proportional relationships; performance may differ across other topics, domains, or disciplines.
- All rubrics used three categories, and results depend on the manual's specificity, the interpretation needed to separate levels, the domain knowledge involved, and construct complexity.
- GradeOpt still trailed human coders on PCK items, and its refinement did not sufficiently support distinguishing adjacent categories on the most complex items.
- The study used GPT-4o throughout via OpenAI's developer API, a superseded generation; the authors attribute the gains to the framework rather than the model, but report no data-collection window or newer-model replication, so absolute figures are tied to that generation.

## Connected Concepts
- [[llm]]
- [[prompt-engineering]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[math-education]]
- [[teacher-education]]
- [[human-in-the-loop-ai]]
- [[generative-ai]]
- [[misconceptions]]
- [[quantitative-research]]
- [[psychometrically-aware-ai]]
- [[ai-ed-evaluation]]

## Connected Articles
- [[teaching-monster-pck-benchmark-2026]] — Findings of the First Teaching Monster Challenge: A Benchmark of Pedagogical Content Knowledge in AI Agents
- [[ai-rated-classroom-observation-scores-2026]] — I code or AI code: A comparative evaluation of AI-rated scores in classroom observations
- [[ai-tpack-teacher-multi-agent-workflow]] — Modeling AI-TPACK in Practice: Insights from Teachers' Multi-Agent Workflow Design
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA: A synthetic benchmark for trace-based evaluation of socially intelligent multi-agent tutoring
- [[durable-skills-measurement-ai-teammates-2026]] — Towards Scalable Measurement of Durable Skills
- [[valid-student-simulation-llm-2026]] — Towards Valid Student Simulation with Large Language Models
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — AI Literacy of Teachers: Prompt Engineering and Model Selection as Predictors of AI-Feedback Quality

## Citation
Copur-Gencturk, Y., Moreno, K., Chu, Y., Li, H., & Tang, J. (2026). [*Automated coding of content and pedagogical content knowledge of mathematics using a multi-agent large language model*](https://doi.org/10.1007/s11858-026-01796-2). *ZDM – Mathematics Education*.