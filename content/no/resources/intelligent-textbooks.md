---
title: "Å bygge intelligente lærebøker"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Dan McCrearys åpne veiledning til å bygge intelligente lærebøker: nettbaserte lærebøker med søk, ordlister, quizer, begrepsgrafer og innebygde simuleringer, laget med MkDocs Material og generativ AI, pluss AI-genererte MicroSims."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Nettstedet **Intelligent Textbooks** er Dan McCrearys trinnvise veiledning til å bygge *intelligente lærebøker* – nettbaserte lærebøker som går utover statiske PDF-er ved å legge til søk, sidenavigasjon, en ordliste, en innholdsfortegnelse, quizadministrasjon, renderte formler, forhåndsvisninger for sosiale medier, lenkesjekking og en lett visualiserbar **begrepsgraf** som viser alle begrepene i et emne og avhengighetene mellom dem. Veiledningen argumenterer for at mange emner i dag kan tjene på nettbaserte lærebøker av høy kvalitet med disse egenskapene, og den viser hvordan de bygges med byggesystemet [MkDocs](http://mkdocs.com/) sammen med Material-temaet og generativ AI for å lage og vedlikeholde innholdet.

Det avgjørende grepet er at læreboken *forfattes i Markdown og genereres av AI* – en konkret forekomst av [[vibe-coding|AI-assistert forfatterskap]] anvendt på [[curriculum-design|kursinnhold]]: i stedet for å vedlikeholde et stort nettsted for hånd, beskriver du emnet og lar generativ AI produsere og vedlikeholde sidene, mens verktøykjeden håndterer navigasjon, søk og begrepsgrafen. Et tilhørende bibliotek med [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) hevder å automatisere over 90 % av oppgavene som trengs for å bygge en lærebok på nivå 2 ut fra en emnebeskrivelse.

## En følgeressurs: MicroSims

Den naturlige følgesvennen til denne veiledningen er McCrearys **MicroSims**-bibliotek på <https://dmccreary.github.io/microsims/> (kildekode: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), som leverer de interaktive simuleringene en intelligent lærebok bygger inn. En *MicroSim* (mikrosimulering) er en enkel interaktiv simulering generert med AI for å hjelpe lærere å forklare et begrep, og den kan bygges inn i en intelligent lærebok eller et hvilket som helst nettsted som godtar en `iframe`. MicroSims er særegne av tre grunner: **AI-assistert generering** (standardiserte designmønstre gjør en naturligspråklig beskrivelse av en simulering om til et delbart aktivum), **universell innbygging** (ett enkelt HTML-`iframe`-element plasserer den på en hvilken som helst side) og **åpen, redigerbar kode** (ingen svart boks – ett klikk åpner sim-en i en nettredigerer, og en Creative Commons-lisens lar de fleste lærere bruke dem uten lisensavgifter). Begrepet ble laget av Valerie Lockhart i 2023, etter at hun oppdaget at lærere og studenter kunne bygge simuleringer med JavaScript-biblioteket p5.js med liten eller ingen opplæring.

Prosjektet publiserer også et JSON Schema for MicroSim-metadata, slik at AI-verktøy kan generere søkbare beskrivelser, med et fasettert MicroSim-register på veikartet. En forskningsartikkel som beskriver rammeverket – *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* – ligger på arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). Eksempelsimuleringer omfatter Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Eulers formel og et diagram over aksjeavkastning, alle kjørende live på nettstedet.

## Hvem den er for

Undervisere og undervisningsdesignere som vil bygge eller vedlikeholde en lærebok for et emne, særlig i høyere utdanning og profesjonell opplæring, samt utviklere av undervisning og alle som bruker generativ AI til å forfatte pedagogisk innhold. Den passer for undervisere som er komfortable med en Markdown-og-Git-arbeidsflyt (eller villige til å lære den) og som vil at AI-en skal ta seg av det tekniske rundt nettstedet – søk, navigasjon, begrepsgraf – så de kan konsentrere seg om pedagogikken.

## Merknader og forbehold

Dette er en praktikers veiledning og verktøykjede, ikke en fagfellevurdert studie – den presenterer en arbeidsflyt og sin egen pedagogiske begrunnelse («intelligente lærebøker leder studenter gjennom begreper på deres jakt etter kunnskap») snarere enn evidens for læringsutbytte. MicroSim-forskningsartikkelen er det nærmeste man kommer empirisk støtte, og den er selvutgitt på arXiv. Begge prosjektene er åpen kildekode (repoet intelligent-textbooks oppgir MIT-lisens og 38 stjerner; MicroSims oppgir en Creative Commons-lisens og 13 stjerner) og aktivt vedlikeholdt. Begrepsgrafer og ordlisteførst-struktur er genuint nyttige for gjenfinnbarhet, men veiledningen forutsetter en ganske teknisk forfatterarbeidsflyt – MkDocs, Git og verktøy for generativ AI – noe som kan være en terskel for enkelte fagmiljøer. Ved innlasting er registeret for MicroSims fortsatt bare på veikartet, så å finne en bestemt eksisterende simulering avhenger av nettstedets egen søking og navigasjon.

## Tilknyttede begreper

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
