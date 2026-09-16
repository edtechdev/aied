---
title: "Research on the optimization of the training system of university faculty development centers in the context of GenAI: a comparative analysis based on Chinese and Kazakhstani universities"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-16T15:58:20-04:00"
type: article
tags: [professional-training, teacher-ai-competency, teacher-education, prompt-engineering, higher-ed]
connected_faqs: [faculty-development-ai]
audience: [faculty development, instructors, administrators, teacher educators, researchers]
research_method: [mixed methods, quasi-experiment, survey]
sources: ['raw/papers/10.3389_fpsyg.2026.1890508.md']
confidence: high
---

> **Synthesis:** A [[mixed-methods-research|mixed-methods]] field study compared [[generative-ai|GenAI]] pedagogical readiness among faculty at three Chinese and two Kazakhstani universities, then tested whether a structured [[prompt-engineering|prompt-task]] training cycle outperformed conventional GenAI workshops in a quasi-experimental subsample. Kazakhstani faculty reported higher baseline readiness on all seven dimensions, but that country advantage shrank to nothing once GenAI exposure, recent AI training, institutional support, perceived permission, [[multilingual-learning|multilingual resource access]], policy clarity, and risk sensitivity were taken into account. The structured group improved far more than the conventional group, especially in prompt design and critical judgement, and only the structured group's prompt-design gains held up at delayed testing. The authors frame [[educational-development|faculty development]] for GenAI as course-level [[professional-training|professional learning]] embedded in real course artifacts rather than tool familiarisation.

## Key Findings

- **Country differences at baseline favoured Kazakhstan on every dimension.** Kazakhstani faculty scored higher than their Chinese counterparts across all seven readiness dimensions, with the widest gaps in disciplinary transfer, prompt design, and basic understanding, and the narrowest in ethics and critical judgement.
- **Institutional conditions, not nationality, explained the baseline gap.** In a hierarchical regression the Kazakhstan coefficient was clearly significant on its own but fell away to non-significance — a reduction of about four fifths — once prior GenAI use, recent AI training, institutional support, perceived permission, multilingual resource access, policy clarity, and risk sensitivity were entered. Institutional support and perceived permission carried the most positive weight, and risk sensitivity was the one predictor that worked against readiness.
- **Exposure and permission differed sharply by country.** More than twice as many Kazakhstani faculty as Chinese faculty reported AI-related training in the previous six months, and Kazakhstani faculty also reported stronger perceived permission to experiment and better multilingual resource access. Chinese faculty reported greater policy clarity, higher risk sensitivity, and a stronger sense of lacking training.
- **Structured prompt-task training outperformed conventional GenAI faculty development.** At post-test the structured group scored higher on all seven dimensions, with the largest advantage in prompt design — an effect of roughly two standard deviations — followed by critical judgement, basic understanding, and disciplinary transfer.
- **Gains were retained at delayed testing only in the structured condition.** In the structured group prompt design rose sharply from baseline and stayed near that level at delayed testing, whereas the conventional group's gain was small and had fallen back below baseline by the follow-up.
- **Prompt logs exposed differentiated support needs.** Coding of more than a thousand prompt–theme co-occurrences showed technical and practical prompts dominating, with exploratory, structured, and narrative prompts trailing behind. Nearly half of the structured-group faculty were efficient collaborators, about a quarter over-revisers, and a fifth mixed users; dependent and exploratory users were rare.
- **Satisfaction was high on intention but low on usability.** Continued-use intention was the highest-rated satisfaction dimension and tool [[usability-research|usability]] the lowest, which points to platform friction rather than a lack of motivation.

## Study Design & Method

The study used a mixed-methods field design with three linked components. The baseline survey collected GenAI pedagogical readiness scores and background data from 568 faculty members at five participating universities (three in China, two in Kazakhstan), recruited through faculty development offices and departmental coordinators. The readiness scale measured seven dimensions — basic GenAI understanding, prompt design, AI-supported [[learning-design|instructional design]], AI-supported assessment, critical judgement, educational ethics, and disciplinary transfer — each with four items on a 1–5 agreement scale, with dimension scores computed as item means. Chinese, English, Kazakh, and Russian versions were prepared through translation, back-translation, and reconciliation, and multi-group confirmatory factor analysis supported comparing observed means across the two country samples.

