---
title: "Mitkä ovat 10 keskeistä löydöstä tekoälyn koulutustutkimuksesta, jotka opettajan pitäisi tietää?"
created: "2026-08-24T09:42:00-04:00"
updated: "2026-11-14T18:10:00-05:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
contributors: [editor]
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Nämä kymmenen tutkimusta liittyvät suoraan päätöksiin, joita kouluttajat tekevät: mitä annetaan tehtäväksi, miten sitä arvioidaan, mitä työkaluja hankitaan, miten ne rakennetaan ja miten tiedetään, tapahtuiko oppimista. Jokainen merkintä esittää tutkimuksen, sen tuloksen ja käytännön, jota se muuttaa.

## Kymmenen tutkimusta

**1. Pelkkä chatbotin käyttömahdollisuus laski koepisteitä 17% ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Lähes 1 000 lukio-opiskelijaa Turkissa, noin 50 luokassa, kävi läpi kolme matematiikan istuntoa samalla sisällöllä. Yhdellä ryhmällä oli harjoittelun aikana pelkkä GPT-4-keskusteluikkuna. Yhdellä oli samalle mallille rakennettu ohjaaja, jossa oli opettajan kirjoittamat [[guardrails|suojakaiteet]]: vihjeitä vastausten sijaan, ja oikea ratkaisu sekä tavalliset virheet upotettuina kehotteeseen. Kontrolliryhmällä ei ollut tekoälyä. Jokainen istunto päättyi [[summative-assessment|suljetun kirjan kokeeseen]], jossa oli samankaltaisia tehtäviä ja työkalu oli poissa.

Pelkän chatin ryhmä sai harjoittelussa 48% kontrollia paremman tuloksen ja kokeessa 17% kontrollia heikomman. Opiskelijat, jotka eivät koskaan koskeneet tekoälyyn, pärjäsivät heitä paremmin. Suojakaiteiden ryhmä paransi harjoittelussa 127% ja oli kokeessa tasoissa. Haitta katosi, eikä sen tilalle tullut oppimisetua. Keskustelulokit selittävät eron: ryhmä ilman suojakaiteita pyysi vastauksia ja lopetti, kun taas suojakaiteiden ryhmä yritti tehtäviä, pyysi vihjeitä ja paransi ensimmäisen istunnon aikana.

Kouluttajille "tekoäly sallittu" ei ole linjaus. Käyttöliittymä päättää, muuttuuko työkalu vihjekanavaksi vai vastauskoneeksi, ja yleinen chatbot valitsee jälkimmäisen. Harjoittelun ajaksi auki jätetty keskusteluikkuna maksaa niille opiskelijoille, jotka nojaavat siihen eniten.

Hallinto voi asettaa saman tuloksen hankintaväitettä vastaan: että vahvempi malli korjaa pedagogiikan. Malli oli molemmissa haaroissa sama.

Katso myös: [[training-ai-tutors-to-guide-rather-than-answer|Ohjaajan kouluttaminen ohjaamaan vastaamisen sijaan]]

**2. Kurssin omaan pedagogiikkaan rakennettu ohjaaja voitti aktiivioppimisen luokan lyhyemmässä ajassa ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2 on Harvardin johdantokurssi fysiikkaan biotieteiden pääaineopiskelijoille. Syksyllä 2023 194 opiskelijaa ristikkäisessä kokeessa kävi kaksi oppituntia kahdesti, kerran kurssin [[active-learning|aktiivioppimisen]] luokassa ja kerran kurssille rakennetun ohjaajan kautta, ja kummankin version ympärillä oli ennakko- ja jälkitestit.

Opiskelijat oppivat enemmän ohjaajan kanssa. Jälkitestin mediaani oli 4.5 vastaan 3.5, [[learning-gains|oppimisvoittojen]] mediaani oli yli kaksinkertainen luokkaan verrattuna, ja efektin kvantiiliestimaatit vaihtelivat 0.73:sta 1.3 keskihajontaan. He viettivät ohjaajan kanssa mediaaniltaan 49 minuuttia vastaan noin 60 minuuttia luokassa, ja 83% arvioi sen selitykset yhtä hyviksi tai paremmiksi kuin opettajiensa. Sitoutumisen ja motivaation arviot nousivat. Nautinto ja kasvun asenne eivät eronneet.

