---
title: "AI for eGovernance: Leveraging Language Technologies For Digital Inclusion"
published: "2026-11-06"
created: "2026-11-06T09:05:00-05:00"
updated: "2026-11-06T09:05:00-05:00"
type: article
sources: ['raw/papers/amol-ai-egovernance-digital-inclusion-2026.md']
source_url: "https://arxiv.org/abs/2611.04820"
confidence: high
page_kind: [evaluation]
research_method: [interviews]
level: [adult learning]
audience: [policymakers, administrators]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4-flash-0731
    role: drafting
    date: "2026-11-06"
    agent: hermes-agent
source_depth: full text
technology: [speech-and-voice-technologies, llm]
ethics: [accessibility, digital-divide, global-south, equity-in-ai-education, multilingual-learning]
foundations: [ai-literacy]
---

> **Synthesis:**
> Kenya's national eGovernment platform eCitizen hosts over 22,000 essential government services, yet its primarily English, text-only design excludes the very citizens those services exist to serve. The authors locate this exclusion in the [[digital-divide]]: limited Swahili support and absent audio alternatives shut out low-literacy and visually impaired users, a pattern familiar across the [[global-south]]. Drawing on six one-on-one interviews and an eleven-person roundtable across four platforms vital to youth livelihoods, the paper proposes embedding [[speech-and-voice-technologies]], neural machine translation, and text simplification into eCitizen, read against Web Content Accessibility Guidelines (WCAG) 2.1 principles. The interventions target [[accessibility]] and [[multilingual-learning]] but depend on human oversight, ethical [[governance]], and [[ai-literacy]]. AI is no silver bullet: language technologies widen access, yet structural barriers such as unemployment and educational inequality demand policy action of their own, consistent with [[equity-in-ai-education]].

## Key Findings

1. **eCitizen is central but exclusionary.** The platform hosts over 22,000 essential government services, yet its primarily English interface with limited Swahili and no audio support excludes low-literacy and visually impaired users.
2. **Youth are the intended majority.** Youth make up over 80% of Kenya's population, but design assumes universal smartphone ownership; penetration stands at 80.8%, with no low-bandwidth or USSD alternative.
3. **Seventeen participants, four platforms.** Six one-on-one interviews and an eleven-person roundtable covered Ajira Digital (3 users), iTax (10), HELB (12), and YEDF (1), plus 2 user support staff.
4. **Intermediaries fill the gap.** On iTax, over half of all traffic still comes from cyber cafés, where reliance on attendants risks costly errors such as wrongly filed NIL returns.
5. **WCAG 2.1 organizes the diagnosis.** The four POUR principles frame the accessibility analysis, alongside comparator models such as Estonia's Bürokratt and India's Bhashini.
6. **Language gap is structural.** Kenya's linguistic diversity spans over sixty native and eight non-native languages, so English-centric content reaches only part of the population.

## The inclusion problem: who digital public services exclude

Kenya's [[governance|eGovernance]] ambitions rest on the Kenya Digital Master Plan 2022–2032, under which eCitizen now hosts over 22,000 services covering business registration, tax filing, loans, and digital education. Language exclusion in eGovernment is a recurring pattern across postcolonial Africa: in South Africa, indigenous-language users face mistranslated policy terms and rely on literate relatives or intermediaries to complete online processes. In Kenya, English is often learned as a third language after a native ethnic language and Swahili, the cross-cultural lingua franca among youth in urban and rural settings alike. Because main content stays in English, citizens with limited English mastery — rural youth, low-literacy users, and persons with disabilities — face barriers spanning language, literacy, and interface design.

## Barriers across the four livelihood platforms

The interviews and roundtable covered four platforms essential to youth livelihoods: Ajira Digital, KRA iTax, HELB, and the Youth Enterprise Development Fund (YEDF). Three recurring barriers emerged. Language and literacy: bureaucratic English prompts have no standard Swahili equivalents, and Ajira Digital's course text is long and dense, with no text-to-speech support — one trainer recalled completing forms on behalf of a visually impaired student. Process complexity: long mobile forms pushed a first-time HELB applicant to a cyber café, and support officers linked third-party dependence to data entry errors, privacy risks, and wrongly filed returns. Structural assumptions: platforms are designed as though every user owns a smartphone, prompting calls for zero-rated USSD access, a conversational "govbot" modeled on the existing KRA WhatsApp chatbot, and plain-language tooltips for bureaucratic terms.

## Language technologies as an inclusion lever

Against this diagnosis, the authors propose four AI-powered features mapped to WCAG 2.1's POUR principles: text-to-speech for Perceivable, speech-to-text for Operable, translation and summarization for Understandable, and an agentic AI architecture for Robust. The framework embeds [[llm|large language models]] within eCitizen under continuous [[human-in-the-loop-ai|human-in-the-loop]] oversight, because GenAI in low-resource language environments is prone to bias from unrepresentative training data and can hallucinate — an unacceptable risk for tax filing or business registration. Comparator models show the direction of travel: Estonia's Bürokratt connects government databases through an AI virtual assistant, while India's Bhashini builds translation infrastructure across languages; Kenya's resources, such as the Kencorpus corpora for Swahili, Dholuo, and Luhya, remain early stage.

## Policy implications for equitable AI in public services

Both the African Union Continental AI Strategy and the Kenya National AI Strategy (2025–2030) tie AI success in service delivery to trust-based, ethical governance and to closing the existing [[digital-divide]]; developing localized models and Natural Language Processing for Kenyan languages is a named strategic action. The paper's five recommendations translate this into practice: fund foundational language data, mandate "Plain Language First" text simplification with target readability scores, establish an ethical AI governance mechanism that includes disability and low-literacy representatives, adopt an [[agentic-ai|agentic AI]] architecture with prioritized zero-rated USSD access, and upskill user support agents. AI, the authors caution, does not solve youth unemployment on its own — it only makes services easier to access.

## What this means for practice

- **Instructors.** Build [[ai-literacy]] and digital literacy into programs for youth, since better platforms only help citizens who can use them independently.
- **Policymakers.** Mandate "Plain Language First" for new digital public content against standards such as PLAIN or E2R, and create a multi-stakeholder ethics committee before scaling translation.
- **Administrators.** Fund foundational language data through public-private partnerships and academic institutions, and train support agents alongside any redesign.
- **Developers.** Prioritize zero-rated USSD access beside any agentic architecture, and keep human-in-the-loop review during piloting and operation.

## Limitations

- The findings rest on seventeen participants recruited by convenience sampling, who are not a representative sample of eCitizen's user base.
- WCAG 2.1 principles were used as a design lens rather than a conducted audit; a structured WCAG 2.1 walkthrough remains future work.
- The proposed framework has not been implemented or tested against real eCitizen traffic; the paper stops at the diagnostic and design stage.
- Solutions depend on coordinated action by government agencies, funders, and technology providers that the paper cannot guarantee.

## Citation

Amol, C. J., & Wanzare, L. (2026). [*AI for eGovernance: Leveraging Language Technologies For Digital Inclusion*](https://arxiv.org/abs/2611.04820). arXiv preprint, arXiv:2611.04820.
