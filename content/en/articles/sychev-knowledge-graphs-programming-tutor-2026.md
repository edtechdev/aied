---
title: "Adapting Knowledge Graphs Representation for Storing Learning Problems in an Intelligent Programming Tutor: LOQI Format for Human-Readable Knowledge Graphs"
created: "2026-11-27T17:00:00-05:00"
updated: "2026-11-27T17:00:00-05:00"
type: article
published: "2026-11-12"
sources: ['raw/papers/sychev-knowledge-graphs-programming-tutor-2026.md']
confidence: low
evidence_context: educational
page_kind: [evaluation]
research_method: [system development, quasi-experiment]
discipline: []
level: [higher ed, undergraduate]
audience: [instructors, researchers]
pedagogy: []
technology: []
assessment: []
methods: []
institutions: []
ethics: []
foundations: []
contributors: [editor]
ai_assist:
  - model: tencent/hy4-flash:free
    role: drafting
    date: "2026-11-27"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers]
---

> **Synthesis:** Sychev and colleagues present LOQI, an author-centric language for moderate-sized, human-read [[knowledge-graph]] documents used by intelligent tutors. LOQI puts typed classes, enumerations, objects, constraints, metadata, and reasoning relations in one compact document, aiming to reduce the debugging burden of verbose triple serializations. The authors evaluated it in three ways: structural metrics over 20,973 code-tracing graphs, a preference survey with 34 technically trained readers, and [[benchmark|benchmarks]] against generic reasoning backends. A separate classroom study followed 87 undergraduates using a LOQI-based tutor for recursive code tracing and found higher post-test scores, but it had no comparison group. The paper concludes that LOQI is a practical authoring format for execution-level tutoring graphs, with partial support for [[reading-education|readability]] gains and no general advantage on conventional query workloads.

## Key Findings
1. **The format targets whole-graph authoring.** LOQI is designed for graphs that humans must read and debug as complete documents, not just query through isolated lookups.
2. **Structural compactness was mixed.** LOQI was much shorter than JSON-LD and somewhat shorter than Turtle, but Cypher used fewer lines with much longer ones.
3. **Readers preferred LOQI over two formats.** Technically trained participants favored it over Turtle and Cypher on readability, structure, and retrieval; the comparison with JSON-LD was inconclusive.
4. **Reasoning stayed within the range of generic engines.** On tutoring problems, speed rankings depended on instance size, and LOQI improved relative to some backends as graphs grew.
5. **The advantage did not generalize to queries.** On a generic retrieval benchmark, LOQI was slower than all four comparison engines.
6. **Classroom scores rose after tutoring.** Students improved from pre-test to post-test on overall, practice, theory, and tutor-linked items.
7. **The classroom result is not causal.** A single group, immediate post-test, and a graded post-test with an ungraded pre-test leave alternative explanations open.

## What LOQI adds

The authors distinguish machine-processed graphs, human-queried graphs, and human-read graphs. The last category covers moderate-sized execution-level models that domain authors inspect and revise as whole documents, as in the CompPrehension [[intelligent-tutoring|intelligent tutoring system]]. Earlier attempts to express these graphs in RDF/XML and Turtle produced verbose files with many low-level constructs, making manual review costly.

LOQI documents combine class declarations, enumerations, objects, and metadata. Classes support typed properties, inheritance, native enumerations, inline numeric ranges, and relations declared with their owning class. Relation quantifiers such as {1 -> *} act as upper bounds checked at load time; parameterized relations model patterns such as branch direction without duplicating relation names; and derived relations express partial or linear order through declarations such as transitive to, between to, closer to, and further to. The format deliberately does not support properties on individual edges, so such information must be modeled with intermediate nodes or parameterized relations. It also sacrifices direct SPARQL interoperability and requires an intermediate translation step.

In the code-tracing case study, one integrated graph unifies the abstract syntax tree of the source code, the control flow graph of admissible execution states, and the learner's click-by-click trace. Parameterized transitions encode if–else behavior, derived partial-order links describe statement nesting, and linear-order helpers identify skipped actions, early or late clicks, and the nearest valid anchor act. The authors report that this shifted their workflow from format-driven encoding toward model-driven design, though they did not measure time saved.

## What the evaluations showed

