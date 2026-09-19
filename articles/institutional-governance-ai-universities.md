---
title: "Policy Fragmentation or Institutional Alignment? Institutional Governance of AI in Universities and Business Schools"
created: "2026-08-09T07:09:19-04:00"
updated: "2026-09-19T10:56:42-04:00"
type: article
foundations: [ai-education, ai-literacy]
connected_faqs: [institutional-ai-policy]
audience: [administrators]
research_method: [policy analysis, quantitative]
level: [higher ed]
sources: ['raw/papers/2608.03584v1.md']
confidence: high
discipline: [business education]
institutions: [change-management, educational-policy-ai, regulation]
stakeholders: [professional-training]
---

> **Synthesis:** This study analyzes AI policies across higher education institutions in 34 U.S. states, using NLP to uncover a clear divergence: university-level policies emphasize [[privacy|data security]] and risk mitigation, while school-level policies (when they exist) focus on pedagogical applications and tool usage. Relatively few business schools maintain distinct AI policies, creating [[discipline-specific-aied|misalignment with discipline-specific learning objectives]]. The findings highlight the challenges of institutional AI [[governance]] and the tension between centralized [[regulation|compliance-oriented policies]] and the need for discipline-specific pedagogical guidance.

## Research Approach

The study applied [[educational-nlp|natural language processing]] to analyze AI policies from institutions across 34 states:

- **University-wide policies:** Broad [[governance]] frameworks addressing AI use campus-wide
- **School/department-level policies:** Unit-specific guidelines, primarily in [[business-education|business schools]]
- **Comparative analysis:** NLP identified thematic differences between governance levels

## Data and Empirical Strategy

The authors crawled AI policies from 149 [[higher-ed|R1 and R2 research universities]] in the United States, manually verifying each policy and yielding a corpus of 130 university-level policies spanning 34 states. Only eight business schools had a school-specific policy at the time of crawling, including Haas (Berkeley), Columbia, Tuck (Dartmouth), Harvard Business School, MIT Sloan, Kellogg (Northwestern), Ross (Michigan), and Wharton. Three [[quantitative-research|quantitative]] measures were constructed: sentiment polarity (Spacy), topic modeling via neural embeddings ([[generative-ai|BERTopic]]), and cosine similarity of policies via SBERT sentence embeddings.

## Key Findings

1. Most universities take a moderately positive but cautious stance toward AI: 95% of policies carry a negative clarity-strength score, meaning weak, suggestive language ("may," "can") dominates over directives ("must," "prohibited"), and many documents are framed as "guidelines" rather than mandates.
2. University-level policies prioritize data security, risk mitigation, procurement, and legal compliance, with comparatively little pedagogical guidance.
3. School-level policies — when they exist — focus on pedagogical applications, tool access, model outputs, AI risks, and AI literacy and skill development.
4. Business school policies differ from their corresponding university-wide policies in six of eight cases, creating potential misalignment with discipline-specific learning objectives.
5. Institutions largely fall short of [[curriculum-design|accreditation expectations]] of a unified integration of curriculum, policy, assessment, and infrastructure.

## University-Wide Policy Tone

Polarity scores cluster near zero but positive, indicating that universities are "carefully treading" the rapidly changing AI landscape without taking a concrete stance. Subjectivity scores show roughly 80% of policies are mostly neutral, consistent with their presentation as suggested guidelines. Topic modeling of university policies clusters into three broad categories: usage and education, technology and tools, and governance and potential risks. The overwhelmingly cautious and non-assertive language suggests institutions are reticent to commit to specific mandates, which may explain why many release "guidelines" rather than enforceable [[educational-policy-ai|policy]].

## Within-Institution Divergence

Comparing business school policies to their host university's policy via cosine similarity, all but UC-Berkeley and Northwestern differ from the central framework. School-level policies emphasize tools, agreement, faculty course expectations, student guidelines, AI risks and compliance, and [[ai-literacy|AI literacy and skill development]], whereas university-wide policies add procurement, confidential [[research-methods-aied|research]] protection, [[ai-detection|AI detection]] in courses, and shared academic-integrity and tutoring guidance. School-level policies focus on pedagogy while university-level policies primarily focus on risk management.

