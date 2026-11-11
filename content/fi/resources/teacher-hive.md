---
title: "Teacher Hive"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: resource
summary: "Tony Vincentin ilmaiseksi käytettävä ylläpitoalusta, jossa opettajat julkaisevat tekoälyllä tuotettuja luokkahuoneen verkkosovelluksia, jakavat niitä linkillä tai QR-koodilla ja selaavat satoja muiden opettajien tekemiä sovelluksia."
url: https://teacherhive.app/
author: "Tony Vincent"
author_url: https://teacherhive.app/about
resource_type: [software, collection of tools]
access: [freemium]
last_verified: "2026-11-10"
foundations: [teacher-ai-competency]
technology: [generative-ai]
audience: [instructors, instructional designers]
level: [k 12, teacher education]
source_updated: "2026-11-10T19:52:00-05:00"
translation_of: resources/teacher-hive
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**Teacher Hive** on opettajien tekemien luokkahuonesovellusten ylläpito- ja jakelualusta, jonka on rakentanut Tony Vincent. Sen lähtökohta on, että luokkahuoneen tekoälyssä vaikea osa ei ole enää saada mallia kirjoittamaan pientä sovellusta vaan löytää paikka, jossa se toimii koulun verkossa ja jonka opiskelijat saavat helposti auki. Opettajat liittävät tai lataavat yhden HTML-tiedoston, jonka ChatGPT, Claude tai Gemini on tuottanut, ja Teacher Hive tarjoilee sen lyhyellä julkisella linkillä varustettuna kuvakkeella ja QR-koodilla. Selaaminen, kirjanmerkit, seuraaminen ja julkaiseminen ovat ilmaisia; maksullinen Pro-taso nostaa tallennustilan ja sovellusten määrän rajoja.

## Mitä sillä voi tehdä

**Selaa** julkaistuja sovelluksia kokoelmien mukaan — aivokatkot, äidinkieli (ELA), matematiikka, luonnontieteet, yhteiskuntaoppi, opettajien työkalut — ja **Julkaise** sovellus liittämällä HTML, lisäämällä nimi, kuvaus, kuvake ja tekoälyattribuutio. Jokainen sovellus saa tietosivun, jossa on Käynnistä-painike ja QR-näyttö, ja avautuu ilman brändäystä tai opiskelijakirjautumista. Valinnainen **Superpowers**-kerros lisää tallennettuja vastauksia, tekoälykutsuja, sähköpostin ja tiedostotallennuksen, mitoitettuna suunnitelman mukaan. Yhdelle sovellukselle, joka ei tarvitse galleriaa, kaksi ilmaista vaihtoehtoa toimii vetämällä ja pudottamalla: [Cloudflare Drop](https://www.cloudflare.com/drop/) julkaisee kansion, zipin tai yksittäisen HTML-tiedoston workers.dev-osoitteeseen ilman tiliä, edellyttäen että käyttöönotto lunastetaan 60 minuutin kuluessa, ja [Netlify Drop](https://app.netlify.com/drop) julkaisee samat syötteet julkisella linkillä ilmaisella suunnitelmallaan.

## Kenelle se on tarkoitettu

K–12-opettajat, jotka ovat käyttäneet [[generative-ai|generatiivista tekoälyä]] pienen työkalun rakentamiseen ja tarvitsevat luotettavan paikan sen ylläpitoon, ovat ensisijainen yleisö; alusta on suunniteltu [[vibe-coding|vibe-codingille]] eikä kehittäjille. Opetussuunnittelijat ja opettajankouluttajat voivat käyttää kokoelmia esimerkkeinä ja matalan kynnyksen tapana rakentaa [[teacher-ai-competency|opettajan tekoälyosaamista]].

## Huomioita

Member ja Builder ovat ilmaisia (Builder: 50 sovellusta, 50 MB); Pro maksaa \$10 kuukaudessa tai \$60 vuodessa 500 sovelluksesta. Pääsy on freemium.

Yksityisyys on vahvempi väite, mutta se siirtää vastuun opettajille. Teacher Hive ei luo opiskelijatilejä, kysy opiskelijoilta henkilötietoja eikä aja analytiikka- tai mainoskomentoja julkaistuissa sovelluksissa. Koska sovellukset ovat julkisia linkin kautta, ehdot tekevät opettajista vastuullisia varmistamaan, etteivät heidän sovelluksensa kerää nimiä, sähköposteja, opiskelijatunnuksia tai sijaintia. Saavutettavuuden kattavuus (WCAG 2.2 AA) koskee Teacher Hiven omia sivuja, ei opettajien tekemiä sovelluksia, joita ei ole testattu. Avoimen lähdekoodin lisenssiä ei ilmoiteta, eikä käytettävyyttä ja tietojen säilytystä taata.

## Liittyvät käsitteet

- [[teacher-ai-competency]]
- [[generative-ai]]
- [[vibe-coding]]
- [[ai-literacy]]
- [[professional-training]]
