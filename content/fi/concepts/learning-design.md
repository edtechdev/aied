---
title: "Oppimissuunnittelu"
created: "2026-10-27T17:25:00-04:00"
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy, intelligent-textbooks, learning-design-wiki]
translation_of: concepts/learning-design
source_updated: "2026-10-27T08:20:32-04:00"
updated: "2026-10-27T17:25:00-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

> **Oppimissuunnittelu** (tunnetaan myös nimellä *opetussuunnittelu*) tarkoittaa järjestelmällistä prosessia, jossa luodaan tehokkaita oppimiskokemuksia analysoimalla oppimistarpeita sekä suunnittelemalla, kehittämällä, toteuttamalla ja arvioimalla opetusmateriaaleja ja -toimintoja. Tekoäly muuttaa oppimissuunnittelua automatisoimalla sisällöntuotantoa, mahdollistamalla [[adaptive-learning|mukautuvia oppimispolkuja]], tukemalla datavetoista iterointia ja vahvistamalla opetussuunnittelijan roolia sen korvaamisen sijaan.

## Pohdittavaksi

- Ajattele kurssia tai oppituntia, jonka olet kokenut tai suunnitellut. Mihin 'mitä opettaa' (opetussuunnitelma) päättyi ja mistä 'miten opettaa' (oppimissuunnittelu) alkoi, ja miten nämä kaksi olivat vuorovaikutuksessa?
- Yleinen oletus on, että parempi tekoälysujuvuus tuottaa automaattisesti parempaa koulutussisältöä. Tämä sivu vastustaa sitä näytöllä siitä, että oppimisen tehokkuuden ratkaisee eksplisiittinen pedagoginen rakenne eikä pelkkä tekoälysujuvuus. Missä olet nähnyt vaikuttavaa tuotosta, joka epäonnistui opettamisessa?
- Jos tekoälytyökalu voi tuottaa kokonaisen kurssin yhdestä kehotteesta, mitkä inhimilliset päätökset muuttuvat tärkeämmiksi eivätkä vähemmän tärkeiksi? Sivu väittää, että tekoäly vahvistaa opetussuunnittelijan roolia sen korvaamisen sijaan: miltä tuo vahvistettu rooli näyttäisi?
- Joitakin opetussuunnittelun malleja, kuten ADDIE, käytetään jäykkinä, lineaarisina vaiheina. Sivu käsittelee niitä kuitenkin iteratiivisina, joustavina suunnittelun heuristiikkoina. Milloin prosessin liian kirjaimellinen seuraaminen voisi heikentää hyvää suunnittelua?
- Sivu osoittaa, että pedagogisesti perusteltu kehotteistus, esimerkiksi oppimisteoriaan nojaava viisivaiheinen viitekehys, paransi merkittävästi korkeamman tason tuloksia. Jos rakentaisit tekoälytuutorin, mitä koodaisit eksplisiittiseen suunnittelukerrokseen, jotta sen opetusstrategia pysyisi jäljitettävänä ja toistettavana?

## Johdanto

Oppimissuunnittelu yhdistää tekoälyn kyvykkyydet ja tehokkaan pedagogiikan. Siinä missä [[curriculum-design|opetussuunnitelman suunnittelu]] käsittelee sitä, *mitä* ohjelmatasolla opetetaan, oppimissuunnittelu käsittelee sitä, *miten* sitä opetetaan kurssi- ja oppituntitasolla. Tämän tietopohjan artikkelit tarkastelevat sekä tekoälyä oppimissuunnittelijoiden työkaluna että oppimissuunnittelun periaatteita tehokkaiden [[intelligent-tutoring|tekoälytuutorointijärjestelmien]] rakentamiseksi.

Se, mitä tuo suunnittelutyö käytännössä sisältää, on itsessään empiirinen kysymys. [[tang-chatbots-learning-design-2026|Tang et al. (2026)]] koodasivat 1 378 suunnittelijan ja chatbotin vuoroa viideltä aloittelevalta oppimissuunnittelijalta, jotka työskentelivät suunnittelutyökaluun upotetun chatbotin kanssa, ja havaitsivat, että dialogi keskittyi oppimistavoitteisiin ja pedagogiseen lähestymistapaan eikä sisällöntuotantoon. Suunnittelijat palasivat tavoitteisiin toistuvasti linjauksen tarkistuksena muuttaessaan opetussuunnitelman osia konkreettisiksi tehtäviksi, ja avustajan rooli vaihteli vaiheiden mukaan termien selkeyttämisestä tehtäväsuunnittelun tukemiseen ja tarkistuskierroksen ajamiseen ennen määräaikaa. Tämän näytön perusteella suunnittelutuki ei ole niinkään materiaalin tuottamista kuin suunnitteluaikomuksen pitämistä yhtenäisenä.

