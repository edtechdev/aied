---
title: "Mitä kasvattajien pitäisi välttää tekoälyn kanssa?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-11T06:20:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Suurin osa tekoälyä koskevasta ohjauksesta koulutuksessa kertoo, mitä kannattaa kokeilla. Tämä sivu kokoaa ne käytännöt, jotka näyttö sanoo, että pitäisi lopettaa, järjestettynä sen roolin mukaan, jonka pitäisi ne lopettaa. Vääristä uskomuksista kerrotaan muualla: [[addressing-common-misconceptions-ai-education|väärinkäsitysten UKK]] käsittelee ne, ja [[misconceptions]]-käsitesivu selittää, miksi ne säilyvät. Se, mitä tutkimus ei vielä pysty kertomaan, kuuluu [[limitations-in-aied-research|AIEd-tutkimuksen rajoituksiin]]. Seuraavassa on kyse uskomuksen jälkeisestä askeleesta: mitä ihmiset tekevät, mitä se maksaa ja mitä pitäisi tehdä sen sijaan.

Kolme epäonnistumista toistuu kaikissa rooleissa.

1. **Korvaaminen.** Työkalu tekee ajattelun, joka oppijan oli tarkoitus tehdä, ja tuotos pisteytetään ikään kuin oppija olisi tehnyt sen. Palautettu essee on kertomus siitä, mitä malli osaa, ei siitä, mitä opiskelija osaa.
2. **Ansaitsematon näyttö.** Halvasti kerättävä signaali, kuten varmuus, sujuvuus, sitoutuminen tai suoritusaste, tulkitaan todisteeksi jostakin, mitä se ei voi osoittaa. Kojelauta voi raportoida neljäkymmentä minuuttia ohjaustuokiosta; se ei voi raportoida, oppiko kukaan toisen asteen yhtälön.
3. **Rakenteen jättäminen kehotuksen varaan.** Varoituksen, toimintaperiaatteen lauseen tai koulutustilaisuuden odotetaan tekevän työn, joka kuuluu käyttöliittymän suunnittelulle, arvioinnin suunnittelulle tai hallinnolle. Opetussuunnitelma sanoo, että tekoälyä pitää käyttää vastuullisesti, ja ohjaaja antaa silti valmiin vastauksen ensimmäisellä kehotteella.

## Lyhyt versio

**1.** Älä koskaan arvostele, viittaa tai ylennä tuotosta näytöksi kyvystä, joka tuotti sen.

**2.** Kerää avustamaton mittari avustetun rinnalle joka kerta.

**3.** Kohtele sujuvuutta, varmuutta ja sitoutumista käytön piirteinä, älä oppimisena.

**4.** Laita suojatoimi työnkulkuun, älä varoitukseen.

**5.** Oleta, että kaikki data, jonka työkalu voi nähdä, säilytetään, yhdistetään ja vuodetaan.

**6.** Jos väite tulee demon kanssa mutta ilman vertailua, se on markkinointia.

## Opettajille

**Älä varmentele tuotosta kyvyksi.** Hiottu palautus on näyttöä hiotusta palautuksesta. Jos opiskelija palauttaa kirjallisuuskatsauksen, jonka lähteitä et voi verrata mihinkään kurssilla opetettuun, eikä arviointi pysty erottamaan, mitä se opiskelija osaa ilman apua, arviointi on lakannut mittaamasta sitä, mitä todistus väittää ([[assessment-validity]], [[authentic-assessment]]). Korjaus on tehtävän uudelleensuunnittelu; tiukempi kunniasääntö ei tee sitä.

**Älä käytä tunnistimen pistemäärää todisteena vilpistä.** Kontrolloidussa tutkimuksessa 642 julkaistusta abstraktista tunnistimet merkitsivät 38–80 % ohjeiden mukaisesta kevyestä tekoälymuokkauksesta ja 9–15 % muokkaamattomasta ihmisen kirjoituksesta, mutta tavoittivat alle 4 % uudelleenkirjoituksista, jotka oli ajettu ihmismäistämispalvelun läpi ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Riippumaton vertailu osoitti, ettei yksikään 14 kaupallisesta työkalusta yltänyt 80 %:n tarkkuuteen, ja pelkkä uudelleenilmaisu puolittaa senkin ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Realistisilla perusosuuksilla vääriä positiivisia on enemmän kuin oikeita osumia ([[should-we-use-ai-detectors]]). Tunnistin voi aloittaa keskustelun; se ei voi lopettaa sitä.

