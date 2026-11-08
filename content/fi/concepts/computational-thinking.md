---
title: "Laskennallinen ajattelu"
created: "2026-08-09T10:44:35-04:00"
type: concept
foundations: [ai-literacy]
technology: [adaptive-learning, generative-ai, llm, prompt-engineering]
discipline: [cs education, stem education]
level: [k 12]
confidence: high
updated: "2026-11-08T06:59:36-05:00"
translation_of: "concepts/computational-thinking"
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

> **Laskennallinen ajattelu** — ongelmanratkaisulähestymistapa, joka sisältää hajottamisen, kuvioiden tunnistamisen, abstraktion ja algoritmisen suunnittelun. [[ai-education|Tekoälykoulutuksessa]] laskennallinen ajattelu on sekä edellytys tekoälyjärjestelmien ymmärtämiselle että taito, jota tekoälytyökalut voivat auttaa kehittämään.

## Pohdittavaksi

- Kun ratkaiset ongelman jakamalla sen osiin, tunnistamalla kuvioita, abstrahoimalla olennaisen ja suunnittelemalla vaiheet — teet jo laskennallista ajattelua, ilman tietokonettakin. Milloin olet tehnyt tätä viimeksi?
- Yleinen oletus on, että laskennallinen ajattelu on sama asia kuin koodaaminen tai "tietokonelukutaito". Miten ne voivat erota, ja miksi ero voisi olla tärkeä sille, miten opetat sitä?
- Tutkimus viittaa siihen, että opiskelijoiden puutteet peruskäsitteissä — ei tekoälytyökalu itse — rajoittavat heidän kykyään arvioida tekoälyn ehdotuksia. Mitä oppijan on jo ymmärrettävä ennen kuin hän voi arvioida tekoälyn tuotosta kriittisesti?
- Jotkut väittävät, että laskennallisen ajattelun tulisi siirtää oppijat tekoälyn tuotosten passiivisesta kuluttamisesta rakentamiseen, kritisoimiseen ja suunnitteluun tekoälyn kanssa. Millainen olisi luokkahuone, joka kohtelee opiskelijoita tuottajina eikä kuluttajina?
- Generatiivinen tekoäly voi nyt pisteyttää opiskelijoiden laskennallisen ajattelun kehitystä — silti sekä ihmiset että tekoäly kamppailevat vaikeimman konstruktion, systeemiajattelun, kanssa. Mihin arvioinnin automatisoinnin pitäisi mielestäsi pysähtyä, ja miksi?
- Robotiikan tutkimus havaitsee, että laskennallinen ajattelu kehittyy vain, kun käsitteet tehdään eksplisiittisiksi ja kytketään [[curriculum-design|opetussuunnitelmaan]], eikä niitä kohdella erillisinä teknologiatehtävinä. Mikä on riski opettaa "teknologiataitoja" nimeämättä sen alla olevaa ajattelua?

## Johdanto

### Laskennallinen ajattelu tekoälyaikakauden luokkahuoneessa

Tietopohjan liittyvät artikkelit yhtyvät keskeiseen väitteeseen: laskennallinen ajattelu (CT) on se käsitteellinen perusta, jota opiskelijat tarvitsevat tekoälyyn kriittisesti sitoutuakseen, ja se on myös taito, jota hyvin suunniteltu tekoälyavusteinen oppiminen syventää suorimmin. Alla näyttö on ryhmitelty neljään teemaan, jotka perustuvat linkitettyihin artikkeleihin.

