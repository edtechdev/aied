---
title: "Miten opetan opiskelijat varmistamaan tekoälyn tuotokset?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/verify-ai-output
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

On viikko ennen kuin arvosanat on annettava, ja kaksi palautusta viittaa lähteisiin, joita ei ole olemassa. Molemmat opiskelijat sanovat tarkistaneensa. Toinen avasi linkin. Toinen luki kappaleen ja päätti, että se kuulosti oikealta. Olet jo sanonut tälle ryhmälle, että chatbotin antamat tiedot on varmistettava, eikä sanominen tuottanut käyttäytymistä.

Varmistaminen on järjestys, jonka voi rakentaa tehtävään. Päätä, mikä lasketaan oikeaksi, ennen kuin tehtävä alkaa, anna opiskelijan sitoutua odotukseensa kirjallisesti, lähetä hänet tietueen luo oman proosavaikutelmansa sijaan ja arvioi se, mitä hän tuottaa. Arviointimatriisin rivi ”lähteet tarkistettu” ei mittaa mitään tuosta.

## Lyhyt versio

**1.** Kirjoita vastausavain ensin. Tarkistus tarvitsee jotain, mitä vasten ratkaista, eikä useimmissa varmistustehtävissä koskaan määritellä, mitä oikea tarkoittaa.

**2.** Vaadi ennuste ennen kuin tuotos ilmestyy, jotta opiskelijan päättely on paperilla ennen kuin työkalu voi kirjoittaa sen yli.

**3.** Nimeä jokaisen tarkistuksen kohde: tekijäluettelo, julkaisufoorumi, vuosi, tietty luku, tietty vaihe. ”Varmista, että se on oikein” ei ole tarkistus.

**4.** Erota tarkistus, jonka kone voi suorittaa, siitä harkinnasta, jonka vain lukija voi tehdä, ja opeta opiskelijoille, kumpaa he tekevät.

**5.** Arvioi muistio avainta vasten, ei yrittämistä vasten, jotta tarkistusteatteri ei ansaitse mitään.

**6.** Aikatauluta tarkistus tehtävän sisään. Aikapaine on dokumentoitu syy siihen, että opiskelijat ohittavat sen.

## Päätä, mitä oikea tarkoittaa, ennen kuin kukaan tarkistaa mitään

[[verification-quality-reliance-calibration-genai-2026|Wei ja Shang (2026)]], jotka kävivät läpi 493:tä päällekkäisyydet poistettua tietuetta ja kartoittivat 14 prioriteettina pidettyä empiiristä tutkimusta, erottavat seitsemän asiaa, jotka ”kriittinen tekoälyn käyttö” latistaa yhdeksi: episteeminen arviointi, varmistamisen aloittaminen, prosessin laatu, varmistamisen onnistuminen, nojautumispäätökset, välitön tehtävän suoriutuminen ja itsenäinen oppiminen. Arviointimatriisisi sanoo ”lähteet tarkistettu”, mikä on vaiheessa kaksi eikä kerro mitään siitä, oliko tarkistus pätevä tai muuttiko se opiskelijan vastausta. Aloittaminen ei ole onnistumista. Vahva prosessi voi päättyä tuloksettomana, heikko voi osua oikeaan vastaukseen, ja opiskelija, joka suoritti haun ja jäi hämmentyneeksi, saa samat pisteet kuin se, joka ratkaisi kysymyksen.

Sama katsaus vetää toisen rajan [[trust|luottamuksen]] ja nojautumisen välille. [[trust-calibration|Nojautumisen kalibrointi]] kysyy, oliko nojautumispäätös sopiva tuotoksen todellisen laadun kannalta, mikä sitoo harkinnan yhteen päätökseen ja yhteen tuotokseen. Yhdessä auditoidussa tutkimuksessa väärä ChatGPT-tieto muutti osallistujien raportoimaa luottamusta eikä lainkaan kirjannut, hyväksyivätkö vai hylkäsivätkö he myöhemmin tietyn suosituksen. Toinen kirjasi hyväksymis- ja hylkäämispäätökset ChatGPT:n [[feedback|palautteesta]] 78 käännösopiskelijalta, mutta ilman riippumatonta asiantuntija-arviointia hyväksymistä ei voida kutsua sopivaksi eikä hylkäämistä perustelluksi. Ilman riippumatonta tietoa tuotoksen todellisesta laadusta nojautumista ei voi lainkaan luokitella.

