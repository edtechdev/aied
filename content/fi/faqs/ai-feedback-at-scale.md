---
title: "Miten tekoäly voi auttaa minua antamaan parempaa palautetta suuressa mittakaavassa?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/ai-feedback-at-scale
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

On kuudes viikko. Sinulla on pino luonnoksia, rubriikki, johon uskot, ja kasvava epäilys siitä, että kolmannes kommenteistasi silmäillään ja unohdetaan. Kollega mainitsee, että työkalu kommentoi nyt jokaisen luonnoksen tunnin sisällä. Laitoksen kokous tarvitsee vastauksen: onko tämä parannus vai nopeampi tapa tuottaa tekstiä, jota kukaan ei lue?

Lyhyt vastaus kollegalle: tekoälypalaute ansaitsee paikkansa kattavuudessa, oikea-aikaisuudessa ja johdonmukaisuudessa, kapealla kaistalla. Oikolukuluokan kielityö ja rubriikkiohjatut ensikommentit kannattaa automatisoida. Kattavuus on se halpa osa. Klusterisatunnaistetussa kokeessa, jossa oli 1 176 ensimmäisen vuoden opiskelijaa, reflektoivat ja hybridisuunnitelmat voittivat suoran tekoälykritiikin viivästetyssä, ilman tekoälyä tapahtuvassa [[transfer-of-learning|siirtämisessä]]. Satunnaistetussa esseekokeessa 70 opiskelijan kanssa paremmin arvioitu tekoälypalaute ei tuottanut parempia revisioita kuin kokeneen opettajan palaute. Se, mitä opiskelija tekee kommentilla, ratkaisee lopputuloksen, ja [[feedback-literacy|palautelukutaito]] erottaa ne opiskelijat, jotka hyötyvät, niistä, jotka kopioivat.

## Lyhyt versio

**1.** Päätä, mikä lasketaan voitoksi, ennen kuin pilotoit mitään: revisioiden laatu ja viivästetty suoriutuminen ilman apua, ei kommenttien sujuvuus.

**2.** Lajittele omat kommenttisi kielitason korjauksiin ja harkintatason kannanottoihin. Vain ensimmäinen luokka on automaation ehdokas.

**3.** Porrasta lähteet. Itsearviointi ensin, vertaispalaute toiseksi, tekoälykritiikki kolmanneksi. Kaksi rinnakkain asetettua lähdettä tuottaa passiivisen omaksumisen.

**4.** Anna mallille rubriikkisi ja pakota se päättelemään vaihe vaiheelta. Pelkkä kehote tuottaa yleistä tuotosta.

**5.** Pidä lopullinen viesti, sävy ja kaikki tietueeksi jäävä ihmisellä.

**6.** Budjetoi tunnit, jotka käytät poistamiseen ja kalibrointiin, ja vertaa niitä tunteihin, jotka vapautit.

## Päätä, mikä lasketaan voitoksi, ennen kuin pilotoit mitään

Houkutteleva mittari on sen laatu, mitä malli kirjoittaa. Se on myös mittari, joka johtaa harhaan.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]] satunnaistivat 70 opiskelijaa, jotka kirjoittivat argumentoivia esseitä persiaksi, kolmeen ryhmään. Ketjuajattelukehote tuotti merkitsevästi korkeammalle arvioitua palautetta (M = 12,90) kuin zero-shot-kehote (M = 11,25, p = 0,01) ja kuin kokenut inhimillinen opettaja (M = 11,20, p = 0,008). Ketjuajatteluryhmä ei muokannut esseitään merkitsevästi enempää kuin opettajapalauteryhmä, joka saavutti vertailukelpoiset hyödyt. Paremmat kommentit, samat revisiot. Jos onnistumiskriteerisi on kommenttien laatu, tuo tutkimus näyttää voitolta. Jos se on se, mikä esseessä muuttui, se ei näytä.