- **Laskennallinen ajattelu tekoälylukutaidon ja kriittisen sitoutumisen perustana.** Useat tutkimukset osoittavat, että laskennallinen ajattelu on se, mikä mahdollistaa tekoälyn tuotosten arvioimisen eikä vain kuluttamisen. [[chat-debugging-human-ai-collaboration-circuits|Chatin virheenkorjaustutkimus]] havaitsi, että kun perusopiskelijat virheenkorjasivat analogisia piirejä LLM:n avulla, heidän *puutteensa peruskäsitteissä ja kriittisessä ajattelussa* — ei työkalu — olivat rajoittava tekijä, koska opiskelijoilta puuttuivat ydinkäsitteet tekoälyn ehdotusten arvioimiseen. [[llm-intervention-design-cs-review|Katsaus LLM-interventioiden suunnitteluun]] päätyy samoin siihen, että tehokkaat interventiot erottaa "työkaluturhautumisesta" [[cs-education|tietojenkäsittelytieteen opetuksen]] työnnös kohti laskennallista ajattelua syntaksin hallinnan sijaan. [[early-childhood-elementary-ai-education|Varhaiskasvatuksessa]] [[ai-play-framework-early-childhood-2026|AI-Play-viitekehys]] rakentaa laitteetonta, leikkipohjaista [[ai-literacy|tekoälylukutaitoa]] opettamalla lapsille, että "tekoäly on osista rakennettu järjestelmä" ja "tekoäly oppii esimerkeistä" — kehityksellisesti perusteltu laskennallisen ajattelun ensimmäinen kerros. Ja [[academic-league-of-ai-2026|tekoälyn akateeminen liiga]] yhdistää laskennallisen ajattelun todellisiin kansalaislähtöisiin tekoälyprojekteihin [[project-based-learning|projektioppimisen]] kautta, upottaen [[ai-literacy|tekoälylukutaidon]] käytäntöön. Yhdessä nämä viittaavat siihen, että laskennallinen ajattelu on tekoälylukutaidon siirrettävä kognitiivinen ydin.

- **Opetusrobotiikka laskennallisen ajattelun välineenä.** Robotiikka on tutkituin konteksti laskennallisen ajattelun kehittämiselle [[k-12|K-12:ssa]] ja [[stem-education|STEM-koulutuksessa]]. [[computational-thinking-educational-robotics-secondary-2026|Toisen asteen tutkimus]] väittää, että opetusrobotiikka parantaa [[problem-solving|ongelmanratkaisua]] ja kriittistä ajattelua vain, kun laskennallisen ajattelun käsitteet tehdään eksplisiittisiksi ja kytketään [[stem-education|STEAM]]-opetussuunnitelmaan sen sijaan että niitä kohdeltaisiin erillisinä teknologiatehtävinä. [[game-based-gamified-robotics-education-review-2026|Systemaattinen katsaus 95 tutkimuksesta]] vahvistaa, että robotiikka edistää laskennallista ajattelua, [[creativity|luovuutta]] ja ongelmanratkaisua, ja että [[game-based-learning|pelipohjainen oppiminen]] sopii informaaleihin ympäristöihin, kun taas pelillistäminen hallitsee formaaleja luokkahuoneita ja tukee projektioppimista. [[microbit-robotics-machine-learning-teacher-training-2026|Opettajankoulutuksen näyttö]] osoittaa, että integroitu Micro:bit + robotti + [[machine-learning|koneoppiminen]] -interventio tuotti merkittäviä laskennallisen ajattelun tietämyksen kasvuja (d = 0,638) opettajankoulutuksessa, ja argumentoi, että robotiikka pitäisi upottaa niin, että tulevat opettajat voivat opettaa laskennallista ajattelua. LLM:t voivat laskea kynnystä edelleen: [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] yhdistää LLM:n robotiikkasimulaatioon, jotta aloittelijat voivat ohjata robotteja luonnollisella kielellä, tehden laskennallisen ajattelun sisältävästä robotiikasta saavutettavaa ilman matalan tason koodausta.
- **Tekoäly "kyvykkäämpänä vertaisena" voi kantaa laskennallista ajattelua aliresurssoiduilla robotiikkakursseilla.** 14 viikon kvasikoe 103 ensimmäisen vuoden perusopiskelijalla Nigeriassa havaitsi, että tekoälyavusteinen [[problem-based-learning|ongelmalähtöinen oppiminen]] (ChatGPT ja Teachable Machine [[sociocultural-learning|lähikehityksen vyöhykkeellä]]) päihitti tavanomaisen opetuksen jälkitestin laskennallisessa ajattelussa ja robotiikkaohjelmoinnin saavutuksissa, ilman sukupuolen moderaatiota ([[ai-pbl-computational-thinking-2026|AI-PBL-robotiikkatutkimus (2026)]]).

