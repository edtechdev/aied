---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Avoin tekoälyinfrastruktuuri koulutustuotteille: tietograafi standardeista ja opetussuunnitelmista, arvioijat LLM-tuotoksen pisteyttämiseen, malliriippumattomat agenttitaidot opettajan työnkulkuihin sekä Curriculum Sync opetussuunnitelmien lataamiseen oppimisen hallintajärjestelmään."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**Learning Commons** julkaisee kolme avointa työkalua, joilla tekoälyominaisuuksia voi rakentaa todellisen opetussuunnitelmasisällön päälle – **[[knowledge-graph|tietograafi]]** akateemisista standardeista, opetussuunnitelmista ja oppimistieteen tutkimuksesta, **Evaluators**-kirjaston tuotetun tekstin arviointiin ja malliriippumattomat **[[agentic-ai|Agent Skills]]** -taidot yleisiin opettajan työnkulkuihin – sekä ylläpitää alustaa, joka lisää Curriculum Syncin opetussuunnitelmien lataamiseksi [[edtech-platform|oppimisen hallintajärjestelmään]].

## Mitä sillä voi tehdä

**Kohdista tuotettu sisältö standardiin.** Tietograafi mallintaa standardit, [[curriculum-design|opetussuunnitelmat]] ja tutkimuksen entiteetteinä ja suhteina yhden yhteisen skeeman alla. Tuote voi hakea standardin, johon kohteen pitäisi osua, kulkea esitietosuhteiden läpi tai perustaa tutorin sisällön opetussuunnitelmaan, jota sen on tarkoitus opettaa, rakentamatta ja ylläpitämättä omaa dataputkeaan.

**Pisteytä tuotettu tuotos ennen kuin opiskelijat näkevät sen.** **Evaluators** mittaa [[llm|LLM-tuotoksen]] ominaisuuksia – tekstin monimutkaisuus, [[feedback|palaute]], standardien mukaisuus ja kestävät taidot – ja toimitetaan Python- ja TypeScript-SDK:ina npm:ssä ja PyPI:ssä. Käytännössä ne toimivat regressiotarkistuksena, kun kehote tai malli muuttuu, vertailuna ehdokasmallien välillä tai suodattimena tuotetuissa kohteissa ja selityksissä.

**Paketoi opettajan työnkulku.** **Agent Skills** kokoaa ohjeet, viitteet ja suojakaiteet avoimeen, malliriippumattomaan muotoon: ymmärryksen tarkistus, tasoitettu oppituntien eriyttäminen, standardien mukainen oppituntisuunnitelma ja oppitunnin valmistelu. Ne voi pudottaa agenttikehykseen tai lukea valmiina malleina siitä, kuinka paljon rakennetta luotettava luokkahuoneen työnkulku tarvitsee.

**Siirrä opetussuunnitelma oppimisen hallintajärjestelmään.** Curriculum Sync on alustan vaihe, joka muuttaa standardikartan sellaiseksi, että kurssi voi todella käyttää sitä LMS:ssä.

## Kenelle se on tarkoitettu

Kehittäjille, jotka rakentavat tekoälyominaisuuksia opetussuunnitelma- ja [[assessment|arviointituotteisiin]], sekä opetussuunnitelma- tai standarditiimeille, jotka tuottavat datan, johon nuo tuotteet kohdistetaan. [[teacher-role|Opettajat]] voivat käyttää Agent Skills -taitoja itsenäisesti, mutta repositorion oma kehys on infrastruktuuria työkaluja julkaiseville.

## Huomioita ja varauksia

Avoimuus [[open-source|lähdekoodissa]] ei tee datasta avointa. Knowledge Graphin ja Evaluatorsin koodi on MIT ja Agent Skills on Apache-2.0, kun taas jokaisella datalla on oma käyttöluokansa – Open, Open + Gated tai Gated – ja Gated-sisältö ei kuulu niiden avoimien lisenssien piiriin, joihin repositorio viittaa, joten tarkista dataluettelosta uudelleenkäyttöoikeudet ennen kuin oletat niitä. Evaluatorsin kehotteiden sisältö on CC BY 4.0, mutta annotoidut CLEAR- ja PERSUADE 2.0 -korpukset, joita ne käyttävät, ovat CC BY-NC-SA 4.0. Alusta ja sen taustalla olevat datat vaativat tilin.

## Liittyvät käsitteet

- [[curriculum-design]] — graafi on olemassa, jotta tuotettu sisältö voidaan kohdistaa standardeihin ja opetussuunnitelmiin
- [[open-source]] — MIT- ja Apache-2.0-koodia, datan lisensointi datakohtaisesti
- [[educational-nlp]] — arvioijat ovat tekstinmittauskerros LLM-tuotoksen päällä
- [[agentic-ai]] — taitoja, jotka paketoivat työnkulun mallin toteutettavaksi
- [[edtech-platform]] — Curriculum Sync lataa opetussuunnitelmat oppimisen hallintajärjestelmään
- [[llm]] — arvioinnin kohde ja taitojen käyttäjä
