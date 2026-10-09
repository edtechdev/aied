---
title: "Generative AI use and the 2022–2025 decline in PISA performance across countries"
created: "2026-10-09T09:30:00-04:00"
updated: "2026-10-09T09:30:00-04:00"
type: article
foundations: [cognitive-offloading]
technology: [generative-ai, llm]
assessment: [educational-measurement, assessment-validity]
methods: [quantitative-research]
institutions: [educational-policy-ai]
ethics: [equity-in-ai-education]
sources: ['raw/papers/genai-pisa-decline-countries-2026.md']
confidence: high
research_method: [secondary analysis]
discipline: [math education, science education]
level: [secondary, k 12]
audience: [researchers, policymakers, instructors]
page_kind: [evaluation]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-09"
    agent: hermes-agent
---

> **Synthesis:** Guerra and Aslanov ask whether the countries where [[generative-ai]] spread furthest are the same ones whose 15-year-olds lost the most ground in PISA between 2022 and 2025. In a preregistered country-level study, four independent national AI-use measures correlated positively with 2025 achievement (r = 0.64 to 0.76) yet negatively with the 2022–2025 change, with all 12 correlations pointing the same way. The association with change was no longer detectable after adjusting for 2018 performance, before generative AI existed. Reading fell 14 points and mathematics 9 points over the period, and the spread of country means — stable since 2015 — narrowed by 6.8% to 8.5% as upper-middle performers lost ground. This is an ecological correlation: it shows that countries moved together, not that AI use caused any individual student's decline.

## Key Findings
1. **AI use tracked higher 2025 scores.** The Microsoft measure correlated r = 0.64 to 0.68, OpenAI rs = 0.60 to 0.69 and Anthropic r = 0.76 in every domain; the 34-country Eurostat measure gave only r = 0.17 to 0.25.
2. **AI use tracked larger 2022–2025 declines.** All 12 correlations were negative, including Microsoft r = −0.35 in reading, OpenAI rs = −0.38 in mathematics and Anthropic r = −0.29 in reading.
3. **Adjusting for 2018 erased the link.** Microsoft partial r fell to −0.07 to 0.01 and Anthropic to 0.09 to 0.10, with OpenAI and Eurostat estimates small and non-significant (PFDR ≥ 0.133).
4. **Before the pandemic there was no such association.** For 2015–2018 no measure correlated with the change in any domain (r or rs = −0.19 to 0.21, all PFDR ≥ 0.363), so high-AI countries were not already on a worse trajectory.
5. **The pandemic window showed a weaker, mathematics-heavy signal.** Between 2018 and 2022 the mean correlation was −0.21 against −0.28 for 2022–2025, significant in mathematics for two measures and in reading for one.
6. **Country means converged 2022–2025.** The standard deviation fell 6.8% in mathematics, 8.5% in reading and 7.4% in science, the smallest spread of four PISA cycles, against between-cycle ratios near 1.00 earlier.
7. **The narrowing came from the bottom and the upper-middle.** The lowest quarter changed 7.8 to 8.9 points more favorably than average, the upper-middle quarter 5.4 to 9.3 points less favorably, with gains concentrated in Georgia, Montenegro, Thailand and Jordan.

## What the study measured

Guerra and Aslanov ran a preregistered correlational study at the country level, using only publicly available secondary data on the 91 countries and economies — more than 760,000 students — that took PISA 2025. They related four independent national measures of [[generative-ai]] use to 2025 mean scores and to the reported 2022–2025 change in mathematics, reading and science. Three measures come from recorded product use: Microsoft's working-age user share, OpenAI's ChatGPT message ranks and Anthropic's Claude usage per capita. The fourth is a Eurostat adult [[self-report-measures|self-report]] treated as a regional replication. None describes adolescents; all proxy how far the tools had spread among adults. Twenty-four correlations formed the confirmatory tests, with a preregistered smallest effect size of interest of r = 0.30 and Benjamini–Hochberg control across families of three domains per measure. The design deliberately separates the level of performance from its change, because better-resourced countries both score higher and adopt AI more widely.

## The association that survived, and the one that did not

Hypothesis 1 was supported: more AI use went with higher 2025 scores, r = 0.64 to 0.68 for Microsoft, rs = 0.60 to 0.69 for OpenAI and r = 0.76 for Anthropic in every domain. Hypothesis 2 was also supported on the raw change scores — all 12 correlations were negative, and the Microsoft and OpenAI measures were significant in mathematics, reading and science. The authors then adjusted for each country's 2018 mean, before ChatGPT existed, and the association nearly vanished: Microsoft partial r = −0.07 to 0.01, Anthropic 0.09 to 0.10, with small negative OpenAI and Eurostat estimates that did not survive correction. Meanwhile the 2018 level itself predicted a larger later decline. Because AI use is strongly tied to performance level, adjusting for level also removes much of the AI variation, so the two analyses answer different questions rather than one defeating the other — a distinction central to [[assessment-validity]].

## Convergence and the pandemic alternative

A second finding is hard to explain by individual use alone. The spread of country means had been stable since 2015 (2015–2018 ratios 0.97, 0.98 and 1.01), then fell between 2022 and 2025 by 6.8% in mathematics, 8.5% in reading and 7.4% in science — the smallest spread in four cycles. Rankings barely moved (consecutive-cycle r = 0.97 to 0.99), so this was convergence, not reshuffling, and it runs opposite to the usual [[equity-in-ai-education|equity]] fear that AI would first widen gaps. The pandemic is the main rival explanation, but its signature differs: learning losses were larger in mathematics than reading and larger among disadvantaged students, which predicts the opposite pattern, and the spread did not change between 2018 and 2022. The authors read the period as layered — a longer digital-reading decline with generative AI adding new mechanisms of [[cognitive-offloading]] from late 2022.

## What this means for practice

- **Instructors.** Do not treat wider chatbot access as a benefit in itself: unrestricted GPT-4 access raised practice scores 48% but lowered later exam scores 17%, whereas a [[teacher-role|teacher]]-designed hint version raised practice 127% without harming the later exam.
- **Instructors.** Protect the tasks that build literacy: reading fell 14 points and mathematics 9 points from 2022 to 2025, and the largest declines were on items requiring long or multiple texts.
- **Policymakers.** Favor tools designed for learning over general-purpose [[conversational-ai|chatbots]], and pair any school rollout with evaluations that follow students over time, since country-level data cannot separate AI use from performance level.
- **Curriculum designers.** Build in chances to evaluate AI-generated information: students performed slightly better when frequent AI use came with such practice, which is less common among disadvantaged students.

## Limitations

- All four AI-use measures describe adults, not the 15-year-olds assessed; the study did not use PISA's own student AI-use index, partly because self-reports are hard to compare across countries.
- It is a correlational, ecological analysis: it cannot show that the students who used AI are the ones who declined, nor rule out other country differences that changed over 2022–2025.
- The Eurostat replication covered only 34 countries and could detect only correlations of about 0.48 or larger, so its null results are weak evidence against the hypotheses.
- Measures refer to 2025, and the number of countries is fixed by PISA participation, so the sample could not be enlarged to raise statistical power.
- The adjustment for 2018 performance, the placebo windows and the spread analyses were exploratory and not preregistered, so they carry more interpretive risk than the 24 confirmatory correlations.

## Citation

Guerra, E., & Aslanov, I. (2026). [Generative AI use and the 2022–2025 decline in PISA performance across countries](https://osf.io/asm8r). *PsyArXiv preprint*.
