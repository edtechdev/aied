---
title: "Institutional approaches to artificial intelligence policy and guidance in health informatics and information management education: emerging trends and inconsistencies"
created: "2026-09-15T17:05:00-04:00"
updated: "2026-09-19T07:04:04-04:00"
type: article
foundations: [academic-integrity, curriculum-design]
technology: [generative-ai]
ethics: [ethics, privacy]
sources: ['raw/papers/institutional-ai-policy-health-informatics-2026.md']
audience: [administrators, curriculum designers, faculty development, institutions, medical educators, policymakers, researchers]
level: [higher ed]
research_method: [mixed methods, policy analysis, quantitative, qualitative]
discipline: [medical education, information technology]
confidence: high
institutions: [educational-policy-ai, governance]
stakeholders: [professional-training]
---

> **Synthesis:** **Institutional approaches to AI policy and guidance in health informatics and information management education** — A convergent [[mixed-methods-research|mixed-methods]] environmental scan of all 48 CAHIIM-accredited health informatics (HI) and health information management (HIM) master's programs in the United States found that 40 programs (83%) published at least one AI-related document, but most of those documents function as advisory guidance rather than formal policy. Content clusters tightly around [[academic-integrity]] and responsible student conduct, while [[privacy]], intellectual property, health-data [[regulation]], and equitable access appear far less often, and health-data terms such as electronic health records are absent entirely. Latent Dirichlet Allocation topic modeling identified four themes: academic integrity and student AI use, student use of [[generative-ai|generative AI]] tools, AI and data tools in university research, and student engagement with ChatGPT. The authors argue that [[educational-policy-ai|academic AI policy]] in HI and HIM education has been separated from [[curriculum-design]] and from healthcare [[governance]] competencies, leaving [[professional-training|professional preparation]] for AI governance outside the reach of the documents that students actually receive.

## Key Findings

1. **Coverage is broad but not universal.** Of 48 CAHIIM-accredited HI and HIM master's programs listed in November 2025, 40 (83%) had at least 1 qualifying publicly available AI-related document while 8 programs had none; the methods narrative reports that 5 programs had no publicly available AI-related documents, leaving 43 with at least one policy, and that 3 shared institutional policies each covering both an HI and an HIM program were counted once, producing a final analytic sample of 40 distinct documents.
2. **Guidance, not policy, is the dominant form.** Documents were primarily guidelines (21, 53%), followed by informational documents (9, 23%), formal [[educational-policy-ai|policies]] (7, 18%), and other types such as mixtures, statements, or task force outputs (3, 8%), which the authors read as institutional attention to AI without commensurate binding commitment.
3. **Delivery mode does not predict policy design.** Most programs used online delivery (36, 90%) versus campus-only (4, 10%), and Fisher's exact tests found no significant association between delivery mode and policy type (P = .85) or between delivery mode and policy audience (P = .71); the authors caution that cell counts were too low to detect meaningful differences.
4. **Audiences skew toward faculty in much of the corpus.** Intended audiences were predominantly faculty and students together (20, 51% in the narrative, shown as 50% in Table 1), followed by faculty-only documents (13, 33%) and student-only documents (6, 15%); 1 document (3%) did not specify an intended audience.
5. **Policy availability tracks regional accreditors unevenly.** The Higher Learning Commission (n = 14) and the Southern Association of Colleges and Schools Commission on Colleges (n = 13) accounted for 60% of the dataset, followed by the Middle States Commission on Higher Education (n = 8), the Northwest Commission on Colleges and Universities (n = 4), and the New England Commission of Higher Education (n = 3), with no policies identified for Western Association of Schools and Colleges (WASC) Senior College and University Commission or WSCUC-accredited institutions.
6. **Academic integrity dominates the vocabulary of [[higher-ed|higher education]] AI documents.** Academic integrity was the most frequent keyword across all categories (n = 139), ahead of citation (n = 59), [[assessment]] (n = 50), and plagiarism (n = 38); less frequent were authorship (n = 13), [[ai-detection|detectors]] (n = 12), and misuse (n = 10), while proctoring (n = 2), [[ai-use-disclosure|disclosure of AI]] (n = 1), and contract cheating (n = 1) were nearly absent, and [[remote-proctoring|remote proctoring]] language did not feature as a policy instrument.
7. **Health-data regulation is mentioned rarely in AI-specific academic documents.** Integrity language (n = 139) dwarfed HIPAA (n = 5), FERPA (n = 11), and IRB guidance (n = 8); ethics (n = 31) and legal (n = 31) terms were similarly infrequent, and the authors suggest these matters are handled through broader institutional compliance policies rather than academic AI policies.
8. **Intellectual property references are broad rather than operational.** Policies referenced intellectual property (n = 57) and property (n = 50), but rarely addressed licensing (n = 8) or patents (n = 6), and copyright appeared just 8 times, indicating abstract rather than actionable [[ethics|ethical]] and ownership guidance.
9. **Data ethics terms appear unevenly, and the strongest ones are technical.** Within the data ethics category the most frequent terms were bias (n = 65), security (n = 55), and privacy (n = 55, reported as n = 54 earlier in the results narrative), while transparency (n = 17), fairness (n = 10), accountability (n = 10), and risk assessment (n = 5) were scarce; the coded terms civil rights, explainability, and robustness were not present in any policy.
10. **Equity and digital inclusion are a clear gap.** Mentions of inclusion (n = 9), accessibility (n = 9), devices (n = 5), accommodations (n = 4), and equitable access (n = 2) were limited, with broadband (n = 1) and one apparent typo variant of underserved (n = 1) also minimal, indicating little engagement with [[equity-in-ai-education]].
11. **Health-specific and training terminology is thin.** Personal health records (n = 19) and confidentiality (n = 5) appeared infrequently and electronic health records were not mentioned at all, which is consistent with the academic scope of the documents; general instructional training terms were common (n = 168) whereas references to workshops (n = 17) were limited, suggesting little faculty development scaffolding (n = 17 workshop references) inside the policies themselves.
12. **Topic modeling yields four stable themes with limited vocabulary overlap, consistent with wider higher-education trends.** Using Latent Dirichlet Allocation with the topicmodels package in R (a 4-topic solution chosen for coherence and interpretability), the model produced four clusters: academic integrity and policy on student use of AI and tools; student use of generative AI tools; AI and data tool use in university research; and student engagement with ChatGPT in academic tasks; in the intertopic distance map, Topic 1 separated on the far left, Topics 2 and 4 clustered together on the right, and Topic 3 occupied the lower-right quadrant. The authors situate these themes against a cross-national review of 343 universities that found approaches ranging from bans to instructor-driven discretion with nearly half adopting flexible policies, research on U.S. Research Level 1 institutions showing support for generative AI alongside a need for significant pedagogical revision, and case studies of governance models that distribute AI responsibility across institutional roles.

