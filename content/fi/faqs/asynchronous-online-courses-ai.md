---
title: "Miten asynkroniset verkkokurssit pitäisi suunnitella ja ohjata, kun tekoäly pystyy tekemään työn?"
created: "2026-09-17T03:40:00-04:00"
connected_faqs: [reducing-over-reliance, course-ai-policy, verify-ai-output, group-work-ai]
weight: 68
type: faq
foundations: [academic-integrity, cognitive-offloading, learning-design]
pedagogy: [community-of-inquiry, online-teaching-and-learning, self-regulated-learning, student-engagement]
technology: [generative-ai]
assessment: [assessment]
methods: [meta-analysis-systematic-review, rct, mixed-methods-research, design-based-research]
ethics: [guardrails]
audience: [instructors, instructional designers]
level: [higher ed, adult learning]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/asynchronous-online-courses-ai
source_updated: "2026-10-28T11:34:12-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Lukukausi avautuu, eikä mitään tapahdu sovittuna hetkenä. Julkaiset ensimmäisen viikon lukemiston, keskustelukehotteen ja ensimmäisen tapauksen, ja sitten odotat, mitä takaisin tulee. Se, mitä takaisin tulee, on sujuvaa ja aiheessa pysyvää, eikä se kerro sinulle mitään siitä opiskelijasta, joka sen palautti. Ei ole huonetta, johon kävellä, ei kasvoja luettavaksi tiistaina kello 10.15, eikä jatkokysymystä, jonka voi esittää sillä hetkellä, kun opiskelija seisoo edessäsi.

Vastaus, jonka voi antaa kollegalle: asynkronisella kurssilla kaikki se, minkä luokkahuone tarjoaa ilmaiseksi, täytyy rakentaa tarkoituksella. Laita arvosana prosessille valmiin tiedoston sijaan, pidä mukana yksi mittaus, jonka opiskelija tuottaa ilman työkaluja ja ilman apua, rajaa se tekoäly, jonka annat käyttöön, ja pidä se kurssin sisällä, ja kohtele kalenteria suunnittelupäätöksenä. Kysy jokaisesta tehtävästä, mitä opiskelijan pitäisi vielä tehdä, jos malli tuottaisi artefaktin hänen puolestaan.

## Lyhyt versio

**1.** Arvioi prosessi. Päätösloki, vaiheittainen luonnos tai kappale itseselitystä näyttää päättelyn, jonka lopullinen palautus kätkee.

**2.** Pidä yksi avustamaton mittaus jokaisessa arvioinnissa, joka todentaa osaamisen. Alla olevan väestödatan pysyvyyskuilu sulkeutuu, kun valvonta otetaan käyttöön.

**3.** Käytä [[asynchronous-oral-assessment-2026|asynkronista suullista arviointia]] siellä, missä panokset oikeuttavat tuotantotyön: juuri oikeaan hetkeen ajoitetut kehotteet, lyhyet tallenteet, joita opiskelija ei voi muokata, upotetut arviointikriteerit ja automaattisesti luodut litteroinnit.

**4.** Määritä kaikki tarjoamasi tekoäly vihjaamaan vastaamisen sijaan ja upota se kurssiin sen sijaan, että linkität johonkin yleiseen.

**5.** Hajauta tärkeimmät määräajat ja avaa 7-8 päivän ikkuna ennen jokaista. Sen verran varoitusta vuorovaikutusdata antaa.

**6.** Arvioi liike keskustelussa: sitouduttu kanta, haaste ja dokumentoitu uudelleenharkinta.

## Päätä, mistä tehtäväsi on näyttöä

Asynkroninen kurssi on altis rakenteellisesta syystä. Sen oppimisnäyttö on palautus, ja palautusten tuottaminen on nyt halpaa.

Esittelyt poistavat opiskelijan kuvasta kokonaan. Elävässä kandidaattitason psykologian kurssissa autonomiset agentit kirjautuivat oppimisalustalle, lukivat kurssimateriaalit ja suorittivat valvomattomia arvosteltavia töitä ilman, että opiskelija oli mukana. Kaksi tenttiä valmistui noin **12 minuutissa** ja **alle 5 minuutissa**, molemmat tuloksella **10/10**. Keskustelupostauksessa agentti kaivoi esiin vertaisten postaukset ja keksi uskottavan minämuotoisen elämäntarinan vastatakseen niihin. Kirjoittajien laajempi aineisto kattaa ainakin **15 dokumentoitua agenttiajoa** Canvasissa, Moodlessa ja Brightspacessa **seitsemällä agenttityökalulla**. Heidän kehystyksensä on syytä ottaa opintojaksokuvaukseesi: tämä on [[assessment-validity|arvioinnin validiteetin]] ongelma ennen kuin se on [[academic-integrity|rehellisyyden]] ongelma, koska agentin suoritus poistaa oletuksen siitä, että palautettu työ tuli siltä henkilöltä, jonka oppimista arvioidaan ([[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou ja El-Haddad, 2026]]).

