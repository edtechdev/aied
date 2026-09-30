---
title: RCT
created: "2026-08-09T07:47:05-04:00"
updated: "2026-09-30T07:37:28-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
research_method: [experiment]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
reviewed_by: [editor]
---

> **Randomized controlled trial (RCT)** — a research design in which participants are randomly assigned to a treatment or control condition to estimate the causal effect of an intervention on an outcome. In [[ai-education|AI in education]], RCTs are the gold standard for establishing whether an AI tool or [[pedagogy|pedagogical]] approach *causes* [[learning-gains|learning gains]], engagement changes, or other outcomes, rather than merely correlating with them.

## Questions to Consider

- If a school tells you 'students who used the AI tool scored higher,' why might that still fail to prove the tool caused the gain — even if the difference is large?
- Randomization balances known *and unknown* confounders across groups. Before you read, what does random assignment accomplish that simply comparing two intact classrooms cannot, no matter how well-matched they look?
- The page calls the RCT the gold standard but lists real costs: artificial settings, fast-changing AI that dates trials, underpowered small samples, and [[ethics|ethical]] constraints on withholding helpful tools. Which of these trade-offs do you think is most often ignored in education research headlines?
- An RCT with 1,174 participants found [[generative-ai|GenAI]] closed about three-quarters of an education-based productivity gap. But a well-run RCT can still be conducted on a narrow task in a contrived setting. What should you check about the *outcome measure* before trusting the causal claim?
- Consider the ethics problem directly: if you had genuine reason to believe an [[intelligent-tutoring|AI tutor]] helps students learn, is it defensible to randomly deny it to half a classroom for a semester? How would you design an ethically sound study that still isolates the cause?

## Introduction

Randomization is what distinguishes an RCT from other designs: by randomly assigning learners to conditions, an RCT balances known and unknown confounders across groups, so any observed difference in outcomes can be attributed to the intervention with high internal validity.

### How RCTs appear in the research

- **Micro-RCTs as a response to fast-moving technology:** [[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al. (2026)]] argue that conventional large-scale trials cannot keep pace with tutoring [[edtech-platform|platforms]] that change materially during a study, and use [[teacher-role|teacher]]-led micro-randomized controlled trials across English secondary schools (644 of 929 students completing post-testing, g = 0.33) to keep causal estimation repeatable. The trade-offs are stated in their own design: 30.7% attrition, [[curriculum-design|curriculum]]-aligned rather than independently standardized outcomes, and only four weeks of follow-up.
- **Causal efficacy claims:** RCTs in AIED test whether an AI tutor, tool, or pedagogical treatment improves outcomes. [[generative-ai-education-productivity-gaps|A randomized experiment on generative AI]] with 1,174 participants found GenAI substantially narrows education-based productivity gaps, closing roughly three-quarters of the initial performance difference — a clear causal estimate of AI's effect.
- **Comparison to the gold standard:** The [[research-methods-aied|research methods]] page situates RCTs as the strongest design for internal validity while noting their trade-offs — cost, artificial conditions, fast-changing AI, small underpowered samples, and ethical limits on withholding potentially helpful tools.

- **A trial designed for equivalence, not difference.** [[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]] randomized 2,383 adults to AI tutoring, live human tutoring, or a video control, wrote new GRE items with former ETS and Kaplan test developers to keep published-test contamination out, counterbalanced the two forms, and tested equivalence with two one-sided tests against ±0.25 SD rather than a difference - the design choices that make "no significant difference" an interpretable result.

