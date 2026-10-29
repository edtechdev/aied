---
title: "Mitkä ovat tehokkaan tekoälyohjaajan kehittämisen parhaat käytännöt?"
created: "2026-08-29T20:36:43-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Tekoälyohjaajasi pilotti on kolmen viikon päässä. Keskustelu toimii, malli selittää derivaatan puhtaasti ja sisäinen demo sai aplodit. Sitten joku opetuskeskuksesta kysyy kysymyksen, jolle määrittelyssäsi ei ole kenttää: kun lukukausi tämän kanssa on ohi, ratkaisevatko opiskelijat ongelman, kun työkalu ei ole paikalla? Sinulla on ominaisuusluettelo. Sinulla ei ole yhtä lausetta siitä, mihin oppijan pitää pystyä yksin lopussa.

Ohjaaja on [[conversational-ai|chatbotin]] ympärille kääritty toimintaperiaate, ja periaate ratkaisee, tapahtuuko oppimista. Nimeä kognitiivinen työ, joka oppijan on tehtävä, vaadi järjestelmää edellyttämään sitä (yritys ennen apua, vihjeporras joka hiipuu, tarkistus jota malli ei voi huijata) ja arvioi ohjaaja pois kytkettynä. Mallin laatu määrää, miltä keskustelu tuntuu. Periaate määrää, mitä opiskelija osaa kesäkuussa.

## Lyhyt versio

**1.** Kirjoita tavoite väitteenä itsenäisestä suoriutumisesta ja johda siitä jokainen ominaisuus. Jos ominaisuutta ei voi jäljittää tuohon lauseeseen, se on demo-ominaisuus.

**2.** Rakenna oppijamalli todisteista, jotka voit kirjata lokiin, ja tallenna jokainen diagnoosi hypoteesina ja luottamusarvona, ei tosiasiana.

**3.** Kiinnitä apuporras koodiin nimetyillä askelmilla ja tee käyttöliittymästä sellainen, että se veloittaa oppijalta jotain jokaisesta alaspäin otetusta askeleesta.

**4.** Perusta sisältö omiin aineistoihisi ja anna aritmetiikan, algebran ja koodin tarkistus deterministisille työkaluille, jotka eivät voi hallusinoida.

**5.** Testaa opetuksellisia epäonnistumisia kokonaisissa keskusteluissa: vastausten vuotaminen, mielistely, väärinkäsitysten vahvistaminen, opetuksellinen ajautuminen.

**6.** Mittaa poisvetovaiheella ja viivästetyllä testillä, älä tyytyväisyyspisteillä.

## Kirjoita tavoite väitteenä itsenäisestä suoriutumisesta

Kolme luetteloa, jotka kirjoitetaan ennen kuin kukaan valitsee mallia:

- Mitä oppijoiden pitäisi tietää tai osata jälkeenpäin.
- Minkä kognitiivisen työn heidän on tehtävä itse.
- Mitä ohjaaja saa tehdä heidän puolestaan.

[[intelligent-tutoring|Älykkään ohjauksen]] kirjallisuus tuo esiin, että vaikuttavuus riippuu [[pedagogy|pedagogisesta]] suunnittelusta eikä pelkästään mallin kyvykkyydestä, ja epäonnistuminen on helppo rakentaa vahingossa. Ohjaaja, joka on optimoitu saattamaan ongelma loppuun, murentaa pohjaa ohjaajalta, joka on optimoitu oppimaan ongelman ratkaisemista, ja läpäisee silti jokaisen kirjoittamasi toiminnallisen testin, koska molemmat tuottavat oikeat loppuvastaukset. Ero on siinä, mitä opiskelija teki kysymyksen ja vastauksen välissä.

Toisesta luettelosta kehitystiimit saavat konkretiaa. Ota osaamistunnus kuten ”derivaatan hallinta” äläkä anna sen tarkoittaa oikean derivaatan tuottamista. Pilko se seuraaviin: sen tunnistaminen, milloin derivaatta on sopiva, derivaatan tulkitseminen hetkellisenä muutosnopeutena, säännön valinta, menettelyn suorittaminen, valinnan perusteleminen, järkevyyden tarkistaminen ja soveltaminen tuntemattomaan ongelmaan. Jokainen näistä on erikseen lokiin kirjattava asia, ja jokainen edellyttää erilaista vastausta, kun se puuttuu. Tämä pilkkominen on myös puolustus [[correct-answer-trap-misconceptions|oikean vastauksen ansaa]] vastaan: siinä oppija päätyy oikeaan vastaukseen virheellisellä päättelyllä ja analytiikkasi kirjaa onnistumisen. [[correct-answer-trap-ai-tutor|Oikean vastauksen ansan tunnistaminen]] ja [[zhang-tutormoments-2026|Kun avusta on haittaa]] kuvaavat molemmat tuon epäonnistumisen versioita tuotannossa.

## Rakenna oppijamalli ennen keskustelua

Oppijamalli pitää sisällään kahdenlaista tilaa: käsitekohtaiset arviot (raja-arvo: kehittymässä, potenssisääntö: hallittu, tulon sääntö: kehittymässä, ketjusääntö: ei osoitettu) ja väärinkäsityshypoteesit sekä kunkin taustalla olevat todisteet ja luottamus. Pidä ne erillään. Käsitearvio ohjaa vaikeustason valintaa. Hypoteesi ohjaa seuraavaa kysymystä.

