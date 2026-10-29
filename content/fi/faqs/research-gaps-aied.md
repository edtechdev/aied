---
title: "Mitkä ovat merkittävimpiä aukkoja tekoälyä koulutuksessa koskevassa tutkimuskirjallisuudessa?"
created: "2026-08-24T14:10:00-04:00"
connected_faqs: [reporting-interpreting-aied-research, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research]
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/research-gaps-aied
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Apuapurahan määräaika on kahdeksan päivän päästä ja taustaosioon tarvitaan yksi lause siitä, mitä tämä ala ei vielä tiedä. Tai kollega on kertonut lautakunnalle, että tekoälyohjaus nostaa oppimistuloksia, viitaten kahden vuoden kokeeseen 18 yläkoulussa, ja sinä olet se, jonka on sanottava, mitä tuo tutkimus pystyy kantamaan. Tai olet valitsemassa väitöskirjan kysymystä ja näyttää siltä, että jokainen sen versio on jo tehty.

Merkitykselliset aukot koskevat vahvuutta, täsmällisyyttä ja sovellettavuutta. Tekoäly pystyy suorittamaan koulutuksellisia tehtäviä; avoimia kysymyksiä ovat, tuottaako tietty suunnittelu kestävää hyötyä, kenelle, minkä mekanismin kautta ja missä olosuhteissa. Tämä ero ratkaisee kaksi asiaa pöydälläsi: mitä tutkia seuraavaksi ja mitä lopettaa väittämästä sillä välin. [[limitations-in-aied-research|Tekoälykoulutustutkimuksen rajoitukset]] on tämän sivun taustalla oleva luettelo. Näyttö [[intelligent-tutoring|älykkäistä ohjausjärjestelmistä]], ennakoivasta [[learning-analytics|oppimisanalytiikasta]], [[generative-ai|generatiivisesta tekoälystä]] ja autonomisista agenteista ei myöskään ole keskenään vaihdettavissa, ja tutkimus tekoälyn käytöstä oppimisen tukena eroaa tutkimuksesta, joka opettaa ihmisille tekoälyä, kuten [[ai-education|Tekoäly koulutuksessa]] -yleiskatsaus selittää.

## Lyhyt versio

**1.** Vertaa tekoälyä vahvaan vaihtoehtoon ilman tekoälyä, joka pitää opetussuunnitelman, harjoittelun ja tuen vakiona, ja kerro, mitä tekoäly lisäsi.

**2.** Mittaa viivästynyttä suoriutumista ilman apua ja totea, että avustettu suoriutuminen ei ole oppimishyöty.

**3.** Raportoi, mikä paketin osa teki työn ja mitä mekanismia väität.

**4.** Validoi jokainen automatisoitu pisteytys ja simuloitu oppija oikeita oppijoita vastaan, myös oman kehitysotoksesi ulkopuolisia oppijoita vastaan.

**5.** Ilmoita populaatioraja, koska yhdistetty keskiarvo ei vastaa yhdenvertaisuuskysymykseen.

**6.** Kuvaile järjestely riittävän hyvin, jotta joku muu voisi rakentaa sen uudelleen.

## Valitse vertailu, joka eristää tekoälyn

Tiukkoja luokkahuonekokeita on olemassa, joten ”tarvitsemme satunnaistettuja kokeita” ei enää nimeä aukkoa. Terävämpi kysymys on, lisääkö tekoälykomponentti arvoa lisäharjoittelun, parempien materiaalien, oikea-aikaisen palautteen tai suuremman opetuksellisen tuen lisäksi.

[[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]] raportoi vaatimattomia oppimistulosten paranemisia 18 yläkoulussa ja samalla vähäistä sisällöllistä sitoutumista ohjaajaan, ja kirjoittajat huomauttavat, että paranemiset muistuttivat rakenteellisen harjoittelun tuloksia ilman tekoälyä. Se on näyttöä toteutetusta paketista, eikä se pysty eristämään, mitä sen sisällä oleva tekoäly lisäsi.

Ongelma sen taustalla on käsitteellinen yhtä lailla kuin empiirinen. ”ChatGPT” nimeää työkalun, ei menetelmää. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] auditoivat 19 ChatGPT-vertailua koulutuksessa: vain 4 (21 %) määritteli kaikki kolme, toistettavan käsittelyn, operationalisoidun kontrollin ja validin oppimismittarin (74 % hyvin määritelty käsittely, 42 % hyvin määritelty kontrolli, 53 % oppimistulos). Kun uusi tekoäly saapuu uusien aktiviteettien, palautteen tai käyttöliittymäsuunnittelun mukana, väline ja menetelmä sekoittuvat eikä mikään vaikutus kuulu tekoälylle.

