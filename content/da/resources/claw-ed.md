---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "En lokal-først AI-undervisningsassistent, der gør dit eget pensum til redigerbare lektionsudkast, elevmaterialer og slides ved hjælp af en model, du selv vælger."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

**Claw-ED** er en lokal-først undervisningsassistent, der skriver lektionsudkast ud fra dine egne pensummaterialer. En lærer importerer sine kilder, beder om en lektion og får redigerbare udkast sammen med elevvendte materialer og slides, genereret med den model læreren selv vælger frem for én fast leverandør.

## Hvad du kan gøre med det

Arbejdsgangen går fra import gennem udkast og gennemlæsning til eksport, og udkast behandles som udgangspunkter, en lærer redigerer, ikke færdige kopiark. Lektionsjob lægges i kø og kan genoptages, så en lang generering, der fejler, kan fortsættes i stedet for at starte forfra, og genererede artefakter kan downloades. Det stiller også sine værktøjer til rådighed for en [[agentic-ai|agent]] via en MCP-server og kan forbinde til Google Drive, så en skole kan koble det til eksisterende lagring og planlægning.

Projektet er med vilje modelagnostisk. Det dokumenterer lokale Ollama-modeller, billige OpenRouter-ruter og hostede muligheder side om side, og dets modelguide er dateret, hvilket gør det klart, at anbefalingerne er katalogbaserede udgangspunkter snarere end lærervurderede kvalitetsdomme.

## Noter og forbehold

Softwaren er gratis og [[open-source|open source]] under MIT-licensen for sin oprindelige kode, selv om tredjepartskomponenter beholder deres egne vilkår, og at køre den betyder, at du betaler for din egen modelinferens, hvis du bruger en hostet model. Projektet betegner sig selv som en lærergennemgået beta og siger rent ud i sin README, at bestået CI ikke dokumenterer undervisningskvalitet på tværs af levende modeller, hvilket er den rigtige måde at læse en grøn testsuite på i dette felt: den verificerer softwaren, ikke [[pedagogy]]. Det vedligeholdes af MacxLabs og tager imod lærergennemgåede eksempellektioner som bidrag.

## Relaterede begreper
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