Kaksi muuta signaalia imartelevat pilottia, joka menee huonosti, joten korjaa ne etukäteen. Opiskelijoiden tyytyväisyys on yksi. [[tubino-adachi-ai-automated-feedback-literacy|Tubino ja Adachi (2022)]] raportoivat koko yliopiston Deakin-pilotin, jossa positiiviset keskiarvot olivat samaan aikaan opiskelijoiden merkitsemien virheiden kanssa, joten hymiökysely ei ole näyttöä tarkkuudesta. Käyttö on toinen. Deakinin työkalu oli valinnainen, ja käyttö oli keskimäärin noin 13 % kandidaateista ja 12 % jatko-opiskelijoista, vaikka lähes 4 000 opiskelijalla oli pääsy siihen. Oma-aloitteiset, hyvin suoriutuvat opiskelijat käyttivät sitä enemmän. Sen verran työkalun saataville asettaminen tuo.

Kestävä tulosmittari on revisioiden laatu ja viivästetty suoriutuminen ilman tekoälyä. Useat saman päivän uudelleenpalautukset ovat käyttökelpoinen jälki siitä, sitoutuiko opiskelija lainkaan. Ne eivät ole näyttöä siitä, että jotain opittiin.

## Lajittele kommenttisi ennen kuin automatisoit ne

Ota viimeisin kommenttisarjasi ja jaa se kahtia: lauseiden korjauksiin ja ajattelua koskeviin kannanottoihin. Jako kertoo, mitä automatisoida, ja se on kapeampi kuin myyjät antavat ymmärtää.

Deakinin pilotti toteutettiin vuonna 2021 FeedbackFruitsin tekoälypohjaisella automaattisen palautteen työkalulla 29 opintojaksolla ja lähes 4 000 opiskelijalla. Se toimii mikrotason tekstipiirteillä: virkkeen pituus, välimerkit, kielioppi, tekstin rakenne. Se tukee oikolukuvaihetta, jossa opettaja asettaa parametrit, opiskelija käyttää työkalua itsenäisesti ja palaute saapuu ajoissa, jotta siihen voi reagoida. Työnjako skaalautuu, ei malli.

Harkintatason kommenteissa ovat ne epäonnistumistavat. [[learner-centered-feedback-ai|Aldino et al. (2026)]] keräsivät opettajapuolen ongelmia 21 korkeakouluopettajalta: epäjohdonmukainen sävy (n = 7), mahdollinen virheellinen tieto (n = 5) ja luottamusongelmat (n = 5). Heidän revisiontinsa kohdistui liioitellun kehun ja yleisten ehdotusten poistamiseen sisällön lisäämisen sijaan. Tuo luettelo on sinun tarkastustyösi, ja sinne tunnit menevät.

## Porrasta lähteet sen sijaan, että pinoat ne

Vahvin suunnittelunäyttö tulee monipaikkaisesta, klusterisatunnaistetusta pitkittäisestä kenttäkokeesta: 1 176 ensimmäisen vuoden opiskelijaa 48 ryhmässä 4 yliopistossa ja 3 [[stem-education|STEM]]-alalla, satunnaistettuna ryhmätasolla vain vertais-, suoraan GenAI-, reflektoivaan GenAI- ja hybridiehtoon ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

Reflektoiva ehto vaati itsearvioinnin ennen tekoälykritiikkiä. Hybridi eteni itsearvioinnista vertaispalautteeseen ja sitten GenAI-kritiikkiin. Hybridi tuotti suurimmat argumentin laadun hyödyt ja selvimmän edun käsitteellisessä oppimisessa. Reflektoiva ja hybridi tuottivat molemmat vahvempaa palautteen omaksumista ja enemmän [[self-regulated-learning|itsesäätelyä]] kuin suora GenAI, ja molemmat päihittivät sen viivästetyssä siirtämisessä ilman tekoälyä. Suora GenAI nosti välitöntä argumentin laatua vertaispalautteen yläpuolelle, mikä on sen etu, ja se teki sen heikommalla siirtämisellä.

