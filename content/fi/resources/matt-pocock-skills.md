---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Matt Pocockin avoimen lähdekoodin kokoelma pieniä, yhdisteltäviä agenttitaitoja, mukaan lukien moni-istuntoinen opetustaito, armoton kyselytaito ja ohjeita sellaisten asiakirjojen kirjoittamiseen, joita agentti voi seurata."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**Skills for Real Engineers** on Matt Pocockin julkaisema agenttitaitojen hakemisto: pieniä, yhdisteltäviä ohjetiedostoja, jotka asennetaan Claude Codeen, Codexiin tai toiseen agenttiin ja jotka on kirjoitettu mukautettaviksi eikä kokonaisina omaksuttaviksi. Suurin osa kokoelmasta palvelee ohjelmistotyötä, mutta useat taidot ovat opetusvälineitä, jotka rakennettiin opettamista ja kysymistä varten eikä koodia varten.

Selkein esimerkki on `teach`, joka toimii useiden istuntojen yli ja kohtelee työhakemistoa tilallaan olevana opetustyötilana, joten oppijan edistyminen ja avoimet kysymykset säilyvät keskustelujen välillä sen sijaan, että ne alkaisivat joka kerta alusta. `grill-me` ja sen taustalla oleva `grilling`-primitiivi haastattelevat käyttäjää armottomasti suunnitelmasta, kunnes jokainen haara on ratkaistu – se on [[socratic-method|sokraattinen kysely]] uudelleenkäytettävänä menettelynä eikä keskustelun sävynä. `wait-what` vastaa heti, kun viesti ei mene perille, muotoilemalla sen uudelleen selkokielellä ja puuttuvalla kontekstilla – liike, jonka jokainen opettaja tunnistaa seurattuaan selityksen epäonnistuvan ensimmäisellä kerralla. `writing-for-agents` käsittelee sitä, miten kirjoitetaan asiakirjoja, joita [[prompt-engineering|agentti]] voi seurata, mikä on nykyään käytännöllinen muoto ohjeiden kirjoittamiselle [[pedagogical-agent|tekoälylle]] kurssimateriaalista. `to-questionnaire` muuttaa päätöksen kyselylomakkeeksi sille, joka osaa vastata siihen, `handoff` tiivistää keskustelun asiakirjaksi, josta toinen agentti voi jatkaa, ja `wizard` tuottaa interaktiivisen läpikäynnin vaiheille, jotka vain ihminen voi suorittaa.

## Mitä on tiedettävä ennen käyttöönottoa

Kaikki on [[open-source|avointa lähdekoodia]] MIT-lisenssillä ja vapaasti otettavissa lähtökohdaksi paikalliseen [[ai-literacy|tekoälylukutaitoon]] tai [[self-directed-learning|itseohjautuvaan opiskeluun]]. Käyttö on laajaa ja nopeasti liikkuvaa: noin 270 000 tähteä ja 23 000 haarautumaa syyskuussa 2026 tarkistettaessa, ja uusin commit 18. syyskuuta 2026. Varaus koskee laajuutta. Taidot olettavat [[human-ai-collaboration|insinöörin]] työkontekstin, ne on jaettu insinöörityön, tuottavuuden, vanhentuneiden ja työn alla olevien koreihin, joten osa merkinnöistä on selvästi keskeneräisiä tai poistettu käytöstä, ja README toimii samalla uutiskirjeen tilauslomakkeena. Kohtele opetus- ja kyselytaitoja siirrettävänä osana ja oleta, että kirjoitat minkä tahansa niistä uudelleen ennen kuin asetat sen opiskelijoiden eteen.

## Liittyvät käsitteet
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
