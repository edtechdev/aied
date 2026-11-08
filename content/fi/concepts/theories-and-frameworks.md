---
title: "Teoriat ja viitekehykset"
created: "2026-09-19T05:40:00-04:00"
type: concept
foundations: [ai-education, theory-development-aied, philosophy-of-ai-in-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, item-response-theory]
methods: [research-methods-aied]
confidence: high
updated: "2026-11-08T06:59:36-05:00"
translation_of: "concepts/theories-and-frameworks"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

> **Teoriat ja viitekehykset** — tämän tietopohjan tosiasiallisesti käyttämä selittävien ja jäsentävien rakenteiden työluettelo. Teoriat selittävät, miksi oppiminen tapahtuu ([[learning-theories]], [[self-determination-theory]], [[sociocultural-learning]], [[activity-theory-aied|toimintateoria]]); viitekehykset jäsentävät suunnittelu-, opetus- ja omaksumispäätöksiä ([[tpack]], [[samr-model|SAMR]], [[technology-acceptance-model|teknologian omaksumismallit]], [[icap-framework|ICAP]], [[universal-design-for-learning|kaikille sopiva oppimissuunnittelu]]); mallit tekevät oppimisväitteistä testattavia ja laskettavia ([[item-response-theory|osiovasteoria]], [[assessment-validity]], [[knowledge-tracing]]). Käytä tätä sivua löytääksesi linssin, johon tutkimus nojaa, tai valitaksesi sellaisen omaan työhösi.

## Pohdittavaksi

- Teoria ennustaa, mitä tapahtuu, kun jokin muuttuu; viitekehys kertoo, mihin kiinnittää huomiota. Kun tutkimus raportoi parannuksen viitekehyksen lipun alla mutta ei esitä ennustetta, joka olisi voinut epäonnistua, mitä on oikeastaan opittu?
- [[tpack|TPACK]], [[samr-model|SAMR]], [[universal-design-for-learning|UDL]], [[technology-acceptance-model|omaksumismallit]] ja [[icap-framework|ICAP]] ovat kaikki syntyneet ennen [[llm|suuria kielimalleja]]. Mitkä niiden osat pitävät yhä, kun työkalu osaa kirjoittaa, selittää ja mukautua itsenäisesti, ja miten sen selvittäisit?
- Useat alla luetelluista teorioista on kehitetty tekoälyä varten viime vuosien aikana. Mitä tarvittaisiin, jotta jokin niistä olisi väärä, ja onko kukaan yrittänyt osoittaa sitä?
- Omaksuminen raportoidaan usein liikkeenä vaiheiden läpi. Jos kollega kertoo, että hänen kurssinsa siirtyi tänä vuonna "korvaamisesta uudelleenmäärittelyyn", mitä riippumatonta näyttöä pyytäisit ennen kuin uskoisit sen?
- Suuri osa tästä alasta soveltaa lainattua teoriaa sen sijaan, että testaisi sitä. Valitse löydös, johon luotat: voitaisiinko se kehystää [[self-determination-theory|teorian]] testiksi, ja millaista mittausta se vaatisi?

## Johdanto

Jokainen tekoälyohjaaja, palautejärjestelmä ja kojelauta sisältää oletuksia siitä, miten ihmiset oppivat, riippumatta siitä, ilmaisevatko suunnittelijat ne. Tämä sivu kokoaa ne teoriat, viitekehykset ja mallit, joista nuo oletukset tulevat, löyhästi sen mukaan, kuinka paljon nykyinen tutkimuskirjallisuus nojaa niihin, ja kertoo lyhyesti, mihin kukin sopii. Kolmen nimikkeen väliset erot ovat todellisia mutta vähäisiä, ja ne tiivistetään lähellä loppua sen sijaan, että niitä käsiteltäisiin aiheena. Käytännössä merkitsevää on se, mihin linssiin väite nojaa ja voiko tuo linssi tukea väitettä.

## Kirjallisuuden soveltamat oppimisteoriat

