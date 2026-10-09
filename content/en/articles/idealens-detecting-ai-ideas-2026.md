---
title: "IdeaLens: Detecting AI Ideas in Long-form Writing"
created: "2026-10-08T14:35:00-04:00"
updated: "2026-10-08T15:10:00-04:00"
type: article
foundations: [academic-integrity]
pedagogy: [student-ai-interaction, metacognition]
technology: [llm, machine-learning]
assessment: [ai-detection, process-oriented-assessment]
ethics: [ai-use-disclosure, ai-misuse-learning-harm, trust-calibration]
methods: [benchmark]
research_method: [system development]
discipline: [writing education, cs education]
level: [higher ed]
audience: [instructors, researchers, administrators]
page_kind: [evaluation]
sources: ['raw/papers/idealens-detecting-ai-ideas-2026.md']
confidence: medium
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-08"
    agent: hermes-agent
---

> **Synthesis:** Existing AI detectors answer who wrote the words. IdeaLens answers a different question — who had the ideas — by feeding a classifier an *outline* of the document (a list of discourse roles each paired with a short paraphrase of its content) instead of the prose itself. The authors trained it on 1M web documents using only prose labels inherited from Pangram, on the assumption that a document's ideas and words usually share an author, and built a same-backbone control (ProseLens) trained on raw text with identical data and labels. The two disagree exactly where the distinction matters: when a model writes from an increasingly detailed human plan, IdeaLens's AI flag rate falls from 94.9% to 6.8% while Pangram 4 stays near 92%; on 50 stories that people wrote from scratch following AI-generated outlines, IdeaLens flags 68% as AI where Pangram flags 8% and ProseLens none. The authors are explicit that this is a statistical estimate, not evidence: "All predictions... are statistical estimates and must not be used by themselves as conclusive evidence to establish AI use in writing."

## Key Findings

1. **The four quadrants are the argument.** Ideas and prose can come from different sources, so provenance splits four ways: human ideas with human prose, AI ideas with AI prose (shared provenance), and the two mixed cases. Idea detectors should be accurate in all four; prose detectors should fail in the mixed two.
2. **Only IdeaLens handled both settings.** Across 51 evaluation splits from 22 [[benchmark|benchmarks]], IdeaLens reached 95.3% accuracy on shared-provenance documents and 81.3% on mixed-provenance ones; ProseLens scored 99.1% and 25.4%, Pangram 4 98.5% and 25.9%. On mixed-provenance benchmarks the weighted gap was 92.6% for IdeaLens against 46.8% and 41.1%.
3. **A tighter human plan lowers the AI flag.** On IdeaShift, where the prompts carry progressively more of a human plan while the prose stays AI-generated, IdeaLens's flag rate fell from 94.9% at level 0 (topic only) to 6.8% at level 5 (full human outline), while ProseLens and Pangram 4 flagged 86–100% at every level. The largest drop came between levels 3 and 4, when prompts begin carrying outline *content* rather than structural roles.
4. **AI plans kept being flagged.** When the plans came from AI instead of a person, IdeaLens flagged over 96% of documents at every level, which the authors read as sensitivity to whose ideas they were rather than to how detailed the prompt was.
5. **Human writing from AI ideas is the harder case, and the smaller sample.** TwiceTold holds 50 stories written from scratch by 17 computer science graduate students and faculty from an AI-generated outline; IdeaLens flagged 68% (95% CI 54–79) as AI, against 8% for Pangram 4 and 0% for ProseLens, while all reliably flagged the AI originals. Twelve of IdeaLens's 16 errors were stories with speculative or fantasy elements.
6. **Polishing and rewriting no longer read as authorship.** Aggregated over 12 benchmarks where AI made surface changes to human text, IdeaLens labeled 94.7% of documents human (ProseLens 50.7%, Pangram 43.8%). In GEDE it flagged only 0.5% of human essays after minor [[llm]] corrections, and 2.6% after a content-preserving rewrite, against 54.6% and 94.3% for Pangram 4.
7. **Ideas alone rival the strongest open detector on conventional benchmarks.** On 19 shared-provenance evaluations IdeaLens detected 91.1% of AI documents at a 0.6% false positive rate, against 81.8% at 0.2% for EditLens-3B, the best open baseline; ProseLens reached 98.9% at 0.7%, near Pangram 4's published 97.3% at 0.3%. On 10K pre-[[generative-ai|ChatGPT]] C4 documents IdeaLens's false positive rate was 0.01%.
8. **English outlines carried it across languages.** Though trained only on English, IdeaLens flagged 95.3% of level-0 and 0.7% of level-5 documents in 24 languages, with a 0.1% false positive rate on 10K pre-ChatGPT non-English documents, and the gap over prose detectors widened in low-resource languages such as Tamil and Amharic.
9. **What separates the two kinds of idea is checkability.** IdeaLens was more likely to score ideas as AI when they cite numbers or methods without the context to verify them, or claim more than the evidence supports, and more likely to score them as human when they name sources a reader could look up or discuss downsides and open problems. In its own examples, an AI speaker review praises "premium audio fidelity" while a human camera review reports a specific problem during tripod use, and an AI text invokes "risk reduction strategies" and "Agile methodologies" without saying how to carry them out.
10. **It reads content, not structure.** Removing role labels (AUROC 0.993) or shuffling the outline (0.993) barely changed performance, while role labels alone fell to 0.601.

