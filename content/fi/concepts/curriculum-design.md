---
title: "Opetussuunnitelman suunnittelu"
created: "2026-06-02T10:44:35-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [intelligent-textbooks, learning-commons]
updated: "2026-11-08T06:59:36-05:00"
translation_of: "concepts/curriculum-design"
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

> **Opetussuunnitelman suunnittelu** — prosessi, jossa suunnitellaan ja jäsennellään se, mitä opetetaan kurssien, ohjelmien ja instituutioiden tasolla, mukaan lukien oppimistavoitteet, sisällön sekvensointi, arviointistrategiat ja taitojen eteneminen. Tekoälyaikakaudella opetussuunnitelman suunnittelun on tasapainoteltava perustietämyksen ja nousevien tekoälykompetenssien välillä ja päätettävä paitsi siitä, mitä opiskelijat oppivat, myös siitä, miten he oppivat työskentelemään tekoälytyökalujen kanssa ja arvioimaan niitä kriittisesti.

## Pohdittavaksi

- Opetussuunnitelman suunnittelu kysyy, mitä opiskelijoiden tulisi oppia ohjelmatasolla, kun taas oppimissuunnittelu kysyy miten kurssitasolla. Kun tekoäly muovaa oppiainetta uudelleen, kumman näistä kahdesta kerroksesta pitäisi mielestäsi muuttua ensin?
- Kun [[generative-ai|generatiivinen tekoäly]] automatisoi toteutustason työn, jotkut väittävät, että opetussuunnitelmien on siirryttävä kohti järjestelmäsuunnittelua, abstraktiota ja [[critical-thinking|kriittistä arviointia]]. Mitä opiskelijat menettäisivät, jos matalan tason taitoja vähennettäisiin?
- Opetussuunnitelmien uudistaminen tekoälyaikakaudella kehystetään usein tasapainoksi työkalusujuvuuden ja perustietämyksen välillä. Missä olet nähnyt tuon tasapainon kallistuvan liikaa jompaankumpaan suuntaan?
- SAIL-viitekehys kohtelee tekoälylukutaitoa ikäkausien yli tuettuna ja suunniteltuna käsittelemään syvempiä "digitaalisia kuiluja" pääsyn lisäksi. Miten tekoälylukutaidon upottaminen koko opetussuunnitelmaan eroaa yhden tekoälykurssin lisäämisestä?
- Jos jokainen oppiaine tarvitsee nyt sisäänsä upotettuja tekoälykompetensseja, kuka vastaa opetussuunnitelman muutoksesta — opettajat, ohjelmat vai instituutiot — ja mitä kouluttajat tarvitsevat onnistuakseen siinä?
- Opetussuunnitelma on taitojen sarja vuosien yli, ei vain aiheluettelo. Miten tuo pidempi näkökulma muuttaa sitä, jääkö "tekoälylukutaidon yksikkö" todella pysyväksi?

## Johdanto

Opetussuunnitelman suunnittelu käsittelee koulutuksen *mitä* ohjelmatasolla ja täydentää [[learning-design|oppimissuunnittelua]], joka käsittelee *miten* kurssitasolla. Tämän tietopohjan artikkelit tarkastelevat, miten tekoäly muovaa opetussuunnitelmia eri aloilla — ohjelmistotekniikasta arkkitehtuuriin ja vihreään koulutukseen — ja miten kouluttajat suunnittelevat opetussuunnitelmia, jotka upottavat tekoälylukutaidon uhraamatta oppiaineen perusteita.

### Keskeiset tutkimusteemat

**Opetussuunnitelmien uudistaminen tekoälyaikakaudelle** on keskeinen haaste. **[[reshaping-cs-education-genai|Lee et al.]]** syntetisoivat kansainvälisten työpajojen havainnot perustutkinnon [[cs-education|tietojenkäsittelytieteen opetuksen]] uudistamisesta ja argumentoivat, että kun GenAI automatisoi toteutustason ohjelmoinnin, opetussuunnitelmien on siirryttävä kohti järjestelmäsuunnittelua, abstraktiota ja kriittistä arviointia — samalla kun matalan tason toteutusyksityiskohtia vähennetään. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** virallisti agenttisen ohjelmistotekniikan erilliseksi oppiaineeksi, jossa on 21 moduulin opetussuunnitelma, joka keskittyy "aikomuksen evoluutioon" ja käytännön kurinalaisuuteen, jota [[agentic-ai|tekoälyagenttien]] hallinta vaatii. Molemmat kytkeytyvät [[ai-literacy|tekoälylukutaitoon]] ja [[scaffolding|tukemiseen]].

