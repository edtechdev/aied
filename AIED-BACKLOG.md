# AI-in-Education Article Backlog

> Relevant open-access **AI-in-education** journal articles identified from RSS feeds that have **not yet been ingested** into the wiki. The maintainer downloads the PDFs from the linked article pages and sends them for full-text ingestion. Sorted by journal.
>
> **Policy (2026-08-23):** an article is only added to this backlog (never ingested as an abstract-only wiki page) when its **full text cannot be retrieved** — e.g. the publisher blocks scraping with CAPTCHA, or the fetch times out. The maintainer downloads the PDF and sends it for full-text ingestion.
>
> **Scope of this file:** it lists work in progress only — articles whose full text is still being sought, and pages waiting on a source before their practice and limitations sections can be written. Candidates appear here only while they are being pursued, and no outcome is recorded; items judged unsuitable for the knowledge base are tracked outside this repository.

**Last updated:** 2026-11-27
**Total backlog:** 12 articles awaiting ingest · 52 truncated source texts awaiting PDFs · 19 pages awaiting a full text before their practice and limitations sections can be written

## Awaiting full text

### Identified 2026-11-25 (daily scan)

Eleven in-scope candidates from the 2026-11-22..25 window. Four need a PDF or a
non-blocking host; seven were open and simply not reached inside the 20-article cap.

- **Generating Personalized Viva Questions from Students' Own Assignments with Artificial Intelligence and Bloom's Revised Taxonomy** — Islam, Datta & Chowdhury, *Education Sciences* 16(12), 2007. MDPI early-access version: abstract only.
  - https://doi.org/10.3390/educsci16122007
- **Enhancing Students' AI Prompt-Engineering Skills and Learning Effectiveness: An Integrated Perspective of AI Readiness and ARCS-Based Learning Motivation** — Lin, Wang & Chen, *Journal of Educational Computing Research*. SAGE paywall; abstract only.
  - https://doi.org/10.1177/07356331261508423
- **A framework for integrating generative AI into regional anatomy education: evaluation of learning outcomes and student experiences** — Ren et al., *BMC Medical Education*.
  - https://doi.org/10.1186/s12909-026-10927-y
- **Evaluation of ChatGPT-assisted problem-based learning in undergraduate emergency medicine education: a self-controlled study** — Cheng et al., *BMC Medical Education*.
  - https://doi.org/10.1186/s12909-026-10911-6
- **From dyad to triad: human–AI collaboration and the changing roles of teachers and learners in formal education** — Conrad, *Frontiers in Education*.
  - https://doi.org/10.3389/feduc.2026.2009337
- **Responsibility drift in AI-assisted scholarship: a systemic hypothesis and its implications for researcher AI literacy** — Serpil, *Frontiers in Education*.
  - https://doi.org/10.3389/feduc.2026.2002658
- **A Training Model Framework to Professional Development for Teachers: A Cross-National DigCompEdu Reloaded Approach** — Moreira & Dias-Trindade, *Education Sciences* 16(12), 2006.
  - https://doi.org/10.3390/educsci16122006
- **From "I found nothing" to "This is novel": AI literacy and the epistemology of novelty assessment** — Bellingham & Alrofiai, *Frontiers in Education*.
  - https://doi.org/10.3389/feduc.2026.2015782


### Identified 2026-11-26 (daily scan) — resolved

All candidates from this window were followed up: nine were ingested as pages, Umar and Li (2026) is now ingested, and the academic LLM hosting workshop report was screened out as Tier 3 adjacent research. Nothing remains awaiting action here.

### Identified 2026-11-27 (daily scan)

- **Development and initial psychometric evaluation of the artificial intelligence literacy scale for medical students (AIL-MS): A mixed-methods cross-sectional study** — Feng Chen et al., *BMC Medical Education*. Full text was not retrievable at discovery (publisher PDF endpoint 404); the user supplied the Article in Press PDF on 2026-11-27 and it was **INGESTED** as `content/en/articles/chen-ail-ms-medical-students-2026.md`.
  - https://doi.org/10.1186/s12909-026-10936-x
- **Initiatives, outcomes, benefits, and challenges of integrating artificial intelligence in Ethiopian education** — *Discover Education*. Open access; ranked below the ingest cut.
  - https://doi.org/10.1007/s44217-026-02470-1
