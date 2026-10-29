---
title: "Miten saamme simuloidun oppilaan käyttäytymään kuin todellinen oppija?"
created: "2026-10-02T08:36:18-04:00"
weight: 71
type: faq
connected_faqs: [checking-whether-educational-ai-works, addressing-common-misconceptions-ai-education, making-ai-better-at-supporting-learning]
foundations: [ai-education, agentic-ai]
pedagogy: [scaffolding, misconceptions]
technology: [simulating-students, student-modeling, knowledge-tracing, llm, generative-ai]
audience: [educational technology developers, software developers, researchers, instructors]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/making-simulated-students-behave-like-learners
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

Sinulla on demo torstaina. Siinä oleva simuloitu oppilas epäonnistuu murtolukutehtävässä, saa yhden vihjeen ja tuottaa sitten oikean vastauksen oikealla selityksellä. Joku huoneessa kysyy, miksi vaikeuksissa oleva oppija tekisi niin, eikä sinulla ole vastausta.

Ennen seuraavaa demoa tarvitset tämän verran suoraa puhetta: mallin kehottaminen esittämään oppilasta tuottaa oppijan äänen. Käyttäytymisen tuottaa rajoite siinä, mitä simulaattori tietää, rakenne vuoroissa ja validointi todellisten oppijoiden aineistoja vasten. Vain 3 % oppijoita simuloivista tutkimuksista validoi simulaattorinsa käytön jälkeen, joten kukaan ei tarkista tätä puolestasi.

## Lyhyt versio

**1.** Kirjoita muistiin, keitä oppijoita et simuloi, ja laita se lause sinne, missä käyttäjäsi lukevat sen.

**2.** Testaa uskomustila, älä proosaa. Kysy, mitä simulaattori sanoo korjauksen jälkeen.

**3.** Rajoita tietämystä tarkoituksella: määrittele episteeminen tila tai poista tietämys.

**4.** Käsikirjoita vuorovaikutus vuoro vuorolta. Parempi persoonakehote ei korjaa ajautumista.

**5.** Pisteytä käyttäytymisuskollisuus ja ohjausherkkyys erikseen, todellisten oppija-aineistojen pohjalta.

## Päätä, mihin kysymykseen simulaattori vastaa

Kolme tehtävää litistetään käsitteen ”simuloitu oppilas” alle, ja ne tarvitsevat eri koneiston. Opettajan tai ohjaajan harjoittaminen tarvitsee kumppanin, joka käyttäytyy uskottavasti paineen alla. Sen auditoiminen, miten tekoäly kohtelee erilaisia oppijaprofiileja, tarvitsee kattavuutta niistä profiileista, joista välität. Kurssin tulosten ennustaminen tarvitsee oppijoiden jakaumaa eikä yhtä vakuuttavaa yksilöä. Ensimmäiseen tehtävään rakennettu simulaattori tuottaa pettymyksen kolmannessa, ja alla oleva näyttö pitää ne jatkuvasti erillään.

## Nimeä oppijat, joita et kata

Hyödyllisin löydös kenelle tahansa, joka on aikeissa luottaa simulaattoriin, koskee kattavuutta. Kaksitoista opettajaa, jotka ohjasivat LLM-oppilaita, raportoivat liian monimutkaisesta kielestä, puuttuvasta emootiosta, luonnottoman tarkkaavaisuudesta ja selittämättömistä tietämyksen hypyistä, ja simulaatiot edustivat vain yhtä neljästä todellisen oppilaskäyttäytymisen neljänneksestä ([[llm-student-simulation-teacher-insights|Martynova ym., 2026]]). Se neljännes, jonka ne kattoivat, oli helpoin simuloida.

Tällä on väliä, koska lähes kukaan ei tarkista. Vain 3 % oppijoita simuloivista tutkimuksista validoi simulaattorinsa käytön jälkeen. Jos rakennat sellaisen ja jätät validoinnin väliin, olet valtaavassa enemmistössä, ja olet myös syy siihen, että tuo tilasto pysyy siteerattavana.

## Rajoita sitä, mitä simulaattori tietää

Kyvykäs malli ei helposti teeskentele osittaista tietäjää. Tutkimus kutsuu tätä **kompetenssiparadoksiksi**: laajasti kyvykkäät mallit, joita pyydetään jäljittelemään osittain tietäviä oppijoita, tuottavat epärealistisia virhekuvioita ja oppimisdynamiikkaa.

