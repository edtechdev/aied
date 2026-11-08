---
title: "Teorian kehittäminen tekoälykoulutuksessa"
created: "2026-08-22T07:08:19-04:00"
type: concept
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [learning-theories]
research_method: [literature review]
page_kind: [framework]
confidence: medium
methods: [research-methods-aied]
updated: "2026-11-08T06:59:36-05:00"
translation_of: "concepts/theory-development-aied"
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

> **Teorian kehittäminen [[ai-education|tekoälykoulutuksessa]]** — se tutkimustyö, jossa luodaan, edistetään ja kriittisesti tarkastellaan teorioita ja käsitteellisiä viitekehyksiä, jotka selittävät, miten oppijat, opettajat ja tekoälyjärjestelmät ovat vuorovaikutuksessa. Kun generatiivinen tekoäly muovaa koulutusta uudelleen, ala sekä ehdottaa *uusia* tekoälyn kanssa oppimisen teorioita että työstää uudelleen vakiintuneita [[learning-theories|oppimisteorioita]] — samalla kun dokumentoitu heikkous teorian käytössä on edelleen AIEd-tutkimuksen läpikäyvä rajoitus.

## Pohdittavaksi

- Puhumme usein teorian "soveltamisesta" tekoälyyn koulutuksessa, mutta tämä sivu kysyy, keksiikö ala todella uusia teorioita. Ennen kuin luet eteenpäin: kun tuttua viitekehystä (kuten [[behaviorism]]ia tai konstruktivismia) venytetään kattamaan generatiivinen tekoäly, mitä se voi saada oikein ja mitä se voi hiljaisesti vääristää?
- Muistele hetkeä, jolloin käytit tekoälyä ja tunsit ymmärryksesi kasvavan — tai päinvastoin. Mikä on ero "työkalun kanssa oppimisen" ja "koneen kanssa tiedon yhteisrakentamisen" välillä? Mihin vetäisit rajan, ja onko ylipäätään mielekästä sanoa, että kone on kanssatoimija?
- Monia tekoälykoulutuksen tutkimuksia kritisoidaan teorian heikosta tai olemattomasta käytöstä. Jos lukisit tutkimuksen, joka osoitti tekoälytyökalun "toimineen", mitä sen pitäisi kertoa sinulle siitä, miksi ja miten se toimi, ennen kuin kutsuisit löydöstä teoreettisesti merkitykselliseksi etkä vain vaikutuskooksi?
- Yksi ehdotettu teoria väittää, että tekoälyn kanssa kasvaneet opiskelijat yliarvioivat oman oppimisensa, koska tekoäly paisuttaa heidän suoriutumistaan. Oletko huomannut itsesi tai muiden tuntevan itsensä pätevämmäksi runsaan tekoälyn käytön jälkeen kuin mitä voisi todella osoittaa ilman sitä? Mikä olisi vahvin näyttö siitä, että tämä on todellinen ilmiö eikä vain yhden tutkimuksen artefakti?
- Sivu erottaa teorian (oppimisen mekanismien selittäminen) filosofiasta (kysyminen, mitä oppiminen ja mieli pohjimmiltaan ovat). Missä omassa tekoälyä koskevassa ajattelussasi liikut näiden kahden välillä — esimerkiksi kysymällä paitsi sitä, selittääkö viitekehys oppimista hyvin, myös sitä, tavoittaako se, mitä oppiminen todella on?
- Uusia teorioita ilmestyy — generativismi, episteeminen yhteistoimijuus, kognitiivinen yhteisomaisuus. Mikä vakuuttaisi sinut lukijana siitä, että jokin näistä on todellinen edistysaskel eikä muodikas uudelleennimeäminen vanhoille ajatuksille? Aseta oma testisi sille, mitä hyvän uuden tekoälyn kanssa oppimisen teorian pitäisi pystyä selittämään.

## Johdanto

Teorian kehittäminen AIEdissa sijaitsee sen rajan pinnassa, joka erottaa alan hyödyntämät sovelletut [[learning-theories|oppimisteoriat]] ja tekoälyaikakauden tuottamat uudet konstruktit. Kun [[learning-theories]] luettelee tekoälyyn sovelletut vakiintuneet teoriat (behaviorismi, konstruktivismi, kognitiivinen kuormitus, itsemäärääminen jne.), tämä konsepti seuraa *teoretisoinnin prosessia ja tuotetta itsessään*: mitkä uudet [[theories-and-frameworks|teoriat ja viitekehykset]] syntyvät, miten vakiintuneita teorioita edistetään ja metodologinen kysymys siitä, teoretisoiko AIEd-tutkimus hyvin.
- **Viitekehys, joka määrittää oman vertailuehtonsa.** Nakamura (2026) pitää kognitiivisen työn jakoa selittävänä yksikkönä, sijoittaa operaatiot asteittaiselle perifeeris–konstitutiiviselle jatkumolle, nimeää vertailuehdon, jota vasten laajentaminen ja eroosio määritellään, ja johtaa seitsemän ehdollistettua testattavaa väitettä ([[nakamura-augmentation-erosion-cognitive-offloading-stem-2026|Nakamura, 2026]]). Koska väitteet ennustavat eroja konfiguraatioiden välillä, tutkimus, joka raportoi vain keskimääräisen vaikutuksen, ei voi vahvistaa tai kumota niitä.

