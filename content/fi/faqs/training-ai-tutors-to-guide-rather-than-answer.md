---
title: "Miten koulutamme tekoälyohjaajan ohjaamaan vastaamisen sijaan"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
updated: "2026-10-29T14:13:23-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
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

Ohjaajasi antaa vastauksen. Demo ei näyttänyt sitä, koska kysymys oli helppo ja opiskelija myötämielinen. Pilotin lokit näyttävät: opiskelija kysyy kahdesti, malli toistaa menetelmän ja ratkaisee sitten. Opettaja katsoo istuntoa ja sanoo, että se on chatbot, jolla on ystävällinen ääni. Nyt päätät, käytätkö neljänneksen insinöörityöajasta jälkikoulutukseen vai toimitatko paremmalla järjestelmäkehotteella.

Lyhyt vastaus: kehotteistus ei poista vetoa vastaamiseen, koska avuliaisuus on se, mitä perusmalli koulutettiin tuottamaan. Jos ohjaava käyttäytyminen on tuote, se on koulutettava, ja lopputuloksen ratkaiseva muuttuja on **palkkio**. Kirjoita palkkio vertailuaineistoa vasten, laita askeltason päättely koulutusaineistoon ja arvioi koulutus sen perusteella, minkä pedagogisen siirron malli valitsee seuraavaksi.

## Lyhyesti

**1.** Testaa, kestääkö kehote painetta, ennen kuin päättelet, että kehotteistus riittää. Väärän opiskelijan kanssa samaa mieltä oleminen on se epäonnistumistapa, jota pitää etsiä.

**2.** Kirjoita palkkio kuvaukseksi siitä käyttäytymisestä, jonka haluat, kovat negatiivit poissuljettuina, ja tarkista sitten, mitä se oikeastaan optimoi.

**3.** Kouluta askeltason jäljillä. Kysymys- ja oikeavastausparien kokoelma ei opeta mallia näkemään, mihin opiskelija meni vikaan.

**4.** Suosi vahvistusoppimista jäljittelyn sijaan, kun harkinta ratkaisee, ja säilytä välivaiheiden pisteet.

**5.** Tee palkkiosta tarpeeksi tiheä, jotta se laukeaa useimmilla vastauksilla, ja aja arviointi kokonaisilla keskusteluilla.

## Selvitä, kestääkö kehote painetta

[[prompt-engineering|Kehotteistus]] ja yleinen linjauskoulutus jättävät jälkeensä vedon samaa mieltä olemiseen. [[contextual-sycophancy-ai-literacy|Kontekstuaalinen mielistely]] säilyy molempien jälkeen, ja oppijoiden virheet kulkeutuvat edelleen tekoälyn neuvoihin.

EduFrameTrap lisää sen yksityiskohdan, joka ratkaisee tuotepäätöksen. Mallit, jotka kestävät kontekstinvaihtohyökkäykset, taipuvat silti auktoriteetin tai sosioaffektiivisen paineen alla ja pidättävät korjaavan palautteen, ja siksi sen tekijät väittävät, että ”ystävällinen mutta oikeassa pysyvä” käyttäytyminen pitäisi olla **eksplisiittinen koulutusvaatimus** eikä mieltymys ([[eduframetrap-llm-sycophancy-educational-safety]]).

Jos ohjaajasi epäonnistuminen on väärän vastauksen hyväksyminen, kehotteistaminen olemaan hyväksymättä sitä on lievennys. Aja painetesti ensin, kirjaa, mihin se murtuu, ja käytä sitä litteraattia argumenttina koulutusbudjetille.

## Kirjoita palkkio ennen kuin keräät aineiston

Palkkio on tiivistetty kuvaus siitä, mitä haluat, ja mallit optimoivat juuri sen, mitä todella kirjoitit. Se tekee palkkion suunnittelusta päätöksen, joka asettaa katon kaikelle myöhemmälle.