Tarkastellessaan muutosta systeemisenä eikä lisäävänä, [[rewriting-curriculum-genai-pedagogy-2026|Sabani et al. (2026)]] trianguloivat [[meta-analysis-systematic-review|kartoittavan katsauksen]], 209 tietueen bibliometrisen kartoituksen, 36 artikkelia ja kymmenen akateemisen johtajan haastattelut viideksi siirtymäksi — mukaan lukien tiedon välittämisen väistyminen kyvykkyyden kehittämiselle ja paikallisen kokeilun väistyminen institutionaaliselle hallinnalle.

**Opetussuunnitelmien kartoitus ja analyysi** käyttää tekoälyä olemassa olevien opetussuunnitelmien ymmärtämiseen. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng et al.]]** analysoivat 23 opetusohjelmaa tekoälyavusteisilta ohjelmistotekniikan kursseilta, tunnistaen yhteisiä teemoja — [[prompt-engineering|kehoitetekniikka]], koodin katselmointi tekoälyn kanssa, [[ethics|eettiset näkökohdat]] — ja johtaen suunnitteluohjeita, jotka korostavat työkalusujuvuuden ja perustietämyksen tasapainottamista. **[[coursegraph-cs-course-comparison-2026|CourseGraph]]** soveltaa laskennallisia menetelmiä tietojenkäsittelytieteen kurssirakenteiden vertaamiseen instituutioiden välillä.

Painotus muuttaa sitä, mitä opetussuunnitelma-analyysi raportoi: [[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath et al. (2026)]] antoivat GPT-o3-minille tehtäväksi jakaa 100 % seitsemän yritystaidon kesken kullekin 48 arvioinnille, saavuttaen Krippendorffin alfan 0,81 asiantuntijapainotuksiin verrattuna, mutta yhteensopivuus kääntyi negatiiviseksi taidoilla, joita kuvaukset eivät koskaan mainitse eksplisiittisesti (−0,19).

**Modulaarinen rakenne kestää nykyistä sisältöä pidempään.** Kuvio toistuu, kun ala liikkuu arviointisykliä nopeammin: vakaa ydin [[ai-literacy|tekoälylukutaitoa]], kriittistä arviointia, vinouman havaitsemista ja [[ethics|etiikkaa]], johon erikoisala- ja paikallisesti saatavissa oleva työkalusisältö liitetään moduuleina ja tarkistetaan kuuden–kahdentoista kuukauden välein ([[bursic-ai-residency-education-curriculum-2026|Bursic et al. (2026)]]). Jatkotason [[medical-education|lääketieteen koulutus]] on mainittu tapaus, mutta periaate yleistyy: ohjelma sitoutuu kompetensseihin, jotka kestävät työkalujen vaihtumisen, ja aikatauluttaa työkalukohtaisen kerroksen korvattavaksi.

**Tekoälylukutaidon integrointi** upottaa tekoälykompetenssit oppiaineisiin. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** tarjoaa tuetun tekoälylukutaidon viitekehyksen, joka soveltuu kaikenikäisille ja kaikille koulutusasteille ja käsittelee toisen ja kolmannen tason [[digital-divide|digitaalisia kuiluja]]. **[[tracing-genai-literacy-interaction-patterns]]** tarkastelee, miten tekoälylukutaito kehittyy vuorovaikutuskuvioiden kautta. **[[hingle-collaborative-ai-literacy-2025]]** tutkii yhteistoiminnallisia lähestymistapoja tekoälylukutaidon opetussuunnitelman kehittämiseen, kytkeytyen [[collaborative-learning|yhteistoiminnalliseen oppimiseen]].