Oppimisanalytiikka ja generatiivinen tekoäly tukevat suunnittelun eri osia: yhdessä australialaisessa yliopistossa pidetyissä 11 fokusryhmässä analytiikkadiskurssi esiintyi useimmin yhdessä kontekstin ja kurssitason ongelmanratkaisun kanssa (0,32), kun taas generatiivisen tekoälyn diskurssi keskittyi arviointisuunnitteluun (0,26) ja opiskelijan itsemääräämisen tukemiseen suunnitteluun (0,15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]]).

### Keskeiset tutkimusteemat

**Tekoälyavusteinen sisällöntuotanto** on suorin muutosta tuottava sovellus. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]** esittää kuusivaiheisen arkkitehtuurin, joka yhdistää generatiivisen tekoälyn LaTeXiin ja Pythoniin [[stem-education|STEM]]-materiaalien tuotannon automatisoimiseksi, ja se validoitiin 8 moduulissa ja 28 projektikontekstissa opiskelijoiden laatuluokituksin 8,5-9,9/10. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** käyttää ADDIE-mallin ympärille rakennettua moniagenttiviitekehystä, jossa roolipohjaiset agentit (Teaching Faculty, Instructional Designer, Course Coordinator) tekevät yhteistyötä kokonaisten kurssimateriaalien tuottamiseksi. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** tarjoaa jäsennellyn putken mukautuvaan [[pedagogy|pedagogiseen]] [[video-education|videotuotantoon]] kurssikorpuksiin nojautuen ja osoittaa, että eksplisiittinen pedagoginen rakenne eikä pelkkä tekoälysujuvuus on välttämätön koulutussisällön tuotannossa. [[generative-ai|Generatiivinen tekoäly]] voi myös ilmentää oppimissuunnittelun periaatteita tuottamassaan sisällössä: [[ai-modeling-problem-generation-platform-2026|tekoälypohjainen alusta matemaattisten mallinnustehtävien tuottamiseen]] yhdisti vakiintuneet suunnitteluperiaatteet [[prompt-engineering|hakukanavointiin perustuvaan generointiin]] ja kehitettiin ADDIE-lähestymistavan kautta tuottamaan pedagogisesti perusteltuja tehtäviä ja suosituksia, joita tavanomaisilta sisällöntuottajilta puuttuu. Tällaisen tekoälyavusteisen sisältö- ja oppituntituotannon hyöty on kuitenkin välittynyt opettajan oman asiantuntemuksen kautta: [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] havaitsivat, että kokeneet opettajat mukauttavat kriittisesti tekoälyn tuottamia oppitunti-ideoita opiskelijoihin ja kontekstiin (kehotteistamalla uudelleen ja laajentamalla tuotosta), kun taas noviisit hyväksyvät tekoälyn ehdotukset suoraan, joten tekoälysisältötyökalujen pedagoginen arvo riippuu opettajan kokemuksesta ja tekoälyosaamisesta eikä työkalusta yksinään. Systemaattinen katsaus [[wang-teacher-ai-co-design-review-2026|opettajan ja tekoälyn yhteissuunnittelusta oppimistehtävissä]] (Wang, Liu & Islam 2026) vahvistaa kuvion laajassa mittakaavassa 28 tutkimuksen yli (2015-2025): generatiivista tekoälyä käytetään pääasiassa oppituntien suunnitteluun, kehotteiden tuottamiseen ja luovaan ideointiin, ja hallitseva yhteistyötila on tekoäly avustajana ja sisällöntuottajana eikä täydempänä yhteissuunnittelijana, ja tehokkuus, responsiivisuus, [[creativity|luovuus]] ja [[equity-in-ai-education|tasa-arvo]] toistuvat mahdollistajina. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] terävöittää opettajan asiantuntemusta koskevaa löydöstä ryhmätoimintojen suunnitteluun: kokeneet opettajat tuottavat rikkaampia, synergisempiä ja paremmin lähikehityksen vyöhykkeeseen sovitettuja rooliarkkitehtuureja tekoälyn suunnittelemissa yhteistoiminnallisissa toiminnoissa kuin noviisit tekoälyn tuttuudesta riippumatta, ja kehystää "pedagogisen kehoteosaamisen" vivuksi, joka muuttaa tekoälyn tuotoksen tehokkaaksi [[collaborative-learning|eriytyneeksi ryhmäoppimiseksi]].

