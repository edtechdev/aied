---
title: "Mitkä ovat parhaat käytännöt kirjoitusopetuksessa tekoälyn kontekstissa?"
created: "2026-09-12T08:13:03-04:00"
connected_faqs: [ai-feedback-at-scale, redesign-assessment-ai-era, addressing-common-misconceptions-ai-education]
foundations: [academic-integrity, cognitive-offloading]
assessment: [ai-feedback-quality, assessment-validity, evaluative-judgment, feedback-literacy, peer-assessment]
ethics: [ai-use-disclosure, multilingual-learning]
weight: 80
audience: [instructors, instructional designers]
discipline: [engineering education, humanities education, writing education]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/writing-instruction-ai-best-practices
source_updated: "2026-10-28T11:14:24-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Olet uudistamassa tehtävämonistetta, ja edessäsi oleva lause sanoo, että tekoäly on sallittu maininnalla, mikä ei kerro opiskelijalle yhtään mitään siitä, saako työkalu tuottaa itse argumentin. Kollega on ehdottanut koko kurssia koskevaa kieltoa, ja epäilet, että se osuu kovimmin niihin monikielisiin kirjoittajiin, jotka istuvat samassa luokassa. Tai joukko esseitä palasi sujuvampina kuin niiden takana ollut seminaarikeskustelu, ja tarvitset säännön, jonka voit perustella seuraavassa opetussuunnitelmakokouksessa.

Ydinajatus: nimeä se älyllinen työ, jota varten tehtävä on olemassa, pidä se vaihe opiskelijalla ja anna työkalulle tehtäviä, joiden tuotosta opiskelijan on pakko arvioida. Näin kirjoitettu sääntö kertoo opiskelijalle, mitä vaihetta se suojaa.

## Lyhyt versio

**1.** Kirjoita yksi lause, joka nimeää sen ajattelun, jota tehtävässä arvioidaan, ja sijoita se sinne, mistä opiskelijat sen lukevat.

**2.** Vaadi, että opiskelija sitoutuu väitteeseen, tulkintaan tai karkeaan luonnokseen ennen kuin työkalu näkee tehtävän.

**3.** Aseta raja vaihe kerrallaan. Salli tekoäly siellä, missä vaihe ei ole se, mitä arvioit, ja rajoita sitä siellä, missä on.

**4.** Anna tekoälylle kriitikon tuoli ja arvioi sitten se, mitä opiskelija tekee vastauksella.

**5.** Pidä yksi kirjoitus, johon työkalu ei koskaan koske, ja lue tuettu työ sitä vasten.

**6.** Kerro etukäteen, mitä ilmoittaminen tekee arvosanalle.

## Nimeä se ajattelu, jota tehtävä on tarkoitettu osoittamaan

Tekoälyraja on toinen kysymys, ja useimmat tehtävämonisteet vastaavat siihen ensimmäisenä. Ennen kuin päätät, mikä on sallittua, täydennä tämä lause: tämä tehtävä on olemassa osoittaakseen, että opiskelija osaa X:n. Jos X on argumentointi, opiskelijan on muotoiltava ja puolustettava väite. Jos X on alakohtainen tulkinta, opiskelijan on tehtävä tulkinnallinen ratkaisu. Jos X on tieteellinen päättely, opiskelijan on yhdistettävä todistusaineisto johtopäätökseen. Tekoäly, joka tekee tuon työn, rikkoo sen päätelmän, jonka haluat esseestä tehdä, eikä erinomainen proosa korjaa sitä. [[assessment-validity|Arvioinnin validiteetti]] käsittelee tätä validiteettiongelmana eikä käytösongelmana, minkä vuoksi sekä [[writing-education|kirjoitusopetus]] että [[academic-integrity|akateeminen rehellisyys]] päätyvät molemmat vaatimaan tehtäväkohtaisia sääntöjä koko kurssia koskevien kieltojen sijaan.

[[nash-preservice-teachers-classroom-ai-policies-2026|Nash ja Burriss]] osoittavat, miten helposti lause menee pieleen. 27 [[teacher-education|opettajankoulutuksessa olevan]] englannin opettajan luokkakohtaisissa [[educational-policy-ai|tekoälypolitiikoissa]] 22 salli tekoälyn ideointiin ja aivoriiheen, 22 kielsi tai jätti epäselväksi tekoälyn käytön lauseiden, kappaleiden tai esseiden tuottamiseen ja 22 ei sanonut lukemisesta yhtään mitään. Samat opettajat kuvasivat ideoinnin ja muokkauksen ”ajatteluksi” mutta sijoittivat varsinaisen ajattelun lopulliseen kirjalliseen tekstiin. Jos ajattelu kulkee suunnittelun, luonnostelun, muokkauksen ja arvioinnin läpi, politiikka, joka vartioi vain viimeistä tuotetta, vartioi väärää vaihetta, ja lukeminen tarvitsee yhtä eksplisiittisen säännön kuin kirjoittaminen.

