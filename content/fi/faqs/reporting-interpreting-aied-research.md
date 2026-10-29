---
title: "Mitkä ovat parhaat käytännöt tekoälyä koskevan koulutustutkimuksen raportoinnissa ja tulkinnassa?"
created: "2026-09-16T15:05:00-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Luonnoksessasi on tiivistelmässä yksi otsikkoluku, ja arvioija on juuri kysynyt, mitä verrokkiryhmä tosiasiassa teki. Tai sinä olet se arvioija, kädessäsi meta-analyysi, jonka yhdistetty vaikutus on 0,67 ja jonka menetelmäosio on puolitoista sivua. Tai yksikkösi kirjoittaa ohjetta siitä, miten henkilökunnan pitäisi raportoida tekoälytutkimuksia, ja haluaa jotain täsmällisempää kuin ”noudata standardeja”.

Kuusi puutetta ratkaisee useimmat näistä tapauksista: mikä tekoälyjärjestelmä oli käytössä, mihin se oli konfiguroitu, mikä pedagoginen rooli sillä oli, suunnittelivatko vai tarkistivatko ihmiset sen tuotoksen, mitä tulosmittari tosiasiassa kartoitti ja mitä kirjoittajat tekivät vinoumalle, kustannuksille ja rajoituksille. ”Arviointikelvoton” on rehellinen päätös, kun ne puuttuvat, ja se on eri päätös kuin ”kumottu”.

## Lyhyt versio

**1.** Kuvaa tekoäly käsittelynä, älä toimittajana. Malli, versio, konfigurointi, kehotteet, rooli ja se, kuka suunnitteli tai tarkisti tuotoksen.

**2.** Nimeä pedagoginen perustelu ja aktiivinen vertailu. Tuotteen nimi ei ole menetelmä, eikä tavanomainen opetus ole reilu verrokki.

**3.** Sovita mittari väitteeseen, mukaan lukien se, mitattiinko tulos viiveellä ja ilman apua.

**4.** Raportoi epävarmuus, joka analyysillä tosiasiassa on: toisistaan riippuvat vaikutukset, tutkimusten välinen varianssi, ennustevälit, alaryhmien koot, julkaisuvinouma.

**5.** Validoi jokainen automatisoitu arvio, ja nimeä kultastandardi ja ratkaisija.

**6.** Raportoi vastapainot: hallinto, laskentakustannus, oma tekoälyn käyttösi, nollatulokset ja vain tarkistamasi viitteet.

## Kuvaa tekoäly käsittelynä, jonka joku voisi rakentaa uudelleen

Tämä on se tarkistus, jossa useimmat käsikirjoitukset epäonnistuvat. RAISE-viitekehys (*Reporting AI Studies in Education*, Allison 2026) on 30 kohdan tarkistuslista kymmenellä teema-alueella, ja sen diagnoosi on täsmällinen: käsikirjoitukset jättävät rutiininomaisesti kertomatta, mikä malli oli käytössä, miten se oli konfiguroitu, mikä rooli sillä oli ja suunnittelivatko vai tarkistivatko ihmistoimijat sen tuotokset. Arvioijalle jää neljä kysymystä, joihin ei voi vastata. Mitä tekoäly oikeastaan teki? Oliko se välttämätön? Onko tämä toistettavissa? Ovatko oppimisväitteet uskottavia?

