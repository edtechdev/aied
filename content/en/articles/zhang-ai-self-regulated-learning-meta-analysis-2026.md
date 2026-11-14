---
title: "A Meta-Analysis of AI-Assisted Self-Regulated Learning"
created: "2026-11-07T10:06:57-05:00"
updated: "2026-11-14T11:30:00-05:00"
published: "2026"
type: article
pedagogy: [self-regulated-learning, metacognition, scaffolding, help-seeking]
technology: [generative-ai, llm, conversational-ai, intelligent-tutoring, adaptive-learning, learning-analytics]
assessment: [feedback]
methods: [meta-analysis-systematic-review]
foundations: [human-ai-collaboration]
research_method: [literature review]
audience: [researchers, instructors]
level: [higher ed, secondary, primary education]
page_kind: [synthesis]
sources: ['raw/papers/zhang-ai-self-regulated-learning-meta-analysis-2026.md']
source_url: "https://doi.org/10.24059/olj.v30iSI2.5691"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-07"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: revision
    date: "2026-11-14"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Zhang, Li, Xu, Cheng and West (2026) pool 34 experiments and quasi-experiments into 91 effect sizes on how AI-based teaching affects [[self-regulated-learning|self-regulated learning]] and its parts. The average gain is moderate to large, but the studies disagree widely. Gains are positive for resource management, [[metacognition|metacognition]] and cognitive strategies, and largest where the tool taught rather than displayed data: [[intelligent-tutoring|tutoring]] and [[adaptive-learning|adaptive]] systems beat [[conversational-ai|conversational AI]], which beat [[llm|LLM]] tools and [[learning-analytics|dashboards]], while [[feedback|feedback]] and [[scaffolding|scaffolding]] roles beat monitoring. Discipline, length and measurement did not change results. Design, not the presence of AI, drives the gain, the authors conclude, and they call for [[human-ai-collaboration|human-AI collaboration]] that hands regulation back to the learner. The contrasts are exploratory.

## Key Findings

1. **AI-supported self-regulated learning gains are moderate to large but uneven.** Across 34 studies the average improvement is well above a trivial one, and the spread between studies is wide — the pooled number summarizes a literature that disagrees with itself.
2. **The search was broad and the usable evidence narrow.** Thousands of records were screened down to three dozen studies that met the design and reporting criteria, which limits how much any subgroup comparison can carry.
3. **Resource management moved most, cognitive strategies least.** Effects were largest for managing time, effort and help-seeking, solid for metacognitive strategies, and smallest for rehearsal, elaboration and organization — the strategies most dependent on prior knowledge and settled beliefs.
4. **What the tool did mattered more than what it was.** Tutoring and adaptive systems produced the biggest gains, conversational agents next, and LLM tools and analytics dashboards the smallest; only the conversational-versus-dashboard gap was statistically clear.
5. **Instructional role beat monitoring.** Tools that gave feedback, assessed work, or scaffolded the task outperformed those that only monitored and displayed it, and whether the system used generative AI made no difference to the effect.
6. **Educational level differed only at the margin.** Higher education and elementary schooling showed similar gains and secondary schooling lower, but that contrast sat right at the significance line and rests on very unequal numbers of studies.
7. **Design choices did not explain the variation.** Experimental and quasi-experimental studies, active and passive controls, length, sample size, SRL phase, measure and discipline all produced similar pooled effects, which the authors read as absence of evidence rather than equivalence.

## How the evidence base was assembled

Zhang and colleagues searched ERIC, Education Source, PsycINFO, Web of Science, Scopus, and ProQuest Dissertations and Theses Global on December 29, 2024, with no start date and search blocks for SRL, AI, and research design. Inclusion required an experimental or quasi-experimental design with an AI-based intervention, a control group, SRL or an SRL strategy as an outcome, and enough data to compute an effect size. Studies using one-group pretest-posttest designs, or reporting only strategies that reached significance, were excluded.

The search returned 5,741 records; 1,323 were duplicates, leaving 4,418 screened on title and abstract, 216 reviewed in full text, and 34 that met all criteria (30 journal articles, 4 conference papers); backward citation searching added none.

Coding was done in pairs, with 95.24% agreement for the first pair and 93.33% for the second before discussion. A six-criterion quality appraisal produced scores from 1 to 4 (M = 2.76, SD = 0.85), with 89.2% agreement across 204 ratings; quality informed interpretation rather than exclusion. Effects were expressed as Hedges' g, pretest-adjusted where data allowed (r = .50 assumed), and pooled with robust variance estimation using ρ = .80 and a small-sample correction.

The set is weighted toward [[higher-ed|higher education]]: 25 studies, against 5 in secondary education and 4 in elementary. Language learning (13 studies) and science (9) dominate the disciplines. Fifteen studies were experimental and 19 quasi-experimental; 17 used active controls against 18 passive controls.

## Where the effects were largest

All three subdomains moved in the same direction, but not equally. Resource management produced the largest pooled estimate (g = 0.93, SE = 0.30, 95% CI [0.24, 1.62], p < .05; 11 studies, 21 effect sizes), followed by metacognitive strategies (g = 0.73, SE = 0.14, 95% CI [0.44, 1.02], p < .001; 20 studies, 38 effect sizes) and cognitive strategies (g = 0.48, SE = 0.20, 95% CI [0.04, 0.90], p < .05; 9 studies, 15 effect sizes). The resource-management interval is wide enough to include effects below the cognitive estimate, so the ordering is descriptive rather than firmly separated.