Varo päästämästä [[llm|LLM:ää]] tekemään diagnoosia yksin. [[benchmark|Vertailumittaukset]] osoittivat, että LLM-ohjaajat tunnistivat selvästi oikean päättelyn mutta hylkäsivät toisinaan päteviä vaihtoehtoja tai hyväksyivät virheellistä päättelyä. Malli, joka tunnistaa hyvän tapauksen ja lukee väärin monitulkintaisen, pettää juuri ne opiskelijat, jotka apua tarvitsevat. Merkityksellisillä aloilla toimivaksi osoittautuu **jäsennetty diagnoosi ja joustava LLM-keskustelu**, se järjestely, jonka [[yasir-llm-tutoring-agents-2026|Oikean vahvistaminen, muun ohittaminen]] kuvaa: oma tunnistimesi selvittää, mitä opiskelija todennäköisesti teki, ja malli kirjoittaa keskustelun tuon havainnon ympärille.

Anna diagnoosille selkeä järjestys, jota malli ei voi ohittaa: havaitse, varmista, vastaa. Malli saa ehdottaa [[misconceptions|väärinkäsitystä]] hypoteesina, mutta sen on varmistettava se opiskelijan todellista työtä tai kohdennettua kysymystä vasten ennen kuin ohjaaja vastaa siihen. Ilman tuota vaihetta järjestelmä keksii todisteet ja ohjaa sitten opiskelijaa virheestä, jota tämä ei tehnyt, mikä on sekä hyödytöntä että hieman loukkaavaa.

Lokiin kannattaa kirjata karkeassa hyödyllisyysjärjestyksessä: viimeisimmät yritykset välivaiheineen, osoitettu osaaminen käsitteittäin, avun hakemisen käyttäytyminen (joka on itsessään signaali luottamuksesta) ja itse raportoitu luottamus siltä osin kuin keräät sitä. Sovita vaikeustaso ja avun määrä tuon aineiston pohjalta ja kohtele oppijan viimeisintä kehotetta vain yhtenä syötteenä siihen. Yksittäinen kehote on huono arvio siitä, mitä opiskelija osaa, ja ohjaaja, joka reagoi siihen, heittelehtii.

## Kiinnitä apuporras ja pane käyttöliittymä veloittamaan siitä

Kirjoita askelmat muistiin ennen kuin kirjoitat kehotetta, sillä porras on tuotepäätös nimetyillä tiloilla eikä sävyasetus pysty ilmaisemaan sitä. Toimiva järjestys:

1. Itsenäinen yritys.
2. Metakognitiivinen kysymys siitä, mitä opiskelija on yrittänyt.
3. Käsitteellinen vihje.
4. Oleellisen säännön tunnistaminen.
5. Ongelman osan jäsentäminen.
6. Valmiiksi tehty välivaihe.
7. Valmiiksi tehty ratkaisu.
8. Opiskelija selittää ratkaisun.
9. Opiskelija ratkaisee vastaavan ongelman itsenäisesti.

Tuki hiipuu osaamisen kasvaessa, ja se on [[scaffolding|tukemisen]] keskeinen mekanismi. Valmiin ratkaisun näkeminen ei osoita hallintaa, joten jokainen istunto, joka yltää seitsemännelle askelmalle, on velkaa yhdeksännen ennen kuin se lasketaan valmiiksi.

Kausaalinen näyttö portaan rakentamisen puolesta tulee kenttäkokeesta, jossa vartioimaton GPT-käyttöliittymä paransi tuettua matematiikan suoriutumista ja heikensi myöhempää itsenäistä koesuoriutumista. Vihjeitä antava ohjaaja poisti tuon oppimisrangaistuksen pitkälti ([[generative-ai-guardrails-harm-learning|Suojaamaton generatiivinen tekoäly voi haitata oppimista]]). Rajoite on arkkitehtoninen. Sama malli tuotti erilaisella apukäyttäytymisellä vastakkaiset tulokset sillä mittarilla, jolla on merkitystä.

Suurempi satunnaistettu kenttäkoe, jossa oli yli 6 000 yläkouluikäistä opiskelijaa hallintaan perustuvalla harjoitusalustalla, näyttää, miltä porras näyttää lokeissa. Tekoälytukeen sijoitetut opiskelijat etenivät hitaammin ja yrittivät vähemmän tehtäviä, ja he vastasivat tarkemmin. Selkein mekanismi oli seuraavan yrityksen oikeellisuus virheen jälkeen: oikeaan vastaukseen palaamiseen tarvittiin vähemmän yrityksiä. Tuo kuvio on tuottava hidastuminen, ja se on se allekirjoitus, jonka vihjeportaan on tarkoitus jättää ([[making-ai-tutoring-productive-mastery-math-2026|Tekoälyohjauksesta tuottavaa hallintaa matematiikassa]]).

Sama tutkimus antaa varoituksen omista kojelautoistasi. Kolmen peräkkäisen oikean vastauksen vaatiminen nosti jyrkästi alustan määrittelemää hallintaa tuottamatta havaittavia hyötyjä viikon viivästetyssä testissä. Vahvin viivästetyn testin näyttö ilmeni vain siellä, missä tekoäly istui hallintatyönkulun sisällä (kerroin 0,085), ei siellä, missä se oli saatavilla erillisenä käyttönä. Jos menestysmittarisi on putkilaskuri, toimitat järjestelmän, joka optimoi putkea.

Käyttöliittymän kitka kuuluu samaan suunnittelukierrokseen. Rajattomat vihjeet näkyvän napin takana muuttavat koko portaan pikatieksi, ja ennenaikaiset vihjepyynnöt pinnallisen lukemisen kanssa liittyvät heikompiin [[learning-gains|oppimistuloksiin]]. Kun `[Vihje][Vihje][Vihje][Näytä vastaus]` korvataan kysymyksillä ”mitä olet jo yrittänyt?” ja ”mikä osa estää sinua?” (säännön valinta, yhtälön asettaminen, algebran laskeminen, käsitteen ymmärtäminen), se maksaa yhden näytön ja ohjaa opiskelijan askelmalle, jota hän todella tarvitsee. Se antaa sinulle myös lokitiedot siitä, minkä askelman he tottumuksesta ohittavat.

