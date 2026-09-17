---
title: "MUSE: Benchmarking Large Vision-Language Models on Multi-Modal Understanding in Situated Education"
type: article
created: "2026-09-17T09:40:00-04:00"
updated: "2026-09-17T09:40:00-04:00"
tags: [multimodal, benchmark, language-learning, affective-computing, arts-design-and-media-education, culturally-relevant-pedagogy, situated-learning, equity-in-ai-education, llm]
sources: ['raw/papers/muse-vlm-artistic-image-benchmark-2026.md']
confidence: high
research_method: [benchmark]
discipline: [language learning]
audience: [researchers, edtech designers]
category: [evaluation]
---

> **Synthesis:** Image-based language education asks a [[multimodal|vision-language model]] to do more than name objects: it must read a painting's scene, its mood, the visual evidence behind that mood, and the cultural references an artist encoded in it. MUSE evaluates exactly those capabilities with 12 tasks over 1,174 commissioned artworks and 2,400 questions, built by an annotation-first design that decouples a reusable structured annotation of each image from rule-based [[automated-question-generation|question generation]]. Across 30 [[open-source]] and proprietary models the result is a sharply uneven profile: scene classification is near-mature (23 of 30 models above 75.0, median 81.0), while [[affective-computing|emotion interpretation]], viewpoint-dependent spatial reasoning and compositional assembly remain far below human performance, and no model resolves all three spatial dimensions of a single item correctly. Errors cascade — a mis-grounded character is then explained with a fluent, confident justification — which is precisely the failure mode an [[intelligent-tutoring|AI tutor]] cannot afford when the [[language-learning|language]] task is to make sense of an image together with a learner.

## Why artistic imagery is a distinct evaluation target

Vision-language models are increasingly the perception layer of situated education: tutoring, [[ai-feedback-quality|automated feedback]], and multi-modal content interaction all assume a system can interpret instructional images and connect what it sees to meaningful language. Image-based language learning makes the assumption heavy, because artworks prompt vocabulary use, description, narrative construction, emotional expression and cultural discussion simultaneously — the same image must support question formulation, response assessment, explanation of linguistic concepts and appropriate feedback.

Artistic images are also unlike the natural photographs that dominate evaluation. They are stylized or exaggerated in form, non-photorealistic in color, implicit in narrative, and culture-dependent in their cues. Existing benchmark [[parents-and-families|families]] cover general multi-modal understanding (MMBench, SEED-Bench, MMMU, MMStar, MMMU-Pro), scientific and mathematical reasoning (ScienceQA, MathVista) and art or affect in isolation (ArtEmis, ArtELingo, VQArt-Bench, AICA-Bench, CVQA) — but not the joint capability profile that image-based language education requires. That gap is the paper's motivation, and it matters for practice because performance on natural-image [[benchmark|benchmarks]] is not evidence that a model can read the picture a [[teacher-role|teacher]] actually put in front of a class.

## Construction: annotation-first, task-generative

MUSE's [[research-methods-aied|methodological]] contribution is its build order. Instead of annotating question-answer pairs per image, each artwork is annotated once into a reusable structured representation of its visual and semantic content — activity, character and object bounding boxes, emotion, object and position labels, activity descriptions, scene and cultural labels, object counts, visual clues and emotion causes — and task-specific questions are then instantiated from predefined generation rules. Decoupling *what an image contains* from *how a capability is queried* buys annotation reuse, consistent semantics across tasks, and explicit control over question form and difficulty. It is a direct answer to the practice of collecting task-specific questions per image, which is expensive to extend and inconsistent across tasks.

The corpus is 1,174 images at 1920×1080 resolution and 2,400 questions. Images were commissioned from freelance artists at roughly USD 36 each, and diversity was enforced along three axes: artistic styles (through diverse artists), scene themes, and question difficulty. Cultural coverage is deliberately Southeast Asian and Singaporean first (37.5% Singaporean/Malaysian, 28.5% Western/European, 8% Chinese, 5% Japanese, 5% American, with smaller South Asian, Southeast Asian, Islamic, African, Oceanian and mixed categories); scene themes run from recreational and entertainment spots (19.0%, 38 examples) through shopping and retail (7.5%) and natural and outdoor settings (7.0%) down to healthcare facilities (1.0%). This is a deliberate response to the representational problem in [[culturally-relevant-pedagogy|culturally relevant]] evaluation data, and it makes cultural identification a scored task rather than an uncontrolled covariate.

