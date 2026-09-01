---
title: "When Help is Unhelpful: Evaluating AI Tutors for Productive Struggle"
created: "2026-08-08T04:33:04-04:00"
updated: "2026-08-22T01:55:00-04:00"
type: article
tags: [intelligent-tutoring, scaffolding, llm, ai-ed-evaluation, k-12, math-education, benchmark, teacher-role, cognitive-offloading]
research_method: [benchmark]
discipline: [math education]
audience: [instructors, software developers]
level: [k 12]
sources: ['raw/papers/zhang-tutormoments-2026.md']
confidence: high
---

## Core Finding

Zhang et al. (2026) introduce **TutorMoments**, a replay-based [[ai-ed-evaluation|benchmark]] that evaluates whether [[intelligent-tutoring|language-model tutors]] adapt their [[pedagogy|pedagogical]] actions to the specific learning moment — [[scaffolding]] when a student needs support, pushing for rigor when a student is ready for challenge, and avoiding over-scaffolding. Using 462 de-identified tutoring transcripts and **more than 1,500 teacher-annotated pedagogical decision points**, they find that **minimally prompted frontier LMs default toward over-scaffolding and rarely push for rigor**, even when students are demonstrably ready for a more demanding task. Because general LM development optimizes for "helpfulness," frontier models are **misaligned with the pedagogical goal of providing the right help at the right moment** — eroding [[desirable-difficulties|productive struggle]] and risking the cognitive-offloading effects documented across AI-tutoring [[research-methods-aied|research]].

## Key Findings

- **Frontier models default to over-helpfulness.** Minimally prompted LMs frequently over-scaffold and miss rigor-pushing opportunities — consistent with post-training that rewards helpfulness over contextually appropriate challenge.
- **Rigor is rarely pushed.** LMs rarely increase cognitive demand (e.g., asking students to explain a correct answer, generalize, or attempt independent variations) even when teacher annotations judge the student ready for it.
- **Evaluation-aware [[prompt-engineering|prompting]] helps but doesn't fully fix it.** Prompts that explicitly describe the scaffolding/over-scaffolding/rigor trade-off substantially improve adaptability, but still reveal **large differences across frontier models** and concentrate behavior into a narrow set of tutor moves.
- **Teacher grounding makes evaluation meaningful.** Unlike prior tutoring [[benchmark|benchmarks]] that always reward scaffolding or always penalize answer-giving, TutorMoments conditions evaluation on whether the *specific situation* calls for scaffolding or rigor — operationalizing [[desirable-difficulties|productive struggle]], the [[sociocultural-learning|zone of proximal development]], and desirable difficulty as evaluation criteria rather than abstract ideals.
- **Two action directions, clearly defined.** Scaffolding makes content more accessible (breaking problems into chunks, guiding questions, examples); pushing for rigor increases cognitive demand (self-explanation, generalization, independent problem variations). Over-scaffolding occurs when a tutor reduces cognitive demand more than the situation requires.
- **An LM-based scoring pipeline validated against teachers.** The framework decomposes teacher and LM descriptions into atomic "facets" and classifies action direction and over-scaffolding, validated against human-annotated gold subsets — finding it harder to detect rigor pushes than scaffolding (rigor is a less well-attested behavior in LM tutoring).

## Why this matters for education

This paper reframes the core evaluation question for AI tutors: **not "does the tutor avoid giving the answer?" but "is the help provided appropriate for this learner at this moment?"** Prior tutoring benchmarks (e.g., MathTutorBench, MRBench, LearnLM's rubric) reward one side of the "assistance dilemma" or give underspecified guidance; TutorMoments instead conditions on teacher-judged learning moments, capturing whether a tutor scaffolds when support is needed, pushes for rigor when the student is ready, and recognizes over-scaffolding. This is directly relevant to the [[desirable-difficulties|cognitive-friction]] literature: AI tutors trained for maximal helpfulness may inadvertently remove the productive struggle that supports durable learning, echoing the [[cognitive-offloading|over-reliance and cognitive offloading]] findings elsewhere in the knowledge base.

## Practical Implications

- **Evaluate tutors on context, not just behavior frequency.** When choosing or building an AI tutor, assess whether it *adapts* (scaffolds when needed, challenges when ready) rather than whether it merely avoids answer-giving — the same action can be appropriate in one moment and over-scaffolding in another.
- **Design prompts and models to push for rigor.** Because models default to over-helpfulness, explicitly prompt tutors to recognize rigor-appropriate moments (consistently correct performance, just-received scaffolding) and to increase cognitive demand (self-explanation, generalization, independent practice) when indicated.
- **Watch for the "narrow move set."** LM tutor behavior concentrates into a few moves, lacking the diversity of human tutor strategies — a reason to monitor and diversify tutor responses rather than assume fluency equals adaptivity.
- **Pair AI scaffolding with productive-struggle preservation.** Use scaffolding to maintain access without removing the cognitive work — aligning with the knowledge base's evidence that AI which erases desirable difficulty produces short-term gains at the cost of durable learning and [[transfer-of-learning|transfer]].
- **For educators, use the framework's lens.** Teacher-identified decision points offer a practical template for auditing whether an AI writing/math tool over-scaffolds, misses rigor opportunities, or adapts to learners' evolving understanding.

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