---
title: "Amplify GenAI"
created: "2026-11-12T19:44:00-05:00"
updated: "2026-11-12T19:44:00-05:00"
type: resource
summary: "Vanderbiltin MIT-lisensoitu yritystason generatiivisen tekoälyn alusta, joka asennetaan oppilaitoksen omaan AWS-tiliin: mukautetut avustajat paikallisten asiakirjojen päälle, hakuun perustuvat vastaukset, jakaminen organisaation sisällä ja kustannuslaskenta yksittäiseen viestiin asti."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/amplify-genai
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Amplify GenAI on vastakkainen veto verrattuna kampuslaajuiseen lisenssiin kaupalliseen avustajaan: oppilaitos ajaa alustaa itse omassa Amazon Web Services -tilissään ja maksaa käytöstä. Vanderbilt rakensi sen omalle yhteisölleen, julkaisi sen MIT-lisenssillä kolmessa repossa ja tarjoaa sitä nyt muille organisaatioille vaihtoehtona käyttäjäkohtaisille yrityssopimuksille – väitteenä, että kalliin osan pitäisi olla mallit, ei käyttäjämäärä.

## Mitä sillä voi tehdä

Käyttäjät rakentavat mukautettuja avustajia lataamalla asiakirjoja tai yhdistämällä tietolähteitä, ja avustajat vastaavat [[rag|hakuun perustuvan generoinnin]] avulla tuosta aineistosta eivätkä pelkän yleisen koulutusdatan pohjalta. Avustajia voi jakaa organisaation sisällä, ketjuttaa yhteen keskusteluun ja antaa niille kehotepohjia; alusta tuottaa myös PowerPoint- ja Word-tiedostoja, kaavioita ja visualisointeja. Ylläpitäjät saavat sen, mitä jaettu palvelu tarvitsee: kustannuslaskennan viestin tasolle asti, käyttäjäkohtaiset rajat, kansiot ja työtilat sekä SSO:n – kaikki asennuksessa, jota oppilaitos hallitsee.

[[higher-ed|Korkeakoulun]] kannalta tärkein suunnittelupäätös on laskentamalli. Vanderbilt raportoi, että 1,300 pilotointikäyttäjällä kustannus käyttäjää kohden oli noin \$3 kuukaudessa AWS mukaan lukien ja että puolet näistä käyttäjistä kulutti alle \$1 kuukaudessa tokeneissa – lukuja, jotka yliopisto esittää tapaustutkimuksena, ei auditoituna vertailuarvona. Käyttöperusteinen laskutus palkitsee kampusta, jossa vähemmistö käyttäjistä tekee suurimman osan työstä, mikä on tekoälyn käyttöönoton tavanomainen muoto, ja se tekee talousosaston kysymykseen (”mitä tämä maksaa opiskelijaa kohden?”) vastaamisen mahdolliseksi lokeista eikä sopimuksesta.

## Kenelle se on tarkoitettu

Keskitetylle IT:lle ja tietohallintojohtajien toimistoille, jotka ajavat jo työkuormia AWS:ssä ja haluavat yhteisön tukeman vaihtoehdon kaupalliselle yritysavustajalle; tiedekunnalle, joka tarvitsee kurssimateriaaliin nojaavia avustajia lähettämättä sitä toimittajan kuluttajatuotteeseen; ja oppilaitoksille, jotka haluavat yhden paikan nähdä, mitä ihmiset tekevät malleilla. Koska alusta asennetaan oppilaitoksen omaan tiliin, tietojen sijaintikysymykseen vastaa asennus eikä toimittajan lupaus.

## Huomioita ja varauksia

Ilmainen lisensoida, ei ilmainen ajaa: oppilaitos maksaa AWS:lle ja mallien tarjoajille. Mallin valinta kulkee Amazon Bedrockin (Anthropic, Mistral) tai OpenAI:n ja Microsoft Azure:n kautta, eikä omien paikallisten mallien ajaminen ole toteutettu. Projekti toteaa suoraan, ettei se voi tukea yksittäisiä asennuksia, ja ohjaa organisaatiot kaupallisten kumppanien puoleen – joten realistiseen kustannukseen sisältyy henkilöstöä tai urakoitsija. Kyseessä on kolmen repon asennus (frontend, backend, infrastruktuuri), jolla on kymmeniä tähtiä eikä tuhansia, ja yllä oleva kustannusvertailu on Vanderbiltin oma kokemus eikä kontrolloitu tutkimus. Oppilaitosten, jotka pitäisivät päättelylaskun omassa laitteistossaan, kannattaa katsoa [MindRouter](/aied/resources/mindrouter/) ja lukea nämä kaksi yhdessä: Amplify on sovelluskerros toimittajien mallien päällä, MindRouter on yhdyskäytävä omien GPU:iden päällä.

## Liittyvät käsitteet

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
