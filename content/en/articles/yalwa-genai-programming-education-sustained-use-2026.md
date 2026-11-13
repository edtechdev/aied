---
title: "Sustained use of generative artificial intelligence (GenAI) in programming education: A systematic review of empirical evidence on adoption, learning outcomes, and continuance intention"
published: "2026-10-31"
created: "2026-11-02T09:12:23-05:00"
updated: "2026-11-02T10:15:00-05:00"
type: article
sources: ['raw/papers/yalwa-genai-programming-education-sustained-use-2026.md']
source_url: "https://doi.org/10.1080/2331186X.2026.2745324"
confidence: high
page_kind: [synthesis]
research_method: [literature review]
discipline: [cs education]
level: [higher ed, undergraduate]
audience: [instructors, researchers, administrators]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-02"
    agent: hermes-agent
source_depth: full text
foundations: [academic-integrity]
pedagogy: [scaffolding, student-engagement]
technology: [generative-ai, llm]
assessment: [feedback]
methods: [meta-analysis-systematic-review]
---

> **Synthesis:** Yalwa and colleagues review 45 empirical studies published between 2023 and 2025 on how [[generative-ai]] tools — ChatGPT above all — have been taken up in undergraduate [[cs-education]], and they organize the evidence around a question most reviews skip: not whether students adopt these tools, but whether they keep using them well. Drawing on the [[technology-acceptance-model]] alongside UTAUT and the Expectation Confirmation Model, the review separates initial acceptance from continuance, arguing that sustained use depends on calibrated [[trust]], [[ai-literacy]], and institutional guidance rather than on perceived usefulness alone. The findings cut both ways: GenAI supports code generation, debugging, explanation, and [[feedback]], yet improved task completion does not indicate deeper [[computational-thinking]], and [[academic-integrity]], dependency, and unequal access remain unresolved. Because the corpus is short-term and geographically concentrated, the review's most defensible contribution is a map of mechanisms — perceived value, verification skill, institutional readiness — rather than an estimate of [[learning-gains]].

## Key Findings

1. The review screened 3,160 records from Scopus, Web of Science, IEEE Xplore, SpringerLink, and Google Scholar, retaining 45 empirical studies published between January 2023 and November 2025.
2. Publication peaked in 2024 with 24 studies (53.3%), against 18 in 2023 (40.0%) and only three in 2025 (6.7%), leaving continuance evidence thin.
3. ChatGPT and ChatGPT-based applications dominated the corpus at 23 studies (51.1%); GPT-3 or GPT-4 models appeared in 8 (17.8%), and Copilot or Codex in 6 (13.3%).
4. Research concentrated in the United States (12 studies, 26.7%) and in the United Kingdom and New Zealand (5 each, 11.1%), with developing regions barely represented.
5. Studies most often examined assessment, feedback, debugging, and code explanation (12, 26.7%), followed by perceptions, trust, and [[ethics]] (10, 22.2%).
6. Improved task completion was widely reported, but several studies found students accepting generated solutions without verification, creating dependency and weaker independent reasoning.
7. Coding agreement reached 92%; the corpus split into 19 [[quantitative-research|quantitative]] (42.22%), 13 [[qualitative-research|qualitative]], and 13 mixed-method studies.

## What the 45 studies actually cover

The corpus is recent and lopsided. Twenty-four studies appeared in 2024, eighteen in 2023, three in 2025: the first wave documented what tools could do, not what sustained use looks like. Geographically, the United States contributed 12 studies, the United Kingdom and New Zealand five each, and Australia, China, Finland, and India two each; the remaining countries appeared once apiece.

Tool coverage is narrower still: ChatGPT and ChatGPT-based applications account for 23 studies, GPT-3, GPT-4, and text-davinci models for eight, GitHub Copilot or OpenAI Codex for six, and Gemini with Google Colab and [[multimodal]] OpenAI tools once each. The authors read this as a validity problem: conclusions about GenAI in programming rest mostly on one conversational interface, and evidence about reliability may not transfer to other assistants.