Mikä sen ratkaisisi: vertailut realistisia vaihtoehtoja ilman tekoälyä vastaan niin, että opetussuunnitelma, harjoittelumahdollisuudet ja tuki pidetään mahdollisimman vakiona, sekä riippumattomat toistot oppilaitoksen, opettajan, oppiaineen ja mallin yli. Menetelmät vastaavat tässä eri kysymyksiin. [[qualitative-research|Laadullinen]] ja [[design-based-research|suunnittelututkimuksellinen]] työ selittää toteutusta, kun taas hyvin suunnitellut kokeet kantavat kausaaliväitteet, kuten [[research-methods-aied|Vaikuttavuustutkimuksen menetelmät]] esittää.

## Mittaa oppimista, kun työkalu on poissa

Parantunut työ tekoälyä käytettäessä ei ole näyttöä oppimisesta, joka säilyy avun päättyessä. [[learning-gains|Oppimishyötyjen]] ja [[cognitive-offloading|Kognitiivisen siirtokuormituksen]] synteesit vetävät yhä saman rajan avustetun suoriutumisen, säilyneen tiedon, itsenäisen päättelyn ja siirtämisen välille.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] näyttää mittausongelman satunnaistetussa kokeessa, jossa oli yli 6 000 yläkoulun opiskelijaa. Sääntö kolmesta peräkkäisestä oikeasta vastauksesta nosti alustan määrittelemää onnistumista tuottamatta kuitenkaan yksinään havaittavia oppimishyötyjä viikkoa myöhemmin. Vahvin viivästetyn testin näyttö ilmeni, kun tekoäly istui hallintatyönkulun sisällä ja keskittyi harjoiteltuun materiaaliin.

Jäljellä oleva aukko koskee kyvykkyyden kehityskulkuja, eikä yksi lisätty lopputesti sulje sitä. Kukaan ei ole osoittanut säilymistä kuukausien yli, siirtämistä tehtävästä toiseen, suoriutumista avun poistamisen jälkeen eikä oppijoiden tarkkuutta arvioida, mitä he osaavat, eikä ala ole erottanut taidon oppimatta jäämistä jo vakiintuneen taidon heikkenemisestä. Siirtokuormitustutkimuksen on vielä näytettävä, milloin delegointi tukee näitä kehityskulkuja ja milloin se syrjäyttää sen harjoittelun, joka ne rakentaa.

## Selvitä, mikä paketin osa teki työn

”Tekoälyn tukema oppiminen” kokoaa yleensä useita muutoksia: uutta palautetta, lisättyä reflektiota, vertaiskeskustelua, erilaisia tehtäväsarjoja, muuttuneita arviointikannustimia. Onnistuva paketti ei kerro, mitkä komponentit olivat välttämättömiä.

[[genai-feedback-design-multisite-experiment|Ihmiskeskeinen GenAI-palautteen suunnittelu]] on todellinen edistysaskel tuossa kysymyksessä. 1 176 ensimmäisen vuoden opiskelijan joukossa reflektoivat ja hybridisuunnitelmat päihittivät suoran [[ai-feedback-quality|tekoälypalautteen]] viivästetyssä siirtämisessä ilman tekoälyä. Hybridiehto yhdisti itsearvioinnin, [[peer-assessment|vertaispalautteen]] ja tekoälykritiikin. Se erottaa sen, miten palaute organisoidaan ja miten sitä käytetään, siitä, onko opiskelijoilla ylipäätään pääsy palautteeseen.

Yhä avoinna: ensimmäisten itsenäisten yritysten, itse selittämisen, vertaistuen, korjaavan palautteen, vihjeiden ja hiipuvan tuen osuus ja ajoitus sekä se, miten kukin niistä on vuorovaikutuksessa [[prior-knowledge|aiemman tiedon]] ja tehtävän vaikeuden kanssa.

Teoria-aukko kulkee rinnalla. [[learning-theories|Oppimisteorian]] nimeäminen ei ole sen testaamista. Tutkimus tarvitsee teoreettisen ennusteen, joka on sidottu tiettyyn järjestelmän käyttäytymiseen, ja mitattavan oppimisprosessin, ja tilastollinen mediaatio valaisee tuota selitystä osoittamatta kausaalimekanismia. [[theory-development-aied|Teorian kehittäminen tekoälyssä koulutuksessa]] ja [[scaffolding|tukeminen]] vievät argumenttia pidemmälle.

## Validoi mittari ennen kuin tulkitset sitä