The quasi-experimental training component drew 160 faculty from the baseline sample, assigning 80 to structured GenAI prompt-task training and 80 to conventional GenAI-focused faculty development through institutional scheduling and voluntary sign-up rather than randomisation; the two groups were equivalent at baseline on country composition, gender, age, teaching experience, prior GenAI use, institutional support, perceived permission, risk sensitivity, and all seven baseline readiness dimensions. Both conditions received four 90-min onsite workshops over four consecutive weeks using DeepSeek-R1, with identical contact time, environment, facilitator support, and base materials. The structured condition followed a prompt formulation → generated-output review → course-material revision → written reflection cycle, using a seven-component prompt template (course objective, student level, task constraints, assessment criteria, faculty verification, student disclosure, risk control) and yielding prompt records, revised teaching artifacts, and reflections. Analysis combined group comparisons and effect sizes for the baseline and post-test questions, hierarchical regression for the predictors of readiness, and a linear mixed-effects model for the T0–T1–T2 trajectory, with rule-based thematic coding of prompt logs for the qualitative component.

## Implications

- Faculty development centres should treat GenAI readiness as course-embedded work: asking faculty to bring their own objectives, rubrics, and materials into a structured prompt-task cycle produces larger and more durable gains than function-orientation workshops.
- Because the country effect was absorbed by exposure, recent training, resource access, perceived permission, and institutional support, interventions that increase hands-on practice and clarify what experimentation is allowed may matter more than national policy framing alone.
- Prompt design functions as course-level teaching-task design rather than a detached technical skill; objectives, constraints, assessment criteria, verification, disclosure, and risk control jointly define whether a GenAI-mediated task is executable, assessable, revisable, and accountable.
- Prompt logs and use profiles can triage support: efficient collaborators can take on more complex course tasks, over-revisers need criteria for when an artifact is finished, mixed users need workflow stabilisation, dependent users need verification routines, and exploratory users need help converting ideas into assessable classroom steps.
- Low tool-usability ratings alongside high continued-use intention suggest that platform friction, not motivation, is a tractable target for centres planning GenAI provision.

## Limitations

- The study relies primarily on a self-report readiness scale; concept interpretation and response styles across language backgrounds may have affected evidence for concepts such as [[ai-literacy|AI literacy]], [[ethics|ethical]] reasoning, prompt design, and disciplinary transfer.
- Group assignment in the training component reflected voluntary sign-up, institutional scheduling, and course arrangements, so results are best interpreted as associations between structured training and readiness change rather than strict causal estimates.
- Five universities cannot cover the full range of university types and disciplinary contexts in China and Kazakhstan, limiting generalisability.
- University-level sensitivity checks were treated as descriptive rather than confirmatory, and country fixed effects could not be estimated because universities were nested within country.
- The study measured [[self-report-measures|self-reported]] readiness, not enacted [[pedagogy|teaching practice]] or student learning outcomes; future work needs course materials, classroom observation, and outcome data.

## Connected Concepts

- [[professional-training]] — positioned as course-level professional learning for faculty, in the Guskey/Desimone tradition
- [[teacher-ai-competency]] — the seven-dimension GenAI pedagogical readiness construct at the centre of the study
- [[prompt-engineering]] — structured prompt-task training is the intervention and the construct with the largest and most durable gains
- [[educational-development]] — situates faculty development centre practice in higher education development research
- [[tpack]] — readiness dimensions are derived from TPACK, DigCompEdu, and AI literacy frameworks
- [[stakeholders]] — institutional support, perceived permission, and policy clarity shaped practice
- [[transfer-of-learning]] — disciplinary transfer was the weakest baseline dimension
- [[multilingual-learning]] — multilingual GenAI resource access predicted readiness and shaped prompt language use

## Connected Articles

- [[sutedjo-faculty-genai-tpack-21-2026]] — cross-institutional faculty preparation and resources for GenAI, a direct parallel on faculty readiness
- [[sangwa-epiq-ai-faculty-readiness-2026]] — instrument development for faculty AI readiness, the same measurement problem
- [[designing-ai-professional-development-itpack-2026]] — designing AI professional development around integrated teacher knowledge
- [[crompton-faculty-technology-integration-standards-2026]] — faculty technology integration standards behind centre-level training design
- [[tpack-genai-inservice-teachers-mediation-2026]] — TPACK mediation of GenAI use among in-service teachers
- [[activity-theory-teacher-pd-ai-agent-design-2026]] — teacher professional development design for AI, comparable PD intervention logic
- [[ai-adaptation-gap-higher-education-2026]] — institutional conditions mediating AI adoption in higher education
- [[crompton-governing-genai-higher-ed-delphi-2026]] — institutional governance and policy clarity in GenAI adoption

## Citation

Bi, T., Araily, S., Lyu, A., & Xiu, S. (2026). [Research on the optimization of the training system of university faculty development centers in the context of GenAI: a comparative analysis based on Chinese and Kazakhstani universities](https://doi.org/10.3389/fpsyg.2026.1890508). *Frontiers in Psychology, 17*, 1890508.
