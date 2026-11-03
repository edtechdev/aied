---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Open source-udgivelsen af MAIC: et multiagent-klasseværelse, der gør et emne eller dokument til slides, quizzes, interaktive simulationer og projektbaserede aktiviteter, leveret af AI-lærere og AI-klassekammerater."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**OpenMAIC** er open source-udgivelsen af det multiagent-klasseværelse MAIC, der beskrives i [[intelligent-tutoring|MAIC-studiet]]: beskriv et emne eller vedhæft dine egne materialer, og det genererer en fuld lektion — slides, quizzes, interaktive HTML-simulationer og projektbaserede aktiviteter — og leverer den derefter gennem AI-lærere og AI-klassekammerater, der taler, tegner på et whiteboard og deltager i diskussion. Det er koden bag et klasseværelse, der kan køres, snarere end kun læses om.

## Hvad du kan gøre med det

Generering med ét klik producerer en lektion på få minutter ud fra en prompt eller et uploadet dokument, lyd eller video. Multiagentlaget tilføjer klasseundervisningsdiskussion, som eleven kan deltage i eller blive kaldt ind i, rundbordsdebatter mellem personaer med whiteboard-illustrationer og fri Q&A, hvor læreren svarer med slides eller diagrammer. Sessioner understøtter slide decks, quizzes, interaktive simulationer og PBL og eksporteres som redigerbare `.pptx` eller interaktive `.html`. Version 1.0.0 (august 2026) tilføjede en agentworkbench: et chat-først-arbejdsrum, der planlægger og reviderer hele kurser, vedvarende serverbaserede sessioner, du kan annullere, genoptage eller styre, og 24 indbyggede færdigheder, der dækker slides, quizzes, interaktive elementer, billeder, video og stemmer. En `SKILL.md`-pakke lader en agentharness bygge klasseværelser fra en beskedapp.

## Hvem det er til

Undervisere og kursteams, der vil have genererede materialer, de stadig kan redigere, undervisningsdesignere, der prototyper multiagentaktiviteter, og udviklere, der har brug for et selvhostbart klasseværelse snarere end et hostet produkt. Skoler kan udrulle det på Vercel eller med Docker, og projektet leverer en hostet demo på open.maic.chat.

## Noter

Licenseret under MIT, med en engelsk og kinesisk brugerguide og et aktivt fællesskab på Discord og Feishu. Det er modelneutralt: du leverer mindst én nøgle til en LLM-udbyder, og valgfrie lokale komponenter (Lemonade til lokale modeller, FunASR til talegenkendelse) lader dig køre mere af stakken offline — så »gratis« beskriver softwaren, ikke inferensregningen. Artiklen bag det udkom i *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), og repositoriet havde mere end 38.000 stjerner i september 2026.

## Relaterede begreper

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
