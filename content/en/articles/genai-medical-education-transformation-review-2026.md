---
title: "Generative artificial intelligence and the transformation of medical education: a scoping review"
created: "2026-09-30T11:13:13-04:00"
updated: "2026-09-30T11:13:13-04:00"
type: article
sources: ['raw/papers/10.3389_feduc.2026.1907589.md']
confidence: high
published: "2026"
page_kind: [synthesis]
research_method: [literature review]
discipline: [medical education]
level: [higher ed, undergraduate, graduate]
audience: [medical educators, curriculum designers, faculty developers, researchers]
foundations: [ai-education, human-ai-collaboration, teacher-role, ai-literacy, limitations-in-aied-research]
pedagogy: [problem-based-learning, self-directed-learning, icap-framework, transfer-of-learning, professional-training, student-ai-interaction]
technology: [generative-ai, llm, simulation, conversational-ai, educational-robotics, rag, personalized-learning]
assessment: [formative-assessment, feedback, ai-feedback-quality, automated-question-generation, assessment-validity, automated-assessment]
methods: [meta-analysis-systematic-review, mixed-methods-research, quantitative-research, qualitative-research]
institutions: [governance]
ethics: [hallucination-risk, trust-calibration, equity-in-ai-education, privacy, guardrails]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Zhao, Yang, Gao and Jiang conducted a [[meta-analysis-systematic-review|scoping review]] following JBI methodology and reported against PRISMA-ScR, searching PubMed, Europe PMC and ERIC for English-language journal articles published from 01 January 2023 through 20 August 2026 and retaining only students enrolled in entry-to-practice medical degrees with documented exposure to a [[generative-ai|GenAI]]-enabled teaching or learning activity. The review charted 153 reports representing 149 linked project-level evidence units by [[research-methods-aied|study design]], learner stage, [[pedagogy|pedagogical]] function, outcome type and follow-up. GenAI is now used as tutor, patient, assessor, feedback writer and question author, and the corpus expanded sharply after 2024, with OpenAI GPT or ChatGPT variants named in 102 reports. Controlled trials produced encouraging short-term signals for history taking, communication, clinical reasoning and selected knowledge outcomes, but null or unfavorable findings were also common, only 13 reports contained a follow-up or retention signal, and no patient-level outcome was identified. The authors' central qualification is that the evidence more clearly documents changes in the design and availability of learning activities than durable improvement in learning.

## Key Findings

- **The corpus is recent and concentrated.** 153 reports representing 149 linked project-level evidence units were included, published 2 in 2023, 19 in 2024, 63 in 2025 and 69 by 20 August 2026. Studies came from Europe (39 reports), East Asia (41) and North America (29), with the Middle East contributing 19.
- **Simulation and clinical skills were the largest application.** [[simulation|Simulation]], communication and clinical skills accounted for 47 reports, ahead of assessment generation and feedback (22), case-based learning and clinical reasoning (21), tutoring and personalized study (20), and writing and professional formation (13). [[ai-literacy|AI literacy]] and responsible use, and generated materials and [[multimodal]] content, each accounted for 3 reports, with 24 in other GenAI-supported learning.
- **One model family dominates the field.** OpenAI GPT or ChatGPT variants were used in 102 reports, far more than DeepSeek (7), other named LLMs (8) or multi-model comparisons (13); 23 reports used a custom or incompletely specified system. Model version, temperature, system prompts and retrieval sources were inconsistently documented, so "ChatGPT" often denoted materially different interventions.
- **Objective evidence is thinner than the volume suggests.** 75 reports combined an objective learner, task-product or assessment-process measure with learner-reported outcomes; 37 contained objective measures only, and 41 relied on [[self-report-measures|self-report]] or [[qualitative-research|qualitative]] evidence alone. Most outcomes were measured immediately after a brief intervention, and only 13 reports contained an identifiable follow-up or retention signal.
- **Signals were conditional, not uniform.** Brügge et al. (2024) found that [[llm]]-based simulated-patient practice with feedback improved clinical reasoning relative to similar encounters without feedback, and Luo et al. (2025) reported a 10.50-point advantage for an ophthalmology digital-patient system. Yet Ba et al. (2024) found no theoretical-examination difference after two weeks of ChatGPT-assisted pediatric teaching even though clinical judgment and total Mini-CEX scores favored the intervention.
- **Grounding and verification changed outcomes.** Only 6 of 23 students correctly learned the Randleman criteria during an initial ChatGPT-3.5 phase, while all 23 answered correctly in a subsequent internet-search phase after the model had fabricated a similarly named syndrome (Tuttle et al., 2024) — a [[hallucination-risk|hallucination]] the students retained. In assessment, only 9 of 40 ChatGPT physiology items met all ideal criteria compared with 19 of 40 faculty items (Chauhan et al., 2025).