**Älä lisää tekoälyä arviointiin, jota et ole suunnitellut uudelleen.** Työkalun pulttaaminen tehtävään, joka on suunniteltu suoritettavaksi ilman apua, tuottaa täsmälleen sen arvosanainflaation, joka piilottaa menetyksen: kotitehtävät ylös, koe alas. Kysy jokaiselta arvostellulta tehtävältä, mitä avustamaton versio näyttäisi, ja korjaa tehtävä ensin ([[reducing-ai-misuse]]). Jos kotitehtäväsarja ja luokassa pidettävä pikakoe testaavat samaa taitoa, vain toinen niistä mittaa opiskelijaa.

**Älä kohtele sitoutumista oppimisena.** Tehtävässä vietetty aika, tyytyväisyys, avunhaun määrä ja chat-aktiivisuus ovat kaikki helppoja instrumentoida ja kaikki yhteensopivia sen kanssa, ettei oppimista tapahdu lainkaan. 3 × 2 -kokeessa, jossa 186 osallistujaa arvioi siviilioikeudellisia tapauksia LLM-tuetulla alustalla, suojakaide, joka leikkasi siirtymisen väärään tekoälypositioon 42–60,5 %:sta 5,7–8,2 %:iin, ei tuottanut mitattavaa oppimisvaikutusta istunnon sisällä (β = 0,03, p = 0,18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Käyttäytyminen muuttui; oppimisen mittari ei ([[student-engagement]]).

**Älä nojaa varoitukseen, kun käyttöliittymä voisi rajoittaa.** Ohjaaja, joka pystyy tuottamaan valmiin vastauksen, tuottaa sen määräajan paineessa, sanoi opetussuunnitelma mitä tahansa. Toimiva suojakaide on rakennettu itse vuorovaikutukseen ([[reducing-ai-misuse]], [[pedagogical-safety]]). Valmiin vastauksen pidättäminen kahdelta ensimmäiseltä yritykseltä on suunnittelupäätös; pyyntö olla kysymättä sitä on toivomus.

**Älä liitä opiskelijoiden töitä, HOJKS:ia, kurinpitotietoja tai tunnistettavia luonnoksia kuluttajatyökaluun.** Datan minimointi on suunnittelupäätös, jonka teet opiskelijan puolesta riippumatta siitä, oletko ajatellut sitä ([[privacy]]). Ilmainen chatbot-tili, joka vastaa kysymykseen opiskelijan käyttäytymissuunnitelmasta, on myös kopio siitä suunnitelmasta jonkun toisen palvelimella.

## Opiskelijoille

**Älä luovuta sitä osaa, jota sinun on tarkoitus harjoitella.** Oletetaan, että tehtävä on viiden kappaleen essee: liität kehotteen chatbottiin, otat sen palauttaman luonnoksen ja palautat sen. Se, mitä palautat, on kertomus siitä, mitä malli osaa. Kysymys on siitä, mikä kognitiivinen työ siirtyy, ei siitä, kuinka paljon tekoälyä käytät. Kotitehtävien ulkoistaminen nostaa kotitehtäväpisteitä ja laskee kirjattoman kokeen pisteitä: 26 811 toisen asteen opiskelijassa 30 kuukauden ajan seurattuna kotitehtäväpisteet nousivat 18 % ja koepisteet laskivat 20 % kuuden kuukauden kuluessa ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Harjoitus, joka rakentaa palautettavaa tietoa, siirtyi työkalulle ([[reducing-ai-misuse]]). Jos harjoitus on se, mistä on kyse, työkalu ei voi tehdä harjoitusta.

**Älä lue sujuvuutta tarkkuudeksi.** Sujuva teksti on [[llm|kielimallin]] tuotos riippumatta siitä, onko sisältö totta, ja mekanismi, joka tekee siitä vakuuttavaa, on sama, joka tekee siitä väärää ([[hallucination-risk]]). Tarkista nimenomaan kyseinen väite, älä kappaleen sävyä. Tapa harvoin syntyy itsestään: passiivisessa seurantapaneelissa 900 yhdysvaltalaiselle aikuiselle annettiin tekoälyn tiivistelmä, ja lukijat seurasivat sen sisällä viitattua lähdettä 1 %:ssa käynneistä ([[trust-calibration-chatbots-design-problem-2026|Jaidka and Cai, 2026]]). Jos tehtäväsi vaatii kolme lähdettä, avaa kaikki kolme.

**Älä hyväksy samanmielisyyttä palautteena.** Mallit vahvistavat huomattavasti enemmän kuin ihmiset: 11 mallin joukossa tekoälyn vastaukset vahvistivat käyttäjiä 49 % useammin kuin ihmisten vastaukset, ja juuri ylimäärä tekee vuorovaikutuksesta tukevan tuntuista ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Ohjaaja, joka ei ole koskaan eri mieltä kanssasi, on poistanut sen korjaavan signaalin, jonka takia tulit ([[ai-sycophancy]]). Pyydä vastalause, älä hyväksyntää: ”Mikä tässä argumentissa on vialla, ja mitä skeptikko sanoisi?”

**Älä vaihda kysymystä vastaukseksi, kun olet jumissa.** Tuottava ponnistelu, jonka ohitat, on se oppiminen. Avun hakeminen, joka hakee vastauksen, on eri käyttäytymistä kuin avun hakeminen, joka hakee vihjeen ([[help-seeking]], [[desirable-difficulties]]). Käytä työkaluja, jotka pidättävät valmiin vastauksen, ja pyydä seuraava askel ratkaisun sijaan.

**Älä liitä henkilökohtaisia, terveys- tai perhetietoja työkaluun saadaksesi paremman vastauksen.** Työkalulla ei ole velvollisuutta unohtaa niitä, eikä yksityisyyden hintaa näy vastauksen laadussa ([[privacy]]). Parempi kehote ei vaadi diagnoosiasi, osoitettasi tai perheesi nimiä.

## Vanhemmille ja perheille

**Älä tee kotitehtäviä työkalun kanssa tai anna niiden tulla tehdyiksi vieressäsi.** Datassa näkyvä kuvio on arvosanainflaatio, jolla on piilevä hinta: samassa 30 kuukauden paneelissa kotitehtäväpisteet nousivat 18 %, kun kirjattoman kokeen pisteet laskivat 20 % ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Lapsi, joka tuo kotiin täydelliset kotitehtävät ja hylätyn lukukausikokeen, näyttää juuri tämän eron. Sen, mitä voit tarkistaa, on prosessi. Oskaako lapsesi selittää askeleen, tehdä yhden tehtävän uudelleen paperilla ja sanoa, mikä osa oli epävarma? Jos ei, työkalu teki tehtävän.

**Älä anna chatbotista tulla uskottu.** Mielistelevät järjestelmät vahvistavat paljon enemmän kuin ihmiset, 49 % enemmän 11 mallin joukossa, ja juuri vahvistaminen tekee niistä turvallisen tuntuisia puhua ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Suuressa pitkittäistutkimuksessa käyttäjät kääntyivät mielistelevän tekoälyn puoleen henkilökohtaisessa neuvossa lähes yhtä usein kuin läheisten ystävien ja perheen, ja tyytyväisyys heidän todellisiin suhteisiinsa oli matalampi ([[sycophantic-ai-social-interaction-2026]]). Lapsi, joka tuo hätäänsä mallille, joka on aina samaa mieltä, ei tule kuulluksi. Häntä peilataan. Jos lapsesi puhuu chatbotille ystävyydestä tai menetyksestä, se on hetki kysyä, kenelle muulle hän kertoi.

**Älä anna generatiivista chatbottia pienelle lapselle ja kutsu sitä valvotuksi siksi, että olet samassa huoneessa.** Ikäporrastettu ohjaus on konkreettista: tuettuja, ei-generatiivisia toimintoja 9–12-vuotiaille, valvottua generatiivista käyttöä eettisen pohdinnan kanssa 13 ikävuodesta alkaen ([[ai-guidance-children-under-13]]). Nuorimpien lasten kohdalla riski koskee uskoa. Esioperationaalisen vaiheen lapset hyväksyvät tuotetun sisällön totena, eivätkä järjestelmät ole kehityksellisesti kalibroituja antamassaan palautteessa. Aikuisen yhteiskäyttö tarkoittaa lapsen vieressä istumista ja kysymistä, mitä lelu juuri teki, ei oviaukosta seuraamista ([[early-childhood-elementary-ai-education]]).

**Älä oleta, että koulun työkalu suojaa lapsesi dataa siksi, että koulu valitsi sen.** Kysy, mitä säilytetään, kuinka kauan, kouluttaako se mitään ja kuka muu näkee sen ([[privacy]]). Tietoisuus ei seuraa altistuksesta: kuukausi oppitunnin jälkeen, jossa 7. luokan ryhmä katsoi omia lokattuja käyttäytymistietojaan suorana projisoituina, 66 % 47 oppilaasta valitsi edelleen vähiten suojaavan chatbot-asetuksen ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Esitä kysymykset koululle kirjallisesti ja pyydä vastaukset kirjallisesti.

**Älä käytä tunnistimen tulosta syyttääksesi lastasi tai tukeaksesi koulun syytöstä.** Kontrolloidussa tutkimuksessa 642 julkaistusta abstraktista tunnistimet merkitsivät 9–15 % muokkaamattomasta ihmisen kirjoituksesta ja tavoittivat alle 4 % ihmismäistetyistä tekoälyn uudelleenkirjoituksista ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Realistisilla perusosuuksilla vääriä positiivisia on enemmän kuin oikeita osumia ([[ai-detection]]). Kohtele merkintää syynä pyytää luonnoshistoria ja käydä keskustelu, älä löydöksenä.

**Älä päättele, että työkalun kieltäminen on turvallinen vaihtoehto.** Liian vähäinen luottamus on kalibrointivirhe, jolla on oma hintansa, eli menetetty kyvykkyys, ja ratkaiseva taito on osuva varmuus, ei välttäminen ([[trust-calibration]]). Hyödyllinen vanhemman liike on sama, jota tutkimus tukee opiskelijoille: vaadi tarkistusvaihe ja tee siitä niin halpa, että väsynyt lapsi todella tekee sen ([[verify-ai-output]]). Chatbotin käyttämän lähteen kysyminen maksaa minuutin; chatbotin kieltäminen maksaa harjoituksen.

**Älä sekoita sisältösuodatinta turvallisuuteen.** Suodattimet käsittelevät sitä, mitä järjestelmä sanoo. Ne eivät käsittele sitä, mitä vuorovaikutus tekee oppijalle: kulunutta harjoitusta, mielistelevää samanmielisyyttä tai epätasaista kieltäytymistä ([[pedagogical-safety]]).

## Koulutuksen ja opetushenkilöstön kehittäjille

**Älä pidä työkalukoulutusta ja kutsu sitä tekoälylukutaidoksi.** [[prompt-engineering|Kehotteita]] koskeva istunto opettaa yhden tuotteen käyttöliittymän. [[ai-literacy|Tekoälylukutaito]] on kyky arvioida, milloin työkalua pitäisi käyttää, mitä se tekee ja mitä pitää tarkistaa. Opettajat, jotka oppivat napit ilman harkintaa, lähtevät varmuuden kanssa ja ilman kalibrointia ([[teacher-ai-competency]]). Työpaja, joka päättyy siihen, että kaikki osaavat tuottaa tuntisuunnitelman eikä kukaan osaa sanoa, milloin sitä ei pitäisi käyttää, on opettanut käyttöliittymän.

**Älä pidä kertaluontoista täydennyskoulutusta ja odota käytännön muuttuvan.** Näyttö [[professional-training|ammatillisesta oppimisesta]] on johdonmukaista kestosta ja seurannasta: yksittäiset tapahtumat liikuttavat itse raportoitua varmuutta, harvoin luokkahuonekäyttäytymistä, ja varmuuden kasvu voi peittää alleen sen, ettei muutosta tapahtunut ([[educational-development]]). Kahden tunnin istunto elokuussa ilman seurantaa lokakuussa on varmuusinterventio.

**Älä jätä huomiotta sitä arviointijärjestelmää, jonka jätät paikoilleen.** Opetushenkilöstö omaksuu opettamasi käytännön vain, jos se arviointi, johon heitä pidetään, ei rankaise siitä. Työpaja tekoälyä kestävästä tehtävänsuunnittelusta muuttumattoman koekäytännön rinnalla opettaa, että koulutus on pelkkää koristetta.

**Älä mallinna kritiikitöntä käyttöä, jota vastaan itse varoitat.** Kun esittelet työkalun tuottamalla tuntisuunnitelman opetushenkilöstön edessä ilman tarkistusvaihetta, opetat yleisölle, että tuotos on tuote. Tuota se heidän edessään ja merkitse sitten ne kaksi väitettä, jotka pitää tarkistaa.

**Älä hyväksy toimittajan demoa näyttönä vaikuttavuudesta.** Väite, jota olet arvioimassa, koskee oppimista, ja demo näyttää kyvykkyyden. Pyydä avustamattomia tuloksia, alaryhmätuloksia ja monivuoroista turvallisuustestausta ([[checking-whether-educational-ai-works]]).

## Koulutusteknologian kehittäjille

**Älä optimoi mittaria, joka on helppo lokata.** Istunnon pituus, viestien määrä ja tyytyväisyysarviot paranevat melkein missä tahansa muutoksessa; oppiminen usein ei. Sama tiimi, joka toimittaa suojakaiteen, voi toimittaa kojelaudan, joka palkitsee vuorovaikutuksen määrästä, ja kaksi osoittavat vastakkaisiin suuntiin ([[learning-analytics]], [[student-engagement]]). Jos menestysmittarisi on viestejä istuntoa kohden, olet rakentanut tuotteen, joka palkitsee opiskelijat chatissa pysymisestä.

**Älä toimita tunnistinta ilman validointitutkimusta konstruktia vasten.** Viidentoista EEG-mallin vertailu saavutti 0,9853 F1 stratifioidussa ristiinvalidoinnissa; kokeesta riippumaton Group K-Fold, joka kunnioittaa kokeiden rajoja, pudotti huipun 0,6038:aan 25 %:n sattumatasoa vasten ([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]]). Hymytunnistin voi toimia *negatiivisesti* havainnoitsijan arvioimaa empatiaa vasten, koska siltä puuttuu konteksti, joka ihmisarvioijalla on ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Julkaise validointiprotokolla yhdessä otsikkoluvun kanssa.

