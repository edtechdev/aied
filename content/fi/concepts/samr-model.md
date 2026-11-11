---
title: "SAMR-malli"
created: "2026-09-10T09:50:00-04:00"
type: concept
foundations: [educational-development, learning-design, teacher-ai-competency]
technology: [ai-technologies, technology-acceptance-model]
page_kind: [framework]
audience: [instructors, curriculum designers, researchers]
level: [k 12, higher ed]
confidence: high
updated: "2026-11-08T06:59:36-05:00"
translation_of: "concepts/samr-model"
source_updated: "2026-11-02T09:55:00-05:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
pedagogy: [tpack]
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

> **SAMR-malli** — Ruben Puenteduran kehittämä teknologian integroinnin viitekehys, joka luokittelee sen, missä määrin teknologia muuttaa oppimista, neljälle tasolle: **Korvaaminen, Laajentaminen, Muokkaaminen ja Uudelleenmäärittely**. Kaksi alempaa tasoa (Korvaaminen, Laajentaminen) *parantavat* olemassa olevaa tehtävää — teknologia tekee sen, mikä tehtiin ennenkin, paremmin tai kätevämmin; kaksi ylempää (Muokkaaminen, Uudelleenmäärittely) *muuttavat* sitä — tehtävä itsessään muuttuu joksikin, mikä ei aiemmin ollut mahdollista. [[ai-education|Tekoälykoulutuksessa]] SAMR on vakiintunut linssi kysymykseen siitä, käytetäänkö [[generative-ai|generatiivista tekoälyä]] olemassa olevan käytännön asteittaiseen parantamiseen vai oppimisen uudelleenajatteluun, ja se kulkee [[tpack|TPACKin]] rinnalla tapana kuvata, miten opettajat integroivat teknologiaa, ei miksi he hyväksyvät sen.

## Pohdittavaksi

- Kun kurssille tuodaan tekoäly, onko kyseessä korvaaminen ([[conversational-ai|chatbot]] korvaa hakukentän) vai uudelleenmäärittely (tehtävä tulee mahdolliseksi, mitä ei ennen ollut)? Mikä määrää, mikä taso on sopiva — ja onko muutos aina tavoite?
- SAMR ja [[technology-acceptance-model|teknologian omaksumismallit]] vastaavat eri kysymyksiin: omaksumisteoria kysyy, *miksi* opettaja tai instituutio hyväksyy työkalun; SAMR kysyy, *miten syvällisesti* työkalu muuttaa oppimista. Mihin kysymykseen tietty tekoälyn integrointia koskeva tutkimus oikeastaan vastaa?
- [[meta-analysis-systematic-review|Systemaattinen katsaus]] tekoälyn integroinnista [[higher-ed|korkeakoulutuksessa]] havaitsi, että useimmat käytöt sijoittuivat korvaamisen tai laajentamisen tasolle ja vain yksi tutkimus lähestyi uudelleenmäärittelyä. Jos tämä on tyypillistä, mitä se kertoo tekoälyn potentiaalin ja luokkahuonetodellisuuden välisestä kuilusta?
- SAMR:ään viitataan usein [[teacher-education|opettajien]] [[educational-development|ammatillisessa kehittämisessä]] auttamaan kouluttajia suunnittelemaan teknologian käyttöä. Muuttaako oppitunnin SAMR-tason luokittelu sitä, mitä opettaja todella tekee, vai onko se lähinnä kuvaava leima?
- Kriitikot väittävät, että SAMR, kuten [[tpack|TPACK]], nojaa humanistiseen ontologiaan, joka pitää kognitiota teknologian muuttumattomana, eikä sano mitään vallasta, datan omistajuudesta tai tasa-arvosta. Riittääkö integraatiotason linssi, vai tarvitseeko tekoälyaikakauden integraatio kriittisemmän kehyksen?

## Johdanto

SAMR kuvaa oppimistehtävien teknologisen muutoksen syvyyttä. Sen neljä tasoa muodostavat nousevan asteikon parantamisesta muutokseen: **Korvaaminen** (työkalu korvaa toisen ilman toiminnallista muutosta — chatbot hakukoneen sijaan), **Laajentaminen** (työkalu korvaa ja parantaa — tekstinkäsittelyn oikeinkirjoituksentarkistus kirjoituskoneen sijaan), **Muokkaaminen** (tehtävä suunnitellaan merkittävästi uudelleen — opiskelijat työstävät reaaliaikaisesti yhteistä tekoälyn tuottamaa luonnosta) ja **Uudelleenmäärittely** (uudet, aiemmin käsittämättömät tehtävät tulevat mahdollisiksi — oppijat luovat yhdessä generatiivisen mallin kanssa tavoilla, joilla ei ole vastinetta ilman tekoälyä). Mallia käytetään laajasti [[ai-technologies|koulutusteknologian]] [[research-methods-aied|tutkimuksessa]] ja [[educational-development|opettajien ammatillisessa kehittämisessä]] sanastona teknologian integroinnin suunnitteluun ja arviointiin, ja se on vakiokumppani [[tpack|TPACKille]] ja [[technology-acceptance-model|teknologian omaksumisen]] viitekehyksille — vaikka vastaakin eri kysymykseen kuin kumpikaan niistä.