Tulos lepää suunnittelussa. Ohjaaja toteutti samat liikkeet kuin luokka: ratkaistut esimerkit, asteittaiset vihjeet, itse selittämisen kehotteet ja järjestys, joka seuraa fysiikan oppimista koskevaa tutkimusta. Vertailu tehtiin aktiivioppimiseen, ei luentoon, joten tavallinen vastaväite, että mikä tahansa voittaa luennon, ei päde.

Opetuksen kehittäjillä on tässä vahvin käytettävissä oleva argumentti siitä, että ohjaajan suunnittelu on opetussuunnitelmatyötä eikä hankintaa. Tuotetiimeille rima on konkreettinen: vastata aktiivioppimisen luokkaa lyhyemmässä ajassa samoilla opetuksellisilla liikkeillä.

Katso myös: [[developing-ai-tutor|Parhaat käytännöt tekoälyohjaajan kehittämiseen]]

**3. Tekoälyohjaus vastasi asiantuntevia ihmisohjaajia ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

StudentBench yhdisti 2 469 ohjaustuokiota 2 383 GRE:hen valmistautuvan aikuisen kanssa käyttäen 13 tekoälyohjaajaa, jotka oli rakennettu 12 mallille, eläviä ihmisohjaajia ja videokontrollia. Tulos oli oppimisvoitto kvantitatiivisissa ja verbaalisissa tehtävissä.

Yhdistetty tekoälyohjaus oli tilastollisesti vastaavaa asiantuntevan ihmisohjauksen kanssa, neljänneskeskihajonnan sisällä, ja molemmat voittivat kontrollin noin kuudella prosenttiyksiköllä: 6.86 kvantitatiivisessa ja 5.47 verbaalisessa, eli suunnilleen puolitoista kahteen lisää oikeaa vastausta osiota kohden. Tekoälyohjaajat arvioitiin heikommiksi tuntisuunnittelussa ja harjoitustehtävien luomisessa, missä ihmisohjaajat olivat parempia.

Hallinnolle henkilöstöaritmetiikka muuttuu hyvin määritellyssä koewalmennuksessa. Kun lisensoitu ohjaaja vastaa ihmisohjaajaa neljänneskeskihajonnan sisällä, päätös koskee kustannuksia ja kattavuutta, ja tehokkuus lakkaa olemasta kysymys. Tutkijat huomauttavat rajan: vastaavuus ei ole paremmuutta, ja standardoitu koe on koneelle helpoin tulos vastata.

Opetuksen kehittäjät voivat katsoa, missä ihmisohjaajat säilyttivät etunsa: sen diagnosoimisessa, mitä oppija tarvitsee seuraavaksi, ja siitä seuraavan järjestyksen rakentamisessa.

Katso myös: [[intelligent-tutoring|Älykäs ohjaus]]

**4. Muistiinpanojen kirjoittaminen voitti chatbotilta kysymisen kolme päivää myöhemmin ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes ja kollegat tekivät esirekisteröidyn kokeen seitsemässä englantilaisessa toisen asteen koulussa. 405 10. vuosiluokan opiskelijaa kävi läpi kaksi kolmesta ehdosta historiatekstin parissa: chatbot, joka saattoi vastata sitä koskeviin kysymyksiin, muistiinpanojen teko tai molemmat. Kolme päivää myöhemmin he tekivät suljetun kirjan kokeet kirjaimellisesta muistamisesta, ymmärtämisestä ja [[retrieval-spacing-interleaving|vapaasta mieleenpalautuksesta]].

Muistiinpanot voittivat chatbotin kaikilla kolmella mittarilla, noin puolen keskihajonnan verran muistamisessa ja lähes neljän kymmenesosan verran ymmärtämisessä. Muistiinpanot ja chatbot voittivat pelkän chatbotin kahdessa kolmesta eivätkä tehneet mitään vapaan mieleenpalautuksen hyväksi, ja pelkät muistiinpanot olivat vahvempia kuin yhdistelmä. Yhdistetyssä ehdossa noin neljännes opiskelijoista kopioi chatbotin tuotoksen muistiinpanoihinsa. Opiskelijat arvioivat chatbotin edelleen helpommaksi, hyödyllisemmäksi ja miellyttävämmäksi kuin kirjoittamisen.