- **Faculty psychological readiness for responsible AI integration in higher education: perceived policy support, teaching engagement, teaching innovation, and professional practice** — *Frontiers in Psychology*. Open access; ranked below the ingest cut.
  - https://doi.org/10.3389/fpsyg.2026.2002882
- **AI, Bias, and Inclusion: A Two-Phase Mixed-Methods Study of Gender Bias, Awareness, and Trust in Artificial Intelligence** — arXiv 2611.32869. Open; ranked below the ingest cut.
  - https://arxiv.org/abs/2611.32869

## Backlog cleared — 2026-11-23

The article backlog was emptied on 2026-11-23 at the maintainer's instruction: every candidate
was either supplied as a PDF and ingested, or logged in the local-only declined-sources file
(gitignored) with the date noted. Nothing is currently awaiting ingest.

The two sections after this note are **not** an article backlog: they track pages already in the
knowledge base whose saved source text is truncated or missing, and they stay because those
pages still need a PDF supplied. They are left intact rather than being declined.

## Ingested pages whose source text is truncated (PDF needed)

These 52 pages are already in the knowledge base, but their saved full text
stops at the old 50,000-character extraction cap, so the results, discussion and
limitations sections are missing locally. Publisher bot-protection blocks automated
downloads (MDPI answers 403, Springer serves a robot page), so these need the PDF
provided directly; then re-extract with `pdftotext` at the current 250,000-character
cap and enrich the page from the recovered text.

### Elsevier / ScienceDirect

- **AI-mediated authentic assessment and metacognitive reflection: A mixed-methods study of the AAIWA model** — `aaiwa-ai-authentic-assessment-metacognition-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000662
- **Exploring AI perceptions in education: unveiling the role of student and teacher motivation and self-efficacy** — `ai-perceptions-students-teachers-motivation-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000170
- **Assessing AI-TPACK readiness in mathematics teacher education: The role of self-efficacy and teaching beliefs** — `ai-tpack-mathematics-teacher-education-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000467
- **Leveraging ChatGPT in academic writing: ChatGPT enhances students' writing quality, writing experience, and ownership** — `chatgpt-academic-writing-quality-ownership-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000224
- **Student engagement with ChatGPT for educational tasks: Effects of inoculation training on verification intentions and behavior** — `chatgpt-inoculation-training-verification-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000066
- **Conceptualizing pre-service teachers' readiness for AI integration into teaching practices: An intelligent-TPACK approach** — `conceptualizing-preservice-teachers-ai-readiness-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557325000795
- **Designing effective AI professional development: A framework grounded in intelligent-TPACK** — `designing-ai-professional-development-itpack-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S266655732600008X
- **Generative AI in higher education: Ethical and behavioral factors influencing students' intentions to use ChatGPT** — `genai-chatgpt-adoption-ethics-students-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000078
- **AI writes, we collaborate—or vice versa? Group strategies for using generative AI in collaborative writing assignments** — `genai-group-writing-strategies-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000613
- **Role of generative AI literary assistants in enhancing ninth-grade students' writing motivation, flow and achievement** — `genai-literary-assistants-writing-motivation-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000108
- **Comparing GPT and human raters in essay assessment: Variability, bias, and the potential of LLM-based scoring** — `gpt-human-rater-essay-assessment-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000121
- **Harnessing artificial intelligence for preservice teachers' development: A scoping review of applications, benefits, and challenges** — `harnessing-ai-preservice-teachers-scoping-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000017
- **Human-centered AI for teacher educators: Designing professional learning for critical AI literacy** — `human-centered-ai-teacher-educators-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000704
- **Unpacking ethics-domain of intelligent-TPACK scale in relation to in-service teachers' trust and distrust** — `intelligent-tpack-ethics-teachers-trust-distrust-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557325000801
- **A systematic comparison of Large Language Models for automated assignment assessment in programming education: Exploring the importance of architecture and vendor** — `llm-automated-grading-programming-comparison-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000364
- **LLM-generated formative feedback in education: A qualitative systematic literature review** — `llm-formative-feedback-systematic-review-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000455
- **LLMs in text linguistics teaching: An exploratory study with genAI novices in higher education** — `llms-text-linguistics-teaching-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000856
- **Talking mathematics with AI: Understanding teachers' motivation for utilizing chatbots** — `mathematics-teachers-chatbot-motivation-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000315
- **Coding, robots, computational concepts, and machine learning using the microbit card and the Maqueen and Nezha kits. A study in initial teacher training** — `microbit-robotics-machine-learning-teacher-training-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000376
- **Science educators' AI literacy and AI usage in teaching: Implications for post-qualification programs** — `science-educators-ai-literacy-postqualification-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000479
- **Beyond operational skills: Teachers' AI knowledge and interactions with generative AI in lesson planning** — `teachers-ai-knowledge-genai-lesson-planning-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S266655732600042X
- **Teaching the teachers: A systematic review of genAI-specific technological pedagogical knowledge (TPK) in teacher education** — `teaching-the-teachers-genai-tpk-review-2026` (not attempted)
  - https://www.sciencedirect.com/science/article/pii/S2666557326000388