RAISE kulkee koulutuksellisesta perustelusta API-tason määrityksen, oppijan ja tekoälyn vuorovaikutuksen, saavutettavuuden ja kulttuurisen sopivuuden, osallistujien ja ympäristön, inhimillisen osallistumisen, suunnittelun, etiikan, läpinäkyvyyden ja toistettavuuden kautta rajoituksiin. Sen kumppani Etiikka- ja riskimatriisi kattaa riskit oppijan [[agency|toimijuudelle]], [[equity-in-ai-education|tasa-arvolle]], tiedon [[governance|hallinnolle]] ja algoritmiselle läpinäkyvyydelle. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah ja Gašević (2026)]] tarjoavat virtaviivaisemman vaihtoehdon. TEP-AIED taittaa läpinäkyvyyden, etiikan ja pedagogiikan yhdeksi toisistaan riippuvaiseksi rakenteeksi, tarjoaa ohjetaulukon, joka on kartoitettu artikkelin seitsemään osioon, ja pyytää kirjoittajia lisäämään menetelmäosion otsikolla ”Transparency, Ethics, and Pedagogy Considerations”. Heidän syynsä on käytännöllinen: RAISE on kattava ja liian yksityiskohtainen rutiininomaiseen empiiriseen käyttöön. Ilmoitus kuuluu [[ai-use-disclosure|tekoälyn käytön ilmoittamisen]] alle, ja juuri se tekee [[privacy|yksityisyyttä]] ja [[ethics|etiikkaa]] koskevat väitteet tarkistettaviksi.

Koulutuksellinen perustelu tulee RAISEssa ensin, koska tekoäly ei ole neutraali työkalu. Arvo riippuu siitä, miten oppimisongelma, teoreettinen perustelu ja tavoitteiden kartoitus tulosmittareiksi ovat linjassa. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] havaitsi, että kaikki paitsi kaksi 14 tarkastetusta meta-analyysista määrittelivät käsittelyn työkaluksi, ChatGPT:ksi tai GenAI:ksi tai yleisesti ”tekoälyksi”. Tuotteen nimi ei ole [[pedagogy|pedagogiikkaa]]. ChatGPT:lle altistumisen käsitteleminen yhtenä yhteisenä interventiona vastaa sen meta-analysoimista, mitä vaikutuksia ”paperilla” on.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich ym. (2025)]] esittävät saman argumentin alkuperäistutkimuksille. Tarkastaessaan osajoukon erään tunnetun meta-analyysin taustalla olevista vertailuista he havaitsivat, että vain 21 %:lla oli hyvin määritelty käsittely, verrokkiryhmä ja pätevä oppimismittari. Raportoitu vaikutuskoko (g = 0,7) ylitti myös tarkoituksenmukaisesti rakennettujen [[intelligent-tutoring|älykkäiden opastusjärjestelmien]] vaikutuskokoon (0,66), ja se ero on varoitusmerkki: käsittely, joka voittaa tarkoituksenmukaisesti rakennetun opastuksen, on todennäköisesti joukko erilaisia asioita yhden nimen alla.

Testi on yksi kysymys: voisiko pätevä lukija rakentaa interventionsa uudelleen pelkän menetelmäosion pohjalta ja saada saman?

## Päätä, mitä mittarisi antaa sinulle luvan väittää

O'Neillin näyttöauditissa, joka kattoi 46 satunnaisesti valittua alkuperäistutkimusta, 28:ssa (61 %) esitettiin validiteettihuolia. Yleisin oli riippuvan muuttujan epäsopivuus (n = 15), jota seurasivat riippumattoman muuttujan epäsopivuus (n = 11), koeasetelman ongelmat (n = 7), aineiston poiminnan ongelmat (n = 6), verrokkiryhmän puuttuminen (n = 6) ja ei-satunnaistettu ryhmäjako (n = 6). Moniulotteisia tuloksia yhdistettiin rutiininomaisesti ikään kuin ne olisivat vaihdettavissa keskenään, ja koepisteet, kotitehtävien laatu, [[motivation|motivaatio]], [[self-efficacy|itsetehokkuus]], asenteet ja [[student-engagement|sitoutuminen]] kutistettiin yhdeksi ”akateemisen suoriutumisen” luvuksi.

