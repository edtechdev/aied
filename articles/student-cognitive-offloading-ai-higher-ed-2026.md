---
title: "Patterns of Student Cognitive Offloading to AI in Higher Education"
created: "2026-09-18T13:40:00-04:00"
updated: "2026-09-19T06:05:00-04:00"
type: article
foundations: [cognitive-offloading, critical-thinking]
technology: [conversational-ai, llm, generative-ai, learning-analytics]
pedagogy: [self-regulated-learning, metacognition]
methods: [quantitative-research, qualitative-research]
research_method: [secondary analysis, quantitative, mixed methods]
level: [higher ed]
audience: [researchers, educators, instructors, learning analytics designers]
page_kind: [evaluation]
sources: ['raw/papers/student-cognitive-offloading-ai-higher-ed-2026.md']
confidence: high
---

> **Synthesis:** Piatnitckaia and colleagues ask what cognitive work undergraduates actually delegate to [[generative-ai|generative AI]], and how much of that delegation is [[cognitive-offloading|offloading]] rather than learning. Using naturally occurring logs of [[conversational-ai|ChatGPT]] use at one European university, Study 1 applies [[llm|LLM]]-assisted coding to 3,047 messages from 46 undergraduates over a seven-week exam-preparation period; Study 2 hand-codes 1,140 messages from a 16-student subsample whose grades were available. Study 1 finds procedural and definition requests were the most common question types (22.94% and 14.47%), yet the Bloom distribution is topped by Analyze (27.28%) and Understand (23.76%) — the first fine-grained evidence that naturalistic [[higher-ed|student]]–AI use routinely aims at higher-order work. Study 2 separates offloading degree from Bloom level: about half of 125 dialogues showed none (49.6%), a third light (34.4%) and 16.0% heavy offloading, with heavy offloading concentrated in Create dialogues (80% of them) and rare in the bottom performance tier (5.9%). The [[learning-gains|grade]] association is descriptive, not causal, and one programming-heavy student drives part of it. The takeaway: [[metacognition|awareness]] of what is delegated matters more than prohibition.

## Key Findings

1. **Procedural questions dominated what students asked, but not how they were thinking.** Of 3,047 Study 1 messages, procedural requests led at 699 (22.94%), then definitions at 441 (14.47%) and explanations at 282 (9.26%); 686 (22.52%) were non-questions such as greetings or statements. Procedural, definition and explanation together accounted for nearly half of all queries.
2. **The Bloom distribution was led by a higher-order level.** [[critical-thinking|Analytical]] queries topped Study 1 at 831 messages (27.28%), ahead of Understand at 724 (23.76%), Remember at 470 (15.43%), Apply at 423 (13.89%) and Create at 214 (7.03%). Evaluate was 185 (6.07%) and 200 (6.57%) were unclassifiable.
3. **The LLM coder was checked against a human on a 200-message sample.** Agreement between GPT-4o-mini and a trained rater was substantial for question type (Cohen's κ = 0.76, 80% agreement) and for Bloom level (Cohen's κ = 0.75, 80% agreement), the basis for trusting automated classification of the full corpus.
4. **In the 16-student subsample the profile shifted toward understanding and generation.** Across 125 dialogues, Understand took 53 (42.4%) and Create 38 (30.4%), followed by Apply at 20 (16.0%) and Remember at 10 (8.0%); Analyze (3, 2.4%) and Evaluate (1, 0.8%) were rare. The authors read this as the small subsample emphasizing [[generative-ai|generation]] more heavily than the full cohort.
5. **Most dialogues were not offloading at all.** Of 125 coded dialogues, 62 (49.6%) were no offloading, 43 (34.4%) light offloading and 20 (16.0%) heavy offloading, using a rubric that reserves "heavy" for cases where the AI produces the first draft and constructs the core intellectual product.
6. **Heavy offloading clustered at the top of Bloom's taxonomy.** 16 of the 20 heavy-offloading dialogues (80%) were Create requests, and heavy offloading accounted for 42% of all Create dialogues; Understand held most light offloading (22 of 43, 51%). Remember was exclusively no-offloading (10 of 10) and Apply split evenly (12 none, 5 light, 3 heavy).
7. **Grade tiers differed, but not significantly.** Heavy offloading appeared at similar rates in the top (17.6%) and middle (17.5%) tiers and rarely in the bottom tier (5.9%); a χ² test found no significant difference (χ² = 5.80, df = 4, p = 0.215).
8. **One student carried much of the top-tier pattern.** The 12 heavy-offloading dialogues in the top tier were disproportionately produced by a single student (ID 1, 7 of 12 dialogues heavy, 58%); excluding them the top-tier heavy rate falls to 8.9%, below the middle tier, which the authors read as disciplinary context (programming) shaping [[cognitive-offloading|offloading]] more than performance.
9. **The authors present offloading as strategic adaptation, not cheating.** Top and middle tier students used [[conversational-ai|AI]] for complex delegation while bottom-tier students stayed with light or surface-level support, and the paper's recommendation is feedback on actual usage patterns rather than prohibition.