Mekanismi selittää, miksi järjestyksellä on enemmän väliä kuin työkalulla. Suora kritiikki kutsuu passiiviseen omaksumiseen: opiskelija lukee tuomion ja soveltaa sitä. Reflektoivat ja hybridisuunnitelmat pakottavat opiskelijan tulkitsemaan kommentin, vertaamaan sitä kriteereihin, arvioimaan sen osuvuutta ja sitten muokkaamaan. Koulutuksellinen arvo riippuu vähemmän tekoälypääsystä kuin siitä, säilyttääkö palauteympäristö [[agency|oppijan toimijuuden]] ja [[evaluative-judgment|arvioivan harkinnan]] revisioinnin aikana.

Vertaispalaute ansaitsee oman paikkansa sarjassa. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen ja Yan (2026)]] veivät kahta rinnakkaista englannin kurssia (N = 118 ensimmäisen vuoden opiskelijaa Kiinassa; GenAI n = 56, vertaiset n = 62) kolmen itsearviointikierroksen läpi yhden lukukauden aikana. GenAI:n tukeminen paransi palautelukutaitoa hieman mutta merkitsevästi inhimilliseen vertaisarviointiin verrattuna (ANCOVA p = 0,049, ηp² = 0,03). GenAI-opiskelijat hioivat kehotteita iteratiivisesti ja tarkistivat tai haastoivat epätarkan tuotoksen. Vertaisryhmän opiskelijat valitsivat lähteet sosiaalisen mukavuuden perusteella, ja heidän arvioivaa harkintaansa vääristi ystävyysharha. Vertaisarvioinnilla säilyi oma arvonsa yleisötietoisuudessa, minkä vuoksi kirjoittajat ehdottavat monivaiheisia suunnitelmia, joissa on anonyymi vertaispalaute, eivätkä korvaamista.

Gun et al.:n etu oli pieni, ja he lukevat sen todelliseksi mutta eivät yksinään mullistavaksi. Opettajan tukeminen, kehoteohjeet ja työarkit tekivät tukityön.

## Anna mallille rubriikki ja pakota se näyttämään vaiheensa

Rubriikkiin viittaava tuottaminen on se automatisoitava osa.

Farrokhnia et al.:n laadun parannus tuli ketjuajattelukehotteesta, joka kuljetti mallia vaiheittaisen arvioinnin läpi argumentaation rubriikkia vastaan, eikä pelkästä pyynnöstä antaa palautetta. Gu et al. antoivat GenAI-ryhmälleen ChatGPT-4o:n esikoulutetuilla rubriikeilla ja kehoteohjeilla, mikä teki tuotoksesta tarkistettavan suhteessa esitettyihin kriteereihin. Molemmissa tapauksissa kehote on se, missä kriteerisi astuvat järjestelmään, ja päättelyjälki on se, mikä näyttää, sovelsiko malli niitä.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson ja Yan (2025)]] tekevät kehotteen laadusta koko prosessin saranan. Epämääräiset kehotteet tuottavat yleistä, hyödytöntä tuotosta, ja tuotetut kommentit voivat olla hallusinoituja, vinoutuneita tai päällekkäisiä, mikä työntää arvioivan harkinnan takaisin lukijalle. Kalibrointi on vielä terävämpää. Farrokhnia et al.:ssa GenAI-palautteen laatu oli merkitsevästi yhteydessä opiskelijan alkuperäisen luonnoksen vahvuuteen, kun taas opettajan palautteen laatu ei ollut. Opettaja kalibroi johdonmukaisemmin. Volyymi skaalautuu. Kalibrointi ei.

## Pidä viimeinen sana ja tietue ihmisellä

