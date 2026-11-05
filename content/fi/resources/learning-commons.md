---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Mark Zuckerbergin ja Priscilla Chanin koulutusaloitteen avoin tekoälyinfrastruktuuri: tietograafi standardeista, opetussuunnitelmista ja oppimistieteen datasta, arvioijat LLM-tuotoksen arviointiin sekä malliriippumattomat agenttitaidot opettajan työnkulkuihin."
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
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**Learning Commons** on Mark Zuckerbergin ja Priscilla Chanin koulutusalan aloite, joka käynnistettiin vuonna 2025 viemään Chan Zuckerberg Initiativen oppimistieteen työtä infrastruktuuriin, jonka varaan edtech-tuotteet tosiasiassa rakennetaan. Sen argumentti on infrastruktuurinen eikä pedagoginen: tutkimusta on, akateemisia standardeja on ja laadukkaita opetussuunnitelmia on, mutta ne sijaitsevat eri järjestelmissä, joten kehittäjät rakentavat sen varaan, mikä on helpoimmin saatavilla. Järjestö julkaisee GitHubissa kolme avointa työkalua – Knowledge Graphin, joukon Evaluators-arvioijia ja [[agentic-ai|agenttitaidot]] – sekä ylläpitää alustaa, joka lisää Curriculum Syncin opetussuunnitelmien lataamiseksi [[edtech-platform|oppimisen hallintajärjestelmään]].

## Mitä sillä voi tehdä

**Knowledge Graph** mallintaa akateemiset standardit, opetussuunnitelmat ja oppimistieteen tutkimuksen entiteetteinä ja suhteina yhden yhteisen skeeman alla, jolloin työkalu voi kohdistaa tuotetun sisällön standardiin rakentamatta omaa dataputkeaan. **Evaluators** mittaa [[llm|LLM-tuotoksen]] ominaisuuksia oppimistieteen näkökulmasta – tekstin monimutkaisuus, [[feedback|palaute]], akateemisten standardien mukaisuus ja kestävät taidot – ja toimitetaan Python- ja TypeScript-SDK:iden kanssa, julkaistuna npm:ssä ja PyPI:ssä, tuotetun sisällön pisteyttämiseen tai ehdokasmallien vertailuun. **Agent Skills** paketoi ohjeet, viitteet ja suojakaiteet yleisiin opettajan työnkulkuihin avoimessa, malliriippumattomassa muodossa: ymmärryksen tarkistus, tasoitettu oppituntien eriyttäminen, standardien mukaiset oppituntisuunnitelmat ja oppitunnin valmistelu. Käytännössä graafi tekee kahdesta muusta uskottavan: sisällön kohdistaminen on väite, ja graafi on viite, jota vasten se tarkistetaan.

## Kenelle se on tarkoitettu

Kehittäjille, jotka rakentavat tekoälyominaisuuksia [[curriculum-design|opetussuunnitelma]]- ja arviointituotteisiin, sekä opetussuunnitelma- tai standarditiimeille, jotka tuottavat datan, johon nuo tuotteet kohdistetaan. Opettajat voivat käyttää agenttitaitoja itsenäisesti, mutta repositorion oma kehys on infrastruktuuria työkaluja julkaiseville.

## Huomioita ja varauksia

Avoimuus [[open-source|lähdekoodissa]] ei tee datasta avointa. Knowledge Graphin koodi on MIT-lisensoitu, kun taas jokaisella datalla on oma käyttöluokansa – Open, Open + Gated tai Gated – ja Gated-sisältö ei nimenomaisesti kuulu niiden avoimien lisenssien piiriin, joihin repositorio viittaa, joten tarkista dataluettelosta uudelleenkäyttöoikeudet ennen kuin oletat niitä. Arvioijien koodi on MIT ja niiden kehotteiden sisältö CC BY 4.0, mutta annotoidut CLEAR- ja PERSUADE 2.0 -korpukset, joita ne käyttävät, ovat CC BY-NC-SA 4.0. Alusta ja sen taustalla olevat datat vaativat tilin. Repositorion aktiivisuus 2026-11-04 luettuna: 167 tähteä Knowledge Graphille, 88 Evaluatorsille, 41 Agent Skillsille. Aloitteen rahoittaa CZI, ja sen ongelman kehys on rahoittajan oma.

## Liittyvät käsitteet

- [[curriculum-design]] — graafi on olemassa, jotta tuotettu sisältö voidaan kohdistaa standardeihin ja opetussuunnitelmiin
- [[open-source]] — MIT- ja Apache-2.0-koodia, datan lisensointi datakohtaisesti
- [[educational-nlp]] — arvioijat ovat tekstinmittauskerros LLM-tuotoksen päällä
- [[agentic-ai]] — taitoja, jotka paketoivat työnkulun mallin toteutettavaksi
- [[edtech-platform]] — Curriculum Sync lataa opetussuunnitelmat oppimisen hallintajärjestelmään
- [[llm]] — arvioinnin kohde ja taitojen käyttäjä
