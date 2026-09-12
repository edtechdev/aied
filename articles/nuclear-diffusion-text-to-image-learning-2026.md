---
title: "NuclearDiffusion: Text-to-Image Foundation Models for Learning Nuclear Energy Concepts"
created: "2026-08-06T04:33:04-04:00"
updated: "2026-09-12T02:10:00-04:00"
type: article
tags: [generative-ai, stem-education, multimodal, higher-ed, visualization]
audience: [software developers]
research_method: [benchmark]
discipline: [stem education]
level: [higher ed]
sources: ['raw/papers/2608.04030.md']
confidence: high
---

> **Synthesis:** Radaideh et al. (2026) test whether fine-tuning open-source text-to-image models on nuclear imagery makes [[generative-ai|generative AI]] usable for a safety-critical engineering domain, and find the answer depends on the architecture rather than the parameter count. Curating 1,000 captioned nuclear images and fine-tuning Stable Diffusion XL, SD-v3.5-Medium, and the flow-matching Flux.1 model, they report that fine-tuning substantially improves SDXL, gives limited gains for SD-v3.5-Medium, and produces no measurable improvement for Flux.1 at all — and that human judgement, not embedding-based metrics, was the only reliable way to rank checkpoints. The study's most transferable contribution for [[discipline-specific-aied|domain-specific AIED]] is its methodological warning: standard text-image metrics (CLIP, KID, CMMD) disagreed with each other and with expert assessment on unfamiliar, specialized imagery.

## Overview

General-purpose text-to-image models are increasingly proposed as content-generation tools for teaching, but they are trained on public image distributions in which specialized engineering concepts are rare. The authors argue that a generated reactor diagram that is visually convincing but physically wrong is worse than no diagram in a safety-critical domain, and they treat nuclear engineering as a hard test case: fuel assemblies, reactor cores, containment structures, spent fuel, and fusion designs must be both realistic and technically accurate.

The paper asks three questions: whether domain-specific fine-tuning can close that gap, how fine-tuning behaves across different generative architectures, and how fine-tuned open models compare with the leading commercial systems.

## Study Design & Method

- **Dataset.** 1,000 captioned nuclear energy images assembled from three nuclear-engineering image resources via an automated Python pipeline that extracts images from publications. Because the open-source models could not reliably render correct English annotation text, text was removed from the training images.
- **Models and checkpoints.** Three open-source systems were fine-tuned: Stable Diffusion XL, SD-v3.5-Medium, and the flow-matching Flux.1 model. Evaluation compared the zero-shot baseline against 15 checkpoints for the SD models (training steps 2,500 through 37,500) and 16 checkpoints for Flux.1 (500 through 8,000), on 300 test prompts.
- **Metrics.** Frechet Inception Distance was avoided as biased at small sample sizes; the study used Kernel Inception Distance (KID) and CLIP-MMD (CMMD) for distributional similarity, plus CLIP score for text-image alignment. Image Reward and VQ² were also tried and, in the authors' account, failed to capture the effect of fine-tuning.
- **Qualitative protocol.** All generations for a prompt — every checkpoint plus the real image — were shown to a human judge, who picked the image closest to the real one; the number of prompts where *no* checkpoint produced a close image was also counted. The authors deliberately kept this assessment purely human rather than delegating it to a model.

## Key Findings