## Two datasets from one semester of natural use

Study 1 recruited 46 undergraduates (32 women, 14 men, aged 18–24) from a single European university through convenience sampling, spanning technical fields such as Data Science and Business Analytics as well as Economics, Politics and other social sciences. Students were randomly placed into 12 groups of four, each sharing one ChatGPT-4 account, and told only to use the assistant freely for exam preparation with no prescribed tasks, topics or limits. Data were exported and anonymized after the seven-week window (22.04.2024–12.06.2024), yielding 408 dialogues and 3,047 student messages; non-academic exchanges and boilerplate were flagged rather than deleted, personal identifiers redacted, and nesting acknowledged as messages within dialogues within groups.

Study 2 drew a 16-student subsample (1 man, 15 women) who gave written consent to partial de-anonymization so their messages could be linked to grades from a university [[summative-assessment|summative assessment]] in 2023, given out of 100 and grouped into top, middle and bottom thirds. That corpus holds 1,140 messages in 125 dialogues, with individual message counts ranging from 5 to 186. The design is entirely naturalistic: no surveys or [[self-report-measures|questionnaires]] were administered, institutional approval and written informed consent were obtained, and the procedure followed the Declaration of Helsinki. The authors are explicit that this is observational evidence about what students asked of [[conversational-ai|ChatGPT]], not about what they learned from it.

## LLM-based coding and how its reliability was checked

Study 1's classification was automated. Two Python scripts called GPT-4o-mini through the OpenAI API with separate prompts, one for question content type and one for cognitive complexity, both built on effective-[[prompt-engineering|prompting]] practice and both enforcing chain-of-thought reasoning so a rationale was generated and stored before the final label. Question categories came from prior work on question asking and were expanded inductively during preliminary exploration, while cognitive level used Krathwohl's revised Bloom taxonomy. To validate the pipeline, a stratified random sample of 200 messages was independently coded by a trained human rater, giving κ = 0.76 for question type and κ = 0.75 for Bloom level, both at 80% agreement.

Study 2 inverted the approach: with only 1,140 messages, all labeling of task type, Bloom level and offloading was done manually by a single rater. Task types were provisional labels during an initial read-through (Explain concept, Generate quiz, Draft code snippet and so on) with new labels created when an interaction did not fit, so a dialogue could carry several; 125 dialogues ended up with 198 task-type labels. Each dialogue received one Bloom level and one offloading category, unlike Study 1's message-level unit. The offloading rubric operationalizes [[cognitive-offloading|Cognitive Load Theory]], distinguishing no offloading (access or clarification), light offloading (extraneous-load reduction such as summarizing or formatting) and heavy offloading (where the AI supplies the first draft and the core intellectual product, potentially displacing germane load). It assigns categories by asking what the request's purpose is, who produces the first draft, and who constructs the novel argument or solution.

## Where student questions land on Bloom's taxonomy