Kouluttajilla on tässä suoraa näyttöä siitä, että lukemisen avustaja voi korvata lukemisen. Jos tehtävän tarkoitus on ymmärtää tekstiä, [[writing-education|kirjoittaminen on ymmärtämistä]], ja työkalu, joka vastaa tekstistä esitettyihin kysymyksiin, poistaa harjoittelun. Pidä muistiinpanot. Jos sallit chatbotin, pyydä jotain, mitä se ei voi tarjota: vertailu, tekstin haastaminen tai tiivistelmä, joka kirjoitetaan työkalun sulkemisen jälkeen.

Katso myös: [[ai-support-reading-comprehension|Tekoälyn tuki luetun ymmärtämiselle]]

**5. Opiskeluaika laski 27%, ja muistaminen laski sen mukana ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

ALEKS-alustan kymmenen vuoden paneeli, joka kattaa 3.2 miljoonaa oppimisvuorovaikutusta ja 12.2 miljoonaa sijoitteluarvoinnin vastausaikaa, näyttää, mitä opiskelijat tekivät ChatGPT:n saavuttua. Asetelma vertaa tehtävätyyppejä, jotka voi liittää chatbotiin (tekstipohjaiset sanalliset tehtävät), tyyppeihin, jotka vaativat kaavion käsittelyä alustan sisällä, saman opetussuunnitelman puitteissa.

Aika tekoälylle alttiissa tehtävissä laski 2.8% vuosineljänneksessä korkeakouluopiskelijoilla, 26.9% yhdentoista vuosineljänneksen aikana. Lukio-opiskelijoilla lasku oli 31.3%, yläkoulussa 9.0%, ja viidesluokkalaisilla ei havaittu muutosta. Lasku katosi kokonaan [[remote-proctoring|valvonnan]] alla, mikä on ratkaiseva testi: kun työkalu ei ollut käytettävissä, opiskelijat käyttivät vanhan määrän aikaa. Valvotut muistamistehtävät osoittivat 25%:n kumulatiivisen laskun oikean vastauksen todennäköisyydessä.

Ikägradientti on suunnittelusignaali tuotetiimeille. Harjoitteluaika on muuttuja, joka liikkuu, ja se liikkuu eniten siellä, missä tehtävä on helpoin antaa pois. Kouluttajille tehtävässä vietetty aika on halpa varhainen varoitus: kohortti, joka tekee samat tehtävät paljon nopeammin, ei todennäköisesti opi samaa asiaa.

Katso myös: [[reducing-over-reliance|Tekoälyyn liiallisen tukeutumisen vähentäminen]]

**6. Kotitehtävien pisteet nousivat 18% samalla kun suljetun kirjan kokeet laskivat 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

26 811 opiskelijaa luokilla 7-12 Kiinassa, seurattuna 30 kuukautta, ja generatiivinen tekoäly otettiin käyttöön eri aikoina kohorteittain. Kotitehtävien pisteet nousivat 18% ja suoritusaika laski 30%, 64 minuutista 45 minuuttiin. Kuukausittaiset suljetun kirjan kokeet laskivat 20% lähtötason keskiarvosta kuuden kuukauden sisällä, ja korkean panoksen pääsykokeet laskivat 18%:sta 24%:iin noin kahden vuoden jälkeen.

Ajoitus näyttää mekanismin. Noin 81% tekoälyn käyttäjistä teki kotitehtävät nopeammin kuin nopein tekoälyä käyttämätön opiskelija ja pärjäsi sitten kokeissa huonosti. Vähemmistö, joka piti kotitehtäväajan vertailukelpoisena käyttämättömien kanssa, oppi yhtä hyvin kuin kuka tahansa. Tappiot olivat suurimmat yhteiskuntatieteissä, sitten STEM-aloilla ja sitten kielissä, ja suuremmat hyvin pärjäävillä opiskelijoilla.