### DOI (publisher paywall or unresolved)

- **'Artificial Intelligence and Communities of Inquiry: Reimagining Educational Experiences'** — `ai-communities-of-inquiry-2026` (too_short)
  - https://doi.org/10.19173/irrodl.v27i2.9314
- **'Artificial Intelligence in Distance Education: A Systematic Review of Emerging Pedagogical, Cognitive and Institutional Dynamics'** — `ai-distance-education-systematic-review-2026` (html_failed)
  - https://doi.org/10.1108/QRDE-12-2025-0027
- **AI-Enhanced Problem-Based Learning Framework: Integrating ChatGPT as Adaptive Scaffolding to Improve Critical Thinking and Personalized Learning** — `ai-enhanced-pbl-chatgpt-scaffolding-2026` (html_failed)
  - https://doi.org/10.30762/jeels.v13i2.7039
- **'AI-Supported Problem-Based Learning for Enhancing Computational Thinking'** — `ai-pbl-computational-thinking-2026` (html_failed)
  - https://doi.org/10.1016/j.chbah.2026.100263
- **Artificial Intelligence and Student Engagement in Online Learning: A Literature Review** — `ai-student-engagement-online-learning-review-2025` (html_failed)
  - https://doi.org/10.1080/08923647.2025.2594282
- **Exploring Organizational Drivers and Innovation Attributes of Artificial Intelligence Adoption in Higher Education** — `alrahmi-org-drivers-ai-adoption-he-2026` (html_failed)
  - https://doi.org/10.53761/fskfah39
- **Teaching with Generative Artificial Intelligence: Enhancing Critical Thinking and Ethical Awareness in Academic Writing** — `benali-genai-academic-writing-2026` (too_short)
  - https://doi.org/10.53761/28y4hw95
- **Who Is Solving the Challenge? The Use of ChatGPT in Mathematics and Biology Courses Using Challenge-Based Learning** — `chatgpt-math-biology-challenge-based-learning-2025` (too_short)
  - https://doi.org/10.3389/feduc.2025.1417642
- **How motivation and roles influence metacognitive engagement in student-GenAI interaction** — `cui-motivation-roles-metacognitive-genai-2026` (html_failed)
  - https://doi.org/10.1186/s41239-026-00610-z
- **Integrating Generative Artificial Intelligence into Student Learning: A Systematic Review from a TPACK Perspective** — `edurev-100741-tpack-genai-review` (html_failed)
  - https://doi.org/10.1016/j.edurev.2025.100741
- **edurev-100833-rall-meta** — `edurev-100833-rall-meta` (html_failed)
  - https://doi.org/10.1016/j.edurev.2026.100833
- **'Problem-Based Learning and the Structural Conditions for Productive AI Integration'** — `pbl-structural-conditions-ai-2026` (html_failed)
  - https://doi.org/10.35542/osf.io/haet3_v1
- **Raising Ethical Awareness of GenAI Use Through Student Self-Assessment in the Transition to Higher Education** — `pedlow-genai-selfassessment-2026` (too_short)
  - https://doi.org/10.53761/39ey1895
