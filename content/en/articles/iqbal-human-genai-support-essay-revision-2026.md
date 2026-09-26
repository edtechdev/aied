---
title: "Human or GenAI Support? Conditions Impacting Students' Strategy Choices in an Essay Revision Task"
created: "2026-09-25T20:37:15-04:00"
updated: "2026-09-25T21:52:24-04:00"
type: article
published: "2026"
foundations: [cognitive-offloading]
pedagogy: [self-regulated-learning, scaffolding]
technology: [generative-ai, learning-analytics]
assessment: [feedback]
methods: [quantitative-research, network-analysis]
research_method: [experiment, network analysis]
discipline: [english education, language learning]
level: [higher ed, undergraduate]
audience: [instructors, instructional designers, researchers]
sources: ['raw/papers/iqbal-human-genai-support-essay-revision-2026.md']
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
reviewed_by: [editor]
---

> **Synthesis:** A laboratory study at a research-oriented university between July and September 2023 examined how 87 EFL students chose [[self-regulated-learning|self-regulated learning]] strategies during an essay revision task, and whether those choices tracked learning conditions or essay performance. Participants wrote an essay unaided, then were randomly assigned to revise it with ChatGPT 4.0, an experienced academic writing instructor, or no support. Mixture Markov Models combined with Expectation-Maximization clustering produced four revision strategies from trace data. Prior strategy use (Cramér's V = 0.333) and the available support (Cramér's V = 0.668) were associated with strategy choice, whereas [[motivation]], writing skills and metacognitive judgment accuracy were not, except in the no-support condition. No revision strategy was associated with essay score change, yet students with [[generative-ai|GenAI]] support improved their scores significantly more than the other two groups. The authors read the pattern as evidence that external support can bypass a learner's own [[metacognition|metacognitive]] judgment.

## Key Findings