## Uudet tekoälyn kanssa oppimisen teoriat

Kasvava artikkeliryhmä luo eksplisiittisesti uutta teoriaa tekoälyaikakaudelle sen sijaan, että soveltaisi olemassa olevia kehyksiä:

- **Generativismi.** [[generativism-learning-theory|Generativismi]] ehdotetaan uudeksi oppimisteoriaksi, joka väittää behaviorismin, kognitivismin, [[constructivist|konstruktivismin]] ja konnektivismin nojaavan kukin yhteen oletukseen, jonka generatiivinen tekoäly rikkoo: että havaittava tuotos todistaa oppimisen (behaviorismi), että kognitiiviset operaatiot tapahtuvat oppijan sisällä (kognitivismi), että merkitys rakennetaan eikä tarjota valmiina (konstruktivismi) ja että vaikea osa on navigoida olemassa olevaan tietoon sen tuottamisen sijaan (konnektivismi). Se nimeää neljä konstruktia — episteeminen kumppanuus, hajautettu toimijuus, generatiivinen lukutaito ja mukautuva metakognitio — ja johtaa jokaiselle arviointi-indikaattorin, mikä on suora yritys nimetä erillinen teoreettinen paradigma tekoälyn välittämälle oppimiselle. Se ei kuitenkaan esitä väitteitä, jotka voisivat epäonnistua: se on olemassa olevaa näyttöä syntetisoiva kannanotto, joten toisin kuin alla oleva agentivismi se tarjoaa sanaston ja mittausagendan eikä kumottavissa olevaa teoriaa.


- **Tekoälyyn liittyvyys.** [[ai-connectedness-adolescent-mental-health-2026|Fu ja Zhao (2026)]] rakentavat liittyvyyden uudelleen tekoälyaikakaudelle hoivaetiikan ja uusekologisen teorian kautta ja määrittelevät "tekoälyyn liittyvyyden" psykologisesti todelliseksi mutta eettisesti epäsymmetriseksi siteeksi, jolla on kolme ulottuvuutta ja kuusi kumottavissa olevaa väitettä odottamassa asteikon kehittämistä.


Synteettinen kanta lisää kilpailevan ehdotuksen, joka todella esittää väitteitä: se nimeää *synteettisen edistämisen* ja *tekijyyden keskeytyksen* — itsen, jolla on vahva ääni mutta ei tekijää — ja ennustaa risteävän vuorovaikutuksen, jossa elämänpäätöskertomuksen arvioitu tekijyys ja koherenssi liikkuvat vastakkaisiin suuntiin ([[synthetic-position-self-authorship-2026|Du et al. (2026)]]).
- **Agentivismi.** [[yan-agentivism-learning-theory-ai-2026|Yan ja Gašević (2026)]] ehdottavat agentivismia keskikantaman oppimisteoriaksi [[human-ai-collaboration|ihmisen ja tekoälyn vuorovaikutukselle]], määritellen oppimisen kestäväksi kasvuksi ihmisen kyvykkyydessä eikä onnistuneeksi tehtävän suorittamiseksi tekoälyn kanssa, ja erittelevät neljä mekanismia: delegoitu toimijuus, episteeminen seuranta ja varmentaminen, rekonstruktiivinen sisäistäminen ja siirto vähennetyn tuen aikana. Sen erottaa muista tämän sivun ehdotuksista kumottavuus: se esittää kuusi väitettä, muun muassa että oppiminen on vahvempaa, kun tekoäly säilyttää oppijan vastuun ongelman kehystämisestä, kriteerien asettamisesta ja perustelemisesta, kuin kun se tarjoaa vastaukset. Se väittää myös, että varmentamisen vaatiminen parantaa viivästynyttä suoriutumista, kun taas toistuva vähäkitkainen delegointi ilman rekonstruktiota heikentää oppijoiden oman kompetenssinsa kalibrointia.


