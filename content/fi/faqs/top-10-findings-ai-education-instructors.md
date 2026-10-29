---
title: "Mitkä ovat kymmenen keskeistä löydöstä tekoälyn koulutustutkimuksesta, jotka opettajan pitäisi tietää?"
created: "2026-08-24T09:42:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-10-28T11:06:17-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

On lukukauden edeltävä viikko tai viikko ensimmäisen ison palautuksen jälkeen, ja joku on kysynyt sinulta jotain, johon et osaa vastata kokemuksen perusteella: mitä opiskelija saa tehdä tekoälyllä tässä tehtävässä ja mitä arvosana silloin todistaa. Ehkä kotiesse palautui viimeistellyssä muodossa, joka ei sovi yhteen opiskelijan aiemman työn kanssa. Ehkä yksikkösi kirjoittaa tekoälylinjausta ja haluaa kurssisi noudattavan sitä perjantaiksi. Ehkä opiskelija valittaa arvosanasta, etkä osaa näyttää, mitä työ osoittaa.

Tämän tietopohjan keräämän tutkimuksen ydinsanoma: se, miten rakennat [[generative-ai|generatiivisen tekoälyn]] osaksi toimintaa, ratkaisee, vahvistaako se ajattelua vai korvaako se sen. Vipu, jota hallitset, on tehtävän suunnittelu. Minkä tahansa suunnittelun testi on se, mitä opiskelija osaa vielä silloin, kun työkalu on poissa. Tämän sivun nimeämät kymmenen löydöstä ovat alla, lajiteltuna sen mukaan, mitä päätöstä kukin niistä palvelee.

## Lyhyt versio

**1.** Nimeä se ajattelu, jota tehtävä on olemassa tuottaakseen, ja anna tekoälylle työ, joka ei suorita sitä ajattelua.

**2.** Aseta tekoälysääntö tehtäväkohtaisesti, ei kurssikohtaisesti, ja kirjoita perustelu sen viereen sinne, missä opiskelija sen lukee.

**3.** Sisällytä jokaiseen jaksoon ainakin yksi arvosteltava vaihe, jonka opiskelija tekee ilman tekoälyä.

**4.** Arvioi toimintaa sen perusteella, mitä opiskelija osaa viikkoja myöhemmin ilman apua, älä sen perusteella, miten hyvä palautettu työ on.

**5.** Kysy, miten opiskelija käytti työkalua, ja arvostele varmistaminen, älä kirjautumiset.

**6.** Katso, ketkä opiskelijat suunnittelu auttaa, sillä keskiarvo kätkee ne, jotka se pudottaa.

## Päätä, mitä varten tehtävä on

Kirjoita yksi lause, joka nimeää osaamisen, ennen kuin kosket työkaluun: mitä opiskelijan pitäisi osata tämän jakson lopussa, mitä hän ei osannut sen alussa? Vastaus voi olla: rakentaa argumentti näytön pohjalta, kirjoittaa todistus, päätyä diagnoosiin, tehdä suunnittelupäätös reunaehtojen puitteissa. Jos et osaa nimetä sitä, tekoälysääntö jää mielivaltaiseksi ja opiskelijat huomaavat sen.

Kaksi tutkimuslinjaa selittää, miksi tämä tulee ensin. [[productive-failure|Tuottava epäonnistuminen]] on löydös, jonka mukaan oppija usein muistaa enemmän, kun hän yrittää ongelmaa ennen kuin hänelle näytetään miten se ratkaistaan, joten kitka on joskus mekanismi eikä poistettava este. [[icap-framework|ICAP-viitekehys]] ennustaa erilaista oppimista saman aineiston passiivisesta, aktiivisesta, rakentavasta ja vuorovaikutteisesta käytöstä. Molemmat osoittavat yhteen suunnittelukysymykseen: mitä opiskelija tekee sillä aikaa, kun työkalu on auki?

Selkein esimerkki aineistossa tulee vertailusta, jossa teoriapohjaista, opiskelijoiden selityksiä tukevaa chatbottia verrattiin tavalliseen ChatGPT:hen ja tavanomaiseen opetukseen. Välittömät erot eivät olleet merkitseviä. Neljä viikkoa myöhemmin tuettu ryhmä muisti enemmän käsitteellistä tietoa. Se on yksi tutkimus eikä yleispätevä vaikutus, ja sen hyödyllinen sisältö on tuloksen muoto: suunnittelu voi painaa enemmän kuin mallin suorituskyky, sillä ehtoja erotti se, mitä toiminta pyysi opiskelijaa tekemään.