## Anna tarkistettavat osat tarkistajalle

Perusta tuotettu sisältö opettajan hyväksymään aineistoon: oppikirjan osiin, kurssimuistiinpanoihin, valmiisiin esimerkkeihin, terminologiaan, hyväksyttyihin menetelmiin, merkintätapaan, tehtäväsääntöihin, käytäntöihin ja [[curriculum-design|opetussuunnitelman]] resursseihin. Hakua hyödyntävä generointi tuota kokoelmaa vasten vähentää [[hallucination-risk|hallusinaatioriskiä]] muttei poista sitä, kuten [[rag]] esittää. Tuo viittaukset tai alkuperätiedot näkyviin käyttöliittymässä siellä, missä opiskelija voisi tarkistaa väitteen, sillä viittaus on se, mikä tekee perustamisesta jälkikäteen tarkistettavaa.

Perustamisella on myös tehtävä, jonka tarkkuusmittarit ohittavat. Kurssilla on hyväksytyt menetelmät, ja ohjaaja, joka esittelee matemaattisesti pätevän tekniikan, jota kurssilla ei käytetä, on opettanut opiskelijalle asian, josta häntä vähennetään pisteitä. Haku kurssikerroksesta pitää ohjaajan menetelmäjoukon sisällä.

Aloilla, joilla vastaukset ovat formaalisti tarkistettavissa, lisää deterministiset työkalut: laskimet, symbolisen matematiikan järjestelmät, koodin suoritus, tietämysgraafit, sääntöpohjaiset validaattorit ja [[discipline-specific-aied|alaan erikoistuneet]] ratkaisijat. Työnjako on tässä se tärkeä osa. LLM huolehtii selittämisestä ja keskustelusta. Symbolinen moottori varmentaa algebrallisen yhtäpitävyyden, derivaatat, integraalit, yhtälöiden ratkaisut, kriittiset pisteet ja numeeriset approksimaatiot. Väärä välivaihe, jonka varmentaja nappaa, muuttuu ohjaushetkeksi. Väärä välivaihe, jota mikään ei nappaa, muuttuu väärinkäsitykseksi, jonka opiskelija kantaa kokeeseen.

## Vaadi oppijaa toimimaan palautteen pohjalta

Palaute, joka sanoo ”oikein”, ”väärin” tai ”hyvää työtä”, on pisteytystapahtuma opetuksen käyttöliittymään puettuna. Tietopohja käsittelee [[feedback|palautetta]] tarjonnan ja vastaanoton kehänä: palaute tukee oppimista, kun opiskelijat ymmärtävät sen ja toimivat sen pohjalta, ja jälkimmäinen puolisko on se, jonka järjestelmät tavallisesti ohittavat. Rakenna ohjaaja nimeämään kyseinen päättelyvaihe, sanomaan, mikä vaatii uudelleenharkintaa, antamaan yksi konkreettinen seuraava toimi ja pyytämään oppijaa ennustamaan tai selittämään ennen kuin palaute paljastetaan.

Tämän välittävä järjestys on oppija ensin, tekoäly toisena, oppija jälleen. Opiskelija tuottaa, valitsee, perustelee, arvioi tai reflektoi; ohjaaja vastaa; opiskelija tekee vastauksella jotain. Suunnittele vuororakenne niin, ettei tämä ole vapaaehtoista. Järjestelmä, jossa malli voi tuottaa kolme kappaletta yhteen kysymykseen vastaukseksi, opettaa opiskelijan kysymään ja lukemaan.

Pitkän aikavälin tavoite on sisäistäminen. Oppijoiden pitäisi lopulta pyörittää ohjaajan kyselyä ja [[problem-solving|ongelmanratkaisun]] strategioita itse, mikä on [[agency|toimijuuden]] argumentti ja syy siihen, että portaassa on ylin askelma, jolla ohjaaja on vaiti.

## Suunnittele, mitä neljännessäkymmenennessä vuorossa tapahtuu

Pedagoginen turvallisuus on eri testisarja kuin tavallinen chatbotin turvallisuus, ja useimmat tiimit toimittavat vain jälkimmäisen. Toksisuus ja jailbreak-kestävyys eivät kerro mitään siitä, ojentaisiko ohjaaja vastauksen opiskelijalle, joka kysyy kahdesti, yhtyykö se väärään menetelmään siksi, että opiskelija kuulosti varmalta, ajautuuko se pitkän istunnon aikana kurssin menetelmäjoukon ulkopuolelle vai työntääkö se oppijan [[cognitive-offloading|kognitiiviseen siirtokuormitukseen]]. [[ai-sycophancy|Mielistely]] on se, joka pääsee ensimmäisenä läpi, koska myötäily tulkitaan ystävällisyydeksi ja preferenssidatasi palkitsee siitä.

Testaa vastausten vuotamista, väärinkäsitysten vahvistamista, liiallista myötäilyä, sopimatonta vaikeustasoa, siirtokuormitusta, vinoutunutta kohtelua, oppijan toimijuuden menetystä, opetuksellista ajautumista ja liiallista varmuutta virheellisissä selityksissä. Aja testit pitkillä keskusteluilla, älä yksittäisillä vuoroilla, sillä pedagogiset epäonnistumiset kertyvät: kymmenen ensimmäistä vuoroa voivat olla esimerkillisiä ja yhdestoista voi kumota koko istunnon. Ohjaajan pitää olla samaan aikaan ystävällinen ja oikeassa, myös silloin kun oppija pitää kiinni väärinkäsityksestään. [[pedagogical-safety]] ja [[hazra-safetutors-pedagogical-safety-2026|Tekoälyohjaajan turvallisuus ja pedagogiset haitat]] esittävät epäonnistumisten luokittelun.