Opettajapuolen teoretisointi tekee nyt saman testattavuussitoumuksen: kyvykkyys–päätösmalli asettaa [[tpack|AI-TPACK]]-kyvykkyyden asenteen ja koetun käyttäytymiskontrollin ylävirtaan ja nimeää neljä kumoamisehtoa — välityksen epäonnistuminen, diskriminanttikollapsi, moderaation nollatulos ja kontekstin redundanssi — vaikka malli on yhä testaamaton ([[capability-decision-model-teacher-readiness-2026|Mnguni (2026)]]).

- **Episteeminen yhteistoimijuus.** [[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Learning with Machines]] rakentaa "kohti episteemisen yhteistoimijuuden teoriaa", teoriapohjaista mallia siitä, miten oppijat ja GenAI-järjestelmät tuottavat yhdessä tietoa ja ymmärrystä.
- **Kognitiivisen kumppanuuden sykli.** [[page-cognitive-partnership-cycle-human-ai-2026|Page (2026)]] ehdottaa kognitiivisen kumppanuuden sykliä, kuusivaiheista rekursiivista mallia — ihmisen kysymys, tekoälyn laajennus, ihmisen reflektio, integraatio, revisio ja uusi kysymys — joka sijoittaa oppimisen muutokseen oppijan kognitiivisessa asemassa eikä kehotteen hienostuneisuuteen, ja nimeää neljä epäonnistumistapaa, joissa sama rekursio korvaa tai vääristää ajattelua.
- **Puuttuva kognitiivinen perustaso (ACB).** [[absent-cognitive-baseline-2026|The Absent Cognitive Baseline]] teoretisoi rakenteellisen aukon tekoälyn kanssa kasvaneiden opiskelijoiden akateemisessa [[self-assessment|itsearvioinnissa]] — kolmiulotteinen viitekehys, joka selittää, miksi opiskelijat yliarvioivat oppimistaan, kun tekoäly paisuttaa suoriutumista.
- **Kognitiivinen yhteisomaisuus.** [[cognitive-commons-ai-expertise-regeneration|Kognitiivinen yhteisomaisuus ja asiantuntemuksen uudistaminen]] hyödyntää yhteisresurssiteoriaa ja [[distributed-cognition|hajautettua kognitiota]] selittääkseen, miten rationaaliset tekoälyn omaksumispäätökset voivat ehtyttää jaetun asiantuntemuksen varannon, jota ammatit tarvitsevat uudistumiseensa.
- **Suoriutuminen vs. oppiminen.** [[genai-performance-vs-learning|Suoriutuminen vs. oppiminen]] teoretisoi jyrkän eron tekoälyn paisuttaman tehtäväsuoriutumisen ja kestävän oppimisen välillä, erottelun, joka toistuu tietopohjan [[learning-gains]]-näytössä.
- **Episteeminen [[ai-literacy|tekoälylukutaito]] (EAIL).** [[constructing-epistemic-ai-literacy-student-ai-co-programming|Episteeminen tekoälylukutaito]] kehystää tekoälylukutaidon uudelleen prosessikeskeiseksi episteemiseksi kompetenssiksi, joka keskittyy siihen, miten tietoa rakennetaan ja perustellaan, kun opiskelijat ohjelmoivat yhdessä generatiivisen tekoälyn kanssa.