Kotitehtävien suorittaminen on huono oppimisen mittari, ja ero näkyy kuuden kuukauden sisällä, kauan ennen kuin pääsykokeiden tulokset liikkuvat. Kouluttajat voivat toimia aikaisemmin: pidä arvosteltava näyttö suljetun kirjan muodossa ja kohtele kotiin vietävää työtä harjoitteluna, jonka suoritusaika on näkyvissä.

Katso myös: [[checking-whether-educational-ai-works|Sen tarkistaminen, toimiiko koulutustekoäly]]

**7. Jokainen testattu ohjaaja epäonnistui pedagogiikassa, ja epäonnistui pahemmin keskustelun edetessä ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

SafeTutors testasi 11 ohjaajaa, 3.8B:n ja 72B:n avoimien painojen malleista sekä GPT-5-mini, matematiikassa, fysiikassa ja kemiassa, 11 ulottuvuuden ja 48 alariskin taksonomiaa vasten, joka oli johdettu [[learning-theories|oppimistieteestä]]. Sen epäonnistumisluokat ovat pedagogisia: vastausten liiallinen paljastaminen, väärinkäsitysten vahvistaminen ja [[scaffolding|tukemisen]] hylkääminen. Jokainen näistä näyttää hetkessä hyödylliseltä, koska opiskelija saa nopeasti oikean vastauksen.

Jokainen malli osoitti laajaa pedagogista haittaa. Suuremmat mallit eivät olleet luotettavasti turvallisempia, ja yleinen avuliaisuus korreloi vain heikosti pedagogisen turvallisuuden kanssa. Haittojen osuus nousi 17.7%:sta yksittäisen vuoron vaihdossa 77.8%:iin viiden tai kahdeksan vuoron keskusteluissa.

Yhden vuoron arvioinnit eivät ole näyttöä turvallisesta ohjaajasta, ja tuotetiimien pitäisi suunnitella testauksensa sen mukaisesti. Malli, joka läpäisee kertaluonteisen avuliaisuuden ja turvallisuuden tarkistuksen, voi epäonnistua suurimmassa osassa todellista keskustelua. Ohjaajaa ostavat hallinnot tarvitsevat kolme vastausta: pidättääkö se ratkaisut, koetteleeko se väärinkäsityksiä ja kestääkö se istunnon ajan. Yhden vaihdon myyntiesittely ei anna yhtäkään niistä.

Katso myös: [[pedagogical-safety|Pedagoginen turvallisuus]]

**8. Väärinkäyttötapaukset nojaavat ohuempaan näyttöön kuin syytökset antavat ymmärtää ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz ja kollegat koodasivat jokaisen generatiiviseen tekoälyyn liittyvän väärinkäyttötapauksen yhdessä australialaisessa yliopistossa kolmen vuoden ajalta: 1 162 tapausta, joissa oli 1 855 näyttökohtaa, kukin arvioitu relevanssin, uskottavuuden ja päättelyvoiman mukaan.

Generatiiviseen tekoälyyn liittyvät syytökset nousivat 11.9%:sta väärinkäyttötapauksista vuonna 2023 36.9%:iin vuonna 2025, kun taas tapausten kokonaismäärä pysyi samana. 58 tapausta, 5% generatiivisen tekoälyn kokonaismäärästä, perustui pelkkään väitteeseen ilman yhtään näyttökohtaa. Tunnistimien tuotos oli harvinaista ja heikkoa: Turnitinin tai samankaltaisuusraporttien päättelyvoima oli olematon 73 kohdassa, ja pelkän GPTZero:n tuotoksen uskottavuus oli alhainen 69 kohdassa. Vahvin näyttö tuli tutkinnasta eikä syytöksestä, ja suullisia myönnytyksiä haastattelussa oli 410 kohdassa, joista 97.2% vahvoja. [[hallucination-risk|Keinotekoiset viitteet]] olivat suurin rakenteellinen muutos, 22.3% kohdista, ja ne nousivat 10.4%:sta vuonna 2023 30.0%:iin vuonna 2025.