## Accreditation Tensions

Because AI adoption is still in a transition state, most institutions are not yet meeting [[business-education|accreditation bodies]]' expectations of unified integration of curriculum, policy, assessment, and infrastructure. The divergence between centralized [[governance]] and local instructional objectives is particularly consequential for [[discipline-specific-aied|finance education]], where both conceptual rigor and technical proficiency are required. Policies that support student competency in emerging [[ai-technologies|technologies]] must move beyond questions of safety and adoption to address how AI is integrated into [[teacher-role|teaching]] and learning.

## Proposed Policy Framework

The authors recommend a layered governance approach grounded in [[pedagogy|pedagogical practices]]. A foundational university-wide risk-management layer should ensure consistency, legal compliance, and [[academic-integrity|academic integrity]] — including clear definitions around plagiarism and strict rules prohibiting the upload of sensitive data. At the department level, unit-specific contextual policies should honor university guidelines while fostering student learning. The authors also call for stronger collaborative mechanisms such as inter-department policy committees comprising faculty and students across disciplines, with a continuous [[feedback|feedback loop]] so teaching and pedagogy inform policy and vice versa.

## What this means for practice

- **Administrators.** Write directives rather than suggestions: 95% of the 130 university policies analyzed carry a negative clarity-strength score, with "may" and "can" outweighing "must" and "prohibited", and a document framed only as a guideline leaves faculty and students without an enforceable standard.
- **Administrators.** Split the layers deliberately: keep data security, procurement, legal compliance, and [[academic-integrity|academic integrity]] at the university level, and require unit-level policies that carry the pedagogical content — tool access, model outputs, AI risks, and [[ai-literacy|AI literacy]] — that central documents omit.
- **Administrators.** Convene an inter-department policy committee of faculty and students and put it on a revision [[feedback|feedback loop]], so teaching and pedagogy inform policy and policy informs teaching instead of the two diverging.
- **Administrators.** Close the [[discipline-specific-aied|accreditation]] gap: institutions largely fall short of accreditation bodies' expectation of unified integration of curriculum, policy, assessment, and infrastructure, so integration is the compliance work still outstanding.

## Limitations

- The corpus is 130 university-level AI policies crawled from 149 U.S. R1 and R2 research universities across 34 states; the authors state that this sample size may limit generalizability.
- Only eight business schools had their own policy at the time of crawling (Haas, Columbia, Tuck, Harvard Business School, MIT Sloan, Kellogg, Ross, and Wharton), so the within-institution comparison rests on eight paired documents, six of which diverge from the host university.
- The three measures are automated text statistics — Spacy sentiment polarity, BERTopic topic modeling, and SBERT cosine similarity — which describe wording and framing rather than implementation, enforcement, or classroom effect.
- The authors cannot determine whether documents labeled "guidelines" are mandatory or optional, and they call for modeling that distinction through separate analytical samples in future work.

## Connected Concepts

- [[regulation]]
- [[higher-ed]]
- [[ai-education]]
- [[ai-literacy]]
## Connected Articles

- [[generative-ai-reduced-study-time-math]] — Faster Completion, Less Learning: Generative AI Reduced Study Time on Math Problems and the Knowledge They Build
- [[agency-gap-ai-writing]] — The agency gap in AI-supported writing: how reactive and proactive agent designs shape multimodal reasoning
- [[will-skill-not-tool-chinese-university-students-acceptance-of-generative-ai-for-]] — Will, Skill, Not Tool: Chinese university students' acceptance of generative AI for academic writing in informal English medium instruction settings

## Citation

Manikonda, L., & Outlaw, D. (2026). [*Policy Fragmentation or Institutional Alignment? Institutional Governance of AI in Universities and Business Schools*](https://arxiv.org/abs/2608.03584v1). v1.
