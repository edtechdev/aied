---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Een opensource-set van elf Claude Code-skills die een cursus toetsen aan de bewijsbasis van instructional design en elke aanbeveling van een bewijsniveau voorzien."
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
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

**idstack** is een opensource-verzameling van elf skills voor op bewijs gebaseerd [[learning-design|instructional design]], verspreid als Claude Code-plugin met een bijbehorende zijpanelextensie voor Chrome. De skills ontwerpen geen cursus, maar auditen er een: ze classificeren leerdoelen tegen de herziene taxonomie van Bloom, controleren constructieve afstemming tussen doelen, activiteiten en toetsing, markeren problemen met cognitieve belasting, en beoordelen toegankelijkheid tegen WCAG 2.1 AA en Universal Design for Learning. Elke aanbeveling draagt een bewijsniveau, van T1 voor meta-analyses en gerandomiseerde trials tot T5 voor deskundigenmening. Het project stelt dat zijn citaties putten uit 108 peerreviewde studies in elf onderzoeksdomeinen; dat aantal is de eigen bewering van het project, en de bibliografie is gepubliceerd in Markdown zodat een beoordelaar die kan controleren.

Cursussen komen binnen via een Canvas API-verbinding, een IMS Common Cartridge-bestand, een SCORM-pakket, een pdf-export uit een authoringtool, of geplakte documenten. Een gedeeld projectmanifest onthoudt de cursus tussen sessies, en een pipeline-skill schakelt de ontwerpfasen aaneen en slaat voltooid werk over. Beoordelingen rapporteren tegen de acht Quality Matters-standaarden en het Community of Inquiry-kader, met scheiding van onderwijskundige, sociale en cognitieve aanwezigheid, en rangschikken aanbevelingen daarna naar ernst.

## Wat u moet weten voordat u het gebruikt

De plugin vereist Claude Code en een bash-shell om te installeren; PowerShell en cmd kunnen het installatiescript niet draaien, en Python 3 wordt aanbevolen voor scoretrends. Cursusdata blijft in de projectmap op de eigen machine van de lezer en verlaat die alleen via een integratie die de gebruiker aanroept, zoals een Canvas API-aanroep. De live-inferentie van de Chrome-extensie vereist de eigen gratis Google AI Studio API-sleutel van de lezer, al demonstreert een simulatiemodus hem zonder sleutel. Het project noemt zichzelf bèta op versie 3.5.1.0 en waarschuwt voor brekende wijzigingen tussen minorversies, en het is gepubliceerd onder het savvides GitHub-account en niet door een genoemde auteur.

## Gerelateerde concepten
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