Siinä on suunnittelun seuraus, ja se on ensimmäinen asia, joka on korjattava. Ennen kuin asetat varmistustehtävän, kirjoita kaksi lyhyttä kuvausta: miltä oikea tuotos näyttää tässä tehtävässä ja miltä uskottava mutta väärä tuotos näyttää. Yksi kutakin riittää. Opiskelijoilla on silloin standardi, jota vasten tarkistaa, ja sinulla on jotain, mitä vasten arvioida tarkistus muuten kuin sen perusteella, kuulostaako opiskelija huolelliselta.

## Anna heidän sitoutua ennen kuin työkalu vastaa

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] rakentaa mittausohjelman *ennusta ennen kuin suoritat* -periaatteen ympärille: oppija ilmoittaa, mitä pitäisi tapahtua, ja sitten artefaktin käyttäytymistä arvioidaan ennustetta vasten alakohtaisin perustein eikä sen mukaan, toimiiko se. Päättely on olemassa ennen tuotosta, ja juuri se tekee siitä arvioitavaa.

Hänen 24 tutkimuksen auditoinnissaan sama työkalu tuotti vastakkaisia tuloksia erilaisissa tehtävärakenteissa. Tavanomainen ChatGPT-asetelma päättyi merkitsevästi matalampaan saavutukseen, [[self-efficacy|itsetehokkuuteen]] ja flow-tilaan, kun taas ehto, johon lisättiin varmistusvaatimukset ja virhereflektiomoduulit, osoitti vahvempaa [[critical-thinking|korkeamman tason ajattelua]]. Työkalu oli vakio näiden ehtojen välillä. Vaihtelua oli siinä, vaadittiinko tehtävässä opiskelijaa pitämään kantaa, jonka työkalu voi kumota.

Käytännössä se on yksi rivi tehtävämonisteessa: ennen kuin avaat työkalun, kirjoita, mitä odotat sen sanovan ja miksi. Vertaa sitten. Kaksi opiskelijaa voi tuottaa saman kappaleen, ja vain toinen heistä osaa selittää, missä kappale poikkeaa siitä, mitä hän ennusti.

## Lähetä heidät itse tietueen luo

[[citation-errors-hallucinations-computing-education-2026|Denny ym. (2026)]] jäljittivät 113 588 viitettä 5 225 tietojenkäsittelytieteen koulutuksen artikkelista, jotka on julkaistu vuodesta 2021 lähtien, ja varmistivat käsin 828 epäilyttävää tietuetta. He löysivät 30, joissa oli todennettavasti keksittyä bibliografista tietoa, yhteensä 14 artikkelista, kaikki vuosilta 2025 ja 2026. Kolmetoista oli kokonaan keksittyjä. Loput 17 yhdistivät todellisen otsikon keksittyyn tai virheelliseen tekijyyteen, julkaisufoorumiin tai vuoteen. SIGCSE Technical Symposiumissa tapauksia oli vuoden 2025 julkaisuissa 3 ja vuonna 2026 jo 17 eli 2,3 % tuon vuoden symposiumjulkaisuista.

Tekijätiedot pettävät useammin kuin mikään muu tuotetun viitteen osa. Yksin tuo löydös kertoo, mitä pyytää. ”Avaa lähde ja lue tekijäluettelo” osuu kenttään, joka todennäköisimmin on väärä, ja tuottaa tiedon, joka opiskelijalla joko on tai ei ole. ”Varmista, että lähteet ovat todellisia” tuottaa vakuuttelun. Pyydä opiskelijoita vahvistamaan tekijät, julkaisufoorumi ja vuosi itse tietueesta. Artikkeli pyytää, että jokainen viitattu työ varmistetaan ja että mikä tahansa automaattinen tarkistin pysyy [[human-in-the-loop-ai|ihminen silmukassa]] -periaatteen mukaisena, mikä on täsmälleen se tapa, jota lähdevaatimus harjoittaa.

## Erota koneen suorittama tarkistus harkinnasta, jonka vain lukija voi tehdä

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] asettaa puolustettavan riman sille, mitä saa tarkistaa mekaanisesti: dokumentoidut kriteerit, vertailu vakiintuneeseen tietoon ilman tulkinnallista harkintaa ja yksi oikea vastaus tai ennalta määritellyt hyväksyttävät vaihtoehdot. Päivämäärät, kaavat, viitteet ja laskelmat ylittävät riman. Mikä tahansa tulkitseva ei ylitä, ja siellä opiskelijan oma luenta on tarkistuksen väline.