Nämä selittävät mekanismeja: ne nimeävät osat, jotka tekevät työn, ja ennustavat, mitä seuraa, kun nuo osat muuttuvat. Tekoälykirjallisuudessa ne on enimmäkseen lainattu psykologiasta ja [[learning-sciences|oppimistieteistä]] ja niitä käytetään tulkitsevina kehyksinä uuden työkalun ympärillä.

- **[[learning-theories|Oppimisteoriat (yläkäsite)]]** — koko perhe, mukaan lukien [[behaviorism]]in ja [[constructivist|konstruktivismin]] klassisia napoja sekä "nimi konstruktivismia, käytäntö behaviorismia" -kuilu, joka toistuu tekoälyn toteutuksissa. Myös konnektivismi ja kognitiivisen kuormituksen teoria käsitellään täällä.
- **[[constructivist|Konstruktivismi]]** — oppiminen aktiivisena tiedon rakentamisena. Se tukee [[project-based-learning|projektipohjaista]] työtä, dialogipohjaista [[intelligent-tutoring|tekoälyohjausta]] ja kritiikkiä, jonka mukaan harjoitus-ja-palaute-järjestelmät rikkovat omaa julkilausuttua pedagogiikkaansa.
- **[[sociocultural-learning|Sosiokulttuurinen teoria]]** — oppiminen työkalujen ja sosiaalisen vuorovaikutuksen välittämänä, minkä vuoksi tekoäly teoretisoidaan välittäväksi artefaktiksi eikä pelkäksi avuksi.
- **[[activity-theory-aied|Toimintateoria]]** — ottaa analyysiyksiköksi koko toimintajärjestelmän, ristiriitoja myöten. Yleinen opettajiin kohdistuvissa tekoälytutkimuksissa, joissa kiinnostava löydös on tavallisesti työkalujen, sääntöjen ja yhteisön välinen jännite.
- **[[situated-learning|Sijattu oppiminen]]** ja **[[embodied-learning|Kehollinen oppiminen]]** — oppiminen kontekstiin ja kehoon sidottuna, vastapaino tekoälyn kohtelemiselle puhtaasti kielellisenä välineenä.
- **[[distributed-cognition|Hajautettu kognitio]]** — ajattelu ihmisten ja artefaktien kesken jakautuneena, mikä kehystää tekoälyavun kognitiivisen työn uudelleenjakona eikä sen korvaamisena.
- **[[community-of-inquiry|Tutkiva yhteisö]]** — sosiaalinen, kognitiivinen ja opetuksellinen läsnäolo, joka saa verkkokokemuksen toimimaan; yhtä aikaa kokemuksen teoria ja suunnittelukehys.
- **[[self-determination-theory|Itsemääräämisteoria]]** — autonomia, kompetenssi ja yhteenkuuluvuus motivoivina edellytyksinä. Usein se selitys, joka tarjotaan, kun tekoälyn käyttö lisää sitoutumista mutta ei oppimista.
- **[[cognitive-psychology|Kognitivismi]]** — tiedonkäsittely, työmuisti ja oppimisen tunteen ja todellisen oppimisen ero.
- **Sosiaalisen havaitsemisen teoria (lämpö ja kompetenssi)** — sosiaalisesta kognitiosta ja palvelurobottitutkimuksesta siirrettynä se kehystää, miten käyttäjät arvioivat [[agentic-ai|tekoälyagentin]] uskottavuutta: koettu kompetenssi ennusti ChatGPT:n palautteen uskottavuutta suoraan, kun taas lämpö vaikutti vain ihmisenkaltaisen empatian kautta (SEM, 230 opiskelijaa; [[chatgpt-feedback-credibility-perceived-learning|Pérez-López et al. (2026)]]).
- **Neljäs affordanssikategoria ehdotettiin, mutta sitä ei testattu.** Koodaamalla 24 tutkimusta kolmiosaiseen affordanssikehikkoon arvioijat havaitsivat, etteivät sitoutuminen, turvallisuus ja itsetehokkuus sopineet teknologisiin, [[pedagogy|pedagogisiin]] tai sosiaalisiin kategorioihin, ja ehdottivat emotionaalisia affordansseja, jotka pohjautuvat Banduran vastavuoroiseen determinismiin ([[genai-chatbots-language-learning-affordances-review-2026|Lopez & Arabadzhy (2026)]]).