- **LLM:t laskennallisen ajattelun arvioinnin ja kehittämisen työkaluina.** [[generative-ai|Generatiivinen tekoäly]] tarjoaa skaalautuvia tapoja mitata ja tukea laskennallista ajattelua. [[llm-computational-thinking-physics-2026|Fysiikan laskennallisen ajattelun arviointitutkimus]] osoitti, että LLM:t voivat vastata ihmisarvioijia Data Practices- ja Computational Problem-Solving Practices -osaamisen kehityksen pisteytyksessä suurissa [[physics-education|fysiikan opetuksen]] kursseissa — kun taas sekä ihmiset että LLM kamppailivat monimutkaisemman Systems Thinking -konstruktion kanssa, mikä merkitsee selvää rajaa automatisoinnille. [[visual-query-tracer-declarative-logic-learning|Visuaalinen kyselyjen jäljitys]] osoittaa, miten [[visualization|visualisointi]] voi tukea abstraktia laskentaa ja rakentaa intuitiota, joka tukee laskennallisen ajattelun kehitystä. [[student-misconceptions-conditionals-loops-taxonomy|Ehtolauseiden ja silmukoiden väärinkäsitysten taksonomia]] tarjoaa hienojakoisia kohteita [[scaffolding|tukemiselle]] ja automaattiselle väärinkäsitysten havaitsemiselle, kytkeytyen [[misconceptions|väärinkäsityksiin]]. Nämä työkalut toimivat kuitenkin parhaiten, kun [[pedagogy|pedagoginen]] suunnittelu johtaa: [[llm-intervention-design-cs-review|tietojenkäsittelytieteen katsaus]] havaitsi, että lukukauden mittaiset "Virtual Tutor" -suunnitelmat tuetulla palautteella paransivat laskennallista ajattelua johdonmukaisesti, kun taas jäsentämätön työkalun käyttö lisäsi turhautumista.

Kestävät kompetenssit siirtyvät, kun toteutus automatisoidaan: työpajaraportti nimeää abstraktion, laskennallisen ajattelun ja "verifioinnin spektrin" opetettaviksi taidoiksi ja viittaa lähes 1 000 opiskelijan kokeeseen, jossa rajoittamaton GPT-4:n käyttö nosti harjoitusten suoritusta 48 % mutta leikkasi koetuloksia 17 %, kun tekoäly poistettiin ([[reshaping-cs-education-genai|Lee et al. (2026)]]).

- **Laskennallinen ajattelu K-12:ssa, opettajankoulutuksessa ja arvioinnin uudelleensuunnittelussa.** Laskennallinen ajattelu kattaa koko [[k-12|K-12:sta]] [[higher-ed|korkeakoulutukseen]] ulottuvan kirjon ja muovaa arviointia uudelleen. Varhaiskasvatuksen päässä AI-Play laajentaa laskennallisen ajattelun ja tekoälylukutaidon Pre-K–K2-oppijoille ja ei-teknisiin perheisiin; yliopistopäässä [[genai-oop-programming-assessments-2026|OOP-arviointitutkimus]] havaitsi, että vuoden 2026 GenAI-järjestelmät päihittävät keskivertoopiskelijan autenttisissa ohjelmointikokeissa mutta epäonnistuvat silti rajapinnoissa, abstrakteissa luokissa ja perinnässä — toistuvat käsitteelliset aukot, jotka osoittavat täsmälleen, missä laskennallinen ajattelu on edelleen vaikea automatisoida. [[solving-vs-evaluating-genai-solutions|Satunnaistettu A/B-crossover-tutkimus]] osoitti, että arviointi- ja kritiikkitehtävät tuottavat vastaavia tuloksia kuin tuottaminen, mikä viittaa siihen, että laskennallista ajattelua voidaan harjoittaa arvioimalla puutteellisia tekoälyratkaisuja, vaikka tuotot edellyttävät tarkoituksellista tukemista. Kaiken tämän taustalla on opettaja: microbit-tutkimus yhdistää laskennallisen ajattelun opetuksen suoraan [[teacher-education|opettajankoulutukseen]], ja [[hashmi-socratic-physics-chatbot-2025|Sokraattisen chatbotin tutkimus]] yhdistää laskennallisen ajattelun vaatiman täsmällisen ongelman muotoilun mitattavaan kurssisuoritukseen.

- **Validoitu mittari paikantaa, missä laskennallinen ajattelu on vaikeinta.** 34 kohdan laskennallisen ajattelun testi, joka rakennettiin Evidence-Centered Designilla ja validoitiin IRT:llä 461 tekoälyohjelmoinnin opiskelijalla, keskitti vaikeuden datan esittämiseen, loogisten operaattoreiden järjestykseen ja silmukkarakenteisiin sen sijaan että se olisi jakautunut tasaisesti oppisisältöön ([[zhang-ct-ai-training-test-2026|Zhang & Zhang (2026)]]).