Konstrukteja kuten sitoutuminen, [[critical-thinking|kriittinen ajattelu]], tekoälylukutaito ja [[personalized-learning|personointi]] mitataan tässä kirjallisuudessa epäjohdonmukaisesti. Itseraportointi kuvaa käsityksiä; se ei voi korvata osoitettua osaamista. Tekninen tarkkuus, asiantuntijan arvioima tuotoksen laatu ja opiskelijoiden oppiminen ovat kolme eri arviointikohdetta. [[educational-measurement|Koulutuksellinen mittaaminen]] ja [[ai-ed-evaluation|Tekoälyn koulutuskäytön arviointi]] pitävät näitä eroja perustavanlaatuisina.

Yksi aukko istuu mittausongelman sisällä: [[ai-technologies|tekoälyjärjestelmät]], joita käytetään arvioimaan muita tekoälyjärjestelmiä. Tutkimuksessa [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]] [[simulating-students|simuloidut opiskelijat]] hylkäsivät annetut [[misconceptions|väärinkäsitykset]] usein korjaavan palautteen jälkeen riippumatta siitä, käsittelikö palaute väärinkäsitystä, joten heidän vastauksensa saattoivat saada tehottoman opetuksen näyttämään onnistuneelta. Kohdennettu harjoittelu paransi tutkimuksen uskollisuusmittaria, eikä tuon mittarin paraneminen ole validointia inhimillistä oppimista vastaan.

Puuttuu koko arviointiketjun validointi, mallin käyttäytymisestä [[pedagogy|pedagogiseen]] harkintaan, oppijan reaktioon ja koulutukselliseen lopputulokseen, oppijoilla ja asetuksissa, joita ei käytetty kehityksen aikana. Inhimillinen harkinta tarvitsee saman tarkastelun, koska arvioijien välinen yksimielisyys ei ole näyttöä siitä, että arvioitiin oikeaa konstruktia.

## Päätä, mitä arviointi voi vielä todentaa

Tekoäly luo kaksi toisiinsa kytkeytyvää arviointiongelmaa: se auttaa tuottamaan arvioitavan työn, ja se voi vaikuttaa siihen, miten työ pisteytetään.

Tietopohjan [[ai-agents-complete-lms-assessment-validity-2026|tutkimus tekoälyagenteista, jotka suorittavat arvioituja LMS-tehtäviä]] dokumentoi agenttien navigoivan elävässä kandidaattikurssissa ja saavan arvioidut aktiviteetit valmiiksi. Se osoittaa kyvykkyyden, joka haastaa oletukset opiskelijoiden tuottamasta näytöstä. Se ei osoita, miten yleistä tällainen käyttö on, eikä se mitätöi asynkronista arviointia kategoriana.

Tutkimuskysymys on, mitkä suunnitelmat tukevat yhä puolustettavia johtopäätöksiä oppijasta. [[eportfolio|Portfoliot]], reflektiot, vaiheittaiset palautukset ja aktiviteettilokit on validoitava näyttönä sen sijaan, että oletetaan niiden osoittavan tekijyyttä tai ymmärrystä. Tutkimusten tulisi testata näyttöyhdistelmiä itsenäisesti havaittua osaamista vastaan ottaen huomioon saavutettavuus, työmäärä, tietosuoja ja opiskelijoiden ahdistus. [[assessment-validity|Arvioinnin validiteetti]] sisältää yksityiskohdat.

[[automated-assessment|Automatisoidun pisteytyksen]] osalta [[llms-do-not-grade-essays-like-humans-2026|LLMs Do Not Grade Essays Like Humans]] raportoi systemaattisesta eriävästä arvioinnista valmiiden mallien ja inhimillisten arvioijien välillä. Havainnot ovat konfiguraatiokohtaisia, ja ne näyttävät, miksi sisäinen johdonmukaisuus ei voi kantaa validiteettiväitettä.

