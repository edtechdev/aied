---
title: "RAISE the Standard: A Framework for Transparent Reporting of Artificial Intelligence Studies in Education"
created: "2026-09-16T01:46:00-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
tags: [research-methods-aied, ai-ed-evaluation, limitations-in-aied-research, meta-analysis-systematic-review, ethics, equity-in-ai-education, assessment-validity, generative-ai, prompt-engineering, learning-design]
connected_faqs: [reporting-interpreting-aied-research]
sources: ['raw/papers/raise-framework-ai-education-reporting-2026.md']
confidence: high
research_method: [position paper]
audience: [researchers]
level: [k 12, higher ed]
category: [framework, evaluation]
---

> **Synthesis:** This editorial introduces **RAISE** — *Reporting AI Studies in Education* — a reporting checklist of **30 items across ten thematic domains** for manuscripts in which AI is a key contributing factor to the pedagogical intervention. Its author, the editor-in-chief of the *Journal of Educational Computing Research*, argues that current submissions routinely omit which model was used, how it was configured, what pedagogical role it played, whether humans reviewed its outputs, and how bias or ethical risk was handled — leaving reviewers and editors unable to judge whether an AI intervention was necessary, [[limitations-in-aied-research|replicable]], or credible. The ten domains run from educational justification and [[learning-theories|theoretical grounding]], through AI system specification and learner–[[student-ai-interaction|AI interaction]], [[accessibility]] and cultural fit, participants and setting, human involvement, study design and evaluation, [[ethics]] and trustworthiness, to transparency, reproducibility, and limitations. Alongside the checklist it supplies a companion **Ethics and Risk Matrix** for risks to [[agency|learner agency]], [[equity-in-ai-education|equity]], data [[governance]] and algorithmic transparency. The framing is deliberately non-prescriptive — the framework "does not mandate any particular method, model, or ideology; rather, it insists that whatever choices are made, they are made visible."

## Key Findings

