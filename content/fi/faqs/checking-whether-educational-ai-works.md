---
title: "Mistä tiedämme, että koulutustekoäly toimii oikein eikä vain saa hyviä pisteitä?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
weight: 73
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/checking-whether-educational-ai-works
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Toimittajan arviointiraportti saapuu, ja ylhäällä on yksi luku: yksimielisyys ihmisarvostelijoiden kanssa, 0,84. Tai pilottisi päättyy perjantaina ja näyttö koostuu tyytyväisyyskyselystä sekä mallin julkaisutiedoista kopioidusta vertailuanalyysirivistä. Kokouksessa joku kysyy, toimiiko järjestelmä, ja sinulla on luku, joka kuulostaa vastaukselta.

Lyhyt vastaus: useimmin näkemäsi pistemäärät mittaavat samankaltaisuutta, ja samankaltaisuus on heikompi väite kuin ”tämä opettaa” tai edes ”tämä palaute on luettavaa”. Päätä, mitä kukin luku saa todistaa, pisteytä jokainen järjestelmäsi tuottama tuotos erikseen ja muuta tarkkuus säännöksi, jossa on kynnysarvo, ihminen ja säästö. Luku, jonka pohjalta kukaan ei voi toimia, ei ole näyttöä.

## Lyhyt versio

**1.** Kirjoita yksi lause, joka nimeää sen, mistä välität, ja valitse sitten mittari, joka lukee sitä asiaa. Sanojen päällekkäisyys ei kerro, onko päättely oikein.

**2.** Arvioi jokainen tuotos erikseen. Vahva arvostelupistemäärä ei kerro mitään sen vieressä olevasta palautemoduulista.

**3.** Anna ihmisen arvioida noin viisikymmentä tuotosta ja vertaa näitä arvioita automaattiseen tarkistimeesi. Siellä missä ne ovat eri mieltä, testattavana on tarkistin.

**4.** Korvaa ”tarkkuus 0,84” säännöllä: tämän luottamuksen alapuolella ihminen lukee vastauksen. Raportoi kynnysarvo, säästetty työn osuus ja se, mitä yksimielisyydestä tuli.

**5.** Testaa turvallisuutta kokonaisten keskustelujen yli ja tarkista jokainen simuloitu opiskelija ennen kuin luotat siihen, mitä se sanoo ohjaajastasi.

## Päätä, mitä luku saa todistaa

Kaksi lukuperhettä hallitsee tätä kirjallisuutta. Molemmat mittaavat, miten lähellä tuotoksesi on jotain muuta, ja se on heikompi väite kuin oikeellisuus.

**Samankaltaisuuspisteet** (ROUGE ja BLEU) vertaavat järjestelmäsi vastauksen sanamuotoa viitevastauksen sanamuotoon. Malli, joka kirjoittaa jotain lähelle odotettua tekstiä, saa hyvät pisteet, vaikka sen päättely olisi väärin tai vaikka opiskelija voisi päätyä oikeaan vastaukseen reittiä, joka ei opeta mitään.

**Yksimielisyyspisteet** (QWK, neliöllisesti painotettu kappa) mittaavat, miten lähelle mallin antamat arvosanat osuvat ihmisen antamia. Malli voi osua arvostelijan kanssa loppuarvosanassa ja olla silti väärässä siinä, miksi, ja juuri miksi on se osa, josta opiskelija oppii.

Opiskelija voi päätyä väärään vastaukseen väärää reittiä, joka näyttää oikealta, eikä mikään samankaltaisuuspiste huomaa sitä. Jos päättely on se, mistä välität, mittarin on luettava sitä: ihmisen soveltama arviointikriteeristö tai juuri sille vaiheelle kirjoitettu tarkistus.

Linear Control Systems -kurssin avustaja raportoi tämän oikein. Sen paras konfiguraatio ylsi viitevastauksia vastaan samankaltaisuuspisteeseen **0,4093**, ja parannus mitattiin luotettavasti nollan yläpuolelle, ja kirjoittajat sanovat suoraan, että luvut mittaavat sanamuotoa ja muotoa ([[lora-finetuned-control-systems-course-qa-2026|Lora-hienosäädetty kurssikysymysvastaaja]]). Pistemäärä ei ole vaikuttava ja artikkeli on silti hyödyllinen, koska se kertoo, mitä pistemäärä kattaa.

## Pisteytä jokainen tuotos erikseen