[[becerra-aicofe-feedback-2026|Becerra, Palma ja Cobos (2026)]] kuvaavat AICoFEn, joka ajaa kolmea itsenäisesti hienosäädettyä mallia (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) rubriikkipisteiden ja kvalitatiivisten havaintojen yli itsenäisten luonnoskommenttien tuottamiseksi. Opettaja kokoaa sitten lopullisen viestin valitsemalla lauseita tai kappaleita, ja selite näyttää, mikä malli tuotti mitäkin. Malli luonnostelee. Opettaja toimittaa, ja toimituksen allekirjoittaa yksi henkilö, joka luki luonnoksen.

Aldino et al. löytävät saman avusta ja sitten varmista -kaavan tavallisesta käytännöstä. Koneoppimiskomponentti merkitsi useimmin puuttuvaksi kohdan ”Meeting Learning Objective” (20 opettajaa 21:stä oli jättänyt sen pois; 16 hyväksyi merkinnän) ja kohdan ”Student-Teacher Relationship” (14 jätti pois; 12 hyväksyi). Opettajat päättivät jokaisesta ehdotuksesta ammatillisen harkinnan pohjalta, mikä on koko syy pitää heidät silmukassa.

Kaksitoista Aldino et al.:n 21 opettajasta teki lisää lausetason revisioita, ja hallitseva kaava oli sävyn kalibrointi: kehun pienentäminen (f = 11), ehdotusten poistaminen (f = 9), kannustuksen poistaminen (f = 8). Revisiot keskittyivät relationaaliseen ulottuvuuteen, erityisesti Student-Teacher Relationship -kohtaan (f = 24). He suojelivat autenttisuutta ja ammatillista ääntä, eikä se työ automatisoidu.

## Opeta opiskelijat lukemaan kommentti

Palautelukutaito on edellytys, ja se on jakautunut epätasaisesti.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths ja Lodge (2026)]] antoivat 32 psykologian opiskelijan tehdä ruudun tallentaman 25 minuutin esseetehtävän rajoittamattomalla ChatGPT-pääsyllä ja katsoa sitten tallenteen läpi videostimuloidussa haastattelussa. Palautelukutaito oli esseen arvosanan ainoa merkitsevä positiivinen ennustaja (β = 0,46, p = 0,017). GenAI:n käytön tiheys, [[trust|lähteen luotettavuus]] ja [[prior-knowledge|aiempi tieto]] eivät ennustaneet suoriutumista, minkä huomion [[feedback-futures-genai|Zhan, Wood, Carless ja Yan (2026)]] toistavat teemanumeronsa pääkirjoituksessa. Alle kolmannes opiskelijoista vertasi tekoälyn tuotosta toiseen verkkolähteeseen. Puolet ilmaisi tarkoituksellista tekoälyn välttämistä [[academic-integrity|akateemisen rehellisyyden]] vuoksi tai siksi, että halusivat esseen omin sanoin. Useimmat pyysivät tehtävätason palautetta, joka siirtyy heikosti muihin tehtäviin.

Ääripäät näkyvät siinä IELTS-kirjoittajien parissa, jonka Zhan et al. kuvaavat. Matalan lukutaidon opiskelija kirjoitti epämääräisen kehotteen, sai yleistä palautetta, luotti siihen tai kopioi sen liikaa ja sitoutui pinnallisesti. Korkean lukutaidon opiskelija kirjoitti kriteereihin viittaavan kehotteen, jatkoi vuoropuhelua, ristiintarkisti lähteet ja seurasi revisioita. Ero oli ohjauksessa ja tottumuksessa, ei työkalupääsyssä.

Kerro opiskelijoille suoraan, että mallin kommentit voivat olla hallusinoituja, vinoutuneita tai päällekkäisiä, ja että revisio on opiskelijan vastuulla. Kehystä tuotos mielipideluonnokseksi, joka arvioidaan, eikä vastaukseksi, joka kopioidaan. Pyydä sitten vertailu, koska alle kolmannes opiskelijoista tekee sen oma-aloitteisesti.