- **Kolmijärjestelmäteoria.** [[shaw-nave-cognitive-surrender-2026|Shaw ja Nave (2026)]] laajentavat kaksiprosessimalleja **Järjestelmällä 3** — ulkoinen, automatisoitu, datavetoinen tekoälypäättely, joka voi täydentää, syrjäyttää tai tukahduttaa Järjestelmää 1 ja Järjestelmää 2 — ja nimeävät **[[cognitive-surrender|kognitiivisen antautumisen]]**, tekoälyn tuotoksen kritiikittömän omaksumisen, sen tunnusomaiseksi epäonnistumiseksi.
- **Kognitiivinen hoiva.** [[credential-cognitive-stewardship-ai-assessment|Kredentiaalien ja kognitiivinen hoiva]] teoretisoi [[governance|institutionaalisen]] vastuun tiedon ja oppimisen suojelemisesta tekoälyn läpäisemissä arviointikonteksteissa.
- **Yhteis-[[regulation|säätely]] ja episteeminen proaktiivisuus.** [[ai-cognitive-partner-co-regulation-learning|Tekoäly kognitiivisena kumppanina yhteissääntelyssä]] integroi toimeenpanotoiminnot, [[metacognition|metakognition]], hajautetun kognition ja [[sociocultural-learning|sosiokulttuurisen]] kehityksen kehitysmalliksi; [[epistemic-proactivity-math|episteeminen proaktiivisuus]] teoretisoi opiskelijoiden toimijuusasennetta tekoälyä kohtaan [[math-education|matematiikassa]].
- **Ihmisen ja GAI:n [[student-engagement|sitoutumisen]] paradigmat.** [[strydom-human-gai-paradigms-2026|Strydom (2026)]] vastaa alan "teoriavajeeseen" ankkuroimalla seitsemän toteutunutta ihmisen ja GAI:n sitoutumisen paradigmaa (varautunut, mahdollisuuksiin keskittyvä, laajennettu, uraauurtava, symbioottinen, arvopohjainen, [[equity-in-ai-education|tasa-arvo]]) Schommerin henkilökohtaisten epistemologisten uskomusten moniulotteiseen malliin — epistemologinen, ei työkalukeskeinen teoria siitä, miten yksilöt asemoivat itsensä eri tavoin suhteessa tekoälyyn.
- **Ekologinen yhteistoimijuusviitekehys.** [[reclaiming-epistemic-agency-co-agency-2026|Poudyal (2026)]] väittää, että [[generative-ai|generatiivinen tekoäly]] siirtää epistemologista auktoriteettia opettajilta opiskelijoille ja koneille, ja esittelee viitekehyksen, joka määrittelee yhteistoimijuuden kolmen toisistaan riippuvan ulottuvuuden kautta — relationaalinen, sääntelevä (kartoitettu [[self-regulated-learning|SRL-sykliin]]) ja [[pedagogy|pedagoginen]] (opettajien omaksumisjatkumo) — kaikkien rajoittuessa ehdottomaan ihmisen episteemisen vastuuvelvollisuuden ehtoon (kiistanalaisuus, alkuperä ja moraalisen/älyllisen ansion delegoimattomuus). Se asemoi [[agency|toimijuuden]] *episteemiseksi* suunnitteluongelmaksi eikä [[usability-research|käytettävyys]]kysymykseksi ja antaa instituutioille täsmällisemmän kielen kuin "tasapaino" GenAI-integraation hallintaan.
- **Relationaalinen episteeminen toimijuus ja episteeminen riippuvuus.** [[du-yuan-epistemic-dependence-2026|Du & Yuan (2026)]] tarjoavat kriittis-integrativeisen selonteon siitä, milloin tekoälyn välittämä nojautuminen säilyttää ja milloin syrjäyttää harkintaa. He operationalisoivat tuottavan nojautumisen ja haitallisen riippuvuuden rajan kuuden diagnostisen kriteerin kautta (kiistanalaisuus, palautettavuus, siirto, jäljitettävyys, hajautettu vastuu, episteeminen moninaisuus) ja jäljittävät neljä sosioteknistä polkua (sujuva auktoriteetti, kitkaton delegointi, läpinäkymätön synteesi, institutionalisoitu riippuvuus). Heidän normatiivinen ehdotuksensa, **relationaalinen episteeminen toimijuus**, laajentaa relationaalisen autonomian ja episteemisen yhteistoimijuuden linjoja säilyttämällä eksplisiittisen epäsymmetrian — tekoäly voi muovata päättelyä ilman vastavuoroista vastuuta tai legitimiä auktoriteettia — samalla kun se integroi vastuun ja episteemisen oikeudenmukaisuuden institutionaalisella tasolla. Oppimisen teoriana tekoälyn kanssa se siirtää alan kysymyksen siitä, auttaako vai vahingoittaako tekoäly, siihen, mitkä episteemiset toimet säilyvät, muuttuvat tai syrjäytyvät, ja tekee *riippuvuuden suunnittelusta* pelkän käytön sijaan pedagogisen ja institutionaalisen intervention kohteen.

## Vakiintuneen teorian edistäminen

