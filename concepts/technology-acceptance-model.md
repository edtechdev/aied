---
title: Technology Adoption Models
created: "2026-08-18T14:55:00-04:00"
updated: "2026-09-17T02:30:30-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai]
stakeholders: [student-experience]
research_method: [research methods]
audience: [learners]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
systems: [technology-acceptance-model]
---

**Technology adoption models** are the theoretical frameworks used to explain and predict why individuals and institutions accept, adopt, and continue using new [[ai-technologies|technologies]] — and, in AI-in-education research, why learners, teachers, and organizations adopt [[generative-ai|generative AI]] tools. Rather than a single model, this is a family of theories that share roots in information-systems and social-psychology research, of which the **Technology Acceptance Model (TAM)** is the most widely applied. The knowledge base treats these models together because GenAI-adoption studies routinely combine them (TAM + UTAUT, TAM + TPB, UTAUT + ARCS) and because their core constructs — perceived usefulness, perceived ease of use, and social influence — recur across nearly every study of AI acceptance in education.

## Questions to Consider

- Think of a time you adopted a new app, tool, or AI service — and a time you abandoned one. What actually drove each decision: how useful it seemed, how easy it was, or what people around you were doing? Which factor do you suspect matters most, and can a survey really capture that?
- A common belief is that 'if a tool is clearly useful, people will use it.' Have you seen situations where a genuinely useful technology still failed to catch on, or a clearly limited one spread anyway? What might explain the gap between objective usefulness and actual adoption?
- Adoption frameworks like TAM were designed in the 1980s for fairly simple systems. If you've used generative AI, in what ways does it differ from a word processor or a [[edtech-platform|learning management system]] — and why might a model built around 'ease of use' and 'usefulness' struggle to capture how people relate to something that talks back?
- [[research-methods-aied|Researchers]] often say perceived risk and trust matter less for AI adoption than expected. Before reading further, what do you predict: do students adopt AI because they trust it, despite risks, or are those concerns actually minor next to convenience and social pressure?
- The page argues that adoption frameworks treat using a tool as a one-time decision, but effective use may be an ongoing judgment. Where in your own or your students' practice does the line between 'choosing to use AI' and 'continually deciding how to use it well' seem to blur — and what would change if we measured that instead of mere uptake?
- Some researchers cluster learners into different 'adoption personas' instead of assuming one model fits everyone. What differences do you see among your own learners, colleagues, or students that a single average model of adoption might hide — and how could those differences shape how you support them?

## Introduction