[[kumar-genai-computing-education-systematic-review-2026|Systemaattinen katsaus 72 vertaisarvioituun tietotekniikan opetuksen tutkimukseen]] päätyy samaan kerrokseen toisesta suunnasta. Se kutsuu kriittistä paneutumista tekoälyn tuotokseen ”yhdistäväksi mekanismiksi, joka liittää yhteen kaikki aineiston tehokkaat interventiot”, ja suosittaa [[scaffolding|asteittaista pääsyä]], jossa generatiivinen tekoäly otetaan käyttöön vasta, kun perusosaaminen on osoitettu. Kumpikaan väite ei koske sitä, minkä tuotteen hankit.

## Anna tekoälylle työ, joka ei ole se ajattelu, jota arvostelet

Vuosikymmenien [[intelligent-tutoring|älykkään opastuksen tutkimus]] kuvaa sen kuvion, joka toimii: diagnosoi, mitä opiskelija ymmärtää, kysy kysymyksiä, anna asteittaisia vihjeitä, pyydä selittämään, anna palautetta. Kaikki muu paitsi ratkaisun luovuttaminen. Nykyinen [[pedagogical-agent|pedagogisten agenttien]] työ vetää saman rajan opetuskäyttäytymisen ja vastausten tuottamisen välille, ja [[thermomix-genai-education-analogy-2026|Thermomix-vertaus]] tekee siitä konkreettisen. Yksi laite voi tehdä ruoan puolestasi, jolloin menetät taidon, tai se voi toimia kokeilukumppanina ideoille, joista sinun on vielä saatava selvää. Nämä tilat kuvautuvat ICAP:iin: passiivinen, aktiivinen, rakentava, vuorovaikutteinen.

Kapea-alaiset työkalut osoittavat saman periaatteen. [[structrag-diagram-reasoning-ai-tutoring|Ohjaaja, joka lukee tekniikan kaavioita rakenteellisesti]] ylsi 93,0 %:n reunatason F1-arvoon koko kaavion 89,3 %:n tarkkuutta vastaan, mikä tarkoittaa, että se osaa nimetä ne tietyt puuttuvat tai väärin luetut yhteydet, vaikka koko kaavio olisi väärin. Se on palautetta, jonka pohjalta opiskelija voi toimia, sen sijaan että hän saisi vain hyväksytyn tai hylätyn arvion.

Vaikeampi kysymys on, mitä ohjaaja saa suositella. Kun [[tuo-armada-multi-agent-debate-overreliance-2026|moniagenttinen väittely]] korvasi lauseen ”tässä on tekoälyn vastaus” keskustelulla, jonka oma suosikkikanta pidettiin piilossa, haitallinen siirtyminen väärään tekoälyn kantaan putosi 42-60,5 %:sta 5,7-8,2 %:iin. Myös oikean tekoälyn kannan omaksuminen putosi 61,1-72,3 %:sta 22,1-33,3 %:iin. Se, että suositus pidätetään, suojaa opiskelijan alkuharkintaa ja jättää korjaamisen harkinnalle, joten suunnittelu vaihtaa virheiden korjaamisen siihen, että varmoja harha-askeleita tulee vähemmän. Päätä, kumman noista kahdesta haluat vuorovaikutuksesta, ennen kuin kirjoitat kehotteen.

Luokkahuoneessa tämä on halpa toteuttaa. [[socratic-method|Sokraattinen]] kysymyssarja on se kuvio, jota kohti kannattaa pyrkiä, ja työkalu kysyy sen sijaan että vastaisi. Kehota opiskelijoita pyytämään ”yksi vihje”, ”kysy minulta kysymyksiä” tai ”arvioi päättelyni”, ja tee ”ratkaise tämä” poikkeustapaukseksi. Muutat vuorovaikutuksen oletusverbiä, ja juuri se on se osa, jota opiskelija tosiasiassa ohjaa.

Yksi raja kannattaa sanoa suoraan. Suurin osa tästä näytöstä tulee lyhyistä tehtävistä muutamalla kurssilla, eikä mikään siitä lupaa, että vihjeitä antava ohjaaja nostaisi koepisteitä sinun ryhmässäsi. Siihen kysymykseen tarvitaan jäljempänä käsitelty satunnaistettu koe, ja sen tulos on karu.

## Aseta sääntö tehtävään ja kerro miksi

Hyödyllinen jäsennys erottaa kolme tapausta. Rajoita tekoälyä, kun mittaat itsenäistä osaamista. Tue sillä, kun rajattu apu ei vaaranna sitä osaamista. Vaadi sitä, kun taitava ihmisen ja tekoälyn yhteistyö on itse se asia, joka opiskelijan on opittava. Useimmat kurssit sisältävät kaikki kolme eri viikoilla, minkä vuoksi yksi kurssitason sääntö pettää jatkuvasti reunoilla.