- **Reimagining the Philosophy of Experimentation in Chemistry Education: Embracing AI as a Tool for Scientific Inquiry** — `philosophy-experimentation-ai-chemistry-2026` (html_failed)
  - https://doi.org/10.1007/s11191-025-00667-8
- **Preferred Scaffolding Does Not Lead to Better Learning Performance: Empirical Evidence from AI-Supported Mathematical Modeling** — `preferred-scaffolding-ai-mathematical-modelling` (html_failed)
  - https://doi.org/10.1016/j.caeai.2026.100669
- **raw-miller-bosch-teachability** — `raw-miller-bosch-teachability` (html_failed)
  - https://doi.org/10.1145/3785022.3785067
- **raw-uchida-vocab-teaching-ai** — `raw-uchida-vocab-teaching-ai` (html_failed)
  - https://doi.org/10.1145/3795011.3797361
- **raw-wang-epfl-explique** — `raw-wang-epfl-explique` (html_failed)
  - https://doi.org/10.1145/3774398.3811623
- **Addressing the Void of AI Policies in Education for Students With Specific Learning Disabilities** — `shin-ai-policies-sld-2026` (html_failed)
  - https://doi.org/10.1177/07319487251412879
- **RACES: reward-aligned consistent essay scoring with large language models** — `zhang-races-consistent-essay-scoring-llms-2026` (html_failed)
  - https://doi.org/10.1186/s41239-026-00607-8

### ASEE conference proceedings

- **Artificial Intelligence (AI) and the Future of the Engineering and Computing Workforce: A Systematic Review of Grey Literature and Document Analysis of U.S. Reports (2020–2025)** — `ai-engineering-computing-workforce-grey-literature-2026` (not attempted)
  - https://peer.asee.org/ (ASEE 2026 Annual Conference & Exposition, Paper ID #53492)
- **It's Like \"X\": How Engineering Faculty Metaphors Construct (and Constrain) AI Understanding in Engineering Education** — `engineering-faculty-metaphors-ai-understanding-2026` (not attempted)
  - https://peer.asee.org/ (ASEE 2026 Annual Conference & Exposition, Paper ID #50720)
- **Ethical Use of Artificial Intelligence in Engineering Education: A Systematic Review** — `ethical-use-ai-engineering-education-review-2026` (not attempted)
  - https://peer.asee.org/ (ASEE 2026 Annual Conference & Exposition, Paper ID #52865)

### NBER working papers

- **Making AI Tutoring Productive: Evidence from a Mastery-Based Math Practice Experiment** — `making-ai-tutoring-productive-mastery-math-2026` (not attempted)
  - https://www.nber.org/papers/w35621
- **One Click Away: AI Tutoring with Khanmigo in a Two-Year School Experiment** — `one-click-away-khanmigo-two-year-school-experiment-2026` (not attempted)
  - https://www.nber.org/papers/w35620
- **Virtual Tutoring with Computer-Assisted Learning: An Experiment in Take-Up and Learning** — `virtual-tutoring-computer-assisted-learning-takeup-2026` (not attempted)
  - https://www.nber.org/papers/w35622

### SAGE

- **Reconsidering the Use of Oral Exams and Assessments: An Old Way to Move Into a New Future** — `fenton-oral-exams-ai-authentic-assessment-2025` (not attempted)
  - https://journals.sagepub.com/doi/10.3102/0013189X251333638

### onlinelearningconsortium.org

- **Utilizing Generative AI to Counter Learner Groupthink by Introducing Controversy in Collaborative Problem Based Learning Settings** — `genai-counter-learner-groupthink-2025` (not attempted)
  - https://onlinelearningconsortium.org/

### papers.ssrn.com

- **The Generative AI Learning Penalty: Evidence from Chinese Secondary Education** — `stromberg-generative-ai-learning-penalty-secondary-2026` (not attempted)
  - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6868618

### unresolved

- **Fostering collaborative futures: Multidisciplinary approaches to AI integration in educational ecosystems** — `fostering-collaborative-futures-ai-ecosystems-2026` (html_failed)
  - 10.1016/j.caeo.2026.100405

## Pages awaiting a full text (practice and limitations sections blocked)

