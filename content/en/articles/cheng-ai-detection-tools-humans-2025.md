---
title: "Ability of AI detection tools and humans to accurately identify different forms of AI-generated written content"
created: "2026-10-31T09:25:00-04:00"
updated: "2026-10-31T09:25:00-04:00"
type: article
published: "2025"
sources: ['raw/papers/cheng-ai-detection-tools-humans-2025.md']
confidence: high
page_kind: [evaluation]
research_method: [experiment]
discipline: [medical education]
level: []
audience: [researchers, administrators, medical educators]
foundations: [academic-integrity]
technology: [generative-ai, llm]
assessment: [ai-detection, assessment-validity]
methods: [quantitative-research]
ethics: [trust, ai-use-disclosure]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-31"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Cheng and colleagues tested whether [[ai-detection|AI detection tools]] and human experts can tell apart five graded forms of AI involvement in academic writing, using 30 pre-ChatGPT introductions from two [[simulation]] journals that were rewritten by ChatGPT4o to increasingly heavy degrees. All three open access detectors (ZeroGPT, PhraslyAI, Grammarly AI Detector) separated the five conditions with large effect sizes, but their absolute scores diverged enough that agreement between tools ranged from an ICC of 0.57 to 0.95. Five blinded healthcare simulation educators and researchers, by contrast, identified the correct condition 19% of the time overall, which is below the 20% expected from random guessing on five options. The study reframes detection as a measurement problem in [[academic-integrity]], not a verdict: detectors produce a graded signal that may help editorial triage, while human impressions of "that reads like AI" carry almost no [[assessment-validity|validity]] on their own.

## Key Findings

1. **All three detectors separated the five conditions.** Repeated measures ANOVA showed significant differences in AI detection scores across the ladder for ZeroGPT (partial eta squared 0.84), Phrasly (0.79), and Grammarly (0.75), each at p < 0.001.
2. **Tool agreement was good in one pair and moderate in the other.** ZeroGPT and PhraslyAI reached an ICC of 0.96, while ZeroGPT against Grammarly scored 0.60 and PhraslyAI against Grammarly 0.57, with biases near 25 points.
3. **Grammarly misread fully AI written text.** Its scores rose from 1.6 on human text to 62.5 on AI text from bullet points, then fell to 50.0 for text generated wholly from the title, the one non-monotonic result.
4. **Humans scored at or below chance.** Overall accuracy across the five conditions was 19% against a 20% random baseline, ranging from 30% for heavy editing down to 10% for AI text generated de novo.
5. **Human errors leaned toward calling text a mixture.** Of 30 human written introductions, 12 were labeled mixed and the false positive rate among the rest was 13/18, or 72.2%, which would mean frequent false accusations.
6. **Human and tool scores were unrelated.** Agreement between raters and each detector was an ICC of 0 for all three tools, despite detectors distinguishing the same conditions the raters could not.

## Five conditions, three detectors, five human raters

The design is unusually clean for a detection study because the human-written baseline is documented rather than assumed. The team drew 30 open access articles from *Advances in Simulation* and *Simulation in Healthcare*, published between 2000 and 2022, fifteen from each journal and balanced as six conceptual or innovation papers, six original research papers, and three reviews per journal. Only introductions of 500 to 600 words were eligible, which standardized length and kept the human baseline almost certainly human, since these texts predate the launch of widely available [[llm|large language models]].

Each introduction was then processed into five conditions: 100% human written (used verbatim); human written with light AI editing (spelling and punctuation); human written with heavy AI editing (grammar, sentence structure, readability); AI written from human content (the introduction reduced to three or four bullet points per paragraph); and 100% AI written from the title alone. ChatGPT4o was accessed between March 28 and April 28, 2025, with a new chat per condition and default temperature, and no token limits. The resulting texts were scored 0 to 100 for AI content by ZeroGPT, PhraslyAI, and Grammarly AI Detector, then five blinded raters, all active [[medical-education|healthcare simulation]] educators and researchers with 1 to 25 years of clinical and research experience, each classified a randomly assigned version of every article.

## Detectors separate the ladder but disagree on the rungs

Repeated measures ANOVA found significant differences across the five conditions for all three tools: partial eta squared of 0.84 for ZeroGPT, 0.79 for Phrasly, and 0.75 for Grammarly, each at p < 0.001. The ordering was monotonic in the expected direction for most of the ladder. ZeroGPT scored human text at 6.5 and rose through 20.2, 43.1, 89.9, and 92.5 across the five conditions. PhraslyAI ran 5.9, 24.8, 45.1, 85.6, and 92.4. Grammarly was compressed and non-monotonic: 1.6, 3.0, 11.5, 62.5, and then 50.0 for wholly AI written text, meaning it labeled a completely generated introduction as only half AI.