Muu työ laajentaa olemassa olevaa teoriaa tekoälykontekstiin uusien paradigmojen perustamisen sijaan: [[critical-thinking-paradox-genai-learning-2026|kriittisen ajattelun paradoksi]] -työ integroi [[cognitive-offloading|kognitiivisen kuormituksen teorian]] kuormituksen vähentämisen opetukseen kolmitasoiseksi viitekehykseksi; [[dollinger-equitable-assessment-ai-2026|oikeudenmukainen arviointi]] teoretisoi [[assessment|arvioinnin]] uudelleen GenAI:n aiheuttamassa häiriössä. [[reconceptualizing-community-inquiry-generative-ai|Ba, Gašević, Lim & Anderson (2026)]] käsitteellistävät [[community-of-inquiry|tutkivan yhteisön]] viitekehyksen itsensä uudelleen: sen sijaan, että GenAI kehystettäisiin työkaluksi, dialogikumppaniksi tai spekulatiiviseksi "neljänneksi läsnäoloksi", he asemoivat sen *episteemiseksi ehdoksi*, joka konfiguroi uudelleen sen, miten kognitiivinen, sosiaalinen ja [[teacher-role|opetuksellinen]] läsnäolo toteutuvat, todentuvat ja tulevat hallituiksi — kehystäen CoI-läsnäolot uudelleen ihmisen ja GenAI:n kokoonpanojen sosioteknisiksi saavutuksiksi ja ehdottaen konfiguraatiopohjaista heuristiikkaa, jossa GenAI:n osallisuus ja tutkimuksen laatu ovat ehdollisesti yhteydessä ihmisen vastuuvelvollisuuden kautta. Suuri osa tästä on käsitteellistä viitekehystyötä ([[drummond-genai-business-schools-framework-2026|kauppakorkeakoulujen viitekehykset]], [[valid-student-simulation-llm-2026|validi simulaatio]]), joka operationalisoi teorian käytäntöä varten.

[[metacognitive-ownership-human-ai-regulation-2026|Lin ja Chang (2026)]] laajentavat [[self-regulated-learning|itsesäänneltyä oppimista]] ja ihmisen ja tekoälyn sääntelyä nimeämällä, mitä oppija hallitsee — standardit, [[evaluative-judgment|arvioivat päätökset]] ja kontrollin valtuuttamisen — eikä vain sitä, mitä tekoäly tekee.

Kitkaparadoksi tarjoaa toisen laajennuksen vakiintuneeseen teoriaan: [[friction-paradox-generative-ai-education-abroad-2026|Gupta (2026)]] soveltaa Bjorkin ja Bjorkin [[desirable-difficulties|toivottuja vaikeuksia]] ja Kapurin [[productive-failure|tuottavaa epäonnistumista]] ulkomailla tapahtuvan koulutuksen relationaalisiin kohtaamisiin ja väittää, että ratkaisee se, kuinka paljon tulkinnallista toimijuutta opiskelija [[transfer-of-learning|siirtää]] generatiiviselle avustajalle, ei se, kuinka usein sitä käytetään. Viitekehys on käsitteellinen ja esittää viisi väitettä kilpailevina hypoteeseina.

[[ranieri-biagini-ai-higher-education-taxonomy-review-2026|Ranieri & Biagini (2026)]] edistävät Zawacki-Richterin et al. (2019) toiminnallista taksonomiaa: 154 julkaisusta, joilla oli luokiteltavissa oleva sovellustoiminto, 90 (58,4 %) vältti sen neljä kategoriaa, ja heidän viitekehyksensä risteyttää toiminnon delegoidun kontrollin, episteemisen aseman ja sisäänrakennetun pedagogiikan kanssa.

[[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren ja Stamper (2026)]] edistävät ACT-R:ää ja Knowledge-Learning-Instruction-viitekehystä teoretisoimalla *petollisen yliyleistämisen* — epäonnistumistavan, jossa tiedon kompilaatio tuottaa yliyleistetyn tuotoksen, joka tuottaa oikeita toimintoja mutta jättää pois kriittisen soveltamisrajoitteen — ja validoimalla empiirisesti havaitsemis- ja korjausmenettelyn adaptiivisissa ITS-järjestelmissä ja [[k-12|K-12]]-desimaalioppimisen aineistossa.

**Postfenomenologia ja teknologinen välittyminen.** [[farazouli-navigating-uncertainty-teachers-genai-2026|Farazouli et al. (2026)]] edistävät vakiintunutta teknologisen välittymisen postfenomenologista viitekehystä (Ihde 1990; Verbeek 2006, 2011; Rosenberger & Verbeek 2015) tekoälyn koulutuskontekstiin. Uuden teorian ehdottamisen sijaan he soveltavat sitä käsitteellistääkseen GAI-[[conversational-ai|chatbotit]] uudelleen *monivakaiksi teknologisiksi artefakteiksi*, joiden "käsikirjoitukset" (nopea reagointi, luonnolliselta kuulostava teksti, joka voi saavuttaa läpäisyarvosanat) välittävät opettajien havaintoja ja konfiguroivat heidän käytäntöjään uudelleen — horjuttaen opettajien luottamusta, muovaten uudelleen sitä, mitä kompetenssi tarkoittaa, ja työntäen opettajia instrumentaalisten hyväksyttävän käytön kysymysten tuolle puolen arvioimaan uudelleen rooliaan ja opettamisen merkitystä. Tämä on teoriaa *edistävä* kontribuutio: se osoittaa, miten filosofinen selonteko ihmisen ja teknologian suhteista selittää sen emotionaalisen ja ammatillisen häiriön, jota opettajat kokevat, kun GAI astuu vakiintuneisiin koulutuskäytäntöihin.