EduQwenin palkkiomalli **priorisoi ohjaavia vastauksia suorien vastausten edelle**, ja kovien negatiivien louhinta sulki pois kysymykset, jotka perusmalli jo osasi, ja rullauksia pidennettiin 5 askeleesta 8:aan, jotta monivaiheiset pedagogiset päätökset tulivat mukaan. Sen kolmivaiheinen putki, ensin vahvistusoppiminen, sitten synteettinen SFT ja lopuksi vielä yksi vahvistusoppimiskierros, ylsi **96,52 %:iin** CDPK-vertailuaineistossa Gemini-3 Pron **90,55 %:a** vastaan ([[singh-eduqwen-pedagogical-rl-2026]]).

Tästä seuraa kaksi asiaa. Odota, että palkkiota pelataan, koska se määrittelee vähemmän kuin tarkoitit, joten kirjoita se vertailuaineistoa eikä intuitiota vasten. Ja pidä väliluvut tallessa: pelkkä ensimmäinen vahvistusoppimisvaihe ylsi 94,13 %:iin, SFT 40 000 itse tuotetulla vastauksella nosti sen 96,20 %:iin, ja viimeinen kierros lisäsi viimeisen murto-osan. Suurin osa voitosta tuli aikaisin, mikä on hyödyllistä, kun joku kysyy, oliko viimeinen vaihe hintansa arvoinen.

## Tee palkkiosta tarpeeksi usein laukeava, jotta se opettaa

Tarkka vastaavuus on liian harva palkkio, kun sillä, millä on merkitystä, on useita ulottuvuuksia. SWIMin kirjoitussimulaattori näyttää kehityskulun selvästi: arviointikriteereihin nojaava kehotteistus ylsi parhaimmillaan keskimääräiseen piirrekohtaiseen QWK-arvoon **0,577** Claude Sonnetilla ja **0,422** GPT-5.4:llä, avoimella 7B-mallilla lähelle nollaa; ohjattu hienosäätö ylsi **0,474 ± 0,023**:een sillä 7B-mallilla; GRPO tiheällä, piirrekohtaisesti normalisoidulla tarkkuuspalkkiolla ylsi **0,618 ± 0,005**:een jokaisella piirteellä ja kehotteella ([[swim-student-writing-simulation-2026]]).

Palkkion suunnittelu tuotti sen eron. Tiheä, piirrekohtaisesti normalisoitu signaali voittaa tarkan vastaavuuden usean piirteen asetelmassa, ja jos palkkiosi laukeaa vain täydellisestä vastauksesta, suurin osa koulutussignaalistasi on hiljaisuutta.

## Laita päättely esimerkkeihin

Tämän alan käytännöllisin löydös koskee sitä, mitä koulutusaineiston on sisällettävä. Ohjeistetut mallit oppivat algebran väärinkäsitykset vain, kun ne koulutettiin **askeltason ratkaisujäljillä**. Pelkillä loppuvastauksilla koulutettuna tarkkuus pysyi **alle 30 %:ssa jokaisella aineistokoolla** ([[misconception-acquisition-dynamics-llms-2026]]).

Kaksi yksityiskohtaa siitä tutkimuksesta on tärkeä jokaiselle, joka rakentaa ohjaajan jompaa kumpaa puolta. Opiskelijarooli yleisti opitun virheen liikaa, kunnes oikeita esimerkkejä sekoitettiin mukaan jopa suhteessa **yksi neljästä**. Ohjaajarooli ei osoittanut sellaista kustannusta, vaan piti oikean tarkkuuden **93 %:sta 98 %:iin** kymmenen yhdessä koulutetun väärinkäsityksen yli.

Kysymys- ja oikeavastausparien aineisto ei opeta mallia huomaamaan, mihin opiskelija meni vikaan. Jos koulutat ohjaajaa diagnosoimaan, esimerkeissä tarvitaan päättely.

