---
title: "Mitä kasvattajien pitäisi välttää tekoälyn kanssa?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-10T22:10:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Suurin osa tekoälyä koskevasta ohjauksesta koulutuksessa on muotoiltu sen mukaan, mitä kannattaa kokeilla. Tämä sivu on se toinen lista: käytännöt, jotka näyttö sanoo lopetettaviksi, järjestettynä sen roolin mukaan, jonka pitäisi ne lopettaa. Se ei tarkoituksella ole lista vääristä uskomuksista — [[addressing-common-misconceptions-ai-education|väärinkäsitysten UKK]] käsittelee ne, ja [[misconceptions]]-käsitesivu selittää, miksi ne säilyvät — eikä lista siitä, mitä tutkimus ei vielä pysty kertomaan, minkä [[limitations-in-aied-research|AIEd-tutkimuksen rajoitukset]] kattaa. Painopiste tässä on askel uskomuksen jälkeen: mitä ihmiset todella tekevät, mitä se maksaa ja mitä tehdä sen sijaan.

Kolme epäonnistumista toistuu jokaisessa roolissa. **Korvaaminen** — työkalu tekee ajattelun, joka oppijan olisi pitänyt tehdä, ja tuotos pisteytetään ikään kuin oppija olisi tehnyt sen. **Ansaitsematon näyttö** — signaali, joka on helppo kerätä (varmuus, sujuvuus, sitoutuminen, suoritusaste), tulkitaan todisteeksi jostain, mitä se ei voi osoittaa. **Rakenteen jättäminen kehotuksen varaan** — varoituksen, toimintaperiaatteen lauseen tai koulutustilaisuuden odotetaan tekevän työ, joka kuuluu käyttöliittymän suunnittelulle, arvioinnin suunnittelulle tai hallinnolle.

## Lyhyt versio

**1.** Älä koskaan arvostele, viittaa tai ylennä tuotosta näytöksi kyvystä, joka tuotti sen.

**2.** Kerää avustamaton mittari avustetun rinnalle joka kerta.

**3.** Kohtele sujuvuutta, varmuutta ja sitoutumista käytön piirteinä, älä oppimisena.

**4.** Laita suojatoimi työnkulkuun, älä varoitukseen.

**5.** Oleta, että kaikki data, jonka työkalu voi nähdä, säilytetään, yhdistetään ja vuodetaan.

**6.** Jos väite tulee demon kanssa mutta ilman vertailua, se on markkinointia.

## Opiskelijoille

**Älä luovuta sitä osaa, jota sinun on tarkoitus harjoitella.** Ero ei ole siinä, kuinka paljon tekoälyä käytät, vaan siinä, mikä kognitiivinen työ siirtyy. Kotitehtävien ulkoistaminen nostaa kotitehtäväpisteitä ja laskee kirjattoman kokeen pisteitä — 18 %:n nousu 20 %:n laskua vastaan yhdessä toisen asteen tutkimuksessa — koska harjoitus, joka rakentaa palautettavaa tietoa, siirtyi työkalulle ([[reducing-ai-misuse]]). Jos harjoitus on se, mistä on kyse, työkalu ei voi tehdä harjoitusta.

**Älä lue sujuvuutta tarkkuudeksi.** Sujuva teksti on kielimallin tuotos riippumatta siitä, onko sisältö totta, ja sama mekanismi, joka tekee siitä vakuuttavan tuntuista, on se, joka tekee siitä väärää ([[hallucination-risk]]). Tarkista nimenomaan kyseinen väite, älä kappaleen sävyä. Tarkistamisen tapa harvoin syntyy itsestään: paneelitutkimuksessa, jossa 900 aikuiselle annettiin tekoälyn tuottama tiivistelmä, lukijat seurasivat sen sisällä viitattua lähdettä vain 1 %:ssa käynneistä ([[trust-calibration]]).

**Älä hyväksy samanmielisyyttä palautteena.** Mallit vahvistavat huomattavasti enemmän kuin ihmiset — 11 mallin joukossa tekoälyn vastaukset vahvistivat käyttäjiä 49 % useammin kuin ihmisten vastaukset — ja ylimäärä on se, mikä tekee vuorovaikutuksesta tukevan tuntuista ([[ai-sycophancy]]). Ohjaaja, joka ei ole koskaan eri mieltä kanssasi, on poistanut sen korjaavan signaalin, jonka takia tulit. Pyydä vastalause, älä hyväksyntää.

