---
title: "Can AI Evaluate Assessment? A Study of Large Language Model Meta-Assessment Performance"
created: "2026-08-21T13:10:00-04:00"
updated: "2026-08-21T13:10:00-04:00"
type: article
tags: [assessment, automated-assessment, assessment-validity, llm, ai-feedback-quality, higher-ed, educational-measurement, human-in-the-loop-ai, hallucination-risk]
research_method: [educational measurement]
level: [higher ed]
sources: ['raw/papers/can-ai-evaluate-assessment-llm-meta-assessment-2026.md']
confidence: medium
---

## Core Finding

Can large language models ([[llm|ChatGPT-5]] and Microsoft Copilot Pro) conduct **meta-assessment** — evaluating the quality of assessment reports? Comparing AI ratings to a human expert across three report versions (strong/moderate/weak), an evaluation format (checklist vs. rubric), three assessment elements, and five replications, AI aligned with human ratings at **87% (checklist)** and **44–50% (rubric)** agreement overall — but the number alone obscures deep limitations: AI struggled most with **measurement quality** and weak/high-error reports, and even when scores agreed, AI's *rationale* often conflicted with expert reasoning. AI is a **valuable supplemental tool**, not a replacement for human expertise.

## Key Findings

- **Format matters greatly.** The binary checklist produced high overall agreement (ChatGPT-5 = 87%, Copilot Pro = 89%) because its simple decision structure limits disagreement; the more nuanced rubric produced far lower agreement (44% and 50%) and revealed much larger divergences. The only major checklist failure was Use of Results on the weak report, where both models credited intent rather than evidence.
- **AI is better on high-quality reports.** Agreement was strongest for the strong report across both formats, and declined as quality fell. On weaker reports, AI frequently **inflated** scores and failed to penalize missing or misclassified evidence (e.g., Copilot consistently scored the weak report's Improvement element a perfect 1 in the checklist).
- **Measurement is the hardest element.** Use of Results had the highest agreement (68%), followed by SLOs (61%) and Measures (54%) — but this understates the problem: AI had consistent difficulty judging outcome–measure alignment and distinguishing direct from indirect evidence, errors that cascaded into other ratings.
- **Four recurring error types:** (1) **hallucinations** (fabricated SLOs — two true instances), (2) **misses** (failing to detect missing/low-quality evidence on weaker reports), (3) **misplaced attention** (e.g., Copilot basing an Interpretation of Results rating on the Use of Results section), and (4) **misapplication of criteria** (faulty judgment applied to correctly identified content). These often intersected.
- **Secure agreement ≠ sound rationale.** Even where human and AI scores matched, the underlying reasoning often differed. AI accepted report labels at face value (e.g., taking "exit interview" as a direct measure) and treated any mention of "change" as proof of data-informed improvement — suggesting credible-sounding but misleading labels could fool untrained LLMs. Human expertise adds contextual, nonverbal-perceptual reasoning AI currently lacks.
- **Model differences:** ChatGPT-5 was stricter, more conservative, and more variable (occasionally returning fractional scores to signal uncertainty and adopting an unnecessarily strict linguistic standard); Copilot Pro was highly stable but consistently lenient/inflated.

## Practical Implications

- **Use AI as a supplement, not a replacement.** For strong reports or a simple checklist, AI can streamline initial review and efficiently flag vague language and non-student-centered phrasing — useful especially for faculty/staff new to assessment.
- **Keep human judgment on measurement and weak reports.** AI is least reliable at evaluating measurement quality/alignment and low-quality reports — exactly where faculty need developmental support. A hybrid model (AI for initial screens, humans for nuanced elements) can offset staffing limits in assessment offices.
- **Expect and guard against label-based overcredulity.** LLMs accepted surface labels at face value; institutions should verify AI verdicts against evidence rather than trust labels, and mirror this training for new human raters too.
- **Establish review and verification guidelines.** Institutions adopting AI for [[assessment|meta-assessment]] should set clear policies for human oversight, disclosure of AI use in feedback, and data-privacy handling (what is stored or used for training) — especially with real institutional data.
- **Use AI meta-assessment as a reflective training byproduct.** The process of prompting and asking AI to justify ratings encourages assessment professionals to critically reflect on their own criteria and rationale — itself a valuable professional-development outcome.

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
- [[coauthorship-integrity-reconceptualising-assessment-validity-for-the-age-of-gene]] — Reconceptualising assessment validity for the age of generative AI
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible assessment in the AI era
- [[assessment-latent-structure-human-llm-2026]] — Assessment latent structure: human vs. LLM

## Citation

Green, K., Bao, Y., LeRoy, S., & Good, M. (2026). *[Can AI Evaluate Assessment? A Study of Large Language Model Meta-Assessment Performance](https://www.rpajournal.com/rpa-archives/)*. Research & Practice in Assessment, 21(2).