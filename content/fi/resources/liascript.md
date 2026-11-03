---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "Avoin Markdown-murre, joka muuttaa pelkän tekstitiedoston interaktiiviseksi kurssiksi selaimeen visailuineen ja ajettavine koodeineen, sekä moniagenttiavustaja kurssien rakentamiseen sillä."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**LiaScript** on laajennettu Markdown-murre ja sen tulkki. Yhdestä pelkästä tekstitiedostosta tulee interaktiivinen kurssi: sama asiakirja voidaan lukea kertomuksena, pelata dioina tai käydä läpi kurssina, kaikki selaimessa. Kirjoittaminen tai lukeminen ei vaadi asennuksia.

## Mitä sillä voi tehdä

Visailut tulevat muodoissa, joita opettaja odottaa, mukaan lukien monivalinta, matriisikysymykset, tekstinsyöttö, pudotusvalikot ja aukkotekstit, kirjoitettuna suoraan Markdowniin. Koodilohkoista voi tehdä muokattavia ja ajettavia [[cs-education|ohjelmoinnin]] opetusohjelmia varten, ja makrojärjestelmä käärii JavaScript-kirjastot uudelleenkäytettäviksi lohkoiksi, joten interaktiiviset kaaviot eivät vaadi koodia jokaiselta tekijältä. Kurssi isännöidään siellä, missä tekijä jo pitää tekstiä, ilman palvelua, johon lukittuisi, ja kaikki toimii selainpuolella, joten ladattu kurssi toimii offline-tilassa. LiaScript Exporter paketoi kurssin SCORM-muotoon Moodlea, ILIASia ja muita [[edtech-platform|oppimisen hallintajärjestelmiä]] varten.

## Opetusagentti kurssien rakentamiseen

Projekti julkaisee myös **[opetusagentin](https://github.com/LiaScript/teaching-agent)** LiaScript-kurssien kirjoittamiseen, lisensoitu Boost Software License 1.0 -lisenssillä. Neljä agenttia – opetus, visuaalinen suunnittelu, oppijakatselmointi ja julkaisu – työskentelevät yhden kurssin tilan sisältävän projektitiedoston ympärillä määrittele-ensin-työnkululla: tavoitteet, kohdeyleisö ja didaktiikka sovitaan ennen kuin mitään materiaalia kirjoitetaan, ja validointiportit seuraavat perässä. Luonnoksen voi katselmoida nimetyn oppijapersoonan näkökulmasta [[cognitive-offloading|kognitiivisen kuormituksen]] ja oletetun ennakkotiedon tarkistamiseksi. Agentti on editoririippumaton ja tuottaa kokoonpanot Claude Codelle, Copilotille, Codexille, Cursorille tai verkkokeskustelulle yhdestä spesifikaatiosta, ja repositorio toimii samalla valmiina esimerkkinä: se sisältää kuuden yksikön kurssin EU:n NIS2-direktiivistä ja asiakirjan, joka kuvaa, miten se tuotettiin.

## Huomioita ja varauksia

LiaScript on ilmainen, ilman maksullista tasoa ja ilman tiliä, ja sitä kehitetään avoimesti BSD-3-Clause-lisenssillä, joten instituutiot voivat isännöidä ja muokata sitä itse. Live Classroom -ominaisuus kannattaa katsoa ennen kuin siihen luottaa suuressa mittakaavassa, koska reaaliaikainen synkronointi käyttää jaettua palvelua eikä puhtaasti paikallista renderöintiä. Opetusagentti on nuori ja vähän käytetty, joten kohtele sitä toimivana prototyyppinä eikä tuettuna tuotteena.

## Liittyvät käsitteet

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