LearnAI osoittaa, miltä upotettu versio näyttää: laajan altistuksen kerros lyhyitä esityksiä 18 olemassa olevan kurssin sisällä viidellä alalla (293 opiskelijaa), yhdessä vapaaehtoisten kahdenkeskisten yhteissuunnittelusessioiden kanssa, joita vetävät koulutetut perusopiskelijatutorit, jotta eritasoiset oppijat kohtaavat tekoälytehtävät omalla tasollaan ([[learnai-just-in-time-ai-cocreation-university-2026|Qu et al. (2026)]]).

Käytännön integraatio laahaa viitekehysten perässä. [[critical-media-literacy-education-2026|Santos-Albardía et al. (2025)]] havaitsivat, että vain 13,8 % kyselyyn vastanneista kasvatus- ja journalismiopiskelijoista sanoi kurssiensa käsitelleen kriittistä media-analyysia, kun 97,8 % piti sitä tärkeänä, ja heidän asiantuntijahaastattelunsa jäljittivät kuilun [[teacher-education|opettajankoulutukseen]], joka priorisoi teknisiä ja opetuksellisia taitoja mediakasvatuksen sijaan.

PRISMA-katsaus 39 STEAM-tutkimuksesta (2016–2025) havaitsi vastaavan epätasapainon tekoälylukutaidon elementeissä: toteutukset kehittivät teknisiä lukutaitoja — tekoälyn peruskäsitteitä, [[computational-thinking|laskennallista ajattelua]], [[statistics-and-data-science-education|datalukutaitoa]] — mutta kehittivät puutteellisesti eettistä tietoisuutta, luovaa mielikuvitusta sekä luomista, hallintaa ja suunnittelua tekoälyn kanssa, joten jokaisen yksikön auditoiminen niitä vasten on käytännön vastaus ([[niri-steam-ai-literacy-review-2026|Niri et al., 2026]]).

[[student-experience|Opiskelijoiden ääni]] on toinen suunnittelusyöte: 84 % 166 viimeisen vuoden liiketalouden opiskelijasta halusi GenAI:n opetettavan yksiköissään ja 85 % piti sitä välttämättömänä työllistyvyydelle, kun taas vain 7 % oli oppinut siitä yliopistossaan ([[rook-plumb-genai-curricula-student-insights-2026|Rook & Plumb (2026)]]).

42 tutkimuksen katsaus yliopistoa edeltävästä [[ai-education|tekoälykoulutuksesta]] havaitsee opetussuunnitelmien siirtyvän teknisestä sisällöstä kompetenssipohjaisiin malleihin, jotka rakentuvat AI4K12:n ja AI:n viiden suuren idean kaltaisille viitekehyksille, ja [[ai-literacy|tekoälylukutaitoa]] kohdellaan oppiainerajat ylittävänä kompetenssina, kun taas standardoituja instrumentteja sen arvioimiseen ei edelleenkään ole ([[caruana-pre-university-ai-education-slr-2026|Caruana et al. (2026)]]).

Opettajat ja työnantajat olivat samaa mieltä vain yhden 26 tekoälytaidon tärkeydestä — realististen odotusten asettaminen tekoälyllä täydennetylle työlle — ja vain kolmea 26:sta opetti vähintään puolet opettajista, mikä on raportin näyttö korkeakoulutuksen ja työnantajien välisestä tekoälytaitojen kuilusta ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

K-12:n koneoppimisaktiviteettien suunnittelu jää pinnalle: ICE-T-viitekehyksen taustalla oleva katsaus havaitsi, että näkymätön käyttö, painikkeiden käyttö ja mallin käyttöönotto muodostavat lähes 60 % koodatuista ohjatun oppimisen aktiviteeteista, avoin luominen esiintyi vain kahdesti, ja tekniset ja yhteiskunnalliset näkökulmat esiintyivät yhdessä vain noin 3 %:ssa aktiviteeteista ([[icet-ml-education-trust-2026|Haritz et al., 2026]]).