The authors offer three tentative explanations, all labeled untested. First, several interventions were built around [[help-seeking|help-seeking]] and other resource-management routines, so students practiced the strategy being measured. Second, interaction with AI recruits planning, monitoring, and evaluation, the processes that [[metacognition|metacognitive strategies]] describe, and dashboards or prompts can reinforce them. Third, cognitive strategies such as rehearsal, elaboration, and organization depend on prior knowledge and settled learning beliefs, which short interventions are unlikely to change.

## Which conditions changed the effect

Moderator analyses found significant differences for educational level, AI application type, and AI pedagogical role. The educational-level result rests on a borderline elementary versus secondary contrast (difference g = 0.40, p = .04996): higher education produced g = 0.83, elementary g = 0.81, and secondary g = 0.41. With 25 higher-education studies against 5 secondary and 4 elementary, the comparison is imprecise.

For AI application, intelligent tutoring and adaptive systems produced the largest estimate (g = 1.20), then conversational agents (g = 0.88), LLM-empowered systems (g = 0.56), and learning analytic systems (g = 0.37). Only the conversational agent versus learning analytics contrast reached the .05 threshold. For pedagogical role, feedback and assessment led (g = 1.11), followed by scaffolding and facilitation (g = 0.80), mixed roles (g = 0.71), and monitoring or analytics (g = 0.32); only scaffolding versus monitoring was significant.

Everything else was null, including whether the system was [[generative-ai|generative AI]] (yes 0.59, no 0.88). Experimental (g = 0.77) and quasi-experimental (g = 0.76) designs were close, as were active (g = 0.73) and passive (g = 0.80) controls. Pretest studies were higher (g = 0.94) than those without (g = 0.59) but not significantly. Intervention length ranged from g = 0.62 for 6 to 10 weeks to g = 0.85 for 11 to 16 weeks; sample-size cells ranged from g = 0.37 to g = 1.28; SRL phase from g = 0.72 to g = 1.02; and online (g = 0.62) and offline (g = 0.85) measures did not differ significantly. Discipline (language g = 0.97, science g = 0.73, engineering g = 0.59) and STEM status (STEM g = 0.66, non-STEM g = 0.82) were also null. The authors warn that these results do not establish equivalence, and that robust variance estimation makes tests conservative.

## What the synthesis adds, and what it cannot settle

The closest prior synthesis, Yin et al. (2025), examined pedagogical agents alone and did not find educational level to moderate effects, while it did find intervention length to matter. They attribute the difference to scope: their set spans tutoring systems, adaptive platforms, chatbots, LLM tools, and dashboards. Banihashem et al. (2025) mapped the same literature and likewise found higher education dominant. The practical thread the authors draw is Molenaar's argument for [[human-ai-collaboration|human-AI collaboration]] with control shifting between learner, teacher, and system, with the aim of handing regulation back to the learner.

The design limits what can be concluded. Moderators are study-level descriptors, not manipulated variables, so a significant contrast identifies an association between a design feature and effect size, not a causal lever. The paper calls its explanations hypotheses and says it did not test mechanisms. It cannot say whether gains persist or transfer, or how they relate to achievement, which was not an outcome. The largest gap is affordance-level analysis: most included studies compare a task with AI to the same task without it, which cannot separate personalization, automation, and real-time response.

## What this means for practice

- **Instructors:** Target resource management and metacognitive support first. These produced the largest pooled effects, and several included interventions built help-seeking, planning, and monitoring into the task itself.
- **Instructors:** Do not expect short AI exposure to change elaboration or organization. Cognitive strategies showed the smallest pooled effect, and the authors suggest content-rich scaffolds aimed directly at these strategies, paired with teacher guidance.
- **Instructional designers:** Prefer tools that give guidance over tools that only display data. Feedback and scaffolding roles produced larger estimates than monitoring or analytics, and dashboards alone leave interpretation and planning with the learner.
- **Instructors:** Design for handover, not dependence. The authors frame the goal as transferring regulation to the learner, consistent with [[human-ai-collaboration|human-AI collaboration]], which matters when prompts are frequent enough to substitute for the learner's own planning.
- **Administrators:** Evaluate tools on self-regulated learning, not achievement alone. The authors recommend that institutions include planning, monitoring, and reflection in procurement criteria and fund professional development that shows how AI supports those processes.

## Limitations

- The evidence base is 34 studies with thin cells: 4 elementary studies, 5 secondary studies, 6 effect sizes for monitoring or analytics, and 17 active-control studies pooled into one broad category. Quality scores ranged from 1 to 4 (M = 2.76, SD = 0.85), and no study was excluded for quality, so weak studies remain in the pooled estimate.
- Multiple unadjusted comparisons raise the risk of Type I error, and the educational-level contrast sits at p = .04996. The authors describe the moderator findings as exploratory.
- Title and abstract screening used one reviewer per record after a 50-record calibration; full texts were double-reviewed, but the original decisions were not preserved, so agreement before discussion could not be calculated.
- Only English-language journal articles, conference papers, and dissertations were eligible, and reports without usable quantitative data were excluded, which removes part of the evidence base.
- Publication bias checks were mixed: the funnel plot looked asymmetric, Egger's test was not significant, and trim and fill found no missing studies, so small-study effects cannot be ruled out.
- The synthesis cannot establish causality beyond the included designs, cannot isolate which AI affordance produced an effect, and does not measure durability, transfer, or achievement.

## Citation

Zhang, Z., Li, B., Xu, Q., Cheng, Z., & West, R. E. (2026). [*A Meta-Analysis of AI-Assisted Self-Regulated Learning*](https://doi.org/10.24059/olj.v30iSI2.5691). *Online Learning*, 30(SI2), e5691.
