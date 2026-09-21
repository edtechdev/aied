---
title: "Can AI Evaluate Assessment? A Study of Large Language Model Meta-Assessment Performance"
created: "2026-08-21T13:10:00-04:00"
updated: "2026-09-19T09:24:40-04:00"
type: article
technology: [human-in-the-loop-ai, llm]
assessment: [ai-feedback-quality, assessment, assessment-validity, automated-assessment, educational-measurement]
ethics: [hallucination-risk]
level: [higher ed]
sources: ['raw/papers/can-ai-evaluate-assessment-llm-meta-assessment-2026.md']
confidence: medium
audience: [assessment professionals, assessment designers, institutions]
page_kind: [evaluation]
---

> **Synthesis:** Can large language models ([[llm|ChatGPT-5]] and Microsoft Copilot Pro) conduct **meta-assessment** — evaluating the quality of assessment reports? Comparing AI ratings to a human expert across three report versions (strong/moderate/weak), an evaluation format (checklist vs. rubric), three assessment elements, and five replications, AI aligned with human ratings at **87% (checklist)** and **44–50% (rubric)** agreement overall — but the number alone obscures deep limitations: AI struggled most with **measurement quality** and weak/high-error reports, and even when scores agreed, AI's *rationale* often conflicted with expert reasoning. AI is a **valuable supplemental tool**, not a replacement for human expertise.

## Key Findings

- **Format matters greatly.** The binary checklist produced high overall agreement (ChatGPT-5 = 87%, Copilot Pro = 89%) because its simple decision structure limits disagreement; the more nuanced rubric produced far lower agreement (44% and 50%) and revealed much larger divergences. The only major checklist failure was Use of Results on the weak report, where both models credited intent rather than evidence.
- **AI is better on high-quality reports.** Agreement was strongest for the strong report across both formats, and declined as quality fell. On weaker reports, AI frequently **inflated** scores and failed to penalize missing or misclassified evidence (e.g., Copilot consistently scored the weak report's Improvement element a perfect 1 in the checklist).
- **Measurement is the hardest element.** Use of Results had the highest agreement (68%), followed by SLOs (61%) and Measures (54%) — but this understates the problem: AI had consistent difficulty judging outcome–measure alignment and distinguishing direct from indirect evidence, errors that cascaded into other ratings.
- **Four recurring error types:** (1) **[[hallucination-risk|hallucinations]]** (fabricated SLOs — two true instances), (2) **misses** (failing to detect missing/low-quality evidence on weaker reports), (3) **misplaced attention** (e.g., Copilot basing an Interpretation of Results rating on the Use of Results section), and (4) **misapplication of criteria** (faulty judgment applied to correctly identified content). These often intersected.
- **Secure agreement ≠ sound rationale.** Even where human and AI scores matched, the underlying reasoning often differed. AI accepted report labels at face value (e.g., taking "exit interview" as a direct measure) and treated any mention of "change" as proof of data-informed improvement — suggesting credible-sounding but misleading labels could fool untrained LLMs. Human expertise adds contextual, nonverbal-perceptual reasoning AI currently lacks.
- **Model differences:** ChatGPT-5 was stricter, more conservative, and more variable (occasionally returning fractional scores to signal uncertainty and adopting an unnecessarily strict linguistic standard); Copilot Pro was highly stable but consistently lenient/inflated.

## What this means for practice

- **Assessment professionals.** Use AI as a supplement, not a replacement, where the format is simple and the report is strong: the binary checklist yielded 87% (ChatGPT-5) and 89% (Copilot Pro) agreement, while the nuanced rubric fell to 44% and 50%.
- **Assessment professionals.** Keep human judgment on [[educational-measurement|measurement quality]] and on weak reports, where AI was least reliable — it inflated scores and missed missing or misclassified evidence — and use a hybrid model (AI for initial screens, humans for nuanced elements) to offset staffing limits in assessment offices.
- **Assessment professionals.** Verify AI verdicts against the evidence rather than the report's labels, because both models accepted an "exit interview" as a direct measure and read any mention of "change" as proof of data-informed improvement.
- **Institutions.** Set explicit guidelines for [[human-in-the-loop-ai|human oversight]], disclosure of AI use in feedback, and data-privacy handling (what is stored or reused) before turning real institutional reports over to a model — this study ran only on fictional data.
- **Assessment designers.** Treat prompting AI and asking it to justify ratings as professional development: articulating criteria to a model led reviewers to reflect on their own [[assessment|meta-assessment]] rationale.

## Limitations

- The evidence is a snapshot of LLM behavior on a single fictitious assessment report manipulated into strong, moderate, and weak versions, not real institutional reports.
- Only two general-purpose platforms were tested, and Copilot Pro frequently runs on the same GPT models as ChatGPT; both were evaluated in their default configurations.
- Ratings came from a single human expert, which ensured consistency but limited the diversity of perspectives against which AI agreement was judged.
- LLM outputs vary between prompts, and the design deliberately held prompt wording constant rather than iterating as practitioners would; the rationales AI gave were compared to expert feedback only informally, not through formal qualitative analysis.

## Connected Concepts

- [[assessment]]
- [[assessment-validity]]
- [[automated-assessment]]
- [[educational-measurement]]
- [[ai-feedback-quality]]
- [[llm]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[psychometrically-aware-ai]]
- [[higher-ed]]
- [[ai-education]]

## Connected Articles

- [[end-of-assessment-ai-disruption-transformation-2026]] — The End of Assessment? Disruption and transformation in the age of AI
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond detection: authentic assessment in an AI-mediated world
- [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene]] — Reconceptualizing assessment validity for the age of generative AI
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era
- [[assessment-latent-structure-human-llm-2026]] — Assessment latent structure: human vs. LLM

## Citation

Green, K., Bao, Y., LeRoy, S., & Good, M. (2026). *[Can AI Evaluate Assessment? A Study of Large Language Model Meta-Assessment Performance](https://www.rpajournal.com/rpa-archives/)*. Research & Practice in Assessment, 21(2).
