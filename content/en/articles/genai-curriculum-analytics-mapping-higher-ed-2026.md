---
title: "Leveraging GenAI models for Curriculum Analytics: A Human-Centered Approach for Curriculum Mapping in Higher Education"
created: "2026-10-21T13:48:12-04:00"
updated: "2026-10-21T13:48:12-04:00"
type: article
sources: ['raw/papers/10.1016_j.caeai.2026.100689.md']
confidence: high
published: 2026-10-20
page_kind: [evaluation]
research_method: [design and evaluation study]
discipline: [business education]
level: [higher ed, undergraduate]
audience: [curriculum designers, instructors, administrators, researchers]
pedagogy: [professional-training]
technology: [generative-ai, llm, prompt-engineering, human-in-the-loop-ai, learning-analytics]
assessment: [assessment-validity]
methods: [quantitative-research]
foundations: [curriculum-design, human-ai-collaboration]
ethics: []
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-21"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** [[curriculum-design|Curriculum mapping]] — recording which professional skills each assessment develops — is central to accreditation, yet it is labor-intensive, subjective, and usually binary: a skill is marked present or absent no matter how much it contributes to a grade. Jayalath and colleagues test whether [[generative-ai|generative AI]] can produce weighted mappings instead. Working with 19 core courses and 48 assessments from a three-year Bachelor of Commerce (Accounting) program, they asked two GPT models to distribute 100% across seven enterprise skills per assessment under four [[prompt-engineering|prompting strategies]], then compared those weights with expert-created ones. GPT-o3-mini under Zero-shot or chain-of-thought prompting reached a Krippendorff's alpha of 0.81. Two experts then rated the model's weights and reasoning on three adapted [[assessment-validity|validity]] dimensions. The argument is that generative AI is credible for explicit, high-frequency skills and unreliable for implicit ones, and that its proper role is human-validated [[human-in-the-loop-ai|decision support]] rather than automation.

## Key Findings

1. **Weighted mapping, not another accuracy figure.** Earlier GenAI mapping work, such as Zamecnik and colleagues' evaluation across 26 higher education courses (71% accuracy), records whether a skill is present or absent. This study instead requires the model to distribute 100% across the seven enterprise skills for every assessment, so a group presentation can be 40% Oral Communication and 10% Teamwork rather than simply "both".
2. **GPT-o3-mini outperformed GPT-4o, and Zero-shot matched chain-of-thought.** Against expert weights, GPT-o3-mini reached a Krippendorff's alpha of 0.81 under Zero-shot, 0.76 under Few-shot, 0.81 under CoT and 0.78 under one-by-one prompting, against 0.77, 0.72, 0.76 and 0.71 for GPT-4o. GPT-4o was dropped, leaving GPT-o3-mini with Zero-shot and CoT for the validation stage.
3. **Agreement varied sharply by skill.** Teamwork (0.82 and 0.87) and Oral Communication (0.84 and 0.72) approached near-perfect agreement with the expert mappings; Problem-Solving (0.68 and 0.72) stayed substantial; Written Communication (0.34 and 0.55) and Ethical Awareness (0.23 and 0.31) fell to fair and moderate; International Perspective was negative under both prompting methods (-0.19 and -0.15), and Self-Management ranged from 0.53 to -0.03.
4. **Human validation of the reasoning was moderate and dimension-dependent.** Two experts rated the selected model output from 1 (Not Aligned) to 5 (Very Aligned) on the three adapted validity dimensions, with [[educational-measurement|inter-rater agreement]] reported as a linear weighted Cohen's kappa. Under CoT, Content averaged 3.83 (κ = 0.82), Substantive 3.31 (κ = 0.81) and Generalizability 3.49 (κ = 0.88); under Zero-shot the same dimensions averaged 3.20 (κ = 0.57), 3.15 (κ = 0.68) and 3.97 (κ = 0.78).
5. **The human benchmark was itself uncertain.** The two experts' weighted mappings agreed at a Krippendorff's alpha of 0.70 overall, but only 0.29 for Written Communication, 0.47 for Problem-Solving and 0.50 for Ethical Awareness, against 0.68 to 0.79 for International Perspective, Self-Management, Oral Communication and Teamwork.
6. **Errors clustered into recognizable patterns.** Self-Management was over-identified from scheduling and deadline cues; International Perspective and Ethical Awareness were missed unless the description stated them; Written Communication was overweighted, with 16.3% of the issue comments concentrated in law and auditing contexts; Teamwork (2.3%) and Oral Communication (2.3%) were underweighted and Problem-Solving mislocated (1.2%).
7. **Skill coverage across the program was lopsided.** By the expert benchmark, Problem-Solving appeared in 18 assessments in Year 1, 14 in Year 2 and 9 in Year 3, while Self-Management appeared in only 2, 0 and 5.

## Naming the model's errors, and what prompts cannot fix

