---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "Avoimen lähdekoodin Agent Skill ja yksityinen selaineditori, jotka muuttavat kahdeksantoista selkeämmän kirjoittamisen sääntöä luonnostelu-, uudelleenkirjoitus- ja katselmointitiloiksi proosalle."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**Clarity** yhdistää Agent Skillin ja selaineditorin, jotka molemmat rakentuvat kahdeksantoista säännön varaan kirjoittamisesta, joka "ansaitsee lukijansa". Taito asennetaan koodausagentteihin, kuten Claude Codeen ja Codexiin, komennolla `npx skills add addyosmani/clarity`, ja toimii sitten kolmessa tilassa: katselmointitila arvostelee luonnosta ja jättää tiedoston koskemattomaksi, uudelleenkirjoitustila muokkaa luonnosta paikan päällä ja haastattelutila kysyy kirjoittajalta kysymyksiä ensin ja kirjoittaa yhdessä vastausten pohjalta. Kirjoittajan saama [[feedback|palaute]] tähtää sisältöön ennen tyyliä. Säännöt kysyvät, kenelle teksti on tarkoitettu ja mitä hän jo tietää, vaativat väitteitä aiheiden sijaan ja yksityiskohtia abstraktioiden sijaan, ja pitävät täytettä ongelmana siitä, ettei tiedetä, mitä varten teksti on, eikä sanavaraston ongelmana.

Selaineditori toimii paikallisesti sivulla eikä lataa luonnosta mihinkään. Se raportoi konekirjoitetun proosan tuntomerkit, luettavuuden ja sisällön aukot, mikä tekee siitä hyödyllisen [[generative-ai|generatiivisen tekoälyn]] tuottaman tekstin tarkistamiseen ennen kuin se päätyy lukijalle. Projekti sanoo selvästi, että tavoitteena on kirjoittaminen, joka pysyy tunnistettavasti tekijänsä omana, eikä proosa, joka on viritetty läpäisemään [[ai-detection|tekoälyntunnistus]] – ero, jonka opettajat tunnistavat asettaessaan toimintaperiaatetta tekoälyavusteiselle [[writing-education|kirjoittamisen opetukselle]].

## Mitä on tiedettävä ennen käyttöönottoa

Repositorio julkaisee arviointiprotokollan, ennen ja jälkeen -näytteet hakemistossa `samples/` sekä taidon taustalla olevat viitetiedostot, joten arvioija voi tarkastella, miten säännöt käyttäytyvät, sen sijaan että luottaisi väitteeseen; tämä sivu ei toista mitään mitattua tulosta. Tekijä on Addy Osmani, lisenssi on MIT ja työ on riippumaton eikä minkään instituution tuote. Se on nuori ja aktiivinen: luotu elokuussa 2026, 54 committia, kolme julkaisua, joista uusin versio 0.2.1 samana syyskuuna, ja noin 250 tähteä syyskuussa 2026 tarkistettaessa. Kolme avustajaa on saanut muutoksia läpi. Taidon ohjeet latautuvat agenttiin, jota lukija jo ajaa, joten tavanomaiset [[prompt-engineering|kehotesuunnittelun]] varaukset pätevät: kritiikin laatu riippuu siitä luonnoksesta, joka sille annetaan.

## Liittyvät käsitteet
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