## How the review was conducted

Core searches ran on 20 August 2026 and identified 1,221 records; duplicate resolution removed 521, leaving 700 unique records for title and abstract screening. A supplementary PubMed sensitivity search retrieved 995 records and contributed 9 further reports, and a restricted Crossref pass returned 772 unique records of which 58 entered screening and 7 were included. Citation searching added 5 reports. In total, 172 retrieved reports were assessed at report level, 19 were excluded after assessment, and 153 reports were included.

Eligibility required an actual learner-facing GenAI activity and a post-exposure educational outcome. Model [[benchmark|benchmarks]], educator-only generation or rating studies, hypothetical use, unaided adoption surveys and attitude-only surveys were excluded, as were residents, fellows and other [[medical-education|health professions]] unless medical-student data were separately extractable. Outcomes were organized descriptively using an adapted Kirkpatrick hierarchy spanning reaction, knowledge, skills or performance, behavior or transfer, and patient-level effects; a report could contribute more than one level. No formal risk-of-bias instrument determined inclusion.

## What is being transformed

The review frames transformation as an empirical question about pedagogical roles, interactions, resources and assessment rather than a claim of superior learning. GenAI changes access to practice: a virtual patient or tutor is available outside scheduled teaching, repeats cases without fatigue and responds immediately. It changes the [[feedback]] loop, since LLMs can compare a response with a rubric and invite immediate revision, though a polished feedback text is only a technical affordance until students receive it, understand it, act on it and improve. It also redistributes work, shifting faculty from producing every case to specifying objectives, curating sources, auditing outputs and coaching judgment, while students move from retrieval toward [[prompt-engineering|prompting]], verification, comparison and revision. The authors note that the [[icap-framework]] predicts deeper learning when learners generate, explain, critique and interact rather than passively receive content, offering a plausible lens for designing and testing GenAI activities rather than an explanation established by this review.

The assessment findings are the sharpest boundary. [[automated-question-generation|AI item generation]] reduced authoring time and sometimes produced difficulty and discrimination comparable with human items, but incorrect keys, multiple defensible answers, nonfunctional distractors, poor discrimination and mismatched cognitive levels still required faculty correction. [[ai-feedback-quality|Automated feedback]] and scoring showed domain dependence: agreement could be high for structured history-taking or checklist domains, while communication, nuance and complex reasoning were less reliable. The authors conclude that AI functions as a draft generator within quality assurance, not an autonomous assessment author.

## What this means for practice

- **[[curriculum-design|Curriculum]] leaders.** Integrate GenAI around a defined educational problem, not the novelty of the tool: name a measurable knowledge, reasoning, communication, skill or verification target before selecting the tool, and retain a credible non-AI route for learners.
- **Instructors.** Require explanation, comparison, source checking, correction or revision rather than answer substitution; the most credible positive findings occurred when the task was bounded, the model was grounded in curated content or a structured case, and feedback required revision.
- **Assessment designers.** Treat model-generated items, keys, difficulty labels and feedback as drafts until locally validated; in one comparison only 9 of 40 ChatGPT physiology items met all ideal criteria against 19 of 40 faculty items.
- **Faculty developers.** Warning labels alone did not materially improve performance or reduce reliance; teach and directly evaluate verification behaviors such as answer switching, error detection, source checking and [[trust-calibration|confidence calibration]].
- **Administrators.** Plan for governance alongside pedagogy: approved [[edtech-platform|platforms]], data minimization, retention and disclosure [[educational-policy-ai|policies]], mechanisms for reporting harmful output, and oversight that weighs cognitive load, [[equity-in-ai-education|equity]] and whether the activity preserves [[desirable-difficulties|productive struggle]].

## Limitations

- The primary database set was limited to PubMed, Europe PMC and ERIC; Crossref screening used a prespecified priority subset rather than every returned record, so retrieval bias is reduced but not eliminated.
- Only English-language journal articles were eligible, the field changes quickly, indexing lags, and studies published after 20 August 2026 were outside scope.
- Study heterogeneity precluded meta-analysis and no formal risk-of-bias appraisal was applied, so descriptive counts must not be interpreted as certainty-of-effect estimates.
- Many studies were single-center and specialty-specific, curricular stage was often unreported, and only 13 reports contained a follow-up or retention signal, so durability and [[transfer-of-learning|transfer]] to supervised workplace performance remain unestablished.

## Citation

Zhao, J., Yang, K., Gao, H., & Jiang, G. (2026). [Generative artificial intelligence and the transformation of medical education: a scoping review](https://doi.org/10.3389/feduc.2026.1907589). *Frontiers in Education*, 11, 1907589.