---
title: "What Does It Mean to Be AI Literate? Psychometric Validation of the Critical 3wAI Literacy Scale"
created: "2026-10-12T10:22:19-04:00"
updated: "2026-10-12T10:22:19-04:00"
type: article
foundations: [ai-literacy]
technology: [generative-ai]
assessment: [educational-measurement, self-report-measures, assessment-validity]
ethics: [ethics]
audience: [researchers, instructors, administrators]
level: [higher ed, adult learning]
research_method: [instrument development, survey]
page_kind: [evaluation]
sources: ['raw/papers/bozkurt-3wai-literacy-scale-2026.md']
confidence: high
methods: [ai-ed-evaluation]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-12"
    agent: hermes-agent
---

> **Synthesis:** Bozkurt, Ertan, and Cömert (2026) develop and validate the **Critical 3wAI Literacy Scale**, a 17-item self-report instrument operationalizing AI literacy as three correlated but distinct factors — Foundational Knowledge (Know What), Practical Applications (Know How), and Critical Understanding (Know Why) — with data from two independent adult-learner samples (n = 546 for EFA, n = 647 for CFA). The three-factor structure held across EFA and CFA (χ²/df = 4.93, SRMR = 0.054, RMSEA = 0.078, NFI = 0.915, TLI = 0.919, CFI = 0.931), internal consistency was strong (α = 0.913 overall), and HTMT ratios below 0.90 supported discriminant validity. The instrument gives researchers and [[educational-measurement]] practitioners a validated diagnostic tool for AI literacy that moves beyond checklist views of digital competence, though its self-report format and single-country convenience samples limit what it can establish.

## Summary

As generative and agentic AI reconfigure higher education, existing AI-literacy frameworks argue that functional operational skills are no longer sufficient — genuine agency requires critical engagement with AI's power, limitations, and ethical dimensions. Yet most AI-literacy measurement has relied on self-report questionnaires whose items mix knowledge, use, attitudes, and ethics into undifferentiated composites, leaving a gap between multidimensional theory and measurement practice. Grounded in Bozkurt's (2024a) triadic 3wAI framework — Know What, Know How, Know Why — this study develops the Critical 3wAI Literacy Scale and validates it psychometrically for adult learners.

Data were collected in two independent waves via an online survey with an instructed-response attention-check item screening careless responders: 624 responses reduced to n = 546 after cleaning for the exploratory factor analysis, and 56 Mahalanobis-distance outliers removed to yield n = 647 for the confirmatory factor analysis. The EFA retained 18 of 25 items across a clean three-factor structure explaining 62.175% of total variance (Foundational Knowledge 38.487%, eigenvalue 6.928, α = 0.789; Practical Applications 15.439%, eigenvalue 2.779, α = 0.918; Critical Understanding 8.249%, eigenvalue 1.485, α = 0.874). In the CFA, the first item of the Foundational Knowledge factor (FK6, loading 0.342 < 0.40) depressed that factor's AVE below 0.50 (0.431) and was dropped, yielding the final 17-item model (CFA-2) with strong factor loadings (0.586–0.857), overall α = 0.913, and AVEs of 0.516–0.668 for the three factors.

## Key Findings