Study 1's headline is that students were not just retrieving facts: Analyze (27.28%) and Understand (23.76%) together covered more than half of all messages, with Remember and Apply forming the middle band. The authors connect this to a large-scale Anthropic study of student interactions with Claude, which likewise found heavy use of Create and Analyze tasks, and read it as students routinely outsourcing complex thinking rather than memorization.

Study 2's dialogue-level distribution looks different — Understand (42.4%) and Create (30.4%) dominate, with Apply at 16.0% and Remember at 8.0% — and the authors attribute the gap to the 16-student subsample rather than to a contradiction, since their queries emphasized understanding and generation more heavily than the full cohort. Task types give a complementary view of the same dialogues: explain/understand concepts led at 21.21%, followed by seeking factual information (13.64%), summarizing (12.63%), text generation (10.61%) and paraphrasing (9.09%), with coding assistance a minority at 3.03% that was nonetheless disproportionately associated with heavy offloading.

## Offloading degree, grades, and where the pattern breaks

The contribution the authors claim first is a rubric that keeps [[cognitive-offloading|offloading]] conceptually distinct from Bloom's level. Applied to Study 2, it shows that offloading intensity rose with Bloom level, as the rubric's logic would predict: heavy offloading was overwhelmingly a Create phenomenon, while Remember dialogues were never offloading. The cross-tabulation also shows the two dimensions are not identical — Apply dialogues split across all three offloading categories — which is the paper's argument for measuring both.

The grade analysis is where the headline claim weakens. Top and middle tier students offloaded heavily at nearly identical rates (17.6% and 17.5%) while bottom tier students almost never did (5.9%), but the test is non-significant (p = 0.215) and the top-tier figure rests on one programming-focused student; removing ID 1 drops it to 8.9%. Individual profiles vary widely within tiers, with some top-tier students predominantly light offloading (ID 5, 8 of 14 dialogues) and low-volume users contributing too few dialogues to show any profile at all. The authors therefore propose that each tier's characteristic is descriptive and that discipline and task type, especially coding work in computer science, may shape [[cognitive-offloading|delegation]] habits more than overall performance — a point they return to as an open question about [[cs-education|computing education]] and over-reliance.

## What this means for teaching, and what the study cannot show

For teaching, the paper's framing is deliberately non-punitive. Rather than banning [[generative-ai|generative AI]] or treating delegation as cheating, it argues that the goal is to make students aware of what they are offloading, when, and why, and it points to real-time feedback, [[learning-analytics|learning analytics]] and chat-log review as mechanisms for tailoring that [[metacognition|reflection]]. It also calls for a shift from assessing the product of learning to designing [[assessment|assessments]] that make the process visible, and cites guidance mechanisms that ask students to articulate their own thinking before consulting AI as promising for protecting [[self-regulated-learning|self-regulation]] and higher-order thinking.

The limits are stated plainly. All participants came from a single institution, so institutional norms, [[learning-design|course design]] and [[educational-policy-ai|AI policy]] limit generalizability. In Study 1 groups of four shared one ChatGPT-4 account, which the authors say likely filtered out personal, naive or sensitive questions. Study 2's 16 students self-selected into grade-sharing and skew female (15 of 16), which restricts statistical power and makes the subsample non-random relative to the full cohort. Coding in Study 2 was performed by one rater, so inter-rater reliability could not be established, and the labels are the authors' own exploratory reading rather than a representative estimate. Most fundamentally, the measures capture prompts, not learning: an "Analyse" label means the request was analytical in form, not that the student performed or understood the analysis, and a "heavy offloading" label cannot see independent reasoning done before, during or after the exchange. The study is correlational and descriptive by design, and the authors position the performance-tier patterns as hypotheses for confirmatory, longitudinal or experimental work rather than findings.

## What this means for practice