Kausaalinen näyttö siitä, mitä työkalu tekee oppimiselle, on yhtä suoraa. Satunnaistetussa kokeessa, jossa oli noin 1 000 lukion matematiikan opiskelijaa, suojaamaton tekoälyapu nosti harjoitussuoritusta **48 %** ja laski avustamatonta, suljetun kirjan koesuoritusta **17 %**. Opiskelijat, joilla ei ollut pääsyä, suoriutuivat paremmin kuin opiskelijat, joilla oli. [[guardrails|Suojakaiteilla]] varustettu ohjaaja, joka antoi vihjeitä vastausten sijaan, poisti haitan. Rajoite ratkaisi lopputuloksen.

Väestödata kulkee samoin. **3,2 miljoonassa ALEKS-vuorovaikutuksessa** opiskeluaika tekoälylle alttiissa tehtävissä laski **26,9 %** ChatGPT:n julkisen julkaisun jälkeen, ja todennäköisyys vastata valvottuihin pysyvyyskohtiin oikein laski **25 %**. Vaikutus katosi, kun valvonta otettiin käyttöön. Tuo katoaminen on hyödyllinen osa kurssisuunnittelulle, koska se paikantaa oikotien alustan ulkopuolelle ja osoittaa haitan elävän olosuhteissa, jotka sinä asetat.

On hiljaisempi vikatila, jota vastaan pitää suunnitella. [[metacognitively-discordant-completion-genai-2026|Metakognitiivisesti epäsopusuhtainen suorittaminen]] nimeää tilan, jossa palautetaan oikeaa ja täydellistä työtä yksityisesti tietäen, ettei ymmärrystä koskaan saapunut. Luokkahuoneessa saattaisit huomata sen opiskelijan epäröinnistä. Asynkronisella kurssilla palautus on ainoa kanava, ja oikea palautus luetaan menestykseksi. [[assessment|Arvioinnin]] suunnittelu on ensimmäinen vipusi.

## Laita näyttö prosessiin

Jos valmis tuote ei todista mitään, näytön on tultava siitä, miten työ tehtiin, tai olosuhteesta, jota opiskelija ei voi delegoida.

**Prosessin paljastavat artefaktit** ovat halvin muutos, ja ne toimivat laajassa mitassa: vaiheittaiset palautukset, joihin kuuluu pakollinen väliin jäävä päätösloki, jokaisen vastauksen liitettävä yhden kappaleen itseselitys, lähteen annotointi, palautteen jälkeen muokattu suunnitelma. Ne tallentavat [[cognitive-offloading|päättelyn]] eikä sen jäänteitä, ja opettajalta niiden silmäily kustantaa suhteellisen vähän.

**Asynkroninen suullinen arviointi** kantaa eniten painoa siellä, missä osaaminen on todennettava. [[asynchronous-oral-assessment-2026|Pentland, Lowenthal ja Krier (2026)]] arvioivat verkkopohjaisia arviointeja, jotka toimittavat kehotteet juuri oikeaan hetkeen, antavat opiskelijoiden tallentaa lyhyitä, aikarajoitettuja webkameravastauksia, joihin he eivät voi palata, ja arvioivat upotettuja kriteeristöjä vastaan samalla kun litteroinnit syntyvät automaattisesti. Kahdessa tutkimuksessa, välitilinpidon pilotissa ja data-analytiikan kurssilla, opiskelijat saivat korkeampia pisteitä kuin paikan päällä pidettävissä monivalintakokeissa. Ero oli merkitsevä toisessa tutkimuksessa ja positiivinen mutta ei-merkitsevä trendi ensimmäisessä, ja kohtalaiset formaattien väliset korrelaatiot tukivat konvergenttia [[assessment-validity|validiteettia]]. Opiskelijat kertoivat valmistautuvansa eri tavalla, käyttävänsä enemmän [[active-learning|aktiivisen]] oppimisen strategioita ja pitävänsä formaattia ammatillisesti relevanttina. Kurssille, jolla ei ole yhteistä tuntia, tämä on lähin rakenteellinen vastine: ajattelu tapahtuu livenä, opiskelijan valitsemana aikana ja paikassa, hallinnollisella kustannuksella, joka ei kasva ryhmäkoon mukana.

**Yksi avustamaton mittaus** kuuluu jokaiseen kurssiin, jonka arvosana todentaa tietoa. ALEKS-tulos on argumentti: kun valvonta oli käytössä, pysyvyyskuilu katosi. Kerro opiskelijoille, miksi ehto on olemassa. Se perustelu kuuluu [[course-ai-policy|kurssisi tekoälylinjaukseen]].

## Päätä, missä työkalu on järjestyksessä

Kun tuote on epäluotettavaa näyttöä, työn järjestys tulee osaksi arvioinnin suunnittelua.