## Oppijan ja oppimisprosessin mallit

- **[[self-regulated-learning|Itsesäännelty oppiminen]]** — oman oppimisen suunnittelu, seuranta ja arviointi. Työjuhta konstrukti kysymykseen siitä, ulottuuko tekoälyn tuki merkityksellisiin vaiheisiin vai vain toteutukseen.
- **[[metacognition|Metakognitio]]** — omaa ajattelua koskeva ajattelu ja se konstrukti, joka useimmin nimetään, kun tekoälyä syytetään ajattelun tekemisestä opiskelijoiden puolesta.
- **[[motivation|Motivaatio]]** — miksi oppijat sitoutuvat, ja konstrukti, joka erottaa sitoutumisen oppimisesta tekoälytutkimuksissa.
- **[[self-efficacy|Itsetehokkuus]]** — usko omaan kyvykkyyteen, erillään kompetenssista, ja usein välittävä tekijä tekoälyn käytön ja tulosten välillä.
- **[[agency|Toimijuus]]** — kuka ohjaa työtä: konstrukti alan kontrollin ja autonomian jännitteen taustalla ja uusimman teorian delegoidun toimijuuden mekanismin taustalla.
- **[[desirable-difficulties|Toivotut vaikeudet]]**, **[[retrieval-spacing-interleaving|mieleenpalautus, välistäminen ja lomittelu]]** ja **[[refutation-text|kumoava teksti]]** — löydökset, jotka tekevät kitkasta pedagogisesti arvokasta, sovellettuina päätöksiin siitä, kuinka paljon tekoälyn tulisi tehdä.
- **[[transfer-of-learning|Oppimisen siirto]]** — jatkuuko kyvykkyys, kun tuki poistetaan, minkä tuore teoria ottaa kriteeriksi, joka erottaa oppimisen avustamisesta eikä yhtenä tuloksena muiden joukossa.

## Opetuksen, integroinnin ja omaksumisen viitekehykset

- **[[tpack|TPACK]]** — opettajan tietämys, joka yhdistää teknologian, pedagogiikan ja sisällön; opettajiin kohdistuvien tekoälytutkimusten oletusviitekehys.
- **[[technology-acceptance-model|Omaksumismallit]]** — aikomus koetun hyödyllisyyden ja helppokäyttöisyyden funktiona. Käytetty niin laajasti, että alan nojautuminen aikomukseen käyttäytymisen sijaan on pysyvä kritiikin kohde.
- **[[icap-framework|ICAP]]** — asettaa sitoutumisen järjestykseen passiivinen, aktiivinen, konstruktiivinen, interaktiivinen; hyödyllinen kysyttäessä, mitä tilaa [[student-ai-interaction|tekoälyvuorovaikutus]] todella tarjoaa.
- **[[samr-model|SAMR]]** — korvaamisesta uudelleenmäärittelyyn. Suosittu kypsyystarinana, heikko mittausinstrumenttina.
- **[[universal-design-for-learning|Kaikille sopiva oppimissuunnittelu]]**, **[[inclusive-learning|inklusiivinen oppiminen]]** ja **[[accessibility|saavutettavuus]]** — suunnittelukehykset sille, ketä palvellaan, ja ne, joihin vammaisuus- ja [[equity-in-ai-education|tasa-arvo]]työssä useimmin vedotaan.
- **[[learning-design|Oppimissuunnittelu]]**, **[[curriculum-design|Opetussuunnitelmasuunnittelu]]** ja **[[design-thinking|Muotoiluajattelu]]** — miten tehtävät, sekvenssit ja ohjelmat jäsennetään ennen minkään työkalun valintaa.
- **[[change-management|Muutoksenhallinta]]** — otetaanko järjestelmä ylipäätään käyttöön, mikä on tavallisesti institutionaalinen eikä pedagoginen kysymys.

## Mittaamisen ja laskennalliset mallit

