---
title: "Beyond Generation and Accuracy: Diagnosing and Enhancing Visual Chain-of-Thought for Geometry Problem Solving"
created: "2026-09-14T09:12:54-04:00"
updated: "2026-09-14T09:12:54-04:00"
type: article
tags: [benchmark, math-education, multimodal, llm, cognitive-diagnosis, machine-learning, problem-solving, visualization, educational-measurement, stem-education]
pedagogy: [problem-solving]
technology: [cognitive-diagnosis, llm, machine-learning, multimodal, visualization]
assessment: [benchmark, educational-measurement]
sources: ['raw/papers/geovad-bench-visual-chain-of-thought-geometry-2026.md']
confidence: high
research_method: [benchmark, system development]
discipline: [math education]
audience: [researchers, software developers, edtech designers]
page_kind: [evaluation]
---

> **Synthesis:** Visual Chain-of-Thought (VCoT) promises that a [[multimodal]] model can solve geometry problems by drawing auxiliary lines mid-solution, but Dong and colleagues show that existing [[benchmark|benchmarks]] score the final answer and the produced diagram in isolation, so they cannot say where reasoning actually breaks. Their GeoVAD-Bench pairs a five-dimensional trajectory diagnosis with No-Aux, Auto-Aux, and GT-Aux interventions across 600 auxiliary-construction problems, revealing that validated expert diagrams reliably raise accuracy while autonomous generation often fails to. The failures are not diffuse: geometric perception, diagram editing, visual-state utilization, and deductive reasoning account for 93.1% and 89.7% of attributed errors in two baseline models. Guided by that [[cognitive-diagnosis|diagnosis]], the authors build a 400K/200K/100K data pipeline and a three-stage SFT plus Interleave-RL recipe whose GeoWeave-8B model lifts final-answer accuracy by +25.3 points and process average by +30.4 points over its base model. The result reframes reliable [[math-education|mathematical]] reasoning as a coordination problem across the whole visual-textual trajectory, not a question of raw generation quality.

## Key Findings

1. GeoVAD-Bench comprises 600 geometry problems that strictly necessitate auxiliary-line constructions, evenly partitioned into 200 Easy, 200 Medium, and 200 Hard items and stratified across Chinese and English as well as multiple-choice and open-ended formats.
2. Across three evaluated models, the reference diagram (GT-Aux) beat reasoning from the original diagram alone (No-Aux) on final-answer accuracy by +3.3 points for GPT-5.4 + GPT-image2 (73.1% vs 69.8%), +3.0 points for Qwen3-VL-8B + Qwen-image-edit (46.0% vs 43.0%), and +7.0 points for SenseNova-U1-8B (50.8% vs 43.8%).
3. The autonomous-generation gap between GT-Aux and Auto-Aux ranged from +1.5 points (GPT-5.4 + GPT-image2) to +10.0 points (Qwen3-VL-8B pipeline) and +13.5 points (SenseNova-U1-8B), showing that models cannot yet construct the aid they would benefit from.
4. Perception, construction, unused-construction, and reasoning errors account for 93.1% of attributed failures for MathCanvas-7B (n = 306) and 89.7% for CodePlot-CoT-32B (n = 300).
5. Correct solutions separated most sharply on reasoning-process accuracy: +46.9 points for MathCanvas-7B (51.8% vs 4.9%) and +53.5 points for CodePlot-CoT-32B (68.5% vs 15.0%).
6. The data construction pipeline yielded 400K geometric perception pairs, 200K instruction-guided diagram-editing samples drawn from eight basic operations, and 100K interleaved visual-textual solutions, all derived from authentic geometry problems rather than synthesized diagrams.
7. GeoWeave-8B reached 62.6% final-answer accuracy and 82.9% Process Avg., gains of +25.3 and +30.4 points over the SenseNova-U1-8B base model (37.3% and 52.5%), with auxiliary quality rising +51.0 points and deductive reasoning +43.0 points.
8. Generalization held on public suites: GeoWeave-8B averaged 66.2% across four conventional mathematical reasoning benchmarks and 53.0% on Math-VR, outperforming the strongest [[open-source]] baseline by +6.9 and +14.6 points respectively.

## The Autonomy Gap in Visual Chain-of-Thought