[[brcic-effortless-trap-productive-struggle-2026|Brcic ja Frljic (2026)]] asettavat sijoittelun argumentin keskiöön: salliminen tai kieltäminen on väärä valinta, ja se suunnittelukysymys, jolla on merkitystä, on **missä työkalu on**. Heidän keräämänsä kausaalinen näyttö osoittaa lopputuloksen kääntyvän pelkän sijoittelun perusteella. Sama suojaamaton apuri, joka jätti lukiolaiset noin **17 % heikommiksi** avustamattomassa kokeessa, ei aiheuttanut haittaa, kun se rakennettiin uudelleen pidättämään vastauksia, ja hyvin suunniteltu [[intelligent-tutoring|ohjaaja]] suurin piirtein **kaksinkertaisti** oppimisen. Heidän kuuden liikkeen kehyksensä työkalun sijoittamiseksi (pohjusta, koettele, osoita, kiinnitä, vahvista, testaa) on yksi käyttökelpoinen valikko. Pidä heidän diagnostinen sääntönsä: *jos tekoälyn päästäminen tekee tehtävästä vaivattoman, se on väärässä paikassa.* Heikko sijoittelu jättää oppimisen illuusion, joka romahtaa avustamattomassa tehtävässä, sen tilan, jota [[metacognitively-discordant-completion-genai-2026|metakognitiivisesti epäsopusuhtainen suorittaminen]] kuvaa.

Tehtävään kirjoitettuna se antaa järjestyksen, jonka voi painaa tehtäväpaperiin:

**Ajattele, sitoudu, käytä tekoälyä, kritisoi, korjaa, selitä.**

Opiskelijat yrittävät älyllisen työn ja sitoutuvat alkuperäiseen tulkintaan, ennusteeseen, jäsentelyyn tai päätökseen. Sitten malli astuu sisään palautetta, vaihtoehtoja, vasta-argumentteja tai kritiikkiä varten. Sen jälkeen opiskelijat arvioivat, mitä se tuotti, korjaavat ja selittävät, mikä muuttui ja miksi. Sitoutumisen vaihe tekee lopusta arvioitavaa. Sitoutumaton opiskelija ei voi muuttaa mitään, eikä artefaktilla, jonka malli kirjoitti tyhjästä, ole lainkaan muutoshistoriaa.

Ylikorjaus, jota pitää välttää: jokaisen kehotteen kerääminen ja jokaisen näppäinlyönnin dokumentoiminen tuottaa työkuormaa ilman näyttöä. Pyydä ne päätöskohdat, jotka oikeasti lukisit: mikä näyttö valittiin, mikä vaihtoehto hylättiin, mikä muuttui kritiikin jälkeen.

## Yhdistä tehtävä, jota et voi puolustaa, kaksoseen

Rakenteellinen vaihtoehto tässä on lopettaa valitseminen pedagogisesti kestävän ja puolustettavan tehtävän välillä. [[roe-assessment-twins-2026|Roe, Perkins ja Giray (2026)]] esittävät **arviointikaksoset**: yhdistä tekoälylle altis tehtävä, kuten kotona tehtävä essee tai analyysi, toiseen, vähemmän alttiiseen tehtävään, joka arvioi *samat* tavoitteet, ajasta se riittävän lähelle ristiin varmistamista varten ja arvostele ne toisistaan riippuvaisesti. Heidän kartoituksensa kulkee Messickin kuuden validiteettinäytön säikeen yli, ja heidän suunnitteluprosessissaan on kolme vaihetta: tunnista haavoittuvuudet, kohdista tavoitteet ja valitse kaksonen, kehitä sitten arvostelu, joka yhdistää nämä kaksi. Kotona tehtävä analyysi säilyttää arvonsa laajennetussa tutkimuksessa. Kaksonen voi olla lyhyt tapausmuunnos, yhden keskeisen päätöksen selitys tai lyhyt suullinen tai multimediainen puolustus.

Kumppanikysymys on omistajuus. [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Ebrahimzadeh, Shibani ja Buckingham Shum]] esittävät, että yhteiskirjoittaminen generatiivisen tekoälyn kanssa horjuttaa useita validiteettinäytön muotoja, ja ehdottavat **yhteiskirjoittamisen rehellisyyttä** validiteettinäytön lähteeksi itsessään, jota rikotaan, kun opiskelija palauttaa tekoälyn tuottamaa sisältöä, jota hän ei ymmärrä. Omistajuuden tarkistamiseksi laajassa mitassa he raportoivat **AI Viva** -työstä: keskusteleva agentti, joka pitää hybridimuotoisen suullisen kuulustelun ja esittää ymmärtämiskysymyksiä säädeltävällä tyypillä ja monimutkaisuudella, asiantuntijaopettajien ja arviointiasiantuntijoiden syvällisesti validoimana. Punnitse sitä kaiken valvomista vastaan. Oman päättelyn suullinen puolustus skaalautuu siellä, missä huoneen valvonta ei, ja se tuottaa näyttöä ymmärryksestä.

