---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Julkinen leaderboard huippumalleille, jotka arvioivat todellisia käsinkirjoitettuja yliopistotason STEM-vastauksia opettajan valitsemia rubriikkikohtia vasten."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [automated-assessment, assessment-validity, benchmark]
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

GradeBench esittää kapean, hyödyllisen kysymyksen [[automated-assessment|automaattisesta arvioinnista]]: kun annetaan opiskelijan käsinkirjoitettu vastaus, opettajan rubriikki, referenssiratkaisu ja ne rubriikkikohdat, jotka opettaja todella valitsi, valitseeko huippumalli samat kohdat? Kultamerkinnät ovat opettajien ja opetusassistenttien todellisia rubriikkivalintoja kokeista ja testeistä, eivät uudelleenarvioitua mallin tuotosta.

## Mitä sillä voi tehdä

Lue leaderboard ennen kuin luotat minkään arviointitoimittajan tarkkuusväitteeseen, ja lue tehtävien rakentaminen ennen kuin luotat leaderboardiin. [[benchmark]] sisältää 464 tehtävää, jotka on koottu 125 kysymyksestä 45 [[higher-ed|yliopistokurssilta]] yli kymmenestä laitoksesta, ja se on rajattu avovastausmuotoisiin koe- ja testitehtäviin, jotka professori tai opetusassistentti on tarkistanut rivi riviltä, ja se painottuu osittaisiin pisteisiin — täysien pisteiden ja nollan pisteiden tehtäviä on kumpaakin enintään 5 %, koska mallit kokevat ne helpoiksi.

Nykyisen leaderboardin huippu jää selvästi ihmisten välisen yksimielisyyden alapuolelle: paras malli saavuttaa 57,3 %:n tarkan rubriikkivastaavuuden, ja sivusto esittää tarkkuuden suhteessa 1 000 vastauksen kustannukseen, missä 0,8 pistettä jäljessä oleva malli maksaa noin seitsemäsosan siitä. Juuri kustannusakseli on käytännössä hyödyllinen osa, sillä arviointi on volyymitoimintaa.

Toinen, itsenäisesti rakennettu mittari on Learning Design Alliancen [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark), joka on pakattu avoimeksi repositorioksi ylläpidetyn leaderboardin sijaan ja joka on tiivistetty [[porcaro-ai-grading-benchmark-2026|Porcaron tutkimuksessa]].

## Kenelle se on tarkoitettu

Opettajat, jotka päättävät, saako arviointityökalu julkaista arvosanoja ilman tarkistusta, arvioinnin ammattilaiset, jotka kirjoittavat hankintavaatimuksia, ja tutkijat, jotka tarvitsevat rubriikkatason kohteen esseen pisteytyksen korrelaation sijaan.

## Huomioita ja varauksia

GradeBenchin julkaisee Pensive, kaupallinen tekoälyarviointialusta, joten benchmarkillä ja tuotteella on sama omistaja; tehtävien rakentaminen on dokumentoitu ja perusteltavissa, mutta pidä kehystystä toimittajan omana. Se kattaa STEM-kokeet, joiden rubriikeissa on vähintään neljä kohtaa, mikä sulkee pois esseet, lyhyet vastaukset ja keskustelupostaukset — muodot, joissa suurin osa [[humanities-education|humanististen aineiden]] arvioinnista tapahtuu. Tarkka rubriikkivastaavuus on tiukka mittari: kaksi arvioijaa voi olla eri mieltä yhdestä kohdasta ja olla molemmat oikeassa opiskelijasta. Pistemäärät kuvaavat marraskuussa 2026 saatavilla olevia malliversioita ja tulevat muuttumaan.