Kirjoita sääntö siis lauseena yhdestä vaiheesta: ”Saat käyttää tekoälyä jo tekemäsi väitteen vastaväitteiden testaamiseen. Et saa käyttää sitä väitteen tai sen todistusaineiston tuottamiseen.” Opiskelija voi toimia tuon mukaan. ”Tekoäly sallittu maininnalla” ei anna hänelle mitään, mihin toimia.

## Anna opiskelijan sitoutua ennen kuin työkalu vastaa

Toimintojen järjestys on tämän kirjallisuuden hyödyllisin suunnitteluvalinta. [[layer-sensitive-cognitive-offloading-writing-2026|Chenin kerrosherkkä tutkimus]] 168 perustutkinto-opiskelijasta kuudessa kokonaisessa luokassa erotteli neljä delegoinnin lajia: pinnallisen, rakenteellisen, ideatason ja päättelytason siirtokuormituksen. Avoin yhteistyö tekoälyn kanssa tuotti vahvimman tekoälyavusteisen kirjoittamisen ja heikoimman myöhemmän itsenäisen suoriutumisen. Päättelyn delegoiminen oli se kerros, joka oli voimakkaimmin negatiivisesti yhteydessä itsenäiseen [[critical-thinking|korkeamman tason ajatteluun]]. Rajattu ehto, joka rajoitti sitä, mitä opiskelijat saivat delegoida, ja vaati heitä selittämään, miten he olivat hyväksyneet, muokanneet tai hylänneet kunkin tekoälyehdotuksen, pärjäsi paremmin itsenäisessä kirjoittamisessa, argumentin syvyydessä ja muokkauksessa.

Suhtaudu kausaaliväitteeseen varoen. Tutkimus on kvasikokeellinen, kuusi kokonaista luokkaa eikä opiskelijoiden satunnaistamista, joten luokkien väliset erot pysyvät sekoittuneina käsittelyyn. Suunta sopii laajempaan [[cognitive-offloading|kognitiivisen siirtokuormituksen]] kirjallisuuteen, minkä vuoksi siihen kannattaa reagoida, mutta vaikutuksen kokoa ei kannata siteerata lautakunnalle.

Monisteella se maksaa yhden rivin: opiskelija tuo tulkinnan, hypoteesin, argumentin tai analyysin, ja tekoälyä pyydetään hyökkäämään sen kimppuun. ”Tässä on kolme vastaväitettä argumentilleni” pitää ajattelun kirjoittajalla. ”Kirjoita argumenttini” ei pidä, riippumatta siitä, mitä opiskelija tekee tuotoksella jälkeenpäin.

## Kohtele ensimmäistä luonnosta kalliina vaiheena

Apu eri vaiheissa tekee erilaista vahinkoa. Tutkimuksessa, jossa oli 253 kirjoittajaa, mikä tahansa tekoälyapu vähensi koettua omistajuutta työstä, luonnosteluapu vähensi sitä eniten ja suunnitteluapu vähiten. Mitä enemmän tekoälyn tuottamaa tekstiä ja ideoita, sitä parempi esseen laatu ja sitä matalampi omistajuus samassa palautuksessa ([[ai-writing-support-stage-ownership-2026|omistajuustutkimus suunnittelusta muokkaukseen]]). Juuri tuon yhdistelmän ympärille kannattaa suunnitella: vahvempi essee ja heikompi kokemus kirjoittajuudesta saapuvat yhdessä, ja jälkimmäinen on se, minkä varassa [[agency|toimijuus]] kirjoittamisessa lepää.

Jos kirjoittajuus on kurssillasi tärkeää, jaa luvat. Tekoäly, joka virittää suunnittelua, kysyy, mitä todistusaineistoa opiskelijalla jo on, tai nimeää vasta-argumentin, jonka opiskelija on ohittanut, on puolustettavissa lähes missä tahansa. Tekoäly, joka tuottaa kappaleita, on vaikea puolustaa siellä, missä kirjoittaminen itsessään on tavoitetaito. Siellä, missä kirjoittaminen ei ole tavoite, laskelma muuttuu.

## Aseta sääntö vaihe vaiheelta

Järjestys, joka kannattaa lainata, pitää tekoälyn konsultin roolissa ja jättää päättelyn opiskelijalle:

