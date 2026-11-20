---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "En feltguide for undervisere til å bygge et statisk undervisningsnettsted med en AI-kodeassistent: tre Markdown-instruksjonsfiler for design, sikkerhet og studentpersonvern, med lesbare guider og en nedlastbar pakke."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [vibe-coding, ai-literacy, accessibility, learning-design, design-thinking, generative-ai, privacy]
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**The Vibe-Coding Center** er Miguel Guhlins gratis feltguide for en lærer som vil [[vibe-coding|vibe-kode]] et lite statisk undervisningsnettsted med en AI-kodeassistent – en utgangsbillett, en quiz, en klasseportefølje – uten å sende med en eksponert API-nøkkel eller studentdata på kjøpet.

## Hva du kan bruke den til

Tre instruksjonsfiler bærer veiledningen: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` og `securevcc.md`. Last dem ned i roten av et prosjekt, fyll ut malen for prosjektbeskrivelsen, og be deretter assistenten lese og anvende alle tre; guiden er tydelig på at tilstedeværelse ikke er aktivering, så filene må navngis i forespørselen. Lesbare guider forklarer hver av dem, inkludert en gjennomgang av «Three Essential Checks Before You Share»: samle inn mindre studentdata, inspiser en eksponert API-nøkkel og tilpass et verktøys design til læringsoppgaven. Den komplette pakken legger til selve nettstedet, en promptpakke, en gjennomgang før lansering og gjenoppbyggingsskript, med et SHA-256-manifest for nedlastingen.

Den medfølgende [EduSynth Hub-eksempelsiden](https://mguhlin.github.io/funquiz/examples.html) viser resultatene som fungerende statiske verktøy snarere enn skjermbilder: en utgangsbillett-generator som skriver et spørsmål på et valgt SOLO Taxonomy-nivå, en studentportefølje som er en enkelt HTML-fil på GitHub Pages, og et søkbart bibliotek med ressurser for profesjonell utvikling, alt som kjører klientside uten LMS-innlogging.

## Hvem den er for

Lærere og [[learning-design|undervisningsdesignere]] i grunnskole, videregående og høyere utdanning som kan beskrive verktøyet de vil ha og er villige til å sjekke det assistenten produserte. Den passer også en avdeling som vil ha én felles sjekkliste før noen publiserer et studentrettet verktøy, og undervisere som lærer bort [[ai-literacy|AI-kompetanse]] gjennom å bygge snarere enn gjennom kritikk.

## Merknader og forbehold

Senteret er veiledning, ikke et samsvarsprodukt: nettstedet hevder ingen samsvar for sitt eget WCAG 2.2 AA-mål, svarer nei på spørsmålet «gjør disse filene nettstedet mitt samsvarende?», og sier at en ingeniørgjennomgang ikke erstatter skolens godkjenning eller juridiske vurdering. Sikkerhetshyllen peker på axe-core, Gitleaks, ZAP og Playwright; dette er referanser snarere enn medfølgende programvare, og de inngripende verktøyene er ment for et engangsoppsett eller et uttrykkelig autorisert mål. Lesing krever ingen konto. Gjenoppbygging av HTML-sidene krever Python og `markdown-it-py`, som er en byggavhengighet og ikke en besøksavhengighet. Repoet er MIT-lisensiert, mens kunstverk fra tredjeparter og de lenkede prosjektene beholder sine egne vilkår, dokumentert i `CREDITS.md`.