**Älä vaihda kysymystä vastaukseksi, kun olet jumissa.** Tuottava ponnistelu, jonka ohitat, on se oppiminen; avun hakeminen, joka hakee vastauksen, on eri käyttäytymistä kuin avun hakeminen, joka hakee vihjeen ([[help-seeking]], [[desirable-difficulties]]). Käytä työkaluja, jotka pidättävät valmiin vastauksen.

**Älä liitä henkilökohtaisia, terveys- tai perhetietoja työkaluun saadaksesi paremman vastauksen.** Työkalulla ei ole minkäänlaista velvollisuutta unohtaa niitä, eikä siitä maksettavaa yksityisyyden hintaa näy vastauksen laadussa millään tavalla ([[privacy]]).

## Vanhemmille ja perheille

**Älä tee kotitehtäviä työkalun kanssa tai anna niiden tulla tehdyiksi vieressäsi.** Datassa näkyvä kuvio on arvosanojen inflaatio, jolla on piilevä hinta: kotitehtäväpisteet nousevat 18 %, kun kirjattoman kokeen pisteet laskevat 20 % ([[reducing-ai-misuse]]). Sen, mitä voit tarkistaa, on prosessi — osaako lapsesi selittää askeleen, tehdä sen uudelleen paperilla ja sanoa, mistä oli epävarma? Jos ei, työkalu teki tehtävän.

**Älä anna chatbotista tulla uskottu.** Mielistelevät järjestelmät vahvistavat paljon enemmän kuin ihmiset — 49 % enemmän 11 mallin joukossa — ja vahvistaminen on se mekanismi, joka tekee niistä turvallisen tuntuisia puhua ([[ai-sycophancy]]). Suuressa pitkittäistutkimuksessa käyttäjät kääntyivät mielistelevän tekoälyn puoleen henkilökohtaisessa neuvossa lähes yhtä usein kuin läheisten ystävien ja perheen, ja tyytyväisyys heidän todellisiin suhteisiinsa oli matalampi ([[sycophantic-ai-social-interaction-2026]]). Lapsi, joka tuo hätäänsä mallille, joka on aina samaa mieltä, ei tule kuulluksi; häntä peilataan.

**Älä anna generatiivista chatbottia pienelle lapselle ja kutsu sitä valvotuksi siksi, että olet samassa huoneessa.** Ikäporrastettu ohjaus on konkreettista: tuettuja, ei-generatiivisia toimintoja 9–12-vuotiaille, valvottua generatiivista käyttöä eettisen pohdinnan kanssa 13 ikävuodesta alkaen ([[ai-guidance-children-under-13]]). Nuorimpien lasten kohdalla riski on uskomus — esioperationaalisen vaiheen lapset hyväksyvät tuotetun sisällön totena, eivätkä järjestelmät ole kehityksellisesti kalibroituja antamassaan palautteessa. Aikuisen yhteiskäyttö tarkoittaa kysymistä, mitä lelu juuri teki, ei valvomista oviaukosta ([[early-childhood-elementary-ai-education]]).

**Älä oleta, että koulun työkalu suojaa lapsesi dataa siksi, että koulu valitsi sen.** Kysy, mitä säilytetään, kuinka kauan, kouluttaako se mitään ja kuka muu näkee sen ([[privacy]]). Tietoisuus ei seuraa altistuksesta: kuukausi oppitunnin jälkeen, jossa opiskelijat katsoivat omia lokattuja käyttäytymistietojaan suorana projisoituina, 66 % yhden 7. luokan ryhmästä valitsi edelleen vähiten suojaavan chatbot-asetuksen ([[privacy]]).

**Älä käytä tunnistimen tulosta syyttääksesi lastasi tai tukeaksesi koulun syytöstä.** Vahvimmassa kontrolloidussa testissä tunnistimet merkitsivät 9–15 % muokkaamattomasta ihmisen kirjoituksesta ja tavoittivat alle 4 % ihmismäistetyistä tekoälyn uudelleenkirjoituksista; realistisilla perusosuuksilla vääriä positiivisia on enemmän kuin oikeita osumia ([[ai-detection]]). Kohtele merkintää syynä pyytää nähtäväksi luonnoshistoria ja käydä asiasta keskustelu, ei minään löydöksenä.