| Vaihe | Opiskelija tekee | Tekoäly saa | Kerättävä artefakti |
|---|---|---|---|
| **1. Kohtaa todistusaineisto** | Lue, havainnoi, merkitse, laske, suorita koe | Ei mitään tai vain selvennyksiä | Muistiinpanot, merkinnät, havainnot |
| **2. Muodosta kanta** | Tuota tulkinta, kysymys, hypoteesi, väite | Esitä kysymyksiä, haasta oletuksia | Väite- tai hypoteesimuistio |
| **3. Suunnittele** | Päätä todistusaineistosta, järjestyksestä, yleisöstä, genrestä | Arvioi jäsennystä, ehdota vaihtoehtoja | Jäsennys perusteluineen |
| **4. Luonnostele** | Tuota sisällöllistä proosaa ja päättelyä | Rajoitetusti oppimistavoitteen mukaan | Luonnos ja versiohistoria |
| **5. Ihmispalaute** | Anna ja vastaanota vertais- tai opettajapalautetta | Ei mitään tarpeellista | Vertaiskommentit |
| **6. Tekoälypalaute** | Pyydä kriteeriperusteista kritiikkiä | Kriitikko, lukija, vasta-argumenttien tuottaja, selkeyden tarkistaja | Tekoälypalautteen litteraatti |
| **7. Arvioi palaute** | Vertaa vertaisten, opettajan ja tekoälyn ehdotuksia, hyväksy tai hylkää perustellen | Sen tuotos on nyt arvioinnin kohde | Palautepäätöksen muistio |
| **8. Muokkaa** | Tee ja perustele sisällölliset muutokset | Testaa selkeyttä, tarjoa vaihtoehtoja | Muokkaus |
| **9. Varmista** | Tarkista jokainen faktaväite tai lähteestä riippuva väite | Ei voi varmistaa omaa tuotostaan | Lähteet ja todistusaineisto |
| **10. Reflektoi ja ilmoita** | Selitä tekoälyn rooli ja se, mikä ajattelussa muuttui | Ei mitään | Lyhyt prosessireflektio |
| **11. Itsenäinen tarkistus** | Selitä tai sovella päättelyä ilman tekoälyä | Ei mitään | Suullinen puolustus, pikakirjoitus, uusi tapaus |

Tämä on [[pairr-ai-peer-review-2025|PAIRR]] laajennettuna: luonnos, ihmispalaute, tekoälypalaute, vertailu, muokkaus, reflektio, sekä itsenäinen lähtötaso ja tiukempi raja päättelyn ympärillä. Käytä keskimmäistä saraketta tehtävänä ja oikeaa saraketta sen pohjana, jolle arvosana voi nojata.

Yksitoista riviä on enemmän kuin useimmat tehtävät tarvitsevat. Kutista taulukko niihin vaiheisiin, jotka voit todella erottaa luokassa: todistusaineiston kohtaaminen, kannan muodostaminen, luonnostelu ja muokkaus. Lyhyemmässä versiossa kohtaaminen ja kanta ovat ne, joissa konstrukti elää. Luonnostelu on kiistelty vaihe, ja muotoilun tai lähdetarkistuksen voi sallia suoraan. Taulukon kirjoittaminen on se, millä löydät ne kaksi tai kolme kohtaa, joissa sääntösi on sanottava jotakin, joten kolmilauseinen sääntö, jota opiskelija voi noudattaa, voittaa matriisin, jota kukaan ei lue.

## Pidä ihmispalaute mukana

Tämän sivun suurin luokkatutkimus on [[pairr-ai-peer-review-2025|PAIRR]]: 654 opiskelijaa kymmenellä kirjoituskurssilla ja kolmella kirjoitusvaltaisella [[stem-education|STEM]]-kurssilla. He luonnostelivat, tekivät [[peer-assessment|vertaisarvioinnin]], hankkivat arviointimatriisiin perustuvaa tekoälypalautetta, vertasivat ja arvioivat molempia lähteitä, kirjoittivat muokkaussuunnitelmat, muokkasivat ja reflektoivat. 58 % piti vertais- ja tekoälypalautteen yhdistelmästä. 6 % piti pelkästä tekoälypalautteesta. Opiskelijat pitivät tekoälyä hyödyllisenä laajojen, arviointimatriisiin suuntautuvien muokkausehdotusten kannalta, ja vertaiset tarjosivat kontekstuaalista tietoa ja aitoa yleisöpalautetta.

Ole täsmällinen väitteen suhteen. PAIRR mittasi opiskelijoiden kokemusta ja palautteen arviointia, ei pitkäaikaisia [[learning-gains|oppimistuloksia]], joten se on vahva näyttö palautesuunnittelusta ja heikompi näyttö siitä, että kirjoittaminen paranee kuukausia myöhemmin. Pidä vertaisvaihe mukana silloinkin, kun tekoälyvaihe on nopeampi. Suuri osa [[feedback|palautteen]] työstä tapahtuu kahden lähteen vertailussa, ja sen pudottaminen poistaa juuri sen osan, jota opiskelijat sanoivat arvostavansa.

## Arvioi se, mitä opiskelija teki palautteella