**[[discipline-specific-aied|Alakohtainen]] opetussuunnitelmainnovaatio** soveltaa opetussuunnitelman suunnittelua tiettyihin aloihin. **[[genai-architecture-education]]** tutkii, miten generatiivinen tekoäly muovaa arkkitehtuurisuunnittelun [[pedagogy|pedagogiikkaa]]. **[[talebzadeh-ai-green-education-2026]]** tarkastelee tekoälyn integraatiota vihreän koulutuksen opetussuunnitelmiin. **[[connected-ai-lesson-planning-vietnam]]** ja **[[llm-cultural-relevance-k12]]** käsittelevät [[culturally-relevant-pedagogy|kulttuurisesti vastaavaa opetussuunnitelman suunnittelua]].

**Upota tekoäly oppiaineen sisään, ei sen viereen.** Kolmitasoinen (johdanto, sovellus, edistynyt) tekoälyopetussuunnitelma taittoi [[machine-learning|koneoppimisen]] olemassa oleviin lämpötekniikan aiheisiin 39,1 tunnin kurssilla sen sijaan että olisi lisännyt tietojenkäsittelytieteen valinnaiskursseja, välttäen lisäkuormitusta konetekniikan opiskelijoille ja julkaisten opetusohjelmansa, datansa ja koodinsa avoimesti ([[mechanical-engineering-ai-curriculum-2026|Li et al. (2026)]]).

Journalismitapaus osoittaa arvot edellä -muunnelman: kolmiosainen arvot–prosessit–kompetenssit-teline siirsi opiskelijat ihmisvain raportoinnista tekoälyintegroituun työhön, mutta 8/9 (89 %) raportoi luottavansa eettisiin päätöksiin, kun taas tekijyyttä ja vinoumaa koskevat kyselykohdat viittasivat vain pinnalliseen ymmärrykseen ([[ying-genai-journalism-assessment-2026|Ngu ja Weller (2026)]]).

**[[governance|Institutionaaliset]] viitekehykset** käsittelevät opetussuunnitelman muutosta laajassa mitassa. **[[finkelstein-principled-ai-education-2025]]** ja **[[finkelstein-principled-ai-education-2025]]** tarjoavat periaatteet tekoälyn integroimiseksi koulutusohjelmiin. **[[ai-adoption-training-public-sector]]** tarkastelee esteitä tekoälyopetussuunnitelman käyttöönotolle julkisen sektorin koulutuksessa.

**Tekoälyn sekvensointi ohjelman yli.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli et al.]] ehdottavat "pidätä, sitten vahvista" -viitekehystä, joka sekvensoi generatiivisen tekoälyn ohjelmatasolla: pidätä generatiivinen työkalu, kun kyvykkyys on muotoutumassa, ja palauta se vahvistamaan tuota kyvykkyyttä, kun opiskelija osaa ohjata sitä ja arvioida sen tuottoja. Muotoutumisen ja siirtokuormituksen kriteerin ohjaamana (rakentaako työjakso kyvykkyyttä vai vain välittääkö se sen työkalun läpi) viitekehys kytkee opetussuunnitelman suunnittelun [[cognitive-offloading|kognitiiviseen siirtokuormitukseen]], [[self-regulated-learning|itsesäänneltyyn oppimiseen]] ja [[academic-integrity|akateemiseen rehellisyyteen]], ja jokaisessa pidätä–vahvista-saranassa on vaikeasti väärennettävät tarkistuspisteet.

Korkeimpien vaiheiden vipu ei ole lisäkurssit: 89 sponsoroidun opinnäytetyöprojektin yli siirtymistä [[career-development-and-readiness|työelämävalmiuden]] tasolta 6 tasolle 7 säänteli teollisuuteen upotettu kokemus — co-opit ja Manufacturing Extension Partnership -projektit — joten tutkinnot tarvitsevat työhön integroitua oppimista eikä uutta teknistä valinnaiskurssia ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al. (2026)]]).

Opetussuunnitelmatason seuraus mallien kyvykkyydestä on, että tekoälyä vastustava suunnittelu vanhenee. Tietojenkäsittelyn kouluttajat kuvasivat kalibroivansa tehtäviä sen mukaan, mitä mallit eivät vielä osanneet, ja katselivat kalibroinnin raukeavan — yhden kyberturvallisuuden opettajan tehtävät vaativat aitoa [[problem-solving|ongelmanratkaisua]] seitsemän tai kahdeksan kuukautta aiemmin ja ratkesivat sitten yksinkertaisesti — ja fasilitaattori arvioi säilyvyysajaksi noin yhden lukukauden. Työpajan rakenteellinen havainto on, että lähes jokainen mukautus tehtiin yksittäisen opettajan toimesta yhden kurssin sisällä, ilman institutionaalista koordinaatiota, jota kestävä opetussuunnitelmavastaus vaatisi ([[computing-assessment-genai-workshop-report-2026|Akbar et al., 2026]]).

