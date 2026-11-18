---
title: "Artificial intelligence–based clinical simulation in undergraduate medical education: contributions of virtual patients, chatbots, and immersive environments - a scoping review"
created: "2026-11-18T10:15:00-05:00"
updated: "2026-11-18T10:15:00-05:00"
type: article
pedagogy: [experiential-learning, situated-learning]
technology: [simulating-students, simulation, conversational-ai, virtual-and-augmented-reality, llm]
methods: [meta-analysis-systematic-review]
sources: ['raw/papers/hernandez-ai-clinical-simulation-scoping-2026.md']
source_url: "https://doi.org/10.1186/s12909-026-10793-8"
source_depth: full text
confidence: medium
evidence_context: educational
research_method: [literature review]
discipline: [medical education]
level: [undergraduate, higher ed]
audience: [medical educators, instructors, curriculum designers]
page_kind: [synthesis]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-18"
    agent: hermes-agent
verified: [citation, numbers]
---

> **Synthesis:** Hernández Rincón and colleagues (2026) map thirty empirical studies of AI-based [[simulation|clinical simulation]] in undergraduate [[medical-education|medical education]], published between 2015 and 2025 and identified from 777 database records plus backward and forward citation tracking. The corpus is overwhelmingly text-based: twenty-three of the thirty interventions (76.7%) are conversational virtual patients, chatbot simulations, NLP-supported platforms or LLM-driven systems, against three immersive VR studies (10.0%), three multimodal ones including a social robot (10.0%) and one audio-based system (3.3%). Most studies report favorable short-term outcomes in history-taking, communication, OSCE-type performance and clinical reasoning, and the authors are careful about what that adds up to: designs are small, single-center and heterogeneous, the scenarios are tightly scripted, and no study demonstrates transfer to ill-defined clinical situations. Their own reading is that the value lies less in performance gains than in structuring deliberate practice and making a learner's reasoning process visible while it happens.

## Key Findings

1. **The field is a mapping, not an effectiveness estimate.** Thirty studies met the criteria out of 777 records, with nine more added through citation tracking; the authors performed no risk-of-bias assessment and no meta-analysis, and say so explicitly.
2. **Conversational text systems are the default.** Twenty-three studies (76.7%) used text-based virtual patients or [[conversational-ai|chatbots]]; immersive [[virtual-and-augmented-reality|VR]], multimodal and robotic formats together account for seven studies, and most interventions needed only a browser and a laptop.
3. **Reported gains cluster on communication and structured performance.** Improvements appear in clinical interviewing and communication skills, OSCE or structured clinical assessment scores, and diagnostic reasoning or case-resolution tasks, but the instruments differ enough that the authors decline to compare effect sizes.
4. **Deliberate practice plus feedback is the recurring design feature.** The studies reporting the most consistent gains are those that combined repeated attempts with structured or real-time feedback, rather than those using a particular model or modality.
5. **The distinctive contribution is process data, not scores.** Two studies analyzed timestamped interaction logs and found that weaker diagnostic performance traveled with selective data gathering, failure to revise an initial hypothesis, and indicators of overconfidence — patterns that written examinations cannot see.
6. **The scenarios are constrained, so the reasoning claims are narrow.** Cases were usually delimited, with preselected data elements and limited variability, so "clinical reasoning" here means performance inside a curated scenario rather than management of genuine diagnostic uncertainty.

## What the thirty studies contain

Fourteen of the thirty were published in 2025, which tells you how recent the evidence base is. Germany contributed seven studies and the United Kingdom five, followed by Canada with four and Italy and Switzerland with two each. Participants were always undergraduate [[medical-education|medical students]], but their stage varied from first- and second-year preclinical students to final-year students on clinical rotations, and sample sizes ran from pilot groups under ten to studies over two hundred.

Designs were similarly mixed: nine studies used randomized designs, including controlled trials and crossover studies, while the rest were nonrandomized comparisons, observational designs, pilots, feasibility studies, qualitative work, case studies and mixed-methods evaluations. That spread is the reason the review reads as a map. Comparing a randomized crossover trial in one institution against a single-cohort pilot in another is not a synthesis, and the authors treat it as an inventory of what has been tried.