That compression matters for [[trust]]. ZeroGPT and PhraslyAI agreed closely, with an ICC of 0.96 and a Bland-Altman bias of -0.32. ZeroGPT against Grammarly reached only 0.60, and PhraslyAI against Grammarly 0.57, with biases near 25 points and wide proportional limits of agreement, which is where the abstract's 0.57 to 0.95 range comes from. Two tools behave like the same instrument and the third like a differently calibrated one, so a percentage score is not portable across vendors. The authors also note leakage at both ends: 1.6 to 6.5% AI content detected in fully human text, and 50 to 92.5% in fully AI text, so even the "clean" conditions were never scored cleanly.

## Why human judgment collapsed

Human accuracy across the five conditions was 19% overall, against a 20% chance rate for five options. By condition it was 17% for human written, 23% for light editing, 30% for heavy editing, 17% for AI from bullet points, and 10% for AI from title. Differences between conditions were not significant (p = 0.34), so expertise did not help raters find the easier rungs.

The error pattern explains the failure better than the headline number. Of the 30 fully human introductions, 12 were labeled a mixture of human and AI, and among the remaining 18 the false positive rate was 13/18, or 72.2%, rising to 83.3% in the worst-case sensitivity analysis. Of the 30 texts generated de novo, 17 were labeled a mixture, and among the remaining 13 the false negative rate was 10/13, or 76.9%, reaching 90.0% worst case. Raters defaulted to the middle of the scale when uncertain, which is a reasonable [[evaluative-judgment]] strategy and a disastrous one for a five-way classification. Agreement between human scores and each tool was an ICC of 0 for all three, with limits of agreement spanning -117 to +119 on a 0 to 100 scale.

## From verdict to triage

The paper's constructive move is to stop treating detection as a yes or no question. Because the tools tracked the ethical gradient the authors had built into the conditions, and because that gradient matches their earlier argument that generating new text is more suspect than editing existing text, a percentage can serve as a flag rather than a finding. They suggest that AI use above 40% in a paper should prompt a closer look by editorial staff, while explicitly declining to set a firm cutoff. That caution is consistent with the reliability data: a threshold borrowed from one vendor will not mean the same thing under another.

Their recommended package is layered. Detector scores trigger a conversation with authors, journals publish transparent expectations about acceptable use and [[ai-use-disclosure|reporting of AI use]], and reviewers verify cited sources, since fabricated references are a more tractable [[hallucination-risk|hallucination]] signal than prose style. They are blunt that the obvious fallback, asking a human expert to read for AI, does not work at the accuracy levels observed here. Notably, the discipline that produced this result is one where reviewers hold specialized content knowledge, which is exactly the condition under which one might expect human detection to succeed.

## What this means for practice

- **Instructors.** Tell students that neither you nor a detector can reliably tell edited AI prose from human prose, so the honest move is to design for disclosure and process evidence rather than to promise detection; the 72.2% false positive rate on genuinely human text is the number to put in front of a class.
- **Journal editors.** Treat a high detector score as a trigger for dialogue, not a finding, and avoid acting on a single vendor's percentage given ICC agreement as low as 0.57 between tools.
- **Administrators.** Do not build misconduct procedures on detector output alone; the paper's own reviewers, with 1 to 25 years of subject expertise, scored at chance.
- **Researchers.** Report which detector and which model version produced the text in any study of detection accuracy, because scores shifted markedly with editing depth and model choice in this dataset.

## Limitations

- Only three open access detectors were tested, chosen by a Google search for the best tools for academic writing after pilot testing excluded gptzero.me for over-flagging human text; subscription tools may behave differently.
- The generating model was ChatGPT4o, accessed March 28 to April 28, 2025, with short fixed prompts and default temperature, so results are tied to that model vintage and prompt set and may not transfer to newer models or freer prompting.
- The source articles were published between 2000 and 2022, which guarantees a human baseline but also means the detectors were judging prose from an earlier stylistic era, and no genuine student-authored assignments were involved, so nothing here speaks directly to classroom grading.
- Five raters produced the human data, were not trained to recognize AI patterns (deliberately, to mimic a typical academic), and were analyzed descriptively with repeated measures ANOVA, multilevel logistic regression, ICC, and Bland-Altman plots rather than a powered accuracy trial.
- The condition set omits AI text with subsequent human manual edits, which the authors excluded because manual editing is hard to standardize, and which they expect could mask unethical use.

## Citation

Cheng, A., Lin, Y., Reedy, G., Joseph, C., Wirkowski, S., Mallette, V., Nagesh, V., Krieser, D., & Calhoun, A. (2025). [*Ability of AI detection tools and humans to accurately identify different forms of AI-generated written content*](https://doi.org/10.1186/s41077-025-00396-6). *Advances in Simulation*, 10, 66.
