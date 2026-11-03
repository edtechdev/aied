---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "Ilmainen avoimen lähdekoodin (AGPL-3.0) työpöytäsovellus: tekoälyagentit mittaavat, mitä oppija ymmärtää, laativat riippuvuuskartan tavoitteeseen, opettavat yhden päättelyaskeleen kerrallaan ja mukauttavat harjoittelua, ja pysyvä tietograafi säilyttää väittämät ja päättelyketjut myöhempiä istuntoja varten."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**LearnHarness** on työpöytäsovellus [[agentic-ai|agenttiavusteiseen]] oppimiseen, joka järjestää oppitunnin [[prior-knowledge|sen ympärille, mitä oppija jo ymmärtää]], eikä aiheluettelon ympärille. Projekti kuvaa neljä liikettä: **mittaa**, tunnustelee ideoita, joista tavoite riippuu, löytääkseen, mihin ymmärrys päättyy; **suunnittele**, johtaa riippuvuuskartan tavoitteeseen ja näyttää sen oppituntikarttana; **opeta**, etenee yksi päättelyaskel kerrallaan ennusta–selitä–tarkista-rytmillä, jotta sekaannukset korjataan ennen kuin niiden päälle rakennetaan mitään; ja **harjoittele**, virta ongelmia, jotka kohdistuvat oppijan omiin vaikeuksiin.

## Mitä sillä voi tehdä

Erityinen syöte on ajattelukenttä: oppijat kirjoittavat tai sanelevat päättelynsä ja epävarmuutensa sen sijaan, että vain vastaisivat, mitä projekti pitää tapana, jolla agentti hahmottaa päättelyä oikein/väärin-tietueen sijaan. Se voi myös tutkia kysymyksiä taustalla, tuottaa visuaalisia selityksiä ja rakentaa interaktiivisia esityksiä.

Kasautuva asia on [[knowledge-graph|tietograafi]] väittämistä ja päättelyketjuista, jotka on linkitetty takaisin lähdeistuntoihinsa ja joita myöhemmät opetus- ja harjoitusagentit lukevat kontekstina; muistiinpanoja voi tuoda. Projekti sanoo, että graafi tallentaa ideoita ja yhteyksiä, ei arvioita kyvykkyydestä.

## Kenelle se on tarkoitettu

Itsenäisille oppijoille, jotka työskentelevät vaikean materiaalin kanssa, ja opettajille tai kehittäjille, jotka haluavat nähdä, miltä agenttinatiivinen [[intelligent-tutoring|tekoälytutori]] näyttää, kun sen kehotteet ja tila ovat tarkasteltavissa. Se on TypeScriptiä, ajetaan lähteestä, ja sen testit on dokumentoitu deterministisiksi ilman mallikutsuja.

## Huomioita ja varauksia

Ilmainen kattaa ohjelmiston, ei päättelyä: oppijat tuovat tarjoajan avaimet, tilauksen, paikallisen Claude Code CLI:n tai minkä tahansa OpenAI-yhteensopivan päätepisteen ja maksavat tarjoajalle ilman katetta; live-mittari arvioi vain tunnetut API-kustannukset. Tietueet, chatit ja avaimet pysyvät koneella tavallisina tiedostoina, mutta projekti varoittaa, ettei paikallinen tallennus tarkoita offline-käsittelyä, koska mallipyynnöt, valinnainen sanelu ja verkkotutkimus tavoittavat kaikki ulkoisia palveluita. Windowsin x64-asennusohjelma on allekirjoittamaton, joten Windows varoittaa. Vaikuttavuustutkimusta ei raportoida, joten perustelu nojaa esitettyyn järkeilyyn eikä mitattuihin tuloksiin; repositoriossa oli noin 4 800 tähteä 2. marraskuuta 2026 tarkistettaessa.

## Liittyvät käsitteet

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