These pages are already in the knowledge base, but their saved source text is missing, so their
**What this means for practice** and **Limitations** sections cannot be written from evidence. Retrieval was
attempted on 2026-09-19: each page's title was matched against OpenAlex and an open-access PDF requested via
the recorded DOI and Unpaywall. Add the PDF here (or re-run the fetch once access changes), extract with
`pdftotext`, save under the path the page's `sources:` field names, and the sections can then be written.

### Open-access PDF could not be downloaded

- **WIP: Bridging the Gap Between Instructional Design and Pedagogical Use: A Framework for Mathematics Educators** — `bridging-instructional-design-framework-math` (retrieval failed)
  - https://doi.org/10.48550/arxiv.2606.20934
- **Coauthorship integrity: Reconceptualising assessment validity for the age of generative artificial intelligence** — `coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene` (retrieval failed)
  - https://doi.org/10.1016/j.caeai.2026.100609
- **EduMirror: Modeling Educational Social Dynamics with Value-driven Multi-agent Simulation** — `edumirror-educational-social-dynamics` (retrieval failed)
  - https://doi.org/10.48550/arxiv.2606.07948
- **Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)** — `genai-academic-search-workshop` (retrieval failed)
  - https://doi.org/10.1145/3841298.3841303
- **Detecting Knowledge Gaps from Conversational AI Interactions Using Curriculum Prerequisite Graphs** — `knowledge-gap-detection-ai-tas` (retrieval failed)
  - https://doi.org/10.48550/arxiv.2606.10736
- **Educational integrity in GenAI-augmented assessment: making judgement visible** — `sharma-judgment-visible-genai-assessment-2026` (retrieval failed)
  - https://doi.org/10.1007/s40979-026-00216-y

### No confident match found for the page title

- **Creating an AI-powered platform for generating modelling problems: A case study on direct variation in secondary school** — `ai-modeling-problem-generation-platform-2026` (no OpenAlex match at the 0.85 title-similarity bar)
  - no source URL recorded on the page
- **Causal Modelling of Support Interventions for Student Competency Assessment** — `causal-modeling-competency-assessment-2026` (no OpenAlex match at the 0.85 title-similarity bar)
  - no source URL recorded on the page
- **Hybrid E-Assessment in Higher Education: Semi-Automated Grading of Paper-Based Written Examinations** — `hybrid-e-assessment-semi-automated-grading` (no OpenAlex match at the 0.85 title-similarity bar)
  - no source URL recorded on the page
- **Exploring value judgements in grading: will teachers mark down student work assisted by GenAI, and should they?** — `luo-dawson-value-judgments-grading-2026` (no OpenAlex match at the 0.85 title-similarity bar)
  - no source URL recorded on the page
- **Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study** — `persistent-ai-agents-academic-research` (no OpenAlex match at the 0.85 title-similarity bar)
  - no source URL recorded on the page
- **Preferred Scaffolding Does Not Lead to Better Learning Performance: Empirical Evidence from AI-Supported Mathematical Modelling** — `preferred-scaffolding-ai-mathematical-modeling` (no OpenAlex match at the 0.85 title-similarity bar)
  - no source URL recorded on the page
- **Reshaping Undergraduate Computer Science Education in the Generative AI Era** — `reshaping-cs-education-genai` (no OpenAlex match at the 0.85 title-similarity bar)
  - no source URL recorded on the page
- **How Students (Mis)understand Conditionals and Loops -- A Taxonomy** — `student-misconceptions-conditionals-loops-taxonomy` (no OpenAlex match at the 0.85 title-similarity bar)
  - no source URL recorded on the page
- **How university students work on assessment tasks with generative AI: matters of judgement** — `walton-bearman-assessment-judgment-2025` (no OpenAlex match at the 0.85 title-similarity bar)
  - no source URL recorded on the page
### Source file contained a different paper - resolved

- `ai-divide-ses-personality-primary-education-2026` - *Decoding divides: The role of socioeconomic status and
  personality traits in AI divides and educational inequality* (Wang et al.), doi 10.1016/j.caeai.2026.100566.
  The saved source carried this paper's frontmatter but another article's body, so nothing on the page could be
  grounded. The correct PDF was supplied directly, its text is now the page's saved source, and the page's
  limitations section was written from the paper's own stated limits.

  The mismatch turned out to be one of ten in the same ingestion batch: the saved bodies had been rotated among
  the files, so nine further pages were reading a neighbouring paper as their source. Each was matched to its
  own paper by title and the bodies were put back where they belong.

