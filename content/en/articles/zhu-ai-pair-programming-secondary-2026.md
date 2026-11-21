---
title: "AI-Supported Programming Environments and Pair Programming Role Strategies in Secondary School: An Exploratory Study"
created: "2026-11-21T08:25:00-05:00"
updated: "2026-11-21T08:25:00-05:00"
type: article
published: "2026"
discipline: [cs education]
foundations: [computational-thinking, human-ai-collaboration, cognitive-offloading]
pedagogy: [collaborative-learning, distributed-cognition, scaffolding]
technology: [generative-ai, llm]
assessment: [learning-gains, self-report-measures]
methods: [quantitative-research]
research_method: [quasi-experiment]
audience: [researchers, instructors, curriculum designers]
level: [k 12, secondary]
page_kind: [evaluation]
sources: ['raw/papers/zhu-ai-pair-programming-secondary-2026.md']
confidence: medium
evidence_context: educational
source_depth: full text
source_url: "https://doi.org/10.3390/educsci16111866"
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: drafting
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [cs-education, generative-ai, collaborative-learning, distributed-cognition, computational-thinking, anxiety-and-stress, cognitive-offloading]
connected_articles: []
---

> **Synthesis:** Zhu, Wu, Zhao and Shang ask whether AI support and pair-programming role strategy combine differently enough to matter for novice programmers. Four intact eighth-grade classes in a public junior secondary school in Xi'an, China, were randomly assigned to four conditions crossing AI support (with or without the Lingma coding assistant) with role strategy (fixed or rotating), and 198 students in 99 pairs completed an eight-week Python course whose focal intervention was three sessions on conditional structures. Programming performance differed across the four classrooms and across sessions, with a significant classroom-condition-by-session interaction: the AI-supported rotating-role classroom scored higher than the non-AI fixed-role classroom in Session 1 and higher than the AI-supported fixed-role classroom in Session 2, with no other pairwise comparison reaching significance. [[computational-thinking|Computational thinking]] showed no significant differences after pretest control. The non-AI fixed-role classroom reported higher cognitive load than two rotating-role classrooms and higher programming anxiety than all three others. Because one intact class carried each condition, the authors present the results as exploratory differences among observed classrooms rather than causal effects of AI support or role rotation.

## Key Findings

- **The clearest contrast paired AI support with rotating roles.** Estimated marginal means favored the AI-supported rotating-role classroom over the non-AI fixed-role classroom in Session 1 (9.35 versus 6.74, an adjusted difference of 2.61 points) and over the AI-supported fixed-role classroom in Session 2 (9.97 versus 7.30, a difference of 2.66); every other comparison, including all of Session 3, was not significant.
- **Computational thinking did not separate the four conditions.** After controlling for pretest scores, the omnibus classroom-condition test was nonsignificant, and adjusted estimated means clustered between 6.30 and 6.82 across the four rooms.
- **Fixed roles without AI carried the heaviest cognitive load.** The non-AI fixed-role classroom reported higher load than both rotating-role classrooms, by about 0.18 and 0.14 points on the five-point scale, with effect sizes around 1.1 and 0.9.
- **Programming anxiety followed the same ordering.** The non-AI fixed-role classroom reported higher anxiety than each of the other three classrooms, with adjusted differences between 0.15 and 0.20 points.
- **Students used Lingma constantly and in identifiable ways.** Across 60 pair-session recordings, 555 AI-related actions were coded; initiating a new query was most frequent (136 actions, 24.5%), followed by reviewing Lingma responses (131, 23.6%) and submitting code (128, 23.1%), while integrating proposed solutions was least frequent (89, 16.0%).
- **Role strategies were implemented as designed.** All 49 rotating-role pairs switched once in each of the three sessions (147 of 147 records), and none of the 50 fixed-role pairs switched (150 of 150).

## The four classroom conditions

The study used an exploratory four-condition comparison in four parallel eighth-grade classes at a public junior high school in Xi'an. The conditions crossed AI support (with or without) with role strategy (fixed or rotating): non-AI/fixed role, non-AI/rotating role, AI-supported/fixed role, and AI-supported/rotating role. One class was assigned to each condition, students within each class were randomly paired, and driver and navigator roles were randomly assigned within pairs. The final sample was 198 students nested in 99 pairs (101 females; ages 13–15, mean 14.05), all novice programmers.

All classes used Visual Studio Code and Python 3.12 and followed the same curriculum and instructor. The [[generative-ai|AI-supported]] conditions used Lingma, an Alibaba Cloud assistant powered by the Qwen family of large language models, which students had been trained to use before the intervention. The focal intervention ran during weeks 5–7: three 45-minute sessions on single-branch, two-branch, and multi-branch conditionals, each with 15 minutes of teacher demonstration and 30 minutes of pair programming. Programming performance was scored with a five-dimension rubric adapted from Basu (2019), each dimension rated 0–3 (internal consistency 0.93; inter-rater agreement 0.94). [[computational-thinking|Computational thinking]] was measured with the Callysto Computational Thinking Test (reliability 0.872), and [[anxiety-and-stress|cognitive load]] and programming anxiety with five-point scales (reliabilities 0.883 and 0.908). The design sits within [[cs-education|computer science education]] but tests a collaboration arrangement, not a new tool alone.

## What differed in programming performance