[[zou-is-this-a-trap-student-teachers-genai-2026|Monimenetelmäinen tutkimus 85 luokanopettajaopiskelijasta]] näyttää, mitä sääntö ilman perustelua tuottaa. 62,4 % otoksesta kieltäytyi käyttämästä generatiivista tekoälyä silloinkin, kun se oli sallittua, ja 41,5 % kieltäytyneistä mainitsi syyksi pelon tulla syytetyksi [[academic-integrity|plagioinnista]]. 9 haastatelluista 11:stä luki sallivan linjauksen itsensä ansaksi. Samassa tutkimuksessa vain 37,6 % käytti sallittua generatiivista tekoälyä lainkaan, heidän valintansa seurasivat ohjelman kulttuuria ja [[assessment|arvioinnin suunnittelua]] enemmän kuin minkään yksittäisen kurssin lupaa, ja heidän omat ilmoituksensa aliraportoivat todellista käyttöä jokaisella kurssilla.

Lue nämä luvut suunnitteluohjeena. Lupa ilman kerrottua tarkoitusta näyttää ansalta, ja kielto ilman kerrottua tarkoitusta näyttää esteeltä, jonka voi kiertää. Opiskelijat reagoivat tähän tehtävään liitettyyn perusteluun. Kirjoita sääntö tehtävänantoon yhdellä rivillä ja tee rivistä niin täsmällinen, että opiskelija pystyy päättelemään, kumoaisiko apu, jota hän on ottamassa vastaan, sen asian, jota arvostelet.

## Arvostele jotain, jonka opiskelija teki ilman työkalua

Tämä on se vaihe, joka tekee työn, ja näyttö tässä on koko sivun yksiselitteisintä.

72 tutkimuksen katsaus havaitsi, että generatiivinen tekoäly nosti luotettavasti lyhyen aikavälin valmistumista ja lyhensi tehtävään käytettyä aikaa 36 tutkimuksessa, minkä kirjoittajat pitävät aineiston parhaiten toistettuna tuloksena, ja että ne tehokkuushyödyt ”eivät siirry itsenäiseen suoritukseen” 21 tutkimuksessa. [[yan-cognitive-outsourcing-genai-assessments-2026|Ääneen ajattelun tutkimus 38 kandidaatista]] osoittaa, miten se tapahtuu tavanomaisessa tapauksessa. [[cognitive-offloading|Kognitiivinen siirtokuormitus]] on oppimiselle haitallisinta silloin, kun tekoäly tekee sen päättelyn, jota opiskelijan oli tarkoitus harjoitella. Siinä 76,32 % pysyi yhden vuoron kysy, vastaa, lopeta -kaavassa, ja vain 21,06 % vuorotteli tekoälyn käyttöä itsenäisen lukemisen ja kirjoittamisen kanssa. Suurin ryhmä, 31 henkeä 38:sta, kuvasi hallintatavoitteita, työskenteli sirpaleisissa yksittäisissä vuoroissa ja raportoi sen jälkeen liiallista nojautumista, henkistä mukavuudenhalua ja nopeaa unohtamista; yksi heistä muotoili sen niin, että ”myös unohtamisen vauhti on hyvin nopea”. [[critical-thinking-paradox-genai-learning-2026|Vuoden 2026 viitekehysartikkeli]] antaa tälle kuviolle nimen. Arvosanat ja tuotokset nousevat, kun taas kestävän oppimisen tuottava henkinen työ laskee.

Satunnaistettu koe ratkaisee väittelyn ainakin yhdessä ympäristössä. [[bassner-performance-learning-dissociation-ai-programming-2026|Kolmen haaran satunnaistettu koe 275 CS1-opiskelijalla]] vertasi vihjeitä antavaa ohjaajaa, joka pidätti täydet ratkaisut, rajoittamatonta ChatGPT:tä ja perinteisiä verkkolähteitä. Harjoitustehtävien pisteet erottuivat jyrkästi: 71,84 % ChatGPT:llä vastaan 29,85 % ilman tekoälyä toimineessa verrokkiryhmässä, ja vihjeitä antava ohjaaja sai 57,50 %. Käsitteellisen tiedon lisäykset eivät eronneet lainkaan kolmen haaran välillä, vaan olivat 0,83, 0,71 ja 0,85 pistettä (aika × ryhmä p = 0,773). Molemmat tekoälyehdot vähensivät turhautumista ja ylimääräistä kuormitusta, ja vain vihjeitä antava ohjaaja nosti sisäistä motivaatiota. Työkalu, jonka opiskelijat arvioivat hyödyllisimmäksi ja helpoimmaksi, oli myös se, joka vähensi eniten sitä prosessointia, joka tuottaa oppimista.

Huomaa, mitä se suunnittelu ei voi tukea. Se on yksi kurssi, yksi lukukausi, yksi kieli, ja harjoitepisteet ovat rakenteellisesti avustettua suoritusta, juuri se mittari, jota tutkimus varoittaa uskomasta. Se ei osoita, että ohjaajat ovat hyödyttömiä. Se osoittaa, että valitsemasi tulosmittari päättää vastauksen, jonka saat, ja että opiskelijoiden mieltymys ei ole oppimisen mittari.