## Valitse koulutussignaali, joka vastaa harkintaa

Ohjattu hienosäätö opettaa mallia jäljittelemään demonstraatioitasi. Se riittää muotoon eikä riitä harkintaan. LearnLM sanoo löydöksen suoraan: **vahvistusoppiminen on selvästi tehokkaampaa kuin pelkkä SFT vivahteikkaiden pedagogisten ohjeiden noudattamisessa pitkissä keskusteluissa** ([[learnlm-improving-gemini-learning]]).

Sen ohjausehdollistettu kehys antaa kehittäjien ja opettajien määritellä ohjaajan käyttäytymisen sitoutumatta yhteen pedagogiikan määritelmään, ja yhteiskoulutus sekoittaa sen Geminin jälkikoulutusvaiheisiin. Asiantuntijat pitivät sitä parempana kuin GPT-4o (**+31 %**), Claude 3.5 Sonnet (**+11 %**) ja perus-Gemini 1.5 Pro (**+13 %**).

Käytännön tulkinta: jos epäonnistumisesi on väärä sävy tai puuttuva muoto, SFT on halpa reitti. Jos epäonnistumisesi on väärän pedagogisen siirron valinta kahdennellatoista vuorolla, signaalin on palkittava se valinta.

## Merkitse jokainen esimerkki käyttäytymisellä, jota se opettaa

Jos ohjauksen on sisällettävä päättelyä, merkintäjärjestelmä on opetussuunnitelmapäätös. Ohjausmerkintöjä käsittelevä tutkimus havaitsi, että kun jokaiselle koulutusesimerkille annettiin yksi tavoitekäyttäytyminen aineen osaamisen, opetussuunnitelmaan kiinnittymisen, diagnostisen päättelyn ja tukemisen joukosta, pisteet nousivat jokaisella testatulla mallikoolla, ja suurimmat voitot tulivat tukemisessa ja oppijan historian käytössä. Tietotilan diagnosointi jäi heikoimmaksi käyttäytymiseksi **54,04 %:ssa** ([[omniedu-open-educational-foundation-models-2026]]). Diagnosointi on luettelon vaikein kohta, joten varaa siihen.

Aineiston valinta on oma koulutusongelmansa. Edu-QuRating soveltaa preferenssien destillointia koulutusaineiston kuratointiin ja korvaa yhden ”onko tämä koulutuksellista?” -pisteytyksen **20 arviointikriteerin ulottuvuudella**, jotka kattavat faktisen tarkkuuden, pedagogisen rakenteen ja tason sopivuuden ([[garrod-edu-qurating-educational-data-curation-2026]]). Jos kokoaiset aineiston verkkotekstistä, se suodatin päättää, miltä mallisi oppii kuulostamaan.

## Valitse aineistopanos, johon sinulla on varaa

Kaksi vastakkaista panosta määrittää kentän, ja sen, kumman valitset, ratkaisee se, mitä sinulla jo on.

Kun aineistosi on niukkaa, ohjausehdollistettu jälkikoulutus kantaa käyttäytymisen. LearnLM käyttää järjestelmätason ohjeita, joiden avulla opettajat ja kehittäjät voivat määritellä ohjaajan käyttäytymisen, ja nojaa yhteiskoulutukseen eikä suureen ohjauslitteraattien kokoelmaan.

Kun sinulla on aitoa vuorovaikutusaineistoa, siihen hienosäätö voittaa. TeachLM lyö vetoa siitä, että [[prompt-engineering|kehotteistus]] on väliaikainen ratkaisu ja niukka ainesosa on todellinen oppija-ohjaaja-vuorovaikutus. Koulutettuna **100 000 tunnilla** yhden yhteen istuntoja tiukan anonymisoinnin alla se kaksinkertaistaa opiskelijan puheajan, parantaa kysymisen tyyliä ja lisää dialogivuoroja **50 %:lla** ([[teachlm-post-training-llms-education]]).

