---
title: "Reimagining mathematics education through intelligent tutoring: evidence, opportunities, and implementation challenges"
created: "2026-09-30T11:12:50-04:00"
updated: "2026-09-30T11:12:50-04:00"
type: article
sources: ['raw/papers/10.3389_feduc.2026.1943906.md']
confidence: high
published: "2026"
page_kind: [synthesis]
research_method: [literature review]
discipline: [math education, stem education]
level: [k 12, higher ed]
audience: [instructors, curriculum designers, administrators, researchers]
foundations: [ai-education, teacher-role, human-ai-collaboration, interpreting-and-applying-aied-research, limitations-in-aied-research]
pedagogy: [scaffolding, misconceptions, problem-solving, student-engagement, transfer-of-learning, productive-failure]
technology: [intelligent-tutoring, adaptive-learning, personalized-learning, learning-analytics, student-modeling]
assessment: [formative-assessment, feedback, assessment-validity, learning-gains]
institutions: [governance]
ethics: [digital-divide, equity-in-ai-education, global-south, privacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Ogunsakin, Ayanwale, Falebita and Felemu conducted a structured narrative review of 20 publications, drawn from Scopus, IEEE Xplore, ScienceDirect, SpringerLink and Taylor & Francis Online and focused on January 2020 to April 2026, on how AI-powered [[intelligent-tutoring]] systems and [[adaptive-learning]] [[edtech-platform|platforms]] support [[math-education|mathematics education]]. The review was organized around five domains — personalized and adaptive instruction, real-time [[feedback]], learner engagement, mathematical [[problem-solving]] and [[teacher-role|teacher]] support — and interpreted through connectivism, with adaptive instruction as a complementary explanatory mechanism. It concludes that these systems can support mathematics learning when valid [[student-modeling|learner modeling]] is combined with adaptive tasks, diagnostic feedback, appropriately calibrated [[scaffolding]] and meaningful teacher mediation. The decisive qualification is methodological: with incomplete retrieval records, no pooled effect sizes and methodologically heterogeneous sources, the authors present conditional, context-sensitive conclusions rather than an estimate of how much these systems improve learning.

## Key Findings

- **The evidence base is deliberately bounded and not fully reproducible.** The review retained 20 publications from a search period of January 2020 to April 2026, and the authors state that they did not preserve counts of records retrieved, duplicates removed or publications excluded, which is why they call it a structured narrative review rather than a [[meta-analysis-systematic-review|systematic review]].
- **Real-time diagnostic feedback produced the clearest measured advantage reported.** Marwiang et al. (2025) compared learners using the same adaptive diagnostic ITS with and without automated real-time feedback: both groups improved, but the experimental group's means rose from 1.90 (SD = 1.43) to 3.54 (SD = 0.85) on a four-point SOLO-based mathematics assessment while the comparison group rose from 1.90 (SD = 1.31) to 2.85 (SD = 1.27). The time-by-group interaction was F (1, 76) = 9.24, p = .003, partial η2 = .108, with a reported Cohen's d of 0.73.
- **Adaptation is not automatically instructionally useful.** A system can adjust difficulty without addressing the misconception responsible for the difficulty, help prematurely enough to reduce [[productive-failure]], or recommend repetitive practice that strengthens procedural performance without developing conceptual understanding.
- **[[student-engagement|Engagement indicators]] are not evidence of cognitive engagement.** Platform use, time on task, interaction frequency and task completion demonstrate behavioral participation; the review treats engagement as educationally meaningful only when learners evaluate feedback, revise strategies, explain their reasoning and persist in mathematically productive ways.
- **Teachers stay in the loop by design, not by default.** [[learning-analytics|Learning analytics]] can surface recurring errors, stalled progression, [[help-seeking]] patterns and concepts needing reteaching, but algorithmic classifications may fail to distinguish conceptual [[misconceptions]] from linguistic difficulty, disengagement or technical interruption.
- **Scalability is technical, not educational.** The review separates the capacity to serve many users from [[equity-in-ai-education|equitable]] access, which depends on devices, connectivity, electricity, digital literacy, language, accessibility needs and opportunities for teacher support.

## How the review was assembled

Searches ran in Scopus, IEEE Xplore, ScienceDirect, SpringerLink and Taylor & Francis Online, combining Boolean terms across three concept groups: AI and tutoring technologies, the mathematics context, and educational processes and outcomes. Eligibility required publication between 2020 and April 2026, except for explicitly identified foundational sources; a focus on AI, ITSs, adaptive learning or AI learning companions; a direct connection to mathematics education or clearly transferable tutoring mechanisms; and enough methodological or conceptual information to interpret. Preprints were classified as supplementary evidence rather than treated as equivalent to peer-reviewed work. Synthesis followed a mechanism-outcome-context logic: learner modeling, adaptive task selection, personalized scaffolding, real-time feedback and learning analytics were mapped onto four non-interchangeable outcome categories — cognitive, achievement, behavioral-affective and instructional — and then read against implementation conditions. The authors did not pool or rank effect sizes and interpreted numerical findings within their original measurement scales.

## What the evidence supports, and its boundary conditions

The findings cluster around adaptive [[personalized-learning|personalization]], timely diagnostic feedback, sustained participation and actionable information for teachers. Son's (2024) [[samr-model|SAMR]]-based synthesis indicated that many ITS applications augmented existing practice through [[ai-feedback-quality|automated feedback]] and individualized assistance, while fewer transformed instruction by enabling activities that would otherwise have been difficult to implement. The most consistent benefits appeared when systems combined valid learner modeling with adaptive tasks, diagnostic feedback, appropriately calibrated scaffolding and meaningful teacher mediation; under those conditions ITSs may support mathematics achievement, conceptual progression, problem-solving, engagement and differentiated instruction. Effectiveness became less certain when adaptation relied on narrow performance indicators, feedback was limited to correcting answers, implementation was disconnected from the curriculum, or learners lacked equitable access to the required technology.

## Where implementation breaks down

Contextual conditions — infrastructure, accessibility, teacher preparedness, [[curriculum-design|curriculum alignment]], data governance and institutional support — shape whether any of this works. A system developed for one educational environment cannot be assumed to function across different curricula, languages, technological infrastructures and learner populations. The authors also caution that claims about the inclusiveness of ITSs are not supported: differentiated support for learners at different ability levels does not establish equity unless studies examine whether benefits are distributed consistently across ability, gender, socioeconomic, linguistic, disability and geographical groups. The available evidence, they conclude, is insufficient to establish that these systems consistently reduce mathematics [[learning-gains|achievement gaps]].

## What this means for practice

- **Instructors.** Use ITS analytics to identify misconceptions and differentiate support, but interpret AI-generated evidence alongside classroom observations, assessment results and knowledge of learners' circumstances; automated recommendations should inform rather than determine instructional decisions.
- **Instructors.** Protect [[desirable-difficulties|productive struggle]]. The review warns that assistance delivered too quickly can reduce it and create dependence on hints or complete solutions, and recommends feedback that is diagnostic, explanatory, appropriately timed and gradually withdrawn as competence develops.
- **Curriculum and assessment designers.** Judge systems by whether they support conceptual understanding, procedural fluency, reasoning and problem-solving rather than by technological sophistication, and confirm that content aligns with local curricula, assessment practices and learner needs.
- **Educational developers.** Build [[ai-literacy|AI literacy]], learning-analytics interpretation, automated-feedback evaluation, ethical data use and [[pedagogy|pedagogical]] integration into [[educational-development|professional development]], since teacher preparedness is one of the conditions the review identifies as decisive.
- **Institutions.** Address device availability, connectivity, electricity, accessibility, language support, digital literacy and technical assistance; govern learner data through clear [[educational-policy-ai|policies]] on consent, data minimization, access, security, retention, transparency and deletion; and pilot and continuously evaluate before large-scale rollout, extending evaluation beyond short-term achievement to retention, transfer, teacher workload, [[usability-research|usability]], accessibility, equity and cost-effectiveness.

## Limitations

- The review is a structured narrative review, not a systematic one: incomplete records of retrieved, duplicated and excluded publications prevent full replication of the study-selection process.
- The included literature varied considerably in [[research-methods-aied|research design]], [[learners|learner population]], mathematical domain, intervention duration, system functionality and outcome measurement, which precluded meta-analysis and limited direct comparison of reported effects.
- Some evidence originated outside mathematics education or came from preprints that had not undergone peer review, and the concentration of available studies on particular educational and technological contexts limits generalization to under-resourced and culturally diverse settings.
- The conceptual model's relationships are presented as conceptual and reciprocal; the authors explicitly do not interpret them as statistically tested causal pathways.

## Citation

Ogunsakin, I. B., Ayanwale, M. A., Falebita, O. S., & Felemu, O. J. (2026). [Reimagining mathematics education through intelligent tutoring: evidence, opportunities, and implementation challenges](https://doi.org/10.3389/feduc.2026.1943906). *Frontiers in Education*, 11, 1943906.