## Laita datan arkkitehtuuri samaan suunnitteludokumenttiin

Kerää vain sellaista oppijadataa, joka on pedagogisesti välttämätöntä, ja pysty sanomaan, miksi kukin kenttä on olemassa. Kun pidät pysyvää muistia tai [[student-modeling|oppijamallia]], tee sen tarkoitus oppijalle näkyväksi, anna hänelle siihen sopiva määräysvalta, suojaa arkaluonteiset tiedot, määrittele säilytysaika ja ohjaa merkitykselliset päätökset opettajalle tai muulle [[human-in-the-loop-ai|ihmisen tarkistuspisteelle]]. Oppijamalli, joka hiljaa kerää luottamusarvion, jota opiskelija ei koskaan näe, on sekä tietosuojaongelma että pedagoginen ongelma.

Auditoi käyttäytymistä kielitaustojen, kyvykkyystasojen, kulttuurikontekstien, [[accessibility|saavutettavuustarpeiden]] sekä [[prior-knowledge|aikaisemman tiedon]] ja tekoälykokemuksen määrien yli. Erot suoriutumisessa samassa tavoitteessa ovat bugeja, joihin on kiinnitetty opiskelija, eivätkä ne näy kokonaistarkkuusluvussasi.

Yksi saavutettavuuspäätös ansaitsee oman rivinsä: älä tee kehittyneestä [[prompt-engineering|kehotemuotoilusta]] hyvän opetuksen edellytystä. Jos ohjaaja opettaa hyvin vain silloin, kun opiskelija kirjoittaa huolellisen kehotteen, olet rakentanut järjestelmän, joka suosii opiskelijoita, jotka jo osaavat puhua malleille. Ohjaajan pitäisi auttaa oppijoita muotoilemaan tuottavia kysymyksiä, mikä on myös [[metacognition|metakognitio]]taito, joka kannattaa omata.

## Instrumentoi poisvetoväli

Istuntomittarit eivät kerro, toimiiko asia. Vastaustarkkuus, keskustelun pituus, opiskelijoiden mieltymykset, tyytyväisyys, tehtävien valmiiksi saaminen ja [[student-engagement|sitoutuminen]] nousevat kaikki järjestelmissä, jotka eivät opeta mitään, koska opiskelijat pitävät avusta ja apua on helppo mitata. Arvioi itsenäistä suoriutumista, viivästettyä muistamista, siirtoa uusiin ongelmiin, väärinkäsitysten korjaamista, oppijan riippumattomuutta, palautteen vastaanottoa ja [[differential-effects-across-learner-groups|eriäviä vaikutuksia oppijaryhmien välillä]]. [[ai-ed-evaluation|Tekoälyn opetuskäytön arvioinnista]] löytyvät menetelmät, ja [[ai-tutor-behavioral-evaluation|Puuttuva arviointiakseli]] esittää, että käyttäytyminen on se konstrukti.

Kaksi tutkimusta terävöittää sääntöä [[self-report-measures|itse raportoituja mittareita]] ja lyhyitä aikajänteitä vastaan. Pilottitutkimus, jossa oli 38 aloittelijaa ohjelmoinnin opiskelijaa, löysi vahvan yhteyden [[generative-ai|generatiivisen tekoälyn]] käytön ja *koetun* oppimisen välillä (rs=0,802, p<0,001), kun taas itsenäisen edistymisen indikaattorit ilman opettajan tukea saivat alimmat pisteet. Kirjoittajat nimeävät eron pätevyyden illuusioksi ja episteemiseksi velaksi, ja se on juuri se ero, jota tyytyväisyysmittari palkitsee ([[genai-cognitive-tutor-programming-2026|Generatiivinen tekoäly epämuodollisena kognitiivisena ohjaajana]]).

Perustavammin: suurin osa arvioinnista pysähtyy hetkeen, jolloin tuki päättyy. [[cognitive-washout-ai-skill-decay-2026|Kognitiivisen huuhtoutumisen dynamiikka]] nimeää mittaamattoman tuen jälkeisen välin ja muotoilee neljä lopputulemaa: elastinen palautuminen, osittainen tasanne, piilevä tuki ja ylipalaaminen. Sen huuhtoutumiskäyrä kantaa palautumisen aikavakion, palautumisen täydellisyystermin ja hystereesi-indeksin, joka vertaa uudelleenoppimisen vaivaa alkuperäiseen vaivaan. Koska palautuvuus määrää vakavuuden, kehys esittää, että aikataulutettu itsenäinen harjoittelu pitäisi annostella palautumiskäyrän mukaan sen sijaan, että siitä kiisteltäisiin periaatekysymyksenä. Arviointisuunnitelmasi tarvitsee poisvetovaiheen ja välittömän jälkitestin, ja [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|satunnaistettu näyttö siitä, että lyhyt tuki painaa myöhempää itsenäistä suoriutumista]] on syy ajoittaa se aikaisin.

## Anna opettajille jotain muokattavaa

Ennen käyttöönottoa anna kouluttajien testata realistisia oppijaprofiileja, tavallisia väärinkäsityksiä, reunatapauksia, vihamielisiä kehotteita, monitulkintaisia vastauksia ja pitkiä ohjauskeskusteluja. Kirjaa pedagogiset epäonnistumiset ja syötä ne takaisin järjestelmäkehotuksiin, ohjausperiaatteisiin, tietolähteisiin, [[guardrails|suojakaiteisiin]], oppijamallin sääntöihin ja mallin valintaan. Sujuva vastaus voi silti olla pedagogisesti väärä, ja opettaja on ainoa arvioija, joka sen näkee.