## Where the benefit is claimed, and how thin the measurement is

The optimistic numbers are real but narrow. In one study, 86% of students rated a GPT-based virtual patient as easy or extremely easy to use and more than 60% said no prior training was needed; in another, expert review judged 97.9% of chatbot responses medically plausible. Those are acceptability and plausibility findings, not learning findings, and the review is explicit that systematic fidelity analysis of AI-generated responses was rare.

Comparative results are genuinely mixed. Some trials found higher OSCE or history-taking scores for students trained with AI virtual patients than for controls; others found minimal differences against established simulation formats. The review's own conclusion is that the educational impact is probably mediated more by instructional design than by the presence of an AI component — a claim that should be read as a hypothesis the corpus cannot yet test, since almost no study varied the wrapper and the model independently.

Implementation details that a curriculum committee would ask about are thinly reported. Several studies used commercial or widely available [[llm|LLMs]] through web interfaces or APIs, but access models, licensing, cost and long-term availability were inconsistently described, and only a minority required hardware beyond a computer.

## Making reasoning visible

The strongest argument in the paper is not about outcomes at all. Because these systems record the sequence of questions, test requests and hypotheses, they turn [[problem-solving|clinical reasoning]] into observable data. Jarrell and colleagues used timestamped transcripts and log data to associate poor diagnostic performance with biased data gathering and unrevised hypotheses; Furlan and colleagues built quantitative reasoning indicators covering relevant-information identification, hypothesis formulation, investigation selection and diagnostic synthesis, and found those indicators correlated with external MCQ and structured performance assessments. Aster and colleagues went further into the affective side, coding dialogue for linguistic markers of empathy, though against predefined textual indicators rather than validated communication scales.

This is the gap the authors think AI actually fills. Written examinations score final answers, direct observation is episodic and expensive, and OSCEs return delayed global feedback. A system that responds to the learner's own next question can supply immediate, case-specific [[feedback]] on the reasoning that produced the answer, which is the part of clinical competence that has historically been hardest to supervise at scale. Whether that feedback is accurate enough to trust is a separate question, and the review leaves it open.

## What this means for practice

- **Medical educators.** Treat AI virtual patients as rehearsal for communication and history-taking before real patient contact, where repeated attempts and immediate feedback are the point rather than the polish of the case.
- **Curriculum designers.** Keep the AI inside a supervised sequence: the review's positive findings come from structured activities with defined objectives, not from handing students a chatbot and a topic.
- **Instructors.** Use the interaction log, not just the final diagnosis. The reasoning patterns it exposes — premature closure, narrow data gathering, unrevised hypotheses — are what a debrief should target.
- **Program directors.** Budget for oversight. The corpus reports acceptable usability but almost no systematic accuracy audit of model responses, so a local fidelity check belongs in any deployment.

## Limitations

- **No synthesis of effect.** This is a [[meta-analysis-systematic-review|scoping review]] with no risk-of-bias assessment and no quantitative pooling, so it maps the field rather than estimating how well these interventions work.
- **Small, single-site, self-selected samples.** Many studies were pilots in one institution with voluntary participation, which likely favors more motivated or technically inclined students.
- **Heterogeneous outcome instruments.** Clinical reasoning and decision-making were measured with logs, surveys, inventories, OSCEs and performance assessments interchangeably, so constructs are not comparable across studies.
- **Constrained scenarios.** Cases were largely scripted with limited variability, leaving transfer to ambiguous, evolving clinical situations untested.
- **Short horizons and moving targets.** Most studies measured immediate or short-term outcomes, and model behavior changes fast enough that reported results may not reproduce.
- **Thin reporting of cost and access.** Licensing, cost, and sustained availability of the underlying models were inconsistently described across the corpus.

## Citation

Hernández Rincón, E. H., Pesantes Bonilla, M., Rincón Franco, S., Suárez Sanmiguel, J. A., & Orozco Rodríguez, L. Y. (2026). [*Artificial intelligence–based clinical simulation in undergraduate medical education: contributions of virtual patients, chatbots, and immersive environments - a scoping review*](https://doi.org/10.1186/s12909-026-10793-8). BMC Medical Education.