- **[[item-response-theory|Osiovasteoria]]** — osion ja kyvykkyyden estimointi sekä malli, joka tekee testin luvuista tulkittavia.
- **[[educational-measurement|Koulutuksellinen mittaaminen]]** — instrumenttien maisema, mukaan lukien [[ai-literacy|tekoälylukutaitoa]] varten erityisesti rakennetut mittarit.
- **[[assessment-validity|Validiteetti]]** — mittaako instrumentti sitä konstruktia, jota se väittää mittaavansa, mikä ratkaisee, tukeeko raportoitu tulos siihen liitettyä teoreettista väitettä.
- **[[self-report-measures|Itsearviointimittarit]]** — tämän kirjallisuuden hallitseva ja haurain näyttölähde; useiden yllä olevien konstruktien tiedetään eroavan jyrkästi itsearvioinnin ja suoriutumisen välillä.
- **[[knowledge-tracing|Tietämyksen jäljitys]]** ja **[[student-modeling|Opiskelijamallinnus]]** — oppijan tilan estimointi ajan yli vuorovaikutusdatasta.
- **[[cognitive-diagnosis|Kognitiivinen diagnoosi]]** — suoriutumisen liittäminen tiettyihin taito-osatekijöihin, diagnostisen opetuksen mallinnusvastine.
- **[[benchmark|Vertailuarvot]]**, **[[ai-ed-evaluation|Tekoälykoulutuksen arviointi]]** ja **[[psychometrically-aware-ai|psykometrinen tietoisuus tekoälysuunnittelussa]]** — miten järjestelmiä ja interventioita pisteytetään, verrataan ja auditoidaan.
- **[[design-based-research|Suunnittelupohjainen tutkimus]]** — menetelmä, joka tuottaa teoriaa suunnitelluista interventioista sen sijaan, että testaisi sitä etukäteen.

## Tekoälyaikakaudelle kehitetyt teoriat

Neljä tietopohjan ehdotusta rakentaa teoriaa sen sijaan, että lainaisi sitä. Ne ovat artikkelisivuja eivätkä konseptisolmuja, koska jokainen on yksittäinen argumentti:

- **[[generativism-learning-theory|Generativismi]]** — uusi oppimisteoria, joka väittää klassisen nelikon osoittavan merkittäviä käsitteellisiä rajoituksia [[generative-ai|generatiivisen tekoälyn]] yleistyessä.
- **[[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Episteeminen yhteistoimijuus]]** — malli siitä, miten oppijat ja tekoälyjärjestelmät tuottavat yhdessä tietoa ja ymmärrystä.
- **[[absent-cognitive-baseline-2026|Puuttuva kognitiivinen perustaso]]** — teoretisoi, miksi tekoälyn kanssa kasvaneet opiskelijat yliarvioivat omaa oppimistaan, kun tekoäly paisuttaa suoriutumista.
- **[[yan-agentivism-learning-theory-ai-2026|Agentivismi]]** — keskikantaman teoria, joka nimeää neljä mekanismia (delegoitu toimijuus, episteeminen seuranta ja varmentaminen, rekonstruktiivinen sisäistäminen ja siirto vähennetyn tuen aikana) ja esittää kuusi testattavaa väitettä.

## Kolmen nimikkeen erottaminen

Sanoja käytetään kirjallisuudessa löyhästi, ja ero ansaitsee yhden kappaleen eikä kokonaista sivua:

- **Teoria selittää mekanismin** ja ennustaa, mitä tapahtuu, kun sen osat muuttuvat. Se voi epäonnistua, minkä vuoksi sitä testaavat tutkimukset voivat raportoida vaikutuskokoja.
- **Viitekehys jäsentää tai määrää.** Se nimeää osat, joihin on kiinnitettävä huomiota, yleensä ennustamatta suuruusluokkia, eikä sitä voi kumota.
- **Malli on muodollinen representaatio**, useimmiten mittaamisesta tai oppijan tilasta. Se voidaan sovittaa, vertailla ja osoittaa vääräksi tavalla, johon viitekehys ei pysty.
- **Nimikkeet menevät päällekkäin.** [[community-of-inquiry|Tutkiva yhteisö]] on yhtä aikaa teoria ja suunnittelukehys; [[activity-theory-aied|toimintateoria]] on selittävä ja analyyttinen. Kohtele nimikettä vihjeenä siitä, mitä lähde väittää, älä arkistointikategoriana.

