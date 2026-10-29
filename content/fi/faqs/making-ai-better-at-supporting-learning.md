---
title: "Miten voimme saada tekoälyn tukemaan oppimista paremmin omassa oppiaineessamme?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Tiketti sanoo ”hienosäädä malli kurssimateriaaleillamme”. Budjetti on hyväksytty, GPU on varattu ensi kuulle ja jatko-opiskelijaa on pyydetty kokoamaan aineisto. Kukaan puhelussa ei ole kysynyt, mitä pelkkä kehote saa pisteiksi tai mitä avainsanahaku saa pisteiksi samoihin kysymyksiin.

Kysy nuo kaksi kysymystä ensin. Tässä tietopohjassa yleisen mallin ja kurssikyvykkään mallin välinen ero on enimmäkseen maadoituksen ja kehotteistuksen ongelma, ja näyttö tuosta järjestyksestä on poikkeuksellisen suoraa: kurssiavustajatutkimuksessa tiedonhaku, ei malli, oli ensimmäisen asteen päätös, ja yleinen malli ilman maadoitusta sai pisteitä *alle* yksinkertaisen TF-IDF-vertailutason.

Kouluttaminen on todellista ja joskus tarpeellista. Se on kolmas tai neljäs asia, jota kannattaa kokeilla, ja alla oleva työ on järjestetty niin, että saat selville, minkä askelman todella tarvitset, ennen kuin kulutat vuosineljänneksen laskentabudjetin.

## Lyhyt versio

**1.** Kirjaa ylös, mitä pelkkä kehote saa pisteiksi ja mitä triviaali leksikaalinen menetelmä saa pisteiksi, ennen kuin muutat mitään. Tuo toinen luku pitää sinut rehellisenä.

**2.** Laita omaan materiaaliin kohdistuva tiedonhaku mallin eteen. Se on suurin yksittäinen täällä raportoitu hyöty suhteessa kustannuksiin, ja se on peruutettavissa.

**3.** Kehittele kehotetta arviointimatriisiasi vasten ja iteroi, kunnes parannus pysähtyy. Tasanne on merkki siitä, että kouluttaminen voisi lisätä jotain.

**4.** Mukauta painoja [[llm-training-and-fine-tuning|LoRA:lla]], kun tavoite on vakaa ja kapea: formaatti, arviointimatriisi, luettavuustaso, alan sanasto.

**5.** Jälkikouluta, kun ongelma on käyttäytyminen eikä sisältö, ja kirjoita palkkio sellaista vertailumittaria vasten, jonka odotat olevan manipuloitavissa.

**6.** Rakenna harjoitusaineisto vaihetasolla. Pelkkiin vastauksiin perustuva aineisto ei opeta väärinkäsitystä.

## Hanki vertailutaso, jonka voit todella voittaa

Ennen kuin muutat mitään, kirjaa, mitä pelkkä kehote palauttaa. Kirjaa sitten, mitä triviaali menetelmä palauttaa.

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Kurssitietopohjan avustajan]] tutkimus on jo yksinään lukemisen arvoinen. Paikallinen LLM ilman tiedonhakua ylsi **52,3 %:n** tarkkuuteen. TF-IDF-vertailutaso, vuosikymmeniä vanha leksikaalinen menetelmä, ylsi **55,4 %:iin**. Malli oli huonompi kuin klassinen menetelmä.

Jos ohitat tämän vaiheen, et voi tietää, auttoiko hienosäätösi. Pahempaa: voit julkaista järjestelmän, jonka avainsanahaku voittaa, ja saada sen tietää vasta kun opetusassistentti mainitsee siitä. Kaksi lukua laskentataulukossa, iltapäivässä otettuna, suojaavat loppubudjetin.

## Maadoita malli omiin materiaaleihisi

