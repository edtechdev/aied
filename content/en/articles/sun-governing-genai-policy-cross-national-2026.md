---
title: "Governing Generative AI in Higher Education: A Cross-National Analysis of Policy Framing and Student Maneuvering"
created: "2026-10-18T09:07:53-04:00"
updated: "2026-10-18T09:07:53-04:00"
type: article
sources: ['raw/papers/10.3390_educsci16101704.md']
confidence: high
page_kind: [evaluation]
research_method: [policy analysis, interviews]
discipline: [humanities education]
level: [higher ed]
audience: [instructors, administrators, policymakers, faculty developers, researchers]
foundations: [academic-integrity, framing-ai-use-for-students, learner-identity, ai-literacy]
pedagogy: [social-norms-ai-use, student-ai-interaction]
technology: [generative-ai, llm]
assessment: [assessment]
methods: [mixed-methods-research, quantitative-research, qualitative-research]
institutions: [educational-policy-ai, governance, regulation]
ethics: [ai-use-disclosure, ethics]
ai_assist:
  - model: "deepseek/deepseek-v4.1-flash"
    role: drafting
    date: "2026-10-18"
    agent: hermes
contributors: [editor]
source_depth: full text
verified: [citation, numbers, links]
---

> **Synthesis:** Sun, Møller and Dohn (2026) combine aspect-based sentiment analysis of [[generative-ai|GenAI]] policy documents from 36 universities in Denmark, the United Kingdom, the United States and the Netherlands with eight interviews with graduate students at one of the four. Using [[mixed-methods-research|convergent mixed methods]] with [[quantitative-research|quantitative]] priority, they find teaching-related statements carry significantly positive sentiment and GenAI- and [[ethics]]-related statements significantly negative, while student- and assessment-related statements do not differ from a neutral baseline. Neither country nor the dimension-by-country interaction is statistically significant. The interviews show students reading this differentiated guidance as vague and situational, relying on personal judgment, peer norms and perceived instructor expectations and responding through supportive use, avoidance, non-disclosure or an anticipated professional-versus-academic tension.

## Key Findings

1. **Policy framing is differentiated by dimension, not by country.** The mixed-effects model finds a significant overall effect of policy dimension on evaluative sentiment, LR χ2(4) = 103.99, p < 0.001, while neither the country effect nor the policy-dimension × country interaction reaches significance.
2. **Teaching is the one positively framed dimension.** Its estimated marginal sentiment mean is 0.128 (p = 0.004), meaning university guidance leans toward encouragement when it addresses pedagogy and learning rather than the technology itself.
3. **GenAI and ethics are the negative poles.** The GenAI dimension shows an estimated marginal mean of −0.320 and the ethics dimension −0.531, both significant at p < 0.001, so caution clusters around the technology in general and around ethical responsibility.
4. **Student and assessment dimensions are neutral, not positive or negative.** Their estimated marginal means are −0.016 (p = 0.721) and −0.076 (p = 0.107), leaving assessment without a clear evaluative direction even though it is the domain where students feel the most risk.
5. **National context explains little in this sample.** The country effect is LR χ2(3) = 3.53, p = 0.317, and the policy-dimension × country interaction is LR χ2(12) = 15.51, p = 0.215, so the four national systems look broadly alike across the five dimensions.
6. **Students experience the guidance as vague and shifting.** Interview participants described the policy as difficult to locate and insufficiently specific to their program, and read relaxed rules as less explicit than the original ban, leaving some to keep "a good distance from AI".
7. **Maneuvering takes four recurring shapes.** Restricting GenAI to supportive functions such as explanation, avoiding it altogether, using it while withholding [[ai-use-disclosure|disclosure]], and using it while reconciling academic norms with anticipated professional expectations.

## A five-dimension framework for reading policy

The study's analytic frame sorts policy statements into five dimensions — GenAI, student, ethics, assessment and teaching — and codes each statement's evaluative valence as positive, neutral or negative. This lets the authors show that a single policy document can be simultaneously promotional and precautionary without contradiction. They read the split through Schiff's distinction between AI for Education and Education for AI: teaching guidance expresses the first, treating [[generative-ai|GenAI]] as a resource to embrace, while the negative framing of GenAI and ethics expresses the second, treating it as a risk to manage. The framework matters because it locates a policy's stance in the dimension being addressed rather than in an overall tone, which is what a university-wide "[[educational-policy-ai|AI policy]]" usually reports. Classifier quality bounds the claim: the ABSA sentiment model reached an accuracy of 0.681 and a macro F1 of 0.648, and the authors stress that measured valence describes the evaluative language of individual statements, not an institution's settled stance.

