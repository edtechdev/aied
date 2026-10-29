---
title: "Mitkä ovat parhaat käytännöt ja vinkit tehokkaan koulutuksellisen tekoälyohjelmiston suunnitteluun?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Tiimilläsi on toimiva prototyyppiohjaaja ja alueellinen demo kolmen viikon päästä. Tai kumppanikoulu on pyytänyt sinua rakentamaan chat-käyttöliittymän kurssin lukualustan päälle, ja joku sanoo sen olevan kahden viikon työ. Tai hankintakatselmoija on palauttanut turvallisuusosion yhdellä lauseella: mitä sinä oikeastaan testasit?

Vastaus on kapeampi kuin useimmat tuotemäärittelyt olettavat. Koulutuksellinen tekoäly toimii rajattuna asiantuntijana ihmisen valvonnassa: osaaminen rajattu määriteltyyn toimialueeseen, perustettu opettajan hyväksymään sisältöön eikä mallin muistiin, suunniteltu yhdessä sitä käyttävien opettajien ja oppijoiden kanssa, arvioitu pitkäkestoisessa monivuoroisessa vuorovaikutuksessa. Juuri tuon viimeisen lauseen useimmat tiimit ohittavat. Pedagogista haittaa ilmeni jokaisessa alla olevassa vertailumittaristossa testatussa mallissa, ja epäonnistumisaste nousi 17,7 %:sta yhden vuoron vuorovaikutuksissa 77,8 %:iin monivuoroisissa keskusteluissa.

## Lyhyt versio

**1.** Kirjoita muistiin, mitä järjestelmä päättää ja mitä opettaja päättää. Tuosta rajasta tulee arkkitehtuuri.

**2.** Arvioi monivuoroista, oppiaineen huomioivaa vuorovaikutusta oikeaa opetussuunnitelmaa vastaan, älä yksittäisiä kehotteita yleistä turvallisuuskriteeristöä vastaan.

**3.** Perusta vastaukset hyväksyttyyn sisältöön ja pidä varmistava komponentti erillään keskustelevasta.

**4.** Kohtele jokaista opiskelijan palautusta epäluotettavana syötteenä, myös silloin kun järjestelmä arvioi sitä.

**5.** Rakenna yritysportti, eskalaatiopolku ja opettajan ohitus ennen pilottia.

**6.** Sijoita saavutettavuus ja eritelty yhdenvertaisuustestaus määrittelyyn, ei työjonoon.

## Päätä, mitä järjestelmä saa olla

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichertin ja kumppaneiden osallistava suunnittelututkimus]] kuuden toisen asteen opettajan kanssa korjaa oletuksen, jonka mukaan koulutuksellisen tekoälyn pitäisi olla autonominen agentti. Kun opettajia pyydettiin prototyyppaamaan luokkahuoneen [[conversational-ai|keskustelubotteja]] paperille, jokainen opettaja kuvasi rajattua asiantuntijaa kahdella ulottuvuudella. Valtarajat pitivät opettajat ohjissa, koska vastuuta opiskelijoiden oppimisesta ja turvallisuudesta ei voi delegoida. Asiantuntijuusrajat heijastivat tekoälyn puutteellista kontekstitietoa yksittäisistä opiskelijoista, luokkahuoneen dynamiikasta ja instituution normeista.

Heidän hahmottelemassaan arkkitehtuurissa oli neljä komponenttia (sisällön rajaaminen, sisällön esittäminen, opiskelijaan mukautuminen, [[teacher-role|opettajan]] valvonta) kolmella suojaavalla kerroksella: aluerajat, jotka rajaavat toimialaa, sisältösuodatus, joka mahdollistaa turvallisen [[personalized-learning|personoinnin]], ja opettajan ohitus tulkinnanvaraisissa tapauksissa. Delegointi oli valikoivaa. Gagnén yhdeksään opetuksen tapahtumaan sijoitettuna opettajat hyväksyivät tekoälyn sisällön esittämiseen, harjoitustehtävien tarjoamiseen ja [[formative-assessment|formatiivisen]] [[feedback|palautteen]] antamiseen, ja kieltäytyivät siitä tavoitteiden asettamisessa ja [[summative-assessment|summatiivisen]] [[assessment|arvioinnin]] toteuttamisessa.

Kaksi oletusarvoa kuuluu samaan määrittelyyn: kohdista järjestelmä eksplisiittisiin oppimistavoitteisiin ja viritä se ystävällisiin mutta oikeisiin vastauksiin mieluummin kuin myötäilyyn sen kanssa, joka milloinkin kirjoittaa. Ohjaaja, joka imartelee väärää vastausta, on opettanut opiskelijalle, että vastaus oli oikein.