Ajautumisella on suunta, ja se osoittaa niihin oppijoihin, joita eniten tarvitsee simuloida. Vastaan 49 NGSS:n mukaisesta tiedeoppitunnista poimittuja oppilasideoita kuusi mallia piti useimmat ideat odotetun tietämyksen laajuuden sisällä ja noin kaksi kolmasosaa tavoitelukutason tasolla tai sen alapuolella, ja ylitti sitten juuri siellä, missä oppija oli nuorin. Alakoulun ja yläkoulun ideat ylittivät useammin tavoitellun luokka-asteen tietämyksen laajuuden ja lukutason, ja aineisto nojasi laajempaan päättelyyn, teknisempään sanastoon ja harvempiin epävarmuuden merkkeihin (”ehkä”, ”näyttää siltä”) kuin todelliset oppitunti-ideat ([[llm-simulating-student-scientific-thinking-2026|Nguyen ja Cao, 2026]]).

Kaksi huomiota tuosta tutkimuksesta. Mallin valinta ei ole yksidimensionaalista, koska järjestelmä, joka osuu oppitunti-ideoihin tarkasti, voi silti kohottaa ne yli luokka-asteen. Ja korjaus on usein ohjeellinen: eksplisiittinen luokka-astetason uudelleenkehote nosti useimmat mallit takaisin haarukkaan.

## Määrittele tila tai ota tietämys pois

Jos malli tietää liikaa, voit nimetä tilan, jossa sen pitäisi olla, tai vähentää tietämyksen, jota sillä ei pitäisi olla.

**Ehdonna episteeminen tila.** Kouluttamaton kehys rakentaa kunkin oppilaan kognitiivisen prototyypin [[knowledge-graph|tietämysgraafista]] ja pisteyttää beam-haun ehdokkaat sitä vasten, raportoiden 100 %:n parannuksen simulaatiotarkkuudessa ([[simulating-students-diverse-cognitive-levels-2025|Wu ym., 2025]]). Sen laatu nousee oppilaan kognitiivisen tason myötä, joten heikommat oppijat jäävät vaikeammaksi tapaukseksi, mikä on harmillista ottaen huomioon, että he ovat yleensä se, mistä on kyse. Kognitiivisen dynamiikan mallintaminen staattisen persoonan sijaan menee pidemmälle: CogEvolutionin ICAP-pohjaiset tilapäivitykset ylsivät arvoon R²LC = 0,92, kun staattiset agentit yltävät arvoon 0,45, ja romahtivat arvoon 0,58 ilman ICAP-moduulia ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang ym., 2026]]).

**Poista tietämys.** 16 kohdennetun tietämyskomponentin vaimentaminen Mistral-7B:ssä pudotti tarkkuuden noin 0,75:stä 10 %:n unohtamissuhteella alle 0,5:een 40 %:lla, kun perusmalli pysyi noin 0,85:ssä. Vaimennettu tietämys osoittautui palautettavaksi valvotun uudelleenoppimisen ja ohjaajavetoisen dialogin kautta ([[simulating-novice-students-machine-unlearning-2026|Song, Guo & Lin, 2026]]). Tämä on lähimpänä noviisin valmistamista suoraan, ja palautettavuudesta tulee ominaisuus, jos haluat simulaattorin oppivan istunnon aikana.

## Käsikirjoita vuorot, älä persoona

Persoonan pysyvyys osoittautuu vuorovaikutuksen suunnittelun ongelmaksi eikä mallin valinnaksi. Kun viisi LLM:ää risteytettiin kolmen kehotemallin ja neljän ADHD-voimakkuuden persoonan kanssa, käsikirjoitetut tehtäväankkuroidut vuorovaikutukset poistivat havainnoijan arvioiman käyttäytymisen ajautumisen, jopa 97 %:sti käsikirjoittamatonta dialogia vasten. Ilman eksplisiittisiä persoonaohjeita oppilasedustuksen lähtötaso vinoutui kohti korkeita ADHD-oireita ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase & Leins, 2026]]).

Jos simulaattorisi ajautuu, katso, mitä pyydät sitä tekemään vuoro vuorolta, ennen kuin vaihdat mallia tai kirjoitat uudelleen oppilaan kuvauksen.

## Pisteytä kahta asiaa, ei yhtä