Vielä yksi viitekehyskontribuutio on [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchianin & Doroudin AI×Ed-typologia]], joka laajentaa Kahnin (1977) alkuperäisiä "kolmea vuorovaikutusta" kahdelle akselille — tekoälyn rooli (sovellettu työkalu vs. analogia ihmisälyyn) ja loppukäyttäjä (tutkijasta oppijaan) — minkä tahansa AIEd-hankkeen sijoittamiseksi. Alan luokittelun lisäksi se argumentoi teorian ja tutkimuksen "tekoäly ihmisälyn analogiana" -haaran elvyttämisen puolesta käyttäen laskennallisia ja agenttipohjaisia oppimismalleja (esim. heidän oma laskennallinen mallinsa [[icap-framework|ICAP-viitekehyksestä]]) nykyaikaisen [[learning-theories|oppimisteorian]] ja laskennallisen mallinnuksen siltaamiseksi — metodologinen suunta, jonka ala suurelta osin hylkäsi kääntyessään sovellettuun, datavetoiseen työhön.

**Vertaileva filosofia väylänä teoreettiseen pluralismiin.** Xie (2026) mallintaa erilaista väylää teorian kehittämiseen: sen sijaan, että tekoälyä koulutuksessa teoretisoitaisiin yhden tradition sisältä, artikkeli järjestää vertailevan dialogin, jossa kukin traditio "tekee näkyväksi sen, mitä toinen peittää", ja kieltäytyy eksplisiittisesti niiden syntetisoinnista yhdeksi viitekehykseksi — lähestymistapa, joka kohtelee teoreettista pluralismia metodologisena positiona eikä ratkaisemattomana erimielisyytenä. Hän väittää, että ei-länsimaiset traditiot voivat tehdä enemmän kuin monipuolistaa väittelyitä; ne voivat muovata AIEd-teorian käsitteellisiä perustoja uudelleen, rekonstruoimalla daoistisen "Daon luonnon" (道性), itsensä kehittämisen (修道) ja "Zhenrenin" (真人) resursseiksi [[agency|toimijuuden]], koulutuksen episteemisten päämäärien ja [[ethics|eettisen]] toiminnan uudelleenajatteluun tekoälyn välittämissä olosuhteissa. Hän ilmaisee myös rajat suoraan: kontribuutio on yhden tekijän, ei-empiirinen, ja varoittaa, että tällainen käännöstyö vaatii kontekstualisointia romantisoinnin ja orientalismin välttämiseksi.([[daoism-ai-education-philosophy-2026]])

## Teorian käytön ongelma AIEdissa

Alan teoretisointi on epätasaista. [[limitations-in-aied-research|AIEd-tutkimuksen rajoitukset]] dokumentoi, että AIEd-tutkimukset käyttävät teoriaa usein heikosti tai kritiikittömästi — toistuva metodologinen heikkous toistettavuus- ja mittausaukkojen rinnalla. Katsaukset havaitsevat, että monet AIEd-artikkelit soveltavat teoriaa pinnallisesti tai eivät lainkaan (esim. [[llm-critical-thinking-teamwork-review|kirjallisuuskatsaukset]], jotka huomauttavat, että harvat tutkimukset perustavat interventiot oppimisteoriaan). Tämä tekee teorian *kehittämisestä* — ja teorian *käytöstä* — laatukysymyksen yhtä lailla kuin tutkimustuotoksen, yhdistyen [[research-methods-aied|tutkimusmenetelmiin]] ja [[ai-ed-evaluation|tekoälykoulutuksen arviointiin]].

## Suhde tekoälyn koulutusfilosofiaan

Teorian kehittäminen ja [[philosophy-of-ai-in-education|tekoälyn koulutusfilosofia]] ovat täydentäviä mutta erillisiä tietopohjan perustatyön säikeitä. **Teorian kehittäminen** tuottaa ja testaa empiirisesti tekoälyn kanssa oppimisen *mekanismeja* — nimettyjä teorioita ja viitekehyksiä, kuten generativismi, episteeminen yhteistoimijuus ja puuttuva kognitiivinen perustaso, jotka selittävät ja ennustavat, miten oppijat ja tekoäly ovat vuorovaikutuksessa. **Filosofia** kuulustelee *presuppositioita*, joihin nuo mekanismit nojaavat: mikä lasketaan tiedoksi, kuka lasketaan tietäjäksi ja mikä oppija pohjimmiltaan on. Teoria kuten [[learning-with-machines-toward-a-theory-of-epistemic-co-agency|episteeminen yhteistoimijuus]] ehdottaa mekanismia samalla kun se implisiittisesti omaksuu filosofisia sitoumuksia hajautetusta kognitiosta ja [[agency|toimijuudesta]]; filosofia tekee nuo sitoumukset eksplisiittisiksi ja kiistanalaisiksi. Kun teorian kehittäminen kysyy, selittääkö viitekehys oppimista hyvin, filosofia kysyy, tavoittaako se, mitä oppiminen ja mieli todella ovat — säikeet kohtaavat alan perustavimmissa artikkeleissa, jotka usein tekevät molempia yhtä aikaa.

