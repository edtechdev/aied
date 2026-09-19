---
title: "Finding Common Mistakes In Modelling With Mathematical Formalisms Using LLMs"
created: "2026-09-16T09:40:00-04:00"
updated: "2026-09-17T02:26:00-04:00"
type: article
foundations: [misconceptions]
technology: [cognitive-diagnosis, generative-ai, learning-analytics, llm, visualization]
assessment: [automated-assessment, feedback, formative-assessment]
sources: ['raw/papers/llm-common-modelling-mistakes-formalisms-2026.md']
confidence: high
research_method: [system development, learning analytics, design and evaluation study]
discipline: [cs education]
level: [higher ed]
audience: [instructors, researchers, software developers]
---

> **Synthesis:** Learning to model natural-language scenarios with mathematical formalisms — logical formulas, equations, regular expressions — is a central but hard [[cs-education|CS]] and [[math-education|STEM]] skill, and giving targeted [[feedback]] requires knowing which mistakes are common. Because most of these formalisms have a context-free grammar, each attempt corresponds to a syntax tree, and mistakes appear as recurring differences between the trees of incorrect and correct formalizations. Killich and colleagues present a tool-supported workflow that (1) has an [[llm]] propose candidate "bug fixing transformations" that explain many incorrect-to-correct pairs in large data sets, (2) clusters the candidates into a correlation graph, and (3) visualizes the resulting hierarchical clusters for instructors and [[learning-analytics|CS education researchers]]. Every candidate is validated algorithmically before it is kept, and the workflow reproduces hand-identified propositional-logic [[misconceptions]], scales to far larger data sets than SAT-based alternatives, and generalizes to modal logic and computation tree logic.

## The problem: modeling with formalisms and targeted feedback

A typical learning objective in an introductory logic or formal-methods course is that students can translate a natural-language statement into the intended formalism. The paper's guiding question is stark: given a large data set of student modeling attempts, **how can common modeling mistakes be identified?** Identifying those mistakes is a preliminary step for understanding student struggles, exploring invalid conceptions, and ultimately providing advice and [[feedback]] in modeling assignments. It is also what makes specific advice and feedback possible in interactive learning systems.

The authors' starting point is syntactic. The syntax of many mathematical formalisms is specified by a context-free grammar, so every formalization is associated with a syntax tree, and modeling mistakes are reflected in differences between the syntax trees of correct and incorrect formalizations. A student who models "Anna goes to the cinema, but Bob only goes if Celine does" as $A \land (C \to B)$ instead of $A \land (B \to C)$ has produced a tree that differs only by a local rearrangement from the correct one. Common mistakes can therefore be found by identifying **bug fixing transformations** that explain structural differences across many syntax trees. This structural, tree-level view of [[misconceptions]] turns an instructor's slow manual reading of data sets into a [[cognitive-diagnosis|diagnostic]] search problem.

## A three-step workflow: identify, cluster, visualize

The paper's contribution is a tool-supported workflow (Figure 1) with three steps:

1. **Identify candidates.** Find bug fixing transformations that explain many student mistakes in large educational data sets.
2. **Cluster candidates.** Group transformations according to similarity.
3. **Visualize clusters.** Present the result to instructors and CS education researchers so they can recognize common mistakes.

The authors are explicit about the epistemics of this pipeline. Candidates found in Step 1 explain *frequent structural differences* between syntax trees, but it is **not guaranteed** that these correspond to actual conceptual mistakes. Structuring and visualizing the candidates in Steps 2 and 3 is therefore a necessary follow-up, letting researchers and educators check the candidates and select sensible common mistakes. Identifying such candidates had previously been time-consuming manual work; the workflow's purpose is to reduce that effort considerably.

The workflow is formalism-agnostic in principle. It applies to data sets for propositional, modal and temporal formulas, regular expressions, mathematical expressions, and to multiple data sets for one formalism — for example, running it on sub-data sets partitioned by the linguistic operator occurring in the natural-language statement yields candidate mistakes specific to each operator. A typical [[curriculum-design|teaching]] use is to feed the resulting candidates back into interactive learning tools as rule-like explanations for families of incorrect answers.

## Generating candidate transformations with an LLM, validated algorithmically

The technical heart of Step 1 is an iterative generate-and-validate loop (Algorithm 1). The input is a data set $D$ of pairs $(t, t^*)$ of syntax trees, where $t$ is an incorrect and $t^*$ the corresponding correct formalization; the goal is a *small* set $T$ of bug fixing transformations — tree-pattern rewrites of the form $\sigma \rightsquigarrow \sigma^*$ — that between them explain as much of $D$ as possible. A transformation explains a pair if the pattern $\sigma$ matches a subtree of $t$ and rearranging that subtree according to $\sigma^*$ yields $t^*$.