StudentSim edellyttää kahden ominaisuuden pysyvän yhdessä: **käyttäytymisuskollisuuden**, eli miten hyvin simulaattori osuu oppilaan omiin vastauksiin, ja **ohjausherkkyyden**, eli miten luotettavasti se päivittyy sinne, minne ohjaajan ohjaus johtaa. Sen vertailumittari muotoilee julkiset oppija-aineistot (shakki, englanti toisena kielenä -kirjoittaminen, matematiikka) oppilaskohtaiseksi protokollaksi, jolla mikä tahansa simulaattori sovitetaan ja pisteytetään pidätetyillä aineistoilla. Alakohtainen tilanseuranta osoittautui heikoksi herkkyydessä, ja pelkkään kehotteeseen nojaava LLM-roolipeli osoittautui heikoksi uskollisuudessa ([[studentsim-llm-student-simulators|Yang ym., 2026]]). Simulaattori voi läpäistä toisen testin ja epäonnistua toisessa, joten raportoi molemmat.

Konseptinäytteenä jäädytetty StudentSim palkkiona shakkiohjaajan [[reinforcement-learning|vahvistusoppimisen]] silmukassa tuotti ohjaajia, jotka asiantuntijat arvioivat tarkemmiksi, paremmin ohjaaviksi ja yksilöllisemmiksi kuin ne, joita oli koulutettu huippuluokan LLM-simulaattorin palkkiota vasten tai ilman vahvistusoppimista lainkaan. Hyvä simulaattori voi olla harjoitussignaali yhtä lailla kuin mittari.

Toimintatason uskollisuudella on oma rajansa. Oppilassimulaattorit toistavat havaittavia toimintoja ilman niiden taustalla olevaa piilevää päättelyä, ja [[inside-llm-student-simulator-reasoning-2026|INSIDE]] hienosäätää malleja tuottamaan sisäisen dialogin ennen jokaista toimintoa, yltäen korkeimpaan yhteensopivuuteen tuotetun päättelyn ja todellisten koodimuokkausten välillä, 51,8 %:iin tutuissa tehtävissä ja 57,9 %:iin näkemättömissä, menettämättä toimintauskollisuutta (Niousha ym., 2026). Jos sinua kiinnostaa, miksi simuloitu oppilaasi teki jotain, toiminnon vastaavuus ei riitä.

## Validoi todellisia oppijoita vasten ja raportoi lähtötaso

Kaksi vertailua näyttävät, mitä validointi maksaa.

Yhdeksän simulaatiomenetelmän vertailu seitsemää viitepohjaista mittaria vasten 382 pidätetyllä dialogilla suurimmasta julkisesta todellisten oppilas-ohjaaja-dialogien matematiikka-aineistosta: kehotteet hävisivät hienosäädölle dialogiteoissa (0,4998 vastaan 0,6840), ROUGE-L:ssä (0,1648 vastaan 0,3212) ja kosinivastaavuudessa (0,5460 vastaan 0,7390). Testatuista menetelmistä paras, preferenssioptimointi 8B-mallissa, voitti valvotun hienosäädön vain marginaalisesti ja oli heikompi virheissä, ja kolmen ohjaajan ihmisarvio toisti saman järjestyksen ([[simulated-students-tutoring-dialogues-2026|Scarlatos ym., 2026]]). Tämän tikapuun huippu on lähellä keskikohtaa, joten raportoimasi lähtötaso ratkaisee, miten vaikuttavalta oma lukusi näyttää.

SWIM on selkein vertailu kehotteista, hienosäädöstä ja vahvistusoppimisesta, koska se pisteyttää jokaisen tuotetun esseen tavoiteominaisuusprofiilia vasten sen sijaan että arvioisi sitä vaikutelmaperusteisesti. Arviointikriteereihin nojaava kehotteistus antoi rajallista hallintaa jopa vahvoille kaupallisille malleille, parhaan keskimääräisen ominaisuuden QWK:n ollessa 0,577 (Claude Sonnet) ja 0,422 (GPT-5.4), ja lähellä nollaa avoimelle 7B-mallille. Valvottu hienosäätö todellisilla pistemäärä-essee-pareilla ylsi 0,474 ± 0,023:een tuolle 7B-mallille. GRPO automaattisen esseescoretyksen johdetulla palkkiolla ylsi 0,618 ± 0,005:een, ja hyödyt pitivät kahdella riippumattomalla pisteyttäjällä, joita vasten politiikkaa ei koskaan koulutettu ([[swim-student-writing-simulation-2026]]).