## Päätä, mitä tarjoamasi tekoäly saa tehdä

Merkitystä on erolla upotetun, rajatun tekoälyn ja irrallisen chatbotin välillä. Ne tuottavat eri tuloksia.

[[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Open Universityn AIDA-avustaja]] on parhaiten dokumentoitu upotettu tapaus: kuusi iteratiivista suunnittelupohjaista tutkimusta 18 kuukauden aikana, 498 opiskelijaa ja 20 henkilökunnan jäsentä, instituutiossa, joka palvelee yli 200 000 oppijaa useammassa kuin 50 maassa. Kokeellisessa satunnaistetussa kokeessa AIDA:aa käyttäneet opiskelijat käyttivät **kaksi kertaa niin kauan** aikaa ja kävivät useammilla sivuilla kuin kontrolliryhmä, ja **96 %** halusi avustajan saataville formaaleihin opintoihinsa. Saman instituution kokemus ulkoisesta, irrallisesta chatbotista meni toiseen suuntaan.

[[lock-integrating-ai-online-learning-higher-ed-2025|Lockin, Arteagan ja Johnsonin (2025) katsaus]], 63 viittausta 32 maassa, lisää sosiaalisen ehdon: opiskelijat, jotka käyttivät ChatGPT:tä opettajan ohjauksen *rinnalla*, kokivat suurempia [[learning-gains|oppimishyötyjä]] kuin ne, jotka käyttivät sitä yksin. Avustaja täydentää opettajaa tai korvaa suhteen, ja vain toinen niistä on kurssisuunnittelua.

Kaksi varoitusta ansaitsee painoa. KhanMigon epäonnistuminen ei ollut tekninen. Oppijat eivät sitoutuneet keskustelubottiin ja näyttö hyödyistä jäi rajalliseksi, mikä viittaa [[governance|organisaation valmiuteen]] ja opetukselliseen sopivuuteen. Opettajapuolikaan ei ole valmis: eteläafrikkalaisen opettajankoulutuksen vertailussa itseraportoitu TPACK tekoälyintegroidussa luonnontieteiden opetuksessa oli **64,0 %** kampuspohjaisessa yliopistossa ja **47,4 %** etäyliopistossa, pedagogisen tiedon ollessa heikoin alue molemmissa ([[online-teaching-and-learning|verkko-opetus ja -oppiminen]]). Avustajan käyttöönotto asynkronisella kurssilla ei kouluta niitä, joiden on arvioitava sen tuotosta.

## Arvioi liike keskustelussa

Keskustelufoorumit ovat paikka, jossa asynkroninen kurssi rakentaa [[community-of-inquiry|yhteisöä]] tai muuttuu hiljaa palautuslaatikoksi. Kahden havainnon pitäisi muovata sitä, mitä siellä automatisoit.

Ajoitus on vaikein osa. [[llm-facilitation-timing-online-discussions|Tsirmpas ja kumppanit]] rakensivat PEFK-korpuksen fasilitointiaineistojen vertaamiseksi ja tekivät sitten ensimmäisen kyselyn fasilitoinnin *ajoituksesta* asiantuntijafasilitaattorien ja LLM-tuomareiden kanssa. Ihmiset olivat varovaisempia puuttumaan. LLM:t olivat liiallisen innokkaita. Molemmat olivat varmempia arvioidessaan, että fasilitointia **ei** tarvita, kuin arvioidessaan, että sitä tarvitaan. Koulutetut luokittelumallit suoriutuivat LLM-asetelmia paremmin, ja silloinkin olemassa olevat aineistot rajasivat suorituskykyä. Käytännön luenta: pidä autonominen moderointi poissa kriittiseltä polulta, ja jos käytät tekoälyä keskustelussa lainkaan, määritä se pysymään hiljaa oletuksena.

Tiivistelmät auttavat opiskelijoita navigoimaan foorumilla tekemättä heistä osallistujia. 128 yliopisto-opiskelijan kanssa kolmen iteraation yli [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao ja Cukurova (2026)]] havaitsivat, että tekoälyn tuottamat keskustelutiivistelmät laajensivat altistumista vertaisten kontribuutioille ja vahvistivat verkoston yhteenkuuluvuutta, heikkoja siteitä, joita sosiaalisen pääoman teoria kutsuu silloittamiseksi, madaltamalla merkityksellisten postausten löytämisen vaivannäköä. Ne eivät estäneet katseluaktiivisuuden laskua lukukauden aikana. Tiivistäminen on navigoinnin [[scaffolding|tuki]].