[[teacher-intervention-k12-ai-based-instruction-2026|Leen systemaattinen katsaus 29 perusopetuksen tutkimuksesta]] kuvaa, mistä tuo valvonta koostuu ja mihin se hajoaa. [[teacher-role|Opettajan]] väliintulo on toistuva nelivaiheinen kehä: seuranta, harkinta, väliintulo ja orkestrointi. Tekoälyhälytykset, [[visualization|kojelaudat]] ja automatisoidut pisteet ”eivät automaattisesti johda pedagogiseen toimintaan”. Vahvin katsauksessa löytynyt opettajastrategia on pedagoginen käännös: chatbotin palautteen valitseminen, muokkaaminen, täydentäminen, tiivistäminen tai poistaminen sen sijaan, että se välitettäisiin sellaisenaan.

Tästä seuraa kaksi suunnitteluvaroitusta, ja molemmat ovat ristiriidassa tavallisen tiekartan kanssa. Enemmän tekoälytietoa ei ole parempi: järjestelmät, jotka tuottavat diagnostiikkaa jatkuvasti, ylikuormittivat opettajat ja veivät huomiota heidän omalta havainnoinniltaan. Aseta etusijalle se, mihin kannattaa reagoida, tee siitä tulkittavaa ja tarjoa suositukset muodossa, jonka opettaja voi hyväksyä, muokata, lykätä tai hylätä. Myöskään enemmän opettajan tukea ei ole parempi: väliintulon lykkääminen, jotta opiskelijat voivat työskennellä itsenäisesti, on itsessään asiantuntemusta. Rakenteelliset olosuhteet eli aika datan läpikäymiseen, luokan koko ja mahdollisuus fyysisesti päästä apua tarvitsevien ryhmien luo ovat osa väliintuloa eivätkä taustalogistiikkaa. Kojelautaa, joka on rakennettu opettajalle, jolla ei ole yhtään vapaata tuntia, ei avata.

## Tapaus yksi: differentiaali- ja integraalilaskennan ohjaaja, jossa varmentaminen on halpaa

Ensimmäisen lukukauden korkeakoulun differentiaali- ja integraalilaskennan ohjaajan pitäisi nostaa sitä, mitä opiskelijat osaavat ratkaista ja selittää itsenäisesti sen jälkeen, kun se on poistettu, eikä maksimoida oikein saatuja tehtäviä. Matematiikan ohjaus on erityisen altis liialliselle tukemiselle, ennenaikaiselle vihjeiden käytölle ja opiskelijan päättelyn virheelliselle diagnosoinnille, ja kaikki kolme näkyvät lokeistasi, jos katsot ([[math-education]]).

**Perustaminen ja varmentaminen.** Kuusikerroksinen rakenne: kurssimateriaalit ja opettajan käytännöt, sitten hakukerros, sitten tehtävämoottori ja oppijamalli symbolisen varmentajan ja diagnoosimoottorin rinnalla, sitten pedagoginen periaatekerros, sitten keskusteluntuotto, sitten opiskelija ja lopuksi takaisin oppijamalliin. Varmentaja on syy siihen, että tämä rakenne on toteutettavissa. Se ratkaisee, ovatko lausekkeet yhtäpitäviä, onko derivaatta oikein, onko integraali laskettu, onko kriittinen piste löytynyt, eikä se kysy mallin mielipidettä.

**Yksi vuorovaikutus.** Lausekkeen $f(x)=(x^2+1)\sin x$ derivoinnissa tavanomainen chatbot paljastaa vastauksen. Oppimiseen suuntautunut ohjaaja päättelee sisäisesti, että opiskelija derivoi molemmat komponentit mutta kertoi tulokset, mikä on mahdollinen tulon sääntöön liittyvä [[misconceptions|väärinkäsitys]] muodossa $f'g'$, ja kysyy ensin diagnoosikysymyksen: mitä sääntöä sovelletaan, kun kaksi funktiota kerrotaan? Sitten opiskelija kirjoittaa tulon säännön symbolein, asettaa $u$ ja $v$, ja vasta sen jälkeen ohjaaja varmentaa lopullisen lausekkeen. Huomaa, kuinka suuri osa ohjauksesta tapahtui ennen kuin yksikään mallin tekstinpätkä tavoitti opiskelijan.

**Useat esitysmuodot.** Yhdistä symboliset menettelyt kaavaan, kuvaajaan, taulukkoon, sanalliseen tulkintaan ja fysikaaliseen muutosnopeuden kontekstiin. Menettelyn sujuvuus ja käsitteellinen ymmärrys näyttävät samalta oikeassa vastauspaperissa ja eroavat siirtotehtävässä.

**Kojelauta.** Näytä koottua näyttöä läpinäkymättömien arvioiden sijaan: ”tulon sääntö, 62 % osoittanut hallinnan; tavalliset kuviot, 18 % jättää yhden termin pois, 11 % kertoo derivaatat”. Yksittäiset diagnoosit lähtevät liikkeelle hypoteeseina ja niiden tukena oleva näyttö, mikä on myös se, mikä tekee niistä opettajan tarkistettavissa ([[explainable-ai|selitettävyys]] on tässä opettajalle tärkeämpää kuin opiskelijalle).