Kaksi raportointitapaa estää sen. Kerro, mitä konstruktia väline mittaa ja että se on validoitu sille väestölle; sivu [[self-report-measures|itsearviointimittarit]] osoittaa, missä havaintoihin perustuvat mittarit eroavat käyttäytymisestä, ja [[assessment-validity|arvioinnin validiteetti]] kattaa konstruktivaliditeetin. Raportoi sitten tulos, joka ei riipu oppijan uskosta apuvälineeseen. Välitön tehtävän suoritus avustettuna ei ole [[learning-gains|oppimistulos]], ja [[cognitive-offloading|kognitiivinen siirtokuormitus]] on se mekanismi, joka uskottavimmin erottaa nämä kaksi. [[verification-quality-reliance-calibration-genai-2026|Vuoden 2026 pikakatsaus 493 tietueesta ja 14 ensisijaisesta tutkimuksesta]] havaitsi, ettei yksikään mitannut varmistamisen onnistumista ja sitä seuraavaa nojautumispäätöstä yhdessä itsenäisesti ratkaistua tuotoksen laadun standardia vastaan, ja harva katsoi välittömän suorituksen taakse viivästyneeseen muistamiseen tai [[transfer-of-learning|siirtoon]].

Sano katto keskusteluosiossa suoraan. Tutkimus, joka mittasi työkalu auki tehdyn pikatestin, voi tukea väitettä avustetusta suorituksesta. Se ei voi tukea väitettä siitä, mitä opiskelijat oppivat, ja se lause maksaa yhden rivin.

## Raportoi epävarmuus, joka analyysilläsi tosiasiassa on

Yhdistelmätutkimuksissa raportoi riippuvien vaikutusten käsittely, tutkimusten välinen varianssi, ennustevälit ja julkaisuvinouman arviointi. Pelkkä I² ei tee työtä. O'Neill havaitsi raportoidun heterogeenisyyden vakavaksi kaikkialla, missä se ilmoitettiin, 77,2 %:sta 94,4 %:iin 13 meta-analyysissa, joista 12 oli yli 80 %:n tasolla, eikä mikään ratkennut: mikään moderaattorianalyysi ei saavuttanut kymmenen tutkimuksen vähimmäisalaryhmäkokoa. Kaksitoista meta-analyysia käsitteli samasta tutkimuksesta peräisin olevia riippuvia vaikutuskokoja riippumattomina, mikä paisuttaa näennäistä näyttöä. Vain neljä raportoi tutkimusten välisen varianssin (τ²) ja vain kaksi ennustevälin, ja molemmat välit sisälsivät nollan. Julkaisuvinoumaa ei arvioitu pätevästi missään joukon tutkimuksessa.

Heterogeenisyysluvut tarvitsevat mallinsa rinnalleen, koska I² riippuu tarkkuudesta. [[limitations-in-aied-research|Tekoälykoulutuksen tutkimuksen rajoitukset]] dokumentoi yhden yhdistelmän, jossa I² = 82,98 % kiinteiden vaikutusten mallilla ja 15,75 % satunnaisvaikutuksilla. Lukija, jolle annetaan vain ensimmäinen luku, ei pysty sanomaan, miten epäjohdonmukainen aineisto on. Raportoi τ² ja ennusteväli sen rinnalla, mitä myös [[meta-analysis-systematic-review|katsauskirjallisuus]] edellyttää.

Alenna sitten oma otsikkolukusi. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš ym. (2026)]] yhdistivät 1 840 vaikutuskokoa 67 meta-analyysista ja havaitsivat, että kun julkaisuvinouma mallinnetaan, keskimääräinen vaikutus putoaa noin kolmannekseen julkaistusta mediaanista (SMD = 0,196 vastaan 0,67), ja ennusteväli on -1,521:stä +1,908:aan. Se väli ulottuu merkittävästä haitasta merkittävään hyötyyn hypoteettiselle uudelle tutkimukselle. Se on artikkelin hyödyllisin luku ja se, joka todennäköisimmin pudotetaan tiivistelmästä.