Hallinnolle opetus on menettelyllinen. Tunnistimen pistemäärään rakennettu tapaus ei kestä valitusta, ja tutkinta, joka alkaa työkalusta eikä haastattelusta, tuottaa heikkoja asiakirjoja. Kouluttajat voivat toimia artefaktin pohjalta, joka toistuu: keinotekoiset viitteet ovat yleisiä, ja viitteen tarkistaminen on halpaa.

Katso myös: [[should-we-use-ai-detectors|Tekoälyntunnistimien käyttö]]

**9. Opettajien luottamus omaan tekoälylukutaitoonsa hädin tuskin seuraa mitattua taitoa ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 perus- ja toisen asteen opettajaa täytti itsearviointikyselyn tekoälylukutaidosta ja objektiivisen suoritusmittarin, joka oli rakennettu samalle viitekehykselle: käsite, käyttö, arviointi ja etiikka. Näiden kahden korrelaatiot vaihtelivat 0.07:stä 0.24:ään.

Latentti profiilianalyysi löysi kuusi ryhmää. 43 opettajaa arvioi itsensä johdonmukaisesti korkealle mutta sai objektiivisessa mittarissa matalampia pisteitä. 59 osoitti päinvastaista. Loput keskittyivät keskiarvon lähelle tai jakautuivat aiemman tekoälykokemuksen mukaan.

Opetuksen kehittäjille [[self-assessment|itsearviointi]] ei ole tarveanalyysi. Kysely, joka kysyy opettajilta, kuinka luottavaisia he ovat, rahoittaa liikaa luottavaisia ja palvelee liian vähän hiljaisia, eivätkä nämä ryhmät ole pätevät ja vaikeuksissa olevat. Lyhyet suoritustehtävät erottavat ne. Tutkijoiden pitäisi kohdella matalia korrelaatioita mittausvaroituksena: mikä tahansa [[ai-literacy|tekoälylukutaitoa]] koskeva tutkimus, joka perustuu [[self-report-measures|itsearviointiin]], mittaa luottamusta.

Katso myös: [[faculty-development-ai|Käytäntöä muuttava opettajankehitys]]

**10. Tekoälypisteytys rankaisee opiskelijoita, jotka kirjoittavat heikommin ([[ai-scoring-language-bias-physics|Feser ja Tschisgale, 2026]]).**

116 toisen asteen opiskelijan fysiikkaselitykset pisteytettiin 9 koneoppimismenetelmällä ja 2 suuren kielimallin menetelmällä ja verrattiin sitten asiantuntijoiden ihmispisteisiin. Yhdenmukaisuus asiantuntijoiden kanssa vaihteli 67.2%:sta 78.4%:iin, mikä kuulostaa hyväksyttävältä, kunnes virheet eritellään.

Jokainen menetelmä aliarvioi käsitteellistä ymmärtämistä heikomman kielellisen laadun selityksissä. Harha kulki yhteen suuntaan: vahvempaa kirjoittamista ei liioiteltu. Kuvio vastaa sitä, mitä on raportoitu fysiikan opettajista itsestään, mikä viittaa siihen, että vaikeus on ymmärtämisen päättelemisessä proosasta, yhtä lailla ihmisille kuin malleille.

Arviointihenkilöstön ja tuotetiimien on raportoitava aliarviointiasteet kielellisen laadun mukaan, ei vain kokonaisyhdenmukaisuutta asiantuntijoiden kanssa, koska keskiarvo kätkee vahingoittuvan ryhmän. Jokaisen, joka pisteyttää [[multilingual-learning|monikielisiä oppijoita]], kannattaa ohjata heikon kielellisen laadun vastaukset [[human-in-the-loop-ai|ihmisarviointiin]] tai suunnitella tehtäviä, jotka eivät riipu proosasta.

Katso myös: [[ai-grading-fairness-reliability|Oikeudenmukainen ja luotettava tekoälyarviointi]]

## Mitä yhteistä kymmenellä on