- **Group randomization, low uptake, and what an intent-to-treat estimate then means.** [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] randomized 2,379 undergraduates across 13 blocks by assigning *instructors* rather than students, so every student in a section inherited that instructor's condition — the design that makes a multi-section deployment trial feasible, and the one that creates the inference problems the study then documents. Only about 15% of students in treated sections ever used the tool, so the reported effects estimate *offering* access rather than using it; the authors read the intervention as the broader AI use its introduction induced, and treat individual sessions as a separate question. Because treatment was assigned at the instructor level, inference rests on 34 clusters — a setting in which cluster-robust standard errors overstate precision — so the paper reports randomization inference alongside them and finds its conclusions robust. The two headline effects, a 0.37 SD fall in final grades in the exact-match sample and a 0.90 SD fall in recorded platform participation in both samples, are section-level consequences that a per-student randomization of the same tool could not have isolated without contamination between treated and control classmates.
- **Scale that converts nulls into evidence.** [[mata-sustaining-ai-enabled-student-support-2026|Mata et al. (2026)]] followed 8,708 students across eight semesters with power to detect effects of 0.05 SD and found large, immediate movement on dated binary tasks — 34 percentage points more registration by August 16 after a single reminder — while academic performance, persistence, and graduation showed no detectable effect. The scale is the design lesson: at this N the academic nulls are precise results rather than failures to detect, which is what licenses the conclusion that a communication tool moves what it can address and not cumulative learning outcomes.
- **Pre-registration that fixes the question and the detectable effect.** [[chatbot-outreach-course-performance-2026|Meyer et al. (2026)]] registered both course trials with the Registry of Efficacy and Effectiveness Studies, committing in advance to intent-to-treat estimation and a minimum detectable effect size of about 0.157, and randomized consenting students each term with a second wave at add/drop so late enrollees entered the design rather than the default analysis sample. Pooling 2,483 students across two courses, the effect sits at the A/B threshold (four percentage points) while the pooled numeric-grade change does not survive multiple-comparison correction — a reminder that a registered primary outcome disciplines which of several correlated results is believed.
- **Randomizing inside intact sections, with a pre-treatment baseline.** [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni & Fryer (2026)]] randomized 454 undergraduates within three intact marketing sections after drop/add and measured all four outcomes at T1, before any student had chatbot access, so the term-long comparison rests on a measured baseline rather than an assumed one. The flat result (no group × time interaction reached significance; the largest reported effect was d = 0.050, on interest) is reported alongside adoption — 0.89 logins per week against an assigned once a week — which keeps a null about a weakly used treatment from being read as a null about the tool.
- **Within-subject crossover, and a control set at best practice.** [[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al. (2025)]] had each of 194 Harvard life-sciences students work two physics lessons — once in an in-class [[active-learning]] session and once with the course's own AI tutor, in counterbalanced order with pre- and post-tests around each — so every student serves as their own control and the comparison of *delivery modes* is not confounded by who was assigned which. The design's second choice matters as much: the comparator was research-based active learning rather than a lecture, so the advantage (median post-test 4.5 vs. 3.5) is measured against current best practice and cannot be read as "AI beats teaching."

### Strengths and limitations

- **Strengths:** strongest causal inference; clean outcome measurement; supports effect-size estimation; balances confounders through randomization.
- **Limitations:** costly and slow; artificial settings can reduce ecological validity; AI tools change faster than trials can run; small samples often underpower detection of meaningful effects; ethical constraints on withholding potentially beneficial AI from a control group. Two of those limits change shape when assignment is clustered: the effective sample becomes the number of *clusters* rather than the number of students, so a trial can be large by headcount and thin by that measure — Liu et al.'s 2,379 students rest on 34 instructor-level clusters — and when uptake is voluntary and low, an intent-to-treat estimate answers whether offering the tool changed outcomes, not whether using it did.

For the fuller treatment of experimental design in AI in education — including when an RCT is appropriate versus quasi-experimental, survey, or computational designs — see [[research-methods-aied]].

## Connected Concepts

- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[generative-ai]]
- [[higher-ed]]
- [[ai-education]]

## Connected Articles

- [[generative-ai-education-productivity-gaps]] — Does generative AI narrow education-based productivity gaps? Evidence from a randomized experiment
- [[ai-changing-teaching-workflows]] — How AI is changing teaching workflows
- [[genai-can-harm-teaching-rct-2026]] — Generative AI can harm teaching: an RCT
- [[access-not-enough-ai-tutoring-2026]] — Access is not enough: human support improves engagement with AI tutoring
- [[burneo-can-edtech-close-learning-gaps-2026]] — World Bank meta-analysis of 14 EdTech RCTs
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluating AI Tutoring at the Speed of Innovation: Practitioner-Led Micro-Randomized Trials of an AI Tutoring Platform in GCSE Science
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Group randomization by instructor: a 0.37 SD fall in final grades and a 0.90 SD fall in platform participation, with 15% uptake and inference on 34 clusters (Liu et al. 2026)
