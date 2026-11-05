---
title: "Examining AI interaction profiles in generative AI supported fraction division problem posing"
published: "2026-11-04"
created: "2026-11-05T09:05:00-05:00"
updated: "2026-11-05T09:05:00-05:00"
type: article
sources: ['raw/papers/incikabi-fraction-division-problem-posing-genai-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.1946583"
confidence: medium
page_kind: [evaluation]
research_method: [user study]
discipline: [math education]
level: [higher ed, teacher education]
audience: [instructors, faculty developers, curriculum designers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-05"
    agent: hermes-agent
source_depth: full text
pedagogy: [problem-solving]
technology: [generative-ai, llm]
assessment: [learning-gains]
methods: [mixed-methods-research, qualitative-research]
---

> **Synthesis:** Incikabi asked 57 pre-service [[math-education|mathematics]] teachers to pose a fraction-division problem unaided and then a second one with Gemini, and scored both against a rubric that separates general-mathematical quality from content-specific meanings of fraction division. AI-supported problems scored higher overall (6.65 against 5.95), but the gain was concentrated where a model can help most: context and language improved, while problem type and solvability did not move because they had almost no room to. Coding the interaction logs produced three profiles — AI-Reliant, AI-Collaborative and AI-Assistant — and the differences between them were not statistically reliable at this sample size. The paper's value is the scoring instrument and the honest negative result, not a claim that AI improves [[problem-solving|problem posing]].

## Key Findings

1. **AI-supported problems scored higher overall.** Total rubric score rose from 5.95 to 6.65 out of a possible 8 (Δ = 0.70), t(56) = −6.44, p < 0.001, on problems posed for the same operation, 4/5 divided by 2/3.
2. **The gain came from context and language.** Context scores rose from 1.44 to 1.60 (p = 0.002) and language from 1.63 to 1.74 (p = 0.013), both of which are the dimensions an [[llm|LLM]] is built to produce.
3. **Content-specific meaning-use improved, from a floor.** Invocation of fraction-division meanings rose from 1.00 to 1.37 (t(56) = −4.51, p < 0.001), a gain from a baseline where every participant scored exactly the minimum.
4. **Structural quality did not improve.** Problem type (p = 0.322) and solvability (p = 0.083) were unchanged, and the paper attributes that to ceiling effects, since baselines were already 0.98 and 0.89 out of 1.
5. **Three interaction profiles emerged, and they did not differ significantly.** AI-Assistant was the largest group at 40.35%, followed by AI-Reliant at 33.33% and AI-Collaborative at 26.32%; every one-way comparison returned p ≥ 0.061.
6. **The dialogic group gained least on general quality.** AI-Collaborative participants showed a general-mathematical gain of 0.07 against 0.43 for AI-Assistant and 0.42 for AI-Reliant, a descriptive reversal the authors flag rather than interpret.

## What the rubric separates

Most problem-posing research scores whether a problem is well formed. This rubric splits the judgment in two. General-mathematical criteria cover problem type, solvability, context and language; content-specific criteria cover whether the posed problem actually invokes a meaning of fraction division — measurement, partitive or quotitive — that the operation supports. A problem can be perfectly worded and invoke nothing.

That split is what produces the interesting pattern. Gemini reliably improved the surface: richer contexts, cleaner phrasing. It did not improve, and in the constrained conditions could not improve, the structural properties that were already near ceiling. The content-specific gain is the one that matters for teacher education, because invoking a meaning is the part of problem posing that pre-service teachers most often miss, and it moved from a floor of 1.00 to 1.37 on a scale where the ceiling is presumably higher.

## Profiles without power

The [[qualitative-research|qualitative]] strand coded prompt–response sequences into three profiles. AI-Reliant participants accepted output largely as given; AI-Collaborative participants went back and forth dialogically; AI-Assistant participants used the model for a bounded part of the task and did the rest themselves. Descriptively, the AI-Assistant group produced the highest total quality (7.00) and the largest gains (0.91), and the AI-Collaborative group the smallest general-mathematical gain (0.07).

The paper then does something that is rarer than it should be: it declines to claim the pattern. With 15 to 23 participants per profile, the omnibus tests had roughly 0.36 power to detect a medium effect, and pairwise comparisons could only detect differences around d = 0.89 to 1.00. The non-significant result is reported as insufficient power, not as equivalence. Anyone citing this study for "collaborative AI use works best" would be citing a hypothesis.

## Design boundaries worth stating

The independent-to-AI sequence was fixed, with no counterbalanced order and no comparison group that posed a second problem unaided. That single decision means the gains cannot be attributed to the tool: repeating the same operation, growing familiar with the task and consolidating the preceding training all predict improvement on a second attempt. The authors name this as a central limitation rather than burying it.

Everything also rests on one numerical structure, 4/5 divided by 2/3, chosen for its conceptual richness but still one instance; 57 pre-service teachers from one [[teacher-education|teacher-education]] program; and one model, Gemini, accessed in a version the paper identifies as GGpro.

## What this means for practice

- **Score the mathematics, not the wording.** A model will improve context and phrasing on request; check whether the posed problem invokes a specific meaning of the operation, because that is the part it does not fix for you.
- **Do not read a second attempt as an AI effect.** Without a no-AI comparison group, practice and familiarity explain part of any gain, so build a control condition into your own classroom evaluation.
- **Watch for ceiling effects before crediting an intervention.** Two of four general criteria were already at 0.98 and 0.89 out of 1 at baseline, leaving no room to detect change.
- **Faculty developers.** The three profiles are a usable discussion prompt for methods courses even though the study cannot rank them: ask pre-service teachers which profile their own last AI session matched.
- **Curriculum designers.** If the goal is conceptual meaning-making rather than production of polished items, the tool needs prompts that force the meaning decision rather than the wording.

## Limitations

- **No counterbalanced order or control group.** Every participant posed independently first and with AI second, so phase effects cannot be separated from tool effects.
- **One numerical structure.** All problems concerned 4/5 divided by 2/3, chosen deliberately but limiting generalization to other fraction forms.
- **Small, unequal profile groups.** 15 to 23 participants per profile and about 0.36 power for a medium effect, so the profile comparisons are inconclusive rather than null.
- **Profiles came from prompt logs only.** Silent reasoning, hesitation and unrecorded decisions are not captured, and the coding was done by the research team.
- **One teacher-education program and one model.** 57 pre-service teachers using a single version of Gemini.

## Citation

Incikabi, S. (2026). [*Examining AI interaction profiles in generative AI supported fraction division problem posing*](https://doi.org/10.3389/fpsyg.2026.1946583). Frontiers in Psychology, 17.