1. **Ten domains, thirty items.** RAISE is organized into ten thematic domains, each containing items that ask authors to state what was done, why, how, and with what implications: Educational Justification and Theoretical Grounding; AI System Specification; AI Role and Interaction; Accessibility and Cultural Fit; Educational Setting and Participants; Human Involvement; Study Design and Evaluation; Ethics and Trustworthiness; Transparency and Reproducibility; and Limitations and Implications. Editable versions of the checklist and companion documents are provided in supplemental material.
2. **The diagnosis is specific, not rhetorical.** As editors, the authors of the framework report manuscripts using AI without stating which model was used (GPT-4, Claude, or a custom algorithm), how it was configured (prompts, fine-tuning parameters), what role it played (feedback generator, co-author, tutor, evaluator), whether human actors designed or reviewed outputs, and how limitations, bias, or ethical risks were addressed. The four questions reviewers are left asking are "What exactly was the AI doing?", "Was it necessary?", "Is this replicable?", and "Are the learning claims credible?"
3. **Educational justification comes first.** AI interventions cannot be treated as neutral tools: their educational value depends on explicit alignment between the stated learning problem, a coherent theoretical rationale, and the mapping between intended objectives and outcome measures. The editorial cites ChatGPT-based aids grounded in [[self-regulated-learning|self-regulated learning]] to illustrate the risk of conflating short-term task performance with lasting [[learning-gains|learning gains]], and analogy-based AI pedagogy to show that making the pedagogical logic explicit both exposes mechanisms and improves generalisability.
4. **AI system specification is treated as core methodological information, not metadata.** Model identity, version, provider, access conditions (open versus proprietary), and key configuration choices must be reported because prompt outcomes and learner effects shift with model version and settings. The framework points authors to systematic reviews of [[prompt-engineering|prompt engineering]] in education to name their prompting strategies, and to work framing prompt engineering as an emergent methodological skill.
5. **The AI's pedagogical role and the interaction design must both be described.** Beyond labeling the role (tutor, feedback agent, scaffolded conversational partner), authors are expected to document the design of learner–AI interaction — prompts, scaffolds, modality, and dialogue structures — so the field can separate pedagogical effects from the contingencies of a particular interaction design. Cited evidence includes chatbots supporting knowledge-building and collaborative reasoning, ChatGPT in [[cs-education|programming education]] raising engagement and mastery while surfacing over-reliance risks, and [[conversational-ai|conversational agents]] supplying cognitive and [[metacognition|metacognitive]] [[scaffolding]] in collaborative writing.
6. **Accessibility and cultural fit are reporting obligations.** Language, adaptation, and accessibility provisions are treated as determinants of whether a tool is usable at all by learners with disabilities or by students in other linguistic and cultural contexts, so inclusivity and localisation choices must be described rather than assumed.
7. **Context and human involvement are the moderators readers need.** Course type, subject area, delivery mode, and learner characteristics (age, [[prior-knowledge|prior knowledge]], socio-demographics) can only be assessed for generalisability and equity if reported, alongside teacher facilitation, who designed prompts or systems, the pedagogical expertise involved, and the level of [[human-in-the-loop-ai|human oversight]] — because designer background and prompt-engineering quality predict the quality of AI output.
8. **Design and measurement decisions must be justified, not just stated.** Credible impact claims require transparent justification of the research design, validated outcome measures described in detail, and alignment between measures and stated objectives. The editorial grounds this in the heterogeneity of experimental ChatGPT studies, which complicates synthesis and meta-analytic aggregation.
9. **Ethics reporting starts at approval and does not stop there.** The checklist covers ethical review, consent, and data governance, but the companion **RAISE 2025 Ethics and Risk Matrix** asks authors to go further and reflect on under-reported risks — to learner agency, equity of access, data governance, and algorithmic transparency — and to describe context-specific impacts and mitigation strategies. The explicit premise is that ethical approval is not equivalent to comprehensive ethical consideration; use of the matrix is recommended rather than required, especially for generative or adaptive AI, complex student interaction, or deployment at scale.
10. **Transparency and reproducibility are operationalized as shared artifacts.** Sharing representative prompts, interaction transcripts, model specifications, and replication constraints is what makes results checkable, and the framework asks authors to document limitations to replication alongside their findings.
11. **Limitations and implications are a distinct domain.** Authors are asked to move past positive outcomes to unintended consequences — [[cognitive-offloading|over-reliance]], shifting [[teacher-role|teacher roles]] — plus generalisability, constraints, and practical and policy implications, responding directly to the journal board's concern with the ethical, emotional, and socio-cultural impacts and indirect effects of [[ai-education|AI in education]].
12. **RAISE positions itself in a lineage of reporting standards.** It is described as building on CONSORT for randomized trials, PRISMA for [[meta-analysis-systematic-review|systematic reviews and meta-analyses]], and Datasheets for Datasets from [[machine-learning|machine learning]], while rooting those ideas in learning sciences, [[learning-design|learning design]], and education technology: AI in education is "not merely technical, it is pedagogical, cultural, and situated." The framework is explicitly framed as a living initiative open to adaptation across global contexts, languages, and pedagogical traditions.

## Scope and Intended Users

RAISE is addressed to all researchers running empirical studies in which AI is part of the educational experience, directly or indirectly — personalized tutoring or feedback, [[automated-assessment|automated grading or assessment]], [[curriculum-design|curriculum]] generation or adaptation, predictive and [[learning-analytics|learning analytics]], conversational or dialogic tools, content creation and co-writing, and simulated peer [[collaborative-learning|collaboration]] or role-play. It is declared applicable across [[qualitative-research|qualitative]], [[quantitative-research|quantitative]], [[mixed-methods-research|mixed-methods]], and [[design-based-research|design-based]] methodologies and across formal K–12, [[higher-ed|higher education]], and informal settings, and it is written to serve reviewers and editors as much as authors by clarifying what questions should be asked of AI-enabled research. The stated intent is reflective rather than bureaucratic: the framework "does not mandate any particular method, model, or ideology; rather, it insists that whatever choices are made, they are made visible."

