---
title: "Artificial Intelligence Literacy and Professional Practice of Post-Secondary Teachers in Quebec"
created: "2026-11-10T18:19:20-05:00"
updated: "2026-11-10T18:30:00-05:00"
type: article
page_kind: [synthesis]
research_method: [survey, interviews]
evidence_context: educational
level: [higher ed]
audience: [instructors, faculty developers, administrators]
sources: ['raw/papers/giachini-ai-literacy-postsecondary-teachers-quebec-2026.md']
source_url: "https://www.mdpi.com/2227-7102/16/11/1912"
source_depth: full text
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-10"
    agent: hermes-agent
verified: [citation, numbers, links]
foundations: [ai-literacy, teacher-ai-competency, educational-development]
pedagogy: [professional-training, pedagogy]
technology: [generative-ai, technology-acceptance-model]
assessment: [self-report-measures]
methods: [mixed-methods-research, quantitative-research]
institutions: []
ethics: []
---

> **Synthesis:** A questionnaire answered by 345 teachers in 27 Quebec CEGEPs, paired with 27 interviews in 10 of them, finds that [[generative-ai|GenAI]] has entered [[higher-ed|post-secondary]] professional work far faster than it has entered teaching: 94.7% of coded answers described professional use, time-saving led the reasons at 42.6%, and the open-ended data produced no classroom-use category at all. On a reduced twelve-item French version of the SNAIL instrument, [[ai-literacy|AI literacy]] separated by dimension — technical understanding averaged 2.706 out of 5 against 3.758 for critical evaluation and 3.646 for practical applications — and by group, with men significantly ahead on two components and discipline groups differing on technical understanding. What makes the study useful for [[professional-training|training design]] is a mismatch: teachers asked for discipline-specific practical applications, not the technical grounding the instrument identified as their weakest area. Giachini and colleagues read that preference through [[technology-acceptance-model|perceived usefulness]] and argue for multilevel courses that embed first principles inside the tools teachers actually want, rather than treating self-reported demand as a needs assessment.

## Key Findings

1. **Professional use was near-universal in the sample.** Of 857 answers describing situations, 94.7% concerned AI use in a professional context, while 45 answers (5.3%) reported no situation at all.
2. **Time-saving dominated the reasons given.** It accounted for 156 of 366 answers (42.6%), ahead of more variety and productivity (19.4%) and getting inspiration (15.6%) — a usefulness-driven profile.
3. **Preparation was the work AI entered.** 74.5% of situation answers concerned lessons or teaching materials, led by creating questions, exercises and activities at 23.2% of all answers.
4. **The classroom stayed mostly out of it.** The questionnaire produced no classroom-use subcategory, and interviews surfaced only rare, cautious examples, which participants tied to missing discipline-specific training.
5. **Technical understanding was the weakest dimension at 2.706 of 5**, against 3.758 for critical evaluation and 3.646 for practical applications, and it carried the widest spread of scores.
6. **Gender differences were significant on two components.** Men outscored women on technical understanding (ω² = 0.096) and practical applications (ω² = 0.068); a 0.2-point critical-evaluation gap was not significant.
7. **Discipline groups differed on technical understanding** (F = 8.873, ω² = 0.071), from 1.917 in educational science to 3.128 in natural sciences, while training expectations converged on discipline-specific practice.

## How the study was built

The design is [[mixed-methods-research|mixed methods]]: a questionnaire answered by 345 teachers across 27 first-level post-secondary institutions — the CEGEPs — plus interviews with 27 teachers in 10 of them, collected between October 2024 and October 2025. The [[quantitative-research|quantitative]] instrument was a reduced, French-translated version of the Non-Expert AI Literacy Assessment Scale: twelve items, four per component, covering technical understanding, critical evaluation and practical applications on a five-point Likert scale. A confirmatory factor analysis with a diagonally weighted least squares estimator supported the three-factor structure (CFI = 0.992, TLI = 0.990, SRMR = 0.058), loadings above 0.70, internal consistency 0.840 to 0.917 — though RMSEA = 0.091 sat above the conventional threshold. Open-ended questions on situations, reasons and desired knowledge were coded thematically, with inter-rater agreement of K = 0.86 and K = 0.85.

## Professional use without pedagogical use