Aila-kokeilu antaa tuolle kuviolle suunnitteluajan luvun. Sen satunnaistettujen alakoulujen opettajat käyttivät oppituntien valmisteluun työkalun kanssa 2,51 tuntia viikossa vastaan 3,32 tuntia ilman sitä, mutta mediaaniopettaja suunnitteli vain 21-40 % oppitunneista tyhjästä, ja juuri siihen tapaukseen tyhjästä aloittava työkalu vastaa ([[roy-aila-lesson-planning-teacher-choices-2026|Roy et al., 2026]]).

Siinä, missä tuotettu materiaali jää vajaaksi, on opetussuunnitelmaan sovittaminen: seitsemän matematiikan opettajaa arvioi tekoälyn tuottamat tuottavan epäonnistumisen tehtävät lähelle ihmisen tuottamia kokonaislaadussa (M = 17,19 vs. 17,43 asteikolla 25) mutta heikommiksi opetussuunnitelman linjauksessa (M = 2,57 vs. 3,29), joten tuotetut tehtävät vaativat yhä muokkausta pituuden, luettavuustason ja visualisointien osalta ([[rhaimi-productivemath-2025|Rhaimi et al. (2025)]]).

**Pedagogisesti perusteltu tekoälytuutorointi** soveltaa opetussuunnittelun periaatteita tekoälyjärjestelmien suunnitteluun. **[[didactical-teacher-assistant-dimensional-modeling|Brisson et al.]]** rakensivat didaktisesti ohjatun [[llm]]-opettaja-avustajan, jossa tuutorointistrategia on koodattu eksplisiittiseen ulkoiseen kerrokseen, mikä tekee sisällön valinnasta ja didaktisesta jäsentämisestä jäljitettävää ja toistettavaa ja vastaa suoraan [[rethinking-scaffolding-llm-tutors]]-sivun läpinäkymättömyyttä koskeviin huoliin. **[[instructional-guidance-genai-learning|Hou et al.]]** osoittivat, että generatiiviseen [[learning-theories|oppimisteoriaan]] nojaava viisivaiheinen [[prompt-engineering|kehotteistus]]viitekehys paransi merkittävästi korkeamman tason kognitiivisia tuloksia, mikä osoittaa, että oppimisen tehokkuuden ratkaisee opetuksellinen ohjaus eikä pelkkä pääsy tekoälyyn. Molemmat yhdistyvät [[scaffolding|tukemiseen]] ja [[intelligent-tutoring|älykkääseen opastukseen]].

**Viitekehykset ja arviointi** tarjoavat jäsenneltyjä lähestymistapoja. **[[bridging-instructional-design-framework-math]]** ja **[[cotal-formative-assessment-scoring-2026|CoTAL]]** havainnollistavat [[human-in-the-loop-ai|ihminen silmukassa]] -suunnitteluperiaatteita. **[[genai-mindtool-generative-learning]]** asettaa tekoälyn "ajattelutyökaluksi" (mindtool): kognitiiviseksi kumppaniksi, joka laajentaa oppijan ajattelua sen korvaamisen sijaan, ja soveltaa opetussuunnittelun teoriaa suoraan tekoälyn integrointiin. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** soveltaa universaalin oppimissuunnittelun periaatteita luodakseen saavutettavan tekoälypohjaisen ajattelukumppanin kasvattajille ja yhdistää opetussuunnittelun [[inclusive-learning|osallistavaan oppimiseen]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate-Inquire-Reflect) on tehtäviä jäsentävä viitekehys kognitiivisesti aktivoivalle tekoälyn käytölle, joka rajaa tekoälyn panosta niin, että ennustaminen, tulkinta ja arviointi jäävät oppijalle: tekoälykohtainen sovellus tutkivista sykleistä, jotka nojaavat [[self-regulated-learning|itsesäänneltyyn oppimiseen]], kognitiivisen kuormituksen teoriaan ja [[human-ai-collaboration|ihmisen ja tekoälyn yhteistyöhön]]. Näitä suunnittelukehyksiä täydentää [[dohn-boundary-object-classifying-genai-learning-activities-2026|Dohn et al. (2026) taksonomia]], joka tarjoaa suunnittelumenetelmän sijaan *luokittelun*: kuusi kategoriaa (oppimistavoite, sisältö, esitysmuoto, episteeminen [[student-engagement|sitoutuminen]], sosiaalinen suunnittelu, artefaktit), joiden avulla suunnittelijat ja [[research-methods-aied|tutkijat]] voivat kuvata, vertailla ja kuvitella generatiivisen tekoälyn oppimistoimintoja tekemällä eksplisiittiseksi, miksi, mitä, miten, millä ja kenen kanssa oppijat sitoutuvat generatiiviseen tekoälyyn; taksonomia rakennettiin rajapinnaksi postdigitaalisen dialogin kautta. Älyluokkaviitekehykset laajentavat tämän [[teacher-education|opettajankoulutukseen]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao ja Wang (2026)]] ehdottavat kolmiulotteista viitekehystä älykkäälle koulutukselle (oppimisen tehokkuus, tieto- ja viestintäteknologia (ICT) ja luokkahuoneen organisointi) ja toteuttavat sen [[math-education|matematiikan]] maisterikurssilla, jossa yhdistyvät [[automated-assessment|automatisoitu pisteytys]], personoidut suositukset ja monitekoäly[[ai-feedback-quality|palaute]] ennen tuntia, tunnin aikana ja tunnin jälkeen. Kvasikoe osoitti merkittävää kehitystä opiskelijoiden kyvyssä muotoilla täsmällisiä, ammatillisesti perusteltuja opetustavoitteita, ja tuotti siirrettävän **D-T-E-mallin** (Disciplinary Demand - Technological Empowerment - Evaluation Loop), joka antaa [[discipline-specific-aied|alakohtaista]] ohjausta [[educational-development|opettajankouluttajille]], jotka siirtävät älykkään koulutuksen käsitteitä käytännön opetussuunnittelutyöhön.