## Implications for AI in Education

For institutional leaders, the study is a map of a policy landscape that is present but shallow. Nearly every accredited HI and HIM master's program in the United States has published something about AI, yet the modal artifact is an advisory guideline written for faculty and students about conduct in coursework. Institutions that treat the existence of such a document as evidence of AI readiness should ask a harder question: which AI risks in this discipline does the document actually govern, and which are silently delegated to compliance offices that students and instructors never consult?

Program directors in health informatics, medical education, and adjacent fields face a specific version of this problem. Their students handle protected health information and work in clinical and research contexts where [[privacy]], security, fairness, and accountability are operational rather than abstract, yet the AI documents they receive rarely mention HIPAA (n = 5), FERPA (n = 11), or IRB guidance (n = 8), and never mention electronic health records. A reasonable institutional response is to stop expecting academic AI policy to carry healthcare data governance, and instead make the link explicit: name where the compliance obligations live, and require students to encounter them in coursework.

Assessment and integrity policy should be read as the center of gravity of the current corpus, and as its main limitation. Academic integrity (n = 139), citation (n = 59), plagiarism (n = 38), and [[assessment]] (n = 50) dominate, while [[ai-use-disclosure|disclosure]] requirements (n = 1) and contract cheating (n = 1) are vanishingly rare, and the authors note that graduate policies emphasize originality in research milestones without specific procedures for risk management. Institutions that want enforceable integrity rules rather than statements of value need disclosure mechanics, detection policy limits, and defined procedures for handling suspected misuse, not additional reminders that honesty matters.

Equity deserves attention precisely because the corpus barely has any. Inclusion (n = 9), accessibility (n = 9), accommodations (n = 4), and equitable access (n = 2) appear at rates that cannot support the claim that [[equity-in-ai-education]] has been addressed, and one document's own vocabulary for underserved students appears to survive only as a typographical error in the keyword analysis. If a program requires AI use in coursework, the access and accommodation provisions belong in the same document as the prohibition.

