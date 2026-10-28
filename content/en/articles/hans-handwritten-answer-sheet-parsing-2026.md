---
title: "HANS: A Handwritten Answer Sheet Dataset for Noisy Hybrid Document Parsing"
created: "2026-10-15T09:15:00-04:00"
updated: "2026-10-15T09:15:00-04:00"
type: article
sources: ['raw/papers/hans-handwritten-answer-sheet-parsing-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [system development, experiment]
level: [k 12, higher ed]
audience: [researchers, educational technology developers]
technology: [educational-nlp, machine-learning, multimodal]
assessment: [automated-assessment, automated-essay-scoring, educational-measurement]
methods: [benchmark, ai-ed-evaluation]
ethics: [privacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-15"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Intelligent [[automated-assessment|automated grading]] has to read more than a final answer: it must transcribe a student's whole [[problem-solving]] process, including interleaved prose, equations, and hand-drawn tables, even when the page is layered with corrections. This paper introduces HANS, the first [[benchmark|dataset]] built explicitly for real-world educational answer sheets, drawn from eighth-grade mathematics assessments and containing 5,213 answer images from 745 students across 18 problem types, annotated for both full transcriptions and noise regions such as strikethroughs and erasures. The authors also propose NA-GOT, an end-to-end framework that extends a document-parsing model with a Lightweight Noise Suppression Module and a noise-aware attention mechanism, suppressing noise at both the feature and decoding stages. On HANS, NA-GOT reaches a BLEU of 0.594 and an F1-score of 0.810, outperforming general and specialized vision-vision-language models and showing that noisy handwriting remains a substantial barrier for [[educational-nlp|educational NLP]] and [[machine-learning|machine learning]] systems aimed at authentic [[assessment]].

## Key Findings
1. HANS is the first dataset built for real-world student answer sheets: 5,213 answer images from 745 students, 18 problem types, and three semesters of eighth-grade mathematics quality assessments.
2. Noise is annotated explicitly for the first time in this setting, with JSON region labels for strikethroughs, erasures, and overwriting stored as rectangles or polygons, which prior handwriting datasets omit entirely.
3. A single HANS sample mixes handwritten mathematical expressions, natural language text, and hand-drawn tables, unlike IAM (text lines) or CROHME (isolated expressions), which are single-modality.
4. The authors propose NA-GOT, an end-to-end framework with two-stage noise suppression: a Lightweight Noise Suppression Module at the feature level plus Weighted Attention Correction in the decoder.
5. Fine-tuned NA-GOT scores a BLEU of 0.594, METEOR of 0.701, Edit Distance of 0.306, and F1-score of 0.810, edging out fine-tuned GOT (0.577 BLEU, 0.801 F1) on every metric.
6. Ablations show token gating matters more than attention correction alone (BLEU 0.580 without gating versus 0.589 without correction), and performance peaks at the gating strength α = 0.7 and attention penalty β = 2.0.

## Why existing parsers fail on answer sheets
Document parsing has advanced quickly, but its [[benchmark|benchmarks]] were built for the wrong documents. Datasets such as OmniDocBench, DocLayNet, and FOX are predominantly printed academic PDFs; even when they include handwriting, the sample counts are small and quality is assumed to be high. Handwriting recognition research has its own classics, IAM with 1,539 line samples and CROHME with 8,836, yet these cover pure text lines or isolated formulas rather than a continuous account of a student's reasoning. Three gaps follow: printed-document bias, no systematic treatment of handwriting noise, and no datasets spanning interleaved text, formulas, and tables across multiple lines. For [[automated-assessment|automated scoring]] and step-wise diagnosis, those gaps are not cosmetic. A grader that misreads a crossed-out intermediate result, or mistakes an erasure smear for a variable, produces the wrong feedback no matter how strong the downstream [[machine-learning|model]] is. HANS targets this distribution by sourcing only the open-ended problem-solving sections where derivation work is visible.

## The dataset and its annotations
HANS was built from scanned eighth-grade mathematics answer sheets collected across three semesters in a municipal [[k-12|middle school]] district in China, six open-ended questions per examination. Privacy protection was deliberate: all personally identifiable information was cropped before release, a design choice that matters for the [[privacy]] of minors. Each sample is a single answer region, annotated in two ways. First, a full problem-solving-process transcription preserves the student's original line breaks and logical ordering; content the student deleted is excluded. Second, noise regions are annotated pixel-wise in JSON, labeled uniformly as noise, and expressed either as rectangles for block-level erasures and strikethroughs or as polygons for irregular corrections. Annotation ran through a three-stage pipeline: automatic pre-annotation using YOLOv8 for correction regions and DeepSeek-OCR for content, then annotator correction with character-level verification, then expert quality inspection. The paper is candid that complex formulas and tables can survive the human pass with residual errors.

## NA-GOT and two-stage noise suppression
The proposed model extends GOT, an end-to-end document OCR architecture, with two noise-aware components. Noise annotations are converted into a binary pixel mask, resized to 1024×1024, and pooled at 16×16 so that every visual patch token receives a noise occupancy ratio. A Noise Mask Head, a two-layer MLP, predicts a per-patch noise confidence score. In stage one, the Lightweight Noise Suppression Module maps those scores to gating coefficients and scales each visual token down, attenuating noise before it reaches the decoder. In stage two, Weighted Attention Correction injects a negative bias proportional to the noise probability into the decoder's attention, so noisy patches receive lower weight after softmax. The model trains on a combined objective of recognition loss plus a weighted noise-mask loss. Because the noise head predicts distributions at inference, the system does not need annotations at deployment time, which is what makes the approach plausible for real exam pipelines rather than only for curated research sets.

## What the results establish
Evaluated on HANS with an 8:2 train-test split, where three-quarters of training samples contain noise, NA-GOT leads every baseline. Pipeline tools fare worst (PaddleOCR PP-StructureV3 at 0.177 BLEU, MinerU at 0.064), general and specialized vision-language models sit in the middle, and Qwen3-VL is the strongest of those at 0.433 BLEU. GOT transferred directly scores only 0.098 BLEU, which the authors read as evidence of a substantial domain shift, and [[llm-training-and-fine-tuning|fine-tuning]] it on HANS lifts it to 0.577. The ablation separates the two mechanisms: removing Weighted Attention Correction costs very little, while removing token gating costs more, and the full model still wins on all metrics, so the components are complementary. Visual inspection adds a [[qualitative-research|qualitative]] layer, showing NA-GOT misreading erasure textures as characters less often and holding fraction, parenthesis, and equality-chain structure more faithfully than DeepSeek-OCR2 or MinerU, both of which produced repetitive or truncated derivations in noisy regions.

## What this means for practice
- **Instructors.** Do not assume a polished transcription lies behind an automated score; if you pilot such a system, test it on the crossed-out and overwritten pages your students actually hand in, not on clean scans.
- **Instructors.** Preserve the derivation, not just the answer, in any collection you plan to digitize, since step-level feedback depends on intermediate work surviving the scanner.
- **Educational technology developers.** Treat noise suppression as two separate problems, feature-level attenuation and decoder-level attention, because the ablation shows they contribute differently and neither alone is sufficient.
- **Educational technology developers.** Budget for human annotation in three passes, automatic pre-labeling, annotator correction, and expert inspection, since the authors report residual errors in formulas and tables even after correction.
- **Assessment designers.** Weigh whether a transcription model is accurate enough for [[formative-assessment|formative use]] before it informs any consequential judgment about a learner.

## Limitations
- HANS covers one subject, mathematics, one grade band, eighth grade, and one country, so the noise patterns and writing conventions may not transfer to other contexts.
- Samples come only from open-ended problem-solving sections, excluding multiple-choice or short-answer formats that other grading pipelines must handle.
- The paper reports sequence-alignment metrics (BLEU, METEOR, Edit Distance, Precision, Recall, F1) but not whether transcription errors change the downstream score a student would receive.
- The dataset is released upon publication, so the reported results cannot yet be independently reproduced from this paper alone.
- The fine-tuning setup is not separated from the architecture contribution, leaving unresolved how much of NA-GOT's gain comes from the HANS annotations.

## Citation
Wu, X., Qin, W., Zheng, Y., Fang, L., Li, Z., Huang, X., Zhou, L., & Guan, Q. (2026). [*HANS: A Handwritten Answer Sheet Dataset for Noisy Hybrid Document Parsing*](https://arxiv.org/abs/2610.12363). arXiv:2610.12363.
