---
title: "PRAISE: A Reproducible Workflow for Non-Programmer Scientists to Implement Published AI Models"
created: "2026-10-15T09:15:00-04:00"
updated: "2026-10-15T09:15:00-04:00"
type: article
sources: ['raw/papers/praise-non-programmer-ai-model-implementation-2026.md']
confidence: high
page_kind: [framework]
research_method: [case study, system development]
level: [undergraduate]
audience: [instructors, researchers]
foundations: [ai-literacy, computational-thinking, critical-thinking, human-ai-collaboration]
pedagogy: [scaffolding, problem-based-learning, transfer-of-learning]
technology: [generative-ai, machine-learning, open-source, llm]
methods: [research-methods-aied]
institutions: [educational-policy-ai]
ethics: [accessibility, equity-in-ai-education]
discipline: [chemistry education, science education, stem education]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-15"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Published [[ai-technologies|AI models]] keep accumulating across scientific fields, but the researchers, students, and industry professionals who want to apply them to their own questions often lack the programming and data science expertise to do so, and existing guidelines cover single steps rather than the whole route from a published model to working predictions. The authors present PRAISE (Practical, Reproducible AI-model Implementation for Science and Education), a hands-on workflow that walks non-programmer scientists through use case formulation, dataset preparation, computing infrastructure selection, running the model, validation, and deployment. Because implementations rarely work the first time, PRAISE anticipates common failures and attaches a fallback route to each. As proof of principle, three BSc chemistry students and their tutor — none with programming or data science backgrounds — reproduced, validated, and extended ProSmith, a deep learning model predicting enzyme-substrate interactions, within four months, using [[generative-ai|GenAI]] coding assistants. The authors conclude that implementing a model from the literature can become a learnable skill, turning non-programmer scientists from users into evaluators and improvers of [[machine-learning|machine learning]] models.

## Key Findings
1. PRAISE treats implementation as the umbrella process of selecting, installing, running, and validating a published AI model, distinguishing it from reproduction, adaptation, and deployment as separately defined terms.
2. The workflow fixes six verifiable steps — use case formulation, dataset preparation, infrastructure selection, running the model, validation, and deployment — each with an expected output and a check before continuing.
3. Dataset splitting is guarded by a four-point leakage protocol covering split order, overlap between subsets, use of the subsets, and reproducibility through a documented script and fixed random seed.
4. Three BSc chemistry students and their tutor, none with programming or data science backgrounds, reproduced and extended ProSmith in four months, needing four troubleshooting iterations.
5. Retraining on literature-supplemented data and the VIPER dataset kept ProSmith predictive, with accuracy from 0.90 to 0.93 and MCC from 0.74 to 0.80 on the held-out test set.
6. Validation requires honest assessment against acceptance criteria set in the use case document beforehand, because reproduced metrics need not match those reported by the original authors exactly.

## Why implementing a published model is hard

The paper frames a gap between two literatures rather than a missing tool. Existing AI lifecycles cover pipeline design, data preparation, training, validation, and deployment but stop short of the practical requirements for putting a literature-derived model to work, while reporting guidelines for non-programmer scientists and low-code exploration environments each address only a slice of the route. Three failure sources recur: professionals lack data science expertise or suitable computational infrastructure, are unfamiliar with installation, training, and validation, and may be discouraged before starting by insufficient [[ai-literacy|AI literacy]]. The authors also pin down terminology, since reproduction (obtaining comparable metrics), adaptation (retraining on added data or a changed pipeline), and deployment (making the validated model available for new predictions) define success differently.

## How the PRAISE workflow is structured

PRAISE specifies each step's expected output and check in advance, with a private Git repository recommended as the running logbook that supports later troubleshooting and reproduction on other machines. Use case formulation comes first: a guide from Hofmann et al. is modified so that problem and solution discovery run simultaneously until the two align, then extended with risk assessment and compliance screening under the EU AI Act, GDPR, ISO/IEC 27001, and OWASP guidance for [[llm|large language model]] risks. Candidate models are screened for recency, developer support, and available validation options, with acceptance thresholds fixed before training. Dataset preparation evaluates size, gaps, bias, and missing negative data points and applies the FAIR requirements plus the four-point leakage protocol. Repositories, code, and datasets come from [[open-source]] hosting. GenAI assistants — from conversational guidance to [[prompt-engineering|prompt-based code generation]] — lower the coding barrier without replacing domain expertise.