[[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] ehdottaa erikseen arvioitavaksi, mitä oppijoiden on tehtävä itsenäisesti, mitä he voivat saada aikaan tekoälyn kanssa ja mitä heidän on verifioitava ja puolustettava. Se on viitekehys, joka odottaa empiiristä validointia.

Havaitseminen on tämän alueen selvin umpikuja. [[karr-ai-detection-humanization-2026|Karr et al. (2026)]] ajoivat kahta kaupallista havaitsinta 642 julkaistun englanninkielisen tiivistelmän yli arvolla τ = 0,50. Ohjeiden mukainen kevyt tekoälymuokkaus liputettiin 38-80 %:ssa tapauksista. Muokkaamattomat vuosien 2023-25 alkuperäiset liputettiin 9-15 %:ssa tapauksista, ja muut kuin [[stem-education|STEM]]-työt selvästi STEM-töitä useammin, p < 0,001. Inhimillistämisen jälkeen työkalut tavoittivat alle 4 % tekoälyleimatuista uudelleenkirjoituksista, mikä on yli 96 %:n väärien negatiivien osuus. Pisteytys, joka rankaisee rehellistä apua ja jättää huomaamatta välttelyn, ei voi perustella johtopäätöstä oppijasta.

## Lopeta lukutaitopisteiden lukeminen näyttönä käyttäytymisestä

Tekoälylukutaitointerventioiden tutkimus on riittävän laaja synteesiin. [[liu-ai-literacy-interventions-meta-analysis-2026|AI Literacy Interventions in Education]] kattaa 59 tutkimusta ja 7 211 osallistujaa, raportoi positiivisen keskimääräisen vaikutuksen ja raportoi myös huomattavaa vaihtelua, jonka leveä ennusteväli ulottuu nollan yli. Tietopainotteiset tulokset osoittautuivat vahvemmiksi kuin taidot, asenteet tai etiikka.

Terävämpi aukko on, muuttaako lukutaito-opetus sitä, mitä ihmiset tekevät käyttäessään tekoälyä, eikä uusi osaamisviitekehys sulkisi sitä. Osaavatko oppijat tunnistaa perustelemattomia väitteitä, tarkistaa lähteitä, hylätä harhaanjohtavia ehdotuksia, huomata sopimatonta myötäilyä ja valita, milloin ei delegoida? Pitääkö mikään tuosta paikkansa aikapaineessa, ja siirtyykö se vieraisiin järjestelmiin ja aloihin?

Tämän ratkaiseminen vaatii suoriutumispohjaista arviointia yhdistettynä todellisten päätösten havainnointiin ja viivästettyyn seurantaan, ja käsitteellinen tieto, toiminnallinen sujuvuus ja kriittinen harkinta on pidettävä erillään eikä yhdistettyinä. [[ai-literacy|Tekoälylukutaito]] ja [[trust-calibration|Luottamuksen kalibrointi]] tarjoavat erot.

## Raportoi, kenet havainto jättää ulkopuolelle

Yhden kurssin, oppilaitoksen, kielen tai oppijapopulaation havainnot harvoin oikeuttavat päätöksiä muualla, minkä [[limitations-in-aied-research|Tekoälykoulutustutkimuksen rajoitukset]] -synteesi käsittelee toistuvana ongelmana. Miten vaikutukset vaihtelevat kehitysvaiheen, alan, aiemman tiedon, vammaisuuden, kielen ja resurssiolosuhteiden mukaan, jää suurelta osin mittaamatta.

Yhdenvertaisuustutkimuksen on myös erotettava pääsy, taidot ja tulokset. [[digital-divide|Digitaalinen kuilu]] -synteesi on selvä siitä, että laitteet ja työkalupääsy eivät osoita yhtäläistä kykyä hyötyä. [[school-ai-education-readiness-gaps-agency-2026|Does School-Based AI Education Narrow Readiness Gaps?]] seurasi 752 Hongkongin yläkoulun opiskelijaa: psykologisen valmiuden aukot kaventuivat, kun taas erot objektiivisessa tekoälylukutaidon testissä säilyivät. Jokainen ryhmä parani, eikä eriarvoisuus sulkeutunut. Aiempia oppimisprofiileja ei jaettu satunnaisesti, joten niiden kausaalinen rooli jää tuntemattomaksi.

Kattavuus on ohutta tietyissä kohdissa. [[differential-effects-across-learner-groups|Erot oppijaryhmien välisissä vaikutuksissa]] laskee kirjallisuuden populaatioittain: toisen kielen ja monikieliset oppijat sekä oppijat, joilla on vammoja, ovat syvimmät juonteet, sukupuoli ja neurodiversiteetti seuraavat, ensimmäisen sukupolven opiskelijoilla ja kansainvälisillä opiskelijoilla on tässä korpuksessa yksi tutkimus kullakin, lahjakkaat ja hyvin suoriutuvat opiskelijat ovat käytännössä tutkimattomia, eikä pakolaisia, maahanmuuttajia ja siirtymään joutuneita oppijoita esiinny yhdessäkään. Sellaisen muodon näyttöpohja ei voi vastata yhdenvertaisuuskysymykseen aggregoimalla.

Kapasiteetti vaihtelee myös yhden kansallisen järjestelmän sisällä. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] pisteyttivät tekoälyintegraation 45 nigerialaisessa yliopistossa ja havaitsivat kohtalaista kokonaiskäyttöönottoa (M = 4,79, vaihteluväli 1,83-7,83, 10-pisteisellä asteikolla), eikä oppilaitoksen tyyppi ennustanut integraatiota, kun ikä ja maantiede oli kontrolloitu (ikä β = 0,43; sijainti Lounais-Nigeriassa β = 0,31). Sisäiset kyvykkyydet korreloivat keskenään r = 0,79-0,80 ja kansainväliset yhteistyöt toimialakumppanuuksien kanssa r = 0,74, joten verkottuneet oppilaitokset kerryttävät kumuloituvia etuja. Mitkä kapasiteetin rakentamisen mallit muuttavat tuloksia uudemmissa, vähemmän verkottuneissa oppilaitoksissa, on testaamatonta.