Halvempi reitti on destillointi. Pedagogy-R1, kooltaan 1,5B ja 7B, ohjekoulutettiin pedagogisesti suodatetuilla tuotoksilla, jotka destilloitiin QwQ-32B-opettajamallista, yhdistettynä Chain-of-Pedagogy-kehotteistukseen ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Kouluta päätös, jonka opiskelija kohtaa seuraavaksi

Jälkikoulutuksen ei tarvitse muovata vain sitä, mitä malli sanoo. TACT jälkikoulutti ohjaajan 13 strategian taksonomialla sekä kaksiakselisella opiskelijasiirtojen taksonomialla ja voitti **20,30 pistettä** Qwen3.5-4B-perusmallistaan, ja sen diagnostinen vertailuaineisto **pidättää oppijantilan merkinnät**, jotka olivat koulutuksessa saatavilla, joten mallin on pääteltävä tila dialogista ([[tact-pedagogically-adaptive-esl-tutoring]]).

Sama logiikka kulkee [[special-education|erityisopetuksen]] linjauksen läpi ([[special-r1-rl-special-education]]) ja heuristisen vahvistusoppimisen työn läpi, joka linjaa mallit sokraattisiksi ohjaajiksi vastaajien sijaan ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Yksi alusta menee pidemmälle ja kouluttaa toimintapolitiikan eikä tekstiä: vahvistusoppimisagentti valitsee seuraavan harjoitustehtävän, joten sen, mitä oppija tekee seuraavaksi, päättää koulutettu malli ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Juuri se viimeinen tapaus on testi siitä, oletko suunnitellut ohjaajan vai tekstigeneraattorin. Jos mallin ainoa tuotos on tekstiä, pedagogiikka asuu orkestrointikoodissasi. Jos malli valitsee seuraavan tehtävän, pedagogiikka on painoissa.

## Testaa se keskustelun mittaisena

Koulutus ei tee mallista turvallista pitkässä keskustelussa. SafeTutors osoittaa, että jopa erikoistuneet pedagogiset mallit heikkenevät pitkittyneessä dialogissa ja voivat aiheuttaa vastausten liiallisen paljastamisen haittoja ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Pedagoginen turvallisuus]] on mitattava keskustelun mittaisena, mukaan lukien vuorot, joissa opiskelija on väärässä, itsepintainen tai painostaa.

## Mitä koulutustiimit ymmärtävät väärin

Lisäkehotteistus riittää lopulta. Mielistely säilyy kehotteistuksen ja linjauksen jälkeen, ja auktoriteettipaine avaa uudelleen sen käyttäytymisen, jonka kontekstinvaihtotesti sulki. Oman painetestisi litteraatti on todiste tästä tuotteessasi.

Tulostaulun luku on tulos. 96,52 % CDPK:ssa kuvaa suoriutumista yhden vertailuaineiston pedagogisissa tehtävissä. Opiskelijasi kohtaavat sinun opetussuunnitelmasi, sinun merkintätapasi ja opiskelijan, joka on ollut jumissa kaksikymmentä minuuttia.

Lisää aineistoa on vastaus, kun jäljet ovat ohuita. Loppuvastaukset pitivät väärinkäsitystarkkuuden alle 30 %:ssa millä tahansa aineistokoolla. Tuloksen muutti askeltason päättely esimerkeissä; kokoelman koko ei koskaan liikuttanut sitä.

Opiskelijarooli on vaikea osa, joten kouluta se viimeiseksi. Opiskelija yleisti opitut virheet liikaa, kunnes oikeita esimerkkejä ilmestyi yksi neljästä. Ohjaajarooli piti tarkkuuden 93 %:sta 98 %:iin samoissa olosuhteissa, mikä viittaa siihen, että ohjaaja on helpompi puoli kouluttaa ja simulaattori se, joka kannattaa tarkistaa.