**Suunnittelu kantaman mukaan.** Halanin seitsemän vivun viitekehys kysyy jokaiselta kurssiympäristöltä, mitkä vivut toimivat edelleen, kun opiskelija on yksin tekoälyn kanssa; rakenteelliset liikkeet, kuten sen muuttaminen, mitä arvosana todentaa, tai tehtävät, joita ei voi suorittaa ilman ajattelua, yltävät pidemmälle kuin opiskelijoille kertominen siitä, että prosessilla on merkitystä ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Rajaa työkalua ajattelun suojelemiseksi.** Yhdeksän viikon argumentoivan kirjoittamisen suunnittelu jäsensi opettajan rajaamia chatbotja, jotka esittävät kysymyksiä ja kieltäytyvät tuottamasta opiskelijan proosaa, ja neljä lukio-opiskelijaa siirtyi passiivisista tekoälyn kuluttajista arvioijiksi, jotka haastoivat tuotoksia: juuri strateginen rajaaminen eikä rajoittamaton generatiivisuus seurasi kehitystä ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote & Taub (2026)]]).

**Arviointikriteereihin ohjattu kehotteistus suunnitteluvipuna.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] osoittivat, että arviointikriteeristö toimii välittävänä rajapintana inhimillisen pedagogisen aikomuksen ja koneen päättelyn välillä: kun arviointikriteerejä kohdeltiin muokattavina suunnitteluartefakteina eikä kiinteinä instrumentteina ja niitä hiottiin iteratiivisesti LLM:n kanssa, LLM:n ja ihmisen yksimielisyys opiskelijoiden suunnittelutyöstä nousi 54,75 prosentista 81,25 prosenttiin. LLM:ille rakennettujen kriteeristöjen on tasapainoteltava täsmällisyyden ja joustavuuden välillä: liian epämääräinen kutsuu vapaaseen tulkintaan, liian jäykkä pelkistää mallin kaavojen sovittamiseen, ja roolitietoinen kehotteistus (opettaja, vertaisarvioija, apuraha-arvioija) tuotti erilaisia arvioivia palautteita. Tämä asettaa kriteeristösuunnittelun konkreettiseksi oppimissuunnittelukäytännöksi tekoälyn arviointikäyttäytymisen muovaamiseksi, ja inhimillinen valvonta säilyy välttämättömänä.

