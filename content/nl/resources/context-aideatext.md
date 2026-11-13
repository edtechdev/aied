---
title: "conText"
created: "2026-11-12T19:22:00-05:00"
updated: "2026-11-13T12:50:00-05:00"
type: resource
summary: "Een gratis tutor in de browser die een foto van een schrift, een pdf of een tekst leest en de student er in het Engels of Spaans socratisch doorheen praat, terwijl hij live een graaf tekent van de ideeën die de student al sprekend verbindt."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
translation_of: resources/context-aideatext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

conText is de schoonste kleine demonstratie van een richting waar [[intelligent-tutoring|AI-tutoring]] veel over praat en die zelden wordt geïmplementeerd: het model beantwoordt de vraag van de student niet, het stelt de volgende, en de ideeën van de student worden als een graaf getekend terwijl die praat. Upload een foto van een schriftpagina, een pdf of een tekst, en de tool zegt eerst wat hij heeft begrepen en begint dan een gesproken [[socratic-method|socratische]] dialoog. Elk idee dat de student noemt verschijnt als een knoop in een live [[knowledge-graph|kennisgraaf]]; randen verschijnen wanneer het gesprek ze verbindt, en het paneel meldt hoeveel ideeën nog niet verbonden zijn.

## Wat je ermee kunt doen

De lus is bewust kort. Materiaal gaat erin (tot 10 MB, acht pdf-pagina's of 15.000 tekens tekst), de tutor leest het terug, en het gesprek gaat met stem — de site zegt dat de tutor niet beoordeelt en niet voor de student schrijft. De graaf is het artefact dat de sessie achteraf de moeite waard maakt: hij laat zien welke ideeën de student werkelijk in verband heeft gebracht en welke los bleven, wat een veel specifiekere zaak is om te bespreken dan een chattranscript. De sessie kan als graaf-XML-bestand worden geëxporteerd en op een andere dag opnieuw worden geüpload om verder te gaan, en de verwijderknop wist haar meteen; anders gooit de server haar na een uur weg.

Die combinatie — een tutor die het antwoord achterhoudt, plus een visueel verslag van het redeneren — valt precies binnen wat [[scaffolding|scaffolding]] en [[metacognition|metacognitieve]] reflectie proberen te bereiken, en geeft een docent iets concreets om naar te vragen in plaats van een afgerond essay of een juist getal. De eigen framing van de site is dat een juiste uitkomst het begrip niet meer bewijst zodra generatieve AI haar kan produceren, dus het proces moet zichtbaar zijn.

## Voor wie het bedoeld is

Studenten die een leesopdracht of een oefenset doorwerken en ondervraagd willen worden in plaats van antwoorden te krijgen, docenten die een laagrisicocontrole willen of een student ideeën kan verbinden, en docentontwikkelaars die een concreet voorbeeld van procesbewijs zoeken. Docenten hebben een curriculumafgestemde gids in het Engels, Spaans, Portugees en Frans; de tool zelf draait in het Engels en Spaans, en de walkthrough-video is in het Spaans.

## Notities en kanttekeningen

Voor de tool voor studenten zijn geen prijs of account gepubliceerd, terwijl institutionele uitrol — cloud, on-premises of hybride — via een voorstel op maat en een gesprek wordt aangeboden; beschouw 'gratis' als de staat van de publieke demo in november 2026, niet als een garantie. Tekst en afbeeldingen gaan naar een gehoste dienst op basis van Claude, en de site zelf zegt gebruikers namen, bedragen, adressen en bedrijfsnamen te verwijderen voordat ze uploaden, wat de last van het anonimiseren bij de uploader legt in plaats van bij het platform. Sessies verwijderen zichzelf na een uur tenzij ze zijn geëxporteerd. Het bedrijf erachter verkoopt ook een breder beoordelingsplatform op redeneergrafen aan instellingen, en zijn claims over het onderscheiden van deductieve, inductieve, abductieve en analogische grafen komen uit vier referentieteksten — de site noemt dat een demonstratie, met validatie op schaal nog in het verschiet.

## Gerelateerde concepten

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