Kehotteistus tuotti myös ihannoidun populaation eikä realistista: keskimääräinen normalisoitu kokonaispistemäärä 0,74 vastaan todellisten oppilaiden 0,58, ja mediaanipituus 304 sanaa vastaan 167. Koulutetut mallit palauttivat ihmisten pistemäärä- ja pituusjakaumat ilman mitään pituusohjausta. Yksi asia pysyi vaikeana: aito heikon osaamisen muoto. Koulutetut mallit palauttivat syntaksin mutta kirjoittivat liian vähän oikeinkirjoitus- ja kielioppivirheitä, kun taas kehotteistus simuloi heikkoutta pinnallisella turmelemisella, kirjoitusvirheillä, joita oli ripoteltu muuten asiantuntevaan proosaan.

Pintarealismi on heikko testi molempiin suuntiin. Sokkoutetussa tutkimuksessa asiantuntija-annotoijat luokittelivat 164 palautusta 196:sta (83,7 %) LLM:n tuottamasta Java-palautuksesta ihmisen kirjoittamiksi, koska virheet olivat toiminnallisesti erottamattomia aidoista, ja yhteensopivuus todellisten virheiden kanssa putosi sitten tehtävän vaikeutuessa ([[simulating-students-java-programming-errors-llms|Keramati ym., 2026]]). Seitsemässä mallissa 4B:n ja 120B:n parametrin välillä simulaattorit kääntyivät oikeaan vastaukseen lähes yhtä suurilla osuuksilla riippumatta saamastaan palautteesta, joten tuotoksen samankaltaisuus ei kerro mitään sen takana olevasta uskomustilasta. Harjoittelu **Selective Flip Score** -mittaria vasten nosti uskollisuutta jopa +0,56 ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar & Sachan, 2026]]).

## Tarkista, riittäisikö kuvaus

Ennen kuin rakennat kohortin, tarkista halvempi vaihtoehto. Verkko-oppimiskokemuksen arvioimiseen ennen kuin oppilaat sitoutuvat siihen, keskeyttämisen ja loppuun saattamisen ennustamiseen ja suunnittelupalautteen antamiseen yksi ”kuvaileva” verkkoagentti, joka käy oppitunnin läpi ja tuottaa rikkaan kuvauksen kokemuksesta, päihitti oppilaspopulaation suoran simuloinnin.

Tuon vertailun simuloidut oppilaat osoittivat paljon kapeampaa käyttäytymisen kirjoa kuin todelliset oppijat: sadalla agentilla viidellä testitunnilla ne toistivat vain noin 4 % niistä poluista, joita todelliset oppilaat kulkivat, samalla kun ne maksoivat huomattavasti enemmän laskentatehoa. Kuvaile ja ennusta -putki saavutti parhaan keskeyttämisjakauman ennusteen massiivisella globaalilla CS1-kurssilla, keskimääräisellä JSD:llä 0,060 ([[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech, 2025]]).

Sen vetämä raja on käytännöllinen. Oppilaiden jakauman simulointi voi olla tarpeetonta tai haitallista, kun tavoite on tuloksen ennustaminen tai suunnittelukritiikki. Simulointi ansaitsee kustannuksensa, kun aidolla oppijoiden vaihtelulla on väliä, kuten auditoitaessa tekoälyn kohtelua erilaisia profiileja kohtaan tai annettaessa opettajalle jotain, mitä vasten harjoitella.

## Missä rakentajat menevät tässä pieleen

Pintarealismi on tavoite. 83,7 %:n virheluokittelusuhde koneen kirjoittamalle koodille ja lähes tasainen vastauksen kääntyminen seitsemässä mallissa sanovat molemmat, että tuotosta lukeva ihmisarvioija ei näe sitä ominaisuutta, jota väität. Testaa sen sijaan vastausta korjaukseen.

Parempi persoonakehote korjaa ajautumisen. Käsikirjoitetut tehtäväankkuroidut vuorot leikkasivat havainnoijan arvioimaa ajautumista jopa 97 %:lla viidessä mallissa ja kolmessa kehotemallissa. Vuorojen suunnittelu teki työn.

Vahvempi perusmalli sulkee kompetenssiaukon. Vahva kaupallinen malli sai ominaisuuden QWK:ksi 0,422 kehotteistuksella, kun hienosäädetty 7B ylsi 0,474:ään, ja sama kuuden mallin vertailu ylitti pahimmin nuorimmilla luokka-asteilla. Mallin valinta vaihtaa yhtä uskollisuuden akselia toiseen.