**Koko kurssin yhdenmukaisuus, kun generatiivinen tekoäly on sallittua.** Vuoden 2026 uudistus johdantokurssille ydin- ja hiukkas[[physics-education|fysiikassa]] ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al.]]) integroi kolme aktiviteettityyppiä erillisin roolein — luennot käsitteille ja notaatiolla, opetusryhmät tavalliselle analyyttiselle harjoittelulle ja kotitehtävät tutkivana "tutkimuksen muotoisena" komponenttina poikkeuksellisen vaikeille, monimenetelmäisille ongelmille. Raportoitu kitka (julistamaton ohjelmointiedellytys, riittämätön aika ymmärtää eikä vain saada vastauksia, ja luennot, opetusryhmät, kotitehtävät ja [[summative-assessment|tentti]] eivät olleet linjassa) havainnollistaa, että generatiivisen tekoälyn salliminen pakottaa opetussuunnitelman yhdenmukaistamistyöhön koko kurssin yli eikä yhden tehtävätyypin muutokseen; heidän suosittelemansa rakenne pitää tekoälyn sallimat tutkivat työt bonusta tuottavina edistyneinä tehtävinä, kun taas avustamaton kirjallinen tentti määrää arvosanan.

**Yhdenmukaistamisen syvyys, ei käytön tiheys, erottaa integraatiokuviot.** 17 liiketoimintamoduulin tapauksessa kuusi upotti GenAI:n systemaattisesti opetukseen, oppimiseen ja arviointiin (rakentava), yhdeksän teki niin epäjohdonmukaisesti (yhdistetty) ja kaksi satunnaisesti (ad hoc); rakentavat tapaukset raportoivat vahvimmat sitoutumisen, kyvykkyyden ja opetussuunnitelman relevanssin tulokset ([[zhou-constructive-alignment-genai-business-2026|Zhou et al. (2026)]]).

**Rakentavan yhdenmukaistamisen ohjeet kriittisessä tarkastelussa.** Kun lähteet yllä raportoivat yhdenmukaistamisesta käytännössä, [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes et al. (2026)]] lukevat ohjeistuksen itsessään diskurssina. Heidän [[qualitative-research|kriittinen diskurssianalyysinsä]] 14:stä marraskuun 2022 ja huhtikuun 2025 välillä julkaistusta harmaasta kirjallisuudesta — pääasiassa institutionaalisia sivuja ja lukuja keskeisesti sijoittuneista [[educational-development|oppimisen ja opetuksen kehittämisyksiköistä]] — havaitsi rakentavan yhdenmukaistamisen esitettävän tehokkuusongelmana: generatiivinen tekoäly oli "tehokas ja vaivaton tapa luonnostella rubriikkeja", joka voi "tehostaa prosessia", antropomorfisoituna "kasvatukselliseksi asiantuntijaksi ja avustajaksi", "sparring-kumppaniksi" tai "älykkääksi avustajaksi opetussuunnittelussa", kun akateeminen henkilöstö toimitti vain "aineasiantuntemusta" ja työkalu otti "raskaan työn oppimistavoitteiden kehittämisessä, kurssisisällön järjestämisessä ... ja kurssikomponenttien yhdenmukaistamisessa". Kopioi-ja-liitä-kehoteohjeet ja numeroidut mallipohjat kehystivät rakentavan yhdenmukaistamisen standardoitavaksi tuotteeksi, tuottaen kolme epäonnistumistilaa: performatiivisuus (yhdenmukaistaminen, joka vain näyttää yhdenmukaiselta), tilannesidonnaisen ja kriittisen kontekstin poistaminen ja pinnallinen yhdenmukaistaminen, joka sekoittaa yhdenmukaistamisen rakentavaan ulottuvuuteen. Heidän korjauskeinonsa järjestää opetussuunnitelman suunnittelun työnkulun uudelleen — kouluttajien on ymmärrettävä yhdenmukaistaminen tarpeeksi hyvin ohjatakseen, arvioidakseen ja hylätäkseen tekoälyn tuotosta ennen minkään osan delegoimista — ja rajaa työkalun institutionaaliseen [[rag|hakuperusteiseen]] agenttiin, joka nojaa paikalliseen politiikkaan, rubriikkeihin ja tutkintovaatimuksiin, ja "liminaalisen tutorin" rooliin, joka laajentaa [[educational-development|kehittäjän]] suhdetta sen korvaamisen sijaan.

