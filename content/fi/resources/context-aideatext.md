---
title: "conText (AIdeaText)"
created: "2026-11-12T19:52:00-05:00"
updated: "2026-11-12T19:52:00-05:00"
type: resource
summary: "Ilmainen selainpohjainen ohjaaja, joka lukee kuvan vihkosta, PDF:n tai tekstin ja käy sitten opiskelijan kanssa sen läpi sokraattisesti englanniksi tai espanjaksi piirtäen samalla reaaliaikaista kuvaajaa ideoista, joita opiskelija yhdistää puhuessaan."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/context-aideatext
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

conText on puhtain pieni osoitus suunnasta, josta [[intelligent-tutoring|tekoälyohjaus]] lähinnä puhuu ja jota se harvoin toteuttaa: malli ei vastaa opiskelijan kysymykseen vaan kysyy seuraavan, ja opiskelijan ideat piirtyvät kuvaajaksi tämän puhuessa. Lataa kuva vihkon sivusta, PDF tai teksti, ja työkalu kertoo ensin, mitä ymmärsi, ja aloittaa sitten puhutun [[socratic-method|sokraattisen]] dialogin. Jokainen opiskelijan nimeämä idea ilmestyy solmuksi reaaliaikaiseen [[knowledge-graph|tietämysgraafiin]]; kaaret ilmestyvät, kun keskustelu yhdistää niitä, ja paneeli kertoo, kuinka monta ideaa on vielä yhdistämättä.

## Mitä sillä voi tehdä

Silmukka on tarkoituksella lyhyt. Aineisto menee sisään (enintään 10 MB, kahdeksan PDF-sivua tai 15,000 merkkiä tekstiä), ohjaaja lukee sen takaisin, ja keskustelu käydään äänellä – sivusto sanoo, ettei ohjaaja arvostele eikä kirjoita opiskelijan puolesta. Kuvaaja on artefakti, joka tekee istunnosta jälkikäteen arvokkaan: se näyttää, mitkä ideat opiskelija todella asetti suhteeseen ja mitkä jäivät irralleen, mikä on paljon täsmällisempi asia tarkastella kuin chat-keskustelun litterointi. Istunnon voi viedä kuvaajan XML-tiedostona ja ladata uudelleen toisena päivänä jatkaakseen, ja poistopainike pyyhkii sen heti; muuten palvelin pudottaa sen tunnin kuluttua.

Yhdistelmä – ohjaaja, joka pidättää vastauksen, ja visuaalinen tallenne päättelystä – osuu suoraan siihen, mitä [[scaffolding|tuettu ohjaus]] ja [[metacognition|metakognitiivinen]] reflektio yrittävät saavuttaa, ja antaa opettajalle jotain konkreettista kysyttävää valmiin esseen tai oikean luvun sijaan. Sivuston oma kehystys on, että oikea tulos ei enää todista ymmärrystä, kun generatiivinen tekoäly pystyy tuottamaan sen, joten prosessin on oltava näkyvä.

## Kenelle se on tarkoitettu

Opiskelijoille, jotka työstävät lukemista tai tehtäväpakettia ja haluavat tulla kysytyiksi sen sijaan, että heidän puolestaan vastataan; opettajille, jotka haluavat matalan panoksen tarkistuksen siitä, osaako opiskelija yhdistää ideoita; ja opetuksen kehittäjille, jotka etsivät konkreettista esimerkkiä prosessinäytöstä. Opettajilla on opetussuunnitelmaan sovitettu opas englanniksi, espanjaksi, portugaliksi ja ranskaksi; työkalu itsessään toimii englanniksi ja espanjaksi, ja esittelyvideo on espanjaksi.

## Huomioita ja varauksia

Opiskelijoille suunnatusta työkalusta ei ole julkaistu hintaa eikä tiliä, kun taas institutionaalinen käyttöönotto – pilvi, paikallinen tai hybridi – tarjotaan räätälöidyllä tarjouksella ja tapaamisella; pidä ”ilmaista” marraskuun 2026 julkisen demon tilana, ei takuuna. Teksti ja kuvat menevät isännöityyn palveluun, jota pyörittää Claude, ja sivusto itse kehottaa käyttäjiä poistamaan nimet, summat, osoitteet ja yritysten nimet ennen lataamista, mikä siirtää tunnistetietojen poistamisen taakan lataajalle eikä alustalle. Istunnot poistavat itsensä tunnin kuluttua, ellei niitä viedä. Taustayhtiö markkinoi instituutioille myös laajempaa päättelygraafiarvioinnin alustaa, ja sen väitteet deduktiivisten, induktiivisten, abduktiivisten ja analogisten kuvaajien erottamisesta tulevat neljästä lähdetekstistä – sivusto kutsuu sitä demonstraatioksi, ja validointi laajassa mitassa on vielä tulossa.

## Liittyvät käsitteet

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