[[feedback-literacy|Palautelukutaito]] on kykyä hakea palautetta, arvioida sen laatua, hallita omaa reaktiotaan siihen ja muuttaa se muokkaukseksi. Opiskelijat, joilla sitä on enemmän, hyötyvät tekoälypalautteesta selvästi enemmän. Opiskelijat, jotka pitävät tuotosta auktoriteettina, hyötyvät vähemmän ([[ai-feedback-quality|Tekoälypalautteen laatu]]).

Lyhyt päätöstaulukko tekee tuon kyvyn näkyväksi, yksi rivi ehdotusta kohden: tekoälyehdotus, hyväksy / hylkää / muokkaa, miksi, ja arviointimatriisin kriteeri tai todistusaineisto päätöksen takana. Neljä saraketta, ei esseetä. Se muuttaa mallin tuotoksen [[evaluative-judgment|arviointikyvyn]] aineistoksi ja antaa sinulle jotain arvioitavaa, joka ei ole proosaa.

Kuvaile vahvaa riviä yhtä huolellisesti kuin kuvailet väitelausetta: se nimeää arviointimatriisin kriteerin, osoittaa kohtaan tekstissä tai todistusaineistoon ja selittää muutoksen, jonka opiskelija todella teki. Rivi, jossa sanotaan ”hyvä pointti, samaa mieltä”, ei ansaitse mitään. Opiskelijat kirjoittavat edessään olevan esimerkin mukaan, joten esimerkki on se ohje.

## Tee ilmoittamisesta halpaa ja täsmällistä

Opiskelijat salaavat tekoälyn käyttöä, kun käytännöt ovat epäselviä, rankaisevia tai leimaavia, ja rehellisyys voi herättää epäluuloa ([[ai-use-disclosure|Tekoälyn käyttö ja ilmoituslauseet]]; [[student-rationalization-ai-writing|tutkimus opiskelijoiden rationalisoinnista]]). Ilmoittamisesta tekee pedagogisesti hyödyllistä se, että se tallentaa päätöksiä: mihin työkalua käytettiin, mitä opiskelija antoi sille, mitkä ehdotukset olivat merkityksellisiä, mitä opiskelija hyväksyi tai hylkäsi.

[[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed ja Temimi]] tarjoavat mekanismin. Ilmoittamisesta tulee houkutteleva vaihtoehto vain, kun rehellisyyden hinta pysyy matalana. Tunnistimet tuottavat vääriä positiivisia myös rehellisiä opiskelijoita vastaan, joten raskaampi valvonta voi tehdä salaamisesta suhteellisesti houkuttelevampaa. Heidän neuvonsa on suunnitella sen opiskelijan varalta, jota eniten houkuttaa salata, ja lukea ilmoitettu käyttö kontekstina eikä tunnustuksena.

Kaksi yksityiskohtaa tekee suurimman osan työstä lomakkeella. Pyydä täsmällisiä käyttötapoja kategorian sijaan ja kerro, miten ilmoitus vaikuttaa arvosanaan. Opiskelija, joka ei tiedä, olettaa pahimman.

Neljä kehotetta riittää useimpiin tehtäviin: missä työn vaiheessa työkalua käytettiin, mitä opiskelija antoi sille, mitkä ehdotukset muuttivat luonnosta ja mitkä hylättiin ja miksi. Viimeinen kehote on informatiivisin, koska perusteltu hylkäys on näyttöä harkinnasta, kun taas luettelo hyväksytyistä ehdotuksista ei ole.

## Sovita sääntö siihen, mitä alallasi kutsutaan kirjoittamiseksi

### Kirjoittamisen ja tekstintuottamisen kurssit

Kirjoittamisen opettajilla on vahvin syy suojella prosessia, koska luonnostelu, retoriset ratkaisut, muokkaus, yleisötietoisuus ja oma ääni ovat oppimistavoitteita eikä niiden esittelyä. Kerää lukukauden alussa useita itsenäisiä näytteitä, jotta sekä sinä että opiskelija tiedätte, mitä kirjoittaja osaa nyt. Ota tekoäly käyttöön yleisönä, kriitikkona ja muokkauskumppanina: kysy, missä lukija kadottaa juonen, tuota väitteelle vastaväitteitä, vertaa luonnosta arviointimatriisiin, merkitse perustelemattomat väitteet, selitä, miksi kappale tuntuu epäjohdonmukaiselta. Opiskelija arvioi jokaisen ehdotuksen.