**Tekoälyagentit opetussuunnitteluun** laajentavat alan [[agentic-ai|agenttiseen tekoälyyn]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** on ensimmäinen standardoitu, teoriaan ankkuroitu vertailumitta LLM-pohjaisten opetussuunnitteluagenttien arviointiin: sen 25 795 skenaarion kontekstimatriisi (51 kontekstimuuttujaa × 33 ISD-alavaihetta ADDIE-mallista) osoittaa, että klassisiin ISD-viitekehyksiin (ADDIE, Dick & Carey, Rapid Prototyping ISD) nojaavat agentit päihittävät teoriattomat agentit, mikä validoi empiirisesti, että opetussuunnittelu on jäsentynyt tieteenala eikä yleinen kehotteistustehtävä. Agentit eivät ole vain suunnitelmien *rakentajia* vaan myös niiden *kriitikoita*: [[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech (2025)]] käyttävät yhtä autonomista verkkoagenttia, joka navigoi monivaiheisen verkkotunnin kuin opiskelija arvioidakseen oppimissuunnitelman *ennen* kuin todelliset oppijat sitoutuvat siihen: sen kuvaus opiskelijakokemuksesta ennustaa, missä noviisit keskeyttävät, ja nostaa esiin toimintakelpoista suunnittelupalautetta, päihittäen kaikki vertailukohdat ja jopa simuloidun opiskelijakohortin globaalilla CS1-kurssilla. Tämä kehystää ennen julkaisua tapahtuvan agenttisen arvioinnin edulliseksi täydennykseksi inhimilliselle suunnittelun iteroinnille. **[[wang-multi-agent-systems-learning-designers-2025]]** ja **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** tutkivat moniagenttiviitekehyksiä, jotka orkestroivat roolipohjaisia agentteja opetussuunnittelumallien ympärille, kun taas **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** tarkastelee, miten opettajat ja agentit soveltavat yhdessä teknologis-pedagogista sisältötietoa. Tämä työ yhdistää opetussuunnittelun [[benchmark|vertailumittauksiin]], [[ai-ed-evaluation|tekoälykoulutuksen arviointiin]] ja [[curriculum-design|opetussuunnitelman]] suunnitteluun laajassa mittakaavassa.

### Yhteydet liittyviin käsitteisiin

Oppimissuunnittelu on [[ai-education|tekoälyn koulutuksessa]] -alan siltatiede: se yhdistää [[curriculum-design|opetussuunnitelman suunnittelun]] (mitä opetetaan) [[scaffolding|tukemiseen]] (miten oppijoita tuetaan), [[educational-development|koulutuksen kehittämiseen]] (miten kasvattajat valmistetaan) ja [[generative-ai|generatiiviseen tekoälyyn]] (itse työkaluihin). Se on tiiviisti kytköksissä [[teacher-role|opettajan rooliin]], koska tekoälytyökalut muovaavat sitä, mitä oppimissuunnittelijat ja opettajat tekevät, ja [[ai-literacy|tekoälylukutaitoon]], koska tehokas tekoälyn integrointi edellyttää kasvattajien ymmärtävän tekoälyn kyvyt ja rajoitukset. Suunnittelutyö ratkeaa lopulta *toimintojen järjestykseksi*: [[pedagogical-patterns|pedagogiset kuviot]] luettelevat testatut liikkeiden järjestykset, jotta suunnittelija voi päättää, mihin oppitunnin kohtaan tekoäly kuuluu, eikä vain sitä, mitä siihen sisällytetään. [[learning-sciences|Oppimistieteet]] ovat näiden periaatteiden takana oleva tutkimusala: siinä missä tämä sivu kattaa oppimiskokemusten luomisen ammatillisen käytännön, oppimistieteet tutkivat tuota käytäntöä ja sen suunnitelmia empiirisesti ja tuottavat ne kognitiiviset, motivationaaliset ja sosiaaliset periaatteet, jotka oppimissuunnittelu sitten operationalisoi.

### Miten oppimissuunnittelu määrittää oppimistulokset

Oppimissuunnittelu on vipu, joka ratkaisee, tuottaako tekoäly [[learning-gains|oppimistuloksia]] vai vain tekoälyllä paisutettua suoriutumista. Tietopohjan näyttö on tässä johdonmukaista: **sama tekoälytyökalu tuottaa suuria hyötyjä tai nettovahinkoa riippuen siitä, miten oppimiskokemus on suunniteltu sen ympärille.** [[instructional-guidance-genai-learning|Hou et al.]] osoittivat, että oppimisteoriaan nojaava viisivaiheinen kehotteistusviitekehys paransi merkittävästi korkeamman tason kognitiivisia tuloksia, kun taas pelkkä pääsy tekoälyyn ei; [[genai-mindtool-generative-learning|mindtool]]- ja [[airis-cognitively-activated-ai-physics-2026|AIRIS]]-viitekehykset säilyttävät oppijan kognitiivisen työn, jolloin tuloksena on kestäviä hyötyjä eikä tehtävän tehokkuutta. [[learning-gains|Oppimistuloksia]] suojaavat suunnitteluvalinnat (tuki, joka edellyttää opiskelijan yritystä, [[formative-assessment|formatiivinen arviointi]] ilman apua mitatuin tuloksin ja pedagoginen rakenne, joka pitää oppijan toimijana) heijastavat alan löydöstä (ks. [[learning-gains]]), jonka mukaan tekoäly on vahva hyöty silloin kun se valmentaa ja haitta silloin kun se vastaa. Huonosti suunnitellut tekoälyä integroivat oppitunnit joutuvat sitä vastoin [[cognitive-offloading|suoriutumisen ja oppimisen kuilun]] uhriksi, jossa näennäinen menestys peittää alleen oppimisen puuttumisen.

### Käytännön ohjeita suunnittelijoille ja kehittäjille

Opetussuunnittelijoille, kurssikehittäjille ja insinööreille, jotka rakentavat tekoälyavusteisia oppimiskokemuksia, tietopohjan löydökset muuntuvat toimintakelpoiseksi käytännöksi. Yksi raja kannattaa merkitä ennen itse käytäntöjä: tämän sivun kuvaama oppimissuunnittelu on kurssin suunnittelua tunnetulle kohortille, kun taas samojen periaatteiden leipominen tuotteeseen, jota monet kurssit (sellaisten ihmisten opettamina, joita suunnittelija ei koskaan tapaa) käyttävät, on [[educational-technology-developers|koulutusteknologian kehittäjien]] työtä, jossa oletusarvot, muokattavuus ja dokumentaatio kantavat pedagogista painoa:

**Perusta tekoälygenerointi jäsenneltyyn opetusmalliin.** Tekoälysisältö on vain niin hyvää kuin sen takana oleva pedagoginen rakenne: laadun ratkaisee eksplisiittinen rakenne eikä tekoälysujuvuus. Suunnittele tunnustetun mallin (ADDIE, Dick & Carey, pikaprototyyppaus) ympärille ja koodaa pedagogiset päätökset eksplisiittisesti sen sijaan, että luottaisit mallin päättelevän ne.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Ota käyttöön sekä periaatetason viitekehys että opetusmalli.** Kurssitason malli jäsentää yhden suunnitelman; julkaistu viitekehys asettaa kriteerit, jotka monen suunnitelman tulisi täyttää. Kokonaisuudessaan luettava esimerkki on Digital Promisen *Powerful Learning with Emerging Technology*, joka järjestää ohjeistuksensa kolmen periaatteen alle (Evidence-Based, Learner-Centered, Skill-Building), laajentaa jokaisen käytäntöihin ja strategioihin ja liittää [[privacy|yksityisyyden]], [[explainable-ai|selitettävyyden]] ja oikeudenmukaisuuden tiettyihin käytäntöihin turvavelvoitteina eikä valinnaisina lisukkeina.([[powerful-learning-with-emerging-technology-2025]])
**Sovita tekoälykonfiguraatio tehtävään, ei hienostuneisuuteen.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] erottaa neljä kerrosta (kehote, konteksti, valjaat ja vahvistettu silmukka) ja soveltaa minimaalisesti riittävän kerroksen periaatetta: käytä yksinkertaisinta konfiguraatiota, joka pystyy todennettavaan tulokseen, koska lisätty orkestrointi tuo koordinoinnin, vahvistamisen, yksityisyyden ja ymmärtämisen kustannuksia.

