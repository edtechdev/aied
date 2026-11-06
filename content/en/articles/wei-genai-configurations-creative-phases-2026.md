---
title: "Generative AI configurations across creative phases: a 2 x 2 experiment on creative performance and immediate knowledge in art and design education"
published: "2026-11-06"
created: "2026-11-06T09:05:00-05:00"
updated: "2026-11-06T09:05:00-05:00"
type: article
sources: ['raw/papers/wei-genai-configurations-creative-phases-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1971021"
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [arts education, design education]
level: [higher ed]
audience: [instructors, curriculum designers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4-flash-0731
    role: drafting
    date: "2026-11-06"
    agent: hermes-agent
source_depth: full text
pedagogy: [creativity]
technology: [generative-ai, multimodal]
foundations: [design-thinking]
assessment: [learning-gains]
methods: [quantitative-research]
---
> **Synthesis:** As [[generative-ai|generative AI]] tools move into creative classrooms, the question has shifted from whether to use them to which configuration helps at which stage of the creative process. This randomized 2 x 2 experiment assigned 120 art and design students (30 per condition) to four AI sequences — Text-to-Text, Text-to-Image, Image-to-Text, Image-to-Image — across divergent exploration and convergent development. Text-based AI during divergence produced higher divergent creative performance than image-generative AI (mean difference = 0.823, Holm-adjusted p < 0.001), whereas image-generative AI during convergence improved Aesthetic Quality only at the unadjusted level (difference = 0.493, p = 0.026). The hypothesized Text-to-Image sequence did not significantly outperform alternatives in Overall Creative Performance (contrast = 0.066, p = 0.671) but did raise baseline-adjusted immediate post-task knowledge (contrast = 1.478, 95% CI [1.050, 1.906], p < 0.001). The findings reposition [[creativity]], [[design-thinking]], and [[learning-gains]] within an outcome-contingent view of AI orchestration for [[arts-design-and-media-education|art and design education]].

## Key Findings
1. In a randomized 2 x 2 between-subjects experiment, 120 art and design students (30 per condition) completed a standardized cultural-heritage chromatic reconstruction task.
2. The four configurations were crossed across divergent exploration and convergent development, with primary hypothesis tests evaluated using Holm correction.
3. Text-based AI during divergence produced higher divergent creative performance than image-generative AI (mean difference = 0.823, Holm-adjusted p < 0.001).
4. Image-generative AI during convergence yielded higher Aesthetic Quality at the unadjusted level (difference = 0.493, p = 0.026), but not after Holm correction (adjusted p = 0.052).
5. The hypothesized Text-to-Image sequence did not significantly outperform alternatives in Overall Creative Performance (contrast = 0.066, p = 0.671), and the factorial interaction was nonsignificant (p = 0.541).
6. Text-to-Image achieved higher baseline-adjusted immediate post-task knowledge scores (contrast = 1.478, 95% CI [1.050, 1.906], p < 0.001), with no significant cross-phase interaction (p = 0.404).

## The phase-matching hypothesis

[[creativity|Creative work]] is commonly parsed into divergent exploration, which expands the space of possible ideas, and convergent development, which evaluates and refines them into a finished product — the core of [[design-thinking|design thinking]] models such as the Double Diamond. The phase-AI matching hypothesis held that dialogic, text-based AI fits divergent thinking, because linguistic dialogue lets students question assumptions and elaborate ideas without committing to visual form, whereas image-generative AI fits convergent development, because generated images externalize, compare, and refine visual outcomes. The authors framed this as a prediction — generative AI can also induce fixation or constrain ideational diversity — and distinguished phase-specific advantages from the stronger claim that combining configurations improves the final product.

## A 2 x 2 experiment on chromatic reconstruction

The experiment used a fully crossed 2 x 2 between-subjects design: the first factor was the AI configuration used during divergent exploration (25 min) and the second the configuration during convergent development (30 min), using GPT-5.6 Sol in text-only mode and GPT Image 2. All 120 participants completed the same Tang-dynasty sancai camel task with identical materials, working time, and output requirements; conditions represented bundled modality-interaction configurations rather than isolated manipulations of modality. Expert judges, blinded to condition, rated ideas and final artworks on 7-point scales. Primary tests were a planned sequence contrast, factorial models, and an ANCOVA with baseline knowledge as covariate, with Holm correction across the four hypotheses.

## Phase-specific results, no sequence advantage

Results differed by phase and outcome. During divergence, [[student-ai-interaction|students using text-based AI]] scored substantially higher on the Divergent Creative Performance Index (M = 0.411 versus -0.411; mean difference = 0.823, Holm-adjusted p < 0.001), with advantages on Idea Fluency, Flexibility, and Originality. During convergence, image-generative AI raised Aesthetic Quality only at the unadjusted level (difference = 0.493, p = 0.026; adjusted p = 0.052). Critically, the phase-matched Text-to-Image sequence did not beat the alternatives in Overall Creative Performance (contrast = 0.066, p = 0.671; interaction p = 0.541), so local phase gains did not compound into product-level improvement. Yet Text-to-Image produced higher immediate post-task knowledge scores (contrast = 1.478, 95% CI [1.050, 1.906], p < 0.001), with both phase main effects significant and no cross-phase interaction (p = 0.404).

## What the design can and cannot claim

The authors interpret these results as an outcome-contingent account of [[human-ai-collaboration|human-AI collaboration]] in creative education rather than a validated sequence. Because AI modality was bundled with interaction style, interface affordances, and potential response-time differences, the study cannot isolate the causal contribution of linguistic versus visual representation. The knowledge result is likewise bounded: [[assessment|assessments]] were administered immediately after the task, internal consistency was low (Cronbach's alpha = 0.304 for Form A and 0.264 for Form B), and 50.0% of Text-to-Image participants scored seven or eight points, indicating weak upper-end discrimination. Phase-specific advantages should therefore inform provisional, outcome-evaluated instructional choices rather than fixed prescriptions.

## What this means for practice

- **Instructors.** Use dialogic text-based AI during divergent exploration — fluency, flexibility, and originality all improved (mean difference = 0.823) — but do not assume phase gains compound into a superior final product.
- **Curriculum designers.** Treat text-then-image sequencing as a provisional design hypothesis: it predicted immediate post-task knowledge (contrast = 1.478) but not Overall Creative Performance (contrast = 0.066), so match tools to the outcome you intend to move.
- **Researchers.** Report creative and knowledge outcomes separately, and test adaptive or educator-directed orchestration directly; the fixed sequences examined here do not evaluate it.

## Limitations

- A single cultural-heritage task and 120 students recruited in Chongqing limit generalization to other creative domains and settings.
- AI modality was bundled with interaction style, interface features, and generation-time characteristics, so isolated effects of representational modality could not be disentangled.
- The knowledge assessments showed limited reliability (Cronbach's alpha = 0.304 for Form A, 0.264 for Form B) and weak item discrimination.
- Sample size was planned to detect an H3 contrast of approximately d = 0.60, so the nonsignificant sequence contrast does not rule out smaller effects.
- Knowledge was measured immediately after the task, with no delayed retention or [[transfer-of-learning|transfer]] measures.

## Citation

Wei, Y., & Li, S. (2026). [*Generative AI configurations across creative phases: a 2 x 2 experiment on creative performance and immediate knowledge in art and design education*](https://doi.org/10.3389/fpsyg.2026.1971021). Frontiers in Psychology, 17:1971021.
