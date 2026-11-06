---
title: "Leveraging Interview-Informed LLMs to Model Survey Responses: Comparative Insights from AI‑Generated and Human Data"
created: "2026-11-05T20:00:00-05:00"
updated: "2026-11-05T20:00:00-05:00"
type: article
sources: ['raw/papers/zhang-interview-informed-llms-survey-response-modeling-2026.md']
confidence: medium
page_kind: [evaluation]
research_method: [secondary analysis]
audience: [researchers]
level: [adult learning]
technology: [generative-ai, llm, simulating-students, prompt-engineering]
assessment: [educational-measurement, self-report-measures]
methods: [mixed-methods-research, ai-assisted-educational-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Zhang, Liang, Deng, Bonge, Tan, Zhang and Zarrett test whether [[llm|large language models]] told to impersonate a real person — using that person's own interview transcript and demographics in the prompt — can reproduce their [[self-report-measures|survey responses]]. Using the 15-item Behavioral Regulation in Exercise Questionnaire (BREQ) and semi-structured interviews from 19 after-school program staff, three models (GPT-4.1, Gemini 2.0 Flash, Claude 3.7 Sonnet) generated responses under 24 prompt-by-temperature conditions. Interview content improved alignment and diversity for some models while demographics added little, and although the models captured overall response patterns they produced less variable responses than humans and could not reconstruct the survey's test-level psychometric structure — a result the authors position as a triangulation aid for [[mixed-methods-research|mixed methods]] rather than a replacement for human respondents.

## Key Findings

1. **The sample paired qualitative and quantitative data for 19 people.** From 55 after-school program staff and directors interviewed across 10 programs serving underserved youth in the Southeastern United States (2023–2024), 19 completed both a semi-structured interview (15–25 minutes each) and the BREQ. The 19 had a mean age of 35.5 years (range 18–61); 84.2% (n = 16) identified as female and 68.4% (n = 13) as Black.
2. **The design crossed 3 models, 4 prompts, and 2 temperatures.** The 3 (chatbots) × 4 (prompts) × 2 (temperature settings) design used temperature 0 (low) and 0.5 (high), generating one response per participant per item per condition — 6,840 total observations (24 × 19 × 15).
3. **Models captured the overall pattern but overshot the extremes.** All three models reproduced the item-mean shape (items 1–7 lower than items 8–15) yet generated more extreme responses than humans, and response variances were much lower than human variances under all conditions. Higher temperature (0.5) and interview-containing prompts both raised variance for some models.
4. **Interview data beat demographics for alignment.** Prompts containing the personal interview (Prompts 2 and 4) correlated more strongly with human responses than the baseline (Prompt 1) and the demographics-only prompt (Prompt 3); adding demographics to an interview prompt (Prompt 4 vs Prompt 2) produced minimal improvement.
5. **Model choice mattered, with claude aligning best.** claude showed the highest correlations with humans for all four prompts and the lowest item-level RMSEs, followed by gpt, with gemini lowest; LLM–human correlations ranged from medium to high (ρ = .5 to .73), and prompt setting (F(3,17) = 16.657, p < .001) and temperature (F(1,17) = 8.133, p = .011) both significantly affected correlations among the three models.
6. **Negatively worded items were the hardest to reproduce.** Items 6, 7, and 11 — "I feel ashamed when I miss an exercise session", "I feel like a failure when I haven't exercised in a while", and "I get restless if I don't exercise regularly" — showed the highest item-level RMSEs, which the authors attribute to their negative emotional words.
7. **Interviews helped identify which respondents and which structure LLMs miss.** Interview length did not significantly predict person-level error (r = .404, p = .086), and at the test level only claude with Prompts 2–4 improved alignment on the relative autonomy index — so models could mimic individual items without reconstructing the scale's weighted psychometric structure.

## How the simulation study was built

The study treats interview-informed LLM responses as an analytical tool for evaluating qualitative and quantitative data, following the convergence design model of mixed-methods research. The BREQ is a 15-item, 6-point Likert measure of exercise motivation covering four subscales: external, introjected, identified, and intrinsic regulation. For each participant the authors built four prompt variants from four components — research background, item information (wording plus the 6-point response scale), the participant's de-identified personal interview transcript, and demographic information (age, race/ethnicity, gender). Prompt 1 (research background and item information only) served as the baseline; Prompt 2 added the interview, Prompt 3 added demographics, and Prompt 4 combined all four components. Because Prompt 1 carries no person-level content it was run once per participant so all conditions could be compared against the same 19 humans.

Prompt length varied with content: Prompt 1 used 1,276 tokens, Prompts 2 and 3 averaged 5,917 tokens (range 3,190–9,641), and Prompt 4 averaged 5,952 (range 3,227–9,676). The authors note that length does not equal richness, since Prompts 2 and 4 vary by their person-level content. Alignment was quantified at three levels: item-level RMSE, person-level RMSE, and test-level RMSE computed on the relative autonomy index, a weighted composite of the four subscale scores.

## What the models captured and where they diverged

The headline consistency result is that post-trained LLMs reproduce the central tendency of human survey responses: item means tracked the human pattern across prompts and temperatures, and gpt and claude correlated most closely with each other (ρ = 0.92 to 0.95), with correlations slightly higher at temperature 0 and for prompts carrying interview data. The divergence findings are the more instructive ones. LLM-generated responses were systematically less diverse than human responses — variance was lower in every condition — and the models pushed extreme items further toward their poles, rating already-low items lower and already-high items higher. On the negative-emotion items (6, 7, 11) the LLMs produced extreme means where humans gave moderate ones, a pattern the authors read as evidence that either the items or the interview questions fail to capture true attitudes, or that models respond to emotionally valenced tokens as surface cues.

Person-level results reinforce the interview-first conclusion. Two respondents (IDs 2111 and 2303) aligned best with the models under the interview prompts, and the null correlation between interview token count and person-level error suggests relevance of content rather than length drives alignment — though the small sample (n = 19) leaves that claim inconclusive. Finally, the test-level result is the sharpest limitation: because the relative autonomy index requires theoretical knowledge of how the four subscales relate, and only claude with Prompts 2–4 improved on it, the authors conclude that item-level mimicry does not extend to the test's psychometric structure. The R code and supplementary materials are available on the OSF platform.

## What this means for practice

- **Mixed-methods researchers.** Use interview-informed LLM responses as a diagnostic bridge between narrative and questionnaire data: the models flagged the negatively worded items (6, 7, 11) as the points where interviews and self-reports diverge, which is exactly the review signal qualitative–quantitative triangulation is meant to produce.
- **Researchers generating synthetic survey data.** Plan for restricted variability: LLM responses were less diverse than human responses in every condition, so raising temperature (0.5) and including real interview content in the prompt are the levers that partially restore diversity, for some models, without fixing it.
- **Prompt designers.** Prioritize person-level content over demographics when building respondent personas: interview prompts beat the demographics-only prompt on alignment with humans, and adding demographic information on top of an interview (Prompt 4 vs Prompt 2) produced minimal gain.
- **Measurement specialists.** Do not treat LLM-generated responses as psychometric data: item-level mimicry did not reproduce the BREQ's weighted composite structure (only claude with Prompts 2–4 improved test-level alignment on the relative autonomy index), so validation against real respondents remains necessary.

## Limitations

- The analysis sample is small (n = 19) and domain-bound: one instrument (BREQ), 19 after-school program staff, and one point in time for each model version, so the interview-length null (r = .404, p = .086) may reflect limited power rather than a true absence of effect.
- Each condition produced one realization per participant and item rather than repeated draws, so the deterministic (temperature 0) versus stochastic (temperature 0.5) comparison does not characterize the full sampling distribution.
- The four prompts confound content with length (1,276 versus 5,917 and 5,952 average tokens), so the contribution of individual prompt components cannot be fully separated.
- LLM outputs may carry training-data biases and arise from decision mechanisms that differ from human cognition, and both human survey responses and interview-informed LLM responses are imperfect proxies for the latent constructs of interest.
- Results reflect three specific commercial models (GPT-4.1, Gemini 2.0 Flash, Claude 3.7 Sonnet) at the time of the study, and prompt wordings were limited to four structurally similar variants.

## Citation

Zhang, J., Liang, X., Deng, A., Bonge, N., Tan, L., Zhang, L., & Zarrett, N. (2026). *Leveraging Interview-Informed LLMs to Model Survey Responses: Comparative Insights from AI-Generated and Human Data*. *Journal of Educational Data Mining*, 18(1), 1-24.
