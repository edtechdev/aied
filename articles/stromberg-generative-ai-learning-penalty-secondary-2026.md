---
title: "The Generative AI Learning Penalty: Evidence from Chinese Secondary Education"
created: "2026-08-19T17:12:00-04:00"
updated: "2026-08-20T03:52:04-04:00"
type: article
tags: [generative-ai, cognitive-offloading, reducing-ai-misuse, k-12, assessment, learning-gains, active-learning, rct, equity-in-ai-education]
research_method: [learning analytics, randomized controlled trial]
level: [k 12]
category: [assessment]
sources: ['raw/papers/stromberg-generative-ai-learning-penalty-secondary-2026.md']
confidence: high
---
> **Synthesis:** Strömberg, Lei, and Wu (2026) provide large-scale quasi-experimental evidence of a **"[[generative-ai|generative AI]] learning penalty."** Using 30 months of panel data on 26,811 Chinese secondary students (grades 7–12), they exploit staggered generative-AI adoption in a difference-in-differences design. AI adoption raises homework scores by 18% and cuts homework completion time by 30%, but *lowers* monthly closed-book exam scores by 20% within six months, and high-stakes entrance-exam scores by 18–24% only after about two years. The learning losses are concentrated among the roughly 81% of AI users whose behavior indicates **homework outsourcing**; AI users who keep homework time comparable to non-users learn as efficiently.

## Key Findings
- **Task productivity diverges sharply from learning:** generative AI boosts homework performance (scores +18%, completion time −30%, from 64 to 45 min) while *reducing* closed-book exam performance (−20% of baseline mean, ≈1.4 SD) within six months.
- **Long-run learning costs accumulate slowly but are large:** high-stakes entrance-exam scores fall by 18% (Gaokao/college) and 24% (Zhongkao/high school) of baseline mean (1.3–1.5 SD), with the full penalty emerging only after ~two years — implying short-duration studies systematically underestimate the long-run cost.
- **The penalty is driven by homework outsourcing:** ~81% of AI users complete homework in less time than the fastest non-AI students, receive scores matching generative-AI accuracy, and perform poorly on exams. AI users who spend as much time on homework as non-users achieve similar exam scores.
- **Effects differ by subject and student:** losses are largest in social sciences (Politics, Geography, −27%), then [[stem-education|STEM]] (−22%), then languages (English −17%, Chinese −9%); and are larger for junior students, boys, and high-achieving students.
- **Some adaptation over time:** the estimated penalty fell from ~25% (early 2023) to ~16% (June 2025), suggesting students/[[teacher-role|teachers]] are gradually adapting but persistent barriers remain.

## Study Design & Method
This is a **large-scale quasi-experimental econometric study** (working paper, June 2026). It combines 30 months of administrative panel data on 26,811 Chinese students across nine subjects, including monthly closed-book exams, high-school (Zhongkao) and college (Gaokao) entrance exams, and homework scores/completion time. Identification relies on **staggered generative-AI adoption in a difference-in-differences (DID) design**, with reported AI use rising from near zero in 2022 to ~80% by June 2025. The authors distinguish short-run learning (monthly exams) from long-run learning (entrance exams) and classify students into "outsourcing" vs. "non-outsourcing" AI users based on homework time and score patterns.

## Why the penalty ramps gradually
The study reconciles its slow-build learning loss with the large *immediate* effects reported in randomized experiments (e.g., Bastani et al. 2025, Kestin et al. 2025). In experiments, students are assigned highly accessible AI tools with explicit instructions, bypassing the learning curve; in the natural school setting here, students must learn through trial and error how to apply general-purpose AI to schoolwork, which delays both the homework-productivity boost and the exam decline. Two accumulating mechanisms drive the penalty: students' steadily declining homework completion time (growing reliance on AI), and an increasing fraction of course material being processed via generative AI — so the negative exam effect grows as the ratio of lost time to homework-time savings rises.

## Implications for AI in Education
This study is central to the knowledge base's understanding of [[reducing-ai-misuse|reducing AI misuse]] and [[cognitive-offloading]]. It provides large-scale field evidence that unguarded, [[self-directed-learning|self-directed]] use of general-purpose generative AI — used as a homework substitute rather than a tutor — can undermine actual learning even while inflating homework grades, a phenomenon students often fail to perceive. Its findings connect to [[cognitive-offloading]] (bypassing the practice/effort that produces learning), [[assessment]] and [[learning-gains]] (homework scores as misleading signals), and [[equity-in-ai-education|equity]] (larger losses for high-achieving students, boys, and junior students). Policy recommendations include informing students of the long-run learning costs, weighting closed-book in-person assessment more heavily, and having parents/teachers monitor inputs (homework time, effort) rather than outputs (homework scores). The [[rct]] literature on [[intelligent-tutoring|AI tutors]] (e.g., Bastani et al. 2025, Kestin et al. 2025) provides a contrasting supply-side lens. The authors also caution that the fact that non-outsourcing AI users learn as well as non-AI users does **not** imply simply mandating longer homework time will restore learning: longer-time AI users differ on unobservables (closer parental monitoring, better knowledge of how to learn with AI), so requiring more homework time may not help students who are outsourcing because they do not know how to use AI productively.

## Limitations
This is a working paper (SSRN preprint) and not yet peer-reviewed. The difference-in-differences design relies on observational AI-adoption patterns rather than randomization. The setting is Chinese secondary education, which may not generalize to other contexts. The "homework outsourcing" classification is behaviorally inferred from homework time/scores rather than directly observed tool use. Standard-deviation effect sizes appear large in part because averaging across subjects compresses the outcome SD.

## Connected Concepts

- [[cognitive-offloading]]
- [[reducing-ai-misuse]]
- [[generative-ai]]
- [[learning-gains]]
- [[assessment]]
- [[k-12]]
- [[rct]]
- [[equity-in-ai-education]]
- [[ai-ed-evaluation]]
- [[educational-policy-ai]]

## Connected Articles

- [[ssaho-ai-academic-integrity-review-2025]] — AI and academic integrity review
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Oral exams as authentic AI-resistant assessment

## Citation

Strömberg, D., Lei, V., & Wu, Y. (2026). [*The generative AI learning penalty: Evidence from Chinese secondary education*](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6868618). SSRN Working Paper No. 6868618.
