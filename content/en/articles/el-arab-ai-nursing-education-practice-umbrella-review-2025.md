---
title: "The role of AI in nursing education and practice: umbrella review"
created: "2026-10-31T14:20:00-04:00"
updated: "2026-11-02T06:45:00-05:00"
type: article
published: "2025"
sources: ['raw/papers/el-arab-ai-nursing-education-practice-umbrella-review-2025.md']
source_url: "https://doi.org/10.2196/69881"
confidence: medium
page_kind: [synthesis]
research_method: [literature review]
discipline: [nursing education]
level: [higher ed, undergraduate, graduate]
audience: [instructors, curriculum designers, administrators, researchers, policymakers, medical educators, faculty developers]
foundations: [ai-literacy, curriculum-design, teacher-ai-competency, limitations-in-aied-research]
pedagogy: [professional-training]
technology: [llm, machine-learning, simulation, virtual-and-augmented-reality, personalized-learning]
methods: [meta-analysis-systematic-review]
institutions: [governance, regulation]
ethics: [privacy, bias-mitigation, equity-in-ai-education, digital-divide, ethics, explainable-ai, trust]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-31"
    agent: hermes-agent
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** This umbrella review asks what 18 prior reviews establish about AI in [[nursing-education]] and nursing work, and answers with three themes rather than a pooled effect. The reviews converge on [[privacy]], [[bias-mitigation]], transparency, accountability, and [[equity-in-ai-education]] as unresolved; on curricula that still lack [[ai-literacy]] and standardized AI content; and on an implementation gap in which development outruns operationalization. The authors are explicit that the reviews beneath them are heterogeneous and that no included review ran a [[meta-analysis-systematic-review|meta-analysis]], so their recommendations are directions for [[governance]] and [[curriculum-design]], not tested interventions with known effect sizes.

## Key Findings

1. The search identified 274 records; after 43.4% (n=119) were removed as duplicates, 56.6% (n=155) went to title and abstract screening, where 71% (110/155) were excluded as irrelevant. Full texts were assessed for 29% (45/155), and 40% (18/45) met all criteria, leaving 18 reviews in the synthesis, drawn from PubMed or MEDLINE, CINAHL, Web of Science, Embase, and IEEE Xplore.
2. The first theme, ethical and social implications, is the most consistently supported: reviews report concerns about data privacy, algorithmic bias, transparency, accountability, resistance to adoption, and unequal access, with equity concerns sharpest in resource-limited settings.
3. The strongest single figure in the ethical strand is attributed to one included review rather than measured here: von Gerich et al found that more than one-third (34/93, 37%) of the studies they examined failed to address [[ethics|ethical considerations]] in AI development and deployment, and their table records ethical discussion as absent from 34 studies.
4. The second theme, transformation of nursing education, centers on curriculum integration and AI-driven tools such as simulation, [[virtual-and-augmented-reality]], and large language models, with reported gains in [[critical-thinking|critical thinking]], clinical judgment, and confidence, set against missing standardized curricula and risks of [[cognitive-offloading|overreliance]].
5. The third theme, strategies for integration, calls for scalable models, robust ethical frameworks, interdisciplinary collaboration, and continuous [[educational-development|professional development]], while naming barriers that are organizational and social as much as technical: resistance rooted in fear of redundancy, absent standardized [[ai-education|AI education]], and disparities in technology access.
6. Quality appraisal with ROBIS and AMSTAR 2 found all 18 reviews relevant and eligibility criteria generally well defined, but the authors describe a dichotomy: systematic and scoping reviews met rigorous standards while narrative and bibliometric reviews were weaker on search reporting, dual review, and bias assessment.
7. No included review applied meta-analytical methods, and the synthesis reports no pooled estimate for any outcome; several reviews are described as primarily theoretical, with limited real-world implementation data.

## Three themes and no tally per theme

The paper names its themes consistently across results and discussion: ethical and social implications, transformation of nursing education, and strategies for integration. What it does not do is count. There is no statement of how many of the 18 reviews support each theme, no ranking of themes by weight of evidence, and no per-theme percentage anywhere in the results or discussion. Table 2 sorts the material into fields (AI and nursing ethics, AI and nursing education, AI in clinical practice, AI in nursing management, AI and interdisciplinary research) and lists the reviews behind each field by reference number, but it does not total those lists or map them back onto the three themes. A reader who wants to know whether the ethical strand rests on more reviews than the education strand cannot answer that from this paper, and any figure offered for it would be the reader's own arithmetic rather than the authors' finding.

