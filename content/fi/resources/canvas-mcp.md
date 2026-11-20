---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Avoimen lähdekoodin MCP-palvelin, jonka avulla Claude, Cursor, Codex ja muut agentit voivat lukea ja toimia Canvas LMS:ssä – opiskelija-, opettaja- ja opetussuunnittelutyökaluja, joissa kirjoitustoiminnot on rajattu ja opiskelijadatan anonymisointi on valinnainen."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [agentic-ai, institutional-ai-infrastructure]
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**Canvas MCP** on Vishal Sachdevin avoimen lähdekoodin Model Context Protocol -palvelin, joka yhdistää tekoälyasiakkaan Canvas LMS -instanssiin: agentti voi listata opiskelijan tulevat työt, lukea kurssin tehtävät ja palautukset, viestiä luokalle tai auditoida kurssin saavutettavuuden suhteen – kaikki palvelimen tarjoamien työkalujen kautta eikä tilannekohtaisen näytön kaapimisen kautta.

## Mitä sillä voi tehdä

Palvelin toimittaa kolme työkaluperhettä. Opiskelijatyökalut vastaavat kysymyksiin ”mitä on palautettava tällä viikolla”, ”olenko palauttanut kaiken”, ”montako visailuyritystä minulla on jäljellä” Canvasin omia `self`-päätepisteitä vasten. Opettajatyökalut listaavat ja luovat tehtäviä, lukevat palautuksia, arvostelevat massana, lähettävät keskusteluja ja hakevat tehtäväanalytiikkaa. Opetussuunnittelijan työkalut kattavat kurssin laadun tarkistukset ja WCAG-saavutettavuusskannaukset. Työkaluja on yhteensä jopa 128, vaikka oletusprofiili rekisteröi niitä vähemmän ja ominaisuuksiin sidotut työkalut nostavat määrää. Työkalujen lisäksi kahdeksan agenttitaitoa paketoi monivaiheisia reseptejä – viikkosuunnitelma, aamun kurssin terveystarkistus, massaisarvostelun päätöspuu, vertaisarviointiputki, lukukautta edeltävä kurssiauditointi – asennettavissa yli 40 agenttiin `skills.sh`:n kautta.

## Kenelle se on tarkoitettu

Opettajille, jotka haluavat agentin hoitavan kurssin ympärillä tavanomaisen lukemisen ja viestinnän, sekä [[institutional-ai-infrastructure|instituution tiimeille]], jotka arvioivat, mitä LMS:ään yhdistetty agentti voi todella tavoittaa. Opetussuunnittelijat saavat tässä lähimmän vastineen automaattiselle kurssiarvioinnille. Projekti on työstetty esimerkki [[agentic-ai|agenttisesta työkaluistuksesta]] yhden oppilaitoksen LMS:n tasolla eikä yleisestä chatbotista.

## Huomioita ja varauksia

Asennus on paikallinen: Python 3.11 tai uudempi, Canvas API -token ja URL sekä MCP-asiakas, ja Claude Desktopille on kaksoisklikattava laajennus. Julkinen isännöity palvelin on poistettu käytöstä, joten jaettu käyttöönotto tarkoittaa itse isännöintiä oppilaitoksen oman todennuksen takana. Kirjoitustyökalut on rajattu – HTTP-palvelimet ovat vain luettavia, ellei kirjoitustyökaluja erikseen sallita, poistot vaativat vahvistustokenit ja koodin suoritus tapahtuu hiekkalaatikossa, joka sulkeutuu turvallisesti. Tietosuoja-asetukset ovat valinnaisia: vastausten anonymisointi, sähköpostien peittäminen ja PII-suodatus on otettava käyttöön, ja README on huolellinen siitä, että ne voivat tukea FERPA-velvoitteita vahvistamatta vaatimustenmukaisuutta, joka riippuu käyttöönotosta ja tekoälyn tarjoajasta. Palvelimessa ei ole telemetriaa, mutta Canvas ja valittu asiakas pitävät omat lokinsa. Projekti on MIT-lisensoitu, aktiivisesti kehitetty, ja sen omat oppaat ovat auktoriteetti nykyisistä työkalujen nimistä ja konfiguraatiosta.
