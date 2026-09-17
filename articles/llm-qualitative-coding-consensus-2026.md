---
title: "How AI Coders Discuss, Disagree, and Reach Consensus: Challenges and Opportunities for LLM-Based Qualitative Coding"
created: "2026-09-14T09:12:54-04:00"
updated: "2026-09-14T09:12:54-04:00"
type: article
tags: [qualitative-research, llm, human-ai-collaboration, human-in-the-loop-ai, research-methods-aied, trust-calibration, limitations-in-aied-research, educational-nlp]
foundations: [human-ai-collaboration, limitations-in-aied-research]
technology: [educational-nlp, human-in-the-loop-ai, llm]
assessment: [qualitative-research, research-methods-aied]
ethics: [trust-calibration]
sources: ['raw/papers/llm-qualitative-coding-consensus-2026.md']
confidence: high
research_method: [benchmark, research methods]
audience: [researchers]
page_kind: [evaluation]
---

> **Synthesis:** Two [[agentic-ai|multi-agent]] [[llm]] coders can mimic the human practice of coding independently, debating conflicts, and building consensus, but their accuracy is governed less by architectural sophistication than by ordinary properties of the codebook and the excerpts they are handed. Across four qualitative corpora and 10,000 coded instances, this Stanford study finds that concise, semantically diverse codebooks and short, topically coherent excerpts raise first-pass coding accuracy, while intense and unresolved disagreement predicts *higher* accuracy once the debate is folded back into a re-coding pass. For [[human-ai-collaboration]] this reframes disagreement from a defect to be engineered away into a diagnostic signal, and it implies that [[trust-calibration]] in automated qualitative coding should be driven by process evidence — how much the agents argued — rather than by how neatly they converged. The paper's most unsettling result is that agreement between two AI coders can be an illusion of rigor, since both are instances of the same model and may be consistently wrong in the same way.

## Key Findings

1. Two independent AI coders using gpt-4o-mini achieved inter-rater reliability above Cohen's Kappa 0.85 on every dataset and label, yet their F1 accuracy ranged from 0.31 to 0.89 with a mean of 0.68 and a standard deviation of 0.16 — high agreement did not guarantee high accuracy.
2. On the hard subset where a coder chose the "Undecidable" label or the two coders conflicted, average accuracy fell to 0.60 (SD 0.25), quantifying a coverage-versus-accuracy tradeoff for the 10,000 instances drawn as five labels × 500 samples across the education, law, sociology, and [[medical-education|medicine]] corpora.
3. Lengthier codebooks significantly reduced initial coding accuracy (t = -11.702, effect size -0.287, p < 0.0001), as did lengthier excerpts (t = -9.249, effect size -0.438) and larger gaps in degree of specialization between codebook and excerpt (t = -7.629, effect size -0.331).
4. Semantic similarity had opposing effects on each side of the task: higher cosine similarity *within* the codebook lowered accuracy (t = -11.738, effect size -0.276, p < 0.0001) while higher cosine similarity *within* the excerpt raised it (t = 7.372, effect size 0.189).
5. A higher count of "Undecidable" labels before discussion predicted greater accuracy gains from AI debate (t = 3.274, effect size 0.123, p < 0.01), whereas more "Undecidable" labels surviving the discussion predicted smaller gains (t = -14.476, effect size -0.369, p < 0.0001).
6. Controversy in the debate was a positive predictor: more discussion turns raised discussion-prompted accuracy (t = 7.997, effect size 0.168, p < 0.0001), while higher ratios of resolved conflicts (t = -6.300, effect size -0.139) and correctly resolved conflicts (t = -9.720, effect size -0.169) predicted lower accuracy.
7. Modes of exchange that humans value in coding teams backfired for AI: more compromising (t = -4.251, effect size -0.066) and more collaborating moves (t = -8.420, effect size -0.255) both predicted lower discussion-prompted accuracy, with no significant relationship for competing modes.
8. A qualitative discourse analysis against the Thomas-Kilmann Conflict Mode Instrument showed the AI coders reproduced twelve constructive moves (stance maintenance, acknowledgment before disagreement, tentative stance, alternative proposal, collaborative reflection) but were missing entire human categories — moderation, clarification requests, personal narrative, metaphor and analogy.