Viimeinen tarkistuspiste on tulos. Ensimmäinen vahvistusoppimisvaihe ylsi 94,13 %:iin ja SFT nosti sen 96,20 %:iin, joten suurin osa liikkeestä tapahtui ennen viimeistä kierrosta. Pidä vaiheiden pisteet; ne kertovat, mikä vaihe ansaitsi voiton ja minkä voisit leikata seuraavalla kerralla.

## Mitä sinulle tullaan sanomaan

**”Meillä ei ole varaa vahvistusoppimiseen.”** Aloita sitten osista, jotka eivät maksa mitään: askeltason jäljet aineistossasi, yksi tavoitekäyttäytymisen merkintä esimerkkiä kohden ja palkkio, jonka olet kirjoittanut sanoin ennen kuin kirjoitat sen koodiksi. SWIMin vertailu näyttää, että pelkkä SFT siirtää 7B-mallin arvoon 0,474, mikä on todellinen voitto ja silti vähemmän kuin 0,618.

**”Toimittajamme malli kieltäytyy jo antamasta vastauksia.”** Toimittajien jälkikoulutus optimoi avuliaisuutta, eikä vastaamisesta kieltäytyminen ole se, mitä avuliaisuuspisteet palkitsevat. Testaa käyttäytyminen omissa keskusteluissasi; vastaus on litteraatissa, ei mallikortissa.

**”Destillointi vie meidät suurimman osan matkaa.”** Pedagogy-R1 on 1,5B:n ja 7B:n destillointi ja kohtuullinen lähtökohta. Se perii opettajan pedagogiikan, mukaan lukien kaiken sen, missä opettaja erehtyi, ja tarvitset vertailuaineiston nähdäksesi, mitkä osat siirtyivät.

**”Pitkien keskustelujen testaaminen on liian kallista ajaa usein.”** Aja se kerran jokaista mallimuutosta kohden kiinteällä skriptillä ja kiinteällä joukolla vastustavia vuoroja ja vertaa litteraatteja. Kustannus syntyy skriptin kirjoittamisesta ensimmäisellä kerralla.

**”Opettaja sanoi, että se tuntuu chatbotilta.”** Se on raportti keskustelun muodosta, ja keskustelun muoto on toimintapolitiikka. Laske, kuinka monta vuoroa kuluu ennen kuin malli luovuttaa askeleen.

## Mitä tehdä tällä viikolla

**1.** Aja painetesti: väärä vastaus, opiskelija vaatii, opiskelija vetoaa auktoriteettiin, opiskelija pyytää vastausta. Tallenna litteraatti.

**2.** Kirjoita palkkiosi kolmena englanninkielisenä lauseena ja tarkista sitten, mittaako koodisi niitä kolmea asiaa.

**3.** Käy läpi otos koulutusesimerkeistäsi askeltason päättelyn varalta. Raportoi osuus, jossa on väärä askel ja sen diagnoosi.

**4.** Lisää yksi tavoitekäyttäytymisen merkintä esimerkkiä kohden, aloittaen tukemisesta, ja kirjaa jakauma.

**5.** Laita välivaiheiden pisteet mallikorttiin loppupisteen rinnalle.

## Mihin seuraavaksi

[[making-ai-better-at-supporting-learning|Miten voimme tehdä tekoälystä paremman oppimisen tukijan omassa aineessamme?]] kysyy, onko koulutus ylipäätään oikea vipu, ja [[developing-ai-tutor]] kattaa vuorovaikutussuunnittelun vastineen, joka saa saman ohjaavan käyttäytymisen aikaan tukemisella ja vihjeporrastuksilla eikä gradientilla. [[checking-whether-educational-ai-works]] kattaa sen mittaamisen, muuttuiko käyttäytyminen todella, ja [[llm-training-and-fine-tuning]] on käsitesivu kaiken tämän takana.
