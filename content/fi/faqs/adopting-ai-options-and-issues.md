---
title: "Mitä vaihtoehtoja ja kysymyksiä on harkittava, kun tekoälytyökaluja otetaan käyttöön?"
created: "2026-11-12T19:32:00-05:00"
updated: "2026-11-12T19:32:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
source_updated: "2026-11-12T17:10:00-05:00"
translation_of: faqs/adopting-ai-options-and-issues
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Osastopäälliköllä on kolme tarjousta [[intelligent-tutoring|tekoälyohjaus]]alustasta ja perjantain määräaika. [[teacher-role|Opettaja]] haluaa käyttää ilmaista työkalua, jota puolet henkilökunnasta käyttää jo. Tietohallintojohtajalta kysytään, pitäisikö oppilaitoksen ajaa omaa malliaan, eikä hän osaa sanoa, mitä se maksaisi.

Nämä ovat sama kysymys kolmella korkeudella. Vaihtoehtoja on vähemmän kuin toimittajaluettelo antaa ymmärtää, ja ongelmat kestävät pidempään kuin mikään tuote.

Valinnan pitäisi vastata sitä päätöstä, joka on edessä. Yksilö päättää, mitä työkaluun syötetään. Oppilaitos päättää, kuka saa käyttää mitä mallia, millä tiedoilla, millä kustannuksella ja kuka vastaa, kun jotain menee pieleen. Useimmat huonot käyttöönotot syntyvät siitä, että oppilaitostason kysymykseen vastataan yksilön työkalulla.

## Lyhyt versio

Viisi sääntöä kattaa suurimman osan. Määritä tietojen raja ensin, sillä kaikesta muusta voi neuvotella uudelleen, mutta siitä ei. Valitse pienin sopiva muoto: ilmaiset tai ulkoistetut työkalut pilotointiin, isännöity alusta, kun tarvitset tietojen hallintaa ilman GPU:ita, yhdyskäytävä, kun tarvitset kiintiöitä ja reititystä, ja oma päättelylasku vain silloin, kun kolme muuta pettävät. Vertaa käyttäjäkohtaista ja kulutuksen mukaista hinnoittelua omiin lukuihisi, sillä suurin osa käytöstä tulee yleensä muutamalta raskaalta käyttäjältä. Tee hyväksytystä polusta nopeampi kuin hyväksymättömästä, sillä EDUCAUSE havaitsi, että 94 % henkilökunnasta ja opettajista käyttää tekoälyä työssään, 54 % tuntee käytännön ja 56 % käyttää työkaluja, joita oppilaitos ei tarjoa. Päätä sitten etukäteen, mikä näyttö saisi sinut lopettamaan, sillä käyttöönotosta, jolla ei ole lopetustestiä, tulee oletuksena pysyvä.

## Yksilön tasolla

Opettaja tai opiskelija tekee tietopäätöksen ennen opetuspäätöstä. Opiskelijoiden nimet, henkilökohtaisen opetuksen järjestämistä koskevat suunnitelmat, kurinpitomuistiinpanot ja julkaisematon tutkimus luovat vastuun, joten poista tunnistetiedot ensin ja tarkista, tekeekö työkalu silti tehtävänsä. Lue sitten ehdot: säilytys, syötteillä kouluttaminen ja alihankkijat ovat yleensä asiakirjassa, jota kukaan ei avaa, ja jos vastausta ei löydy viidessä minuutissa, pidä sitä tuntemattomana.

Tunne, missä työkalu on hyvä. Tuotettu teksti on vahimmillaan luonnostelussa, uudelleenjäsentämisessä ja tiivistämisessä ja heikoimmillaan laskennassa, viittauksissa ja kaikessa, mikä vaatii ajantasaisia faktoja. Tiedä myös, mitä se sinulle maksaa. Ilmainen taso on ilmainen siksi, että käyttö on tuote tai että taso muuttuu, ja molemmat ovat syitä pitää mielessä poistuminen.

Kaksi kysymystä jää. Keihin muihin se vaikuttaa, sillä kurssia muovaava työkalu on päätös kurssin opiskelijoille. Ja onko se sallittua: lue käytäntö kerran, jos sellainen on, ja jos ei ole, [[shadow-ai]]-näyttö viittaa siihen, että teet jo käytäntöä oletuksena.

Tyly nyrkkisääntö: käytä hyväksyttyä työkalua, kun se on ulottuvillasi, ja kun ei ole, kirjoita muistiin, mitä teit ja miksi. Se merkintä suojaa sinua, jos arviointia kyseenalaistetaan myöhemmin.

## Oppilaitoksen tasolla

Oppilaitos ostaa yhdellä hankinnalla palvelun, tietovirran, tukivelvoitteen ja poliittisen sitoumuksen. Todellinen valikko koostuu kuudesta muodosta, ja useimmat oppilaitokset ovat kahdessa tai kolmessa niistä tietämättään.

Helpoin aloitus on ilmainen ulkoistettu työkalu. Contact Northin AI Tutor Pro ei vaadi tiliä, ja Playlab antaa kouluttajien rakentaa sovelluksia omaan [[curriculum-design|opetussuunnitelmaansa]] nojaten toimittajan isännöidessä malleja. Molemmat käyvät pilotointiin ja ovat huonoja pysyväksi ratkaisuksi: ei auditointijälkeä, ei kiintiöiden hallintaa ja ehdot, jotka voivat muuttua.