## Method: A Literature-Informed Multi-Agent Pipeline

The system was designed from an exploratory [[meta-analysis-systematic-review|PRISMA]]-style review that narrowed 988 retrieved articles to 180 screened papers and finally to 118 works on automated qualitative coding, producing four design goals: justify code assignment, illuminate uncertainty and interpretive variability, help users calibrate expectations, and expose how data characteristics shape accuracy. Those goals become a pipeline in which two AI coders first code each excerpt independently at temperature 0, then debate only the conflicting cases at temperature 0.7, with each back-and-forth counting as one round and a maximum of three rounds before a case is recorded as "disagreed". When consensus is reached the pair collaboratively writes a new labeling rule, and both coders then re-code the entire dataset at temperature 0 using the shared knowledge from the debate. Prompts require a justification and permit exactly three answers — present, absent, or undecidable — and a preprocessing stage extracts candidate excerpts so that only relevant fragments, not whole transcripts, are coded. This design deliberately mirrors the multi-coder comparison and consensus-building that human teams use to manage the interpretive variability endemic to [[qualitative-research]], and it tests out-of-the-box model behavior rather than fine-tuned capability.

The evaluation apparatus is where the study departs from most single-dataset [[llm]] coding work, which the authors identify as the field's central gap. Four domains were used: a learning dialogue corpus, European Court of Human Rights cases, open-ended interview responses about music listening, and medical paper abstracts. Mixed-effects models treated dataset and label groupings as controlled random effects; undersampling handled class imbalance; F1 measured accuracy; Cohen's Kappa measured reliability; cosine similarity measured semantic proximity; and a Word Difficulty Score from the Corpus of Contemporary American English measured specialization. Done this way, the study treats [[research-methods-aied]] as an object of measurement rather than an assumed substrate, which is what allows the effects above to be compared across domains instead of asserted within one.

## Evidence: Codebook and Excerpt Properties Govern Initial Accuracy

The two oldest heuristics of codebook craft are also measurable accuracy levers. Concise codebooks outperformed long ones, consistent with evidence that retrieval degrades over extended contexts and attention dilutes across long inputs. Short excerpts beat long ones, since concatenated turns and unsegmented passages force coding decisions that mix several potential codes. The authors are careful about confounding here: straightforward codes naturally need short definitions, so they added specialized terminology and word-sense disambiguation controls and found code complexity statistically insignificant, preserving the length effect.

The similarity findings are stranger and more useful. Repetitive or circular code definitions — high similarity between words inside one codebook — hurt accuracy, while codebooks that describe a single code through multiple distinct formulations helped. On the excerpt side the sign flips: data whose vocabulary stays within a coherent topic is easier to code than scattered, multi-topic text. The paper reads this as a division of labor between broad comprehension for the codebook and targeted application for the data, recommending that analysts balance diversity and specificity according to the role each corpus plays. A third axis, the mismatch in specialization between codebook and excerpt, degrades accuracy for the same reason that text alignment fails across technical and lay registers: without shared vocabulary the model cannot map code onto segment.

## Debate, Not Convergence, Predicts Better Coding

The counterintuitive core of the paper is that disagreement is the most informative signal in the system. Uncertainty before the debate was *productive*: the more undecidable cases the coders flagged initially, the more accuracy the discussion recovered, because the exchange clarified criteria and produced a shared understanding. Uncertainty that survived the debate marked the opposite — a small residual accuracy gain. Persisting conflict after discussion behaved the same way, as a negative indicator, while the number of pre-discussion conflicts had no significant relationship with improvement at all (t = -1.888, effect size -0.037, p = 0.059).

At the level of the conversation itself, longer and more contested debates produced better discussion-prompted coding. Long exchanges clarified inclusion and exclusion criteria, and a *smaller* proportion of correctly resolved conflicts was associated with higher accuracy — meaning the debate around borderline cases, not its settlement, carried the information. This is where the study diverges from human-team norms as codified by the Thomas-Kilmann instrument. For people, collaborating and compromising modes provide psychological safety; for models lacking social and emotional dynamics, less collaboration produced better results, since it risked over-convergent answers that reinforce shared bias — both agents draw on the same architecture and training distribution.