**[[meta-analysis-systematic-review|Meta-analytic]] evidence on AI adoption.** A [[teo-ai-adoption-tertiary-meta-analysis-2026|meta-analysis of tertiary students' AI adoption]] (233 correlations, 32 studies, N = 16,977) finds moderate positive correlations for individual (r = 0.57), contextual (r = 0.53), and technological (r = 0.50) factors, with usage intentions the strongest predictor (r = 0.64) and perceived risks/trust weaker than expected. Its central critique is that the field **over-relies on traditional TAM/UTAUT** frameworks that predate modern intelligent systems and neglect AI-specific factors such as anthropomorphism and ethics — arguing these gaps matter for advancing theory and evidence-based policy.

## The model family

### Technology Acceptance Model (TAM)
Proposed by Davis (1989), TAM explains adoption through two core beliefs — **Perceived Usefulness (PU)** and **Perceived Ease of Use (PEOU)** — which shape users' **Attitude (ATT)**, then **Behavioral Intention (BI)**, then actual usage. Grounded in information-systems theory (adapted from the Theory of Reasoned Action), TAM has become the dominant framework for [[generative-ai|GenAI]] adoption in education. In educational GenAI research it is frequently extended with [[ai-literacy]], [[trust]], social influence, [[self-determination-theory|self-determination]], and **critical use** to capture adoption complexity beyond simple uptake.

### UTAUT / UTAUT2 / UTAUT3
The **Unified Theory of Acceptance and Use of Technology** consolidates TAM with eight prior models into four core determinants — performance expectancy, effort expectancy, social influence, and facilitating conditions (with UTAUT2 adding hedonic motivation, price value, and habit; UTAUT3 adding personal innovativeness). The knowledge base applies UTAUT across teacher and student populations: [[mathematics-teachers-chatbot-motivation-2026|Austrian secondary math teachers]] (UTAUT with 448 teachers), [[pre-service-science-teachers-ai-perceptions-2026|pre-service science teachers in Ghana]] (UTAUT + TPB), and [[tian-genai-learning-adoption-pathways-2026|students in Lesotho]] (UTAUT3 + ARCS, using PLS-SEM and fsQCA). [[jacome-vasconez-chatgpt-adoption-xai-2026|Jácome-Vásconez et al.]] extend UTAUT2 with explainable AI (Random Forest, SHAP, NCA, IPMA, K-Means) for 522 university students, finding **habit** the strongest predictor of ChatGPT intention and showing that **effort expectancy is a necessary condition rather than a linear driver** — a result only visible when XAI complements the regression.

### Theory of Planned Behavior (TPB)
TPB explains intention through attitude, subjective norms, and perceived behavioral control. It is frequently paired with TAM/UTAUT in AI-adoption studies — e.g. [[genai-chatgpt-adoption-ethics-students-2026|Rizun et al.]] integrate TAM, TPB, UTAUT, and the FATE ([[bias-mitigation|Fairness]], Accountability, Transparency, Ethics) framework to model the behavioral and [[ethics|ethical]] drivers of student ChatGPT adoption.

### Diffusion of Innovation (DOI)
Rogers' DOI theory explains adoption as a social process in which innovations diffuse through populations over time, emphasizing innovation attributes (relative advantage, compatibility, complexity, trialability, observability) and adopter categories. It appears in the knowledge base's [[governance|institutional]]-level analyses, e.g. [[alrahmi-org-drivers-ai-adoption-he-2026|Al-Rahmi et al.]] combine the Technology–Organization–Environment (TOE) framework with DOI to model organizational AI adoption in Saudi universities.

### Technology–Organization–Environment (TOE)
TOE frames adoption as shaped by technological, organizational, and environmental contexts — a complement to individual-level TAM/UTAUT for studying institutional adoption (see [[alrahmi-org-drivers-ai-adoption-he-2026]]).

## Applications in the knowledge base

Adoption models are applied across the knowledge base to model student and [[teacher-role|teacher]] uptake of AI tools:

- **Critical-use extension:** [[tam-critical-use-genai-engineering-2026|Nguyen et al.]] extended TAM with *critical use* for engineering/CS students, finding that attitudes and critical use directly predict intention — and that critical use safeguards against [[cognitive-offloading|over-reliance]].
- **Unified socio-cognitive model:** [[socio-cognitive-genai-adoption-engineering-2026|Asag & Al Mamun]] integrated TAM with UTAUT for engineering students in Bangladesh (explaining 64% of usage variance).
- **Person-centered profiles:** Rather than variable-centered models, [[saihi-ahmed-genai-adoption-personas-higher-ed-2026|Saihi & Ahmed]] cluster GenAI-adoption personas, and [[chen-preservice-teachers-chatgpt-lpa-2026|Chen et al.]] use latent profile analysis to identify four ChatGPT-acceptance profiles among pre-service teachers — showing the field's move beyond single-model, linear accounts.
- **Cross-cultural validation:** [[motivation-shape-future-education-ai-switzerland-china|Martínez-Moreno et al.]] cross-culturally validate adoption-related motivation constructs across Switzerland and China.
- **Psychological correlates:** [[acceptance-ai-english-tools-2026|Wu et al.]] build on TAM to relate motivation, [[self-efficacy]], anxiety, and risk perception to acceptance of AI-assisted English learning.
- **[[regulation|Regulatory]] competence critique:** [[ai-anxiety-strategic-regulation-writing-2026|Kim]] argues that adoption-centered TAM models treat use as a stable decision, whereas effective AI use is an ongoing process of judgment, revision, and selective uptake — reframing [[ai-literacy]] as regulatory competence and [[critical-thinking]] rather than acceptance.

- **ML determinants of ChatGPT adoption:** An exploratory ML approach examined how students' perceptions and demographics relate to intended academic ChatGPT use, using SHAP analysis to identify key learning-related constructs — prioritizing educational meaning over maximizing algorithmic performance ([[determinants-chatgpt-use-higher-education-2026]]).

- **[[explainable-ai|Explainability]] and domain relevance as acceptance levers for teachers:** Adapting trust-in-automation theory to teacher acceptance of AI recommendations, [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] found that understandability (raised by explainable AI) correlated positively with both trust and acceptance of an AI grouping tool, and that domain-driven explanations in [[curriculum-design|curricular]] language outperformed data-driven feature-importance ones on all three. Acceptance was additionally driven by [[pedagogy|pedagogical]] alignment and workload-reduction potential — situational factors beyond trust that standard TAM/UTAUT constructs rarely capture, reinforcing the case for extending adoption models with context and explainability.
- **Acceptance measured at the level of instructional materials (2026).** [[age-tiered-ai-literacy-guidebooks-2026|Wang, Chuang and Wu (2026)]] operationalized Performance Expectancy, Effort Expectancy, Perceived Playfulness, and Behavioral Intention for two age-tiered AI literacy guidebooks used by 794 [[k-12]] students and 37 teachers, validating the four-factor structure with split-sample EFA and CFA and supporting measurement invariance across the 9-12 and 13-18 editions. Younger learners reported higher levels on all four constructs, and playfulness was the strongest correlate of intention in both cohorts — with the standardized playfulness-to-intention coefficient exceeding 1.00 in the younger group and an HTMT of.950 between the two constructs. The authors read that as construct overlap and possible suppression rather than a giant effect, a useful reminder that acceptance instruments applied to materials can produce empirically entangled factors that complicate structural interpretation.

## Limits and extensions

TAM's cognitive focus also under-captures emotional and relational dimensions of AI use. A [[akbaba-nursing-ai-experiences-tam-2026|qualitative study of nursing students and faculty]] found that, alongside the four classic TAM constructs, participants -- mainly students -- described AI as a source of psychosocial support: emotional comfort during stress and a confidential space for reflection. This extends perceived usefulness beyond performance gains to [[well-being]] in high-stress [[professional-training|professional training]], suggesting adoption models should attend to affective and psychosocial factors, not only instrumental utility.

**[[agency|Autonomy]] perception and risk aversion as tool-specific extensions.** A [[mixed-methods-research|mixed-methods]] survey of 287 GenAI-experienced teachers across 27 countries and regions ([[dai-genai-frenemy-teaching-autonomy-2026|Dai et al. (2026)]]) extends TAM in a direction the model family has barely touched: the perceived *autonomy* of the tool itself. Adding perceived artificial autonomy (how independently teachers believe GenAI can carry out an assigned instructional task) and risk aversion to the classic constructs, their refined structural model explained 79.8% of the variance in behavioral intention (χ²(97) = 202.597, CFI =.963, TLI =.954, RMSEA =.062, SRMR =.041), with perceived usefulness again dominant (PU → BI β =.832, p <.001) and ease of use feeding usefulness (PEU → PU β =.479). The instructive results are the detours. Artificial autonomy did not act directly on intention (β =.026, ns) but acted through usefulness (AA → PU β =.188, p <.001; indirect AA → PU → BI =.156, 95% CI [.082,.240]) — teachers who saw GenAI as more capable found it more useful, not more immediately adoptable. Risk aversion lowered intention (RA → BI β = −.163, p <.001) without lowering perceived usefulness (RA → PU ns), because teachers' concerns centered on *students'* use — cheating and [[academic-integrity|integrity]], weakened foundational knowledge and higher-order thinking, [[hallucination-risk|hallucinations]], reduced human interaction, and ethical, legal and [[equity-in-ai-education|equity]] risks — rather than on their own. Ease of use was non-significant overall (PEU → BI β =.068) but significant among the 225 teachers who had actually used AI in teaching (β =.138, p <.05), the familiar pattern that effort registers only after real encounter; attitude had to be dropped when its correlation with intention (r =.929) breached discriminant validity. Teachers placed GenAI at semi-autonomous levels (130 at Level 2, "teacher assistance"; 94 at Level 3, "partial automation"; one at Level 6) and insisted adoption decisions be made case by case. TAM still predicts intention well, but for teacher-facing AI the constructs that move the needle are tool-specific: how autonomous the tool seems, and whose use the risk attaches to. The authors' "frenemy" label — valued as a support tool, distrusted as an autonomous agent — is the teacher-side counterpart to the student-facing extensions catalogd above.

**Risk perception as a dimension-specific extension.** A survey of 814 Chinese university students ([[risk-perception-genai-perceived-benefits-2026|Du, Ning, Shi & Chen (2026)]]) folds Cognitive Appraisal Theory and Protection Motivation Theory into TAM/UTAUT2 to ask not whether students adopt [[generative-ai|generative AI]] but what they gain from it. The model family's assumption that risk uniformly suppresses adoption does not survive: risk perception splits into information, security, technical, [[ethics|ethical]], and legal dimensions that move benefits in opposite directions. Security risk — a threat students believe they can manage through [[privacy|privacy practices]] — was *positively* associated with perceived academic assistance and skill development, consistent with problem-focused coping, whereas information risk, which learners cannot easily verify, eroded psychological and emotional support, daily-life, and leisure benefits through avoidance. Threshold analyses further showed effects that change sign beyond dimension-specific cut-points, and usage experience mattered independently: students with more than a year of GenAI use reported higher benefits across four domains. The practical implication for acceptance research is that "perceived risk" is too coarse a construct to model — controllability, not the mere presence of risk, is what determines whether students engage or withdraw.

## Connected Concepts

- [[business-education]]
- [[generative-ai]]
- [[ai-literacy]]
- [[student-experience]]
- [[higher-ed]]
- [[critical-thinking]]
- [[ethics]]
- [[trust]]
- [[cognitive-offloading]]
- [[self-determination-theory]]
- [[research-methods-aied]]
- [[student-modeling]]
- [[framing-ai-use-for-students]]

## Connected Articles
- [[dai-genai-frenemy-teaching-autonomy-2026]] — GenAI as "frenemy": artificial autonomy and risk aversion extend TAM for teachers (Dai et al. 2026)
- [[akbaba-nursing-ai-experiences-tam-2026]] — Nursing AI experiences; psychosocial extension of TAM
- [[preschool-teachers-ai-behavioral-intention-2026]] — Preschool teachers' behavioral intention to use AI via extended TAM (Duan, Shan & Gong 2026)
- [[ai-adaptation-gap-higher-education-2026]] — The AI Adaptation Gap in Higher Education
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — GenAI adoption personas via clustering
- [[tian-genai-learning-adoption-pathways-2026]] — Symmetric and asymmetric pathways in GenAI adoption (UTAUT3 + ARCS)
- [[lee-wu-gender-motivation-genai-achievement-2026]] — Differential GenAI engagement by gender and motivation
- [[alrahmi-org-drivers-ai-adoption-he-2026]] — TOE + DOI model of organizational AI adoption in higher education
- [[tam-critical-use-genai-engineering-2026]] — Extended TAM with critical use for engineering/CS students
- [[socio-cognitive-genai-adoption-engineering-2026]] — Unified socio-cognitive model (TAM + UTAUT) for engineering education
- [[ai-anxiety-strategic-regulation-writing-2026]] — From AI anxiety to strategic regulation
- [[genai-reliance-types-scale]] — GenAI reliance types scale
- [[llm-reliance-types-undergrad]] — LLM reliance types among undergraduates
- [[acceptance-ai-english-tools-2026]] — Acceptance of AI English tools
- [[genai-chatgpt-adoption-ethics-students-2026]] — Behavioral and ethical drivers of student ChatGPT adoption
- [[mathematics-teachers-chatbot-motivation-2026]] — UTAUT and teacher chatbot motivation
- [[pre-service-science-teachers-ai-perceptions-2026]] — UTAUT + TPB for pre-service science teachers in Ghana
- [[chen-preservice-teachers-chatgpt-lpa-2026]] — Pre-service teacher ChatGPT acceptance profiles (LPA)
- [[teo-ai-adoption-tertiary-meta-analysis-2026]] — Meta-analysis of AI adoption factors; critiques TAM/UTAUT
- [[ethical-conditions-llm-exam-preparation-2026]] — Ethical conditions for LLM adoption in exam preparation (Pérez-Portabella et al. 2026)
- [[genai-integration-constructivist-higher-ed-bangladesh-2026]] — GenAI integration in Bangladeshi higher ed through constructivism (Alam et al. 2026)
- [[determinants-chatgpt-use-higher-education-2026]] — ML/SHAP determinants of future ChatGPT use in higher education
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — XAI-augmented UTAUT2: habit as strongest predictor, four adoption profiles (Jácome-Vásconez et al. 2026)
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[age-tiered-ai-literacy-guidebooks-2026]] — Material-level PE/EE/playfulness/intention model for age-tiered AI literacy guidebooks, with documented playfulness-intention construct overlap
- [[risk-perception-genai-perceived-benefits-2026]] — CAT + PMT folded into TAM/UTAUT2: dimension-specific and non-monotonic risk effects on perceived GenAI benefits (Du, Ning, Shi & Chen 2026)