## The case behind the paper, and the caveat inside it

The paper opens on an August 2026 dispute: Pangram flagged a *Wall Street Journal* op-ed by Stanley Druckenmiller as 100% AI-generated, the author replied "Of course I used AI," and the editor defended the piece on the ground that what matters is whether an op-ed reflects the author's original argument. IdeaLens scores that op-ed's ideas as AI with P(AI) = 98.3% against a threshold of 86.3% — and the authors immediately note in a footnote that this is a model prediction and "does not constitute direct evidence of the writing process." Their ethics statement goes further, saying the work is not intended for invalidating human or AI-assisted writing at all.

## Why the evidence is thinner than the headline numbers

The result that most affects classroom use is also the one with the least data behind it. Existing benchmarks for AI ideas rendered in human prose are approximated by human edits of AI drafts that keep most of the model's prose, so the mixed quadrant's only test is TwiceTold's 50 stories — a sample the authors themselves say cannot establish generalization. The error pattern there is interpretable rather than random: writers who followed the outline while adding their own events or world-building were the ones missed.

## What this means for practice

- **Instructors weighing detection.** Two questions now exist where one used to be asked. A tool can report that the words look human while the ideas do not, and the authors warn that neither output is proof; the evidence that settles an authorship question is still the process record.
- **Course and assignment design.** The paper's own framing — planning versus translating a plan into prose — matches the [[assessment|assessment design]] that keeps process visible, because a plan a student produced is the artifact that separates the two kinds of provenance.
- **[[academic-integrity|Academic integrity]] processes.** A 68% flag rate on human-written stories means the positive predictions carry real error, and the authors' instruction is to treat any verdict as a statistical estimate, so a policy that sanctions students on a detector score is running ahead of the evidence.
- **Writing instructors.** The four documented differences — vague-but-specific detail, overstated claims, hidden downsides, and uncheckable numbers — are teachable revision criteria in their own right, independent of any detector.
- **Researchers and tool builders.** The models, training corpus, evaluation sets, and idea-level analysis are released openly, so the outline representation can be tested on other languages and formats rather than taken on faith.

## Limitations

- **The training labels approximate the target.** No large-scale idea-authorship labels exist, so the model learns from Pangram's prose labels under an assumption that ideas and prose share an author; documents labeled mixed were dropped, which removes the cases where that assumption is weakest, but the authors state that some labels are still wrong for the task and that they did not measure how much of the mixed-quadrant gap comes from label noise.
- **Long-form English only, and weaker on short texts.** The corpus holds English documents of at least 500 words; below that length detection of AI text dropped to 87.5% from 90.4%, and non-English documents reach the model only through English outlines, so multilingual accuracy depends on the extractor.
- **It depends on a proprietary extractor.** At inference a frontier model classifies the format and extracts the outline at roughly \$0.018 per document, and although swapping extractors barely changed verdicts, the authors tested only proprietary models and note that cost and availability may limit adoption.
- **Extraction is stochastic.** Across five extractions of the same document the verdict was unchanged for 94% of randomly drawn out-of-domain documents but for only 52.5% of those near the decision threshold, and averaging extractions was not tested.
- **Its edge narrows on newer models and some attacks.** On stories from four models released after the corpus cutoff, detection fell to 51–79% against 97% for the older generators used in training, so it needs retraining to stay current, and it detected 77.6% of DIPPER paraphrases in GEDE against 95.1% for Pangram 4 — a weakness the authors cannot fully separate from the fact that those attacks change content as well as style.
- **Binary labels cannot express mixed authorship.** In the collaborative writing the paper is about, ideas are often partly human and partly AI, and the granularity at which to assign authorship is unresolved when people and models revise each other's ideas.

## Citation

Rajendhran, R., Choi, M., Russell, J., Namuduri, R., Bölöni-Turgut, D., Karpinska, M., Wieting, J., & Iyyer, M. (2026). [IdeaLens: Detecting AI ideas in long-form writing](https://arxiv.org/abs/2610.06778) (arXiv:2610.06778). University of Maryland, Google DeepMind, and Simon Fraser University.