The paper's central diagnostic move is to stop treating the generated picture as a byproduct and start treating it as an action inside the trajectory. Formally, each instance yields an interleaved solution τ = (x₀, t₁, v₁, t₂, …, v_k, t_{k+1}, y), where textual reasoning segments alternate with auxiliary visual states v_i that are written back into the model context and are therefore visible to later tokens. This framing makes the causal status of the visual aid testable. Under three controlled conditions — No-Aux (solve from the original diagram), Auto-Aux (plan, generate, and read back a diagram autonomously), and GT-Aux (reason over an expert-validated auxiliary diagram) — the authors compute a reference-diagram gain (GT-Aux minus No-Aux) and an [[agency|autonomy]] gap (GT-Aux minus Auto-Aux).

The reference-diagram gain is consistently positive, confirming the theoretical value of a correct construction: +3.3 points for GPT-5.4 coupled with GPT-image2, +3.0 for the Qwen3-VL-8B pipeline, and +7.0 for SenseNova-U1-8B. The autonomy gap is larger and more damaging. The Qwen pipeline lost 10.0 points relative to the reference condition and SenseNova-U1-8B lost 13.5 points, and in both cases Auto-Aux was worse than simply reasoning from the untouched original diagram (36.0% vs 43.0%, and 37.3% vs 43.8%). Autonomously producing a visual aid is thus not merely unhelpful for weaker models — it can actively degrade [[multimodal]] reasoning, which is a failure of faithful visual manipulation rather than of geometric knowledge. Even the strongest configuration, GPT-5.4-Thinking with GPT-image2, showed only a +1.5 point gap at 93.2% accuracy.

A [[benchmark]] design that reported only accuracy would have flattened all of this into a single number. GeoVAD-Bench instead adds a five-dimensional [[educational-measurement]] protocol: L1 perception accuracy (no explicit misreading of the original diagram), L2 auxiliary-diagram quality scored as (EP + IC)/4 from element preservation and instruction consistency, L3 utilization scored as (ER + RI)/4 from element reference and reasoning integration, L4 reasoning-process accuracy, and L5 final-answer accuracy. Correct solutions lead on reasoning process by +46.9 points for MathCanvas-7B and +53.5 points for CodePlot-CoT-32B, far more than on any other dimension, while the four process categories explain 93.1% and 89.7% of attributed errors. A correct final answer also need not imply an error-free process.

## Data Construction and Progressive Alignment

The diagnostic findings are converted into a targeted data pipeline with three components. The geometric perception set translates raw problem diagrams into executable drawing code with Gemini-3.5-Flash, re-renders them to discard failures, and then generates fine-grained descriptions of points, lines, angles, circles, and relations such as parallelism and bisection, producing 400K diagram-description pairs. The diagram-editing set extracts auxiliary-construction instructions from source solutions into a pool covering eight operations plus composite instructions; Qwen3.7-Max rewrites the drawing code and Gemini-3.5-Flash verifies that the requested construction was actually rendered, leaving 200K editing samples after filtering. The interleaved reasoning set refines worked solutions that use at least one auxiliary construction, regenerates low-quality auxiliary diagrams through the same code-based route for visual consistency, and keeps only samples whose diagrams are both high quality and properly used, yielding 100K interleaved solutions.

Training is organized as a capability-ordered [[curriculum-design|curriculum]] rather than a single pass over full trajectories. Stage 1 warms up geometric perception with the generation branch frozen (λ_image = 0, 4,000 steps, peak LR 1 × 10⁻⁵); Stage 2 freezes the understanding branch and trains auxiliary-diagram editing under the pixel-space flow-matching loss λ_text = 0 (10,000 steps, peak LR 2 × 10⁻⁵); Stage 3 unfreezes everything and jointly optimizes both losses at a 1:10 text-to-image weighting (6,000 steps). The stated reason is a credit-assignment problem: absent a basis in perception and editing, answer-level supervision constrains intermediate visual synthesis only weakly. Interleave-RL then initializes from the SFT checkpoint with 9K training samples, eight rollouts per prompt, α_out = 2 and α_proc = 1, β_KL = 0.001, λ_MSE = 1, and asymmetric ratio clipping over [1 − 0.005, 1 + 0.002], generating at most four images per trajectory at 512² resolution. Its key addition is step-level credit assignment, which segments textual reasoning into coherent steps and assigns each an advantage c_{i,k} = α_out y_i − α_proc e_{i,k}, so that confident, low-entropy perceptual and deductive errors — normally shielded from gradient updates that chase high-entropy tokens like "Thus" — receive targeted pressure. Image generation takes no independent policy gradient; it is held in place by the velocity-MSE constraint, and the diagram's effect flows through the updated visual state and the final answer.

## Evidence of Coordinated Improvement

