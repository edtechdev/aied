---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Julkinen leaderboard tekoälytekstin tunnistimille, jotka on pisteytetty RAID-benchmarkilla, joka on rakennettu testaamaan kestävyyttä malleja, toimialueita, dekoodausasetuksia ja vihamielisiä hyökkäyksiä vastaan."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

RAID on useimpien vakavien [[ai-detection|tekoälytekstin tunnistusta]] koskevien väitteiden taustalla oleva benchmark, ja sen leaderboard on paikka tarkistaa, säilyykö tunnistimen julkaistu tarkkuus mallin, toimialueen, dekoodausasetuksen tai tietoisen hyökkäyksen muuttuessa. Merkinnät pisteytetään testijoukossa, ja kuka tahansa repositorion lähetysprosessia noudattava voi lähettää niitä.

## Mitä sillä voi tehdä

Suodata toimialueen mukaan — abstraktit, kirjat, uutiset, runous, reseptit, Reddit, arvostelut, wiki — dekoodausstrategian (ahne tai näytteistys), toistorangaistuksen ja vihamielisen hyökkäyksen mukaan, mukaan lukien välilyönnit, homoglyyfit, synonyymikorvaukset, paraphrasointi, nollalevyiset välilyönnit ja artikkelien poisto. Vertaile sitten tunnistinta eri mittareilla: AUROC, TPR 5 %:n väärän positiivisen tasolla ja TPR 1 %:n tasolla.

Juuri tuo suodatinjoukko on pointti. Tunnistin, joka saa kokonaistasolla lähes 1,000, voi pudota jyrkästi, kun teksti on paraphrasoitu tai lähdemalli vaihtuu, ja leaderboard näyttää pudotuksen ennen kuin laitos rakentaa [[academic-integrity|vilppitapauksen]] sen varaan. 1 %:n väärän positiivisen sarake on koulutuksessa tärkein, sillä laitoksen mittakaavassa 1 %:n virheaste tarkoittaa satoja opiskelijoita, joita on syytetty aiheettomasti.

## Kenelle se on tarkoitettu

Tutkijat, jotka arvioivat tunnistusmenetelmiä, hallintohenkilöstö, joka laatii linjauksia, jotka saattavat viitata tunnistimeen, ja opettajat, jotka haluavat konkreettisen vastauksen kysymykseen ”voidaanko tämä tunnistaa?” ennen kuin sanovat niin kurssikuvauksessa.

## Huomioita ja varauksia

Benchmark mittaa koneellisesti tuotetun tekstin tunnistamista, ei vilppiä: opiskelija, joka käyttää tekoälyä suunnitteluun, jäsentelyyn tai muokkaamiseen, tuottaa tekstiä, jota tunnistimet eivät ole rakennettu havaitsemaan, ja opiskelija, joka [[language-learning|kirjoittaa toisella kielellä]], on tunnettu väärän positiivisen riski, jota leaderboard ei voi näyttää. RAID on akateemisen tiimin ylläpitämä tutkimusartefakti; kattavuus seuraa sen testijoukon generaattorimalleja, joten uudemmat mallit voivat olla aliedustettuina, kunnes benchmark päivitetään. Leaderboard asettaa tunnistimet järjestykseen, ei niiden toimittajien tietokäsittelykäytäntöjä, eikä korkea AUROC kerro mitään siitä, onko opiskelijatöiden lähettäminen kyseiseen palveluun laillista tai eettistä omalla lainkäyttöalueellasi.

## Liittyvät käsitteet

- [[ai-detection]] — menetelmäperhe, jota benchmark arvioi
- [[academic-integrity]] — politiikkakonteksti, jossa tunnistimien pistemääriä käytetään
- [[benchmark]] — laajempi mittausvälineiden luokka, johon tämä kuuluu