**Opetussuunnitelman mukaisesti räätälöityjen mallinnustehtävien tuottaminen.** Tekoälypohjaiset alustat voivat vastata opettajien ajan ja resurssien puutteeseen laadukkaiden [[math-education|matemaattisten mallinnustehtävien]] suunnittelussa tuottamalla opetussuunnitelman mukaisia ongelmia ja pedagogisia suosituksia, jotka nojaavat suunnitteluperiaatteisiin ja [[rag|hakuperusteiseen]] generointiin — lähestymistapa, jota havainnollistetaan suoralla variaatiolla toisen asteen matematiikassa ([[ai-modeling-problem-generation-platform-2026]]). Kurssilukemistot itsessään ovat nyt myös generoinnin kohde: Sidorkin (2026) korvasi kaupallisen oppikirjan viikoittaisilla tekoälyn tuottamilla lukemistoilla jatko-opintojen koulutusjohtamisen kurssilla, ja vaikka opiskelijat arvioivat ne hyödyllisiksi ja 75 prosenttia oli samaa mieltä siitä, että oppivat enemmän kuin vertailukelpoisella kurssilla, 4 487 sivun lokit sisälsivät APA-tyylisiä tekstinsisäisiä viitteitä vain noin 0,80 prosentilla sivuista ja yhdistivät nimetyn kampuksen tai järjestelmän vakuuttaviin politiikkaväitteisiin noin 1,03 prosentilla sivuista ilman todennettavissa olevaa lähdettä. Opetusmateriaalien osalta johtopäätös on kohdella tuotettuja lukemistoja luonnostuotantona opettajan tarkastuksessa, budjetoida opettajan työ kehotteiden suunnitteluun ja verifiointiin ja kuratoida tarkistetut lähteet avustajaan sen sijaan että lähdeaineiston laatu jätetään opiskelijoiden pääteltäväksi kontekstista.