Tutkimusprioriteetti on tunnistaa malleja, jotka vähentävät eroja osoitetussa kyvykkyydessä, osallistumisessa ja [[agency|toimijuudessa]], ja raportoida alaryhmien tulokset ja rasitteet keskimääräisten hyötyjen rinnalla. Saavutettavuuteen liittyy oma ratkaisematon kysymyksensä: poistaako malli osallistumisen esteen vai korvaako se kyvykkyyden, joka oppijan on tarkoitus kehittää. Katso [[equity-in-ai-education|Yhdenvertaisuus tekoälykoulutuksessa]] ja [[accessibility|saavutettavuus]].

## Sano, kellä on hallinta ja milloin se vaihtuu

Kun järjestelmät suunnittelevat, käynnistävät toimia, pitävät muistia ja koordinoivat työkaluja, koulutuksellinen kysymys muuttuu siihen, kenen pitäisi hallita mitä oppimisprosessin osia ja milloin tuon hallinnan pitäisi siirtyä.

[[agentic-ai-education-scoping-review|Agentic AI in Education: A Scoping Review]] kartoittaa 474 tutkimusta ja löytää rajoittunutta pitkittäisvalidointia, keskittymistä [[higher-ed|korkeakoulutukseen]] ja STEM-alaan sekä heikkoa oppimisteoriaintegraatiota: vain 29 % katsauksen tutkimuksista nojasi eksplisiittisesti oppimisteoriaan, mikä on havainto tuosta korpuksesta eikä kaikesta AIED-työstä.

Avoimia kysymyksiä seuraa. Tuottaako oppijan aloitteesta haettu apu erilaisia tuloksia kuin agentin aloitteesta annettu apu? Voidaanko tuki vetää pois osaamisen kehittyessä ilman menetystä? Säilyttävätkö oppijat kyvyn haastaa järjestelmän? [[agentic-ai|Agenttitekoäly]] ja [[human-ai-collaboration|Ihmisen ja tekoälyn yhteistyö]] -synteesit lisäävät [[teacher-role|opettajan]] väliintulon ja vastuullisuuden monen agentin asetuksissa, joissa kukaan ei ole osoittanut, kuka vastaa agentin päätöksestä. Suurempi autonomia on pedagoginen suunnitteluvalinta, jonka näyttöpohja on vielä rakennettava.

## Testaa turvallisuusepäonnistumiset oikeilla oppijoilla

Koulutuksellinen turvallisuus ulottuu asiatarkkuuden ja kiellettyjen pyyntöjen ohi. Ohjaaja voi antaa oikean vastauksen ja samalla viedä oppijalta mahdollisuuden päätellä, vahvistaa väärinkäsitystä tai rakentaa riippuvuutta. [[pedagogical-safety|Pedagoginen turvallisuus]] kattaa konstruktin.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] tunnistaa epäonnistumisia, kuten liiallisen vastauksen paljastamisen ja tukemisen hylkäämisen, ja huomattavasti enemmän epäonnistumisia monivuoroisessa testauksessa. Ne ovat [[benchmark|vertailumittarin]] havaintoja määritellyissä olosuhteissa, eivät arvioita siitä, kuinka usein haittaa tapahtuu luokkahuoneissa.