**Älä päättele affektia, huomiota tai ”sitoutumista” kasvoista ja kehoista ilman suostumusta ja ilmoitettua tarkoitusta.** Monivuoroinen riski ei ole yksivuoroinen riski: yhdessä pedagogisen turvallisuuden katsauksessa haitat nousivat 17,7 %:sta yksivuoroisissa arvioinneissa 77,8 %:iin monivuoroisissa ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Järjestelmä, joka on sertifioitu eristetyillä kehotteilla, on sertifioitu vuorovaikutukselle, jota opiskelijoilla ei ole ([[pedagogical-safety]], [[privacy]]).

**Älä piilota siirtoa.** Opiskelija, joka ei pysty sanomaan, milloin ohjaaja tuottaa ja milloin hakee, tai milloin ihminen on silmukassa, ei voi kalibroida luottamustaan siihen. [[automation-bias|Automaatioharha]] toimii puhtaimmin silloin, kun järjestelmä on oikeassa ja ihminen on lakannut tarkistamasta ([[trust-calibration]]). Kerro käyttöliittymässä, milloin ihminen lukee työn.

**Älä suunnittele vertailumittarille ja väitä sitten puhuvasi luokkahuoneesta.** Vertailumittarin suorituskyky on vertailumittarin ominaisuus. Raportoi käyttöolosuhteet, jotka testasit, väestö ja tehtävät; muuten luku luetaan lupauksena jostakin toisesta ympäristöstä ([[limitations-in-aied-research]]).