Pidä vertaisarviointi tekoälypalautteen rinnalla, koska vertaiset tarjoavat kontekstuaalista ja yleisötietoa, jota mallilta puuttuu, ja eron arvioiminen näiden kahden välillä on itsessään kirjoittajakoulutusta. Suhtaudu varovaisesti siihen, että tekoäly tuottaa pitkiä jaksoja ensimmäisestä luonnoksesta, kun tavoitteena on oppia kirjoittamaan, edellä esitetyistä omistajuus- ja siirtokuormitussyistä. Vältä yleiskieltoja kieliopin, sanamuotojen tai kieliavun suhteen, sillä ne luovat tarpeettomia esteitä [[multilingual-learning|monikielisille kirjoittajille]]. Erota kielituki älyllisestä kirjoittajuudesta sen sijaan: apu ilmaisussa on kunnossa, ja opiskelija pysyy vastuussa ideoista, todistusaineistosta, retorisista ratkaisuista ja merkityksestä. Auditoroi itse palaute, koska [[marked-pedagogies-linguistic-bias-writing-feedback|Tan ym.]] havaitsivat, että samanlainen kirjoitus sai enemmän kiitosta ja vähemmän sisällöllistä kritiikkiä, kun opiskelijoiden demografiset tai koulutustaustaiset piirteet sisällytettiin kehotteeseen, mikä sijoittaa [[bias-mitigation|harhan vähentämisen]] palautesuunnitteluun.

### Humanistiset ja yhteiskuntatieteelliset kurssit

Tulkinta on yleensä tavoiteltava kyky, joten anna lähdekohtaamisen tulla ennen tekoälykohtaamista. Opiskelijat merkitsevät primaaritekstin, historiallisen lähteen, taideteoksen, arkistoaineiston, haastattelun tai teoreettisen katkelman muistiin ja muodostavat alustavan luennan ennen kuin konsultoivat mitään. Sen jälkeen malli toimii vastapoolina: tarjoa vaihtoehtoinen luenta, kerro, mikä todistusaineisto haastaisi tämän tulkinnan, nimeä oletukset, jotka argumentti tekee, tuota luenta vastakkaisesta teoreettisesta näkökulmasta. Opiskelija päättää, mitä luentaa teksti todella tukee.

Anna mallin kritiikki alakohtaisena työnä. Anna opiskelijoille tekoälyn tulkinta runosta, tapahtumasta, argumentista tai yhteiskunnallisesta ilmiöstä ja kysy, mitä se huomaa, mitä se jättää huomaamatta, mikä todistusaineisto tukee sen väitteitä, kenen näkökulma puuttuu ja missä se latistaa monitulkintaisuuden sujuvaksi vastaukseksi. Se pitää tulkinnallisen harkinnan asiana, jonka opettamista varten [[humanities-education|humanistinen]] kurssi on olemassa. Arvioi tulkinnalliset ratkaisut ja niiden todistusperustelut ja käytä lyhyttä ohjauskysymystä, kuten ”Miksi luit tämän katkelman näin etkä sen vaihtoehdon mukaan, jonka hylkäsit?” Sen arvaaminen, näyttääkö lause konekirjoitetulta, on heikompi mittari, kuten [[ai-detection|tekoälyn tunnistus]] selittää.

### STEM-kurssit ja laboratorioraportit

Ensin yksi varaus: tämä tietopohja sisältää paljon vahvempaa näyttöä tekoälyavusteisesta akateemisesta kirjoittamisesta yleisesti kuin laboratorioraporttien kirjoittamisesta erityisesti. Käytännön työ ja laboratorio ovat yhä alikäsiteltyjä [[pedagogy|pedagogiikan]] alueella, myös [[engineering-education|tekniikan alan koulutuksen]] kirjallisuudessa, joten seuraava soveltaa kirjoittamisen, siirtokuormituksen, validiteetin ja tekniikan alan löydöksiä ympäristöön, jota nuo tutkimukset eivät testanneet.

Piirrä raja tieteellisen päättelyn ympärille proosan kokonaisuuden sijaan. Opiskelijat pysyvät vastuussa havainnoista, raakadatasta, laskelmista, epävarmuudesta, kuvioista, analyysivalinnoista, tuloksista ja väitteen ja todistusaineiston välisestä päättelystä. Kun ne ovat olemassa, tekoäly voi kohtuudella auttaa jäsentämisessä, luettavuudessa, siirtymissä ja alan käytännöissä, mikä on sama pinnan ja päättelyn jako kuin [[layer-sensitive-cognitive-offloading-writing-2026|Chenin tutkimuksessa]].

Tekoälyaikakauden laboratoriokurssin raporttipaketti sisältää raportin lisäksi valitun raakadatan, laskelmat tai muistikirjan tulosteen, kuvion, jossa on opiskelijan kirjoittama tulkinta, ja lyhyen selostuksen siitä, miten keskeinen johtopäätös seuraa todistusaineistosta. Korkean panoksen raporteissa kysy yksi tai kaksi yksilöllistä jatkokysymystä kuvaajasta, poikkeavasta tuloksesta, [[research-methods-aied|menetelmällisestä]] valinnasta tai rajoitteesta. Älä anna kirjoittamisen sujuvuuden korvata käsitteellistä ymmärrystä: automatisoitu [[physics-education|fysiikan]] pisteytys voi aliarvioida käsitteellistä ymmärrystä, kun kielellinen ilmaisu on heikompaa, ja se osuu kovimmin [[multilingual-learning|monikielisiin opiskelijoihin]] ([[automated-essay-scoring|Automatisoitu esseen pisteytys]]). Jos päättely ja kirjoittaminen ovat molemmat tavoitteita, pisteytä ne erikseen.

