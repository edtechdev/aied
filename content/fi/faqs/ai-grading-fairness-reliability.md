---
title: "Voinko käyttää tekoälyä opiskelijoiden töiden arviointiin oikeudenmukaisesti ja luotettavasti?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Sinulla on rubriikki, johon uskot, enemmän palautuksia kuin tunteja ja työkalu, joka palauttaa pistemäärän ja useita vakuuttavia kappaleita siinä ajassa, joka kuluu yhden esseen lukemiseen. Kokeilet sitä työhön, jonka olet jo arvioinut. Puolet pistemääristä näyttää oikealta. Yksi on kummallisen antelias, yksi kummallisen ankara, etkä vielä pysty sanomaan, johtuuko se työkalusta vai esseestä.

Lyhyt vastaus kollegalle: tekoälyarviointi ansaitsee paikkansa valvottuna avustajana tai toisena lukijana tehtävissä, joissa olet tarkistanut sen työhön, jonka olet jo arvioinut. Yhdenmukaisuus ei siirry arviointityypistä toiseen. Kuudentoista opiskelijan farmasian tentissä [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] havaitsivat lähes täydellisen yhdenmukaisuuden objektiivisissa tehtävätyypeissä ja epäluotettavan yhdenmukaisuuden avoimissa vastauksissa. Kolmessa englantilaisessa yliopistossa [[opraise-automated-marking-ai-assessment-2026|OpRaise-hanke]] havaitsi tekoälyn ja inhimillisten arvioijien päätyvän samaan tutkintoluokkaan 35–65 prosentissa tapauksista laitoksesta riippuen, ja pisteet painuivat keskikohtaa kohti. Sujuva perustelu ei ole näyttöä siitä, että kriteerejäsi on sovellettu. Se, onko tulos [[assessment-validity|päätöksellesi validi]], on paikallinen kysymys, johon sinun on itse vastattava, ja [[human-in-the-loop-ai|ihminen pysyy vastuussa]] kaikesta, mikä päätyy kirjatuksi arvosanaksi.

## Lyhyt versio

**1.** Nimeä rooli ennen kuin ajat mitään: palauteavustaja, toinen lukija vai ensisijainen pisteyttäjä. Ne vaativat eri määrän näyttöä.

**2.** Aloita vähiten seurauksia kantavasta roolista, joka ratkaisee todellisen ongelmasi. Jos deterministinen avain hoitaisi homman, LLM lisää riskiä eikä arvoa.

**3.** Kalibroi työhön, jonka olet jo arvioinut, mukaan lukien vahvat, heikot, rajatapaukset ja epätavallisesti rakennetut palautukset. Kätevät esimerkit eivät todista mitään.

**4.** Pidä kalibrointijoukko ja testijoukko erillään, tai mittaat sitä, kuinka hyvin viritit työkalun tuttuihin esseisiin.

**5.** Raportoi täsmällinen yhdenmukaisuus, pistemääräerot ja harhan suunta, älä korrelaatiota. Tarkista erityisesti hyväksytty–hylätty-raja.

**6.** Kerro opiskelijoille, mikä rooli työkalulla on, kuka päättää arvosanasta ja miten uudelleenarviointia voi pyytää.

## Päätä, mitä tekoäly saa tehdä

Kolmea järjestelyä kutsutaan ”tekoälyarvioinniksi”, ja niihin liittyy erilaiset velvoitteet.

**Palauteavustaja** luonnostelee kommentteja tai merkitsee mahdollisia puutteita, jotka hyväksyt, kirjoitat uudelleen tai hylkäät. Riski rajoittuu kommenttien laatuun, ja luet kaiken ennen kuin se päätyy opiskelijalle. **Toinen lukija** ehdottaa kriteerikohtaisia pisteitä tai merkitsee erimielisyyksiä jäsentääkseen omaa arviointiasi. Sen virheiden on oltava hyödyllisiä eikä vain vääriä: merkintä, joka palauttaa sinut palautukseen, jonka olisit muuten arvioinut huolimattomasti, on hyödyllinen. **Ensisijainen pisteyttäjä** tuottaa pisteet, joista tulee kirjattuja arvosanoja. Juuri tätä järjestelyä tämän tietopohjan näyttö ei tue muualla kuin kapeissa, paikallisesti validoiduissa tapauksissa.

