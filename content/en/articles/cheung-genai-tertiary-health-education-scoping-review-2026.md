---
title: "The Integration of Generative Artificial Intelligence into Tertiary Health Education: A Scoping Review"
created: "2026-11-07T14:15:00-05:00"
updated: "2026-11-07T14:15:00-05:00"
type: article
published: "2026"
source_url: "https://doi.org/10.24059/olj.v30iSI2.5747"
sources: ['raw/papers/cheung-genai-tertiary-health-education-scoping-review-2026.md']
confidence: high
page_kind: [synthesis]
research_method: [literature review]
discipline: [medical education]
level: [higher ed]
audience: [instructors, researchers, administrators]
foundations: [ai-literacy, academic-integrity, critical-thinking, curriculum-design]
pedagogy: [problem-based-learning, self-directed-learning]
technology: [generative-ai, conversational-ai, simulation, personalized-learning, intelligent-tutoring, prompt-engineering, human-in-the-loop-ai]
assessment: [automated-assessment, automated-question-generation, formative-assessment, feedback, assessment-validity]
methods: [meta-analysis-systematic-review]
institutions: [governance]
ethics: [privacy, hallucination-risk, bias-mitigation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-07"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Cheung and colleagues map how [[generative-ai|generative AI]] is being integrated into tertiary health professions education, and how students and educators respond to it, across 20 empirical studies published between 2023 and 2026. Three categories organize the corpus: applications, perceptions, and [[ethics|ethical and responsible use]]. The dominant uses are [[automated-assessment|automated grading]] and [[feedback|feedback]], a conversational tutor or simulated patient, and course redesign; ChatGPT appears in 16 of the 20 studies. Students report high accessibility and gains in confidence, engagement, and [[critical-thinking|critical thinking]], while the same studies repeatedly flag [[hallucination-risk|fabricated content]], over-reliance, [[privacy|data confidentiality]], and weak [[prompt-engineering|prompt literacy]]. The headline gap is institutional rather than technical: the review finds no formal [[ai-literacy|AI literacy]] training described in the programs it covers.

## Key Findings

1. Searches of Ovid Medline, Ovid Emcare, Scopus, CINAHL, and ERIC for 2021 to October 2024 returned 1,112 records. After 514 duplicates and screening, 13 studies were included; a July 2026 update added 7, for 20.
2. All 20 studies appeared between 2023 and 2026, with the USA (n=5) and China (n=5) dominating, followed by one study each from Thailand, Taiwan, Germany, Switzerland, Bahrain, Israel, India, Turkey, Saudi Arabia, and a study spanning HKSAR, Singapore, Ireland, and the UK.
3. Sixteen studies (80%) concern medical education; the other four cover nursing, anatomy, dentistry, and healthcare management. ChatGPT is the tool in 16 studies; AnatomyGPT and Glass AI appear in one study each.
4. Designs are mostly quasi-experimental (n=6), descriptive (n=5), prospective (n=3), and randomized controlled trials (n=3), with 2 mixed methods and 1 experimental study.
5. Assessment applications appear in 7 studies: automated grading of clinical notes, generated multiple-choice questions, and automated feedback. One study produced 50 items in 20 minutes 25 seconds, against 211 minutes 33 seconds for human examiners.
6. Thirteen studies use GenAI as an interactive tutor or learning companion, and reported gains concentrate in communication skills, history taking, clinical reasoning, and knowledge retrieval, generally on short post-test windows.
7. Concern is near-universal: 16 of 20 studies (80%) raise ethical or practical risks, most often hallucination, patient or student privacy, bias, over-reliance, and difficulty writing effective prompts.

## What the twenty studies cover

The corpus is small, recent, and lopsided. Every included study postdates ChatGPT's release, so the review describes a three-year window rather than a mature literature, and 16 of 20 studies sit in medicine. Nursing contributes one study (Chang and colleagues, on problem-solving with a ChatGPT system), anatomy one (Collins and colleagues' AnatomyGPT), dentistry one (Huang and colleagues' randomized trial of ChatGPT as a skills instructor), and healthcare management one (Naamati-Schneider, on [[problem-based-learning|problem-based learning]]). No study covers physiotherapy, pharmacy, midwifery, paramedicine, dietetics, or the other allied health professions that make up much of the health workforce, which the authors acknowledge as an imbalance rather than a finding.

The search architecture matters for reading the counts. The initial sweep ran five databases to October 2024 and produced 13 included studies from 74 full texts. The 2026 update searched Scopus only, plus the first 50 Google Scholar results, to keep pace with a fast-moving field, and added 7 studies. That is a defensible choice for currency but not a replication, so the 20 studies are a purposive sample of the recent literature, not an exhaustive census of it.

One coding detail should be read with care. Song and colleagues are described in the results text as teaching an undergraduate nursing course, but Table 3 classifies the study as medicine. If that study belongs to nursing, the "80% medical education" figure is 15 of 20, not 16, and the nursing share doubles. The discrepancy does not change the overall pattern, but it shows how thin the discipline-level counts are.

## Assessment, tutoring, and course design

The clearest operational use is assessment. Seven studies applied GenAI to grading, item generation, or feedback. Burke and colleagues had ChatGPT score free-text clinical notes and reported an incorrect scoring rate of 1.0% against a standardized 7.2% rate, while a 2023 multinational trial found generated multiple-choice questions comparable in quality to faculty-written items at a fraction of the time. Li and colleagues used automated feedback on English-language papers written by non-native medical students and reported a 4.23-point score gain. The efficiency case is strong; the [[assessment-validity|validity]] case rests on single-site comparisons.

The larger cluster, 13 studies, treats the model as a tutor, simulated patient, or study companion. Gao and colleagues' randomized trial of an AI simulated patient for gynecological history taking found better checklist completion, fewer missed items, and higher OSCE totals, but no difference in professionalism, clinical judgment, counseling, or overall competence. Huang and colleagues found dental skill gains, higher [[self-efficacy|self-efficacy]], and lower cognitive load, with the largest benefit among students with low spatial ability. Chang and colleagues reported problem-solving scores of 4.53 against 3.75 for conventional instruction. Against this, Çiçek and colleagues found no overall difference between ChatGPT and expert feedback, and expert feedback was superior on complicated urinary tract infection cases (P < .001).

Course design is the thinnest category and the most dependent on instructor labor. Studies describe converting lectures into workshops, generating learning outcomes and assessment blueprints, forming balanced student groups, and embedding a physiology companion chatbot into a module. The pattern across all three categories is augmentation: GenAI drafts, explains, and rehearses, while faculty validate content and retain summative judgment, which is the [[human-in-the-loop-ai|human-in-the-loop]] arrangement the authors recommend.

## Students welcome the tool and flag the same risks

Perception data are consistently positive and consistently self-reported. Students describe the tools as accessible, user-friendly, and available beyond class hours, and value repeated practice in a psychologically safe setting before clinical placement. Li and colleagues report 92% positive feedback on translation and grammar correction; Robleto and colleagues report that 96% of students said Glass AI increased diagnostic confidence and 97% found it easy and effective. Faculty, where studied, emphasize efficiency and scalability rather than learning gains.

The risks are equally consistent. Hallucination and fabricated citations are the most cited concern, followed by [[privacy|patient and student confidentiality]] when simulated cases or academic materials are uploaded to public tools, and by bias in training data. Two studies report over-reliance reducing independent reasoning, and three report that students struggle to write specific prompts, which makes satisfaction contingent on a skill the curriculum does not teach. The review is explicit that accountability stays with educators: AI-generated feedback and test items require review before use, and no study treats the model as an assessor of record.

## AI literacy as the missing layer

The review's central argument is that [[ai-literacy|AI literacy]] has become a core competency and that health programs have not built it. Literacy here is broader than operating a chatbot: it includes knowing where models fail, recognizing bias, verifying outputs against evidence, and applying ethical judgment in clinical decisions. The authors want it embedded across the curriculum, with [[prompt-engineering|prompt literacy]] and informed skepticism taught inside clinical tasks, and with assessment redesigned so students are judged on critiquing and integrating AI output rather than reproducing knowledge.

That recommendation outruns the evidence in an important way. Two studies engage literacy directly: Naamati-Schneider describes a problem-based course built to develop AI and digital literacy, and Song and colleagues measured AI literacy as an outcome, finding higher scores alongside better higher-order thinking. Neither compares a literacy curriculum against a matched control, and no other included study reports structured literacy training attached to its tool. The case for embedding literacy is therefore an inference from the risk findings, not a tested intervention, and the review says as much when it calls for longitudinal work on how such training should be designed.

## What this means for practice

- **Instructors.** Use GenAI for formative rehearsal and first-pass feedback, and keep summative judgment and item review with faculty; one trial finds parity on routine questions and expert advantage on nuanced cases.
- **Curriculum designers.** Attach prompt writing and verification training to the clinical activity itself, since three studies trace dissatisfaction and error to prompt quality and none of the included programs reports formal literacy training.
- **Administrators.** Restrict any activity involving patient scenarios or student work to approved, contractually governed platforms; public tools were the recurring privacy exposure in the simulated-patient studies.
- **Faculty developers.** Build a validation step into every AI-generated item, rubric, or feedback template before it reaches students, and document who reviewed it.
- **Researchers.** Measure competence, behavior, and longitudinal outcomes rather than satisfaction, and extend designs to nursing and allied health, where the evidence is one study per discipline.

## Limitations

- The search is English-only, and the authors report excluding three Japanese, one Chinese, one French, and one German record after translation tools proved unreliable.
- The primary search stopped in October 2024; the 2026 update covered Scopus and the first 50 Google Scholar results only, so coverage is current but not exhaustive, and the authors note that newer models such as DeepSeek were not captured.
- No risk-of-bias appraisal was conducted, consistent with PRISMA-ScR, so the 20 studies are counted, not weighted; most are quasi-experimental or descriptive with short follow-up and self-report outcomes.
- Twenty studies cannot support profession-wide claims. With 16 in medicine and one each in nursing, anatomy, dentistry, and healthcare management, findings for "health professions education" are extrapolations, and allied health is effectively absent.
- Thematic coding was settled by author consensus without a second independent extraction of themes, and the three categories overlap in practice, so alternative groupings were possible.
- The discipline tally is internally inconsistent: Song and colleagues are described as a nursing course but counted as medicine, which softens the 80% medical education figure.

## Citation

Cheung, L. T., Vu, H., Osborne, B., Parange, N., & Maranna, S. (2026). [*The Integration of Generative Artificial Intelligence into Tertiary Health Education: A Scoping Review*](https://doi.org/10.24059/olj.v30iSI2.5747). *Online Learning, 30*(SI2), e5747.