**Älä päättele, että työkalun kieltäminen on turvallinen vaihtoehto.** Liian vähäinen luottamus on kalibrointivirhe, jolla on oma hintansa — menetetty kyvykkyys — ja ratkaiseva taito on osuva varmuus, ei välttäminen ([[trust-calibration]]). Hyödyllinen vanhemman liike on sama, jota tutkimus tukee opiskelijoille: vaadi tarkistusvaihe ja tee siitä niin halpa, että väsynyt lapsi todella tekee sen ([[verify-ai-output]]).

**Älä sekoita sisältösuodatinta turvallisuuteen.** Suodattimet käsittelevät sitä, mitä järjestelmä sanoo; ne eivät käsittele sitä, mitä vuorovaikutus tekee oppijalle — kulunutta harjoitusta, mielistelevää samanmielisyyttä tai epätasaista kieltäytymistä ([[pedagogical-safety]]).

## Opettajille

**Älä varmentele tuotosta kyvyksi.** Hiottu palautus on näyttöä hiotusta palautuksesta eikä mistään muusta. Jos arviointi ei pysty erottamaan, mitä opiskelija osaa ilman apua, arviointi on lakannut mittaamasta juuri sitä asiaa, jota todistus väittää todistavansa ([[assessment-validity]], [[authentic-assessment]]). Korjaus on tehtävän uudelleensuunnittelu, ei tiukempi kunniasääntö.

**Älä käytä tunnistimen pistemäärää todisteena vilpistä.** Vahvin kontrolloitu testi merkitsee 38–80 % ohjeiden mukaisesta kevyestä tekoälymuokkauksesta ja 9–15 % muokkaamattomasta ihmisen kirjoituksesta, mutta tavoittaa alle 4 % uudelleenkirjoituksista, jotka on ajettu ihmismäistämispalvelun läpi; 14 kaupallista työkalua itsenäisessä vertailussa jäivät kaikki alle 80 %:n tarkkuuden, ja realistisilla perusosuuksilla vääriä positiivisia on enemmän kuin oikeita ([[ai-detection]], [[should-we-use-ai-detectors]]). Tunnistin voi aloittaa keskustelun; se ei voi lopettaa sitä.

**Älä lisää tekoälyä arviointiin, jota et ole suunnitellut uudelleen.** Työkalun pulttaaminen tehtävään, joka on suunniteltu suoritettavaksi ilman apua, tuottaa täsmälleen sen arvosanainflaation, joka piilottaa menetyksen — kotitehtävät ylös, koe alas. Kysy jokaiselta arvostellulta tehtävältä, mitä avustamaton versio näyttäisi, ja korjaa tehtävä ensin ([[reducing-ai-misuse]]).

**Älä kohtele sitoutumista oppimisena.** Tehtävässä vietetty aika, tyytyväisyys, avunhaun määrä ja chat-aktiivisuus ovat kaikki helppoja instrumentoida ja kaikki yhteensopivia sen kanssa, ettei oppimista tapahdu lainkaan. Suojakaide, joka leikkasi opiskelijoiden siirtymisen väärään tekoälypositioon 42–60,5 %:sta 5,7–8,2 %:iin, ei tuottanut mitattavaa oppimisvaikutusta istunnon sisällä (β = 0,03, p = 0,18). Käyttäytyminen pysyi; oppiminen ei liikkunut ([[student-engagement]]).

**Älä nojaa varoitukseen, kun käyttöliittymä voisi rajoittaa.** Ohjaaja, joka pystyy tuottamaan valmiin vastauksen, tuottaa sen myös määräajan paineessa. Toimiva suojakaide on se, joka on rakennettu itse vuorovaikutukseen, ei se lause, joka seisoo opetussuunnitelmassa ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Älä liitä opiskelijoiden töitä, HOJKS:ia, kurinpitotietoja tai tunnistettavia luonnoksia kuluttajatyökaluun.** Datan minimointi on suunnittelupäätös, jonka teet opiskelijan puolesta riippumatta siitä, oletko lainkaan ajatellut sitä ([[privacy]]).

