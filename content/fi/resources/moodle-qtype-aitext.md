---
title: "Moodlen AI-tekstikysymystyyppi"
created: "2026-11-12T20:10:00-05:00"
updated: "2026-11-12T20:10:00-05:00"
type: resource
summary: "Avoimen lähdekoodin Moodle-kysymystyyppi (GPL v3), joka arvostelee vapaatekstivastaukset suurella kielimallilla kysymyskohtaisen kehotteen ja valinnaisen pisteytysmallin mukaan, käyttäen OpenAI:ta, Azurea tai itse isännöityä Ollama-mallia ja näyttäen tekoälyn palautteen ihmisarvostelijalle."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/moodle-qtype-aitext
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

Useimmat tekoälyvisailuintegraatiot lähettävät jokaisen vastauksen kiinteään arvostelukutsuun. Tämä Moodle-kysymystyyppi tekee päinvastoin: opettaja kirjoittaa arviointikriteerit. Jokaisessa kysymyksessä on **kehote**, joka kertoo mallille, miten vastausta arvioidaan, ja valinnainen **pisteytysmalli**, joka kuvaa, miten pisteet myönnetään, joten kohta ”kirjoita lause imperfektissä” voi määrittää kymmenen pistettä virheettömyydestä, nolla rikkoutuneesta kieliopista ja miinus yksi piste jokaisesta kirjoitusvirheestä. Malli palauttaa arvosanan ja [[feedback|palautteen]], ja opettaja voi nähdä palautteen vastauksen vieressä arvostellessaan käsin.

## Mitä sillä voi tehdä

Lisää AIText-kysymys mihin tahansa Moodle-visailuun, kirjoita kehote ja pisteytysmallit ja testaa kehotteita muokkauslomakkeen AJAX-**kehote-testarilla** sen sijaan, että kävisit läpi esikatseluyrityksiä. Arvostelu kulkee kahden rinnakkaisen kysymyskäyttäytymisen (välitön ja viivästetty) kautta, jotka on asennettava kysymystyypin rinnalle, mikä pitää tekoälyarvostelun erillään Moodlen ydinkäyttäytymisistä; olemassa olevat yritykset, jotka käyttivät vanhaa `interactivecountback`-käyttäytymistä, siirtyvät päivityksen yhteydessä. Jos malliin ei saada yhteyttä, arvostelu heikkenee eikä kaadu, joten yritystä ei menetetä. Koska kysymys on natiivinen visailutyyppi, tulokset päätyvät arvosanakirjaan kuin mikä tahansa muu kohde – ja juuri sitä kurssitiimi tarvitsee ennen kuin se voi pitää [[automated-assessment|automaattista arvostelua]] pilottina eikä demona.

Suunnittelu asettaa myös arviointikriteerit sinne, missä [[ai-feedback-quality|palautteen laadusta]] päätetään: kehotteeseen, jonka opettaja kirjoittaa, eikä toimittajan oletukseen. Se on työkalun rehellinen käyttö – kriteerit, jotka voi tarkastaa ja muuttaa – vaikka se tarkoittaa myös, että laadun katto on arviointikriteerit, ja epämääräinen kehote tuottaa epämääräistä arvostelua. Oppilaitokset ottavat sen käyttöön matalan panoksen toistuvissa tarkistuksissa, joihin [[formative-assessment|formatiivinen arviointi]] nojaa ja joissa ihminen lukisi muuten neljäkymmentä lyhyttä vastausta yössä.

## Kenelle se on tarkoitettu

Moodlen ylläpitäjille ja kehittäjille, jotka jo pyörittävät sivustoa, opettajille, jotka haluavat tekoälyarvostelun ilman erillistä alustaa tai kaupallista lisenssiä, ja tutkijoille, jotka tarvitsevat hallittavan arvosteluputken tutkittavaksi. Se vaatii Moodle 4.5:n tai uudemman ja API-yhteyden malliin – joko OpenAI:n tai Azuren Moodlen tekoälyalijärjestelmän kautta tai itse isännöidyn Ollama-instanssin Local AI Managerin kautta, mikä pitää opiskelijoiden tekstit paikallisessa infrastruktuurissa. Liitännäistä ylläpitää Marcus Green, se on Moodlen liitännäismarkkinapaikalla, ja sillä oli 33 tähteä ja 36 haarautumaa, kun tämä sivu vahvistettiin.

## Huomioita ja varauksia

Avoin lähdekoodi GPL v3 tai uudempi -lisenssillä, mutta ilmainen ei tarkoita ilmaista ajaa: joku maksaa mallin API:sta, ja arvostelun laatu riippuu mallin valinnasta ja kehotteen suunnittelusta. Vapaatekstivastaukset lähtevät Moodle-palvelimelta, kun käytetään etäpalvelua, joten oppilaitoksen tietosopimus määrää, mitä saa lähettää; itse isännöity Ollama-reitti on olemassa sivustoille, jotka eivät voi lähettää opiskelijoiden töitä ulos. Repossa ei ilmoiteta julkaistua tarkkuus- tai yhdenmukaisuustutkimusta, joten liitännäistä ei pitäisi ottaa käyttöön olettaen, että LLM-arvostelu vastaa ihmisarvostelua – [[assessment-validity|validiteetti]] on osoitettava paikallisesti ihmispisteitä vastaan ennen kuin millään arvosanalla on painoa. Kumppanikäyttäytymiset ovat kova riippuvuus: pelkän kysymystyypin asentaminen jättää kysymykset arvostelemattomiksi.

## Liittyvät käsitteet

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