## Mitä neljä tasoa tarkoittavat

- **Parantaminen (alempi puolisko):** Korvaaminen ja laajentaminen parantavat olemassa olevaa tehtävää muuttamatta sen luonnetta. Suurin osa rutiininomaisesta tekoälyn käytöstä — [[automated-question-generation|kysymysten tuottaminen]], nopea tekstintuotto, tiivistäminen — sijoittuu tänne: se on nopeampaa ja kätevämpää mutta ei muuta sitä, mitä oppijalta pyydetään.
- **Muutos (ylempi puolisko):** Muokkaaminen ja uudelleenmäärittely muuttavat tehtävää itseään. [[vibe-coding|Vibe coding]], reaaliaikainen yhteisrakentaminen mallin kanssa ja mukautuva interaktiivinen dialogi ovat tehtäviä, jotka eivät olleet mahdollisia ennen generatiivista tekoälyä, ja edustavat asteikon muutoksen päätä.

SAMR yhdistetään usein [[icap-framework|ICAP-viitekehykseen]], koska kaksi linjautuvat: [[thermomix-genai-education-analogy-2026|Rummel, Nachtigall ja Panadero (2026)]] kartoittavat neljä ruoanlaitosta oppimiseen ulottuvaa skenaariota ICAPin [[student-engagement|sitoutumisen]] muodoiksi SAMR-tasoille — ICAPin *Passiivinen* SAMRin *Korvaamiseen*, *Aktiivinen* *Laajentamiseen*, *Konstruktiivinen* *Muokkaamiseen* ja *Interaktiivinen* *Uudelleenmäärittelyyn* — havainnollistaen etenemistä passiivisesta ulkoistamisesta interaktiiviseen yhteisrakentamiseen.

## Näyttö tietopohjasta

- **Tekoälyn integrointi korkeakoulutuksessa on suurelta osin asteittaista, ei muuttavaa.** [[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh et al. (2026)]] arvioivat PRISMA-systemaattisessa katsauksessa 22 interventiotutkimusta, jotka oli seulottu 959 tietueesta, tekoälyn integroinnin SAMR-mallilla ja havaitsivat, että useimmat tutkimukset keskittyivät **korvaamisen tai laajentamisen** tasolle, harvemmat muokkaamiseen ja vain yksi lähestyi uudelleenmäärittelyä. Tekoäly tuotiin tyypillisesti parantamaan olemassa olevaa käytäntöä — hallitsevina [[automated-assessment|arvioinnin automatisointi]] ja [[personalized-learning|personoidun oppimisen tuki]] — eikä uudelleenajattelemaan opetussuunnitelmia tai [[learning-gains|oppimistuloksia]].
- **SAMR on tavallinen analyyttinen linssi GenAI-vetoiselle [[curriculum-design|opetussuunnitelman]] muutokselle.** [[rewriting-curriculum-genai-pedagogy-2026|Sabani et al. (2026)]] kartoittavat viisi opetussuunnitelman siirtymää (staattisesta dynaamiseen, siirtämisestä kyvykkyyteen, paikallisesta [[governance|institutionaaliseen]]) vakiintuneille linsseille, mukaan lukien SAMR ja konstruktiivinen linjaus, ja käyttävät mallia selventämään niitä [[pedagogy|pedagogisia]] mekanismeja, joilla GenAI muovaa opetussuunnitelmaa.
- **SAMR ja TPACK ankkuroivat opettajien teknologian integraation standardit.** [[crompton-faculty-technology-integration-standards-2026|Crompton et al. (2026)]] sijoittavat kuusi tiedekunnan teknologiastandardia olemassa olevia viitekehyksiä — [[tpack]], RAT, SAMR, SETI — ja standardeja (ISTE, UNESCO, DigCompEdu) vasten; useimmat niistä kohdistuvat [[k-12]]-kouluttajiin tai vain tiedekuntaroolien [[teacher-role|opetusosaan]], jättäen aukon korkeakoulun tiedekuntakehitykseen.
- **SAMR on jälkihumanistisen kritiikin kohde.** [[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed (2026)]] kritisoi TPACKia, SAMRia ja [[ai-literacy]]-malleja siitä, että ne jakavat humanistisen ontologian, joka olettaa rajallisen oppijan, jonka kognitio ei pohjimmiltaan muutu teknologisen välittymisen myötä, ja väittää, etteivät nämä instrumentalistiset viitekehykset voi käsitellä tekoälyn konstitutiivista roolia kognitiossa.
- **Viitekehys integraatiolle, ei viitekehys vallalle.** [[reclaiming-epistemic-agency-co-agency-2026|Poudyal (2026)]] arvioi SAMRin TPACKin ja muiden integraatioviitekehyksien rinnalla ja toteaa, ettei mikään niistä käsittele oikeudenmukaista valtaa, datan omistajuutta tai vastuuvelvollisuutta, mikä motivoi vaihtoehtoisen ekologisen yhteistoimijuusviitekehyksen.
- **Myös opiskelijoiden käyttö kartoittuu SAMRiin, ja palaute ulottuu kaikille tasoille.** 31–36 opiskelijan GenAI-ilmoitusten koodaus [[physics-education|fysiikan]] yksikössä sijoitti oppimisen korvaamisen ja laajentamisen väliin, muotoilun korvaamiseen ja tehtävän tekemisen muokkaamisen ja uudelleenmäärittelyn väliin, kun taas palaute — tarkistaminen, selventäminen, varmentaminen — esiintyi kaikilla neljällä tasolla ([[genai-use-changing-institutional-policy-physics-2026|Quince ja Faulconer (2026)]]).
- **Syvyys ja osallisuus ovat erillisiä akseleita.** [[jita-ai-mathematics-classrooms-inclusion-2026|Jita, Jita ja Omoniyi (2026)]] yhdistävät SAMRin [[universal-design-for-learning|UDL:ään]] 38 lähteen yli ja väittävät, että uudelleenmäärittelyn tason tehtävät voivat silti sulkea pois opiskelijoita, joiden kieli, laite tai verkkoyhteys ei sovi suunnitteluun.