The ablation isolates each ingredient under the Auto-Aux setting. SenseNova-U1-8B starts at 37.3% answer accuracy and 52.5% Process Avg.; three-stage SFT lifts this to 51.6% and 72.1%, with auxiliary quality jumping +47.8 points (25.4% to 73.2%) while perception moves only slightly, consistent with a base model that already reads diagrams well. Interleave-RL without step-level credit assignment adds a further +8.7 points of accuracy (60.3%) and +4.4 points of Process Avg. (76.5%), and notably raises auxiliary quality to 77.6% even though no image policy gradient is applied. Adding step-level credit assignment produces the full GeoWeave-8B at 62.6% accuracy and 82.9% Process Avg., with the decisive jump in reasoning process from 46.3% to 66.3% — direct evidence that localized process feedback, not longer outputs, drives deductive reliability. The appendix confirms the same pattern in training dynamics: the no-SCA run peaks and then collapses as response length spikes, while the full run sustains a gradual reward increase.

Against open-source peers on GeoVAD-Bench, GeoWeave-8B posts the highest answer accuracy (62.6%) and the highest Process Avg. (82.9%), ahead of MathCanvas-7B (49.0%, 62.2%), CodePlot-CoT-32B (49.9%, 69.1%), and the remaining baselines. Relative to its own base model the gains are coordinated rather than concentrated: perception +5.8 points to 95.6%, auxiliary quality +51.0 to 76.4%, auxiliary utilization +22.0 to 93.6%, and reasoning +43.0 to 66.3%, which is the pattern the authors predicted from the stage-wise diagnosis. Generalization is reported on MathVista-GPS (92.7%), MathVerse Text Dominant (67.5%) and Text Lite (63.3%), and MATH-Vision (41.4%), averaging 66.2% and beating MathCanvas-7B on all four despite those suites not requiring explicit auxiliary-image generation, plus 64.7% process score and 41.4% answer correctness on Math-VR. These numbers support a [[transfer-of-learning|transfer]] claim to interleaved visual-textual protocols broadly, though scaling behavior, RL overhead, cross-branch policy updates, and generalization beyond geometry remain open. For [[stem-education]] and [[ai-ed-evaluation|evaluation]] practice, the durable contribution is [[research-methods-aied|methodological]]: [[visualization]] acts inside [[machine-learning]] pipelines should be scored on faithfulness and downstream use, not merely on whether an image was produced.

## Connected Concepts

- [[benchmark]]
- [[math-education]]
- [[multimodal]]
- [[llm]]
- [[cognitive-diagnosis]]
- [[machine-learning]]
- [[problem-solving]]
- [[visualization]]
- [[educational-measurement]]
- [[stem-education]]
- [[transfer-of-learning]]
- [[reinforcement-learning]]
- [[automated-assessment]]
- [[ai-ed-evaluation]]
- [[educational-nlp]]

## Connected Articles

- [[diagramir-educational-math-diagram-evaluation]] — DiagramIR: An Automatic Pipeline for Educational Math Diagram Evaluation
- [[drawedumath-vlm-struggling-students-2026]] — The Aftermath of DrawEduMath: Vision Language Models Underperform with Struggling Students and Misdiagnose Errors
- [[omniphys-multimodal-physics-benchmark-2026]] — OmniPhys: A Unified Multimodal Benchmark for Physics Understanding and Generation from Chinese Educational Corpora
- [[mllm-scientific-visualization-literacy]] — Benchmarking Multimodal Large Language Models for Scientific Visualization Literacy
- [[representation-robustness-llm-math-problem-solving]] — Representation Robustness under Executable Reasoning Constraints in Large Language Models for Mathematical Problem Solving
- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking Large Language Models for Diagnosing Students' Cognitive Skills from Handwritten Math Work
- [[elbench-education-llm-benchmark-2026]] — ELBench: A Multi-Dimensional Benchmark for Education-Facing Large Language Models
- [[llm-reasoning-traces-metacognition]] — Explaining Too Much? Understanding How Large Language Model Reasoning Traces Influence Performance and Metacognition
- [[code-anchor-multi-view-visualization]] — Code as Anchor, Memory and Metaphor as Support: Learner Experiences with Multi-View Visualizations

## Citation

Dong et al. (2026). [*Beyond Generation and Accuracy: Diagnosing and Enhancing Visual Chain-of-Thought for Geometry Problem Solving*](https://arxiv.org/abs/2609.12606). arXiv preprint arXiv:2609.12606.