### Tekniikan alan kurssit

Ammatillinen vastuu muuttaa sanamuotoa. Katsaus [[ethical-use-ai-engineering-education-review-2026|99 empiiriseen tekniikan alan koulutustutkimukseen]] tunnisti läpinäkyvyyden, [[human-in-the-loop-ai|ihmisen valvonnan]], opiskelijan itsenäisyyden, yksityisyyden, kirjoittajuuden, oikeudenmukaisuuden ja hyväntekemisen toistuviksi [[ethics|eettisiksi]] huoliksi ja väitti, että tekoälyn etiikka kuuluu ammatilliseen kasvuun eikä pelkkään sääntöjen noudattamiseen. Laboratorio- tai suunnitteluraportissa pyydä opiskelijoita ilmoittamaan avusta ja vakuuttamaan, että he ovat varmistaneet laskelmat, lähteet, oletukset ja turvallisuuteen liittyvät väitteet.

## Pidä yksi näyte, johon työkalu ei koskaan koske

Tuettu suoriutuminen ei ole itsenäinen kyky, ja tarvitset ainakin yhden luennan jälkimmäisestä. Satunnaiset tilanteet, joissa tuki vedetään pois, riittävät: lyhyt kirjoitus ilman tekoälyä, tulkinta luokassa, suullinen selitys, ohjauskeskustelu, spontaani muokkaus tai jatkotehtävä, joka siirtää saman päättelyn uuteen tapaukseen. Tällä on eniten merkitystä silloin, kun lopputyöllä on huomattava paino arvosanassa. Se ei tarkoita jokaisen tehtävän valvomista. Muutama sijoitettu näyte antaa sinulle ja opiskelijalle lähtötason tuetun työn tulkintaan, mikä on kirjoittamiseen liittyvä erityistapaus sivulla [[redesign-assessment-ai-era|arvioinnin uudelleensuunnittelu tekoälyaikakaudella]] esitetystä väitteestä.

Lue kaksi työtä rinnakkain ja kysy, näkyykö tuetun työn päättely myös tukemattomassa. Jos näkyy, essee tekee tehtäväänsä näyttönä. Jos ei, tuettu arvosana mittaa sitä, mitä työkalu tarjosi. Tuo vertailu on myös se, mikä sinun on näytettävä opiskelijalle, joka kiistää arvosanan, koska se osoittaa tiettyyn ajattelun kohtaan eikä vaikutelmaan proosasta.

## Päätä, mitä tekoäly saa arvioida

Kaksi näennäisesti ristiriitaista tulosta ovat yhteensopivia. Huolellisesti kalibroidut järjestelmät, joissa on yksityiskohtaiset arviointimatriisit ja esimerkit, voivat pisteyttää tietyt tehtävät hyvin, ja valmiiksi käytettävissä oleva [[llm|LLM]]-arviointi poikkeaa huomattavasti ihmisen harkinnasta. [[llms-do-not-grade-essays-like-humans-2026|Mathew ym.]] havaitsivat heikon ihmisen ja LLM:n yksimielisyyden, joka vaihtelee systemaattisesti esseen laadun mukaan: mallit palkitsevat liikaa lyhyitä, pinnallisesti luettavia esseitä, palkitsevat liian vähän pidempiä ja vahvempia esseitä, joissa on pieniä pinnallisia virheitä, ja kerääntyvät asteikon keskikohtaan. Kuvio tukee tekoälyä matalan panoksen [[formative-assessment|formatiivisessa]] palautteessa, kommenttien luonnostelussa ja lajittelussa paljon enemmän kuin itsenäisessä [[summative-assessment|summatiivisessa]] arvioinnissa ([[automated-essay-scoring|Automatisoitu esseen pisteytys]]).

Opiskelijat vetävät saman rajan itse. Teknisen viestinnän perustutkintokurssilla, jossa [[generative-ai|ChatGPT]] pisteytti käsin kirjoitettuja tekstejä ja jossa opiskelijoille kerrottiin siitä, kaikki 13 osallistujaa pitivät palautetta selvänä ja hyödyllisenä pinnallisen tason muokkaukseen. Suurin osa erotti palautteen hyödyllisyyden evaluatiivisesta auktoriteetista: he hyväksyivät kritiikin ja vaativat opettajan päättävän arvosanan ([[student-perspectives-ai-writing-grading-2026]]). Suunnittele [[human-in-the-loop-ai|ihmisen valvonta]] kohdaksi, jossa tekoälyn tuotoksesta tulee arvosana, eikä kohteliaisuudeksi, jota tarjotaan kun se sopii.

## Arvioi näyttö ennen kuin kirjoitat opetussuunnitelman uudelleen

