---
title: "Policy Fragmentation or Institutional Alignment? Institutional Governance of AI in Universities and Business Schools"
created: "2026-08-09T07:09:19-04:00"
updated: "2026-08-24T17:45:00-04:00"
type: article
tags: [ai-education, higher-ed, regulation, educational-policy-ai, change-management, ai-literacy, professional-training]
audience: [administrator]
research_method: [survey]
level: [higher ed]
sources: ['raw/papers/2608.03584v1.md']
confidence: high
---

> **Synthesis:** This study analyzes AI policies across higher education institutions in 34 U.S. states, using NLP to uncover a clear divergence: university-level policies emphasize [[privacy|data security]] and risk mitigation, while school-level policies (when they exist) focus on pedagogical applications and tool usage. Relatively few business schools maintain distinct AI policies, creating [[discipline-specific-aied|misalignment with discipline-specific learning objectives]]. The findings highlight the challenges of institutional AI [[governance]] and the tension between centralized [[regulation|compliance-oriented policies]] and the need for discipline-specific pedagogical guidance.

## Research Approach

The study applied [[educational-nlp|natural language processing]] to analyze AI policies from institutions across 34 states:

- **University-wide policies:** Broad [[governance]] frameworks addressing AI use campus-wide
- **School/department-level policies:** Unit-specific guidelines, primarily in [[business-education|business schools]]
- **Comparative analysis:** NLP identified thematic differences between governance levels

## Data and Empirical Strategy

The authors crawled AI policies from 149 [[higher-ed|R1 and R2 research universities]] in the United States, manually verifying each policy and yielding a corpus of 130 university-level policies spanning 34 states. Only eight business schools had a school-specific policy at the time of crawling, including Haas (Berkeley), Columbia, Tuck (Dartmouth), Harvard Business School, MIT Sloan, Kellogg (Northwestern), Ross (Michigan), and Wharton. Three quantitative measures were constructed: sentiment polarity (Spacy), topic modeling via neural embeddings ([[generative-ai|BERTopic]]), and cosine similarity of policies via SBERT sentence embeddings.

## Key Findings

1. Most universities take a moderately positive but cautious stance toward AI: 95% of policies carry a negative clarity-strength score, meaning weak, suggestive language ("may," "can") dominates over directives ("must," "prohibited"), and many documents are framed as "guidelines" rather than mandates.
2. University-level policies prioritize data security, risk mitigation, procurement, and legal compliance, with comparatively little pedagogical guidance.
3. School-level policies — when they exist — focus on pedagogical applications, tool access, model outputs, AI risks, and AI literacy and skill development.
4. Business school policies differ from their corresponding university-wide policies in six of eight cases, creating potential misalignment with discipline-specific learning objectives.
5. Institutions largely fall short of [[curriculum-design|accreditation expectations]] of a unified integration of curriculum, policy, assessment, and infrastructure.

## University-Wide Policy Tone

Polarity scores cluster near zero but positive, indicating that universities are "carefully treading" the rapidly changing AI landscape without taking a concrete stance. Subjectivity scores show roughly 80% of policies are mostly neutral, consistent with their presentation as suggested guidelines. Topic modeling of university policies clusters into three broad categories: usage and education, technology and tools, and governance and potential risks. The overwhelmingly cautious and non-assertive language suggests institutions are reticent to commit to specific mandates, which may explain why many release "guidelines" rather than enforceable [[educational-policy-ai|policy]].

## Within-Institution Divergence

Comparing business school policies to their host university's policy via cosine similarity, all but UC-Berkeley and Northwestern differ from the central framework. School-level policies emphasize tools, agreement, faculty course expectations, student guidelines, AI risks and compliance, and [[ai-literacy|AI literacy and skill development]], whereas university-wide policies add procurement, confidential research protection, AI detection in courses, and shared academic-integrity and tutoring guidance. School-level policies focus on pedagogy while university-level policies primarily focus on risk management.

## Accreditation Tensions

Because AI adoption is still in a transition state, most institutions are not yet meeting [[business-education|accreditation bodies]]' expectations of unified integration of curriculum, policy, assessment, and infrastructure. The divergence between centralized [[governance]] and local instructional objectives is particularly consequential for [[discipline-specific-aied|finance education]], where both conceptual rigor and technical proficiency are required. Policies that support student competency in emerging technologies must move beyond questions of safety and adoption to address how AI is integrated into teaching and learning.

## Proposed Policy Framework

The authors recommend a layered governance approach grounded in [[pedagogy|pedagogical practices]]. A foundational university-wide risk-management layer should ensure consistency, legal compliance, and [[academic-integrity|academic integrity]] — including clear definitions around plagiarism and strict rules prohibiting the upload of sensitive data. At the department level, unit-specific contextual policies should honor university guidelines while fostering student learning. The authors also call for stronger collaborative mechanisms such as inter-department policy committees comprising faculty and students across disciplines, with a continuous feedback loop so teaching and pedagogy inform policy and vice versa.

## Implications for AI Governance in Education

The study reveals a fundamental structural challenge in [[ai-education|AI governance]]: risk-averse centralized policies that fail to address pedagogical needs at the discipline level. The authors recommend that guidelines be aligned with broader institutional policies while explicitly addressing [[discipline-specific-aied|discipline-specific learning objectives]] and evolving workforce demands. This aligns with emerging [[ai-literacy]] frameworks that emphasize both technical and pedagogical dimensions of AI readiness, and suggests that bringing faculty and students into the loop of [[educational-policy-ai|policy design]] can improve student outcomes while keeping [[academic-integrity|academic integrity]] intact.

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