WrAFT-hankkeessa hienosäädetty malli ylsi **0,84**:n yksimielisyyspisteeseen ihmisarvostelijoiden kanssa 360 pidätetyssä TOEFL-esseessä. Se on vahva tulos arvostelulle. Saman hankkeen palautteen kirjoittamiseen koulutettu malli tuotti tuotosta, joka oli katkaistua ja jäsentämätöntä, kun taas toisen mallin pelkkä kehottaminen tuotti palautetta, jota opettajat pitivät parempana ([[wraft-automated-writing-evaluation-argumentative-2026|WrAFT-arviointi argumentoivalle kirjoittamiselle]]).

Tietopohja tuntee saman epäonnistumisen toisessa muodossa: käyttöönotto, jonka arvostelumoduuli sai hyvät pisteet ja jonka palaute saapui kesken lauseen katkaistuna ja lukukelvottomana. Mikään otsikkoluvussa ei kertonut sitä.

Listaa siis järjestelmäsi tuottamat tuotokset ja anna jokaiselle oma mittari ja oma läpäisyehto. Arvostelu, palauteteksti, vihjeen valinta ja turvallisuuskieltäytymiset epäonnistuvat eri tavoin, eikä moduulitason pistemäärä näe oman moduulinsa taakse.

## Laita ihminen sinne, missä malli on epävarma

Korrelaatio kertoo, että malli on yleensä oikeassa. Se ei kerro, mitä tehdä niillä kerroilla, kun se ei ole. Luottamukseen perustuva ohjaus on tietopohjan selkein malli, ja se on niin lyhyt, että sen voi kopioida.

Luottamus osoittautui luotettavaksi varoitusmerkiksi: kun malli oli epävarma, se oli todennäköisemmin väärässä (**β = -0,602, p < 0,001**). Tiimi lähetti vähiten luotetut **20 %** vastauksista ihmiselle. Se yksi sääntö nosti yksimielisyyden ihmisarvosanojen kanssa **0,78:sta 0,82:een** ja leikkasi manuaalisen arvostelutyön noin **80 %:lla** ([[know-when-to-trust-ai-scoring-reliability-2026|Milloin tekoälyn pisteytykseen voi luottaa]]).

Katso, mitä raportti sisältää: kynnysarvon, ihmisen ja säästön. ”Yksimielisyys 0,84” ei sisällä yhtäkään niistä, minkä vuoksi sen pohjalta on vaikea toimia ja siitä on helppo kiistellä.

## Tarkista automaattinen tarkistimesi ihmistä vastaan

Monet tiimit käyttävät nyt toista mallia ensimmäisen tuomarina. Järjestely on kohtuullinen, eikä toinen malli ole automaattisesti oikeassa.

Tutkimus, jossa huippumalli kirjoitti vihjeitä [[intelligent-tutoring|älykkääseen opastusjärjestelmään]], havaitsi, että noin **35 %** niistä oli liian yleisiä, virheellisiä tai antoi vastauksen, ja mallin omat automatisoidut laatutarkistukset olivat eri mieltä ihmisharkinnan kanssa siitä, mitkä niistä olivat huonoja ([[reddig-maclellan-personalized-feedback-llm-2026|Personoitu palaute LLM:llä]]).

Käytännön versio: ota noin viidenkymmenen tuotoksen otos, anna ihmisen arvioida ne ja vertaa sitä tarkistimesi antamiin arvioihin. Siellä missä ne eroavat, olet oppinut jotain tarkistimesta. Säilytä otos ja erimielisyyksien taulukko, koska se on myös se artefakti, jolla vastaat arvioijalle, joka kysyy, mistä tiedät.

## Mittaa itse sitä suuretta, kun tehtävä sen sallii

Selkein korjaus on kouluttaa malli samalla suureella, jota aiot mitata. Hienosäädetty malli koulutettiin toistamaan koekysymysten tilastolliset ominaisuudet: miten vaikea kukin osio on ja miten hyvin se erottelee vahvemmat heikommista. Se oppi ne kuviot sen sijaan, että ne olisi kerrottu sille ([[multimodal-item-parameter-estimation-2026|Multimodaalinen osioparametrien estimointi]]). Koska tavoite oli arvioinnin itsensä ominaisuus, arviointi voi koskea sitä ominaisuutta sanamuodon sijaan.