**Arviointisuunnitelma.** Suoriutuminen ohjaajan kanssa, suoriutuminen vastaavissa ongelmissa ilman sitä, viivästetty muistaminen, siirto tuntemattomiin ongelmiin, käsitteellisen selityksen laatu, väärinkäsitysten korjautuminen, asianmukainen vastaan ennenaikainen [[help-seeking|avun hakeminen]], vastausten vuotaminen, diagnoosin väärien positiivisten ja väärien negatiivisten osuudet sekä eriävät lopputulemat. Projektin ratkaiseva vertailu on tuettu suoriutuminen myöhempää itsenäistä vastaan. Opiskelijaa, joka nousee ohjaajan kanssa 60 %:sta 95 %:iin ja pysyy yksin 60 %:ssa, ei ole ohjattu.

## Tapaus kaksi: kirjoittamisen valmentaja, jossa vaihe määrää luvan

Kirjoittamisessa ei ole yhtä oikeaa vastausta, joten varmentaminen on harkintaa ja suunnittelutyö siirtyy vaiheistukseen. Tietopohja kehystää kirjoittamisen kognitiivisena, sosiaalisena ja retorisena prosessina, mikä tarkoittaa, että tekoälypohjainen kirjoitusjärjestelmä voi tukea oppimista ja voi myös poistaa juuri sen ajattelun, jonka kehittämistä varten tehtävä oli olemassa ([[writing-education]], [[coach-not-crutch-ai-writing]]).

**Osaamismalli.** Seuraa argumenttia (väitteen täsmällisyys, väitteen ja näytön yhteensopivuus, vasta-argumentti), jäsennystä (kappaleen painopiste, looginen eteneminen, siirtymät), näyttöä (lähteen osuvuus, integrointi, tulkinta), muokkausta (kokonaisuuden ja virketason muokkaus, palautteen arviointi) ja tyyliä (selkeys, kielioppi, oma ääni). Jokaisesta tulee erillinen signaali oppijamalliin, ja juuri se tekee kohdennetusta palautteesta ylipäätään mahdollista.

**Perusta valmentaja tehtävänantoon.** Hae ohjeet, opettajan arviointikriteeristö, kurssin luettavat, viittausvaatimukset, lajityyppien käytännöt, opettajan esimerkit ja tekoälyn käytön käytännöt, jotta palaute voi sanoa ”opettajasi kriteeristö edellyttää sinua yhdistämään jokaisen pääväitteen näyttöön vähintään kahdesta kurssin luettavasta” sen sijaan, että se keksisi yleisiä odotuksia. Yleinen neuvo on perustamattoman kirjoitustyökalun oletusarvoinen epäonnistuminen, ja opiskelijat huomaavat sen kahden istunnon kuluessa.

**Aseta luvat vaiheittain.** Tekoälyn osallisuus eri vaiheissa vaikuttaa koettuun omistajuuteen eri tavoin. Suunnittelun tuki vähentää omistajuutta vähemmän kuin luonnostelun tuki, ja tekoälyn tuottama luonnos aiheuttaa suurimman laskun ([[ai-writing-support-stage-ownership-2026|Suunnittelusta muokkaukseen]]). Tuo havainto muuntuu suoraan lupataulukoksi. Suunnittelussa valmentaja kysyy kysymyksiä, vertaa kantoja, haastaa oletuksia ja arvostelee jäsennyksiä eikä tuota argumenttia. Luonnostelussa oppija tuottaa tekstin ensin ja valmentaja kehittää sitä sen sijaan, että ottaisi sen haltuunsa. Muokkauksessa valmentaja diagnosoi ja pysähtyy siihen: epäselvät väitteet, puuttuva näyttö, näyttö joka ei tue väitettä, jäsennyksen ongelmat, luonnos kriteeristöä vasten. Oikoluvussa, muokkauksen jälkeen, se huolehtii kieliopista, välimerkeistä, tiiviydestä ja viittausten muotoilusta.

**Esimerkkivuorovaikutus.** Esseen aiheesta, pitäisikö [[online-teaching-and-learning|verkkokurssit]] tehdä pakollisiksi, yleinen järjestelmä kirjoittaa opiskelijan kappaleen uudelleen kiillotetuksi tekstiksi ja tekee älyllisen työn. Valmentaja sanoo, mikä toimii, nimeää pääongelman (kappale antaa syitä mutta ei koskaan selitä, miksi ne oikeuttavat koko yliopiston laajuisen velvoitteen), esittää muokkauskysymyksen ja pyytää opiskelijaa täydentämään lauseen omin sanoin. Argumentti pysyy siellä, minne se kuuluu.

**Priorisoitu palaute.** Yksi vahvuus, joka kannattaa säilyttää, yksi vaikuttava ongelma, yksi kysymys joka vaatii kirjoittajan harkintaa, yksi konkreettinen muokkaustavoite. Ei neljääkymmentä kommenttia. Opiskelija, joka saa neljäkymmentä kommenttia, lajittelee ne pituuden mukaan, eikä lajittelulla ole mitään tekemistä sen kanssa, mikä on tärkeää.

**Pane opiskelija arvioimaan palaute.** [[feedback-literacy|Palautelukutaito]] on oppimistavoite itsessään. Kysy säännöllisesti, onko oppija ehdotuksesta samaa mieltä ja miksi, ja anna hänen hylätä se. Tuloksena on [[evaluative-judgment|arvioiva harkinta]] eikä mukautuminen, ja se on myös ainoa puolustus valmentajaa vastaan, joka on varmasti väärässä.

**Säilytä oma ääni.** Erottele virheet, selkeyden ongelmat, retoriset valinnat ja tyylimieltymykset toisistaan ja jätä kaksi viimeistä rauhaan. Valmentaja, joka ”korjaa” retorisia valintoja, yhdenmukaistaa kirjoittamisen kohti sitä tyyliä, jota malli suosii, ja se tekee eniten vahinkoa [[multilingual-learning|monikielisille]] kirjoittajille ja epätyypillisille retorisille perinteille ([[ai-feedback-quality|Tekoälypalautteen laatu]] on tämän ongelman yleinen versio).

