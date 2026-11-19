---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Verkkosovellus vaiheittaisten tekoälytehtävien rakentamiseen, jossa opettaja määrittää mallin roolin ja opiskelijan käytön portaat ja opiskelijan henkilöllisyys pidetään poissa mallin kontekstista."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Tekoälyä integroivien tehtävien rakennustyökalu, jonka Joseph Slade on kehittänyt Oregon State Universityssä ja jota ylläpitää AI Education Labs, Inc. Lähtökohta on, että vaihtoehto rajattomalle chatbotille ei ole kielto vaan rakenne: opettaja määrittää vaiheet, joiden läpi opiskelija kulkee, päättää, minkä roolin malli saa kussakin vaiheessa, ja asettaa rajat sille, kuinka paljon opiskelija voi nojata siihen. Tehtävä julkaistaan tämän jälkeen liittymislinkkinä eikä kehoteasiakirjana.

## Mitä sillä voi tehdä

- **Aseta mallin rooli tehtäväkohtaisesti.** Rakennustyökalu tarjoaa valmiit asetukset tutorille, sokraattiselle kyselijälle, palautteenantajalle ja tutkimusavustajalle sekä mukautetun kehotteen, jotta avustaja käyttäytyy tehtävän vaatimalla tavalla.
- **Aseta portaat vaiheiden väliin.** Vaihe voi vaatia opiskelijaa perustelemaan päättelynsä ennen etenemistä, ja tekoälyapu voidaan rajata vaihekohtaisesti — käyttöliittymä näyttää jäljellä olevien käyttökertojen määrän eikä rajatonta pääsyä.
- **Valitse työskentelyalusta.** Opiskelijat kirjoittavat asiakirjasivulla, jonka marginaalissa on kommentteja; chat- ja muistikirjanäkymät ovat käytettävissä, kun ne sopivat tehtävään sivua paremmin.
- **Julkaise ja seuraa päättelyä, älä vain tuotosta.** Liittymislinkki ilmoittaa opiskelijat tehtävään, edistyminen tallentuu työn edetessä, ja opettaja voi lukea kunkin opiskelijan keskusteluhistorian ja viedä sen CSV- tai Markdown-muodossa.
- **Luonnostele tekoälyllä ja viimeistele sitten.** Kokoonpano voi alkaa muutamasta kysymyksestä, ladatusta olemassa olevasta tehtävästä tai aiemmasta tehtävästä, ja opettajan puolen avustaja täyttää ensimmäisen luonnoksen.

Julkaistut esimerkit vihjaavat tarkoitetusta laajuudesta: fysiikan tehtävä näytöstä ja todistajanlausunnoista, biologian harjoitus, jossa diagnosoidaan tekoälyharjoittelijan selityksen päättelyvirhe, ja psykologian tehtävä, jossa tarkistetaan, kuvaako uutinen tutkimuksen asetelmaa.

## Kenelle se on tarkoitettu

Korkeakoulutuksen opettajille, jotka haluavat tekoälypolitiikan nojaavan [[learning-design|oppimissuunnitteluun]] — eli jotka mieluummin rajaavat, miten mallia voi käyttää tehtävän sisällä, kuin valvovat, onko sitä käytetty. Portaat ja rooliasetukset ovat [[guardrails|suojakaiteiden]] suunnitteluaikainen ilmaus, ja sovellus on suunnattu kurssityöskentelyyn eikä institutionaaliseen chat-käyttöönottoon.

## Huomioita ja varauksia

- **Pilottivaihe.** Ehdot toteavat, että palvelu tarjotaan tällä hetkellä maksutta pilotteihin ja että maksullisia suunnitelmia voidaan ottaa käyttöön ilmoituksella, ja että ominaisuudet voivat muuttua tai poistua. Julkista hinnoittelusivua ei ole; hinnoittelu näkyy vasta kirjautumisen jälkeen.
- **Yksityisyysväite on arkkitehtoninen ja kannattaa lukea tarkasti.** Kukin opiskelija saa satunnaisen sessiotunnisteen tehtäväkohtaisesti, opiskelijan tilin ja session välinen vastaavuus pysyy Repertoire-palvelimella, ja malli saa anonymisoidun session, tehtävän kontekstin ja opiskelijan tekstin. Varaus on itse politiikassa: opiskelijan kirjoittama teksti, joka paljastaa hänen henkilöllisyytensä, lähetetään kuten mikä tahansa muu teksti, ja kurssin opettaja voi lukea keskusteluhistoriat.
- **Kolmannen osapuolen inferenssi.** Vastaukset tuotetaan Anthropicin Claude API:n kautta, OpenAI:n API varalla, kaupallisilla ehdoilla, joiden politiikka sanoo sulkevan pois API-syötteillä ja -tulosteilla kouluttamisen syyskuusta 2026 alkaen. Laitoksen tulisi varmistaa tämä omalla sopimuksellaan eikä verkkosivun perusteella.
- **Se ei ole arvioija.** Politiikka ja ehdot kuvaavat molemmat avustajan arvioita, kuten ”tavoite saavutettu”, opettajan apuvälineiksi; arvosanat ja akateemiset päätökset pysyvät opettajalla ja laitoksella, ja päätökset [[ai-use-disclosure|tekoälyn käytön ilmoittamisesta]] opiskelijoille jäävät opettajalle.
- **Isännöity Yhdysvalloissa.** Data sijaitsee Google Cloud Firestoressa Vercelin isännöimänä, ja politiikka käsittelee FERPA-velvoitteita, kun palvelu käsittelee koulutustallenteita; Yhdysvaltojen ulkopuolisille käyttäjille kerrotaan, että heidän datansa käsitellään siellä.

## Liittyvät käsitteet

- [[learning-design]] — jäsennelty tehtäväsuunnittelu kohtana, jossa tekoälypolitiikka muuttuu konkreettiseksi.
- [[guardrails]] — sitoutumisportaat ja rajattu tekoälyapu suunnitteluaikaisina rajoitteina.
- [[ai-use-disclosure]] — opettaja, ei alusta, päättää, miten tekoälyn käyttö ilmoitetaan opiskelijoille.