## Koulutuksen ja opetushenkilöstön kehittäjille

**Älä pidä työkalukoulutusta ja kutsu sitä tekoälylukutaidoksi.** Kehotteita koskeva istunto opettaa yhden tuotteen käyttöliittymän; [[ai-literacy]] on kyky arvioida, milloin työkalua pitäisi käyttää, mitä se sillä hetkellä tekee ja mitä sen tuotoksesta pitää tarkistaa. Opettajat, jotka oppivat napit ilman harkintaa, lähtevät mukaan varmuuden kanssa ja ilman minkäänlaista kalibrointia ([[teacher-ai-competency]]).

**Älä pidä kertaluontoista täydennyskoulutusta ja odota käytännön muuttuvan.** Näyttö [[professional-training|ammatillisesta oppimisesta]] on johdonmukaista kestosta ja seurannasta: yksittäiset tapahtumat liikuttavat itse raportoitua varmuutta ja harvoin luokkahuonekäyttäytymistä, ja varmuuden kasvu voi peittää alleen sen, ettei muutosta tapahtunutkaan ([[educational-development]]).

**Älä jätä huomiotta sitä arviointijärjestelmää, jonka jätät paikoilleen.** Tiedekunta omaksuu opettamasi käytännön vain, jos se arviointijärjestelmä, johon heitä pidetään, ei rankaise siitä. Työpaja tekoälyä kestävästä tehtävänsuunnittelusta, joka järjestetään muuttumattoman koekäytännön rinnalla, opettaa tiedekunnalle, että koulutus on pelkkää koristetta.

**Älä mallinna kritiikitöntä käyttöä, jota vastaan itse varoitat.** Kun esittelet työkalun tuottamalla tuntisuunnitelman tiedekunnan edessä ilman minkäänlaista tarkistusvaihetta, opetat samalla koko yleisölle, että tuotos on tuote.

**Älä hyväksy toimittajan demoa näyttönä vaikuttavuudesta.** Väite, jota olet arvioimassa, koskee oppimista, kun taas demo näyttää vain kyvykkyyden. Pyydä avustamattomia tuloksia, alaryhmätuloksia ja monivuoroista turvallisuustestausta ([[checking-whether-educational-ai-works]]).

## Koulutusteknologian kehittäjille

**Älä optimoi mittaria, joka on helppo lokata.** Istunnon pituus, viestien määrä ja tyytyväisyysarviot paranevat melkein missä tahansa muutoksessa; oppiminen usein ei. Sama tiimi, joka toimittaa suojakaiteen, voi toimittaa kojelaudan, joka palkitsee vuorovaikutuksen määrästä, ja kaksi osoittavat vastakkaisiin suuntiin ([[learning-analytics]], [[student-engagement]]).

**Älä toimita tunnistinta ilman validointitutkimusta konstruktia vasten.** Malli, joka saa 0,98 F1:n vuotaneella jaolla, voi pudota 0,60:een kokeesta riippumattomassa validoinnissa, ja hymytunnistin voi toimia *negatiivisesti* havainnoitsijan arvioimaa empatiaa vasten, koska siltä puuttuu konteksti, joka ihmisarvioijalla on ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Julkaise validointiprotokolla, älä vain otsikko.

**Älä päättele affektia, huomiota tai ”sitoutumista” kasvoista ja kehoista ilman suostumusta ja ilmoitettua tarkoitusta.** Monivuoroinen riski ei ole yksivuoroinen riski: haittojen osuus yhdessä katsauksessa nousi noin 18 %:sta yksivuoroisissa arvioinneissa noin 78 %:iin monivuoroisissa, joten järjestelmä, joka on sertifioitu eristetyillä kehotteilla, on sertifioitu vuorovaikutukselle, jota opiskelijoilla ei ole ([[pedagogical-safety]], [[privacy]]).

**Älä piilota siirtoa.** Opiskelija, joka ei pysty sanomaan, milloin ohjaaja tuottaa ja milloin hakee, tai milloin ihminen on silmukassa, ei voi kalibroida luottamustaan siihen, ja automaatioharha toimii kaikkein puhtaimmin silloin, kun järjestelmä on oikeassa ja ihminen on jo lakannut tarkistamasta ([[automation-bias]], [[trust-calibration]]).

