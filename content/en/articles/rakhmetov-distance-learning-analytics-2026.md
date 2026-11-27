---
title: "Distance learning using artificial intelligence: insights from educational analytics and student interaction data"
created: "2026-11-27T01:33:12-05:00"
updated: "2026-11-27T14:10:00-05:00"
type: article
published: "2026-07-08"
sources: ['raw/papers/rakhmetov-distance-learning-analytics-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [network analysis]
discipline: []
level: [higher ed]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Rakhmetov and colleagues analyzed interaction logs from 721 [[higher-ed|university]] students on an AI-supported [[online-teaching-and-learning|distance learning]] platform to identify learner profiles and engagement patterns. Combining [[learning-analytics|learning analytics]], [[network-analysis|network analysis]], k-means clustering and analysis of variance, they derived an immersion index for how resources attract and retain attention. Five profiles emerged: Observers, who made up 77.53% of the sample, plus Evaluators, Universal learners, Commentators and Content Creators. Learner profile, resource type and their interaction all had significant effects on engagement dynamics, with the interaction showing the largest effect size. Universal learners had the most interconnected networks, while Observers showed broad but low-density patterns. The authors argue that content-oriented and observational participation is genuine engagement, not mere passivity, and that [[learning-design|course design]] should support different participation roles.

## Key Findings

1. **Observational participation was the norm.** More than three quarters of the students were Observers who viewed materials without explicit commenting, posting or evaluating.
2. **Four active profiles emerged from the remainder.** The remaining students grouped into Evaluators, Universal learners, Commentators and Content Creators on the basis of viewing, interactive and evaluative actions.
3. **Resource type mattered alongside learner type.** Engagement dynamics depended significantly on profile, resource type and the interaction between them.
4. **Network structure separated the profiles.** Universal learners showed the most saturated and connected interaction networks, while Observers had high-dimensional but sparse patterns.
5. **Attention dynamics differed by role.** Observers accumulated and dispersed attention quickly; Commentators and Universal learners showed more stable engagement trajectories.
6. **Resource preferences were profile-specific.** Evaluators were most involved with educational materials, Commentators with navigation and survey resources, and Content Creators with cases and blogs.
7. **The design implication is role-differentiated support.** Mandatory heavy social activity can disadvantage Observers while failing to support deeper work by Commentators and Content Creators.

## What the study measured and how

The course was delivered in a modular distance format with five thematic blocks aimed at professional and digital competencies. Each module combined educational texts, videos and presentations, practice-oriented assignments, interactive elements such as forums and comments, and [[ai-feedback-quality|automated feedback]] and recommendation tools. The platform recorded clickstream data on logins, resource views, task submissions, comments, reactions and transitions between materials. Its AI-supported components supplied resource recommendations, progress notifications and prompts based on activity history; the authors state these supported rather than replaced the [[teacher-role|teacher]]. Data were collected across several consecutive course runs, with full analytics capture at the final stage. After removing test and incorrect entries, 721 students remained in the analysis.

Interactions shorter than one second were excluded as noise. Learning sessions were formed using a 30-minute inactivity threshold, which corresponded to the 98th percentile of intervals between actions in the sample. A directed network was built with educational resources as nodes and successive transitions as edges; repeated transitions between the same pair were aggregated as edge weights. Structural indicators included number of nodes, number of edges, average degree and network density. The immersion index combined normalized activity accumulation before a resource with normalized retention or redistribution after it, averaging the two on a 0-to-1 scale; higher values indicate stronger attention attraction and retention.

Cluster analysis used normalized shares of viewing, interactive and evaluative actions. The elbow method was applied to the 162 students who showed active interaction, and four stable groups were identified; the solution was checked with multiple random initializations and cluster interpretability. A two-factor analysis of variance then tested five learner types against ten resource types. Demographic information was available only for a subset of participants, so gender and background comparisons were treated as supplementary; previous course participation did differ across groups (χ² = 25.729, p < 0.05).

## What the profiles and networks showed

Of the 721 students, 559 were Observers (77.53%), leaving 162 students (22.47%) for the cluster analysis. Within the active set, the identified groups contained 44 Evaluators, 67 Universal learners, 33 Commentators and 18 Content Creators; Content Creators were the smallest profile at 2.50%. The authors caution that Observers still viewed, navigated and selectively engaged with materials, so their large share should not be read simply as disengagement.

In the two-factor analysis, learner type had F = 24.905, p < 0.001 and partial η² = 0.024; resource type had F = 22.262, p < 0.001 and partial η² = 0.047; and the interaction of the two had F = 7.046, p < 0.001 and partial η² = 0.059. The authors describe these as small-to-moderate effects, with the combined influence of profile and resource explaining more than either factor alone. A one-factor analysis also found significant differences in immersion levels between groups for key resource types (p < 0.05).

The network analysis found the most saturated structure for Universal learners, reflecting intensive and varied resource use. The Observer network was high in dimension but low in density, indicating scattered attention without stable links between resources. Evaluators showed the greatest involvement with educational materials and the [[problem-solving]] center, Commentators high immersion in navigation and survey resources, Content Creators peak immersion on cases and blogs, and Universal learners the greatest involvement in shared interaction spaces. Information-oriented resources such as review materials and announcements drew attention early and helped students orient themselves, while blogs, cases and educational materials retained attention longer.

The authors read these patterns as evidence against one-size-fits-all course designs that equate engagement with visible social activity. They propose adaptive course design, personalized recommendations and differentiated instructional support keyed to the interaction profile, with intelligent navigation and cognitive-load reduction for Observers and discussion support tools for Commentators.

## What this means for practice

- **Instructors.** Do not equate low social posting with disengagement: viewing and navigation were the dominant content-oriented strategy among Observers, who made up 77.53% of the sample.
- **Instructors.** Match support to role by offering navigation help and recommendations to Observers, discussion tools to Commentators, and cases and blogs to Content Creators.
- **Instructional designers.** Combine orientation resources that attract early attention with interpretive resources such as cases and blogs that retained it longer.
- **Learning analytics designers.** Build [[visualization|dashboards]] on content-mediated and system-supported interactions as well as social traces; social activity alone misses most participation strategies here.
- **Researchers.** Treat the five profiles as descriptive of this platform and course, and validate them across other settings before using them for personalized pathways.

## Limitations

- The analysis used data from one [[edtech-platform|educational platform]] and one course, which the authors say limits generalizability.
- Incomplete demographic information restricted the analysis of gender and background characteristics; gender was available only for a subset of participants.
- Platform logs captured behavioral actions rather than [[motivation|motivational]], cognitive or emotional aspects of learning.
- The cluster solution was derived from a single sample and is interpretive; the authors call for a broader empirical base across courses and platforms.
- The study recommends combining logs with surveys, interviews, self-reports and [[learning-gains|academic achievement]] indicators before treating profiles as stable learner types.

## Citation

Rakhmetov, M., Kuanbayeva, B., Mukhanbetzhanova, A., Bissenbayeva, R., Turebayeva, K., Uteshkaliyeva, A., & Zhusupkalieva, G. (2026). Distance learning using artificial intelligence: insights from educational analytics and student interaction data. *Frontiers in Education, 11*, Article 1856574. https://doi.org/10.3389/feduc.2026.1856574