## SAMR, TPACK ja teknologian omaksuminen: miten ne eroavat

Kolme viitekehystä sekoitetaan usein, mutta ne vastaavat erillisiin kysymyksiin:

- **[[technology-acceptance-model|Teknologian omaksumismallit]]** (TAM, UTAUT) selittävät, *miksi* yksilö tai instituutio hyväksyy teknologian ja jatkaa sen käyttöä — koettu hyödyllisyys, helppokäyttöisyys ja sosiaalinen vaikutus.
- **[[tpack|TPACK]]** kuvaa sitä *tietoa*, jota opettaja tarvitsee integroidakseen teknologiaa tehokkaasti — teknologisen, pedagogisen ja aineellisen tiedon vuorovaikutus, joka on tekoälyaikakaudella laajennettu AI-TPACKiksi/GenAI-TPACKiksi.
- **SAMR** luokittelee, *miten syvällisesti* teknologia muuttaa oppimistehtävää parantamisesta uudelleenmäärittelyyn.

SAMR on parasta ymmärtää integraatiosyvyyden linssinä, jota käytetään suunnittelussa ja arvioinnissa ja joka täydentää omaksumisteoriaa (joka selittää käyttöönottoa) ja TPACKia (joka selittää opettajan kyvykkyyttä). Tekoälyaikakaudella sitä käytetään tuottavimmin kysymään, sovelletaanko generatiivista tekoälyä olemassa olevien tehtävien parantamiseen vai aidosti uusien mahdollistamiseen — erottelu, joka kulkee läpi tietopohjan arviointi- ja opetussuunnitelmatutkimuksen.

## Käytännön seuraukset

- **Käytä SAMRia syvyyskysymyksen esittämiseen, älä muutoksen määräämiseen.** Parantaminen ei ole itsessään huonompaa; monet rutiininomaiset tekoälyn käytöt ovat hyväksyttäviä korvaamisia. Malli on diagnostinen ja selventää, mitä tietty käyttö todella muuttaa.
- **Yhdistä se ICAPiin.** SAMR kuvaa, mitä *tehtävästä* tulee; ICAP kuvaa, miten oppija *sitoutuu*. Yhdessä käytettyinä ne erottavat pinnallisen korvaamisen syvästä interaktiivisesta yhteisrakentamisesta.
- **Täydennä sitä omaksumis- ja tasa-arvolinsseillä.** SAMR ei sano mitään siitä, miksi työkalu otetaan käyttöön tai kuka hyötyy. Yhdistä se [[technology-acceptance-model|omaksumismalleihin]] ja [[equity-in-ai-education|tasa-arvon]] analyysiin, jotta syvyysleima ei korvaa [[critical-thinking|kriittistä arviointia]].
- **Kohtele näyttöä asteittaisesta integraatiosta löydöksenä, ei epäonnistumisena.** Jos suurin osa tekoälyn integraatiosta keskittyy korvaamiseen ja laajentamiseen, suunnittelutehtävä ei ole pakottaa uudelleenmäärittelyä vaan tunnistaa, että muuttava käyttö vaatii erilaisia tehtäväsuunnitelmia, ei vain parempia työkaluja.