The structural comparison used 20,973 order-of-evaluation graphs exported into Turtle, LOQI, JSON-LD, and Cypher, for 83,892 measured files. Median LOQI files had 7.0% fewer lines than Turtle twins and 18.8% fewer significant lines, with lines shorter by a median of 12.6 characters; against JSON-LD the median line reduction was 71.8%. In a simulated 62 × 100 editor window, however, Turtle showed more visible significant lines than LOQI (54.5 against 48.2). The authors therefore call support for the compactness hypothesis partial and note that fewer lines do not mean fewer facts: the median ratio of LOQI assertions to Turtle triples was about 0.83.

The preference survey included 34 [[graduate-education|graduate]] students in [[cs-education|computer science]], data science, and artificial intelligence; 16 compared LOQI with Turtle and Cypher, and 18 compared it with Turtle and JSON-LD. Pooled Turtle–LOQI means were 4.47 for readability, 4.21 for structure, and 4.12 for retrieval, all significant after Holm adjustment. Against Cypher, means were 4.69, 4.75, and 4.81, also significant. Against JSON-LD, means were 3.56, 3.06, and 3.72, none significant after adjustment; the authors warn that this does not establish equivalence.

The reasoning benchmark used 271 problem instances. Median solve times were 10 ms for Clingo, 29 ms for Prolog, 48 ms for Jena, 49 ms for LOQI, and 169 ms for SPARQL UPDATE, with all engines reaching the same terminal verdicts. Clingo and Prolog were fastest on small cases, but their solve times grew about twelvefold and fortyfold from smallest to largest instances, versus two to five times for the other engines; LOQI's grew 2.3 times. On the separate BSBM retrieval workload with 1000 products, LOQI's mean solve time was 339.5 ms versus 39.0 ms for SPARQL, 85.8 ms for Jena Rules, 15.9 ms for Prolog, and 3.2 ms for Clingo.

In the classroom study, 87 undergraduates completed a 10-question pre-test, ten code-tracing problems in the tutor, and a comparable post-test. Mean normalized scores rose from 0.574 (SD 0.210) to 0.828 (SD 0.163). Mean absolute gains were 0.253 overall, 0.296 for practice, 0.187 for theory, and 0.265 for tutor-linked items; Wilcoxon signed-rank tests were significant in every category, with matched-pairs rank-biserial coefficients from 0.680 to 0.897. Students generated over 15,100 trace steps, approximately 9400 correct. Of 74 survey respondents, ease of use averaged 4.62 and the statement that the tutor helped consolidate material averaged 4.55, with 94.6% rating each 4 or 5.

## What this means for practice
- **Instructors.** Treat the classroom gains as evidence that the tutor is usable in class, not as proof that LOQI or tutoring caused the gains.
- **Instructors.** Watch for fatigue from long traces and repetitive tasks, which drew mixed survey responses despite overall positive ratings.
- **Curriculum designers.** Where step-by-step verification matters, consider representing code structure, execution states, and learner actions in one inspectable model.
- **Educational technology developers.** Keep LOQI as an authoring format and consider porting reasoning logic to a faster backend when instance sizes and speed requirements justify it.
- **Researchers.** Add a comparison group, delayed retention test, and reliability evidence before attributing [[learning-gains|learning gains]] to this tutor design.

## Limitations
- The classroom study had one group, one session, and an immediate post-test, with no randomized alternative condition.
- The post-test counted toward the course grade while the pre-test did not, which may have inflated gains; internet access was allowed during tutoring but not during either test.
- Participants came from one university, the tests lacked formal reliability estimates, and the post-test mean suggests a possible ceiling effect.
- The preference survey used technically trained readers from one institution and fixed left/right layouts; JSON-LD and Cypher were each tested in only one wave.
- The compactness corpus consisted of homogeneous generated expression graphs, not arbitrary knowledge graphs.
- Migration effort from existing RDF models, LOQI's learning curve, and broader Semantic Web interoperability remain unquantified.

## Citation
Sychev O, Denisov M, Prokudin A and Shashkov D (2026) Adapting Knowledge Graphs Representation for Storing Learning Problems in an Intelligent Programming Tutor: LOQI Format for Human-Readable Knowledge Graphs. Information 17:1142. https://doi.org/10.3390/info17111142