### Siirtymä tekoälyn kuluttajista tuottajiksi, tekijöiksi ja suunnittelijoiksi

Keskeinen tavoite laskennalliselle ajattelulle tekoälyaikakaudella on siirtää opiskelijat ja opettajat tekoälyn tuotosten *passiivisesta kuluttamisesta* *luomiseen, rakentamiseen ja suunnitteluun* tekoälyn kanssa ja sitä varten — agenda, joka kytkee laskennallisen ajattelun konstruktionistiseen oppimiseen (tekemällä oppimiseen). Tietopohjan liittyvät artikkelit tekevät tämän tuottaja/tekijä/suunnittelija-käänteen yhä eksplisiittisemmäksi. [[ai-writes-code-student-writes-model-2026|Mallin tekijyyttä koskeva tutkimus]] kehystää GenAI:n kanssa rakentamalla oppimisen mitattavaksi "mallin tekijyyden" prosessiksi — opiskelijat kirjoittavat, virheenkorjaavat ja iteroivat tekoälymalleja sen sijaan että vain kuluttaisivat tekoälyn tuottamaa koodia tai vastauksia. [[code-to-learn-genai-artifact-construction-2026|CtL-GenAI-viitekehys]] operationalisoi tämän [[constructivist|konstruktionismiksi]] GenAI-aikakaudelle ja kohtelee artefakteja, joita opiskelijat rakentavat tekoälyn kanssa, laskennallisen ajattelun kehityksen moottorina. [[computational-thinking-ai-agent-creation|Laskennallinen ajattelu tekoälyagenttien luomisen kautta]] osoittaa, että tekoälyagenttien suunnittelu, ei vain käyttö, harjoittaa suoraan hajottamista, abstraktiota ja algoritmista päättelyä.

Uusi meta-analyyttinen näyttö terävöittää kuvaa. [[astor-computational-thinking-meta-review-2026|Meta-katsaus 128 laskennallisen ajattelun systemaattisesta katsauksesta]] havaitsee alan yhtyvän yhtenäiseen määritelmään laskennallisesta ajattelusta päättelynä abstrakteilla malleilla, jotka käyttävät laskennallisia vaiheita ja algoritmeja ongelmien ratkaisemiseen — juuri sellainen mallinrakennus- (eikä vastausten kuluttamis-) ajattelu, jota tuotantoorientoitunut oppiminen edellyttää. [[tsingidou-ct-robotics-kindergarten-2026|Laskennallisen ajattelun lastentarharobotiikan tutkimus]] osoittaa, että jo varhaiskasvatuksen oppijat tulevat tuottajiksi leikkipohjaisen robottirakentamisen kautta, käyttäen ongelmalähtöistä oppimista, [[storytelling-in-education|tarinankerrontaa]] ja tukemista — kehityksellinen ensimmäinen askel kohti teknologian näkemistä jonakin, jonka rakentaa eikä vain käytä. Ja [[solving-vs-evaluating-genai-solutions|arviointi- ja kritiikkitutkimus]] osoittaa, että laskennallista ajattelua voidaan harjoittaa arvioimalla ja virheenkorjaamalla puutteellisia tekoälyratkaisuja — tuottaja-asenne tekoälyn tuotosta kohtaan, joka vastustaa passiivisen kuluttamisen ansaa.

Käytännön johtopäätös on, että laskennallisen ajattelun opetus tulisi suunnitella niin, että oppijat *tekevät asioita tekoälyn kanssa* — kirjoittavat malleja, rakentavat agentteja, konstruoivat artefakteja ja arvostelevat tekoälyn tuotosta — sen sijaan että he saisivat valmiita ratkaisuja. Tämä sekä syventää laskennallista ajattelua että rakentaa [[ai-literacy|tekoälylukutaitoa]] osallistavana ja luovana eikä vain käsitteellisenä. Opettajat puolestaan tarvitsevat tukea siirtyäkseen tekoälytyökalujen käytöstä tekoälyllä tehostettujen oppimisaktiviteettien suunnitteluun (ks. [[teacher-role]] ja [[professional-training]]).

Toisten mallien uudelleenkäyttö kuuluu tuottaja-asenteeseen: julkaistun tekoälymallin toteuttaminen — valitseminen, asentaminen, ajaminen ja validoiminen — voidaan opettaa opittavana, jäsenneltynä taitona, jossa on varareitti jokaiseen ennakoituun epäonnistumiseen, ja kolme [[chemistry-education|kemian]] perusopiskelijaa ilman ohjelmointitaustaa toistivat ja laajensivat entsyymi-substraatti-ennustemallin neljässä kuukaudessa ([[praise-non-programmer-ai-model-implementation-2026|Achterweust et al. (2026)]]).