## The enzyme-substrate case study and its four iterations

The proof of principle sits inside C-Recycle, an EU Just Transition Fund project on chemical recycling where oxidative enzymes functionalize waste streams and suitable enzyme-substrate pairs are laborious to find experimentally. The ideal workflow passed quickly into iteration: the first pass reproduced ProSmith but stalled, and four documented loops followed. The students moved from Windows to a Linux environment on SURF Research Cloud, halving training from about four days to under two; supplemented the dataset from the literature because the enzymes and substrates of interest were absent; added the VIPER dataset of experimentally determined negative outcomes to counter random negative sampling; and restructured the pipeline after a suspected data leak that was investigated and dismissed. The lower MCC was read as consistent with a smaller training set and normal run-to-run variation. Three [[chemistry-education|chemistry]] students at the [[higher-ed|undergraduate]] level performed installation, data management, training, and validation independently, leaning on GenAI assistants as a [[human-ai-collaboration|collaborative]] partner, then carried the pipeline across to their own additional datasets — a [[transfer-of-learning|transfer]] beyond the published setting.

## What remains outside the workflow

The discussion is candid about what PRAISE cannot do. Basic [[computational-thinking|computer and data skills]] remain necessary — installing a program, reading documentation, managing large datasets — and the availability and quality of the published model, its dataset, and its documentation determine whether the workflow can start. Some specialized models demand more expertise than the workflow and GenAI helpers can supply, and models needing computing power beyond an institution's means stay out of reach. The most restrictive limitation is the absence of data covering the research question, which yields unreliable predictions regardless of model quality. Feature analysis such as LIME and SHAP is deliberately excluded as a validation step, because model inputs are learned vector representations whose dimensions carry no direct chemical interpretation.

## What this means for practice

- **Instructors.** Adopt the six-step workflow and its fallback loops as the spine of a course project, since the four iterations, not the first pass, carried the learning.
- **Instructors.** Have students fix validation metrics and acceptance thresholds in a use case document before training, so results cannot be judged against a moving target.
- **Instructors.** Require a version-controlled logbook, then turn it into a [[professional-training|reproducibility package]] with data manifest, split script, environment file, run commands, logs, model files, and metrics.
- **Curriculum designers.** Build instruction in dataset pathologies and the four-point leakage protocol into [[curriculum-design|AI courses]]; leakage and hidden validation-set use are what derailed the case study.
- **Researchers and supervisors.** Match students to models with active developer communities and shipped validation options, and budget for infrastructure iteration before the project starts.

## Limitations

- The case study is a single project with three students and their tutor in one chemistry department, so transferability and the [[learning-gains|learning gains]] it supports are not yet established empirically.
- Each of the five ProSmith training sessions was run once, and the authors state the reported validation values are indicative only, not statistical estimates.
- Performance differences across iterations cannot be cleanly attributed to dataset or pipeline changes, since several factors shifted between runs.
- The paper is a workflow and proof-of-principle report; its case study results are not presented as publishable data, and the case data were kept in a private repository.
- The supplementary dataset was compiled largely by manual literature search, which the authors acknowledge is time consuming and the workflow does not automate.

## Citation
Achterweust, M., Groot Nibbelink, S., de Beer, V. J., Schipper, S., Yüksektepe, Z., Andrade da Silva, P., Peppelaar, A., van der Willigen, M. J., Minkenberg, C. B., & van der Willigen, R. F. (2026). [*PRAISE: A Reproducible Workflow for Non-Programmer Scientists to Implement Published AI Models*](https://arxiv.org/abs/2610.16980). arXiv:2610.16980.