Arvostele siis versio, joka on tehty ilman apua. Yksi tehtävä jaksossa, jossa opiskelija palauttaa mieleensä, selittää, ratkaisee tai puolustaa ideoita ilman tekoälyä, ja anna sille todelliset pisteet. Tämän taustalla oleva validiteettiargumentti on kohdassa [[assessment-validity|arvioinnin validiteetti]]: viimeistelty kotona tehty tuotos ei enää osoita, että sen palauttaneella henkilöllä on se osaaminen, jonka tuotos näyttää. [[redesign-assessment-ai-era|Arvioinnin uudelleensuunnittelu tekoälyaikana]] käy läpi koko rakenteen, mukaan lukien edullisen todennetun vaiheen suurille kursseille.

## Muuta tehtävää, joka sinulla jo on, älä koko kurssia

Useimmat opettajat, jotka kysyvät tämän kysymyksen, eivät rakenna uutta kurssia. Heillä on lukukausityö, laboratorioraportti tai tehtäväsarja, joka on toiminut vuosia, ja he haluavat tietää, mihin sauma kannattaa laittaa. Pura tehtävä vaihe vaiheelta, kysy jokaisesta vaiheesta, mitä siinä arvioit, ja anna vastauksen asettaa raja. Se on tehtävätason menetelmä, jonka [[mccorkle-aligned-genai-course-policy-2025|McCorklen linjakkaan kurssilinjauksen työ]] dokumentoi, ja yleensä yksi kierros kiistellyimmän tehtäväsi läpi riittää sen muodon näkemiseen.

Kymmensivuinen lukukausityö jakautuu tyypillisesti näin. Aiheen valinta ja lähteiden haku ovat paikka, jossa harkinta asuu, joten työkalu, joka ehdottaa väitettä tai kokoaa lukulistan, on suorittanut sen osan, jota arvostelet. Synteesi ja argumentti ovat konstrukti itse. Lähdemerkintöjen muotoilu, viitteiden tarkistaminen ja kielenhuolto ovat vaiheita, joissa työkalun käyttö on näkymätöntä konstruktillesi, eikä sen kieltäminen niissä tuo mitään muuta kuin katkeruutta. Sano tämä tehtävänannossa vaihe vaiheelta, lyhyessä taulukossa jos haluat.

Tee sitten keskimmäinen vaihe näkyväksi. Pyydä yhden sivun kommentoitu perustelu, joka palautetaan työn mukana ja joka nimeää kaksi hylättyä lähdettä ja syyn niiden hylkäämiseen, yhden väitteen, jonka opiskelija tarkistettuaan muutti, ja kohdan, jossa hän päätti olla noudattamatta ehdotusta. Arvostele se samalla täsmällisyydellä kuin käytät proosalle. Perustelu painaa vain, jos sen sivuuttava opiskelija menettää enemmän kuin voittaa, joten anna sille pisteitä niin paljon, että laskelma on ilmeinen.

Tehtäväsarja on helpompi ja sauma on eri paikassa. Vastaukset eivät ole konstrukti; menetelmän valinta ja virheiden diagnosointi ovat. Vaadi jokaisen tehtävän ensimmäinen vaihe opiskelijan omin sanoin ennen kuin mitään työkalua avataan, ja tee yksi sarjan tehtävä luokassa ilman mitään apuvälineitä. Se on pienempi muutos kuin miltä kuulostaa, ja se muuttaa sarjan tuotteesta, jota et voi varmistaa, jäljeksi siitä, miten opiskelija ajatteli.

Laboratorioraportissa sauma on yleensä aineiston tulkinta ja virheanalyysi. Anna työkalun muotoilla taulukko ja tarkistaa yksiköt. Pidä tulkinta, valinta siitä, mikä lasketaan poikkeavaksi, ja selitys odotetusta tuloksesta poikkeamiselle opiskelijan käsissä, ja arvostele ne pisteillä.

Kuvio yleistyy: paikanna vaihe, jossa osaaminen asuu, suojaa se vaihe, vapauta loput ja laita prosessin näyttö sinne, missä pisteet ovat. Vältät uudelleensuunnittelua, joka muuttaa sitä, miten työ tuotetaan, muuttamatta sitä, mitä arvosana voi tukea.

## Arvioi palaute- ja arvostelutyökalut myöhemmän suorituksen perusteella