Rakenne, joka kestää, on järjestys eikä ketju: **kanta, haaste, uudelleenharkinta.** Opiskelijat sitoutuvat kurssimateriaaliin perustuvaan tulkintaan, kohtaavat sitten toisen näkökulman, vastaesimerkin tai kritiikin ja selittävät, muuttuiko heidän päättelynsä ja miten. Se, mitä arvioit, on liike ideoiden välillä. Palautettu postaus ja kaksi vastausta lakkasivat osoittamasta sitä heti, kun agentti pystyi kaivamaan vertaisen postaukset ja esiintymään luokkatoverin elämäntarinana.

Koska agentti jäljittelee pintakäyttäytymistä, omista kontribuutioistasi tulee niukka resurssi. Kymmeniin yksittäisiin postauksiin mekaanisesti vastaaminen on opetuksellisen läsnäolon heikoin muoto; keskustelun poikki syntetisoiminen on vahvin: *kolme oletusta toistuu analyyseissänne; useat teistä lukevat tämän näytön eri tavalla; tämä argumentti vakuuttaa, kunnes tuomme mukaan tämän vastaesimerkin.* Se on [[teacher-role|orkestrointia]] eikä viestien tuottamista.

Molempien alla oleva kehyskysymys on vastuullisuus. [[reconceptualizing-community-inquiry-generative-ai|Ba, Gašević, Lim ja Anderson (2026)]] esittävät, että generatiivinen tekoäly horjuttaa [[community-of-inquiry|yhteisön]] oletuksen siitä, että läsnäoloindikaattorit voidaan ylipäätään kohdentaa ihmisille. He kohtelevat generatiivista tekoälyä episteemisenä ehtona ja läsnäoloja sosioteknisinä saavutuksina, joiden suhde tutkimisen laatuun riippuu siitä, missä ihmisen vastuullisuus on. Konkreettisesti: päätä ja ilmoita, kuka on vastuussa mistäkin kussakin vaihdossa, sen sijaan että olettaisit läsnäolon syntyvän, koska foorumi on olemassa.

## Pidä lukukausi liikkeessä ilman huonetta, johon kävellä

Itsetahtiset formaatit olettavat [[self-regulated-learning|itsesäätelyä]] ja opettavat sitä harvoin. Näyttö siitä, mitkä käyttäytymiset oikeasti korreloivat tehtävässä pysymisen kanssa, on poikkeuksellisen käytännöllistä.

Kyselyssä 530 college-opiskelijalle assosiaatiosääntökaivulla ja klusteroinnilla [[decreasing-digital-distraction-college-online-learning-2026|Shi ym. (2026)]] havaitsivat, että itsesäätelyn käyttäytymiset, **tavoitteiden asettaminen, ympäristön jäsentäminen ja ajanhallinta**, esiintyivät johdonmukaisimmin yhdessä vähäisen digitaalisen häiriön kanssa, samoin kuin oppija-opettaja- ja oppija-sisältö-[[student-engagement|sitoutuminen]] ja tekninen osaaminen. Vertaisilta avun hakemiseen ja oppija-oppija-sitoutumiseen nojaaminen esiintyi *harvemmin* vähähäiriöisissä profiileissa. Jäsennä ympäristö ja aikataulu ennen kuin suunnittelet seuraavan ryhmäaktiviteetin.

Itsesäätely ei myöskään ole kiinteä piirre. Koko lukukauden mittaisessa tutkimuksessa 75 ensimmäisen vuoden opiskelijan kanssa [[song-genai-learning-partner-srl-over-time-2026|Song ym. (2026)]] havaitsivat sen toimivan sekä vakaana taipumuksena että vaihtelevana tilana. Yksilölliset perustasot pysyivät vakaina, kun metakognitiivinen tieto ja [[well-being|hyvinvointi]] laskivat systeemisesti lukukauden aikana, mitä ajoivat opetussuunnitelman vaatimukset kuten suuret arviointimääräajat. Määräaikojen klusteroiminen voi olla tehokas hallinnollinen valinta, ja se on myös mitattavissa oleva vero sille itsesäätelylle, johon formaattisi nojaa.

Interventioikkuna on tiedettävissä. [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries ja Koprinska (2025)]] osoittivat, että tulkittava koneoppiminen sisältövuorovaikutuslokeista ennustaa moduulitason edistymistä ja merkitsee keskeytystuloksia jopa **7-8 päivää ennen moduulin määräaikoja** laajamittaisilla verkko-ohjelmointikursseilla. Se on tarpeeksi varoitusta lähettää täsmällinen muistutus täsmälliselle opiskelijalle, mikä voittaa epäonnistumisen löytämisen vasta arvosteluvaiheessa. [[adult-learning|Aikuis]]- ja etäoppijoille AI-ALOE-suunnitteluohjeet lisäävät rajoitteen, jolla on eniten merkitystä: mobiilipääsy, offline-käyttö ja aito asynkroninen saatavuus, koska nämä oppijat opiskelevat ajanjaksoissa muiden velvoitteiden välissä.