**Älä tee työkalusta ainoaa reittiä avun piiriin.** Jos opiskelijan pääsy [[feedback|palautteeseen]] riippuu mallin saatavuudesta, kiintiöstä tai lisenssistä, tasa-arvokysymys on jo ratkaistu hankinnassa ([[equity-in-ai-education]]).

## Koulutushallinnon edustajille

**Älä osta kyvykkyysväitteitä tulosnäyttönä.** Toimittajat voivat esitellä tuotetta; vain arviointi voi esitellä oppimista. Vaadi avustamattomia tuloksia, alaryhmätuloksia, keskeyttämistä ja suunnitelma siitä, mitä tapahtuu, kun pilotti päättyy ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Demo näyttää ohjaajan ratkaisevan tehtävän; se ei näytä opiskelijan ratkaisevan seuraavaa.

**Älä ota käyttöön valvontaa siksi, että se on saatavilla.** Valvontaohjelmistot tallentavat kasvokuvia, henkilöllisyysasiakirjoja, huoneen skannauksia mukaan lukien 360 asteen kuvaukset ja mikrofonin ääntä. Katsaus 80 tutkimuksesta havaitsi, että vain 25 % käsitteli eettisiä kysymyksiä lainkaan, 35 % ei ilmoittanut aineistoaan ja 30 % ei ollut toistettavissa ([[automated-online-exam-proctoring-decade-review-2026|Malhotra and Chhabra, 2026]]). Hinta lankeaa opiskelijoille, ja näyttöpohja on ohuempi kuin sopimus antaa ymmärtää ([[privacy]], [[remote-proctoring]]).

