---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Avoimen lähdekoodin joukko yhdestätoista Claude Code -taidosta, jotka auditoivat kurssin opetussuunnittelun näyttöpohjaa vasten ja merkitsevät jokaisen suosituksen näyttötasollaan."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**idstack** on avoimen lähdekoodin kokoelma yhdestätoista taidosta näyttöön perustuvaan [[learning-design|opetussuunnitteluun]], jaettu Claude Code -liitännäisenä ja oheisena Chrome-sivupaneelilaajennuksena. Kurssin luonnostelemisen sijaan taidot auditoivat kurssia: ne luokittelevat tavoitteet uudistetun Bloomin taxonomian mukaan, tarkistavat konstruktiivisen linjakkuuden tavoitteiden, aktiviteettien ja arviointien välillä, merkitsevät kognitiivisen kuormituksen ongelmat ja tarkistavat saavutettavuuden WCAG 2.1 AA:ta ja Universal Design for Learningia vasten. Jokaisella suosituksella on näyttötaso T1:stä meta-analyyseille ja satunnaistetuille kokeille T5:een asti asiantuntijamielipiteelle. Projekti ilmoittaa, että sen viittaukset nojaavat 108 vertaisarvioituun tutkimukseen yhdellätoista tutkimusalueella; luku on projektin oma väite, ja sen lähdeluettelo on julkaistu Markdownina, jotta arvioija voi tarkistaa sen.

Kurssit tulevat sisään Canvas API -yhteyden, IMS Common Cartridge -tiedoston, SCORM-paketin, kirjoitustyökalun PDF-viennin tai liitettyjen asiakirjojen kautta. Jaettu projektimanifesti muistaa kurssin istuntojen yli, ja putkitaito ketjuttaa suunnitteluvaiheet ohittaen valmiin työn. Katselmoinnit raportoivat kahdeksaa Quality Matters -standardia ja Community of Inquiry -kehystä vasten erottaen opetuksellisen, sosiaalisen ja kognitiivisen läsnäolon, ja järjestävät sitten suositukset vakavuuden mukaan.

## Mitä on tiedettävä ennen käyttöönottoa

Liitännäinen vaatii Claude Coden ja bash-kuoren asennukseen; PowerShell ja cmd eivät voi ajaa asennusskriptiä, ja Python 3 on suositeltu pistetrendejä varten. Kurssidata pysyy projektikansiossa lukijan omalla koneella ja poistuu sieltä vain käyttäjän käynnistämän integraation kautta, kuten Canvas API -kutsun. Chrome-laajennuksen reaaliaikainen päättely tarvitsee lukijan oman ilmaisen Google AI Studio -API-avaimen, vaikka simulointitila esittelee sen ilman sitä. Projekti merkitsee itsensä betaksi versiossa 3.5.1.0 ja varoittaa rikkovista muutoksista aliversioiden välillä, ja se on julkaistu savvides-GitHub-tilin eikä nimetyn tekijän kautta.

## Liittyvät käsitteet
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