Raportoi sekä kehityskulku että lopputulos. SWIMin kirjoitussimulaattori julkaisi jokaisen vaiheen pistemäärän rinnakkain: arviointikriteeristöön perustuva kehottaminen **0,577**, hienosäätö **0,474 ± 0,023**, vahvistusoppiminen **0,618 ± 0,005** ([[swim-student-writing-simulation-2026|SWIM-opiskelijakirjoittamisen simulaatio]]). Lukija näkee siitä taulukosta, tekikö koulutus mitään. Yksi lopullinen luku ei kerro sitä, ja se kätkee vaiheen, jossa hienosäädetty malli suoriutui kehottamista huonommin.

## Vertaa johonkin projektisi ulkopuoliseen

Ota ensin perustaso, myös halpa sellainen. Kurssiavustajan malli ilman taustatietoja sai huonommat pisteet kuin pelkkä avainsanahaku, ja se on sellainen tulos, joka muuttaa tiekarttaa ja jonka löytäminen maksaa yhden päivän.

Ulkopuolinen vertailuanalyysi kertoo sitten, onko lukusi ylipäätään hyvä. CDPK-pedagogiikkamittarissa EduQwen ylsi **96,52 %**:iin Gemini-3 Pron **90,55 %**:ta vastaan ([[singh-eduqwen-pedagogical-rl-2026|EduQwen ja pedagoginen vahvistusoppiminen]]). Pedagogy Benchmark, joka rakennettiin todellisista opettajien täydennyskoulutuskokeista ja kattoi **97 mallia**, havaitsi tarkkuuden vaihtelevan **28 %:sta 89 %:iin** ([[cdpk-pedagogy-benchmark-llms|Lelièvre ym., 2025]]).

Opetusta koskevassa tehtävässä mallit vaihtelivat heikosta hyvään, joten vertailuanalyysin tulos sijoittaa järjestelmäsi johonkin kohtaan leveää vaihteluväliä.

## Testaa turvallisuutta kokonaisen keskustelun yli

Suurin osa turvallisuustestauksesta tarkistaa yksittäisen vaihdon. Ohjauksessa merkitykselliset haitat kertyvät. SafeTutors havaitsi, että jopa nimenomaan opetukseen rakennetut mallit heikkenevät pitkän keskustelun aikana ja voivat paljastaa vastauksia, jotka niiden pitäisi pidättää ([[hazra-safetutors-pedagogical-safety-2026|SafeTutors ja pedagoginen turvallisuus]]).

Aja tarkistus kokonaisten keskustelujen yli ja kirjoita testivuorot harkiten: väärässä oleva opiskelija, se joka jatkaa painostamista, se joka yrittää puhua mallin pois roolistaan. Ohjaaja, joka kestää kymmenen vuoroa ja taipuu yhdennellätoista, epäonnistuu siinä testissä, jolla on merkitystä, ja vastauskohtainen testisarja pisteyttää sen puhtaaksi.

## Tarkista simuloitu opiskelija ennen kuin luotat siihen

Simuloitujen opiskelijoiden tuottaminen todellisten rekrytoimisen sijaan tekee arvioinnista paljon halvempaa. Simuloitu opiskelija on myös mittaväline, ja se voi olla väärässä samoilla tavoilla kuin välineet ovat väärässä: liian yhteistyöhaluinen, liian sujuva, liian nopea hyväksymään vihjeen.

Suorin testi tietopohjassa vertasi simuloituja ja kehotettuja opiskelijoita **382 pidätettyyn dialogiin** suurimmasta julkisesta todellisten opiskelija-ohjaaja-dialogien matematiikka-aineistosta, käyttäen seitsemää mittaria, jotka kattoivat kielen, käyttäytymisen ja ajattelun ([[simulated-students-tutoring-dialogues-2026|Simuloidut opiskelijat ohjausdialogeissa]]). Muu työ työntää realismia eri suunnista: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] kouluttaa mallit sekä toimimaan että ajattelemaan kuin opiskelijat, ja historiaan perustuvat profiilit ehdollistavat simulaation opiskelijan menneisyyteen kiinteän persoonan sijaan ([[history-aware-student-simulation|Historiaan perustuva opiskelijasimulaatio]]).

Jos testikehyksesi on simuloitu opiskelija, validoi simulaattori todellisia litteraatioita vastaan ennen kuin annat sen arvostella ohjaajasi.

## Missä arviointitiimit menevät pieleen

Korkea yksimielisyyspiste tarkoittaa, että järjestelmä on oikeassa. Se tarkoittaa, että järjestelmä arvostelee kuin se arvostelija, jota vasten vertasit, niissä esseissä, joissa vertasit. WrAFTin 0,84 tuli palautteen kanssa, joka ei jäsentynyt.