**Älä kirjoita vain kieltoihin perustuvaa politiikkaa ja kutsu sitä hallinnoksi.** Kielto ilman arvioinnin uudelleensuunnittelua, tukea ja valitusreittiä siirtää käyttäytymistä sen estämisen sijaan, ja se rankaisee opiskelijoita, joilla on vähiten mahdollisuuksia kiistää väärä syytös. [[governance|Politiikan]] on katettava myös arvioija: tavallisen arviointityönkulun red team -testissä kaksi viidestä palautukseen piilotetusta kehoteinjektio-strategiasta siirsi hylätyn esseen hyväksytyksi 100 %:n ja 94 %:n onnistumisella tiedostotyypeittäin ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Politiikka, joka sitoo opiskelijoita mutta ei arviointiputkea, on puolikas politiikka.

**Älä rinnasta käyttöönottoa parannukseen.** Kojelauta, joka raportoi käytöstä, tyytyväisyydestä ja suoritusasteesta, näyttää menestykseltä, kun oppimisen mittari pysyy tasaisena. Päätä etukäteen, mikä tulos saisi sinut irtisanomaan sopimuksen ([[ai-ed-evaluation]]). Kirjoita se luku muistiin ennen pilotin alkua.

**Älä anna saavutettavuuden saapua mukautuspyyntönä.** Katsauksessa 40 tutkimuksesta digitaalisista apuvälineistä [[neurodiversity|neuroerityisille opiskelijoille]] 28 teki osallistumisen ehdoksi virallisen diagnoosin. Diagnoosiporttinen malli sulkee pois jokaisen oppijan, jolla on tarpeita mutta ei merkintää ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## Koulutustutkijoille

