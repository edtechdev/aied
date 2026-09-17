---
title: "The Uneven Impact of Generative AI on Student Learning: Examining the Roles of Reliance, Evaluation Literacy, and Course Policy in AI-related Courses"
type: article
created: "2026-09-17T09:40:00-04:00"
updated: "2026-09-17T09:40:00-04:00"
foundations: [ai-literacy, cognitive-offloading, critical-thinking]
pedagogy: [self-efficacy, student-ai-interaction]
technology: [generative-ai]
ethics: [ai-misuse-learning-harm, equity-in-ai-education]
sources: ['raw/papers/uneven-impact-generative-ai-student-learning-2026.md']
confidence: high
research_method: [survey, quantitative]
level: [higher ed]
audience: [researchers, instructors, administrators]
systems: [educational-policy-ai]
---

> **Synthesis:** Surveying 118 students across 12 AI- and data-intensive courses at an R1 university, Manikonda and colleagues show that [[generative-ai|GenAI]]'s effect on learning is not a function of how *much* students use it but of *how* they rely on it. Clustering returned four profiles in which near-identical usage levels produced different benefits, and regression separated two constructs the literature usually collapses: [[cognitive-offloading|cognitive reliance]] (organizing, evaluating, decomposing problems) predicted positive impact, while *early reliance* — consulting GenAI before independent thought, traditional search, or an instructor — predicted both academic benefit and negative impact. The study's sharpest result is a moderation: the association between early reliance and negative impact grew *stronger* as [[ai-literacy|evaluation literacy]] rose, so students who judge AI output most skilfully reported the most harm from asking it first. Perceived [[educational-policy-ai|instructor policy]] and access conditions (premium versus free, single versus multiple tools) sorted the sample further, leading the authors to argue that institutions need policies that clarify appropriate use and equalize access rather than rules that simply permit or forbid.

## Design and Sample

The study surveyed students enrolled in AI- and data-analytics-related courses at Rensselaer Polytechnic Institute during Spring 2026 — artificial intelligence, [[machine-learning|machine learning]], data analytics, decentralized systems, [[ethics|AI ethics]], biostatistics, and economic analysis. Participation was voluntary and anonymous through course instructors and in-class announcements, with IRB approval and no compensation. Of 143 complete responses, the final sample was **118 [[higher-ed|undergraduate]] and graduate students from 12 courses across multiple disciplines**.

The instrument contained **60 Likert-type items** on a 1–4 scale ("Not Applicable" coded as the midpoint, 2.5), organized into **eight multi-item constructs and five single-item measures**. Multi-item scores were averaged, and internal consistency was reported with Cronbach's alpha — academic task support (12 items, α = .911), positive impact (9 items, α = .892), academic benefit (6 items, α = .876), [[cognitive-offloading|cognitive reliance]] (6 items, α = .864), evaluation literacy (8 items, α = .840), negative impact (7 items, α = .768), early reliance (4 items, α = .722), and attitudinal change (3 items, α = .683). Two constructs do the conceptual work. **Cognitive reliance** is using GenAI to recall, organize, combine, evaluate, and apply information or solve problems. **Early reliance** is a different act entirely: consulting GenAI *before* independent thought, a traditional search, or instructor support — a timing and ordering variable rather than a volume variable, and the paper's central claim is that treating "reliance" as one continuum obscures exactly this difference.