## Päätä, mitä tuotannossa automatisoidaan

Kahdella käytöllä on kohtuullinen näyttö takanaan, ja molemmat kohdistuvat opettajan työkuormaan.

**Tuotantokustannus.** [[mooc-to-maic|MAIC]] kehystää MOOCin ”yksi video N opiskelijalle” -lähetyksen uudelleen muotoon ”N agenttia yhdelle opiskelijalle” käyttäen erikoistuneita opettaja-, avustaja-, luokkatoveri- ja analysoija-agentteja jaetulla mallipohjalla. Sen tekijät raportoivat kurssituotannon kutistuneen noin **25 000 dollarista ja 60 tunnista** MOOCia kohden **alle 2 dollariin ja 30 minuuttiin**, pilotoituna Tsinghuassa kahdella kurssilla, joilla oli **yli 100 000 oppimistietuetta yli 500 opiskelijalta**, ja julkaistuna avoimen lähdekoodin OpenMAICina. Personoitu media on sama idea omaisuustasolla: suurella verkkokurssilla [[personalized-ai-generated-videos-preference-2026|Tomlinson ym. (2026)]] havaitsivat opiskelijoiden pitävän tekoälyn tuottamista personoiduista videoista enemmän kuin personoimattomista ihmisen kuvaamista, ja personointivaikutus oli suurempi kuin ihmisesiintyjälle annettu arvo.

**Foorumin navigointi.** Yllä oleva tiivistelmätuki vähensi hyvien kontribuutioiden paikantamisen kustannusta lisäämättä opettajan lukukuormaa.

Kolme tehtävää jää sinulle: päättäminen siitä, onko teksti opiskelijan omaa ajattelua, harkinta siitä, tarvitseeko keskustelu väliintuloa, ja vaikeustason kalibrointi. Tuotettu materiaali tarvitsee myös pedagogisen katsauksen ennen kuin se kantaa opintopisteitä. Halpa tuotanto on erillinen kysymys kestävästä suunnittelusta.

## Nimeä tekoälyn rooli ja tarkista, että opiskelijalla on vielä oma

”Opiskelijat saavat käyttää tekoälyä” on liian laaja määrittely suunnittelun pohjaksi. Roolin nimeäminen tekee aktiviteetista suunniteltavan, ja rooleilla on seurauksia läsnäololle: markkinoinnin opetuksen generatiivista tekoälyä koskeva tutkimus erottaa **ohjaajan, joukkuetoverin ja työkalun**, osoittaa jokaisen vaikuttavan opetukselliseen, sosiaaliseen ja kognitiiviseen läsnäoloon eri tavalla ja listaa tutut eettiset altistukset: tietosuoja, plagiointi, riippuvuus ja arvioinnin oikeudenmukaisuus ([[genai-marketing-education-roles-2026|Generatiivinen tekoäly markkinoinnin opetuksessa]]). Sama malli voi olla sokraattinen kyselijä ennen tehtävää, kriitikko ensimmäisen luonnoksen jälkeen, simuloitu sidosryhmä tapausanalyysin aikana, vastustaja, jonka argumentti on kumottava, vihjeitä antava ohjaaja harjoittelun aikana tai editori, joka tuodaan sisään vasta kun sisällöllinen päättely on olemassa. Ne ovat eri aktiviteetteja, ja niiden sekoittaminen on se, miten ”tekoäly on sallittua” alkaa tarkoittaa ”mitään ei suunniteltu”.

[[scaffolding|Tukeminen]] tarjoaa testin. Tuen pitäisi auttaa oppijoita tekemään se, mitä he eivät vielä osaa yksin, ja sen pitäisi häipyä osaamisen kehittyessä. Malli, joka toimittaa jatkuvasti valmiita ratkaisuja, tekee tehtävän. Jokaisesta tekoälyä käyttävästä aktiviteetista sinun pitäisi pystyä päättämään tämä lause epäröimättä:

*Tekoälyn työ tässä on _____, kun taas opiskelijan työ on ________.*

Jos toinen aukko sisältää vähän ajattelua, aktiviteetti on suunniteltava uudelleen.

## Pyydä heitä arvioimaan vastausta, jota he eivät kirjoittaneet

[[ai-literacy|Tekoälylukutaito]] kattaa kriittisen arvioinnin, [[metacognition|metakognitiivisen]] harkinnan ja sen tietämisen, milloin työkalu kannattaa ohittaa. Itseraportoitu itsevarmuus on huono sijaisindikaattori osoitetulle osaamiselle.

Yksi muutos, jonka mikä tahansa asynkroninen kurssi voi ottaa heti käyttöön: **anna joskus tekoälyn tuotos opiskelijoille itse.** Anna kaksi kilpailevaa vastausta ja kysy, kumpi on vahvempi ja miksi. Kysy heikoin väite, puuttuva oletus, varmistamaton lähde, uskottava mutta silti väärä selitys. Kysy, mikä näyttö muuttaisi heidän mielensä.