Gousopoulos muotoilee saman jaon signaalintunnistusongelmaksi, jossa on kaksi riippumatonta parametria. Herkkyys on kykyä erottaa oikea tuotos virheellisestä; kriteeri on se, mihin oppija asettaa hylkäämisen kynnyksen. Liiallinen nojautuminen jakautuu tuon rajan kahta puolta. Varoitukset, tarkistuslistat ja hallusinaatiokehotteet siirtävät kriteeriä ja muuttavat sitä, milloin opiskelija hylkää. Alakohtainen opetus, mallisuoritukset ja siemennettyjen virheiden harjoittelu nostavat herkkyyttä, koska oppija pystyy silloin erottamaan. Opiskelija, joka hyväksyy virheellisen tuotoksen, voi kärsiä kriteeriongelmasta tai herkkyysongelmasta, ja ne vaativat eri opetusta.

Edellytys on epämukava. Varmistuksen opetus on kasvattavaa vain siellä, missä herkkyys voi ylittää nollan, mikä edellyttää tarpeeksi alakohtaista tietoa oikean ja virheellisen tuotoksen erottamiseen. Samassa auditoinnissa noviisit, joita pyydettiin selittämään [[llm|LLM:n]] tuottamaa koodia, onnistuivat noin kolmanneksessa tehtävistä, joten tekoälypalautteen tai koodin arvioiminen omaa päättelyä vasten on todellinen tarkistus vain siellä, missä tuolla päättelyllä on sisältöä. Jos opiskelijasi eivät vielä pysty tekemään alakohtaista ajattelua ilman apua, lisävaroitukset eivät osta mitään. Opeta sisältö ja liitä tarkistus siihen.

Vielä yksi varoitus kuuluu suunnitteluun: interventiot, jotka vähentävät sopimatonta hyväksymistä, on myös tarkistettava oikean avun tahattoman hylkäämisen varalta. Jätä opiskelijalle tilaa hyväksyä hyvä tuotos ilmoitetusta syystä.

## Arvioi tarkistus tekemättä siitä valvontaa

Gousopoulos vetää seurauksen suoraan. Jos tekoäly voi tuottaa artefaktin, artefakti ei voi olla arviointi, joten arviointi siirtyy määrittelyyn, validoinnin päättelyyn ja tulkintaan. Hänen kirjoittajuuden mallissaan on neljä osa-aluetta: määrittely, käsitteellinen malli, varmistus ja tulkinta. Ne sijoittuvat neljälle järjestetylle tasolle delegoidusta itse tuotettuun. Itse tuotettu taso edellyttää todennettavaa määrittelyä ennen ensimmäistä kehotetta, tuotoksen hylkäämistä alakohtaisin perustein ilmoitetusta syystä ja tulkintaa, joka menee artefaktin oman itsestään kertomisen yli.

Arviointimatriisi nojaa aineistoon, jota rakennustehtävä tuottaa jo muutenkin, joten sama väline on sekä [[formative-assessment|formatiivinen arviointi]] että tutkimusmittari. Se vastaa huoleen turhasta työstä: pisteytät jo asettamasi tehtävän sivutuotteen. Kaksi rajaa kuuluu sen viereen. Mikään Wei ja Shangin 14 prioriteettitapauksen tutkimus ei mitannut varmistamisen onnistumista ja sitä seuraavaa nojautumispäätöstä yhdessä, ja harva seurasi välitöntä suoriutumista viivästyneellä muistamisella tai [[transfer-of-learning|oppimisen siirrolla]], joten arviointimatriisi nojaa analyyttiseen karttaan eikä validoituun kausaaliseen ketjuun.