[[ai-feedback-quality|Tekoälypalaute]] voi olla oikea-aikaista, täsmällistä, skaalautuvaa ja opiskelijoille hyväksyttävää, myös [[higher-ed|korkeakoulutuksessa]]. Se, opettaako se, riippuu tarkkuudesta, [[pedagogy|pedagogisesta]] sopivuudesta ja opiskelijoiden [[feedback-literacy|palautelukutaidosta]], heidän kyvystään arvioida palautetta ja toimia sen pohjalta. Jos punnitset sitä palautteen tai arvostelun tueksi, alla olevat luvut ovat ne, jotka kannattaa ottaa hankintakeskusteluun.

[[mcinnes-salvaging-constructive-alignment-genai-2026|Kriittinen analyysi 14 oppilaitoksen ohjeasiakirjasta]] havaitsi, että yleisluontoiset kehotteet tuottavat oppimistavoitteet, toiminnot ja arvioinnit toisistaan irrallaan. Työkalu ei voi tietää, miten yhteenkietoutunut aihe on, joten sen palaute jää yleiseksi diagnostisesti täsmällisen sijaan.

Konfigurointi liikuttaa laatua mitattavasti. [[teacher-ai-literacy-prompt-feedback-quality-2026|Tutkimuksessa tekoälypalautteesta oppimistavoitteisiin]] pelkkä malli selitti 26,9 % palautteen laadun vaihtelusta ja kehotteen lisääminen nosti sen 42,8 %:iin, siis 15,9 % lisää. Ainoa kehotteen piirre, jolla oli merkitystä, oli oppiainekohtainen terminologia; sen korvaaminen arkikielisillä ilmauksilla heikensi palautetta merkitsevästi. Mallin valinta vaikutti myös: Claude 3 ja Gemini Advanced tuottivat merkitsevästi huonommin arvioitua palautetta kuin ChatGPT-4.

Arvostelu on vielä huteraa. [[llm-automated-grading-programming-comparison-2026|Vertailu, jossa 18 kielimallia arvosteli 6 081 ohjelmointitehtävän palautusta]], havaitsi keskimääräisten arvosanojen vaihtelevan 0,290:stä 0,608:aan mallista riippuen, ja täsmällisen yksimielisyyden osuudet olivat joillakin vain 0,20 ja parhaimmillaan 0,74. Kaksi opiskelijaa, joilla on identtinen työ, voivat saada eri arvosanan sen mukaan, minkä mallin yksikkö hankki.

Sitten on kysymys, josta opiskelijat välittävät: muuttaako palaute sitä, mitä he osaavat myöhemmin. [[llm-feedback-handwritten-mathematics-exam-performance-2026|Lukukauden mittainen käyttöönotto matematiikan perusopintokurssilla]], jossa oli 343 englannin- ja 236 hollanninkielistä opiskelijaa, tuotti yksilöllisiä kommentteja ja harjoitustehtäviä valokuvatuista vastauspapereista. Arvioijat pitivät harjoitustehtäviä vahimpana ja diagnostista täsmällisyyttä ja selkeyttä heikoimpana. Satunnaistettu crossover-mittaus linkitetyissä koekysymyksissä ei löytänyt tilastollisesti merkitsevää eroa korjauksen jälkeen (pHolm = 0,104), ja osallistuminen seurasi koepisteitä selvästi tarkemmin kuin palautteen saaminen (ρ = 0,49 ja 0,54, molemmat p < 0,001). Palaute, jota opiskelijat arvostavat ja jonka pohjalta he toimivat, ei ole sama asia kuin palaute, joka tuottaa mitattavaa oppimista.

Vielä yksi ansa, jos annat mallin arvostella. [[llm-grading-self-preference-bias-2026|Tutkimuksessa 1 426 psykologian väitöskirjasta kymmenen lukuvuoden ajalta]] kaikki neljä tekoälyarvostelijaa antoivat opiskelijoiden kirjoittamalle työlle alimmat ja tekoälyn kirjoittamalle korkeimmat pisteet. 10 vertailua 16:sta oli niin suuria, että sen kokoiset erot ovat harvinaisia koulutustutkimuksessa, aina suurimpaan havaittuun eroon asti, ja vinouma oli vahvin täysin tekoälyn tuottamassa tekstissä. Arvostelija voi palkita tekstiä koneenkaltaisuudesta silloinkin, kun sen ohjeet sanovat, että sisältöä pitää arvioida.

## Erota ne opiskelijat, joita suunnittelu auttaa, niistä, jotka se pudottaa

Keskimääräinen parannus voi kätkeä kurssin, jossa vahvat vahvistuvat ja heikot saavat huonomman osan. [[digital-divide|Digitaalinen kuilu]] kulkee nykyään ainakin kolmea linjaa: pääsy työkaluihin, taito käyttää niitä ja se, kuka tosiasiassa saa hyödyllisen tuloksen. Pelkkä kehotetaito tuottaa ”kehote-etuoikeuden”, jossa kokeneemmat käyttäjät saavat samasta järjestelmästä parempaa tuotosta.

