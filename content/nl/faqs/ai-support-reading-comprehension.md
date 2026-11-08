---
title: "Hoe kan AI studenten ondersteunen bij lezen en leesbegrip?"
created: "2026-11-06T01:45:00-05:00"
type: faq
connected_faqs: [ai-multilingual-learners, reducing-over-reliance]
weight: 62
foundations: [ai-education]
pedagogy: [scaffolding, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
ethics: [accessibility]
audience: [instructors, curriculum designers, instructional designers]
level: [higher ed, secondary, primary education]
updated: "2026-11-08T04:27:04-05:00"
translation_of: "faqs/ai-support-reading-comprehension"
source_updated: "2026-11-06T02:10:00-05:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Als u welk vak dan ook geeft, kiest u teksten, past u ze aan en beslist u of een bron te moeilijk is voor uw studenten. AI kan bij elk van die taken helpen, maar de moeilijkheidscijfers die het u geeft zijn geen metingen van moeilijkheid — het zijn schattingen over een gemiddelde tekst en een gemiddelde lezer, en de lezers die u feitelijk onderwijst kunnen ver van gemiddeld zijn. Deze FAQ vertelt u waar de hulpmiddelen echt helpen, waar ze falen en wat u eraan kunt doen.

## Wat AI echt kan doen

**Teksten op schaal vinden en aanpassen.** AI is sterk in het vinden van bronnen, het vereenvoudigen van woordenschat, het genereren van woordenlijsten en het omzetten van een passage in een [[study-with-ai|studiegids of samenvatting]]. Gebruik het voor de mechanische delen van leesvoorbereiding — scannen, nivelleren, sleutelbegrippen eruit halen — en houd de menselijke controle op wat ertoe doet.

**Modelleer de lezer in plaats van de tekst.** Omdat lezervariabelen veel van het signaal dragen in hoe moeilijk een tekst aanvoelt, voorspellen hulpmiddelen die de lezer profileren de ervaren moeilijkheid beter dan welke formule dan ook. In de grootste studie van de kennisbank beoordeelden 193 Duitse middelbare scholieren 3.954 zinnen, en profielgebaseerde modellen (beste ensemble-RMSE 0,822 tegen een gemiddelde baseline van 1,070) versloegen de Flesch-scores van de teksten, die hetzelfde materiaal veel moeilijker beoordeelden dan studenten het ervoeren — 72,8% van de annotaties was gemakkelijk of zeer gemakkelijk ([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck en Conrad, 2025]]). De praktische versie: de beoordelingen van een paar studenten van een passage verslaan het label van welke formule dan ook.

## Waar AI tekortschiet

**Moeilijkheidslabels zijn geen metingen.** Een label als „gemiddeld” of een Flesch-score beschrijft het oppervlak van de tekst, niet de ervaring van uw studenten. Lezerskenmerken — thuis gesproken taal, zelf ingeschatte vaardigheid, zelfs geslacht — droegen meer signaal dan tekststatistieken in de studie hierboven, en de overeenstemming tussen annotatoren was laag (Krippendorffs alfa = 0,23), juist omdat ervaren moeilijkheid tussen lezers verschilt. Behandel formules en labels als hypothesen, en kalibreer ze tegen de studenten die de tekst moeten lezen.

**Een AI vragen om uw studenten te vervangen werkt ook niet.** In dezelfde studie konden met rollenspel gepromptde ChatGPT en Claude de waargenomen moeilijkheid van studenten niet reproduceren, zelfs niet met gelabelde voorbeelden — een LLM kan een lezer niet goed genoeg [[simulating-students|simuleren]] om een tekst voor u te beoordelen ([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck en Conrad, 2025]]).

**Door AI geschreven tekst leest anders dan menselijk proza.** Bij 14 modellen gebruikt AI-taal te veel zeldzame laagfrequente woorden en gestapelde zelfstandige naamwoorden, laat het optionele woorden weg en loopt het langere dependentieketens dan genre-gematcht menselijk schrijven; de effecten zijn sterker in meerbeurtige chat dan in eenbeurtige essays, wat de auteurs verbinden met de druk van iteratieve conversatie ([[clark-ai-generated-language-readability-2026|Clark, Martin en Mahowald, 2026]]). Gegenereerde uitleg en gegenereerd leesmateriaal dragen beide dit profiel, dus een door AI opgestelde tekst kan moeilijker te verwerken zijn dan het gemeten leesniveau suggereert.

**AI-samenvattingen kunnen het lezen vervangen.** Een hulpmiddel dat een artikel in een samenvatting verandert, is nuttig voor triage, maar als de samenvatting het lezen vervangt, verliezen studenten de begripsoefening waarvoor de opdracht bestond — dezelfde valkuil als [[reducing-over-reliance|overmatige afhankelijkheid]] elders.

## Wat u eraan kunt doen

**Voordat u een tekst opgeeft,** haal een tweede mening buiten het hulpmiddel: scan hem zelf, let op het AI-prozaprofiel hierboven als hij is gegenereerd, en — het sterkste bewijs — vraag een of twee studenten hem te proberen. Een pilot van 5 minuten met echte lezers scoort hoger dan welk moeilijkheidsalgoritme dan ook.

**Wanneer u een tekst met AI aanpast,** houd de aanpassing zichtbaar en controleerbaar. Origineel en vereenvoudigde versie naast elkaar laten studenten (en u) zien wat er veranderd is, en geven meertalige lerenden een steiger die het origineel niet verbergt ([[ai-multilingual-learners|hoe AI met meertalige lerenden omgaat]] gaat in op de risico's voor taalgeschiktheid).

**Wanneer u een leeshulpmiddel of -interface beoordeelt,** vraag of het de individuele lezer modelleert of één globaal label stempelt. Voor tweedetaallezers is het verschil vaak het hele verhaal. Voor onderzoekers is het open probleem meting: de pagina [[reading-education|leesonderwijs]] brengt vier onderzoekslijnen in kaart — ondersteuning tijdens het lezen, lezen beoordelen, adaptieve tekst en de meetvraag onder alle drie ([[educational-measurement|meting]] is de zwakke schakel in de keten) — en rapporteert het bewijs als veelbelovend maar ongelijk, dus sterke claims over de leesvoordelen van een hulpmiddel verdienen hetzelfde scepticisme als elke [[checking-whether-educational-ai-works|AI-leerclaim]].