Kolme päätöstä pitää tämän poissa valvonnasta. Arvioi tarkistus ratkaistua laatua vasten eikä yrittämistä vasten, tai rakennat kannustimen esittää tarkistamista. Ilmoita alkuperä, kuten Venetsanos vaatii: opiskelijoiden on tiedettävä, mitkä osat saamastaan palautteesta oli varmistettu koneellisesti, mitkä arvioitu tulkitsevasti ja että ihmisen harkinnalla on etusija, koska he eivät voi punnita palautetta, jota eivät osaa sijoittaa. Ja pidä täytäntöönpano pois tunnistintyökaluista. [[bassett-ai-detectors-education-2026|Bassett ym. (2026)]] väittävät, että [[ai-detection|tekoälyn tunnistusta]] ei pitäisi käyttää koulutuksessa lainkaan: sen arviot ovat todennäköisyyksiin perustuvia eikä niitä voida varmistaa riippumattomasti, koska todellisen tekstin alkuperä on tuntematon, sen pisteet eivät täytä todennäköisyyksien tasapainon standardia, jota rehellisyystutkinta vaatii, ja ihmisen ja tekoälyn vastakkainasettelu on merkityksetön työlle, joka on tehty tekoälyn kanssa eikä tekoälyllä. Heidän johtopäätöksensä on, että tunnistus ”ei suojele akateemista rehellisyyttä, se heikentää sitä”. Valvontajärjestelmät ruokkivat epäluuloa ja rapauttavat opiskelijoiden [[trust|luottamusta]]. Pidä tunnistuksen kaksi merkitystä erillään. Tekoälyn tuottaman tekstin tunnistamisella ei ole tässä puolustettavaa näyttöroolia; opiskelijoiden opettaminen tunnistamaan virheitä tekoälyn tuotoksessa on koko harjoitus.

Erottelu on rakenteellinen, ja siitä kannattaa kertoa opiskelijoille. [[vetting-dual-llm-safety-education|Li, Zhang ja Botelho (2026)]] tarkistavat tuotoksen toisella mallilla sen sijaan, että upottaisivat tarkistuksen tuottajaan. Opiskelija, joka näkee miksi, näkee myös, miksi ”työkalu sanoi, että se on oikein” ei ole varmistuksen argumentti.

## Jos suunnittelet kurssia etkä opeta sitä

Kolme edellä esitettyä löydöstä kuuluu kurssin rakentamiseen, eikä yksin työskentelevä opettaja pääse niihin.

Ensimmäinen on diagnoosi. Suorita siemennettyjen virheiden tehtävä: kaksikymmentä kohtaa, joista kahdeksassa on alakohtainen virhe. Se kertoo, pystyvätkö opiskelijat erottamaan lainkaan, ennen kuin kulutat lukukauden opettaen kriteeriä, jota he eivät voi käyttää. Luokka, joka ohittaa siemennetyt virheet, tarvitsee sisällön kertausta riippumatta siitä, mitä opetussuunnitelma sanoo kriittisestä käytöstä.

Toinen on varoituksen sijoittaminen. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings ja Park (2026)]] näyttivät yleisen ennakkovaroituksen välittömästi ennen kahta tehtävää 100 yhdysvaltalaiselle opiskelijalle, joista 40 oli kotimaisia ja 60 kansainvälisiä EFL-opiskelijoita. Inokuloidut opiskelijat varmistivat merkitsevästi todennäköisemmin akateemisen lähteen tiivistämisen tehtävän (M = 0,34 vastaan 0,18), kun taas itse ilmoitetut varmistusaikeet eivät muuttuneet. Vaikutus riippui myös tehtävästä: se ilmeni lähteen tiivistämisen tehtävässä mutta ei yhdenmukaisesti potensseja ja suurten lukujen kertolaskua koskeneessa matematiikan visassa. Sijoita varoitus käyttökohtaan, tehtävätyyppi kerrallaan, eikä kerran opetussuunnitelmaan tai orientaatiomoduuliin.

Kolmas on aikataulutus. Opetussuunnitelma, joka jättää varmistamisen aikatauluttamatta, sanoo, että se on vapaaehtoista, ja aikapaine on dokumentoitu syy siihen, että opiskelijat ohittavat tarkistukset. Varmistaminen, joka elää tehtävän sisällä ja johon liittyy arvioitava artefakti, tapahtuu. Varmistaminen, joka elää politiikan kappaleessa, ei tapahdu.

## Jos olet opiskelija ja luet tätä

Neljä liikettä kattaa suurimman osan siitä, mitä tutkimus sinulta pyytää.

Kirjoita odotuksesi ennen kuin kehotteistat. Yksi lause siitä, mikä vastauksen pitäisi olla, ja vertaa sitten tuotosta siihen.

