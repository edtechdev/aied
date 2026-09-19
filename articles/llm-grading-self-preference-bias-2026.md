---
title: "Risks of Using Large Language Models in Grading: LLMs and Humans Prefer LLM-Generated Writing Over Human's but LLMs Show a Stronger Systematic Bias"
created: "2026-09-18T14:40:00-04:00"
updated: "2026-09-19T06:05:00-04:00"
type: article
foundations: [academic-integrity]
technology: [llm, generative-ai]
assessment: [automated-assessment, assessment, ai-detection, automated-essay-scoring]
methods: [quantitative-research]
ethics: [bias-mitigation, equity-in-ai-education]
research_method: [experiment, quantitative]
level: [higher ed]
audience: [researchers, assessment designers, educators, administrators]
page_kind: [evaluation]
sources: ['raw/papers/llm-grading-self-preference-bias-2026.md']
confidence: high
---

> **Synthesis:** Mak (University of Warwick) asks whether an [[llm|LLM]] can grade student work fairly when the work it is judging may itself have been written by an LLM. Study 1 had four evaluators — GPT-4.1, GPT-5, Gemma3:1b and Qwen3:4b — score 1,426 authentic undergraduate psychology dissertations alongside GPT-4.1 and GPT-5 rewrites of each and fully GPT-generated versions prompted from the student abstracts. Every evaluator gave student-authored dissertations the lowest scores, rewrites intermediate scores and fully generated dissertations the highest, with effects as large as d = -1.85. Study 2 replicated the graded pattern on 50 abstracts for three of the four model evaluators and, in the paper's key contribution, ran a preregistered experiment with 300 human raters. Humans rated student-authored and GPT-rewritten abstracts as equivalent and preferred fully GPT-generated abstracts only moderately (d = 0.58), while the equivalent model contrasts exceeded d = 0.85, with z-tests confirming the preference was significantly stronger in LLMs. Because fully generated texts beat mere rewrites, the bias is not purely stylistic; it rewards characteristic LLM organization and reasoning. The implication is that [[automated-assessment|automated grading]] may advantage AI-assisted work and needs [[bias-mitigation|bias auditing]] before deployment.

## Key Findings

1. **Study 1 used a very large authentic corpus.** The student corpus contained 1,426 final-year psychology dissertations submitted by 1,426 unique students across ten academic years (2015/6 to 2024/5), averaging 5,532 words and roughly 7.89 million words in total, each conforming to a standard six-section empirical structure.
2. **Three text variants were compared.** GPT-4.1 and GPT-5 each rewrote every student sentence (7.79 million and 7.92 million tokens), preserving content while changing [[prompt-engineering|style]]; separately, GPT-4.1 and GPT-5 generated entire dissertations from the student abstracts (7.45 million and 7.89 million tokens), differing in both style and substantive content.
3. **All four LLM evaluators showed the graded preference.** Mean scores for student-authored dissertations were lowest under every evaluator (GPT-4.1 71.3, GPT-5 67.7, Gemma3:1b 73.8, Qwen3:4b 75.7), with fully GPT-generated versions highest (up to 90.1 under Qwen for GPT-5-generated text); every GPT corpus outscored the student originals at p < .001.
4. **The Study 1 effects were often large.** Effect sizes across the 16 student-versus-GPT comparisons ranged from d = -0.12 to d = -1.85, and 10 of the 16 exceeded d = 0.8; the student-versus-fully-GPT-4-generated contrast was the largest for GPT-4.1 (d = -1.85) and Qwen (d = -1.31), and student-versus-fully-GPT-5-generated was largest for Gemma (d = -1.21) and Qwen (d = -1.83).
5. **Fully generated texts beat rewrites, so the bias is more than stylistic.** Rewrite-versus-full comparisons were significant at p < .001 for seven of eight contrasts with effects from d = -0.36 to d = -1.61, the only exception being GPT-5's non-significant d = -0.04 for its own rewrite against fully generated text.
6. **Study 2 replicated the pattern on short abstracts.** Fifty abstracts (five per academic year, drawn from the 804 whose length fell between 160 and 180 words) were each paired with a GPT-5 rewrite and a fully GPT-5-generated version; GPT-4.1, GPT-5 and Qwen again scored student texts lowest, by an average of 12.7 points versus rewrites (d = -0.64 to -1.35) and 16.9 points versus fully generated versions (d = -0.87 to -1.61).
7. **Human raters behaved differently.** In the preregistered experiment (300 Prolific adults, M-age = 37.1, 155 assigned to the Rewritten condition and 145 to the Fully GPT-Generated condition), humans rated student-authored and GPT-rewritten abstracts as equivalent (beta = 1.45, t = 1.68, p = .093, d = 0.10) — a direct contrast with the [[llm|LLM]] evaluators, which all preferred the rewrites.
8. **Humans also preferred fully generated abstracts, but far more weakly.** In the Fully GPT-Generated condition student abstracts averaged 8.9 points lower than GPT-generated ones (beta = -8.85, t = -9.90, p < .001, d = -0.58), versus model effects consistently beyond d = 0.85 for the same contrast.
9. **The gap was statistically tested, not eyeballed.** A significant Condition by Authorship interaction (p < .001) was followed by z-tests on the effect sizes: the GPT preference was significantly stronger for GPT-4.1 (z = 5.08, p < .001), GPT-5 (z = 5.48, p < .001) and Qwen (z = 2.56, p = .010) than for humans.
10. **Gemma was the dissenting evaluator in Study 2.** Gemma3:1b, the smallest model, showed no significant student-versus-rewrite difference (p = .429, d = 0.14) and no significant student-versus-fully-generated difference (p = .070, d = -0.35), unlike its consistent behavior in Study 1; the author speculates that abstract-length texts gave it fewer distinguishing cues.