Näiden suunnitelmien puolesta esitetty tapaus on lupaava eikä vielä tarpeeksi vahva perustelemaan yhtä yleistä tekoälykirjoituspolitiikkaa. Osa parhaasta näytöstä tulee huomattavista luokkatutkimuksista, kuten [[pairr-ai-peer-review-2025|PAIRR]] 654 opiskelijoineen. Suuri osa lopusta nojaa kvasikokeisiin, pieniin kokeellisiin otoksiin, käsitteellisiin analyyseihin ja vuosien 2025-2026 työhön, joka on vielä uutta: [[layer-sensitive-cognitive-offloading-writing-2026|Chenin rajatun kirjoittamisen tutkimuksessa]] oli 168 opiskelijaa mutta vain kuusi kokonaista luokkaa, [[ai-writing-support-stage-ownership-2026|omistajuustutkimus]] käytti lyhyttä kokeellista kirjoitustehtävää, ja tutkimuksessa, joka raportoi välittömistä laadun parannuksista ChatGPT-harjoittelun jälkeen, oli vain 21 ensimmäisen vuoden kansainvälistä opiskelijaa, eikä se osoittanut pitkäaikaista [[transfer-of-learning|oppimisen siirtoa]] ([[chatgpt-academic-writing-quality-ownership-2026]]). Se, mitä [[ai-education|Tekoäly koulutuksessa]] -tietopohja tukee, on joukko suunnitteluperiaatteita, ja sen luotettavin tutkimusten välinen löydös on säilyttää opiskelijan [[agency|toimijuus]], [[evaluative-judgment|arviointikyky]], itsenäinen osaaminen, alakohtainen päättely ja ihmispalaute samalla kun tekoälyä käytetään laajentamaan pääsyä kritiikkiin, harjoitukseen, muokkausapuun ja kielelliseen tukeen.

Tuolla yhdistelmällä on käytännön seuraus. Muuta yhtä tehtävää, pidä artefakti ja vertaa seuraavaa vuosikurssia tähän samalla mittarilla. Sääntö, jonka voit muuttaa yhden lukukauden jälkeen, on arvokkaampi kuin politiikka, jota et voi testata, eivätkä edellä mainitut pienet tutkimukset kerro sinulle, mitä omalla kurssillasi tapahtuu.

## Mitä opettajat ymmärtävät tässä väärin

**Tunnistin ratkaisee, onko teksti opiskelijan.** Ei ratkaise. Salaisessa kenttätutkimuksessa 94 % tekoälyn tuottamista koepalautuksista jäi tunnistamatta ja sai paremmat pisteet kuin oikeat opiskelijat, ja kontrolloidussa tutkimuksessa tunnistimet merkitsivät sääntöjenmukaisen kevyen tekoälymuokkauksen 38-80 prosentissa tapauksista samalla kun ne jättivät huomaamatta yli 96 % ihmismäistetyistä uudelleenkirjoituksista ([[teichmann-detecting-undetectable-misconduct-2026]]; [[karr-ai-detection-humanization-2026]]). Tunnistus vastaa tunnistuskysymykseen, ja [[assessment-validity|validiteetti]] on eri kysymys.

**Kurssitason politiikka on selkeämpi kuin tehtäväkohtainen sääntö.** Nashin ja Burrissin politiikat olivat kurssitason asiakirjoja, ja 22:ta 27:stä salli aivoriihen, 22 rajoitti tai hämärsi kirjoittamista ja 22 oli hiljaa lukemisesta. Yksi asiakirja, joka kattaa kaiken, on yleensä täsmällinen siitä vaiheesta, josta opettaja on huolissaan, ja epämääräinen muusta.

**Parempi proosa tarkoittaa, että kirjoitusopetus toimi.** Omistajuustutkimus löysi paremman esseen laadun ja matalamman omistajuuden samasta palautuksesta, ja Chenin avoimen yhteistyön ehto tuotti vahvimman tuetun kirjoittamisen ja heikoimman myöhemmän itsenäisen suoriutumisen. Proosan laatu on tuotemitta. Se, mitä varten kurssi on, on kyvyn mitta.

**Rajaton pääsy ja hyvä kehote riittävät.** Opiskelijat, jotka pitävät tekoälypalautetta auktoriteettina, hyötyvät siitä vähemmän kuin opiskelijat, joilla on kehittynyt palautelukutaito. Pääsy kritiikkiin ja kyky käyttää kritiikkiä ovat erillisiä resursseja.

**Tekoälyn kieltäminen suojelee kirjoitusprosessia.** Kielto vastaa kysymykseen, joka vaihtelee vaiheittain, ja se luo esteitä monikielisille kirjoittajille, jotka tarvitsevat kielitukea, jolla ei ole mitään tekemistä kirjoittajuuden kanssa. Toimiva jako kulkee ilmaisun ja älyllisen vastuun välillä.