## Relationship to Other Reporting Frameworks

The RAISE editorial and [[theory-development-aied|TEP-AIED]] are the knowledge base's two most direct attempts to set reporting expectations for AI-in-education studies, and they explicitly address one another. The TEP-AIED model (Hwang, Xie, Wah & Gašević, 2026) folds transparency, [[ethics]], and [[pedagogy]] into a single three-dimensional structure and, in positioning itself, characterizes RAISE as comprehensive across technical, pedagogical, and ethical aspects but faulted for breadth: "its breadth and granularity may make it complex and less accessible for routine empirical applications." Read together the two frameworks make the trade-off visible — RAISE is the fuller checklist, TEP-AIED the leaner narrative structure — and both converge on the same demands: name and version the system, disclose prompts and interaction design, specify treatment and comparison conditions, report ethical review and risk mitigation, and state whether outcomes measure performance, retention, or transfer. RAISE adds the more granular treatment of accessibility, cultural fit, and participant context, and pairs its checklist with a risk matrix rather than folding risk into a single ethics dimension.

For [[research-methods-aied|AIED research methods]], the practical consequence is that the reporting gaps the field's [[limitations-in-aied-research|limitations]] literature documents — missing model versions, undisclosed prompts, unreported context, unverified outcome measures — are now being addressed by named, adoptable instruments rather than by exhortation alone.

## Limitations

RAISE is published as an editorial by the journal's editor-in-chief and, per the journal's standard policy stated in the disclosure, was **not subject to external [[peer-assessment|peer assessment]]**; the author also declares the editorial role as a competing interest. The framework is a reporting scaffold rather than an evaluated instrument: the editorial presents no [[assessment-validity|validity]] or reliability evidence, no inter-rater agreement data on checklist adoption, and no study of whether RAISE-compliant manuscripts improve review reliability, replication rates, or reader comprehension. The ten domains and 30 items are presented with a rationale grounded in the cited literature, but the selection and weighting of domains is not itself reported against a systematic derivation process. Coverage is declared flexible yet the editorial does not specify how much reporting is enough for a given study type, nor how reviewers should handle partial compliance. Finally, the item-level content lives in the checklist figure and supplemental documents rather than in the article text, so the article alone cannot be used to apply the framework item by item.

## Connected Concepts

- [[research-methods-aied]]
- [[limitations-in-aied-research]]
- [[ai-ed-evaluation]]
- [[ethics]]
- [[equity-in-ai-education]]
- [[assessment-validity]]
- [[meta-analysis-systematic-review]]
- [[prompt-engineering]]
- [[learning-design]]
- [[educational-measurement]]
- [[theory-development-aied]]
- [[self-regulated-learning]]
- [[parents-and-families]]
## Connected Articles

- [[tep-aied-model-reporting-2026]] — The TEP-AIED model: a three-dimensional transparency–ethics–pedagogy framework that positions itself against RAISE's granularity
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — PRISMA-LLM: an empirical reporting framework for AI-assisted systematic reviews
- [[oneill-presumed-effective-meta-analysis-2026]] — A forensic audit of AIED meta-analyses whose conclusions rest on the reporting failures RAISE targets
- [[rismanchian-ai-education-four-decades-aixed-2026]] — Corpus-level analysis of four decades of AI-and-education research, with its dataset shared for replication
- [[ai-tutoring-quality-k12-methodologies-2026]] — Methodological review of AI tutoring quality studies in K-12

## Citation

Allison, J. (2026). [RAISE the Standard: A Framework for Transparent Reporting of Artificial Intelligence Studies in Education](https://doi.org/10.1177/07356331251377430). *Journal of Educational Computing Research, 64*(1), 3–15.
