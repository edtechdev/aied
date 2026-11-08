---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Ilmainen selaintyökalu, joka järjestää kirjallisen, aikarajoitetun version suullisesta koodipuolustuksesta jokaiselle ohjelmointikurssin opiskelijalle ja ehdottaa pisteitä lainatuin perustein opettajan hyväksyttäväksi."
url: https://code-viva.pisan.me/
author: "Code Viva"
author_url: https://code-viva.pisan.me/
resource_type: [software]
access: [free]
last_verified: "2026-11-04"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-11-04T17:55:00-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Code Viva järjestää kirjallisen, aikarajoitetun version [[oral-assessment|viva-tentistä]] jokaiselle ohjelmointikurssin opiskelijalle, noin viidestätoista kahteenkymmeneen minuuttiin kullekin, ilman opettajaa paikalla. Se lukee opiskelijan palauttaman koodin ja commit-historian, kirjoittaa neljästä kuuteen kysymystä kyseisen opiskelijan omista funktioista, nimistä ja commiteista ja antaa jokaiselle opiskelijalle henkilökohtaisen linkin, josta vastata.

## Mitä sillä voi tehdä

Palautukset tulevat Gradescope-viennistä, Canvas-latauszipistä, kansio-per-opiskelija-zipistä tai GitHub Classroomista lukutokenilla. Opettaja asettaa istunnon pituuden, kysymysten määrän ja määräajan, merkitsee lisäajan välillä 1,25x–3x ja lukee, muokkaa tai korvaa tuotetut kysymykset ennen linkkien lähettämistä. Kysymykset kattavat rekursion perustapaukset, reunavahtien, tietorakennevalinnat, läpinäkymättömät muuttujien nimet, skaalan ja jäljityksen, tehtävän spesifikaation lauseet ja commit-kuviot, kuten yhden massiivisen tai myöhäisillan commitin. Vastaukset palaavat vastauskoodina, ja katselmointinäkymä näyttää jokaisen litteraatin ehdotetun 0–3-pisteen rinnalla sekä ne lauseet, joihin pistemäärä nojaa, ja lisäksi lippujonon, joka on järjestetty sen mukaan, kuinka paljon keskustelua tarvitaan. Tulokset voi viedä CSV-muotoon, ja yksitoista demokurssia antavat lukijan kokeilla koko silmukkaa keksityllä datalla.

## Kenelle se on tarkoitettu

Ohjelmointikurssien opettajille, jotka haluavat näyttöä siitä, että opiskelija osaa selittää oman koodinsa, ja jotka mieluummin puhuvat lyhyelle listalle opiskelijoita kuin kaikille; commit-kysymykset tekevät siitä erään [[process-oriented-assessment|prosessiorientoituneen arvioinnin]] muodon.

## Huomioita ja varauksia

Kaikki toimii selaimessa: kurssi on paikallisessa tallennuksessa JSON-viennin kanssa, kysymykset kulkevat linkin siinä osassa, jota selaimet eivät lähetä palvelimille, ja vastaukset palaavat vain koodeina, jotka opiskelijat valitsevat lähettää, joten mitään opiskelijadataa ei päädy kolmannelle osapuolelle. Kysymysten tuottaja on sääntöpohjainen eikä mallivetoinen. Työkalun oman kuvauksen mukaan sen koodinlukija on heuristinen, joten epätavallinen muotoilu tai makrot voivat piilottaa funktion, ja pistemäärä voi palkita sanaston tuntemisen koodin ymmärtämisen sijaan, minkä vuoksi pisteet ovat ehdotuksia, jotka opettaja hyväksyy, ja minkä vuoksi se neuvoo pitämään panokset matalina. Lisenssiä ja lähderepositoriota ei ole julkaistu, ja koska linkit kuljettavat kysymykset, ne ovat muutaman kilotavun mittaisia – tarpeeksi pitkiä kääriytyäkseen oppimisympäristön viestikenttään.

## Liittyvät käsitteet

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