**Opi muokkauksista.** Tallenna muokkaushistoria sen sijaan, että tallennat vain lopulliset esseet. Toistuva kuvio ”näyttöä esitetään mutta ei tulkita”, joka paranee kolmen esseen aikana, on hyödyllisin signaali, joka kirjoitusjärjestelmällä voi olla, ja se on ilmainen.

**Arviointi.** Tekoälyn tukeman ja myöhemmän itsenäisen kirjoittamisen laatu, kyky löytää heikkouksia tuntemattomasta tekstistä, muokkauksen laatu, palautteen vastaanotto, kyky selittää muokkaukset, omistajuus, riippuvuus tekoälytekstistä, oman äänen säilyminen, vinoumat murteiden ja monikielisten kirjoittajien välillä, yhdenmukaisuus opettajan harkinnan kanssa ja viivästetty siirto. Sen ratkaisevassa asetelmassa on kolme haaraa: itsenäinen kirjoittaminen, tekoäly joka tuottaa tekstin, ja valmentaja. Kaikki kolme ryhmää kirjoittavat sen jälkeen uuden esseen ilman tekoälyä. Jos tekoälyn tuottama ryhmä voittaa käytännössä ja häviää ilman sitä, järjestelmä paransi suoriutumista eikä oppimista. Kojelaudan luokkatason kuviot (41 % tarvitsee tukea väitteen ja näytön yhdistämisessä) ovat opettajalle [[formative-assessment|formatiivisen arvioinnin]] signaali.

## Kahden rakenteen vertailu

| Suunnittelukysymys | Differentiaali- ja integraalilaskennan ohjaaja | Kirjoittamisen valmentaja |
|---|---|---|
| Ensisijainen oppimisen kohde | Matemaattiset käsitteet ja ongelmanratkaisu | Argumentointi ja kirjoitusprosessi |
| Varmentaminen | Usein objektiivisesti tarkistettavissa | Vaatii yleensä kontekstuaalista harkintaa |
| Deterministiset työkalut | Symbolisen matematiikan moottori, laskin | Kielioppi-, viittaus- ja kriteeristötarkistukset |
| Tekoälyn päärooli | Diagnosoi ja tukee päättelyä | Diagnosoi ja tukee muokkausta |
| Suurin riski | Ratkaisun antaminen valmiina | Tekstin kirjoittaminen oppijan puolesta |
| Merkitsevä oppijan toiminta | Ratkaista ja selittää | Luonnostella, arvioida ja muokata |
| Oppijamalli | Käsitteet, menettelyt, väärinkäsitykset | Argumentti, näyttö, jäsennys, muokkaus |
| Keskeinen suojakaide | Yritys ennen ratkaisua | Opiskelijan teksti ennen tekoälyn uudelleenkirjoitusta |
| Siirtotesti | Uudet laskutehtävät ilman tekoälyä | Uusi kirjoitustehtävä ilman tekoälyä |
| Onnistumisen kriteeri | Itsenäinen matemaattinen päättely | Itsenäinen kirjoittaminen ja arvioiva harkinta |

Molemmat järjestelmät käyttävät samaa [[ai-technologies|tekoälyteknologioiden]] joukkoa ja ilmentävät erilaisia pedagogisia periaatteita, koska alat vaativat erilaista ajattelua. Yleistyvä sääntö on tunnistaa kognitiivinen toiminta, joka tuottaa oppimisen, ja suunnitella tekoäly tukemaan sitä toimintaa suorittamatta sitä. Se sääntö menee minkä tahansa tietyn mallin, kehotteen, agenttikehyksen tai käyttöliittymän edelle.

## Missä kehitystiimit menevät vikaan

Pedagogiikka asuu järjestelmäkehotuksessa, joten huolellinen kehotus on pedagoginen suunnittelu. Kehotus on yksi periaatteen kerros, johon kuuluu myös se, mitä näyttöä keräät, mitä askelmaa käyttöliittymä tarjoaa, mitä varmentaja tarkistaa ja mitä kojelauta näyttää. Hyvin kirjoitettu kehotus sellaisen oppijamallin päällä, joka ei tallenna mitään, tuottaa sujuvan ohjaajan, jolla ei ole muistia opiskelijasta, ja porras alkaa alusta joka istunnossa.

Parempi malli korjaa diagnoosin. Edellä mainittu vertailumittaus osoitti LLM-ohjaajien tunnistavan oikean päättelyn mutta hylkäävän päteviä vaihtoehtoja ja hyväksyvän virheellisiä, mikä on virhekuvio, jota skaala ei ilmeisesti korjaa. Jäsennetty diagnoosi on olemassa siksi, että mallin harkinta on se osa, jota et voi auditoida.

Tyytyväisyys ja valmistuminen todistavat, että suunnittelu toimii. Ne todistavat, että opiskelijat saivat apua. Pilotti 38 ohjelmoinnin opiskelijan kanssa osoitti koetun oppimisen olevan vahvasti yhteydessä käyttöön, kun itsenäinen edistyminen sai alimmat pisteet, ja hallintatutkimus osoitti putkivaatimuksen nostavan alustan hallintaa ilman viivästetyn testin hyötyä. Rakenna poisvetomittari pilottiin, tai opit väärän opetuksen tehokkaasti.