**Käytä roolipohjaisia moniagenttityönkulkuja sisällöntuotantoon.** Yhden yleisen kehotteen sijaan orkestroi erillisiä agentteja ja rooleja (opettava tiedekunta, opetussuunnittelija, kurssikoordinaattori), jotka tekevät yhteistyötä määritellyn putken kautta: tämä heijastaa sitä, miten todelliset kurssitiimit työskentelevät, ja tuottaa täydellisempiä materiaaleja kuin yksittäinen kehote.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Tarjoa opetuksellista ohjausta, älä vain pääsyä tekoälyyn.** Riippumatta siitä, ovatko oppijat vuorovaikutuksessa tekoälyn vai tekoälyn tuottamien materiaalien kanssa, oppimisteoriaan rakennettu ohjaus (esim. generatiivisen oppimisen periaatteisiin nojaava vaiheittainen kehotteistuksen [[scaffolding|tuki]]) ajaa korkeamman tason tuloksia; pelkkä pääsy ei. Suunnittele oppimistoiminto sen mukaan, miten mieli oppii, ja kohtele tekoälyä kognitiivisena "ajattelutyökaluna", joka laajentaa ajattelua sen korvaamisen sijaan.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Mallinna unohtaminen ja ajoita kertaus sinne, missä rappeuma on pahinta.** G4L esittää tiedon rappeuman Ebbinghausin unohtamiskäyrällä, jota ajavat kulunut aika ja toistot, ja priorisoi yksiköt, jotka ovat alttiimpia rappeumalle, sen sijaan että se tarjoilisi uudelleen sen, mikä pisteytettiin viimeksi ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).

Fowlin et al. (2026) lisäävät operationaalisen liikkeen sen päättämiseen, mihin tekoäly tulee: pura toiminto osiin, jotka on parasta tehdä itsenäisesti, ja osiin, jotka on parasta tehdä yhdessä tekoälyn kanssa, ja pidä kasvattajan harkinta keskeisenä jaossa ([[fowlin-operationalizing-learning-principles-ai|Fowlin et al. (2026)]]).

