---
title: "Artificial intelligence and immersive technologies for LGBTQ+ youth: a narrative review"
created: "2026-11-04T12:00:00-05:00"
updated: "2026-11-04T12:00:00-05:00"
type: article
technology: [conversational-ai, virtual-and-augmented-reality, llm]
pedagogy: [well-being, social-emotional-learning]
ethics: [equity-in-ai-education, bias-mitigation, inclusive-learning, privacy]
methods: [meta-analysis-systematic-review]
research_method: [literature review]
level: [k 12, higher ed]
audience: [instructors, researchers, software developers]
sources: ['raw/papers/shekarchi-lgbtq-youth-ai-immersive-review-2026.md']
source_url: "https://doi.org/10.3389/fpsyg.2026.2002054"
confidence: high
page_kind: [synthesis]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-04"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Shekarchi and colleagues (2026) map two literatures that have grown up apart — [[conversational-ai|AI chatbots]] and [[virtual-and-augmented-reality|VR and metaverse]] environments — against one population: LGBTQ+ youth, who report elevated distress and barriers to affirming care. The review screened 367 records plus 180 from a supplementary search, retained 67 sources of which only 12 provide direct evidence from LGBTQ+ young people, and organized the field into four themes: chatbots, immersive environments, algorithmic bias and safety, and identity affirmation. Findings are consistent; designs are thin: anonymity is what young people value most, current [[llm]]-based tools answer generically and travel badly outside North America and Western Europe, avatars support identity exploration in ways text cannot, and bias is documented rather than hypothesized. Because most studies are pilots, the review supports design guidance for [[well-being]] and [[social-emotional-learning]] support rather than claims of effectiveness, and it places [[equity-in-ai-education]], [[bias-mitigation]], [[inclusive-learning]] and [[privacy]] inside the architecture of these tools rather than in a later compliance pass. It is a narrative review appraised with the [[mixed-methods-research|Mixed Methods]] Appraisal Tool, explicitly not a [[meta-analysis-systematic-review|systematic review]].

## Key Findings

1. Searches of PubMed, Scopus and Google Scholar used seven search string combinations and returned 367 records, plus 180 from a supplementary search; 67 sources informed the synthesis, 12 with direct evidence from LGBTQ+ young people.
2. Chatbots are acceptable largely because they are anonymous and always available, but evaluations consistently find generic, impersonal replies that miss the cultural specificity of queer experience, especially for youth in conservative or non-Western settings.
3. Avatar-based immersion does what text cannot: in a Japanese metaverse support group, 79.2% of 53 LGBTQ+ youth aged 14 to 23 chose avatars aligned with their gender identity, describing that choice as self-expression.
4. Algorithmic bias is a documented harm operating through content moderation, facial recognition and language model outputs, and the immersion that makes VR affirming also makes identity-based harassment feel more threatening than its text-based equivalent.
5. Co-design reliably surfaces gaps that developers missed, yet no study compared a co-designed tool with a conventionally developed one; of 45 appraised studies, 20 met all five MMAT criteria and all 20 were [[qualitative-research|qualitative]].

## What the review could and could not find

The first contribution is cartographic. Chatbot research and VR research address the same population with different architectures and different outcome vocabularies, and the authors found no prior review covering both for LGBTQ+ youth specifically; the nearest precedent identified 38 studies of 24 digital health interventions but predates most of the chatbot, large language model and metaverse work. Sources were sorted into three tiers — direct evidence from LGBTQ+ young people aged 13 to 24, indirect evidence departing on one dimension, and background sources — and conclusions about youth are drawn only from the first. The corpus is small: the supplementary search added 16 sources, 12 empirical and 4 background. Of 51 retained sources, 34 were empirical.

## Anonymity is the feature and the risk

Across studies anonymity is the attribute young people name first. Rural LGBTQ+ youth in the United States responded positively to a conversational agent because it reduced the [[anxiety-and-stress|anxiety]] of talking to a person; in the week-long REALbot pilot, 20 participants sent an average of 49.3 messages but showed no significant pre-post change in isolation or depressive symptoms, establishing feasibility rather than efficacy. An evaluation of eight large language models against hundreds of Reddit posts from queer adolescents found them supportive and inclusive, outscoring the human comments they were benchmarked against, yet still generic and weak on cultural context. A KwaZulu-Natal pilot with 44 men who have sex with men and transgender women found privacy valued but responses slow and repetitive, most saw it as an addition to counseling. Anonymity cuts both ways: it lowers the cost of [[help-seeking]] and raises the stakes of any design that can out a young person to family.

## Avatars do work that text cannot

The immersive studies converge on embodiment. A pilot of an eight-week VR social support group with 10 transgender and gender expansive youth began from a clinical observation: [[video-education|video-based]] telehealth can trigger gender dysphoria by forcing participants to see themselves on camera, whereas an avatar sidesteps that, and participants described gender joy and community connection rather than symptom relief. The Japanese metaverse group ran 90-minute sessions over a year and reported gains in perceived safety, self-confidence and avatar-based self-expression. Adults in a multi-user VR therapy platform said avatars gave them confidence to speak and that voice mattered as much as appearance, while the same anonymity made it harder to trust others' self-presentation. The costs are documented: a systematic review of 85 studies published between 2017 and 2025 found LGBTQ+ people among groups facing disproportionate harassment in VR.

## Co-design has evidence of process, not of effect

The participatory studies are the most actionable and the least conclusive. Fifteen LGBTQ+ teenagers working with Planned Parenthood on an AI sexual health chatbot identified gaps in inclusivity, transgender-specific content and tone, and their feedback was implemented. Adolescents with suicide-related histories co-designed safety protocols for a VR intervention without loss of engagement, and in a text-message intervention for youth with online victimization, 19 of 20 preferred full or partial automation with handover to a human. What none of this establishes is comparative benefit: no study set a co-designed tool against a conventionally developed one. The sharpest methodological point concerns outcome selection: deficit-framed studies measure symptoms, affirmative studies measure recognition and joy, and instruments for the latter do not yet exist; a field measuring only symptoms cannot register an intervention whose main effect is that participants felt recognized.

## What this means for practice

- **Instructors.** Assume some LGBTQ+ students already use these tools, and teach their limits explicitly: generic advice, cultural mismatch, and no evidence that any chatbot outperforms a facilitated human space.
- **Researchers.** Add affirmation-relevant outcomes to symptom measures and stop adding pilots; the field needs powered designs, longer follow-up and comparison against human-facilitated support.
- **Administrators.** Make escalation to human care, data minimization and outing risk procurement conditions rather than later features; an alert to family without consent can cause the harm the tool was built to prevent.

## Limitations

- Only 12 of 67 sources provided direct evidence from LGBTQ+ youth; much of the synthesis rests on adult or mixed-age samples and adjacent technologies.
- All included studies were in English, and most came from the United States, United Kingdom, Canada, Australia and Germany, leaving legally hostile contexts invisible.
- Of 45 appraised studies, 14 met two or fewer MMAT criteria, mainly through convenience samples, incomplete outcome data and unvalidated measures.

## Citation

Shekarchi, R., Eleuteri, S., Saladino, V., Calaresi, D., Giordano, F., & Prunas, A. (2026). [*Artificial intelligence and immersive technologies for LGBTQ+ youth: a narrative review*](https://doi.org/10.3389/fpsyg.2026.2002054). Frontiers in Psychology, 17.