## Cross-national convergence and its limits

The absence of a significant country effect is the finding the authors treat most carefully. [[higher-ed|Higher education]] governance is usually analyzed through national system traditions, yet here Denmark, the Netherlands, the United Kingdom and the United States look broadly similar across dimensions. The authors connect this to a documented oscillation at the supranational level, where UNESCO guidance alternates between pedagogical promise and perceived risk. They also qualify it heavily: the 36 institutions are globally ranked, research-intensive universities in the Global North whose overlapping professional and policy environments may itself produce convergence. The design therefore cannot separate a genuine common governance pattern from a similarity induced by the selected institutional segment.

## How students maneuver around differentiated framing

The [[qualitative-research|qualitative]] strand elaborates the policy-level pattern rather than testing it, and its central construct is the maneuvering demand: when encouragement and constraint appear together, students must work out how the expectations apply to a specific task. The interviews surface four responses, and the fourth carries the theoretical weight. Restricting GenAI to supportive uses and avoiding it entirely are the defensible options under ambiguity; withholding disclosure arises because students fear that acknowledging use will invite scrutiny and cast doubt on originality, so [[ai-use-disclosure|disclosure]] becomes a liability rather than a transparency mechanism. The novel fourth response spans contexts: some students judged GenAI inappropriate in academic work but legitimate or expected in future employment, summarized as "As a student I must learn, as a professional I must produce". This extends the maneuvering demand beyond a single educational setting.

## The gap between encouragement and guidance

The most practical tension the study documents is between a positively framed teaching dimension and what students actually receive. Although policies encourage GenAI, participants reported limited structured, study-specific instruction on when and how it could be used responsibly, and described responsibility for defining acceptable use as falling largely to individual instructors whose [[social-norms-ai-use|implicit norms]] they had to guess. The authors align this with prior work showing that institutional support for GenAI integration is not always matched by concrete guidance for [[pedagogy|teaching practice]]. Their response is structural: clearer program- and course-level guidance, concrete examples of acceptable use, consistent [[ai-use-disclosure|disclosure]] expectations, and support for [[ai-literacy|GenAI literacy]] embedded early in a degree so that expectations are set before assessed work begins.

## What this means for practice

- **Instructors.** State your position on GenAI at course level and give concrete examples of acceptable and unacceptable use, because students reported inferring your expectations rather than reading them, and some chose non-disclosure to avoid looking questionable.
- **Administrators.** Separate encouragement from regulation in the way you write and communicate policy: a single document that celebrates GenAI in teaching while warning about it in ethics reads to students as contradictory, so say plainly which dimension each rule governs.
- **Faculty developers.** Build early, mandatory GenAI guidance into introductory coursework alongside referencing and research skills, since participants asked for exactly this and located their uncertainty at the point where a foundation had not yet been laid.
- **Policymakers and institutions.** Treat disclosure as a designed practice, not only a rule — if students read disclosure as a liability, the mechanism intended to make AI use visible will suppress the very information assessment needs.

## Limitations

- **Institutional sample is homogeneous.** The 36 universities are globally ranked, research-intensive institutions in the Global North. The authors state the cross-national consistency cannot be separated from convergence associated with that segment, and so should be read cautiously.
- **Sentiment classification is only moderately accurate.** The ABSA sentiment model reached accuracy 0.681, and a supplementary human-validation exercise found further disagreement, especially on neutral statements, so classification uncertainty may affect the estimated dimension differences.
- **The corpus is a time-specific snapshot.** Policy documents were collected up to August 2024, and the authors note that institutional GenAI governance evolved rapidly, so the findings describe one cross-sectional moment.
- **The qualitative strand is a typology, not an estimate.** The eight interviews were with master's students at one sampled university and play a complementarity role; the four responses should be read as a typology rather than an estimate of how students in general respond.
- **Coding was imperfect.** Initial inter-annotator agreement was 72% for policy dimension and 70% for sentiment, resolved through discussion, so the reference labels carry known disagreement.

## Citation

Sun, Z., Møller, A., & Dohn, N. B. (2026). [*Governing Generative AI in Higher Education: A Cross-National Analysis of Policy Framing and Student Maneuvering*](https://doi.org/10.3390/educsci16101704). *Education Sciences*, *16*(10), 1704.