## Assistance is not understanding

Four outcome areas organize the evidence: programming performance, debugging efficiency, conceptual understanding, and [[student-engagement]]. Performance gains are the most consistently reported — GPT-based systems and coding assistants completed exercises, generated code, and supported assignments — and debugging support is the most specific: models produced readable explanations of errors and suggested repairs where compiler messages had failed.

The review's caution lands on the gap between completion and competence. Students in several studies accepted generated solutions without sufficient verification, and improved productivity did not translate into reasoning skill. The same pattern recurs for conceptual learning: personalized explanations supported [[self-directed-learning|self-directed study]], but evidence that understanding persists is weak, and novices are least equipped to notice a wrong explanation. Engagement findings are positive but conditional — students valued the convenience, while accuracy doubts and ethical uncertainty shaped whether they persisted.

## Continuance, trust, and calibrated reliance

Continuance is where the review makes its theoretical bet. Mapping themes onto TAM, UTAUT, and the Expectation Confirmation Model, the authors argue that perceived usefulness explains first adoption while satisfaction, confirmation of expectations, and confidence in outputs explain persistence. Trust is the hinge: too much produces passive acceptance of wrong code, too little forfeits learning value, so students need calibrated reliance backed by verification skill.

Institutional conditions do the remaining work. Students and lecturers reported uncertainty about acceptable use, assessment expectations, and integrity rules, and institutions with clear guidance were better positioned to treat GenAI as a learning aid rather than a shortcut. The authors concede that few studies measured continuance directly, so the model is an interpretive frame, not a tested causal account.

## Integrity, access, and what redesign requires

Academic integrity was the most frequently reported concern. Tools can generate submittable solutions, and detection studies — [[machine-learning]] classifiers, code-anomaly analysis — were reviewed alongside claims that detection alone is not a durable response. The authors' preferred direction is assessment redesign toward explanation, [[reflection]], and process evidence rather than final code output, which places [[scaffolding]] and dialogue at the center of [[assessment-validity]].

Access cuts the other way. Adoption depended on reliable internet, computing resources, digital literacy, and language availability, and the research itself is concentrated in well-resourced systems, so the evidence cannot say much about constrained institutions. Students with stronger digital skills extracted more benefit — the familiar pattern by which a free tool widens gaps.

## What this means for practice

- **Instructors.** Teach verification explicitly: have students locate, correct, and justify errors in AI-generated code before accepting a fix, since dependency appeared where evaluation skill was assumed rather than taught.
- **Instructors.** Assess explanation and debugging process, not only working code; detection tools were reviewed as unreliable, while redesigned tasks were the recommended response.
- **Administrators.** Publish acceptable-use and integrity guidance, because uncertainty about rules — not tool access — was the recurring constraint on responsible use.
- **Researchers.** Measure continuance and longitudinal understanding rather than one-off perceptions; only three of 45 studies came from 2025.

## Limitations

- The corpus is 45 peer-reviewed English-language studies from January 2023 to November 2025, so gray literature, preprints, and non-English work were excluded.
- Heterogeneity in design, platform, and outcome measures prevented [[meta-analysis-systematic-review|meta-analysis]]; findings were synthesized narratively, and the authors concede interpretive subjectivity.
- Evidence is concentrated in the United States, United Kingdom, and New Zealand, with developing regions represented by single studies, so [[equity-in-ai-education|equity]] conclusions rest on thin coverage.
- Most included studies examined short-term interventions and initial perceptions, which limits what it can say about long-term learning or sustained use.

## Citation

Yalwa, A. S., Othman, M. S., Yusuf, L. M., & Almarshadi, S. (2026). [*Sustained use of generative artificial intelligence (GenAI) in programming education: A systematic review of empirical evidence on adoption, learning outcomes, and continuance intention*](https://doi.org/10.1080/2331186X.2026.2745324). Cogent Education, 13(1).