**Tekoälyavusteinen oppituntien suunnittelu opetussuunnitelmasta luokkahuoneeksi -kerroksessa.** Kohdassa, jossa opetussuunnitelmasta tulee opetettu oppitunti, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo ja Tahir (2025)]] vertasivat kokeellisesti opettajien tuottamia ja ChatGPT-avusteisia suunnitelmia lasten [[stem-education|STEAM]]-[[arts-design-and-media-education|taidekasvatuksessa]] ja havaitsivat, että kuusi asiantuntijaprofessoria arvioi tekoälyavusteiset suunnitelmat merkittävästi korkeammiksi (mediaani 20,5 vs. 17,6, p = 0,002, suuri vaikutus). He osoittavat, että hyöty riippuu siitä, miten opettaja delegoi: suositeltu menetelmä täyttää sisältöaukot itse hahmotellussa oppitunnissa (säilyttäen opettajan suunnittelu[[agency|autonomian]]) sen sijaan että delegoisi koko suunnitelman. He tarjoavat myös Role–Instructions–End Goal -kehotemallin toistettavaan, laadunvalvottuun generointiin — näyttö siitä, että tekoälyavusteinen oppituntien suunnittelu on vahvinta, kun se upotetaan opettajan opetussuunnitelmapäätöksiin eikä korvaa niitä. Tiedekasvatuksessa asiantuntijoiden validointi päätyy samanlaiseen tuomioon alustasuunnittelusta: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli ja Yildirim (2026)]] antoivat yhdentoista [[science-education|tiedekasvatuksen]] asiantuntijan arvioida ChatGPT-4:n ja koulutuskeskeisen työkalun (Teacher's Buddy) kuudesluokkalaisille suunnitelmia, jotka oli linjattu Turkin uudistettuun opetussuunnitelmaan ja Engineering [[design-based-research|Design-Based]] Learning -malliin. Koulutuskeskeinen alusta sai korkeammat pisteet kaikissa kahdeksassa laatukriteerissä — mukaan lukien palautepainotteiset vaiheet ja opetussuunnitelman yhdenmukaisuus — näyttö siitä, että pedagogisen rakenteen upottaminen tekoälyyn tuottaa paremmin linjattua tuotosta. Silti jotkut asiantuntijat suosivat edelleen yleiskäyttöistä suunnitelmaa sen vahvemman sosioemotionaalisen painotuksen vuoksi, ja 7/11 arvioi suunnitelmat "korjaamalla käyttökelpoisiksi" eikä suoraan käytettäviksi. Alustan ja kehote­kehystyksen valinta, ei vain tekoäly itse, muovaa sitä, miten hyvin tuotetut suunnitelmat linjautuvat opetussuunnitelman standardeihin ja prosessimalleihin.

Rakenne, ei kehotteiden sanamuoto, tekee tekoälyluonnostelusta luotettavaa tuotannossa: [[curriculum-as-code-instructional-design-2026|Paiva (2026)]]:n Curriculum-as-Code-putki karsi kontekstia aggressiivisesti ja tuotti materiaalit osio kerrallaan 28 projektikontekstissa, mikä leikkasi opettajan valmisteluajan noin kahdeksasta kahteen tuntiin opetusta kohden eikä jättänyt käsitteellisiä tai matemaattisia [[hallucination-risk|hallusinaatioita]] [[human-in-the-loop-ai|ihmistarkastuksen]] löydettäviksi.

### Yhteydet liittyviin käsitteisiin

Opetussuunnitelman suunnittelu kytkeytyy suoraan [[learning-design|oppimissuunnitteluun]] — opetussuunnitelma määrittelee mitä, opetus määrittelee miten. Se kytkeytyy [[ai-literacy|tekoälylukutaitoon]], koska tekoälykompetenssien upottaminen on ensisijainen opetussuunnitelmahaaste, [[teacher-role|opettajan rooliin]] ja [[educational-development|koulutuksen kehittämiseen]], koska opetussuunnitelman muutos edellyttää kouluttajien valmistamista, ja [[scaffolding|tukemiseen]], koska hyvin suunnitellut opetussuunnitelmat tukevat taitojen kehitystä kurssien ja vuosien yli. [[higher-ed|Korkeakoulutuksen]] ja [[k-12|K-12:n]] yhteydet heijastavat opetussuunnitelman suunnittelun relevanssia koulutusasteiden yli.

**Yhden tekoälylukutaidon viitekehyksen valinta tarkoittaa sanaston valintaa, jota kukaan ei ole ristiinkartoittanut.** Kartoittavassa katsauksessa 50:stä K-12-viitekehyksestä [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026|Kharbach et al. (2026)]] havaitsivat kompetenssimääritelmien yhtyvän kognitiivisiin, affektiivisiin, käyttäytymis-, eettisiin ja sosiaalisiin ulottuvuuksiin, kun taas nimikkeet ja konstruktiot eivät olleet linjassa. Vain ABCE-viitekehys lähestyi yhteistä mittaustraditiota, validoituna Hongkongissa, Shanghaissa ja Taiwanissa, ja etenemistä luokka-asteiden yli ehdotettiin toistuvasti eikä testattu missään.

## Yleiset väärinkäsitykset

