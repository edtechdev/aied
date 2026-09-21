---
title: Global South
created: "2026-08-18T14:55:00-04:00"
updated: "2026-09-20T08:15:50-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai]
ethics: [culturally-relevant-pedagogy, equity-in-ai-education, global-south]
level: [higher ed, k 12]
confidence: high
---

The **Global South** refers to countries in Africa, Asia, Latin America, and Oceania that are often economically, politically, and historically marginalized relative to the Global North. In [[ai-education|AI in education]] [[research-methods-aied|research]], Global South contexts are increasingly recognized as underrepresented in the evidence base, yet they raise distinctive questions about [[equity-in-ai-education|equity]], [[culturally-relevant-pedagogy|cultural relevance]], resource constraints, and the epistemic dominance of Western, Anglophone training data.

## Questions to Consider

- If an AI system performs well on benchmark tests built from Western, English-language data, how confident should you be that it will work equally well for your students? What would you want to check before trusting it in your own context?
- Consider a learning tool whose training data and evaluation metrics were all developed in the Global North. What assumptions about language, knowledge traditions, and educational realities might it silently encode — and who is most likely to be misrepresented by them?
- When AI adoption is studied, whose classrooms and institutions tend to dominate the evidence base? How might that skew what we think we know about whether AI 'works' in education?
- The page argues for treating learners' lived and community epistemologies as authoritative, not just as add-ons to Western models. What would it take for your own AI-related practice or research to center local knowledge rather than import it from elsewhere?
- Resource constraints are a recurring theme in Global South contexts. How might the promise of low-cost, scalable AI support both close and widen existing opportunity gaps, depending on how it is designed and deployed?
- How could you tell whether a technology 'adopted' in a particular setting was actually adopted because it fit local conditions — or because it was assumed to transfer? What evidence would distinguish the two?

## Introduction

### Why It Matters for AIED

Mainstream AI and educational-technology research has historically been dominated by Western, English-language datasets and [[governance|institutional]] contexts. This creates two problems: (1) [[ai-technologies|AI systems]] trained on such data may underperform or misrepresent learners in Global South settings, and (2) evaluation [[benchmark|benchmarks]] built in the Global North may not reflect the educational realities, languages, or knowledge traditions of other regions. Research from Global South contexts in this knowledge base spans culturally grounded datasets, benchmarks, and technology-adoption studies, with implications for [[ai-literacy]] and [[higher-ed|higher]] and [[k-12|K-12]] education.

### Applications in the Knowledge Base

- **Culturally grounded data and benchmarks:** [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]] provides a [[multilingual-learning|multilingual]] Indian Knowledge Systems instruction dataset; [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]] introduces a Ghana-based [[stem-education|STEM]] benchmark, one of the first Global South educational evaluation datasets.
- **AI ethics awareness in Ghanaian higher education:** [[ai-ethical-awareness-ghana-students-2026|Acquah et al. (2026)]] validated a three-factor (autonomy, beneficence, fairness) AI ethical awareness scale with 509 [[higher-ed|university]] students in Ghana, finding five latent profiles from uniformly very high awareness to a small cluster with almost none — weakest on beneficence — and no gender differences, providing a Global South measurement anchor for the AI-[[ethics]] literature.
- **Teacher ethical reasoning in low-resource contexts:** [[teachers-contextual-ethical-reasoning-ai-2026|Adelana et al. (2026)]] found in-service secondary STEAM teachers in a low-resource context reason about AI ethics through professional identity, classroom realities, and cultural norms rather than formal principle lists, countering "ethics empty" assumptions about the Global South.
- **Contextual adoption:** [[socio-cognitive-genai-adoption-engineering-2026|Asag & Al Mamun]] model [[generative-ai|GenAI]] adoption among Bangladeshi [[engineering-education|engineering]] students, and [[connected-ai-lesson-planning-vietnam|ConnectED]] deploys a [[curriculum-design|curriculum]]-aligned lesson-planning system for Vietnamese education.
- **Institutional integration and structural inequality:** [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]]'s comparative content analysis of 45 Nigerian universities (federal/state/private) found that AI integration is predicted by institution age and geographic location — not governance type — and that international and industry network ties reinforce one another (r = 0.74), so well-connected institutions compound advantage while others fall further behind. It locates [[digital-divide|digital inequality]] not just at the learner level but in the structural capacity of [[higher-ed|higher-education]] institutions themselves.
- **[[educational-development|Academic development]] as digital mediation under structural constraint:** [[beyond-the-algorithm-academic-developers-digital-mediators-2026|Sithole (2026)]] interviews twelve academic developers and learning designers across two South African Historically Disadvantaged Institutions and draws an analytical line the Global South literature often blurs: **digital inequality** is distributive and answerable in principle through redistribution and access, while **algorithmic coloniality** is epistemic and persists even under full access because it inheres in what the systems encode and whose knowledge they center. The two are entangled but demand different responses, and the institution is doubly positioned — excluded by infrastructural scarcity, and, when included, subordinated by imported systems that encode other knowledges and norms. Institutional AI rhetoric ("performance more than practice") arrived loosely coupled to the material realities of teaching, so developers translated global digital-transformation discourse into contextually viable practice: testing and deliberately "breaking" tools in peer spaces, insisting on judgment over skill, and absorbing the affective cost of projecting expertise they were still acquiring.
- **Epistemic marginalization:** [[genai-minoritized-knowledges-disability|Tali-Otmani]] argues that Western-centric training data marginalizes non-Western and disability-centered knowledges — connecting Global South concerns to [[equity-in-ai-education]] and [[culturally-relevant-pedagogy]].
- **Disability and [[inclusive-learning|inclusion]] in the Global South:** [[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]] — a [[qualitative-research|qualitative]] case study of 21 visually impaired undergraduates across three Palestinian universities — found GenAI bridges digital, geographic, and socioeconomic divides for disabled learners, extending [[technology-acceptance-model|technology-acceptance]] research to disability contexts where [[usability-research|usability]], affordability, and [[accessibility]] are mutually reinforcing.
- **Designing for local stressors under resource constraints:** Bashir and Afzal (2026) build [[culturally-aware-student-stress-chatbot-2026|Sukoon]] as a Global South design response to a documented mismatch — mental-health [[conversational-ai|chatbots]] trained mostly on Western datasets and overwhelmingly English-language, while Pakistani students face academic, financial, familial, and relational stressors simultaneously and often cannot raise emotional difficulties with [[parents-and-families|parents]], [[teacher-role|teachers]], or peers because of stigma. The authors' practical constraints are as instructive as their model: a free-access [[open-source]] [[llm]] through a hosted API for low resource requirements, a lightweight Flask deployment for regional universities, "tools are available but often expensive" listed as a barrier, and unequal access to paid models flagged as a general dependency risk. They also note the classifier was trained on a publicly available dataset not representative of Pakistani students, and commit to locally collected DASS-21 data before drawing population conclusions.