The situations teachers described were overwhelmingly preparatory. Beyond the 74.5% tied to lessons and materials, categories ran to plagiarism prevention and counterexamples (6.8%), rubrics and feedback (6.1%), administrative writing such as letters and reports (7.9%), and text revision (7.7%). The reasons follow the same logic: after time-saving, more variety and productivity, inspiration, and a feeling of incompetence that AI complements. The authors read this through the [[technology-acceptance-model|Technology Acceptance Model]] and UTAUT, concluding that perceived usefulness — with ease of use a distant second — organizes adoption here. The interviews sharpen it: hesitation about classroom use tracked missing competence and training in discipline-specific AI use, not principled refusal, and the [[teacher-role|teacher's role]] in this evidence is still largely preparation and administration. That is a narrower picture than the workflow transformation the wider literature describes, and it suggests adoption can be broad in professional practice while barely touching [[pedagogy|pedagogy]].

## A technical gap, unevenly distributed

Technical understanding scored almost a full point below the other two components and had the highest standard deviation, which the authors read as both a general weakness and a source of disparity among teachers. Gender differences were significant for technical understanding (ω² = 0.096, 95% CI [0.044, 0.160]) and practical applications (ω² = 0.068, 95% CI [0.025, 0.126]), with men at 3.024 against women at 2.371 on the technical component. Discipline differences reached significance only for technical understanding (F = 8.873, ω² = 0.071, 95% CI [0.012, 0.118]), from educational science at 1.917 and health sciences at 2.264 to natural sciences at 3.128. Age and level of education produced no significant differences. The authors are careful about what this means: the scale is a [[self-report-measures|self-report measure]], and interviewees tended to rate themselves lower than the instrument did — a severity pattern most pronounced among women — so the gaps describe reported confidence as much as demonstrated capability.

## Training expectations point elsewhere

Of the 345 participants, 326 answered the question about what knowledge they would need. Coded against the three SNAIL dimensions, responses converged heavily on practical applications, and within that category the most recurrent fragments concerned applications in the discipline being taught, alongside prompt development, plagiarism detection, practical exercises and French-language context. Technical expectations clustered on how AI generally works and on the informatics and mathematical bases of GenAI; critical evaluation on privacy and data use, discrimination and bias, and environmental issues. Ethics was the least requested, and the interviews explain why: prior training had already concentrated there, and earlier courses were too general and insufficiently tied to disciplines. The authors treat the gap between what teachers lack and what they want as a design problem rather than a failure of awareness, drawing on adaptive expertise and cognitive flexibility to argue that procedural fluency builds skills tied to today's tools while conceptual grounding lets a teacher interpret the next one.

## What this means for practice

- **Instructors.** Test your technical understanding before asking for more tool training: being able to distinguish rule-based from machine-learning systems, and to explain how an application reaches a decision, decides whether the next tool you meet is legible or opaque.
- **Faculty developers.** Build courses around tasks teachers already bring — question writing, rubrics, feedback, plagiarism checks — and teach the mechanism inside that task. [[educational-development|Professional development]] reported by this sample was too general, and [[teacher-ai-competency|teacher AI competency]] does not grow from tool use that already works.
- **Administrators.** Do not treat stated preferences as a needs assessment. This sample asked for practice while its measured weakness was technical, and prior offerings had already saturated the ethics topic that consumed training time.
- **Researchers.** Validate a shortened, translated instrument before its scores travel. The authors report a three-factor structure that fits on most indices but an RMSEA above threshold, and invite exactly that follow-up work.

## Limitations

- The sample is 345 volunteers from 27 of the 48 CEGEPs in a network of 19,351 teachers, recruited by email invitation in collaborating colleges; the authors call the results indicative of the sample, not generalizable to the network.
- Every literacy score is self-reported on twelve items, with no performance task and no usage logs; the interviews suggest respondents may rate themselves more harshly than the scale does.
- Model fit is mixed: RMSEA = 0.091 exceeds the conventional threshold, and the authors call for further validation of the shortened French translation.
- Data were collected between October 2024 and October 2025 in a fast-moving domain, and the authors describe adoption rates and literacy scores as a snapshot rather than stable benchmarks.
- Several discipline cells are small — health sciences n = 18, engineering and aeronautics n = 18, educational science n = 17 — and the gender analysis covers two groups because only two respondents reported otherwise.
- The qualitative strand rests on 27 interviews in 10 CEGEPs, coded with the same thematic procedure as the open-ended items, with reliability resting on 20 double-coded questionnaires.

## Citation

Giachini, L., Cabot, I., Bélair, F., & Carpinteyro, M. (2026). [*Artificial Intelligence Literacy and Professional Practice of Post-Secondary Teachers in Quebec: A Mixed-Methods Study of Gaps and Training Priorities*](https://www.mdpi.com/2227-7102/16/11/1912). Education Sciences, 16(11), 1912.