Annotation quality control was procedural rather than statistical: 127 [[higher-ed|undergraduate]] and postgraduate annotators completed a 0.5-hour briefing on task definitions, guidelines and ambiguous cases, then annotated through a standardized Label Studio Enterprise interface, spending approximately 3–4 minutes per image (the paper reports this as roughly 4 hours of annotation work) and paid USD 16 per hour. Every sample was independently annotated by one annotator, reviewed by two others, and finalized only after consensus, with disagreements resolved against the written guidelines.

## Twelve tasks across five capability dimensions

The task suite spans five declared dimensions — visual perception, semantic understanding, affective interpretation, compositional reasoning and cultural understanding — arranged across three cognitive complexity levels (low-level pattern recognition, mid-level semantic perception, high-level reasoning) and three spatial granularities (pixel-, crop- and image-level). Most tasks are textual or visual multiple choice; Object Count requires numerical prediction; Visual Clue Identification and Emotion Cause Inference are open-ended and scored by semantic similarity.

Four tasks form a deliberate four-turn affective sequence with earlier turns retained in the dialogue history: Object Classification, Emotion Detection, Visual Clue Identification ("describe the observable visual clues that support the previously identified emotion") and Emotion Cause Inference. This is the design feature that distinguishes MUSE from a recognition benchmark: two of its tasks require the model to articulate and ground its own prior judgment rather than select an option, which mirrors what an AI tutor must actually produce when it explains a learner's reading of an image.