- **"[[llm]] voi kartoittaa opetussuunnitelman, kun se on validoitu korkealla luotettavuudella."** GPT-o3-mini jakoi **100 % seitsemän yritystaidon kesken kullekin 48 arvioinnille**, saavuttaen **Krippendorffin alfan 0,81** asiantuntijapainoja vastaan — ja **yhteensopivuus** hajosi tietyillä taidoilla. Korkea kokonaisluotettavuus epätasaisella yhteensopivuudella on kuvio, joka on tarkistettava ennen kartoitukseen luottamista.
- **"Tekoälylukutaidon upottaminen tarkoittaa kurssin lisäämistä."** LearnAI osoittaa upotetun muodon: **laajan altistuksen kerros lyhyitä esityksiä 18 olemassa olevan kurssin sisällä viidellä alalla (293 opiskelijaa)**. Altistus jakautui opetussuunnitelman yli sen sijaan että se olisi koottu yhdeksi yksiköksi.
- **"Opiskelijat saapuvat jo kykenevinä arvioimaan mediaa kriittisesti."** Vain **13,8 % kyselyyn vastanneista kasvatus- ja journalismiopiskelijoista** sanoi kurssiensa käsitelleen kriittistä media-analyysia, kun **97,8 % piti sitä tärkeänä**. Arvostamisen ja opettamisen välinen kuilu on opetussuunnitelmallinen avaus.

## Liittyvät konseptit
- [[pedagogical-partnerships]] — Pedagogiset kumppanuudet
- [[business-education]]
- [[learning-design]]
- [[ai-literacy]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[cs-education]]
- [[generative-ai]]
- [[agentic-ai]]
- [[metacognition]]
- [[prompt-engineering]]
- [[collaborative-learning]]
- [[pedagogy]] — Katto: pedagogiikat ja opetusstrategiat tekoälykoulutuksessa
- [[recommender-systems-and-learning-paths]]

## Liittyvät artikkelit
- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — Painotettu, asiantuntijavalidointi taitokartoitus akkreditointia varten
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Kriittinen diskurssianalyysi GenAI-ohjeistuksesta rakentavaan yhdenmukaistamiseen (McInnes et al. 2026)
- [[icet-ml-education-trust-2026]] — Luottamuksen käsitteleminen tekoälyjärjestelmiin koulutuksen kautta: didaktinen näkökulma
- [[refrain-amplify-genai-curriculum-2026]] — Pidätä sitten vahvista -opetussuunnitelmaviitekehys GenAI:n sekvensointiin (Torres-Sahli et al. 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — Projektipohjainen tekoälykoulutuksen opetussuunnitelma lämpötekniikassa
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Työelämävalmiuden tasokehys älykkäälle valmistukselle tekoälyaikakaudella
- [[rewriting-curriculum-genai-pedagogy-2026]] — Opetussuunnitelman uudelleenkirjoittaminen: GenAI-vetoinen pedagoginen muutos
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — Tekoälytaitojen viitekehys: 26 arvioitavaa taitoa opetussuunnitelman kartoitukseen
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: juuri oikeaan aikaan tapahtuva tekoälyn yhteissuunnittelu alojen yli
- [[ai-video-dual-gatekeeping-2026]] — Kun "ei" tekee parempia videoita: kaksinkertainen portinvartiointi pedagogisesti perustellulle tekoälysisällön tuotannolle
- [[niri-steam-ai-literacy-review-2026]] — STEAM-koulutus tekoälylukutaitoa varten: systemaattinen katsaus
- [[caruana-pre-university-ai-education-slr-2026]] — Oppijoiden ja opettajien valmistaminen tekoälyvetoiseen tulevaisuuteen: systemaattinen katsaus esiyliopistollisesta tekoälykoulutuksesta (Caruana et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Tekoälypohjainen alusta matemaattisten mallinnusongelmien tuottamiseen (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — Tekoäly hiukkasfysiikan koulutuksessa: tutkimusongelmat ja perustaidot
- [[computing-assessment-genai-workshop-report-2026]] — Tekoäly voi tehdä kotitehtäväsi. Mitä nyt? Raportti verkossa järjestetystä työpajasta tietojenkäsittelyn arvioinnista generatiivisen tekoälyn aikakaudella
- [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026]] - kompetenssiviitekehykset yhtyvät viiteen ulottuvuuteen ilman yhteistä sanastoa tai ristiinkartoitusta
- [[bursic-ai-residency-education-curriculum-2026]] — Esteet tekoälyn integroimiselle erikoistumiskoulutuksen opetussuunnitelmiin: laadulliset haastattelut kahdentoista lääkäriliiderin kanssa
