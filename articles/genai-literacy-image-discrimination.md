---
title: Generative AI Literacy Training Improves Intelligence Analysts’ Discrimination of Real and AI-Generated Images
created: "2026-06-30T04:33:04-04:00"
updated: "2026-09-20T04:00:38-04:00"
type: article
foundations: [ai-literacy]
technology: [generative-ai, llm]
ethics: [equity-in-ai-education]
pedagogy: [professional-training]
audience: [instructors]
research_method: [experiment, system development]
level: [adult learning, higher ed]
sources: ['raw/papers/2606.28510.md']
confidence: high
page_kind: [evaluation]
institutions: [regulation]
---

> **Synthesis:** Kamali et al. (2026) evaluate a Generative AI Literacy training intervention designed to improve intelligence analysts' ability to distinguish real photographs from AI-generated images. In a controlled experiment, trained analysts significantly outperformed untrained controls on image discrimination tasks, with gains persisting on challenging edge cases. This is an important contribution to [[ai-literacy]] [[research-methods-aied|research]] because it demonstrates that detection skills are teachable even among domain experts, challenging the assumption that AI-generated content is fundamentally undetectable. The training draws attention to specific visual artifacts and generative model signatures, providing a template for broader [[professional-training]] curricula. The study connects to [[equity-in-ai-education]] concerns around AI-generated misinformation, since disparities in detection ability can compound existing information-access inequalities. It also informs [[generative-ai]] [[regulation]] discussions by providing evidence that literacy interventions are a viable complement to technical watermarking approaches. The work extends [[ai-literacy-continuum-higher-education]] by showing that literacy training is relevant not just for students but for professionals across domains.

## What this means for practice

- **Instructors.** Build detection training around many varied examples and a framework for where to look, not fixed rules or checklists of cues; prior checklist-style interventions have not consistently improved classification accuracy, while this training had people apply the framework to novel images and reason about uncertainty.
- **Instructors.** Run the session short and measure it properly. A 30-minute training with 40 images before and 40 after raised overall accuracy by 9 percentage points (95% CI: [2.7, 15.4]) from a 72% baseline, which fits inside a single class or workshop slot.
- **Instructors.** Always report accuracy on real images separately from overall accuracy. Training raised accuracy on real images by 14.2 percentage points, showing it sharpened discrimination rather than inducing a blanket skepticism that mislabels authentic photographs.
- **Designers.** Pair each AI-generated image with a matched real image and collect confidence ratings and written reasoning, then report pair accuracy alongside overall accuracy so partial or chance-level guessing cannot inflate the measured skill.
- **Administrators.** Fund [[ai-literacy]] training as a complement to automated detection rather than a substitute: computer-vision detectors keep failing to generalize across generative paradigms, and trained human judgment remains the fallback where authenticity is ambiguous.

## Limitations

- Thirty-two intelligence analysts were recruited from a single site — the North Carolina State Laboratory for Analytic Sciences — all government employees completing the study inside a professional research engagement, which bounds generalizability to other workforces.
- Only immediate post-training performance was measured. There was no retention check days or weeks later, each phase allowed up to 30 minutes for 40 images, and analysts averaged about 27 seconds per image.
- The study deviates from its pre-registration in two ways: participants judged 40 images before and after training instead of 50 and 50, and the final stimulus set contained 97 images rather than 100. Both changes were applied uniformly before data collection began.
- The stimulus set is limited to images from contemporary diffusion models balanced on three dimensions, and the training itself was asymmetric — 50 AI-generated images against only 7 real ones. The training effect on AI-generated images was positive but not statistically significant (β = 0.331, p = 0.330), so the measured gain rests largely on improved performance on real photographs.

## Connected Concepts

- [[ai-literacy]]
- [[professional-training]]
- [[equity-in-ai-education]]
- [[generative-ai]]
## Connected Articles

- [[ai-literacy-continuum-higher-education]]
## Citation

Negar Kamali, Candice Rockell Gerstner, Jessica Hullman, Matthew Groh (2026). [Generative AI Literacy Training Improves Intelligence Analysts’ Discrimination of Real and AI-Generated Images](https://arxiv.org/abs/2606.28510). cs.HC / cs.AI / cs.CY.
