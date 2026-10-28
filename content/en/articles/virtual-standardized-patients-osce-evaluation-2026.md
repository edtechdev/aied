---
title: "A Stratified Multi-Rater Evaluation of LLM-Based Virtual Standardized Patients with a Deployed Data-Generation Platform"
created: "2026-10-22T09:26:00-04:00"
updated: "2026-10-22T09:26:00-04:00"
type: article
pedagogy: [professional-training]
technology: [llm, conversational-ai, pedagogical-agent, simulation]
assessment: [oral-assessment, assessment-validity, educational-measurement]
methods: [quantitative-research]
research_method: [experiment]
discipline: [medical education]
level: [higher ed]
audience: [medical educators, assessment professionals, researchers]
page_kind: [evaluation]
sources: ['raw/papers/virtual-standardized-patients-osce-evaluation-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-22"
    agent: hermes-agent
---

> **Synthesis:** Yi, Park and Kim tested whether [[llm|LLM]]-based virtual standardized patients can stand in for human standardized patients in OSCE-style history taking. Four backbones — GPT-4o, Claude 3.5 Sonnet, Llama-3.1 70B and HyperCLOVA X — answered the same 70 Korean-language student prompts across three cases (hematuria, fever in pregnancy, chronic cough), alongside a board-certified internist writing the utterance-aligned reference answers. Seventeen senior medical students scored the 350 responses double-blind and fully crossed on three sentence-level and six encounter-level Likert metrics, producing 7,480 ratings analyzed with a linear mixed-effects model stratified over an 11-category history-taking taxonomy. At the encounter level three models stayed within 0.5 Likert points of the expert on Comprehensibility, Consistency and Hallucination-freeness, and four of 24 source × metric contrasts were not statistically significant; Llama-3.1 70B fell significantly below the reference on all six. Stratification localized the failures to clinical reasoning, patient education, and a Korean negative-form penalty on Fluency.

## Key Findings
1. **Three of four models held within 0.5 Likert points of the expert reference on Comprehensibility, Consistency and Hallucination-freeness**, the three encounter metrics where [[simulation|virtual patient]] quality was most defensible.
2. **Four of 24 source × metric contrasts were not statistically significant:** Hallucination-freeness in Claude 3.5 Sonnet and GPT-4o, Consistency in GPT-4o, and Engagement in HyperCLOVA X (-0.02 [-0.31, 0.27]).
3. **Llama-3.1 70B fell significantly below the human reference on all six encounter metrics**, trailing every other source, with the largest gap on Coherence (-1.86 [-2.14, -1.59]).
4. **Sentence-level factual alignment was nearly saturated:** pooled Accuracy stayed within 0.09 Likert points of the reference for all four models, while Fluency separated them from 4.91 (human) to 3.69 (Llama-3.1 70B).
5. **Weakness concentrated in Clinical reasoning and Patient education**, the categories requiring synthesis across the prior dialogue rather than symptom recall; Llama-3.1 70B exceeded 1 Likert point below the reference on Fluency on those and on Greeting & ID check.
6. **A Korean negative-form penalty appeared on Fluency:** the extra drop from affirmative to negative-polarity questions was 0.149 [-0.286, -0.011] for Llama-3.1 70B, the only interval excluding zero, and it did not track Korean-language ability.
7. **The deployed platform already holds 49 sessions across 27 scenarios and 1,763 student–VSP turns**, and all eleven taxonomy categories appear among the 1,614 platform utterances the scheme covers.

## Four backbones against one expert reference

The three scenarios — hematuria, fever in a pregnant patient, chronic cough — came from the Korean OSCE/CPX training guide and were refined by a board-certified internal medicine faculty member with thirteen years of experience in clinical skills assessment. Seventy input prompts (23 hematuria, 23 fever, 24 cough) were sampled from authentic transcripts of prior cohorts at the same school, then tagged on two axes: an 11-category history-taking taxonomy grounded in AMEE Guide No. 81, and a three-level linguistic-form label (affirmative, negative, open-ended). Each [[simulation|virtual patient]] was built by persona injection, one six-field system prompt of 700–900 Korean characters instantiated per case, with inference held constant at temperature 0.7, top-p 0.95 and a 1,024-token cap. Five sources — the four models and the expert, writing without sight of model outputs — produced 350 responses. Seventeen senior medical students (mean age 24.8 ± 1.9 years; 5 women [29.4%]) scored them after a 60-minute calibration session, asynchronously over four weeks.

## Encounter-level gaps and the four null results

The human reference led on all six encounter metrics: 4.84 on Comprehensibility, 4.49 on Hallucination-freeness, 4.80 on Coherence, 4.75 on Consistency, 4.18 on Engagement and 4.61 on Overall Satisfaction. Claude 3.5 Sonnet, GPT-4o and HyperCLOVA X clustered below it — GPT-4o at 4.59 on Comprehensibility, Claude 3.5 Sonnet at 4.39 on Consistency, HyperCLOVA X at 4.02 on Hallucination-freeness — and the abstract reports the three falling 0.08 to 0.47 Likert points below the reference on those metrics. What matters for an adoption decision is where the intervals cross zero, and in four cells they did. Llama-3.1 70B was the exception in kind rather than degree: it trailed every other source on all six metrics, reaching 2.94 on Coherence and 2.71 on Overall Satisfaction against 4.80 and 4.61 for the expert, an additional 1.5–2 point spread below the reference. Sentence-level scores were higher and more compressed, and the Fluency ordering anticipated the encounter-level Coherence ordering.

## What stratification surfaced

Aggregate means hid the failure modes. Category × source interactions showed pronounced LLM weaknesses on Clinical reasoning and Patient education, and a Llama-3.1 70B deficit largest on Greeting & ID check and Clinical reasoning. The linguistic axis surfaced the Korean negative-form penalty on Fluency, smallest for Claude 3.5 Sonnet (0.033) and larger for HyperCLOVA X (0.093), the only Korean-developed model in the panel — evidence the effect belongs to question form rather than language proficiency. Sixteen of the 350 utterances fell below 3.0 on at least one sentence-level metric, fourteen of them Fluency failures; in seven, all in Clinical reasoning or Patient education, the virtual patient restated the student's explanation in clinical register instead of answering as a patient, and in three, all negative-polarity questions, it answered a question that had not been asked. No human-reference utterance fell below 3.0 on any metric. Reliability supported the contrasts at the encounter level (pooled ICC(2,k) 0.91 [0.88–0.94]) but was markedly lower under Krippendorff's α (0.08–0.41).

## The deployed VSP-OSCE platform

The paper ships a working [[edtech-platform|platform]], not only an evaluation. Scenario scripts are generated offline by GPT-4.1 from a structured database of 80 core symptoms, each linked to expert-validated disease lists and three patient profiles (240 in total); a symptom-focused history-taking checklist is drafted by GPT-4.1 at temperature 0.2 under a one-shot prompt and refined by expert review, and each free-form patient narrative of at least 1,500 characters is retained only if a diagnostic model's predicted disease matches the intended one. At session start GPT-4o instantiates the persona at temperature 0.5 with a 35-token cap, holding responses to one or two sentences; a checklist-based automated score at temperature 0 is shown to the student for [[self-directed-learning|self-directed]] practice. All calls use seed 42, and the code is public. Dialogues are logged under research and [[privacy]] consent and released as a Korean OSCE dataset on Hugging Face under CC BY-NC-SA 4.0, with Croissant Core and Responsible-AI metadata.

## What this means for practice

- **Instructors.** Build rehearsal around the two categories every model fumbled: assign explicit summarization and patient-education turns, then review them against a checklist, instead of letting free-form chat stand as complete [[professional-training|history-taking practice]].
- **Administrators.** Treat a persona-injected virtual patient as formative practice rather than a [[summative-assessment|summative]] substitute — the expert reference still led on all six encounter metrics, and the four non-significant contrasts are specific to one expert.
- **Simulation directors.** Cost is the live argument: sustained investment in recruitment, training, examiner panels and facilities contributed to the 2021 retirement of USMLE Step 2 Clinical Skills and, the same year, the Medical Council of Canada terminating the MCCQE Part II OSCE.
- **Researchers.** The 7,480 fully crossed scores are offered as a validation set for LLM-as-a-judge pipelines, and the authors' own result is a warning: stratify by question type before trusting a composite, since the same model can look adequate in aggregate and fail on negative-polarity items.

## Limitations

- The human-expert reference — the 1:1 gold standard for every contrast — was written by a single OSCE-faculty author, so where a model did not differ significantly from it, that result is specific to this expert.
- Raters were never asked whether a response was human- or machine-authored, so whether they could have distinguished virtual from human responses is not recoverable from these data.
- The fully crossed burden capped the design at 17 senior medical students and four models, and [[open-source]] frontier models released after the rating window were excluded.
- The four backbones are 2025-era releases (GPT-4o, Claude 3.5 Sonnet, Llama-3.1 70B, HyperCLOVA X) queried within a single calendar week, with dated API releases deliberately omitted, so results describe that generation rather than current models.
- The simulator is text-only: it cannot reproduce prosody, facial expression or gesture, so Engagement and Comprehensibility may behave differently in spoken encounters.
- The three scenarios cover a fraction of the Korean OSCE/CPX case bank of more than fifty case classes, with psychiatry and pediatrics unrepresented, and ordinal-weight agreement was low (Krippendorff's α 0.08–0.41) even where ICC was high.

## Citation

Yi, Y., Park, J., & Kim, S. (2026). [*A Stratified Multi-Rater Evaluation of LLM-Based Virtual Standardized Patients with a Deployed Data-Generation Platform*](https://arxiv.org/abs/2610.29312). arXiv preprint arXiv:2610.29312.
