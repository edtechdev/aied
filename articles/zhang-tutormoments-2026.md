---
title: "When Help is Unhelpful: Evaluating AI Tutors for Productive Struggle"
created: "2026-08-08T04:33:04-04:00"
updated: "2026-09-19T11:14:39-04:00"
type: article
foundations: [cognitive-offloading, teacher-role]
pedagogy: [scaffolding]
technology: [intelligent-tutoring, llm]
discipline: [math education]
audience: [instructors, software developers]
level: [k 12]
sources: ['raw/papers/zhang-tutormoments-2026.md']
confidence: high
page_kind: [evaluation, framework]
methods: [ai-ed-evaluation, benchmark]
---

> **Synthesis:** Zhang et al. (2026) introduce **TutorMoments**, a replay-based [[ai-ed-evaluation|benchmark]] that evaluates whether [[intelligent-tutoring|language-model tutors]] adapt their [[pedagogy|pedagogical]] actions to the specific learning moment — [[scaffolding]] when a student needs support, pushing for rigor when a student is ready for challenge, and avoiding over-scaffolding. Using 462 de-identified tutoring transcripts and **more than 1,500 teacher-annotated pedagogical decision points**, they find that **minimally prompted frontier LMs default toward over-scaffolding and rarely push for rigor**, even when students are demonstrably ready for a more demanding task. Because general LM development optimizes for "helpfulness," frontier models are **misaligned with the pedagogical goal of providing the right help at the right moment** — eroding [[desirable-difficulties|productive struggle]] and risking the cognitive-offloading effects documented across AI-tutoring [[research-methods-aied|research]].

## Core Finding


## Key Findings

- **Frontier models default to over-helpfulness.** Minimally prompted LMs frequently over-scaffold and miss rigor-pushing opportunities — consistent with post-training that rewards helpfulness over contextually appropriate challenge.
- **Rigor is rarely pushed.** LMs rarely increase cognitive demand (e.g., asking students to explain a correct answer, generalize, or attempt independent variations) even when teacher annotations judge the student ready for it.
- **Evaluation-aware [[prompt-engineering|prompting]] helps but doesn't fully fix it.** Prompts that explicitly describe the scaffolding/over-scaffolding/rigor trade-off substantially improve adaptability, but still reveal **large differences across frontier models** and concentrate behavior into a narrow set of tutor moves.
- **Teacher grounding makes evaluation meaningful.** Unlike prior tutoring [[benchmark|benchmarks]] that always reward scaffolding or always penalize answer-giving, TutorMoments conditions evaluation on whether the *specific situation* calls for scaffolding or rigor — operationalizing [[desirable-difficulties|productive struggle]], the [[sociocultural-learning|zone of proximal development]], and desirable difficulty as evaluation criteria rather than abstract ideals.
- **Two action directions, clearly defined.** Scaffolding makes content more accessible (breaking problems into chunks, guiding questions, examples); pushing for rigor increases cognitive demand (self-explanation, generalization, independent problem variations). Over-scaffolding occurs when a tutor reduces cognitive demand more than the situation requires.
- **An LM-based scoring pipeline validated against teachers.** The framework decomposes teacher and LM descriptions into atomic "facets" and classifies action direction and over-scaffolding, validated against human-annotated gold subsets — finding it harder to detect rigor pushes than scaffolding (rigor is a less well-attested behavior in LM tutoring).

## Why this matters for education

This paper reframes the core evaluation question for AI tutors: **not "does the tutor avoid giving the answer?" but "is the help provided appropriate for this learner at this moment?"** Prior tutoring benchmarks (e.g., MathTutorBench, MRBench, LearnLM's rubric) reward one side of the "assistance dilemma" or give underspecified guidance; TutorMoments instead conditions on teacher-judged learning moments, capturing whether a tutor scaffolds when support is needed, pushes for rigor when the student is ready, and recognizes over-scaffolding. This is directly relevant to the [[desirable-difficulties|cognitive-friction]] literature: AI tutors trained for maximal helpfulness may inadvertently remove the productive struggle that supports durable learning, echoing the [[cognitive-offloading|over-reliance and cognitive offloading]] findings elsewhere in the knowledge base.

## What this means for practice

- **Software developers.** Do not ship a pedagogical scorer built against one model family. The prompts were developed primarily with Claude 4.6 Opus and performance only somewhat generalized to the other frontier models tested, and LMs may favor their own outputs when scoring.
- **Software developers.** Budget for asymmetric detection and route the weak side to humans: the pipeline identified [[scaffolding]] at F1 ≈ 0.95 on the held-out split but rigor pushes at F1 ≈ 0.62 (precision 0.73–0.79, recall 0.43–0.58), so missing rigor is the expected error.
- **Instructors.** Reuse the annotation protocol as a lightweight audit of your own tool: teachers marked key moments across 122 transcripts to produce 1,536 unique decision points, a template you can run on course-specific [[math-education|math]] material.
- **Instructors.** Staff the audit with practicing teachers. All 27 annotators had more than three years of math teaching experience and 14 had more than ten, and the paper notes that even experienced instructors struggle to define rigor consistently.
- **Software developers.** Treat a replay score as an upper bound on tutor quality. The simulated student is an "oracle student" that returns the human student's actual responses, so the benchmark does not measure how a tutor handles a learner diverging from the transcript.

## Limitations

- **Work-in-progress preview with a convenience annotator pool.** 27 U.S.-based teacher annotators recruited by snowball sampling from the authors' own networks, and the authors state a more pinpointed annotation strategy is still needed to disentangle genuine disagreement about where a key moment begins from noise.
- **Narrow data scope.** 462 text-only math tutoring transcripts covering 198 students in grades 2–7 and 173 human tutors, of which only 122 transcripts were annotated; other subjects and non-text modalities are not represented.
- **Replay with an oracle student and subjective labels.** The synthetic student reproduces the human student's turns rather than reacting independently, and the ground-truth labels are derived from aggregated free-text teacher annotations whose scope the authors themselves flag as a source of disagreement.
- **Privileged information in the scoring pipeline.** The LM generates its situation-action-result descriptions conditioned on teachers' scaffolding- and rigor-appropriateness recommendations, so pipeline accuracy is measured under conditions a deployable scorer would not have.

## Connected Concepts

- [[math-education]]
- [[k-12]]
- [[scaffolding]]
- [[teacher-role]]
- [[intelligent-tutoring]]
- [[llm]]
- [[cognitive-offloading]]
- [[sociocultural-learning]]
- [[desirable-difficulties]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[learning-gains]]

## Connected Articles

- [[lak2026-hint-button-unproductive-use]] — Unproductive hint-button use in intelligent tutoring
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Affect-aware math tutoring

## Citation

Zhang, A., Ross, A., Patel, K., Bernado, J., Bowie, R., Ribeiro, A. T., Halper, D., Valayaputtur, H., Andreas, J., Loeb, S., Lucy, L., Lo, K., & Knight, R. (2026). *[When Help is Unhelpful: Evaluating AI Tutors for Productive Struggle](https://tutormoments.allen.ai/static/paper/tutormoments-preview.pdf)*.