- **Fine-tuning helped, but unevenly across architectures.** Best CMMD and KID scores were SDXL 0.103 (20,000 steps) and 0.003 (37,500 steps); SD-v3.5-Medium 0.090 (37,500) and 0.003 (27,500); Flux.1 0.154 (6,500) and 0.011 (7,500) — markedly worse than either Stable Diffusion model.
- **Quantitative metrics disagreed with each other.** For both SD models the lowest KID and lowest CMMD belonged to *different* checkpoints, and CLIP score pointed the other way entirely, ranking the zero-shot models best and suggesting fine-tuning was ineffective for SDXL and SD-v3.5-Medium. The authors attribute this to embedding models failing on unfamiliar nuclear imagery; KID and CMMD fared better than CLIP only because they have a reference image to compare against.
- **Expert judgement overturned the metric ranking.** On 300 prompts, SD-v3.5-Medium failed to generate a reasonably close image in **250** instances while SDXL failed in **84**. Flux.1 failed on all 300 and was excluded from the checkpoint-comparison panel. The authors also note that models trained up to 20,000 steps remained unusable by qualitative assessment even though CMMD and KID had already begun to flatten.
- **Scale was not the explanation.** SDXL has more trainable parameters than SD-v3.5-Medium (2.77 billion vs 2.5 billion), a small difference the authors explicitly doubt as the cause of the performance gap. Flux.1's failure is attributed tentatively to LoRA compression of a 12-billion-parameter model and possibly overfitting at a high (256×256) LoRA rank; retrying at lower ranks (128×128 and 16×16) produced nearly identical images.
- **Best checkpoints came late.** SDXL's three strongest checkpoints were the last ones saved — 35,000 steps (50 points), 32,500 (48), and 37,500 (44) — suggesting longer training helps, with the caveat that it can also overfit. SD-v3.5-Medium's best checkpoints scored only 11 points (30,000 and 32,500).
- **More images and prompt rewording did not rescue accuracy.** For 20 prompts on which all three models failed, four extra generations per prompt left SD-v3.5-Medium and Flux.1 inaccurate in all 40 instances and SDXL closer in only 3 of 20. Five reworded variants of five failed prompts also failed to help, leading the authors to conclude that accuracy depends mainly on the quality of fine-tuning rather than on prompting.
- **Commercial systems were better at the general concept and still wrong on the details.** GPT-Image-2.0, Gemini-3.1-Flash-Image, and Midjourney were run on the same 300 prompts. GPT-Image-2.0 cost roughly $64 and took about 16 hours with no failures; Gemini-3.1-Flash-Image cost about $20 and finished in around 45 minutes but failed on 15 prompts with server errors (eventually rerun to zero); Midjourney was only accessible through a third-party API at ~$30/month for about 375 images, generating 297 of 300. GPT-Image-2 and Gemini were substantially better than Midjourney at recognising nuclear concepts, yet still missed design details — and Gemini produced annotated diagrams with correct English words used incorrectly, labelling a pump as a "compressor" in a thermal-cycle diagram.

## Implications

For AIED, the paper's transferable lesson is about *evaluation validity in specialized domains*. A school or department adopting a generative image tool for [[visualization|visualization]] in a technical field cannot rely on off-the-shelf metrics to judge whether the tool is accurate: on nuclear imagery the standard embedding-based scores contradicted expert judgement, and only human assessment reliably identified which checkpoint was usable. The authors' recommendation to keep the qualitative step human echoes the wider [[ai-ed-evaluation|AI evaluation]] problem of benchmarks that are cheap to compute but wrong about the construct.

The second lesson is about the limits of "just fine-tune it". Domain adaptation worked for one architecture and essentially failed for two others trained on the same data, so a domain-specific claim from one model is not evidence about another. Commercial models remain the more convenient default and were the better option for broad concept illustration, but the authors' conclusion is that they cannot yet be relied on for specialized nuclear imagery — a cautionary result that generalizes to any domain where plausible-looking but technically false visuals would mislead learners.

## Connected Concepts

- [[generative-ai]]
- [[stem-education]]
- [[multimodal]]
- [[higher-ed]]
## Connected Articles

- [[mllm-scientific-visualization-literacy]] — Benchmarking Multimodal Large Language Models for Scientific Visualization Literacy
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[genai-runaway-object-math-higher-ed]] — GenAI as a runaway object in higher education: A socio-cultural view on AI-influenced academic practice in mathematics
- [[curriculum-as-code-instructional-design-2026]] — Curriculum as Code: An AI-Assisted Architecture for Instructional Design in STEM Education
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: A Drop-in, FERPA-Compliant Local-LLM Autograder for Upper-Division STEM Coursework
- [[prompt-based-programming-lesson]] — Teaching Prompt-Based Programming with LLMs: A 45-Minute Lesson with Guided Practice for End-User Programmers

## Citation

Mohammed I. Radaideh, Jeremy Moon, Andre Gala-Garza, Emma Son, Yug Shah, & Majdi I. Radaideh (2026). [NuclearDiffusion: Text-to-Image Foundation Models for Learning Nuclear Energy Concepts](https://arxiv.org/abs/2608.04030). arXiv preprint (cross-listed cs.GR/cs.CY).
