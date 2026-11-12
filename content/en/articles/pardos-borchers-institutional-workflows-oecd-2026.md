---
title: "AI in institutional workflows: Learning from higher education to unlock new affordances for education systems and institutions"
created: "2026-11-12T13:05:00-05:00"
updated: "2026-11-12T13:05:00-05:00"
type: article
sources: ['raw/papers/pardos-borchers-institutional-workflows-oecd-2026.md']
confidence: high
page_kind: [synthesis]
research_method: [literature review]
discipline: [information technology]
level: [higher ed]
audience: [administrators, faculty developers]
foundations: [human-ai-collaboration]
technology: [llm, generative-ai]
methods: [ai-ed-evaluation]
ethics: [privacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Most discussion of AI in education centers on the learner at the keyboard. Pardos and Borchers argue that the more consequential site of change is the institutional back office — the systems deciding which credits transfer, which courses a student is advised to take, how curricula are classified against standards, and how assessments are produced and calibrated. The through-line is representational rather than conversational: embeddings of courses, syllabi, transcripts, and learning resources do the heavy lifting, while generative models enter as authors, translators, and synthetic respondents. The evidence is largely the authors' own studies and adjacent prototypes rather than a systematic review, ranging from validated articulation matches to a single small advising experiment. The chapter's contribution is to reframe [[institutional-ai-infrastructure|institutional AI infrastructure]] as where equity in mobility, workload, and curricular alignment is won or lost — and to warn that adoption depends less on model accuracy than on how recommendations reach the experts who hold approval authority.

## Key Findings
1. **Course embeddings recover curricular structure from enrollment alone.** A model trained only on historical course sequences placed Econometrics and Advanced Econometrics apart along a linear-algebra axis and answered the distinguishing question correctly, without access to catalog text or a general corpus.
2. **Embedding-based transfer prediction validated 65 existing articulations.** Machine-translation techniques mapped a two-year institution's course vectors onto a four-year institution's space, and the approach is now being piloted with 59 US higher education institutions and four systems of higher education.
3. **Prediction quality on institutional tasks is uneven but usable.** Course vectors reached Recall@10 = 0.70 on prerequisite prediction and RMSE = 42.48 on average-enrollment prediction, while session-based recommenders topped out near 0.30 Recall@k.
4. **Algorithm aversion is a design problem, not a training problem.** In a 2×2 experiment, hiding low-confidence outlier recommendations raised administrator acceptance and productivity, while asking users to flag recommendations lowered acceptance unless outliers were shown.
5. **AI-assisted tagging buys speed at a measurable cost in accuracy.** Collaborative tagging cut time by roughly 50% (p ≪ 0.01) but reduced recall by 7.7% (p = 0.267) and accuracy by 35% (p = 0.117); humans alone were most accurate and AI alone least.
6. **Credit hours are a poor proxy for workload.** Credit hours explained only 6% of variance in perceived workload, while LMS activity features explained 36% — six times more — exposing heavy first-semester STEM loads that credit counts conceal.
7. **Synthetic respondents can approximate item calibration.** Ensembles of LLMs produced item parameter estimates correlated above 0.8 with human-calibrated values, though a single model did not resemble the target population closely enough on its own.

## Representation before generation

The chapter's organizing move is to treat the embedding as the institutional workhorse. A course becomes a vector; a syllabus becomes a point in a space where neighbors are plausible substitutes; a transcript becomes structured data. That allows a registrar's office to compare thousands of courses without reading thousands of syllabi, and it is why the technology underlying [[llm|large language models]] matters to administration even where no chat interface exists. The demonstration is austere: a map of a large public university's curriculum built from enrollment histories alone was interpretable enough for a dean to see where a department was strong and where a neighbor could fill a gap.

Articulation extends this into machine translation between vector spaces. Because the spaces are learned from different populations and catalogs, translating one into the other asks which course at Institution B plays the role of a course at Institution A. The proof of concept validated 65 pre-established articulations between a two-year and a four-year US institution, and a pilot with 59 US higher education institutions and four systems of higher education suggests it has left the demo stage. What the method surfaces that manual review cannot is the negative space: equivalences that content and pathways imply but no agreement yet records.

## The adoption bottleneck is social

Accuracy does not survive contact with a workflow unmodified. Xu, Pardos and Pai's 2×2 experiment is the chapter's sharpest caution: inserting low-confidence or outlier recommendations into a matching interface depressed acceptance and productivity, and prompting administrators to flag bad recommendations — an affordance the literature recommended — reduced acceptance further unless outliers were there to flag. The reading offered is that flagging invites suspicion when there is nothing concrete to suspect. For anyone building [[governance]] around these tools, interface choices shape trust as much as model quality, and an accurate recommender can still be rejected by the people whose signature makes it real.

Tagging shows the same pattern. An embedding-plus-classifier pipeline reached non-expert accuracy with as few as 100 labeled examples and near-expert accuracy with 5 000 across text, image, and video features — a credible path to re-mapping millions of open educational resources onto a standard such as the US Common Core. But Ren and colleagues' human-AI comparison landed between the two solo conditions: faster than humans, worse than humans. AI moves the bottleneck from production to verification, and verification is where scarce expert time already goes.

Advising repeats the shape at smaller scale. First-year students (n = 33) described preferences and career goals to a GPT model that advised the advisor (n = 25) rather than the student; advisors rated the suggestions favorably and agreed exactly with the major recommendation 33% of the time. One-third exact agreement is not a replacement claim but a triage claim, and advisors' receptiveness turned on remaining the point of contact.

## Curriculum analytics and the workload correction

The curriculum analytics section carries the strongest empirical correction. Credit hours explained only 6% of the variance in perceived workload, while LMS features describing forum, assignment, and submission activity explained 36%. Course Load Analytics, applied across an entire catalog, showed first-semester students — particularly in STEM — carrying some of the heaviest predicted workloads despite low credit counts, a hidden load the authors link to attrition. This AI personalizes nothing; it corrects an administrative fiction that had governed sequencing for decades. Differential Course Functioning, applied to more than 20 000 undergraduates, detects course-specific success gaps between groups after controlling for overall performance, and a companion IRT analysis traced a marked downward shift in difficulty during the COVID-19 pandemic. Transcript processing closes the loop: OCR paired with semantic reasoning through multimodal models reached extraction accuracies above 90 percent, the precondition for every equivalence claim above.

## Assessment production and its quality gate

Two claims sit side by side. LLM-generated algebra items were statistically indistinguishable from textbook items on difficulty and discrimination under item response theory, and in one comparison slightly better at separating high- from low-ability respondents. Meanwhile a rule-based detector caught 91% of the item-writing flaws that human annotators flagged across 200 student-generated questions in four domains, against 79% for GPT-4. Generation is cheap; judging generation is what still needs instrumentation. PromptHive is the constructive answer — experts supply existing assessments as a style reference and specify new objectives, then preview items and hints before release. Reported effects are large: cognitive load halved, authoring time cut more than twenty-fold, and learning gains statistically indistinguishable from expert-written materials across a controlled study with over 350 learners. The caveat is equally large: where hallucination rates are not evaluated at 0%, staff must check every problem and hint before a student sees it.

## What this means for practice

- **Administrators.** Treat articulation coverage as a measurable institutional asset, not a compliance chore. The chapter supplies the metric set — articulation coverage, credit applicability, time-to-degree, time and administrative effort saved — and the 59-institution pilot as the scaling reference.
- **Faculty developers.** Put the expert in the authoring loop rather than the review loop. PromptHive's start-from-your-own-assessments design preserves instructor voice and makes preview meaningful, unlike generate-then-audit.
- **Advising and registrar staff.** Do not surface low-confidence recommendations by default; curate the set and reserve flagging affordances for cases with something concrete to flag.
- **Institutional researchers.** Compare credit-hour counts against LMS-derived workload estimates before redesigning a sequence; 6% versus 36% implies the nominal measure is close to uninformative alone.
- **Policy and [[privacy]] leads.** Build adaptive review mechanisms rather than fixed prohibitions, since capability outpaces policy cycles, and prefer privacy-preserving or open-weight deployments where transcript and enrollment data are involved.

## Limitations

- This is a chapter in an OECD Digital Education Outlook, not a primary study: it synthesizes the authors' prior work and adjacent literature, and its claims inherit whatever limitations those individual studies carry.
- Several cited results are preprints, working papers, or manuscripts under review, including the articulation-coverage measures and the Big Five workload account, so their figures have not necessarily been through peer review.
- The advising experiment is small and single-site: 33 students and 25 advisors cannot support generalization, and the 33% exact-agreement rate has no confidence interval reported in the chapter.
- Effect sizes for tagging and item generation are reported without the full study designs, and two tagging declines are not statistically significant (p = 0.267 and p = 0.117), weakening any efficiency-versus-quality conclusion.
- The chapter offers no cost analysis, no implementation timeline, and no account of failure modes in production deployments; institutional adoption reasons are argued rather than measured.
Coverage is skewed toward US higher education and the authors' own research programs; European and secondary-school extensions are asserted rather than demonstrated.

## Citation

Pardos, Z. A., & Borchers, C. (2026). AI in institutional workflows: Learning from higher education to unlock new affordances for education systems and institutions. In *OECD Digital Education Outlook 2026* (Chapter 11, pp. 200–214). OECD Publishing. https://doi.org/10.1787/bbeca162-en