## Sano, miten kauas väite kantaa

Oikeudenmukaisuus ja ulottuvuus pettävät samalla tavalla: suuri vaikutus, joka merkitsee vähemmän kuin näyttää. Yksitoista 14 tarkastetusta meta-analyysista ei asettanut väestörajaa, joten ”opiskelijat” ulottui lapsista lääketieteen erikoistujiin. Yksi kurssi, oppilaitos, oppiaine tai maa ei anna lupaa yleiselle väitteelle, ja yhden työkalun tulokset siirtyvät harvoin toiseen.

Kolme selitystä kattaa suurimman osan suurista vaikutuksista, ja jokainen niistä on raportoitavissa. Uutuus on yksi. Ylimääräinen tehtävään käytetty aika on toinen. Kolmas on vertailuehto, joka sai tavanomaista opetusta aktiivisen verrokin sijaan. Raportoi, mitä verrokki tosiasiassa teki, kuinka paljon aikaa kumpikin haara käytti ja miten uusi työkalu oli. Sano myös väestöraja, koska vaikutukset eroavat oppijaryhmien välillä ja nimenomaan ilmoittamaton raja antaa yhden yhdistetyn luvun edustaa niitä kaikkia; [[differential-effects-across-learner-groups|Vaikutusten erot oppijaryhmien välillä]] esittää sen vaihtelun.

Kohtele työkalua liikkuvana maalitauluna. Suljetut järjestelmät muuttuvat ilmoittamatta, joten löydös on sidottu malliversioon, eikä se [[benchmark|vertailuanalyysi]], joka ihastutti yhdessä julkaisussa, välttämättä päde seuraavassa. Versio ja käyttöpäivä kuuluvat menetelmäosioon juuri siksi, ei vain toistettavuuden vuoksi.

## Validoi automatisoidut arviot

[[ai-ed-evaluation|Tekoälykoulutuksen arviointi]] siirtää pisteytyksen yhä useammin malleille, mikä tekee validointimenettelystä osan tulosta eikä liitettä. Khan Academy kertoo [[intelligent-tutoring|tekoälyohjaajansa]] mittareista, että kognitiivisen sitoutumisen pisteyttää [[llm|LLM]]-tuomari, joka on kalibroitu ihmispedagogiikan asiantuntijoita vastaan F1-arvolla 0,83, ja että mittareiden muutokset tulivat yli 40 elävästä kokeesta viidessä kuukaudessa eivätkä offline-arvioinnista ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi ym. 2026]]). [[machines-misread-pedagogical-quality|Tseng ym. (2026)]] osoittavat, että ihmisen ja koneen erimielisyys [[formative-assessment|esitestikysymyksen]] laadusta on systemaattista eikä satunnaista, ja että arviointikriteeristön operationalisointi merkitsee enemmän kuin perustelu ensin annettu kehote.

Yksimielisyys ihmiskoodaajien kanssa on eri asia kuin laatu, ja sen raportoiminen ikään kuin se olisi laatua on arvioijan maalitaulu. [[agreement-not-quality-llm-coding-verification|Liu ym. (2026)]] antoivat riippumattoman asiantuntijan arvioida 855 koodausparia sokkona lähteestä. Ihmisen ja LLM:n yksimielisyys oli keskimäärin Jaccard 0,30, kun ihmisten välinen vastaava oli 0,52, ja sokkona arvioinut vertaaja suosi ihmisten ja koneiden koodausta yhtä erottamattomilla osuuksilla (51,5 % vastaan 48,5 %, p = 0,537). Raportoi kalibrointitavoite, kultastandardi ja se, kuka ratkaisi erimielisyyden. Juuri nämä kolme asiaa antavat lukijalle mahdollisuuden päättää, kuinka paljon painoa automaattinen pistemäärä voi kantaa.

## Ilmoita kustannukset ja oma käyttösi