Before the intervention, individual programming pretest scores were descriptively similar (class means 4.72, 4.52, 4.72, and 4.63 on the 15-point scale), and the pair-level pretest covariate was not statistically significant. The linear mixed-effects model found significant classroom-condition and session effects and a significant condition-by-session interaction. Sensitivity analyses showed that the interaction depended on how residual variance was modeled: it was not significant under homogeneous variance (p = 0.093) or session-specific variance (p = 0.084), but remained significant under condition-specific variance (p = 0.015) and the combined structure (p = 0.010), which had the best fit (AIC 1468.56, BIC 1542.44).

Tukey-adjusted comparisons within each session located the advantage precisely. In Session 1, the AI-supported rotating-role classroom exceeded the non-AI fixed-role classroom (adjusted mean difference 2.61, 95% CI [0.44, 4.77]). In Session 2, it exceeded the AI-supported fixed-role classroom (difference 2.66, 95% CI [0.46, 4.86]). No comparison in Session 3 reached significance. The authors read AI assistance and role rotation as two different forms of support — one supplying code generation, error diagnosis, and debugging help, the other alternating partners between producing code and monitoring it — and note that this interpretation is tentative because the analysis compared four configurations rather than testing the interaction of AI support and role strategy directly.

## Cognitive load, anxiety, and the missing thinking difference

Two outcomes moved in the same direction. For cognitive load, the omnibus classroom-condition test was significant, with adjusted means of 2.37 in the non-AI fixed-role classroom against 2.19 and 2.23 in the two rotating-role rooms; the fixed-role room was higher than the non-AI rotating room (difference 0.180, 95% CI [0.051, 0.309], Cohen's d = 1.14) and the AI-supported rotating room (difference 0.137, 95% CI [0.013, 0.261], d = 0.87). For programming anxiety, the fixed-role room again reported the highest level (2.13 against 1.93, 1.98, and 1.94), differing significantly from all three others (differences of 0.200, 0.154, and 0.193, with effect sizes of 1.04, 0.80, and 1.01). Pretest levels strongly predicted posttest levels in both models.

[[computational-thinking|Computational thinking]] behaved differently. After controlling for pretest scores, there was no significant overall difference among the four rooms (p = 0.168), and all pairwise comparisons were nonsignificant; adjusted means ranged from 6.30 to 6.82. The authors attribute this to the breadth of the construct and the narrowness of the intervention: three sessions on conditional structures may be too short and too specific to move a broad computational thinking measure. That explanation is consistent with their own caution that the four conditions did not produce differentiated patterns within the period studied.

## How students used Lingma

Fidelity checks came from screen recordings of 20 pairs (10 per AI condition) across all three sessions, yielding 60 pair-session records, and from paper role-switch records for all 99 pairs. Coders recorded 555 AI-related actions. Initiating a new query was most common (136 actions, 24.5%), then analyzing Lingma responses (131, 23.6%), submitting program code (128, 23.1%), submitting error messages (71, 12.8%), and integrating Lingma-proposed code into the editor (89, 16.0%). The two AI conditions produced similar totals (272 versus 283). Inter-rater reliability across the five codes ranged from 0.836 to 0.973. The low frequency of integration relative to querying is the pattern the authors connect to [[cognitive-offloading|cognitive offloading]]: students can repeatedly obtain help without ever reconciling it with their own code, a risk they associate with [[collaborative-learning|peer collaboration]] being displaced by the tool. The [[distributed-cognition|distributed cognition]] argument runs the other way as well: dividing driver and navigator labor can spread cognitive burden across partners.

## What this means for practice

- **Teachers.** Treat role rotation as a support in its own right, not a fallback when AI is unavailable: both rotating-role classrooms reported lower cognitive load than the non-AI fixed-role classroom, and every classroom that added rotation, AI, or both reported lower programming anxiety.
- **Instructors.** Pair AI access with explicit instructions to interrogate it: students were trained to describe problems clearly and to request explanations for generated code, and the least frequent coded behavior was integrating Lingma's suggestions into the editor.
- **Instructional designers.** Preserve peer discussion when an AI assistant is added, since the authors' account is that AI supplies navigator-like help while partner interaction carries the monitoring and evaluation work.
- **Researchers.** Replicate with several classes per condition and a longer intervention; one intact class carried each configuration, so condition differences remain confounded with class membership.
- **Faculty developers.** Use role-switch records and interaction coding as fidelity evidence before attributing outcomes to a role strategy; here rotation compliance was complete and fixed-role compliance was equally clean.

## Limitations

- Each classroom condition was represented by a single intact class, so condition was confounded with class membership and unmeasured class-level differences could not be separated from condition-related ones.
- The focal intervention ran for only three sessions on conditional structures, while the computational thinking instrument assessed a broader construct, limiting alignment between the activities and the outcome measure.
- Process analyses were descriptive: recordings covered 20 pairs, role records captured whether switches occurred but not their timing, and programming performance was scored at pair level, so driver-versus-navigator differences could not be examined.
- A single AI programming tool was used, and students may have differed in how much they used it despite standardized training and classroom monitoring.
- The four configurations were analyzed as one four-level variable rather than as a factorial test, so the independent contributions of AI support and role rotation cannot be separated from these data.

## Citation

Zhu, Y., Wu, C., Zhao, S., & Shang, X. (2026). [AI-Supported Programming Environments and Pair Programming Role Strategies in Secondary School: An Exploratory Study](https://doi.org/10.3390/educsci16111866). *Education Sciences, 16*(11), 1866.