The study classifies its error patterns with an existing vocabulary for GenAI skill annotation, which separates the source of an error (systematic and task-inherent, or random and model-specific) from its type (boundary ambiguity, or conceptual misidentification). Self-Management over-identification is a model-side conceptual misidentification: an assessment that mentions deadlines is read as evidence of self-directed improvement. The same mechanism explains the overweighting of Written Communication, where any written output is taken to signal substantial writing demand. The omissions of International Perspective and Ethical Awareness are task-side conceptual misidentification — a property of constructs that are abstract and rarely stated in surface language even in curricula that plausibly develop them. Teamwork, Oral Communication and Problem-Solving fall into a third class, boundary ambiguity, where the deviation is one of degree and placement rather than of construct. The asymmetry matters, because the most frequently recorded issue categories, at 51.2% and 37.2% of reviewer comments, were the least responsive to prompting: structured reasoning narrowed model-specific gaps but did not resolve task-formulation ambiguity.

## The trade-off between defensible and transferable mappings

Chain-of-thought prompting looks like the clear winner on the first two validity dimensions: higher average ratings for Content and Substantive, and stronger inter-rater agreement (κ = 0.82 and 0.81, against 0.57 and 0.68 for Zero-shot). On generalizability the pattern reverses, with Zero-shot averaging 3.97 against 3.49. The authors read this as a specificity–scalability trade-off rather than noise: reasoning that attends closely to the features of one assessment can produce a mapping that travels less well to comparable tasks. Two results also cut against common assumptions about prompting. Few-shot prompting, which supplies worked examples, performed worse than Zero-shot for both models, possibly because the exemplars were selected for descriptive richness rather than balanced coverage across seven skills and assessment types, and because reasoning-optimized models may already decompose the task internally. One-by-one prompting, which evaluates each skill in isolation, was least consistent, plausibly because it removes the comparative context needed to distribute weights that sum to 100.

## From model output to a program-level review

The institutional claim is narrower than automation. What the approach offers a program is coverage visibility: weighting every assessment produces a distribution of skills across courses and years that course-by-course review rarely surfaces, directing attention to gaps, redundancies and imbalances in how skills are developed. The authors also report that the model is sensitive to how richly an assessment is described — reflective tasks containing explicit cues were judged more reliably than presentations or written assignments — so documentation quality, not only model choice, sets the ceiling on what a mapping can support. Set against the accreditation context of the study (AACSB Assurance of Learning, CPA Australia and CA ANZ requirements covering ethics, communication, teamwork and critical thinking), the practical reading is a review cycle in which GenAI drafts weighted mappings and experts adjudicate them, rather than a workflow that files the mapping as evidence.

## What this means for practice

- **Curriculum designers.** Use weighted mappings as a screening instrument for program-level coherence. The shape of a skill's distribution across three years is what exposes gaps and redundancies that a presence-or-absence map hides.
- **Instructors.** Expect usable output for skills an assessment description states explicitly, and re-check the implicit ones by hand — international perspective, ethical awareness and self-management were exactly where the model failed.
- **Administrators.** Treat GenAI output as an input to review, not a record. With the experts in this study agreeing at only a Krippendorff's alpha of 0.70 on their own weights, the benchmark itself bounds what any automated mapping can be validated against.
- **Assessment designers.** Write assessment descriptions that state intended skill development explicitly. The model reads scheduling cues as self-management and any written output as writing demand, so implicit intent is where errors concentrate.
- **Researchers.** Replicate across model families and programs before generalizing. This study tested two models from one family in one program, with no statistical significance testing of the differences it reports.

## Limitations

- This page was written from a journal pre-proof. The article is accepted and citable by DOI, but it has not been copyedited, typeset or assigned final volume and page numbers, so the version of record may differ in detail from the text summarized here.
- Two models from a single family (OpenAI GPT) were compared, and only the strongest configuration went forward to expert validation, so the model comparison is narrow.
- The data come from one program — 19 courses and 48 assessments in a Bachelor of Commerce (Accounting) — and the authors note that skill data collection systems vary across universities, limiting generalization.
- No statistical significance testing was conducted for differences between models and prompting strategies, given the small evaluation set and limited statistical power.
- Expert judgment itself carried ambiguity: inter-rater agreement was 0.29 for Written Communication, 0.47 for Problem-Solving and 0.50 for Ethical Awareness, so part of the measured error may be benchmark noise rather than model error.
- Skill coverage was uneven (Problem-Solving far more frequent than International Perspective), and the few-shot exemplars were not balanced across skills or assessment types, both of which may have shaped the reported performance.

## Citation

Jayalath, V., Barthakur, A., Dawson, S., Tingey, J., Crase, L., & Kovanic, V. (2026). [*Leveraging GenAI models for Curriculum Analytics: A Human-Centered Approach for Curriculum Mapping in Higher Education*](https://doi.org/10.1016/j.caeai.2026.100689). Computers and Education: Artificial Intelligence, 100689.