The separation of academic policy from curriculum and governance is the paper's structural argument, and it is also its practical recommendation. The authors call on accrediting bodies and professional organizations such as CAHIIM, AMIA, and the U.S. Department of Labor's 2026 AI Literacy Framework, released February 13, 2026 with foundational content areas covering understanding AI principles, exploring AI use, directing AI effectively, evaluating AI outputs, and using AI responsibly, to reduce variability through shared frameworks, while warning that standardizing language is not the same as operationalizing it. Programs should expect their AI policies to be revised repeatedly as technology and institutional priorities shift, and should treat [[professional-training|workforce preparation]] in AI governance as a distinct line of work rather than a byproduct of the integrity handbook.

Finally, the study's limitations bound what can be concluded. Because only publicly available documents were analyzed, programs with strong but private compliance structures may be underrepresented, and this visibility bias means the observed absence of privacy, equity, and health-data language is a finding about published guidance rather than about institutional practice overall. The unsupervised topic model cannot capture institutional intent, and the cross-sectional snapshot cannot show whether policies are converging or diverging.

## What this means for practice

- **Administrators.** Audit what your AI document actually governs instead of counting its existence as evidence of readiness: of all 48 CAHIIM-accredited HI and HIM master's programs, 40 (83%) published at least one AI-related document, but 53% of those documents were guidelines and only 18% were formal [[educational-policy-ai|policies]].
- **Administrators.** Name where health-data obligations live and require students to meet them in coursework — the corpus mentions HIPAA 5 times, FERPA 11 times and IRB guidance 8 times, and electronic health records not at all, in a field whose graduates handle protected health information.
- **Faculty developers.** Replace statements of value with working mechanics: academic integrity was the corpus's most frequent term (n = 139) while AI-use disclosure (n = 1) and contract cheating (n = 1) were nearly absent, so specify disclosure requirements, detection limits and procedures for handling suspected misuse.
- **Designers.** Put access and accommodation provisions in the same document that requires AI use — inclusion (n = 9), accessibility (n = 9), accommodations (n = 4) and equitable access (n = 2) appear too rarely to support any claim that [[equity-in-ai-education]] has been addressed.
- **Researchers.** Read the thin privacy and equity language as a finding about published guidance rather than about institutional practice, and pair document analysis with interviews or compliance review before reporting what programs actually do.

## Limitations

- **Public documents only.** Eight of the 48 programs had no qualifying publicly available AI document — the methods narrative reports 5 with none at all, leaving 43 with at least one — so programs with strong but private compliance structures may be underrepresented and the observed absences are absences in published guidance.
- **One field, 40 documents, one moment.** The analytic sample is 40 documents from CAHIIM-accredited health informatics and health information management master's programs collected in November 2025, a cross-sectional snapshot that cannot show whether policies are converging or diverging.
- **Keyword counts are not enforcement.** Frequencies such as academic integrity (n = 139) or privacy (n = 55) describe vocabulary use, not compliance, and one coded equity term survives only as a typo variant of "underserved" (n = 1).
- **Unsupervised topic modeling and thin cells.** The 4-topic LDA solution cannot capture institutional intent, and the delivery-mode comparisons rested on cell counts too low to detect meaningful differences (policy type P = .85, audience P = .71).

## Connected Concepts

- [[educational-policy-ai]]
- [[academic-integrity]]
- [[governance]]
- [[higher-ed]]
- [[medical-education]]
- [[privacy]]
- [[curriculum-design]]
- [[professional-training]]
- [[generative-ai]]
- [[ethics]]
- [[regulation]]
- [[equity-in-ai-education]]
- [[assessment]]

## Connected Articles

- [[crompton-governing-genai-higher-ed-delphi-2026]] — Global Delphi study on governing generative AI in higher education policy and practice
- [[genai-policies-higher-ed-computing]] — Comparative analysis of institutional and course-level generative AI policies
- [[institutional-governance-ai-universities]] — Institutional alignment and fragmentation in university AI governance
- [[ssaho-ai-academic-integrity-review-2025]] — Systematic review of AI and academic integrity in higher education

## Citation

Eldredge, C., Dolezel, D., Jones, J., Vooppala, N., & Bronsburg, S. E. (2026). [Institutional approaches to artificial intelligence policy and guidance in health informatics and information management education: emerging trends and inconsistencies](https://doi.org/10.1093/jamia/ocag150). *Journal of the American Medical Informatics Association*.