Finding a small set of such transformations optimally is NP-hard, and the authors report that a previous SAT-solver-based approach does not scale to large educational data sets. Their alternative leans on a different observation: typical student data is highly structured, and human experts can find reasonable transformations — slowly. So the workflow delegates candidate generation to an [[llm]] with the caveat that generated candidates must be filtered by an external check. Because large language models can be unreliable or misaligned with instructional goals, the authors adopt a repair-based perspective while incorporating **algorithmic verification**.

Concretely, each iteration randomly splits the current data set into batches of size $s$, prompts the LLM for transformations for each batch, and keeps only those explaining more than a $\delta$-fraction of $D$. Explained pairs are removed and the loop repeats until no new transformation has been found for $k$ iterations. In the experiments $s \approx 50$ (bounded by the model's token limits), $\delta = 0.01$, $k = 10$, and the prompt asks for transformations explaining at least 20% of a batch's pairs, with $\lfloor 0.2 \cdot s \rfloor$ transformations requested per batch. The model used was GPT-OSS-120B, chosen because initial experiments showed it powerful enough while small enough to be locally deployable. The prompt itself defines a small [[prompt-engineering|transformation language]]: patterns are trees over the operators of the formalism (e.g. `or`, `and`, `impl`, `not`, `eq`, plus modal or CTL operators), leaves are tree variables $Y_1, Y_2, \dots$, `and`/`or` may take variadic child sequences $Y_1 \dots Y_n$ that must be preserved unchanged, matching is injective and allowed anywhere in the tree, and every head variable must occur in the body. Propositional variables are barred — transformations capture structure, not content — and the LLM must answer in a strict JSON format.

## Clustering: correlation graphs and hierarchical clusters

The output of Step 1 is a flat list of transformations, many of which overlap: one may explain everything another explains and more. Step 2 structures that list. For each pair of transformations $\rho_1, \rho_2$, the workflow computes the fraction of the points explained by $\rho_2$ that are also explained by $\rho_1$, written as the weight of an edge $(\rho_1, \rho_2)$ in a **correlation graph** $G_D$. A weight of 1 means $\rho_1$ explains all pairs explained by $\rho_2$ and possibly more; 0 means none. A cluster is then simply a set of nodes connected by a path of non-zero-weight edges, and clusters are sorted by the number of data points they explain.

In all of the paper's experiments the correlation graphs decomposed into clusters of a very simple shape:

1. **Single-transformation clusters**, a transformation that only explains data points no other transformation explains.
2. **Clusters of equivalent transformations**, which all explain the same data points.
3. **Hierarchical clusters**, arrangeable in a tree such that if a transformation explains $D' \subseteq D$, each of its children explains only $D'' \subseteq D'$.

Types (b) and (c) are the useful ones for researchers: they surface representative transformations for a [[misconceptions|common mistake]] and separate "high-level" from "low-level" mistakes. A worked toy example makes the point concrete — five transformations over a six-pair data set form a single cluster, one of them explaining all six pairs and the others progressively narrower subsets. The [[visualization]] delivered to instructors is a hierarchical cluster table in which each transformation is illustrated by a simple representative example, with the number of pairs, distinct pairs, and the fraction of the cluster explained shown for each node.

## Reproducing mistakes known from the literature

The first evaluation question is whether the workflow recovers what human analysts already found. The propositional logic data set comes from Schmellenkamp et al. (2023), who identified common mistakes **by hand**; it contains 6106 (incorrect, correct) pairs, 1572 of them distinct, with 11 modeling contexts and 58 statements to model, and a partition into 34 sub-data sets for different linguistic operators (median size 65.5, mean 177.8).

On the full propositional data set the workflow found 248 clusters explaining 84.44% of the pairs, against 71.57% explained by the hand-picked mistakes. The two sources are not nested: 15.03% of pairs are explained **exclusively** by the workflow's transformations, while 2.16% are explained exclusively by the previously known mistakes — evidence that LLM-generated candidates both subsume and extend expert knowledge. Restricting attention to clusters that explain at least 0.5% of the pairs leaves 21 clusters that still cover 66.34%, with 4.6% explained exclusively. Restricting instead to at least 1% leaves 15 clusters covering 62.48%.

The hand-picked mistakes are also individually recoverable. For the mistake "a disjunction was erroneously used instead of a conjunction" — present in 334 pairs, 5.47% of the full data set — the workflow's corresponding cluster explains 330 of those 334 pairs (98.80%), and the cluster is itself hierarchical, containing broad rewrites such as $Y_1 \lor Y_2 \rightsquigarrow Y_1 \land Y_2$ alongside more specific ones such as $(Y_1 \lor Y_2) \to \neg Y_3 \rightsquigarrow (Y_1 \land Y_2) \to \neg Y_3$. New mistakes also appear: a transformation dubbed $\rho_{\text{xor-nand}}$ captures expressing an exclusive or via a disjunction of conjunctions where a negated conjunction was meant, explaining 114 pairs (6.57% of the pairs left unexplained by the hand-picked mistakes); the closest hand-picked mistake only covers exclusive ors written with a bi-implication. Another, $\rho_{\text{at-least-2}}$, captures using only a disjunction to express that at least two literals are true, explaining 28 pairs (1.61%). Broken down by linguistic operator, the workflow found transformations explaining more data points than the hand-picked mistakes in more than 64% of the 34 sub-data sets, and exactly as many in more than 14%.

## Scaling to large data sets and other formalisms

The second evaluation question is whether the approach works beyond the case where experts already know the answer. Modal logic (12482 pairs, 3951 distinct) and computation tree logic (CTL; 7210 pairs, 2695 distinct, collected by the authors with an interactive learning tool across two iterations of an introductory logic course in summer 2025 and 2026) serve as test beds.

The workflow explains 79.39% of the modal logic pairs with 1585 clusters; filtering to clusters explaining at least 0.5% leaves 38 clusters covering 40.36%, and at least 1% leaves 17 clusters covering 28.26%. For CTL the coverage is lower — 35.89% overall from 271 clusters, with 16 clusters explaining at least 0.5% each covering 19.78%, and 8 covering 13.86% — which the authors present as a limitation of the data rather than a failure of the workflow. Found transformations for modal logic include ones that change or add the modal operators $\Diamond$ and $\Box$, explaining 2.1%, 1.43% and 3.37% of the data, one of which ($\Box Y_1 \rightsquigarrow Y_1$) also occurs for propositional logic and represents modeling an "exclusive or" as an "or". For CTL, the largest two transformations, $\neg \Box Y_1 \rightsquigarrow \Diamond \neg Y_1$ and $\mathrm{AX}\, Y_1 \rightsquigarrow \mathrm{AG}\, Y_1$, explain 2.98% and 2.48%. The headline claim is comparative: unlike the earlier algorithmic (SAT-based) approach, the LLM-based workflow is suitable for very large sets of data, and it generalizes beyond propositional logic.

## Are the clusters useful for instructors?

Finding transformations that cover data is not the same as finding [[pedagogy|pedagogically]] useful ones, so the authors added a human check. A CS educator inspected every cluster explaining at least 0.5% of the pairs in each of the three data sets, asking whether the "main transformation" at the root of each cluster tree suffices for targeted feedback or whether sub-transformations lower in the hierarchy are needed.

The results were largely positive but mixed. In propositional logic, 19 clusters had main transformations suitable for feedback, though at least 4 needed sub-transformations for more specific feedback. In CTL, all 17 clusters had useful main transformations, with at least 6 requiring sub-transformations. In modal logic, the main transformation of 18 clusters was suitable, with at least 7 requiring sub-transformations — and in 16 clusters the main transformation was **too general** to identify specific mistakes directly, although for 5 of these the frequent sub-transformations revealed the underlying mistake. This is exactly the [[human-in-the-loop-ai|human-in-the-loop]] residue the authors predicted: frequency of explanation is a starting point, and the hierarchical, example-annotated [[visualization]] is what lets a researcher decide which candidates deserve to become [[feedback]] in a learning system.

The paper concludes that the workflow recovers many known propositional logic mistakes, finds additional ones, and applies to other formalisms such as modal logic and CTL. The authors note a further use case: tasks where students transform formulas into normal forms, where one does not immediately have (incorrect, correct) pairs and a suitable pair must be constructed from the incorrect formula, a previous correct formula, and the misapplied equivalence transformation. Future work includes applying the workflow to diverse data sets from other domains and studying how the resulting candidates can be integrated into the feedback systems of interactive learning tools.

## Connected Concepts
- [[cs-education]]
- [[misconceptions]]
- [[cognitive-diagnosis]]
- [[feedback]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[llm]]
- [[generative-ai]]
- [[learning-analytics]]
- [[math-education]]
- [[visualization]]
- [[intelligent-tutoring]]
- [[problem-solving]]

## Connected Articles
- [[llm-student-misconception-identification]] — Using LLMs to identify and characterize student misconceptions
- [[correct-answer-trap-misconceptions]] — The Correct Answer Trap: detecting hidden misconceptions and giving feedback
- [[student-misconceptions-conditionals-loops-taxonomy]] — How students (mis)understand conditionals and loops: a taxonomy
- [[llm-student-simulation-misconception-faithfulness]] — Misconception faithfulness of LLM student simulators
- [[prompt-problems-nl-programming-mistakes]] — Student mistakes and debugging in natural language programming tasks
- [[llm-adaptive-programming-error-explanations-2026]] — LLMs for adaptive explanations of programming errors
- [[yasir-llm-tutoring-agents-2026]] — LLM tutoring agents struggle where feedback matters most
- [[hazel-prover-classroom-proof-assistant-2026]] — Hazel Prover: a classroom proof assistant for structural induction
- [[visual-query-tracer-declarative-logic-learning]] — A visual query tracer and builder for declarative logic programming

## Citation
Killich, L., Schmellenkamp, M., Vehlken, F., & Zeume, T. (2026). [*Finding Common Mistakes In Modelling With Mathematical Formalisms Using LLMs*](https://arxiv.org/abs/2609.17111). arXiv preprint.