72 tutkimuksen katsaus erottaa kaksi mekanismia. Taitokuilu syntyy, kun vahvemman [[prior-knowledge|aiemman tiedon]] omaavat opiskelijat muuntavat avun kestäviksi hyödyiksi, kun taas heikommin valmistautuneet korvaavat sillä harjoittelun. Resurssikuilu syntyy, kun luotettava internetyhteys ja maksullinen pääsy ylläpitävät parempaa työkalunkäyttöä oppilaitoksesta toiseen. Vain kuusi tutkimusta aineistossa tarkasteli tasa-arvoa suoraan, ja kirjoittajat pitävät sitä ongelmana eivätkä alaviitteenä; [[equity-in-ai-education|tasa-arvo tekoälyn koulutuskäytössä]] on paikka, jossa sitä argumenttia kehitetään.

Apu voi sulkea kuilun, kun apua tarvitsevat opiskelijat ovat niitä, jotka tarttuvat siihen. [[co-learning-ai-agent-hidden-rules-2026|Neljän kokeen tutkimus oppijoista, jotka löytävät piilotettuja sääntöjä tekoälyagentin avustamana]], havaitsi avun vähentävän tarvittavia siirtoja 33-52 %, ja hyöty keskittyi heikoimmin suoriutuville, kun taas vahvempiin oppijoihin se ei juuri vaikuttanut. Se on toiveikas versio, ja se riippuu siitä, että apua eniten tarvitsevat ovat niitä, jotka käyttävät sitä hyvin, mitä taitokuilu antaa ymmärtää, etteivät he siinä onnistu ilman opetusta.

## Pidä seuraukselliset päätökset ihmisellä

Opettajakunnan tekoälylukutaito ei ole siellä, missä linjauskeskustelu olettaa sen olevan. [[science-educators-ai-literacy-postqualification-2026|Luonnontieteiden opettajilla, jotka olivat jo suorittaneet tekoälykoulutuksen]], keskimääräinen tekoälylukutaito oli 16,7 pistettä 30:stä, alle vertailuotoksen 18,79, eikä se ollut yhteydessä ikään, sukupuoleen, palvelusvuosiin tai siihen, kuinka paljon he olivat käyttäneet tekoälyä. [[ai-tpack-mathematics-teacher-education-2026|Kysely 412 tulevalle matematiikan opettajalle]] havaitsi valmiuden varhaisessa vaiheessa: opetususkomukset olivat korkeimmillaan keskiarvolla 5,24 7 pisteen asteikolla ja tekninen tekoälytietämys matalin, 4,23.

Se on argumentti rajattujen työkalujen puolesta, ei autonomisten. Ohjeasiakirjojen analyysi ehdottaa oppilaitoksen konfiguroimaa [[rag|hakutiivistettyä]] agenttia, joka ohjaa ajattelua antamatta vastauksia, merkitsee yhteensopimattomuudet ja nostaa reunoilla asian ihmiselle, ja jonka valta kuvaillaan ”johdannaiseksi ja rajatuksi”. On suoraa näyttöä siitä, että ihmiset kannattaa pitää silmukassa eikä sen edessä: [[instructional-agents-multi-agent-course-gen|Kurssimateriaalin tuottamisjärjestelmä]] sai parempia pisteitä, kun ihmiset pysyivät mukana, ja eniten inhimillistä panosta kantanut tila paransi arvioijien pisteitä 0,5-0,9 pisteellä täysin autonomiseen tilaan verrattuna. Sen autonomiset arvioijat keskittyivät tiiviisti välille 2,9-3,1, kun taas ihmisarvioijat hajaantuivat ja erottelivat enemmän, joten kirjoittajat pitivät ihmisen harkintaa ensisijaisena laatumerkkinä.

Käytännön versio kurssille: anna tekoälyn luonnostella, lajitella ja merkitä. Pidä tarkkuus, oikeudenmukaisuus, yksityisyys ja kaikki opiskelijan etenemistä koskevat päätökset [[human-in-the-loop-ai|merkityksellisen inhimillisen valvonnan]] alla. Riskit, jotka tekevät tämän välttämättömäksi, ovat tuttu joukko: vinouma, yksityisyys, läpinäkyvyys, oppijan [[agency|autonomia]], vastuuvelvollisuus ja [[pedagogical-safety|pedagoginen turvallisuus]]. Tämän luettelon vuoksi [[teacher-ai-competency|pedagoginen tekoälyosaaminen]] on tärkeämpää kuin tekninen tuttuus.

## Missä opettajat menevät tässä pieleen