- 87 participants (mean age 22.29, SD = 3.63; 56% undergraduate) were randomly assigned to revise with ChatGPT 4.0 (n = 29), a human expert (n = 28) or no support (n = 30).
- Four clusters fit best in both tasks (writing task log-likelihood −33249.39, BIC 69058.57; revision task −16821.87 and 35494.48).
- The four revision strategies were Writing Supported by Reading and Help-Seeking (n = 25), Writing with Gradually Decreasing Help-Seeking (n = 31), Writing-Centric with Multiple Supporting Processes (n = 26) and Fragmented Processes (n = 5).
- Strategy choice carried over moderately from the preceding writing task (Fisher's exact test p < 0.0001; Cramér's V = 0.333) and was strongly associated with the support condition (p < 0.0001; Cramér's V = 0.668).
- Metacognitive judgment accuracy (p = 0.172), writing skills (p = 0.261) and motivation (p = 0.683) showed no significant association with revision strategy; a permutation test found a marginal difference only in the no-support condition (p = 0.0460).
- Revision strategies were not associated with the change in essay score (H(3) = 3.895, p = 0.273, η² = 0.0108) or with the revised essay score (H(3) = 4.643, p = 0.200, η² = 0.0198).
- The experimental condition was associated with score improvement (H(2) = 16.591, p = 0.00025, η² = 0.174): students with GenAI support gained more than those with human-expert or no support.

## Study design and the four revision strategies

The study used a two-stage design with 87 non-native English speakers (first language Mandarin). Stage 1 was a 2-hour essay-writing task completed by everyone in the same environment with reading materials and a dictionary, without support. After a 10-minute break, participants watched a condition-specific tutorial and revised for 1 hour. The [[generative-ai|GenAI]] condition used ChatGPT 4.0 through the OpenAI API inside the platform, restricted to task topics and framed as a chat offering advice rather than generated text. The human-expert condition gave real-time guidance from an experienced academic writing instructor. Clickstreams, keystrokes and mouse movements were mapped to SRL processes (reading, re-reading, elaboration, monitoring, evaluation, [[help-seeking]]) and analyzed with [[learning-analytics]] methods. Randomization held (prior knowledge p = 0.827, [[motivation|learning motivation]] p = 0.321, CET-4 p = 0.628, CET-6 p = 0.514).

## What shaped strategy choice

The first research question tested four internal conditions and one external. Prior task experience was the only internal condition that mattered: essay-writing strategies were significantly associated with revision strategies (Fisher's exact test p < 0.0001; Cramér's V = 0.333, a moderate effect). Students who used the sequential reading-to-writing strategy split mainly between the writing-centric (20) and decreasing-help-seeking (15) strategies. Available support was a far stronger signal (p < 0.0001; Cramér's V = 0.668, a strong effect). Of the 29 students with GenAI support, 21 adopted decreasing help-seeking; of the 30 control students, 25 adopted the writing-centric strategy and none the decreasing-help-seeking or fragmented ones. No student under human-expert support adopted the writing-centric strategy. Metacognitive judgment accuracy showed no overall association (H(3) = 4.995, p = 0.172, η² = 0.024), but a permutation test found a marginal difference in the no-support condition only (p = 0.0460).

## Strategy choice and essay performance

Revision strategies were not associated with learning performance: neither score change (H(3) = 3.895, p = 0.273) nor the revised essay score (H(3) = 4.643, p = 0.200). Support type was: the experimental condition was significantly associated with score improvement (H(2) = 16.591, p = 0.00025, η² = 0.174, a large effect), and GenAI gains were higher than in the human-expert and control conditions, which improved roughly equally. Robust regressions controlling for the initial essay score, prior knowledge and English proficiency kept the condition effect (R² = 0.268). Within the gradually decreasing help-seeking strategy, students with GenAI support improved by 4 points on average, while those with the same strategy under human-expert support lost 0.5 points on average. The authors caution that these gains may reflect task-specific optimization rather than durable capability, citing [[cognitive-offloading|metacognitive laziness]] as a risk.

## What this means for practice

- Target revision scaffolds using the strategy a student adopted during the writing task, the strongest internal predictor of revision choice.
- Leave room for self-evaluation: metacognitive judgment accuracy was linked to strategy choice only when no external support was available.
- Instruct GenAI to prompt reflection on writing and revision strategies instead of supplying direct help, to counter over-reliance.
- Treat GenAI score gains as provisional: revision strategies were unrelated to performance, so higher scores did not come from better self-regulation.

## Limitations

- Students received no feedback on their essays or strategies before revising, which may have silenced the internal conditions and let external support dominate.
- Metacognitive judgment accuracy was operationalized as the self-assessment versus expert score gap, a narrow measure of the construct.
- The laboratory setting and a single 1-hour revision session leave the persistence of strategy adaptation unknown.
- Support dosage was unmatched, since ChatGPT gave longer responses than the human expert, and the fragmented-processes group held only 5 students; sensitivity analyses excluding it confirmed the main findings.

## Connected Concepts

- [[self-regulated-learning]]
- [[metacognition]]
- [[help-seeking]]
- [[generative-ai]]
- [[writing-education]]
- [[human-ai-collaboration]]
## Connected Articles

- [[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]] — frames GenAI as either a scaffold or a shortcut for self-regulated learning, the same tension this study tests with trace data.
- [[helpcoach-ai-help-seeking-scaffolding-2026]] — treats help-seeking as a teachable SRL process rather than a resource that is simply available.
- [[ai-writing-support-stage-ownership-2026]] — compares AI writing support at planning versus revision stages and what it does to text ownership.
- [[human-ai-collaboration-academic-writing-2026]] — examines structured human-AI collaboration in academic writing and its effects on writing and critical thinking.

## Citation

Iqbal, Sehrish; Jovanovic, Jelena; Fan, Yizhou; Raković, Mladen; Li, Xinyu; Chen, Guanliang; Gasevic, Dragan. (2026). *[Human or GenAI Support? Conditions Impacting Students' Strategy Choices in an Essay Revision Task](https://doi.org/10.1002/jcal.70300)*. Journal of Computer Assisted Learning, 42, e70300. https://doi.org/10.1002/jcal.70300