**Tee sisällöstä jäljitettävää ja tarkistettavaa.** Anna inhimillisen suunnittelijan tarkistaa ja korjata tekoälyn tuotos ennen kuin se saavuttaa oppijat, ja jäsennä tekoälygenerointi niin, että pedagoginen perustelu (miksi tämä sisältö, tässä järjestyksessä) on tarkasteltavissa: tämä vastaa sekä laatuun että niihin läpinäkymättömyyshuoliin, jotka heikentävät [[trust|luottamusta]] herättävää opetusta.([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **Tarkista tekoälyn tuottama media käsikirjoitusvaiheessa, ei synteesin jälkeen.** PedaCo sijoittaa kasvattajan tarkistuksen käsikirjoitukseen, jossa pedagogiset virheet on halpa korjata, ennen kuin mitään renderöidään; arvioitu opetuksellinen validiteetti nousi 3,07:stä 3,86:een, kun taas automatisoitu synteesin jälkeinen kerros paransi vain kahta viidestä ulottuvuudesta ([[ai-video-dual-gatekeeping-2026|Kim, Baek ja Kwak (2026)]]).

**Suunnittele [[accessibility|saavutettavuus]] alusta asti.** Sovella [[universal-design-for-learning|universaalin oppimissuunnittelun]] periaatteita rakentaessasi tekoälytyökaluja ja tekoälyn tuottamia materiaaleja, jotta ne palvelevat monenlaisia oppijoita, sen sijaan että saavutettavuus lisättäisiin jälkikäteen.([[ludia-udl-ai-thought-partner-2026]])

**Suunnittele jakeluvälineen mukaan.** [[online-teaching-and-learning|Verkko-opetuksen ja -oppimisen]] opetussuunnittelu ei ole lähiopetuksen suunnittelun neutraali käännös: väline muuttaa sitä, mikä tuki, arviointi ja vuorovaikutus ovat mahdollisia, ja tekoäly kertoo sekä mahdollisuudet (skaalautuva [[personalized-learning|personointi]], aina päällä oleva tuki) että riskit ([[academic-integrity|rehellisyys]], [[cognitive-offloading|kognitiivinen siirtokuormitus]]), jotka suunnittelijan on otettava huomioon. Suunnittele tekoälyn pedagoginen kääre yhtä tarkoituksellisesti verkossa kuin kasvokkain.

**Arvioi vertailumittaa vasten, ei tuntuman perusteella.** Jos rakennat opetussuunnitteluagenttia, arvioi se standardoitua, teoriaan ankkuroitua vertailumittaa vasten (esim. [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]), jotta voit mitata, parantaako todelliseen ISD-viitekehykseen nojaaminen tuotosta yleiseen LLM:ään verrattuna.([[jeon-isd-agent-bench-2026]])

- **Tekoäly muovaa opetussuunnittelun käytäntöä.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]] [[meta-analysis-systematic-review|käyvät systemaattisesti läpi]] 28 tutkimusta (2020-2025) ja havaitsevat, että tekoäly auttaa suunnittelijoita sisällöntuotannossa, mallipohjissa ja personoinnissa ja käsitteellistetään työtoveriksi, yhteistyökumppaniksi tai kumppaniksi eikä vain työkaluksi, vaikka pedagoginen linjaus ja ammattilaisten valmius ovat yhä haasteita.

- **Dokumentoitu toiminta keskittyy syklin yhteen vaiheeseen.** Katsauksessa 78 tutkimuksesta tekoälytuetusta opetussuunnittelusta suunnitteluvaiheen toiminta esiintyy **74:ssä 78 tutkimuksesta (95 %)** ja kehittäminen 44:ssä (56 %), kun taas analyysi yltää vain 11:een (14 %), arviointi 10:een (13 %) ja toteutus 7:ään (9 %), eikä **yksikään tutkimus tarkastellut tekoälyn tukea koko ADDIE-syklin yli**. Sykli on tavoite, jota evidenssipohja ei kata, millä on merkitystä kenelle tahansa, jolle myydään "tekoälypohjaista kurssikehitystä" päästä päähän -kyvykkyytenä ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou & Kameas, 2026]]).
- **Kolme tekoälyroolia hierarkkisesti jakautuneina.** *Generatiivinen* käyttö, jossa tekoäly tuottaa suunnittelusisältöä kasvattajan ohjauksessa, hallitsee **96 prosentissa tutkimuksista**; *tukeva* käyttö, jossa tekoäly jäsentää suunnittelijan omaa päättelyä, esiintyy 35 prosentissa; *arvioiva* käyttö, jossa tekoäly arvioi artefaktin laatua, 21 prosentissa. Ala käyttää ylivoimaisesti tekoälyä asioiden tekemiseen eikä omien suunnittelupäätöstensä kyseenalaistamiseen, mikä on päinvastainen kuin se kriittisen ystävän konfiguraatio, jonka katsaus nostaa esiin pedagogisesti lupaavana.