Paikkojen ostaminen kaupallisesta vuokraympäristöstä – oli se sitten [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot tai Google Gemini for Education – tuo nopean hankinnan, SSO:n ja hallintakonsolin, ja jättää mallin valinnan ja säilytyksen toimittajalle.

Isännöity alusta pitää tiedot lähempänä. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) asennetaan omaan AWS-tiliin, ja Vanderbiltin pilotissa raportoitiin noin \$3 käyttäjää kohden kuukaudessa 1,300 käyttäjällä, joista puolet alle \$1 tokeneissa. Se ostaa tietojen hallintaa ilman GPU:ita.

Yhdyskäytävä useiden toimittajien päälle tuo yhden etuoven monen eteen. Se kantaa kiintiöt, SSO:n, lokituksen ja alueellisen reitityksen; Fontys ajoi sellaista 300 käyttäjälle \$500 kuukausikatolla, jota ei koskaan ylitetty, ja [MindRouter](/aied/resources/mindrouter/) lisää roolipainotetun ajastuksen ja energiamittauksen.

Oma päättelylasku on kallein muoto ja itsenäisin. Purduen kaksi palvelua saavuttivat yli 1000 käyttäjää 10+ [[open-source]]-mallilla noin \$100,000 laitteistolla ennen henkilöstökuluja. Se vastaa valvojalle kysymättä toimittajan lupaa.

Viimeinen muoto on tekoäly työkaluissa, joita jo ajat: Moodlen kysymystyyppi, keskustelualustan tekoälykumppani, esseen palautetyökalu. Vähän vaivaa ja kurssikohtaista muutosta, mutta keskushallinnossa opitaan vähän.

## Ongelmat, jotka eivät poistu

[[privacy|Tietosuoja]] tulee ensin. Ratkaisevaa on, mikä tietue on nyt olemassa ja oli ennen olematon, missä se sijaitsee ja kuka voi hakea sen. Työkalu, joka vastaanottaa luokkaluettelon, on luonut oppilaitoksen tietueen riippumatta siitä, mitä sopimuksessa sanotaan.

Seuraavaksi tulevat identiteetti ja pääsy. Kaikki laajassa käytössä oleva tarvitsee SSO:n, roolipohjaisen pääsyn ja käytöstä poistamisen, ja työkalu, joka ei osaa poistaa lähtevän työntekijän käyttöoikeuksia, jättää pysyvän tilin, jossa on sinun tietosi.

Kustannukset riippuvat siitä, miten hinta lasketaan. Käyttäjäkohtainen hinnoittelu palkitsee henkilömäärän ja kulutusperusteinen käytön. Koska pieni osa käyttäjistä tuottaa yleensä suurimman osan tokeneista, käyttäjäkohtainen näyttää halvalta, kunnes raskaat käyttäjät siirtyvät muualle.

Mittaus on yleensä puuttuva pala. EDUCAUSE havaitsi, että 92 %:lla oli työhön liittyvä tekoälystrategia ja 13 % mittasi sijoitetun pääoman tuottoa. Jos et osaa sanoa, mitä työkalu korvasi, et voi puolustaa uudistamista.

[[equity-in-ai-education|Yhdenvertaisuus]] ja saavutettavuus kuuluvat hankintaan, eivät myöhempään korjaukseen. Työkalu, joka vaatii nopean yhteyden, maksullisen tason tai englannin kielen sujuvuutta, jakaa hyötynsä epätasaisesti.

[[academic-integrity|Akateeminen rehellisyys]] muuttaa sitä, mitä arviointi mittaa. Kun työkalu pystyy tekemään tehtävän, tehtävä on se, joka pitää uudistaa.

Henkilöstö ja toimittajariippuvuus painavat yhtä paljon kuin hinta. Jokainen yllä oleva muoto paitsi ilmainen tarvitsee omistajan, ja tavallinen epäonnistuminen on ostaa neljäs tai viides muoto ja miehittää se sillä, joka oli jo kiireinen. Kysy, mitä tapahtuu uudistuksen, hinnanmuutoksen ja mallin poistumisen kohdalla; yhdyskäytävämuodot ovat olemassa siksi, että vastaus on reitityksen muutos eikä migraatio.

## Millainen on hyvä ensimmäinen vuosi

Valitse kaksi tai kolme mittaria ennen kuin mitään käynnistetään: kuka sitä käytti, mihin, mitä se maksoi aktiivista käyttäjää kohden ja mikä työssä muuttui. Pilotti, joka ei pysty tuottamaan näitä lukuja, on demo, jolla on budjetti.

Tarkista reunaehdot samaan aikaan. Jos työkalu koski opiskelijatietoja, vastasiko tietovirta sitä, mitä kerroit tietosuojavastaavalle? Jos käyttöä ei mitattu, johtuiko se siitä, ettei työkalu osannut raportoida vai siitä, ettei kukaan kysynyt?

Pidä hyväksytty polku lyhyenä. EDUCAUSEn luvut viittaavat siihen, että ihmiset kiertävät hallintoa, koska hyväksytty reitti kestää kauemmin kuin tehtävä. Yhdyskäytävä, jossa on mallikortti ja saman päivän pääsy, on hallintaväline yhtä lailla kuin IT-mukavuus.

## Yleiset virheet

Alustan ostaminen ennen ongelman nimeämistä tuottaa käyttötilastoja ja vähän muuta. Ilmaisen pitäminen strategiana toimii pilotissa ja epäonnistuu infrastruktuurina. Paikallinen malli muuttaa sitä, kehen voidaan kohdistaa todistajakutsu; se ei päätä, säilytetäänkö kehotteet. Tyytyväisyyden mittaaminen vaikutuksen sijaan muuttaa ”opettajat pitivät siitä” löydökseksi, jota se ei ole. Ja käytäntö, joka julkaistaan ilman toimivaa polkua, kuvaa mieltymyksiä eikä sääntöjä.
