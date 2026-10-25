---
title: "CAFE-AI: a synergistic approach to integrating pedagogy and technology for AI literacy and growth mindset"
created: "2026-10-25T00:00:00-04:00"
updated: "2026-10-25T00:00:00-04:00"
type: article
authors: ["Suartama, I. K.", "Sukmana, A. I. W. I. Y.", "Triwahyuni, E."]
published: "2026-04-09"
venue: "Cogent Education"
source_url: https://doi.org/10.1080/2331186X.2026.2647508
foundations: [ai-literacy, ai-education, learning-design, theories-and-frameworks, teacher-role, teacher-ai-competency]
pedagogy: [active-learning, collaborative-learning, online-teaching-and-learning, scaffolding, self-efficacy, student-ai-interaction, motivation]
technology: [adaptive-learning, affective-computing, ai-technologies, conversational-ai, edtech-platform, generative-ai, personalized-learning]
assessment: [automated-assessment, feedback, formative-assessment, learning-gains, self-assessment]
methods: [design-based-research, quantitative-research, ai-ed-evaluation]
ethics: [bias-mitigation, digital-divide, ethics, privacy]
research_method: [design and evaluation study, quasi-experiment, survey]
discipline: [learning sciences]
level: [higher ed, undergraduate]
audience: [instructors, researchers, faculty developers, instructional designers, curriculum designers]
page_kind: [framework]
sources: ['raw/papers/suartama-cafe-ai-pedagogy-technology-ai-literacy-2026.md']
confidence: high
source_depth: full text
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5-preview:free
    role: drafting
    date: "2026-10-25"
    agent: hermes-agent
---

> **Synthesis:** Suartama, Sukmana, and Triwahyuni (2026) designed, validated, and tested CAFE-AI, an e-learning framework that binds the four components of the [[learning-design|CAFE model]] (Content, Activities, Facilitation, Evaluation) to three AI paradigms (AI-directed, AI-supported, AI-empowered). The [[design-based-research|R&D study]] combined expert and media validation, a student pilot with 80 participants, and a quasi-experimental posttest-only comparison of 152 undergraduates in a New Technologies in Teaching and Learning course at one Indonesian university. The model was rated Very Good on feasibility (4.57 to 4.62 on a 5-point scale), and the experimental group finished well ahead of the conventional direct e-learning control group on both [[ai-literacy|AI literacy]] (91.60 versus 81.12) and growth mindset (89.99 versus 77.51), with MANOVA effects reported at p = 0.000. The authors present CAFE-AI as a blueprint for institutions that want to integrate AI into [[curriculum-design|curriculum design]] while keeping pedagogical integrity intact.

## Key Findings