Valitse alin porras, joka vastaa todelliseen rajoitteeseesi. Jos arviointikuormasi syntyy kiinteän vastausavaimen tarkistamisesta, tavallinen deterministinen pisteytys on läpinäkyvämpi ja auditoitavampi kuin kielimalli, ja farmasiatutkimus viittaa siihen, että LLM:n etu objektiivisissa tehtävissä oli osittain seurausta siitä, että sille annettiin oikeat vastaukset arvioinnin aikana. Säästä malli työhön, joka vaatii tulkintaa, ja tarkista sitten se tulkinta.

[[automated-assessment|Automaattinen arviointi]] kattaa laajemman koneiston: pisteytyksen, moderoinnin ja palautteen tuottamisen. Tämä sivu on sen alla oleva harkintakysymys.

## Mitä näyttö oikeastaan osoittaa

Yhdenmukaisuus riippuu tehtävätyypistä. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] arvioivat 16 opiskelijan suorittaman sekamuotoisen farmasian tentin ja raportoivat vastaavuuden tiedekunnan arvioinnin kanssa välillä 0,935–1,000 monivalinta-, valitse kaikki oikeat - ja täydennystehtävissä. Yhdenmukaisuus subjektiivisissa avoimissa vastauksissa oli epäluotettavaa. Kaksi yksityiskohtaa merkitsee enemmän kuin otsikkotulos. Oikeat vastaukset annettiin arvioinnin aikana, mikä imartelee objektiivisten tehtävien tuloksia, eikä rubriikin lisääminen parantanut yhdenmukaisuutta johdonmukaisesti, mikä horjuttaa yleistä oletusta, että hyvä rubriikki muuttaa LLM:n johdonmukaiseksi arvioijaksi. Kuusitoista opiskelijaa ei riitä tukemaan väitettä kurssistasi. Yhden tentin sisäinen vaihtelu on siirrettävä löydös: järjestelmä, joka hoitaa monivalintaosuutesi, ei kerro esseistäsi mitään.

Luokkayhdenmukaisuus on kohtalaista ja epätasaista. [[opraise-automated-marking-ai-assessment-2026|OpRaise-raportti]] tarkasteli aitoja psykologian kandidaattitason esseitä ja havaitsi tekoälyn ja inhimillisten arvioijien välisen yhdenmukaisuuden Ison-Britannian tutkintoluokasta olevan 63 % Cambridgessa, 53 % Nottinghamissa ja 35 % Manchester Metropolitanissa. Pisteet painuivat keskikohtaa kohti, ja ääripäät arvioitiin epätarkimmin: essee, jonka ihminen arvioi 75:ksi, sai jokaiselta tekoälyjärjestelmältä useita pisteitä vähemmän, ja essee, joka arvioitiin 50:ksi, useita pisteitä enemmän. Juuri tätä painumista on varottava, koska se vahingoittaa täsmälleen jakauman ylä- ja alapään opiskelijoita ja jättää keskikohdan näyttämään hyvältä. Tämä on hankeraportti eikä vertaisarvioitu koe, ja se on näyttöpohjan hyödyllisin varoitus.

Omat pisteesi ovat epätäydellinen vertailukohta. Opettajat ovat eri mieltä keskenään, ja aiempi pistemääräsi samankaltaisesta esseestä on harkinta, ei totuusperusta. Yhdenmukaisuus yhden arvioijan kanssa osoittaa johdonmukaisuutta sen arvioijan kanssa, mikä ei ole sama kuin oikeudenmukaisuus. Kun panokset sen oikeuttavat, käytä toista pätevää lukijaa ratkaisemaan vaikeat tapaukset, ja kohtele tekoälyn ja inhimillisen arvioijan erimielisyyttä kehotuksena lukea työ uudelleen eikä tuomiona siitä, kumpi on oikeassa.

