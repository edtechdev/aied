---
title: "Profiling cognitive offloading in LLM-mediated synthesis writing: Volume vs. content"
created: "2026-06-10T12:17:35-04:00"
updated: "2026-10-21T10:57:52-04:00"
type: article
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring, llm, learning-analytics]
methods: [quantitative-research]
discipline: [writing education, stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: high
page_kind: [framework]
sources: ['raw/papers/cognitive-offloading-llm-synthesis-writing.md']
---

> **Synthesis:** This study compares two approaches to profiling how learners [[cognitive-offloading|offload cognitive activity]] to LLMs during a synthesis writing task, drawing on Salomon's [[distributed-cognition|distributed cognition]] and the Kintsch–van Dijk model of text comprehension. Volume-based profiling (k-means, k=4) differentiated learners primarily by [[prior-knowledge|prior knowledge]], with higher [[llm]] use negatively associated with essay authorship. Content-based profiling (k=5) revealed qualitatively distinct patterns: from vocabulary clarification to active direction of structuring and generation to passive delegation of comprehension at both local and global levels. These patterns correspond to differences in learning strategies, behavioral markers, and essay authorship. The study provides a nuanced framework for understanding not just how much learners rely on LLMs, but what kind of cognitive work they offload — critical for designing [[ai-literacy]] interventions and [[formative-assessment]] that promotes productive AI use without undermining learning. The findings connect to [[self-regulated-learning]] [[research-methods-aied|research]] by showing that offloading patterns reflect different fragmentation of the cognitive process.

## Key Findings

The study's contribution is a comparison rather than a single result: it profiles the same 97 learners twice — once by *volume*, the number of prompts combined with prior knowledge, and once by *content*, what each prompt asked the model to do — and finds the two views are not redundant. Clustering by volume (four clusters, silhouette 0.412 against 0.481 for three) separated learners mainly by [[prior-knowledge|prior knowledge]], and volume tracked essay authorship down the clusters: 2.4 prompts with 80% of the essay written by the learner, 4.3 prompts with 81%, 10.1 prompts with 30%, and 25.1 prompts with 2%. Prior-knowledge scores ran .75, .34, .73 and .51 across those same clusters, and prompt pacing moved with them, from an average of 5.00 minutes between prompts in the minimal-offloading cluster to 0.53 in the heavy one.

What volume did **not** separate is the more useful half of the result. The four clusters did not differ significantly in how many prompts targeted local versus global comprehension, nor in how many carried an active learner role, and their learning strategies were not informative as a discriminator. Volume therefore says how much the tool was used without saying which cognitive operations the learner kept for themselves — which is why the authors conclude that interventions targeting volume, such as limiting the number of prompts, may be insufficient on their own.

Connective density — discourse markers such as "however" and "therefore", computed on the segments learners wrote themselves — varied significantly across the volume clusters and correlated negatively with prior knowledge rather than with prompt count (*r* = -.30, *p* = 0.007). The authors flag the direction as counterintuitive, and caution that the heavy cluster's low value should be read alongside its 2% authorship base.

[[self-report-measures|Self-reported]] cognitive load showed no significant differences across either set of profiles. The authors note the cluster sizes leave too few observations per group, but observe descriptively that the heaviest offloaders reported the highest mental demand — managing fast-paced offloading may itself feel demanding rather than effortless.

## What the content profiles separate

Coding all 564 prompts on two axes — active or passive, meaning who directs the work, and local or global, meaning which level of comprehension it touches — produced five profiles, and their differences include several that volume-based profiling had hidden:

- **Full offloading (n=41).** Passive prompts at 96% and global comprehension at 93%: these learners delegated comprehension, generation, and pasting, prompting a moderate average of 5.5 times and writing 61% of the text themselves.
- **Comprehension offloading (n=15).** Passive prompts at 88%, with 60% of prompts local: they relied on summarization and requests for specific information rather than locating it, at an average of 8.9 prompts, 58% authorship, and the slowest pace of the four profiles (4.75 minutes between prompts).
- **Strategic offloading (n=12).** The highest volume at the fastest pace — 12.9 prompts averaging 1.05 minutes apart — yet 36% of prompts were active: these learners directed the essay's structure and text generation while selectively delegating the rest, and wrote 24% of the essay independently.
- **Clarifying offloading (n=17).** Active prompts at 81% and local comprehension at 85%: almost exclusively vocabulary and concept clarification, at the lowest volume of the LLM-using profiles (2.9 prompts) and 91% authorship.
- **Non-users (n=12).** Learners who completed the task without the LLM form their own profile once a five-cluster solution is chosen.

The sharpest contrast is between the strategic and full offloaders, who arrived with similar prior knowledge (.58 and .66) and offloaded in opposite ways. One directed the work at high volume; the other directed almost none of it (4% active prompts) at lower volume. Mapped onto Salomon's distinction, low volume was most likely to reflect shared activity, but high volume accompanied either division of labor or shared work depending on how the comprehension process was fragmented — which is the sense in which what is offloaded can constrain how much is offloaded. Neither pattern is conveyed by a volume-based profile.

## Study Design & Method

Ninety-seven university students worked in one-hour small-group lab sessions facilitated by two researchers, for a 20-euro compensation; three further students were removed for completing the task incorrectly, and 12 of the 97 never used the LLM. Eligibility required enrollment in a degree program and English proficiency, and excluded psychology students because of their potential familiarity with the instruments administered after the task. The sample was 55.7% female and 43.3% male, predominantly at Master's level (80.4%), aged 24–26 (41.2%) and 21–23 (27.8%), and concentrated in Engineering (33.0%), Business/Economics (20.6%), and Computer Science/Informatics and Social Sciences (12.4% each).

Each learner read two academic texts presenting opposing views on "Predictive Modeling in Education" and wrote a synthesis essay in a custom-built interface that embedded an LLM prompt area beside a writing pad, with facilitators ensuring no other tools were used. The two texts were matched in length and number of ideas and checked for readability, scoring 35.4 and 34.8 on the Flesch–Kincaid test.

An experienced researcher coded all 564 prompts as active or passive and as local or global, following Salomon's distinction between shared activity and division of labor and the Kintsch–van Dijk micro- and macro-levels of comprehension. To probe reproducibility, three Claude Sonnet 4.6 agents labeled the prompts independently from the same framework and the majority vote was compared with the expert: Cohen's kappa was 0.68 for 168 prompts, and averaged 0.64 (passive/global) and 0.61 (local/global) on two further batches deliberately not used to refine the framework. Clustering was k-means — volume used total prompts plus prior knowledge, content used four prompt-proportion features plus prior knowledge — and clusters were compared with Kruskal–Wallis tests and Benjamini–Hochberg correction, which the authors chose as appropriate for an exploratory study.

Alongside the clustering variables, learners were described by prior knowledge (AILIT-S, M = 0.6, SD = 0.2), cognitive load (NASA Task Load Index, α = .68), prompts (M = 5.8, SD 6.7), time on task (M = 29 minutes, SD 9), borrowing from the LLM into the essay (M = 66.3%, SD 42.1%), borrowing from the source text into prompts (M = 0.35, SD 0.26), and connective density (M = 0.31, SD 0.19).

## What this means for practice

- **Learners.** Stay involved in the parts of the task that build understanding — structuring the comparison, evaluating what the model produced, and choosing what to keep — rather than pasting text through: the heaviest offloading cluster (n=7, 25.1 prompts on average) authored only 2% of its essay, against 80% for the high-knowledge minimal-offloading cluster.
- **Instructors.** Do not police prompt counts as a proxy for effort: the authors conclude that interventions targeting the volume of LLM use, such as limiting the number of prompts, may be insufficient because the same volume can describe rather different offloading processes.
- **Instructors.** Teach the distinction between asking the model to clarify vocabulary or retrieve a fact and delegating whole-text comprehension, such as "Write me a 300-word synthesis" or "Are all main ideas mentioned?" — the second pattern corresponds to profiles in which learners participate actively in few, if any, of the task's cognitive operations.
- **Designers.** Make the distribution of cognitive work visible to learners and instructors, for example by logging prompts and the essay segments they fed, since profile differences were tied to what was delegated rather than only to how much.
- **Instructors.** Assess the synthesis process, not just the product, because essay authorship alone (2%, 30%, 80%, 81% across the volume-based profiles) does not reveal whether a learner offloaded [[self-regulated-learning|regulation]]-relevant comprehension work.

## Limitations

- Single-site lab study: 97 university students in one-hour small-group sessions using a custom interface, with three students excluded because they completed the task incorrectly.
- Sample and cluster sizes limit statistical power, as the authors state, particularly for detecting differences in self-reported measures such as cognitive load; the smallest volume-based cluster held 7 learners.
- The clusters were not validated against learning outcomes, so the profiles describe how cognitive activity was distributed but cannot show which pattern helps or harms learning.
- The design used one synthesis-writing task with two texts (prompts averaged 5.8, SD 6.7), and the authors note other tasks may require other lenses; prompt coding reached a Cohen's kappa of 0.68 for 168 prompts, with automated annotation averaging 0.64 (passive/global) and 0.61 (local/global).

## Citation

Poquet, O., Nanduri, M. S., Salinas Loyer, M. X., Stadler, M., Sailer, M., & Jovanovic, J. (2026). [*Profiling cognitive offloading in LLM-mediated synthesis writing: Volume vs. content*](https://arxiv.org/abs/2606.10434).