- **The three AI paradigms are defined by the learner's cognitive role, not by the tool.** AI-directed tools structure and present material customized to each student (Synthesia, Podcastle, Jasper, Twee AI, Elicit, Otter.ai, Resoomer); AI-supported tools act as a co-pilot for routine work (ChatGPT, DeepSeek AI, MindMeister, Cognii, Fotor AI, Firefly, Canva, Grammarly, Quizlet Learn, TomeAI, QuillBot, QuizGecko); AI-empowered tools position the student as [[human-in-the-loop-ai|Human in the Loop]] (Edpuzzle, Lumen 5, Open AI Playground). In the AI-empowered stage the AI handles tactical execution while students do the critical evaluation, synthesis, and creative direction.
- **Feasibility was rated Very Good.** Mean scores were 4.62 from 10 material and learning design experts, 4.59 from 7 media experts, and 4.57 from the student trial (n = 80), all above the 4.0 cutoff for the top category on a 5-point criterion-referenced scale.
- **Both outcomes moved sharply, and the control group moved too.** Mean AI literacy went from 68.36 (SD 4.17) to 91.60 (SD 3.343) in the experimental group against 68.91 (SD 3.90) to 81.12 (SD 3.738) in the control. Mean growth mindset went from 61.91 (SD 6.75) to 89.99 (SD 3.709) against 61.58 (SD 6.76) to 77.51 (SD 4.374). Read off the reported means, the experimental group's advance is roughly double the control group's on both measures.
- **MANOVA confirmed group differences on both dependent variables.** The Learning_Model effect gave Pillai's Trace 0.823, Wilks' Lambda 0.177, Hotelling's Trace 4.663, and Roy's Largest Root 4.663 (F = 347.426, df 2 and 149, p = 0.000). Between-subjects tests returned F = 332.722 for AI literacy and F = 360.933 for growth mindset, both p = 0.000, with R-squared 0.689 (adjusted 0.687) and 0.706 (adjusted 0.704) respectively.
- **The parametric assumptions were checked and reported as satisfied.** Kolmogorov-Smirnov significance values across the four group-by-variable combinations ran from 0.062 to 0.098, Shapiro-Wilk from 0.076 to 0.212, and Levene's test was non-significant for both variables (p = 0.467 and p = 0.457).
- **The most distinctive reported mechanism is emotional support during Facilitation.** The model uses [[affective-computing|sentiment analysis]] of student discussions and reflections to trigger timely encouragement, personalized motivational messages tied to progress and effort, non-judgmental feedback that frames errors as learning opportunities, [[scaffolding|adaptive scaffolding]] that holds task difficulty at an optimal level, and [[conversational-ai|chatbot]] interactions that acknowledge struggle. The authors present this bundle as a psychologically safe environment for taking intellectual risks.
- **Experts flagged two design risks.** Media experts cautioned that a static sequence of materials is not genuine adaptation, that heavy [[student-ai-interaction|student-AI interaction]] can crowd out social and emotional learning, and that the lecturer should be transformed into a facilitator and mentor rather than displaced. Content experts asked for explicit learning outcomes and alignment checks per topic, contemporary material such as gamification and augmented or virtual reality, and constructive personalized AI feedback.
- **Students in the trial reported feeling supported and empowered.** They praised the structured organization of materials, the sense that AI-supported features acted as a personal assistant, and the autonomy that AI-enabled features gave them, and they saw the model as relevant preparation for a technology-dominated future.

## Study Design

- **Approach:** [[design-based-research|R&D]] following Richey and Klein's three stages, model development, model validation, and model application or effectiveness testing. Development followed the online learning flow of C. X. Wang (2021) and was supported by three AI paradigms in education (Ouyang et al., 2022).
- **Product:** A [[edtech-platform|Moodle]] portal and course built around a program mapping, resource and activity tables, and supporting AI tools connected across each CAFE component. The course covered seven topics, from Developments in Technology, Media, and Learning through Enhancing Learning with Multimedia.
- **Context:** Universitas Pendidikan Ganesha, Bali, Indonesia. The course, New Technologies in Teaching and Learning, is cross-program and was offered in the odd semester of the 2025/2026 academic year. Instruction ran 16 weeks with 150 minutes per weekly meeting, worth 3 credit hours.
- **Sample and conditions:** 152 students across six classes, three experimental (n = 78: 37 male, 41 female) and three control (n = 74: 32 male, 42 female), assigned by random class sampling after a class equivalency test. Experimental classes used CAFE-AI; control classes used conventional direct e-learning, described as uploading PDF materials and assignments without AI elements.
- **Outcome instruments:** An [[ai-literacy|AI literacy]] scale from B. Wang et al. (2023) with four dimensions (Awareness, Usage, Evaluation, Ethics) and 12 items, and a growth mindset instrument from Dweck (2006) with 20 items across five dimensions. Both were expert-validated and piloted on 64 students. Corrected item-to-total correlations ran 0.286 to 0.537 for AI literacy and 0.268 to 0.589 for growth mindset, above the r-table value of 0.254. Cronbach's alpha based on standardized items was 0.806 for AI literacy (0.783 to 0.803 if items deleted) and 0.836 for growth mindset (0.815 to 0.830).
- **Validation instruments:** The Learning Material Feasibility Questionnaire of Walker and Hess (1984) for material and learning design, and Debattista's (2018) rubric for online learning design for media, covering course opening, instructional resources, interaction and community, learner support, technology design, course closing, assessment of learning, and the instructional design cycle. Validation involved 10 material or learning design experts, 7 media experts, and doctors in learning technology from five Indonesian universities.
- **Analysis:** Descriptive statistics with a 5-point criterion-referenced conversion (Very Good above 4.0, Good 3.4 to 4.0, Fair 2.6 to 3.4, Poor 1.8 to 2.6, Very Poor 1.8 or below) for feasibility; Kolmogorov-Smirnov and Shapiro-Wilk for normality; Levene for homogeneity; and MANOVA at a significance level of 0.05 for effectiveness, with SPSS assisting the calculations.
- **Ethics:** Approved by the Research Ethics Committee of Universitas Pendidikan Ganesha (No. 054/UN.48.16.04/PT/2025). Written informed consent was obtained, personally identifiable information was pseudonymized and stored in a restricted-access encrypted repository, and participants lacking stable internet or a computer were given technical support, although the authors note that variation in digital access may still have influenced outcomes.