Näin kehystettynä arvioitava kyvykkyys on se, tunnistaako opiskelija vastauksen, joka ansaitsee luottamuksen, mikä on lähempänä sitä, mitä tieteenala vaatii, ja paljon vaikeampaa delegoida. [[verify-ai-output|Varmistuskäytännöissä]] tekniikka elää. Tässä merkitystä on sillä, että arviointi laitetaan arvosteltavan tehtävän sisään sen sijaan että se jätetään neuvoksi moduulin ilmoitukseen.

## Mitä opetussuunnittelijat ymmärtävät asynkronisista kursseista väärin

Palautus on ongelma, joten palautus on se, mikä pitää korjata. Se on myös ainoa kanava, joka sinulla on, ja siksi pelkän artefaktin kiristäminen muuttaa vähän. Lisää toinen kanava: prosessikertomus, tallennettu selitys, yksi avustamaton mittaus.

Joustavuus tarkoittaa, että opiskelija omistaa tahdin. Formaatti olettaa itsesäätelyä, ja 75 opiskelijan lukukausitutkimus osoittaa metakognitiivisen tiedon ja hyvinvoinnin laskevan määräaikojen klusteroituessa. Tahti on suunnittelupäätös, jonka teet heidän puolestaan.

Foorumi on osallistumista, joten lasken postaukset. Yllä oleva agenttiesittely tuotti postauksen, joka kaivoi vertaisia ja keksi elämäntarinan; laskenta ei erota sitä hyvästä. Haon ja Cukurovan tiivistelmät paransivat navigointia ja jättivät katseluaktiivisuuden laskemaan joka tapauksessa.

Avustajan lisääminen tekee kurssista tekoälyintegroidun. AIDA rakennettiin tarkoitukseen, upotettiin ja iteroitiin kuuden tutkimuksen yli; ulkoinen chatbot samassa instituutiossa meni toiseen suuntaan, eivätkä KhanMigon oppijat yksinkertaisesti sitoutuneet.

Prosessinäyttö tarkoittaa kaiken dokumentoimista. Jokaisen kehotteen ja jokaisen näppäinlyönnin kerääminen tuottaa paperityötä ja vähän muuta. Arvosteltava versio kysyy muutaman päätöskohdan: mikä näyttö valittiin, mikä vaihtoehto hylättiin, mikä muuttui kritiikin jälkeen.

## Mitä sinulle vastataan

**”Nämä ovat aikuisia, jotka valitsivat asynkronisen kurssin. Jos he antavat tekoälyn kirjoittaa sen, se on heidän päätöksensä.”** Valinta-argumentti pitäisi paikkansa, jos kurssi ei todentaisi mitään. Se todentaa. ALEKS-näyttö osoittaa oikotien tuottavan osaamisen vaikutelman, joka ei kestä valvottua tarkistusta, ja kustannus lankeaa myöhemmin, seuraavalla kurssilla, ammattikokeessa tai työssä. Siinä on yhdenvertaisuuden reuna: ne oppijat, jotka todennäköisimmin siirtävät kuormitusta, ovat usein niitä, joilla on vähiten aikaa, eli ryhmä, jota varten asynkroninen kurssi on olemassa.

**”Tunnistus on vastaus.”** Tunnistus on kiisteltyä, ja valvontatulos osoittaa, miksi suunnittelu voittaa valvonnan: haitta katosi, kun olosuhteet muuttuivat. Tunnistukseen liittyy myös väärien positiivisten kustannuksia, ja se muuttaa opetuksen kilpavarusteluksi. Suunnittele tehtävä uudelleen ja pidä yksi avustamaton mittaus. Katso [[reduce-ai-cheating|tekoälyhuijauksen vähentäminen]] ja [[redesign-assessment-ai-era|arvioinnin uudelleensuunnittelu tekoälyaikana]].

**”Opetuksellinen läsnäolo on mahdotonta etänä, joten asynkroninen on olennaisesti huonompi.”** Läsnäolo asynkronisella kurssilla suunnitellaan. Yllä oleva yhteisön uudelleenkehystys sanoo, että sen indikaattorit ovat sosioteknisiä saavutuksia generatiivisen tekoälyn aikakaudella, ja AIDA-koe kaksinkertaisti tehtävään käytetyn ajan kurssilla, jolla ei ollut lainkaan synkronisia tapaamisia.

**”Valvonta on tarkkailua, enkä minä sitä toteuta.”** Puolustettava kanta, ja se jättää vaihtoehdot avoimiksi. Prosessin paljastavat artefaktit, asynkroninen suullinen arviointi ja AI Viva tallentavat päättelyä kenenkään huonetta valvomatta. Jos käytät valvottua ehtoa, laita se opintojaksokuvaukseen, selitä perustelu ja rajaa se arviointeihin, jotka todentavat osaamisen.