### Implications

Attending to Global South contexts requires moving beyond assuming Western models and benchmarks transfer directly. It calls for locally grounded datasets, culturally relevant [[pedagogy]], community-centered evaluation standards, and research that treats learners' lived and community epistemologies as authoritative — aligning with frameworks like community-based AI learning and [[technology-acceptance-model|technology-acceptance]] research adapted to local conditions.

The scaling record is part of that picture, and it is sobering. Programs that work at pilot scale frequently stop working when governments run them: the Kenyan program that produced substantial gains under non-governmental implementation showed no detectable gain at government scale (Bold et al.), effect sizes tend to fall as programs grow (Vivalt), and implementation quality dilutes as sites multiply (Al-Ubaydli, List & Suskind). Latin America's own precedent is the Peruvian One Laptop per Child program — about 800,000 laptops distributed with no detectable effect on [[math-education|mathematics]] or reading — from which the lesson drawn was that access to technology is not instruction. [[el-salvador-ai-tutoring-selection-claim-2026|Restrepo Morales et al. (2026)]] add a reporting lesson to the scaling lesson: in the 2026 El Salvador episode an AI-tutoring pilot in 171 schools was announced as comparable to Germany and Sweden while the same country's representative PISA 2025 sample showed no movement in two of three subjects, and the pilot data were too thin (7.0 assessed students per school against 25.4 nationally) to exclude selection as the explanation. For Global South systems adopting AI at scale the implication is double: the evidence that a reform works is usually about the components it bundles rather than the technology in its headline, and a phased rollout designed before deployment identifies effects at almost no cost — which matters most where connectivity dictates the phasing anyway.

## Connected Concepts

- [[differential-effects-across-learner-groups]]
- [[equity-in-ai-education]]
- [[generative-ai]]
- [[culturally-relevant-pedagogy]]
- [[ai-literacy]]
- [[higher-ed]]
- [[k-12]]
- [[inclusive-learning]]
- [[technology-acceptance-model]]
- [[benchmark]]

## Connected Articles

- [[adeniranye-ai-integration-nigerian-higher-education-2026]] — Institutional structures, digital inequality, and AI integration in Nigerian higher education
- [[nguyen-genai-global-south-review-2026]]
- [[socio-cognitive-genai-adoption-engineering-2026]] — Unified socio-cognitive model for engineering education (Bangladesh)
- [[connected-ai-lesson-planning-vietnam]] — ConnectED: Vietnamese Lesson Planning
- [[iks-instruct-dataset-indian-knowledge]] — IKS-Instruct: Indian Knowledge Systems Dataset
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddles: Ghana STEM Benchmark
- [[genai-minoritized-knowledges-disability]] — Marginalization of minoritized knowledges
- [[llm-cultural-relevance-k12]] — LLMs for Culturally Relevant K-12 Pedagogy
- [[multilingual-adaptive-learning-nigeria-2026]] — AI-Based Adaptive Learning Platform for Multilingual Low-Resource Contexts
- [[genai-integration-constructivist-higher-ed-bangladesh-2026]] — GenAI integration in Bangladeshi higher ed through constructivism (Alam et al. 2026)
- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive GenAI for visually impaired learners
- [[culturally-aware-student-stress-chatbot-2026]] — An AI-Powered Culturally Aware Chatbot for Stress Detection and Wellness Support among Pakistani University Students Using NLP and Machine Learning
- [[el-salvador-ai-tutoring-selection-claim-2026]] — Bounding the learning claim of El Salvador's AI tutoring pilot (Restrepo Morales et al. 2026)
- [[beyond-the-algorithm-academic-developers-digital-mediators-2026]] — Academic developers as digital mediators in South African HDIs: digital inequality vs. algorithmic coloniality
- [[ai-ethical-awareness-ghana-students-2026]] — Artificial intelligence ethical awareness of Ghanaian university students
- [[teachers-contextual-ethical-reasoning-ai-2026]] — Ethical principles of AI in education: teachers' contextual ethical reasoning