**”Edessäni oleva viimeistelty työ on näyttöä siitä, että opiskelija osaa tehdä sen.”** Se on näyttöä siitä, että työ on viimeistelty. 71,84 %:n ja 29,85 %:n ero harjoitepisteissä, kun käsitteelliset lisäykset pysyivät samassa kokeessa tasaisina, ja katsauksen 36 tutkimusta, jotka löysivät tehokkuutta ilman siirtoa, kuvaavat kaikki etäisyyttä avustetun suorituksen ja osaamisen välillä. Jos tuotos on ainoa asia, jonka arvostelet, tuotos on kaikki, mitä olet mitannut.

**”Jos tekoäly on ohjaaja, se on rajan oikealla puolella.”** Nimi ei kanna takeita. CS1-kokeessa vihjeitä antava ohjaaja vältti sen vahingon, jonka rajoittamaton ChatGPT teki harjoituksissa, eikä silti tuottanut käsitteellistä etua verrattuna siihen, ettei tekoälyä ollut lainkaan. Loppuvastauksen pidättäminen ei ole sama asia kuin päättelyn pidättäminen, ja ohjaaja voi pidättää jälkimmäisen näyttäen tekevänsä vain ensimmäistä.

**”Ilmaisin tai tiukempi sääntö ratkaisee rehellisyysongelman.”** Ilmaisin käsittelee yhtä vastausta monesta. Opettajaopiskelijoiden tutkimus havaitsi, että pelko syytöksestä tukahdutti sallitun käytön, että ohjelman kulttuuri ennusti käyttäytymistä paremmin kuin mikään kurssilinjaus ja että itseilmoitukset aliraportoivat käyttöä jokaisella kurssilla. Tiukempi sääntö muuttaa sitä, mitä opiskelijat salaavat, ei sitä, mitä he oppivat.

**”Yksi koko kurssin tekoälysääntö on oikeudenmukaisempi ja yksinkertaisempi.”** Yksinkertaisempi kyllä. Näyttö suosii tehtäväkohtaisia sääntöjä, koska kolme tapausta, rajoita, tue ja vaadi, elävät rinnakkain useimmilla kursseilla ja sama lupa tarkoittaa eri asiaa laboratorioraportissa ja reflektiossa. Yleiset kannat ovat myös niitä, jotka opiskelijat kiertävät helpoimmin.

**”Opiskelijat, jotka sanovat työkalun auttavan, oppivat siitä.”** Tyytyväisyys on [[self-report-measures|itsearviointimittari]], ja CS1-kokeessa korkeimmin arvioitu ehto oli se, joka vähensi eniten oppimisen taustalla olevaa prosessointia. Matematiikan käyttöönotossa oli sama jako: palaute, jota opiskelijat arvostivat, ilman merkitsevää eroa kokeessa.

**”Tekoälylukutaito on kehotetaitoa, ja opiskelijat omaksuvat sen käyttämällä työkalua.”** Viitekehykset pitävät [[ai-literacy|tekoälylukutaitoa]] käsitteellisenä ymmärryksenä, toiminnallisena taitona, [[critical-thinking|kriittisenä arviointina]], [[ethics|eettisenä]] harkintana ja tietoisuutena rajoista. Katsaus sanoo suoraan, että [[prompt-engineering|kehoitetekniikka]], tuotosten varmistaminen ja tekoälyn virheiden analysointi ovat opetettavia taitoja, jotka eivät kehity altistumalla. Koulutetut luonnontieteiden opettajat, joiden pistemäärä oli 16,7 30:stä, ovat tämän väitteen empiirinen versio.

**”Tasa-arvo-ongelma on pääsy.”** Pääsy on yksi kolmesta linjasta. Taito ja se, kuka saa hyödyllisen tuloksen, ovat kaksi muuta, ja vain kuusi tutkimusta aineistossa tarkasteli mitään niistä suoraan. Jokaiselle opiskelijalle annettu lisenssi ratkaisee helpoimman kolmanneksen.

## Mitä sinulle tullaan sanomaan

**”Opiskelijani sanovat, että tekoäly auttaa heitä.”** Se yleensä auttaakin siinä työssä, joka on edessä, ja löydös koskee sitä, mitä jää jäljelle. Kysy, mitä he osaavat vielä ilman apua, niin saat erilaisen vastauksen, ja sen vuoksi ilman apua tehtävä arvosteltava vaihe on olemassa.

**”Opetan 200 opiskelijaa. En voi lukea luonnoksia enkä pitää suullisia tarkistuksia.”** Sinun ei tarvitse lukea kaikkea. Yksi luokassa tehty sovellus tai lyhyt nauhoitettu selitys painavimmassa tehtävässä sekä otostarkistus töistä, jotka näyttävät olevan ristiriidassa aiempien palautusten kanssa, kattavat suurimman osan riskistä. Vaiheittaiset palautukset, kommentoidut perustelut ja prosessin [[eportfolio|portfoliot]] skaalautuvat, samoin kuin tahallaan virheellisen tekoälytuotoksen varmistamisen arvosteleminen.

