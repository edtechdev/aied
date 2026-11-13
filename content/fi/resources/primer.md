---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Whartonin Generative AI Labs -yksikön avoimen lähdekoodin kirjoitusjärjestelmä, joka muuttaa kouluttajan kanssa käydyn jäsennellyn haastattelun ajettavaksi, mukautuvaksi oppimissimulaatioksi, jolla on omat mentori-, harjoitus- ja palauteagenttinsa."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Primer on [[open-source|avointa lähdekoodia]] oleva järjestelmä, jolla rakennetaan opetuksellinen [[simulation|simulaatio]] kuvailemalla oppitunti tekoälylle sen sijaan, että sen ohjelmoisi. Kouluttajan harkinta määrää, mitä simulaatio opettaa: haastattelu tuo esiin sen, mitä opettaja tietää oppitunnista ja opiskelijoista, suunnitteluasiakirja tekee tästä tiedosta tarkistettavaa, eikä mitään rakenneta ennen kuin kouluttaja hyväksyy sen.

## Mitä sillä voi tehdä

Haastattelu etenee yksi kysymys kerrallaan: oppitunti, opiskelijoiden taso ja aiempi osaaminen, yleiset väärinkäsitykset, opettajan lähestymistapa ja se, miten onnistumista arvioidaan. Kouluttajat voivat puhua tai kirjoittaa ja ladata opetussuunnitelmia, tuntisuunnitelmia tai arviointikriteerejä. Tuloksena on suunnitteluasiakirja, joka kattaa tavoitteet, skenaarion kulun, hahmot, panokset ja mukautumislogiikan, ja jonka kouluttaja muokkaa ja hyväksyy kuten tuntisuunnitelman. Sen jälkeen viisi agenttia rakentaa sen: Intake, Design, Casting Director, Image Generation ja Experience Builder, joka kokoaa tuloksen yhdelle opiskelijalle tai koko luokalle.

Ajonaikana kolme agenttia kohtaa opiskelijan. Mentori aktivoi aiempaa osaamista ja nostaa esiin väärinkäsityksiä. Harjoitusagentti näyttelee roolipelivastapuolta tai teachback-oppilasta, jossa opiskelija selittää käsitettä ja muokkaa selitystään, kun sitä kyseenalaistetaan. Palauteagentti työskentelee litteraatin pohjalta ja käsittelee yksittäisiä hetkiä sekä sitä, miten oppi kantaa skenaarion ulkopuolelle. Jokaisella agentilla on maailmansisäinen hahmo ja opetuksellinen kerros, joka seuraa tavoitteita ja kerää näyttöä, ja kouluttaja saa yksilö- ja koosteraportit.

## Kenelle se on tarkoitettu

Opettajat, opetussuunnittelijat ja henkilöstön kehittäjät voivat kuvata oppitunnin yksityiskohtaisesti kirjoittamatta sille koodia. Tutkijat, jotka tutkivat kouluttaja silmukassa -suunnittelua tai [[agentic-ai|moniagenttityönkulkuja]], saavat tarkasteltavan toimivan järjestelmän, ja kehittäjät voivat laajentaa sitä, koska kehotteet, mallipohjat, tarkistuslistat, orkestrointikuviot ja TypeScript-koodi ovat kaikki avointa lähdekoodia.

## Huomioita ja varauksia

Tekijät kutsuvat Primeria kokeelliseksi prototyypiksi eivätkä valvotuksi luokkahuonetuotteeksi. Sitä ei ole arvioitu oppimisinterventiona luokkahuoneissa, eikä kukaan ole tarkistanut sitä FERPA:n, COPPA:n, osavaltioiden opiskelijoiden yksityisyyslakien tai piirikunnan käytäntöjen varalta, joten oppilaitos, joka käyttää sitä opiskelijoiden kanssa, vastaa itse tästä tarkistuksesta. Ohjelmisto on MIT-lisensoitu ja ilmainen, mutta simulaation ajaminen vaatii mallipääsyn, joka maksaa. Koska se on malliriippumaton ja toimii paikallisilla tai avoimilla malleilla, se voidaan ottaa käyttöön siellä, missä yksityisyyssäännöt ovat tiukempia. Projektisivulta on linkki arkkitehtuuria ja kehotteita käsittelevään raporttiin. Repositoriossa oli 98 tähteä ja 16 forkia marraskuussa 2026 tarkistettaessa.

## Liittyvät käsitteet

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