Mitä tapahtuu, kun nuo epäonnistumiset kohtaavat oikeita oppijoita pitkäaikaisessa käytössä, ei tiedetä. Sitä, mitkä niistä tuottavat tilapäistä hämmennystä, mitkä pysyviä väärinkäsityksiä, mitkä heikentävät motivaatiota ja mitkä heikentävät itsenäistä kyvykkyyttä, ei ole mitattu. Kukaan ei ole myöskään osoittanut, mitkä suojatoimet leikkaavat noita riskejä tuottamatta liiallista kieltäytymistä tai turhautumista. Pitkäaikaisempi työ tarvitsee myös luottamuksen, halukkuuden hakea inhimillistä apua, [[agency|oppijan toimijuuden]] ja suhteet vertaisiin ja opettajiin tuloksina. Lapsilla se vaatii kehitysvaiheeseen sopivia tutkimuksia, jotka yhdistävät järjestelmän käyttäytymisen koulutuksellisiin ja relationaalisiin tuloksiin.

## Erota käyttöönotto toteutuksesta

Tekninen kyvykkyys ei osoita, että työkalua käytetään hyvin, eikä täydennyskoulutus automaattisesti tavoita opiskelijoita. Puuttuva lenkki kulkee yleensä opettajan valmentautumisesta muuttuneen luokkahuonekäytännön kautta opiskelijoiden tuloksiin.

[[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogy First, Technology Second]] on monitasotutkimus 46 opettajasta ja 2 832 opiskelijasta. Pedagoginen tekoälytieto oli yhteydessä opiskelijoiden käsityksiin ja aikomuksiin, eikä kumpikaan mitattu opettajatiedon komponentti ollut suoraan yhteydessä opiskelijoiden tekoälytiedon lisääntymiseen. Sellaiset yhteydet eivät osoita, että koulutusinterventio aiheuttaisi parempaa oppimista.

Avoin kysymys on, mitkä valmennuksen, [[curriculum-design|opetussuunnitelman yhdenmukaistamisen]], tarkastusrutiinien, aikataulutuksen ja institutionaalisen tuen yhdistelmät tuottavat kestävää parannusta, ja tutkimusten on havainnoitava toteutunutta opetusta eikä opettajan itsevarmuutta tai aikomusta ottaa käyttöön. [[teacher-ai-competency|Opettajan tekoälyosaaminen]] ja [[educational-development|Koulutuksen kehittäminen]] kattavat alueen.

Vertailukelpoinen kustannustehokkuus on toinen aukko. Arvioinneissa tulisi laskea verifiointi, korjaus, koulutus, valvonta, ylläpito ja toteutusaika tilaus- ja mallinkäyttökustannusten rinnalle ja verrata tekoälytuettua tarjontaa realistisiin vaihtoehtoihin. Vastaamisen arvoinen kysymys on, mitä koulutuksellista hyötyä kokonainen järjestely tuottaa käyttämiinsä resursseihin nähden.

## Lue hallintodokumentit aikomuksina

[[ethics|Eettiset]] periaatteet ja hallintokehykset ovat välttämättömiä, eikä niiden olemassaolo osoita, että ne muuttavat käytäntöä tai suojaavat oppijoita.

[[agarwal-ethical-values-norms-aied-2026|Agarwal et al.]] kävivät läpi 25 artikkelia ja havaitsivat loppukäyttäjät pitkälti passiivisiksi etiikkakirjallisuudessa, opiskelijoiden äänten ollessa käytännössä poissa, sekä jännitteitä arvojen välillä ja valtaepäsymmetrioita sidosryhmien välillä. Se kuvaa katsauksen kohteena ollutta kirjallisuutta. Se ei ole väite, että opiskelijat eivät koskaan osallistu AIED-suunnitteluun.

Puuttuu näyttö siitä, mitkä hallintajärjestelyt tekevät mitattavan eron. Muuttaako opiskelijoiden ja opettajien osallistuminen hankintoja, työkalun suunnittelua, arviointisääntöjä tai korjauskeinoja virheen jälkeen? Löytävätkö inhimillisen tarkastuksen menettelyt seuraukselliset virheet? Ovatko vaihtoehdot tekoälyn käytölle aidosti saatavilla niille, joita on käsketty käyttää sitä? Tietosuojatutkimuksessa on rinnakkainen aukko: lisätiedonkeruun koulutuksellinen arvo yleensä oletetaan, ja tietoa minimoivia malleja on harvoin verrattu tunkeilevampiin sekä oppimisen että oppijan autonomian osalta. Katso [[governance|Tekoälyn hallinto]] ja [[privacy|tietosuoja]].

## Tee tutkimuksesta uudelleen rakennettava

AIED:llä on poikkeuksellisen vaikea toistettavuusongelma. Tutkimukset jättävät pois kehotteet, malliversiot, asetukset, koodin ja opetukselliset yksityiskohdat, ja suljetut järjestelmät voivat muuttua intervention aikana tai sen jälkeen. [[limitations-in-aied-research|Tekoälykoulutustutkimuksen rajoitukset]] dokumentoi kaavan.