**Älä suunnittele vertailumittarille ja väitä sitten puhuvasi luokkahuoneesta.** Vertailumittarin suorituskyky on vertailumittarin ominaisuus, ei sen ympäristön, jossa sitä käytetään. Raportoi käyttöolosuhteet, joissa testasit, väestö ja tehtävät; muuten luku luetaan lupauksena jostakin aivan toisesta ympäristöstä ([[limitations-in-aied-research]]).

**Älä tee työkalusta ainoaa reittiä avun piiriin.** Jos opiskelijan pääsy palautteeseen riippuu siitä, onko mallia saatavilla, riittääkö kiintiö vai onko lisenssi voimassa, tasa-arvokysymys on jo ratkaistu hankintapäätöksessä ([[equity-in-ai-education]]).

## Koulutushallinnon edustajille

**Älä osta kyvykkyysväitteitä tulosnäyttönä.** Toimittajat voivat esitellä tuotetta; vain arviointi voi esitellä oppimista. Vaadi avustamattomia tuloksia, alaryhmätuloksia, keskeyttämistä ja suunnitelma siitä, mitä tapahtuu, kun pilotti päättyy ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Älä ota käyttöön valvontaa siksi, että se on saatavilla.** Valvontaohjelmistot tallentavat kasvokuvia, henkilöllisyysasiakirjoja, huoneen skannauksia mukaan lukien 360 asteen kuvaukset ja mikrofonin ääntä, ja 80 tutkimuksen katsauksessa vain 25 % ylsi raportointikynnykseen niihin kysymyksiin, joihin instituution on vastattava ennen käyttöönottoa ([[privacy]], [[remote-proctoring]]). Hinta lankeaa opiskelijoille, ja näyttöpohja on selvästi ohuempi kuin itse sopimus antaa ymmärtää.

**Älä kirjoita vain kieltoihin perustuvaa politiikkaa ja kutsu sitä hallinnoksi.** Kielto ilman arvioinnin uudelleensuunnittelua, tukea ja valitusreittiä siirtää käyttäytymistä sen estämisen sijaan, ja se rankaisee opiskelijoita, joilla on vähiten mahdollisuuksia kiistää väärä syytös. Politiikan on katettava myös arvioija: kaksi viidestä palautukseen upotetusta epäsuorasta kehoteinjektio-strategiasta nosti hylätyn esseen pistemäärää ([[institutional-ai-policy]], [[course-ai-policy]]).

**Älä rinnasta käyttöönottoa parannukseen.** Kojelauta, joka raportoi käytöstä, tyytyväisyydestä ja suoritusasteesta, näyttää menestykseltä silloin, kun varsinainen oppimisen mittari pysyy tasaisena. Päätä etukäteen, mikä tulos saisi sinut irtisanomaan sopimuksen ([[ai-ed-evaluation]]).

**Älä anna saavutettavuuden saapua mukautuspyyntönä.** Katsauksessa 40 tutkimuksesta digitaalisista apuvälineistä neuroerityisille opiskelijoille 28 teki osallistumisen ehdoksi virallisen diagnoosin — diagnoosiporttinen malli, joka sulkee pois jokaisen oppijan, jolla on tarpeita mutta ei minkäänlaista merkintää ([[accessibility]], [[universal-design-for-learning]]).

## Koulutustutkijoille

**Älä anna itsearvioinnin kantaa kausaalista väitettä.** Varmuus, koettu oppiminen ja tyytyväisyys ovat tuloksia, mutta eivät niitä tuloksia, joita useimmat tutkimukset sanovat mittaavansa. [[empathy|empatia]]kirjallisuus on selkein tapaus: ala, joka aikoo opettaa empatiaa, mittaa enimmäkseen mukavuutta, ja vahvin 17 tutkimuksen katsaus havaitsi varmuuden kasvun paljon yleisemmäksi kuin näytön empatiasta itsestään ([[self-report-measures]], [[empathy]]).

**Älä lainaa vaikutusta ilman sen asetelmaa.** Kriittisessä katsauksessa 80 HCI-tutkimuksesta, jotka käsittelivät kriittistä ajattelua tekoälyn kanssa, 42:ssa ei ollut kontrolliryhmää lainkaan. Otsikkoviikutus 30 opiskelijasta yhdellä kurssilla yhdessä paikassa on hauraan väitteen tavallisin muoto ([[limitations-in-aied-research]]).

