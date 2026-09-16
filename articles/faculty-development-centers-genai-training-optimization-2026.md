---
title: "Research on the optimization of the training system of university [[teacher-role|faculty]] development centers in the context of GenAI: a comparative analysis based on Chinese and Kazakhstani [[higher-ed|universities]]"
created: "2026-09-16T12:25:00-04:00"
updated: "2026-09-16T13:40:00-04:00"
type: article
tags: [professional-training, teacher-ai-competency, teacher-education, prompt-engineering, higher-ed]
audience: [faculty development, instructors, administrators, teacher educators, researchers]
research_method: [mixed methods, quasi-experiment, survey]
sources: ['raw/papers/10.3389_fpsyg.2026.1890508.md']
confidence: high
---

> **Synthesis:** A [[mixed-methods-research|mixed-methods]] field study compared [[generative-ai|GenAI]] pedagogical readiness among 568 faculty at three Chinese and two Kazakhstani universities, then tested whether a structured [[prompt-engineering|prompt-task]] training cycle outperformed conventional GenAI workshops in a quasi-experimental subsample of 160. Kazakhstani faculty reported higher baseline readiness on all seven dimensions, but the country coefficient fell from B = 0.205 to a non-significant B = 0.041 once GenAI exposure, recent AI training, institutional support, perceived permission, [[multilingual-learning|multilingual resource access]], policy clarity, and risk sensitivity were entered. The structured group showed large post-test gains, especially in prompt design (d = 1.996) and critical judgement (d = 1.618), and prompt-design gains persisted at delayed testing. The authors frame [[educational-development|faculty development]] for GenAI as course-level [[professional-training|professional learning]] embedded in real course artifacts rather than tool familiarisation.

## Key Findings

- **Country differences at baseline favoured Kazakhstan on every dimension.** The Kazakhstani sample (n = 228) scored higher than the Chinese sample (n = 340) across all seven readiness dimensions, with the clearest gaps in disciplinary transfer (d = −0.480), prompt design (d = −0.462), basic understanding (d = −0.433), and [[assessment]] (d = −0.406); critical judgement (d = −0.289) and ethics (d = −0.252) showed the smallest gaps.
- **Institutional conditions, not nationality, explained the baseline gap.** In hierarchical regression the Kazakhstan coefficient declined from B = 0.205 (SE = 0.035, p < 0.001) to B = 0.092 after prior GenAI use and recent AI training entered, then to a non-significant B = 0.041 once institutional support (B = 0.083), perceived permission (B = 0.094), multilingual resource access (B = 0.068), policy clarity (B = 0.036), and risk sensitivity (B = −0.052) were added — an 80.0% reduction, with R² rising from 0.057 to 0.442.
- **Exposure and permission differed sharply by country.** 56.6% of Kazakhstani faculty reported AI-related training in the past six months versus 27.9% of Chinese faculty (φ = 0.29), and Kazakhstani faculty reported higher perceived permission to experiment (d = −0.65) and multilingual resource access (d = −0.64), while Chinese faculty reported higher policy clarity (d = 0.23), risk sensitivity (d = 0.53), and perceived lack of training (d = 0.54).
- **Structured prompt-task training outperformed conventional GenAI faculty development.** At post-test the structured group (n = 80) scored higher on all seven dimensions, most strongly in prompt design (mean difference = 1.049, d = 1.996, partial η² = 0.502), critical judgement (d = 1.618, η² = 0.399), basic understanding (d = 1.576), and disciplinary transfer (d = 1.185).
- **Gains were retained at delayed testing only in the structured condition.** Prompt design rose from M = 2.338 at T0 to M = 3.527 at T1 and remained at M = 3.445 at T2 in the structured group (T0→T2 d = 2.03), whereas the conventional group's T1 gain was modest (0.176 points, d = 0.32) and its T2 mean (2.246) fell back below baseline.
- **Group trajectories diverged over time.** The linear mixed-effects model found a significant group-by-time interaction, F(2, 316) = 220.45, p < 0.001, partial η² = 0.582, with the structured group's prompt-design advantage holding into T2.
- **Prompt logs exposed differentiated support needs.** Across 1,051 coded prompt–theme co-occurrences, technical prompts were most frequent (398), followed by practical (310), exploratory (158), structured (105), and narrative (80); by use profile, 38 faculty (47.5%) were efficient collaborators, 21 (26.2%) over-revisers, 17 (21.2%) mixed users, and only 2 each dependent or exploratory users. Continued use intention was the highest-rated satisfaction dimension (M = 3.450) and tool [[usability-research|usability]] the lowest (M = 2.863).

## Study Design & Method

The study used a mixed-methods field design with three linked components. The baseline survey collected GenAI pedagogical readiness scores and background data from 568 faculty members at five participating universities (three in China: n = 116, 113, 111; two in Kazakhstan: n = 119, 109), recruited through faculty development offices and departmental coordinators. The readiness scale measured seven dimensions — basic GenAI understanding, prompt design, AI-supported [[learning-design|instructional design]], AI-supported assessment, critical judgement, educational ethics, and disciplinary transfer — each with four items on a 1–5 agreement scale, with dimension scores computed as item means. Scale reliability was good (Cronbach's α = 0.822–0.889; McDonald's ω = 0.825–0.891), and Chinese, English, Kazakh, and Russian versions were prepared through translation, back-translation, and reconciliation. Multi-group CFA supported configural (χ² = 812.34, df = 329, CFI = 0.957, RMSEA = 0.041) and metric invariance (ΔCFI = −0.004), and a partial scalar model with two freed item intercepts reached acceptable fit (CFI = 0.951, RMSEA = 0.042).

The quasi-experimental training component drew 160 faculty from the baseline sample, assigned 80 to structured GenAI prompt-task training and 80 to conventional GenAI-focused faculty development through institutional scheduling and voluntary sign-up rather than randomisation; the groups were equivalent at baseline on country [[writing-education|composition]], gender, age, teaching experience, prior GenAI use, institutional support, perceived permission, risk sensitivity, and all seven T0 readiness dimensions. Both conditions received four 90-min onsite workshops (360 minutes total) over four consecutive weeks using DeepSeek-R1 (web interface, "DeepThink (R1)") during the 20 October–14 November 2025 access period, with identical contact time, environment, facilitator support, and base materials. The structured condition followed a prompt formulation → generated-output review → course-material revision → written reflection cycle, using a seven-component prompt template (course objective, student level, task constraints, assessment criteria, faculty verification, student disclosure, risk control) and yielding prompt records, revised teaching artifacts, and reflections. Analysis used independent-sample comparisons and Cohen's d for RQ1, hierarchical regression for RQ2, paired/between-group comparisons and a linear mixed-effects model (statsmodels MixedLM) for the T0–T1–T2 trajectory in RQ3, and rule-based thematic coding of prompt logs (30% double-coded; Cohen's κ = 0.82 for strategy type, 0.79 for theme presence; 87.5% overall agreement) for RQ4.

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