Johdonmukaisuus ja kestävä harkinta eroavat toisistaan. Malli voi palauttaa uusinnassa lähes identtiset pisteet soveltaen kriteerejäsi silti huonosti, koska toistettavuus mittaa vakautta, ei validiteettia. OpRaise-hankkeen ääripäät näyttävät kuvion: järjestelmä oli vakaa ja väärässä esseissä, joilla oli eniten merkitystä.

## Validoi menettely ennen kuin se koskee arvosanaa

Käy tämä läpi aiemmin arvioiduilla, asianmukaisesti suojatuilla palautuksilla, jotka kattavat ne vastaukset, joita todella saat: vahvat, heikot, rajatapaukset, puutteelliset, epätavallisesti rakennetut ja oikeat vastaukset, jotka on ilmaistu vieraalla tavalla.

**1. Täsmennä kriteerit ja vaadi näyttöä.** Anna tehtävä, rubriikki, pisteytyssäännöt ja esimerkit siitä, miten hyväksyttävät vaihtoehtoiset vastaukset ansaitsevat pisteitä. Pyydä tiiviit kriteeritason perustelut, jotka on sidottu tunnistettaviin kohtiin. Tarkista sitten ne perustelut itse palautuksesta.

**2. Erota kalibrointi arvioinnista.** Viritä yhdellä joukolla, testaa toisella. Ilman tätä eroa et voi erottaa validoitua menettelyä hyvin sovitetusta.

**3. Mittaa päätökset, joilla on merkitystä.** Kirjaa täsmällinen yhdenmukaisuus, pistemääräerojen suuruus ja suunta sekä se, antaako malli järjestelmällisesti korkeampia vai matalampia pisteitä. Tarkastele hyväksytty–hylätty-rajaa ja muita seurauksellisia rajoja erikseen. Korkea korrelaatio voi istua järjestelmällisen siirtymän päällä.

**4. Testaa toistettavuutta ja alaryhmäkäyttäytymistä.** Aja osajoukko uudelleen samoilla asetuksilla. Etsi kriteeritason virheitä ja sitä, että kieli, muotoilu tai hyväksyttävä tyyli tulkitaan heikommaksi ymmärrykseksi. Pienet alaryhmämäärät tukevat varovaisuutta, eivät oikeudenmukaisuusväitettä.

**5. Kirjoita eskalaatiosääntö.** Päätä, mitkä tapaukset saavat aina inhimillisen arvioinnin ja miten erimielisyydet ratkaistaan. Älä anna mallin ilmoittaman varmuuden päättää; varmuus on validoitava havaittuja virheitä vasten ennen kuin se voi kantaa painoa.

**6. Suojaa työnkulku.** Käytä hyväksyttyä ympäristöä, minimoi tunnistetiedot ja pidä rubriikki ja ohjeet erillään lähetetystä sisällöstä. Tämä ero tekee manipuloinnin piilottamisesta vaikeampaa. Se ei tee siitä mahdotonta.

**7. Kirjaa, mikä mitätöisi tarkistuksen.** Pidä tallessa malli ja versio, kehote, rubriikki ja asetukset. Mallin päivitys tai rubriikin muutos on syy toistaa edustavat tarkistukset sen sijaan, että olettaisit jatkuvuuden.

## Tee järjestely näkyväksi opiskelijoille

Opiskelijoilla on oikeus tietää, mikä rooli työkalulla on, kuka päättää ja miten tuloksen voi riitauttaa. Epämääräinen tiedottaminen herättää epäluuloa; täsmällisyys tuottaa toimivan suhteen. Jotain tällaista: ”Hyväksytty tekoälytyökalu voi luonnostella rubriikkikommentteja luonnokseesi. Tarkistan jokaisen kommentin ja määrään arvosanasi. Ota yhteyttä, jos kommentti esittää työsi väärin.” Tee siitä sitten totta.

Kaksi epäonnistumisen suuntaa vaatii erillistä huomiota. Liialliset vähennykset ovat niitä, joista opiskelijat raportoivat, ja ne hallitsevat oikaisupyyntöjä. Ansioton hyvitys on se, jota ei mainita ja joka hiljaa turmelee tietueen. Ota näytteet molemmista ja laske varmistustuntisi mukaan, kun arvioit, säästikö työnkulku sinulle mitään.