**Älä raportoi heterogeenisyyttä ilman mallia.** Sama data antaa I² = 82,98 % kiinteän vaikutuksen mallilla ja 15,75 % satunnaisvaikutusmallilla; lainattu I² ilman malliaan on tulkitsematon ([[meta-analysis-systematic-review]]).

**Älä yleistä yhdestä kontekstista ja kutsu sitä löydökseksi.** Yksi kurssi, yksi instituutio, yksi malliversio, yksi kieli. Mallin käyttäytyminen muuttuu jokaisessa julkaisussa, ja yhdellä sukupolvella koulutetut tunnistimet menettävät herkkyyttä seuraavalla ([[research-gaps-aied]], [[ai-detection]]).

**Älä kohtele vuorovaikutuksen ja tuloksen välistä korrelaatiota mekanismina.** Kehotteiden määrä ei mittaa kognitiivista siirtokuormitusta — määrän mukaan klusteroidut ryhmät eivät eronneet kognitiivisen työn jakautumisessa, ja käsin koodattu dialogi ei löytänyt siirtokuormitusta lainkaan 49,6 %:ssa 125 dialogista ([[cognitive-offloading]]). Mittaa työtä, älä sen näkyvää jälkeä.

**Älä julkaise rajoituksen kappaletta, joka olisi voitu kirjoittaa jo ennen tutkimusta.** Nimeä se tietty uhka, se tietty määrä ja se väite, jota se rajaa. Juuri se tekee rajoituksesta seuraavalle lukijalle käyttökelpoisen ([[interpreting-and-applying-aied-research]]).

## Miksi nämä kuuluvat yhteen

Jokainen yllä oleva kohta on tapaus, jossa välillinen mittari on korotettu tuomioksi: essee edustaa kirjoittajaa, pistemäärä edustaa vilppiä, hymy edustaa empatiaa, demo edustaa oppimista, politiikka edustaa hallintoa. Korjaus on aina sama liike — nimeä se konstrukti, etsi mittari, joka voisi päätyä toisinkin, ja kerää se kätevän mittarin rinnalle.

Siksi nämä varoitukset eivät ole lista asioista, jotka olisivat aina väärin. Tunnistin voi olla syy puhua opiskelijalle. Chatbot voi olla hyödyllinen harjoituskumppani. Kojelauta voi olla kehote esittää kysymys. Haitta on aina korvaamisessa, ei työkalussa itsessään.

## Mitä tehdä tällä viikolla

- Valitse yksi arvosteltu tehtävä ja kirjoita muistiin, mitä se näyttäisi työkalu suljettuna. Jos vastaus on ”ei mitään erilaista”, ongelma on tehtävä.
- Lisää yksi avustamaton mittari kurssille, joka raportoi tällä hetkellä vain avustettua suoritusta.
- Lue instituutiosi valvonta- tai tekoälytyökalusopimus säilytyksen, toissijaisen käytön ja tietovuotojen ehtojen osalta — ja tarkista, kuvaako suostumusteksti sitä, mitä järjestelmä todella tallentaa.
- Pyydä toimittajalta avustamattomia tuloksia ja alaryhmätuloksia. Jos vastaus on demo, olet saanut vastauksesi.
- Käytä seuraavassa tiedekuntaistunnossasi toinen puolisko arvioinnin uudelleensuunnitteluun kehotteiden sijaan.

## Minne seuraavaksi

- [[addressing-common-misconceptions-ai-education]] — uskomukset näiden käytäntöjen takana ja miten ne korjataan alentuvuutta välttäen.
- [[limitations-in-aied-research]] — mitä näyttöpohja ei vielä pysty tukemaan.
- [[reducing-ai-misuse]] — rakenteelliset vipuvarret väärinkäyttöön ja miksi ne voittavat kehotuksen.
- [[pedagogical-safety]] — mitä ohjaaja voi tehdä oppijalle läpäisten jokaisen sisältötarkistuksen.
- [[should-we-use-ai-detectors]] — tunnistinnäyttö kokonaisuudessaan.
- [[checking-whether-educational-ai-works]] — miten väite arvioidaan ennen sen omaksumista.
