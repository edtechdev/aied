---
title: "Miten tekoäly pitäisi suunnitella osaksi oppimiskokemusta?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
audience: [instructional designers, instructors]
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/designing-ai-into-learning
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Moduulin rungossa on rivi, jossa lukee ”tekoälytoiminta”, eikä kukaan osaa sanoa, mitä se korvaa. Tai opettaja on pyytänyt chatbottia kurssille, joka jo toimii, ja sinun tehtäväsi on sijoittaa se rikkomatta sitä osaa, joka sai kurssin toimimaan.

Lähde oppimistavoitteesta ja siitä toiminnasta, joka tuottaa sen. Sama malli voi olla tuki, [[socratic-method|sokraattinen]] kumppani, luonnosten lukija, [[simulation|simulaatio]] tai vastauskone, ja sen, minkä niistä saat, ratkaisee suunnittelu eikä malli. Nimeä tila, jota olet rakentamassa, laita oppijan yritys ennen kuin apua ilmestyy, ja pidä vähintään yksi reitti kurssin läpi, joka toimii ilman työkalua.

## Lyhyt versio

**1.** Kirjoita lause siitä, mitä oppijat osaavat jälkeenpäin ilman työkalua, ja tarkista jokainen tekoälyominaisuus sitä vasten.

**2.** Järjestä vuorovaikutus: oppija yrittää, tekoäly tukee, oppija arvioi tai korjaa, oppija osoittaa.

**3.** Nimeä tila ICAP-tikkailla. Ohitus ja tuki voivat olla sama työkalu eri askelmilla.

**4.** Sijoita tekoäly sinne, missä kurssin järjestys jo tarkoittaa tiettyä toimintaa, ei loppuun bonuksena.

**5.** Pidätä työkalua, kun kyky on muotoutumassa, ja palauta se sitten tarkistuspisteessä, jota opiskelija ei voi huijata.

## Päätä, mitä oppija tekee ilman työkalua

Tietopohjan käsite [[pedagogy|Pedagogiset mallit ja opetusstrategiat]] tarjoaa testin: säilyttääkö kokoonpano sen toiminnan, joka tuottaa aiotun oppimisen? Vastaa siihen paperilla ennen kuin kukaan valitsee ominaisuuden.

[[finkelstein-principled-ai-education-2025|The Principled AI Education Framework]] esittää yleisen säännön: teknologian pitäisi vahvistaa eikä syrjäyttää niitä inhimillisiä kyvykkyyksiä, joita koulutus aikoo kehittää. Moduulin testiksi kirjoitettuna se tarkoittaa kyvykkyyden nimeämistä, sen rakentavan toiminnan nimeämistä ja sen kysymistä, istuuko tekoäly toiminnan sisällä vai sen vieressä.

## Laita yritys ennen apua

Oletuskuvio, joka kestää kosketuksen todellisen luokan kanssa: **oppija yrittää, tekoäly tukee, oppija arvioi tai korjaa, oppija osoittaa ymmärrystä.**

Käytännössä se tarkoittaa alustavan ennustuksen tai ratkaisun pyytämistä ennen kuin apua ilmaantuu, ja kysymysten, vihjeiden, esimerkkien, vasta-argumenttien ja [[feedback|palautteen]] suosimista välitöntä valmiiksi saattamista vastaan. Säilytä [[productive-failure|tuottava epäonnistuminen]] siellä, missä se palvelee oppimista. Vaadi seurauksellisten väitteiden varmistaminen, rakenna sisään selitys ja [[learning-by-teaching|opettamalla oppiminen]] -vaihe ja häivytä tuki osaamisen kasvaessa. Pidä osa työstä tekoälyvapaana, jotta oppijat voivat kalibroida, mitä he osaavat yksin.

[[reducing-ai-misuse|Reducing AI Misuse]] -synteesi suosittaa samaa muotoa: ajattele ensin, tekoäly toiseksi, reflektoi, tarkoituksellisine arviointitarkistuspisteineen.

## Nimeä tila, jota varten suunnittelet