Yksi yksityiskohta on nyt halpa ja myöhemmin kallis: nämä opettajat halusivat käyttäytymisen läpinäkyvyyttä, näkyviä rajoja ja epävarmuuden merkkejä enemmän kuin selityksiä mallin päättelystä. Kaikki kuusi pyysivät täydellistä keskustelulokitusta, reaaliaikaisia hälytyksiä ja ohitusmahdollisuutta, kehystettynä ammatilliseksi vastuuksi eikä epäluottamukseksi. Suunnittele se ensimmäisessä sprintissä, koska lokituksen lisääminen jälkikäteen ohjaajaan, joka on rakennettu tuntumaan näkymättömältä, on uudelleenkirjoitus.

## Testaa sitä keskustelussa, ei yhdessä vuorossa

[[pedagogical-safety|Pedagogisen turvallisuuden]] synteesi esittää, että tavanomainen turvallisuustestaus ei riitä koulutukseen. Järjestelmä voi välttää myrkyllisen sisällön ja silti aiheuttaa haittaa paljastamalla vastauksia liikaa, vahvistamalla [[misconceptions|virhekäsityksiä]], tukahduttamalla pohdintaa, edistämällä riippuvuutta tai ajautumalla pois opetuksellisista tavoitteista.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]]-[[benchmark|vertailumittaristo]] antaa tälle luvut. Jokaisessa testatussa mallissa, 3,8B avoimen painon malleista GPT-5-mini-malliin, [[pedagogy|pedagoginen]] haitta oli yleismaailmallinen, koko ei parantanut turvallisuutta luotettavasti, ja epäonnistumisasteet nousivat 17,7 %:sta yhden vuoron vuorovaikutuksissa 77,8 %:iin monivuoroisissa keskusteluissa. Rikkomusten kaavat vaihtelivat oppiaineittain. Sen 11-ulotteinen, 48 alariskin taksonomia kattaa kognitiiviset, epistemiset, [[metacognition|metakognitiiviset]], [[motivation|motivationaalis-affektiiviset]], kehitykselliset ja yhdenvertaisuusluokat sekä opetuksen yhdenmukaisuuden luokat, ja se toimii sekä suunnittelun tarkistuslistana että testisarjana.

Lue eskalaatioluku lausumana testisuunnitelmastasi. Ohjaaja, joka läpäisee tuhat yhden vuoron koetinta, voi epäonnistua neljässä keskustelussa viidestä, kun opiskelija vastustaa tai kysyy kolmannen kerran. Rakenna monivuoroinen testikehys ennen demoa.

## Perusta sisältö ja erota varmistaja

Perustaminen on arkkitehtoninen päätös. [[eduguard-safe-rag-llm-tutor|EduGuard]], turvallinen [[rag|hakuun perustuva]] ohjaaja [[cs-education|ohjelmoinnin alkeisiin]], yhdistää opettajan hyväksymän kurssihaun arkkitehtonisesti erilliseen väitteiden varmistajaan, eksplisiittiseen [[cognitive-offloading|liikakäytön]] hallintaan ja 600 kyselyn opettajan laatimaan vertailumittaristoon, joka kattaa virhekäsitykset, virheenkorjauksen, koodinvaihteiset kyselyt ja vastauksia kalastelevat vihamieliset kehotteet. Se paransi GPT-4o-mini- ja Llama-[[socratic-method|sokraattisen]] ohjaajan perustasoja.

Siirrettävä osa on erottelu: komponentit, jotka varmistavat, eivät keskustele, ja vertailumittaristo sisältää kehotteita, jotka on kirjoitettu vastausten purkamiseen eikä kohteliaisuuden tarkistamiseen. [[hallucination-risk|Hallusinaatioriski]] kattaa sen vikatilan, jota hyväksytty haku on tarkoitettu rajaamaan.

## Kohtele opiskelijan työtä epäluotettavana syötteenä

Uhkamalli, jonka useimmat suunnitteluohjeet jättävät pois, sijaitsee arvioitavan artefaktin sisällä. [[humble-prompt-injection-ai-grading-red-team-2026|Humblesin (2026) vihamielinen punaisen joukkueen arviointi]] testasi, voivatko opiskelijat manipuloida LLM-pohjaista arvioijaa palautuksiinsa upotetulla kehotteinjektiolla, ja manipulointi toimi: injektiot, jotka ohjeistavat, kehystävät uudelleen tai roolittavat arvioijan, siirtävät pistemäärää muuttamatta työtä.

Pidä arviointikriteeristö ja ohjeet opiskelijan hallitseman konteksti-ikkunan ulkopuolella, poista tai merkitse ohjeenkaltainen sisältö, älä koskaan anna palautuksen asettaa omia kriteereitään ja pidä ihmisen päätös kaikissa merkittävissä arvosanoissa. Arvioija, joka lukee ohjeensa arvioimastaan tekstistä, on antanut kriteeristön ehdokkaalle.