## Mitä opettajat ymmärtävät tässä väärin

Enemmän kommentteja tarkoittaa enemmän palautetta. Kommentit ovat halpoja tuottaa ja kalliita omaksua, ja rajoite istuu silmukan opiskelijapuolella. Farrokhnia et al.:n korkeammalle arvioidut tekoälykommentit eivät tuottaneet enempää revisioita kuin opettajan kommentit.

Parempi malli korjaa yleisen tuotoksen. Deakinin työkalun epäonnistumiset olivat laajuuden epäonnistumisia: lausetason piirteet, kapea oikolukukaista. Zhan et al. sijoittavat korjauksen kehotteeseen, rubriikkiin tai ihmiseen, eivät suurempaan malliin. IELTS-kirjoittajien pari on se näyttö: sama työkalu, eri tottumukset, eri tulokset.

Työkalun saataville asettaminen on interventio. Käyttö oli noin 13 % kandidaateista ja 12 % jatko-opiskelijoista, kun työkalu oli valinnainen. Loppu suunnittelukysymyksestä on, mitä tapahtuu sille muulle 87 %:lle.

Ajan säästö on automaattinen. Kun 21 opettajalta kysyttiin, mitä tekoälypalautetyökalu heille antoi, vain harva nimesi ajan säästämisen (n = 2). He nimesivät reflektoinnin (n = 14), parantuneen kielen ja rakenteen (n = 11) ja puuttuvien osien tunnistamisen (n = 10) paljon useammin. Muokkaaminen (f = 32) ja poistaminen (f = 27) hallitsivat heidän revisiotyötään, kun lisääminen oli harvinaista (f = 8). Näkyviin tulee luonnos ja diagnostinen kehote. Näkyviin tulee myös tarkastus-, kalibrointi- ja verifiointityötä. [[ai-save-instructor-time|Työmääräkysymys]] on se, joka useimmin luvataan pois, ja GenAI jakaa opettajantyön uudelleen sen sijaan että poistaisi sen.

Tyytyväisyysarviot kertovat, että kommentit ovat tarkkoja. Deakinin pilotissa positiiviset keskiarvot olivat samaan aikaan opiskelijoiden merkitsemien virheiden kanssa. Ota näyte tuotoksesta oman luentasi rinnalle samoista luonnoksista ja kirjaa, missä malli oli yleinen, väärässä tai imarteleva.

## Mitä sinulle tullaan sanomaan

**”Tekoälypalaute ei ole henkilökohtaista.”** Usein totta, ja se on syy pitää viimeinen sana ihmisellä. AICoFE on olemassa, koska yleinen malliproosa ei ole sitä, mitä opiskelijan pitäisi saada: opettaja valitsee, muokkaa ja allekirjoittaa lopullisen viestin. Aldino et al.:n 21 opettajaa kirjoittivat sävyn uudelleen samasta syystä. Personointi on sinun työsi tässä suunnitelmassa, ja malli tekee valmistelutyön.

**”Opiskelijani eivät kuitenkaan lue palautetta.”** He lukevat vähemmän kuin toivomme, ja näyttö sanoo, että korjaus on suunnittelussa eikä volyymissa. Omaksuminen Deakinin pilotissa oli noin 13 % ja 12 %. Farrokhnia et al.:n korkeammalle arvioidut kommentit eivät tuottaneet lisärevisioita. Kehitystä sai aikaan järjestys, joka pakottaa sitoutumaan, itsearviointi, sitten vertaispalaute ja sitten tekoälykritiikki, sekä kolme revisiontikierrosta lukukauden aikana, jotka tuottivat mitattavia palautelukutaitoeroja.