## What this means for practice

- **Design for the learner's role, not for the tool.** The paradigm that matters is who is doing the thinking: AI directs and personalizes delivery, AI supports routine steps so teacher time is freed, and AI empowers students to direct the tool. Instructors mapping a course onto CAFE-AI should decide, per topic, which paradigm each activity belongs to rather than collecting tools.
- **Use AI to scaffold persistence as well as content.** The reported mindset gains rest on [[feedback]] that normalizes error, [[motivation|motivational]] messages tied to effort, and [[scaffolding|adaptive scaffolding]] that prevents both discouragement and boredom. Faculty adopting the model should preserve these mechanisms rather than only the [[adaptive-learning|adaptive]] content delivery.
- **Pair AI feedback with human facilitation.** The experts' strongest warning was that automation can hollow out the social and emotional side of learning. The authors' response was to add discussion forums, chat rooms, and collaborative features, and to recast the lecturer as a facilitator and mentor who guides students in using AI. Any adoption should budget for that facilitation time.
- **Treat algorithmic opacity as curriculum.** The authors argue that dependence on commercial [[generative-ai]] tools can be addressed pedagogically, through assignments that require students to critique and modify AI-generated output, through foundational skill development that precedes and accompanies AI use, and through explicit coverage of [[privacy|data privacy]], terms of service, and data retention in the Ethics dimension.
- **Invest in teacher capability and institutional policy.** The paper recommends a phased rollout (needs analysis, design, expert validation, limited trial) and [[professional-training|professional development]] in five areas: technical proficiency with AI tools, pedagogical design for AI integration, data literacy for personalized instruction, ethical frameworks for responsible AI use, and facilitation skills for guiding student-AI interactions. Institutions are also urged to set clear policies on when and how AI is used, and to teach [[bias-mitigation|algorithmic bias]] and privacy explicitly.

## Limitations

- The study took place at a single Indonesian university, in one course, with participants who were all education students, which limits generalizability to other institutions, disciplines, and student populations.
- The intervention ran for one academic semester, so the durability of the gains is untested. The authors themselves distinguish short-term psychological states from enduring mindset traits, acknowledging that the increases may partly reflect enhanced [[self-efficacy|technological self-efficacy]] and confidence with AI tools rather than a lasting restructuring of beliefs about intelligence.
- Both outcome measures are self-report questionnaires, which are open to social desirability bias and question misinterpretation. Implementation assumes reliable internet connectivity, device availability, and basic ICT skills, so the model is not universally accessible. The [[digital-divide|digital access]] gap is acknowledged as a possible selection and experience bias, despite the technical support provided.
- The study leaned on quantitative analysis, with no qualitative exploration of how students and teachers experienced the transition, and no assessment of the AI tools themselves for access, cost, or future sustainability.
- No effect size such as Cohen's d is reported, so the practical magnitude of the group difference is expressed only through the means, F values, and R-squared values rather than through a standardized effect.
- The model depends on commercial AI tools, which the authors flag as raising concerns about algorithmic opacity and student over-dependence, concerns they address through design rather than through independent measurement of dependence.

## Citation

Suartama, I. K., Sukmana, A. I. W. I. Y., & Triwahyuni, E. (2026). [*CAFE-AI: A synergistic approach to integrating pedagogy and technology for AI literacy and growth mindset*](https://doi.org/10.1080/2331186X.2026.2647508). *Cogent Education*, 13(1), 2647508.