## Yleiset väärinkäsitykset

**"Korkeampi SAMR-taso tarkoittaa parempaa opetusta."** SAMR on linssi kysymykseen siitä, *uudelleenajatteleeko* tekoäly oppimisen vai *parantaako* se olemassa olevaa käytäntöä; se ei ole laatuluokitus, eikä uudelleenmäärittely ole oikea vastaus jokaiseen tehtävään. Korvaaminen, joka poistaa tuottamattoman vaiheen, on onnistuminen, jota arvioidaan oppimisen eikä tason perusteella.

**"Tekoälyn käyttöönotto etenee tikapuita ylös."** Jakauma on keskittynyt alapäähän. Systemaattinen katsaus tekoälyn integroinnista [[higher-ed|korkeakoulutuksessa]] havaitsi, että **useimmat käytöt sijoittuivat korvaamiseen tai laajentamiseen ja vain yksi tutkimus lähestyi uudelleenmäärittelyä**. SAMRin käytännön käyttö tässä kirjallisuudessa on siksi suurelta osin diagnostista — se nimeää, missä ala todella on.

**"SAMR ja TPACK ovat kilpailevia viitekehyksiä."** Ne kuvaavat eri asioita: SAMR kuvaa tehtävän *muutoksen astetta*, kun taas [[tpack|TPACK]] kuvaa sitä *tietoa*, jota opettaja tarvitsee teknologian hyvään integrointiin. Opettaja voi olla hyvin TPACK-kykenevä ja toimia silti korvaamisen tasolla, minkä vuoksi kahta käytetään yhdessä eikä valita niiden väliltä.

**"Työkalu, joka on muuttava yhdellä tasolla, on muuttava kaikilla tasoilla."** Sama generatiivinen työkalu voi tukea korvaamista yhdellä kurssilla ja uudelleenmäärittelyä toisella, koska taso on tehtäväsuunnittelun ominaisuus eikä teknologian ominaisuus. Tason liittäminen työkaluun tuottaa käyttöönottopäätöksiä suunnittelupäätösten sijaan.

## Liittyvät konseptit

- [[ai-education]] — Tekoäly koulutuksessa (yläkäsite)
- [[tpack]] — Teknologis-pedagoginen aineenosasisältöosaaminen
- [[technology-acceptance-model]] — Teknologian omaksumismallit
- [[icap-framework]] — ICAP-viitekehys kognitiivisesta sitoutumisesta
- [[ai-technologies]] — Tekoälyteknologiat ja -menetelmät
- [[teacher-ai-competency]] — Opettajan tekoälykompetenssi
- [[educational-development]] — Koulutuksen kehittäminen
- [[learning-design]] — Oppimissuunnittelu
- [[k-12]] — K-12-koulutus
- [[higher-ed]] — Korkeakoulutus
- [[generative-ai]] — Generatiivinen tekoäly

## Liittyvät artikkelit

- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Tekoälyn integrointi korkeakoulutuksessa arvioituna SAMRilla: pääosin korvaamista ja laajentamista
- [[thermomix-genai-education-analogy-2026]] — ICAP ja SAMR neljän ruoanlaitosta oppimiseen ulottuvan skenaarion kartoituksessa
- [[rewriting-curriculum-genai-pedagogy-2026]] — SAMR yhtenä linssinä GenAI-vetoiselle opetussuunnitelman muutokselle
- [[crompton-faculty-technology-integration-standards-2026]] — SAMR yhtenä tiedekunnan teknologiastandardeja ohjaavista viitekehyksistä
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] — SAMRin humanistisen ontologian jälkihumanistinen kritiikki
- [[reclaiming-epistemic-agency-co-agency-2026]] — SAMRin vaikeneminen vallasta, datan omistajuudesta ja vastuuvelvollisuudesta
- [[genai-use-changing-institutional-policy-physics-2026]] — Opiskelijoiden GenAI-käyttö muuttuvissa institutionaalisissa politiikoissa: käyttöfunktiot kartoittuina SAMR-tasoille (Quince & Faulconer 2026)
- [[jita-ai-mathematics-classrooms-inclusion-2026]] — AI in Mathematics Classrooms: A Synergistic Strategy for Diversity and Inclusivity
