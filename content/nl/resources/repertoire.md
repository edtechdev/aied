---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Een webapplicatie voor het bouwen van stapsgewijze AI-opdrachten waarin de docent de rol van het model en de begrenzingen van het studentgebruik instelt, en de identiteit van de student buiten de context van het model blijft."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Een builder voor AI-geïntegreerde opdrachten, gebouwd door Joseph Slade aan Oregon State University en beheerd door AI Education Labs, Inc. Het uitgangspunt is dat het alternatief voor een chatbot waar alles mag niet verbod is maar structuur: de docent bepaalt de stappen die een student doorloopt, beslist welke rol het model bij elke stap speelt, en stelt in hoeverre een student erop mag leunen. De opdracht wordt vervolgens gepubliceerd als een deelnamelink in plaats van verspreid als een promptdocument.

## Wat u ermee kunt doen

- **Stel de rol van het model per opdracht in.** De builder biedt presets als tutor, socratische vragensteller, feedbackgever en onderzoeksassistent, plus een eigen prompt, zodat de assistent zich gedraagt zoals de taak vereist.
- **Zet begrenzingen tussen stappen.** Een stap kan vereisen dat een student zijn redenering uitlegt voordat hij verdergaat, en AI-hulp kan per stap worden gemaximeerd — de interface toont een resterend aantal in plaats van onbeperkte toegang.
- **Kies het werkvlak.** Studenten schrijven op een documentpagina met opmerkingen in de kantlijn, waarbij chat- en notebook-indelingen beschikbaar zijn wanneer die beter bij de taak passen dan een pagina.
- **Publiceer en volg de redenering, niet alleen de uitvoer.** Een deelnamelink schrijft studenten in, voortgang wordt gaandeweg opgeslagen, en de docent kan het transcript van elke student lezen en exporteren als CSV of Markdown.
- **Maak een concept met AI en verfijn het daarna.** De setup kan beginnen vanuit een paar vragen, een geüploade bestaande opdracht of een eerdere opdracht, waarbij een assistent aan de docentkant een eerste concept invult.

De gepubliceerde voorbeelden suggereren de beoogde reikwijdte: een natuurkundetaak over bewijs en getuigenis, een biologie-oefening die de redeneerfout in de uitleg van een AI-stagiair diagnosticeert, en een psychologietaak die controleert of een nieuwsbericht de opzet van een studie beschrijft.

## Voor wie het is

Docenten in het hoger onderwijs die willen dat [[learning-design|learning design]] het AI-beleid draagt — dat wil zeggen: die liever begrenzen hoe een model binnen een taak gebruikt mag worden, dan bewaken of het überhaupt gebruikt is. De begrenzingen en rol-instellingen zijn een uitdrukking van [[guardrails|vangrails]] tijdens het ontwerpen, en de app is bedoeld voor cursuswerk, niet voor institutionele chat-implementatie.

## Opmerkingen en kanttekeningen

- **Pilotfase.** De voorwaarden stellen dat de dienst momenteel kosteloos wordt aangeboden voor pilots en dat betaalde abonnementen met aankondiging kunnen worden ingevoerd, en dat functies kunnen veranderen of worden ingetrokken. Er is geen openbare prijspagina; u bereikt de prijzen pas na inloggen.
- **De privacyclaim is architectonisch, en verdient nauwgezette lezing.** Elke student krijgt per opdracht een willekeurige sessie-identifier, de koppeling van studentaccount naar sessie blijft op de server van Repertoire, en het model ontvangt de anonieme sessie, de opdrachtcontext en het geschreven werk van de student. De kanttekening staat in het beleid zelf: tekst die een student typt en die hem identificeert, wordt verzonden als elke andere tekst, en de cursusdocent kan de transcripts lezen.
- **Inference door derden.** Antwoorden worden gegenereerd via de Claude-API van Anthropic, met de API van OpenAI als back-up, onder commerciële voorwaarden die volgens het beleid per September 2026 training op API-invoer en -uitvoer uitsluiten. Een instelling zou dit via haar eigen overeenkomst moeten bevestigen, niet via een webpagina.
- **Het is geen beoordelaar.** Zowel het beleid als de voorwaarden beschrijven oordelen van de assistent zoals "doel behaald" als hulpmiddelen voor de docent; cijfers en academische beslissingen blijven bij de docent en de instelling, en beslissingen over [[ai-use-disclosure|openbaarmaking van AI-gebruik]] aan studenten worden aan de docent overgelaten.
- **In de VS gehost.** Data staat in Google Cloud Firestore met hosting door Vercel, en het beleid behandelt FERPA-verplichtingen waar de dienst onderwijsrecords verwerkt; gebruikers buiten de Verenigde Staten krijgen te horen dat hun data daar wordt verwerkt.

## Gerelateerde concepten

- [[learning-design]] — gestructureerd opdrachtdesign als het punt waarop AI-beleid concreet wordt.
- [[guardrails]] — betrokkenheidsdrempels en gemaximeerde AI-hulp als ontwerpbeperkingen.
- [[ai-use-disclosure]] — de docent, niet het platform, beslist hoe AI-gebruik aan studenten wordt openbaargemaakt.