## Tue työtä sen sijaan että suorittaisit sen

Järjestelmä, joka vastaa, lopettaa sen ajattelun, jota varten se hankittiin. Tikettiin kuuluu kaksi osaa: yritysportti, jotta mitään tulosta ei ilmesty ennen kuin opiskelija sitoutuu johonkin, ja [[human-in-the-loop-ai|ihmisen eskalaatiopolku]], jolla on nimetty määränpää, joka luokkahuonetuotteessa tarkoittaa opettajaa, sellaisessa muodossa, jolla opettaja voi toimia. [[scaffolding|Tukeminen]] ja [[socratic-method|sokraattinen]] malli ovat tuoteversiot siitä, mitä tuntisuunnitelma tekee käsin; [[developing-ai-tutor|tekoälyohjaajan kehittäminen]] kattaa diagnosoinnin, vihjeporrastuksen ja palautteen yksityiskohtaisesti.

## Sijoita saavutettavuus ja yhdenvertaisuus määrittelyyn

Saavutettavuusvaatimukset ovat riittävän konkreettisia sprinttiin: näppäimistökäyttöisyys, ruudunlukijayhteensopivuus, tekstitykset ja litteroinnit, riittävä kontrasti, käyttökelpoiset tekstivastineet ja yhteensopivuus avustavien [[ai-technologies|teknologioiden]] kanssa. Tekoälyn tuottamat saavutettavuusominaisuudet vaativat silti laaduntarkistuksen. Katso [[accessibility|saavutettavuus]].

Yhdenvertaisuustestauksen pitäisi tutkia koko putki ja eritellä käyttäytyminen kielen, vammaisuuden, kulttuurin ja muiden olennaisten oppijapiirteiden mukaan sen sijaan, että luotettaisiin kokonaiskeskiarvoon. Järjestelmä, joka saa hyvät pisteet keskimäärin ja huonot yhdelle ryhmälle, on toimittanut epäonnistumisen sille ryhmälle. Katso [[bias-mitigation|harhan vähentäminen]] ja [[equity-in-ai-education|yhdenvertaisuus]].

## Suunnittele niiden kanssa, jotka sitä käyttävät

[[ko-hughes-vsd-student-centered-its-2026|Ko ja Hughes]] sovelsivat arvosensitiivistä suunnittelua [[intelligent-tutoring|älykkääseen tutorointijärjestelmään]] yhteisöopiston opiskelijoiden ja opettajien kanssa, ryhmän, joka on historiallisesti jätetty oppimisalustojen suunnittelun ulkopuolelle. He löysivät arvojännitteitä hallittaviksi ratkaisemisen sijaan: läpinäkyvyys vastaan tulkittavuus, [[privacy|yksityisyys]] vastaan opetuksellinen oivallus ja [[agency|opiskelijan toimijuus]] vastaan järjestelmän ohjaama [[scaffolding|tukeminen]]. Opiskelijat pitivät yhteistoiminnallisista, inhimillistetyistä selityksistä enemmän kuin raa'asta mallin läpinäkyvyydestä, ja prototyyppi koodasi 16 arvonmukaista ominaisuutta [[explainable-ai|selitettävän tekoälyn]], ihmisen silmukassa -ohjauksen ja yksityisyydenhallinnan välillä.

[[wang-teacher-ai-co-design-review-2026|Wangin, Liun ja Islamin katsaus]] 28 empiirisestä tutkimuksesta lisää sanaston työkalujen valintaan. [[generative-ai|Generatiivista tekoälyä]] käytetään pääasiassa tuntisuunnitteluun, kehotteiden tuottamiseen ja luovaan ideointiin, ja tekoäly toimii apulaisena tai sisällöntuottajana paljon useammin kuin yhteissuunnittelijana, ja mukana on neljä käyttömahdollisuutta, tehokkuus, responsiivisuus, [[creativity|luovuus]] ja [[equity-in-ai-education|yhdenvertaisuus]], joiden avulla opettajat voivat arvioida, mikä työkalu sopii mihin suunnitteluongelmaan.

Molemmat tutkimukset pitävät suunnittelua [[human-in-the-loop-ai|ihmisen silmukassa]] tapahtuvana [[human-ai-collaboration|ihmisen ja tekoälyn yhteistyönä]] ja [[usability-research|käytettävyystutkimuksena]] eikä tiedotuksena. Molemmat havaitsivat, että sidosryhmät nostivat esiin vaatimuksia, joita mikään tarkkuusvertailumittaristo ei tavoittaisi, ja se on käytännön argumentti istuntojen maksamisen puolesta: vaatimukset, jotka muuten kohtaisit vasta pilotissa.