**Älä anna itsearvioinnin kantaa kausaalista väitettä.** Varmuus, koettu oppiminen ja tyytyväisyys ovat tuloksia, mutta eivät niitä tuloksia, joita useimmat tutkimukset sanovat mittaavansa. [[empathy|Empatia]]kirjallisuus on selkein tapaus: ala, joka aikoo opettaa empatiaa, mittaa enimmäkseen mukavuutta, ja 17 tutkimuksen katsaus havaitsi varmuuden kasvun paljon yleisemmäksi kuin näytön empatiasta itsestään ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail and Zafira, 2026]]; [[self-report-measures]]).

**Älä lainaa vaikutusta ilman sen asetelmaa.** Kriittisessä katsauksessa 80 HCI-tutkimuksesta, jotka käsittelivät [[critical-thinking|kriittistä ajattelua]] tekoälyn kanssa, 42 (52 %) toimi ilman kontrolliryhmää ([[critical-review-critical-thinking-hci-research-ai-2026]]). Otsikkoviikutus 30 opiskelijasta yhdellä kurssilla yhdessä paikassa on hauraan väitteen tavallisin muoto ([[limitations-in-aied-research]]).

**Älä raportoi heterogeenisyyttä ilman mallia.** Sama data antaa I² = 82,98 % kiinteän vaikutuksen mallilla ja I² = 15,75 % satunnaisvaikutusmallilla ([[ai-supported-instruction-stem-meta-analysis-2026]]). Lainattu I² ilman malliaan on tulkitsematon ([[meta-analysis-systematic-review]]).