[[thermomix-genai-education-analogy-2026|Rummelin, Nachtigallin ja Panaderon keittiökoneanalogia]] kehystää kysymyksen uudelleen siitä, käyttävätkö oppijat [[generative-ai|generatiivista tekoälyä]], siihen, miten se käyttö muovaa sitä, mitä heistä tulee. [[icap-framework|ICAP]]- ja [[samr-model|SAMR]]-malleihin sijoitettuna se antaa tikkaat. Tehtävän täydellinen ulkoistaminen ilman korjaamista tai [[critical-thinking|kriittistä sitoutumista]] on passiivinen korvaaminen, ja siinä on [[cognitive-offloading|taitojen menetyksen ja liiallisen riippuvuuden]] riski. [[prompt-engineering|Kehotteiden hienosäätö]] ja tuotosten ristiintarkistus vaativat [[prior-knowledge|aiempaa tietoa]] ja [[self-regulated-learning|itsesäätelyä]], mikä on aktiivinen taso eli vahvistaminen. Tekoälyn käyttäminen alkuperäisen työn ideointiin, jäsentämiseen ja arviointiin on rakentava taso eli muokkaaminen. Tekoäly aitona dialogikumppanina yhteisrakentamiseen ja mukautuvaan palautteeseen on vuorovaikutteinen taso eli uudelleenmäärittely.

Seuraus on suora. Sama työkalu on ohitus yhdellä askelmalla ja [[scaffolding|tuki]] seuraavalla, joten suunnitteluasiakirjan pitäisi nimetä aiottu tila.

## Sijoita se sinne, missä järjestys tarkoittaa toimintaa

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec ja Horvat]] analysoivat 29 064 opetus- ja oppimistoiminnan suunnitellun järjestyksen 554 kurssilla ja löysivät näkyvän suunnittelukieliopin. Omaksumistyyppiset toiminnot ovat yleisin aloituspiste ja suurin yksittäinen tyyppi, yli 20 %. Oppimistyyppi seuraa aiottua Bloomin tasoa: omaksuminen laskee noin 50 %:sta tasolla 1 noin 20 %:iin tasolla 6 ja tuottaminen nousee yli 20 %:iin tasoilla 5 ja 6. Datan vahvin siirtymä on arvioinnista keskusteluun, arvolla 0,332.

Tästä seuraa kaksi oppituntia tekoälysuunnitteluun. Sijoita työkalu sinne, missä järjestys tarkoittaa tiettyä toimintotyyppiä. Ja koska palaute ryhmittyi [[collaborative-learning|yhteistyön]], [[group-work|ryhmätyön]] ja [[teacher-role|opettajan]] läsnäolon kanssa, vertais- ja synkroniset rakenteet ovat niitä, joihin tekoälytuen pitäisi kytkeytyä, ei niitä, joita sen pitäisi korvata.

## Päätä, mitä pidätät, ja milloin palautat sen

[[refrain-amplify-genai-curriculum-2026|Torres-Sahlin ja kumppaneiden ”pidättäydy ja vahvista” -kehys]] siirtää tämän ohjelmatasolle. Pidätä generatiivista työkalua, kun kyky on muotoutumassa, ja palauta se sitten, kun opiskelija osaa ohjata sitä, arvioida mitä se palauttaa ja vastata siitä, vaikeasti huijattavine tarkistuspisteineen jokaisessa saranakohdassa.

Laitteita ohjaa muotoutumisen ja [[cognitive-offloading|siirtokuormituksen]] välinen kriteeri: sallittu siellä, missä ne tukevat sitoutunutta työtä, poissuljettu siellä, missä ne valuttavat huomiota. Se muuttaa siirtokuormituspäätökset [[curriculum-design|opetussuunnitelman]] ja [[governance|hallinnon]] kysymykseksi, joka tulee ennen kurssitason suunnittelua eikä sen jälkeen.

## Tarkista, että yhteensovittaminen on todellista

[[mcinnes-salvaging-constructive-alignment-genai-2026|McInnesin ja kumppaneiden diskurssianalyysi]] 14 korkeakouluohjauksen tekstistä varoittaa, että tehokkuuskehyksinen ohjaus, kuten generatiivisen tekoälyn käyttö tavoitteiden, arviointikriteerien ja kurssirunkojen luonnosteluun, tuottaa [[assessment|yhteensovittamista]], joka näyttää sovitetulta mutta laiminlyö rakentavan puoliskon. Tavoitteet, toiminnot ja arvioinnit tuotetaan erillisinä kohteina eikä toisistaan riippuvina.