Katsaus kaikkiin AIED 2025 -konferenssin artikkeleihin löysi kuvion, jossa LLM otettiin käyttöön ilman ilmoitusta: useimmat projektit käyttivät LLM:iä, ja harvempi kuin kourallinen raportoi resurssien kulutuksen tai hiilijalanjäljen. Kyseinen artikkeli tarjoaa avoimen lähdekoodin menetelmän, jossa on mittausvälineet paikalliselle ja pilvilaitteistolle, sekä kaavan sellaisten huippumallien laskentakustannuksen arvioimiseen, joiden parametrimäärää ei kerrota. Sen argumentti on, että näiden kustannusten ilmoittamatta jättäminen on itsessään eettinen huoli. Tiedon hallinto, suostumus, saavutettavuus ja kulttuurinen sopivuus kuuluvat samaan kappaleeseen (RAISEn kohdat; [[universal-design-for-learning|universaali oppimissuunnittelu]], [[accessibility|saavutettavuus]]). [[equity-ethics-pedagogical-safety-research|Tasa-arvo, etiikka ja pedagoginen turvallisuus tutkimuksessa]] käsittelee asiaa laajemmin.

Oma tekoälyn käyttösi tutkimusprosessissa tarvitsee saman ilmoituksen. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaletan ja Linin PRISMA-LLM-analyysi]] 888 katsausten automatisointia koskevasta artikkelista osoittaa, miten epätasaista tämä raportointi on. Vuodesta 2023 lähtien 38,0 % ohjelmisto- ja tuoteartikkeleista ei raportoinut lainkaan arviointia, kun LLM-artikkeleista vastaava osuus oli 9,3 %. Raportoinnin keskimääräinen rikkaus oli 6,3 LLM-artikkeleilla ja 3,3 ohjelmisto- ja tuoteartikkeleilla. 84,1 % LLM:n käytöstä nojasi suljettuihin tai isännöityihin järjestelmiin, ja vain 4,9 % oli avoimia painoja. Heidän viitekehyksensä erottaa toteutuksen ilmoittamisen seurauksille herkästä arvioinnista viidellä ilmoitustasolla, mikä on käyttökelpoinen malli sen kuvaamiseen, mitä työkalu teki katsauksen sisällä.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai ja Chan (2026)]] lisäävät kirjoittajan puolen. 28 jatko-opiskelijatutkijasta 27 käytti GenAI:ta ideointiin, kirjallisuuskatsaukseen, selittämiseen, aineiston käsittelyyn, ohjelmointiin, [[writing-education|akateemiseen kirjoittamiseen]], editointiin ja kääntämiseen, ja he sovittivat käytön panoksiin ja alan normeihin. Heidän oppilaitostensa linjaukset käsittelivät opetusta ja arviointia eivätkä tutkimuskäytäntöä, mikä jättää raportointipäätöksen kirjoittajalle.

## Julkaise nollatulos ja tarkista jokainen viite

[[citation-errors-hallucinations-computing-education-2026|Denny ym. (2026)]] varmistivat 30 keksittyä viitettä 14 artikkelissa, ja yhdessä teknisessä symposiumissa määrä nousi 3:sta vuonna 2025 17:ään vuonna 2026, eli 2,3 %:iin sen vuoden konferenssiartikkeleista. LLM:n avustama luonnostelu tekee uskottavan keksityn viitteen tuottamisesta halpaa, minkä vuoksi tarkistus on tehtävä ennen lähettämistä eikä vasta hyväksymisen jälkeen.

Auditin vastapainot ovat tärkeitä, kun viittaat siihen. Useimmat merkityt viitteet olivat vaarattomia: 229 oli ACM-metatietojen epäsopivuutta, joissa PDF oli oikein, ja 188 oli päteviä bibliografisia muunnelmia. Keksittyjen määrä on tarkoituksellinen alaraja, eikä vaaraton enemmistö ole pyöristysvirhe. Tarkista jokainen kohta, jota et voi itse varmistaa.