## The two studies and how they were designed

Study 1 asked whether [[llm|LLMs]] give higher marks to GPT-generated work than to human writing, and whether any such preference is stylistic or extends to the content GPT produces. The design exploited a natural three-way contrast within the same pool of dissertations: the original [[academic-integrity|student-authored]] texts, sentence-level GPT rewrites that preserved the ideas and arguments while changing the prose, and fully generated dissertations built only from each student's abstract, so that content as well as style was machine-produced. Four evaluators spanning proprietary frontier models (GPT-4.1, GPT-5) and smaller open-weight models (Gemma3:1b, Qwen3:4b) graded every text using the departmental score descriptors, two authentic exemplar dissertations at the top and bottom of the 2024 range, and instructions to use the full 0-100 range.

Study 2 moved to a smaller unit of analysis to make human comparison feasible: 50 student abstracts sampled within a narrow 160-180 word band, with GPT-5 rewrites and fully GPT-5-generated counterparts length-matched to their student originals within 5 words. The reason for the shift is stated plainly — full dissertations typically exceed 5,000 words, which would have made large-scale rating by non-experts impractical. The same four models graded the abstracts, and 300 preregistered human participants rated them in a 2 × 2 mixed design, with Authorship (Student versus GPT) varied within participants and Condition (Rewritten versus Fully GPT-Generated) between participants.

## Isolating self-preference from length, quality and prompt

The paper stacks three controls against the most obvious alternative explanations. Length is addressed directly in Study 2, where abstracts were sampled within a fixed word range and rewritten or generated texts were adjusted to within five words of their student counterparts, so score differences cannot be attributed to verbosity or concision. Prompt variation is addressed by design: Study 1 instructed a psychology professor to apply marking descriptors, while Study 2 instructed a [[human-in-the-loop-ai|layman reviewer]] to judge general [[writing-education|writing]] quality on the same 0-100 scale, using wording that could be given identically to models and people — and the graded preference survived the change.

The hardest rival explanation, that GPT texts are simply better written and deserve higher marks, is what the human comparison exists to test. If human raters had shown the same preference, the [[automated-assessment|LLM grading]] pattern would be more parsimoniously read as a quality difference rather than an evaluator bias. Because humans rated student and rewritten abstracts as equivalent while GPT-4.1, GPT-5 and Qwen all clearly favored the rewrites, the residual gap is evidence of a [[bias-mitigation|self-preferential bias]] in the models rather than an objective quality advantage.