Avaa lähde. Lue tekijäluettelo, julkaisufoorumi ja vuosi tietueesta, koska tekijäkenttä on se, jossa tuotetut viitteet useimmin pettävät.

Kirjoita mihin tahansa tulkitsevaan asiaan perustelu omin sanoin. Keksitty perustelu on yhtä näkyvä kuin keksitty viittaus.

Älä luota tunteeseen, että proosa lukee hyvin. Noviisit, joita pyydettiin selittämään LLM:n tuottamaa koodia, onnistuivat noin kolmanneksessa tehtävistä, ja opiskelijoiden ja ChatGPT:n visakeskustelujen kenttätutkimuksessa oikean ohjeen seuraaminen tuotti silti väärän vastauksen. Se, mitä voit tarkistaa, on kapeampaa kuin se, mitä voit lukea.

## Mitä opettajat ymmärtävät tässä väärin

**”Olen jo sanonut heille, että lähteet on tarkistettava.”** Varoitus pyytää asennetta. Huolellisilla opiskelijoilla se on, kiireisillä ei, eikä lauseessa ole mitään, mihin opiskelija voi tarttua kello 11 illalla, kun ruudulla on tuotos, joka lukee täysin hyvin.

**”Rivi arviointimatriisissa lähteiden tarkistamisesta kattaa tämän.”** Se rivi on aloittamisen vaiheessa eikä kerro mitään prosessin laadusta tai onnistumisesta. Opiskelija, joka suoritti yhden haun ja luovutti, saa samat pisteet kuin opiskelija, joka ratkaisi kysymyksen, joten arviointimatriisi palkitsee eleen.

**”Jos he lukevat huolellisesti, he huomaavat virheet.”** Sujuvuus kantaa harkintaa. Auditoitu kirjallisuus osoittaa noviisien onnistuvan noin kolmanneksessa tuotetun koodin selittämisessä, ja kenttätutkimus kirjasi väärän vastauksen, joka saapui oikean ohjeen kautta.

**”Opiskelijat, jotka sanovat varmistavansa, varmistavat.”** Vu, Cummings ja Parkin tutkimuksessa itse ilmoitetut aikeet eivät muuttuneet, mutta toteutunut käyttäytyminen muuttui (M = 0,34 vastaan 0,18). Arvioi käyttäytymistä, joka muuttui.

**”Tarkistuksen ohittavat ne, joita ei kiinnosta.”** [[trust-calibration-chatbots-design-problem-2026|Jaidka ja Cai (2026)]] risteyttävät kyvyn varmistaa ja motivaation varmistaa, ja profiilit tarvitsevat erilaiset keinot. Korkean kyvyn ja matalan motivaation opiskelija on altis hyväuskoiselle liialliselle luottamukselle. Matalan kyvyn ja matalan motivaation opiskelija on kaikkein alttein. Kaksi samassa tarkistuksessa epäonnistuvaa opiskelijaa voi tarvita vastakkaista opetusta, ja [[prior-knowledge|aiempi tieto]] ratkaisee, kumpaa katsot.

**”Useammat varoitukset korjaavat ne, jotka eivät osaa erottaa.”** Varoitukset siirtävät kriteeriä. Ne eivät nosta herkkyyttä, ja herkkyys on se, mikä erottaa opiskelijan, joka huomaa virheen, siitä, joka ei.

**”Tunnistin tukee politiikkaa.”** Edellä esitetyllä näytöllä tunnistimen pistemäärä ei täytä standardia, jota rehellisyystapaus vaatii, ihmisen ja tekoälyn jako ei pidä tekoälyn kanssa tehdylle työlle, ja järjestelmä maksaa sinulle sen [[trust|luottamuksen]], jonka tarvitset, jotta opiskelijat ilmoittaisivat mitään.

## Mitä sinulle tullaan vastaamaan

**”He voivat vain tehdä sen arvosanan takia.”** Osittain totta, joten arvioi aineistoa, jota tekoäly ei voi tuottaa opiskelijan puolesta. Ennen ensimmäistä kehotetta kirjoitettu määrittely, ennen artefaktin suorittamista kirjattu ennuste, tietuetta vasten tarkistettu lähdeluettelo, ilmoitettu alakohtainen syy hylkäämiselle: jokainen vaatii opiskelijaa pitämään kantaa, jota tuottaja ei voi tarjota. Keksitty perustelu on yhtä näkyvä kuin keksitty viittaus. Siellä, missä opiskelijalla ei ole alakohtaista tietoa, jota vasten tarkistaa, varmistaminen on teatteria eikä mikään arviointimatriisi pelasta sitä, ja se on argumentti sen puolesta, että sisältö opetetaan ensin.