**”Ilmaisimet ovat kaikki, mitä meillä on.”** Ilmaisimilla on dokumentoituja luotettavuus- ja oikeudenmukaisuusongelmia, ja validiteetti on vaikeampi ongelma: viimeistelty kotona tehty tuote ei enää osoita, että sen palauttaneella on se osaaminen. Prosessinäyttö on halvempaa kuin kilpavarustelu ja tuottaa jotain, jota voit puolustaa valituksessa.

**”Sen kieltäminen on yksinkertaisempaa.”** Yksinkertaisempaa, ja se yleensä epäonnistuu. Käyttöönotto opettajaopiskelijoiden tutkimuksessa seurasi ohjelman kulttuuria eikä minkään yksittäisen kurssin linjausta, ja ilmoittaminen aliraportoi todellista käyttöä jokaisella kurssilla. Kielto poistaa myös mahdollisuutesi nähdä, miten opiskelijat käyttäisivät työkalua lähtiessään.

**”Minä en opeta tekoälyä. Tämä ei ole minun aineeni.”** Löydökset koskevat sinun aineatasi. Kun tekoäly suorittaa sen harjoittelun, jonka tarjoamiseksi kurssisi on olemassa, juuri silloin se häiritsee, ja häiriö näkyy arvioinneissasi riippumatta siitä, mainitsetko työkalun vai et.

**”Näyttö on liian tuoretta, jotta sen pohjalta voisi toimia.”** Osittain totta, ja se leikkaa molempiin suuntiin. Suuri osa aineistosta on lyhyitä interventioita, [[self-report-measures|itsearviointitutkimuksia]], yksittäisiä oppiaineita tai vuosien 2025 ja 2026 töitä, ja kypsän [[intelligent-tutoring|älykkään opastuksen]] tutkimuksen väitteet ovat vahvempia kuin väitteet rajoittamattomista yleiskäyttöisistä [[conversational-ai|chatboteista]]. Kun väitteen takana on nyt satunnaistettu koe, CS1-kokeen suorituksen ja oppimisen eriytyminen ja matematiikan käyttöönoton palautetulos, se koe mainitaan tässä. Kun ei ole, pidä löydöstä parhaana saatavilla olevana ohjeena etkä vakiintuneena sääntönä, ja ole kaikkein epäilevin tuloksia kohtaan, jotka näyttävät vain tyytyväisyyttä, tehtävän nopeutta, tuotoksen laatua tai välitöntä avustettua suoritusta.

## Mitä tehdä tällä viikolla

**1.** Valitse se tehtävä, jota on vähiten mukava puolustaa. Kirjoita osaamislause tehtävänannon alkuun.

**2.** Lisää yksi vaihe, joka tehdään ilman tekoälyä: viiden minuutin sovellus luokassa, lyhyt nauhoitettu selitys tai kappale, joka kirjoitetaan luokassa paikan päällä. Anna sille todelliset pisteet.

**3.** Kerro tehtävän tekoälyehto ja lisää yksi rivi perustelua. Jos tehtävä sekoittaa vaiheita, kerro, mitkä vaiheet ovat mitä.

**4.** Kirjoita yksi opiskelijoille antamasi kehote uudelleen muodosta ”ratkaise tämä” muotoon ”anna minulle yksi vihje ja kysy minulta kysymys”, ja kerro heille miksi.

**5.** Ennen lukukauden alkua vie muutos koulutusohjelmavastaavallesi ja sille, joka hyväksyy mukautukset, jotta ensimmäinen valitus ei ole myöskään ensimmäinen keskustelu.

## Mihin seuraavaksi

Sidosryhmäkohtaisen version näistä väärinkäsityksistä löydät sivulta [[addressing-common-misconceptions-ai-education|Yleisimpien tekoälyä koskevien väärinkäsitysten käsittely]]. Niiden suunnitteluvaatimusten osalta, joita tasa-arvoa ja inhimillistä harkintaa koskevat löydökset edellyttävät, katso [[equity-ethics-pedagogical-safety-research|Tasa-arvo, etiikka ja pedagoginen turvallisuus tutkimuksessa]]. [[redesign-assessment-ai-era|Arvioinnin uudelleensuunnittelu tekoälyaikana]] vie arviointipuolen pidemmälle, ja [[does-ai-help-students-learn|Auttaako tekoäly opiskelijoita oppimaan]] on se näyttökatsaus, joka on tämän sivun väitteiden takana. Jos valitset uudelleensuunnittelun ja valvonnan välillä, [[reduce-ai-cheating|Tekoälyhuijauksen vähentäminen]] ja [[course-ai-policy|Kurssin tekoälylinjaus]] ovat kumppanisivut.
