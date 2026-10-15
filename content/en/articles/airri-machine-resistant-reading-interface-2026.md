---
title: "AIRRI: Towards a Human-Readable, Machine-Resistant Reading Interface"
created: "2026-10-15T09:15:00-04:00"
updated: "2026-10-15T09:15:00-04:00"
type: article
sources: ['raw/papers/airri-machine-resistant-reading-interface-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [system development, design and evaluation study, user study]
level: [higher ed]
audience: [instructors, researchers]
technology: [educational-nlp, generative-ai, llm, multimodal]
assessment: [assessment-validity, automated-assessment]
ethics: [accessibility, ai-misuse-learning-harm]
foundations: [academic-integrity, reducing-ai-misuse]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-15"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Students can screenshot a digital assignment and feed it to a [[generative-ai|generative AI]] model through an [[educational-nlp|image-to-text]] pipeline, turning hours of work into minutes. AIRRI answers this with a preventive design: it renders instructor material as [[multimodal|images]] hardened by typographic, image-level, and adversarial perturbations. Across nine higher-education assignments and a grade-school reading set, the defenses pushed [[llm|large language model]] assignment-completion failure from 7.4% to 55.6% and drove Tesseract extraction error to 100%. The [[accessibility|readability]] cost is real but bounded, since stripe overlays — the strongest defense — were judged readable by all four design and typography experts interviewed. AIRRI reframes [[academic-integrity]] as a content-design problem that complements [[ai-detection]] and [[remote-proctoring]] rather than replacing them, raising the effort needed for [[ai-misuse-learning-harm|low-effort AI misuse]] without claiming to eliminate it.

## Key Findings
1. AIRRI cut EasyOCR character error from 6.9% to 55.9% and word error from 24.9% to 96.7% across nine higher-education instructor-provided assignments, forcing reliance on manual transcription.
2. Tesseract suffered complete extraction failure on protected documents: character error rose from 2.3% to 100.0% and word error from 10.7% to 100.0% in the higher-education set.
3. The transformer-based GOT-OCR2 model resisted more: character error rose from 30.7% to 48.1%, while word error actually fell slightly from 63.3% to 61.9% on the same assignments.
4. Downstream, aggregate LLM Error Rate climbed from 7.4% on clean documents to 55.6% on protected ones, and Tesseract's LLM performance score collapsed from 94.4 to 0.0.
5. Stripe overlays were the strongest single image transform, raising character error by 35.9% and word error by 38.3% — far more than opacity jitter or image noise.
6. ADBA was the strongest adversarial attack, pushing target-region word error above 70% at ε=64/255 across all three engines, while the L2-bounded SurFree failed entirely at every budget.
7. Four typography, design, and cognitive-psychology experts judged vertical stripes readable and diagonal stripes unreadable for skimming, likening 50% opacity jitter to a printer running out of ink.

## How AIRRI degrades machine extraction

AIRRI treats a digital assignment as a hostile document. Instructor text is rendered as a canvas image — Roboto at 16 px, exported at 1920×1080 — then perturbed in three ways. Typographic perturbations bend character, word, and line spacing and vary per-character opacity; image-level perturbations lay down stripe overlays and random circular noise; adversarial perturbations add model-targeted pixel changes. Extraction is then measured on three engines chosen to span old and new architectures: Tesseract and EasyOCR represent traditional OCR, and the transformer-based [[multimodal]] model GOT-OCR2 represents modern vision-language systems. Success is scored with Character Error Rate and Word Error Rate, and downstream completion with an [[llm]] through an LLM Error Rate. The results are emphatic: the full pipeline took EasyOCR character error from 6.9% to 55.9% and Tesseract to 100%, and raised aggregate downstream completion failure from 7.4% to 55.6%, so protected assignments could no longer be reconstructed automatically.

## Readability cost of the defenses

The strongest defense is also among the least damaging to readers — up to a point. Applied alone, stripe overlays raised character error by 35.9% and word error by 38.3%, far more than opacity jitter (6.27%) or image noise (3.96%). Yet in interviews with four experts in typography, design, and [[cognitive-psychology|cognitive psychology]], all found the vertical stripe design readable, and one likened the 50% opacity jitter to a printer running out of ink. Diagonal stripes broke letterforms and were judged unreadable, especially for skimming. The experts distilled three requirements — preserving letterform structure, maintaining line tracking, and keeping adequate foreground-background contrast — which map onto established [[accessibility]] guidance and [[universal-design-for-learning]] principles. AIRRI does not claim to be cost-free: extreme opacity variation disrupted extraction only at intensities that also harmed human readability, a threshold effect that keeps the most aggressive settings impractical. The authors frame this as a design tension to manage rather than a solved problem.

## Reframing integrity as a content-design problem

AIRRI reframes [[academic-integrity]] as a content-design problem rather than a detection problem. Existing responses — [[ai-detection]], browser restrictions, plagiarism review — act after submission and grow less reliable as [[generative-ai]] improves. AIRRI instead raises the effort needed for [[reducing-ai-misuse|low-effort misuse]] at the source, on the premise that a student who must manually retype a protected prompt is less likely to hand it to an [[llm]] wholesale. It does not eliminate [[ai-misuse-learning-harm]], and the authors are explicit that manual transcription remains possible. Because a protected document measures the same knowledge as a clean one, [[assessment-validity]] is preserved. The deployment argument is practical: image-level perturbations run in a single pass over the image, O(n) in pixel count, while decision-based adversarial attacks need thousands of queries and scale as O(qn), making them better suited to protecting selected high-value content than to routine assignment generation.

## Where the defenses fall short

Machine resistance is uneven across engines. The transformer-based GOT-OCR2 was the least predictable: on higher-education assignments its character error rose from 30.7% to 48.1%, but its word error fell slightly, from 63.3% to 61.9%, showing that AIRRI can shift character- and word-level errors in opposite directions. On the grade-school passages the same model degraded sharply, with character error rising from 0.8% to 90.4%. Adversarial attacks also help only locally: when evaluated across whole stitched documents, error stayed low — under 8.44% for every engine even at the largest budget — because only selected lines were perturbed, and the attacks looked powerful only on the targeted crops, where ADBA pushed word error past 80%. SurFree produced no usable perturbations at all. The paper's own next step is a formal human-readability study, which it has not yet run.

## What this means for practice
- **Instructors.** Protect high-stakes prompts by rendering them as perturbed images using the image-level settings — the single-pass option cheap enough to run before every assignment.
- **Instructors.** Treat the route as a deterrent, not a lock: a determined student can still retype material, so pair it with [[authentic-assessment]] that resists copy-and-paste solutions.
- **Instructors.** Keep intensity moderate. Stripe overlays deliver the largest machine-resistance gains, and vertical stripes were judged readable while diagonal stripes were not.
- **Administrators.** Do not lean on [[ai-detection]] or proctoring as post-hoc checks; the paper argues detection grows less reliable as models improve, while pre-distribution protection scales.
- **Developers.** Build the image-level perturbations into the rendering step, since they cost a single O(n) pass, and reserve adversarial methods for the few documents that justify thousands of queries.

## Limitations
- The higher-education dataset is only nine assignments — seven English and two History — from two universities, totaling 4,364 words; the additional set is grade-school reading passages.
- Human readability rests on semi-structured interviews with four experts, not measured reading speed or comprehension; no formal readability study was run.
- GOT-OCR2 behaved inconsistently, and its word error decreased slightly on the higher-education set, so its true vulnerability is unclear.
- Adversarial attacks were evaluated only on selected line crops; across full documents error stayed under 8.44%, and SurFree produced no usable perturbations.
- The LLM evaluation used a single inference per extraction through the ChatGPT web interface, so temperature, top-p, and seed were not controlled.

## Citation
Salaun, Ayon, Mahmood, & Wallace (2026). [*AIRRI: Towards a Human-Readable, Machine-Resistant Reading Interface*](https://arxiv.org/abs/2610.18724). arXiv:2610.18724.