Nolla- ja negatiivisten tulosten raportointi on rehellisen näyttöpohjan toinen puoli. Bartoš ym. löysivät vahvaa näyttöä tukahdutetuista nollatuloksista (jokainen Egger-testi p < 0,0001) ja äärimmäisestä heterogeenisyydestä (τ = 0,869), eikä mikään tulosmuuttujan, alan, tason tai tekoälyroolin alaryhmä osoittanut johdonmukaisia hyötyjä. He eivät myöskään löytäneet eroa ennen tammikuuta 2023 ja sen jälkeen julkaistujen tutkimusten välillä, mikä heikentää väitettä, jonka mukaan juuri nykyaikaiset generatiiviset työkalut tuottavat hyötyjä.

## Missä tutkijat menevät tässä pieleen

**”Vaikutuskoko on modaliteetin ominaisuus.”** Ei ole olemassa raportoitavaa tekoälyn vaikutusta koulutukseen. Kaikki paitsi kaksi tarkastettua meta-analyysia määrittelivät käsittelyn työkalun nimeksi, vain 21 %:lla tarkastetuista vertailuista oli määritelty käsittely, verrokki ja pätevä mittari, ja yhdistetty g = 0,7 oli korkeampi kuin tarkoituksenmukaisesti rakennetun älykkään opastuksen 0,66. Vaikutuskoko kuuluu asetelmalle, väestölle ja mittauskerralle.

**”Yhdistetty keskiarvo on se, mitä opiskelijoilleni tapahtuu.”** Keskiarvo kuvaa tutkimusten joukkoa, eikä mikään siinä kiinnitä mitään yksittäistä luokkahuonetta. Vinoumalle korjattu keskiarvo on SMD = 0,196 ja sen ennusteväli ulottuu -1,521:stä +1,908:aan. Raportoitu heterogeenisyys on yli 80 %:n tasolla 12:ssa 13 meta-analyysista, eikä mikään alaryhmä suuremmassa joukossa osoittanut johdonmukaisia hyötyjä. Opiskelijatason muutos ei ole tunnistettavissa kummastakaan luvusta.

**”Nollatulos tarkoittaa, että työkalu ei toimi.”** Nollatulos on lausuma asetelmasta tietyllä tarkkuudella, ja havaittavan vaikutuksen puuttuminen yhdessä tutkimuksessa on tosiasia siitä tutkimuksesta. Vinoumalle korjattu SMD = 0,196 tuli kirjallisuudesta, jossa jokainen Egger-testi oli merkitsevä, joten aineiston puolustettava tulkinta on pieni ja epävarma keskiarvo. Mikään tulosmuuttujan, alan, tason tai tekoälyroolin alaryhmä suuremmassa joukossa ei myöskään osoittanut johdonmukaisia hyötyjä. Tämän kirjallisuuden dokumentoitu ongelma on tukahduttaminen.

**”Yksi tutkimus ratkaisee asian.”** Perusosuudet väittävät toista. 61 %:ssa tarkastetuista alkuperäistutkimuksista oli validiteettihuolia, yksi kurssi tai oppilaitos ei anna lupaa yleiselle väitteelle, ja suljettu järjestelmä on liikkuva maalitaulu, joka on sidottu malliversioon. Yksi tutkimus on datapiste, johon kuuluu asetelma.

**”Korkea yksimielisyys ihmiskoodaajien kanssa tarkoittaa, että malli pisteyttää oikeaa asiaa.”** Ihmisen ja LLM:n yksimielisyys oli 0,30, kun ihmisten välinen oli 0,52, eikä sokkovertaaja pystynyt erottamaan kahta koodausjoukkoa toisistaan (51,5 % vastaan 48,5 %). Yksimielisyys mittaa johdonmukaisuutta koodaajan kanssa, ja laatu on erillinen kysymys, joka vaatii kultastandardin ja ratkaisijan.