- **Instructors.** Give students feedback on their actual AI use patterns rather than banning the tools; the authors' recommendation is to make delegation visible and [[metacognition|reflective]], not to prohibit it.
- **Instructors.** Design [[assessment|assessments]] that make process visible - for example asking students to articulate their own thinking before consulting AI - because the logs capture what students asked, not what they reasoned.
- **Learning analytics designers.** Build real-time feedback on chat logs that prompts students to name what they are delegating, and target it where heavy offloading clusters: 16 of the 20 heavy-offloading dialogues (80%) were Create requests.
- **Learning analytics designers.** Score [[cognitive-offloading|offloading]] with the paper's rubric (no, light, heavy, judged by who produces the first draft and the core argument) alongside Bloom level, since Apply dialogues split across all three offloading categories and the two dimensions are not interchangeable.

## Limitations

- Study 1 is a convenience sample of 46 undergraduates (32 women, 14 men, aged 18-24) at one European university, so institutional norms, course design and AI policy bound the findings.
- In Study 1, groups of four students shared a single ChatGPT-4 account, which the authors say likely filtered out personal, naive or sensitive questions.
- Study 2's 16 students self-selected into grade-sharing and skew female (15 of 16), leaving low statistical power and a subsample that is non-random relative to the full cohort; its 1,140 messages were labeled by a single rater, so no inter-rater reliability could be established.
- The grade pattern is correlational and non-significant (chi-square = 5.80, df = 4, p = 0.215), and the top tier's 17.6% heavy-offloading rate rests largely on one programming-focused student (7 of 12 dialogues; excluding them the rate falls to 8.9%); the labels describe prompts, not learning, so an "Analyse" label means the request was analytical in form, not that the student performed the analysis.

## Connected Concepts

- [[cognitive-offloading]] — the paper's central construct, here split into no, light and heavy offloading and linked to germane-load substitution
- [[critical-thinking]] — higher-order reasoning (analysis, evaluation) that students both seek and potentially displace through AI use
- [[metacognition]] — the judgment process behind offloading decisions, and the target of the feedback the authors recommend
- [[self-regulated-learning]] — the regulation of study effort that heavy delegation may bypass
- [[student-ai-interaction]] — the naturalistic ChatGPT logs that constitute both datasets
- [[generative-ai]] — the technology reshaping how students study, practice and demonstrate knowledge
- [[llm]] — the GPT-4o-mini model used as an automated coder in Study 1
- [[conversational-ai]] — ChatGPT as the tool students queried and delegated work to
- [[learning-gains]] — academic grades and performance tiers used as the Study 2 outcome variable
- [[prompt-engineering]] — prompting practice followed in designing the coding prompts, distinct from students' own prompting
- [[desirable-difficulties]] — the productive cognitive effort that heavy offloading may remove
- [[higher-ed]] — undergraduate context and the single-institution generalizability limit

## Connected Articles

- [[misiejuk-cognitive-offloading-prompting-2026]] — Cognitive offloading measured through students' prompting behavior
- [[nesnin-cognitive-offloading-ai-students-2026]] — Cognitive offloading among AI-using students
- [[lodge-loble-cognitive-offloading-2026]] — Conceptual treatment of cognitive offloading in the AI era
- [[metacognitive-training-optimal-cognitive-offloading-2026]] — Training students toward optimal, rather than maximal or minimal, offloading
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — Cognitive outsourcing and its implications for assessment design
- [[student-ai-conversations-cognitive-engagement-2026]] — What student–AI conversations reveal about cognitive engagement
- [[bloom-aligned-educational-control-llms]] — Aligning LLM behavior with Bloom levels
- [[cross-dataset-bloom-question-classification]] — Classifying questions by Bloom level across datasets
- [[llm-educational-question-cognitive-depth]] — Cognitive depth of LLM-generated educational questions
- [[ai-dependence-academic-writing-ipace-2026]] — Dependence on AI in academic writing

## Citation

Piatnitckaia, L., Corneloup, V., Bühler, B., Terzimehić, N., Kasneci, E., & Zenasni, F. (2026). [*Patterns of student cognitive offloading to AI in higher education*](https://osf.io/preprints/psyarxiv/tu5pb_v1). *PsyArXiv Preprints* (preprint, version 2).