Validointi tarkoittaa, että kollega luki litteraation ja ajatteli sen kuulostavan oikealta. Java-tulos näyttää, miten pitkälle tuo arvio kantaa. Validointi tarkoittaa pidätettyjä aineistoja todellisista oppijoista ja lähtötasoa, jonka voit nimetä.

Populaation simulointi on perusteellinen vaihtoehto. Sadalla agentilla simulaatiot kattoivat noin 4 % poluista, joita todelliset oppilaat kulkivat, huomattavasti korkeammalla laskentateholla kuin kuvaileva agentti.

## Mitä vastaväitteitä sinulle esitetään

**”Opettajat eivät erottaneet simulaattoriamme oppilaasta.”** Sokkoutetussa Java-tutkimuksessa asiantuntija-annotoijat luokittelivat 83,7 % konepalautuksista ihmisen tekemiksi. Se mittaa annotoijia, ja se jättää uskomustilan tutkimatta.

**”Hienosäätö on tiimimme ulottumattomissa.”** Rajaa silloin väite siihen, mitä kehotteistus tukee, ja sano se. Kehotteistus asetti katon 0,577:ään vahvimmalle testatulle mallille ja lähelle nollaa avoimelle 7B:lle, ja se tuotti ihannoidun pistemääräjakauman.

**”Meillä ei ole pääsyä todelliseen oppija-aineistoon.”** StudentSimin protokolla on rakennettu julkisista oppija-aineistoista shakissa, toisen kielen kirjoittamisessa ja matematiikassa. Julkinen aineisto rajaa sitä, mitä voit väittää omasta populaatiostasi, ja se antaa sinulle lähtötason, joka on se asia, jonka useimmat raportit jättävät pois.

**”GRPO voitti valvotun hienosäädön, joten meidän pitäisi kouluttaa vahvistusoppimisella.”** Se voitti, arvolla 0,618 vastaan 0,474. Heikon osaamisen muoto pysyi vaikeana molemmissa tapauksissa, oikeinkirjoitus- ja kielioppivirheitä oli liian vähän, ja erillisessä vertailussa preferenssioptimointi voitti hienosäädön vain marginaalisesti ja hävisi virheissä. Tarkista, mistä ominaisuudesta käyttötapauksesi riippuu.

**”Heikoimmat oppijat ovat pieni siivu käyttäjistämme.”** He ovat vaikein tapaus jokaiselle tämän sivun menetelmälle, ja kattavuuslöydös sanoo, että simulaatiot keskittyvät helpoimpaan neljännekseen. Jos simulaattoriasi käytetään johtopäätöksiin vaikeuksissa olevista oppilaista, tuo aukko kuuluu kirjoitelmaan.

## Mitä tehdä tällä viikolla

**1.** Kirjoita kattavuuslause: keitä oppijoita tämä simulaattori ei edusta. Laita se README-tiedostoon ja demon muistiinpanoihin.

**2.** Lisää testisarjaasi yksi koe, joka korjaa simulaattoria ja tarkistaa, pysyykö se väärässä.

**3.** Korvaa vapaamuotoinen persoonachat yhdessä työnkulussa tehtäväankkuroiduilla vuoroilla ja vertaa ajautumista.

**4.** Pisteytä yksi olemassa oleva simulaattori pidätettyjä todellisia aineistoja vasten sekä uskollisuudessa että herkkyydessä, ja raportoi kaksi lukua erikseen.

**5.** Aja kuvailevan agentin tarkistus siihen kysymykseen, johon oikeasti tarvitset vastauksen ennen kuin rahoitat kohortin.

## Mihin mennä seuraavaksi

[[simulating-students|Simuloitu oppilas]] on täysi käsitesivu. [[checking-whether-educational-ai-works|Sen tarkistaminen, toimiiko koulutustekoäly]] kattaa niiden järjestelmien arvioinnin, joita testaat simulaattoria vasten, ja [[making-ai-better-at-supporting-learning|Tekoälyn parantaminen oppimisen tukemisessa]] kattaa ne harjoitusmenetelmät, jotka ovat tässä mainittujen hienosäätötulosten takana. [[addressing-common-misconceptions-ai-education|Yleisten väärinkäsitysten käsitteleminen tekoälykasvatuksessa]] ottaa esille sen, voivatko simuloidut oppilaat seisoa todellisten oppijoiden sijasta tutkimuksessa.