## Yleiset väärinkäsitykset

**"Löydös siitä, että työkalu toimi, on teoreettinen kontribuutio."** Se ei ole, ja syy on rakenteellinen. Kun viitekehyksen väitteet ennustavat *eroja konfiguraatioiden välillä*, tutkimus, joka raportoi vain keskimääräisen vaikutuksen, **ei voi vahvistaa tai kumota niitä** — asetelma ei näe sitä erottelua, josta teoriassa on kyse. Keskimääräisen parannuksen osoittava koe kertoo, että jotain tapahtui, ei sitä, mikä mekanismi sen aiheutti, joten teoria pysyy täsmälleen yhtä tuettuna kuin ennen.

**"Vakiintuneen teorian soveltaminen tekoälyyn on teorian kehittämistä."** Sivun oma teorian käytön ongelma sanoo toisin: soveltaminen ei ole edistämistä, ja alan toistuva kuvio on lainatut konstruktit sanastona eikä testattavina ennusteina. Erottelu on merkityksellinen, koska lainattu kehys, joka ei pysty tuottamaan kumottavaa eroa, on koristetta eikä teoriaa.

**"Olemassa olevat taksonomiat tekoälyn pedagogisesta toiminnosta kattavat jo sen, mitä nämä järjestelmät tekevät."** Ne eivät kata suurta osaa siitä. 154 julkaisusta, joilla oli luokiteltavissa oleva sovellustoiminto, **90 (58,4 %) vältti aiemman viitekehyksen neljä kategoriaa**, minkä vuoksi uudempi työ risteyttää toiminnon delegoidun kontrollin, episteemisen aseman ja sisäänrakennetun pedagogiikan kanssa. Taksonomia, joka luokittelee väärin lähes kolme viidestä tapauksesta, ei voi toimia alan yhteisenä sanastona, ja aukko on löydös ilmiöstä eikä aukko artikkelissa.

## Käytännön seuraukset

**Kouluttajille ja opetuksen suunnittelijoille**

- Kun tutkimus raportoi keskimääräisen vaikutuksen, älä kohtele sitä ohjeena *omasta* konfiguraatiostasi. Teoriatason väitteet koskevat konfiguraatioiden välisiä eroja, eikä keskiarvo voi kertoa, mitä niistä sinä ajat.
- Kysy jokaiselta omaksumaltasi viitekehykseltä, ennustaako se jotain, mikä voisi omassa ympäristössäsi osoittautua vääräksi. Jos ei, siitä ei ole apua minkään päätöksen tekemisessä.
- Odota, että olemassa olevat kategoriat sivuuttavat tapauksesi; yli puolet luokitelluista julkaisuista ei sopinut standardiin nelijakoon.

**Kehittäjille**

- Raportoi konfiguraatioita yhden otsikkovaikutuksen sijaan. Jos suunnitelmasi ilmentää tiettyä delegoidun kontrollin ja episteemisen asennon yhdistelmää, sano se — se on yksikkö, josta teoria puhuu ja jota toinen tiimi tarvitsee toistaakseen sen.
- Älä markkinoi mekanismiväitettä keskimääräisen tuloksen voimalla; mekanismin vaatima näyttötyyppi on kontrasti, ei keskiarvo.

**Tutkijoille**

- Suunnittele konfiguraatiokontrasteja, jos aiot tuottaa teoreettisen kontribuution. Keskimääräisvaikutuksen koe, joka julkaistaan teorian kehittämisenä, on alan yleisin ja vähiten hyödyllinen tuotos.
- Liitä eksplisiittiset kumottavissa olevat väitteet jokaiseen viitekehykseen, jonka esittelet, ja raportoi, mitkä konfiguraatioerot olisivat kumonneet ne.

## Liittyvät konseptit

- [[learning-theories]]
- [[philosophy-of-ai-in-education]]
- [[limitations-in-aied-research]]
- [[research-methods-aied]]
- [[generative-ai]]
- [[constructivist]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[ai-education]]
- [[ai-ed-evaluation]]
- [[community-of-inquiry]]
- [[cognitive-surrender]]