## Yleiset väärinkäsitykset

- **"Tekoälyn oppituntisuunnittelu palauttaa aikaa opettajille."** Suunnitteluaika laski 3,32 tunnista viikossa 2,51 tuntiin työkalun kanssa, mutta **mediaaniopettaja suunnitteli vain 21-40 % oppitunneista tyhjästä**. Aikaa säästyi eikä suunnittelusta tullut olennaisesti perusteellisempaa: säästö kertyi sen sijaan että se olisi sijoitettu uudelleen.
- **"Yhteissuunnittelu tekoälyn kanssa on vahvasti näyttöön perustuvaa."** Systemaattinen katsaus [[wang-teacher-ai-co-design-review-2026|opettajan ja tekoälyn yhteissuunnitteluun oppimistehtävissä]] **vahvistaa kuvion laajassa mittakaavassa 28 tutkimuksen yli**, mikä kuvaa johdonmukaista käytäntöä eikä osoita parempia tuloksia.
- **"Arviointikriteeristö on kiinteä syöte."** Kriteeristö toimii **välittävänä rajapintana inhimillisen pedagogisen aikomuksen ja koneen päättelyn välillä**: juuri kriteerien kohteleminen **muokattavina** antaa instrumentin kantaa kasvattajan aikomuksen. Kiinteä kriteeristö siirtää koneen oletuskehyksen arviointiin.

## Liittyvät käsitteet

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] - Pedagogiset kumppanuudet
- [[online-teaching-and-learning]] - Verkko-opetus ja -oppiminen
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] - katto: pedagogiikat ja opetusstrategiat tekoälykoulutuksessa
- [[stakeholders]] - katto: ihmiset ja yleisöt tekoälykoulutuksessa (oppijat, opettajat, suunnittelijat, hallinnoijat, päättäjät)

## Liittyvät artikkelit

- [[roy-aila-lesson-planning-teacher-choices-2026]] — Mitattu suunnitteluajan säästö yhdessä sen havainnon kanssa, että opettajat suunnittelevat vain 21-40 % oppitunneista tyhjästä
- [[powerful-learning-with-emerging-technology-2025]] — Tehokas oppiminen nousevan teknologian kanssa
- [[claassen-learning-analytics-genai-learning-design-2026]] — Oppimisanalytiikka ja generatiivinen tekoäly oppimissuunnittelun päätöksenteossa
- [[tang-chatbots-learning-design-2026]] — Chatbotin käyttö oppimissuunnittelussa: suunnittelijat viipyvät tavoitteissa ja pedagogiikassa sisällöntuotannon sijaan (Tang et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Opettajan ja tekoälyn vuorovaikutuskuviot oppituntisuunnittelussa kokemuksen ja tekoälyosaamisen mukaan (Choi et al. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — Tekoäly korkeakoulutuksessa: sitoutuminen ja opetusmenetelmien välittävä rooli
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — Taksonomia (rajapinta) generatiivisen tekoälyn oppimistoimintojen luokitteluun
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] — Tekoälyverkkoagentit: autonominen verkkoagentti arvioi oppituntisuunnitelmia ja ennustaa opiskelijoiden keskeyttämisen ennen kuin opiskelijat sitoutuvat (Wang, Mitchell & Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: viitekehys kognitiivisesti aktivoivalle tekoälyn vahvistamiselle fysiikassa
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Suunnittelu kantaman mukaan: seitsemän vipua ja yksin tekoälyn kanssa oleva opiskelija
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — Kun ei-sanominen tekee parempia videoita: kaksinkertainen portinvartiointi pedagogisesti perustellussa tekoälysisällön tuotannossa
- [[rhaimi-productivemath-2025]] — ProductiveMath: tekoäly tuottavan epäonnistumisen tehtävien suunnittelun tukena
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — Tekoäly ja opetussuunnittelun käytäntö: systemaattinen katsaus (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Graafipohjainen älykäs opastus dynaamisilla aloilla (2026)
- [[making-ai-annoying-constrained-writing-2026]] — Tekoälyn tekeminen tarkoituksella ärsyttäväksi: rajaaminen tekoälytuetussa kirjoittamisessa (Konradt, Boote & Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Älyluokkamalli ja D-T-E-silmukka matematiikan maisterikurssin opetussuunnittelun osaamisen parantamisessa (Zhu et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Tekoälypohjainen alusta matemaattisten mallinnustehtävien tuottamiseen (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — Opettajan ja tekoälyn yhteissuunnittelu oppimistehtävissä: trendit ja näkökulmat (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Roolien arkkitehtuuri tekoälyn suunnittelemissa eriytyneissä ryhmätoiminnoissa (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM:t iteratiivisen pedagogisen suunnittelun agentteina