### Käytännön ohjeita

Kouluttajille johdonmukainen viesti on, että laskennallinen ajattelu kehittyy *eksplisiittisen, tuetun, havaittavan* sitoutumisen kautta eikä passiivisen tekoälyn käytön kautta. Yhdistä robotiikka eksplisiittiseen laskennallisen ajattelun käsitekartoitukseen opetussuunnitelmassa; käytä LLM:iä [[simulation|simulaatioon]], luonnollisen kielen ohjaukseen ja laskennallisen ajattelun kasvun skaalautuvaan arviointiin säilyttäen ihmisen harkinnan konstruktioille kuten systeemiajattelu; ja suunnittele arvioinnit uudelleen korostamaan tekoälyn tuotoksen arviointia ja diagnosointia raa'an tuottamisen sijaan. Millainen ympäristö tahansa — laitteeton leikki varhaiskasvatuksessa, robotit toisen asteen [[stem-education|STEM-opetuksessa]] tai Virtual Tutorit [[higher-ed|korkeakoulutuksessa]] — jäsennä aktiviteetti niin, että opiskelijoiden on pääteltävä hajottamisesta, kuviosta, abstraktiosta ja algoritmista sen sijaan että he saisivat valmiita ratkaisuja.

### Yhteydet liittyviin käsitteisiin

Laskennallinen ajattelu on [[ai-literacy|tekoälylukutaidon]] ja [[critical-thinking|kriittisen ajattelun]] yhteinen kognitiivinen perusta, [[cs-education|tietojenkäsittelytieteen opetuksen]] ja [[k-12|K-12:n]] tietojenkäsittelyn opetussuunnitelmallinen ydin, ja käsitteellinen kohde, jota [[educational-robotics|opetusrobotiikka]], [[game-based-learning|pelipohjainen oppiminen]] ja [[project-based-learning|projektioppiminen]] on parhaiten suunniteltu palvelemaan. Sitä syventävät [[llm|suuret kielimallit]] ja [[generative-ai|generatiivinen tekoäly]], kun niitä käytetään tukityökaluina, ja se on taito, jota opiskelijoiden väärinkäsitystaksonomiat ja laskennallisen ajattelun huomioivat arvioinnit pyrkivät mittaamaan. Opettajat kehittävät sitä [[teacher-education|opettajankoulutuksen]] ja [[professional-training|ammatillisen koulutuksen]] kautta, ja se siirtyy alojen yli, mukaan lukien [[physics-education|fysiikan opetus]] ja [[stem-education|STEM]] laajemmin.

- **Laskennallinen ajattelu ennustaa tekoälyavustajan kanssa oppimista.** [[computational-thinking-aica-2026|Kahdeksasluokkalaiset]], joilla oli korkea laskennallinen ajattelu, suoriutuivat merkittävästi paremmin kuin matalan laskennallisen ajattelun vertaiset tekoälykoodausavustajakurssilla ja käyttivät avustajaa ymmärtämiseen vastausten hakemisen sijaan.

## Yleiset väärinkäsitykset

