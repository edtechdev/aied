---
title: "Älykkäiden oppikirjojen rakentaminen"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Dan McCrearyn avoimen lähdekoodin opas älykkäiden oppikirjojen rakentamiseen: oppikirjoja hakutoiminnolla, navigoinnilla, sanastoilla, visailuilla, käsitekaavioilla ja upotetuilla simulaatioilla, rakennettuna MkDocs Materialilla ja generatiivisella tekoälyllä, sekä oheinen kirjasto tekoälyn tuottamia interaktiivisia MicroSimejä."
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
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**Intelligent Textbooks** -sivusto on Dan McCrearyn vaiheittainen opas *älykkäiden oppikirjojen* rakentamiseen – verkkopohjaisten oppikirjojen, jotka menevät staattisia PDF:iä pidemmälle lisäämällä haun, sivustonavigoinnin, termisanaston, sisällysluettelon, visailujen hallinnan, renderöidyt kaavat, sosiaalisen median esikatselut, linkkien tarkistuksen ja helposti visualisoitavan **käsitekaavion**, joka näyttää kurssin kaikki käsitteet ja niiden riippuvuudet. Opas väittää, että moni nykyinen kurssi voisi hyötyä laadukkaista verkkopohjaisista oppikirjoista näillä ominaisuuksilla, ja se näyttää, miten ne rakennetaan [MkDocs](http://mkdocs.com/)-järjestelmällä yhdessä Material-teeman ja generatiivisen tekoälyn kanssa sisällön luomiseen ja ylläpitoon.

Ratkaiseva liike on se, että oppikirja *kirjoitetaan Markdownina ja tuotetaan tekoälyllä* – konkreettinen esiintymä [[vibe-coding|tekoälyavusteisen kirjoittamisen]] mallista sovellettuna [[curriculum-design|kurssisisältöön]]: suuren sivuston käsityönä ylläpitämisen sijaan kuvailet kurssin ja annat generatiivisen tekoälyn tuottaa ja ylläpitää sivut, kun työkaluketju hoitaa navigoinnin, haun ja käsitekaavion. Oheinen [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) -kirjasto väittää automatisoivansa yli 90 % tehtävistä, joita tarvitaan tason 2 oppikirjan rakentamiseen kurssikuvauksesta.

## Oheisresurssi: MicroSims

Tämän oppaan luonteva kumppani on McCrearyn **MicroSims**-kirjasto osoitteessa <https://dmccreary.github.io/microsims/> (lähde: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), joka tarjoaa interaktiiviset simulaatiot, joita älykäs oppikirja upottaa. *MicroSim* (mikrosimulaatio) on yksinkertainen, tekoälyllä tuotettu interaktiivinen simulaatio, joka auttaa opettajia selittämään käsitteen, ja sen voi upottaa älykkääseen oppikirjaan tai mihin tahansa sivustoon, joka hyväksyy `iframe`-elementin. MicroSimit erottuvat kolmesta syystä: **tekoälyavusteinen tuottaminen** (standardoidut suunnittelumallit muuttavat simulaation luonnollisen kielen kuvauksen jaettavaksi hyödykkeeksi), **yleinen upotettavuus** (yksi HTML `iframe`-elementti pudottaa sellaisen mille tahansa sivulle) ja **läpinäkyvä, muokattava koodi** (ei mustaa laatikkoa – yksi napsautus avaa simulaation verkkoseditorissa, ja Creative Commons -lisenssi sallii useimpien opettajien käyttää niitä ilman lisenssimaksuja). Termin keksi Valerie Lockhart vuonna 2023 havaittuaan, että opettajat ja opiskelijat pystyivät rakentamaan simulaatioita p5.js-JavaScript-kirjastolla hyvin vähällä tai ilman koulutusta.

Projekti julkaisee myös JSON Scheman MicroSim-metadatalle, jotta tekoälytyökalut voivat tuottaa haettavia kuvauksia, ja fasettipohjainen MicroSim-rekisteri on tiekartalla. Kehystä kuvaava tutkimusartikkeli – *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* – on arXivissa ([2511.19864](https://arxiv.org/abs/2511.19864)). Esimerkkisimulaatioihin kuuluvat Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula ja osakemarkkinatuottojen kaavio, jotka kaikki pyörivät livenä sivustolla.

## Kenelle se on tarkoitettu

Opettajille ja opetussuunnittelijoille, jotka haluavat rakentaa tai ylläpitää kurssin oppikirjaa, erityisesti korkeakoulutuksessa ja ammatillisessa koulutuksessa, sekä tiedekunnan kehittäjille ja kaikille, jotka käyttävät generatiivista tekoälyä koulutussisällön kirjoittamiseen. Se sopii kasvattajille, jotka ovat sinut Markdown- ja Git-työnkulun kanssa (tai valmiita oppimaan sen) ja jotka haluavat tekoälyn hoitavan sivuston putkityöt – haun, navigoinnin, käsitekaavion – jotta he voivat keskittyä pedagogiikkaan.

## Huomioita ja varauksia

Tämä on ammattilaisen opas ja työkaluketju, ei vertaisarvioitu tutkimus – se esittää työnkulun ja oman koulutuksellisen perustelunsa ("älykkäät oppikirjat opastavat opiskelijoita käsitteiden läpi heidän tiedonjanoisella matkallaan") eikä näyttöä oppimistuloksista. MicroSim-tutkimusartikkeli on lähimpänä empiiristä tukea, ja se on itse julkaistu arXivissa. Molemmat projektit ovat avointa lähdekoodia (intelligent-textbooks-repo ilmoittaa MIT-lisenssin ja 38 tähteä; MicroSims ilmoittaa Creative Commons -lisenssin ja 13 tähteä) ja aktiivisesti ylläpidettyjä. Käsitekaaviot ja sanastolähtöinen rakenne ovat aidosti hyödyllisiä löydettävyydelle, mutta opas olettaa melko teknisen kirjoitustyönkulun – MkDocsin, Gitin ja generatiivisen tekoälyn työkalut – mikä voi olla este joillekin tiedekunnan jäsenille. Sisäänoton hetkellä MicroSimien rekisteri on yhä vain tiekartalla, joten tietyn olemassa olevan simulaation löytäminen nojaa sivuston omaan hakuun ja navigointiin.

## Liittyvät käsitteet

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