## Vastaväitteet, jotka tulet kuulemaan

**”Arvioijat haluavat uutuutta, eivät menetelmän yksityiskohtia.”** Lehdet liikkuvat toiseen suuntaan. RAISE ja TEP-AIED antavat toimituksille rakenteen, jota voi vaatia, ja TEP-AIEDin menetelmäaliosio on matalan kynnyksen sisäänkäynti. Menetelmän yksityiskohdat muuttavat arviointikelvottoman artikkelin viitattavaksi.

**”Meillä ei ole tilaa.”** Viisi ilmoitustasoa ovat raportointitasoja eivätkä riskitasoja, joten arvioinnin syvyys voi olla lause tai kaksi. Versio, kehotteet ja rooli mahtuvat lyhyeen kappaleeseen. Kustannus ja hallinto mahtuvat rajoituksia koskevaan virkkeeseen.

**”Kaikki raportoivat näin.”** Luvut sanovat, että normi on ongelma: 61 % tarkastetuista alkuperäistutkimuksista oli validiteettihuolia, 12:ssa 13:sta meta-analyysista heterogeenisyys oli yli 80 %:n tasolla, ja 38,0 %:ssa ohjelmisto- ja tuoteartikkeleista ei ollut arviointia lainkaan.

**”Työkalumme on suljettu, joten emme voi raportoida mallia.”** Raportoi versio, käyttöpäivä, konfigurointi, antamasi kehotteet, rooli ja suojakaiteet. Jos toimittaja ei kerro, se rajoite kuuluu rajoituksiin väitteen rajauksena.

**”Nollatulosten raportointi vahingoittaa meitä.”** Tukahdutetut nollatulokset ovat se dokumentoitu mekanismi, joka on SMD = 0,196:n vinoumalle korjatun keskiarvon takana. Niiden julkaiseminen pitää positiivisen tuloksesi luettavana.

## Mitä tehdä tällä viikolla

**1.** Lue tiivistelmäsi menetelmäosiotasi vasten ja poista jokainen väite, jota menetelmä ei voi tukea. Yksi lause mittarin katosta riittää yleensä.

**2.** Lisää määrityskappale: malli, versio, käyttöpäivä, konfigurointi, kehotteet, rooli ja se, kuka suunnitteli tai tarkisti tuotoksen.

**3.** Nosta τ², ennusteväli ja julkaisuvinouman arviointi liitteestä tuloksiin tai sano suoraan, ettet laskenut niitä.

**4.** Kirjoita väestöraja ja verrokkiehto asetelman kuvaukseen, mukaan lukien se, kuinka paljon aikaa kumpikin haara käytti.

**5.** Varmista jokainen viite, jota et ole itse lukenut, ja tarkista ensin tekijäkenttä.

## Mihin seuraavaksi

[[research-methods-aied|Tekoälykoulutuksen tutkimusmenetelmät]] kattaa ne asetelmavalinnat, jotka ovat näiden raportointipäätösten taustalla, ja [[limitations-in-aied-research|Tekoälykoulutuksen tutkimuksen rajoitukset]] on epäonnistumistapojen luettelo lukujen kera. [[interpreting-and-applying-aied-research|Tekoälykoulutuksen tutkimuksen tulkinta ja soveltaminen]] on saman ongelman lukijan puoli, [[does-ai-help-students-learn|näyttö kestävästä oppimisesta]] on se, mitä useimmat näistä mittareista yrittävät tavoittaa, [[evaluating-ai-interventions-methods]] kattaa mittarit ja vertailuasetelmat, ja [[checking-whether-educational-ai-works]] on kysymyksen lyhyempi versio. Ne aukot, joita tämä kirjallisuus ei ole täyttänyt, löydät sivulta [[research-gaps-aied|tekoälykoulutuksen tutkimusaukot]].