Haku tekee vastauksista luotettavia. Se vähentää [[hallucination-risk|hallusinaatioriskiä]] ja jättää muun epäonnistumispinnan ennalleen: haettu kohta voidaan lukea väärin, pätevä tekniikka voi olla väärä kurssille, ja malli voi silti olla varmasti väärässä itse johtamastaan vaiheesta. Haku on lattia.

Turvasarjan läpäiseminen tarkoittaa, että se on opiskelijoille turvallinen. Tavallinen turvatestaus kattaa toksisuuden ja jailbreakit. Tässä merkitykselliset pedagogiset epäonnistumiset, vastausten vuotaminen ja mielistely ja ajautuminen, ovat sille näkymättömiä, ja ne kertyvät keskustelun aikana sen sijaan, että ilmestyisivät yksittäisessä vuorossa.

Sitoutuminen on tavoite. Keskustelun pituus ja istuntojen määrä ovat halvimmat instrumentoitavat mittarit, ja siksi ne ylennetään tavoitteiksi. [[scaffolding|Tukemisen]] argumentti sanoo, että ihanteellinen istunto lyhenee opiskelijan parantuessa, joten sitoutumisen nousu on yhtä todennäköisesti oire.

## Mitä sinulle tullaan sanomaan takaisin

**”Toimitamme kuudessa viikossa ja tämä on neljänneksen työ.”** Suurin osa arkkitehtuurista on halpaa. Yritysportti, konfiguroitu porras, haku jo olemassa olevista muistiinpanoistasi ja lokiskeema, jossa on poisvetokenttä, ovat päivien työ. Kalliit osat (oppijamalli, varmentaja, kojelauta) voivat alkaa ominaisuuslipun takaa yhdellä kurssilla, ja pilotti on informatiivisempi, kun halvat osat on tehty.

**”Opiskelijat rakastavat sitä ja valmistuminen on noussut.”** Molemmat tosiasiat sopivat yhteen järjestelmän kanssa, joka vastaa kysymyksiin hyvin eikä opeta mitään. 6 000 opiskelijan tutkimus löysi hitaamman edistymisen ja vähemmän yritettyjä tehtäviä paremman tarkkuuden ohella, joten valmistumisen lasku ei sekään ole automaattisesti huono uutinen. Raportoi itsenäinen suoriutuminen sitoutumislukujen vieressä ja anna kahden olla julkisesti eri mieltä.

**”Emme voi tehdä satunnaistettua koetta.”** Voit tehdä opiskelijan sisäisen vertailun ilman sitä: sama tavoite, tuettuna jakson aikana, testattuna itsenäisesti kaksi viikkoa myöhemmin, ja tuettu pistemäärä raportoidaan sen vieressä. Se asetelma vastaa tuotekysymykseen eikä vaadi kontrollihaaraa. Sitä se ei kerro, mitä niille opiskelijoille olisi tapahtunut, jotka eivät koskaan käyttäneet ohjaajaa.

**”Malli on toimittajan API, joten apukäyttäytyminen ei ole käsissämme.”** Askelmat asuvat orkestrointikerroksessasi, ja suojakaidekokeen tulos syntyi muuttamalla sitä, mitä ohjaajan oli lupa sanoa, ei vaihtamalla mallia. Odota, että toimittajan jälkikoulutus vetää kohti nopeaa vastaamista, koska avuliaisuus on se, mihin se viritettiin, ja pane pidättyväisyys omaan koodiisi.

**”Opettajat eivät ota käyttöön yhtä kojelautaa lisää.”** He eivät ota käyttöön sellaista, joka tuottaa jatkuvaa diagnostiikkaa, jonka perusopetuksen katsaus havaitsi vievän huomiota heidän omalta havainnoinniltaan. Anna heille pieni määrä tulkittavia signaaleja, tapa hyväksyä tai hylätä kukin suositus ja aikaa viikossa niiden katsomiseen.

**”Meillä ei ole henkilöstössä alan asiantuntijoita.”** Silloin ohjaaja opettaa yleistä menetelmää ja kurssin merkintätapa ajautuu lukukauden aikana. Oppiaineen asiantuntija kahdeksi päiväksi suunnitteluvaiheessa, kirjoittamaan väärinkäsityslista ja hyväksyttyjen menetelmien lista, on projektin halvin erä ja se, jonka tiimit leikkaavat ensimmäisenä.

## Mitä tehdä tällä viikolla

**1.** Kirjoita itsenäisen suoriutumisen lause pilottia varten ja laita se määrittelyyn ominaisuusluettelon yläpuolelle.

**2.** Lisää yritysportti ja kirjaa se lokiin. Tallenna, yrittikö opiskelija ennen ensimmäistä vihjettä ja mille askelmalle hän ylsi.

**3.** Korvaa vihjenappi estokohdan kysymyksellä ja kirjaa vastaus kategoriana.

**4.** Ajoita yksi itsenäinen tarkistus kaksi viikkoa jakson jälkeen ja laita se kalenteriin vastuuhenkilön kanssa.

**5.** Varaa kaksi päivää oppiaineen opettajan kanssa väärinkäsityslistan ja hyväksyttyjen menetelmien listan kirjoittamiseen.

## Minne seuraavaksi

[[designing-educational-ai-software]] kattaa ohjelmistotason säännöt, jotka ohjaajan on täytettävä, ja [[designing-ai-into-learning]] kattaa sen, mihin kohtaan kurssijaksoa ohjaaja sijoittuu. [[evaluating-ai-interventions-methods]] ja [[checking-whether-educational-ai-works]] käsittelevät sitä, toimiiko asia. Jos ongelmasi on, että malli vastaa liian herkästi, [[making-ai-better-at-supporting-learning]] ja [[training-ai-tutors-to-guide-rather-than-answer]] käyvät läpi saman kysymyksen koulutuspuolta.