[[rag|Tiedonhaulla laajennetun generaation]] lisääminen kurssimateriaalien päälle ilman mitään hienosäätöä nosti saman järjestelmän 52,3 %:sta **66,6 %:iin**. Hyöty tuli hakemistosta, ja siihen liittyy ominaisuus, jota koulutusajo ei tarjoa: kun asiakirjasi muuttuvat, indeksoit uudelleen.

Kaksi muuta tulosta osoittavat samaan suuntaan. PRISMA-katsaus 23 empiirisestä tutkimuksesta tekoälyn räätälöinnistä [[writing-education|kirjoitusopetukseen]] osoitti **kehotteistuksen hallitsevaksi (N = 13), hienosäädön edellä (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Siellä, missä tietopohjan on pysyttävä ajan tasalla, tiedonhaku on ainoa vipu, joka pysyy ajan tasalla ilman koulutusajon uudelleenajoa.

Tiedonhaulla on myös pedagoginen muoto. Mallin maadoittaminen omiin malliesimerkkeihisi ja arviointimatriiseihisi on se, miten se pysyy suunnittelemasi [[scaffolding|tukemisen]] sisällä ja vastaa asettamallasi tasolla ajautumatta yleisiin neuvoihin. Tuo ajautuminen on yleisin valmiiden tuutoreiden valitus, ja se on useammin tiedonhaun ongelma kuin painojen ongelma.

## Kirjoita kehote arviointimatriisiasi vasten ja seuraa tasannetta

Kehotetyö ei ole alkutyö, jota tehdään GPU:ta odotellessa. Kaksi tulosta osoittaa, mitä sillä saavutetaan yksin:

- **Arviointimatriisin ohjaama kehotteistus, jota hiottiin iteratiivisesti yhdessä, nosti LLM:n ja ihmisen yksimielisyyden opiskelijoiden suunnittelutyöstä 54,75 %:sta 81,25 %:iin** (Cronbachin alfa 0,393:sta 0,798:aan) ilman mitään hienosäätöä ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Kirjallisuuteen nojaava räätälöity kehote nosti tavoiteltujen matemaattisten [[misconceptions|väärinkäsitysten]] esiintymisen **0,98:aan**, kun laaja kehote sai **0,40** ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Käytännön signaali on **tasanne**. Kohdetehtävien tuottamista koskevassa tutkimuksessa iteratiivinen kehotteen hienosäätö lakkasi parantamasta, ja GPT-4.1:n hienosäätö *optimoidulla kehotteella* lisäsi jäljellä olevan hyödyn ([[gpt-item-generation-l2-listening-2026]]). Tosissaan tehdyn kehotetyön jälkeen saavutettu tasanne on näyttöä siitä, että kouluttamisella on tilaa lisätä jotain. Kouluttamiseen tarttuminen ennen tasanteen saavuttamista on arvailua, ja arvailu maksaa kuukauden.

Huomaa, mitä kohdetehtävien tulos merkitsee järjestyksen kannalta. Hienosäätö rakennettiin optimoidulle kehotteelle, joten kehotetyö ei mennyt hukkaan, kun tiimi lopulta koulutti. Halpa askelma on myös kalliin askelman määrittely.

## Mukauta painoja, kun tavoite on vakaa ja kapea

Mukauttaminen kannattaa, kun tarvitset mallin pitämään ominaisuuden luotettavasti: luettavuustason, tuotosformaatin, alan, jota siltä puuttuu. Toistuva tulos on, että **kohdentaminen voittaa koon**.

- Kolme **8B**-mallia, jotka hienosäädettiin asiantuntijoiden suunnittelemalla lasten lukemisohjelmalla, päihittivät nollakutsu-GPT-4o:n ja Llama 3.3 70B:n vaikeustasoon liittyvillä mittareilla, ja turvallisuusongelmat olivat vähäisiä. Kirjoittajat kehystävät tämän **hallittavuudeksi skaalan sijaan** ([[llm-children-reading-story-generation]]).
- **24 795 esimerkin** ohjausaineisto, joka maadoitettiin intialaisiin tietojärjestelmiin, tuotti **7B**-hienosäädön, joka sai **6,39** viiden arvioijan ulkoiselta paneelilta eli **0,15** sisään vahvasta yleisestä vertailumallista murto-osalla käyttöönottokustannuksista. Sama perusmalli sai **lähes nollan alakohtaisilla ulottuvuuksilla** ilman hienosäätöä ([[iks-instruct-dataset-indian-knowledge]]). Tuo ero yleisesti pätevän ja tässä pätevän välillä on koko perustelu alakohtaiselle mukauttamiselle.
- Yksi [[llm-training-and-fine-tuning|LoRA]]-sovitin, joka koulutettiin noin **3 900** yhdistetyllä arvioidulla esimerkillä, nosti viisi pientä avointa mallia (4B:stä 30B:hen) samaan tai parempaan tasoon ihmisarvioijan kanssa kahdessa tietojenkäsittelytieteen tentissä ([[llm-graders-computer-science-exams-2026]]). Yksi sovitin, yksi aineisto, useita perusmalleja: se on käyttöönoton muoto, jonka pieni tiimi voi toteuttaa.

Sana *vakaa* otsikossa kantaa painon. Formaatti, arviointimatriisi, luettavuustaso ja alan sanasto ovat vakaita tavoitteita. Harkintaa täynnä olevalla proosalla ei ole sellaista tavoitetta, ja siinä mukauttaminen epäonnistuu, kuten seuraavat kaksi jaksoa osoittavat.

## Muuta käyttäytymistä, kun vastaukset ovat ongelma

Mukauttaminen opettaa mallille, *mitä tuottaa*. Jälkikoulutus opettaa sille, *miten käyttäytyä*. Tuutoroinnissa tuo ero on koko ongelma: yleiset mallit on jälkikoulutettu ihmisten mieltymyksellä avuliaisuuteen, mikä tarkoittaa nopeaa vastaamista, ja opettaminen edellyttää vastauksen pidättämistä.

Tämän tietopohjan vahvimmat koulutukselliset tulokset ovat täällä. EduQwenin palkkiomalli asetti eksplisiittisesti **ohjaavat vastaukset suorien vastausten edelle**, ja sen kolmivaiheinen putki ylsi **96,52 %:iin** CDPK-vertailumittarissa Gemini-3 Pron **90,55 %:a** vastaan ([[singh-eduqwen-pedagogical-rl-2026]]). SWIMin kirjoitussimulaattori eteni arviointimatriisiin nojaavasta kehotteistuksesta (paras QWK **0,577**) ohjattuun hienosäätöön (**0,474 ± 0,023**) ja vahvistusoppimiseen (**0,618 ± 0,005**) jokaisella piirteellä ja kehotteella ([[swim-student-writing-simulation-2026]]).

Lue SWIMin luvut huolellisesti, koska keskimmäinen askel meni taaksepäin. Demonstraatioilla tehty ohjattu hienosäätö teki simulaattorista huonomman kuin kehote, josta se lähti, ja vain palkkiosignaali palautti menetyksen ja päihitti sitten vertailutason. Jos suunnitelmasi pysähtyy ohjattuun hienosäätöön, suunnitelma voi olla harhapolku.

## Ohjaa vaihetasolla

Yksi löydös on helppo ohittaa ja kallis jättää huomiotta: **ohjauksen laatu voittaa ohjauksen määrän**. Ohjehienosäädetyt mallit oppivat algebran väärinkäsitykset vain, kun ne koulutettiin **vaihetason ratkaisujäljillä**. Pelkillä loppuvastauksilla koulutettuna tarkkuus pysyi **alle 30 %:n jokaisella aineistokoolla** ([[misconception-acquisition-dynamics-llms-2026]]).

Jos harjoitusesimerkkisi ovat kysymys ja oikea vastaus -pareja, koulutat väärää asiaa, eikä esimerkkien lisääminen korjaa sitä. Tarvitset välivaiheen työn: harha-askeleen, vaiheen jossa opiskelija eksyi, korjauksen. Sen kerääminen on datatekniikan ongelma, jossa on pedagoginen rajoite, ja se tarkoittaa yleensä istuntojen lokittamista vastausavainten keräämisen sijaan.

## Missä mukauttaminen epäonnistuu hiljaa

Tämä on se osa, jonka innostus ohittaa.

**Harkintaa täynnä oleva teksti.** WrAFTissa sama projekti, joka hienosääti onnistuneesti esseiden *pisteyttämiseen* (QWK 0,84), tuotti katkaistua ja jäsentämätöntä tuotosta hienosäätäessään *palautetta*, kun taas Claude 3.7:n suora kehotteistus tuotti palautteen, jonka opettajat arvioivat parhaaksi ([[wraft-automated-writing-evaluation-argumentative-2026]]). Hienosäätö opetti mallin saavuttamaan pistemäärän, ja pisteyttäminen oli ainoa asia, jonka se oppi.

**Siirto mallien välillä.** Skaala ei ole luotettava ennustaja myöhemmälle suoriutumiselle LoRA-mukautuksessa, ja **samat hyperparametrit tuottivat laadullisesti erilaista käyttäytymistä eri arkkitehtuureilla** ([[aiawe-automated-writing-evaluation]]). Resepti, joka toimi yhdellä mallilla, ei ole resepti.

**Arkkitehtuuri parametrimäärän edellä.** Kolmen avoimen teksti-kuva-mallin hienosäätö 1 000 kuvitetulla ydintekniikan kuvalla paransi Stable Diffusion XL:ää merkittävästi, antoi rajallista hyötyä SD-v3.5-Mediumille eikä tuottanut lainkaan mitattavaa parannusta Flux.1:lle ([[nuclear-diffusion-text-to-image-learning-2026]]).

**Ongelma oli validointi.** Huippuluokan kouluttamaton GPT-4 tuotti noin **35 %** liian yleisiä, virheellisiä tai vastauksen paljastavia vihjeitä laatiessaan tuutorointipalautetta, ja sen omat automaattiset laaduntarkistukset olivat eri mieltä ihmisen harkinnan kanssa ([[reddig-maclellan-personalized-feedback-llm-2026]]). Se on suodatusongelma, eikä LoRA ratkaise sitä.

Kuvio kaikissa neljässä: mukauttaminen siirtää mallia luotettavasti kohti tavoitetta, jonka voit määritellä ja pisteyttää. Se ei lisää harkintaa, ja putki, josta puuttuu tarkistus, julkaisee silti huonoa tuotosta.

## Budjetoi mukauttaminen rehellisesti

Mukauttamisen askelmalla rima on matalampi kuin useimmat tiimit olettavat: **muutama sata tai muutama tuhat esimerkkiä ja yksi GPU**. LoRA kouluttaa pienen määrän lisättyjä parametreja ja jättää peruspainot jäädytetyiksi, joten useita malleja voi tarjoilla yhdestä sovittimesta.

Rank on kompromissi eikä nuppi, jota maksimoidaan. Hyöty miljoonaa sovittimen parametria kohden laski monotonisesti rankin noustessa, ja kurssitason kohdistus oli koko- ja rank-päätös eikä ilmainen päivitys ([[lora-finetuned-control-systems-course-qa-2026]]).

Se, mitkä kerrokset mukautat, on myös todellinen valinta. **Vain neljän viimeisen Transformer-kerroksen** päivittäminen BERT-pohjaisessa diskurssianalyysissa päihitti sekä vain ylimmän kerroksen mukauttamisen että täyssyvyisen hienosäädön ([[bert-discourse-english-teaching-2026]]). Kolme kokoonpanoa, kolme erilaista tulosta, ja halvin voitti.

Kustannus, joka on helppo aliarvioida, on arviointi, ja se on suurempi kuin laskentabudjetti. Ks. [[checking-whether-educational-ai-works|Mistä tiedämme, toimiiko koulutuksellinen tekoäly oikein eikä vain pisteytä hyvin?]]

## Kalibroi odotuksesi

Mallin ja kehotteen valinta yhdessä selittävät vain noin **15 %** LLM:ien ja opiskelijoiden oppimistulosten välisestä epäsuhdasta, ja tuossa tutkimuksessa vertailumittarien painotus ja yksimieliseen äänestykseen perustuvat yhdistelmät tekivät kohdistuksesta *huonompaa* ([[educational-llm-alignment]]). Esikoulutusdata on hallitseva vipu siihen, miten malli käyttäytyy, ja se on ainoa vipu, jota et voi vetää.

Mikään tuosta ei argumentoi yllä olevaa työtä vastaan. Se argumentoi sitä vastaan, että hienosäädön odotettaisiin korjaavan suunnitteluongelman. Jos ongelma on, että tuutorisi vastaa liian helposti, kouluttaminen voi auttaa. Jos ongelma on, että oppijasi eivät sitoudu siihen, kouluttaminen ei auta, ja 15 %:n luku sanoo, että raha on parempi käyttää muualla.

## Mitä tiimit ymmärtävät väärin

Hienosäätö on se, miten opetat mallille kurssisi. Tiedonhaku omista materiaaleista vei saman järjestelmän 52,3 %:sta 66,6 %:iin ilman mitään kouluttamista, ja arviointimatriisia vasten hiottu kehote siirsi yksimielisyyden 54,75 %:sta 81,25 %:iin. Kouluttaminen opettaa käyttäytymistä ja formaattia paljon luotettavammin kuin sisältöä.

Suurempi perusmalli poistaa tarpeen kaikelle tälle. 8B-malli, joka hienosäädettiin lasten lukemisohjelmalla, päihitti nollakutsu-GPT-4o:n ja Llama 3.3 70B:n vaikeusmittareilla, ja 7B-hienosäätö asettui 0,15 sisään vahvasta yleisestä vertailumallista murto-osalla käyttöönottokustannuksista. Koko ja sopivuus ovat eri akseleita, ja vain toista niistä myydään tokeneittain.

Suurempi aineisto korjaa väärin rakennetun harjoitusaineiston. Pelkkiin vastauksiin perustuva ohjaus jätti tarkkuuden alle 30 %:n jokaisella aineistokoolla väärinkäsitystutkimuksessa. Skaala ei korjaa tavoitetta, josta puuttuu mallin tarvitsema tieto.

Resepti, joka toimi yhdellä mallilla, toimii seuraavalla. Samat hyperparametrit tuottivat laadullisesti erilaista käyttäytymistä eri arkkitehtuureilla, ja sama hienosäätömenetelmä paransi yhtä kuvamallia merkittävästi eikä tehnyt mitään mitattavaa toiselle. Aja resepti uudelleen omalla perusmallillasi tai arvailet.

Ohjattu hienosäätö on turvallinen välivaihe ennen vahvistusoppimista. SWIMissä ohjattu vaihe sai 0,474 sen kehotteen 0,577:ää vastaan, jonka se korvasi, ja vain palkkiosignaali palautti sen. Välivaihe voi maksaa kuukauden ja regression.

## Mitä sinulle tullaan vastaamaan

**”Budjetti on hyväksytty hienosäätöön, joten hienosäädetään.”** Käytä viikko vertailutasoon ja indeksiin ensin. Jos tiedonhaku siirtää lukua, hienosäätö on myöhempi päätös, joka tehdään paremmilla tiedoilla, ja sinulla on vahvempi perustelu sille tai hyvä syy palauttaa GPU.

**”Ongelmamme on, että opiskelijat eivät käytä sitä.”** Kouluttaminen muuttaa sitä, mitä malli tuottaa. 15 %:n luku kuvaa, kuinka paljon mallin ja kehotteen valinta selittää epäsuhdasta oppimistuloksiin, ja sitoutuminen on sen ulkopuolella. Instrumentoi, missä opiskelijat putoavat pois, ennen kuin ostat laskentatehoa.

**”Emme voi lähettää opiskelijoiden töitä toimittajan API:in.”** Vahvin LoRA-tulos täällä tuli avoimista malleista 4B:stä 30B:hen, ja yksi sovitin tarjoili useaa niistä. Tuo käyttöönoton muoto on sellaisen tiimin saatavilla, jolla on yksi GPU eikä lainkaan tietojenkäsittelysopimusta.

**”Kehotteistus on kikka, oikea työ tarkoittaa kouluttamista.”** Katsaus 23 kirjoitusopetuksen tutkimuksesta osoitti kehotteistuksen hallitsevaksi lähestymistavaksi ja hienosäädön sen perässä, ja tämän sivun suurin raportoitu hyöty tuli hakemistosta. Sekä katsaus että kurssiavustajatutkimus järjestivät nuo askelmat mitatun hyödyn mukaan.

**”Yritimme kehotteistusta ja se tasoittui, joten tarvitsemme kouluttamista.”** Se on oikea tulkinta, ja se on ainoa tapaus, jossa kiipeäminen on perusteltua. Vie optimoitu kehote hienosäätöön kuten kohdetehtävien tiimi teki, ja odota hyödyn olevan pienempi kuin kehotetyön.

**”Kurssimateraalimme ovat epäjohdonmukaisia, joten tiedonhaku palauttaa roskaa.”** Palauttaa, ja tiedonhaku perii korpuksen laadun. Korpuksen siivoaminen on halvempaa kuin mallin kouluttaminen kiertämään sitä, ja hyöty 52,3 %:sta 66,6 %:iin mitattiin tavallisilla kurssimateriaaleilla eikä kuratoidulla joukolla.

## Mitä tehdä tällä viikolla

**1.** Aja pelkän kehotteen vertailutaso ja avainsanahaku 50:llä kurssisi oikealla kysymyksellä ja kirjoita molemmat luvut ylös.

**2.** Kohdista tiedonhaku materiaaleihin, jotka sinulla jo on, ja aja samat 50 uudelleen, jotta hyöty mitataan omaa vertailutasoasi vasten.

**3.** Laita arviointimatriisi järjestelmäkehotteeseen ja iteroi viikon ajan. Lopeta, kun kaksi kierrosta ei lisää mitään.

**4.** Auditori harjoitusaineistosi vaihetason jälkien varalta. Jos se on kysymys- ja vastauspareja, aineisto ei ole valmis.

**5.** Kirjoita se yksi ominaisuus, joka sinun on saatava pidettyä luotettavasti, ja päätä, onko se käyttäytymistä vai sisältöä. Tuo päätös valitsee askelman.

## Mihin seuraavaksi

[[training-ai-tutors-to-guide-rather-than-answer|Miten koulutamme tekoälytuutorin ohjaamaan opiskelijoita vastaamisen sijaan?]] käsittelee jälkikoulutuksen puoliskon yksityiskohtaisesti. [[checking-whether-educational-ai-works|Mistä tiedämme, toimiiko koulutuksellinen tekoäly oikein?]] käsittelee sitä, miten tietää, toimiko mikään siitä. [[developing-ai-tutor|Mitkä ovat parhaat käytännöt tehokkaan tekoälytuutorin kehittämiseen?]] on saman tavoitteen vuorovaikutussuunnittelun puoli, ja [[designing-educational-ai-software|Mitkä ovat parhaat käytännöt koulutuksellisen tekoälyohjelmiston suunnitteluun?]] käsittelee ympäröivää järjestelmää. Koko käsitesivu on [[llm-training-and-fine-tuning|LLM:ien kouluttaminen ja hienosäätö]].
