---
title: "Code Craft: the digital design thinking and learning platform to enhance computational thinking and digital literacy"
created: "2026-11-16T07:34:23-05:00"
updated: "2026-11-16T09:30:00-04:00"
type: article
authors: ["Koraneekij, P.", "Khlaisang, J."]
published: "2026"
venue: "Smart Learning Environments"
source_url: https://doi.org/10.1186/s40561-026-00476-8
evidence_context: educational
foundations: [computational-thinking, design-thinking, information-and-media-literacy]
pedagogy: [scaffolding, self-determination-theory, collaborative-learning, motivation, student-engagement]
technology: [edtech-platform, generative-ai]
assessment: [assessment]
research_method: [system development, survey, design and evaluation study]
discipline: [information technology]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, educational technology developers]
sources: ['raw/papers/koraneekij-codecraft-computational-thinking-2026.md']
confidence: high
methods: [design-based-research, mixed-methods-research, quantitative-research]
source_depth: full text
page_kind: [design case, evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---
> **Synthesis:** Koraneekij and Khlaisang (2026) report a three-phase design and development study that produced "Code Craft," a web platform for Thai undergraduates that combines a five-step [[design-thinking|design-thinking]] cycle with gamification and low-code app building to teach [[computational-thinking|computational thinking]] and digital literacy. The first phase surveyed 400 undergraduates across four regions and found that the strongest perceived need was not the technology itself but skills that open access to the labor market (Priority Needs Index 0.400), followed by simply being introduced to learning platforms and tools (0.397); 71.8 percent had never learned through gamification. The third phase ran 28 students through eight weeks of three-hour sessions and scored their work on a three-point [[rubrics|rubric]] at three points, with mean computational thinking rising from 1.13 to 1.80 to 2.49 and digital literacy from 1.51 to 2.13 to 2.82. Satisfaction averaged 4.70 out of 5. The authors call the result preliminary evidence of effectiveness: a one-group time series with no comparison group, which they say is appropriate to piloting an innovation but not to establishing effect sizes. This is an article-in-press version, so pagination may change.

## Key Findings

- **The needs survey put employability ahead of pedagogy.** On the modified Priority Needs Index the ranked needs were skills that promote access to the labor market (0.400), introduction to platforms and technology tools (0.397), learning through gamification (0.291), strengthening computational thinking (0.258), learning through discussion with peers (0.233), strengthening digital literacy (0.230), learning through design thinking (0.211), learning through platforms integrated with several tools (0.202), real-world assessment (0.175) and mobile devices as a learning tool (0.113). Every item showed a statistically significant gap at the 0.05 level between the current and desired condition.
- **The sample was digitally comfortable but not code-comfortable.** All 400 respondents used social media, 99.3 percent used collaborative graphic tools and 98.0 percent a web browser, while only 43.3 percent could use a code editor platform, 54 percent a no-code development platform and 66.8 percent a low-code platform. Average computer experience was 9.51 years and internet experience 10.49 years.
- **Interest was high and prior gamified learning was rare.** 63 percent were interested in an integrated platform using design thinking with gamification, and 71.8 percent reported no experience of learning through gamification. Their stated motive was career applicability, especially engineering, computing and robot control, although some said coding was too complex to learn or unnecessary for their futures.
- **Scores rose at every measurement point on both constructs.** On the three-point rubric, overall computational thinking moved from 1.13 in Session 1 to 1.80 in Session 2 and 2.49 in Session 3 (overall mean 1.80, SD 0.215), and digital literacy from 1.51 to 2.13 to 2.82 (overall mean 2.15, SD 0.284).
- **Algorithmic thinking was the strongest sub-skill and logical thinking the weakest.** Algorithmic thinking averaged 2.08 (SD 0.296), rising from 1.46 to 1.93 to 2.86. Logical thinking averaged 1.54 (SD 0.331) and barely moved between the first two sessions, 1.04 to 1.29, before reaching 2.29 in the third. Reading, interpreting and writing code averaged 1.83, problem-solving 1.77 and creativity 1.80.
- **Inside digital literacy, collaboration scored highest and managing information lowest.** Communicating and working with others averaged 2.36 (SD 0.286) and integrating information 2.33, while managing information averaged 1.92 (SD 0.281) and creating information 2.05.
- **Scores rose significantly across the three sessions on both constructs.** Computational thinking met the sphericity assumption while digital literacy required a correction to it, and pairwise comparisons between all three sessions favored the later session.
- **Satisfaction was high and centered on flexibility.** The overall mean was 4.70 (SD 0.45); the top items were "Code Craft platform allows you to learn anytime, anywhere" and "Using the Code Craft platform promotes flexibility in learning," both 4.78 (SD 0.42), followed by overall appropriateness and the step-by-step clarity of the user manual at 4.74. Self-rated competence rose from 2.35 before use to 4.64 after, with computational thinking 2.14 to 4.66 and digital literacy 2.47 to 4.63.
- **The instructional model is four components and five steps.** The components are coding development in low-code form, online assistance through the platform, digital and AI tools (Gemini Pro for writing code and building digital literacy), and enjoyment through gamification. The steps are discovery insight, understanding users, generating ideas, prototyping solutions with Google AppSheet, and testing and iteration through a Showcase section with peer rating and instructor rubric scoring.
- **The platform is an assembly of existing services rather than a bespoke build.** Code Craft runs on three layers (infrastructure, platform, application) and integrates Google Classroom for content and assignment management, AppSheet for low-code development, a generative AI chatbot for assistance, and the Gami+ extension for leaderboards, with single sign-on through existing Google accounts.

## How the study was done

Phase 1 was a quantitative needs survey of 400 undergraduates drawn by multistage sampling from the north-eastern, northern, central and southern regions of Thailand, with sample size set by Cochran's formula. The instrument had three parts (demographics and technology experience; current computational thinking and digital literacy; experience and needs for the proposed platform), was reviewed by three educational technology experts using an item-objective congruence index, and was analyzed with descriptive statistics and a modified Priority Needs Index comparing actual and desired states. Respondents were mostly women (301, 75.3 percent), mostly in their second year (177, 44.3 percent), and spread across humanities and social sciences (143, 35.8 percent), health sciences (135, 33.8 percent) and science and technology (122, 30.5 percent).

Phase 2 designed the platform and instructional model from the Phase 1 priorities, grounded in design thinking as the pedagogical structure with constructivism, connectivism and [[self-determination-theory|self-determination theory]] supplying the surrounding rationale: leaderboards and levels for competence, optional project pathways for autonomy, and peer feedback for relatedness. Nine experts in educational technology, computational thinking and digital literacy rated usability and efficiency on a five-point scale and their comments were used to iterate before implementation.

Phase 3 was a one-group pretest-posttest time-series with 28 undergraduates over eight weeks at three hours per week. Students completed a low-code project, were scored on a three-point rubric by five experts with Spearman's rank-order correlation used for interrater consistency, and completed a satisfaction questionnaire. Analysis used dependent t-tests and one-way repeated-measures ANOVA. Ethical approval came from Chulalongkorn University's research ethics committee (reference 202/67), with written consent and anonymized data.

## What this means for practice

- **Instructors.** The sequence that produced the gains is concrete and reproducible without a custom build: a design-thinking cycle that starts from a user problem, a low-code tool so that syntax is not the gate, and a public showcase where peers rate each other's apps. The weakest sub-skill, logical thinking, is the one to watch; it stalled for two sessions here before rising.
- **Designers of digital literacy curricula.** The study assessed digital literacy as seven observable performances rather than as a self-report attitude, and the lowest-scoring were managing and creating information, not accessing it. A course that stops at search and evaluation leaves the harder half untouched.
- **Administrators.** In an industrial-development context, the needs analysis is the transferable part: students ranked labor-market relevance above gamification, design thinking or platform features. Framing computational thinking as employability, as this study does with Thailand's Eastern Economic Corridor, is likely to secure more buy-in than framing it as a thinking skill.
- **Anyone reading the effect sizes.** Treat the gains as a feasibility signal. Scores came from a rubric applied to project work and from satisfaction items, on a three-point scale with a ceiling of 3, in a single group; the authors themselves describe the results as preliminary rather than a demonstration of large-scale impact.

## Limitations

- The evaluation rests on 28 students in one group with no comparison condition, so maturation, practice with the rubric and instructor attention are all plausible alternative explanations for a rise that is monotonic across three sessions.
- The three-point rubric compresses the scale and compresses the analysis: means near 2.5 leave little headroom, and the reported F values cannot be read as effect sizes without the full variance decomposition the paper does not give.
- Digital literacy was scored on the same rubric by the same raters as computational thinking, and the paper concedes that its dimensions were not comprehensively analyzed; ethical data use, responsible online conduct and resource navigation are named as future work rather than measured.
- Satisfaction is self-report from the students who completed the course, and the before-and-after self-rating jump from 2.35 to 4.64 is a perception change, not a competence measure.
- The intervention is described as a prototype iterated with expert review rather than a settled product, so the eight-week trial reports what this version of Code Craft did with this group; the paper gives no retention or transfer measure after the course ended.
- This is an article in press; the final version may differ in pagination and in the numbering of tables, and no article number is assigned in the version read here.

## Citation

Koraneekij, P., & Khlaisang, J. (2026). [*Code Craft: the digital design thinking and learning platform to enhance computational thinking and digital literacy*](https://doi.org/10.1186/s40561-026-00476-8). *Smart Learning Environments*. Article in press.