- **A validated three-factor structure.** EFA and CFA both confirm Foundational Knowledge, Practical Applications, and Critical Understanding as distinct dimensions of AI literacy — evidence against one-dimensional, checklist-style conceptions of digital competence in [[higher-ed]] and adult learning.
- **Sound structural model fit.** The final 17-item model met all examined thresholds: χ²/df = 4.93 (≤ 5), SRMR = 0.054 and RMSEA = 0.078 (≤ .08), NFI = 0.915, TLI = 0.919, CFI = 0.931 (≥ .90) — a model that fits the observed data acceptably by conventional standards.
- **Strong reliability after one item drop.** Overall Cronbach's α = 0.913; per-factor reliability in CFA-2 was α = 0.923 (Practical Applications), 0.865 (Critical Understanding), and 0.849 (Foundational Knowledge), with all loadings above 0.50 in the final model.
- **Discriminant validity holds.** HTMT ratios among the three factors (0.398, 0.544, 0.663) all sat below the conservative 0.90 threshold, so the dimensions are empirically distinct while overlapping conceptually — notably Practical Applications and Critical Understanding (HTMT = 0.544), the pair the authors read as evidence that using AI well is inseparable from using it ethically.
- **Theoretical knowledge alone doesn't guarantee practice.** The paper's central interpretive claim: knowing what AI is (Foundational Knowledge) does not automatically translate into practical efficacy, while operational competence (Know How) aligns closely with ethical consciousness (Know Why) — so AI-literacy instruction and measurement should treat these dimensions as jointly necessary rather than interchangeable.
- **Unrestricted instrument availability.** The authors explicitly release the scale for non-commercial research, academic inquiry, and educational evaluation without requiring prior authorization — a deliberate open-science choice against paywalled psychometric instruments.

## What this means for practice

- **Instructors.** Treat AI literacy as three teachable dimensions — knowing what AI is, using it effectively, and understanding why its use carries ethical weight — rather than a single skill checklist; the validation shows learners can be strong on one dimension and weak on another.
- **Instructors.** Sequence instruction so operational skill-building (prompting, tool selection) is paired with ethical reasoning (fairness, privacy, accountability) rather than taught in isolation, since the Know-How and Know-Why factors were the most closely coupled in the data (HTMT = 0.544).
- **Researchers.** Use the 17-item Critical 3wAI scale as a diagnostic benchmark for pre/post or cross-group comparisons of adult-learner AI literacy, but remember it is a self-report instrument: scores reflect perceived competence, not demonstrated performance.
- **Administrators / program designers.** The scale can serve as an input diagnostic for AI-literacy program planning — identifying which of the three dimensions a cohort lacks before choosing interventions — though the authors call for revalidation across age groups, education levels, and cultural contexts before wide institutional rollout.
- **Curriculum designers.** Note the item content itself as a blueprint: the Critical Understanding factor operationalizes ethics as algorithmic fairness, privacy and sensitive-data protection, transparency and accountability, human values, and human-in-the-loop oversight.

## Limitations

- Both samples are self-reported, cross-sectional, single-time-point surveys of adult learners recruited through online distribution — the authors state no country, institution-type, or demographic breakdowns in the validation reports, and the corresponding author is based in Türkiye, so cross-cultural generalizability is an open question the authors themselves flag.
- The scale measures perceived competence, not performance: no external criterion (task performance, observed behavior, or knowledge test) validates the scores, so it cannot establish that high scorers are actually more capable AI users — the same self-report vulnerability the paper cites against existing instruments.
- Careless-responder screening (instructed-response item, Mahalanobis outliers) cleaned the data post hoc rather than preventing inattentive responding during collection.
- The final 17-item model emerged from dropping one item (FK6, loading 0.342) on psychometric grounds — acceptable practice, but the item's content (theoretical AI knowledge) was the weakest-measured part of the Foundational Knowledge factor.
- Fit indices are acceptable rather than excellent (χ²/df = 4.93 near the 5 threshold; RMSEA = 0.078 near .08), and χ²/df is known to be sensitive to large samples like these.
- The authors disclose that the manuscript itself was reviewed and refined with the assistance of Anthropic Claude and Google's Gemini (versions as of June 2026).

## Citation

Bozkurt, A., Ertan, S., & Cömert, Z. (2026). [*What does it mean to be AI literate? Psychometric validation of the Critical 3wAI Literacy Scale*](https://doi.org/10.55982/openpraxis.18.4.1451). *Open Praxis*, 18(4), pp. 655–669. https://doi.org/10.55982/openpraxis.18.4.1451