Finally, the rewrite-versus-full contrast separates style from substance. A purely stylistic preference would have scored rewrites and fully generated texts alike, since both are GPT prose; instead the fully generated versions were almost always rated higher. The author reads this as models also rewarding the organization, argumentative structure, coherence and reasoning patterns characteristic of their own generated content — a preference for deeper properties rather than surface word choice. Because the [[generative-ai|generative models]] used as evaluators (Gemma, Qwen) also marked text they had not produced, casual memorization of one's own outputs is ruled out as the explanation.

## Separating the human baseline from the model bias

Study 2's central comparison is a numerical separation of human judgment from model judgment. Human raters did find a real difference, just a modest one: 8.9 points on a 100-point scale, d = 0.58, which the author treats as consistent with a genuine perceived quality difference — fluent, well-organized machine abstracts may simply read better to a general reader. The model evaluators, by contrast, produced effects that were both larger and differently distributed: they penalized student work at essentially every level, including against rewrites whose ideas were identical to the student originals, and their preference for fully generated text reached d = 1.61.

The [[assessment-validity|validity]] reading follows from that asymmetry. If both people and models reward machine writing, the human behavior can be folded into ordinary quality judgment; the model behavior cannot, because it appears even where content is held constant. That is what makes the bias systematic rather than substantive: models are not only tracking quality, they are tracking similarity to their own output distributions. The paper's proposed mechanism is familiarity — text produced from the same learned regularities that a model reproduces may appear more predictable and thus be judged better, so human writing that deviates from those regularities is penalized despite comparable quality.

## What it means for automated grading and AI detection

For [[automated-assessment|automated grading]], the consequence the author draws is fairness and [[equity-in-ai-education|equity]], not efficiency. Students who use [[generative-ai|generative AI]] heavily may receive higher grades than equally capable peers who work independently or lack tool access, which means [[summative-assessment|grades]] could partly measure conformity to LLM-centered writing patterns rather than knowledge and skill, and could actively incentivise AI-assisted writing. The recommendation is not a technical fix but a gate: LLM grading systems should face rigorous bias auditing and validation before or instead of deployment, and institutions should exercise extreme caution until systems can be shown to grade human- and AI-authored work without systematic bias.

The findings also cut against a common detection-adjacent proposal — using one LLM to judge whether another LLM wrote a text. If an evaluator systematically rates machine prose higher even when content is held constant, then a model's confidence about authorship and its judgment of quality are entangled; a tool that prefers machine text is a poor instrument for remaining neutral about it. The same failure mode matters for the [[ai-detection|detection]] and integrity workflows that increasingly sit beside AI grading, and it compounds concerns raised elsewhere about whether detector verdicts are reliable enough to carry disciplinary weight.

## Limits, and how far the result travels

The dataset, though large, is narrow: [[higher-ed|higher education]] psychology dissertations and abstracts from a single UK department, in English only, with writing conventions and [[assessment]] criteria that need not hold in other disciplines or languages — the author expects the magnitude and maybe the nature of the bias to differ elsewhere. The human sample is a general-population Prolific pool with at least undergraduate education rather than subject experts, and its Study 2 task was deliberately restricted to lay judgments of [[writing-education|writing]] quality, so the human baseline is a quality-perception baseline rather than an expert marking baseline.

Study 2 used GPT-5 exclusively for generation, and its abstract-level analyses rest on 150 texts, giving weaker power than Study 1; the rewrite-versus-full comparisons there would not survive correction for multiple comparisons even though they pattern with the dissertation results. Gemma3:1b's failure to reproduce the effect on abstracts is unexplained and sits uncomfortably with its Study 1 behavior. And the paper is still under peer review, with only Study 2 preregistered (aspredicted.org/bb3b4t.pdf), so the headline contrast between human and model bias should be treated as a strong but not yet vetted result.

## What this means for practice

