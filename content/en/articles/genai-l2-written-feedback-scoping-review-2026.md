---
title: "Generative AI and L2 Written Feedback Studies: A Scoping Review"
created: "2026-10-23T09:48:00-04:00"
updated: "2026-10-23T09:48:00-04:00"
type: article
sources: ['raw/papers/10.1177_00336882251386530.md']
confidence: medium
research_method: [literature review]
methods: [mixed-methods-research]
discipline: [language learning, writing education]
audience: [instructors, researchers, assessment designers]
technology: [generative-ai, llm]
assessment: [feedback, ai-feedback-quality, feedback-literacy]
pedagogy: [student-engagement]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-23"
    agent: hermes-agent
---

> **Synthesis:** Crosthwaite and Sun (2026) map 51 SSCI/ESCI-indexed studies of [[generative-ai|GenAI]]-produced [[feedback|written feedback]] in second-language writing, published since 2022, and code them for outlet, geography, aims, methods, findings and author-disclosed limitations. The corpus is overwhelmingly about English: 46 of the 51 studies target L2 English, and the learners' first language is most often Chinese (26) or Arabic (10). Beneath that uniformity the aims split cleanly — 16 studies ask whether AI feedback improves writing, 15 ask how students and teachers perceive it, 11 compare it with human feedback, and 5 check whether it is even accurate. The review's most consequential findings are negative ones about the evidence base rather than about AI: 16 experimental studies used no control group, only 27 of the included studies reported the [[llm|prompt]] used with the model, and the coding of "writing quality" often had no relation to the feedback actually requested.

## Key Findings
1. **Fifty-one studies were coded from 123 initial records,** drawn from Web of Science and Scopus through 23 April 2025, with 18 duplicates removed and 49 exclusions agreed in the first coding round.
2. **Prompt transparency is the corpus's clearest gap:** only 27 of the included studies reported the prompts they used with GenAI, so roughly two in five cannot be replicated or compared.
3. **Sixteen experimental studies used no control group** against 25 that did, which leaves a substantial share of the "improvement" literature without a counterfactual.
4. **Combining AI and teacher feedback outperformed either alone** for writing quality and for covering diverse error types, which is the most actionable positive result in the corpus.
5. **Students revise what AI marks, and that is mostly form.** Uptake concentrated on grammar and lexis, with content-related feedback revised far less often.
6. **Accuracy is language-dependent.** Error detection and correction were generally strong for English and weaker for Greek and Chinese, alongside documented hallucinations and misreadings of author intent.

## What the corpus actually looks like

The 51 studies come from 35 distinct outlets, with *Education and Information Technologies* (5), *Computer Assisted Language Learning* (4) and the *Journal of Second Language Writing* (3) leading; 19 of the outlets are ESCI-indexed rather than SSCI, which fits an emergent literature. Geographically the work clusters: Mainland China accounts for 16 studies, Hong Kong SAR for 7 and Macau for 3, with Saudi Arabia (5), Iran (2) and Taiwan (2) filling in much of the rest. European and North American contexts are barely represented.

Methodologically the field has converged on quasi-experimental pre/post designs (17 studies) and self-report instruments (surveys in 16, interviews in 16), with a smaller process-oriented strand using stimulated recall, screencasts, chat logs and keylogging. The review classifies feedback type and timing as well: 32 studies involve general written feedback, 11 exclusively written corrective feedback, and only four examine feedback before or during writing, against 45 that intervene after the draft is finished. That asymmetry is a design habit rather than a finding — nearly the whole corpus treats feedback as a post-hoc event.

## Where the positive findings are strongest and weakest

The strongest claim the corpus supports is comparative rather than absolute. Several studies found no significant difference between AI and teacher feedback, a few found AI feedback redundant or less relevant on content, and the studies that combined the two did better than either alone. That pattern argues for [[human-in-the-loop-ai|human oversight]] as a design commitment rather than a compromise, and it is consistent with the metalinguistic-feedback findings: GenAI produced more reformulation and metalanguage than teachers, but much of it was redundant.

The weakest claims are the ones the field most wants: that AI feedback raises writing quality. Seventeen studies report improvements, but the review documents how often "writing quality" was scored with a rubric unrelated to the feedback the system was asked for, how often proficiency was self-reported, and how small some samples were — one study with 17 participants, another with 3. Perception studies (15) point toward motivation, practicality, independence and increased [[feedback-literacy|feedback literacy]], with a recurring counter-current of confusion, mistrust and over-reliance concerns, and some evidence of superficial engagement that reduced creativity or [[student-engagement|agency]].

## What this means for practice

- **Instructors.** Combine AI feedback with your own rather than replacing one with the other; the comparison studies find the combination beats either source, and students' revisions show AI is used for form while content judgments still need a human.
- **Instructors.** Publish the prompts you give students, and ask for them if a tool does not expose them — two in five studies in this corpus cannot be reproduced because the prompt was never reported.
- **Researchers.** Use a control group and report the prompt, the model version and the learner level; those three omissions are what keep this literature from cumulating into a meta-analysis the authors explicitly call for.
- **Assessment designers.** Do not treat AI error detection as language-neutral: the accuracy evidence is strong for English and visibly weaker for Greek and Chinese.

## Limitations

- The review is explicitly not a full PRISMA systematic review: it ran no risk-of-bias appraisal and registered no protocol, which the authors state.
- Participant characteristics, learner level, instructional context and theoretical framing were not coded, a gap the authors attribute to the journal's space limits — so the page carries no level facet rather than inferring one.
- Only English-language, SSCI/ESCI-indexed publications were searched, and 46 of the 51 studies concern L2 English, so the "L2" in the title is narrower than it reads.
- Learner outcomes are largely self-reported or rater-scored at a single time point, and the corpus contains no longitudinal evidence about durable change.
- Coverage stops at 23 April 2025, so the fastest-moving part of the field is already out of frame.
- One internal inconsistency is worth noting: the prompt-transparency count is reported as "27 out of the 50 included studies" in a review whose dataset is stated everywhere else as 51.

## Citation

Crosthwaite, P., & S. Sun (2026). [*Generative AI and L2 Written Feedback Studies: A Scoping Review*](https://doi.org/10.1177/00336882251386530). RELC Journal, 57(1), 207–219.