## Vierekkäiset kerrokset

Kaksi naapurisivua käsittelevät tarkoituksellisesti jotain muuta. [[philosophy-of-ai-in-education|Tekoälyn koulutusfilosofia]] esittää normatiivisia ja käsitteellisiä kysymyksiä — mitä varten koulutus on, voiko kone opettaa — eikä ennusta vaikutuskokoja; tutkimus voi olla filosofisesti naiivi ja teoreettisesti pitävä tai päinvastoin. [[theory-development-aied|Teorian kehittäminen]] on meta-aktiviteetti, jossa teoriaa rakennetaan, lainataan ja uudistetaan, mukaan lukien pysyvä kritiikki siitä, että suuri osa [[ai-education|AIED]]-työstä soveltaa olemassa olevaa teoriaa sen testaamisen sijaan. Tämä sivu on luettelo; teorian kehittäminen koskee luettelon tuottamista ja uudistamista.

## Linssin valinta, kun kysymys on käytännöllinen

- **Kouluttajat**, jotka lähtevät ongelmasta, voivat edetä takaperin: jos oppijat eivät sitoudu, [[icap-framework|ICAP]] ja [[self-determination-theory|SDT]] nimeävät eri syitä ja ehdottavat eri korjauksia; jos kysymys on, pitäisikö työkalu ylipäätään ottaa käyttöön, [[technology-acceptance-model|omaksumismallit]] ja [[samr-model|SAMR]] kysyvät siitä eri asioita.
- **Oppimissuunnittelijat** saavat eniten suunnittelukehyksistä — [[universal-design-for-learning|UDL]], [[learning-design]] ja [[scaffolding]] — yhdistettynä teoriaan, joka ennustaa, mitä tapahtuu, kun tukeminen poistetaan.
- **Tutkijoiden** tulisi ilmaista, mitä solmua tutkimus väittää käsittelevänsä ja voiko asetelma todella testata sitä; mittausmallit ([[item-response-theory|IRT]], [[assessment-validity]], [[self-report-measures]]) ratkaisevat, tukeeko raportoitu tulos tuota väitettä.
- **Hallinnon edustajat** kohtaavat nämä viitekehykset omaksumis- ja muutoskysymyksinä, joissa vaihemallia käytetään usein kypsyystarinana eikä instrumenttina.

## Mitä viitekehykset eivät voi tehdä

Viitekehykset eivät ole näyttöä. Ne on yleensä lainattu LLM-aikaa edeltävistä konteksteista, ja niiden soveltaja lokalisoi ne; ne voivat toimia brändäyksenä, ja vaihemallit houkuttelevat valintaruutuomaksumiseen, joka raportoi liikettä tasojen läpi oppimisen sijaan. Viitekehykseen nojaavia väitteitä tulisi lukea rinnakkain [[limitations-in-aied-research|alan läpikäyvien rajoitusten]], tuloksen mitanneen instrumentin [[assessment-validity|validiteetin]] ja [[self-report-measures|itsearvioinnin]] tunnettujen rajojen kanssa.


Mekanismin ja teorian linjaus voi silti olla ratkaisevaa: temaattinen synteesi 55 tekoälytuetusta [[game-based-learning|pelipohjaisen oppimisen]] tutkimuksesta havaitsi, että tehokkuus riippui siitä, toteuttiko tekoälymekanismi sen pedagogiikan, jota sen oli tarkoitus palvella, eikä algoritmisesta hienostuneisuudesta ([[ai-game-based-learning-systematic-review-2026|Kaşarcı ja Yurt (2026)]]).

## Yleiset väärinkäsitykset

**"Lainatun teorian soveltaminen tekoälytyökaluun on teorian käyttöä."** Suuri osa tästä alasta soveltaa lainattua teoriaa sen testaamisen sijaan, ja ero on siinä, esittikö viitekehys ennusteen, joka olisi voinut epäonnistua. Kun tutkimus raportoi parannuksen viitekehyksen lipun alla sitoutumatta mihinkään kumottavissa olevaan ennusteeseen, viitekehyksestä ei ole opittu mitään — tulos, joka on yhdenmukainen jokaisen luettelon teorian kanssa, ei ole näyttöä yhdestäkään niistä.