Tutkimuksen uudelleen rakentaminen tarkoittaa opetuksellisen järjestelyn kuvaamista mallin lisäksi: oppimistehtävät, sisältölähteet, sallitut toimet, käyttöliittymä, opettajan tuki, arviointiolosuhteet ja kaikki, mikä muuttui käyttöönoton aikana. Yhden konfiguraation toistaminen ja sen testaaminen, siirtyykö sen pedagoginen periaate toiseen, ovat erillisiä saavutuksia, ja [[research-methods-aied|Vaikuttavuustutkimuksen menetelmien]] raportointiohje käsittelee molempia.

Synteesi tarvitsee saman huolenpidon. [[meta-analysis-systematic-review|Meta-analyysi ja systemaattinen katsaus]] luettelee heikot primaaritutkimukset, julkaisuharhan, heterogeeniset interventiot ja yhteensopimattomat tulokset yhdistettyjen johtopäätösten rajoina, ja yksi keskimääräinen ”tekoälyvaikutus” piilottaa ne erot, joita kouluttajat tarvitsevat. Katsausten tulisi erottaa avustettu suoriutuminen itsenäisestä oppimisesta, erottaa interventiotyypit ja vertailuolosuhteet sekä tehdä koodauspäätöksistä auditoitavia.

Synteesikirjallisuus on itsessään aukko. [[oneill-presumed-effective-meta-analysis-2026|O'Neillin (2026) rikostekninen auditointi]] 14 vaikutusvaltaisesta [[meta-analysis-systematic-review|meta-analyysistä]] havaitsi, ettei yksikään tarjonnut pätevää perustaa väitteilleen. Ei johdonmukaista konstruktia: työkalua kohdeltiin yhtenä interventiona, moniulotteiset tulokset yhdistettiin. Julkaisuharha arvioitiin virheellisesti kaikissa 14:ssä. Raportoitu I² vaihteli 77,2 %:sta 94,4 %:iin jokaisessa analyysissä, joka sen raportoi, ja 13:sta 12 ylitti 80 %. 61 %:ssa satunnaisesti tarkastetuista primaaritutkimuksista oli validiteettihuolia. Nuo 14 analyysiä keräsivät yli 2 000 viittausta noin 16 kuukaudessa, ja takaisinvedettyä meta-analyysiä viitattiin yhä auktoriteettina 60 %:ssa takaisinvedon jälkeisistä viittaavista artikkeleista ilman mainintaa. 14 artikkelista, jotka viittasivat toiseen auditoituun meta-analyysiin, jonka tiivistelmä mainosti suurta ”tekoälykoulutuksen” vaikutusta, joka tosiasiassa mittasi opiskelijoiden opettamista tekoälystä, vain 2 viittasi siihen asianmukaisesti, 8 luki sen näyttönä siitä, että tekoälyn integrointi parantaa oppimista, ja 4 olivat väärässä muilla tavoin. Auditointi pyytää lehtiä vaatimaan meta-analyyseiltä täyden tietojen läpinäkyvyyden (hakumenetelmät, koodatut tutkimuspiirteet, poimitut tilastot, analyysikoodi), pyytää toimittajia olemaan pitämättä julkaisuluetteloa todisteena arviointiosaamisesta ja pyytää, että takaisinvedot ovat näkyvissä kaikkialla, missä artikkeli löydetään, viedään tai siihen viitataan. Toistettavuus kattaa synteesiketjun, ei vain yksittäistä tutkimusta.

Opettajat, jotka haluavat luokkahuonetasoisen version, voivat seurata sivua [[evaluating-ai-interventions-methods]].

## Mitä tutkijat ja opettajat ymmärtävät tässä väärin

**Alalta puuttuu tutkimuksia.** Siltä puuttuu täsmennettyjä tutkimuksia. On monipaikkakokeita, tuhansien opiskelijoiden satunnaistettuja kokeita ja 14 vaikutusvaltaista meta-analyysiä. Vain 21 % auditoiduista vertailuista määritteli käsittelyn, kontrollin ja tuloksen riittävän hyvin vaikutuksen kohdistamiseksi.

**Teorian nimeäminen testaa sen.** Viittaus oppimisteoriaan on kehystämispäätös. Testi tarvitsee ennusteen, sen toteuttavan järjestelmän käyttäytymisen ja prosessimittarin, joka voisi mennä toisinkin.

**Validoitu automatisoitu pisteytys on validoitu tulos.** Yksimielisyys inhimillisten koodaajien kanssa osoittaa yhdenmukaisuuden noiden koodaajien kanssa. Simuloidut opiskelijat paranivat uskollisuusmittarissa tulematta validoiduiksi inhimillistä oppimista vastaan, ja ketju mallin käyttäytymisestä tulokseen on yhä rakentamatta.

**Pääsy on yhdenvertaisuutta.** Hongkongin tutkimuksessa psykologisen valmiuden aukot kaventuivat, kun objektiivisen testin erot säilyivät, ja jokainen ryhmä parani ilman, että eriarvoisuus sulkeutui. Laitteet ja lisenssit muuttavat sitä, kuka pääsee työkaluun.

**Suurempi autonomia on edistystä.** Agentin suurempi itsenäisyys on suunnitteluvalinta. Kun 474 agenttitutkimuksesta 29 % nojaa oppimisteoriaan ja pitkittäisvalidointi on rajoittunutta, kukaan ei ole osoittanut, että hallinnan siirtäminen järjestelmälle parantaa oppimista.

## Vastalauseet, jotka kuulet

**”Aukko on vain siinä, että tarvitsemme lisää satunnaistettuja kokeita.”** Niitä on nyt runsaasti, ja ongelma on suunnittelunimikkeiden ylävirrassa: pakettia koskeva koe, joka kokoaa uutta palautetta, uusia tehtäviä ja uuden käyttöliittymän, ei voi kohdistaa mitään tekoälyyn. Vertailuehto on se, missä työ on.

**”En voi toteuttaa monivuotista seurantaa.”** Sitten mittaa yksi viivästetty tilaisuus ilman apua ja kerro, minkä välin se kattaa. Viikko on todellinen havainto, ja hallintasäännön tutkimus sai tuloksensa viikossa upottamalla tekoälyn työnkulkuun ja keskittymällä harjoiteltuun materiaaliin.

**”Satunnaistaminen on mahdotonta kurssillani.”** Suunnittelututkimuksellinen ja laadullinen työ vastaavat toteutuskysymyksiin, joihin kokeet eivät pysty, ja ala tarvitsee molempia. Missä satunnainen jako on mahdollista, se kantaa yhä kausaaliväitteen.

**”Yhdistetty vaikutuskoko jo kertoo, mikä toimii.”** 14 auditoitua meta-analyysiä määrittelivät käsittelyn työkaluksi, yhdistivät yhteensopimattomia tuloksia ja raportoivat I²:n yli 80 %:n 12:ssa 13:sta analyysistä, joissa se raportoitiin. Yhdistetty luku kuvaa tutkimusjoukkoa, jolla on konstruktiongelma.

**”Simuloidut opiskelijat ovat halvempia, joten niiden validointi voi odottaa.”** Mielistelytutkimuksessa simuloidut opiskelijat pudottivat väärinkäsityksiä riippumatta siitä, käsittelikö palaute niitä, mikä on se epäonnistumistapa, joka saa tehottoman ohjaajan näyttämään tehokkaalta.

## Mitä tehdä tällä viikolla

**1.** Kirjoita suunnittelemasi tutkimuksen vertailuehto yhdellä lauseella. Jos se on tavanomainen käytäntö, korjaa se ennen kuin korjaat mitään muuta.

**2.** Lisää suunnitelmaan yksi viivästetty mittaus ilman apua ja nimeä aikaväli menetelmäosiossa.

**3.** Kirjoita populaatioraja suunnitelmakuvaukseen ja sitten tiivistelmään, jotta väite ei voi kulkea otosta pidemmälle.

**4.** Ota nykyisen luonnoksesi vahvin väite ja poista se versio, jota mittarisi ei pysty kantamaan. Säilytä lause katosta.

**5.** Nimeä jokaiselle tutkimuksen automatisoidulle pisteytykselle tai simuloidulle oppijalle inhimillinen standardi ja ratkaisija ennen tietojen keruun alkua.

## Minne seuraavaksi

[[reporting-interpreting-aied-research]] on tämän sivun raportointivastine, ja [[research-methods-aied|Tutkimusmenetelmät tekoälyssä koulutuksessa]] kattaa kunkin aukon taustalla olevat suunnitteluvalinnat. [[evaluating-ai-interventions-methods]] käsittelee mittareita ja vertailusuunnitelmia, [[checking-whether-educational-ai-works]] on vaikuttavuuskysymyksen lyhyempi versio ja [[does-ai-help-students-learn]] kokoaa sen, mitä kestävästä oppimisesta tiedetään. [[theory-development-aied]] ja [[equity-ethics-pedagogical-safety-research]] vievät teoria- ja yhdenvertaisuusjuonteita pidemmälle.
