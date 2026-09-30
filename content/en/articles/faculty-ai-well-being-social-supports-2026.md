---
title: "Exploring University Faculty's AI Well-Being: A Structural Equation Model of Social Supports, AI Literacy, and Technological Self-Efficacy"
created: "2026-09-30T13:47:07-04:00"
updated: "2026-09-30T13:47:07-04:00"
type: article
sources: ['raw/papers/10.3390_bs16071168.md']
confidence: high
published: "2026"
page_kind: [evaluation]
research_method: [survey, structural equation modeling]
level: [higher ed]
audience: [administrators, faculty developers, researchers]
foundations: [ai-literacy, teacher-ai-competency, teacher-role, theories-and-frameworks, limitations-in-aied-research]
pedagogy: [self-determination-theory, self-efficacy, well-being, professional-training]
technology: [technology-acceptance-model, ai-technologies]
assessment: [self-report-measures]
methods: [quantitative-research]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
reviewed_by: [editor]
---

> **Synthesis:** Liu and colleagues tested a structural equation model of AI-related [[well-being]] among university faculty, drawing on a cross-sectional online survey of 523 respondents at one research-intensive Chinese university (502 valid responses, 96%). The model, built from social support theory and [[self-determination-theory|self-determination theory]], placed [[ai-literacy]] and technological self-efficacy as mediators between perceived social and organizational support and AI well-being. Social support predicted AI literacy (β = 0.435) and technological self-efficacy (β = 0.272); organizational support predicted both (β = 0.217 and β = 0.281); AI literacy was by far the strongest predictor of well-being (β = 0.713) against a modest self-efficacy path (β = 0.082). Because every construct was [[self-report-measures|self-reported]] at one time point, the paths describe association rather than established causal direction.

## Key Findings

- **Social support had the stronger link to AI literacy** — β = 0.435 (SE = 0.061, t = 7.590, p < 0.001), against β = 0.217 (SE = 0.064, t = 3.895, p < 0.001) for organizational support.
- **Organizational support was slightly the stronger predictor of technological self-efficacy** — β = 0.281 (SE = 0.060, t = 4.614, p < 0.001), against β = 0.272 (SE = 0.056, t = 4.415, p < 0.001) for social support.
- **AI literacy dominated the path to well-being** — β = 0.713 (SE = 0.039, t = 18.390, p < 0.001), while technological self-efficacy was significant but small — β = 0.082 (SE = 0.044, t = 2.174, p < 0.05).
- **Supports reached well-being only indirectly** — standardized indirect effects of 0.332 for social support and 0.178 for organizational support, equal to their total effects, so no direct support-to-well-being path was estimated.
- **The measurement model held up** — composite reliability from 0.881 to 0.966, average variance extracted from 0.644 to 0.851, and Cronbach's α from 0.921 to 0.966; Harman's single-factor test gave a first factor at 48.220%.
- **Fit was good** — χ2/df = 2.84, GFI = 0.92, NFI = 0.96, IFI = 0.97, TLI = 0.97, CFI = 0.97, and RMSEA = 0.06.

## How the study was run

The survey ran in January 2025 at one "Double First-Class" university in Beijing with 25 departments, roughly 3200 full-time faculty and over 40,000 students. Stratified random sampling invited faculty across engineering, social sciences, humanities and natural sciences; the authors were external researchers with no supervisory relationship to participants. The final sample was 53.78% female and 46.22% male, with 51.79% from engineering sciences, 27.29% from social sciences, 16.53% from humanities and arts and 4.38% from natural sciences. By rank, 56.97% held intermediate titles, 30.88% associate-level and 12.15% senior.

Five constructs were measured on five-point Likert scales: social support (8 items, α = 0.951), organizational support (7 items, α = 0.960), AI literacy (15 items adapted from UNESCO's 2024 framework, α = 0.953), technological self-efficacy (4 items, α = 0.921) and AI well-being (5 items built on the PERMA model, α = 0.966). Estimation used maximum-likelihood SEM in AMOS 26.0, with mediation tested by bias-corrected bootstrapping over 2000 resamples and 95% confidence intervals.

The AI well-being scale recorded the highest average variance extracted (0.851) and composite reliability (0.966), which the authors read as a particularly coherent measure but also flag as possible item redundancy across the five PERMA items.

## What the results suggest

The model tells a competence story: external support appears to matter for well-being mainly because it builds knowledge and confidence, not because encouragement directly lifts affect. AI literacy carried the largest coefficient in the model, and the authors argue this reflects something [[self-efficacy]] alone does not capture — conceptual understanding, ethical judgment and the ability to integrate AI into teaching, which together support autonomy and a sense of control.

The [[technology-acceptance-model]] tradition asks whether faculty intend to adopt a tool; this study asks how they adapt psychologically once AI is already embedded. The distinction matters because the strongest predictor is not confidence in operating technology but knowing what the technology is doing and how it should be used pedagogically. The authors also caution that the two constructs share conceptual ground: AI literacy dimensions such as pedagogy and [[educational-development|professional development]] sit close to well-being dimensions such as engagement, meaning and accomplishment, so the size of the 0.713 coefficient may be partly an artifact of that proximity, even though discriminant validity checks passed.

## What this means for practice

- **Faculty developers.** Target AI literacy rather than tool confidence: the literacy path to well-being (β = 0.713) dwarfed the self-efficacy path (β = 0.082). Sessions should build conceptual understanding, ethical reasoning and [[pedagogy|pedagogical]] integration, not just hands-on fluency with tools.
- **Institutional leaders.** Social and organizational support reached well-being only indirectly (0.332 and 0.178), so spending on infrastructure or collegial encouragement pays off through the competencies it actually produces — not as a direct well-being intervention.
- **Department heads.** Social support carried the larger coefficient for AI literacy (β = 0.435), so peer collaboration and visible leadership encouragement are not soft extras alongside formal training.
- **Program designers.** Read the two paths as complementary: organizational support slightly better predicted technological self-efficacy (β = 0.281), suggesting structured provision (infrastructure, policy, incentives) is the lever for confidence, while collegial networks are the lever for literacy.

## Limitations

- The cross-sectional design limits causal inference: all paths, including the strong AI literacy to well-being coefficient (β = 0.713), are associations measured at one time point, and the authors call for longitudinal or experimental work.
- Data came from a single research-intensive university in China, with 51.79% of the sample from engineering sciences, so findings may not generalize to teaching-oriented institutions, other disciplines or other systems.
- AI well-being was measured with five items and a very high Cronbach's α (0.966), which the authors flag as possible item redundancy and conceptual proximity to AI literacy.
- All measures were single-source self-reports collected at one time; Harman's test put the first factor at 48.220%, below the 50% threshold, but common method bias remains a stated concern.

## Citation

Liu, W., Li, Y., Yan, Y., Wang, J., Wang, J., & Zhang, H. (2026). [Exploring University Faculty's AI Well-Being: A Structural Equation Model of Social Supports, AI Literacy, and Technological Self-Efficacy](https://doi.org/10.3390/bs16071168). *Behavioral Sciences*, 16(7), 1168.