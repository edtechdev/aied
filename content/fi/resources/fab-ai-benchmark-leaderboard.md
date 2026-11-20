---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Mallileaderboard matalan ja keskitulotason maille suunnatuille koulutusbenchmarkeille; se kattaa pedagogiikan, peruslukutaidon, SEND:n, visuaalisen matematiikan ja monikielisen suorituskyvyn, ja siinä on hinta- ja avoimet painot -sarakkeet."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [benchmark, digital-divide, equity-in-ai-education]
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Fab AI arvioi malleja koulutustehtävillä, jotka ovat tärkeitä siellä, missä budjetit, kaistanleveys ja kielikattavuus ovat rajallisia niissä [[global-south|matalan ja keskitulotason maissa]], joita varten benchmark on rakennettu, ja julkaisee tulokset lajiteltavana leaderboardina eikä artikkelina. Ydintaulukko pisteyttää pedagogiikkabenchmarkin SEND:n, visuaalisen matematiikan ja visuaalisen päättelyn rinnalla, ja erilliset välilehdet kattavat monikielisen pedagogiikan, peruslukutaidon ja ääneen lukemisen arvioinnin.

## Mitä sillä voi tehdä

Vertaile noin 300 mallia pedagogiikkapisteissä, jotka tällä hetkellä ulottuvat hieman yli yhdeksänkymmenen prosentin 21 %:iin, ja lajittele sitten sen mukaan, mitä opetusministeriön on oikeasti punnittava: hinta miljoonaa tokenia kohden, parametrien määrä, avoimet painot ja julkaisupäivä. Alapään hajonta on hyödyllinen osa. Alle 2B:n avoimet mallit sijoittuvat pedagogiikkabenchmarkissa 21 %:n ja 43 %:n välille, kun taas huippumallit ovat hieman yli yhdeksänkymmenen prosentin, mikä tekee kysymyksestä ”voimmeko ajaa tätä offline-tilassa halvoilla laitteilla” numeroidun punninnan arvailun sijaan.

[[multilingual-learning|Monikielinen]] pedagogiikkavälilehti on syy tallentaa sivu kirjanmerkkeihin. Useimmat koulutusbenchmarkit ovat vain englanninkielisiä, ja kysymys siitä, säilyykö mallin pedagogiikka käännöksessä, on juuri se kysymys, johon monikielisen järjestelmän ministeriö tarvitsee vastauksen. Data on ladattavissa CSV-muodossa, joten vertailut voi ajaa uudelleen paikallisesti.

## Kenelle se on tarkoitettu

Päättäjät ja hankintatiimit, jotka valitsevat malleja kansallisiin järjestelmiin, tutkijat, jotka tutkivat tekoälytuettuun koulutukseen liittyvää [[digital-divide|saantikuilua]], ja kehittäjät, jotka tarvitsevat pedagogiikkakohteen, joka ei ole englanninkielinen koe.

## Huomioita ja varauksia

Leaderboard mittaa malleja benchmarkin omissa tehtävissä: korkea pedagogiikkapistemäärä on näyttöä niistä tehtävistä, ei luokkahuoneesta. Hintasarake yhdistää syöte- ja tuotostokenien hinnat suhteessa 3:1, mikä on mallinnusvalinta eikä minkään yksittäisen käyttöönoton todellinen kustannus. Kielten ja paikallisesti ylläpidettyjen mallien kattavuus elää uusien mallien ilmestyessä, ja pienten mallien alapään pisteet heijastavat osin tehtävämuotoa yhtä paljon kuin kyvykkyyttä. Fab AI:n kehystys koskee nimenomaan matalan ja keskitulotason maita, joten benchmarkin tehtäväjoukko heijastaa sitä kontekstia eikä sitä pidä lukea yleiseksi koulutusrankingiksi. Tarkista julkaisupäivät: useat merkinnät ovat nykyistä mallisukupolvea vanhempia.