**”Tämä ei ole se, mistä opiskelijat maksavat.”** Estä silloin se, että tekoälystä tulee ainoa ääni, jonka he sinulta kuulevat. Puolustettava versio antaa opiskelijoille enemmän palautteen hetkiä, kun sinä käytät tuntisi harkintavaltaisiin osiin: viimeinen sana, kalibrointi, kommentit, jotka kantavat auktoriteettisi. Sen, mitä opiskelijat menettävät huolimattomassa käyttöönotossa, on kriteerien, kommenttien ja lopputuloksen välinen koherenssi. Määrittele täydentävyys järjestyksen, vertailun, muokkaamisen ja hallinnan kautta, niin vastalause menettää voimansa. Jätä kaksi lähdettä rinnakkain, niin se ei sitä menetä.

**”Minulla ei ole aikaa tarkastaa kaikkea, mitä malli kirjoittaa.”** Älä silloin tarkasta kaikkea. Automatisoi kaista, jolla virheet ovat halpoja havaita, lausetason kielityö, ja ota näyte harkintatason tuotoksesta luonnoksista, jotka olet jo arvostellut. Aldinon luvut kertovat, mitä etsiä: sävy, virheellinen tieto, liioiteltu kehu, päällekkäisyys.

## Mitä tehdä tällä viikolla

**1.** Lajittele viimeisin kommenttisarjasi kielitason korjauksiin ja harkintatason kannanottoihin ja laske kumpikin pino.

**2.** Kirjoita rubriikkiin viittaava, vaiheittainen kehote, jonka antaisit mallille, ja testaa se kolmella luonnoksella, jotka olet jo arvostellut.

**3.** Ota näyte tuotoksesta omien kommenttiesi rinnalle ja kirjaa, missä malli oli yleinen, väärässä tai imarteleva.

**4.** Porrasta yksi tehtävä itsearvioinniksi, sitten vertaispalautteeksi ja sitten tekoälykritiikiksi, ja kerro opiskelijoille, että tekoäly on mielipideluonnos, jonka heidän odotetaan haastavan.

**5.** Pyydä yksi vertailu toiseen lähteeseen tai kriteereihin, koska alle kolmannes opiskelijoista tekee sen oma-aloitteisesti.

**6.** Kirjaa, kuinka paljon lopullisesta palautteesta tuli mallilta ja kuinka paljon muutit sitä. AICoFEn kuratoinnin seuranta on malli tuolle tietueelle.

**7.** Varo asiantuntija-noviiisi-jakoa. Yli viiden vuoden kokemuksen omaavat opettajat raportoivat työkalun tuotoksesta enemmän ongelmia kuin vähemmän kokeneet kollegat, jotka arvostivat tukemista. Jos kokeneemmat kollegasi näkevät enemmän epäonnistumisia kuin sinä, se on tietoa omasta kalibroinnistasi.

## Minne seuraavaksi

[[feedback|palaute]] on koko järjestelmän kattokäsite: tarjoaminen, silmukka, omaksuminen ja arviointikonteksti. [[ai-feedback-quality|Tekoälypalautteen laatu]] kattaa sen, mikä tekee tuotetuista kommenteista tarkkoja, hyödyllisiä, oikea-aikaisia ja pedagogisesti kestäviä, ja tämä sivu on se käytännön keskikohta, joka kertoo, mitkä noiden osien yhdistelmät tuottavat parempaa palautetta suuressa mittakaavassa.

Kysymykset siitä, mitä arvosanan pitäisi tarkoittaa, kun tekoäly on mukana, mukaan lukien konstruktin korvaaminen, todennettu prosessinäyttö ja rehellisyyssäännöt, kuuluvat sivuille [[redesign-assessment-ai-era|arvioinnin uudelleensuunnittelu tekoälyn aikakaudella]] ja [[assessment-validity|arvioinnin validiteetti]] eivätkä tänne. Kirjoittamisen opetuksen erikoistapauksesta katso [[writing-instruction-ai-best-practices|kirjoittamisen opetuksen parhaat käytännöt tekoälyn kontekstissa]].
