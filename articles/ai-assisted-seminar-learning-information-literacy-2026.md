---
title: "Developing an AI-Assisted Seminar-Based Learning Platform With Embedded Librarian Support: Enhancing Information Literacy of Engineering Research Teams"
created: "2026-09-20T11:39:21-04:00"
updated: "2026-09-20T11:39:21-04:00"
type: article
foundations: [human-ai-collaboration]
pedagogy: [collaborative-learning, sociocultural-learning, scaffolding]
technology: [recommender-systems-and-learning-paths, knowledge-graph, edtech-platform, human-in-the-loop-ai, educational-nlp]
assessment: [educational-measurement, self-report-measures, learning-gains, assessment-validity]
methods: [mixed-methods-research, usability-research, quantitative-research]
ethics: [trust]
research_method: [quasi-experiment, thematic analysis, survey]
level: [higher ed]
discipline: [engineering education, cs education, library and information science]
audience: [instructors, instructional designers, researchers, librarians, learners]
sources: ['raw/papers/ai-assisted-seminar-learning-information-literacy-2026.md']
confidence: medium
reviewed_by: [editor]
---

> **Synthesis:** Engineering teams need information literacy spanning patents, technical standards, and industry reports that generic AI recommenders rarely cover or judge. Huang built a platform fusing three components: a collaborative-filtering and NLP recommendation engine, an embedded librarian module for human consultation, and a seminar layer for peer discussion. A quasi-experimental pre-/post-test with 60 engineering students from three programs compared the integrated platform (n = 30) with conventional library instruction (n = 30) over an eight-week intervention. The experimental group gained 0.78 points overall on an ACRL-based instrument versus 0.25 for controls, with large within-group effect sizes (Cohen's d = 1.12–1.45), and search skills improved most (+0.87). Logs and interviews show where the human layer carried the load: 312 librarian consultations, source-evaluation questions dominating at 38.5%, and librarian assistance rated highest for satisfaction (4.3/5.0). The design treats AI as a retrieval engine and humans as evaluators; its single-site, non-randomized structure keeps the findings preliminary.

## Key Findings

1. Overall information literacy rose 0.78 points on a 5-point scale in the experimental group against 0.25 for controls, a significant between-group difference (t(58) = 3.53, p < 0.001).
2. Search skills gained most within-group (+0.87, d = 1.45); source evaluation followed (+0.83, d = 1.28), then information synthesis (+0.73, d = 1.15) and ethical usage awareness (+0.70, d = 1.12).
3. The recommendation engine reached precision 0.68 and recall 0.61 (F1 = 0.64), improvements of 30.8% and 27.1% over the Boolean keyword baseline (precision 0.52, recall 0.48).
4. Natural language query handling answered 72.8% of engineering-specific queries correctly, learning-path algorithms aligned with competency at 69.4%, and knowledge graph operations succeeded at 89.1%.
5. The librarian component absorbed 312 consultations (10.4 per participant), 38.5% about source evaluation and quality, with 73.4% answered within 6 h; usability scored 73.2 versus 62.8 (d = 1.15).

## Three components, three distinct jobs

The platform is a microservices system that deliberately splits labor. The AI module runs collaborative filtering over users' past interactions, content-based matching against [[recommender-systems-and-learning-paths|resource features]], engineering-tuned natural language processing, and a [[knowledge-graph]] in Neo4j linking technical terms, patent categories, and standards documents. The librarian module supplies what algorithms cannot: real-time WebSocket consultation, a workflow engine routing questions by subject area and workload, and indexed in-house repositories. The seminar module adds discussion forums, shared document annotation, and team portfolios. Vygotsky's zone of proximal development is the stated basis for the seminar layer, since peer interaction moves learners from independent searching to joint evaluation, which is why [[sociocultural-learning]] frames the collaboration. The design claim is [[human-in-the-loop-ai|human-in-the-loop]]: algorithms handle retrieval at scale, humans handle evaluation under uncertainty.

## Measured gains are real, but partly confidence

The ACRL-based instrument mixed roughly 60% performance-based items with 40% self-report Likert items, and the authors decomposed effect sizes by component. Performance-based items alone still produced large effects across all four dimensions (d = 0.92 to 1.20), so the gains are not purely perceptual. Self-report items produced larger effects (d = 1.38 to 1.84), which the authors read as increased confidence rather than skill. Controls showed a smaller gap between components (performance-based d = 0.32–0.38; self-report d = 0.40–0.48), consistent with the absence of a novel interface. The instrument was validated on 25 non-participants (Cronbach's α = 0.87; S-CVI/Ave = 0.91), though repeated use of the same pre- and post-test raised a testing-effect risk — a model of [[educational-measurement]] discipline and a caution about [[self-report-measures]].

## Human expertise absorbed the hardest queries

Usage logs show the librarian layer handling exactly the cases where the AI was weakest. Of 312 consultations, source evaluation and quality accounted for 38.5%, search strategy formation for 29.2%, citation management 18.6%, and repository navigation 13.7%. The authors tie this to the module's 72.8% query accuracy, noting 38.5% of librarian questions concerned tasks where the algorithm was least confident. Recommendation quality (precision 0.68, recall 0.61) was good but insufficient for credibility judgments on patents and standards, so human mediation remained essential. Satisfaction tracked the same pattern: librarian assistance 4.3 out of 5.0, recommendations 4.1, querying 3.9, seminars 3.8, learning paths 3.6, knowledge graph 3.4. Interviews (N = 18, κ = 0.78) echoed these, with 24 of 30 citing recommendation efficiency and 21 citing [[trust]] in librarians' presence.

## What this means for practice

- **Instructors and instructional designers:** keep a human expert at the credibility decision point. Precision of 0.68 left about a third of surfaced material unmatched, and source evaluation was the most-requested consultation type (38.5%).
- Build routing, not a help desk. Matching inquiries to librarians by expertise and workload let 312 consultations be absorbed at 10.4 per participant.
- Expect heterogeneous use. Eleven of 30 students leaned on AI, 8 on librarians, and 11 used both, so a single mandated pathway will under-serve one group or another.

## Limitations

- The study is single-site and non-randomized: 60 students from one university, assigned by ordered alternation within strata, so unblinded allocation and demand characteristics could inflate self-report scores.
- The eight-week intervention had 30 experimental participants, and the authors call the results "merely preliminary," citing limited power to distinguish fields of engineering and no test of persistence after librarian support is withdrawn.
- The three components were never isolated, so the gains cannot be causally attributed to AI, librarian support, or seminars individually.
- The platform is not tied to a dated system generation: the NLP layer is described only as pre-trained models "refined based on engineering vocabulary," with no named model release or version and no calendar window for the intervention, so the results cannot be anchored to a reproducible tool version.

## Connected Concepts

- [[collaborative-learning]]
- [[sociocultural-learning]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[recommender-systems-and-learning-paths]]
- [[knowledge-graph]]
- [[educational-measurement]]
- [[self-report-measures]]

## Connected Articles

- [[genai-academic-search-workshop]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ai-assisted-collaborative-learning-model-dbr]]
- [[clara-collaboration-literacy-dashboard]]
- [[hybrid-cf-kg-recommendation-multimodal-teaching-2026]]
- [[multimodal-knowledge-graph-educational-reasoning]]
- [[ai-learning-tools-engineering-education-needs]]
- [[ithaka-sr-ai-skills-college-graduates-2026]]

## Citation

Huang, L. (2026). [*Developing an AI-Assisted Seminar-Based Learning Platform With Embedded Librarian Support: Enhancing Information Literacy of Engineering Research Teams*](https://doi.org/10.1002/cae.70268). *Computer Applications in Engineering Education*, 34, e70268.