## Mitä sinulle tullaan sanomaan

**”Ihmisetkin ovat puolueellisia.”** Ovat, minkä vuoksi vertailu tarvitsee eksplisiittiset kriteerit eikä yhden arvioijan pistemäärää standardina. OpRaise-hankkeen laitosten välinen hajonta on tässä se argumentti: jos inhimilliset arvioijat kolmessa yliopistossa tuottivat niin erilaisen luokkayhdenmukaisuuden samoilla järjestelmillä, inhimillinen vertailukohta on osa sitä, mikä on täsmennettävä, eikä kiinteä mittatikku.

**”Rubriikki tekee siitä objektiivista.”** Rubriikki tekee odotukset eksplisiittisiksi. Sen soveltaminen on edelleen tulkintaa, ja farmasiatutkimus havaitsi, ettei rubriikin antaminen parantanut yhdenmukaisuutta johdonmukaisesti. Rubriikki antaa sinulle tarkistettavan standardin perusteluille, ei takeita pistemääristä.

**”Minun pitäisi tarkistaa kaikki, mikä vie koko idean.”** Joissakin tehtävissä se on oikea johtopäätös, ja vastaus on työn kaventaminen. Kommenttien luonnostelu omista pisteytysmuistiinpanoistasi jättää harkinnan sinulle ja poistaa kirjoittamisen. Toisen lukijan merkinnät rajatapauksissa keskittävät huomiosi sinne, missä se muuttaa lopputulosta.

**”Kollegani kokeili sitä ja se toimi hyvin.”** Kysy, mitä hän mittasi. Myönteiset arviot elävät tässä kirjallisuudessa rutiininomaisesti virheiden rinnalla, ja kollega, joka luki muutaman järkevän tuotoksen, on tehnyt esittelyn, ei validoinnin. Kysymys on siitä, mitä heidän menettelynsä tekisi esseille, jotka huomaat viimeiseksi.

## Mitä tehdä tällä viikolla

**1.** Valitse yksi arviointi ja kirjoita ylös yksi rooli, joka tekoälyllä olisi. Kirjoita ylös, mikä näyttö antaisi sinun nostaa sitä yhden portaan ylemmäs.

**2.** Aja se viidellä palautuksella, jotka olet jo arvioinut, valittuina niin, että mukana on vahva, heikko, rajatapaus ja yksi, jolla on epätavallinen mutta hyväksyttävä rakenne.

**3.** Kirjaa jokainen erimielisyys työn ja kriteerin kanssa ja nimeä virheet, joita pitäisit hyväksymättöminä etkä vain väärinä.

**4.** Testaa, kulkevatko pistemääräerot johdonmukaiseen suuntaan, ja tarkista hyväksytty–hylätty-rajasi erikseen.

**5.** Luonnostele opiskelijoille suunnattu tiedotuskappale ja reitti uudelleenarviointiin sekä vertaa varmistusaikaasi siihen arviointiaikaan, jonka välstit.

## Minne seuraavaksi

[[assessment-validity|Arvioinnin validiteetti]] on käsite, joka ratkaisee nämä kysymykset: tukeeko näyttö sitä päätelmää, jonka haluat tehdä. [[automated-assessment]] kattaa teknologian ja sen mitatun suorituskyvyn eri formaateissa, ja [[ai-feedback-at-scale]] käsittelee tuotettujen kommenttien viereistä ongelmaa ja sitä, toimivatko opiskelijat niiden pohjalta.

Siitä, mitä arvosanan pitäisi edustaa, kun opiskelijat käyttävät tekoälyä, mukaan lukien konstruktin korvaaminen ja todennettu prosessinäyttö, katso [[redesign-assessment-ai-era|arvioinnin uudelleensuunnittelu tekoälyn aikakaudella]]. Siitä, voiko tunnistus korvata puolustettavan tehtäväsuunnittelun, katso [[should-we-use-ai-detectors|kannattaako tekoälyntunnistimia käyttää]]. Kaiken sen alla olevasta arviointikysymyksestä katso [[checking-whether-educational-ai-works|toimiiko koulutuksellinen tekoäly]].