This matters for how the themes should be read. The ethical theme is the one where the review makes its strongest evidential move, because it can point to a specific omission rate inside an included review. The education and integration themes are carried by convergent argument across reviews rather than by a measured quantity, which is a weaker kind of support even though those themes generate most of the practical recommendations.

## Three layers of evidence under one recommendation

An umbrella review sits on top of reviews that themselves sit on top of primary studies, and this one is explicit about the middle layer. The 18 included items span systematic, scoping, rapid, narrative, literature, and bibliometric reviews, and the authors adapted ROBIS and AMSTAR 2 domain by domain so that nonsystematic designs were not penalized for lacking procedures they never claimed. The adaptation is reasonable, but it means the quality scores are not directly comparable across review types, and the paper reports no overall certainty rating for its conclusions.

The bottom layer is thinner than the recommendation list suggests. Review after review in Table 1 is described as limited by descriptive primary studies, minimal empirical validation, and little real-world implementation data, and the AMSTAR 2 assessment notes that meta-analytical methods were not applied in any of the reviews included. Where the umbrella review cites numbers, they are the included reviews' numbers, and they arrive with those reviews' own sampling and quality problems attached. The practical consequence is a clear ceiling: statements such as "AI enhances critical thinking" or "AI improves decision-making" are reports of what reviews claim, not effects this review verified, and the distance between an umbrella recommendation and a tested intervention is two synthesis steps wide.

## An implementation gap framed as an equity problem

The most defensible analytic contribution is the diagnosis of where the literature stops. The authors describe a disproportionate emphasis on early-stage development, with only a limited number of studies addressing implementation and even fewer exploring operationalization, and they trace that gap to systemic conditions: financial constraints, infrastructure readiness, and workforce training. Read alongside the equity findings, the argument becomes structural rather than attitudinal. Access disparities in resource-limited settings are not a footnote to adoption; they are the reason a tool that works in one health system may widen gaps in another, and the reviews that discuss culture and language mismatches make the same point at the level of [[usability-research|usability]].

The paper reaches for sociotechnical explanation here, including the [[technology-acceptance-model]] and the fit between tool, organizational context, and the nurses who use it. That framing is more convincing than the individual-level language of resistance, because it locates the barrier in workflow compatibility, nurse involvement in design, and ethical [[guardrails]] rather than in clinicians' attitudes. It also explains why the recommendations that recur across reviews are procedural: audits, accountability for AI-related adverse events, procurement that includes nursing input, and interpretable outputs that can be scrutinized. None of these are proven to work by the evidence presented, but they are the measures that follow if the problem is misalignment rather than reluctance.

## What this means for practice

- **Curriculum designers.** Treat [[ai-literacy]] as sequenced content rather than a single module: foundational concepts in [[machine-learning|machine learning]] and [[statistics-and-data-science-education|data literacy]], practical ethical training, and supervised use of simulation and [[llm]] tools, with explicit assessment of the interpersonal skills those tools can displace.
- **Instructors and faculty developers.** Pair every AI-supported simulation or feedback tool with a planned human interaction that the tool does not replace, and tell students where reliance becomes a risk rather than a shortcut.
- **Administrators.** Put [[governance]] in place before scaling pilots: fairness and security audits, a named route for reporting AI-related adverse events, and procurement rules that require nursing involvement in design and evaluation.
- **Policymakers.** Fund infrastructure and access in underserved settings alongside adoption incentives, and make transparency and interpretability conditions of deployment rather than aspirations.
- **Researchers.** Report implementation and operationalization outcomes, not only development and acceptability, and follow reporting standards so that the next umbrella review has something firmer to synthesize.

## Limitations

- The design is an umbrella review, so it adds no primary data and cannot test any recommendation; no included review applied meta-analysis, and this review reports no pooled estimate.
- Review types are heterogeneous and the appraisal tools were adapted for nonsystematic designs, so quality judgments are not strictly comparable, and no overall certainty rating is given.
- The search covered literature up to October 2024, with a January 2025 recheck that found no new reviews; in a field moving this quickly, that boundary ages fast.
- Inclusion was restricted to English-language reviews, with primary studies, editorials, conference abstracts, and gray literature excluded, a limitation the authors acknowledge as potential publication bias.
- Because the review gives no count per theme and no effect sizes, the relative strength of the three themes cannot be judged from it, and the scope is nursing specifically, so transfer to other [[medical-education|health professions]], including medical education, is an inference the paper does not support.

## Citation

El Arab, R. A., Al Moosa, O. A., Abuadas, F. H., & Somerville, J. (2025). [*The role of AI in nursing education and practice: umbrella review*](https://doi.org/10.2196/69881). *Journal of Medical Internet Research, 27*, e69881.