- **"Tekoäly poistaa laskennallisen ajattelun tarpeen."** [[chat-debugging-human-ai-collaboration-circuits|Chatin virheenkorjaustutkimus]] havaitsi, että kun perusopiskelijat virheenkorjasivat piirejä LLM:n avulla, heidän **puutteensa peruskäsitteissä ja kriittisessä ajattelussa — ei työkalu — olivat rajoittava tekijä**. Laskennallinen ajattelu on se, mikä mahdollistaa oppijan arvioida tuotosta sen hyväksymisen sijaan, ja juuri se kapasiteetti tekee tekoälyavusta ylipäätään käyttökelpoista.
- **"Tekoälyavustus tasoittaa pelikenttää aliresurssoiduissa ympäristöissä."** Se voi tehdä niin tietyin ehdoin. **14 viikon kvasikoe 103 ensimmäisen vuoden perusopiskelijalla Nigeriassa** havaitsi tekoälyavusteisen ongelmalähtöisen oppimisen (ChatGPT ja Teachable Machine) tuottavan voittoja, ja tekoäly "kyvykkäämpänä vertaisena" kantaa laskennallista ajattelua siellä, missä muu tarjonta puuttuu. Mutta se on havainto jäsennellystä interventiosta, ei ominaisuus, joka syntyy antamalla opiskelijoille [[conversational-ai|chatbot]].
- **"LLM:t eivät voi arvioida laskennallista ajattelua luotettavasti."** [[llm-computational-thinking-physics-2026|Fysiikan laskennallisen ajattelun arviointitutkimus]] havaitsi, että LLM:t voivat **vastata ihmisarvioijia** Data Practices- ja Computational Problem-Solving Practices -osaamisen kehityksen pisteytyksessä suurilla kursseilla. Laskennallisen ajattelun arvioinnin skaalaamisen este on ollut arvioijakapasiteetti, ja tuo rajoite on pehmenemässä — mikä siirtää suunnitteluongelman siihen, mittaatko instrumentti laskennallista ajattelua vai vaatimustenmukaisuutta.
- **"Laskennallinen ajattelu on koodaustaito, jota robotiikka sattuu opettamaan."** **[[meta-analysis-systematic-review|Systemaattinen katsaus]] 95 tutkimuksesta** vahvistaa, että robotiikka edistää laskennallista ajattelua, luovuutta ja ongelmanratkaisua, mutta myös sen, että **ympäristö moderoi tulosta**: [[game-based-learning|pelipohjainen]] toteutus sopii informaaleihin ympäristöihin, kun taas pelillistäminen eroaa formaaleissa. Laskennallinen ajattelu on joukko käytäntöjä, jotka siirtyvät epätasaisesti, joten siirtoväite tarvitsee sen tehtäväsuunnittelun, jota se todella käytti.

## Liittyvät konseptit

- [[cs-education]]
- [[stem-education]]
- [[ai-literacy]]
- [[k-12]]
- [[prompt-engineering]]
- [[adaptive-learning]]
- [[llm]]
- [[generative-ai]]
- [[higher-ed]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[project-based-learning]]
- [[physics-education]]
- [[scaffolding]]
- [[critical-thinking]]
- [[teacher-education]]
- [[simulation]]
- [[socratic-method]]
- [[misconceptions]]
- [[agentic-ai]]

## Liittyvät artikkelit

- [[ai-pbl-computational-thinking-2026]]
- [[computational-thinking-ai-agent-creation]]
- [[reshaping-cs-education-genai]]
- [[prompt-problems-nl-programming-mistakes]]
- [[llm-computational-thinking-physics-2026]]
- [[hashmi-socratic-physics-chatbot-2025]]
- [[visual-query-tracer-declarative-logic-learning]]
- [[llm-intervention-design-cs-review]]
- [[academic-league-of-ai-2026]]
- [[ai-play-framework-early-childhood-2026]]
- [[edusim-llm-robotic-simulation-education-2026]]
- [[computational-thinking-educational-robotics-secondary-2026]]
- [[microbit-robotics-machine-learning-teacher-training-2026]]
- [[chat-debugging-human-ai-collaboration-circuits]]
- [[student-misconceptions-conditionals-loops-taxonomy]]
- [[genai-oop-programming-assessments-2026]]
- [[game-based-gamified-robotics-education-review-2026]]
- [[solving-vs-evaluating-genai-solutions]]
- [[zhang-ct-ai-training-test-2026]] — Laskennallisen ajattelun testi tekoälykoulutuksessa (CTAT)
- [[computational-thinking-aica-2026]] — Laskennallisen ajattelun tasot ja tekoälykoodausavustajat (2026)
- [[ai-writes-code-student-writes-model-2026]] — Mallin tekijyys: teoria ja mittaus GenAI:n kanssa rakentamalla oppimiselle
- [[code-to-learn-genai-artifact-construction-2026]] — CtL-GenAI: konstruktionismin viitekehys artefaktien rakentamiseen
- [[astor-computational-thinking-meta-review-2026]] — Laskennallisen ajattelun meta-katsaus 128 systemaattisesta katsauksesta
- [[tsingidou-ct-robotics-kindergarten-2026]] — Systemaattinen katsaus laskennallisesta ajattelusta robotiikan kautta lastentarhassa
- [[praise-non-programmer-ai-model-implementation-2026]] — PRAISE: Toistettava työnkulku ei-ohjelmoiville tutkijoille julkaistujen tekoälymallien toteuttamiseen
