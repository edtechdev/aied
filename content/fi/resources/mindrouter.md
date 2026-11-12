---
title: "MindRouter"
created: "2026-11-12T20:01:00-05:00"
updated: "2026-11-12T20:01:00-05:00"
type: resource
summary: "Apache-2.0-lisensoitu päättelylaskun yhdyskäytävä Idahon yliopistosta, joka asettaa kampuksen vLLM- ja Ollama-GPU-solmuista koostuvan klusterin yhden OpenAI-yhteensopivan rajapinnan taakse ja lisää reilun jaon ajastuksen, käyttäjäkohtaiset tokenkiintiöt, SSO:n, auditointilokituksen sekä reaaliaikaisen GPU- ja energiamonitoroinnin."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/mindrouter
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Useimmat kampuksen tekoälykeskustelut alkavat siitä, mikä malli ostetaan, ja pysähtyvät ennen vaikeampaa kysymystä: missä se ajetaan, kuka sitä mittaa ja kuka näkee lokit. MindRouter on vastaus tuohon toiseen kysymykseen. Se on itse isännöity yhdyskäytävä, joka istuu heterogeenisen [[llm|LLM]]-palvelinklustergin edessä – vLLM- ja Ollama-solmuja oppilaitoksen omistamilla GPU:illa – ja tarjoaa yhden rajapinnan, joka puhuu OpenAI:n, Anthropicin ja Ollaman murteita ja kääntää niiden välillä, jotta olemassa oleva asiakaskoodi toimii edelleen.

## Mitä sillä voi tehdä

Osoita työkalu yhdyskäytävään toimittajan päätepisteen sijaan. Taustalla MindRouter hoitaa ne osat, joita jaettu asennus tarvitsee: reilun jaon ajastus painotetulla deficit round robinilla, käyttäjäkohtaiset token- ja pyyntökiintiöt, roolipohjainen pääsy ja valinnainen SSO Azure AD/Entran, Googlen, minkä tahansa OIDC-tarjoajan tai SAML 2.0:n kautta, sekä täysi auditointilokitus kehotteista, vastauksista ja artefakteista. GPU:n sidecar-agentti raportoi solmukohtaisen käyttöasteen, muistin, lämpötilan ja tehon, joten ylläpitäjä näkee energiakustannuksen pyyntöä kohden ja voi ajaa taustapalvelimen hallitusti tyhjäksi, kun huolto on tulossa. Se kattaa muutakin kuin chatin – upotusvektorit, näön, kuvan- ja videontuoton, puhesynteesin ja puheentunnistuksen, asiakirjojen OCR:n – ja toimittaa MCP-palvelimia ja agenttitaitoja koodausavustajille.

Syy, miksi korkeakoulu välittäisi, on se, jonka projekti nimeää: [[institutional-ai-infrastructure|instituutioiden tekoälysuvereniteetti]]. Kehotteet ja asiakirjat pysyvät infrastruktuurissa, jota oppilaitos operoi, sen sijaan että ne kulkisivat kolmannen osapuolen pilven kautta, mikä on helpompi puolustaa tiedekunnan valtuustolle tai [[privacy|tietosuoja]]toimistolle kuin toimittajan kanssa tehty tietojenkäsittelysopimus. Pitääkö väite paikkansa, riippuu siitä, onko oppilaitoksella GPU:ita, sähköä ja henkilöstöä – yhdyskäytävä tekee paikallisesta isännöinnistä hallittavaa, ei halpaa.

## Kenelle se on tarkoitettu

Tutkimuslaskennan ja keskitetylle IT-ryhmille, joilla on jo GPU-kapasiteettia, opetuksen ja oppimisen keskuksille, jotka haluavat yhden paikan mitata opettajien ja opiskelijoiden käyttöä, ja ylläpitäjille, jotka punnitsevat isännöityjä yritysalustoja oman päättelylaskun ajamista vastaan. Se on Docker Compose -asennus, jossa on dokumentoitu SSO-konfiguraatio ja oma brändäys, ja sitä ylläpidetään Idahon yliopistossa, jossa tekijä esitteli sen PEARC '26 -tapahtumassa; projektilla oli 22 tähteä ja 3 haarautumaa marraskuussa 2026.

## Huomioita ja varauksia

Ilmainen ja avoimen lähdekoodin Apache-2.0-lisenssillä, mutta kustannus siirtyy eikä katoa: laitteisto, sähkö ja klusterin pyörittämiseen tarvittava henkilöstöaika. Ohjelmisto on infrastruktuurin mittapuulla nuori – kolme tekijää, yksi alkuperäinen oppilaitos ja satoja tageja julkaisuissa – joten korkeakoulun kannattaa pilotoida sitä olemassa olevan palvelun rinnalla eikä ainoana polkuna malliin. Julkaistua arviointia ajastuksen ja kiintiökäyttäytymisen toiminnasta todellisella kampuskuormalla ei ole repossa; PEARC-artikkeli on paikka, josta etsiä tekijöiden oma selonteko.

## Liittyvät käsitteet

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