### Figures that cannot be checked against the saved source

  Responses to Multiple-Choice Assessments*, doi 10.1016/j.caeai.2026.100668. The saved text stops at the old
  extraction cap, before the results, and the only open-access copy Unpaywall lists is the authors' arXiv preprint
  (2412.02713), which is an earlier draft that does not report the generational comparison. Two figures stated on
  the page as findings - the newer models' accuracy against humans (80.8% versus 71.5%) and the chemistry
  person-fit correlation falling from r = 0.389 to 0.060 - therefore cannot be verified from anything on disk.
  The practice section now makes the same point qualitatively, which the saved abstract and research questions do
  support; the key-findings figures need the published PDF before they can be trusted or corrected.

### Sources that are summaries rather than papers, and figures that live only in images

- `wang-safety-gap-productive-struggle-2026` - the saved source is a 3.3 KB abstract-level overview with no method,
  results or limitations text, so the page's limitations describe what a perspective paper can and cannot support
  rather than study statistics. Needs the full article.
- `zhang-races-consistent-essay-scoring-llms-2026` - the saved source stopped at the old extraction cap; the
  open-access article page was re-extracted through a browser and the source is now complete (70 KB). Its QWK
  values are presented only inside figures, which text extraction does not capture, so the page no longer states a
  QWK percentage: it points to the figures and keeps the numbers that the text does state (semantic similarity
  81.3% and 79.3%, pairwise accuracy 73.9% and 63.1%). Read the figure if the QWK value is needed.

### Figures stranded by extraction caps

Pages in this section now have a full text supplied by hand where one was missing; the entries below record what
could not be checked before it arrived.

`structrag-diagram-reasoning-ai-tutoring` was the last page in this position: it stated edge-level F1 gains of
26.4 points on irregular, 23.1 on bridge/mesh and 21.6 on ring diagrams, plus 85.8% and 81.4% diagram accuracy,
while its saved text stopped at the 50,000-character cap before the results tables. All five figures were confirmed
against the published article once a copy was supplied: the gains sentence appears in the results, and the accuracy
figures are the reported performance on those two topologies, which the paper itself calls the weaker cases. The
page now passes the audit with no unverified numbers.

- `genai-chatgpt-adoption-ethics-students-2026` and `idea-framework-metacognitive-genai-2026` both state figures that
  their saved sources do not contain (185 excluded responses; adjusted prompt-quality differences of +11.77 and
  +29.19 points). Both sources stop at the old extraction cap mid-sentence, before the results. Both articles are
  open access, but the publisher serves a robot check to automated requests for the article and the PDF, and the
  only other location Unpaywall lists is the publisher or a directory entry rather than a repository copy. The
  figures are recorded here rather than deleted, because a truncated source is a likelier explanation than an
  invented number, and both pages' claims are internally consistent with what the saved text does show.

### Sources lost and needing the paper itself

A re-fetch across capped saved sources was pointed at the first arXiv link it found in each file, which in most
files is a citation rather than the paper, so thirty saved sources were briefly overwritten with unrelated
articles. Every one has been checked against the source its own frontmatter names, and all thirty are now correct:
fifteen restored automatically, four more from arXiv PDFs on a second attempt, and the last eleven supplied by
hand as PDFs. The supplied copies are kept under `pdf-sources/` with their extracted text beside them, and no marker
file remains in `raw/papers/`. (`pdf-sources/` is the ONE store for source PDFs — `tooling/scripts/check-pdf-store.py`
fails the gate if a PDF appears anywhere else in the repository.)

Two more pages state figures their saved source cannot confirm, because the source stops at the old extraction
cap before the results and no open-access copy exists: `microbit-robotics-machine-learning-teacher-training-2026`
(a 1.54-point coding-concepts gap) and `edurev-100741-tpack-genai-review` (effect sizes of 0.828, 0.831, 0.729 and
0.752). The first is a ScienceDirect article behind a robot check, and Unpaywall reports the second as not open
access at all. Their sections use those figures because the page bodies already carried them; both need the PDF.

## Checked — no further text available

