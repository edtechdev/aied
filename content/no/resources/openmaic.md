---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Åpen kildekode-utgivelsen av MAIC: et multiagentklasserom som gjør et tema eller dokument om til lysbilder, quizer, interaktive simuleringer og prosjektbaserte aktiviteter, levert av AI-lærere og AI-medstudenter."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**OpenMAIC** er åpen kildekode-utgivelsen av MAIC-multiagentklasserommet som beskrives i [[intelligent-tutoring|MAIC-studien]]: beskriv et tema eller legg ved egne materialer, og den genererer en hel leksjon – lysbilder, quizer, interaktive HTML-simuleringer og prosjektbaserte aktiviteter – og leverer den gjennom AI-lærere og AI-medstudenter som snakker, tegner på et whiteboard og deltar i diskusjon. Det er koden bak et klasserom som kan kjøres, ikke bare leses om.

## Hva du kan gjøre med det

Ettklikks-generering gir en leksjon på minutter fra en ledetekst eller et opplastet dokument, lyd eller video. Multiagentlaget tilfører klasseromsdiskusjon som den lærende kan delta i eller kalles inn i, rundbordssamtaler mellom personaer med whiteboardillustrasjoner, og fri spørsmål og svar der læreren svarer med lysbilder eller diagrammer. Øktene støtter lysbildefremvisninger, quizer, interaktive simuleringer og PBL, og eksporteres som redigerbar `.pptx` eller interaktiv `.html`. Versjon 1.0.0 (august 2026) la til en agentbenk: et samtaleførst arbeidsområde som planlegger og reviderer hele kurs, varige serverstøttede økter du kan avbryte, gjenoppta eller styre, og 24 innebygde ferdigheter som dekker lysbilder, quizer, interaktivt innhold, bilder, video og stemmer. En `SKILL.md`-pakke lar en agentrigg bygge klasserom fra en meldingsapp.

## Hvem det er for

Undervisere og kursteam som vil ha genererte materialer de fortsatt kan redigere, undervisningsdesignere som lager prototyper på multiagentaktiviteter, og utviklere som trenger et selvhostbart klasserom snarere enn et hostet produkt. Skoler kan distribuere det på Vercel eller med Docker, og prosjektet har en hostet demo på open.maic.chat.

## Merknader

Lisensiert under MIT, med en engelsk og en kinesisk brukerveiledning og et aktivt fellesskap på Discord og Feishu. Det er modellnøytralt: du leverer minst én nøkkel til en LLM-leverandør, og valgfrie lokale komponenter (Lemonade for lokale modeller, FunASR for talegjenkjenning) lar deg kjøre mer av stacken offline – så «gratis» beskriver programvaren, ikke inferensregningen. Artikkelen bak ble publisert i *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), og repoet hadde mer enn 38 000 stjerner i september 2026.

## Tilknyttede begreper

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