The discourse comparison sharpens the point. The coders sustained stances, acknowledged the opposing view before disagreeing, softened their language, reassessed evidence, offered alternatives, and sought consensus — a credible surface [[simulation]] of coder argument. What never appeared were the moves that drive a human discussion forward: clarification requests, questioning of evidence, personal narrative, moderation, metaphor and analogy, reframing critique. The authors conclude that LLMs excel at structured reasoning while lacking adaptive responsiveness to context, and that the absence of questioning is the most consequential gap.

## Implications for Human-in-the-Loop Practice

Four design recommendations follow. First, systems should coach preprocessing, warning when codebooks or excerpts are likely to depress accuracy and suggesting one-to-two-sentence chunks organized around coherent topics. Second, the "Undecidable" label and persistent conflicts should be exposed as interpretable performance indicators, with pre-discussion uncertainty framed as a positive sign and post-discussion uncertainty as a warning. Third, controversy volume should be surfaced as a predictor of discussion-prompted quality, deliberately decoupling "the agents agreed" from "the coding is good". Fourth, discussion style should be tunable — a debate mode that injects structured opposition for ambiguous data, a strict mode for routine labeling.

Running underneath these recommendations is a theoretical claim that matters for [[educational-measurement]] and for any field that borrows reliability statistics. Intercoder reliability assumes independent judgments, but two instances of the same model share correlated errors, so high Kappa between AI coders may certify consistency rather than validity — exactly the concern the paper raises as a question: what does reliability mean when a coder is an AI? The authors propose metrics that account for process (the proportion of cases requiring debate, the stability of decisions before and after debate) rather than a single agreement coefficient, and they position reflexivity — interrogating one's own positionality — as the part of interpretive labor that remains human. This is a [[human-in-the-loop-ai]] argument in the strong sense: agreement should not be fully automated, and lasting disagreement can be a legitimate deliverable.

The limitations are stated plainly and are load-bearing for how the findings should travel. The model was never fine-tuned, so [[prompt-engineering|prompting]] alone bounds performance. Ground-truth labels from prior human coding or expert consensus oversimplify cases where disagreement reflects multiple valid readings rather than error. The baseline is pinned to one model version, though the authors argue the mechanism — accuracy gains from prolonged debate rather than rapid consensus — is structural to multi-agent debate and therefore model-agnostic. And no human study was run: trust, satisfaction, and workflow integration with real analysts were not measured, which is precisely the evidence that [[trust-calibration]] research in [[automated-assessment]]-adjacent settings needs next. These are the standard cautionary notes of [[limitations-in-aied-research]], and they mark the study as design-oriented insight rather than a [[benchmark]].

## Connected Concepts

- [[qualitative-research]]
- [[llm]]
- [[human-ai-collaboration]]
- [[human-in-the-loop-ai]]
- [[research-methods-aied]]
- [[trust-calibration]]
- [[limitations-in-aied-research]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[educational-measurement]]
- [[peer-assessment]]
- [[bias-mitigation]]
- [[metacognition]]

## Connected Articles

- [[agreement-not-quality-llm-coding-verification]] — Agreement Is Not Quality: Blind Expert Verification of Human and LLM Qualitative Coding When Human Consensus Is Not Ground Truth
- [[human-llm-collaborative-coding-k12-educator-ai]] — Human-LLM Collaborative Inductive Coding for Conceptualizing K-12 Educator AI Use
- [[human-vs-llm-ordered-coding]] — Comparing human and LLM ordered coding of qualitative data: How coding differences cascade through temporal analysis
- [[llm-sentiment-analysis-education-research]] — LLM-assisted sentiment analysis for integrated computational and qualitative mixed methods education research: A case study of students' written reflection assignments
- [[ai-agents-constructive-conflict-design-education-2026]] — Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers
- [[multiagent-classroom-dual-process-physics-teachers-2026]] — A multi-agent AI classroom based on dual-process reasoning hazards: a pilot with prospective physics teachers
- [[llm-judged-helpfulness-pedagogy-signal]] — Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs Do Not Grade Essays Like Humans

## Citation

Jeongyeon Kim and John Mitchell (2026). [*How AI Coders Discuss, Disagree, and Reach Consensus: Challenges and Opportunities for LLM-Based Qualitative Coding*](https://arxiv.org/abs/2609.11109). arXiv preprint.