## Mitä suunnittelutiimit tekevät väärin

Turvallisuus tarkoittaa sisällön moderointia. Haitta saapuu koulutuksellisessa tuotteessa usein hyödyllisenä vastauksena väärällä hetkellä. SafeTutors löysi pedagogista haittaa jokaisesta testatusta mallista ja epäonnistumisen nousevan 77,8 %:iin keskustelun aikana, eikä se ole luokka, jonka näkemiseen sisältösuodattimet on rakennettu.

Isompi malli korjaa pedagogiikan. Koko ei parantanut turvallisuutta luotettavasti vaihteluvälillä 3,8B avoimen painon malleista GPT-5-mini-malliin.

Hyvä hakemisto tarkoittaa, että sisältö on hoidettu. EduGuard yhdistää haun erilliseen varmistajaan ja testaa vihamielisiä, vastauksia kalastelevia kehotteita, koska perustettu hakukin jättää polun liialliseen paljastamiseen.

Opettaja on varavaihtoehto. Kaikki kuusi suunnittelututkimuksen opettajaa pyysi lokitusta, hälytyksiä ja ohitusta ammatillisen vastuun ehtona. Tukipyyntö ei ole ohitus.

Saavutettavuus on myöhempi tiketti. Se on määrittelyssä tai siitä tulee uudelleenkirjoitus, ja tuotetut vaihtoehtotekstit ja tekstitykset vaativat silti ihmisen tarkistuksen.

## Mitä sinulle vastataan

**”Emme voi rakentaa arviointikehystä ennen julkaisua.”** Rakenna pieni. Ensimmäinen väite, jonka tarvitset, on se, mitä viiden vuoron aikana tapahtuu. Ota 40 todellista opetussuunnitelman kysymystä, aja jokainen viiden vuoron keskusteluna opiskelijan kanssa, joka vastustaa vihjettä, ja pisteytä 11 ulottuvuuden mukaan. Se on puolustettava turvallisuusosio ja se mahtuu sprinttiin.

**”Opettajat haluavat muokata kehotteita, emme voi taata, mitä he kirjoittavat.”** Kavenna sitten pintaa, jota he muokkaavat. Järjestelmäkehote jää sinulle; tavoitteet, hyväksytty sisältö, vihjeporras ja eskalaatiokontakti ovat heidän. Rajatun asiantuntijan arkkitehtuuri on olemassa juuri siksi, että konfiguraatio pysyy testattavissa olevan laajuuden sisällä.

**”Vertailumittaristomme pisteet ovat korkeat.”** Tarkkuus yhden vuoron vastauksissa ei ennusta käyttäytymistä keskustelun aikana, ja toista asiaa mittaava vertailumittaristo löysi 77,8 %:n epäonnistumisen monivuoroisissa asetelmissa jokaisessa testatussa mallissa. Raportoi molemmat luvut, tai ensimmäinen luetaan toiseksi.

**”Täysi lokitus on yksityisyysongelma.”** On, ja se vaatii käyttötarkoituksen rajaamista eikä puuttumista. Lokita se, mihin opettajan täytyy voida reagoida, minimoi muu, rajaa pääsyä ja kerro tuotteessa, mitä säilytetään ja kuinka kauan.

## Mitä tehdä tällä viikolla

**1.** Kirjoita valtaraja yhdelle sivulle: mitä järjestelmä päättää, mitä opettaja päättää ja minkä puolustaisit hankintakatselmuksessa.

**2.** Muunna 11 ulottuvuuden taksonomia testisuunnitelmaksi ja aja se monivuoroisena 40 todellisella kysymyksellä yhdeltä kurssilta.

**3.** Erota varmistaja generaattorista suunnitteludokumentissa, vaikka ensimmäinen versio ajaisi ne yhdessä prosessissa.

**4.** Lisää yritysportti, eskalaation määränpää ja opettajan ohitus työjonoon nimillä varustettuna.

**5.** Sijoita saavutettavuuslista ja yksi erittelyvaatimus tämän julkaisun hyväksymiskriteereihin.

## Minne seuraavaksi

[[developing-ai-tutor|Tekoälyohjaajan kehittäminen]] kattaa rakentamisen ja [[designing-ai-into-learning|tekoälyn suunnitteleminen oppimiseen]] kattaa sen ympärillä olevat pedagogiset oletusarvot. Siitä, toimiiko asia käyttöönoton jälkeen, katso [[checking-whether-educational-ai-works|toimiiko koulutuksellinen tekoäly]]; testisuunnitelman taustalla olevista turvallisuuskäsitteistä [[pedagogical-safety|pedagoginen turvallisuus]] ja [[hallucination-risk|hallusinaatioriski]]; hankintakontekstista [[legal-issues-and-risks|oikeudelliset kysymykset ja riskit]].