arXiv copies of these were fetched and extracted; the retrieved text is the same
length or shorter than what is stored, so nothing is missing beyond the tail of the
reference list. The last three were supplied directly as PDFs and are now stored in full.

- `2605.05958` — https://arxiv.org/abs/2605.05958
- `2605.21361` — https://arxiv.org/abs/2605.21361
- `2605.26769` — https://arxiv.org/abs/2605.26769
- `2606.16428` — https://arxiv.org/abs/2606.16428
- `2606.26579` — https://arxiv.org/abs/2606.26579
- `2607.08698` — https://arxiv.org/abs/2607.08698
- `2608.03531` — https://arxiv.org/abs/2608.03531
- `2608.04166` — https://arxiv.org/abs/2608.04166
- `2605.05598` — supplied as a PDF; stored text completed and verified
- `2605.21613` — supplied as a PDF; the supplied version carried less text than the copy already stored, so the longer stored copy was kept
- `2607.11873` — supplied as a PDF; stored text completed and verified

## Screened in by the sweep, then resolved

The 2026-09-27 OpenAlex sweep (window 2026-09-20 to 09-27) surfaced three papers that cleared the
significance screen but whose recorded open-access `pdf_url` returns an HTML landing page or a bot
check instead of a file. Two were then supplied as PDFs and are being ingested:

- `10.1080/02602938.2026.2734350` — Trade-offs in assessment and feedback design: a trilemma-based
  model (*Assessment & Evaluation in Higher Education*, 2026-09-22) — supplied as a PDF, **INGESTED**
- `10.1007/s00146-026-03380-4` — "Already outdated and still under review": mapping the landscape of
  research on adolescent development and AI chatbot use (*AI & Society*, 2026-09-25) — supplied as a PDF, **INGESTED**
- `10.1186/s12909-026-10899-z` — A global perspective on the use of artificial intelligence in medical
  education: comparing middle-income and low-income countries (Ying Ma et al., *BMC Medical Education*,
  published 2026-11-23) — supplied as a PDF, **INGESTED** as
  `content/en/articles/ma-ai-medical-education-lmic-2026.md`
- `10.1215/2834703X-12689864` — Toward a Theory of Critical AI Literacies as Media Literacies
  (Sean Cho Ayres, *Critical AI* 4(2), published 2026-10-01) — supplied as a PDF, **INGESTED** as
  `content/en/articles/ayres-critical-ai-literacies-media-literacy-2026.md`

### Screened out: academic LLM hosting workshop report

- `arXiv:2611.34383v1` — Ahmed et al., *Towards Democratized Academic LLM Hosting: Practical insights from needs, implementations, and governance across Dutch institutions* (workshop synthesis, 2026-11) — supplied as a PDF, **Tier 3 adjacent research: no article page**. The paper reports workshop-derived infrastructure and governance patterns across Dutch academic institutions; it did not measure teaching, learning or student outcomes, and the education references are stakeholder context rather than findings. Reconsider if a version reports measured educational outcomes or a direct course-deployment comparison with identified institutions and methods.

## Identified 2026-11-27 (user-supplied 34-PDF batch; screened)

- **Beyond AI Ethics Washing: Toward AI Governance Guided by Organizational Virtue** — Shan Jing, *Behavioral Sciences*, DOI 10.3390/bs16112120. Tier 3 adjacent research: a conceptual governance/normative-analysis paper about organizations generally, with no teaching, learning or education outcome; raw text is archived (`raw/papers/jing-ethics-washing-ai-governance-2026.md`); one short caveat-labelled sentence is woven into `content/en/concepts/governance.md` with the external DOI link, but no article page was created.
- **Will AI De-Skill Our Social Cognition? The Risks in the Delicate Interplay Between Artificial and Natural Theory of Mind** — Pisauro and Fouragnan, *Behavioral Sciences*, DOI 10.3390/bs16112047. Tier 3 adjacent research: cognitive-science perspective on human-AI interaction with no education setting or learning outcome; raw text is archived but no article page was created.
- **Generative AI and the Transformation of Learning-Related Media Repertoires: A Relational Perspective** — Kreutz, *Societies*, DOI 10.3390/soc16120425. Duplicate: already ingested as `kreutz-media-repertoires-2026`; no second page.