Kolme tutkimuksista mittaa kahta asiaa samanaikaisesti: mitä opiskelijat tuottavat työkalun kanssa ja mitä he osaavat ilman sitä. Bastani, Rismanchian ja Strömberg havaitsevat kaikki, että nämä eroavat, ja vain ilman apua tehty mittaus käyttäytyy kuin oppiminen. Neljä kääntyy suunnitteluvalinnan eikä mallin ympärille: Bastanin suojakaiteet, Kestinin ohjaajaan rakennettu pedagogiikka, kirjoittaminen, jonka Kreijkes piti tehtävässä, ja monivuoroinen asetelma, jota SafeTutors testasi. Kolme tarkastelee työkalun ympärillä olevaa järjestelmää, eli väärinkäyttötapauksissa käytettyä näyttöä, tapaa mitata opettajan osaamista ja [[automated-assessment|automaattisen pisteytyksen]] kielellisiä oletuksia. StudentBench osoittaa vastaavuuden standardoidussa kokeessa, ainoassa tuloksessa, jossa kone voi helpoimmin vastata ihmistä. Bastani esiintyy kahdessa ryhmässä, koska se tarjoaa sekä eron että suunnittelukorjauksen.

Jäljelle jää kolme kysymystä, jotka kannattaa kantaa mihin tahansa kurssi- tai tuotepäätökseen. Mitä opiskelijan pitäisi osata, kun työkalu on poissa? Mitä toiminta pyytää häneltä, kun se on auki? Mikä näyttö osoittaisi eron kuukautta myöhemmin?

## Missä tämä näyttö on ohutta

Nämä tutkimukset jakavat [[limitations-in-aied-research|tekoälykoulutuksen tutkimuksen rajoitukset]] kokonaisuutena. Kaksi suurimmista on tehty Turkissa ja Kiinassa, kolme Yhdysvalloissa, yksi Englannissa, yksi Australiassa ja pisteytystutkimus Saksassa. Yksi on kaupallisten mallien vertailu eikä kenttätutkimus. Toisen asteen matematiikka hallitsee, ja seuraavina tulevat fysiikka ja tietojenkäsittely. Hyvin harvat tutkimukset tarkastelevat [[humanities-education|humanististen alojen kirjoittamista]] laajassa mitassa, ammatillista koulutusta tai opiskelijoita, joilla on vammoja.

Vain kiinalainen paneeli ja ALEKS-paneeli seuraavat opiskelijoita yli kaksi vuotta käyttöönoton jälkeen, ja kiinalaiset kirjoittajat väittävät, että lyhyemmät tutkimukset aliarvioivat järjestelmällisesti pitkän aikavälin haittaa. Kuusi näistä tuloksista on esipainoksia tai työpapereita, jotka eivät ole läpäisseet vertaisarviointia: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang ja Feser. Bastanin, Kestinin, Kreijkesin ja Munozin tutkimukset on julkaistu vertaisarvioiduissa lehdissä.

Nolla- ja negatiiviset tulokset ovat tässä kirjallisuudessa harvinaisia, joten julkaistu aineisto todennäköisesti liioittelee sitä, kuinka usein tekoäly auttaa. Nämä tutkimukset ovat paras nykyinen ohje kymmeneen päätökseen, eikä mikään niistä ratkaise kysymystä.

## Minne seuraavaksi

[[does-ai-help-students-learn|Auttaako tekoäly opiskelijoita oppimaan?]] on laajempi näyttökatsaus näiden väitteiden takana. [[redesign-assessment-ai-era|Miten arviointi pitäisi suunnitella uudelleen tekoälyn aikakaudelle?]] vie arviointiosuutta pidemmälle. Rehellisyyteen liittyviä tapauksia varten [[reduce-ai-cheating|Miten vähennän tekoälyhuijausta?]] käsittelee prosessinäyttöä ja linjauksia. Ammatillisen kehittämisen löydöksiä varten [[faculty-ai-competencies|Mitä tekoälyosaamista opettajat tarvitsevat?]] on kumppanisivu, ja [[addressing-common-misconceptions-ai-education|Miten voimme käsitellä yleisiä väärinkäsityksiä tekoälystä koulutuksessa?]] hoitaa vastaväitteet, joita todennäköisesti kuulet kollegoilta.