Yksi luku voi edustaa tuotetta. Tiimit toimittavat koontinäkymän, jonka kulmassa lukee ”tarkkuus 0,84”, eikä siinä ole kenttää palautemoduulille, vihjekäytännölle tai kieltäytymiskäyttäytymiselle. Moduulitason pistemäärä on helpoin luku laskea ja vähiten informatiivinen asia raportoida.

Ulkopuolinen vertailuanalyysi ratkaisee, toimiiko työkalu. Pedagogy Benchmarkin 28 %:n ja 89 %:n väli kertoo, että tehtäväperhe on vaikea ja sitä palvellaan epätasaisesti. Sijaintisi sillä välillä on tosiasia mallistasi. Se, mitä opiskelijasi osaavat sen jälkeen, on eri tosiasia.

Mallin antama tuomio mallille on halpa korvike ihmisarvioille. Se on halpa. 35 %:n luku ja erimielisyys siitä, mitkä vihjeet olivat huonoja, kuvaavat sitä, mitä tarkistamaton tuomari päästää läpi.

Simuloidut opiskelijat tekevät arvioinnista ilmaista. Ne tekevät siitä halpaa ja siirtävät kustannuksen validointiin. 382 dialogin vertailu on olemassa, koska väline kaipasi kalibrointia.

## Mitä sinulle tullaan sanomaan

**”Meillä ei ole tähän merkitsijöitä.”** Viisikymmentä arvioitua tuotosta riittää alkuun. Arvioi ne itse, jos kukaan muu ei ole vapaa, ja säilytä lomake.

**”Vertailuanalyysipisteemme voittaa Geminin.”** Kyllä, CDPK:ssa, niillä kehotteilla, joita se vertailuanalyysi käyttää. Tuo avustamaton mittari sen viereen.

**”Automaattinen tuomarimme on samaa mieltä ihmisarvioijiemme kanssa.”** Silloin sinulla on yksi korrelaatio yhdellä otoksella. Kysy, mistä tuotoksista se oli eri mieltä, ja lue ne, koska siellä epäonnistuminen asuu.

**”Emme voi ajaa täyttä arviointia ennen julkaisua.”** Aja ne kolme halpaa: yksi tuotos pisteytettynä erikseen, viisikymmentä tuotosta ihmisen arvioimana, yksi keskustelun mittainen turvallisuusajo. Kalliit kohdat voivat seurata pilotin jälkeen.

**”Järjestelmä on vain demo, joten arviointi on ennenaikaista.”** Demo on halvin paikka saada selville, että lukusi mittaa sanamuotoa. Kun siihen liittyy tiekartta, saman löydöksen pohjalta toimiminen maksaa enemmän.

## Mitä tehdä tällä viikolla

**1.** Kirjoita se yhden lauseen väite, jota arviointisi on tarkoitus tukea. Laita se arviointiasiakirjan alkuun.

**2.** Listaa jokainen tuotos, jonka järjestelmä tuottaa, ja anna jokaiselle rivi, mittari ja läpäisyehto.

**3.** Ota viisikymmentä tuotosta, arvioi ne itse ja laita arviosi tarkistimen arvioiden viereen.

**4.** Laske luottamuksen jakauma ja kirjoita ohjaussääntö, jossa on luku, sekä sen henkilön nimi, joka lukee kynnyksen alle jäävät.

**5.** Aja yksi turvallisuuskeskustelu, jossa opiskelija on väärässä, työntää vastaan kahdesti ja pyytää vastausta.

## Mihin seuraavaksi

[[making-ai-better-at-supporting-learning|Miten voimme tehdä tekoälystä paremman tukemaan oppimista omassa oppiaineessamme]] kattaa saman ongelman suunnittelupuolen. [[training-ai-tutors-to-guide-rather-than-answer|Tekoälyohjaajien kouluttaminen ohjaamaan vastaamisen sijaan]] käsittelee koulutusreittiä ohjaavaan käyttäytymiseen, ja [[evaluating-ai-interventions-methods|interventioiden arvioinnin menetelmät]] on tämän kysymyksen opettajalle suunnattu versio, kun taas [[reporting-interpreting-aied-research|tutkimuksen raportointi ja tulkinta]] on tutkijalle suunnattu. Menetelmät ovat sivujen [[ai-ed-evaluation|tekoälykoulutuksen arviointi]] ja [[llm-training-and-fine-tuning|LLM:ien koulutus ja hienosäätö]] alla.