**"Viitekehyksen arvo on siinä, miten hyvin se kuvaa jo rakentamaasi järjestelmää."** Se on jälkikäteistä leimaamista. Taksonomialla, joka sopii mihin tahansa suunnitelmaan, ei ole erottelukykyä, minkä vuoksi kuvaavia viitekehyksiä tulisi arvioida sen perusteella, mitä ne sulkevat pois. Arviointikysymys ei ole "sopiiko järjestelmäni tähän?" vaan "millaisen järjestelmän tämä viitekehys sanoisi olevan väärin?"

**"Oppimisteoriat, oppijan mallit ja omaksumisviitekehykset ovat vaihdettavia linssejä."** Ne vastaavat eri kysymyksiin — miten oppiminen tapahtuu, mikä on oppijan tila ja miksi käytäntö leviää — ja niiden näyttötyypit eroavat vastaavasti. Väärän kerroksen valinta tuottaa tutkimuksen, joka mittaa oikeaa muuttujaa väärää ennustetta vasten, mikä näyttää nollatulokselta, vaikka kyse on kategoriavirheestä.

**"Mitä enemmän viitekehyksiä, sitä kypsempi ala."** Tekoälyaikakaudelle kehitetyt viitekehykset kertyvät nopeammin kuin niitä testataan, ja kertyminen ilman kumoamista on oire eikä edistystä. Kypsyys näkyy siinä, että kilpailevat ennusteet ratkaistaan, ei sanaston kasvuna.

## Liittyvät konseptit

- [[theory-development-aied]] — teorian rakentaminen ja uudistaminen alalla
- [[philosophy-of-ai-in-education]] — normatiivinen ja käsitteellinen kerros
- [[learning-theories]] — oppimisteorian yläkäsite
- [[learning-sciences]] — naapuriala, josta suurin osa teoriasta on lainattu
- [[limitations-in-aied-research]] — mitä näyttöpohja voi tukea ja mitä ei
- [[tpack]] — opettajan tietämyksen viitekehys
- [[technology-acceptance-model]] — omaksumisviitekehykset
- [[item-response-theory]] — mittausmalli
- [[universal-design-for-learning]] — suunnittelukehys
- [[research-methods-aied]] — miten teoriaa testataan

## Liittyvät artikkelit

- [[genai-chatbots-language-learning-affordances-review-2026]] — Emotionaaliset affordanssit ehdotettuina neljäntenä kategoriana affordanssitaksonomiassa
- [[ai-game-based-learning-systematic-review-2026]] — Mekanismin ja teorian linjaus, ei algoritminen hienostuneisuus, ohjasi tehokkuutta 55 tekoälypohjaisen pelioppimistutkimuksen joukossa

- [[rismanchian-ai-education-four-decades-aixed-2026]] — neljä vuosikymmentä AIEDia AI×Ed-viitekehyksen kautta
- [[educating-minds-generative-ai-2026]] — teoriaraskas synteesi generatiivisesta tekoälystä ja oppimisesta
- [[activity-theory-teacher-pd-ai-agent-design-2026]] — toimintateoria sovellettuna opettajien ammatilliseen kehittämiseen
- [[activity-theory-teachers-adoption-ai-sem-2026]] — toimintateoria ja opettajien omaksuminen
- [[generativism-learning-theory]] — generatiivisen tekoälyn aikakaudelle ehdotettu oppimisteoria
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — kohti episteemisen yhteistoimijuuden teoriaa
- [[absent-cognitive-baseline-2026]] — tekoälyn kanssa kasvaneiden opiskelijoiden itsearvioinnin rakenteellisen aukon teoretisointi
- [[yan-agentivism-learning-theory-ai-2026]] — keskikantaman oppimisteoria ihmisen ja tekoälyn vuorovaikutukselle
- [[ai-literacy-instrument-development-systematic-review-2026]] — instrumenttien kehittäminen nuoren konstruktin ympärillä
- [[mishra-control-vs-agency-history-2025]] — alan perustava kontrollin ja toimijuuden jännite
