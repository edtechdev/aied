---
title: "Rubric-Based AES with LLM Ensembles: Scoring of Student Responses in Critical Online Reasoning Using Ensembles of LLMs"
created: "2026-11-17T09:29:23-05:00"
updated: "2026-11-17T09:40:00-05:00"
type: article
authors: ["Baumartz, D.", "Mehler, A.", "Schrottenbacher, P.", "Hammerla, L.", "Gombert, S."]
published: "2026"
venue: "arXiv preprint 2611.21422"
source_url: https://arxiv.org/abs/2611.21422
evidence_context: educational
confidence: medium
assessment: [automated-essay-scoring, automated-assessment, assessment-validity, educational-measurement]
technology: [llm, prompt-engineering, open-source]
methods: [quantitative-research]
ethics: [privacy]
discipline: [business education, medical education]
level: [higher ed]
audience: [assessment designers, medical educators, researchers]
page_kind: [evaluation]
sources: ['raw/papers/baumartz-rubric-aes-llm-ensembles-2026.md']
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
---

> **Synthesis:** Can an ensemble of local, open-weight [[llm|LLMs]] hold the place of a human rater without degrading a [[rubrics|rubric]]'s agreement? Baumartz and colleagues prompted fifteen models with 523 rubric-based configurations to score 631 German-language responses from eight critical online reasoning tasks in economics and medicine, then swapped each human rater for a model and recomputed Krippendorff's alpha. For 91 of the 103 criteria, at least one configuration left group agreement no lower. The Alternative Annotator Test agreed: 90 criteria pass, and replacing two raters still leaves 93 criteria with no loss. The qualification is severe. Only 14.6% of tested configurations avoid a drop, the best configuration changes with task and criterion, and no supplied gold standard exists, so the result measures [[assessment-validity|alignment with observed raters]] rather than correctness. [[prompt-engineering|Prompt design]] mattered less than model size, and the two domain-tuned models bought nothing. Locally hosted models make the approach viable under [[privacy|student data protection]] rules.

## Key Findings

- **One model can replace one rater for most criteria.** At least one LLM-prompt configuration left group agreement no lower for 91 of 103 criteria (88.3%), the best case across 523 configurations and 15 open-weight models.
- **A second metric agrees.** The Alternative Annotator Test passes 90 of 103 criteria (87.4%), meaning one configuration can replace at least 50% of human raters at a cost-benefit parameter of 0.15.
- **Two raters can go, leaving one.** Replacing two human raters leaves 93 of 103 criteria (90.3%) with a non-negative agreement change, so one human per response remains the verification floor.
- **Best case is not typical case.** Only 14.6% of the 20,464 tested configurations per criterion avoid a decrease in agreement, and 70% of those concern medical criteria.
- **Human agreement sets a low bar in economics.** Just 5 of 31 economics criteria reach tentatively acceptable alpha, and the Nudging conclusion criterion sits at 0.035, so matching the group is easy there.
- **Domain-tuned models bought nothing.** Economics-tuned Plutus and medical MedGemma 1.5 4b never held a top result outright, while Llama 3.3 70b appeared most often, including 31 medical criteria.
- **Size beat prompt design.** Agreement rose with parameter count, and the SHAP proxy models ranked model size and token volume above prompt features.

## Eight Tasks, 631 German Responses

The data come from the CORE assessment rather than a fresh collection. There are 631 German-language responses to eight tasks: four in [[business-education|economics]] (Nudging, Pilot strike, Startup, Wind park) and four in [[medical-education|medicine]] (Breathing, Eye, Circulation, Middle ear), each written under time limits and length requirements set by the original assessment. Two to five trained raters had scored every response with the original rubric, which was built for the reasoning-with-evidence facet of [[critical-thinking|critical online reasoning]] under an evidence-centered design. The rubric holds 115 criteria: two task-independent ones, a filter for serious engagement and a four-point coherence scale, plus task-specific criteria, mostly Boolean, asking whether a diagnosis, test, symptom, treatment, or argument for and against was named. The authors dropped two criteria about consulted sources, because grading them would require giving the model web access and making student searches traceable. That left 95 criteria plus 8 derived sum scores. No new gold standard was created; each human rating counts as an equally plausible reference.

## Fifteen Models, 523 Configurations