Heidän keinonsa on uudelleenjärjestäminen. Kouluttajien pitäisi ymmärtää rakentava yhteensovittaminen riittävän hyvin ohjatakseen, kuulustellakseen ja hylätäkseen tekoälyn tuotoksen ennen kuin delegoivat siitä mitään, koska uskottavan pinnan hyväksyminen on sama arviointivirhe, josta opettajat varoittavat opiskelijoita. Siellä missä tekoälyä käytetään, he kannattavat institutionaalisesti rajattuja, [[rag|hakuun perustuvia]] järjestelmiä, jotka on konfiguroitu paikallisen politiikan ja laatustandardien ympärille yleisten internetillä koulutettujen oletusten sijaan.

## Mitä opetuksen suunnittelijat ymmärtävät väärin

Tekoälyn lisääminen lasketaan interventioksi. Oppimista muuttaa se toiminta, jonka opiskelija suorittaa, ja tekoäly on yksi osa sen asetelmaa. Hyvin sijoitettu vihje ja hyvin sijoitettu vastaus voivat toimia samalla mallilla ja tuottaa päinvastaisen oppimistuloksen.

Luvan kirjoittaminen on suunnittelutyö. Lupa asettaa sen, mikä on sallittua. Se ei aseta järjestystä, tilaa eikä tarkistuspistettä, ja ne kolme ratkaisevat, säilyykö toiminta.

Tehokkuus on uudelleensuunnittelun tavoite. Tavoitteiden ja arviointikriteerien luonnostelu mallilla on nopeaa, ja 14 asiakirjan analyysi havaitsi, että tulos voi näyttää sovitetulta, kun osat lakkaavat tukemasta toisiaan.

## Mitä sinulle tullaan vastaamaan

**”Opiskelijat käyttävät sitä kuitenkin, joten sen ympärille suunnitteleminen on naiivia.”** He käyttävät, ja juuri siksi tila pitää määritellä ja opettaa. Moduuli, joka nimeää tilan, antaa opiskelijalle jotain, mitä noudattaa.

**”Meillä ei ole aikaa järjestää koko kurssia uudelleen.”** Järjestä sitten yksi moduuli ja yksi arviointi uudelleen. Pidättäydy ja vahvista -sarana on yksi tarkistuspiste, ja ajattele ensin -sekvenssi on kolme ohjetta monisteessa.

**”Meidän tekoälyominaisuudessamme on jo suojakaiteet.”** Suojakaiteet rajoittavat sitä, mitä malli sanoo. Ne eivät ratkaise, yrittikö oppija ensin, häivytetäänkö tuki vai onko olemassa tekoälyvapaa polku. Ne ovat kurssisi suunnittelupäätöksiä, eivät tuotteen asetuksia.

## Mitä tehdä tällä viikolla

**1.** Kirjoita moduulin tukemattoman suorituksen lause ja laita se toimintaluettelon yläpuolelle.

**2.** Merkitse aiottu ICAP-tila jokaisen tekoälytoiminnan viereen rungossa.

**3.** Siirrä yksi tekoälytoiminta niin, että oppija yrittää ongelmaa ensin.

**4.** Valitse yksi tekoälyvapaa polku moduulin läpi ja merkitse se opiskelijoille.

**5.** Nimeä yksi sarana, jossa työkalu pidätetään, ja tarkistuspiste, joka palauttaa sen.

## Minne seuraavaksi

[[learning-design|Instructional Design]], [[active-learning|Active Learning]] ja [[scaffolding|tukeminen]] sisältävät suunnittelusanaston. Vuorovaikutustason oletuksiin, jotka ratkaisevat, säilyttääkö suunniteltu toiminta oppimisen, katso [[reduce-ai-cheating|How Can We Reduce AI Cheating?]] ja [[redesign-assessment-ai-era|How Should Assessment Be Redesigned for the AI Era?]]. [[designing-educational-ai-software|Designing Educational AI Software]] kattaa sen, miten samat periaatteet rajoittavat itse ohjelmistoa, ja [[developing-ai-tutor|How Do We Develop an Effective AI Tutor?]] kääntää ne ohjaajan arkkitehtuuriksi.