## Mitä sinulle tullaan vastaamaan

**”Minulla ei ole aikaa lukea yhtään uutta artefaktia.”** Tee artefaktista sitten pieni: neljän sarakkeen päätöstaulukko tai viisi minuuttia luokassa kirjoittamista itsenäisenä näytteenä. Tietopohja ei raportoi näistä malleista mitään arviointiaikaa koskevia tietoja, joten työmääräväite on testattava yhdellä tehtävällä eikä oletettava tämän sivun perusteella.

**”Opiskelijani käyttävät tekoälyä, sanokoon sääntö mitä tahansa.”** Niin käyttävät, ja suunnittelukysymys on, mihin vastaukseen tehtäväsi tekee helpoimman tien. Ilmoitus, joka ei maksa mitään, ja arviointimatriisi, joka palkitsee prosessista, tekevät ilmoittamisesta halvemman polun. Mekanismi tulee mallintamisesta eikä ilmoituspolitiikan kokeesta, joten pidä ennustetta kohtuullisena mutta vahvistamattomana.

**”Kielto on yksinkertaisempi, ja se suojelee prosessia.”** Yksinkertaisempi, kyllä. Edellä kuvatut politiikat osoittavat, miten yksi kurssitason sääntö ajautuu hiljaisuuteen niistä vaiheista, joilla on merkitystä, ja yleiset kielirajoitukset osuvat opiskelijoihin, jotka niitä eniten tarvitsevat.

**”Vertaisarviointi on nyt tarpeetonta, kun tekoäly vastaa sekunneissa.”** 58 % PAIRR-opiskelijoista piti yhdistelmästä ja 6 % pelkästä tekoälystä, ja syyksi he kertoivat vertaisten tarjoaman kontekstuaalisen ja yleisötiedon. Se mittaa kokemusta, joten se kantaa vähemmän kuin oppimistulos olisi kantanut.

**”Malli arvioi tämän tehtävän yhtä hyvin kuin minä.”** Kalibroidut järjestelmät, joissa on yksityiskohtaiset arviointimatriisit ja mallivastaukset, voivat pisteyttää tiettyjä tehtäviä hyvin. Yleinen arviointi ei, ja Mathew ym. osoittavat, että erimielisyys seuraa esseen laatua eikä hajaannu satunnaisesti, mikä on vaikeammin havaittava virhetyyppi. Testaa työkalu omalla arvioidulla aineistollasi ennen kuin se koskee arvosanaa.

**”Tämä rankaisee opiskelijoita, joiden akateeminen englanti on heikompaa.”** Voi rankaista, jos sääntö pitää ilmaisua ja kirjoittajuutta yhtenä asiana. Erota ne ja auditori tekoälypalaute sen kuvion varalta, jonka Tan ym. löysivät: samanlainen kirjoitus sai enemmän kiitosta ja vähemmän sisällöllistä kritiikkiä, kun demografiset tai koulutustaustaiset piirteet olivat kehotteessa. Tietopohja dokumentoi tuon harhan. Se ei raportoi testattua korjausta, joten oma vertailusi on tarkistus.

## Mitä tehdä tällä viikolla

**1.** Kirjoita seuraavaa isoa tehtävääsi varten lause, joka nimeää tavoitellun kyvyn, ja laita se monisteeseen.

**2.** Lisää yksi rivi, joka vaatii opiskelijan väitteen, tulkinnan tai karkean luonnoksen ennen mitään tekoälyn käyttöä, ja kerro, mitä keräät.

**3.** Merkitse tehtävän jokainen vaihe konstruktia kantavaksi tai ei ja kirjoita tekoälysääntö uudelleen niin, että se sallii työkalun siellä, missä vaihetta ei arvioida.

**4.** Lisää arviointimatriisiin neljän sarakkeen palautepäätöstaulukko pisteineen.

**5.** Aikatauluta yksi lyhyt kirjoitus, johon mikään työkalu ei koske, ja päätä nyt, mihin tehtävään se kuuluu.

## Mihin seuraavaksi

Tämän argumentin arviointipuoli, mukaan lukien todennettujen vaiheiden suunnittelu, on sivulla [[redesign-assessment-ai-era|arvioinnin uudelleensuunnittelu tekoälyaikakaudella]]. Opiskelijoiden todella lukeman politiikka-asiakirjan löydät sivulta [[course-ai-policy|kurssin tekoälypolitiikka]] ja itse palautetyökalut sivulta [[ai-feedback-quality|tekoälypalautteen laatu]]. [[verify-ai-output|Tekoälyn tuotosten varmistaminen]] käsittelee sitä, mitä opiskelijoiden pitäisi tarkistaa, kun malli tarjoaa väitteen tai lähteen, ja käsitesivu [[coach-not-crutch-ai-writing|valmentaja, ei apukeino]] ilmaisee sen rajan, johon tämä sivu jatkuvasti palaa.