Fifteen [[open-source|open-weight]] models ran locally through DUUI, LangChain, and Ollama at temperature 0.8, mostly returning JSON. The main study covers nine models across all eight tasks: DeepSeek-R1 70b, GPT-OSS at 20b and 120b, Llama 3.3 70b, MiniCPM-V 8b, Mixtral 8x7b, Nemotron 70b, Qwen 2.5 32b, and two domain-tuned models, MedGemma 1.5 4b and Plutus 8b. A Nudging-only study tests twelve models, six of them shared with the main study, spanning a wider range: from Llama 3.2 3b and VibeThinker 1.5b to DeepSeek 3.1 671b, Qwen 3 at six sizes, Gemma 2 27b, and Mistral 7b. Five prompt families structure the requests: a simple scenario prompt that supplies what human raters saw, a chained variant that rates one criterion per message while keeping the history, a features variant that injects text statistics and classifier outputs, a prompt optimized off-line by Claude Opus 4.7, and a training variant that pastes in the rater-meeting transcript. Per task this yields 49 to 51 configurations; with the follow-up and the criterion-specific prompts the total reaches 523, producing 346,386 ratings in the main study and 65,947 in the follow-up. The authors [[llm-training-and-fine-tuning|fine-tuned]] nothing themselves; model choice and prompt construction carried the entire design.

## Agreement Is the Bar, Not Correctness

Because no consolidated gold rating exists, agreement, measured as [[educational-measurement|inter-rater reliability]], is the outcome. Human alpha is sobering in economics: only 5 of 31 criteria reach a tentatively acceptable value, the Nudging conclusion criterion sits at 0.035, and the Pilot strike filter shows 93% unanimous agreement against alpha of 0.15 because a few minority ratings dominate. Medical criteria behave better: one middle-ear symptom criterion reaches alpha of 0.911, and another reaches 1.000. Against that baseline the authors replaced each human rater in turn with an [[automated-assessment|automated rating]] and recomputed alpha. In the main study, 89 of 103 criteria (86.4%) showed no decrease for at least one configuration; the Nudging-only study raised the count to 91 (88.3%), the figure carried into the abstract. The Alternative Annotator Test, which asks whether a model aligns with the rater group better than individual raters do, passes 90 of 103 criteria, with 2,423 of 5,787 combinations passing. Replacing two raters lifts the count to 93. The distribution matters as much as the peak: 14.6% of 20,464 tested configurations per criterion avoid a decrease, and those concentrate in medicine, at 16% of medical samples against 12% of economics samples.

## What Separates a Good Configuration

Because the winning configuration changes with task and criterion, the study treats the ensemble as the method rather than any single scorer. Llama 3.3 70b was the most frequent top performer, with 17 occurrences across economics criteria and 31 across medical ones, followed by Nemotron 70b, while GPT-OSS 120b led on 14 medical criteria. Prompt preference split by domain: training-transcript prompts ranked highest for economics, chained criterion-by-criterion prompts for medicine. Overlap among the top ten configurations averaged a Jaccard similarity of 0.36, forming two clusters that track the two domains, which the authors read as evidence that no single prompt travels. The domain-tuned models did not earn their specialization; Plutus surfaced only in tied or negative cases and MedGemma only once, also negative. A SHAP analysis of proxy models (R² = 0.73 for regression, F1 = 0.79 for classification) ranked model size and token volume highest, with variable output length hurting performance. Five repeats of a subset of configurations showed stable ratings despite the stochastic decoding setting. A companion study on the medical arm reaches the same verdict by another route, feeding scorer outputs to a classifier instead of swapping raters ([[baumartz-llm-essay-scorers-medical-education-2026]]).

## What this means for practice

- **Assessment designers.** Validate every task-and-criterion pair against human ratings before use; the top configuration is not portable, and the top ten for economics overlap only 0.31 on average.
- **Instructors.** Use the ensemble as a first pass that a human confirms ([[human-in-the-loop-ai|human-in-the-loop]]), not as a replacement: the headline counts are best-case, and most configurations lower agreement.
- **Administrators.** Local open-weight models keep student text on institutional infrastructure, which is what made this study permissible; budget for the human annotation that still grounds the system.
- **Researchers.** Report the human baseline alongside agreement change and the Alternative Annotator Test, because a low-agreement rubric makes replacement easy to claim and hard to interpret.

## Limitations

- No consolidated gold standard exists: alpha measures alignment with the observed raters, and in economics only 5 of 31 criteria reach tentatively acceptable agreement, so "no decrease" is a much weaker bar there than in medicine.
- The counts rest on the single best configuration per criterion, while most tested configurations lower agreement; the authors state that full replacement of all human raters is not supported.
- Only open-weight, locally hosted models were tested, for data-protection reasons, so no proprietary model appears in the comparison even though the authors expect closed models to score higher.
- Criteria requiring web access were excluded, and each domain contributed four tasks with separately designed rubrics, so some domain differences reflect design differences rather than domain difficulty.

## Citation

Baumartz, D., Mehler, A., Schrottenbacher, P., Hammerla, L., & Gombert, S. (2026). [*Rubric-Based AES with LLM Ensembles: Scoring of Student Responses in Critical Online Reasoning Using Ensembles of LLMs*](https://arxiv.org/abs/2611.21422). arXiv preprint 2611.21422.