**”Tee sitten kaikesta synkronista ja valvottua.”** Monet opiskelijat valitsevat asynkronisen opiskelun työn, hoivavastuiden, vammaisuuden tai maantieteen vuoksi. Tunnistuksella on omat yhdenvertaisuuskustannuksensa: työkalut, jotka merkitsevät ei-äidinkielisiä kirjoittajia, tuottavat suhteettomasti vääriä positiivisia, jotka rankaisevat rehellistä työtä ([[ai-detection|tekoälyn tunnistus]]). Suhteellinen vaihtoehto on pieni määrä varmistushetkiä muuten joustavan kurssin sisällä: lyhyt tallennettu selitys, personoitu sovellus, vastaus opettajan valitsemaan kysymykseen, merkitty päätöspolku, matalan panoksen yksilöllinen tarkistus. Varmistuksen pitäisi nostaa näyttösi validiteettia ja säilyttää se joustavuus, jonka vuoksi formaatti kannatti tarjota.

## Mitä näyttö ei ratkaise

[[ai-distance-education-systematic-review-2026|Systemaattinen katsaus tekoälystä etäopetuksessa]] (56 artikkelia, 2020-2025) kattaa personoinnin (24 tutkimusta), arvioinnin ja palautteen (19), ihmisen ja tekoälyn vuorovaikutuksen (17) sekä hallinnon ja yhdenvertaisuuden, ja päättelee, että pohja on lyhytaikaista ja poikkileikkaavaa, pitkittäistutkimusta on vähän. [[ai-student-engagement-online-learning-review-2025|Katsaus tekoälystä ja opiskelijasitoutumisesta verkko-oppimisessa]] (24 tutkimusta) rajoittuu yhteen tietokantaan, käsittelee vain sitoutumista ja sekoittaa synkroniset ja asynkroniset kontekstit, joten sen päätelmät eivät ole asynkronispesifejä. Asynkroninen suullinen arviointi nojaa kahteen tutkimukseen kahdella kurssilla. MAIC on pilotti. Fasilitoinnin ajoituksen aineistot rajaavat suorituskykyä koulutetuillakin luokittelijoilla. Mikään tutkimus tässä ei seuraa asynkronista kohorttia tarpeeksi pitkään osoittaakseen, tuottaako uudelleensuunniteltu arviointi kestävää oppimista vai vain parempaa näyttöä siitä. Kaikki se on tarpeeksi vahvaa muuttamaan seuraavan kurssisi ja liian ohutta perustelemaan linjausväitettä.

## Mitä tehdä tällä viikolla

**1.** Valitse korkeimman panoksen arviointisi ja lisää yksi ehto, jonka opiskelija suorittaa avustamatta. Kerro heille, miksi se on olemassa.

**2.** Ota tehtävä, jonka tekoäly nyt suorittaa päästä päähän, ja kirjoita se uudelleen niin, että prosessi on artefakti: päätösloki, vaiheittainen luonnos, itseselitys, kahden yrityksen vertailu.

**3.** Muunna yksi merkittävä arviointi asynkroniseksi suulliseksi puolustukseksi upotettuine kriteeristöineen ja aseta tekoälyn käyttöoikeus tehtäväkohtaisesti opintojaksokuvaukseen, josta opiskelijat sen oikeasti lukevat.

**4.** Hajauta tärkeimmät määräajat ja varaa 7-8 päivän ikkuna ennen määräaikaa yhteydenottoon opiskelijoihin, joiden vuorovaikutusdata on hiljentynyt.

**5.** Aja kolme kysymystä heikoimman tehtäväsi yli. Voisiko tekoälyjärjestelmä suorittaa tämän aktiviteetin ilman, että opiskelija ymmärtää materiaalin? Mikä kognitiivinen toiminta tässä on tarkoitus tuottaa oppimista? Mikä näyttö osoittaa, että opiskelija todella teki tuon toiminnan? Jos ensimmäinen vastaus on kyllä ja kahteen muuhun on vaikea vastata, ongelma on oppimisen suunnittelussa, eikä mikään linjauksen sanamuoto sitä korjaa.

**Minne seuraavaksi:** kurssitason säännöt kuuluvat [[course-ai-policy|kurssin tekoälylinjaukseen]]; arvioinnin uudelleenrakennusta käsittelee [[redesign-assessment-ai-era|arvioinnin uudelleensuunnittelu tekoälyaikana]]; sen alla olevaa nojautumisen ongelmaa [[reducing-over-reliance|liiallisen nojautumisen vähentäminen]]; opettajan työmääriä ja sitä, mitä tekoäly realistisesti poistaa, [[ai-save-instructor-time|tekoäly opettajan ajan säästäjänä]]; ja suunnittelutason näkymää tekoälyn upottamisesta oppimiskokemukseen [[designing-ai-into-learning|tekoälyn suunnitteleminen oppimiseen]].