**”Opetussuunnitelmassa ei ole aikaa.”** Ennakkovaroitus on yksi viesti ennen tehtävää. Siemennettyjen virheiden tehtävä käyttää uudelleen visaa, jonka annat jo. Arviointimatriisi kulkee aineistolla, jota tehtävä tuottaa jo, joten se maksaa arviointiaikaa näytöstä, joka sinulta muuten puuttuisi. Vaihtoehto maksaa enemmän: varmistamattomat palautukset, keksityt viitteet ja niitä seuraavat rehellisyyskeskustelut.

**”Työkalu on yleensä oikeassa.”** Silloin tarkistus on halpa ja poikkeukset ovat koko asian ydin. Tekijätiedot pettävät useammin kuin mikään muu tuotetun viitteen osa, 30 keksitystä kohdasta 17 yhdisti todellisen otsikon väärään tekijyyteen, julkaisufoorumiin tai vuoteen, ja 17 ilmestyi yhden vuoden symposiumjulkaisuissa. Tarkkuus niissä osissa, jotka sattumalta huomaat, ei kerro mitään niistä osista, joita et huomaa.

**”Opiskelijani eivät tiedä tarpeeksi arvioidakseen tuotosta.”** Se on herkkyyskynnys, ja se on todellinen. Gousopoulos ennustaa varmistuksen opetuksen epäonnistuvan alakohtaisen tietämyksen lattian alapuolella ja huomauttaa, että jotkut alat tarjoavat ulkoisen kriteerin, fysiikka, kemia, ekologia ja epidemiologia niiden joukossa, kun taas historia, kirjallisuus ja [[ethics|etiikka]] suurelta osin eivät. Opeta ala ja liitä tarkistus siihen, tai odota tarkistuksen muuttuvan rituaaliksi.

**”Tämä on valvontaa.”** On, jos arvioit yrittämistä tai katselet, miten opiskelijat työskentelevät. Arvioi artefakti avainta vasten, kerro, mikä palaute tarkistettiin koneellisesti ja mikä arvioitiin ihmisen toimesta, ja jätä tunnistimet siitä pois.

## Mitä tehdä tällä viikolla

**1.** Kirjoita seuraavaa tehtävääsi varten kaksi kuvausta: oikea tuotos ja uskottava väärä. Se on avain, jota vasten tarkistus ratkeaa.

**2.** Lisää ennusterivi. Yksi lause, kirjoitettu ennen kuin työkalu avataan, vertailtu jälkeenpäin alakohtaisin perustein.

**3.** Korvaa ”tarkista lähteesi” lauseella ”avaa tietue ja vahvista tekijät, julkaisufoorumi ja vuosi”.

**4.** Laita kahdeksan siemennettyä virhettä visaan, jonka annat jo, ja katso, ketkä opiskelijat löytävät ne.

**5.** Arvioi yksi varmistusartefakti avainta vasten ja kerro opiskelijalle, mikä osa tarkistuksesta epäonnistui: standardi, prosessi vai päätös.

## Mihin seuraavaksi

[[incorporating-ai-literacy|Tekoälylukutaidon sisällyttäminen]] käsittelee sitä, miten rakennetaan ymmärrys, jonka tämä sivu ottaa käyttöön, ja [[ai-literacy-evidence|tekoälylukutaidon näyttö]] käsittelee sitä, mitä tuo lukutaitotyö on arvoista. [[reducing-over-reliance|Liiallisen nojautumisen vähentäminen]] käsittelee työkaluun nojaavien opiskelijoiden suunnittelupuolta, [[study-with-ai|Opiskelu tekoälyn kanssa]] on opiskelijoille suunnattu kumppanisivu ja [[asynchronous-online-courses-ai|Asynkroniset verkkokurssit ja tekoäly]] käsittelee tämän ongelman versiota, jossa ei ole luokkaa, johon tarkistuksen voisi aikatauluttaa. Palautteesta, jota opiskelijat tarkistavat, ks. [[ai-feedback-quality|tekoälypalautteen laatu]] ja [[hallucination-risk|hallusinaatioriski]].