**Älä yleistä yhdestä kontekstista ja kutsu sitä löydökseksi.** Yksi kurssi, yksi instituutio, yksi malliversio, yksi kieli. Mallin käyttäytyminen muuttuu jokaisessa julkaisussa, ja yhdellä sukupolvella koulutetut tunnistimet menettävät herkkyyttä seuraavalla ([[research-gaps-aied]], [[ai-detection]]).

**Älä kohtele vuorovaikutuksen ja tuloksen välistä korrelaatiota mekanismina.** Kehotteiden määrä ei mittaa kognitiivista siirtokuormitusta. Määrän mukaan klusteroidut ryhmät eivät eronneet kognitiivisen työn jakautumisessa, ja käsin koodattu dialogi ei löytänyt siirtokuormitusta lainkaan 49,6 %:ssa 125 dialogista ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Mittaa itse työtä.

**Älä julkaise rajoituksen kappaletta, joka olisi voitu kirjoittaa jo ennen tutkimusta.** Nimeä se tietty uhka, se tietty määrä ja se väite, jota se rajaa. Juuri se tekee rajoituksesta seuraavalle lukijalle käyttökelpoisen ([[interpreting-and-applying-aied-research]]).

## Miksi nämä kuuluvat yhteen

Jokainen yllä oleva kohta korottaa välillisen mittarin tuomioksi. Essee edustaa kirjoittajaa, pistemäärä edustaa vilppiä, hymy edustaa empatiaa ja demo edustaa oppimista. Korjaus on joka kerta sama: nimeä konstrukti, etsi mittari, joka voisi päätyä toisinkin, ja kerää se kätevän mittarin rinnalle.

Mikään näistä varoituksista ei tarkoita, että työkalu olisi aina väärässä. Tunnistin voi olla syy puhua opiskelijalle. Chatbot voi olla hyödyllinen harjoitus. Kojelauta voi olla kehote esittää kysymys. Haittaa aiheuttaa korvaaminen.

## Mitä tehdä tällä viikolla

- Valitse yksi arvosteltu tehtävä ja kirjoita muistiin, mitä se näyttäisi työkalu suljettuna. Jos vastaus on ”ei mitään erilaista”, ongelma on tehtävä.
- Lisää yksi avustamaton mittari kurssille, joka raportoi tällä hetkellä vain avustettua suoritusta.
- Lue instituutiosi valvonta- tai tekoälytyökalusopimus säilytyksen, toissijaisen käytön ja tietovuotojen ehtojen osalta, ja tarkista, kuvaako suostumusteksti sitä, mitä järjestelmä todella tallentaa.
- Pyydä toimittajalta avustamattomia tuloksia ja alaryhmätuloksia. Jos vastaus on demo, olet saanut vastauksesi.
- Käytä seuraavassa opetushenkilöstön istunnossasi toinen puolisko arvioinnin uudelleensuunnitteluun kehotteiden sijaan.

## Minne seuraavaksi

- [[addressing-common-misconceptions-ai-education]]: uskomukset näiden käytäntöjen takana ja miten ne korjataan alentuvuutta välttäen.
- [[limitations-in-aied-research]]: mitä näyttöpohja ei vielä pysty tukemaan.
- [[reducing-ai-misuse]]: rakenteelliset vipuvarret väärinkäyttöön ja miksi ne voittavat kehotuksen.
- [[pedagogical-safety]]: mitä ohjaaja voi tehdä oppijalle läpäisten jokaisen sisältötarkistuksen.
- [[should-we-use-ai-detectors]]: tunnistinnäyttö kokonaisuudessaan.
- [[checking-whether-educational-ai-works]]: miten väite arvioidaan ennen sen omaksumista.