The remaining tasks target specific grounding demands: Activity Localization (select the box matching a described activity, against distractors that include subregions, other activities, objects and "none of the above"), Activity Description (ten negative-option strategies including descriptions shifted in object order or concatenated from one, two or three activities), Cultural Identification (15 culture categories derived by clustering ground-truth labels with OpenAI `text-embedding-3-small`), Jigsaw Puzzle (five segmentation grids, pieces varied in shape and orientation), Object Count (counts under occlusion and size variation), Relative Position (three-dimensional relations from characters' viewpoints), Remote Interaction (two linked multiple-choice questions: which entity interacts, and what visual evidence supports it) and Scene Classification (13 scene categories).

## Key Findings

1. Across 30 models the profile is highly task-dependent, with no model dominating every capability: GPT-5.6-Sol leads overall and beats GPT-4o on 10 of 12 tasks, yet GPT-4o is better at Activity Description and Relative Position; Qwen3-VL-32b leads Activity Localization and Scene Classification, InternVL3-14b is best at Relative Position, and GLM-4V-9b is best at Jigsaw Puzzle.
2. Recognition is far more mature than integration: Scene Classification has 23 of 30 models above 75.0 with a median of 81.0, whereas Emotion Detection, Relative Position, Remote Interaction and Jigsaw Puzzle show substantially lower medians.
3. Affective interpretation is the clearest bottleneck. GPT-5.6-Sol reaches only 39.5 on Emotion Detection, and the strongest scores on Visual Clue Identification (50.90) and Emotion Cause Inference (49.18) stay near chance in semantic-similarity terms — performance on character recognition or emotion classification does not transfer to evidence grounding or causal explanation.
4. Spatial reasoning under ambiguity fails in both directions: where the ground truth specifies no definite lateral or vertical relation, 90.0% and 73.3% of models nevertheless assert one, only 43.3% correctly place the girl in front of the boy in depth, and no model resolves all three dimensions correctly.
5. Scaling is non-monotonic within families: InternVL3-38b beats InternVL3-14b on most tasks but is worse on Activity Description and Relative Position, so stronger coarse recognition does not translate uniformly.
6. Against a human baseline of 20 sampled questions per task answered by two annotators, the human average forms the outer envelope on nearly all tasks, with the largest deficits in Relative Position, Emotion Detection and Jigsaw Puzzle and the narrowest gaps in Activity Localization, Object Count, Remote Interaction and Scene Classification.
7. MUSE measures related but non-redundant capabilities. Object Count, Emotion Detection and Scene Classification correlate strongly, Visual Clue Identification tracks Emotion Cause Inference, and Jigsaw Puzzle correlates weakly with most tasks (ρ = 0.25 with Relative Position down to −0.10 with Emotion Detection); on 6 external benchmarks, MMBench and AI2D correlate strongly with several MUSE tasks, BLINK correlates inconsistently (BLINK Jigsaw vs. MUSE Jigsaw ρ = −0.20), and Activity Description and Relative Position are underrepresented in existing benchmarks.
8. Response-format reliability is a separate concern from accuracy: most models stay below 1% invalid responses, but Yi-VL-6b and DeepSeek-VL2-Tiny exceed 12%, and GPT-5.6-Sol retains a 2.62% invalid rate despite strong task performance.
9. Performance falls along the taxonomy the benchmark itself declares: image-level understanding is consistently strongest, pixel-level weakest, and low- and mid-level tasks outperform high-level reasoning.

## Failure modes: grounding, forced relations and cascading affect errors

The error analysis is more instructive than the leaderboard. In Activity Localization, models usually select semantically relevant people or activities rather than random regions but fail to identify the complete target extent; in Activity Description, errors concentrate on co-occurring or concatenated activities, showing weak separation of the queried event from nearby visual semantics; in Remote Interaction, mismatched region-text pairs dominate, meaning models accept plausible relations without verifying that entities, regions and evidence are jointly aligned. The shared diagnosis is coarse semantic relevance without precise region-activity binding.

Affect errors then cascade from grounding. In one worked case, GPT-5.6-Sol correctly identifies the target man and attends to relevant cues but misreads his stylized expression as Surprise — an interpretation error rather than a localization failure. Other models shift attention to a salient child, predict Joy, and justify the prediction with butterflies, birds or nearby interactions. Errors in coordinate grounding and depth assignment lead models to construct a coherent explanation for the wrong character, which is the pattern most likely to mislead a learner in an educational deployment, because the explanation is fluent and confident while the premise is wrong.

## What this means for practice

Three implications follow for anyone deploying vision-language models in picture-based instruction. First, capability claims should be dimension-level, not aggregate: a model that is reliable at scene and activity recognition is not thereby reliable at [[assessment|assessing]] a learner's emotional or cultural reading of an image, and a single benchmark score conceals that difference. Second, the recurring region-activity binding failure argues for a grounding checkpoint in tutoring flows — have the system state what it sees, and where, before it reasons from it — the same design move that recovers accuracy in multimodal tutoring on diagrams. Third, cultural and affective interpretation should be validated on the specific imagery a course actually uses, because emotion reasoning on conventional visual content only partially transfers to stylized expressions and implicit narratives in artworks.

The paper is explicit about what its evidence does and does not cover. MUSE measures model capability on a curated, commissioned corpus; it reports no learner outcomes, no classroom deployment and no tutor-dialogue evaluation, and the human reference point is a small sample (20 questions per task, two annotators). Its value lies in documenting, at benchmark scale, where current [[multimodal]] perception is mature and where it is not — and in supplying a reusable construction pipeline others can extend without re-annotating every image from scratch.

## Connected Concepts

- [[multimodal]] — Vision-language capability boundaries, the page's central concern
- [[benchmark]] — Annotation-first, task-generative benchmark construction
- [[language-learning]] — The image-based language-learning setting the tasks target
- [[affective-computing]] — Emotion detection, evidence grounding and cause inference
- [[arts-design-and-media-education]] — Artworks as instructional material
- [[culturally-relevant-pedagogy]] — Cultural identification as a scored capability
- [[situated-learning]] — Evaluation framed as situated educational interaction
- [[equity-in-ai-education]] — Uneven reliability across imagery and learner populations
- [[llm]] — The evaluated model family
- [[creativity]] — Jigsaw puzzle and compositional assembly as a distinct capability

## Connected Articles

- [[syal-multimodal-dialogue-stem-2026]] — The Multimodal Interference Effect and structured-dialogue recovery in STEM
- [[drawedumath-vlm-struggling-students-2026]] — VLM performance on handwritten student math work (DrawEduMath, Lucy et al. 2026)
- [[cvengros-grading-handwritten-chemistry-ai-2026]] — Format-dependent limits of multimodal grading in handwritten chemistry
- [[multimodal-ai-tutoring]] — Multimodal AI tutoring in STEM and the error taxonomy
- [[geovad-bench-visual-chain-of-thought-geometry-2026]] — Diagnosing intermediate visual constructions rather than final answers
- [[cfes-p24-multimodal-slide-auditing-2026]] — Construct-level auditing of multimodal LLM instructional judgments
- [[omniphys-multimodal-physics-benchmark-2026]] — Multimodal physics benchmark for model evaluation
- [[mllm-scientific-visualization-literacy]] — Multimodal LLM literacy for scientific visualization
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — Multimodal AI composing and critical thinking in primary writing
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analysis of embodied robot-assisted language learning

## Citation

Zhu, L., Yee, X. W., Li, W., Mak, M. T., & Ng, W. S. (2026). [*MUSE: Benchmarking Large Vision-Language Models on Multi-Modal Understanding in Situated Education*](https://arxiv.org/abs/2609.19088). arXiv preprint arXiv:2609.19088.