## Liittyvät artikkelit
- [[ranieri-biagini-ai-higher-education-taxonomy-review-2026]] — Toiminnallisen taksonomian laajentaminen: 90/154 luokiteltavissa olevaa julkaisua (58,4 %) jää alkuperäisten neljän kategorian ulkopuolelle (Ranieri & Biagini 2026)
- [[yan-agentivism-learning-theory-ai-2026]] — Keskikantaman oppimisteoria ihmisen ja tekoälyn vuorovaikutukselle, neljä mekanismia ja kuusi testattavaa väitettä (Yan ja Gašević 2026)

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Petollinen yliyleistäminen: adaptiivinen mestaruus voi lopettaa harjoittelun ennen kuin oppijat tietävät, milloin toiminto on jätettävä tekemättä (An, McLaren & Stamper 2026)
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[generativism-learning-theory]] — Generativismi uutena oppimisteoriana
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — Kohti episteemisen yhteistoimijuuden teoriaa
- [[du-yuan-epistemic-dependence-2026]] — Relationaalinen episteeminen toimijuus ja tuottavan nojautumisen sekä haitallisen riippuvuuden raja (Du & Yuan 2026)
- [[absent-cognitive-baseline-2026]] — Puuttuva kognitiivinen perustaso (ACB)
- [[cognitive-commons-ai-expertise-regeneration]] — Kognitiivinen yhteisomaisuus ja asiantuntemuksen uudistaminen
- [[genai-performance-vs-learning]] — Suoriutuminen vs. oppiminen
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Episteeminen tekoälylukutaito (EAIL)
- [[credential-cognitive-stewardship-ai-assessment]] — Kredentiaalien ja kognitiivinen hoiva
- [[ai-cognitive-partner-co-regulation-learning]] — Tekoäly kognitiivisena kumppanina yhteissääntelyssä
- [[epistemic-proactivity-math]] — Episteeminen proaktiivisuus matematiikassa
- [[strydom-human-gai-paradigms-2026]] — Seitsemän ihmisen ja GAI:n sitoutumisen paradigmaa epistemologisten uskomusten varassa
- [[critical-thinking-paradox-genai-learning-2026]] — Kriittisen ajattelun paradoksi
- [[dollinger-equitable-assessment-ai-2026]] — Oikeudenmukainen arviointi GenAI:n aikana
- [[shaw-nave-cognitive-surrender-2026]] — Kolmijärjestelmäteoria ja kognitiivinen antautuminen: miten tekoäly muovaa ihmisen päättelyä uudelleen (Shaw & Nave 2026)
- [[reconceptualizing-community-inquiry-generative-ai]] — Tutkivan yhteisön uudelleenkäsitteellistäminen generatiivisen tekoälyn aikakaudella
- [[farazouli-navigating-uncertainty-teachers-genai-2026]] — Yliopisto-opettajien GAI-kokemukset ja -käsitykset: haavoittuvuus, arvioinnin uudelleenajattelu, opiskelijoiden oppiminen vaarassa (Farazouli et al. 2026)
- [[rismanchian-ai-education-four-decades-aixed-2026]]
- [[daoism-ai-education-philosophy-2026]] — Vaihtoehtoinen tekoälyfilosofia: daoismi menetelmänä tekoälylle koulutuksessa
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: väitelauseisiin perustuvat skeemat koulutusdialogien auditoitavaan koodaukseen
- [[metacognitive-ownership-human-ai-regulation-2026]] — Metakognitiivinen omistajuus: konstruktin määritelmä, rajat ja tutkimusagenda

- [[synthetic-position-self-authorship-2026]] — Synteettinen positio: dialogisen itsen ehdotus, joka nimeää synteettisen edistämisen ja tekijyyden keskeytyksen risteävällä ennusteella
- [[capability-decision-model-teacher-readiness-2026]] — Kumoettavissa oleva kyvykkyyslähtöinen opettajan valmiusmalli, jossa neljä kumoamisehtoa
- [[ai-connectedness-adolescent-mental-health-2026]] — Tekoälyyn liittyvyys: kolmiulotteinen konstrukti, jossa kuusi kumottavissa olevaa väitettä myöhempää testausta varten
- [[page-cognitive-partnership-cycle-human-ai-2026]] — Kognitiivisen kumppanuuden sykli
- [[friction-paradox-generative-ai-education-abroad-2026]] — Toivotut vaikeudet ja tuottava epäonnistuminen sovellettuina tulkinnalliseen toimijuuteen ulkomailla tapahtuvassa koulutuksessa