Four complementary analyses were run: hierarchical agglomerative clustering (Ward's method) over the 60 items; item-level group comparisons with Mann–Whitney U (rank-biserial effect size) or Kruskal–Wallis with Dunn post-hoc and Holm adjustment, all with Benjamini–Hochberg FDR correction; four mutually adjusted standardized regression models on the full sample with HC3 standard errors and course-clustered errors as a robustness check; and a gradient-boosting classifier with SHAP values as an exploratory check on nonlinearity.

## Four Profiles: Same Usage, Different Benefits

Clustering produced four interpretable student types, and the dissociation between use and benefit is the point: **High Usage/High Benefits**, **Moderate Usage/Moderate Benefits**, **Moderate Usage/Less Benefits**, and **Less Usage/Less Benefits**. The two moderate clusters matter most — they sit at nearly the same usage level but report different benefits, which is why the authors refuse to read frequency as the explanatory variable. Cluster [[writing-education|composition]] also tracked academic level: graduate students made up 46.4% of the high-usage/high-benefit cluster but only 16.6% of the low-usage/low-benefit cluster.

Three further patterns appeared in the profiles. Confidence in completing tasks **without** GenAI ran inversely to usage and reported benefits, so the students getting the most from the tools were also the ones least confident working unaided. Evaluation literacy was high across the board (construct mean 3.52 of 4), yet the Moderate Usage/Less Benefits cluster scored *higher* on it than the Moderate Usage/Moderate Benefits cluster — an early sign that evaluative skill and benefit do not travel together. And usage, benefits, and reported change in interactions with peers and faculty rose together, which the authors read as evidence that GenAI reshapes the social context of study, not just the task.

## Access, Tool Breadth, and Perceived Policy

Item-level comparisons found **no** FDR-significant differences by academic level, school, course activity, or whether students paid for premium access themselves versus receiving it from another source. Differences appeared for premium versus free-only access, single- versus multi-tool use, and perceived instructor policy.

The clearest pattern was **single- versus multi-tool use**, where multi-tool users reported higher responses on nearly every significant item across task support, positive impact, cognitive reliance, early reliance, and academic benefit. The largest gaps were improved academic-work quality (rrb = −0.53), retention of course material (−0.49), using GenAI to evaluate work (−0.48), improving work quality (−0.45), and breaking down complex problems (−0.44). The single exception is the one that matters most for practice: **single-tool users reported *greater* confidence in completing tasks without GenAI** (rrb = +0.25). Broader tool use is thus associated with more perceived support and more reliance, but not with more independent confidence — a caution for institutions in fields where AI may not always be available.

**Premium access** showed fewer but consistent advantages: more use for finding information (+.27) and brainstorming (+.28), and higher benefits for saving time (+.31), continuing work when stuck (+.38), improving work quality (+.39), completing tasks beyond current expertise (+.46), and improved academic-work quality (+.40). Perceived **instructor policy** produced several differences with small effect sizes (ε² = .06–.19), largest for confidence in one's skillset after using GenAI (ε² = .19); because the omnibus test carries no direction, the authors report variation across policy groups rather than an ordering among encouraged, limited, and discouraged use — although the regression below supplies the direction.

## Regression: Benefit, Harm, and a Counterintuitive Interaction

The models explained 68.4% of the variance in academic benefit (adjusted R² = .641), 79.7% in positive impact (adjusted R² = .771), 30.0% in negative impact (adjusted R² = .212), and 36.9% in course-supported GenAI learning (adjusted R² = .290) — substantially more purchase on the positive outcomes than on the negative ones.

Academic benefit was positively associated with **early reliance** (β = .301, p < .001) and academic task support (β = .294, p = .008). Positive impact was associated with **cognitive reliance** (β = .495, p < .001), academic task support (β = .242, p = .016), confidence in GenAI reliability (β = .196, p = .020), and *lower* when instructor policy discouraged GenAI rather than allowed it with limits (β = −.138, p = .017). Negative impact was associated with **early reliance** (β = .402, p = .004) and attitudinal change (β = .386, p < .001). Course-supported GenAI learning rose with attitudinal change (β = .242, p = .039) and fell under discouraging policy (β = −.186, p = .002). Under course-clustered standard errors only the academic-task-support → positive-impact path weakened (p = .060); the rest held.

The designed interaction is the finding the paper leads with. Of four theoretically motivated interactions tested, **early reliance × evaluation literacy** was significant for negative impact (β = .307, p < .001, and p < .001 under course-clustered errors). Simple slopes show no association at low evaluation literacy (−1 SD: b = .025, p = .861), a positive association at average literacy (b = .357, p = .004), and a stronger one at high literacy (+1 SD: b = .688, p < .001). Students who consult GenAI before thinking, searching, or asking a human report more negative consequences — and the more skilled they are at [[ai-ed-evaluation|evaluating AI]] output, the more harm they report. Evaluation literacy does not buffer early reliance; in this sample it magnifies it, which the authors connect to their earlier point that productive offloading requires enough domain knowledge to see what has been offloaded, and that the students best placed to notice the cost are the ones most likely to report it. A second interaction, early reliance × policy clarity, reached significance only under course-clustered inference (p = .026) and was not treated as a primary finding.

## Key Findings

1. **Four student profiles, not a single reliance continuum.** Ward clustering of 60 items produced High Usage/High Benefits, Moderate/Moderate, Moderate/Less Benefits, and Less Usage/Less Benefits clusters — with the two moderate clusters showing that similar usage can yield different benefits.
2. **Benefits rise with use, but confidence without AI falls.** Confidence in completing tasks without GenAI was inversely correlated with usage and benefits across the clusters.
3. **Multi-tool users reported more support and reliance but less independence.** Multi-tool users rated nearly every significant item higher (largest: work quality rrb = −0.53, retention −0.49, evaluating work −0.48), the one exception being confidence without GenAI, where single-tool users scored higher (+0.25).
4. **Cognitive reliance predicts positive impact; early reliance predicts both benefit and harm.** Cognitive reliance was the strongest predictor of positive impact (β = .495, p < .001), while early reliance predicted academic benefit (β = .301, p < .001) *and* negative impact (β = .402, p = .004).
5. **Evaluation literacy strengthens, rather than buffers, the harm of early reliance.** The interaction was significant on negative impact (β = .307, p < .001): no association at low literacy (b = .025, p = .861), positive at average (b = .357, p = .004), stronger at high literacy (b = .688, p < .001).
6. **Perceived restrictive policy accompanied lower perceived returns.** Discouraged-policy perceptions were associated with lower positive impact (β = −.138, p = .017) and lower course-supported GenAI learning (β = −.186, p = .002) relative to "allowed with limits."
7. **[[self-report-measures|Perceived learning]] tracks whether GenAI augments or interferes.** SHAP rankings show higher perceived learning when students see GenAI improving work quality, enabling [[creativity]], helping organize and summarize ideas, and raising skill confidence, and lower perceived learning where they report harm to [[critical-thinking|critical thinking]] or added stress.

## What the Findings Can and Cannot Support

The study's contribution is the decomposition. It supplies a measured basis for distinguishing the *kind* of [[cognitive-offloading|offloading]] — organizing and summarizing ideas and discovering new insights were positively associated with improved learning, whereas consulting AI before any independent attempt was not — while cautioning that prolonged reliance on even the benign forms should be watched. It also quantifies a disadvantage that [[equity-in-ai-education|equity]] research has mostly described qualitatively: students with premium access and broader tool stacks reported more benefit, and breadth came with less confidence in unaided work.

The limitations are stated plainly and should constrain how the numbers are read. The sample comes from **one R1 university**, reflects only students who chose to share their experience, and may not represent students at other kinds of institution. All measures are self-reported perceptions on 13 constructs, so associations describe what students believe about their learning rather than measured [[learning-gains|learning gains]]; the regression on negative impact accounted for only about 30% of its variance, leaving most of the variation in reported harms unexplained. The FDR-significant policy effects are small in magnitude, and the authors flag the frequency-centred reading of AI impact as unreliable — their own data show that "how much" tells you less than "when, for what, and who evaluates it." The practical recommendation that follows is a move beyond permit-or-restrict policies toward explicit guidance on appropriate use, [[scaffolding|structural support]] for equitable access, and [[curriculum-design|course design]] that helps students extend rather than replace independent reasoning.

## Connected Concepts

- [[cognitive-offloading]] — the study's central distinction between cognitive and early reliance, and evidence that some offloading is associated with perceived benefit
- [[ai-misuse-learning-harm]] — early reliance predicts negative impact, and evaluation literacy amplifies rather than buffers it
- [[generative-ai]] — four measured profiles of use and benefit among students in AI-related courses
- [[higher-ed]] — R1 university survey of undergraduate and graduate students
- [[student-ai-interaction]] — a fine-grained account of how students consult GenAI relative to other help sources
- [[ai-literacy]] — evaluation literacy as a measured construct that does not guarantee better perceived outcomes
- [[educational-policy-ai]] — perceived instructor policy is associated with perceived impact and course-supported learning
- [[equity-in-ai-education]] — premium access and tool breadth sort benefits, and breadth tracks lower independent confidence
- [[self-efficacy]] — confidence without GenAI falls as usage and reported benefits rise
- [[critical-thinking]] — reduced critical thinking is the concern most tightly linked to lower perceived learning
- [[student-ai-interaction|help-seeking ordering]] — consulting GenAI before instructor or search as a distinct behaviour
- [[assessment]] — the authors' conclusion that course design must make the reasoning behind AI-assisted work visible

## Connected Articles

- [[du-yuan-epistemic-dependence-2026]] — Epistemic dependence in AI-mediated learning: six criteria separating productive reliance from harmful dependence (Du & Yuan 2026)
- [[verification-quality-reliance-calibration-genai-2026]] — Beyond checking: verification quality, reliance calibration, and learning in generative AI-assisted higher education
- [[genai-over-reliance-learning-2026]] — From Enhancement to Over-Reliance: A Mixed-Method Study of Generative AI and Sustainable Learning Performance
- [[student-dependency-on-ai-literacy-self-efficacy-2026]] — Understanding Student Dependency on AI: The Role of AI Literacy, Academic Self-Efficacy, and Resource Management Strategies
- [[trust-reliance-ai-education-2026]] — Trust and Reliance on AI in Education: AI Literacy and Need for Cognition as Moderators
- [[efficiency-gain-illusion-ai-overreliance]] — The Efficiency Gain Illusion: How AI Overreliance Feels Like Progress
- [[chirikov-regulate-ai-syllabi-2026]] — How instructors regulate AI across 31,000 course syllabi (Chirikov 2026)
- [[genai-student-experiences-uk-he-survey-2026]] — GenAI Student Experiences: UK HE Survey
- [[ai-overreliance-complex-adaptive-system-2026]] — AI overreliance modeled as a complex adaptive system
- [[generative-ai-reduced-study-time-math]] — Generative AI Reduced Study Time on Math

## Citation

Manikonda, L., Si, M., Munira, S., Seneviratne, O., & Bennett, K. (2026). [*The Uneven Impact of Generative AI on Student Learning: Examining the Roles of Reliance, Evaluation Literacy, and Course Policy in AI-related Courses*](https://arxiv.org/abs/2609.18676). arXiv preprint arXiv:2609.18676.