- **Assessment designers.** Run bias audits before deploying LLM grading: in Study 1 all four evaluators scored student-authored dissertations lowest and fully GPT-generated texts highest, with effects up to d = -1.85.
- **Researchers.** Anchor model grading against a human rater baseline on the same texts: 300 human raters scored student and GPT-rewritten abstracts as equivalent (d = 0.10), while the equivalent model contrasts exceeded d = 0.85.
- **Administrators.** Treat [[automated-assessment|LLM grades]] as a fairness risk until validated, since students with heavy AI access can outscore equally capable peers and grades may reward conformity to LLM writing patterns rather than knowledge.
- **Educators.** Do not use one LLM to judge whether another wrote a text: a tool that rates machine prose higher even when content is held constant cannot be neutral about authorship.

## Limitations

- The corpus is psychology dissertations and abstracts from a single UK department, in English only (1,426 final-year dissertations across ten academic years), so the bias's magnitude and possibly its nature may differ in other disciplines and languages.
- The human baseline is 300 Prolific adults from the general population with at least undergraduate education, judging lay writing quality on a 0-100 scale - a quality-perception baseline rather than expert marking.
- Study 2 used GPT-5 alone for generation and rests on 150 texts in total (50 student abstracts plus their rewritten and fully generated counterparts), giving weaker power than Study 1; its rewrite-versus-full comparisons would not survive correction for multiple comparisons.
- Gemma3:1b failed to reproduce the pattern on abstracts (student versus rewrite p = .429; student versus fully generated p = .070), and the author leaves that divergence from its Study 1 behavior unexplained; the paper is under peer review and only Study 2 was preregistered.

## Connected Concepts

- [[automated-assessment]] — the practice the paper evaluates and the site of the fairness risk it documents
- [[ai-detection]] — undermined by the same entanglement between authorship cues and quality judgment
- [[bias-mitigation]] — the corrective the author demands: bias auditing and validation before deployment
- [[academic-integrity]] — the integrity stakes when AI-assisted work is systematically advantaged
- [[assessment-validity]] — the validity question of whether model grades measure knowledge or LLM conformity
- [[automated-essay-scoring]] — the specific system class the self-preference finding most directly threatens
- [[evaluative-judgment]] — human and model judgment compared on the same rating task and scale
- [[equity-in-ai-education]] — unequal tool access converted into unequal grades
- [[generative-ai]] — the technology whose output the evaluators were shown to favor
- [[llm]] — the three model families tested as graders across a wide capability range
- [[higher-ed]] — the psychology dissertation context from which the corpora were drawn
- [[quantitative-research]] — the experimental and regression-based method behind every reported effect

## Connected Articles

- [[llms-do-not-grade-essays-like-humans-2026]] — Evidence that LLM grading diverges from human essay judgment
- [[gpt-human-rater-essay-assessment-2026]] — Agreement between GPT and human raters on essay assessment
- [[humble-prompt-injection-ai-grading-red-team-2026]] — A second failure mode where submissions manipulate their own grader
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Reliability of AI scoring and when it can be trusted
- [[llm-essay-assessment-framework-reliability-2026]] — Framework-level treatment of LLM essay assessment reliability
- [[pecuchova-automated-grading-open-ended-genai-2026]] — Benchmarking GenAI graders against expert human markers
- [[llm-comparative-judgment-writing-screening-2026]] — Comparative judgment as an alternative writing-screening approach
- [[bassett-ai-detectors-education-2026]] — What AI detectors can and cannot establish about authorship
- [[van-vlasselaer-ai-detector-reliability-2026]] — Reliability limits of AI-generated-text detection
- [[llm-detecting-llm-generated-content-education]] — Using LLMs to identify LLM-written educational text

## Citation

Mak, M. (2026). [*Risks of Using Large Language Models in Grading: LLMs and Humans Prefer LLM-Generated Writing Over Human's but LLMs Show a Stronger Systematic Bias*](https://osf.io/preprints/psyarxiv/35utw_v1). *PsyArXiv Preprints* (under peer review).
